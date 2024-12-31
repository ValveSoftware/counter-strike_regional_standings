### Roster Details<br />
Team Name: Nemiga<br />
Roster: 1eeR, khaN, riskyb0b, Xant3r, zweih<br />
Global Rank: [26](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [19]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  1234.8<br />
<br />
Final Rank Value (1234.8) = Starting Rank Value (1298.7) + Head To Head Adjustments (-63.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.755[<sup>1</sup>](#table2)
- Bounty Collected: 0.459[<sup>2</sup>](#table1)
- Opponent Network: 0.222[<sup>2</sup>](#table1)
- LAN Wins: 0.409[<sup>2</sup>](#table1)

The average of these factors is 0.461<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1298.7
- 400 + ( ( 0.461 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 1298.7


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
|           61 |      655 | 2024-11-18 | BetBoom         | L   | 0.930      | -            | -                | -                | -         |   -18.25 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           60 |      664 | 2024-11-18 | Rebels          | W   | 0.924      | -            | -                | -                | 1 (0.924) |     3.36 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           59 |      680 | 2024-11-17 | Cloud9          | L   | 0.918      | -            | -                | -                | -         |   -20.19 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           58 |      694 | 2024-11-16 | MOUZ            | L   | 0.916      | -            | -                | -                | -         |    -1.73 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           57 |      910 | 2024-11-09 | NAVI Junior     | L   | 0.866      | -            | -                | -                | -         |   -19.51 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           56 |      928 | 2024-11-08 | 500             | W   | 0.859      | 0.426        | -                | 0.864 (0.316)    | 0 (0.000) |     5.56 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           55 |      953 | 2024-11-07 | PARIVISION      | W   | 0.851      | -            | -                | -                | 0 (0.000) |     4.32 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           54 |      980 | 2024-11-05 | Into the Breach | W   | 0.840      | 0.426        | -                | 0.575 (0.206)    | 0 (0.000) |     4.27 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           53 |     1272 | 2024-10-20 | Sangal          | L   | 0.733      | -            | -                | -                | -         |   -10.77 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           52 |     1291 | 2024-10-19 | UNPAID          | W   | 0.727      | 0.624        | 0.130 (0.059)    | -                | 1 (0.727) |     4.89 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           51 |     1294 | 2024-10-19 | 3DMAX           | W   | 0.726      | 0.500        | 0.428 (0.155)    | 0.664 (0.241)    | 0 (0.000) |    14.74 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           50 |     1308 | 2024-10-19 | fnatic          | W   | 0.725      | 0.624        | 0.189 (0.085)    | -                | 1 (0.725) |     8.31 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           49 |     1333 | 2024-10-18 | Fluxo           | W   | 0.718      | 0.624        | 0.119 (0.054)    | 0.606 (0.272)    | 1 (0.718) |     8.57 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           48 |     1348 | 2024-10-17 | Sangal          | L   | 0.713      | -            | -                | -                | -         |    -9.39 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           47 |     1363 | 2024-10-17 | Aurora          | W   | 0.711      | 0.624        | 0.054 (0.024)    | -                | 1 (0.711) |     3.80 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           46 |     1381 | 2024-10-16 | 3DMAX           | W   | 0.707      | 0.500        | 0.428 (0.151)    | 0.664 (0.235)    | 0 (0.000) |    15.09 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           45 |     1388 | 2024-10-16 | Sangal          | L   | 0.706      | -            | -                | -                | -         |    -9.96 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           44 |     1873 | 2024-09-28 | SAW             | L   | 0.586      | -            | -                | -                | -         |    -5.40 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           43 |     1906 | 2024-09-27 | Alliance        | W   | 0.580      | -            | -                | -                | -         |     2.36 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           42 |     1921 | 2024-09-27 | 3DMAX           | L   | 0.579      | -            | -                | -                | -         |    -4.65 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           41 |     1951 | 2024-09-26 | GUN5            | W   | 0.573      | -            | -                | -                | -         |     4.59 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           40 |     1967 | 2024-09-26 | RUSTEC          | W   | 0.573      | -            | -                | -                | -         |     0.15 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           39 |     2071 | 2024-09-24 | 9INE            | L   | 0.559      | -            | -                | -                | -         |   -14.21 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           38 |     2103 | 2024-09-23 | Johnny Speeds   | W   | 0.553      | 0.443        | 0.102 (0.025)    | 0.869 (0.213)    | -         |     4.43 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           37 |     2107 | 2024-09-23 | AMKAL           | L   | 0.553      | -            | -                | -                | -         |   -15.61 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           36 |     2137 | 2024-09-22 | 9 Pandas        | W   | 0.544      | 0.443        | 0.103 (0.025)    | 0.811 (0.195)    | -         |     4.90 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           35 |     2153 | 2024-09-21 | CYBERSHOKE      | W   | 0.540      | 0.443        | -                | 0.699 (0.167)    | -         |     1.91 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           34 |     2175 | 2024-09-20 | 9INE            | L   | 0.533      | -            | -                | -                | -         |   -14.08 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           33 |     2222 | 2024-09-19 | 9 Pandas        | W   | 0.525      | 0.443        | 0.103 (0.024)    | 0.811 (0.188)    | -         |     4.99 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           32 |     2246 | 2024-09-18 | SINNERS         | W   | 0.520      | -            | -                | -                | -         |     4.77 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           31 |     2298 | 2024-09-16 | CYBERSHOKE      | W   | 0.506      | -            | -                | -                | -         |     1.73 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           30 |     2308 | 2024-09-16 | BOGATYRI        | W   | 0.504      | -            | -                | -                | -         |     0.12 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           29 |     2433 | 2024-09-12 | Monte           | W   | 0.478      | -            | -                | -                | -         |     3.25 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           28 |     2547 | 2024-09-07 | Zero Tenacity   | L   | 0.447      | -            | -                | -                | -         |   -10.66 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           27 |     2612 | 2024-09-05 | los kogutos     | W   | 0.434      | 0.435        | -                | 0.989 (0.186)    | -         |     3.88 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           26 |     2704 | 2024-09-03 | Sashi           | W   | 0.418      | -            | -                | -                | -         |     2.57 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           25 |     2876 | 2024-08-28 | Metizport       | L   | 0.378      | -            | -                | -                | -         |    -5.32 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           24 |     2918 | 2024-08-27 | ALTERNATE aTTaX | L   | 0.373      | -            | -                | -                | -         |    -8.73 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           23 |     3088 | 2024-08-23 | Insilio         | W   | 0.347      | -            | -                | -                | -         |     0.73 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           22 |     3102 | 2024-08-23 | 9 Pandas        | L   | 0.345      | -            | -                | -                | -         |    -7.80 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           21 |     3142 | 2024-08-22 | Sashi           | W   | 0.337      | -            | -                | -                | -         |     1.98 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           20 |     3184 | 2024-08-21 | los kogutos     | L   | 0.332      | -            | -                | -                | -         |    -7.36 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           19 |     3206 | 2024-08-21 | ARCRED          | W   | 0.331      | -            | -                | -                | -         |     0.57 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           18 |     3369 | 2024-08-15 | Sangal          | W   | 0.292      | -            | -                | -                | -         |     4.06 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           17 |     3459 | 2024-08-12 | 3DMAX           | W   | 0.274      | 0.500        | 0.428 (0.059)    | -                | -         |     6.19 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           16 |     3499 | 2024-08-11 | Endpoint        | W   | 0.265      | -            | -                | -                | -         |     0.76 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           15 |     3523 | 2024-08-10 | B8              | W   | 0.258      | -            | -                | -                | -         |     2.60 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           14 |     3544 | 2024-08-09 | 9 Pandas        | W   | 0.253      | -            | -                | -                | -         |     2.38 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           13 |     3561 | 2024-08-08 | Sampi           | W   | 0.247      | -            | -                | -                | -         |     1.32 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           12 |     3596 | 2024-08-07 | B8              | W   | 0.241      | -            | -                | -                | -         |     2.50 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           11 |     3717 | 2024-08-04 | Aurora          | W   | 0.219      | -            | -                | -                | -         |     0.43 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           10 |     3753 | 2024-08-03 | los kogutos     | L   | 0.213      | -            | -                | -                | -         |    -4.06 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            9 |     3797 | 2024-08-02 | fnatic          | L   | 0.205      | -            | -                | -                | -         |    -4.26 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            8 |     3801 | 2024-08-02 | Johnny Speeds   | L   | 0.204      | -            | -                | -                | -         |    -4.94 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            7 |     3867 | 2024-07-31 | SovvyKiNG       | W   | 0.194      | -            | -                | -                | -         |     0.11 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            6 |     3929 | 2024-07-30 | G2 Ares         | W   | 0.185      | -            | -                | -                | -         |     0.10 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            5 |     4281 | 2024-07-19 | Passion UA      | L   | 0.112      | -            | -                | -                | -         |    -2.15 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            4 |     4307 | 2024-07-18 | Qiang           | W   | 0.107      | -            | -                | -                | -         |     0.09 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            3 |     4378 | 2024-07-17 | UNPAID          | L   | 0.101      | -            | -                | -                | -         |    -2.49 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            2 |     4440 | 2024-07-16 | ARCRED          | W   | 0.094      | -            | -                | -                | -         |     0.16 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            1 |     4487 | 2024-07-15 | Passion UA      | W   | 0.087      | -            | -                | -                | -         |     1.06 | 1eeR, khaN, riskyb0b, Xant3r, zweih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($141,425.58)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.47) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.866 | $10,000.00     | $8,659.29       |
| 2024-10-20 |      0.733 | $12,500.00     | $9,156.90       |
| 2024-10-19 |      0.727 | $150,000.00    | $109,078.73     |
| 2024-09-26 |      0.573 | $500.00        | $286.48         |
| 2024-09-24 |      0.559 | $12,000.00     | $6,704.52       |
| 2024-09-08 |      0.453 | $2,000.00      | $906.37         |
| 2024-08-11 |      0.265 | $25,000.00     | $6,633.30       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
