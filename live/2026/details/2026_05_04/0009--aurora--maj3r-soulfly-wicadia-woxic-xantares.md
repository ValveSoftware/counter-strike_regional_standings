### Roster Details<br />
Team Name: Aurora<br />
Roster: MAJ3R, soulfly, Wicadia, woxic, XANTARES<br />
Global Rank: [9](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [8]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  1742.0<br />
<br />
Final Rank Value (1742.0) = Starting Rank Value (1793.7) + Head To Head Adjustments (-51.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.916[<sup>1</sup>](#table2)
- Bounty Collected: 0.776[<sup>2</sup>](#table1)
- Opponent Network: 0.392[<sup>2</sup>](#table1)
- LAN Wins: 0.920[<sup>2</sup>](#table1)

The average of these factors is 0.751<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1793.7
- 400 + ( ( 0.751 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 1793.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |      549 | 2026-04-15 | Natus Vincere | L   | 1.000      | -            | -                | -                | -         |    -9.80 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           38 |      555 | 2026-04-15 | B8            | W   | 1.000      | 1.000        | 0.311 (0.311)    | 0.448 (0.448)    | 1 (1.000) |     7.84 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           37 |      567 | 2026-04-14 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |   -15.89 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           36 |      588 | 2026-04-13 | HOTU          | W   | 1.000      | 1.000        | -                | 0.632 (0.632)    | 1 (1.000) |     2.00 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           35 |     1178 | 2026-04-01 | Alliance      | L   | 0.980      | -            | -                | -                | -         |   -27.26 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           34 |     1233 | 2026-03-31 | M80           | L   | 0.975      | -            | -                | -                | -         |   -27.92 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           33 |     1291 | 2026-03-31 | Sashi         | W   | 0.972      | -            | -                | -                | 1 (0.972) |     0.74 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           32 |     1350 | 2026-03-30 | INFINITE      | W   | 0.966      | -            | -                | -                | 1 (0.966) |     1.07 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           31 |     1517 | 2026-03-28 | Vitality      | L   | 0.953      | -            | -                | -                | -         |    -6.38 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           30 |     1578 | 2026-03-27 | The MongolZ   | W   | 0.946      | 1.000        | 0.742 (0.703)    | 0.398 (0.377)    | 1 (0.946) |    14.47 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           29 |     1805 | 2026-03-23 | Natus Vincere | L   | 0.919      | -            | -                | -                | -         |   -11.17 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           28 |     1938 | 2026-03-20 | FURIA         | W   | 0.902      | 1.000        | 1.000 (0.902)    | 0.401 (0.362)    | 1 (0.902) |    13.30 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           27 |     2035 | 2026-03-18 | FaZe          | W   | 0.888      | 1.000        | 0.563 (0.500)    | 0.366 (0.325)    | 1 (0.888) |     5.66 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           26 |     2173 | 2026-03-15 | Natus Vincere | L   | 0.868      | -            | -                | -                | -         |   -11.24 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           25 |     2211 | 2026-03-14 | Astralis      | W   | 0.861      | 0.901        | 0.923 (0.716)    | 0.423 (0.328)    | 1 (0.861) |    14.11 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           24 |     2276 | 2026-03-13 | Legacy        | W   | 0.853      | 0.901        | -                | 0.498 (0.383)    | 1 (0.853) |     7.43 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           23 |     2440 | 2026-03-09 | G2            | W   | 0.828      | 0.805        | 0.533 (0.355)    | 0.651 (0.434)    | -         |    10.49 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           22 |     2563 | 2026-03-08 | paiN          | W   | 0.819      | -            | -                | -                | -         |     4.99 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           21 |     2610 | 2026-03-07 | The MongolZ   | L   | 0.812      | -            | -                | -                | -         |   -12.21 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           20 |     2632 | 2026-03-06 | Legacy        | W   | 0.807      | 0.805        | -                | 0.498 (0.324)    | -         |     6.09 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           19 |     3335 | 2026-02-20 | Vitality      | L   | 0.714      | -            | -                | -                | -         |    -4.64 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           18 |     3458 | 2026-02-18 | Astralis      | W   | 0.699      | 1.000        | 0.923 (0.645)    | -                | 1 (0.699) |    12.39 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           17 |     3521 | 2026-02-17 | B8            | W   | 0.693      | 1.000        | 0.311 (0.215)    | 0.448 (0.310)    | -         |     5.87 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           16 |     3566 | 2026-02-16 | Natus Vincere | L   | 0.685      | -            | -                | -                | -         |    -7.50 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           15 |     3616 | 2026-02-15 | paiN          | W   | 0.680      | -            | -                | -                | -         |     3.47 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           14 |     3695 | 2026-02-14 | FUT           | L   | 0.672      | -            | -                | -                | -         |   -10.27 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           13 |     3964 | 2026-02-06 | FURIA         | L   | 0.620      | -            | -                | -                | -         |    -8.66 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           12 |     4030 | 2026-02-03 | Vitality      | L   | 0.601      | -            | -                | -                | -         |    -4.54 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           11 |     4076 | 2026-02-02 | MOUZ          | W   | 0.593      | 1.000        | 0.632 (0.375)    | -                | -         |     6.51 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           10 |     4104 | 2026-02-01 | Falcons       | W   | 0.586      | 1.000        | 0.721 (0.423)    | -                | -         |     9.21 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|            9 |     4172 | 2026-01-30 | paiN          | W   | 0.574      | -            | -                | -                | -         |     2.96 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|            8 |     4204 | 2026-01-29 | PARIVISION    | L   | 0.566      | -            | -                | -                | -         |    -7.67 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|            7 |     4236 | 2026-01-28 | GamerLegion   | W   | 0.559      | -            | -                | -                | -         |     3.86 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|            6 |     4565 | 2026-01-17 | GamerLegion   | L   | 0.487      | -            | -                | -                | -         |   -11.98 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|            5 |     4715 | 2026-01-13 | HOTU          | W   | 0.462      | -            | -                | -                | -         |     1.22 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|            4 |     5228 | 2025-12-01 | Astralis      | L   | 0.174      | -            | -                | -                | -         |    -2.19 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            3 |     5251 | 2025-11-30 | PARIVISION    | L   | 0.166      | -            | -                | -                | -         |    -2.57 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            2 |     5279 | 2025-11-29 | FaZe          | L   | 0.161      | -            | -                | -                | -         |    -3.92 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            1 |     5301 | 2025-11-29 | M80           | W   | 0.159      | -            | -                | -                | -         |     0.52 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($379,175.28)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.81) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-19 |      1.000 | $42,000.00     | $42,000.00      |
| 2026-03-29 |      0.959 | $115,000.00    | $110,298.43     |
| 2026-03-15 |      0.868 | $156,500.00    | $135,798.29     |
| 2026-02-22 |      0.727 | $50,000.00     | $36,363.30      |
| 2026-02-08 |      0.634 | $61,000.00     | $38,687.92      |
| 2026-01-18 |      0.494 | $28,750.00     | $14,216.49      |
| 2025-12-02 |      0.181 | $10,000.00     | $1,810.86       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
