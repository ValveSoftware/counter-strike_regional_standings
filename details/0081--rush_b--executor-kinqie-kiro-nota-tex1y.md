### Roster Details<br />
Team Name: RUSH B<br />
Roster: executor, kinqie, Kiro, nota, tex1y<br />
Global Rank: [81](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [58]( ../standings_europe.md)<br />
<br />
Final Rank Value:  948.8<br />
<br />
Final Rank Value (948.8) = Starting Rank Value (862.1) + Head To Head Adjustments (86.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.387[<sup>1</sup>](#table2)
- Bounty Collected: 0.363[<sup>2</sup>](#table1)
- Opponent Network: 0.149[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.225<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 862.1
- 400 + ( ( 0.225 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 862.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |       70 | 2024-08-04 | BC.Game         | L   | 1.000      | -            | -                | -                | -         |   -15.58 | executor, kinqie, Kiro, nota, tex1y |
|           30 |      107 | 2024-08-03 | Alliance        | W   | 1.000      | 0.342        | 0.017 (0.006)    | 0.282 (0.097)    | 0 (0.000) |    11.49 | executor, kinqie, Kiro, nota, tex1y |
|           29 |      146 | 2024-08-02 | Astralis Talent | W   | 1.000      | 0.342        | -                | 0.156 (0.054)    | 0 (0.000) |     6.63 | executor, kinqie, Kiro, nota, tex1y |
|           28 |      257 | 2024-07-30 | Rebels          | W   | 1.000      | 0.500        | 0.038 (0.019)    | 0.578 (0.289)    | 0 (0.000) |    19.60 | executor, kinqie, Kiro, nota, tex1y |
|           27 |      487 | 2024-07-23 | SINNERS         | W   | 1.000      | 0.500        | 0.047 (0.023)    | 0.800 (0.400)    | 0 (0.000) |    19.23 | executor, kinqie, Kiro, nota, tex1y |
|           26 |      614 | 2024-07-19 | SAW             | L   | 1.000      | -            | -                | -                | -         |    -5.33 | executor, kinqie, Kiro, nota, tex1y |
|           25 |      725 | 2024-07-17 | brazylijski luz | L   | 1.000      | -            | -                | -                | -         |   -19.08 | executor, kinqie, Kiro, nota, tex1y |
|           24 |      832 | 2024-07-15 | Sangal          | L   | 1.000      | -            | -                | -                | -         |    -5.24 | executor, kinqie, Kiro, nota, tex1y |
|           23 |     1244 | 2024-06-10 | PARIVISION      | L   | 0.819      | -            | -                | -                | -         |    -7.93 | executor, kinqie, Kiro, nota, tex1y |
|           22 |     1251 | 2024-06-10 | SAW             | L   | 0.818      | -            | -                | -                | -         |    -5.81 | executor, kinqie, Kiro, nota, tex1y |
|           21 |     1256 | 2024-06-10 | Monte           | W   | 0.818      | 0.143        | 0.080 (0.009)    | 0.598 (0.070)    | 0 (0.000) |    15.95 | executor, kinqie, Kiro, nota, tex1y |
|           20 |     1287 | 2024-06-09 | 9 Pandas        | W   | 0.813      | 0.143        | 0.081 (0.009)    | 0.700 (0.081)    | 0 (0.000) |    17.89 | executor, kinqie, Kiro, nota, tex1y |
|           19 |     1298 | 2024-06-09 | Aurora          | W   | 0.812      | 0.143        | 0.420 (0.049)    | 0.758 (0.088)    | 0 (0.000) |    24.51 | executor, kinqie, Kiro, nota, tex1y |
|           18 |     1303 | 2024-06-09 | SINNERS         | W   | 0.812      | 0.143        | 0.047 (0.005)    | 0.800 (0.093)    | 0 (0.000) |    18.23 | executor, kinqie, Kiro, nota, tex1y |
|           17 |     1313 | 2024-06-09 | 3DMAX           | L   | 0.811      | -            | -                | -                | -         |    -0.84 | executor, kinqie, Kiro, nota, tex1y |
|           16 |     1455 | 2024-06-06 | Aurora          | L   | 0.794      | -            | -                | -                | -         |    -0.64 | executor, kinqie, Kiro, nota, tex1y |
|           15 |     1524 | 2024-06-05 | SINNERS         | L   | 0.787      | -            | -                | -                | -         |    -7.42 | executor, kinqie, Kiro, nota, tex1y |
|           14 |     1574 | 2024-06-04 | SAW             | W   | 0.780      | 0.500        | 0.104 (0.041)    | 0.516 (0.201)    | 0 (0.000) |    20.99 | executor, kinqie, Kiro, nota, tex1y |
|           13 |     2372 | 2024-05-07 | MOUZ NXT        | L   | 0.593      | -            | -                | -                | -         |    -5.20 | executor, kinqie, Kiro, nota, tex1y |
|           12 |     2398 | 2024-05-05 | Sampi           | L   | 0.580      | -            | -                | -                | -         |    -7.83 | executor, kinqie, Kiro, nota, tex1y |
|           11 |     2423 | 2024-05-04 | HAVU            | W   | 0.573      | -            | -                | -                | 0 (0.000) |     5.12 | executor, kinqie, Kiro, nota, tex1y |
|           10 |     2467 | 2024-05-02 | EYEBALLERS      | L   | 0.559      | -            | -                | -                | -         |    -8.27 | executor, kinqie, Kiro, nota, tex1y |
|            9 |     2524 | 2024-04-29 | ENCE Academy    | W   | 0.541      | -            | -                | -                | -         |     5.04 | executor, kinqie, Kiro, nota, tex1y |
|            8 |     3026 | 2024-04-10 | KOI             | L   | 0.414      | -            | -                | -                | -         |    -3.22 | executor, kinqie, Kiro, nota, tex1y |
|            7 |     3079 | 2024-04-09 | PARIVISION      | W   | 0.407      | 0.500        | 0.017 (0.004)    | 0.590 (0.120)    | -         |    10.09 | executor, kinqie, Kiro, nota, tex1y |
|            6 |     3315 | 2024-04-01 | PERA            | L   | 0.354      | -            | -                | -                | -         |    -4.87 | executor, kinqie, Kiro, nota, tex1y |
|            5 |     3324 | 2024-03-31 | Monte           | W   | 0.347      | 0.500        | 0.057 (0.010)    | -                | -         |     7.18 | executor, kinqie, Kiro, nota, tex1y |
|            4 |     3336 | 2024-03-29 | System5         | W   | 0.334      | -            | -                | -                | -         |     2.74 | executor, kinqie, Kiro, nota, tex1y |
|            3 |     3655 | 2024-03-13 | Betera          | W   | 0.228      | -            | -                | -                | -         |     2.03 | executor, kinqie, Kiro, nota, tex1y |
|            2 |     3919 | 2024-03-03 | Metizport       | L   | 0.160      | -            | -                | -                | -         |    -2.21 | executor, kinqie, Kiro, nota, tex1y |
|            1 |     4028 | 2024-02-26 | SAW             | L   | 0.121      | -            | -                | -                | -         |    -0.61 | executor, kinqie, Kiro, nota, tex1y |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,290.53)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-09 |      0.814 | $6,500.00      | $5,290.53       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
