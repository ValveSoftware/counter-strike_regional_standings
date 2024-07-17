### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, dycha, hades, kRaSnaL, STYKO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [58](../standings_global.md)<br />
Regional Rank: [41]( ../standings_europe.md)<br />
Final Rank Value:  1048.0<br />
<br />
Final Rank Value (1048.0) = Starting Rank Value (999.3) + Head To Head Adjustments (48.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.499[<sup>1</sup>](#table2)
- Bounty Collected: 0.424[<sup>2</sup>](#table1)
- Opponent Network: 0.193[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.279<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 999.3
- 400 + ( ( 0.279 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 999.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |       45 | 2024-07-16 | Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |   -12.74 | DemQQ, dycha, hades, kRaSnaL, STYKO  |
|           26 |      328 | 2024-06-16 | B8            | L   | 0.992      | -            | -                | -                | -         |   -10.39 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           25 |      353 | 2024-06-15 | BLEED         | W   | 0.987      | 0.435        | 0.192 (0.082)    | 0.379 (0.163)    | 0 (0.000) |    22.51 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           24 |      405 | 2024-06-14 | BLEED         | L   | 0.979      | -            | -                | -                | -         |    -7.52 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           23 |      429 | 2024-06-13 | Zero Tenacity | W   | 0.973      | 0.435        | 0.154 (0.065)    | 1.000 (0.423)    | 0 (0.000) |    18.17 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           22 |      465 | 2024-06-12 | FORZE Reload  | W   | 0.965      | -            | -                | -                | 0 (0.000) |     1.91 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           21 |      507 | 2024-06-10 | SINNERS       | W   | 0.953      | 0.143        | 0.058 (0.008)    | 0.744 (0.101)    | 0 (0.000) |    15.72 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           20 |      512 | 2024-06-10 | Aurora        | L   | 0.952      | -            | -                | -                | -         |    -3.96 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           19 |      518 | 2024-06-10 | RUSH B        | L   | 0.952      | -            | -                | -                | -         |   -18.05 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           18 |      532 | 2024-06-09 | AMKAL         | L   | 0.948      | -            | -                | -                | -         |    -7.36 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           17 |      544 | 2024-06-09 | Aurora        | W   | 0.947      | 0.143        | 0.514 (0.070)    | 0.813 (0.110)    | 0 (0.000) |    26.27 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           16 |      553 | 2024-06-09 | 3DMAX         | W   | 0.946      | 0.143        | 0.209 (0.028)    | 1.000 (0.135)    | 0 (0.000) |    21.54 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           15 |      559 | 2024-06-09 | SAW           | L   | 0.946      | -            | -                | -                | -         |    -6.64 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           14 |      567 | 2024-06-09 | PARIVISION    | L   | 0.945      | -            | -                | -                | -         |   -14.38 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           13 |      574 | 2024-06-09 | 9 Pandas      | L   | 0.945      | -            | -                | -                | -         |   -10.22 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           12 |      613 | 2024-06-08 | 1WIN          | W   | 0.940      | 0.143        | 0.041 (0.006)    | 0.545 (0.073)    | 0 (0.000) |    14.55 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           11 |      625 | 2024-06-08 | AMKAL         | L   | 0.939      | -            | -                | -                | -         |    -7.19 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           10 |      631 | 2024-06-08 | Quixal        | W   | 0.939      | -            | -                | -                | 0 (0.000) |     0.86 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            9 |      832 | 2024-06-04 | PARIVISION    | L   | 0.914      | -            | -                | -                | -         |   -14.83 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            8 |     1036 | 2024-05-27 | Falcons       | L   | 0.862      | -            | -                | -                | -         |    -1.44 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            7 |     1047 | 2024-05-27 | Vitality      | L   | 0.861      | -            | -                | -                | -         |    -0.13 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            6 |     1204 | 2024-05-21 | Sangal        | L   | 0.819      | -            | -                | -                | -         |    -9.62 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            5 |     1243 | 2024-05-20 | Sashi         | W   | 0.812      | 0.500        | 0.215 (0.087)    | 1.000 (0.406)    | 0 (0.000) |    19.15 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            4 |     1296 | 2024-05-18 | Sashi         | L   | 0.799      | -            | -                | -                | -         |    -5.89 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            3 |     1325 | 2024-05-17 | BLEED         | W   | 0.793      | 0.500        | 0.192 (0.076)    | 0.379 (0.150)    | 0 (0.000) |    19.21 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            2 |     1364 | 2024-05-16 | kONO          | W   | 0.786      | 0.384        | 0.042 (0.013)    | 0.595 (0.180)    | -         |     9.47 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            1 |     1410 | 2024-05-15 | DMS           | W   | 0.780      | 0.500        | 0.005 (0.002)    | 0.494 (0.193)    | -         |     9.75 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,304.31)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.994 | $5,000.00      | $4,968.91       |
| 2024-06-09 |      0.948 | $4,000.00      | $3,790.42       |
| 2024-06-02 |      0.901 | $4,000.00      | $3,605.57       |
| 2024-05-22 |      0.827 | $12,500.00     | $10,338.02      |
| 2024-05-18 |      0.801 | $2,000.00      | $1,601.39       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
