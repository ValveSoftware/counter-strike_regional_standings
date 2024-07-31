### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, dav1deuS, hardzao, nython, venomzera<br />
Global Rank: [38](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [9]( ../standings_americas.md)<br />
<br />
Final Rank Value:  1162.4<br />
<br />
Final Rank Value (1162.4) = Starting Rank Value (1086.9) + Head To Head Adjustments (75.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.476[<sup>1</sup>](#table2)
- Bounty Collected: 0.486[<sup>2</sup>](#table1)
- Opponent Network: 0.246[<sup>2</sup>](#table1)
- LAN Wins: 0.123[<sup>2</sup>](#table1)

The average of these factors is 0.333<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1086.9
- 400 + ( ( 0.333 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1086.9


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
|           86 |      107 | 2024-07-28 | MIBR            | L   | 1.000      | -            | -                | -                | -         |    -7.23 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           85 |      113 | 2024-07-28 | paiN            | L   | 1.000      | -            | -                | -                | -         |    -7.91 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           84 |      167 | 2024-07-26 | ODDIK           | L   | 1.000      | -            | -                | -                | -         |   -22.53 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           83 |      232 | 2024-07-24 | Fluxo           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.34 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           82 |      236 | 2024-07-24 | ODDIK           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.66 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           81 |      265 | 2024-07-23 | KRÜ             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.01 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           80 |      273 | 2024-07-23 | LaChampionsLiga | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.40 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           79 |      309 | 2024-07-22 | paiN Academy    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.39 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           78 |      332 | 2024-07-21 | BESTIA          | L   | 1.000      | -            | -                | -                | -         |   -24.12 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           77 |      363 | 2024-07-20 | Case            | W   | 1.000      | 0.384        | -                | 0.720 (0.277)    | 0 (0.000) |     5.14 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           76 |      399 | 2024-07-19 | Intense         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.93 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           75 |      504 | 2024-07-17 | Hype            | W   | 1.000      | 0.450        | -                | 0.477 (0.215)    | 0 (0.000) |     5.18 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           74 |      510 | 2024-07-17 | Hype            | W   | 1.000      | 0.450        | -                | 0.477 (0.215)    | -         |     5.45 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           73 |      562 | 2024-07-16 | Sharks          | W   | 1.000      | 0.450        | -                | 0.558 (0.251)    | -         |     7.64 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           72 |      570 | 2024-07-16 | Sharks          | W   | 1.000      | 0.450        | -                | 0.558 (0.251)    | -         |     8.17 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           71 |      666 | 2024-07-13 | Legacy          | L   | 1.000      | -            | -                | -                | -         |   -19.65 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           70 |      692 | 2024-07-11 | KRÜ             | W   | 1.000      | -            | -                | -                | -         |     4.95 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           69 |      727 | 2024-07-09 | Bounty Hunters  | W   | 1.000      | -            | -                | -                | -         |     7.41 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           68 |      750 | 2024-07-08 | SPORT           | W   | 1.000      | -            | -                | -                | -         |     2.37 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           67 |      866 | 2024-06-15 | fnatic          | L   | 0.895      | -            | -                | -                | -         |    -4.55 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           66 |      901 | 2024-06-14 | KOI             | L   | 0.888      | -            | -                | -                | -         |   -16.64 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           65 |      907 | 2024-06-14 | fnatic          | W   | 0.887      | 0.548        | 0.374 (0.182)    | 0.633 (0.308)    | 1 (0.887) |    23.39 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           64 |     1053 | 2024-06-09 | BESTIA          | L   | 0.855      | -            | -                | -                | -         |   -18.35 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           63 |     1057 | 2024-06-09 | Imperial        | L   | 0.854      | -            | -                | -                | -         |    -8.63 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           62 |     1192 | 2024-06-07 | Intense         | W   | 0.839      | -            | -                | -                | -         |     1.26 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           61 |     1232 | 2024-06-06 | Imperial        | W   | 0.834      | 0.450        | 0.245 (0.092)    | 0.685 (0.257)    | -         |    17.52 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           60 |     1300 | 2024-06-05 | 9z              | W   | 0.828      | 0.450        | 0.412 (0.154)    | 0.625 (0.233)    | -         |    22.46 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           59 |     1716 | 2024-05-21 | Sharks          | L   | 0.727      | -            | -                | -                | -         |   -16.17 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           58 |     1720 | 2024-05-21 | Sharks          | W   | 0.727      | -            | -                | -                | -         |     6.65 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           57 |     1750 | 2024-05-20 | Fluxo           | L   | 0.721      | -            | -                | -                | -         |   -13.37 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           56 |     1752 | 2024-05-20 | Fluxo           | W   | 0.721      | 0.450        | 0.123 (0.040)    | 0.685 (0.222)    | -         |     9.41 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           55 |     1781 | 2024-05-19 | 9z              | W   | 0.714      | 0.371        | 0.412 (0.109)    | -                | -         |    19.70 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           54 |     1806 | 2024-05-18 | ODDIK           | W   | 0.707      | 0.371        | 0.096 (0.025)    | -                | -         |     6.21 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           53 |     1877 | 2024-05-16 | Fluxo           | W   | 0.694      | 0.371        | 0.123 (0.032)    | -                | -         |    10.35 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           52 |     1920 | 2024-05-15 | 9z              | L   | 0.688      | -            | -                | -                | -         |    -2.19 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           51 |     1922 | 2024-05-15 | 9z              | W   | 0.688      | 0.450        | 0.412 (0.128)    | -                | -         |    19.73 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           50 |     1980 | 2024-05-14 | Corinthians     | W   | 0.681      | -            | -                | -                | -         |     0.73 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           49 |     1984 | 2024-05-14 | Corinthians     | W   | 0.681      | -            | -                | -                | -         |     0.74 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           48 |     1998 | 2024-05-14 | BESTIA          | W   | 0.679      | 0.371        | 0.093 (0.023)    | -                | -         |     7.08 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           47 |     2015 | 2024-05-13 | Sharks          | L   | 0.674      | -            | -                | -                | -         |   -13.99 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           46 |     2035 | 2024-05-12 | Vikings KR      | W   | 0.668      | -            | -                | -                | -         |     3.54 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           45 |     2044 | 2024-05-12 | FURIA Academy   | W   | 0.666      | -            | -                | -                | -         |     0.77 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           44 |     2098 | 2024-05-10 | paiN            | L   | 0.652      | -            | -                | -                | -         |    -3.53 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           43 |     2115 | 2024-05-09 | Intense         | W   | 0.647      | -            | -                | -                | -         |     1.19 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           42 |     2133 | 2024-05-08 | paiN            | L   | 0.641      | -            | -                | -                | -         |    -3.32 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           41 |     2135 | 2024-05-08 | paiN            | W   | 0.641      | 0.450        | 0.305 (0.088)    | 0.796 (0.230)    | -         |    17.18 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           40 |     2136 | 2024-05-08 | Solid           | L   | 0.640      | -            | -                | -                | -         |   -15.62 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           39 |     2180 | 2024-05-06 | Intense         | W   | 0.625      | -            | -                | -                | -         |     1.11 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           38 |     2410 | 2024-04-25 | BESTIA          | W   | 0.554      | -            | -                | -                | -         |     5.01 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           37 |     2412 | 2024-04-25 | BESTIA          | W   | 0.554      | -            | -                | -                | -         |     5.22 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           36 |     2639 | 2024-04-17 | MIBR            | L   | 0.501      | -            | -                | -                | -         |    -1.99 | dav1deuS, hardzao, nython, righi, venomzera    |
|           35 |     2647 | 2024-04-17 | O PLANO         | W   | 0.500      | -            | -                | -                | -         |     0.64 | dav1deuS, hardzao, nython, righi, venomzera    |
|           34 |     2681 | 2024-04-16 | LaChampionsLiga | W   | 0.494      | -            | -                | -                | -         |     0.30 | dav1deuS, hardzao, nython, righi, venomzera    |
|           33 |     2730 | 2024-04-13 | Imperial        | L   | 0.475      | -            | -                | -                | -         |    -3.70 | dav1deuS, hardzao, nython, righi, venomzera    |
|           32 |     2749 | 2024-04-12 | W7M             | W   | 0.466      | -            | -                | -                | -         |     2.69 | dav1deuS, hardzao, nython, righi, venomzera    |
|           31 |     2804 | 2024-04-10 | 2GAME           | W   | 0.454      | -            | -                | -                | -         |     1.21 | dav1deuS, hardzao, nython, righi, venomzera    |
|           30 |     2808 | 2024-04-10 | 2GAME           | W   | 0.454      | -            | -                | -                | -         |     1.23 | dav1deuS, hardzao, nython, righi, venomzera    |
|           29 |     2811 | 2024-04-10 | paiN            | L   | 0.453      | -            | -                | -                | -         |    -2.00 | dav1deuS, hardzao, nython, righi, venomzera    |
|           28 |     2858 | 2024-04-09 | W7M             | W   | 0.447      | -            | -                | -                | -         |     2.65 | dav1deuS, hardzao, nython, righi, venomzera    |
|           27 |     2863 | 2024-04-09 | W7M             | W   | 0.447      | -            | -                | -                | -         |     2.71 | dav1deuS, hardzao, nython, righi, venomzera    |
|           26 |     2864 | 2024-04-09 | MIBR            | L   | 0.447      | -            | -                | -                | -         |    -1.96 | dav1deuS, hardzao, nython, righi, venomzera    |
|           25 |     2897 | 2024-04-08 | BESTIA          | W   | 0.441      | -            | -                | -                | -         |     4.81 | dav1deuS, hardzao, nython, righi, venomzera    |
|           24 |     2905 | 2024-04-08 | Bounty Hunters  | W   | 0.439      | -            | -                | -                | -         |     3.50 | dav1deuS, hardzao, nython, righi, venomzera    |
|           23 |     2933 | 2024-04-07 | Imperial        | L   | 0.434      | -            | -                | -                | -         |    -3.18 | dav1deuS, hardzao, nython, righi, venomzera    |
|           22 |     2952 | 2024-04-06 | W7M             | L   | 0.426      | -            | -                | -                | -         |   -10.98 | dav1deuS, hardzao, nython, righi, venomzera    |
|           21 |     2993 | 2024-04-04 | Case            | L   | 0.414      | -            | -                | -                | -         |    -9.81 | dav1deuS, hardzao, nython, righi, venomzera    |
|           20 |     2996 | 2024-04-04 | Case            | W   | 0.414      | -            | -                | -                | -         |     3.24 | dav1deuS, hardzao, nython, righi, venomzera    |
|           19 |     3010 | 2024-04-04 | Fluxo           | W   | 0.413      | -            | -                | -                | -         |     5.49 | dav1deuS, hardzao, nython, righi, venomzera    |
|           18 |     3033 | 2024-04-03 | ODDIK           | W   | 0.407      | -            | -                | -                | -         |     4.49 | dav1deuS, hardzao, nython, righi, venomzera    |
|           17 |     3036 | 2024-04-03 | ODDIK           | W   | 0.407      | -            | -                | -                | -         |     4.63 | dav1deuS, hardzao, nython, righi, venomzera    |
|           16 |     3320 | 2024-03-18 | ODDIK           | W   | 0.300      | -            | -                | -                | -         |     3.53 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           15 |     3363 | 2024-03-16 | ODDIK           | W   | 0.287      | -            | -                | -                | -         |     3.42 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           14 |     3380 | 2024-03-15 | Case            | W   | 0.281      | -            | -                | -                | -         |     2.53 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           13 |     3413 | 2024-03-14 | Solid           | L   | 0.274      | -            | -                | -                | -         |    -6.48 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           12 |     3421 | 2024-03-14 | Flamengo        | W   | 0.272      | -            | -                | -                | -         |     0.29 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           11 |     3439 | 2024-03-13 | Case            | W   | 0.267      | -            | -                | -                | -         |     2.39 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           10 |     3452 | 2024-03-13 | Galorys         | W   | 0.266      | -            | -                | -                | -         |     2.01 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            9 |     3483 | 2024-03-12 | BESTIA          | W   | 0.260      | -            | -                | -                | -         |     3.27 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            8 |     3501 | 2024-03-11 | Corinthians     | W   | 0.253      | -            | -                | -                | -         |     0.31 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            7 |     3537 | 2024-03-09 | W7M             | W   | 0.241      | -            | -                | -                | -         |     1.53 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            6 |     3584 | 2024-03-07 | VELOX           | W   | 0.228      | -            | -                | -                | -         |     0.15 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            5 |     3701 | 2024-03-03 | ODDIK           | L   | 0.200      | -            | -                | -                | -         |    -3.85 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            4 |     3735 | 2024-03-02 | paiN            | L   | 0.192      | -            | -                | -                | -         |    -0.81 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            3 |     3750 | 2024-03-01 | Wildcard        | W   | 0.187      | -            | -                | -                | 1 (0.187) |     1.56 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            2 |     4150 | 2024-02-13 | Imperial        | L   | 0.074      | -            | -                | -                | -         |    -0.57 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            1 |     4154 | 2024-02-13 | Imperial        | W   | 0.074      | -            | -                | -                | -         |     1.78 | dav1deuS, destiny, hardzao, nython, venomzera  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($26,114.08)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-14 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-16 |      0.901 | $1,500.00      | $1,351.89       |
| 2024-06-10 |      0.861 | $750.00        | $645.79         |
| 2024-06-09 |      0.854 | $11,500.00     | $9,820.28       |
| 2024-05-19 |      0.714 | $10,000.00     | $7,139.31       |
| 2024-03-18 |      0.300 | $3,500.00      | $1,049.73       |
| 2024-03-14 |      0.274 | $15,000.00     | $4,107.08       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
