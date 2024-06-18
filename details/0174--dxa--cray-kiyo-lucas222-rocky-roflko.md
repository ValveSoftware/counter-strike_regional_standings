### Roster Details<br />
Team Name: DXA<br />
Roster: cray, Kiyo, lucas222, rocky, Roflko<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [174](../standings_global.md)<br />
Regional Rank: [20]( ../standings_asia.md)<br />
Final Rank Value:  634.7<br />
<br />
Final Rank Value (634.7) = Starting Rank Value (707.8) + Head To Head Adjustments (-73.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.298[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.065[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 707.8
- 400 + ( ( 0.152 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 707.8


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
|           32 |      866 | 2024-05-22 | Canon Event        | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.09 | cray, Kiyo, lucas222, rocky, Roflko    |
|           31 |      871 | 2024-05-22 | Canon Event        | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.66 | cray, Kiyo, lucas222, rocky, Roflko    |
|           30 |     1126 | 2024-05-15 | KZG                | L   | 0.974      | -            | -                | -                | -         |   -13.87 | Kiyo, lucas222, motion, rocky, Roflko  |
|           29 |     1130 | 2024-05-15 | KZG                | L   | 0.973      | -            | -                | -                | -         |   -15.11 | Kiyo, lucas222, motion, rocky, Roflko  |
|           28 |     1338 | 2024-05-07 | Arcade             | W   | 0.921      | 0.333        | 0.005 (0.002)    | 0.157 (0.048)    | 0 (0.000) |    15.91 | Kiyo, lucas222, motion, rocky, Roflko  |
|           27 |     1340 | 2024-05-07 | Arcade             | L   | 0.920      | -            | -                | -                | -         |   -13.06 | Kiyo, lucas222, motion, rocky, Roflko  |
|           26 |     1808 | 2024-04-18 | Mindfreak          | L   | 0.793      | -            | -                | -                | -         |    -8.55 | Kiyo, lucas222, motion, rocky, Roflko  |
|           25 |     1847 | 2024-04-17 | Blitz              | W   | 0.787      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.74 | Kiyo, lucas222, motion, rocky, Roflko  |
|           24 |     2006 | 2024-04-10 | Mindfreak          | L   | 0.740      | -            | -                | -                | -         |    -8.64 | Kiyo, lucas222, motion, rocky, Roflko  |
|           23 |     2013 | 2024-04-10 | Mindfreak          | L   | 0.740      | -            | -                | -                | -         |    -9.20 | Kiyo, lucas222, motion, rocky, Roflko  |
|           22 |     2239 | 2024-04-03 | Bad News Kangaroos | L   | 0.693      | -            | -                | -                | -         |    -5.28 | Kiyo, lucas222, motion, rocky, Roflko  |
|           21 |     2243 | 2024-04-03 | Bad News Kangaroos | L   | 0.693      | -            | -                | -                | -         |    -5.52 | Kiyo, lucas222, motion, rocky, Roflko  |
|           20 |     2363 | 2024-03-27 | RKON               | L   | 0.647      | -            | -                | -                | -         |   -14.31 | Kiyo, lucas222, motion, rocky, Roflko  |
|           19 |     2368 | 2024-03-27 | RKON               | W   | 0.647      | 0.333        | 0.000 (0.000)    | 0.074 (0.016)    | 0 (0.000) |     6.05 | Kiyo, lucas222, motion, rocky, Roflko  |
|           18 |     2414 | 2024-03-23 | Bad News Kangaroos | L   | 0.620      | -            | -                | -                | -         |    -5.17 | gump, Kiyo, lucas222, motion, Roflko   |
|           17 |     2416 | 2024-03-23 | KZG                | W   | 0.620      | 0.315        | 0.009 (0.002)    | 0.142 (0.028)    | 1 (0.620) |     9.45 | gump, Kiyo, lucas222, motion, Roflko   |
|           16 |     2635 | 2024-03-13 | Vantage            | W   | 0.554      | 0.333        | 0.003 (0.000)    | 0.166 (0.031)    | 0 (0.000) |     8.55 | Kiyo, lucas222, motion, rocky, Roflko  |
|           15 |     2640 | 2024-03-13 | Vantage            | L   | 0.554      | -            | -                | -                | -         |    -9.10 | Kiyo, lucas222, motion, rocky, Roflko  |
|           14 |     2813 | 2024-03-06 | FlyQuest           | L   | 0.507      | -            | -                | -                | -         |    -0.33 | Kiyo, lucas222, motion, rocky, Roflko  |
|           13 |     2815 | 2024-03-06 | FlyQuest           | L   | 0.507      | -            | -                | -                | -         |    -0.33 | Kiyo, lucas222, motion, rocky, Roflko  |
|           12 |     3116 | 2024-02-21 | Rooster            | L   | 0.414      | -            | -                | -                | -         |    -4.25 | Falcon, Kiyo, lucas222, motion, Roflko |
|           11 |     3121 | 2024-02-21 | Rooster            | L   | 0.414      | -            | -                | -                | -         |    -4.39 | Falcon, Kiyo, lucas222, motion, Roflko |
|           10 |     3268 | 2024-02-15 | Vantage            | L   | 0.374      | -            | -                | -                | -         |    -8.98 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            9 |     3274 | 2024-02-14 | sunday school      | L   | 0.373      | -            | -                | -                | -         |    -6.63 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            8 |     3336 | 2024-02-13 | Arcade             | W   | 0.361      | 0.143        | 0.005 (0.000)    | 0.157 (0.008)    | 0 (0.000) |     5.35 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            7 |     3340 | 2024-02-13 | Underground        | W   | 0.360      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.78 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            6 |     3661 | 2024-01-24 | Mindfreak          | L   | 0.227      | -            | -                | -                | -         |    -5.05 | Falcon, helix, Kiyo, lucas222, Roflko  |
|            5 |     4002 | 2024-01-16 | sunday school      | L   | 0.173      | -            | -                | -                | -         |    -4.22 | Falcon, helix, Kiyo, lucas222, Roflko  |
|            4 |     4030 | 2024-01-15 | Vantage            | W   | 0.167      | 0.143        | 0.003 (0.000)    | 0.166 (0.004)    | 0 (0.000) |     2.42 | Falcon, helix, Kiyo, lucas222, Roflko  |
|            3 |     4091 | 2024-01-13 | iM Apartments      | W   | 0.153      | -            | -                | -                | -         |     0.73 | Falcon, helix, Kiyo, lucas222, Roflko  |
|            2 |     4093 | 2024-01-13 | RKON               | L   | 0.153      | -            | -                | -                | -         |    -3.58 | Falcon, helix, Kiyo, lucas222, Roflko  |
|            1 |     4095 | 2024-01-13 | Blitz              | W   | 0.153      | -            | -                | -                | -         |     0.73 | Falcon, helix, Kiyo, lucas222, Roflko  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,326.04)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $300.00        | $300.00         |
| 2024-03-23 |      0.620 | $1,654.00      | $1,026.04       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
