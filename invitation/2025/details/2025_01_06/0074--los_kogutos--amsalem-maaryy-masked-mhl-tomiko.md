### Roster Details<br />
Team Name: los kogutos<br />
Roster: AMSALEM, maaryy, mASKED, mhL, tomiko<br />
Global Rank: [74](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_06.md)<br />
Regional Rank: [53]( ../../standings_europe_2025_01_06.md)<br />
<br />
Final Rank Value:  972.8<br />
<br />
Final Rank Value (972.8) = Starting Rank Value (1222.2) + Head To Head Adjustments (-249.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.462[<sup>1</sup>](#table2)
- Bounty Collected: 0.401[<sup>2</sup>](#table1)
- Opponent Network: 0.179[<sup>2</sup>](#table1)
- LAN Wins: 0.621[<sup>2</sup>](#table1)

The average of these factors is 0.416<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1222.2
- 400 + ( ( 0.416 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 1222.2


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
|          110 |       44 | 2024-12-23 | WOPA              | L   | 1.000      | -            | -                | -                | -         |   -17.46 | AMSALEM, maaryy, mASKED, mhL, tomiko     |
|          109 |       57 | 2024-12-22 | Astralis Talent   | W   | 1.000      | 0.333        | -                | 0.442 (0.147)    | 0 (0.000) |     6.59 | AMSALEM, maaryy, mASKED, shushan, tomiko |
|          108 |       94 | 2024-12-19 | ENCE Academy      | L   | 1.000      | -            | -                | -                | -         |   -23.47 | AMSALEM, maaryy, mASKED, mhL, tomiko     |
|          107 |      104 | 2024-12-18 | WOPA              | W   | 1.000      | 0.333        | -                | 0.556 (0.185)    | 0 (0.000) |    11.73 | AMSALEM, maaryy, mASKED, mhL, tomiko     |
|          106 |      719 | 2024-11-16 | Partizan          | L   | 0.860      | -            | -                | -                | -         |    -6.59 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|          105 |      750 | 2024-11-15 | Mindfreak         | W   | 0.852      | -            | -                | -                | 1 (0.852) |     4.32 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|          104 |      756 | 2024-11-15 | Turkey            | W   | 0.852      | -            | -                | -                | 1 (0.852) |     4.39 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|          103 |      769 | 2024-11-14 | Metizport         | L   | 0.848      | -            | -                | -                | -         |    -5.17 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|          102 |      816 | 2024-11-13 | Canada            | W   | 0.840      | -            | -                | -                | 1 (0.840) |     3.21 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|          101 |      821 | 2024-11-13 | Norway            | W   | 0.839      | -            | -                | -                | 1 (0.839) |     3.53 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|          100 |      944 | 2024-11-08 | Rebels            | L   | 0.806      | -            | -                | -                | -         |   -16.97 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           99 |      981 | 2024-11-06 | SINNERS           | W   | 0.792      | 0.371        | 0.082 (0.024)    | 0.682 (0.200)    | 0 (0.000) |    15.59 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           98 |      992 | 2024-11-05 | OG                | L   | 0.787      | -            | -                | -                | -         |   -12.87 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           97 |      999 | 2024-11-05 | 9 Pandas          | L   | 0.786      | -            | -                | -                | -         |    -7.26 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           96 |     1041 | 2024-11-03 | Sampi             | W   | 0.772      | -            | -                | -                | -         |    11.14 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           95 |     1054 | 2024-11-02 | Zero Tenacity     | L   | 0.767      | -            | -                | -                | -         |   -10.55 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           94 |     1064 | 2024-11-02 | Into the Breach   | L   | 0.765      | -            | -                | -                | -         |   -13.54 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           93 |     1084 | 2024-11-01 | Sashi             | L   | 0.759      | -            | -                | -                | -         |   -11.69 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           92 |     1120 | 2024-10-30 | Into the Breach   | L   | 0.747      | -            | -                | -                | -         |   -13.66 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           91 |     1148 | 2024-10-29 | Passion UA        | W   | 0.739      | 0.371        | 0.115 (0.032)    | 0.885 (0.242)    | -         |    14.02 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           90 |     1169 | 2024-10-27 | Illuminar         | W   | 0.727      | -            | -                | -                | 1 (0.727) |     9.19 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           89 |     1174 | 2024-10-27 | Passion UA        | W   | 0.726      | 0.334        | 0.115 (0.028)    | 0.885 (0.215)    | 1 (0.726) |    14.94 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           88 |     1196 | 2024-10-26 | Illuminar         | L   | 0.720      | -            | -                | -                | -         |   -13.09 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           87 |     1210 | 2024-10-26 | ex-Enterprise     | L   | 0.719      | -            | -                | -                | -         |   -16.77 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           86 |     1212 | 2024-10-26 | AntyDPM           | W   | 0.719      | -            | -                | -                | 1 (0.719) |     0.60 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           85 |     1227 | 2024-10-25 | Sampi             | L   | 0.712      | -            | -                | -                | -         |   -13.36 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           84 |     1311 | 2024-10-19 | Nexus             | L   | 0.673      | -            | -                | -                | -         |    -5.07 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           83 |     1372 | 2024-10-17 | ECLOT             | W   | 0.659      | 0.143        | 0.267 (0.025)    | -                | -         |    15.28 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           82 |     1467 | 2024-10-12 | Sampi             | W   | 0.626      | -            | -                | -                | -         |     8.30 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           81 |     1481 | 2024-10-10 | 500 Rush          | W   | 0.615      | -            | -                | -                | -         |     1.96 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           80 |     1484 | 2024-10-10 | Insomnia          | W   | 0.614      | -            | -                | -                | -         |     1.95 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           79 |     1487 | 2024-10-10 | GUN5              | W   | 0.613      | -            | -                | -                | -         |    11.65 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           78 |     1635 | 2024-10-05 | 500               | L   | 0.581      | -            | -                | -                | -         |   -11.38 | bnox, maaryy, Markoś, mASKED, tomiko     |
|           77 |     1643 | 2024-10-05 | Passion UA        | L   | 0.580      | -            | -                | -                | -         |    -6.18 | bnox, maaryy, Markoś, mASKED, tomiko     |
|           76 |     1688 | 2024-10-04 | G2 Ares           | L   | 0.571      | -            | -                | -                | -         |   -16.60 | bnox, maaryy, Markoś, mASKED, tomiko     |
|           75 |     1708 | 2024-10-03 | SINNERS           | W   | 0.568      | 0.435        | 0.082 (0.020)    | 0.682 (0.168)    | -         |     9.82 | bnox, maaryy, Markoś, mASKED, tomiko     |
|           74 |     1716 | 2024-10-03 | ENCE Academy      | L   | 0.566      | -            | -                | -                | -         |   -15.07 | bnox, maaryy, Markoś, mASKED, tomiko     |
|           73 |     1753 | 2024-10-02 | GUN5              | L   | 0.560      | -            | -                | -                | -         |    -8.26 | bnox, maaryy, Markoś, mASKED, tomiko     |
|           72 |     1756 | 2024-10-02 | Nexus             | W   | 0.559      | 0.333        | 0.372 (0.069)    | 0.763 (0.142)    | -         |    13.83 | bnox, maaryy, Markoś, mASKED, tomiko     |
|           71 |     1761 | 2024-10-02 | DRILLAS           | L   | 0.558      | -            | -                | -                | -         |   -13.45 | bnox, maaryy, Markoś, mASKED, tomiko     |
|           70 |     1803 | 2024-10-01 | Aurora Young Blud | W   | 0.553      | 0.384        | -                | 0.847 (0.180)    | -         |     5.80 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           69 |     1814 | 2024-10-01 | Johnny Speeds     | W   | 0.552      | -            | -                | -                | -         |     8.43 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           68 |     1823 | 2024-09-30 | GUN5              | L   | 0.547      | -            | -                | -                | -         |    -8.23 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           67 |     1827 | 2024-09-30 | CYBERSHOKE        | W   | 0.546      | 0.435        | -                | 0.659 (0.156)    | -         |     5.12 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           66 |     1855 | 2024-09-29 | FAVBET            | L   | 0.539      | -            | -                | -                | -         |   -12.06 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           65 |     1891 | 2024-09-28 | Monte Gen         | W   | 0.533      | -            | -                | -                | -         |     4.68 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           64 |     1990 | 2024-09-26 | Gaimin Gladiators | L   | 0.519      | -            | -                | -                | -         |   -10.29 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           63 |     2032 | 2024-09-25 | TALON             | W   | 0.513      | -            | -                | -                | -         |     1.22 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           62 |     2043 | 2024-09-25 | kONO              | W   | 0.512      | -            | -                | -                | -         |     4.67 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           61 |     2092 | 2024-09-24 | DMS               | L   | 0.505      | -            | -                | -                | -         |   -13.71 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           60 |     2117 | 2024-09-23 | ex-Enterprise     | L   | 0.501      | -            | -                | -                | -         |   -12.62 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           59 |     2174 | 2024-09-21 | ECSTATIC          | L   | 0.486      | -            | -                | -                | -         |   -10.29 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           58 |     2181 | 2024-09-21 | TSM               | L   | 0.485      | -            | -                | -                | -         |   -11.19 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           57 |     2203 | 2024-09-20 | Insilio           | L   | 0.479      | -            | -                | -                | -         |   -12.27 | bnox, maaryy, Markoś, mASKED, tomiko     |
|           56 |     2262 | 2024-09-18 | CYBERSHOKE        | L   | 0.467      | -            | -                | -                | -         |   -11.79 | bnox, maaryy, Markoś, mASKED, tomiko     |
|           55 |     2314 | 2024-09-16 | 9 Pandas          | W   | 0.453      | 0.435        | 0.108 (0.021)    | 0.754 (0.149)    | -         |     7.09 | bnox, maaryy, Markoś, mASKED, tomiko     |
|           54 |     2347 | 2024-09-15 | Partizan          | W   | 0.446      | -            | -                | -                | -         |     8.79 | bnox, maaryy, Markoś, mASKED, tomiko     |
|           53 |     2611 | 2024-09-06 | SovvyKiNG         | W   | 0.386      | -            | -                | -                | -         |     0.56 | bnox, maaryy, Markoś, mASKED, tomiko     |
|           52 |     2627 | 2024-09-05 | Nemiga            | L   | 0.381      | -            | -                | -                | -         |    -3.65 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           51 |     2713 | 2024-09-03 | SovvyKiNG         | W   | 0.366      | -            | -                | -                | -         |     0.56 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           50 |     2737 | 2024-09-02 | Alliance          | L   | 0.360      | -            | -                | -                | -         |    -8.43 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           49 |     2769 | 2024-08-31 | Insilio           | L   | 0.348      | -            | -                | -                | -         |    -9.43 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           48 |     2776 | 2024-08-31 | Nexus             | W   | 0.346      | 0.384        | 0.372 (0.049)    | -                | -         |     9.11 | bnox, maaryy, mASKED, mwlky, tomiko      |
|           47 |     2838 | 2024-08-29 | Revenant          | W   | 0.333      | -            | -                | -                | -         |     1.29 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           46 |     2994 | 2024-08-26 | EYEBALLERS        | W   | 0.314      | -            | -                | -                | -         |     1.14 | bnox, fr3nd, maaryy, mASKED, tomiko      |
|           45 |     3018 | 2024-08-26 | CYBERSHOKE        | L   | 0.313      | -            | -                | -                | -         |    -8.10 | bnox, maaryy, Markoś, mASKED, tomiko     |
|           44 |     3068 | 2024-08-25 | Zero Tenacity     | L   | 0.305      | -            | -                | -                | -         |    -6.33 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           43 |     3090 | 2024-08-24 | ECLOT             | L   | 0.298      | -            | -                | -                | -         |    -2.48 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           42 |     3107 | 2024-08-23 | Rebels            | L   | 0.294      | -            | -                | -                | -         |    -7.89 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           41 |     3113 | 2024-08-23 | BIG               | L   | 0.293      | -            | -                | -                | -         |    -1.96 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           40 |     3145 | 2024-08-22 | SAW               | L   | 0.286      | -            | -                | -                | -         |    -1.88 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           39 |     3172 | 2024-08-21 | RUBY              | W   | 0.281      | -            | -                | -                | -         |     0.33 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           38 |     3199 | 2024-08-21 | Nemiga            | W   | 0.279      | 0.143        | 0.491 (0.020)    | -                | -         |     6.01 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           37 |     3214 | 2024-08-21 | AMKAL             | W   | 0.279      | -            | -                | -                | -         |     1.38 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           36 |     3252 | 2024-08-20 | ECSTATIC          | L   | 0.272      | -            | -                | -                | -         |    -6.40 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           35 |     3296 | 2024-08-18 | Endpoint          | L   | 0.261      | -            | -                | -                | -         |    -6.89 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           34 |     3303 | 2024-08-18 | Aurora Young Blud | L   | 0.259      | -            | -                | -                | -         |    -6.33 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           33 |     3348 | 2024-08-16 | Monte Gen         | W   | 0.246      | -            | -                | -                | -         |     0.95 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           32 |     3388 | 2024-08-15 | Insilio           | L   | 0.239      | -            | -                | -                | -         |    -6.70 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           31 |     3403 | 2024-08-14 | Preasy            | W   | 0.233      | -            | -                | -                | -         |     0.09 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           30 |     3424 | 2024-08-13 | Illuminar         | W   | 0.228      | -            | -                | -                | -         |     0.42 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           29 |     3443 | 2024-08-13 | SovvyKiNG         | W   | 0.226      | -            | -                | -                | -         |     0.23 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           28 |     3487 | 2024-08-12 | Alliance          | L   | 0.220      | -            | -                | -                | -         |    -5.55 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           27 |     3494 | 2024-08-12 | Aurora Young Blud | L   | 0.219      | -            | -                | -                | -         |    -5.46 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           26 |     3571 | 2024-08-09 | TSM               | L   | 0.198      | -            | -                | -                | -         |    -5.28 | bnox, maaryy, mASKED, mwlky, tomiko      |
|           25 |     3582 | 2024-08-08 | Qiang             | L   | 0.193      | -            | -                | -                | -         |    -5.84 | bnox, maaryy, mASKED, mwlky, tomiko      |
|           24 |     3596 | 2024-08-08 | Young Ninjas      | L   | 0.192      | -            | -                | -                | -         |    -5.68 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           23 |     3635 | 2024-08-07 | Verdant           | W   | 0.186      | -            | -                | -                | -         |     1.18 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           22 |     3647 | 2024-08-07 | 9INE              | L   | 0.185      | -            | -                | -                | -         |    -4.49 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           21 |     3677 | 2024-08-06 | Sangal            | L   | 0.180      | -            | -                | -                | -         |    -2.71 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           20 |     3689 | 2024-08-06 | FLuffy Gangsters  | W   | 0.178      | -            | -                | -                | -         |     0.41 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           19 |     3694 | 2024-08-05 | B8                | W   | 0.174      | -            | -                | -                | -         |     2.27 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           18 |     3768 | 2024-08-03 | Nemiga            | W   | 0.160      | 0.435        | 0.491 (0.034)    | -                | -         |     3.04 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           17 |     3847 | 2024-08-01 | K27               | W   | 0.146      | -            | -                | -                | -         |     0.13 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           16 |     3899 | 2024-07-31 | Endpoint          | L   | 0.140      | -            | -                | -                | -         |    -3.87 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           15 |     3905 | 2024-07-31 | 9INE              | W   | 0.139      | -            | -                | -                | -         |     1.01 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           14 |     3947 | 2024-07-30 | PARIVISION        | L   | 0.132      | -            | -                | -                | -         |    -3.58 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           13 |     3973 | 2024-07-29 | HAVU              | W   | 0.126      | -            | -                | -                | -         |     0.08 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           12 |     3991 | 2024-07-28 | BC.Game           | W   | 0.121      | -            | -                | -                | -         |     0.50 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           11 |     4044 | 2024-07-26 | SovvyKiNG         | W   | 0.108      | -            | -                | -                | -         |     0.10 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|           10 |     4051 | 2024-07-26 | Sangal            | L   | 0.107      | -            | -                | -                | -         |    -1.66 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|            9 |     4089 | 2024-07-25 | Into the Breach   | L   | 0.100      | -            | -                | -                | -         |    -2.71 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|            8 |     4135 | 2024-07-24 | GameAgents        | L   | 0.092      | -            | -                | -                | -         |    -2.84 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|            7 |     4187 | 2024-07-22 | Metizport         | W   | 0.081      | -            | -                | -                | -         |     1.78 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|            6 |     4260 | 2024-07-20 | GUN5              | W   | 0.066      | -            | -                | -                | -         |     0.66 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|            5 |     4347 | 2024-07-18 | INFINITE          | L   | 0.052      | -            | -                | -                | -         |    -1.62 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|            4 |     4402 | 2024-07-17 | ALTERNATE aTTaX   | W   | 0.047      | -            | -                | -                | -         |     0.57 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|            3 |     4478 | 2024-07-16 | Passion UA        | L   | 0.038      | -            | -                | -                | -         |    -0.62 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|            2 |     4513 | 2024-07-15 | SovvyKiNG         | L   | 0.033      | -            | -                | -                | -         |    -1.02 | bnox, maaryy, mASKED, SpavaQu, tomiko    |
|            1 |     4540 | 2024-07-14 | Insilio           | L   | 0.026      | -            | -                | -                | -         |    -0.74 | bnox, maaryy, mASKED, SpavaQu, tomiko    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,225.18)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-17 |      0.867 | $12,500.00     | $10,839.82      |
| 2024-10-27 |      0.727 | $5,100.00      | $3,708.67       |
| 2024-10-26 |      0.721 | $252.00        | $181.62         |
| 2024-10-06 |      0.588 | $2,000.00      | $1,175.73       |
| 2024-10-03 |      0.567 | $2,500.00      | $1,417.10       |
| 2024-08-06 |      0.180 | $5,000.00      | $902.24         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
