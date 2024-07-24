### Roster Details<br />
Team Name: Zero Tenacity<br />
Roster: aVN, brutmonster, Cjoffo, nEMANHA, simke<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [41](../standings_global.md)<br />
Regional Rank: [29]( ../standings_europe.md)<br />
Final Rank Value:  1134.3<br />
<br />
Final Rank Value (1134.3) = Starting Rank Value (1102.3) + Head To Head Adjustments (32.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.568[<sup>1</sup>](#table2)
- Bounty Collected: 0.478[<sup>2</sup>](#table1)
- Opponent Network: 0.342[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.347<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1102.3
- 400 + ( ( 0.347 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1102.3


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
|          104 |        4 | 2024-07-24 | Insilio           | W   | 1.000      | 0.500        | -                | 0.582 (0.291)    | 0 (0.000) |     9.05 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          103 |       95 | 2024-07-21 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -17.25 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          102 |      122 | 2024-07-20 | B8                | W   | 1.000      | 0.500        | 0.206 (0.103)    | 0.933 (0.466)    | 0 (0.000) |    16.77 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          101 |      217 | 2024-07-18 | fnatic            | W   | 1.000      | 0.500        | 0.428 (0.214)    | 0.666 (0.333)    | 0 (0.000) |    27.51 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          100 |      333 | 2024-07-16 | Monte             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.46 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           99 |      354 | 2024-07-16 | EYEBALLERS        | W   | 1.000      | 0.500        | -                | 0.571 (0.286)    | 0 (0.000) |     6.85 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           98 |      604 | 2024-06-16 | FAVBET            | W   | 0.947      | -            | -                | -                | 0 (0.000) |     6.58 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           97 |      637 | 2024-06-15 | Nemiga            | L   | 0.940      | -            | -                | -                | -         |   -10.79 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           96 |      677 | 2024-06-14 | RUBY              | W   | 0.933      | -            | -                | -                | 0 (0.000) |     8.46 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           95 |      717 | 2024-06-13 | Monte             | L   | 0.926      | -            | -                | -                | -         |   -17.71 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           94 |      743 | 2024-06-12 | 9INE              | W   | 0.920      | -            | -                | -                | 0 (0.000) |     1.26 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           93 |      762 | 2024-06-11 | DMS               | W   | 0.913      | -            | -                | -                | 0 (0.000) |     7.96 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           92 |      772 | 2024-06-11 | EYEBALLERS        | W   | 0.912      | -            | -                | -                | 0 (0.000) |     7.35 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           91 |      850 | 2024-06-09 | HAVU              | W   | 0.899      | -            | -                | -                | -         |     3.74 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           90 |      859 | 2024-06-09 | Nemiga            | L   | 0.898      | -            | -                | -                | -         |   -11.26 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           89 |      882 | 2024-06-08 | Insilio           | L   | 0.894      | -            | -                | -                | -         |   -18.59 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           88 |      899 | 2024-06-08 | Passion UA        | W   | 0.893      | 0.500        | 0.163 (0.073)    | 1.000 (0.446)    | -         |    12.67 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           87 |      940 | 2024-06-07 | DMS               | W   | 0.887      | -            | -                | -                | -         |     8.05 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           86 |      956 | 2024-06-07 | EYEBALLERS        | L   | 0.886      | -            | -                | -                | -         |   -20.82 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           85 |      978 | 2024-06-07 | 5W                | L   | 0.884      | -            | -                | -                | -         |   -19.79 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           84 |     1000 | 2024-06-06 | FAVBET            | W   | 0.881      | -            | -                | -                | -         |     4.51 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           83 |     1028 | 2024-06-06 | Permitta          | L   | 0.879      | -            | -                | -                | -         |   -21.04 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           82 |     1047 | 2024-06-06 | GhoulsW           | W   | 0.878      | -            | -                | -                | -         |     0.44 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           81 |     1084 | 2024-06-05 | Aurora Young Blud | W   | 0.873      | -            | -                | -                | -         |     3.77 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           80 |     1123 | 2024-06-04 | CYBERSHOKE        | W   | 0.867      | -            | -                | -                | -         |     3.88 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           79 |     1131 | 2024-06-04 | Grannys Knockers  | W   | 0.866      | -            | -                | -                | -         |     4.11 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           78 |     1161 | 2024-06-03 | Johnny Speeds     | L   | 0.859      | -            | -                | -                | -         |    -8.46 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           77 |     1168 | 2024-06-02 | DMS               | W   | 0.854      | -            | -                | -                | -         |     8.16 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           76 |     1173 | 2024-06-02 | SAW               | W   | 0.853      | -            | -                | -                | -         |    17.40 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           75 |     1196 | 2024-06-01 | RUBY              | L   | 0.847      | -            | -                | -                | -         |   -18.55 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           74 |     1211 | 2024-06-01 | DMS               | W   | 0.846      | -            | -                | -                | -         |     7.03 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           73 |     1215 | 2024-06-01 | KOI               | W   | 0.845      | -            | -                | -                | -         |    11.82 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           72 |     1219 | 2024-06-01 | FURIA             | L   | 0.844      | -            | -                | -                | -         |    -1.28 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           71 |     1247 | 2024-05-31 | Passion UA        | W   | 0.839      | 0.435        | 0.163 (0.059)    | 1.000 (0.364)    | -         |    11.45 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           70 |     1258 | 2024-05-30 | ThunderFlash      | W   | 0.834      | -            | -                | -                | -         |     0.52 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           69 |     1267 | 2024-05-30 | Passion UA        | L   | 0.833      | -            | -                | -                | -         |   -15.14 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           68 |     1284 | 2024-05-29 | JANO              | W   | 0.827      | -            | -                | -                | -         |     2.23 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           67 |     1354 | 2024-05-26 | RUBY              | W   | 0.805      | 0.435        | 0.122 (0.043)    | -                | -         |     8.22 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           66 |     1368 | 2024-05-25 | ex-Guild Eagles   | W   | 0.800      | -            | -                | -                | -         |     6.07 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           65 |     1372 | 2024-05-25 | Serbia            | W   | 0.799      | -            | -                | -                | -         |     4.01 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           64 |     1382 | 2024-05-25 | Rhyno             | W   | 0.798      | -            | -                | -                | -         |    10.21 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           63 |     1386 | 2024-05-24 | ex-Guild Eagles   | L   | 0.794      | -            | -                | -                | -         |   -19.36 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           62 |     1389 | 2024-05-24 | Kosovo            | W   | 0.793      | -            | -                | -                | -         |     4.73 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           61 |     1406 | 2024-05-23 | 3DMAX             | L   | 0.786      | -            | -                | -                | -         |    -8.33 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           60 |     1412 | 2024-05-23 | brazylijski luz   | W   | 0.784      | -            | -                | -                | -         |     4.93 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           59 |     1445 | 2024-05-22 | Sangal            | L   | 0.780      | -            | -                | -                | -         |   -12.28 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           58 |     1451 | 2024-05-22 | Illuminar         | W   | 0.778      | -            | -                | -                | -         |     5.10 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           57 |     1489 | 2024-05-21 | BLEED             | W   | 0.773      | 0.500        | 0.162 (0.063)    | -                | -         |    16.99 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           56 |     1494 | 2024-05-21 | Verdant           | W   | 0.772      | -            | -                | -                | -         |     7.15 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           55 |     1515 | 2024-05-20 | Metizport         | W   | 0.767      | -            | -                | -                | -         |     9.91 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           54 |     1551 | 2024-05-19 | B8                | W   | 0.759      | 0.500        | 0.206 (0.078)    | 0.933 (0.354)    | -         |    14.89 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           53 |     1605 | 2024-05-17 | PARIVISION        | L   | 0.747      | -            | -                | -                | -         |   -12.82 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           52 |     1614 | 2024-05-17 | Endpoint          | W   | 0.746      | -            | -                | -                | -         |     7.98 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           51 |     1655 | 2024-05-16 | 1WIN              | L   | 0.739      | -            | -                | -                | -         |   -14.55 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           50 |     1663 | 2024-05-16 | kONO              | W   | 0.737      | -            | -                | -                | -         |     6.24 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           49 |     1704 | 2024-05-15 | 3DMAX             | W   | 0.732      | 0.500        | 0.175 (0.064)    | 1.000 (0.366)    | -         |    17.02 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           48 |     1763 | 2024-05-14 | Preasy            | W   | 0.726      | -            | -                | -                | -         |     4.53 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           47 |     1782 | 2024-05-13 | EYEBALLERS        | W   | 0.719      | -            | -                | -                | -         |     7.16 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           46 |     1811 | 2024-05-12 | Verdant           | W   | 0.712      | -            | -                | -                | -         |     8.45 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           45 |     1881 | 2024-05-09 | 9 Pandas          | L   | 0.692      | -            | -                | -                | -         |   -11.14 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           44 |     1936 | 2024-05-06 | Insilio           | W   | 0.673      | -            | -                | -                | -         |     8.28 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           43 |     1984 | 2024-05-03 | EYEBALLERS        | L   | 0.654      | -            | -                | -                | -         |   -14.07 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           42 |     1995 | 2024-05-03 | Metizport         | L   | 0.652      | -            | -                | -                | -         |   -12.51 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           41 |     2023 | 2024-05-02 | HAVU              | W   | 0.645      | -            | -                | -                | -         |     2.74 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           40 |     2044 | 2024-05-01 | KOI               | W   | 0.639      | -            | -                | -                | -         |    11.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           39 |     2060 | 2024-04-30 | Sangal            | L   | 0.633      | -            | -                | -                | -         |    -8.79 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           38 |     2070 | 2024-04-30 | B8                | W   | 0.631      | 0.435        | 0.206 (0.056)    | 0.933 (0.256)    | -         |     9.43 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           37 |     2085 | 2024-04-29 | PARIVISION        | L   | 0.625      | -            | -                | -                | -         |   -10.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           36 |     2101 | 2024-04-28 | SINNERS           | W   | 0.619      | -            | -                | -                | -         |     9.03 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           35 |     2113 | 2024-04-27 | 500               | W   | 0.614      | -            | -                | -                | -         |     3.08 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           34 |     2134 | 2024-04-27 | SINNERS           | W   | 0.611      | -            | -                | -                | -         |     9.50 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           33 |     2158 | 2024-04-26 | Illuminar         | W   | 0.605      | -            | -                | -                | -         |     1.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           32 |     2182 | 2024-04-25 | EYEBALLERS        | L   | 0.598      | -            | -                | -                | -         |   -13.63 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           31 |     2204 | 2024-04-24 | ex-Guild Eagles   | L   | 0.592      | -            | -                | -                | -         |   -13.53 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           30 |     2221 | 2024-04-23 | Nemiga            | L   | 0.585      | -            | -                | -                | -         |    -5.94 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           29 |     2229 | 2024-04-22 | Grannys Knockers  | W   | 0.580      | -            | -                | -                | -         |     2.83 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           28 |     2236 | 2024-04-22 | Nexus             | W   | 0.578      | -            | -                | -                | -         |     4.71 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           27 |     2282 | 2024-04-20 | RUBY              | W   | 0.566      | -            | -                | -                | -         |     6.77 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           26 |     2309 | 2024-04-19 | PARIVISION        | W   | 0.561      | -            | -                | -                | -         |     7.75 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           25 |     2333 | 2024-04-19 | ALTERNATE aTTaX   | W   | 0.559      | -            | -                | -                | -         |     6.91 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           24 |     2392 | 2024-04-18 | B8                | L   | 0.551      | -            | -                | -                | -         |    -8.98 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           23 |     2417 | 2024-04-17 | B8                | W   | 0.545      | 0.500        | 0.206 (0.056)    | 0.933 (0.254)    | -         |     8.46 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           22 |     2444 | 2024-04-16 | Sangal            | L   | 0.540      | -            | -                | -                | -         |    -7.65 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           21 |     2465 | 2024-04-15 | ALTERNATE aTTaX   | W   | 0.533      | -            | -                | -                | -         |     7.13 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           20 |     2515 | 2024-04-12 | JANO              | L   | 0.511      | -            | -                | -                | -         |   -14.30 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           19 |     2543 | 2024-04-11 | Alliance          | L   | 0.505      | -            | -                | -                | -         |   -11.95 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           18 |     2641 | 2024-04-09 | MOUZ NXT          | L   | 0.492      | -            | -                | -                | -         |    -7.98 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           17 |     2703 | 2024-04-07 | ex-Preasy         | L   | 0.478      | -            | -                | -                | -         |   -11.70 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           16 |     2872 | 2024-04-01 | Nemiga            | L   | 0.438      | -            | -                | -                | -         |    -4.96 | aVN, brutmonster, Cjoffo, kdaN, simke    |
|           15 |     3279 | 2024-03-10 | CYBERSHOKE        | L   | 0.294      | -            | -                | -                | -         |    -8.48 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           14 |     3291 | 2024-03-10 | ECLOT             | W   | 0.292      | -            | -                | -                | -         |     5.30 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           13 |     3307 | 2024-03-09 | Sangal            | W   | 0.286      | -            | -                | -                | -         |     4.49 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           12 |     3356 | 2024-03-07 | Nemiga            | L   | 0.273      | -            | -                | -                | -         |    -3.05 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           11 |     3388 | 2024-03-06 | AURA              | W   | 0.266      | -            | -                | -                | -         |     0.30 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           10 |     3423 | 2024-03-05 | AMKAL             | L   | 0.260      | -            | -                | -                | -         |    -4.10 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            9 |     3481 | 2024-03-03 | Secret            | W   | 0.245      | -            | -                | -                | -         |     0.34 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            8 |     3501 | 2024-03-02 | Secret            | W   | 0.238      | -            | -                | -                | -         |     0.34 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            7 |     3527 | 2024-02-29 | Young Ninjas      | W   | 0.226      | -            | -                | -                | -         |     1.04 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            6 |     3790 | 2024-02-17 | Sashi             | L   | 0.146      | -            | -                | -                | -         |    -1.86 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            5 |     3945 | 2024-02-10 | Sampi             | L   | 0.100      | -            | -                | -                | -         |    -2.36 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            4 |     4026 | 2024-02-04 | 500               | L   | 0.059      | -            | -                | -                | -         |    -1.67 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            3 |     4039 | 2024-02-03 | The Chosen Few    | W   | 0.054      | -            | -                | -                | -         |     0.15 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            2 |     4085 | 2024-02-02 | NAVI Junior       | W   | 0.046      | -            | -                | -                | -         |     0.14 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            1 |     4089 | 2024-02-02 | Juggernauts       | W   | 0.045      | -            | -                | -                | -         |     0.03 | aVN, brutmonster, Cjoffo, nEMANHA, simke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($47,931.18)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-22 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-06-10 |      0.907 | $2,000.00      | $1,814.86       |
| 2024-06-02 |      0.853 | $2,000.00      | $1,705.58       |
| 2024-05-22 |      0.780 | $25,000.00     | $19,495.41      |
| 2024-05-16 |      0.737 | $5,000.00      | $3,687.12       |
| 2024-05-04 |      0.660 | $2,000.00      | $1,319.46       |
| 2024-04-24 |      0.593 | $12,500.00     | $7,408.76       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
