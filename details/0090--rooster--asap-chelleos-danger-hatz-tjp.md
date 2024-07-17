### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, dangeR, Hatz, TjP<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [90](../standings_global.md)<br />
Regional Rank: [5]( ../standings_asia.md)<br />
Final Rank Value:  936.4<br />
<br />
Final Rank Value (936.4) = Starting Rank Value (824.9) + Head To Head Adjustments (111.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.360[<sup>1</sup>](#table2)
- Bounty Collected: 0.308[<sup>2</sup>](#table1)
- Opponent Network: 0.047[<sup>2</sup>](#table1)
- LAN Wins: 0.076[<sup>2</sup>](#table1)

The average of these factors is 0.198<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 824.9
- 400 + ( ( 0.198 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 824.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |       68 | 2024-07-16 | Mindfreak          | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.218 (0.073)    | 0 (0.000) |     9.67 | asap, chelleos, dangeR, Hatz, TjP   |
|           42 |       71 | 2024-07-16 | Mindfreak          | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.218 (0.073)    | 0 (0.000) |    10.45 | asap, chelleos, dangeR, Hatz, TjP   |
|           41 |      579 | 2024-06-09 | FlyQuest           | L   | 0.945      | -            | -                | -                | -         |    -2.63 | asap, chelleos, dangeR, nettik, TjP |
|           40 |      687 | 2024-06-07 | FlyQuest           | W   | 0.932      | 0.333        | 0.116 (0.036)    | 0.388 (0.120)    | 0 (0.000) |    27.09 | asap, chelleos, dangeR, nettik, TjP |
|           39 |      761 | 2024-06-06 | Bad News Kangaroos | W   | 0.925      | 0.333        | 0.004 (0.001)    | 0.107 (0.033)    | 0 (0.000) |     8.82 | asap, chelleos, dangeR, nettik, TjP |
|           38 |     1167 | 2024-05-22 | Vantage            | W   | 0.825      | 0.333        | -                | 0.113 (0.031)    | 0 (0.000) |     6.45 | asap, chelleos, dangeR, nettik, TjP |
|           37 |     1171 | 2024-05-22 | Vantage            | W   | 0.825      | 0.333        | -                | 0.113 (0.031)    | 0 (0.000) |     6.82 | asap, chelleos, dangeR, nettik, TjP |
|           36 |     1427 | 2024-05-15 | Canon Event        | W   | 0.778      | -            | -                | -                | 0 (0.000) |     2.53 | asap, chelleos, dangeR, nettik, TjP |
|           35 |     1430 | 2024-05-15 | Canon Event        | W   | 0.778      | -            | -                | -                | 0 (0.000) |     2.60 | asap, chelleos, dangeR, nettik, TjP |
|           34 |     1617 | 2024-05-08 | KZG                | W   | 0.732      | 0.333        | 0.009 (0.002)    | 0.108 (0.026)    | 0 (0.000) |     5.90 | asap, chelleos, dangeR, nettik, TjP |
|           33 |     1619 | 2024-05-08 | KZG                | W   | 0.731      | 0.333        | 0.009 (0.002)    | 0.108 (0.026)    | -         |     6.21 | asap, chelleos, dangeR, nettik, TjP |
|           32 |     1850 | 2024-04-27 | MIBR               | L   | 0.657      | -            | -                | -                | -         |    -0.35 | asap, chelleos, dangeR, nettik, TjP |
|           31 |     1871 | 2024-04-26 | KZG                | W   | 0.652      | 0.500        | 0.009 (0.003)    | 0.108 (0.035)    | 1 (0.652) |     5.80 | asap, chelleos, dangeR, nettik, TjP |
|           30 |     1874 | 2024-04-25 | Rebels             | L   | 0.650      | -            | -                | -                | -         |    -5.07 | asap, chelleos, dangeR, nettik, TjP |
|           29 |     2005 | 2024-04-20 | Bad News Kangaroos | L   | 0.611      | -            | -                | -                | -         |    -9.84 | asap, chelleos, dangeR, nettik, TjP |
|           28 |     2047 | 2024-04-19 | FlyQuest           | L   | 0.606      | -            | -                | -                | -         |    -1.25 | asap, chelleos, dangeR, nettik, TjP |
|           27 |     2053 | 2024-04-19 | Bad News Kangaroos | W   | 0.604      | 0.143        | 0.028 (0.002)    | -                | -         |     9.27 | asap, chelleos, dangeR, nettik, TjP |
|           26 |     2128 | 2024-04-17 | Arcade             | W   | 0.592      | -            | -                | -                | -         |     5.14 | asap, chelleos, dangeR, nettik, TjP |
|           25 |     2143 | 2024-04-17 | Canon Event        | W   | 0.592      | -            | -                | -                | -         |     2.19 | asap, chelleos, dangeR, nettik, TjP |
|           24 |     2302 | 2024-04-10 | Bad News Kangaroos | L   | 0.545      | -            | -                | -                | -         |    -8.80 | asap, chelleos, dangeR, nettik, TjP |
|           23 |     2312 | 2024-04-10 | Bad News Kangaroos | W   | 0.545      | 0.333        | 0.028 (0.005)    | 0.134 (0.024)    | -         |     8.54 | asap, chelleos, dangeR, nettik, TjP |
|           22 |     2664 | 2024-03-27 | Arcade             | W   | 0.452      | -            | -                | -                | -         |     4.21 | asap, chelleos, dangeR, nettik, TjP |
|           21 |     2667 | 2024-03-27 | Arcade             | W   | 0.452      | -            | -                | -                | -         |     4.35 | asap, chelleos, dangeR, nettik, TjP |
|           20 |     2934 | 2024-03-13 | FlyQuest           | L   | 0.358      | -            | -                | -                | -         |    -0.71 | asap, chelleos, dangeR, nettik, TjP |
|           19 |     2942 | 2024-03-13 | FlyQuest           | L   | 0.358      | -            | -                | -                | -         |    -0.71 | asap, chelleos, dangeR, nettik, TjP |
|           18 |     3108 | 2024-03-06 | Mindfreak          | W   | 0.312      | -            | -                | -                | -         |     3.34 | asap, chelleos, dangeR, nettik, TjP |
|           17 |     3115 | 2024-03-06 | Mindfreak          | W   | 0.312      | -            | -                | -                | -         |     3.43 | asap, chelleos, dangeR, nettik, TjP |
|           16 |     3363 | 2024-02-23 | FlyQuest           | L   | 0.232      | -            | -                | -                | -         |    -0.44 | asap, chelleos, dangeR, nettik, TjP |
|           15 |     3365 | 2024-02-22 | Bad News Kangaroos | W   | 0.231      | 0.143        | 0.028 (0.001)    | -                | -         |     3.68 | asap, chelleos, dangeR, nettik, TjP |
|           14 |     3383 | 2024-02-22 | FlyQuest           | L   | 0.225      | -            | -                | -                | -         |    -0.42 | asap, chelleos, dangeR, nettik, TjP |
|           13 |     3385 | 2024-02-21 | Vantage            | W   | 0.224      | -            | -                | -                | -         |     2.24 | asap, chelleos, dangeR, nettik, TjP |
|           12 |     3413 | 2024-02-21 | DXA                | W   | 0.218      | -            | -                | -                | -         |     2.32 | asap, chelleos, dangeR, nettik, TjP |
|           11 |     3418 | 2024-02-21 | DXA                | W   | 0.218      | -            | -                | -                | -         |     2.36 | asap, chelleos, dangeR, nettik, TjP |
|           10 |     3821 | 2024-02-01 | M80                | L   | 0.087      | -            | -                | -                | -         |    -0.22 | asap, chelleos, nettik, Rackem, TjP |
|            9 |     3838 | 2024-01-31 | Virtus.pro         | L   | 0.081      | -            | -                | -                | -         |    -0.01 | asap, chelleos, nettik, Rackem, TjP |
|            8 |     3926 | 2024-01-26 | Bad News Kangaroos | L   | 0.045      | -            | -                | -                | -         |    -0.69 | asap, chelleos, nettik, Rackem, TjP |
|            7 |     3941 | 2024-01-25 | Mindfreak          | W   | 0.038      | -            | -                | -                | -         |     0.16 | asap, chelleos, nettik, Rackem, TjP |
|            6 |     3956 | 2024-01-24 | Blitz              | W   | 0.031      | -            | -                | -                | -         |     0.08 | asap, chelleos, nettik, Rackem, TjP |
|            5 |     3980 | 2024-01-23 | Mindfreak          | L   | 0.024      | -            | -                | -                | -         |    -0.67 | asap, chelleos, nettik, Rackem, TjP |
|            4 |     4005 | 2024-01-22 | Bad News Kangaroos | W   | 0.019      | -            | -                | -                | -         |     0.30 | asap, chelleos, nettik, Rackem, TjP |
|            3 |     4008 | 2024-01-22 | Mindfreak          | L   | 0.018      | -            | -                | -                | -         |    -0.49 | asap, chelleos, nettik, Rackem, TjP |
|            2 |     4039 | 2024-01-20 | FlyQuest           | L   | 0.011      | -            | -                | -                | -         |    -0.02 | asap, chelleos, nettik, Rackem, TjP |
|            1 |     4044 | 2024-01-20 | Bad News Kangaroos | L   | 0.010      | -            | -                | -                | -         |    -0.15 | asap, chelleos, nettik, Rackem, TjP |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,121.52)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.945 | $2,000.00      | $1,889.22       |
| 2024-04-28 |      0.665 | $3,000.00      | $1,995.10       |
| 2024-02-02 |      0.095 | $2,500.00      | $237.19         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
