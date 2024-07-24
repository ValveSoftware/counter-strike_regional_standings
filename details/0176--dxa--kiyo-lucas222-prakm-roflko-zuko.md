### Roster Details<br />
Team Name: DXA<br />
Roster: Kiyo, lucas222, prakM, Roflko, Zuko<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [176](../standings_global.md)<br />
Regional Rank: [17]( ../standings_asia.md)<br />
Final Rank Value:  643.1<br />
<br />
Final Rank Value (643.1) = Starting Rank Value (701.9) + Head To Head Adjustments (-58.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.287[<sup>1</sup>](#table2)
- Bounty Collected: 0.244[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.045[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 701.9
- 400 + ( ( 0.149 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 701.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |       51 | 2024-07-23 | KZG                | L   | 1.000      | -            | -                | -                | -         |   -14.36 | Kiyo, lucas222, prakM, Roflko, Zuko    |
|           31 |       56 | 2024-07-23 | KZG                | L   | 1.000      | -            | -                | -                | -         |   -15.68 | Kiyo, lucas222, prakM, Roflko, Zuko    |
|           30 |      236 | 2024-07-18 | Rooster            | L   | 1.000      | -            | -                | -                | -         |    -7.66 | Kiyo, lucas222, rocky, Roflko, Zuko    |
|           29 |      241 | 2024-07-18 | Rooster            | W   | 1.000      | 0.333        | 0.014 (0.005)    | 0.298 (0.099)    | 0 (0.000) |    24.40 | Kiyo, lucas222, rocky, Roflko, Zuko    |
|           28 |      355 | 2024-07-16 | Bad News Kangaroos | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.154 (0.051)    | 0 (0.000) |    18.35 | Kiyo, lucas222, prakM, Roflko, Zuko    |
|           27 |      358 | 2024-07-16 | Bad News Kangaroos | L   | 1.000      | -            | -                | -                | -         |   -12.93 | Kiyo, lucas222, prakM, Roflko, Zuko    |
|           26 |     1452 | 2024-05-22 | Canon Event        | W   | 0.778      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.47 | cray, Kiyo, lucas222, rocky, Roflko    |
|           25 |     1457 | 2024-05-22 | Canon Event        | W   | 0.777      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.83 | cray, Kiyo, lucas222, rocky, Roflko    |
|           24 |     1712 | 2024-05-15 | KZG                | L   | 0.731      | -            | -                | -                | -         |   -10.52 | Kiyo, lucas222, motion, rocky, Roflko  |
|           23 |     1716 | 2024-05-15 | KZG                | L   | 0.731      | -            | -                | -                | -         |   -11.22 | Kiyo, lucas222, motion, rocky, Roflko  |
|           22 |     1924 | 2024-05-07 | Arcade             | W   | 0.678      | 0.333        | 0.004 (0.001)    | 0.159 (0.036)    | 0 (0.000) |    11.20 | Kiyo, lucas222, motion, rocky, Roflko  |
|           21 |     1926 | 2024-05-07 | Arcade             | L   | 0.678      | -            | -                | -                | -         |   -10.34 | Kiyo, lucas222, motion, rocky, Roflko  |
|           20 |     2394 | 2024-04-18 | Mindfreak          | L   | 0.551      | -            | -                | -                | -         |    -7.75 | Kiyo, lucas222, motion, rocky, Roflko  |
|           19 |     2433 | 2024-04-17 | Blitz              | W   | 0.544      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.16 | Kiyo, lucas222, motion, rocky, Roflko  |
|           18 |     2592 | 2024-04-10 | Mindfreak          | L   | 0.498      | -            | -                | -                | -         |    -7.25 | Kiyo, lucas222, motion, rocky, Roflko  |
|           17 |     2599 | 2024-04-10 | Mindfreak          | L   | 0.497      | -            | -                | -                | -         |    -7.58 | Kiyo, lucas222, motion, rocky, Roflko  |
|           16 |     2825 | 2024-04-03 | Bad News Kangaroos | L   | 0.451      | -            | -                | -                | -         |    -4.78 | Kiyo, lucas222, motion, rocky, Roflko  |
|           15 |     2829 | 2024-04-03 | Bad News Kangaroos | L   | 0.451      | -            | -                | -                | -         |    -4.95 | Kiyo, lucas222, motion, rocky, Roflko  |
|           14 |     2948 | 2024-03-27 | RKON               | L   | 0.405      | -            | -                | -                | -         |    -9.33 | Kiyo, lucas222, motion, rocky, Roflko  |
|           13 |     2953 | 2024-03-27 | RKON               | W   | 0.404      | 0.333        | 0.000 (0.000)    | 0.045 (0.006)    | 0 (0.000) |     3.44 | Kiyo, lucas222, motion, rocky, Roflko  |
|           12 |     2999 | 2024-03-23 | Bad News Kangaroos | L   | 0.378      | -            | -                | -                | -         |    -4.31 | gump, Kiyo, lucas222, motion, Roflko   |
|           11 |     3001 | 2024-03-23 | KZG                | W   | 0.377      | 0.315        | 0.007 (0.001)    | 0.130 (0.015)    | 1 (0.377) |     5.97 | gump, Kiyo, lucas222, motion, Roflko   |
|           10 |     3220 | 2024-03-13 | Vantage            | W   | 0.311      | 0.333        | 0.003 (0.000)    | 0.096 (0.010)    | 0 (0.000) |     4.53 | Kiyo, lucas222, motion, rocky, Roflko  |
|            9 |     3225 | 2024-03-13 | Vantage            | L   | 0.311      | -            | -                | -                | -         |    -5.38 | Kiyo, lucas222, motion, rocky, Roflko  |
|            8 |     3398 | 2024-03-06 | FlyQuest           | L   | 0.265      | -            | -                | -                | -         |    -0.38 | Kiyo, lucas222, motion, rocky, Roflko  |
|            7 |     3400 | 2024-03-06 | FlyQuest           | L   | 0.264      | -            | -                | -                | -         |    -0.38 | Kiyo, lucas222, motion, rocky, Roflko  |
|            6 |     3701 | 2024-02-21 | Rooster            | L   | 0.171      | -            | -                | -                | -         |    -1.96 | Falcon, Kiyo, lucas222, motion, Roflko |
|            5 |     3706 | 2024-02-21 | Rooster            | L   | 0.171      | -            | -                | -                | -         |    -1.98 | Falcon, Kiyo, lucas222, motion, Roflko |
|            4 |     3853 | 2024-02-15 | Vantage            | L   | 0.132      | -            | -                | -                | -         |    -3.21 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            3 |     3859 | 2024-02-14 | sunday school      | L   | 0.130      | -            | -                | -                | -         |    -2.40 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            2 |     3921 | 2024-02-13 | MAKING HISTORY     | W   | 0.118      | 0.143        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.58 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            1 |     3925 | 2024-02-13 | Underground        | W   | 0.117      | -            | -                | -                | -         |     0.57 | HUGH, Kiyo, lucas222, motion, Roflko   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($894.14)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.897 | $300.00        | $269.22         |
| 2024-03-23 |      0.378 | $1,654.00      | $624.93         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
