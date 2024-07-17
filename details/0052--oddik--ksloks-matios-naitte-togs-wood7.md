### Roster Details<br />
Team Name: ODDIK<br />
Roster: ksloks, matios, naitte, togs, WOOD7<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [52](../standings_global.md)<br />
Regional Rank: [12]( ../standings_americas.md)<br />
Final Rank Value:  1092.5<br />
<br />
Final Rank Value (1092.5) = Starting Rank Value (1037.6) + Head To Head Adjustments (54.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.481[<sup>1</sup>](#table2)
- Bounty Collected: 0.412[<sup>2</sup>](#table1)
- Opponent Network: 0.226[<sup>2</sup>](#table1)
- LAN Wins: 0.068[<sup>2</sup>](#table1)

The average of these factors is 0.297<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1037.6
- 400 + ( ( 0.297 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1037.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           87 |       38 | 2024-07-16 | BESTIA            | W   | 1.000      | 0.450        | 0.050 (0.022)    | 0.645 (0.290)    | 0 (0.000) |    13.59 | ksloks, matios, naitte, togs, WOOD7    |
|           86 |       42 | 2024-07-16 | BESTIA            | L   | 1.000      | -            | -                | -                | -         |   -18.11 | ksloks, matios, naitte, togs, WOOD7    |
|           85 |       53 | 2024-07-16 | BESTIA            | W   | 1.000      | 0.333        | 0.050 (0.017)    | 0.645 (0.215)    | 0 (0.000) |    13.18 | ksloks, matios, naitte, togs, WOOD7    |
|           84 |       90 | 2024-07-15 | Case              | W   | 1.000      | 0.333        | -                | 0.697 (0.232)    | 0 (0.000) |     9.90 | ksloks, matios, naitte, togs, WOOD7    |
|           83 |      122 | 2024-07-14 | Legacy            | W   | 1.000      | 0.371        | 0.178 (0.066)    | 0.572 (0.212)    | 0 (0.000) |    19.86 | ksloks, matios, naitte, togs, WOOD7    |
|           82 |      138 | 2024-07-13 | KRÜ               | W   | 1.000      | 0.371        | 0.034 (0.013)    | -                | 0 (0.000) |     9.57 | ksloks, matios, naitte, togs, WOOD7    |
|           81 |      159 | 2024-07-11 | Legacy            | W   | 1.000      | 0.371        | 0.178 (0.066)    | 0.572 (0.212)    | 0 (0.000) |    20.71 | ksloks, matios, naitte, togs, WOOD7    |
|           80 |      179 | 2024-07-10 | Patins da Ferrari | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.23 | ksloks, matios, naitte, togs, WOOD7    |
|           79 |      187 | 2024-07-10 | Hype              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.32 | ksloks, matios, naitte, togs, WOOD7    |
|           78 |      231 | 2024-07-08 | Sharks Youngsters | W   | 1.000      | -            | -                | -                | -         |     2.62 | ksloks, matios, naitte, togs, WOOD7    |
|           77 |      242 | 2024-07-06 | W7M               | W   | 1.000      | -            | -                | -                | -         |     7.58 | ksloks, matios, naitte, togs, WOOD7    |
|           76 |      355 | 2024-06-15 | paiN              | L   | 0.987      | -            | -                | -                | -         |    -1.89 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           75 |      425 | 2024-06-13 | Hype              | W   | 0.974      | -            | -                | -                | -         |    11.62 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           74 |      495 | 2024-06-10 | W7M               | W   | 0.954      | -            | -                | -                | -         |     8.39 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           73 |      525 | 2024-06-09 | Galorys           | W   | 0.949      | 0.450        | -                | 0.535 (0.228)    | -         |    10.97 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           72 |      543 | 2024-06-09 | Imperial          | L   | 0.947      | -            | -                | -                | -         |    -1.87 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           71 |      585 | 2024-06-08 | W7M               | W   | 0.942      | -            | -                | -                | -         |     8.53 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           70 |      650 | 2024-06-07 | BESTIA            | L   | 0.935      | -            | -                | -                | -         |    -9.92 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           69 |      720 | 2024-06-06 | Patins da Ferrari | L   | 0.928      | -            | -                | -                | -         |   -21.04 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           68 |      824 | 2024-06-04 | paiN              | L   | 0.915      | -            | -                | -                | -         |    -1.71 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           67 |     1192 | 2024-05-21 | Case              | L   | 0.821      | -            | -                | -                | -         |   -14.67 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           66 |     1249 | 2024-05-19 | Case              | W   | 0.809      | -            | -                | -                | -         |    10.64 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           65 |     1276 | 2024-05-18 | RED Canids        | L   | 0.802      | -            | -                | -                | -         |    -5.77 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           64 |     1282 | 2024-05-18 | Galorys           | W   | 0.801      | -            | -                | -                | -         |     9.70 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           63 |     1316 | 2024-05-17 | FURIA Academy     | W   | 0.795      | -            | -                | -                | -         |     2.00 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           62 |     1318 | 2024-05-17 | Sharks            | W   | 0.794      | 0.371        | 0.046 (0.014)    | -                | -         |    14.68 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           61 |     1344 | 2024-05-16 | 9z                | L   | 0.789      | -            | -                | -                | -         |    -0.57 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           60 |     1350 | 2024-05-16 | Solid             | L   | 0.788      | -            | -                | -                | -         |   -14.65 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           59 |     1396 | 2024-05-15 | BESTIA            | L   | 0.782      | -            | -                | -                | -         |   -12.65 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           58 |     1398 | 2024-05-15 | BESTIA            | L   | 0.781      | -            | -                | -                | -         |   -13.56 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           57 |     1439 | 2024-05-14 | Solid             | L   | 0.776      | -            | -                | -                | -         |   -15.88 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           56 |     1445 | 2024-05-14 | Solid             | W   | 0.776      | 0.450        | 0.047 (0.016)    | 0.622 (0.217)    | -         |     8.50 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           55 |     1463 | 2024-05-14 | KRÜ               | W   | 0.774      | -            | -                | -                | -         |     9.07 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           54 |     1471 | 2024-05-14 | Fluxo             | L   | 0.773      | -            | -                | -                | -         |    -7.74 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           53 |     1486 | 2024-05-13 | Solid             | W   | 0.768      | 0.371        | 0.047 (0.013)    | -                | -         |     8.93 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           52 |     1510 | 2024-05-12 | Intense           | W   | 0.762      | -            | -                | -                | -         |     2.04 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           51 |     1531 | 2024-05-11 | ex-Corinthians    | W   | 0.755      | -            | -                | -                | -         |     1.83 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           50 |     1588 | 2024-05-09 | inSanitY          | L   | 0.740      | -            | -                | -                | -         |   -13.12 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           49 |     1623 | 2024-05-07 | Imperial          | L   | 0.729      | -            | -                | -                | -         |    -1.76 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           48 |     1655 | 2024-05-05 | Case              | W   | 0.716      | 0.435        | -                | 0.697 (0.217)    | -         |     8.95 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           47 |     1714 | 2024-05-02 | Case              | L   | 0.695      | -            | -                | -                | -         |   -13.54 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           46 |     1715 | 2024-05-02 | Case              | W   | 0.695      | 0.450        | -                | 0.697 (0.218)    | -         |     8.41 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           45 |     1852 | 2024-04-26 | W7M               | W   | 0.655      | -            | -                | -                | -         |     5.58 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           44 |     1854 | 2024-04-26 | W7M               | W   | 0.655      | -            | -                | -                | -         |     5.85 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           43 |     1902 | 2024-04-24 | paiN              | L   | 0.642      | -            | -                | -                | -         |    -0.91 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           42 |     1903 | 2024-04-24 | paiN              | W   | 0.642      | 0.450        | 0.476 (0.138)    | 0.763 (0.220)    | -         |    19.42 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           41 |     2108 | 2024-04-17 | Fluxo             | L   | 0.596      | -            | -                | -                | -         |    -6.08 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           40 |     2116 | 2024-04-17 | W7M               | W   | 0.595      | -            | -                | -                | -         |     5.85 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           39 |     2150 | 2024-04-16 | SPORT             | W   | 0.589      | -            | -                | -                | -         |     3.42 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           38 |     2201 | 2024-04-13 | paiN              | L   | 0.568      | -            | -                | -                | -         |    -0.65 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           37 |     2222 | 2024-04-12 | Solid             | W   | 0.560      | 0.435        | 0.047 (0.011)    | -                | -         |     7.39 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           36 |     2266 | 2024-04-10 | Sharks            | L   | 0.549      | -            | -                | -                | -         |   -12.67 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           35 |     2272 | 2024-04-10 | Sharks            | W   | 0.549      | -            | -                | -                | -         |     4.62 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           34 |     2327 | 2024-04-09 | Fluxo             | L   | 0.542      | -            | -                | -                | -         |    -5.78 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           33 |     2332 | 2024-04-09 | Fluxo             | L   | 0.542      | -            | -                | -                | -         |    -6.04 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           32 |     2368 | 2024-04-08 | Fluxo             | L   | 0.535      | -            | -                | -                | -         |    -6.23 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           31 |     2421 | 2024-04-06 | Sharks            | L   | 0.521      | -            | -                | -                | -         |   -12.81 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           30 |     2424 | 2024-04-06 | LA RUGONETA       | W   | 0.520      | -            | -                | -                | -         |     1.36 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           29 |     2438 | 2024-04-05 | MIBR              | L   | 0.515      | -            | -                | -                | -         |    -0.78 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           28 |     2464 | 2024-04-04 | Imperial          | L   | 0.509      | -            | -                | -                | -         |    -1.11 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           27 |     2469 | 2024-04-04 | Imperial          | L   | 0.508      | -            | -                | -                | -         |    -1.12 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           26 |     2503 | 2024-04-03 | RED Canids        | L   | 0.502      | -            | -                | -                | -         |    -4.48 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           25 |     2506 | 2024-04-03 | RED Canids        | L   | 0.502      | -            | -                | -                | -         |    -4.64 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           24 |     2681 | 2024-03-26 | MIBR              | L   | 0.449      | -            | -                | -                | -         |    -0.74 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           23 |     2683 | 2024-03-26 | MIBR              | L   | 0.449      | -            | -                | -                | -         |    -0.75 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           22 |     2790 | 2024-03-18 | RED Canids        | L   | 0.394      | -            | -                | -                | -         |    -3.80 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           21 |     2811 | 2024-03-17 | Case              | W   | 0.388      | -            | -                | -                | -         |     4.57 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           20 |     2833 | 2024-03-16 | RED Canids        | L   | 0.382      | -            | -                | -                | -         |    -3.72 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           19 |     2848 | 2024-03-15 | 2GAME             | W   | 0.376      | -            | -                | -                | -         |     1.81 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           18 |     2849 | 2024-03-15 | 2GAME             | W   | 0.375      | -            | -                | -                | -         |     1.85 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           17 |     2853 | 2024-03-15 | MIBR Academy      | W   | 0.374      | -            | -                | -                | -         |     0.69 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           16 |     2910 | 2024-03-13 | Sharks            | L   | 0.361      | -            | -                | -                | -         |    -6.27 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           15 |     2923 | 2024-03-13 | Case              | W   | 0.360      | -            | -                | -                | -         |     4.49 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           14 |     2994 | 2024-03-10 | Solid             | W   | 0.341      | -            | -                | -                | -         |     3.87 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           13 |     2999 | 2024-03-10 | LA RUGONETA       | L   | 0.340      | -            | -                | -                | -         |   -10.07 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           12 |     3045 | 2024-03-08 | Galorys           | L   | 0.326      | -            | -                | -                | -         |    -7.32 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           11 |     3156 | 2024-03-04 | paiN              | L   | 0.300      | -            | -                | -                | -         |    -0.46 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           10 |     3171 | 2024-03-03 | RED Canids        | W   | 0.295      | -            | -                | -                | 1 (0.295) |     6.36 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            9 |     3195 | 2024-03-02 | Elevate           | W   | 0.288      | -            | -                | -                | 1 (0.288) |     5.17 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            8 |     3223 | 2024-03-01 | M80               | L   | 0.281      | -            | -                | -                | -         |    -2.02 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            7 |     3775 | 2024-02-02 | BESTIA            | L   | 0.096      | -            | -                | -                | -         |    -1.52 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            6 |     3782 | 2024-02-02 | 9z                | L   | 0.095      | -            | -                | -                | -         |    -0.05 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            5 |     3982 | 2024-01-22 | Fluxo             | L   | 0.022      | -            | -                | -                | -         |    -0.32 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            4 |     4015 | 2024-01-21 | RED Canids        | W   | 0.015      | -            | -                | -                | -         |     0.33 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            3 |     4055 | 2024-01-20 | 9z                | W   | 0.008      | -            | -                | -                | -         |     0.23 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            2 |     4094 | 2024-01-19 | Flamengo          | W   | 0.003      | -            | -                | -                | -         |     0.00 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            1 |     4111 | 2024-01-19 | MIBR              | L   | 0.001      | -            | -                | -                | -         |    -0.00 | matios, naitte, ponter, Tuurtle, WOOD7 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,553.93)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-14 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-16 |      0.995 | $5,000.00      | $4,974.03       |
| 2024-06-10 |      0.956 | $750.00        | $716.68         |
| 2024-06-09 |      0.948 | $1,500.00      | $1,422.67       |
| 2024-05-21 |      0.821 | $1,500.00      | $1,232.01       |
| 2024-05-19 |      0.808 | $2,000.00      | $1,616.89       |
| 2024-03-18 |      0.394 | $1,500.00      | $591.66         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
