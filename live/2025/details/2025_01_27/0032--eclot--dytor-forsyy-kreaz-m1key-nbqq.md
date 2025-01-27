### Roster Details<br />
Team Name: ECLOT<br />
Roster: Dytor, forsyy, kreaz, M1key, nbqq<br />
Global Rank: [32](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [23]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  1171.2<br />
<br />
Final Rank Value (1171.2) = Starting Rank Value (1315.5) + Head To Head Adjustments (-144.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.648[<sup>1</sup>](#table2)
- Bounty Collected: 0.404[<sup>2</sup>](#table1)
- Opponent Network: 0.241[<sup>2</sup>](#table1)
- LAN Wins: 0.579[<sup>2</sup>](#table1)

The average of these factors is 0.468<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1315.5
- 400 + ( ( 0.468 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1315.5


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
|           77 |      365 | 2024-12-17 | GUN5              | L   | 0.927      | -            | -                | -                | -         |   -16.66 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           76 |      376 | 2024-12-16 | Monte             | W   | 0.920      | 0.435        | 0.077 (0.031)    | 0.600 (0.240)    | -         |    10.10 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           75 |      415 | 2024-12-14 | ECSTATIC          | W   | 0.907      | 0.435        | 0.080 (0.032)    | 1.000 (0.394)    | -         |     8.56 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           74 |      444 | 2024-12-13 | NAVI Junior       | L   | 0.900      | -            | -                | -                | -         |   -16.42 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           73 |      460 | 2024-12-12 | ECSTATIC          | W   | 0.893      | 0.435        | 0.080 (0.031)    | 1.000 (0.388)    | -         |     7.46 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           72 |      806 | 2024-11-24 | UNiTY             | W   | 0.773      | 0.458        | 0.069 (0.024)    | -                | 1 (0.773) |     4.48 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           71 |      834 | 2024-11-23 | BRUTE             | W   | 0.766      | -            | -                | -                | 1 (0.766) |     1.83 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           70 |      914 | 2024-11-20 | fnatic            | L   | 0.744      | -            | -                | -                | -         |   -13.04 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           69 |      929 | 2024-11-18 | HEROIC            | W   | 0.736      | 0.143        | 0.262 (0.027)    | -                | 1 (0.736) |    12.82 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           68 |      940 | 2024-11-17 | SINNERS           | L   | 0.730      | -            | -                | -                | -         |   -15.37 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           67 |      959 | 2024-11-17 | GamerLegion       | W   | 0.725      | -            | -                | -                | 1 (0.725) |    16.21 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           66 |      963 | 2024-11-16 | Falcons           | L   | 0.724      | -            | -                | -                | -         |   -18.01 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           65 |     1138 | 2024-11-11 | BetBoom           | L   | 0.687      | -            | -                | -                | -         |   -13.09 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           64 |     1149 | 2024-11-11 | 9 Pandas          | L   | 0.685      | -            | -                | -                | -         |   -12.26 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           63 |     1161 | 2024-11-10 | 9 Pandas          | L   | 0.680      | -            | -                | -                | -         |   -12.91 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           62 |     1163 | 2024-11-10 | SINNERS           | W   | 0.680      | 0.384        | 0.095 (0.025)    | 0.718 (0.188)    | -         |     5.56 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           61 |     1168 | 2024-11-10 | NAVI Junior       | W   | 0.678      | 0.371        | 0.203 (0.051)    | 1.000 (0.251)    | -         |     7.28 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           60 |     1188 | 2024-11-09 | Sashi             | W   | 0.672      | -            | -                | -                | -         |     5.04 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           59 |     1190 | 2024-11-09 | Rebels            | W   | 0.672      | -            | -                | -                | -         |     2.71 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           58 |     1199 | 2024-11-08 | AMKAL             | W   | 0.666      | -            | -                | -                | -         |     1.65 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           57 |     1205 | 2024-11-08 | Into the Breach   | W   | 0.665      | -            | -                | -                | -         |     3.67 | Blytz, Dytor, forsyy, nbqq, replay  |
|           56 |     1221 | 2024-11-07 | 9 Pandas          | L   | 0.659      | -            | -                | -                | -         |   -12.15 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           55 |     1239 | 2024-11-06 | Johnny Speeds     | W   | 0.651      | 0.384        | 0.107 (0.027)    | 0.736 (0.184)    | -         |     6.00 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           54 |     1258 | 2024-11-05 | SINNERS           | W   | 0.645      | 0.371        | -                | 0.718 (0.172)    | -         |     6.07 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           53 |     1275 | 2024-11-04 | GUN5              | L   | 0.638      | -            | -                | -                | -         |   -13.24 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           52 |     1292 | 2024-11-03 | GUN5              | W   | 0.632      | 0.371        | 0.227 (0.053)    | 0.988 (0.231)    | -         |     6.82 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           51 |     1320 | 2024-11-02 | SovvyKiNG         | W   | 0.625      | -            | -                | -                | -         |     0.63 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           50 |     1345 | 2024-11-01 | Into the Breach   | W   | 0.618      | -            | -                | -                | -         |     3.54 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           49 |     1374 | 2024-10-30 | Chimera           | W   | 0.607      | 0.371        | -                | 0.816 (0.183)    | -         |     3.22 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           48 |     1414 | 2024-10-28 | Zero Tenacity     | W   | 0.593      | -            | -                | -                | -         |     5.79 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           47 |     1470 | 2024-10-26 | GUN5              | L   | 0.578      | -            | -                | -                | -         |   -12.16 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           46 |     1493 | 2024-10-24 | Sashi             | L   | 0.566      | -            | -                | -                | -         |   -13.56 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           45 |     1501 | 2024-10-24 | ALTERNATE aTTaX   | W   | 0.565      | -            | -                | -                | -         |     4.08 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           44 |     1508 | 2024-10-23 | Gaimin Gladiators | L   | 0.559      | -            | -                | -                | -         |   -14.41 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           43 |     1552 | 2024-10-20 | 9 Pandas          | W   | 0.539      | 0.384        | 0.163 (0.034)    | 0.864 (0.179)    | -         |     5.55 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           42 |     1629 | 2024-10-17 | los kogutos       | L   | 0.519      | -            | -                | -                | -         |   -11.70 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           41 |     1691 | 2024-10-14 | GameAgents        | W   | 0.500      | -            | -                | -                | -         |     1.23 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           40 |     1826 | 2024-10-08 | WW                | W   | 0.458      | -            | -                | -                | -         |     0.32 | Blytz, Dytor, forsyy, nbqq, realzen |
|           39 |     1897 | 2024-10-05 | Sampi             | W   | 0.440      | -            | -                | -                | 1 (0.440) |     2.47 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           38 |     1906 | 2024-10-05 | The Prodigies     | W   | 0.438      | -            | -                | -                | 1 (0.438) |     0.29 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           37 |     1937 | 2024-10-04 | Sampi             | L   | 0.433      | -            | -                | -                | -         |   -11.38 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           36 |     1974 | 2024-10-03 | The Prodigies     | W   | 0.426      | -            | -                | -                | 1 (0.426) |     0.27 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           35 |     1979 | 2024-10-03 | 500               | L   | 0.425      | -            | -                | -                | -         |   -11.61 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           34 |     2057 | 2024-10-01 | Alliance          | W   | 0.413      | -            | -                | -                | -         |     1.68 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           33 |     2094 | 2024-09-30 | Monte Gen         | W   | 0.404      | -            | -                | -                | -         |     1.22 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           32 |     2430 | 2024-09-21 | Sampi             | L   | 0.346      | -            | -                | -                | -         |    -9.24 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           31 |     2446 | 2024-09-20 | SINNERS           | L   | 0.340      | -            | -                | -                | -         |    -8.16 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           30 |     2530 | 2024-09-18 | NAVI Junior       | L   | 0.325      | -            | -                | -                | -         |    -7.73 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           29 |     2560 | 2024-09-17 | kONO              | W   | 0.318      | -            | -                | -                | -         |     1.12 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           28 |     2576 | 2024-09-16 | NAVI Junior       | L   | 0.312      | -            | -                | -                | -         |    -7.62 | Blytz, Dytor, forsyy, kreaz, PR     |
|           27 |     2646 | 2024-09-14 | L&G               | W   | 0.298      | -            | -                | -                | -         |     0.71 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           26 |     2730 | 2024-09-11 | CPH Wolves        | L   | 0.280      | -            | -                | -                | -         |    -8.40 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           25 |     2744 | 2024-09-11 | kONO              | W   | 0.278      | -            | -                | -                | -         |     0.90 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           24 |     2786 | 2024-09-09 | MOUZ NXT          | W   | 0.265      | -            | -                | -                | -         |     0.25 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           23 |     2891 | 2024-09-05 | RUBY              | W   | 0.240      | -            | -                | -                | -         |     0.12 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           22 |     2966 | 2024-09-03 | K27               | L   | 0.226      | -            | -                | -                | -         |    -7.03 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           21 |     3104 | 2024-08-29 | Sampi             | L   | 0.191      | -            | -                | -                | -         |    -5.20 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           20 |     3157 | 2024-08-28 | ex-Enterprise     | W   | 0.185      | -            | -                | -                | -         |     0.42 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           19 |     3206 | 2024-08-27 | Chimera           | W   | 0.179      | -            | -                | -                | -         |     0.62 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           18 |     3323 | 2024-08-25 | ECSTATIC          | W   | 0.165      | -            | -                | -                | -         |     0.66 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           17 |     3343 | 2024-08-24 | GUN5              | L   | 0.159      | -            | -                | -                | -         |    -3.98 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           16 |     3347 | 2024-08-24 | los kogutos       | W   | 0.158      | -            | -                | -                | -         |     1.53 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           15 |     3373 | 2024-08-23 | UNPAID            | W   | 0.152      | -            | -                | -                | -         |     0.69 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           14 |     3415 | 2024-08-22 | Monte             | W   | 0.144      | -            | -                | -                | -         |     0.78 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           13 |     3443 | 2024-08-21 | 1WIN              | W   | 0.139      | -            | -                | -                | -         |     0.10 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           12 |     3473 | 2024-08-21 | BC.Game           | L   | 0.138      | -            | -                | -                | -         |    -4.04 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           11 |     3510 | 2024-08-20 | Illuminar         | W   | 0.131      | -            | -                | -                | -         |     0.10 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           10 |     3563 | 2024-08-18 | Preasy            | W   | 0.118      | -            | -                | -                | -         |     0.04 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            9 |     3659 | 2024-08-14 | Into the Breach   | L   | 0.093      | -            | -                | -                | -         |    -2.70 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            8 |     3665 | 2024-08-14 | Chimera           | L   | 0.091      | -            | -                | -                | -         |    -2.58 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            7 |     3841 | 2024-08-08 | Passion UA        | L   | 0.053      | -            | -                | -                | -         |    -1.16 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            6 |     3854 | 2024-08-08 | ex-Enterprise     | L   | 0.051      | -            | -                | -                | -         |    -1.51 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            5 |     3882 | 2024-08-07 | Revenant          | L   | 0.046      | -            | -                | -                | -         |    -1.41 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            4 |     3891 | 2024-08-07 | Nexus             | L   | 0.046      | -            | -                | -                | -         |    -0.45 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            3 |     3985 | 2024-08-04 | SINNERS           | W   | 0.027      | -            | -                | -                | 1 (0.027) |     0.17 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            2 |     4024 | 2024-08-03 | AVEZ              | W   | 0.020      | -            | -                | -                | 1 (0.020) |     0.01 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            1 |     4053 | 2024-08-02 | SINNERS           | W   | 0.014      | -            | -                | -                | 1 (0.014) |     0.09 | Blytz, Dytor, forsyy, kreaz, nbqq   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($58,610.27)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.29) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      0.927 | $10,000.00     | $9,274.62       |
| 2024-11-24 |      0.773 | $42,991.00     | $33,224.49      |
| 2024-11-12 |      0.693 | $1,000.00      | $693.09         |
| 2024-11-11 |      0.685 | $5,000.00      | $3,425.62       |
| 2024-11-10 |      0.680 | $7,500.00      | $5,103.73       |
| 2024-10-05 |      0.440 | $11,100.00     | $4,878.81       |
| 2024-09-22 |      0.353 | $661.00        | $233.53         |
| 2024-09-18 |      0.325 | $3,000.00      | $973.53         |
| 2024-08-30 |      0.198 | $3,000.00      | $594.37         |
| 2024-08-04 |      0.027 | $7,754.00      | $208.49         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
