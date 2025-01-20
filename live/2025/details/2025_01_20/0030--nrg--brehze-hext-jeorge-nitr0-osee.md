### Roster Details<br />
Team Name: NRG<br />
Roster: Brehze, HexT, Jeorge, nitr0, oSee<br />
Global Rank: [30](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_20.md)<br />
Regional Rank: [8]( ../../standings_americas_2025_01_20.md)<br />
<br />
Final Rank Value:  1189.6<br />
<br />
Final Rank Value (1189.6) = Starting Rank Value (1211.0) + Head To Head Adjustments (-21.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.523[<sup>1</sup>](#table2)
- Bounty Collected: 0.398[<sup>2</sup>](#table1)
- Opponent Network: 0.145[<sup>2</sup>](#table1)
- LAN Wins: 0.568[<sup>2</sup>](#table1)

The average of these factors is 0.408<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1211.0
- 400 + ( ( 0.408 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 1211.0


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
|           60 |      177 | 2024-12-15 | timbermen         | L   | 0.968      | -            | -                | -                | -         |   -25.43 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           59 |      184 | 2024-12-15 | Party Astronauts  | W   | 0.966      | 0.303        | -                | 0.388 (0.114)    | 0 (0.000) |     4.78 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           58 |      204 | 2024-12-14 | Make Your Mind    | W   | 0.961      | 0.303        | 0.029 (0.008)    | -                | 0 (0.000) |     2.44 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           57 |      298 | 2024-12-08 | Sharks            | W   | 0.922      | 0.384        | 0.110 (0.039)    | 0.595 (0.211)    | 1 (0.922) |    12.54 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           56 |      301 | 2024-12-08 | Sharks            | W   | 0.920      | 0.384        | 0.110 (0.039)    | 0.595 (0.210)    | 1 (0.920) |    13.09 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           55 |      320 | 2024-12-07 | BOSS              | W   | 0.915      | 0.384        | 0.041 (0.015)    | 0.422 (0.148)    | 1 (0.915) |     9.94 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           54 |      328 | 2024-12-07 | Undone            | W   | 0.914      | -            | -                | -                | 1 (0.914) |     3.41 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           53 |      357 | 2024-12-06 | Stand On Business | W   | 0.908      | -            | -                | -                | 1 (0.908) |     0.38 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           52 |      594 | 2024-11-24 | Nouns             | L   | 0.828      | -            | -                | -                | -         |   -16.56 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           51 |      598 | 2024-11-24 | timbermen         | W   | 0.827      | 0.303        | 0.030 (0.007)    | -                | 0 (0.000) |     3.69 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           50 |      618 | 2024-11-23 | Revenge Nation    | W   | 0.821      | -            | -                | -                | 0 (0.000) |     1.73 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           49 |     1330 | 2024-10-20 | M80               | L   | 0.594      | -            | -                | -                | -         |    -9.31 | autimatic, Brehze, HexT, nitr0, oSee |
|           48 |     1356 | 2024-10-19 | Legacy            | W   | 0.588      | 0.477        | 0.075 (0.021)    | 0.500 (0.140)    | 0 (0.000) |     6.90 | autimatic, Brehze, HexT, nitr0, oSee |
|           47 |     1380 | 2024-10-18 | Party Astronauts  | W   | 0.581      | 0.477        | -                | 0.388 (0.108)    | -         |     3.75 | autimatic, Brehze, HexT, nitr0, oSee |
|           46 |     1411 | 2024-10-17 | Wildcard          | W   | 0.575      | 0.477        | 0.232 (0.064)    | 0.638 (0.175)    | -         |    12.40 | autimatic, Brehze, HexT, nitr0, oSee |
|           45 |     1441 | 2024-10-16 | M80               | L   | 0.568      | -            | -                | -                | -         |    -8.96 | autimatic, Brehze, HexT, nitr0, oSee |
|           44 |     1468 | 2024-10-15 | Party Astronauts  | W   | 0.561      | 0.477        | -                | 0.388 (0.104)    | -         |     3.50 | autimatic, Brehze, HexT, nitr0, oSee |
|           43 |     1585 | 2024-10-08 | Nouns             | L   | 0.515      | -            | -                | -                | -         |   -10.06 | autimatic, Brehze, HexT, nitr0, oSee |
|           42 |     1591 | 2024-10-08 | Nouns             | L   | 0.514      | -            | -                | -                | -         |   -10.49 | autimatic, Brehze, HexT, nitr0, oSee |
|           41 |     1746 | 2024-10-03 | BOSS              | L   | 0.481      | -            | -                | -                | -         |   -10.52 | autimatic, Brehze, HexT, nitr0, oSee |
|           40 |     1824 | 2024-10-01 | Legacy            | L   | 0.468      | -            | -                | -                | -         |    -9.92 | autimatic, Brehze, HexT, nitr0, oSee |
|           39 |     1829 | 2024-10-01 | Legacy            | L   | 0.468      | -            | -                | -                | -         |   -10.28 | autimatic, Brehze, HexT, nitr0, oSee |
|           38 |     1959 | 2024-09-27 | Legacy            | L   | 0.441      | -            | -                | -                | -         |   -10.40 | autimatic, Brehze, HexT, nitr0, oSee |
|           37 |     1964 | 2024-09-27 | E-Xolos LAZER     | W   | 0.440      | -            | -                | -                | -         |     0.82 | autimatic, Brehze, HexT, nitr0, oSee |
|           36 |     2053 | 2024-09-25 | M80               | L   | 0.428      | -            | -                | -                | -         |    -7.93 | autimatic, Brehze, HexT, nitr0, oSee |
|           35 |     2058 | 2024-09-25 | M80               | W   | 0.428      | 0.477        | 0.139 (0.028)    | -                | -         |     5.64 | autimatic, Brehze, HexT, nitr0, oSee |
|           34 |     2110 | 2024-09-24 | timbermen         | W   | 0.421      | -            | -                | -                | -         |     1.44 | autimatic, Brehze, HexT, nitr0, oSee |
|           33 |     2113 | 2024-09-24 | timbermen         | W   | 0.421      | -            | -                | -                | -         |     1.46 | autimatic, Brehze, HexT, nitr0, oSee |
|           32 |     2189 | 2024-09-22 | Nouns             | W   | 0.408      | -            | -                | -                | -         |     4.46 | autimatic, Brehze, HexT, nitr0, oSee |
|           31 |     2193 | 2024-09-22 | FLUFFY AIMERS     | W   | 0.406      | -            | -                | -                | -         |     2.11 | autimatic, Brehze, HexT, nitr0, oSee |
|           30 |     2218 | 2024-09-21 | Party Astronauts  | W   | 0.400      | -            | -                | -                | -         |     1.73 | autimatic, Brehze, HexT, nitr0, oSee |
|           29 |     2265 | 2024-09-19 | Wildcard          | W   | 0.387      | 0.477        | 0.232 (0.043)    | 0.638 (0.118)    | -         |     8.20 | autimatic, Brehze, HexT, nitr0, oSee |
|           28 |     2269 | 2024-09-19 | Wildcard          | W   | 0.387      | 0.477        | 0.232 (0.043)    | 0.638 (0.118)    | -         |     8.45 | autimatic, Brehze, HexT, nitr0, oSee |
|           27 |     2298 | 2024-09-18 | Take Flyte        | W   | 0.381      | -            | -                | -                | -         |     0.87 | autimatic, Brehze, HexT, nitr0, oSee |
|           26 |     2301 | 2024-09-18 | Take Flyte        | W   | 0.381      | -            | -                | -                | -         |     0.88 | autimatic, Brehze, HexT, nitr0, oSee |
|           25 |     2334 | 2024-09-17 | LAG               | W   | 0.374      | -            | -                | -                | -         |     0.48 | autimatic, Brehze, HexT, nitr0, oSee |
|           24 |     2335 | 2024-09-17 | LAG               | W   | 0.374      | -            | -                | -                | -         |     0.48 | autimatic, Brehze, HexT, nitr0, oSee |
|           23 |     2834 | 2024-08-30 | Wildcard          | L   | 0.255      | -            | -                | -                | -         |    -2.34 | autimatic, Brehze, HexT, nitr0, oSee |
|           22 |     2835 | 2024-08-30 | Nouns             | W   | 0.254      | -            | -                | -                | -         |     2.94 | autimatic, Brehze, HexT, nitr0, oSee |
|           21 |     2860 | 2024-08-29 | Wildcard          | L   | 0.248      | -            | -                | -                | -         |    -2.30 | autimatic, Brehze, HexT, nitr0, oSee |
|           20 |     2864 | 2024-08-29 | Nouns             | W   | 0.247      | -            | -                | -                | -         |     2.89 | autimatic, Brehze, HexT, nitr0, oSee |
|           19 |     2916 | 2024-08-28 | Legacy            | L   | 0.240      | -            | -                | -                | -         |    -5.98 | autimatic, Brehze, HexT, nitr0, oSee |
|           18 |     2980 | 2024-08-27 | Nouns             | L   | 0.233      | -            | -                | -                | -         |    -4.75 | autimatic, Brehze, HexT, nitr0, oSee |
|           17 |     3028 | 2024-08-26 | timbermen         | W   | 0.227      | -            | -                | -                | -         |     0.91 | autimatic, Brehze, HexT, nitr0, oSee |
|           16 |     3049 | 2024-08-26 | Akimbo            | W   | 0.226      | -            | -                | -                | -         |     0.38 | autimatic, Brehze, HexT, nitr0, oSee |
|           15 |     3361 | 2024-08-17 | Wildcard          | L   | 0.168      | -            | -                | -                | -         |    -1.66 | autimatic, Brehze, HexT, nitr0, oSee |
|           14 |     3363 | 2024-08-17 | LAG               | W   | 0.167      | -            | -                | -                | -         |     0.21 | autimatic, Brehze, HexT, nitr0, oSee |
|           13 |     3365 | 2024-08-17 | DETONATE          | W   | 0.167      | -            | -                | -                | -         |     0.09 | autimatic, Brehze, HexT, nitr0, oSee |
|           12 |     3412 | 2024-08-15 | LAG               | W   | 0.154      | -            | -                | -                | -         |     0.19 | autimatic, Brehze, HexT, nitr0, oSee |
|           11 |     3414 | 2024-08-15 | InControl         | W   | 0.154      | -            | -                | -                | -         |     0.20 | autimatic, Brehze, HexT, nitr0, oSee |
|           10 |     3522 | 2024-08-12 | Akimbo            | W   | 0.134      | -            | -                | -                | -         |     0.23 | autimatic, Brehze, HexT, nitr0, oSee |
|            9 |     3710 | 2024-08-06 | Revenge Nation    | W   | 0.094      | -            | -                | -                | -         |     0.15 | autimatic, Brehze, HexT, nitr0, oSee |
|            8 |     3715 | 2024-08-06 | Revenge Nation    | W   | 0.094      | -            | -                | -                | -         |     0.15 | autimatic, Brehze, HexT, nitr0, oSee |
|            7 |     3770 | 2024-08-04 | timbermen         | W   | 0.082      | -            | -                | -                | -         |     0.32 | autimatic, Brehze, HexT, nitr0, oSee |
|            6 |     3775 | 2024-08-04 | Wildcard          | W   | 0.080      | -            | -                | -                | -         |     1.75 | autimatic, Brehze, HexT, nitr0, oSee |
|            5 |     3809 | 2024-08-03 | BOSS              | W   | 0.074      | -            | -                | -                | -         |     0.81 | autimatic, Brehze, HexT, nitr0, oSee |
|            4 |     3916 | 2024-07-31 | BOSS              | W   | 0.054      | -            | -                | -                | -         |     0.60 | autimatic, Brehze, HexT, nitr0, oSee |
|            3 |     3920 | 2024-07-31 | BOSS              | W   | 0.054      | -            | -                | -                | -         |     0.60 | autimatic, Brehze, HexT, nitr0, oSee |
|            2 |     3964 | 2024-07-30 | Party Astronauts  | L   | 0.048      | -            | -                | -                | -         |    -1.28 | autimatic, Brehze, HexT, nitr0, oSee |
|            1 |     3969 | 2024-07-30 | Party Astronauts  | L   | 0.048      | -            | -                | -                | -         |    -1.27 | autimatic, Brehze, HexT, nitr0, oSee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($26,993.87)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.968 | $1,000.00      | $968.31         |
| 2024-12-08 |      0.922 | $15,000.00     | $13,822.83      |
| 2024-11-24 |      0.828 | $1,000.00      | $827.98         |
| 2024-10-20 |      0.594 | $15,000.00     | $8,912.56       |
| 2024-10-05 |      0.495 | $750.00        | $371.07         |
| 2024-09-22 |      0.408 | $4,000.00      | $1,631.48       |
| 2024-08-18 |      0.175 | $750.00        | $131.24         |
| 2024-08-04 |      0.082 | $4,000.00      | $328.40         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
