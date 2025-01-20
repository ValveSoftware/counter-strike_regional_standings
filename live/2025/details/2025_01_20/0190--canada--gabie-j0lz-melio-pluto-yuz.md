### Roster Details<br />
Team Name: Canada<br />
Roster: Gabie, J0LZ, Melio, Pluto, YuZ<br />
Global Rank: [190](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_20.md)<br />
Regional Rank: [55]( ../../standings_americas_2025_01_20.md)<br />
<br />
Final Rank Value:  619.9<br />
<br />
Final Rank Value (619.9) = Starting Rank Value (662.8) + Head To Head Adjustments (-42.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.157[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.093[<sup>2</sup>](#table1)

The average of these factors is 0.132<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.8
- 400 + ( ( 0.132 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 662.8


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
|           16 |      805 | 2024-11-15 | Metizport      | L   | 0.764      | -            | -                | -                | -         |    -0.60 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           15 |      807 | 2024-11-15 | Mindfreak      | L   | 0.764      | -            | -                | -                | -         |    -9.64 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           14 |      824 | 2024-11-14 | Norway         | L   | 0.759      | -            | -                | -                | -         |   -10.74 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           13 |      870 | 2024-11-13 | los kogutos    | L   | 0.751      | -            | -                | -                | -         |    -2.68 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           12 |      873 | 2024-11-13 | Turkey         | W   | 0.751      | 0.617        | 0.000 (0.000)    | 0.077 (0.036)    | 1 (0.751) |    13.05 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           11 |     2128 | 2024-09-24 | Aether         | L   | 0.420      | -            | -                | -                | -         |    -9.06 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|           10 |     2156 | 2024-09-23 | Mythic         | L   | 0.414      | -            | -                | -                | -         |    -8.31 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            9 |     2380 | 2024-09-15 | MIGHT          | L   | 0.361      | -            | -                | -                | -         |    -3.42 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            8 |     2478 | 2024-09-12 | Lore           | W   | 0.341      | 0.371        | 0.000 (0.000)    | 0.062 (0.008)    | 0 (0.000) |     3.25 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            7 |     2572 | 2024-09-09 | Akimbo         | L   | 0.321      | -            | -                | -                | -         |    -4.34 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            6 |     3024 | 2024-08-26 | Mythic         | L   | 0.228      | -            | -                | -                | -         |    -4.73 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            5 |     3038 | 2024-08-26 | E-Xolos LAZER  | L   | 0.226      | -            | -                | -                | -         |    -2.92 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            4 |     3554 | 2024-08-11 | InControl      | L   | 0.128      | -            | -                | -                | -         |    -2.06 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            3 |     3579 | 2024-08-10 | Vibe           | W   | 0.120      | 0.371        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     1.01 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            2 |     3717 | 2024-08-06 | DETONATE       | L   | 0.094      | -            | -                | -                | -         |    -2.17 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            1 |     4075 | 2024-07-27 | Revenge Nation | W   | 0.027      | 0.371        | 0.004 (0.000)    | 0.144 (0.001)    | 0 (0.000) |     0.46 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($502.51)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
