### Roster Details<br />
Team Name: Sangal<br />
Roster: jottAAA, LNZ, SaMey, xfl0ud, yxngstxr<br />
Global Rank: [20](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_02.md)<br />
Regional Rank: [15]( ../../standings_europe_2024_12_02.md)<br />
<br />
Final Rank Value:  1400.4<br />
<br />
Final Rank Value (1400.4) = Starting Rank Value (1380.0) + Head To Head Adjustments (20.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.572[<sup>1</sup>](#table2)
- Bounty Collected: 0.554[<sup>2</sup>](#table1)
- Opponent Network: 0.320[<sup>2</sup>](#table1)
- LAN Wins: 0.507[<sup>2</sup>](#table1)

The average of these factors is 0.488<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1380.0
- 400 + ( ( 0.488 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 1380.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |      267 | 2024-11-18 | ECLOT         | L   | 1.000      | -            | -                | -                | -         |   -23.78 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           44 |      279 | 2024-11-17 | Cloud9        | L   | 1.000      | -            | -                | -                | -         |   -24.16 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           43 |      292 | 2024-11-17 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |    -6.96 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           42 |      300 | 2024-11-16 | Rebels        | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.04 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           41 |      882 | 2024-10-20 | Nemiga        | W   | 0.913      | 0.500        | 0.490 (0.224)    | 0.784 (0.358)    | 0 (0.000) |    11.70 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           40 |      911 | 2024-10-19 | UNPAID        | L   | 0.906      | -            | -                | -                | -         |   -24.35 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           39 |      958 | 2024-10-17 | Nemiga        | W   | 0.894      | 0.500        | 0.490 (0.219)    | 0.784 (0.351)    | 0 (0.000) |     9.70 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           38 |      969 | 2024-10-17 | Fluxo         | W   | 0.893      | 0.624        | 0.116 (0.065)    | 0.674 (0.376)    | 1 (0.893) |     6.98 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           37 |      990 | 2024-10-16 | SAW           | W   | 0.888      | 0.500        | 0.287 (0.127)    | 0.657 (0.292)    | 0 (0.000) |    18.57 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           36 |      998 | 2024-10-16 | Nemiga        | W   | 0.886      | 0.624        | 0.490 (0.271)    | 0.784 (0.434)    | 1 (0.886) |    10.43 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           35 |     1019 | 2024-10-15 | Sashi         | W   | 0.881      | 0.500        | -                | 0.667 (0.294)    | 0 (0.000) |     3.44 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           34 |     1518 | 2024-09-27 | BetBoom       | L   | 0.761      | -            | -                | -                | -         |   -18.80 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           33 |     1580 | 2024-09-26 | Passion UA    | W   | 0.753      | 0.435        | 0.101 (0.033)    | 1.000 (0.327)    | -         |     3.74 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           32 |     2139 | 2024-09-08 | HEROIC        | L   | 0.633      | -            | -                | -                | -         |    -4.80 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           31 |     2178 | 2024-09-07 | FlyQuest      | W   | 0.626      | 0.889        | 0.144 (0.080)    | 0.513 (0.285)    | 1 (0.626) |     9.43 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           30 |     2200 | 2024-09-06 | FaZe          | L   | 0.620      | -            | -                | -                | -         |    -4.71 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           29 |     2221 | 2024-09-05 | HEROIC        | W   | 0.615      | 0.889        | 0.628 (0.343)    | 0.552 (0.301)    | 1 (0.615) |    15.10 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           28 |     2274 | 2024-09-04 | Eternal Fire  | L   | 0.607      | -            | -                | -                | -         |    -4.24 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           27 |     2305 | 2024-09-03 | FaZe          | W   | 0.600      | 0.889        | 0.329 (0.176)    | -                | 1 (0.600) |    14.77 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           26 |     2739 | 2024-08-22 | UNPAID        | W   | 0.519      | -            | -                | -                | -         |     3.64 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           25 |     2789 | 2024-08-21 | BC.Game       | W   | 0.513      | -            | -                | -                | -         |     0.93 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           24 |     2825 | 2024-08-21 | 1WIN          | W   | 0.512      | -            | -                | -                | -         |     0.48 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           23 |     2979 | 2024-08-15 | Nemiga        | L   | 0.473      | -            | -                | -                | -         |    -7.09 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           22 |     3071 | 2024-08-12 | Zero Tenacity | W   | 0.455      | -            | -                | -                | -         |     2.25 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           21 |     3221 | 2024-08-07 | Rebels        | W   | 0.420      | -            | -                | -                | -         |     0.80 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           20 |     3265 | 2024-08-06 | PARIVISION    | W   | 0.414      | -            | -                | -                | -         |     1.47 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           19 |     3272 | 2024-08-06 | Permitta      | W   | 0.413      | 0.435        | -                | 1.000 (0.179)    | -         |     4.81 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           18 |     3309 | 2024-08-05 | 1WIN          | W   | 0.405      | -            | -                | -                | -         |     0.35 | Chill, LNZ, SaMey, xfl0ud, yxngstxr     |
|           17 |     3369 | 2024-08-03 | Passion UA    | W   | 0.393      | -            | -                | -                | -         |     4.14 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           16 |     3535 | 2024-07-30 | SINNERS       | W   | 0.366      | -            | -                | -                | -         |     2.97 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           15 |     3593 | 2024-07-28 | fnatic        | W   | 0.354      | 0.435        | 0.215 (0.033)    | -                | -         |     4.53 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           14 |     3609 | 2024-07-28 | Monte         | W   | 0.352      | -            | -                | -                | -         |     1.52 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           13 |     3630 | 2024-07-27 | B8            | W   | 0.345      | -            | -                | -                | -         |     3.93 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           12 |     3646 | 2024-07-26 | Permitta      | W   | 0.340      | -            | -                | -                | -         |     4.38 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           11 |     3760 | 2024-07-23 | Apogee        | W   | 0.320      | -            | -                | -                | -         |     0.39 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           10 |     3861 | 2024-07-20 | fnatic        | L   | 0.298      | -            | -                | -                | -         |    -5.78 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            9 |     3989 | 2024-07-17 | SAW           | L   | 0.281      | -            | -                | -                | -         |    -2.10 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            8 |     4001 | 2024-07-17 | B8            | W   | 0.281      | -            | -                | -                | -         |     3.33 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            7 |     4098 | 2024-07-15 | RUSH B        | W   | 0.268      | -            | -                | -                | -         |     0.33 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            6 |     4117 | 2024-07-15 | Rebels        | W   | 0.265      | -            | -                | -                | -         |     0.57 | imoRR, jottAAA, SaMey, xfl0ud, yxngstxr |
|            5 |     4535 | 2024-06-09 | KOI           | W   | 0.028      | -            | -                | -                | -         |     0.06 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            4 |     4599 | 2024-06-08 | SINNERS       | W   | 0.021      | -            | -                | -                | -         |     0.20 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            3 |     4664 | 2024-06-07 | Aurora        | W   | 0.014      | -            | -                | -                | -         |     0.07 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            2 |     4722 | 2024-06-06 | 3DMAX         | W   | 0.008      | -            | -                | -                | -         |     0.18 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            1 |     4785 | 2024-06-05 | SAW           | W   | 0.001      | -            | -                | -                | -         |     0.03 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($65,857.98)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.913 | $17,000.00     | $15,528.40      |
| 2024-10-19 |      0.908 | $25,000.00     | $22,701.87      |
| 2024-09-28 |      0.768 | $2,000.00      | $1,535.00       |
| 2024-09-22 |      0.728 | $12,000.00     | $8,734.95       |
| 2024-08-06 |      0.414 | $22,000.00     | $9,106.50       |
| 2024-07-28 |      0.354 | $22,000.00     | $7,792.83       |
| 2024-06-09 |      0.028 | $16,500.00     | $458.42         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
