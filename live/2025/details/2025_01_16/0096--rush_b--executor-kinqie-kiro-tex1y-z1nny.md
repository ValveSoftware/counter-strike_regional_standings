### Roster Details<br />
Team Name: RUSH B<br />
Roster: executor, kinqie, Kiro, tex1y, z1Nny<br />
Global Rank: [96](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [68]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  879.5<br />
<br />
Final Rank Value (879.5) = Starting Rank Value (888.0) + Head To Head Adjustments (-8.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.459[<sup>1</sup>](#table2)
- Bounty Collected: 0.346[<sup>2</sup>](#table1)
- Opponent Network: 0.060[<sup>2</sup>](#table1)
- LAN Wins: 0.119[<sup>2</sup>](#table1)

The average of these factors is 0.246<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 888.0
- 400 + ( ( 0.246 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 888.0


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
|           24 |      116 | 2024-12-22 | Zero Tenacity   | W   | 1.000      | 0.387        | 0.084 (0.032)    | 0.572 (0.222)    | 0 (0.000) |    22.21 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           23 |      122 | 2024-12-22 | PORTUGAL        | L   | 1.000      | -            | -                | -                | -         |   -17.95 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           22 |      204 | 2024-12-15 | FORZE Reload    | W   | 0.985      | 0.338        | 0.032 (0.010)    | 0.138 (0.046)    | 1 (0.985) |    10.61 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           21 |     1089 | 2024-11-03 | ARCRED          | L   | 0.706      | -            | -                | -                | -         |   -14.68 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           20 |     1118 | 2024-11-02 | 1WIN            | W   | 0.699      | 0.396        | 0.009 (0.002)    | 0.076 (0.021)    | 0 (0.000) |     5.87 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           19 |     1140 | 2024-11-01 | Nuclear TigeRES | W   | 0.692      | 0.396        | 0.005 (0.001)    | 0.085 (0.023)    | 0 (0.000) |     3.08 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           18 |     1258 | 2024-10-26 | ECSTATIC        | L   | 0.652      | -            | -                | -                | -         |    -7.09 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           17 |     1389 | 2024-10-19 | PEGADA          | W   | 0.604      | 0.354        | 0.184 (0.039)    | 0.280 (0.060)    | 0 (0.000) |    16.35 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           16 |     1516 | 2024-10-13 | FAVBET          | L   | 0.564      | -            | -                | -                | -         |    -7.55 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           15 |     1707 | 2024-10-05 | NAVI Junior     | W   | 0.511      | 0.354        | 0.204 (0.037)    | 1.000 (0.181)    | 0 (0.000) |    12.12 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           14 |     1969 | 2024-09-28 | GUN5            | L   | 0.463      | -            | -                | -                | -         |    -3.32 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           13 |     2443 | 2024-09-14 | ARCRED          | L   | 0.371      | -            | -                | -                | -         |    -7.11 | executor, Gospadarov, kinqie, Kiro, tex1y |
|           12 |     2456 | 2024-09-14 | devils.one      | L   | 0.370      | -            | -                | -                | -         |    -8.31 | executor, Gospadarov, kinqie, Kiro, tex1y |
|           11 |     2505 | 2024-09-12 | Nexus           | L   | 0.359      | -            | -                | -                | -         |    -0.51 | executor, Gospadarov, kinqie, Kiro, tex1y |
|           10 |     2711 | 2024-09-05 | HOTU            | L   | 0.311      | -            | -                | -                | -         |    -6.83 | executor, Gospadarov, kinqie, Kiro, tex1y |
|            9 |     2825 | 2024-09-01 | Insilio         | L   | 0.285      | -            | -                | -                | -         |    -5.51 | executor, Gospadarov, kinqie, Kiro, tex1y |
|            8 |     3309 | 2024-08-20 | B8              | L   | 0.206      | -            | -                | -                | -         |    -1.29 | executor, kinqie, Kiro, nota, tex1y       |
|            7 |     3495 | 2024-08-13 | PARIVISION      | L   | 0.159      | -            | -                | -                | -         |    -2.60 | executor, kinqie, Kiro, nota, tex1y       |
|            6 |     3549 | 2024-08-12 | ARCRED          | W   | 0.152      | 0.500        | 0.047 (0.004)    | 0.174 (0.013)    | 0 (0.000) |     1.72 | executor, kinqie, Kiro, nota, tex1y       |
|            5 |     3809 | 2024-08-04 | BC.Game         | L   | 0.097      | -            | -                | -                | -         |    -1.59 | executor, kinqie, Kiro, nota, tex1y       |
|            4 |     3846 | 2024-08-03 | Alliance        | W   | 0.091      | 0.342        | 0.037 (0.001)    | 0.385 (0.012)    | 0 (0.000) |     1.67 | executor, kinqie, Kiro, nota, tex1y       |
|            3 |     3885 | 2024-08-02 | Astralis Talent | W   | 0.083      | 0.342        | -                | 0.476 (0.014)    | 0 (0.000) |     0.91 | executor, kinqie, Kiro, nota, tex1y       |
|            2 |     3996 | 2024-07-30 | Rebels          | W   | 0.066      | 0.500        | 0.035 (0.001)    | 0.336 (0.011)    | 0 (0.000) |     0.84 | executor, kinqie, Kiro, nota, tex1y       |
|            1 |     4226 | 2024-07-23 | SINNERS         | W   | 0.019      | 0.500        | 0.101 (0.001)    | -                | -         |     0.47 | executor, kinqie, Kiro, nota, tex1y       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,134.15)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      1.000 | $2,623.00      | $2,623.00       |
| 2024-12-15 |      0.985 | $7,500.00      | $7,387.34       |
| 2024-11-03 |      0.706 | $5,112.00      | $3,609.20       |
| 2024-10-20 |      0.611 | $2,000.00      | $1,222.72       |
| 2024-08-04 |      0.097 | $3,000.00      | $291.89         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
