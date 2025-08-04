### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, dycha, Gizmy, hades, ryu<br />
Global Rank: [237](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [122]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  525.9<br />
<br />
Final Rank Value (525.9) = Starting Rank Value (521.2) + Head To Head Adjustments (4.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 521.2
- 400 + ( ( 0.064 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 521.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3833 | 2025-02-15 | fnatic     | W   | 0.068      | 0.435        | 0.104 (0.003)    | 0.630 (0.019)    | 0 (0.000) |     2.10 | DemQQ, dycha, Gizmy, hades, ryu |
|            4 |     3895 | 2025-02-13 | FUT        | W   | 0.054      | 0.435        | 0.298 (0.007)    | 0.878 (0.021)    | 0 (0.000) |     1.62 | DemQQ, dycha, Gizmy, hades, ryu |
|            3 |     3954 | 2025-02-11 | CYBERSHOKE | W   | 0.039      | 0.435        | 0.009 (0.000)    | 0.780 (0.013)    | 0 (0.000) |     1.07 | DemQQ, dycha, Gizmy, hades, ryu |
|            2 |     4113 | 2025-02-07 | SINNERS    | L   | 0.012      | -            | -                | -                | -         |    -0.04 | DemQQ, dycha, Gizmy, hades, ryu |
|            1 |     4139 | 2025-02-06 | Betclic    | L   | 0.006      | -            | -                | -                | -         |    -0.01 | DemQQ, dycha, Gizmy, hades, ryu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
