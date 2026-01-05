### Roster Details<br />
Team Name: Virtus.pro<br />
Roster: fame, FL1T, ICY, Perfecto, tO0RO<br />
Global Rank: [50](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [37]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  1216.5<br />
<br />
Final Rank Value (1216.5) = Starting Rank Value (1151.3) + Head To Head Adjustments (65.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.552[<sup>1</sup>](#table2)
- Bounty Collected: 0.498[<sup>2</sup>](#table1)
- Opponent Network: 0.139[<sup>2</sup>](#table1)
- LAN Wins: 0.326[<sup>2</sup>](#table1)

The average of these factors is 0.379<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1151.3
- 400 + ( ( 0.379 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1151.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |     1267 | 2025-11-04 | G2          | L   | 0.790      | -            | -                | -                | -         |    -1.86 | b1st, fame, FL1T, Perfecto, tO0RO     |
|           22 |     1293 | 2025-11-03 | FaZe        | W   | 0.784      | 1.000        | 0.634 (0.497)    | 0.579 (0.454)    | 1 (0.784) |    23.82 | b1st, fame, FL1T, Perfecto, tO0RO     |
|           21 |     1318 | 2025-11-02 | Vitality    | L   | 0.777      | -            | -                | -                | -         |    -0.28 | b1st, fame, FL1T, Perfecto, tO0RO     |
|           20 |     1874 | 2025-10-16 | 3DMAX       | L   | 0.659      | -            | -                | -                | -         |    -1.16 | fame, FL1T, ICY, Perfecto, tO0RO      |
|           19 |     1915 | 2025-10-15 | MIBR        | W   | 0.652      | 1.000        | 0.092 (0.060)    | 0.272 (0.177)    | 1 (0.652) |    11.54 | fame, FL1T, ICY, Perfecto, tO0RO      |
|           18 |     1944 | 2025-10-14 | The Huns    | W   | 0.645      | 1.000        | 0.030 (0.020)    | 0.459 (0.296)    | 1 (0.645) |     8.86 | fame, FL1T, ICY, Perfecto, tO0RO      |
|           17 |     1953 | 2025-10-13 | Legacy      | L   | 0.643      | -            | -                | -                | -         |    -0.98 | fame, FL1T, ICY, Perfecto, tO0RO      |
|           16 |     2958 | 2025-09-17 | paiN        | L   | 0.467      | -            | -                | -                | -         |    -1.60 | fame, FL1T, ICY, Perfecto, tO0RO      |
|           15 |     2992 | 2025-09-16 | 3DMAX       | W   | 0.459      | 1.000        | 0.523 (0.240)    | 0.515 (0.236)    | 1 (0.459) |    13.78 | fame, FL1T, ICY, Perfecto, tO0RO      |
|           14 |     3023 | 2025-09-15 | Lynn Vision | W   | 0.452      | 1.000        | 0.131 (0.059)    | 0.248 (0.112)    | 1 (0.452) |     8.60 | fame, FL1T, ICY, Perfecto, tO0RO      |
|           13 |     3061 | 2025-09-14 | Astralis    | L   | 0.445      | -            | -                | -                | -         |    -1.14 | fame, FL1T, ICY, Perfecto, tO0RO      |
|           12 |     3151 | 2025-09-12 | Falcons     | L   | 0.433      | -            | -                | -                | -         |    -0.23 | fame, FL1T, ICY, Perfecto, tO0RO      |
|           11 |     3551 | 2025-08-29 | M80         | L   | 0.339      | -            | -                | -                | -         |    -1.50 | electroNic, fame, FL1T, ICY, Perfecto |
|           10 |     3618 | 2025-08-27 | GamerLegion | L   | 0.326      | -            | -                | -                | -         |    -1.03 | electroNic, fame, FL1T, ICY, Perfecto |
|            9 |     3725 | 2025-08-21 | MOUZ        | L   | 0.286      | -            | -                | -                | -         |    -0.25 | electroNic, fame, FL1T, ICY, Perfecto |
|            8 |     3901 | 2025-08-15 | Spirit      | L   | 0.247      | -            | -                | -                | -         |    -0.18 | electroNic, fame, FL1T, ICY, Perfecto |
|            7 |     4164 | 2025-08-09 | FaZe        | W   | 0.207      | 0.624        | 0.634 (0.082)    | 0.579 (0.075)    | 0 (0.000) |     6.41 | electroNic, fame, FL1T, ICY, Perfecto |
|            6 |     4216 | 2025-08-06 | MIBR        | W   | 0.186      | 0.624        | 0.092 (0.011)    | 0.272 (0.031)    | 0 (0.000) |     3.05 | electroNic, fame, FL1T, ICY, Perfecto |
|            5 |     4419 | 2025-07-25 | HEROIC      | L   | 0.107      | -            | -                | -                | -         |    -0.32 | electroNic, fame, FL1T, ICY, Perfecto |
|            4 |     4440 | 2025-07-24 | GamerLegion | L   | 0.099      | -            | -                | -                | -         |    -0.30 | electroNic, fame, FL1T, ICY, Perfecto |
|            3 |     4453 | 2025-07-23 | TYLOO       | W   | 0.092      | 0.769        | 0.170 (0.012)    | 0.135 (0.009)    | 1 (0.092) |     1.41 | electroNic, fame, FL1T, ICY, Perfecto |
|            2 |     4585 | 2025-07-16 | MIBR        | L   | 0.046      | -            | -                | -                | -         |    -0.70 | electroNic, fame, FL1T, ICY, Perfecto |
|            1 |     4600 | 2025-07-15 | TYLOO       | L   | 0.040      | -            | -                | -                | -         |    -0.67 | electroNic, fame, FL1T, ICY, Perfecto |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($66,006.19)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-09 |      0.819 | $25,000.00     | $20,463.76      |
| 2025-10-19 |      0.679 | $30,000.00     | $20,356.89      |
| 2025-09-21 |      0.494 | $23,330.00     | $11,535.48      |
| 2025-09-01 |      0.361 | $5,000.00      | $1,807.35       |
| 2025-08-24 |      0.306 | $20,000.00     | $6,114.45       |
| 2025-08-17 |      0.260 | $18,750.00     | $4,877.20       |
| 2025-07-25 |      0.107 | $4,500.00      | $483.56         |
| 2025-07-20 |      0.074 | $5,000.00      | $367.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
