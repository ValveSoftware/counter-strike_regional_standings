### Roster Details<br />
Team Name: ENCE<br />
Roster: F1KU, kRaSnaL, Neityu, podi, sdy<br />
Global Rank: [85](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [60]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  1162.6<br />
<br />
Final Rank Value (1162.6) = Starting Rank Value (1076.5) + Head To Head Adjustments (86.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.357[<sup>1</sup>](#table2)
- Bounty Collected: 0.324[<sup>2</sup>](#table1)
- Opponent Network: 0.150[<sup>2</sup>](#table1)
- LAN Wins: 0.553[<sup>2</sup>](#table1)

The average of these factors is 0.346<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1076.5
- 400 + ( ( 0.346 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1076.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |     1588 | 2026-03-05 | fnatic          | L   | 0.987      | -            | -                | -                | -         |   -12.59 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           38 |     1867 | 2026-02-27 | Eternal Fire    | L   | 0.947      | -            | -                | -                | -         |   -12.30 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           37 |     1914 | 2026-02-26 | ASTRAL          | W   | 0.941      | 0.354        | -                | 0.533 (0.178)    | 1 (0.941) |     7.22 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           36 |     1922 | 2026-02-26 | BESTIA          | W   | 0.940      | 0.354        | 0.031 (0.010)    | 0.817 (0.272)    | 1 (0.940) |    20.97 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           35 |     1935 | 2026-02-26 | CYBERSHOKE      | L   | 0.940      | -            | -                | -                | -         |   -11.78 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           34 |     1982 | 2026-02-25 | 100 Thieves     | W   | 0.934      | 0.354        | 0.008 (0.003)    | 0.531 (0.176)    | 1 (0.934) |    21.17 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           33 |     2627 | 2026-02-13 | illwill         | L   | 0.853      | -            | -                | -                | -         |    -5.64 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           32 |     2639 | 2026-02-13 | Tricked         | W   | 0.852      | 0.333        | 0.027 (0.008)    | 0.474 (0.135)    | 1 (0.852) |    19.60 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           31 |     2644 | 2026-02-13 | illwill         | L   | 0.852      | -            | -                | -                | -         |    -5.21 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           30 |     2696 | 2026-02-11 | fnatic          | L   | 0.842      | -            | -                | -                | -         |    -9.99 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           29 |     2707 | 2026-02-11 | Alliance        | W   | 0.841      | 0.143        | 0.101 (0.012)    | 0.964 (0.116)    | -         |    22.75 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           28 |     2716 | 2026-02-11 | EYEBALLERS      | W   | 0.840      | 0.143        | 0.097 (0.012)    | 0.599 (0.072)    | -         |    21.68 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           27 |     2751 | 2026-02-10 | BetBoom         | L   | 0.834      | -            | -                | -                | -         |    -3.02 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           26 |     2756 | 2026-02-10 | CYBERSHOKE      | W   | 0.833      | 0.143        | 0.031 (0.004)    | -                | -         |    18.46 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           25 |     2919 | 2026-02-04 | ex-RUBY         | L   | 0.793      | -            | -                | -                | -         |   -12.47 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           24 |     3102 | 2026-01-29 | Nemiga          | L   | 0.754      | -            | -                | -                | -         |    -3.80 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           23 |     3131 | 2026-01-28 | ex-RUBY         | W   | 0.746      | 0.435        | 0.064 (0.021)    | 1.000 (0.324)    | -         |    11.53 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           22 |     3462 | 2026-01-17 | Nuclear TigeRES | L   | 0.675      | -            | -                | -                | -         |    -4.21 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           21 |     3478 | 2026-01-17 | eLITenergy      | W   | 0.674      | -            | -                | -                | -         |     2.33 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           20 |     3552 | 2026-01-16 | PARIVISION      | L   | 0.666      | -            | -                | -                | -         |    -0.34 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           19 |     3835 | 2025-12-19 | Lazer Cats      | L   | 0.480      | -            | -                | -                | -         |    -9.21 | myltsi, Neityu, podi, rigoN, sdy |
|           18 |     3839 | 2025-12-19 | ESC             | L   | 0.479      | -            | -                | -                | -         |    -6.97 | myltsi, Neityu, podi, rigoN, sdy |
|           17 |     3857 | 2025-12-18 | The Huns        | W   | 0.472      | 0.339        | -                | 0.487 (0.078)    | 1 (0.472) |     9.42 | myltsi, Neityu, podi, rigoN, sdy |
|           16 |     4361 | 2025-11-22 | FUT             | L   | 0.301      | -            | -                | -                | -         |    -0.79 | myltsi, Neityu, podi, rigoN, sdy |
|           15 |     4373 | 2025-11-22 | Nexus           | W   | 0.300      | -            | -                | -                | 1 (0.300) |     4.51 | myltsi, Neityu, podi, rigoN, sdy |
|           14 |     4384 | 2025-11-22 | illwill         | W   | 0.299      | 0.339        | 0.057 (0.006)    | 0.835 (0.085)    | 1 (0.299) |     7.96 | myltsi, Neityu, podi, rigoN, sdy |
|           13 |     4400 | 2025-11-21 | AM              | W   | 0.294      | -            | -                | -                | 1 (0.294) |     1.67 | myltsi, Neityu, podi, rigoN, sdy |
|           12 |     4413 | 2025-11-21 | STATE           | W   | 0.293      | -            | -                | -                | 1 (0.293) |     4.04 | myltsi, Neityu, podi, rigoN, sdy |
|           11 |     4432 | 2025-11-21 | Nexus           | L   | 0.291      | -            | -                | -                | -         |    -4.72 | myltsi, Neityu, podi, rigoN, sdy |
|           10 |     4779 | 2025-11-08 | EYEBALLERS      | L   | 0.205      | -            | -                | -                | -         |    -1.03 | myltsi, Neityu, podi, rigoN, sdy |
|            9 |     4796 | 2025-11-07 | Johnny Speeds   | W   | 0.201      | 0.335        | 0.067 (0.005)    | -                | 1 (0.201) |     5.25 | myltsi, Neityu, podi, rigoN, sdy |
|            8 |     4807 | 2025-11-07 | EYEBALLERS      | L   | 0.200      | -            | -                | -                | -         |    -0.99 | myltsi, Neityu, podi, rigoN, sdy |
|            7 |     4823 | 2025-11-07 | MOUZ NXT        | W   | 0.200      | 0.335        | -                | 1.000 (0.067)    | -         |     4.76 | myltsi, Neityu, podi, rigoN, sdy |
|            6 |     4845 | 2025-11-07 | MASONIC         | W   | 0.200      | -            | -                | -                | -         |     3.78 | myltsi, Neityu, podi, rigoN, sdy |
|            5 |     4853 | 2025-11-07 | ex-FUT Academy  | W   | 0.199      | -            | -                | -                | -         |     0.40 | myltsi, Neityu, podi, rigoN, sdy |
|            4 |     4872 | 2025-11-07 | Falcons Force   | W   | 0.199      | -            | -                | -                | -         |     1.37 | myltsi, Neityu, podi, rigoN, sdy |
|            3 |     5468 | 2025-10-19 | Nemiga          | L   | 0.074      | -            | -                | -                | -         |    -0.22 | myltsi, Neityu, podi, rigoN, sdy |
|            2 |     5469 | 2025-10-19 | 1win            | W   | 0.074      | 0.384        | 0.098 (0.003)    | -                | -         |     2.10 | myltsi, Neityu, podi, rigoN, sdy |
|            1 |     5482 | 2025-10-18 | Hashiras        | W   | 0.068      | -            | -                | -                | -         |     0.44 | myltsi, Neityu, podi, rigoN, sdy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,237.69)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-30 |      0.761 | $2,000.00      | $1,522.66       |
| 2026-01-18 |      0.681 | $7,500.00      | $5,111.06       |
| 2025-11-23 |      0.308 | $1,116.00      | $343.52         |
| 2025-10-19 |      0.074 | $3,500.00      | $260.45         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
