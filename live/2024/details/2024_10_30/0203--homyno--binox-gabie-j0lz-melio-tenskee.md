### Roster Details<br />
Team Name: Homyno<br />
Roster: BiNoX, Gabie, J0LZ, Melio, TENSKEE<br />
Global Rank: [203](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_30.md)<br />
Regional Rank: [61]( ../../standings_americas_2024_10_30.md)<br />
<br />
Final Rank Value:  592.1<br />
<br />
Final Rank Value (592.1) = Starting Rank Value (663.7) + Head To Head Adjustments (-71.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.312[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 663.7
- 400 + ( ( 0.133 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 663.7


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
|           24 |      957 | 2024-09-24 | Aether         | L   | 0.961      | -            | -                | -                | -         |   -18.73 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           23 |      985 | 2024-09-23 | Mythic         | L   | 0.955      | -            | -                | -                | -         |   -10.29 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           22 |     1209 | 2024-09-15 | MIGHT          | L   | 0.903      | -            | -                | -                | -         |    -9.37 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           21 |     1307 | 2024-09-12 | Lore           | W   | 0.882      | 0.371        | 0.000 (0.000)    | 0.098 (0.032)    | 0 (0.000) |     9.78 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           20 |     1401 | 2024-09-09 | Akimbo         | L   | 0.863      | -            | -                | -                | -         |    -7.21 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           19 |     1853 | 2024-08-26 | Mythic         | L   | 0.769      | -            | -                | -                | -         |    -8.22 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           18 |     1867 | 2024-08-26 | E-Xolos LAZER  | L   | 0.768      | -            | -                | -                | -         |    -6.17 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           17 |     2383 | 2024-08-11 | InControl      | L   | 0.669      | -            | -                | -                | -         |    -9.07 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           16 |     2408 | 2024-08-10 | Vibe           | W   | 0.661      | 0.371        | 0.000 (0.000)    | 0.020 (0.005)    | 0 (0.000) |     6.34 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           15 |     2546 | 2024-08-06 | DETONATE       | L   | 0.635      | -            | -                | -                | -         |   -13.46 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           14 |     2603 | 2024-08-04 | FLUFFY AIMERS  | L   | 0.622      | -            | -                | -                | -         |    -5.59 | BiNoX, J0LZ, Melio, Sup3rant, TENSKEE |
|           13 |     2904 | 2024-07-27 | Revenge Nation | W   | 0.568      | 0.371        | 0.007 (0.001)    | 0.242 (0.051)    | 0 (0.000) |    11.72 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           12 |     3627 | 2024-06-15 | E-Xolos LAZER  | L   | 0.289      | -            | -                | -                | -         |    -2.61 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|           11 |     3662 | 2024-06-14 | Akimbo         | L   | 0.283      | -            | -                | -                | -         |    -2.62 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|           10 |     3705 | 2024-06-13 | DETONATE       | W   | 0.276      | 0.143        | 0.000 (0.000)    | 0.104 (0.004)    | 0 (0.000) |     2.72 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            9 |     3736 | 2024-06-12 | E-Xolos LAZER  | L   | 0.269      | -            | -                | -                | -         |    -2.46 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            8 |     3738 | 2024-06-12 | DETONATE       | W   | 0.268      | 0.143        | 0.000 (0.000)    | 0.104 (0.004)    | 0 (0.000) |     2.62 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            7 |     3759 | 2024-06-11 | Final Form     | L   | 0.262      | -            | -                | -                | -         |    -5.90 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            6 |     3788 | 2024-06-10 | E-Xolos LAZER  | L   | 0.254      | -            | -                | -                | -         |    -2.41 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            5 |     3876 | 2024-06-08 | LAG            | L   | 0.242      | -            | -                | -                | -         |    -3.95 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            4 |     3931 | 2024-06-07 | E-Xolos LAZER  | L   | 0.236      | -            | -                | -                | -         |    -2.30 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            3 |     3998 | 2024-06-06 | Limitless      | W   | 0.228      | 0.371        | 0.000 (0.000)    | 0.026 (0.002)    | 0 (0.000) |     2.98 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            2 |     4113 | 2024-06-04 | Wildcard       | L   | 0.216      | -            | -                | -                | -         |    -0.41 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            1 |     4123 | 2024-06-04 | TSM Impact     | W   | 0.214      | 0.371        | 0.004 (0.000)    | 0.013 (0.001)    | 0 (0.000) |     3.08 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,499.01)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.943 | $1,250.00      | $1,179.13       |
| 2024-06-10 |      0.256 | $1,250.00      | $319.87         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
