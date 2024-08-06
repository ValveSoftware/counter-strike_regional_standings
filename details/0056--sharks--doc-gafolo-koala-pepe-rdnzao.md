### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, gafolo, koala, pepe, rdnzao<br />
Global Rank: [56](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [15]( ../standings_americas.md)<br />
<br />
Final Rank Value:  1023.0<br />
<br />
Final Rank Value (1023.0) = Starting Rank Value (969.8) + Head To Head Adjustments (53.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.396[<sup>1</sup>](#table2)
- Bounty Collected: 0.426[<sup>2</sup>](#table1)
- Opponent Network: 0.286[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.277<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 969.8
- 400 + ( ( 0.277 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 969.8


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
|           93 |      136 | 2024-08-02 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -3.52 | doc, gafolo, koala, pepe, rdnzao |
|           92 |      165 | 2024-08-01 | Hype              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.10 | doc, gafolo, koala, pepe, rdnzao |
|           91 |      172 | 2024-08-01 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -3.48 | doc, gafolo, koala, pepe, rdnzao |
|           90 |      205 | 2024-07-31 | MIBR              | L   | 1.000      | -            | -                | -                | -         |    -4.64 | doc, gafolo, koala, pepe, rdnzao |
|           89 |      210 | 2024-07-31 | Solid             | W   | 1.000      | 0.371        | -                | 0.807 (0.299)    | 0 (0.000) |    12.33 | doc, gafolo, koala, pepe, rdnzao |
|           88 |      246 | 2024-07-30 | Hype              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.29 | doc, gafolo, koala, pepe, rdnzao |
|           87 |      325 | 2024-07-28 | Bad News Chickens | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.50 | doc, gafolo, koala, pepe, rdnzao |
|           86 |      371 | 2024-07-26 | Imperial          | L   | 1.000      | -            | -                | -                | -         |    -8.60 | doc, gafolo, koala, pepe, rdnzao |
|           85 |      398 | 2024-07-25 | BESTIA            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.73 | doc, gafolo, koala, pepe, rdnzao |
|           84 |      402 | 2024-07-25 | Patins da Ferrari | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.22 | doc, gafolo, koala, pepe, rdnzao |
|           83 |      448 | 2024-07-24 | Bad News Chickens | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.44 | doc, gafolo, koala, pepe, rdnzao |
|           82 |      453 | 2024-07-24 | Yawara            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.02 | doc, gafolo, koala, pepe, rdnzao |
|           81 |      475 | 2024-07-23 | ODDIK             | L   | 1.000      | -            | -                | -                | -         |   -13.87 | doc, gafolo, koala, pepe, rdnzao |
|           80 |      479 | 2024-07-23 | W7M               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.15 | doc, gafolo, koala, pepe, rdnzao |
|           79 |      563 | 2024-07-20 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -7.65 | doc, gafolo, koala, pepe, rdnzao |
|           78 |      615 | 2024-07-19 | Hype              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.54 | doc, gafolo, koala, pepe, rdnzao |
|           77 |      642 | 2024-07-18 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -8.11 | doc, gafolo, koala, pepe, rdnzao |
|           76 |      646 | 2024-07-18 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -8.69 | doc, gafolo, koala, pepe, rdnzao |
|           75 |      707 | 2024-07-17 | ODDIK             | W   | 1.000      | 0.450        | 0.099 (0.045)    | 0.805 (0.362)    | -         |    17.74 | doc, gafolo, koala, pepe, rdnzao |
|           74 |      719 | 2024-07-17 | ODDIK             | W   | 1.000      | 0.450        | 0.099 (0.045)    | 0.805 (0.362)    | -         |    19.32 | doc, gafolo, koala, pepe, rdnzao |
|           73 |      770 | 2024-07-16 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |    -7.87 | doc, gafolo, koala, pepe, rdnzao |
|           72 |      778 | 2024-07-16 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |    -8.42 | doc, gafolo, koala, pepe, rdnzao |
|           71 |      825 | 2024-07-15 | KRÜ               | L   | 1.000      | -            | -                | -                | -         |   -20.23 | doc, gafolo, koala, pepe, rdnzao |
|           70 |      829 | 2024-07-15 | KRÜ               | W   | 1.000      | 0.450        | -                | 0.479 (0.216)    | -         |    10.90 | doc, gafolo, koala, pepe, rdnzao |
|           69 |      899 | 2024-07-11 | Bounty Hunters    | L   | 1.000      | -            | -                | -                | -         |   -16.70 | doc, gafolo, koala, pepe, rdnzao |
|           68 |      914 | 2024-07-10 | BESTIA            | W   | 1.000      | 0.371        | 0.096 (0.035)    | 0.776 (0.287)    | -         |    17.01 | doc, gafolo, koala, pepe, rdnzao |
|           67 |      934 | 2024-07-09 | KRÜ               | L   | 1.000      | -            | -                | -                | -         |   -21.06 | doc, gafolo, koala, pepe, rdnzao |
|           66 |      956 | 2024-07-08 | Patins da Ferrari | W   | 1.000      | -            | -                | -                | -         |     8.98 | doc, gafolo, koala, pepe, rdnzao |
|           65 |      992 | 2024-06-30 | Patins da Ferrari | L   | 0.954      | -            | -                | -                | -         |   -21.58 | doc, gafolo, koala, pepe, rdnzao |
|           64 |     1006 | 2024-06-28 | KRÜ               | W   | 0.941      | -            | -                | -                | -         |     8.91 | doc, gafolo, koala, pepe, rdnzao |
|           63 |     1007 | 2024-06-28 | Bounty Hunters    | L   | 0.941      | -            | -                | -                | -         |   -18.31 | doc, gafolo, koala, pepe, rdnzao |
|           62 |     1011 | 2024-06-27 | Galorys           | W   | 0.935      | -            | -                | -                | -         |     8.60 | doc, gafolo, koala, pepe, rdnzao |
|           61 |     1014 | 2024-06-27 | inSanitY          | L   | 0.934      | -            | -                | -                | -         |   -15.60 | doc, gafolo, koala, pepe, rdnzao |
|           60 |     1113 | 2024-06-14 | Fluxo             | L   | 0.848      | -            | -                | -                | -         |   -11.44 | doc, gafolo, koala, pepe, rdnzao |
|           59 |     1239 | 2024-06-10 | Vikings KR        | W   | 0.820      | -            | -                | -                | -         |     5.30 | doc, gafolo, koala, pepe, rdnzao |
|           58 |     1268 | 2024-06-09 | paiN              | L   | 0.814      | -            | -                | -                | -         |    -4.13 | doc, gafolo, koala, pepe, rdnzao |
|           57 |     1284 | 2024-06-09 | BESTIA            | W   | 0.813      | 0.450        | 0.096 (0.035)    | 0.776 (0.284)    | -         |    12.55 | doc, gafolo, koala, pepe, rdnzao |
|           56 |     1343 | 2024-06-08 | Hype              | W   | 0.807      | -            | -                | -                | -         |     8.65 | doc, gafolo, koala, pepe, rdnzao |
|           55 |     1352 | 2024-06-08 | Patins da Ferrari | L   | 0.806      | -            | -                | -                | -         |   -19.77 | doc, gafolo, koala, pepe, rdnzao |
|           54 |     1383 | 2024-06-07 | 9z                | L   | 0.802      | -            | -                | -                | -         |    -2.15 | doc, gafolo, koala, pepe, rdnzao |
|           53 |     1441 | 2024-06-06 | paiN              | W   | 0.795      | 0.450        | 0.324 (0.116)    | 0.839 (0.300)    | -         |    21.29 | doc, gafolo, koala, pepe, rdnzao |
|           52 |     1509 | 2024-06-05 | Imperial          | L   | 0.789      | -            | -                | -                | -         |    -4.89 | doc, gafolo, koala, pepe, rdnzao |
|           51 |     1561 | 2024-06-04 | BESTIA            | W   | 0.782      | 0.450        | 0.096 (0.034)    | 0.776 (0.273)    | -         |    13.84 | doc, gafolo, koala, pepe, rdnzao |
|           50 |     1890 | 2024-05-22 | Imperial          | W   | 0.694      | 0.450        | 0.233 (0.073)    | -                | -         |    17.58 | doc, drg, gafolo, pepe, rdnzao   |
|           49 |     1894 | 2024-05-22 | Imperial          | L   | 0.694      | -            | -                | -                | -         |    -4.15 | doc, drg, gafolo, pepe, rdnzao   |
|           48 |     1920 | 2024-05-21 | Case              | L   | 0.688      | -            | -                | -                | -         |   -13.28 | doc, drg, gafolo, pepe, rdnzao   |
|           47 |     1921 | 2024-05-21 | Case              | W   | 0.688      | 0.450        | -                | 0.778 (0.241)    | -         |     8.46 | doc, drg, gafolo, pepe, rdnzao   |
|           46 |     1924 | 2024-05-21 | RED Canids        | W   | 0.688      | 0.450        | 0.076 (0.024)    | 0.746 (0.231)    | -         |    15.09 | doc, drg, gafolo, pepe, rdnzao   |
|           45 |     1928 | 2024-05-21 | RED Canids        | L   | 0.688      | -            | -                | -                | -         |    -6.54 | doc, drg, gafolo, pepe, rdnzao   |
|           44 |     2056 | 2024-05-17 | ODDIK             | L   | 0.661      | -            | -                | -                | -         |   -12.01 | doc, drg, gafolo, rdnzao, togs   |
|           43 |     2084 | 2024-05-16 | W7M               | W   | 0.655      | -            | -                | -                | -         |     4.83 | doc, drg, gafolo, rdnzao, togs   |
|           42 |     2087 | 2024-05-16 | W7M               | W   | 0.655      | -            | -                | -                | -         |     5.04 | doc, drg, gafolo, rdnzao, togs   |
|           41 |     2089 | 2024-05-16 | Hype              | W   | 0.654      | -            | -                | -                | -         |     7.30 | doc, drg, gafolo, rdnzao, togs   |
|           40 |     2129 | 2024-05-15 | Vikings KR        | W   | 0.649      | -            | -                | -                | -         |     5.76 | doc, drg, gafolo, rdnzao, togs   |
|           39 |     2132 | 2024-05-15 | 9z                | L   | 0.648      | -            | -                | -                | -         |    -1.02 | doc, drg, gafolo, rdnzao, togs   |
|           38 |     2196 | 2024-05-14 | Fluxo             | L   | 0.641      | -            | -                | -                | -         |    -7.10 | doc, drg, gafolo, rdnzao, togs   |
|           37 |     2223 | 2024-05-13 | RED Canids        | W   | 0.635      | 0.384        | 0.076 (0.019)    | -                | -         |    12.97 | doc, drg, gafolo, rdnzao, togs   |
|           36 |     2231 | 2024-05-13 | W7M               | W   | 0.633      | -            | -                | -                | -         |     5.74 | doc, drg, gafolo, rdnzao, togs   |
|           35 |     2280 | 2024-05-11 | W7M               | W   | 0.620      | -            | -                | -                | -         |     5.89 | doc, drg, gafolo, rdnzao, togs   |
|           34 |     2319 | 2024-05-09 | BESTIA            | L   | 0.609      | -            | -                | -                | -         |   -10.49 | doc, drg, gafolo, rdnzao, togs   |
|           33 |     2342 | 2024-05-08 | 9z                | L   | 0.602      | -            | -                | -                | -         |    -0.87 | doc, drg, gafolo, rdnzao, togs   |
|           32 |     2380 | 2024-05-06 | BESTIA            | W   | 0.588      | 0.435        | 0.096 (0.024)    | -                | -         |     8.34 | doc, drg, gafolo, rdnzao, togs   |
|           31 |     2978 | 2024-04-11 | paiN              | L   | 0.421      | -            | -                | -                | -         |    -1.07 | doc, drg, gafolo, rdnzao, togs   |
|           30 |     3242 | 2024-04-03 | 2GAME             | W   | 0.368      | -            | -                | -                | -         |     1.82 | doc, drg, gafolo, rdnzao, togs   |
|           29 |     3245 | 2024-04-03 | 2GAME             | W   | 0.368      | -            | -                | -                | -         |     1.85 | doc, drg, gafolo, rdnzao, togs   |
|           28 |     3613 | 2024-03-14 | MIBR              | L   | 0.235      | -            | -                | -                | -         |    -0.62 | doc, drg, gafolo, rdnzao, togs   |
|           27 |     3615 | 2024-03-14 | MIBR              | L   | 0.235      | -            | -                | -                | -         |    -0.63 | doc, drg, gafolo, rdnzao, togs   |
|           26 |     3641 | 2024-03-13 | Yawara            | W   | 0.229      | -            | -                | -                | -         |     0.53 | doc, drg, gafolo, rdnzao, togs   |
|           25 |     3648 | 2024-03-13 | ODDIK             | W   | 0.228      | -            | -                | -                | -         |     3.92 | doc, drg, gafolo, rdnzao, togs   |
|           24 |     3716 | 2024-03-11 | Fluxo             | L   | 0.213      | -            | -                | -                | -         |    -2.67 | doc, drg, gafolo, rdnzao, togs   |
|           23 |     3746 | 2024-03-09 | Case              | L   | 0.201      | -            | -                | -                | -         |    -3.60 | doc, drg, gafolo, rdnzao, togs   |
|           22 |     3810 | 2024-03-07 | Corinthians       | W   | 0.186      | -            | -                | -                | -         |     0.40 | doc, drg, gafolo, rdnzao, togs   |
|           21 |     3866 | 2024-03-05 | Solid             | W   | 0.174      | -            | -                | -                | -         |     2.16 | doc, drg, gafolo, rdnzao, togs   |
|           20 |     3870 | 2024-03-05 | Solid             | W   | 0.174      | -            | -                | -                | -         |     2.19 | doc, drg, gafolo, rdnzao, togs   |
|           19 |     4063 | 2024-02-24 | Galorys           | W   | 0.109      | -            | -                | -                | -         |     1.35 | doc, drg, gafolo, rdnzao, togs   |
|           18 |     4074 | 2024-02-24 | Galorys           | W   | 0.108      | -            | -                | -                | -         |     1.35 | doc, drg, gafolo, rdnzao, togs   |
|           17 |     4076 | 2024-02-24 | Fluxo             | L   | 0.108      | -            | -                | -                | -         |    -1.35 | doc, drg, gafolo, rdnzao, togs   |
|           16 |     4129 | 2024-02-21 | Corinthians       | W   | 0.089      | -            | -                | -                | -         |     0.20 | doc, drg, gafolo, rdnzao, togs   |
|           15 |     4133 | 2024-02-21 | Case              | W   | 0.088      | -            | -                | -                | -         |     1.28 | doc, drg, gafolo, rdnzao, togs   |
|           14 |     4135 | 2024-02-21 | Galorys           | W   | 0.087      | -            | -                | -                | -         |     1.13 | doc, drg, gafolo, rdnzao, togs   |
|           13 |     4164 | 2024-02-20 | Flamengo          | L   | 0.081      | -            | -                | -                | -         |    -2.39 | doc, drg, gafolo, rdnzao, togs   |
|           12 |     4169 | 2024-02-20 | Case              | W   | 0.080      | -            | -                | -                | -         |     1.16 | doc, drg, gafolo, rdnzao, togs   |
|           11 |     4191 | 2024-02-19 | Solid             | W   | 0.074      | -            | -                | -                | -         |     0.94 | doc, drg, gafolo, rdnzao, togs   |
|           10 |     4207 | 2024-02-18 | Galorys           | W   | 0.069      | -            | -                | -                | -         |     0.89 | doc, drg, gafolo, rdnzao, togs   |
|            9 |     4229 | 2024-02-17 | W7M               | L   | 0.062      | -            | -                | -                | -         |    -1.32 | doc, drg, gafolo, rdnzao, togs   |
|            8 |     4233 | 2024-02-17 | Galorys           | L   | 0.061      | -            | -                | -                | -         |    -1.14 | doc, drg, gafolo, rdnzao, togs   |
|            7 |     4263 | 2024-02-16 | W7M               | W   | 0.054      | -            | -                | -                | -         |     0.56 | doc, drg, gafolo, rdnzao, togs   |
|            6 |     4288 | 2024-02-15 | Case              | L   | 0.048      | -            | -                | -                | -         |    -0.82 | doc, drg, gafolo, rdnzao, togs   |
|            5 |     4293 | 2024-02-15 | Fluxo             | L   | 0.047      | -            | -                | -                | -         |    -0.59 | doc, drg, gafolo, rdnzao, togs   |
|            4 |     4296 | 2024-02-15 | Fluxo             | L   | 0.047      | -            | -                | -                | -         |    -0.58 | doc, drg, gafolo, rdnzao, togs   |
|            3 |     4322 | 2024-02-14 | Hype              | W   | 0.042      | -            | -                | -                | -         |     0.05 | doc, drg, gafolo, rdnzao, togs   |
|            2 |     4332 | 2024-02-14 | Galorys           | W   | 0.040      | -            | -                | -                | -         |     0.51 | doc, drg, gafolo, rdnzao, togs   |
|            1 |     4377 | 2024-02-12 | Solid             | W   | 0.029      | -            | -                | -                | -         |     0.36 | doc, drg, gafolo, rdnzao, togs   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,615.84)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-02 |      1.000 | $750.00        | $750.00         |
| 2024-06-28 |      0.941 | $500.00        | $470.35         |
| 2024-06-16 |      0.861 | $2,500.00      | $2,152.82       |
| 2024-06-10 |      0.822 | $750.00        | $616.42         |
| 2024-06-09 |      0.815 | $5,000.00      | $4,073.86       |
| 2024-05-19 |      0.675 | $1,000.00      | $674.77         |
| 2024-02-25 |      0.114 | $5,000.00      | $571.99         |
| 2024-02-21 |      0.087 | $3,500.00      | $305.62         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
