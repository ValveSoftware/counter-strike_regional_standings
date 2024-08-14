### Roster Details<br />
Team Name: Case<br />
Roster: bsd, nyezin, RICIOLI, urban0, yepz<br />
Global Rank: [95](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [24]( ../standings_americas.md)<br />
<br />
Final Rank Value:  878.4<br />
<br />
Final Rank Value (878.4) = Starting Rank Value (923.5) + Head To Head Adjustments (-45.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.397[<sup>1</sup>](#table2)
- Bounty Collected: 0.408[<sup>2</sup>](#table1)
- Opponent Network: 0.256[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.265<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 923.5
- 400 + ( ( 0.265 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 923.5


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
|          124 |       17 | 2024-08-13 | ODDIK             | L   | 1.000      | -            | -                | -                | -         |    -7.32 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          123 |       23 | 2024-08-13 | ODDIK             | W   | 1.000      | 0.450        | 0.097 (0.044)    | 0.822 (0.370)    | 0 (0.000) |    24.74 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          122 |       67 | 2024-08-12 | Patins da Ferrari | L   | 1.000      | -            | -                | -                | -         |   -20.30 | betinho, nyezin, RICIOLI, urban0, yepz |
|          121 |      107 | 2024-08-11 | BESTIA            | L   | 1.000      | -            | -                | -                | -         |   -11.82 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          120 |      157 | 2024-08-09 | KRÜ               | W   | 1.000      | 0.333        | -                | 0.565 (0.188)    | 0 (0.000) |    14.96 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          119 |      209 | 2024-08-07 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |    -6.55 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          118 |      211 | 2024-08-07 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |    -6.95 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          117 |      264 | 2024-08-06 | Dusty Roots       | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.21 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          116 |      389 | 2024-08-02 | BESTIA            | L   | 1.000      | -            | -                | -                | -         |   -12.13 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          115 |      392 | 2024-08-02 | inSanitY          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    18.66 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          114 |      421 | 2024-08-01 | ODDIK             | L   | 1.000      | -            | -                | -                | -         |    -9.26 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          113 |      431 | 2024-08-01 | Bad News Chickens | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.37 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          112 |      471 | 2024-07-31 | Legacy            | L   | 1.000      | -            | -                | -                | -         |    -8.98 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          111 |      479 | 2024-07-31 | KRÜ               | L   | 1.000      | -            | -                | -                | -         |   -16.95 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          110 |      481 | 2024-07-31 | KRÜ               | L   | 1.000      | -            | -                | -                | -         |   -18.49 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          109 |      489 | 2024-07-31 | Dusty Roots       | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.61 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          108 |      539 | 2024-07-30 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -1.55 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          107 |      602 | 2024-07-28 | Solid             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    16.89 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          106 |      627 | 2024-07-27 | Patins da Ferrari | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.46 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          105 |      639 | 2024-07-26 | Galorys           | L   | 1.000      | -            | -                | -                | -         |   -19.72 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          104 |      756 | 2024-07-23 | KRÜ               | L   | 1.000      | -            | -                | -                | -         |   -18.82 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          103 |      758 | 2024-07-23 | Fluxo             | W   | 1.000      | 0.143        | 0.105 (0.015)    | -                | 0 (0.000) |    24.97 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          102 |      765 | 2024-07-23 | Sharks Youngsters | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.62 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          101 |      787 | 2024-07-22 | Intense           | W   | 1.000      | -            | -                | -                | -         |    10.45 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          100 |      844 | 2024-07-20 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |    -5.82 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           99 |      871 | 2024-07-19 | Dusty Roots       | W   | 1.000      | -            | -                | -                | -         |    10.52 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           98 |      883 | 2024-07-19 | Vikings KR        | L   | 1.000      | -            | -                | -                | -         |   -19.14 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           97 |      885 | 2024-07-19 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -6.50 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           96 |      909 | 2024-07-18 | Smoke             | W   | 1.000      | -            | -                | -                | -         |     8.23 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           95 |      913 | 2024-07-18 | Smoke             | W   | 1.000      | -            | -                | -                | -         |     8.82 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           94 |      918 | 2024-07-18 | ODDIK             | W   | 1.000      | 0.384        | 0.097 (0.037)    | 0.822 (0.316)    | -         |    22.34 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           93 |      923 | 2024-07-18 | Hype              | L   | 1.000      | -            | -                | -                | -         |   -15.22 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           92 |      984 | 2024-07-17 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -1.43 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           91 |      986 | 2024-07-17 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -1.45 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           90 |     1011 | 2024-07-17 | Vikings KR        | L   | 1.000      | -            | -                | -                | -         |   -19.07 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           89 |     1044 | 2024-07-16 | Solid             | L   | 1.000      | -            | -                | -                | -         |   -19.54 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           88 |     1050 | 2024-07-16 | Solid             | W   | 1.000      | 0.450        | -                | 0.760 (0.342)    | -         |    11.64 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           87 |     1093 | 2024-07-15 | 9z Academy        | W   | 1.000      | -            | -                | -                | -         |     2.88 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           86 |     1101 | 2024-07-15 | ODDIK             | L   | 1.000      | -            | -                | -                | -         |   -10.46 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           85 |     1108 | 2024-07-15 | Imperial          | W   | 1.000      | 0.450        | 0.213 (0.096)    | 0.653 (0.294)    | -         |    26.04 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           84 |     1111 | 2024-07-15 | Imperial          | W   | 0.999      | 0.450        | 0.213 (0.096)    | 0.653 (0.294)    | -         |    27.26 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           83 |     1148 | 2024-07-13 | Dusty Roots       | W   | 0.986      | -            | -                | -                | -         |    12.13 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           82 |     1169 | 2024-07-11 | W7M               | L   | 0.974      | -            | -                | -                | -         |   -18.00 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           81 |     1174 | 2024-07-11 | Hawks             | W   | 0.973      | -            | -                | -                | -         |     8.46 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           80 |     1175 | 2024-07-11 | Galorys           | W   | 0.973      | 0.371        | 0.028 (0.010)    | 0.497 (0.179)    | -         |    13.34 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           79 |     1192 | 2024-07-10 | Legacy            | L   | 0.966      | -            | -                | -                | -         |    -8.54 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           78 |     1218 | 2024-07-09 | W7M               | W   | 0.959      | 0.371        | -                | 0.502 (0.178)    | -         |    11.05 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           77 |     1308 | 2024-06-19 | inSanitY          | L   | 0.827      | -            | -                | -                | -         |    -9.08 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           76 |     1310 | 2024-06-18 | Solid             | W   | 0.820      | 0.337        | -                | 0.760 (0.210)    | -         |    12.59 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           75 |     1626 | 2024-06-08 | Galorys           | L   | 0.752      | -            | -                | -                | -         |   -12.01 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           74 |     1675 | 2024-06-07 | Vikings KR        | L   | 0.746      | -            | -                | -                | -         |   -14.76 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           73 |     1709 | 2024-06-06 | Bounty Hunters    | L   | 0.742      | -            | -                | -                | -         |   -12.13 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           72 |     1747 | 2024-06-06 | Bounty Hunters    | L   | 0.739      | -            | -                | -                | -         |   -12.91 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           71 |     1869 | 2024-06-03 | Solid             | L   | 0.721      | -            | -                | -                | -         |   -12.47 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           70 |     1916 | 2024-06-01 | Smoke             | W   | 0.707      | -            | -                | -                | -         |     5.63 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           69 |     2003 | 2024-05-29 | Dusty Roots       | W   | 0.688      | -            | -                | -                | -         |     8.63 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           68 |     2055 | 2024-05-27 | Hawks             | L   | 0.673      | -            | -                | -                | -         |   -18.84 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           67 |     2150 | 2024-05-22 | BESTIA            | L   | 0.641      | -            | -                | -                | -         |    -6.72 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           66 |     2154 | 2024-05-22 | BESTIA            | L   | 0.641      | -            | -                | -                | -         |    -7.07 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           65 |     2193 | 2024-05-21 | Sharks            | W   | 0.634      | 0.450        | 0.027 (0.008)    | -                | -         |    11.85 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           64 |     2194 | 2024-05-21 | Sharks            | L   | 0.634      | -            | -                | -                | -         |    -8.23 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           63 |     2203 | 2024-05-21 | ODDIK             | W   | 0.634      | 0.303        | 0.097 (0.019)    | -                | -         |    11.51 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           62 |     2242 | 2024-05-20 | Galorys           | W   | 0.626      | -            | -                | -                | -         |     9.10 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           61 |     2260 | 2024-05-19 | ODDIK             | L   | 0.621      | -            | -                | -                | -         |    -8.14 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           60 |     2288 | 2024-05-18 | Solid             | W   | 0.614      | -            | -                | -                | -         |     8.58 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           59 |     2325 | 2024-05-17 | Fluxo             | L   | 0.607      | -            | -                | -                | -         |    -5.99 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           58 |     2331 | 2024-05-17 | Hype              | W   | 0.606      | -            | -                | -                | -         |     8.65 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           57 |     2364 | 2024-05-16 | KRÜ               | W   | 0.600      | -            | -                | -                | -         |     9.14 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           56 |     2372 | 2024-05-16 | Yawara            | W   | 0.599      | -            | -                | -                | -         |     1.98 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           55 |     2410 | 2024-05-15 | Corinthians       | W   | 0.594      | -            | -                | -                | -         |     5.01 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           54 |     2412 | 2024-05-15 | Corinthians       | W   | 0.593      | -            | -                | -                | -         |     5.23 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           53 |     2419 | 2024-05-15 | Galorys           | W   | 0.593      | -            | -                | -                | -         |     9.44 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           52 |     2460 | 2024-05-14 | Galorys           | W   | 0.588      | -            | -                | -                | -         |     9.87 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           51 |     2464 | 2024-05-14 | Galorys           | L   | 0.587      | -            | -                | -                | -         |    -8.81 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           50 |     2477 | 2024-05-14 | Hype              | L   | 0.586      | -            | -                | -                | -         |    -9.54 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           49 |     2499 | 2024-05-13 | Intense           | W   | 0.580      | -            | -                | -                | -         |     5.55 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           48 |     2527 | 2024-05-12 | Solid             | L   | 0.573      | -            | -                | -                | -         |    -9.63 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           47 |     2560 | 2024-05-11 | Galorys           | L   | 0.566      | -            | -                | -                | -         |    -9.56 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           46 |     2638 | 2024-05-07 | inSanitY          | L   | 0.540      | -            | -                | -                | -         |    -8.66 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           45 |     2666 | 2024-05-05 | ODDIK             | L   | 0.528      | -            | -                | -                | -         |    -6.24 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           44 |     2725 | 2024-05-02 | ODDIK             | W   | 0.508      | 0.450        | 0.097 (0.022)    | 0.822 (0.188)    | -         |    10.24 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           43 |     2726 | 2024-05-02 | ODDIK             | L   | 0.507      | -            | -                | -                | -         |    -5.82 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           42 |     2750 | 2024-05-01 | 9z                | L   | 0.500      | -            | -                | -                | -         |    -0.41 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           41 |     2752 | 2024-05-01 | 9z                | L   | 0.500      | -            | -                | -                | -         |    -0.41 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           40 |     3126 | 2024-04-17 | MIBR              | L   | 0.407      | -            | -                | -                | -         |    -0.74 | RCF, RICIOLI, snow, urban0, yepz       |
|           39 |     3163 | 2024-04-16 | Galorys           | W   | 0.401      | -            | -                | -                | -         |     6.07 | RCF, RICIOLI, snow, urban0, yepz       |
|           38 |     3214 | 2024-04-13 | MIBR              | L   | 0.380      | -            | -                | -                | -         |    -0.69 | pr1sma, RCF, RICIOLI, urban0, yepz     |
|           37 |     3227 | 2024-04-12 | adalYamigos       | W   | 0.375      | -            | -                | -                | -         |     1.83 | RCF, RICIOLI, snow, urban0, yepz       |
|           36 |     3262 | 2024-04-11 | FURIA Academy     | W   | 0.365      | -            | -                | -                | -         |     1.15 | RCF, RICIOLI, snow, urban0, yepz       |
|           35 |     3335 | 2024-04-09 | paiN              | L   | 0.354      | -            | -                | -                | -         |    -0.23 | RCF, RICIOLI, snow, urban0, yepz       |
|           34 |     3341 | 2024-04-09 | paiN              | L   | 0.354      | -            | -                | -                | -         |    -0.23 | RCF, RICIOLI, snow, urban0, yepz       |
|           33 |     3412 | 2024-04-07 | adalYamigos       | L   | 0.342      | -            | -                | -                | -         |    -9.19 | RCF, RICIOLI, snow, urban0, yepz       |
|           32 |     3474 | 2024-04-04 | RED Canids        | W   | 0.321      | 0.450        | 0.069 (0.010)    | -                | -         |     7.22 | RCF, RICIOLI, snow, urban0, yepz       |
|           31 |     3477 | 2024-04-04 | RED Canids        | L   | 0.321      | -            | -                | -                | -         |    -2.91 | RCF, RICIOLI, snow, urban0, yepz       |
|           30 |     3513 | 2024-04-03 | Imperial          | L   | 0.314      | -            | -                | -                | -         |    -1.67 | RCF, RICIOLI, snow, urban0, yepz       |
|           29 |     3516 | 2024-04-03 | Imperial          | L   | 0.314      | -            | -                | -                | -         |    -1.69 | RCF, RICIOLI, snow, urban0, yepz       |
|           28 |     3646 | 2024-03-27 | MIBR              | L   | 0.268      | -            | -                | -                | -         |    -0.56 | RCF, RICIOLI, snow, urban0, yepz       |
|           27 |     3652 | 2024-03-27 | MIBR              | L   | 0.268      | -            | -                | -                | -         |    -0.56 | RCF, RICIOLI, snow, urban0, yepz       |
|           26 |     3822 | 2024-03-17 | ODDIK             | L   | 0.200      | -            | -                | -                | -         |    -2.08 | RCF, RICIOLI, snow, urban0, yepz       |
|           25 |     3846 | 2024-03-16 | MIBR Academy      | W   | 0.193      | -            | -                | -                | -         |     0.89 | RCF, RICIOLI, snow, urban0, yepz       |
|           24 |     3861 | 2024-03-15 | RED Canids        | L   | 0.187      | -            | -                | -                | -         |    -1.89 | RCF, RICIOLI, snow, urban0, yepz       |
|           23 |     3901 | 2024-03-14 | FURIA Academy     | W   | 0.180      | -            | -                | -                | -         |     0.54 | RCF, RICIOLI, snow, urban0, yepz       |
|           22 |     3920 | 2024-03-13 | RED Canids        | L   | 0.174      | -            | -                | -                | -         |    -1.75 | RCF, RICIOLI, snow, urban0, yepz       |
|           21 |     3930 | 2024-03-13 | Yawara            | L   | 0.173      | -            | -                | -                | -         |    -4.93 | RCF, RICIOLI, snow, urban0, yepz       |
|           20 |     3934 | 2024-03-13 | ODDIK             | L   | 0.173      | -            | -                | -                | -         |    -1.83 | RCF, RICIOLI, snow, urban0, yepz       |
|           19 |     3970 | 2024-03-12 | LA RUGONETA       | W   | 0.165      | -            | -                | -                | -         |     0.51 | RCF, RICIOLI, snow, urban0, yepz       |
|           18 |     3999 | 2024-03-10 | FURIA Academy     | W   | 0.154      | -            | -                | -                | -         |     0.43 | RCF, RICIOLI, snow, urban0, yepz       |
|           17 |     4019 | 2024-03-09 | Sharks            | W   | 0.147      | -            | -                | -                | -         |     2.56 | RCF, RICIOLI, snow, urban0, yepz       |
|           16 |     4069 | 2024-03-07 | Fluxo             | W   | 0.134      | -            | -                | -                | -         |     1.45 | RCF, RICIOLI, snow, urban0, yepz       |
|           15 |     4131 | 2024-03-05 | adalYamigos       | L   | 0.121      | -            | -                | -                | -         |    -3.34 | RCF, RICIOLI, snow, urban0, yepz       |
|           14 |     4133 | 2024-03-05 | adalYamigos       | L   | 0.121      | -            | -                | -                | -         |    -3.34 | RCF, RICIOLI, snow, urban0, yepz       |
|           13 |     4161 | 2024-03-04 | Fluxo             | L   | 0.115      | -            | -                | -                | -         |    -2.41 | RCF, RICIOLI, snow, urban0, yepz       |
|           12 |     4162 | 2024-03-04 | Fluxo             | L   | 0.114      | -            | -                | -                | -         |    -2.43 | RCF, RICIOLI, snow, urban0, yepz       |
|           11 |     4338 | 2024-02-24 | 2GAME             | W   | 0.054      | -            | -                | -                | -         |     0.31 | RCF, RICIOLI, snow, urban0, yepz       |
|           10 |     4345 | 2024-02-24 | 2GAME             | L   | 0.054      | -            | -                | -                | -         |    -1.40 | RCF, RICIOLI, snow, urban0, yepz       |
|            9 |     4398 | 2024-02-21 | Solid             | W   | 0.035      | -            | -                | -                | -         |     0.25 | RCF, RICIOLI, snow, urban0, yepz       |
|            8 |     4399 | 2024-02-21 | Solid             | L   | 0.035      | -            | -                | -                | -         |    -0.84 | RCF, RICIOLI, snow, urban0, yepz       |
|            7 |     4406 | 2024-02-21 | Sharks            | L   | 0.034      | -            | -                | -                | -         |    -0.51 | RCF, RICIOLI, snow, urban0, yepz       |
|            6 |     4435 | 2024-02-20 | 9z                | L   | 0.027      | -            | -                | -                | -         |    -0.02 | RCF, RICIOLI, snow, urban0, yepz       |
|            5 |     4438 | 2024-02-20 | W7M               | W   | 0.027      | -            | -                | -                | -         |     0.30 | RCF, RICIOLI, snow, urban0, yepz       |
|            4 |     4442 | 2024-02-20 | Sharks            | L   | 0.026      | -            | -                | -                | -         |    -0.38 | RCF, RICIOLI, snow, urban0, yepz       |
|            3 |     4482 | 2024-02-18 | Galorys           | L   | 0.014      | -            | -                | -                | -         |    -0.25 | RCF, RICIOLI, snow, urban0, yepz       |
|            2 |     4503 | 2024-02-17 | Solid             | W   | 0.008      | -            | -                | -                | -         |     0.06 | RCF, RICIOLI, snow, urban0, yepz       |
|            1 |     4527 | 2024-02-16 | BESTIA            | W   | 0.001      | -            | -                | -                | -         |     0.02 | RCF, RICIOLI, snow, urban0, yepz       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,675.68)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-13 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-07-27 |      1.000 | $2,700.00      | $2,700.00       |
| 2024-06-19 |      0.827 | $2,150.00      | $1,778.22       |
| 2024-06-09 |      0.761 | $600.00        | $456.42         |
| 2024-05-21 |      0.634 | $3,500.00      | $2,217.54       |
| 2024-05-19 |      0.621 | $1,000.00      | $620.69         |
| 2024-03-14 |      0.181 | $5,000.00      | $902.81         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
