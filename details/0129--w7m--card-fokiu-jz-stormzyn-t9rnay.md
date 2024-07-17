### Roster Details<br />
Team Name: W7M<br />
Roster: card, fokiu, jz, stormzyn, t9rnay<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [129](../standings_global.md)<br />
Regional Rank: [33]( ../standings_americas.md)<br />
Final Rank Value:  810.3<br />
<br />
Final Rank Value (810.3) = Starting Rank Value (842.5) + Head To Head Adjustments (-32.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.344[<sup>2</sup>](#table1)
- Opponent Network: 0.176[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.206<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 842.5
- 400 + ( ( 0.206 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 842.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           80 |        3 | 2024-07-17 | paiN           | L   | 1.000      | -            | -                | -                | -         |    -0.84 | card, fokiu, jz, stormzyn, t9rnay      |
|           79 |       43 | 2024-07-16 | Hype           | L   | 1.000      | -            | -                | -                | -         |   -12.45 | card, fokiu, jz, stormzyn, t9rnay      |
|           78 |      148 | 2024-07-12 | KRÜ            | L   | 1.000      | -            | -                | -                | -         |   -12.71 | card, fokiu, jz, stormzyn, t9rnay      |
|           77 |      158 | 2024-07-11 | Case           | W   | 1.000      | 0.371        | 0.034 (0.012)    | 0.697 (0.258)    | 0 (0.000) |    18.28 | card, fokiu, jz, stormzyn, t9rnay      |
|           76 |      165 | 2024-07-11 | Hype           | W   | 1.000      | 0.371        | -                | 0.427 (0.158)    | 0 (0.000) |    19.36 | card, fokiu, jz, stormzyn, t9rnay      |
|           75 |      177 | 2024-07-10 | Vikings KR     | W   | 1.000      | 0.371        | 0.012 (0.005)    | 0.430 (0.159)    | 0 (0.000) |    18.15 | card, fokiu, jz, stormzyn, t9rnay      |
|           74 |      183 | 2024-07-10 | 9z Academy     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.34 | card, fokiu, jz, stormzyn, t9rnay      |
|           73 |      207 | 2024-07-09 | Case           | L   | 1.000      | -            | -                | -                | -         |   -11.73 | card, fokiu, jz, stormzyn, t9rnay      |
|           72 |      242 | 2024-07-06 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |    -7.58 | card, fokiu, jz, stormzyn, t9rnay      |
|           71 |      274 | 2024-06-27 | Bounty Hunters | L   | 1.000      | -            | -                | -                | -         |    -9.65 | card, fokiu, jz, stormzyn, t9rnay      |
|           70 |      495 | 2024-06-10 | ODDIK          | L   | 0.954      | -            | -                | -                | -         |    -8.39 | card, fokiu, jz, stormzyn, t9rnay      |
|           69 |      535 | 2024-06-09 | Solid          | W   | 0.947      | 0.450        | 0.047 (0.020)    | 0.622 (0.265)    | 0 (0.000) |    18.82 | card, fokiu, jz, stormzyn, t9rnay      |
|           68 |      585 | 2024-06-08 | ODDIK          | L   | 0.942      | -            | -                | -                | -         |    -8.53 | card, fokiu, jz, stormzyn, t9rnay      |
|           67 |      593 | 2024-06-08 | Bounty Hunters | L   | 0.941      | -            | -                | -                | -         |    -9.35 | card, fokiu, jz, stormzyn, t9rnay      |
|           66 |      676 | 2024-06-07 | Galorys        | W   | 0.933      | 0.450        | 0.026 (0.011)    | 0.535 (0.224)    | 0 (0.000) |    17.53 | card, fokiu, jz, stormzyn, t9rnay      |
|           65 |      728 | 2024-06-06 | Fluxo          | L   | 0.927      | -            | -                | -                | -         |    -3.90 | card, fokiu, jz, stormzyn, t9rnay      |
|           64 |      857 | 2024-06-03 | Vikings KR     | W   | 0.909      | 0.371        | -                | 0.430 (0.145)    | 0 (0.000) |    15.11 | card, fokiu, jz, stormzyn, t9rnay      |
|           63 |      921 | 2024-06-01 | ex-Corinthians | W   | 0.893      | -            | -                | -                | 0 (0.000) |     6.38 | card, fokiu, jz, stormzyn, t9rnay      |
|           62 |      964 | 2024-05-30 | Hype           | L   | 0.882      | -            | -                | -                | -         |   -10.99 | card, fokiu, jz, stormzyn, t9rnay      |
|           61 |     1017 | 2024-05-28 | Yawara         | W   | 0.868      | -            | -                | -                | 0 (0.000) |     4.70 | card, fokiu, jz, stormzyn, t9rnay      |
|           60 |     1138 | 2024-05-22 | Solid          | L   | 0.829      | -            | -                | -                | -         |    -8.48 | card, fokiu, jz, stormzyn, t9rnay      |
|           59 |     1144 | 2024-05-22 | Solid          | L   | 0.828      | -            | -                | -                | -         |    -9.05 | card, fokiu, stormzyn, t9rnay, zede    |
|           58 |     1221 | 2024-05-20 | 9z             | L   | 0.815      | -            | -                | -                | -         |    -0.29 | card, fokiu, stormzyn, t9rnay, zede    |
|           57 |     1225 | 2024-05-20 | 9z             | L   | 0.815      | -            | -                | -                | -         |    -0.29 | card, fokiu, stormzyn, t9rnay, zede    |
|           56 |     1346 | 2024-05-16 | Sharks         | L   | 0.788      | -            | -                | -                | -         |    -5.15 | card, fokiu, stormzyn, t9rnay, zede    |
|           55 |     1349 | 2024-05-16 | Sharks         | L   | 0.788      | -            | -                | -                | -         |    -5.39 | card, fokiu, stormzyn, t9rnay, zede    |
|           54 |     1443 | 2024-05-14 | Imperial       | L   | 0.776      | -            | -                | -                | -         |    -0.67 | card, fokiu, stormzyn, t9rnay, zede    |
|           53 |     1446 | 2024-05-14 | Imperial       | L   | 0.776      | -            | -                | -                | -         |    -0.68 | card, fokiu, stormzyn, t9rnay, zede    |
|           52 |     1459 | 2024-05-14 | Hype           | L   | 0.775      | -            | -                | -                | -         |   -10.98 | card, fokiu, stormzyn, t9rnay, zede    |
|           51 |     1493 | 2024-05-13 | Sharks         | L   | 0.767      | -            | -                | -                | -         |    -6.39 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           50 |     1542 | 2024-05-11 | Sharks         | L   | 0.754      | -            | -                | -                | -         |    -6.63 | card, fokiu, stormzyn, t9rnay, zede    |
|           49 |     1590 | 2024-05-09 | KRÜ            | L   | 0.740      | -            | -                | -                | -         |    -9.08 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           48 |     1624 | 2024-05-07 | paiN           | L   | 0.728      | -            | -                | -                | -         |    -0.42 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           47 |     1644 | 2024-05-06 | paiN           | L   | 0.721      | -            | -                | -                | -         |    -0.42 | fokiu, jz, saadzin, stormzyn, zede     |
|           46 |     1645 | 2024-05-06 | paiN           | L   | 0.721      | -            | -                | -                | -         |    -0.42 | fokiu, jz, saadzin, stormzyn, zede     |
|           45 |     1668 | 2024-05-05 | Galorys        | W   | 0.713      | 0.435        | 0.026 (0.008)    | 0.535 (0.166)    | 0 (0.000) |    13.46 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           44 |     1852 | 2024-04-26 | ODDIK          | L   | 0.655      | -            | -                | -                | -         |    -5.58 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           43 |     1854 | 2024-04-26 | ODDIK          | L   | 0.655      | -            | -                | -                | -         |    -5.85 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           42 |     2116 | 2024-04-17 | ODDIK          | L   | 0.595      | -            | -                | -                | -         |    -5.85 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           41 |     2149 | 2024-04-16 | Sharks         | W   | 0.589      | -            | -                | -                | -         |     8.30 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           40 |     2219 | 2024-04-12 | RED Canids     | L   | 0.561      | -            | -                | -                | -         |    -2.32 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           39 |     2328 | 2024-04-09 | RED Canids     | L   | 0.542      | -            | -                | -                | -         |    -2.30 | fokiu, jz, saadzin, stormzyn, zede     |
|           38 |     2333 | 2024-04-09 | RED Canids     | L   | 0.542      | -            | -                | -                | -         |    -2.35 | fokiu, jz, saadzin, stormzyn, zede     |
|           37 |     2366 | 2024-04-08 | MIBR           | L   | 0.536      | -            | -                | -                | -         |    -0.33 | fokiu, jz, saadzin, stormzyn, zede     |
|           36 |     2422 | 2024-04-06 | RED Canids     | W   | 0.521      | 0.435        | 0.123 (0.028)    | 0.714 (0.162)    | -         |    14.32 | fokiu, jz, saadzin, stormzyn, zede     |
|           35 |     2638 | 2024-03-27 | BESTIA         | W   | 0.455      | 0.450        | 0.050 (0.010)    | 0.645 (0.132)    | -         |    10.73 | fokiu, jz, saadzin, stormzyn, zede     |
|           34 |     2643 | 2024-03-27 | BESTIA         | L   | 0.455      | -            | -                | -                | -         |    -3.62 | fokiu, jz, saadzin, stormzyn, zede     |
|           33 |     2876 | 2024-03-14 | Galorys        | L   | 0.369      | -            | -                | -                | -         |    -5.02 | fokiu, jz, saadzin, stormzyn, zede     |
|           32 |     2879 | 2024-03-14 | Galorys        | L   | 0.369      | -            | -                | -                | -         |    -5.18 | fokiu, jz, saadzin, stormzyn, zede     |
|           31 |     2972 | 2024-03-11 | Solid          | L   | 0.347      | -            | -                | -                | -         |    -4.27 | fokiu, jz, saadzin, stormzyn, zede     |
|           30 |     3007 | 2024-03-09 | RED Canids     | L   | 0.336      | -            | -                | -                | -         |    -1.45 | fokiu, jz, saadzin, stormzyn, zede     |
|           29 |     3067 | 2024-03-07 | Solid          | W   | 0.321      | 0.435        | 0.047 (0.006)    | 0.622 (0.087)    | -         |     6.31 | fokiu, jz, saadzin, stormzyn, zede     |
|           28 |     3121 | 2024-03-05 | 2GAME          | L   | 0.309      | -            | -                | -                | -         |    -6.45 | fokiu, jz, saadzin, stormzyn, zede     |
|           27 |     3123 | 2024-03-05 | 2GAME          | L   | 0.309      | -            | -                | -                | -         |    -6.60 | fokiu, jz, saadzin, stormzyn, zede     |
|           26 |     3328 | 2024-02-24 | Corinthians    | W   | 0.242      | -            | -                | -                | -         |     1.04 | fokiu, jz, saadzin, stormzyn, zede     |
|           25 |     3337 | 2024-02-24 | Corinthians    | W   | 0.242      | -            | -                | -                | -         |     1.05 | fokiu, jz, saadzin, stormzyn, zede     |
|           24 |     3389 | 2024-02-21 | Fluxo          | W   | 0.222      | 0.450        | 0.169 (0.017)    | -                | -         |     5.55 | fokiu, jz, saadzin, stormzyn, zede     |
|           23 |     3393 | 2024-02-21 | Fluxo          | L   | 0.222      | -            | -                | -                | -         |    -1.46 | fokiu, jz, saadzin, stormzyn, zede     |
|           22 |     3401 | 2024-02-21 | BESTIA         | L   | 0.220      | -            | -                | -                | -         |    -1.82 | fokiu, jz, saadzin, stormzyn, zede     |
|           21 |     3427 | 2024-02-20 | Case           | L   | 0.215      | -            | -                | -                | -         |    -2.28 | fokiu, jz, saadzin, stormzyn, zede     |
|           20 |     3491 | 2024-02-17 | Sharks         | W   | 0.196      | -            | -                | -                | -         |     4.28 | fokiu, jz, saadzin, stormzyn, zede     |
|           19 |     3522 | 2024-02-16 | Solid          | L   | 0.188      | -            | -                | -                | -         |    -2.26 | fokiu, jz, saadzin, stormzyn, zede     |
|           18 |     3525 | 2024-02-16 | Sharks         | L   | 0.187      | -            | -                | -                | -         |    -1.82 | fokiu, jz, saadzin, stormzyn, zede     |
|           17 |     3551 | 2024-02-15 | Fluxo          | L   | 0.181      | -            | -                | -                | -         |    -1.24 | fokiu, jz, saadzin, stormzyn, zede     |
|           16 |     3582 | 2024-02-14 | Hawks          | W   | 0.175      | -            | -                | -                | -         |     0.85 | fokiu, jz, saadzin, stormzyn, zede     |
|           15 |     3621 | 2024-02-13 | Case           | L   | 0.169      | -            | -                | -                | -         |    -1.84 | fokiu, jz, saadzin, stormzyn, zede     |
|           14 |     3625 | 2024-02-13 | Case           | W   | 0.169      | -            | -                | -                | -         |     3.52 | fokiu, jz, saadzin, stormzyn, zede     |
|           13 |     3631 | 2024-02-13 | Corinthians    | W   | 0.167      | -            | -                | -                | -         |     0.73 | fokiu, jz, saadzin, stormzyn, zede     |
|           12 |     3642 | 2024-02-12 | Corinthians    | W   | 0.161      | -            | -                | -                | -         |     0.71 | fokiu, jz, saadzin, stormzyn, zede     |
|           11 |     3744 | 2024-02-03 | 9z             | L   | 0.103      | -            | -                | -                | -         |    -0.02 | fokiu, jz, saadzin, stormzyn, zede     |
|           10 |     3807 | 2024-02-01 | paiN           | W   | 0.089      | 0.143        | 0.476 (0.006)    | -                | -         |     2.77 | fokiu, jz, saadzin, stormzyn, zede     |
|            9 |     3809 | 2024-02-01 | RED Canids     | W   | 0.089      | -            | -                | -                | -         |     2.43 | fokiu, jz, saadzin, stormzyn, zede     |
|            8 |     3814 | 2024-02-01 | MIBR           | L   | 0.088      | -            | -                | -                | -         |    -0.05 | fokiu, jz, saadzin, stormzyn, zede     |
|            7 |     3962 | 2024-01-23 | paiN           | L   | 0.028      | -            | -                | -                | -         |    -0.01 | fokiu, jz, saadzin, stormzyn, zede     |
|            6 |     3985 | 2024-01-22 | RED Canids     | W   | 0.022      | -            | -                | -                | -         |     0.61 | fokiu, jz, saadzin, stormzyn, zede     |
|            5 |     4013 | 2024-01-21 | 9z             | L   | 0.016      | -            | -                | -                | -         |    -0.00 | fokiu, jz, saadzin, stormzyn, zede     |
|            4 |     4016 | 2024-01-21 | BESTIA         | L   | 0.015      | -            | -                | -                | -         |    -0.12 | fokiu, jz, saadzin, stormzyn, zede     |
|            3 |     4057 | 2024-01-20 | TIMACETA       | W   | 0.008      | -            | -                | -                | -         |     0.03 | fokiu, jz, saadzin, stormzyn, zede     |
|            2 |     4093 | 2024-01-19 | Case           | W   | 0.003      | -            | -                | -                | -         |     0.01 | fokiu, jz, saadzin, stormzyn, zede     |
|            1 |     4113 | 2024-01-19 | paiN           | L   | 0.001      | -            | -                | -                | -         |     0.00 | fokiu, jz, saadzin, stormzyn, zede     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,284.53)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-14 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-09 |      0.948 | $300.00        | $284.53         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
