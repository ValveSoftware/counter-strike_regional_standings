### Roster Details<br />
Team Name: SINQU<br />
Roster: Geni, J0nneW, KapiV, Lene, Samppa<br />
Global Rank: [252](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [151]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  549.0<br />
<br />
Final Rank Value (549.0) = Starting Rank Value (561.7) + Head To Head Adjustments (-12.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.193[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.106[<sup>2</sup>](#table1)

The average of these factors is 0.082<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 561.7
- 400 + ( ( 0.082 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 561.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       32 | 2026-01-04 | Fingers Crossed  | L   | 1.000      | -            | -                | -                | -         |   -17.91 | Geni, J0nneW, KapiV, Lene, Samppa |
|            7 |       35 | 2026-01-04 | AaB              | L   | 1.000      | -            | -                | -                | -         |    -5.08 | Geni, J0nneW, KapiV, Lene, Samppa |
|            6 |       40 | 2026-01-04 | Friendly Campers | L   | 1.000      | -            | -                | -                | -         |    -0.37 | Geni, J0nneW, KapiV, Lene, Samppa |
|            5 |       43 | 2026-01-04 | ASTRAL           | L   | 1.000      | -            | -                | -                | -         |    -2.98 | Geni, J0nneW, KapiV, Lene, Samppa |
|            4 |       46 | 2026-01-04 | MINLATE          | L   | 1.000      | -            | -                | -                | -         |    -4.08 | Geni, J0nneW, KapiV, Lene, Samppa |
|            3 |      189 | 2025-12-17 | Nexus            | L   | 1.000      | -            | -                | -                | -         |    -4.50 | Geni, J0nneW, KapiV, Lene, Samppa |
|            2 |      194 | 2025-12-17 | Lazer Cats       | L   | 1.000      | -            | -                | -                | -         |    -5.14 | Geni, J0nneW, KapiV, Lene, Samppa |
|            1 |      198 | 2025-12-17 | Nexus            | W   | 1.000      | 0.339        | 0.002 (0.001)    | 0.796 (0.270)    | 1 (1.000) |    27.32 | Geni, J0nneW, KapiV, Lene, Samppa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
