### Roster Details<br />
Team Name: AaB<br />
Roster: bekker, Maze, Mol011, N4XX1S, qx<br />
Global Rank: [295](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [189]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  574.8<br />
<br />
Final Rank Value (574.8) = Starting Rank Value (558.6) + Head To Head Adjustments (16.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.237[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.087[<sup>2</sup>](#table1)

The average of these factors is 0.083<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 558.6
- 400 + ( ( 0.083 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 558.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     5766 | 2026-01-05 | OlyBet        | L   | 0.218      | -            | -                | -                | -         |    -1.25 | bekker, Maze, Mol011, N4XX1S, qx |
|            5 |     5796 | 2026-01-04 | Walczaki      | W   | 0.212      | 0.314        | 0.089 (0.006)    | 1.000 (0.067)    | 1 (0.212) |     6.46 | bekker, Maze, Mol011, N4XX1S, qx |
|            4 |     5798 | 2026-01-04 | SINQU         | W   | 0.212      | 0.314        | 0.000 (0.000)    | 0.038 (0.003)    | 1 (0.212) |     3.06 | bekker, Maze, Mol011, N4XX1S, qx |
|            3 |     5800 | 2026-01-04 | Persona Grata | W   | 0.212      | 0.314        | 0.000 (0.000)    | 0.348 (0.023)    | 1 (0.212) |     5.30 | bekker, Maze, Mol011, N4XX1S, qx |
|            2 |     5805 | 2026-01-04 | Grindas       | W   | 0.211      | 0.314        | 0.000 (0.000)    | 0.089 (0.006)    | 1 (0.211) |     2.84 | bekker, Maze, Mol011, N4XX1S, qx |
|            1 |     5808 | 2026-01-04 | ASTRAL        | L   | 0.211      | -            | -                | -                | -         |    -0.28 | bekker, Maze, Mol011, N4XX1S, qx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
