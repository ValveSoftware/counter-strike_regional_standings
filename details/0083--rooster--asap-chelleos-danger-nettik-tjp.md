### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, dangeR, nettik, TjP<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [83](../standings_global.md)<br />
Regional Rank: [5]( ../standings_asia.md)<br />
Final Rank Value:  935.4<br />
<br />
Final Rank Value (935.4) = Starting Rank Value (823.4) + Head To Head Adjustments (112.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.363[<sup>1</sup>](#table2)
- Bounty Collected: 0.320[<sup>2</sup>](#table1)
- Opponent Network: 0.062[<sup>2</sup>](#table1)
- LAN Wins: 0.088[<sup>2</sup>](#table1)

The average of these factors is 0.208<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 823.4
- 400 + ( ( 0.208 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 823.4


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
|           43 |      279 | 2024-06-09 | FlyQuest           | L   | 1.000      | -            | -                | -                | -         |    -2.35 | asap, chelleos, dangeR, nettik, TjP |
|           42 |      387 | 2024-06-07 | FlyQuest           | W   | 1.000      | 0.333        | 0.118 (0.039)    | 0.476 (0.159)    | 0 (0.000) |    29.47 | asap, chelleos, dangeR, nettik, TjP |
|           41 |      461 | 2024-06-06 | Bad News Kangaroos | W   | 1.000      | 0.333        | 0.031 (0.010)    | 0.225 (0.075)    | 0 (0.000) |    15.68 | asap, chelleos, dangeR, nettik, TjP |
|           40 |      869 | 2024-05-22 | Vantage            | W   | 1.000      | 0.333        | -                | 0.166 (0.055)    | 0 (0.000) |     7.11 | asap, chelleos, dangeR, nettik, TjP |
|           39 |      873 | 2024-05-22 | Vantage            | W   | 1.000      | 0.333        | -                | 0.166 (0.055)    | 0 (0.000) |     7.58 | asap, chelleos, dangeR, nettik, TjP |
|           38 |     1129 | 2024-05-15 | Canon Event        | W   | 0.973      | -            | -                | -                | 0 (0.000) |     2.65 | asap, chelleos, dangeR, nettik, TjP |
|           37 |     1132 | 2024-05-15 | Canon Event        | W   | 0.973      | -            | -                | -                | 0 (0.000) |     2.72 | asap, chelleos, dangeR, nettik, TjP |
|           36 |     1319 | 2024-05-08 | KZG                | W   | 0.927      | 0.333        | 0.009 (0.003)    | 0.142 (0.044)    | 0 (0.000) |     6.36 | asap, chelleos, dangeR, nettik, TjP |
|           35 |     1321 | 2024-05-08 | KZG                | W   | 0.927      | 0.333        | 0.009 (0.003)    | 0.142 (0.044)    | 0 (0.000) |     6.73 | asap, chelleos, dangeR, nettik, TjP |
|           34 |     1552 | 2024-04-27 | MIBR               | L   | 0.853      | -            | -                | -                | -         |    -0.41 | asap, chelleos, dangeR, nettik, TjP |
|           33 |     1573 | 2024-04-26 | KZG                | W   | 0.847      | 0.500        | 0.009 (0.004)    | 0.142 (0.060)    | 1 (0.847) |     6.51 | asap, chelleos, dangeR, nettik, TjP |
|           32 |     1576 | 2024-04-25 | Rebels             | L   | 0.845      | -            | -                | -                | -         |    -5.92 | asap, chelleos, dangeR, nettik, TjP |
|           31 |     1707 | 2024-04-20 | Bad News Kangaroos | L   | 0.807      | -            | -                | -                | -         |   -12.32 | asap, chelleos, dangeR, nettik, TjP |
|           30 |     1749 | 2024-04-19 | FlyQuest           | L   | 0.801      | -            | -                | -                | -         |    -1.29 | asap, chelleos, dangeR, nettik, TjP |
|           29 |     1755 | 2024-04-19 | Bad News Kangaroos | W   | 0.800      | 0.143        | 0.031 (0.004)    | -                | 0 (0.000) |    12.80 | asap, chelleos, dangeR, nettik, TjP |
|           28 |     1830 | 2024-04-17 | Arcade             | W   | 0.788      | -            | -                | -                | -         |     6.51 | asap, chelleos, dangeR, nettik, TjP |
|           27 |     1845 | 2024-04-17 | Canon Event        | W   | 0.787      | -            | -                | -                | -         |     2.49 | asap, chelleos, dangeR, nettik, TjP |
|           26 |     2004 | 2024-04-10 | Bad News Kangaroos | L   | 0.740      | -            | -                | -                | -         |   -11.31 | asap, chelleos, dangeR, nettik, TjP |
|           25 |     2014 | 2024-04-10 | Bad News Kangaroos | W   | 0.740      | 0.333        | 0.031 (0.008)    | 0.225 (0.056)    | -         |    12.23 | asap, chelleos, dangeR, nettik, TjP |
|           24 |     2367 | 2024-03-27 | Arcade             | W   | 0.647      | 0.333        | 0.005 (0.001)    | -                | -         |     5.91 | asap, chelleos, dangeR, nettik, TjP |
|           23 |     2370 | 2024-03-27 | Arcade             | W   | 0.647      | 0.333        | 0.005 (0.001)    | -                | -         |     6.20 | asap, chelleos, dangeR, nettik, TjP |
|           22 |     2637 | 2024-03-13 | FlyQuest           | L   | 0.554      | -            | -                | -                | -         |    -0.83 | asap, chelleos, dangeR, nettik, TjP |
|           21 |     2645 | 2024-03-13 | FlyQuest           | L   | 0.554      | -            | -                | -                | -         |    -0.83 | asap, chelleos, dangeR, nettik, TjP |
|           20 |     2811 | 2024-03-06 | Mindfreak          | W   | 0.507      | 0.333        | -                | 0.226 (0.038)    | -         |     5.54 | asap, chelleos, dangeR, nettik, TjP |
|           19 |     2818 | 2024-03-06 | Mindfreak          | W   | 0.507      | 0.333        | -                | 0.226 (0.038)    | -         |     5.77 | asap, chelleos, dangeR, nettik, TjP |
|           18 |     3066 | 2024-02-23 | FlyQuest           | L   | 0.427      | -            | -                | -                | -         |    -0.58 | asap, chelleos, dangeR, nettik, TjP |
|           17 |     3068 | 2024-02-22 | Bad News Kangaroos | W   | 0.426      | 0.143        | 0.031 (0.002)    | -                | -         |     7.48 | asap, chelleos, dangeR, nettik, TjP |
|           16 |     3086 | 2024-02-22 | FlyQuest           | L   | 0.420      | -            | -                | -                | -         |    -0.55 | asap, chelleos, dangeR, nettik, TjP |
|           15 |     3088 | 2024-02-21 | Vantage            | W   | 0.419      | -            | -                | -                | -         |     4.17 | asap, chelleos, dangeR, nettik, TjP |
|           14 |     3116 | 2024-02-21 | DXA                | W   | 0.414      | -            | -                | -                | -         |     4.25 | asap, chelleos, dangeR, nettik, TjP |
|           13 |     3121 | 2024-02-21 | DXA                | W   | 0.414      | -            | -                | -                | -         |     4.39 | asap, chelleos, dangeR, nettik, TjP |
|           12 |     3524 | 2024-02-01 | M80                | L   | 0.282      | -            | -                | -                | -         |    -0.60 | asap, chelleos, nettik, Rackem, TjP |
|           11 |     3541 | 2024-01-31 | Virtus.pro         | L   | 0.276      | -            | -                | -                | -         |    -0.04 | asap, chelleos, nettik, Rackem, TjP |
|           10 |     3629 | 2024-01-26 | Bad News Kangaroos | L   | 0.240      | -            | -                | -                | -         |    -6.42 | asap, chelleos, nettik, Rackem, TjP |
|            9 |     3644 | 2024-01-25 | Mindfreak          | W   | 0.233      | -            | -                | -                | -         |     1.36 | asap, chelleos, nettik, Rackem, TjP |
|            8 |     3659 | 2024-01-24 | Blitz              | W   | 0.227      | -            | -                | -                | -         |     0.63 | asap, chelleos, nettik, Rackem, TjP |
|            7 |     3683 | 2024-01-23 | Mindfreak          | L   | 0.220      | -            | -                | -                | -         |    -5.72 | asap, chelleos, nettik, Rackem, TjP |
|            6 |     3708 | 2024-01-22 | Bad News Kangaroos | W   | 0.214      | -            | -                | -                | -         |     3.86 | asap, chelleos, nettik, Rackem, TjP |
|            5 |     3711 | 2024-01-22 | Mindfreak          | L   | 0.213      | -            | -                | -                | -         |    -5.59 | asap, chelleos, nettik, Rackem, TjP |
|            4 |     3742 | 2024-01-20 | FlyQuest           | L   | 0.206      | -            | -                | -                | -         |    -0.28 | asap, chelleos, nettik, Rackem, TjP |
|            3 |     3747 | 2024-01-20 | Bad News Kangaroos | L   | 0.205      | -            | -                | -                | -         |    -2.85 | asap, chelleos, nettik, Rackem, TjP |
|            2 |     3844 | 2024-01-19 | Mindfreak          | W   | 0.193      | -            | -                | -                | -         |     1.00 | asap, jhd, nettik, Rackem, TjP      |
|            1 |     3852 | 2024-01-18 | iM Apartments      | W   | 0.192      | -            | -                | -                | -         |     0.51 | asap, jhd, nettik, Rackem, TjP      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,306.35)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-04-28 |      0.860 | $3,000.00      | $2,580.95       |
| 2024-02-02 |      0.290 | $2,500.00      | $725.40         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
