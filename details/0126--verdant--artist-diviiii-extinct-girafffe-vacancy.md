### Roster Details<br />
Team Name: Verdant<br />
Roster: arTisT, Diviiii, Extinct, Girafffe, Vacancy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [126](../standings_global.md)<br />
Regional Rank: [86]( ../standings_europe.md)<br />
Final Rank Value:  815.0<br />
<br />
Final Rank Value (815.0) = Starting Rank Value (871.0) + Head To Head Adjustments (-56.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.346[<sup>1</sup>](#table2)
- Bounty Collected: 0.356[<sup>2</sup>](#table1)
- Opponent Network: 0.119[<sup>2</sup>](#table1)
- LAN Wins: 0.056[<sup>2</sup>](#table1)

The average of these factors is 0.219<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 871.0
- 400 + ( ( 0.219 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 871.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      156 | 2024-07-12 | Revenant          | L   | 1.000      | -            | -                | -                | -         |   -12.34 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           30 |      237 | 2024-07-08 | Rebels            | L   | 1.000      | -            | -                | -                | -         |    -7.04 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           29 |      332 | 2024-06-16 | UNiTY             | L   | 0.991      | -            | -                | -                | -         |    -8.13 | arTisT, Diviiii, Ducky, Extinct, Vacancy    |
|           28 |      343 | 2024-06-15 | Revenant          | L   | 0.988      | -            | -                | -                | -         |   -15.89 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           27 |      383 | 2024-06-14 | Aurora Young Blud | L   | 0.981      | -            | -                | -                | -         |   -16.36 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           26 |      422 | 2024-06-13 | Nemiga            | L   | 0.974      | -            | -                | -                | -         |    -3.86 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           25 |      428 | 2024-06-13 | Revenant          | W   | 0.973      | 0.143        | 0.037 (0.005)    | 0.287 (0.040)    | 0 (0.000) |    13.78 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           24 |      449 | 2024-06-12 | DMS               | W   | 0.968      | 0.143        | 0.005 (0.001)    | 0.494 (0.068)    | 0 (0.000) |    18.84 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           23 |      473 | 2024-06-11 | 9INE              | L   | 0.961      | -            | -                | -                | -         |   -26.02 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           22 |      667 | 2024-06-07 | B8                | L   | 0.933      | -            | -                | -                | -         |    -4.30 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           21 |      677 | 2024-06-07 | Aurora            | L   | 0.933      | -            | -                | -                | -         |    -0.85 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           20 |      684 | 2024-06-07 | B8                | W   | 0.932      | 0.143        | 0.246 (0.033)    | 1.000 (0.133)    | 0 (0.000) |    25.38 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           19 |      721 | 2024-06-06 | Aurora Young Blud | L   | 0.927      | -            | -                | -                | -         |   -16.29 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           18 |      780 | 2024-06-05 | Enterprise        | W   | 0.921      | 0.372        | 0.055 (0.019)    | 0.635 (0.218)    | 0 (0.000) |    19.15 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           17 |      828 | 2024-06-04 | EXO               | L   | 0.915      | -            | -                | -                | -         |   -16.79 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           16 |      860 | 2024-06-03 | LEON              | W   | 0.908      | 0.372        | 0.010 (0.003)    | 0.160 (0.054)    | 0 (0.000) |     8.97 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           15 |      912 | 2024-06-01 | V1dar             | W   | 0.894      | 0.372        | 0.000 (0.000)    | 0.074 (0.025)    | 0 (0.000) |     4.74 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           14 |     1000 | 2024-05-29 | DMS               | L   | 0.874      | -            | -                | -                | -         |   -11.27 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           13 |     1206 | 2024-05-21 | Zero Tenacity     | L   | 0.819      | -            | -                | -                | -         |    -5.28 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           12 |     1242 | 2024-05-20 | Sampi             | W   | 0.812      | 0.435        | 0.045 (0.016)    | 0.975 (0.344)    | 0 (0.000) |    16.18 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           11 |     1305 | 2024-05-18 | Space             | L   | 0.798      | -            | -                | -                | -         |   -11.48 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           10 |     1418 | 2024-05-15 | Sangal            | W   | 0.779      | 0.435        | 0.232 (0.079)    | 0.893 (0.302)    | 0 (0.000) |    19.62 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            9 |     1473 | 2024-05-14 | B8                | L   | 0.773      | -            | -                | -                | -         |    -3.36 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            8 |     1499 | 2024-05-13 | kONO              | L   | 0.765      | -            | -                | -                | -         |   -10.92 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            7 |     1512 | 2024-05-12 | Johnny Speeds     | L   | 0.761      | -            | -                | -                | -         |    -1.37 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            6 |     1523 | 2024-05-12 | Zero Tenacity     | L   | 0.759      | -            | -                | -                | -         |    -6.04 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            5 |     1543 | 2024-05-11 | V1dar             | W   | 0.754      | 0.143        | 0.000 (0.000)    | 0.074 (0.008)    | 0 (0.000) |     3.53 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            4 |     1571 | 2024-05-10 | ECLOT             | L   | 0.746      | -            | -                | -                | -         |    -3.31 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            3 |     2582 | 2024-04-01 | Reason            | W   | 0.486      | 0.301        | 0.003 (0.000)    | 0.000 (0.000)    | 1 (0.486) |     2.28 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |
|            2 |     2656 | 2024-03-27 | Ninjas in Pyjamas | L   | 0.454      | -            | -                | -                | -         |    -0.07 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |
|            1 |     2780 | 2024-03-19 | EXO               | L   | 0.401      | -            | -                | -                | -         |    -7.54 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,139.22)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      0.955 | $750.00        | $715.99         |
| 2024-05-13 |      0.765 | $1,000.00      | $765.10         |
| 2024-04-01 |      0.486 | $3,153.00      | $1,530.95       |
| 2024-03-19 |      0.401 | $317.00        | $127.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
