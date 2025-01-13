### Roster Details<br />
Team Name: Sampi<br />
Roster: fino, sAvana1, semtex, The eLiVe, ZEDKO<br />
Global Rank: [98](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [70]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  881.4<br />
<br />
Final Rank Value (881.4) = Starting Rank Value (1001.5) + Head To Head Adjustments (-120.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.420[<sup>1</sup>](#table2)
- Bounty Collected: 0.371[<sup>2</sup>](#table1)
- Opponent Network: 0.105[<sup>2</sup>](#table1)
- LAN Wins: 0.317[<sup>2</sup>](#table1)

The average of these factors is 0.303<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1001.5
- 400 + ( ( 0.303 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1001.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |      330 | 2024-12-07 | CYBERSHOKE        | L   | 0.953      | -            | -                | -                | -         |   -16.03 | fino, sAvana1, semtex, The eLiVe, ZEDKO  |
|           62 |      371 | 2024-12-05 | Insilio           | L   | 0.941      | -            | -                | -                | -         |   -20.88 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           61 |      385 | 2024-12-05 | Gaimin Gladiators | L   | 0.939      | -            | -                | -                | -         |   -11.15 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           60 |      404 | 2024-12-04 | FLuffy Gangsters  | L   | 0.935      | -            | -                | -                | -         |   -20.86 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           59 |      468 | 2024-12-01 | Apogee            | L   | 0.912      | -            | -                | -                | -         |   -14.53 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           58 |      596 | 2024-11-24 | BRUTE             | W   | 0.866      | -            | -                | -                | 1 (0.866) |     5.82 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           57 |      624 | 2024-11-23 | UNiTY             | L   | 0.859      | -            | -                | -                | -         |   -15.04 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           56 |      638 | 2024-11-22 | Enterprise Gen    | W   | 0.854      | -            | -                | -                | 1 (0.854) |     2.11 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           55 |     1082 | 2024-11-03 | los kogutos       | L   | 0.725      | -            | -                | -                | -         |   -10.13 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           54 |     1186 | 2024-10-29 | 9INE              | L   | 0.693      | -            | -                | -                | -         |    -9.64 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           53 |     1268 | 2024-10-25 | los kogutos       | W   | 0.666      | 0.371        | 0.072 (0.018)    | 0.851 (0.210)    | 0 (0.000) |    12.91 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           52 |     1508 | 2024-10-12 | los kogutos       | L   | 0.580      | -            | -                | -                | -         |    -7.31 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           51 |     1681 | 2024-10-05 | ECLOT             | L   | 0.534      | -            | -                | -                | -         |    -3.18 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           50 |     1721 | 2024-10-04 | ECLOT             | W   | 0.527      | 0.367        | 0.284 (0.055)    | 1.000 (0.193)    | 1 (0.527) |    13.71 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           49 |     1931 | 2024-09-28 | Into the Breach   | L   | 0.487      | -            | -                | -                | -         |    -8.28 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           48 |     2189 | 2024-09-22 | SINNERS           | L   | 0.447      | -            | -                | -                | -         |    -4.59 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           47 |     2214 | 2024-09-21 | ECLOT             | W   | 0.440      | 0.346        | 0.284 (0.043)    | 1.000 (0.153)    | 1 (0.440) |    11.70 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           46 |     2239 | 2024-09-20 | UNiTY             | L   | 0.433      | -            | -                | -                | -         |    -7.68 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           45 |     2268 | 2024-09-19 | Into the Breach   | L   | 0.428      | -            | -                | -                | -         |    -8.15 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           44 |     2365 | 2024-09-16 | B8                | W   | 0.405      | 0.384        | 0.166 (0.026)    | 0.520 (0.081)    | 0 (0.000) |     8.98 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           43 |     2488 | 2024-09-12 | OG                | L   | 0.380      | -            | -                | -                | -         |    -6.48 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           42 |     2553 | 2024-09-10 | MOUZ NXT          | W   | 0.366      | -            | -                | -                | 0 (0.000) |     2.08 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           41 |     2566 | 2024-09-09 | SINNERS           | L   | 0.361      | -            | -                | -                | -         |    -3.98 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           40 |     2718 | 2024-09-04 | Metizport         | L   | 0.327      | -            | -                | -                | -         |    -1.27 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           39 |     2763 | 2024-09-03 | ex-Enterprise     | W   | 0.319      | -            | -                | -                | 0 (0.000) |     3.50 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           38 |     2802 | 2024-09-01 | EYEBALLERS        | L   | 0.306      | -            | -                | -                | -         |    -6.64 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           37 |     2829 | 2024-08-30 | Revenant          | L   | 0.294      | -            | -                | -                | -         |    -7.26 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           36 |     2842 | 2024-08-30 | GUN5              | L   | 0.292      | -            | -                | -                | -         |    -3.52 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           35 |     2870 | 2024-08-29 | Gaimin Gladiators | L   | 0.287      | -            | -                | -                | -         |    -5.39 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           34 |     2888 | 2024-08-29 | ECLOT             | W   | 0.285      | 0.371        | 0.284 (0.030)    | 1.000 (0.106)    | 0 (0.000) |     7.78 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           33 |     2929 | 2024-08-28 | GUN5              | L   | 0.279      | -            | -                | -                | -         |    -3.43 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           32 |     2966 | 2024-08-27 | CPH Wolves        | W   | 0.275      | 0.435        | -                | 0.367 (0.044)    | 0 (0.000) |     1.83 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           31 |     2986 | 2024-08-27 | TSM               | L   | 0.273      | -            | -                | -                | -         |    -5.45 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           30 |     3033 | 2024-08-26 | Sashi             | W   | 0.268      | 0.384        | 0.045 (0.005)    | 0.622 (0.064)    | -         |     4.41 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           29 |     3060 | 2024-08-26 | kONO              | W   | 0.267      | 0.384        | 0.044 (0.005)    | 0.721 (0.074)    | -         |     3.28 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           28 |     3080 | 2024-08-26 | Aurora Young Blud | W   | 0.265      | 0.371        | 0.045 (0.004)    | 0.841 (0.083)    | -         |     3.74 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           27 |     3152 | 2024-08-23 | ex-Enterprise     | W   | 0.247      | -            | -                | -                | -         |     2.60 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           26 |     3166 | 2024-08-23 | Verdant           | W   | 0.245      | 0.371        | 0.049 (0.004)    | 0.416 (0.038)    | -         |     3.54 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           25 |     3182 | 2024-08-22 | ALTERNATE aTTaX   | L   | 0.240      | -            | -                | -                | -         |    -2.68 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           24 |     3290 | 2024-08-20 | Alliance          | W   | 0.227      | -            | -                | -                | -         |     3.03 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           23 |     3325 | 2024-08-19 | Nexus             | W   | 0.220      | 0.143        | 0.397 (0.012)    | -                | -         |     6.49 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           22 |     3394 | 2024-08-16 | Revenant          | L   | 0.198      | -            | -                | -                | -         |    -4.95 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           21 |     3480 | 2024-08-13 | 9INE              | L   | 0.180      | -            | -                | -                | -         |    -2.81 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           20 |     3531 | 2024-08-12 | Metizport         | L   | 0.173      | -            | -                | -                | -         |    -0.61 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           19 |     3617 | 2024-08-08 | Nemiga            | L   | 0.148      | -            | -                | -                | -         |    -0.79 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           18 |     3686 | 2024-08-07 | TNL               | W   | 0.139      | -            | -                | -                | -         |     0.70 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           17 |     3749 | 2024-08-05 | Alliance          | W   | 0.126      | -            | -                | -                | -         |     1.72 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           16 |     3886 | 2024-08-01 | BC.Game           | L   | 0.100      | -            | -                | -                | -         |    -2.10 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           15 |     3896 | 2024-08-01 | ALTERNATE aTTaX   | L   | 0.099      | -            | -                | -                | -         |    -1.00 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           14 |     3927 | 2024-07-31 | Aurora Young Blud | L   | 0.094      | -            | -                | -                | -         |    -1.68 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           13 |     3945 | 2024-07-31 | Illuminar         | L   | 0.092      | -            | -                | -                | -         |    -2.51 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           12 |     3984 | 2024-07-30 | CYBERSHOKE        | W   | 0.087      | -            | -                | -                | -         |     0.80 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           11 |     3987 | 2024-07-30 | Monte Gen         | W   | 0.086      | -            | -                | -                | -         |     0.73 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           10 |     4019 | 2024-07-29 | CYBERSHOKE        | L   | 0.079      | -            | -                | -                | -         |    -1.76 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            9 |     4040 | 2024-07-28 | CPH Wolves        | W   | 0.074      | -            | -                | -                | -         |     0.50 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            8 |     4089 | 2024-07-26 | Endpoint          | W   | 0.061      | -            | -                | -                | -         |     0.58 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            7 |     4096 | 2024-07-26 | fnatic            | L   | 0.060      | -            | -                | -                | -         |    -0.56 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            6 |     4169 | 2024-07-24 | 9INE              | L   | 0.047      | -            | -                | -                | -         |    -0.74 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            5 |     4202 | 2024-07-23 | CPH Wolves        | W   | 0.041      | -            | -                | -                | -         |     0.28 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            4 |     4241 | 2024-07-22 | INFINITE          | W   | 0.032      | -            | -                | -                | -         |     0.05 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            3 |     4254 | 2024-07-21 | WOPA              | W   | 0.028      | -            | -                | -                | -         |     0.34 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            2 |     4329 | 2024-07-19 | Metizport         | L   | 0.014      | -            | -                | -                | -         |    -0.05 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            1 |     4375 | 2024-07-18 | Aurora Young Blud | L   | 0.007      | -            | -                | -                | -         |    -0.13 | fino, manguss, sAvana1, The eLiVe, ZEDKO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,881.47)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.867 | $5,159.00      | $4,472.69       |
| 2024-10-05 |      0.534 | $5,550.00      | $2,961.90       |
| 2024-09-22 |      0.447 | $1,321.00      | $591.06         |
| 2024-09-14 |      0.394 | $1,000.00      | $394.50         |
| 2024-08-30 |      0.292 | $5,000.00      | $1,461.33       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
