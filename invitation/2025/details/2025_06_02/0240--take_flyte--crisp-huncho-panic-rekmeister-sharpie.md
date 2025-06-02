### Roster Details<br />
Team Name: Take Flyte<br />
Roster: Crisp, huncho, Panic, REKMEISTER, Sharpie<br />
Global Rank: [240](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [79]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  516.0<br />
<br />
Final Rank Value (516.0) = Starting Rank Value (506.3) + Head To Head Adjustments (9.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.169[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.061[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 506.3
- 400 + ( ( 0.058 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 506.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2230 | 2025-03-07 | Immigrants peek  | L   | 0.626      | -            | -                | -                | -         |    -7.56 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            6 |     2281 | 2025-03-06 | Complexity       | L   | 0.620      | -            | -                | -                | -         |    -0.20 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            5 |     2332 | 2025-03-05 | Worms            | W   | 0.613      | 0.143        | 0.001 (0.000)    | 0.104 (0.009)    | 0 (0.000) |    12.81 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            4 |     2418 | 2025-03-01 | Getting Info     | L   | 0.587      | -            | -                | -                | -         |    -1.52 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            3 |     2422 | 2025-03-01 | Graveyard Shift  | W   | 0.586      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.586) |     6.48 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            2 |     3807 | 2024-12-07 | Fisher College   | L   | 0.025      | -            | -                | -                | -         |    -0.19 | Crisp, huncho, Jpp, Orb1t, Sharpie        |
|            1 |     3834 | 2024-12-06 | Party Astronauts | L   | 0.020      | -            | -                | -                | -         |    -0.18 | Crisp, huncho, Jpp, Orb1t, Sharpie        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
