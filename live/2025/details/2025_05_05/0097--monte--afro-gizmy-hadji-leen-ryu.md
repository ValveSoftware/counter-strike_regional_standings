### Roster Details<br />
Team Name: Monte<br />
Roster: afro, Gizmy, hAdji, leen, ryu<br />
Global Rank: [97](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [60]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  739.4<br />
<br />
Final Rank Value (739.4) = Starting Rank Value (745.2) + Head To Head Adjustments (-5.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.304[<sup>1</sup>](#table2)
- Bounty Collected: 0.310[<sup>2</sup>](#table1)
- Opponent Network: 0.148[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.190<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 745.2
- 400 + ( ( 0.190 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 745.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      174 | 2025-04-21 | Fire Flux        | L   | 1.000      | -            | -                | -                | -         |   -13.03 | afro, Gizmy, hAdji, leen, ryu    |
|           33 |      251 | 2025-04-17 | Sangal           | L   | 1.000      | -            | -                | -                | -         |   -18.73 | afro, Gizmy, hAdji, leen, ryu    |
|           32 |      324 | 2025-04-14 | ECSTATIC         | L   | 1.000      | -            | -                | -                | -         |   -10.19 | afro, Gizmy, hAdji, leen, ryu    |
|           31 |      362 | 2025-04-12 | NOVAQ            | W   | 1.000      | 0.435        | 0.006 (0.003)    | 0.328 (0.143)    | 0 (0.000) |    12.54 | Gizmy, hAdji, leen, MoDo, ryu    |
|           30 |      673 | 2025-03-29 | BetBoom          | L   | 0.955      | -            | -                | -                | -         |    -5.17 | DemQQ, Gizmy, hades, leen, ryu   |
|           29 |      699 | 2025-03-29 | Sangal           | W   | 0.952      | 0.143        | 0.003 (0.000)    | 0.162 (0.022)    | 0 (0.000) |    11.10 | DemQQ, Gizmy, hades, leen, ryu   |
|           28 |      747 | 2025-03-28 | TNL              | L   | 0.947      | -            | -                | -                | -         |    -7.07 | DemQQ, Gizmy, hades, leen, ryu   |
|           27 |      824 | 2025-03-27 | OG               | W   | 0.940      | 0.143        | 0.053 (0.007)    | 1.000 (0.134)    | 0 (0.000) |    25.35 | DemQQ, Gizmy, hades, leen, ryu   |
|           26 |      965 | 2025-03-21 | Aurora           | L   | 0.898      | -            | -                | -                | -         |   -10.98 | DemQQ, Gizmy, hades, leen, ryu   |
|           25 |     1050 | 2025-03-17 | Alliance         | L   | 0.873      | -            | -                | -                | -         |   -13.67 | DemQQ, Gizmy, hades, leen, ryu   |
|           24 |     1116 | 2025-03-13 | RUSH B           | L   | 0.846      | -            | -                | -                | -         |   -13.93 | DemQQ, Gizmy, hades, leen, ryu   |
|           23 |     1146 | 2025-03-11 | 9 Pandas         | L   | 0.834      | -            | -                | -                | -         |    -6.19 | DemQQ, Gizmy, hades, leen, ryu   |
|           22 |     1152 | 2025-03-11 | ALASKA           | W   | 0.833      | 0.396        | 0.012 (0.004)    | 0.278 (0.092)    | 0 (0.000) |    10.37 | DemQQ, Gizmy, hades, leen, ryu   |
|           21 |     1181 | 2025-03-10 | 500              | L   | 0.827      | -            | -                | -                | -         |    -6.25 | DemQQ, Gizmy, hades, leen, ryu   |
|           20 |     1209 | 2025-03-09 | Nexus            | L   | 0.821      | -            | -                | -                | -         |    -9.06 | DemQQ, Gizmy, hades, leen, ryu   |
|           19 |     1247 | 2025-03-09 | ECLOT            | L   | 0.819      | -            | -                | -                | -         |    -5.68 | DemQQ, Gizmy, hades, leen, ryu   |
|           18 |     1318 | 2025-03-08 | BASEMENT BOYS    | W   | 0.812      | 0.143        | -                | 0.110 (0.013)    | 0 (0.000) |     4.24 | DemQQ, Gizmy, hades, leen, ryu   |
|           17 |     1323 | 2025-03-08 | PARIVISION       | W   | 0.812      | 0.435        | 0.012 (0.004)    | 0.903 (0.319)    | 0 (0.000) |    18.00 | DemQQ, Gizmy, hades, leen, ryu   |
|           16 |     1356 | 2025-03-07 | GUN5             | L   | 0.808      | -            | -                | -                | -         |    -7.82 | DemQQ, Gizmy, hades, leen, ryu   |
|           15 |     1428 | 2025-03-06 | Iberian Soul     | W   | 0.800      | 0.435        | 0.010 (0.004)    | 0.716 (0.249)    | 0 (0.000) |    15.93 | DemQQ, Gizmy, hades, leen, ryu   |
|           14 |     1470 | 2025-03-05 | GTZ              | W   | 0.792      | 0.435        | 0.028 (0.010)    | 0.336 (0.116)    | 0 (0.000) |    14.80 | DemQQ, Gizmy, leen, ryu, Woro2k  |
|           13 |     1479 | 2025-03-04 | Iberian Soul     | L   | 0.788      | -            | -                | -                | -         |    -7.91 | DemQQ, Gizmy, hades, leen, ryu   |
|           12 |     1487 | 2025-03-04 | Zero Tenacity    | W   | 0.786      | 0.435        | 0.008 (0.003)    | 0.439 (0.150)    | 0 (0.000) |    12.65 | DemQQ, Gizmy, hades, leen, ryu   |
|           11 |     1505 | 2025-03-03 | Spirit Academy   | L   | 0.780      | -            | -                | -                | -         |    -8.77 | DemQQ, Gizmy, hades, leen, ryu   |
|           10 |     1568 | 2025-02-28 | BC.Game          | W   | 0.761      | 0.435        | 0.075 (0.025)    | 0.722 (0.239)    | 0 (0.000) |    18.68 | DemQQ, Gizmy, hades, leen, ryu   |
|            9 |     1600 | 2025-02-27 | 9 Pandas         | L   | 0.752      | -            | -                | -                | -         |    -4.66 | DemQQ, Gizmy, hades, leen, ryu   |
|            8 |     1770 | 2025-02-20 | B8               | L   | 0.708      | -            | -                | -                | -         |    -1.69 | DemQQ, Gizmy, hades, leen, ryu   |
|            7 |     2501 | 2024-12-21 | AMKAL            | L   | 0.300      | -            | -                | -                | -         |    -6.05 | fnl, Gizmy, leen, ryu, shield    |
|            6 |     2508 | 2024-12-20 | Dark Cloud       | W   | 0.294      | 0.333        | 0.004 (0.000)    | -                | -         |     3.40 | AiyvaN, Gizmy, leen, ryu, shield |
|            5 |     2520 | 2024-12-19 | Betera           | W   | 0.287      | -            | -                | -                | -         |     1.72 | AiyvaN, Gizmy, leen, ryu, shield |
|            4 |     2804 | 2024-12-04 | FORZE Reload     | W   | 0.187      | -            | -                | -                | -         |     2.06 | fnl, Gizmy, leen, ryu, shield    |
|            3 |     2822 | 2024-12-03 | FLuffy Gangsters | W   | 0.180      | -            | -                | -                | -         |     1.77 | fnl, Gizmy, leen, ryu, shield    |
|            2 |     2838 | 2024-12-02 | Preasy           | W   | 0.175      | -            | -                | -                | -         |     0.70 | fnl, Gizmy, leen, ryu, shield    |
|            1 |     2991 | 2024-11-24 | TNL              | L   | 0.119      | -            | -                | -                | -         |    -2.27 | Burmylov, fnl, Gizmy, leen, ryu  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,834.36)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      0.300 | $3,000.00      | $899.15         |
| 2024-12-04 |      0.187 | $5,000.00      | $935.21         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
