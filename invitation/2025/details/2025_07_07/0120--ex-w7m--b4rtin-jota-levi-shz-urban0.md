### Roster Details<br />
Team Name: ex-W7M<br />
Roster: b4rtiN, JOTA, levi, shz, urban0<br />
Global Rank: [120](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [33]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  727.4<br />
<br />
Final Rank Value (727.4) = Starting Rank Value (689.2) + Head To Head Adjustments (38.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.296[<sup>1</sup>](#table2)
- Bounty Collected: 0.266[<sup>2</sup>](#table1)
- Opponent Network: 0.058[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.155<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 689.2
- 400 + ( ( 0.155 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 689.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |       11 | 2025-06-30 | Bounty Hunters  | L   | 1.000      | -            | -                | -                | -         |   -13.94 | b4rtiN, JOTA, levi, shz, urban0 |
|           15 |       14 | 2025-06-29 | RED Canids      | L   | 1.000      | -            | -                | -                | -         |   -12.01 | b4rtiN, JOTA, levi, shz, urban0 |
|           14 |       17 | 2025-06-29 | SELVA           | W   | 1.000      | 0.384        | 0.020 (0.008)    | 0.349 (0.134)    | 0 (0.000) |    17.71 | b4rtiN, JOTA, levi, shz, urban0 |
|           13 |      445 | 2025-05-29 | Flamengo        | W   | 0.941      | 0.333        | 0.005 (0.002)    | 0.402 (0.126)    | 0 (0.000) |    16.55 | JOTA, levi, shz, t9rnay, urban0 |
|           12 |      489 | 2025-05-25 | Sharks          | L   | 0.915      | -            | -                | -                | -         |    -6.30 | JOTA, levi, shz, t9rnay, urban0 |
|           11 |      514 | 2025-05-23 | LP              | W   | 0.902      | 0.333        | 0.006 (0.002)    | 0.406 (0.122)    | 0 (0.000) |    12.89 | JOTA, levi, shz, t9rnay, urban0 |
|           10 |      668 | 2025-05-16 | América         | W   | 0.855      | 0.333        | 0.002 (0.000)    | 0.171 (0.049)    | 0 (0.000) |    11.50 | JOTA, levi, shz, t9rnay, urban0 |
|            9 |      693 | 2025-05-15 | Sharks          | L   | 0.848      | -            | -                | -                | -         |    -5.66 | JOTA, levi, shz, t9rnay, urban0 |
|            8 |      743 | 2025-05-13 | Tropa do KinGui | W   | 0.835      | 0.333        | 0.001 (0.000)    | 0.093 (0.026)    | 0 (0.000) |    10.60 | JOTA, levi, shz, t9rnay, urban0 |
|            7 |      754 | 2025-05-13 | SELVA           | W   | 0.834      | 0.333        | 0.020 (0.006)    | 0.349 (0.097)    | 0 (0.000) |    19.26 | JOTA, levi, shz, t9rnay, urban0 |
|            6 |     1985 | 2025-03-28 | 2GAME           | L   | 0.526      | -            | -                | -                | -         |    -6.47 | horvy, JOTA, levi, shz, t9rnay  |
|            5 |     2051 | 2025-03-27 | BESTIA          | L   | 0.520      | -            | -                | -                | -         |    -6.23 | horvy, JOTA, levi, shz, t9rnay  |
|            4 |     2547 | 2025-03-09 | Keyd Stars      | L   | 0.402      | -            | -                | -                | -         |    -5.04 | fokiu, JOTA, levi, shz, t9rnay  |
|            3 |     2559 | 2025-03-09 | LP              | W   | 0.401      | 0.143        | 0.006 (0.000)    | 0.406 (0.023)    | 0 (0.000) |     6.86 | fokiu, JOTA, levi, shz, t9rnay  |
|            2 |     2658 | 2025-03-08 | VELOX           | W   | 0.393      | 0.143        | 0.000 (0.000)    | 0.049 (0.003)    | 0 (0.000) |     2.85 | fokiu, JOTA, levi, shz, t9rnay  |
|            1 |     2720 | 2025-03-07 | 9z              | L   | 0.386      | -            | -                | -                | -         |    -4.38 | fokiu, JOTA, levi, shz, t9rnay  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,099.69)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-29 |      0.941 | $2,232.00      | $2,099.69       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
