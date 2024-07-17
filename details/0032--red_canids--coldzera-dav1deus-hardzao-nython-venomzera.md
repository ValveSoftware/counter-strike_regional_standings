### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, dav1deuS, hardzao, nython, venomzera<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [32](../standings_global.md)<br />
Regional Rank: [9]( ../standings_americas.md)<br />
Final Rank Value:  1245.3<br />
<br />
Final Rank Value (1245.3) = Starting Rank Value (1178.4) + Head To Head Adjustments (66.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.523[<sup>1</sup>](#table2)
- Bounty Collected: 0.529[<sup>2</sup>](#table1)
- Opponent Network: 0.251[<sup>2</sup>](#table1)
- LAN Wins: 0.147[<sup>2</sup>](#table1)

The average of these factors is 0.362<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1178.4
- 400 + ( ( 0.362 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1178.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           82 |       32 | 2024-07-16 | Sharks          | W   | 1.000      | 0.450        | -                | 0.501 (0.225)    | 0 (0.000) |     6.61 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           81 |       40 | 2024-07-16 | Sharks          | W   | 1.000      | 0.450        | -                | 0.501 (0.225)    | 0 (0.000) |     7.02 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           80 |      136 | 2024-07-13 | Legacy          | L   | 1.000      | -            | -                | -                | -         |   -19.31 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           79 |      162 | 2024-07-11 | KRÜ             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.82 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           78 |      197 | 2024-07-09 | Bounty Hunters  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.03 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           77 |      220 | 2024-07-08 | SPORT           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.69 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           76 |      336 | 2024-06-15 | fnatic          | L   | 0.989      | -            | -                | -                | -         |    -6.68 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           75 |      371 | 2024-06-14 | KOI             | L   | 0.983      | -            | -                | -                | -         |   -18.83 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           74 |      377 | 2024-06-14 | fnatic          | W   | 0.981      | 0.548        | 0.300 (0.162)    | 0.632 (0.340)    | 1 (0.981) |    23.88 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           73 |      523 | 2024-06-09 | BESTIA          | L   | 0.949      | -            | -                | -                | -         |   -21.99 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           72 |      527 | 2024-06-09 | Imperial        | L   | 0.948      | -            | -                | -                | -         |    -7.79 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           71 |      662 | 2024-06-07 | Intense         | W   | 0.934      | -            | -                | -                | 0 (0.000) |     0.83 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           70 |      702 | 2024-06-06 | Imperial        | W   | 0.929      | 0.450        | 0.386 (0.162)    | 0.607 (0.254)    | 0 (0.000) |    21.38 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           69 |      770 | 2024-06-05 | 9z              | W   | 0.922      | 0.450        | 0.606 (0.251)    | 0.728 (0.302)    | 0 (0.000) |    25.95 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           68 |     1186 | 2024-05-21 | Sharks          | L   | 0.822      | -            | -                | -                | -         |   -19.48 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           67 |     1190 | 2024-05-21 | Sharks          | W   | 0.821      | -            | -                | -                | -         |     6.18 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           66 |     1220 | 2024-05-20 | Fluxo           | L   | 0.815      | -            | -                | -                | -         |   -15.95 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           65 |     1222 | 2024-05-20 | Fluxo           | W   | 0.815      | 0.450        | 0.169 (0.062)    | 0.630 (0.231)    | -         |     9.68 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           64 |     1251 | 2024-05-19 | 9z              | W   | 0.808      | 0.371        | 0.606 (0.181)    | 0.728 (0.218)    | -         |    23.13 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           63 |     1276 | 2024-05-18 | ODDIK           | W   | 0.802      | 0.371        | 0.084 (0.025)    | 0.678 (0.201)    | -         |     5.77 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           62 |     1347 | 2024-05-16 | Fluxo           | W   | 0.788      | 0.371        | 0.169 (0.049)    | -                | -         |    10.91 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           61 |     1390 | 2024-05-15 | 9z              | L   | 0.782      | -            | -                | -                | -         |    -1.76 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           60 |     1392 | 2024-05-15 | 9z              | W   | 0.782      | 0.450        | 0.606 (0.213)    | 0.728 (0.256)    | -         |    23.11 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           59 |     1450 | 2024-05-14 | Corinthians     | W   | 0.775      | -            | -                | -                | -         |     0.59 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           58 |     1454 | 2024-05-14 | Corinthians     | W   | 0.775      | -            | -                | -                | -         |     0.59 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           57 |     1468 | 2024-05-14 | BESTIA          | W   | 0.774      | -            | -                | -                | -         |     6.37 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           56 |     1485 | 2024-05-13 | Sharks          | L   | 0.768      | -            | -                | -                | -         |   -17.23 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           55 |     1505 | 2024-05-12 | Vikings KR      | W   | 0.762      | -            | -                | -                | -         |     2.84 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           54 |     1514 | 2024-05-12 | FURIA Academy   | W   | 0.761      | -            | -                | -                | -         |     0.60 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           53 |     1568 | 2024-05-10 | paiN            | L   | 0.747      | -            | -                | -                | -         |    -3.14 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           52 |     1585 | 2024-05-09 | Intense         | W   | 0.742      | -            | -                | -                | -         |     0.78 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           51 |     1603 | 2024-05-08 | paiN            | L   | 0.736      | -            | -                | -                | -         |    -2.89 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           50 |     1605 | 2024-05-08 | paiN            | W   | 0.735      | 0.450        | 0.476 (0.158)    | 0.763 (0.253)    | -         |    20.60 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           49 |     1606 | 2024-05-08 | Solid           | L   | 0.735      | -            | -                | -                | -         |   -18.81 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           48 |     1650 | 2024-05-06 | Intense         | W   | 0.720      | -            | -                | -                | -         |     0.72 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           47 |     1880 | 2024-04-25 | BESTIA          | W   | 0.649      | -            | -                | -                | -         |     4.28 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           46 |     1882 | 2024-04-25 | BESTIA          | W   | 0.648      | -            | -                | -                | -         |     4.44 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           45 |     2109 | 2024-04-17 | MIBR            | L   | 0.595      | -            | -                | -                | -         |    -1.85 | dav1deuS, hardzao, nython, righi, venomzera    |
|           44 |     2117 | 2024-04-17 | O PLANO         | W   | 0.595      | -            | -                | -                | -         |     0.50 | dav1deuS, hardzao, nython, righi, venomzera    |
|           43 |     2151 | 2024-04-16 | LaChampionsLiga | W   | 0.589      | -            | -                | -                | -         |     0.23 | dav1deuS, hardzao, nython, righi, venomzera    |
|           42 |     2200 | 2024-04-13 | Imperial        | L   | 0.569      | -            | -                | -                | -         |    -2.97 | dav1deuS, hardzao, nython, righi, venomzera    |
|           41 |     2219 | 2024-04-12 | W7M             | W   | 0.561      | -            | -                | -                | -         |     2.32 | dav1deuS, hardzao, nython, righi, venomzera    |
|           40 |     2274 | 2024-04-10 | 2GAME           | W   | 0.549      | -            | -                | -                | -         |     1.15 | dav1deuS, hardzao, nython, righi, venomzera    |
|           39 |     2278 | 2024-04-10 | 2GAME           | W   | 0.548      | -            | -                | -                | -         |     1.16 | dav1deuS, hardzao, nython, righi, venomzera    |
|           38 |     2281 | 2024-04-10 | paiN            | L   | 0.548      | -            | -                | -                | -         |    -1.72 | dav1deuS, hardzao, nython, righi, venomzera    |
|           37 |     2328 | 2024-04-09 | W7M             | W   | 0.542      | -            | -                | -                | -         |     2.30 | dav1deuS, hardzao, nython, righi, venomzera    |
|           36 |     2333 | 2024-04-09 | W7M             | W   | 0.542      | -            | -                | -                | -         |     2.35 | dav1deuS, hardzao, nython, righi, venomzera    |
|           35 |     2334 | 2024-04-09 | MIBR            | L   | 0.541      | -            | -                | -                | -         |    -1.90 | dav1deuS, hardzao, nython, righi, venomzera    |
|           34 |     2367 | 2024-04-08 | BESTIA          | W   | 0.535      | -            | -                | -                | -         |     4.40 | dav1deuS, hardzao, nython, righi, venomzera    |
|           33 |     2375 | 2024-04-08 | Bounty Hunters  | W   | 0.534      | -            | -                | -                | -         |     3.31 | dav1deuS, hardzao, nython, righi, venomzera    |
|           32 |     2403 | 2024-04-07 | Imperial        | L   | 0.528      | -            | -                | -                | -         |    -2.48 | dav1deuS, hardzao, nython, righi, venomzera    |
|           31 |     2422 | 2024-04-06 | W7M             | L   | 0.521      | -            | -                | -                | -         |   -14.32 | dav1deuS, hardzao, nython, righi, venomzera    |
|           30 |     2463 | 2024-04-04 | Case            | L   | 0.509      | -            | -                | -                | -         |   -13.06 | dav1deuS, hardzao, nython, righi, venomzera    |
|           29 |     2466 | 2024-04-04 | Case            | W   | 0.508      | -            | -                | -                | -         |     2.93 | dav1deuS, hardzao, nython, righi, venomzera    |
|           28 |     2480 | 2024-04-04 | Fluxo           | W   | 0.507      | -            | -                | -                | -         |     5.79 | dav1deuS, hardzao, nython, righi, venomzera    |
|           27 |     2503 | 2024-04-03 | ODDIK           | W   | 0.502      | -            | -                | -                | -         |     4.48 | dav1deuS, hardzao, nython, righi, venomzera    |
|           26 |     2506 | 2024-04-03 | ODDIK           | W   | 0.502      | -            | -                | -                | -         |     4.64 | dav1deuS, hardzao, nython, righi, venomzera    |
|           25 |     2790 | 2024-03-18 | ODDIK           | W   | 0.394      | -            | -                | -                | -         |     3.80 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           24 |     2833 | 2024-03-16 | ODDIK           | W   | 0.382      | -            | -                | -                | -         |     3.72 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           23 |     2850 | 2024-03-15 | Case            | W   | 0.375      | -            | -                | -                | -         |     2.52 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           22 |     2883 | 2024-03-14 | Solid           | L   | 0.368      | -            | -                | -                | -         |    -9.33 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           21 |     2891 | 2024-03-14 | Flamengo        | W   | 0.367      | -            | -                | -                | -         |     0.27 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           20 |     2909 | 2024-03-13 | Case            | W   | 0.362      | -            | -                | -                | -         |     2.37 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           19 |     2922 | 2024-03-13 | Galorys         | W   | 0.361      | -            | -                | -                | -         |     1.78 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           18 |     2953 | 2024-03-12 | BESTIA          | W   | 0.354      | -            | -                | -                | -         |     3.35 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           17 |     2971 | 2024-03-11 | Corinthians     | W   | 0.347      | -            | -                | -                | -         |     0.27 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           16 |     3007 | 2024-03-09 | W7M             | W   | 0.336      | -            | -                | -                | -         |     1.45 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           15 |     3054 | 2024-03-07 | VELOX           | W   | 0.322      | -            | -                | -                | -         |     0.13 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           14 |     3171 | 2024-03-03 | ODDIK           | L   | 0.295      | -            | -                | -                | -         |    -6.36 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           13 |     3205 | 2024-03-02 | paiN            | L   | 0.287      | -            | -                | -                | -         |    -0.86 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           12 |     3220 | 2024-03-01 | Wildcard        | W   | 0.281      | -            | -                | -                | 1 (0.281) |     2.04 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           11 |     3620 | 2024-02-13 | Imperial        | L   | 0.169      | -            | -                | -                | -         |    -0.81 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           10 |     3624 | 2024-02-13 | Imperial        | W   | 0.169      | 0.450        | 0.386 (0.029)    | -                | -         |     4.54 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            9 |     3809 | 2024-02-01 | W7M             | L   | 0.089      | -            | -                | -                | -         |    -2.43 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            8 |     3812 | 2024-02-01 | paiN            | L   | 0.088      | -            | -                | -                | -         |    -0.26 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            7 |     3985 | 2024-01-22 | W7M             | L   | 0.022      | -            | -                | -                | -         |    -0.61 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            6 |     4010 | 2024-01-21 | 9z              | W   | 0.017      | -            | -                | -                | -         |     0.52 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            5 |     4011 | 2024-01-21 | Flamengo        | W   | 0.016      | -            | -                | -                | -         |     0.01 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            4 |     4015 | 2024-01-21 | ODDIK           | L   | 0.015      | -            | -                | -                | -         |    -0.33 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            3 |     4048 | 2024-01-20 | Legacy          | L   | 0.008      | -            | -                | -                | -         |    -0.16 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            2 |     4100 | 2024-01-19 | Fluxo           | W   | 0.002      | -            | -                | -                | -         |     0.03 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            1 |     4114 | 2024-01-19 | Case            | W   | 0.001      | -            | -                | -                | -         |     0.00 | dav1deuS, destiny, hardzao, nython, venomzera  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30,107.25)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-14 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-16 |      0.996 | $1,500.00      | $1,493.66       |
| 2024-06-10 |      0.956 | $750.00        | $716.68         |
| 2024-06-09 |      0.948 | $11,500.00     | $10,907.17      |
| 2024-05-19 |      0.808 | $10,000.00     | $8,084.44       |
| 2024-03-18 |      0.394 | $3,500.00      | $1,380.53       |
| 2024-03-14 |      0.368 | $15,000.00     | $5,524.77       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
