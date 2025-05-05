### Roster Details<br />
Team Name: Latvia<br />
Roster: Frip, keen, prelideN, rud, shadiy<br />
Global Rank: [264](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [150]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  490.3<br />
<br />
Final Rank Value (490.3) = Starting Rank Value (488.2) + Head To Head Adjustments (2.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.176[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.018[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 488.2
- 400 + ( ( 0.049 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 488.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3178 | 2024-11-15 | Tunisia  | W   | 0.060      | 0.617        | 0.000 (0.000)    | 0.003 (0.000)    | 1 (0.060) |     0.72 | Frip, keen, prelideN, rud, shadiy |
|            4 |     3182 | 2024-11-15 | Nexus    | L   | 0.060      | -            | -                | -                | -         |    -0.11 | Frip, keen, prelideN, rud, shadiy |
|            3 |     3215 | 2024-11-14 | kONO     | W   | 0.054      | 0.617        | 0.006 (0.000)    | 0.116 (0.004)    | 1 (0.054) |     1.21 | Frip, keen, prelideN, rud, shadiy |
|            2 |     3218 | 2024-11-14 | NOVAQ    | L   | 0.054      | -            | -                | -                | -         |    -0.39 | Frip, keen, prelideN, rud, shadiy |
|            1 |     3224 | 2024-11-14 | USA      | W   | 0.053      | 0.617        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.053) |     0.64 | Frip, keen, prelideN, rud, shadiy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
