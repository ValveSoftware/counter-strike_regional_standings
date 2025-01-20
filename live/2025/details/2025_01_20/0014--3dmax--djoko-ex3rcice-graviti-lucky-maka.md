### Roster Details<br />
Team Name: 3DMAX<br />
Roster: Djoko, Ex3rcice, Graviti, Lucky, Maka<br />
Global Rank: [14](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [9]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  1371.0<br />
<br />
Final Rank Value (1371.0) = Starting Rank Value (1414.5) + Head To Head Adjustments (-43.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.728[<sup>1</sup>](#table2)
- Bounty Collected: 0.500[<sup>2</sup>](#table1)
- Opponent Network: 0.201[<sup>2</sup>](#table1)
- LAN Wins: 0.614[<sup>2</sup>](#table1)

The average of these factors is 0.511<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1414.5
- 400 + ( ( 0.511 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 1414.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           62 |       22 | 2025-01-14 | HEROIC         | L   | 1.000      | -            | -                | -                | -         |   -22.29 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           61 |      352 | 2024-12-06 | MOUZ           | L   | 0.909      | -            | -                | -                | -         |    -3.23 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           60 |      380 | 2024-12-05 | G2             | L   | 0.902      | -            | -                | -                | -         |    -1.18 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           59 |      392 | 2024-12-05 | paiN           | W   | 0.897      | 1.000        | 0.253 (0.227)    | 0.717 (0.644)    | 1 (0.897) |    16.07 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           58 |      406 | 2024-12-04 | MIBR           | L   | 0.896      | -            | -                | -                | -         |   -13.18 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           57 |      666 | 2024-11-22 | G2             | W   | 0.810      | 0.143        | 1.000 (0.116)    | -                | 1 (0.810) |    24.66 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           56 |      684 | 2024-11-21 | Eternal Fire   | W   | 0.804      | 0.143        | 0.324 (0.037)    | -                | 1 (0.804) |    13.15 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           55 |      693 | 2024-11-21 | TSM            | W   | 0.803      | -            | -                | -                | 1 (0.803) |     1.64 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           54 |     1088 | 2024-11-03 | OG             | W   | 0.685      | 0.898        | 0.171 (0.105)    | 0.285 (0.176)    | 1 (0.685) |     2.22 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           53 |     1103 | 2024-11-02 | The MongolZ    | L   | 0.680      | -            | -                | -                | -         |    -1.53 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           52 |     1240 | 2024-10-26 | BESTIA         | W   | 0.633      | 0.477        | 0.155 (0.047)    | 0.600 (0.181)    | -         |     4.47 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           51 |     1319 | 2024-10-21 | OG             | W   | 0.600      | 0.477        | 0.171 (0.049)    | -                | -         |     1.82 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           50 |     1327 | 2024-10-21 | Falcons        | W   | 0.597      | -            | -                | -                | -         |     2.33 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           49 |     1363 | 2024-10-19 | Nemiga         | L   | 0.585      | -            | -                | -                | -         |   -11.78 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           48 |     1391 | 2024-10-18 | SAW            | W   | 0.579      | 0.500        | 0.253 (0.073)    | 0.433 (0.125)    | -         |     8.44 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           47 |     1416 | 2024-10-17 | Sashi          | W   | 0.573      | 0.500        | -                | 0.613 (0.175)    | -         |     2.31 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           46 |     1450 | 2024-10-16 | Nemiga         | L   | 0.566      | -            | -                | -                | -         |   -11.84 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           45 |     1475 | 2024-10-15 | TSM            | W   | 0.559      | 0.500        | -                | 0.401 (0.112)    | -         |     1.24 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           44 |     1514 | 2024-10-12 | Spirit Academy | L   | 0.538      | -            | -                | -                | -         |   -14.44 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           43 |     1537 | 2024-10-10 | CYBERSHOKE     | W   | 0.526      | 0.435        | -                | 0.624 (0.142)    | -         |     0.97 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           42 |     1668 | 2024-10-06 | Passion UA     | L   | 0.498      | -            | -                | -                | -         |   -12.19 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           41 |     1705 | 2024-10-05 | PARIVISION     | W   | 0.490      | -            | -                | -                | -         |     0.96 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           40 |     1767 | 2024-10-03 | Rhyno          | W   | 0.479      | -            | -                | -                | -         |     0.49 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           39 |     1906 | 2024-09-29 | SAW            | L   | 0.452      | -            | -                | -                | -         |    -8.07 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           38 |     1933 | 2024-09-28 | B8             | L   | 0.446      | -            | -                | -                | -         |   -11.41 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           37 |     1947 | 2024-09-28 | BetBoom        | L   | 0.444      | -            | -                | -                | -         |   -11.78 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           36 |     1978 | 2024-09-27 | 9z             | W   | 0.439      | -            | -                | -                | -         |     1.23 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           35 |     1990 | 2024-09-27 | Nemiga         | W   | 0.438      | 0.143        | 0.504 (0.032)    | -                | -         |     3.96 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           34 |     1998 | 2024-09-27 | CYBERSHOKE     | W   | 0.437      | 0.435        | -                | 0.624 (0.118)    | -         |     0.70 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           33 |     2028 | 2024-09-26 | Aurora         | W   | 0.432      | -            | -                | -                | -         |     0.97 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           32 |     2049 | 2024-09-26 | Monte          | W   | 0.430      | -            | -                | -                | -         |     1.57 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           31 |     2092 | 2024-09-25 | Zero Tenacity  | W   | 0.424      | -            | -                | -                | -         |     1.73 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           30 |     2145 | 2024-09-24 | Zero Tenacity  | W   | 0.417      | -            | -                | -                | -         |     1.73 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           29 |     2466 | 2024-09-13 | Zero Tenacity  | L   | 0.345      | -            | -                | -                | -         |    -9.46 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           28 |     2602 | 2024-09-08 | The MongolZ    | L   | 0.311      | -            | -                | -                | -         |    -0.73 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           27 |     2631 | 2024-09-07 | Wildcard       | W   | 0.305      | 0.889        | 0.232 (0.063)    | 0.638 (0.173)    | 1 (0.305) |     4.13 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           26 |     2649 | 2024-09-06 | Spirit         | L   | 0.299      | -            | -                | -                | -         |    -0.34 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           25 |     2666 | 2024-09-06 | 9z             | W   | 0.298      | -            | -                | -                | 1 (0.298) |     0.83 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           24 |     2692 | 2024-09-05 | G2             | L   | 0.292      | -            | -                | -                | -         |    -0.35 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           23 |     2738 | 2024-09-04 | The MongolZ    | W   | 0.284      | 0.889        | 1.000 (0.253)    | 0.646 (0.163)    | 1 (0.284) |     8.35 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           22 |     2995 | 2024-08-27 | Falcons        | L   | 0.231      | -            | -                | -                | -         |    -0.80 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           21 |     3047 | 2024-08-26 | Falcons        | L   | 0.226      | -            | -                | -                | -         |    -6.47 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           20 |     3066 | 2024-08-26 | fnatic         | W   | 0.225      | -            | -                | -                | -         |     1.33 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           19 |     3405 | 2024-08-16 | SINNERS        | L   | 0.157      | -            | -                | -                | -         |    -4.22 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           18 |     3480 | 2024-08-13 | Zero Tenacity  | W   | 0.140      | -            | -                | -                | -         |     0.47 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           17 |     3528 | 2024-08-12 | Nemiga         | L   | 0.133      | -            | -                | -                | -         |    -2.88 | Djoko, Ex3rcice, Graviti, Maka, wasiNk |
|           16 |     3611 | 2024-08-09 | PARIVISION     | W   | 0.112      | -            | -                | -                | -         |     0.16 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           15 |     3635 | 2024-08-08 | Falcons        | L   | 0.105      | -            | -                | -                | -         |    -0.36 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           14 |     3675 | 2024-08-07 | GUN5           | W   | 0.099      | -            | -                | -                | -         |     0.42 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           13 |     3690 | 2024-08-07 | 9z             | L   | 0.097      | -            | -                | -                | -         |    -2.82 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           12 |     3790 | 2024-08-04 | Johnny Speeds  | L   | 0.078      | -            | -                | -                | -         |    -2.15 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           11 |     3815 | 2024-08-03 | fnatic         | W   | 0.073      | -            | -                | -                | -         |     0.41 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           10 |     3857 | 2024-08-02 | UNPAID         | W   | 0.065      | -            | -                | -                | -         |     0.19 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            9 |     3894 | 2024-08-01 | Betera         | W   | 0.059      | -            | -                | -                | -         |     0.03 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            8 |     3932 | 2024-07-31 | Cloud9         | W   | 0.053      | -            | -                | -                | -         |     0.18 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            7 |     4055 | 2024-07-28 | The MongolZ    | W   | 0.032      | -            | -                | -                | 1 (0.032) |     0.94 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            6 |     4063 | 2024-07-28 | Aurora         | W   | 0.031      | -            | -                | -                | 1 (0.031) |     0.02 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            5 |     4081 | 2024-07-27 | ENCE           | W   | 0.025      | -            | -                | -                | -         |     0.17 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            4 |     4108 | 2024-07-26 | Eternal Fire   | L   | 0.018      | -            | -                | -                | -         |    -0.34 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            3 |     4150 | 2024-07-25 | Revenant       | W   | 0.011      | -            | -                | -                | -         |     0.01 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            2 |     4159 | 2024-07-25 | DMS            | W   | 0.009      | -            | -                | -                | -         |     0.01 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            1 |     4188 | 2024-07-24 | AMKAL          | W   | 0.004      | -            | -                | -                | -         |     0.01 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($93,494.52)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.42) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.964 | $20,000.00     | $19,276.72      |
| 2024-11-03 |      0.686 | $70,000.00     | $48,023.87      |
| 2024-10-20 |      0.592 | $10,000.00     | $5,916.82       |
| 2024-10-13 |      0.546 | $2,000.00      | $1,091.85       |
| 2024-10-06 |      0.500 | $5,000.00      | $2,497.97       |
| 2024-09-28 |      0.446 | $5,000.00      | $2,228.75       |
| 2024-09-26 |      0.432 | $12,500.00     | $5,401.18       |
| 2024-09-22 |      0.406 | $12,000.00     | $4,873.92       |
| 2024-09-14 |      0.352 | $1,000.00      | $352.46         |
| 2024-07-28 |      0.032 | $120,000.00    | $3,830.97       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
