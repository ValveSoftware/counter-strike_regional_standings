### Roster Details<br />
Team Name: NKT<br />
Roster: cool4st, fr0k, icyvl0ne, xerolte, XigN<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [157](../standings_global.md)<br />
Regional Rank: [14]( ../standings_asia.md)<br />
Final Rank Value:  692.4<br />
<br />
Final Rank Value (692.4) = Starting Rank Value (691.2) + Head To Head Adjustments (1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.288[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.051[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 691.2
- 400 + ( ( 0.143 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 691.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     3550 | 2024-01-31 | Rare Atom   | L   | 0.274      | -            | -                | -                | -         |    -4.43 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|           11 |     3555 | 2024-01-31 | ATOX        | L   | 0.274      | -            | -                | -                | -         |    -1.70 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|           10 |     3557 | 2024-01-31 | Lynn Vision | W   | 0.273      | 0.143        | 0.126 (0.005)    | 0.258 (0.010)    | 0 (0.000) |     8.09 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            9 |     3591 | 2024-01-28 | The MongolZ | L   | 0.253      | -            | -                | -                | -         |    -0.01 | cool4st, dobu, MiQ, xerolte, XigN      |
|            8 |     3604 | 2024-01-27 | E9          | W   | 0.247      | 0.435        | 0.001 (0.000)    | 0.009 (0.001)    | 1 (0.247) |     3.22 | cool4st, dobu, MiQ, xerolte, XigN      |
|            7 |     3624 | 2024-01-26 | Lynn Vision | L   | 0.241      | -            | -                | -                | -         |    -0.44 | cool4st, dobu, MiQ, xerolte, XigN      |
|            6 |     3625 | 2024-01-26 | E9          | W   | 0.240      | 0.435        | 0.001 (0.000)    | 0.009 (0.001)    | 1 (0.240) |     3.17 | cool4st, dobu, MiQ, xerolte, XigN      |
|            5 |     3780 | 2024-01-20 | The Huns    | L   | 0.200      | -            | -                | -                | -         |    -4.63 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            4 |     3840 | 2024-01-19 | The MongolZ | L   | 0.193      | -            | -                | -                | -         |    -0.01 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            3 |     4017 | 2024-01-15 | Memo        | W   | 0.168      | 0.143        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     0.88 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            2 |     4024 | 2024-01-15 | Tseg Taslal | W   | 0.167      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.87 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            1 |     4026 | 2024-01-15 | The Huns    | L   | 0.167      | -            | -                | -                | -         |    -3.88 | cool4st, fr0k, icyvl0ne, xerolte, XigN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,016.73)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
