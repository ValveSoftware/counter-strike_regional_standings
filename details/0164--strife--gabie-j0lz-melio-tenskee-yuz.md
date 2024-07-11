### Roster Details<br />
Team Name: Strife<br />
Roster: Gabie, J0LZ, Melio, TENSKEE, YuZ<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [164](../standings_global.md)<br />
Regional Rank: [46]( ../standings_americas.md)<br />
Final Rank Value:  679.3<br />
<br />
Final Rank Value (679.3) = Starting Rank Value (727.2) + Head To Head Adjustments (-48.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.345[<sup>1</sup>](#table2)
- Bounty Collected: 0.255[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.155<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 727.2
- 400 + ( ( 0.155 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 727.2


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
|           15 |      171 | 2024-06-15 | E-Xolos LAZER  | L   | 1.000      | -            | -                | -                | -         |   -11.20 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|           14 |      206 | 2024-06-14 | OMiT           | L   | 1.000      | -            | -                | -                | -         |    -8.77 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|           13 |      249 | 2024-06-13 | regain         | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.041 (0.006)    | 0 (0.000) |     8.03 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|           12 |      280 | 2024-06-12 | E-Xolos LAZER  | L   | 1.000      | -            | -                | -                | -         |   -11.98 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|           11 |      282 | 2024-06-12 | regain         | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.041 (0.006)    | 0 (0.000) |     7.47 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|           10 |      303 | 2024-06-11 | Final Form     | L   | 1.000      | -            | -                | -                | -         |   -17.39 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            9 |      332 | 2024-06-10 | E-Xolos LAZER  | L   | 0.994      | -            | -                | -                | -         |   -13.84 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            8 |      420 | 2024-06-08 | LAG            | L   | 0.982      | -            | -                | -                | -         |    -9.59 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            7 |      475 | 2024-06-07 | E-Xolos LAZER  | L   | 0.976      | -            | -                | -                | -         |   -15.87 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            6 |      542 | 2024-06-06 | Limitless      | W   | 0.968      | 0.371        | 0.002 (0.001)    | 0.225 (0.081)    | 0 (0.000) |    10.87 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            5 |      657 | 2024-06-04 | Wildcard       | L   | 0.955      | -            | -                | -                | -         |    -5.47 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            4 |      667 | 2024-06-04 | TSM Shimmer    | W   | 0.954      | 0.371        | 0.028 (0.010)    | 0.228 (0.081)    | 0 (0.000) |    15.23 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            3 |     2536 | 2024-03-23 | Revenge Nation | L   | 0.469      | -            | -                | -                | -         |    -8.00 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            2 |     2563 | 2024-03-21 | Final Form     | W   | 0.456      | 0.359        | 0.005 (0.001)    | 0.081 (0.013)    | 0 (0.000) |     6.08 | Gabie, J0LZ, Melio, TENSKEE, YuZ |
|            1 |     2612 | 2024-03-19 | Akimbo         | W   | 0.443      | 0.359        | 0.005 (0.001)    | 0.097 (0.015)    | 0 (0.000) |     6.46 | Gabie, J0LZ, Melio, TENSKEE, YuZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,261.28)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      0.996 | $1,250.00      | $1,244.73       |
| 2024-03-23 |      0.469 | $4,300.00      | $2,016.55       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
