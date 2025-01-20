### Roster Details<br />
Team Name: Take Flyte<br />
Roster: cbass, Champ, Grave, jchancE, z0mb1e<br />
Global Rank: [149](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_20.md)<br />
Regional Rank: [37]( ../../standings_americas_2025_01_20.md)<br />
<br />
Final Rank Value:  719.7<br />
<br />
Final Rank Value (719.7) = Starting Rank Value (760.3) + Head To Head Adjustments (-40.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.278[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.189[<sup>2</sup>](#table1)

The average of these factors is 0.181<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 760.3
- 400 + ( ( 0.181 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 760.3


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
|           39 |      178 | 2024-12-15 | Alter Iron     | L   | 0.968      | -            | -                | -                | -         |   -14.29 | cbass, Champ, Grave, jchancE, z0mb1e |
|           38 |      201 | 2024-12-14 | Undone         | L   | 0.962      | -            | -                | -                | -         |   -10.14 | cbass, Champ, Grave, jchancE, z0mb1e |
|           37 |      230 | 2024-12-13 | LAG            | W   | 0.955      | 0.143        | 0.004 (0.001)    | 0.081 (0.011)    | 0 (0.000) |     9.64 | cbass, Champ, Grave, jchancE, z0mb1e |
|           36 |      250 | 2024-12-12 | Wanted Goons   | W   | 0.948      | 0.143        | 0.014 (0.002)    | 0.045 (0.006)    | 0 (0.000) |    11.57 | cbass, Champ, Grave, jchancE, z0mb1e |
|           35 |      265 | 2024-12-11 | Undone         | L   | 0.942      | -            | -                | -                | -         |   -10.29 | cbass, Champ, Grave, jchancE, z0mb1e |
|           34 |      277 | 2024-12-10 | Wanted Goons   | W   | 0.935      | 0.143        | 0.014 (0.002)    | 0.045 (0.006)    | 0 (0.000) |    11.94 | cbass, Champ, Grave, jchancE, z0mb1e |
|           33 |      326 | 2024-12-07 | FLUFFY AIMERS  | L   | 0.914      | -            | -                | -                | -         |    -8.10 | cbass, Champ, Grave, jchancE, z0mb1e |
|           32 |      331 | 2024-12-07 | Sharks         | L   | 0.913      | -            | -                | -                | -         |    -2.56 | cbass, Champ, Grave, jchancE, z0mb1e |
|           31 |      361 | 2024-12-06 | Not Mythic     | W   | 0.908      | 0.384        | 0.000 (0.000)    | -                | 1 (0.908) |     3.86 | cbass, Champ, Grave, jchancE, z0mb1e |
|           30 |     1549 | 2024-10-09 | LAG            | L   | 0.521      | -            | -                | -                | -         |   -11.18 | cbass, Champ, Grave, jchancE, z0mb1e |
|           29 |     1554 | 2024-10-09 | LAG            | W   | 0.521      | 0.477        | 0.004 (0.001)    | 0.081 (0.020)    | 0 (0.000) |     5.28 | cbass, Champ, Grave, jchancE, z0mb1e |
|           28 |     1587 | 2024-10-08 | E-Xolos LAZER  | L   | 0.514      | -            | -                | -                | -         |    -8.06 | cbass, Champ, Grave, jchancE, z0mb1e |
|           27 |     1594 | 2024-10-08 | E-Xolos LAZER  | L   | 0.514      | -            | -                | -                | -         |    -8.44 | cbass, Champ, Grave, jchancE, z0mb1e |
|           26 |     1747 | 2024-10-03 | Mythic         | W   | 0.481      | 0.477        | 0.000 (0.000)    | 0.093 (0.021)    | 0 (0.000) |     4.00 | cbass, Champ, Grave, jchancE, z0mb1e |
|           25 |     1754 | 2024-10-03 | Mythic         | W   | 0.481      | 0.477        | -                | 0.093 (0.021)    | 0 (0.000) |     4.13 | cbass, Champ, Grave, jchancE, z0mb1e |
|           24 |     1826 | 2024-10-01 | vagrants       | L   | 0.468      | -            | -                | -                | -         |    -7.98 | cbass, Champ, Grave, jchancE, z0mb1e |
|           23 |     1831 | 2024-10-01 | vagrants       | W   | 0.468      | 0.477        | 0.005 (0.001)    | 0.163 (0.036)    | 0 (0.000) |     6.89 | cbass, Champ, Grave, jchancE, z0mb1e |
|           22 |     1922 | 2024-09-28 | M80            | L   | 0.448      | -            | -                | -                | -         |    -1.10 | cbass, Grave, jchancE, serv0, z0mb1e |
|           21 |     1923 | 2024-09-28 | M80            | L   | 0.447      | -            | -                | -                | -         |    -1.11 | cbass, Champ, Grave, jchancE, z0mb1e |
|           20 |     2054 | 2024-09-25 | Legacy         | L   | 0.428      | -            | -                | -                | -         |    -2.37 | cbass, Champ, Grave, jchancE, z0mb1e |
|           19 |     2059 | 2024-09-25 | Legacy         | L   | 0.428      | -            | -                | -                | -         |    -2.42 | cbass, Champ, Grave, jchancE, z0mb1e |
|           18 |     2298 | 2024-09-18 | NRG            | L   | 0.381      | -            | -                | -                | -         |    -0.87 | cbass, Champ, Grave, jchancE, z0mb1e |
|           17 |     2301 | 2024-09-18 | NRG            | L   | 0.381      | -            | -                | -                | -         |    -0.88 | cbass, Champ, Grave, jchancE, z0mb1e |
|           16 |     2589 | 2024-09-08 | timbermen      | L   | 0.314      | -            | -                | -                | -         |    -3.36 | cbass, Grave, jchancE, serv0, z0mb1e |
|           15 |     2607 | 2024-09-07 | Wanted Goons   | W   | 0.308      | 0.333        | -                | 0.016 (0.002)    | 1 (0.308) |     2.17 | cbass, Grave, jchancE, serv0, z0mb1e |
|           14 |     2622 | 2024-09-07 | Amped Red      | W   | 0.306      | -            | -                | -                | 1 (0.306) |     1.18 | cbass, Grave, jchancE, serv0, z0mb1e |
|           13 |     2713 | 2024-09-04 | FLUFFY AIMERS  | L   | 0.288      | -            | -                | -                | -         |    -2.50 | cbass, Grave, jchancE, serv0, z0mb1e |
|           12 |     2717 | 2024-09-04 | FLUFFY AIMERS  | L   | 0.288      | -            | -                | -                | -         |    -2.56 | cbass, Grave, jchancE, serv0, z0mb1e |
|           11 |     2975 | 2024-08-27 | Legacy         | L   | 0.234      | -            | -                | -                | -         |    -1.74 | cbass, Grave, jchancE, serv0, z0mb1e |
|           10 |     3026 | 2024-08-26 | LAG            | W   | 0.228      | 0.143        | 0.004 (0.000)    | 0.081 (0.003)    | -         |     2.49 | cbass, Champ, jchancE, serv0, z0mb1e |
|            9 |     3655 | 2024-08-07 | timbermen      | L   | 0.101      | -            | -                | -                | -         |    -1.13 | cbass, Grave, jchancE, serv0, z0mb1e |
|            8 |     3657 | 2024-08-07 | timbermen      | L   | 0.101      | -            | -                | -                | -         |    -1.13 | cbass, Grave, jchancE, serv0, z0mb1e |
|            7 |     3709 | 2024-08-06 | BOSS           | W   | 0.094      | 0.477        | 0.041 (0.002)    | 0.422 (0.019)    | -         |     2.59 | cbass, Grave, jchancE, serv0, z0mb1e |
|            6 |     3713 | 2024-08-06 | BOSS           | L   | 0.094      | -            | -                | -                | -         |    -0.39 | cbass, Grave, jchancE, serv0, z0mb1e |
|            5 |     3771 | 2024-08-04 | Final Form     | L   | 0.082      | -            | -                | -                | -         |    -1.76 | cbass, Grave, jchancE, serv0, z0mb1e |
|            4 |     3810 | 2024-08-03 | Wildcard       | L   | 0.074      | -            | -                | -                | -         |    -0.08 | cbass, Champ, jchancE, serv0, z0mb1e |
|            3 |     3913 | 2024-07-31 | Revenge Nation | L   | 0.055      | -            | -                | -                | -         |    -1.01 | cbass, Grave, jchancE, serv0, z0mb1e |
|            2 |     3918 | 2024-07-31 | Revenge Nation | L   | 0.054      | -            | -                | -                | -         |    -1.01 | cbass, Grave, jchancE, serv0, z0mb1e |
|            1 |     4160 | 2024-07-24 | InControl      | W   | 0.008      | 0.371        | 0.006 (0.000)    | -                | -         |     0.09 | cbass, Grave, jchancE, serv0, z0mb1e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($552.35)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.594 | $400.00        | $237.67         |
| 2024-09-08 |      0.315 | $1,000.00      | $314.68         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
