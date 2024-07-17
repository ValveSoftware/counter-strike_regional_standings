### Roster Details<br />
Team Name: Zero Tenacity<br />
Roster: aVN, brutmonster, Cjoffo, nEMANHA, simke<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [47](../standings_global.md)<br />
Regional Rank: [34]( ../standings_europe.md)<br />
Final Rank Value:  1129.9<br />
<br />
Final Rank Value (1129.9) = Starting Rank Value (1107.8) + Head To Head Adjustments (22.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.551[<sup>1</sup>](#table2)
- Bounty Collected: 0.453[<sup>2</sup>](#table1)
- Opponent Network: 0.314[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.330<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1107.8
- 400 + ( ( 0.330 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1107.8


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
|          101 |       45 | 2024-07-16 | Monte             | W   | 1.000      | 0.500        | 0.099 (0.050)    | -                | 0 (0.000) |    12.74 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          100 |       66 | 2024-07-16 | EYEBALLERS        | W   | 1.000      | 0.500        | -                | 0.619 (0.310)    | 0 (0.000) |     6.88 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           99 |      316 | 2024-06-16 | FAVBET            | W   | 0.994      | -            | -                | -                | 0 (0.000) |     7.05 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           98 |      349 | 2024-06-15 | Nemiga            | L   | 0.987      | -            | -                | -                | -         |   -10.38 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           97 |      389 | 2024-06-14 | RUBY              | W   | 0.980      | -            | -                | -                | 0 (0.000) |     9.20 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           96 |      429 | 2024-06-13 | Monte             | L   | 0.973      | -            | -                | -                | -         |   -18.17 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           95 |      455 | 2024-06-12 | 9INE              | W   | 0.967      | -            | -                | -                | 0 (0.000) |     1.19 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           94 |      474 | 2024-06-11 | DMS               | W   | 0.961      | -            | -                | -                | 0 (0.000) |     8.68 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           93 |      484 | 2024-06-11 | EYEBALLERS        | W   | 0.959      | 0.435        | -                | 0.619 (0.258)    | 0 (0.000) |     7.84 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           92 |      562 | 2024-06-09 | HAVU              | W   | 0.946      | -            | -                | -                | 0 (0.000) |     4.04 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           91 |      571 | 2024-06-09 | Nemiga            | L   | 0.945      | -            | -                | -                | -         |   -10.57 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           90 |      594 | 2024-06-08 | Insilio           | L   | 0.941      | -            | -                | -                | -         |   -18.98 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           89 |      611 | 2024-06-08 | Passion UA        | W   | 0.940      | 0.500        | 0.087 (0.041)    | 0.847 (0.398)    | 0 (0.000) |    12.48 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           88 |      652 | 2024-06-07 | DMS               | W   | 0.934      | -            | -                | -                | 0 (0.000) |     8.88 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           87 |      668 | 2024-06-07 | EYEBALLERS        | L   | 0.933      | -            | -                | -                | -         |   -21.73 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           86 |      690 | 2024-06-07 | 5W                | L   | 0.932      | -            | -                | -                | -         |   -19.85 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           85 |      712 | 2024-06-06 | FAVBET            | W   | 0.928      | -            | -                | -                | -         |     4.91 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           84 |      740 | 2024-06-06 | Permitta          | L   | 0.926      | -            | -                | -                | -         |   -22.02 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           83 |      759 | 2024-06-06 | GhoulsW           | W   | 0.925      | -            | -                | -                | -         |     0.39 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           82 |      796 | 2024-06-05 | Aurora Young Blud | W   | 0.920      | -            | -                | -                | -         |     3.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           81 |      835 | 2024-06-04 | CYBERSHOKE        | W   | 0.914      | -            | -                | -                | -         |     4.07 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           80 |      843 | 2024-06-04 | Grannys Knockers  | W   | 0.913      | -            | -                | -                | -         |     4.53 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           79 |      873 | 2024-06-03 | Johnny Speeds     | L   | 0.906      | -            | -                | -                | -         |    -7.90 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           78 |      880 | 2024-06-02 | DMS               | W   | 0.901      | -            | -                | -                | -         |     9.15 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           77 |      885 | 2024-06-02 | SAW               | W   | 0.900      | -            | -                | -                | -         |    19.76 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           76 |      908 | 2024-06-01 | RUBY              | L   | 0.895      | -            | -                | -                | -         |   -18.95 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           75 |      923 | 2024-06-01 | DMS               | W   | 0.893      | -            | -                | -                | -         |     7.97 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           74 |      927 | 2024-06-01 | KOI               | W   | 0.893      | -            | -                | -                | -         |    14.19 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           73 |      931 | 2024-06-01 | FURIA             | L   | 0.892      | -            | -                | -                | -         |    -2.73 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           72 |      959 | 2024-05-31 | Passion UA        | W   | 0.886      | 0.435        | 0.087 (0.034)    | 0.847 (0.326)    | -         |    11.23 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           71 |      970 | 2024-05-30 | ThunderFlash      | W   | 0.881      | -            | -                | -                | -         |     0.48 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           70 |      979 | 2024-05-30 | Passion UA        | L   | 0.880      | -            | -                | -                | -         |   -16.89 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           69 |      996 | 2024-05-29 | JANO              | W   | 0.874      | -            | -                | -                | -         |     2.31 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           68 |     1066 | 2024-05-26 | RUBY              | W   | 0.853      | 0.435        | 0.144 (0.053)    | -                | -         |     9.37 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           67 |     1080 | 2024-05-25 | ex-Guild Eagles   | W   | 0.847      | -            | -                | -                | -         |     7.02 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           66 |     1084 | 2024-05-25 | Serbia            | W   | 0.847      | -            | -                | -                | -         |     4.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           65 |     1094 | 2024-05-25 | Rhyno             | W   | 0.845      | 0.435        | 0.108 (0.040)    | -                | -         |    11.35 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           64 |     1098 | 2024-05-24 | ex-Guild Eagles   | L   | 0.841      | -            | -                | -                | -         |   -19.88 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           63 |     1101 | 2024-05-24 | Kosovo            | W   | 0.840      | -            | -                | -                | -         |     5.43 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           62 |     1118 | 2024-05-23 | 3DMAX             | L   | 0.833      | -            | -                | -                | -         |    -9.01 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           61 |     1124 | 2024-05-23 | brazylijski luz   | W   | 0.831      | -            | -                | -                | -         |     5.43 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           60 |     1157 | 2024-05-22 | Sangal            | L   | 0.827      | -            | -                | -                | -         |   -12.25 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           59 |     1163 | 2024-05-22 | Illuminar         | W   | 0.825      | -            | -                | -                | -         |     5.49 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           58 |     1201 | 2024-05-21 | BLEED             | W   | 0.820      | 0.500        | 0.192 (0.079)    | -                | -         |    17.09 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           57 |     1206 | 2024-05-21 | Verdant           | W   | 0.819      | -            | -                | -                | -         |     5.28 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           56 |     1227 | 2024-05-20 | Metizport         | W   | 0.814      | -            | -                | -                | -         |    11.41 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           55 |     1263 | 2024-05-19 | B8                | W   | 0.806      | 0.500        | 0.246 (0.099)    | 1.000 (0.403)    | -         |    16.68 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           54 |     1317 | 2024-05-17 | PARIVISION        | L   | 0.794      | -            | -                | -                | -         |   -15.01 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           53 |     1326 | 2024-05-17 | Endpoint          | W   | 0.793      | -            | -                | -                | -         |     8.74 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           52 |     1367 | 2024-05-16 | 1WIN              | L   | 0.786      | -            | -                | -                | -         |   -14.47 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           51 |     1375 | 2024-05-16 | kONO              | W   | 0.785      | -            | -                | -                | -         |     7.17 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           50 |     1416 | 2024-05-15 | 3DMAX             | W   | 0.779      | 0.500        | 0.209 (0.081)    | 1.000 (0.390)    | -         |    18.02 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           49 |     1475 | 2024-05-14 | Preasy            | W   | 0.773      | -            | -                | -                | -         |     4.66 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           48 |     1494 | 2024-05-13 | EYEBALLERS        | W   | 0.767      | -            | -                | -                | -         |     8.20 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           47 |     1523 | 2024-05-12 | Verdant           | W   | 0.759      | -            | -                | -                | -         |     6.04 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           46 |     1593 | 2024-05-09 | 9 Pandas          | L   | 0.739      | -            | -                | -                | -         |   -10.74 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           45 |     1648 | 2024-05-06 | Insilio           | W   | 0.720      | -            | -                | -                | -         |     9.62 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           44 |     1696 | 2024-05-03 | EYEBALLERS        | L   | 0.701      | -            | -                | -                | -         |   -14.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           43 |     1707 | 2024-05-03 | Metizport         | L   | 0.699      | -            | -                | -                | -         |   -12.56 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           42 |     1735 | 2024-05-02 | HAVU              | W   | 0.692      | -            | -                | -                | -         |     3.17 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           41 |     1756 | 2024-05-01 | KOI               | W   | 0.686      | -            | -                | -                | -         |    13.69 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           40 |     1772 | 2024-04-30 | Sangal            | L   | 0.680      | -            | -                | -                | -         |    -8.48 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           39 |     1782 | 2024-04-30 | B8                | W   | 0.679      | 0.435        | 0.246 (0.072)    | 1.000 (0.295)    | -         |    11.07 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           38 |     1797 | 2024-04-29 | PARIVISION        | L   | 0.673      | -            | -                | -                | -         |   -12.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           37 |     1813 | 2024-04-28 | SINNERS           | W   | 0.667      | 0.435        | -                | 0.744 (0.215)    | -         |    10.73 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           36 |     1825 | 2024-04-27 | 500               | W   | 0.661      | -            | -                | -                | -         |     3.58 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           35 |     1846 | 2024-04-27 | SINNERS           | W   | 0.659      | 0.500        | -                | 0.744 (0.245)    | -         |    11.36 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           34 |     1870 | 2024-04-26 | Illuminar         | W   | 0.652      | -            | -                | -                | -         |     1.37 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           33 |     1894 | 2024-04-25 | EYEBALLERS        | L   | 0.646      | -            | -                | -                | -         |   -14.13 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           32 |     1916 | 2024-04-24 | ex-Guild Eagles   | L   | 0.639      | -            | -                | -                | -         |   -13.73 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           31 |     1933 | 2024-04-23 | Nemiga            | L   | 0.632      | -            | -                | -                | -         |    -5.02 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           30 |     1941 | 2024-04-22 | Grannys Knockers  | W   | 0.627      | -            | -                | -                | -         |     3.43 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           29 |     1948 | 2024-04-22 | Nexus             | W   | 0.626      | -            | -                | -                | -         |     5.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           28 |     1994 | 2024-04-20 | RUBY              | W   | 0.613      | -            | -                | -                | -         |     8.27 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           27 |     2021 | 2024-04-19 | PARIVISION        | W   | 0.608      | -            | -                | -                | -         |     7.03 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           26 |     2045 | 2024-04-19 | ALTERNATE aTTaX   | W   | 0.606      | -            | -                | -                | -         |     8.27 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           25 |     2104 | 2024-04-18 | B8                | L   | 0.598      | -            | -                | -                | -         |    -8.62 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           24 |     2129 | 2024-04-17 | B8                | W   | 0.592      | 0.500        | 0.246 (0.073)    | 1.000 (0.296)    | -         |    10.37 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           23 |     2156 | 2024-04-16 | Sangal            | L   | 0.588      | -            | -                | -                | -         |    -7.22 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           22 |     2177 | 2024-04-15 | ALTERNATE aTTaX   | W   | 0.581      | -            | -                | -                | -         |     8.71 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           21 |     2227 | 2024-04-12 | JANO              | L   | 0.558      | -            | -                | -                | -         |   -15.46 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           20 |     2255 | 2024-04-11 | Alliance          | L   | 0.553      | -            | -                | -                | -         |   -12.20 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           19 |     2353 | 2024-04-09 | MOUZ NXT          | L   | 0.540      | -            | -                | -                | -         |    -7.93 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           18 |     2415 | 2024-04-07 | ex-Preasy         | L   | 0.525      | -            | -                | -                | -         |   -12.04 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           17 |     2584 | 2024-04-01 | Nemiga            | L   | 0.485      | -            | -                | -                | -         |    -4.18 | aVN, brutmonster, Cjoffo, kdaN, simke    |
|           16 |     2991 | 2024-03-10 | CYBERSHOKE        | L   | 0.341      | -            | -                | -                | -         |    -9.76 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           15 |     3003 | 2024-03-10 | ECLOT             | W   | 0.339      | -            | -                | -                | -         |     7.15 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           14 |     3019 | 2024-03-09 | Sangal            | W   | 0.333      | -            | -                | -                | -         |     5.93 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           13 |     3068 | 2024-03-07 | Nemiga            | L   | 0.321      | -            | -                | -                | -         |    -2.63 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           12 |     3100 | 2024-03-06 | AURA              | W   | 0.313      | -            | -                | -                | -         |     0.38 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           11 |     3135 | 2024-03-05 | AMKAL             | L   | 0.307      | -            | -                | -                | -         |    -4.62 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           10 |     3193 | 2024-03-03 | Secret            | W   | 0.292      | -            | -                | -                | -         |     0.45 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            9 |     3213 | 2024-03-02 | Secret            | W   | 0.285      | -            | -                | -                | -         |     0.44 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            8 |     3239 | 2024-02-29 | Young Ninjas      | W   | 0.273      | -            | -                | -                | -         |     1.55 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            7 |     3502 | 2024-02-17 | Sashi             | L   | 0.193      | -            | -                | -                | -         |    -2.60 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            6 |     3657 | 2024-02-10 | Sampi             | L   | 0.147      | -            | -                | -                | -         |    -3.26 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            5 |     3738 | 2024-02-04 | 500               | L   | 0.106      | -            | -                | -                | -         |    -2.98 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            4 |     3751 | 2024-02-03 | The Chosen Few    | W   | 0.101      | -            | -                | -                | -         |     0.30 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            3 |     3797 | 2024-02-02 | NAVI Junior       | W   | 0.093      | -            | -                | -                | -         |     0.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            2 |     3801 | 2024-02-02 | Juggernauts       | W   | 0.092      | -            | -                | -                | -         |     0.05 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            1 |     4071 | 2024-01-20 | 3DMAX             | L   | 0.006      | -            | -                | -                | -         |    -0.06 | aVN, brutmonster, Cjoffo, nEMANHA, simke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($37,721.60)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      0.955 | $2,000.00      | $1,909.31       |
| 2024-06-02 |      0.900 | $2,000.00      | $1,800.03       |
| 2024-05-22 |      0.827 | $25,000.00     | $20,676.03      |
| 2024-05-16 |      0.785 | $5,000.00      | $3,923.25       |
| 2024-05-04 |      0.707 | $2,000.00      | $1,413.91       |
| 2024-04-24 |      0.640 | $12,500.00     | $7,999.08       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
