### Roster Details<br />
Team Name: Homyno<br />
Roster: BiNoX, Gabie, J0LZ, Melio, TENSKEE<br />
Global Rank: [162](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [46]( ../standings_americas.md)<br />
<br />
Final Rank Value:  680.4<br />
<br />
Final Rank Value (680.4) = Starting Rank Value (703.3) + Head To Head Adjustments (-22.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 703.3
- 400 + ( ( 0.147 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 703.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      142 | 2024-07-27 | Revenge Nation | W   | 1.000      | 0.371        | 0.007 (0.003)    | 0.061 (0.023)    | 0 (0.000) |    16.76 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|           15 |      865 | 2024-06-15 | E-Xolos LAZER  | L   | 0.895      | -            | -                | -                | -         |    -9.85 | Gabie, J0LZ, Melio, TENSKEE, YuZ   |
|           14 |      900 | 2024-06-14 | Akimbo         | L   | 0.888      | -            | -                | -                | -         |    -9.20 | Gabie, J0LZ, Melio, TENSKEE, YuZ   |
|           13 |      943 | 2024-06-13 | Detonate       | W   | 0.882      | 0.143        | 0.000 (0.000)    | 0.072 (0.009)    | 0 (0.000) |     8.49 | Gabie, J0LZ, Melio, TENSKEE, YuZ   |
|           12 |      974 | 2024-06-12 | E-Xolos LAZER  | L   | 0.875      | -            | -                | -                | -         |   -10.18 | Gabie, J0LZ, Melio, TENSKEE, YuZ   |
|           11 |      976 | 2024-06-12 | Detonate       | W   | 0.874      | 0.143        | 0.000 (0.000)    | 0.072 (0.009)    | 0 (0.000) |     8.09 | Gabie, J0LZ, Melio, TENSKEE, YuZ   |
|           10 |      997 | 2024-06-11 | Final Form     | L   | 0.867      | -            | -                | -                | -         |   -15.15 | Gabie, J0LZ, Melio, TENSKEE, YuZ   |
|            9 |     1026 | 2024-06-10 | E-Xolos LAZER  | L   | 0.860      | -            | -                | -                | -         |   -11.34 | Gabie, J0LZ, Melio, TENSKEE, YuZ   |
|            8 |     1114 | 2024-06-08 | LAG            | L   | 0.848      | -            | -                | -                | -         |    -8.65 | Gabie, J0LZ, Melio, TENSKEE, YuZ   |
|            7 |     1169 | 2024-06-07 | E-Xolos LAZER  | L   | 0.842      | -            | -                | -                | -         |   -12.60 | Gabie, J0LZ, Melio, TENSKEE, YuZ   |
|            6 |     1236 | 2024-06-06 | Limitless      | W   | 0.834      | 0.371        | 0.001 (0.000)    | 0.170 (0.053)    | 0 (0.000) |     9.43 | Gabie, J0LZ, Melio, TENSKEE, YuZ   |
|            5 |     1351 | 2024-06-04 | Wildcard       | L   | 0.821      | -            | -                | -                | -         |    -5.16 | Gabie, J0LZ, Melio, TENSKEE, YuZ   |
|            4 |     1361 | 2024-06-04 | TSM Shimmer    | W   | 0.820      | 0.371        | 0.021 (0.006)    | 0.200 (0.061)    | 0 (0.000) |    13.14 | Gabie, J0LZ, Melio, TENSKEE, YuZ   |
|            3 |     3230 | 2024-03-23 | Revenge Nation | L   | 0.335      | -            | -                | -                | -         |    -5.46 | Gabie, J0LZ, Melio, TENSKEE, YuZ   |
|            2 |     3257 | 2024-03-21 | Final Form     | W   | 0.322      | 0.359        | 0.003 (0.000)    | 0.066 (0.008)    | 0 (0.000) |     4.36 | Gabie, J0LZ, Melio, TENSKEE, YuZ   |
|            1 |     3306 | 2024-03-19 | Akimbo         | W   | 0.308      | 0.359        | 0.003 (0.000)    | 0.076 (0.008)    | 0 (0.000) |     4.39 | Gabie, J0LZ, Melio, TENSKEE, YuZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,516.89)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      0.862 | $1,250.00      | $1,077.08       |
| 2024-03-23 |      0.335 | $4,300.00      | $1,439.82       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
