### Roster Details<br />
Team Name: RUSH B<br />
Roster: executor, kinqie, Kiro, tex1y, z1Nny<br />
Global Rank: [113](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_30.md)<br />
Regional Rank: [79]( ../../standings_europe_2024_10_30.md)<br />
<br />
Final Rank Value:  829.6<br />
<br />
Final Rank Value (829.6) = Starting Rank Value (823.1) + Head To Head Adjustments (6.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.366[<sup>1</sup>](#table2)
- Bounty Collected: 0.375[<sup>2</sup>](#table1)
- Opponent Network: 0.113[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.213<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 823.1
- 400 + ( ( 0.213 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 823.1


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
|           34 |       73 | 2024-10-26 | ECSTATIC        | L   | 1.000      | -            | -                | -                | -         |    -8.43 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           33 |      204 | 2024-10-19 | Rhyno           | W   | 1.000      | 0.354        | 0.041 (0.015)    | 0.431 (0.153)    | 0 (0.000) |    18.51 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           32 |      331 | 2024-10-13 | FAVBET          | L   | 1.000      | -            | -                | -                | -         |    -9.20 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           31 |      522 | 2024-10-05 | NAVI Junior     | W   | 1.000      | 0.354        | 0.131 (0.046)    | 0.735 (0.260)    | 0 (0.000) |    23.96 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           30 |      784 | 2024-09-28 | GUN5            | L   | 0.984      | -            | -                | -                | -         |    -5.79 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           29 |     1258 | 2024-09-14 | ARCRED          | L   | 0.893      | -            | -                | -                | -         |   -11.41 | executor, Gospadarov, kinqie, Kiro, tex1y |
|           28 |     1271 | 2024-09-14 | devils.one      | L   | 0.892      | -            | -                | -                | -         |   -15.79 | executor, Gospadarov, kinqie, Kiro, tex1y |
|           27 |     1320 | 2024-09-12 | Nexus           | L   | 0.880      | -            | -                | -                | -         |   -14.79 | executor, Gospadarov, kinqie, Kiro, tex1y |
|           26 |     1526 | 2024-09-05 | HOTU            | L   | 0.833      | -            | -                | -                | -         |   -13.82 | executor, Gospadarov, kinqie, Kiro, tex1y |
|           25 |     1640 | 2024-09-01 | Insilio         | L   | 0.806      | -            | -                | -                | -         |    -9.31 | executor, Gospadarov, kinqie, Kiro, tex1y |
|           24 |     2124 | 2024-08-20 | B8              | L   | 0.727      | -            | -                | -                | -         |    -1.48 | executor, kinqie, Kiro, nota, tex1y       |
|           23 |     2310 | 2024-08-13 | PARIVISION      | L   | 0.681      | -            | -                | -                | -         |    -4.01 | executor, kinqie, Kiro, nota, tex1y       |
|           22 |     2364 | 2024-08-12 | ARCRED          | W   | 0.674      | 0.500        | 0.023 (0.008)    | 0.285 (0.096)    | 0 (0.000) |    10.79 | executor, kinqie, Kiro, nota, tex1y       |
|           21 |     2624 | 2024-08-04 | BC.Game         | L   | 0.619      | -            | -                | -                | -         |    -9.52 | executor, kinqie, Kiro, nota, tex1y       |
|           20 |     2661 | 2024-08-03 | Alliance        | W   | 0.612      | 0.342        | 0.008 (0.002)    | 0.354 (0.074)    | 0 (0.000) |     7.49 | executor, kinqie, Kiro, nota, tex1y       |
|           19 |     2700 | 2024-08-02 | Astralis Talent | W   | 0.605      | 0.342        | -                | 0.138 (0.029)    | 0 (0.000) |     4.22 | executor, kinqie, Kiro, nota, tex1y       |
|           18 |     2811 | 2024-07-30 | Rebels          | W   | 0.587      | 0.500        | 0.066 (0.019)    | 0.476 (0.140)    | 0 (0.000) |    12.65 | executor, kinqie, Kiro, nota, tex1y       |
|           17 |     3041 | 2024-07-23 | SINNERS         | W   | 0.541      | 0.500        | 0.187 (0.051)    | 0.890 (0.241)    | 0 (0.000) |    14.86 | executor, kinqie, Kiro, nota, tex1y       |
|           16 |     3168 | 2024-07-19 | SAW             | L   | 0.513      | -            | -                | -                | -         |    -0.13 | executor, kinqie, Kiro, nota, tex1y       |
|           15 |     3279 | 2024-07-17 | Apogee          | L   | 0.501      | -            | -                | -                | -         |    -8.00 | executor, kinqie, Kiro, nota, tex1y       |
|           14 |     3386 | 2024-07-15 | Sangal          | L   | 0.487      | -            | -                | -                | -         |    -0.38 | executor, kinqie, Kiro, nota, tex1y       |
|           13 |     3798 | 2024-06-10 | PARIVISION      | L   | 0.252      | -            | -                | -                | -         |    -1.57 | executor, kinqie, Kiro, nota, tex1y       |
|           12 |     3805 | 2024-06-10 | SAW             | L   | 0.252      | -            | -                | -                | -         |    -0.06 | executor, kinqie, Kiro, nota, tex1y       |
|           11 |     3810 | 2024-06-10 | Monte           | W   | 0.251      | -            | -                | -                | 0 (0.000) |     3.23 | executor, kinqie, Kiro, nota, tex1y       |
|           10 |     3841 | 2024-06-09 | 9 Pandas        | W   | 0.246      | 0.143        | 0.077 (0.003)    | 0.723 (0.025)    | 0 (0.000) |     6.02 | executor, kinqie, Kiro, nota, tex1y       |
|            9 |     3852 | 2024-06-09 | Aurora          | W   | 0.246      | 0.143        | 0.190 (0.007)    | -                | 0 (0.000) |     6.85 | executor, kinqie, Kiro, nota, tex1y       |
|            8 |     3857 | 2024-06-09 | SINNERS         | W   | 0.245      | 0.143        | 0.187 (0.007)    | 0.890 (0.031)    | -         |     6.99 | executor, kinqie, Kiro, nota, tex1y       |
|            7 |     3867 | 2024-06-09 | 3DMAX           | L   | 0.245      | -            | -                | -                | -         |    -0.14 | executor, kinqie, Kiro, nota, tex1y       |
|            6 |     4009 | 2024-06-06 | Aurora          | L   | 0.227      | -            | -                | -                | -         |    -0.77 | executor, kinqie, Kiro, nota, tex1y       |
|            5 |     4078 | 2024-06-05 | SINNERS         | L   | 0.220      | -            | -                | -                | -         |    -0.65 | executor, kinqie, Kiro, nota, tex1y       |
|            4 |     4128 | 2024-06-04 | SAW             | W   | 0.214      | 0.500        | 0.540 (0.058)    | 0.768 (0.082)    | -         |     6.69 | executor, kinqie, Kiro, nota, tex1y       |
|            3 |     4926 | 2024-05-07 | MOUZ NXT        | L   | 0.026      | -            | -                | -                | -         |    -0.34 | executor, kinqie, Kiro, nota, tex1y       |
|            2 |     4952 | 2024-05-05 | Sampi           | L   | 0.014      | -            | -                | -                | -         |    -0.10 | executor, kinqie, Kiro, nota, tex1y       |
|            1 |     4977 | 2024-05-04 | HAVU            | W   | 0.006      | -            | -                | -                | -         |     0.03 | executor, kinqie, Kiro, nota, tex1y       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,464.39)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-08-04 |      0.619 | $3,000.00      | $1,856.76       |
| 2024-06-09 |      0.247 | $6,500.00      | $1,607.64       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
