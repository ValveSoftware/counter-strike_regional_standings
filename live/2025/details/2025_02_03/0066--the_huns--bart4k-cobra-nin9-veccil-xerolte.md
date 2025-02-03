### Roster Details<br />
Team Name: The Huns<br />
Roster: Bart4k, cobra, nin9, Veccil, xerolte<br />
Global Rank: [66](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_03.md)<br />
Regional Rank: [6]( ../../standings_asia_2025_02_03.md)<br />
<br />
Final Rank Value:  964.5<br />
<br />
Final Rank Value (964.5) = Starting Rank Value (1075.2) + Head To Head Adjustments (-110.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.447[<sup>1</sup>](#table2)
- Bounty Collected: 0.333[<sup>2</sup>](#table1)
- Opponent Network: 0.127[<sup>2</sup>](#table1)
- LAN Wins: 0.486[<sup>2</sup>](#table1)

The average of these factors is 0.348<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1075.2
- 400 + ( ( 0.348 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 1075.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |       83 | 2025-01-28 | Lynn Vision       | W   | 1.000      | 0.417        | 0.030 (0.013)    | 0.427 (0.178)    | 0 (0.000) |    17.31 | Bart4k, cobra, nin9, Veccil, xerolte    |
|           29 |       85 | 2025-01-28 | Lynn Vision       | L   | 1.000      | -            | -                | -                | -         |   -14.05 | Bart4k, cobra, nin9, Veccil, xerolte    |
|           28 |      179 | 2025-01-24 | THE               | W   | 1.000      | 0.417        | -                | 0.122 (0.051)    | 0 (0.000) |     2.90 | Bart4k, cobra, nin9, Veccil, xerolte    |
|           27 |      186 | 2025-01-24 | THE               | L   | 1.000      | -            | -                | -                | -         |   -28.98 | Bart4k, cobra, nin9, Veccil, xerolte    |
|           26 |      226 | 2025-01-23 | harizma           | W   | 1.000      | 0.417        | 0.003 (0.001)    | 0.241 (0.100)    | 0 (0.000) |     4.96 | Bart4k, cobra, nin9, Veccil, xerolte    |
|           25 |      232 | 2025-01-23 | harizma           | W   | 1.000      | 0.417        | -                | 0.241 (0.100)    | 0 (0.000) |     5.21 | Bart4k, cobra, nin9, Veccil, xerolte    |
|           24 |      269 | 2025-01-22 | -72c              | L   | 1.000      | -            | -                | -                | -         |   -27.59 | Bart4k, cobra, nin9, Veccil, xerolte    |
|           23 |      278 | 2025-01-22 | -72c              | W   | 1.000      | 0.417        | -                | 0.320 (0.133)    | 0 (0.000) |     3.50 | Bart4k, cobra, nin9, Veccil, xerolte    |
|           22 |      310 | 2025-01-21 | Rare Atom         | W   | 1.000      | 0.417        | 0.060 (0.025)    | 0.433 (0.180)    | -         |    13.59 | Bart4k, cobra, nin9, Veccil, xerolte    |
|           21 |      319 | 2025-01-21 | Rare Atom         | W   | 1.000      | 0.417        | 0.060 (0.025)    | 0.433 (0.180)    | -         |    14.84 | Bart4k, cobra, nin9, Veccil, xerolte    |
|           20 |      401 | 2024-12-28 | ATOX              | L   | 0.951      | -            | -                | -                | -         |    -8.02 | Bart4k, cobra, nin9, Veccil, xerolte    |
|           19 |      403 | 2024-12-27 | IHC               | W   | 0.950      | 0.384        | 0.005 (0.002)    | 0.139 (0.051)    | 1 (0.950) |     6.13 | Bart4k, cobra, nin9, Veccil, xerolte    |
|           18 |      407 | 2024-12-27 | Rare Atom         | L   | 0.945      | -            | -                | -                | -         |   -14.91 | Bart4k, cobra, nin9, Veccil, xerolte    |
|           17 |      410 | 2024-12-26 | Chinggis Warriors | W   | 0.943      | 0.384        | 0.040 (0.014)    | 0.434 (0.157)    | 1 (0.943) |     8.94 | Bart4k, cobra, nin9, Veccil, xerolte    |
|           16 |      985 | 2024-11-22 | IHC               | L   | 0.712      | -            | -                | -                | -         |   -18.45 | Bart4k, cobra, nin9, Wonderzce, xerolte |
|           15 |     1012 | 2024-11-21 | LFO 2             | W   | 0.704      | 0.333        | 0.028 (0.007)    | -                | -         |     4.68 | Bart4k, cobra, nin9, Wonderzce, xerolte |
|           14 |     1016 | 2024-11-20 | Just Swing        | L   | 0.704      | -            | -                | -                | -         |   -18.38 | Bart4k, cobra, nin9, Wonderzce, xerolte |
|           13 |     1097 | 2024-11-16 | Metizport         | L   | 0.672      | -            | -                | -                | -         |    -4.86 | Bart4k, cobra, nin9, Wonderzce, xerolte |
|           12 |     1119 | 2024-11-15 | Czech Republic    | L   | 0.665      | -            | -                | -                | -         |   -18.29 | Bart4k, cobra, nin9, Wonderzce, xerolte |
|           11 |     1129 | 2024-11-15 | Kitsune           | W   | 0.665      | 0.617        | 0.004 (0.002)    | -                | 1 (0.665) |     1.14 | Bart4k, cobra, nin9, Wonderzce, xerolte |
|           10 |     1140 | 2024-11-14 | Dusty Roots       | W   | 0.661      | 0.617        | 0.018 (0.007)    | 0.348 (0.142)    | 1 (0.661) |     4.49 | Bart4k, cobra, nin9, Wonderzce, xerolte |
|            9 |     1182 | 2024-11-13 | Partizan          | L   | 0.653      | -            | -                | -                | -         |    -7.08 | Bart4k, cobra, nin9, Wonderzce, xerolte |
|            8 |     1186 | 2024-11-13 | SINNERS Academy   | W   | 0.653      | -            | -                | -                | 1 (0.653) |     3.80 | Bart4k, cobra, nin9, Wonderzce, xerolte |
|            7 |     1326 | 2024-11-07 | IHC               | L   | 0.617      | -            | -                | -                | -         |   -17.04 | Bart4k, cobra, nin9, Wonderzce, xerolte |
|            6 |     1359 | 2024-11-06 | Dewa United       | W   | 0.604      | -            | -                | -                | -         |     0.51 | Bart4k, cobra, nin9, Wonderzce, xerolte |
|            5 |     1361 | 2024-11-05 | Gods Reign        | W   | 0.603      | 0.333        | 0.013 (0.003)    | -                | -         |     2.70 | Bart4k, cobra, nin9, Wonderzce, xerolte |
|            4 |     1746 | 2024-10-17 | Lynn Vision       | L   | 0.472      | -            | -                | -                | -         |    -9.37 | Bart4k, cobra, nin9, Wonderzce, xerolte |
|            3 |     1779 | 2024-10-16 | harizma           | W   | 0.466      | -            | -                | -                | -         |     1.95 | Bart4k, cobra, nin9, Wonderzce, xerolte |
|            2 |     1800 | 2024-10-15 | UR                | L   | 0.459      | -            | -                | -                | -         |   -12.66 | Bart4k, cobra, nin9, Wonderzce, xerolte |
|            1 |     2325 | 2024-09-26 | Chinggis Warriors | L   | 0.337      | -            | -                | -                | -         |    -7.64 | Bart4k, cobra, ncl, nin9, Wonderzce     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,894.96)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-29 |      0.958 | $1,500.00      | $1,436.99       |
| 2024-11-17 |      0.680 | $12,500.00     | $8,500.60       |
| 2024-10-18 |      0.479 | $2,000.00      | $957.37         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
