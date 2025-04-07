### Roster Details<br />
Team Name: LFO 3<br />
Roster: awks, BehinDx, Chill, giM, Matheos<br />
Global Rank: [247](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [141]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  518.2<br />
<br />
Final Rank Value (518.2) = Starting Rank Value (521.9) + Head To Head Adjustments (-3.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.066<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 521.9
- 400 + ( ( 0.066 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 521.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      672 | 2025-03-08 | PCIFIC   | L   | 1.000      | -            | -                | -                | -         |   -10.35 | awks, BehinDx, Chill, giM, Matheos |
|            5 |      787 | 2025-03-06 | AMKAL    | L   | 0.988      | -            | -                | -                | -         |    -8.45 | awks, BehinDx, Chill, giM, Matheos |
|            4 |      840 | 2025-03-04 | ALASKA   | W   | 0.975      | 0.372        | 0.025 (0.009)    | 0.428 (0.155)    | 0 (0.000) |    24.90 | awks, BehinDx, Chill, giM, Matheos |
|            3 |     1387 | 2025-02-08 | TNL      | L   | 0.815      | -            | -                | -                | -         |    -7.20 | awks, BehinDx, Chill, giM, Matheos |
|            2 |     1406 | 2025-02-08 | Hesta    | L   | 0.814      | -            | -                | -                | -         |   -11.05 | awks, BehinDx, Chill, giM, Matheos |
|            1 |     1410 | 2025-02-08 | Betera   | W   | 0.814      | 0.143        | 0.000 (0.000)    | 0.161 (0.019)    | 0 (0.000) |     8.46 | awks, BehinDx, Chill, giM, Matheos |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
