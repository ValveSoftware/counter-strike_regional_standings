### Roster Details<br />
Team Name: Canada<br />
Roster: Gabie, J0LZ, Melio, Pluto, YuZ<br />
Global Rank: [191](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_17.md)<br />
Regional Rank: [55]( ../../standings_americas_2025_01_17.md)<br />
<br />
Final Rank Value:  620.4<br />
<br />
Final Rank Value (620.4) = Starting Rank Value (665.0) + Head To Head Adjustments (-44.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.275[<sup>1</sup>](#table2)
- Bounty Collected: 0.162[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.093[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 665.0
- 400 + ( ( 0.134 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 665.0


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
|           16 |      796 | 2024-11-15 | Metizport      | L   | 0.778      | -            | -                | -                | -         |    -0.61 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           15 |      798 | 2024-11-15 | Mindfreak      | L   | 0.777      | -            | -                | -                | -         |    -9.82 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           14 |      815 | 2024-11-14 | Norway         | L   | 0.773      | -            | -                | -                | -         |   -10.94 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           13 |      861 | 2024-11-13 | los kogutos    | L   | 0.765      | -            | -                | -                | -         |    -2.77 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           12 |      864 | 2024-11-13 | Turkey         | W   | 0.765      | 0.617        | 0.000 (0.000)    | 0.076 (0.036)    | 1 (0.765) |    13.26 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           11 |     2119 | 2024-09-24 | Aether         | L   | 0.433      | -            | -                | -                | -         |    -9.37 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|           10 |     2147 | 2024-09-23 | Mythic         | L   | 0.428      | -            | -                | -                | -         |    -8.55 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            9 |     2371 | 2024-09-15 | MIGHT          | L   | 0.375      | -            | -                | -                | -         |    -3.57 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            8 |     2469 | 2024-09-12 | Lore           | W   | 0.355      | 0.371        | 0.000 (0.000)    | 0.062 (0.008)    | 0 (0.000) |     3.36 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            7 |     2563 | 2024-09-09 | Akimbo         | L   | 0.335      | -            | -                | -                | -         |    -4.53 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            6 |     3015 | 2024-08-26 | Mythic         | L   | 0.242      | -            | -                | -                | -         |    -5.00 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            5 |     3029 | 2024-08-26 | E-Xolos LAZER  | L   | 0.240      | -            | -                | -                | -         |    -3.10 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            4 |     3545 | 2024-08-11 | InControl      | L   | 0.141      | -            | -                | -                | -         |    -2.29 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            3 |     3570 | 2024-08-10 | Vibe           | W   | 0.133      | 0.371        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     1.12 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            2 |     3708 | 2024-08-06 | DETONATE       | L   | 0.108      | -            | -                | -                | -         |    -2.49 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            1 |     4066 | 2024-07-27 | Revenge Nation | W   | 0.041      | 0.371        | 0.004 (0.000)    | 0.145 (0.002)    | 0 (0.000) |     0.69 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($519.47)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
