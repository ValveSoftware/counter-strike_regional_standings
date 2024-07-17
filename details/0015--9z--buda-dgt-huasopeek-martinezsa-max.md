### Roster Details<br />
Team Name: 9z<br />
Roster: buda, dgt, HUASOPEEK, MartinezSa, max<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [15](../standings_global.md)<br />
Regional Rank: [3]( ../standings_americas.md)<br />
Final Rank Value:  1608.6<br />
<br />
Final Rank Value (1608.6) = Starting Rank Value (1757.6) + Head To Head Adjustments (-148.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.821[<sup>1</sup>](#table2)
- Bounty Collected: 0.588[<sup>2</sup>](#table1)
- Opponent Network: 0.287[<sup>2</sup>](#table1)
- LAN Wins: 0.832[<sup>2</sup>](#table1)

The average of these factors is 0.632<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1757.6
- 400 + ( ( 0.632 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1757.6


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
|           71 |      309 | 2024-06-16 | fnatic            | W   | 0.996      | 0.548        | 0.300 (0.164)    | 0.632 (0.345)    | 1 (0.996) |    11.13 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           70 |      319 | 2024-06-16 | KOI               | W   | 0.994      | 0.548        | 0.091 (0.050)    | 0.448 (0.244)    | 1 (0.994) |     2.85 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           69 |      339 | 2024-06-15 | paiN              | W   | 0.988      | 0.548        | 0.476 (0.258)    | 0.763 (0.413)    | 1 (0.988) |    10.94 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           68 |      359 | 2024-06-15 | BESTIA            | W   | 0.986      | 0.548        | -                | 0.645 (0.348)    | 1 (0.986) |     1.80 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           67 |      380 | 2024-06-14 | Ninjas in Pyjamas | L   | 0.981      | -            | -                | -                | -         |   -10.72 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           66 |      588 | 2024-06-08 | Imperial          | L   | 0.942      | -            | -                | -                | -         |   -21.34 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           65 |      645 | 2024-06-07 | Sharks            | W   | 0.935      | -            | -                | -                | 0 (0.000) |     1.57 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           64 |      701 | 2024-06-06 | MIBR              | W   | 0.929      | 0.450        | 0.269 (0.112)    | 0.614 (0.257)    | 0 (0.000) |    13.48 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           63 |      770 | 2024-06-05 | RED Canids        | L   | 0.922      | -            | -                | -                | -         |   -25.95 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           62 |      822 | 2024-06-04 | Fluxo             | W   | 0.916      | 0.450        | 0.169 (0.070)    | 0.630 (0.260)    | -         |     1.75 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           61 |      903 | 2024-06-01 | G2                | L   | 0.895      | -            | -                | -                | -         |    -4.06 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           60 |      993 | 2024-05-29 | Vitality          | W   | 0.875      | 0.624        | 0.733 (0.400)    | -                | 1 (0.875) |    24.68 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           59 |     1033 | 2024-05-27 | Liquid            | W   | 0.863      | 0.624        | 0.494 (0.266)    | 0.510 (0.275)    | 1 (0.863) |    14.56 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           58 |     1045 | 2024-05-27 | MOUZ              | W   | 0.861      | 0.624        | 1.000 (0.537)    | 0.455 (0.244)    | 1 (0.861) |    25.24 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           57 |     1140 | 2024-05-22 | Imperial          | L   | 0.829      | -            | -                | -                | -         |   -17.95 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           56 |     1142 | 2024-05-22 | Imperial          | L   | 0.828      | -            | -                | -                | -         |   -19.06 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           55 |     1221 | 2024-05-20 | W7M               | W   | 0.815      | -            | -                | -                | -         |     0.29 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           54 |     1225 | 2024-05-20 | W7M               | W   | 0.815      | -            | -                | -                | -         |     0.29 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           53 |     1228 | 2024-05-20 | BESTIA            | L   | 0.814      | -            | -                | -                | -         |   -24.86 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           52 |     1230 | 2024-05-20 | BESTIA            | W   | 0.814      | 0.450        | -                | 0.645 (0.236)    | -         |     0.72 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           51 |     1251 | 2024-05-19 | RED Canids        | L   | 0.808      | -            | -                | -                | -         |   -23.13 | buda, HUASOPEEK, Luken, MartinezSa, max |
|           50 |     1280 | 2024-05-18 | Fluxo             | W   | 0.801      | 0.371        | 0.169 (0.050)    | -                | -         |     1.57 | buda, HUASOPEEK, Luken, MartinezSa, max |
|           49 |     1344 | 2024-05-16 | ODDIK             | W   | 0.789      | -            | -                | -                | -         |     0.57 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           48 |     1352 | 2024-05-16 | Imperial          | L   | 0.788      | -            | -                | -                | -         |   -18.53 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           47 |     1390 | 2024-05-15 | RED Canids        | W   | 0.782      | 0.450        | -                | 0.714 (0.251)    | -         |     1.76 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           46 |     1392 | 2024-05-15 | RED Canids        | L   | 0.782      | -            | -                | -                | -         |   -23.11 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           45 |     1394 | 2024-05-15 | Sharks            | W   | 0.782      | -            | -                | -                | -         |     0.60 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           44 |     1451 | 2024-05-14 | Smoke             | W   | 0.775      | -            | -                | -                | -         |     0.10 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           43 |     1456 | 2024-05-14 | Smoke             | W   | 0.775      | -            | -                | -                | -         |     0.10 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           42 |     1465 | 2024-05-14 | Galorys           | W   | 0.774      | -            | -                | -                | -         |     0.33 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           41 |     1483 | 2024-05-13 | Galorys           | W   | 0.769      | -            | -                | -                | -         |     0.33 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           40 |     1503 | 2024-05-12 | inSanitY          | W   | 0.762      | -            | -                | -                | -         |     0.46 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           39 |     1507 | 2024-05-12 | paiN              | L   | 0.762      | -            | -                | -                | -         |   -17.04 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           38 |     1533 | 2024-05-11 | KRÜ               | W   | 0.755      | -            | -                | -                | -         |     0.34 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           37 |     1561 | 2024-05-10 | inSanitY          | W   | 0.749      | -            | -                | -                | -         |     0.42 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           36 |     1604 | 2024-05-08 | Sharks            | W   | 0.735      | -            | -                | -                | -         |     0.50 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           35 |     1646 | 2024-05-06 | Vikings KR        | W   | 0.720      | -            | -                | -                | -         |     0.19 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           34 |     1739 | 2024-05-01 | Case              | W   | 0.688      | -            | -                | -                | -         |     0.31 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           33 |     1741 | 2024-05-01 | Case              | W   | 0.687      | -            | -                | -                | -         |     0.31 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           32 |     2009 | 2024-04-19 | OG                | L   | 0.610      | -            | -                | -                | -         |   -18.10 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           31 |     2060 | 2024-04-18 | Imperial          | L   | 0.602      | -            | -                | -                | -         |   -15.02 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           30 |     2069 | 2024-04-18 | FURIA             | W   | 0.601      | 0.589        | 0.253 (0.090)    | -                | 1 (0.601) |     6.54 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           29 |     2389 | 2024-04-08 | HEROIC            | L   | 0.532      | -            | -                | -                | -         |    -8.39 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           28 |     2398 | 2024-04-07 | G2                | L   | 0.530      | -            | -                | -                | -         |    -3.67 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           27 |     3356 | 2024-02-23 | FURIA             | W   | 0.236      | -            | -                | -                | -         |     2.83 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           26 |     3359 | 2024-02-23 | BESTIA            | W   | 0.235      | -            | -                | -                | -         |     0.15 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           25 |     3369 | 2024-02-22 | FURIA             | L   | 0.229      | -            | -                | -                | -         |    -4.54 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           24 |     3376 | 2024-02-22 | BESTIA            | W   | 0.228      | -            | -                | -                | -         |     0.14 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           23 |     3422 | 2024-02-20 | Solid             | W   | 0.216      | -            | -                | -                | -         |     0.08 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           22 |     3424 | 2024-02-20 | Case              | W   | 0.215      | -            | -                | -                | -         |     0.09 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           21 |     3428 | 2024-02-20 | Salao do Corte    | W   | 0.215      | -            | -                | -                | -         |     0.00 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           20 |     3480 | 2024-02-18 | LA RUGONETA       | L   | 0.200      | -            | -                | -                | -         |    -6.29 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           19 |     3521 | 2024-02-16 | Fluxo             | L   | 0.188      | -            | -                | -                | -         |    -5.78 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           18 |     3546 | 2024-02-15 | Imperial          | L   | 0.182      | -            | -                | -                | -         |    -4.68 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           17 |     3549 | 2024-02-15 | Case              | W   | 0.182      | -            | -                | -                | -         |     0.07 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           16 |     3552 | 2024-02-15 | KRÜ               | W   | 0.181      | -            | -                | -                | -         |     0.05 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           15 |     3577 | 2024-02-14 | 2GAME             | W   | 0.176      | -            | -                | -                | -         |     0.02 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           14 |     3641 | 2024-02-12 | LA RUGONETA       | W   | 0.161      | -            | -                | -                | -         |     0.01 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           13 |     3724 | 2024-02-04 | Imperial          | L   | 0.108      | -            | -                | -                | -         |    -2.79 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           12 |     3744 | 2024-02-03 | W7M               | W   | 0.103      | -            | -                | -                | -         |     0.02 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           11 |     3777 | 2024-02-02 | Imperial          | W   | 0.095      | -            | -                | -                | -         |     0.55 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           10 |     3782 | 2024-02-02 | ODDIK             | W   | 0.095      | -            | -                | -                | -         |     0.05 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            9 |     3943 | 2024-01-24 | Imperial          | L   | 0.036      | -            | -                | -                | -         |    -0.92 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            8 |     3961 | 2024-01-23 | Fluxo             | W   | 0.028      | -            | -                | -                | -         |     0.02 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            7 |     3984 | 2024-01-22 | Galorys           | W   | 0.022      | -            | -                | -                | -         |     0.01 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            6 |     4010 | 2024-01-21 | RED Canids        | L   | 0.017      | -            | -                | -                | -         |    -0.52 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            5 |     4013 | 2024-01-21 | W7M               | W   | 0.016      | -            | -                | -                | -         |     0.00 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            4 |     4020 | 2024-01-21 | Sharks            | W   | 0.014      | -            | -                | -                | -         |     0.01 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            3 |     4055 | 2024-01-20 | ODDIK             | L   | 0.008      | -            | -                | -                | -         |    -0.23 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            2 |     4092 | 2024-01-19 | adalYamigos       | W   | 0.003      | -            | -                | -                | -         |     0.00 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            1 |     4104 | 2024-01-19 | Legacy            | L   | 0.002      | -            | -                | -                | -         |    -0.05 | buda, dgt, HUASOPEEK, MartinezSa, max   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($148,681.32)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.61) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.996 | $100,000.00    | $99,577.61      |
| 2024-06-09 |      0.948 | $7,500.00      | $7,113.37       |
| 2024-06-02 |      0.901 | $20,000.00     | $18,027.85      |
| 2024-05-19 |      0.808 | $4,000.00      | $3,233.77       |
| 2024-05-16 |      0.788 | $5,000.00      | $3,938.65       |
| 2024-05-12 |      0.762 | $15,000.00     | $11,425.62      |
| 2024-04-20 |      0.615 | $5,000.00      | $3,075.95       |
| 2024-04-14 |      0.572 | $4,000.00      | $2,288.49       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
