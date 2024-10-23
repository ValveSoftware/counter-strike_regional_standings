### Roster Details<br />
Team Name: Homyno<br />
Roster: BiNoX, Gabie, J0LZ, Melio, TENSKEE<br />
Global Rank: [203](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_23.md)<br />
Regional Rank: [61]( ../../standings_americas_2024_10_23.md)<br />
<br />
Final Rank Value:  586.0<br />
<br />
Final Rank Value (586.0) = Starting Rank Value (661.1) + Head To Head Adjustments (-75.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.310[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 661.1
- 400 + ( ( 0.133 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 661.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |      827 | 2024-09-24 | Aether         | L   | 1.000      | -            | -                | -                | -         |   -19.26 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           23 |      855 | 2024-09-23 | Mythic         | L   | 1.000      | -            | -                | -                | -         |   -10.55 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           22 |     1079 | 2024-09-15 | MIGHT          | L   | 0.949      | -            | -                | -                | -         |    -9.86 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           21 |     1177 | 2024-09-12 | Lore           | W   | 0.929      | 0.371        | 0.000 (0.000)    | 0.103 (0.035)    | 0 (0.000) |    10.42 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           20 |     1271 | 2024-09-09 | Akimbo         | L   | 0.909      | -            | -                | -                | -         |    -7.51 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           19 |     1723 | 2024-08-26 | Mythic         | L   | 0.815      | -            | -                | -                | -         |    -8.51 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           18 |     1737 | 2024-08-26 | E-Xolos LAZER  | L   | 0.814      | -            | -                | -                | -         |    -6.41 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           17 |     2253 | 2024-08-11 | InControl      | L   | 0.715      | -            | -                | -                | -         |    -9.66 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           16 |     2278 | 2024-08-10 | Vibe           | W   | 0.707      | 0.371        | 0.000 (0.000)    | 0.022 (0.006)    | 0 (0.000) |     6.82 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           15 |     2416 | 2024-08-06 | DETONATE       | L   | 0.681      | -            | -                | -                | -         |   -14.30 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           14 |     2473 | 2024-08-04 | FLUFFY AIMERS  | L   | 0.668      | -            | -                | -                | -         |    -6.13 | BiNoX, J0LZ, Melio, Sup3rant, TENSKEE |
|           13 |     2774 | 2024-07-27 | Revenge Nation | W   | 0.614      | 0.371        | 0.006 (0.001)    | 0.252 (0.057)    | 0 (0.000) |    12.67 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           12 |     3497 | 2024-06-15 | E-Xolos LAZER  | L   | 0.335      | -            | -                | -                | -         |    -2.98 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|           11 |     3532 | 2024-06-14 | Akimbo         | L   | 0.329      | -            | -                | -                | -         |    -3.02 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|           10 |     3575 | 2024-06-13 | DETONATE       | W   | 0.322      | 0.143        | 0.000 (0.000)    | 0.113 (0.005)    | 0 (0.000) |     3.21 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            9 |     3606 | 2024-06-12 | E-Xolos LAZER  | L   | 0.315      | -            | -                | -                | -         |    -2.84 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            8 |     3608 | 2024-06-12 | DETONATE       | W   | 0.314      | 0.143        | 0.000 (0.000)    | 0.113 (0.005)    | 0 (0.000) |     3.10 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            7 |     3629 | 2024-06-11 | Final Form     | L   | 0.308      | -            | -                | -                | -         |    -6.90 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            6 |     3658 | 2024-06-10 | E-Xolos LAZER  | L   | 0.300      | -            | -                | -                | -         |    -2.83 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            5 |     3746 | 2024-06-08 | LAG            | L   | 0.288      | -            | -                | -                | -         |    -4.64 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            4 |     3801 | 2024-06-07 | E-Xolos LAZER  | L   | 0.282      | -            | -                | -                | -         |    -2.75 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            3 |     3868 | 2024-06-06 | Limitless      | W   | 0.274      | 0.371        | 0.000 (0.000)    | 0.032 (0.003)    | 0 (0.000) |     3.63 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            2 |     3983 | 2024-06-04 | Wildcard       | L   | 0.262      | -            | -                | -                | -         |    -0.53 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            1 |     3993 | 2024-06-04 | TSM Impact     | W   | 0.260      | 0.371        | 0.005 (0.000)    | 0.018 (0.002)    | 0 (0.000) |     3.79 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,614.07)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.989 | $1,250.00      | $1,236.67       |
| 2024-06-10 |      0.302 | $1,250.00      | $377.41         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
