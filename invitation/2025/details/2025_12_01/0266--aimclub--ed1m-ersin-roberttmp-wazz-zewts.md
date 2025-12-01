### Roster Details<br />
Team Name: aimclub<br />
Roster: Ed1m, ERSIN, RoberttMP, waZz, zewts<br />
Global Rank: [266](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [150]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  492.0<br />
<br />
Final Rank Value (492.0) = Starting Rank Value (477.4) + Head To Head Adjustments (14.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.158[<sup>2</sup>](#table1)

The average of these factors is 0.041<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 477.4
- 400 + ( ( 0.041 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 477.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      574 | 2025-11-07 | WOPA          | L   | 1.000      | -            | -                | -                | -         |    -8.00 | Ed1m, ERSIN, RoberttMP, waZz, zewts  |
|            6 |      590 | 2025-11-07 | boomer demons | W   | 1.000      | 0.335        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |    11.20 | Ed1m, ERSIN, RoberttMP, waZz, zewts  |
|            5 |      599 | 2025-11-07 | AM            | L   | 1.000      | -            | -                | -                | -         |    -0.68 | Ed1m, ERSIN, RoberttMP, waZz, zewts  |
|            4 |      620 | 2025-11-07 | Alliance      | L   | 1.000      | -            | -                | -                | -         |    -0.46 | Ed1m, ERSIN, RoberttMP, waZz, zewts  |
|            3 |      639 | 2025-11-07 | BC.Game       | L   | 1.000      | -            | -                | -                | -         |    -0.84 | Ed1m, ERSIN, RoberttMP, waZz, zewts  |
|            2 |     3003 | 2025-08-29 | Monte         | L   | 0.571      | -            | -                | -                | -         |    -0.23 | CHANKY, Ed1m, RoberttMP, waZz, zewts |
|            1 |     3011 | 2025-08-29 | Tricked       | W   | 0.571      | 0.333        | 0.000 (0.000)    | 0.215 (0.041)    | 1 (0.571) |    13.61 | CHANKY, Ed1m, RoberttMP, waZz, zewts |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
