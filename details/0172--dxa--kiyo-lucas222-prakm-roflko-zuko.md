### Roster Details<br />
Team Name: DXA<br />
Roster: Kiyo, lucas222, prakM, Roflko, Zuko<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [172](../standings_global.md)<br />
Regional Rank: [16]( ../standings_asia.md)<br />
Final Rank Value:  667.3<br />
<br />
Final Rank Value (667.3) = Starting Rank Value (713.2) + Head To Head Adjustments (-45.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.294[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.049[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 713.2
- 400 + ( ( 0.146 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 713.2


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
|           29 |       67 | 2024-07-16 | Bad News Kangaroos | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.107 (0.036)    | 0 (0.000) |    18.68 | Kiyo, lucas222, prakM, Roflko, Zuko    |
|           28 |       70 | 2024-07-16 | Bad News Kangaroos | L   | 1.000      | -            | -                | -                | -         |   -12.57 | Kiyo, lucas222, prakM, Roflko, Zuko    |
|           27 |     1164 | 2024-05-22 | Canon Event        | W   | 0.825      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.76 | cray, Kiyo, lucas222, rocky, Roflko    |
|           26 |     1169 | 2024-05-22 | Canon Event        | W   | 0.825      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.15 | cray, Kiyo, lucas222, rocky, Roflko    |
|           25 |     1424 | 2024-05-15 | KZG                | L   | 0.778      | -            | -                | -                | -         |   -11.26 | Kiyo, lucas222, motion, rocky, Roflko  |
|           24 |     1428 | 2024-05-15 | KZG                | L   | 0.778      | -            | -                | -                | -         |   -12.07 | Kiyo, lucas222, motion, rocky, Roflko  |
|           23 |     1636 | 2024-05-07 | Arcade             | W   | 0.725      | 0.333        | 0.004 (0.001)    | 0.110 (0.027)    | 0 (0.000) |    11.99 | Kiyo, lucas222, motion, rocky, Roflko  |
|           22 |     1638 | 2024-05-07 | Arcade             | L   | 0.725      | -            | -                | -                | -         |   -11.02 | Kiyo, lucas222, motion, rocky, Roflko  |
|           21 |     2106 | 2024-04-18 | Mindfreak          | L   | 0.598      | -            | -                | -                | -         |    -7.39 | Kiyo, lucas222, motion, rocky, Roflko  |
|           20 |     2145 | 2024-04-17 | Blitz              | W   | 0.592      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.26 | Kiyo, lucas222, motion, rocky, Roflko  |
|           19 |     2304 | 2024-04-10 | Mindfreak          | L   | 0.545      | -            | -                | -                | -         |    -7.19 | Kiyo, lucas222, motion, rocky, Roflko  |
|           18 |     2311 | 2024-04-10 | Mindfreak          | L   | 0.545      | -            | -                | -                | -         |    -7.54 | Kiyo, lucas222, motion, rocky, Roflko  |
|           17 |     2537 | 2024-04-03 | Bad News Kangaroos | L   | 0.498      | -            | -                | -                | -         |    -4.65 | Kiyo, lucas222, motion, rocky, Roflko  |
|           16 |     2541 | 2024-04-03 | Bad News Kangaroos | L   | 0.498      | -            | -                | -                | -         |    -4.83 | Kiyo, lucas222, motion, rocky, Roflko  |
|           15 |     2660 | 2024-03-27 | RKON               | L   | 0.452      | -            | -                | -                | -         |   -10.39 | Kiyo, lucas222, motion, rocky, Roflko  |
|           14 |     2665 | 2024-03-27 | RKON               | W   | 0.452      | 0.333        | 0.000 (0.000)    | 0.053 (0.008)    | 0 (0.000) |     3.86 | Kiyo, lucas222, motion, rocky, Roflko  |
|           13 |     2711 | 2024-03-23 | Bad News Kangaroos | L   | 0.425      | -            | -                | -                | -         |    -4.29 | gump, Kiyo, lucas222, motion, Roflko   |
|           12 |     2713 | 2024-03-23 | KZG                | W   | 0.424      | 0.315        | 0.009 (0.001)    | 0.108 (0.014)    | 1 (0.424) |     6.60 | gump, Kiyo, lucas222, motion, Roflko   |
|           11 |     2932 | 2024-03-13 | Vantage            | W   | 0.359      | 0.333        | 0.003 (0.000)    | 0.113 (0.013)    | 0 (0.000) |     5.42 | Kiyo, lucas222, motion, rocky, Roflko  |
|           10 |     2937 | 2024-03-13 | Vantage            | L   | 0.358      | -            | -                | -                | -         |    -6.00 | Kiyo, lucas222, motion, rocky, Roflko  |
|            9 |     3110 | 2024-03-06 | FlyQuest           | L   | 0.312      | -            | -                | -                | -         |    -0.30 | Kiyo, lucas222, motion, rocky, Roflko  |
|            8 |     3112 | 2024-03-06 | FlyQuest           | L   | 0.312      | -            | -                | -                | -         |    -0.30 | Kiyo, lucas222, motion, rocky, Roflko  |
|            7 |     3413 | 2024-02-21 | Rooster            | L   | 0.218      | -            | -                | -                | -         |    -2.32 | Falcon, Kiyo, lucas222, motion, Roflko |
|            6 |     3418 | 2024-02-21 | Rooster            | L   | 0.218      | -            | -                | -                | -         |    -2.36 | Falcon, Kiyo, lucas222, motion, Roflko |
|            5 |     3565 | 2024-02-15 | Vantage            | L   | 0.179      | -            | -                | -                | -         |    -4.37 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            4 |     3571 | 2024-02-14 | sunday school      | L   | 0.177      | -            | -                | -                | -         |    -3.20 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            3 |     3633 | 2024-02-13 | Arcade             | W   | 0.165      | 0.143        | 0.004 (0.000)    | 0.110 (0.003)    | 0 (0.000) |     2.41 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            2 |     3637 | 2024-02-13 | Underground        | W   | 0.164      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.77 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            1 |     3958 | 2024-01-24 | Mindfreak          | L   | 0.031      | -            | -                | -                | -         |    -0.76 | Falcon, helix, Kiyo, lucas222, Roflko  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($986.42)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.945 | $300.00        | $283.38         |
| 2024-03-23 |      0.425 | $1,654.00      | $703.04         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
