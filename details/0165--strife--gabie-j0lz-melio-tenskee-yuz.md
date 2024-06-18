### Roster Details<br />
Team Name: Strife<br />
Roster: Gabie, J0LZ, Melio, TENSKEE, YuZ<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [165](../standings_global.md)<br />
Regional Rank: [46]( ../standings_americas.md)<br />
Final Rank Value:  672.0<br />
<br />
Final Rank Value (672.0) = Starting Rank Value (719.8) + Head To Head Adjustments (-47.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.347[<sup>1</sup>](#table2)
- Bounty Collected: 0.259[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 719.8
- 400 + ( ( 0.157 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 719.8


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
|           15 |       35 | 2024-06-15 | E-Xolos LAZER  | L   | 1.000      | -            | -                | -                | -         |   -11.44 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|           14 |       70 | 2024-06-14 | OMiT           | L   | 1.000      | -            | -                | -                | -         |    -8.75 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|           13 |      113 | 2024-06-13 | regain         | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.042 (0.006)    | 0 (0.000) |     8.10 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|           12 |      144 | 2024-06-12 | E-Xolos LAZER  | L   | 1.000      | -            | -                | -                | -         |   -12.25 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|           11 |      146 | 2024-06-12 | regain         | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.042 (0.006)    | 0 (0.000) |     7.54 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|           10 |      167 | 2024-06-11 | Final Form     | L   | 1.000      | -            | -                | -                | -         |   -17.57 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            9 |      196 | 2024-06-10 | E-Xolos LAZER  | L   | 1.000      | -            | -                | -                | -         |   -14.24 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            8 |      284 | 2024-06-08 | LAG            | L   | 1.000      | -            | -                | -                | -         |    -9.76 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            7 |      339 | 2024-06-07 | E-Xolos LAZER  | L   | 1.000      | -            | -                | -                | -         |   -16.68 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            6 |      406 | 2024-06-06 | Limitless      | W   | 1.000      | 0.384        | 0.001 (0.001)    | 0.227 (0.087)    | 0 (0.000) |    10.90 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            5 |      521 | 2024-06-04 | Wildcard       | L   | 1.000      | -            | -                | -                | -         |    -5.55 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            4 |      531 | 2024-06-04 | TSM Shimmer    | W   | 1.000      | 0.384        | 0.027 (0.010)    | 0.270 (0.104)    | 0 (0.000) |    15.66 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            3 |     2403 | 2024-03-23 | Revenge Nation | L   | 0.625      | -            | -                | -                | -         |   -10.56 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            2 |     2430 | 2024-03-21 | Final Form     | W   | 0.612      | 0.359        | 0.006 (0.001)    | 0.071 (0.016)    | 0 (0.000) |     7.99 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            1 |     2479 | 2024-03-19 | Akimbo         | W   | 0.598      | 0.359        | 0.006 (0.001)    | 0.102 (0.022)    | 0 (0.000) |     8.82 | Gabie, J0LZ, Melio, TENSKEE, YuZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,935.94)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-03-23 |      0.625 | $4,300.00      | $2,685.94       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
