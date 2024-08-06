### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, dangeR, Hatz, TjP<br />
Global Rank: [120](../standings_global.md)<br />
<br />
Region: [Asia]( ../standings_asia.md)<br />
Regional Rank: [8]( ../standings_asia.md)<br />
<br />
Final Rank Value:  810.2<br />
<br />
Final Rank Value (810.2) = Starting Rank Value (778.4) + Head To Head Adjustments (31.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.334[<sup>1</sup>](#table2)
- Bounty Collected: 0.296[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.060[<sup>2</sup>](#table1)

The average of these factors is 0.184<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 778.4
- 400 + ( ( 0.184 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 778.4


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
|           37 |      499 | 2024-07-23 | The Art of War     | L   | 1.000      | -            | -                | -                | -         |   -25.33 | asap, chelleos, dangeR, Hatz, TjP   |
|           36 |      505 | 2024-07-23 | The Art of War     | L   | 1.000      | -            | -                | -                | -         |   -26.66 | asap, chelleos, dangeR, Hatz, TjP   |
|           35 |      686 | 2024-07-18 | DXA                | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.217 (0.072)    | 0 (0.000) |     8.73 | asap, chelleos, dangeR, Hatz, TjP   |
|           34 |      691 | 2024-07-18 | DXA                | L   | 1.000      | -            | -                | -                | -         |   -23.30 | asap, chelleos, dangeR, Hatz, TjP   |
|           33 |      806 | 2024-07-16 | Mindfreak          | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.218 (0.073)    | 0 (0.000) |     9.71 | asap, chelleos, dangeR, Hatz, TjP   |
|           32 |      809 | 2024-07-16 | Mindfreak          | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.218 (0.073)    | 0 (0.000) |    10.48 | asap, chelleos, dangeR, Hatz, TjP   |
|           31 |     1317 | 2024-06-09 | FlyQuest           | L   | 0.811      | -            | -                | -                | -         |    -3.66 | asap, chelleos, dangeR, nettik, TjP |
|           30 |     1425 | 2024-06-07 | FlyQuest           | W   | 0.798      | 0.333        | 0.104 (0.028)    | 0.277 (0.074)    | 0 (0.000) |    21.90 | asap, chelleos, dangeR, nettik, TjP |
|           29 |     1499 | 2024-06-06 | Bad News Kangaroos | W   | 0.791      | 0.333        | 0.016 (0.004)    | 0.217 (0.057)    | 0 (0.000) |    11.93 | asap, chelleos, dangeR, nettik, TjP |
|           28 |     1905 | 2024-05-22 | Vantage            | W   | 0.691      | 0.333        | -                | 0.064 (0.015)    | 0 (0.000) |     6.02 | asap, chelleos, dangeR, nettik, TjP |
|           27 |     1909 | 2024-05-22 | Vantage            | W   | 0.691      | -            | -                | -                | 0 (0.000) |     6.33 | asap, chelleos, dangeR, nettik, TjP |
|           26 |     2165 | 2024-05-15 | Canon Event        | W   | 0.645      | -            | -                | -                | 0 (0.000) |     2.77 | asap, chelleos, dangeR, nettik, TjP |
|           25 |     2168 | 2024-05-15 | Canon Event        | W   | 0.644      | -            | -                | -                | 0 (0.000) |     2.85 | asap, chelleos, dangeR, nettik, TjP |
|           24 |     2355 | 2024-05-08 | KZG                | W   | 0.598      | 0.333        | 0.005 (0.001)    | 0.106 (0.021)    | -         |     5.89 | asap, chelleos, dangeR, nettik, TjP |
|           23 |     2357 | 2024-05-08 | KZG                | W   | 0.598      | 0.333        | 0.005 (0.001)    | 0.106 (0.021)    | -         |     6.16 | asap, chelleos, dangeR, nettik, TjP |
|           22 |     2588 | 2024-04-27 | MIBR               | L   | 0.524      | -            | -                | -                | -         |    -0.46 | asap, chelleos, dangeR, nettik, TjP |
|           21 |     2609 | 2024-04-26 | KZG                | W   | 0.518      | 0.500        | 0.005 (0.001)    | 0.106 (0.027)    | 1 (0.518) |     5.58 | asap, chelleos, dangeR, nettik, TjP |
|           20 |     2612 | 2024-04-25 | Rebels             | L   | 0.516      | -            | -                | -                | -         |    -4.14 | asap, chelleos, dangeR, nettik, TjP |
|           19 |     2743 | 2024-04-20 | Bad News Kangaroos | L   | 0.478      | -            | -                | -                | -         |    -7.72 | asap, chelleos, dangeR, nettik, TjP |
|           18 |     2785 | 2024-04-19 | FlyQuest           | L   | 0.472      | -            | -                | -                | -         |    -1.73 | asap, chelleos, dangeR, nettik, TjP |
|           17 |     2791 | 2024-04-19 | Bad News Kangaroos | W   | 0.471      | 0.143        | 0.016 (0.001)    | -                | -         |     7.22 | asap, chelleos, dangeR, nettik, TjP |
|           16 |     2866 | 2024-04-17 | Arcade             | W   | 0.459      | -            | -                | -                | -         |     4.70 | asap, chelleos, dangeR, nettik, TjP |
|           15 |     2881 | 2024-04-17 | Canon Event        | W   | 0.458      | -            | -                | -                | -         |     2.24 | asap, chelleos, dangeR, nettik, TjP |
|           14 |     3040 | 2024-04-10 | Bad News Kangaroos | L   | 0.411      | -            | -                | -                | -         |    -6.65 | asap, chelleos, dangeR, nettik, TjP |
|           13 |     3050 | 2024-04-10 | Bad News Kangaroos | W   | 0.411      | 0.333        | 0.016 (0.002)    | 0.217 (0.030)    | -         |     6.43 | asap, chelleos, dangeR, nettik, TjP |
|           12 |     3402 | 2024-03-27 | Arcade             | W   | 0.318      | -            | -                | -                | -         |     3.47 | asap, chelleos, dangeR, nettik, TjP |
|           11 |     3405 | 2024-03-27 | Arcade             | W   | 0.318      | -            | -                | -                | -         |     3.56 | asap, chelleos, dangeR, nettik, TjP |
|           10 |     3672 | 2024-03-13 | FlyQuest           | L   | 0.225      | -            | -                | -                | -         |    -0.80 | asap, chelleos, dangeR, nettik, TjP |
|            9 |     3680 | 2024-03-13 | FlyQuest           | L   | 0.225      | -            | -                | -                | -         |    -0.81 | asap, chelleos, dangeR, nettik, TjP |
|            8 |     3846 | 2024-03-06 | Mindfreak          | W   | 0.178      | -            | -                | -                | -         |     1.92 | asap, chelleos, dangeR, nettik, TjP |
|            7 |     3853 | 2024-03-06 | Mindfreak          | W   | 0.178      | -            | -                | -                | -         |     1.95 | asap, chelleos, dangeR, nettik, TjP |
|            6 |     4101 | 2024-02-23 | FlyQuest           | L   | 0.098      | -            | -                | -                | -         |    -0.35 | asap, chelleos, dangeR, nettik, TjP |
|            5 |     4103 | 2024-02-22 | Bad News Kangaroos | W   | 0.097      | -            | -                | -                | -         |     0.89 | asap, chelleos, dangeR, nettik, TjP |
|            4 |     4121 | 2024-02-22 | FlyQuest           | L   | 0.091      | -            | -                | -                | -         |    -0.32 | asap, chelleos, dangeR, nettik, TjP |
|            3 |     4123 | 2024-02-21 | Vantage            | W   | 0.090      | -            | -                | -                | -         |     0.95 | asap, chelleos, dangeR, nettik, TjP |
|            2 |     4151 | 2024-02-21 | DXA                | W   | 0.085      | -            | -                | -                | -         |     1.02 | asap, chelleos, dangeR, nettik, TjP |
|            1 |     4156 | 2024-02-21 | DXA                | W   | 0.085      | -            | -                | -                | -         |     1.03 | asap, chelleos, dangeR, nettik, TjP |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,215.94)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.811 | $2,000.00      | $1,621.87       |
| 2024-04-28 |      0.531 | $3,000.00      | $1,594.07       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
