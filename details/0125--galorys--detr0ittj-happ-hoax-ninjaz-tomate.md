### Roster Details<br />
Team Name: Galorys<br />
Roster: detr0ittJ, happ, hoax, ninjaZ, Tomate<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [125](../standings_global.md)<br />
Regional Rank: [31]( ../standings_americas.md)<br />
Final Rank Value:  815.6<br />
<br />
Final Rank Value (815.6) = Starting Rank Value (906.1) + Head To Head Adjustments (-90.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.387[<sup>1</sup>](#table2)
- Bounty Collected: 0.369[<sup>2</sup>](#table1)
- Opponent Network: 0.187[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.236<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 906.1
- 400 + ( ( 0.236 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 906.1


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
|           87 |       36 | 2024-07-16 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -0.87 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           86 |       41 | 2024-07-16 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -0.88 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           85 |       57 | 2024-07-16 | Intense           | L   | 1.000      | -            | -                | -                | -         |   -23.06 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           84 |       85 | 2024-07-15 | inSanitY          | L   | 1.000      | -            | -                | -                | -         |    -6.99 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           83 |       89 | 2024-07-15 | inSanitY          | W   | 1.000      | 0.450        | 0.069 (0.031)    | 0.470 (0.211)    | 0 (0.000) |    25.07 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           82 |      164 | 2024-07-11 | Case              | L   | 1.000      | -            | -                | -                | -         |   -13.37 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           81 |      184 | 2024-07-10 | Sharks Youngsters | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.88 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           80 |      223 | 2024-07-08 | Hype              | L   | 1.000      | -            | -                | -                | -         |   -12.70 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           79 |      255 | 2024-06-30 | Vikings KR        | L   | 1.000      | -            | -                | -                | -         |   -17.00 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           78 |      262 | 2024-06-29 | inSanitY          | L   | 1.000      | -            | -                | -                | -         |    -7.81 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           77 |      273 | 2024-06-27 | Sharks            | L   | 1.000      | -            | -                | -                | -         |    -7.71 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           76 |      275 | 2024-06-27 | KRÜ               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    16.80 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           75 |      298 | 2024-06-18 | inSanitY          | L   | 1.000      | -            | -                | -                | -         |    -8.97 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           74 |      525 | 2024-06-09 | ODDIK             | L   | 0.949      | -            | -                | -                | -         |   -10.97 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           73 |      615 | 2024-06-08 | Case              | W   | 0.940      | 0.450        | 0.034 (0.014)    | 0.697 (0.295)    | 0 (0.000) |    14.83 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           72 |      648 | 2024-06-07 | Imperial          | L   | 0.935      | -            | -                | -                | -         |    -1.22 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           71 |      676 | 2024-06-07 | W7M               | L   | 0.933      | -            | -                | -                | -         |   -17.53 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           70 |      694 | 2024-06-06 | paiN              | L   | 0.930      | -            | -                | -                | -         |    -1.10 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           69 |      708 | 2024-06-06 | ex-Corinthians    | W   | 0.928      | -            | -                | -                | 0 (0.000) |     4.09 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           68 |      825 | 2024-06-04 | MIBR              | L   | 0.915      | -            | -                | -                | -         |    -0.56 | detr0ittJ, happ, hoax, ninjaZ, piriajr |
|           67 |      861 | 2024-06-03 | Intense           | L   | 0.908      | -            | -                | -                | -         |   -23.36 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           66 |      909 | 2024-06-01 | Hype              | L   | 0.894      | -            | -                | -                | -         |   -15.59 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           65 |      965 | 2024-05-30 | Hawks             | W   | 0.882      | -            | -                | -                | 0 (0.000) |     3.47 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           64 |     1051 | 2024-05-27 | Dusty Roots       | W   | 0.860      | -            | -                | -                | 0 (0.000) |     8.99 | detr0ittJ, happ, hoax, ninjaZ, Tomate  |
|           63 |     1231 | 2024-05-20 | Case              | L   | 0.814      | -            | -                | -                | -         |   -11.92 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           62 |     1254 | 2024-05-19 | Solid             | W   | 0.808      | 0.303        | 0.047 (0.011)    | 0.622 (0.152)    | 0 (0.000) |    12.90 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           61 |     1282 | 2024-05-18 | ODDIK             | L   | 0.801      | -            | -                | -                | -         |    -9.70 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           60 |     1397 | 2024-05-15 | Hype              | W   | 0.782      | -            | -                | -                | 0 (0.000) |    11.20 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           59 |     1408 | 2024-05-15 | Case              | L   | 0.780      | -            | -                | -                | -         |   -12.69 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           58 |     1449 | 2024-05-14 | Case              | L   | 0.775      | -            | -                | -                | -         |   -13.51 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           57 |     1453 | 2024-05-14 | Case              | W   | 0.775      | 0.450        | 0.034 (0.012)    | 0.697 (0.243)    | 0 (0.000) |    11.02 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           56 |     1465 | 2024-05-14 | 9z                | L   | 0.774      | -            | -                | -                | -         |    -0.33 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           55 |     1483 | 2024-05-13 | 9z                | L   | 0.769      | -            | -                | -                | -         |    -0.33 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           54 |     1490 | 2024-05-13 | Yawara            | W   | 0.767      | -            | -                | -                | -         |     2.25 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           53 |     1509 | 2024-05-12 | KRÜ               | W   | 0.762      | -            | -                | -                | -         |    12.92 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           52 |     1549 | 2024-05-11 | Case              | W   | 0.753      | 0.384        | -                | 0.697 (0.202)    | -         |    12.73 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           51 |     1609 | 2024-05-08 | paiN              | L   | 0.734      | -            | -                | -                | -         |    -0.54 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           50 |     1611 | 2024-05-08 | paiN              | L   | 0.734      | -            | -                | -                | -         |    -0.54 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           49 |     1631 | 2024-05-07 | KRÜ               | L   | 0.727      | -            | -                | -                | -         |   -10.97 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           48 |     1668 | 2024-05-05 | W7M               | L   | 0.713      | -            | -                | -                | -         |   -13.46 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           47 |     1974 | 2024-04-20 | Solid             | W   | 0.615      | 0.450        | 0.047 (0.013)    | 0.622 (0.172)    | -         |     9.99 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           46 |     1976 | 2024-04-20 | Solid             | L   | 0.615      | -            | -                | -                | -         |    -9.57 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           45 |     2152 | 2024-04-16 | Case              | L   | 0.589      | -            | -                | -                | -         |    -8.92 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           44 |     2189 | 2024-04-14 | MIBR              | L   | 0.575      | -            | -                | -                | -         |    -0.48 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           43 |     2208 | 2024-04-13 | Fluxo             | W   | 0.567      | 0.435        | 0.169 (0.042)    | 0.630 (0.155)    | -         |    13.63 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           42 |     2217 | 2024-04-12 | Sharks            | W   | 0.562      | -            | -                | -                | -         |     6.64 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           41 |     2235 | 2024-04-11 | Vikings KR        | L   | 0.556      | -            | -                | -                | -         |   -10.63 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           40 |     2244 | 2024-04-11 | BESTIA            | W   | 0.554      | 0.435        | 0.050 (0.012)    | 0.645 (0.155)    | -         |    10.45 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           39 |     2275 | 2024-04-10 | MIBR              | L   | 0.549      | -            | -                | -                | -         |    -0.43 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           38 |     2276 | 2024-04-10 | MIBR              | L   | 0.548      | -            | -                | -                | -         |    -0.44 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           37 |     2326 | 2024-04-09 | BESTIA            | W   | 0.542      | 0.450        | 0.050 (0.012)    | 0.645 (0.157)    | -         |    10.69 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           36 |     2331 | 2024-04-09 | BESTIA            | L   | 0.542      | -            | -                | -                | -         |    -6.46 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           35 |     2404 | 2024-04-07 | paiN              | L   | 0.528      | -            | -                | -                | -         |    -0.34 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           34 |     2634 | 2024-03-27 | Fluxo             | W   | 0.456      | 0.450        | 0.169 (0.035)    | 0.630 (0.129)    | -         |    10.80 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           33 |     2640 | 2024-03-27 | Fluxo             | L   | 0.455      | -            | -                | -                | -         |    -3.55 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           32 |     2680 | 2024-03-26 | 2GAME             | W   | 0.449      | -            | -                | -                | -         |     4.03 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           31 |     2682 | 2024-03-26 | 2GAME             | W   | 0.449      | -            | -                | -                | -         |     4.16 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           30 |     2876 | 2024-03-14 | W7M               | W   | 0.369      | -            | -                | -                | -         |     5.02 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           29 |     2879 | 2024-03-14 | W7M               | W   | 0.369      | -            | -                | -                | -         |     5.18 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           28 |     2922 | 2024-03-13 | RED Canids        | L   | 0.361      | -            | -                | -                | -         |    -1.78 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           27 |     2965 | 2024-03-11 | LA RUGONETA       | L   | 0.348      | -            | -                | -                | -         |    -9.28 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           26 |     2987 | 2024-03-10 | MIBR              | L   | 0.342      | -            | -                | -                | -         |    -0.25 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           25 |     3045 | 2024-03-08 | ODDIK             | W   | 0.326      | 0.435        | 0.084 (0.012)    | -                | -         |     7.32 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           24 |     3325 | 2024-02-24 | Sharks            | L   | 0.242      | -            | -                | -                | -         |    -2.64 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           23 |     3336 | 2024-02-24 | Sharks            | L   | 0.242      | -            | -                | -                | -         |    -2.69 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           22 |     3357 | 2024-02-23 | Corinthians       | L   | 0.235      | -            | -                | -                | -         |    -6.61 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           21 |     3358 | 2024-02-23 | Corinthians       | W   | 0.235      | -            | -                | -                | -         |     0.81 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           20 |     3375 | 2024-02-22 | MIBR Academy      | W   | 0.228      | -            | -                | -                | -         |     0.84 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           19 |     3390 | 2024-02-21 | adalYamigos       | L   | 0.222      | -            | -                | -                | -         |    -5.74 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           18 |     3394 | 2024-02-21 | adalYamigos       | L   | 0.222      | -            | -                | -                | -         |    -5.80 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           17 |     3397 | 2024-02-21 | Sharks            | L   | 0.221      | -            | -                | -                | -         |    -2.66 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           16 |     3469 | 2024-02-18 | Sharks            | L   | 0.202      | -            | -                | -                | -         |    -2.48 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           15 |     3471 | 2024-02-18 | Case              | W   | 0.202      | -            | -                | -                | -         |     3.82 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           14 |     3495 | 2024-02-17 | Sharks            | W   | 0.195      | -            | -                | -                | -         |     3.87 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           13 |     3498 | 2024-02-17 | Corinthians       | W   | 0.194      | -            | -                | -                | -         |     0.65 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           12 |     3520 | 2024-02-16 | Flamengo          | W   | 0.188      | -            | -                | -                | -         |     0.61 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           11 |     3526 | 2024-02-16 | Imperial          | L   | 0.187      | -            | -                | -                | -         |    -0.20 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|           10 |     3529 | 2024-02-16 | Imperial          | L   | 0.187      | -            | -                | -                | -         |    -0.20 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|            9 |     3554 | 2024-02-15 | 9z Academy        | W   | 0.181      | -            | -                | -                | -         |     0.33 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|            8 |     3581 | 2024-02-14 | Solid             | L   | 0.175      | -            | -                | -                | -         |    -2.53 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|            7 |     3594 | 2024-02-14 | Sharks            | L   | 0.174      | -            | -                | -                | -         |    -2.01 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|            6 |     3630 | 2024-02-13 | Case              | L   | 0.168      | -            | -                | -                | -         |    -2.18 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|            5 |     3640 | 2024-02-12 | inSanitY          | W   | 0.162      | -            | -                | -                | -         |     0.28 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|            4 |     3984 | 2024-01-22 | 9z                | L   | 0.022      | -            | -                | -                | -         |    -0.01 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|            3 |     4046 | 2024-01-20 | Flamengo          | L   | 0.009      | -            | -                | -                | -         |    -0.26 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|            2 |     4095 | 2024-01-19 | Sharks            | L   | 0.002      | -            | -                | -                | -         |    -0.03 | detr0ittJ, happ, hoax, koala, ninjaZ   |
|            1 |     4108 | 2024-01-19 | Imperial          | L   | 0.001      | -            | -                | -                | -         |    -0.00 | detr0ittJ, happ, hoax, koala, ninjaZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,389.85)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-19 |      1.000 | $1,075.00      | $1,075.00       |
| 2024-06-09 |      0.948 | $1,500.00      | $1,422.67       |
| 2024-04-15 |      0.582 | $5,000.00      | $2,908.32       |
| 2024-04-11 |      0.556 | $592.00        | $328.96         |
| 2024-02-22 |      0.228 | $1,417.00      | $323.40         |
| 2024-02-21 |      0.221 | $1,500.00      | $331.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
