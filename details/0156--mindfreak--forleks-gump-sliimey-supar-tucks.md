### Roster Details<br />
Team Name: Mindfreak<br />
Roster: Forleks, gump, Sliimey, supar, tucks<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [156](../standings_global.md)<br />
Regional Rank: [14]( ../standings_asia.md)<br />
Final Rank Value:  700.8<br />
<br />
Final Rank Value (700.8) = Starting Rank Value (674.7) + Head To Head Adjustments (26.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.299[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 674.7
- 400 + ( ( 0.136 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 674.7


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
|           12 |     2592 | 2024-04-10 | DXA                | W   | 0.498      | 0.333        | 0.003 (0.001)    | 0.217 (0.036)    | 0 (0.000) |     7.25 | Forleks, gump, Sliimey, supar, tucks |
|           11 |     2599 | 2024-04-10 | DXA                | W   | 0.497      | 0.333        | 0.003 (0.001)    | 0.217 (0.036)    | 0 (0.000) |     7.58 | Forleks, gump, Sliimey, supar, tucks |
|           10 |     2824 | 2024-04-03 | Canon Event        | W   | 0.451      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.63 | Forleks, gump, Sliimey, supar, tucks |
|            9 |     2828 | 2024-04-03 | Canon Event        | W   | 0.451      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.74 | Forleks, gump, Sliimey, supar, tucks |
|            8 |     2949 | 2024-03-27 | Bad News Kangaroos | W   | 0.405      | 0.333        | 0.023 (0.003)    | 0.134 (0.018)    | 0 (0.000) |     8.63 | Forleks, gump, Sliimey, supar, tucks |
|            7 |     2956 | 2024-03-27 | Bad News Kangaroos | L   | 0.404      | -            | -                | -                | -         |    -4.16 | Forleks, gump, Sliimey, supar, tucks |
|            6 |     3396 | 2024-03-06 | Rooster            | L   | 0.265      | -            | -                | -                | -         |    -2.73 | Forleks, gump, Sliimey, supar, tucks |
|            5 |     3403 | 2024-03-06 | Rooster            | L   | 0.264      | -            | -                | -                | -         |    -2.79 | Forleks, gump, Sliimey, supar, tucks |
|            4 |     3698 | 2024-02-21 | KZG                | W   | 0.171      | 0.333        | 0.007 (0.000)    | 0.130 (0.007)    | 0 (0.000) |     2.96 | Forleks, gump, Sliimey, supar, tucks |
|            3 |     3705 | 2024-02-21 | KZG                | W   | 0.171      | 0.333        | 0.007 (0.000)    | 0.130 (0.007)    | 0 (0.000) |     3.00 | Forleks, gump, Sliimey, supar, tucks |
|            2 |     3899 | 2024-02-14 | KZG                | L   | 0.124      | -            | -                | -                | -         |    -1.70 | deStiny, gump, Sliimey, supar, tucks |
|            1 |     3922 | 2024-02-13 | DEMESIS            | W   | 0.118      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.65 | deStiny, gump, Sliimey, supar, tucks |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,256.34)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
