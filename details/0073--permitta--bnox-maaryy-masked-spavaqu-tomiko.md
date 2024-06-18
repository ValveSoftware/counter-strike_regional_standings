### Roster Details<br />
Team Name: Permitta<br />
Roster: bnox, maaryy, mASKED, SpavaQu, tomiko<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [73](../standings_global.md)<br />
Regional Rank: [52]( ../standings_europe.md)<br />
Final Rank Value:  988.4<br />
<br />
Final Rank Value (988.4) = Starting Rank Value (952.5) + Head To Head Adjustments (35.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.414[<sup>1</sup>](#table2)
- Bounty Collected: 0.428[<sup>2</sup>](#table1)
- Opponent Network: 0.245[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.272<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 952.5
- 400 + ( ( 0.272 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 952.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           99 |       24 | 2024-06-16 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -5.22 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           98 |       67 | 2024-06-15 | BIG               | W   | 1.000      | 0.435        | 0.225 (0.098)    | -                | 0 (0.000) |    28.91 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           97 |      104 | 2024-06-14 | PARIVISION        | W   | 1.000      | 0.435        | -                | 0.462 (0.201)    | 0 (0.000) |    20.16 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           96 |      117 | 2024-06-13 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -28.63 | bnox, maaryy, mASKED, morelz, Vegi    |
|           95 |      150 | 2024-06-12 | Nexus             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.77 | bnox, maaryy, mASKED, morelz, Vegi    |
|           94 |      168 | 2024-06-11 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -5.49 | bnox, maaryy, mASKED, morelz, Vegi    |
|           93 |      194 | 2024-06-10 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -10.24 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           92 |      299 | 2024-06-08 | Space             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.37 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           91 |      440 | 2024-06-06 | Zero Tenacity     | W   | 1.000      | 0.435        | 0.153 (0.067)    | 1.000 (0.435)    | 0 (0.000) |    23.98 | bnox, Markoś, mASKED, SpavaQu, tomiko |
|           90 |      574 | 2024-06-03 | GUN5              | W   | 1.000      | 0.435        | 0.095 (0.041)    | -                | 0 (0.000) |    20.05 | bnox, Markoś, mASKED, morelz, tomiko  |
|           89 |      634 | 2024-06-01 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -13.79 | bnox, mASKED, morelz, SpavaQu, tomiko |
|           88 |      644 | 2024-05-31 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |    -3.63 | bnox, mASKED, morelz, Sidney, tomiko  |
|           87 |      678 | 2024-05-30 | NAVI Junior       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.63 | bnox, maaryy, mASKED, morelz, tomiko  |
|           86 |      686 | 2024-05-30 | ex-iNation        | L   | 1.000      | -            | -                | -                | -         |   -20.96 | bnox, maaryy, mASKED, morelz, tomiko  |
|           85 |      730 | 2024-05-28 | Preasy            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.45 | bnox, maaryy, mASKED, morelz, tomiko  |
|           84 |      733 | 2024-05-28 | GUN5              | W   | 1.000      | 0.435        | 0.095 (0.041)    | -                | 0 (0.000) |    16.65 | bnox, maaryy, mASKED, morelz, tomiko  |
|           83 |      751 | 2024-05-27 | VP.Prodigy        | L   | 1.000      | -            | -                | -                | -         |   -15.27 | bnox, maaryy, mASKED, morelz, tomiko  |
|           82 |      774 | 2024-05-26 | ECLOT             | W   | 1.000      | 0.371        | 0.107 (0.040)    | -                | 0 (0.000) |    23.18 | bnox, maaryy, mASKED, morelz, tomiko  |
|           81 |      790 | 2024-05-25 | Nexus             | W   | 1.000      | -            | -                | -                | -         |    11.30 | bnox, maaryy, mASKED, morelz, tomiko  |
|           80 |      860 | 2024-05-22 | Endpoint          | W   | 1.000      | 0.435        | -                | 0.490 (0.213)    | -         |    17.57 | bnox, maaryy, mASKED, morelz, tomiko  |
|           79 |      868 | 2024-05-22 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -4.08 | bnox, maaryy, mASKED, morelz, Vegi    |
|           78 |      890 | 2024-05-21 | INFINITE          | W   | 1.000      | -            | -                | -                | -         |     3.50 | bnox, maaryy, mASKED, morelz, Vegi    |
|           77 |      946 | 2024-05-20 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -11.12 | bnox, maaryy, mASKED, morelz, Vegi    |
|           76 |     1038 | 2024-05-17 | Sangal            | L   | 0.987      | -            | -                | -                | -         |    -9.10 | bnox, maaryy, mASKED, morelz, Vegi    |
|           75 |     1104 | 2024-05-15 | EYEBALLERS        | L   | 0.976      | -            | -                | -                | -         |   -15.27 | bnox, maaryy, mASKED, morelz, Vegi    |
|           74 |     1193 | 2024-05-13 | 1WIN              | L   | 0.963      | -            | -                | -                | -         |   -10.15 | bnox, maaryy, mASKED, morelz, Vegi    |
|           73 |     1339 | 2024-05-07 | Enterprise        | L   | 0.921      | -            | -                | -                | -         |   -14.46 | bnox, maaryy, mASKED, morelz, Sobol   |
|           72 |     1355 | 2024-05-06 | ENCE Academy      | W   | 0.914      | -            | -                | -                | -         |     7.82 | bnox, maaryy, mASKED, morelz, Sobol   |
|           71 |     1400 | 2024-05-03 | Insilio           | L   | 0.895      | -            | -                | -                | -         |   -11.26 | bnox, maaryy, mASKED, Sidney, Sobol   |
|           70 |     1427 | 2024-05-02 | Sampi             | L   | 0.889      | -            | -                | -                | -         |   -12.68 | bnox, maaryy, mASKED, Sidney, Sobol   |
|           69 |     1438 | 2024-05-02 | B8                | L   | 0.887      | -            | -                | -                | -         |    -9.85 | bnox, maaryy, mASKED, morelz, Sobol   |
|           68 |     1486 | 2024-04-30 | BLEED             | L   | 0.874      | -            | -                | -                | -         |    -2.76 | bnox, maaryy, mASKED, morelz, Vegi    |
|           67 |     1493 | 2024-04-29 | AMKAL             | L   | 0.869      | -            | -                | -                | -         |    -6.47 | bnox, maaryy, mASKED, morelz, Vegi    |
|           66 |     1503 | 2024-04-29 | RUBY              | W   | 0.867      | 0.435        | 0.121 (0.046)    | 0.574 (0.216)    | -         |    13.64 | bnox, maaryy, mASKED, Sidney, Vegi    |
|           65 |     1539 | 2024-04-27 | Insilio           | L   | 0.855      | -            | -                | -                | -         |   -13.10 | bnox, maaryy, mASKED, morelz, Vegi    |
|           64 |     1547 | 2024-04-27 | Enterprise        | W   | 0.854      | 0.396        | -                | 0.575 (0.195)    | -         |    12.64 | bnox, maaryy, mASKED, morelz, Vegi    |
|           63 |     1570 | 2024-04-26 | ARCRED            | L   | 0.847      | -            | -                | -                | -         |   -17.81 | bnox, maaryy, mASKED, morelz, Vegi    |
|           62 |     1591 | 2024-04-25 | 1WIN              | L   | 0.842      | -            | -                | -                | -         |   -12.64 | bnox, maaryy, mASKED, morelz, Vegi    |
|           61 |     1608 | 2024-04-24 | BLEED             | L   | 0.836      | -            | -                | -                | -         |    -3.20 | bnox, maaryy, mASKED, morelz, Vegi    |
|           60 |     1610 | 2024-04-24 | Passion UA        | W   | 0.835      | 0.384        | 0.086 (0.028)    | 0.803 (0.258)    | -         |    11.92 | bnox, maaryy, mASKED, morelz, Vegi    |
|           59 |     1619 | 2024-04-24 | Sampi             | L   | 0.833      | -            | -                | -                | -         |   -13.10 | bnox, maaryy, mASKED, morelz, Vegi    |
|           58 |     1641 | 2024-04-23 | ALTERNATE aTTaX   | W   | 0.826      | -            | -                | -                | -         |    11.11 | bnox, maaryy, mASKED, morelz, Vegi    |
|           57 |     1654 | 2024-04-22 | Grannys Knockers  | W   | 0.820      | -            | -                | -                | -         |     6.42 | bnox, maaryy, mASKED, morelz, Vegi    |
|           56 |     1675 | 2024-04-21 | Insilio           | W   | 0.813      | 0.435        | -                | 0.578 (0.204)    | -         |    12.34 | bnox, maaryy, mASKED, morelz, Vegi    |
|           55 |     1699 | 2024-04-20 | Nexus             | L   | 0.808      | -            | -                | -                | -         |   -15.84 | bnox, maaryy, mASKED, morelz, Vegi    |
|           54 |     1704 | 2024-04-20 | Passion UA        | W   | 0.807      | 0.371        | 0.086 (0.026)    | 0.803 (0.240)    | -         |    12.45 | bnox, maaryy, mASKED, morelz, Vegi    |
|           53 |     1793 | 2024-04-18 | Passion UA        | L   | 0.795      | -            | -                | -                | -         |   -12.46 | bnox, maaryy, mASKED, morelz, Vegi    |
|           52 |     1807 | 2024-04-18 | Sampi             | L   | 0.793      | -            | -                | -                | -         |   -12.96 | bnox, maaryy, mASKED, morelz, Vegi    |
|           51 |     1823 | 2024-04-17 | PARIVISION        | W   | 0.789      | -            | -                | -                | -         |    11.35 | bnox, maaryy, mASKED, morelz, Vegi    |
|           50 |     1865 | 2024-04-16 | Gaimin Gladiators | L   | 0.781      | -            | -                | -                | -         |    -5.20 | bnox, maaryy, mASKED, morelz, Vegi    |
|           49 |     1928 | 2024-04-12 | MOUZ NXT          | W   | 0.754      | 0.371        | 0.158 (0.044)    | 1.000 (0.279)    | -         |    15.32 | bnox, maaryy, mASKED, morelz, Vegi    |
|           48 |     2008 | 2024-04-10 | EYEBALLERS        | W   | 0.740      | -            | -                | -                | -         |     9.79 | bnox, maaryy, mASKED, morelz, Vegi    |
|           47 |     2086 | 2024-04-08 | HAVU              | W   | 0.728      | -            | -                | -                | -         |     5.10 | bnox, maaryy, mASKED, morelz, Vegi    |
|           46 |     2093 | 2024-04-08 | JANO              | W   | 0.727      | -            | -                | -                | -         |     3.86 | bnox, maaryy, mASKED, morelz, Vegi    |
|           45 |     2223 | 2024-04-03 | Enterprise        | L   | 0.695      | -            | -                | -                | -         |   -10.07 | bnox, maaryy, mASKED, morelz, Vegi    |
|           44 |     2235 | 2024-04-03 | ECLOT             | L   | 0.694      | -            | -                | -                | -         |    -5.62 | bnox, maaryy, mASKED, morelz, Vegi    |
|           43 |     2267 | 2024-04-02 | 3DMAX             | L   | 0.688      | -            | -                | -                | -         |    -4.80 | bnox, maaryy, mASKED, morelz, Vegi    |
|           42 |     2276 | 2024-04-02 | Sashi             | L   | 0.687      | -            | -                | -                | -         |    -7.87 | bnox, maaryy, mASKED, morelz, Vegi    |
|           41 |     2541 | 2024-03-16 | RUBY              | L   | 0.576      | -            | -                | -                | -         |    -9.91 | bnox, maaryy, mASKED, morelz, Vegi    |
|           40 |     2561 | 2024-03-15 | The Chosen Few    | W   | 0.569      | -            | -                | -                | -         |     3.36 | bnox, maaryy, mASKED, morelz, Vegi    |
|           39 |     2564 | 2024-03-15 | Sampi             | L   | 0.567      | -            | -                | -                | -         |   -10.14 | bnox, maaryy, mASKED, morelz, Vegi    |
|           38 |     2611 | 2024-03-13 | MOUZ NXT          | W   | 0.557      | 0.372        | 0.158 (0.033)    | 1.000 (0.207)    | -         |    10.82 | bnox, maaryy, mASKED, morelz, Vegi    |
|           37 |     2630 | 2024-03-13 | ECLOT             | W   | 0.555      | -            | -                | -                | -         |    12.79 | bnox, maaryy, mASKED, morelz, Vegi    |
|           36 |     2644 | 2024-03-13 | ECLOT             | W   | 0.554      | -            | -                | -                | -         |    13.24 | bnox, maaryy, mASKED, morelz, Vegi    |
|           35 |     2686 | 2024-03-11 | ex-Preasy         | L   | 0.541      | -            | -                | -                | -         |    -8.94 | bnox, maaryy, mASKED, morelz, Vegi    |
|           34 |     2733 | 2024-03-09 | Sashi             | L   | 0.528      | -            | -                | -                | -         |    -6.04 | bnox, maaryy, mASKED, morelz, Vegi    |
|           33 |     2769 | 2024-03-07 | VP.Prodigy        | W   | 0.516      | -            | -                | -                | -         |     6.07 | bnox, maaryy, mASKED, morelz, Vegi    |
|           32 |     2778 | 2024-03-07 | kONO              | W   | 0.514      | -            | -                | -                | -         |     4.86 | bnox, maaryy, mASKED, morelz, Vegi    |
|           31 |     2806 | 2024-03-06 | Passion UA        | W   | 0.508      | -            | -                | -                | -         |     9.45 | bnox, maaryy, mASKED, morelz, Vegi    |
|           30 |     2807 | 2024-03-06 | Enterprise        | W   | 0.508      | -            | -                | -                | -         |     9.33 | bnox, maaryy, mASKED, morelz, Vegi    |
|           29 |     2847 | 2024-03-05 | Young Ninjas      | W   | 0.502      | -            | -                | -                | -         |     5.79 | bnox, maaryy, mASKED, morelz, Vegi    |
|           28 |     2914 | 2024-03-02 | AURA              | W   | 0.481      | -            | -                | -                | -         |     1.29 | bnox, maaryy, mASKED, morelz, Vegi    |
|           27 |     2958 | 2024-02-28 | Secret            | L   | 0.461      | -            | -                | -                | -         |   -13.07 | bnox, maaryy, mASKED, morelz, Vegi    |
|           26 |     2961 | 2024-02-28 | ECLOT             | L   | 0.461      | -            | -                | -                | -         |    -3.00 | bnox, maaryy, mASKED, morelz, Vegi    |
|           25 |     2982 | 2024-02-27 | Sprout            | W   | 0.454      | -            | -                | -                | -         |     0.86 | bnox, maaryy, mASKED, morelz, Vegi    |
|           24 |     3056 | 2024-02-24 | ECLOT             | W   | 0.434      | -            | -                | -                | -         |    10.95 | bnox, maaryy, mASKED, morelz, Vegi    |
|           23 |     3085 | 2024-02-22 | PGE Turow         | W   | 0.420      | -            | -                | -                | -         |     2.36 | bnox, maaryy, mASKED, morelz, reiko   |
|           22 |     3117 | 2024-02-21 | ECLOT             | L   | 0.414      | -            | -                | -                | -         |    -2.57 | bnox, maaryy, mASKED, morelz, Vegi    |
|           21 |     3164 | 2024-02-19 | ECLOT             | W   | 0.401      | -            | -                | -                | -         |    10.31 | bnox, maaryy, mASKED, morelz, Vegi    |
|           20 |     3402 | 2024-02-07 | Endpoint          | L   | 0.321      | -            | -                | -                | -         |    -5.67 | bnox, maaryy, mASKED, morelz, Vegi    |
|           19 |     3547 | 2024-01-31 | Sashi             | W   | 0.275      | -            | -                | -                | -         |     6.59 | bnox, maaryy, mASKED, morelz, Vegi    |
|           18 |     3564 | 2024-01-30 | RUBY              | L   | 0.269      | -            | -                | -                | -         |    -3.96 | bnox, maaryy, mASKED, morelz, Vegi    |
|           17 |     3567 | 2024-01-30 | 3DMAX             | W   | 0.269      | -            | -                | -                | -         |     7.07 | bnox, maaryy, mASKED, morelz, Vegi    |
|           16 |     3775 | 2024-01-20 | Gaimin Gladiators | L   | 0.201      | -            | -                | -                | -         |    -1.28 | bnox, maaryy, mASKED, morelz, Vegi    |
|           15 |     3779 | 2024-01-20 | Astralis Talent   | L   | 0.201      | -            | -                | -                | -         |    -4.40 | bnox, maaryy, mASKED, morelz, Vegi    |
|           14 |     3812 | 2024-01-19 | JANO              | W   | 0.196      | -            | -                | -                | -         |     0.45 | bnox, maaryy, mASKED, morelz, Vegi    |
|           13 |     3835 | 2024-01-19 | Aurora Young Blud | W   | 0.194      | -            | -                | -                | -         |     1.53 | bnox, maaryy, mASKED, morelz, Vegi    |
|           12 |     3870 | 2024-01-18 | Zero Tenacity     | L   | 0.189      | -            | -                | -                | -         |    -1.77 | bnox, maaryy, mASKED, morelz, Vegi    |
|           11 |     3889 | 2024-01-18 | BIG               | L   | 0.188      | -            | -                | -                | -         |    -0.36 | bnox, maaryy, mASKED, morelz, Vegi    |
|           10 |     3897 | 2024-01-18 | Spirit Academy    | W   | 0.188      | -            | -                | -                | -         |     0.97 | bnox, maaryy, mASKED, morelz, Vegi    |
|            9 |     3937 | 2024-01-17 | Astralis Talent   | L   | 0.181      | -            | -                | -                | -         |    -4.02 | bnox, maaryy, mASKED, morelz, Vegi    |
|            8 |     4053 | 2024-01-14 | ECLOT             | W   | 0.161      | -            | -                | -                | -         |     4.22 | bnox, maaryy, mASKED, morelz, Vegi    |
|            7 |     4072 | 2024-01-13 | ex-sYnck          | W   | 0.157      | -            | -                | -                | -         |     0.40 | bnox, maaryy, mASKED, morelz, Vegi    |
|            6 |     4077 | 2024-01-13 | OG                | L   | 0.156      | -            | -                | -                | -         |    -1.03 | bnox, maaryy, mASKED, morelz, Vegi    |
|            5 |     4078 | 2024-01-13 | Insilio           | W   | 0.156      | -            | -                | -                | -         |     2.40 | bnox, maaryy, mASKED, morelz, Vegi    |
|            4 |     4085 | 2024-01-13 | INFINITE          | W   | 0.155      | -            | -                | -                | -         |     0.42 | bnox, maaryy, mASKED, morelz, Vegi    |
|            3 |     4116 | 2024-01-12 | Clоwnfiesta       | W   | 0.150      | -            | -                | -                | -         |     0.21 | bnox, maaryy, mASKED, morelz, Vegi    |
|            2 |     4166 | 2024-01-11 | PERA              | L   | 0.142      | -            | -                | -                | -         |    -2.05 | bnox, maaryy, mASKED, morelz, Vegi    |
|            1 |     4178 | 2024-01-10 | Illyrians         | W   | 0.137      | -            | -                | -                | -         |     0.19 | bnox, maaryy, mASKED, morelz, Vegi    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,619.20)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-13 |      1.000 | $545.00        | $545.00         |
| 2024-05-02 |      0.889 | $500.00        | $444.56         |
| 2024-04-25 |      0.841 | $3,000.00      | $2,522.27       |
| 2024-03-25 |      0.636 | $1,250.00      | $794.71         |
| 2024-02-28 |      0.461 | $3,000.00      | $1,381.88       |
| 2024-02-21 |      0.414 | $1,500.00      | $620.52         |
| 2024-01-21 |      0.207 | $1,500.00      | $310.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
