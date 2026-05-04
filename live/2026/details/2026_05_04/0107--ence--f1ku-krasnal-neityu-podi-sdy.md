### Roster Details<br />
Team Name: ENCE<br />
Roster: F1KU, kRaSnaL, Neityu, podi, sdy<br />
Global Rank: [107](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [73]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  1015.4<br />
<br />
Final Rank Value (1015.4) = Starting Rank Value (938.0) + Head To Head Adjustments (77.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.336[<sup>1</sup>](#table2)
- Bounty Collected: 0.317[<sup>2</sup>](#table1)
- Opponent Network: 0.136[<sup>2</sup>](#table1)
- LAN Wins: 0.370[<sup>2</sup>](#table1)

The average of these factors is 0.290<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 938.0
- 400 + ( ( 0.290 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 938.0


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
|           37 |      731 | 2026-04-08 | ASTRAL          | L   | 1.000      | -            | -                | -                | -         |   -15.92 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           36 |     2684 | 2026-03-05 | fnatic          | L   | 0.800      | -            | -                | -                | -         |    -8.91 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           35 |     2963 | 2026-02-27 | Eternal Fire    | L   | 0.760      | -            | -                | -                | -         |    -6.59 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           34 |     3010 | 2026-02-26 | ASTRAL          | W   | 0.754      | 0.354        | 0.012 (0.003)    | 0.777 (0.208)    | 1 (0.754) |    11.33 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           33 |     3018 | 2026-02-26 | BESTIA          | W   | 0.753      | 0.354        | 0.021 (0.006)    | 0.757 (0.202)    | 1 (0.753) |    19.63 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           32 |     3031 | 2026-02-26 | CYBERSHOKE      | L   | 0.753      | -            | -                | -                | -         |    -6.84 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           31 |     3078 | 2026-02-25 | 100 Thieves     | W   | 0.747      | 0.354        | 0.013 (0.003)    | 0.558 (0.147)    | 1 (0.747) |    18.21 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           30 |     3724 | 2026-02-13 | illwill         | L   | 0.666      | -            | -                | -                | -         |    -3.88 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           29 |     3736 | 2026-02-13 | Tricked         | W   | 0.665      | 0.333        | 0.027 (0.006)    | 0.545 (0.121)    | 1 (0.665) |    17.42 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           28 |     3741 | 2026-02-13 | illwill         | L   | 0.665      | -            | -                | -                | -         |    -3.61 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           27 |     3793 | 2026-02-11 | fnatic          | L   | 0.655      | -            | -                | -                | -         |    -6.57 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           26 |     3804 | 2026-02-11 | Alliance        | W   | 0.654      | 0.143        | 0.082 (0.008)    | 0.964 (0.090)    | -         |    18.59 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           25 |     3813 | 2026-02-11 | EYEBALLERS      | W   | 0.653      | 0.143        | 0.199 (0.019)    | 0.667 (0.062)    | -         |    19.45 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           24 |     3848 | 2026-02-10 | BetBoom         | L   | 0.647      | -            | -                | -                | -         |    -1.38 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           23 |     3853 | 2026-02-10 | CYBERSHOKE      | W   | 0.646      | 0.143        | 0.026 (0.002)    | 0.528 (0.049)    | -         |    16.11 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           22 |     4016 | 2026-02-04 | ex-RUBY         | L   | 0.606      | -            | -                | -                | -         |    -8.03 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           21 |     4199 | 2026-01-29 | Nemiga          | L   | 0.567      | -            | -                | -                | -         |    -1.79 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           20 |     4228 | 2026-01-28 | ex-RUBY         | W   | 0.559      | 0.435        | 0.052 (0.013)    | 0.995 (0.242)    | -         |    10.26 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           19 |     4559 | 2026-01-17 | Nuclear TigeRES | L   | 0.488      | -            | -                | -                | -         |    -2.19 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           18 |     4575 | 2026-01-17 | INOX Division   | W   | 0.487      | 0.624        | 0.030 (0.009)    | 0.622 (0.189)    | -         |     5.89 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           17 |     4649 | 2026-01-16 | PARIVISION      | L   | 0.479      | -            | -                | -                | -         |    -0.13 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           16 |     4932 | 2025-12-19 | Lazer Cats      | L   | 0.293      | -            | -                | -                | -         |    -4.75 | myltsi, Neityu, podi, rigoN, sdy |
|           15 |     4936 | 2025-12-19 | Walczaki        | L   | 0.292      | -            | -                | -                | -         |    -2.40 | myltsi, Neityu, podi, rigoN, sdy |
|           14 |     4954 | 2025-12-18 | The Huns        | W   | 0.285      | 0.339        | -                | 0.534 (0.052)    | 1 (0.285) |     6.82 | myltsi, Neityu, podi, rigoN, sdy |
|           13 |     5458 | 2025-11-22 | FUT             | L   | 0.114      | -            | -                | -                | -         |    -0.02 | myltsi, Neityu, podi, rigoN, sdy |
|           12 |     5470 | 2025-11-22 | Nexus           | W   | 0.113      | -            | -                | -                | 1 (0.113) |     1.79 | myltsi, Neityu, podi, rigoN, sdy |
|           11 |     5481 | 2025-11-22 | illwill         | W   | 0.112      | 0.339        | 0.038 (0.001)    | -                | 1 (0.112) |     2.24 | myltsi, Neityu, podi, rigoN, sdy |
|           10 |     5497 | 2025-11-21 | AM              | W   | 0.108      | -            | -                | -                | 1 (0.108) |     0.57 | myltsi, Neityu, podi, rigoN, sdy |
|            9 |     5510 | 2025-11-21 | STATE           | W   | 0.106      | -            | -                | -                | 1 (0.106) |     2.57 | myltsi, Neityu, podi, rigoN, sdy |
|            8 |     5529 | 2025-11-21 | Nexus           | L   | 0.104      | -            | -                | -                | -         |    -1.63 | myltsi, Neityu, podi, rigoN, sdy |
|            7 |     5876 | 2025-11-08 | EYEBALLERS      | L   | 0.018      | -            | -                | -                | -         |    -0.02 | myltsi, Neityu, podi, rigoN, sdy |
|            6 |     5893 | 2025-11-07 | Johnny Speeds   | W   | 0.014      | -            | -                | -                | 1 (0.014) |     0.42 | myltsi, Neityu, podi, rigoN, sdy |
|            5 |     5904 | 2025-11-07 | EYEBALLERS      | L   | 0.013      | -            | -                | -                | -         |    -0.01 | myltsi, Neityu, podi, rigoN, sdy |
|            4 |     5920 | 2025-11-07 | MOUZ NXT        | W   | 0.013      | -            | -                | -                | -         |     0.32 | myltsi, Neityu, podi, rigoN, sdy |
|            3 |     5942 | 2025-11-07 | MASONIC         | W   | 0.013      | -            | -                | -                | -         |     0.30 | myltsi, Neityu, podi, rigoN, sdy |
|            2 |     5950 | 2025-11-07 | ex-FUT Academy  | W   | 0.012      | -            | -                | -                | -         |     0.04 | myltsi, Neityu, podi, rigoN, sdy |
|            1 |     5969 | 2025-11-07 | Falcons Force   | W   | 0.012      | -            | -                | -                | -         |     0.14 | myltsi, Neityu, podi, rigoN, sdy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,992.17)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-30 |      0.574 | $2,000.00      | $1,148.68       |
| 2026-01-18 |      0.494 | $7,500.00      | $3,708.65       |
| 2025-11-23 |      0.121 | $1,116.00      | $134.84         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
