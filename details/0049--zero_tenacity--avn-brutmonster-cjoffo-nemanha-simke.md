### Roster Details<br />
Team Name: Zero Tenacity<br />
Roster: aVN, brutmonster, Cjoffo, nEMANHA, simke<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [49](../standings_global.md)<br />
Regional Rank: [35]( ../standings_europe.md)<br />
Final Rank Value:  1115.0<br />
<br />
Final Rank Value (1115.0) = Starting Rank Value (1112.2) + Head To Head Adjustments (2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.551[<sup>1</sup>](#table2)
- Bounty Collected: 0.463[<sup>2</sup>](#table1)
- Opponent Network: 0.337[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.338<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1112.2
- 400 + ( ( 0.338 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1112.2


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
|          108 |      152 | 2024-06-16 | FAVBET            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.83 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          107 |      185 | 2024-06-15 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |   -10.39 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          106 |      225 | 2024-06-14 | RUBY              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.88 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          105 |      265 | 2024-06-13 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -12.66 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          104 |      291 | 2024-06-12 | 9INE              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.22 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          103 |      310 | 2024-06-11 | DMS               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.00 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          102 |      320 | 2024-06-11 | EYEBALLERS        | W   | 0.999      | 0.435        | -                | 0.646 (0.280)    | 0 (0.000) |     8.24 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          101 |      398 | 2024-06-09 | HAVU              | W   | 0.985      | -            | -                | -                | 0 (0.000) |     4.22 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          100 |      407 | 2024-06-09 | Nemiga            | L   | 0.985      | -            | -                | -                | -         |   -10.67 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           99 |      430 | 2024-06-08 | Insilio           | L   | 0.981      | -            | -                | -                | -         |   -19.64 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           98 |      447 | 2024-06-08 | Passion UA        | W   | 0.980      | 0.500        | 0.087 (0.043)    | 0.821 (0.402)    | 0 (0.000) |    12.74 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           97 |      488 | 2024-06-07 | DMS               | W   | 0.974      | -            | -                | -                | 0 (0.000) |     9.24 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           96 |      504 | 2024-06-07 | EYEBALLERS        | L   | 0.973      | -            | -                | -                | -         |   -22.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           95 |      526 | 2024-06-07 | 5W                | L   | 0.971      | -            | -                | -                | -         |   -21.02 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           94 |      548 | 2024-06-06 | FAVBET            | W   | 0.967      | -            | -                | -                | 0 (0.000) |     4.96 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           93 |      576 | 2024-06-06 | Permitta          | L   | 0.966      | -            | -                | -                | -         |   -22.94 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           92 |      595 | 2024-06-06 | GhoulsW           | W   | 0.964      | -            | -                | -                | 0 (0.000) |     0.40 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           91 |      632 | 2024-06-05 | Aurora Young Blud | W   | 0.959      | -            | -                | -                | -         |     3.17 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           90 |      671 | 2024-06-04 | CYBERSHOKE        | W   | 0.954      | -            | -                | -                | -         |     4.05 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           89 |      679 | 2024-06-04 | Grannys Knockers  | W   | 0.952      | -            | -                | -                | -         |     4.60 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           88 |      709 | 2024-06-03 | Johnny Speeds     | L   | 0.945      | -            | -                | -                | -         |    -8.76 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           87 |      716 | 2024-06-02 | DMS               | W   | 0.941      | -            | -                | -                | -         |     9.53 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           86 |      721 | 2024-06-02 | SAW               | W   | 0.940      | -            | -                | -                | -         |    20.85 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           85 |      744 | 2024-06-01 | RUBY              | L   | 0.934      | -            | -                | -                | -         |   -20.14 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           84 |      759 | 2024-06-01 | DMS               | W   | 0.933      | -            | -                | -                | -         |     8.23 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           83 |      763 | 2024-06-01 | KOI               | W   | 0.932      | -            | -                | -                | -         |    14.66 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           82 |      767 | 2024-06-01 | FURIA             | L   | 0.931      | -            | -                | -                | -         |    -2.81 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           81 |      795 | 2024-05-31 | Passion UA        | W   | 0.926      | 0.435        | 0.087 (0.035)    | 0.821 (0.330)    | -         |    11.53 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           80 |      806 | 2024-05-30 | ThunderFlash      | W   | 0.921      | -            | -                | -                | -         |     0.49 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           79 |      815 | 2024-05-30 | Passion UA        | L   | 0.920      | -            | -                | -                | -         |   -17.83 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           78 |      832 | 2024-05-29 | JANO              | W   | 0.914      | -            | -                | -                | -         |     2.34 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           77 |      902 | 2024-05-26 | RUBY              | W   | 0.892      | 0.435        | 0.139 (0.054)    | -                | -         |     9.36 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           76 |      916 | 2024-05-25 | ex-Guild Eagles   | W   | 0.887      | -            | -                | -                | -         |     7.51 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           75 |      920 | 2024-05-25 | Serbia            | W   | 0.886      | -            | -                | -                | -         |     4.55 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           74 |      930 | 2024-05-25 | Rhyno             | W   | 0.884      | 0.435        | 0.107 (0.041)    | -                | -         |    11.88 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           73 |      934 | 2024-05-24 | ex-Guild Eagles   | L   | 0.881      | -            | -                | -                | -         |   -20.59 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           72 |      937 | 2024-05-24 | Kosovo            | W   | 0.880      | -            | -                | -                | -         |     4.90 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           71 |      954 | 2024-05-23 | 3DMAX             | L   | 0.873      | -            | -                | -                | -         |    -9.26 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           70 |      960 | 2024-05-23 | brazylijski luz   | W   | 0.871      | -            | -                | -                | -         |     5.26 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           69 |      993 | 2024-05-22 | Sangal            | L   | 0.867      | -            | -                | -                | -         |   -12.49 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           68 |      999 | 2024-05-22 | Illuminar         | W   | 0.865      | -            | -                | -                | -         |     2.13 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           67 |     1037 | 2024-05-21 | BLEED             | W   | 0.860      | 0.500        | 0.348 (0.150)    | 0.908 (0.390)    | -         |    19.43 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           66 |     1042 | 2024-05-21 | Verdant           | W   | 0.858      | -            | -                | -                | -         |     5.31 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           65 |     1063 | 2024-05-20 | Metizport         | W   | 0.854      | -            | -                | -                | -         |    12.13 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           64 |     1099 | 2024-05-19 | B8                | W   | 0.846      | 0.500        | 0.242 (0.102)    | 1.000 (0.423)    | -         |    17.90 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           63 |     1153 | 2024-05-17 | PARIVISION        | L   | 0.834      | -            | -                | -                | -         |   -15.52 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           62 |     1162 | 2024-05-17 | Endpoint          | W   | 0.833      | -            | -                | -                | -         |     9.10 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           61 |     1203 | 2024-05-16 | 1WIN              | L   | 0.826      | -            | -                | -                | -         |   -14.73 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           60 |     1211 | 2024-05-16 | kONO              | W   | 0.824      | -            | -                | -                | -         |     7.37 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           59 |     1252 | 2024-05-15 | 3DMAX             | W   | 0.819      | 0.500        | 0.205 (0.084)    | 1.000 (0.410)    | -         |    19.10 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           58 |     1311 | 2024-05-14 | Preasy            | W   | 0.812      | -            | -                | -                | -         |     4.73 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           57 |     1330 | 2024-05-13 | EYEBALLERS        | W   | 0.806      | -            | -                | -                | -         |     8.63 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           56 |     1359 | 2024-05-12 | Verdant           | W   | 0.799      | -            | -                | -                | -         |     6.19 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           55 |     1429 | 2024-05-09 | 9 Pandas          | L   | 0.779      | -            | -                | -                | -         |   -11.16 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           54 |     1484 | 2024-05-06 | Insilio           | W   | 0.760      | -            | -                | -                | -         |    10.20 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           53 |     1532 | 2024-05-03 | EYEBALLERS        | L   | 0.740      | -            | -                | -                | -         |   -15.34 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           52 |     1543 | 2024-05-03 | Metizport         | L   | 0.739      | -            | -                | -                | -         |   -13.08 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           51 |     1571 | 2024-05-02 | HAVU              | W   | 0.731      | -            | -                | -                | -         |     3.32 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           50 |     1592 | 2024-05-01 | KOI               | W   | 0.725      | -            | -                | -                | -         |    14.41 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           49 |     1608 | 2024-04-30 | Sangal            | L   | 0.719      | -            | -                | -                | -         |    -8.86 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           48 |     1618 | 2024-04-30 | B8                | W   | 0.718      | 0.435        | 0.242 (0.075)    | 1.000 (0.312)    | -         |    11.92 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           47 |     1633 | 2024-04-29 | PARIVISION        | L   | 0.712      | -            | -                | -                | -         |   -12.73 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           46 |     1649 | 2024-04-28 | SINNERS           | W   | 0.706      | 0.435        | -                | 0.767 (0.235)    | -         |    11.34 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           45 |     1661 | 2024-04-27 | 500               | W   | 0.701      | -            | -                | -                | -         |     3.90 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           44 |     1682 | 2024-04-27 | SINNERS           | W   | 0.698      | 0.500        | -                | 0.767 (0.268)    | -         |    12.06 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           43 |     1706 | 2024-04-26 | Illuminar         | W   | 0.691      | -            | -                | -                | -         |     3.12 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           42 |     1730 | 2024-04-25 | EYEBALLERS        | L   | 0.685      | -            | -                | -                | -         |   -15.04 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           41 |     1752 | 2024-04-24 | ex-Guild Eagles   | L   | 0.679      | -            | -                | -                | -         |   -14.32 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           40 |     1769 | 2024-04-23 | Nemiga            | L   | 0.672      | -            | -                | -                | -         |    -5.15 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           39 |     1777 | 2024-04-22 | Grannys Knockers  | W   | 0.667      | -            | -                | -                | -         |     3.57 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           38 |     1784 | 2024-04-22 | Romania           | W   | 0.665      | -            | -                | -                | -         |     5.49 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           37 |     1830 | 2024-04-20 | RUBY              | W   | 0.653      | -            | -                | -                | -         |     8.42 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           36 |     1857 | 2024-04-19 | PARIVISION        | W   | 0.647      | -            | -                | -                | -         |     7.73 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           35 |     1881 | 2024-04-19 | ALTERNATE aTTaX   | W   | 0.645      | -            | -                | -                | -         |     8.69 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           34 |     1940 | 2024-04-18 | B8                | L   | 0.638      | -            | -                | -                | -         |    -9.16 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           33 |     1965 | 2024-04-17 | B8                | W   | 0.632      | 0.500        | 0.242 (0.076)    | 1.000 (0.316)    | -         |    11.09 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           32 |     1992 | 2024-04-16 | Sangal            | L   | 0.627      | -            | -                | -                | -         |    -7.70 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           31 |     2013 | 2024-04-15 | ALTERNATE aTTaX   | W   | 0.620      | -            | -                | -                | -         |     9.10 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           30 |     2063 | 2024-04-12 | JANO              | L   | 0.598      | -            | -                | -                | -         |   -16.58 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           29 |     2091 | 2024-04-11 | Alliance          | L   | 0.592      | -            | -                | -                | -         |   -12.94 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           28 |     2189 | 2024-04-09 | MOUZ NXT          | L   | 0.579      | -            | -                | -                | -         |    -8.56 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           27 |     2251 | 2024-04-07 | ex-Preasy         | L   | 0.565      | -            | -                | -                | -         |   -12.68 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           26 |     2420 | 2024-04-01 | Nemiga            | L   | 0.525      | -            | -                | -                | -         |    -4.41 | aVN, brutmonster, Cjoffo, kdaN, simke    |
|           25 |     2827 | 2024-03-10 | CYBERSHOKE        | L   | 0.381      | -            | -                | -                | -         |   -10.92 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           24 |     2839 | 2024-03-10 | Czech Republic    | W   | 0.379      | -            | -                | -                | -         |     7.99 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           23 |     2855 | 2024-03-09 | Sangal            | W   | 0.373      | 0.358        | 0.231 (0.031)    | -                | -         |     6.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           22 |     2904 | 2024-03-07 | Nemiga            | L   | 0.360      | -            | -                | -                | -         |    -2.86 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           21 |     2936 | 2024-03-06 | AURA              | W   | 0.353      | -            | -                | -                | -         |     0.43 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           20 |     2971 | 2024-03-05 | AMKAL             | L   | 0.347      | -            | -                | -                | -         |    -4.94 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           19 |     3029 | 2024-03-03 | Secret            | W   | 0.331      | -            | -                | -                | -         |     0.51 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           18 |     3049 | 2024-03-02 | Secret            | W   | 0.325      | -            | -                | -                | -         |     0.50 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           17 |     3075 | 2024-02-29 | Young Ninjas      | W   | 0.313      | -            | -                | -                | -         |     1.66 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           16 |     3338 | 2024-02-17 | Sashi             | L   | 0.233      | -            | -                | -                | -         |    -3.16 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           15 |     3493 | 2024-02-10 | Slovakia          | L   | 0.187      | -            | -                | -                | -         |    -4.25 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           14 |     3574 | 2024-02-04 | 500               | L   | 0.146      | -            | -                | -                | -         |    -4.10 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           13 |     3587 | 2024-02-03 | The Chosen Few    | W   | 0.141      | -            | -                | -                | -         |     0.40 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           12 |     3633 | 2024-02-02 | NAVI Junior       | W   | 0.133      | -            | -                | -                | -         |     0.41 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           11 |     3637 | 2024-02-02 | Juggernauts       | W   | 0.132      | -            | -                | -                | -         |     0.08 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           10 |     3907 | 2024-01-20 | 3DMAX             | L   | 0.046      | -            | -                | -                | -         |    -0.46 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            9 |     3957 | 2024-01-19 | SAW               | L   | 0.039      | -            | -                | -                | -         |    -0.37 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            8 |     4003 | 2024-01-18 | Permitta          | W   | 0.034      | -            | -                | -                | -         |     0.32 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            7 |     4020 | 2024-01-18 | BetBoom           | L   | 0.033      | -            | -                | -                | -         |    -0.04 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            6 |     4034 | 2024-01-18 | Aurora Young Blud | L   | 0.031      | -            | -                | -                | -         |    -0.87 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            5 |     4090 | 2024-01-16 | Passion UA        | W   | 0.022      | -            | -                | -                | -         |     0.27 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            4 |     4101 | 2024-01-16 | samaloyod         | W   | 0.021      | -            | -                | -                | -         |     0.02 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            3 |     4124 | 2024-01-16 | premghouls        | W   | 0.021      | -            | -                | -                | -         |     0.01 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            2 |     4133 | 2024-01-16 | Czech Republic    | W   | 0.018      | -            | -                | -                | -         |     0.38 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            1 |     4187 | 2024-01-14 | Astralis Talent   | L   | 0.005      | -            | -                | -                | -         |    -0.14 | aVN, brutmonster, Cjoffo, nEMANHA, simke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($39,642.70)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      0.994 | $2,000.00      | $1,988.53       |
| 2024-06-02 |      0.940 | $2,000.00      | $1,879.25       |
| 2024-05-22 |      0.867 | $25,000.00     | $21,666.29      |
| 2024-05-16 |      0.824 | $5,000.00      | $4,121.30       |
| 2024-05-04 |      0.747 | $2,000.00      | $1,493.13       |
| 2024-04-24 |      0.680 | $12,500.00     | $8,494.21       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
