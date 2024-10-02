### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, dav1deuS, HEN1, nython, venomzera<br />
Global Rank: [34](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_02.md)<br />
Regional Rank: [12]( ../../standings_americas_2024_10_02.md)<br />
<br />
Final Rank Value:  1109.3<br />
<br />
Final Rank Value (1109.3) = Starting Rank Value (1083.8) + Head To Head Adjustments (25.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.461[<sup>1</sup>](#table2)
- Bounty Collected: 0.471[<sup>2</sup>](#table1)
- Opponent Network: 0.237[<sup>2</sup>](#table1)
- LAN Wins: 0.260[<sup>2</sup>](#table1)

The average of these factors is 0.357<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1083.8
- 400 + ( ( 0.357 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 1083.8


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
|           94 |        0 | 2024-10-02 | paiN            | L   | 1.000      | -            | -                | -                | -         |    -3.08 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           93 |        5 | 2024-10-02 | paiN            | W   | 1.000      | 0.450        | 0.298 (0.134)    | 0.839 (0.378)    | 0 (0.000) |    28.82 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           92 |      129 | 2024-09-28 | paiN            | L   | 1.000      | -            | -                | -                | -         |    -2.42 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           91 |      133 | 2024-09-28 | Fluxo           | L   | 1.000      | -            | -                | -                | -         |   -16.15 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           90 |      270 | 2024-09-25 | Fluxo           | L   | 1.000      | -            | -                | -                | -         |   -18.21 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           89 |      274 | 2024-09-25 | Fluxo           | L   | 1.000      | -            | -                | -                | -         |   -19.82 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           88 |      325 | 2024-09-24 | ODDIK           | W   | 1.000      | 0.450        | 0.150 (0.067)    | 0.661 (0.298)    | 0 (0.000) |    11.36 | dav1deuS, hardzao, HEN1, nython, venomzera     |
|           87 |      331 | 2024-09-24 | ODDIK           | L   | 1.000      | -            | -                | -                | -         |   -20.52 | dav1deuS, hardzao, HEN1, nython, venomzera     |
|           86 |      335 | 2024-09-24 | Fluxo           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.83 | dav1deuS, gtw, HEN1, nython, venomzera         |
|           85 |      366 | 2024-09-23 | paiN            | L   | 1.000      | -            | -                | -                | -         |    -2.83 | dav1deuS, gtw, HEN1, nython, venomzera         |
|           84 |      377 | 2024-09-23 | Fluxo           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.15 | dav1deuS, gtw, HEN1, nython, venomzera         |
|           83 |      599 | 2024-09-15 | FURIA           | L   | 1.000      | -            | -                | -                | -         |    -2.57 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           82 |      639 | 2024-09-14 | Falcons         | W   | 1.000      | 0.889        | 0.274 (0.244)    | 0.411 (0.365)    | 1 (1.000) |    26.01 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           81 |      673 | 2024-09-13 | FURIA           | L   | 1.000      | -            | -                | -                | -         |    -2.09 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           80 |      697 | 2024-09-12 | ENCE            | W   | 1.000      | 0.889        | 0.096 (0.085)    | 0.229 (0.203)    | 1 (1.000) |    11.65 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           79 |      755 | 2024-09-10 | Virtus.pro      | L   | 1.000      | -            | -                | -                | -         |    -3.19 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           78 |     1119 | 2024-08-28 | Fluxo           | W   | 0.968      | -            | -                | -                | 0 (0.000) |    12.22 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           77 |     1132 | 2024-08-28 | ODDIK           | W   | 0.966      | -            | -                | -                | 0 (0.000) |    15.00 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           76 |     1181 | 2024-08-27 | Solid           | W   | 0.961      | -            | -                | -                | 0 (0.000) |     8.79 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           75 |     1236 | 2024-08-26 | Intense         | W   | 0.954      | -            | -                | -                | -         |     3.81 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           74 |     1278 | 2024-08-26 | Case            | L   | 0.952      | -            | -                | -                | -         |   -23.48 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           73 |     1613 | 2024-08-15 | KRÜ             | L   | 0.881      | -            | -                | -                | -         |   -23.01 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           72 |     1617 | 2024-08-15 | KRÜ             | W   | 0.881      | 0.450        | -                | 0.493 (0.196)    | -         |     4.44 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           71 |     1865 | 2024-08-07 | Case            | W   | 0.828      | 0.450        | -                | 0.632 (0.235)    | -         |     5.54 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           70 |     1867 | 2024-08-07 | Case            | W   | 0.827      | 0.450        | -                | 0.632 (0.235)    | -         |     5.82 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           69 |     1977 | 2024-08-04 | ODDIK           | L   | 0.808      | -            | -                | -                | -         |   -13.14 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           68 |     1980 | 2024-08-04 | BESTIA          | W   | 0.807      | -            | -                | -                | -         |     7.42 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           67 |     2009 | 2024-08-03 | ODDIK           | L   | 0.802      | -            | -                | -                | -         |   -13.72 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           66 |     2018 | 2024-08-03 | Vikings KR      | W   | 0.800      | -            | -                | -                | -         |     3.31 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           65 |     2244 | 2024-07-28 | MIBR            | L   | 0.762      | -            | -                | -                | -         |    -4.62 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           64 |     2250 | 2024-07-28 | paiN            | L   | 0.760      | -            | -                | -                | -         |    -2.90 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           63 |     2304 | 2024-07-26 | ODDIK           | L   | 0.746      | -            | -                | -                | -         |   -15.14 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           62 |     2369 | 2024-07-24 | Fluxo           | W   | 0.735      | -            | -                | -                | -         |    10.53 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           61 |     2373 | 2024-07-24 | ODDIK           | W   | 0.734      | -            | -                | -                | -         |     8.96 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           60 |     2402 | 2024-07-23 | KRÜ             | W   | 0.728      | -            | -                | -                | -         |     3.98 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           59 |     2410 | 2024-07-23 | LaChampionsLiga | W   | 0.727      | -            | -                | -                | -         |     0.83 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           58 |     2446 | 2024-07-22 | paiN Academy    | W   | 0.720      | -            | -                | -                | -         |     0.42 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           57 |     2469 | 2024-07-21 | BESTIA          | L   | 0.713      | -            | -                | -                | -         |   -16.68 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           56 |     2500 | 2024-07-20 | Case            | W   | 0.706      | 0.384        | -                | 0.632 (0.171)    | -         |     4.51 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           55 |     2536 | 2024-07-19 | Intense         | W   | 0.700      | -            | -                | -                | -         |     2.15 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           54 |     2641 | 2024-07-17 | Hype            | W   | 0.688      | -            | -                | -                | -         |     3.82 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           53 |     2647 | 2024-07-17 | Hype            | W   | 0.687      | -            | -                | -                | -         |     3.96 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           52 |     2699 | 2024-07-16 | Sharks          | W   | 0.681      | 0.450        | -                | 0.471 (0.144)    | -         |     6.37 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           51 |     2707 | 2024-07-16 | Sharks          | W   | 0.681      | 0.450        | -                | 0.471 (0.144)    | -         |     6.70 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           50 |     2803 | 2024-07-13 | Legacy          | L   | 0.660      | -            | -                | -                | -         |   -14.07 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           49 |     2829 | 2024-07-11 | KRÜ             | W   | 0.647      | -            | -                | -                | -         |     3.63 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           48 |     2864 | 2024-07-09 | Bounty Hunters  | W   | 0.634      | -            | -                | -                | -         |     3.85 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           47 |     2887 | 2024-07-08 | SPORT           | W   | 0.627      | -            | -                | -                | -         |     1.68 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           46 |     3003 | 2024-06-15 | fnatic          | L   | 0.475      | -            | -                | -                | -         |    -4.73 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           45 |     3038 | 2024-06-14 | KOI             | L   | 0.469      | -            | -                | -                | -         |   -11.08 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           44 |     3044 | 2024-06-14 | fnatic          | W   | 0.467      | 0.548        | 0.236 (0.060)    | -                | 1 (0.467) |    10.00 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           43 |     3190 | 2024-06-09 | BESTIA          | L   | 0.435      | -            | -                | -                | -         |    -9.46 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           42 |     3194 | 2024-06-09 | Imperial        | L   | 0.434      | -            | -                | -                | -         |    -5.85 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           41 |     3329 | 2024-06-07 | Intense         | W   | 0.420      | -            | -                | -                | -         |     1.13 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           40 |     3369 | 2024-06-06 | Imperial        | W   | 0.414      | 0.450        | 0.146 (0.027)    | -                | -         |     7.38 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           39 |     3437 | 2024-06-05 | 9z              | W   | 0.408      | 0.450        | 0.254 (0.047)    | -                | -         |     9.97 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           38 |     3853 | 2024-05-21 | Sharks          | L   | 0.307      | -            | -                | -                | -         |    -6.30 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           37 |     3857 | 2024-05-21 | Sharks          | W   | 0.307      | -            | -                | -                | -         |     3.42 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           36 |     3887 | 2024-05-20 | Fluxo           | L   | 0.301      | -            | -                | -                | -         |    -6.27 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           35 |     3889 | 2024-05-20 | Fluxo           | W   | 0.301      | -            | -                | -                | -         |     3.25 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           34 |     3918 | 2024-05-19 | 9z              | W   | 0.294      | 0.371        | 0.254 (0.028)    | -                | -         |     7.18 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           33 |     3943 | 2024-05-18 | ODDIK           | W   | 0.287      | -            | -                | -                | -         |     3.86 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           32 |     4014 | 2024-05-16 | Fluxo           | W   | 0.274      | -            | -                | -                | -         |     3.13 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           31 |     4057 | 2024-05-15 | 9z              | L   | 0.268      | -            | -                | -                | -         |    -1.82 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           30 |     4059 | 2024-05-15 | 9z              | W   | 0.268      | 0.450        | 0.254 (0.031)    | -                | -         |     6.70 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           29 |     4117 | 2024-05-14 | Corinthians     | W   | 0.261      | -            | -                | -                | -         |     0.17 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           28 |     4121 | 2024-05-14 | Corinthians     | W   | 0.261      | -            | -                | -                | -         |     0.17 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           27 |     4135 | 2024-05-14 | BESTIA          | W   | 0.259      | -            | -                | -                | -         |     2.55 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           26 |     4152 | 2024-05-13 | Sharks          | L   | 0.254      | -            | -                | -                | -         |    -5.03 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           25 |     4172 | 2024-05-12 | Vikings KR      | W   | 0.248      | -            | -                | -                | -         |     0.89 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           24 |     4181 | 2024-05-12 | FURIA Academy   | W   | 0.246      | -            | -                | -                | -         |     0.29 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           23 |     4235 | 2024-05-10 | paiN            | L   | 0.232      | -            | -                | -                | -         |    -0.54 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           22 |     4252 | 2024-05-09 | Intense         | W   | 0.227      | -            | -                | -                | -         |     0.67 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           21 |     4270 | 2024-05-08 | paiN            | L   | 0.221      | -            | -                | -                | -         |    -0.50 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           20 |     4272 | 2024-05-08 | paiN            | W   | 0.221      | 0.450        | 0.298 (0.030)    | -                | -         |     6.49 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           19 |     4273 | 2024-05-08 | Solid           | L   | 0.221      | -            | -                | -                | -         |    -5.67 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           18 |     4317 | 2024-05-06 | Intense         | W   | 0.205      | -            | -                | -                | -         |     0.60 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           17 |     4547 | 2024-04-25 | BESTIA          | W   | 0.134      | -            | -                | -                | -         |     1.27 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           16 |     4549 | 2024-04-25 | BESTIA          | W   | 0.134      | -            | -                | -                | -         |     1.28 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           15 |     4776 | 2024-04-17 | MIBR            | L   | 0.081      | -            | -                | -                | -         |    -0.33 | dav1deuS, hardzao, nython, righi, venomzera    |
|           14 |     4784 | 2024-04-17 | O PLANO         | W   | 0.080      | -            | -                | -                | -         |     0.09 | dav1deuS, hardzao, nython, righi, venomzera    |
|           13 |     4818 | 2024-04-16 | LaChampionsLiga | W   | 0.074      | -            | -                | -                | -         |     0.10 | dav1deuS, hardzao, nython, righi, venomzera    |
|           12 |     4867 | 2024-04-13 | Imperial        | L   | 0.055      | -            | -                | -                | -         |    -0.72 | dav1deuS, hardzao, nython, righi, venomzera    |
|           11 |     4886 | 2024-04-12 | W7M             | W   | 0.047      | -            | -                | -                | -         |     0.19 | dav1deuS, hardzao, nython, righi, venomzera    |
|           10 |     4941 | 2024-04-10 | 2GAME           | W   | 0.034      | -            | -                | -                | -         |     0.04 | dav1deuS, hardzao, nython, righi, venomzera    |
|            9 |     4945 | 2024-04-10 | 2GAME           | W   | 0.034      | -            | -                | -                | -         |     0.04 | dav1deuS, hardzao, nython, righi, venomzera    |
|            8 |     4948 | 2024-04-10 | paiN            | L   | 0.034      | -            | -                | -                | -         |    -0.07 | dav1deuS, hardzao, nython, righi, venomzera    |
|            7 |     4995 | 2024-04-09 | W7M             | W   | 0.028      | -            | -                | -                | -         |     0.11 | dav1deuS, hardzao, nython, righi, venomzera    |
|            6 |     5000 | 2024-04-09 | W7M             | W   | 0.027      | -            | -                | -                | -         |     0.11 | dav1deuS, hardzao, nython, righi, venomzera    |
|            5 |     5001 | 2024-04-09 | MIBR            | L   | 0.027      | -            | -                | -                | -         |    -0.11 | dav1deuS, hardzao, nython, righi, venomzera    |
|            4 |     5034 | 2024-04-08 | BESTIA          | W   | 0.021      | -            | -                | -                | -         |     0.20 | dav1deuS, hardzao, nython, righi, venomzera    |
|            3 |     5042 | 2024-04-08 | Bounty Hunters  | W   | 0.019      | -            | -                | -                | -         |     0.10 | dav1deuS, hardzao, nython, righi, venomzera    |
|            2 |     5070 | 2024-04-07 | Imperial        | L   | 0.014      | -            | -                | -                | -         |    -0.18 | dav1deuS, hardzao, nython, righi, venomzera    |
|            1 |     5089 | 2024-04-06 | W7M             | L   | 0.006      | -            | -                | -                | -         |    -0.17 | dav1deuS, hardzao, nython, righi, venomzera    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22,320.14)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-22 |      1.000 | $12,000.00     | $12,000.00      |
| 2024-07-14 |      0.667 | $2,000.00      | $1,333.51       |
| 2024-06-16 |      0.481 | $1,500.00      | $722.17         |
| 2024-06-10 |      0.441 | $750.00        | $330.93         |
| 2024-06-09 |      0.434 | $11,500.00     | $4,992.39       |
| 2024-05-19 |      0.294 | $10,000.00     | $2,941.15       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
