### Roster Details<br />
Team Name: ECLOT<br />
Roster: Dytor, forsyy, kreaz, M1key, nbqq<br />
Global Rank: [34](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [25]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  1180.0<br />
<br />
Final Rank Value (1180.0) = Starting Rank Value (1380.7) + Head To Head Adjustments (-200.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.625[<sup>1</sup>](#table2)
- Bounty Collected: 0.406[<sup>2</sup>](#table1)
- Opponent Network: 0.305[<sup>2</sup>](#table1)
- LAN Wins: 0.677[<sup>2</sup>](#table1)

The average of these factors is 0.503<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1380.7
- 400 + ( ( 0.503 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 1380.7


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
|           85 |       93 | 2024-12-17 | GUN5              | L   | 1.000      | -            | -                | -                | -         |   -17.19 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           84 |      104 | 2024-12-16 | Monte             | W   | 1.000      | 0.435        | 0.070 (0.030)    | 0.674 (0.293)    | -         |    12.30 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           83 |      143 | 2024-12-14 | ECSTATIC          | W   | 1.000      | 0.435        | 0.067 (0.029)    | 1.000 (0.435)    | -         |    10.35 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           82 |      172 | 2024-12-13 | NAVI Junior       | L   | 1.000      | -            | -                | -                | -         |   -17.24 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           81 |      188 | 2024-12-12 | ECSTATIC          | W   | 1.000      | 0.435        | 0.067 (0.029)    | 1.000 (0.435)    | -         |     9.18 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           80 |      534 | 2024-11-24 | UNiTY             | W   | 0.966      | 0.458        | 0.064 (0.028)    | -                | 1 (0.966) |     6.13 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           79 |      562 | 2024-11-23 | BRUTE             | W   | 0.959      | -            | -                | -                | 1 (0.959) |     2.19 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           78 |      642 | 2024-11-20 | fnatic            | L   | 0.937      | -            | -                | -                | -         |   -14.14 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           77 |      657 | 2024-11-18 | Sangal            | W   | 0.929      | -            | -                | -                | 1 (0.929) |    18.89 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           76 |      668 | 2024-11-17 | SINNERS           | L   | 0.923      | -            | -                | -                | -         |   -17.58 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           75 |      687 | 2024-11-17 | GamerLegion       | W   | 0.917      | -            | -                | -                | 1 (0.917) |    18.82 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           74 |      691 | 2024-11-16 | Falcons           | L   | 0.917      | -            | -                | -                | -         |   -18.23 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           73 |      866 | 2024-11-11 | BetBoom           | L   | 0.880      | -            | -                | -                | -         |   -16.75 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           72 |      877 | 2024-11-11 | 9 Pandas          | L   | 0.878      | -            | -                | -                | -         |   -14.26 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           71 |      889 | 2024-11-10 | 9 Pandas          | L   | 0.873      | -            | -                | -                | -         |   -15.32 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           70 |      891 | 2024-11-10 | SINNERS           | W   | 0.873      | 0.384        | 0.082 (0.027)    | 0.749 (0.251)    | -         |     8.20 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           69 |      896 | 2024-11-10 | NAVI Junior       | W   | 0.871      | 0.371        | 0.180 (0.058)    | 1.000 (0.323)    | -         |    10.20 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           68 |      916 | 2024-11-09 | Sashi             | W   | 0.865      | -            | -                | -                | -         |     7.32 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           67 |      918 | 2024-11-09 | Rebels            | W   | 0.865      | -            | -                | -                | -         |     4.16 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           66 |      927 | 2024-11-08 | DMS               | W   | 0.859      | -            | -                | -                | -         |     3.10 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           65 |      933 | 2024-11-08 | Into the Breach   | W   | 0.858      | -            | -                | -                | -         |     6.20 | Blytz, Dytor, forsyy, nbqq, replay  |
|           64 |      949 | 2024-11-07 | 9 Pandas          | L   | 0.852      | -            | -                | -                | -         |   -13.99 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           63 |      967 | 2024-11-06 | Johnny Speeds     | W   | 0.844      | 0.384        | 0.102 (0.033)    | 0.869 (0.282)    | -         |     8.95 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           62 |      986 | 2024-11-05 | SINNERS           | W   | 0.838      | 0.371        | 0.082 (0.025)    | 0.749 (0.232)    | -         |     9.72 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           61 |     1003 | 2024-11-04 | GUN5              | L   | 0.831      | -            | -                | -                | -         |   -16.16 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           60 |     1020 | 2024-11-03 | GUN5              | W   | 0.825      | 0.371        | 0.181 (0.055)    | 1.000 (0.306)    | -         |     9.88 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           59 |     1048 | 2024-11-02 | SovvyKiNG         | W   | 0.818      | -            | -                | -                | -         |     1.17 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           58 |     1073 | 2024-11-01 | Into the Breach   | W   | 0.811      | -            | -                | -                | -         |     6.70 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           57 |     1102 | 2024-10-30 | Aurora Young Blud | W   | 0.800      | 0.371        | -                | 0.888 (0.263)    | -         |     5.08 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           56 |     1142 | 2024-10-28 | Zero Tenacity     | W   | 0.786      | -            | -                | -                | -         |     9.46 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           55 |     1198 | 2024-10-26 | GUN5              | L   | 0.771      | -            | -                | -                | -         |   -15.12 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           54 |     1221 | 2024-10-24 | Sashi             | L   | 0.759      | -            | -                | -                | -         |   -16.87 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           53 |     1229 | 2024-10-24 | ALTERNATE aTTaX   | W   | 0.758      | -            | -                | -                | -         |     5.65 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           52 |     1236 | 2024-10-23 | Gaimin Gladiators | L   | 0.752      | -            | -                | -                | -         |   -18.08 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           51 |     1280 | 2024-10-20 | 9 Pandas          | W   | 0.732      | 0.384        | 0.103 (0.029)    | 0.811 (0.228)    | -         |     8.75 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           50 |     1357 | 2024-10-17 | los kogutos       | L   | 0.712      | -            | -                | -                | -         |   -16.44 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           49 |     1419 | 2024-10-14 | Apogee            | W   | 0.693      | -            | -                | -                | -         |     2.35 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           48 |     1554 | 2024-10-08 | WW                | W   | 0.651      | -            | -                | -                | -         |     0.57 | Blytz, Dytor, forsyy, nbqq, realzen |
|           47 |     1625 | 2024-10-05 | Sampi             | W   | 0.633      | -            | -                | -                | 1 (0.633) |     4.31 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           46 |     1634 | 2024-10-05 | The Prodigies     | W   | 0.631      | -            | -                | -                | 1 (0.631) |     0.45 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           45 |     1665 | 2024-10-04 | Sampi             | L   | 0.626      | -            | -                | -                | -         |   -15.78 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           44 |     1702 | 2024-10-03 | The Prodigies     | W   | 0.619      | -            | -                | -                | 1 (0.619) |     0.41 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           43 |     1707 | 2024-10-03 | 500               | L   | 0.618      | -            | -                | -                | -         |   -16.50 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           42 |     1785 | 2024-10-01 | Alliance          | W   | 0.606      | -            | -                | -                | -         |     2.54 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           41 |     1822 | 2024-09-30 | Monte Gen         | W   | 0.597      | -            | -                | -                | -         |     2.43 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           40 |     2158 | 2024-09-21 | Sampi             | L   | 0.539      | -            | -                | -                | -         |   -13.98 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           39 |     2174 | 2024-09-20 | SINNERS           | L   | 0.533      | -            | -                | -                | -         |   -11.56 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           38 |     2258 | 2024-09-18 | NAVI Junior       | L   | 0.517      | -            | -                | -                | -         |   -12.18 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           37 |     2288 | 2024-09-17 | kONO              | W   | 0.511      | -            | -                | -                | -         |     1.80 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           36 |     2304 | 2024-09-16 | NAVI Junior       | L   | 0.505      | -            | -                | -                | -         |   -12.36 | Blytz, Dytor, forsyy, kreaz, PR     |
|           35 |     2374 | 2024-09-14 | L&G               | W   | 0.491      | -            | -                | -                | -         |     1.18 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           34 |     2458 | 2024-09-11 | CPH Wolves        | L   | 0.473      | -            | -                | -                | -         |   -14.23 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           33 |     2472 | 2024-09-11 | kONO              | W   | 0.471      | -            | -                | -                | -         |     1.44 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           32 |     2514 | 2024-09-09 | MOUZ NXT          | W   | 0.458      | -            | -                | -                | -         |     0.66 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           31 |     2619 | 2024-09-05 | RUBY              | W   | 0.433      | -            | -                | -                | -         |     0.26 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           30 |     2694 | 2024-09-03 | K27               | L   | 0.419      | -            | -                | -                | -         |   -13.00 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           29 |     2832 | 2024-08-29 | Sampi             | L   | 0.384      | -            | -                | -                | -         |   -10.30 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           28 |     2885 | 2024-08-28 | ex-Enterprise     | W   | 0.378      | -            | -                | -                | -         |     0.96 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           27 |     2934 | 2024-08-27 | Aurora Young Blud | W   | 0.372      | -            | -                | -                | -         |     1.30 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           26 |     3051 | 2024-08-25 | ECSTATIC          | W   | 0.358      | -            | -                | -                | -         |     1.32 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           25 |     3071 | 2024-08-24 | GUN5              | L   | 0.352      | -            | -                | -                | -         |    -9.18 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           24 |     3075 | 2024-08-24 | los kogutos       | W   | 0.351      | -            | -                | -                | -         |     2.85 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           23 |     3101 | 2024-08-23 | UNPAID            | W   | 0.345      | -            | -                | -                | -         |     1.90 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           22 |     3143 | 2024-08-22 | Monte             | W   | 0.337      | -            | -                | -                | -         |     1.68 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           21 |     3171 | 2024-08-21 | 1WIN              | W   | 0.332      | -            | -                | -                | -         |     0.32 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           20 |     3201 | 2024-08-21 | BC.Game           | L   | 0.331      | -            | -                | -                | -         |    -9.64 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           19 |     3238 | 2024-08-20 | Illuminar         | W   | 0.324      | -            | -                | -                | -         |     0.28 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           18 |     3291 | 2024-08-18 | Preasy            | W   | 0.311      | -            | -                | -                | -         |     0.33 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           17 |     3387 | 2024-08-14 | Into the Breach   | L   | 0.286      | -            | -                | -                | -         |    -8.27 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           16 |     3393 | 2024-08-14 | Aurora Young Blud | L   | 0.284      | -            | -                | -                | -         |    -8.07 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           15 |     3569 | 2024-08-08 | Passion UA        | L   | 0.246      | -            | -                | -                | -         |    -5.38 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           14 |     3582 | 2024-08-08 | ex-Enterprise     | L   | 0.244      | -            | -                | -                | -         |    -7.18 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           13 |     3610 | 2024-08-07 | Revenant          | L   | 0.239      | -            | -                | -                | -         |    -7.31 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           12 |     3619 | 2024-08-07 | Nexus             | L   | 0.239      | -            | -                | -                | -         |    -2.93 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           11 |     3713 | 2024-08-04 | SINNERS           | W   | 0.220      | -            | -                | -                | 1 (0.220) |     1.36 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           10 |     3752 | 2024-08-03 | AVEZ              | W   | 0.213      | -            | -                | -                | 1 (0.213) |     0.10 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            9 |     3781 | 2024-08-02 | SINNERS           | W   | 0.207      | -            | -                | -                | 1 (0.207) |     1.28 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            8 |     3923 | 2024-07-30 | 1WIN              | W   | 0.186      | -            | -                | -                | -         |     0.12 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            7 |     3962 | 2024-07-29 | DASH              | L   | 0.178      | -            | -                | -                | -         |    -5.48 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            6 |     4078 | 2024-07-25 | HAVU              | W   | 0.152      | -            | -                | -                | -         |     0.04 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            5 |     4454 | 2024-07-16 | FAVBET            | L   | 0.092      | -            | -                | -                | -         |    -2.68 | Dytor, forsyy, kreaz, nbqq, olik    |
|            4 |     4512 | 2024-07-14 | Kosovo            | L   | 0.081      | -            | -                | -                | -         |    -2.52 | Dytor, forsyy, nbqq, NEOFRAG, PR    |
|            3 |     4523 | 2024-07-14 | Kosovo            | W   | 0.079      | -            | -                | -                | -         |     0.02 | Dytor, forsyy, nbqq, NEOFRAG, PR    |
|            2 |     4528 | 2024-07-13 | ALTERNATE aTTaX   | W   | 0.074      | -            | -                | -                | -         |     0.48 | Dytor, forsyy, K1-FiDa, nbqq, PR    |
|            1 |     4622 | 2024-07-08 | Hungary           | W   | 0.040      | -            | -                | -                | -         |     0.07 | Dytor, forsyy, K1-FiDa, nbqq, PR    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($75,160.67)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.25) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-11-24 |      0.966 | $42,991.00     | $41,520.63      |
| 2024-11-12 |      0.886 | $1,000.00      | $886.06         |
| 2024-11-11 |      0.878 | $5,000.00      | $4,390.49       |
| 2024-11-10 |      0.873 | $7,500.00      | $6,551.04       |
| 2024-10-05 |      0.633 | $11,100.00     | $7,020.82       |
| 2024-09-22 |      0.546 | $661.00        | $361.08         |
| 2024-09-18 |      0.517 | $3,000.00      | $1,552.45       |
| 2024-08-30 |      0.391 | $3,000.00      | $1,173.29       |
| 2024-08-04 |      0.220 | $7,754.00      | $1,704.81       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
