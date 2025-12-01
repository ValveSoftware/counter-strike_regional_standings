### Roster Details<br />
Team Name: KHAN<br />
Roster: dosikk, dune, lom1k, tEO, tsukumeow<br />
Global Rank: [128](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [88]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  824.4<br />
<br />
Final Rank Value (824.4) = Starting Rank Value (787.7) + Head To Head Adjustments (36.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.347[<sup>2</sup>](#table1)
- Opponent Network: 0.210[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.204<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 787.7
- 400 + ( ( 0.204 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 787.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           57 |     1865 | 2025-10-02 | Nexus            | L   | 0.800      | -            | -                | -                | -         |    -5.03 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           56 |     1882 | 2025-10-02 | UNiTY            | L   | 0.798      | -            | -                | -                | -         |   -12.28 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           55 |     1928 | 2025-09-30 | ComeBack         | L   | 0.787      | -            | -                | -                | -         |   -16.94 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           54 |     1943 | 2025-09-30 | Mousquetaires    | W   | 0.786      | 0.303        | 0.026 (0.006)    | 0.427 (0.102)    | 0 (0.000) |    13.39 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           53 |     1983 | 2025-09-29 | BetBoom          | L   | 0.779      | -            | -                | -                | -         |    -0.65 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           52 |     2022 | 2025-09-28 | GUN5             | L   | 0.773      | -            | -                | -                | -         |    -3.34 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           51 |     2063 | 2025-09-27 | QMISTRY          | L   | 0.767      | -            | -                | -                | -         |   -18.84 | ddoni, dosikk, dune, tEO, tsukumeow          |
|           50 |     2082 | 2025-09-27 | RUBY             | W   | 0.766      | 0.435        | 0.049 (0.016)    | 1.000 (0.333)    | 0 (0.000) |    18.15 | ddoni, dosikk, dune, tEO, tsukumeow          |
|           49 |     2122 | 2025-09-26 | AMKAL            | L   | 0.760      | -            | -                | -                | -         |   -10.83 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           48 |     2175 | 2025-09-25 | Johnny Speeds    | W   | 0.753      | 0.435        | 0.011 (0.004)    | 0.799 (0.261)    | 0 (0.000) |    20.71 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           47 |     2212 | 2025-09-24 | FAVBET           | W   | 0.746      | 0.435        | 0.043 (0.014)    | 0.794 (0.257)    | 0 (0.000) |    16.89 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           46 |     2247 | 2025-09-22 | 500              | L   | 0.732      | -            | -                | -                | -         |    -6.28 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           45 |     2267 | 2025-09-21 | Partizan         | L   | 0.726      | -            | -                | -                | -         |    -5.33 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           44 |     2333 | 2025-09-19 | SINNERS          | W   | 0.712      | 0.435        | 0.171 (0.053)    | 1.000 (0.310)    | 0 (0.000) |    20.30 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           43 |     2366 | 2025-09-18 | Mousquetaires    | W   | 0.706      | 0.384        | 0.026 (0.007)    | 0.427 (0.116)    | 0 (0.000) |    13.53 | ddoni, dune, lom1k, tEO, tsukumeow           |
|           42 |     2390 | 2025-09-17 | EYEBALLERS       | W   | 0.701      | 0.384        | 0.068 (0.018)    | 1.000 (0.269)    | 0 (0.000) |    21.11 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           41 |     2405 | 2025-09-17 | UNiTY            | W   | 0.699      | 0.384        | 0.010 (0.003)    | 0.433 (0.116)    | 0 (0.000) |    14.36 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           40 |     2420 | 2025-09-16 | MINLATE          | W   | 0.694      | -            | -                | -                | 0 (0.000) |    11.16 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           39 |     2425 | 2025-09-16 | m1x              | L   | 0.693      | -            | -                | -                | -         |   -14.52 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           38 |     2449 | 2025-09-15 | Wildcard Academy | W   | 0.686      | -            | -                | -                | 0 (0.000) |     4.45 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           37 |     2475 | 2025-09-14 | EYEBALLERS       | L   | 0.681      | -            | -                | -                | -         |    -0.72 | ddoni, dune, lom1k, tEO, tsukumeow           |
|           36 |     2859 | 2025-09-06 | NIP Impact       | L   | 0.624      | -            | -                | -                | -         |    -8.89 | ddoni, dune, lom1k, tEO, tsukumeow           |
|           35 |     2875 | 2025-09-05 | ARCRED           | L   | 0.618      | -            | -                | -                | -         |    -7.39 | ddoni, dosikk, dune, lom1k, tsukumeow        |
|           34 |     2900 | 2025-09-03 | The Glecs        | L   | 0.605      | -            | -                | -                | -         |   -13.72 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           33 |     2997 | 2025-08-29 | Eternal Fire     | L   | 0.572      | -            | -                | -                | -         |    -7.68 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           32 |     3004 | 2025-08-29 | TPuDCATb TPu     | L   | 0.571      | -            | -                | -                | -         |    -4.47 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           31 |     3060 | 2025-08-27 | CYBERSHOKE       | L   | 0.559      | -            | -                | -                | -         |    -2.49 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           30 |     3099 | 2025-08-25 | The Glecs        | W   | 0.545      | -            | -                | -                | -         |     4.25 | dune, lom1k, m1te, tEO, tsukumeow            |
|           29 |     3109 | 2025-08-24 | SENZA            | W   | 0.540      | -            | -                | -                | -         |     7.15 | ddoni, dosikk, lom1k, tEO, tsukumeow         |
|           28 |     3169 | 2025-08-21 | RUBY             | L   | 0.518      | -            | -                | -                | -         |    -4.42 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           27 |     3225 | 2025-08-18 | Oramond          | L   | 0.499      | -            | -                | -                | -         |    -3.89 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           26 |     3253 | 2025-08-17 | CPH Wolves       | W   | 0.494      | 0.384        | -                | 0.772 (0.147)    | -         |     9.24 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           25 |     3308 | 2025-08-16 | 1win             | W   | 0.484      | 0.384        | 0.025 (0.005)    | 1.000 (0.186)    | -         |    10.13 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           24 |     3349 | 2025-08-15 | CPH Wolves       | L   | 0.479      | -            | -                | -                | -         |    -5.85 | dosikk, dune, lom1k, tEO, tsukumeow          |
|           23 |     4113 | 2025-07-12 | PARIVISION       | L   | 0.252      | -            | -                | -                | -         |    -0.37 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           22 |     4154 | 2025-07-11 | 9INE             | W   | 0.244      | 0.486        | 0.049 (0.006)    | -                | -         |     7.29 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           21 |     4216 | 2025-07-08 | UNiTY            | W   | 0.226      | -            | -                | -                | -         |     0.73 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           20 |     4224 | 2025-07-07 | AaB              | W   | 0.220      | -            | -                | -                | -         |     1.11 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           19 |     4236 | 2025-07-06 | ALGO             | W   | 0.211      | -            | -                | -                | -         |     1.47 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           18 |     4249 | 2025-07-03 | TPuDCATb TPu     | L   | 0.193      | -            | -                | -                | -         |    -1.21 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           17 |     4257 | 2025-07-02 | MANA             | L   | 0.186      | -            | -                | -                | -         |    -4.65 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           16 |     4266 | 2025-07-01 | Anonymo          | W   | 0.179      | -            | -                | -                | -         |     1.04 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           15 |     4303 | 2025-06-25 | FORZE Reload     | L   | 0.139      | -            | -                | -                | -         |    -3.04 | ddoni, dosikk, dune, emokidead, tsukumeow    |
|           14 |     4369 | 2025-06-19 | FUT              | L   | 0.100      | -            | -                | -                | -         |    -0.04 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           13 |     4387 | 2025-06-18 | Nexus            | W   | 0.093      | -            | -                | -                | -         |     2.56 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           12 |     4389 | 2025-06-18 | ENCE Academy     | L   | 0.092      | -            | -                | -                | -         |    -1.15 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           11 |     4408 | 2025-06-17 | 9INE             | L   | 0.084      | -            | -                | -                | -         |    -0.14 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           10 |     4424 | 2025-06-16 | RUBY             | W   | 0.079      | -            | -                | -                | -         |     1.90 | ddoni, dosikk, dune, m1te, tsukumeow         |
|            9 |     4441 | 2025-06-15 | Fire Flux        | W   | 0.073      | -            | -                | -                | -         |     1.26 | ddoni, dosikk, dune, m1te, tsukumeow         |
|            8 |     4442 | 2025-06-15 | ComeBack         | W   | 0.073      | -            | -                | -                | -         |     0.80 | ddoni, dosikk, dune, m1te, tsukumeow         |
|            7 |     4479 | 2025-06-14 | CYBERSHOKE       | L   | 0.066      | -            | -                | -                | -         |    -0.24 | ddoni, dosikk, dune, m1te, tsukumeow         |
|            6 |     4489 | 2025-06-14 | Fisher College   | W   | 0.065      | -            | -                | -                | -         |     0.36 | ddoni, dosikk, dune, m1te, tsukumeow         |
|            5 |     4492 | 2025-06-14 | Roler Coaster    | L   | 0.064      | -            | -                | -                | -         |    -1.69 | ddoni, dosikk, dune, m1te, tsukumeow         |
|            4 |     4549 | 2025-06-12 | The Glecs        | L   | 0.052      | -            | -                | -                | -         |    -1.23 | dosikk, dune, kaziken, m1te, tsukumeow       |
|            3 |     4558 | 2025-06-11 | NOVAQ            | L   | 0.047      | -            | -                | -                | -         |    -0.43 | dosikk, dune, kaziken, m1te, tsukumeow       |
|            2 |     4581 | 2025-06-10 | GUN5             | W   | 0.038      | -            | -                | -                | -         |     1.09 | dosikk, dune, kaziken, m1te, tsukumeow       |
|            1 |     4610 | 2025-06-08 | PARIVISION       | L   | 0.026      | -            | -                | -                | -         |    -0.04 | dosikk, dune, kaziken, mixmeister, tsukumeow |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($764.70)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-13 |      0.261 | $2,930.00      | $764.70         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
