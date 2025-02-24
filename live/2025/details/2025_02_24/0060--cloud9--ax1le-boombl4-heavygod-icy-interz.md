### Roster Details<br />
Team Name: Cloud9<br />
Roster: Ax1Le, Boombl4, HeavyGod, ICY, interz<br />
Global Rank: [60](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [44]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  893.4<br />
<br />
Final Rank Value (893.4) = Starting Rank Value (850.6) + Head To Head Adjustments (42.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.373[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.259[<sup>2</sup>](#table1)

The average of these factors is 0.237<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 850.6
- 400 + ( ( 0.237 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 850.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     1078 | 2024-12-02 | Complexity        | L   | 0.636      | -            | -                | -                | -         |    -4.27 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           18 |     1098 | 2024-11-30 | paiN              | L   | 0.629      | -            | -                | -                | -         |    -0.70 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           17 |     1127 | 2024-11-30 | fnatic            | W   | 0.623      | 0.143        | 0.065 (0.006)    | 0.542 (0.048)    | 1 (0.623) |    13.91 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           16 |     1132 | 2024-11-29 | Liquid            | L   | 0.622      | -            | -                | -                | -         |    -0.80 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           15 |     1332 | 2024-11-19 | FaZe              | L   | 0.551      | -            | -                | -                | -         |    -0.07 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           14 |     1338 | 2024-11-18 | SINNERS           | W   | 0.549      | 0.143        | 0.028 (0.002)    | 0.546 (0.043)    | 1 (0.549) |     9.45 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           13 |     1351 | 2024-11-17 | HEROIC            | W   | 0.542      | 0.143        | 0.125 (0.010)    | 0.531 (0.041)    | 1 (0.542) |    12.55 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           12 |     1362 | 2024-11-17 | Nemiga            | W   | 0.537      | 0.143        | 0.177 (0.014)    | 0.432 (0.033)    | 1 (0.537) |    12.45 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           11 |     1375 | 2024-11-16 | FaZe              | L   | 0.536      | -            | -                | -                | -         |    -0.05 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           10 |     1905 | 2024-10-25 | fnatic            | L   | 0.384      | -            | -                | -                | -         |    -3.19 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            9 |     1933 | 2024-10-22 | 9z                | W   | 0.365      | 0.477        | 0.016 (0.003)    | 0.166 (0.029)    | 0 (0.000) |     4.67 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            8 |     1939 | 2024-10-22 | The MongolZ       | L   | 0.364      | -            | -                | -                | -         |    -0.03 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            7 |     2158 | 2024-10-11 | Passion UA        | L   | 0.290      | -            | -                | -                | -         |    -2.70 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            6 |     3144 | 2024-09-13 | Gaimin Gladiators | L   | 0.104      | -            | -                | -                | -         |    -1.83 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            5 |     3308 | 2024-09-07 | Zero Tenacity     | W   | 0.065      | 0.384        | 0.027 (0.001)    | 0.657 (0.016)    | 0 (0.000) |     1.02 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            4 |     3332 | 2024-09-06 | BetBoom           | W   | 0.059      | 0.384        | 0.099 (0.002)    | 0.513 (0.012)    | 0 (0.000) |     1.22 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            3 |     3379 | 2024-09-05 | ALTERNATE aTTaX   | W   | 0.051      | 0.384        | 0.020 (0.000)    | 0.416 (0.008)    | 0 (0.000) |     0.89 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            2 |     3474 | 2024-09-02 | GamerLegion       | W   | 0.031      | 0.384        | 0.005 (0.000)    | 0.031 (0.000)    | 0 (0.000) |     0.25 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            1 |     3558 | 2024-08-29 | Insilio           | W   | 0.005      | 0.384        | 0.004 (0.000)    | 0.127 (0.000)    | 0 (0.000) |     0.05 | Ax1Le, Boombl4, HeavyGod, ICY, interz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,735.50)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.644 | $10,000.00     | $6,437.20       |
| 2024-09-07 |      0.065 | $20,000.00     | $1,298.30       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
