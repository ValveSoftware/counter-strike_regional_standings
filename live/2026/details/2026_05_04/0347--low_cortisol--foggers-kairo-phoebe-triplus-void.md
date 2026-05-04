### Roster Details<br />
Team Name: low cortisol<br />
Roster: foggers, kairo, phoebe, TRIPLUS, void<br />
Global Rank: [347](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_05_04.md)<br />
Regional Rank: [50]( ../../standings_asia_2026_05_04.md)<br />
<br />
Final Rank Value:  425.5<br />
<br />
Final Rank Value (425.5) = Starting Rank Value (403.0) + Head To Head Adjustments (22.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.002<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 403.0
- 400 + ( ( 0.002 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 403.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      145 | 2026-04-29 | Ding Cuts         | L   | 1.000      | -            | -                | -                | -         |    -9.12 | Bay, kairo, phoebe, void, zune        |
|            8 |      173 | 2026-04-28 | Time Waves        | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.114 (0.032)    | 0 (0.000) |    15.79 | Bay, kairo, phoebe, void, zune        |
|            7 |      218 | 2026-04-27 | THUNDER dOWNUNDER | L   | 1.000      | -            | -                | -                | -         |    -0.37 | Bay, kairo, phoebe, void, zune        |
|            6 |      286 | 2026-04-26 | FURY              | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.108 (0.030)    | 0 (0.000) |    18.70 | Bay, kairo, phoebe, void, zune        |
|            5 |     5113 | 2025-12-06 | Rooster           | L   | 0.210      | -            | -                | -                | -         |    -0.37 | foggers, kairo, phoebe, TRIPLUS, void |
|            4 |     5114 | 2025-12-06 | FURY              | L   | 0.210      | -            | -                | -                | -         |    -2.34 | foggers, kairo, phoebe, TRIPLUS, void |
|            3 |     5573 | 2025-11-20 | LITE              | L   | 0.098      | -            | -                | -                | -         |    -0.86 | foggers, kairo, phoebe, TRIPLUS, void |
|            2 |     5597 | 2025-11-18 | THUNDER dOWNUNDER | L   | 0.085      | -            | -                | -                | -         |    -0.03 | foggers, kairo, phoebe, TRIPLUS, void |
|            1 |     5625 | 2025-11-16 | Time Waves        | W   | 0.072      | 0.314        | 0.000 (0.000)    | 0.114 (0.003)    | 0 (0.000) |     1.18 | foggers, kairo, phoebe, TRIPLUS, void |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
