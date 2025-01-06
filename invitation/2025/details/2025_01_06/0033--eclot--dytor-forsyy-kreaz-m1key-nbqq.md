### Roster Details<br />
Team Name: ECLOT<br />
Roster: Dytor, forsyy, kreaz, M1key, nbqq<br />
Global Rank: [33](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_06.md)<br />
Regional Rank: [24]( ../../standings_europe_2025_01_06.md)<br />
<br />
Final Rank Value:  1182.9<br />
<br />
Final Rank Value (1182.9) = Starting Rank Value (1373.1) + Head To Head Adjustments (-190.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.635[<sup>1</sup>](#table2)
- Bounty Collected: 0.407[<sup>2</sup>](#table1)
- Opponent Network: 0.282[<sup>2</sup>](#table1)
- LAN Wins: 0.645[<sup>2</sup>](#table1)

The average of these factors is 0.492<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1373.1
- 400 + ( ( 0.492 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 1373.1


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
|           84 |      108 | 2024-12-17 | GUN5              | L   | 1.000      | -            | -                | -                | -         |   -17.27 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           83 |      119 | 2024-12-16 | Monte             | W   | 1.000      | 0.435        | 0.073 (0.032)    | 0.619 (0.269)    | -         |    11.84 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           82 |      158 | 2024-12-14 | ECSTATIC          | W   | 1.000      | 0.435        | 0.072 (0.031)    | 1.000 (0.435)    | -         |    10.10 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           81 |      187 | 2024-12-13 | NAVI Junior       | L   | 1.000      | -            | -                | -                | -         |   -17.49 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           80 |      203 | 2024-12-12 | ECSTATIC          | W   | 1.000      | 0.435        | 0.072 (0.031)    | 1.000 (0.435)    | -         |     8.93 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           79 |      549 | 2024-11-24 | UNiTY             | W   | 0.913      | 0.458        | 0.067 (0.028)    | -                | 1 (0.913) |     5.66 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           78 |      577 | 2024-11-23 | BRUTE             | W   | 0.906      | -            | -                | -                | 1 (0.906) |     2.13 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           77 |      657 | 2024-11-20 | fnatic            | L   | 0.884      | -            | -                | -                | -         |   -13.94 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           76 |      672 | 2024-11-18 | Sangal            | W   | 0.876      | -            | -                | -                | 1 (0.876) |    16.89 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           75 |      683 | 2024-11-17 | SINNERS           | L   | 0.870      | -            | -                | -                | -         |   -17.01 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           74 |      702 | 2024-11-17 | GamerLegion       | W   | 0.865      | -            | -                | -                | 1 (0.865) |    17.82 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           73 |      706 | 2024-11-16 | Falcons           | L   | 0.864      | -            | -                | -                | -         |   -18.36 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           72 |      881 | 2024-11-11 | BetBoom           | L   | 0.827      | -            | -                | -                | -         |   -16.25 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           71 |      892 | 2024-11-11 | 9 Pandas          | L   | 0.825      | -            | -                | -                | -         |   -13.89 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           70 |      904 | 2024-11-10 | 9 Pandas          | L   | 0.821      | -            | -                | -                | -         |   -14.85 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           69 |      906 | 2024-11-10 | SINNERS           | W   | 0.820      | 0.384        | 0.082 (0.026)    | 0.682 (0.215)    | -         |     7.43 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           68 |      911 | 2024-11-10 | NAVI Junior       | W   | 0.818      | 0.371        | 0.191 (0.058)    | 1.000 (0.303)    | -         |     9.24 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           67 |      931 | 2024-11-09 | Sashi             | W   | 0.813      | 0.384        | -                | 0.637 (0.199)    | -         |     6.52 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           66 |      933 | 2024-11-09 | Rebels            | W   | 0.812      | -            | -                | -                | -         |     3.52 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           65 |      942 | 2024-11-08 | DMS               | W   | 0.807      | -            | -                | -                | -         |     2.58 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           64 |      948 | 2024-11-08 | Into the Breach   | W   | 0.805      | -            | -                | -                | -         |     5.41 | Blytz, Dytor, forsyy, nbqq, replay  |
|           63 |      964 | 2024-11-07 | 9 Pandas          | L   | 0.799      | -            | -                | -                | -         |   -13.74 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           62 |      982 | 2024-11-06 | Johnny Speeds     | W   | 0.792      | 0.384        | 0.105 (0.032)    | 0.800 (0.243)    | -         |     7.99 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           61 |     1001 | 2024-11-05 | SINNERS           | W   | 0.785      | 0.371        | 0.082 (0.024)    | 0.682 (0.198)    | -         |     8.61 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           60 |     1018 | 2024-11-04 | GUN5              | L   | 0.778      | -            | -                | -                | -         |   -15.41 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           59 |     1035 | 2024-11-03 | GUN5              | W   | 0.773      | 0.371        | 0.199 (0.057)    | 1.000 (0.286)    | -         |     9.01 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           58 |     1063 | 2024-11-02 | SovvyKiNG         | W   | 0.766      | -            | -                | -                | -         |     0.95 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           57 |     1088 | 2024-11-01 | Into the Breach   | W   | 0.758      | -            | -                | -                | -         |     5.67 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           56 |     1117 | 2024-10-30 | Aurora Young Blud | W   | 0.747      | 0.371        | -                | 0.847 (0.234)    | -         |     4.52 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           55 |     1157 | 2024-10-28 | Zero Tenacity     | W   | 0.733      | -            | -                | -                | -         |     8.15 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           54 |     1213 | 2024-10-26 | GUN5              | L   | 0.718      | -            | -                | -                | -         |   -14.37 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           53 |     1236 | 2024-10-24 | Sashi             | L   | 0.707      | -            | -                | -                | -         |   -16.25 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           52 |     1244 | 2024-10-24 | ALTERNATE aTTaX   | W   | 0.705      | -            | -                | -                | -         |     5.16 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           51 |     1251 | 2024-10-23 | Gaimin Gladiators | L   | 0.699      | -            | -                | -                | -         |   -17.22 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           50 |     1295 | 2024-10-20 | 9 Pandas          | W   | 0.679      | 0.384        | 0.108 (0.028)    | -                | -         |     7.61 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           49 |     1372 | 2024-10-17 | los kogutos       | L   | 0.659      | -            | -                | -                | -         |   -15.28 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           48 |     1434 | 2024-10-14 | Apogee            | W   | 0.640      | -            | -                | -                | -         |     1.93 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           47 |     1569 | 2024-10-08 | WW                | W   | 0.598      | -            | -                | -                | -         |     0.47 | Blytz, Dytor, forsyy, nbqq, realzen |
|           46 |     1640 | 2024-10-05 | Sampi             | W   | 0.580      | -            | -                | -                | 1 (0.580) |     3.70 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           45 |     1649 | 2024-10-05 | The Prodigies     | W   | 0.579      | -            | -                | -                | 1 (0.579) |     0.39 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           44 |     1680 | 2024-10-04 | Sampi             | L   | 0.573      | -            | -                | -                | -         |   -14.69 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           43 |     1717 | 2024-10-03 | The Prodigies     | W   | 0.566      | -            | -                | -                | 1 (0.566) |     0.35 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           42 |     1722 | 2024-10-03 | 500               | L   | 0.566      | -            | -                | -                | -         |   -15.24 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           41 |     1800 | 2024-10-01 | Alliance          | W   | 0.554      | -            | -                | -                | -         |     2.22 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           40 |     1837 | 2024-09-30 | Monte Gen         | W   | 0.545      | -            | -                | -                | -         |     1.99 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           39 |     2173 | 2024-09-21 | Sampi             | L   | 0.486      | -            | -                | -                | -         |   -12.78 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           38 |     2189 | 2024-09-20 | SINNERS           | L   | 0.480      | -            | -                | -                | -         |   -10.79 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           37 |     2273 | 2024-09-18 | NAVI Junior       | L   | 0.465      | -            | -                | -                | -         |   -11.10 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           36 |     2303 | 2024-09-17 | kONO              | W   | 0.459      | -            | -                | -                | -         |     1.61 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           35 |     2319 | 2024-09-16 | NAVI Junior       | L   | 0.452      | -            | -                | -                | -         |   -11.18 | Blytz, Dytor, forsyy, kreaz, PR     |
|           34 |     2389 | 2024-09-14 | L&G               | W   | 0.439      | -            | -                | -                | -         |     1.03 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           33 |     2473 | 2024-09-11 | CPH Wolves        | L   | 0.420      | -            | -                | -                | -         |   -12.70 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           32 |     2487 | 2024-09-11 | kONO              | W   | 0.418      | -            | -                | -                | -         |     1.30 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           31 |     2529 | 2024-09-09 | MOUZ NXT          | W   | 0.406      | -            | -                | -                | -         |     0.51 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           30 |     2634 | 2024-09-05 | RUBY              | W   | 0.380      | -            | -                | -                | -         |     0.21 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           29 |     2709 | 2024-09-03 | K27               | L   | 0.367      | -            | -                | -                | -         |   -11.38 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           28 |     2847 | 2024-08-29 | Sampi             | L   | 0.332      | -            | -                | -                | -         |    -8.96 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           27 |     2900 | 2024-08-28 | ex-Enterprise     | W   | 0.325      | -            | -                | -                | -         |     0.78 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           26 |     2949 | 2024-08-27 | Aurora Young Blud | W   | 0.319      | -            | -                | -                | -         |     1.10 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           25 |     3066 | 2024-08-25 | ECSTATIC          | W   | 0.306      | -            | -                | -                | -         |     1.12 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           24 |     3086 | 2024-08-24 | GUN5              | L   | 0.300      | -            | -                | -                | -         |    -7.70 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           23 |     3090 | 2024-08-24 | los kogutos       | W   | 0.298      | -            | -                | -                | -         |     2.48 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           22 |     3116 | 2024-08-23 | UNPAID            | W   | 0.293      | -            | -                | -                | -         |     1.46 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           21 |     3158 | 2024-08-22 | Monte             | W   | 0.285      | -            | -                | -                | -         |     1.36 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           20 |     3186 | 2024-08-21 | 1WIN              | W   | 0.280      | -            | -                | -                | -         |     0.24 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           19 |     3216 | 2024-08-21 | BC.Game           | L   | 0.279      | -            | -                | -                | -         |    -8.13 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           18 |     3253 | 2024-08-20 | Illuminar         | W   | 0.272      | -            | -                | -                | -         |     0.22 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           17 |     3306 | 2024-08-18 | Preasy            | W   | 0.258      | -            | -                | -                | -         |     0.27 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           16 |     3402 | 2024-08-14 | Into the Breach   | L   | 0.233      | -            | -                | -                | -         |    -6.78 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           15 |     3408 | 2024-08-14 | Aurora Young Blud | L   | 0.232      | -            | -                | -                | -         |    -6.58 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           14 |     3584 | 2024-08-08 | Passion UA        | L   | 0.193      | -            | -                | -                | -         |    -4.26 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           13 |     3597 | 2024-08-08 | ex-Enterprise     | L   | 0.192      | -            | -                | -                | -         |    -5.65 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           12 |     3625 | 2024-08-07 | Revenant          | L   | 0.187      | -            | -                | -                | -         |    -5.71 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           11 |     3634 | 2024-08-07 | Nexus             | L   | 0.186      | -            | -                | -                | -         |    -2.14 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           10 |     3728 | 2024-08-04 | SINNERS           | W   | 0.167      | -            | -                | -                | 1 (0.167) |     1.01 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            9 |     3767 | 2024-08-03 | AVEZ              | W   | 0.160      | -            | -                | -                | 1 (0.160) |     0.07 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            8 |     3796 | 2024-08-02 | SINNERS           | W   | 0.154      | -            | -                | -                | 1 (0.154) |     0.93 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            7 |     3938 | 2024-07-30 | 1WIN              | W   | 0.133      | -            | -                | -                | -         |     0.08 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            6 |     3977 | 2024-07-29 | DASH              | L   | 0.125      | -            | -                | -                | -         |    -3.86 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            5 |     4093 | 2024-07-25 | HAVU              | W   | 0.099      | -            | -                | -                | -         |     0.03 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            4 |     4469 | 2024-07-16 | FAVBET            | L   | 0.039      | -            | -                | -                | -         |    -1.15 | Dytor, forsyy, kreaz, nbqq, olik    |
|            3 |     4527 | 2024-07-14 | Kosovo            | L   | 0.028      | -            | -                | -                | -         |    -0.87 | Dytor, forsyy, nbqq, NEOFRAG, PR    |
|            2 |     4538 | 2024-07-14 | Kosovo            | W   | 0.026      | -            | -                | -                | -         |     0.01 | Dytor, forsyy, nbqq, NEOFRAG, PR    |
|            1 |     4543 | 2024-07-13 | ALTERNATE aTTaX   | W   | 0.021      | -            | -                | -                | -         |     0.14 | Dytor, forsyy, K1-FiDa, nbqq, PR    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($70,847.07)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.27) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-11-24 |      0.913 | $42,991.00     | $39,259.27      |
| 2024-11-12 |      0.833 | $1,000.00      | $833.46         |
| 2024-11-11 |      0.825 | $5,000.00      | $4,127.48       |
| 2024-11-10 |      0.821 | $7,500.00      | $6,156.53       |
| 2024-10-05 |      0.580 | $11,100.00     | $6,436.95       |
| 2024-09-22 |      0.494 | $661.00        | $326.31         |
| 2024-09-18 |      0.465 | $3,000.00      | $1,394.64       |
| 2024-08-30 |      0.338 | $3,000.00      | $1,015.49       |
| 2024-08-04 |      0.167 | $7,754.00      | $1,296.94       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
