### Roster Details<br />
Team Name: RUSH B<br />
Roster: executor, kinqie, Kiro, nota, tex1y<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [82](../standings_global.md)<br />
Regional Rank: [57]( ../standings_europe.md)<br />
Final Rank Value:  969.1<br />
<br />
Final Rank Value (969.1) = Starting Rank Value (865.4) + Head To Head Adjustments (103.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.384[<sup>1</sup>](#table2)
- Bounty Collected: 0.386[<sup>2</sup>](#table1)
- Opponent Network: 0.113[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.221<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 865.4
- 400 + ( ( 0.221 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 865.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |      342 | 2024-06-10 | PARIVISION   | L   | 0.992      | -            | -                | -                | -         |   -12.22 | executor, kinqie, Kiro, nota, tex1y |
|           23 |      349 | 2024-06-10 | SAW          | L   | 0.992      | -            | -                | -                | -         |    -5.83 | executor, kinqie, Kiro, nota, tex1y |
|           22 |      354 | 2024-06-10 | Monte        | W   | 0.991      | 0.143        | 0.188 (0.027)    | 0.668 (0.095)    | 0 (0.000) |    24.05 | executor, kinqie, Kiro, nota, tex1y |
|           21 |      385 | 2024-06-09 | 9 Pandas     | W   | 0.986      | 0.143        | 0.125 (0.018)    | 0.625 (0.088)    | 0 (0.000) |    23.47 | executor, kinqie, Kiro, nota, tex1y |
|           20 |      396 | 2024-06-09 | Aurora       | W   | 0.985      | 0.143        | 0.518 (0.073)    | 0.853 (0.120)    | 0 (0.000) |    29.11 | executor, kinqie, Kiro, nota, tex1y |
|           19 |      401 | 2024-06-09 | SINNERS      | W   | 0.985      | 0.143        | 0.057 (0.008)    | 0.767 (0.108)    | 0 (0.000) |    21.54 | executor, kinqie, Kiro, nota, tex1y |
|           18 |      411 | 2024-06-09 | 3DMAX        | L   | 0.985      | -            | -                | -                | -         |    -4.79 | executor, kinqie, Kiro, nota, tex1y |
|           17 |      553 | 2024-06-06 | Aurora       | L   | 0.967      | -            | -                | -                | -         |    -1.01 | executor, kinqie, Kiro, nota, tex1y |
|           16 |      622 | 2024-06-05 | SINNERS      | L   | 0.960      | -            | -                | -                | -         |    -9.91 | executor, kinqie, Kiro, nota, tex1y |
|           15 |      672 | 2024-06-04 | SAW          | W   | 0.953      | 0.500        | 0.147 (0.070)    | 0.526 (0.251)    | 0 (0.000) |    26.95 | executor, kinqie, Kiro, nota, tex1y |
|           14 |     1470 | 2024-05-07 | MOUZ NXT     | L   | 0.766      | -            | -                | -                | -         |    -5.83 | executor, kinqie, Kiro, nota, tex1y |
|           13 |     1496 | 2024-05-05 | Slovakia     | L   | 0.754      | -            | -                | -                | -         |    -8.77 | executor, kinqie, Kiro, nota, tex1y |
|           12 |     1521 | 2024-05-04 | HAVU         | W   | 0.746      | 0.435        | 0.002 (0.001)    | 0.211 (0.068)    | 0 (0.000) |     7.67 | executor, kinqie, Kiro, nota, tex1y |
|           11 |     1565 | 2024-05-02 | EYEBALLERS   | L   | 0.732      | -            | -                | -                | -         |   -10.01 | executor, kinqie, Kiro, nota, tex1y |
|           10 |     1622 | 2024-04-29 | ENCE Academy | W   | 0.714      | 0.435        | 0.009 (0.003)    | 0.215 (0.067)    | 0 (0.000) |     8.13 | executor, kinqie, Kiro, nota, tex1y |
|            9 |     2124 | 2024-04-10 | KOI          | L   | 0.587      | -            | -                | -                | -         |    -3.10 | executor, kinqie, Kiro, nota, tex1y |
|            8 |     2177 | 2024-04-09 | PARIVISION   | W   | 0.581      | 0.500        | 0.026 (0.008)    | 0.446 (0.129)    | 0 (0.000) |    12.11 | executor, kinqie, Kiro, nota, tex1y |
|            7 |     2413 | 2024-04-01 | PERA         | L   | 0.527      | -            | -                | -                | -         |    -6.38 | executor, kinqie, Kiro, nota, tex1y |
|            6 |     2422 | 2024-03-31 | Monte        | W   | 0.520      | 0.500        | 0.188 (0.049)    | 0.668 (0.174)    | 0 (0.000) |    14.63 | executor, kinqie, Kiro, nota, tex1y |
|            5 |     2434 | 2024-03-29 | System5      | W   | 0.507      | 0.500        | -                | 0.113 (0.029)    | 0 (0.000) |     4.72 | executor, kinqie, Kiro, nota, tex1y |
|            4 |     2753 | 2024-03-13 | Betera       | W   | 0.401      | 0.500        | 0.008 (0.002)    | -                | -         |     4.33 | executor, kinqie, Kiro, nota, tex1y |
|            3 |     3017 | 2024-03-03 | Metizport    | L   | 0.333      | -            | -                | -                | -         |    -3.71 | executor, kinqie, Kiro, nota, tex1y |
|            2 |     3126 | 2024-02-26 | SAW          | L   | 0.295      | -            | -                | -                | -         |    -0.87 | executor, kinqie, Kiro, nota, tex1y |
|            1 |     3701 | 2024-01-30 | Sashi        | L   | 0.113      | -            | -                | -                | -         |    -0.58 | executor, kinqie, Kiro, nota, tex1y |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,416.90)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
