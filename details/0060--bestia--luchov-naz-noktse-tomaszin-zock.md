### Roster Details<br />
Team Name: BESTIA<br />
Roster: luchov, naz, Noktse, tomaszin, zock<br />
Global Rank: [60](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [16]( ../standings_americas.md)<br />
<br />
Final Rank Value:  1001.9<br />
<br />
Final Rank Value (1001.9) = Starting Rank Value (1024.7) + Head To Head Adjustments (-22.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.492[<sup>1</sup>](#table2)
- Bounty Collected: 0.450[<sup>2</sup>](#table1)
- Opponent Network: 0.268[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.303<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1024.7
- 400 + ( ( 0.303 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1024.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|          100 |       40 | 2024-07-30 | Galorys           | L   | 1.000      | -            | -                | -                | -         |   -23.44 | luchov, naz, Noktse, tomaszin, zock    |
|           99 |       43 | 2024-07-30 | Galorys           | W   | 1.000      | 0.450        | -                | 0.552 (0.249)    | 0 (0.000) |     7.56 | luchov, naz, Noktse, tomaszin, zock    |
|           98 |       52 | 2024-07-30 | KRÜ               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.69 | luchov, naz, Noktse, tomaszin, zock    |
|           97 |       80 | 2024-07-29 | Intense           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.67 | luchov, naz, Noktse, tomaszin, zock    |
|           96 |      108 | 2024-07-28 | Vikings KR        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.94 | luchov, naz, Noktse, tomaszin, zock    |
|           95 |      190 | 2024-07-25 | Sharks            | L   | 1.000      | -            | -                | -                | -         |   -15.66 | luchov, naz, Noktse, tomaszin, zock    |
|           94 |      198 | 2024-07-25 | Bad News Chickens | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.13 | luchov, naz, Noktse, tomaszin, zock    |
|           93 |      268 | 2024-07-23 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -8.86 | luchov, naz, Noktse, tomaszin, zock    |
|           92 |      272 | 2024-07-23 | Hype              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.95 | luchov, naz, Noktse, tomaszin, zock    |
|           91 |      307 | 2024-07-22 | Fluxo             | W   | 1.000      | 0.384        | 0.123 (0.047)    | 0.685 (0.263)    | 0 (0.000) |    24.11 | luchov, naz, Noktse, tomaszin, zock    |
|           90 |      332 | 2024-07-21 | RED Canids        | W   | 1.000      | 0.384        | 0.079 (0.031)    | 0.738 (0.284)    | 0 (0.000) |    24.12 | luchov, naz, Noktse, tomaszin, zock    |
|           89 |      389 | 2024-07-19 | KRÜ               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.31 | luchov, naz, Noktse, tomaszin, zock    |
|           88 |      397 | 2024-07-19 | W7M               | L   | 1.000      | -            | -                | -                | -         |   -21.47 | luchov, naz, Noktse, tomaszin, zock    |
|           87 |      448 | 2024-07-18 | Imperial          | L   | 1.000      | -            | -                | -                | -         |    -6.38 | luchov, naz, Noktse, tomaszin, zock    |
|           86 |      450 | 2024-07-18 | Amigos de T2M4SS  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.21 | luchov, naz, Noktse, tomaszin, zock    |
|           85 |      454 | 2024-07-18 | ODDIK             | L   | 1.000      | -            | -                | -                | -         |   -13.50 | luchov, naz, Noktse, tomaszin, zock    |
|           84 |      502 | 2024-07-17 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -8.84 | luchov, naz, Noktse, tomaszin, zock    |
|           83 |      508 | 2024-07-17 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -9.51 | luchov, naz, Noktse, tomaszin, zock    |
|           82 |      520 | 2024-07-17 | Vikings KR        | W   | 1.000      | -            | -                | -                | -         |     9.35 | luchov, naz, Noktse, tomaszin, zock    |
|           81 |      568 | 2024-07-16 | ODDIK             | L   | 1.000      | -            | -                | -                | -         |   -13.47 | luchov, naz, Noktse, tomaszin, zock    |
|           80 |      572 | 2024-07-16 | ODDIK             | W   | 1.000      | 0.450        | 0.096 (0.043)    | 0.781 (0.352)    | -         |    18.24 | luchov, naz, Noktse, tomaszin, zock    |
|           79 |      583 | 2024-07-16 | ODDIK             | L   | 1.000      | -            | -                | -                | -         |   -13.04 | luchov, naz, Noktse, tomaszin, zock    |
|           78 |      631 | 2024-07-15 | Vikings KR        | W   | 1.000      | -            | -                | -                | -         |     8.49 | luchov, naz, Noktse, tomaszin, zock    |
|           77 |      663 | 2024-07-13 | Intense           | W   | 1.000      | -            | -                | -                | -         |     4.09 | luchov, naz, Noktse, tomaszin, zock    |
|           76 |      675 | 2024-07-12 | SPORT             | L   | 1.000      | -            | -                | -                | -         |   -25.98 | luchov, naz, Noktse, tomaszin, zock    |
|           75 |      706 | 2024-07-10 | Sharks            | L   | 1.000      | -            | -                | -                | -         |   -16.98 | luchov, naz, Noktse, tomaszin, zock    |
|           74 |      732 | 2024-07-09 | SPORT             | W   | 1.000      | -            | -                | -                | -         |     4.53 | luchov, naz, Noktse, tomaszin, zock    |
|           73 |      749 | 2024-07-08 | Intense           | W   | 1.000      | -            | -                | -                | -         |     3.41 | luchov, naz, Noktse, tomaszin, zock    |
|           72 |      756 | 2024-07-08 | Bounty Hunters    | L   | 1.000      | -            | -                | -                | -         |   -19.34 | luchov, naz, Noktse, tomaszin, zock    |
|           71 |      889 | 2024-06-15 | 9z                | L   | 0.892      | -            | -                | -                | -         |    -2.59 | luchov, meyern, naz, Noktse, tomaszin  |
|           70 |      920 | 2024-06-14 | paiN              | L   | 0.886      | -            | -                | -                | -         |    -3.88 | luchov, meyern, naz, Noktse, tomaszin  |
|           69 |     1019 | 2024-06-10 | paiN              | L   | 0.861      | -            | -                | -                | -         |    -3.95 | luchov, meyern, naz, Noktse, tomaszin  |
|           68 |     1021 | 2024-06-10 | Bounty Hunters    | W   | 0.860      | -            | -                | -                | -         |     9.00 | luchov, meyern, naz, Noktse, tomaszin  |
|           67 |     1053 | 2024-06-09 | RED Canids        | W   | 0.855      | -            | -                | -                | -         |    18.35 | luchov, meyern, naz, Noktse, tomaszin  |
|           66 |     1076 | 2024-06-09 | Sharks            | L   | 0.852      | -            | -                | -                | -         |   -13.07 | luchov, meyern, naz, Noktse, tomaszin  |
|           65 |     1120 | 2024-06-08 | Solid             | W   | 0.847      | 0.371        | -                | 0.817 (0.257)    | -         |     8.06 | luchov, meyern, naz, Noktse, tomaszin  |
|           64 |     1139 | 2024-06-08 | Vikings KR        | L   | 0.846      | -            | -                | -                | -         |   -21.18 | luchov, meyern, naz, Noktse, tomaszin  |
|           63 |     1180 | 2024-06-07 | ODDIK             | W   | 0.840      | 0.450        | 0.096 (0.036)    | 0.781 (0.295)    | -         |     9.15 | luchov, meyern, naz, Noktse, tomaszin  |
|           62 |     1240 | 2024-06-06 | inSanitY          | L   | 0.833      | -            | -                | -                | -         |   -16.24 | luchov, meyern, naz, Noktse, tomaszin  |
|           61 |     1303 | 2024-06-05 | MIBR              | L   | 0.828      | -            | -                | -                | -         |    -2.53 | luchov, meyern, naz, Noktse, tomaszin  |
|           60 |     1353 | 2024-06-04 | Sharks            | L   | 0.821      | -            | -                | -                | -         |   -14.58 | luchov, meyern, naz, Noktse, tomaszin  |
|           59 |     1669 | 2024-05-22 | Case              | W   | 0.734      | 0.450        | -                | 0.720 (0.238)    | -         |     7.16 | luchov, meyern, naz, Noktse, tomaszin  |
|           58 |     1673 | 2024-05-22 | Case              | W   | 0.734      | -            | -                | -                | -         |     7.58 | luchov, meyern, naz, Noktse, tomaszin  |
|           57 |     1679 | 2024-05-22 | Fluxo             | W   | 0.733      | 0.450        | 0.123 (0.041)    | -                | -         |    12.69 | luchov, meyern, naz, Noktse, tomaszin  |
|           56 |     1680 | 2024-05-22 | Fluxo             | W   | 0.733      | 0.450        | 0.123 (0.040)    | -                | -         |    13.53 | luchov, meyern, naz, Noktse, tomaszin  |
|           55 |     1714 | 2024-05-21 | Smoke             | W   | 0.727      | -            | -                | -                | -         |     3.22 | luchov, meyern, naz, Noktse, tomaszin  |
|           54 |     1717 | 2024-05-21 | Smoke             | W   | 0.727      | -            | -                | -                | -         |     3.32 | luchov, meyern, naz, Noktse, tomaszin  |
|           53 |     1723 | 2024-05-21 | Imperial          | W   | 0.727      | 0.450        | 0.245 (0.080)    | -                | -         |    18.91 | luchov, meyern, naz, Noktse, tomaszin  |
|           52 |     1725 | 2024-05-21 | Imperial          | W   | 0.726      | 0.450        | 0.245 (0.080)    | -                | -         |    19.57 | luchov, meyern, naz, Noktse, tomaszin  |
|           51 |     1753 | 2024-05-20 | Corinthians       | W   | 0.720      | -            | -                | -                | -         |     1.39 | luchov, meyern, naz, Noktse, tomaszin  |
|           50 |     1758 | 2024-05-20 | 9z                | W   | 0.720      | 0.450        | 0.412 (0.134)    | -                | -         |    21.38 | luchov, meyern, naz, Noktse, tomaszin  |
|           49 |     1760 | 2024-05-20 | 9z                | L   | 0.720      | -            | -                | -                | -         |    -1.21 | luchov, meyern, naz, Noktse, tomaszin  |
|           48 |     1840 | 2024-05-17 | Solid             | L   | 0.701      | -            | -                | -                | -         |   -13.76 | luchov, meyern, naz, Noktse, tomaszin  |
|           47 |     1842 | 2024-05-17 | Solid             | W   | 0.701      | 0.450        | -                | 0.817 (0.258)    | -         |     8.35 | luchov, meyern, naz, Noktse, tomaszin  |
|           46 |     1926 | 2024-05-15 | ODDIK             | W   | 0.687      | 0.450        | -                | 0.781 (0.242)    | -         |    10.72 | luchov, meyern, naz, Noktse, tomaszin  |
|           45 |     1928 | 2024-05-15 | ODDIK             | W   | 0.687      | 0.450        | -                | 0.781 (0.241)    | -         |    11.39 | luchov, meyern, naz, Noktse, tomaszin  |
|           44 |     1937 | 2024-05-15 | Hype              | L   | 0.686      | -            | -                | -                | -         |   -12.85 | luchov, meyern, naz, Noktse, tomaszin  |
|           43 |     1985 | 2024-05-14 | Imperial          | L   | 0.680      | -            | -                | -                | -         |    -2.95 | luchov, meyern, naz, Noktse, tomaszin  |
|           42 |     1998 | 2024-05-14 | RED Canids        | L   | 0.679      | -            | -                | -                | -         |    -7.08 | luchov, meyern, naz, Noktse, tomaszin  |
|           41 |     2038 | 2024-05-12 | Solid             | W   | 0.667      | -            | -                | -                | -         |     8.30 | luchov, meyern, naz, Noktse, tomaszin  |
|           40 |     2045 | 2024-05-12 | O PLANO           | W   | 0.666      | -            | -                | -                | -         |     1.73 | luchov, meyern, naz, Noktse, tomaszin  |
|           39 |     2069 | 2024-05-11 | paiN              | L   | 0.660      | -            | -                | -                | -         |    -1.75 | luchov, meyern, naz, Noktse, tomaszin  |
|           38 |     2095 | 2024-05-10 | Imperial          | W   | 0.653      | 0.435        | 0.245 (0.070)    | -                | -         |    18.03 | luchov, meyern, naz, Noktse, tomaszin  |
|           37 |     2111 | 2024-05-09 | Sharks            | W   | 0.648      | -            | -                | -                | -         |    11.26 | luchov, meyern, naz, Noktse, tomaszin  |
|           36 |     2140 | 2024-05-08 | Vikings KR        | W   | 0.640      | -            | -                | -                | -         |     7.32 | luchov, meyern, naz, Noktse, tomaszin  |
|           35 |     2172 | 2024-05-06 | Sharks            | L   | 0.628      | -            | -                | -                | -         |    -8.77 | luchov, meyern, naz, Noktse, tomaszin  |
|           34 |     2410 | 2024-04-25 | RED Canids        | L   | 0.554      | -            | -                | -                | -         |    -5.01 | luchov, meyern, naz, Noktse, tomaszin  |
|           33 |     2412 | 2024-04-25 | RED Canids        | L   | 0.554      | -            | -                | -                | -         |    -5.22 | luchov, meyern, naz, Noktse, tomaszin  |
|           32 |     2677 | 2024-04-16 | O PLANO           | L   | 0.494      | -            | -                | -                | -         |   -14.32 | luchov, meyern, naz, Noktse, tomaszin  |
|           31 |     2774 | 2024-04-11 | Galorys           | L   | 0.459      | -            | -                | -                | -         |    -8.63 | luchov, meyern, naz, Noktse, tomaszin  |
|           30 |     2856 | 2024-04-09 | Galorys           | L   | 0.447      | -            | -                | -                | -         |    -8.71 | luchov, meyern, naz, Noktse, tomaszin  |
|           29 |     2861 | 2024-04-09 | Galorys           | W   | 0.447      | -            | -                | -                | -         |     5.47 | luchov, meyern, naz, Noktse, tomaszin  |
|           28 |     2897 | 2024-04-08 | RED Canids        | L   | 0.441      | -            | -                | -                | -         |    -4.81 | luchov, meyern, naz, Noktse, tomaszin  |
|           27 |     2940 | 2024-04-07 | Sharks            | L   | 0.432      | -            | -                | -                | -         |   -10.54 | luchov, meyern, naz, Noktse, tomaszin  |
|           26 |     2947 | 2024-04-06 | Fluxo             | W   | 0.428      | -            | -                | -                | -         |     8.10 | luchov, meyern, naz, Noktse, tomaszin  |
|           25 |     2986 | 2024-04-04 | adalYamigos       | L   | 0.415      | -            | -                | -                | -         |   -11.64 | luchov, meyern, naz, Noktse, tomaszin  |
|           24 |     2990 | 2024-04-04 | adalYamigos       | W   | 0.414      | -            | -                | -                | -         |     1.40 | luchov, meyern, naz, Noktse, tomaszin  |
|           23 |     3002 | 2024-04-04 | Imperial          | L   | 0.413      | -            | -                | -                | -         |    -2.01 | luchov, meyern, naz, Noktse, tomaszin  |
|           22 |     3039 | 2024-04-03 | Fluxo             | L   | 0.407      | -            | -                | -                | -         |    -5.55 | luchov, meyern, naz, Noktse, tomaszin  |
|           21 |     3075 | 2024-04-02 | Sharks            | W   | 0.401      | -            | -                | -                | -         |     2.61 | luchov, meyern, naz, Noktse, tomaszin  |
|           20 |     3080 | 2024-04-02 | Fluxo             | L   | 0.400      | -            | -                | -                | -         |    -5.59 | luchov, meyern, naz, Noktse, tomaszin  |
|           19 |     3168 | 2024-03-27 | W7M               | L   | 0.361      | -            | -                | -                | -         |    -8.43 | luchov, meyern, naz, Noktse, tomaszin  |
|           18 |     3173 | 2024-03-27 | W7M               | W   | 0.361      | -            | -                | -                | -         |     2.96 | luchov, meyern, naz, Noktse, tomaszin  |
|           17 |     3483 | 2024-03-12 | RED Canids        | L   | 0.260      | -            | -                | -                | -         |    -3.27 | deco, luchov, meyern, Noktse, tomaszin |
|           16 |     3493 | 2024-03-11 | FURIA Academy     | W   | 0.254      | -            | -                | -                | -         |     0.47 | deco, luchov, meyern, Noktse, tomaszin |
|           15 |     3516 | 2024-03-10 | adalYamigos       | L   | 0.248      | -            | -                | -                | -         |    -7.09 | deco, luchov, meyern, Noktse, tomaszin |
|           14 |     3564 | 2024-03-08 | FURIA Academy     | W   | 0.234      | -            | -                | -                | -         |     0.41 | deco, luchov, meyern, Noktse, tomaszin |
|           13 |     3729 | 2024-03-02 | Wildcard          | L   | 0.193      | -            | -                | -                | -         |    -4.03 | deco, luchov, meyern, Noktse, tomaszin |
|           12 |     3746 | 2024-03-01 | Liquid            | L   | 0.187      | -            | -                | -                | -         |    -0.50 | deco, luchov, meyern, Noktse, tomaszin |
|           11 |     3870 | 2024-02-24 | Imperial          | L   | 0.146      | -            | -                | -                | -         |    -0.85 | deco, luchov, meyern, Noktse, tomaszin |
|           10 |     3889 | 2024-02-23 | 9z                | L   | 0.140      | -            | -                | -                | -         |    -0.21 | deco, luchov, meyern, Noktse, tomaszin |
|            9 |     3897 | 2024-02-22 | Imperial          | W   | 0.135      | -            | -                | -                | -         |     3.48 | deco, luchov, meyern, Noktse, tomaszin |
|            8 |     3906 | 2024-02-22 | 9z                | L   | 0.134      | -            | -                | -                | -         |    -0.19 | deco, luchov, meyern, Noktse, tomaszin |
|            7 |     3931 | 2024-02-21 | W7M               | W   | 0.126      | -            | -                | -                | -         |     1.06 | deco, luchov, meyern, Noktse, tomaszin |
|            6 |     4006 | 2024-02-18 | FURIA Academy     | W   | 0.106      | -            | -                | -                | -         |     0.19 | deco, luchov, meyern, Noktse, tomaszin |
|            5 |     4046 | 2024-02-16 | Case              | L   | 0.094      | -            | -                | -                | -         |    -1.80 | deco, luchov, meyern, Noktse, tomaszin |
|            4 |     4168 | 2024-02-12 | FURIA Academy     | W   | 0.068      | -            | -                | -                | -         |     0.12 | deco, luchov, meyern, Noktse, tomaszin |
|            3 |     4303 | 2024-02-02 | Imperial          | L   | 0.002      | -            | -                | -                | -         |    -0.01 | deco, luchov, meyern, Noktse, tomaszin |
|            2 |     4305 | 2024-02-02 | ODDIK             | W   | 0.001      | -            | -                | -                | -         |     0.02 | deco, luchov, meyern, Noktse, tomaszin |
|            1 |     4309 | 2024-02-02 | Imperial          | L   | 0.001      | -            | -                | -                | -         |    -0.00 | deco, luchov, meyern, Noktse, tomaszin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30,607.78)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-22 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-06-16 |      0.901 | $1,500.00      | $1,351.89       |
| 2024-06-10 |      0.861 | $4,000.00      | $3,444.22       |
| 2024-06-09 |      0.854 | $2,000.00      | $1,707.87       |
| 2024-05-12 |      0.667 | $5,000.00      | $3,335.98       |
| 2024-02-25 |      0.154 | $5,000.00      | $767.82         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
