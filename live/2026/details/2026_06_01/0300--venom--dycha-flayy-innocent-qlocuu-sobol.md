### Roster Details<br />
Team Name: Venom<br />
Roster: dycha, flayy, innocent, Qlocuu, Sobol<br />
Global Rank: [300](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [191]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  552.9<br />
<br />
Final Rank Value (552.9) = Starting Rank Value (537.7) + Head To Head Adjustments (15.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.064[<sup>2</sup>](#table1)

The average of these factors is 0.072<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 537.7
- 400 + ( ( 0.072 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 537.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     5780 | 2026-01-04 | GamerLegion | L   | 0.214      | -            | -                | -                | -         |    -0.01 | dycha, flayy, innocent, Qlocuu, Sobol |
|            8 |     5811 | 2026-01-03 | F5          | W   | 0.210      | 0.323        | 0.007 (0.000)    | 0.335 (0.023)    | 1 (0.210) |     5.89 | dycha, flayy, innocent, Qlocuu, Sobol |
|            7 |     5814 | 2026-01-03 | 9INE        | L   | 0.209      | -            | -                | -                | -         |    -0.69 | dycha, flayy, innocent, Qlocuu, Sobol |
|            6 |     5817 | 2026-01-03 | F5          | W   | 0.209      | 0.323        | 0.007 (0.000)    | 0.335 (0.023)    | 1 (0.209) |     5.89 | dycha, flayy, innocent, Qlocuu, Sobol |
|            5 |     5907 | 2025-12-19 | 9INE        | L   | 0.108      | -            | -                | -                | -         |    -0.35 | dycha, flayy, innocent, Qlocuu, Sobol |
|            4 |     5919 | 2025-12-19 | Acend       | W   | 0.106      | 0.339        | 0.022 (0.001)    | 0.828 (0.030)    | 1 (0.106) |     3.31 | dycha, flayy, innocent, Qlocuu, Sobol |
|            3 |     5924 | 2025-12-19 | illwill     | L   | 0.105      | -            | -                | -                | -         |    -1.72 | dycha, flayy, innocent, Qlocuu, Sobol |
|            2 |     5936 | 2025-12-18 | MOUZ NXT    | W   | 0.100      | 0.339        | 0.015 (0.001)    | 0.814 (0.027)    | 1 (0.100) |     2.99 | dycha, flayy, innocent, Qlocuu, Sobol |
|            1 |     6136 | 2025-12-05 | DragonClaw  | L   | 0.013      | -            | -                | -                | -         |    -0.04 | flayy, hfah, innocent, Qlocuu, Sobol  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
