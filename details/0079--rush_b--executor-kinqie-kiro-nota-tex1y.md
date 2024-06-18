### Roster Details<br />
Team Name: RUSH B<br />
Roster: executor, kinqie, Kiro, nota, tex1y<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [79](../standings_global.md)<br />
Regional Rank: [57]( ../standings_europe.md)<br />
Final Rank Value:  960.7<br />
<br />
Final Rank Value (960.7) = Starting Rank Value (847.8) + Head To Head Adjustments (112.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.360[<sup>1</sup>](#table2)
- Bounty Collected: 0.389[<sup>2</sup>](#table1)
- Opponent Network: 0.133[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.220<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 847.8
- 400 + ( ( 0.220 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 847.8


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
|           26 |      206 | 2024-06-10 | PARIVISION   | L   | 1.000      | -            | -                | -                | -         |   -11.66 | executor, kinqie, Kiro, nota, tex1y |
|           25 |      213 | 2024-06-10 | SAW          | L   | 1.000      | -            | -                | -                | -         |    -4.90 | executor, kinqie, Kiro, nota, tex1y |
|           24 |      218 | 2024-06-10 | Monte        | W   | 1.000      | 0.143        | 0.189 (0.027)    | 0.674 (0.096)    | 0 (0.000) |    25.01 | executor, kinqie, Kiro, nota, tex1y |
|           23 |      249 | 2024-06-09 | 9 Pandas     | W   | 1.000      | 0.143        | 0.114 (0.016)    | 0.663 (0.095)    | 0 (0.000) |    24.79 | executor, kinqie, Kiro, nota, tex1y |
|           22 |      260 | 2024-06-09 | Aurora       | W   | 1.000      | 0.143        | 0.526 (0.075)    | 0.874 (0.125)    | 0 (0.000) |    29.29 | executor, kinqie, Kiro, nota, tex1y |
|           21 |      265 | 2024-06-09 | SINNERS      | W   | 1.000      | 0.143        | 0.045 (0.006)    | 0.782 (0.112)    | 0 (0.000) |    21.98 | executor, kinqie, Kiro, nota, tex1y |
|           20 |      275 | 2024-06-09 | 3DMAX        | L   | 1.000      | -            | -                | -                | -         |    -4.72 | executor, kinqie, Kiro, nota, tex1y |
|           19 |      417 | 2024-06-06 | Aurora       | L   | 1.000      | -            | -                | -                | -         |    -1.19 | executor, kinqie, Kiro, nota, tex1y |
|           18 |      486 | 2024-06-05 | SINNERS      | L   | 1.000      | -            | -                | -                | -         |   -10.20 | executor, kinqie, Kiro, nota, tex1y |
|           17 |      536 | 2024-06-04 | SAW          | W   | 1.000      | 0.500        | 0.140 (0.070)    | 0.571 (0.285)    | 0 (0.000) |    29.02 | executor, kinqie, Kiro, nota, tex1y |
|           16 |     1336 | 2024-05-07 | MOUZ NXT     | L   | 0.922      | -            | -                | -                | -         |    -6.71 | executor, kinqie, Kiro, nota, tex1y |
|           15 |     1362 | 2024-05-05 | Sampi        | L   | 0.909      | -            | -                | -                | -         |    -9.61 | executor, kinqie, Kiro, nota, tex1y |
|           14 |     1387 | 2024-05-04 | HAVU         | W   | 0.902      | 0.435        | 0.002 (0.001)    | 0.222 (0.087)    | 0 (0.000) |     9.82 | executor, kinqie, Kiro, nota, tex1y |
|           13 |     1431 | 2024-05-02 | EYEBALLERS   | L   | 0.888      | -            | -                | -                | -         |   -11.45 | executor, kinqie, Kiro, nota, tex1y |
|           12 |     1488 | 2024-04-29 | ENCE Academy | W   | 0.870      | 0.435        | 0.010 (0.004)    | 0.237 (0.090)    | 0 (0.000) |    10.78 | executor, kinqie, Kiro, nota, tex1y |
|           11 |     1990 | 2024-04-10 | KOI          | L   | 0.743      | -            | -                | -                | -         |    -3.60 | executor, kinqie, Kiro, nota, tex1y |
|           10 |     2043 | 2024-04-09 | PARIVISION   | W   | 0.736      | 0.500        | 0.015 (0.005)    | 0.462 (0.170)    | 0 (0.000) |    16.00 | executor, kinqie, Kiro, nota, tex1y |
|            9 |     2279 | 2024-04-01 | PERA         | L   | 0.682      | -            | -                | -                | -         |    -8.29 | executor, kinqie, Kiro, nota, tex1y |
|            8 |     2288 | 2024-03-31 | Monte        | W   | 0.675      | 0.500        | 0.189 (0.064)    | 0.674 (0.228)    | 0 (0.000) |    19.39 | executor, kinqie, Kiro, nota, tex1y |
|            7 |     2301 | 2024-03-29 | System5      | W   | 0.663      | 0.500        | -                | 0.115 (0.038)    | 0 (0.000) |     3.63 | executor, kinqie, Kiro, nota, tex1y |
|            6 |     2620 | 2024-03-13 | Betera       | W   | 0.556      | 0.500        | 0.002 (0.000)    | -                | -         |     5.85 | executor, kinqie, Kiro, nota, tex1y |
|            5 |     2884 | 2024-03-03 | Metizport    | L   | 0.489      | -            | -                | -                | -         |    -4.62 | executor, kinqie, Kiro, nota, tex1y |
|            4 |     2993 | 2024-02-26 | SAW          | L   | 0.450      | -            | -                | -                | -         |    -0.90 | executor, kinqie, Kiro, nota, tex1y |
|            3 |     3568 | 2024-01-30 | Sashi        | L   | 0.269      | -            | -                | -                | -         |    -1.26 | executor, kinqie, Kiro, nota, tex1y |
|            2 |     4173 | 2024-01-11 | ILIN         | L   | 0.141      | -            | -                | -                | -         |    -3.90 | executor, kinqie, Kiro, nota, tex1y |
|            1 |     4175 | 2024-01-10 | QuackQuack   | W   | 0.137      | -            | -                | -                | -         |     0.33 | executor, kinqie, Kiro, nota, tex1y |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,000.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
