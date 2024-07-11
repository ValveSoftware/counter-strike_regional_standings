### Roster Details<br />
Team Name: The Huns<br />
Roster: Bart4k, cobra, nin9, sk0R, tamir<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [199](../standings_global.md)<br />
Regional Rank: [27]( ../standings_asia.md)<br />
Final Rank Value:  486.1<br />
<br />
Final Rank Value (486.1) = Starting Rank Value (499.0) + Head To Head Adjustments (-12.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 499.0
- 400 + ( ( 0.047 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 499.0


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
|           20 |     1170 | 2024-05-17 | ATOX            | L   | 0.831      | -            | -                | -                | -         |    -1.85 | Bart4k, cobra, nin9, sk0R, tamir |
|           19 |     1545 | 2024-05-03 | IHC             | L   | 0.738      | -            | -                | -                | -         |   -13.12 | Bart4k, cobra, nin9, sk0R, tamir |
|           18 |     1974 | 2024-04-17 | TYLOO           | L   | 0.631      | -            | -                | -                | -         |    -2.81 | Bart4k, cobra, H4wK, ncl, nin9   |
|           17 |     2771 | 2024-03-13 | LYG             | L   | 0.398      | -            | -                | -                | -         |    -2.79 | Bart4k, ncl, nin9, sk0R, Tsogoo  |
|           16 |     3400 | 2024-02-15 | GR              | L   | 0.218      | -            | -                | -                | -         |    -1.74 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           15 |     3439 | 2024-02-14 | padaem Holodnie | W   | 0.212      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.37 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           14 |     3738 | 2024-01-27 | TYLOO           | L   | 0.091      | -            | -                | -                | -         |    -0.71 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           13 |     3753 | 2024-01-26 | Wings Up        | W   | 0.086      | 0.143        | 0.000 (0.000)    | 0.011 (0.000)    | 0 (0.000) |     1.33 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           12 |     3759 | 2024-01-26 | The MongolZ     | L   | 0.085      | -            | -                | -                | -         |    -0.00 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           11 |     3811 | 2024-01-23 | Steel Helmet    | W   | 0.065      | 0.143        | 0.009 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     1.46 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           10 |     3813 | 2024-01-23 | ATOX            | W   | 0.065      | 0.143        | 0.031 (0.000)    | 0.256 (0.002)    | 0 (0.000) |     1.89 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            9 |     3837 | 2024-01-22 | Wings Up        | W   | 0.059      | 0.143        | 0.000 (0.000)    | 0.011 (0.000)    | 0 (0.000) |     0.92 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            8 |     3866 | 2024-01-21 | ATOX            | L   | 0.052      | -            | -                | -                | -         |    -0.12 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            7 |     3868 | 2024-01-21 | Eruption        | W   | 0.051      | 0.143        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     0.59 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            6 |     3905 | 2024-01-20 | GR              | W   | 0.046      | 0.143        | 0.012 (0.000)    | 0.078 (0.001)    | 0 (0.000) |     1.09 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            5 |     3913 | 2024-01-20 | NKT             | W   | 0.045      | 0.143        | 0.002 (0.000)    | 0.010 (0.000)    | 0 (0.000) |     1.01 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            4 |     3967 | 2024-01-19 | MungYu          | L   | 0.038      | -            | -                | -                | -         |    -0.63 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            3 |     4151 | 2024-01-15 | MungYu          | L   | 0.012      | -            | -                | -                | -         |    -0.21 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            2 |     4155 | 2024-01-15 | Fort Arena      | W   | 0.012      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.14 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            1 |     4159 | 2024-01-15 | NKT             | W   | 0.011      | 0.143        | 0.002 (0.000)    | 0.010 (0.000)    | 0 (0.000) |     0.26 | Bart4k, nin9, sk0R, Tsogoo, yAmi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
