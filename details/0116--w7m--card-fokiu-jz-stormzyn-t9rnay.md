### Roster Details<br />
Team Name: W7M<br />
Roster: card, fokiu, jz, stormzyn, t9rnay<br />
Global Rank: [116](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [29]( ../standings_americas.md)<br />
<br />
Final Rank Value:  819.8<br />
<br />
Final Rank Value (819.8) = Starting Rank Value (843.2) + Head To Head Adjustments (-23.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.316[<sup>1</sup>](#table2)
- Bounty Collected: 0.347[<sup>2</sup>](#table1)
- Opponent Network: 0.195[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.215<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 843.2
- 400 + ( ( 0.215 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 843.2


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
|           81 |      149 | 2024-07-27 | Bad News Chickens | L   | 1.000      | -            | -                | -                | -         |   -26.11 | card, fokiu, jz, stormzyn, t9rnay      |
|           80 |      164 | 2024-07-26 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -4.71 | card, fokiu, jz, stormzyn, t9rnay      |
|           79 |      193 | 2024-07-25 | ODDIK             | W   | 1.000      | 0.143        | 0.096 (0.014)    | -                | 0 (0.000) |    23.09 | card, fokiu, jz, stormzyn, t9rnay      |
|           78 |      199 | 2024-07-25 | Bounty Hunters    | W   | 1.000      | -            | -                | -                | 0 (0.000) |    22.10 | card, fokiu, jz, stormzyn, t9rnay      |
|           77 |      241 | 2024-07-24 | Yawara            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.83 | card, fokiu, jz, stormzyn, t9rnay      |
|           76 |      243 | 2024-07-24 | Bad News Chickens | L   | 1.000      | -            | -                | -                | -         |   -26.18 | card, fokiu, jz, stormzyn, t9rnay      |
|           75 |      271 | 2024-07-23 | Sharks            | L   | 1.000      | -            | -                | -                | -         |    -9.02 | card, fokiu, jz, stormzyn, t9rnay      |
|           74 |      330 | 2024-07-21 | Hype              | L   | 1.000      | -            | -                | -                | -         |   -13.69 | card, fokiu, jz, stormzyn, t9rnay      |
|           73 |      365 | 2024-07-20 | KRÜ               | W   | 1.000      | 0.333        | 0.023 (0.008)    | 0.444 (0.148)    | 0 (0.000) |    16.11 | card, fokiu, jz, stormzyn, t9rnay      |
|           72 |      397 | 2024-07-19 | BESTIA            | W   | 1.000      | 0.333        | 0.093 (0.031)    | 0.731 (0.244)    | 0 (0.000) |    21.47 | card, fokiu, jz, stormzyn, t9rnay      |
|           71 |      507 | 2024-07-17 | SPORT             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.94 | card, fokiu, jz, stormzyn, t9rnay      |
|           70 |      533 | 2024-07-17 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -1.39 | card, fokiu, jz, stormzyn, t9rnay      |
|           69 |      573 | 2024-07-16 | Hype              | L   | 1.000      | -            | -                | -                | -         |   -11.75 | card, fokiu, jz, stormzyn, t9rnay      |
|           68 |      678 | 2024-07-12 | KRÜ               | L   | 1.000      | -            | -                | -                | -         |   -13.07 | card, fokiu, jz, stormzyn, t9rnay      |
|           67 |      688 | 2024-07-11 | Case              | W   | 1.000      | 0.371        | 0.030 (0.011)    | 0.720 (0.267)    | 0 (0.000) |    18.09 | card, fokiu, jz, stormzyn, t9rnay      |
|           66 |      695 | 2024-07-11 | Hype              | W   | 1.000      | 0.371        | 0.025 (0.009)    | 0.477 (0.177)    | 0 (0.000) |    20.06 | card, fokiu, jz, stormzyn, t9rnay      |
|           65 |      707 | 2024-07-10 | Vikings KR        | W   | 1.000      | 0.371        | -                | 0.458 (0.170)    | 0 (0.000) |    18.26 | card, fokiu, jz, stormzyn, t9rnay      |
|           64 |      713 | 2024-07-10 | 9z Academy        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.68 | card, fokiu, jz, stormzyn, t9rnay      |
|           63 |      737 | 2024-07-09 | Case              | L   | 1.000      | -            | -                | -                | -         |   -11.72 | card, fokiu, jz, stormzyn, t9rnay      |
|           62 |      772 | 2024-07-06 | ODDIK             | L   | 1.000      | -            | -                | -                | -         |    -8.11 | card, fokiu, jz, stormzyn, t9rnay      |
|           61 |      804 | 2024-06-27 | Bounty Hunters    | L   | 0.974      | -            | -                | -                | -         |    -9.86 | card, fokiu, jz, stormzyn, t9rnay      |
|           60 |     1025 | 2024-06-10 | ODDIK             | L   | 0.860      | -            | -                | -                | -         |    -8.09 | card, fokiu, jz, stormzyn, t9rnay      |
|           59 |     1065 | 2024-06-09 | Solid             | W   | 0.853      | 0.450        | 0.027 (0.010)    | 0.817 (0.314)    | -         |    16.56 | card, fokiu, jz, stormzyn, t9rnay      |
|           58 |     1115 | 2024-06-08 | ODDIK             | L   | 0.848      | -            | -                | -                | -         |    -8.22 | card, fokiu, jz, stormzyn, t9rnay      |
|           57 |     1123 | 2024-06-08 | Bounty Hunters    | L   | 0.847      | -            | -                | -                | -         |    -8.94 | card, fokiu, jz, stormzyn, t9rnay      |
|           56 |     1206 | 2024-06-07 | Galorys           | W   | 0.838      | 0.450        | 0.030 (0.011)    | 0.552 (0.208)    | -         |    15.98 | card, fokiu, jz, stormzyn, t9rnay      |
|           55 |     1258 | 2024-06-06 | Fluxo             | L   | 0.833      | -            | -                | -                | -         |    -4.30 | card, fokiu, jz, stormzyn, t9rnay      |
|           54 |     1387 | 2024-06-03 | Vikings KR        | W   | 0.815      | 0.371        | -                | 0.458 (0.138)    | -         |    13.77 | card, fokiu, jz, stormzyn, t9rnay      |
|           53 |     1451 | 2024-06-01 | ex-Corinthians    | W   | 0.799      | -            | -                | -                | -         |     5.56 | card, fokiu, jz, stormzyn, t9rnay      |
|           52 |     1494 | 2024-05-30 | Hype              | L   | 0.788      | -            | -                | -                | -         |    -8.86 | card, fokiu, jz, stormzyn, t9rnay      |
|           51 |     1547 | 2024-05-28 | Yawara            | W   | 0.774      | -            | -                | -                | -         |     4.41 | card, fokiu, jz, stormzyn, t9rnay      |
|           50 |     1668 | 2024-05-22 | Solid             | L   | 0.734      | -            | -                | -                | -         |    -8.12 | card, fokiu, jz, stormzyn, t9rnay      |
|           49 |     1674 | 2024-05-22 | Solid             | L   | 0.734      | -            | -                | -                | -         |    -8.62 | card, fokiu, stormzyn, t9rnay, zede    |
|           48 |     1751 | 2024-05-20 | 9z                | L   | 0.721      | -            | -                | -                | -         |    -0.51 | card, fokiu, stormzyn, t9rnay, zede    |
|           47 |     1755 | 2024-05-20 | 9z                | L   | 0.720      | -            | -                | -                | -         |    -0.51 | card, fokiu, stormzyn, t9rnay, zede    |
|           46 |     1876 | 2024-05-16 | Sharks            | L   | 0.694      | -            | -                | -                | -         |    -5.02 | card, fokiu, stormzyn, t9rnay, zede    |
|           45 |     1879 | 2024-05-16 | Sharks            | L   | 0.694      | -            | -                | -                | -         |    -5.25 | card, fokiu, stormzyn, t9rnay, zede    |
|           44 |     1973 | 2024-05-14 | Imperial          | L   | 0.681      | -            | -                | -                | -         |    -1.25 | card, fokiu, stormzyn, t9rnay, zede    |
|           43 |     1976 | 2024-05-14 | Imperial          | L   | 0.681      | -            | -                | -                | -         |    -1.26 | card, fokiu, stormzyn, t9rnay, zede    |
|           42 |     1989 | 2024-05-14 | Hype              | L   | 0.680      | -            | -                | -                | -         |    -8.54 | card, fokiu, stormzyn, t9rnay, zede    |
|           41 |     2023 | 2024-05-13 | Sharks            | L   | 0.673      | -            | -                | -                | -         |    -6.05 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           40 |     2072 | 2024-05-11 | Sharks            | L   | 0.660      | -            | -                | -                | -         |    -6.24 | card, fokiu, stormzyn, t9rnay, zede    |
|           39 |     2120 | 2024-05-09 | KRÜ               | L   | 0.645      | -            | -                | -                | -         |    -8.05 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           38 |     2154 | 2024-05-07 | paiN              | L   | 0.633      | -            | -                | -                | -         |    -0.74 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           37 |     2174 | 2024-05-06 | paiN              | L   | 0.626      | -            | -                | -                | -         |    -0.74 | fokiu, jz, saadzin, stormzyn, zede     |
|           36 |     2175 | 2024-05-06 | paiN              | L   | 0.626      | -            | -                | -                | -         |    -0.74 | fokiu, jz, saadzin, stormzyn, zede     |
|           35 |     2198 | 2024-05-05 | Galorys           | W   | 0.619      | 0.435        | 0.030 (0.008)    | 0.552 (0.149)    | -         |    11.77 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           34 |     2382 | 2024-04-26 | ODDIK             | L   | 0.560      | -            | -                | -                | -         |    -5.27 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           33 |     2384 | 2024-04-26 | ODDIK             | L   | 0.560      | -            | -                | -                | -         |    -5.49 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           32 |     2646 | 2024-04-17 | ODDIK             | L   | 0.500      | -            | -                | -                | -         |    -5.30 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           31 |     2679 | 2024-04-16 | Sharks            | W   | 0.494      | -            | -                | -                | -         |     6.54 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           30 |     2749 | 2024-04-12 | RED Canids        | L   | 0.466      | -            | -                | -                | -         |    -2.69 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           29 |     2858 | 2024-04-09 | RED Canids        | L   | 0.447      | -            | -                | -                | -         |    -2.65 | fokiu, jz, saadzin, stormzyn, zede     |
|           28 |     2863 | 2024-04-09 | RED Canids        | L   | 0.447      | -            | -                | -                | -         |    -2.71 | fokiu, jz, saadzin, stormzyn, zede     |
|           27 |     2896 | 2024-04-08 | MIBR              | L   | 0.441      | -            | -                | -                | -         |    -0.52 | fokiu, jz, saadzin, stormzyn, zede     |
|           26 |     2952 | 2024-04-06 | RED Canids        | W   | 0.426      | 0.435        | 0.079 (0.015)    | 0.738 (0.137)    | -         |    10.98 | fokiu, jz, saadzin, stormzyn, zede     |
|           25 |     3168 | 2024-03-27 | BESTIA            | W   | 0.361      | 0.450        | 0.093 (0.015)    | -                | -         |     8.43 | fokiu, jz, saadzin, stormzyn, zede     |
|           24 |     3173 | 2024-03-27 | BESTIA            | L   | 0.361      | -            | -                | -                | -         |    -2.96 | fokiu, jz, saadzin, stormzyn, zede     |
|           23 |     3406 | 2024-03-14 | Galorys           | L   | 0.274      | -            | -                | -                | -         |    -3.64 | fokiu, jz, saadzin, stormzyn, zede     |
|           22 |     3409 | 2024-03-14 | Galorys           | L   | 0.274      | -            | -                | -                | -         |    -3.72 | fokiu, jz, saadzin, stormzyn, zede     |
|           21 |     3502 | 2024-03-11 | Solid             | L   | 0.253      | -            | -                | -                | -         |    -3.38 | fokiu, jz, saadzin, stormzyn, zede     |
|           20 |     3537 | 2024-03-09 | RED Canids        | L   | 0.241      | -            | -                | -                | -         |    -1.53 | fokiu, jz, saadzin, stormzyn, zede     |
|           19 |     3597 | 2024-03-07 | Solid             | W   | 0.226      | -            | -                | -                | -         |     4.18 | fokiu, jz, saadzin, stormzyn, zede     |
|           18 |     3651 | 2024-03-05 | 2GAME             | L   | 0.214      | -            | -                | -                | -         |    -4.72 | fokiu, jz, saadzin, stormzyn, zede     |
|           17 |     3653 | 2024-03-05 | 2GAME             | L   | 0.214      | -            | -                | -                | -         |    -4.79 | fokiu, jz, saadzin, stormzyn, zede     |
|           16 |     3858 | 2024-02-24 | Corinthians       | W   | 0.148      | -            | -                | -                | -         |     0.63 | fokiu, jz, saadzin, stormzyn, zede     |
|           15 |     3867 | 2024-02-24 | Corinthians       | W   | 0.147      | -            | -                | -                | -         |     0.63 | fokiu, jz, saadzin, stormzyn, zede     |
|           14 |     3919 | 2024-02-21 | Fluxo             | W   | 0.128      | -            | -                | -                | -         |     3.05 | fokiu, jz, saadzin, stormzyn, zede     |
|           13 |     3923 | 2024-02-21 | Fluxo             | L   | 0.128      | -            | -                | -                | -         |    -0.98 | fokiu, jz, saadzin, stormzyn, zede     |
|           12 |     3931 | 2024-02-21 | BESTIA            | L   | 0.126      | -            | -                | -                | -         |    -1.06 | fokiu, jz, saadzin, stormzyn, zede     |
|           11 |     3957 | 2024-02-20 | Case              | L   | 0.120      | -            | -                | -                | -         |    -1.35 | fokiu, jz, saadzin, stormzyn, zede     |
|           10 |     4021 | 2024-02-17 | Sharks            | W   | 0.101      | -            | -                | -                | -         |     2.14 | fokiu, jz, saadzin, stormzyn, zede     |
|            9 |     4052 | 2024-02-16 | Solid             | L   | 0.093      | -            | -                | -                | -         |    -1.24 | fokiu, jz, saadzin, stormzyn, zede     |
|            8 |     4055 | 2024-02-16 | Sharks            | L   | 0.093      | -            | -                | -                | -         |    -0.97 | fokiu, jz, saadzin, stormzyn, zede     |
|            7 |     4081 | 2024-02-15 | Fluxo             | L   | 0.087      | -            | -                | -                | -         |    -0.68 | fokiu, jz, saadzin, stormzyn, zede     |
|            6 |     4112 | 2024-02-14 | Hawks             | W   | 0.081      | -            | -                | -                | -         |     0.39 | fokiu, jz, saadzin, stormzyn, zede     |
|            5 |     4151 | 2024-02-13 | Case              | L   | 0.074      | -            | -                | -                | -         |    -0.85 | fokiu, jz, saadzin, stormzyn, zede     |
|            4 |     4155 | 2024-02-13 | Case              | W   | 0.074      | -            | -                | -                | -         |     1.50 | fokiu, jz, saadzin, stormzyn, zede     |
|            3 |     4161 | 2024-02-13 | Corinthians       | W   | 0.073      | -            | -                | -                | -         |     0.31 | fokiu, jz, saadzin, stormzyn, zede     |
|            2 |     4172 | 2024-02-12 | Corinthians       | W   | 0.067      | -            | -                | -                | -         |     0.29 | fokiu, jz, saadzin, stormzyn, zede     |
|            1 |     4274 | 2024-02-03 | 9z                | L   | 0.009      | -            | -                | -                | -         |    -0.00 | fokiu, jz, saadzin, stormzyn, zede     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,256.18)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-22 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-07-14 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-09 |      0.854 | $300.00        | $256.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
