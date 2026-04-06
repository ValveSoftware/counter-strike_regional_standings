### Roster Details<br />
Team Name: SINQU<br />
Roster: Geni, J0nneW, KapiV, Lene, Samppa<br />
Global Rank: [289](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [183]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  584.6<br />
<br />
Final Rank Value (584.6) = Starting Rank Value (588.2) + Head To Head Adjustments (-3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.118[<sup>2</sup>](#table1)

The average of these factors is 0.096<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 588.2
- 400 + ( ( 0.096 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 588.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      365 | 2026-03-29 | Strael Bora      | L   | 1.000      | -            | -                | -                | -         |   -21.48 | Geni, J0nneW, KapiV, Lene, Samppa |
|           15 |      385 | 2026-03-29 | HAVU             | L   | 1.000      | -            | -                | -                | -         |    -3.28 | Geni, J0nneW, KapiV, Lene, Samppa |
|           14 |      913 | 2026-03-19 | ex-Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |    -3.46 | Geni, J0nneW, KapiV, Lene, Samppa |
|           13 |      961 | 2026-03-18 | GenOne           | W   | 1.000      | 0.384        | 0.017 (0.006)    | 0.540 (0.207)    | 0 (0.000) |    28.42 | Geni, J0nneW, KapiV, Lene, Samppa |
|           12 |     1034 | 2026-03-16 | Leo              | L   | 1.000      | -            | -                | -                | -         |    -2.07 | Geni, J0nneW, KapiV, Lene, Samppa |
|           11 |     3246 | 2026-01-23 | STATE            | L   | 0.716      | -            | -                | -                | -         |    -2.06 | Geni, J0nneW, KapiV, Lene, Samppa |
|           10 |     3251 | 2026-01-23 | Alliance         | L   | 0.715      | -            | -                | -                | -         |    -0.14 | Geni, J0nneW, KapiV, Lene, Samppa |
|            9 |     3254 | 2026-01-23 | Sidequest        | W   | 0.715      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.715) |     5.85 | Geni, J0nneW, KapiV, Lene, Samppa |
|            8 |     3712 | 2026-01-04 | Fingers Crossed  | L   | 0.586      | -            | -                | -                | -         |   -12.40 | Geni, J0nneW, KapiV, Lene, Samppa |
|            7 |     3715 | 2026-01-04 | AaB              | L   | 0.586      | -            | -                | -                | -         |    -0.43 | Geni, J0nneW, KapiV, Lene, Samppa |
|            6 |     3720 | 2026-01-04 | ESC              | L   | 0.585      | -            | -                | -                | -         |    -0.74 | Geni, J0nneW, KapiV, Lene, Samppa |
|            5 |     3723 | 2026-01-04 | ASTRAL           | L   | 0.585      | -            | -                | -                | -         |    -1.20 | Geni, J0nneW, KapiV, Lene, Samppa |
|            4 |     3726 | 2026-01-04 | MINLATE          | L   | 0.585      | -            | -                | -                | -         |    -1.67 | Geni, J0nneW, KapiV, Lene, Samppa |
|            3 |     3869 | 2025-12-17 | Nexus            | L   | 0.467      | -            | -                | -                | -         |    -1.20 | Geni, J0nneW, KapiV, Lene, Samppa |
|            2 |     3874 | 2025-12-17 | Lazer Cats       | L   | 0.466      | -            | -                | -                | -         |    -1.30 | Geni, J0nneW, KapiV, Lene, Samppa |
|            1 |     3878 | 2025-12-17 | Nexus            | W   | 0.466      | 0.339        | 0.001 (0.000)    | 0.449 (0.071)    | 1 (0.466) |    13.58 | Geni, J0nneW, KapiV, Lene, Samppa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
