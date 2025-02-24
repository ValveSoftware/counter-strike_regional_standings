### Roster Details<br />
Team Name: RUSH B<br />
Roster: executor, kinqie, KIRO, tex1y, z1Nny<br />
Global Rank: [88](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [62]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  798.7<br />
<br />
Final Rank Value (798.7) = Starting Rank Value (832.3) + Head To Head Adjustments (-33.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.387[<sup>1</sup>](#table2)
- Bounty Collected: 0.324[<sup>2</sup>](#table1)
- Opponent Network: 0.113[<sup>2</sup>](#table1)
- LAN Wins: 0.083[<sup>2</sup>](#table1)

The average of these factors is 0.227<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 832.3
- 400 + ( ( 0.227 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 832.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |        1 | 2025-02-24 | PARIVISION      | L   | 1.000      | -            | -                | -                | -         |   -17.45 | executor, kinqie, KIRO, tex1y, z1Nny      |
|           30 |       14 | 2025-02-23 | ESC             | W   | 1.000      | 0.143        | -                | 0.149 (0.021)    | 0 (0.000) |     6.43 | executor, kinqie, KIRO, tex1y, z1Nny      |
|           29 |       42 | 2025-02-22 | Rebels          | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.334 (0.048)    | 0 (0.000) |    11.04 | executor, kinqie, KIRO, tex1y, z1Nny      |
|           28 |       51 | 2025-02-21 | Fire Flux       | L   | 1.000      | -            | -                | -                | -         |   -12.46 | executor, kinqie, KIRO, tex1y, z1Nny      |
|           27 |       66 | 2025-02-21 | Astralis Talent | L   | 1.000      | -            | -                | -                | -         |   -22.49 | executor, kinqie, KIRO, tex1y, z1Nny      |
|           26 |      106 | 2025-02-17 | NAVI Junior     | L   | 1.000      | -            | -                | -                | -         |   -13.24 | executor, kinqie, KIRO, tex1y, z1Nny      |
|           25 |      129 | 2025-02-17 | fnatic          | L   | 1.000      | -            | -                | -                | -         |    -8.05 | executor, kinqie, KIRO, tex1y, z1Nny      |
|           24 |      173 | 2025-02-15 | kONO            | L   | 1.000      | -            | -                | -                | -         |   -24.15 | executor, kinqie, KIRO, tex1y, z1Nny      |
|           23 |      202 | 2025-02-14 | GTZ             | W   | 1.000      | 0.435        | 0.077 (0.033)    | 0.411 (0.179)    | 0 (0.000) |    20.52 | executor, kinqie, KIRO, tex1y, z1Nny      |
|           22 |      229 | 2025-02-13 | GUN5            | L   | 1.000      | -            | -                | -                | -         |    -9.58 | executor, kinqie, KIRO, tex1y, z1Nny      |
|           21 |      294 | 2025-02-10 | Sashi           | W   | 1.000      | 0.435        | 0.013 (0.006)    | 0.685 (0.298)    | 0 (0.000) |    18.65 | executor, kinqie, KIRO, tex1y, z1Nny      |
|           20 |      342 | 2025-02-09 | OG              | W   | 1.000      | 0.143        | 0.061 (0.009)    | 0.869 (0.124)    | 0 (0.000) |    18.25 | executor, kinqie, KIRO, tex1y, z1Nny      |
|           19 |      400 | 2025-02-08 | Zero Tenacity   | W   | 1.000      | 0.143        | 0.027 (0.004)    | 0.657 (0.094)    | 0 (0.000) |    15.04 | executor, kinqie, KIRO, tex1y, z1Nny      |
|           18 |      493 | 2025-02-05 | ToxicAndCritic  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.79 | executor, kinqie, KIRO, tex1y, z1Nny      |
|           17 |      506 | 2025-02-04 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |   -15.32 | executor, kinqie, KIRO, tex1y, z1Nny      |
|           16 |      707 | 2024-12-22 | Zero Tenacity   | W   | 0.773      | 0.387        | 0.027 (0.008)    | 0.657 (0.197)    | 0 (0.000) |    13.43 | executor, kinqie, KIRO, tex1y, z1Nny      |
|           15 |      713 | 2024-12-22 | PORTUGAL        | L   | 0.772      | -            | -                | -                | -         |   -14.75 | executor, kinqie, KIRO, tex1y, z1Nny      |
|           14 |      796 | 2024-12-15 | FORZE Reload    | W   | 0.725      | 0.338        | 0.014 (0.003)    | 0.121 (0.030)    | 1 (0.725) |     7.45 | executor, kinqie, KIRO, tex1y, z1Nny      |
|           13 |     1694 | 2024-11-03 | ARCRED          | L   | 0.446      | -            | -                | -                | -         |    -9.45 | executor, kinqie, KIRO, tex1y, z1Nny      |
|           12 |     1723 | 2024-11-02 | 1WIN            | W   | 0.440      | -            | -                | -                | 0 (0.000) |     3.70 | executor, kinqie, KIRO, tex1y, z1Nny      |
|           11 |     1746 | 2024-11-01 | Nuclear TigeRES | W   | 0.433      | 0.396        | 0.004 (0.001)    | -                | -         |     2.27 | executor, kinqie, KIRO, tex1y, z1Nny      |
|           10 |     1866 | 2024-10-26 | ECSTATIC        | L   | 0.393      | -            | -                | -                | -         |    -5.59 | executor, kinqie, KIRO, tex1y, z1Nny      |
|            9 |     1998 | 2024-10-19 | GTZ             | W   | 0.344      | 0.354        | 0.077 (0.009)    | 0.411 (0.050)    | -         |     8.53 | executor, kinqie, KIRO, tex1y, z1Nny      |
|            8 |     2126 | 2024-10-13 | FAVBET          | L   | 0.304      | -            | -                | -                | -         |    -5.18 | executor, kinqie, KIRO, tex1y, z1Nny      |
|            7 |     2336 | 2024-10-05 | NAVI Junior     | W   | 0.252      | 0.354        | 0.088 (0.008)    | 1.000 (0.089)    | -         |     5.30 | executor, kinqie, KIRO, tex1y, z1Nny      |
|            6 |     2612 | 2024-09-28 | GUN5            | L   | 0.203      | -            | -                | -                | -         |    -2.21 | executor, kinqie, KIRO, tex1y, z1Nny      |
|            5 |     3101 | 2024-09-14 | ARCRED          | L   | 0.112      | -            | -                | -                | -         |    -2.30 | executor, Gospadarov, kinqie, KIRO, tex1y |
|            4 |     3114 | 2024-09-14 | devils.one      | L   | 0.111      | -            | -                | -                | -         |    -2.60 | executor, Gospadarov, kinqie, KIRO, tex1y |
|            3 |     3165 | 2024-09-12 | Nexus           | L   | 0.099      | -            | -                | -                | -         |    -0.44 | executor, Gospadarov, kinqie, KIRO, tex1y |
|            2 |     3372 | 2024-09-05 | HOTU            | L   | 0.052      | -            | -                | -                | -         |    -1.21 | executor, Gospadarov, kinqie, KIRO, tex1y |
|            1 |     3489 | 2024-09-01 | Insilio         | L   | 0.025      | -            | -                | -                | -         |    -0.55 | executor, Gospadarov, kinqie, KIRO, tex1y |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,751.12)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      0.773 | $2,623.00      | $2,028.62       |
| 2024-12-15 |      0.725 | $7,500.00      | $5,440.36       |
| 2024-11-03 |      0.446 | $5,112.00      | $2,282.14       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
