### Roster Details<br />
Team Name: Sangal<br />
Roster: jottAAA, LNZ, SaMey, xfl0ud, yxngstxr<br />
Global Rank: [25](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_06.md)<br />
Regional Rank: [18]( ../../standings_europe_2025_01_06.md)<br />
<br />
Final Rank Value:  1255.2<br />
<br />
Final Rank Value (1255.2) = Starting Rank Value (1219.3) + Head To Head Adjustments (35.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.555[<sup>1</sup>](#table2)
- Bounty Collected: 0.534[<sup>2</sup>](#table1)
- Opponent Network: 0.197[<sup>2</sup>](#table1)
- LAN Wins: 0.371[<sup>2</sup>](#table1)

The average of these factors is 0.414<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1219.3
- 400 + ( ( 0.414 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 1219.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      672 | 2024-11-18 | ECLOT         | L   | 0.876      | -            | -                | -                | -         |   -16.89 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           39 |      684 | 2024-11-17 | Cloud9        | L   | 0.870      | -            | -                | -                | -         |   -19.55 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           38 |      697 | 2024-11-17 | MOUZ          | L   | 0.865      | -            | -                | -                | -         |    -1.73 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           37 |      705 | 2024-11-16 | Rebels        | W   | 0.864      | -            | -                | -                | 1 (0.864) |     2.50 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           36 |     1287 | 2024-10-20 | Nemiga        | W   | 0.680      | 0.500        | 0.491 (0.167)    | 0.605 (0.206)    | 0 (0.000) |    10.54 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           35 |     1316 | 2024-10-19 | UNPAID        | L   | 0.673      | -            | -                | -                | -         |   -17.25 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           34 |     1363 | 2024-10-17 | Nemiga        | W   | 0.661      | 0.500        | 0.491 (0.162)    | 0.605 (0.200)    | 0 (0.000) |     9.34 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           33 |     1374 | 2024-10-17 | Fluxo         | W   | 0.659      | 0.624        | 0.125 (0.051)    | 0.562 (0.231)    | 1 (0.659) |     6.93 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           32 |     1395 | 2024-10-16 | SAW           | W   | 0.654      | 0.500        | 0.262 (0.086)    | 0.479 (0.157)    | 0 (0.000) |    13.35 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           31 |     1403 | 2024-10-16 | Nemiga        | W   | 0.653      | 0.624        | 0.491 (0.200)    | 0.605 (0.247)    | 1 (0.653) |     9.87 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           30 |     1424 | 2024-10-15 | Sashi         | W   | 0.647      | 0.500        | 0.046 (0.015)    | 0.637 (0.206)    | 0 (0.000) |     4.41 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           29 |     1923 | 2024-09-27 | BetBoom       | L   | 0.528      | -            | -                | -                | -         |   -11.65 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           28 |     1985 | 2024-09-26 | Passion UA    | W   | 0.519      | 0.435        | 0.115 (0.026)    | 0.885 (0.200)    | -         |     5.07 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           27 |     2544 | 2024-09-08 | HEROIC        | L   | 0.400      | -            | -                | -                | -         |    -0.91 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           26 |     2583 | 2024-09-07 | FlyQuest      | W   | 0.392      | 0.889        | 0.173 (0.061)    | 0.445 (0.155)    | 1 (0.392) |     7.04 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           25 |     2605 | 2024-09-06 | FaZe          | L   | 0.387      | -            | -                | -                | -         |    -0.36 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           24 |     2626 | 2024-09-05 | HEROIC        | W   | 0.381      | 0.889        | 0.822 (0.278)    | 0.603 (0.204)    | 1 (0.381) |    11.24 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           23 |     2679 | 2024-09-04 | Eternal Fire  | L   | 0.373      | -            | -                | -                | -         |    -3.02 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           22 |     2710 | 2024-09-03 | FaZe          | W   | 0.367      | 0.889        | 0.920 (0.300)    | 0.498 (0.162)    | 1 (0.367) |    11.26 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           21 |     3144 | 2024-08-22 | UNPAID        | W   | 0.286      | -            | -                | -                | -         |     2.24 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           20 |     3194 | 2024-08-21 | BC.Game       | W   | 0.280      | -            | -                | -                | -         |     1.15 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           19 |     3230 | 2024-08-21 | 1WIN          | W   | 0.278      | -            | -                | -                | -         |     0.41 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           18 |     3384 | 2024-08-15 | Nemiga        | L   | 0.240      | -            | -                | -                | -         |    -3.17 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           17 |     3476 | 2024-08-12 | Zero Tenacity | W   | 0.221      | -            | -                | -                | -         |     1.83 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           16 |     3626 | 2024-08-07 | Rebels        | W   | 0.187      | -            | -                | -                | -         |     0.56 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           15 |     3670 | 2024-08-06 | PARIVISION    | W   | 0.180      | -            | -                | -                | -         |     0.79 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           14 |     3677 | 2024-08-06 | los kogutos   | W   | 0.180      | -            | -                | -                | -         |     2.71 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           13 |     3714 | 2024-08-05 | 1WIN          | W   | 0.172      | -            | -                | -                | -         |     0.24 | Chill, LNZ, SaMey, xfl0ud, yxngstxr     |
|           12 |     3774 | 2024-08-03 | Passion UA    | W   | 0.160      | -            | -                | -                | -         |     2.42 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           11 |     3940 | 2024-07-30 | SINNERS       | W   | 0.133      | -            | -                | -                | -         |     1.46 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           10 |     3998 | 2024-07-28 | fnatic        | W   | 0.121      | -            | -                | -                | -         |     1.61 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            9 |     4014 | 2024-07-28 | Monte         | W   | 0.119      | -            | -                | -                | -         |     0.94 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            8 |     4035 | 2024-07-27 | B8            | W   | 0.112      | -            | -                | -                | -         |     1.41 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            7 |     4051 | 2024-07-26 | los kogutos   | W   | 0.107      | -            | -                | -                | -         |     1.66 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            6 |     4165 | 2024-07-23 | Apogee        | W   | 0.087      | -            | -                | -                | -         |     0.20 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            5 |     4266 | 2024-07-20 | fnatic        | L   | 0.065      | -            | -                | -                | -         |    -1.19 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            4 |     4394 | 2024-07-17 | SAW           | L   | 0.048      | -            | -                | -                | -         |    -0.45 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            3 |     4406 | 2024-07-17 | B8            | W   | 0.047      | -            | -                | -                | -         |     0.60 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            2 |     4503 | 2024-07-15 | RUSH B        | W   | 0.034      | -            | -                | -                | -         |     0.14 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            1 |     4522 | 2024-07-15 | Rebels        | W   | 0.032      | -            | -                | -                | -         |     0.10 | imoRR, jottAAA, SaMey, xfl0ud, yxngstxr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($42,051.12)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.680 | $17,000.00     | $11,559.17      |
| 2024-10-19 |      0.675 | $25,000.00     | $16,864.76      |
| 2024-09-28 |      0.534 | $2,000.00      | $1,068.04       |
| 2024-09-22 |      0.494 | $12,000.00     | $5,933.14       |
| 2024-08-06 |      0.180 | $22,000.00     | $3,969.84       |
| 2024-07-28 |      0.121 | $22,000.00     | $2,656.17       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
