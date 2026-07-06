### Roster Details<br />
Team Name: Drama<br />
Roster: andr1x, choiv7, d0jca, miwo, nopzy<br />
Global Rank: [310](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [198]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  562.0<br />
<br />
Final Rank Value (562.0) = Starting Rank Value (552.3) + Head To Head Adjustments (9.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.198[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.116[<sup>2</sup>](#table1)

The average of these factors is 0.081<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 552.3
- 400 + ( ( 0.081 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 552.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     2506 | 2026-04-05 | magic        | L   | 0.585      | -            | -                | -                | -         |    -0.13 | andr1x, choiv7, d0jca, miwo, nopzy |
|            8 |     2654 | 2026-04-03 | FaZe         | L   | 0.572      | -            | -                | -                | -         |    -0.17 | andr1x, choiv7, d0jca, miwo, nopzy |
|            7 |     2670 | 2026-04-03 | BEE          | W   | 0.571      | 0.396        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.571) |     5.22 | andr1x, choiv7, d0jca, miwo, nopzy |
|            6 |     3042 | 2026-03-29 | INFINITE     | L   | 0.541      | -            | -                | -                | -         |    -0.24 | andr1x, choiv7, d0jca, miwo, nopzy |
|            5 |     3064 | 2026-03-29 | HYPERSPIRIT  | W   | 0.540      | 0.354        | 0.005 (0.001)    | 0.504 (0.096)    | 1 (0.540) |    14.93 | andr1x, choiv7, d0jca, miwo, nopzy |
|            4 |     3092 | 2026-03-29 | Eternal Fire | L   | 0.539      | -            | -                | -                | -         |    -0.79 | andr1x, choiv7, d0jca, miwo, nopzy |
|            3 |     3206 | 2026-03-27 | Honvéd       | L   | 0.528      | -            | -                | -                | -         |    -3.26 | andr1x, choiv7, d0jca, miwo, nopzy |
|            2 |     3243 | 2026-03-26 | HYPERSPIRIT  | L   | 0.522      | -            | -                | -                | -         |    -1.95 | andr1x, choiv7, d0jca, miwo, nopzy |
|            1 |     4594 | 2026-02-27 | yngods       | L   | 0.342      | -            | -                | -                | -         |    -3.98 | andr1x, choiv7, d0jca, miwo, VLDN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
