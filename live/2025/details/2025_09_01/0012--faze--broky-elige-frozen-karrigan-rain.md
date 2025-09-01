### Roster Details<br />
Team Name: FaZe<br />
Roster: broky, EliGE, frozen, karrigan, rain<br />
Global Rank: [12](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [9]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  1634.8<br />
<br />
Final Rank Value (1634.8) = Starting Rank Value (1681.8) + Head To Head Adjustments (-46.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.722[<sup>1</sup>](#table2)
- Bounty Collected: 0.710[<sup>2</sup>](#table1)
- Opponent Network: 0.357[<sup>2</sup>](#table1)
- LAN Wins: 0.885[<sup>2</sup>](#table1)

The average of these factors is 0.668<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1681.8
- 400 + ( ( 0.668 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 1681.8


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
|           40 |      194 | 2025-08-20 | Aurora        | L   | 1.000      | -            | -                | -                | -         |   -12.17 | broky, EliGE, frozen, karrigan, rain    |
|           39 |      551 | 2025-08-09 | Virtus.pro    | L   | 1.000      | -            | -                | -                | -         |   -24.29 | broky, EliGE, frozen, karrigan, rain    |
|           38 |      606 | 2025-08-05 | BetBoom       | W   | 1.000      | 0.624        | 0.429 (0.268)    | 0.802 (0.500)    | -         |     5.28 | broky, EliGE, frozen, karrigan, rain    |
|           37 |      707 | 2025-07-29 | Natus Vincere | L   | 0.974      | -            | -                | -                | -         |   -13.57 | broky, EliGE, frozen, karrigan, rain    |
|           36 |      713 | 2025-07-29 | Aurora        | W   | 0.972      | 1.000        | 1.000 (0.972)    | 0.435 (0.423)    | 1 (0.972) |    17.64 | broky, EliGE, frozen, karrigan, rain    |
|           35 |      732 | 2025-07-28 | Liquid        | W   | 0.966      | 1.000        | 0.264 (0.255)    | 0.274 (0.265)    | 1 (0.966) |     3.17 | broky, EliGE, frozen, karrigan, rain    |
|           34 |      787 | 2025-07-26 | Natus Vincere | L   | 0.954      | -            | -                | -                | -         |   -13.49 | broky, EliGE, frozen, karrigan, rain    |
|           33 |      819 | 2025-07-24 | Liquid        | W   | 0.941      | 0.769        | 0.264 (0.191)    | 0.274 (0.198)    | 1 (0.941) |     2.75 | broky, EliGE, frozen, karrigan, rain    |
|           32 |      834 | 2025-07-23 | BIG           | W   | 0.934      | 0.769        | -                | 0.414 (0.297)    | 1 (0.934) |     1.39 | broky, EliGE, frozen, karrigan, rain    |
|           31 |     1296 | 2025-06-20 | The MongolZ   | L   | 0.715      | -            | -                | -                | -         |    -4.56 | EliGE, frozen, karrigan, rain, s1mple   |
|           30 |     1413 | 2025-06-14 | The MongolZ   | W   | 0.674      | 1.000        | 1.000 (0.674)    | 0.570 (0.384)    | 1 (0.674) |    17.27 | EliGE, frozen, karrigan, rain, s1mple   |
|           29 |     1461 | 2025-06-13 | Legacy        | W   | 0.667      | 1.000        | -                | 0.732 (0.488)    | 1 (0.667) |     3.02 | EliGE, frozen, karrigan, rain, s1mple   |
|           28 |     1478 | 2025-06-12 | MOUZ          | W   | 0.662      | 1.000        | 1.000 (0.662)    | 0.648 (0.429)    | 1 (0.662) |    17.20 | EliGE, frozen, karrigan, rain, s1mple   |
|           27 |     1488 | 2025-06-12 | Aurora        | L   | 0.660      | -            | -                | -                | -         |    -6.87 | EliGE, frozen, karrigan, rain, s1mple   |
|           26 |     1518 | 2025-06-10 | MIBR          | W   | 0.648      | -            | -                | -                | 1 (0.648) |     1.87 | EliGE, frozen, karrigan, rain, s1mple   |
|           25 |     1534 | 2025-06-09 | 3DMAX         | L   | 0.642      | -            | -                | -                | -         |    -9.04 | EliGE, frozen, karrigan, rain, s1mple   |
|           24 |     1550 | 2025-06-08 | Legacy        | L   | 0.634      | -            | -                | -                | -         |   -17.52 | EliGE, frozen, karrigan, rain, s1mple   |
|           23 |     1565 | 2025-06-07 | TYLOO         | W   | 0.628      | 0.769        | 0.897 (0.433)    | 0.614 (0.297)    | 1 (0.628) |    12.89 | EliGE, frozen, karrigan, rain, s1mple   |
|           22 |     1578 | 2025-06-07 | HEROIC        | W   | 0.626      | 0.769        | 0.402 (0.193)    | 0.597 (0.287)    | 1 (0.626) |     8.38 | EliGE, frozen, karrigan, rain, s1mple   |
|           21 |     1780 | 2025-05-21 | HEROIC        | L   | 0.514      | -            | -                | -                | -         |    -9.54 | EliGE, frozen, karrigan, s1mple, skullz |
|           20 |     1810 | 2025-05-20 | BC.Game       | W   | 0.507      | -            | -                | -                | -         |     0.30 | EliGE, frozen, karrigan, s1mple, skullz |
|           19 |     1837 | 2025-05-19 | Liquid        | L   | 0.501      | -            | -                | -                | -         |   -14.29 | EliGE, frozen, karrigan, s1mple, skullz |
|           18 |     2271 | 2025-05-02 | MOUZ          | L   | 0.386      | -            | -                | -                | -         |    -2.19 | broky, EliGE, frozen, karrigan, rain    |
|           17 |     2286 | 2025-05-01 | FlyQuest      | W   | 0.381      | -            | -                | -                | -         |     1.29 | broky, EliGE, frozen, karrigan, rain    |
|           16 |     2310 | 2025-04-30 | Falcons       | L   | 0.374      | -            | -                | -                | -         |    -4.17 | broky, EliGE, frozen, karrigan, rain    |
|           15 |     2472 | 2025-04-23 | GamerLegion   | L   | 0.325      | -            | -                | -                | -         |    -7.87 | broky, EliGE, frozen, karrigan, rain    |
|           14 |     2477 | 2025-04-22 | 3DMAX         | W   | 0.323      | 1.000        | 0.440 (0.142)    | -                | -         |     5.75 | broky, EliGE, frozen, karrigan, rain    |
|           13 |     2491 | 2025-04-21 | The MongolZ   | L   | 0.317      | -            | -                | -                | -         |    -1.66 | broky, EliGE, frozen, karrigan, rain    |
|           12 |     2506 | 2025-04-20 | paiN          | W   | 0.310      | -            | -                | -                | -         |     2.51 | broky, EliGE, frozen, karrigan, rain    |
|           11 |     2674 | 2025-04-13 | Passion UA    | W   | 0.259      | -            | -                | -                | -         |     0.72 | broky, EliGE, frozen, karrigan, rain    |
|           10 |     2687 | 2025-04-12 | Falcons       | L   | 0.254      | -            | -                | -                | -         |    -3.02 | broky, EliGE, frozen, karrigan, rain    |
|            9 |     2711 | 2025-04-11 | 3DMAX         | W   | 0.245      | 1.000        | 0.440 (0.108)    | -                | -         |     4.54 | broky, EliGE, frozen, karrigan, rain    |
|            8 |     2722 | 2025-04-10 | Betclic       | W   | 0.238      | -            | -                | -                | -         |     0.24 | broky, EliGE, frozen, karrigan, rain    |
|            7 |     2759 | 2025-04-09 | Passion UA    | L   | 0.232      | -            | -                | -                | -         |    -6.71 | broky, EliGE, frozen, karrigan, rain    |
|            6 |     2808 | 2025-04-08 | Rare Atom     | W   | 0.226      | -            | -                | -                | -         |     0.43 | broky, EliGE, frozen, karrigan, rain    |
|            5 |     2835 | 2025-04-07 | paiN          | W   | 0.220      | -            | -                | -                | -         |     1.79 | broky, EliGE, frozen, karrigan, rain    |
|            4 |     2848 | 2025-04-06 | Astralis      | L   | 0.213      | -            | -                | -                | -         |    -3.21 | broky, EliGE, frozen, karrigan, rain    |
|            3 |     3413 | 2025-03-23 | Spirit        | L   | 0.120      | -            | -                | -                | -         |    -0.55 | broky, EliGE, frozen, karrigan, rain    |
|            2 |     3463 | 2025-03-21 | Astralis      | W   | 0.106      | -            | -                | -                | -         |     1.75 | broky, EliGE, frozen, karrigan, rain    |
|            1 |     3519 | 2025-03-19 | Virtus.pro    | L   | 0.095      | -            | -                | -                | -         |    -2.38 | broky, EliGE, frozen, karrigan, rain    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($173,711.38)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.41) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-24 |      1.000 | $20,000.00     | $20,000.00      |
| 2025-08-10 |      1.000 | $2,500.00      | $2,500.00       |
| 2025-08-03 |      1.000 | $38,000.00     | $38,000.00      |
| 2025-06-22 |      0.728 | $45,000.00     | $32,772.79      |
| 2025-05-25 |      0.542 | $25,000.00     | $13,543.97      |
| 2025-05-04 |      0.401 | $25,000.00     | $10,021.28      |
| 2025-04-27 |      0.352 | $47,000.00     | $16,561.41      |
| 2025-04-13 |      0.260 | $150,000.00    | $39,052.81      |
| 2025-03-30 |      0.168 | $7,500.00      | $1,259.11       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
