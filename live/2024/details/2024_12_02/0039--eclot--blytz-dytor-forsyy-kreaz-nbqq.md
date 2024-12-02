### Roster Details<br />
Team Name: ECLOT<br />
Roster: Blytz, Dytor, forsyy, kreaz, nbqq<br />
Global Rank: [39](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_02.md)<br />
Regional Rank: [29]( ../../standings_europe_2024_12_02.md)<br />
<br />
Final Rank Value:  1220.6<br />
<br />
Final Rank Value (1220.6) = Starting Rank Value (1471.4) + Head To Head Adjustments (-250.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.587[<sup>1</sup>](#table2)
- Bounty Collected: 0.401[<sup>2</sup>](#table1)
- Opponent Network: 0.313[<sup>2</sup>](#table1)
- LAN Wins: 0.834[<sup>2</sup>](#table1)

The average of these factors is 0.534<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1471.4
- 400 + ( ( 0.534 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 1471.4


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
|           86 |      144 | 2024-11-24 | UNiTY             | W   | 1.000      | 0.458        | 0.059 (0.027)    | -                | 1 (1.000) |     6.59 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           85 |      172 | 2024-11-23 | BRUTE             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.97 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           84 |      252 | 2024-11-20 | fnatic            | L   | 1.000      | -            | -                | -                | -         |   -11.94 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           83 |      267 | 2024-11-18 | Sangal            | W   | 1.000      | 0.143        | 0.178 (0.025)    | -                | 1 (1.000) |    23.78 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           82 |      278 | 2024-11-17 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -18.02 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           81 |      297 | 2024-11-17 | GamerLegion       | W   | 1.000      | 0.143        | 0.126 (0.018)    | -                | 1 (1.000) |    19.04 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           80 |      301 | 2024-11-16 | Falcons           | L   | 1.000      | -            | -                | -                | -         |   -14.71 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           79 |      476 | 2024-11-11 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |   -16.70 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           78 |      487 | 2024-11-11 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -14.72 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           77 |      499 | 2024-11-10 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -16.08 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           76 |      501 | 2024-11-10 | SINNERS           | W   | 1.000      | 0.384        | 0.092 (0.035)    | 0.875 (0.336)    | -         |    10.23 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           75 |      506 | 2024-11-10 | NAVI Junior       | W   | 1.000      | 0.371        | 0.149 (0.055)    | 0.999 (0.370)    | -         |    12.02 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           74 |      526 | 2024-11-09 | Sashi             | W   | 1.000      | 0.384        | 0.056 (0.021)    | 0.667 (0.256)    | -         |     9.32 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           73 |      528 | 2024-11-09 | Rebels            | W   | 1.000      | -            | -                | -                | -         |     6.38 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           72 |      537 | 2024-11-08 | DMS               | W   | 1.000      | -            | -                | -                | -         |     5.04 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           71 |      543 | 2024-11-08 | Into the Breach   | W   | 1.000      | -            | -                | -                | -         |     8.09 | Blytz, Dytor, forsyy, nbqq, replay  |
|           70 |      559 | 2024-11-07 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -14.22 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           69 |      577 | 2024-11-06 | Johnny Speeds     | W   | 1.000      | 0.384        | 0.100 (0.038)    | 1.000 (0.384)    | -         |    12.42 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           68 |      596 | 2024-11-05 | SINNERS           | W   | 1.000      | 0.371        | 0.092 (0.034)    | 0.875 (0.324)    | -         |    13.45 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           67 |      613 | 2024-11-04 | GUN5              | L   | 1.000      | -            | -                | -                | -         |   -19.05 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           66 |      630 | 2024-11-03 | GUN5              | W   | 1.000      | 0.371        | -                | 1.000 (0.371)    | -         |    12.17 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           65 |      658 | 2024-11-02 | SovvyKiNG         | W   | 0.999      | -            | -                | -                | -         |     1.92 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           64 |      683 | 2024-11-01 | Into the Breach   | W   | 0.992      | 0.384        | -                | 0.639 (0.243)    | -         |     9.43 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           63 |      712 | 2024-10-30 | Aurora Young Blud | W   | 0.980      | 0.371        | -                | 0.709 (0.258)    | -         |     5.87 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           62 |      752 | 2024-10-28 | Zero Tenacity     | W   | 0.967      | 0.384        | 0.082 (0.030)    | 0.724 (0.269)    | -         |    13.69 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           61 |      808 | 2024-10-26 | GUN5              | L   | 0.952      | -            | -                | -                | -         |   -18.27 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           60 |      831 | 2024-10-24 | Sashi             | L   | 0.940      | -            | -                | -                | -         |   -19.33 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           59 |      839 | 2024-10-24 | ALTERNATE aTTaX   | W   | 0.938      | -            | -                | -                | -         |     7.51 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           58 |      846 | 2024-10-23 | Gaimin Gladiators | L   | 0.933      | -            | -                | -                | -         |   -21.41 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           57 |      890 | 2024-10-20 | 9 Pandas          | W   | 0.912      | 0.384        | 0.099 (0.035)    | 0.899 (0.315)    | -         |    12.92 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           56 |      967 | 2024-10-17 | Permitta          | L   | 0.893      | -            | -                | -                | -         |   -20.24 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           55 |     1029 | 2024-10-14 | Apogee            | W   | 0.873      | -            | -                | -                | -         |     3.60 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           54 |     1164 | 2024-10-08 | WW                | W   | 0.832      | -            | -                | -                | -         |     0.87 | Blytz, Dytor, forsyy, nbqq, realzen |
|           53 |     1235 | 2024-10-05 | Sampi             | W   | 0.813      | -            | -                | -                | 1 (0.813) |     6.42 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           52 |     1244 | 2024-10-05 | The Prodigies     | W   | 0.812      | -            | -                | -                | 1 (0.812) |     0.58 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           51 |     1275 | 2024-10-04 | Sampi             | L   | 0.807      | -            | -                | -                | -         |   -19.50 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           50 |     1312 | 2024-10-03 | The Prodigies     | W   | 0.800      | -            | -                | -                | 1 (0.800) |     0.52 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           49 |     1317 | 2024-10-03 | 500               | L   | 0.799      | -            | -                | -                | -         |   -21.35 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           48 |     1395 | 2024-10-01 | Alliance          | W   | 0.787      | -            | -                | -                | -         |     3.45 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           47 |     1432 | 2024-09-30 | Monte Gen         | W   | 0.778      | -            | -                | -                | -         |     3.91 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           46 |     1768 | 2024-09-21 | Sampi             | L   | 0.720      | -            | -                | -                | -         |   -18.14 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           45 |     1784 | 2024-09-20 | SINNERS           | L   | 0.714      | -            | -                | -                | -         |   -13.95 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           44 |     1868 | 2024-09-18 | NAVI Junior       | L   | 0.698      | -            | -                | -                | -         |   -16.81 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           43 |     1898 | 2024-09-17 | kONO              | W   | 0.692      | -            | -                | -                | -         |     2.40 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           42 |     1914 | 2024-09-16 | NAVI Junior       | L   | 0.686      | -            | -                | -                | -         |   -17.35 | Blytz, Dytor, forsyy, kreaz, PR     |
|           41 |     1984 | 2024-09-14 | L&G               | W   | 0.672      | -            | -                | -                | -         |     1.20 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           40 |     2068 | 2024-09-11 | CPH Wolves        | L   | 0.654      | -            | -                | -                | -         |   -19.59 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           39 |     2082 | 2024-09-11 | kONO              | W   | 0.652      | -            | -                | -                | -         |     1.88 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           38 |     2124 | 2024-09-09 | MOUZ NXT          | W   | 0.639      | -            | -                | -                | -         |     1.25 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           37 |     2229 | 2024-09-05 | RUBY              | W   | 0.614      | -            | -                | -                | -         |     0.83 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           36 |     2304 | 2024-09-03 | K27               | L   | 0.600      | -            | -                | -                | -         |   -18.62 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           35 |     2442 | 2024-08-29 | Sampi             | L   | 0.565      | -            | -                | -                | -         |   -14.97 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           34 |     2495 | 2024-08-28 | ex-Enterprise     | W   | 0.559      | -            | -                | -                | -         |     1.63 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           33 |     2544 | 2024-08-27 | Aurora Young Blud | W   | 0.552      | -            | -                | -                | -         |     1.44 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           32 |     2661 | 2024-08-25 | ECSTATIC          | W   | 0.539      | -            | -                | -                | -         |     1.54 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           31 |     2681 | 2024-08-24 | GUN5              | L   | 0.533      | -            | -                | -                | -         |   -15.25 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           30 |     2685 | 2024-08-24 | Permitta          | W   | 0.532      | -            | -                | -                | -         |     4.27 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           29 |     2711 | 2024-08-23 | UNPAID            | W   | 0.526      | -            | -                | -                | -         |     4.19 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           28 |     2753 | 2024-08-22 | Monte             | W   | 0.518      | -            | -                | -                | -         |     2.43 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           27 |     2781 | 2024-08-21 | 1WIN              | W   | 0.513      | -            | -                | -                | -         |     0.58 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           26 |     2811 | 2024-08-21 | BC.Game           | L   | 0.512      | -            | -                | -                | -         |   -15.14 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           25 |     2848 | 2024-08-20 | Illuminar         | W   | 0.505      | -            | -                | -                | -         |     1.55 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           24 |     2901 | 2024-08-18 | Preasy            | W   | 0.491      | -            | -                | -                | -         |     0.42 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           23 |     2997 | 2024-08-14 | Into the Breach   | L   | 0.466      | -            | -                | -                | -         |   -13.67 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           22 |     3003 | 2024-08-14 | Aurora Young Blud | L   | 0.465      | -            | -                | -                | -         |   -13.69 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           21 |     3179 | 2024-08-08 | Passion UA        | L   | 0.427      | -            | -                | -                | -         |    -9.47 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           20 |     3192 | 2024-08-08 | ex-Enterprise     | L   | 0.425      | -            | -                | -                | -         |   -12.42 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           19 |     3220 | 2024-08-07 | Revenant          | L   | 0.420      | -            | -                | -                | -         |   -12.82 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           18 |     3229 | 2024-08-07 | Nexus             | L   | 0.420      | -            | -                | -                | -         |    -6.91 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           17 |     3323 | 2024-08-04 | SINNERS           | W   | 0.401      | -            | -                | -                | 1 (0.401) |     2.53 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           16 |     3362 | 2024-08-03 | AVEZ              | W   | 0.394      | -            | -                | -                | 1 (0.394) |     0.14 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           15 |     3391 | 2024-08-02 | SINNERS           | W   | 0.387      | -            | -                | -                | 1 (0.387) |     2.48 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           14 |     3533 | 2024-07-30 | 1WIN              | W   | 0.367      | -            | -                | -                | -         |     0.21 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           13 |     3572 | 2024-07-29 | DASH              | L   | 0.359      | -            | -                | -                | -         |   -11.22 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           12 |     3688 | 2024-07-25 | HAVU              | W   | 0.333      | -            | -                | -                | -         |     0.05 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           11 |     4064 | 2024-07-16 | FAVBET            | L   | 0.273      | -            | -                | -                | -         |    -8.15 | Dytor, forsyy, kreaz, nbqq, olik    |
|           10 |     4122 | 2024-07-14 | Kosovo            | L   | 0.262      | -            | -                | -                | -         |    -8.13 | Dytor, forsyy, nbqq, NEOFRAG, PR    |
|            9 |     4133 | 2024-07-14 | Kosovo            | W   | 0.260      | -            | -                | -                | -         |     0.10 | Dytor, forsyy, nbqq, NEOFRAG, PR    |
|            8 |     4138 | 2024-07-13 | ALTERNATE aTTaX   | W   | 0.255      | -            | -                | -                | -         |     1.59 | Dytor, forsyy, K1-FiDa, nbqq, PR    |
|            7 |     4232 | 2024-07-08 | Hungary           | W   | 0.220      | -            | -                | -                | -         |     0.32 | Dytor, forsyy, K1-FiDa, nbqq, PR    |
|            6 |     4405 | 2024-06-14 | 5W                | L   | 0.059      | -            | -                | -                | -         |    -1.84 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            5 |     4476 | 2024-06-11 | Qiang             | L   | 0.041      | -            | -                | -                | -         |    -1.27 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            4 |     4560 | 2024-06-09 | ex-Enterprise     | W   | 0.026      | -            | -                | -                | -         |     0.04 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            3 |     4630 | 2024-06-08 | MOUZ NXT          | W   | 0.020      | -            | -                | -                | -         |     0.01 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            2 |     4690 | 2024-06-07 | GhoulsW           | W   | 0.012      | -            | -                | -                | -         |     0.00 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            1 |     4718 | 2024-06-06 | GamerLegion       | L   | 0.008      | -            | -                | -                | -         |    -0.15 | Blytz, Dytor, forsyy, kreaz, nbqq   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($73,117.86)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.20) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      1.000 | $42,991.00     | $42,991.00      |
| 2024-11-12 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-11-11 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-11-10 |      1.000 | $7,500.00      | $7,500.00       |
| 2024-10-05 |      0.813 | $11,100.00     | $9,028.63       |
| 2024-09-22 |      0.727 | $661.00        | $480.65         |
| 2024-09-18 |      0.698 | $3,000.00      | $2,095.10       |
| 2024-08-30 |      0.572 | $3,000.00      | $1,715.94       |
| 2024-08-04 |      0.401 | $7,754.00      | $3,107.38       |
| 2024-06-17 |      0.080 | $2,500.00      | $199.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
