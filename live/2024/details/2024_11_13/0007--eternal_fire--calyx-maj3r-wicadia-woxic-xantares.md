### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: Calyx, MAJ3R, Wicadia, woxic, XANTARES<br />
Global Rank: [7](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_13.md)<br />
Regional Rank: [6]( ../../standings_europe_2024_11_13.md)<br />
<br />
Final Rank Value:  1659.7<br />
<br />
Final Rank Value (1659.7) = Starting Rank Value (1711.1) + Head To Head Adjustments (-51.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.736[<sup>1</sup>](#table2)
- Bounty Collected: 0.666[<sup>2</sup>](#table1)
- Opponent Network: 0.312[<sup>2</sup>](#table1)
- LAN Wins: 0.913[<sup>2</sup>](#table1)

The average of these factors is 0.657<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1711.1
- 400 + ( ( 0.657 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 1711.1


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
|           41 |      387 | 2024-10-26 | B8            | L   | 1.000      | -            | -                | -                | -         |   -28.39 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           40 |      402 | 2024-10-26 | Falcons       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.44 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           39 |      424 | 2024-10-25 | B8            | L   | 1.000      | -            | -                | -                | -         |   -29.07 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           38 |      715 | 2024-10-09 | The MongolZ   | L   | 0.966      | -            | -                | -                | -         |   -13.80 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           37 |      754 | 2024-10-08 | G2            | W   | 0.960      | 0.624        | 1.000 (0.599)    | 0.342 (0.205)    | 1 (0.960) |    23.88 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           36 |      775 | 2024-10-07 | Astralis      | L   | 0.953      | -            | -                | -                | -         |   -24.87 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           35 |     1334 | 2024-09-22 | Natus Vincere | L   | 0.854      | -            | -                | -                | -         |    -6.38 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           34 |     1365 | 2024-09-21 | MIBR          | W   | 0.846      | 0.889        | 0.138 (0.104)    | 0.548 (0.413)    | 1 (0.846) |     4.46 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           33 |     1414 | 2024-09-19 | Vitality      | W   | 0.834      | 0.889        | 1.000 (0.742)    | 0.333 (0.247)    | 1 (0.834) |    18.74 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           32 |     1459 | 2024-09-18 | The MongolZ   | W   | 0.826      | 0.889        | 1.000 (0.734)    | 0.636 (0.467)    | 1 (0.826) |    15.13 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           31 |     1754 | 2024-09-07 | Natus Vincere | L   | 0.754      | -            | -                | -                | -         |    -5.66 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           30 |     1872 | 2024-09-04 | Sangal        | W   | 0.733      | 0.889        | 0.176 (0.114)    | 0.515 (0.335)    | 1 (0.733) |     4.11 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           29 |     1911 | 2024-09-03 | FlyQuest      | W   | 0.725      | 0.889        | -                | 0.487 (0.314)    | 1 (0.725) |     2.95 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           28 |     1952 | 2024-09-01 | Spirit        | L   | 0.712      | -            | -                | -                | -         |    -5.62 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           27 |     1964 | 2024-08-31 | MOUZ          | W   | 0.707      | 0.769        | 0.454 (0.247)    | -                | 1 (0.707) |    12.47 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           26 |     1970 | 2024-08-31 | paiN          | W   | 0.705      | 0.769        | 0.195 (0.106)    | 0.735 (0.398)    | 1 (0.705) |     7.81 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           25 |     1989 | 2024-08-30 | FURIA         | W   | 0.699      | 0.769        | 0.174 (0.093)    | 0.457 (0.245)    | 1 (0.699) |     8.12 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           24 |     2027 | 2024-08-29 | HEROIC        | W   | 0.692      | 0.769        | 0.549 (0.292)    | 0.505 (0.269)    | -         |    10.24 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           23 |     2057 | 2024-08-28 | MOUZ          | L   | 0.688      | -            | -                | -                | -         |    -8.81 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           22 |     2125 | 2024-08-27 | Falcons       | W   | 0.680      | -            | -                | -                | -         |     2.49 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           21 |     2133 | 2024-08-27 | FURIA         | L   | 0.679      | -            | -                | -                | -         |   -13.85 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           20 |     2178 | 2024-08-26 | 9 Pandas      | W   | 0.674      | -            | -                | -                | -         |     0.92 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           19 |     2194 | 2024-08-26 | Cloud9        | W   | 0.674      | -            | -                | -                | -         |     0.43 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           18 |     2214 | 2024-08-26 | B8            | W   | 0.672      | -            | -                | -                | -         |     1.85 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           17 |     2255 | 2024-08-25 | Aurora        | W   | 0.666      | -            | -                | -                | -         |     0.85 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           16 |     2745 | 2024-08-09 | The MongolZ   | L   | 0.561      | -            | -                | -                | -         |    -6.00 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           15 |     2772 | 2024-08-08 | Complexity    | L   | 0.554      | -            | -                | -                | -         |   -13.18 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           14 |     2815 | 2024-08-07 | Falcons       | W   | 0.547      | -            | -                | -                | -         |     1.09 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           13 |     3210 | 2024-07-28 | The MongolZ   | L   | 0.477      | -            | -                | -                | -         |    -5.07 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           12 |     3247 | 2024-07-26 | 3DMAX         | W   | 0.466      | 0.650        | 0.384 (0.116)    | 0.766 (0.232)    | -         |     3.37 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           11 |     3292 | 2024-07-25 | AMKAL         | W   | 0.458      | -            | -                | -                | -         |     0.22 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           10 |     3324 | 2024-07-24 | DMS           | W   | 0.452      | -            | -                | -                | -         |     0.10 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            9 |     3331 | 2024-07-24 | Revenant      | W   | 0.451      | -            | -                | -                | -         |     0.12 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            8 |     4339 | 2024-06-06 | BetBoom       | L   | 0.133      | -            | -                | -                | -         |    -4.06 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            7 |     4356 | 2024-06-06 | BIG           | W   | 0.132      | -            | -                | -                | -         |     0.62 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            6 |     4364 | 2024-06-06 | FURIA         | L   | 0.131      | -            | -                | -                | -         |    -2.74 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            5 |     4392 | 2024-06-05 | fnatic        | L   | 0.127      | -            | -                | -                | -         |    -3.75 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            4 |     4415 | 2024-06-05 | Complexity    | L   | 0.124      | -            | -                | -                | -         |    -2.99 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            3 |     4717 | 2024-05-23 | Liquid        | W   | 0.040      | -            | -                | -                | -         |     0.35 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            2 |     4761 | 2024-05-22 | GamerLegion   | W   | 0.033      | -            | -                | -                | -         |     0.02 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            1 |     4800 | 2024-05-21 | BetBoom       | W   | 0.027      | -            | -                | -                | -         |     0.02 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($195,835.75)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.44) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-10-13 |      0.994 | $5,000.00      | $4,970.24       |
| 2024-09-22 |      0.854 | $80,000.00     | $68,316.81      |
| 2024-09-01 |      0.712 | $125,000.00    | $89,013.73      |
| 2024-08-09 |      0.561 | $4,500.00      | $2,523.46       |
| 2024-07-28 |      0.480 | $35,000.00     | $16,790.38      |
| 2024-06-09 |      0.153 | $8,000.00      | $1,225.58       |
| 2024-05-23 |      0.040 | $250,000.00    | $9,995.54       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
