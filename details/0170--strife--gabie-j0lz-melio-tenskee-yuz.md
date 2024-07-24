### Roster Details<br />
Team Name: Strife<br />
Roster: Gabie, J0LZ, Melio, TENSKEE, YuZ<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [170](../standings_global.md)<br />
Regional Rank: [48]( ../standings_americas.md)<br />
Final Rank Value:  660.9<br />
<br />
Final Rank Value (660.9) = Starting Rank Value (702.0) + Head To Head Adjustments (-41.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.334[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 702.0
- 400 + ( ( 0.149 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 702.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      623 | 2024-06-15 | E-Xolos LAZER  | L   | 0.942      | -            | -                | -                | -         |   -10.13 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|           14 |      658 | 2024-06-14 | OMiT           | L   | 0.936      | -            | -                | -                | -         |    -8.96 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|           13 |      701 | 2024-06-13 | regain         | W   | 0.929      | 0.143        | 0.000 (0.000)    | 0.038 (0.005)    | 0 (0.000) |     7.85 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|           12 |      732 | 2024-06-12 | E-Xolos LAZER  | L   | 0.922      | -            | -                | -                | -         |   -10.54 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|           11 |      734 | 2024-06-12 | regain         | W   | 0.921      | 0.143        | 0.000 (0.000)    | 0.038 (0.005)    | 0 (0.000) |     7.35 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|           10 |      755 | 2024-06-11 | Final Form     | L   | 0.915      | -            | -                | -                | -         |   -15.86 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            9 |      784 | 2024-06-10 | E-Xolos LAZER  | L   | 0.907      | -            | -                | -                | -         |   -11.87 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            8 |      872 | 2024-06-08 | LAG            | L   | 0.895      | -            | -                | -                | -         |    -8.53 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            7 |      927 | 2024-06-07 | E-Xolos LAZER  | L   | 0.889      | -            | -                | -                | -         |   -13.31 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            6 |      994 | 2024-06-06 | Limitless      | W   | 0.881      | 0.371        | 0.001 (0.000)    | 0.196 (0.064)    | 0 (0.000) |    10.10 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            5 |     1109 | 2024-06-04 | Wildcard       | L   | 0.869      | -            | -                | -                | -         |    -4.91 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            4 |     1119 | 2024-06-04 | TSM Shimmer    | W   | 0.867      | 0.371        | 0.023 (0.008)    | 0.199 (0.064)    | 0 (0.000) |    13.96 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            3 |     2988 | 2024-03-23 | Revenge Nation | L   | 0.382      | -            | -                | -                | -         |    -6.50 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            2 |     3015 | 2024-03-21 | Final Form     | W   | 0.369      | 0.359        | 0.004 (0.001)    | 0.074 (0.010)    | 0 (0.000) |     5.04 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            1 |     3064 | 2024-03-19 | Akimbo         | W   | 0.356      | 0.359        | 0.004 (0.001)    | 0.086 (0.011)    | 0 (0.000) |     5.20 | Gabie, J0LZ, Melio, TENSKEE, YuZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,779.34)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      0.909 | $1,250.00      | $1,136.19       |
| 2024-03-23 |      0.382 | $4,300.00      | $1,643.15       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
