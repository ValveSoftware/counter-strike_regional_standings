### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, gafolo, koala, pepe, rdnzao<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [67](../standings_global.md)<br />
Regional Rank: [17]( ../standings_americas.md)<br />
Final Rank Value:  1028.2<br />
<br />
Final Rank Value (1028.2) = Starting Rank Value (991.5) + Head To Head Adjustments (36.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.428[<sup>1</sup>](#table2)
- Bounty Collected: 0.441[<sup>2</sup>](#table1)
- Opponent Network: 0.253[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.280<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 991.5
- 400 + ( ( 0.280 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 991.5


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
|           82 |       12 | 2024-07-10 | BESTIA            | W   | 1.000      | 0.371        | 0.050 (0.019)    | 0.657 (0.243)    | 0 (0.000) |    16.83 | doc, gafolo, koala, pepe, rdnzao |
|           81 |       32 | 2024-07-09 | KRÜ               | L   | 1.000      | -            | -                | -                | -         |   -22.86 | doc, gafolo, koala, pepe, rdnzao |
|           80 |       54 | 2024-07-08 | Patins da Ferrari | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.16 | doc, gafolo, koala, pepe, rdnzao |
|           79 |       90 | 2024-06-30 | Patins da Ferrari | L   | 1.000      | -            | -                | -                | -         |   -23.37 | doc, gafolo, koala, pepe, rdnzao |
|           78 |      104 | 2024-06-28 | KRÜ               | W   | 1.000      | 0.333        | 0.025 (0.008)    | -                | 0 (0.000) |     7.53 | doc, gafolo, koala, pepe, rdnzao |
|           77 |      105 | 2024-06-28 | Bounty Hunters    | L   | 1.000      | -            | -                | -                | -         |   -20.61 | doc, gafolo, koala, pepe, rdnzao |
|           76 |      109 | 2024-06-27 | Galorys           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.19 | doc, gafolo, koala, pepe, rdnzao |
|           75 |      112 | 2024-06-27 | inSanitY          | L   | 1.000      | -            | -                | -                | -         |   -17.42 | doc, gafolo, koala, pepe, rdnzao |
|           74 |      211 | 2024-06-14 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |   -13.18 | doc, gafolo, koala, pepe, rdnzao |
|           73 |      337 | 2024-06-10 | Vikings KR        | W   | 0.993      | 0.450        | -                | 0.432 (0.193)    | 0 (0.000) |     4.81 | doc, gafolo, koala, pepe, rdnzao |
|           72 |      366 | 2024-06-09 | paiN              | L   | 0.987      | -            | -                | -                | -         |    -3.29 | doc, gafolo, koala, pepe, rdnzao |
|           71 |      382 | 2024-06-09 | BESTIA            | W   | 0.986      | 0.450        | 0.050 (0.022)    | 0.657 (0.292)    | 0 (0.000) |    14.28 | doc, gafolo, koala, pepe, rdnzao |
|           70 |      441 | 2024-06-08 | Hype              | W   | 0.980      | -            | -                | -                | 0 (0.000) |     7.72 | doc, gafolo, koala, pepe, rdnzao |
|           69 |      450 | 2024-06-08 | Patins da Ferrari | L   | 0.980      | -            | -                | -                | -         |   -24.91 | doc, gafolo, koala, pepe, rdnzao |
|           68 |      481 | 2024-06-07 | 9z                | L   | 0.975      | -            | -                | -                | -         |    -1.69 | doc, gafolo, koala, pepe, rdnzao |
|           67 |      539 | 2024-06-06 | paiN              | W   | 0.968      | 0.450        | 0.478 (0.208)    | 0.768 (0.335)    | 0 (0.000) |    27.57 | doc, gafolo, koala, pepe, rdnzao |
|           66 |      607 | 2024-06-05 | Imperial          | L   | 0.962      | -            | -                | -                | -         |    -3.17 | doc, gafolo, koala, pepe, rdnzao |
|           65 |      659 | 2024-06-04 | BESTIA            | W   | 0.955      | 0.450        | 0.050 (0.021)    | 0.657 (0.282)    | 0 (0.000) |    16.56 | doc, gafolo, koala, pepe, rdnzao |
|           64 |      988 | 2024-05-22 | Imperial          | W   | 0.867      | 0.450        | 0.390 (0.152)    | 0.646 (0.252)    | 0 (0.000) |    24.53 | doc, drg, gafolo, pepe, rdnzao   |
|           63 |      992 | 2024-05-22 | Imperial          | L   | 0.867      | -            | -                | -                | -         |    -2.55 | doc, drg, gafolo, pepe, rdnzao   |
|           62 |     1018 | 2024-05-21 | Case              | L   | 0.862      | -            | -                | -                | -         |   -17.95 | doc, drg, gafolo, pepe, rdnzao   |
|           61 |     1019 | 2024-05-21 | Case              | W   | 0.862      | 0.450        | 0.033 (0.013)    | 0.582 (0.226)    | -         |     9.03 | doc, drg, gafolo, pepe, rdnzao   |
|           60 |     1022 | 2024-05-21 | RED Canids        | W   | 0.861      | 0.450        | 0.115 (0.045)    | 0.698 (0.270)    | -         |    20.36 | doc, drg, gafolo, pepe, rdnzao   |
|           59 |     1026 | 2024-05-21 | RED Canids        | L   | 0.861      | -            | -                | -                | -         |    -6.50 | doc, drg, gafolo, pepe, rdnzao   |
|           58 |     1154 | 2024-05-17 | ODDIK             | L   | 0.834      | -            | -                | -                | -         |   -16.55 | doc, drg, gafolo, rdnzao, togs   |
|           57 |     1182 | 2024-05-16 | W7M               | W   | 0.828      | -            | -                | -                | -         |     4.83 | doc, drg, gafolo, rdnzao, togs   |
|           56 |     1185 | 2024-05-16 | W7M               | W   | 0.828      | -            | -                | -                | -         |     5.05 | doc, drg, gafolo, rdnzao, togs   |
|           55 |     1187 | 2024-05-16 | Hype              | W   | 0.827      | -            | -                | -                | -         |     6.75 | doc, drg, gafolo, rdnzao, togs   |
|           54 |     1227 | 2024-05-15 | Vikings KR        | W   | 0.822      | -            | -                | -                | -         |     5.90 | doc, drg, gafolo, rdnzao, togs   |
|           53 |     1230 | 2024-05-15 | 9z                | L   | 0.821      | -            | -                | -                | -         |    -0.66 | doc, drg, gafolo, rdnzao, togs   |
|           52 |     1294 | 2024-05-14 | Fluxo             | L   | 0.814      | -            | -                | -                | -         |    -8.37 | doc, drg, gafolo, rdnzao, togs   |
|           51 |     1321 | 2024-05-13 | RED Canids        | W   | 0.808      | 0.384        | 0.115 (0.036)    | 0.698 (0.217)    | -         |    17.91 | doc, drg, gafolo, rdnzao, togs   |
|           50 |     1329 | 2024-05-13 | W7M               | W   | 0.807      | -            | -                | -                | -         |     6.01 | doc, drg, gafolo, rdnzao, togs   |
|           49 |     1378 | 2024-05-11 | W7M               | W   | 0.794      | -            | -                | -                | -         |     6.23 | doc, drg, gafolo, rdnzao, togs   |
|           48 |     1417 | 2024-05-09 | BESTIA            | L   | 0.782      | -            | -                | -                | -         |   -14.82 | doc, drg, gafolo, rdnzao, togs   |
|           47 |     1440 | 2024-05-08 | 9z                | L   | 0.775      | -            | -                | -                | -         |    -0.56 | doc, drg, gafolo, rdnzao, togs   |
|           46 |     1478 | 2024-05-06 | BESTIA            | W   | 0.762      | 0.435        | 0.050 (0.017)    | 0.657 (0.217)    | -         |     9.26 | doc, drg, gafolo, rdnzao, togs   |
|           45 |     2076 | 2024-04-11 | paiN              | L   | 0.594      | -            | -                | -                | -         |    -0.69 | doc, drg, gafolo, rdnzao, togs   |
|           44 |     2340 | 2024-04-03 | ex-2GAME          | W   | 0.541      | -            | -                | -                | -         |     2.92 | doc, drg, gafolo, rdnzao, togs   |
|           43 |     2343 | 2024-04-03 | ex-2GAME          | W   | 0.541      | -            | -                | -                | -         |     3.00 | doc, drg, gafolo, rdnzao, togs   |
|           42 |     2711 | 2024-03-14 | MIBR              | L   | 0.409      | -            | -                | -                | -         |    -0.54 | doc, drg, gafolo, rdnzao, togs   |
|           41 |     2713 | 2024-03-14 | MIBR              | L   | 0.408      | -            | -                | -                | -         |    -0.54 | doc, drg, gafolo, rdnzao, togs   |
|           40 |     2739 | 2024-03-13 | Yawara            | W   | 0.402      | -            | -                | -                | -         |     0.85 | doc, drg, gafolo, rdnzao, togs   |
|           39 |     2746 | 2024-03-13 | ODDIK             | W   | 0.401      | -            | -                | -                | -         |     5.91 | doc, drg, gafolo, rdnzao, togs   |
|           38 |     2814 | 2024-03-11 | Fluxo             | L   | 0.386      | -            | -                | -                | -         |    -4.73 | doc, drg, gafolo, rdnzao, togs   |
|           37 |     2844 | 2024-03-09 | Case              | L   | 0.374      | -            | -                | -                | -         |    -7.71 | doc, drg, gafolo, rdnzao, togs   |
|           36 |     2908 | 2024-03-07 | Corinthians       | W   | 0.360      | -            | -                | -                | -         |     0.72 | doc, drg, gafolo, rdnzao, togs   |
|           35 |     2964 | 2024-03-05 | Solid             | W   | 0.347      | -            | -                | -                | -         |     4.11 | doc, drg, gafolo, rdnzao, togs   |
|           34 |     2968 | 2024-03-05 | Solid             | W   | 0.347      | -            | -                | -                | -         |     4.22 | doc, drg, gafolo, rdnzao, togs   |
|           33 |     3161 | 2024-02-24 | Galorys           | W   | 0.282      | -            | -                | -                | -         |     2.88 | doc, drg, gafolo, rdnzao, togs   |
|           32 |     3172 | 2024-02-24 | Galorys           | W   | 0.282      | -            | -                | -                | -         |     2.94 | doc, drg, gafolo, rdnzao, togs   |
|           31 |     3174 | 2024-02-24 | Fluxo             | L   | 0.281      | -            | -                | -                | -         |    -3.46 | doc, drg, gafolo, rdnzao, togs   |
|           30 |     3227 | 2024-02-21 | Corinthians       | W   | 0.262      | -            | -                | -                | -         |     0.55 | doc, drg, gafolo, rdnzao, togs   |
|           29 |     3231 | 2024-02-21 | Case              | W   | 0.262      | -            | -                | -                | -         |     3.21 | doc, drg, gafolo, rdnzao, togs   |
|           28 |     3233 | 2024-02-21 | Galorys           | W   | 0.261      | -            | -                | -                | -         |     2.98 | doc, drg, gafolo, rdnzao, togs   |
|           27 |     3262 | 2024-02-20 | Flamengo          | L   | 0.254      | -            | -                | -                | -         |    -7.50 | doc, drg, gafolo, rdnzao, togs   |
|           26 |     3267 | 2024-02-20 | Case              | W   | 0.253      | -            | -                | -                | -         |     3.09 | doc, drg, gafolo, rdnzao, togs   |
|           25 |     3289 | 2024-02-19 | Solid             | W   | 0.247      | -            | -                | -                | -         |     3.09 | doc, drg, gafolo, rdnzao, togs   |
|           24 |     3305 | 2024-02-18 | Galorys           | W   | 0.242      | -            | -                | -                | -         |     2.81 | doc, drg, gafolo, rdnzao, togs   |
|           23 |     3327 | 2024-02-17 | W7M               | L   | 0.236      | -            | -                | -                | -         |    -5.44 | doc, drg, gafolo, rdnzao, togs   |
|           22 |     3331 | 2024-02-17 | Galorys           | L   | 0.234      | -            | -                | -                | -         |    -4.83 | doc, drg, gafolo, rdnzao, togs   |
|           21 |     3361 | 2024-02-16 | W7M               | W   | 0.227      | -            | -                | -                | -         |     1.91 | doc, drg, gafolo, rdnzao, togs   |
|           20 |     3386 | 2024-02-15 | Case              | L   | 0.221      | -            | -                | -                | -         |    -4.39 | doc, drg, gafolo, rdnzao, togs   |
|           19 |     3391 | 2024-02-15 | Fluxo             | L   | 0.220      | -            | -                | -                | -         |    -2.80 | doc, drg, gafolo, rdnzao, togs   |
|           18 |     3394 | 2024-02-15 | Fluxo             | L   | 0.220      | -            | -                | -                | -         |    -2.85 | doc, drg, gafolo, rdnzao, togs   |
|           17 |     3420 | 2024-02-14 | Hype              | W   | 0.215      | -            | -                | -                | -         |     0.23 | doc, drg, gafolo, rdnzao, togs   |
|           16 |     3430 | 2024-02-14 | Galorys           | W   | 0.213      | -            | -                | -                | -         |     2.30 | doc, drg, gafolo, rdnzao, togs   |
|           15 |     3475 | 2024-02-12 | Solid             | W   | 0.202      | -            | -                | -                | -         |     2.52 | doc, drg, gafolo, rdnzao, togs   |
|           14 |     3778 | 2024-01-24 | paiN              | W   | 0.075      | -            | -                | -                | -         |     2.29 | doc, drg, gafolo, rdnzao, togs   |
|           13 |     3796 | 2024-01-23 | adalYamigos       | W   | 0.068      | -            | -                | -                | -         |     0.22 | doc, drg, gafolo, rdnzao, togs   |
|           12 |     3822 | 2024-01-22 | Legacy            | W   | 0.062      | -            | -                | -                | -         |     1.22 | doc, drg, gafolo, rdnzao, togs   |
|           11 |     3856 | 2024-01-21 | 9z                | L   | 0.054      | -            | -                | -                | -         |    -0.02 | doc, drg, gafolo, rdnzao, togs   |
|           10 |     3895 | 2024-01-20 | paiN              | L   | 0.047      | -            | -                | -                | -         |    -0.05 | doc, drg, gafolo, rdnzao, togs   |
|            9 |     3931 | 2024-01-19 | Galorys           | W   | 0.042      | -            | -                | -                | -         |     0.47 | doc, drg, gafolo, rdnzao, togs   |
|            8 |     3938 | 2024-01-19 | TIMACETA          | L   | 0.041      | -            | -                | -                | -         |    -1.23 | doc, drg, gafolo, rdnzao, togs   |
|            7 |     3997 | 2024-01-18 | MIBR              | L   | 0.034      | -            | -                | -                | -         |    -0.04 | doc, drg, gafolo, rdnzao, togs   |
|            6 |     4043 | 2024-01-17 | RED Canids        | W   | 0.029      | -            | -                | -                | -         |     0.66 | doc, drg, gafolo, rdnzao, togs   |
|            5 |     4061 | 2024-01-17 | MIBR              | L   | 0.028      | -            | -                | -                | -         |    -0.03 | doc, drg, gafolo, rdnzao, togs   |
|            4 |     4172 | 2024-01-14 | paiN              | W   | 0.009      | -            | -                | -                | -         |     0.27 | doc, drg, gafolo, rdnzao, togs   |
|            3 |     4175 | 2024-01-14 | BESTIA            | W   | 0.008      | -            | -                | -                | -         |     0.14 | doc, drg, gafolo, rdnzao, togs   |
|            2 |     4181 | 2024-01-14 | Corinthians       | W   | 0.008      | -            | -                | -                | -         |     0.02 | doc, drg, gafolo, rdnzao, togs   |
|            1 |     4197 | 2024-01-13 | Galorys           | W   | 0.002      | -            | -                | -                | -         |     0.02 | doc, drg, gafolo, rdnzao, togs   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,885.30)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-28 |      1.000 | $500.00        | $500.00         |
| 2024-06-16 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-06-10 |      0.995 | $750.00        | $746.38         |
| 2024-06-09 |      0.988 | $5,000.00      | $4,940.30       |
| 2024-05-19 |      0.848 | $1,000.00      | $848.05         |
| 2024-02-25 |      0.288 | $5,000.00      | $1,438.43       |
| 2024-02-21 |      0.261 | $3,500.00      | $912.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
