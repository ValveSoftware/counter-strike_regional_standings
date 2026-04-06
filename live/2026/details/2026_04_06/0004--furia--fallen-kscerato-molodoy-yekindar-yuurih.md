### Roster Details<br />
Team Name: FURIA<br />
Roster: FalleN, KSCERATO, molodoy, YEKINDAR, yuurih<br />
Global Rank: [4](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [1]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  1780.8<br />
<br />
Final Rank Value (1780.8) = Starting Rank Value (1848.5) + Head To Head Adjustments (-67.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.763[<sup>2</sup>](#table1)
- Opponent Network: 0.342[<sup>2</sup>](#table1)
- LAN Wins: 0.857[<sup>2</sup>](#table1)

The average of these factors is 0.741<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1848.5
- 400 + ( ( 0.741 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1848.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |      699 | 2026-03-23 | Falcons       | L   | 1.000      | -            | -                | -                | -         |   -16.33 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           43 |      753 | 2026-03-22 | NRG           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.32 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           42 |      844 | 2026-03-20 | Aurora        | L   | 1.000      | -            | -                | -                | -         |   -14.34 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           41 |      934 | 2026-03-18 | TYLOO         | W   | 1.000      | 1.000        | -                | 0.342 (0.342)    | 1 (1.000) |     4.19 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           40 |     1299 | 2026-03-10 | Astralis      | L   | 1.000      | -            | -                | -                | -         |   -22.39 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           39 |     1355 | 2026-03-09 | paiN          | W   | 1.000      | 0.805        | 0.271 (0.218)    | 0.391 (0.315)    | -         |     6.20 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           38 |     1418 | 2026-03-08 | HEROIC        | W   | 1.000      | 0.805        | -                | 0.491 (0.395)    | -         |     5.92 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           37 |     1481 | 2026-03-07 | 3DMAX         | L   | 1.000      | -            | -                | -                | -         |   -26.66 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           36 |     1519 | 2026-03-06 | B8            | L   | 0.996      | -            | -                | -                | -         |   -26.19 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           35 |     2227 | 2026-02-20 | The MongolZ   | L   | 0.902      | -            | -                | -                | -         |   -20.24 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           34 |     2407 | 2026-02-17 | PARIVISION    | W   | 0.881      | 1.000        | 1.000 (0.881)    | 0.426 (0.376)    | 1 (0.881) |    12.39 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           33 |     2445 | 2026-02-16 | Falcons       | L   | 0.875      | -            | -                | -                | -         |   -18.04 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           32 |     2511 | 2026-02-15 | FUT           | W   | 0.867      | 1.000        | 0.330 (0.286)    | 0.467 (0.405)    | 1 (0.867) |     3.68 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           31 |     2548 | 2026-02-14 | B8            | W   | 0.861      | 1.000        | -                | 0.349 (0.300)    | 1 (0.861) |     3.67 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           30 |     2791 | 2026-02-08 | Vitality      | L   | 0.821      | -            | -                | -                | -         |    -9.32 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           29 |     2825 | 2026-02-07 | Spirit        | W   | 0.814      | 1.000        | 0.644 (0.524)    | -                | 1 (0.814) |     6.98 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           28 |     2867 | 2026-02-06 | Aurora        | W   | 0.807      | 1.000        | 1.000 (0.807)    | 0.412 (0.332)    | 1 (0.807) |    11.55 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           27 |     2939 | 2026-02-03 | Astralis      | W   | 0.787      | 1.000        | 0.464 (0.366)    | -                | 1 (0.787) |     5.54 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           26 |     2964 | 2026-02-02 | Natus Vincere | W   | 0.782      | 1.000        | 1.000 (0.782)    | -                | 1 (0.782) |    14.21 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           25 |     2999 | 2026-02-01 | The MongolZ   | W   | 0.774      | 1.000        | 0.554 (0.429)    | -                | 1 (0.774) |     6.59 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           24 |     3042 | 2026-01-31 | FUT           | L   | 0.767      | -            | -                | -                | -         |   -20.75 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           23 |     3218 | 2026-01-24 | PARIVISION    | L   | 0.721      | -            | -                | -                | -         |   -12.30 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           22 |     3310 | 2026-01-22 | HEROIC        | W   | 0.708      | 0.899        | -                | 0.491 (0.312)    | -         |     3.63 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           21 |     3421 | 2026-01-18 | FUT           | W   | 0.681      | 0.895        | -                | 0.467 (0.285)    | -         |     3.01 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           20 |     3519 | 2026-01-16 | 9INE          | W   | 0.668      | 0.895        | -                | 0.606 (0.362)    | -         |     1.04 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           19 |     3923 | 2025-12-12 | Natus Vincere | L   | 0.435      | -            | -                | -                | -         |    -5.33 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           18 |     4046 | 2025-12-05 | G2            | W   | 0.388      | -            | -                | -                | -         |     3.48 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           17 |     4070 | 2025-12-04 | Imperial      | W   | 0.382      | -            | -                | -                | -         |     0.53 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           16 |     4084 | 2025-12-04 | Natus Vincere | W   | 0.380      | 1.000        | 1.000 (0.380)    | -                | -         |     7.52 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           15 |     4525 | 2025-11-16 | Falcons       | W   | 0.259      | -            | -                | -                | -         |     2.89 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           14 |     4552 | 2025-11-15 | paiN          | W   | 0.252      | -            | -                | -                | -         |     1.30 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           13 |     4600 | 2025-11-13 | Vitality      | W   | 0.239      | -            | -                | -                | -         |     5.12 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           12 |     4638 | 2025-11-12 | paiN          | W   | 0.232      | -            | -                | -                | -         |     1.22 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           11 |     4722 | 2025-11-09 | Vitality      | W   | 0.212      | 1.000        | 1.000 (0.212)    | -                | -         |     4.62 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|           10 |     4771 | 2025-11-08 | Falcons       | W   | 0.206      | -            | -                | -                | -         |     2.33 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|            9 |     4871 | 2025-11-07 | The MongolZ   | W   | 0.199      | -            | -                | -                | -         |     1.90 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|            8 |     4941 | 2025-11-05 | MOUZ          | L   | 0.185      | -            | -                | -                | -         |    -3.67 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|            7 |     4975 | 2025-11-03 | G2            | W   | 0.177      | -            | -                | -                | -         |     1.74 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|            6 |     5000 | 2025-11-02 | Lynn Vision   | W   | 0.170      | -            | -                | -                | -         |     0.18 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|            5 |     5465 | 2025-10-19 | Natus Vincere | W   | 0.075      | -            | -                | -                | -         |     1.57 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|            4 |     5492 | 2025-10-18 | Aurora        | W   | 0.067      | -            | -                | -                | -         |     1.19 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|            3 |     5559 | 2025-10-16 | The MongolZ   | W   | 0.052      | -            | -                | -                | -         |     0.49 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|            2 |     5596 | 2025-10-15 | OG            | W   | 0.045      | -            | -                | -                | -         |     0.05 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |
|            1 |     5697 | 2025-10-10 | Vitality      | L   | 0.015      | -            | -                | -                | -         |    -0.14 | FalleN, KSCERATO, molodoy, YEKINDAR, yuurih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($507,285.88)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      1.000 | $50,000.00     | $50,000.00      |
| 2026-03-10 |      1.000 | $34,500.00     | $34,500.00      |
| 2026-02-22 |      0.914 | $50,000.00     | $45,712.73      |
| 2026-02-08 |      0.821 | $216,000.00    | $177,382.83     |
| 2026-01-25 |      0.727 | $65,625.00     | $47,733.10      |
| 2025-12-14 |      0.448 | $45,000.00     | $20,166.98      |
| 2025-11-16 |      0.259 | $125,000.00    | $32,408.57      |
| 2025-11-09 |      0.212 | $285,000.00    | $60,463.96      |
| 2025-10-19 |      0.075 | $500,000.00    | $37,336.50      |
| 2025-10-12 |      0.027 | $58,000.00     | $1,581.20       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
