### Roster Details<br />
Team Name: TNC<br />
Roster: AdrieN, maaryy, Melavi, tomiko, yvro<br />
Global Rank: [131](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [87]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  937.2<br />
<br />
Final Rank Value (937.2) = Starting Rank Value (1009.3) + Head To Head Adjustments (-72.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.377[<sup>1</sup>](#table2)
- Bounty Collected: 0.329[<sup>2</sup>](#table1)
- Opponent Network: 0.257[<sup>2</sup>](#table1)
- LAN Wins: 0.317[<sup>2</sup>](#table1)

The average of these factors is 0.320<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1009.3
- 400 + ( ( 0.320 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1009.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|          122 |       77 | 2026-05-29 | TDK                | L   | 1.000      | -            | -                | -                | -         |    -4.81 | AdrieN, maaryy, Melavi, tomiko, yvro  |
|          121 |      114 | 2026-05-28 | Young Ninjas       | W   | 1.000      | -            | -                | -                | 0 (0.000) |    13.47 | AdrieN, maaryy, Markoś, tomiko, yvro  |
|          120 |      134 | 2026-05-28 | Honvéd             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.85 | AdrieN, maaryy, Melavi, tomiko, yvro  |
|          119 |      152 | 2026-05-27 | Young Ninjas       | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.19 | AdrieN, maaryy, Melavi, tomiko, yvro  |
|          118 |      160 | 2026-05-27 | ex-Zero Tenacity   | W   | 1.000      | 0.396        | -                | 0.815 (0.323)    | 0 (0.000) |    14.83 | AdrieN, maaryy, Melavi, tomiko, yvro  |
|          117 |      207 | 2026-05-26 | Lazer Cats         | W   | 1.000      | -            | -                | -                | -         |    16.42 | AdrieN, maaryy, Melavi, tomiko, yvro  |
|          116 |      234 | 2026-05-25 | ex-Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |   -14.85 | AdrieN, maaryy, Melavi, tomiko, yvro  |
|          115 |      270 | 2026-05-24 | AM                 | L   | 1.000      | -            | -                | -                | -         |    -5.85 | AdrieN, maaryy, Melavi, tomiko, yvro  |
|          114 |      363 | 2026-05-22 | Ursa               | W   | 1.000      | 0.384        | 0.016 (0.006)    | 0.962 (0.370)    | -         |    20.79 | AdrieN, maaryy, Melavi, tomiko, yvro  |
|          113 |      439 | 2026-05-20 | PsychoFace         | L   | 1.000      | -            | -                | -                | -         |    -8.08 | AdrieN, maaryy, Nami, tomiko, yvro    |
|          112 |      473 | 2026-05-19 | Phantom            | L   | 1.000      | -            | -                | -                | -         |    -9.38 | AdrieN, maaryy, Nami, tomiko, yvro    |
|          111 |      601 | 2026-05-14 | Lavked             | L   | 1.000      | -            | -                | -                | -         |    -6.50 | AdrieN, maaryy, Markoś, Nami, yvro    |
|          110 |      873 | 2026-05-04 | UNiTY              | W   | 1.000      | 0.384        | -                | 0.605 (0.233)    | -         |    16.52 | AdrieN, maaryy, Nami, POLO, yvro      |
|          109 |      891 | 2026-05-03 | megoshort          | L   | 1.000      | -            | -                | -                | -         |   -17.63 | AdrieN, maaryy, POLO, Showk, yvro     |
|          108 |     1001 | 2026-05-01 | UNiTY              | W   | 0.993      | 0.384        | -                | 0.605 (0.231)    | -         |    16.03 | AdrieN, maaryy, POLO, Showk, yvro     |
|          107 |     1028 | 2026-04-30 | ALGO               | W   | 0.987      | -            | -                | -                | -         |    14.67 | adex, AdrieN, maaryy, POLO, yvro      |
|          106 |     1034 | 2026-04-30 | EAC                | L   | 0.987      | -            | -                | -                | -         |    -4.96 | adex, AdrieN, maaryy, POLO, yvro      |
|          105 |     1123 | 2026-04-28 | GenOne             | L   | 0.973      | -            | -                | -                | -         |   -14.06 | adex, AdrieN, maaryy, POLO, yvro      |
|          104 |     1348 | 2026-04-24 | Clutchain          | L   | 0.947      | -            | -                | -                | -         |   -25.85 | AdrieN, maaryy, Markoś, Nami, yvro    |
|          103 |     1349 | 2026-04-24 | MASONIC            | L   | 0.947      | -            | -                | -                | -         |   -16.48 | AdrieN, maaryy, Markoś, Nami, yvro    |
|          102 |     1398 | 2026-04-23 | Rune Eaters        | L   | 0.940      | -            | -                | -                | -         |   -17.51 | AdrieN, maaryy, POLO, tomiko, yvro    |
|          101 |     1454 | 2026-04-20 | brazylijski luz    | L   | 0.920      | -            | -                | -                | -         |   -16.05 | AdrieN, maaryy, Markoś, Nami, yvro    |
|          100 |     1460 | 2026-04-20 | Rebels             | W   | 0.918      | 0.341        | -                | 0.723 (0.226)    | 1 (0.918) |    19.98 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           99 |     1467 | 2026-04-19 | XI                 | W   | 0.914      | -            | -                | -                | 1 (0.914) |     3.00 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           98 |     1472 | 2026-04-19 | brazylijski luz    | L   | 0.913      | -            | -                | -                | -         |   -16.16 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           97 |     1476 | 2026-04-19 | Young Ninjas       | L   | 0.913      | -            | -                | -                | -         |   -17.13 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           96 |     1488 | 2026-04-19 | Phantom Academy    | W   | 0.911      | -            | -                | -                | 1 (0.911) |     2.84 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           95 |     1543 | 2026-04-15 | Sashi              | L   | 0.887      | -            | -                | -                | -         |    -6.66 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           94 |     1603 | 2026-04-12 | ECSTATIC           | W   | 0.866      | 0.363        | 0.040 (0.013)    | -                | -         |    19.48 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           93 |     1729 | 2026-04-07 | INOX Division      | L   | 0.834      | -            | -                | -                | -         |   -15.32 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           92 |     1766 | 2026-04-06 | MANA               | W   | 0.827      | 0.384        | -                | 0.712 (0.226)    | -         |    13.06 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           91 |     1804 | 2026-04-05 | PsychoFace         | L   | 0.821      | -            | -                | -                | -         |    -7.02 | AdrieN, dixyi, maaryy, Nami, yvro     |
|           90 |     1906 | 2026-04-04 | megoshort          | L   | 0.812      | -            | -                | -                | -         |   -16.43 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           89 |     1954 | 2026-04-03 | Just Players       | W   | 0.808      | -            | -                | -                | -         |     9.07 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           88 |     1991 | 2026-04-03 | ex-RUBY            | L   | 0.806      | -            | -                | -                | -         |    -9.89 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           87 |     2140 | 2026-04-01 | HEROIC Academy     | W   | 0.794      | -            | -                | -                | -         |    10.77 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           86 |     2157 | 2026-04-01 | Persona Grata      | L   | 0.793      | -            | -                | -                | -         |   -17.79 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           85 |     2323 | 2026-03-30 | yngods             | W   | 0.781      | -            | -                | -                | -         |     4.37 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           84 |     2349 | 2026-03-30 | Persona Grata      | L   | 0.779      | -            | -                | -                | -         |   -18.01 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           83 |     2401 | 2026-03-29 | Rune Eaters        | W   | 0.774      | 0.435        | -                | 0.688 (0.231)    | -         |     9.32 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           82 |     2510 | 2026-03-28 | Hashiras           | W   | 0.766      | -            | -                | -                | -         |     6.14 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           81 |     2598 | 2026-03-26 | PsychoFace         | L   | 0.753      | -            | -                | -                | -         |    -8.79 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           80 |     2655 | 2026-03-25 | STATE              | L   | 0.746      | -            | -                | -                | -         |    -9.31 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           79 |     2758 | 2026-03-23 | TDK                | L   | 0.734      | -            | -                | -                | -         |    -5.23 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           78 |     2823 | 2026-03-22 | ex-RUBY            | W   | 0.728      | 0.384        | 0.033 (0.009)    | 0.989 (0.277)    | -         |    13.96 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           77 |     2834 | 2026-03-22 | Omega              | W   | 0.726      | -            | -                | -                | -         |    13.26 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           76 |     2865 | 2026-03-21 | STATE              | W   | 0.721      | -            | -                | -                | -         |    14.61 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           75 |     2937 | 2026-03-20 | ENCE               | W   | 0.714      | -            | -                | -                | -         |     8.09 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           74 |     2973 | 2026-03-19 | Ursa               | L   | 0.708      | -            | -                | -                | -         |   -10.55 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           73 |     3070 | 2026-03-17 | IDoPieca           | W   | 0.694      | -            | -                | -                | -         |     1.66 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           72 |     3213 | 2026-03-14 | Sangal             | L   | 0.673      | -            | -                | -                | -         |   -10.29 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           71 |     3297 | 2026-03-12 | ex-RUBY            | L   | 0.661      | -            | -                | -                | -         |    -8.34 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           70 |     3382 | 2026-03-10 | OlyBet             | W   | 0.648      | -            | -                | -                | -         |     5.36 | AdrieN, fr3nd, maaryy, Nami, yvro     |
|           69 |     3391 | 2026-03-10 | WW                 | L   | 0.647      | -            | -                | -                | -         |    -5.70 | maaryy, Melavi, Nami, tomiko, yvro    |
|           68 |     3510 | 2026-03-08 | Omega              | L   | 0.634      | -            | -                | -                | -         |    -7.45 | AdrieN, fr3nd, maaryy, Nami, yvro     |
|           67 |     3518 | 2026-03-08 | Omega              | W   | 0.634      | -            | -                | -                | -         |    12.85 | AdrieN, maaryy, Melavi, Nami, yvro    |
|           66 |     3616 | 2026-03-06 | Ursa               | L   | 0.620      | -            | -                | -                | -         |   -11.60 | AdrieN, maaryy, Melavi, Nami, yvro    |
|           65 |     3630 | 2026-03-06 | GenOne             | L   | 0.619      | -            | -                | -                | -         |   -12.60 | AdrieN, Bambosh, maaryy, Nami, yvro   |
|           64 |     3688 | 2026-03-05 | HAVU               | L   | 0.612      | -            | -                | -                | -         |   -10.90 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           63 |     3693 | 2026-03-05 | ENCE               | L   | 0.612      | -            | -                | -                | -         |   -13.47 | maaryy, Melavi, Nami, tomiko, yvro    |
|           62 |     3711 | 2026-03-04 | Lazer Cats         | L   | 0.608      | -            | -                | -                | -         |   -13.16 | AdrieN, Bambosh, maaryy, Nami, yvro   |
|           61 |     3754 | 2026-03-03 | Lilmix             | W   | 0.601      | -            | -                | -                | -         |     3.98 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           60 |     3824 | 2026-03-02 | Metizport          | L   | 0.593      | -            | -                | -                | -         |    -9.74 | AdrieN, Bambosh, maaryy, Nami, yvro   |
|           59 |     3869 | 2026-03-01 | KOLESIE            | L   | 0.586      | -            | -                | -                | -         |    -6.28 | AdrieN, Bambosh, maaryy, Nami, yvro   |
|           58 |     3899 | 2026-02-28 | INFINITE           | W   | 0.580      | -            | -                | -                | -         |    14.51 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           57 |     3910 | 2026-02-28 | Ursa               | W   | 0.579      | 0.384        | -                | 0.962 (0.214)    | -         |     6.59 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           56 |     3967 | 2026-02-27 | brazylijski luz    | W   | 0.572      | -            | -                | -                | -         |     1.97 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           55 |     3989 | 2026-02-26 | MOUZ NXT           | W   | 0.568      | -            | -                | -                | -         |    10.93 | AdrieN, Bambosh, maaryy, Markoś, yvro |
|           54 |     4052 | 2026-02-25 | SINNERS            | L   | 0.561      | -            | -                | -                | -         |    -1.98 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           53 |     4094 | 2026-02-24 | cirahvi            | W   | 0.554      | -            | -                | -                | -         |     3.86 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           52 |     4136 | 2026-02-23 | home               | W   | 0.549      | -            | -                | -                | -         |     1.08 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           51 |     4144 | 2026-02-23 | ENCE               | L   | 0.548      | -            | -                | -                | -         |   -12.86 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           50 |     4147 | 2026-02-23 | ex-RUBY            | W   | 0.547      | 0.435        | 0.033 (0.008)    | 0.989 (0.235)    | -         |     8.13 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           49 |     4166 | 2026-02-23 | brazylijski luz    | L   | 0.545      | -            | -                | -                | -         |   -15.48 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           48 |     4187 | 2026-02-22 | SPARTA             | L   | 0.541      | -            | -                | -                | -         |    -5.63 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           47 |     4283 | 2026-02-21 | VP.Prodigy         | W   | 0.533      | -            | -                | -                | -         |     1.78 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           46 |     4318 | 2026-02-20 | Alliance           | L   | 0.527      | -            | -                | -                | -         |    -1.94 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           45 |     4323 | 2026-02-20 | MOUZ NXT           | L   | 0.527      | -            | -                | -                | -         |    -6.59 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           44 |     4340 | 2026-02-20 | ECSTATIC           | W   | 0.526      | 0.435        | 0.040 (0.009)    | -                | -         |    10.54 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           43 |     4382 | 2026-02-19 | SPARTA             | W   | 0.520      | 0.435        | 0.038 (0.009)    | -                | -         |    11.40 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           42 |     4415 | 2026-02-18 | ARCRED             | W   | 0.515      | 0.435        | 0.025 (0.006)    | -                | -         |    11.93 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           41 |     4441 | 2026-02-18 | KOLESIE            | W   | 0.513      | 0.435        | 0.033 (0.007)    | -                | -         |    11.21 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           40 |     4448 | 2026-02-18 | Hashiras           | W   | 0.512      | -            | -                | -                | -         |     3.61 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           39 |     4497 | 2026-02-17 | Omega              | L   | 0.507      | -            | -                | -                | -         |    -4.69 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           38 |     4533 | 2026-02-16 | ex-Zero Tenacity   | W   | 0.500      | -            | -                | -                | -         |     2.26 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           37 |     4547 | 2026-02-16 | Sangal             | L   | 0.499      | -            | -                | -                | -         |   -13.20 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           36 |     4593 | 2026-02-15 | ASTRAL             | W   | 0.494      | -            | -                | -                | -         |     9.27 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           35 |     4624 | 2026-02-14 | 1win               | W   | 0.488      | 0.384        | 0.088 (0.016)    | -                | -         |    12.83 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           34 |     4697 | 2026-02-13 | ENCE               | L   | 0.481      | -            | -                | -                | -         |   -11.60 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           33 |     4707 | 2026-02-13 | Phantom            | W   | 0.480      | -            | -                | -                | -         |    10.27 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           32 |     4793 | 2026-02-11 | FAVBET             | L   | 0.467      | -            | -                | -                | -         |    -9.23 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           31 |     4854 | 2026-02-09 | BIG EQUIPA         | W   | 0.454      | -            | -                | -                | -         |     1.46 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           30 |     4905 | 2026-02-07 | Aurora Young Blud  | W   | 0.441      | -            | -                | -                | -         |     1.65 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           29 |     4911 | 2026-02-07 | MASONIC            | L   | 0.440      | -            | -                | -                | -         |    -5.20 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           28 |     4942 | 2026-02-06 | cirahvi            | W   | 0.434      | -            | -                | -                | -         |     2.90 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           27 |     4971 | 2026-02-05 | SPARTA             | L   | 0.428      | -            | -                | -                | -         |    -3.40 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           26 |     4994 | 2026-02-04 | 9INE               | L   | 0.421      | -            | -                | -                | -         |    -7.61 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           25 |     4997 | 2026-02-04 | cirahvi            | W   | 0.420      | -            | -                | -                | -         |     2.66 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           24 |     5079 | 2026-02-01 | ex-Fingers Crossed | W   | 0.401      | -            | -                | -                | -         |     1.44 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           23 |     5130 | 2026-01-31 | 777                | W   | 0.393      | -            | -                | -                | -         |     0.38 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           22 |     5167 | 2026-01-30 | AM                 | W   | 0.386      | -            | -                | -                | -         |     1.79 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           21 |     5235 | 2026-01-27 | Johnny Speeds      | W   | 0.366      | 0.435        | 0.048 (0.008)    | -                | -         |     9.58 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           20 |     5254 | 2026-01-26 | KOLESIE            | L   | 0.360      | -            | -                | -                | -         |    -3.21 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           19 |     5312 | 2026-01-24 | cirahvi            | L   | 0.347      | -            | -                | -                | -         |    -8.67 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           18 |     5314 | 2026-01-24 | Acend              | W   | 0.346      | -            | -                | -                | -         |     9.00 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           17 |     5403 | 2026-01-22 | illwill            | W   | 0.334      | -            | -                | -                | -         |     6.61 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           16 |     5463 | 2026-01-21 | MOUZ NXT           | W   | 0.326      | -            | -                | -                | -         |     6.37 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           15 |     5552 | 2026-01-17 | GenOne             | L   | 0.301      | -            | -                | -                | -         |    -6.07 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           14 |     5622 | 2026-01-16 | MASONIC            | W   | 0.293      | -            | -                | -                | -         |     6.54 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           13 |     5677 | 2026-01-15 | hindsight          | W   | 0.285      | -            | -                | -                | -         |     0.83 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           12 |     5691 | 2026-01-14 | STATE              | L   | 0.280      | -            | -                | -                | -         |    -2.18 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           11 |     5710 | 2026-01-13 | ALLINNERS          | W   | 0.273      | -            | -                | -                | -         |     1.23 | AdrieN, maaryy, Markoś, Nami, yvro    |
|           10 |     5719 | 2026-01-12 | Eternal Fire       | L   | 0.267      | -            | -                | -                | -         |    -7.71 | AdrieN, maaryy, Markoś, Nami, yvro    |
|            9 |     5752 | 2026-01-09 | Universe           | W   | 0.247      | -            | -                | -                | -         |     0.26 | AdrieN, maaryy, Markoś, Nami, yvro    |
|            8 |     5753 | 2026-01-09 | Bebop              | L   | 0.246      | -            | -                | -                | -         |    -7.15 | AdrieN, maaryy, Markoś, Nami, tomiko  |
|            7 |     5765 | 2026-01-05 | STATE              | W   | 0.219      | -            | -                | -                | -         |     5.27 | AdrieN, maaryy, Markoś, Nami, yvro    |
|            6 |     5857 | 2025-12-22 | FORZE Reload       | L   | 0.128      | -            | -                | -                | -         |    -3.51 | AdrieN, maaryy, Markoś, Nami, yvro    |
|            5 |     5862 | 2025-12-21 | Phantom            | L   | 0.121      | -            | -                | -                | -         |    -0.99 | AdrieN, maaryy, Markoś, Nami, yvro    |
|            4 |     5866 | 2025-12-21 | Persona Grata      | W   | 0.120      | -            | -                | -                | 1 (0.120) |     0.92 | AdrieN, maaryy, Markoś, Nami, yvro    |
|            3 |     5875 | 2025-12-21 | Project 91         | W   | 0.118      | -            | -                | -                | 1 (0.118) |     0.63 | AdrieN, maaryy, Markoś, Nami, yvro    |
|            2 |     5884 | 2025-12-20 | Horizon            | W   | 0.114      | -            | -                | -                | 1 (0.114) |     0.12 | AdrieN, maaryy, Markoś, Nami, yvro    |
|            1 |     5896 | 2025-12-20 | Persona Grata      | L   | 0.113      | -            | -                | -                | -         |    -2.71 | AdrieN, maaryy, Markoś, Nami, yvro    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,961.40)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-28 |      1.000 | $2,749.00      | $2,749.00       |
| 2026-05-15 |      1.000 | $1,250.00      | $1,250.00       |
| 2026-04-20 |      0.920 | $1,767.00      | $1,626.44       |
| 2026-04-09 |      0.848 | $1,750.00      | $1,483.16       |
| 2026-03-27 |      0.761 | $750.00        | $570.66         |
| 2026-03-01 |      0.588 | $1,500.00      | $881.36         |
| 2026-02-20 |      0.527 | $10,000.00     | $5,274.26       |
| 2025-12-21 |      0.121 | $1,045.00      | $126.52         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
