### Roster Details<br />
Team Name: ECLOT<br />
Roster: Blytz, forsyy, kreaz, lauNX, nbqq<br />
Global Rank: [58](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_23.md)<br />
Regional Rank: [40]( ../../standings_europe_2024_10_23.md)<br />
<br />
Final Rank Value:  1011.2<br />
<br />
Final Rank Value (1011.2) = Starting Rank Value (1237.5) + Head To Head Adjustments (-226.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.494[<sup>1</sup>](#table2)
- Bounty Collected: 0.373[<sup>2</sup>](#table1)
- Opponent Network: 0.214[<sup>2</sup>](#table1)
- LAN Wins: 0.628[<sup>2</sup>](#table1)

The average of these factors is 0.427<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1237.5
- 400 + ( ( 0.427 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 1237.5


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
|           64 |        4 | 2024-10-23 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |   -17.65 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           63 |       48 | 2024-10-20 | 9 Pandas          | W   | 1.000      | 0.384        | 0.076 (0.029)    | 0.690 (0.265)    | 0 (0.000) |    18.73 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           62 |      125 | 2024-10-17 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -20.26 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           61 |      187 | 2024-10-14 | Apogee            | W   | 1.000      | 0.384        | -                | 0.545 (0.210)    | -         |    10.13 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           60 |      322 | 2024-10-08 | WW                | W   | 1.000      | -            | -                | -                | -         |     3.53 | Blytz, Dytor, forsyy, nbqq, realzen |
|           59 |      393 | 2024-10-05 | Sampi             | W   | 1.000      | 0.367        | 0.049 (0.018)    | 0.631 (0.232)    | 1 (1.000) |    12.10 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           58 |      402 | 2024-10-05 | The Prodigies     | W   | 1.000      | -            | -                | -                | 1 (1.000) |     4.05 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           57 |      433 | 2024-10-04 | Sampi             | L   | 1.000      | -            | -                | -                | -         |   -19.55 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           56 |      470 | 2024-10-03 | The Prodigies     | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.83 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           55 |      475 | 2024-10-03 | 500               | L   | 1.000      | -            | -                | -                | -         |   -24.15 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           54 |      553 | 2024-10-01 | Alliance          | W   | 1.000      | -            | -                | -                | -         |     6.47 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           53 |      590 | 2024-09-30 | Monte Gen         | W   | 1.000      | -            | -                | -                | -         |    13.63 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           52 |      926 | 2024-09-21 | Sampi             | L   | 0.986      | -            | -                | -                | -         |   -20.13 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           51 |      942 | 2024-09-20 | SINNERS           | L   | 0.979      | -            | -                | -                | -         |   -11.49 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           50 |     1026 | 2024-09-18 | NAVI Junior       | L   | 0.964      | -            | -                | -                | -         |   -16.36 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           49 |     1056 | 2024-09-17 | kONO              | W   | 0.958      | 0.333        | -                | 0.457 (0.146)    | -         |     6.73 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           48 |     1072 | 2024-09-16 | NAVI Junior       | L   | 0.951      | -            | -                | -                | -         |   -17.93 | Blytz, Dytor, forsyy, kreaz, PR     |
|           47 |     1142 | 2024-09-14 | L&G               | W   | 0.938      | -            | -                | -                | -         |     4.07 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           46 |     1226 | 2024-09-11 | CPH Wolves        | L   | 0.919      | -            | -                | -                | -         |   -23.24 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           45 |     1240 | 2024-09-11 | kONO              | W   | 0.917      | 0.333        | -                | 0.457 (0.140)    | -         |     5.50 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           44 |     1282 | 2024-09-09 | MOUZ NXT          | W   | 0.905      | 0.372        | 0.057 (0.019)    | -                | -         |     8.90 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           43 |     1387 | 2024-09-05 | RUBY              | W   | 0.879      | 0.372        | 0.042 (0.014)    | -                | -         |     5.23 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           42 |     1462 | 2024-09-03 | K27               | L   | 0.866      | -            | -                | -                | -         |   -25.56 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           41 |     1600 | 2024-08-29 | Sampi             | L   | 0.831      | -            | -                | -                | -         |   -18.25 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           40 |     1653 | 2024-08-28 | ex-Enterprise     | W   | 0.824      | 0.371        | 0.025 (0.008)    | -                | -         |     5.06 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           39 |     1702 | 2024-08-27 | Aurora Young Blud | W   | 0.818      | 0.371        | -                | 0.637 (0.193)    | -         |     6.10 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           38 |     1819 | 2024-08-25 | ECSTATIC          | W   | 0.805      | 0.371        | -                | 0.746 (0.222)    | -         |     7.02 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           37 |     1839 | 2024-08-24 | GUN5              | L   | 0.799      | -            | -                | -                | -         |   -17.83 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           36 |     1843 | 2024-08-24 | Permitta          | W   | 0.797      | 0.371        | 0.036 (0.011)    | 1.000 (0.295)    | -         |     6.43 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           35 |     1869 | 2024-08-23 | UNPAID            | W   | 0.792      | 0.143        | 0.202 (0.023)    | -                | -         |    16.96 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           34 |     1911 | 2024-08-22 | Monte             | W   | 0.784      | -            | -                | -                | -         |     8.63 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           33 |     1939 | 2024-08-21 | 1WIN              | W   | 0.779      | -            | -                | -                | -         |     5.73 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           32 |     1969 | 2024-08-21 | BC.Game           | L   | 0.778      | -            | -                | -                | -         |   -18.52 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           31 |     2006 | 2024-08-20 | Illuminar         | W   | 0.771      | -            | -                | -                | -         |     4.04 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           30 |     2059 | 2024-08-18 | Preasy            | W   | 0.757      | -            | -                | -                | -         |     2.12 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           29 |     2155 | 2024-08-14 | Into the Breach   | L   | 0.732      | -            | -                | -                | -         |   -16.94 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           28 |     2161 | 2024-08-14 | Aurora Young Blud | L   | 0.731      | -            | -                | -                | -         |   -16.74 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           27 |     2337 | 2024-08-08 | Passion UA        | L   | 0.692      | -            | -                | -                | -         |   -12.09 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           26 |     2350 | 2024-08-08 | ex-Enterprise     | L   | 0.691      | -            | -                | -                | -         |   -17.87 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           25 |     2378 | 2024-08-07 | Revenant          | L   | 0.686      | -            | -                | -                | -         |   -18.07 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           24 |     2387 | 2024-08-07 | Nexus             | L   | 0.685      | -            | -                | -                | -         |   -19.49 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           23 |     2481 | 2024-08-04 | SINNERS           | W   | 0.666      | 0.345        | 0.177 (0.041)    | 0.957 (0.220)    | 1 (0.666) |     8.86 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           22 |     2520 | 2024-08-03 | AVEZ              | W   | 0.659      | -            | -                | -                | 1 (0.659) |     1.09 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           21 |     2549 | 2024-08-02 | SINNERS           | W   | 0.653      | 0.345        | 0.177 (0.040)    | 0.957 (0.216)    | 1 (0.653) |     9.17 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           20 |     2691 | 2024-07-30 | 1WIN              | W   | 0.632      | -            | -                | -                | -         |     2.48 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           19 |     2730 | 2024-07-29 | DASH              | L   | 0.624      | -            | -                | -                | -         |   -19.04 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           18 |     2846 | 2024-07-25 | HAVU              | W   | 0.598      | -            | -                | -                | -         |     0.48 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           17 |     3222 | 2024-07-16 | FAVBET            | L   | 0.539      | -            | -                | -                | -         |   -13.47 | Dytor, forsyy, kreaz, nbqq, olik    |
|           16 |     3563 | 2024-06-14 | 5W                | L   | 0.325      | -            | -                | -                | -         |    -9.21 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           15 |     3634 | 2024-06-11 | Qiang             | L   | 0.307      | -            | -                | -                | -         |    -8.90 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           14 |     3718 | 2024-06-09 | ex-Enterprise     | W   | 0.292      | -            | -                | -                | -         |     0.94 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           13 |     3788 | 2024-06-08 | MOUZ NXT          | W   | 0.285      | 0.450        | 0.057 (0.007)    | -                | -         |     1.46 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           12 |     3848 | 2024-06-07 | GhoulsW           | W   | 0.278      | -            | -                | -                | -         |     0.09 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           11 |     3876 | 2024-06-06 | GamerLegion       | L   | 0.273      | -            | -                | -                | -         |    -5.76 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           10 |     4048 | 2024-06-02 | UNiTY             | W   | 0.246      | -            | -                | -                | 1 (0.246) |     2.26 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            9 |     4079 | 2024-06-01 | UNiTY             | W   | 0.239      | -            | -                | -                | 1 (0.239) |     2.22 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            8 |     4109 | 2024-05-31 | Sampi             | W   | 0.233      | -            | -                | -                | 1 (0.233) |     1.64 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            7 |     4234 | 2024-05-26 | Permitta          | L   | 0.197      | -            | -                | -                | -         |    -5.15 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            6 |     4324 | 2024-05-22 | Preasy            | L   | 0.172      | -            | -                | -                | -         |    -5.12 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            5 |     4663 | 2024-05-13 | Johnny Speeds     | L   | 0.111      | -            | -                | -                | -         |    -2.62 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            4 |     4733 | 2024-05-10 | Verdant           | W   | 0.091      | -            | -                | -                | -         |     0.33 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            3 |     4926 | 2024-04-30 | MOUZ NXT          | L   | 0.027      | -            | -                | -                | -         |    -0.74 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            2 |     4954 | 2024-04-29 | 1WIN              | W   | 0.019      | -            | -                | -                | -         |     0.04 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            1 |     4990 | 2024-04-27 | MOUZ NXT          | L   | 0.007      | -            | -                | -                | -         |    -0.18 | Blytz, Dytor, forsyy, kreaz, nbqq   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,624.58)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-05 |      1.000 | $11,100.00     | $11,100.00      |
| 2024-09-22 |      0.993 | $661.00        | $656.19         |
| 2024-09-18 |      0.964 | $3,000.00      | $2,891.82       |
| 2024-08-30 |      0.838 | $3,000.00      | $2,512.66       |
| 2024-08-04 |      0.666 | $7,754.00      | $5,166.63       |
| 2024-06-17 |      0.345 | $2,500.00      | $863.10         |
| 2024-06-13 |      0.320 | $545.00        | $174.62         |
| 2024-06-02 |      0.246 | $7,837.00      | $1,927.02       |
| 2024-05-13 |      0.111 | $3,000.00      | $332.54         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
