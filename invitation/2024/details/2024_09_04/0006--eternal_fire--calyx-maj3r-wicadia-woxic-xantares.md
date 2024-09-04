### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: Calyx, MAJ3R, Wicadia, woxic, XANTARES<br />
Global Rank: [6](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_04.md)<br />
Regional Rank: [6]( ../../standings_europe_2024_09_04.md)<br />
<br />
Final Rank Value:  1770.4<br />
<br />
Final Rank Value (1770.4) = Starting Rank Value (1900.0) + Head To Head Adjustments (-129.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.985[<sup>1</sup>](#table2)
- Bounty Collected: 0.619[<sup>2</sup>](#table1)
- Opponent Network: 0.425[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.757<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1900.0
- 400 + ( ( 0.757 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 1900.0


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
|           49 |        4 | 2024-09-04 | Sangal        | W   | 1.000      | 0.889        | 0.248 (0.220)    | 0.831 (0.739)    | 1 (1.000) |     2.62 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           48 |       43 | 2024-09-03 | FlyQuest      | W   | 1.000      | 0.889        | -                | 0.307 (0.273)    | 1 (1.000) |     0.50 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           47 |       84 | 2024-09-01 | Spirit        | L   | 1.000      | -            | -                | -                | -         |    -9.30 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           46 |       96 | 2024-08-31 | MOUZ          | W   | 1.000      | 0.769        | 1.000 (0.769)    | 0.395 (0.303)    | 1 (1.000) |    21.18 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           45 |      102 | 2024-08-31 | paiN          | W   | 1.000      | 0.769        | 0.419 (0.322)    | 0.963 (0.740)    | 1 (1.000) |     9.58 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           44 |      121 | 2024-08-30 | FURIA         | W   | 1.000      | 0.769        | 0.317 (0.244)    | 0.531 (0.408)    | 1 (1.000) |     9.74 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           43 |      159 | 2024-08-29 | HEROIC        | W   | 1.000      | 0.769        | 0.207 (0.159)    | 0.368 (0.283)    | 1 (1.000) |     3.86 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           42 |      189 | 2024-08-28 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |    -8.59 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           41 |      257 | 2024-08-27 | Falcons       | W   | 1.000      | -            | -                | -                | -         |     7.99 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           40 |      265 | 2024-08-27 | FURIA         | L   | 1.000      | -            | -                | -                | -         |   -22.39 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           39 |      310 | 2024-08-26 | 9 Pandas      | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.05 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           38 |      326 | 2024-08-26 | Cloud9        | W   | 1.000      | -            | -                | -                | -         |     0.49 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           37 |      346 | 2024-08-26 | B8            | W   | 1.000      | -            | -                | -                | -         |     0.94 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           36 |      387 | 2024-08-25 | Aurora        | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.94 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           35 |      877 | 2024-08-09 | The MongolZ   | L   | 1.000      | -            | -                | -                | -         |   -20.11 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           34 |      904 | 2024-08-08 | Complexity    | L   | 1.000      | -            | -                | -                | -         |   -25.63 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           33 |      947 | 2024-08-07 | Falcons       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     5.29 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           32 |     1342 | 2024-07-28 | The MongolZ   | L   | 0.945      | -            | -                | -                | -         |   -19.48 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           31 |     1379 | 2024-07-26 | 3DMAX         | W   | 0.933      | 0.650        | 0.469 (0.284)    | 0.926 (0.562)    | 1 (0.933) |     2.75 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           30 |     1424 | 2024-07-25 | AMKAL         | W   | 0.925      | -            | -                | -                | -         |     0.80 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           29 |     1456 | 2024-07-24 | DMS           | W   | 0.919      | 0.650        | -                | 0.484 (0.289)    | -         |     0.17 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           28 |     1463 | 2024-07-24 | Revenant      | W   | 0.918      | 0.650        | -                | 0.635 (0.379)    | -         |     0.22 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           27 |     2471 | 2024-06-06 | BetBoom       | L   | 0.600      | -            | -                | -                | -         |   -17.93 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           26 |     2488 | 2024-06-06 | BIG           | W   | 0.599      | -            | -                | -                | -         |     0.71 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           25 |     2496 | 2024-06-06 | FURIA         | L   | 0.598      | -            | -                | -                | -         |   -15.01 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           24 |     2524 | 2024-06-05 | fnatic        | L   | 0.594      | -            | -                | -                | -         |   -17.79 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           23 |     2547 | 2024-06-05 | Complexity    | L   | 0.591      | -            | -                | -                | -         |   -15.54 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           22 |     2849 | 2024-05-23 | Liquid        | W   | 0.507      | 0.769        | 0.371 (0.144)    | -                | -         |     3.15 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           21 |     2893 | 2024-05-22 | GamerLegion   | W   | 0.500      | -            | -                | -                | -         |     0.20 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           20 |     2932 | 2024-05-21 | BetBoom       | W   | 0.494      | 0.769        | 0.232 (0.088)    | -                | -         |     0.53 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           19 |     3088 | 2024-05-16 | SAW           | W   | 0.461      | 0.769        | 0.323 (0.114)    | 0.768 (0.272)    | -         |     2.05 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           18 |     3100 | 2024-05-16 | PARIVISION    | W   | 0.459      | -            | -                | -                | -         |     0.18 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           17 |     3563 | 2024-04-27 | SAW           | L   | 0.334      | -            | -                | -                | -         |    -9.13 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           16 |     3591 | 2024-04-26 | FaZe          | L   | 0.327      | -            | -                | -                | -         |    -7.42 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           15 |     3618 | 2024-04-25 | fnatic        | W   | 0.321      | -            | -                | -                | -         |     0.51 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           14 |     3638 | 2024-04-24 | Imperial      | W   | 0.314      | -            | -                | -                | -         |     0.12 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           13 |     3660 | 2024-04-23 | Astralis      | L   | 0.307      | -            | -                | -                | -         |    -8.29 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           12 |     3715 | 2024-04-20 | Sashi         | L   | 0.288      | -            | -                | -                | -         |    -8.96 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           11 |     3765 | 2024-04-19 | Sashi         | W   | 0.281      | -            | -                | -                | -         |     0.10 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           10 |     3775 | 2024-04-19 | BetBoom       | W   | 0.280      | -            | -                | -                | -         |     0.25 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            9 |     4334 | 2024-03-29 | Natus Vincere | L   | 0.140      | -            | -                | -                | -         |    -1.62 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            8 |     4442 | 2024-03-23 | Virtus.pro    | W   | 0.100      | -            | -                | -                | -         |     0.42 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            7 |     4457 | 2024-03-22 | FaZe          | W   | 0.092      | -            | -                | -                | -         |     0.72 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            6 |     4474 | 2024-03-21 | MOUZ          | L   | 0.087      | -            | -                | -                | -         |    -1.33 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            5 |     4482 | 2024-03-21 | Vitality      | W   | 0.086      | 1.000        | 1.000 (0.086)    | -                | -         |     1.59 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            4 |     4521 | 2024-03-19 | GamerLegion   | W   | 0.073      | -            | -                | -                | -         |     0.00 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            3 |     4529 | 2024-03-18 | HEROIC        | L   | 0.066      | -            | -                | -                | -         |    -2.00 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            2 |     4552 | 2024-03-17 | paiN          | W   | 0.060      | -            | -                | -                | -         |     0.50 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            1 |     4563 | 2024-03-17 | The MongolZ   | W   | 0.059      | -            | -                | -                | -         |     0.82 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($304,352.74)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.97) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-01 |      1.000 | $125,000.00    | $125,000.00     |
| 2024-08-09 |      1.000 | $4,500.00      | $4,500.00       |
| 2024-07-28 |      0.947 | $35,000.00     | $33,138.89      |
| 2024-06-09 |      0.620 | $8,000.00      | $4,962.38       |
| 2024-05-23 |      0.507 | $250,000.00    | $126,770.58     |
| 2024-05-12 |      0.434 | $7,000.00      | $3,034.99       |
| 2024-03-31 |      0.154 | $45,000.00     | $6,945.90       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
