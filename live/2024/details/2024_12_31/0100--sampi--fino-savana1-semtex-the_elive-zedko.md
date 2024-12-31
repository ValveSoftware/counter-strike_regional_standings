### Roster Details<br />
Team Name: Sampi<br />
Roster: fino, sAvana1, semtex, The eLiVe, ZEDKO<br />
Global Rank: [100](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [72]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  873.7<br />
<br />
Final Rank Value (873.7) = Starting Rank Value (1014.9) + Head To Head Adjustments (-141.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.415[<sup>1</sup>](#table2)
- Bounty Collected: 0.379[<sup>2</sup>](#table1)
- Opponent Network: 0.137[<sup>2</sup>](#table1)
- LAN Wins: 0.332[<sup>2</sup>](#table1)

The average of these factors is 0.316<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1014.9
- 400 + ( ( 0.316 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 1014.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           69 |      274 | 2024-12-07 | CYBERSHOKE        | L   | 1.000      | -            | -                | -                | -         |   -16.11 | fino, sAvana1, semtex, The eLiVe, ZEDKO  |
|           68 |      315 | 2024-12-05 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -21.29 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           67 |      329 | 2024-12-05 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |   -11.33 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           66 |      348 | 2024-12-04 | FLuffy Gangsters  | L   | 1.000      | -            | -                | -                | -         |   -21.88 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           65 |      412 | 2024-12-01 | Apogee            | L   | 1.000      | -            | -                | -                | -         |   -15.69 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           64 |      540 | 2024-11-24 | BRUTE             | W   | 0.965      | -            | -                | -                | 1 (0.965) |     6.27 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           63 |      568 | 2024-11-23 | UNiTY             | L   | 0.958      | -            | -                | -                | -         |   -16.54 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           62 |      582 | 2024-11-22 | Enterprise Gen    | W   | 0.953      | -            | -                | -                | 1 (0.953) |     2.33 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           61 |     1026 | 2024-11-03 | los kogutos       | L   | 0.824      | -            | -                | -                | -         |   -12.22 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           60 |     1130 | 2024-10-29 | 9INE              | L   | 0.792      | -            | -                | -                | -         |   -10.72 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           59 |     1212 | 2024-10-25 | los kogutos       | W   | 0.765      | 0.371        | 0.066 (0.019)    | 0.989 (0.280)    | 0 (0.000) |    13.91 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           58 |     1452 | 2024-10-12 | los kogutos       | L   | 0.678      | -            | -                | -                | -         |    -9.38 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           57 |     1625 | 2024-10-05 | ECLOT             | L   | 0.633      | -            | -                | -                | -         |    -4.31 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           56 |     1665 | 2024-10-04 | ECLOT             | W   | 0.626      | 0.367        | 0.252 (0.058)    | 1.000 (0.230)    | 1 (0.626) |    15.78 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           55 |     1875 | 2024-09-28 | Into the Breach   | L   | 0.586      | -            | -                | -                | -         |    -9.30 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           54 |     2133 | 2024-09-22 | SINNERS           | L   | 0.546      | -            | -                | -                | -         |    -5.51 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           53 |     2158 | 2024-09-21 | ECLOT             | W   | 0.539      | 0.346        | 0.252 (0.047)    | 1.000 (0.187)    | 1 (0.539) |    13.98 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           52 |     2183 | 2024-09-20 | UNiTY             | L   | 0.532      | -            | -                | -                | -         |    -9.43 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           51 |     2212 | 2024-09-19 | Into the Breach   | L   | 0.526      | -            | -                | -                | -         |    -9.57 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           50 |     2309 | 2024-09-16 | B8                | W   | 0.504      | 0.384        | 0.159 (0.031)    | 0.621 (0.120)    | 0 (0.000) |    11.38 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           49 |     2432 | 2024-09-12 | OG                | L   | 0.478      | -            | -                | -                | -         |    -7.82 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           48 |     2497 | 2024-09-10 | MOUZ NXT          | W   | 0.465      | -            | -                | -                | 0 (0.000) |     3.20 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           47 |     2510 | 2024-09-09 | SINNERS           | L   | 0.459      | -            | -                | -                | -         |    -5.03 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           46 |     2662 | 2024-09-04 | Metizport         | L   | 0.426      | -            | -                | -                | -         |    -1.82 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           45 |     2707 | 2024-09-03 | ex-Enterprise     | W   | 0.418      | -            | -                | -                | 0 (0.000) |     4.76 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           44 |     2746 | 2024-09-01 | EYEBALLERS        | L   | 0.405      | -            | -                | -                | -         |    -9.85 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           43 |     2773 | 2024-08-30 | Revenant          | L   | 0.393      | -            | -                | -                | -         |    -9.35 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           42 |     2786 | 2024-08-30 | GUN5              | L   | 0.391      | -            | -                | -                | -         |    -5.17 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           41 |     2814 | 2024-08-29 | Gaimin Gladiators | L   | 0.386      | -            | -                | -                | -         |    -7.37 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           40 |     2832 | 2024-08-29 | ECLOT             | W   | 0.384      | 0.371        | 0.252 (0.036)    | 1.000 (0.142)    | 0 (0.000) |    10.30 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           39 |     2873 | 2024-08-28 | GUN5              | L   | 0.378      | -            | -                | -                | -         |    -5.19 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           38 |     2910 | 2024-08-27 | CPH Wolves        | W   | 0.374      | -            | -                | -                | 0 (0.000) |     2.14 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           37 |     2930 | 2024-08-27 | TSM               | L   | 0.372      | -            | -                | -                | -         |    -6.92 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           36 |     2977 | 2024-08-26 | Sashi             | W   | 0.367      | 0.384        | 0.048 (0.007)    | 0.684 (0.096)    | -         |     6.11 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           35 |     3004 | 2024-08-26 | kONO              | W   | 0.365      | 0.384        | 0.037 (0.005)    | 0.597 (0.084)    | -         |     4.16 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           34 |     3024 | 2024-08-26 | Aurora Young Blud | W   | 0.364      | 0.371        | 0.039 (0.005)    | 0.888 (0.120)    | -         |     5.04 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           33 |     3096 | 2024-08-23 | ex-Enterprise     | W   | 0.346      | -            | -                | -                | -         |     3.73 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           32 |     3110 | 2024-08-23 | Verdant           | W   | 0.344      | 0.371        | 0.042 (0.005)    | 0.421 (0.054)    | -         |     4.81 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           31 |     3126 | 2024-08-22 | ALTERNATE aTTaX   | L   | 0.339      | -            | -                | -                | -         |    -4.03 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           30 |     3234 | 2024-08-20 | Alliance          | W   | 0.325      | -            | -                | -                | -         |     4.11 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           29 |     3269 | 2024-08-19 | Nexus             | W   | 0.319      | 0.143        | 0.350 (0.016)    | -                | -         |     9.26 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           28 |     3338 | 2024-08-16 | Revenant          | L   | 0.297      | -            | -                | -                | -         |    -7.17 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           27 |     3424 | 2024-08-13 | 9INE              | L   | 0.279      | -            | -                | -                | -         |    -4.45 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           26 |     3475 | 2024-08-12 | Metizport         | L   | 0.272      | -            | -                | -                | -         |    -1.03 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           25 |     3561 | 2024-08-08 | Nemiga            | L   | 0.247      | -            | -                | -                | -         |    -1.32 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           24 |     3630 | 2024-08-07 | DASH              | W   | 0.238      | -            | -                | -                | -         |     1.18 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           23 |     3693 | 2024-08-05 | Alliance          | W   | 0.225      | -            | -                | -                | -         |     2.91 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           22 |     3830 | 2024-08-01 | BC.Game           | L   | 0.199      | -            | -                | -                | -         |    -4.18 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           21 |     3840 | 2024-08-01 | ALTERNATE aTTaX   | L   | 0.198      | -            | -                | -                | -         |    -2.08 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           20 |     3871 | 2024-07-31 | Aurora Young Blud | L   | 0.193      | -            | -                | -                | -         |    -3.58 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           19 |     3889 | 2024-07-31 | Illuminar         | L   | 0.191      | -            | -                | -                | -         |    -5.16 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           18 |     3928 | 2024-07-30 | CYBERSHOKE        | W   | 0.185      | 0.426        | -                | 0.699 (0.055)    | -         |     1.76 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           17 |     3931 | 2024-07-30 | Monte Gen         | W   | 0.185      | -            | -                | -                | -         |     1.54 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           16 |     3963 | 2024-07-29 | CYBERSHOKE        | L   | 0.178      | -            | -                | -                | -         |    -3.93 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           15 |     3984 | 2024-07-28 | CPH Wolves        | W   | 0.173      | -            | -                | -                | -         |     0.98 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           14 |     4033 | 2024-07-26 | Endpoint          | W   | 0.160      | -            | -                | -                | -         |     1.52 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           13 |     4040 | 2024-07-26 | fnatic            | L   | 0.159      | -            | -                | -                | -         |    -1.45 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           12 |     4113 | 2024-07-24 | 9INE              | L   | 0.145      | -            | -                | -                | -         |    -2.41 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           11 |     4146 | 2024-07-23 | CPH Wolves        | W   | 0.140      | -            | -                | -                | -         |     0.80 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           10 |     4185 | 2024-07-22 | INFINITE          | W   | 0.131      | -            | -                | -                | -         |     0.23 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            9 |     4198 | 2024-07-21 | WOPA              | W   | 0.126      | -            | -                | -                | -         |     1.43 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            8 |     4273 | 2024-07-19 | Metizport         | L   | 0.113      | -            | -                | -                | -         |    -0.41 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            7 |     4319 | 2024-07-18 | Aurora Young Blud | L   | 0.106      | -            | -                | -                | -         |    -2.00 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            6 |     4450 | 2024-07-16 | RUBY              | W   | 0.093      | -            | -                | -                | -         |     0.23 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            5 |     4459 | 2024-07-16 | GameAgents        | W   | 0.091      | -            | -                | -                | -         |     0.16 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            4 |     4518 | 2024-07-14 | ALTERNATE aTTaX   | L   | 0.080      | -            | -                | -                | -         |    -0.84 | fino, M1key, sAvana1, T4gg3D, The eLiVe  |
|            3 |     4520 | 2024-07-14 | Portugal          | W   | 0.080      | -            | -                | -                | -         |     0.08 | fino, M1key, sAvana1, T4gg3D, The eLiVe  |
|            2 |     4579 | 2024-07-10 | Hungary           | W   | 0.053      | -            | -                | -                | -         |     0.52 | fino, M1key, sAvana1, T4gg3D, The eLiVe  |
|            1 |     4619 | 2024-07-08 | Austria           | W   | 0.040      | -            | -                | -                | -         |     0.04 | fino, M1key, MATYS, sAvana1, The eLiVe   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,663.39)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.966 | $5,159.00      | $4,982.55       |
| 2024-10-05 |      0.633 | $5,550.00      | $3,510.41       |
| 2024-09-22 |      0.546 | $1,321.00      | $721.62         |
| 2024-09-14 |      0.493 | $1,000.00      | $493.33         |
| 2024-08-30 |      0.391 | $5,000.00      | $1,955.48       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
