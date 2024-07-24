### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, dangeR, Hatz, TjP<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [114](../standings_global.md)<br />
Regional Rank: [5]( ../standings_asia.md)<br />
Final Rank Value:  830.5<br />
<br />
Final Rank Value (830.5) = Starting Rank Value (793.9) + Head To Head Adjustments (36.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.349[<sup>1</sup>](#table2)
- Bounty Collected: 0.307[<sup>2</sup>](#table1)
- Opponent Network: 0.051[<sup>2</sup>](#table1)
- LAN Wins: 0.071[<sup>2</sup>](#table1)

The average of these factors is 0.195<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 793.9
- 400 + ( ( 0.195 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 793.9


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
|           39 |       49 | 2024-07-23 | The Art of War     | L   | 1.000      | -            | -                | -                | -         |   -25.87 | asap, chelleos, dangeR, Hatz, TjP   |
|           38 |       55 | 2024-07-23 | The Art of War     | L   | 1.000      | -            | -                | -                | -         |   -27.12 | asap, chelleos, dangeR, Hatz, TjP   |
|           37 |      236 | 2024-07-18 | DXA                | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.217 (0.072)    | 0 (0.000) |     7.66 | asap, chelleos, dangeR, Hatz, TjP   |
|           36 |      241 | 2024-07-18 | DXA                | L   | 1.000      | -            | -                | -                | -         |   -24.40 | asap, chelleos, dangeR, Hatz, TjP   |
|           35 |      356 | 2024-07-16 | Mindfreak          | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.210 (0.070)    | 0 (0.000) |     9.27 | asap, chelleos, dangeR, Hatz, TjP   |
|           34 |      359 | 2024-07-16 | Mindfreak          | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.210 (0.070)    | 0 (0.000) |     9.99 | asap, chelleos, dangeR, Hatz, TjP   |
|           33 |      867 | 2024-06-09 | FlyQuest           | L   | 0.897      | -            | -                | -                | -         |    -3.16 | asap, chelleos, dangeR, nettik, TjP |
|           32 |      975 | 2024-06-07 | FlyQuest           | W   | 0.884      | 0.333        | 0.133 (0.039)    | 0.349 (0.103)    | 0 (0.000) |    25.11 | asap, chelleos, dangeR, nettik, TjP |
|           31 |     1049 | 2024-06-06 | Bad News Kangaroos | W   | 0.877      | 0.333        | 0.003 (0.001)    | 0.154 (0.045)    | 0 (0.000) |     8.86 | asap, chelleos, dangeR, nettik, TjP |
|           30 |     1455 | 2024-05-22 | Vantage            | W   | 0.778      | 0.333        | -                | 0.096 (0.025)    | 0 (0.000) |     6.36 | asap, chelleos, dangeR, nettik, TjP |
|           29 |     1459 | 2024-05-22 | Vantage            | W   | 0.777      | 0.333        | -                | 0.096 (0.025)    | 0 (0.000) |     6.71 | asap, chelleos, dangeR, nettik, TjP |
|           28 |     1715 | 2024-05-15 | Canon Event        | W   | 0.731      | -            | -                | -                | 0 (0.000) |     2.71 | asap, chelleos, dangeR, nettik, TjP |
|           27 |     1718 | 2024-05-15 | Canon Event        | W   | 0.731      | -            | -                | -                | 0 (0.000) |     2.78 | asap, chelleos, dangeR, nettik, TjP |
|           26 |     1905 | 2024-05-08 | KZG                | W   | 0.684      | 0.333        | 0.007 (0.002)    | 0.130 (0.030)    | -         |     6.17 | asap, chelleos, dangeR, nettik, TjP |
|           25 |     1907 | 2024-05-08 | KZG                | W   | 0.684      | 0.333        | 0.007 (0.002)    | 0.130 (0.030)    | -         |     6.49 | asap, chelleos, dangeR, nettik, TjP |
|           24 |     2138 | 2024-04-27 | MIBR               | L   | 0.610      | -            | -                | -                | -         |    -0.45 | asap, chelleos, dangeR, nettik, TjP |
|           23 |     2159 | 2024-04-26 | KZG                | W   | 0.604      | 0.500        | 0.007 (0.002)    | 0.130 (0.039)    | 1 (0.604) |     6.01 | asap, chelleos, dangeR, nettik, TjP |
|           22 |     2162 | 2024-04-25 | Rebels             | L   | 0.603      | -            | -                | -                | -         |    -4.73 | asap, chelleos, dangeR, nettik, TjP |
|           21 |     2293 | 2024-04-20 | Bad News Kangaroos | L   | 0.564      | -            | -                | -                | -         |    -9.30 | asap, chelleos, dangeR, nettik, TjP |
|           20 |     2335 | 2024-04-19 | FlyQuest           | L   | 0.558      | -            | -                | -                | -         |    -1.49 | asap, chelleos, dangeR, nettik, TjP |
|           19 |     2341 | 2024-04-19 | Bad News Kangaroos | W   | 0.557      | 0.143        | 0.023 (0.002)    | -                | -         |     8.34 | asap, chelleos, dangeR, nettik, TjP |
|           18 |     2416 | 2024-04-17 | Arcade             | W   | 0.545      | -            | -                | -                | -         |     5.17 | asap, chelleos, dangeR, nettik, TjP |
|           17 |     2431 | 2024-04-17 | Canon Event        | W   | 0.544      | -            | -                | -                | -         |     2.30 | asap, chelleos, dangeR, nettik, TjP |
|           16 |     2590 | 2024-04-10 | Bad News Kangaroos | L   | 0.498      | -            | -                | -                | -         |    -8.23 | asap, chelleos, dangeR, nettik, TjP |
|           15 |     2600 | 2024-04-10 | Bad News Kangaroos | W   | 0.497      | 0.333        | 0.023 (0.004)    | -                | -         |     7.60 | asap, chelleos, dangeR, nettik, TjP |
|           14 |     2952 | 2024-03-27 | Arcade             | W   | 0.405      | -            | -                | -                | -         |     4.11 | asap, chelleos, dangeR, nettik, TjP |
|           13 |     2955 | 2024-03-27 | Arcade             | W   | 0.404      | -            | -                | -                | -         |     4.24 | asap, chelleos, dangeR, nettik, TjP |
|           12 |     3222 | 2024-03-13 | FlyQuest           | L   | 0.311      | -            | -                | -                | -         |    -0.80 | asap, chelleos, dangeR, nettik, TjP |
|           11 |     3230 | 2024-03-13 | FlyQuest           | L   | 0.311      | -            | -                | -                | -         |    -0.81 | asap, chelleos, dangeR, nettik, TjP |
|           10 |     3396 | 2024-03-06 | Mindfreak          | W   | 0.265      | -            | -                | -                | -         |     2.73 | asap, chelleos, dangeR, nettik, TjP |
|            9 |     3403 | 2024-03-06 | Mindfreak          | W   | 0.264      | -            | -                | -                | -         |     2.79 | asap, chelleos, dangeR, nettik, TjP |
|            8 |     3651 | 2024-02-23 | FlyQuest           | L   | 0.185      | -            | -                | -                | -         |    -0.46 | asap, chelleos, dangeR, nettik, TjP |
|            7 |     3653 | 2024-02-22 | Bad News Kangaroos | W   | 0.183      | -            | -                | -                | -         |     2.81 | asap, chelleos, dangeR, nettik, TjP |
|            6 |     3671 | 2024-02-22 | FlyQuest           | L   | 0.178      | -            | -                | -                | -         |    -0.44 | asap, chelleos, dangeR, nettik, TjP |
|            5 |     3673 | 2024-02-21 | Vantage            | W   | 0.177      | -            | -                | -                | -         |     1.81 | asap, chelleos, dangeR, nettik, TjP |
|            4 |     3701 | 2024-02-21 | DXA                | W   | 0.171      | -            | -                | -                | -         |     1.96 | asap, chelleos, dangeR, nettik, TjP |
|            3 |     3706 | 2024-02-21 | DXA                | W   | 0.171      | -            | -                | -                | -         |     1.98 | asap, chelleos, dangeR, nettik, TjP |
|            2 |     4109 | 2024-02-01 | M80                | L   | 0.040      | -            | -                | -                | -         |    -0.07 | asap, chelleos, nettik, Rackem, TjP |
|            1 |     4126 | 2024-01-31 | Virtus.pro         | L   | 0.033      | -            | -                | -                | -         |    -0.00 | asap, chelleos, nettik, Rackem, TjP |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,767.33)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.897 | $2,000.00      | $1,794.77       |
| 2024-04-28 |      0.618 | $3,000.00      | $1,853.43       |
| 2024-02-02 |      0.048 | $2,500.00      | $119.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
