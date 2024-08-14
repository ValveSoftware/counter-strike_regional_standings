### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: Calyx, MAJ3R, Wicadia, woxic, XANTARES<br />
Global Rank: [12](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [9]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1568.6<br />
<br />
Final Rank Value (1568.6) = Starting Rank Value (1639.1) + Head To Head Adjustments (-70.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.866[<sup>1</sup>](#table2)
- Bounty Collected: 0.542[<sup>2</sup>](#table1)
- Opponent Network: 0.306[<sup>2</sup>](#table1)
- LAN Wins: 0.797[<sup>2</sup>](#table1)

The average of these factors is 0.628<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1639.1
- 400 + ( ( 0.628 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 1639.1


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
|           36 |      154 | 2024-08-09 | The MongolZ   | L   | 1.000      | -            | -                | -                | -         |   -12.28 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           35 |      181 | 2024-08-08 | Complexity    | L   | 1.000      | -            | -                | -                | -         |   -16.86 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           34 |      224 | 2024-08-07 | Falcons       | W   | 1.000      | -            | -                | -                | 1 (1.000) |    11.23 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           33 |      619 | 2024-07-28 | The MongolZ   | L   | 1.000      | -            | -                | -                | -         |   -11.34 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           32 |      656 | 2024-07-26 | 3DMAX         | W   | 1.000      | 0.650        | 0.508 (0.330)    | 1.000 (0.650)    | 1 (1.000) |     6.37 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           31 |      701 | 2024-07-25 | AMKAL         | W   | 1.000      | 0.650        | -                | 0.404 (0.263)    | 1 (1.000) |     2.84 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           30 |      733 | 2024-07-24 | DMS           | W   | 1.000      | 0.650        | -                | 0.514 (0.334)    | 1 (1.000) |     0.61 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           29 |      740 | 2024-07-24 | Revenant      | W   | 1.000      | 0.650        | -                | 0.402 (0.262)    | 1 (1.000) |     0.68 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           28 |     1748 | 2024-06-06 | BetBoom       | L   | 0.739      | -            | -                | -                | -         |   -18.78 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           27 |     1765 | 2024-06-06 | BIG           | W   | 0.738      | 0.715        | 0.155 (0.082)    | -                | 1 (0.738) |     3.57 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           26 |     1773 | 2024-06-06 | FURIA         | L   | 0.737      | -            | -                | -                | -         |   -13.36 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           25 |     1801 | 2024-06-05 | fnatic        | L   | 0.733      | -            | -                | -                | -         |   -18.53 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           24 |     1824 | 2024-06-05 | Complexity    | L   | 0.730      | -            | -                | -                | -         |   -11.21 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           23 |     2126 | 2024-05-23 | Liquid        | W   | 0.646      | 0.769        | 0.432 (0.215)    | 0.462 (0.229)    | -         |    11.62 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           22 |     2170 | 2024-05-22 | GamerLegion   | W   | 0.639      | 0.769        | 0.160 (0.079)    | -                | -         |     1.04 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           21 |     2209 | 2024-05-21 | BetBoom       | W   | 0.633      | 0.769        | 0.223 (0.108)    | 0.456 (0.222)    | -         |     2.86 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           20 |     2365 | 2024-05-16 | SAW           | W   | 0.600      | 0.769        | -                | 0.624 (0.288)    | -         |     5.25 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           19 |     2377 | 2024-05-16 | PARIVISION    | W   | 0.598      | 0.769        | -                | 0.627 (0.288)    | -         |     0.86 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           18 |     2840 | 2024-04-27 | SAW           | L   | 0.473      | -            | -                | -                | -         |   -11.07 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           17 |     2868 | 2024-04-26 | FaZe          | L   | 0.466      | -            | -                | -                | -         |    -5.39 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           16 |     2895 | 2024-04-25 | fnatic        | W   | 0.460      | 0.889        | 0.352 (0.144)    | 0.639 (0.261)    | 1 (0.460) |     3.59 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           15 |     2915 | 2024-04-24 | Imperial      | W   | 0.453      | 0.889        | 0.213 (0.086)    | 0.653 (0.263)    | 1 (0.453) |     1.32 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           14 |     2937 | 2024-04-23 | Astralis      | L   | 0.446      | -            | -                | -                | -         |    -6.09 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           13 |     2992 | 2024-04-20 | Sashi         | L   | 0.427      | -            | -                | -                | -         |   -12.82 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           12 |     3042 | 2024-04-19 | Sashi         | W   | 0.420      | -            | -                | -                | -         |     0.58 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           11 |     3052 | 2024-04-19 | BetBoom       | W   | 0.419      | -            | -                | -                | -         |     1.77 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           10 |     3611 | 2024-03-29 | Natus Vincere | L   | 0.279      | -            | -                | -                | -         |    -1.26 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            9 |     3719 | 2024-03-23 | Virtus.pro    | W   | 0.238      | 1.000        | 0.512 (0.122)    | -                | 1 (0.238) |     3.34 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            8 |     3734 | 2024-03-22 | FaZe          | W   | 0.231      | 1.000        | 0.557 (0.129)    | -                | 1 (0.231) |     4.34 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            7 |     3751 | 2024-03-21 | MOUZ          | L   | 0.226      | -            | -                | -                | -         |    -1.99 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            6 |     3759 | 2024-03-21 | Vitality      | W   | 0.225      | 1.000        | 0.606 (0.136)    | -                | -         |     5.28 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            5 |     3798 | 2024-03-19 | GamerLegion   | W   | 0.212      | -            | -                | -                | -         |     0.04 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            4 |     3806 | 2024-03-18 | HEROIC        | L   | 0.205      | -            | -                | -                | -         |    -4.60 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            3 |     3829 | 2024-03-17 | paiN          | W   | 0.199      | -            | -                | -                | -         |     2.74 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            2 |     3840 | 2024-03-17 | The MongolZ   | W   | 0.198      | -            | -                | -                | -         |     5.11 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            1 |     4511 | 2024-02-17 | BetBoom       | W   | 0.006      | -            | -                | -                | -         |     0.03 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($224,278.57)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.70) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-09 |      1.000 | $4,500.00      | $4,500.00       |
| 2024-07-28 |      1.000 | $35,000.00     | $35,000.00      |
| 2024-06-09 |      0.759 | $8,000.00      | $6,073.72       |
| 2024-05-23 |      0.646 | $250,000.00    | $161,500.19     |
| 2024-05-12 |      0.572 | $7,000.00      | $4,007.42       |
| 2024-03-31 |      0.293 | $45,000.00     | $13,197.23      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
