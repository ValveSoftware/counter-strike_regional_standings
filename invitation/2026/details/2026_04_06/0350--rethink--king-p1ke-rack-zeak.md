### Roster Details<br />
Team Name: ReThink<br />
Roster: king, p1ke, Rack, zeak<br />
Global Rank: [350](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [207]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  439.7<br />
<br />
Final Rank Value (439.7) = Starting Rank Value (434.9) + Head To Head Adjustments (4.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.071[<sup>2</sup>](#table1)

The average of these factors is 0.018<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 434.9
- 400 + ( ( 0.018 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 434.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      531 | 2026-03-26 | Young Ninjas  | L   | 1.000      | -            | -                | -                | -         |    -2.50 | chucker, king, p1ke, Rack, zeak |
|            6 |      538 | 2026-03-26 | Alliance      | L   | 1.000      | -            | -                | -                | -         |    -0.13 | chucker, king, p1ke, Rack, zeak |
|            5 |     2210 | 2026-02-21 | Acend         | L   | 0.905      | -            | -                | -                | -         |    -0.38 | chucker, king, p1ke, Rack, zeak |
|            4 |     3260 | 2026-01-23 | HAVU          | L   | 0.714      | -            | -                | -                | -         |    -0.57 | king, p1ke, Rack, TIMhehe, zeak |
|            3 |     3265 | 2026-01-23 | Metizport     | L   | 0.714      | -            | -                | -                | -         |    -0.55 | king, p1ke, Rack, TIMhehe, zeak |
|            2 |     3271 | 2026-01-23 | Flying Angels | W   | 0.714      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.714) |     9.96 | king, p1ke, Rack, TIMhehe, zeak |
|            1 |     5042 | 2025-11-01 | home          | L   | 0.160      | -            | -                | -                | -         |    -1.00 | king, lindeen, p1ke, Rack, zeak |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
