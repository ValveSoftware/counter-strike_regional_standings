### Roster Details<br />
Team Name: los kogutos<br />
Roster: AMSALEM, maaryy, mASKED, mhL, tomiko<br />
Global Rank: [70](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [51]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  986.8<br />
<br />
Final Rank Value (986.8) = Starting Rank Value (1247.5) + Head To Head Adjustments (-260.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.454[<sup>1</sup>](#table2)
- Bounty Collected: 0.415[<sup>2</sup>](#table1)
- Opponent Network: 0.231[<sup>2</sup>](#table1)
- LAN Wins: 0.670[<sup>2</sup>](#table1)

The average of these factors is 0.442<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1247.5
- 400 + ( ( 0.442 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 1247.5


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
|          108 |        6 | 2024-12-18 | WOPA              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.59 | AMSALEM, maaryy, mASKED, mhL, tomiko  |
|          107 |      621 | 2024-11-16 | Partizan          | L   | 0.986      | -            | -                | -                | -         |    -7.07 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|          106 |      652 | 2024-11-15 | Mindfreak         | W   | 0.979      | -            | -                | -                | 1 (0.979) |     5.30 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|          105 |      658 | 2024-11-15 | Turkey            | W   | 0.978      | -            | -                | -                | 1 (0.978) |     5.64 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|          104 |      671 | 2024-11-14 | Metizport         | L   | 0.974      | -            | -                | -                | -         |    -6.20 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|          103 |      718 | 2024-11-13 | Canada            | W   | 0.966      | -            | -                | -                | 1 (0.966) |     3.88 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|          102 |      723 | 2024-11-13 | Norway            | W   | 0.965      | -            | -                | -                | 1 (0.965) |     4.54 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|          101 |      846 | 2024-11-08 | Rebels            | L   | 0.932      | -            | -                | -                | -         |   -17.47 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|          100 |      883 | 2024-11-06 | SINNERS           | W   | 0.918      | 0.371        | 0.082 (0.028)    | 0.826 (0.281)    | 0 (0.000) |    19.15 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           99 |      894 | 2024-11-05 | OG                | L   | 0.914      | -            | -                | -                | -         |   -13.23 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           98 |      901 | 2024-11-05 | 9 Pandas          | L   | 0.912      | -            | -                | -                | -         |    -7.27 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           97 |      943 | 2024-11-03 | Sampi             | W   | 0.898      | -            | -                | -                | 0 (0.000) |    13.63 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           96 |      956 | 2024-11-02 | Zero Tenacity     | L   | 0.894      | -            | -                | -                | -         |   -10.77 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           95 |      966 | 2024-11-02 | Into the Breach   | L   | 0.892      | -            | -                | -                | -         |   -14.18 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           94 |      986 | 2024-11-01 | Sashi             | L   | 0.885      | -            | -                | -                | -         |   -12.24 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           93 |     1022 | 2024-10-30 | Into the Breach   | L   | 0.873      | -            | -                | -                | -         |   -14.28 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           92 |     1050 | 2024-10-29 | Passion UA        | W   | 0.865      | 0.371        | 0.115 (0.037)    | 1.000 (0.321)    | -         |    16.87 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           91 |     1071 | 2024-10-27 | Illuminar         | W   | 0.853      | 0.334        | -                | 0.509 (0.145)    | 1 (0.853) |    11.60 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           90 |     1076 | 2024-10-27 | Passion UA        | W   | 0.852      | 0.334        | 0.115 (0.033)    | 1.000 (0.285)    | 1 (0.852) |    18.24 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           89 |     1098 | 2024-10-26 | Illuminar         | L   | 0.846      | -            | -                | -                | -         |   -14.24 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           88 |     1112 | 2024-10-26 | ex-Enterprise     | L   | 0.845      | -            | -                | -                | -         |   -18.76 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           87 |     1114 | 2024-10-26 | AntyDPM           | W   | 0.845      | -            | -                | -                | 1 (0.845) |     0.83 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           86 |     1129 | 2024-10-25 | Sampi             | L   | 0.838      | -            | -                | -                | -         |   -14.79 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           85 |     1213 | 2024-10-19 | Nexus             | L   | 0.800      | -            | -                | -                | -         |    -8.27 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           84 |     1274 | 2024-10-17 | ECLOT             | W   | 0.785      | 0.143        | 0.230 (0.026)    | -                | -         |    18.02 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           83 |     1369 | 2024-10-12 | Sampi             | W   | 0.752      | -            | -                | -                | -         |    10.78 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           82 |     1383 | 2024-10-10 | 500 Rush          | W   | 0.741      | -            | -                | -                | -         |     2.68 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           81 |     1386 | 2024-10-10 | Insomnia          | W   | 0.740      | -            | -                | -                | -         |     2.64 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           80 |     1389 | 2024-10-10 | GUN5              | W   | 0.739      | -            | -                | -                | -         |    14.58 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           79 |     1537 | 2024-10-05 | 500               | L   | 0.707      | -            | -                | -                | -         |   -12.96 | bnox, maaryy, Markoś, mASKED, tomiko  |
|           78 |     1545 | 2024-10-05 | Passion UA        | L   | 0.706      | -            | -                | -                | -         |    -6.73 | bnox, maaryy, Markoś, mASKED, tomiko  |
|           77 |     1590 | 2024-10-04 | G2 Ares           | L   | 0.698      | -            | -                | -                | -         |   -19.82 | bnox, maaryy, Markoś, mASKED, tomiko  |
|           76 |     1610 | 2024-10-03 | SINNERS           | W   | 0.694      | 0.435        | 0.082 (0.025)    | 0.826 (0.249)    | -         |    13.20 | bnox, maaryy, Markoś, mASKED, tomiko  |
|           75 |     1618 | 2024-10-03 | ENCE Academy      | L   | 0.693      | -            | -                | -                | -         |   -18.37 | bnox, maaryy, Markoś, mASKED, tomiko  |
|           74 |     1655 | 2024-10-02 | GUN5              | L   | 0.686      | -            | -                | -                | -         |    -9.82 | bnox, maaryy, Markoś, mASKED, tomiko  |
|           73 |     1658 | 2024-10-02 | Nexus             | W   | 0.685      | 0.333        | 0.326 (0.074)    | 0.848 (0.194)    | -         |    15.15 | bnox, maaryy, Markoś, mASKED, tomiko  |
|           72 |     1663 | 2024-10-02 | DRILLAS           | L   | 0.685      | -            | -                | -                | -         |   -15.57 | bnox, maaryy, Markoś, mASKED, tomiko  |
|           71 |     1705 | 2024-10-01 | Aurora Young Blud | W   | 0.679      | 0.384        | -                | 0.927 (0.242)    | -         |     7.60 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           70 |     1716 | 2024-10-01 | Johnny Speeds     | W   | 0.678      | -            | -                | -                | -         |    11.29 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           69 |     1725 | 2024-09-30 | GUN5              | L   | 0.674      | -            | -                | -                | -         |    -9.87 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           68 |     1729 | 2024-09-30 | CYBERSHOKE        | W   | 0.673      | 0.435        | -                | 0.738 (0.216)    | -         |     8.27 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           67 |     1757 | 2024-09-29 | FAVBET            | L   | 0.666      | -            | -                | -                | -         |   -13.72 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           66 |     1793 | 2024-09-28 | Monte Gen         | W   | 0.659      | -            | -                | -                | -         |     7.26 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           65 |     1892 | 2024-09-26 | Gaimin Gladiators | L   | 0.645      | -            | -                | -                | -         |   -11.58 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           64 |     1934 | 2024-09-25 | TALON             | W   | 0.639      | -            | -                | -                | -         |     1.98 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           63 |     1945 | 2024-09-25 | kONO              | W   | 0.638      | -            | -                | -                | -         |     5.55 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           62 |     1994 | 2024-09-24 | DMS               | L   | 0.631      | -            | -                | -                | -         |   -16.21 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           61 |     2019 | 2024-09-23 | ex-Enterprise     | L   | 0.627      | -            | -                | -                | -         |   -15.25 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           60 |     2076 | 2024-09-21 | ECSTATIC          | L   | 0.612      | -            | -                | -                | -         |   -12.37 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           59 |     2083 | 2024-09-21 | TSM               | L   | 0.611      | -            | -                | -                | -         |   -12.50 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           58 |     2105 | 2024-09-20 | Insilio           | L   | 0.605      | -            | -                | -                | -         |   -14.24 | bnox, maaryy, Markoś, mASKED, tomiko  |
|           57 |     2164 | 2024-09-18 | CYBERSHOKE        | L   | 0.593      | -            | -                | -                | -         |   -13.86 | bnox, maaryy, Markoś, mASKED, tomiko  |
|           56 |     2216 | 2024-09-16 | 9 Pandas          | W   | 0.579      | 0.435        | 0.098 (0.025)    | 0.871 (0.219)    | -         |     9.99 | bnox, maaryy, Markoś, mASKED, tomiko  |
|           55 |     2249 | 2024-09-15 | Partizan          | W   | 0.572      | -            | -                | -                | -         |    11.95 | bnox, maaryy, Markoś, mASKED, tomiko  |
|           54 |     2513 | 2024-09-06 | SovvyKiNG         | W   | 0.512      | -            | -                | -                | -         |     1.05 | bnox, maaryy, Markoś, mASKED, tomiko  |
|           53 |     2529 | 2024-09-05 | Nemiga            | L   | 0.507      | -            | -                | -                | -         |    -4.14 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           52 |     2615 | 2024-09-03 | SovvyKiNG         | W   | 0.492      | -            | -                | -                | -         |     1.06 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           51 |     2639 | 2024-09-02 | Alliance          | L   | 0.486      | -            | -                | -                | -         |   -11.05 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           50 |     2671 | 2024-08-31 | Insilio           | L   | 0.474      | -            | -                | -                | -         |   -12.28 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           49 |     2678 | 2024-08-31 | Nexus             | W   | 0.472      | 0.384        | 0.326 (0.059)    | 0.848 (0.154)    | -         |    11.95 | bnox, maaryy, mASKED, mwlky, tomiko   |
|           48 |     2740 | 2024-08-29 | Revenant          | W   | 0.459      | -            | -                | -                | -         |     2.69 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           47 |     2896 | 2024-08-26 | EYEBALLERS        | W   | 0.441      | -            | -                | -                | -         |     1.79 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|           46 |     2920 | 2024-08-26 | CYBERSHOKE        | L   | 0.439      | -            | -                | -                | -         |   -10.63 | bnox, maaryy, Markoś, mASKED, tomiko  |
|           45 |     2970 | 2024-08-25 | Zero Tenacity     | L   | 0.431      | -            | -                | -                | -         |    -8.38 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           44 |     2992 | 2024-08-24 | ECLOT             | L   | 0.425      | -            | -                | -                | -         |    -3.33 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           43 |     3009 | 2024-08-23 | Rebels            | L   | 0.420      | -            | -                | -                | -         |   -10.67 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           42 |     3015 | 2024-08-23 | BIG               | L   | 0.419      | -            | -                | -                | -         |    -2.50 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           41 |     3047 | 2024-08-22 | SAW               | L   | 0.412      | -            | -                | -                | -         |    -1.76 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           40 |     3074 | 2024-08-21 | RUBY              | W   | 0.407      | -            | -                | -                | -         |     0.58 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           39 |     3101 | 2024-08-21 | Nemiga            | W   | 0.406      | 0.143        | 0.455 (0.026)    | -                | -         |     9.35 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           38 |     3116 | 2024-08-21 | AMKAL             | W   | 0.405      | -            | -                | -                | -         |     2.09 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           37 |     3154 | 2024-08-20 | ECSTATIC          | L   | 0.398      | -            | -                | -                | -         |    -9.26 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           36 |     3198 | 2024-08-18 | Endpoint          | L   | 0.388      | -            | -                | -                | -         |    -9.62 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           35 |     3205 | 2024-08-18 | Aurora Young Blud | L   | 0.385      | -            | -                | -                | -         |    -9.34 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           34 |     3250 | 2024-08-16 | Monte Gen         | W   | 0.373      | -            | -                | -                | -         |     1.50 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           33 |     3290 | 2024-08-15 | Insilio           | L   | 0.365      | -            | -                | -                | -         |   -10.00 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           32 |     3305 | 2024-08-14 | Preasy            | W   | 0.359      | -            | -                | -                | -         |     0.14 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           31 |     3326 | 2024-08-13 | Illuminar         | W   | 0.354      | -            | -                | -                | -         |     0.76 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           30 |     3345 | 2024-08-13 | SovvyKiNG         | W   | 0.352      | -            | -                | -                | -         |     0.45 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           29 |     3389 | 2024-08-12 | Alliance          | L   | 0.346      | -            | -                | -                | -         |    -8.76 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           28 |     3396 | 2024-08-12 | Aurora Young Blud | L   | 0.345      | -            | -                | -                | -         |    -8.64 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           27 |     3473 | 2024-08-09 | TSM               | L   | 0.324      | -            | -                | -                | -         |    -8.34 | bnox, maaryy, mASKED, mwlky, tomiko   |
|           26 |     3484 | 2024-08-08 | Qiang             | L   | 0.320      | -            | -                | -                | -         |    -9.61 | bnox, maaryy, mASKED, mwlky, tomiko   |
|           25 |     3498 | 2024-08-08 | Young Ninjas      | L   | 0.318      | -            | -                | -                | -         |    -9.39 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           24 |     3537 | 2024-08-07 | Verdant           | W   | 0.312      | -            | -                | -                | -         |     1.45 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           23 |     3549 | 2024-08-07 | 9INE              | L   | 0.311      | -            | -                | -                | -         |    -7.87 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           22 |     3579 | 2024-08-06 | Sangal            | L   | 0.306      | -            | -                | -                | -         |    -4.00 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           21 |     3591 | 2024-08-06 | FLuffy Gangsters  | W   | 0.305      | -            | -                | -                | -         |     0.65 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           20 |     3596 | 2024-08-05 | B8                | W   | 0.300      | -            | -                | -                | -         |     4.12 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           19 |     3670 | 2024-08-03 | Nemiga            | W   | 0.286      | 0.435        | 0.455 (0.057)    | -                | -         |     5.53 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           18 |     3749 | 2024-08-01 | K27               | W   | 0.272      | -            | -                | -                | -         |     0.25 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           17 |     3801 | 2024-07-31 | Endpoint          | L   | 0.266      | -            | -                | -                | -         |    -7.31 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           16 |     3807 | 2024-07-31 | 9INE              | W   | 0.265      | -            | -                | -                | -         |     1.68 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           15 |     3849 | 2024-07-30 | PARIVISION        | L   | 0.258      | -            | -                | -                | -         |    -6.80 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           14 |     3875 | 2024-07-29 | HAVU              | W   | 0.252      | -            | -                | -                | -         |     0.14 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           13 |     3893 | 2024-07-28 | BC.Game           | W   | 0.248      | -            | -                | -                | -         |     0.91 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           12 |     3946 | 2024-07-26 | SovvyKiNG         | W   | 0.234      | -            | -                | -                | -         |     0.23 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           11 |     3953 | 2024-07-26 | Sangal            | L   | 0.233      | -            | -                | -                | -         |    -3.27 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           10 |     3991 | 2024-07-25 | Into the Breach   | L   | 0.227      | -            | -                | -                | -         |    -6.16 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|            9 |     4037 | 2024-07-24 | GameAgents        | L   | 0.218      | -            | -                | -                | -         |    -6.75 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|            8 |     4089 | 2024-07-22 | Metizport         | W   | 0.207      | -            | -                | -                | -         |     4.41 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|            7 |     4162 | 2024-07-20 | GUN5              | W   | 0.192      | -            | -                | -                | -         |     1.55 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|            6 |     4249 | 2024-07-18 | INFINITE          | L   | 0.179      | -            | -                | -                | -         |    -5.54 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|            5 |     4304 | 2024-07-17 | ALTERNATE aTTaX   | W   | 0.174      | -            | -                | -                | -         |     2.05 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|            4 |     4380 | 2024-07-16 | Passion UA        | L   | 0.164      | -            | -                | -                | -         |    -2.78 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|            3 |     4415 | 2024-07-15 | SovvyKiNG         | L   | 0.160      | -            | -                | -                | -         |    -4.89 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|            2 |     4442 | 2024-07-14 | Insilio           | L   | 0.152      | -            | -                | -                | -         |    -4.37 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|            1 |     4506 | 2024-07-10 | Passion UA        | W   | 0.124      | -            | -                | -                | -         |     1.78 | bnox, maaryy, mASKED, SpavaQu, tomiko |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,677.66)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-17 |      0.993 | $12,500.00     | $12,417.63      |
| 2024-10-27 |      0.853 | $5,100.00      | $4,352.42       |
| 2024-10-26 |      0.847 | $252.00        | $213.43         |
| 2024-10-06 |      0.714 | $2,000.00      | $1,428.17       |
| 2024-10-03 |      0.693 | $2,500.00      | $1,732.66       |
| 2024-08-06 |      0.307 | $5,000.00      | $1,533.36       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
