### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, gafolo, hoax, koala, rdnzao<br />
Global Rank: [61](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_02.md)<br />
Regional Rank: [15]( ../../standings_americas_2024_12_02.md)<br />
<br />
Final Rank Value:  1079.0<br />
<br />
Final Rank Value (1079.0) = Starting Rank Value (1075.5) + Head To Head Adjustments (3.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.469[<sup>1</sup>](#table2)
- Bounty Collected: 0.385[<sup>2</sup>](#table1)
- Opponent Network: 0.177[<sup>2</sup>](#table1)
- LAN Wins: 0.314[<sup>2</sup>](#table1)

The average of these factors is 0.336<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1075.5
- 400 + ( ( 0.336 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 1075.5


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
|           82 |       36 | 2024-11-30 | ODDIK             | L   | 1.000      | -            | -                | -                | -         |   -17.61 | doc, gafolo, hoax, koala, rdnzao |
|           81 |       78 | 2024-11-29 | NITRO             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.33 | doc, gafolo, hoax, koala, rdnzao |
|           80 |       88 | 2024-11-28 | 2070              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.52 | doc, gafolo, hoax, koala, rdnzao |
|           79 |      186 | 2024-11-22 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -9.49 | doc, gafolo, hoax, koala, rdnzao |
|           78 |      507 | 2024-11-09 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |   -10.24 | doc, gafolo, hoax, koala, rdnzao |
|           77 |      514 | 2024-11-09 | Solid             | W   | 1.000      | 0.371        | 0.027 (0.010)    | 0.581 (0.215)    | 0 (0.000) |    11.41 | doc, gafolo, hoax, koala, rdnzao |
|           76 |      533 | 2024-11-08 | GameHunters       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.48 | doc, gafolo, hoax, koala, rdnzao |
|           75 |      547 | 2024-11-07 | MIBR Academy      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.57 | doc, gafolo, hoax, koala, rdnzao |
|           74 |      759 | 2024-10-27 | ODDIK             | W   | 0.962      | 0.364        | 0.105 (0.037)    | 0.541 (0.189)    | 1 (0.962) |    13.67 | doc, gafolo, hoax, koala, rdnzao |
|           73 |      780 | 2024-10-26 | Fluxo             | W   | 0.956      | 0.364        | 0.116 (0.040)    | 0.674 (0.234)    | 1 (0.956) |    21.46 | doc, gafolo, hoax, koala, rdnzao |
|           72 |      985 | 2024-10-16 | Imperial          | L   | 0.889      | -            | -                | -                | -         |    -7.34 | doc, gafolo, hoax, koala, rdnzao |
|           71 |     1141 | 2024-10-08 | Case              | W   | 0.835      | 0.450        | -                | 0.397 (0.149)    | 0 (0.000) |     6.45 | doc, gafolo, hoax, koala, rdnzao |
|           70 |     1147 | 2024-10-08 | Case              | W   | 0.835      | 0.450        | -                | 0.397 (0.149)    | -         |     6.82 | doc, gafolo, hoax, koala, rdnzao |
|           69 |     1329 | 2024-10-02 | Solid             | W   | 0.795      | 0.450        | 0.027 (0.010)    | 0.581 (0.208)    | -         |    10.62 | doc, gafolo, hoax, koala, rdnzao |
|           68 |     1332 | 2024-10-02 | Solid             | L   | 0.795      | -            | -                | -                | -         |   -14.75 | doc, gafolo, hoax, koala, rdnzao |
|           67 |     1379 | 2024-10-01 | Imperial          | L   | 0.789      | -            | -                | -                | -         |    -6.50 | doc, gafolo, hoax, koala, rdnzao |
|           66 |     1383 | 2024-10-01 | Imperial          | W   | 0.788      | 0.450        | 0.151 (0.053)    | 0.577 (0.205)    | -         |    18.81 | doc, gafolo, hoax, koala, rdnzao |
|           65 |     1392 | 2024-10-01 | MIBR              | W   | 0.788      | 0.450        | 0.141 (0.050)    | 0.586 (0.208)    | -         |    22.24 | doc, gafolo, hoax, koala, rdnzao |
|           64 |     1394 | 2024-10-01 | MIBR              | L   | 0.787      | -            | -                | -                | -         |    -2.40 | doc, gafolo, hoax, koala, rdnzao |
|           63 |     1551 | 2024-09-26 | BESTIA            | L   | 0.756      | -            | -                | -                | -         |    -9.50 | doc, gafolo, hoax, koala, rdnzao |
|           62 |     1568 | 2024-09-26 | Imperial          | L   | 0.754      | -            | -                | -                | -         |    -4.62 | doc, gafolo, hoax, koala, rdnzao |
|           61 |     1605 | 2024-09-25 | Hype              | L   | 0.749      | -            | -                | -                | -         |   -18.68 | doc, gafolo, hoax, koala, rdnzao |
|           60 |     1610 | 2024-09-25 | Hype              | W   | 0.749      | 0.450        | -                | 0.325 (0.110)    | -         |     4.74 | doc, gafolo, hoax, koala, rdnzao |
|           59 |     1625 | 2024-09-25 | MIBR              | W   | 0.747      | 0.143        | 0.141 (0.015)    | -                | -         |    21.68 | doc, gafolo, hoax, koala, rdnzao |
|           58 |     1656 | 2024-09-24 | paiN              | L   | 0.742      | -            | -                | -                | -         |    -0.92 | doc, gafolo, hoax, koala, rdnzao |
|           57 |     1663 | 2024-09-24 | paiN              | L   | 0.742      | -            | -                | -                | -         |    -0.93 | doc, gafolo, hoax, koala, rdnzao |
|           56 |     2088 | 2024-09-10 | inSanitY          | L   | 0.649      | -            | -                | -                | -         |   -14.80 | doc, gafolo, hoax, koala, rdnzao |
|           55 |     2090 | 2024-09-10 | inSanitY          | W   | 0.648      | -            | -                | -                | -         |     5.59 | doc, gafolo, hoax, koala, rdnzao |
|           54 |     2214 | 2024-09-05 | Dusty Roots       | W   | 0.615      | 0.450        | -                | 0.381 (0.105)    | -         |     4.64 | doc, gafolo, hoax, koala, rdnzao |
|           53 |     2215 | 2024-09-05 | Dusty Roots       | W   | 0.615      | -            | -                | -                | -         |     4.83 | doc, gafolo, hoax, koala, rdnzao |
|           52 |     2261 | 2024-09-04 | ODDIK             | L   | 0.609      | -            | -                | -                | -         |    -8.30 | doc, gafolo, hoax, koala, rdnzao |
|           51 |     2301 | 2024-09-03 | inSanitY          | W   | 0.600      | -            | -                | -                | -         |     5.44 | doc, gafolo, hoax, koala, rdnzao |
|           50 |     2321 | 2024-09-02 | Yawara            | W   | 0.596      | -            | -                | -                | -         |     2.11 | doc, gafolo, hoax, koala, rdnzao |
|           49 |     2526 | 2024-08-27 | ODDIK             | L   | 0.554      | -            | -                | -                | -         |    -7.78 | doc, gafolo, koala, pepe, rdnzao |
|           48 |     2584 | 2024-08-26 | W7M               | L   | 0.548      | -            | -                | -                | -         |   -14.87 | doc, gafolo, koala, pepe, rdnzao |
|           47 |     2604 | 2024-08-26 | Hype              | W   | 0.547      | -            | -                | -                | -         |     3.18 | doc, gafolo, koala, pepe, rdnzao |
|           46 |     2935 | 2024-08-16 | ODDIK             | L   | 0.482      | -            | -                | -                | -         |    -6.85 | doc, gafolo, koala, pepe, rdnzao |
|           45 |     2939 | 2024-08-16 | Case              | W   | 0.481      | -            | -                | -                | 1 (0.481) |     3.74 | doc, gafolo, koala, pepe, rdnzao |
|           44 |     2963 | 2024-08-15 | ODDIK             | L   | 0.474      | -            | -                | -                | -         |    -6.95 | doc, gafolo, koala, pepe, rdnzao |
|           43 |     2991 | 2024-08-14 | Case              | W   | 0.469      | -            | -                | -                | 1 (0.469) |     3.56 | doc, gafolo, koala, pepe, rdnzao |
|           42 |     3402 | 2024-08-02 | paiN              | L   | 0.387      | -            | -                | -                | -         |    -0.64 | doc, gafolo, koala, pepe, rdnzao |
|           41 |     3431 | 2024-08-01 | Hype              | W   | 0.381      | -            | -                | -                | -         |     2.31 | doc, gafolo, koala, pepe, rdnzao |
|           40 |     3438 | 2024-08-01 | paiN              | L   | 0.380      | -            | -                | -                | -         |    -0.62 | doc, gafolo, koala, pepe, rdnzao |
|           39 |     3471 | 2024-07-31 | MIBR              | L   | 0.375      | -            | -                | -                | -         |    -1.04 | doc, gafolo, koala, pepe, rdnzao |
|           38 |     3476 | 2024-07-31 | Solid             | W   | 0.375      | -            | -                | -                | -         |     3.84 | doc, gafolo, koala, pepe, rdnzao |
|           37 |     3512 | 2024-07-30 | Hype              | W   | 0.369      | -            | -                | -                | -         |     2.31 | doc, gafolo, koala, pepe, rdnzao |
|           36 |     3591 | 2024-07-28 | Bad News Chickens | W   | 0.354      | -            | -                | -                | -         |     1.28 | doc, gafolo, koala, pepe, rdnzao |
|           35 |     3637 | 2024-07-26 | Imperial          | L   | 0.342      | -            | -                | -                | -         |    -2.85 | doc, gafolo, koala, pepe, rdnzao |
|           34 |     3664 | 2024-07-25 | BESTIA            | W   | 0.336      | -            | -                | -                | -         |     5.99 | doc, gafolo, koala, pepe, rdnzao |
|           33 |     3668 | 2024-07-25 | Patins da Ferrari | W   | 0.336      | -            | -                | -                | -         |     0.90 | doc, gafolo, koala, pepe, rdnzao |
|           32 |     3714 | 2024-07-24 | Bad News Chickens | W   | 0.328      | -            | -                | -                | -         |     1.19 | doc, gafolo, koala, pepe, rdnzao |
|           31 |     3719 | 2024-07-24 | Yawara            | W   | 0.327      | -            | -                | -                | -         |     1.15 | doc, gafolo, koala, pepe, rdnzao |
|           30 |     3741 | 2024-07-23 | ODDIK             | L   | 0.322      | -            | -                | -                | -         |    -5.21 | doc, gafolo, koala, pepe, rdnzao |
|           29 |     3745 | 2024-07-23 | W7M               | W   | 0.322      | -            | -                | -                | -         |     1.31 | doc, gafolo, koala, pepe, rdnzao |
|           28 |     3829 | 2024-07-20 | Fluxo             | L   | 0.302      | -            | -                | -                | -         |    -3.18 | doc, gafolo, koala, pepe, rdnzao |
|           27 |     3881 | 2024-07-19 | Hype              | W   | 0.294      | -            | -                | -                | -         |     1.87 | doc, gafolo, koala, pepe, rdnzao |
|           26 |     3908 | 2024-07-18 | Fluxo             | L   | 0.289      | -            | -                | -                | -         |    -3.15 | doc, gafolo, koala, pepe, rdnzao |
|           25 |     3912 | 2024-07-18 | Fluxo             | L   | 0.289      | -            | -                | -                | -         |    -3.22 | doc, gafolo, koala, pepe, rdnzao |
|           24 |     3973 | 2024-07-17 | ODDIK             | W   | 0.282      | 0.450        | 0.105 (0.013)    | -                | -         |     4.37 | doc, gafolo, koala, pepe, rdnzao |
|           23 |     3985 | 2024-07-17 | ODDIK             | W   | 0.282      | 0.450        | 0.105 (0.013)    | -                | -         |     4.47 | doc, gafolo, koala, pepe, rdnzao |
|           22 |     4036 | 2024-07-16 | RED Canids        | L   | 0.276      | -            | -                | -                | -         |    -2.32 | doc, gafolo, koala, pepe, rdnzao |
|           21 |     4044 | 2024-07-16 | RED Canids        | L   | 0.275      | -            | -                | -                | -         |    -2.37 | doc, gafolo, koala, pepe, rdnzao |
|           20 |     4091 | 2024-07-15 | KRÜ               | L   | 0.269      | -            | -                | -                | -         |    -6.49 | doc, gafolo, koala, pepe, rdnzao |
|           19 |     4095 | 2024-07-15 | KRÜ               | W   | 0.268      | -            | -                | -                | -         |     1.99 | doc, gafolo, koala, pepe, rdnzao |
|           18 |     4165 | 2024-07-11 | Bounty Hunters    | L   | 0.241      | -            | -                | -                | -         |    -6.48 | doc, gafolo, koala, pepe, rdnzao |
|           17 |     4180 | 2024-07-10 | BESTIA            | W   | 0.235      | 0.371        | 0.114 (0.010)    | -                | -         |     4.36 | doc, gafolo, koala, pepe, rdnzao |
|           16 |     4200 | 2024-07-09 | KRÜ               | L   | 0.229      | -            | -                | -                | -         |    -5.59 | doc, gafolo, koala, pepe, rdnzao |
|           15 |     4222 | 2024-07-08 | Patins da Ferrari | W   | 0.222      | -            | -                | -                | -         |     0.55 | doc, gafolo, koala, pepe, rdnzao |
|           14 |     4258 | 2024-06-30 | Patins da Ferrari | L   | 0.168      | -            | -                | -                | -         |    -4.76 | doc, gafolo, koala, pepe, rdnzao |
|           13 |     4272 | 2024-06-28 | KRÜ               | W   | 0.155      | -            | -                | -                | -         |     1.07 | doc, gafolo, koala, pepe, rdnzao |
|           12 |     4273 | 2024-06-28 | Bounty Hunters    | L   | 0.155      | -            | -                | -                | -         |    -4.23 | doc, gafolo, koala, pepe, rdnzao |
|           11 |     4277 | 2024-06-27 | Galorys           | W   | 0.149      | -            | -                | -                | -         |     0.65 | doc, gafolo, koala, pepe, rdnzao |
|           10 |     4280 | 2024-06-27 | inSanitY          | L   | 0.147      | -            | -                | -                | -         |    -3.64 | doc, gafolo, koala, pepe, rdnzao |
|            9 |     4379 | 2024-06-14 | Fluxo             | L   | 0.062      | -            | -                | -                | -         |    -0.78 | doc, gafolo, koala, pepe, rdnzao |
|            8 |     4505 | 2024-06-10 | Vikings KR        | W   | 0.034      | -            | -                | -                | -         |     0.13 | doc, gafolo, koala, pepe, rdnzao |
|            7 |     4534 | 2024-06-09 | paiN              | L   | 0.028      | -            | -                | -                | -         |    -0.05 | doc, gafolo, koala, pepe, rdnzao |
|            6 |     4550 | 2024-06-09 | BESTIA            | W   | 0.027      | -            | -                | -                | -         |     0.48 | doc, gafolo, koala, pepe, rdnzao |
|            5 |     4609 | 2024-06-08 | Hype              | W   | 0.021      | -            | -                | -                | -         |     0.11 | doc, gafolo, koala, pepe, rdnzao |
|            4 |     4618 | 2024-06-08 | Patins da Ferrari | L   | 0.020      | -            | -                | -                | -         |    -0.59 | doc, gafolo, koala, pepe, rdnzao |
|            3 |     4649 | 2024-06-07 | 9z                | L   | 0.015      | -            | -                | -                | -         |    -0.20 | doc, gafolo, koala, pepe, rdnzao |
|            2 |     4707 | 2024-06-06 | paiN              | W   | 0.009      | -            | -                | -                | -         |     0.26 | doc, gafolo, koala, pepe, rdnzao |
|            1 |     4775 | 2024-06-05 | Imperial          | L   | 0.002      | -            | -                | -                | -         |    -0.02 | doc, gafolo, koala, pepe, rdnzao |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,385.55)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-30 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-11-24 |      1.000 | $3,940.00      | $3,940.00       |
| 2024-11-09 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-10-27 |      0.962 | $10,650.00     | $10,242.50      |
| 2024-10-20 |      0.915 | $2,000.00      | $1,830.25       |
| 2024-09-04 |      0.609 | $1,500.00      | $914.06         |
| 2024-08-16 |      0.482 | $9,000.00      | $4,336.56       |
| 2024-08-02 |      0.389 | $750.00        | $291.58         |
| 2024-06-16 |      0.075 | $2,500.00      | $187.46         |
| 2024-06-09 |      0.029 | $5,000.00      | $143.14         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
