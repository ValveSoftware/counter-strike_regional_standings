### Roster Details<br />
Team Name: Permitta<br />
Roster: bnox, maaryy, mASKED, SpavaQu, tomiko<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [83](../standings_global.md)<br />
Regional Rank: [59]( ../standings_europe.md)<br />
Final Rank Value:  922.4<br />
<br />
Final Rank Value (922.4) = Starting Rank Value (940.2) + Head To Head Adjustments (-17.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.400[<sup>1</sup>](#table2)
- Bounty Collected: 0.425[<sup>2</sup>](#table1)
- Opponent Network: 0.243[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.267<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 940.2
- 400 + ( ( 0.267 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 940.2


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
|           92 |       14 | 2024-07-24 | Meteor            | L   | 1.000      | -            | -                | -                | -         |   -23.22 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           91 |       66 | 2024-07-22 | Metizport         | W   | 1.000      | 0.435        | -                | 0.460 (0.200)    | 0 (0.000) |    17.50 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           90 |      139 | 2024-07-20 | GUN5              | W   | 1.000      | 0.435        | 0.093 (0.040)    | 0.489 (0.213)    | 0 (0.000) |    16.08 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           89 |      226 | 2024-07-18 | INFINITE          | L   | 1.000      | -            | -                | -                | -         |   -27.85 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           88 |      281 | 2024-07-17 | ALTERNATE aTTaX   | W   | 1.000      | 0.435        | -                | 0.638 (0.277)    | 0 (0.000) |    12.65 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           87 |      357 | 2024-07-16 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -12.27 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           86 |      392 | 2024-07-15 | Space             | L   | 1.000      | -            | -                | -                | -         |   -17.54 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           85 |      419 | 2024-07-14 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -14.93 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           84 |      483 | 2024-07-10 | Passion UA        | W   | 1.000      | 0.371        | 0.163 (0.060)    | 1.000 (0.371)    | 0 (0.000) |    18.07 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           83 |      612 | 2024-06-16 | 3DMAX             | L   | 0.946      | -            | -                | -                | -         |    -5.05 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           82 |      655 | 2024-06-15 | BIG               | W   | 0.937      | 0.435        | 0.173 (0.070)    | -                | 0 (0.000) |    26.02 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           81 |      692 | 2024-06-14 | PARIVISION        | W   | 0.932      | -            | -                | -                | 0 (0.000) |    19.03 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           80 |      705 | 2024-06-13 | 9INE              | L   | 0.927      | -            | -                | -                | -         |   -26.07 | bnox, maaryy, mASKED, morelz, Vegi    |
|           79 |      738 | 2024-06-12 | Nexus             | W   | 0.920      | -            | -                | -                | 0 (0.000) |     7.17 | bnox, maaryy, mASKED, morelz, Vegi    |
|           78 |      756 | 2024-06-11 | Nemiga            | L   | 0.914      | -            | -                | -                | -         |    -5.67 | bnox, maaryy, mASKED, morelz, Vegi    |
|           77 |      782 | 2024-06-10 | Rebels            | L   | 0.907      | -            | -                | -                | -         |   -10.31 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           76 |      887 | 2024-06-08 | Space             | W   | 0.894      | 0.435        | -                | 0.452 (0.176)    | 0 (0.000) |    12.84 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           75 |     1028 | 2024-06-06 | Zero Tenacity     | W   | 0.879      | 0.435        | 0.173 (0.066)    | 1.000 (0.382)    | 0 (0.000) |    21.04 | bnox, Markoś, mASKED, SpavaQu, tomiko |
|           74 |     1162 | 2024-06-03 | GUN5              | W   | 0.858      | 0.435        | 0.093 (0.035)    | 0.489 (0.182)    | 0 (0.000) |    16.98 | bnox, Markoś, mASKED, morelz, tomiko  |
|           73 |     1220 | 2024-06-01 | Enterprise        | L   | 0.844      | -            | -                | -                | -         |   -12.38 | bnox, mASKED, morelz, SpavaQu, tomiko |
|           72 |     1230 | 2024-05-31 | AMKAL             | L   | 0.841      | -            | -                | -                | -         |    -4.72 | bnox, mASKED, morelz, Sidney, tomiko  |
|           71 |     1264 | 2024-05-30 | NAVI Junior       | W   | 0.833      | -            | -                | -                | -         |     3.24 | bnox, maaryy, mASKED, morelz, tomiko  |
|           70 |     1272 | 2024-05-30 | Serbia            | L   | 0.832      | -            | -                | -                | -         |   -17.35 | bnox, maaryy, mASKED, morelz, tomiko  |
|           69 |     1316 | 2024-05-28 | Preasy            | W   | 0.819      | -            | -                | -                | -         |     8.81 | bnox, maaryy, mASKED, morelz, tomiko  |
|           68 |     1319 | 2024-05-28 | GUN5              | W   | 0.818      | 0.435        | 0.093 (0.033)    | -                | -         |    13.81 | bnox, maaryy, mASKED, morelz, tomiko  |
|           67 |     1337 | 2024-05-27 | VP.Prodigy        | L   | 0.813      | -            | -                | -                | -         |   -12.92 | bnox, maaryy, mASKED, morelz, tomiko  |
|           66 |     1360 | 2024-05-26 | ECLOT             | W   | 0.804      | -            | -                | -                | -         |    18.76 | bnox, maaryy, mASKED, morelz, tomiko  |
|           65 |     1376 | 2024-05-25 | Nexus             | W   | 0.799      | -            | -                | -                | -         |     9.25 | bnox, maaryy, mASKED, morelz, tomiko  |
|           64 |     1446 | 2024-05-22 | Endpoint          | W   | 0.780      | -            | -                | -                | -         |    13.49 | bnox, maaryy, mASKED, morelz, tomiko  |
|           63 |     1454 | 2024-05-22 | Johnny Speeds     | L   | 0.778      | -            | -                | -                | -         |    -2.26 | bnox, maaryy, mASKED, morelz, Vegi    |
|           62 |     1476 | 2024-05-21 | INFINITE          | W   | 0.774      | -            | -                | -                | -         |     3.24 | bnox, maaryy, mASKED, morelz, Vegi    |
|           61 |     1532 | 2024-05-20 | Passion UA        | L   | 0.765      | -            | -                | -                | -         |    -7.82 | bnox, maaryy, mASKED, morelz, Vegi    |
|           60 |     1624 | 2024-05-17 | Sangal            | L   | 0.744      | -            | -                | -                | -         |    -6.86 | bnox, maaryy, mASKED, morelz, Vegi    |
|           59 |     1690 | 2024-05-15 | EYEBALLERS        | L   | 0.734      | -            | -                | -                | -         |   -11.87 | bnox, maaryy, mASKED, morelz, Vegi    |
|           58 |     1779 | 2024-05-13 | 1WIN              | L   | 0.720      | -            | -                | -                | -         |    -9.44 | bnox, maaryy, mASKED, morelz, Vegi    |
|           57 |     1925 | 2024-05-07 | Enterprise        | L   | 0.678      | -            | -                | -                | -         |   -11.17 | bnox, maaryy, mASKED, morelz, Sobol   |
|           56 |     1941 | 2024-05-06 | ENCE Academy      | W   | 0.671      | -            | -                | -                | -         |     5.58 | bnox, maaryy, mASKED, morelz, Sobol   |
|           55 |     1986 | 2024-05-03 | Insilio           | L   | 0.653      | -            | -                | -                | -         |    -9.14 | bnox, maaryy, mASKED, Sidney, Sobol   |
|           54 |     2013 | 2024-05-02 | Sampi             | L   | 0.646      | -            | -                | -                | -         |    -9.96 | bnox, maaryy, mASKED, Sidney, Sobol   |
|           53 |     2024 | 2024-05-02 | B8                | L   | 0.644      | -            | -                | -                | -         |    -7.43 | bnox, maaryy, mASKED, morelz, Sobol   |
|           52 |     2072 | 2024-04-30 | BLEED             | L   | 0.631      | -            | -                | -                | -         |    -5.54 | bnox, maaryy, mASKED, morelz, Vegi    |
|           51 |     2079 | 2024-04-29 | AMKAL             | L   | 0.626      | -            | -                | -                | -         |    -5.85 | bnox, maaryy, mASKED, morelz, Vegi    |
|           50 |     2089 | 2024-04-29 | RUBY              | W   | 0.625      | 0.435        | 0.122 (0.033)    | -                | -         |    10.21 | bnox, maaryy, mASKED, Sidney, Vegi    |
|           49 |     2125 | 2024-04-27 | Insilio           | L   | 0.612      | -            | -                | -                | -         |    -9.94 | bnox, maaryy, mASKED, morelz, Vegi    |
|           48 |     2133 | 2024-04-27 | Enterprise        | W   | 0.612      | -            | -                | -                | -         |     8.65 | bnox, maaryy, mASKED, morelz, Vegi    |
|           47 |     2156 | 2024-04-26 | ARCRED            | L   | 0.605      | -            | -                | -                | -         |   -12.18 | bnox, maaryy, mASKED, morelz, Vegi    |
|           46 |     2177 | 2024-04-25 | 1WIN              | L   | 0.600      | -            | -                | -                | -         |   -10.20 | bnox, maaryy, mASKED, morelz, Vegi    |
|           45 |     2194 | 2024-04-24 | BLEED             | L   | 0.593      | -            | -                | -                | -         |    -6.26 | bnox, maaryy, mASKED, morelz, Vegi    |
|           44 |     2196 | 2024-04-24 | Passion UA        | W   | 0.593      | 0.384        | 0.163 (0.037)    | 1.000 (0.228)    | -         |    10.41 | bnox, maaryy, mASKED, morelz, Vegi    |
|           43 |     2205 | 2024-04-24 | Sampi             | L   | 0.591      | -            | -                | -                | -         |   -10.06 | bnox, maaryy, mASKED, morelz, Vegi    |
|           42 |     2227 | 2024-04-23 | ALTERNATE aTTaX   | W   | 0.584      | -            | -                | -                | -         |     8.76 | bnox, maaryy, mASKED, morelz, Vegi    |
|           41 |     2240 | 2024-04-22 | Grannys Knockers  | W   | 0.578      | -            | -                | -                | -         |     4.58 | bnox, maaryy, mASKED, morelz, Vegi    |
|           40 |     2261 | 2024-04-21 | Insilio           | W   | 0.571      | -            | -                | -                | -         |     8.26 | bnox, maaryy, mASKED, morelz, Vegi    |
|           39 |     2285 | 2024-04-20 | Nexus             | L   | 0.565      | -            | -                | -                | -         |   -11.20 | bnox, maaryy, mASKED, morelz, Vegi    |
|           38 |     2290 | 2024-04-20 | Passion UA        | W   | 0.565      | 0.371        | 0.163 (0.034)    | 1.000 (0.209)    | -         |    10.56 | bnox, maaryy, mASKED, morelz, Vegi    |
|           37 |     2379 | 2024-04-18 | Passion UA        | L   | 0.552      | -            | -                | -                | -         |    -6.92 | bnox, maaryy, mASKED, morelz, Vegi    |
|           36 |     2393 | 2024-04-18 | Sampi             | L   | 0.551      | -            | -                | -                | -         |    -9.49 | bnox, maaryy, mASKED, morelz, Vegi    |
|           35 |     2409 | 2024-04-17 | PARIVISION        | W   | 0.546      | -            | -                | -                | -         |     9.77 | bnox, maaryy, mASKED, morelz, Vegi    |
|           34 |     2451 | 2024-04-16 | Gaimin Gladiators | L   | 0.539      | -            | -                | -                | -         |    -6.03 | bnox, maaryy, mASKED, morelz, Vegi    |
|           33 |     2514 | 2024-04-12 | MOUZ NXT          | W   | 0.512      | 0.371        | 0.169 (0.032)    | 1.000 (0.190)    | -         |    10.42 | bnox, maaryy, mASKED, morelz, Vegi    |
|           32 |     2594 | 2024-04-10 | EYEBALLERS        | W   | 0.498      | -            | -                | -                | -         |     6.63 | bnox, maaryy, mASKED, morelz, Vegi    |
|           31 |     2672 | 2024-04-08 | HAVU              | W   | 0.485      | -            | -                | -                | -         |     3.34 | bnox, maaryy, mASKED, morelz, Vegi    |
|           30 |     2679 | 2024-04-08 | JANO              | W   | 0.484      | -            | -                | -                | -         |     2.83 | bnox, maaryy, mASKED, morelz, Vegi    |
|           29 |     2809 | 2024-04-03 | Enterprise        | L   | 0.453      | -            | -                | -                | -         |    -7.39 | bnox, maaryy, mASKED, morelz, Vegi    |
|           28 |     2821 | 2024-04-03 | ECLOT             | L   | 0.452      | -            | -                | -                | -         |    -3.88 | bnox, maaryy, mASKED, morelz, Vegi    |
|           27 |     2853 | 2024-04-02 | 3DMAX             | L   | 0.446      | -            | -                | -                | -         |    -2.58 | bnox, maaryy, mASKED, morelz, Vegi    |
|           26 |     2862 | 2024-04-02 | Sashi             | L   | 0.444      | -            | -                | -                | -         |    -4.04 | bnox, maaryy, mASKED, morelz, Vegi    |
|           25 |     3126 | 2024-03-16 | RUBY              | L   | 0.333      | -            | -                | -                | -         |    -5.43 | bnox, maaryy, mASKED, morelz, Vegi    |
|           24 |     3146 | 2024-03-15 | The Chosen Few    | W   | 0.326      | -            | -                | -                | -         |     1.93 | bnox, maaryy, mASKED, morelz, Vegi    |
|           23 |     3149 | 2024-03-15 | Sampi             | L   | 0.325      | -            | -                | -                | -         |    -5.87 | bnox, maaryy, mASKED, morelz, Vegi    |
|           22 |     3196 | 2024-03-13 | MOUZ NXT          | W   | 0.314      | -            | -                | -                | -         |     6.20 | bnox, maaryy, mASKED, morelz, Vegi    |
|           21 |     3215 | 2024-03-13 | ECLOT             | W   | 0.312      | -            | -                | -                | -         |     7.10 | bnox, maaryy, mASKED, morelz, Vegi    |
|           20 |     3229 | 2024-03-13 | ECLOT             | W   | 0.311      | -            | -                | -                | -         |     7.23 | bnox, maaryy, mASKED, morelz, Vegi    |
|           19 |     3271 | 2024-03-11 | ex-Preasy         | L   | 0.299      | -            | -                | -                | -         |    -6.11 | bnox, maaryy, mASKED, morelz, Vegi    |
|           18 |     3318 | 2024-03-09 | Sashi             | L   | 0.285      | -            | -                | -                | -         |    -2.43 | bnox, maaryy, mASKED, morelz, Vegi    |
|           17 |     3354 | 2024-03-07 | VP.Prodigy        | W   | 0.274      | -            | -                | -                | -         |     3.26 | bnox, maaryy, mASKED, morelz, Vegi    |
|           16 |     3363 | 2024-03-07 | kONO              | W   | 0.272      | -            | -                | -                | -         |     2.79 | bnox, maaryy, mASKED, morelz, Vegi    |
|           15 |     3391 | 2024-03-06 | Passion UA        | W   | 0.266      | -            | -                | -                | -         |     5.75 | bnox, maaryy, mASKED, morelz, Vegi    |
|           14 |     3392 | 2024-03-06 | Enterprise        | W   | 0.265      | -            | -                | -                | -         |     4.23 | bnox, maaryy, mASKED, morelz, Vegi    |
|           13 |     3432 | 2024-03-05 | Young Ninjas      | W   | 0.259      | -            | -                | -                | -         |     2.49 | bnox, maaryy, mASKED, morelz, Vegi    |
|           12 |     3499 | 2024-03-02 | AURA              | W   | 0.238      | -            | -                | -                | -         |     0.62 | bnox, maaryy, mASKED, morelz, Vegi    |
|           11 |     3543 | 2024-02-28 | Secret            | L   | 0.219      | -            | -                | -                | -         |    -6.23 | bnox, maaryy, mASKED, morelz, Vegi    |
|           10 |     3546 | 2024-02-28 | ECLOT             | L   | 0.218      | -            | -                | -                | -         |    -1.69 | bnox, maaryy, mASKED, morelz, Vegi    |
|            9 |     3567 | 2024-02-27 | Sprout            | W   | 0.212      | -            | -                | -                | -         |     0.30 | bnox, maaryy, mASKED, morelz, Vegi    |
|            8 |     3641 | 2024-02-24 | ECLOT             | W   | 0.192      | -            | -                | -                | -         |     4.58 | bnox, maaryy, mASKED, morelz, Vegi    |
|            7 |     3670 | 2024-02-22 | PGE Turow         | W   | 0.178      | -            | -                | -                | -         |     0.99 | bnox, maaryy, mASKED, morelz, reiko   |
|            6 |     3702 | 2024-02-21 | ECLOT             | L   | 0.171      | -            | -                | -                | -         |    -1.30 | bnox, maaryy, mASKED, morelz, Vegi    |
|            5 |     3749 | 2024-02-19 | ECLOT             | W   | 0.159      | -            | -                | -                | -         |     3.82 | bnox, maaryy, mASKED, morelz, Vegi    |
|            4 |     3987 | 2024-02-07 | Endpoint          | L   | 0.078      | -            | -                | -                | -         |    -1.39 | bnox, maaryy, mASKED, morelz, Vegi    |
|            3 |     4132 | 2024-01-31 | Sashi             | W   | 0.033      | -            | -                | -                | -         |     0.81 | bnox, maaryy, mASKED, morelz, Vegi    |
|            2 |     4149 | 2024-01-30 | RUBY              | L   | 0.027      | -            | -                | -                | -         |    -0.40 | bnox, maaryy, mASKED, morelz, Vegi    |
|            1 |     4152 | 2024-01-30 | 3DMAX             | W   | 0.026      | -            | -                | -                | -         |     0.70 | bnox, maaryy, mASKED, morelz, Vegi    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,758.98)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.947 | $5,000.00      | $4,732.78       |
| 2024-06-13 |      0.927 | $545.00        | $505.45         |
| 2024-05-02 |      0.647 | $500.00        | $323.31         |
| 2024-04-25 |      0.598 | $3,000.00      | $1,794.75       |
| 2024-03-25 |      0.393 | $1,250.00      | $491.58         |
| 2024-02-28 |      0.218 | $3,000.00      | $654.35         |
| 2024-02-21 |      0.171 | $1,500.00      | $256.76         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
