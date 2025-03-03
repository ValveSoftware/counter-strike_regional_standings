### Roster Details<br />
Team Name: Hesta<br />
Roster: abiraju, anttzz, frontales, Muk0s, slaxejezzz<br />
Global Rank: [212](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [130]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  615.1<br />
<br />
Final Rank Value (615.1) = Starting Rank Value (556.2) + Head To Head Adjustments (59.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.293[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.081<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 556.2
- 400 + ( ( 0.081 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 556.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      199 | 2025-02-17 | Leo         | L   | 1.000      | -            | -                | -                | -         |    -8.95 | abiraju, anttzz, frontales, Muk0s, slaxejezzz |
|            8 |      205 | 2025-02-17 | GenOne      | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.538 (0.077)    | 0 (0.000) |    22.60 | abiraju, anttzz, frontales, Muk0s, slaxejezzz |
|            7 |      214 | 2025-02-17 | Phantom     | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.70 | abiraju, anttzz, frontales, Muk0s, slaxejezzz |
|            6 |      257 | 2025-02-15 | BAKS        | L   | 1.000      | -            | -                | -                | -         |   -23.50 | abiraju, anttzz, frontales, Muk0s, slaxejezzz |
|            5 |      358 | 2025-02-11 | BetBoom     | L   | 1.000      | -            | -                | -                | -         |    -2.71 | abiraju, anttzz, frontales, Muk0s, slaxejezzz |
|            4 |      378 | 2025-02-10 | Nexus       | W   | 1.000      | 0.143        | 0.176 (0.025)    | 0.556 (0.079)    | 0 (0.000) |    28.11 | abiraju, anttzz, frontales, Muk0s, slaxejezzz |
|            3 |      392 | 2025-02-10 | GamerLegion | L   | 1.000      | -            | -                | -                | -         |    -0.20 | abiraju, anttzz, frontales, Muk0s, slaxejezzz |
|            2 |      471 | 2025-02-08 | LFO 3       | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.060 (0.009)    | 0 (0.000) |     8.52 | abiraju, anttzz, frontales, Muk0s, slaxejezzz |
|            1 |      479 | 2025-02-08 | NAVI Junior | W   | 1.000      | 0.143        | 0.089 (0.013)    | 0.996 (0.142)    | 0 (0.000) |    27.40 | abiraju, anttzz, frontales, Muk0s, slaxejezzz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
