### Roster Details<br />
Team Name: Permitta<br />
Roster: bnox, maaryy, mASKED, SpavaQu, tomiko<br />
Global Rank: [88](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [64]( ../standings_europe.md)<br />
<br />
Final Rank Value:  910.8<br />
<br />
Final Rank Value (910.8) = Starting Rank Value (931.2) + Head To Head Adjustments (-20.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.383[<sup>1</sup>](#table2)
- Bounty Collected: 0.410[<sup>2</sup>](#table1)
- Opponent Network: 0.236[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.257<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 931.2
- 400 + ( ( 0.257 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 931.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           97 |       20 | 2024-07-31 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -19.15 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           96 |       26 | 2024-07-31 | 9INE              | W   | 1.000      | 0.435        | -                | 0.486 (0.211)    | 0 (0.000) |    17.92 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           95 |       68 | 2024-07-30 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |    -8.82 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           94 |       94 | 2024-07-29 | HAVU              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.57 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           93 |      112 | 2024-07-28 | BC.Game           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.83 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           92 |      165 | 2024-07-26 | Space             | W   | 1.000      | 0.435        | -                | 0.406 (0.176)    | 0 (0.000) |    15.77 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           91 |      172 | 2024-07-26 | Sangal            | L   | 1.000      | -            | -                | -                | -         |    -4.46 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           90 |      210 | 2024-07-25 | Into the Breach   | L   | 1.000      | -            | -                | -                | -         |   -24.26 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           89 |      256 | 2024-07-24 | Meteor            | L   | 1.000      | -            | -                | -                | -         |   -23.32 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           88 |      308 | 2024-07-22 | Metizport         | W   | 1.000      | 0.435        | -                | 0.427 (0.186)    | 0 (0.000) |    16.97 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           87 |      381 | 2024-07-20 | GUN5              | W   | 1.000      | 0.435        | 0.074 (0.032)    | 0.516 (0.224)    | 0 (0.000) |    16.14 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           86 |      468 | 2024-07-18 | INFINITE          | L   | 1.000      | -            | -                | -                | -         |   -27.75 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           85 |      523 | 2024-07-17 | ALTERNATE aTTaX   | W   | 1.000      | 0.435        | -                | 0.564 (0.245)    | 0 (0.000) |    12.72 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           84 |      599 | 2024-07-16 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -11.86 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           83 |      634 | 2024-07-15 | Space             | L   | 1.000      | -            | -                | -                | -         |   -17.88 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           82 |      661 | 2024-07-14 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -15.33 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           81 |      725 | 2024-07-10 | Passion UA        | W   | 1.000      | 0.371        | 0.172 (0.064)    | 1.000 (0.371)    | 0 (0.000) |    18.56 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           80 |      854 | 2024-06-16 | 3DMAX             | L   | 0.898      | -            | -                | -                | -         |    -1.60 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           79 |      897 | 2024-06-15 | BIG               | W   | 0.890      | 0.435        | 0.133 (0.051)    | -                | 0 (0.000) |    24.06 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           78 |      934 | 2024-06-14 | PARIVISION        | W   | 0.884      | -            | -                | -                | 0 (0.000) |    19.64 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           77 |      947 | 2024-06-13 | 9INE              | L   | 0.880      | -            | -                | -                | -         |   -24.69 | bnox, maaryy, mASKED, morelz, Vegi    |
|           76 |      980 | 2024-06-12 | Nexus             | W   | 0.873      | -            | -                | -                | -         |     7.02 | bnox, maaryy, mASKED, morelz, Vegi    |
|           75 |      998 | 2024-06-11 | Nemiga            | L   | 0.867      | -            | -                | -                | -         |    -5.56 | bnox, maaryy, mASKED, morelz, Vegi    |
|           74 |     1024 | 2024-06-10 | Rebels            | L   | 0.860      | -            | -                | -                | -         |   -10.06 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           73 |     1129 | 2024-06-08 | Space             | W   | 0.846      | -            | -                | -                | -         |    11.97 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           72 |     1270 | 2024-06-06 | Zero Tenacity     | W   | 0.832      | 0.435        | 0.139 (0.050)    | 1.000 (0.361)    | -         |    20.29 | bnox, Markoś, mASKED, SpavaQu, tomiko |
|           71 |     1404 | 2024-06-03 | GUN5              | W   | 0.811      | 0.435        | 0.074 (0.026)    | 0.516 (0.182)    | -         |    15.91 | bnox, Markoś, mASKED, morelz, tomiko  |
|           70 |     1462 | 2024-06-01 | Enterprise        | L   | 0.797      | -            | -                | -                | -         |   -11.95 | bnox, mASKED, morelz, SpavaQu, tomiko |
|           69 |     1472 | 2024-05-31 | AMKAL             | L   | 0.793      | -            | -                | -                | -         |    -3.94 | bnox, mASKED, morelz, Sidney, tomiko  |
|           68 |     1506 | 2024-05-30 | NAVI Junior       | W   | 0.786      | -            | -                | -                | -         |     3.11 | bnox, maaryy, mASKED, morelz, tomiko  |
|           67 |     1514 | 2024-05-30 | Serbia            | L   | 0.785      | -            | -                | -                | -         |   -16.52 | bnox, maaryy, mASKED, morelz, tomiko  |
|           66 |     1558 | 2024-05-28 | Preasy            | W   | 0.771      | -            | -                | -                | -         |     8.17 | bnox, maaryy, mASKED, morelz, tomiko  |
|           65 |     1561 | 2024-05-28 | GUN5              | W   | 0.770      | 0.435        | 0.074 (0.025)    | -                | -         |    12.99 | bnox, maaryy, mASKED, morelz, tomiko  |
|           64 |     1579 | 2024-05-27 | VP.Prodigy        | L   | 0.766      | -            | -                | -                | -         |   -11.90 | bnox, maaryy, mASKED, morelz, tomiko  |
|           63 |     1602 | 2024-05-26 | ECLOT             | W   | 0.757      | -            | -                | -                | -         |    17.22 | bnox, maaryy, mASKED, morelz, tomiko  |
|           62 |     1618 | 2024-05-25 | Nexus             | W   | 0.751      | -            | -                | -                | -         |     8.65 | bnox, maaryy, mASKED, morelz, tomiko  |
|           61 |     1688 | 2024-05-22 | Endpoint          | W   | 0.732      | -            | -                | -                | -         |    12.78 | bnox, maaryy, mASKED, morelz, tomiko  |
|           60 |     1696 | 2024-05-22 | Johnny Speeds     | L   | 0.730      | -            | -                | -                | -         |    -2.32 | bnox, maaryy, mASKED, morelz, Vegi    |
|           59 |     1718 | 2024-05-21 | INFINITE          | W   | 0.727      | -            | -                | -                | -         |     3.14 | bnox, maaryy, mASKED, morelz, Vegi    |
|           58 |     1774 | 2024-05-20 | Passion UA        | L   | 0.717      | -            | -                | -                | -         |    -7.12 | bnox, maaryy, mASKED, morelz, Vegi    |
|           57 |     1866 | 2024-05-17 | Sangal            | L   | 0.697      | -            | -                | -                | -         |    -5.62 | bnox, maaryy, mASKED, morelz, Vegi    |
|           56 |     1932 | 2024-05-15 | EYEBALLERS        | L   | 0.687      | -            | -                | -                | -         |   -10.88 | bnox, maaryy, mASKED, morelz, Vegi    |
|           55 |     2021 | 2024-05-13 | 1WIN              | L   | 0.673      | -            | -                | -                | -         |    -9.06 | bnox, maaryy, mASKED, morelz, Vegi    |
|           54 |     2167 | 2024-05-07 | Enterprise        | L   | 0.631      | -            | -                | -                | -         |   -10.53 | bnox, maaryy, mASKED, morelz, Sobol   |
|           53 |     2183 | 2024-05-06 | ENCE Academy      | W   | 0.624      | -            | -                | -                | -         |     5.08 | bnox, maaryy, mASKED, morelz, Sobol   |
|           52 |     2228 | 2024-05-03 | Insilio           | L   | 0.605      | -            | -                | -                | -         |    -8.72 | bnox, maaryy, mASKED, Sidney, Sobol   |
|           51 |     2255 | 2024-05-02 | Sampi             | L   | 0.599      | -            | -                | -                | -         |    -9.48 | bnox, maaryy, mASKED, Sidney, Sobol   |
|           50 |     2266 | 2024-05-02 | B8                | L   | 0.597      | -            | -                | -                | -         |    -6.61 | bnox, maaryy, mASKED, morelz, Sobol   |
|           49 |     2314 | 2024-04-30 | BLEED             | L   | 0.584      | -            | -                | -                | -         |    -5.49 | bnox, maaryy, mASKED, morelz, Vegi    |
|           48 |     2321 | 2024-04-29 | AMKAL             | L   | 0.579      | -            | -                | -                | -         |    -4.46 | bnox, maaryy, mASKED, morelz, Vegi    |
|           47 |     2331 | 2024-04-29 | RUBY              | W   | 0.577      | 0.435        | 0.097 (0.024)    | -                | -         |     9.28 | bnox, maaryy, mASKED, Sidney, Vegi    |
|           46 |     2367 | 2024-04-27 | Insilio           | L   | 0.565      | -            | -                | -                | -         |    -9.31 | bnox, maaryy, mASKED, morelz, Vegi    |
|           45 |     2375 | 2024-04-27 | Enterprise        | W   | 0.564      | -            | -                | -                | -         |     7.89 | bnox, maaryy, mASKED, morelz, Vegi    |
|           44 |     2398 | 2024-04-26 | ARCRED            | L   | 0.558      | -            | -                | -                | -         |   -10.95 | bnox, maaryy, mASKED, morelz, Vegi    |
|           43 |     2419 | 2024-04-25 | 1WIN              | L   | 0.552      | -            | -                | -                | -         |    -9.46 | bnox, maaryy, mASKED, morelz, Vegi    |
|           42 |     2436 | 2024-04-24 | BLEED             | L   | 0.546      | -            | -                | -                | -         |    -6.11 | bnox, maaryy, mASKED, morelz, Vegi    |
|           41 |     2438 | 2024-04-24 | Passion UA        | W   | 0.545      | 0.384        | 0.172 (0.036)    | 1.000 (0.210)    | -         |    10.08 | bnox, maaryy, mASKED, morelz, Vegi    |
|           40 |     2447 | 2024-04-24 | Sampi             | L   | 0.543      | -            | -                | -                | -         |    -9.41 | bnox, maaryy, mASKED, morelz, Vegi    |
|           39 |     2469 | 2024-04-23 | ALTERNATE aTTaX   | W   | 0.537      | -            | -                | -                | -         |     8.16 | bnox, maaryy, mASKED, morelz, Vegi    |
|           38 |     2482 | 2024-04-22 | Grannys Knockers  | W   | 0.530      | -            | -                | -                | -         |     4.21 | bnox, maaryy, mASKED, morelz, Vegi    |
|           37 |     2503 | 2024-04-21 | Insilio           | W   | 0.524      | -            | -                | -                | -         |     7.48 | bnox, maaryy, mASKED, morelz, Vegi    |
|           36 |     2527 | 2024-04-20 | Nexus             | L   | 0.518      | -            | -                | -                | -         |   -10.35 | bnox, maaryy, mASKED, morelz, Vegi    |
|           35 |     2532 | 2024-04-20 | Passion UA        | W   | 0.517      | 0.371        | 0.172 (0.033)    | 1.000 (0.192)    | -         |    10.11 | bnox, maaryy, mASKED, morelz, Vegi    |
|           34 |     2621 | 2024-04-18 | Passion UA        | L   | 0.505      | -            | -                | -                | -         |    -5.90 | bnox, maaryy, mASKED, morelz, Vegi    |
|           33 |     2635 | 2024-04-18 | Sampi             | L   | 0.504      | -            | -                | -                | -         |    -8.79 | bnox, maaryy, mASKED, morelz, Vegi    |
|           32 |     2651 | 2024-04-17 | PARIVISION        | W   | 0.499      | -            | -                | -                | -         |    10.22 | bnox, maaryy, mASKED, morelz, Vegi    |
|           31 |     2693 | 2024-04-16 | Gaimin Gladiators | L   | 0.492      | -            | -                | -                | -         |    -6.21 | bnox, maaryy, mASKED, morelz, Vegi    |
|           30 |     2756 | 2024-04-12 | MOUZ NXT          | W   | 0.465      | 0.371        | 0.141 (0.024)    | -                | -         |     9.56 | bnox, maaryy, mASKED, morelz, Vegi    |
|           29 |     2836 | 2024-04-10 | EYEBALLERS        | W   | 0.450      | -            | -                | -                | -         |     6.32 | bnox, maaryy, mASKED, morelz, Vegi    |
|           28 |     2914 | 2024-04-08 | HAVU              | W   | 0.438      | -            | -                | -                | -         |     3.00 | bnox, maaryy, mASKED, morelz, Vegi    |
|           27 |     2921 | 2024-04-08 | JANO              | W   | 0.437      | -            | -                | -                | -         |     2.63 | bnox, maaryy, mASKED, morelz, Vegi    |
|           26 |     3051 | 2024-04-03 | Enterprise        | L   | 0.406      | -            | -                | -                | -         |    -6.74 | bnox, maaryy, mASKED, morelz, Vegi    |
|           25 |     3063 | 2024-04-03 | ECLOT             | L   | 0.404      | -            | -                | -                | -         |    -3.74 | bnox, maaryy, mASKED, morelz, Vegi    |
|           24 |     3095 | 2024-04-02 | 3DMAX             | L   | 0.398      | -            | -                | -                | -         |    -0.22 | bnox, maaryy, mASKED, morelz, Vegi    |
|           23 |     3104 | 2024-04-02 | Sashi             | L   | 0.397      | -            | -                | -                | -         |    -3.31 | bnox, maaryy, mASKED, morelz, Vegi    |
|           22 |     3368 | 2024-03-16 | RUBY              | L   | 0.286      | -            | -                | -                | -         |    -4.69 | bnox, maaryy, mASKED, morelz, Vegi    |
|           21 |     3388 | 2024-03-15 | The Chosen Few    | W   | 0.279      | -            | -                | -                | -         |     1.70 | bnox, maaryy, mASKED, morelz, Vegi    |
|           20 |     3391 | 2024-03-15 | Sampi             | L   | 0.278      | -            | -                | -                | -         |    -5.01 | bnox, maaryy, mASKED, morelz, Vegi    |
|           19 |     3438 | 2024-03-13 | MOUZ NXT          | W   | 0.267      | -            | -                | -                | -         |     5.36 | bnox, maaryy, mASKED, morelz, Vegi    |
|           18 |     3457 | 2024-03-13 | ECLOT             | W   | 0.265      | -            | -                | -                | -         |     5.87 | bnox, maaryy, mASKED, morelz, Vegi    |
|           17 |     3471 | 2024-03-13 | ECLOT             | W   | 0.264      | -            | -                | -                | -         |     5.95 | bnox, maaryy, mASKED, morelz, Vegi    |
|           16 |     3513 | 2024-03-11 | ex-Preasy         | L   | 0.251      | -            | -                | -                | -         |    -5.32 | bnox, maaryy, mASKED, morelz, Vegi    |
|           15 |     3560 | 2024-03-09 | Sashi             | L   | 0.238      | -            | -                | -                | -         |    -1.85 | bnox, maaryy, mASKED, morelz, Vegi    |
|           14 |     3596 | 2024-03-07 | VP.Prodigy        | W   | 0.226      | -            | -                | -                | -         |     2.90 | bnox, maaryy, mASKED, morelz, Vegi    |
|           13 |     3605 | 2024-03-07 | kONO              | W   | 0.224      | -            | -                | -                | -         |     2.30 | bnox, maaryy, mASKED, morelz, Vegi    |
|           12 |     3633 | 2024-03-06 | Passion UA        | W   | 0.219      | -            | -                | -                | -         |     4.84 | bnox, maaryy, mASKED, morelz, Vegi    |
|           11 |     3634 | 2024-03-06 | Enterprise        | W   | 0.218      | -            | -                | -                | -         |     3.39 | bnox, maaryy, mASKED, morelz, Vegi    |
|           10 |     3674 | 2024-03-05 | Young Ninjas      | W   | 0.212      | -            | -                | -                | -         |     1.97 | bnox, maaryy, mASKED, morelz, Vegi    |
|            9 |     3741 | 2024-03-02 | AURA              | W   | 0.191      | -            | -                | -                | -         |     0.51 | bnox, maaryy, mASKED, morelz, Vegi    |
|            8 |     3785 | 2024-02-28 | Secret            | L   | 0.172      | -            | -                | -                | -         |    -4.87 | bnox, maaryy, mASKED, morelz, Vegi    |
|            7 |     3788 | 2024-02-28 | ECLOT             | L   | 0.171      | -            | -                | -                | -         |    -1.45 | bnox, maaryy, mASKED, morelz, Vegi    |
|            6 |     3809 | 2024-02-27 | Sprout            | W   | 0.164      | -            | -                | -                | -         |     0.24 | bnox, maaryy, mASKED, morelz, Vegi    |
|            5 |     3883 | 2024-02-24 | ECLOT             | W   | 0.144      | -            | -                | -                | -         |     3.34 | bnox, maaryy, mASKED, morelz, Vegi    |
|            4 |     3912 | 2024-02-22 | PGE Turow         | W   | 0.131      | -            | -                | -                | -         |     0.73 | bnox, maaryy, mASKED, morelz, reiko   |
|            3 |     3944 | 2024-02-21 | ECLOT             | L   | 0.124      | -            | -                | -                | -         |    -1.04 | bnox, maaryy, mASKED, morelz, Vegi    |
|            2 |     3991 | 2024-02-19 | ECLOT             | W   | 0.111      | -            | -                | -                | -         |     2.58 | bnox, maaryy, mASKED, morelz, Vegi    |
|            1 |     4229 | 2024-02-07 | Endpoint          | L   | 0.031      | -            | -                | -                | -         |    -0.54 | bnox, maaryy, mASKED, morelz, Vegi    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,059.36)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.899 | $5,000.00      | $4,496.34       |
| 2024-06-13 |      0.880 | $545.00        | $479.68         |
| 2024-05-02 |      0.599 | $500.00        | $299.67         |
| 2024-04-25 |      0.551 | $3,000.00      | $1,652.88       |
| 2024-03-25 |      0.346 | $1,250.00      | $432.47         |
| 2024-02-28 |      0.171 | $3,000.00      | $512.49         |
| 2024-02-21 |      0.124 | $1,500.00      | $185.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
