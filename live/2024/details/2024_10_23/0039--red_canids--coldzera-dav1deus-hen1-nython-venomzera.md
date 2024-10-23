### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, dav1deuS, HEN1, nython, venomzera<br />
Global Rank: [39](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_23.md)<br />
Regional Rank: [13]( ../../standings_americas_2024_10_23.md)<br />
<br />
Final Rank Value:  1143.6<br />
<br />
Final Rank Value (1143.6) = Starting Rank Value (1270.7) + Head To Head Adjustments (-127.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.545[<sup>1</sup>](#table2)
- Bounty Collected: 0.515[<sup>2</sup>](#table1)
- Opponent Network: 0.255[<sup>2</sup>](#table1)
- LAN Wins: 0.462[<sup>2</sup>](#table1)

The average of these factors is 0.444<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1270.7
- 400 + ( ( 0.444 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 1270.7


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
|           91 |       84 | 2024-10-18 | BESTIA          | L   | 1.000      | -            | -                | -                | -         |   -14.17 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           90 |      111 | 2024-10-17 | Imperial        | W   | 1.000      | 0.450        | 0.161 (0.072)    | 0.573 (0.258)    | 0 (0.000) |    18.27 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           89 |      141 | 2024-10-16 | MIBR            | L   | 1.000      | -            | -                | -                | -         |   -10.30 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           88 |      170 | 2024-10-15 | BESTIA          | W   | 1.000      | 0.450        | 0.130 (0.058)    | 0.741 (0.334)    | 0 (0.000) |    17.03 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           87 |      261 | 2024-10-09 | MIBR            | L   | 1.000      | -            | -                | -                | -         |   -10.45 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           86 |      265 | 2024-10-09 | MIBR            | L   | 1.000      | -            | -                | -                | -         |   -11.32 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           85 |      300 | 2024-10-08 | Dusty Roots     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.71 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           84 |      304 | 2024-10-08 | Dusty Roots     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.85 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           83 |      308 | 2024-10-08 | Solid           | L   | 1.000      | -            | -                | -                | -         |   -20.89 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           82 |      310 | 2024-10-08 | Solid           | L   | 1.000      | -            | -                | -                | -         |   -22.54 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           81 |      329 | 2024-10-07 | BESTIA          | L   | 1.000      | -            | -                | -                | -         |   -17.50 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           80 |      330 | 2024-10-07 | BESTIA          | L   | 1.000      | -            | -                | -                | -         |   -19.08 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           79 |      384 | 2024-10-05 | BESTIA          | W   | 1.000      | 0.389        | 0.130 (0.050)    | 0.741 (0.288)    | 1 (1.000) |    12.14 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           78 |      417 | 2024-10-04 | Imperial        | W   | 1.000      | 0.389        | 0.161 (0.062)    | 0.573 (0.223)    | 1 (1.000) |    15.63 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           77 |      495 | 2024-10-02 | paiN            | L   | 1.000      | -            | -                | -                | -         |    -3.97 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           76 |      500 | 2024-10-02 | paiN            | W   | 1.000      | 0.450        | 0.345 (0.155)    | 0.759 (0.341)    | 0 (0.000) |    28.00 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           75 |      624 | 2024-09-28 | paiN            | L   | 1.000      | -            | -                | -                | -         |    -3.20 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           74 |      628 | 2024-09-28 | Fluxo           | L   | 1.000      | -            | -                | -                | -         |   -17.98 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           73 |      765 | 2024-09-25 | Fluxo           | L   | 1.000      | -            | -                | -                | -         |   -20.06 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           72 |      769 | 2024-09-25 | Fluxo           | L   | 1.000      | -            | -                | -                | -         |   -21.71 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           71 |      820 | 2024-09-24 | ODDIK           | W   | 1.000      | 0.450        | 0.161 (0.072)    | 0.576 (0.259)    | -         |     9.03 | dav1deuS, hardzao, HEN1, nython, venomzera     |
|           70 |      826 | 2024-09-24 | ODDIK           | L   | 1.000      | -            | -                | -                | -         |   -22.98 | dav1deuS, hardzao, HEN1, nython, venomzera     |
|           69 |      830 | 2024-09-24 | Fluxo           | W   | 1.000      | -            | -                | -                | -         |    10.61 | dav1deuS, gtw, HEN1, nython, venomzera         |
|           68 |      861 | 2024-09-23 | paiN            | L   | 1.000      | -            | -                | -                | -         |    -4.00 | dav1deuS, gtw, HEN1, nython, venomzera         |
|           67 |      872 | 2024-09-23 | Fluxo           | W   | 1.000      | -            | -                | -                | -         |     9.85 | dav1deuS, gtw, HEN1, nython, venomzera         |
|           66 |     1094 | 2024-09-15 | FURIA           | L   | 0.946      | -            | -                | -                | -         |    -2.59 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           65 |     1134 | 2024-09-14 | Falcons         | W   | 0.938      | 0.889        | 0.264 (0.220)    | 0.340 (0.284)    | 1 (0.938) |    21.86 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           64 |     1168 | 2024-09-13 | FURIA           | L   | 0.932      | -            | -                | -                | -         |    -2.14 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           63 |     1192 | 2024-09-12 | ENCE            | W   | 0.926      | 0.889        | 0.442 (0.364)    | 0.257 (0.212)    | 1 (0.926) |    18.03 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           62 |     1250 | 2024-09-10 | Virtus.pro      | L   | 0.913      | -            | -                | -                | -         |    -3.03 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           61 |     1614 | 2024-08-28 | Fluxo           | W   | 0.828      | -            | -                | -                | -         |     8.70 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           60 |     1627 | 2024-08-28 | ODDIK           | W   | 0.826      | -            | -                | -                | -         |     9.97 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           59 |     1676 | 2024-08-27 | Solid           | W   | 0.821      | -            | -                | -                | -         |     5.06 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           58 |     1731 | 2024-08-26 | Intense         | W   | 0.814      | -            | -                | -                | -         |     1.75 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           57 |     1773 | 2024-08-26 | Case            | L   | 0.812      | -            | -                | -                | -         |   -21.96 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           56 |     2108 | 2024-08-15 | KRÜ             | L   | 0.741      | -            | -                | -                | -         |   -20.88 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           55 |     2112 | 2024-08-15 | KRÜ             | W   | 0.741      | -            | -                | -                | -         |     2.32 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           54 |     2360 | 2024-08-07 | Case            | W   | 0.688      | 0.450        | -                | 0.568 (0.176)    | -         |     2.99 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           53 |     2362 | 2024-08-07 | Case            | W   | 0.687      | 0.450        | -                | 0.568 (0.176)    | -         |     3.07 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           52 |     2472 | 2024-08-04 | ODDIK           | L   | 0.668      | -            | -                | -                | -         |   -13.68 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           51 |     2475 | 2024-08-04 | BESTIA          | W   | 0.667      | -            | -                | -                | -         |     4.83 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           50 |     2504 | 2024-08-03 | ODDIK           | L   | 0.662      | -            | -                | -                | -         |   -14.15 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           49 |     2513 | 2024-08-03 | Vikings KR      | W   | 0.660      | -            | -                | -                | -         |     1.40 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           48 |     2739 | 2024-07-28 | MIBR            | L   | 0.622      | -            | -                | -                | -         |    -5.97 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           47 |     2745 | 2024-07-28 | paiN            | L   | 0.620      | -            | -                | -                | -         |    -3.68 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           46 |     2799 | 2024-07-26 | ODDIK           | L   | 0.606      | -            | -                | -                | -         |   -14.49 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           45 |     2864 | 2024-07-24 | Fluxo           | W   | 0.595      | -            | -                | -                | -         |     6.61 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           44 |     2868 | 2024-07-24 | ODDIK           | W   | 0.594      | -            | -                | -                | -         |     4.85 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           43 |     2897 | 2024-07-23 | KRÜ             | W   | 0.588      | -            | -                | -                | -         |     1.76 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           42 |     2905 | 2024-07-23 | LaChampionsLiga | W   | 0.587      | -            | -                | -                | -         |     0.41 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           41 |     2941 | 2024-07-22 | paiN Academy    | W   | 0.580      | -            | -                | -                | -         |     0.15 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           40 |     2964 | 2024-07-21 | BESTIA          | L   | 0.573      | -            | -                | -                | -         |   -14.39 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           39 |     2995 | 2024-07-20 | Case            | W   | 0.567      | -            | -                | -                | -         |     2.05 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           38 |     3031 | 2024-07-19 | Intense         | W   | 0.560      | -            | -                | -                | -         |     0.78 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           37 |     3136 | 2024-07-17 | Hype            | W   | 0.548      | -            | -                | -                | -         |     1.63 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           36 |     3142 | 2024-07-17 | Hype            | W   | 0.547      | -            | -                | -                | -         |     1.66 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           35 |     3194 | 2024-07-16 | Sharks          | W   | 0.541      | -            | -                | -                | -         |     3.01 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           34 |     3202 | 2024-07-16 | Sharks          | W   | 0.541      | -            | -                | -                | -         |     3.09 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           33 |     3298 | 2024-07-13 | Legacy          | L   | 0.520      | -            | -                | -                | -         |   -13.01 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           32 |     3324 | 2024-07-11 | KRÜ             | W   | 0.507      | -            | -                | -                | -         |     1.42 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           31 |     3359 | 2024-07-09 | Bounty Hunters  | W   | 0.494      | -            | -                | -                | -         |     1.29 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           30 |     3382 | 2024-07-08 | SPORT           | W   | 0.487      | -            | -                | -                | -         |     0.58 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           29 |     3498 | 2024-06-15 | fnatic          | L   | 0.335      | -            | -                | -                | -         |    -4.15 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           28 |     3533 | 2024-06-14 | KOI             | L   | 0.329      | -            | -                | -                | -         |    -9.21 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           27 |     3539 | 2024-06-14 | fnatic          | W   | 0.327      | 0.548        | 0.314 (0.056)    | -                | 1 (0.327) |     6.20 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           26 |     3685 | 2024-06-09 | BESTIA          | L   | 0.295      | -            | -                | -                | -         |    -7.01 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           25 |     3689 | 2024-06-09 | Imperial        | L   | 0.294      | -            | -                | -                | -         |    -5.60 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           24 |     3824 | 2024-06-07 | Intense         | W   | 0.280      | -            | -                | -                | -         |     0.31 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           23 |     3864 | 2024-06-06 | Imperial        | W   | 0.274      | -            | -                | -                | -         |     3.36 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           22 |     3932 | 2024-06-05 | 9z              | W   | 0.268      | 0.450        | 0.271 (0.033)    | -                | -         |     4.87 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           21 |     4348 | 2024-05-21 | Sharks          | L   | 0.167      | -            | -                | -                | -         |    -4.30 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           20 |     4352 | 2024-05-21 | Sharks          | W   | 0.167      | -            | -                | -                | -         |     0.98 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           19 |     4382 | 2024-05-20 | Fluxo           | L   | 0.161      | -            | -                | -                | -         |    -3.80 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           18 |     4384 | 2024-05-20 | Fluxo           | W   | 0.161      | -            | -                | -                | -         |     1.28 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           17 |     4413 | 2024-05-19 | 9z              | W   | 0.154      | -            | -                | -                | -         |     2.74 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           16 |     4438 | 2024-05-18 | ODDIK           | W   | 0.147      | -            | -                | -                | -         |     1.09 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           15 |     4509 | 2024-05-16 | Fluxo           | W   | 0.134      | -            | -                | -                | -         |     1.09 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           14 |     4552 | 2024-05-15 | 9z              | L   | 0.128      | -            | -                | -                | -         |    -1.76 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           13 |     4554 | 2024-05-15 | 9z              | W   | 0.128      | -            | -                | -                | -         |     2.29 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           12 |     4612 | 2024-05-14 | Corinthians     | W   | 0.121      | -            | -                | -                | -         |     0.03 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           11 |     4616 | 2024-05-14 | Corinthians     | W   | 0.121      | -            | -                | -                | -         |     0.03 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           10 |     4630 | 2024-05-14 | BESTIA          | W   | 0.120      | -            | -                | -                | -         |     0.94 | coldzera, dav1deuS, hardzao, nython, venomzera |
|            9 |     4647 | 2024-05-13 | Sharks          | L   | 0.114      | -            | -                | -                | -         |    -2.93 | coldzera, dav1deuS, hardzao, nython, venomzera |
|            8 |     4667 | 2024-05-12 | Vikings KR      | W   | 0.108      | -            | -                | -                | -         |     0.14 | coldzera, dav1deuS, hardzao, nython, venomzera |
|            7 |     4676 | 2024-05-12 | FURIA Academy   | W   | 0.106      | -            | -                | -                | -         |     0.05 | coldzera, dav1deuS, hardzao, nython, venomzera |
|            6 |     4730 | 2024-05-10 | paiN            | L   | 0.093      | -            | -                | -                | -         |    -0.50 | coldzera, dav1deuS, hardzao, nython, venomzera |
|            5 |     4747 | 2024-05-09 | Intense         | W   | 0.087      | -            | -                | -                | -         |     0.10 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            4 |     4765 | 2024-05-08 | paiN            | L   | 0.081      | -            | -                | -                | -         |    -0.43 | coldzera, dav1deuS, hardzao, nython, venomzera |
|            3 |     4767 | 2024-05-08 | paiN            | W   | 0.081      | -            | -                | -                | -         |     2.13 | coldzera, dav1deuS, hardzao, nython, venomzera |
|            2 |     4768 | 2024-05-08 | Solid           | L   | 0.081      | -            | -                | -                | -         |    -2.30 | coldzera, dav1deuS, hardzao, nython, venomzera |
|            1 |     4812 | 2024-05-06 | Intense         | W   | 0.065      | -            | -                | -                | -         |     0.07 | coldzera, dav1deuS, hardzao, nython, venomzera |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($39,639.02)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-10-05 |      1.000 | $16,000.00     | $16,000.00      |
| 2024-09-22 |      0.993 | $12,000.00     | $11,921.83      |
| 2024-07-14 |      0.527 | $2,000.00      | $1,053.67       |
| 2024-06-16 |      0.342 | $1,500.00      | $512.29         |
| 2024-06-10 |      0.301 | $750.00        | $225.99         |
| 2024-06-09 |      0.294 | $11,500.00     | $3,383.31       |
| 2024-05-19 |      0.154 | $10,000.00     | $1,541.94       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
