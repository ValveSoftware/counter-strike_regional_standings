### Roster Details<br />
Team Name: low cortisol<br />
Roster: kairo, phoebe, void<br />
Global Rank: [356](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [44]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  425.0<br />
<br />
Final Rank Value (425.0) = Starting Rank Value (402.4) + Head To Head Adjustments (22.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 402.4
- 400 + ( ( 0.001 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 402.4


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
|            6 |     1096 | 2026-04-29 | Ding Cuts         | L   | 0.978      | -            | -                | -                | -         |    -9.02 | Bay, kairo, phoebe, void, zune        |
|            5 |     1134 | 2026-04-28 | Time Waves        | W   | 0.972      | 0.278        | 0.000 (0.000)    | 0.090 (0.024)    | 0 (0.000) |    14.36 | Bay, kairo, phoebe, void, zune        |
|            4 |     1180 | 2026-04-27 | THUNDER dOWNUNDER | L   | 0.965      | -            | -                | -                | -         |    -0.40 | Bay, kairo, phoebe, void, zune        |
|            3 |     1252 | 2026-04-26 | FURY              | W   | 0.958      | 0.278        | 0.000 (0.000)    | 0.099 (0.026)    | 0 (0.000) |    17.94 | Bay, kairo, phoebe, void, zune        |
|            2 |     6099 | 2025-12-06 | Rooster           | L   | 0.024      | -            | -                | -                | -         |    -0.06 | foggers, kairo, phoebe, TRIPLUS, void |
|            1 |     6100 | 2025-12-06 | FURY              | L   | 0.023      | -            | -                | -                | -         |    -0.26 | foggers, kairo, phoebe, TRIPLUS, void |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
