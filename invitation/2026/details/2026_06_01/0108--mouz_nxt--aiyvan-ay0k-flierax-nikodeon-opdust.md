### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: AiyvaN, ay0k, Flierax, Nikodeon, opdust<br />
Global Rank: [108](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [72]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  1025.4<br />
<br />
Final Rank Value (1025.4) = Starting Rank Value (1070.9) + Head To Head Adjustments (-45.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.356[<sup>1</sup>](#table2)
- Bounty Collected: 0.367[<sup>2</sup>](#table1)
- Opponent Network: 0.278[<sup>2</sup>](#table1)
- LAN Wins: 0.408[<sup>2</sup>](#table1)

The average of these factors is 0.352<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1070.9
- 400 + ( ( 0.352 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1070.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           98 |      605 | 2026-05-14 | TDK             | L   | 1.000      | -            | -                | -                | -         |    -8.31 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           97 |      658 | 2026-05-12 | Lavked          | L   | 1.000      | -            | -                | -                | -         |   -13.08 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           96 |      715 | 2026-05-11 | INOX Division   | L   | 1.000      | -            | -                | -                | -         |   -12.32 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           95 |      757 | 2026-05-10 | Tricked         | L   | 1.000      | -            | -                | -                | -         |    -9.07 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           94 |      768 | 2026-05-09 | UNiTY           | W   | 1.000      | 0.384        | -                | 0.605 (0.233)    | -         |     8.69 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           93 |      806 | 2026-05-08 | AM              | W   | 1.000      | 0.435        | 0.016 (0.007)    | 0.725 (0.315)    | -         |    22.59 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           92 |      818 | 2026-05-07 | Lavked          | L   | 1.000      | -            | -                | -                | -         |   -13.97 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           91 |      860 | 2026-05-05 | Bebop           | W   | 1.000      | 0.384        | -                | 0.757 (0.291)    | -         |    11.83 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           90 |      870 | 2026-05-04 | Ursa            | L   | 1.000      | -            | -                | -                | -         |   -12.48 | ay0k, Flierax, lmbt, Nikodeon, opdust   |
|           89 |     1165 | 2026-04-27 | UNiTY           | L   | 0.967      | -            | -                | -                | -         |   -22.26 | ay0k, Flierax, lmbt, Nikodeon, opdust   |
|           88 |     1393 | 2026-04-23 | ECSTATIC        | W   | 0.940      | 0.363        | 0.040 (0.014)    | -                | -         |    16.27 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           87 |     1429 | 2026-04-22 | Acend           | L   | 0.933      | -            | -                | -                | -         |    -8.51 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           86 |     1459 | 2026-04-20 | CYBERSHOKE      | L   | 0.919      | -            | -                | -                | -         |   -10.52 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           85 |     1469 | 2026-04-19 | EYEBALLERS      | L   | 0.914      | -            | -                | -                | -         |    -4.82 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           84 |     1487 | 2026-04-19 | Ursa            | W   | 0.911      | 0.435        | -                | 0.962 (0.381)    | -         |    13.75 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           83 |     1519 | 2026-04-17 | ex-RUBY         | L   | 0.900      | -            | -                | -                | -         |   -13.58 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           82 |     1557 | 2026-04-14 | Qual4           | W   | 0.881      | -            | -                | -                | -         |     0.59 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           81 |     1569 | 2026-04-14 | GenOne          | W   | 0.878      | 0.435        | -                | 0.916 (0.350)    | -         |     6.37 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           80 |     1580 | 2026-04-13 | Clutchain       | L   | 0.874      | -            | -                | -                | -         |   -26.28 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           79 |     1608 | 2026-04-12 | ARCRED          | L   | 0.865      | -            | -                | -                | -         |    -9.78 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           78 |     1710 | 2026-04-08 | brazylijski luz | W   | 0.839      | -            | -                | -                | -         |     6.31 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           77 |     2395 | 2026-03-29 | aimclub         | L   | 0.774      | -            | -                | -                | -         |   -21.29 | ay0k, lmbt, Nikodeon, opdust, xelex     |
|           76 |     2423 | 2026-03-29 | Lazer Cats      | L   | 0.772      | -            | -                | -                | -         |   -18.95 | ay0k, lmbt, Nikodeon, opdust, xelex     |
|           75 |     2443 | 2026-03-29 | ADN             | W   | 0.771      | -            | -                | -                | 1 (0.771) |     0.37 | ay0k, lmbt, Nikodeon, opdust, xelex     |
|           74 |     2641 | 2026-03-25 | BIG             | L   | 0.747      | -            | -                | -                | -         |    -4.44 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           73 |     2702 | 2026-03-24 | fnatic          | W   | 0.740      | -            | -                | -                | 1 (0.740) |    10.44 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           72 |     2723 | 2026-03-24 | Nexus           | W   | 0.738      | -            | -                | -                | 1 (0.738) |     3.12 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           71 |     3226 | 2026-03-14 | Nemiga          | L   | 0.672      | -            | -                | -                | -         |    -6.60 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           70 |     3307 | 2026-03-12 | megoshort       | W   | 0.660      | -            | -                | -                | -         |     4.28 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           69 |     3325 | 2026-03-12 | CYBERSHOKE      | L   | 0.659      | -            | -                | -                | -         |    -8.61 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           68 |     3361 | 2026-03-11 | K27             | L   | 0.652      | -            | -                | -                | -         |    -4.70 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           67 |     3402 | 2026-03-10 | Nuclear TigeRES | W   | 0.646      | 0.435        | 0.047 (0.013)    | -                | -         |    13.92 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           66 |     3458 | 2026-03-09 | Nemesis         | W   | 0.639      | 0.371        | 0.141 (0.033)    | 0.978 (0.232)    | -         |    14.23 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           65 |     3492 | 2026-03-08 | Acend           | W   | 0.635      | -            | -                | -                | -         |    13.64 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           64 |     3533 | 2026-03-08 | GenOne          | W   | 0.633      | -            | -                | -                | -         |     4.92 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           63 |     3610 | 2026-03-06 | ex-RUBY         | L   | 0.621      | -            | -                | -                | -         |   -12.02 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           62 |     3635 | 2026-03-06 | UNiTY           | W   | 0.618      | -            | -                | -                | -         |     3.88 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           61 |     3739 | 2026-03-04 | PsychoFace      | W   | 0.605      | 0.435        | 0.036 (0.009)    | 1.000 (0.263)    | -         |     8.77 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           60 |     3849 | 2026-03-01 | Oxuji           | W   | 0.587      | -            | -                | -                | -         |    13.12 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           59 |     3912 | 2026-02-28 | SPARTA          | L   | 0.579      | -            | -                | -                | -         |    -5.90 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           58 |     3964 | 2026-02-27 | Tricked         | L   | 0.572      | -            | -                | -                | -         |    -5.34 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           57 |     3989 | 2026-02-26 | TNC             | L   | 0.568      | -            | -                | -                | -         |   -10.93 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           56 |     4001 | 2026-02-26 | K27             | L   | 0.567      | -            | -                | -                | -         |    -3.50 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           55 |     4020 | 2026-02-26 | EYEBALLERS      | L   | 0.566      | -            | -                | -                | -         |    -3.24 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           54 |     4035 | 2026-02-26 | Hashiras        | W   | 0.565      | -            | -                | -                | -         |     2.50 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           53 |     4067 | 2026-02-25 | Nuclear TigeRES | W   | 0.560      | 0.435        | 0.047 (0.011)    | -                | -         |    13.15 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           52 |     4140 | 2026-02-23 | BC.Game         | W   | 0.548      | -            | -                | -                | -         |     0.30 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           51 |     4146 | 2026-02-23 | Alliance        | L   | 0.548      | -            | -                | -                | -         |    -2.58 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           50 |     4186 | 2026-02-22 | TDK             | L   | 0.541      | -            | -                | -                | -         |    -6.50 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           49 |     4218 | 2026-02-22 | SPARTA          | L   | 0.540      | -            | -                | -                | -         |   -16.39 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           48 |     4285 | 2026-02-21 | TDK             | L   | 0.533      | -            | -                | -                | -         |    -7.18 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           47 |     4312 | 2026-02-20 | Leo             | W   | 0.528      | -            | -                | -                | -         |     2.66 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           46 |     4323 | 2026-02-20 | TNC             | W   | 0.527      | 0.435        | -                | 1.000 (0.229)    | -         |     6.59 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           45 |     4396 | 2026-02-19 | ECSTATIC        | L   | 0.518      | -            | -                | -                | -         |    -7.88 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           44 |     4418 | 2026-02-18 | Johnny Speeds   | W   | 0.514      | 0.384        | 0.048 (0.009)    | -                | -         |    11.39 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           43 |     4437 | 2026-02-18 | TDK             | W   | 0.513      | 0.435        | 0.038 (0.008)    | -                | -         |     9.58 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           42 |     4443 | 2026-02-18 | FAVBET          | W   | 0.512      | -            | -                | -                | -         |     4.20 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           41 |     4468 | 2026-02-17 | Oxuji           | W   | 0.509      | 0.624        | -                | 0.790 (0.251)    | -         |    11.37 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           40 |     4480 | 2026-02-17 | magic           | W   | 0.508      | 0.624        | 0.238 (0.076)    | 0.739 (0.234)    | -         |    15.02 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           39 |     4524 | 2026-02-16 | Omega           | W   | 0.501      | -            | -                | -                | -         |    10.01 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           38 |     4549 | 2026-02-16 | BRUTE           | W   | 0.499      | -            | -                | -                | -         |     3.31 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           37 |     4638 | 2026-02-14 | ENCE            | W   | 0.487      | -            | -                | -                | -         |     2.88 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           36 |     4876 | 2026-02-08 | Nuclear TigeRES | L   | 0.448      | -            | -                | -                | -         |    -2.64 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           35 |     4888 | 2026-02-08 | Virtus.pro      | W   | 0.447      | 0.624        | 0.025 (0.007)    | -                | -         |    10.35 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           34 |     5061 | 2026-02-02 | 9INE            | L   | 0.406      | -            | -                | -                | -         |    -8.24 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           33 |     5142 | 2026-01-31 | ARCRED          | W   | 0.391      | -            | -                | -                | -         |     8.95 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           32 |     5161 | 2026-01-30 | Eternal Fire    | W   | 0.387      | -            | -                | -                | -         |     0.96 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           31 |     5215 | 2026-01-28 | FAVBET          | L   | 0.373      | -            | -                | -                | -         |    -8.81 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           30 |     5233 | 2026-01-27 | FAVBET          | L   | 0.367      | -            | -                | -                | -         |    -8.88 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           29 |     5268 | 2026-01-25 | UNiTY           | L   | 0.354      | -            | -                | -                | -         |    -9.31 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           28 |     5280 | 2026-01-25 | MANA            | W   | 0.353      | -            | -                | -                | -         |     2.94 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           27 |     5319 | 2026-01-24 | magic           | L   | 0.346      | -            | -                | -                | -         |    -0.54 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           26 |     5352 | 2026-01-23 | illwill         | L   | 0.340      | -            | -                | -                | -         |    -5.16 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           25 |     5375 | 2026-01-23 | EAC             | W   | 0.339      | -            | -                | -                | -         |     7.40 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           24 |     5418 | 2026-01-22 | ALLINNERS       | W   | 0.332      | -            | -                | -                | -         |     0.95 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           23 |     5463 | 2026-01-21 | TNC             | L   | 0.326      | -            | -                | -                | -         |    -6.37 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           22 |     5478 | 2026-01-20 | BASEMENT BOYS   | W   | 0.319      | -            | -                | -                | -         |     6.92 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           21 |     5519 | 2026-01-18 | Betclic         | L   | 0.306      | -            | -                | -                | -         |    -2.93 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           20 |     5577 | 2026-01-17 | Famalicão       | W   | 0.299      | -            | -                | -                | 1 (0.299) |     1.66 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           19 |     5669 | 2026-01-15 | Fuzos           | W   | 0.286      | -            | -                | -                | 1 (0.286) |     1.27 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           18 |     5675 | 2026-01-15 | MTX             | W   | 0.285      | -            | -                | -                | 1 (0.285) |     0.66 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           17 |     5762 | 2026-01-05 | ALGO            | W   | 0.220      | -            | -                | -                | 1 (0.220) |     0.85 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           16 |     5764 | 2026-01-05 | ASTRAL          | W   | 0.219      | -            | -                | -                | 1 (0.219) |     3.95 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           15 |     5767 | 2026-01-05 | Walczaki        | W   | 0.218      | -            | -                | -                | 1 (0.218) |     4.36 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           14 |     5775 | 2026-01-04 | EC BANGA        | W   | 0.214      | -            | -                | -                | 1 (0.214) |     0.84 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           13 |     5777 | 2026-01-04 | cirahvi         | W   | 0.214      | -            | -                | -                | -         |     1.07 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           12 |     5782 | 2026-01-04 | ALGO            | L   | 0.214      | -            | -                | -                | -         |    -5.93 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           11 |     5786 | 2026-01-04 | SemperFi        | W   | 0.213      | -            | -                | -                | -         |     3.61 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           10 |     5790 | 2026-01-04 | OlyBet          | W   | 0.213      | -            | -                | -                | -         |     1.52 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            9 |     5916 | 2025-12-19 | fnatic          | L   | 0.107      | -            | -                | -                | -         |    -1.59 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            8 |     5929 | 2025-12-18 | Inner Circle    | W   | 0.101      | -            | -                | -                | -         |     2.78 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            7 |     5936 | 2025-12-18 | Venom           | L   | 0.100      | -            | -                | -                | -         |    -2.99 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            6 |     5955 | 2025-12-17 | illwill         | W   | 0.093      | -            | -                | -                | -         |     0.13 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            5 |     5959 | 2025-12-17 | Grindas         | W   | 0.092      | -            | -                | -                | -         |     0.12 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            4 |     6024 | 2025-12-11 | CPH Wolves      | L   | 0.054      | -            | -                | -                | -         |    -1.63 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            3 |     6068 | 2025-12-08 | Lavked          | L   | 0.033      | -            | -                | -                | -         |    -0.76 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            2 |     6121 | 2025-12-06 | magic           | L   | 0.019      | -            | -                | -                | -         |    -0.03 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            1 |     6182 | 2025-12-03 | BASEMENT BOYS   | W   | 0.000      | -            | -                | -                | -         |     0.01 | ay0k, Joey, Nikodeon, opdust, xelex     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,607.15)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.681 | $500.00        | $340.58         |
| 2026-03-13 |      0.668 | $2,000.00      | $1,335.41       |
| 2026-03-11 |      0.652 | $5,000.00      | $3,262.11       |
| 2026-02-27 |      0.574 | $2,000.00      | $1,148.87       |
| 2026-02-24 |      0.555 | $2,250.00      | $1,247.84       |
| 2026-02-20 |      0.527 | $2,000.00      | $1,054.85       |
| 2026-01-18 |      0.308 | $1,454.00      | $447.34         |
| 2026-01-05 |      0.220 | $3,500.00      | $770.15         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
