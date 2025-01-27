### Roster Details<br />
Team Name: Canada<br />
Roster: Gabie, J0LZ, Melio, Pluto, YuZ<br />
Global Rank: [208](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_27.md)<br />
Regional Rank: [62]( ../../standings_americas_2025_01_27.md)<br />
<br />
Final Rank Value:  555.0<br />
<br />
Final Rank Value (555.0) = Starting Rank Value (580.5) + Head To Head Adjustments (-25.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.093[<sup>2</sup>](#table1)

The average of these factors is 0.092<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 580.5
- 400 + ( ( 0.092 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 580.5


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
|           15 |     1008 | 2024-11-15 | Metizport     | L   | 0.712      | -            | -                | -                | -         |    -0.40 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           14 |     1010 | 2024-11-15 | Mindfreak     | L   | 0.712      | -            | -                | -                | -         |    -7.24 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           13 |     1027 | 2024-11-14 | Norway        | L   | 0.707      | -            | -                | -                | -         |    -8.18 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           12 |     1073 | 2024-11-13 | los kogutos   | L   | 0.699      | -            | -                | -                | -         |    -1.77 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           11 |     1076 | 2024-11-13 | Turkey        | W   | 0.699      | 0.617        | 0.000 (0.000)    | 0.079 (0.034)    | 1 (0.699) |    14.04 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           10 |     2331 | 2024-09-24 | Aether        | L   | 0.368      | -            | -                | -                | -         |    -6.89 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            9 |     2359 | 2024-09-23 | Mythic        | L   | 0.362      | -            | -                | -                | -         |    -6.36 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            8 |     2583 | 2024-09-15 | MIGHT         | L   | 0.309      | -            | -                | -                | -         |    -2.22 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            7 |     2681 | 2024-09-12 | Lore          | W   | 0.289      | 0.371        | 0.000 (0.000)    | 0.059 (0.006)    | 0 (0.000) |     2.51 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            6 |     2775 | 2024-09-09 | Akimbo        | L   | 0.269      | -            | -                | -                | -         |    -2.69 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            5 |     3227 | 2024-08-26 | Mythic        | L   | 0.176      | -            | -                | -                | -         |    -3.18 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            4 |     3241 | 2024-08-26 | E-Xolos LAZER | L   | 0.174      | -            | -                | -                | -         |    -1.90 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            3 |     3757 | 2024-08-11 | InControl     | L   | 0.076      | -            | -                | -                | -         |    -0.98 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            2 |     3782 | 2024-08-10 | Vibe          | W   | 0.068      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.57 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            1 |     3920 | 2024-08-06 | DETONATE      | L   | 0.042      | -            | -                | -                | -         |    -0.85 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($437.38)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
