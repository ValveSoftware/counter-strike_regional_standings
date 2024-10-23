### Roster Details<br />
Team Name: BESTIA<br />
Roster: luchov, naz, Noktse, tomaszin, zock<br />
Global Rank: [32](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_23.md)<br />
Regional Rank: [10]( ../../standings_americas_2024_10_23.md)<br />
<br />
Final Rank Value:  1181.7<br />
<br />
Final Rank Value (1181.7) = Starting Rank Value (1068.9) + Head To Head Adjustments (112.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.530[<sup>1</sup>](#table2)
- Bounty Collected: 0.460[<sup>2</sup>](#table1)
- Opponent Network: 0.265[<sup>2</sup>](#table1)
- LAN Wins: 0.110[<sup>2</sup>](#table1)

The average of these factors is 0.341<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1068.9
- 400 + ( ( 0.341 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 1068.9


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
|          114 |       58 | 2024-10-19 | MIBR              | L   | 1.000      | -            | -                | -                | -         |   -11.92 | luchov, naz, Noktse, tomaszin, zock   |
|          113 |       84 | 2024-10-18 | RED Canids        | W   | 1.000      | 0.450        | 0.146 (0.066)    | 0.544 (0.245)    | 0 (0.000) |    14.17 | luchov, naz, Noktse, tomaszin, zock   |
|          112 |      113 | 2024-10-17 | inSanitY          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.09 | luchov, naz, Noktse, tomaszin, zock   |
|          111 |      144 | 2024-10-16 | ODDIK             | W   | 1.000      | 0.450        | 0.161 (0.072)    | 0.576 (0.259)    | 0 (0.000) |    10.64 | luchov, naz, Noktse, tomaszin, zock   |
|          110 |      170 | 2024-10-15 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |   -17.03 | luchov, naz, Noktse, tomaszin, zock   |
|          109 |      260 | 2024-10-09 | KRÜ               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.17 | luchov, naz, Noktse, tomaszin, zock   |
|          108 |      267 | 2024-10-09 | KRÜ               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.43 | luchov, naz, Noktse, tomaszin, zock   |
|          107 |      329 | 2024-10-07 | RED Canids        | W   | 1.000      | 0.450        | 0.146 (0.066)    | 0.544 (0.245)    | 0 (0.000) |    17.50 | luchov, naz, Noktse, tomaszin, zock   |
|          106 |      330 | 2024-10-07 | RED Canids        | W   | 1.000      | 0.450        | 0.146 (0.066)    | 0.544 (0.245)    | 0 (0.000) |    19.08 | luchov, naz, Noktse, tomaszin, zock   |
|          105 |      384 | 2024-10-05 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |   -12.14 | luchov, naz, Noktse, tomaszin, zock   |
|          104 |      426 | 2024-10-04 | paiN              | W   | 1.000      | 0.389        | 0.345 (0.134)    | 0.759 (0.295)    | 1 (1.000) |    27.67 | luchov, naz, Noktse, tomaszin, zock   |
|          103 |      497 | 2024-10-02 | Case              | W   | 1.000      | 0.450        | -                | 0.568 (0.256)    | 0 (0.000) |     7.08 | luchov, naz, Noktse, tomaszin, zock   |
|          102 |      504 | 2024-10-02 | Case              | W   | 1.000      | 0.450        | -                | 0.568 (0.256)    | 0 (0.000) |     7.54 | luchov, naz, Noktse, tomaszin, zock   |
|          101 |      543 | 2024-10-01 | Solid             | W   | 1.000      | 0.450        | -                | 0.663 (0.298)    | -         |    10.74 | luchov, naz, Noktse, tomaszin, zock   |
|          100 |      547 | 2024-10-01 | Solid             | W   | 1.000      | 0.450        | -                | 0.663 (0.298)    | -         |    11.65 | luchov, naz, Noktse, tomaszin, zock   |
|           99 |      709 | 2024-09-26 | Sharks            | W   | 1.000      | -            | -                | -                | -         |    12.28 | luchov, naz, Noktse, tomaszin, zock   |
|           98 |      716 | 2024-09-26 | MIBR              | W   | 1.000      | 0.143        | 0.259 (0.037)    | -                | -         |    26.30 | luchov, naz, Noktse, tomaszin, zock   |
|           97 |      767 | 2024-09-25 | Imperial          | W   | 1.000      | 0.450        | 0.161 (0.072)    | 0.573 (0.258)    | -         |    24.87 | luchov, naz, Noktse, tomaszin, zock   |
|           96 |      771 | 2024-09-25 | Imperial          | L   | 1.000      | -            | -                | -                | -         |    -6.13 | luchov, naz, Noktse, tomaszin, zock   |
|           95 |      776 | 2024-09-25 | Imperial          | L   | 1.000      | -            | -                | -                | -         |    -6.48 | luchov, naz, Noktse, tomaszin, zock   |
|           94 |      818 | 2024-09-24 | Hype              | W   | 1.000      | -            | -                | -                | -         |     8.14 | luchov, naz, Noktse, tomaszin, zock   |
|           93 |      822 | 2024-09-24 | Hype              | L   | 1.000      | -            | -                | -                | -         |   -23.91 | luchov, naz, Noktse, tomaszin, zock   |
|           92 |     1003 | 2024-09-18 | paiN              | L   | 0.968      | -            | -                | -                | -         |    -1.43 | luchov, naz, Noktse, tomaszin, zock   |
|           91 |     1007 | 2024-09-18 | paiN              | L   | 0.967      | -            | -                | -                | -         |    -1.45 | luchov, naz, Noktse, tomaszin, zock   |
|           90 |     1036 | 2024-09-17 | inSanitY          | W   | 0.961      | -            | -                | -                | -         |    11.11 | luchov, naz, Noktse, tomaszin, zock   |
|           89 |     1037 | 2024-09-17 | inSanitY          | L   | 0.961      | -            | -                | -                | -         |   -19.54 | luchov, naz, Noktse, tomaszin, zock   |
|           88 |     1247 | 2024-09-10 | Dusty Roots       | W   | 0.914      | -            | -                | -                | -         |     4.14 | luchov, naz, Noktse, tomaszin, zock   |
|           87 |     1249 | 2024-09-10 | Dusty Roots       | W   | 0.914      | -            | -                | -                | -         |     4.31 | luchov, naz, Noktse, tomaszin, zock   |
|           86 |     1422 | 2024-09-04 | Fluxo             | L   | 0.873      | -            | -                | -                | -         |   -12.62 | luchov, naz, Noktse, tomaszin, zock   |
|           85 |     1445 | 2024-09-03 | Bounty Hunters    | W   | 0.868      | -            | -                | -                | -         |     5.12 | luchov, naz, Noktse, tomaszin, zock   |
|           84 |     1482 | 2024-09-02 | paiN Academy      | W   | 0.861      | -            | -                | -                | -         |     0.65 | luchov, naz, Noktse, tomaszin, zock   |
|           83 |     1689 | 2024-08-27 | KRÜ               | W   | 0.819      | -            | -                | -                | -         |     7.59 | luchov, naz, Noktse, tomaszin, zock   |
|           82 |     1749 | 2024-08-26 | Galorys           | W   | 0.813      | -            | -                | -                | -         |     4.76 | luchov, naz, Noktse, tomaszin, zock   |
|           81 |     1764 | 2024-08-26 | Vikings KR        | W   | 0.812      | -            | -                | -                | -         |     4.41 | luchov, naz, Noktse, tomaszin, zock   |
|           80 |     2167 | 2024-08-13 | MIBR              | W   | 0.728      | 0.450        | 0.259 (0.085)    | -                | -         |    19.69 | luchov, naz, Noktse, tomaszin, zock   |
|           79 |     2170 | 2024-08-13 | MIBR              | L   | 0.728      | -            | -                | -                | -         |    -3.09 | luchov, naz, Noktse, tomaszin, zock   |
|           78 |     2176 | 2024-08-13 | SENSEI            | W   | 0.727      | -            | -                | -                | -         |     4.23 | luchov, naz, Noktse, tomaszin, zock   |
|           77 |     2258 | 2024-08-11 | Case              | W   | 0.713      | -            | -                | -                | -         |     7.69 | luchov, naz, Noktse, tomaszin, zock   |
|           76 |     2302 | 2024-08-09 | SENSEI            | W   | 0.701      | -            | -                | -                | -         |     3.58 | luchov, naz, Noktse, tomaszin, zock   |
|           75 |     2366 | 2024-08-07 | 9z Academy        | W   | 0.687      | -            | -                | -                | -         |     1.16 | luchov, Luken, Noktse, tomaszin, zock |
|           74 |     2475 | 2024-08-04 | RED Canids        | L   | 0.667      | -            | -                | -                | -         |    -4.83 | luchov, naz, Noktse, tomaszin, zock   |
|           73 |     2505 | 2024-08-03 | Vikings KR        | W   | 0.661      | -            | -                | -                | -         |     4.26 | luchov, naz, Noktse, tomaszin, zock   |
|           72 |     2515 | 2024-08-03 | ODDIK             | L   | 0.660      | -            | -                | -                | -         |    -8.18 | luchov, naz, Noktse, tomaszin, zock   |
|           71 |     2540 | 2024-08-02 | Case              | W   | 0.654      | -            | -                | -                | -         |     7.04 | luchov, naz, Noktse, tomaszin, zock   |
|           70 |     2550 | 2024-08-02 | Solid             | L   | 0.653      | -            | -                | -                | -         |   -13.34 | luchov, naz, Noktse, tomaszin, zock   |
|           69 |     2573 | 2024-08-01 | Players           | W   | 0.648      | -            | -                | -                | -         |     2.48 | luchov, naz, Noktse, tomaszin, zock   |
|           68 |     2576 | 2024-08-01 | LaChampionsLiga   | W   | 0.648      | -            | -                | -                | -         |     1.52 | luchov, naz, Noktse, tomaszin, zock   |
|           67 |     2588 | 2024-08-01 | Fluxo             | L   | 0.647      | -            | -                | -                | -         |    -7.39 | luchov, naz, Noktse, tomaszin, zock   |
|           66 |     2672 | 2024-07-30 | Galorys           | L   | 0.635      | -            | -                | -                | -         |   -15.93 | luchov, naz, Noktse, tomaszin, zock   |
|           65 |     2675 | 2024-07-30 | Galorys           | W   | 0.634      | -            | -                | -                | -         |     3.97 | luchov, naz, Noktse, tomaszin, zock   |
|           64 |     2684 | 2024-07-30 | KRÜ               | W   | 0.633      | -            | -                | -                | -         |     5.10 | luchov, naz, Noktse, tomaszin, zock   |
|           63 |     2712 | 2024-07-29 | Intense           | W   | 0.628      | -            | -                | -                | -         |     3.08 | luchov, naz, Noktse, tomaszin, zock   |
|           62 |     2740 | 2024-07-28 | Vikings KR        | W   | 0.622      | -            | -                | -                | -         |     3.21 | luchov, naz, Noktse, tomaszin, zock   |
|           61 |     2822 | 2024-07-25 | Sharks            | L   | 0.602      | -            | -                | -                | -         |   -10.48 | luchov, naz, Noktse, tomaszin, zock   |
|           60 |     2830 | 2024-07-25 | Bad News Chickens | W   | 0.601      | -            | -                | -                | -         |     2.34 | luchov, naz, Noktse, tomaszin, zock   |
|           59 |     2900 | 2024-07-23 | Fluxo             | L   | 0.588      | -            | -                | -                | -         |    -6.65 | luchov, naz, Noktse, tomaszin, zock   |
|           58 |     2904 | 2024-07-23 | Hype              | W   | 0.588      | -            | -                | -                | -         |     4.81 | luchov, naz, Noktse, tomaszin, zock   |
|           57 |     2939 | 2024-07-22 | Fluxo             | W   | 0.580      | -            | -                | -                | -         |    12.34 | luchov, naz, Noktse, tomaszin, zock   |
|           56 |     2964 | 2024-07-21 | RED Canids        | W   | 0.573      | 0.384        | 0.146 (0.032)    | -                | -         |    14.39 | luchov, naz, Noktse, tomaszin, zock   |
|           55 |     3021 | 2024-07-19 | KRÜ               | W   | 0.561      | -            | -                | -                | -         |     4.86 | luchov, naz, Noktse, tomaszin, zock   |
|           54 |     3029 | 2024-07-19 | W7M               | L   | 0.560      | -            | -                | -                | -         |   -14.28 | luchov, naz, Noktse, tomaszin, zock   |
|           53 |     3080 | 2024-07-18 | Imperial          | L   | 0.553      | -            | -                | -                | -         |    -5.46 | luchov, naz, Noktse, tomaszin, zock   |
|           52 |     3082 | 2024-07-18 | Amigos de T2M4SS  | W   | 0.553      | -            | -                | -                | -         |     0.52 | luchov, naz, Noktse, tomaszin, zock   |
|           51 |     3086 | 2024-07-18 | ODDIK             | L   | 0.553      | -            | -                | -                | -         |    -7.74 | luchov, naz, Noktse, tomaszin, zock   |
|           50 |     3134 | 2024-07-17 | Fluxo             | L   | 0.548      | -            | -                | -                | -         |    -6.81 | luchov, naz, Noktse, tomaszin, zock   |
|           49 |     3140 | 2024-07-17 | Fluxo             | L   | 0.547      | -            | -                | -                | -         |    -7.13 | luchov, naz, Noktse, tomaszin, zock   |
|           48 |     3152 | 2024-07-17 | Vikings KR        | W   | 0.547      | -            | -                | -                | -         |     2.81 | luchov, naz, Noktse, tomaszin, zock   |
|           47 |     3200 | 2024-07-16 | ODDIK             | L   | 0.541      | -            | -                | -                | -         |    -7.69 | luchov, naz, Noktse, tomaszin, zock   |
|           46 |     3204 | 2024-07-16 | ODDIK             | W   | 0.541      | 0.450        | 0.161 (0.039)    | -                | -         |     9.58 | luchov, naz, Noktse, tomaszin, zock   |
|           45 |     3215 | 2024-07-16 | ODDIK             | L   | 0.540      | -            | -                | -                | -         |    -7.58 | luchov, naz, Noktse, tomaszin, zock   |
|           44 |     3263 | 2024-07-15 | Vikings KR        | W   | 0.533      | -            | -                | -                | -         |     2.48 | luchov, naz, Noktse, tomaszin, zock   |
|           43 |     3295 | 2024-07-13 | Intense           | W   | 0.520      | -            | -                | -                | -         |     1.97 | luchov, naz, Noktse, tomaszin, zock   |
|           42 |     3307 | 2024-07-12 | SPORT             | L   | 0.514      | -            | -                | -                | -         |   -14.37 | luchov, naz, Noktse, tomaszin, zock   |
|           41 |     3338 | 2024-07-10 | Sharks            | L   | 0.501      | -            | -                | -                | -         |    -9.45 | luchov, naz, Noktse, tomaszin, zock   |
|           40 |     3364 | 2024-07-09 | SPORT             | W   | 0.493      | -            | -                | -                | -         |     1.60 | luchov, naz, Noktse, tomaszin, zock   |
|           39 |     3381 | 2024-07-08 | Intense           | W   | 0.487      | -            | -                | -                | -         |     1.66 | luchov, naz, Noktse, tomaszin, zock   |
|           38 |     3388 | 2024-07-08 | Bounty Hunters    | L   | 0.486      | -            | -                | -                | -         |   -12.31 | luchov, naz, Noktse, tomaszin, zock   |
|           37 |     3521 | 2024-06-15 | 9z                | L   | 0.332      | -            | -                | -                | -         |    -2.17 | luchov, meyern, naz, Noktse, tomaszin |
|           36 |     3552 | 2024-06-14 | paiN              | L   | 0.326      | -            | -                | -                | -         |    -0.73 | luchov, meyern, naz, Noktse, tomaszin |
|           35 |     3651 | 2024-06-10 | paiN              | L   | 0.301      | -            | -                | -                | -         |    -0.69 | luchov, meyern, naz, Noktse, tomaszin |
|           34 |     3653 | 2024-06-10 | Bounty Hunters    | W   | 0.300      | -            | -                | -                | -         |     1.67 | luchov, meyern, naz, Noktse, tomaszin |
|           33 |     3685 | 2024-06-09 | RED Canids        | W   | 0.295      | -            | -                | -                | -         |     7.01 | luchov, meyern, naz, Noktse, tomaszin |
|           32 |     3708 | 2024-06-09 | Sharks            | L   | 0.292      | -            | -                | -                | -         |    -5.31 | luchov, meyern, naz, Noktse, tomaszin |
|           31 |     3752 | 2024-06-08 | Solid             | W   | 0.288      | -            | -                | -                | -         |     2.22 | luchov, meyern, naz, Noktse, tomaszin |
|           30 |     3771 | 2024-06-08 | Vikings KR        | L   | 0.286      | -            | -                | -                | -         |    -7.99 | luchov, meyern, naz, Noktse, tomaszin |
|           29 |     3812 | 2024-06-07 | ODDIK             | W   | 0.280      | -            | -                | -                | -         |     4.06 | luchov, meyern, naz, Noktse, tomaszin |
|           28 |     3872 | 2024-06-06 | inSanitY          | L   | 0.274      | -            | -                | -                | -         |    -6.18 | luchov, meyern, naz, Noktse, tomaszin |
|           27 |     3935 | 2024-06-05 | MIBR              | L   | 0.268      | -            | -                | -                | -         |    -1.10 | luchov, meyern, naz, Noktse, tomaszin |
|           26 |     3985 | 2024-06-04 | Sharks            | L   | 0.262      | -            | -                | -                | -         |    -4.96 | luchov, meyern, naz, Noktse, tomaszin |
|           25 |     4301 | 2024-05-22 | Case              | W   | 0.174      | -            | -                | -                | -         |     1.50 | luchov, meyern, naz, Noktse, tomaszin |
|           24 |     4305 | 2024-05-22 | Case              | W   | 0.174      | -            | -                | -                | -         |     1.51 | luchov, meyern, naz, Noktse, tomaszin |
|           23 |     4311 | 2024-05-22 | Fluxo             | W   | 0.174      | -            | -                | -                | -         |     2.71 | luchov, meyern, naz, Noktse, tomaszin |
|           22 |     4312 | 2024-05-22 | Fluxo             | W   | 0.173      | -            | -                | -                | -         |     2.75 | luchov, meyern, naz, Noktse, tomaszin |
|           21 |     4346 | 2024-05-21 | Players           | W   | 0.168      | -            | -                | -                | -         |     0.48 | luchov, meyern, naz, Noktse, tomaszin |
|           20 |     4349 | 2024-05-21 | Players           | W   | 0.167      | -            | -                | -                | -         |     0.48 | luchov, meyern, naz, Noktse, tomaszin |
|           19 |     4355 | 2024-05-21 | Imperial          | W   | 0.167      | -            | -                | -                | -         |     3.44 | luchov, meyern, naz, Noktse, tomaszin |
|           18 |     4357 | 2024-05-21 | Imperial          | W   | 0.167      | -            | -                | -                | -         |     3.48 | luchov, meyern, naz, Noktse, tomaszin |
|           17 |     4385 | 2024-05-20 | Corinthians       | W   | 0.161      | -            | -                | -                | -         |     0.12 | luchov, meyern, naz, Noktse, tomaszin |
|           16 |     4390 | 2024-05-20 | 9z                | W   | 0.160      | -            | -                | -                | -         |     4.04 | luchov, meyern, naz, Noktse, tomaszin |
|           15 |     4392 | 2024-05-20 | 9z                | L   | 0.160      | -            | -                | -                | -         |    -1.01 | luchov, meyern, naz, Noktse, tomaszin |
|           14 |     4472 | 2024-05-17 | Solid             | L   | 0.141      | -            | -                | -                | -         |    -3.34 | luchov, meyern, naz, Noktse, tomaszin |
|           13 |     4474 | 2024-05-17 | Solid             | W   | 0.141      | -            | -                | -                | -         |     1.11 | luchov, meyern, naz, Noktse, tomaszin |
|           12 |     4558 | 2024-05-15 | ODDIK             | W   | 0.127      | -            | -                | -                | -         |     1.97 | luchov, meyern, naz, Noktse, tomaszin |
|           11 |     4560 | 2024-05-15 | ODDIK             | W   | 0.127      | -            | -                | -                | -         |     1.99 | luchov, meyern, naz, Noktse, tomaszin |
|           10 |     4569 | 2024-05-15 | Hype              | L   | 0.126      | -            | -                | -                | -         |    -3.12 | luchov, meyern, naz, Noktse, tomaszin |
|            9 |     4617 | 2024-05-14 | Imperial          | L   | 0.121      | -            | -                | -                | -         |    -1.30 | luchov, meyern, naz, Noktse, tomaszin |
|            8 |     4630 | 2024-05-14 | RED Canids        | L   | 0.120      | -            | -                | -                | -         |    -0.94 | luchov, meyern, naz, Noktse, tomaszin |
|            7 |     4670 | 2024-05-12 | Solid             | W   | 0.107      | -            | -                | -                | -         |     0.84 | luchov, meyern, naz, Noktse, tomaszin |
|            6 |     4677 | 2024-05-12 | O PLANO           | W   | 0.106      | -            | -                | -                | -         |     0.08 | luchov, meyern, naz, Noktse, tomaszin |
|            5 |     4701 | 2024-05-11 | paiN              | L   | 0.100      | -            | -                | -                | -         |    -0.20 | luchov, meyern, naz, Noktse, tomaszin |
|            4 |     4727 | 2024-05-10 | Imperial          | W   | 0.093      | -            | -                | -                | -         |     1.94 | luchov, meyern, naz, Noktse, tomaszin |
|            3 |     4743 | 2024-05-09 | Sharks            | W   | 0.088      | -            | -                | -                | -         |     1.15 | luchov, meyern, naz, Noktse, tomaszin |
|            2 |     4772 | 2024-05-08 | Vikings KR        | W   | 0.080      | -            | -                | -                | -         |     0.06 | luchov, meyern, naz, Noktse, tomaszin |
|            1 |     4804 | 2024-05-06 | Sharks            | L   | 0.068      | -            | -                | -                | -         |    -1.26 | luchov, meyern, naz, Noktse, tomaszin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($35,104.45)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $7,500.00      | $7,500.00       |
| 2024-10-05 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-09-04 |      0.875 | $1,500.00      | $1,312.42       |
| 2024-08-13 |      0.727 | $6,000.00      | $4,361.93       |
| 2024-08-02 |      0.654 | $750.00        | $490.76         |
| 2024-07-22 |      0.580 | $20,000.00     | $11,596.08      |
| 2024-06-16 |      0.342 | $1,500.00      | $512.29         |
| 2024-06-10 |      0.301 | $4,000.00      | $1,205.27       |
| 2024-06-09 |      0.294 | $2,000.00      | $588.40         |
| 2024-05-12 |      0.107 | $5,000.00      | $537.29         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
