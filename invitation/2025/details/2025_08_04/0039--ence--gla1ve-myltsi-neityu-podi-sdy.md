### Roster Details<br />
Team Name: ENCE<br />
Roster: gla1ve, myltsi, Neityu, podi, sdy<br />
Global Rank: [39](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [27]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  1107.0<br />
<br />
Final Rank Value (1107.0) = Starting Rank Value (1054.6) + Head To Head Adjustments (52.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.537[<sup>1</sup>](#table2)
- Bounty Collected: 0.422[<sup>2</sup>](#table1)
- Opponent Network: 0.254[<sup>2</sup>](#table1)
- LAN Wins: 0.170[<sup>2</sup>](#table1)

The average of these factors is 0.346<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1054.6
- 400 + ( ( 0.346 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 1054.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           71 |      313 | 2025-07-14 | PARIVISION     | L   | 1.000      | -            | -                | -                | -         |   -18.19 | gla1ve, myltsi, Neityu, podi, sdy     |
|           70 |      422 | 2025-07-10 | ROSY           | L   | 1.000      | -            | -                | -                | -         |   -27.36 | gla1ve, myltsi, Neityu, podi, sdy     |
|           69 |      917 | 2025-06-04 | Reason         | W   | 0.794      | -            | -                | -                | 0 (0.000) |     2.97 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           68 |      938 | 2025-06-03 | Iberian Soul   | W   | 0.787      | 0.389        | 0.181 (0.056)    | 1.000 (0.306)    | 0 (0.000) |    15.59 | gla1ve, myltsi, podi, sdy, xKacpersky |
|           67 |      948 | 2025-06-01 | fnatic         | L   | 0.774      | -            | -                | -                | -         |    -9.36 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           66 |      956 | 2025-05-31 | fnatic         | W   | 0.768      | 0.402        | 0.104 (0.032)    | 0.630 (0.195)    | 1 (0.768) |    15.02 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           65 |      966 | 2025-05-30 | 500            | W   | 0.760      | -            | -                | -                | 1 (0.760) |     4.13 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           64 |      976 | 2025-05-29 | PARIVISION     | L   | 0.753      | -            | -                | -                | -         |   -13.93 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           63 |      996 | 2025-05-27 | Passion UA     | W   | 0.740      | 0.435        | 0.097 (0.031)    | 1.000 (0.321)    | 0 (0.000) |    12.71 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           62 |     1004 | 2025-05-26 | Sashi          | W   | 0.734      | 0.389        | -                | 1.000 (0.286)    | 0 (0.000) |     6.94 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           61 |     1099 | 2025-05-21 | 1win           | W   | 0.699      | -            | -                | -                | 0 (0.000) |     2.68 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           60 |     1152 | 2025-05-19 | Nexus          | W   | 0.686      | 0.389        | 0.076 (0.020)    | 0.888 (0.237)    | 0 (0.000) |     5.89 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           59 |     1164 | 2025-05-18 | PARIVISION     | W   | 0.681      | 0.435        | 0.121 (0.036)    | 1.000 (0.296)    | 0 (0.000) |     9.50 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           58 |     1168 | 2025-05-18 | Nemiga         | W   | 0.680      | 0.435        | 0.075 (0.022)    | 0.739 (0.218)    | 0 (0.000) |    12.38 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           57 |     1184 | 2025-05-17 | SAW            | W   | 0.673      | 0.435        | 0.279 (0.082)    | -                | -         |    16.84 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           56 |     1198 | 2025-05-16 | Nexus          | W   | 0.668      | 0.435        | 0.076 (0.022)    | 0.888 (0.258)    | -         |     6.72 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           55 |     1244 | 2025-05-14 | Passion UA     | L   | 0.655      | -            | -                | -                | -         |    -7.35 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           54 |     1251 | 2025-05-14 | LA MASIA       | W   | 0.654      | -            | -                | -                | -         |     1.60 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           53 |     1287 | 2025-05-13 | KOMNATA        | W   | 0.647      | -            | -                | -                | -         |     1.15 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           52 |     1312 | 2025-05-12 | CYBERSHOKE     | W   | 0.640      | 0.435        | -                | 0.780 (0.217)    | -         |     5.75 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           51 |     1337 | 2025-05-11 | KOMNATA        | L   | 0.634      | -            | -                | -                | -         |   -18.97 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           50 |     1341 | 2025-05-11 | ECSTATIC       | L   | 0.634      | -            | -                | -                | -         |    -5.94 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           49 |     1373 | 2025-05-10 | Spirit Academy | W   | 0.626      | -            | -                | -                | -         |     8.82 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           48 |     1437 | 2025-05-07 | Partizan       | W   | 0.608      | -            | -                | -                | -         |     6.55 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           47 |     1461 | 2025-05-07 | ECSTATIC       | L   | 0.605      | -            | -                | -                | -         |    -5.36 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           46 |     1479 | 2025-05-06 | Eternal Fire   | L   | 0.601      | -            | -                | -                | -         |   -15.96 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           45 |     1490 | 2025-05-06 | fnatic         | W   | 0.599      | 0.384        | 0.104 (0.024)    | -                | -         |    13.45 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           44 |     1514 | 2025-05-05 | CYBERSHOKE     | W   | 0.592      | -            | -                | -                | -         |     5.28 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           43 |     1529 | 2025-05-04 | 9INE           | W   | 0.587      | -            | -                | -                | -         |    10.01 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           42 |     1654 | 2025-04-29 | TPuDCATb TPu   | W   | 0.554      | -            | -                | -                | -         |     4.20 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           41 |     1659 | 2025-04-29 | Reason         | L   | 0.553      | -            | -                | -                | -         |   -15.01 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           40 |     1694 | 2025-04-27 | Zero Tenacity  | W   | 0.540      | -            | -                | -                | -         |     4.25 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           39 |     1723 | 2025-04-26 | FUT            | L   | 0.534      | -            | -                | -                | -         |    -7.92 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           38 |     1753 | 2025-04-25 | 500            | W   | 0.526      | -            | -                | -                | -         |     3.36 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           37 |     1791 | 2025-04-22 | Maestro        | W   | 0.507      | -            | -                | -                | -         |     0.59 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           36 |     1820 | 2025-04-20 | FUT            | L   | 0.494      | -            | -                | -                | -         |    -7.51 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           35 |     1823 | 2025-04-20 | BetBoom        | W   | 0.493      | 0.657        | 0.315 (0.102)    | 0.631 (0.204)    | -         |    12.75 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           34 |     1837 | 2025-04-19 | 9 Pandas       | W   | 0.487      | -            | -                | -                | -         |     4.53 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           33 |     1851 | 2025-04-18 | BetBoom        | L   | 0.480      | -            | -                | -                | -         |    -2.62 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           32 |     1856 | 2025-04-18 | Metizport      | L   | 0.479      | -            | -                | -                | -         |   -10.45 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           31 |     1865 | 2025-04-18 | Spirit Academy | W   | 0.478      | -            | -                | -                | -         |     6.12 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           30 |     1873 | 2025-04-17 | LA MASIA       | W   | 0.474      | -            | -                | -                | -         |     1.33 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           29 |     1876 | 2025-04-17 | Nexus          | L   | 0.474      | -            | -                | -                | -         |   -10.74 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           28 |     1888 | 2025-04-17 | B8             | L   | 0.473      | -            | -                | -                | -         |    -4.43 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           27 |     1911 | 2025-04-16 | SAW            | W   | 0.467      | -            | -                | -                | -         |    12.36 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           26 |     1924 | 2025-04-16 | fnatic         | W   | 0.465      | -            | -                | -                | -         |    10.61 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           25 |     1940 | 2025-04-15 | Astralis       | L   | 0.459      | -            | -                | -                | -         |    -0.36 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           24 |     1961 | 2025-04-14 | HEROIC         | L   | 0.453      | -            | -                | -                | -         |    -1.20 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           23 |     1971 | 2025-04-14 | 500            | W   | 0.451      | -            | -                | -                | -         |     3.17 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           22 |     2225 | 2025-04-03 | ECLOT          | W   | 0.380      | -            | -                | -                | -         |     4.18 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           21 |     2232 | 2025-04-03 | Nexus          | W   | 0.379      | -            | -                | -                | -         |     3.79 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           20 |     2282 | 2025-04-02 | Partizan       | W   | 0.374      | -            | -                | -                | -         |     4.11 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           19 |     2284 | 2025-04-02 | LA MASIA       | W   | 0.373      | -            | -                | -                | -         |     1.23 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           18 |     2310 | 2025-04-02 | BetBoom        | L   | 0.371      | -            | -                | -                | -         |    -1.90 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           17 |     2458 | 2025-03-29 | B8             | L   | 0.345      | -            | -                | -                | -         |    -2.81 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           16 |     2514 | 2025-03-28 | ECSTATIC       | W   | 0.339      | -            | -                | -                | -         |     8.07 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           15 |     2568 | 2025-03-27 | PARIVISION     | L   | 0.334      | -            | -                | -                | -         |    -5.53 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           14 |     2925 | 2025-03-16 | 500            | L   | 0.259      | -            | -                | -                | -         |    -6.31 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           13 |     2952 | 2025-03-15 | 9 Pandas       | W   | 0.253      | -            | -                | -                | -         |     2.00 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           12 |     2990 | 2025-03-13 | ECSTATIC       | W   | 0.239      | -            | -                | -                | -         |     5.76 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           11 |     3105 | 2025-03-09 | FUT            | L   | 0.214      | -            | -                | -                | -         |    -3.25 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           10 |     3122 | 2025-03-09 | BIG            | W   | 0.212      | -            | -                | -                | -         |     4.77 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            9 |     3152 | 2025-03-08 | BC.Game        | W   | 0.208      | -            | -                | -                | -         |     1.64 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            8 |     3200 | 2025-03-08 | FUT            | L   | 0.206      | -            | -                | -                | -         |    -3.16 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            7 |     3258 | 2025-03-07 | OG             | L   | 0.200      | -            | -                | -                | -         |    -3.60 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            6 |     3692 | 2025-02-21 | FUT            | L   | 0.105      | -            | -                | -                | -         |    -1.69 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            5 |     3839 | 2025-02-15 | Partizan       | L   | 0.067      | -            | -                | -                | -         |    -1.31 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            4 |     3869 | 2025-02-14 | Passion UA     | W   | 0.061      | -            | -                | -                | -         |     1.50 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            3 |     3919 | 2025-02-12 | Alliance       | W   | 0.047      | -            | -                | -                | -         |     1.02 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            2 |     4065 | 2025-02-08 | Zero Tenacity  | L   | 0.021      | -            | -                | -                | -         |    -0.48 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            1 |     4109 | 2025-02-07 | 9INE           | L   | 0.013      | -            | -                | -                | -         |    -0.17 | gla1ve, Neityu, podi, sdy, xKacpersky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($60,343.97)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-04 |      0.794 | $12,568.00     | $9,984.91       |
| 2025-06-01 |      0.774 | $7,083.00      | $5,482.56       |
| 2025-05-31 |      0.767 | $1,500.00      | $1,149.87       |
| 2025-05-18 |      0.681 | $22,000.00     | $14,976.81      |
| 2025-05-11 |      0.634 | $4,000.00      | $2,534.28       |
| 2025-04-20 |      0.494 | $42,000.00     | $20,763.50      |
| 2025-04-03 |      0.381 | $10,000.00     | $3,808.27       |
| 2025-03-16 |      0.261 | $5,000.00      | $1,303.60       |
| 2025-02-15 |      0.068 | $5,000.00      | $340.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
