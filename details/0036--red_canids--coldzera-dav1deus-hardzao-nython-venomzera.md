### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, dav1deuS, hardzao, nython, venomzera<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [36](../standings_global.md)<br />
Regional Rank: [9]( ../standings_americas.md)<br />
Final Rank Value:  1234.5<br />
<br />
Final Rank Value (1234.5) = Starting Rank Value (1169.0) + Head To Head Adjustments (65.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.516[<sup>1</sup>](#table2)
- Bounty Collected: 0.532[<sup>2</sup>](#table1)
- Opponent Network: 0.257[<sup>2</sup>](#table1)
- LAN Wins: 0.153[<sup>2</sup>](#table1)

The average of these factors is 0.365<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1169.0
- 400 + ( ( 0.365 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1169.0


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
|           87 |       33 | 2024-07-09 | Bounty Hunters  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.76 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           86 |       56 | 2024-07-08 | SPORT           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.40 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           85 |      172 | 2024-06-15 | fnatic          | L   | 1.000      | -            | -                | -                | -         |    -6.44 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           84 |      207 | 2024-06-14 | KOI             | L   | 1.000      | -            | -                | -                | -         |   -18.59 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           83 |      213 | 2024-06-14 | fnatic          | W   | 1.000      | 0.548        | 0.298 (0.164)    | 0.623 (0.342)    | 1 (1.000) |    24.69 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           82 |      359 | 2024-06-09 | BESTIA          | L   | 0.989      | -            | -                | -                | -         |   -23.07 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           81 |      363 | 2024-06-09 | Imperial        | L   | 0.988      | -            | -                | -                | -         |    -7.70 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           80 |      498 | 2024-06-07 | Intense         | W   | 0.974      | -            | -                | -                | 0 (0.000) |     0.84 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           79 |      538 | 2024-06-06 | Imperial        | W   | 0.968      | 0.450        | 0.390 (0.170)    | 0.646 (0.281)    | 0 (0.000) |    22.74 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           78 |      606 | 2024-06-05 | 9z              | W   | 0.962      | 0.450        | 0.586 (0.254)    | 0.749 (0.324)    | 0 (0.000) |    26.98 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           77 |     1022 | 2024-05-21 | Sharks          | L   | 0.861      | -            | -                | -                | -         |   -20.36 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           76 |     1026 | 2024-05-21 | Sharks          | W   | 0.861      | 0.450        | 0.046 (0.018)    | 0.520 (0.202)    | 0 (0.000) |     6.50 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           75 |     1056 | 2024-05-20 | Fluxo           | L   | 0.855      | -            | -                | -                | -         |   -16.70 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           74 |     1058 | 2024-05-20 | Fluxo           | W   | 0.855      | 0.450        | 0.166 (0.064)    | 0.615 (0.237)    | 0 (0.000) |    10.14 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           73 |     1087 | 2024-05-19 | 9z              | W   | 0.848      | 0.371        | 0.586 (0.184)    | 0.749 (0.235)    | 0 (0.000) |    24.18 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           72 |     1112 | 2024-05-18 | ODDIK           | W   | 0.841      | -            | -                | -                | -         |     5.37 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           71 |     1183 | 2024-05-16 | Fluxo           | W   | 0.828      | 0.371        | 0.166 (0.051)    | -                | -         |    11.53 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           70 |     1226 | 2024-05-15 | 9z              | L   | 0.822      | -            | -                | -                | -         |    -1.89 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           69 |     1228 | 2024-05-15 | 9z              | W   | 0.822      | 0.450        | 0.586 (0.217)    | 0.749 (0.277)    | -         |    24.25 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           68 |     1286 | 2024-05-14 | Corinthians     | W   | 0.815      | -            | -                | -                | -         |     0.67 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           67 |     1290 | 2024-05-14 | Corinthians     | W   | 0.815      | -            | -                | -                | -         |     0.67 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           66 |     1304 | 2024-05-14 | BESTIA          | W   | 0.813      | -            | -                | -                | -         |     6.61 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           65 |     1321 | 2024-05-13 | Sharks          | L   | 0.808      | -            | -                | -                | -         |   -17.91 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           64 |     1341 | 2024-05-12 | Vikings KR      | W   | 0.802      | -            | -                | -                | -         |     2.77 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           63 |     1350 | 2024-05-12 | FURIA Academy   | W   | 0.800      | -            | -                | -                | -         |     0.67 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           62 |     1404 | 2024-05-10 | paiN            | L   | 0.786      | -            | -                | -                | -         |    -3.07 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           61 |     1421 | 2024-05-09 | Intense         | W   | 0.781      | -            | -                | -                | -         |     0.80 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           60 |     1439 | 2024-05-08 | paiN            | L   | 0.775      | -            | -                | -                | -         |    -2.81 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           59 |     1441 | 2024-05-08 | paiN            | W   | 0.775      | 0.450        | 0.478 (0.167)    | 0.768 (0.268)    | -         |    21.94 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           58 |     1442 | 2024-05-08 | Solid           | L   | 0.775      | -            | -                | -                | -         |   -19.94 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           57 |     1486 | 2024-05-06 | Intense         | W   | 0.759      | -            | -                | -                | -         |     0.74 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           56 |     1716 | 2024-04-25 | BESTIA          | W   | 0.688      | 0.450        | -                | 0.657 (0.203)    | -         |     4.41 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           55 |     1718 | 2024-04-25 | BESTIA          | W   | 0.688      | 0.450        | -                | 0.657 (0.203)    | -         |     4.59 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           54 |     1945 | 2024-04-17 | MIBR            | L   | 0.635      | -            | -                | -                | -         |    -1.72 | dav1deuS, hardzao, nython, righi, venomzera    |
|           53 |     1953 | 2024-04-17 | O PLANO         | W   | 0.634      | -            | -                | -                | -         |     0.59 | dav1deuS, hardzao, nython, righi, venomzera    |
|           52 |     1987 | 2024-04-16 | LaChampionsLiga | W   | 0.628      | -            | -                | -                | -         |     0.27 | dav1deuS, hardzao, nython, righi, venomzera    |
|           51 |     2036 | 2024-04-13 | Imperial        | L   | 0.609      | -            | -                | -                | -         |    -2.79 | dav1deuS, hardzao, nython, righi, venomzera    |
|           50 |     2055 | 2024-04-12 | W7M             | W   | 0.601      | -            | -                | -                | -         |     2.26 | dav1deuS, hardzao, nython, righi, venomzera    |
|           49 |     2110 | 2024-04-10 | ex-2GAME        | W   | 0.588      | -            | -                | -                | -         |     1.35 | dav1deuS, hardzao, nython, righi, venomzera    |
|           48 |     2114 | 2024-04-10 | ex-2GAME        | W   | 0.588      | -            | -                | -                | -         |     1.37 | dav1deuS, hardzao, nython, righi, venomzera    |
|           47 |     2117 | 2024-04-10 | paiN            | L   | 0.588      | -            | -                | -                | -         |    -1.68 | dav1deuS, hardzao, nython, righi, venomzera    |
|           46 |     2164 | 2024-04-09 | W7M             | W   | 0.581      | -            | -                | -                | -         |     2.25 | dav1deuS, hardzao, nython, righi, venomzera    |
|           45 |     2169 | 2024-04-09 | W7M             | W   | 0.581      | -            | -                | -                | -         |     2.30 | dav1deuS, hardzao, nython, righi, venomzera    |
|           44 |     2170 | 2024-04-09 | MIBR            | L   | 0.581      | -            | -                | -                | -         |    -1.79 | dav1deuS, hardzao, nython, righi, venomzera    |
|           43 |     2203 | 2024-04-08 | BESTIA          | W   | 0.575      | -            | -                | -                | -         |     4.68 | dav1deuS, hardzao, nython, righi, venomzera    |
|           42 |     2211 | 2024-04-08 | Bounty Hunters  | W   | 0.573      | -            | -                | -                | -         |     3.48 | dav1deuS, hardzao, nython, righi, venomzera    |
|           41 |     2239 | 2024-04-07 | Imperial        | L   | 0.568      | -            | -                | -                | -         |    -2.29 | dav1deuS, hardzao, nython, righi, venomzera    |
|           40 |     2258 | 2024-04-06 | W7M             | L   | 0.560      | -            | -                | -                | -         |   -15.61 | dav1deuS, hardzao, nython, righi, venomzera    |
|           39 |     2299 | 2024-04-04 | Case            | L   | 0.548      | -            | -                | -                | -         |   -14.67 | dav1deuS, hardzao, nython, righi, venomzera    |
|           38 |     2302 | 2024-04-04 | Case            | W   | 0.548      | -            | -                | -                | -         |     2.55 | dav1deuS, hardzao, nython, righi, venomzera    |
|           37 |     2316 | 2024-04-04 | Fluxo           | W   | 0.547      | -            | -                | -                | -         |     6.30 | dav1deuS, hardzao, nython, righi, venomzera    |
|           36 |     2339 | 2024-04-03 | ODDIK           | W   | 0.542      | -            | -                | -                | -         |     3.96 | dav1deuS, hardzao, nython, righi, venomzera    |
|           35 |     2342 | 2024-04-03 | ODDIK           | W   | 0.541      | -            | -                | -                | -         |     4.10 | dav1deuS, hardzao, nython, righi, venomzera    |
|           34 |     2626 | 2024-03-18 | ODDIK           | W   | 0.434      | -            | -                | -                | -         |     3.41 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           33 |     2669 | 2024-03-16 | ODDIK           | W   | 0.421      | -            | -                | -                | -         |     3.34 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           32 |     2686 | 2024-03-15 | Case            | W   | 0.415      | -            | -                | -                | -         |     2.23 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           31 |     2719 | 2024-03-14 | Solid           | L   | 0.408      | -            | -                | -                | -         |   -10.47 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           30 |     2727 | 2024-03-14 | Flamengo        | W   | 0.406      | -            | -                | -                | -         |     0.32 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           29 |     2745 | 2024-03-13 | Case            | W   | 0.401      | -            | -                | -                | -         |     2.08 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           28 |     2758 | 2024-03-13 | Galorys         | W   | 0.400      | -            | -                | -                | -         |     1.85 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           27 |     2789 | 2024-03-12 | BESTIA          | W   | 0.394      | -            | -                | -                | -         |     3.64 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           26 |     2807 | 2024-03-11 | Corinthians     | W   | 0.387      | -            | -                | -                | -         |     0.32 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           25 |     2843 | 2024-03-09 | W7M             | W   | 0.375      | -            | -                | -                | -         |     1.43 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           24 |     2890 | 2024-03-07 | VELOX           | W   | 0.362      | -            | -                | -                | -         |     0.16 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           23 |     3007 | 2024-03-03 | ODDIK           | L   | 0.334      | -            | -                | -                | -         |    -7.90 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           22 |     3041 | 2024-03-02 | paiN            | L   | 0.326      | -            | -                | -                | -         |    -0.93 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           21 |     3056 | 2024-03-01 | Wildcard        | W   | 0.321      | -            | -                | -                | 1 (0.321) |     2.44 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           20 |     3456 | 2024-02-13 | Imperial        | L   | 0.209      | -            | -                | -                | -         |    -0.88 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           19 |     3460 | 2024-02-13 | Imperial        | W   | 0.208      | 0.450        | 0.390 (0.037)    | -                | -         |     5.72 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           18 |     3645 | 2024-02-01 | W7M             | L   | 0.129      | -            | -                | -                | -         |    -3.59 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           17 |     3648 | 2024-02-01 | paiN            | L   | 0.128      | -            | -                | -                | -         |    -0.35 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           16 |     3821 | 2024-01-22 | W7M             | L   | 0.062      | -            | -                | -                | -         |    -1.73 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           15 |     3846 | 2024-01-21 | 9z              | W   | 0.057      | -            | -                | -                | -         |     1.72 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           14 |     3847 | 2024-01-21 | Flamengo        | W   | 0.056      | -            | -                | -                | -         |     0.04 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           13 |     3851 | 2024-01-21 | ODDIK           | L   | 0.055      | -            | -                | -                | -         |    -1.30 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           12 |     3884 | 2024-01-20 | Legacy          | L   | 0.048      | -            | -                | -                | -         |    -0.94 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           11 |     3936 | 2024-01-19 | Fluxo           | W   | 0.042      | -            | -                | -                | -         |     0.47 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           10 |     3950 | 2024-01-19 | Case            | W   | 0.040      | -            | -                | -                | -         |     0.03 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            9 |     4043 | 2024-01-17 | Sharks          | L   | 0.029      | -            | -                | -                | -         |    -0.66 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            8 |     4057 | 2024-01-17 | 9z              | L   | 0.028      | -            | -                | -                | -         |    -0.03 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            7 |     4089 | 2024-01-16 | Legacy          | W   | 0.022      | -            | -                | -                | -         |     0.27 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            6 |     4103 | 2024-01-16 | Case            | W   | 0.021      | -            | -                | -                | -         |     0.02 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            5 |     4110 | 2024-01-16 | adalYamigos     | W   | 0.021      | -            | -                | -                | -         |     0.03 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            4 |     4149 | 2024-01-15 | AJF             | W   | 0.015      | -            | -                | -                | -         |     0.01 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            3 |     4177 | 2024-01-14 | paiN            | L   | 0.008      | -            | -                | -                | -         |    -0.02 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            2 |     4182 | 2024-01-14 | Legacy          | W   | 0.008      | -            | -                | -                | -         |     0.09 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            1 |     4202 | 2024-01-13 | E-Xolos LAZER   | W   | 0.002      | -            | -                | -                | -         |     0.01 | dav1deuS, destiny, hardzao, nython, venomzera  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29,727.70)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-06-10 |      0.995 | $750.00        | $746.38         |
| 2024-06-09 |      0.988 | $11,500.00     | $11,362.69      |
| 2024-05-19 |      0.848 | $10,000.00     | $8,480.54       |
| 2024-03-18 |      0.434 | $3,500.00      | $1,519.16       |
| 2024-03-14 |      0.408 | $15,000.00     | $6,118.92       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
