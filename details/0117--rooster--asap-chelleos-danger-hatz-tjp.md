### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, dangeR, Hatz, TjP<br />
Global Rank: [117](../standings_global.md)<br />
<br />
Region: [Asia]( ../standings_asia.md)<br />
Regional Rank: [5]( ../standings_asia.md)<br />
<br />
Final Rank Value:  814.7<br />
<br />
Final Rank Value (814.7) = Starting Rank Value (782.6) + Head To Head Adjustments (32.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.335[<sup>1</sup>](#table2)
- Bounty Collected: 0.296[<sup>2</sup>](#table1)
- Opponent Network: 0.047[<sup>2</sup>](#table1)
- LAN Wins: 0.064[<sup>2</sup>](#table1)

The average of these factors is 0.185<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 782.6
- 400 + ( ( 0.185 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 782.6


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
|           37 |      291 | 2024-07-23 | The Art of War     | L   | 1.000      | -            | -                | -                | -         |   -25.41 | asap, chelleos, dangeR, Hatz, TjP   |
|           36 |      297 | 2024-07-23 | The Art of War     | L   | 1.000      | -            | -                | -                | -         |   -26.72 | asap, chelleos, dangeR, Hatz, TjP   |
|           35 |      478 | 2024-07-18 | DXA                | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.228 (0.076)    | 0 (0.000) |     8.14 | asap, chelleos, dangeR, Hatz, TjP   |
|           34 |      483 | 2024-07-18 | DXA                | L   | 1.000      | -            | -                | -                | -         |   -23.91 | asap, chelleos, dangeR, Hatz, TjP   |
|           33 |      598 | 2024-07-16 | Mindfreak          | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.227 (0.076)    | 0 (0.000) |     9.41 | asap, chelleos, dangeR, Hatz, TjP   |
|           32 |      601 | 2024-07-16 | Mindfreak          | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.227 (0.076)    | 0 (0.000) |    10.15 | asap, chelleos, dangeR, Hatz, TjP   |
|           31 |     1109 | 2024-06-09 | FlyQuest           | L   | 0.850      | -            | -                | -                | -         |    -3.50 | asap, chelleos, dangeR, nettik, TjP |
|           30 |     1217 | 2024-06-07 | FlyQuest           | W   | 0.837      | 0.333        | 0.106 (0.030)    | 0.298 (0.083)    | 0 (0.000) |    23.29 | asap, chelleos, dangeR, nettik, TjP |
|           29 |     1291 | 2024-06-06 | Bad News Kangaroos | W   | 0.830      | 0.333        | 0.003 (0.001)    | 0.143 (0.040)    | 0 (0.000) |     8.70 | asap, chelleos, dangeR, nettik, TjP |
|           28 |     1697 | 2024-05-22 | Vantage            | W   | 0.730      | 0.333        | -                | 0.076 (0.018)    | 0 (0.000) |     6.23 | asap, chelleos, dangeR, nettik, TjP |
|           27 |     1701 | 2024-05-22 | Vantage            | W   | 0.730      | 0.333        | -                | 0.076 (0.018)    | 0 (0.000) |     6.56 | asap, chelleos, dangeR, nettik, TjP |
|           26 |     1957 | 2024-05-15 | Canon Event        | W   | 0.684      | -            | -                | -                | 0 (0.000) |     2.79 | asap, chelleos, dangeR, nettik, TjP |
|           25 |     1960 | 2024-05-15 | Canon Event        | W   | 0.683      | -            | -                | -                | 0 (0.000) |     2.86 | asap, chelleos, dangeR, nettik, TjP |
|           24 |     2147 | 2024-05-08 | KZG                | W   | 0.637      | 0.333        | 0.006 (0.001)    | 0.113 (0.024)    | -         |     6.10 | asap, chelleos, dangeR, nettik, TjP |
|           23 |     2149 | 2024-05-08 | KZG                | W   | 0.637      | 0.333        | 0.006 (0.001)    | 0.113 (0.024)    | -         |     6.41 | asap, chelleos, dangeR, nettik, TjP |
|           22 |     2380 | 2024-04-27 | MIBR               | L   | 0.563      | -            | -                | -                | -         |    -0.46 | asap, chelleos, dangeR, nettik, TjP |
|           21 |     2401 | 2024-04-26 | KZG                | W   | 0.557      | 0.500        | 0.006 (0.002)    | 0.113 (0.032)    | 1 (0.557) |     5.87 | asap, chelleos, dangeR, nettik, TjP |
|           20 |     2404 | 2024-04-25 | Rebels             | L   | 0.556      | -            | -                | -                | -         |    -4.43 | asap, chelleos, dangeR, nettik, TjP |
|           19 |     2535 | 2024-04-20 | Bad News Kangaroos | L   | 0.517      | -            | -                | -                | -         |    -8.56 | asap, chelleos, dangeR, nettik, TjP |
|           18 |     2577 | 2024-04-19 | FlyQuest           | L   | 0.511      | -            | -                | -                | -         |    -1.66 | asap, chelleos, dangeR, nettik, TjP |
|           17 |     2583 | 2024-04-19 | Bad News Kangaroos | W   | 0.510      | 0.143        | 0.017 (0.001)    | -                | -         |     7.60 | asap, chelleos, dangeR, nettik, TjP |
|           16 |     2658 | 2024-04-17 | Arcade             | W   | 0.498      | -            | -                | -                | -         |     4.88 | asap, chelleos, dangeR, nettik, TjP |
|           15 |     2673 | 2024-04-17 | Canon Event        | W   | 0.497      | -            | -                | -                | -         |     2.31 | asap, chelleos, dangeR, nettik, TjP |
|           14 |     2832 | 2024-04-10 | Bad News Kangaroos | L   | 0.450      | -            | -                | -                | -         |    -7.49 | asap, chelleos, dangeR, nettik, TjP |
|           13 |     2842 | 2024-04-10 | Bad News Kangaroos | W   | 0.450      | 0.333        | 0.017 (0.003)    | -                | -         |     6.84 | asap, chelleos, dangeR, nettik, TjP |
|           12 |     3194 | 2024-03-27 | Arcade             | W   | 0.357      | -            | -                | -                | -         |     3.73 | asap, chelleos, dangeR, nettik, TjP |
|           11 |     3197 | 2024-03-27 | Arcade             | W   | 0.357      | -            | -                | -                | -         |     3.84 | asap, chelleos, dangeR, nettik, TjP |
|           10 |     3464 | 2024-03-13 | FlyQuest           | L   | 0.264      | -            | -                | -                | -         |    -0.83 | asap, chelleos, dangeR, nettik, TjP |
|            9 |     3472 | 2024-03-13 | FlyQuest           | L   | 0.264      | -            | -                | -                | -         |    -0.84 | asap, chelleos, dangeR, nettik, TjP |
|            8 |     3638 | 2024-03-06 | Mindfreak          | W   | 0.217      | -            | -                | -                | -         |     2.32 | asap, chelleos, dangeR, nettik, TjP |
|            7 |     3645 | 2024-03-06 | Mindfreak          | W   | 0.217      | -            | -                | -                | -         |     2.36 | asap, chelleos, dangeR, nettik, TjP |
|            6 |     3893 | 2024-02-23 | FlyQuest           | L   | 0.137      | -            | -                | -                | -         |    -0.43 | asap, chelleos, dangeR, nettik, TjP |
|            5 |     3895 | 2024-02-22 | Bad News Kangaroos | W   | 0.136      | -            | -                | -                | -         |     2.06 | asap, chelleos, dangeR, nettik, TjP |
|            4 |     3913 | 2024-02-22 | FlyQuest           | L   | 0.131      | -            | -                | -                | -         |    -0.40 | asap, chelleos, dangeR, nettik, TjP |
|            3 |     3915 | 2024-02-21 | Vantage            | W   | 0.130      | -            | -                | -                | -         |     1.36 | asap, chelleos, dangeR, nettik, TjP |
|            2 |     3943 | 2024-02-21 | DXA                | W   | 0.124      | -            | -                | -                | -         |     1.45 | asap, chelleos, dangeR, nettik, TjP |
|            1 |     3948 | 2024-02-21 | DXA                | W   | 0.124      | -            | -                | -                | -         |     1.46 | asap, chelleos, dangeR, nettik, TjP |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,411.76)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.850 | $2,000.00      | $1,700.20       |
| 2024-04-28 |      0.571 | $3,000.00      | $1,711.56       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
