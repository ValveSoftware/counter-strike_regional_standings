### Roster Details<br />
Team Name: Zero Tenacity<br />
Roster: aVN, brutmonster, Cjoffo, nEMANHA, simke<br />
Global Rank: [35](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [26]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1152.9<br />
<br />
Final Rank Value (1152.9) = Starting Rank Value (1103.4) + Head To Head Adjustments (49.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.542[<sup>1</sup>](#table2)
- Bounty Collected: 0.481[<sup>2</sup>](#table1)
- Opponent Network: 0.345[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.342<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1103.4
- 400 + ( ( 0.342 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 1103.4


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
|          104 |       26 | 2024-08-05 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -22.00 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          103 |       64 | 2024-08-04 | Into the Breach   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.63 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          102 |      218 | 2024-07-31 | KOI               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.50 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          101 |      271 | 2024-07-30 | Sashi             | W   | 1.000      | 0.500        | 0.184 (0.092)    | 0.958 (0.479)    | 0 (0.000) |    16.98 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          100 |      454 | 2024-07-24 | Insilio           | W   | 1.000      | 0.500        | -                | 0.539 (0.270)    | 0 (0.000) |     8.44 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           99 |      545 | 2024-07-21 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -17.05 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           98 |      572 | 2024-07-20 | B8                | W   | 1.000      | 0.500        | 0.170 (0.085)    | 0.912 (0.456)    | 0 (0.000) |    16.75 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           97 |      667 | 2024-07-18 | fnatic            | W   | 1.000      | 0.500        | 0.370 (0.185)    | 0.680 (0.340)    | 0 (0.000) |    27.12 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           96 |      783 | 2024-07-16 | Monte             | W   | 1.000      | 0.500        | 0.080 (0.040)    | 0.598 (0.299)    | 0 (0.000) |    13.45 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           95 |      804 | 2024-07-16 | EYEBALLERS        | W   | 1.000      | 0.500        | -                | 0.488 (0.244)    | 0 (0.000) |     6.84 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           94 |     1054 | 2024-06-16 | FAVBET            | W   | 0.860      | -            | -                | -                | 0 (0.000) |     5.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           93 |     1087 | 2024-06-15 | Nemiga            | L   | 0.854      | -            | -                | -                | -         |   -10.55 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           92 |     1127 | 2024-06-14 | RUBY              | W   | 0.847      | -            | -                | -                | 0 (0.000) |     7.27 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           91 |     1167 | 2024-06-13 | Monte             | L   | 0.840      | -            | -                | -                | -         |   -15.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           90 |     1193 | 2024-06-12 | 9INE              | W   | 0.833      | -            | -                | -                | -         |     1.10 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           89 |     1212 | 2024-06-11 | DMS               | W   | 0.827      | -            | -                | -                | -         |     7.69 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           88 |     1222 | 2024-06-11 | EYEBALLERS        | W   | 0.825      | -            | -                | -                | -         |     6.62 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           87 |     1300 | 2024-06-09 | HAVU              | W   | 0.812      | -            | -                | -                | -         |     2.97 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           86 |     1309 | 2024-06-09 | Nemiga            | L   | 0.811      | -            | -                | -                | -         |   -11.04 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           85 |     1332 | 2024-06-08 | Insilio           | L   | 0.808      | -            | -                | -                | -         |   -17.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           84 |     1349 | 2024-06-08 | Passion UA        | W   | 0.806      | 0.500        | 0.173 (0.070)    | 1.000 (0.403)    | -         |    11.68 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           83 |     1390 | 2024-06-07 | DMS               | W   | 0.801      | -            | -                | -                | -         |     7.69 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           82 |     1406 | 2024-06-07 | EYEBALLERS        | L   | 0.800      | -            | -                | -                | -         |   -19.01 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           81 |     1428 | 2024-06-07 | 5W                | L   | 0.798      | -            | -                | -                | -         |   -18.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           80 |     1450 | 2024-06-06 | FAVBET            | W   | 0.794      | -            | -                | -                | -         |     3.77 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           79 |     1478 | 2024-06-06 | Permitta          | L   | 0.793      | -            | -                | -                | -         |   -18.70 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           78 |     1497 | 2024-06-06 | GhoulsW           | W   | 0.791      | -            | -                | -                | -         |     0.38 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           77 |     1534 | 2024-06-05 | Aurora Young Blud | W   | 0.786      | -            | -                | -                | -         |     5.25 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           76 |     1573 | 2024-06-04 | CYBERSHOKE        | W   | 0.780      | -            | -                | -                | -         |     4.47 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           75 |     1581 | 2024-06-04 | Grannys Knockers  | W   | 0.779      | -            | -                | -                | -         |     3.39 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           74 |     1611 | 2024-06-03 | Johnny Speeds     | L   | 0.772      | -            | -                | -                | -         |    -8.12 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           73 |     1618 | 2024-06-02 | DMS               | W   | 0.767      | -            | -                | -                | -         |     7.74 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           72 |     1623 | 2024-06-02 | SAW               | W   | 0.767      | -            | -                | -                | -         |    14.79 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           71 |     1646 | 2024-06-01 | RUBY              | L   | 0.761      | -            | -                | -                | -         |   -17.36 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           70 |     1661 | 2024-06-01 | DMS               | W   | 0.759      | -            | -                | -                | -         |     6.74 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           69 |     1665 | 2024-06-01 | KOI               | W   | 0.759      | -            | -                | -                | -         |     9.60 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           68 |     1669 | 2024-06-01 | FURIA             | L   | 0.758      | -            | -                | -                | -         |    -1.51 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           67 |     1697 | 2024-05-31 | Passion UA        | W   | 0.752      | 0.435        | 0.173 (0.057)    | 1.000 (0.327)    | -         |    10.42 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           66 |     1708 | 2024-05-30 | ThunderFlash      | W   | 0.747      | -            | -                | -                | -         |     0.44 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           65 |     1717 | 2024-05-30 | Passion UA        | L   | 0.746      | -            | -                | -                | -         |   -13.45 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           64 |     1734 | 2024-05-29 | JANO              | W   | 0.741      | -            | -                | -                | -         |     1.86 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           63 |     1804 | 2024-05-26 | RUBY              | W   | 0.719      | -            | -                | -                | -         |     6.58 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           62 |     1818 | 2024-05-25 | ex-Guild Eagles   | W   | 0.714      | -            | -                | -                | -         |     4.63 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           61 |     1822 | 2024-05-25 | Serbia            | W   | 0.713      | -            | -                | -                | -         |     3.19 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           60 |     1832 | 2024-05-25 | Rhyno             | W   | 0.711      | -            | -                | -                | -         |     7.84 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           59 |     1836 | 2024-05-24 | ex-Guild Eagles   | L   | 0.707      | -            | -                | -                | -         |   -18.07 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           58 |     1839 | 2024-05-24 | The Suspect       | W   | 0.706      | -            | -                | -                | -         |     3.71 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           57 |     1856 | 2024-05-23 | 3DMAX             | L   | 0.700      | -            | -                | -                | -         |    -1.52 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           56 |     1862 | 2024-05-23 | brazylijski luz   | W   | 0.698      | -            | -                | -                | -         |     3.81 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           55 |     1895 | 2024-05-22 | Sangal            | L   | 0.693      | -            | -                | -                | -         |    -9.96 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           54 |     1901 | 2024-05-22 | Illuminar         | W   | 0.692      | -            | -                | -                | -         |     4.56 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           53 |     1939 | 2024-05-21 | BLEED             | W   | 0.686      | 0.500        | 0.126 (0.043)    | -                | -         |    17.84 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           52 |     1944 | 2024-05-21 | Verdant           | W   | 0.685      | -            | -                | -                | -         |     6.00 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           51 |     1965 | 2024-05-20 | Metizport         | W   | 0.681      | -            | -                | -                | -         |     7.85 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           50 |     2001 | 2024-05-19 | B8                | W   | 0.673      | 0.500        | 0.170 (0.057)    | 0.912 (0.307)    | -         |    12.76 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           49 |     2055 | 2024-05-17 | PARIVISION        | L   | 0.661      | -            | -                | -                | -         |   -10.11 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           48 |     2064 | 2024-05-17 | Endpoint          | W   | 0.659      | -            | -                | -                | -         |     6.70 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           47 |     2105 | 2024-05-16 | 1WIN              | L   | 0.652      | -            | -                | -                | -         |   -12.79 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           46 |     2113 | 2024-05-16 | kONO              | W   | 0.651      | -            | -                | -                | -         |     4.84 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           45 |     2154 | 2024-05-15 | 3DMAX             | W   | 0.646      | 0.500        | 0.510 (0.165)    | 1.000 (0.323)    | -         |    19.41 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           44 |     2213 | 2024-05-14 | Preasy            | W   | 0.639      | -            | -                | -                | -         |     1.16 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           43 |     2232 | 2024-05-13 | EYEBALLERS        | W   | 0.633      | -            | -                | -                | -         |     6.01 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           42 |     2261 | 2024-05-12 | Verdant           | W   | 0.626      | -            | -                | -                | -         |     6.82 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           41 |     2331 | 2024-05-09 | 9 Pandas          | L   | 0.605      | -            | -                | -                | -         |   -10.78 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           40 |     2386 | 2024-05-06 | Insilio           | W   | 0.586      | -            | -                | -                | -         |     6.47 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           39 |     2434 | 2024-05-03 | EYEBALLERS        | L   | 0.567      | -            | -                | -                | -         |   -12.55 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           38 |     2445 | 2024-05-03 | Metizport         | L   | 0.565      | -            | -                | -                | -         |   -11.84 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           37 |     2473 | 2024-05-02 | HAVU              | W   | 0.558      | -            | -                | -                | -         |     2.04 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           36 |     2494 | 2024-05-01 | KOI               | W   | 0.552      | -            | -                | -                | -         |     8.71 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           35 |     2510 | 2024-04-30 | Sangal            | L   | 0.546      | -            | -                | -                | -         |    -6.88 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           34 |     2520 | 2024-04-30 | B8                | W   | 0.545      | 0.435        | 0.170 (0.040)    | -                | -         |     7.82 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           33 |     2535 | 2024-04-29 | PARIVISION        | L   | 0.539      | -            | -                | -                | -         |    -7.92 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           32 |     2551 | 2024-04-28 | SINNERS           | W   | 0.533      | -            | -                | -                | -         |     9.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           31 |     2563 | 2024-04-27 | 500               | W   | 0.528      | -            | -                | -                | -         |     2.23 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           30 |     2584 | 2024-04-27 | SINNERS           | W   | 0.525      | -            | -                | -                | -         |     9.89 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           29 |     2608 | 2024-04-26 | Illuminar         | W   | 0.518      | -            | -                | -                | -         |     0.97 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           28 |     2632 | 2024-04-25 | EYEBALLERS        | L   | 0.512      | -            | -                | -                | -         |   -11.81 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           27 |     2654 | 2024-04-24 | ex-Guild Eagles   | L   | 0.505      | -            | -                | -                | -         |   -12.28 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           26 |     2671 | 2024-04-23 | Nemiga            | L   | 0.499      | -            | -                | -                | -         |    -5.90 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           25 |     2679 | 2024-04-22 | Grannys Knockers  | W   | 0.494      | -            | -                | -                | -         |     2.13 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           24 |     2686 | 2024-04-22 | Nexus             | W   | 0.492      | -            | -                | -                | -         |     3.60 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           23 |     2732 | 2024-04-20 | RUBY              | W   | 0.479      | -            | -                | -                | -         |     5.05 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           22 |     2759 | 2024-04-19 | PARIVISION        | W   | 0.474      | -            | -                | -                | -         |     7.65 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           21 |     2783 | 2024-04-19 | ALTERNATE aTTaX   | W   | 0.472      | -            | -                | -                | -         |     5.42 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           20 |     2842 | 2024-04-18 | B8                | L   | 0.465      | -            | -                | -                | -         |    -7.85 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           19 |     2867 | 2024-04-17 | B8                | W   | 0.459      | -            | -                | -                | -         |     6.83 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           18 |     2894 | 2024-04-16 | Sangal            | L   | 0.454      | -            | -                | -                | -         |    -5.57 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           17 |     2915 | 2024-04-15 | ALTERNATE aTTaX   | W   | 0.447      | -            | -                | -                | -         |     5.46 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           16 |     2965 | 2024-04-12 | JANO              | L   | 0.424      | -            | -                | -                | -         |   -12.02 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           15 |     2993 | 2024-04-11 | Alliance          | L   | 0.419      | -            | -                | -                | -         |   -10.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           14 |     3091 | 2024-04-09 | MOUZ NXT          | L   | 0.406      | -            | -                | -                | -         |    -6.96 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           13 |     3153 | 2024-04-07 | ex-Preasy         | L   | 0.392      | -            | -                | -                | -         |   -10.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           12 |     3322 | 2024-04-01 | Nemiga            | L   | 0.351      | -            | -                | -                | -         |    -4.58 | aVN, brutmonster, Cjoffo, kdaN, simke    |
|           11 |     3729 | 2024-03-10 | CYBERSHOKE        | L   | 0.207      | -            | -                | -                | -         |    -6.03 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           10 |     3741 | 2024-03-10 | ECLOT             | W   | 0.206      | -            | -                | -                | -         |     4.90 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            9 |     3757 | 2024-03-09 | Sangal            | W   | 0.200      | -            | -                | -                | -         |     3.62 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            8 |     3806 | 2024-03-07 | Nemiga            | L   | 0.187      | -            | -                | -                | -         |    -2.41 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            7 |     3838 | 2024-03-06 | AURA              | W   | 0.180      | -            | -                | -                | -         |     0.18 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            6 |     3873 | 2024-03-05 | AMKAL             | L   | 0.173      | -            | -                | -                | -         |    -2.43 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            5 |     3931 | 2024-03-03 | Secret            | W   | 0.158      | -            | -                | -                | -         |     0.20 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            4 |     3951 | 2024-03-02 | Secret            | W   | 0.151      | -            | -                | -                | -         |     0.20 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            3 |     3977 | 2024-02-29 | Young Ninjas      | W   | 0.139      | -            | -                | -                | -         |     0.56 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            2 |     4240 | 2024-02-17 | Sashi             | L   | 0.060      | -            | -                | -                | -         |    -0.79 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            1 |     4395 | 2024-02-10 | Sampi             | L   | 0.013      | -            | -                | -                | -         |    -0.33 | aVN, brutmonster, Cjoffo, nEMANHA, simke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($45,738.25)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-06 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-07-22 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-06-10 |      0.821 | $2,000.00      | $1,641.95       |
| 2024-06-02 |      0.766 | $2,000.00      | $1,532.67       |
| 2024-05-22 |      0.693 | $25,000.00     | $17,334.10      |
| 2024-05-16 |      0.651 | $5,000.00      | $3,254.86       |
| 2024-05-04 |      0.573 | $2,000.00      | $1,146.55       |
| 2024-04-24 |      0.506 | $12,500.00     | $6,328.11       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
