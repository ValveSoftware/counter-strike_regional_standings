### Roster Details<br />
Team Name: Solid<br />
Roster: ALLE, destiny, gbb, Lcm, xureba<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [78](../standings_global.md)<br />
Regional Rank: [21]( ../standings_americas.md)<br />
Final Rank Value:  947.8<br />
<br />
Final Rank Value (947.8) = Starting Rank Value (915.8) + Head To Head Adjustments (32.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.411[<sup>1</sup>](#table2)
- Bounty Collected: 0.382[<sup>2</sup>](#table1)
- Opponent Network: 0.227[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.255<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 915.8
- 400 + ( ( 0.255 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 915.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           92 |       24 | 2024-07-23 | Imperial          | W   | 1.000      | 0.143        | 0.317 (0.045)    | -                | 0 (0.000) |    26.55 | ALLE, destiny, gbb, Lcm, xureba |
|           91 |       28 | 2024-07-23 | inSanitY          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    20.90 | ALLE, destiny, gbb, Lcm, xureba |
|           90 |       36 | 2024-07-23 | Sharks Youngsters | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.91 | ALLE, destiny, gbb, Lcm, xureba |
|           89 |       41 | 2024-07-23 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -4.60 | ALLE, destiny, gbb, Lcm, xureba |
|           88 |      110 | 2024-07-20 | Hype              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.75 | ALLE, destiny, gbb, Lcm, xureba |
|           87 |      185 | 2024-07-18 | KRÜ               | W   | 1.000      | 0.450        | 0.029 (0.013)    | 0.477 (0.215)    | 0 (0.000) |    15.14 | ALLE, destiny, gbb, Lcm, xureba |
|           86 |      189 | 2024-07-18 | KRÜ               | W   | 1.000      | 0.450        | 0.029 (0.013)    | 0.477 (0.215)    | 0 (0.000) |    16.54 | ALLE, destiny, gbb, Lcm, xureba |
|           85 |      221 | 2024-07-18 | Vikings KR        | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.28 | ALLE, destiny, gbb, Lcm, xureba |
|           84 |      247 | 2024-07-17 | Smoke             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.94 | ALLE, destiny, gbb, Lcm, xureba |
|           83 |      254 | 2024-07-17 | Smoke             | L   | 1.000      | -            | -                | -                | -         |   -19.89 | ALLE, destiny, gbb, Lcm, xureba |
|           82 |      264 | 2024-07-17 | Bounty Hunters    | L   | 1.000      | -            | -                | -                | -         |   -10.06 | ALLE, destiny, gbb, Lcm, xureba |
|           81 |      321 | 2024-07-16 | Case              | W   | 1.000      | 0.450        | -                | 0.751 (0.338)    | 0 (0.000) |    19.00 | ALLE, destiny, gbb, Lcm, xureba |
|           80 |      327 | 2024-07-16 | Case              | L   | 1.000      | -            | -                | -                | -         |   -12.22 | ALLE, destiny, gbb, Lcm, xureba |
|           79 |      369 | 2024-07-15 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -1.57 | ALLE, destiny, gbb, Lcm, xureba |
|           78 |      372 | 2024-07-15 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -1.60 | ALLE, destiny, gbb, Lcm, xureba |
|           77 |      380 | 2024-07-15 | Hawks             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.61 | ALLE, destiny, gbb, Lcm, xureba |
|           76 |      478 | 2024-07-10 | Bounty Hunters    | L   | 1.000      | -            | -                | -                | -         |   -10.87 | ALLE, destiny, gbb, Lcm, xureba |
|           75 |      488 | 2024-07-09 | Patins da Ferrari | W   | 1.000      | -            | -                | -                | -         |    14.45 | ALLE, destiny, gbb, Lcm, xureba |
|           74 |      505 | 2024-07-08 | KRÜ               | L   | 1.000      | -            | -                | -                | -         |   -15.17 | ALLE, destiny, gbb, Lcm, xureba |
|           73 |      587 | 2024-06-18 | Case              | L   | 0.961      | -            | -                | -                | -         |   -15.72 | ALLE, destiny, gbb, Lcm, xureba |
|           72 |      590 | 2024-06-17 | ex-Corinthians    | W   | 0.954      | -            | -                | -                | -         |     3.93 | ALLE, destiny, gbb, Lcm, xureba |
|           71 |      823 | 2024-06-09 | W7M               | L   | 0.900      | -            | -                | -                | -         |   -17.52 | ALLE, destiny, gbb, Lcm, xureba |
|           70 |      878 | 2024-06-08 | BESTIA            | L   | 0.895      | -            | -                | -                | -         |    -8.26 | ALLE, destiny, gbb, Lcm, xureba |
|           69 |      891 | 2024-06-08 | inSanitY          | L   | 0.894      | -            | -                | -                | -         |   -10.81 | ALLE, destiny, gbb, Lcm, xureba |
|           68 |      937 | 2024-06-07 | KRÜ               | L   | 0.887      | -            | -                | -                | -         |   -15.66 | ALLE, destiny, gbb, Lcm, xureba |
|           67 |     1023 | 2024-06-06 | Vikings KR        | W   | 0.879      | -            | -                | -                | -         |     9.35 | ALLE, destiny, gbb, Lcm, xureba |
|           66 |     1146 | 2024-06-03 | Case              | W   | 0.862      | 0.371        | -                | 0.751 (0.240)    | -         |    13.85 | ALLE, destiny, gbb, Lcm, xureba |
|           65 |     1189 | 2024-06-01 | inSanitY          | L   | 0.849      | -            | -                | -                | -         |   -11.15 | ALLE, destiny, gbb, Lcm, xureba |
|           64 |     1263 | 2024-05-30 | Smoke             | W   | 0.834      | -            | -                | -                | -         |     6.97 | ALLE, destiny, gbb, Lcm, xureba |
|           63 |     1315 | 2024-05-28 | 9z Academy        | W   | 0.819      | -            | -                | -                | -         |     2.54 | ALLE, destiny, gbb, Lcm, xureba |
|           62 |     1426 | 2024-05-22 | W7M               | W   | 0.781      | 0.450        | -                | 0.495 (0.174)    | -         |     8.50 | ALLE, destiny, gbb, Lcm, xureba |
|           61 |     1432 | 2024-05-22 | W7M               | W   | 0.781      | 0.450        | -                | 0.495 (0.174)    | -         |     9.06 | ALLE, destiny, gbb, Lcm, xureba |
|           60 |     1542 | 2024-05-19 | Galorys           | L   | 0.761      | -            | -                | -                | -         |   -12.16 | ALLE, destiny, gbb, Lcm, xureba |
|           59 |     1565 | 2024-05-18 | Case              | L   | 0.754      | -            | -                | -                | -         |   -11.56 | ALLE, destiny, gbb, Lcm, xureba |
|           58 |     1598 | 2024-05-17 | BESTIA            | W   | 0.748      | 0.450        | 0.114 (0.038)    | 0.740 (0.249)    | -         |    14.71 | ALLE, destiny, gbb, Lcm, xureba |
|           57 |     1600 | 2024-05-17 | BESTIA            | L   | 0.748      | -            | -                | -                | -         |    -8.86 | ALLE, destiny, gbb, Lcm, xureba |
|           56 |     1638 | 2024-05-16 | ODDIK             | W   | 0.741      | 0.303        | 0.083 (0.019)    | -                | -         |    13.74 | ALLE, destiny, gbb, Lcm, xureba |
|           55 |     1688 | 2024-05-15 | KRÜ               | L   | 0.734      | -            | -                | -                | -         |   -11.38 | ALLE, destiny, gbb, Lcm, xureba |
|           54 |     1727 | 2024-05-14 | ODDIK             | W   | 0.729      | 0.450        | 0.083 (0.027)    | 0.694 (0.228)    | -         |    14.76 | ALLE, destiny, gbb, Lcm, xureba |
|           53 |     1733 | 2024-05-14 | ODDIK             | L   | 0.728      | -            | -                | -                | -         |    -8.18 | ALLE, destiny, gbb, Lcm, xureba |
|           52 |     1745 | 2024-05-14 | FURIA Academy     | W   | 0.728      | -            | -                | -                | -         |     2.60 | ALLE, destiny, gbb, Lcm, xureba |
|           51 |     1774 | 2024-05-13 | ODDIK             | L   | 0.721      | -            | -                | -                | -         |    -8.57 | ALLE, destiny, gbb, Lcm, xureba |
|           50 |     1796 | 2024-05-12 | BESTIA            | L   | 0.714      | -            | -                | -                | -         |    -8.91 | ALLE, destiny, gbb, Lcm, xureba |
|           49 |     1804 | 2024-05-12 | Case              | W   | 0.713      | 0.371        | -                | 0.751 (0.198)    | -         |    10.71 | ALLE, destiny, gbb, Lcm, xureba |
|           48 |     1851 | 2024-05-10 | KRÜ               | L   | 0.701      | -            | -                | -                | -         |   -10.78 | ALLE, destiny, gbb, Lcm, xureba |
|           47 |     1894 | 2024-05-08 | RED Canids        | W   | 0.688      | 0.435        | 0.102 (0.030)    | 0.793 (0.237)    | -         |    17.06 | ALLE, destiny, gbb, Lcm, xureba |
|           46 |     1931 | 2024-05-06 | Yawara            | W   | 0.674      | -            | -                | -                | -         |     2.43 | ALLE, destiny, gbb, Lcm, xureba |
|           45 |     2169 | 2024-04-25 | paiN              | L   | 0.601      | -            | -                | -                | -         |    -0.74 | ALLE, CSO, gbb, Lcm, xureba     |
|           44 |     2171 | 2024-04-25 | paiN              | L   | 0.601      | -            | -                | -                | -         |    -0.74 | ALLE, CSO, gbb, Lcm, xureba     |
|           43 |     2262 | 2024-04-20 | Galorys           | L   | 0.568      | -            | -                | -                | -         |    -9.26 | ALLE, CSO, gbb, Lcm, xureba     |
|           42 |     2264 | 2024-04-20 | Galorys           | W   | 0.568      | -            | -                | -                | -         |     8.81 | ALLE, CSO, gbb, Lcm, xureba     |
|           41 |     2406 | 2024-04-17 | Fluxo             | L   | 0.547      | -            | -                | -                | -         |    -4.20 | ALLE, CSO, gbb, Lcm, xureba     |
|           40 |     2441 | 2024-04-16 | paiN Academy      | W   | 0.541      | -            | -                | -                | -         |     1.00 | ALLE, CSO, gbb, Lcm, xureba     |
|           39 |     2510 | 2024-04-12 | ODDIK             | L   | 0.513      | -            | -                | -                | -         |    -6.87 | ALLE, CSO, gbb, Lcm, xureba     |
|           38 |     2627 | 2024-04-09 | Imperial          | L   | 0.494      | -            | -                | -                | -         |    -0.98 | ALLE, CSO, gbb, Lcm, xureba     |
|           37 |     2632 | 2024-04-09 | Imperial          | L   | 0.494      | -            | -                | -                | -         |    -0.99 | ALLE, CSO, gbb, Lcm, xureba     |
|           36 |     2668 | 2024-04-08 | LA RUGONETA       | W   | 0.486      | -            | -                | -                | -         |     2.02 | ALLE, CSO, gbb, Lcm, xureba     |
|           35 |     2707 | 2024-04-06 | Fluxo             | L   | 0.474      | -            | -                | -                | -         |    -4.00 | ALLE, CSO, gbb, Lcm, xureba     |
|           34 |     2749 | 2024-04-04 | MIBR              | L   | 0.461      | -            | -                | -                | -         |    -0.65 | ALLE, CSO, gbb, Lcm, xureba     |
|           33 |     2753 | 2024-04-04 | MIBR              | L   | 0.461      | -            | -                | -                | -         |    -0.66 | ALLE, CSO, gbb, Lcm, xureba     |
|           32 |     3051 | 2024-03-20 | 2GAME             | L   | 0.361      | -            | -                | -                | -         |    -8.75 | ALLE, CSO, gbb, Lcm, xureba     |
|           31 |     3052 | 2024-03-20 | 2GAME             | W   | 0.361      | -            | -                | -                | -         |     2.63 | ALLE, CSO, gbb, Lcm, xureba     |
|           30 |     3171 | 2024-03-14 | RED Canids        | W   | 0.321      | 0.435        | 0.102 (0.014)    | -                | -         |     7.77 | bnc, CSO, gbb, Lcm, xureba      |
|           29 |     3209 | 2024-03-13 | Fluxo             | W   | 0.313      | 0.435        | 0.157 (0.021)    | -                | -         |     7.24 | bnc, CSO, gbb, Lcm, xureba      |
|           28 |     3235 | 2024-03-12 | adalYamigos       | W   | 0.308      | -            | -                | -                | -         |     1.87 | bnc, CSO, gbb, Lcm, xureba      |
|           27 |     3238 | 2024-03-12 | FURIA Academy     | L   | 0.307      | -            | -                | -                | -         |    -8.63 | bnc, CSO, gbb, Lcm, xureba      |
|           26 |     3260 | 2024-03-11 | W7M               | W   | 0.300      | -            | -                | -                | -         |     3.97 | bnc, CSO, gbb, Lcm, xureba      |
|           25 |     3282 | 2024-03-10 | ODDIK             | L   | 0.294      | -            | -                | -                | -         |    -3.43 | bnc, CSO, gbb, Lcm, xureba      |
|           24 |     3300 | 2024-03-09 | VELOX             | W   | 0.287      | -            | -                | -                | -         |     0.51 | bnc, CSO, gbb, Lcm, xureba      |
|           23 |     3355 | 2024-03-07 | W7M               | L   | 0.274      | -            | -                | -                | -         |    -5.10 | bnc, CSO, gbb, Lcm, xureba      |
|           22 |     3371 | 2024-03-06 | Fluxo             | W   | 0.268      | 0.450        | 0.157 (0.019)    | -                | -         |     6.16 | bnc, CSO, gbb, Lcm, xureba      |
|           21 |     3373 | 2024-03-06 | Fluxo             | L   | 0.268      | -            | -                | -                | -         |    -2.31 | bnc, CSO, gbb, Lcm, xureba      |
|           20 |     3416 | 2024-03-05 | Sharks            | L   | 0.260      | -            | -                | -                | -         |    -3.26 | bnc, CSO, gbb, Lcm, xureba      |
|           19 |     3420 | 2024-03-05 | Sharks            | L   | 0.260      | -            | -                | -                | -         |    -3.33 | bnc, CSO, gbb, Lcm, xureba      |
|           18 |     3675 | 2024-02-21 | Case              | L   | 0.175      | -            | -                | -                | -         |    -2.57 | bnc, CSO, gbb, Lcm, xureba      |
|           17 |     3676 | 2024-02-21 | Case              | W   | 0.175      | -            | -                | -                | -         |     2.99 | bnc, CSO, gbb, Lcm, xureba      |
|           16 |     3688 | 2024-02-21 | Fluxo             | L   | 0.173      | -            | -                | -                | -         |    -1.61 | bnc, CSO, gbb, Lcm, xureba      |
|           15 |     3710 | 2024-02-20 | 9z                | L   | 0.168      | -            | -                | -                | -         |    -0.10 | bnc, CSO, gbb, Lcm, xureba      |
|           14 |     3711 | 2024-02-20 | Flamengo          | W   | 0.168      | -            | -                | -                | -         |     0.49 | bnc, CSO, gbb, Lcm, xureba      |
|           13 |     3713 | 2024-02-20 | Fluxo             | W   | 0.168      | -            | -                | -                | -         |     3.76 | bnc, CSO, gbb, Lcm, xureba      |
|           12 |     3741 | 2024-02-19 | Sharks            | L   | 0.160      | -            | -                | -                | -         |    -2.09 | bnc, CSO, gbb, Lcm, xureba      |
|           11 |     3758 | 2024-02-18 | adalYamigos       | W   | 0.155      | -            | -                | -                | -         |     0.75 | bnc, CSO, gbb, Lcm, xureba      |
|           10 |     3780 | 2024-02-17 | Case              | L   | 0.149      | -            | -                | -                | -         |    -2.12 | bnc, CSO, gbb, Lcm, xureba      |
|            9 |     3793 | 2024-02-17 | inSanitY          | W   | 0.146      | -            | -                | -                | -         |     0.24 | bnc, CSO, gbb, Lcm, xureba      |
|            8 |     3810 | 2024-02-16 | W7M               | W   | 0.141      | -            | -                | -                | -         |     1.84 | bnc, CSO, gbb, Lcm, xureba      |
|            7 |     3841 | 2024-02-15 | Imperial          | L   | 0.134      | -            | -                | -                | -         |    -0.31 | bnc, CSO, gbb, Lcm, xureba      |
|            6 |     3869 | 2024-02-14 | Galorys           | W   | 0.128      | -            | -                | -                | -         |     1.82 | bnc, CSO, gbb, Lcm, xureba      |
|            5 |     3878 | 2024-02-14 | Corinthians       | W   | 0.127      | -            | -                | -                | -         |     0.40 | bnc, CSO, gbb, Lcm, xureba      |
|            4 |     3906 | 2024-02-13 | adalYamigos       | L   | 0.122      | -            | -                | -                | -         |    -3.27 | bnc, CSO, gbb, Lcm, xureba      |
|            3 |     3910 | 2024-02-13 | adalYamigos       | L   | 0.122      | -            | -                | -                | -         |    -3.28 | bnc, CSO, gbb, Lcm, xureba      |
|            2 |     3915 | 2024-02-13 | Imperial          | L   | 0.121      | -            | -                | -                | -         |    -0.28 | bnc, CSO, gbb, Lcm, xureba      |
|            1 |     3927 | 2024-02-12 | Sharks            | L   | 0.115      | -            | -                | -                | -         |    -1.51 | bnc, CSO, gbb, Lcm, xureba      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,148.97)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-19 |      0.968 | $1,075.00      | $1,040.18       |
| 2024-06-09 |      0.901 | $1,200.00      | $1,081.47       |
| 2024-03-14 |      0.321 | $25,000.00     | $8,027.32       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
