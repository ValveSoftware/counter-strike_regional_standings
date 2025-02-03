### Roster Details<br />
Team Name: Canada<br />
Roster: Gabie, J0LZ, Melio, Pluto, YuZ<br />
Global Rank: [200](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_03.md)<br />
Regional Rank: [61]( ../../standings_americas_2025_02_03.md)<br />
<br />
Final Rank Value:  550.8<br />
<br />
Final Rank Value (550.8) = Starting Rank Value (572.6) + Head To Head Adjustments (-21.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.270[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.082[<sup>2</sup>](#table1)

The average of these factors is 0.089<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 572.6
- 400 + ( ( 0.089 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 572.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1126 | 2024-11-15 | Metizport     | L   | 0.665      | -            | -                | -                | -         |    -0.46 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           13 |     1128 | 2024-11-15 | Mindfreak     | L   | 0.665      | -            | -                | -                | -         |    -6.70 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           12 |     1145 | 2024-11-14 | Norway        | L   | 0.661      | -            | -                | -                | -         |    -8.04 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           11 |     1191 | 2024-11-13 | los kogutos   | L   | 0.652      | -            | -                | -                | -         |    -1.79 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           10 |     1194 | 2024-11-13 | Turkey        | W   | 0.652      | 0.617        | 0.000 (0.000)    | 0.080 (0.032)    | 1 (0.652) |    12.84 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|            9 |     2449 | 2024-09-24 | Aether        | L   | 0.321      | -            | -                | -                | -         |    -6.00 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            8 |     2477 | 2024-09-23 | Mythic        | L   | 0.315      | -            | -                | -                | -         |    -5.71 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            7 |     2701 | 2024-09-15 | MIGHT         | L   | 0.263      | -            | -                | -                | -         |    -2.02 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            6 |     2799 | 2024-09-12 | Lore          | W   | 0.242      | 0.371        | 0.000 (0.000)    | 0.055 (0.005)    | 0 (0.000) |     2.15 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            5 |     2893 | 2024-09-09 | Akimbo        | L   | 0.223      | -            | -                | -                | -         |    -2.09 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            4 |     3345 | 2024-08-26 | Mythic        | L   | 0.129      | -            | -                | -                | -         |    -2.40 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            3 |     3359 | 2024-08-26 | E-Xolos LAZER | L   | 0.128      | -            | -                | -                | -         |    -1.38 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            2 |     3875 | 2024-08-11 | InControl     | L   | 0.029      | -            | -                | -                | -         |    -0.37 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            1 |     3900 | 2024-08-10 | Vibe          | W   | 0.021      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.18 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($378.92)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
