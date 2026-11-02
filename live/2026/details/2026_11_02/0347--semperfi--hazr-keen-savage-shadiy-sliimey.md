### Roster Details<br />
Team Name: SemperFi<br />
Roster: hazr, keen, SaVage, shadiy, sliimey<br />
Global Rank: [347](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_11_02.md)<br />
Regional Rank: [44]( ../../standings_asia_2026_11_02.md)<br />
<br />
Final Rank Value:  478.9<br />
<br />
Final Rank Value (478.9) = Starting Rank Value (475.3) + Head To Head Adjustments (3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.157[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.003[<sup>2</sup>](#table1)

The average of these factors is 0.040<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 475.3
- 400 + ( ( 0.040 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 475.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     5181 | 2026-05-28 | TYLOO             | L   | 0.146      | -            | -                | -                | -         |    -0.08 | hazr, keen, SaVage, shadiy, sliimey |
|            4 |     5226 | 2026-05-27 | THUNDER dOWNUNDER | W   | 0.139      | 0.143        | 0.002 (0.000)    | 0.057 (0.001)    | 0 (0.000) |     3.65 | hazr, keen, SaVage, shadiy, sliimey |
|            3 |     5721 | 2026-05-13 | THUNDER dOWNUNDER | L   | 0.044      | -            | -                | -                | -         |    -0.24 | hazr, keen, SaVage, shadiy, sliimey |
|            2 |     5762 | 2026-05-12 | Kaleido           | L   | 0.038      | -            | -                | -                | -         |    -0.24 | hazr, keen, SaVage, shadiy, sliimey |
|            1 |     5788 | 2026-05-11 | Change The Game   | W   | 0.033      | 0.548        | 0.000 (0.000)    | 0.001 (0.000)    | 1 (0.033) |     0.52 | hazr, keen, SaVage, shadiy, sliimey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
