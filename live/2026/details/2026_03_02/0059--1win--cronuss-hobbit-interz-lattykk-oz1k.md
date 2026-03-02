### Roster Details<br />
Team Name: 1win<br />
Roster: cronuss, HObbit, interz, lattykk, oz1k<br />
Global Rank: [59](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [44]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  1134.0<br />
<br />
Final Rank Value (1134.0) = Starting Rank Value (1073.5) + Head To Head Adjustments (60.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.429[<sup>1</sup>](#table2)
- Bounty Collected: 0.396[<sup>2</sup>](#table1)
- Opponent Network: 0.294[<sup>2</sup>](#table1)
- LAN Wins: 0.304[<sup>2</sup>](#table1)

The average of these factors is 0.356<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1073.5
- 400 + ( ( 0.356 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1073.5


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
|           71 |      653 | 2026-02-15 | Nuclear TigeRES    | L   | 1.000      | -            | -                | -                | -         |   -10.76 | cronuss, HObbit, interz, lattykk, oz1k |
|           70 |      676 | 2026-02-14 | los kogutos        | L   | 1.000      | -            | -                | -                | -         |   -19.88 | cronuss, HObbit, interz, lattykk, oz1k |
|           69 |      695 | 2026-02-14 | Nuclear TigeRES    | W   | 1.000      | 0.371        | 0.082 (0.030)    | 1.000 (0.371)    | 1 (1.000) |    19.89 | cronuss, HObbit, interz, lattykk, oz1k |
|           68 |      713 | 2026-02-14 | K27                | W   | 1.000      | 0.371        | 0.109 (0.040)    | 0.763 (0.283)    | 1 (1.000) |    24.30 | cronuss, HObbit, interz, lattykk, oz1k |
|           67 |      729 | 2026-02-14 | Rebels             | L   | 1.000      | -            | -                | -                | -         |   -17.66 | cronuss, HObbit, interz, lattykk, oz1k |
|           66 |      736 | 2026-02-14 | Oxuji              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     7.07 | cronuss, HObbit, interz, lattykk, oz1k |
|           65 |     1081 | 2026-02-03 | EYEBALLERS         | L   | 1.000      | -            | -                | -                | -         |    -9.66 | cronuss, HObbit, interz, lattykk, oz1k |
|           64 |     1113 | 2026-02-02 | Johnny Speeds      | W   | 1.000      | 0.435        | -                | 0.910 (0.395)    | 0 (0.000) |    14.14 | cronuss, HObbit, interz, lattykk, oz1k |
|           63 |     1142 | 2026-02-01 | magic              | L   | 1.000      | -            | -                | -                | -         |   -13.31 | cronuss, HObbit, interz, lattykk, oz1k |
|           62 |     1166 | 2026-01-31 | Leo                | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.30 | cronuss, HObbit, interz, lattykk, oz1k |
|           61 |     1209 | 2026-01-30 | SINNERS            | L   | 0.992      | -            | -                | -                | -         |    -5.87 | cronuss, HObbit, interz, lattykk, oz1k |
|           60 |     1217 | 2026-01-29 | ex-Fingers Crossed | L   | 0.988      | -            | -                | -                | -         |   -21.53 | cronuss, HObbit, interz, lattykk, oz1k |
|           59 |     1230 | 2026-01-29 | illwill            | W   | 0.986      | 0.435        | 0.093 (0.040)    | 1.000 (0.429)    | 0 (0.000) |    23.82 | cronuss, HObbit, interz, lattykk, oz1k |
|           58 |     1238 | 2026-01-29 | UNiTY              | W   | 0.985      | 0.371        | -                | 0.529 (0.193)    | 0 (0.000) |     8.69 | cronuss, HObbit, interz, lattykk, oz1k |
|           57 |     1252 | 2026-01-28 | EYEBALLERS         | W   | 0.980      | 0.435        | 0.182 (0.077)    | 0.707 (0.301)    | 0 (0.000) |    22.32 | cronuss, HObbit, interz, lattykk, oz1k |
|           56 |     1268 | 2026-01-27 | Ursa               | W   | 0.974      | -            | -                | -                | 0 (0.000) |     8.49 | cronuss, HObbit, interz, lattykk, oz1k |
|           55 |     1301 | 2026-01-26 | Sangal             | W   | 0.966      | 0.435        | -                | 0.693 (0.291)    | 0 (0.000) |    13.21 | cronuss, HObbit, interz, lattykk, oz1k |
|           54 |     1306 | 2026-01-25 | Nemiga             | L   | 0.961      | -            | -                | -                | -         |   -10.95 | cronuss, HObbit, interz, lattykk, oz1k |
|           53 |     1320 | 2026-01-25 | MINLATE            | L   | 0.959      | -            | -                | -                | -         |   -19.16 | cronuss, HObbit, interz, lattykk, oz1k |
|           52 |     1428 | 2026-01-22 | AM                 | W   | 0.941      | -            | -                | -                | -         |    11.80 | cronuss, HObbit, interz, lattykk, oz1k |
|           51 |     1502 | 2026-01-20 | GenOne             | W   | 0.928      | 0.435        | -                | 0.692 (0.279)    | -         |    11.43 | cronuss, HObbit, interz, lattykk, oz1k |
|           50 |     1556 | 2026-01-18 | ex-RUBY            | L   | 0.912      | -            | -                | -                | -         |   -19.33 | cronuss, HObbit, interz, lattykk, oz1k |
|           49 |     1587 | 2026-01-17 | Nemesis            | L   | 0.907      | -            | -                | -                | -         |    -9.48 | cronuss, HObbit, interz, lattykk, oz1k |
|           48 |     2443 | 2025-11-23 | FAVBET             | L   | 0.541      | -            | -                | -                | -         |   -11.49 | cronuss, HObbit, interz, lattykk, oz1k |
|           47 |     2457 | 2025-11-23 | ex-RUBY            | W   | 0.539      | 0.384        | -                | 1.000 (0.207)    | -         |     4.44 | cronuss, HObbit, interz, lattykk, oz1k |
|           46 |     2475 | 2025-11-22 | Alliance           | W   | 0.533      | 0.384        | 0.124 (0.025)    | 0.943 (0.193)    | -         |    12.58 | cronuss, HObbit, interz, lattykk, oz1k |
|           45 |     2497 | 2025-11-21 | KOLESIE            | W   | 0.528      | 0.384        | 0.088 (0.018)    | -                | -         |    10.66 | cronuss, HObbit, interz, lattykk, oz1k |
|           44 |     2751 | 2025-11-11 | Nemiga             | L   | 0.461      | -            | -                | -                | -         |    -4.02 | cronuss, HObbit, interz, lattykk, oz1k |
|           43 |     2764 | 2025-11-11 | Nexus              | L   | 0.458      | -            | -                | -                | -         |    -9.13 | cronuss, HObbit, interz, lattykk, oz1k |
|           42 |     2781 | 2025-11-10 | BASEMENT BOYS      | W   | 0.454      | -            | -                | -                | -         |     1.31 | cronuss, HObbit, interz, lattykk, oz1k |
|           41 |     3037 | 2025-11-05 | Oramond            | W   | 0.419      | 0.384        | 0.102 (0.016)    | -                | -         |     3.89 | cronuss, HObbit, interz, lattykk, oz1k |
|           40 |     3095 | 2025-11-03 | NOVAQ              | W   | 0.405      | -            | -                | -                | -         |     5.70 | cronuss, HObbit, interz, lattykk, oz1k |
|           39 |     3112 | 2025-11-02 | K27                | W   | 0.399      | 0.384        | 0.109 (0.017)    | -                | -         |    10.67 | cronuss, HObbit, interz, lattykk, oz1k |
|           38 |     3228 | 2025-10-28 | Eternal Fire       | W   | 0.367      | -            | -                | -                | -         |     1.45 | cronuss, HObbit, interz, lattykk, oz1k |
|           37 |     3270 | 2025-10-27 | JiJieHao           | W   | 0.361      | -            | -                | -                | -         |     3.63 | cronuss, HObbit, interz, lattykk, oz1k |
|           36 |     3377 | 2025-10-25 | ECSTATIC           | W   | 0.347      | 0.384        | 0.143 (0.019)    | -                | -         |     8.93 | cronuss, HObbit, interz, lattykk, oz1k |
|           35 |     3485 | 2025-10-23 | BASEMENT BOYS      | L   | 0.334      | -            | -                | -                | -         |    -9.48 | cronuss, HObbit, interz, lattykk, oz1k |
|           34 |     3569 | 2025-10-19 | ENCE               | L   | 0.307      | -            | -                | -                | -         |    -3.25 | cronuss, HObbit, interz, lattykk, oz1k |
|           33 |     3589 | 2025-10-18 | BIG                | W   | 0.300      | 0.384        | 0.142 (0.016)    | -                | -         |     7.69 | cronuss, HObbit, interz, lattykk, oz1k |
|           32 |     3627 | 2025-10-17 | FAVBET             | W   | 0.291      | -            | -                | -                | -         |     3.27 | cronuss, HObbit, interz, lattykk, oz1k |
|           31 |     3652 | 2025-10-16 | UNiTY              | W   | 0.286      | -            | -                | -                | -         |     2.24 | cronuss, HObbit, interz, lattykk, oz1k |
|           30 |     3719 | 2025-10-14 | Leo                | W   | 0.273      | -            | -                | -                | -         |     1.73 | cronuss, HObbit, interz, lattykk, oz1k |
|           29 |     3745 | 2025-10-13 | Nuclear TigeRES    | L   | 0.267      | -            | -                | -                | -         |    -1.70 | cronuss, HObbit, interz, lattykk, oz1k |
|           28 |     3760 | 2025-10-12 | BetBoom            | L   | 0.259      | -            | -                | -                | -         |    -1.00 | cronuss, HObbit, interz, lattykk, oz1k |
|           27 |     3789 | 2025-10-11 | JiJieHao           | W   | 0.251      | -            | -                | -                | -         |     2.67 | cronuss, HObbit, interz, lattykk, oz1k |
|           26 |     3864 | 2025-10-09 | Spirit Academy     | W   | 0.239      | -            | -                | -                | -         |     0.99 | cronuss, HObbit, interz, lattykk, oz1k |
|           25 |     3907 | 2025-10-08 | Oramond            | L   | 0.234      | -            | -                | -                | -         |    -4.86 | cronuss, HObbit, interz, lattykk, oz1k |
|           24 |     3951 | 2025-10-07 | ex-Zero Tenacity   | W   | 0.227      | -            | -                | -                | -         |     1.01 | cronuss, HObbit, interz, lattykk, oz1k |
|           23 |     3984 | 2025-10-07 | FAVBET             | W   | 0.225      | -            | -                | -                | -         |     2.46 | cronuss, HObbit, interz, lattykk, oz1k |
|           22 |     4101 | 2025-10-05 | Tricked            | W   | 0.212      | -            | -                | -                | -         |     3.67 | cronuss, HObbit, interz, lattykk, oz1k |
|           21 |     4212 | 2025-10-02 | EYEBALLERS         | W   | 0.193      | -            | -                | -                | -         |     4.35 | cronuss, HObbit, interz, lattykk, oz1k |
|           20 |     4266 | 2025-09-30 | CYBERSHOKE         | L   | 0.181      | -            | -                | -                | -         |    -1.86 | cronuss, HObbit, interz, lattykk, oz1k |
|           19 |     4284 | 2025-09-30 | FORZE Reload       | W   | 0.179      | -            | -                | -                | -         |     1.31 | cronuss, HObbit, interz, lattykk, oz1k |
|           18 |     4296 | 2025-09-30 | Johnny Speeds      | L   | 0.178      | -            | -                | -                | -         |    -1.62 | cronuss, HObbit, interz, lattykk, oz1k |
|           17 |     4311 | 2025-09-29 | THE                | W   | 0.174      | -            | -                | -                | -         |     0.22 | cronuss, HObbit, interz, lattykk, oz1k |
|           16 |     4330 | 2025-09-29 | Fire Flux          | W   | 0.172      | -            | -                | -                | -         |     0.89 | cronuss, HObbit, interz, lattykk, oz1k |
|           15 |     4349 | 2025-09-28 | Betclic            | W   | 0.167      | -            | -                | -                | -         |     0.46 | cronuss, HObbit, interz, lattykk, oz1k |
|           14 |     4379 | 2025-09-28 | UNiTY              | W   | 0.165      | -            | -                | -                | -         |     1.35 | cronuss, HObbit, interz, lattykk, oz1k |
|           13 |     4474 | 2025-09-26 | ARCRED             | W   | 0.152      | -            | -                | -                | -         |     2.35 | cronuss, HObbit, interz, lattykk, oz1k |
|           12 |     4528 | 2025-09-25 | NIP Impact         | W   | 0.144      | -            | -                | -                | -         |     0.85 | cronuss, HObbit, interz, lattykk, oz1k |
|           11 |     4554 | 2025-09-24 | Leo                | L   | 0.139      | -            | -                | -                | -         |    -3.47 | cronuss, HObbit, interz, lattykk, oz1k |
|           10 |     4559 | 2025-09-23 | RUBY               | W   | 0.134      | -            | -                | -                | -         |     0.70 | cronuss, HObbit, interz, lattykk, oz1k |
|            9 |     4590 | 2025-09-22 | ex-Fingers Crossed | L   | 0.125      | -            | -                | -                | -         |    -2.60 | cronuss, HObbit, interz, lattykk, oz1k |
|            8 |     4641 | 2025-09-20 | SENZA              | W   | 0.112      | -            | -                | -                | -         |     0.13 | cronuss, HObbit, interz, lattykk, oz1k |
|            7 |     4700 | 2025-09-18 | Dziuseppe          | W   | 0.100      | -            | -                | -                | -         |     0.32 | cronuss, HObbit, interz, lattykk, oz1k |
|            6 |     4812 | 2025-09-14 | ComeBack           | W   | 0.074      | -            | -                | -                | -         |     0.17 | cronuss, HObbit, interz, lattykk, oz1k |
|            5 |     4876 | 2025-09-13 | THE                | W   | 0.067      | -            | -                | -                | -         |     0.08 | cronuss, HObbit, interz, lattykk, oz1k |
|            4 |     5149 | 2025-09-07 | Oramond            | L   | 0.027      | -            | -                | -                | -         |    -0.56 | cronuss, HObbit, interz, lattykk, oz1k |
|            3 |     5194 | 2025-09-06 | SIXSEVEN           | W   | 0.019      | -            | -                | -                | -         |     0.12 | cronuss, HObbit, interz, lattykk, oz1k |
|            2 |     5209 | 2025-09-05 | Eternal Fire       | L   | 0.013      | -            | -                | -                | -         |    -0.37 | cronuss, HObbit, interz, lattykk, oz1k |
|            1 |     5217 | 2025-09-05 | FORZE Reload       | L   | 0.012      | -            | -                | -                | -         |    -0.28 | cronuss, HObbit, interz, lattykk, oz1k |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,643.65)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-15 |      1.000 | $5,000.00      | $5,000.00       |
| 2026-01-30 |      0.994 | $5,000.00      | $4,971.39       |
| 2025-11-23 |      0.541 | $5,000.00      | $2,702.85       |
| 2025-11-16 |      0.494 | $750.00        | $370.57         |
| 2025-10-19 |      0.307 | $3,000.00      | $922.09         |
| 2025-10-12 |      0.260 | $5,000.00      | $1,301.94       |
| 2025-10-01 |      0.187 | $2,000.00      | $374.81         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
