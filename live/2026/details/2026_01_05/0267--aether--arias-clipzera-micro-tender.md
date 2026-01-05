### Roster Details<br />
Team Name: Aether<br />
Roster: arias, clipzera, micro, Tender<br />
Global Rank: [267](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [74]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  518.1<br />
<br />
Final Rank Value (518.1) = Starting Rank Value (513.7) + Head To Head Adjustments (4.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.7
- 400 + ( ( 0.057 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 513.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     4304 | 2025-07-30 | NRG           | L   | 0.143      | -            | -                | -                | -         |    -0.03 | arias, clipzera, micro, misha, Tender |
|            5 |     4329 | 2025-07-28 | Arrival Seven | W   | 0.129      | 0.616        | 0.000 (0.000)    | 0.016 (0.001)    | 0 (0.000) |     2.05 | clipzera, flow, micro, misha, Tender  |
|            4 |     4391 | 2025-07-26 | Phoenix       | L   | 0.116      | -            | -                | -                | -         |    -0.90 | arias, clipzera, micro, misha, Tender |
|            3 |     4411 | 2025-07-25 | Sakura        | W   | 0.109      | 0.616        | 0.059 (0.004)    | 0.277 (0.019)    | 0 (0.000) |     3.15 | arias, clipzera, micro, misha, Tender |
|            2 |     4688 | 2025-07-11 | SkinRave      | L   | 0.015      | -            | -                | -                | -         |    -0.05 | arias, clipzera, flow, micro, Tender  |
|            1 |     4700 | 2025-07-11 | seoul         | W   | 0.013      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.15 | arias, clipzera, flow, micro, Tender  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
