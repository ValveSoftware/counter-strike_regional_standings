### Roster Details<br />
Team Name: Vikings KR<br />
Roster: honda, lukiz, realz1n, remix, zmb<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [112](../standings_global.md)<br />
Regional Rank: [27]( ../standings_americas.md)<br />
Final Rank Value:  861.4<br />
<br />
Final Rank Value (861.4) = Starting Rank Value (832.8) + Head To Head Adjustments (28.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.344[<sup>1</sup>](#table2)
- Bounty Collected: 0.324[<sup>2</sup>](#table1)
- Opponent Network: 0.138[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 832.8
- 400 + ( ( 0.202 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 832.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |        0 | 2024-07-17 | Case              | W   | 1.000      | 0.333        | 0.034 (0.011)    | 0.697 (0.232)    | 0 (0.000) |    18.72 | honda, lukiz, realz1n, remix, zmb  |
|           29 |       31 | 2024-07-16 | Patins da Ferrari | W   | 1.000      | 0.371        | 0.010 (0.004)    | 0.201 (0.074)    | 0 (0.000) |    15.19 | honda, lukiz, realz1n, remix, zmb  |
|           28 |      101 | 2024-07-15 | BESTIA            | L   | 1.000      | -            | -                | -                | -         |    -7.64 | honda, lukiz, realz1n, remix, zmb  |
|           27 |      177 | 2024-07-10 | W7M               | L   | 1.000      | -            | -                | -                | -         |   -18.15 | honda, lukiz, realz1n, remix, zmb  |
|           26 |      198 | 2024-07-09 | KRÜ               | W   | 1.000      | 0.333        | 0.034 (0.011)    | 0.324 (0.108)    | 0 (0.000) |    17.48 | honda, lukiz, realz1n, remix, zmb  |
|           25 |      210 | 2024-07-09 | Legacy            | L   | 1.000      | -            | -                | -                | -         |    -4.61 | honda, lukiz, realz1n, remix, zmb  |
|           24 |      245 | 2024-07-05 | MIBR Academy      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.46 | honda, lukiz, realz1n, remix, zmb  |
|           23 |      250 | 2024-07-02 | Bounty Hunters    | L   | 1.000      | -            | -                | -                | -         |   -10.13 | honda, ksloks, realz1n, remix, zmb |
|           22 |      251 | 2024-07-01 | Patins da Ferrari | W   | 1.000      | 0.333        | 0.010 (0.003)    | 0.201 (0.067)    | 0 (0.000) |    16.97 | honda, ksloks, realz1n, remix, zmb |
|           21 |      255 | 2024-06-30 | Galorys           | W   | 1.000      | 0.333        | 0.026 (0.009)    | 0.535 (0.178)    | 0 (0.000) |    17.00 | honda, ksloks, realz1n, remix, zmb |
|           20 |      270 | 2024-06-28 | Dusty Roots       | W   | 1.000      | 0.333        | 0.010 (0.003)    | 0.191 (0.064)    | 0 (0.000) |    14.28 | honda, ksloks, realz1n, remix, zmb |
|           19 |      280 | 2024-06-26 | Bounty Hunters    | L   | 1.000      | -            | -                | -                | -         |   -10.16 | honda, ksloks, realz1n, remix, zmb |
|           18 |      488 | 2024-06-10 | ex-Corinthians    | W   | 0.956      | 0.268        | 0.006 (0.002)    | -                | 0 (0.000) |     5.82 | honda, ksloks, realz1n, remix, zmb |
|           17 |      501 | 2024-06-10 | Sharks            | L   | 0.953      | -            | -                | -                | -         |    -4.97 | honda, ksloks, realz1n, remix, zmb |
|           16 |      548 | 2024-06-09 | Patins da Ferrari | L   | 0.946      | -            | -                | -                | -         |   -13.41 | honda, ksloks, realz1n, remix, zmb |
|           15 |      609 | 2024-06-08 | BESTIA            | W   | 0.941      | 0.450        | 0.050 (0.021)    | 0.645 (0.273)    | 0 (0.000) |    24.26 | honda, ksloks, realz1n, remix, zmb |
|           14 |      664 | 2024-06-07 | Case              | W   | 0.934      | 0.450        | 0.034 (0.014)    | 0.697 (0.293)    | 0 (0.000) |    18.71 | honda, ksloks, realz1n, remix, zmb |
|           13 |      715 | 2024-06-06 | Dusty Roots       | L   | 0.928      | -            | -                | -                | -         |   -14.35 | honda, ksloks, realz1n, remix, zmb |
|           12 |      735 | 2024-06-06 | Solid             | L   | 0.927      | -            | -                | -                | -         |    -9.10 | honda, ksloks, realz1n, remix, zmb |
|           11 |      857 | 2024-06-03 | W7M               | L   | 0.909      | -            | -                | -                | -         |   -15.11 | honda, ksloks, realz1n, remix, zmb |
|           10 |      941 | 2024-05-31 | Hawks             | W   | 0.888      | 0.371        | -                | 0.035 (0.012)    | -         |     5.52 | honda, ksloks, realz1n, remix, zmb |
|            9 |      990 | 2024-05-29 | Yawara            | W   | 0.876      | -            | -                | -                | -         |     4.16 | honda, ksloks, realz1n, remix, zmb |
|            8 |     1035 | 2024-05-27 | Smoke             | L   | 0.862      | -            | -                | -                | -         |   -17.84 | honda, ksloks, realz1n, remix, zmb |
|            7 |     1391 | 2024-05-15 | Sharks            | L   | 0.782      | -            | -                | -                | -         |    -6.13 | honda, ksloks, realz1n, remix, zmb |
|            6 |     1447 | 2024-05-14 | O PLANO           | W   | 0.776      | -            | -                | -                | -         |     3.99 | honda, ksloks, realz1n, remix, zmb |
|            5 |     1505 | 2024-05-12 | RED Canids        | L   | 0.762      | -            | -                | -                | -         |    -2.84 | honda, ksloks, realz1n, remix, zmb |
|            4 |     1518 | 2024-05-12 | Fluxo             | L   | 0.760      | -            | -                | -                | -         |    -3.53 | honda, ksloks, realz1n, remix, zmb |
|            3 |     1610 | 2024-05-08 | BESTIA            | L   | 0.734      | -            | -                | -                | -         |    -8.39 | honda, JLK, ksloks, realz1n, remix |
|            2 |     1646 | 2024-05-06 | 9z                | L   | 0.720      | -            | -                | -                | -         |    -0.19 | honda, JLK, ksloks, realz1n, remix |
|            1 |     2235 | 2024-04-11 | Galorys           | W   | 0.556      | 0.270        | 0.026 (0.004)    | 0.535 (0.080)    | -         |    10.63 | honda, JLK, ksloks, realz1n, remix |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,029.34)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-03 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-10 |      0.956 | $1,320.00      | $1,261.39       |
| 2024-04-11 |      0.556 | $1,382.00      | $767.95         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
