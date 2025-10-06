### Roster Details<br />
Team Name: Aurora<br />
Roster: jottAAA, MAJ3R, Wicadia, woxic, XANTARES<br />
Global Rank: [8](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [6]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  1801.1<br />
<br />
Final Rank Value (1801.1) = Starting Rank Value (1803.3) + Head To Head Adjustments (-2.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.766[<sup>2</sup>](#table1)
- Opponent Network: 0.339[<sup>2</sup>](#table1)
- LAN Wins: 0.760[<sup>2</sup>](#table1)

The average of these factors is 0.716<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1803.3
- 400 + ( ( 0.716 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 1803.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      439 | 2025-09-19 | Liquid            | L   | 1.000      | -            | -                | -                | -         |   -21.41 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           31 |      535 | 2025-09-15 | FURIA             | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.661 (0.661)    | 1 (1.000) |    20.34 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           30 |      578 | 2025-09-14 | TYLOO             | W   | 1.000      | 1.000        | 0.767 (0.767)    | 0.366 (0.366)    | 1 (1.000) |     8.64 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           29 |      671 | 2025-09-12 | Astralis          | W   | 1.000      | 1.000        | 0.813 (0.813)    | 0.439 (0.439)    | 1 (1.000) |    12.67 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           28 |     1191 | 2025-08-24 | The MongolZ       | L   | 0.913      | -            | -                | -                | -         |    -7.59 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           27 |     1201 | 2025-08-23 | Falcons           | W   | 0.908      | 1.000        | 0.906 (0.822)    | 0.360 (0.327)    | 1 (0.908) |    14.79 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           26 |     1221 | 2025-08-22 | HEROIC            | W   | 0.900      | 1.000        | 0.294 (0.265)    | 0.343 (0.308)    | 1 (0.900) |     3.74 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           25 |     1261 | 2025-08-20 | FaZe              | W   | 0.888      | 1.000        | 0.340 (0.302)    | 0.395 (0.350)    | 1 (0.888) |     8.47 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           24 |     1460 | 2025-08-14 | The MongolZ       | L   | 0.847      | -            | -                | -                | -         |    -7.09 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           23 |     1657 | 2025-08-10 | HEROIC            | W   | 0.820      | 0.624        | -                | 0.343 (0.175)    | -         |     3.07 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           22 |     1702 | 2025-08-08 | FlyQuest          | W   | 0.806      | -            | -                | -                | -         |     1.45 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           21 |     1844 | 2025-07-29 | FaZe              | L   | 0.739      | -            | -                | -                | -         |   -16.12 | jottAAA, MAJ3R, Wicadia, woxic, xfl0ud   |
|           20 |     1861 | 2025-07-28 | Spirit            | L   | 0.733      | -            | -                | -                | -         |   -10.79 | jottAAA, MAJ3R, Wicadia, woxic, xfl0ud   |
|           19 |     1919 | 2025-07-26 | Ninjas in Pyjamas | W   | 0.721      | 1.000        | 0.463 (0.334)    | 0.578 (0.416)    | 1 (0.721) |     5.64 | jottAAA, MAJ3R, Wicadia, woxic, xfl0ud   |
|           18 |     2540 | 2025-06-14 | MOUZ              | L   | 0.441      | -            | -                | -                | -         |    -6.96 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           17 |     2590 | 2025-06-13 | G2                | L   | 0.433      | -            | -                | -                | -         |    -5.75 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           16 |     2613 | 2025-06-12 | FURIA             | L   | 0.428      | -            | -                | -                | -         |    -3.74 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           15 |     2619 | 2025-06-12 | FaZe              | W   | 0.427      | -            | -                | -                | 1 (0.427) |     2.96 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           14 |     2869 | 2025-05-23 | The MongolZ       | L   | 0.294      | -            | -                | -                | -         |    -2.44 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           13 |     2904 | 2025-05-21 | HEROIC            | W   | 0.282      | -            | -                | -                | 1 (0.282) |     0.81 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           12 |     2914 | 2025-05-21 | Liquid            | W   | 0.280      | 1.000        | 0.546 (0.153)    | -                | 1 (0.280) |     3.87 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           11 |     2931 | 2025-05-20 | NRG               | W   | 0.275      | -            | -                | -                | -         |     0.40 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           10 |     2957 | 2025-05-19 | HEROIC            | L   | 0.270      | -            | -                | -                | -         |    -7.75 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            9 |     2993 | 2025-05-18 | FURIA             | W   | 0.259      | 1.000        | 1.000 (0.259)    | 0.661 (0.171)    | -         |     6.08 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            8 |     3008 | 2025-05-17 | Astralis          | L   | 0.252      | -            | -                | -                | -         |    -4.46 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            7 |     3036 | 2025-05-16 | The MongolZ       | W   | 0.244      | 1.000        | 1.000 (0.244)    | -                | -         |     5.73 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            6 |     3084 | 2025-05-14 | ODDIK             | W   | 0.231      | -            | -                | -                | -         |     0.73 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            5 |     3118 | 2025-05-13 | Natus Vincere     | L   | 0.226      | -            | -                | -                | -         |    -3.56 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            4 |     3144 | 2025-05-12 | Ninjas in Pyjamas | W   | 0.219      | -            | -                | -                | -         |     1.86 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            3 |     3166 | 2025-05-11 | HOTU              | W   | 0.213      | 1.000        | -                | 0.825 (0.176)    | -         |     0.17 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            2 |     3204 | 2025-05-10 | BIG               | L   | 0.204      | -            | -                | -                | -         |    -5.68 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            1 |     3840 | 2025-04-11 | Passion UA        | L   | 0.013      | -            | -                | -                | -         |    -0.33 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($380,085.28)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-21 |      1.000 | $67,500.00     | $67,500.00      |
| 2025-08-24 |      0.913 | $230,000.00    | $209,891.88     |
| 2025-08-17 |      0.867 | $13,750.00     | $11,920.82      |
| 2025-08-03 |      0.774 | $23,000.00     | $17,798.62      |
| 2025-06-22 |      0.495 | $20,000.00     | $9,900.30       |
| 2025-05-25 |      0.308 | $72,500.00     | $22,365.51      |
| 2025-05-18 |      0.260 | $150,000.00    | $39,015.46      |
| 2025-04-13 |      0.027 | $62,500.00     | $1,692.68       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
