### Roster Details<br />
Team Name: 9z<br />
Roster: dgt, HUASOPEEK, luchov, max, meyern<br />
Global Rank: [15](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [3]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  1632.8<br />
<br />
Final Rank Value (1632.8) = Starting Rank Value (1634.6) + Head To Head Adjustments (-1.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.626[<sup>1</sup>](#table2)
- Bounty Collected: 0.698[<sup>2</sup>](#table1)
- Opponent Network: 0.331[<sup>2</sup>](#table1)
- LAN Wins: 0.938[<sup>2</sup>](#table1)

The average of these factors is 0.648<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1634.6
- 400 + ( ( 0.648 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1634.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           58 |       89 | 2026-05-29 | FaZe               | L   | 1.000      | -            | -                | -                | -         |   -22.15 | dgt, HUASOPEEK, luchov, max, meyern    |
|           57 |      121 | 2026-05-28 | HEROIC             | W   | 1.000      | 0.500        | 0.156 (0.078)    | 0.454 (0.227)    | 1 (1.000) |     6.88 | dgt, HUASOPEEK, luchov, max, meyern    |
|           56 |      151 | 2026-05-27 | Sharks             | L   | 1.000      | -            | -                | -                | -         |   -26.98 | dgt, HUASOPEEK, luchov, max, meyern    |
|           55 |      577 | 2026-05-15 | magic              | L   | 1.000      | -            | -                | -                | -         |   -22.20 | dgt, HUASOPEEK, luchov, max, meyern    |
|           54 |      713 | 2026-05-11 | MOUZ               | W   | 1.000      | 1.000        | 0.877 (0.877)    | 0.470 (0.470)    | 1 (1.000) |    23.67 | dgt, HUASOPEEK, luchov, max, meyern    |
|           53 |      742 | 2026-05-10 | Falcons            | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.474 (0.474)    | 1 (1.000) |    26.56 | dgt, HUASOPEEK, luchov, max, meyern    |
|           52 |      780 | 2026-05-09 | PARIVISION         | W   | 1.000      | 1.000        | 0.671 (0.671)    | 0.419 (0.419)    | 1 (1.000) |    20.50 | dgt, HUASOPEEK, luchov, max, meyern    |
|           51 |     1195 | 2026-04-26 | Legacy             | L   | 0.962      | -            | -                | -                | -         |    -8.55 | dgt, HUASOPEEK, luchov, max, meyern    |
|           50 |     1266 | 2026-04-25 | Vasco              | W   | 0.955      | -            | -                | -                | 1 (0.955) |     0.31 | dgt, HUASOPEEK, luchov, max, meyern    |
|           49 |     1333 | 2026-04-24 | Legacy             | L   | 0.948      | -            | -                | -                | -         |    -9.02 | dgt, HUASOPEEK, luchov, max, meyern    |
|           48 |     1375 | 2026-04-23 | Vasco              | W   | 0.942      | -            | -                | -                | 1 (0.942) |     0.25 | dgt, HUASOPEEK, luchov, max, meyern    |
|           47 |     1418 | 2026-04-22 | ALKA               | W   | 0.934      | -            | -                | -                | 1 (0.934) |     0.11 | dgt, HUASOPEEK, luchov, max, meyern    |
|           46 |     1947 | 2026-04-03 | Turma do Pagode    | W   | 0.808      | 0.769        | 0.029 (0.018)    | 0.548 (0.341)    | -         |     2.50 | dgt, HUASOPEEK, luchov, max, meyern    |
|           45 |     2056 | 2026-04-02 | Turma do Pagode    | W   | 0.801      | 0.769        | 0.029 (0.018)    | 0.548 (0.338)    | -         |     2.28 | dgt, HUASOPEEK, luchov, max, meyern    |
|           44 |     2128 | 2026-04-01 | Fake do Biru       | W   | 0.796      | 0.769        | -                | 0.567 (0.347)    | -         |     0.63 | dgt, HUASOPEEK, luchov, max, meyern    |
|           43 |     2215 | 2026-03-31 | RED Canids Academy | W   | 0.789      | -            | -                | -                | -         |     0.06 | dgt, HUASOPEEK, luchov, max, meyern    |
|           42 |     2311 | 2026-03-30 | Legacy             | W   | 0.782      | 0.392        | 1.000 (0.307)    | 0.614 (0.188)    | 1 (0.782) |    20.09 | dgt, HUASOPEEK, luchov, max, meyern    |
|           41 |     2371 | 2026-03-29 | paiN               | W   | 0.775      | 0.392        | 0.251 (0.076)    | -                | 1 (0.775) |    10.08 | dgt, HUASOPEEK, luchov, max, meyern    |
|           40 |     2413 | 2026-03-29 | Imperial           | W   | 0.773      | -            | -                | -                | 1 (0.773) |     2.02 | dgt, HUASOPEEK, luchov, max, meyern    |
|           39 |     2577 | 2026-03-26 | Marsborne          | W   | 0.756      | -            | -                | -                | -         |     1.48 | dgt, HUASOPEEK, luchov, max, meyern    |
|           38 |     2580 | 2026-03-26 | GameHunters        | W   | 0.755      | -            | -                | -                | -         |     0.33 | dgt, HUASOPEEK, luchov, max, meyern    |
|           37 |     2816 | 2026-03-22 | Spirit             | L   | 0.728      | -            | -                | -                | -         |    -3.04 | dgt, HUASOPEEK, luchov, max, meyern    |
|           36 |     2878 | 2026-03-21 | MOUZ               | W   | 0.720      | 1.000        | 0.877 (0.632)    | 0.470 (0.339)    | -         |    19.40 | dgt, HUASOPEEK, luchov, max, meyern    |
|           35 |     2977 | 2026-03-19 | Vitality           | L   | 0.708      | -            | -                | -                | -         |    -1.94 | dgt, HUASOPEEK, luchov, max, meyern    |
|           34 |     3494 | 2026-03-08 | Marsborne          | W   | 0.635      | -            | -                | -                | -         |     1.25 | dgt, HUASOPEEK, luchov, max, meyern    |
|           33 |     3558 | 2026-03-07 | Sharks             | W   | 0.629      | -            | -                | -                | -         |     3.96 | dgt, HUASOPEEK, luchov, max, meyern    |
|           32 |     3569 | 2026-03-07 | RED Canids         | W   | 0.628      | -            | -                | -                | -         |     2.05 | dgt, HUASOPEEK, luchov, max, meyern    |
|           31 |     3694 | 2026-03-04 | BESTIA             | W   | 0.611      | -            | -                | -                | -         |     2.34 | dgt, HUASOPEEK, luchov, max, meyern    |
|           30 |     3696 | 2026-03-04 | Fake do Biru       | W   | 0.610      | -            | -                | -                | -         |     0.54 | dgt, HUASOPEEK, luchov, max, meyern    |
|           29 |     3837 | 2026-03-01 | Sharks             | W   | 0.589      | -            | -                | -                | -         |     3.69 | dgt, HUASOPEEK, luchov, max, meyern    |
|           28 |     3880 | 2026-02-28 | RED Canids         | W   | 0.583      | -            | -                | -                | -         |     2.04 | dgt, HUASOPEEK, luchov, max, meyern    |
|           27 |     3886 | 2026-02-28 | Fluxo              | W   | 0.582      | -            | -                | -                | -         |     1.82 | dgt, HUASOPEEK, luchov, max, meyern    |
|           26 |     3936 | 2026-02-27 | Marsborne          | W   | 0.574      | -            | -                | -                | -         |     0.96 | dgt, HUASOPEEK, luchov, max, meyern    |
|           25 |     3977 | 2026-02-26 | Sharks             | L   | 0.570      | -            | -                | -                | -         |   -14.70 | dgt, HUASOPEEK, luchov, max, meyern    |
|           24 |     4050 | 2026-02-25 | Turma do Pagode    | W   | 0.562      | -            | -                | -                | -         |     2.18 | dgt, HUASOPEEK, luchov, max, meyern    |
|           23 |     4621 | 2026-02-14 | Sharks             | L   | 0.489      | -            | -                | -                | -         |   -12.96 | dgt, HUASOPEEK, luchov, max, meyern    |
|           22 |     4690 | 2026-02-13 | Bounty Hunters     | W   | 0.482      | -            | -                | -                | -         |     0.84 | dgt, HUASOPEEK, luchov, max, meyern    |
|           21 |     4869 | 2026-02-08 | ex-KRÜ             | W   | 0.449      | -            | -                | -                | -         |     0.16 | dgt, HUASOPEEK, luchov, max, meyern    |
|           20 |     4889 | 2026-02-08 | Sharks             | W   | 0.447      | 0.769        | 0.060 (0.021)    | -                | -         |     2.20 | dgt, HUASOPEEK, luchov, max, meyern    |
|           19 |     4907 | 2026-02-07 | Imperial           | W   | 0.440      | 0.769        | -                | 0.485 (0.164)    | -         |     1.13 | dgt, HUASOPEEK, luchov, max, meyern    |
|           18 |     4934 | 2026-02-06 | Fake do Biru       | W   | 0.435      | -            | -                | -                | -         |     0.40 | dgt, HUASOPEEK, luchov, max, meyern    |
|           17 |     4944 | 2026-02-06 | Gaimin Gladiators  | W   | 0.434      | -            | -                | -                | -         |     1.52 | dgt, HUASOPEEK, luchov, max, meyern    |
|           16 |     5020 | 2026-02-03 | ShindeN            | W   | 0.414      | -            | -                | -                | -         |     1.54 | dgt, HUASOPEEK, luchov, max, meyern    |
|           15 |     5108 | 2026-01-31 | MIBR               | L   | 0.396      | -            | -                | -                | -         |    -7.60 | dgt, HUASOPEEK, luchov, max, meyern    |
|           14 |     5112 | 2026-01-31 | Sharks             | W   | 0.395      | -            | -                | -                | -         |     1.87 | dgt, HUASOPEEK, luchov, max, meyern    |
|           13 |     5148 | 2026-01-30 | SUPERMATCH         | W   | 0.389      | -            | -                | -                | -         |     0.03 | dgt, HUASOPEEK, luchov, max, meyern    |
|           12 |     5149 | 2026-01-30 | MIBR               | L   | 0.389      | -            | -                | -                | -         |    -7.72 | dgt, HUASOPEEK, luchov, max, meyern    |
|           11 |     5273 | 2026-01-25 | RED Canids         | W   | 0.354      | -            | -                | -                | -         |     1.04 | dgt, HUASOPEEK, luchov, max, meyern    |
|           10 |     5295 | 2026-01-24 | Gaimin Gladiators  | L   | 0.348      | -            | -                | -                | -         |    -9.89 | dgt, HUASOPEEK, luchov, max, meyern    |
|            9 |     5315 | 2026-01-24 | Fake do Biru       | W   | 0.346      | -            | -                | -                | -         |     0.28 | dgt, HUASOPEEK, luchov, max, meyern    |
|            8 |     5346 | 2026-01-23 | Keyd Stars         | W   | 0.341      | -            | -                | -                | -         |     0.01 | dgt, HUASOPEEK, luchov, max, meyern    |
|            7 |     5396 | 2026-01-22 | ShindeN            | L   | 0.334      | -            | -                | -                | -         |    -9.47 | dgt, HUASOPEEK, luchov, max, meyern    |
|            6 |     5413 | 2026-01-22 | MIBR               | L   | 0.333      | -            | -                | -                | -         |    -6.99 | dgt, HUASOPEEK, luchov, max, meyern    |
|            5 |     5415 | 2026-01-22 | Keyd Stars         | W   | 0.333      | -            | -                | -                | -         |     0.01 | dgt, HUASOPEEK, luchov, max, meyern    |
|            4 |     5432 | 2026-01-21 | Sharks             | W   | 0.329      | -            | -                | -                | -         |     1.39 | dgt, HUASOPEEK, luchov, max, meyern    |
|            3 |     5446 | 2026-01-21 | Imperial           | L   | 0.327      | -            | -                | -                | -         |    -9.60 | dgt, HUASOPEEK, luchov, meyern, urban0 |
|            2 |     5530 | 2026-01-17 | Galorys            | W   | 0.302      | -            | -                | -                | -         |     0.56 | dgt, HUASOPEEK, luchov, meyern, urban0 |
|            1 |     5541 | 2026-01-17 | ALZON              | W   | 0.301      | -            | -                | -                | -         |     0.02 | dgt, HUASOPEEK, luchov, meyern, urban0 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($157,710.17)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.25) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-30 |      1.000 | $9,000.00      | $9,000.00       |
| 2026-05-17 |      1.000 | $80,000.00     | $80,000.00      |
| 2026-04-26 |      0.962 | $8,750.00      | $8,417.78       |
| 2026-03-30 |      0.782 | $8,442.00      | $6,604.81       |
| 2026-03-29 |      0.773 | $32,500.00     | $25,107.73      |
| 2026-03-08 |      0.635 | $14,000.00     | $8,886.90       |
| 2026-03-01 |      0.589 | $30,000.00     | $17,676.01      |
| 2026-02-15 |      0.495 | $750.00        | $371.38         |
| 2026-02-01 |      0.403 | $1,000.00      | $402.82         |
| 2026-01-25 |      0.355 | $3,500.00      | $1,242.74       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
