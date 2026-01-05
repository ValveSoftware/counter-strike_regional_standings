### Roster Details<br />
Team Name: aimclub<br />
Roster: Ed1m, ERSIN, RoberttMP, waZz, zewts<br />
Global Rank: [276](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [161]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  502.5<br />
<br />
Final Rank Value (502.5) = Starting Rank Value (513.3) + Head To Head Adjustments (-10.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.227[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.3
- 400 + ( ( 0.057 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 513.3


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
|           10 |      185 | 2025-12-17 | G2 Ares       | L   | 1.000      | -            | -                | -                | -         |   -13.09 | Ed1m, ERSIN, RoberttMP, waZz, zewts  |
|            9 |      190 | 2025-12-17 | nomix         | W   | 1.000      | 0.339        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |    10.79 | Ed1m, ERSIN, RoberttMP, waZz, zewts  |
|            8 |      202 | 2025-12-17 | G2 Ares       | L   | 1.000      | -            | -                | -                | -         |   -13.69 | Ed1m, ERSIN, RoberttMP, waZz, zewts  |
|            7 |     1134 | 2025-11-07 | WOPA          | L   | 0.807      | -            | -                | -                | -         |    -7.53 | Ed1m, ERSIN, RoberttMP, waZz, zewts  |
|            6 |     1150 | 2025-11-07 | boomer demons | W   | 0.806      | 0.335        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.806) |     8.28 | Ed1m, ERSIN, RoberttMP, waZz, zewts  |
|            5 |     1159 | 2025-11-07 | AM            | L   | 0.806      | -            | -                | -                | -         |    -0.71 | Ed1m, ERSIN, RoberttMP, waZz, zewts  |
|            4 |     1180 | 2025-11-07 | Alliance      | L   | 0.806      | -            | -                | -                | -         |    -0.35 | Ed1m, ERSIN, RoberttMP, waZz, zewts  |
|            3 |     1199 | 2025-11-07 | BC.Game       | L   | 0.805      | -            | -                | -                | -         |    -1.09 | Ed1m, ERSIN, RoberttMP, waZz, zewts  |
|            2 |     3563 | 2025-08-29 | Monte         | L   | 0.338      | -            | -                | -                | -         |    -0.18 | CHANKY, Ed1m, RoberttMP, waZz, zewts |
|            1 |     3571 | 2025-08-29 | Tricked       | W   | 0.338      | 0.333        | 0.000 (0.000)    | 0.127 (0.014)    | 1 (0.338) |     6.74 | CHANKY, Ed1m, RoberttMP, waZz, zewts |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
