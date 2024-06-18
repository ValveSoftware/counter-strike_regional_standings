### Roster Details<br />
Team Name: The Huns<br />
Roster: Bart4k, cobra, nin9, sk0R, tamir<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [204](../standings_global.md)<br />
Regional Rank: [27]( ../standings_asia.md)<br />
Final Rank Value:  506.5<br />
<br />
Final Rank Value (506.5) = Starting Rank Value (507.1) + Head To Head Adjustments (-0.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.1
- 400 + ( ( 0.053 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 507.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     1036 | 2024-05-17 | ATOX            | L   | 0.987      | -            | -                | -                | -         |    -2.48 | Bart4k, cobra, nin9, sk0R, tamir |
|           19 |     1411 | 2024-05-03 | IHC             | L   | 0.894      | -            | -                | -                | -         |   -16.54 | Bart4k, cobra, nin9, sk0R, tamir |
|           18 |     1840 | 2024-04-17 | TYLOO           | L   | 0.787      | -            | -                | -                | -         |    -4.14 | Bart4k, cobra, H4wK, ncl, nin9   |
|           17 |     2638 | 2024-03-13 | LYG             | L   | 0.554      | -            | -                | -                | -         |    -4.59 | Bart4k, ncl, nin9, sk0R, Tsogoo  |
|           16 |     3267 | 2024-02-15 | GR              | L   | 0.374      | -            | -                | -                | -         |    -3.59 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           15 |     3306 | 2024-02-14 | padaem Holodnie | W   | 0.368      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.69 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           14 |     3605 | 2024-01-27 | TYLOO           | L   | 0.247      | -            | -                | -                | -         |    -1.76 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           13 |     3620 | 2024-01-26 | Wings Up        | W   | 0.241      | 0.143        | 0.000 (0.000)    | 0.032 (0.001)    | 0 (0.000) |     3.63 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           12 |     3626 | 2024-01-26 | The MongolZ     | L   | 0.240      | -            | -                | -                | -         |    -0.00 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           11 |     3678 | 2024-01-23 | Steel Helmet    | W   | 0.221      | 0.143        | 0.010 (0.000)    | 0.033 (0.001)    | 0 (0.000) |     4.77 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           10 |     3680 | 2024-01-23 | ATOX            | W   | 0.220      | 0.143        | 0.027 (0.001)    | 0.275 (0.009)    | 0 (0.000) |     6.38 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            9 |     3704 | 2024-01-22 | Wings Up        | W   | 0.215      | 0.143        | 0.000 (0.000)    | 0.032 (0.001)    | 0 (0.000) |     3.26 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            8 |     3733 | 2024-01-21 | ATOX            | L   | 0.208      | -            | -                | -                | -         |    -0.53 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            7 |     3735 | 2024-01-21 | Eruption        | W   | 0.207      | 0.143        | 0.000 (0.000)    | 0.022 (0.001)    | 0 (0.000) |     2.28 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            6 |     3772 | 2024-01-20 | GR              | W   | 0.201      | 0.143        | 0.011 (0.000)    | 0.119 (0.003)    | 0 (0.000) |     4.61 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            5 |     3780 | 2024-01-20 | NKT             | W   | 0.200      | 0.143        | 0.003 (0.000)    | 0.030 (0.001)    | 0 (0.000) |     4.63 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            4 |     3834 | 2024-01-19 | MungYu          | L   | 0.194      | -            | -                | -                | -         |    -3.13 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            3 |     4018 | 2024-01-15 | MungYu          | L   | 0.168      | -            | -                | -                | -         |    -2.76 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            2 |     4022 | 2024-01-15 | Fort Arena      | W   | 0.168      | 0.143        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     1.86 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            1 |     4026 | 2024-01-15 | NKT             | W   | 0.167      | 0.143        | 0.003 (0.000)    | 0.030 (0.001)    | 0 (0.000) |     3.88 | Bart4k, nin9, sk0R, Tsogoo, yAmi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
