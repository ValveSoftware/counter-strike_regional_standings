### Roster Details<br />
Team Name: Homyno<br />
Roster: BiNoX, Gabie, J0LZ, Melio, TENSKEE<br />
Global Rank: [213](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_02.md)<br />
Regional Rank: [62]( ../../standings_americas_2024_10_02.md)<br />
<br />
Final Rank Value:  554.8<br />
<br />
Final Rank Value (554.8) = Starting Rank Value (649.4) + Head To Head Adjustments (-94.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.307[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 649.4
- 400 + ( ( 0.130 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 649.4


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
|           24 |      332 | 2024-09-24 | Aether         | L   | 1.000      | -            | -                | -                | -         |   -18.39 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           23 |      360 | 2024-09-23 | Mythic         | L   | 1.000      | -            | -                | -                | -         |   -10.84 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           22 |      584 | 2024-09-15 | MIGHT          | L   | 1.000      | -            | -                | -                | -         |   -11.87 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           21 |      682 | 2024-09-12 | Lore           | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.103 (0.038)    | 0 (0.000) |    12.27 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           20 |      776 | 2024-09-09 | Akimbo         | L   | 1.000      | -            | -                | -                | -         |    -7.75 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           19 |     1228 | 2024-08-26 | Mythic         | L   | 0.955      | -            | -                | -                | -         |   -10.11 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           18 |     1242 | 2024-08-26 | E-Xolos LAZER  | L   | 0.954      | -            | -                | -                | -         |    -8.42 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           17 |     1758 | 2024-08-11 | InControl      | L   | 0.855      | -            | -                | -                | -         |   -11.21 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           16 |     1783 | 2024-08-10 | Vibe           | W   | 0.847      | 0.371        | 0.000 (0.000)    | 0.026 (0.008)    | 0 (0.000) |     8.72 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           15 |     1921 | 2024-08-06 | DETONATE       | L   | 0.821      | -            | -                | -                | -         |   -16.49 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           14 |     1978 | 2024-08-04 | FLUFFY AIMERS  | L   | 0.808      | -            | -                | -                | -         |    -9.36 | BiNoX, J0LZ, Melio, Sup3rant, TENSKEE |
|           13 |     2279 | 2024-07-27 | Revenge Nation | W   | 0.754      | 0.371        | 0.000 (0.000)    | 0.185 (0.052)    | 0 (0.000) |     9.14 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           12 |     3002 | 2024-06-15 | E-Xolos LAZER  | L   | 0.475      | -            | -                | -                | -         |    -4.68 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|           11 |     3037 | 2024-06-14 | Akimbo         | L   | 0.469      | -            | -                | -                | -         |    -4.16 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|           10 |     3080 | 2024-06-13 | DETONATE       | W   | 0.462      | 0.143        | 0.000 (0.000)    | 0.133 (0.009)    | 0 (0.000) |     4.82 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            9 |     3111 | 2024-06-12 | E-Xolos LAZER  | L   | 0.455      | -            | -                | -                | -         |    -4.60 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            8 |     3113 | 2024-06-12 | DETONATE       | W   | 0.454      | 0.143        | 0.000 (0.000)    | 0.133 (0.009)    | 0 (0.000) |     4.68 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            7 |     3134 | 2024-06-11 | Final Form     | L   | 0.447      | -            | -                | -                | -         |    -9.77 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            6 |     3163 | 2024-06-10 | E-Xolos LAZER  | L   | 0.440      | -            | -                | -                | -         |    -4.76 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            5 |     3251 | 2024-06-08 | LAG            | L   | 0.428      | -            | -                | -                | -         |    -6.51 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            4 |     3306 | 2024-06-07 | E-Xolos LAZER  | L   | 0.422      | -            | -                | -                | -         |    -4.84 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            3 |     3373 | 2024-06-06 | Limitless      | W   | 0.414      | 0.371        | 0.001 (0.000)    | 0.051 (0.008)    | 0 (0.000) |     5.34 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            2 |     3488 | 2024-06-04 | Wildcard       | L   | 0.402      | -            | -                | -                | -         |    -1.75 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            1 |     3498 | 2024-06-04 | TSM Impact     | W   | 0.400      | 0.371        | 0.007 (0.001)    | 0.037 (0.006)    | 0 (0.000) |     6.00 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,802.31)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-06-10 |      0.442 | $1,250.00      | $552.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
