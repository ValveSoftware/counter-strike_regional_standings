### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, dav1deuS, HEN1, nython, venomzera<br />
Global Rank: [39](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [9]( ../standings_americas.md)<br />
<br />
Final Rank Value:  1133.8<br />
<br />
Final Rank Value (1133.8) = Starting Rank Value (1073.2) + Head To Head Adjustments (60.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.472[<sup>1</sup>](#table2)
- Bounty Collected: 0.479[<sup>2</sup>](#table1)
- Opponent Network: 0.242[<sup>2</sup>](#table1)
- LAN Wins: 0.115[<sup>2</sup>](#table1)

The average of these factors is 0.327<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1073.2
- 400 + ( ( 0.327 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 1073.2


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
|           90 |       48 | 2024-08-04 | ODDIK           | L   | 1.000      | -            | -                | -                | -         |   -16.96 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           89 |       51 | 2024-08-04 | BESTIA          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.19 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           88 |       80 | 2024-08-03 | ODDIK           | L   | 1.000      | -            | -                | -                | -         |   -18.09 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           87 |       89 | 2024-08-03 | Vikings KR      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.73 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           86 |      315 | 2024-07-28 | MIBR            | L   | 1.000      | -            | -                | -                | -         |    -7.41 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           85 |      321 | 2024-07-28 | paiN            | L   | 1.000      | -            | -                | -                | -         |    -8.03 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           84 |      375 | 2024-07-26 | ODDIK           | L   | 1.000      | -            | -                | -                | -         |   -22.31 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           83 |      440 | 2024-07-24 | Fluxo           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.44 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           82 |      444 | 2024-07-24 | ODDIK           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.91 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           81 |      473 | 2024-07-23 | KRÜ             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.21 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           80 |      481 | 2024-07-23 | LaChampionsLiga | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.42 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           79 |      517 | 2024-07-22 | paiN Academy    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.41 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           78 |      540 | 2024-07-21 | BESTIA          | L   | 1.000      | -            | -                | -                | -         |   -23.90 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           77 |      571 | 2024-07-20 | Case            | W   | 1.000      | 0.384        | -                | 0.778 (0.299)    | 0 (0.000) |     5.34 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           76 |      607 | 2024-07-19 | Intense         | W   | 1.000      | -            | -                | -                | -         |     3.38 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           75 |      712 | 2024-07-17 | Hype            | W   | 1.000      | 0.450        | -                | 0.476 (0.214)    | -         |     5.41 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           74 |      718 | 2024-07-17 | Hype            | W   | 1.000      | 0.450        | -                | 0.476 (0.214)    | -         |     5.69 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           73 |      770 | 2024-07-16 | Sharks          | W   | 1.000      | 0.450        | -                | 0.546 (0.246)    | -         |     7.87 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           72 |      778 | 2024-07-16 | Sharks          | W   | 1.000      | 0.450        | -                | 0.546 (0.246)    | -         |     8.42 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           71 |      874 | 2024-07-13 | Legacy          | L   | 1.000      | -            | -                | -                | -         |   -19.30 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           70 |      900 | 2024-07-11 | KRÜ             | W   | 1.000      | -            | -                | -                | -         |     5.29 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           69 |      935 | 2024-07-09 | Bounty Hunters  | W   | 1.000      | -            | -                | -                | -         |     7.71 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           68 |      958 | 2024-07-08 | SPORT           | W   | 1.000      | -            | -                | -                | -         |     2.51 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           67 |     1074 | 2024-06-15 | fnatic          | L   | 0.856      | -            | -                | -                | -         |    -4.35 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           66 |     1109 | 2024-06-14 | KOI             | L   | 0.849      | -            | -                | -                | -         |   -16.08 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           65 |     1115 | 2024-06-14 | fnatic          | W   | 0.848      | 0.548        | 0.370 (0.172)    | 0.680 (0.316)    | 1 (0.848) |    22.38 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           64 |     1261 | 2024-06-09 | BESTIA          | L   | 0.815      | -            | -                | -                | -         |   -17.31 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           63 |     1265 | 2024-06-09 | Imperial        | L   | 0.815      | -            | -                | -                | -         |    -8.63 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           62 |     1400 | 2024-06-07 | Intense         | W   | 0.800      | -            | -                | -                | -         |     2.37 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           61 |     1440 | 2024-06-06 | Imperial        | W   | 0.795      | 0.450        | 0.233 (0.083)    | 0.658 (0.235)    | -         |    16.33 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           60 |     1508 | 2024-06-05 | 9z              | W   | 0.789      | 0.450        | 0.404 (0.143)    | 0.590 (0.210)    | -         |    21.39 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           59 |     1924 | 2024-05-21 | Sharks          | L   | 0.688      | -            | -                | -                | -         |   -15.09 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           58 |     1928 | 2024-05-21 | Sharks          | W   | 0.688      | -            | -                | -                | -         |     6.54 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           57 |     1958 | 2024-05-20 | Fluxo           | L   | 0.682      | -            | -                | -                | -         |   -12.45 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           56 |     1960 | 2024-05-20 | Fluxo           | W   | 0.681      | 0.450        | 0.123 (0.038)    | 0.701 (0.215)    | -         |     9.13 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           55 |     1989 | 2024-05-19 | 9z              | W   | 0.675      | 0.371        | 0.404 (0.101)    | -                | -         |    18.57 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           54 |     2014 | 2024-05-18 | ODDIK           | W   | 0.668      | 0.371        | 0.099 (0.025)    | -                | -         |     6.17 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           53 |     2085 | 2024-05-16 | Fluxo           | W   | 0.655      | 0.371        | 0.123 (0.030)    | -                | -         |     9.94 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           52 |     2128 | 2024-05-15 | 9z              | L   | 0.649      | -            | -                | -                | -         |    -2.14 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           51 |     2130 | 2024-05-15 | 9z              | W   | 0.648      | 0.450        | 0.404 (0.118)    | -                | -         |    18.53 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           50 |     2188 | 2024-05-14 | Corinthians     | W   | 0.642      | -            | -                | -                | -         |     0.72 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           49 |     2192 | 2024-05-14 | Corinthians     | W   | 0.641      | -            | -                | -                | -         |     0.72 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           48 |     2206 | 2024-05-14 | BESTIA          | W   | 0.640      | 0.371        | 0.096 (0.023)    | -                | -         |     6.92 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           47 |     2223 | 2024-05-13 | Sharks          | L   | 0.635      | -            | -                | -                | -         |   -12.97 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           46 |     2243 | 2024-05-12 | Vikings KR      | W   | 0.628      | -            | -                | -                | -         |     3.50 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           45 |     2252 | 2024-05-12 | FURIA Academy   | W   | 0.627      | -            | -                | -                | -         |     0.76 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           44 |     2306 | 2024-05-10 | paiN            | L   | 0.613      | -            | -                | -                | -         |    -3.43 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           43 |     2323 | 2024-05-09 | Intense         | W   | 0.608      | -            | -                | -                | -         |     2.38 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           42 |     2341 | 2024-05-08 | paiN            | L   | 0.602      | -            | -                | -                | -         |    -3.23 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           41 |     2343 | 2024-05-08 | paiN            | W   | 0.602      | 0.450        | 0.324 (0.088)    | 0.839 (0.227)    | -         |    16.02 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           40 |     2344 | 2024-05-08 | Solid           | L   | 0.601      | -            | -                | -                | -         |   -14.47 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           39 |     2388 | 2024-05-06 | Intense         | W   | 0.586      | -            | -                | -                | -         |     2.29 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           38 |     2618 | 2024-04-25 | BESTIA          | W   | 0.515      | -            | -                | -                | -         |     4.96 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           37 |     2620 | 2024-04-25 | BESTIA          | W   | 0.515      | -            | -                | -                | -         |     5.16 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           36 |     2847 | 2024-04-17 | MIBR            | L   | 0.462      | -            | -                | -                | -         |    -1.89 | dav1deuS, hardzao, nython, righi, venomzera    |
|           35 |     2855 | 2024-04-17 | O PLANO         | W   | 0.461      | -            | -                | -                | -         |     0.63 | dav1deuS, hardzao, nython, righi, venomzera    |
|           34 |     2889 | 2024-04-16 | LaChampionsLiga | W   | 0.455      | -            | -                | -                | -         |     0.30 | dav1deuS, hardzao, nython, righi, venomzera    |
|           33 |     2938 | 2024-04-13 | Imperial        | L   | 0.435      | -            | -                | -                | -         |    -3.69 | dav1deuS, hardzao, nython, righi, venomzera    |
|           32 |     2957 | 2024-04-12 | W7M             | W   | 0.427      | -            | -                | -                | -         |     2.60 | dav1deuS, hardzao, nython, righi, venomzera    |
|           31 |     3012 | 2024-04-10 | 2GAME           | W   | 0.415      | -            | -                | -                | -         |     1.14 | dav1deuS, hardzao, nython, righi, venomzera    |
|           30 |     3016 | 2024-04-10 | 2GAME           | W   | 0.415      | -            | -                | -                | -         |     1.16 | dav1deuS, hardzao, nython, righi, venomzera    |
|           29 |     3019 | 2024-04-10 | paiN            | L   | 0.414      | -            | -                | -                | -         |    -1.91 | dav1deuS, hardzao, nython, righi, venomzera    |
|           28 |     3066 | 2024-04-09 | W7M             | W   | 0.408      | -            | -                | -                | -         |     2.55 | dav1deuS, hardzao, nython, righi, venomzera    |
|           27 |     3071 | 2024-04-09 | W7M             | W   | 0.408      | -            | -                | -                | -         |     2.61 | dav1deuS, hardzao, nython, righi, venomzera    |
|           26 |     3072 | 2024-04-09 | MIBR            | L   | 0.408      | -            | -                | -                | -         |    -1.82 | dav1deuS, hardzao, nython, righi, venomzera    |
|           25 |     3105 | 2024-04-08 | BESTIA          | W   | 0.402      | -            | -                | -                | -         |     4.59 | dav1deuS, hardzao, nython, righi, venomzera    |
|           24 |     3113 | 2024-04-08 | Bounty Hunters  | W   | 0.400      | -            | -                | -                | -         |     3.35 | dav1deuS, hardzao, nython, righi, venomzera    |
|           23 |     3141 | 2024-04-07 | Imperial        | L   | 0.395      | -            | -                | -                | -         |    -3.19 | dav1deuS, hardzao, nython, righi, venomzera    |
|           22 |     3160 | 2024-04-06 | W7M             | L   | 0.387      | -            | -                | -                | -         |    -9.84 | dav1deuS, hardzao, nython, righi, venomzera    |
|           21 |     3201 | 2024-04-04 | Case            | L   | 0.375      | -            | -                | -                | -         |    -8.75 | dav1deuS, hardzao, nython, righi, venomzera    |
|           20 |     3204 | 2024-04-04 | Case            | W   | 0.375      | -            | -                | -                | -         |     3.08 | dav1deuS, hardzao, nython, righi, venomzera    |
|           19 |     3218 | 2024-04-04 | Fluxo           | W   | 0.373      | -            | -                | -                | -         |     5.22 | dav1deuS, hardzao, nython, righi, venomzera    |
|           18 |     3241 | 2024-04-03 | ODDIK           | W   | 0.368      | -            | -                | -                | -         |     4.28 | dav1deuS, hardzao, nython, righi, venomzera    |
|           17 |     3244 | 2024-04-03 | ODDIK           | W   | 0.368      | -            | -                | -                | -         |     4.41 | dav1deuS, hardzao, nython, righi, venomzera    |
|           16 |     3528 | 2024-03-18 | ODDIK           | W   | 0.261      | -            | -                | -                | -         |     3.22 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           15 |     3571 | 2024-03-16 | ODDIK           | W   | 0.248      | -            | -                | -                | -         |     3.10 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           14 |     3588 | 2024-03-15 | Case            | W   | 0.241      | -            | -                | -                | -         |     2.25 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           13 |     3621 | 2024-03-14 | Solid           | L   | 0.235      | -            | -                | -                | -         |    -5.45 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           12 |     3629 | 2024-03-14 | Flamengo        | W   | 0.233      | -            | -                | -                | -         |     0.27 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           11 |     3647 | 2024-03-13 | Case            | W   | 0.228      | -            | -                | -                | -         |     2.12 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           10 |     3660 | 2024-03-13 | Galorys         | W   | 0.227      | -            | -                | -                | -         |     1.86 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            9 |     3691 | 2024-03-12 | BESTIA          | W   | 0.220      | -            | -                | -                | -         |     2.88 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            8 |     3709 | 2024-03-11 | Corinthians     | W   | 0.214      | -            | -                | -                | -         |     0.28 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            7 |     3745 | 2024-03-09 | W7M             | W   | 0.202      | -            | -                | -                | -         |     1.35 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            6 |     3792 | 2024-03-07 | VELOX           | W   | 0.188      | -            | -                | -                | -         |     0.14 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            5 |     3909 | 2024-03-03 | ODDIK           | L   | 0.161      | -            | -                | -                | -         |    -3.01 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            4 |     3943 | 2024-03-02 | paiN            | L   | 0.153      | -            | -                | -                | -         |    -0.67 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            3 |     3958 | 2024-03-01 | Wildcard        | W   | 0.148      | -            | -                | -                | 1 (0.148) |     1.34 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            2 |     4358 | 2024-02-13 | Imperial        | L   | 0.035      | -            | -                | -                | -         |    -0.29 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            1 |     4362 | 2024-02-13 | Imperial        | W   | 0.035      | -            | -                | -                | -         |     0.81 | dav1deuS, destiny, hardzao, nython, venomzera  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,459.38)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-14 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-16 |      0.862 | $1,500.00      | $1,293.15       |
| 2024-06-10 |      0.822 | $750.00        | $616.42         |
| 2024-06-09 |      0.815 | $11,500.00     | $9,369.88       |
| 2024-05-19 |      0.675 | $10,000.00     | $6,747.66       |
| 2024-03-18 |      0.261 | $3,500.00      | $912.66         |
| 2024-03-14 |      0.235 | $15,000.00     | $3,519.61       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
