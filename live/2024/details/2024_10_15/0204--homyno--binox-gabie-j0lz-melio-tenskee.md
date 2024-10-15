### Roster Details<br />
Team Name: Homyno<br />
Roster: BiNoX, Gabie, J0LZ, Melio, TENSKEE<br />
Global Rank: [204](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_15.md)<br />
Regional Rank: [59]( ../../standings_americas_2024_10_15.md)<br />
<br />
Final Rank Value:  574.5<br />
<br />
Final Rank Value (574.5) = Starting Rank Value (658.3) + Head To Head Adjustments (-83.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.307[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 658.3
- 400 + ( ( 0.133 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 658.3


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
|           24 |      649 | 2024-09-24 | Aether         | L   | 1.000      | -            | -                | -                | -         |   -18.95 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           23 |      677 | 2024-09-23 | Mythic         | L   | 1.000      | -            | -                | -                | -         |   -10.54 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           22 |      901 | 2024-09-15 | MIGHT          | L   | 1.000      | -            | -                | -                | -         |   -12.53 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           21 |      999 | 2024-09-12 | Lore           | W   | 0.983      | 0.371        | 0.000 (0.000)    | 0.101 (0.037)    | 0 (0.000) |    11.31 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           20 |     1093 | 2024-09-09 | Akimbo         | L   | 0.964      | -            | -                | -                | -         |    -7.98 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           19 |     1545 | 2024-08-26 | Mythic         | L   | 0.870      | -            | -                | -                | -         |    -8.98 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           18 |     1559 | 2024-08-26 | E-Xolos LAZER  | L   | 0.869      | -            | -                | -                | -         |    -7.51 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           17 |     2075 | 2024-08-11 | InControl      | L   | 0.770      | -            | -                | -                | -         |   -10.30 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           16 |     2100 | 2024-08-10 | Vibe           | W   | 0.762      | 0.371        | 0.000 (0.000)    | 0.023 (0.006)    | 0 (0.000) |     7.44 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           15 |     2238 | 2024-08-06 | DETONATE       | L   | 0.736      | -            | -                | -                | -         |   -15.21 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           14 |     2295 | 2024-08-04 | FLUFFY AIMERS  | L   | 0.722      | -            | -                | -                | -         |    -7.21 | BiNoX, J0LZ, Melio, Sup3rant, TENSKEE |
|           13 |     2596 | 2024-07-27 | Revenge Nation | W   | 0.669      | 0.371        | 0.005 (0.001)    | 0.251 (0.062)    | 0 (0.000) |    13.69 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           12 |     3319 | 2024-06-15 | E-Xolos LAZER  | L   | 0.390      | -            | -                | -                | -         |    -3.91 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|           11 |     3354 | 2024-06-14 | Akimbo         | L   | 0.383      | -            | -                | -                | -         |    -3.55 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|           10 |     3397 | 2024-06-13 | DETONATE       | W   | 0.377      | 0.143        | 0.000 (0.000)    | 0.119 (0.006)    | 0 (0.000) |     3.84 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            9 |     3428 | 2024-06-12 | E-Xolos LAZER  | L   | 0.370      | -            | -                | -                | -         |    -3.79 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            8 |     3430 | 2024-06-12 | DETONATE       | W   | 0.369      | 0.143        | 0.000 (0.000)    | 0.119 (0.006)    | 0 (0.000) |     3.72 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            7 |     3451 | 2024-06-11 | Final Form     | L   | 0.362      | -            | -                | -                | -         |    -8.06 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            6 |     3480 | 2024-06-10 | E-Xolos LAZER  | L   | 0.355      | -            | -                | -                | -         |    -3.84 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            5 |     3568 | 2024-06-08 | LAG            | L   | 0.343      | -            | -                | -                | -         |    -5.45 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            4 |     3623 | 2024-06-07 | E-Xolos LAZER  | L   | 0.337      | -            | -                | -                | -         |    -3.82 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            3 |     3690 | 2024-06-06 | Limitless      | W   | 0.329      | 0.371        | 0.000 (0.000)    | 0.039 (0.005)    | 0 (0.000) |     4.08 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            2 |     3805 | 2024-06-04 | Wildcard       | L   | 0.316      | -            | -                | -                | -         |    -0.73 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            1 |     3815 | 2024-06-04 | TSM Impact     | W   | 0.315      | 0.371        | 0.005 (0.001)    | 0.024 (0.003)    | 0 (0.000) |     4.47 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,695.83)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-06-10 |      0.357 | $1,250.00      | $445.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
