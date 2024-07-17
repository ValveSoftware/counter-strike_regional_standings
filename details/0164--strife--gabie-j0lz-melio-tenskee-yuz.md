### Roster Details<br />
Team Name: Strife<br />
Roster: Gabie, J0LZ, Melio, TENSKEE, YuZ<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [164](../standings_global.md)<br />
Regional Rank: [45]( ../standings_americas.md)<br />
Final Rank Value:  687.7<br />
<br />
Final Rank Value (687.7) = Starting Rank Value (730.9) + Head To Head Adjustments (-43.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.344[<sup>1</sup>](#table2)
- Bounty Collected: 0.254[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.154<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 730.9
- 400 + ( ( 0.154 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 730.9


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
|           15 |      335 | 2024-06-15 | E-Xolos LAZER  | L   | 0.990      | -            | -                | -                | -         |   -10.42 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|           14 |      370 | 2024-06-14 | OMiT           | L   | 0.983      | -            | -                | -                | -         |    -9.03 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|           13 |      413 | 2024-06-13 | regain         | W   | 0.976      | 0.143        | 0.000 (0.000)    | 0.040 (0.006)    | 0 (0.000) |     7.64 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|           12 |      444 | 2024-06-12 | E-Xolos LAZER  | L   | 0.970      | -            | -                | -                | -         |   -10.89 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|           11 |      446 | 2024-06-12 | regain         | W   | 0.969      | 0.143        | 0.000 (0.000)    | 0.040 (0.006)    | 0 (0.000) |     7.07 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|           10 |      467 | 2024-06-11 | Final Form     | L   | 0.962      | -            | -                | -                | -         |   -16.88 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            9 |      496 | 2024-06-10 | E-Xolos LAZER  | L   | 0.954      | -            | -                | -                | -         |   -12.38 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            8 |      584 | 2024-06-08 | LAG            | L   | 0.943      | -            | -                | -                | -         |    -8.62 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            7 |      639 | 2024-06-07 | E-Xolos LAZER  | L   | 0.936      | -            | -                | -                | -         |   -13.96 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            6 |      706 | 2024-06-06 | Limitless      | W   | 0.928      | 0.371        | 0.002 (0.001)    | 0.214 (0.074)    | 0 (0.000) |    10.44 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            5 |      821 | 2024-06-04 | Wildcard       | L   | 0.916      | -            | -                | -                | -         |    -5.00 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            4 |      831 | 2024-06-04 | TSM Shimmer    | W   | 0.914      | 0.371        | 0.028 (0.010)    | 0.217 (0.074)    | 0 (0.000) |    14.69 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            3 |     2700 | 2024-03-23 | Revenge Nation | L   | 0.429      | -            | -                | -                | -         |    -7.34 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            2 |     2727 | 2024-03-21 | Final Form     | W   | 0.416      | 0.359        | 0.005 (0.001)    | 0.079 (0.012)    | 0 (0.000) |     5.57 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            1 |     2776 | 2024-03-19 | Akimbo         | W   | 0.403      | 0.359        | 0.005 (0.001)    | 0.093 (0.013)    | 0 (0.000) |     5.86 | Gabie, J0LZ, Melio, TENSKEE, YuZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,041.44)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      0.956 | $1,250.00      | $1,195.22       |
| 2024-03-23 |      0.429 | $4,300.00      | $1,846.22       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
