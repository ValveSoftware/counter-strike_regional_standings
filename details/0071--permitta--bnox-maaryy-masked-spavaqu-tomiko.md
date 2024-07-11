### Roster Details<br />
Team Name: Permitta<br />
Roster: bnox, maaryy, mASKED, SpavaQu, tomiko<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [71](../standings_global.md)<br />
Regional Rank: [50]( ../standings_europe.md)<br />
Final Rank Value:  1006.7<br />
<br />
Final Rank Value (1006.7) = Starting Rank Value (962.4) + Head To Head Adjustments (44.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.414[<sup>1</sup>](#table2)
- Bounty Collected: 0.423[<sup>2</sup>](#table1)
- Opponent Network: 0.229[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.267<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 962.4
- 400 + ( ( 0.267 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 962.4


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
|           96 |       31 | 2024-07-10 | Passion UA        | W   | 1.000      | 0.371        | 0.087 (0.032)    | 0.821 (0.304)    | 0 (0.000) |    16.04 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           95 |      160 | 2024-06-16 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -5.26 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           94 |      203 | 2024-06-15 | BIG               | W   | 1.000      | 0.435        | 0.215 (0.093)    | -                | 0 (0.000) |    28.68 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           93 |      240 | 2024-06-14 | PARIVISION        | W   | 1.000      | 0.435        | -                | 0.446 (0.194)    | 0 (0.000) |    19.79 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           92 |      253 | 2024-06-13 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -28.49 | bnox, maaryy, mASKED, morelz, Vegi    |
|           91 |      286 | 2024-06-12 | Romania           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.78 | bnox, maaryy, mASKED, morelz, Vegi    |
|           90 |      304 | 2024-06-11 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -5.36 | bnox, maaryy, mASKED, morelz, Vegi    |
|           89 |      330 | 2024-06-10 | Rebels            | L   | 0.994      | -            | -                | -                | -         |   -10.58 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           88 |      435 | 2024-06-08 | Space             | W   | 0.981      | -            | -                | -                | 0 (0.000) |    13.87 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           87 |      576 | 2024-06-06 | Zero Tenacity     | W   | 0.966      | 0.435        | 0.153 (0.064)    | 1.000 (0.420)    | 0 (0.000) |    22.94 | bnox, Markoś, mASKED, SpavaQu, tomiko |
|           86 |      710 | 2024-06-03 | GUN5              | W   | 0.945      | 0.435        | 0.109 (0.045)    | 0.450 (0.185)    | 0 (0.000) |    19.13 | bnox, Markoś, mASKED, morelz, tomiko  |
|           85 |      768 | 2024-06-01 | Enterprise        | L   | 0.931      | -            | -                | -                | -         |   -13.34 | bnox, mASKED, morelz, SpavaQu, tomiko |
|           84 |      778 | 2024-05-31 | AMKAL             | L   | 0.927      | -            | -                | -                | -         |    -4.39 | bnox, mASKED, morelz, Sidney, tomiko  |
|           83 |      812 | 2024-05-30 | NAVI Junior       | W   | 0.920      | -            | -                | -                | 0 (0.000) |     3.10 | bnox, maaryy, mASKED, morelz, tomiko  |
|           82 |      820 | 2024-05-30 | Serbia            | L   | 0.919      | -            | -                | -                | -         |   -19.18 | bnox, maaryy, mASKED, morelz, tomiko  |
|           81 |      864 | 2024-05-28 | Preasy            | W   | 0.905      | -            | -                | -                | 0 (0.000) |     8.85 | bnox, maaryy, mASKED, morelz, tomiko  |
|           80 |      867 | 2024-05-28 | GUN5              | W   | 0.905      | 0.435        | 0.109 (0.043)    | 0.450 (0.177)    | 0 (0.000) |    15.46 | bnox, maaryy, mASKED, morelz, tomiko  |
|           79 |      885 | 2024-05-27 | VP.Prodigy        | L   | 0.900      | -            | -                | -                | -         |   -13.95 | bnox, maaryy, mASKED, morelz, tomiko  |
|           78 |      908 | 2024-05-26 | Czech Republic    | W   | 0.891      | 0.371        | 0.104 (0.034)    | -                | -         |    21.37 | bnox, maaryy, mASKED, morelz, tomiko  |
|           77 |      924 | 2024-05-25 | Romania           | W   | 0.885      | -            | -                | -                | -         |     9.68 | bnox, maaryy, mASKED, morelz, tomiko  |
|           76 |      994 | 2024-05-22 | Endpoint          | W   | 0.867      | 0.435        | -                | 0.524 (0.197)    | -         |    14.91 | bnox, maaryy, mASKED, morelz, tomiko  |
|           75 |     1002 | 2024-05-22 | Johnny Speeds     | L   | 0.864      | -            | -                | -                | -         |    -2.27 | bnox, maaryy, mASKED, morelz, Vegi    |
|           74 |     1024 | 2024-05-21 | INFINITE          | W   | 0.861      | -            | -                | -                | -         |     2.74 | bnox, maaryy, mASKED, morelz, Vegi    |
|           73 |     1080 | 2024-05-20 | Passion UA        | L   | 0.852      | -            | -                | -                | -         |    -9.96 | bnox, maaryy, mASKED, morelz, Vegi    |
|           72 |     1172 | 2024-05-17 | Sangal            | L   | 0.831      | -            | -                | -                | -         |    -7.32 | bnox, maaryy, mASKED, morelz, Vegi    |
|           71 |     1238 | 2024-05-15 | EYEBALLERS        | L   | 0.821      | -            | -                | -                | -         |   -13.09 | bnox, maaryy, mASKED, morelz, Vegi    |
|           70 |     1327 | 2024-05-13 | 1WIN              | L   | 0.807      | -            | -                | -                | -         |    -9.41 | bnox, maaryy, mASKED, morelz, Vegi    |
|           69 |     1473 | 2024-05-07 | Enterprise        | L   | 0.765      | -            | -                | -                | -         |   -12.20 | bnox, maaryy, mASKED, morelz, Sobol   |
|           68 |     1489 | 2024-05-06 | ENCE Academy      | W   | 0.758      | -            | -                | -                | -         |     6.26 | bnox, maaryy, mASKED, morelz, Sobol   |
|           67 |     1534 | 2024-05-03 | Insilio           | L   | 0.740      | -            | -                | -                | -         |   -10.00 | bnox, maaryy, mASKED, Sidney, Sobol   |
|           66 |     1561 | 2024-05-02 | Slovakia          | L   | 0.733      | -            | -                | -                | -         |   -10.98 | bnox, maaryy, mASKED, Sidney, Sobol   |
|           65 |     1572 | 2024-05-02 | B8                | L   | 0.731      | -            | -                | -                | -         |    -7.83 | bnox, maaryy, mASKED, morelz, Sobol   |
|           64 |     1620 | 2024-04-30 | BLEED             | L   | 0.718      | -            | -                | -                | -         |    -2.22 | bnox, maaryy, mASKED, morelz, Vegi    |
|           63 |     1627 | 2024-04-29 | AMKAL             | L   | 0.713      | -            | -                | -                | -         |    -6.28 | bnox, maaryy, mASKED, morelz, Vegi    |
|           62 |     1637 | 2024-04-29 | RUBY              | W   | 0.712      | 0.435        | 0.139 (0.043)    | -                | -         |    11.61 | bnox, maaryy, mASKED, Sidney, Vegi    |
|           61 |     1673 | 2024-04-27 | Insilio           | L   | 0.699      | -            | -                | -                | -         |   -11.10 | bnox, maaryy, mASKED, morelz, Vegi    |
|           60 |     1681 | 2024-04-27 | Enterprise        | W   | 0.698      | 0.396        | -                | 0.654 (0.181)    | -         |    10.34 | bnox, maaryy, mASKED, morelz, Vegi    |
|           59 |     1704 | 2024-04-26 | ARCRED            | L   | 0.692      | -            | -                | -                | -         |   -13.74 | bnox, maaryy, mASKED, morelz, Vegi    |
|           58 |     1725 | 2024-04-25 | 1WIN              | L   | 0.686      | -            | -                | -                | -         |   -10.78 | bnox, maaryy, mASKED, morelz, Vegi    |
|           57 |     1742 | 2024-04-24 | BLEED             | L   | 0.680      | -            | -                | -                | -         |    -2.47 | bnox, maaryy, mASKED, morelz, Vegi    |
|           56 |     1744 | 2024-04-24 | Passion UA        | W   | 0.680      | 0.384        | 0.087 (0.023)    | 0.821 (0.214)    | -         |    10.06 | bnox, maaryy, mASKED, morelz, Vegi    |
|           55 |     1753 | 2024-04-24 | Slovakia          | L   | 0.678      | -            | -                | -                | -         |   -11.07 | bnox, maaryy, mASKED, morelz, Vegi    |
|           54 |     1775 | 2024-04-23 | ALTERNATE aTTaX   | W   | 0.671      | -            | -                | -                | -         |    10.07 | bnox, maaryy, mASKED, morelz, Vegi    |
|           53 |     1788 | 2024-04-22 | Grannys Knockers  | W   | 0.665      | -            | -                | -                | -         |     5.33 | bnox, maaryy, mASKED, morelz, Vegi    |
|           52 |     1809 | 2024-04-21 | Insilio           | W   | 0.658      | -            | -                | -                | -         |     9.78 | bnox, maaryy, mASKED, morelz, Vegi    |
|           51 |     1833 | 2024-04-20 | Romania           | L   | 0.652      | -            | -                | -                | -         |   -13.30 | bnox, maaryy, mASKED, morelz, Vegi    |
|           50 |     1838 | 2024-04-20 | Passion UA        | W   | 0.652      | 0.371        | -                | 0.821 (0.198)    | -         |    10.30 | bnox, maaryy, mASKED, morelz, Vegi    |
|           49 |     1927 | 2024-04-18 | Passion UA        | L   | 0.639      | -            | -                | -                | -         |    -9.93 | bnox, maaryy, mASKED, morelz, Vegi    |
|           48 |     1941 | 2024-04-18 | Slovakia          | L   | 0.638      | -            | -                | -                | -         |   -10.80 | bnox, maaryy, mASKED, morelz, Vegi    |
|           47 |     1957 | 2024-04-17 | PARIVISION        | W   | 0.633      | -            | -                | -                | -         |     9.32 | bnox, maaryy, mASKED, morelz, Vegi    |
|           46 |     1999 | 2024-04-16 | Gaimin Gladiators | L   | 0.626      | -            | -                | -                | -         |    -5.07 | bnox, maaryy, mASKED, morelz, Vegi    |
|           45 |     2062 | 2024-04-12 | MOUZ NXT          | W   | 0.599      | 0.371        | 0.152 (0.034)    | 1.000 (0.222)    | -         |    12.31 | bnox, maaryy, mASKED, morelz, Vegi    |
|           44 |     2142 | 2024-04-10 | EYEBALLERS        | W   | 0.585      | -            | -                | -                | -         |     7.93 | bnox, maaryy, mASKED, morelz, Vegi    |
|           43 |     2220 | 2024-04-08 | HAVU              | W   | 0.572      | -            | -                | -                | -         |     3.95 | bnox, maaryy, mASKED, morelz, Vegi    |
|           42 |     2227 | 2024-04-08 | JANO              | W   | 0.571      | -            | -                | -                | -         |     3.14 | bnox, maaryy, mASKED, morelz, Vegi    |
|           41 |     2357 | 2024-04-03 | Enterprise        | L   | 0.540      | -            | -                | -                | -         |    -8.16 | bnox, maaryy, mASKED, morelz, Vegi    |
|           40 |     2369 | 2024-04-03 | Czech Republic    | L   | 0.538      | -            | -                | -                | -         |    -3.94 | bnox, maaryy, mASKED, morelz, Vegi    |
|           39 |     2401 | 2024-04-02 | 3DMAX             | L   | 0.532      | -            | -                | -                | -         |    -3.46 | bnox, maaryy, mASKED, morelz, Vegi    |
|           38 |     2410 | 2024-04-02 | Sashi             | L   | 0.531      | -            | -                | -                | -         |    -5.61 | bnox, maaryy, mASKED, morelz, Vegi    |
|           37 |     2674 | 2024-03-16 | RUBY              | L   | 0.420      | -            | -                | -                | -         |    -6.87 | bnox, maaryy, mASKED, morelz, Vegi    |
|           36 |     2694 | 2024-03-15 | The Chosen Few    | W   | 0.413      | -            | -                | -                | -         |     2.38 | bnox, maaryy, mASKED, morelz, Vegi    |
|           35 |     2697 | 2024-03-15 | Slovakia          | L   | 0.412      | -            | -                | -                | -         |    -7.44 | bnox, maaryy, mASKED, morelz, Vegi    |
|           34 |     2744 | 2024-03-13 | MOUZ NXT          | W   | 0.401      | 0.372        | 0.152 (0.023)    | -                | -         |     8.00 | bnox, maaryy, mASKED, morelz, Vegi    |
|           33 |     2763 | 2024-03-13 | Czech Republic    | W   | 0.399      | -            | -                | -                | -         |     9.60 | bnox, maaryy, mASKED, morelz, Vegi    |
|           32 |     2777 | 2024-03-13 | Czech Republic    | W   | 0.398      | -            | -                | -                | -         |     9.82 | bnox, maaryy, mASKED, morelz, Vegi    |
|           31 |     2819 | 2024-03-11 | ex-Preasy         | L   | 0.385      | -            | -                | -                | -         |    -7.28 | bnox, maaryy, mASKED, morelz, Vegi    |
|           30 |     2866 | 2024-03-09 | Sashi             | L   | 0.372      | -            | -                | -                | -         |    -3.85 | bnox, maaryy, mASKED, morelz, Vegi    |
|           29 |     2902 | 2024-03-07 | VP.Prodigy        | W   | 0.360      | -            | -                | -                | -         |     4.47 | bnox, maaryy, mASKED, morelz, Vegi    |
|           28 |     2911 | 2024-03-07 | kONO              | W   | 0.358      | -            | -                | -                | -         |     3.71 | bnox, maaryy, mASKED, morelz, Vegi    |
|           27 |     2939 | 2024-03-06 | Passion UA        | W   | 0.353      | -            | -                | -                | -         |     6.40 | bnox, maaryy, mASKED, morelz, Vegi    |
|           26 |     2940 | 2024-03-06 | Enterprise        | W   | 0.352      | -            | -                | -                | -         |     6.10 | bnox, maaryy, mASKED, morelz, Vegi    |
|           25 |     2980 | 2024-03-05 | Young Ninjas      | W   | 0.346      | -            | -                | -                | -         |     3.52 | bnox, maaryy, mASKED, morelz, Vegi    |
|           24 |     3047 | 2024-03-02 | AURA              | W   | 0.325      | -            | -                | -                | -         |     0.82 | bnox, maaryy, mASKED, morelz, Vegi    |
|           23 |     3091 | 2024-02-28 | Secret            | L   | 0.306      | -            | -                | -                | -         |    -8.73 | bnox, maaryy, mASKED, morelz, Vegi    |
|           22 |     3094 | 2024-02-28 | Czech Republic    | L   | 0.305      | -            | -                | -                | -         |    -1.88 | bnox, maaryy, mASKED, morelz, Vegi    |
|           21 |     3115 | 2024-02-27 | Sprout            | W   | 0.298      | -            | -                | -                | -         |     0.54 | bnox, maaryy, mASKED, morelz, Vegi    |
|           20 |     3189 | 2024-02-24 | Czech Republic    | W   | 0.279      | -            | -                | -                | -         |     7.11 | bnox, maaryy, mASKED, morelz, Vegi    |
|           19 |     3218 | 2024-02-22 | PGE Turow         | W   | 0.265      | -            | -                | -                | -         |     1.45 | bnox, maaryy, mASKED, morelz, reiko   |
|           18 |     3250 | 2024-02-21 | Czech Republic    | L   | 0.258      | -            | -                | -                | -         |    -1.54 | bnox, maaryy, mASKED, morelz, Vegi    |
|           17 |     3297 | 2024-02-19 | Czech Republic    | W   | 0.245      | -            | -                | -                | -         |     6.34 | bnox, maaryy, mASKED, morelz, Vegi    |
|           16 |     3535 | 2024-02-07 | Endpoint          | L   | 0.165      | -            | -                | -                | -         |    -2.96 | bnox, maaryy, mASKED, morelz, Vegi    |
|           15 |     3680 | 2024-01-31 | Sashi             | W   | 0.120      | -            | -                | -                | -         |     2.83 | bnox, maaryy, mASKED, morelz, Vegi    |
|           14 |     3697 | 2024-01-30 | RUBY              | L   | 0.114      | -            | -                | -                | -         |    -1.64 | bnox, maaryy, mASKED, morelz, Vegi    |
|           13 |     3700 | 2024-01-30 | 3DMAX             | W   | 0.113      | -            | -                | -                | -         |     2.96 | bnox, maaryy, mASKED, morelz, Vegi    |
|           12 |     3908 | 2024-01-20 | Gaimin Gladiators | L   | 0.045      | -            | -                | -                | -         |    -0.39 | bnox, maaryy, mASKED, morelz, Vegi    |
|           11 |     3912 | 2024-01-20 | Astralis Talent   | L   | 0.045      | -            | -                | -                | -         |    -1.05 | bnox, maaryy, mASKED, morelz, Vegi    |
|           10 |     3945 | 2024-01-19 | JANO              | W   | 0.041      | -            | -                | -                | -         |     0.08 | bnox, maaryy, mASKED, morelz, Vegi    |
|            9 |     3968 | 2024-01-19 | Aurora Young Blud | W   | 0.038      | -            | -                | -                | -         |     0.29 | bnox, maaryy, mASKED, morelz, Vegi    |
|            8 |     4003 | 2024-01-18 | Zero Tenacity     | L   | 0.034      | -            | -                | -                | -         |    -0.32 | bnox, maaryy, mASKED, morelz, Vegi    |
|            7 |     4022 | 2024-01-18 | BIG               | L   | 0.033      | -            | -                | -                | -         |    -0.08 | bnox, maaryy, mASKED, morelz, Vegi    |
|            6 |     4030 | 2024-01-18 | Spirit Academy    | W   | 0.032      | -            | -                | -                | -         |     0.09 | bnox, maaryy, mASKED, morelz, Vegi    |
|            5 |     4070 | 2024-01-17 | Astralis Talent   | L   | 0.026      | -            | -                | -                | -         |    -0.60 | bnox, maaryy, mASKED, morelz, Vegi    |
|            4 |     4186 | 2024-01-14 | Czech Republic    | W   | 0.006      | -            | -                | -                | -         |     0.14 | bnox, maaryy, mASKED, morelz, Vegi    |
|            3 |     4205 | 2024-01-13 | ex-sYnck          | W   | 0.001      | -            | -                | -                | -         |     0.00 | bnox, maaryy, mASKED, morelz, Vegi    |
|            2 |     4210 | 2024-01-13 | OG                | L   | 0.000      | -            | -                | -                | -         |    -0.00 | bnox, maaryy, mASKED, morelz, Vegi    |
|            1 |     4211 | 2024-01-13 | Insilio           | W   | 0.000      | -            | -                | -                | -         |     0.00 | bnox, maaryy, mASKED, morelz, Vegi    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,945.72)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-13 |      1.000 | $545.00        | $545.00         |
| 2024-05-02 |      0.733 | $500.00        | $366.73         |
| 2024-04-25 |      0.685 | $3,000.00      | $2,055.25       |
| 2024-03-25 |      0.480 | $1,250.00      | $600.12         |
| 2024-02-28 |      0.305 | $3,000.00      | $914.86         |
| 2024-02-21 |      0.258 | $1,500.00      | $387.01         |
| 2024-01-21 |      0.051 | $1,500.00      | $76.74          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
