### Roster Details<br />
Team Name: Canada<br />
Roster: Gabie, J0LZ, Melio, Pluto, YuZ<br />
Global Rank: [196](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_06.md)<br />
Regional Rank: [57]( ../../standings_americas_2025_01_06.md)<br />
<br />
Final Rank Value:  618.1<br />
<br />
Final Rank Value (618.1) = Starting Rank Value (671.0) + Head To Head Adjustments (-52.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.275[<sup>1</sup>](#table2)
- Bounty Collected: 0.174[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.094[<sup>2</sup>](#table1)

The average of these factors is 0.137<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 671.0
- 400 + ( ( 0.137 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 671.0


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
|           16 |      751 | 2024-11-15 | Metizport      | L   | 0.852      | -            | -                | -                | -         |    -0.74 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           15 |      753 | 2024-11-15 | Mindfreak      | L   | 0.852      | -            | -                | -                | -         |   -10.63 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           14 |      770 | 2024-11-14 | Norway         | L   | 0.848      | -            | -                | -                | -         |   -11.82 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           13 |      816 | 2024-11-13 | los kogutos    | L   | 0.840      | -            | -                | -                | -         |    -3.21 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           12 |      819 | 2024-11-13 | Turkey         | W   | 0.839      | 0.617        | 0.000 (0.000)    | 0.076 (0.039)    | 1 (0.839) |    14.66 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           11 |     2074 | 2024-09-24 | Aether         | L   | 0.508      | -            | -                | -                | -         |   -10.98 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|           10 |     2102 | 2024-09-23 | Mythic         | L   | 0.502      | -            | -                | -                | -         |    -9.87 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            9 |     2326 | 2024-09-15 | MIGHT          | L   | 0.450      | -            | -                | -                | -         |    -4.31 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            8 |     2424 | 2024-09-12 | Lore           | W   | 0.429      | 0.371        | 0.000 (0.000)    | 0.065 (0.010)    | 0 (0.000) |     4.06 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            7 |     2518 | 2024-09-09 | Akimbo         | L   | 0.410      | -            | -                | -                | -         |    -5.49 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            6 |     2970 | 2024-08-26 | Mythic         | L   | 0.316      | -            | -                | -                | -         |    -6.50 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            5 |     2984 | 2024-08-26 | E-Xolos LAZER  | L   | 0.315      | -            | -                | -                | -         |    -3.99 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            4 |     3500 | 2024-08-11 | InControl      | L   | 0.216      | -            | -                | -                | -         |    -3.54 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            3 |     3525 | 2024-08-10 | Vibe           | W   | 0.208      | 0.371        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     1.76 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            2 |     3663 | 2024-08-06 | DETONATE       | L   | 0.182      | -            | -                | -                | -         |    -4.22 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            1 |     4021 | 2024-07-27 | Revenge Nation | W   | 0.115      | 0.371        | 0.004 (0.000)    | 0.156 (0.007)    | 0 (0.000) |     1.96 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($612.85)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
