### Roster Details<br />
Team Name: Take Flyte<br />
Roster: cbass, Champ, Grave, jchancE, z0mb1e<br />
Global Rank: [150](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_17.md)<br />
Regional Rank: [37]( ../../standings_americas_2025_01_17.md)<br />
<br />
Final Rank Value:  719.8<br />
<br />
Final Rank Value (719.8) = Starting Rank Value (762.1) + Head To Head Adjustments (-42.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.278[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.191[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 762.1
- 400 + ( ( 0.183 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 762.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |      169 | 2024-12-15 | Alter Iron     | L   | 0.982      | -            | -                | -                | -         |   -14.50 | cbass, Champ, Grave, jchancE, z0mb1e |
|           38 |      192 | 2024-12-14 | Undone         | L   | 0.975      | -            | -                | -                | -         |   -10.30 | cbass, Champ, Grave, jchancE, z0mb1e |
|           37 |      221 | 2024-12-13 | LAG            | W   | 0.968      | 0.143        | 0.004 (0.001)    | 0.083 (0.012)    | 0 (0.000) |     9.74 | cbass, Champ, Grave, jchancE, z0mb1e |
|           36 |      241 | 2024-12-12 | Wanted Goons   | W   | 0.962      | 0.143        | 0.014 (0.002)    | 0.044 (0.006)    | 0 (0.000) |    11.69 | cbass, Champ, Grave, jchancE, z0mb1e |
|           35 |      256 | 2024-12-11 | Undone         | L   | 0.955      | -            | -                | -                | -         |   -10.48 | cbass, Champ, Grave, jchancE, z0mb1e |
|           34 |      268 | 2024-12-10 | Wanted Goons   | W   | 0.948      | 0.143        | 0.014 (0.002)    | 0.044 (0.006)    | 0 (0.000) |    12.06 | cbass, Champ, Grave, jchancE, z0mb1e |
|           33 |      317 | 2024-12-07 | FLUFFY AIMERS  | L   | 0.928      | -            | -                | -                | -         |    -8.24 | cbass, Champ, Grave, jchancE, z0mb1e |
|           32 |      322 | 2024-12-07 | Sharks         | L   | 0.927      | -            | -                | -                | -         |    -2.61 | cbass, Champ, Grave, jchancE, z0mb1e |
|           31 |      352 | 2024-12-06 | Not Mythic     | W   | 0.921      | 0.384        | 0.000 (0.000)    | -                | 1 (0.921) |     3.91 | cbass, Champ, Grave, jchancE, z0mb1e |
|           30 |     1540 | 2024-10-09 | LAG            | L   | 0.535      | -            | -                | -                | -         |   -11.49 | cbass, Champ, Grave, jchancE, z0mb1e |
|           29 |     1545 | 2024-10-09 | LAG            | W   | 0.535      | 0.477        | 0.004 (0.001)    | 0.083 (0.021)    | 0 (0.000) |     5.39 | cbass, Champ, Grave, jchancE, z0mb1e |
|           28 |     1578 | 2024-10-08 | E-Xolos LAZER  | L   | 0.528      | -            | -                | -                | -         |    -8.24 | cbass, Champ, Grave, jchancE, z0mb1e |
|           27 |     1585 | 2024-10-08 | E-Xolos LAZER  | L   | 0.528      | -            | -                | -                | -         |    -8.63 | cbass, Champ, Grave, jchancE, z0mb1e |
|           26 |     1738 | 2024-10-03 | Mythic         | W   | 0.495      | 0.477        | 0.000 (0.000)    | 0.095 (0.023)    | 0 (0.000) |     4.15 | cbass, Champ, Grave, jchancE, z0mb1e |
|           25 |     1745 | 2024-10-03 | Mythic         | W   | 0.494      | 0.477        | -                | 0.095 (0.023)    | 0 (0.000) |     4.30 | cbass, Champ, Grave, jchancE, z0mb1e |
|           24 |     1817 | 2024-10-01 | vagrants       | L   | 0.481      | -            | -                | -                | -         |    -8.20 | cbass, Champ, Grave, jchancE, z0mb1e |
|           23 |     1822 | 2024-10-01 | vagrants       | W   | 0.481      | 0.477        | 0.005 (0.001)    | 0.164 (0.038)    | 0 (0.000) |     7.10 | cbass, Champ, Grave, jchancE, z0mb1e |
|           22 |     1913 | 2024-09-28 | M80            | L   | 0.461      | -            | -                | -                | -         |    -1.11 | cbass, Grave, jchancE, serv0, z0mb1e |
|           21 |     1914 | 2024-09-28 | M80            | L   | 0.461      | -            | -                | -                | -         |    -1.12 | cbass, Champ, Grave, jchancE, z0mb1e |
|           20 |     2045 | 2024-09-25 | Legacy         | L   | 0.441      | -            | -                | -                | -         |    -2.41 | cbass, Champ, Grave, jchancE, z0mb1e |
|           19 |     2050 | 2024-09-25 | Legacy         | L   | 0.441      | -            | -                | -                | -         |    -2.47 | cbass, Champ, Grave, jchancE, z0mb1e |
|           18 |     2289 | 2024-09-18 | NRG            | L   | 0.395      | -            | -                | -                | -         |    -0.91 | cbass, Champ, Grave, jchancE, z0mb1e |
|           17 |     2292 | 2024-09-18 | NRG            | L   | 0.394      | -            | -                | -                | -         |    -0.91 | cbass, Champ, Grave, jchancE, z0mb1e |
|           16 |     2580 | 2024-09-08 | timbermen      | L   | 0.328      | -            | -                | -                | -         |    -3.48 | cbass, Grave, jchancE, serv0, z0mb1e |
|           15 |     2598 | 2024-09-07 | Wanted Goons   | W   | 0.321      | 0.333        | -                | 0.016 (0.002)    | 1 (0.321) |     2.27 | cbass, Grave, jchancE, serv0, z0mb1e |
|           14 |     2613 | 2024-09-07 | Amped Red      | W   | 0.319      | -            | -                | -                | 1 (0.319) |     1.22 | cbass, Grave, jchancE, serv0, z0mb1e |
|           13 |     2704 | 2024-09-04 | FLUFFY AIMERS  | L   | 0.301      | -            | -                | -                | -         |    -2.63 | cbass, Grave, jchancE, serv0, z0mb1e |
|           12 |     2708 | 2024-09-04 | FLUFFY AIMERS  | L   | 0.301      | -            | -                | -                | -         |    -2.69 | cbass, Grave, jchancE, serv0, z0mb1e |
|           11 |     2966 | 2024-08-27 | Legacy         | L   | 0.247      | -            | -                | -                | -         |    -1.83 | cbass, Grave, jchancE, serv0, z0mb1e |
|           10 |     3017 | 2024-08-26 | LAG            | W   | 0.241      | 0.143        | 0.004 (0.000)    | 0.083 (0.003)    | -         |     2.63 | cbass, Champ, jchancE, serv0, z0mb1e |
|            9 |     3646 | 2024-08-07 | timbermen      | L   | 0.115      | -            | -                | -                | -         |    -1.27 | cbass, Grave, jchancE, serv0, z0mb1e |
|            8 |     3648 | 2024-08-07 | timbermen      | L   | 0.114      | -            | -                | -                | -         |    -1.28 | cbass, Grave, jchancE, serv0, z0mb1e |
|            7 |     3700 | 2024-08-06 | BOSS           | W   | 0.108      | 0.477        | 0.042 (0.002)    | 0.421 (0.022)    | -         |     2.96 | cbass, Grave, jchancE, serv0, z0mb1e |
|            6 |     3704 | 2024-08-06 | BOSS           | L   | 0.108      | -            | -                | -                | -         |    -0.44 | cbass, Grave, jchancE, serv0, z0mb1e |
|            5 |     3762 | 2024-08-04 | Final Form     | L   | 0.095      | -            | -                | -                | -         |    -2.05 | cbass, Grave, jchancE, serv0, z0mb1e |
|            4 |     3801 | 2024-08-03 | Wildcard       | L   | 0.087      | -            | -                | -                | -         |    -0.09 | cbass, Champ, jchancE, serv0, z0mb1e |
|            3 |     3904 | 2024-07-31 | Revenge Nation | L   | 0.068      | -            | -                | -                | -         |    -1.27 | cbass, Grave, jchancE, serv0, z0mb1e |
|            2 |     3909 | 2024-07-31 | Revenge Nation | L   | 0.068      | -            | -                | -                | -         |    -1.27 | cbass, Grave, jchancE, serv0, z0mb1e |
|            1 |     4151 | 2024-07-24 | InControl      | W   | 0.022      | 0.371        | 0.006 (0.000)    | -                | -         |     0.24 | cbass, Grave, jchancE, serv0, z0mb1e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($571.35)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.608 | $400.00        | $243.10         |
| 2024-09-08 |      0.328 | $1,000.00      | $328.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
