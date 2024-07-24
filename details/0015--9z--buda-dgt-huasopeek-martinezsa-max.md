### Roster Details<br />
Team Name: 9z<br />
Roster: buda, dgt, HUASOPEEK, MartinezSa, max<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [15](../standings_global.md)<br />
Regional Rank: [3]( ../standings_americas.md)<br />
Final Rank Value:  1524.5<br />
<br />
Final Rank Value (1524.5) = Starting Rank Value (1635.2) + Head To Head Adjustments (-110.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.774[<sup>1</sup>](#table2)
- Bounty Collected: 0.582[<sup>2</sup>](#table1)
- Opponent Network: 0.283[<sup>2</sup>](#table1)
- LAN Wins: 0.802[<sup>2</sup>](#table1)

The average of these factors is 0.610<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1635.2
- 400 + ( ( 0.610 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1635.2


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
|           62 |      597 | 2024-06-16 | fnatic            | W   | 0.949      | 0.548        | 0.428 (0.223)    | 0.666 (0.346)    | 1 (0.949) |    13.16 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           61 |      607 | 2024-06-16 | KOI               | W   | 0.946      | -            | -                | -                | 1 (0.946) |     3.03 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           60 |      627 | 2024-06-15 | paiN              | W   | 0.941      | 0.548        | 0.393 (0.203)    | 0.825 (0.426)    | 1 (0.941) |    10.81 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           59 |      647 | 2024-06-15 | BESTIA            | W   | 0.939      | 0.548        | 0.114 (0.059)    | 0.740 (0.381)    | 1 (0.939) |     2.39 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           58 |      668 | 2024-06-14 | Ninjas in Pyjamas | L   | 0.934      | -            | -                | -                | -         |   -10.03 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           57 |      876 | 2024-06-08 | Imperial          | L   | 0.895      | -            | -                | -                | -         |   -20.32 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           56 |      933 | 2024-06-07 | Sharks            | W   | 0.888      | -            | -                | -                | 0 (0.000) |     2.02 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           55 |      989 | 2024-06-06 | MIBR              | W   | 0.882      | 0.450        | 0.257 (0.102)    | 0.561 (0.223)    | 0 (0.000) |    12.72 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           54 |     1058 | 2024-06-05 | RED Canids        | L   | 0.875      | -            | -                | -                | -         |   -24.03 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           53 |     1110 | 2024-06-04 | Fluxo             | W   | 0.869      | 0.450        | 0.157 (0.061)    | 0.685 (0.268)    | -         |     2.28 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           52 |     1191 | 2024-06-01 | G2                | L   | 0.848      | -            | -                | -                | -         |    -2.52 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           51 |     1281 | 2024-05-29 | Vitality          | W   | 0.828      | 0.624        | 0.749 (0.387)    | -                | 1 (0.828) |    23.13 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           50 |     1321 | 2024-05-27 | Liquid            | W   | 0.816      | 0.624        | 0.411 (0.209)    | 0.459 (0.234)    | 1 (0.816) |    13.07 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           49 |     1333 | 2024-05-27 | MOUZ              | W   | 0.814      | 0.624        | 1.000 (0.508)    | 0.435 (0.221)    | 1 (0.814) |    23.97 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           48 |     1428 | 2024-05-22 | Imperial          | L   | 0.781      | -            | -                | -                | -         |   -17.03 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           47 |     1430 | 2024-05-22 | Imperial          | L   | 0.781      | -            | -                | -                | -         |   -18.02 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           46 |     1509 | 2024-05-20 | W7M               | W   | 0.768      | -            | -                | -                | -         |     0.44 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           45 |     1513 | 2024-05-20 | W7M               | W   | 0.768      | -            | -                | -                | -         |     0.44 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           44 |     1516 | 2024-05-20 | BESTIA            | L   | 0.767      | -            | -                | -                | -         |   -23.02 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           43 |     1518 | 2024-05-20 | BESTIA            | W   | 0.767      | 0.450        | -                | 0.740 (0.255)    | -         |     1.05 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           42 |     1539 | 2024-05-19 | RED Canids        | L   | 0.761      | -            | -                | -                | -         |   -21.30 | buda, HUASOPEEK, Luken, MartinezSa, max |
|           41 |     1568 | 2024-05-18 | Fluxo             | W   | 0.754      | 0.371        | 0.157 (0.044)    | -                | -         |     2.07 | buda, HUASOPEEK, Luken, MartinezSa, max |
|           40 |     1632 | 2024-05-16 | ODDIK             | W   | 0.742      | -            | -                | -                | -         |     0.78 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           39 |     1640 | 2024-05-16 | Imperial          | L   | 0.741      | -            | -                | -                | -         |   -17.49 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           38 |     1678 | 2024-05-15 | RED Canids        | W   | 0.735      | 0.450        | -                | 0.793 (0.262)    | -         |     2.07 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           37 |     1680 | 2024-05-15 | RED Canids        | L   | 0.735      | -            | -                | -                | -         |   -21.34 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           36 |     1682 | 2024-05-15 | Sharks            | W   | 0.734      | -            | -                | -                | -         |     0.84 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           35 |     1739 | 2024-05-14 | Smoke             | W   | 0.728      | -            | -                | -                | -         |     0.18 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           34 |     1744 | 2024-05-14 | Smoke             | W   | 0.728      | -            | -                | -                | -         |     0.18 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           33 |     1753 | 2024-05-14 | Galorys           | W   | 0.727      | -            | -                | -                | -         |     0.47 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           32 |     1771 | 2024-05-13 | Galorys           | W   | 0.722      | -            | -                | -                | -         |     0.47 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           31 |     1791 | 2024-05-12 | inSanitY          | W   | 0.715      | -            | -                | -                | -         |     0.63 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           30 |     1795 | 2024-05-12 | paiN              | L   | 0.714      | -            | -                | -                | -         |   -15.68 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           29 |     1821 | 2024-05-11 | KRÜ               | W   | 0.707      | -            | -                | -                | -         |     0.49 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           28 |     1849 | 2024-05-10 | inSanitY          | W   | 0.702      | -            | -                | -                | -         |     0.57 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           27 |     1892 | 2024-05-08 | Sharks            | W   | 0.688      | -            | -                | -                | -         |     0.71 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           26 |     1934 | 2024-05-06 | Vikings KR        | W   | 0.673      | -            | -                | -                | -         |     0.30 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           25 |     2027 | 2024-05-01 | Case              | W   | 0.641      | 0.450        | -                | 0.751 (0.216)    | -         |     0.43 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           24 |     2029 | 2024-05-01 | Case              | W   | 0.640      | -            | -                | -                | -         |     0.43 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           23 |     2297 | 2024-04-19 | OG                | L   | 0.562      | -            | -                | -                | -         |   -16.65 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           22 |     2348 | 2024-04-18 | Imperial          | L   | 0.555      | -            | -                | -                | -         |   -13.91 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           21 |     2357 | 2024-04-18 | FURIA             | W   | 0.554      | 0.589        | 0.355 (0.116)    | -                | 1 (0.554) |    11.61 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           20 |     2677 | 2024-04-08 | HEROIC            | L   | 0.485      | -            | -                | -                | -         |    -8.09 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           19 |     2686 | 2024-04-07 | G2                | L   | 0.483      | -            | -                | -                | -         |    -1.85 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           18 |     3644 | 2024-02-23 | FURIA             | W   | 0.189      | -            | -                | -                | -         |     4.34 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           17 |     3647 | 2024-02-23 | BESTIA            | W   | 0.187      | -            | -                | -                | -         |     0.22 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           16 |     3657 | 2024-02-22 | FURIA             | L   | 0.182      | -            | -                | -                | -         |    -1.56 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           15 |     3664 | 2024-02-22 | BESTIA            | W   | 0.181      | -            | -                | -                | -         |     0.21 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           14 |     3710 | 2024-02-20 | Solid             | W   | 0.168      | -            | -                | -                | -         |     0.10 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           13 |     3712 | 2024-02-20 | Case              | W   | 0.168      | -            | -                | -                | -         |     0.12 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           12 |     3716 | 2024-02-20 | Salao do Corte    | W   | 0.167      | -            | -                | -                | -         |     0.01 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           11 |     3768 | 2024-02-18 | LA RUGONETA       | L   | 0.153      | -            | -                | -                | -         |    -4.80 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           10 |     3809 | 2024-02-16 | Fluxo             | L   | 0.141      | -            | -                | -                | -         |    -4.25 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            9 |     3834 | 2024-02-15 | Imperial          | L   | 0.135      | -            | -                | -                | -         |    -3.49 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            8 |     3837 | 2024-02-15 | Case              | W   | 0.134      | -            | -                | -                | -         |     0.09 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            7 |     3840 | 2024-02-15 | KRÜ               | W   | 0.134      | -            | -                | -                | -         |     0.07 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            6 |     3865 | 2024-02-14 | 2GAME             | W   | 0.128      | -            | -                | -                | -         |     0.02 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            5 |     3929 | 2024-02-12 | LA RUGONETA       | W   | 0.114      | -            | -                | -                | -         |     0.01 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            4 |     4012 | 2024-02-04 | Imperial          | L   | 0.061      | -            | -                | -                | -         |    -1.58 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            3 |     4032 | 2024-02-03 | W7M               | W   | 0.056      | -            | -                | -                | -         |     0.02 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            2 |     4065 | 2024-02-02 | Imperial          | W   | 0.048      | -            | -                | -                | -         |     0.27 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            1 |     4070 | 2024-02-02 | ODDIK             | W   | 0.048      | -            | -                | -                | -         |     0.04 | buda, dgt, HUASOPEEK, MartinezSa, max   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($141,101.68)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.51) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.949 | $100,000.00    | $94,855.09      |
| 2024-06-09 |      0.901 | $7,500.00      | $6,759.19       |
| 2024-06-02 |      0.854 | $20,000.00     | $17,083.35      |
| 2024-05-19 |      0.761 | $4,000.00      | $3,044.87       |
| 2024-05-16 |      0.741 | $5,000.00      | $3,702.52       |
| 2024-05-12 |      0.714 | $15,000.00     | $10,717.24      |
| 2024-04-20 |      0.568 | $5,000.00      | $2,839.83       |
| 2024-04-14 |      0.525 | $4,000.00      | $2,099.59       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
