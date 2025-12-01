### Roster Details<br />
Team Name: MIGHT<br />
Roster: BiNoX, djay, jared, Seb, Snakes<br />
Global Rank: [277](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [83]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  467.4<br />
<br />
Final Rank Value (467.4) = Starting Rank Value (486.7) + Head To Head Adjustments (-19.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.178[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 486.7
- 400 + ( ( 0.046 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 486.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     3199 | 2025-08-20 | Aether           | L   | 0.511      | -            | -                | -                | -         |    -4.36 | BiNoX, djay, jared, Seb, Snakes     |
|           15 |     3232 | 2025-08-17 | OverKnight       | L   | 0.496      | -            | -                | -                | -         |    -3.62 | BiNoX, djay, jared, Seb, Snakes     |
|           14 |     3269 | 2025-08-16 | Getting Info     | L   | 0.489      | -            | -                | -                | -         |    -3.26 | BiNoX, djay, jared, Seb, Snakes     |
|           13 |     3360 | 2025-08-14 | Take Flyte       | L   | 0.476      | -            | -                | -                | -         |    -5.05 | BiNoX, djay, jared, Seb, Snakes     |
|           12 |     3409 | 2025-08-13 | Aether           | W   | 0.469      | 0.363        | 0.001 (0.000)    | 0.197 (0.033)    | 0 (0.000) |    11.04 | BiNoX, djay, jared, Seb, Snakes     |
|           11 |     3512 | 2025-08-11 | anything else    | L   | 0.456      | -            | -                | -                | -         |    -6.78 | BiNoX, djay, jared, Seb, Snakes     |
|           10 |     3772 | 2025-07-28 | LAG              | L   | 0.362      | -            | -                | -                | -         |    -6.97 | BiNoX, djay, jared, Matheos, Snakes |
|            9 |     3802 | 2025-07-27 | Party Astronauts | W   | 0.354      | 0.616        | 0.000 (0.000)    | 0.007 (0.002)    | 0 (0.000) |     5.51 | BiNoX, djay, jared, no1nx, Snakes   |
|            8 |     3833 | 2025-07-26 | Wildcard         | L   | 0.349      | -            | -                | -                | -         |    -0.62 | BiNoX, djay, jared, serv0, Snakes   |
|            7 |     3868 | 2025-07-24 | Marsborne        | L   | 0.335      | -            | -                | -                | -         |    -0.26 | BiNoX, djay, jared, no1nx, Snakes   |
|            6 |     4134 | 2025-07-11 | Golden Horde     | L   | 0.248      | -            | -                | -                | -         |    -4.81 | BiNoX, djay, jared, no1nx, Snakes   |
|            5 |     4396 | 2025-06-17 | LAG              | L   | 0.089      | -            | -                | -                | -         |    -0.64 | BiNoX, djay, jared, no1nx, Snakes   |
|            4 |     4409 | 2025-06-16 | OverKnight       | L   | 0.083      | -            | -                | -                | -         |    -0.61 | becker, BiNoX, djay, no1nx, Snakes  |
|            3 |     4493 | 2025-06-13 | Wanted Goons     | W   | 0.063      | 0.333        | 0.000 (0.000)    | 0.139 (0.003)    | 0 (0.000) |     1.09 | BiNoX, djay, jared, no1nx, Snakes   |
|            2 |     4527 | 2025-06-12 | BLUEJAYS         | L   | 0.056      | -            | -                | -                | -         |    -0.90 | BiNoX, djay, jared, no1nx, Snakes   |
|            1 |     4569 | 2025-06-10 | Zomblers         | W   | 0.042      | 0.333        | 0.001 (0.000)    | 0.316 (0.004)    | 0 (0.000) |     1.02 | BiNoX, djay, jared, no1nx, Snakes   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
