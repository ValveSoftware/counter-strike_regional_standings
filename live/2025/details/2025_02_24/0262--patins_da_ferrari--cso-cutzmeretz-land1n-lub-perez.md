### Roster Details<br />
Team Name: Patins da Ferrari<br />
Roster: CSO, CutzMeretz, land1n, lub, perez<br />
Global Rank: [262](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_24.md)<br />
Regional Rank: [82]( ../../standings_americas_2025_02_24.md)<br />
<br />
Final Rank Value:  512.1<br />
<br />
Final Rank Value (512.1) = Starting Rank Value (501.6) + Head To Head Adjustments (10.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 501.6
- 400 + ( ( 0.053 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 501.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1186 | 2024-11-26 | 2070            | L   | 0.599      | -            | -                | -                | -         |    -6.90 | CSO, CutzMeretz, land1n, lub, perez |
|           13 |     1226 | 2024-11-23 | LaChampionsLiga | W   | 0.581      | 0.371        | 0.003 (0.001)    | 0.205 (0.044)    | 0 (0.000) |    11.19 | CSO, CutzMeretz, land1n, lub, perez |
|           12 |     1258 | 2024-11-22 | JOGA DE TERNO   | L   | 0.574      | -            | -                | -                | -         |    -9.45 | CSO, CutzMeretz, land1n, lub, perez |
|           11 |     1315 | 2024-11-20 | BeBold          | W   | 0.561      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.03 | CSO, CutzMeretz, land1n, lub, perez |
|           10 |     1331 | 2024-11-19 | NITRO           | L   | 0.552      | -            | -                | -                | -         |    -5.80 | CSO, CutzMeretz, land1n, lub, perez |
|            9 |     1643 | 2024-11-06 | Solid           | L   | 0.467      | -            | -                | -                | -         |    -2.25 | CSO, CutzMeretz, Lcm, lub, perez    |
|            8 |     1660 | 2024-11-05 | VELOX           | W   | 0.461      | 0.371        | 0.000 (0.000)    | 0.127 (0.022)    | 0 (0.000) |     7.22 | CSO, CutzMeretz, Lcm, lub, perez    |
|            7 |     1680 | 2024-11-04 | Players         | L   | 0.453      | -            | -                | -                | -         |    -3.35 | CSO, CutzMeretz, Lcm, lub, perez    |
|            6 |     1745 | 2024-11-01 | Yawara          | W   | 0.433      | 0.371        | 0.002 (0.000)    | 0.391 (0.063)    | 0 (0.000) |     9.76 | CSO, CutzMeretz, Lcm, lub, perez    |
|            5 |     1788 | 2024-10-30 | BeBold          | W   | 0.420      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.65 | CSO, CutzMeretz, Lcm, lub, perez    |
|            4 |     1826 | 2024-10-28 | GameHunters     | L   | 0.407      | -            | -                | -                | -         |    -4.02 | CSO, CutzMeretz, Lcm, lub, perez    |
|            3 |     2620 | 2024-09-27 | Dusty Roots     | L   | 0.200      | -            | -                | -                | -         |    -1.17 | CSO, CutzMeretz, jz, Lcm, perez     |
|            2 |     2628 | 2024-09-27 | KRÜ             | W   | 0.200      | 0.143        | 0.001 (0.000)    | 0.198 (0.006)    | 0 (0.000) |     4.70 | CSO, CutzMeretz, jz, Lcm, perez     |
|            1 |     3482 | 2024-09-01 | Fluxo           | L   | 0.027      | -            | -                | -                | -         |    -0.07 | CSO, CutzMeretz, Maluk3, perez, prt |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
