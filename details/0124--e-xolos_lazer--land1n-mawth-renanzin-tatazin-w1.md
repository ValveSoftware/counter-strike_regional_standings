### Roster Details<br />
Team Name: E-Xolos LAZER<br />
Roster: land1n, mawth, RenanZin, tatazin, w1<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [124](../standings_global.md)<br />
Regional Rank: [32]( ../standings_americas.md)<br />
Final Rank Value:  800.9<br />
<br />
Final Rank Value (800.9) = Starting Rank Value (740.4) + Head To Head Adjustments (60.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.352[<sup>1</sup>](#table2)
- Bounty Collected: 0.277[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 740.4
- 400 + ( ( 0.168 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 740.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |        7 | 2024-06-16 | OMiT             | W   | 1.000      | 0.143        | 0.022 (0.003)    | 0.311 (0.044)    | 0 (0.000) |    17.24 | land1n, mawth, RenanZin, tatazin, w1 |
|           17 |       35 | 2024-06-15 | Strife           | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.150 (0.021)    | 0 (0.000) |    11.44 | land1n, mawth, RenanZin, tatazin, w1 |
|           16 |       69 | 2024-06-14 | One More         | L   | 1.000      | -            | -                | -                | -         |   -20.28 | land1n, mawth, RenanZin, tatazin, w1 |
|           15 |      119 | 2024-06-13 | Carpe Diem       | W   | 1.000      | 0.384        | 0.007 (0.003)    | 0.278 (0.107)    | 0 (0.000) |    15.62 | land1n, mawth, RenanZin, tatazin, w1 |
|           14 |      144 | 2024-06-12 | Strife           | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.150 (0.021)    | 0 (0.000) |    12.25 | land1n, mawth, RenanZin, tatazin, w1 |
|           13 |      145 | 2024-06-12 | Limitless        | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.227 (0.032)    | 0 (0.000) |     9.85 | land1n, mawth, RenanZin, tatazin, w1 |
|           12 |      196 | 2024-06-10 | Strife           | W   | 1.000      | 0.384        | 0.013 (0.005)    | 0.150 (0.058)    | 0 (0.000) |    14.24 | land1n, mawth, RenanZin, tatazin, w1 |
|           11 |      221 | 2024-06-09 | OMiT             | L   | 1.000      | -            | -                | -                | -         |   -11.67 | land1n, mawth, RenanZin, tatazin, w1 |
|           10 |      283 | 2024-06-08 | straykids        | W   | 1.000      | 0.368        | 0.007 (0.002)    | 0.036 (0.013)    | 0 (0.000) |    12.40 | land1n, mawth, RenanZin, tatazin, w1 |
|            9 |      292 | 2024-06-08 | Akimbo           | W   | 1.000      | 0.384        | 0.006 (0.002)    | 0.102 (0.039)    | 0 (0.000) |    13.79 | land1n, mawth, RenanZin, tatazin, w1 |
|            8 |      339 | 2024-06-07 | Strife           | W   | 1.000      | 0.368        | 0.013 (0.005)    | 0.150 (0.055)    | 0 (0.000) |    16.68 | land1n, mawth, RenanZin, tatazin, w1 |
|            7 |      400 | 2024-06-06 | Snakes Den       | L   | 1.000      | -            | -                | -                | -         |   -22.87 | land1n, mawth, RenanZin, tatazin, w1 |
|            6 |      413 | 2024-06-06 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -5.68 | land1n, mawth, RenanZin, tatazin, w1 |
|            5 |      518 | 2024-06-04 | Legacy           | L   | 1.000      | -            | -                | -                | -         |    -3.95 | land1n, mawth, RenanZin, tatazin, w1 |
|            4 |      559 | 2024-06-03 | Perseverance     | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.071 (0.027)    | 0 (0.000) |     7.46 | land1n, mawth, RenanZin, tatazin, w1 |
|            3 |      928 | 2024-05-20 | M80              | L   | 1.000      | -            | -                | -                | -         |    -1.66 | land1n, mawth, RenanZin, tatazin, w1 |
|            2 |     3220 | 2024-02-16 | Mythic           | L   | 0.384      | -            | -                | -                | -         |    -3.92 | land1n, mawth, RenanZin, tatazin, w1 |
|            1 |     4069 | 2024-01-13 | RED Canids       | L   | 0.157      | -            | -                | -                | -         |    -0.42 | land1n, RenanZin, tatazin, w1, watts |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,300.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-10 |      1.000 | $3,300.00      | $3,300.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
