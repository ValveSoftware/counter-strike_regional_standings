### Roster Details<br />
Team Name: LFO 3<br />
Roster: awks, BehinDx, Chill, giM, Matheos<br />
Global Rank: [262](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [137]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  481.4<br />
<br />
Final Rank Value (481.4) = Starting Rank Value (481.7) + Head To Head Adjustments (-0.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.170[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 481.7
- 400 + ( ( 0.043 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 481.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     3172 | 2025-03-08 | PCIFIC   | L   | 0.207      | -            | -                | -                | -         |    -3.43 | awks, BehinDx, Chill, giM, Matheos |
|            5 |     3297 | 2025-03-06 | AMKAL    | L   | 0.195      | -            | -                | -                | -         |    -2.19 | awks, BehinDx, Chill, giM, Matheos |
|            4 |     3360 | 2025-03-04 | NXT      | W   | 0.181      | 0.372        | 0.001 (0.000)    | 0.320 (0.022)    | 0 (0.000) |     5.08 | awks, BehinDx, Chill, giM, Matheos |
|            3 |     4041 | 2025-02-08 | TNL      | L   | 0.022      | -            | -                | -                | -         |    -0.02 | awks, BehinDx, Chill, giM, Matheos |
|            2 |     4060 | 2025-02-08 | Hesta    | L   | 0.021      | -            | -                | -                | -         |    -0.28 | awks, BehinDx, Chill, giM, Matheos |
|            1 |     4064 | 2025-02-08 | Betera   | W   | 0.021      | 0.143        | 0.012 (0.000)    | 0.355 (0.001)    | 0 (0.000) |     0.55 | awks, BehinDx, Chill, giM, Matheos |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
