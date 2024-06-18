### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, dav1deuS, hardzao, nython, venomzera<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [39](../standings_global.md)<br />
Regional Rank: [9]( ../standings_americas.md)<br />
Final Rank Value:  1226.3<br />
<br />
Final Rank Value (1226.3) = Starting Rank Value (1162.9) + Head To Head Adjustments (63.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.515[<sup>1</sup>](#table2)
- Bounty Collected: 0.542[<sup>2</sup>](#table1)
- Opponent Network: 0.291[<sup>2</sup>](#table1)
- LAN Wins: 0.154[<sup>2</sup>](#table1)

The average of these factors is 0.375<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1162.9
- 400 + ( ( 0.375 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1162.9


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
|           85 |       36 | 2024-06-15 | fnatic          | L   | 1.000      | -            | -                | -                | -         |    -7.68 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           84 |       71 | 2024-06-14 | KOI             | L   | 1.000      | -            | -                | -                | -         |   -18.80 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           83 |       77 | 2024-06-14 | fnatic          | W   | 1.000      | 0.548        | 0.290 (0.159)    | 0.666 (0.365)    | 1 (1.000) |    23.23 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           82 |      223 | 2024-06-09 | BESTIA          | L   | 1.000      | -            | -                | -                | -         |   -23.18 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           81 |      227 | 2024-06-09 | Imperial        | L   | 1.000      | -            | -                | -                | -         |    -7.82 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           80 |      362 | 2024-06-07 | Intense         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.80 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           79 |      402 | 2024-06-06 | Imperial        | W   | 1.000      | 0.450        | 0.406 (0.183)    | 0.694 (0.312)    | 0 (0.000) |    23.52 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           78 |      470 | 2024-06-05 | 9z              | W   | 1.000      | 0.450        | 0.525 (0.236)    | 0.749 (0.337)    | 0 (0.000) |    26.64 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           77 |      888 | 2024-05-21 | Sharks          | L   | 1.000      | -            | -                | -                | -         |   -23.57 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           76 |      892 | 2024-05-21 | Sharks          | W   | 1.000      | 0.450        | 0.044 (0.020)    | -                | 0 (0.000) |     7.43 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           75 |      922 | 2024-05-20 | Fluxo           | L   | 1.000      | -            | -                | -                | -         |   -19.23 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           74 |      924 | 2024-05-20 | Fluxo           | W   | 1.000      | 0.450        | 0.159 (0.072)    | 0.627 (0.282)    | 0 (0.000) |    11.98 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           73 |      953 | 2024-05-19 | 9z              | W   | 1.000      | 0.371        | 0.525 (0.195)    | 0.749 (0.278)    | 0 (0.000) |    26.89 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           72 |      978 | 2024-05-18 | ODDIK           | W   | 0.997      | -            | -                | -                | 0 (0.000) |     6.13 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           71 |     1049 | 2024-05-16 | Fluxo           | W   | 0.984      | 0.371        | 0.159 (0.058)    | 0.627 (0.229)    | 0 (0.000) |    14.19 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           70 |     1092 | 2024-05-15 | 9z              | L   | 0.978      | -            | -                | -                | -         |    -3.42 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           69 |     1094 | 2024-05-15 | 9z              | W   | 0.977      | 0.450        | 0.525 (0.231)    | 0.749 (0.330)    | -         |    27.79 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           68 |     1152 | 2024-05-14 | Corinthians     | W   | 0.971      | -            | -                | -                | -         |     2.07 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           67 |     1156 | 2024-05-14 | Corinthians     | W   | 0.970      | -            | -                | -                | -         |     2.11 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           66 |     1170 | 2024-05-14 | BESTIA          | W   | 0.969      | -            | -                | -                | -         |     7.86 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           65 |     1187 | 2024-05-13 | Sharks          | L   | 0.964      | -            | -                | -                | -         |   -20.88 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           64 |     1207 | 2024-05-12 | Vikings KR      | W   | 0.957      | -            | -                | -                | -         |     2.63 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           63 |     1216 | 2024-05-12 | FURIA Academy   | W   | 0.956      | -            | -                | -                | -         |     0.98 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           62 |     1270 | 2024-05-10 | paiN            | L   | 0.942      | -            | -                | -                | -         |    -3.49 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           61 |     1287 | 2024-05-09 | Intense         | W   | 0.937      | -            | -                | -                | -         |     0.92 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           60 |     1305 | 2024-05-08 | paiN            | L   | 0.931      | -            | -                | -                | -         |    -3.14 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           59 |     1307 | 2024-05-08 | paiN            | W   | 0.931      | 0.450        | 0.492 (0.206)    | 0.775 (0.325)    | -         |    26.57 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           58 |     1308 | 2024-05-08 | Solid           | L   | 0.930      | -            | -                | -                | -         |   -23.89 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           57 |     1352 | 2024-05-06 | Intense         | W   | 0.915      | -            | -                | -                | -         |     0.84 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           56 |     1582 | 2024-04-25 | BESTIA          | W   | 0.844      | 0.450        | -                | 0.594 (0.226)    | -         |     5.16 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           55 |     1584 | 2024-04-25 | BESTIA          | W   | 0.844      | 0.450        | -                | 0.594 (0.226)    | -         |     5.41 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           54 |     1811 | 2024-04-17 | MIBR            | L   | 0.791      | -            | -                | -                | -         |    -1.88 | dav1deuS, hardzao, nython, righi, venomzera    |
|           53 |     1819 | 2024-04-17 | O PLANO         | W   | 0.790      | -            | -                | -                | -         |     0.75 | dav1deuS, hardzao, nython, righi, venomzera    |
|           52 |     1853 | 2024-04-16 | LaChampionsLiga | W   | 0.784      | -            | -                | -                | -         |     0.35 | dav1deuS, hardzao, nython, righi, venomzera    |
|           51 |     1902 | 2024-04-13 | Imperial        | L   | 0.764      | -            | -                | -                | -         |    -2.95 | dav1deuS, hardzao, nython, righi, venomzera    |
|           50 |     1921 | 2024-04-12 | W7M             | W   | 0.756      | -            | -                | -                | -         |     3.10 | dav1deuS, hardzao, nython, righi, venomzera    |
|           49 |     1976 | 2024-04-10 | ex-2GAME        | W   | 0.744      | -            | -                | -                | -         |     1.86 | dav1deuS, hardzao, nython, righi, venomzera    |
|           48 |     1980 | 2024-04-10 | ex-2GAME        | W   | 0.744      | -            | -                | -                | -         |     1.90 | dav1deuS, hardzao, nython, righi, venomzera    |
|           47 |     1983 | 2024-04-10 | paiN            | L   | 0.743      | -            | -                | -                | -         |    -1.88 | dav1deuS, hardzao, nython, righi, venomzera    |
|           46 |     2030 | 2024-04-09 | W7M             | W   | 0.737      | -            | -                | -                | -         |     3.15 | dav1deuS, hardzao, nython, righi, venomzera    |
|           45 |     2035 | 2024-04-09 | W7M             | W   | 0.737      | -            | -                | -                | -         |     3.25 | dav1deuS, hardzao, nython, righi, venomzera    |
|           44 |     2036 | 2024-04-09 | MIBR            | L   | 0.737      | -            | -                | -                | -         |    -2.05 | dav1deuS, hardzao, nython, righi, venomzera    |
|           43 |     2069 | 2024-04-08 | BESTIA          | W   | 0.731      | -            | -                | -                | -         |     6.07 | dav1deuS, hardzao, nython, righi, venomzera    |
|           42 |     2077 | 2024-04-08 | Bounty Hunters  | W   | 0.729      | -            | -                | -                | -         |     2.85 | dav1deuS, hardzao, nython, righi, venomzera    |
|           41 |     2105 | 2024-04-07 | Imperial        | L   | 0.724      | -            | -                | -                | -         |    -2.31 | dav1deuS, hardzao, nython, righi, venomzera    |
|           40 |     2124 | 2024-04-06 | W7M             | L   | 0.716      | -            | -                | -                | -         |   -19.67 | dav1deuS, hardzao, nython, righi, venomzera    |
|           39 |     2165 | 2024-04-04 | Case            | L   | 0.704      | -            | -                | -                | -         |   -18.98 | dav1deuS, hardzao, nython, righi, venomzera    |
|           38 |     2168 | 2024-04-04 | Case            | W   | 0.704      | -            | -                | -                | -         |     3.06 | dav1deuS, hardzao, nython, righi, venomzera    |
|           37 |     2182 | 2024-04-04 | Fluxo           | W   | 0.702      | -            | -                | -                | -         |     8.19 | dav1deuS, hardzao, nython, righi, venomzera    |
|           36 |     2205 | 2024-04-03 | ODDIK           | W   | 0.697      | -            | -                | -                | -         |     5.28 | dav1deuS, hardzao, nython, righi, venomzera    |
|           35 |     2208 | 2024-04-03 | ODDIK           | W   | 0.697      | -            | -                | -                | -         |     5.52 | dav1deuS, hardzao, nython, righi, venomzera    |
|           34 |     2493 | 2024-03-18 | ODDIK           | W   | 0.590      | -            | -                | -                | -         |     4.92 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           33 |     2536 | 2024-03-16 | ODDIK           | W   | 0.577      | -            | -                | -                | -         |     4.88 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           32 |     2553 | 2024-03-15 | Case            | W   | 0.570      | -            | -                | -                | -         |     2.99 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           31 |     2586 | 2024-03-14 | Solid           | L   | 0.564      | -            | -                | -                | -         |   -14.43 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           30 |     2594 | 2024-03-14 | Flamengo        | W   | 0.562      | -            | -                | -                | -         |     0.47 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           29 |     2612 | 2024-03-13 | Case            | W   | 0.557      | -            | -                | -                | -         |     2.77 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           28 |     2625 | 2024-03-13 | Galorys         | W   | 0.556      | -            | -                | -                | -         |     2.43 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           27 |     2656 | 2024-03-12 | BESTIA          | W   | 0.549      | -            | -                | -                | -         |     5.34 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           26 |     2674 | 2024-03-11 | Corinthians     | W   | 0.543      | -            | -                | -                | -         |     1.32 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           25 |     2710 | 2024-03-09 | W7M             | W   | 0.531      | -            | -                | -                | -         |     2.31 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           24 |     2757 | 2024-03-07 | VELOX           | W   | 0.517      | -            | -                | -                | -         |     0.24 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           23 |     2874 | 2024-03-03 | ODDIK           | L   | 0.490      | -            | -                | -                | -         |   -11.26 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           22 |     2908 | 2024-03-02 | paiN            | L   | 0.482      | -            | -                | -                | -         |    -1.22 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           21 |     2923 | 2024-03-01 | Wildcard        | W   | 0.477      | -            | -                | -                | 1 (0.477) |     4.02 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           20 |     3323 | 2024-02-13 | Imperial        | L   | 0.364      | -            | -                | -                | -         |    -1.18 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           19 |     3327 | 2024-02-13 | Imperial        | W   | 0.364      | 0.450        | 0.406 (0.066)    | -                | -         |    10.38 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           18 |     3512 | 2024-02-01 | W7M             | L   | 0.284      | -            | -                | -                | -         |    -7.88 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           17 |     3515 | 2024-02-01 | paiN            | L   | 0.284      | -            | -                | -                | -         |    -0.66 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           16 |     3688 | 2024-01-22 | W7M             | L   | 0.218      | -            | -                | -                | -         |    -6.08 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           15 |     3713 | 2024-01-21 | 9z              | W   | 0.212      | -            | -                | -                | -         |     6.34 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           14 |     3714 | 2024-01-21 | Flamengo        | W   | 0.211      | -            | -                | -                | -         |     0.20 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           13 |     3718 | 2024-01-21 | ODDIK           | L   | 0.210      | -            | -                | -                | -         |    -4.89 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           12 |     3751 | 2024-01-20 | Legacy          | L   | 0.204      | -            | -                | -                | -         |    -3.94 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           11 |     3803 | 2024-01-19 | Fluxo           | W   | 0.197      | -            | -                | -                | -         |     2.22 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           10 |     3817 | 2024-01-19 | Case            | W   | 0.196      | -            | -                | -                | -         |     0.32 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            9 |     3910 | 2024-01-17 | Sharks          | L   | 0.184      | -            | -                | -                | -         |    -4.26 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            8 |     3924 | 2024-01-17 | 9z              | L   | 0.183      | -            | -                | -                | -         |    -0.30 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            7 |     3956 | 2024-01-16 | Legacy          | W   | 0.178      | -            | -                | -                | -         |     2.09 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            6 |     3970 | 2024-01-16 | Case            | W   | 0.177      | -            | -                | -                | -         |     0.28 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            5 |     3977 | 2024-01-16 | adalYamigos     | W   | 0.177      | -            | -                | -                | -         |     0.28 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            4 |     4016 | 2024-01-15 | AJF             | W   | 0.171      | -            | -                | -                | -         |     0.07 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            3 |     4044 | 2024-01-14 | paiN            | L   | 0.164      | -            | -                | -                | -         |    -0.34 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            2 |     4049 | 2024-01-14 | Legacy          | W   | 0.163      | -            | -                | -                | -         |     1.89 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            1 |     4069 | 2024-01-13 | E-Xolos LAZER   | W   | 0.157      | -            | -                | -                | -         |     0.42 | dav1deuS, destiny, hardzao, nython, venomzera  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($34,518.04)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-06-10 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-09 |      1.000 | $11,500.00     | $11,500.00      |
| 2024-05-19 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-03-18 |      0.590 | $3,500.00      | $2,064.02       |
| 2024-03-14 |      0.564 | $15,000.00     | $8,454.02       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
