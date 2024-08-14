### Roster Details<br />
Team Name: RUSH B<br />
Roster: executor, kinqie, Kiro, nota, tex1y<br />
Global Rank: [70](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [50]( ../standings_europe.md)<br />
<br />
Final Rank Value:  948.6<br />
<br />
Final Rank Value (948.6) = Starting Rank Value (854.3) + Head To Head Adjustments (94.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.384[<sup>1</sup>](#table2)
- Bounty Collected: 0.365[<sup>2</sup>](#table1)
- Opponent Network: 0.172[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.230<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 854.3
- 400 + ( ( 0.230 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 854.3


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
|           33 |       29 | 2024-08-13 | PARIVISION      | L   | 1.000      | -            | -                | -                | -         |    -8.88 | executor, kinqie, Kiro, nota, tex1y |
|           32 |       83 | 2024-08-12 | ARCRED          | W   | 1.000      | 0.500        | 0.039 (0.019)    | 0.425 (0.213)    | 0 (0.000) |    17.07 | executor, kinqie, Kiro, nota, tex1y |
|           31 |      343 | 2024-08-04 | BC.Game         | L   | 1.000      | -            | -                | -                | -         |   -16.13 | executor, kinqie, Kiro, nota, tex1y |
|           30 |      380 | 2024-08-03 | Alliance        | W   | 1.000      | 0.342        | 0.016 (0.005)    | 0.281 (0.096)    | 0 (0.000) |    10.83 | executor, kinqie, Kiro, nota, tex1y |
|           29 |      419 | 2024-08-02 | Astralis Talent | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.23 | executor, kinqie, Kiro, nota, tex1y |
|           28 |      530 | 2024-07-30 | Rebels          | W   | 1.000      | 0.500        | 0.036 (0.018)    | 0.585 (0.292)    | 0 (0.000) |    18.88 | executor, kinqie, Kiro, nota, tex1y |
|           27 |      760 | 2024-07-23 | SINNERS         | W   | 1.000      | 0.500        | 0.044 (0.022)    | 0.922 (0.461)    | 0 (0.000) |    19.11 | executor, kinqie, Kiro, nota, tex1y |
|           26 |      887 | 2024-07-19 | SAW             | L   | 1.000      | -            | -                | -                | -         |    -2.29 | executor, kinqie, Kiro, nota, tex1y |
|           25 |      998 | 2024-07-17 | brazylijski luz | L   | 1.000      | -            | -                | -                | -         |   -19.81 | executor, kinqie, Kiro, nota, tex1y |
|           24 |     1105 | 2024-07-15 | Sangal          | L   | 1.000      | -            | -                | -                | -         |    -5.13 | executor, kinqie, Kiro, nota, tex1y |
|           23 |     1517 | 2024-06-10 | PARIVISION      | L   | 0.765      | -            | -                | -                | -         |    -7.18 | executor, kinqie, Kiro, nota, tex1y |
|           22 |     1524 | 2024-06-10 | SAW             | L   | 0.764      | -            | -                | -                | -         |    -2.10 | executor, kinqie, Kiro, nota, tex1y |
|           21 |     1529 | 2024-06-10 | Monte           | W   | 0.764      | 0.143        | 0.101 (0.011)    | -                | 0 (0.000) |    16.47 | executor, kinqie, Kiro, nota, tex1y |
|           20 |     1560 | 2024-06-09 | 9 Pandas        | W   | 0.759      | 0.143        | 0.075 (0.008)    | 0.717 (0.078)    | 0 (0.000) |    16.57 | executor, kinqie, Kiro, nota, tex1y |
|           19 |     1571 | 2024-06-09 | Aurora          | W   | 0.758      | 0.143        | 0.387 (0.042)    | 0.737 (0.080)    | 0 (0.000) |    22.66 | executor, kinqie, Kiro, nota, tex1y |
|           18 |     1576 | 2024-06-09 | SINNERS         | W   | 0.758      | 0.143        | -                | 0.922 (0.100)    | 0 (0.000) |    16.71 | executor, kinqie, Kiro, nota, tex1y |
|           17 |     1586 | 2024-06-09 | 3DMAX           | L   | 0.757      | -            | -                | -                | -         |    -0.91 | executor, kinqie, Kiro, nota, tex1y |
|           16 |     1728 | 2024-06-06 | Aurora          | L   | 0.740      | -            | -                | -                | -         |    -0.77 | executor, kinqie, Kiro, nota, tex1y |
|           15 |     1797 | 2024-06-05 | SINNERS         | L   | 0.733      | -            | -                | -                | -         |    -7.22 | executor, kinqie, Kiro, nota, tex1y |
|           14 |     1847 | 2024-06-04 | SAW             | W   | 0.726      | 0.500        | 0.094 (0.034)    | 0.624 (0.227)    | 0 (0.000) |    21.86 | executor, kinqie, Kiro, nota, tex1y |
|           13 |     2645 | 2024-05-07 | MOUZ NXT        | L   | 0.539      | -            | -                | -                | -         |    -5.11 | executor, kinqie, Kiro, nota, tex1y |
|           12 |     2671 | 2024-05-05 | Sampi           | L   | 0.526      | -            | -                | -                | -         |    -7.59 | executor, kinqie, Kiro, nota, tex1y |
|           11 |     2696 | 2024-05-04 | HAVU            | W   | 0.519      | -            | -                | -                | -         |     4.39 | executor, kinqie, Kiro, nota, tex1y |
|           10 |     2740 | 2024-05-02 | EYEBALLERS      | L   | 0.505      | -            | -                | -                | -         |    -7.44 | executor, kinqie, Kiro, nota, tex1y |
|            9 |     2797 | 2024-04-29 | ENCE Academy    | W   | 0.487      | -            | -                | -                | -         |     4.21 | executor, kinqie, Kiro, nota, tex1y |
|            8 |     3299 | 2024-04-10 | KOI             | L   | 0.360      | -            | -                | -                | -         |    -3.37 | executor, kinqie, Kiro, nota, tex1y |
|            7 |     3352 | 2024-04-09 | PARIVISION      | W   | 0.353      | 0.500        | 0.047 (0.008)    | 0.627 (0.111)    | -         |     8.83 | executor, kinqie, Kiro, nota, tex1y |
|            6 |     3588 | 2024-04-01 | ex-PERA         | L   | 0.299      | -            | -                | -                | -         |    -4.13 | executor, kinqie, Kiro, nota, tex1y |
|            5 |     3597 | 2024-03-31 | Monte           | W   | 0.292      | 0.500        | 0.101 (0.015)    | 0.425 (0.062)    | -         |     6.72 | executor, kinqie, Kiro, nota, tex1y |
|            4 |     3609 | 2024-03-29 | System5         | W   | 0.280      | -            | -                | -                | -         |     2.21 | executor, kinqie, Kiro, nota, tex1y |
|            3 |     3928 | 2024-03-13 | Betera          | W   | 0.173      | -            | -                | -                | -         |     1.53 | executor, kinqie, Kiro, nota, tex1y |
|            2 |     4192 | 2024-03-03 | Metizport       | L   | 0.106      | -            | -                | -                | -         |    -1.89 | executor, kinqie, Kiro, nota, tex1y |
|            1 |     4301 | 2024-02-26 | SAW             | L   | 0.067      | -            | -                | -                | -         |    -0.07 | executor, kinqie, Kiro, nota, tex1y |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,939.02)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-09 |      0.760 | $6,500.00      | $4,939.02       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
