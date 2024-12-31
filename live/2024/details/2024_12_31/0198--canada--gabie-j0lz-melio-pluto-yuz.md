### Roster Details<br />
Team Name: Canada<br />
Roster: Gabie, J0LZ, Melio, Pluto, YuZ<br />
Global Rank: [198](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_31.md)<br />
Regional Rank: [58]( ../../standings_americas_2024_12_31.md)<br />
<br />
Final Rank Value:  612.8<br />
<br />
Final Rank Value (612.8) = Starting Rank Value (670.6) + Head To Head Adjustments (-57.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.178[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.096[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 670.6
- 400 + ( ( 0.139 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 670.6


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
|           16 |      736 | 2024-11-15 | Metizport      | L   | 0.905      | -            | -                | -                | -         |    -0.80 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           15 |      738 | 2024-11-15 | Mindfreak      | L   | 0.905      | -            | -                | -                | -         |   -11.15 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           14 |      755 | 2024-11-14 | Norway         | L   | 0.900      | -            | -                | -                | -         |   -12.27 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           13 |      801 | 2024-11-13 | los kogutos    | L   | 0.892      | -            | -                | -                | -         |    -3.48 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           12 |      804 | 2024-11-13 | Turkey         | W   | 0.892      | 0.617        | 0.000 (0.000)    | 0.083 (0.046)    | 1 (0.892) |    15.81 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           11 |     2059 | 2024-09-24 | Aether         | L   | 0.561      | -            | -                | -                | -         |   -12.04 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|           10 |     2087 | 2024-09-23 | Mythic         | L   | 0.555      | -            | -                | -                | -         |   -10.67 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            9 |     2311 | 2024-09-15 | MIGHT          | L   | 0.502      | -            | -                | -                | -         |    -4.90 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            8 |     2409 | 2024-09-12 | Lore           | W   | 0.482      | 0.371        | 0.000 (0.000)    | 0.071 (0.013)    | 0 (0.000) |     4.60 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            7 |     2503 | 2024-09-09 | Akimbo         | L   | 0.462      | -            | -                | -                | -         |    -6.14 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            6 |     2955 | 2024-08-26 | Mythic         | L   | 0.369      | -            | -                | -                | -         |    -7.46 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            5 |     2969 | 2024-08-26 | E-Xolos LAZER  | L   | 0.367      | -            | -                | -                | -         |    -4.57 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            4 |     3485 | 2024-08-11 | InControl      | L   | 0.268      | -            | -                | -                | -         |    -4.42 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            3 |     3510 | 2024-08-10 | Vibe           | W   | 0.261      | 0.371        | 0.000 (0.000)    | 0.008 (0.001)    | 0 (0.000) |     2.22 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            2 |     3648 | 2024-08-06 | DETONATE       | L   | 0.235      | -            | -                | -                | -         |    -5.43 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            1 |     4006 | 2024-07-27 | Revenge Nation | W   | 0.168      | 0.371        | 0.004 (0.000)    | 0.171 (0.011)    | 0 (0.000) |     2.85 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($678.60)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
