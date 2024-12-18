### Roster Details<br />
Team Name: ECLOT<br />
Roster: Dytor, forsyy, kreaz, M1key, nbqq<br />
Global Rank: [35](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [25]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  1176.9<br />
<br />
Final Rank Value (1176.9) = Starting Rank Value (1394.1) + Head To Head Adjustments (-217.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.611[<sup>1</sup>](#table2)
- Bounty Collected: 0.406[<sup>2</sup>](#table1)
- Opponent Network: 0.336[<sup>2</sup>](#table1)
- LAN Wins: 0.724[<sup>2</sup>](#table1)

The average of these factors is 0.519<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1394.1
- 400 + ( ( 0.519 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 1394.1


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
|           85 |       10 | 2024-12-17 | GUN5              | L   | 1.000      | -            | -                | -                | -         |   -17.22 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           84 |       21 | 2024-12-16 | Monte             | W   | 1.000      | 0.435        | 0.065 (0.028)    | 0.736 (0.320)    | -         |    12.89 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           83 |       60 | 2024-12-14 | ECSTATIC          | W   | 1.000      | 0.435        | 0.061 (0.026)    | 1.000 (0.435)    | -         |    10.53 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           82 |       89 | 2024-12-13 | NAVI Junior       | L   | 1.000      | -            | -                | -                | -         |   -17.16 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           81 |      105 | 2024-12-12 | ECSTATIC          | W   | 1.000      | 0.435        | 0.061 (0.026)    | 1.000 (0.435)    | -         |     9.35 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           80 |      451 | 2024-11-24 | UNiTY             | W   | 1.000      | 0.458        | 0.059 (0.027)    | -                | 1 (1.000) |     6.50 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           79 |      479 | 2024-11-23 | BRUTE             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.27 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           78 |      559 | 2024-11-20 | fnatic            | L   | 1.000      | -            | -                | -                | -         |   -14.13 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           77 |      574 | 2024-11-18 | Sangal            | W   | 1.000      | -            | -                | -                | 1 (1.000) |    21.64 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           76 |      585 | 2024-11-17 | SINNERS           | L   | 0.996      | -            | -                | -                | -         |   -18.39 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           75 |      604 | 2024-11-17 | GamerLegion       | W   | 0.991      | -            | -                | -                | 1 (0.991) |    20.18 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           74 |      608 | 2024-11-16 | Falcons           | L   | 0.990      | -            | -                | -                | -         |   -18.14 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           73 |      783 | 2024-11-11 | BetBoom           | L   | 0.953      | -            | -                | -                | -         |   -17.32 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           72 |      794 | 2024-11-11 | 9 Pandas          | L   | 0.952      | -            | -                | -                | -         |   -14.88 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           71 |      806 | 2024-11-10 | 9 Pandas          | L   | 0.947      | -            | -                | -                | -         |   -16.10 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           70 |      808 | 2024-11-10 | SINNERS           | W   | 0.946      | 0.384        | 0.082 (0.030)    | 0.826 (0.300)    | -         |     9.22 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           69 |      813 | 2024-11-10 | NAVI Junior       | W   | 0.945      | 0.371        | 0.169 (0.059)    | 1.000 (0.350)    | -         |    11.42 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           68 |      833 | 2024-11-09 | Sashi             | W   | 0.939      | -            | -                | -                | -         |     8.33 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           67 |      835 | 2024-11-09 | Rebels            | W   | 0.938      | -            | -                | -                | -         |     5.18 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           66 |      844 | 2024-11-08 | DMS               | W   | 0.933      | -            | -                | -                | -         |     3.87 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           65 |      850 | 2024-11-08 | Into the Breach   | W   | 0.932      | -            | -                | -                | -         |     7.14 | Blytz, Dytor, forsyy, nbqq, replay  |
|           64 |      866 | 2024-11-07 | 9 Pandas          | L   | 0.925      | -            | -                | -                | -         |   -14.44 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           63 |      884 | 2024-11-06 | Johnny Speeds     | W   | 0.918      | 0.384        | 0.097 (0.034)    | 0.952 (0.336)    | -         |    10.17 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           62 |      903 | 2024-11-05 | SINNERS           | W   | 0.911      | 0.371        | 0.082 (0.028)    | 0.826 (0.279)    | -         |    11.29 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           61 |      920 | 2024-11-04 | GUN5              | L   | 0.905      | -            | -                | -                | -         |   -17.19 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           60 |      937 | 2024-11-03 | GUN5              | W   | 0.899      | 0.371        | 0.162 (0.054)    | 1.000 (0.333)    | -         |    11.11 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           59 |      965 | 2024-11-02 | SovvyKiNG         | W   | 0.892      | -            | -                | -                | -         |     1.63 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           58 |      990 | 2024-11-01 | Into the Breach   | W   | 0.885      | -            | -                | -                | -         |     8.00 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           57 |     1019 | 2024-10-30 | Aurora Young Blud | W   | 0.873      | 0.371        | -                | 0.927 (0.300)    | -         |     5.83 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           56 |     1059 | 2024-10-28 | Zero Tenacity     | W   | 0.859      | -            | -                | -                | -         |    11.38 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           55 |     1115 | 2024-10-26 | GUN5              | L   | 0.845      | -            | -                | -                | -         |   -16.11 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           54 |     1138 | 2024-10-24 | Sashi             | L   | 0.833      | -            | -                | -                | -         |   -17.79 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           53 |     1146 | 2024-10-24 | ALTERNATE aTTaX   | W   | 0.831      | -            | -                | -                | -         |     6.62 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           52 |     1153 | 2024-10-23 | Gaimin Gladiators | L   | 0.825      | -            | -                | -                | -         |   -19.28 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           51 |     1197 | 2024-10-20 | 9 Pandas          | W   | 0.805      | 0.384        | 0.098 (0.030)    | 0.871 (0.269)    | -         |    10.32 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           50 |     1274 | 2024-10-17 | los kogutos       | L   | 0.785      | -            | -                | -                | -         |   -18.02 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           49 |     1336 | 2024-10-14 | Apogee            | W   | 0.766      | -            | -                | -                | -         |     2.92 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           48 |     1471 | 2024-10-08 | WW                | W   | 0.724      | -            | -                | -                | -         |     0.75 | Blytz, Dytor, forsyy, nbqq, realzen |
|           47 |     1542 | 2024-10-05 | Sampi             | W   | 0.706      | -            | -                | -                | 1 (0.706) |     5.14 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           46 |     1551 | 2024-10-05 | The Prodigies     | W   | 0.705      | -            | -                | -                | 1 (0.705) |     0.55 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           45 |     1582 | 2024-10-04 | Sampi             | L   | 0.699      | -            | -                | -                | -         |   -17.33 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           44 |     1619 | 2024-10-03 | The Prodigies     | W   | 0.693      | -            | -                | -                | 1 (0.693) |     0.49 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           43 |     1624 | 2024-10-03 | 500               | L   | 0.692      | -            | -                | -                | -         |   -18.22 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           42 |     1702 | 2024-10-01 | Alliance          | W   | 0.680      | -            | -                | -                | -         |     2.91 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           41 |     1739 | 2024-09-30 | Monte Gen         | W   | 0.671      | -            | -                | -                | -         |     3.19 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           40 |     2075 | 2024-09-21 | Sampi             | L   | 0.613      | -            | -                | -                | -         |   -15.69 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           39 |     2091 | 2024-09-20 | SINNERS           | L   | 0.607      | -            | -                | -                | -         |   -12.56 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           38 |     2175 | 2024-09-18 | NAVI Junior       | L   | 0.591      | -            | -                | -                | -         |   -13.65 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           37 |     2205 | 2024-09-17 | kONO              | W   | 0.585      | -            | -                | -                | -         |     1.83 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           36 |     2221 | 2024-09-16 | NAVI Junior       | L   | 0.579      | -            | -                | -                | -         |   -14.01 | Blytz, Dytor, forsyy, kreaz, PR     |
|           35 |     2291 | 2024-09-14 | L&G               | W   | 0.565      | -            | -                | -                | -         |     1.33 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           34 |     2375 | 2024-09-11 | CPH Wolves        | L   | 0.546      | -            | -                | -                | -         |   -16.37 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           33 |     2389 | 2024-09-11 | kONO              | W   | 0.545      | -            | -                | -                | -         |     1.44 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           32 |     2431 | 2024-09-09 | MOUZ NXT          | W   | 0.532      | -            | -                | -                | -         |     0.95 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           31 |     2536 | 2024-09-05 | RUBY              | W   | 0.507      | -            | -                | -                | -         |     0.34 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           30 |     2611 | 2024-09-03 | K27               | L   | 0.493      | -            | -                | -                | -         |   -15.26 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           29 |     2749 | 2024-08-29 | Sampi             | L   | 0.458      | -            | -                | -                | -         |   -12.21 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           28 |     2802 | 2024-08-28 | ex-Enterprise     | W   | 0.451      | -            | -                | -                | -         |     1.22 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           27 |     2851 | 2024-08-27 | Aurora Young Blud | W   | 0.445      | -            | -                | -                | -         |     1.56 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           26 |     2968 | 2024-08-25 | ECSTATIC          | W   | 0.432      | -            | -                | -                | -         |     1.56 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           25 |     2988 | 2024-08-24 | GUN5              | L   | 0.426      | -            | -                | -                | -         |   -11.33 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           24 |     2992 | 2024-08-24 | los kogutos       | W   | 0.425      | -            | -                | -                | -         |     3.33 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           23 |     3018 | 2024-08-23 | UNPAID            | W   | 0.419      | -            | -                | -                | -         |     2.67 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           22 |     3060 | 2024-08-22 | Monte             | W   | 0.411      | -            | -                | -                | -         |     2.16 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           21 |     3088 | 2024-08-21 | 1WIN              | W   | 0.406      | -            | -                | -                | -         |     0.45 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           20 |     3118 | 2024-08-21 | BC.Game           | L   | 0.405      | -            | -                | -                | -         |   -11.80 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           19 |     3155 | 2024-08-20 | Illuminar         | W   | 0.398      | -            | -                | -                | -         |     0.36 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           18 |     3208 | 2024-08-18 | Preasy            | W   | 0.384      | -            | -                | -                | -         |     0.41 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           17 |     3304 | 2024-08-14 | Into the Breach   | L   | 0.359      | -            | -                | -                | -         |   -10.40 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           16 |     3310 | 2024-08-14 | Aurora Young Blud | L   | 0.358      | -            | -                | -                | -         |   -10.19 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           15 |     3486 | 2024-08-08 | Passion UA        | L   | 0.319      | -            | -                | -                | -         |    -7.05 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           14 |     3499 | 2024-08-08 | ex-Enterprise     | L   | 0.318      | -            | -                | -                | -         |    -9.33 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           13 |     3527 | 2024-08-07 | Revenant          | L   | 0.313      | -            | -                | -                | -         |    -9.52 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           12 |     3536 | 2024-08-07 | Nexus             | L   | 0.312      | -            | -                | -                | -         |    -4.24 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           11 |     3630 | 2024-08-04 | SINNERS           | W   | 0.293      | -            | -                | -                | 1 (0.293) |     1.85 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           10 |     3669 | 2024-08-03 | AVEZ              | W   | 0.287      | -            | -                | -                | 1 (0.287) |     0.13 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            9 |     3698 | 2024-08-02 | SINNERS           | W   | 0.280      | -            | -                | -                | 1 (0.280) |     1.78 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            8 |     3840 | 2024-07-30 | 1WIN              | W   | 0.259      | -            | -                | -                | -         |     0.17 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            7 |     3879 | 2024-07-29 | DASH              | L   | 0.252      | -            | -                | -                | -         |    -7.76 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            6 |     3995 | 2024-07-25 | HAVU              | W   | 0.226      | -            | -                | -                | -         |     0.05 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            5 |     4371 | 2024-07-16 | FAVBET            | L   | 0.166      | -            | -                | -                | -         |    -4.84 | Dytor, forsyy, kreaz, nbqq, olik    |
|            4 |     4429 | 2024-07-14 | Kosovo            | L   | 0.154      | -            | -                | -                | -         |    -4.81 | Dytor, forsyy, nbqq, NEOFRAG, PR    |
|            3 |     4440 | 2024-07-14 | Kosovo            | W   | 0.153      | -            | -                | -                | -         |     0.04 | Dytor, forsyy, nbqq, NEOFRAG, PR    |
|            2 |     4445 | 2024-07-13 | ALTERNATE aTTaX   | W   | 0.147      | -            | -                | -                | -         |     0.96 | Dytor, forsyy, K1-FiDa, nbqq, PR    |
|            1 |     4539 | 2024-07-08 | Hungary           | W   | 0.113      | -            | -                | -                | -         |     0.19 | Dytor, forsyy, K1-FiDa, nbqq, PR    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($79,503.44)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.23) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-11-24 |      1.000 | $42,991.00     | $42,991.00      |
| 2024-11-12 |      0.960 | $1,000.00      | $959.68         |
| 2024-11-11 |      0.952 | $5,000.00      | $4,758.60       |
| 2024-11-10 |      0.947 | $7,500.00      | $7,103.21       |
| 2024-10-05 |      0.706 | $11,100.00     | $7,838.04       |
| 2024-09-22 |      0.620 | $661.00        | $409.75         |
| 2024-09-18 |      0.591 | $3,000.00      | $1,773.32       |
| 2024-08-30 |      0.465 | $3,000.00      | $1,394.16       |
| 2024-08-04 |      0.293 | $7,754.00      | $2,275.68       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
