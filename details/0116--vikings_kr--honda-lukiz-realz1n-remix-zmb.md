### Roster Details<br />
Team Name: Vikings KR<br />
Roster: honda, lukiz, realz1n, remix, zmb<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [116](../standings_global.md)<br />
Regional Rank: [28]( ../standings_americas.md)<br />
Final Rank Value:  821.9<br />
<br />
Final Rank Value (821.9) = Starting Rank Value (832.7) + Head To Head Adjustments (-10.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.336[<sup>1</sup>](#table2)
- Bounty Collected: 0.335[<sup>2</sup>](#table1)
- Opponent Network: 0.184[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.214<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 832.7
- 400 + ( ( 0.214 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 832.7


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
|           38 |       38 | 2024-07-23 | Intense           | L   | 1.000      | -            | -                | -                | -         |   -21.74 | honda, lukiz, realz1n, remix, zmb  |
|           37 |       69 | 2024-07-22 | Bounty Hunters    | L   | 1.000      | -            | -                | -                | -         |   -10.61 | honda, lukiz, realz1n, remix, zmb  |
|           36 |      124 | 2024-07-20 | Galorys           | W   | 1.000      | 0.371        | 0.021 (0.008)    | 0.592 (0.219)    | 0 (0.000) |    13.15 | honda, lukiz, realz1n, remix, zmb  |
|           35 |      150 | 2024-07-19 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -3.71 | honda, lukiz, realz1n, remix, zmb  |
|           34 |      160 | 2024-07-19 | Case              | W   | 1.000      | 0.143        | 0.028 (0.004)    | 0.751 (0.107)    | 0 (0.000) |    18.58 | honda, lukiz, realz1n, remix, zmb  |
|           33 |      166 | 2024-07-19 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -1.31 | honda, lukiz, realz1n, remix, zmb  |
|           32 |      221 | 2024-07-18 | Solid             | L   | 1.000      | -            | -                | -                | -         |   -15.28 | honda, lukiz, realz1n, remix, zmb  |
|           31 |      278 | 2024-07-17 | BESTIA            | L   | 1.000      | -            | -                | -                | -         |    -8.96 | honda, lukiz, realz1n, remix, zmb  |
|           30 |      288 | 2024-07-17 | Case              | W   | 1.000      | 0.333        | 0.028 (0.009)    | 0.751 (0.250)    | 0 (0.000) |    18.38 | honda, lukiz, realz1n, remix, zmb  |
|           29 |      319 | 2024-07-16 | Patins da Ferrari | W   | 1.000      | 0.371        | 0.009 (0.003)    | 0.317 (0.117)    | 0 (0.000) |    14.58 | honda, lukiz, realz1n, remix, zmb  |
|           28 |      389 | 2024-07-15 | BESTIA            | L   | 1.000      | -            | -                | -                | -         |    -8.09 | honda, lukiz, realz1n, remix, zmb  |
|           27 |      465 | 2024-07-10 | W7M               | L   | 1.000      | -            | -                | -                | -         |   -18.16 | honda, lukiz, realz1n, remix, zmb  |
|           26 |      486 | 2024-07-09 | KRÜ               | W   | 1.000      | 0.333        | 0.029 (0.010)    | 0.477 (0.159)    | 0 (0.000) |    16.98 | honda, lukiz, realz1n, remix, zmb  |
|           25 |      498 | 2024-07-09 | Legacy            | L   | 1.000      | -            | -                | -                | -         |    -5.86 | honda, lukiz, realz1n, remix, zmb  |
|           24 |      533 | 2024-07-05 | MIBR Academy      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.55 | honda, lukiz, realz1n, remix, zmb  |
|           23 |      538 | 2024-07-02 | Bounty Hunters    | L   | 1.000      | -            | -                | -                | -         |   -10.68 | honda, ksloks, realz1n, remix, zmb |
|           22 |      539 | 2024-07-01 | Patins da Ferrari | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.317 (0.106)    | 0 (0.000) |    16.09 | honda, ksloks, realz1n, remix, zmb |
|           21 |      543 | 2024-06-30 | Galorys           | W   | 1.000      | 0.333        | 0.021 (0.007)    | 0.592 (0.197)    | 0 (0.000) |    16.39 | honda, ksloks, realz1n, remix, zmb |
|           20 |      558 | 2024-06-28 | Dusty Roots       | W   | 1.000      | 0.333        | -                | 0.268 (0.089)    | 0 (0.000) |    14.77 | honda, ksloks, realz1n, remix, zmb |
|           19 |      568 | 2024-06-26 | Bounty Hunters    | L   | 1.000      | -            | -                | -                | -         |   -10.79 | honda, ksloks, realz1n, remix, zmb |
|           18 |      776 | 2024-06-10 | ex-Corinthians    | W   | 0.908      | -            | -                | -                | 0 (0.000) |     5.34 | honda, ksloks, realz1n, remix, zmb |
|           17 |      789 | 2024-06-10 | Sharks            | L   | 0.906      | -            | -                | -                | -         |    -5.33 | honda, ksloks, realz1n, remix, zmb |
|           16 |      836 | 2024-06-09 | Patins da Ferrari | L   | 0.899      | -            | -                | -                | -         |   -13.76 | honda, ksloks, realz1n, remix, zmb |
|           15 |      897 | 2024-06-08 | BESTIA            | W   | 0.893      | 0.450        | 0.114 (0.046)    | 0.740 (0.298)    | -         |    22.66 | honda, ksloks, realz1n, remix, zmb |
|           14 |      952 | 2024-06-07 | Case              | W   | 0.887      | 0.450        | 0.028 (0.011)    | 0.751 (0.300)    | -         |    17.16 | honda, ksloks, realz1n, remix, zmb |
|           13 |     1003 | 2024-06-06 | Dusty Roots       | L   | 0.880      | -            | -                | -                | -         |   -13.24 | honda, ksloks, realz1n, remix, zmb |
|           12 |     1023 | 2024-06-06 | Solid             | L   | 0.879      | -            | -                | -                | -         |    -9.35 | honda, ksloks, realz1n, remix, zmb |
|           11 |     1145 | 2024-06-03 | W7M               | L   | 0.862      | -            | -                | -                | -         |   -14.54 | honda, ksloks, realz1n, remix, zmb |
|           10 |     1229 | 2024-05-31 | Hawks             | W   | 0.841      | -            | -                | -                | -         |     4.97 | honda, ksloks, realz1n, remix, zmb |
|            9 |     1278 | 2024-05-29 | Yawara            | W   | 0.829      | -            | -                | -                | -         |     3.98 | honda, ksloks, realz1n, remix, zmb |
|            8 |     1323 | 2024-05-27 | Smoke             | L   | 0.815      | -            | -                | -                | -         |   -16.28 | honda, ksloks, realz1n, remix, zmb |
|            7 |     1679 | 2024-05-15 | Sharks            | L   | 0.735      | -            | -                | -                | -         |    -6.32 | honda, ksloks, realz1n, remix, zmb |
|            6 |     1735 | 2024-05-14 | O PLANO           | W   | 0.728      | -            | -                | -                | -         |     3.80 | honda, ksloks, realz1n, remix, zmb |
|            5 |     1793 | 2024-05-12 | RED Canids        | L   | 0.715      | -            | -                | -                | -         |    -3.44 | honda, ksloks, realz1n, remix, zmb |
|            4 |     1806 | 2024-05-12 | Fluxo             | L   | 0.713      | -            | -                | -                | -         |    -3.78 | honda, ksloks, realz1n, remix, zmb |
|            3 |     1898 | 2024-05-08 | BESTIA            | L   | 0.687      | -            | -                | -                | -         |    -7.83 | honda, JLK, ksloks, realz1n, remix |
|            2 |     1934 | 2024-05-06 | 9z                | L   | 0.673      | -            | -                | -                | -         |    -0.30 | honda, JLK, ksloks, realz1n, remix |
|            1 |     2523 | 2024-04-11 | Galorys           | W   | 0.508      | 0.270        | 0.021 (0.003)    | -                | -         |     9.18 | honda, JLK, ksloks, realz1n, remix |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,901.74)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-03 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-10 |      0.908 | $1,320.00      | $1,199.06       |
| 2024-04-11 |      0.508 | $1,382.00      | $702.68         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
