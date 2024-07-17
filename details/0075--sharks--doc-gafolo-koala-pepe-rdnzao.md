### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, gafolo, koala, pepe, rdnzao<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [75](../standings_global.md)<br />
Regional Rank: [20]( ../standings_americas.md)<br />
Final Rank Value:  1002.1<br />
<br />
Final Rank Value (1002.1) = Starting Rank Value (996.6) + Head To Head Adjustments (5.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.428[<sup>1</sup>](#table2)
- Bounty Collected: 0.439[<sup>2</sup>](#table1)
- Opponent Network: 0.244[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.278<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 996.6
- 400 + ( ( 0.278 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 996.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           80 |       32 | 2024-07-16 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |    -6.61 | doc, gafolo, koala, pepe, rdnzao |
|           79 |       40 | 2024-07-16 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |    -7.02 | doc, gafolo, koala, pepe, rdnzao |
|           78 |       87 | 2024-07-15 | KRÜ               | L   | 1.000      | -            | -                | -                | -         |   -21.09 | doc, gafolo, koala, pepe, rdnzao |
|           77 |       91 | 2024-07-15 | KRÜ               | W   | 1.000      | 0.450        | 0.034 (0.015)    | -                | 0 (0.000) |    10.00 | doc, gafolo, koala, pepe, rdnzao |
|           76 |      161 | 2024-07-11 | Bounty Hunters    | L   | 1.000      | -            | -                | -                | -         |   -17.17 | doc, gafolo, koala, pepe, rdnzao |
|           75 |      176 | 2024-07-10 | BESTIA            | W   | 1.000      | 0.371        | 0.050 (0.019)    | 0.645 (0.239)    | 0 (0.000) |    16.94 | doc, gafolo, koala, pepe, rdnzao |
|           74 |      196 | 2024-07-09 | KRÜ               | L   | 1.000      | -            | -                | -                | -         |   -22.09 | doc, gafolo, koala, pepe, rdnzao |
|           73 |      218 | 2024-07-08 | Patins da Ferrari | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.14 | doc, gafolo, koala, pepe, rdnzao |
|           72 |      254 | 2024-06-30 | Patins da Ferrari | L   | 1.000      | -            | -                | -                | -         |   -23.39 | doc, gafolo, koala, pepe, rdnzao |
|           71 |      268 | 2024-06-28 | KRÜ               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.33 | doc, gafolo, koala, pepe, rdnzao |
|           70 |      269 | 2024-06-28 | Bounty Hunters    | L   | 1.000      | -            | -                | -                | -         |   -20.23 | doc, gafolo, koala, pepe, rdnzao |
|           69 |      273 | 2024-06-27 | Galorys           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.71 | doc, gafolo, koala, pepe, rdnzao |
|           68 |      276 | 2024-06-27 | inSanitY          | L   | 1.000      | -            | -                | -                | -         |   -16.98 | doc, gafolo, koala, pepe, rdnzao |
|           67 |      375 | 2024-06-14 | Fluxo             | L   | 0.982      | -            | -                | -                | -         |   -12.83 | doc, gafolo, koala, pepe, rdnzao |
|           66 |      501 | 2024-06-10 | Vikings KR        | W   | 0.953      | 0.450        | -                | 0.430 (0.184)    | 0 (0.000) |     4.97 | doc, gafolo, koala, pepe, rdnzao |
|           65 |      530 | 2024-06-09 | paiN              | L   | 0.948      | -            | -                | -                | -         |    -3.30 | doc, gafolo, koala, pepe, rdnzao |
|           64 |      546 | 2024-06-09 | BESTIA            | W   | 0.947      | 0.450        | 0.050 (0.021)    | 0.645 (0.275)    | 0 (0.000) |    14.00 | doc, gafolo, koala, pepe, rdnzao |
|           63 |      605 | 2024-06-08 | Hype              | W   | 0.941      | -            | -                | -                | 0 (0.000) |     7.91 | doc, gafolo, koala, pepe, rdnzao |
|           62 |      614 | 2024-06-08 | Patins da Ferrari | L   | 0.940      | -            | -                | -                | -         |   -23.89 | doc, gafolo, koala, pepe, rdnzao |
|           61 |      645 | 2024-06-07 | 9z                | L   | 0.935      | -            | -                | -                | -         |    -1.57 | doc, gafolo, koala, pepe, rdnzao |
|           60 |      703 | 2024-06-06 | paiN              | W   | 0.929      | 0.450        | 0.476 (0.199)    | 0.763 (0.319)    | 0 (0.000) |    26.31 | doc, gafolo, koala, pepe, rdnzao |
|           59 |      771 | 2024-06-05 | Imperial          | L   | 0.922      | -            | -                | -                | -         |    -3.27 | doc, gafolo, koala, pepe, rdnzao |
|           58 |      823 | 2024-06-04 | BESTIA            | W   | 0.916      | 0.450        | 0.050 (0.021)    | 0.645 (0.266)    | 0 (0.000) |    16.02 | doc, gafolo, koala, pepe, rdnzao |
|           57 |     1152 | 2024-05-22 | Imperial          | W   | 0.827      | 0.450        | 0.386 (0.144)    | 0.607 (0.226)    | -         |    23.19 | doc, drg, gafolo, pepe, rdnzao   |
|           56 |     1156 | 2024-05-22 | Imperial          | L   | 0.827      | -            | -                | -                | -         |    -2.66 | doc, drg, gafolo, pepe, rdnzao   |
|           55 |     1182 | 2024-05-21 | Case              | L   | 0.822      | -            | -                | -                | -         |   -16.25 | doc, drg, gafolo, pepe, rdnzao   |
|           54 |     1183 | 2024-05-21 | Case              | W   | 0.822      | 0.450        | 0.034 (0.012)    | 0.697 (0.258)    | -         |     9.58 | doc, drg, gafolo, pepe, rdnzao   |
|           53 |     1186 | 2024-05-21 | RED Canids        | W   | 0.822      | 0.450        | 0.123 (0.045)    | 0.714 (0.264)    | -         |    19.48 | doc, drg, gafolo, pepe, rdnzao   |
|           52 |     1190 | 2024-05-21 | RED Canids        | L   | 0.821      | -            | -                | -                | -         |    -6.18 | doc, drg, gafolo, pepe, rdnzao   |
|           51 |     1318 | 2024-05-17 | ODDIK             | L   | 0.794      | -            | -                | -                | -         |   -14.68 | doc, drg, gafolo, rdnzao, togs   |
|           50 |     1346 | 2024-05-16 | W7M               | W   | 0.788      | -            | -                | -                | -         |     5.15 | doc, drg, gafolo, rdnzao, togs   |
|           49 |     1349 | 2024-05-16 | W7M               | W   | 0.788      | -            | -                | -                | -         |     5.39 | doc, drg, gafolo, rdnzao, togs   |
|           48 |     1351 | 2024-05-16 | Hype              | W   | 0.788      | -            | -                | -                | -         |     6.97 | doc, drg, gafolo, rdnzao, togs   |
|           47 |     1391 | 2024-05-15 | Vikings KR        | W   | 0.782      | -            | -                | -                | -         |     6.13 | doc, drg, gafolo, rdnzao, togs   |
|           46 |     1394 | 2024-05-15 | 9z                | L   | 0.782      | -            | -                | -                | -         |    -0.60 | doc, drg, gafolo, rdnzao, togs   |
|           45 |     1458 | 2024-05-14 | Fluxo             | L   | 0.775      | -            | -                | -                | -         |    -7.86 | doc, drg, gafolo, rdnzao, togs   |
|           44 |     1485 | 2024-05-13 | RED Canids        | W   | 0.768      | 0.384        | 0.123 (0.036)    | 0.714 (0.211)    | -         |    17.23 | doc, drg, gafolo, rdnzao, togs   |
|           43 |     1493 | 2024-05-13 | W7M               | W   | 0.767      | -            | -                | -                | -         |     6.39 | doc, drg, gafolo, rdnzao, togs   |
|           42 |     1542 | 2024-05-11 | W7M               | W   | 0.754      | -            | -                | -                | -         |     6.63 | doc, drg, gafolo, rdnzao, togs   |
|           41 |     1581 | 2024-05-09 | BESTIA            | L   | 0.742      | -            | -                | -                | -         |   -13.66 | doc, drg, gafolo, rdnzao, togs   |
|           40 |     1604 | 2024-05-08 | 9z                | L   | 0.735      | -            | -                | -                | -         |    -0.50 | doc, drg, gafolo, rdnzao, togs   |
|           39 |     1642 | 2024-05-06 | BESTIA            | W   | 0.722      | 0.435        | 0.050 (0.016)    | 0.645 (0.202)    | -         |     9.23 | doc, drg, gafolo, rdnzao, togs   |
|           38 |     2240 | 2024-04-11 | paiN              | L   | 0.555      | -            | -                | -                | -         |    -0.68 | doc, drg, gafolo, rdnzao, togs   |
|           37 |     2504 | 2024-04-03 | 2GAME             | W   | 0.502      | -            | -                | -                | -         |     2.58 | doc, drg, gafolo, rdnzao, togs   |
|           36 |     2507 | 2024-04-03 | 2GAME             | W   | 0.502      | -            | -                | -                | -         |     2.64 | doc, drg, gafolo, rdnzao, togs   |
|           35 |     2875 | 2024-03-14 | MIBR              | L   | 0.369      | -            | -                | -                | -         |    -0.54 | doc, drg, gafolo, rdnzao, togs   |
|           34 |     2877 | 2024-03-14 | MIBR              | L   | 0.369      | -            | -                | -                | -         |    -0.54 | doc, drg, gafolo, rdnzao, togs   |
|           33 |     2903 | 2024-03-13 | Yawara            | W   | 0.362      | -            | -                | -                | -         |     0.73 | doc, drg, gafolo, rdnzao, togs   |
|           32 |     2910 | 2024-03-13 | ODDIK             | W   | 0.361      | -            | -                | -                | -         |     6.27 | doc, drg, gafolo, rdnzao, togs   |
|           31 |     2978 | 2024-03-11 | Fluxo             | L   | 0.347      | -            | -                | -                | -         |    -4.19 | doc, drg, gafolo, rdnzao, togs   |
|           30 |     3008 | 2024-03-09 | Case              | L   | 0.335      | -            | -                | -                | -         |    -6.10 | doc, drg, gafolo, rdnzao, togs   |
|           29 |     3072 | 2024-03-07 | Corinthians       | W   | 0.320      | -            | -                | -                | -         |     0.62 | doc, drg, gafolo, rdnzao, togs   |
|           28 |     3128 | 2024-03-05 | Solid             | W   | 0.308      | -            | -                | -                | -         |     3.88 | doc, drg, gafolo, rdnzao, togs   |
|           27 |     3132 | 2024-03-05 | Solid             | W   | 0.307      | -            | -                | -                | -         |     3.98 | doc, drg, gafolo, rdnzao, togs   |
|           26 |     3325 | 2024-02-24 | Galorys           | W   | 0.242      | -            | -                | -                | -         |     2.64 | doc, drg, gafolo, rdnzao, togs   |
|           25 |     3336 | 2024-02-24 | Galorys           | W   | 0.242      | -            | -                | -                | -         |     2.69 | doc, drg, gafolo, rdnzao, togs   |
|           24 |     3338 | 2024-02-24 | Fluxo             | L   | 0.241      | -            | -                | -                | -         |    -2.92 | doc, drg, gafolo, rdnzao, togs   |
|           23 |     3391 | 2024-02-21 | Corinthians       | W   | 0.222      | -            | -                | -                | -         |     0.45 | doc, drg, gafolo, rdnzao, togs   |
|           22 |     3395 | 2024-02-21 | Case              | W   | 0.222      | -            | -                | -                | -         |     3.30 | doc, drg, gafolo, rdnzao, togs   |
|           21 |     3397 | 2024-02-21 | Galorys           | W   | 0.221      | -            | -                | -                | -         |     2.66 | doc, drg, gafolo, rdnzao, togs   |
|           20 |     3426 | 2024-02-20 | Flamengo          | L   | 0.215      | -            | -                | -                | -         |    -6.35 | doc, drg, gafolo, rdnzao, togs   |
|           19 |     3431 | 2024-02-20 | Case              | W   | 0.214      | -            | -                | -                | -         |     3.18 | doc, drg, gafolo, rdnzao, togs   |
|           18 |     3453 | 2024-02-19 | Solid             | W   | 0.207      | -            | -                | -                | -         |     2.75 | doc, drg, gafolo, rdnzao, togs   |
|           17 |     3469 | 2024-02-18 | Galorys           | W   | 0.202      | -            | -                | -                | -         |     2.48 | doc, drg, gafolo, rdnzao, togs   |
|           16 |     3491 | 2024-02-17 | W7M               | L   | 0.196      | -            | -                | -                | -         |    -4.28 | doc, drg, gafolo, rdnzao, togs   |
|           15 |     3495 | 2024-02-17 | Galorys           | L   | 0.195      | -            | -                | -                | -         |    -3.87 | doc, drg, gafolo, rdnzao, togs   |
|           14 |     3525 | 2024-02-16 | W7M               | W   | 0.187      | -            | -                | -                | -         |     1.82 | doc, drg, gafolo, rdnzao, togs   |
|           13 |     3550 | 2024-02-15 | Case              | L   | 0.181      | -            | -                | -                | -         |    -3.08 | doc, drg, gafolo, rdnzao, togs   |
|           12 |     3555 | 2024-02-15 | Fluxo             | L   | 0.181      | -            | -                | -                | -         |    -2.23 | doc, drg, gafolo, rdnzao, togs   |
|           11 |     3558 | 2024-02-15 | Fluxo             | L   | 0.180      | -            | -                | -                | -         |    -2.26 | doc, drg, gafolo, rdnzao, togs   |
|           10 |     3584 | 2024-02-14 | Hype              | W   | 0.175      | -            | -                | -                | -         |     0.18 | doc, drg, gafolo, rdnzao, togs   |
|            9 |     3594 | 2024-02-14 | Galorys           | W   | 0.174      | -            | -                | -                | -         |     2.01 | doc, drg, gafolo, rdnzao, togs   |
|            8 |     3639 | 2024-02-12 | Solid             | W   | 0.162      | -            | -                | -                | -         |     2.17 | doc, drg, gafolo, rdnzao, togs   |
|            7 |     3942 | 2024-01-24 | paiN              | W   | 0.036      | -            | -                | -                | -         |     1.08 | doc, drg, gafolo, rdnzao, togs   |
|            6 |     3960 | 2024-01-23 | adalYamigos       | W   | 0.028      | -            | -                | -                | -         |     0.09 | doc, drg, gafolo, rdnzao, togs   |
|            5 |     3986 | 2024-01-22 | Legacy            | W   | 0.022      | -            | -                | -                | -         |     0.45 | doc, drg, gafolo, rdnzao, togs   |
|            4 |     4020 | 2024-01-21 | 9z                | L   | 0.014      | -            | -                | -                | -         |    -0.01 | doc, drg, gafolo, rdnzao, togs   |
|            3 |     4059 | 2024-01-20 | paiN              | L   | 0.008      | -            | -                | -                | -         |    -0.01 | doc, drg, gafolo, rdnzao, togs   |
|            2 |     4095 | 2024-01-19 | Galorys           | W   | 0.002      | -            | -                | -                | -         |     0.03 | doc, drg, gafolo, rdnzao, togs   |
|            1 |     4102 | 2024-01-19 | TIMACETA          | L   | 0.002      | -            | -                | -                | -         |    -0.06 | doc, drg, gafolo, rdnzao, togs   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,268.26)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-28 |      1.000 | $500.00        | $500.00         |
| 2024-06-16 |      0.995 | $2,500.00      | $2,487.02       |
| 2024-06-10 |      0.956 | $750.00        | $716.68         |
| 2024-06-09 |      0.948 | $5,000.00      | $4,742.25       |
| 2024-05-19 |      0.808 | $1,000.00      | $808.44         |
| 2024-02-25 |      0.248 | $5,000.00      | $1,240.38       |
| 2024-02-21 |      0.221 | $3,500.00      | $773.49         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
