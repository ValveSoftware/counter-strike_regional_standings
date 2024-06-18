### Roster Details<br />
Team Name: 9z<br />
Roster: buda, dgt, HUASOPEEK, MartinezSa, max<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [16](../standings_global.md)<br />
Regional Rank: [3]( ../standings_americas.md)<br />
Final Rank Value:  1536.3<br />
<br />
Final Rank Value (1536.3) = Starting Rank Value (1683.4) + Head To Head Adjustments (-147.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.781[<sup>1</sup>](#table2)
- Bounty Collected: 0.607[<sup>2</sup>](#table1)
- Opponent Network: 0.326[<sup>2</sup>](#table1)
- LAN Wins: 0.813[<sup>2</sup>](#table1)

The average of these factors is 0.632<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1683.4
- 400 + ( ( 0.632 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1683.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           74 |        9 | 2024-06-16 | fnatic            | W   | 1.000      | 0.548        | 0.290 (0.159)    | 0.666 (0.365)    | 1 (1.000) |    12.41 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           73 |       19 | 2024-06-16 | KOI               | W   | 1.000      | 0.548        | -                | 0.508 (0.278)    | 1 (1.000) |     4.07 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           72 |       39 | 2024-06-15 | paiN              | W   | 1.000      | 0.548        | 0.492 (0.270)    | 0.775 (0.425)    | 1 (1.000) |    13.93 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           71 |       59 | 2024-06-15 | BESTIA            | W   | 1.000      | 0.548        | -                | 0.594 (0.326)    | 1 (1.000) |     2.55 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           70 |       80 | 2024-06-14 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -10.44 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           69 |      288 | 2024-06-08 | Imperial          | L   | 1.000      | -            | -                | -                | -         |   -19.41 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           68 |      345 | 2024-06-07 | Sharks            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.52 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           67 |      401 | 2024-06-06 | MIBR              | W   | 1.000      | 0.450        | 0.281 (0.127)    | 0.688 (0.310)    | 0 (0.000) |    18.75 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           66 |      470 | 2024-06-05 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |   -26.64 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           65 |      522 | 2024-06-04 | Fluxo             | W   | 1.000      | 0.450        | 0.159 (0.072)    | 0.627 (0.282)    | -         |     2.87 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           64 |      605 | 2024-06-01 | G2                | L   | 1.000      | -            | -                | -                | -         |    -3.45 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           63 |      695 | 2024-05-29 | Vitality          | W   | 1.000      | 0.624        | 0.738 (0.460)    | -                | 1 (1.000) |    29.18 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           62 |      735 | 2024-05-27 | Liquid            | W   | 1.000      | 0.624        | 0.498 (0.311)    | 0.629 (0.393)    | 1 (1.000) |    23.04 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           61 |      747 | 2024-05-27 | MOUZ              | W   | 1.000      | 0.624        | 1.000 (0.624)    | 0.494 (0.308)    | 1 (1.000) |    30.25 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           60 |      842 | 2024-05-22 | Imperial          | L   | 1.000      | -            | -                | -                | -         |   -16.84 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           59 |      844 | 2024-05-22 | Imperial          | L   | 1.000      | -            | -                | -                | -         |   -18.38 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           58 |      923 | 2024-05-20 | W7M               | W   | 1.000      | -            | -                | -                | -         |     0.53 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           57 |      927 | 2024-05-20 | W7M               | W   | 1.000      | -            | -                | -                | -         |     0.53 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           56 |      930 | 2024-05-20 | BESTIA            | L   | 1.000      | -            | -                | -                | -         |   -29.99 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           55 |      932 | 2024-05-20 | BESTIA            | W   | 1.000      | 0.450        | -                | 0.594 (0.268)    | -         |     1.31 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           54 |      953 | 2024-05-19 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |   -26.89 | buda, HUASOPEEK, Luken, MartinezSa, max |
|           53 |      982 | 2024-05-18 | Fluxo             | W   | 0.996      | 0.371        | 0.159 (0.059)    | -                | -         |     3.25 | buda, HUASOPEEK, Luken, MartinezSa, max |
|           52 |     1046 | 2024-05-16 | ODDIK             | W   | 0.984      | -            | -                | -                | -         |     0.91 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           51 |     1054 | 2024-05-16 | Imperial          | L   | 0.983      | -            | -                | -                | -         |   -18.22 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           50 |     1092 | 2024-05-15 | RED Canids        | W   | 0.978      | 0.450        | 0.115 (0.051)    | 0.693 (0.305)    | -         |     3.42 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           49 |     1094 | 2024-05-15 | RED Canids        | L   | 0.977      | -            | -                | -                | -         |   -27.79 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           48 |     1096 | 2024-05-15 | Sharks            | W   | 0.977      | -            | -                | -                | -         |     1.26 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           47 |     1153 | 2024-05-14 | ex-2GAME          | W   | 0.970      | -            | -                | -                | -         |     0.24 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           46 |     1158 | 2024-05-14 | ex-2GAME          | W   | 0.970      | -            | -                | -                | -         |     0.24 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           45 |     1167 | 2024-05-14 | Galorys           | W   | 0.969      | -            | -                | -                | -         |     0.61 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           44 |     1185 | 2024-05-13 | Galorys           | W   | 0.964      | -            | -                | -                | -         |     0.61 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           43 |     1205 | 2024-05-12 | inSanitY          | W   | 0.958      | -            | -                | -                | -         |     0.56 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           42 |     1209 | 2024-05-12 | paiN              | L   | 0.957      | -            | -                | -                | -         |   -17.20 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           41 |     1235 | 2024-05-11 | KRÜ               | W   | 0.950      | -            | -                | -                | -         |     0.47 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           40 |     1263 | 2024-05-10 | inSanitY          | W   | 0.945      | -            | -                | -                | -         |     0.51 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           39 |     1306 | 2024-05-08 | Sharks            | W   | 0.931      | -            | -                | -                | -         |     1.08 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           38 |     1348 | 2024-05-06 | Vikings KR        | W   | 0.916      | -            | -                | -                | -         |     0.27 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           37 |     1441 | 2024-05-01 | Case              | W   | 0.883      | -            | -                | -                | -         |     0.50 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           36 |     1443 | 2024-05-01 | Case              | W   | 0.883      | -            | -                | -                | -         |     0.50 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           35 |     1711 | 2024-04-19 | OG                | L   | 0.805      | -            | -                | -                | -         |   -21.71 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           34 |     1762 | 2024-04-18 | Imperial          | L   | 0.797      | -            | -                | -                | -         |   -15.89 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           33 |     1771 | 2024-04-18 | FURIA             | W   | 0.796      | 0.589        | 0.245 (0.115)    | -                | 1 (0.796) |    11.40 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           32 |     2091 | 2024-04-08 | HEROIC            | L   | 0.727      | -            | -                | -                | -         |    -7.76 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           31 |     2100 | 2024-04-07 | G2                | L   | 0.725      | -            | -                | -                | -         |    -3.77 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           30 |     3059 | 2024-02-23 | FURIA             | W   | 0.431      | -            | -                | -                | -         |     6.98 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           29 |     3062 | 2024-02-23 | BESTIA            | W   | 0.430      | -            | -                | -                | -         |     0.48 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           28 |     3072 | 2024-02-22 | FURIA             | L   | 0.424      | -            | -                | -                | -         |    -6.63 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           27 |     3079 | 2024-02-22 | BESTIA            | W   | 0.423      | -            | -                | -                | -         |     0.42 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           26 |     3125 | 2024-02-20 | Solid             | W   | 0.411      | -            | -                | -                | -         |     0.22 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           25 |     3127 | 2024-02-20 | Case              | W   | 0.410      | -            | -                | -                | -         |     0.21 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           24 |     3131 | 2024-02-20 | Salao do Corte    | W   | 0.410      | -            | -                | -                | -         |     0.01 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           23 |     3183 | 2024-02-18 | LA RUGONETA       | L   | 0.395      | -            | -                | -                | -         |   -12.42 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           22 |     3224 | 2024-02-16 | Fluxo             | L   | 0.383      | -            | -                | -                | -         |   -11.63 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           21 |     3249 | 2024-02-15 | Imperial          | L   | 0.378      | -            | -                | -                | -         |    -7.75 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           20 |     3252 | 2024-02-15 | Case              | W   | 0.377      | -            | -                | -                | -         |     0.15 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           19 |     3255 | 2024-02-15 | KRÜ               | W   | 0.377      | -            | -                | -                | -         |     0.10 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           18 |     3280 | 2024-02-14 | ex-2GAME          | W   | 0.371      | -            | -                | -                | -         |     0.06 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           17 |     3344 | 2024-02-12 | LA RUGONETA       | W   | 0.357      | -            | -                | -                | -         |     0.03 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           16 |     3427 | 2024-02-04 | Imperial          | L   | 0.304      | -            | -                | -                | -         |    -6.30 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           15 |     3447 | 2024-02-03 | W7M               | W   | 0.298      | -            | -                | -                | -         |     0.08 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           14 |     3480 | 2024-02-02 | Imperial          | W   | 0.291      | -            | -                | -                | -         |     3.10 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           13 |     3485 | 2024-02-02 | ODDIK             | W   | 0.290      | -            | -                | -                | -         |     0.19 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           12 |     3646 | 2024-01-24 | Imperial          | L   | 0.231      | -            | -                | -                | -         |    -4.89 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           11 |     3664 | 2024-01-23 | Fluxo             | W   | 0.224      | -            | -                | -                | -         |     0.21 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           10 |     3687 | 2024-01-22 | Galorys           | W   | 0.218      | -            | -                | -                | -         |     0.08 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            9 |     3713 | 2024-01-21 | RED Canids        | L   | 0.212      | -            | -                | -                | -         |    -6.34 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            8 |     3716 | 2024-01-21 | W7M               | W   | 0.211      | -            | -                | -                | -         |     0.05 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            7 |     3723 | 2024-01-21 | Sharks            | W   | 0.209      | -            | -                | -                | -         |     0.14 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            6 |     3758 | 2024-01-20 | ODDIK             | L   | 0.203      | -            | -                | -                | -         |    -6.27 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            5 |     3795 | 2024-01-19 | adalYamigos       | W   | 0.198      | -            | -                | -                | -         |     0.02 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            4 |     3807 | 2024-01-19 | Legacy            | L   | 0.197      | -            | -                | -                | -         |    -6.01 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            3 |     3857 | 2024-01-18 | MIBR              | W   | 0.191      | -            | -                | -                | -         |     2.46 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            2 |     3906 | 2024-01-17 | MIBR              | W   | 0.185      | -            | -                | -                | -         |     2.41 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            1 |     3924 | 2024-01-17 | RED Canids        | W   | 0.183      | -            | -                | -                | -         |     0.30 | buda, dgt, HUASOPEEK, MartinezSa, max   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($157,891.93)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.53) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $100,000.00    | $100,000.00     |
| 2024-06-09 |      1.000 | $7,500.00      | $7,500.00       |
| 2024-06-02 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-05-19 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-16 |      0.983 | $5,000.00      | $4,915.07       |
| 2024-05-12 |      0.957 | $15,000.00     | $14,354.87      |
| 2024-04-20 |      0.810 | $5,000.00      | $4,052.37       |
| 2024-04-14 |      0.767 | $4,000.00      | $3,069.62       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
