### Roster Details<br />
Team Name: Bounty Hunters<br />
Roster: fREQ, KAISER, ninjaZ, piriajr, zock<br />
Global Rank: [84](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [21]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  1006.4<br />
<br />
Final Rank Value (1006.4) = Starting Rank Value (907.2) + Head To Head Adjustments (99.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.354[<sup>1</sup>](#table2)
- Bounty Collected: 0.331[<sup>2</sup>](#table1)
- Opponent Network: 0.201[<sup>2</sup>](#table1)
- LAN Wins: 0.179[<sup>2</sup>](#table1)

The average of these factors is 0.266<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 907.2
- 400 + ( ( 0.266 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 907.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           74 |      310 | 2025-11-15 | Keyd Stars        | L   | 1.000      | -            | -                | -                | -         |   -13.39 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           73 |      330 | 2025-11-14 | 9z                | L   | 1.000      | -            | -                | -                | -         |    -8.30 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           72 |      337 | 2025-11-14 | BESTIA            | L   | 1.000      | -            | -                | -                | -         |   -10.87 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           71 |      366 | 2025-11-13 | ShindeN           | W   | 1.000      | 0.371        | 0.007 (0.003)    | 0.551 (0.204)    | 0 (0.000) |    12.33 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           70 |      379 | 2025-11-12 | BESTIA            | W   | 1.000      | 0.363        | 0.077 (0.028)    | 0.527 (0.191)    | 0 (0.000) |    21.39 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           69 |      409 | 2025-11-11 | ShindeN           | W   | 1.000      | 0.363        | -                | 0.551 (0.200)    | 0 (0.000) |    14.40 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           68 |      436 | 2025-11-10 | Galorys           | W   | 1.000      | 0.363        | -                | 0.625 (0.227)    | 0 (0.000) |    16.59 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           67 |      503 | 2025-11-08 | Galorys           | W   | 1.000      | 0.371        | -                | 0.625 (0.232)    | 0 (0.000) |    16.90 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           66 |      560 | 2025-11-07 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |   -11.24 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           65 |      647 | 2025-11-06 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -5.63 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           64 |      649 | 2025-11-06 | Gaimin Gladiators | W   | 1.000      | 0.333        | 0.019 (0.006)    | 0.615 (0.205)    | 1 (1.000) |    20.39 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           63 |      681 | 2025-11-05 | Procyon           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.49 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           62 |      736 | 2025-11-03 | MAGICOS           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.92 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           61 |      921 | 2025-10-27 | Keyd Stars        | W   | 0.968      | 0.363        | 0.021 (0.007)    | 0.605 (0.213)    | 0 (0.000) |    20.84 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           60 |      968 | 2025-10-26 | Fuego             | W   | 0.962      | -            | -                | -                | -         |     6.33 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           59 |      992 | 2025-10-26 | BESTIA            | W   | 0.960      | 0.350        | 0.077 (0.026)    | 0.527 (0.177)    | -         |    24.99 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           58 |     1029 | 2025-10-25 | Vasco             | W   | 0.954      | -            | -                | -                | -         |     4.93 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           57 |     1034 | 2025-10-25 | Dusty Roots       | W   | 0.954      | 0.350        | 0.012 (0.004)    | 0.487 (0.163)    | -         |    18.80 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           56 |     1081 | 2025-10-24 | Gaimin Gladiators | L   | 0.948      | -            | -                | -                | -         |    -6.06 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           55 |     1102 | 2025-10-24 | BESTIA            | L   | 0.947      | -            | -                | -                | -         |    -4.16 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           54 |     1142 | 2025-10-23 | MAGICOS           | W   | 0.941      | -            | -                | -                | -         |     1.92 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           53 |     1240 | 2025-10-18 | Sharks            | L   | 0.908      | -            | -                | -                | -         |    -3.35 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           52 |     1248 | 2025-10-18 | Keyd Stars        | W   | 0.907      | 0.371        | 0.021 (0.007)    | 0.605 (0.203)    | -         |    22.05 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           51 |     1278 | 2025-10-17 | Dusty Roots       | W   | 0.899      | 0.371        | 0.012 (0.004)    | -                | -         |    19.78 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           50 |     1310 | 2025-10-16 | RED Canids        | W   | 0.893      | 0.371        | 0.021 (0.007)    | -                | -         |    24.86 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           49 |     1377 | 2025-10-14 | Vasco             | W   | 0.880      | -            | -                | -                | -         |     7.06 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           48 |     1406 | 2025-10-13 | Players           | L   | 0.873      | -            | -                | -                | -         |   -19.06 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           47 |     1452 | 2025-10-10 | MAGICOS           | W   | 0.855      | -            | -                | -                | -         |     3.24 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           46 |     1546 | 2025-10-08 | VEXA              | W   | 0.842      | -            | -                | -                | -         |     2.27 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           45 |     1606 | 2025-10-07 | FOLHA AMARELA     | L   | 0.834      | -            | -                | -                | -         |   -18.52 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           44 |     1609 | 2025-10-07 | KRÜ               | L   | 0.834      | -            | -                | -                | -         |   -15.50 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           43 |     1725 | 2025-10-05 | Vasco             | L   | 0.821      | -            | -                | -                | -         |   -21.00 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           42 |     1786 | 2025-10-04 | ECSTATIC          | L   | 0.814      | -            | -                | -                | -         |    -1.58 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           41 |     2000 | 2025-09-28 | ODDIK             | L   | 0.776      | -            | -                | -                | -         |    -4.80 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           40 |     2001 | 2025-09-28 | GameHunters       | W   | 0.775      | -            | -                | -                | 1 (0.775) |     6.61 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           39 |     2046 | 2025-09-27 | BESTIA            | L   | 0.770      | -            | -                | -                | -         |    -4.00 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           38 |     2520 | 2025-09-13 | Sharks            | L   | 0.675      | -            | -                | -                | -         |    -2.34 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           37 |     2573 | 2025-09-12 | Fuego             | W   | 0.667      | -            | -                | -                | -         |     4.02 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           36 |     2612 | 2025-09-11 | Galorys           | L   | 0.662      | -            | -                | -                | -         |    -7.48 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           35 |     2622 | 2025-09-11 | ShindeN           | L   | 0.661      | -            | -                | -                | -         |    -8.02 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           34 |     2672 | 2025-09-10 | MAGICOS           | W   | 0.654      | -            | -                | -                | -         |     1.80 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           33 |     2720 | 2025-09-09 | ODDIK             | L   | 0.648      | -            | -                | -                | -         |    -4.11 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           32 |     2746 | 2025-09-09 | Four Magic        | W   | 0.646      | -            | -                | -                | -         |     2.56 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           31 |     2770 | 2025-09-08 | Crashers          | W   | 0.642      | -            | -                | -                | -         |     2.86 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           30 |     2816 | 2025-09-07 | LP                | L   | 0.633      | -            | -                | -                | -         |   -14.35 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           29 |     2866 | 2025-09-05 | MAGICOS           | W   | 0.620      | -            | -                | -                | -         |     1.61 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           28 |     3241 | 2025-08-17 | Sharks            | L   | 0.495      | -            | -                | -                | -         |    -1.55 | fREQ, KAISER, meyern, Tuurtle, zock  |
|           27 |     3329 | 2025-08-15 | Vasco             | W   | 0.481      | -            | -                | -                | -         |     2.15 | fREQ, KAISER, meyern, Tuurtle, zock  |
|           26 |     3369 | 2025-08-14 | Dusty Roots       | L   | 0.474      | -            | -                | -                | -         |    -5.74 | fREQ, KAISER, meyern, Tuurtle, zock  |
|           25 |     3418 | 2025-08-13 | Keyd Stars        | L   | 0.468      | -            | -                | -                | -         |    -3.83 | fREQ, KAISER, meyern, Tuurtle, zock  |
|           24 |     3469 | 2025-08-12 | Galorys           | L   | 0.462      | -            | -                | -                | -         |    -6.00 | fREQ, KAISER, piriajr, Tuurtle, zock |
|           23 |     3585 | 2025-08-10 | Gaimin Gladiators | W   | 0.446      | 0.371        | 0.019 (0.003)    | -                | -         |    10.21 | fREQ, KAISER, piriajr, Tuurtle, zock |
|           22 |     3678 | 2025-08-03 | 9z                | L   | 0.402      | -            | -                | -                | -         |    -1.63 | fREQ, KAISER, nyezin, Tuurtle, zock  |
|           21 |     3738 | 2025-07-31 | Players           | W   | 0.381      | -            | -                | -                | -         |     2.63 | fREQ, KAISER, nyezin, Tuurtle, zock  |
|           20 |     3754 | 2025-07-29 | Keyd Stars        | L   | 0.368      | -            | -                | -                | -         |    -2.89 | fREQ, KAISER, nyezin, Tuurtle, zock  |
|           19 |     3774 | 2025-07-28 | Gaimin Gladiators | L   | 0.361      | -            | -                | -                | -         |    -3.07 | fREQ, KAISER, nyezin, Tuurtle, zock  |
|           18 |     3801 | 2025-07-27 | paiN Academy      | W   | 0.354      | -            | -                | -                | -         |     1.11 | fREQ, KAISER, nyezin, Tuurtle, zock  |
|           17 |     3816 | 2025-07-27 | Fake do Biru      | W   | 0.353      | -            | -                | -                | -         |     5.82 | fREQ, KAISER, nyezin, Tuurtle, zock  |
|           16 |     3869 | 2025-07-24 | MAGICOS           | W   | 0.335      | -            | -                | -                | -         |     0.91 | fREQ, KAISER, nyezin, Tuurtle, zock  |
|           15 |     4008 | 2025-07-16 | 9z                | L   | 0.282      | -            | -                | -                | -         |    -1.11 | fREQ, KAISER, nyezin, Tuurtle, zock  |
|           14 |     4132 | 2025-07-11 | Keyd Stars        | L   | 0.248      | -            | -                | -                | -         |    -6.92 | fREQ, KAISER, meyern, Tuurtle, zock  |
|           13 |     4144 | 2025-07-11 | Imperial          | L   | 0.246      | -            | -                | -                | -         |    -0.47 | fREQ, KAISER, meyern, Tuurtle, zock  |
|           12 |     4163 | 2025-07-10 | 9z                | L   | 0.241      | -            | -                | -                | -         |    -1.00 | fREQ, KAISER, meyern, Tuurtle, zock  |
|           11 |     4221 | 2025-07-07 | ex-W7M            | L   | 0.221      | -            | -                | -                | -         |    -6.21 | fREQ, KAISER, meyern, Tuurtle, zock  |
|           10 |     4223 | 2025-07-07 | Keyd Stars        | W   | 0.220      | -            | -                | -                | -         |     5.18 | fREQ, KAISER, meyern, Tuurtle, zock  |
|            9 |     4264 | 2025-07-01 | Imperial          | L   | 0.180      | -            | -                | -                | -         |    -0.34 | fREQ, KAISER, meyern, Tuurtle, zock  |
|            8 |     4271 | 2025-06-30 | ex-W7M            | W   | 0.175      | -            | -                | -                | -         |     0.59 | fREQ, KAISER, meyern, Tuurtle, zock  |
|            7 |     4272 | 2025-06-30 | Galorys           | W   | 0.174      | -            | -                | -                | -         |     3.41 | fREQ, KAISER, meyern, Tuurtle, zock  |
|            6 |     4278 | 2025-06-29 | RED Canids        | L   | 0.168      | -            | -                | -                | -         |    -1.15 | fREQ, KAISER, meyern, Tuurtle, zock  |
|            5 |     4299 | 2025-06-25 | RED Canids        | L   | 0.142      | -            | -                | -                | -         |    -0.97 | fREQ, KAISER, meyern, Tuurtle, zock  |
|            4 |     4308 | 2025-06-24 | ODDIK             | W   | 0.134      | -            | -                | -                | -         |     3.36 | fREQ, KAISER, meyern, Tuurtle, zock  |
|            3 |     4340 | 2025-06-21 | ShindeN           | W   | 0.113      | -            | -                | -                | -         |     1.97 | fREQ, KAISER, meyern, Tuurtle, zock  |
|            2 |     4365 | 2025-06-19 | Fake do Biru      | L   | 0.102      | -            | -                | -                | -         |    -1.58 | fREQ, KAISER, meyern, Tuurtle, zock  |
|            1 |     4402 | 2025-06-17 | JERSA             | W   | 0.087      | -            | -                | -                | -         |     0.23 | fREQ, KAISER, meyern, Tuurtle, zock  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,628.81)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-16 |      1.000 | $2,134.00      | $2,134.00       |
| 2025-11-15 |      1.000 | $2,000.00      | $2,000.00       |
| 2025-11-15 |      1.000 | $750.00        | $750.00         |
| 2025-10-18 |      0.908 | $4,000.00      | $3,633.10       |
| 2025-06-26 |      0.149 | $750.00        | $111.71         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
