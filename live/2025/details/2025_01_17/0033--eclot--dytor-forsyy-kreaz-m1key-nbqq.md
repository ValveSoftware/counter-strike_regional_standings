### Roster Details<br />
Team Name: ECLOT<br />
Roster: Dytor, forsyy, kreaz, M1key, nbqq<br />
Global Rank: [33](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [24]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  1183.7<br />
<br />
Final Rank Value (1183.7) = Starting Rank Value (1357.6) + Head To Head Adjustments (-174.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.648[<sup>1</sup>](#table2)
- Bounty Collected: 0.410[<sup>2</sup>](#table1)
- Opponent Network: 0.260[<sup>2</sup>](#table1)
- LAN Wins: 0.613[<sup>2</sup>](#table1)

The average of these factors is 0.483<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1357.6
- 400 + ( ( 0.483 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1357.6


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
|           80 |      153 | 2024-12-17 | GUN5              | L   | 0.993      | -            | -                | -                | -         |   -17.49 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           79 |      164 | 2024-12-16 | Monte             | W   | 0.986      | 0.435        | 0.078 (0.033)    | 0.579 (0.248)    | -         |    10.71 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           78 |      203 | 2024-12-14 | ECSTATIC          | W   | 0.973      | 0.435        | 0.079 (0.034)    | 1.000 (0.423)    | -         |     9.36 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           77 |      232 | 2024-12-13 | NAVI Junior       | L   | 0.966      | -            | -                | -                | -         |   -17.49 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           76 |      248 | 2024-12-12 | ECSTATIC          | W   | 0.959      | 0.435        | 0.079 (0.033)    | 1.000 (0.417)    | -         |     8.13 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           75 |      594 | 2024-11-24 | UNiTY             | W   | 0.838      | 0.458        | 0.070 (0.027)    | -                | 1 (0.838) |     5.03 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           74 |      622 | 2024-11-23 | BRUTE             | W   | 0.832      | -            | -                | -                | 1 (0.832) |     1.93 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           73 |      702 | 2024-11-20 | fnatic            | L   | 0.810      | -            | -                | -                | -         |   -13.69 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           72 |      717 | 2024-11-18 | HEROIC            | W   | 0.802      | -            | -                | -                | 1 (0.802) |    14.04 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           71 |      728 | 2024-11-17 | SINNERS           | L   | 0.795      | -            | -                | -                | -         |   -16.37 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           70 |      747 | 2024-11-17 | GamerLegion       | W   | 0.790      | -            | -                | -                | 1 (0.790) |    17.85 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           69 |      751 | 2024-11-16 | Falcons           | L   | 0.789      | -            | -                | -                | -         |   -18.47 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           68 |      926 | 2024-11-11 | BetBoom           | L   | 0.752      | -            | -                | -                | -         |   -15.29 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           67 |      937 | 2024-11-11 | 9 Pandas          | L   | 0.751      | -            | -                | -                | -         |   -13.11 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           66 |      949 | 2024-11-10 | 9 Pandas          | L   | 0.746      | -            | -                | -                | -         |   -13.91 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           65 |      951 | 2024-11-10 | SINNERS           | W   | 0.745      | 0.384        | 0.101 (0.029)    | 0.683 (0.196)    | -         |     6.25 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           64 |      956 | 2024-11-10 | NAVI Junior       | W   | 0.744      | 0.371        | 0.204 (0.056)    | 1.000 (0.276)    | -         |     7.92 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           63 |      976 | 2024-11-09 | Sashi             | W   | 0.738      | -            | -                | -                | -         |     5.30 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           62 |      978 | 2024-11-09 | Rebels            | W   | 0.737      | -            | -                | -                | -         |     2.75 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           61 |      987 | 2024-11-08 | DMS               | W   | 0.732      | -            | -                | -                | -         |     1.97 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           60 |      993 | 2024-11-08 | Into the Breach   | W   | 0.731      | -            | -                | -                | -         |     4.30 | Blytz, Dytor, forsyy, nbqq, replay  |
|           59 |     1009 | 2024-11-07 | 9 Pandas          | L   | 0.724      | -            | -                | -                | -         |   -13.01 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           58 |     1027 | 2024-11-06 | Johnny Speeds     | W   | 0.717      | 0.384        | 0.109 (0.030)    | 0.770 (0.212)    | -         |     6.75 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           57 |     1046 | 2024-11-05 | SINNERS           | W   | 0.710      | 0.371        | 0.101 (0.027)    | 0.683 (0.180)    | -         |     6.98 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           56 |     1063 | 2024-11-04 | GUN5              | L   | 0.704      | -            | -                | -                | -         |   -14.35 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           55 |     1080 | 2024-11-03 | GUN5              | W   | 0.698      | 0.371        | 0.224 (0.058)    | 1.000 (0.259)    | -         |     7.75 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           54 |     1108 | 2024-11-02 | SovvyKiNG         | W   | 0.691      | -            | -                | -                | -         |     0.72 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           53 |     1133 | 2024-11-01 | Into the Breach   | W   | 0.684      | -            | -                | -                | -         |     4.31 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           52 |     1162 | 2024-10-30 | Aurora Young Blud | W   | 0.672      | 0.371        | -                | 0.838 (0.209)    | -         |     3.67 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           51 |     1202 | 2024-10-28 | Zero Tenacity     | W   | 0.659      | -            | -                | -                | -         |     6.30 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           50 |     1258 | 2024-10-26 | GUN5              | L   | 0.644      | -            | -                | -                | -         |   -13.29 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           49 |     1281 | 2024-10-24 | Sashi             | L   | 0.632      | -            | -                | -                | -         |   -15.34 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           48 |     1289 | 2024-10-24 | ALTERNATE aTTaX   | W   | 0.630      | -            | -                | -                | -         |     4.46 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           47 |     1296 | 2024-10-23 | Gaimin Gladiators | L   | 0.624      | -            | -                | -                | -         |   -15.96 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           46 |     1340 | 2024-10-20 | 9 Pandas          | W   | 0.604      | 0.384        | 0.159 (0.037)    | 0.802 (0.186)    | -         |     6.39 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           45 |     1417 | 2024-10-17 | los kogutos       | L   | 0.585      | -            | -                | -                | -         |   -13.48 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           44 |     1479 | 2024-10-14 | Apogee            | W   | 0.565      | -            | -                | -                | -         |     1.46 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           43 |     1614 | 2024-10-08 | WW                | W   | 0.523      | -            | -                | -                | -         |     0.36 | Blytz, Dytor, forsyy, nbqq, realzen |
|           42 |     1685 | 2024-10-05 | Sampi             | W   | 0.505      | -            | -                | -                | 1 (0.505) |     2.93 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           41 |     1694 | 2024-10-05 | The Prodigies     | W   | 0.504      | -            | -                | -                | 1 (0.504) |     0.31 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           40 |     1725 | 2024-10-04 | Sampi             | L   | 0.498      | -            | -                | -                | -         |   -13.04 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           39 |     1762 | 2024-10-03 | The Prodigies     | W   | 0.492      | -            | -                | -                | 1 (0.492) |     0.29 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           38 |     1767 | 2024-10-03 | 500               | L   | 0.491      | -            | -                | -                | -         |   -13.42 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           37 |     1845 | 2024-10-01 | Alliance          | W   | 0.479      | -            | -                | -                | -         |     1.88 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           36 |     1882 | 2024-09-30 | Monte Gen         | W   | 0.470      | -            | -                | -                | -         |     1.45 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           35 |     2218 | 2024-09-21 | Sampi             | L   | 0.412      | -            | -                | -                | -         |   -10.98 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           34 |     2234 | 2024-09-20 | SINNERS           | L   | 0.406      | -            | -                | -                | -         |    -9.61 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           33 |     2318 | 2024-09-18 | NAVI Junior       | L   | 0.390      | -            | -                | -                | -         |    -9.52 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           32 |     2348 | 2024-09-17 | kONO              | W   | 0.384      | -            | -                | -                | -         |     1.31 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           31 |     2364 | 2024-09-16 | NAVI Junior       | L   | 0.378      | -            | -                | -                | -         |    -9.47 | Blytz, Dytor, forsyy, kreaz, PR     |
|           30 |     2434 | 2024-09-14 | L&G               | W   | 0.364      | -            | -                | -                | -         |     0.81 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           29 |     2518 | 2024-09-11 | CPH Wolves        | L   | 0.345      | -            | -                | -                | -         |   -10.39 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           28 |     2532 | 2024-09-11 | kONO              | W   | 0.344      | -            | -                | -                | -         |     1.06 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           27 |     2574 | 2024-09-09 | MOUZ NXT          | W   | 0.331      | -            | -                | -                | -         |     0.32 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           26 |     2679 | 2024-09-05 | RUBY              | W   | 0.306      | -            | -                | -                | -         |     0.15 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           25 |     2754 | 2024-09-03 | K27               | L   | 0.292      | -            | -                | -                | -         |    -9.07 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           24 |     2892 | 2024-08-29 | Sampi             | L   | 0.257      | -            | -                | -                | -         |    -7.01 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           23 |     2945 | 2024-08-28 | ex-Enterprise     | W   | 0.251      | -            | -                | -                | -         |     0.56 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           22 |     2994 | 2024-08-27 | Aurora Young Blud | W   | 0.244      | -            | -                | -                | -         |     0.80 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           21 |     3111 | 2024-08-25 | ECSTATIC          | W   | 0.231      | -            | -                | -                | -         |     0.84 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           20 |     3131 | 2024-08-24 | GUN5              | L   | 0.225      | -            | -                | -                | -         |    -5.71 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           19 |     3135 | 2024-08-24 | los kogutos       | W   | 0.224      | -            | -                | -                | -         |     1.98 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           18 |     3161 | 2024-08-23 | UNPAID            | W   | 0.218      | -            | -                | -                | -         |     0.94 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           17 |     3203 | 2024-08-22 | Monte             | W   | 0.210      | -            | -                | -                | -         |     0.96 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           16 |     3231 | 2024-08-21 | 1WIN              | W   | 0.205      | -            | -                | -                | -         |     0.15 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           15 |     3261 | 2024-08-21 | BC.Game           | L   | 0.204      | -            | -                | -                | -         |    -5.98 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           14 |     3298 | 2024-08-20 | Illuminar         | W   | 0.197      | -            | -                | -                | -         |     0.14 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           13 |     3351 | 2024-08-18 | Preasy            | W   | 0.183      | -            | -                | -                | -         |     0.06 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           12 |     3447 | 2024-08-14 | Into the Breach   | L   | 0.158      | -            | -                | -                | -         |    -4.63 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           11 |     3453 | 2024-08-14 | Aurora Young Blud | L   | 0.157      | -            | -                | -                | -         |    -4.46 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           10 |     3629 | 2024-08-08 | Passion UA        | L   | 0.119      | -            | -                | -                | -         |    -2.65 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            9 |     3642 | 2024-08-08 | ex-Enterprise     | L   | 0.117      | -            | -                | -                | -         |    -3.45 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            8 |     3670 | 2024-08-07 | Revenant          | L   | 0.112      | -            | -                | -                | -         |    -3.43 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            7 |     3679 | 2024-08-07 | Nexus             | L   | 0.111      | -            | -                | -                | -         |    -1.15 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            6 |     3773 | 2024-08-04 | SINNERS           | W   | 0.093      | -            | -                | -                | 1 (0.093) |     0.57 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            5 |     3812 | 2024-08-03 | AVEZ              | W   | 0.086      | -            | -                | -                | 1 (0.086) |     0.04 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            4 |     3841 | 2024-08-02 | SINNERS           | W   | 0.079      | -            | -                | -                | 1 (0.079) |     0.49 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            3 |     3983 | 2024-07-30 | 1WIN              | W   | 0.058      | -            | -                | -                | -         |     0.04 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            2 |     4022 | 2024-07-29 | DASH              | L   | 0.051      | -            | -                | -                | -         |    -1.56 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            1 |     4138 | 2024-07-25 | HAVU              | W   | 0.025      | -            | -                | -                | -         |     0.01 | Blytz, Dytor, forsyy, kreaz, nbqq   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($64,652.73)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.29) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      0.993 | $10,000.00     | $9,931.37       |
| 2024-11-24 |      0.838 | $42,991.00     | $36,047.91      |
| 2024-11-12 |      0.759 | $1,000.00      | $758.76         |
| 2024-11-11 |      0.751 | $5,000.00      | $3,753.99       |
| 2024-11-10 |      0.746 | $7,500.00      | $5,596.29       |
| 2024-10-05 |      0.505 | $11,100.00     | $5,607.80       |
| 2024-09-22 |      0.419 | $661.00        | $276.94         |
| 2024-09-18 |      0.390 | $3,000.00      | $1,170.55       |
| 2024-08-30 |      0.264 | $3,000.00      | $791.39         |
| 2024-08-04 |      0.093 | $7,754.00      | $717.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
