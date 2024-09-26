### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal<br />
Global Rank: [69](../../standings_global_2024_09_26.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_26.md)<br />
Regional Rank: [52]( ../../standings_europe_2024_09_26.md)<br />
<br />
Final Rank Value:  942.4<br />
<br />
Final Rank Value (942.4) = Starting Rank Value (981.1) + Head To Head Adjustments (-38.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.445[<sup>1</sup>](#table2)
- Bounty Collected: 0.412[<sup>2</sup>](#table1)
- Opponent Network: 0.372[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.307<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 981.1
- 400 + ( ( 0.307 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 981.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           78 |       49 | 2024-09-25 | Aurora          | L   | 1.000      | -            | -                | -                | -         |    -7.12 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           77 |       62 | 2024-09-25 | CPH Wolves      | L   | 1.000      | -            | -                | -                | -         |   -17.75 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           76 |      101 | 2024-09-24 | Into the Breach | L   | 1.000      | -            | -                | -                | -         |   -14.41 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           75 |      213 | 2024-09-20 | CYBERSHOKE      | W   | 1.000      | 0.435        | -                | 0.866 (0.376)    | 0 (0.000) |    16.55 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           74 |      281 | 2024-09-18 | Insilio         | W   | 1.000      | 0.435        | -                | 0.804 (0.349)    | 0 (0.000) |    16.93 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           73 |      342 | 2024-09-16 | FAVBET          | L   | 1.000      | -            | -                | -                | -         |   -17.36 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           72 |      375 | 2024-09-15 | Nexus           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.73 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           71 |      547 | 2024-09-09 | NAVI Junior     | L   | 1.000      | -            | -                | -                | -         |   -20.23 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           70 |      599 | 2024-09-07 | CPH Wolves      | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.13 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           69 |      627 | 2024-09-06 | GamerLegion     | L   | 1.000      | -            | -                | -                | -         |   -12.92 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           68 |      656 | 2024-09-05 | GL Academy      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.29 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           67 |      729 | 2024-09-03 | Anonymo         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.49 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           66 |      757 | 2024-09-02 | 9INE            | W   | 1.000      | 0.435        | 0.091 (0.039)    | 0.796 (0.346)    | 0 (0.000) |    16.64 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           65 |      810 | 2024-08-30 | CPH Wolves      | W   | 1.000      | 0.435        | -                | 0.862 (0.374)    | 0 (0.000) |    12.28 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           64 |      817 | 2024-08-30 | OG              | L   | 1.000      | -            | -                | -                | -         |   -13.78 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           63 |      915 | 2024-08-28 | EYEBALLERS      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.13 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           62 |      955 | 2024-08-27 | B8              | L   | 1.000      | -            | -                | -                | -         |    -9.82 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           61 |      967 | 2024-08-27 | Revenant        | L   | 0.999      | -            | -                | -                | -         |   -16.70 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           60 |     1032 | 2024-08-26 | Passion UA      | W   | 0.993      | 0.435        | 0.133 (0.058)    | 1.000 (0.432)    | 0 (0.000) |    20.23 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           59 |     1174 | 2024-08-22 | DASH            | L   | 0.965      | -            | -                | -                | -         |   -26.54 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           58 |     1321 | 2024-08-18 | Permitta        | W   | 0.941      | 0.435        | -                | 1.000 (0.409)    | -         |    10.68 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           57 |     1327 | 2024-08-18 | BetBoom         | L   | 0.939      | -            | -                | -                | -         |    -6.72 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           56 |     1350 | 2024-08-17 | Insilio         | W   | 0.933      | 0.435        | -                | 0.804 (0.326)    | -         |    12.08 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           55 |     1367 | 2024-08-16 | RUBY            | W   | 0.928      | 0.435        | 0.053 (0.022)    | -                | -         |     9.73 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           54 |     1417 | 2024-08-15 | Rhyno           | L   | 0.918      | -            | -                | -                | -         |   -16.96 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           53 |     1463 | 2024-08-13 | DMS             | W   | 0.906      | -            | -                | -                | -         |     9.88 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           52 |     1513 | 2024-08-12 | SINNERS         | W   | 0.899      | 0.435        | 0.151 (0.059)    | 1.000 (0.391)    | -         |    17.49 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           51 |     1539 | 2024-08-11 | Nemiga          | L   | 0.893      | -            | -                | -                | -         |    -7.38 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           50 |     1552 | 2024-08-10 | CYBERSHOKE      | L   | 0.887      | -            | -                | -                | -         |   -14.01 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           49 |     1559 | 2024-08-10 | Sashi           | W   | 0.886      | 0.426        | 0.122 (0.046)    | -                | -         |    17.78 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           48 |     1586 | 2024-08-09 | MOUZ NXT        | W   | 0.879      | 0.426        | 0.081 (0.030)    | -                | -         |    16.65 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           47 |     1605 | 2024-08-08 | Space           | W   | 0.873      | -            | -                | -                | -         |     8.42 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           46 |     1620 | 2024-08-08 | Passion UA      | W   | 0.872      | 0.426        | 0.133 (0.050)    | 1.000 (0.371)    | -         |    18.74 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           45 |     1703 | 2024-08-06 | DMS             | W   | 0.859      | -            | -                | -                | -         |    12.09 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           44 |     1917 | 2024-07-31 | K27             | W   | 0.820      | -            | -                | -                | -         |     4.39 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           43 |     1924 | 2024-07-31 | Permitta        | W   | 0.819      | 0.426        | -                | 1.000 (0.349)    | -         |    13.71 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           42 |     1974 | 2024-07-30 | GUN5            | L   | 0.812      | -            | -                | -                | -         |   -12.33 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           41 |     2040 | 2024-07-28 | Space           | W   | 0.799      | -            | -                | -                | -         |    10.70 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           40 |     2073 | 2024-07-26 | Sampi           | L   | 0.787      | -            | -                | -                | -         |   -11.55 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           39 |     2126 | 2024-07-25 | Monte           | L   | 0.778      | -            | -                | -                | -         |   -11.38 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           38 |     2244 | 2024-07-21 | GUN5            | L   | 0.753      | -            | -                | -                | -         |   -11.32 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           37 |     2319 | 2024-07-19 | ALTERNATE aTTaX | W   | 0.739      | 0.435        | 0.087 (0.028)    | -                | -         |    11.50 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           36 |     2436 | 2024-07-17 | SINNERS         | L   | 0.727      | -            | -                | -                | -         |    -6.31 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           35 |     2439 | 2024-07-17 | 9INE            | L   | 0.726      | -            | -                | -                | -         |   -10.19 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           34 |     2492 | 2024-07-16 | Metizport       | L   | 0.720      | -            | -                | -                | -         |   -12.58 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           33 |     2540 | 2024-07-15 | Johnny Speeds   | L   | 0.713      | -            | -                | -                | -         |    -6.47 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           32 |     2601 | 2024-07-11 | Sashi           | L   | 0.686      | -            | -                | -                | -         |    -7.09 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           31 |     2605 | 2024-07-11 | 9INE            | W   | 0.685      | 0.358        | 0.091 (0.022)    | -                | -         |    11.92 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           30 |     2627 | 2024-07-10 | Johnny Speeds   | L   | 0.679      | -            | -                | -                | -         |    -6.25 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           29 |     2643 | 2024-07-09 | ROSOMAHA        | W   | 0.673      | -            | -                | -                | -         |     1.88 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           28 |     2826 | 2024-06-14 | GamerLegion     | L   | 0.507      | -            | -                | -                | -         |    -5.35 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           27 |     2937 | 2024-06-10 | MOUZ NXT        | W   | 0.480      | -            | -                | -                | -         |     8.57 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           26 |     3066 | 2024-06-08 | Entropiq        | W   | 0.465      | -            | -                | -                | -         |     0.70 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           25 |     3093 | 2024-06-07 | 9INE            | L   | 0.461      | -            | -                | -                | -         |    -6.41 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           24 |     3180 | 2024-06-06 | NAVI Junior     | L   | 0.452      | -            | -                | -                | -         |    -8.78 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           23 |     3192 | 2024-06-06 | 5W              | L   | 0.451      | -            | -                | -                | -         |    -9.61 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           22 |     3264 | 2024-06-04 | Rhyno           | L   | 0.441      | -            | -                | -                | -         |    -8.61 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           21 |     3486 | 2024-05-27 | Rhyno           | L   | 0.386      | -            | -                | -                | -         |    -7.71 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           20 |     3538 | 2024-05-24 | ALTERNATE aTTaX | W   | 0.366      | -            | -                | -                | -         |     5.68 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           19 |     3592 | 2024-05-22 | Permitta        | L   | 0.354      | -            | -                | -                | -         |    -7.08 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           18 |     3641 | 2024-05-21 | RUBY            | L   | 0.345      | -            | -                | -                | -         |    -7.38 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           17 |     3695 | 2024-05-19 | Sangal          | L   | 0.333      | -            | -                | -                | -         |    -2.20 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           16 |     3760 | 2024-05-17 | Zero Tenacity   | L   | 0.320      | -            | -                | -                | -         |    -4.36 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           15 |     3846 | 2024-05-15 | Passion UA      | W   | 0.307      | 0.435        | 0.133 (0.018)    | -                | -         |     4.88 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           14 |     3854 | 2024-05-15 | Sashi           | L   | 0.305      | -            | -                | -                | -         |    -3.82 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           13 |     3910 | 2024-05-14 | ALTERNATE aTTaX | L   | 0.299      | -            | -                | -                | -         |    -4.48 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           12 |     3969 | 2024-05-11 | MOUZ NXT        | L   | 0.281      | -            | -                | -                | -         |    -5.14 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           11 |     4023 | 2024-05-09 | PARIVISION      | W   | 0.267      | -            | -                | -                | -         |     4.65 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           10 |     4104 | 2024-05-05 | SINNERS         | L   | 0.240      | -            | -                | -                | -         |    -1.70 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            9 |     4125 | 2024-05-04 | Sampi           | W   | 0.232      | -            | -                | -                | -         |     3.33 | AZUWU, CRUC1AL, Frøg, MiGHTYMAX, Surreal  |
|            8 |     4150 | 2024-05-02 | MOUZ NXT        | W   | 0.221      | -            | -                | -                | -         |     2.99 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            7 |     4165 | 2024-05-02 | ECSTATIC        | W   | 0.219      | -            | -                | -                | -         |     2.76 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            6 |     4203 | 2024-04-30 | ALTERNATE aTTaX | W   | 0.207      | -            | -                | -                | -         |     3.52 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            5 |     4210 | 2024-04-30 | ENCE Academy    | W   | 0.206      | -            | -                | -                | -         |     0.83 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            4 |     4224 | 2024-04-29 | Nexus           | W   | 0.200      | -            | -                | -                | -         |     1.57 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            3 |     4237 | 2024-04-29 | Alliance        | L   | 0.198      | -            | -                | -                | -         |    -4.54 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            2 |     4345 | 2024-04-24 | SINNERS         | W   | 0.166      | -            | -                | -                | -         |     4.27 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            1 |     4578 | 2024-04-17 | EYEBALLERS      | W   | 0.118      | -            | -                | -                | -         |     0.83 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,931.44)
- Divide that value by the 5th highest value among all rosters ($332,851.90)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-08-28 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-08-18 |      0.940 | $5,000.00      | $4,701.75       |
| 2024-08-11 |      0.893 | $10,000.00     | $8,926.29       |
| 2024-06-17 |      0.526 | $2,500.00      | $1,315.20       |
| 2024-05-18 |      0.327 | $500.00        | $163.64         |
| 2024-05-12 |      0.287 | $2,000.00      | $574.55         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
