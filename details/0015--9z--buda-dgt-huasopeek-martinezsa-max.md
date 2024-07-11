### Roster Details<br />
Team Name: 9z<br />
Roster: buda, dgt, HUASOPEEK, MartinezSa, max<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [15](../standings_global.md)<br />
Regional Rank: [3]( ../standings_americas.md)<br />
Final Rank Value:  1592.7<br />
<br />
Final Rank Value (1592.7) = Starting Rank Value (1747.5) + Head To Head Adjustments (-154.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.812[<sup>1</sup>](#table2)
- Bounty Collected: 0.594[<sup>2</sup>](#table1)
- Opponent Network: 0.298[<sup>2</sup>](#table1)
- LAN Wins: 0.852[<sup>2</sup>](#table1)

The average of these factors is 0.639<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1747.5
- 400 + ( ( 0.639 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1747.5


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
|           74 |      145 | 2024-06-16 | fnatic            | W   | 1.000      | 0.548        | 0.298 (0.164)    | 0.623 (0.342)    | 1 (1.000) |    11.76 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           73 |      155 | 2024-06-16 | KOI               | W   | 1.000      | 0.548        | 0.090 (0.049)    | 0.437 (0.240)    | 1 (1.000) |     3.13 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           72 |      175 | 2024-06-15 | paiN              | W   | 1.000      | 0.548        | 0.478 (0.262)    | 0.768 (0.421)    | 1 (1.000) |    11.60 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           71 |      195 | 2024-06-15 | BESTIA            | W   | 1.000      | 0.548        | -                | 0.657 (0.360)    | 1 (1.000) |     1.83 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           70 |      216 | 2024-06-14 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -10.68 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           69 |      424 | 2024-06-08 | Imperial          | L   | 0.981      | -            | -                | -                | -         |   -21.58 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           68 |      481 | 2024-06-07 | Sharks            | W   | 0.975      | -            | -                | -                | 0 (0.000) |     1.69 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           67 |      537 | 2024-06-06 | MIBR              | W   | 0.969      | 0.450        | 0.270 (0.118)    | 0.648 (0.282)    | 0 (0.000) |    15.11 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           66 |      606 | 2024-06-05 | RED Canids        | L   | 0.962      | -            | -                | -                | -         |   -26.98 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           65 |      658 | 2024-06-04 | Fluxo             | W   | 0.955      | 0.450        | 0.166 (0.071)    | 0.615 (0.264)    | -         |     1.86 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           64 |      739 | 2024-06-01 | G2                | L   | 0.935      | -            | -                | -                | -         |    -4.66 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           63 |      829 | 2024-05-29 | Vitality          | W   | 0.914      | 0.624        | 0.733 (0.418)    | -                | 1 (0.914) |    25.77 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           62 |      869 | 2024-05-27 | Liquid            | W   | 0.903      | 0.624        | 0.494 (0.278)    | 0.546 (0.308)    | 1 (0.903) |    17.02 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           61 |      881 | 2024-05-27 | MOUZ              | W   | 0.900      | 0.624        | 1.000 (0.562)    | 0.442 (0.248)    | 1 (0.900) |    26.26 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           60 |      976 | 2024-05-22 | Imperial          | L   | 0.868      | -            | -                | -                | -         |   -17.98 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           59 |      978 | 2024-05-22 | Imperial          | L   | 0.868      | -            | -                | -                | -         |   -19.22 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           58 |     1057 | 2024-05-20 | W7M               | W   | 0.855      | -            | -                | -                | -         |     0.28 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           57 |     1061 | 2024-05-20 | W7M               | W   | 0.855      | -            | -                | -                | -         |     0.28 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           56 |     1064 | 2024-05-20 | BESTIA            | L   | 0.854      | -            | -                | -                | -         |   -26.07 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           55 |     1066 | 2024-05-20 | BESTIA            | W   | 0.854      | 0.450        | -                | 0.657 (0.252)    | -         |     0.75 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           54 |     1087 | 2024-05-19 | RED Canids        | L   | 0.848      | -            | -                | -                | -         |   -24.18 | buda, HUASOPEEK, Luken, MartinezSa, max |
|           53 |     1116 | 2024-05-18 | Fluxo             | W   | 0.841      | 0.371        | 0.166 (0.052)    | -                | -         |     1.71 | buda, HUASOPEEK, Luken, MartinezSa, max |
|           52 |     1180 | 2024-05-16 | ODDIK             | W   | 0.828      | -            | -                | -                | -         |     0.52 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           51 |     1188 | 2024-05-16 | Imperial          | L   | 0.827      | -            | -                | -                | -         |   -18.72 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           50 |     1226 | 2024-05-15 | RED Canids        | W   | 0.822      | 0.450        | -                | 0.698 (0.258)    | -         |     1.89 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           49 |     1228 | 2024-05-15 | RED Canids        | L   | 0.822      | -            | -                | -                | -         |   -24.25 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           48 |     1230 | 2024-05-15 | Sharks            | W   | 0.821      | -            | -                | -                | -         |     0.66 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           47 |     1287 | 2024-05-14 | ex-2GAME          | W   | 0.815      | -            | -                | -                | -         |     0.12 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           46 |     1292 | 2024-05-14 | ex-2GAME          | W   | 0.815      | -            | -                | -                | -         |     0.12 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           45 |     1301 | 2024-05-14 | Galorys           | W   | 0.814      | -            | -                | -                | -         |     0.34 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           44 |     1319 | 2024-05-13 | Galorys           | W   | 0.809      | -            | -                | -                | -         |     0.34 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           43 |     1339 | 2024-05-12 | inSanitY          | W   | 0.802      | -            | -                | -                | -         |     0.47 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           42 |     1343 | 2024-05-12 | paiN              | L   | 0.801      | -            | -                | -                | -         |   -17.38 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           41 |     1369 | 2024-05-11 | KRÜ               | W   | 0.794      | -            | -                | -                | -         |     0.31 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           40 |     1397 | 2024-05-10 | inSanitY          | W   | 0.789      | -            | -                | -                | -         |     0.43 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           39 |     1440 | 2024-05-08 | Sharks            | W   | 0.775      | -            | -                | -                | -         |     0.56 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           38 |     1482 | 2024-05-06 | Vikings KR        | W   | 0.760      | -            | -                | -                | -         |     0.18 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           37 |     1575 | 2024-05-01 | Case              | W   | 0.727      | -            | -                | -                | -         |     0.27 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           36 |     1577 | 2024-05-01 | Case              | W   | 0.727      | -            | -                | -                | -         |     0.27 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           35 |     1845 | 2024-04-19 | OG                | L   | 0.649      | -            | -                | -                | -         |   -18.97 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           34 |     1896 | 2024-04-18 | Imperial          | L   | 0.642      | -            | -                | -                | -         |   -15.45 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           33 |     1905 | 2024-04-18 | FURIA             | W   | 0.640      | 0.589        | 0.253 (0.096)    | -                | 1 (0.640) |     7.62 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           32 |     2225 | 2024-04-08 | HEROIC            | L   | 0.572      | -            | -                | -                | -         |    -8.21 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           31 |     2234 | 2024-04-07 | G2                | L   | 0.570      | -            | -                | -                | -         |    -4.52 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           30 |     3192 | 2024-02-23 | FURIA             | W   | 0.276      | -            | -                | -                | -         |     3.65 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           29 |     3195 | 2024-02-23 | BESTIA            | W   | 0.274      | -            | -                | -                | -         |     0.18 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           28 |     3205 | 2024-02-22 | FURIA             | L   | 0.269      | -            | -                | -                | -         |    -4.99 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           27 |     3212 | 2024-02-22 | BESTIA            | W   | 0.268      | -            | -                | -                | -         |     0.16 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           26 |     3258 | 2024-02-20 | Solid             | W   | 0.255      | -            | -                | -                | -         |     0.09 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           25 |     3260 | 2024-02-20 | Case              | W   | 0.255      | -            | -                | -                | -         |     0.08 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           24 |     3264 | 2024-02-20 | Salao do Corte    | W   | 0.254      | -            | -                | -                | -         |     0.01 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           23 |     3316 | 2024-02-18 | LA RUGONETA       | L   | 0.240      | -            | -                | -                | -         |    -7.54 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           22 |     3357 | 2024-02-16 | Fluxo             | L   | 0.228      | -            | -                | -                | -         |    -7.00 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           21 |     3382 | 2024-02-15 | Imperial          | L   | 0.222      | -            | -                | -                | -         |    -5.51 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           20 |     3385 | 2024-02-15 | Case              | W   | 0.221      | -            | -                | -                | -         |     0.06 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           19 |     3388 | 2024-02-15 | KRÜ               | W   | 0.221      | -            | -                | -                | -         |     0.05 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           18 |     3413 | 2024-02-14 | ex-2GAME          | W   | 0.215      | -            | -                | -                | -         |     0.02 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           17 |     3477 | 2024-02-12 | LA RUGONETA       | W   | 0.201      | -            | -                | -                | -         |     0.01 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           16 |     3560 | 2024-02-04 | Imperial          | L   | 0.148      | -            | -                | -                | -         |    -3.69 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           15 |     3580 | 2024-02-03 | W7M               | W   | 0.143      | -            | -                | -                | -         |     0.02 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           14 |     3613 | 2024-02-02 | Imperial          | W   | 0.135      | -            | -                | -                | -         |     0.88 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           13 |     3618 | 2024-02-02 | ODDIK             | W   | 0.134      | -            | -                | -                | -         |     0.05 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           12 |     3779 | 2024-01-24 | Imperial          | L   | 0.075      | -            | -                | -                | -         |    -1.89 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           11 |     3797 | 2024-01-23 | Fluxo             | W   | 0.068      | -            | -                | -                | -         |     0.05 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           10 |     3820 | 2024-01-22 | Galorys           | W   | 0.062      | -            | -                | -                | -         |     0.02 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            9 |     3846 | 2024-01-21 | RED Canids        | L   | 0.057      | -            | -                | -                | -         |    -1.72 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            8 |     3849 | 2024-01-21 | W7M               | W   | 0.055      | -            | -                | -                | -         |     0.01 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            7 |     3856 | 2024-01-21 | Sharks            | W   | 0.054      | -            | -                | -                | -         |     0.02 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            6 |     3891 | 2024-01-20 | ODDIK             | L   | 0.047      | -            | -                | -                | -         |    -1.47 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            5 |     3928 | 2024-01-19 | adalYamigos       | W   | 0.042      | -            | -                | -                | -         |     0.00 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            4 |     3940 | 2024-01-19 | Legacy            | L   | 0.041      | -            | -                | -                | -         |    -1.27 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            3 |     3990 | 2024-01-18 | MIBR              | W   | 0.036      | -            | -                | -                | -         |     0.33 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            2 |     4039 | 2024-01-17 | MIBR              | W   | 0.029      | -            | -                | -                | -         |     0.27 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            1 |     4057 | 2024-01-17 | RED Canids        | W   | 0.028      | -            | -                | -                | -         |     0.03 | buda, dgt, HUASOPEEK, MartinezSa, max   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($151,500.13)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.59) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $100,000.00    | $100,000.00     |
| 2024-06-09 |      0.988 | $7,500.00      | $7,410.45       |
| 2024-06-02 |      0.941 | $20,000.00     | $18,820.06      |
| 2024-05-19 |      0.848 | $4,000.00      | $3,392.22       |
| 2024-05-16 |      0.827 | $5,000.00      | $4,136.70       |
| 2024-05-12 |      0.801 | $15,000.00     | $12,019.77      |
| 2024-04-20 |      0.655 | $5,000.00      | $3,274.00       |
| 2024-04-14 |      0.612 | $4,000.00      | $2,446.93       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
