### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, Spinx, torzsi, xertioN<br />
Global Rank: [3](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [2]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  1886.5<br />
<br />
Final Rank Value (1886.5) = Starting Rank Value (1922.0) + Head To Head Adjustments (-35.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.978[<sup>1</sup>](#table2)
- Bounty Collected: 0.851[<sup>2</sup>](#table1)
- Opponent Network: 0.412[<sup>2</sup>](#table1)
- LAN Wins: 0.977[<sup>2</sup>](#table1)

The average of these factors is 0.805<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1922.0
- 400 + ( ( 0.805 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1922.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      309 | 2026-02-22 | The MongolZ   | W   | 1.000      | 1.000        | 0.672 (0.672)    | 0.300 (0.300)    | 1 (1.000) |     5.83 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           32 |      342 | 2026-02-21 | PARIVISION    | L   | 1.000      | -            | -                | -                | -         |   -16.37 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           31 |      390 | 2026-02-20 | Natus Vincere | W   | 1.000      | 1.000        | 0.662 (0.662)    | 0.303 (0.303)    | 1 (1.000) |     7.63 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           30 |      564 | 2026-02-17 | FUT           | W   | 1.000      | 1.000        | -                | 0.578 (0.578)    | 1 (1.000) |     3.87 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           29 |      592 | 2026-02-16 | Vitality      | L   | 1.000      | -            | -                | -                | -         |   -10.85 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           28 |      671 | 2026-02-15 | Natus Vincere | W   | 1.000      | 1.000        | 0.662 (0.662)    | 0.303 (0.303)    | 1 (1.000) |     7.65 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           27 |      716 | 2026-02-14 | PARIVISION    | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.622 (0.622)    | 1 (1.000) |    14.64 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           26 |      944 | 2026-02-08 | Spirit        | L   | 1.000      | -            | -                | -                | -         |   -20.79 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           25 |      954 | 2026-02-07 | Vitality      | L   | 1.000      | -            | -                | -                | -         |   -12.51 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           24 |      988 | 2026-02-06 | G2            | W   | 1.000      | 1.000        | 0.446 (0.446)    | 0.305 (0.305)    | 1 (1.000) |     4.70 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           23 |     1060 | 2026-02-03 | Falcons       | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.448 (0.448)    | 1 (1.000) |    13.12 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           22 |     1076 | 2026-02-03 | FaZe          | W   | 1.000      | 1.000        | 0.591 (0.591)    | 0.358 (0.358)    | 1 (1.000) |     4.54 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           21 |     1109 | 2026-02-02 | Aurora        | L   | 1.000      | -            | -                | -                | -         |   -22.37 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           20 |     1137 | 2026-02-01 | NRG           | W   | 1.000      | 1.000        | -                | 0.525 (0.525)    | 1 (1.000) |     1.98 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           19 |     2027 | 2025-12-12 | FaZe          | L   | 0.667      | -            | -                | -                | -         |   -18.21 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           18 |     2123 | 2025-12-06 | Falcons       | W   | 0.627      | 1.000        | 1.000 (0.627)    | -                | 1 (0.627) |     8.37 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           17 |     2150 | 2025-12-05 | Spirit        | L   | 0.621      | -            | -                | -                | -         |   -14.87 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           16 |     2174 | 2025-12-04 | B8            | W   | 0.614      | -            | -                | -                | -         |     1.16 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           15 |     2192 | 2025-12-04 | PARIVISION    | W   | 0.612      | 1.000        | 1.000 (0.612)    | 0.622 (0.381)    | -         |     8.92 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           14 |     2826 | 2025-11-08 | Falcons       | L   | 0.444      | -            | -                | -                | -         |    -8.13 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           13 |     2882 | 2025-11-08 | Vitality      | L   | 0.438      | -            | -                | -                | -         |    -5.66 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           12 |     3041 | 2025-11-05 | FURIA         | W   | 0.418      | 1.000        | 1.000 (0.418)    | -                | -         |     6.51 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           11 |     3072 | 2025-11-04 | Vitality      | W   | 0.411      | -            | -                | -                | -         |     7.88 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           10 |     3099 | 2025-11-02 | FaZe          | W   | 0.404      | -            | -                | -                | -         |     1.66 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            9 |     3763 | 2025-10-12 | FaZe          | W   | 0.259      | -            | -                | -                | -         |     1.12 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            8 |     3781 | 2025-10-11 | Falcons       | L   | 0.253      | -            | -                | -                | -         |    -4.62 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            7 |     3820 | 2025-10-10 | Natus Vincere | W   | 0.246      | -            | -                | -                | -         |     1.68 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            6 |     3964 | 2025-10-07 | 3DMAX         | W   | 0.226      | -            | -                | -                | -         |     0.51 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            5 |     4008 | 2025-10-06 | Falcons       | L   | 0.221      | -            | -                | -                | -         |    -4.10 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            4 |     4098 | 2025-10-05 | Gentle Mates  | W   | 0.212      | -            | -                | -                | -         |     0.52 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            3 |     4148 | 2025-10-04 | GamerLegion   | W   | 0.205      | -            | -                | -                | -         |     0.94 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            2 |     5190 | 2025-09-06 | Vitality      | L   | 0.020      | -            | -                | -                | -         |    -0.24 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            1 |     5208 | 2025-09-05 | M80           | W   | 0.013      | -            | -                | -                | -         |     0.01 | Brollan, Jimpphat, Spinx, torzsi, xertioN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($317,200.17)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.95) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-22 |      1.000 | $137,500.00    | $137,500.00     |
| 2026-02-08 |      1.000 | $85,000.00     | $85,000.00      |
| 2025-12-14 |      0.681 | $45,000.00     | $30,649.67      |
| 2025-11-09 |      0.445 | $90,000.00     | $40,059.25      |
| 2025-10-12 |      0.260 | $88,000.00     | $22,898.54      |
| 2025-09-07 |      0.027 | $40,000.00     | $1,092.72       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
