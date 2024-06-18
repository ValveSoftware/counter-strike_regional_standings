### Roster Details<br />
Team Name: Vikings KR<br />
Roster: honda, ksloks, realz1n, remix, zmb<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [138](../standings_global.md)<br />
Regional Rank: [38]( ../standings_americas.md)<br />
Final Rank Value:  743.6<br />
<br />
Final Rank Value (743.6) = Starting Rank Value (747.2) + Head To Head Adjustments (-3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.322[<sup>1</sup>](#table2)
- Bounty Collected: 0.295[<sup>2</sup>](#table1)
- Opponent Network: 0.066[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.171<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 747.2
- 400 + ( ( 0.171 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 747.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      188 | 2024-06-10 | ex-Corinthians | W   | 1.000      | 0.268        | 0.004 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     7.39 | honda, ksloks, realz1n, remix, zmb |
|           17 |      201 | 2024-06-10 | Sharks         | L   | 1.000      | -            | -                | -                | -         |    -3.92 | honda, ksloks, realz1n, remix, zmb |
|           16 |      248 | 2024-06-09 | Corinthians    | L   | 1.000      | -            | -                | -                | -         |   -16.74 | honda, ksloks, realz1n, remix, zmb |
|           15 |      309 | 2024-06-08 | BESTIA         | W   | 1.000      | 0.450        | 0.052 (0.023)    | 0.594 (0.268)    | 0 (0.000) |    27.12 | honda, ksloks, realz1n, remix, zmb |
|           14 |      364 | 2024-06-07 | Case           | W   | 1.000      | 0.450        | 0.026 (0.012)    | 0.579 (0.261)    | 0 (0.000) |    20.86 | honda, ksloks, realz1n, remix, zmb |
|           13 |      415 | 2024-06-06 | Dusty Roots    | L   | 1.000      | -            | -                | -                | -         |   -14.74 | honda, ksloks, realz1n, remix, zmb |
|           12 |      435 | 2024-06-06 | Solid          | L   | 1.000      | -            | -                | -                | -         |    -8.57 | honda, ksloks, realz1n, remix, zmb |
|           11 |      557 | 2024-06-03 | W7M            | L   | 1.000      | -            | -                | -                | -         |   -15.21 | honda, ksloks, realz1n, remix, zmb |
|           10 |      643 | 2024-05-31 | Hawks          | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.036 (0.014)    | 0 (0.000) |     8.22 | honda, ksloks, realz1n, remix, zmb |
|            9 |      692 | 2024-05-29 | Yawara         | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.020 (0.008)    | 0 (0.000) |     6.37 | honda, ksloks, realz1n, remix, zmb |
|            8 |      737 | 2024-05-27 | ex-2GAME       | L   | 1.000      | -            | -                | -                | -         |   -16.92 | honda, ksloks, realz1n, remix, zmb |
|            7 |     1093 | 2024-05-15 | Sharks         | L   | 0.978      | -            | -                | -                | -         |    -5.57 | honda, ksloks, realz1n, remix, zmb |
|            6 |     1149 | 2024-05-14 | O PLANO        | W   | 0.971      | 0.371        | 0.000 (0.000)    | 0.028 (0.010)    | 0 (0.000) |     6.98 | honda, ksloks, realz1n, remix, zmb |
|            5 |     1207 | 2024-05-12 | RED Canids     | L   | 0.957      | -            | -                | -                | -         |    -2.63 | honda, ksloks, realz1n, remix, zmb |
|            4 |     1220 | 2024-05-12 | Fluxo          | L   | 0.955      | -            | -                | -                | -         |    -2.97 | honda, ksloks, realz1n, remix, zmb |
|            3 |     1312 | 2024-05-08 | BESTIA         | L   | 0.929      | -            | -                | -                | -         |    -9.04 | honda, JLK, ksloks, realz1n, remix |
|            2 |     1348 | 2024-05-06 | 9z             | L   | 0.916      | -            | -                | -                | -         |    -0.27 | honda, JLK, ksloks, realz1n, remix |
|            1 |     1937 | 2024-04-11 | Galorys        | W   | 0.751      | 0.270        | 0.023 (0.005)    | 0.517 (0.105)    | 0 (0.000) |    16.04 | honda, JLK, ksloks, realz1n, remix |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,357.83)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      1.000 | $1,320.00      | $1,320.00       |
| 2024-04-11 |      0.751 | $1,382.00      | $1,037.83       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
