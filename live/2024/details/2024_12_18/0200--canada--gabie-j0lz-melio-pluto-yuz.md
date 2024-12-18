### Roster Details<br />
Team Name: Canada<br />
Roster: Gabie, J0LZ, Melio, Pluto, YuZ<br />
Global Rank: [200](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_18.md)<br />
Regional Rank: [59]( ../../standings_americas_2024_12_18.md)<br />
<br />
Final Rank Value:  606.3<br />
<br />
Final Rank Value (606.3) = Starting Rank Value (671.0) + Head To Head Adjustments (-64.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 671.0
- 400 + ( ( 0.141 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 671.0


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
|           16 |      653 | 2024-11-15 | Metizport      | L   | 0.979      | -            | -                | -                | -         |    -0.93 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           15 |      655 | 2024-11-15 | Mindfreak      | L   | 0.978      | -            | -                | -                | -         |   -11.83 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           14 |      672 | 2024-11-14 | Norway         | L   | 0.974      | -            | -                | -                | -         |   -12.86 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           13 |      718 | 2024-11-13 | los kogutos    | L   | 0.966      | -            | -                | -                | -         |    -3.88 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           12 |      721 | 2024-11-13 | Turkey         | W   | 0.965      | 0.617        | 0.000 (0.000)    | 0.092 (0.055)    | 1 (0.965) |    17.30 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           11 |     1976 | 2024-09-24 | Aether         | L   | 0.634      | -            | -                | -                | -         |   -13.51 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|           10 |     2004 | 2024-09-23 | Mythic         | L   | 0.629      | -            | -                | -                | -         |   -11.73 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            9 |     2228 | 2024-09-15 | MIGHT          | L   | 0.576      | -            | -                | -                | -         |    -5.68 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            8 |     2326 | 2024-09-12 | Lore           | W   | 0.556      | 0.371        | 0.000 (0.000)    | 0.077 (0.016)    | 0 (0.000) |     5.35 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            7 |     2420 | 2024-09-09 | Akimbo         | L   | 0.536      | -            | -                | -                | -         |    -7.03 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            6 |     2872 | 2024-08-26 | Mythic         | L   | 0.443      | -            | -                | -                | -         |    -8.76 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            5 |     2886 | 2024-08-26 | E-Xolos LAZER  | L   | 0.441      | -            | -                | -                | -         |    -5.33 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            4 |     3402 | 2024-08-11 | InControl      | L   | 0.342      | -            | -                | -                | -         |    -5.67 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            3 |     3427 | 2024-08-10 | Vibe           | W   | 0.334      | 0.371        | 0.000 (0.000)    | 0.010 (0.001)    | 0 (0.000) |     2.87 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            2 |     3565 | 2024-08-06 | DETONATE       | L   | 0.308      | -            | -                | -                | -         |    -7.12 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            1 |     3923 | 2024-07-27 | Revenge Nation | W   | 0.241      | 0.371        | 0.004 (0.000)    | 0.187 (0.017)    | 0 (0.000) |     4.11 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($770.63)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
