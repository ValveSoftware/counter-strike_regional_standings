### Roster Details<br />
Team Name: Canada<br />
Roster: Gabie, J0LZ, Melio, Pluto, YuZ<br />
Global Rank: [192](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_16.md)<br />
Regional Rank: [57]( ../../standings_americas_2025_01_16.md)<br />
<br />
Final Rank Value:  619.7<br />
<br />
Final Rank Value (619.7) = Starting Rank Value (665.7) + Head To Head Adjustments (-46.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.275[<sup>1</sup>](#table2)
- Bounty Collected: 0.163[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.093[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 665.7
- 400 + ( ( 0.134 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 665.7


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
|           16 |      819 | 2024-11-15 | Metizport      | L   | 0.784      | -            | -                | -                | -         |    -0.62 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           15 |      821 | 2024-11-15 | Mindfreak      | L   | 0.784      | -            | -                | -                | -         |    -9.87 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           14 |      838 | 2024-11-14 | Norway         | L   | 0.779      | -            | -                | -                | -         |   -11.00 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           13 |      884 | 2024-11-13 | los kogutos    | L   | 0.771      | -            | -                | -                | -         |    -2.78 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           12 |      887 | 2024-11-13 | Turkey         | W   | 0.771      | 0.617        | 0.000 (0.000)    | 0.076 (0.036)    | 1 (0.771) |    13.39 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           11 |     2142 | 2024-09-24 | Aether         | L   | 0.440      | -            | -                | -                | -         |    -9.49 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|           10 |     2170 | 2024-09-23 | Mythic         | L   | 0.434      | -            | -                | -                | -         |    -8.63 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            9 |     2394 | 2024-09-15 | MIGHT          | L   | 0.381      | -            | -                | -                | -         |    -3.49 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            8 |     2492 | 2024-09-12 | Lore           | W   | 0.361      | 0.371        | 0.000 (0.000)    | 0.062 (0.008)    | 0 (0.000) |     2.24 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            7 |     2586 | 2024-09-09 | Akimbo         | L   | 0.341      | -            | -                | -                | -         |    -4.47 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            6 |     3038 | 2024-08-26 | Mythic         | L   | 0.248      | -            | -                | -                | -         |    -5.12 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            5 |     3052 | 2024-08-26 | E-Xolos LAZER  | L   | 0.246      | -            | -                | -                | -         |    -3.10 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            4 |     3568 | 2024-08-11 | InControl      | L   | 0.147      | -            | -                | -                | -         |    -2.39 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            3 |     3593 | 2024-08-10 | Vibe           | W   | 0.139      | 0.371        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     1.18 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            2 |     3731 | 2024-08-06 | DETONATE       | L   | 0.114      | -            | -                | -                | -         |    -2.63 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            1 |     4089 | 2024-07-27 | Revenge Nation | W   | 0.047      | 0.371        | 0.004 (0.000)    | 0.146 (0.003)    | 0 (0.000) |     0.80 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($527.11)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
