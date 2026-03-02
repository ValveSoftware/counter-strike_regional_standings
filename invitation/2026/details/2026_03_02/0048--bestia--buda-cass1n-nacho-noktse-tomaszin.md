### Roster Details<br />
Team Name: BESTIA<br />
Roster: buda, cass1n, nacho, Noktse, tomaszin<br />
Global Rank: [48](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_02.md)<br />
Regional Rank: [11]( ../../standings_americas_2026_03_02.md)<br />
<br />
Final Rank Value:  1200.1<br />
<br />
Final Rank Value (1200.1) = Starting Rank Value (1231.0) + Head To Head Adjustments (-30.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.436[<sup>1</sup>](#table2)
- Bounty Collected: 0.358[<sup>2</sup>](#table1)
- Opponent Network: 0.168[<sup>2</sup>](#table1)
- LAN Wins: 0.795[<sup>2</sup>](#table1)

The average of these factors is 0.439<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1231.0
- 400 + ( ( 0.439 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1231.0


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
|           53 |      124 | 2026-02-26 | ENCE              | L   | 1.000      | -            | -                | -                | -         |   -16.06 | buda, cass1n, nacho, Noktse, tomaszin  |
|           52 |      167 | 2026-02-25 | Oramond           | W   | 1.000      | 0.354        | 0.102 (0.036)    | 0.867 (0.307)    | 1 (1.000) |    11.73 | buda, cass1n, nacho, Noktse, tomaszin  |
|           51 |      172 | 2026-02-25 | MANA              | L   | 1.000      | -            | -                | -                | -         |   -26.84 | buda, cass1n, nacho, Noktse, tomaszin  |
|           50 |      375 | 2026-02-20 | 100 Thieves       | L   | 1.000      | -            | -                | -                | -         |   -14.76 | buda, cass1n, nacho, Noktse, tomaszin  |
|           49 |      379 | 2026-02-20 | Monte             | L   | 1.000      | -            | -                | -                | -         |    -8.25 | buda, cass1n, nacho, Noktse, tomaszin  |
|           48 |     1123 | 2026-02-01 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |   -15.42 | buda, cass1n, Noktse, timo, tomaszin   |
|           47 |     1149 | 2026-01-31 | Marsborne         | W   | 1.000      | 0.371        | 0.050 (0.019)    | 0.556 (0.206)    | 1 (1.000) |     9.45 | buda, cass1n, Noktse, timo, tomaszin   |
|           46 |     1196 | 2026-01-30 | Marsborne         | W   | 0.994      | 0.371        | 0.050 (0.019)    | 0.556 (0.205)    | 1 (0.994) |     9.91 | buda, cass1n, Noktse, timo, tomaszin   |
|           45 |     1203 | 2026-01-30 | Isurus            | W   | 0.993      | 0.371        | -                | 0.214 (0.079)    | 1 (0.993) |     2.48 | buda, cass1n, Noktse, timo, tomaszin   |
|           44 |     1363 | 2026-01-23 | RED Canids        | L   | 0.949      | -            | -                | -                | -         |   -14.15 | buda, cass1n, Noktse, timo, tomaszin   |
|           43 |     1417 | 2026-01-22 | ShindeN           | W   | 0.942      | 0.143        | 0.040 (0.005)    | -                | -         |    10.85 | buda, cass1n, Noktse, timo, tomaszin   |
|           42 |     1422 | 2026-01-22 | RED Canids        | L   | 0.941      | -            | -                | -                | -         |   -14.83 | buda, cass1n, Noktse, timo, tomaszin   |
|           41 |     1456 | 2026-01-21 | ShindeN           | W   | 0.936      | -            | -                | -                | -         |     9.38 | buda, cass1n, Noktse, timo, tomaszin   |
|           40 |     1477 | 2026-01-21 | ODDIK             | W   | 0.934      | 0.143        | 0.051 (0.007)    | -                | -         |     7.76 | buda, cass1n, Noktse, timo, tomaszin   |
|           39 |     1881 | 2025-12-21 | CYBERSHOKE        | W   | 0.727      | 0.339        | 0.038 (0.009)    | 0.703 (0.173)    | 1 (0.727) |    10.84 | buda, cass1n, Noktse, timo, tomaszin   |
|           38 |     1887 | 2025-12-21 | Friendly Campers  | W   | 0.726      | 0.339        | 0.070 (0.017)    | 0.408 (0.100)    | 1 (0.726) |     9.89 | buda, cass1n, Noktse, timo, tomaszin   |
|           37 |     1904 | 2025-12-20 | CYBERSHOKE        | L   | 0.721      | -            | -                | -                | -         |   -11.88 | buda, cass1n, Noktse, timo, tomaszin   |
|           36 |     1925 | 2025-12-19 | illwill           | W   | 0.714      | 0.339        | 0.093 (0.023)    | 1.000 (0.242)    | 1 (0.714) |    17.63 | buda, cass1n, Noktse, timo, tomaszin   |
|           35 |     1937 | 2025-12-19 | 9INE              | W   | 0.712      | 0.339        | 0.072 (0.017)    | 0.699 (0.169)    | 1 (0.712) |    13.53 | buda, cass1n, Noktse, timo, tomaszin   |
|           34 |     1954 | 2025-12-18 | Lazer Cats        | W   | 0.706      | 0.339        | -                | 0.466 (0.111)    | 1 (0.706) |     3.73 | buda, cass1n, Noktse, timo, tomaszin   |
|           33 |     2578 | 2025-11-19 | Gaimin Gladiators | L   | 0.516      | -            | -                | -                | -         |   -11.27 | buda, cass1n, Noktse, timo, tomaszin   |
|           32 |     2640 | 2025-11-15 | 9z                | W   | 0.488      | 0.371        | 0.044 (0.008)    | -                | -         |     2.52 | buda, cass1n, Noktse, timo, tomaszin   |
|           31 |     2644 | 2025-11-15 | Gaimin Gladiators | W   | 0.487      | -            | -                | -                | -         |     4.78 | buda, cass1n, Noktse, timo, tomaszin   |
|           30 |     2665 | 2025-11-14 | Bounty Hunters    | W   | 0.481      | -            | -                | -                | -         |     2.89 | buda, cass1n, Noktse, timo, tomaszin   |
|           29 |     2680 | 2025-11-13 | Procyon           | W   | 0.476      | -            | -                | -                | -         |     1.95 | buda, cass1n, Noktse, timo, tomaszin   |
|           28 |     2710 | 2025-11-12 | Bounty Hunters    | L   | 0.469      | -            | -                | -                | -         |   -12.27 | cass1n, Lekzi, Noktse, timo, tomaszin  |
|           27 |     2747 | 2025-11-11 | ex-KRÜ            | W   | 0.462      | -            | -                | -                | -         |     0.66 | cass1n, Lekzi, Noktse, timo, tomaszin  |
|           26 |     2775 | 2025-11-10 | LP                | W   | 0.455      | 0.363        | -                | 0.530 (0.088)    | -         |     1.05 | cass1n, Lekzi, Noktse, timo, tomaszin  |
|           25 |     3259 | 2025-10-27 | Fake do Biru      | W   | 0.362      | -            | -                | -                | -         |     1.71 | cass1n, luchov, Noktse, timo, tomaszin |
|           24 |     3305 | 2025-10-26 | ShindeN           | L   | 0.355      | -            | -                | -                | -         |    -7.41 | cass1n, luchov, Noktse, timo, tomaszin |
|           23 |     3332 | 2025-10-26 | Bounty Hunters    | L   | 0.354      | -            | -                | -                | -         |    -9.75 | cass1n, luchov, Noktse, timo, tomaszin |
|           22 |     3383 | 2025-10-25 | Sharks            | L   | 0.347      | -            | -                | -                | -         |    -2.82 | cass1n, luchov, Noktse, timo, tomaszin |
|           21 |     3430 | 2025-10-24 | Procyon           | W   | 0.341      | -            | -                | -                | -         |     1.31 | cass1n, luchov, Noktse, timo, tomaszin |
|           20 |     3442 | 2025-10-24 | Bounty Hunters    | W   | 0.340      | -            | -                | -                | -         |     1.32 | cass1n, luchov, Noktse, timo, tomaszin |
|           19 |     3752 | 2025-10-12 | 9z                | W   | 0.262      | -            | -                | -                | 1 (0.262) |     1.03 | cass1n, luchov, Noktse, timo, tomaszin |
|           18 |     3767 | 2025-10-11 | Dusty Roots       | W   | 0.256      | -            | -                | -                | -         |     0.51 | cass1n, luchov, Noktse, timo, tomaszin |
|           17 |     3793 | 2025-10-10 | ShindeN           | W   | 0.248      | -            | -                | -                | -         |     2.74 | cass1n, luchov, Noktse, timo, tomaszin |
|           16 |     4312 | 2025-09-29 | MIBR              | L   | 0.174      | -            | -                | -                | -         |    -1.28 | cass1n, luchov, Noktse, timo, tomaszin |
|           15 |     4343 | 2025-09-28 | ODDIK             | W   | 0.168      | -            | -                | -                | -         |     1.88 | cass1n, luchov, Noktse, timo, tomaszin |
|           14 |     4386 | 2025-09-27 | Bounty Hunters    | W   | 0.164      | -            | -                | -                | -         |     0.67 | cass1n, luchov, Noktse, timo, tomaszin |
|           13 |     4531 | 2025-09-24 | 9z                | L   | 0.142      | -            | -                | -                | -         |    -3.92 | cass1n, luchov, Noktse, timo, tomaszin |
|           12 |     4541 | 2025-09-24 | Dusty Roots       | L   | 0.141      | -            | -                | -                | -         |    -4.18 | cass1n, luchov, Noktse, timo, tomaszin |
|           11 |     4595 | 2025-09-21 | Fake do Biru      | L   | 0.122      | -            | -                | -                | -         |    -3.30 | cass1n, luchov, Noktse, timo, tomaszin |
|           10 |     4653 | 2025-09-19 | RED Canids        | W   | 0.108      | -            | -                | -                | -         |     2.05 | cass1n, luchov, Noktse, timo, tomaszin |
|            9 |     4687 | 2025-09-18 | Yawara            | W   | 0.102      | -            | -                | -                | -         |     0.30 | cass1n, luchov, Noktse, timo, tomaszin |
|            8 |     4723 | 2025-09-17 | ODDIK             | W   | 0.095      | -            | -                | -                | -         |     1.04 | cass1n, luchov, Noktse, timo, tomaszin |
|            7 |     4754 | 2025-09-16 | Sharks            | L   | 0.089      | -            | -                | -                | -         |    -0.67 | cass1n, luchov, Noktse, timo, tomaszin |
|            6 |     4756 | 2025-09-16 | RED Canids        | W   | 0.088      | -            | -                | -                | -         |     1.69 | cass1n, luchov, Noktse, timo, tomaszin |
|            5 |     4777 | 2025-09-15 | Fluxo             | W   | 0.082      | -            | -                | -                | -         |     1.03 | cass1n, luchov, Noktse, timo, tomaszin |
|            4 |     4807 | 2025-09-14 | LP                | W   | 0.076      | -            | -                | -                | -         |     0.17 | cass1n, luchov, Noktse, timo, tomaszin |
|            3 |     4906 | 2025-09-12 | Keyd Stars        | W   | 0.062      | -            | -                | -                | -         |     0.18 | cass1n, luchov, Noktse, timo, tomaszin |
|            2 |     4957 | 2025-09-11 | Fluxo             | W   | 0.055      | -            | -                | -                | -         |     0.69 | cass1n, luchov, Noktse, timo, tomaszin |
|            1 |     5055 | 2025-09-09 | Yawara            | L   | 0.042      | -            | -                | -                | -         |    -1.20 | cass1n, luchov, Noktse, timo, tomaszin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,099.49)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-01 |      1.000 | $1,250.00      | $1,250.00       |
| 2025-12-21 |      0.727 | $5,584.00      | $4,059.75       |
| 2025-11-15 |      0.489 | $1,500.00      | $732.92         |
| 2025-11-15 |      0.488 | $10,000.00     | $4,875.75       |
| 2025-10-12 |      0.262 | $20,000.00     | $5,243.47       |
| 2025-09-30 |      0.183 | $1,782.00      | $326.50         |
| 2025-09-22 |      0.129 | $2,000.00      | $257.08         |
| 2025-09-16 |      0.089 | $4,000.00      | $354.02         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
