### Roster Details<br />
Team Name: R2<br />
Roster: ABM, guidimon, JonY BoY, maaxg1, tutehen<br />
Global Rank: [226](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_09_01.md)<br />
Regional Rank: [76]( ../../standings_americas_2025_09_01.md)<br />
<br />
Final Rank Value:  551.7<br />
<br />
Final Rank Value (551.7) = Starting Rank Value (520.2) + Head To Head Adjustments (31.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.063<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 520.2
- 400 + ( ( 0.063 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 520.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      276 | 2025-08-16 | Fluxo           | L   | 1.000      | -            | -                | -                | -         |    -1.98 | ABM, guidimon, JonY BoY, maaxg1, tutehen |
|           14 |      348 | 2025-08-14 | Yawara          | W   | 1.000      | 0.371        | 0.006 (0.002)    | 0.364 (0.135)    | 0 (0.000) |    22.76 | ABM, guidimon, JonY BoY, maaxg1, tutehen |
|           13 |      472 | 2025-08-11 | StragaSonhoS    | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.147 (0.054)    | 0 (0.000) |    16.29 | ABM, guidimon, JonY BoY, maaxg1, tutehen |
|           12 |      547 | 2025-08-09 | JERSA           | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.123 (0.046)    | 0 (0.000) |    13.78 | ABM, guidimon, JonY BoY, maaxg1, tutehen |
|           11 |      578 | 2025-08-07 | Bounty Hunters  | L   | 1.000      | -            | -                | -                | -         |    -5.81 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|           10 |      750 | 2025-07-27 | BESTIA          | L   | 0.961      | -            | -                | -                | -         |    -2.84 | ABM, guidimon, JonY BoY, maaxg1, tutehen |
|            9 |     1122 | 2025-07-09 | Galorys         | L   | 0.842      | -            | -                | -                | -         |   -12.43 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|            8 |     2864 | 2025-04-05 | Bounty Hunters  | L   | 0.208      | -            | -                | -                | -         |    -1.41 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|            7 |     2889 | 2025-04-04 | ShindeN         | W   | 0.200      | 0.435        | 0.006 (0.000)    | 0.723 (0.063)    | 0 (0.000) |     5.09 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|            6 |     2912 | 2025-04-03 | BESTIA          | L   | 0.194      | -            | -                | -                | -         |    -0.59 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|            5 |     3137 | 2025-03-29 | LaChampionsLiga | L   | 0.160      | -            | -                | -                | -         |    -2.62 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|            4 |     3187 | 2025-03-28 | Galorys         | W   | 0.154      | 0.769        | 0.000 (0.000)    | 0.238 (0.028)    | 0 (0.000) |     2.55 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|            3 |     3232 | 2025-03-27 | Dusty Roots     | L   | 0.149      | -            | -                | -                | -         |    -1.02 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|            2 |     3875 | 2025-03-08 | ex-W7M          | L   | 0.020      | -            | -                | -                | -         |    -0.19 | JonY BoY, maaxg1, nbl, timo, tutehen     |
|            1 |     3933 | 2025-03-07 | Keyd Stars      | L   | 0.014      | -            | -                | -                | -         |    -0.10 | JonY BoY, maaxg1, nbl, timo, tutehen     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
