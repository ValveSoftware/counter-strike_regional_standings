### Roster Details<br />
Team Name: ECLOT<br />
Roster: Dytor, forsyy, kreaz, M1key, nbqq<br />
Global Rank: [35](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [24]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  1188.4<br />
<br />
Final Rank Value (1188.4) = Starting Rank Value (1369.4) + Head To Head Adjustments (-181.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.646[<sup>1</sup>](#table2)
- Bounty Collected: 0.412[<sup>2</sup>](#table1)
- Opponent Network: 0.271[<sup>2</sup>](#table1)
- LAN Wins: 0.626[<sup>2</sup>](#table1)

The average of these factors is 0.489<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1369.4
- 400 + ( ( 0.489 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1369.4


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
|           80 |      149 | 2024-12-17 | GUN5              | L   | 1.000      | -            | -                | -                | -         |   -17.49 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           79 |      160 | 2024-12-16 | Monte             | W   | 1.000      | 0.435        | 0.078 (0.034)    | 0.594 (0.258)    | -         |    11.39 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           78 |      199 | 2024-12-14 | ECSTATIC          | W   | 1.000      | 0.435        | 0.078 (0.034)    | 1.000 (0.435)    | -         |     9.85 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           77 |      228 | 2024-12-13 | NAVI Junior       | L   | 0.994      | -            | -                | -                | -         |   -17.75 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           76 |      244 | 2024-12-12 | ECSTATIC          | W   | 0.987      | 0.435        | 0.078 (0.034)    | 1.000 (0.429)    | -         |     8.57 | Dytor, forsyy, kreaz, M1key, nbqq   |
|           75 |      590 | 2024-11-24 | UNiTY             | W   | 0.867      | 0.458        | 0.070 (0.028)    | -                | 1 (0.867) |     5.24 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           74 |      618 | 2024-11-23 | BRUTE             | W   | 0.860      | -            | -                | -                | 1 (0.860) |     1.96 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           73 |      698 | 2024-11-20 | fnatic            | L   | 0.838      | -            | -                | -                | -         |   -13.89 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           72 |      713 | 2024-11-18 | Sangal            | W   | 0.830      | -            | -                | -                | 1 (0.830) |    15.02 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           71 |      724 | 2024-11-17 | SINNERS           | L   | 0.824      | -            | -                | -                | -         |   -16.37 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           70 |      743 | 2024-11-17 | GamerLegion       | W   | 0.819      | -            | -                | -                | 1 (0.819) |    17.16 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           69 |      747 | 2024-11-16 | Falcons           | L   | 0.818      | -            | -                | -                | -         |   -18.42 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           68 |      922 | 2024-11-11 | BetBoom           | L   | 0.781      | -            | -                | -                | -         |   -15.87 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           67 |      933 | 2024-11-11 | 9 Pandas          | L   | 0.779      | -            | -                | -                | -         |   -13.46 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           66 |      945 | 2024-11-10 | 9 Pandas          | L   | 0.775      | -            | -                | -                | -         |   -14.32 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           65 |      947 | 2024-11-10 | SINNERS           | W   | 0.774      | 0.384        | 0.103 (0.031)    | 0.698 (0.207)    | -         |     6.89 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           64 |      952 | 2024-11-10 | NAVI Junior       | W   | 0.772      | 0.371        | 0.202 (0.058)    | 1.000 (0.286)    | -         |     8.37 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           63 |      972 | 2024-11-09 | Sashi             | W   | 0.766      | -            | -                | -                | -         |     5.75 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           62 |      974 | 2024-11-09 | Rebels            | W   | 0.766      | -            | -                | -                | -         |     3.00 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           61 |      983 | 2024-11-08 | DMS               | W   | 0.760      | -            | -                | -                | -         |     2.15 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           60 |      989 | 2024-11-08 | Into the Breach   | W   | 0.759      | -            | -                | -                | -         |     4.68 | Blytz, Dytor, forsyy, nbqq, replay  |
|           59 |     1005 | 2024-11-07 | 9 Pandas          | L   | 0.753      | -            | -                | -                | -         |   -13.35 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           58 |     1023 | 2024-11-06 | Johnny Speeds     | W   | 0.745      | 0.384        | 0.109 (0.031)    | 0.775 (0.222)    | -         |     7.34 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           57 |     1042 | 2024-11-05 | SINNERS           | W   | 0.739      | 0.371        | 0.103 (0.028)    | 0.698 (0.191)    | -         |     7.83 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           56 |     1059 | 2024-11-04 | GUN5              | L   | 0.732      | -            | -                | -                | -         |   -14.81 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           55 |     1076 | 2024-11-03 | GUN5              | W   | 0.726      | 0.371        | 0.218 (0.059)    | 1.000 (0.269)    | -         |     8.18 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           54 |     1104 | 2024-11-02 | SovvyKiNG         | W   | 0.720      | -            | -                | -                | -         |     0.78 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           53 |     1129 | 2024-11-01 | Into the Breach   | W   | 0.712      | -            | -                | -                | -         |     4.78 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           52 |     1158 | 2024-10-30 | Aurora Young Blud | W   | 0.701      | 0.371        | -                | 0.841 (0.218)    | -         |     3.95 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           51 |     1198 | 2024-10-28 | Zero Tenacity     | W   | 0.687      | -            | -                | -                | -         |     7.02 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           50 |     1254 | 2024-10-26 | GUN5              | L   | 0.672      | -            | -                | -                | -         |   -13.76 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           49 |     1277 | 2024-10-24 | Sashi             | L   | 0.661      | -            | -                | -                | -         |   -15.71 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           48 |     1285 | 2024-10-24 | ALTERNATE aTTaX   | W   | 0.659      | -            | -                | -                | -         |     4.66 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           47 |     1292 | 2024-10-23 | Gaimin Gladiators | L   | 0.653      | -            | -                | -                | -         |   -16.46 | Blytz, forsyy, kreaz, lauNX, nbqq   |
|           46 |     1336 | 2024-10-20 | 9 Pandas          | W   | 0.633      | 0.384        | 0.156 (0.038)    | 0.797 (0.194)    | -         |     6.80 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           45 |     1413 | 2024-10-17 | los kogutos       | L   | 0.613      | -            | -                | -                | -         |   -14.21 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           44 |     1475 | 2024-10-14 | Apogee            | W   | 0.594      | -            | -                | -                | -         |     1.59 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           43 |     1610 | 2024-10-08 | WW                | W   | 0.552      | -            | -                | -                | -         |     0.39 | Blytz, Dytor, forsyy, nbqq, realzen |
|           42 |     1681 | 2024-10-05 | Sampi             | W   | 0.534      | -            | -                | -                | 1 (0.534) |     3.18 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           41 |     1690 | 2024-10-05 | The Prodigies     | W   | 0.533      | -            | -                | -                | 1 (0.533) |     0.33 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           40 |     1721 | 2024-10-04 | Sampi             | L   | 0.527      | -            | -                | -                | -         |   -13.71 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           39 |     1758 | 2024-10-03 | The Prodigies     | W   | 0.520      | -            | -                | -                | 1 (0.520) |     0.30 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           38 |     1763 | 2024-10-03 | 500               | L   | 0.519      | -            | -                | -                | -         |   -14.16 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           37 |     1841 | 2024-10-01 | Alliance          | W   | 0.507      | -            | -                | -                | -         |     1.99 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           36 |     1878 | 2024-09-30 | Monte Gen         | W   | 0.499      | -            | -                | -                | -         |     1.63 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           35 |     2214 | 2024-09-21 | Sampi             | L   | 0.440      | -            | -                | -                | -         |   -11.70 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           34 |     2230 | 2024-09-20 | SINNERS           | L   | 0.434      | -            | -                | -                | -         |    -9.91 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           33 |     2314 | 2024-09-18 | NAVI Junior       | L   | 0.419      | -            | -                | -                | -         |   -10.16 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           32 |     2344 | 2024-09-17 | kONO              | W   | 0.413      | -            | -                | -                | -         |     1.40 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           31 |     2360 | 2024-09-16 | NAVI Junior       | L   | 0.406      | -            | -                | -                | -         |   -10.16 | Blytz, Dytor, forsyy, kreaz, PR     |
|           30 |     2430 | 2024-09-14 | L&G               | W   | 0.392      | -            | -                | -                | -         |     0.86 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           29 |     2514 | 2024-09-11 | CPH Wolves        | L   | 0.374      | -            | -                | -                | -         |   -11.23 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           28 |     2528 | 2024-09-11 | kONO              | W   | 0.372      | -            | -                | -                | -         |     1.13 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           27 |     2570 | 2024-09-09 | MOUZ NXT          | W   | 0.360      | -            | -                | -                | -         |     0.38 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           26 |     2675 | 2024-09-05 | RUBY              | W   | 0.334      | -            | -                | -                | -         |     0.16 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           25 |     2750 | 2024-09-03 | K27               | L   | 0.321      | -            | -                | -                | -         |    -9.96 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           24 |     2888 | 2024-08-29 | Sampi             | L   | 0.285      | -            | -                | -                | -         |    -7.78 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           23 |     2941 | 2024-08-28 | ex-Enterprise     | W   | 0.279      | -            | -                | -                | -         |     0.63 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           22 |     2990 | 2024-08-27 | Aurora Young Blud | W   | 0.273      | -            | -                | -                | -         |     0.91 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           21 |     3107 | 2024-08-25 | ECSTATIC          | W   | 0.259      | -            | -                | -                | -         |     0.94 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           20 |     3127 | 2024-08-24 | GUN5              | L   | 0.253      | -            | -                | -                | -         |    -6.49 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           19 |     3131 | 2024-08-24 | los kogutos       | W   | 0.252      | -            | -                | -                | -         |     2.16 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           18 |     3157 | 2024-08-23 | UNPAID            | W   | 0.247      | -            | -                | -                | -         |     1.11 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           17 |     3199 | 2024-08-22 | Monte             | W   | 0.239      | -            | -                | -                | -         |     1.10 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           16 |     3227 | 2024-08-21 | 1WIN              | W   | 0.234      | -            | -                | -                | -         |     0.18 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           15 |     3257 | 2024-08-21 | BC.Game           | L   | 0.233      | -            | -                | -                | -         |    -6.82 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           14 |     3294 | 2024-08-20 | Illuminar         | W   | 0.226      | -            | -                | -                | -         |     0.17 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           13 |     3347 | 2024-08-18 | Preasy            | W   | 0.212      | -            | -                | -                | -         |     0.12 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|           12 |     3443 | 2024-08-14 | Into the Breach   | L   | 0.187      | -            | -                | -                | -         |    -5.46 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           11 |     3449 | 2024-08-14 | Aurora Young Blud | L   | 0.186      | -            | -                | -                | -         |    -5.28 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|           10 |     3625 | 2024-08-08 | Passion UA        | L   | 0.147      | -            | -                | -                | -         |    -3.29 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            9 |     3638 | 2024-08-08 | ex-Enterprise     | L   | 0.145      | -            | -                | -                | -         |    -4.30 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            8 |     3666 | 2024-08-07 | Revenant          | L   | 0.140      | -            | -                | -                | -         |    -4.30 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            7 |     3675 | 2024-08-07 | Nexus             | L   | 0.140      | -            | -                | -                | -         |    -1.50 | Dytor, forsyy, kreaz, nbqq, NEOFRAG |
|            6 |     3769 | 2024-08-04 | SINNERS           | W   | 0.121      | -            | -                | -                | 1 (0.121) |     0.76 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            5 |     3808 | 2024-08-03 | AVEZ              | W   | 0.114      | -            | -                | -                | 1 (0.114) |     0.05 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            4 |     3837 | 2024-08-02 | SINNERS           | W   | 0.108      | -            | -                | -                | 1 (0.108) |     0.68 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            3 |     3979 | 2024-07-30 | 1WIN              | W   | 0.087      | -            | -                | -                | -         |     0.05 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            2 |     4018 | 2024-07-29 | TNL               | L   | 0.079      | -            | -                | -                | -         |    -2.44 | Blytz, Dytor, forsyy, kreaz, nbqq   |
|            1 |     4134 | 2024-07-25 | HAVU              | W   | 0.053      | -            | -                | -                | -         |     0.01 | Blytz, Dytor, forsyy, kreaz, nbqq   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($67,055.94)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.28) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-11-24 |      0.867 | $42,991.00     | $37,271.80      |
| 2024-11-12 |      0.787 | $1,000.00      | $787.23         |
| 2024-11-11 |      0.779 | $5,000.00      | $3,896.33       |
| 2024-11-10 |      0.775 | $7,500.00      | $5,809.81       |
| 2024-10-05 |      0.534 | $11,100.00     | $5,923.80       |
| 2024-09-22 |      0.447 | $661.00        | $295.76         |
| 2024-09-18 |      0.419 | $3,000.00      | $1,255.96       |
| 2024-08-30 |      0.292 | $3,000.00      | $876.80         |
| 2024-08-04 |      0.121 | $7,754.00      | $938.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
