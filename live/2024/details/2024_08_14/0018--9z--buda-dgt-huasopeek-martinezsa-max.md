### Roster Details<br />
Team Name: 9z<br />
Roster: buda, dgt, HUASOPEEK, MartinezSa, max<br />
Global Rank: [18](../../standings_global_2024_08_14.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_08_14.md)<br />
Regional Rank: [5]( ../../standings_americas_2024_08_14.md)<br />
<br />
Final Rank Value:  1458.4<br />
<br />
Final Rank Value (1458.4) = Starting Rank Value (1571.2) + Head To Head Adjustments (-112.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.720[<sup>1</sup>](#table2)
- Bounty Collected: 0.547[<sup>2</sup>](#table1)
- Opponent Network: 0.250[<sup>2</sup>](#table1)
- LAN Wins: 0.858[<sup>2</sup>](#table1)

The average of these factors is 0.594<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1571.2
- 400 + ( ( 0.594 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 1571.2


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
|           59 |      106 | 2024-08-11 | paiN              | L   | 1.000      | -            | -                | -                | -         |   -14.97 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           58 |      132 | 2024-08-10 | Astralis          | L   | 1.000      | -            | -                | -                | -         |    -7.59 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           57 |      167 | 2024-08-09 | MIBR              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     9.22 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           56 |      238 | 2024-08-07 | 3DMAX             | W   | 1.000      | 0.143        | 0.508 (0.073)    | -                | 1 (1.000) |    12.92 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           55 |      632 | 2024-07-27 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -30.22 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           54 |      690 | 2024-07-25 | RUBY              | W   | 1.000      | 0.435        | 0.089 (0.038)    | 0.453 (0.197)    | -         |     1.09 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           53 |     1320 | 2024-06-16 | fnatic            | W   | 0.808      | 0.548        | 0.352 (0.156)    | 0.639 (0.283)    | 1 (0.808) |    10.04 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           52 |     1330 | 2024-06-16 | KOI               | W   | 0.806      | -            | -                | -                | 1 (0.806) |     2.15 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           51 |     1350 | 2024-06-15 | paiN              | W   | 0.800      | 0.548        | 0.369 (0.162)    | 0.874 (0.383)    | 1 (0.800) |    11.89 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           50 |     1370 | 2024-06-15 | BESTIA            | W   | 0.798      | 0.548        | 0.112 (0.049)    | 0.880 (0.385)    | 1 (0.798) |     1.95 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           49 |     1391 | 2024-06-14 | Ninjas in Pyjamas | L   | 0.793      | -            | -                | -                | -         |   -10.51 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           48 |     1599 | 2024-06-08 | Imperial          | L   | 0.754      | -            | -                | -                | -         |   -19.09 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           47 |     1656 | 2024-06-07 | Sharks            | W   | 0.747      | -            | -                | -                | -         |     1.56 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           46 |     1712 | 2024-06-06 | MIBR              | W   | 0.741      | 0.450        | 0.204 (0.068)    | 0.655 (0.218)    | -         |     9.80 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           45 |     1781 | 2024-06-05 | RED Canids        | L   | 0.735      | -            | -                | -                | -         |   -20.66 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           44 |     1833 | 2024-06-04 | Fluxo             | W   | 0.728      | 0.450        | -                | 0.645 (0.211)    | -         |     1.55 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           43 |     1914 | 2024-06-01 | G2                | L   | 0.707      | -            | -                | -                | -         |    -1.67 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           42 |     2004 | 2024-05-29 | Vitality          | W   | 0.687      | 0.624        | 0.606 (0.260)    | -                | 1 (0.687) |    19.13 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           41 |     2044 | 2024-05-27 | Liquid            | W   | 0.675      | 0.624        | 0.432 (0.182)    | 0.462 (0.195)    | 1 (0.675) |    16.35 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           40 |     2056 | 2024-05-27 | MOUZ              | W   | 0.673      | 0.624        | 1.000 (0.420)    | -                | 1 (0.673) |    19.29 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           39 |     2151 | 2024-05-22 | Imperial          | L   | 0.641      | -            | -                | -                | -         |   -15.92 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           38 |     2153 | 2024-05-22 | Imperial          | L   | 0.641      | -            | -                | -                | -         |   -16.49 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           37 |     2232 | 2024-05-20 | W7M               | W   | 0.627      | -            | -                | -                | -         |     0.38 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           36 |     2236 | 2024-05-20 | W7M               | W   | 0.627      | -            | -                | -                | -         |     0.38 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           35 |     2239 | 2024-05-20 | BESTIA            | L   | 0.627      | -            | -                | -                | -         |   -18.80 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           34 |     2241 | 2024-05-20 | BESTIA            | W   | 0.626      | 0.450        | -                | 0.880 (0.248)    | -         |     0.89 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           33 |     2262 | 2024-05-19 | RED Canids        | L   | 0.621      | -            | -                | -                | -         |   -17.68 | buda, HUASOPEEK, Luken, MartinezSa, max |
|           32 |     2291 | 2024-05-18 | Fluxo             | W   | 0.613      | -            | -                | -                | -         |     1.34 | buda, HUASOPEEK, Luken, MartinezSa, max |
|           31 |     2355 | 2024-05-16 | ODDIK             | W   | 0.601      | 0.371        | -                | 0.822 (0.183)    | -         |     0.80 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           30 |     2363 | 2024-05-16 | Imperial          | L   | 0.600      | -            | -                | -                | -         |   -15.78 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           29 |     2401 | 2024-05-15 | RED Canids        | W   | 0.595      | 0.450        | -                | 0.728 (0.195)    | -         |     1.49 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           28 |     2403 | 2024-05-15 | RED Canids        | L   | 0.594      | -            | -                | -                | -         |   -17.41 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           27 |     2405 | 2024-05-15 | Sharks            | W   | 0.594      | -            | -                | -                | -         |     0.70 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           26 |     2462 | 2024-05-14 | Smoke             | W   | 0.587      | -            | -                | -                | -         |     0.18 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           25 |     2467 | 2024-05-14 | Smoke             | W   | 0.587      | -            | -                | -                | -         |     0.18 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           24 |     2476 | 2024-05-14 | Galorys           | W   | 0.586      | -            | -                | -                | -         |     0.44 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           23 |     2494 | 2024-05-13 | Galorys           | W   | 0.581      | -            | -                | -                | -         |     0.44 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           22 |     2514 | 2024-05-12 | inSanitY          | W   | 0.575      | -            | -                | -                | -         |     0.50 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           21 |     2518 | 2024-05-12 | paiN              | L   | 0.574      | -            | -                | -                | -         |    -9.88 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           20 |     2544 | 2024-05-11 | KRÜ               | W   | 0.567      | -            | -                | -                | -         |     0.44 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           19 |     2572 | 2024-05-10 | inSanitY          | W   | 0.562      | -            | -                | -                | -         |     0.47 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           18 |     2615 | 2024-05-08 | Sharks            | W   | 0.548      | -            | -                | -                | -         |     0.60 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           17 |     2657 | 2024-05-06 | Vikings KR        | W   | 0.533      | -            | -                | -                | -         |     0.27 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           16 |     2750 | 2024-05-01 | Case              | W   | 0.500      | -            | -                | -                | -         |     0.41 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           15 |     2752 | 2024-05-01 | Case              | W   | 0.500      | -            | -                | -                | -         |     0.41 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           14 |     3020 | 2024-04-19 | OG                | L   | 0.422      | -            | -                | -                | -         |   -12.73 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           13 |     3071 | 2024-04-18 | Imperial          | L   | 0.414      | -            | -                | -                | -         |   -11.48 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           12 |     3080 | 2024-04-18 | FURIA             | W   | 0.413      | 0.589        | 0.301 (0.073)    | -                | 1 (0.413) |     8.11 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           11 |     3400 | 2024-04-08 | HEROIC            | L   | 0.344      | -            | -                | -                | -         |    -6.66 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           10 |     3409 | 2024-04-07 | G2                | L   | 0.342      | -            | -                | -                | -         |    -0.95 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            9 |     4367 | 2024-02-23 | FURIA             | W   | 0.048      | -            | -                | -                | -         |     1.00 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            8 |     4370 | 2024-02-23 | BESTIA            | W   | 0.047      | -            | -                | -                | -         |     0.06 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            7 |     4380 | 2024-02-22 | FURIA             | L   | 0.041      | -            | -                | -                | -         |    -0.45 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            6 |     4387 | 2024-02-22 | BESTIA            | W   | 0.040      | -            | -                | -                | -         |     0.05 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            5 |     4433 | 2024-02-20 | Solid             | W   | 0.028      | -            | -                | -                | -         |     0.01 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            4 |     4435 | 2024-02-20 | Case              | W   | 0.027      | -            | -                | -                | -         |     0.02 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            3 |     4439 | 2024-02-20 | Salao do Corte    | W   | 0.027      | -            | -                | -                | -         |     0.00 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            2 |     4491 | 2024-02-18 | LA RUGONETA       | L   | 0.012      | -            | -                | -                | -         |    -0.39 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            1 |     4532 | 2024-02-16 | Fluxo             | L   | 0.000      | -            | -                | -                | -         |    -0.01 | buda, dgt, HUASOPEEK, MartinezSa, max   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($130,546.42)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.41) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-13 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-07-28 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-16 |      0.808 | $100,000.00    | $80,801.97      |
| 2024-06-09 |      0.761 | $7,500.00      | $5,705.20       |
| 2024-06-02 |      0.714 | $20,000.00     | $14,272.72      |
| 2024-05-19 |      0.621 | $4,000.00      | $2,482.75       |
| 2024-05-16 |      0.600 | $5,000.00      | $2,999.87       |
| 2024-05-12 |      0.574 | $15,000.00     | $8,609.27       |
| 2024-04-20 |      0.427 | $5,000.00      | $2,137.17       |
| 2024-04-14 |      0.384 | $4,000.00      | $1,537.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
