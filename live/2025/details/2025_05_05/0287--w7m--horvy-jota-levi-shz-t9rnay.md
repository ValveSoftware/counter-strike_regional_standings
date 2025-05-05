### Roster Details<br />
Team Name: W7M<br />
Roster: horvy, JOTA, levi, shz, t9rnay<br />
Global Rank: [287](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [91]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  414.9<br />
<br />
Final Rank Value (414.9) = Starting Rank Value (402.2) + Head To Head Adjustments (12.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 402.2
- 400 + ( ( 0.001 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 402.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      752 | 2025-03-28 | 2GAME     | L   | 0.946      | -            | -                | -                | -         |    -9.34 | horvy, JOTA, levi, shz, t9rnay |
|            5 |      818 | 2025-03-27 | BESTIA    | L   | 0.940      | -            | -                | -                | -         |    -3.82 | horvy, JOTA, levi, shz, t9rnay |
|            4 |     1200 | 2025-03-09 | Swingers  | L   | 0.822      | -            | -                | -                | -         |    -3.96 | fokiu, JOTA, levi, shz, t9rnay |
|            3 |     1210 | 2025-03-09 | UNO MILLE | W   | 0.821      | 0.143        | 0.000 (0.000)    | 0.311 (0.037)    | 0 (0.000) |    17.52 | fokiu, JOTA, levi, shz, t9rnay |
|            2 |     1306 | 2025-03-08 | VELOX     | W   | 0.813      | 0.143        | 0.000 (0.000)    | 0.111 (0.013)    | 0 (0.000) |    14.75 | fokiu, JOTA, levi, shz, t9rnay |
|            1 |     1364 | 2025-03-07 | 9z        | L   | 0.807      | -            | -                | -                | -         |    -2.47 | fokiu, JOTA, levi, shz, t9rnay |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
