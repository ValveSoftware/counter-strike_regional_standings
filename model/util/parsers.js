'use strict'

const Table = require("../table.js");
const nthHighest = require("../util/nth_highest");
const RegionList = ["Europe", "Americas", "Asia"];
const { sortCaseInsensitive, sanitize, sanitizeRoster, formatLine } = require('../util/helper_utils.js');
const summaryFolder = "details";
module.exports = {

    // Individual renderers
    renderRankingsJSON,
    renderTeamSummaryJSON,
    renderRankingsHTML,
    renderTeamSummaryHTML,
    renderRankingsCSV,
    renderTeamSummaryCSV,
    renderRankingsTXT,
    renderTeamSummaryTXT,
    renderRankingsMarkdown,
    renderTeamSummaryMarkdown
}

/* --- JSON RENDERERS --- */
function renderRankingsJSON(teams, regions, strDate) {
    let standingsName =
        regions.length === 1
            ? `Regional Standings for ${RegionList[regions[0]]}`
            : "Global Standings";
    let filteredTeams = teams.filter(
        (t) => t.globalRank > 0 && regions.some((r) => t.region[r] === 1),
    );

    return JSON.stringify(
        {
            date: strDate,
            standingsType: standingsName,
            teams: filteredTeams.map((t) => ({
                standing:
                    regions.length === 1 ? t.regionalRank[regions[0]] : t.globalRank,
                points: t.glickoTeam.rank(),
                name: t.name,
                roster: sortCaseInsensitive(t.activeRoster.map((p) => p.nick)),
            })),
        },
        null,
        2,
    );
}

function renderTeamSummaryJSON(team, teams, strDate) {
    return JSON.stringify(
        {
            date: strDate,
            teamName: team.name,
            globalRank: team.globalRank,
            finalRankValue: team.rankValue,
            seedValue: team.seedValue,
            activeRoster: team.activeRoster.map((p) => p.nick),
            matches: team.teamMatches.map((tm) => ({
                matchId: tm.match.umid,
                opponent: tm.opponent.name,
                winner: tm.isWinner,
            })),
        },
        null,
        2,
    );
}

/* --- HTML RENDERERS --- */
function renderRankingsHTML(teams, regions, strDate) {
    let standings =
        regions.length === 1
            ? `Regional Standings for ${RegionList[regions[0]]}`
            : "Global Standings";
    let html = `<!DOCTYPE html><html><head><title>${standings}</title></head><body>`;
    html += `<h1>${standings} as of ${strDate}</h1><table border="1"><tr><th>Standing</th><th>Points</th><th>Team Name</th><th>Roster</th></tr>`;

    teams.forEach((t) => {
        if (t.globalRank > 0 && regions.some((r) => t.region[r] === 1)) {
            let displayRank =
                regions.length === 1 ? t.regionalRank[regions[0]] : t.globalRank;
            let rosterStr = sortCaseInsensitive(
                t.activeRoster.map((p) => p.nick),
            ).join(", ");
            html += `<tr><td>${displayRank}</td><td>${t.glickoTeam.rank()}</td><td>${t.name}</td><td>${rosterStr}</td></tr>`;
        }
    });
    html += `</table></body></html>`;
    return html;
}

function renderTeamSummaryHTML(team, teams, strDate) {
    let roster = sortCaseInsensitive(team.activeRoster.map((el) => el.nick)).join(
        ", ",
    );
    return (
        `<!DOCTYPE html><html><head><title>${team.name} Summary</title></head><body>` +
        `<h1>Roster Details: ${team.name}</h1>` +
        `<p><strong>Roster:</strong> ${roster}</p>` +
        `<p><strong>Global Rank:</strong> ${team.globalRank}</p>` +
        `<p><strong>Final Rank Value:</strong> ${team.rankValue.toFixed(1)}</p>` +
        `</body></html>`
    );
}

/* --- CSV RENDERERS --- */
function renderRankingsCSV(teams, regions, strDate) {
    let csv = "Standing,Points,Team Name,Roster\n";
    teams.forEach((t) => {
        if (t.globalRank > 0 && regions.some((r) => t.region[r] === 1)) {
            let displayRank =
                regions.length === 1 ? t.regionalRank[regions[0]] : t.globalRank;
            let rosterStr = sortCaseInsensitive(
                t.activeRoster.map((p) => p.nick),
            ).join(";");
            csv += `${displayRank},${t.glickoTeam.rank()},"${t.name}","${rosterStr}"\n`;
        }
    });
    return csv;
}

function renderTeamSummaryCSV(team, teams, strDate) {
    let csv = "Metric,Value\n";
    csv += `Team Name,"${team.name}"\n`;
    csv += `Global Rank,${team.globalRank}\n`;
    csv += `Final Rank Value,${team.rankValue.toFixed(1)}\n`;
    return csv;
}

/* --- TXT RENDERERS --- */
function renderRankingsTXT(teams, regions, strDate) {
    let standings =
        regions.length === 1
            ? `Regional Standings for ${RegionList[regions[0]]}`
            : "Global Standings";
    let txt = `${standings} as of ${strDate}\n=====================================\n\n`;
    teams.forEach((t) => {
        if (t.globalRank > 0 && regions.some((r) => t.region[r] === 1)) {
            let displayRank =
                regions.length === 1 ? t.regionalRank[regions[0]] : t.globalRank;
            let rosterStr = sortCaseInsensitive(
                t.activeRoster.map((p) => p.nick),
            ).join(", ");
            txt += `Rank ${displayRank} | Points: ${t.glickoTeam.rank()} | Team: ${t.name} | Roster: ${rosterStr}\n`;
        }
    });
    return txt;
}

function renderTeamSummaryTXT(team, teams, strDate) {
    let roster = sortCaseInsensitive(team.activeRoster.map((el) => el.nick)).join(
        ", ",
    );
    return (
        `Roster Details for ${team.name}\n` +
        `Roster: ${roster}\n` +
        `Global Rank: ${team.globalRank}\n` +
        `Final Rank Value: ${team.rankValue.toFixed(1)}\n`
    );
}

/* --- MARKDOWN RENDERERS --- */
function renderRankingsMarkdown(teams, regions, strDate, format) {
    let output = "";
    let fileDate = strDate.replaceAll("-", "_");
    let standings = "Standings";
    if (regions.length === 1)
        standings = `Regional Standings for ${RegionList[regions[0]]}`;

    output += formatLine(`### ${standings} as of ${strDate}`);
    output += formatLine("");

    var table = new Table();
    table.addColumn("Standing");
    table.addNumericColumn("Points").setPrecision(0);
    table.addColumn("Team Name").setMinWidth(12);
    table.addColumn("Roster");
    table.addColumn("");

    teams.forEach((t) => {
        if (t.globalRank > 0 && regions.some((r) => t.region[r] === 1)) {
            let displayRank = t.globalRank;
            let paddedRank = displayRank.toString().padStart(4, "0");

            if (regions.length === 1) displayRank = t.regionalRank[regions[0]];

            table.addElem(displayRank);
            table.addElem(t.glickoTeam.rank());
            table.addElem(t.name);
            table.addElem(
                sortCaseInsensitive(t.activeRoster.map((p) => p.nick)).join(", "),
            );
            table.addElem(
                `[details](${summaryFolder}${fileDate}/${paddedRank}--${sanitize(t.name)}--${sanitizeRoster(t.activeRoster)}${format})`,
            );
            table.commitRow();
        }
    });

    output += "\n" + table.printMarkdownToString() + "\n";
    output += formatLine("", true);
    output += formatLine(
        "_Event data for Regional Standings provided by HLTV.org_",
    );
    console.log(output);
    return output;
}

function renderTeamSummaryMarkdown(team, teams, strDate, format) {
    let roster = sortCaseInsensitive(team.activeRoster.map((el) => el.nick)).join(
        ", ",
    );
    let minSeedValue = Math.min(...teams.map((t) => t.seedValue));
    let maxSeedValue = Math.max(...teams.map((t) => t.seedValue));
    let fileDate = strDate.replaceAll("-", "_");

    let output = "";
    output += formatLine(`### Roster Details`);
    output += formatLine(`Team Name: ${team.name}`);
    output += formatLine(`Roster: ${roster}`);
    output += formatLine(
        `Global Rank: [${team.globalRank}](../../standings_global_${fileDate}${format})`,
    );
    output += formatLine("");

    team.region.forEach((r, idx) => {
        if (r === 1) {
            let region = RegionList[idx];
            let regionFile = `standings_${RegionList[idx].toLowerCase()}`;
            output += formatLine(
                `Region: [${region}]( ../../${regionFile}_${fileDate}${format})`,
            );
            output += formatLine(
                `Regional Rank: [${team.regionalRank[idx]}]( ../../${regionFile}_${fileDate}${format})`,
            );
            output += formatLine("");
        }
    });

    output += formatLine(`Final Rank Value:  ${team.rankValue.toFixed(1)}`);
    output += formatLine("");
    output += formatLine(
        `Final Rank Value (${team.rankValue.toFixed(1)}) = Starting Rank Value (${team.rankValueSeed.toFixed(1)}) + Head To Head Adjustments (${(team.rankValue - team.rankValueSeed).toFixed(1)})`,
    );
    output += formatLine("", true);
    output += formatLine("#### Starting Rank Value");
    output += formatLine(
        `To figure out a rosters's Starting Rank Value, first take the average of these four factors:`,
    );
    output += formatLine(
        `- Bounty Offered: ${team.modifiers.bountyOffered.toFixed(3)}[<sup>1</sup>](#table2)`,
        true,
    );
    output += formatLine(
        `- Bounty Collected: ${team.modifiers.bountyCollected.toFixed(3)}[<sup>2</sup>](#table1)`,
        true,
    );
    output += formatLine(
        `- Opponent Network: ${team.modifiers.opponentNetwork.toFixed(3)}[<sup>2</sup>](#table1)`,
        true,
    );
    output += formatLine(
        `- LAN Wins: ${team.modifiers.lanFactor.toFixed(3)}[<sup>2</sup>](#table1)`,
        true,
    );
    output += formatLine("", true);
    output += formatLine(
        `The average of these factors is ${team.seedValue.toFixed(3)}`,
    );
    output += formatLine("");
    output += formatLine(
        `Next, take the maximum and minimum average across all teams and compute the following:`,
    );
    output += formatLine(
        `- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = ${team.rankValueSeed.toFixed(1)}`,
        true,
    );
    output += formatLine(
        `- 400 + ( ( ${team.seedValue.toFixed(3)} - ${minSeedValue.toFixed(3)} ) / ( ${maxSeedValue.toFixed(3)} - ${minSeedValue.toFixed(3)} ) ) * 1600 = ${team.rankValueSeed.toFixed(1)}`,
        true,
    );
    output += formatLine("", true);
    output += formatLine("", true);
    output += formatLine("#### Factors");
    output += formatLine(
        `Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.`,
    );
    output += formatLine(`Note:`);
    output += formatLine("", true);
    output += formatLine(
        `- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.`,
        true,
    );
    output += formatLine(
        `- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.`,
        true,
    );
    output += formatLine(
        `- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)`,
        true,
    );
    output += formatLine(
        `- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight`,
        true,
    );
    output += formatLine('<span id="table1"></span>');

    var table = new Table();
    table.addNumericColumn("Match Played");
    table.addNumericColumn("Match ID");
    table.addColumn("Date");
    table.addColumn("Opponent");
    table.addColumn("W/L");
    table.addColumn("Age Weight");
    table.addColumn("Event Weight");
    table.addColumn("Bounty Collected");
    table.addColumn("Opponent Network");
    table.addColumn("LAN Wins");
    table.addNumericColumn("H2H Adj.").setPrecision(2);
    table.addColumn("Roster");

    var totalMatches = team.matchesPlayed;
    team.teamMatches.forEach((tm, idx) => {
        let umid = tm.match.umid;
        let d = new Date(0);
        d.setUTCSeconds(tm.match.matchStartTime);
        let strDate = d.toLocaleString("fr-CA", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            timeZone: "America/Los_Angeles",
        });

        let bounty = "-";
        let net = "-";
        let lanWin = "-";
        let eventWeight = "-";

        let roster =
            tm.match.team1.rosterId === team.rosterId
                ? tm.match.team1Players
                : tm.match.team2Players;

        let bountyEl = team.bounties.filter((el) => {
            return el.id === umid;
        });
        if (bountyEl.length > 0) {
            bounty =
                bountyEl[0].base.toFixed(3).toString() +
                " (" +
                bountyEl[0].val.toFixed(3).toString() +
                ")";
            eventWeight = bountyEl[0].context.toFixed(3).toString();
        }

        let netEl = team.network.filter((el) => {
            return el.id === umid;
        });
        if (netEl.length > 0) {
            net =
                netEl[0].base.toFixed(3).toString() +
                " (" +
                netEl[0].val.toFixed(3).toString() +
                ")";
            eventWeight = netEl[0].context.toFixed(3).toString();
        }

        let lanWinEl = team.lanWins.filter((el) => {
            return el.id === umid;
        });
        if (lanWinEl.length > 0) {
            lanWin =
                lanWinEl[0].base.toString() +
                " (" +
                lanWinEl[0].val.toFixed(3).toString() +
                ")";
        }

        let glickoAdjustment = tm.isWinner
            ? tm.match.winnerDeltaRankValue
            : tm.match.loserDeltaRankValue;
        glickoAdjustment = glickoAdjustment.toFixed(3).toString();

        table.addElem(totalMatches - idx);
        table.addElem(umid);
        table.addElem(strDate);
        table.addElem(tm.opponent.name);
        table.addElem(tm.isWinner ? "W" : "L");
        table.addElem(tm.match.informationContent.toFixed(3).toString());
        table.addElem(eventWeight);
        table.addElem(bounty);
        table.addElem(net);
        table.addElem(lanWin);
        table.addElem(glickoAdjustment);
        table.addElem(sortCaseInsensitive(roster.map((el) => el.nick)).join(", "));

        table.commitRow();
    });

    let tableString = table.printMarkdownToString();
    output += "\n\n" + tableString + "\n";

    let USDollar = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    output += formatLine("");
    output += formatLine('<span id="table2"></span>');
    output += formatLine(`To calculate a roster's Bounty Offered:`);
    output += formatLine("", true);
    output += formatLine(
        `- First, take the sum of their top 10 scaled winnings (${USDollar.format(team.scaledWinnings.toFixed(2))})`,
        true,
    );
    output += formatLine(
        `- Divide that value by the 5th highest value among all rosters (${USDollar.format(
            nthHighest(
                teams.map((t) => t.scaledWinnings),
                5,
            ),
        )})`,
        true,
    );
    output += formatLine(
        `- The final value (${team.bountyOffered.toFixed(2)}) is scaled by the curve function.[<sup>3</sup>](#curveFunction)`,
        true,
    );

    if (team.scaledWinnings > 0) {
        output += formatLine("\nTop ten winnings for this roster:");
        var winningsTable = new Table();

        winningsTable.addColumn("Event Date");
        winningsTable.addNumericColumn("Age Weight").setPrecision(3);
        winningsTable.addColumn("Prize Winnings");
        winningsTable.addColumn("Scaled Winnings");

        team.winnings.sort((a, b) => b.eventTime - a.eventTime);
        team.winnings.forEach((w, idx) => {
            let d = new Date(0);
            d.setUTCSeconds(w.eventTime);
            let strDate = d.toLocaleString("fr-CA", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                timeZone: "America/Los_Angeles",
            });

            winningsTable.addElem(strDate);
            winningsTable.addElem(w.age);
            winningsTable.addElem(USDollar.format(w.base));
            winningsTable.addElem(USDollar.format(w.val));
            winningsTable.commitRow();
        });

        output += "\n" + winningsTable.printMarkdownToString() + "\n";
    }

    output += formatLine("", true);
    output += formatLine(
        `<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_`,
    );
    output += formatLine("", true);
    output += formatLine("---", true);
    output += formatLine(
        "_Event data for Regional Standings provided by HLTV.org_",
    );
    console.log(output);
    return output;
}
