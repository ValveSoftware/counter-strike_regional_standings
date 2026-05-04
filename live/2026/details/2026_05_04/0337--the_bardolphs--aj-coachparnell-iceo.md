### Roster Details<br />
Team Name: The Bardolphs<br />
Roster: AJ, CoachParnell, Iceo<br />
Global Rank: [337](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_05_04.md)<br />
Regional Rank: [48]( ../../standings_asia_2026_05_04.md)<br />
<br />
Final Rank Value:  456.5<br />
<br />
Final Rank Value (456.5) = Starting Rank Value (479.0) + Head To Head Adjustments (-22.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.154[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.016[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 479.0
- 400 + ( ( 0.043 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 479.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      625 | 2026-04-12 | Time Waves | L   | 1.000      | -            | -                | -                | -         |   -16.84 | AJ, CoachParnell, Iceo, morganne, pxi |
|            4 |      627 | 2026-04-11 | Rooster    | L   | 1.000      | -            | -                | -                | -         |    -3.21 | AJ, CoachParnell, Iceo, morganne, pxi |
|            3 |     5314 | 2025-11-29 | Time Waves | L   | 0.158      | -            | -                | -                | -         |    -2.91 | AJ, bandit, CoachParnell, Haze, Iceo  |
|            2 |     5320 | 2025-11-28 | DXA        | W   | 0.156      | 0.279        | 0.001 (0.000)    | 0.067 (0.003)    | 1 (0.156) |     3.33 | AJ, bandit, CoachParnell, Haze, Iceo  |
|            1 |     5323 | 2025-11-28 | Time Waves | L   | 0.156      | -            | -                | -                | -         |    -2.87 | AJ, bandit, CoachParnell, Haze, Iceo  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
