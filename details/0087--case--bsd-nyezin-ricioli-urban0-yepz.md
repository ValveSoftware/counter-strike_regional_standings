### Roster Details<br />
Team Name: Case<br />
Roster: bsd, nyezin, RICIOLI, urban0, yepz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [87](../standings_global.md)<br />
Regional Rank: [22]( ../standings_americas.md)<br />
Final Rank Value:  915.1<br />
<br />
Final Rank Value (915.1) = Starting Rank Value (938.2) + Head To Head Adjustments (-23.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.391[<sup>1</sup>](#table2)
- Bounty Collected: 0.427[<sup>2</sup>](#table1)
- Opponent Network: 0.245[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.266<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 938.2
- 400 + ( ( 0.266 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 938.2


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
|          112 |       33 | 2024-07-23 | KRÜ               | L   | 1.000      | -            | -                | -                | -         |   -18.14 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          111 |       35 | 2024-07-23 | Fluxo             | W   | 1.000      | 0.143        | 0.157 (0.022)    | -                | 0 (0.000) |    26.17 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          110 |       42 | 2024-07-23 | Sharks Youngsters | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.85 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          109 |       64 | 2024-07-22 | Intense           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.21 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          108 |      121 | 2024-07-20 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |    -4.66 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          107 |      148 | 2024-07-19 | Dusty Roots       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.65 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          106 |      160 | 2024-07-19 | Vikings KR        | L   | 1.000      | -            | -                | -                | -         |   -18.58 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          105 |      162 | 2024-07-19 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -5.08 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          104 |      186 | 2024-07-18 | Smoke             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.24 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          103 |      190 | 2024-07-18 | Smoke             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.84 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          102 |      195 | 2024-07-18 | ODDIK             | W   | 1.000      | 0.384        | 0.083 (0.032)    | 0.694 (0.267)    | 0 (0.000) |    22.79 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          101 |      200 | 2024-07-18 | Hype              | L   | 1.000      | -            | -                | -                | -         |   -14.93 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          100 |      261 | 2024-07-17 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -1.87 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           99 |      263 | 2024-07-17 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -1.91 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           98 |      288 | 2024-07-17 | Vikings KR        | L   | 1.000      | -            | -                | -                | -         |   -18.38 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           97 |      321 | 2024-07-16 | Solid             | L   | 1.000      | -            | -                | -                | -         |   -19.00 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           96 |      327 | 2024-07-16 | Solid             | W   | 1.000      | 0.450        | 0.037 (0.017)    | 0.791 (0.356)    | 0 (0.000) |    12.22 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           95 |      370 | 2024-07-15 | 9z Academy        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.65 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           94 |      378 | 2024-07-15 | ODDIK             | L   | 1.000      | -            | -                | -                | -         |   -10.17 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           93 |      385 | 2024-07-15 | Imperial          | W   | 1.000      | 0.450        | 0.317 (0.143)    | 0.653 (0.294)    | 0 (0.000) |    27.96 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           92 |      388 | 2024-07-15 | Imperial          | W   | 1.000      | 0.450        | 0.317 (0.143)    | 0.653 (0.294)    | -         |    28.85 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           91 |      425 | 2024-07-13 | Dusty Roots       | W   | 1.000      | -            | -                | -                | -         |    11.16 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           90 |      446 | 2024-07-11 | W7M               | L   | 1.000      | -            | -                | -                | -         |   -17.86 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           89 |      451 | 2024-07-11 | Hawks             | W   | 1.000      | -            | -                | -                | -         |     4.20 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           88 |      452 | 2024-07-11 | Galorys           | W   | 1.000      | 0.371        | -                | 0.592 (0.219)    | -         |    13.41 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           87 |      469 | 2024-07-10 | Legacy            | L   | 1.000      | -            | -                | -                | -         |    -6.54 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           86 |      495 | 2024-07-09 | W7M               | W   | 1.000      | 0.371        | -                | 0.495 (0.183)    | -         |    12.00 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           85 |      585 | 2024-06-19 | inSanitY          | L   | 0.968      | -            | -                | -                | -         |    -9.17 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           84 |      587 | 2024-06-18 | Solid             | W   | 0.961      | 0.337        | -                | 0.791 (0.256)    | -         |    15.72 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           83 |      903 | 2024-06-08 | Galorys           | L   | 0.893      | -            | -                | -                | -         |   -14.17 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           82 |      952 | 2024-06-07 | Vikings KR        | L   | 0.887      | -            | -                | -                | -         |   -17.16 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           81 |      986 | 2024-06-06 | Bounty Hunters    | L   | 0.882      | -            | -                | -                | -         |   -13.55 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           80 |     1024 | 2024-06-06 | Bounty Hunters    | L   | 0.879      | -            | -                | -                | -         |   -14.61 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           79 |     1146 | 2024-06-03 | Solid             | L   | 0.862      | -            | -                | -                | -         |   -13.85 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           78 |     1193 | 2024-06-01 | Smoke             | W   | 0.848      | -            | -                | -                | -         |     6.66 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           77 |     1280 | 2024-05-29 | Dusty Roots       | W   | 0.828      | -            | -                | -                | -         |     8.80 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           76 |     1332 | 2024-05-27 | Hawks             | L   | 0.814      | -            | -                | -                | -         |   -22.83 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           75 |     1427 | 2024-05-22 | BESTIA            | L   | 0.781      | -            | -                | -                | -         |    -7.14 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           74 |     1431 | 2024-05-22 | BESTIA            | L   | 0.781      | -            | -                | -                | -         |    -7.56 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           73 |     1470 | 2024-05-21 | Sharks            | W   | 0.775      | 0.450        | 0.038 (0.013)    | 0.538 (0.188)    | -         |    15.33 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           72 |     1471 | 2024-05-21 | Sharks            | L   | 0.775      | -            | -                | -                | -         |    -9.05 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           71 |     1480 | 2024-05-21 | ODDIK             | W   | 0.774      | 0.303        | 0.083 (0.019)    | -                | -         |    13.74 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           70 |     1519 | 2024-05-20 | Galorys           | W   | 0.767      | -            | -                | -                | -         |    11.24 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           69 |     1537 | 2024-05-19 | ODDIK             | L   | 0.761      | -            | -                | -                | -         |   -10.17 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           68 |     1565 | 2024-05-18 | Solid             | W   | 0.754      | -            | -                | -                | -         |    11.56 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           67 |     1602 | 2024-05-17 | Fluxo             | L   | 0.748      | -            | -                | -                | -         |    -5.40 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           66 |     1608 | 2024-05-17 | Hype              | W   | 0.747      | -            | -                | -                | -         |    10.99 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           65 |     1641 | 2024-05-16 | KRÜ               | W   | 0.740      | -            | -                | -                | -         |    11.93 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           64 |     1649 | 2024-05-16 | Yawara            | W   | 0.740      | -            | -                | -                | -         |     2.49 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           63 |     1687 | 2024-05-15 | Corinthians       | W   | 0.734      | -            | -                | -                | -         |     2.43 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           62 |     1689 | 2024-05-15 | Corinthians       | W   | 0.734      | -            | -                | -                | -         |     2.49 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           61 |     1696 | 2024-05-15 | Galorys           | W   | 0.733      | -            | -                | -                | -         |    11.87 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           60 |     1737 | 2024-05-14 | Galorys           | W   | 0.728      | 0.450        | -                | 0.592 (0.194)    | -         |    12.58 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           59 |     1741 | 2024-05-14 | Galorys           | L   | 0.728      | -            | -                | -                | -         |   -10.49 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           58 |     1754 | 2024-05-14 | Hype              | L   | 0.727      | -            | -                | -                | -         |   -11.42 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           57 |     1776 | 2024-05-13 | Intense           | W   | 0.721      | -            | -                | -                | -         |     3.86 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           56 |     1804 | 2024-05-12 | Solid             | L   | 0.713      | -            | -                | -                | -         |   -10.71 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           55 |     1837 | 2024-05-11 | Galorys           | L   | 0.706      | -            | -                | -                | -         |   -11.89 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           54 |     1915 | 2024-05-07 | inSanitY          | L   | 0.680      | -            | -                | -                | -         |   -10.01 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           53 |     1943 | 2024-05-05 | ODDIK             | L   | 0.668      | -            | -                | -                | -         |    -8.45 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           52 |     2002 | 2024-05-02 | ODDIK             | W   | 0.648      | 0.450        | 0.083 (0.024)    | 0.694 (0.202)    | -         |    12.54 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           51 |     2003 | 2024-05-02 | ODDIK             | L   | 0.648      | -            | -                | -                | -         |    -7.95 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           50 |     2027 | 2024-05-01 | 9z                | L   | 0.641      | -            | -                | -                | -         |    -0.43 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           49 |     2029 | 2024-05-01 | 9z                | L   | 0.640      | -            | -                | -                | -         |    -0.43 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           48 |     2403 | 2024-04-17 | MIBR              | L   | 0.548      | -            | -                | -                | -         |    -0.71 | RCF, RICIOLI, snow, urban0, yepz       |
|           47 |     2440 | 2024-04-16 | Galorys           | W   | 0.542      | -            | -                | -                | -         |     8.21 | RCF, RICIOLI, snow, urban0, yepz       |
|           46 |     2491 | 2024-04-13 | MIBR              | L   | 0.520      | -            | -                | -                | -         |    -0.68 | pr1sma, RCF, RICIOLI, urban0, yepz     |
|           45 |     2504 | 2024-04-12 | adalYamigos       | W   | 0.515      | -            | -                | -                | -         |     3.29 | RCF, RICIOLI, snow, urban0, yepz       |
|           44 |     2539 | 2024-04-11 | FURIA Academy     | W   | 0.506      | -            | -                | -                | -         |     1.77 | RCF, RICIOLI, snow, urban0, yepz       |
|           43 |     2612 | 2024-04-09 | paiN              | L   | 0.495      | -            | -                | -                | -         |    -0.60 | RCF, RICIOLI, snow, urban0, yepz       |
|           42 |     2618 | 2024-04-09 | paiN              | L   | 0.494      | -            | -                | -                | -         |    -0.61 | RCF, RICIOLI, snow, urban0, yepz       |
|           41 |     2689 | 2024-04-07 | adalYamigos       | L   | 0.482      | -            | -                | -                | -         |   -12.32 | RCF, RICIOLI, snow, urban0, yepz       |
|           40 |     2751 | 2024-04-04 | RED Canids        | W   | 0.461      | 0.450        | 0.102 (0.021)    | -                | -         |    11.41 | RCF, RICIOLI, snow, urban0, yepz       |
|           39 |     2754 | 2024-04-04 | RED Canids        | L   | 0.461      | -            | -                | -                | -         |    -3.12 | RCF, RICIOLI, snow, urban0, yepz       |
|           38 |     2790 | 2024-04-03 | Imperial          | L   | 0.455      | -            | -                | -                | -         |    -1.04 | RCF, RICIOLI, snow, urban0, yepz       |
|           37 |     2793 | 2024-04-03 | Imperial          | L   | 0.454      | -            | -                | -                | -         |    -1.05 | RCF, RICIOLI, snow, urban0, yepz       |
|           36 |     2923 | 2024-03-27 | MIBR              | L   | 0.408      | -            | -                | -                | -         |    -0.61 | RCF, RICIOLI, snow, urban0, yepz       |
|           35 |     2929 | 2024-03-27 | MIBR              | L   | 0.408      | -            | -                | -                | -         |    -0.61 | RCF, RICIOLI, snow, urban0, yepz       |
|           34 |     3099 | 2024-03-17 | ODDIK             | L   | 0.341      | -            | -                | -                | -         |    -4.11 | RCF, RICIOLI, snow, urban0, yepz       |
|           33 |     3123 | 2024-03-16 | MIBR Academy      | W   | 0.334      | -            | -                | -                | -         |     1.04 | RCF, RICIOLI, snow, urban0, yepz       |
|           32 |     3138 | 2024-03-15 | RED Canids        | L   | 0.328      | -            | -                | -                | -         |    -2.57 | RCF, RICIOLI, snow, urban0, yepz       |
|           31 |     3178 | 2024-03-14 | FURIA Academy     | W   | 0.320      | -            | -                | -                | -         |     1.06 | RCF, RICIOLI, snow, urban0, yepz       |
|           30 |     3197 | 2024-03-13 | RED Canids        | L   | 0.314      | -            | -                | -                | -         |    -2.43 | RCF, RICIOLI, snow, urban0, yepz       |
|           29 |     3207 | 2024-03-13 | Yawara            | L   | 0.314      | -            | -                | -                | -         |    -8.97 | RCF, RICIOLI, snow, urban0, yepz       |
|           28 |     3211 | 2024-03-13 | ODDIK             | L   | 0.313      | -            | -                | -                | -         |    -3.98 | RCF, RICIOLI, snow, urban0, yepz       |
|           27 |     3247 | 2024-03-12 | LA RUGONETA       | W   | 0.306      | -            | -                | -                | -         |     1.12 | RCF, RICIOLI, snow, urban0, yepz       |
|           26 |     3276 | 2024-03-10 | FURIA Academy     | W   | 0.295      | -            | -                | -                | -         |     0.88 | RCF, RICIOLI, snow, urban0, yepz       |
|           25 |     3296 | 2024-03-09 | Sharks            | W   | 0.288      | -            | -                | -                | -         |     5.27 | RCF, RICIOLI, snow, urban0, yepz       |
|           24 |     3346 | 2024-03-07 | Fluxo             | W   | 0.274      | 0.435        | 0.157 (0.019)    | -                | -         |     6.08 | RCF, RICIOLI, snow, urban0, yepz       |
|           23 |     3408 | 2024-03-05 | adalYamigos       | L   | 0.262      | -            | -                | -                | -         |    -6.96 | RCF, RICIOLI, snow, urban0, yepz       |
|           22 |     3410 | 2024-03-05 | adalYamigos       | L   | 0.261      | -            | -                | -                | -         |    -7.04 | RCF, RICIOLI, snow, urban0, yepz       |
|           21 |     3438 | 2024-03-04 | Fluxo             | L   | 0.255      | -            | -                | -                | -         |    -2.51 | RCF, RICIOLI, snow, urban0, yepz       |
|           20 |     3439 | 2024-03-04 | Fluxo             | L   | 0.255      | -            | -                | -                | -         |    -2.56 | RCF, RICIOLI, snow, urban0, yepz       |
|           19 |     3615 | 2024-02-24 | 2GAME             | W   | 0.195      | -            | -                | -                | -         |     1.25 | RCF, RICIOLI, snow, urban0, yepz       |
|           18 |     3622 | 2024-02-24 | 2GAME             | L   | 0.195      | -            | -                | -                | -         |    -4.94 | RCF, RICIOLI, snow, urban0, yepz       |
|           17 |     3675 | 2024-02-21 | Solid             | W   | 0.175      | -            | -                | -                | -         |     2.57 | RCF, RICIOLI, snow, urban0, yepz       |
|           16 |     3676 | 2024-02-21 | Solid             | L   | 0.175      | -            | -                | -                | -         |    -2.99 | RCF, RICIOLI, snow, urban0, yepz       |
|           15 |     3683 | 2024-02-21 | Sharks            | L   | 0.175      | -            | -                | -                | -         |    -2.53 | RCF, RICIOLI, snow, urban0, yepz       |
|           14 |     3712 | 2024-02-20 | 9z                | L   | 0.168      | -            | -                | -                | -         |    -0.12 | RCF, RICIOLI, snow, urban0, yepz       |
|           13 |     3715 | 2024-02-20 | W7M               | W   | 0.167      | -            | -                | -                | -         |     1.97 | RCF, RICIOLI, snow, urban0, yepz       |
|           12 |     3719 | 2024-02-20 | Sharks            | L   | 0.166      | -            | -                | -                | -         |    -2.41 | RCF, RICIOLI, snow, urban0, yepz       |
|           11 |     3759 | 2024-02-18 | Galorys           | L   | 0.154      | -            | -                | -                | -         |    -2.92 | RCF, RICIOLI, snow, urban0, yepz       |
|           10 |     3780 | 2024-02-17 | Solid             | W   | 0.149      | -            | -                | -                | -         |     2.12 | RCF, RICIOLI, snow, urban0, yepz       |
|            9 |     3804 | 2024-02-16 | BESTIA            | W   | 0.142      | -            | -                | -                | -         |     2.81 | RCF, RICIOLI, snow, urban0, yepz       |
|            8 |     3837 | 2024-02-15 | 9z                | L   | 0.134      | -            | -                | -                | -         |    -0.09 | RCF, RICIOLI, snow, urban0, yepz       |
|            7 |     3838 | 2024-02-15 | Sharks            | W   | 0.134      | -            | -                | -                | -         |     2.32 | RCF, RICIOLI, snow, urban0, yepz       |
|            6 |     3845 | 2024-02-15 | Flamengo          | W   | 0.133      | -            | -                | -                | -         |     0.33 | RCF, RICIOLI, snow, urban0, yepz       |
|            5 |     3866 | 2024-02-14 | O PLANO C         | W   | 0.128      | -            | -                | -                | -         |     0.19 | RCF, RICIOLI, snow, urban0, yepz       |
|            4 |     3909 | 2024-02-13 | W7M               | W   | 0.122      | -            | -                | -                | -         |     1.46 | RCF, RICIOLI, snow, urban0, yepz       |
|            3 |     3913 | 2024-02-13 | W7M               | L   | 0.121      | -            | -                | -                | -         |    -2.39 | RCF, RICIOLI, snow, urban0, yepz       |
|            2 |     3918 | 2024-02-13 | Galorys           | W   | 0.120      | -            | -                | -                | -         |     1.56 | RCF, RICIOLI, snow, urban0, yepz       |
|            1 |     3931 | 2024-02-12 | Dusty Roots       | W   | 0.113      | -            | -                | -                | -         |     1.15 | RCF, RICIOLI, snow, urban0, yepz       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,697.18)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-19 |      0.968 | $2,150.00      | $2,080.37       |
| 2024-06-09 |      0.901 | $600.00        | $540.73         |
| 2024-05-21 |      0.774 | $3,500.00      | $2,709.40       |
| 2024-05-19 |      0.761 | $1,000.00      | $761.22         |
| 2024-03-14 |      0.321 | $5,000.00      | $1,605.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
