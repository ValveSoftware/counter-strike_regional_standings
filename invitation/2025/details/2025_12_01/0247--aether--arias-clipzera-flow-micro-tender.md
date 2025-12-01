### Roster Details<br />
Team Name: Aether<br />
Roster: arias, clipzera, flow, micro, Tender<br />
Global Rank: [247](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [70]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  536.6<br />
<br />
Final Rank Value (536.6) = Starting Rank Value (522.6) + Head To Head Adjustments (14.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 522.6
- 400 + ( ( 0.064 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 522.6


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
|           11 |     3744 | 2025-07-30 | NRG           | L   | 0.376      | -            | -                | -                | -         |    -0.19 | arias, clipzera, micro, misha, Tender |
|           10 |     3769 | 2025-07-28 | Arrival Seven | W   | 0.362      | 0.616        | 0.000 (0.000)    | 0.041 (0.009)    | 0 (0.000) |     5.75 | clipzera, flow, micro, misha, Tender  |
|            9 |     3831 | 2025-07-26 | Phoenix       | L   | 0.349      | -            | -                | -                | -         |    -2.63 | arias, clipzera, micro, misha, Tender |
|            8 |     3851 | 2025-07-25 | Sakura        | W   | 0.342      | 0.616        | 0.046 (0.010)    | 0.350 (0.074)    | 0 (0.000) |     9.71 | arias, clipzera, micro, misha, Tender |
|            7 |     4128 | 2025-07-11 | SkinRave      | L   | 0.248      | -            | -                | -                | -         |    -0.74 | arias, clipzera, flow, micro, Tender  |
|            6 |     4140 | 2025-07-11 | seoul         | W   | 0.247      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.60 | arias, clipzera, flow, micro, Tender  |
|            5 |     4394 | 2025-06-17 | Zomblers      | L   | 0.089      | -            | -                | -                | -         |    -0.78 | arias, clipzera, flow, micro, Tender  |
|            4 |     4412 | 2025-06-16 | Subtick       | W   | 0.082      | 0.333        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.87 | arias, clipzera, flow, micro, Tender  |
|            3 |     4494 | 2025-06-13 | Money Crew    | L   | 0.063      | -            | -                | -                | -         |    -0.71 | arias, clipzera, flow, micro, Tender  |
|            2 |     4568 | 2025-06-10 | Daaku         | W   | 0.043      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.45 | arias, clipzera, flow, micro, Tender  |
|            1 |     4583 | 2025-06-09 | OverKnight    | L   | 0.036      | -            | -                | -                | -         |    -0.30 | arias, clipzera, flow, micro, Tender  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
