### Roster Details<br />
Team Name: ECLOT<br />
Roster: Dytor, forsyy, kreaz, M1key, nbqq<br />
Global Rank: [33](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [24]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  1183.0<br />
<br />
Final Rank Value (1183.0) = Starting Rank Value (1352.5) + Head To Head Adjustments (-169.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.648[<sup>1</sup>](#table2)
- Bounty Collected: 0.409[<sup>2</sup>](#table1)
- Opponent Network: 0.255[<sup>2</sup>](#table1)
- LAN Wins: 0.606[<sup>2</sup>](#table1)

The average of these factors is 0.480<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1352.5
- 400 + ( ( 0.480 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 1352.5


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
|           80 |      162 | 2024-12-17 | GUN5              | L   | 0.980      | -            | -                | -                | -         |   -17.31 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           79 |      173 | 2024-12-16 | Monte             | W   | 0.972      | 0.435        | 0.078 (0.033)    | 0.572 (0.242)    | -         |    10.47 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           78 |      212 | 2024-12-14 | ECSTATIC          | W   | 0.959      | 0.435        | 0.079 (0.033)    | 1.000 (0.417)    | -         |     9.16 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           77 |      241 | 2024-12-13 | NAVI Junior       | L   | 0.952      | -            | -                | -                | -         |   -17.35 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           76 |      257 | 2024-12-12 | ECSTATIC          | W   | 0.945      | 0.435        | 0.079 (0.033)    | 1.000 (0.411)    | -         |     7.96 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           75 |      603 | 2024-11-24 | UNiTY             | W   | 0.825      | 0.458        | 0.070 (0.026)    | -                | 1 (0.825) |     4.91 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           74 |      631 | 2024-11-23 | BRUTE             | W   | 0.818      | -            | -                | -                | 1 (0.818) |     1.90 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           73 |      711 | 2024-11-20 | fnatic            | L   | 0.796      | -            | -                | -                | -         |   -13.58 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           72 |      726 | 2024-11-18 | HEROIC            | W   | 0.788      | -            | -                | -                | 1 (0.788) |    13.57 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           71 |      737 | 2024-11-17 | SINNERS           | L   | 0.782      | -            | -                | -                | -         |   -16.18 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           70 |      756 | 2024-11-17 | GamerLegion       | W   | 0.777      | -            | -                | -                | 1 (0.777) |    17.53 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           69 |      760 | 2024-11-16 | Falcons           | L   | 0.776      | -            | -                | -                | -         |   -18.36 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           68 |      935 | 2024-11-11 | BetBoom           | L   | 0.739      | -            | -                | -                | -         |   -15.02 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           67 |      946 | 2024-11-11 | 9 Pandas          | L   | 0.737      | -            | -                | -                | -         |   -12.95 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           66 |      958 | 2024-11-10 | 9 Pandas          | L   | 0.733      | -            | -                | -                | -         |   -13.72 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           65 |      960 | 2024-11-10 | SINNERS           | W   | 0.732      | 0.384        | 0.100 (0.028)    | 0.676 (0.190)    | -         |     6.09 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           64 |      965 | 2024-11-10 | NAVI Junior       | W   | 0.730      | 0.371        | 0.204 (0.055)    | 1.000 (0.270)    | -         |     7.70 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           63 |      985 | 2024-11-09 | Sashi             | W   | 0.724      | -            | -                | -                | -         |     5.16 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           62 |      987 | 2024-11-09 | Rebels            | W   | 0.724      | -            | -                | -                | -         |     2.65 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           61 |      996 | 2024-11-08 | DMS               | W   | 0.718      | -            | -                | -                | -         |     1.88 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           60 |     1002 | 2024-11-08 | Into the Breach   | W   | 0.717      | -            | -                | -                | -         |     4.14 | Blytz, Dytor, forsyy, nbqq, replay  |
|           59 |     1018 | 2024-11-07 | 9 Pandas          | L   | 0.711      | -            | -                | -                | -         |   -12.86 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           58 |     1036 | 2024-11-06 | Johnny Speeds     | W   | 0.703      | 0.384        | 0.108 (0.029)    | 0.764 (0.207)    | -         |     6.57 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           57 |     1055 | 2024-11-05 | SINNERS           | W   | 0.697      | 0.371        | 0.100 (0.026)    | 0.676 (0.174)    | -         |     6.76 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           56 |     1072 | 2024-11-04 | GUN5              | L   | 0.690      | -            | -                | -                | -         |   -14.12 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           55 |     1089 | 2024-11-03 | GUN5              | W   | 0.684      | 0.371        | 0.225 (0.057)    | 1.000 (0.254)    | -         |     7.56 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           54 |     1117 | 2024-11-02 | SovvyKiNG         | W   | 0.678      | -            | -                | -                | -         |     0.69 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           53 |     1142 | 2024-11-01 | Into the Breach   | W   | 0.670      | -            | -                | -                | -         |     4.13 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           52 |     1171 | 2024-10-30 | Aurora Young Blud | W   | 0.659      | 0.371        | -                | 0.837 (0.204)    | -         |     3.56 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           51 |     1211 | 2024-10-28 | Zero Tenacity     | W   | 0.645      | -            | -                | -                | -         |     6.07 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           50 |     1267 | 2024-10-26 | GUN5              | L   | 0.630      | -            | -                | -                | -         |   -13.05 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           49 |     1290 | 2024-10-24 | Sashi             | L   | 0.618      | -            | -                | -                | -         |   -15.07 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           48 |     1298 | 2024-10-24 | ALTERNATE aTTaX   | W   | 0.617      | -            | -                | -                | -         |     4.38 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           47 |     1305 | 2024-10-23 | Gaimin Gladiators | L   | 0.611      | -            | -                | -                | -         |   -15.66 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           46 |     1349 | 2024-10-20 | 9 Pandas          | W   | 0.591      | 0.384        | 0.160 (0.036)    | 0.804 (0.183)    | -         |     6.20 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           45 |     1426 | 2024-10-17 | los kogutos       | L   | 0.571      | -            | -                | -                | -         |   -13.11 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           44 |     1488 | 2024-10-14 | Apogee            | W   | 0.552      | -            | -                | -                | -         |     1.40 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           43 |     1623 | 2024-10-08 | WW                | W   | 0.510      | -            | -                | -                | -         |     0.35 | Blytz, Dytor, forsyy, nbqq, realzen |
|           42 |     1694 | 2024-10-05 | Sampi             | W   | 0.492      | -            | -                | -                | 1 (0.492) |     2.83 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           41 |     1703 | 2024-10-05 | The Prodigies     | W   | 0.491      | -            | -                | -                | 1 (0.491) |     0.30 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           40 |     1734 | 2024-10-04 | Sampi             | L   | 0.485      | -            | -                | -                | -         |   -12.70 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           39 |     1771 | 2024-10-03 | The Prodigies     | W   | 0.478      | -            | -                | -                | 1 (0.478) |     0.28 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           38 |     1776 | 2024-10-03 | 500               | L   | 0.477      | -            | -                | -                | -         |   -13.07 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           37 |     1854 | 2024-10-01 | Alliance          | W   | 0.465      | -            | -                | -                | -         |     1.82 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           36 |     1891 | 2024-09-30 | Monte Gen         | W   | 0.457      | -            | -                | -                | -         |     1.39 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           35 |     2227 | 2024-09-21 | Sampi             | L   | 0.398      | -            | -                | -                | -         |   -10.63 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           34 |     2243 | 2024-09-20 | SINNERS           | L   | 0.392      | -            | -                | -                | -         |    -9.32 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           33 |     2327 | 2024-09-18 | NAVI Junior       | L   | 0.377      | -            | -                | -                | -         |    -9.22 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           32 |     2357 | 2024-09-17 | kONO              | W   | 0.371      | -            | -                | -                | -         |     1.28 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           31 |     2373 | 2024-09-16 | NAVI Junior       | L   | 0.364      | -            | -                | -                | -         |    -9.15 | Blytz, Dytor, forsyy, kreaz, PR     |
|           30 |     2443 | 2024-09-14 | L&G               | W   | 0.350      | -            | -                | -                | -         |     0.78 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           29 |     2527 | 2024-09-11 | CPH Wolves        | L   | 0.332      | -            | -                | -                | -         |    -9.98 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           28 |     2541 | 2024-09-11 | kONO              | W   | 0.330      | -            | -                | -                | -         |     1.03 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           27 |     2583 | 2024-09-09 | MOUZ NXT          | W   | 0.318      | -            | -                | -                | -         |     0.30 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           26 |     2688 | 2024-09-05 | RUBY              | W   | 0.292      | -            | -                | -                | -         |     0.14 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           25 |     2763 | 2024-09-03 | K27               | L   | 0.279      | -            | -                | -                | -         |    -8.65 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           24 |     2901 | 2024-08-29 | Sampi             | L   | 0.243      | -            | -                | -                | -         |    -6.64 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           23 |     2954 | 2024-08-28 | ex-Enterprise     | W   | 0.237      | -            | -                | -                | -         |     0.53 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           22 |     3003 | 2024-08-27 | Aurora Young Blud | W   | 0.231      | -            | -                | -                | -         |     0.76 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           21 |     3120 | 2024-08-25 | ECSTATIC          | W   | 0.217      | -            | -                | -                | -         |     0.79 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           20 |     3140 | 2024-08-24 | GUN5              | L   | 0.211      | -            | -                | -                | -         |    -5.35 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           19 |     3144 | 2024-08-24 | los kogutos       | W   | 0.210      | -            | -                | -                | -         |     1.90 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           18 |     3170 | 2024-08-23 | UNPAID            | W   | 0.204      | -            | -                | -                | -         |     0.87 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           17 |     3212 | 2024-08-22 | Monte             | W   | 0.196      | -            | -                | -                | -         |     0.90 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           16 |     3240 | 2024-08-21 | 1WIN              | W   | 0.192      | -            | -                | -                | -         |     0.14 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           15 |     3270 | 2024-08-21 | BC.Game           | L   | 0.191      | -            | -                | -                | -         |    -5.58 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           14 |     3307 | 2024-08-20 | Illuminar         | W   | 0.184      | -            | -                | -                | -         |     0.14 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           13 |     3360 | 2024-08-18 | Preasy            | W   | 0.170      | -            | -                | -                | -         |     0.06 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           12 |     3456 | 2024-08-14 | Into the Breach   | L   | 0.145      | -            | -                | -                | -         |    -4.24 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           11 |     3462 | 2024-08-14 | Aurora Young Blud | L   | 0.144      | -            | -                | -                | -         |    -4.07 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           10 |     3638 | 2024-08-08 | Passion UA        | L   | 0.105      | -            | -                | -                | -         |    -2.34 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            9 |     3651 | 2024-08-08 | ex-Enterprise     | L   | 0.103      | -            | -                | -                | -         |    -3.05 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            8 |     3679 | 2024-08-07 | Revenant          | L   | 0.098      | -            | -                | -                | -         |    -3.01 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            7 |     3688 | 2024-08-07 | Nexus             | L   | 0.098      | -            | -                | -                | -         |    -0.99 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            6 |     3782 | 2024-08-04 | SINNERS           | W   | 0.079      | -            | -                | -                | 1 (0.079) |     0.49 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            5 |     3821 | 2024-08-03 | AVEZ              | W   | 0.072      | -            | -                | -                | 1 (0.072) |     0.03 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            4 |     3850 | 2024-08-02 | SINNERS           | W   | 0.066      | -            | -                | -                | 1 (0.066) |     0.41 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            3 |     3992 | 2024-07-30 | 1WIN              | W   | 0.045      | -            | -                | -                | -         |     0.03 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            2 |     4031 | 2024-07-29 | DASH              | L   | 0.037      | -            | -                | -                | -         |    -1.14 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            1 |     4147 | 2024-07-25 | HAVU              | W   | 0.011      | -            | -                | -                | -         |     0.00 | Blytz, Dytor, forsyy, kreaz, nbqq   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($63,404.19)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.29) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      0.980 | $10,000.00     | $9,795.66       |
| 2024-11-24 |      0.825 | $42,991.00     | $35,464.51      |
| 2024-11-12 |      0.745 | $1,000.00      | $745.19         |
| 2024-11-11 |      0.737 | $5,000.00      | $3,686.14       |
| 2024-11-10 |      0.733 | $7,500.00      | $5,494.52       |
| 2024-10-05 |      0.492 | $11,100.00     | $5,457.17       |
| 2024-09-22 |      0.405 | $661.00        | $267.97         |
| 2024-09-18 |      0.377 | $3,000.00      | $1,129.84       |
| 2024-08-30 |      0.250 | $3,000.00      | $750.68         |
| 2024-08-04 |      0.079 | $7,754.00      | $612.51         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
