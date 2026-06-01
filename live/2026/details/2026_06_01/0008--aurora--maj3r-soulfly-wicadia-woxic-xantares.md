### Roster Details<br />
Team Name: Aurora<br />
Roster: MAJ3R, soulfly, Wicadia, woxic, XANTARES<br />
Global Rank: [8](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [6]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  1741.2<br />
<br />
Final Rank Value (1741.2) = Starting Rank Value (1744.6) + Head To Head Adjustments (-3.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.820[<sup>1</sup>](#table2)
- Bounty Collected: 0.757[<sup>2</sup>](#table1)
- Opponent Network: 0.376[<sup>2</sup>](#table1)
- LAN Wins: 0.870[<sup>2</sup>](#table1)

The average of these factors is 0.706<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1744.6
- 400 + ( ( 0.706 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1744.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |      584 | 2026-05-15 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |    -9.90 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           40 |      634 | 2026-05-13 | The MongolZ   | W   | 1.000      | 1.000        | 0.576 (0.576)    | 0.419 (0.419)    | 1 (1.000) |    17.88 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           39 |      685 | 2026-05-12 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |    -9.98 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           38 |      724 | 2026-05-11 | PARIVISION    | W   | 1.000      | 1.000        | 0.671 (0.671)    | 0.419 (0.419)    | 1 (1.000) |    15.52 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           37 |      756 | 2026-05-10 | The Huns      | W   | 1.000      | 1.000        | -                | 0.454 (0.454)    | 1 (1.000) |     1.19 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           36 |      789 | 2026-05-08 | HEROIC        | L   | 1.000      | -            | -                | -                | -         |   -25.82 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           35 |     1535 | 2026-04-15 | Natus Vincere | L   | 0.888      | -            | -                | -                | -         |    -7.81 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           34 |     1541 | 2026-04-15 | B8            | W   | 0.887      | 1.000        | -                | 0.469 (0.416)    | 1 (0.887) |     7.43 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           33 |     1553 | 2026-04-14 | MOUZ          | L   | 0.882      | -            | -                | -                | -         |    -8.19 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           32 |     1574 | 2026-04-13 | HOTU          | W   | 0.875      | 1.000        | -                | 0.537 (0.470)    | 1 (0.875) |     3.13 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           31 |     2164 | 2026-04-01 | Alliance      | L   | 0.793      | -            | -                | -                | -         |   -22.05 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           30 |     2219 | 2026-03-31 | M80           | L   | 0.788      | -            | -                | -                | -         |   -23.00 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           29 |     2277 | 2026-03-31 | Sashi         | W   | 0.786      | -            | -                | -                | 1 (0.786) |     0.61 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           28 |     2336 | 2026-03-30 | INFINITE      | W   | 0.780      | -            | -                | -                | 1 (0.780) |     1.09 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           27 |     2503 | 2026-03-28 | Vitality      | L   | 0.766      | -            | -                | -                | -         |    -5.49 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           26 |     2564 | 2026-03-27 | The MongolZ   | W   | 0.760      | 1.000        | 0.576 (0.438)    | 0.419 (0.318)    | 1 (0.760) |    12.75 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           25 |     2791 | 2026-03-23 | Natus Vincere | L   | 0.732      | -            | -                | -                | -         |    -7.29 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           24 |     2924 | 2026-03-20 | FURIA         | W   | 0.715      | 1.000        | 0.702 (0.502)    | -                | 1 (0.715) |     9.36 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           23 |     3021 | 2026-03-18 | FaZe          | W   | 0.701      | 1.000        | -                | 0.391 (0.274)    | 1 (0.701) |     4.80 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           22 |     3159 | 2026-03-15 | Natus Vincere | L   | 0.681      | -            | -                | -                | -         |    -7.22 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           21 |     3197 | 2026-03-14 | Astralis      | W   | 0.675      | 0.901        | 0.650 (0.395)    | -                | -         |     9.37 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           20 |     3262 | 2026-03-13 | Legacy        | W   | 0.666      | 0.901        | 1.000 (0.600)    | 0.614 (0.369)    | -         |    14.17 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           19 |     3426 | 2026-03-09 | G2            | W   | 0.641      | 0.805        | -                | 0.613 (0.317)    | -         |     8.30 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           18 |     3549 | 2026-03-08 | paiN          | W   | 0.632      | -            | -                | -                | -         |     4.78 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           17 |     3596 | 2026-03-07 | The MongolZ   | L   | 0.626      | -            | -                | -                | -         |    -8.69 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           16 |     3618 | 2026-03-06 | Legacy        | W   | 0.620      | 0.805        | 1.000 (0.500)    | 0.614 (0.307)    | -         |    13.55 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           15 |     4321 | 2026-02-20 | Vitality      | L   | 0.527      | -            | -                | -                | -         |    -3.40 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           14 |     4444 | 2026-02-18 | Astralis      | W   | 0.512      | 1.000        | 0.650 (0.333)    | -                | -         |     7.38 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           13 |     4507 | 2026-02-17 | B8            | W   | 0.506      | -            | -                | -                | -         |     5.33 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           12 |     4552 | 2026-02-16 | Natus Vincere | L   | 0.499      | -            | -                | -                | -         |    -4.19 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           11 |     4602 | 2026-02-15 | paiN          | W   | 0.493      | -            | -                | -                | -         |     3.63 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|           10 |     4681 | 2026-02-14 | FUT           | L   | 0.485      | -            | -                | -                | -         |    -9.22 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|            9 |     4950 | 2026-02-06 | FURIA         | L   | 0.433      | -            | -                | -                | -         |    -7.11 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|            8 |     5016 | 2026-02-03 | Vitality      | L   | 0.415      | -            | -                | -                | -         |    -3.10 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|            7 |     5062 | 2026-02-02 | MOUZ          | W   | 0.406      | 1.000        | 0.877 (0.356)    | -                | -         |     9.36 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|            6 |     5090 | 2026-02-01 | Falcons       | W   | 0.400      | 1.000        | 1.000 (0.400)    | -                | -         |    10.08 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|            5 |     5158 | 2026-01-30 | paiN          | W   | 0.387      | -            | -                | -                | -         |     2.97 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|            4 |     5190 | 2026-01-29 | PARIVISION    | L   | 0.380      | -            | -                | -                | -         |    -5.40 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|            3 |     5222 | 2026-01-28 | GamerLegion   | W   | 0.372      | -            | -                | -                | -         |     5.58 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|            2 |     5551 | 2026-01-17 | GamerLegion   | L   | 0.301      | -            | -                | -                | -         |    -4.87 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |
|            1 |     5701 | 2026-01-13 | HOTU          | W   | 0.275      | -            | -                | -                | -         |     1.11 | MAJ3R, soulfly, Wicadia, woxic, XANTARES |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($377,037.69)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.60) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-17 |      1.000 | $80,000.00     | $80,000.00      |
| 2026-04-19 |      0.914 | $42,000.00     | $38,400.70      |
| 2026-03-29 |      0.773 | $115,000.00    | $88,842.74      |
| 2026-03-15 |      0.681 | $156,500.00    | $106,599.88     |
| 2026-02-22 |      0.541 | $50,000.00     | $27,034.73      |
| 2026-02-08 |      0.448 | $61,000.00     | $27,307.07      |
| 2026-01-18 |      0.308 | $28,750.00     | $8,852.56       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
