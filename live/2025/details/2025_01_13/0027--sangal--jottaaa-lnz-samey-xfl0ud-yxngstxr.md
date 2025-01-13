### Roster Details<br />
Team Name: Sangal<br />
Roster: jottAAA, LNZ, SaMey, xfl0ud, yxngstxr<br />
Global Rank: [27](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [19]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  1236.4<br />
<br />
Final Rank Value (1236.4) = Starting Rank Value (1201.9) + Head To Head Adjustments (34.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.555[<sup>1</sup>](#table2)
- Bounty Collected: 0.528[<sup>2</sup>](#table1)
- Opponent Network: 0.175[<sup>2</sup>](#table1)
- LAN Wins: 0.358[<sup>2</sup>](#table1)

The average of these factors is 0.404<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1201.9
- 400 + ( ( 0.404 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1201.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |      713 | 2024-11-18 | ECLOT         | L   | 0.830      | -            | -                | -                | -         |   -15.02 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           37 |      725 | 2024-11-17 | Cloud9        | L   | 0.824      | -            | -                | -                | -         |   -18.19 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           36 |      738 | 2024-11-17 | MOUZ          | L   | 0.819      | -            | -                | -                | -         |    -1.46 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           35 |      746 | 2024-11-16 | Rebels        | W   | 0.818      | -            | -                | -                | 1 (0.818) |     2.51 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           34 |     1328 | 2024-10-20 | Nemiga        | W   | 0.634      | 0.500        | 0.510 (0.161)    | 0.587 (0.186)    | 0 (0.000) |    10.34 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           33 |     1357 | 2024-10-19 | UNPAID        | L   | 0.627      | -            | -                | -                | -         |   -15.87 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           32 |     1404 | 2024-10-17 | Nemiga        | W   | 0.615      | 0.500        | 0.510 (0.157)    | 0.587 (0.180)    | 0 (0.000) |     9.30 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           31 |     1415 | 2024-10-17 | Fluxo         | W   | 0.613      | 0.624        | 0.131 (0.050)    | 0.549 (0.210)    | 1 (0.613) |     6.80 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           30 |     1436 | 2024-10-16 | SAW           | W   | 0.608      | 0.500        | 0.264 (0.080)    | 0.452 (0.137)    | 0 (0.000) |    12.47 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           29 |     1444 | 2024-10-16 | Nemiga        | W   | 0.607      | 0.624        | 0.510 (0.193)    | 0.587 (0.222)    | 1 (0.607) |     9.78 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           28 |     1465 | 2024-10-15 | Sashi         | W   | 0.601      | 0.500        | 0.045 (0.013)    | 0.622 (0.187)    | 0 (0.000) |     4.38 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           27 |     1964 | 2024-09-27 | BetBoom       | L   | 0.481      | -            | -                | -                | -         |   -10.32 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           26 |     2026 | 2024-09-26 | Passion UA    | W   | 0.473      | 0.435        | 0.114 (0.023)    | 0.844 (0.173)    | -         |     5.13 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           25 |     2585 | 2024-09-08 | HEROIC        | L   | 0.354      | -            | -                | -                | -         |    -0.66 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           24 |     2624 | 2024-09-07 | FlyQuest      | W   | 0.346      | 0.889        | 0.179 (0.055)    | 0.439 (0.135)    | 1 (0.346) |     6.58 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           23 |     2646 | 2024-09-06 | FaZe          | L   | 0.340      | -            | -                | -                | -         |    -0.25 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           22 |     2667 | 2024-09-05 | HEROIC        | W   | 0.335      | 0.889        | 0.873 (0.260)    | 0.599 (0.178)    | 1 (0.335) |     9.99 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           21 |     2720 | 2024-09-04 | Eternal Fire  | L   | 0.327      | -            | -                | -                | -         |    -2.75 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           20 |     2751 | 2024-09-03 | FaZe          | W   | 0.321      | 0.889        | 0.995 (0.284)    | 0.502 (0.143)    | 1 (0.321) |     9.89 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           19 |     3185 | 2024-08-22 | UNPAID        | W   | 0.239      | -            | -                | -                | -         |     1.92 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           18 |     3235 | 2024-08-21 | BC.Game       | W   | 0.233      | -            | -                | -                | -         |     1.03 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           17 |     3271 | 2024-08-21 | 1WIN          | W   | 0.232      | -            | -                | -                | -         |     0.35 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           16 |     3425 | 2024-08-15 | Nemiga        | L   | 0.194      | -            | -                | -                | -         |    -2.42 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           15 |     3517 | 2024-08-12 | Zero Tenacity | W   | 0.175      | -            | -                | -                | -         |     1.53 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           14 |     3667 | 2024-08-07 | Rebels        | W   | 0.140      | -            | -                | -                | -         |     0.45 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           13 |     3711 | 2024-08-06 | PARIVISION    | W   | 0.134      | -            | -                | -                | -         |     0.59 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           12 |     3718 | 2024-08-06 | los kogutos   | W   | 0.133      | -            | -                | -                | -         |     2.15 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|           11 |     3755 | 2024-08-05 | 1WIN          | W   | 0.126      | -            | -                | -                | -         |     0.18 | Chill, LNZ, SaMey, xfl0ud, yxngstxr   |
|           10 |     3815 | 2024-08-03 | Passion UA    | W   | 0.114      | -            | -                | -                | -         |     1.77 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|            9 |     3981 | 2024-07-30 | SINNERS       | W   | 0.087      | -            | -                | -                | -         |     1.04 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|            8 |     4039 | 2024-07-28 | fnatic        | W   | 0.075      | -            | -                | -                | -         |     1.02 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|            7 |     4055 | 2024-07-28 | Monte         | W   | 0.073      | -            | -                | -                | -         |     0.62 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|            6 |     4076 | 2024-07-27 | B8            | W   | 0.065      | -            | -                | -                | -         |     0.86 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|            5 |     4092 | 2024-07-26 | los kogutos   | W   | 0.060      | -            | -                | -                | -         |     0.99 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|            4 |     4206 | 2024-07-23 | Apogee        | W   | 0.040      | -            | -                | -                | -         |     0.10 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|            3 |     4307 | 2024-07-20 | fnatic        | L   | 0.019      | -            | -                | -                | -         |    -0.34 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|            2 |     4435 | 2024-07-17 | SAW           | L   | 0.002      | -            | -                | -                | -         |    -0.01 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |
|            1 |     4447 | 2024-07-17 | B8            | W   | 0.001      | -            | -                | -                | -         |     0.01 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($37,428.13)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.634 | $17,000.00     | $10,773.26      |
| 2024-10-19 |      0.628 | $25,000.00     | $15,709.02      |
| 2024-09-28 |      0.488 | $2,000.00      | $975.58         |
| 2024-09-22 |      0.448 | $12,000.00     | $5,378.38       |
| 2024-08-06 |      0.134 | $22,000.00     | $2,952.79       |
| 2024-07-28 |      0.075 | $22,000.00     | $1,639.11       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
