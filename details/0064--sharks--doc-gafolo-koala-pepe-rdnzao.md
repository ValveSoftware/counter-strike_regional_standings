### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, gafolo, koala, pepe, rdnzao<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [64](../standings_global.md)<br />
Regional Rank: [17]( ../standings_americas.md)<br />
Final Rank Value:  996.1<br />
<br />
Final Rank Value (996.1) = Starting Rank Value (976.4) + Head To Head Adjustments (19.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.413[<sup>1</sup>](#table2)
- Bounty Collected: 0.446[<sup>2</sup>](#table1)
- Opponent Network: 0.280[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.285<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 976.4
- 400 + ( ( 0.285 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 976.4


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
|           82 |        3 | 2024-07-24 | Yawara            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.85 | doc, gafolo, koala, pepe, rdnzao |
|           81 |       25 | 2024-07-23 | ODDIK             | L   | 1.000      | -            | -                | -                | -         |   -14.10 | doc, gafolo, koala, pepe, rdnzao |
|           80 |       29 | 2024-07-23 | W7M               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.76 | doc, gafolo, koala, pepe, rdnzao |
|           79 |      113 | 2024-07-20 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -7.30 | doc, gafolo, koala, pepe, rdnzao |
|           78 |      165 | 2024-07-19 | Hype              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.12 | doc, gafolo, koala, pepe, rdnzao |
|           77 |      192 | 2024-07-18 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -7.69 | doc, gafolo, koala, pepe, rdnzao |
|           76 |      196 | 2024-07-18 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -8.22 | doc, gafolo, koala, pepe, rdnzao |
|           75 |      257 | 2024-07-17 | ODDIK             | W   | 1.000      | 0.450        | 0.083 (0.037)    | 0.694 (0.312)    | 0 (0.000) |    17.42 | doc, gafolo, koala, pepe, rdnzao |
|           74 |      269 | 2024-07-17 | ODDIK             | W   | 1.000      | 0.450        | 0.083 (0.037)    | 0.694 (0.312)    | 0 (0.000) |    18.99 | doc, gafolo, koala, pepe, rdnzao |
|           73 |      320 | 2024-07-16 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |    -7.24 | doc, gafolo, koala, pepe, rdnzao |
|           72 |      328 | 2024-07-16 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |    -7.72 | doc, gafolo, koala, pepe, rdnzao |
|           71 |      375 | 2024-07-15 | KRÜ               | L   | 1.000      | -            | -                | -                | -         |   -20.83 | doc, gafolo, koala, pepe, rdnzao |
|           70 |      379 | 2024-07-15 | KRÜ               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.27 | doc, gafolo, koala, pepe, rdnzao |
|           69 |      449 | 2024-07-11 | Bounty Hunters    | L   | 1.000      | -            | -                | -                | -         |   -16.92 | doc, gafolo, koala, pepe, rdnzao |
|           68 |      464 | 2024-07-10 | BESTIA            | W   | 1.000      | 0.371        | 0.114 (0.042)    | 0.740 (0.274)    | 0 (0.000) |    17.14 | doc, gafolo, koala, pepe, rdnzao |
|           67 |      484 | 2024-07-09 | KRÜ               | L   | 1.000      | -            | -                | -                | -         |   -21.79 | doc, gafolo, koala, pepe, rdnzao |
|           66 |      506 | 2024-07-08 | Patins da Ferrari | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.30 | doc, gafolo, koala, pepe, rdnzao |
|           65 |      542 | 2024-06-30 | Patins da Ferrari | L   | 1.000      | -            | -                | -                | -         |   -23.33 | doc, gafolo, koala, pepe, rdnzao |
|           64 |      556 | 2024-06-28 | KRÜ               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.62 | doc, gafolo, koala, pepe, rdnzao |
|           63 |      557 | 2024-06-28 | Bounty Hunters    | L   | 1.000      | -            | -                | -                | -         |   -19.89 | doc, gafolo, koala, pepe, rdnzao |
|           62 |      561 | 2024-06-27 | Galorys           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.04 | doc, gafolo, koala, pepe, rdnzao |
|           61 |      564 | 2024-06-27 | inSanitY          | L   | 1.000      | -            | -                | -                | -         |   -16.92 | doc, gafolo, koala, pepe, rdnzao |
|           60 |      663 | 2024-06-14 | Fluxo             | L   | 0.935      | -            | -                | -                | -         |   -12.30 | doc, gafolo, koala, pepe, rdnzao |
|           59 |      789 | 2024-06-10 | Vikings KR        | W   | 0.906      | -            | -                | -                | -         |     5.33 | doc, gafolo, koala, pepe, rdnzao |
|           58 |      818 | 2024-06-09 | paiN              | L   | 0.900      | -            | -                | -                | -         |    -3.99 | doc, gafolo, koala, pepe, rdnzao |
|           57 |      834 | 2024-06-09 | BESTIA            | W   | 0.899      | 0.450        | 0.114 (0.046)    | 0.740 (0.300)    | -         |    13.73 | doc, gafolo, koala, pepe, rdnzao |
|           56 |      893 | 2024-06-08 | Hype              | W   | 0.894      | -            | -                | -                | -         |     9.06 | doc, gafolo, koala, pepe, rdnzao |
|           55 |      902 | 2024-06-08 | Patins da Ferrari | L   | 0.893      | -            | -                | -                | -         |   -22.64 | doc, gafolo, koala, pepe, rdnzao |
|           54 |      933 | 2024-06-07 | 9z                | L   | 0.888      | -            | -                | -                | -         |    -2.02 | doc, gafolo, koala, pepe, rdnzao |
|           53 |      991 | 2024-06-06 | paiN              | W   | 0.881      | 0.450        | 0.393 (0.156)    | 0.825 (0.327)    | -         |    24.17 | doc, gafolo, koala, pepe, rdnzao |
|           52 |     1059 | 2024-06-05 | Imperial          | L   | 0.875      | -            | -                | -                | -         |    -4.22 | doc, gafolo, koala, pepe, rdnzao |
|           51 |     1111 | 2024-06-04 | BESTIA            | W   | 0.869      | 0.450        | 0.114 (0.044)    | 0.740 (0.289)    | -         |    15.53 | doc, gafolo, koala, pepe, rdnzao |
|           50 |     1440 | 2024-05-22 | Imperial          | W   | 0.780      | 0.450        | 0.317 (0.111)    | 0.653 (0.229)    | -         |    20.86 | doc, drg, gafolo, pepe, rdnzao   |
|           49 |     1444 | 2024-05-22 | Imperial          | L   | 0.780      | -            | -                | -                | -         |    -3.51 | doc, drg, gafolo, pepe, rdnzao   |
|           48 |     1470 | 2024-05-21 | Case              | L   | 0.775      | -            | -                | -                | -         |   -15.33 | doc, drg, gafolo, pepe, rdnzao   |
|           47 |     1471 | 2024-05-21 | Case              | W   | 0.775      | 0.450        | -                | 0.751 (0.262)    | -         |     9.05 | doc, drg, gafolo, pepe, rdnzao   |
|           46 |     1474 | 2024-05-21 | RED Canids        | W   | 0.774      | 0.450        | 0.102 (0.035)    | 0.793 (0.276)    | -         |    17.64 | doc, drg, gafolo, pepe, rdnzao   |
|           45 |     1478 | 2024-05-21 | RED Canids        | L   | 0.774      | -            | -                | -                | -         |    -6.60 | doc, drg, gafolo, pepe, rdnzao   |
|           44 |     1606 | 2024-05-17 | ODDIK             | L   | 0.747      | -            | -                | -                | -         |   -13.94 | doc, drg, gafolo, rdnzao, togs   |
|           43 |     1634 | 2024-05-16 | W7M               | W   | 0.741      | -            | -                | -                | -         |     5.21 | doc, drg, gafolo, rdnzao, togs   |
|           42 |     1637 | 2024-05-16 | W7M               | W   | 0.741      | -            | -                | -                | -         |     5.45 | doc, drg, gafolo, rdnzao, togs   |
|           41 |     1639 | 2024-05-16 | Hype              | W   | 0.741      | -            | -                | -                | -         |     7.99 | doc, drg, gafolo, rdnzao, togs   |
|           40 |     1679 | 2024-05-15 | Vikings KR        | W   | 0.735      | -            | -                | -                | -         |     6.32 | doc, drg, gafolo, rdnzao, togs   |
|           39 |     1682 | 2024-05-15 | 9z                | L   | 0.734      | -            | -                | -                | -         |    -0.84 | doc, drg, gafolo, rdnzao, togs   |
|           38 |     1746 | 2024-05-14 | Fluxo             | L   | 0.728      | -            | -                | -                | -         |    -7.52 | doc, drg, gafolo, rdnzao, togs   |
|           37 |     1773 | 2024-05-13 | RED Canids        | W   | 0.721      | 0.384        | 0.102 (0.028)    | 0.793 (0.220)    | -         |    15.39 | doc, drg, gafolo, rdnzao, togs   |
|           36 |     1781 | 2024-05-13 | W7M               | W   | 0.720      | -            | -                | -                | -         |     6.38 | doc, drg, gafolo, rdnzao, togs   |
|           35 |     1830 | 2024-05-11 | W7M               | W   | 0.707      | -            | -                | -                | -         |     6.60 | doc, drg, gafolo, rdnzao, togs   |
|           34 |     1869 | 2024-05-09 | BESTIA            | L   | 0.695      | -            | -                | -                | -         |   -12.14 | doc, drg, gafolo, rdnzao, togs   |
|           33 |     1892 | 2024-05-08 | 9z                | L   | 0.688      | -            | -                | -                | -         |    -0.71 | doc, drg, gafolo, rdnzao, togs   |
|           32 |     1930 | 2024-05-06 | BESTIA            | W   | 0.675      | 0.435        | 0.114 (0.033)    | -                | -         |     9.34 | doc, drg, gafolo, rdnzao, togs   |
|           31 |     2528 | 2024-04-11 | paiN              | L   | 0.507      | -            | -                | -                | -         |    -0.91 | doc, drg, gafolo, rdnzao, togs   |
|           30 |     2792 | 2024-04-03 | 2GAME             | W   | 0.455      | -            | -                | -                | -         |     2.31 | doc, drg, gafolo, rdnzao, togs   |
|           29 |     2795 | 2024-04-03 | 2GAME             | W   | 0.454      | -            | -                | -                | -         |     2.36 | doc, drg, gafolo, rdnzao, togs   |
|           28 |     3163 | 2024-03-14 | MIBR              | L   | 0.322      | -            | -                | -                | -         |    -0.71 | doc, drg, gafolo, rdnzao, togs   |
|           27 |     3165 | 2024-03-14 | MIBR              | L   | 0.321      | -            | -                | -                | -         |    -0.71 | doc, drg, gafolo, rdnzao, togs   |
|           26 |     3191 | 2024-03-13 | Yawara            | W   | 0.315      | -            | -                | -                | -         |     0.72 | doc, drg, gafolo, rdnzao, togs   |
|           25 |     3198 | 2024-03-13 | ODDIK             | W   | 0.314      | -            | -                | -                | -         |     5.32 | doc, drg, gafolo, rdnzao, togs   |
|           24 |     3266 | 2024-03-11 | Fluxo             | L   | 0.300      | -            | -                | -                | -         |    -3.56 | doc, drg, gafolo, rdnzao, togs   |
|           23 |     3296 | 2024-03-09 | Case              | L   | 0.288      | -            | -                | -                | -         |    -5.27 | doc, drg, gafolo, rdnzao, togs   |
|           22 |     3360 | 2024-03-07 | Corinthians       | W   | 0.273      | -            | -                | -                | -         |     0.57 | doc, drg, gafolo, rdnzao, togs   |
|           21 |     3416 | 2024-03-05 | Solid             | W   | 0.260      | -            | -                | -                | -         |     3.26 | doc, drg, gafolo, rdnzao, togs   |
|           20 |     3420 | 2024-03-05 | Solid             | W   | 0.260      | -            | -                | -                | -         |     3.33 | doc, drg, gafolo, rdnzao, togs   |
|           19 |     3613 | 2024-02-24 | Galorys           | W   | 0.195      | -            | -                | -                | -         |     2.10 | doc, drg, gafolo, rdnzao, togs   |
|           18 |     3624 | 2024-02-24 | Galorys           | W   | 0.195      | -            | -                | -                | -         |     2.13 | doc, drg, gafolo, rdnzao, togs   |
|           17 |     3626 | 2024-02-24 | Fluxo             | L   | 0.194      | -            | -                | -                | -         |    -2.30 | doc, drg, gafolo, rdnzao, togs   |
|           16 |     3679 | 2024-02-21 | Corinthians       | W   | 0.175      | -            | -                | -                | -         |     0.38 | doc, drg, gafolo, rdnzao, togs   |
|           15 |     3683 | 2024-02-21 | Case              | W   | 0.175      | -            | -                | -                | -         |     2.53 | doc, drg, gafolo, rdnzao, togs   |
|           14 |     3685 | 2024-02-21 | Galorys           | W   | 0.174      | -            | -                | -                | -         |     2.03 | doc, drg, gafolo, rdnzao, togs   |
|           13 |     3714 | 2024-02-20 | Flamengo          | L   | 0.168      | -            | -                | -                | -         |    -4.93 | doc, drg, gafolo, rdnzao, togs   |
|           12 |     3719 | 2024-02-20 | Case              | W   | 0.166      | -            | -                | -                | -         |     2.41 | doc, drg, gafolo, rdnzao, togs   |
|           11 |     3741 | 2024-02-19 | Solid             | W   | 0.160      | -            | -                | -                | -         |     2.09 | doc, drg, gafolo, rdnzao, togs   |
|           10 |     3757 | 2024-02-18 | Galorys           | W   | 0.155      | -            | -                | -                | -         |     1.83 | doc, drg, gafolo, rdnzao, togs   |
|            9 |     3779 | 2024-02-17 | W7M               | L   | 0.149      | -            | -                | -                | -         |    -3.13 | doc, drg, gafolo, rdnzao, togs   |
|            8 |     3783 | 2024-02-17 | Galorys           | L   | 0.148      | -            | -                | -                | -         |    -2.97 | doc, drg, gafolo, rdnzao, togs   |
|            7 |     3813 | 2024-02-16 | W7M               | W   | 0.140      | -            | -                | -                | -         |     1.47 | doc, drg, gafolo, rdnzao, togs   |
|            6 |     3838 | 2024-02-15 | Case              | L   | 0.134      | -            | -                | -                | -         |    -2.32 | doc, drg, gafolo, rdnzao, togs   |
|            5 |     3843 | 2024-02-15 | Fluxo             | L   | 0.133      | -            | -                | -                | -         |    -1.60 | doc, drg, gafolo, rdnzao, togs   |
|            4 |     3846 | 2024-02-15 | Fluxo             | L   | 0.133      | -            | -                | -                | -         |    -1.61 | doc, drg, gafolo, rdnzao, togs   |
|            3 |     3872 | 2024-02-14 | Hype              | W   | 0.128      | -            | -                | -                | -         |     0.15 | doc, drg, gafolo, rdnzao, togs   |
|            2 |     3882 | 2024-02-14 | Galorys           | W   | 0.127      | -            | -                | -                | -         |     1.43 | doc, drg, gafolo, rdnzao, togs   |
|            1 |     3927 | 2024-02-12 | Solid             | W   | 0.115      | -            | -                | -                | -         |     1.51 | doc, drg, gafolo, rdnzao, togs   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,430.01)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-28 |      1.000 | $500.00        | $500.00         |
| 2024-06-16 |      0.948 | $2,500.00      | $2,368.95       |
| 2024-06-10 |      0.908 | $750.00        | $681.26         |
| 2024-06-09 |      0.901 | $5,000.00      | $4,506.12       |
| 2024-05-19 |      0.761 | $1,000.00      | $761.22         |
| 2024-02-25 |      0.201 | $5,000.00      | $1,004.26       |
| 2024-02-21 |      0.174 | $3,500.00      | $608.20         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
