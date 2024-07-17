### Roster Details<br />
Team Name: Permitta<br />
Roster: bnox, maaryy, mASKED, SpavaQu, tomiko<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [82](../standings_global.md)<br />
Regional Rank: [58]( ../standings_europe.md)<br />
Final Rank Value:  959.5<br />
<br />
Final Rank Value (959.5) = Starting Rank Value (967.6) + Head To Head Adjustments (-8.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.414[<sup>1</sup>](#table2)
- Bounty Collected: 0.420[<sup>2</sup>](#table1)
- Opponent Network: 0.223[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.264<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 967.6
- 400 + ( ( 0.264 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 967.6


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
|           90 |       69 | 2024-07-16 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -13.03 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           89 |      104 | 2024-07-15 | Space             | L   | 1.000      | -            | -                | -                | -         |   -17.31 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           88 |      131 | 2024-07-14 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -14.55 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           87 |      195 | 2024-07-10 | Passion UA        | W   | 1.000      | 0.371        | 0.087 (0.032)    | 0.847 (0.314)    | 0 (0.000) |    17.12 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           86 |      324 | 2024-06-16 | 3DMAX             | L   | 0.993      | -            | -                | -                | -         |    -5.48 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           85 |      367 | 2024-06-15 | BIG               | W   | 0.985      | 0.435        | 0.212 (0.091)    | -                | 0 (0.000) |    28.04 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           84 |      404 | 2024-06-14 | PARIVISION        | W   | 0.979      | 0.435        | -                | 0.424 (0.181)    | 0 (0.000) |    18.63 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           83 |      417 | 2024-06-13 | 9INE              | L   | 0.975      | -            | -                | -                | -         |   -27.73 | bnox, maaryy, mASKED, morelz, Vegi    |
|           82 |      450 | 2024-06-12 | Nexus             | W   | 0.967      | -            | -                | -                | 0 (0.000) |     6.85 | bnox, maaryy, mASKED, morelz, Vegi    |
|           81 |      468 | 2024-06-11 | Nemiga            | L   | 0.961      | -            | -                | -                | -         |    -5.34 | bnox, maaryy, mASKED, morelz, Vegi    |
|           80 |      494 | 2024-06-10 | Rebels            | L   | 0.954      | -            | -                | -                | -         |   -10.73 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           79 |      599 | 2024-06-08 | Space             | W   | 0.941      | 0.435        | -                | 0.430 (0.176)    | 0 (0.000) |    13.76 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           78 |      740 | 2024-06-06 | Zero Tenacity     | W   | 0.926      | 0.435        | 0.154 (0.062)    | 1.000 (0.403)    | 0 (0.000) |    22.02 | bnox, Markoś, mASKED, SpavaQu, tomiko |
|           77 |      874 | 2024-06-03 | GUN5              | W   | 0.906      | 0.435        | 0.110 (0.043)    | 0.477 (0.188)    | 0 (0.000) |    18.37 | bnox, Markoś, mASKED, morelz, tomiko  |
|           76 |      932 | 2024-06-01 | Enterprise        | L   | 0.892      | -            | -                | -                | -         |   -12.65 | bnox, mASKED, morelz, SpavaQu, tomiko |
|           75 |      942 | 2024-05-31 | AMKAL             | L   | 0.888      | -            | -                | -                | -         |    -4.71 | bnox, mASKED, morelz, Sidney, tomiko  |
|           74 |      976 | 2024-05-30 | NAVI Junior       | W   | 0.880      | -            | -                | -                | 0 (0.000) |     3.16 | bnox, maaryy, mASKED, morelz, tomiko  |
|           73 |      984 | 2024-05-30 | Serbia            | L   | 0.879      | -            | -                | -                | -         |   -18.10 | bnox, maaryy, mASKED, morelz, tomiko  |
|           72 |     1028 | 2024-05-28 | Preasy            | W   | 0.866      | -            | -                | -                | 0 (0.000) |     8.70 | bnox, maaryy, mASKED, morelz, tomiko  |
|           71 |     1031 | 2024-05-28 | GUN5              | W   | 0.865      | 0.435        | 0.110 (0.042)    | 0.477 (0.179)    | 0 (0.000) |    14.99 | bnox, maaryy, mASKED, morelz, tomiko  |
|           70 |     1049 | 2024-05-27 | VP.Prodigy        | L   | 0.860      | -            | -                | -                | -         |   -13.30 | bnox, maaryy, mASKED, morelz, tomiko  |
|           69 |     1072 | 2024-05-26 | ECLOT             | W   | 0.852      | 0.371        | 0.103 (0.033)    | -                | -         |    20.56 | bnox, maaryy, mASKED, morelz, tomiko  |
|           68 |     1088 | 2024-05-25 | Nexus             | W   | 0.846      | -            | -                | -                | -         |     9.51 | bnox, maaryy, mASKED, morelz, tomiko  |
|           67 |     1158 | 2024-05-22 | Endpoint          | W   | 0.827      | 0.435        | -                | 0.498 (0.179)    | -         |    14.30 | bnox, maaryy, mASKED, morelz, tomiko  |
|           66 |     1166 | 2024-05-22 | Johnny Speeds     | L   | 0.825      | -            | -                | -                | -         |    -2.03 | bnox, maaryy, mASKED, morelz, Vegi    |
|           65 |     1188 | 2024-05-21 | INFINITE          | W   | 0.821      | -            | -                | -                | -         |     2.83 | bnox, maaryy, mASKED, morelz, Vegi    |
|           64 |     1244 | 2024-05-20 | Passion UA        | L   | 0.812      | -            | -                | -                | -         |    -9.46 | bnox, maaryy, mASKED, morelz, Vegi    |
|           63 |     1336 | 2024-05-17 | Sangal            | L   | 0.792      | -            | -                | -                | -         |    -6.98 | bnox, maaryy, mASKED, morelz, Vegi    |
|           62 |     1402 | 2024-05-15 | EYEBALLERS        | L   | 0.781      | -            | -                | -                | -         |   -12.43 | bnox, maaryy, mASKED, morelz, Vegi    |
|           61 |     1491 | 2024-05-13 | 1WIN              | L   | 0.767      | -            | -                | -                | -         |    -9.38 | bnox, maaryy, mASKED, morelz, Vegi    |
|           60 |     1637 | 2024-05-07 | Enterprise        | L   | 0.725      | -            | -                | -                | -         |   -11.58 | bnox, maaryy, mASKED, morelz, Sobol   |
|           59 |     1653 | 2024-05-06 | ENCE Academy      | W   | 0.719      | -            | -                | -                | -         |     6.00 | bnox, maaryy, mASKED, morelz, Sobol   |
|           58 |     1698 | 2024-05-03 | Insilio           | L   | 0.700      | -            | -                | -                | -         |    -9.38 | bnox, maaryy, mASKED, Sidney, Sobol   |
|           57 |     1725 | 2024-05-02 | Sampi             | L   | 0.693      | -            | -                | -                | -         |   -10.23 | bnox, maaryy, mASKED, Sidney, Sobol   |
|           56 |     1736 | 2024-05-02 | B8                | L   | 0.692      | -            | -                | -                | -         |    -7.53 | bnox, maaryy, mASKED, morelz, Sobol   |
|           55 |     1784 | 2024-04-30 | BLEED             | L   | 0.678      | -            | -                | -                | -         |    -5.12 | bnox, maaryy, mASKED, morelz, Vegi    |
|           54 |     1791 | 2024-04-29 | AMKAL             | L   | 0.673      | -            | -                | -                | -         |    -6.34 | bnox, maaryy, mASKED, morelz, Vegi    |
|           53 |     1801 | 2024-04-29 | RUBY              | W   | 0.672      | 0.435        | 0.144 (0.042)    | -                | -         |    11.42 | bnox, maaryy, mASKED, Sidney, Vegi    |
|           52 |     1837 | 2024-04-27 | Insilio           | L   | 0.660      | -            | -                | -                | -         |   -10.36 | bnox, maaryy, mASKED, morelz, Vegi    |
|           51 |     1845 | 2024-04-27 | Enterprise        | W   | 0.659      | -            | -                | -                | -         |     9.71 | bnox, maaryy, mASKED, morelz, Vegi    |
|           50 |     1868 | 2024-04-26 | ARCRED            | L   | 0.652      | -            | -                | -                | -         |   -12.71 | bnox, maaryy, mASKED, morelz, Vegi    |
|           49 |     1889 | 2024-04-25 | 1WIN              | L   | 0.647      | -            | -                | -                | -         |   -10.44 | bnox, maaryy, mASKED, morelz, Vegi    |
|           48 |     1906 | 2024-04-24 | BLEED             | L   | 0.641      | -            | -                | -                | -         |    -5.85 | bnox, maaryy, mASKED, morelz, Vegi    |
|           47 |     1908 | 2024-04-24 | Passion UA        | W   | 0.640      | 0.384        | 0.087 (0.021)    | 0.847 (0.208)    | -         |     9.58 | bnox, maaryy, mASKED, morelz, Vegi    |
|           46 |     1917 | 2024-04-24 | Sampi             | L   | 0.638      | -            | -                | -                | -         |   -10.40 | bnox, maaryy, mASKED, morelz, Vegi    |
|           45 |     1939 | 2024-04-23 | ALTERNATE aTTaX   | W   | 0.631      | -            | -                | -                | -         |     9.62 | bnox, maaryy, mASKED, morelz, Vegi    |
|           44 |     1952 | 2024-04-22 | Grannys Knockers  | W   | 0.625      | -            | -                | -                | -         |     5.08 | bnox, maaryy, mASKED, morelz, Vegi    |
|           43 |     1973 | 2024-04-21 | Insilio           | W   | 0.618      | -            | -                | -                | -         |     9.27 | bnox, maaryy, mASKED, morelz, Vegi    |
|           42 |     1997 | 2024-04-20 | Nexus             | L   | 0.613      | -            | -                | -                | -         |   -12.36 | bnox, maaryy, mASKED, morelz, Vegi    |
|           41 |     2002 | 2024-04-20 | Passion UA        | W   | 0.612      | 0.371        | -                | 0.847 (0.192)    | -         |     9.76 | bnox, maaryy, mASKED, morelz, Vegi    |
|           40 |     2091 | 2024-04-18 | Passion UA        | L   | 0.599      | -            | -                | -                | -         |    -9.26 | bnox, maaryy, mASKED, morelz, Vegi    |
|           39 |     2105 | 2024-04-18 | Sampi             | L   | 0.598      | -            | -                | -                | -         |    -9.96 | bnox, maaryy, mASKED, morelz, Vegi    |
|           38 |     2121 | 2024-04-17 | PARIVISION        | W   | 0.593      | -            | -                | -                | -         |     8.50 | bnox, maaryy, mASKED, morelz, Vegi    |
|           37 |     2163 | 2024-04-16 | Gaimin Gladiators | L   | 0.586      | -            | -                | -                | -         |    -5.55 | bnox, maaryy, mASKED, morelz, Vegi    |
|           36 |     2226 | 2024-04-12 | MOUZ NXT          | W   | 0.559      | 0.371        | 0.150 (0.031)    | 1.000 (0.207)    | -         |    11.50 | bnox, maaryy, mASKED, morelz, Vegi    |
|           35 |     2306 | 2024-04-10 | EYEBALLERS        | W   | 0.545      | -            | -                | -                | -         |     7.39 | bnox, maaryy, mASKED, morelz, Vegi    |
|           34 |     2384 | 2024-04-08 | HAVU              | W   | 0.533      | -            | -                | -                | -         |     3.67 | bnox, maaryy, mASKED, morelz, Vegi    |
|           33 |     2391 | 2024-04-08 | JANO              | W   | 0.531      | -            | -                | -                | -         |     2.94 | bnox, maaryy, mASKED, morelz, Vegi    |
|           32 |     2521 | 2024-04-03 | Enterprise        | L   | 0.500      | -            | -                | -                | -         |    -7.77 | bnox, maaryy, mASKED, morelz, Vegi    |
|           31 |     2533 | 2024-04-03 | ECLOT             | L   | 0.499      | -            | -                | -                | -         |    -3.68 | bnox, maaryy, mASKED, morelz, Vegi    |
|           30 |     2565 | 2024-04-02 | 3DMAX             | L   | 0.493      | -            | -                | -                | -         |    -3.24 | bnox, maaryy, mASKED, morelz, Vegi    |
|           29 |     2574 | 2024-04-02 | Sashi             | L   | 0.491      | -            | -                | -                | -         |    -5.20 | bnox, maaryy, mASKED, morelz, Vegi    |
|           28 |     2838 | 2024-03-16 | RUBY              | L   | 0.380      | -            | -                | -                | -         |    -5.98 | bnox, maaryy, mASKED, morelz, Vegi    |
|           27 |     2858 | 2024-03-15 | The Chosen Few    | W   | 0.373      | -            | -                | -                | -         |     2.12 | bnox, maaryy, mASKED, morelz, Vegi    |
|           26 |     2861 | 2024-03-15 | Sampi             | L   | 0.372      | -            | -                | -                | -         |    -6.55 | bnox, maaryy, mASKED, morelz, Vegi    |
|           25 |     2908 | 2024-03-13 | MOUZ NXT          | W   | 0.362      | 0.372        | 0.150 (0.020)    | -                | -         |     7.23 | bnox, maaryy, mASKED, morelz, Vegi    |
|           24 |     2927 | 2024-03-13 | ECLOT             | W   | 0.360      | -            | -                | -                | -         |     8.63 | bnox, maaryy, mASKED, morelz, Vegi    |
|           23 |     2941 | 2024-03-13 | ECLOT             | W   | 0.358      | -            | -                | -                | -         |     8.80 | bnox, maaryy, mASKED, morelz, Vegi    |
|           22 |     2983 | 2024-03-11 | ex-Preasy         | L   | 0.346      | -            | -                | -                | -         |    -6.77 | bnox, maaryy, mASKED, morelz, Vegi    |
|           21 |     3030 | 2024-03-09 | Sashi             | L   | 0.332      | -            | -                | -                | -         |    -3.39 | bnox, maaryy, mASKED, morelz, Vegi    |
|           20 |     3066 | 2024-03-07 | VP.Prodigy        | W   | 0.321      | -            | -                | -                | -         |     4.02 | bnox, maaryy, mASKED, morelz, Vegi    |
|           19 |     3075 | 2024-03-07 | kONO              | W   | 0.319      | -            | -                | -                | -         |     3.36 | bnox, maaryy, mASKED, morelz, Vegi    |
|           18 |     3103 | 2024-03-06 | Passion UA        | W   | 0.313      | -            | -                | -                | -         |     5.71 | bnox, maaryy, mASKED, morelz, Vegi    |
|           17 |     3104 | 2024-03-06 | Enterprise        | W   | 0.312      | -            | -                | -                | -         |     5.29 | bnox, maaryy, mASKED, morelz, Vegi    |
|           16 |     3144 | 2024-03-05 | Young Ninjas      | W   | 0.306      | -            | -                | -                | -         |     3.17 | bnox, maaryy, mASKED, morelz, Vegi    |
|           15 |     3211 | 2024-03-02 | AURA              | W   | 0.286      | -            | -                | -                | -         |     0.69 | bnox, maaryy, mASKED, morelz, Vegi    |
|           14 |     3255 | 2024-02-28 | Secret            | L   | 0.266      | -            | -                | -                | -         |    -7.62 | bnox, maaryy, mASKED, morelz, Vegi    |
|           13 |     3258 | 2024-02-28 | ECLOT             | L   | 0.265      | -            | -                | -                | -         |    -1.68 | bnox, maaryy, mASKED, morelz, Vegi    |
|           12 |     3279 | 2024-02-27 | Sprout            | W   | 0.259      | -            | -                | -                | -         |     0.31 | bnox, maaryy, mASKED, morelz, Vegi    |
|           11 |     3353 | 2024-02-24 | ECLOT             | W   | 0.239      | -            | -                | -                | -         |     6.05 | bnox, maaryy, mASKED, morelz, Vegi    |
|           10 |     3382 | 2024-02-22 | PGE Turow         | W   | 0.225      | -            | -                | -                | -         |     1.21 | bnox, maaryy, mASKED, morelz, reiko   |
|            9 |     3414 | 2024-02-21 | ECLOT             | L   | 0.218      | -            | -                | -                | -         |    -1.35 | bnox, maaryy, mASKED, morelz, Vegi    |
|            8 |     3461 | 2024-02-19 | ECLOT             | W   | 0.206      | -            | -                | -                | -         |     5.26 | bnox, maaryy, mASKED, morelz, Vegi    |
|            7 |     3699 | 2024-02-07 | Endpoint          | L   | 0.126      | -            | -                | -                | -         |    -2.24 | bnox, maaryy, mASKED, morelz, Vegi    |
|            6 |     3844 | 2024-01-31 | Sashi             | W   | 0.080      | -            | -                | -                | -         |     1.87 | bnox, maaryy, mASKED, morelz, Vegi    |
|            5 |     3861 | 2024-01-30 | RUBY              | L   | 0.074      | -            | -                | -                | -         |    -1.04 | bnox, maaryy, mASKED, morelz, Vegi    |
|            4 |     3864 | 2024-01-30 | 3DMAX             | W   | 0.074      | -            | -                | -                | -         |     1.92 | bnox, maaryy, mASKED, morelz, Vegi    |
|            3 |     4072 | 2024-01-20 | Gaimin Gladiators | L   | 0.006      | -            | -                | -                | -         |    -0.06 | bnox, maaryy, mASKED, morelz, Vegi    |
|            2 |     4076 | 2024-01-20 | Astralis Talent   | L   | 0.005      | -            | -                | -                | -         |    -0.13 | bnox, maaryy, mASKED, morelz, Vegi    |
|            1 |     4109 | 2024-01-19 | JANO              | W   | 0.001      | -            | -                | -                | -         |     0.00 | bnox, maaryy, mASKED, morelz, Vegi    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,475.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.994 | $5,000.00      | $4,968.91       |
| 2024-06-13 |      0.975 | $545.00        | $531.18         |
| 2024-05-02 |      0.694 | $500.00        | $346.92         |
| 2024-04-25 |      0.645 | $3,000.00      | $1,936.42       |
| 2024-03-25 |      0.440 | $1,250.00      | $550.61         |
| 2024-02-28 |      0.265 | $3,000.00      | $796.03         |
| 2024-02-21 |      0.218 | $1,500.00      | $327.60         |
| 2024-01-21 |      0.012 | $1,500.00      | $17.33          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
