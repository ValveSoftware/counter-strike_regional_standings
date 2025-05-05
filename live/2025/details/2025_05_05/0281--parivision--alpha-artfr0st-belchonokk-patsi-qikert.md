### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Global Rank: [281](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [158]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  458.7<br />
<br />
Final Rank Value (458.7) = Starting Rank Value (461.5) + Head To Head Adjustments (-2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.136[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.034<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 461.5
- 400 + ( ( 0.034 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 461.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3056 | 2024-11-22 | TSM               | L   | 0.105      | -            | -                | -                | -         |    -1.54 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            4 |     3076 | 2024-11-21 | Ninjas in Pyjamas | L   | 0.098      | -            | -                | -                | -         |    -0.89 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            3 |     3084 | 2024-11-20 | HEROIC            | L   | 0.097      | -            | -                | -                | -         |    -0.35 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            2 |     3415 | 2024-11-07 | Nemiga            | L   | 0.005      | -            | -                | -                | -         |    -0.01 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            1 |     3421 | 2024-11-06 | SINNERS           | W   | 0.001      | 0.426        | 0.018 (0.000)    | 0.489 (0.000)    | 0 (0.000) |     0.02 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
