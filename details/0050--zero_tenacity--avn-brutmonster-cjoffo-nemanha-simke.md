### Roster Details<br />
Team Name: Zero Tenacity<br />
Roster: aVN, brutmonster, Cjoffo, nEMANHA, simke<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [50](../standings_global.md)<br />
Regional Rank: [36]( ../standings_europe.md)<br />
Final Rank Value:  1116.1<br />
<br />
Final Rank Value (1116.1) = Starting Rank Value (1118.8) + Head To Head Adjustments (-2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.551[<sup>1</sup>](#table2)
- Bounty Collected: 0.473[<sup>2</sup>](#table1)
- Opponent Network: 0.390[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.354<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1118.8
- 400 + ( ( 0.354 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1118.8


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
|          111 |       16 | 2024-06-16 | FAVBET            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.83 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          110 |       49 | 2024-06-15 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |   -10.76 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          109 |       89 | 2024-06-14 | RUBY              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.68 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          108 |      129 | 2024-06-13 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -12.22 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          107 |      155 | 2024-06-12 | 9INE              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.14 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          106 |      174 | 2024-06-11 | DMS               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.07 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          105 |      184 | 2024-06-11 | EYEBALLERS        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.97 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          104 |      262 | 2024-06-09 | HAVU              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          103 |      271 | 2024-06-09 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |   -11.22 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          102 |      294 | 2024-06-08 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -19.61 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          101 |      311 | 2024-06-08 | Passion UA        | W   | 1.000      | 0.500        | 0.086 (0.043)    | 0.803 (0.401)    | 0 (0.000) |    13.31 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          100 |      352 | 2024-06-07 | DMS               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.56 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           99 |      368 | 2024-06-07 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -23.46 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           98 |      390 | 2024-06-07 | 5W                | L   | 1.000      | -            | -                | -                | -         |   -22.67 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           97 |      412 | 2024-06-06 | FAVBET            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.09 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           96 |      440 | 2024-06-06 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -23.98 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           95 |      459 | 2024-06-06 | GhoulsW           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.41 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           94 |      496 | 2024-06-05 | Aurora Young Blud | W   | 1.000      | -            | -                | -                | -         |     3.26 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           93 |      535 | 2024-06-04 | CYBERSHOKE        | W   | 1.000      | -            | -                | -                | -         |     3.67 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           92 |      543 | 2024-06-04 | Grannys Knockers  | W   | 1.000      | -            | -                | -                | -         |     4.45 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           91 |      573 | 2024-06-03 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -13.32 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           90 |      580 | 2024-06-02 | DMS               | W   | 1.000      | -            | -                | -                | -         |    10.09 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           89 |      585 | 2024-06-02 | SAW               | W   | 1.000      | -            | -                | -                | -         |    23.36 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           88 |      610 | 2024-06-01 | RUBY              | L   | 1.000      | -            | -                | -                | -         |   -21.88 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           87 |      625 | 2024-06-01 | DMS               | W   | 1.000      | -            | -                | -                | -         |     8.76 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           86 |      629 | 2024-06-01 | KOI               | W   | 1.000      | -            | -                | -                | -         |    15.10 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           85 |      633 | 2024-06-01 | FURIA             | L   | 1.000      | -            | -                | -                | -         |    -3.69 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           84 |      661 | 2024-05-31 | Passion UA        | W   | 1.000      | 0.435        | 0.086 (0.037)    | 0.803 (0.349)    | -         |    12.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           83 |      672 | 2024-05-30 | ThunderFlash      | W   | 1.000      | -            | -                | -                | -         |     0.52 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           82 |      681 | 2024-05-30 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -19.23 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           81 |      698 | 2024-05-29 | JANO              | W   | 1.000      | -            | -                | -                | -         |     2.40 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           80 |      768 | 2024-05-26 | RUBY              | W   | 1.000      | 0.435        | 0.121 (0.053)    | -                | -         |    10.03 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           79 |      782 | 2024-05-25 | ex-Guild Eagles   | W   | 1.000      | -            | -                | -                | -         |     9.03 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           78 |      786 | 2024-05-25 | ex-iNation        | W   | 1.000      | -            | -                | -                | -         |     4.75 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           77 |      796 | 2024-05-25 | Rhyno             | W   | 1.000      | 0.435        | 0.094 (0.041)    | -                | -         |    12.57 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           76 |      800 | 2024-05-24 | ex-Guild Eagles   | L   | 1.000      | -            | -                | -                | -         |   -22.68 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           75 |      803 | 2024-05-24 | The Suspect       | W   | 1.000      | -            | -                | -                | -         |     4.59 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           74 |      820 | 2024-05-23 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -10.96 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           73 |      826 | 2024-05-23 | brazylijski luz   | W   | 1.000      | -            | -                | -                | -         |     5.85 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           72 |      859 | 2024-05-22 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -15.02 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           71 |      865 | 2024-05-22 | Illuminar         | W   | 1.000      | -            | -                | -                | -         |     4.58 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           70 |      903 | 2024-05-21 | BLEED             | W   | 1.000      | 0.500        | 0.347 (0.174)    | 0.946 (0.473)    | -         |    21.82 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           69 |      908 | 2024-05-21 | Verdant           | W   | 1.000      | -            | -                | -                | -         |     5.70 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           68 |      929 | 2024-05-20 | Metizport         | W   | 1.000      | 0.500        | -                | 0.587 (0.294)    | -         |    15.23 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           67 |      965 | 2024-05-19 | B8                | W   | 1.000      | 0.500        | 0.229 (0.115)    | 1.000 (0.500)    | -         |    21.47 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           66 |     1019 | 2024-05-17 | PARIVISION        | L   | 0.990      | -            | -                | -                | -         |   -18.01 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           65 |     1028 | 2024-05-17 | Endpoint          | W   | 0.988      | -            | -                | -                | -         |    10.99 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           64 |     1069 | 2024-05-16 | 1WIN              | L   | 0.981      | -            | -                | -                | -         |   -16.46 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           63 |     1077 | 2024-05-16 | kONO              | W   | 0.980      | -            | -                | -                | -         |     8.66 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           62 |     1118 | 2024-05-15 | 3DMAX             | W   | 0.975      | 0.500        | 0.186 (0.091)    | 1.000 (0.487)    | -         |    22.76 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           61 |     1177 | 2024-05-14 | Preasy            | W   | 0.968      | -            | -                | -                | -         |     5.37 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           60 |     1196 | 2024-05-13 | EYEBALLERS        | W   | 0.962      | -            | -                | -                | -         |    10.57 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           59 |     1225 | 2024-05-12 | Verdant           | W   | 0.955      | -            | -                | -                | -         |     7.17 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           58 |     1295 | 2024-05-09 | 9 Pandas          | L   | 0.934      | -            | -                | -                | -         |   -12.22 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           57 |     1350 | 2024-05-06 | Insilio           | W   | 0.915      | -            | -                | -                | -         |    13.16 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           56 |     1398 | 2024-05-03 | EYEBALLERS        | L   | 0.896      | -            | -                | -                | -         |   -18.06 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           55 |     1409 | 2024-05-03 | Metizport         | L   | 0.894      | -            | -                | -                | -         |   -14.47 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           54 |     1437 | 2024-05-02 | HAVU              | W   | 0.887      | -            | -                | -                | -         |     4.20 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           53 |     1458 | 2024-05-01 | KOI               | W   | 0.881      | -            | -                | -                | -         |    17.65 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           52 |     1474 | 2024-04-30 | Sangal            | L   | 0.875      | -            | -                | -                | -         |   -10.83 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           51 |     1484 | 2024-04-30 | B8                | W   | 0.874      | 0.435        | 0.229 (0.087)    | 1.000 (0.380)    | -         |    14.22 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           50 |     1499 | 2024-04-29 | PARIVISION        | L   | 0.868      | -            | -                | -                | -         |   -14.74 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           49 |     1515 | 2024-04-28 | SINNERS           | W   | 0.862      | 0.435        | -                | 0.782 (0.293)    | -         |    13.51 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           48 |     1527 | 2024-04-27 | 500               | W   | 0.857      | -            | -                | -                | -         |     5.62 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           47 |     1548 | 2024-04-27 | SINNERS           | W   | 0.854      | 0.500        | -                | 0.782 (0.334)    | -         |    14.66 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           46 |     1572 | 2024-04-26 | Illuminar         | W   | 0.847      | -            | -                | -                | -         |     8.21 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           45 |     1596 | 2024-04-25 | EYEBALLERS        | L   | 0.841      | -            | -                | -                | -         |   -18.18 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           44 |     1618 | 2024-04-24 | ex-Guild Eagles   | L   | 0.834      | -            | -                | -                | -         |   -15.81 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           43 |     1635 | 2024-04-23 | Nemiga            | L   | 0.828      | -            | -                | -                | -         |    -5.93 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           42 |     1643 | 2024-04-22 | Grannys Knockers  | W   | 0.823      | -            | -                | -                | -         |     4.66 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           41 |     1650 | 2024-04-22 | Nexus             | W   | 0.821      | -            | -                | -                | -         |     7.82 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           40 |     1696 | 2024-04-20 | RUBY              | W   | 0.808      | -            | -                | -                | -         |    10.71 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           39 |     1723 | 2024-04-19 | PARIVISION        | W   | 0.803      | -            | -                | -                | -         |    10.18 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           38 |     1747 | 2024-04-19 | ALTERNATE aTTaX   | W   | 0.801      | -            | -                | -                | -         |    10.39 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           37 |     1806 | 2024-04-18 | B8                | L   | 0.793      | -            | -                | -                | -         |   -11.13 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           36 |     1831 | 2024-04-17 | B8                | W   | 0.788      | 0.500        | 0.229 (0.090)    | 1.000 (0.394)    | -         |    14.05 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           35 |     1858 | 2024-04-16 | Sangal            | L   | 0.783      | -            | -                | -                | -         |    -9.59 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           34 |     1879 | 2024-04-15 | ALTERNATE aTTaX   | W   | 0.776      | -            | -                | -                | -         |    11.16 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           33 |     1929 | 2024-04-12 | JANO              | L   | 0.753      | -            | -                | -                | -         |   -20.65 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           32 |     1957 | 2024-04-11 | Alliance          | L   | 0.748      | -            | -                | -                | -         |   -16.07 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           31 |     2055 | 2024-04-09 | MOUZ NXT          | L   | 0.735      | -            | -                | -                | -         |   -10.34 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           30 |     2117 | 2024-04-07 | ex-Preasy         | L   | 0.721      | -            | -                | -                | -         |   -14.14 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           29 |     2286 | 2024-04-01 | Nemiga            | L   | 0.680      | -            | -                | -                | -         |    -5.46 | aVN, brutmonster, Cjoffo, kdaN, simke    |
|           28 |     2694 | 2024-03-10 | CYBERSHOKE        | L   | 0.536      | -            | -                | -                | -         |   -15.33 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           27 |     2706 | 2024-03-10 | ECLOT             | W   | 0.535      | -            | -                | -                | -         |    11.21 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           26 |     2722 | 2024-03-09 | Sangal            | W   | 0.529      | 0.358        | 0.216 (0.041)    | -                | -         |     8.96 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           25 |     2771 | 2024-03-07 | Nemiga            | L   | 0.516      | -            | -                | -                | -         |    -3.81 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           24 |     2803 | 2024-03-06 | AURA              | W   | 0.509      | -            | -                | -                | -         |     0.68 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           23 |     2838 | 2024-03-05 | AMKAL             | L   | 0.502      | -            | -                | -                | -         |    -5.89 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           22 |     2896 | 2024-03-03 | Secret            | W   | 0.487      | -            | -                | -                | -         |     0.86 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           21 |     2916 | 2024-03-02 | Secret            | W   | 0.480      | -            | -                | -                | -         |     0.86 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           20 |     2942 | 2024-02-29 | Young Ninjas      | W   | 0.468      | -            | -                | -                | -         |     2.92 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           19 |     3205 | 2024-02-17 | Sashi             | L   | 0.389      | -            | -                | -                | -         |    -5.15 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           18 |     3360 | 2024-02-10 | Sampi             | L   | 0.342      | -            | -                | -                | -         |    -7.56 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           17 |     3441 | 2024-02-04 | 500               | L   | 0.302      | -            | -                | -                | -         |    -8.42 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           16 |     3454 | 2024-02-03 | The Chosen Few    | W   | 0.297      | -            | -                | -                | -         |     0.88 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           15 |     3500 | 2024-02-02 | NAVI Junior       | W   | 0.288      | -            | -                | -                | -         |     0.90 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           14 |     3504 | 2024-02-02 | Juggernauts       | W   | 0.288      | -            | -                | -                | -         |     0.17 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           13 |     3774 | 2024-01-20 | 3DMAX             | L   | 0.201      | -            | -                | -                | -         |    -1.99 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           12 |     3824 | 2024-01-19 | SAW               | L   | 0.195      | -            | -                | -                | -         |    -1.44 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           11 |     3870 | 2024-01-18 | Permitta          | W   | 0.189      | -            | -                | -                | -         |     1.77 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           10 |     3887 | 2024-01-18 | BetBoom           | L   | 0.189      | -            | -                | -                | -         |    -0.23 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            9 |     3901 | 2024-01-18 | Aurora Young Blud | L   | 0.187      | -            | -                | -                | -         |    -5.21 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            8 |     3957 | 2024-01-16 | Passion UA        | W   | 0.178      | -            | -                | -                | -         |     2.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            7 |     3968 | 2024-01-16 | samaloyod         | W   | 0.177      | -            | -                | -                | -         |     0.21 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            6 |     3991 | 2024-01-16 | premghouls        | W   | 0.176      | -            | -                | -                | -         |     0.10 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            5 |     4000 | 2024-01-16 | ECLOT             | W   | 0.174      | -            | -                | -                | -         |     3.67 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            4 |     4054 | 2024-01-14 | Astralis Talent   | L   | 0.161      | -            | -                | -                | -         |    -4.31 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            3 |     4176 | 2024-01-10 | Gucci Academy     | L   | 0.137      | -            | -                | -                | -         |    -4.17 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            2 |     4229 | 2024-01-09 | 9INE              | L   | 0.129      | -            | -                | -                | -         |    -3.92 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            1 |     4248 | 2024-01-09 | The Prodigies     | W   | 0.129      | -            | -                | -                | -         |     0.14 | aVN, brutmonster, Cjoffo, nEMANHA, simke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($46,144.26)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-02 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-22 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-05-16 |      0.980 | $5,000.00      | $4,899.66       |
| 2024-05-04 |      0.902 | $2,000.00      | $1,804.47       |
| 2024-04-24 |      0.835 | $12,500.00     | $10,440.12      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
