### Roster Details<br />
Team Name: Canada<br />
Roster: Gabie, J0LZ, Melio, Pluto, YuZ<br />
Global Rank: [193](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_13.md)<br />
Regional Rank: [57]( ../../standings_americas_2025_01_13.md)<br />
<br />
Final Rank Value:  620.9<br />
<br />
Final Rank Value (620.9) = Starting Rank Value (668.7) + Head To Head Adjustments (-47.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.276[<sup>1</sup>](#table2)
- Bounty Collected: 0.168[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.094[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 668.7
- 400 + ( ( 0.135 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 668.7


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
|           16 |      792 | 2024-11-15 | Metizport      | L   | 0.806      | -            | -                | -                | -         |    -0.66 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           15 |      794 | 2024-11-15 | Mindfreak      | L   | 0.806      | -            | -                | -                | -         |   -10.14 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           14 |      811 | 2024-11-14 | Norway         | L   | 0.801      | -            | -                | -                | -         |   -11.31 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           13 |      857 | 2024-11-13 | los kogutos    | L   | 0.793      | -            | -                | -                | -         |    -2.89 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           12 |      860 | 2024-11-13 | Turkey         | W   | 0.793      | 0.617        | 0.000 (0.000)    | 0.075 (0.037)    | 1 (0.793) |    13.77 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           11 |     2115 | 2024-09-24 | Aether         | L   | 0.462      | -            | -                | -                | -         |   -10.01 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|           10 |     2143 | 2024-09-23 | Mythic         | L   | 0.456      | -            | -                | -                | -         |    -9.03 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            9 |     2367 | 2024-09-15 | MIGHT          | L   | 0.404      | -            | -                | -                | -         |    -3.86 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            8 |     2465 | 2024-09-12 | Lore           | W   | 0.383      | 0.371        | 0.000 (0.000)    | 0.063 (0.009)    | 0 (0.000) |     3.62 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            7 |     2559 | 2024-09-09 | Akimbo         | L   | 0.364      | -            | -                | -                | -         |    -4.90 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            6 |     3011 | 2024-08-26 | Mythic         | L   | 0.270      | -            | -                | -                | -         |    -5.56 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            5 |     3025 | 2024-08-26 | E-Xolos LAZER  | L   | 0.269      | -            | -                | -                | -         |    -3.45 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            4 |     3541 | 2024-08-11 | InControl      | L   | 0.170      | -            | -                | -                | -         |    -2.77 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            3 |     3566 | 2024-08-10 | Vibe           | W   | 0.162      | 0.371        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     1.36 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            2 |     3704 | 2024-08-06 | DETONATE       | L   | 0.136      | -            | -                | -                | -         |    -3.15 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            1 |     4062 | 2024-07-27 | Revenge Nation | W   | 0.069      | 0.371        | 0.004 (0.000)    | 0.149 (0.004)    | 0 (0.000) |     1.17 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($555.06)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
