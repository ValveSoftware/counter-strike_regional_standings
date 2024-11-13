### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal<br />
Global Rank: [89](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_13.md)<br />
Regional Rank: [63]( ../../standings_europe_2024_11_13.md)<br />
<br />
Final Rank Value:  889.9<br />
<br />
Final Rank Value (889.9) = Starting Rank Value (891.2) + Head To Head Adjustments (-1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.387[<sup>1</sup>](#table2)
- Bounty Collected: 0.357[<sup>2</sup>](#table1)
- Opponent Network: 0.239[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.246<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 891.2
- 400 + ( ( 0.246 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 891.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           75 |      151 | 2024-11-07 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -9.52 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           74 |      223 | 2024-11-03 | Aurora Young Blud | W   | 1.000      | 0.384        | 0.020 (0.008)    | 0.652 (0.250)    | 0 (0.000) |    15.11 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           73 |      253 | 2024-11-02 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |    -6.48 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           72 |      258 | 2024-11-02 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -13.75 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           71 |      274 | 2024-11-01 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |    -9.19 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           70 |      327 | 2024-10-29 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -11.34 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           69 |      332 | 2024-10-29 | Rare Atom         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    16.66 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           68 |      335 | 2024-10-29 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |   -12.29 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           67 |      368 | 2024-10-27 | Rebels            | W   | 1.000      | 0.371        | 0.035 (0.013)    | -                | 0 (0.000) |    17.56 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           66 |      432 | 2024-10-24 | NewBALLS          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.28 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           65 |      478 | 2024-10-20 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -16.40 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           64 |      670 | 2024-10-11 | ARCRED            | W   | 0.979      | 0.384        | 0.038 (0.014)    | -                | 0 (0.000) |    11.18 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           63 |     1136 | 2024-09-27 | WW                | L   | 0.885      | -            | -                | -                | -         |   -23.88 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           62 |     1217 | 2024-09-25 | Aurora            | L   | 0.874      | -            | -                | -                | -         |    -7.47 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           61 |     1230 | 2024-09-25 | CPH Wolves        | L   | 0.872      | -            | -                | -                | -         |   -15.45 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           60 |     1269 | 2024-09-24 | Into the Breach   | L   | 0.867      | -            | -                | -                | -         |   -12.17 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           59 |     1381 | 2024-09-20 | CYBERSHOKE        | W   | 0.840      | 0.435        | -                | 0.617 (0.225)    | 0 (0.000) |    13.92 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           58 |     1449 | 2024-09-18 | Insilio           | W   | 0.827      | 0.435        | -                | 0.654 (0.235)    | 0 (0.000) |    14.46 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           57 |     1510 | 2024-09-16 | FAVBET            | L   | 0.812      | -            | -                | -                | -         |   -12.74 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           56 |     1543 | 2024-09-15 | Nexus             | W   | 0.805      | -            | -                | -                | 0 (0.000) |     8.68 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           55 |     1715 | 2024-09-09 | NAVI Junior       | L   | 0.767      | -            | -                | -                | -         |    -9.99 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           54 |     1767 | 2024-09-07 | CPH Wolves        | W   | 0.753      | -            | -                | -                | 0 (0.000) |     8.71 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           53 |     1795 | 2024-09-06 | GamerLegion       | L   | 0.746      | -            | -                | -                | -         |    -9.50 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           52 |     1824 | 2024-09-05 | GL Academy        | W   | 0.740      | -            | -                | -                | 0 (0.000) |     1.66 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           51 |     1897 | 2024-09-03 | Anonymo           | W   | 0.727      | -            | -                | -                | -         |     2.97 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           50 |     1925 | 2024-09-02 | 9INE              | W   | 0.720      | 0.435        | 0.056 (0.017)    | 0.789 (0.247)    | -         |    13.52 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           49 |     1978 | 2024-08-30 | CPH Wolves        | W   | 0.700      | 0.435        | -                | 0.641 (0.195)    | -         |     8.64 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           48 |     1985 | 2024-08-30 | OG                | L   | 0.699      | -            | -                | -                | -         |    -7.86 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           47 |     2083 | 2024-08-28 | EYEBALLERS        | W   | 0.685      | -            | -                | -                | -         |     6.33 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           46 |     2123 | 2024-08-27 | B8                | L   | 0.680      | -            | -                | -                | -         |    -3.12 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           45 |     2135 | 2024-08-27 | Revenant          | L   | 0.679      | -            | -                | -                | -         |   -11.71 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           44 |     2200 | 2024-08-26 | Passion UA        | W   | 0.673      | 0.435        | 0.105 (0.031)    | 1.000 (0.293)    | -         |    14.58 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           43 |     2342 | 2024-08-22 | DASH              | L   | 0.645      | -            | -                | -                | -         |   -17.69 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           42 |     2489 | 2024-08-18 | Permitta          | W   | 0.621      | 0.435        | 0.030 (0.008)    | 1.000 (0.270)    | -         |    13.26 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           41 |     2495 | 2024-08-18 | BetBoom           | L   | 0.619      | -            | -                | -                | -         |    -5.68 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           40 |     2518 | 2024-08-17 | Insilio           | W   | 0.613      | -            | -                | -                | -         |     9.45 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           39 |     2535 | 2024-08-16 | RUBY              | W   | 0.607      | -            | -                | -                | -         |     5.77 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           38 |     2585 | 2024-08-15 | Rhyno             | L   | 0.598      | -            | -                | -                | -         |   -10.90 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           37 |     2631 | 2024-08-13 | DMS               | W   | 0.586      | -            | -                | -                | -         |     6.52 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           36 |     2681 | 2024-08-12 | SINNERS           | W   | 0.579      | 0.435        | 0.090 (0.023)    | 0.907 (0.228)    | -         |    13.45 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           35 |     2707 | 2024-08-11 | Nemiga            | L   | 0.572      | -            | -                | -                | -         |    -1.25 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           34 |     2720 | 2024-08-10 | CYBERSHOKE        | L   | 0.567      | -            | -                | -                | -         |    -8.65 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           33 |     2727 | 2024-08-10 | Sashi             | W   | 0.566      | 0.426        | 0.056 (0.013)    | -                | -         |    10.74 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           32 |     2754 | 2024-08-09 | MOUZ NXT          | W   | 0.559      | -            | -                | -                | -         |     7.89 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           31 |     2773 | 2024-08-08 | SovvyKiNG         | W   | 0.553      | -            | -                | -                | -         |     5.07 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           30 |     2788 | 2024-08-08 | Passion UA        | W   | 0.551      | 0.426        | 0.105 (0.025)    | 1.000 (0.235)    | -         |    12.38 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           29 |     2871 | 2024-08-06 | DMS               | W   | 0.539      | -            | -                | -                | -         |     7.07 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           28 |     3085 | 2024-07-31 | K27               | W   | 0.500      | -            | -                | -                | -         |     2.69 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           27 |     3092 | 2024-07-31 | Permitta          | W   | 0.499      | 0.426        | -                | 1.000 (0.213)    | -         |    13.11 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           26 |     3142 | 2024-07-30 | GUN5              | L   | 0.492      | -            | -                | -                | -         |    -6.37 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           25 |     3208 | 2024-07-28 | SovvyKiNG         | W   | 0.478      | -            | -                | -                | -         |     5.50 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           24 |     3241 | 2024-07-26 | Sampi             | L   | 0.467      | -            | -                | -                | -         |    -5.32 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           23 |     3294 | 2024-07-25 | Monte             | L   | 0.458      | -            | -                | -                | -         |    -4.00 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           22 |     3412 | 2024-07-21 | GUN5              | L   | 0.432      | -            | -                | -                | -         |    -5.31 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           21 |     3487 | 2024-07-19 | ALTERNATE aTTaX   | W   | 0.419      | -            | -                | -                | -         |     7.41 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           20 |     3604 | 2024-07-17 | SINNERS           | L   | 0.406      | -            | -                | -                | -         |    -2.54 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           19 |     3607 | 2024-07-17 | 9INE              | L   | 0.406      | -            | -                | -                | -         |    -4.89 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           18 |     3660 | 2024-07-16 | Metizport         | L   | 0.399      | -            | -                | -                | -         |    -1.99 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           17 |     3708 | 2024-07-15 | Johnny Speeds     | L   | 0.393      | -            | -                | -                | -         |    -4.23 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           16 |     3769 | 2024-07-11 | Sashi             | L   | 0.366      | -            | -                | -                | -         |    -4.35 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           15 |     3773 | 2024-07-11 | 9INE              | W   | 0.365      | 0.358        | 0.056 (0.007)    | -                | -         |     7.19 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           14 |     3795 | 2024-07-10 | Johnny Speeds     | L   | 0.358      | -            | -                | -                | -         |    -3.91 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           13 |     3811 | 2024-07-09 | SkyFury           | W   | 0.353      | -            | -                | -                | -         |     1.32 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           12 |     3994 | 2024-06-14 | GamerLegion       | L   | 0.186      | -            | -                | -                | -         |    -1.88 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           11 |     4105 | 2024-06-10 | MOUZ NXT          | W   | 0.159      | -            | -                | -                | -         |     2.10 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           10 |     4234 | 2024-06-08 | Entropiq          | W   | 0.145      | -            | -                | -                | -         |     0.29 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            9 |     4261 | 2024-06-07 | 9INE              | L   | 0.140      | -            | -                | -                | -         |    -1.61 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            8 |     4348 | 2024-06-06 | NAVI Junior       | L   | 0.132      | -            | -                | -                | -         |    -1.38 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            7 |     4360 | 2024-06-06 | 5W                | L   | 0.131      | -            | -                | -                | -         |    -2.85 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            6 |     4432 | 2024-06-04 | Rhyno             | L   | 0.121      | -            | -                | -                | -         |    -2.07 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            5 |     4654 | 2024-05-27 | Rhyno             | L   | 0.066      | -            | -                | -                | -         |    -1.13 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            4 |     4706 | 2024-05-24 | ALTERNATE aTTaX   | W   | 0.045      | -            | -                | -                | -         |     0.80 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            3 |     4760 | 2024-05-22 | Permitta          | L   | 0.033      | -            | -                | -                | -         |    -0.14 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            2 |     4809 | 2024-05-21 | RUBY              | L   | 0.025      | -            | -                | -                | -         |    -0.53 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            1 |     4863 | 2024-05-19 | Sangal            | L   | 0.013      | -            | -                | -                | -         |    -0.02 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,768.56)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.846 | $1,250.00      | $1,057.67       |
| 2024-08-28 |      0.687 | $2,000.00      | $1,374.06       |
| 2024-08-18 |      0.620 | $5,000.00      | $3,099.91       |
| 2024-08-11 |      0.572 | $10,000.00     | $5,722.63       |
| 2024-06-17 |      0.206 | $2,500.00      | $514.28         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
