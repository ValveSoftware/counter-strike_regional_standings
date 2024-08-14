### Roster Details<br />
Team Name: DXA<br />
Roster: Kiyo, lucas222, prakM, Roflko, Zuko<br />
Global Rank: [181](../standings_global.md)<br />
<br />
Region: [Asia]( ../standings_asia.md)<br />
Regional Rank: [19]( ../standings_asia.md)<br />
<br />
Final Rank Value:  635.8<br />
<br />
Final Rank Value (635.8) = Starting Rank Value (676.8) + Head To Head Adjustments (-41.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.269[<sup>1</sup>](#table2)
- Bounty Collected: 0.237[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.027[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 676.8
- 400 + ( ( 0.140 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 676.8


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
|           34 |       52 | 2024-08-13 | FlyQuest           | L   | 1.000      | -            | -                | -                | -         |    -2.11 | Kiyo, lucas222, prakM, Roflko, Zuko    |
|           33 |       60 | 2024-08-13 | FlyQuest           | L   | 1.000      | -            | -                | -                | -         |    -2.15 | Kiyo, lucas222, prakM, Roflko, Zuko    |
|           32 |      246 | 2024-08-07 | Mindfreak          | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.216 (0.072)    | 0 (0.000) |    21.01 | Kiyo, lucas222, prakM, Roflko, Zuko    |
|           31 |      251 | 2024-08-07 | Mindfreak          | L   | 1.000      | -            | -                | -                | -         |   -10.08 | Kiyo, lucas222, prakM, Roflko, Zuko    |
|           30 |      511 | 2024-07-31 | Mindfreak          | L   | 1.000      | -            | -                | -                | -         |   -10.90 | Kiyo, lucas222, prakM, Roflko, Zuko    |
|           29 |      553 | 2024-07-30 | Fresh Food People  | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.51 | Kiyo, lucas222, prakM, Roflko, Zuko    |
|           28 |      774 | 2024-07-23 | KZG                | L   | 1.000      | -            | -                | -                | -         |   -14.32 | Kiyo, lucas222, prakM, Roflko, Zuko    |
|           27 |      779 | 2024-07-23 | KZG                | L   | 1.000      | -            | -                | -                | -         |   -15.64 | Kiyo, lucas222, prakM, Roflko, Zuko    |
|           26 |      959 | 2024-07-18 | Rooster            | L   | 1.000      | -            | -                | -                | -         |    -9.22 | Kiyo, lucas222, rocky, Roflko, Zuko    |
|           25 |      964 | 2024-07-18 | Rooster            | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.310 (0.103)    | 0 (0.000) |    22.78 | Kiyo, lucas222, rocky, Roflko, Zuko    |
|           24 |     1078 | 2024-07-16 | Housebets          | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.178 (0.059)    | 0 (0.000) |    17.96 | Kiyo, lucas222, prakM, Roflko, Zuko    |
|           23 |     1081 | 2024-07-16 | Housebets          | L   | 1.000      | -            | -                | -                | -         |   -13.35 | Kiyo, lucas222, prakM, Roflko, Zuko    |
|           22 |     2175 | 2024-05-22 | Canon Event        | W   | 0.637      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.58 | cray, Kiyo, lucas222, rocky, Roflko    |
|           21 |     2180 | 2024-05-22 | Canon Event        | W   | 0.637      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.84 | cray, Kiyo, lucas222, rocky, Roflko    |
|           20 |     2435 | 2024-05-15 | KZG                | L   | 0.591      | -            | -                | -                | -         |    -8.80 | Kiyo, lucas222, motion, rocky, Roflko  |
|           19 |     2439 | 2024-05-15 | KZG                | L   | 0.590      | -            | -                | -                | -         |    -9.28 | Kiyo, lucas222, motion, rocky, Roflko  |
|           18 |     2647 | 2024-05-07 | Arcade             | W   | 0.538      | 0.333        | 0.002 (0.000)    | 0.190 (0.034)    | 0 (0.000) |    10.03 | Kiyo, lucas222, motion, rocky, Roflko  |
|           17 |     2649 | 2024-05-07 | Arcade             | L   | 0.537      | -            | -                | -                | -         |    -7.01 | Kiyo, lucas222, motion, rocky, Roflko  |
|           16 |     3117 | 2024-04-18 | Mindfreak          | L   | 0.410      | -            | -                | -                | -         |    -5.90 | Kiyo, lucas222, motion, rocky, Roflko  |
|           15 |     3156 | 2024-04-17 | Blitz              | W   | 0.404      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     2.48 | Kiyo, lucas222, motion, rocky, Roflko  |
|           14 |     3315 | 2024-04-10 | Mindfreak          | L   | 0.357      | -            | -                | -                | -         |    -5.54 | Kiyo, lucas222, motion, rocky, Roflko  |
|           13 |     3322 | 2024-04-10 | Mindfreak          | L   | 0.357      | -            | -                | -                | -         |    -5.71 | Kiyo, lucas222, motion, rocky, Roflko  |
|           12 |     3548 | 2024-04-03 | Bad News Kangaroos | L   | 0.310      | -            | -                | -                | -         |    -3.93 | Kiyo, lucas222, motion, rocky, Roflko  |
|           11 |     3552 | 2024-04-03 | Bad News Kangaroos | L   | 0.310      | -            | -                | -                | -         |    -4.03 | Kiyo, lucas222, motion, rocky, Roflko  |
|           10 |     3671 | 2024-03-27 | RKON               | L   | 0.264      | -            | -                | -                | -         |    -6.09 | Kiyo, lucas222, motion, rocky, Roflko  |
|            9 |     3676 | 2024-03-27 | RKON               | W   | 0.264      | 0.333        | -                | 0.021 (0.002)    | 0 (0.000) |     2.25 | Kiyo, lucas222, motion, rocky, Roflko  |
|            8 |     3722 | 2024-03-23 | Bad News Kangaroos | L   | 0.237      | -            | -                | -                | -         |    -3.17 | gump, Kiyo, lucas222, motion, Roflko   |
|            7 |     3724 | 2024-03-23 | KZG                | W   | 0.237      | 0.315        | 0.005 (0.000)    | 0.145 (0.011)    | 1 (0.237) |     3.74 | gump, Kiyo, lucas222, motion, Roflko   |
|            6 |     3943 | 2024-03-13 | Vantage            | W   | 0.171      | 0.333        | 0.002 (0.000)    | 0.049 (0.003)    | -         |     2.44 | Kiyo, lucas222, motion, rocky, Roflko  |
|            5 |     3948 | 2024-03-13 | Vantage            | L   | 0.171      | -            | -                | -                | -         |    -2.97 | Kiyo, lucas222, motion, rocky, Roflko  |
|            4 |     4121 | 2024-03-06 | FlyQuest           | L   | 0.124      | -            | -                | -                | -         |    -0.37 | Kiyo, lucas222, motion, rocky, Roflko  |
|            3 |     4123 | 2024-03-06 | FlyQuest           | L   | 0.124      | -            | -                | -                | -         |    -0.37 | Kiyo, lucas222, motion, rocky, Roflko  |
|            2 |     4424 | 2024-02-21 | Rooster            | L   | 0.031      | -            | -                | -                | -         |    -0.38 | Falcon, Kiyo, lucas222, motion, Roflko |
|            1 |     4429 | 2024-02-21 | Rooster            | L   | 0.031      | -            | -                | -                | -         |    -0.38 | Falcon, Kiyo, lucas222, motion, Roflko |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($619.54)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.757 | $300.00        | $227.06         |
| 2024-03-23 |      0.237 | $1,654.00      | $392.49         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
