### Roster Details<br />
Team Name: DXA<br />
Roster: cray, Kiyo, lucas222, rocky, Roflko<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [171](../standings_global.md)<br />
Regional Rank: [18]( ../standings_asia.md)<br />
Final Rank Value:  652.2<br />
<br />
Final Rank Value (652.2) = Starting Rank Value (706.1) + Head To Head Adjustments (-53.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.054[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 706.1
- 400 + ( ( 0.145 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 706.1


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
|           29 |     1000 | 2024-05-22 | Canon Event        | W   | 0.865      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.14 | cray, Kiyo, lucas222, rocky, Roflko    |
|           28 |     1005 | 2024-05-22 | Canon Event        | W   | 0.864      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.59 | cray, Kiyo, lucas222, rocky, Roflko    |
|           27 |     1260 | 2024-05-15 | KZG                | L   | 0.818      | -            | -                | -                | -         |   -11.72 | Kiyo, lucas222, motion, rocky, Roflko  |
|           26 |     1264 | 2024-05-15 | KZG                | L   | 0.818      | -            | -                | -                | -         |   -12.60 | Kiyo, lucas222, motion, rocky, Roflko  |
|           25 |     1472 | 2024-05-07 | Arcade             | W   | 0.765      | 0.333        | 0.005 (0.001)    | 0.123 (0.031)    | 0 (0.000) |    12.85 | Kiyo, lucas222, motion, rocky, Roflko  |
|           24 |     1474 | 2024-05-07 | Arcade             | L   | 0.765      | -            | -                | -                | -         |   -11.39 | Kiyo, lucas222, motion, rocky, Roflko  |
|           23 |     1942 | 2024-04-18 | Mindfreak          | L   | 0.638      | -            | -                | -                | -         |    -7.45 | Kiyo, lucas222, motion, rocky, Roflko  |
|           22 |     1981 | 2024-04-17 | Blitz              | W   | 0.631      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.62 | Kiyo, lucas222, motion, rocky, Roflko  |
|           21 |     2140 | 2024-04-10 | Mindfreak          | L   | 0.585      | -            | -                | -                | -         |    -7.31 | Kiyo, lucas222, motion, rocky, Roflko  |
|           20 |     2147 | 2024-04-10 | Mindfreak          | L   | 0.584      | -            | -                | -                | -         |    -7.68 | Kiyo, lucas222, motion, rocky, Roflko  |
|           19 |     2373 | 2024-04-03 | Bad News Kangaroos | L   | 0.538      | -            | -                | -                | -         |    -4.65 | Kiyo, lucas222, motion, rocky, Roflko  |
|           18 |     2377 | 2024-04-03 | Bad News Kangaroos | L   | 0.538      | -            | -                | -                | -         |    -4.83 | Kiyo, lucas222, motion, rocky, Roflko  |
|           17 |     2496 | 2024-03-27 | RKON               | L   | 0.492      | -            | -                | -                | -         |   -11.15 | Kiyo, lucas222, motion, rocky, Roflko  |
|           16 |     2501 | 2024-03-27 | RKON               | W   | 0.491      | 0.333        | 0.000 (0.000)    | 0.059 (0.010)    | 0 (0.000) |     4.35 | Kiyo, lucas222, motion, rocky, Roflko  |
|           15 |     2547 | 2024-03-23 | Bad News Kangaroos | L   | 0.465      | -            | -                | -                | -         |    -4.35 | gump, Kiyo, lucas222, motion, Roflko   |
|           14 |     2549 | 2024-03-23 | KZG                | W   | 0.464      | 0.315        | 0.009 (0.001)    | 0.119 (0.017)    | 1 (0.464) |     7.26 | gump, Kiyo, lucas222, motion, Roflko   |
|           13 |     2768 | 2024-03-13 | Vantage            | W   | 0.398      | 0.333        | 0.003 (0.000)    | 0.127 (0.017)    | 0 (0.000) |     6.11 | Kiyo, lucas222, motion, rocky, Roflko  |
|           12 |     2773 | 2024-03-13 | Vantage            | L   | 0.398      | -            | -                | -                | -         |    -6.57 | Kiyo, lucas222, motion, rocky, Roflko  |
|           11 |     2946 | 2024-03-06 | FlyQuest           | L   | 0.351      | -            | -                | -                | -         |    -0.30 | Kiyo, lucas222, motion, rocky, Roflko  |
|           10 |     2948 | 2024-03-06 | FlyQuest           | L   | 0.351      | -            | -                | -                | -         |    -0.30 | Kiyo, lucas222, motion, rocky, Roflko  |
|            9 |     3249 | 2024-02-21 | Rooster            | L   | 0.258      | -            | -                | -                | -         |    -2.70 | Falcon, Kiyo, lucas222, motion, Roflko |
|            8 |     3254 | 2024-02-21 | Rooster            | L   | 0.258      | -            | -                | -                | -         |    -2.75 | Falcon, Kiyo, lucas222, motion, Roflko |
|            7 |     3401 | 2024-02-15 | Vantage            | L   | 0.218      | -            | -                | -                | -         |    -5.29 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            6 |     3407 | 2024-02-14 | sunday school      | L   | 0.217      | -            | -                | -                | -         |    -3.87 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            5 |     3469 | 2024-02-13 | Arcade             | W   | 0.205      | 0.143        | 0.005 (0.000)    | 0.123 (0.004)    | 0 (0.000) |     3.03 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            4 |     3473 | 2024-02-13 | Underground        | W   | 0.204      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.99 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            3 |     3794 | 2024-01-24 | Mindfreak          | L   | 0.071      | -            | -                | -                | -         |    -1.69 | Falcon, helix, Kiyo, lucas222, Roflko  |
|            2 |     4135 | 2024-01-16 | sunday school      | L   | 0.017      | -            | -                | -                | -         |    -0.43 | Falcon, helix, Kiyo, lucas222, Roflko  |
|            1 |     4163 | 2024-01-15 | Vantage            | W   | 0.011      | 0.143        | 0.003 (0.000)    | 0.127 (0.000)    | 0 (0.000) |     0.16 | Falcon, helix, Kiyo, lucas222, Roflko  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,063.82)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.984 | $300.00        | $295.27         |
| 2024-03-23 |      0.465 | $1,654.00      | $768.55         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
