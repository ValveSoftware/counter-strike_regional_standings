### Roster Details<br />
Team Name: Apogee<br />
Roster: Demho, Prism, Qlocuu, swiz, virtuoso<br />
Global Rank: [123](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [88]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  800.2<br />
<br />
Final Rank Value (800.2) = Starting Rank Value (754.7) + Head To Head Adjustments (45.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.338[<sup>1</sup>](#table2)
- Bounty Collected: 0.317[<sup>2</sup>](#table1)
- Opponent Network: 0.060[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.179<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 754.7
- 400 + ( ( 0.179 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 754.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |     1404 | 2024-10-18 | NewBALLS          | L   | 0.577      | -            | -                | -                | -         |   -14.94 | Demho, Prism, Qlocuu, swiz, virtuoso |
|           32 |     1488 | 2024-10-14 | ECLOT             | L   | 0.552      | -            | -                | -                | -         |    -1.40 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           31 |     1528 | 2024-10-11 | Insomnia          | L   | 0.532      | -            | -                | -                | -         |   -12.25 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           30 |     1540 | 2024-10-10 | 500 Rush          | L   | 0.525      | -            | -                | -                | -         |   -12.50 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           29 |     1743 | 2024-10-04 | TSM               | L   | 0.483      | -            | -                | -                | -         |    -6.01 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           28 |     1774 | 2024-10-03 | Passion UA        | L   | 0.477      | -            | -                | -                | -         |    -2.55 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           27 |     1799 | 2024-10-02 | Betera            | W   | 0.473      | -            | -                | -                | 0 (0.000) |     4.31 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           26 |     1849 | 2024-10-01 | Rebels            | W   | 0.466      | 0.500        | 0.034 (0.008)    | 0.299 (0.070)    | 0 (0.000) |     7.66 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           25 |     1865 | 2024-10-01 | TSM               | W   | 0.464      | 0.371        | 0.034 (0.006)    | 0.401 (0.069)    | 0 (0.000) |     9.18 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           24 |     1916 | 2024-09-29 | ALTERNATE aTTaX   | W   | 0.450      | 0.371        | 0.074 (0.012)    | 0.680 (0.113)    | 0 (0.000) |    11.41 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           23 |     1943 | 2024-09-28 | 9z                | L   | 0.445      | -            | -                | -                | -         |    -3.82 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           22 |     1974 | 2024-09-27 | OG                | W   | 0.440      | 0.143        | 0.171 (0.011)    | -                | 0 (0.000) |     9.37 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           21 |     1989 | 2024-09-27 | SAW               | L   | 0.438      | -            | -                | -                | -         |    -0.68 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           20 |     1996 | 2024-09-27 | Verdant           | W   | 0.437      | 0.371        | 0.050 (0.008)    | 0.427 (0.069)    | 0 (0.000) |     8.94 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           19 |     2024 | 2024-09-26 | ARCRED            | W   | 0.432      | 0.143        | 0.047 (0.003)    | -                | 0 (0.000) |     6.56 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           18 |     2032 | 2024-09-26 | Gaimin Gladiators | W   | 0.432      | 0.143        | 0.080 (0.005)    | 0.875 (0.054)    | 0 (0.000) |     9.87 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           17 |     2134 | 2024-09-24 | Monte             | L   | 0.419      | -            | -                | -                | -         |    -2.64 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           16 |     2168 | 2024-09-23 | Illuminar         | W   | 0.413      | -            | -                | -                | 0 (0.000) |     9.57 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           15 |     2182 | 2024-09-23 | Johnny Speeds     | L   | 0.411      | -            | -                | -                | -         |    -2.20 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           14 |     2293 | 2024-09-19 | Verdant           | W   | 0.384      | 0.371        | 0.050 (0.007)    | 0.427 (0.061)    | 0 (0.000) |     8.57 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           13 |     2379 | 2024-09-16 | NAVI Junior       | L   | 0.363      | -            | -                | -                | -         |    -1.96 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           12 |     2402 | 2024-09-15 | L&G               | L   | 0.358      | -            | -                | -                | -         |    -4.60 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           11 |     2414 | 2024-09-15 | Astralis Talent   | W   | 0.356      | 0.333        | -                | 0.483 (0.057)    | -         |     5.68 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           10 |     2446 | 2024-09-14 | ENCE Academy      | W   | 0.350      | 0.333        | 0.014 (0.002)    | 0.285 (0.033)    | -         |     5.48 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            9 |     2462 | 2024-09-13 | NAVI Junior       | L   | 0.345      | -            | -                | -                | -         |    -1.81 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            8 |     2471 | 2024-09-13 | UNiTY             | W   | 0.344      | 0.333        | 0.070 (0.008)    | 0.279 (0.032)    | -         |     7.88 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            7 |     2496 | 2024-09-12 | NAVI Junior       | L   | 0.338      | -            | -                | -                | -         |    -1.73 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            6 |     2533 | 2024-09-11 | JiJieHao          | W   | 0.331      | -            | -                | -                | -         |     4.04 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            5 |     2571 | 2024-09-10 | CPH Wolves        | W   | 0.323      | 0.333        | -                | 0.350 (0.038)    | -         |     5.23 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            4 |     2646 | 2024-09-06 | GUN5              | L   | 0.300      | -            | -                | -                | -         |    -1.25 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            3 |     2677 | 2024-09-05 | SovvyKiNG         | W   | 0.293      | -            | -                | -                | -         |     2.46 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            2 |     3729 | 2024-08-06 | SINNERS           | L   | 0.092      | -            | -                | -                | -         |    -0.36 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            1 |     3949 | 2024-07-31 | SAW               | L   | 0.052      | -            | -                | -                | -         |    -0.06 | POLO, Prism, Qlocuu, swiz, virtuoso  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,431.64)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.592 | $1,000.00      | $591.68         |
| 2024-10-05 |      0.490 | $3,000.00      | $1,469.88       |
| 2024-09-17 |      0.370 | $1,000.00      | $370.07         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
