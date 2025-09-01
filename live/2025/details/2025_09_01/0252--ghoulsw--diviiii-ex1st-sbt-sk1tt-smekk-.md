### Roster Details<br />
Team Name: GhoulsW<br />
Roster: Diviiii, ex1st, SBT, sk1tt, smekk-<br />
Global Rank: [252](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [130]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  484.9<br />
<br />
Final Rank Value (484.9) = Starting Rank Value (481.0) + Head To Head Adjustments (3.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.167[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 481.0
- 400 + ( ( 0.042 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 481.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3388 | 2025-03-24 | The Last Resort | L   | 0.128      | -            | -                | -                | -         |    -0.78 | Diviiii, ex1st, SBT, sk1tt, smekk- |
|            4 |     3391 | 2025-03-24 | HEROIC Academy  | W   | 0.127      | 0.624        | 0.001 (0.000)    | 0.267 (0.021)    | 0 (0.000) |     3.16 | Diviiii, ex1st, SBT, sk1tt, smekk- |
|            3 |     3401 | 2025-03-24 | EYEBALLERS      | W   | 0.126      | 0.624        | 0.000 (0.000)    | 0.011 (0.001)    | 0 (0.000) |     1.57 | Diviiii, ex1st, SBT, sk1tt, smekk- |
|            2 |     3626 | 2025-03-15 | Mercenaires     | L   | 0.067      | -            | -                | -                | -         |    -0.96 | Diviiii, ex1st, SBT, sk1tt, smekk- |
|            1 |     3633 | 2025-03-15 | HyperSpirit     | W   | 0.067      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.82 | Diviiii, ex1st, SBT, sk1tt, smekk- |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
