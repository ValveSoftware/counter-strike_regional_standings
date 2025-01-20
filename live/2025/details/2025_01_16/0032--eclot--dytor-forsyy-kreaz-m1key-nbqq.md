### Roster Details<br />
Team Name: ECLOT<br />
Roster: Dytor, forsyy, kreaz, M1key, nbqq<br />
Global Rank: [32](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [23]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  1184.8<br />
<br />
Final Rank Value (1184.8) = Starting Rank Value (1359.5) + Head To Head Adjustments (-174.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.648[<sup>1</sup>](#table2)
- Bounty Collected: 0.411[<sup>2</sup>](#table1)
- Opponent Network: 0.263[<sup>2</sup>](#table1)
- LAN Wins: 0.616[<sup>2</sup>](#table1)

The average of these factors is 0.484<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1359.5
- 400 + ( ( 0.484 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1359.5


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
|           80 |      176 | 2024-12-17 | GUN5              | L   | 0.999      | -            | -                | -                | -         |   -17.52 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           79 |      187 | 2024-12-16 | Monte             | W   | 0.992      | 0.435        | 0.078 (0.034)    | 0.583 (0.251)    | -         |    11.10 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           78 |      226 | 2024-12-14 | ECSTATIC          | W   | 0.979      | 0.435        | 0.079 (0.034)    | 1.000 (0.425)    | -         |     9.50 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           77 |      255 | 2024-12-13 | NAVI Junior       | L   | 0.972      | -            | -                | -                | -         |   -17.52 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           76 |      271 | 2024-12-12 | ECSTATIC          | W   | 0.965      | 0.435        | 0.079 (0.033)    | 1.000 (0.419)    | -         |     8.25 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           75 |      617 | 2024-11-24 | UNiTY             | W   | 0.845      | 0.458        | 0.070 (0.027)    | -                | 1 (0.845) |     5.07 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           74 |      645 | 2024-11-23 | BRUTE             | W   | 0.838      | -            | -                | -                | 1 (0.838) |     1.93 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           73 |      725 | 2024-11-20 | fnatic            | L   | 0.816      | -            | -                | -                | -         |   -13.73 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           72 |      740 | 2024-11-18 | HEROIC            | W   | 0.808      | -            | -                | -                | 1 (0.808) |    14.29 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           71 |      751 | 2024-11-17 | SINNERS           | L   | 0.801      | -            | -                | -                | -         |   -16.09 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           70 |      770 | 2024-11-17 | GamerLegion       | W   | 0.796      | -            | -                | -                | 1 (0.796) |    16.73 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           69 |      774 | 2024-11-16 | Falcons           | L   | 0.796      | -            | -                | -                | -         |   -18.48 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           68 |      949 | 2024-11-11 | BetBoom           | L   | 0.759      | -            | -                | -                | -         |   -15.56 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           67 |      960 | 2024-11-11 | 9 Pandas          | L   | 0.757      | -            | -                | -                | -         |   -13.18 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           66 |      972 | 2024-11-10 | 9 Pandas          | L   | 0.752      | -            | -                | -                | -         |   -13.99 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           65 |      974 | 2024-11-10 | SINNERS           | W   | 0.751      | 0.384        | 0.101 (0.029)    | 0.686 (0.198)    | -         |     6.60 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           64 |      979 | 2024-11-10 | NAVI Junior       | W   | 0.750      | 0.371        | 0.204 (0.057)    | 1.000 (0.278)    | -         |     8.00 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           63 |      999 | 2024-11-09 | Sashi             | W   | 0.744      | -            | -                | -                | -         |     5.48 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           62 |     1001 | 2024-11-09 | Rebels            | W   | 0.743      | -            | -                | -                | -         |     2.77 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           61 |     1010 | 2024-11-08 | AMKAL             | W   | 0.738      | -            | -                | -                | -         |     2.01 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           60 |     1016 | 2024-11-08 | Into the Breach   | W   | 0.737      | -            | -                | -                | -         |     4.40 | Blytz, Dytor, forsyy, nbqq, replay  |
|           59 |     1032 | 2024-11-07 | 9 Pandas          | L   | 0.730      | -            | -                | -                | -         |   -13.07 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           58 |     1050 | 2024-11-06 | Johnny Speeds     | W   | 0.723      | 0.384        | 0.109 (0.030)    | 0.772 (0.214)    | -         |     6.83 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           57 |     1069 | 2024-11-05 | SINNERS           | W   | 0.716      | 0.371        | 0.101 (0.027)    | 0.686 (0.182)    | -         |     7.43 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           56 |     1086 | 2024-11-04 | GUN5              | L   | 0.710      | -            | -                | -                | -         |   -14.45 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           55 |     1103 | 2024-11-03 | GUN5              | W   | 0.704      | 0.371        | 0.224 (0.058)    | 1.000 (0.261)    | -         |     7.84 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           54 |     1131 | 2024-11-02 | SovvyKiNG         | W   | 0.697      | -            | -                | -                | -         |     0.73 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           53 |     1156 | 2024-11-01 | Into the Breach   | W   | 0.690      | -            | -                | -                | -         |     4.44 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           52 |     1185 | 2024-10-30 | Aurora Young Blud | W   | 0.678      | 0.371        | -                | 0.839 (0.211)    | -         |     3.76 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           51 |     1225 | 2024-10-28 | Zero Tenacity     | W   | 0.665      | -            | -                | -                | -         |     6.61 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           50 |     1281 | 2024-10-26 | GUN5              | L   | 0.650      | -            | -                | -                | -         |   -13.39 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           49 |     1304 | 2024-10-24 | Sashi             | L   | 0.638      | -            | -                | -                | -         |   -15.32 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           48 |     1312 | 2024-10-24 | ALTERNATE aTTaX   | W   | 0.636      | -            | -                | -                | -         |     4.51 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           47 |     1319 | 2024-10-23 | Gaimin Gladiators | L   | 0.630      | -            | -                | -                | -         |   -16.00 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           46 |     1363 | 2024-10-20 | 9 Pandas          | W   | 0.610      | 0.384        | 0.159 (0.037)    | 0.801 (0.188)    | -         |     6.50 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           45 |     1440 | 2024-10-17 | los kogutos       | L   | 0.591      | -            | -                | -                | -         |   -13.65 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           44 |     1502 | 2024-10-14 | Apogee            | W   | 0.571      | -            | -                | -                | -         |     1.49 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           43 |     1637 | 2024-10-08 | WW                | W   | 0.530      | -            | -                | -                | -         |     0.36 | Blytz, Dytor, forsyy, nbqq, realzen |
|           42 |     1708 | 2024-10-05 | Sampi             | W   | 0.511      | -            | -                | -                | 1 (0.511) |     2.99 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           41 |     1717 | 2024-10-05 | The Prodigies     | W   | 0.510      | -            | -                | -                | 1 (0.510) |     0.32 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           40 |     1748 | 2024-10-04 | Sampi             | L   | 0.504      | -            | -                | -                | -         |   -13.17 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           39 |     1785 | 2024-10-03 | The Prodigies     | W   | 0.498      | -            | -                | -                | 1 (0.498) |     0.29 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           38 |     1790 | 2024-10-03 | 500               | L   | 0.497      | -            | -                | -                | -         |   -13.58 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           37 |     1868 | 2024-10-01 | Alliance          | W   | 0.485      | -            | -                | -                | -         |     1.93 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           36 |     1905 | 2024-09-30 | Monte Gen         | W   | 0.476      | -            | -                | -                | -         |     1.52 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           35 |     2241 | 2024-09-21 | Sampi             | L   | 0.418      | -            | -                | -                | -         |   -11.13 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           34 |     2257 | 2024-09-20 | SINNERS           | L   | 0.412      | -            | -                | -                | -         |    -9.48 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           33 |     2341 | 2024-09-18 | NAVI Junior       | L   | 0.396      | -            | -                | -                | -         |    -9.65 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           32 |     2371 | 2024-09-17 | kONO              | W   | 0.390      | -            | -                | -                | -         |     1.34 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           31 |     2387 | 2024-09-16 | NAVI Junior       | L   | 0.384      | -            | -                | -                | -         |    -9.61 | Blytz, Dytor, forsyy, kreaz, PR     |
|           30 |     2457 | 2024-09-14 | L&G               | W   | 0.370      | -            | -                | -                | -         |     0.82 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           29 |     2541 | 2024-09-11 | CPH Wolves        | L   | 0.351      | -            | -                | -                | -         |   -10.57 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           28 |     2555 | 2024-09-11 | kONO              | W   | 0.350      | -            | -                | -                | -         |     1.08 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           27 |     2597 | 2024-09-09 | MOUZ NXT          | W   | 0.337      | -            | -                | -                | -         |     0.33 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           26 |     2702 | 2024-09-05 | RUBY              | W   | 0.312      | -            | -                | -                | -         |     0.15 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           25 |     2777 | 2024-09-03 | K27               | L   | 0.298      | -            | -                | -                | -         |    -9.26 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           24 |     2915 | 2024-08-29 | Sampi             | L   | 0.263      | -            | -                | -                | -         |    -7.17 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           23 |     2968 | 2024-08-28 | ex-Enterprise     | W   | 0.257      | -            | -                | -                | -         |     0.57 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           22 |     3017 | 2024-08-27 | Aurora Young Blud | W   | 0.250      | -            | -                | -                | -         |     0.83 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           21 |     3134 | 2024-08-25 | ECSTATIC          | W   | 0.237      | -            | -                | -                | -         |     0.86 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           20 |     3154 | 2024-08-24 | GUN5              | L   | 0.231      | -            | -                | -                | -         |    -5.87 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           19 |     3158 | 2024-08-24 | los kogutos       | W   | 0.230      | -            | -                | -                | -         |     2.02 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           18 |     3184 | 2024-08-23 | UNPAID            | W   | 0.224      | -            | -                | -                | -         |     0.98 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           17 |     3226 | 2024-08-22 | Monte             | W   | 0.216      | -            | -                | -                | -         |     0.99 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           16 |     3254 | 2024-08-21 | 1WIN              | W   | 0.211      | -            | -                | -                | -         |     0.15 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           15 |     3284 | 2024-08-21 | BC.Game           | L   | 0.210      | -            | -                | -                | -         |    -6.15 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           14 |     3321 | 2024-08-20 | Illuminar         | W   | 0.203      | -            | -                | -                | -         |     0.15 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           13 |     3374 | 2024-08-18 | Preasy            | W   | 0.189      | -            | -                | -                | -         |     0.06 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           12 |     3470 | 2024-08-14 | Into the Breach   | L   | 0.164      | -            | -                | -                | -         |    -4.81 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           11 |     3476 | 2024-08-14 | Aurora Young Blud | L   | 0.163      | -            | -                | -                | -         |    -4.64 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           10 |     3652 | 2024-08-08 | Passion UA        | L   | 0.125      | -            | -                | -                | -         |    -2.79 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            9 |     3665 | 2024-08-08 | ex-Enterprise     | L   | 0.123      | -            | -                | -                | -         |    -3.63 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            8 |     3693 | 2024-08-07 | Revenant          | L   | 0.118      | -            | -                | -                | -         |    -3.61 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            7 |     3702 | 2024-08-07 | Nexus             | L   | 0.117      | -            | -                | -                | -         |    -1.22 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            6 |     3796 | 2024-08-04 | SINNERS           | W   | 0.099      | -            | -                | -                | 1 (0.099) |     0.62 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            5 |     3835 | 2024-08-03 | AVEZ              | W   | 0.092      | -            | -                | -                | 1 (0.092) |     0.04 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            4 |     3864 | 2024-08-02 | SINNERS           | W   | 0.085      | -            | -                | -                | 1 (0.085) |     0.54 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            3 |     4006 | 2024-07-30 | 1WIN              | W   | 0.065      | -            | -                | -                | -         |     0.04 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            2 |     4045 | 2024-07-29 | DASH              | L   | 0.057      | -            | -                | -                | -         |    -1.75 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            1 |     4161 | 2024-07-25 | HAVU              | W   | 0.031      | -            | -                | -                | -         |     0.01 | Blytz, Dytor, forsyy, kreaz, nbqq   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($65,214.59)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.29) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      0.999 | $10,000.00     | $9,992.43       |
| 2024-11-24 |      0.845 | $42,991.00     | $36,310.45      |
| 2024-11-12 |      0.765 | $1,000.00      | $764.87         |
| 2024-11-11 |      0.757 | $5,000.00      | $3,784.52       |
| 2024-11-10 |      0.752 | $7,500.00      | $5,642.09       |
| 2024-10-05 |      0.511 | $11,100.00     | $5,675.58       |
| 2024-09-22 |      0.425 | $661.00        | $280.97         |
| 2024-09-18 |      0.396 | $3,000.00      | $1,188.87       |
| 2024-08-30 |      0.270 | $3,000.00      | $809.71         |
| 2024-08-04 |      0.099 | $7,754.00      | $765.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
