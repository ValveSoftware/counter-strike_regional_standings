### Roster Details<br />
Team Name: BESTIA<br />
Roster: luchov, naz, Noktse, tomaszin, zock<br />
Global Rank: [31](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_30.md)<br />
Regional Rank: [10]( ../../standings_americas_2024_10_30.md)<br />
<br />
Final Rank Value:  1235.1<br />
<br />
Final Rank Value (1235.1) = Starting Rank Value (1133.0) + Head To Head Adjustments (102.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.602[<sup>1</sup>](#table2)
- Bounty Collected: 0.500[<sup>2</sup>](#table1)
- Opponent Network: 0.264[<sup>2</sup>](#table1)
- LAN Wins: 0.113[<sup>2</sup>](#table1)

The average of these factors is 0.370<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1133.0
- 400 + ( ( 0.370 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1133.0


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
|          118 |       69 | 2024-10-26 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -8.48 | luchov, naz, Noktse, tomaszin, zock   |
|          117 |       98 | 2024-10-25 | M80               | W   | 1.000      | 0.477        | 0.334 (0.159)    | 0.597 (0.285)    | 0 (0.000) |    18.66 | luchov, naz, Noktse, tomaszin, zock   |
|          116 |      117 | 2024-10-24 | BIG               | L   | 1.000      | -            | -                | -                | -         |    -7.06 | luchov, naz, Noktse, tomaszin, zock   |
|          115 |      121 | 2024-10-24 | M80               | W   | 1.000      | 0.477        | 0.334 (0.159)    | 0.597 (0.285)    | 0 (0.000) |    19.62 | luchov, naz, Noktse, tomaszin, zock   |
|          114 |      188 | 2024-10-19 | MIBR              | L   | 1.000      | -            | -                | -                | -         |   -12.24 | luchov, naz, Noktse, tomaszin, zock   |
|          113 |      214 | 2024-10-18 | RED Canids        | W   | 1.000      | 0.450        | 0.156 (0.070)    | 0.510 (0.229)    | 0 (0.000) |    14.04 | luchov, naz, Noktse, tomaszin, zock   |
|          112 |      243 | 2024-10-17 | inSanitY          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.80 | luchov, naz, Noktse, tomaszin, zock   |
|          111 |      274 | 2024-10-16 | ODDIK             | W   | 1.000      | 0.450        | 0.185 (0.083)    | 0.557 (0.251)    | 0 (0.000) |    10.90 | luchov, naz, Noktse, tomaszin, zock   |
|          110 |      300 | 2024-10-15 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |   -17.18 | luchov, naz, Noktse, tomaszin, zock   |
|          109 |      390 | 2024-10-09 | KRÜ               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.67 | luchov, naz, Noktse, tomaszin, zock   |
|          108 |      397 | 2024-10-09 | KRÜ               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.88 | luchov, naz, Noktse, tomaszin, zock   |
|          107 |      459 | 2024-10-07 | RED Canids        | W   | 1.000      | 0.450        | 0.156 (0.070)    | -                | 0 (0.000) |    17.39 | luchov, naz, Noktse, tomaszin, zock   |
|          106 |      460 | 2024-10-07 | RED Canids        | W   | 1.000      | 0.450        | 0.156 (0.070)    | -                | 0 (0.000) |    18.95 | luchov, naz, Noktse, tomaszin, zock   |
|          105 |      514 | 2024-10-05 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |   -12.27 | luchov, naz, Noktse, tomaszin, zock   |
|          104 |      556 | 2024-10-04 | paiN              | W   | 1.000      | 0.389        | 0.397 (0.154)    | 0.766 (0.298)    | 1 (1.000) |    27.99 | luchov, naz, Noktse, tomaszin, zock   |
|          103 |      627 | 2024-10-02 | Case              | W   | 1.000      | 0.450        | -                | 0.529 (0.238)    | -         |     6.61 | luchov, naz, Noktse, tomaszin, zock   |
|          102 |      634 | 2024-10-02 | Case              | W   | 1.000      | 0.450        | -                | 0.529 (0.238)    | -         |     7.02 | luchov, naz, Noktse, tomaszin, zock   |
|          101 |      673 | 2024-10-01 | Solid             | W   | 1.000      | 0.450        | -                | 0.624 (0.281)    | -         |     9.93 | luchov, naz, Noktse, tomaszin, zock   |
|          100 |      677 | 2024-10-01 | Solid             | W   | 1.000      | 0.450        | -                | 0.624 (0.281)    | -         |    10.73 | luchov, naz, Noktse, tomaszin, zock   |
|           99 |      839 | 2024-09-26 | Sharks            | W   | 0.975      | -            | -                | -                | -         |    13.36 | luchov, naz, Noktse, tomaszin, zock   |
|           98 |      846 | 2024-09-26 | MIBR              | W   | 0.974      | -            | -                | -                | -         |    25.18 | luchov, naz, Noktse, tomaszin, zock   |
|           97 |      897 | 2024-09-25 | Imperial          | W   | 0.968      | 0.450        | 0.248 (0.108)    | 0.578 (0.252)    | -         |    24.03 | luchov, naz, Noktse, tomaszin, zock   |
|           96 |      901 | 2024-09-25 | Imperial          | L   | 0.968      | -            | -                | -                | -         |    -6.02 | luchov, naz, Noktse, tomaszin, zock   |
|           95 |      906 | 2024-09-25 | Imperial          | L   | 0.967      | -            | -                | -                | -         |    -6.36 | luchov, naz, Noktse, tomaszin, zock   |
|           94 |      948 | 2024-09-24 | Hype              | W   | 0.962      | -            | -                | -                | -         |     7.25 | luchov, naz, Noktse, tomaszin, zock   |
|           93 |      952 | 2024-09-24 | Hype              | L   | 0.961      | -            | -                | -                | -         |   -23.59 | luchov, naz, Noktse, tomaszin, zock   |
|           92 |     1133 | 2024-09-18 | paiN              | L   | 0.922      | -            | -                | -                | -         |    -1.23 | luchov, naz, Noktse, tomaszin, zock   |
|           91 |     1137 | 2024-09-18 | paiN              | L   | 0.921      | -            | -                | -                | -         |    -1.25 | luchov, naz, Noktse, tomaszin, zock   |
|           90 |     1166 | 2024-09-17 | inSanitY          | W   | 0.915      | -            | -                | -                | -         |     9.95 | luchov, naz, Noktse, tomaszin, zock   |
|           89 |     1167 | 2024-09-17 | inSanitY          | L   | 0.915      | -            | -                | -                | -         |   -19.31 | luchov, naz, Noktse, tomaszin, zock   |
|           88 |     1377 | 2024-09-10 | Dusty Roots       | W   | 0.868      | -            | -                | -                | -         |     3.42 | luchov, naz, Noktse, tomaszin, zock   |
|           87 |     1379 | 2024-09-10 | Dusty Roots       | W   | 0.868      | -            | -                | -                | -         |     3.54 | luchov, naz, Noktse, tomaszin, zock   |
|           86 |     1552 | 2024-09-04 | Fluxo             | L   | 0.827      | -            | -                | -                | -         |   -12.56 | luchov, naz, Noktse, tomaszin, zock   |
|           85 |     1575 | 2024-09-03 | Bounty Hunters    | W   | 0.822      | -            | -                | -                | -         |     4.22 | luchov, naz, Noktse, tomaszin, zock   |
|           84 |     1612 | 2024-09-02 | paiN Academy      | W   | 0.815      | -            | -                | -                | -         |     0.51 | luchov, naz, Noktse, tomaszin, zock   |
|           83 |     1819 | 2024-08-27 | KRÜ               | W   | 0.773      | -            | -                | -                | -         |     6.33 | luchov, naz, Noktse, tomaszin, zock   |
|           82 |     1879 | 2024-08-26 | Galorys           | W   | 0.767      | -            | -                | -                | -         |     3.90 | luchov, naz, Noktse, tomaszin, zock   |
|           81 |     1894 | 2024-08-26 | Vikings KR        | W   | 0.766      | -            | -                | -                | -         |     3.44 | luchov, naz, Noktse, tomaszin, zock   |
|           80 |     2297 | 2024-08-13 | MIBR              | W   | 0.682      | 0.450        | 0.282 (0.086)    | -                | -         |    18.03 | luchov, naz, Noktse, tomaszin, zock   |
|           79 |     2300 | 2024-08-13 | MIBR              | L   | 0.682      | -            | -                | -                | -         |    -3.33 | luchov, naz, Noktse, tomaszin, zock   |
|           78 |     2306 | 2024-08-13 | SENSEI            | W   | 0.681      | -            | -                | -                | -         |     2.69 | luchov, naz, Noktse, tomaszin, zock   |
|           77 |     2388 | 2024-08-11 | Case              | W   | 0.667      | -            | -                | -                | -         |     6.37 | luchov, naz, Noktse, tomaszin, zock   |
|           76 |     2432 | 2024-08-09 | SENSEI            | W   | 0.654      | -            | -                | -                | -         |     2.53 | luchov, naz, Noktse, tomaszin, zock   |
|           75 |     2496 | 2024-08-07 | 9z Academy        | W   | 0.641      | -            | -                | -                | -         |     0.84 | luchov, Luken, Noktse, tomaszin, zock |
|           74 |     2605 | 2024-08-04 | RED Canids        | L   | 0.621      | -            | -                | -                | -         |    -4.91 | luchov, naz, Noktse, tomaszin, zock   |
|           73 |     2635 | 2024-08-03 | Vikings KR        | W   | 0.615      | -            | -                | -                | -         |     3.18 | luchov, naz, Noktse, tomaszin, zock   |
|           72 |     2645 | 2024-08-03 | ODDIK             | L   | 0.614      | -            | -                | -                | -         |    -7.53 | luchov, naz, Noktse, tomaszin, zock   |
|           71 |     2670 | 2024-08-02 | Case              | W   | 0.608      | -            | -                | -                | -         |     5.71 | luchov, naz, Noktse, tomaszin, zock   |
|           70 |     2680 | 2024-08-02 | Solid             | L   | 0.607      | -            | -                | -                | -         |   -13.41 | luchov, naz, Noktse, tomaszin, zock   |
|           69 |     2703 | 2024-08-01 | Players           | W   | 0.602      | -            | -                | -                | -         |     1.81 | luchov, naz, Noktse, tomaszin, zock   |
|           68 |     2706 | 2024-08-01 | LaChampionsLiga   | W   | 0.602      | -            | -                | -                | -         |     1.12 | luchov, naz, Noktse, tomaszin, zock   |
|           67 |     2718 | 2024-08-01 | Fluxo             | L   | 0.601      | -            | -                | -                | -         |    -7.61 | luchov, naz, Noktse, tomaszin, zock   |
|           66 |     2802 | 2024-07-30 | Galorys           | L   | 0.589      | -            | -                | -                | -         |   -15.46 | luchov, naz, Noktse, tomaszin, zock   |
|           65 |     2805 | 2024-07-30 | Galorys           | W   | 0.588      | -            | -                | -                | -         |     3.00 | luchov, naz, Noktse, tomaszin, zock   |
|           64 |     2814 | 2024-07-30 | KRÜ               | W   | 0.587      | -            | -                | -                | -         |     3.94 | luchov, naz, Noktse, tomaszin, zock   |
|           63 |     2842 | 2024-07-29 | Intense           | W   | 0.582      | -            | -                | -                | -         |     2.18 | luchov, naz, Noktse, tomaszin, zock   |
|           62 |     2870 | 2024-07-28 | Vikings KR        | W   | 0.575      | -            | -                | -                | -         |     2.30 | luchov, naz, Noktse, tomaszin, zock   |
|           61 |     2952 | 2024-07-25 | Sharks            | L   | 0.555      | -            | -                | -                | -         |    -8.43 | luchov, naz, Noktse, tomaszin, zock   |
|           60 |     2960 | 2024-07-25 | Bad News Chickens | W   | 0.555      | -            | -                | -                | -         |     1.71 | luchov, naz, Noktse, tomaszin, zock   |
|           59 |     3030 | 2024-07-23 | Fluxo             | L   | 0.542      | -            | -                | -                | -         |    -6.88 | luchov, naz, Noktse, tomaszin, zock   |
|           58 |     3034 | 2024-07-23 | Hype              | W   | 0.541      | -            | -                | -                | -         |     3.69 | luchov, naz, Noktse, tomaszin, zock   |
|           57 |     3069 | 2024-07-22 | Fluxo             | W   | 0.534      | -            | -                | -                | -         |    10.59 | luchov, naz, Noktse, tomaszin, zock   |
|           56 |     3094 | 2024-07-21 | RED Canids        | W   | 0.527      | -            | -                | -                | -         |    12.69 | luchov, naz, Noktse, tomaszin, zock   |
|           55 |     3151 | 2024-07-19 | KRÜ               | W   | 0.515      | -            | -                | -                | -         |     3.64 | luchov, naz, Noktse, tomaszin, zock   |
|           54 |     3159 | 2024-07-19 | W7M               | L   | 0.514      | -            | -                | -                | -         |   -13.78 | luchov, naz, Noktse, tomaszin, zock   |
|           53 |     3210 | 2024-07-18 | Imperial          | L   | 0.507      | -            | -                | -                | -         |    -5.37 | luchov, naz, Noktse, tomaszin, zock   |
|           52 |     3212 | 2024-07-18 | Amigos de T2M4SS  | W   | 0.507      | -            | -                | -                | -         |     0.35 | luchov, naz, Noktse, tomaszin, zock   |
|           51 |     3216 | 2024-07-18 | ODDIK             | L   | 0.507      | -            | -                | -                | -         |    -6.91 | luchov, naz, Noktse, tomaszin, zock   |
|           50 |     3264 | 2024-07-17 | Fluxo             | L   | 0.502      | -            | -                | -                | -         |    -7.22 | luchov, naz, Noktse, tomaszin, zock   |
|           49 |     3270 | 2024-07-17 | Fluxo             | L   | 0.501      | -            | -                | -                | -         |    -7.55 | luchov, naz, Noktse, tomaszin, zock   |
|           48 |     3282 | 2024-07-17 | Vikings KR        | W   | 0.501      | -            | -                | -                | -         |     1.92 | luchov, naz, Noktse, tomaszin, zock   |
|           47 |     3330 | 2024-07-16 | ODDIK             | L   | 0.495      | -            | -                | -                | -         |    -6.95 | luchov, naz, Noktse, tomaszin, zock   |
|           46 |     3334 | 2024-07-16 | ODDIK             | W   | 0.495      | 0.450        | 0.185 (0.041)    | -                | -         |     8.85 | luchov, naz, Noktse, tomaszin, zock   |
|           45 |     3345 | 2024-07-16 | ODDIK             | L   | 0.494      | -            | -                | -                | -         |    -6.84 | luchov, naz, Noktse, tomaszin, zock   |
|           44 |     3393 | 2024-07-15 | Vikings KR        | W   | 0.487      | -            | -                | -                | -         |     1.69 | luchov, naz, Noktse, tomaszin, zock   |
|           43 |     3425 | 2024-07-13 | Intense           | W   | 0.474      | -            | -                | -                | -         |     1.32 | luchov, naz, Noktse, tomaszin, zock   |
|           42 |     3437 | 2024-07-12 | SPORT             | L   | 0.468      | -            | -                | -                | -         |   -13.47 | luchov, naz, Noktse, tomaszin, zock   |
|           41 |     3468 | 2024-07-10 | Sharks            | L   | 0.455      | -            | -                | -                | -         |    -7.13 | luchov, naz, Noktse, tomaszin, zock   |
|           40 |     3494 | 2024-07-09 | SPORT             | W   | 0.447      | -            | -                | -                | -         |     1.13 | luchov, naz, Noktse, tomaszin, zock   |
|           39 |     3511 | 2024-07-08 | Intense           | W   | 0.441      | -            | -                | -                | -         |     1.11 | luchov, naz, Noktse, tomaszin, zock   |
|           38 |     3518 | 2024-07-08 | Bounty Hunters    | L   | 0.440      | -            | -                | -                | -         |   -11.78 | luchov, naz, Noktse, tomaszin, zock   |
|           37 |     3651 | 2024-06-15 | 9z                | L   | 0.286      | -            | -                | -                | -         |    -2.53 | luchov, meyern, naz, Noktse, tomaszin |
|           36 |     3682 | 2024-06-14 | paiN              | L   | 0.280      | -            | -                | -                | -         |    -0.55 | luchov, meyern, naz, Noktse, tomaszin |
|           35 |     3781 | 2024-06-10 | paiN              | L   | 0.255      | -            | -                | -                | -         |    -0.51 | luchov, meyern, naz, Noktse, tomaszin |
|           34 |     3783 | 2024-06-10 | Bounty Hunters    | W   | 0.254      | -            | -                | -                | -         |     1.08 | luchov, meyern, naz, Noktse, tomaszin |
|           33 |     3815 | 2024-06-09 | RED Canids        | W   | 0.249      | -            | -                | -                | -         |     5.55 | luchov, meyern, naz, Noktse, tomaszin |
|           32 |     3838 | 2024-06-09 | Sharks            | L   | 0.246      | -            | -                | -                | -         |    -3.57 | luchov, meyern, naz, Noktse, tomaszin |
|           31 |     3882 | 2024-06-08 | Solid             | W   | 0.242      | -            | -                | -                | -         |     1.47 | luchov, meyern, naz, Noktse, tomaszin |
|           30 |     3901 | 2024-06-08 | Vikings KR        | L   | 0.240      | -            | -                | -                | -         |    -6.92 | luchov, meyern, naz, Noktse, tomaszin |
|           29 |     3942 | 2024-06-07 | ODDIK             | W   | 0.234      | -            | -                | -                | -         |     3.55 | luchov, meyern, naz, Noktse, tomaszin |
|           28 |     4002 | 2024-06-06 | inSanitY          | L   | 0.228      | -            | -                | -                | -         |    -5.50 | luchov, meyern, naz, Noktse, tomaszin |
|           27 |     4065 | 2024-06-05 | MIBR              | L   | 0.222      | -            | -                | -                | -         |    -1.21 | luchov, meyern, naz, Noktse, tomaszin |
|           26 |     4115 | 2024-06-04 | Sharks            | L   | 0.216      | -            | -                | -                | -         |    -3.23 | luchov, meyern, naz, Noktse, tomaszin |
|           25 |     4431 | 2024-05-22 | Case              | W   | 0.128      | -            | -                | -                | -         |     0.89 | luchov, meyern, naz, Noktse, tomaszin |
|           24 |     4435 | 2024-05-22 | Case              | W   | 0.128      | -            | -                | -                | -         |     0.90 | luchov, meyern, naz, Noktse, tomaszin |
|           23 |     4441 | 2024-05-22 | Fluxo             | W   | 0.128      | -            | -                | -                | -         |     1.74 | luchov, meyern, naz, Noktse, tomaszin |
|           22 |     4442 | 2024-05-22 | Fluxo             | W   | 0.127      | -            | -                | -                | -         |     1.76 | luchov, meyern, naz, Noktse, tomaszin |
|           21 |     4476 | 2024-05-21 | Players           | W   | 0.122      | -            | -                | -                | -         |     0.25 | luchov, meyern, naz, Noktse, tomaszin |
|           20 |     4479 | 2024-05-21 | Players           | W   | 0.121      | -            | -                | -                | -         |     0.25 | luchov, meyern, naz, Noktse, tomaszin |
|           19 |     4485 | 2024-05-21 | Imperial          | W   | 0.121      | -            | -                | -                | -         |     2.38 | luchov, meyern, naz, Noktse, tomaszin |
|           18 |     4487 | 2024-05-21 | Imperial          | W   | 0.121      | -            | -                | -                | -         |     2.40 | luchov, meyern, naz, Noktse, tomaszin |
|           17 |     4515 | 2024-05-20 | Corinthians       | W   | 0.115      | -            | -                | -                | -         |     0.06 | luchov, meyern, naz, Noktse, tomaszin |
|           16 |     4520 | 2024-05-20 | 9z                | W   | 0.114      | -            | -                | -                | -         |     2.58 | luchov, meyern, naz, Noktse, tomaszin |
|           15 |     4522 | 2024-05-20 | 9z                | L   | 0.114      | -            | -                | -                | -         |    -1.02 | luchov, meyern, naz, Noktse, tomaszin |
|           14 |     4602 | 2024-05-17 | Solid             | L   | 0.095      | -            | -                | -                | -         |    -2.42 | luchov, meyern, naz, Noktse, tomaszin |
|           13 |     4604 | 2024-05-17 | Solid             | W   | 0.095      | -            | -                | -                | -         |     0.58 | luchov, meyern, naz, Noktse, tomaszin |
|           12 |     4688 | 2024-05-15 | ODDIK             | W   | 0.081      | -            | -                | -                | -         |     1.28 | luchov, meyern, naz, Noktse, tomaszin |
|           11 |     4690 | 2024-05-15 | ODDIK             | W   | 0.081      | -            | -                | -                | -         |     1.29 | luchov, meyern, naz, Noktse, tomaszin |
|           10 |     4699 | 2024-05-15 | Hype              | L   | 0.080      | -            | -                | -                | -         |    -2.10 | luchov, meyern, naz, Noktse, tomaszin |
|            9 |     4747 | 2024-05-14 | Imperial          | L   | 0.075      | -            | -                | -                | -         |    -0.88 | luchov, meyern, naz, Noktse, tomaszin |
|            8 |     4760 | 2024-05-14 | RED Canids        | L   | 0.074      | -            | -                | -                | -         |    -0.70 | luchov, meyern, naz, Noktse, tomaszin |
|            7 |     4800 | 2024-05-12 | Solid             | W   | 0.061      | -            | -                | -                | -         |     0.37 | luchov, meyern, naz, Noktse, tomaszin |
|            6 |     4807 | 2024-05-12 | O PLANO           | W   | 0.060      | -            | -                | -                | -         |     0.03 | luchov, meyern, naz, Noktse, tomaszin |
|            5 |     4831 | 2024-05-11 | paiN              | L   | 0.054      | -            | -                | -                | -         |    -0.10 | luchov, meyern, naz, Noktse, tomaszin |
|            4 |     4857 | 2024-05-10 | Imperial          | W   | 0.047      | -            | -                | -                | -         |     0.94 | luchov, meyern, naz, Noktse, tomaszin |
|            3 |     4873 | 2024-05-09 | Sharks            | W   | 0.042      | -            | -                | -                | -         |     0.72 | luchov, meyern, naz, Noktse, tomaszin |
|            2 |     4902 | 2024-05-08 | Vikings KR        | W   | 0.034      | -            | -                | -                | -         |     0.02 | luchov, meyern, naz, Noktse, tomaszin |
|            1 |     4934 | 2024-05-06 | Sharks            | L   | 0.022      | -            | -                | -                | -         |    -0.32 | luchov, meyern, naz, Noktse, tomaszin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($52,921.69)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.22) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-26 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-10-20 |      1.000 | $7,500.00      | $7,500.00       |
| 2024-10-05 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-09-04 |      0.829 | $1,500.00      | $1,243.38       |
| 2024-08-13 |      0.681 | $6,000.00      | $4,085.77       |
| 2024-08-02 |      0.608 | $750.00        | $456.24         |
| 2024-07-22 |      0.534 | $20,000.00     | $10,675.54      |
| 2024-06-16 |      0.295 | $1,500.00      | $443.25         |
| 2024-06-10 |      0.255 | $4,000.00      | $1,021.16       |
| 2024-06-09 |      0.248 | $2,000.00      | $496.35         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
