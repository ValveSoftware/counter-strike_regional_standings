### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: Calyx, MAJ3R, Wicadia, woxic, XANTARES<br />
Global Rank: [5](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_23.md)<br />
Regional Rank: [5]( ../../standings_europe_2024_10_23.md)<br />
<br />
Final Rank Value:  1829.1<br />
<br />
Final Rank Value (1829.1) = Starting Rank Value (1919.5) + Head To Head Adjustments (-90.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.988[<sup>1</sup>](#table2)
- Bounty Collected: 0.724[<sup>2</sup>](#table1)
- Opponent Network: 0.394[<sup>2</sup>](#table1)
- LAN Wins: 0.995[<sup>2</sup>](#table1)

The average of these factors is 0.775<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1919.5
- 400 + ( ( 0.775 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 1919.5


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
|           41 |      275 | 2024-10-09 | The MongolZ   | L   | 1.000      | -            | -                | -                | -         |   -21.78 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           40 |      314 | 2024-10-08 | G2            | W   | 1.000      | 0.624        | 1.000 (0.624)    | 0.403 (0.251)    | 1 (1.000) |    19.87 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           39 |      335 | 2024-10-07 | Astralis      | L   | 1.000      | -            | -                | -                | -         |   -29.17 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           38 |      894 | 2024-09-22 | Natus Vincere | L   | 0.993      | -            | -                | -                | -         |    -9.57 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           37 |      925 | 2024-09-21 | MIBR          | W   | 0.986      | 0.889        | 0.259 (0.227)    | 0.592 (0.519)    | 1 (0.986) |     2.22 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           36 |      974 | 2024-09-19 | Vitality      | W   | 0.974      | 0.889        | 1.000 (0.866)    | 0.381 (0.330)    | 1 (0.974) |    17.98 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           35 |     1019 | 2024-09-18 | The MongolZ   | W   | 0.965      | 0.889        | 0.696 (0.597)    | 0.597 (0.513)    | 1 (0.965) |     8.84 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           34 |     1314 | 2024-09-07 | Natus Vincere | L   | 0.893      | -            | -                | -                | -         |    -9.14 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           33 |     1432 | 2024-09-04 | Sangal        | W   | 0.872      | 0.889        | 0.354 (0.275)    | 0.636 (0.493)    | 1 (0.872) |     3.43 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           32 |     1471 | 2024-09-03 | FlyQuest      | W   | 0.865      | 0.889        | 0.266 (0.205)    | 0.464 (0.356)    | 1 (0.865) |     1.04 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           31 |     1512 | 2024-09-01 | Spirit        | L   | 0.852      | -            | -                | -                | -         |   -10.95 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           30 |     1524 | 2024-08-31 | MOUZ          | W   | 0.846      | 0.769        | 1.000 (0.650)    | -                | 1 (0.846) |    14.66 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           29 |     1530 | 2024-08-31 | paiN          | W   | 0.845      | 0.769        | 0.345 (0.224)    | 0.759 (0.493)    | 1 (0.845) |     5.14 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           28 |     1549 | 2024-08-30 | FURIA         | W   | 0.838      | 0.769        | 0.358 (0.231)    | 0.484 (0.312)    | 1 (0.838) |     7.73 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           27 |     1587 | 2024-08-29 | HEROIC        | W   | 0.832      | 0.769        | 0.417 (0.266)    | 0.516 (0.330)    | 1 (0.832) |     6.06 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           26 |     1617 | 2024-08-28 | MOUZ          | L   | 0.827      | -            | -                | -                | -         |   -10.72 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           25 |     1685 | 2024-08-27 | Falcons       | W   | 0.820      | -            | -                | -                | -         |     2.77 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           24 |     1693 | 2024-08-27 | FURIA         | L   | 0.819      | -            | -                | -                | -         |   -18.88 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           23 |     1738 | 2024-08-26 | 9 Pandas      | W   | 0.814      | -            | -                | -                | -         |     0.48 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           22 |     1754 | 2024-08-26 | Cloud9        | W   | 0.813      | -            | -                | -                | -         |     0.32 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           21 |     1774 | 2024-08-26 | B8            | W   | 0.812      | -            | -                | -                | -         |     0.60 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           20 |     1815 | 2024-08-25 | Aurora        | W   | 0.806      | -            | -                | -                | -         |     0.63 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           19 |     2305 | 2024-08-09 | The MongolZ   | L   | 0.700      | -            | -                | -                | -         |   -15.31 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           18 |     2332 | 2024-08-08 | Complexity    | L   | 0.693      | -            | -                | -                | -         |   -17.97 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           17 |     2375 | 2024-08-07 | Falcons       | W   | 0.686      | -            | -                | -                | -         |     1.20 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           16 |     2770 | 2024-07-28 | The MongolZ   | L   | 0.617      | -            | -                | -                | -         |   -13.81 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           15 |     2807 | 2024-07-26 | 3DMAX         | W   | 0.605      | 0.650        | -                | 0.873 (0.344)    | -         |     1.61 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           14 |     2852 | 2024-07-25 | AMKAL         | W   | 0.598      | -            | -                | -                | -         |     0.17 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           13 |     2884 | 2024-07-24 | DMS           | W   | 0.592      | -            | -                | -                | -         |     0.06 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           12 |     2891 | 2024-07-24 | Revenant      | W   | 0.590      | -            | -                | -                | -         |     0.07 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           11 |     3899 | 2024-06-06 | BetBoom       | L   | 0.272      | -            | -                | -                | -         |    -8.42 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           10 |     3916 | 2024-06-06 | BIG           | W   | 0.271      | -            | -                | -                | -         |     0.76 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            9 |     3924 | 2024-06-06 | FURIA         | L   | 0.270      | -            | -                | -                | -         |    -6.59 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            8 |     3952 | 2024-06-05 | fnatic        | L   | 0.266      | -            | -                | -                | -         |    -8.08 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            7 |     3975 | 2024-06-05 | Complexity    | L   | 0.264      | -            | -                | -                | -         |    -6.97 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            6 |     4277 | 2024-05-23 | Liquid        | W   | 0.180      | -            | -                | -                | -         |     1.02 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            5 |     4321 | 2024-05-22 | GamerLegion   | W   | 0.172      | -            | -                | -                | -         |     0.06 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            4 |     4360 | 2024-05-21 | BetBoom       | W   | 0.166      | -            | -                | -                | -         |     0.08 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            3 |     4516 | 2024-05-16 | SAW           | W   | 0.133      | -            | -                | -                | -         |     0.30 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            2 |     4528 | 2024-05-16 | PARIVISION    | W   | 0.132      | -            | -                | -                | -         |     0.04 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            1 |     4991 | 2024-04-27 | SAW           | L   | 0.006      | -            | -                | -                | -         |    -0.19 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($263,719.10)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.97) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-09-22 |      0.993 | $80,000.00     | $79,478.86      |
| 2024-09-01 |      0.852 | $125,000.00    | $106,454.44     |
| 2024-08-09 |      0.700 | $4,500.00      | $3,151.32       |
| 2024-07-28 |      0.619 | $35,000.00     | $21,673.78      |
| 2024-06-09 |      0.293 | $8,000.00      | $2,341.78       |
| 2024-05-23 |      0.180 | $250,000.00    | $44,876.95      |
| 2024-05-12 |      0.106 | $7,000.00      | $741.97         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
