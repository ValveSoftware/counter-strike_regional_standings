### Roster Details<br />
Team Name: Wildcard Academy<br />
Roster: fr3nd, sSen, T4gg3D, TMKj, Wonder<br />
Global Rank: [196](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [108]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  612.0<br />
<br />
Final Rank Value (612.0) = Starting Rank Value (599.9) + Head To Head Adjustments (12.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.256[<sup>1</sup>](#table2)
- Bounty Collected: 0.170[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.109<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 599.9
- 400 + ( ( 0.109 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 599.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1967 | 2025-03-14 | SABRE      | L   | 0.671      | -            | -                | -                | -         |    -7.30 | fr3nd, sSen, T4gg3D, TMKj, Wonder |
|            4 |     1983 | 2025-03-13 | benched    | W   | 0.664      | 0.372        | 0.000 (0.000)    | 0.107 (0.027)    | 0 (0.000) |     8.29 | fr3nd, sSen, T4gg3D, TMKj, Wonder |
|            3 |     2014 | 2025-03-11 | Leo        | W   | 0.652      | 0.372        | 0.001 (0.000)    | 0.246 (0.060)    | 0 (0.000) |    12.37 | fr3nd, sSen, T4gg3D, TMKj, Wonder |
|            2 |     2181 | 2025-03-08 | Lazer Cats | W   | 0.631      | 0.372        | 0.000 (0.000)    | 0.055 (0.013)    | 0 (0.000) |     6.64 | fr3nd, sSen, T4gg3D, TMKj, Wonder |
|            1 |     2349 | 2025-03-05 | RAGE       | L   | 0.611      | -            | -                | -                | -         |    -7.83 | fr3nd, sSen, T4gg3D, TMKj, Wonder |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($543.66)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-22 |      0.725 | $750.00        | $543.66         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
