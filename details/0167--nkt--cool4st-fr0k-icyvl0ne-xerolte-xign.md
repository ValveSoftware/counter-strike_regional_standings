### Roster Details<br />
Team Name: NKT<br />
Roster: cool4st, fr0k, icyvl0ne, xerolte, XigN<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [167](../standings_global.md)<br />
Regional Rank: [16]( ../standings_asia.md)<br />
Final Rank Value:  664.3<br />
<br />
Final Rank Value (664.3) = Starting Rank Value (662.2) + Head To Head Adjustments (2.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.262[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.020[<sup>2</sup>](#table1)

The average of these factors is 0.124<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.2
- 400 + ( ( 0.124 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 662.2


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
|           12 |     3683 | 2024-01-31 | Rare Atom   | L   | 0.119      | -            | -                | -                | -         |    -1.77 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|           11 |     3688 | 2024-01-31 | ATOX        | L   | 0.118      | -            | -                | -                | -         |    -0.63 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|           10 |     3690 | 2024-01-31 | Lynn Vision | W   | 0.117      | 0.143        | 0.127 (0.002)    | 0.221 (0.004)    | 0 (0.000) |     3.47 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            9 |     3724 | 2024-01-28 | The MongolZ | L   | 0.098      | -            | -                | -                | -         |    -0.00 | cool4st, dobu, MiQ, xerolte, XigN      |
|            8 |     3737 | 2024-01-27 | E9          | W   | 0.091      | 0.435        | 0.000 (0.000)    | 0.004 (0.000)    | 1 (0.091) |     1.22 | cool4st, dobu, MiQ, xerolte, XigN      |
|            7 |     3757 | 2024-01-26 | Lynn Vision | L   | 0.085      | -            | -                | -                | -         |    -0.16 | cool4st, dobu, MiQ, xerolte, XigN      |
|            6 |     3758 | 2024-01-26 | E9          | W   | 0.085      | 0.435        | 0.000 (0.000)    | 0.004 (0.000)    | 1 (0.085) |     1.13 | cool4st, dobu, MiQ, xerolte, XigN      |
|            5 |     3913 | 2024-01-20 | The Huns    | L   | 0.045      | -            | -                | -                | -         |    -1.01 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            4 |     3973 | 2024-01-19 | The MongolZ | L   | 0.038      | -            | -                | -                | -         |    -0.00 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            3 |     4150 | 2024-01-15 | Memo        | W   | 0.013      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.07 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            2 |     4157 | 2024-01-15 | Tseg Taslal | W   | 0.012      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.07 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            1 |     4159 | 2024-01-15 | The Huns    | L   | 0.011      | -            | -                | -                | -         |    -0.26 | cool4st, fr0k, icyvl0ne, xerolte, XigN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($394.04)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
