### Roster Details<br />
Team Name: Vikings KR<br />
Roster: honda, lukiz, realz1n, remix, zmb<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [123](../standings_global.md)<br />
Regional Rank: [32]( ../standings_americas.md)<br />
Final Rank Value:  808.9<br />
<br />
Final Rank Value (808.9) = Starting Rank Value (800.6) + Head To Head Adjustments (8.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.343[<sup>1</sup>](#table2)
- Bounty Collected: 0.314[<sup>2</sup>](#table1)
- Opponent Network: 0.102[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.190<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 800.6
- 400 + ( ( 0.190 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 800.6


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
|           27 |       13 | 2024-07-10 | W7M               | L   | 1.000      | -            | -                | -                | -         |   -18.39 | honda, lukiz, realz1n, remix, zmb  |
|           26 |       34 | 2024-07-09 | KRÜ               | W   | 1.000      | 0.333        | 0.025 (0.008)    | 0.235 (0.078)    | 0 (0.000) |    16.98 | honda, lukiz, realz1n, remix, zmb  |
|           25 |       46 | 2024-07-09 | Legacy            | L   | 1.000      | -            | -                | -                | -         |    -4.33 | honda, lukiz, realz1n, remix, zmb  |
|           24 |       81 | 2024-07-05 | MIBR Academy      | W   | 1.000      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     2.81 | honda, lukiz, realz1n, remix, zmb  |
|           23 |       86 | 2024-07-02 | Bounty Hunters    | L   | 1.000      | -            | -                | -                | -         |   -10.01 | honda, ksloks, realz1n, remix, zmb |
|           22 |       87 | 2024-07-01 | Patins da Ferrari | W   | 1.000      | 0.333        | 0.010 (0.003)    | 0.202 (0.067)    | 0 (0.000) |    17.50 | honda, ksloks, realz1n, remix, zmb |
|           21 |       91 | 2024-06-30 | Galorys           | W   | 1.000      | 0.333        | 0.026 (0.009)    | 0.519 (0.173)    | 0 (0.000) |    16.90 | honda, ksloks, realz1n, remix, zmb |
|           20 |      106 | 2024-06-28 | Dusty Roots       | W   | 1.000      | 0.333        | 0.010 (0.003)    | 0.155 (0.052)    | 0 (0.000) |    14.28 | honda, ksloks, realz1n, remix, zmb |
|           19 |      116 | 2024-06-26 | Bounty Hunters    | L   | 1.000      | -            | -                | -                | -         |   -10.03 | honda, ksloks, realz1n, remix, zmb |
|           18 |      324 | 2024-06-10 | ex-Corinthians    | W   | 0.995      | 0.268        | 0.006 (0.002)    | -                | 0 (0.000) |     6.63 | honda, ksloks, realz1n, remix, zmb |
|           17 |      337 | 2024-06-10 | Sharks            | L   | 0.993      | -            | -                | -                | -         |    -4.81 | honda, ksloks, realz1n, remix, zmb |
|           16 |      384 | 2024-06-09 | Patins da Ferrari | L   | 0.986      | -            | -                | -                | -         |   -13.30 | honda, ksloks, realz1n, remix, zmb |
|           15 |      445 | 2024-06-08 | BESTIA            | W   | 0.980      | 0.450        | 0.050 (0.022)    | 0.657 (0.290)    | 0 (0.000) |    25.53 | honda, ksloks, realz1n, remix, zmb |
|           14 |      500 | 2024-06-07 | Case              | W   | 0.974      | 0.450        | 0.033 (0.015)    | 0.582 (0.255)    | 0 (0.000) |    19.16 | honda, ksloks, realz1n, remix, zmb |
|           13 |      551 | 2024-06-06 | Dusty Roots       | L   | 0.967      | -            | -                | -                | -         |   -14.88 | honda, ksloks, realz1n, remix, zmb |
|           12 |      571 | 2024-06-06 | Solid             | L   | 0.966      | -            | -                | -                | -         |    -9.40 | honda, ksloks, realz1n, remix, zmb |
|           11 |      693 | 2024-06-03 | W7M               | L   | 0.949      | -            | -                | -                | -         |   -15.96 | honda, ksloks, realz1n, remix, zmb |
|           10 |      777 | 2024-05-31 | Hawks             | W   | 0.928      | 0.371        | 0.000 (0.000)    | 0.037 (0.013)    | 0 (0.000) |     6.45 | honda, ksloks, realz1n, remix, zmb |
|            9 |      826 | 2024-05-29 | Yawara            | W   | 0.915      | 0.371        | -                | 0.016 (0.006)    | 0 (0.000) |     4.88 | honda, ksloks, realz1n, remix, zmb |
|            8 |      871 | 2024-05-27 | ex-2GAME          | L   | 0.902      | -            | -                | -                | -         |   -17.38 | honda, ksloks, realz1n, remix, zmb |
|            7 |     1227 | 2024-05-15 | Sharks            | L   | 0.822      | -            | -                | -                | -         |    -5.90 | honda, ksloks, realz1n, remix, zmb |
|            6 |     1283 | 2024-05-14 | O PLANO           | W   | 0.815      | 0.371        | -                | 0.026 (0.008)    | -         |     4.80 | honda, ksloks, realz1n, remix, zmb |
|            5 |     1341 | 2024-05-12 | RED Canids        | L   | 0.802      | -            | -                | -                | -         |    -2.77 | honda, ksloks, realz1n, remix, zmb |
|            4 |     1354 | 2024-05-12 | Fluxo             | L   | 0.800      | -            | -                | -                | -         |    -3.40 | honda, ksloks, realz1n, remix, zmb |
|            3 |     1446 | 2024-05-08 | BESTIA            | L   | 0.774      | -            | -                | -                | -         |    -8.56 | honda, JLK, ksloks, realz1n, remix |
|            2 |     1482 | 2024-05-06 | 9z                | L   | 0.760      | -            | -                | -                | -         |    -0.18 | honda, JLK, ksloks, realz1n, remix |
|            1 |     2071 | 2024-04-11 | Galorys           | W   | 0.595      | 0.270        | 0.026 (0.004)    | 0.519 (0.083)    | -         |    11.64 | honda, JLK, ksloks, realz1n, remix |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,136.37)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-03 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-10 |      0.995 | $1,320.00      | $1,313.68       |
| 2024-04-11 |      0.595 | $1,382.00      | $822.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
