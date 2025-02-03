### Roster Details<br />
Team Name: ECLOT<br />
Roster: Dytor, forsyy, kreaz, M1key, nbqq<br />
Global Rank: [32](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [23]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  1147.8<br />
<br />
Final Rank Value (1147.8) = Starting Rank Value (1261.1) + Head To Head Adjustments (-113.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.649[<sup>1</sup>](#table2)
- Bounty Collected: 0.400[<sup>2</sup>](#table1)
- Opponent Network: 0.228[<sup>2</sup>](#table1)
- LAN Wins: 0.499[<sup>2</sup>](#table1)

The average of these factors is 0.444<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1261.1
- 400 + ( ( 0.444 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 1261.1


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
|           72 |      483 | 2024-12-17 | GUN5              | L   | 0.881      | -            | -                | -                | -         |   -15.84 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           71 |      494 | 2024-12-16 | Monte             | W   | 0.873      | 0.435        | 0.077 (0.029)    | 0.635 (0.241)    | 0 (0.000) |     9.72 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           70 |      533 | 2024-12-14 | ECSTATIC          | W   | 0.860      | 0.435        | 0.081 (0.030)    | 1.000 (0.374)    | 0 (0.000) |     8.02 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           69 |      562 | 2024-12-13 | NAVI Junior       | L   | 0.853      | -            | -                | -                | -         |   -15.48 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           68 |      578 | 2024-12-12 | ECSTATIC          | W   | 0.847      | 0.435        | 0.081 (0.030)    | 1.000 (0.368)    | 0 (0.000) |     7.01 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           67 |      924 | 2024-11-24 | UNiTY             | W   | 0.726      | 0.458        | 0.069 (0.023)    | -                | 1 (0.726) |     4.12 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           66 |      952 | 2024-11-23 | BRUTE             | W   | 0.719      | -            | -                | -                | 1 (0.719) |     1.85 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           65 |     1032 | 2024-11-20 | fnatic            | L   | 0.697      | -            | -                | -                | -         |   -12.30 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           64 |     1047 | 2024-11-18 | HEROIC            | W   | 0.689      | 0.143        | 0.288 (0.028)    | -                | 1 (0.689) |    12.97 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           63 |     1058 | 2024-11-17 | SINNERS           | L   | 0.683      | -            | -                | -                | -         |   -14.52 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           62 |     1077 | 2024-11-17 | GamerLegion       | W   | 0.678      | -            | -                | -                | 1 (0.678) |    18.28 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           61 |     1081 | 2024-11-16 | Falcons           | L   | 0.677      | -            | -                | -                | -         |   -17.30 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           60 |     1256 | 2024-11-11 | BetBoom           | L   | 0.640      | -            | -                | -                | -         |   -12.10 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           59 |     1267 | 2024-11-11 | 9 Pandas          | L   | 0.638      | -            | -                | -                | -         |   -11.44 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           58 |     1279 | 2024-11-10 | 9 Pandas          | L   | 0.634      | -            | -                | -                | -         |   -12.00 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           57 |     1281 | 2024-11-10 | SINNERS           | W   | 0.633      | 0.384        | 0.090 (0.022)    | 0.750 (0.182)    | -         |     5.25 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           56 |     1286 | 2024-11-10 | NAVI Junior       | W   | 0.631      | 0.371        | 0.202 (0.047)    | 1.000 (0.234)    | -         |     7.04 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           55 |     1306 | 2024-11-09 | Sashi             | W   | 0.625      | -            | -                | -                | -         |     4.78 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           54 |     1308 | 2024-11-09 | Rebels            | W   | 0.625      | -            | -                | -                | -         |     2.73 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           53 |     1317 | 2024-11-08 | AMKAL             | W   | 0.620      | -            | -                | -                | -         |     1.53 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           52 |     1323 | 2024-11-08 | moneyF            | W   | 0.618      | -            | -                | -                | -         |     3.42 | Blytz, Dytor, forsyy, nbqq, replay  |
|           51 |     1339 | 2024-11-07 | 9 Pandas          | L   | 0.612      | -            | -                | -                | -         |   -11.30 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           50 |     1357 | 2024-11-06 | Johnny Speeds     | W   | 0.604      | 0.384        | 0.106 (0.025)    | 0.706 (0.164)    | -         |     5.65 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           49 |     1376 | 2024-11-05 | SINNERS           | W   | 0.598      | 0.371        | -                | 0.750 (0.166)    | -         |     5.68 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           48 |     1393 | 2024-11-04 | GUN5              | L   | 0.591      | -            | -                | -                | -         |   -12.15 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           47 |     1410 | 2024-11-03 | GUN5              | W   | 0.585      | 0.371        | 0.229 (0.050)    | 1.000 (0.217)    | -         |     6.46 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           46 |     1438 | 2024-11-02 | SovvyKiNG         | W   | 0.579      | -            | -                | -                | -         |     0.64 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           45 |     1463 | 2024-11-01 | moneyF            | W   | 0.571      | -            | -                | -                | -         |     3.29 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           44 |     1492 | 2024-10-30 | Chimera           | W   | 0.560      | 0.371        | -                | 0.806 (0.167)    | -         |     3.24 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           43 |     1532 | 2024-10-28 | Zero Tenacity     | W   | 0.546      | -            | -                | -                | -         |     5.49 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           42 |     1588 | 2024-10-26 | GUN5              | L   | 0.531      | -            | -                | -                | -         |   -11.04 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           41 |     1611 | 2024-10-24 | Sashi             | L   | 0.520      | -            | -                | -                | -         |   -12.39 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           40 |     1619 | 2024-10-24 | ALTERNATE aTTaX   | W   | 0.518      | -            | -                | -                | -         |     3.88 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           39 |     1626 | 2024-10-23 | Gaimin Gladiators | L   | 0.512      | -            | -                | -                | -         |   -13.11 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           38 |     1670 | 2024-10-20 | 9 Pandas          | W   | 0.492      | 0.384        | 0.167 (0.032)    | 0.865 (0.163)    | -         |     5.20 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           37 |     1747 | 2024-10-17 | los kogutos       | L   | 0.472      | -            | -                | -                | -         |   -10.48 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           36 |     1809 | 2024-10-14 | GameAgents        | W   | 0.453      | -            | -                | -                | -         |     1.21 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           35 |     1944 | 2024-10-08 | WW                | W   | 0.411      | -            | -                | -                | -         |     0.32 | Blytz, Dytor, forsyy, nbqq, realzen |
|           34 |     2015 | 2024-10-05 | Sampi             | W   | 0.393      | -            | -                | -                | 1 (0.393) |     2.21 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           33 |     2024 | 2024-10-05 | The Prodigies     | W   | 0.392      | -            | -                | -                | 1 (0.392) |     0.31 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           32 |     2055 | 2024-10-04 | Sampi             | L   | 0.386      | -            | -                | -                | -         |   -10.13 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           31 |     2092 | 2024-10-03 | The Prodigies     | W   | 0.379      | -            | -                | -                | 1 (0.379) |     0.28 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           30 |     2097 | 2024-10-03 | 500               | L   | 0.378      | -            | -                | -                | -         |   -10.02 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           29 |     2175 | 2024-10-01 | Alliance          | W   | 0.366      | -            | -                | -                | -         |     1.86 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           28 |     2212 | 2024-09-30 | Monte Gen         | W   | 0.358      | -            | -                | -                | -         |     1.18 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           27 |     2548 | 2024-09-21 | Sampi             | L   | 0.299      | -            | -                | -                | -         |    -7.96 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           26 |     2564 | 2024-09-20 | SINNERS           | L   | 0.293      | -            | -                | -                | -         |    -6.97 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           25 |     2648 | 2024-09-18 | NAVI Junior       | L   | 0.278      | -            | -                | -                | -         |    -6.40 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           24 |     2678 | 2024-09-17 | kONO              | W   | 0.272      | -            | -                | -                | -         |     1.07 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           23 |     2694 | 2024-09-16 | NAVI Junior       | L   | 0.265      | -            | -                | -                | -         |    -6.25 | Blytz, Dytor, forsyy, kreaz, PR     |
|           22 |     2764 | 2024-09-14 | L&G               | W   | 0.252      | -            | -                | -                | -         |     0.71 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           21 |     2848 | 2024-09-11 | CPH Wolves        | L   | 0.233      | -            | -                | -                | -         |    -6.94 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           20 |     2862 | 2024-09-11 | kONO              | W   | 0.231      | -            | -                | -                | -         |     0.86 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           19 |     2904 | 2024-09-09 | MOUZ NXT          | W   | 0.219      | -            | -                | -                | -         |     0.24 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           18 |     3009 | 2024-09-05 | RUBY              | W   | 0.193      | -            | -                | -                | -         |     0.12 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           17 |     3084 | 2024-09-03 | K27               | L   | 0.180      | -            | -                | -                | -         |    -5.55 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           16 |     3222 | 2024-08-29 | Sampi             | L   | 0.145      | -            | -                | -                | -         |    -3.90 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           15 |     3275 | 2024-08-28 | ex-Enterprise     | W   | 0.138      | -            | -                | -                | -         |     0.34 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           14 |     3324 | 2024-08-27 | Chimera           | W   | 0.132      | -            | -                | -                | -         |     0.54 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           13 |     3441 | 2024-08-25 | ECSTATIC          | W   | 0.119      | -            | -                | -                | -         |     0.53 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           12 |     3461 | 2024-08-24 | GUN5              | L   | 0.112      | -            | -                | -                | -         |    -2.73 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           11 |     3465 | 2024-08-24 | los kogutos       | W   | 0.111      | -            | -                | -                | -         |     1.11 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           10 |     3491 | 2024-08-23 | UNPAID            | W   | 0.106      | -            | -                | -                | -         |     0.53 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            9 |     3533 | 2024-08-22 | Monte             | W   | 0.098      | -            | -                | -                | -         |     0.61 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            8 |     3561 | 2024-08-21 | 1WIN              | W   | 0.093      | -            | -                | -                | -         |     0.04 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            7 |     3591 | 2024-08-21 | BC.Game           | L   | 0.092      | -            | -                | -                | -         |    -2.63 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            6 |     3628 | 2024-08-20 | Illuminar         | W   | 0.085      | -            | -                | -                | -         |     0.08 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            5 |     3681 | 2024-08-18 | Preasy            | W   | 0.071      | -            | -                | -                | -         |     0.03 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            4 |     3777 | 2024-08-14 | moneyF            | L   | 0.046      | -            | -                | -                | -         |    -1.32 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            3 |     3783 | 2024-08-14 | Chimera           | L   | 0.045      | -            | -                | -                | -         |    -1.23 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            2 |     3959 | 2024-08-08 | Passion UA        | L   | 0.006      | -            | -                | -                | -         |    -0.13 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            1 |     3972 | 2024-08-08 | ex-Enterprise     | L   | 0.004      | -            | -                | -                | -         |    -0.13 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($54,461.76)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.29) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      0.881 | $10,000.00     | $8,806.97       |
| 2024-11-24 |      0.726 | $42,991.00     | $31,214.03      |
| 2024-11-12 |      0.646 | $1,000.00      | $646.32         |
| 2024-11-11 |      0.638 | $5,000.00      | $3,191.79       |
| 2024-11-10 |      0.634 | $7,500.00      | $4,753.00       |
| 2024-10-05 |      0.393 | $11,100.00     | $4,359.72       |
| 2024-09-22 |      0.307 | $661.00        | $202.62         |
| 2024-09-18 |      0.278 | $3,000.00      | $833.23         |
| 2024-08-30 |      0.151 | $3,000.00      | $454.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
