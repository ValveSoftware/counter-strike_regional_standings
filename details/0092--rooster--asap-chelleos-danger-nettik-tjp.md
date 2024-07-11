### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, dangeR, nettik, TjP<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [92](../standings_global.md)<br />
Regional Rank: [5]( ../standings_asia.md)<br />
Final Rank Value:  924.3<br />
<br />
Final Rank Value (924.3) = Starting Rank Value (822.8) + Head To Head Adjustments (101.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.361[<sup>1</sup>](#table2)
- Bounty Collected: 0.314[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.080[<sup>2</sup>](#table1)

The average of these factors is 0.200<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 822.8
- 400 + ( ( 0.200 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 822.8


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
|           43 |      415 | 2024-06-09 | FlyQuest           | L   | 0.984      | -            | -                | -                | -         |    -2.68 | asap, chelleos, dangeR, nettik, TjP |
|           42 |      523 | 2024-06-07 | FlyQuest           | W   | 0.971      | 0.333        | 0.116 (0.038)    | 0.417 (0.135)    | 0 (0.000) |    28.29 | asap, chelleos, dangeR, nettik, TjP |
|           41 |      597 | 2024-06-06 | Bad News Kangaroos | W   | 0.964      | 0.333        | 0.029 (0.009)    | 0.196 (0.063)    | 0 (0.000) |    14.80 | asap, chelleos, dangeR, nettik, TjP |
|           40 |     1003 | 2024-05-22 | Vantage            | W   | 0.864      | 0.333        | 0.003 (0.001)    | 0.127 (0.037)    | 0 (0.000) |     6.63 | asap, chelleos, dangeR, nettik, TjP |
|           39 |     1007 | 2024-05-22 | Vantage            | W   | 0.864      | 0.333        | 0.003 (0.001)    | 0.127 (0.037)    | 0 (0.000) |     7.02 | asap, chelleos, dangeR, nettik, TjP |
|           38 |     1263 | 2024-05-15 | Canon Event        | W   | 0.818      | -            | -                | -                | 0 (0.000) |     2.57 | asap, chelleos, dangeR, nettik, TjP |
|           37 |     1266 | 2024-05-15 | Canon Event        | W   | 0.818      | -            | -                | -                | 0 (0.000) |     2.64 | asap, chelleos, dangeR, nettik, TjP |
|           36 |     1453 | 2024-05-08 | KZG                | W   | 0.771      | 0.333        | 0.009 (0.002)    | 0.119 (0.031)    | 0 (0.000) |     6.02 | asap, chelleos, dangeR, nettik, TjP |
|           35 |     1455 | 2024-05-08 | KZG                | W   | 0.771      | 0.333        | 0.009 (0.002)    | 0.119 (0.030)    | 0 (0.000) |     6.33 | asap, chelleos, dangeR, nettik, TjP |
|           34 |     1686 | 2024-04-27 | MIBR               | L   | 0.697      | -            | -                | -                | -         |    -0.35 | asap, chelleos, dangeR, nettik, TjP |
|           33 |     1707 | 2024-04-26 | KZG                | W   | 0.691      | 0.500        | 0.009 (0.003)    | 0.119 (0.041)    | 1 (0.691) |     5.97 | asap, chelleos, dangeR, nettik, TjP |
|           32 |     1710 | 2024-04-25 | Rebels             | L   | 0.690      | -            | -                | -                | -         |    -4.93 | asap, chelleos, dangeR, nettik, TjP |
|           31 |     1841 | 2024-04-20 | Bad News Kangaroos | L   | 0.651      | -            | -                | -                | -         |   -10.21 | asap, chelleos, dangeR, nettik, TjP |
|           30 |     1883 | 2024-04-19 | FlyQuest           | L   | 0.645      | -            | -                | -                | -         |    -1.25 | asap, chelleos, dangeR, nettik, TjP |
|           29 |     1889 | 2024-04-19 | Bad News Kangaroos | W   | 0.644      | 0.143        | 0.029 (0.003)    | -                | 0 (0.000) |    10.13 | asap, chelleos, dangeR, nettik, TjP |
|           28 |     1964 | 2024-04-17 | Arcade             | W   | 0.632      | -            | -                | -                | -         |     5.44 | asap, chelleos, dangeR, nettik, TjP |
|           27 |     1979 | 2024-04-17 | Canon Event        | W   | 0.631      | -            | -                | -                | -         |     2.28 | asap, chelleos, dangeR, nettik, TjP |
|           26 |     2138 | 2024-04-10 | Bad News Kangaroos | L   | 0.585      | -            | -                | -                | -         |    -9.18 | asap, chelleos, dangeR, nettik, TjP |
|           25 |     2148 | 2024-04-10 | Bad News Kangaroos | W   | 0.584      | 0.333        | 0.029 (0.006)    | 0.196 (0.038)    | -         |     9.43 | asap, chelleos, dangeR, nettik, TjP |
|           24 |     2500 | 2024-03-27 | Arcade             | W   | 0.491      | -            | -                | -                | -         |     4.57 | asap, chelleos, dangeR, nettik, TjP |
|           23 |     2503 | 2024-03-27 | Arcade             | W   | 0.491      | -            | -                | -                | -         |     4.74 | asap, chelleos, dangeR, nettik, TjP |
|           22 |     2770 | 2024-03-13 | FlyQuest           | L   | 0.398      | -            | -                | -                | -         |    -0.73 | asap, chelleos, dangeR, nettik, TjP |
|           21 |     2778 | 2024-03-13 | FlyQuest           | L   | 0.398      | -            | -                | -                | -         |    -0.74 | asap, chelleos, dangeR, nettik, TjP |
|           20 |     2944 | 2024-03-06 | Mindfreak          | W   | 0.352      | 0.333        | -                | 0.212 (0.025)    | -         |     3.89 | asap, chelleos, dangeR, nettik, TjP |
|           19 |     2951 | 2024-03-06 | Mindfreak          | W   | 0.351      | 0.333        | -                | 0.212 (0.025)    | -         |     4.00 | asap, chelleos, dangeR, nettik, TjP |
|           18 |     3199 | 2024-02-23 | FlyQuest           | L   | 0.271      | -            | -                | -                | -         |    -0.47 | asap, chelleos, dangeR, nettik, TjP |
|           17 |     3201 | 2024-02-22 | Bad News Kangaroos | W   | 0.270      | 0.143        | 0.029 (0.001)    | -                | -         |     4.49 | asap, chelleos, dangeR, nettik, TjP |
|           16 |     3219 | 2024-02-22 | FlyQuest           | L   | 0.265      | -            | -                | -                | -         |    -0.45 | asap, chelleos, dangeR, nettik, TjP |
|           15 |     3221 | 2024-02-21 | Vantage            | W   | 0.264      | -            | -                | -                | -         |     2.64 | asap, chelleos, dangeR, nettik, TjP |
|           14 |     3249 | 2024-02-21 | DXA                | W   | 0.258      | -            | -                | -                | -         |     2.70 | asap, chelleos, dangeR, nettik, TjP |
|           13 |     3254 | 2024-02-21 | DXA                | W   | 0.258      | -            | -                | -                | -         |     2.75 | asap, chelleos, dangeR, nettik, TjP |
|           12 |     3657 | 2024-02-01 | M80                | L   | 0.126      | -            | -                | -                | -         |    -0.31 | asap, chelleos, nettik, Rackem, TjP |
|           11 |     3674 | 2024-01-31 | Virtus.pro         | L   | 0.120      | -            | -                | -                | -         |    -0.02 | asap, chelleos, nettik, Rackem, TjP |
|           10 |     3762 | 2024-01-26 | Bad News Kangaroos | L   | 0.084      | -            | -                | -                | -         |    -2.28 | asap, chelleos, nettik, Rackem, TjP |
|            9 |     3777 | 2024-01-25 | Mindfreak          | W   | 0.078      | -            | -                | -                | -         |     0.36 | asap, chelleos, nettik, Rackem, TjP |
|            8 |     3792 | 2024-01-24 | Blitz              | W   | 0.071      | -            | -                | -                | -         |     0.19 | asap, chelleos, nettik, Rackem, TjP |
|            7 |     3816 | 2024-01-23 | Mindfreak          | L   | 0.064      | -            | -                | -                | -         |    -1.73 | asap, chelleos, nettik, Rackem, TjP |
|            6 |     3841 | 2024-01-22 | Bad News Kangaroos | W   | 0.059      | -            | -                | -                | -         |     0.99 | asap, chelleos, nettik, Rackem, TjP |
|            5 |     3844 | 2024-01-22 | Mindfreak          | L   | 0.057      | -            | -                | -                | -         |    -1.55 | asap, chelleos, nettik, Rackem, TjP |
|            4 |     3875 | 2024-01-20 | FlyQuest           | L   | 0.050      | -            | -                | -                | -         |    -0.09 | asap, chelleos, nettik, Rackem, TjP |
|            3 |     3880 | 2024-01-20 | Bad News Kangaroos | L   | 0.049      | -            | -                | -                | -         |    -0.73 | asap, chelleos, nettik, Rackem, TjP |
|            2 |     3977 | 2024-01-19 | Mindfreak          | W   | 0.037      | -            | -                | -                | -         |     0.17 | asap, jhd, nettik, Rackem, TjP      |
|            1 |     3985 | 2024-01-18 | iM Apartments      | W   | 0.037      | -            | -                | -                | -         |     0.10 | asap, jhd, nettik, Rackem, TjP      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,418.60)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.984 | $2,000.00      | $1,968.44       |
| 2024-04-28 |      0.705 | $3,000.00      | $2,113.93       |
| 2024-02-02 |      0.134 | $2,500.00      | $336.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
