### Roster Details<br />
Team Name: Mindfreak<br />
Roster: Forleks, gump, Sliimey, supar, tucks<br />
Global Rank: [170](../standings_global.md)<br />
<br />
Region: [Asia]( ../standings_asia.md)<br />
Regional Rank: [18]( ../standings_asia.md)<br />
<br />
Final Rank Value:  666.9<br />
<br />
Final Rank Value (666.9) = Starting Rank Value (649.5) + Head To Head Adjustments (17.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.287[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 649.5
- 400 + ( ( 0.126 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 649.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     3315 | 2024-04-10 | DXA                | W   | 0.357      | 0.333        | 0.002 (0.000)    | 0.240 (0.029)    | 0 (0.000) |     5.54 | Forleks, gump, Sliimey, supar, tucks |
|            9 |     3322 | 2024-04-10 | DXA                | W   | 0.357      | 0.333        | 0.002 (0.000)    | 0.240 (0.029)    | 0 (0.000) |     5.71 | Forleks, gump, Sliimey, supar, tucks |
|            8 |     3547 | 2024-04-03 | Canon Event        | W   | 0.310      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.87 | Forleks, gump, Sliimey, supar, tucks |
|            7 |     3551 | 2024-04-03 | Canon Event        | W   | 0.310      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.94 | Forleks, gump, Sliimey, supar, tucks |
|            6 |     3672 | 2024-03-27 | Bad News Kangaroos | W   | 0.264      | 0.333        | 0.014 (0.001)    | 0.084 (0.007)    | 0 (0.000) |     5.21 | Forleks, gump, Sliimey, supar, tucks |
|            5 |     3679 | 2024-03-27 | Bad News Kangaroos | L   | 0.264      | -            | -                | -                | -         |    -3.15 | Forleks, gump, Sliimey, supar, tucks |
|            4 |     4119 | 2024-03-06 | Rooster            | L   | 0.124      | -            | -                | -                | -         |    -1.38 | Forleks, gump, Sliimey, supar, tucks |
|            3 |     4126 | 2024-03-06 | Rooster            | L   | 0.124      | -            | -                | -                | -         |    -1.39 | Forleks, gump, Sliimey, supar, tucks |
|            2 |     4421 | 2024-02-21 | KZG                | W   | 0.031      | 0.333        | 0.005 (0.000)    | 0.145 (0.001)    | 0 (0.000) |     0.53 | Forleks, gump, Sliimey, supar, tucks |
|            1 |     4428 | 2024-02-21 | KZG                | W   | 0.031      | 0.333        | 0.005 (0.000)    | 0.145 (0.001)    | 0 (0.000) |     0.53 | Forleks, gump, Sliimey, supar, tucks |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,059.60)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
