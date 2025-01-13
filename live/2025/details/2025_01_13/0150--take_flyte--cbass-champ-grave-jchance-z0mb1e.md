### Roster Details<br />
Team Name: Take Flyte<br />
Roster: cbass, Champ, Grave, jchancE, z0mb1e<br />
Global Rank: [150](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_13.md)<br />
Regional Rank: [38]( ../../standings_americas_2025_01_13.md)<br />
<br />
Final Rank Value:  720.9<br />
<br />
Final Rank Value (720.9) = Starting Rank Value (766.4) + Head To Head Adjustments (-45.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.279[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.194[<sup>2</sup>](#table1)

The average of these factors is 0.185<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 766.4
- 400 + ( ( 0.185 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 766.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |      165 | 2024-12-15 | Alter Iron       | L   | 1.000      | -            | -                | -                | -         |   -14.80 | cbass, Champ, Grave, jchancE, z0mb1e |
|           42 |      188 | 2024-12-14 | Undone           | L   | 1.000      | -            | -                | -                | -         |   -10.60 | cbass, Champ, Grave, jchancE, z0mb1e |
|           41 |      217 | 2024-12-13 | LAG              | W   | 0.997      | 0.143        | 0.004 (0.001)    | 0.089 (0.013)    | 0 (0.000) |     9.94 | cbass, Champ, Grave, jchancE, z0mb1e |
|           40 |      237 | 2024-12-12 | Wanted Goons     | W   | 0.990      | 0.143        | 0.013 (0.002)    | 0.044 (0.006)    | 0 (0.000) |    11.92 | cbass, Champ, Grave, jchancE, z0mb1e |
|           39 |      252 | 2024-12-11 | Undone           | L   | 0.984      | -            | -                | -                | -         |   -10.84 | cbass, Champ, Grave, jchancE, z0mb1e |
|           38 |      264 | 2024-12-10 | Wanted Goons     | W   | 0.977      | 0.143        | 0.013 (0.002)    | 0.044 (0.006)    | 0 (0.000) |    12.31 | cbass, Champ, Grave, jchancE, z0mb1e |
|           37 |      313 | 2024-12-07 | FLUFFY AIMERS    | L   | 0.956      | -            | -                | -                | -         |    -8.53 | cbass, Champ, Grave, jchancE, z0mb1e |
|           36 |      318 | 2024-12-07 | Sharks           | L   | 0.955      | -            | -                | -                | -         |    -2.68 | cbass, Champ, Grave, jchancE, z0mb1e |
|           35 |      348 | 2024-12-06 | Not Mythic       | W   | 0.950      | 0.384        | 0.000 (0.000)    | -                | 1 (0.950) |     3.99 | cbass, Champ, Grave, jchancE, z0mb1e |
|           34 |     1536 | 2024-10-09 | LAG              | L   | 0.563      | -            | -                | -                | -         |   -12.16 | cbass, Champ, Grave, jchancE, z0mb1e |
|           33 |     1541 | 2024-10-09 | LAG              | W   | 0.563      | 0.477        | 0.004 (0.001)    | 0.089 (0.024)    | 0 (0.000) |     5.61 | cbass, Champ, Grave, jchancE, z0mb1e |
|           32 |     1574 | 2024-10-08 | E-Xolos LAZER    | L   | 0.556      | -            | -                | -                | -         |    -8.60 | cbass, Champ, Grave, jchancE, z0mb1e |
|           31 |     1581 | 2024-10-08 | E-Xolos LAZER    | L   | 0.556      | -            | -                | -                | -         |    -9.03 | cbass, Champ, Grave, jchancE, z0mb1e |
|           30 |     1734 | 2024-10-03 | Mythic           | W   | 0.523      | 0.477        | 0.000 (0.000)    | 0.100 (0.025)    | 0 (0.000) |     4.46 | cbass, Champ, Grave, jchancE, z0mb1e |
|           29 |     1741 | 2024-10-03 | Mythic           | W   | 0.523      | 0.477        | -                | 0.100 (0.025)    | 0 (0.000) |     4.63 | cbass, Champ, Grave, jchancE, z0mb1e |
|           28 |     1813 | 2024-10-01 | vagrants         | L   | 0.510      | -            | -                | -                | -         |    -8.68 | cbass, Champ, Grave, jchancE, z0mb1e |
|           27 |     1818 | 2024-10-01 | vagrants         | W   | 0.510      | 0.477        | 0.005 (0.001)    | 0.167 (0.040)    | 0 (0.000) |     7.53 | cbass, Champ, Grave, jchancE, z0mb1e |
|           26 |     1909 | 2024-09-28 | M80              | L   | 0.490      | -            | -                | -                | -         |    -1.11 | cbass, Grave, jchancE, serv0, z0mb1e |
|           25 |     1910 | 2024-09-28 | M80              | L   | 0.490      | -            | -                | -                | -         |    -1.12 | cbass, Champ, Grave, jchancE, z0mb1e |
|           24 |     2041 | 2024-09-25 | Legacy           | L   | 0.470      | -            | -                | -                | -         |    -2.47 | cbass, Champ, Grave, jchancE, z0mb1e |
|           23 |     2046 | 2024-09-25 | Legacy           | L   | 0.470      | -            | -                | -                | -         |    -2.53 | cbass, Champ, Grave, jchancE, z0mb1e |
|           22 |     2285 | 2024-09-18 | NRG              | L   | 0.423      | -            | -                | -                | -         |    -0.97 | cbass, Champ, Grave, jchancE, z0mb1e |
|           21 |     2288 | 2024-09-18 | NRG              | L   | 0.423      | -            | -                | -                | -         |    -0.97 | cbass, Champ, Grave, jchancE, z0mb1e |
|           20 |     2576 | 2024-09-08 | timbermen        | L   | 0.356      | -            | -                | -                | -         |    -3.71 | cbass, Grave, jchancE, serv0, z0mb1e |
|           19 |     2594 | 2024-09-07 | Wanted Goons     | W   | 0.350      | 0.333        | -                | 0.016 (0.002)    | 1 (0.350) |     2.47 | cbass, Grave, jchancE, serv0, z0mb1e |
|           18 |     2609 | 2024-09-07 | Amped Red        | W   | 0.348      | -            | -                | -                | 1 (0.348) |     1.31 | cbass, Grave, jchancE, serv0, z0mb1e |
|           17 |     2700 | 2024-09-04 | FLUFFY AIMERS    | L   | 0.330      | -            | -                | -                | -         |    -2.90 | cbass, Grave, jchancE, serv0, z0mb1e |
|           16 |     2704 | 2024-09-04 | FLUFFY AIMERS    | L   | 0.330      | -            | -                | -                | -         |    -2.97 | cbass, Grave, jchancE, serv0, z0mb1e |
|           15 |     2962 | 2024-08-27 | Legacy           | L   | 0.276      | -            | -                | -                | -         |    -2.01 | cbass, Grave, jchancE, serv0, z0mb1e |
|           14 |     3013 | 2024-08-26 | LAG              | W   | 0.270      | 0.143        | 0.004 (0.000)    | 0.089 (0.003)    | -         |     2.92 | cbass, Champ, jchancE, serv0, z0mb1e |
|           13 |     3642 | 2024-08-07 | timbermen        | L   | 0.143      | -            | -                | -                | -         |    -1.56 | cbass, Grave, jchancE, serv0, z0mb1e |
|           12 |     3644 | 2024-08-07 | timbermen        | L   | 0.143      | -            | -                | -                | -         |    -1.58 | cbass, Grave, jchancE, serv0, z0mb1e |
|           11 |     3696 | 2024-08-06 | BOSS             | W   | 0.137      | 0.477        | 0.042 (0.003)    | 0.421 (0.027)    | -         |     3.74 | cbass, Grave, jchancE, serv0, z0mb1e |
|           10 |     3700 | 2024-08-06 | BOSS             | L   | 0.136      | -            | -                | -                | -         |    -0.56 | cbass, Grave, jchancE, serv0, z0mb1e |
|            9 |     3758 | 2024-08-04 | Final Form       | L   | 0.124      | -            | -                | -                | -         |    -2.67 | cbass, Grave, jchancE, serv0, z0mb1e |
|            8 |     3797 | 2024-08-03 | Wildcard         | L   | 0.116      | -            | -                | -                | -         |    -0.12 | cbass, Champ, jchancE, serv0, z0mb1e |
|            7 |     3900 | 2024-07-31 | Revenge Nation   | L   | 0.097      | -            | -                | -                | -         |    -1.80 | cbass, Grave, jchancE, serv0, z0mb1e |
|            6 |     3905 | 2024-07-31 | Revenge Nation   | L   | 0.096      | -            | -                | -                | -         |    -1.81 | cbass, Grave, jchancE, serv0, z0mb1e |
|            5 |     4147 | 2024-07-24 | InControl        | W   | 0.050      | 0.371        | 0.007 (0.000)    | -                | -         |     0.55 | cbass, Grave, jchancE, serv0, z0mb1e |
|            4 |     4344 | 2024-07-18 | Wildcard         | L   | 0.010      | -            | -                | -                | -         |    -0.01 | cbass, Grave, jchancE, serv0, z0mb1e |
|            3 |     4349 | 2024-07-18 | Wildcard         | L   | 0.010      | -            | -                | -                | -         |    -0.01 | cbass, Grave, jchancE, serv0, z0mb1e |
|            2 |     4406 | 2024-07-17 | Party Astronauts | L   | 0.003      | -            | -                | -                | -         |    -0.03 | cbass, Grave, jchancE, serv0, z0mb1e |
|            1 |     4410 | 2024-07-17 | Party Astronauts | L   | 0.003      | -            | -                | -                | -         |    -0.03 | cbass, Grave, jchancE, serv0, z0mb1e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($611.21)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.636 | $400.00        | $254.48         |
| 2024-09-08 |      0.357 | $1,000.00      | $356.72         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
