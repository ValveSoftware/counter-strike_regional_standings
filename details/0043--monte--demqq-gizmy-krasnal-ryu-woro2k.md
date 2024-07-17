### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, Gizmy, kRaSnaL, ryu, Woro2k<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [43](../standings_global.md)<br />
Regional Rank: [31]( ../standings_europe.md)<br />
Final Rank Value:  1150.6<br />
<br />
Final Rank Value (1150.6) = Starting Rank Value (1124.7) + Head To Head Adjustments (25.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.503[<sup>1</sup>](#table2)
- Bounty Collected: 0.432[<sup>2</sup>](#table1)
- Opponent Network: 0.134[<sup>2</sup>](#table1)
- LAN Wins: 0.281[<sup>2</sup>](#table1)

The average of these factors is 0.337<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1124.7
- 400 + ( ( 0.337 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1124.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |     1625 | 2024-05-07 | FaZe              | L   | 0.728      | -            | -                | -                | -         |    -0.29 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           34 |     1665 | 2024-05-05 | FURIA             | W   | 0.714      | 0.889        | 0.253 (0.161)    | 0.483 (0.306)    | 1 (0.714) |    20.60 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           33 |     1686 | 2024-05-04 | FORZE             | W   | 0.706      | 0.889        | 0.095 (0.059)    | 0.269 (0.169)    | 1 (0.706) |     8.47 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           32 |     1719 | 2024-05-02 | ENCE              | L   | 0.694      | -            | -                | -                | -         |    -4.06 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           31 |     1740 | 2024-05-01 | Liquid            | L   | 0.688      | -            | -                | -                | -         |    -1.59 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           30 |     1766 | 2024-04-30 | FORZE             | W   | 0.681      | 0.889        | 0.095 (0.057)    | 0.269 (0.163)    | 1 (0.681) |     8.04 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           29 |     2019 | 2024-04-19 | OG                | L   | 0.608      | -            | -                | -                | -         |    -7.60 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           28 |     2087 | 2024-04-18 | paiN              | L   | 0.600      | -            | -                | -                | -         |    -1.52 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           27 |     2206 | 2024-04-13 | Rebels            | W   | 0.567      | 0.500        | 0.052 (0.015)    | 0.575 (0.163)    | 0 (0.000) |     7.54 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           26 |     2221 | 2024-04-12 | Sangal            | W   | 0.560      | 0.500        | 0.232 (0.065)    | 0.893 (0.250)    | 0 (0.000) |     9.11 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           25 |     2510 | 2024-04-03 | Metizport         | L   | 0.501      | -            | -                | -                | -         |   -10.33 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           24 |     2526 | 2024-04-03 | Apeks             | W   | 0.500      | -            | -                | -                | 0 (0.000) |     6.21 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           23 |     2551 | 2024-04-02 | GamerLegion       | W   | 0.494      | 0.143        | 0.244 (0.017)    | 0.333 (0.023)    | 0 (0.000) |    10.73 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           22 |     2561 | 2024-04-02 | Ninjas in Pyjamas | L   | 0.493      | -            | -                | -                | -         |    -0.28 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           21 |     2586 | 2024-03-31 | RUSH B            | L   | 0.480      | -            | -                | -                | -         |   -12.15 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           20 |     2616 | 2024-03-28 | Betera            | L   | 0.461      | -            | -                | -                | -         |   -12.99 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           19 |     2684 | 2024-03-26 | System5           | W   | 0.448      | 0.500        | -                | 0.108 (0.024)    | 0 (0.000) |     1.26 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           18 |     2912 | 2024-03-13 | PERA              | W   | 0.361      | 0.500        | -                | 0.454 (0.082)    | -         |     3.53 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           17 |     3016 | 2024-03-09 | Metizport         | L   | 0.334      | -            | -                | -                | -         |    -7.34 | DemQQ, kRaSnaL, leen, sdy, Woro2k   |
|           16 |     3055 | 2024-03-07 | Imperial          | W   | 0.322      | 0.535        | 0.386 (0.067)    | 0.607 (0.105)    | -         |     8.94 | DemQQ, kRaSnaL, leen, sdy, Woro2k   |
|           15 |     3126 | 2024-03-05 | SAW               | L   | 0.308      | -            | -                | -                | -         |    -3.06 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           14 |     3192 | 2024-03-03 | Gaimin Gladiators | L   | 0.292      | -            | -                | -                | -         |    -4.92 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k |
|           13 |     3197 | 2024-03-02 | 3DMAX             | L   | 0.288      | -            | -                | -                | -         |    -3.29 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k |
|           12 |     3240 | 2024-02-29 | PARIVISION        | W   | 0.273      | 0.500        | -                | 0.424 (0.058)    | -         |     2.53 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k |
|           11 |     3408 | 2024-02-21 | Astralis          | L   | 0.219      | -            | -                | -                | -         |    -0.10 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           10 |     3438 | 2024-02-20 | Apeks             | L   | 0.212      | -            | -                | -                | -         |    -4.19 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            9 |     3454 | 2024-02-19 | Nexus             | W   | 0.207      | -            | -                | -                | 1 (0.207) |     1.20 | br0, DemQQ, Gizmy, kRaSnaL, Woro2k  |
|            8 |     3463 | 2024-02-19 | Gaimin Gladiators | L   | 0.206      | -            | -                | -                | -         |    -3.58 | br0, DemQQ, Gizmy, kRaSnaL, Woro2k  |
|            7 |     3472 | 2024-02-18 | Aurora            | W   | 0.202      | 0.143        | 0.514 (0.015)    | -                | -         |     6.05 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            6 |     3475 | 2024-02-18 | SINNERS           | W   | 0.201      | -            | -                | -                | -         |     3.02 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            5 |     3503 | 2024-02-17 | Aurora            | W   | 0.193      | 0.143        | 0.514 (0.014)    | -                | -         |     5.82 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            4 |     3508 | 2024-02-17 | The Chosen Few    | W   | 0.193      | -            | -                | -                | -         |     0.52 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            3 |     3707 | 2024-02-06 | G2                | L   | 0.120      | -            | -                | -                | -         |    -0.03 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            2 |     3717 | 2024-02-05 | Cloud9            | W   | 0.113      | 1.000        | 0.119 (0.013)    | -                | 1 (0.113) |     2.18 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            1 |     3740 | 2024-02-04 | GamerLegion       | L   | 0.106      | -            | -                | -                | -         |    -2.50 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,194.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.948 | $4,000.00      | $3,790.42       |
| 2024-05-12 |      0.760 | $17,500.00     | $13,304.29      |
| 2024-04-20 |      0.615 | $5,000.00      | $3,075.95       |
| 2024-03-10 |      0.341 | $7,500.00      | $2,560.36       |
| 2024-02-11 |      0.154 | $16,000.00     | $2,462.97       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
