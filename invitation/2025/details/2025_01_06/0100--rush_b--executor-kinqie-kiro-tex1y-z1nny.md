### Roster Details<br />
Team Name: RUSH B<br />
Roster: executor, kinqie, Kiro, tex1y, z1Nny<br />
Global Rank: [100](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_06.md)<br />
Regional Rank: [72]( ../../standings_europe_2025_01_06.md)<br />
<br />
Final Rank Value:  875.6<br />
<br />
Final Rank Value (875.6) = Starting Rank Value (884.5) + Head To Head Adjustments (-9.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.450[<sup>1</sup>](#table2)
- Bounty Collected: 0.349[<sup>2</sup>](#table1)
- Opponent Network: 0.069[<sup>2</sup>](#table1)
- LAN Wins: 0.112[<sup>2</sup>](#table1)

The average of these factors is 0.245<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 884.5
- 400 + ( ( 0.245 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 884.5


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
|           27 |       48 | 2024-12-22 | Zero Tenacity   | W   | 1.000      | 0.387        | 0.081 (0.031)    | 0.599 (0.232)    | 0 (0.000) |    22.72 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           26 |       54 | 2024-12-22 | PORTUGAL        | L   | 1.000      | -            | -                | -                | -         |   -18.19 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           25 |      136 | 2024-12-15 | FORZE Reload    | W   | 1.000      | 0.338        | 0.028 (0.009)    | 0.130 (0.044)    | 1 (1.000) |    10.80 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           24 |     1021 | 2024-11-03 | ARCRED          | L   | 0.775      | -            | -                | -                | -         |   -15.75 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           23 |     1050 | 2024-11-02 | 1WIN            | W   | 0.768      | 0.396        | 0.008 (0.002)    | 0.074 (0.023)    | 0 (0.000) |     6.50 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           22 |     1072 | 2024-11-01 | Nuclear TigeRES | W   | 0.761      | 0.396        | 0.004 (0.001)    | 0.083 (0.025)    | 0 (0.000) |     3.42 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           21 |     1190 | 2024-10-26 | ECSTATIC        | L   | 0.721      | -            | -                | -                | -         |    -7.54 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           20 |     1321 | 2024-10-19 | PEGADA          | W   | 0.672      | 0.354        | 0.171 (0.041)    | 0.270 (0.064)    | 0 (0.000) |    18.09 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           19 |     1448 | 2024-10-13 | FAVBET          | L   | 0.632      | -            | -                | -                | -         |    -8.12 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           18 |     1639 | 2024-10-05 | NAVI Junior     | W   | 0.580      | 0.354        | 0.191 (0.039)    | 1.000 (0.205)    | 0 (0.000) |    13.88 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           17 |     1901 | 2024-09-28 | GUN5            | L   | 0.531      | -            | -                | -                | -         |    -3.79 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           16 |     2375 | 2024-09-14 | ARCRED          | L   | 0.440      | -            | -                | -                | -         |    -8.16 | executor, Gospadarov, kinqie, Kiro, tex1y |
|           15 |     2388 | 2024-09-14 | devils.one      | L   | 0.439      | -            | -                | -                | -         |    -9.72 | executor, Gospadarov, kinqie, Kiro, tex1y |
|           14 |     2437 | 2024-09-12 | Nexus           | L   | 0.427      | -            | -                | -                | -         |    -0.70 | executor, Gospadarov, kinqie, Kiro, tex1y |
|           13 |     2643 | 2024-09-05 | HOTU            | L   | 0.380      | -            | -                | -                | -         |    -8.19 | executor, Gospadarov, kinqie, Kiro, tex1y |
|           12 |     2757 | 2024-09-01 | Insilio         | L   | 0.353      | -            | -                | -                | -         |    -6.45 | executor, Gospadarov, kinqie, Kiro, tex1y |
|           11 |     3241 | 2024-08-20 | B8              | L   | 0.274      | -            | -                | -                | -         |    -1.60 | executor, kinqie, Kiro, nota, tex1y       |
|           10 |     3427 | 2024-08-13 | PARIVISION      | L   | 0.228      | -            | -                | -                | -         |    -3.37 | executor, kinqie, Kiro, nota, tex1y       |
|            9 |     3481 | 2024-08-12 | ARCRED          | W   | 0.221      | 0.500        | 0.044 (0.005)    | -                | 0 (0.000) |     2.56 | executor, kinqie, Kiro, nota, tex1y       |
|            8 |     3741 | 2024-08-04 | BC.Game         | L   | 0.166      | -            | -                | -                | -         |    -2.67 | executor, kinqie, Kiro, nota, tex1y       |
|            7 |     3778 | 2024-08-03 | Alliance        | W   | 0.159      | 0.342        | 0.035 (0.002)    | 0.395 (0.021)    | 0 (0.000) |     2.89 | executor, kinqie, Kiro, nota, tex1y       |
|            6 |     3817 | 2024-08-02 | Astralis Talent | W   | 0.151      | 0.342        | -                | 0.442 (0.023)    | 0 (0.000) |     1.70 | executor, kinqie, Kiro, nota, tex1y       |
|            5 |     3928 | 2024-07-30 | Rebels          | W   | 0.134      | 0.500        | 0.035 (0.002)    | 0.322 (0.022)    | 0 (0.000) |     1.82 | executor, kinqie, Kiro, nota, tex1y       |
|            4 |     4158 | 2024-07-23 | SINNERS         | W   | 0.088      | 0.500        | 0.082 (0.004)    | 0.682 (0.030)    | -         |     2.17 | executor, kinqie, Kiro, nota, tex1y       |
|            3 |     4285 | 2024-07-19 | SAW             | L   | 0.060      | -            | -                | -                | -         |    -0.11 | executor, kinqie, Kiro, nota, tex1y       |
|            2 |     4396 | 2024-07-17 | Apogee          | L   | 0.048      | -            | -                | -                | -         |    -1.00 | executor, kinqie, Kiro, nota, tex1y       |
|            1 |     4503 | 2024-07-15 | Sangal          | L   | 0.034      | -            | -                | -                | -         |    -0.14 | executor, kinqie, Kiro, nota, tex1y       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,940.41)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      1.000 | $2,623.00      | $2,623.00       |
| 2024-12-15 |      1.000 | $7,500.00      | $7,500.00       |
| 2024-11-03 |      0.775 | $5,112.00      | $3,959.84       |
| 2024-10-20 |      0.680 | $2,000.00      | $1,359.90       |
| 2024-08-04 |      0.166 | $3,000.00      | $497.66         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
