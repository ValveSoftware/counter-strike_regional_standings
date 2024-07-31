### Roster Details<br />
Team Name: Zero Tenacity<br />
Roster: aVN, brutmonster, Cjoffo, nEMANHA, simke<br />
Global Rank: [35](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [26]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1172.4<br />
<br />
Final Rank Value (1172.4) = Starting Rank Value (1108.6) + Head To Head Adjustments (63.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.538[<sup>1</sup>](#table2)
- Bounty Collected: 0.484[<sup>2</sup>](#table1)
- Opponent Network: 0.350[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.343<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1108.6
- 400 + ( ( 0.343 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1108.6


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
|          104 |       10 | 2024-07-31 | KOI               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    13.13 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          103 |       63 | 2024-07-30 | Sashi             | W   | 1.000      | 0.500        | 0.187 (0.093)    | 0.973 (0.486)    | 0 (0.000) |    17.20 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          102 |      246 | 2024-07-24 | Insilio           | W   | 1.000      | 0.500        | -                | 0.554 (0.277)    | 0 (0.000) |     8.44 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          101 |      337 | 2024-07-21 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -17.43 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          100 |      364 | 2024-07-20 | B8                | W   | 1.000      | 0.500        | 0.168 (0.084)    | 0.879 (0.440)    | 0 (0.000) |    16.97 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           99 |      459 | 2024-07-18 | fnatic            | W   | 1.000      | 0.500        | 0.374 (0.187)    | 0.633 (0.316)    | 0 (0.000) |    27.35 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           98 |      575 | 2024-07-16 | Monte             | W   | 1.000      | 0.500        | -                | 0.613 (0.306)    | 0 (0.000) |    13.68 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           97 |      596 | 2024-07-16 | EYEBALLERS        | W   | 1.000      | 0.500        | -                | 0.513 (0.257)    | 0 (0.000) |     6.85 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           96 |      846 | 2024-06-16 | FAVBET            | W   | 0.899      | -            | -                | -                | 0 (0.000) |     5.81 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           95 |      879 | 2024-06-15 | Nemiga            | L   | 0.893      | -            | -                | -                | -         |   -11.06 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           94 |      919 | 2024-06-14 | RUBY              | W   | 0.886      | -            | -                | -                | 0 (0.000) |     7.47 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           93 |      959 | 2024-06-13 | Monte             | L   | 0.879      | -            | -                | -                | -         |   -15.80 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           92 |      985 | 2024-06-12 | 9INE              | W   | 0.873      | -            | -                | -                | 0 (0.000) |     1.14 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           91 |     1004 | 2024-06-11 | DMS               | W   | 0.866      | -            | -                | -                | -         |     8.13 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           90 |     1014 | 2024-06-11 | EYEBALLERS        | W   | 0.864      | -            | -                | -                | -         |     6.98 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           89 |     1092 | 2024-06-09 | HAVU              | W   | 0.851      | -            | -                | -                | -         |     3.23 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           88 |     1101 | 2024-06-09 | Nemiga            | L   | 0.851      | -            | -                | -                | -         |   -11.64 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           87 |     1124 | 2024-06-08 | Insilio           | L   | 0.847      | -            | -                | -                | -         |   -18.35 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           86 |     1141 | 2024-06-08 | Passion UA        | W   | 0.846      | 0.500        | 0.172 (0.073)    | 1.000 (0.423)    | -         |    11.73 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           85 |     1182 | 2024-06-07 | DMS               | W   | 0.840      | -            | -                | -                | -         |     8.15 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           84 |     1198 | 2024-06-07 | EYEBALLERS        | L   | 0.839      | -            | -                | -                | -         |   -19.89 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           83 |     1220 | 2024-06-07 | 5W                | L   | 0.837      | -            | -                | -                | -         |   -18.97 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           82 |     1242 | 2024-06-06 | FAVBET            | W   | 0.833      | -            | -                | -                | -         |     3.94 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           81 |     1270 | 2024-06-06 | Permitta          | L   | 0.832      | -            | -                | -                | -         |   -20.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           80 |     1289 | 2024-06-06 | GhoulsW           | W   | 0.830      | -            | -                | -                | -         |     0.40 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           79 |     1326 | 2024-06-05 | Aurora Young Blud | W   | 0.825      | -            | -                | -                | -         |     3.87 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           78 |     1365 | 2024-06-04 | CYBERSHOKE        | W   | 0.819      | -            | -                | -                | -         |     4.67 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           77 |     1373 | 2024-06-04 | Grannys Knockers  | W   | 0.818      | -            | -                | -                | -         |     3.63 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           76 |     1403 | 2024-06-03 | Johnny Speeds     | L   | 0.811      | -            | -                | -                | -         |    -8.85 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           75 |     1410 | 2024-06-02 | DMS               | W   | 0.806      | -            | -                | -                | -         |     8.24 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           74 |     1415 | 2024-06-02 | SAW               | W   | 0.806      | -            | -                | -                | -         |    16.24 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           73 |     1438 | 2024-06-01 | RUBY              | L   | 0.800      | -            | -                | -                | -         |   -18.18 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           72 |     1453 | 2024-06-01 | DMS               | W   | 0.798      | -            | -                | -                | -         |     7.17 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           71 |     1457 | 2024-06-01 | KOI               | W   | 0.798      | -            | -                | -                | -         |    10.65 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           70 |     1461 | 2024-06-01 | FURIA             | L   | 0.797      | -            | -                | -                | -         |    -1.49 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           69 |     1489 | 2024-05-31 | Passion UA        | W   | 0.791      | 0.435        | 0.172 (0.059)    | 1.000 (0.344)    | -         |    10.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           68 |     1500 | 2024-05-30 | ThunderFlash      | W   | 0.786      | -            | -                | -                | -         |     0.46 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           67 |     1509 | 2024-05-30 | Passion UA        | L   | 0.786      | -            | -                | -                | -         |   -14.59 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           66 |     1526 | 2024-05-29 | JANO              | W   | 0.780      | -            | -                | -                | -         |     1.96 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           65 |     1596 | 2024-05-26 | RUBY              | W   | 0.758      | -            | -                | -                | -         |     7.01 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           64 |     1610 | 2024-05-25 | ex-Guild Eagles   | W   | 0.753      | -            | -                | -                | -         |     5.13 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           63 |     1614 | 2024-05-25 | Serbia            | W   | 0.752      | -            | -                | -                | -         |     3.38 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           62 |     1624 | 2024-05-25 | Rhyno             | W   | 0.750      | -            | -                | -                | -         |     8.63 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           61 |     1628 | 2024-05-24 | ex-Guild Eagles   | L   | 0.746      | -            | -                | -                | -         |   -18.82 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           60 |     1631 | 2024-05-24 | Kosovo            | W   | 0.746      | -            | -                | -                | -         |     3.94 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           59 |     1648 | 2024-05-23 | 3DMAX             | L   | 0.739      | -            | -                | -                | -         |    -1.63 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           58 |     1654 | 2024-05-23 | brazylijski luz   | W   | 0.737      | -            | -                | -                | -         |     4.14 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           57 |     1687 | 2024-05-22 | Sangal            | L   | 0.733      | -            | -                | -                | -         |   -11.05 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           56 |     1693 | 2024-05-22 | Illuminar         | W   | 0.731      | -            | -                | -                | -         |     4.76 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           55 |     1731 | 2024-05-21 | BLEED             | W   | 0.725      | 0.500        | 0.128 (0.047)    | -                | -         |    18.98 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           54 |     1736 | 2024-05-21 | Verdant           | W   | 0.724      | -            | -                | -                | -         |     6.38 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           53 |     1757 | 2024-05-20 | Metizport         | W   | 0.720      | -            | -                | -                | -         |     8.47 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           52 |     1793 | 2024-05-19 | B8                | W   | 0.712      | 0.500        | 0.168 (0.060)    | 0.879 (0.313)    | -         |    13.77 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           51 |     1847 | 2024-05-17 | PARIVISION        | L   | 0.700      | -            | -                | -                | -         |   -11.08 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           50 |     1856 | 2024-05-17 | Endpoint          | W   | 0.699      | -            | -                | -                | -         |     7.17 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           49 |     1897 | 2024-05-16 | 1WIN              | L   | 0.691      | -            | -                | -                | -         |   -14.28 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           48 |     1905 | 2024-05-16 | kONO              | W   | 0.690      | -            | -                | -                | -         |     5.25 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           47 |     1946 | 2024-05-15 | 3DMAX             | W   | 0.685      | 0.500        | 0.504 (0.172)    | 1.000 (0.342)    | -         |    20.58 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           46 |     2005 | 2024-05-14 | Preasy            | W   | 0.678      | -            | -                | -                | -         |     3.94 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           45 |     2024 | 2024-05-13 | EYEBALLERS        | W   | 0.672      | -            | -                | -                | -         |     6.60 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           44 |     2053 | 2024-05-12 | Verdant           | W   | 0.665      | -            | -                | -                | -         |     7.47 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           43 |     2123 | 2024-05-09 | 9 Pandas          | L   | 0.645      | -            | -                | -                | -         |   -11.22 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           42 |     2178 | 2024-05-06 | Insilio           | W   | 0.626      | -            | -                | -                | -         |     7.09 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           41 |     2226 | 2024-05-03 | EYEBALLERS        | L   | 0.606      | -            | -                | -                | -         |   -13.19 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           40 |     2237 | 2024-05-03 | Metizport         | L   | 0.604      | -            | -                | -                | -         |   -12.33 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           39 |     2265 | 2024-05-02 | HAVU              | W   | 0.597      | -            | -                | -                | -         |     2.31 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           38 |     2286 | 2024-05-01 | KOI               | W   | 0.591      | -            | -                | -                | -         |    10.00 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           37 |     2302 | 2024-04-30 | Sangal            | L   | 0.585      | -            | -                | -                | -         |    -7.64 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           36 |     2312 | 2024-04-30 | B8                | W   | 0.584      | 0.435        | 0.168 (0.043)    | -                | -         |     8.64 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           35 |     2327 | 2024-04-29 | PARIVISION        | L   | 0.578      | -            | -                | -                | -         |    -8.73 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           34 |     2343 | 2024-04-28 | SINNERS           | W   | 0.572      | -            | -                | -                | -         |     8.03 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           33 |     2355 | 2024-04-27 | 500               | W   | 0.567      | -            | -                | -                | -         |     2.57 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           32 |     2376 | 2024-04-27 | SINNERS           | W   | 0.564      | -            | -                | -                | -         |     8.40 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           31 |     2400 | 2024-04-26 | Illuminar         | W   | 0.557      | -            | -                | -                | -         |     1.09 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           30 |     2424 | 2024-04-25 | EYEBALLERS        | L   | 0.551      | -            | -                | -                | -         |   -12.62 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           29 |     2446 | 2024-04-24 | ex-Guild Eagles   | L   | 0.544      | -            | -                | -                | -         |   -12.92 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           28 |     2463 | 2024-04-23 | Nemiga            | L   | 0.538      | -            | -                | -                | -         |    -6.32 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           27 |     2471 | 2024-04-22 | Grannys Knockers  | W   | 0.533      | -            | -                | -                | -         |     2.37 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           26 |     2478 | 2024-04-22 | Nexus             | W   | 0.531      | -            | -                | -                | -         |     3.93 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           25 |     2524 | 2024-04-20 | RUBY              | W   | 0.518      | -            | -                | -                | -         |     5.62 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           24 |     2551 | 2024-04-19 | PARIVISION        | W   | 0.513      | -            | -                | -                | -         |     7.94 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           23 |     2575 | 2024-04-19 | ALTERNATE aTTaX   | W   | 0.511      | -            | -                | -                | -         |     5.92 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           22 |     2634 | 2024-04-18 | B8                | L   | 0.504      | -            | -                | -                | -         |    -8.33 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           21 |     2659 | 2024-04-17 | B8                | W   | 0.498      | 0.500        | 0.168 (0.042)    | -                | -         |     7.61 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           20 |     2686 | 2024-04-16 | Sangal            | L   | 0.493      | -            | -                | -                | -         |    -6.36 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           19 |     2707 | 2024-04-15 | ALTERNATE aTTaX   | W   | 0.486      | -            | -                | -                | -         |     6.04 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           18 |     2757 | 2024-04-12 | JANO              | L   | 0.464      | -            | -                | -                | -         |   -13.10 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           17 |     2785 | 2024-04-11 | Alliance          | L   | 0.458      | -            | -                | -                | -         |   -11.20 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           16 |     2883 | 2024-04-09 | MOUZ NXT          | L   | 0.445      | -            | -                | -                | -         |    -7.53 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           15 |     2945 | 2024-04-07 | ex-Preasy         | L   | 0.431      | -            | -                | -                | -         |   -11.05 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           14 |     3114 | 2024-04-01 | Nemiga            | L   | 0.391      | -            | -                | -                | -         |    -5.11 | aVN, brutmonster, Cjoffo, kdaN, simke    |
|           13 |     3521 | 2024-03-10 | CYBERSHOKE        | L   | 0.247      | -            | -                | -                | -         |    -7.16 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           12 |     3533 | 2024-03-10 | ECLOT             | W   | 0.245      | -            | -                | -                | -         |     3.98 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           11 |     3549 | 2024-03-09 | Sangal            | W   | 0.239      | -            | -                | -                | -         |     4.12 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           10 |     3598 | 2024-03-07 | Nemiga            | L   | 0.226      | -            | -                | -                | -         |    -2.94 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            9 |     3630 | 2024-03-06 | AURA              | W   | 0.219      | -            | -                | -                | -         |     0.23 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            8 |     3665 | 2024-03-05 | AMKAL             | L   | 0.213      | -            | -                | -                | -         |    -2.93 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            7 |     3723 | 2024-03-03 | Secret            | W   | 0.197      | -            | -                | -                | -         |     0.26 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            6 |     3743 | 2024-03-02 | Secret            | W   | 0.191      | -            | -                | -                | -         |     0.25 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            5 |     3769 | 2024-02-29 | Young Ninjas      | W   | 0.178      | -            | -                | -                | -         |     0.73 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            4 |     4032 | 2024-02-17 | Sashi             | L   | 0.099      | -            | -                | -                | -         |    -1.28 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            3 |     4187 | 2024-02-10 | Sampi             | L   | 0.053      | -            | -                | -                | -         |    -1.28 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            2 |     4268 | 2024-02-04 | 500               | L   | 0.012      | -            | -                | -                | -         |    -0.34 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            1 |     4281 | 2024-02-03 | The Chosen Few    | W   | 0.007      | -            | -                | -                | -         |     0.02 | aVN, brutmonster, Cjoffo, nEMANHA, simke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($45,637.73)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-22 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-06-10 |      0.860 | $2,000.00      | $1,720.28       |
| 2024-06-02 |      0.806 | $2,000.00      | $1,611.00       |
| 2024-05-22 |      0.733 | $25,000.00     | $18,313.21      |
| 2024-05-16 |      0.690 | $5,000.00      | $3,450.68       |
| 2024-05-04 |      0.612 | $2,000.00      | $1,224.88       |
| 2024-04-24 |      0.545 | $12,500.00     | $6,817.67       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
