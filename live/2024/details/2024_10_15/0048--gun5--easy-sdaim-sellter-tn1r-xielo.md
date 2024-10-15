### Roster Details<br />
Team Name: GUN5<br />
Roster: easy, Sdaim, SELLTER, tN1R, xiELO<br />
Global Rank: [48](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [33]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  1026.6<br />
<br />
Final Rank Value (1026.6) = Starting Rank Value (988.9) + Head To Head Adjustments (37.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.496[<sup>1</sup>](#table2)
- Bounty Collected: 0.405[<sup>2</sup>](#table1)
- Opponent Network: 0.312[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.303<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 988.9
- 400 + ( ( 0.303 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 988.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           82 |        6 | 2024-10-15 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |   -19.80 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           81 |       21 | 2024-10-13 | Into the Breach   | W   | 1.000      | 0.354        | -                | 0.640 (0.227)    | 0 (0.000) |    11.74 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           80 |       30 | 2024-10-12 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -15.71 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           79 |       50 | 2024-10-11 | GamerLegion       | W   | 1.000      | 0.435        | 0.250 (0.109)    | 0.610 (0.265)    | 0 (0.000) |    20.25 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           78 |       62 | 2024-10-10 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -23.59 | easy, Norwi, Sdaim, SELLTER, xiELO  |
|           77 |      156 | 2024-10-07 | ALTERNATE aTTaX   | W   | 1.000      | 0.435        | 0.078 (0.034)    | 0.787 (0.342)    | 0 (0.000) |     9.24 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           76 |      196 | 2024-10-06 | ECSTATIC          | W   | 1.000      | 0.354        | -                | 0.752 (0.266)    | 0 (0.000) |    15.13 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           75 |      229 | 2024-10-05 | FAVBET            | W   | 1.000      | 0.435        | 0.044 (0.019)    | 0.887 (0.385)    | 0 (0.000) |     9.95 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           74 |      289 | 2024-10-03 | Partizan          | L   | 1.000      | -            | -                | -                | -         |   -20.42 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           73 |      298 | 2024-10-03 | Preasy            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.10 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           72 |      301 | 2024-10-03 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -15.89 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           71 |      328 | 2024-10-02 | Permitta          | W   | 1.000      | 0.384        | -                | 1.000 (0.384)    | 0 (0.000) |     9.22 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           70 |      364 | 2024-10-01 | Betera            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.48 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           69 |      381 | 2024-10-01 | HOTU              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.44 | Sdaim, SELLTER, tN1R, tried, xiELO  |
|           68 |      398 | 2024-09-30 | Permitta          | W   | 1.000      | 0.435        | -                | 1.000 (0.435)    | 0 (0.000) |     9.49 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           67 |      476 | 2024-09-28 | RUSH B            | W   | 1.000      | -            | -                | -                | -         |     6.69 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           66 |      541 | 2024-09-26 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |   -11.59 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           65 |      551 | 2024-09-26 | EYEBALLERS        | W   | 1.000      | -            | -                | -                | -         |     4.98 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           64 |      871 | 2024-09-17 | BLEED             | L   | 1.000      | -            | -                | -                | -         |   -16.53 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           63 |      880 | 2024-09-17 | Into the Breach   | L   | 1.000      | -            | -                | -                | -         |   -20.17 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           62 |      954 | 2024-09-14 | SINNERS           | L   | 0.993      | -            | -                | -                | -         |   -14.81 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           61 |      986 | 2024-09-13 | Space             | W   | 0.987      | -            | -                | -                | -         |     3.70 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           60 |     1010 | 2024-09-12 | PARIVISION        | W   | 0.981      | 0.435        | 0.039 (0.017)    | -                | -         |    15.88 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           59 |     1107 | 2024-09-09 | Monte Gen         | W   | 0.959      | -            | -                | -                | -         |    10.32 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           58 |     1161 | 2024-09-07 | Young Ninjas      | W   | 0.946      | -            | -                | -                | -         |     9.11 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           57 |     1167 | 2024-09-06 | Apogee            | W   | 0.942      | 0.500        | -                | 0.552 (0.260)    | -         |     7.68 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           56 |     1179 | 2024-09-06 | Rebels            | W   | 0.940      | -            | -                | -                | -         |    12.25 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           55 |     1208 | 2024-09-05 | EYEBALLERS        | L   | 0.934      | -            | -                | -                | -         |   -22.69 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           54 |     1226 | 2024-09-05 | Insilio           | W   | 0.933      | 0.500        | 0.038 (0.018)    | 0.690 (0.322)    | -         |    11.09 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           53 |     1299 | 2024-09-03 | JANO              | W   | 0.918      | -            | -                | -                | -         |     3.00 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           52 |     1345 | 2024-08-31 | SAW               | L   | 0.901      | -            | -                | -                | -         |    -2.17 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           51 |     1350 | 2024-08-31 | Monte             | W   | 0.900      | -            | -                | -                | -         |    14.98 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           50 |     1358 | 2024-08-30 | SAW               | L   | 0.895      | -            | -                | -                | -         |    -2.04 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           49 |     1376 | 2024-08-30 | Sampi             | W   | 0.892      | -            | -                | -                | -         |    11.37 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           48 |     1395 | 2024-08-29 | Sashi             | W   | 0.888      | -            | -                | -                | -         |    15.04 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           47 |     1400 | 2024-08-29 | Ninjas in Pyjamas | W   | 0.887      | 0.143        | 0.133 (0.017)    | -                | -         |    22.08 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           46 |     1455 | 2024-08-28 | AMKAL             | L   | 0.880      | -            | -                | -                | -         |   -14.97 | easy, kelieN, SELLTER, tN1R, xiELO  |
|           45 |     1463 | 2024-08-28 | Sampi             | W   | 0.880      | -            | -                | -                | -         |    12.91 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           44 |     1601 | 2024-08-26 | ex-Enterprise     | W   | 0.866      | -            | -                | -                | -         |    10.23 | easy, kelieN, SELLTER, tN1R, xiELO  |
|           43 |     1661 | 2024-08-24 | ECLOT             | W   | 0.853      | 0.371        | 0.089 (0.028)    | 0.744 (0.235)    | -         |    18.33 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           42 |     1858 | 2024-08-19 | Anonymo           | W   | 0.820      | -            | -                | -                | -         |     2.91 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           41 |     1893 | 2024-08-17 | MOUZ NXT          | W   | 0.808      | -            | -                | -                | -         |    13.94 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           40 |     1906 | 2024-08-17 | Anonymo           | W   | 0.807      | -            | -                | -                | -         |     3.17 | easy, Sdaim, SELLTER, tN1R, xiELO   |
|           39 |     1962 | 2024-08-15 | Illuminar         | W   | 0.793      | -            | -                | -                | -         |     9.05 | easy, kelieN, SELLTER, tN1R, xiELO  |
|           38 |     2196 | 2024-08-07 | 3DMAX             | L   | 0.741      | -            | -                | -                | -         |    -1.28 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           37 |     2249 | 2024-08-06 | 9 Pandas          | L   | 0.734      | -            | -                | -                | -         |    -7.47 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           36 |     2341 | 2024-08-03 | PARIVISION        | W   | 0.714      | -            | -                | -                | -         |    15.24 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           35 |     2346 | 2024-08-03 | 9 Pandas          | L   | 0.714      | -            | -                | -                | -         |    -7.89 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           34 |     2413 | 2024-08-01 | Into the Breach   | L   | 0.701      | -            | -                | -                | -         |   -10.37 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           33 |     2433 | 2024-08-01 | NOM               | W   | 0.699      | -            | -                | -                | -         |     2.50 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           32 |     2481 | 2024-07-31 | K27               | L   | 0.692      | -            | -                | -                | -         |   -18.89 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           31 |     2524 | 2024-07-30 | Endpoint          | W   | 0.686      | -            | -                | -                | -         |     9.54 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           30 |     2557 | 2024-07-29 | TSM               | W   | 0.679      | -            | -                | -                | -         |    12.14 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           29 |     2581 | 2024-07-28 | Astralis Talent   | W   | 0.673      | -            | -                | -                | -         |     3.86 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           28 |     2591 | 2024-07-28 | NOM               | L   | 0.672      | -            | -                | -                | -         |   -18.94 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           27 |     2627 | 2024-07-26 | BC.Game           | L   | 0.660      | -            | -                | -                | -         |   -13.13 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           26 |     2669 | 2024-07-25 | CYBERSHOKE        | L   | 0.653      | -            | -                | -                | -         |   -10.30 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           25 |     2741 | 2024-07-23 | BC.Game           | L   | 0.640      | -            | -                | -                | -         |   -13.38 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           24 |     2794 | 2024-07-21 | Endpoint          | W   | 0.627      | -            | -                | -                | -         |     8.41 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           23 |     2835 | 2024-07-20 | Permitta          | L   | 0.620      | -            | -                | -                | -         |   -11.20 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           22 |     2972 | 2024-07-17 | TSM               | L   | 0.602      | -            | -                | -                | -         |    -8.72 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           21 |     3001 | 2024-07-17 | WOPA              | W   | 0.599      | -            | -                | -                | -         |     2.34 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           20 |     3035 | 2024-07-16 | Betera            | L   | 0.594      | -            | -                | -                | -         |   -16.81 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           19 |     3094 | 2024-07-15 | CPH Wolves        | L   | 0.586      | -            | -                | -                | -         |   -13.55 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           18 |     3328 | 2024-06-15 | 3DMAX             | L   | 0.388      | -            | -                | -                | -         |    -0.85 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           17 |     3371 | 2024-06-14 | Gaimin Gladiators | W   | 0.381      | -            | -                | -                | -         |     4.17 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           16 |     3386 | 2024-06-14 | Spirit Academy    | L   | 0.380      | -            | -                | -                | -         |    -6.02 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           15 |     3493 | 2024-06-10 | EYEBALLERS        | W   | 0.353      | -            | -                | -                | -         |     2.22 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           14 |     3647 | 2024-06-07 | HAVU              | W   | 0.334      | -            | -                | -                | -         |     0.77 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           13 |     3773 | 2024-06-05 | CYBERSHOKE        | W   | 0.321      | -            | -                | -                | -         |     4.30 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           12 |     3858 | 2024-06-03 | Permitta          | L   | 0.306      | -            | -                | -                | -         |    -6.03 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           11 |     3872 | 2024-06-02 | FURIA             | W   | 0.301      | 0.435        | 0.336 (0.044)    | -                | -         |     9.26 | easy, FinigaN, SELLTER, tN1R, xiELO |
|           10 |     3882 | 2024-06-02 | VP.Prodigy        | W   | 0.299      | -            | -                | -                | -         |     2.30 | easy, FinigaN, SELLTER, tN1R, xiELO |
|            9 |     3891 | 2024-06-01 | SINNERS           | W   | 0.295      | 0.435        | 0.165 (0.021)    | -                | -         |     7.38 | easy, FinigaN, SELLTER, tN1R, xiELO |
|            8 |     3934 | 2024-05-31 | GamerLegion       | W   | 0.288      | 0.435        | 0.250 (0.031)    | -                | -         |     5.92 | easy, FinigaN, SELLTER, tN1R, xiELO |
|            7 |     4015 | 2024-05-28 | Permitta          | L   | 0.265      | -            | -                | -                | -         |    -4.99 | easy, FinigaN, SELLTER, tN1R, xiELO |
|            6 |     4055 | 2024-05-26 | DMS               | W   | 0.252      | -            | -                | -                | -         |     2.46 | easy, FinigaN, SELLTER, tN1R, xiELO |
|            5 |     4081 | 2024-05-24 | SINNERS           | L   | 0.242      | -            | -                | -                | -         |    -1.55 | easy, FinigaN, SELLTER, tN1R, xiELO |
|            4 |     4096 | 2024-05-23 | Sampi             | L   | 0.235      | -            | -                | -                | -         |    -3.68 | easy, FinigaN, SELLTER, tN1R, xiELO |
|            3 |     4267 | 2024-05-18 | NOM               | W   | 0.201      | -            | -                | -                | -         |     0.46 | easy, FinigaN, SELLTER, tN1R, xiELO |
|            2 |     4339 | 2024-05-16 | Space             | W   | 0.188      | -            | -                | -                | -         |     1.45 | easy, FinigaN, SELLTER, tN1R, xiELO |
|            1 |     4388 | 2024-05-15 | 777               | W   | 0.181      | -            | -                | -                | -         |     0.71 | easy, FinigaN, SELLTER, tN1R, xiELO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29,698.87)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-10-03 |      1.000 | $7,500.00      | $7,500.00       |
| 2024-09-15 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-08-30 |      0.892 | $11,000.00     | $9,815.27       |
| 2024-06-16 |      0.394 | $2,000.00      | $788.55         |
| 2024-06-16 |      0.394 | $2,500.00      | $983.87         |
| 2024-06-02 |      0.301 | $22,000.00     | $6,611.19       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
