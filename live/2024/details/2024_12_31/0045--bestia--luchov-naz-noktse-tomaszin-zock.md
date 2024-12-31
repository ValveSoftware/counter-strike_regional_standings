### Roster Details<br />
Team Name: BESTIA<br />
Roster: luchov, naz, Noktse, tomaszin, zock<br />
Global Rank: [45](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_31.md)<br />
Regional Rank: [12]( ../../standings_americas_2024_12_31.md)<br />
<br />
Final Rank Value:  1139.8<br />
<br />
Final Rank Value (1139.8) = Starting Rank Value (1039.0) + Head To Head Adjustments (100.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.503[<sup>1</sup>](#table2)
- Bounty Collected: 0.404[<sup>2</sup>](#table1)
- Opponent Network: 0.147[<sup>2</sup>](#table1)
- LAN Wins: 0.259[<sup>2</sup>](#table1)

The average of these factors is 0.328<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1039.0
- 400 + ( ( 0.328 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 1039.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           86 |      746 | 2024-11-14 | M80               | L   | 0.903      | -            | -                | -                | -         |   -12.11 | luchov, naz, Noktse, tomaszin, zock   |
|           85 |      789 | 2024-11-13 | BOSS              | W   | 0.896      | -            | -                | -                | 1 (0.896) |    10.84 | luchov, naz, Noktse, tomaszin, zock   |
|           84 |      821 | 2024-11-12 | Liquid            | L   | 0.889      | -            | -                | -                | -         |    -1.92 | luchov, naz, Noktse, tomaszin, zock   |
|           83 |      848 | 2024-11-12 | Nouns             | W   | 0.884      | -            | -                | -                | 1 (0.884) |    12.08 | luchov, naz, Noktse, tomaszin, zock   |
|           82 |      856 | 2024-11-11 | Complexity        | L   | 0.883      | -            | -                | -                | -         |    -4.85 | luchov, naz, Noktse, tomaszin, zock   |
|           81 |     1171 | 2024-10-26 | 3DMAX             | L   | 0.774      | -            | -                | -                | -         |    -5.06 | luchov, naz, Noktse, tomaszin, zock   |
|           80 |     1200 | 2024-10-25 | M80               | W   | 0.767      | 0.477        | 0.141 (0.051)    | 0.501 (0.183)    | 0 (0.000) |    14.65 | luchov, naz, Noktse, tomaszin, zock   |
|           79 |     1219 | 2024-10-24 | BIG               | L   | 0.760      | -            | -                | -                | -         |    -4.92 | luchov, naz, Noktse, tomaszin, zock   |
|           78 |     1223 | 2024-10-24 | M80               | W   | 0.758      | 0.477        | 0.141 (0.051)    | 0.501 (0.181)    | 0 (0.000) |    15.12 | luchov, naz, Noktse, tomaszin, zock   |
|           77 |     1290 | 2024-10-19 | MIBR              | L   | 0.728      | -            | -                | -                | -         |    -3.72 | luchov, naz, Noktse, tomaszin, zock   |
|           76 |     1316 | 2024-10-18 | RED Canids        | W   | 0.721      | 0.450        | 0.069 (0.022)    | 0.362 (0.117)    | 0 (0.000) |    10.90 | luchov, naz, Noktse, tomaszin, zock   |
|           75 |     1345 | 2024-10-17 | inSanitY          | W   | 0.714      | -            | -                | -                | 0 (0.000) |     4.29 | luchov, naz, Noktse, tomaszin, zock   |
|           74 |     1376 | 2024-10-16 | ODDIK             | W   | 0.708      | 0.450        | 0.093 (0.030)    | 0.451 (0.144)    | 0 (0.000) |     7.68 | luchov, naz, Noktse, tomaszin, zock   |
|           73 |     1402 | 2024-10-15 | RED Canids        | L   | 0.701      | -            | -                | -                | -         |   -11.70 | luchov, naz, Noktse, tomaszin, zock   |
|           72 |     1492 | 2024-10-09 | KRÜ               | W   | 0.661      | -            | -                | -                | 0 (0.000) |     3.45 | luchov, naz, Noktse, tomaszin, zock   |
|           71 |     1499 | 2024-10-09 | KRÜ               | W   | 0.661      | -            | -                | -                | 0 (0.000) |     3.56 | luchov, naz, Noktse, tomaszin, zock   |
|           70 |     1561 | 2024-10-07 | RED Canids        | W   | 0.648      | 0.450        | 0.069 (0.020)    | 0.362 (0.106)    | -         |    10.72 | luchov, naz, Noktse, tomaszin, zock   |
|           69 |     1562 | 2024-10-07 | RED Canids        | W   | 0.648      | 0.450        | 0.069 (0.020)    | 0.362 (0.105)    | -         |    11.35 | luchov, naz, Noktse, tomaszin, zock   |
|           68 |     1616 | 2024-10-05 | RED Canids        | L   | 0.634      | -            | -                | -                | -         |    -8.99 | luchov, naz, Noktse, tomaszin, zock   |
|           67 |     1658 | 2024-10-04 | paiN              | W   | 0.627      | 0.389        | 0.243 (0.059)    | 0.696 (0.169)    | 1 (0.627) |    17.81 | luchov, naz, Noktse, tomaszin, zock   |
|           66 |     1729 | 2024-10-02 | Case              | W   | 0.614      | -            | -                | -                | -         |     3.63 | luchov, naz, Noktse, tomaszin, zock   |
|           65 |     1736 | 2024-10-02 | Case              | W   | 0.613      | -            | -                | -                | -         |     3.75 | luchov, naz, Noktse, tomaszin, zock   |
|           64 |     1775 | 2024-10-01 | Solid             | W   | 0.607      | 0.450        | -                | 0.614 (0.168)    | -         |     6.21 | luchov, naz, Noktse, tomaszin, zock   |
|           63 |     1779 | 2024-10-01 | Solid             | W   | 0.607      | 0.450        | -                | 0.614 (0.168)    | -         |     6.51 | luchov, naz, Noktse, tomaszin, zock   |
|           62 |     1941 | 2024-09-26 | Sharks            | W   | 0.575      | -            | -                | -                | -         |    11.60 | luchov, naz, Noktse, tomaszin, zock   |
|           61 |     1948 | 2024-09-26 | MIBR              | W   | 0.574      | 0.143        | 0.194 (0.016)    | -                | -         |    16.98 | luchov, naz, Noktse, tomaszin, zock   |
|           60 |     1999 | 2024-09-25 | Imperial          | W   | 0.568      | 0.450        | 0.151 (0.039)    | 0.492 (0.126)    | -         |    13.48 | luchov, naz, Noktse, tomaszin, zock   |
|           59 |     2003 | 2024-09-25 | Imperial          | L   | 0.568      | -            | -                | -                | -         |    -4.38 | luchov, naz, Noktse, tomaszin, zock   |
|           58 |     2008 | 2024-09-25 | Imperial          | L   | 0.567      | -            | -                | -                | -         |    -4.54 | luchov, naz, Noktse, tomaszin, zock   |
|           57 |     2050 | 2024-09-24 | Hype              | W   | 0.561      | -            | -                | -                | -         |     3.46 | luchov, naz, Noktse, tomaszin, zock   |
|           56 |     2054 | 2024-09-24 | Hype              | L   | 0.561      | -            | -                | -                | -         |   -14.50 | luchov, naz, Noktse, tomaszin, zock   |
|           55 |     2235 | 2024-09-18 | paiN              | L   | 0.521      | -            | -                | -                | -         |    -0.92 | luchov, naz, Noktse, tomaszin, zock   |
|           54 |     2239 | 2024-09-18 | paiN              | L   | 0.521      | -            | -                | -                | -         |    -0.93 | luchov, naz, Noktse, tomaszin, zock   |
|           53 |     2268 | 2024-09-17 | inSanitY          | W   | 0.515      | -            | -                | -                | -         |     3.96 | luchov, naz, Noktse, tomaszin, zock   |
|           52 |     2269 | 2024-09-17 | inSanitY          | L   | 0.514      | -            | -                | -                | -         |   -12.51 | luchov, naz, Noktse, tomaszin, zock   |
|           51 |     2479 | 2024-09-10 | Dusty Roots       | W   | 0.468      | -            | -                | -                | -         |     3.28 | luchov, naz, Noktse, tomaszin, zock   |
|           50 |     2481 | 2024-09-10 | Dusty Roots       | W   | 0.467      | -            | -                | -                | -         |     3.38 | luchov, naz, Noktse, tomaszin, zock   |
|           49 |     2654 | 2024-09-04 | Fluxo             | L   | 0.427      | -            | -                | -                | -         |    -5.99 | luchov, naz, Noktse, tomaszin, zock   |
|           48 |     2677 | 2024-09-03 | Bounty Hunters    | W   | 0.422      | -            | -                | -                | -         |     1.61 | luchov, naz, Noktse, tomaszin, zock   |
|           47 |     2714 | 2024-09-02 | paiN Academy      | W   | 0.414      | -            | -                | -                | -         |     0.36 | luchov, naz, Noktse, tomaszin, zock   |
|           46 |     2921 | 2024-08-27 | KRÜ               | W   | 0.373      | -            | -                | -                | -         |     2.63 | luchov, naz, Noktse, tomaszin, zock   |
|           45 |     2981 | 2024-08-26 | Galorys           | W   | 0.367      | -            | -                | -                | -         |     1.55 | luchov, naz, Noktse, tomaszin, zock   |
|           44 |     2996 | 2024-08-26 | Vikings KR        | W   | 0.366      | -            | -                | -                | -         |     1.66 | luchov, naz, Noktse, tomaszin, zock   |
|           43 |     3399 | 2024-08-13 | MIBR              | W   | 0.282      | 0.450        | 0.194 (0.025)    | -                | -         |     8.42 | luchov, naz, Noktse, tomaszin, zock   |
|           42 |     3402 | 2024-08-13 | MIBR              | L   | 0.281      | -            | -                | -                | -         |    -0.45 | luchov, naz, Noktse, tomaszin, zock   |
|           41 |     3408 | 2024-08-13 | Patins da Ferrari | W   | 0.281      | -            | -                | -                | -         |     1.03 | luchov, naz, Noktse, tomaszin, zock   |
|           40 |     3490 | 2024-08-11 | Case              | W   | 0.267      | -            | -                | -                | -         |     1.78 | luchov, naz, Noktse, tomaszin, zock   |
|           39 |     3534 | 2024-08-09 | Patins da Ferrari | W   | 0.254      | -            | -                | -                | -         |     0.92 | luchov, naz, Noktse, tomaszin, zock   |
|           38 |     3598 | 2024-08-07 | 9z Academy        | W   | 0.240      | -            | -                | -                | -         |     0.43 | luchov, Luken, Noktse, tomaszin, zock |
|           37 |     3707 | 2024-08-04 | RED Canids        | L   | 0.221      | -            | -                | -                | -         |    -2.67 | luchov, naz, Noktse, tomaszin, zock   |
|           36 |     3737 | 2024-08-03 | Vikings KR        | W   | 0.215      | -            | -                | -                | -         |     1.03 | luchov, naz, Noktse, tomaszin, zock   |
|           35 |     3747 | 2024-08-03 | ODDIK             | L   | 0.214      | -            | -                | -                | -         |    -3.85 | luchov, naz, Noktse, tomaszin, zock   |
|           34 |     3772 | 2024-08-02 | Case              | W   | 0.208      | -            | -                | -                | -         |     1.34 | luchov, naz, Noktse, tomaszin, zock   |
|           33 |     3782 | 2024-08-02 | Solid             | L   | 0.207      | -            | -                | -                | -         |    -4.47 | luchov, naz, Noktse, tomaszin, zock   |
|           32 |     3805 | 2024-08-01 | Players           | W   | 0.202      | -            | -                | -                | -         |     0.97 | luchov, naz, Noktse, tomaszin, zock   |
|           31 |     3808 | 2024-08-01 | LaChampionsLiga   | W   | 0.201      | -            | -                | -                | -         |     0.69 | luchov, naz, Noktse, tomaszin, zock   |
|           30 |     3820 | 2024-08-01 | Fluxo             | L   | 0.200      | -            | -                | -                | -         |    -2.56 | luchov, naz, Noktse, tomaszin, zock   |
|           29 |     3904 | 2024-07-30 | Galorys           | L   | 0.188      | -            | -                | -                | -         |    -5.14 | luchov, naz, Noktse, tomaszin, zock   |
|           28 |     3907 | 2024-07-30 | Galorys           | W   | 0.188      | -            | -                | -                | -         |     0.79 | luchov, naz, Noktse, tomaszin, zock   |
|           27 |     3916 | 2024-07-30 | KRÜ               | W   | 0.187      | -            | -                | -                | -         |     1.21 | luchov, naz, Noktse, tomaszin, zock   |
|           26 |     3944 | 2024-07-29 | Intense           | W   | 0.182      | -            | -                | -                | -         |     0.66 | luchov, naz, Noktse, tomaszin, zock   |
|           25 |     3972 | 2024-07-28 | Vikings KR        | W   | 0.175      | -            | -                | -                | -         |     0.77 | luchov, naz, Noktse, tomaszin, zock   |
|           24 |     4054 | 2024-07-25 | Sharks            | L   | 0.155      | -            | -                | -                | -         |    -1.31 | luchov, naz, Noktse, tomaszin, zock   |
|           23 |     4062 | 2024-07-25 | Bad News Chickens | W   | 0.155      | -            | -                | -                | -         |     0.61 | luchov, naz, Noktse, tomaszin, zock   |
|           22 |     4132 | 2024-07-23 | Fluxo             | L   | 0.141      | -            | -                | -                | -         |    -1.80 | luchov, naz, Noktse, tomaszin, zock   |
|           21 |     4136 | 2024-07-23 | Hype              | W   | 0.141      | -            | -                | -                | -         |     0.76 | luchov, naz, Noktse, tomaszin, zock   |
|           20 |     4171 | 2024-07-22 | Fluxo             | W   | 0.133      | -            | -                | -                | -         |     2.54 | luchov, naz, Noktse, tomaszin, zock   |
|           19 |     4196 | 2024-07-21 | RED Canids        | W   | 0.126      | -            | -                | -                | -         |     2.45 | luchov, naz, Noktse, tomaszin, zock   |
|           18 |     4253 | 2024-07-19 | KRÜ               | W   | 0.114      | -            | -                | -                | -         |     0.76 | luchov, naz, Noktse, tomaszin, zock   |
|           17 |     4261 | 2024-07-19 | W7M               | L   | 0.113      | -            | -                | -                | -         |    -3.19 | luchov, naz, Noktse, tomaszin, zock   |
|           16 |     4312 | 2024-07-18 | Imperial          | L   | 0.107      | -            | -                | -                | -         |    -1.08 | luchov, naz, Noktse, tomaszin, zock   |
|           15 |     4314 | 2024-07-18 | Amigos de T2M4SS  | W   | 0.107      | -            | -                | -                | -         |     0.10 | luchov, naz, Noktse, tomaszin, zock   |
|           14 |     4318 | 2024-07-18 | ODDIK             | L   | 0.106      | -            | -                | -                | -         |    -2.02 | luchov, naz, Noktse, tomaszin, zock   |
|           13 |     4366 | 2024-07-17 | Fluxo             | L   | 0.101      | -            | -                | -                | -         |    -1.33 | luchov, naz, Noktse, tomaszin, zock   |
|           12 |     4372 | 2024-07-17 | Fluxo             | L   | 0.101      | -            | -                | -                | -         |    -1.34 | luchov, naz, Noktse, tomaszin, zock   |
|           11 |     4384 | 2024-07-17 | Vikings KR        | W   | 0.100      | -            | -                | -                | -         |     0.44 | luchov, naz, Noktse, tomaszin, zock   |
|           10 |     4432 | 2024-07-16 | ODDIK             | L   | 0.094      | -            | -                | -                | -         |    -1.81 | luchov, naz, Noktse, tomaszin, zock   |
|            9 |     4436 | 2024-07-16 | ODDIK             | W   | 0.094      | -            | -                | -                | -         |     1.17 | luchov, naz, Noktse, tomaszin, zock   |
|            8 |     4447 | 2024-07-16 | ODDIK             | L   | 0.093      | -            | -                | -                | -         |    -1.79 | luchov, naz, Noktse, tomaszin, zock   |
|            7 |     4495 | 2024-07-15 | Vikings KR        | W   | 0.086      | -            | -                | -                | -         |     0.38 | luchov, naz, Noktse, tomaszin, zock   |
|            6 |     4527 | 2024-07-13 | Intense           | W   | 0.074      | -            | -                | -                | -         |     0.25 | luchov, naz, Noktse, tomaszin, zock   |
|            5 |     4539 | 2024-07-12 | SPORT             | L   | 0.068      | -            | -                | -                | -         |    -2.02 | luchov, naz, Noktse, tomaszin, zock   |
|            4 |     4570 | 2024-07-10 | Sharks            | L   | 0.054      | -            | -                | -                | -         |    -0.45 | luchov, naz, Noktse, tomaszin, zock   |
|            3 |     4596 | 2024-07-09 | SPORT             | W   | 0.047      | -            | -                | -                | -         |     0.07 | luchov, naz, Noktse, tomaszin, zock   |
|            2 |     4613 | 2024-07-08 | Intense           | W   | 0.041      | -            | -                | -                | -         |     0.14 | luchov, naz, Noktse, tomaszin, zock   |
|            1 |     4620 | 2024-07-08 | Bounty Hunters    | L   | 0.040      | -            | -                | -                | -         |    -1.11 | luchov, naz, Noktse, tomaszin, zock   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30,579.72)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-26 |      0.774 | $20,000.00     | $15,486.72      |
| 2024-10-20 |      0.734 | $7,500.00      | $5,506.83       |
| 2024-10-05 |      0.634 | $7,000.00      | $4,437.38       |
| 2024-09-04 |      0.428 | $1,500.00      | $642.74         |
| 2024-08-13 |      0.281 | $6,000.00      | $1,683.19       |
| 2024-08-02 |      0.208 | $750.00        | $155.92         |
| 2024-07-22 |      0.133 | $20,000.00     | $2,666.95       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
