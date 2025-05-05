### Roster Details<br />
Team Name: Wildcard Academy<br />
Roster: fr3nd, sSen, T4gg3D, TMKj, Wonder<br />
Global Rank: [155](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [95]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  637.5<br />
<br />
Final Rank Value (637.5) = Starting Rank Value (624.3) + Head To Head Adjustments (13.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.268[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.124<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 624.3
- 400 + ( ( 0.124 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 624.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1098 | 2025-03-14 | NEVERMORE   | L   | 0.854      | -            | -                | -                | -         |   -10.63 | fr3nd, sSen, T4gg3D, TMKj, Wonder |
|            4 |     1114 | 2025-03-13 | benched     | W   | 0.847      | 0.372        | 0.000 (0.000)    | 0.170 (0.054)    | 0 (0.000) |     9.10 | fr3nd, sSen, T4gg3D, TMKj, Wonder |
|            3 |     1145 | 2025-03-11 | Leo         | W   | 0.834      | 0.372        | 0.005 (0.001)    | 0.368 (0.114)    | 0 (0.000) |    16.06 | fr3nd, sSen, T4gg3D, TMKj, Wonder |
|            2 |     1305 | 2025-03-08 | Lazer Cats  | W   | 0.813      | 0.372        | 0.000 (0.000)    | 0.087 (0.026)    | 0 (0.000) |     8.25 | fr3nd, sSen, T4gg3D, TMKj, Wonder |
|            1 |     1466 | 2025-03-05 | Spray Jutsu | L   | 0.793      | -            | -                | -                | -         |    -9.52 | fr3nd, sSen, T4gg3D, TMKj, Wonder |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($680.46)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-22 |      0.907 | $750.00        | $680.46         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
