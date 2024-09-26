### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, dav1deuS, HEN1, nython, venomzera<br />
Global Rank: [33](../../standings_global_2024_09_26.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_09_26.md)<br />
Regional Rank: [11]( ../../standings_americas_2024_09_26.md)<br />
<br />
Final Rank Value:  1106.4<br />
<br />
Final Rank Value (1106.4) = Starting Rank Value (1080.8) + Head To Head Adjustments (25.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.464[<sup>1</sup>](#table2)
- Bounty Collected: 0.464[<sup>2</sup>](#table1)
- Opponent Network: 0.245[<sup>2</sup>](#table1)
- LAN Wins: 0.266[<sup>2</sup>](#table1)

The average of these factors is 0.360<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1080.8
- 400 + ( ( 0.360 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1080.8


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
|           95 |       37 | 2024-09-25 | Fluxo           | L   | 1.000      | -            | -                | -                | -         |   -18.23 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           94 |       41 | 2024-09-25 | Fluxo           | L   | 1.000      | -            | -                | -                | -         |   -19.84 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           93 |       92 | 2024-09-24 | ODDIK           | W   | 1.000      | 0.450        | 0.155 (0.070)    | 0.760 (0.342)    | 0 (0.000) |    11.33 | dav1deuS, hardzao, HEN1, nython, venomzera     |
|           92 |       98 | 2024-09-24 | ODDIK           | L   | 1.000      | -            | -                | -                | -         |   -20.56 | dav1deuS, hardzao, HEN1, nython, venomzera     |
|           91 |      102 | 2024-09-24 | Fluxo           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.80 | dav1deuS, gtw, HEN1, nython, venomzera         |
|           90 |      133 | 2024-09-23 | paiN            | L   | 1.000      | -            | -                | -                | -         |    -2.64 | dav1deuS, gtw, HEN1, nython, venomzera         |
|           89 |      144 | 2024-09-23 | Fluxo           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.12 | dav1deuS, gtw, HEN1, nython, venomzera         |
|           88 |      366 | 2024-09-15 | FURIA           | L   | 1.000      | -            | -                | -                | -         |    -2.43 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           87 |      406 | 2024-09-14 | Falcons         | W   | 1.000      | 0.889        | 0.286 (0.254)    | 0.479 (0.426)    | 1 (1.000) |    26.45 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           86 |      440 | 2024-09-13 | FURIA           | L   | 1.000      | -            | -                | -                | -         |    -1.98 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           85 |      464 | 2024-09-12 | ENCE            | W   | 1.000      | 0.889        | 0.103 (0.091)    | 0.277 (0.246)    | 1 (1.000) |    12.44 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           84 |      522 | 2024-09-10 | Virtus.pro      | L   | 1.000      | -            | -                | -                | -         |    -2.82 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           83 |      886 | 2024-08-28 | Fluxo           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.75 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           82 |      899 | 2024-08-28 | ODDIK           | W   | 1.000      | 0.143        | 0.155 (0.022)    | -                | 0 (0.000) |    15.56 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           81 |      948 | 2024-08-27 | Solid           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.31 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           80 |     1003 | 2024-08-26 | Intense         | W   | 0.995      | -            | -                | -                | 0 (0.000) |     4.04 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           79 |     1045 | 2024-08-26 | Case            | L   | 0.993      | -            | -                | -                | -         |   -24.54 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           78 |     1380 | 2024-08-15 | KRÜ             | L   | 0.922      | -            | -                | -                | -         |   -24.06 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           77 |     1384 | 2024-08-15 | KRÜ             | W   | 0.922      | 0.450        | -                | 0.567 (0.235)    | -         |     4.62 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           76 |     1632 | 2024-08-07 | Case            | W   | 0.869      | 0.450        | -                | 0.651 (0.255)    | -         |     5.74 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           75 |     1634 | 2024-08-07 | Case            | W   | 0.868      | 0.450        | -                | 0.651 (0.254)    | -         |     6.05 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           74 |     1744 | 2024-08-04 | ODDIK           | L   | 0.849      | -            | -                | -                | -         |   -13.70 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           73 |     1747 | 2024-08-04 | BESTIA          | W   | 0.848      | -            | -                | -                | -         |     7.67 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           72 |     1776 | 2024-08-03 | ODDIK           | L   | 0.843      | -            | -                | -                | -         |   -14.36 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           71 |     1785 | 2024-08-03 | Vikings KR      | W   | 0.841      | -            | -                | -                | -         |     3.50 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           70 |     2011 | 2024-07-28 | MIBR            | L   | 0.803      | -            | -                | -                | -         |    -4.65 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           69 |     2017 | 2024-07-28 | paiN            | L   | 0.801      | -            | -                | -                | -         |    -2.82 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           68 |     2071 | 2024-07-26 | ODDIK           | L   | 0.787      | -            | -                | -                | -         |   -16.05 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           67 |     2136 | 2024-07-24 | Fluxo           | W   | 0.776      | -            | -                | -                | -         |    11.33 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           66 |     2140 | 2024-07-24 | ODDIK           | W   | 0.775      | -            | -                | -                | -         |     9.38 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           65 |     2169 | 2024-07-23 | KRÜ             | W   | 0.769      | -            | -                | -                | -         |     4.22 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           64 |     2177 | 2024-07-23 | LaChampionsLiga | W   | 0.768      | -            | -                | -                | -         |     0.86 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           63 |     2213 | 2024-07-22 | paiN Academy    | W   | 0.761      | -            | -                | -                | -         |     0.43 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           62 |     2236 | 2024-07-21 | BESTIA          | L   | 0.754      | -            | -                | -                | -         |   -17.83 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           61 |     2267 | 2024-07-20 | Case            | W   | 0.747      | 0.384        | -                | 0.651 (0.187)    | -         |     4.66 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           60 |     2303 | 2024-07-19 | Intense         | W   | 0.741      | -            | -                | -                | -         |     2.30 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           59 |     2408 | 2024-07-17 | Hype            | W   | 0.728      | -            | -                | -                | -         |     4.12 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           58 |     2414 | 2024-07-17 | Hype            | W   | 0.728      | -            | -                | -                | -         |     4.28 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           57 |     2466 | 2024-07-16 | Sharks          | W   | 0.722      | 0.450        | -                | 0.517 (0.168)    | -         |     6.56 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           56 |     2474 | 2024-07-16 | Sharks          | W   | 0.722      | 0.450        | -                | 0.517 (0.168)    | -         |     6.92 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           55 |     2570 | 2024-07-13 | Legacy          | L   | 0.701      | -            | -                | -                | -         |   -15.05 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           54 |     2596 | 2024-07-11 | KRÜ             | W   | 0.688      | -            | -                | -                | -         |     3.90 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           53 |     2631 | 2024-07-09 | Bounty Hunters  | W   | 0.675      | -            | -                | -                | -         |     4.20 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           52 |     2654 | 2024-07-08 | SPORT           | W   | 0.668      | -            | -                | -                | -         |     1.77 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           51 |     2770 | 2024-06-15 | fnatic          | L   | 0.516      | -            | -                | -                | -         |    -4.62 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           50 |     2805 | 2024-06-14 | KOI             | L   | 0.509      | -            | -                | -                | -         |   -11.86 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           49 |     2811 | 2024-06-14 | fnatic          | W   | 0.508      | 0.548        | 0.248 (0.069)    | 0.616 (0.172)    | 1 (0.508) |    11.39 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           48 |     2957 | 2024-06-09 | BESTIA          | L   | 0.476      | -            | -                | -                | -         |   -10.54 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           47 |     2961 | 2024-06-09 | Imperial        | L   | 0.475      | -            | -                | -                | -         |    -6.02 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           46 |     3096 | 2024-06-07 | Intense         | W   | 0.461      | -            | -                | -                | -         |     1.25 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           45 |     3136 | 2024-06-06 | Imperial        | W   | 0.455      | 0.450        | 0.158 (0.032)    | -                | -         |     8.47 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           44 |     3204 | 2024-06-05 | 9z              | W   | 0.449      | 0.450        | 0.271 (0.055)    | -                | -         |    11.31 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           43 |     3620 | 2024-05-21 | Sharks          | L   | 0.348      | -            | -                | -                | -         |    -7.23 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           42 |     3624 | 2024-05-21 | Sharks          | W   | 0.348      | -            | -                | -                | -         |     3.79 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           41 |     3654 | 2024-05-20 | Fluxo           | L   | 0.342      | -            | -                | -                | -         |    -7.02 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           40 |     3656 | 2024-05-20 | Fluxo           | W   | 0.342      | -            | -                | -                | -         |     3.80 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           39 |     3685 | 2024-05-19 | 9z              | W   | 0.335      | 0.371        | 0.271 (0.034)    | -                | -         |     8.45 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           38 |     3710 | 2024-05-18 | ODDIK           | W   | 0.328      | -            | -                | -                | -         |     4.47 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           37 |     3781 | 2024-05-16 | Fluxo           | W   | 0.315      | -            | -                | -                | -         |     3.74 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           36 |     3824 | 2024-05-15 | 9z              | L   | 0.309      | -            | -                | -                | -         |    -1.83 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           35 |     3826 | 2024-05-15 | 9z              | W   | 0.309      | 0.450        | 0.271 (0.038)    | -                | -         |     8.00 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           34 |     3884 | 2024-05-14 | Corinthians     | W   | 0.302      | -            | -                | -                | -         |     0.20 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           33 |     3888 | 2024-05-14 | Corinthians     | W   | 0.302      | -            | -                | -                | -         |     0.20 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           32 |     3902 | 2024-05-14 | BESTIA          | W   | 0.300      | -            | -                | -                | -         |     2.78 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           31 |     3919 | 2024-05-13 | Sharks          | L   | 0.295      | -            | -                | -                | -         |    -5.89 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           30 |     3939 | 2024-05-12 | Vikings KR      | W   | 0.289      | -            | -                | -                | -         |     1.08 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           29 |     3948 | 2024-05-12 | FURIA Academy   | W   | 0.287      | -            | -                | -                | -         |     0.35 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           28 |     4002 | 2024-05-10 | paiN            | L   | 0.273      | -            | -                | -                | -         |    -0.54 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           27 |     4019 | 2024-05-09 | Intense         | W   | 0.268      | -            | -                | -                | -         |     0.81 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           26 |     4037 | 2024-05-08 | paiN            | L   | 0.262      | -            | -                | -                | -         |    -0.50 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           25 |     4039 | 2024-05-08 | paiN            | W   | 0.262      | 0.450        | 0.319 (0.038)    | -                | -         |     7.79 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           24 |     4040 | 2024-05-08 | Solid           | L   | 0.262      | -            | -                | -                | -         |    -6.69 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           23 |     4084 | 2024-05-06 | Intense         | W   | 0.246      | -            | -                | -                | -         |     0.75 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           22 |     4314 | 2024-04-25 | BESTIA          | W   | 0.175      | -            | -                | -                | -         |     1.53 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           21 |     4316 | 2024-04-25 | BESTIA          | W   | 0.175      | -            | -                | -                | -         |     1.55 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           20 |     4543 | 2024-04-17 | MIBR            | L   | 0.122      | -            | -                | -                | -         |    -0.45 | dav1deuS, hardzao, nython, righi, venomzera    |
|           19 |     4551 | 2024-04-17 | O PLANO         | W   | 0.121      | -            | -                | -                | -         |     0.14 | dav1deuS, hardzao, nython, righi, venomzera    |
|           18 |     4585 | 2024-04-16 | LaChampionsLiga | W   | 0.115      | -            | -                | -                | -         |     0.15 | dav1deuS, hardzao, nython, righi, venomzera    |
|           17 |     4634 | 2024-04-13 | Imperial        | L   | 0.096      | -            | -                | -                | -         |    -1.17 | dav1deuS, hardzao, nython, righi, venomzera    |
|           16 |     4653 | 2024-04-12 | W7M             | W   | 0.087      | -            | -                | -                | -         |     0.37 | dav1deuS, hardzao, nython, righi, venomzera    |
|           15 |     4708 | 2024-04-10 | 2GAME           | W   | 0.075      | -            | -                | -                | -         |     0.10 | dav1deuS, hardzao, nython, righi, venomzera    |
|           14 |     4712 | 2024-04-10 | 2GAME           | W   | 0.075      | -            | -                | -                | -         |     0.10 | dav1deuS, hardzao, nython, righi, venomzera    |
|           13 |     4715 | 2024-04-10 | paiN            | L   | 0.075      | -            | -                | -                | -         |    -0.12 | dav1deuS, hardzao, nython, righi, venomzera    |
|           12 |     4762 | 2024-04-09 | W7M             | W   | 0.068      | -            | -                | -                | -         |     0.29 | dav1deuS, hardzao, nython, righi, venomzera    |
|           11 |     4767 | 2024-04-09 | W7M             | W   | 0.068      | -            | -                | -                | -         |     0.29 | dav1deuS, hardzao, nython, righi, venomzera    |
|           10 |     4768 | 2024-04-09 | MIBR            | L   | 0.068      | -            | -                | -                | -         |    -0.26 | dav1deuS, hardzao, nython, righi, venomzera    |
|            9 |     4801 | 2024-04-08 | BESTIA          | W   | 0.062      | -            | -                | -                | -         |     0.57 | dav1deuS, hardzao, nython, righi, venomzera    |
|            8 |     4809 | 2024-04-08 | Bounty Hunters  | W   | 0.060      | -            | -                | -                | -         |     0.32 | dav1deuS, hardzao, nython, righi, venomzera    |
|            7 |     4837 | 2024-04-07 | Imperial        | L   | 0.055      | -            | -                | -                | -         |    -0.67 | dav1deuS, hardzao, nython, righi, venomzera    |
|            6 |     4856 | 2024-04-06 | W7M             | L   | 0.047      | -            | -                | -                | -         |    -1.29 | dav1deuS, hardzao, nython, righi, venomzera    |
|            5 |     4897 | 2024-04-04 | Case            | L   | 0.035      | -            | -                | -                | -         |    -0.81 | dav1deuS, hardzao, nython, righi, venomzera    |
|            4 |     4900 | 2024-04-04 | Case            | W   | 0.035      | -            | -                | -                | -         |     0.30 | dav1deuS, hardzao, nython, righi, venomzera    |
|            3 |     4914 | 2024-04-04 | Fluxo           | W   | 0.034      | -            | -                | -                | -         |     0.10 | dav1deuS, hardzao, nython, righi, venomzera    |
|            2 |     4937 | 2024-04-03 | ODDIK           | W   | 0.029      | -            | -                | -                | -         |     0.46 | dav1deuS, hardzao, nython, righi, venomzera    |
|            1 |     4940 | 2024-04-03 | ODDIK           | W   | 0.028      | -            | -                | -                | -         |     0.45 | dav1deuS, hardzao, nython, righi, venomzera    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,373.85)
- Divide that value by the 5th highest value among all rosters ($332,851.90)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-22 |      1.000 | $12,000.00     | $12,000.00      |
| 2024-07-14 |      0.708 | $2,000.00      | $1,415.35       |
| 2024-06-16 |      0.522 | $1,500.00      | $783.55         |
| 2024-06-10 |      0.482 | $750.00        | $361.62         |
| 2024-06-09 |      0.475 | $11,500.00     | $5,462.98       |
| 2024-05-19 |      0.335 | $10,000.00     | $3,350.35       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
