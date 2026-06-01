### Roster Details<br />
Team Name: Grindas<br />
Roster: BaGyZ, fello, MAGILA, Sidivo, Uzman<br />
Global Rank: [306](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [194]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  536.4<br />
<br />
Final Rank Value (536.4) = Starting Rank Value (506.1) + Head To Head Adjustments (30.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.188[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.031[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 506.1
- 400 + ( ( 0.056 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 506.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     2068 | 2026-04-02 | Atreides      | L   | 0.800      | -            | -                | -                | -         |    -2.81 | BaGyZ, fello, OniX, REL, Sidivo     |
|           12 |     2178 | 2026-04-01 | BIG EQUIPA    | W   | 0.793      | 0.384        | 0.002 (0.000)    | 0.073 (0.022)    | 0 (0.000) |    14.73 | BaGyZ, fello, REL, Sidivo, Uzman    |
|           11 |     2306 | 2026-03-30 | THE           | W   | 0.784      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.12 | BaGyZ, fello, OniX, REL, Sidivo     |
|           10 |     2330 | 2026-03-30 | PsychoFace    | L   | 0.781      | -            | -                | -                | -         |    -0.76 | BaGyZ, fello, OniX, REL, Sidivo     |
|            9 |     2406 | 2026-03-29 | home          | W   | 0.773      | 0.384        | 0.000 (0.000)    | 0.023 (0.007)    | 0 (0.000) |    11.49 | BaGyZ, fello, OniX, Sidivo, Uzman   |
|            8 |     5795 | 2026-01-04 | SINQU         | W   | 0.212      | 0.314        | 0.000 (0.000)    | 0.038 (0.003)    | 1 (0.212) |     3.64 | BaGyZ, fello, MAGILA, Sidivo, Uzman |
|            7 |     5797 | 2026-01-04 | Persona Grata | L   | 0.212      | -            | -                | -                | -         |    -1.08 | BaGyZ, fello, MAGILA, Sidivo, Uzman |
|            6 |     5802 | 2026-01-04 | ASTRAL        | L   | 0.212      | -            | -                | -                | -         |    -0.20 | BaGyZ, fello, MAGILA, Sidivo, Uzman |
|            5 |     5805 | 2026-01-04 | AaB           | L   | 0.211      | -            | -                | -                | -         |    -2.84 | BaGyZ, fello, MAGILA, Sidivo, Uzman |
|            4 |     5810 | 2026-01-04 | Walczaki      | L   | 0.211      | -            | -                | -                | -         |    -0.15 | BaGyZ, fello, MAGILA, Sidivo, Uzman |
|            3 |     5947 | 2025-12-17 | illwill       | L   | 0.094      | -            | -                | -                | -         |    -1.43 | BaGyZ, fello, MAGILA, Sidivo, Uzman |
|            2 |     5950 | 2025-12-17 | INFINITE      | W   | 0.094      | 0.339        | 0.000 (0.000)    | 0.047 (0.001)    | 1 (0.094) |     1.72 | BaGyZ, fello, MAGILA, Sidivo, Uzman |
|            1 |     5959 | 2025-12-17 | MOUZ NXT      | L   | 0.092      | -            | -                | -                | -         |    -0.12 | BaGyZ, fello, MAGILA, Sidivo, Uzman |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
