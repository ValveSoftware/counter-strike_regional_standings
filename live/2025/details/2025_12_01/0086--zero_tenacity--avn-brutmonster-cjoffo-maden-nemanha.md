### Roster Details<br />
Team Name: Zero Tenacity<br />
Roster: aVN, brutmonster, Cjoffo, Maden, nEMANHA<br />
Global Rank: [86](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [59]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  997.0<br />
<br />
Final Rank Value (997.0) = Starting Rank Value (977.1) + Head To Head Adjustments (19.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.375[<sup>2</sup>](#table1)
- Opponent Network: 0.226[<sup>2</sup>](#table1)
- LAN Wins: 0.306[<sup>2</sup>](#table1)

The average of these factors is 0.303<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 977.1
- 400 + ( ( 0.303 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 977.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           67 |      233 | 2025-11-20 | Nuclear TigeRES  | L   | 1.000      | -            | -                | -                | -         |    -9.05 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           66 |      254 | 2025-11-20 | RUBY             | L   | 1.000      | -            | -                | -                | -         |   -15.48 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           65 |      662 | 2025-11-06 | Oramond          | L   | 1.000      | -            | -                | -                | -         |   -17.37 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           64 |      862 | 2025-10-29 | TPuDCATb TPu     | L   | 0.981      | -            | -                | -                | -         |   -12.51 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           63 |      929 | 2025-10-27 | SPARTA           | W   | 0.967      | 0.435        | -                | 0.679 (0.285)    | 0 (0.000) |     8.30 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           62 |     1033 | 2025-10-25 | kONO             | L   | 0.954      | -            | -                | -                | -         |   -18.63 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           61 |     1092 | 2025-10-24 | Sangal           | L   | 0.947      | -            | -                | -                | -         |    -9.45 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           60 |     1199 | 2025-10-21 | Washington       | W   | 0.926      | -            | -                | -                | 0 (0.000) |     4.24 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           59 |     1304 | 2025-10-16 | Alliance         | L   | 0.894      | -            | -                | -                | -         |    -8.19 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           58 |     1342 | 2025-10-15 | Friendly Campers | L   | 0.887      | -            | -                | -                | -         |    -6.15 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           57 |     1459 | 2025-10-10 | SINNERS          | W   | 0.854      | 0.384        | 0.171 (0.056)    | 1.000 (0.328)    | 0 (0.000) |    16.15 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           56 |     1563 | 2025-10-08 | JiJieHao         | W   | 0.840      | 0.384        | -                | 0.773 (0.250)    | 0 (0.000) |    10.06 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           55 |     1592 | 2025-10-08 | RUBY             | L   | 0.838      | -            | -                | -                | -         |   -12.16 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           54 |     1611 | 2025-10-07 | 1win             | L   | 0.834      | -            | -                | -                | -         |   -15.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           53 |     1730 | 2025-10-05 | FAVBET           | W   | 0.821      | 0.384        | 0.043 (0.014)    | 0.794 (0.250)    | 0 (0.000) |    11.52 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           52 |     1783 | 2025-10-04 | Mousquetaires    | W   | 0.814      | -            | -                | -                | 0 (0.000) |     6.45 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           51 |     1837 | 2025-10-03 | SINNERS          | L   | 0.806      | -            | -                | -                | -         |   -10.16 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           50 |     1919 | 2025-10-01 | Dziuseppe        | W   | 0.791      | -            | -                | -                | -         |     5.34 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           49 |     2061 | 2025-09-27 | Passion UA       | L   | 0.767      | -            | -                | -                | -         |    -3.93 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           48 |     2084 | 2025-09-27 | ECSTATIC         | W   | 0.766      | 0.339        | 0.081 (0.021)    | 0.727 (0.189)    | 1 (0.766) |    20.54 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           47 |     2117 | 2025-09-26 | Nexus            | W   | 0.760      | 0.339        | -                | 0.840 (0.217)    | 1 (0.760) |    12.56 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           46 |     2130 | 2025-09-26 | BIG Academy      | W   | 0.759      | -            | -                | -                | 1 (0.759) |     1.35 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           45 |     2143 | 2025-09-26 | Passion UA       | L   | 0.758      | -            | -                | -                | -         |    -3.09 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           44 |     2186 | 2025-09-25 | GenOne           | W   | 0.751      | -            | -                | -                | 1 (0.751) |     8.00 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           43 |     2460 | 2025-09-15 | RUBY             | L   | 0.685      | -            | -                | -                | -         |   -12.18 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           42 |     2510 | 2025-09-14 | Tricked          | L   | 0.678      | -            | -                | -                | -         |   -18.75 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           41 |     2529 | 2025-09-13 | ECSTATIC         | L   | 0.674      | -            | -                | -                | -         |    -3.40 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           40 |     2583 | 2025-09-12 | Nexus            | L   | 0.666      | -            | -                | -                | -         |   -10.20 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           39 |     2586 | 2025-09-12 | Oramond          | L   | 0.666      | -            | -                | -                | -         |   -10.91 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           38 |     2635 | 2025-09-11 | fnatic           | L   | 0.660      | -            | -                | -                | -         |    -2.22 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           37 |     2751 | 2025-09-09 | ARCRED           | W   | 0.645      | 0.435        | -                | 0.742 (0.208)    | -         |     4.68 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           36 |     2778 | 2025-09-08 | HOTU             | W   | 0.641      | 0.384        | 0.049 (0.012)    | -                | -         |    14.74 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           35 |     2807 | 2025-09-07 | FUT              | W   | 0.634      | 0.303        | 0.161 (0.031)    | -                | -         |    18.43 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           34 |     2813 | 2025-09-07 | ALGO             | W   | 0.633      | -            | -                | -                | -         |     1.21 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           33 |     2984 | 2025-08-29 | PARIVISION       | L   | 0.574      | -            | -                | -                | -         |    -2.38 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           32 |     3009 | 2025-08-29 | JiJieHao         | L   | 0.571      | -            | -                | -                | -         |   -12.49 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           31 |     3025 | 2025-08-28 | ENCE             | W   | 0.566      | 0.384        | 0.070 (0.015)    | 0.912 (0.199)    | -         |    15.54 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           30 |     3051 | 2025-08-27 | BetBoom          | L   | 0.561      | -            | -                | -                | -         |    -1.13 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           29 |     3107 | 2025-08-24 | Metizport        | W   | 0.540      | -            | -                | -                | -         |     9.84 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           28 |     3139 | 2025-08-22 | Partizan         | W   | 0.527      | -            | -                | -                | -         |     5.42 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           27 |     3217 | 2025-08-19 | FAVBET           | W   | 0.504      | 0.435        | 0.043 (0.010)    | 0.794 (0.174)    | -         |     5.91 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           26 |     3287 | 2025-08-16 | Nemiga           | W   | 0.487      | 0.384        | 0.083 (0.016)    | -                | -         |     9.40 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           25 |     3375 | 2025-08-14 | Partizan         | W   | 0.474      | -            | -                | -                | -         |     5.13 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           24 |     3533 | 2025-08-11 | Spirit Academy   | W   | 0.454      | -            | -                | -                | -         |     4.96 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           23 |     3651 | 2025-08-06 | Johnny Speeds    | L   | 0.420      | -            | -                | -                | -         |    -1.88 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           22 |     3667 | 2025-08-05 | 9INE             | L   | 0.412      | -            | -                | -                | -         |    -2.35 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           21 |     3690 | 2025-08-03 | Sangal           | W   | 0.398      | 0.435        | -                | 0.925 (0.160)    | -         |     7.88 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           20 |     3716 | 2025-08-01 | ECSTATIC         | L   | 0.388      | -            | -                | -                | -         |    -1.29 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           19 |     3729 | 2025-08-01 | SAW              | L   | 0.385      | -            | -                | -                | -         |    -0.36 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           18 |     3762 | 2025-07-29 | Passion UA       | W   | 0.366      | -            | -                | -                | -         |     2.71 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           17 |     3787 | 2025-07-28 | SINNERS          | W   | 0.359      | 0.384        | 0.171 (0.024)    | -                | -         |     9.67 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           16 |     3839 | 2025-07-26 | 1win             | W   | 0.347      | -            | -                | -                | -         |     4.54 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           15 |     3857 | 2025-07-25 | Venom            | W   | 0.340      | -            | -                | -                | -         |     8.12 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           14 |     3902 | 2025-07-21 | m1x              | W   | 0.313      | -            | -                | -                | -         |     1.03 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           13 |     3905 | 2025-07-21 | PARIVISION       | W   | 0.313      | 0.419        | 0.135 (0.018)    | -                | -         |     8.71 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           12 |     4191 | 2025-07-09 | Nuclear TigeRES  | L   | 0.233      | -            | -                | -                | -         |    -3.61 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           11 |     4351 | 2025-06-20 | BIG              | L   | 0.108      | -            | -                | -                | -         |    -2.52 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|           10 |     4378 | 2025-06-19 | fnatic           | L   | 0.099      | -            | -                | -                | -         |    -0.20 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|            9 |     4390 | 2025-06-18 | Partizan         | W   | 0.092      | -            | -                | -                | -         |     0.74 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|            8 |     4399 | 2025-06-17 | CYBERSHOKE       | L   | 0.087      | -            | -                | -                | -         |    -0.76 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|            7 |     4414 | 2025-06-16 | 9INE             | W   | 0.081      | -            | -                | -                | -         |     2.19 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|            6 |     4451 | 2025-06-15 | The Glecs        | W   | 0.071      | -            | -                | -                | -         |     0.23 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|            5 |     4516 | 2025-06-13 | PARIVISION       | W   | 0.059      | -            | -                | -                | -         |     1.64 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|            4 |     4520 | 2025-06-13 | ECLOT            | L   | 0.058      | -            | -                | -                | -         |    -0.53 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|            3 |     4562 | 2025-06-11 | SINNERS          | W   | 0.045      | -            | -                | -                | -         |     1.26 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|            2 |     4582 | 2025-06-10 | Marius           | W   | 0.037      | -            | -                | -                | -         |     0.04 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |
|            1 |     4634 | 2025-06-07 | Gentle Mates     | L   | 0.018      | -            | -                | -                | -         |    -0.02 | aVN, brutmonster, Cjoffo, Maden, nEMANHA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,061.62)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-20 |      0.920 | $1,250.00      | $1,150.43       |
| 2025-09-28 |      0.774 | $1,126.00      | $871.70         |
| 2025-09-01 |      0.594 | $1,750.00      | $1,039.50       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
