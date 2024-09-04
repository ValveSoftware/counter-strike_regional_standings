### Roster Details<br />
Team Name: RUSH B<br />
Roster: executor, Gospadarov, kinqie, Kiro, tex1y<br />
Global Rank: [83](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_04.md)<br />
Regional Rank: [61]( ../../standings_europe_2024_09_04.md)<br />
<br />
Final Rank Value:  917.3<br />
<br />
Final Rank Value (917.3) = Starting Rank Value (855.5) + Head To Head Adjustments (61.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.377[<sup>1</sup>](#table2)
- Bounty Collected: 0.376[<sup>2</sup>](#table1)
- Opponent Network: 0.166[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.230<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 855.5
- 400 + ( ( 0.230 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 855.5


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
|           33 |       82 | 2024-09-01 | Insilio         | L   | 1.000      | -            | -                | -                | -         |   -15.25 | executor, Gospadarov, kinqie, Kiro, tex1y |
|           32 |      566 | 2024-08-20 | B8              | L   | 1.000      | -            | -                | -                | -         |    -7.92 | executor, kinqie, Kiro, nota, tex1y       |
|           31 |      752 | 2024-08-13 | PARIVISION      | L   | 1.000      | -            | -                | -                | -         |    -8.87 | executor, kinqie, Kiro, nota, tex1y       |
|           30 |      806 | 2024-08-12 | ARCRED          | W   | 1.000      | 0.500        | 0.033 (0.016)    | 0.440 (0.220)    | 0 (0.000) |    17.19 | executor, kinqie, Kiro, nota, tex1y       |
|           29 |     1066 | 2024-08-04 | BC.Game         | L   | 0.993      | -            | -                | -                | -         |   -14.85 | executor, kinqie, Kiro, nota, tex1y       |
|           28 |     1103 | 2024-08-03 | Alliance        | W   | 0.986      | 0.342        | -                | 0.377 (0.127)    | 0 (0.000) |    11.41 | executor, kinqie, Kiro, nota, tex1y       |
|           27 |     1142 | 2024-08-02 | Astralis Talent | W   | 0.978      | 0.342        | -                | 0.117 (0.039)    | 0 (0.000) |     5.96 | executor, kinqie, Kiro, nota, tex1y       |
|           26 |     1253 | 2024-07-30 | Rebels          | W   | 0.961      | 0.500        | 0.029 (0.014)    | 0.639 (0.307)    | 0 (0.000) |    17.96 | executor, kinqie, Kiro, nota, tex1y       |
|           25 |     1483 | 2024-07-23 | SINNERS         | W   | 0.914      | 0.500        | 0.084 (0.039)    | 1.000 (0.457)    | 0 (0.000) |    19.18 | executor, kinqie, Kiro, nota, tex1y       |
|           24 |     1610 | 2024-07-19 | SAW             | L   | 0.887      | -            | -                | -                | -         |    -1.25 | executor, kinqie, Kiro, nota, tex1y       |
|           23 |     1721 | 2024-07-17 | brazylijski luz | L   | 0.874      | -            | -                | -                | -         |   -18.32 | executor, kinqie, Kiro, nota, tex1y       |
|           22 |     1828 | 2024-07-15 | Sangal          | L   | 0.861      | -            | -                | -                | -         |    -3.54 | executor, kinqie, Kiro, nota, tex1y       |
|           21 |     2240 | 2024-06-10 | PARIVISION      | L   | 0.626      | -            | -                | -                | -         |    -5.56 | executor, kinqie, Kiro, nota, tex1y       |
|           20 |     2247 | 2024-06-10 | SAW             | L   | 0.625      | -            | -                | -                | -         |    -0.98 | executor, kinqie, Kiro, nota, tex1y       |
|           19 |     2252 | 2024-06-10 | Monte           | W   | 0.625      | 0.143        | 0.078 (0.007)    | -                | 0 (0.000) |    12.39 | executor, kinqie, Kiro, nota, tex1y       |
|           18 |     2283 | 2024-06-09 | 9 Pandas        | W   | 0.620      | 0.143        | 0.060 (0.005)    | 0.719 (0.064)    | 0 (0.000) |    13.99 | executor, kinqie, Kiro, nota, tex1y       |
|           17 |     2294 | 2024-06-09 | Aurora          | W   | 0.619      | 0.143        | 0.299 (0.026)    | 0.636 (0.056)    | 0 (0.000) |    18.21 | executor, kinqie, Kiro, nota, tex1y       |
|           16 |     2299 | 2024-06-09 | SINNERS         | W   | 0.619      | 0.143        | 0.084 (0.007)    | 1.000 (0.088)    | 0 (0.000) |    14.64 | executor, kinqie, Kiro, nota, tex1y       |
|           15 |     2309 | 2024-06-09 | 3DMAX           | L   | 0.618      | -            | -                | -                | -         |    -0.54 | executor, kinqie, Kiro, nota, tex1y       |
|           14 |     2451 | 2024-06-06 | Aurora          | L   | 0.601      | -            | -                | -                | -         |    -0.92 | executor, kinqie, Kiro, nota, tex1y       |
|           13 |     2520 | 2024-06-05 | SINNERS         | L   | 0.594      | -            | -                | -                | -         |    -4.75 | executor, kinqie, Kiro, nota, tex1y       |
|           12 |     2570 | 2024-06-04 | SAW             | W   | 0.587      | 0.500        | 0.323 (0.095)    | 0.768 (0.225)    | 0 (0.000) |    18.01 | executor, kinqie, Kiro, nota, tex1y       |
|           11 |     3368 | 2024-05-07 | MOUZ NXT        | L   | 0.400      | -            | -                | -                | -         |    -3.93 | executor, kinqie, Kiro, nota, tex1y       |
|           10 |     3394 | 2024-05-05 | Sampi           | L   | 0.387      | -            | -                | -                | -         |    -4.98 | executor, kinqie, Kiro, nota, tex1y       |
|            9 |     3419 | 2024-05-04 | HAVU            | W   | 0.380      | -            | -                | -                | -         |     2.13 | executor, kinqie, Kiro, nota, tex1y       |
|            8 |     3463 | 2024-05-02 | EYEBALLERS      | L   | 0.366      | -            | -                | -                | -         |    -5.41 | executor, kinqie, Kiro, nota, tex1y       |
|            7 |     3520 | 2024-04-29 | ENCE Academy    | W   | 0.348      | -            | -                | -                | -         |     2.85 | executor, kinqie, Kiro, nota, tex1y       |
|            6 |     4022 | 2024-04-10 | KOI             | L   | 0.221      | -            | -                | -                | -         |    -2.49 | executor, kinqie, Kiro, nota, tex1y       |
|            5 |     4075 | 2024-04-09 | PARIVISION      | W   | 0.214      | 0.500        | 0.045 (0.005)    | 0.751 (0.080)    | -         |     5.33 | executor, kinqie, Kiro, nota, tex1y       |
|            4 |     4311 | 2024-04-01 | Qiang           | L   | 0.161      | -            | -                | -                | -         |    -2.30 | executor, kinqie, Kiro, nota, tex1y       |
|            3 |     4320 | 2024-03-31 | Monte           | W   | 0.154      | 0.500        | 0.078 (0.006)    | -                | -         |     3.12 | executor, kinqie, Kiro, nota, tex1y       |
|            2 |     4332 | 2024-03-29 | System5         | W   | 0.141      | -            | -                | -                | -         |     1.05 | executor, kinqie, Kiro, nota, tex1y       |
|            1 |     4651 | 2024-03-13 | Betera          | W   | 0.035      | -            | -                | -                | -         |     0.28 | executor, kinqie, Kiro, nota, tex1y       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,013.61)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      0.993 | $3,000.00      | $2,977.56       |
| 2024-06-09 |      0.621 | $6,500.00      | $4,036.05       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
