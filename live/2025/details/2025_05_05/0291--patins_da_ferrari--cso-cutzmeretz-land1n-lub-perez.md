### Roster Details<br />
Team Name: Patins da Ferrari<br />
Roster: CSO, CutzMeretz, land1n, lub, perez<br />
Global Rank: [291](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [93]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  401.0<br />
<br />
Final Rank Value (401.0) = Starting Rank Value (400.6) + Head To Head Adjustments (0.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.6
- 400 + ( ( 0.000 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 400.6


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
|            6 |     2961 | 2024-11-26 | 2070          | L   | 0.134      | -            | -                | -                | -         |    -1.12 | CSO, CutzMeretz, land1n, lub, perez |
|            5 |     3001 | 2024-11-23 | Prasso        | W   | 0.116      | 0.371        | 0.000 (0.000)    | 0.310 (0.013)    | 0 (0.000) |     2.38 | CSO, CutzMeretz, land1n, lub, perez |
|            4 |     3033 | 2024-11-22 | Floripa Stars | L   | 0.109      | -            | -                | -                | -         |    -1.72 | CSO, CutzMeretz, land1n, lub, perez |
|            3 |     3090 | 2024-11-20 | BeBold        | W   | 0.096      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.51 | CSO, CutzMeretz, land1n, lub, perez |
|            2 |     3106 | 2024-11-19 | NITRO         | L   | 0.087      | -            | -                | -                | -         |    -0.68 | CSO, CutzMeretz, land1n, lub, perez |
|            1 |     3418 | 2024-11-06 | Solid         | L   | 0.002      | -            | -                | -                | -         |    -0.01 | CSO, CutzMeretz, Lcm, lub, perez    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
