### Roster Details<br />
Team Name: HEROIC<br />
Roster: LNZ, SunPayus, tN1R, xfl0ud, yxngstxr<br />
Global Rank: [20](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [15]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  1278.0<br />
<br />
Final Rank Value (1278.0) = Starting Rank Value (1210.3) + Head To Head Adjustments (67.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.649[<sup>1</sup>](#table2)
- Bounty Collected: 0.494[<sup>2</sup>](#table1)
- Opponent Network: 0.127[<sup>2</sup>](#table1)
- LAN Wins: 0.401[<sup>2</sup>](#table1)

The average of these factors is 0.418<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1210.3
- 400 + ( ( 0.418 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 1210.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |       32 | 2025-01-31 | BIG           | L   | 1.000      | -            | -                | -                | -         |   -12.62 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           29 |       35 | 2025-01-30 | Eternal Fire  | L   | 1.000      | -            | -                | -                | -         |    -2.97 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           28 |       44 | 2025-01-29 | Liquid        | W   | 1.000      | 0.143        | 0.363 (0.052)    | 0.630 (0.090)    | 1 (1.000) |    26.88 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           27 |      223 | 2025-01-23 | Spirit        | L   | 1.000      | -            | -                | -                | -         |    -0.66 | LNZ, Maden, SunPayus, xfl0ud, yxngstxr |
|           26 |      328 | 2025-01-18 | Liquid        | W   | 1.000      | 0.143        | 0.363 (0.052)    | -                | 0 (0.000) |    27.95 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           25 |      343 | 2025-01-14 | 3DMAX         | W   | 1.000      | 0.143        | 0.403 (0.058)    | 0.722 (0.103)    | 0 (0.000) |    25.16 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           24 |     1047 | 2024-11-18 | ECLOT         | L   | 0.689      | -            | -                | -                | -         |   -12.97 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           23 |     1059 | 2024-11-17 | Cloud9        | L   | 0.683      | -            | -                | -                | -         |   -16.55 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           22 |     1072 | 2024-11-17 | MOUZ          | L   | 0.678      | -            | -                | -                | -         |    -1.56 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           21 |     1080 | 2024-11-16 | Rebels        | W   | 0.677      | -            | -                | -                | 1 (0.677) |     2.11 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           20 |     1662 | 2024-10-20 | Nemiga        | W   | 0.493      | 0.500        | 0.480 (0.118)    | 0.545 (0.134)    | 0 (0.000) |     7.50 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           19 |     1691 | 2024-10-19 | UNPAID        | L   | 0.486      | -            | -                | -                | -         |   -12.71 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           18 |     1738 | 2024-10-17 | Nemiga        | W   | 0.474      | 0.500        | 0.480 (0.114)    | 0.545 (0.129)    | -         |     6.70 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           17 |     1749 | 2024-10-17 | Fluxo         | W   | 0.472      | 0.624        | 0.130 (0.038)    | 0.649 (0.191)    | 1 (0.472) |     4.78 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           16 |     1770 | 2024-10-16 | SAW           | W   | 0.467      | 0.500        | 0.231 (0.054)    | -                | -         |     6.94 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           15 |     1778 | 2024-10-16 | Nemiga        | W   | 0.466      | 0.624        | 0.480 (0.139)    | 0.545 (0.158)    | 1 (0.466) |     6.81 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           14 |     1799 | 2024-10-15 | Sashi         | W   | 0.460      | 0.500        | -                | 0.638 (0.147)    | -         |     2.93 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           13 |     2298 | 2024-09-27 | BetBoom       | L   | 0.341      | -            | -                | -                | -         |    -7.19 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           12 |     2360 | 2024-09-26 | Passion UA    | W   | 0.332      | 0.435        | -                | 0.772 (0.111)    | -         |     3.10 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           11 |     2919 | 2024-09-08 | Falcons       | L   | 0.213      | -            | -                | -                | -         |    -0.49 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           10 |     2958 | 2024-09-07 | FlyQuest      | W   | 0.205      | -            | -                | -                | 1 (0.205) |     3.30 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            9 |     2980 | 2024-09-06 | FaZe          | L   | 0.199      | -            | -                | -                | -         |    -0.14 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            8 |     3001 | 2024-09-05 | Falcons       | W   | 0.194      | 0.889        | 0.923 (0.159)    | 0.627 (0.108)    | 1 (0.194) |     5.69 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            7 |     3054 | 2024-09-04 | Eternal Fire  | L   | 0.186      | -            | -                | -                | -         |    -0.34 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            6 |     3085 | 2024-09-03 | FaZe          | W   | 0.180      | 0.889        | 1.000 (0.160)    | 0.630 (0.101)    | 1 (0.180) |     5.54 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            5 |     3519 | 2024-08-22 | UNPAID        | W   | 0.099      | -            | -                | -                | -         |     0.62 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            4 |     3569 | 2024-08-21 | BC.Game       | W   | 0.092      | -            | -                | -                | -         |     0.33 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            3 |     3605 | 2024-08-21 | 1WIN          | W   | 0.091      | -            | -                | -                | -         |     0.05 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            2 |     3759 | 2024-08-15 | Nemiga        | L   | 0.053      | -            | -                | -                | -         |    -0.80 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            1 |     3851 | 2024-08-12 | Zero Tenacity | W   | 0.034      | -            | -                | -                | -         |     0.27 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($54,445.40)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.29) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-31 |      1.000 | $4,500.00      | $4,500.00       |
| 2025-01-26 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-10-20 |      0.493 | $17,000.00     | $8,377.83       |
| 2024-10-19 |      0.487 | $25,000.00     | $12,186.32      |
| 2024-09-28 |      0.347 | $2,000.00      | $693.76         |
| 2024-09-22 |      0.307 | $12,000.00     | $3,687.49       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
