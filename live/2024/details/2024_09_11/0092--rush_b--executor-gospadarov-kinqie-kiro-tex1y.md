### Roster Details<br />
Team Name: RUSH B<br />
Roster: executor, Gospadarov, kinqie, Kiro, tex1y<br />
Global Rank: [92](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_11.md)<br />
Regional Rank: [67]( ../../standings_europe_2024_09_11.md)<br />
<br />
Final Rank Value:  881.9<br />
<br />
Final Rank Value (881.9) = Starting Rank Value (844.6) + Head To Head Adjustments (37.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.386[<sup>1</sup>](#table2)
- Bounty Collected: 0.374[<sup>2</sup>](#table1)
- Opponent Network: 0.155[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.229<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 844.6
- 400 + ( ( 0.229 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 844.6


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
|           33 |      173 | 2024-09-05 | HOTU            | L   | 1.000      | -            | -                | -                | -         |   -21.57 | executor, Gospadarov, kinqie, Kiro, tex1y |
|           32 |      287 | 2024-09-01 | Insilio         | L   | 1.000      | -            | -                | -                | -         |   -14.80 | executor, Gospadarov, kinqie, Kiro, tex1y |
|           31 |      771 | 2024-08-20 | B8              | L   | 1.000      | -            | -                | -                | -         |    -7.16 | executor, kinqie, Kiro, nota, tex1y       |
|           30 |      957 | 2024-08-13 | PARIVISION      | L   | 1.000      | -            | -                | -                | -         |    -8.35 | executor, kinqie, Kiro, nota, tex1y       |
|           29 |     1011 | 2024-08-12 | ARCRED          | W   | 1.000      | 0.500        | 0.036 (0.018)    | 0.412 (0.206)    | 0 (0.000) |    17.18 | executor, kinqie, Kiro, nota, tex1y       |
|           28 |     1271 | 2024-08-04 | BC.Game         | L   | 0.946      | -            | -                | -                | -         |   -14.15 | executor, kinqie, Kiro, nota, tex1y       |
|           27 |     1308 | 2024-08-03 | Alliance        | W   | 0.939      | 0.342        | 0.014 (0.004)    | 0.388 (0.125)    | 0 (0.000) |    10.88 | executor, kinqie, Kiro, nota, tex1y       |
|           26 |     1347 | 2024-08-02 | Astralis Talent | W   | 0.931      | 0.342        | -                | 0.104 (0.033)    | 0 (0.000) |     5.76 | executor, kinqie, Kiro, nota, tex1y       |
|           25 |     1458 | 2024-07-30 | Rebels          | W   | 0.914      | 0.500        | 0.028 (0.013)    | 0.670 (0.306)    | 0 (0.000) |    17.10 | executor, kinqie, Kiro, nota, tex1y       |
|           24 |     1688 | 2024-07-23 | SINNERS         | W   | 0.867      | 0.500        | 0.092 (0.040)    | 1.000 (0.434)    | 0 (0.000) |    18.68 | executor, kinqie, Kiro, nota, tex1y       |
|           23 |     1815 | 2024-07-19 | SAW             | L   | 0.840      | -            | -                | -                | -         |    -1.14 | executor, kinqie, Kiro, nota, tex1y       |
|           22 |     1926 | 2024-07-17 | Apogee          | L   | 0.828      | -            | -                | -                | -         |   -16.65 | executor, kinqie, Kiro, nota, tex1y       |
|           21 |     2033 | 2024-07-15 | Sangal          | L   | 0.814      | -            | -                | -                | -         |    -2.24 | executor, kinqie, Kiro, nota, tex1y       |
|           20 |     2445 | 2024-06-10 | PARIVISION      | L   | 0.579      | -            | -                | -                | -         |    -5.03 | executor, kinqie, Kiro, nota, tex1y       |
|           19 |     2452 | 2024-06-10 | SAW             | L   | 0.578      | -            | -                | -                | -         |    -0.88 | executor, kinqie, Kiro, nota, tex1y       |
|           18 |     2457 | 2024-06-10 | Monte           | W   | 0.578      | 0.143        | 0.075 (0.006)    | -                | 0 (0.000) |    11.27 | executor, kinqie, Kiro, nota, tex1y       |
|           17 |     2488 | 2024-06-09 | 9 Pandas        | W   | 0.573      | 0.143        | 0.058 (0.005)    | 0.705 (0.058)    | 0 (0.000) |    13.28 | executor, kinqie, Kiro, nota, tex1y       |
|           16 |     2499 | 2024-06-09 | Aurora          | W   | 0.572      | 0.143        | 0.282 (0.023)    | 0.571 (0.047)    | 0 (0.000) |    16.74 | executor, kinqie, Kiro, nota, tex1y       |
|           15 |     2504 | 2024-06-09 | SINNERS         | W   | 0.572      | 0.143        | 0.092 (0.008)    | 1.000 (0.082)    | 0 (0.000) |    13.78 | executor, kinqie, Kiro, nota, tex1y       |
|           14 |     2514 | 2024-06-09 | 3DMAX           | L   | 0.571      | -            | -                | -                | -         |    -0.29 | executor, kinqie, Kiro, nota, tex1y       |
|           13 |     2656 | 2024-06-06 | Aurora          | L   | 0.554      | -            | -                | -                | -         |    -0.97 | executor, kinqie, Kiro, nota, tex1y       |
|           12 |     2725 | 2024-06-05 | SINNERS         | L   | 0.547      | -            | -                | -                | -         |    -4.13 | executor, kinqie, Kiro, nota, tex1y       |
|           11 |     2775 | 2024-06-04 | SAW             | W   | 0.540      | 0.500        | 0.337 (0.091)    | 0.760 (0.205)    | 0 (0.000) |    16.57 | executor, kinqie, Kiro, nota, tex1y       |
|           10 |     3573 | 2024-05-07 | MOUZ NXT        | L   | 0.353      | -            | -                | -                | -         |    -3.53 | executor, kinqie, Kiro, nota, tex1y       |
|            9 |     3599 | 2024-05-05 | Sampi           | L   | 0.340      | -            | -                | -                | -         |    -4.27 | executor, kinqie, Kiro, nota, tex1y       |
|            8 |     3624 | 2024-05-04 | HAVU            | W   | 0.333      | -            | -                | -                | -         |     1.89 | executor, kinqie, Kiro, nota, tex1y       |
|            7 |     3668 | 2024-05-02 | EYEBALLERS      | L   | 0.319      | -            | -                | -                | -         |    -6.40 | executor, kinqie, Kiro, nota, tex1y       |
|            6 |     3725 | 2024-04-29 | ENCE Academy    | W   | 0.301      | -            | -                | -                | -         |     2.49 | executor, kinqie, Kiro, nota, tex1y       |
|            5 |     4227 | 2024-04-10 | KOI             | L   | 0.174      | -            | -                | -                | -         |    -1.98 | executor, kinqie, Kiro, nota, tex1y       |
|            4 |     4280 | 2024-04-09 | PARIVISION      | W   | 0.167      | 0.500        | -                | 0.707 (0.059)    | -         |     4.13 | executor, kinqie, Kiro, nota, tex1y       |
|            3 |     4516 | 2024-04-01 | Qiang           | L   | 0.114      | -            | -                | -                | -         |    -1.68 | executor, kinqie, Kiro, nota, tex1y       |
|            2 |     4525 | 2024-03-31 | Monte           | W   | 0.107      | 0.500        | 0.075 (0.004)    | -                | -         |     2.09 | executor, kinqie, Kiro, nota, tex1y       |
|            1 |     4537 | 2024-03-29 | System5         | W   | 0.094      | -            | -                | -                | -         |     0.72 | executor, kinqie, Kiro, nota, tex1y       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,568.08)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-11 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-08-04 |      0.946 | $3,000.00      | $2,836.87       |
| 2024-06-09 |      0.574 | $6,500.00      | $3,731.22       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
