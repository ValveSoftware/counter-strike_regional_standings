### Roster Details<br />
Team Name: The Huns<br />
Roster: Bart4k, cobra, nin9, sk0R, tamir<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [200](../standings_global.md)<br />
Regional Rank: [21]( ../standings_asia.md)<br />
Final Rank Value:  477.0<br />
<br />
Final Rank Value (477.0) = Starting Rank Value (492.5) + Head To Head Adjustments (-15.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.172[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 492.5
- 400 + ( ( 0.043 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 492.5


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
|           16 |     1334 | 2024-05-17 | ATOX            | L   | 0.792      | -            | -                | -                | -         |    -1.69 | Bart4k, cobra, nin9, sk0R, tamir |
|           15 |     1709 | 2024-05-03 | IHC             | L   | 0.698      | -            | -                | -                | -         |   -12.19 | Bart4k, cobra, nin9, sk0R, tamir |
|           14 |     2138 | 2024-04-17 | TYLOO           | L   | 0.592      | -            | -                | -                | -         |    -2.49 | Bart4k, cobra, H4wK, ncl, nin9   |
|           13 |     2935 | 2024-03-13 | LYG             | L   | 0.358      | -            | -                | -                | -         |    -2.35 | Bart4k, ncl, nin9, sk0R, Tsogoo  |
|           12 |     3564 | 2024-02-15 | GR              | L   | 0.179      | -            | -                | -                | -         |    -1.32 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           11 |     3603 | 2024-02-14 | padaem Holodnie | W   | 0.172      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.01 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           10 |     3902 | 2024-01-27 | TYLOO           | L   | 0.052      | -            | -                | -                | -         |    -0.21 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            9 |     3917 | 2024-01-26 | Wings Up        | W   | 0.046      | 0.143        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.72 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            8 |     3923 | 2024-01-26 | The MongolZ     | L   | 0.045      | -            | -                | -                | -         |     0.00 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            7 |     3975 | 2024-01-23 | Steel Helmet    | W   | 0.026      | 0.143        | 0.009 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.58 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            6 |     3977 | 2024-01-23 | ATOX            | W   | 0.025      | 0.143        | 0.031 (0.000)    | 0.239 (0.001)    | 0 (0.000) |     0.73 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            5 |     4001 | 2024-01-22 | Wings Up        | W   | 0.019      | 0.143        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.30 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            4 |     4030 | 2024-01-21 | ATOX            | L   | 0.013      | -            | -                | -                | -         |    -0.03 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            3 |     4032 | 2024-01-21 | Eruption        | W   | 0.012      | 0.143        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.14 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            2 |     4069 | 2024-01-20 | GR              | W   | 0.006      | 0.143        | 0.012 (0.000)    | 0.065 (0.000)    | 0 (0.000) |     0.15 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            1 |     4077 | 2024-01-20 | NKT             | W   | 0.005      | 0.143        | 0.001 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.12 | Bart4k, nin9, sk0R, Tsogoo, yAmi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
