### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, dav1deuS, hardzao, nython, venomzera<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [31](../standings_global.md)<br />
Regional Rank: [10]( ../standings_americas.md)<br />
Final Rank Value:  1194.2<br />
<br />
Final Rank Value (1194.2) = Starting Rank Value (1113.9) + Head To Head Adjustments (80.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.502[<sup>1</sup>](#table2)
- Bounty Collected: 0.515[<sup>2</sup>](#table1)
- Opponent Network: 0.256[<sup>2</sup>](#table1)
- LAN Wins: 0.138[<sup>2</sup>](#table1)

The average of these factors is 0.353<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1113.9
- 400 + ( ( 0.353 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1113.9


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
|           83 |       23 | 2024-07-23 | KRÜ             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.60 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           82 |       31 | 2024-07-23 | LaChampionsLiga | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.35 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           81 |       67 | 2024-07-22 | paiN Academy    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.35 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           80 |       90 | 2024-07-21 | BESTIA          | L   | 1.000      | -            | -                | -                | -         |   -24.39 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           79 |      121 | 2024-07-20 | Case            | W   | 1.000      | 0.384        | -                | 0.751 (0.289)    | 0 (0.000) |     4.66 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           78 |      157 | 2024-07-19 | Intense         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.65 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           77 |      262 | 2024-07-17 | Hype            | W   | 1.000      | 0.450        | -                | 0.466 (0.210)    | 0 (0.000) |     4.75 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           76 |      268 | 2024-07-17 | Hype            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.97 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           75 |      320 | 2024-07-16 | Sharks          | W   | 1.000      | 0.450        | -                | 0.538 (0.242)    | 0 (0.000) |     7.24 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           74 |      328 | 2024-07-16 | Sharks          | W   | 1.000      | 0.450        | -                | 0.538 (0.242)    | -         |     7.72 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           73 |      424 | 2024-07-13 | Legacy          | L   | 1.000      | -            | -                | -                | -         |   -19.50 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           72 |      450 | 2024-07-11 | KRÜ             | W   | 1.000      | -            | -                | -                | -         |     4.41 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           71 |      485 | 2024-07-09 | Bounty Hunters  | W   | 1.000      | -            | -                | -                | -         |     6.87 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           70 |      508 | 2024-07-08 | SPORT           | W   | 1.000      | -            | -                | -                | -         |     2.12 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           69 |      624 | 2024-06-15 | fnatic          | L   | 0.942      | -            | -                | -                | -         |    -5.46 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           68 |      659 | 2024-06-14 | KOI             | L   | 0.936      | -            | -                | -                | -         |   -18.44 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           67 |      665 | 2024-06-14 | fnatic          | W   | 0.934      | 0.548        | 0.428 (0.219)    | 0.666 (0.341)    | 1 (0.934) |    23.84 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           66 |      811 | 2024-06-09 | BESTIA          | L   | 0.902      | -            | -                | -                | -         |   -19.82 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           65 |      815 | 2024-06-09 | Imperial        | L   | 0.901      | -            | -                | -                | -         |    -8.50 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           64 |      950 | 2024-06-07 | Intense         | W   | 0.887      | -            | -                | -                | -         |     1.09 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           63 |      990 | 2024-06-06 | Imperial        | W   | 0.881      | 0.450        | 0.317 (0.126)    | 0.653 (0.259)    | -         |    19.14 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           62 |     1058 | 2024-06-05 | 9z              | W   | 0.875      | 0.450        | 0.511 (0.201)    | 0.671 (0.264)    | -         |    24.03 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           61 |     1474 | 2024-05-21 | Sharks          | L   | 0.774      | -            | -                | -                | -         |   -17.64 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           60 |     1478 | 2024-05-21 | Sharks          | W   | 0.774      | -            | -                | -                | -         |     6.60 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           59 |     1508 | 2024-05-20 | Fluxo           | L   | 0.768      | -            | -                | -                | -         |   -14.32 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           58 |     1510 | 2024-05-20 | Fluxo           | W   | 0.768      | 0.450        | 0.157 (0.054)    | 0.685 (0.237)    | -         |     9.91 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           57 |     1539 | 2024-05-19 | 9z              | W   | 0.761      | 0.371        | 0.511 (0.144)    | -                | -         |    21.30 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           56 |     1564 | 2024-05-18 | ODDIK           | W   | 0.754      | -            | -                | -                | -         |     6.06 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           55 |     1635 | 2024-05-16 | Fluxo           | W   | 0.741      | 0.371        | 0.157 (0.043)    | -                | -         |    11.03 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           54 |     1678 | 2024-05-15 | 9z              | L   | 0.735      | -            | -                | -                | -         |    -2.07 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           53 |     1680 | 2024-05-15 | 9z              | W   | 0.735      | 0.450        | 0.511 (0.169)    | 0.671 (0.222)    | -         |    21.34 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           52 |     1738 | 2024-05-14 | Corinthians     | W   | 0.728      | -            | -                | -                | -         |     0.69 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           51 |     1742 | 2024-05-14 | Corinthians     | W   | 0.728      | -            | -                | -                | -         |     0.69 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           50 |     1756 | 2024-05-14 | BESTIA          | W   | 0.727      | -            | -                | -                | -         |     7.16 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           49 |     1773 | 2024-05-13 | Sharks          | L   | 0.721      | -            | -                | -                | -         |   -15.39 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           48 |     1793 | 2024-05-12 | Vikings KR      | W   | 0.715      | -            | -                | -                | -         |     3.44 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           47 |     1802 | 2024-05-12 | FURIA Academy   | W   | 0.713      | -            | -                | -                | -         |     0.73 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           46 |     1856 | 2024-05-10 | paiN            | L   | 0.700      | -            | -                | -                | -         |    -3.46 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           45 |     1873 | 2024-05-09 | Intense         | W   | 0.694      | -            | -                | -                | -         |     1.04 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           44 |     1891 | 2024-05-08 | paiN            | L   | 0.688      | -            | -                | -                | -         |    -3.23 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           43 |     1893 | 2024-05-08 | paiN            | W   | 0.688      | 0.450        | 0.393 (0.122)    | 0.825 (0.256)    | -         |    18.78 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           42 |     1894 | 2024-05-08 | Solid           | L   | 0.688      | -            | -                | -                | -         |   -17.06 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           41 |     1938 | 2024-05-06 | Intense         | W   | 0.672      | -            | -                | -                | -         |     0.97 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           40 |     2168 | 2024-04-25 | BESTIA          | W   | 0.601      | 0.450        | 0.114 (0.031)    | -                | -         |     5.02 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           39 |     2170 | 2024-04-25 | BESTIA          | W   | 0.601      | 0.450        | 0.114 (0.031)    | -                | -         |     5.24 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           38 |     2397 | 2024-04-17 | MIBR            | L   | 0.548      | -            | -                | -                | -         |    -2.11 | dav1deuS, hardzao, nython, righi, venomzera    |
|           37 |     2405 | 2024-04-17 | O PLANO         | W   | 0.547      | -            | -                | -                | -         |     0.63 | dav1deuS, hardzao, nython, righi, venomzera    |
|           36 |     2439 | 2024-04-16 | LaChampionsLiga | W   | 0.542      | -            | -                | -                | -         |     0.29 | dav1deuS, hardzao, nython, righi, venomzera    |
|           35 |     2488 | 2024-04-13 | Imperial        | L   | 0.522      | -            | -                | -                | -         |    -3.48 | dav1deuS, hardzao, nython, righi, venomzera    |
|           34 |     2507 | 2024-04-12 | W7M             | W   | 0.514      | -            | -                | -                | -         |     2.71 | dav1deuS, hardzao, nython, righi, venomzera    |
|           33 |     2562 | 2024-04-10 | 2GAME           | W   | 0.501      | -            | -                | -                | -         |     1.23 | dav1deuS, hardzao, nython, righi, venomzera    |
|           32 |     2566 | 2024-04-10 | 2GAME           | W   | 0.501      | -            | -                | -                | -         |     1.24 | dav1deuS, hardzao, nython, righi, venomzera    |
|           31 |     2569 | 2024-04-10 | paiN            | L   | 0.501      | -            | -                | -                | -         |    -1.93 | dav1deuS, hardzao, nython, righi, venomzera    |
|           30 |     2616 | 2024-04-09 | W7M             | W   | 0.495      | -            | -                | -                | -         |     2.69 | dav1deuS, hardzao, nython, righi, venomzera    |
|           29 |     2621 | 2024-04-09 | W7M             | W   | 0.494      | -            | -                | -                | -         |     2.75 | dav1deuS, hardzao, nython, righi, venomzera    |
|           28 |     2622 | 2024-04-09 | MIBR            | L   | 0.494      | -            | -                | -                | -         |    -2.13 | dav1deuS, hardzao, nython, righi, venomzera    |
|           27 |     2655 | 2024-04-08 | BESTIA          | W   | 0.488      | -            | -                | -                | -         |     5.04 | dav1deuS, hardzao, nython, righi, venomzera    |
|           26 |     2663 | 2024-04-08 | Bounty Hunters  | W   | 0.487      | -            | -                | -                | -         |     3.56 | dav1deuS, hardzao, nython, righi, venomzera    |
|           25 |     2691 | 2024-04-07 | Imperial        | L   | 0.481      | -            | -                | -                | -         |    -2.95 | dav1deuS, hardzao, nython, righi, venomzera    |
|           24 |     2710 | 2024-04-06 | W7M             | L   | 0.473      | -            | -                | -                | -         |   -12.44 | dav1deuS, hardzao, nython, righi, venomzera    |
|           23 |     2751 | 2024-04-04 | Case            | L   | 0.461      | -            | -                | -                | -         |   -11.41 | dav1deuS, hardzao, nython, righi, venomzera    |
|           22 |     2754 | 2024-04-04 | Case            | W   | 0.461      | -            | -                | -                | -         |     3.12 | dav1deuS, hardzao, nython, righi, venomzera    |
|           21 |     2768 | 2024-04-04 | Fluxo           | W   | 0.460      | -            | -                | -                | -         |     6.04 | dav1deuS, hardzao, nython, righi, venomzera    |
|           20 |     2791 | 2024-04-03 | ODDIK           | W   | 0.455      | -            | -                | -                | -         |     4.54 | dav1deuS, hardzao, nython, righi, venomzera    |
|           19 |     2794 | 2024-04-03 | ODDIK           | W   | 0.454      | -            | -                | -                | -         |     4.70 | dav1deuS, hardzao, nython, righi, venomzera    |
|           18 |     3078 | 2024-03-18 | ODDIK           | W   | 0.347      | -            | -                | -                | -         |     3.73 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           17 |     3121 | 2024-03-16 | ODDIK           | W   | 0.334      | -            | -                | -                | -         |     3.64 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           16 |     3138 | 2024-03-15 | Case            | W   | 0.328      | -            | -                | -                | -         |     2.57 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           15 |     3171 | 2024-03-14 | Solid           | L   | 0.321      | -            | -                | -                | -         |    -7.77 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           14 |     3179 | 2024-03-14 | Flamengo        | W   | 0.320      | -            | -                | -                | -         |     0.31 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           13 |     3197 | 2024-03-13 | Case            | W   | 0.314      | -            | -                | -                | -         |     2.43 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           12 |     3210 | 2024-03-13 | Galorys         | W   | 0.313      | -            | -                | -                | -         |     1.85 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           11 |     3241 | 2024-03-12 | BESTIA          | W   | 0.307      | -            | -                | -                | -         |     3.68 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           10 |     3259 | 2024-03-11 | Corinthians     | W   | 0.300      | -            | -                | -                | -         |     0.31 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            9 |     3295 | 2024-03-09 | W7M             | W   | 0.289      | -            | -                | -                | -         |     1.67 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            8 |     3342 | 2024-03-07 | VELOX           | W   | 0.275      | -            | -                | -                | -         |     0.16 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            7 |     3459 | 2024-03-03 | ODDIK           | L   | 0.247      | -            | -                | -                | -         |    -5.03 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            6 |     3493 | 2024-03-02 | paiN            | L   | 0.239      | -            | -                | -                | -         |    -0.87 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            5 |     3508 | 2024-03-01 | Wildcard        | W   | 0.234      | -            | -                | -                | 1 (0.234) |     1.93 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            4 |     3908 | 2024-02-13 | Imperial        | L   | 0.122      | -            | -                | -                | -         |    -0.78 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            3 |     3912 | 2024-02-13 | Imperial        | W   | 0.121      | -            | -                | -                | -         |     3.07 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            2 |     4097 | 2024-02-01 | W7M             | L   | 0.042      | -            | -                | -                | -         |    -1.07 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            1 |     4100 | 2024-02-01 | paiN            | L   | 0.041      | -            | -                | -                | -         |    -0.15 | dav1deuS, destiny, hardzao, nython, venomzera  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($28,111.98)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-14 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-16 |      0.949 | $1,500.00      | $1,422.83       |
| 2024-06-10 |      0.908 | $750.00        | $681.26         |
| 2024-06-09 |      0.901 | $11,500.00     | $10,364.08      |
| 2024-05-19 |      0.761 | $10,000.00     | $7,612.18       |
| 2024-03-18 |      0.347 | $3,500.00      | $1,215.24       |
| 2024-03-14 |      0.321 | $15,000.00     | $4,816.39       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
