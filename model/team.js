"use strict";

const nthHighest = require('./util/nth_highest');
const Region = require('./util/region');
const TEAM_OVERLAP_TO_SHARE_ROSTER = 3;

class TeamEvent {
    constructor( event, teamId ) {
        this.event = event;
        this.teamId = teamId;

        let prizeEntry = event.prizeDistributionByTeamId[teamId];
        this.winnings = ( prizeEntry === undefined ) ? 0 : prizeEntry.prize;
    }

    getTeamWinnings() {
        return this.winnings;
    }
}

class TeamMatch {
    constructor( team, match ) {
        if( match.team1 !== team && match.team2 !== team )
        {
            throw new Error( "adding a match to a team that didn't participate in it" );
        }

        this.match      = match;
        this.team       = team;
        this.teamNumber = ( match.team1 === team ) ? 1 : 2;
        this.isWinner   = match.winningTeam === this.teamNumber;
        this.opponent   = ( this.teamNumber === 1 ) ? match.team2 : match.team1;
        this.maps = match.maps;
    }
}

class Team {
    static TeamMatch = TeamMatch;
    static TeamEvent = TeamEvent;

    constructor( rosterId, name, players, isPendingUpdate ) {
        this.rosterId = rosterId;
        this.name = name;
        this.activeRoster = [];
        this.players = players;
        this.teamMatches = [];
        this.wonMatches = [];
        this.matchesPlayed = 0;
        this.eventMap = new Map();
        this.lastPlayed = 0;
        this.modifiers = {};
        this.region = -1;
        this.regionalRank = [-1,-1,-1];
        this.isPendingUpdate = isPendingUpdate;
        this.satisfiesRankingCriteria = false;
    }

    // A past team is considered as the same entity as a more recent one,
    // if it shares enough players.
    sharesRoster( players )
    {
        let overlap = 0;
        players.forEach( pNew => {
            this.players.forEach( pExisting => {
                if( pNew.playerId === pExisting.playerId ) {
                    overlap += 1;
                }
            } );
        } );

        return ( overlap >= TEAM_OVERLAP_TO_SHARE_ROSTER );
    }

    // We only link the team ids from the source data to our teams in the context
    // of an event, because the same team might replace its players and thus would
    // not be considered the same roster -- we don't want to credit the new roster
    // with the old teams winnings, and we do want to credit some players with their
    // past winnings after they have changed teams.
    recordEventParticipation( event, teamId )
    {
        if( event === undefined )
            return;

        if( this.eventMap.has( event.eventId ) )
            return;

        this.eventMap.set( event.eventId, new TeamEvent( event, teamId ) );
    }

    accumulateMatch( match )
    {
        const teamMatch = new TeamMatch( this, match )

        this.teamMatches.push( teamMatch );
        if( teamMatch.isWinner ) {
            this.wonMatches.push( teamMatch );
        }
    }

    setActiveRoster(){
        // include in the active roster only the most recent players who have played five or more matches on this roster.
        let recentPlayers = [];
        let matchCount = 0;
        this.teamMatches.forEach( ( tm, idx ) =>{
            if ( idx < 10 ){
                matchCount = idx;
                let players = tm.teamNumber === 1 ? tm.match.team1Players : tm.match.team2Players;
                players.forEach( player => {
                    if ( recentPlayers[player.nick] === undefined ){
                        recentPlayers[player.nick] = player;
                        recentPlayers[player.nick].totalMatches = 1;
                        recentPlayers[player.nick].mostRecentMatch = idx;
                    } else {
                        recentPlayers[player.nick].totalMatches += 1;
                    }
                })
            }
        } )

        let activeRoster = [];
        let rosterCount = 0;
        for ( let i = 0; i < matchCount; i ++){
            for (const id in recentPlayers ){
                if ( recentPlayers[id].mostRecentMatch === i && recentPlayers[id].totalMatches >= 5 && rosterCount < 5 ){
                    activeRoster[rosterCount] = recentPlayers[id];
                    rosterCount += 1;
                }                    
            };
        }

        this.activeRoster = activeRoster;
    }

    setPluralityRegion() {
        let players = this.activeRoster;
        let teamCountries = players.map( el => el.countryIso );
        let regionAssignment = [0, 0, 0]; //EU, AMER, ROW
        let lowPriorityRepresentation = 0;

        teamCountries.forEach( el => {         
            if ( el !== 'world' ){
                if ( Region.getCountryRegion(el) > -1 )   
                    regionAssignment[Region.getCountryRegion(el)]+=1;
                else
                    lowPriorityRepresentation += 1;
            }
        });

        let lowestPriorityRepresented = 1; //Lowest priority region by default

        if ( lowPriorityRepresentation < players.length )
            lowestPriorityRepresented = Math.min( ...regionAssignment.map( (el, idx) => { return el > 0 ? Region.getRegionPriority(idx) : Infinity } ) );
        
        regionAssignment[ Region.getRegionIdxFromPriority( lowestPriorityRepresented ) ] += lowPriorityRepresentation;

        let maxRegionalRepresentation = Math.max( ...regionAssignment );
        let region = regionAssignment.map( (el, idx) => { return el === maxRegionalRepresentation ? Region.getRegionPriority( idx ) : 0; });
        region = region.map( el => { return el === Math.max( ...region) ? 1 : 0 } ) ;

        this.region = region;
    }


    static initializeSeedingModifiers( teams, context )
    {
        function curveFunction( x ) { return Math.pow( 1 / ( 1 + Math.abs(Math.log10(x)) ), 1 ); }
        function powerFunction( x ) { return Math.pow( x, 1 ) };
        function getCappedPrizePool( x ) { return Math.min( Math.max(1, x.team.eventMap.get( x.match.eventId ).event.prizePool ), 1000000 ) };
        function getLAN( x ) { return x.team.eventMap.get( x.match.eventId ).event.lan ? 1 : 0 };

        let bucketSize = 10; // used for all factors that track your top N results

        // no work to do
        if( teams.length === 0 )
            return;

        // Phase 1: Do calculations we can do directly from this team's data -- we don't rely on
        // any other team info to figure this data out.
        teams.forEach( team => {
            team.matchesPlayed = team.teamMatches.length;
            team.lastPlayed = Math.max( ...team.teamMatches.map( teamMatch => teamMatch.match.matchStartTime ) );
            team.distinctTeamsDefeated = 0;
            team.scaledWinnings = 0;
            team.roundsWon = 0;
            team.roundsPlayed = 0;

            let winnings = [];
            let opponentMap = new Map();
            let lanWins = [];

            // Calculate the most recent match against each opponent, and also the most recent LAN wins.
            team.wonMatches.forEach( wonMatch => {
                // Network
                let opp = wonMatch.opponent;
                let matchTime = wonMatch.match.matchStartTime;
                let prevBestMatchTime = opponentMap.get( opp );
                if( prevBestMatchTime === undefined || prevBestMatchTime < matchTime )
                {
                    opponentMap.set( opp, matchTime );
                }

                // LAN
                let id = wonMatch.match.umid;
                let timestampModifier = context.getTimestampModifier( matchTime );
                let lan = getLAN( wonMatch );
                let matchContext = timestampModifier;
                let scaledLan = lan * matchContext;
                lanWins.push( { id: id, context: matchContext, base: lan, val: scaledLan } );  
            });

            // Performance in matches
            // Calculate the total number of rounds won and rounds played scaled to their recency

            team.teamMatches.forEach( teamMatch => {
                let matchTime = teamMatch.match.matchStartTime;
                let timestampModifier = context.getTimestampModifier( matchTime );
                teamMatch.maps.forEach(map => {
                // determine which side this team was on
                const teamIs1 = teamMatch.teamNumber === 1;
                const teamScore = Number(teamIs1 ? map.team1Score : map.team2Score) || 0;
                const oppScore  = Number(teamIs1 ? map.team2Score : map.team1Score) || 0;

                if ((teamScore === 0 && oppScore === 0) || (teamScore < 0 || oppScore < 0) ) return;

                team.roundsWon += Number(teamScore * timestampModifier) || 0;
                team.roundsPlayed += Number(((teamScore + oppScore) * timestampModifier)) || 0;
                }); 
            });

            // A team's own 'network' is the sum of distinct opponents they defeated, scaled by how long it's been since they defeated them.
            opponentMap.forEach( ( lastWinTime, opp ) => {
                team.distinctTeamsDefeated += context.getTimestampModifier( lastWinTime );
            } );

            // The 'LAN' factor is similar to 'network,' the total number of wins on LAN (up to 'bucketSize'), scaled by how long ago the event took place. 
            lanWins.sort( (a,b) => b.val - a.val );
            team.lanWins = lanWins.slice(0,bucketSize);
            team.scaledLanWins = team.lanWins.map( el => el.val).reduce( (a,b) => a + b, 0 ) / bucketSize; //a team's scaled LAN participation is the proportion of matches that were of maximum LAN context ( LAN, occurred recently)

            // Also calculate top N winnings. Like 'network' and 'LAN,' Winnings are scaled by the age of the result.
            team.eventMap.forEach( teamEvent => {
                let id = teamEvent.event.eventId;
                let timestampModifier = context.getTimestampModifier( teamEvent.event.lastMatchTime );
                let baseWinnings = teamEvent.getTeamWinnings();                
                let scaledWinnings =  baseWinnings * timestampModifier;
                
                if ( baseWinnings > 0 )
                    winnings.push( { id: id, eventTime: teamEvent.event.lastMatchTime, age: timestampModifier, base: baseWinnings, val: scaledWinnings } );
            } );
            winnings.sort( (a,b) => b.val - a.val );
            team.winnings = winnings.slice(0,bucketSize);
            team.scaledWinnings = team.winnings.map( el => el.val ).reduce( (a,b) => a + b, 0 );
        } );

        // Phase 2 relies on the data from *all* teams in phase 1 being calculated.
        // we want to know relative data -- such as whether this team's winnings are representative
        // of the top teams in the world, or if a team has beaten a typical number of opponents.
        let referenceWinnings     = nthHighest( teams.map( t => t.scaledWinnings ), context.getOutlierCount() );
        let referenceOpponentCount = nthHighest( teams.map( t => t.distinctTeamsDefeated ), context.getOutlierCount() );
        let referenceLanWins       = nthHighest( teams.map( t => t.scaledLanWins ), context.getOutlierCount() );
        let referenceRoundWins = nthHighest( teams.map( t => t.roundsWon ), context.getOutlierCount() );
        let referenceRoundsPlayed = nthHighest( teams.map( t => t.roundsPlayed ), context.getOutlierCount() );

        teams.forEach( team => {
            team.bountyOffered = Math.min( team.scaledWinnings / referenceWinnings, 1 );
            team.ownNetwork = Math.min( team.distinctTeamsDefeated / referenceOpponentCount, 1 );
            team.lanParticipation = Math.min( team.scaledLanWins / referenceLanWins, 1 );
            team.roundSuccess = Math.min( team.roundsWon / referenceRoundWins, 1 );
            team.roundsParticipation = curveFunction ( Math.min( Math.max ( team.roundsPlayed , 1) / referenceRoundsPlayed, 1 ) );
            team.ownMatchPerformance = Math.min( team.roundSuccess / team.roundsParticipation , 1 );
        } );

        // Phase 3 looks at each team's opponents and rates each team highly if it can regularly win against other prestigous teams.

        teams.forEach( team => {
            // Bounties (and your opponents' networks) are 'buckets' that fill up as you win matches.
            // Bounties/Networks are scaled by the stakes (i.e., prize pool) of the event where they occur and the age of the result
            // We only consider the top N best outcomes, post-scaling. So there's never any harm in playing in a low-stakes match.
            let bounties = [];
            let network = [];
            let performance = [];

            team.wonMatches.forEach( teamMatch => {
                let id = teamMatch.match.umid;
                let timestampModifier = context.getTimestampModifier( teamMatch.match.matchStartTime );
                let cappedPrizePool = getCappedPrizePool( teamMatch );
                let stakesModifier = curveFunction( cappedPrizePool / 1000000 ); //cappedPrizePool of the event is curved the same as a bounty, and is limited to $1,000,000.
                let matchContext = timestampModifier * stakesModifier;

                let scaledBounty = teamMatch.opponent.bountyOffered * matchContext;
                let scaledNetwork = teamMatch.opponent.ownNetwork * matchContext;
                let scaledPerformance = teamMatch.opponent.ownMatchPerformance * matchContext;

                bounties.push( { id: id, context: stakesModifier, base: teamMatch.opponent.bountyOffered, val: scaledBounty } );
                network.push(  { id: id, context: stakesModifier, base: teamMatch.opponent.ownNetwork   , val: scaledNetwork } );
                performance.push(  { id: id, context: stakesModifier, base: teamMatch.opponent.ownMatchPerformance   , val: scaledPerformance } );
            } );
    
            bounties.sort( (a,b) => b.val - a.val );
            team.bounties = bounties.slice(0,bucketSize);
            team.opponentBounties = team.bounties.map( el => el.val ).reduce( (a,b) => a + b, 0 ) / bucketSize;

            network.sort( (a,b) => b.val - a.val );
            team.network = network.slice(0,bucketSize);
            team.opponentNetwork = team.network.map( el => el.val ).reduce( (a,b) => a + b, 0 ) / bucketSize;

            performance.sort( (a,b) => b.val - a.val );
            team.performance = performance.slice(0,bucketSize);
            team.opponentPerformance = team.performance.map( el => el.val ).reduce( (a,b) => a + b, 0 ) / bucketSize;
        } );

        // Finally, build modifiers from calculated values
        
        teams.forEach( team => {
            team.modifiers.bountyCollected  = curveFunction( team.opponentBounties );
            team.modifiers.bountyOffered    = curveFunction( team.bountyOffered );
            team.modifiers.opponentNetwork  = powerFunction( team.opponentNetwork );
            team.modifiers.ownNetwork       = powerFunction( team.ownNetwork );
            team.modifiers.lanFactor        = powerFunction( team.lanParticipation );
            team.modifiers.ownMatchPerformance = powerFunction( team.ownMatchPerformance );
            team.modifiers.opponentPerformance = curveFunction( team.opponentPerformance );
        } );        
    }
}

module.exports = Team;