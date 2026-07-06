### Roster Details<br />
Team Name: 9z<br />
Roster: dgt, HUASOPEEK, luchov, max, meyern<br />
Global Rank: [12](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_06.md)<br />
Regional Rank: [3]( ../../standings_americas_2026_07_06.md)<br />
<br />
Final Rank Value:  1684.4<br />
<br />
Final Rank Value (1684.4) = Starting Rank Value (1691.9) + Head To Head Adjustments (-7.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.656[<sup>1</sup>](#table2)
- Bounty Collected: 0.766[<sup>2</sup>](#table1)
- Opponent Network: 0.338[<sup>2</sup>](#table1)
- LAN Wins: 0.982[<sup>2</sup>](#table1)

The average of these factors is 0.685<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1691.9
- 400 + ( ( 0.685 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 1691.9


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
|           68 |      216 | 2026-06-18 | FURIA              | L   | 1.000      | -            | -                | -                | -         |   -11.57 | dgt, HUASOPEEK, luchov, max, meyern    |
|           67 |      258 | 2026-06-15 | The MongolZ        | W   | 1.000      | 1.000        | 0.499 (0.499)    | 0.407 (0.407)    | 1 (1.000) |    14.09 | dgt, HUASOPEEK, luchov, max, meyern    |
|           66 |      278 | 2026-06-14 | Aurora             | L   | 1.000      | -            | -                | -                | -         |   -14.69 | dgt, HUASOPEEK, luchov, max, meyern    |
|           65 |      296 | 2026-06-13 | Spirit             | L   | 1.000      | -            | -                | -                | -         |    -4.87 | dgt, HUASOPEEK, luchov, max, meyern    |
|           64 |      354 | 2026-06-12 | Vitality           | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.446 (0.446)    | 1 (1.000) |    24.63 | dgt, HUASOPEEK, luchov, max, meyern    |
|           63 |      394 | 2026-06-11 | PARIVISION         | W   | 1.000      | 1.000        | 0.482 (0.482)    | 0.303 (0.303)    | 1 (1.000) |     8.96 | dgt, HUASOPEEK, luchov, max, meyern    |
|           62 |      441 | 2026-06-08 | TYLOO              | W   | 1.000      | 0.809        | 0.098 (0.079)    | 0.629 (0.509)    | 1 (1.000) |     6.64 | dgt, HUASOPEEK, luchov, max, meyern    |
|           61 |      459 | 2026-06-07 | Spirit             | L   | 1.000      | -            | -                | -                | -         |    -4.52 | dgt, HUASOPEEK, luchov, max, meyern    |
|           60 |      490 | 2026-06-06 | Astralis           | W   | 1.000      | 0.809        | 0.531 (0.430)    | 0.322 (0.260)    | 1 (1.000) |    13.18 | dgt, HUASOPEEK, luchov, max, meyern    |
|           59 |      505 | 2026-06-06 | FlyQuest           | W   | 0.999      | 0.809        | -                | 0.296 (0.239)    | 1 (0.999) |     1.78 | dgt, HUASOPEEK, luchov, max, meyern    |
|           58 |      718 | 2026-05-29 | FaZe               | L   | 0.946      | -            | -                | -                | -         |   -24.34 | dgt, HUASOPEEK, luchov, max, meyern    |
|           57 |      755 | 2026-05-28 | HEROIC             | W   | 0.940      | -            | -                | -                | 1 (0.940) |     3.33 | dgt, HUASOPEEK, luchov, max, meyern    |
|           56 |      790 | 2026-05-27 | Sharks             | L   | 0.935      | -            | -                | -                | -         |   -25.67 | dgt, HUASOPEEK, luchov, max, meyern    |
|           55 |     1238 | 2026-05-15 | magic              | L   | 0.853      | -            | -                | -                | -         |   -22.18 | dgt, HUASOPEEK, luchov, max, meyern    |
|           54 |     1374 | 2026-05-11 | MOUZ               | W   | 0.826      | 1.000        | 0.788 (0.651)    | 0.413 (0.341)    | 1 (0.826) |    16.40 | dgt, HUASOPEEK, luchov, max, meyern    |
|           53 |     1403 | 2026-05-10 | Falcons            | W   | 0.820      | 1.000        | 1.000 (0.820)    | 0.520 (0.426)    | 1 (0.820) |    21.30 | dgt, HUASOPEEK, luchov, max, meyern    |
|           52 |     1441 | 2026-05-09 | PARIVISION         | W   | 0.813      | 1.000        | 0.482 (0.391)    | 0.303 (0.246)    | 1 (0.813) |     8.15 | dgt, HUASOPEEK, luchov, max, meyern    |
|           51 |     1856 | 2026-04-26 | Legacy             | L   | 0.729      | -            | -                | -                | -         |    -7.91 | dgt, HUASOPEEK, luchov, max, meyern    |
|           50 |     1927 | 2026-04-25 | Vasco              | W   | 0.722      | -            | -                | -                | -         |     0.14 | dgt, HUASOPEEK, luchov, max, meyern    |
|           49 |     1994 | 2026-04-24 | Legacy             | L   | 0.715      | -            | -                | -                | -         |    -8.23 | dgt, HUASOPEEK, luchov, max, meyern    |
|           48 |     2036 | 2026-04-23 | Vasco              | W   | 0.709      | -            | -                | -                | -         |     0.12 | dgt, HUASOPEEK, luchov, max, meyern    |
|           47 |     2079 | 2026-04-22 | ALKA               | W   | 0.701      | -            | -                | -                | -         |     0.06 | dgt, HUASOPEEK, luchov, max, meyern    |
|           46 |     2608 | 2026-04-03 | Turma do Pagode    | W   | 0.575      | -            | -                | -                | -         |     0.56 | dgt, HUASOPEEK, luchov, max, meyern    |
|           45 |     2717 | 2026-04-02 | Turma do Pagode    | W   | 0.568      | -            | -                | -                | -         |     0.50 | dgt, HUASOPEEK, luchov, max, meyern    |
|           44 |     2789 | 2026-04-01 | Fake do Biru       | W   | 0.562      | -            | -                | -                | -         |     0.18 | dgt, HUASOPEEK, luchov, max, meyern    |
|           43 |     2876 | 2026-03-31 | RED Canids Academy | W   | 0.556      | -            | -                | -                | -         |     0.03 | dgt, HUASOPEEK, luchov, max, meyern    |
|           42 |     2972 | 2026-03-30 | Legacy             | W   | 0.549      | 0.392        | 1.000 (0.215)    | -                | -         |    12.81 | dgt, HUASOPEEK, luchov, max, meyern    |
|           41 |     3032 | 2026-03-29 | paiN               | W   | 0.542      | -            | -                | -                | -         |     3.88 | dgt, HUASOPEEK, luchov, max, meyern    |
|           40 |     3074 | 2026-03-29 | Imperial           | W   | 0.540      | -            | -                | -                | -         |     0.40 | dgt, HUASOPEEK, luchov, max, meyern    |
|           39 |     3238 | 2026-03-26 | Marsborne          | W   | 0.523      | -            | -                | -                | -         |     0.28 | dgt, HUASOPEEK, luchov, max, meyern    |
|           38 |     3241 | 2026-03-26 | GameHunters        | W   | 0.522      | -            | -                | -                | -         |     0.11 | dgt, HUASOPEEK, luchov, max, meyern    |
|           37 |     3477 | 2026-03-22 | Spirit             | L   | 0.495      | -            | -                | -                | -         |    -2.83 | dgt, HUASOPEEK, luchov, max, meyern    |
|           36 |     3539 | 2026-03-21 | MOUZ               | W   | 0.487      | 1.000        | 0.788 (0.384)    | 0.413 (0.201)    | -         |    10.63 | dgt, HUASOPEEK, luchov, max, meyern    |
|           35 |     3638 | 2026-03-19 | Vitality           | L   | 0.475      | -            | -                | -                | -         |    -3.31 | dgt, HUASOPEEK, luchov, max, meyern    |
|           34 |     4155 | 2026-03-08 | Marsborne          | W   | 0.402      | -            | -                | -                | -         |     0.21 | dgt, HUASOPEEK, luchov, max, meyern    |
|           33 |     4219 | 2026-03-07 | Sharks             | W   | 0.396      | -            | -                | -                | -         |     1.92 | dgt, HUASOPEEK, luchov, max, meyern    |
|           32 |     4230 | 2026-03-07 | RED Canids         | W   | 0.395      | -            | -                | -                | -         |     0.33 | dgt, HUASOPEEK, luchov, max, meyern    |
|           31 |     4355 | 2026-03-04 | BESTIA             | W   | 0.378      | -            | -                | -                | -         |     0.51 | dgt, HUASOPEEK, luchov, max, meyern    |
|           30 |     4357 | 2026-03-04 | Fake do Biru       | W   | 0.377      | -            | -                | -                | -         |     0.12 | dgt, HUASOPEEK, luchov, max, meyern    |
|           29 |     4498 | 2026-03-01 | Sharks             | W   | 0.356      | -            | -                | -                | -         |     1.73 | dgt, HUASOPEEK, luchov, max, meyern    |
|           28 |     4541 | 2026-02-28 | RED Canids         | W   | 0.350      | -            | -                | -                | -         |     0.30 | dgt, HUASOPEEK, luchov, max, meyern    |
|           27 |     4547 | 2026-02-28 | Fluxo              | W   | 0.349      | -            | -                | -                | -         |     0.38 | dgt, HUASOPEEK, luchov, max, meyern    |
|           26 |     4597 | 2026-02-27 | Marsborne          | W   | 0.341      | -            | -                | -                | -         |     0.15 | dgt, HUASOPEEK, luchov, max, meyern    |
|           25 |     4638 | 2026-02-26 | Sharks             | L   | 0.337      | -            | -                | -                | -         |    -9.09 | dgt, HUASOPEEK, luchov, max, meyern    |
|           24 |     4711 | 2026-02-25 | Turma do Pagode    | W   | 0.329      | -            | -                | -                | -         |     0.30 | dgt, HUASOPEEK, luchov, max, meyern    |
|           23 |     5282 | 2026-02-14 | Sharks             | L   | 0.256      | -            | -                | -                | -         |    -6.93 | dgt, HUASOPEEK, luchov, max, meyern    |
|           22 |     5351 | 2026-02-13 | Bounty Hunters     | W   | 0.249      | -            | -                | -                | -         |     0.16 | dgt, HUASOPEEK, luchov, max, meyern    |
|           21 |     5530 | 2026-02-08 | ex-KRÜ             | W   | 0.216      | -            | -                | -                | -         |     0.04 | dgt, HUASOPEEK, luchov, max, meyern    |
|           20 |     5550 | 2026-02-08 | Sharks             | W   | 0.214      | -            | -                | -                | -         |     0.94 | dgt, HUASOPEEK, luchov, max, meyern    |
|           19 |     5568 | 2026-02-07 | Imperial           | W   | 0.207      | -            | -                | -                | -         |     0.13 | dgt, HUASOPEEK, luchov, max, meyern    |
|           18 |     5595 | 2026-02-06 | Fake do Biru       | W   | 0.202      | -            | -                | -                | -         |     0.06 | dgt, HUASOPEEK, luchov, max, meyern    |
|           17 |     5605 | 2026-02-06 | Gaimin Gladiators  | W   | 0.201      | -            | -                | -                | -         |     0.18 | dgt, HUASOPEEK, luchov, max, meyern    |
|           16 |     5681 | 2026-02-03 | ShindeN            | W   | 0.181      | -            | -                | -                | -         |     0.19 | dgt, HUASOPEEK, luchov, max, meyern    |
|           15 |     5769 | 2026-01-31 | MIBR               | L   | 0.163      | -            | -                | -                | -         |    -3.45 | dgt, HUASOPEEK, luchov, max, meyern    |
|           14 |     5773 | 2026-01-31 | Sharks             | W   | 0.162      | -            | -                | -                | -         |     0.70 | dgt, HUASOPEEK, luchov, max, meyern    |
|           13 |     5809 | 2026-01-30 | SUPERMATCH         | W   | 0.156      | -            | -                | -                | -         |     0.01 | dgt, HUASOPEEK, luchov, max, meyern    |
|           12 |     5810 | 2026-01-30 | MIBR               | L   | 0.156      | -            | -                | -                | -         |    -3.33 | dgt, HUASOPEEK, luchov, max, meyern    |
|           11 |     5934 | 2026-01-25 | RED Canids         | W   | 0.121      | -            | -                | -                | -         |     0.08 | dgt, HUASOPEEK, luchov, max, meyern    |
|           10 |     5956 | 2026-01-24 | Gaimin Gladiators  | L   | 0.115      | -            | -                | -                | -         |    -3.53 | dgt, HUASOPEEK, luchov, max, meyern    |
|            9 |     5976 | 2026-01-24 | Fake do Biru       | W   | 0.113      | -            | -                | -                | -         |     0.03 | dgt, HUASOPEEK, luchov, max, meyern    |
|            8 |     6007 | 2026-01-23 | Keyd Stars         | W   | 0.108      | -            | -                | -                | -         |     0.01 | dgt, HUASOPEEK, luchov, max, meyern    |
|            7 |     6057 | 2026-01-22 | ShindeN            | L   | 0.101      | -            | -                | -                | -         |    -3.08 | dgt, HUASOPEEK, luchov, max, meyern    |
|            6 |     6074 | 2026-01-22 | MIBR               | L   | 0.100      | -            | -                | -                | -         |    -2.17 | dgt, HUASOPEEK, luchov, max, meyern    |
|            5 |     6076 | 2026-01-22 | Keyd Stars         | W   | 0.100      | -            | -                | -                | -         |     0.01 | dgt, HUASOPEEK, luchov, max, meyern    |
|            4 |     6093 | 2026-01-21 | Sharks             | W   | 0.095      | -            | -                | -                | -         |     0.40 | dgt, HUASOPEEK, luchov, max, meyern    |
|            3 |     6107 | 2026-01-21 | Imperial           | L   | 0.094      | -            | -                | -                | -         |    -2.91 | dgt, HUASOPEEK, luchov, meyern, urban0 |
|            2 |     6191 | 2026-01-17 | Galorys            | W   | 0.069      | -            | -                | -                | -         |     0.05 | dgt, HUASOPEEK, luchov, meyern, urban0 |
|            1 |     6202 | 2026-01-17 | ALZON              | W   | 0.068      | -            | -                | -                | -         |     0.00 | dgt, HUASOPEEK, luchov, meyern, urban0 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($168,366.39)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.30) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-21 |      1.000 | $45,000.00     | $45,000.00      |
| 2026-05-30 |      0.954 | $9,000.00      | $8,587.53       |
| 2026-05-17 |      0.866 | $80,000.00     | $69,299.99      |
| 2026-04-26 |      0.729 | $8,750.00      | $6,378.31       |
| 2026-03-30 |      0.549 | $8,442.00      | $4,637.14       |
| 2026-03-29 |      0.539 | $32,500.00     | $17,532.57      |
| 2026-03-08 |      0.402 | $14,000.00     | $5,623.75       |
| 2026-03-01 |      0.356 | $30,000.00     | $10,683.56      |
| 2026-02-15 |      0.262 | $750.00        | $196.57         |
| 2026-01-25 |      0.122 | $3,500.00      | $426.96         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
