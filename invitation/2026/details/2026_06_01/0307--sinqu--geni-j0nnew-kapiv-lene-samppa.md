### Roster Details<br />
Team Name: SINQU<br />
Roster: Geni, J0nneW, KapiV, Lene, Samppa<br />
Global Rank: [307](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [195]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  536.4<br />
<br />
Final Rank Value (536.4) = Starting Rank Value (538.2) + Head To Head Adjustments (-1.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.044[<sup>2</sup>](#table1)

The average of these factors is 0.073<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 538.2
- 400 + ( ( 0.073 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 538.2


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
|           16 |     2405 | 2026-03-29 | Strael Bora      | L   | 0.773      | -            | -                | -                | -         |    -8.11 | Geni, J0nneW, KapiV, Lene, Samppa |
|           15 |     2434 | 2026-03-29 | HAVU             | L   | 0.772      | -            | -                | -                | -         |    -2.60 | Geni, J0nneW, KapiV, Lene, Samppa |
|           14 |     2995 | 2026-03-19 | ex-Zero Tenacity | L   | 0.706      | -            | -                | -                | -         |    -3.50 | Geni, J0nneW, KapiV, Lene, Samppa |
|           13 |     3043 | 2026-03-18 | GenOne           | W   | 0.699      | 0.384        | 0.011 (0.003)    | 0.916 (0.246)    | 0 (0.000) |    19.03 | Geni, J0nneW, KapiV, Lene, Samppa |
|           12 |     3116 | 2026-03-16 | Leo              | L   | 0.687      | -            | -                | -                | -         |    -2.46 | Geni, J0nneW, KapiV, Lene, Samppa |
|           11 |     5329 | 2026-01-23 | STATE            | L   | 0.342      | -            | -                | -                | -         |    -0.33 | Geni, J0nneW, KapiV, Lene, Samppa |
|           10 |     5334 | 2026-01-23 | Alliance         | L   | 0.342      | -            | -                | -                | -         |    -0.07 | Geni, J0nneW, KapiV, Lene, Samppa |
|            9 |     5337 | 2026-01-23 | Sidequest        | W   | 0.341      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.341) |     3.47 | Geni, J0nneW, KapiV, Lene, Samppa |
|            8 |     5795 | 2026-01-04 | Grindas          | L   | 0.212      | -            | -                | -                | -         |    -3.64 | Geni, J0nneW, KapiV, Lene, Samppa |
|            7 |     5798 | 2026-01-04 | AaB              | L   | 0.212      | -            | -                | -                | -         |    -3.06 | Geni, J0nneW, KapiV, Lene, Samppa |
|            6 |     5803 | 2026-01-04 | Walczaki         | L   | 0.212      | -            | -                | -                | -         |    -0.18 | Geni, J0nneW, KapiV, Lene, Samppa |
|            5 |     5806 | 2026-01-04 | ASTRAL           | L   | 0.211      | -            | -                | -                | -         |    -0.25 | Geni, J0nneW, KapiV, Lene, Samppa |
|            4 |     5809 | 2026-01-04 | Persona Grata    | L   | 0.211      | -            | -                | -                | -         |    -1.24 | Geni, J0nneW, KapiV, Lene, Samppa |
|            3 |     5952 | 2025-12-17 | Nexus            | L   | 0.093      | -            | -                | -                | -         |    -0.67 | Geni, J0nneW, KapiV, Lene, Samppa |
|            2 |     5957 | 2025-12-17 | Lazer Cats       | L   | 0.093      | -            | -                | -                | -         |    -0.39 | Geni, J0nneW, KapiV, Lene, Samppa |
|            1 |     5961 | 2025-12-17 | Nexus            | W   | 0.092      | 0.339        | 0.000 (0.000)    | 0.219 (0.007)    | 1 (0.092) |     2.25 | Geni, J0nneW, KapiV, Lene, Samppa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
