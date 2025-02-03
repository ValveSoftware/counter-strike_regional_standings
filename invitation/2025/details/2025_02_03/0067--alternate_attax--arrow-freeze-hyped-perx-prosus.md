### Roster Details<br />
Team Name: ALTERNATE aTTaX<br />
Roster: ArroW, FreeZe, hyped, PerX, prosus<br />
Global Rank: [67](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [46]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  963.3<br />
<br />
Final Rank Value (963.3) = Starting Rank Value (1054.4) + Head To Head Adjustments (-91.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.459[<sup>1</sup>](#table2)
- Bounty Collected: 0.369[<sup>2</sup>](#table1)
- Opponent Network: 0.107[<sup>2</sup>](#table1)
- LAN Wins: 0.415[<sup>2</sup>](#table1)

The average of these factors is 0.337<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1054.4
- 400 + ( ( 0.337 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 1054.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           66 |      563 | 2024-12-13 | 9INE              | L   | 0.853      | -            | -                | -                | -         |   -14.13 | ArroW, FreeZe, hyped, PerX, prosus |
|           65 |      740 | 2024-12-04 | 500               | L   | 0.794      | -            | -                | -                | -         |   -10.69 | ArroW, FreeZe, hyped, PerX, prosus |
|           64 |      758 | 2024-12-03 | FAVBET            | W   | 0.787      | 0.372        | 0.074 (0.022)    | 1.000 (0.293)    | 0 (0.000) |     9.68 | ArroW, FreeZe, hyped, PerX, prosus |
|           63 |      773 | 2024-12-02 | GameAgents        | W   | 0.781      | -            | -                | -                | 0 (0.000) |     0.95 | ArroW, FreeZe, hyped, PerX, prosus |
|           62 |      794 | 2024-12-01 | Viperio           | W   | 0.774      | -            | -                | -                | 0 (0.000) |     3.09 | ArroW, FreeZe, hyped, PerX, prosus |
|           61 |      869 | 2024-11-28 | L&G               | L   | 0.753      | -            | -                | -                | -         |   -16.09 | ArroW, FreeZe, hyped, PerX, prosus |
|           60 |      890 | 2024-11-26 | kONO              | W   | 0.741      | 0.372        | 0.048 (0.013)    | 0.600 (0.165)    | 0 (0.000) |     8.24 | ArroW, FreeZe, hyped, PerX, prosus |
|           59 |     1090 | 2024-11-16 | Nexus             | L   | 0.674      | -            | -                | -                | -         |    -3.71 | ArroW, faveN, FreeZe, hyped, PerX  |
|           58 |     1106 | 2024-11-15 | Hungary           | W   | 0.666      | 0.617        | -                | 0.197 (0.081)    | 1 (0.666) |     6.62 | ArroW, faveN, FreeZe, hyped, PerX  |
|           57 |     1112 | 2024-11-15 | GTZ               | W   | 0.666      | 0.617        | 0.190 (0.078)    | 0.298 (0.123)    | 1 (0.666) |    14.89 | ArroW, faveN, FreeZe, hyped, PerX  |
|           56 |     1163 | 2024-11-14 | Jordan            | W   | 0.659      | -            | -                | -                | 1 (0.659) |     1.12 | ArroW, faveN, FreeZe, hyped, PerX  |
|           55 |     1166 | 2024-11-14 | Kosovo            | W   | 0.659      | -            | -                | -                | 1 (0.659) |     1.82 | ArroW, faveN, FreeZe, hyped, PerX  |
|           54 |     1171 | 2024-11-14 | Chile             | W   | 0.658      | -            | -                | -                | 1 (0.658) |     1.34 | ArroW, faveN, FreeZe, hyped, PerX  |
|           53 |     1401 | 2024-11-03 | Arrow             | L   | 0.587      | -            | -                | -                | -         |   -12.68 | ArroW, awzek, FreeZe, hyped, PerX  |
|           52 |     1426 | 2024-11-02 | BIG               | L   | 0.580      | -            | -                | -                | -         |    -1.74 | ArroW, awzek, FreeZe, hyped, PerX  |
|           51 |     1619 | 2024-10-24 | ECLOT             | L   | 0.518      | -            | -                | -                | -         |    -3.88 | ArroW, awzek, FreeZe, PerX, rulz   |
|           50 |     1629 | 2024-10-23 | Preasy            | W   | 0.511      | -            | -                | -                | 0 (0.000) |     3.27 | ArroW, awzek, FreeZe, hyped, PerX  |
|           49 |     1804 | 2024-10-15 | HOTU              | L   | 0.458      | -            | -                | -                | -         |   -11.66 | ArroW, awzek, FreeZe, hyped, PerX  |
|           48 |     1941 | 2024-10-08 | Monte Gen         | W   | 0.412      | -            | -                | -                | -         |     3.81 | ArroW, awzek, FreeZe, hyped, PerX  |
|           47 |     1942 | 2024-10-08 | Metizport         | L   | 0.411      | -            | -                | -                | -         |    -2.40 | ArroW, awzek, FreeZe, hyped, PerX  |
|           46 |     1956 | 2024-10-07 | GUN5              | L   | 0.407      | -            | -                | -                | -         |    -5.26 | ArroW, awzek, FreeZe, hyped, PerX  |
|           45 |     2009 | 2024-10-05 | Passion UA        | L   | 0.394      | -            | -                | -                | -         |    -4.42 | ArroW, awzek, FreeZe, hyped, PerX  |
|           44 |     2085 | 2024-10-03 | TSM               | W   | 0.380      | 0.435        | 0.030 (0.005)    | 0.329 (0.054)    | -         |     3.89 | ArroW, awzek, FreeZe, hyped, PerX  |
|           43 |     2093 | 2024-10-03 | B8                | L   | 0.379      | -            | -                | -                | -         |    -3.87 | ArroW, awzek, FreeZe, hyped, PerX  |
|           42 |     2173 | 2024-10-01 | CPH Wolves        | W   | 0.367      | 0.435        | -                | 0.297 (0.047)    | -         |     2.61 | ArroW, awzek, FreeZe, hyped, PerX  |
|           41 |     2182 | 2024-10-01 | 9INE              | L   | 0.365      | -            | -                | -                | -         |    -7.75 | ArroW, awzek, FreeZe, hyped, PerX  |
|           40 |     2188 | 2024-10-01 | HOTU              | W   | 0.364      | 0.435        | -                | 0.383 (0.061)    | -         |     2.10 | ArroW, awzek, FreeZe, hyped, PerX  |
|           39 |     2199 | 2024-09-30 | Adventurers       | L   | 0.360      | -            | -                | -                | -         |    -8.63 | ArroW, awzek, FreeZe, hyped, PerX  |
|           38 |     2205 | 2024-09-30 | 500               | L   | 0.359      | -            | -                | -                | -         |    -7.25 | ArroW, awzek, FreeZe, hyped, PerX  |
|           37 |     2211 | 2024-09-30 | Illuminar         | L   | 0.358      | -            | -                | -                | -         |    -7.41 | ArroW, awzek, FreeZe, hyped, PerX  |
|           36 |     2237 | 2024-09-29 | GameAgents        | L   | 0.351      | -            | -                | -                | -         |    -8.86 | ArroW, awzek, FreeZe, hyped, PerX  |
|           35 |     2301 | 2024-09-27 | moneyF            | W   | 0.340      | 0.435        | -                | 0.639 (0.094)    | -         |     3.15 | ArroW, awzek, FreeZe, hyped, PerX  |
|           34 |     2401 | 2024-09-25 | Rhyno             | W   | 0.327      | -            | -                | -                | -         |     1.59 | ArroW, awzek, FreeZe, hyped, PerX  |
|           33 |     2465 | 2024-09-24 | moneyF            | W   | 0.318      | 0.371        | -                | 0.639 (0.075)    | -         |     2.93 | ArroW, awzek, FreeZe, hyped, PerX  |
|           32 |     2502 | 2024-09-23 | Spirit Academy    | L   | 0.312      | -            | -                | -                | -         |    -5.10 | ArroW, awzek, FreeZe, hyped, PerX  |
|           31 |     2554 | 2024-09-21 | FAVBET            | L   | 0.298      | -            | -                | -                | -         |    -6.42 | ArroW, awzek, FreeZe, hyped, PerX  |
|           30 |     2580 | 2024-09-20 | UNiTY             | W   | 0.291      | 0.371        | 0.069 (0.007)    | -                | -         |     2.78 | ArroW, awzek, FreeZe, hyped, PerX  |
|           29 |     2611 | 2024-09-19 | Kosovo            | W   | 0.285      | -            | -                | -                | -         |     0.58 | ArroW, awzek, FreeZe, hyped, PerX  |
|           28 |     2675 | 2024-09-17 | CPH Wolves        | L   | 0.272      | -            | -                | -                | -         |    -7.12 | ArroW, awzek, FreeZe, hyped, w1dow |
|           27 |     2732 | 2024-09-15 | Monte Gen         | L   | 0.258      | -            | -                | -                | -         |    -6.36 | ArroW, awzek, FreeZe, hyped, PerX  |
|           26 |     2880 | 2024-09-10 | TSM               | L   | 0.226      | -            | -                | -                | -         |    -5.47 | ArroW, awzek, FreeZe, hyped, PerX  |
|           25 |     3015 | 2024-09-05 | FAVBET            | W   | 0.193      | 0.384        | 0.074 (0.005)    | 1.000 (0.074)    | -         |     1.78 | ArroW, awzek, FreeZe, hyped, PerX  |
|           24 |     3025 | 2024-09-05 | Cloud9            | L   | 0.192      | -            | -                | -                | -         |    -3.44 | ArroW, awzek, FreeZe, hyped, PerX  |
|           23 |     3062 | 2024-09-04 | GameAgents        | W   | 0.185      | -            | -                | -                | -         |     0.15 | ArroW, awzek, FreeZe, hyped, PerX  |
|           22 |     3129 | 2024-09-01 | Alliance          | L   | 0.166      | -            | -                | -                | -         |    -3.41 | ArroW, awzek, hyped, kyuubii, PerX |
|           21 |     3148 | 2024-08-31 | OG                | W   | 0.159      | 0.384        | 0.166 (0.010)    | -                | -         |     1.63 | ArroW, awzek, FreeZe, hyped, PerX  |
|           20 |     3226 | 2024-08-29 | moneyF            | L   | 0.144      | -            | -                | -                | -         |    -3.52 | ArroW, awzek, FreeZe, hyped, PerX  |
|           19 |     3245 | 2024-08-28 | B8                | W   | 0.140      | 0.435        | 0.146 (0.009)    | -                | -         |     2.57 | ArroW, awzek, FreeZe, hyped, PerX  |
|           18 |     3270 | 2024-08-28 | Monte Gen         | W   | 0.138      | -            | -                | -                | -         |     0.86 | ArroW, awzek, FreeZe, hyped, PerX  |
|           17 |     3308 | 2024-08-27 | Nemiga            | W   | 0.133      | 0.384        | 0.480 (0.025)    | -                | -         |     3.03 | ArroW, awzek, FreeZe, hyped, PerX  |
|           16 |     3330 | 2024-08-27 | MOUZ NXT          | W   | 0.131      | -            | -                | -                | -         |     0.40 | ArroW, awzek, FreeZe, hyped, PerX  |
|           15 |     3402 | 2024-08-26 | BIG               | W   | 0.125      | 0.435        | 0.352 (0.019)    | -                | -         |     3.49 | ArroW, awzek, FreeZe, hyped, PerX  |
|           14 |     3457 | 2024-08-24 | FAVBET            | L   | 0.114      | -            | -                | -                | -         |    -2.48 | ArroW, awzek, FreeZe, hyped, w1dow |
|           13 |     3502 | 2024-08-23 | Grannys Knockers  | W   | 0.104      | -            | -                | -                | -         |     0.28 | ArroW, awzek, FreeZe, hyped, PerX  |
|           12 |     3516 | 2024-08-22 | Sampi             | W   | 0.099      | -            | -                | -                | -         |     1.07 | ArroW, awzek, FreeZe, hyped, PerX  |
|           11 |     3570 | 2024-08-21 | Aurora Young Blud | W   | 0.092      | -            | -                | -                | -         |     0.14 | ArroW, awzek, hyped, PerX, w1dow   |
|           10 |     3620 | 2024-08-20 | Kosovo            | L   | 0.086      | -            | -                | -                | -         |    -2.57 | ArroW, awzek, FreeZe, hyped, PerX  |
|            9 |     3642 | 2024-08-19 | Insilio           | W   | 0.080      | -            | -                | -                | -         |     0.41 | ArroW, awzek, FreeZe, hyped, PerX  |
|            8 |     3663 | 2024-08-19 | Illuminar         | L   | 0.078      | -            | -                | -                | -         |    -2.25 | ArroW, awzek, FreeZe, hyped, PerX  |
|            7 |     3665 | 2024-08-19 | WOPA              | W   | 0.078      | -            | -                | -                | -         |     0.70 | ArroW, awzek, FreeZe, hyped, PerX  |
|            6 |     3757 | 2024-08-15 | AMKAL             | W   | 0.053      | -            | -                | -                | -         |     0.17 | ArroW, awzek, FreeZe, hyped, PerX  |
|            5 |     3768 | 2024-08-15 | Anonymo           | L   | 0.051      | -            | -                | -                | -         |    -1.26 | ArroW, awzek, FreeZe, hyped, PerX  |
|            4 |     3779 | 2024-08-14 | TSM               | L   | 0.046      | -            | -                | -                | -         |    -1.12 | ArroW, awzek, FreeZe, hyped, PerX  |
|            3 |     3819 | 2024-08-13 | Monte Gen         | L   | 0.038      | -            | -                | -                | -         |    -0.98 | ArroW, awzek, FreeZe, hyped, PerX  |
|            2 |     3870 | 2024-08-12 | Nexus             | L   | 0.031      | -            | -                | -                | -         |    -0.13 | ArroW, awzek, FreeZe, hyped, PerX  |
|            1 |     3953 | 2024-08-08 | Falcons           | L   | 0.007      | -            | -                | -                | -         |    -0.16 | ArroW, awzek, FreeZe, hyped, PerX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,524.97)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.820 | $750.00        | $615.33         |
| 2024-11-17 |      0.680 | $12,500.00     | $8,500.60       |
| 2024-11-03 |      0.587 | $271.00        | $159.05         |
| 2024-09-14 |      0.254 | $500.00        | $126.79         |
| 2024-08-28 |      0.140 | $22,000.00     | $3,087.95       |
| 2024-08-09 |      0.014 | $2,500.00      | $35.25          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
