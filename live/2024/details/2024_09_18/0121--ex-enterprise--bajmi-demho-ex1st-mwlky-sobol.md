### Roster Details<br />
Team Name: ex-Enterprise<br />
Roster: bajmi, Demho, ex1st, mwlky, Sobol<br />
Global Rank: [121](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [85]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  790.0<br />
<br />
Final Rank Value (790.0) = Starting Rank Value (875.8) + Head To Head Adjustments (-85.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.416[<sup>1</sup>](#table2)
- Bounty Collected: 0.356[<sup>2</sup>](#table1)
- Opponent Network: 0.200[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.243<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 875.8
- 400 + ( ( 0.243 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 875.8


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
|           83 |       93 | 2024-09-15 | kONO              | L   | 1.000      | -            | -                | -                | -         |   -13.73 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           82 |      113 | 2024-09-14 | NAVI Junior       | L   | 1.000      | -            | -                | -                | -         |   -10.70 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           81 |      153 | 2024-09-13 | HOTU              | L   | 1.000      | -            | -                | -                | -         |   -14.24 | bajmi, Demho, ex1st, m4tthi, Sobol  |
|           80 |      191 | 2024-09-12 | UNiTY             | W   | 1.000      | 0.333        | 0.025 (0.008)    | -                | 0 (0.000) |    19.85 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           79 |      299 | 2024-09-07 | TNL               | L   | 1.000      | -            | -                | -                | -         |   -22.57 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           78 |      311 | 2024-09-07 | Partizan          | L   | 1.000      | -            | -                | -                | -         |   -17.52 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           77 |      440 | 2024-09-03 | HOTU              | L   | 1.000      | -            | -                | -                | -         |   -18.93 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           76 |      457 | 2024-09-03 | Sampi             | L   | 1.000      | -            | -                | -                | -         |   -14.30 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           75 |      635 | 2024-08-28 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |    -8.99 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           74 |      679 | 2024-08-27 | Anonymo           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.80 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           73 |      691 | 2024-08-27 | Metizport         | L   | 1.000      | -            | -                | -                | -         |   -13.34 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           72 |      761 | 2024-08-26 | GUN5              | L   | 1.000      | -            | -                | -                | -         |   -12.64 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           71 |      823 | 2024-08-24 | ECSTATIC          | W   | 1.000      | 0.371        | -                | 0.520 (0.193)    | 0 (0.000) |    17.14 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           70 |      846 | 2024-08-23 | Sampi             | L   | 1.000      | -            | -                | -                | -         |   -15.86 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           69 |      873 | 2024-08-22 | ENCE              | L   | 1.000      | -            | -                | -                | -         |    -7.24 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           68 |      913 | 2024-08-21 | B8                | L   | 1.000      | -            | -                | -                | -         |    -6.93 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           67 |      941 | 2024-08-21 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |    -7.55 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           66 |      989 | 2024-08-20 | Revenant          | W   | 1.000      | 0.371        | 0.044 (0.016)    | 0.682 (0.253)    | 0 (0.000) |    18.09 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           65 |     1020 | 2024-08-19 | kONO              | W   | 1.000      | 0.384        | 0.030 (0.011)    | 0.553 (0.213)    | 0 (0.000) |    13.98 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           64 |     1026 | 2024-08-19 | Alliance          | W   | 0.999      | -            | -                | -                | 0 (0.000) |    11.82 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           63 |     1061 | 2024-08-17 | Monte             | L   | 0.987      | -            | -                | -                | -         |   -11.16 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           62 |     1085 | 2024-08-16 | Alliance          | W   | 0.979      | -            | -                | -                | 0 (0.000) |    12.13 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           61 |     1121 | 2024-08-15 | Into the Breach   | L   | 0.973      | -            | -                | -                | -         |   -13.91 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           60 |     1140 | 2024-08-14 | 1WIN              | L   | 0.966      | -            | -                | -                | -         |   -12.34 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           59 |     1254 | 2024-08-11 | TSM               | L   | 0.946      | -            | -                | -                | -         |   -10.47 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           58 |     1268 | 2024-08-10 | Johnny Speeds     | L   | 0.940      | -            | -                | -                | -         |    -5.62 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           57 |     1277 | 2024-08-10 | kONO              | L   | 0.939      | -            | -                | -                | -         |   -18.16 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           56 |     1329 | 2024-08-08 | Astralis Talent   | W   | 0.926      | -            | -                | -                | 0 (0.000) |     5.44 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           55 |     1332 | 2024-08-08 | ECLOT             | W   | 0.925      | 0.333        | 0.081 (0.025)    | 0.758 (0.234)    | 0 (0.000) |    19.02 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           54 |     1385 | 2024-08-07 | TSM               | L   | 0.918      | -            | -                | -                | -         |   -10.42 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           53 |     1421 | 2024-08-06 | Verdant           | W   | 0.912      | -            | -                | -                | 0 (0.000) |    11.81 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           52 |     1687 | 2024-07-30 | Rhyno             | W   | 0.865      | -            | -                | -                | -         |    14.76 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           51 |     1915 | 2024-07-23 | Rebels            | L   | 0.818      | -            | -                | -                | -         |    -9.47 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           50 |     1929 | 2024-07-22 | DASH              | W   | 0.813      | -            | -                | -                | -         |     3.73 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           49 |     1936 | 2024-07-22 | Illuminar         | W   | 0.812      | -            | -                | -                | -         |    12.44 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           48 |     1960 | 2024-07-21 | 9INE              | L   | 0.806      | -            | -                | -                | -         |   -11.41 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|           47 |     2026 | 2024-07-19 | UNiTY             | W   | 0.793      | 0.371        | 0.025 (0.007)    | -                | -         |    13.14 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|           46 |     2154 | 2024-07-17 | FORZE Reload      | L   | 0.780      | -            | -                | -                | -         |   -21.87 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|           45 |     2259 | 2024-07-15 | TNL               | W   | 0.765      | -            | -                | -                | -         |     4.36 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|           44 |     2296 | 2024-07-12 | Rebels            | L   | 0.746      | -            | -                | -                | -         |    -9.24 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           43 |     2377 | 2024-07-08 | Revenant          | W   | 0.719      | 0.371        | 0.044 (0.012)    | 0.682 (0.182)    | -         |    11.82 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           42 |     2473 | 2024-06-16 | 3DMAX             | L   | 0.572      | -            | -                | -                | -         |    -0.46 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           41 |     2560 | 2024-06-13 | Qiang             | L   | 0.555      | -            | -                | -                | -         |    -8.92 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           40 |     2577 | 2024-06-13 | Illuminar         | W   | 0.553      | -            | -                | -                | -         |     7.56 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           39 |     2601 | 2024-06-12 | Sampi             | W   | 0.547      | 0.379        | 0.036 (0.007)    | 1.000 (0.207)    | -         |     8.62 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           38 |     2644 | 2024-06-10 | SINNERS           | W   | 0.534      | 0.379        | 0.176 (0.036)    | 1.000 (0.202)    | -         |    12.76 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           37 |     2658 | 2024-06-10 | Gaimin Gladiators | W   | 0.533      | -            | -                | -                | -         |     9.43 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           36 |     2700 | 2024-06-09 | ECLOT             | L   | 0.526      | -            | -                | -                | -         |    -3.29 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           35 |     2744 | 2024-06-08 | Nexus             | W   | 0.521      | -            | -                | -                | -         |     5.46 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           34 |     2824 | 2024-06-07 | Entropiq          | W   | 0.513      | -            | -                | -                | -         |     1.04 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           33 |     2873 | 2024-06-06 | Illuminar         | L   | 0.508      | -            | -                | -                | -         |    -9.68 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           32 |     2924 | 2024-06-05 | Verdant           | L   | 0.501      | -            | -                | -                | -         |    -7.77 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           31 |     2936 | 2024-06-05 | Partizan          | L   | 0.500      | -            | -                | -                | -         |   -10.39 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           30 |     2996 | 2024-06-04 | Johnny Speeds     | W   | 0.492      | 0.371        | 0.103 (0.019)    | 0.949 (0.173)    | -         |    11.99 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           29 |     3019 | 2024-06-03 | UNiTY             | W   | 0.485      | -            | -                | -                | -         |     8.00 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           28 |     3062 | 2024-06-01 | ARCRED            | L   | 0.474      | -            | -                | -                | -         |    -7.35 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           27 |     3076 | 2024-06-01 | Permitta          | W   | 0.472      | 0.371        | -                | 0.979 (0.171)    | -         |     8.13 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           26 |     3117 | 2024-05-30 | RUSTEC            | W   | 0.461      | -            | -                | -                | -         |     1.40 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           25 |     3131 | 2024-05-30 | Apogee            | L   | 0.458      | -            | -                | -                | -         |    -9.06 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           24 |     3141 | 2024-05-29 | FLuffy Gangsters  | W   | 0.455      | -            | -                | -                | -         |     4.36 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           23 |     3169 | 2024-05-28 | Sampi             | W   | 0.447      | 0.379        | -                | 1.000 (0.169)    | -         |     8.00 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           22 |     3250 | 2024-05-24 | Illuminar         | W   | 0.419      | -            | -                | -                | -         |     5.85 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           21 |     3297 | 2024-05-22 | Entropiq          | W   | 0.408      | -            | -                | -                | -         |     0.83 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           20 |     3385 | 2024-05-20 | ECSTATIC          | W   | 0.393      | -            | -                | -                | -         |     6.66 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           19 |     3714 | 2024-05-10 | BetBoom           | L   | 0.326      | -            | -                | -                | -         |    -1.37 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           18 |     3781 | 2024-05-07 | Permitta          | W   | 0.306      | -            | -                | -                | -         |     5.69 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           17 |     3795 | 2024-05-06 | B8                | L   | 0.300      | -            | -                | -                | -         |    -2.13 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           16 |     3823 | 2024-05-04 | MOUZ NXT          | W   | 0.288      | 0.435        | 0.109 (0.014)    | -                | -         |     6.01 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           15 |     3882 | 2024-05-01 | ENCE Academy      | W   | 0.268      | -            | -                | -                | -         |     2.24 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           14 |     3911 | 2024-04-30 | EYEBALLERS        | L   | 0.261      | -            | -                | -                | -         |    -4.86 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           13 |     3948 | 2024-04-29 | Nexus             | L   | 0.252      | -            | -                | -                | -         |    -4.78 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           12 |     3989 | 2024-04-27 | Permitta          | L   | 0.239      | -            | -                | -                | -         |    -2.98 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           11 |     4008 | 2024-04-26 | Insilio           | L   | 0.233      | -            | -                | -                | -         |    -2.71 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           10 |     4081 | 2024-04-23 | ALTERNATE aTTaX   | L   | 0.213      | -            | -                | -                | -         |    -1.91 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            9 |     4147 | 2024-04-20 | ALTERNATE aTTaX   | L   | 0.192      | -            | -                | -                | -         |    -1.64 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            8 |     4221 | 2024-04-18 | MOUZ NXT          | L   | 0.181      | -            | -                | -                | -         |    -2.06 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            7 |     4244 | 2024-04-18 | Nexus             | W   | 0.179      | -            | -                | -                | -         |     2.25 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            6 |     4269 | 2024-04-17 | ENCE              | L   | 0.173      | -            | -                | -                | -         |    -0.74 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            5 |     4401 | 2024-04-11 | Sashi             | L   | 0.132      | -            | -                | -                | -         |    -0.99 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            4 |     4445 | 2024-04-10 | AMKAL             | W   | 0.126      | -            | -                | -                | -         |     3.11 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            3 |     4574 | 2024-04-06 | Sampi             | L   | 0.099      | -            | -                | -                | -         |    -1.27 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            2 |     4665 | 2024-04-03 | Permitta          | W   | 0.081      | -            | -                | -                | -         |     1.53 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            1 |     4725 | 2024-04-01 | BLEED             | W   | 0.066      | -            | -                | -                | -         |     0.89 | bajmi, Demho, ex1st, fr3nd, TOAO    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,840.43)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-30 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-08-12 |      0.953 | $1,500.00      | $1,429.39       |
| 2024-07-25 |      0.832 | $1,000.00      | $832.00         |
| 2024-06-17 |      0.580 | $5,000.00      | $2,899.75       |
| 2024-06-13 |      0.555 | $5,447.00      | $3,023.69       |
| 2024-06-06 |      0.506 | $3,000.00      | $1,518.43       |
| 2024-05-02 |      0.274 | $500.00        | $137.15         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
