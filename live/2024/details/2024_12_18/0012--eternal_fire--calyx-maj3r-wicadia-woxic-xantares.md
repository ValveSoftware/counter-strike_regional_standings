### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: Calyx, MAJ3R, Wicadia, woxic, XANTARES<br />
Global Rank: [12](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [9]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  1440.5<br />
<br />
Final Rank Value (1440.5) = Starting Rank Value (1463.7) + Head To Head Adjustments (-23.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.696[<sup>1</sup>](#table2)
- Bounty Collected: 0.617[<sup>2</sup>](#table1)
- Opponent Network: 0.252[<sup>2</sup>](#table1)
- LAN Wins: 0.657[<sup>2</sup>](#table1)

The average of these factors is 0.555<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1463.7
- 400 + ( ( 0.555 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 1463.7


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
|           37 |      483 | 2024-11-23 | Astralis      | L   | 1.000      | -            | -                | -                | -         |   -19.42 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           36 |      520 | 2024-11-21 | Sashi         | L   | 1.000      | -            | -                | -                | -         |   -28.61 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           35 |      532 | 2024-11-21 | 3DMAX         | L   | 1.000      | -            | -                | -                | -         |   -19.80 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           34 |      547 | 2024-11-20 | Aurora        | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.70 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           33 |     1096 | 2024-10-26 | B8            | L   | 0.847      | -            | -                | -                | -         |   -22.18 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           32 |     1111 | 2024-10-26 | Falcons       | W   | 0.845      | -            | -                | -                | 1 (0.845) |     2.27 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           31 |     1133 | 2024-10-25 | B8            | L   | 0.838      | -            | -                | -                | -         |   -22.66 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           30 |     1424 | 2024-10-09 | The MongolZ   | L   | 0.733      | -            | -                | -                | -         |    -4.39 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           29 |     1463 | 2024-10-08 | G2            | W   | 0.727      | 0.624        | 1.000 (0.454)    | 0.476 (0.216)    | 1 (0.727) |    20.99 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           28 |     1484 | 2024-10-07 | Astralis      | L   | 0.720      | -            | -                | -                | -         |   -17.01 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           27 |     2043 | 2024-09-22 | Natus Vincere | L   | 0.621      | -            | -                | -                | -         |    -3.26 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           26 |     2074 | 2024-09-21 | MIBR          | W   | 0.613      | 0.889        | 0.184 (0.100)    | 0.681 (0.371)    | 1 (0.613) |     9.90 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           25 |     2123 | 2024-09-19 | Vitality      | W   | 0.601      | 0.889        | 1.000 (0.534)    | 0.426 (0.228)    | 1 (0.601) |    16.44 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           24 |     2168 | 2024-09-18 | The MongolZ   | W   | 0.592      | 0.889        | 1.000 (0.526)    | 0.734 (0.387)    | 1 (0.592) |    15.90 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           23 |     2463 | 2024-09-07 | Natus Vincere | L   | 0.521      | -            | -                | -                | -         |    -2.62 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           22 |     2581 | 2024-09-04 | Sangal        | W   | 0.499      | 0.889        | 0.158 (0.070)    | 0.407 (0.181)    | 1 (0.499) |     3.77 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           21 |     2620 | 2024-09-03 | FlyQuest      | W   | 0.492      | 0.889        | 0.161 (0.070)    | 0.498 (0.218)    | 1 (0.492) |     4.06 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           20 |     2661 | 2024-09-01 | Spirit        | L   | 0.479      | -            | -                | -                | -         |    -1.02 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           19 |     2673 | 2024-08-31 | MOUZ          | W   | 0.473      | 0.769        | 0.620 (0.226)    | 0.517 (0.188)    | 1 (0.473) |    12.83 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           18 |     2679 | 2024-08-31 | paiN          | W   | 0.472      | 0.769        | 0.234 (0.085)    | 0.744 (0.270)    | 1 (0.472) |     8.79 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           17 |     2698 | 2024-08-30 | FURIA         | W   | 0.465      | 0.769        | 0.195 (0.070)    | 0.635 (0.227)    | -         |     9.70 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           16 |     2736 | 2024-08-29 | HEROIC        | W   | 0.459      | 0.769        | 0.727 (0.256)    | 0.656 (0.231)    | -         |    11.50 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           15 |     2766 | 2024-08-28 | MOUZ          | L   | 0.454      | -            | -                | -                | -         |    -1.68 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           14 |     2834 | 2024-08-27 | Falcons       | W   | 0.447      | -            | -                | -                | -         |     1.91 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           13 |     2842 | 2024-08-27 | FURIA         | L   | 0.446      | -            | -                | -                | -         |    -4.62 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           12 |     2887 | 2024-08-26 | 9 Pandas      | W   | 0.441      | -            | -                | -                | -         |     2.06 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           11 |     2903 | 2024-08-26 | Cloud9        | W   | 0.440      | -            | -                | -                | -         |     1.67 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           10 |     2923 | 2024-08-26 | B8            | W   | 0.439      | -            | -                | -                | -         |     2.28 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            9 |     2964 | 2024-08-25 | Aurora        | W   | 0.433      | -            | -                | -                | -         |     0.71 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            8 |     3454 | 2024-08-09 | The MongolZ   | L   | 0.327      | -            | -                | -                | -         |    -1.00 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            7 |     3481 | 2024-08-08 | Complexity    | L   | 0.320      | -            | -                | -                | -         |    -6.03 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            6 |     3524 | 2024-08-07 | Falcons       | W   | 0.313      | -            | -                | -                | -         |     0.90 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            5 |     3919 | 2024-07-28 | The MongolZ   | L   | 0.244      | -            | -                | -                | -         |    -0.71 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            4 |     3956 | 2024-07-26 | 3DMAX         | W   | 0.232      | -            | -                | -                | -         |     3.93 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            3 |     4001 | 2024-07-25 | AMKAL         | W   | 0.225      | -            | -                | -                | -         |     0.24 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            2 |     4033 | 2024-07-24 | DMS           | W   | 0.219      | -            | -                | -                | -         |     0.11 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            1 |     4040 | 2024-07-24 | Revenant      | W   | 0.217      | -            | -                | -                | -         |     0.15 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($125,964.92)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.37) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.854 | $3,000.00      | $2,560.55       |
| 2024-10-13 |      0.761 | $5,000.00      | $3,803.71       |
| 2024-09-22 |      0.621 | $80,000.00     | $49,652.20      |
| 2024-09-01 |      0.479 | $125,000.00    | $59,850.28      |
| 2024-08-09 |      0.327 | $4,500.00      | $1,473.57       |
| 2024-07-28 |      0.246 | $35,000.00     | $8,624.61       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
