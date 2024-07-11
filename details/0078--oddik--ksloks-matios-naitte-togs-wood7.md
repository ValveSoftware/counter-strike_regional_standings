### Roster Details<br />
Team Name: ODDIK<br />
Roster: ksloks, matios, naitte, togs, WOOD7<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [78](../standings_global.md)<br />
Regional Rank: [20]( ../standings_americas.md)<br />
Final Rank Value:  987.8<br />
<br />
Final Rank Value (987.8) = Starting Rank Value (965.0) + Head To Head Adjustments (22.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.421[<sup>1</sup>](#table2)
- Bounty Collected: 0.386[<sup>2</sup>](#table1)
- Opponent Network: 0.188[<sup>2</sup>](#table1)
- LAN Wins: 0.077[<sup>2</sup>](#table1)

The average of these factors is 0.268<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 965.0
- 400 + ( ( 0.268 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 965.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           83 |       15 | 2024-07-10 | Patins da Ferrari | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.96 | ksloks, matios, naitte, togs, WOOD7    |
|           82 |       23 | 2024-07-10 | Hype              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.68 | ksloks, matios, naitte, togs, WOOD7    |
|           81 |       67 | 2024-07-08 | Sharks Youngsters | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.10 | ksloks, matios, naitte, togs, WOOD7    |
|           80 |       78 | 2024-07-06 | W7M               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.76 | ksloks, matios, naitte, togs, WOOD7    |
|           79 |      191 | 2024-06-15 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -1.59 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           78 |      261 | 2024-06-13 | Hype              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.35 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           77 |      331 | 2024-06-10 | W7M               | W   | 0.994      | 0.450        | -                | 0.404 (0.181)    | 0 (0.000) |     8.97 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           76 |      361 | 2024-06-09 | Galorys           | W   | 0.988      | 0.450        | 0.026 (0.012)    | 0.519 (0.231)    | 0 (0.000) |    11.84 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           75 |      379 | 2024-06-09 | Imperial          | L   | 0.986      | -            | -                | -                | -         |    -1.58 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           74 |      421 | 2024-06-08 | W7M               | W   | 0.982      | -            | -                | -                | 0 (0.000) |     9.18 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           73 |      486 | 2024-06-07 | BESTIA            | L   | 0.974      | -            | -                | -                | -         |    -9.42 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           72 |      556 | 2024-06-06 | Patins da Ferrari | L   | 0.967      | -            | -                | -                | -         |   -20.90 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           71 |      660 | 2024-06-04 | paiN              | L   | 0.955      | -            | -                | -                | -         |    -1.44 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           70 |     1028 | 2024-05-21 | Case              | L   | 0.861      | -            | -                | -                | -         |   -15.37 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           69 |     1085 | 2024-05-19 | Case              | W   | 0.848      | 0.303        | 0.033 (0.009)    | 0.582 (0.149)    | -         |    11.08 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           68 |     1112 | 2024-05-18 | RED Canids        | L   | 0.841      | -            | -                | -                | -         |    -5.37 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           67 |     1118 | 2024-05-18 | Galorys           | W   | 0.840      | -            | -                | -                | -         |    10.70 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           66 |     1152 | 2024-05-17 | FURIA Academy     | W   | 0.834      | -            | -                | -                | -         |     2.53 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           65 |     1154 | 2024-05-17 | Sharks            | W   | 0.834      | 0.371        | 0.046 (0.014)    | 0.520 (0.161)    | -         |    16.55 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           64 |     1180 | 2024-05-16 | 9z                | L   | 0.828      | -            | -                | -                | -         |    -0.52 | lineko, matios, naitte, Tuurtle, WOOD7 |
|           63 |     1186 | 2024-05-16 | Solid             | L   | 0.828      | -            | -                | -                | -         |   -14.73 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           62 |     1232 | 2024-05-15 | BESTIA            | L   | 0.821      | -            | -                | -                | -         |   -12.37 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           61 |     1234 | 2024-05-15 | BESTIA            | L   | 0.821      | -            | -                | -                | -         |   -13.31 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           60 |     1275 | 2024-05-14 | Solid             | L   | 0.815      | -            | -                | -                | -         |   -16.02 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           59 |     1281 | 2024-05-14 | Solid             | W   | 0.815      | 0.450        | 0.048 (0.018)    | 0.585 (0.215)    | -         |     9.60 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           58 |     1299 | 2024-05-14 | KRÜ               | W   | 0.814      | -            | -                | -                | -         |     9.67 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           57 |     1307 | 2024-05-14 | Fluxo             | L   | 0.813      | -            | -                | -                | -         |    -7.08 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           56 |     1322 | 2024-05-13 | Solid             | W   | 0.808      | 0.371        | 0.048 (0.014)    | 0.585 (0.175)    | -         |    10.18 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           55 |     1346 | 2024-05-12 | Intense           | W   | 0.801      | -            | -                | -                | -         |     2.49 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           54 |     1367 | 2024-05-11 | ex-Corinthians    | W   | 0.795      | -            | -                | -                | -         |     2.44 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           53 |     1424 | 2024-05-09 | inSanitY          | L   | 0.780      | -            | -                | -                | -         |   -12.87 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           52 |     1459 | 2024-05-07 | Imperial          | L   | 0.768      | -            | -                | -                | -         |    -1.36 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           51 |     1491 | 2024-05-05 | Case              | W   | 0.755      | 0.435        | 0.033 (0.011)    | 0.582 (0.191)    | -         |     9.35 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           50 |     1550 | 2024-05-02 | Case              | L   | 0.735      | -            | -                | -                | -         |   -14.39 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           49 |     1551 | 2024-05-02 | Case              | W   | 0.735      | 0.450        | 0.033 (0.011)    | 0.582 (0.192)    | -         |     8.77 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           48 |     1688 | 2024-04-26 | W7M               | W   | 0.694      | -            | -                | -                | -         |     6.28 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           47 |     1690 | 2024-04-26 | W7M               | W   | 0.694      | -            | -                | -                | -         |     6.60 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           46 |     1738 | 2024-04-24 | paiN              | L   | 0.682      | -            | -                | -                | -         |    -0.72 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           45 |     1739 | 2024-04-24 | paiN              | W   | 0.681      | 0.450        | 0.478 (0.147)    | 0.768 (0.236)    | -         |    20.84 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           44 |     1944 | 2024-04-17 | Fluxo             | L   | 0.636      | -            | -                | -                | -         |    -5.52 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           43 |     1952 | 2024-04-17 | W7M               | W   | 0.634      | -            | -                | -                | -         |     6.72 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           42 |     1986 | 2024-04-16 | SPORT             | W   | 0.628      | -            | -                | -                | -         |     3.76 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           41 |     2037 | 2024-04-13 | paiN              | L   | 0.608      | -            | -                | -                | -         |    -0.51 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           40 |     2058 | 2024-04-12 | Solid             | W   | 0.600      | 0.435        | 0.048 (0.013)    | 0.585 (0.152)    | -         |     8.78 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           39 |     2102 | 2024-04-10 | Sharks            | L   | 0.589      | -            | -                | -                | -         |   -12.65 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           38 |     2108 | 2024-04-10 | Sharks            | W   | 0.588      | 0.450        | 0.030 (0.008)    | -                | -         |     5.91 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           37 |     2163 | 2024-04-09 | Fluxo             | L   | 0.582      | -            | -                | -                | -         |    -5.19 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           36 |     2168 | 2024-04-09 | Fluxo             | L   | 0.581      | -            | -                | -                | -         |    -5.42 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           35 |     2204 | 2024-04-08 | Fluxo             | L   | 0.574      | -            | -                | -                | -         |    -5.59 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           34 |     2257 | 2024-04-06 | Sharks            | L   | 0.561      | -            | -                | -                | -         |   -12.94 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           33 |     2260 | 2024-04-06 | LA RUGONETA       | W   | 0.559      | -            | -                | -                | -         |     2.02 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           32 |     2274 | 2024-04-05 | MIBR              | L   | 0.554      | -            | -                | -                | -         |    -0.57 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           31 |     2300 | 2024-04-04 | Imperial          | L   | 0.548      | -            | -                | -                | -         |    -0.80 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           30 |     2305 | 2024-04-04 | Imperial          | L   | 0.548      | -            | -                | -                | -         |    -0.81 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           29 |     2339 | 2024-04-03 | RED Canids        | L   | 0.542      | -            | -                | -                | -         |    -3.96 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           28 |     2342 | 2024-04-03 | RED Canids        | L   | 0.541      | -            | -                | -                | -         |    -4.10 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           27 |     2517 | 2024-03-26 | MIBR              | L   | 0.488      | -            | -                | -                | -         |    -0.55 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           26 |     2519 | 2024-03-26 | MIBR              | L   | 0.488      | -            | -                | -                | -         |    -0.55 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           25 |     2626 | 2024-03-18 | RED Canids        | L   | 0.434      | -            | -                | -                | -         |    -3.41 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           24 |     2647 | 2024-03-17 | Case              | W   | 0.427      | -            | -                | -                | -         |     5.08 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           23 |     2669 | 2024-03-16 | RED Canids        | L   | 0.421      | -            | -                | -                | -         |    -3.34 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           22 |     2684 | 2024-03-15 | ex-2GAME          | W   | 0.415      | -            | -                | -                | -         |     2.79 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           21 |     2685 | 2024-03-15 | ex-2GAME          | W   | 0.415      | -            | -                | -                | -         |     2.85 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           20 |     2689 | 2024-03-15 | MIBR Academy      | W   | 0.414      | -            | -                | -                | -         |     1.09 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           19 |     2746 | 2024-03-13 | Sharks            | L   | 0.401      | -            | -                | -                | -         |    -5.91 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           18 |     2759 | 2024-03-13 | Case              | W   | 0.400      | -            | -                | -                | -         |     5.09 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           17 |     2830 | 2024-03-10 | Solid             | W   | 0.380      | -            | -                | -                | -         |     5.02 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           16 |     2835 | 2024-03-10 | LA RUGONETA       | L   | 0.380      | -            | -                | -                | -         |   -10.99 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           15 |     2881 | 2024-03-08 | Galorys           | L   | 0.366      | -            | -                | -                | -         |    -7.60 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           14 |     2992 | 2024-03-04 | paiN              | L   | 0.340      | -            | -                | -                | -         |    -0.36 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           13 |     3007 | 2024-03-03 | RED Canids        | W   | 0.334      | -            | -                | -                | 1 (0.334) |     7.90 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           12 |     3031 | 2024-03-02 | Elevate           | W   | 0.328      | -            | -                | -                | 1 (0.328) |     6.67 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           11 |     3059 | 2024-03-01 | M80               | L   | 0.321      | -            | -                | -                | -         |    -1.64 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           10 |     3611 | 2024-02-02 | BESTIA            | L   | 0.135      | -            | -                | -                | -         |    -1.83 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            9 |     3618 | 2024-02-02 | 9z                | L   | 0.134      | -            | -                | -                | -         |    -0.05 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            8 |     3818 | 2024-01-22 | Fluxo             | L   | 0.062      | -            | -                | -                | -         |    -0.72 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            7 |     3851 | 2024-01-21 | RED Canids        | W   | 0.055      | -            | -                | -                | -         |     1.30 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            6 |     3891 | 2024-01-20 | 9z                | W   | 0.047      | -            | -                | -                | -         |     1.47 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            5 |     3930 | 2024-01-19 | Flamengo          | W   | 0.042      | -            | -                | -                | -         |     0.09 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            4 |     3947 | 2024-01-19 | MIBR              | L   | 0.041      | -            | -                | -                | -         |    -0.04 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            3 |     4130 | 2024-01-16 | adalYamigos       | L   | 0.020      | -            | -                | -                | -         |    -0.57 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            2 |     4183 | 2024-01-14 | paiN              | L   | 0.008      | -            | -                | -                | -         |    -0.01 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            1 |     4204 | 2024-01-13 | Solid             | W   | 0.002      | -            | -                | -                | -         |     0.02 | matios, naitte, ponter, Tuurtle, WOOD7 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,867.08)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-10 |      0.995 | $750.00        | $746.38         |
| 2024-06-09 |      0.988 | $1,500.00      | $1,482.09       |
| 2024-05-21 |      0.861 | $1,500.00      | $1,291.42       |
| 2024-05-19 |      0.848 | $2,000.00      | $1,696.11       |
| 2024-03-18 |      0.434 | $1,500.00      | $651.07         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
