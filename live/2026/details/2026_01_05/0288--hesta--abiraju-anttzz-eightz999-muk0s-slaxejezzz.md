### Roster Details<br />
Team Name: Hesta<br />
Roster: abiraju, anttzz, eightz999, Muk0s, slaxejezzz<br />
Global Rank: [288](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [163]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  459.7<br />
<br />
Final Rank Value (459.7) = Starting Rank Value (460.4) + Head To Head Adjustments (-0.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.122[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.030<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 460.4
- 400 + ( ( 0.030 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 460.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4176 | 2025-08-08 | VP.Prodigy | L   | 0.201      | -            | -                | -                | -         |    -0.72 | abiraju, anttzz, eightz999, Muk0s, slaxejezzz |
|            4 |     4559 | 2025-07-17 | RUBY       | L   | 0.052      | -            | -                | -                | -         |    -0.08 | abiraju, anttzz, eightz999, Muk0s, slaxejezzz |
|            3 |     4626 | 2025-07-14 | Alliance   | L   | 0.033      | -            | -                | -                | -         |    -0.01 | abiraju, anttzz, eightz999, Muk0s, slaxejezzz |
|            2 |     4740 | 2025-07-09 | AaB        | W   | 0.001      | 0.525        | 0.001 (0.000)    | 0.207 (0.000)    | 0 (0.000) |     0.03 | abiraju, anttzz, eightz999, Muk0s, slaxejezzz |
|            1 |     4753 | 2025-07-09 | GUN5       | W   | 0.000      | 0.525        | 0.026 (0.000)    | 0.816 (0.000)    | 0 (0.000) |     0.00 | abiraju, anttzz, eightz999, Muk0s, slaxejezzz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
