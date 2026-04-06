### Roster Details<br />
Team Name: HAVU<br />
Roster: Alxc, ottob, p3kko, puuha, uli<br />
Global Rank: [117](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [80]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  1000.8<br />
<br />
Final Rank Value (1000.8) = Starting Rank Value (1113.0) + Head To Head Adjustments (-112.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.297[<sup>2</sup>](#table1)
- Opponent Network: 0.185[<sup>2</sup>](#table1)
- LAN Wins: 0.670[<sup>2</sup>](#table1)

The average of these factors is 0.365<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1113.0
- 400 + ( ( 0.365 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1113.0


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
|           66 |      257 | 2026-03-31 | Liquid            | L   | 1.000      | -            | -                | -                | -         |    -3.38 | Alxc, ottob, p3kko, puuha, uli  |
|           65 |      316 | 2026-03-30 | Lazer Cats        | W   | 1.000      | 0.354        | 0.011 (0.004)    | 0.461 (0.163)    | 1 (1.000) |    17.98 | Alxc, ottob, p3kko, puuha, uli  |
|           64 |      333 | 2026-03-30 | Monte             | L   | 1.000      | -            | -                | -                | -         |    -1.44 | Alxc, ottob, p3kko, puuha, uli  |
|           63 |      353 | 2026-03-29 | Strael Bora       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.65 | Alxc, ottob, p3kko, puuha, uli  |
|           62 |      378 | 2026-03-29 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -7.84 | Alxc, ottob, p3kko, puuha, uli  |
|           61 |      385 | 2026-03-29 | SINQU             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.28 | Alxc, ottob, p3kko, puuha, uli  |
|           60 |      745 | 2026-03-22 | TDK               | L   | 1.000      | -            | -                | -                | -         |    -4.99 | Alxc, ottob, p3kko, puuha, uli  |
|           59 |      791 | 2026-03-21 | HYPERSPIRIT       | W   | 1.000      | 0.384        | -                | 0.479 (0.184)    | -         |    17.31 | Alxc, ottob, p3kko, puuha, uli  |
|           58 |      849 | 2026-03-20 | ex-Zero Tenacity  | W   | 1.000      | 0.384        | -                | 0.547 (0.210)    | -         |    16.29 | Alxc, ottob, p3kko, puuha, uli  |
|           57 |      893 | 2026-03-19 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -2.95 | Aerial, Alxc, ottob, puuha, uli |
|           56 |      994 | 2026-03-17 | Leo               | W   | 1.000      | 0.384        | 0.017 (0.006)    | 0.593 (0.228)    | -         |    19.87 | Aerial, Alxc, ottob, puuha, uli |
|           55 |     1174 | 2026-03-13 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -25.90 | Aerial, Alxc, ottob, puuha, uli |
|           54 |     1213 | 2026-03-12 | NOVAQ             | L   | 1.000      | -            | -                | -                | -         |   -11.16 | Aerial, Alxc, ottob, puuha, uli |
|           53 |     1237 | 2026-03-12 | Bebop             | L   | 1.000      | -            | -                | -                | -         |   -17.73 | Aerial, Alxc, ottob, puuha, uli |
|           52 |     1265 | 2026-03-11 | ENRAGE            | W   | 1.000      | -            | -                | -                | -         |     1.94 | Aerial, Alxc, ottob, puuha, uli |
|           51 |     1315 | 2026-03-10 | ex-Zero Tenacity  | L   | 1.000      | -            | -                | -                | -         |   -18.98 | Aerial, Alxc, ottob, puuha, uli |
|           50 |     1349 | 2026-03-09 | Imperial Academy  | W   | 1.000      | -            | -                | -                | -         |     1.56 | Aerial, Alxc, ottob, puuha, uli |
|           49 |     1368 | 2026-03-09 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -6.30 | Aerial, Alxc, ottob, puuha, uli |
|           48 |     1485 | 2026-03-07 | ex-Zero Tenacity  | L   | 1.000      | -            | -                | -                | -         |   -20.52 | Aerial, Alxc, ottob, puuha, uli |
|           47 |     1575 | 2026-03-05 | Misa              | L   | 0.988      | -            | -                | -                | -         |   -25.71 | Aerial, Alxc, ottob, puuha, uli |
|           46 |     1606 | 2026-03-05 | TNC               | W   | 0.986      | 0.435        | 0.025 (0.011)    | 1.000 (0.428)    | -         |    15.85 | Aerial, Alxc, ottob, puuha, uli |
|           45 |     1701 | 2026-03-03 | ASTRAL            | L   | 0.973      | -            | -                | -                | -         |   -19.40 | Aerial, Alxc, ottob, puuha, uli |
|           44 |     1731 | 2026-03-02 | FAVBET            | L   | 0.967      | -            | -                | -                | -         |   -15.21 | Aerial, Alxc, ottob, puuha, uli |
|           43 |     1819 | 2026-02-28 | Aurora Young Blud | W   | 0.954      | -            | -                | -                | -         |     2.81 | Aerial, Alxc, ottob, puuha, uli |
|           42 |     1873 | 2026-02-27 | Fuzos             | W   | 0.946      | 0.384        | 0.005 (0.002)    | 0.414 (0.150)    | -         |     9.24 | Aerial, Alxc, ottob, puuha, uli |
|           41 |     2010 | 2026-02-24 | QWENTRY           | L   | 0.928      | -            | -                | -                | -         |   -16.23 | Aerial, Alxc, ottob, puuha, uli |
|           40 |     2070 | 2026-02-23 | EC BANGA          | W   | 0.920      | -            | -                | -                | -         |     5.80 | Aerial, Alxc, ottob, puuha, uli |
|           39 |     2342 | 2026-02-18 | SPARTA            | L   | 0.887      | -            | -                | -                | -         |    -6.81 | Aerial, Alxc, ottob, puuha, uli |
|           38 |     2400 | 2026-02-17 | ex-RUBY           | L   | 0.881      | -            | -                | -                | -         |   -12.92 | Aerial, Alxc, ottob, puuha, uli |
|           37 |     2443 | 2026-02-16 | Oramond           | L   | 0.875      | -            | -                | -                | -         |   -11.71 | Aerial, Alxc, ottob, puuha, uli |
|           36 |     2574 | 2026-02-14 | FORZE Reload      | W   | 0.860      | 0.384        | -                | 0.472 (0.156)    | -         |     8.62 | Alxc, ottob, p3kko, puuha, uli  |
|           35 |     2602 | 2026-02-14 | ALLINNERS         | W   | 0.859      | -            | -                | -                | -         |     5.17 | Alxc, ottob, p3kko, puuha, uli  |
|           34 |     2641 | 2026-02-13 | TDK               | L   | 0.852      | -            | -                | -                | -         |   -10.79 | Alxc, ottob, p3kko, puuha, uli  |
|           33 |     2663 | 2026-02-12 | ALLINNERS         | W   | 0.848      | -            | -                | -                | -         |     4.92 | Alxc, ottob, p3kko, puuha, uli  |
|           32 |     2801 | 2026-02-08 | Nuclear TigeRES   | L   | 0.821      | -            | -                | -                | -         |    -5.40 | Alxc, ottob, p3kko, puuha, uli  |
|           31 |     3195 | 2026-01-25 | BIG               | L   | 0.726      | -            | -                | -                | -         |    -2.23 | Alxc, ottob, p3kko, puuha, uli  |
|           30 |     3214 | 2026-01-24 | SemperFi          | W   | 0.721      | 0.333        | 0.023 (0.006)    | 0.443 (0.107)    | 1 (0.721) |    13.38 | Alxc, ottob, p3kko, puuha, uli  |
|           29 |     3222 | 2026-01-24 | STATE             | W   | 0.721      | 0.333        | -                | 0.429 (0.103)    | 1 (0.721) |     8.23 | Alxc, ottob, p3kko, puuha, uli  |
|           28 |     3260 | 2026-01-23 | ReThink           | W   | 0.714      | -            | -                | -                | 1 (0.714) |     0.57 | Alxc, ottob, p3kko, puuha, uli  |
|           27 |     3266 | 2026-01-23 | Flying Angels     | W   | 0.714      | -            | -                | -                | 1 (0.714) |     0.43 | Alxc, ottob, p3kko, puuha, uli  |
|           26 |     3272 | 2026-01-23 | Metizport         | W   | 0.714      | 0.333        | 0.023 (0.006)    | 0.488 (0.116)    | 1 (0.714) |    11.94 | Alxc, ottob, p3kko, puuha, uli  |
|           25 |     4148 | 2025-11-30 | ARCRED            | L   | 0.354      | -            | -                | -                | -         |    -2.72 | Alxc, ottob, p3kko, puuha, uli  |
|           24 |     4191 | 2025-11-29 | Mousquetaires     | L   | 0.347      | -            | -                | -                | -         |    -9.80 | Alxc, ottob, p3kko, puuha, uli  |
|           23 |     4230 | 2025-11-28 | CSDIILIT          | W   | 0.341      | -            | -                | -                | -         |     0.74 | Alxc, ottob, p3kko, puuha, uli  |
|           22 |     4233 | 2025-11-28 | ENCE Academy      | W   | 0.340      | -            | -                | -                | -         |     1.95 | Alxc, ottob, p3kko, puuha, uli  |
|           21 |     4237 | 2025-11-28 | ARCRED            | W   | 0.340      | 0.384        | 0.016 (0.002)    | -                | -         |     8.15 | Alxc, ottob, p3kko, puuha, uli  |
|           20 |     4253 | 2025-11-27 | Eternal Fire      | L   | 0.332      | -            | -                | -                | -         |    -9.55 | Alxc, ottob, p3kko, puuha, uli  |
|           19 |     4334 | 2025-11-24 | Fire Flux         | L   | 0.312      | -            | -                | -                | -         |    -8.47 | Alxc, ottob, p3kko, peku, uli   |
|           18 |     4342 | 2025-11-23 | CSDIILIT          | L   | 0.308      | -            | -                | -                | -         |    -9.10 | Alxc, ottob, p3kko, puuha, uli  |
|           17 |     4352 | 2025-11-23 | Nuclear TigeRES   | L   | 0.306      | -            | -                | -                | -         |    -1.81 | Alxc, ottob, p3kko, puuha, uli  |
|           16 |     4365 | 2025-11-22 | ENCE Academy      | W   | 0.301      | -            | -                | -                | -         |     1.57 | Alxc, ottob, p3kko, puuha, uli  |
|           15 |     4448 | 2025-11-20 | Leo               | W   | 0.287      | 0.333        | 0.017 (0.002)    | -                | -         |     2.24 | Alxc, ottob, p3kko, puuha, uli  |
|           14 |     4497 | 2025-11-18 | MANA              | W   | 0.273      | -            | -                | -                | -         |     1.96 | Alxc, ottob, p3kko, puuha, uli  |
|           13 |     4511 | 2025-11-17 | HYPERSPIRIT       | W   | 0.265      | -            | -                | -                | -         |     2.56 | Alxc, ottob, p3kko, puuha, uli  |
|           12 |     4689 | 2025-11-10 | K27               | L   | 0.219      | -            | -                | -                | -         |    -0.63 | Alxc, ottob, p3kko, puuha, uli  |
|           11 |     4708 | 2025-11-09 | ARCRED            | W   | 0.214      | 0.384        | 0.016 (0.001)    | -                | -         |     5.20 | Alxc, ottob, p3kko, puuha, uli  |
|           10 |     4756 | 2025-11-08 | GenOne            | L   | 0.207      | -            | -                | -                | -         |    -4.74 | Alxc, ottob, p3kko, puuha, uli  |
|            9 |     4869 | 2025-11-07 | ARCRED            | W   | 0.199      | -            | -                | -                | -         |     4.89 | Alxc, ottob, p3kko, puuha, uli  |
|            8 |     5106 | 2025-10-29 | Eternal Fire      | L   | 0.141      | -            | -                | -                | -         |    -4.10 | Alxc, ottob, p3kko, puuha, uli  |
|            7 |     5137 | 2025-10-28 | GenOne            | L   | 0.134      | -            | -                | -                | -         |    -3.09 | Alxc, ottob, p3kko, puuha, uli  |
|            6 |     5166 | 2025-10-27 | 9BOOMPRO          | L   | 0.128      | -            | -                | -                | -         |    -3.90 | Alxc, ottob, p3kko, puuha, uli  |
|            5 |     5216 | 2025-10-26 | BASEMENT BOYS     | L   | 0.121      | -            | -                | -                | -         |    -3.69 | Alxc, ottob, p3kko, puuha, uli  |
|            4 |     5383 | 2025-10-23 | ECSTATIC          | W   | 0.101      | 0.384        | 0.103 (0.004)    | -                | -         |     2.70 | Alxc, ottob, p3kko, puuha, uli  |
|            3 |     5490 | 2025-10-18 | Universe          | L   | 0.067      | -            | -                | -                | -         |    -1.99 | Alxc, ottob, p3kko, puuha, uli  |
|            2 |     5511 | 2025-10-17 | TMVG              | W   | 0.061      | -            | -                | -                | 1 (0.061) |     0.09 | Alxc, ottob, p3kko, puuha, uli  |
|            1 |     5526 | 2025-10-17 | AKA HERO KAJO     | W   | 0.059      | -            | -                | -                | 1 (0.059) |     0.09 | Alxc, ottob, p3kko, puuha, uli  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,482.92)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-25 |      0.726 | $2,000.00      | $1,452.85       |
| 2025-11-28 |      0.341 | $2,904.00      | $990.59         |
| 2025-10-18 |      0.068 | $581.00        | $39.47          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
