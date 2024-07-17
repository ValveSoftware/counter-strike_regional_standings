### Roster Details<br />
Team Name: Case<br />
Roster: bsd, nyezin, RICIOLI, urban0, yepz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [98](../standings_global.md)<br />
Regional Rank: [23]( ../standings_americas.md)<br />
Final Rank Value:  910.7<br />
<br />
Final Rank Value (910.7) = Starting Rank Value (966.8) + Head To Head Adjustments (-56.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.404[<sup>1</sup>](#table2)
- Bounty Collected: 0.436[<sup>2</sup>](#table1)
- Opponent Network: 0.215[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.264<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 966.8
- 400 + ( ( 0.264 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 966.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           98 |        0 | 2024-07-17 | Vikings KR     | L   | 1.000      | -            | -                | -                | -         |   -18.72 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           97 |       33 | 2024-07-16 | Solid          | L   | 1.000      | -            | -                | -                | -         |   -18.94 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           96 |       39 | 2024-07-16 | Solid          | W   | 1.000      | 0.450        | 0.047 (0.021)    | 0.622 (0.280)    | 0 (0.000) |    12.28 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           95 |       82 | 2024-07-15 | 9z Academy     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.46 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           94 |       90 | 2024-07-15 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |    -9.90 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           93 |       97 | 2024-07-15 | Imperial       | W   | 1.000      | 0.450        | 0.386 (0.174)    | 0.607 (0.273)    | 0 (0.000) |    28.93 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           92 |      100 | 2024-07-15 | Imperial       | W   | 1.000      | 0.450        | 0.386 (0.174)    | 0.607 (0.273)    | 0 (0.000) |    29.61 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           91 |      137 | 2024-07-13 | Dusty Roots    | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.26 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           90 |      158 | 2024-07-11 | W7M            | L   | 1.000      | -            | -                | -                | -         |   -18.28 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           89 |      163 | 2024-07-11 | Hawks          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.08 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           88 |      164 | 2024-07-11 | Galorys        | W   | 1.000      | 0.371        | -                | 0.535 (0.198)    | 0 (0.000) |    13.37 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           87 |      181 | 2024-07-10 | Legacy         | L   | 1.000      | -            | -                | -                | -         |    -5.47 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           86 |      207 | 2024-07-09 | W7M            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.73 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           85 |      297 | 2024-06-19 | inSanitY       | L   | 1.000      | -            | -                | -                | -         |    -9.08 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           84 |      299 | 2024-06-18 | Solid          | W   | 1.000      | 0.337        | 0.047 (0.016)    | 0.622 (0.209)    | 0 (0.000) |    16.39 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           83 |      615 | 2024-06-08 | Galorys        | L   | 0.940      | -            | -                | -                | -         |   -14.83 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           82 |      664 | 2024-06-07 | Vikings KR     | L   | 0.934      | -            | -                | -                | -         |   -18.71 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           81 |      698 | 2024-06-06 | Bounty Hunters | L   | 0.929      | -            | -                | -                | -         |   -14.25 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           80 |      736 | 2024-06-06 | Bounty Hunters | L   | 0.927      | -            | -                | -                | -         |   -15.43 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           79 |      858 | 2024-06-03 | Solid          | L   | 0.909      | -            | -                | -                | -         |   -14.56 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           78 |      905 | 2024-06-01 | Smoke          | W   | 0.895      | -            | -                | -                | 0 (0.000) |     6.00 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           77 |      992 | 2024-05-29 | Dusty Roots    | W   | 0.875      | -            | -                | -                | -         |     8.19 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           76 |     1044 | 2024-05-27 | Hawks          | L   | 0.861      | -            | -                | -                | -         |   -24.30 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           75 |     1139 | 2024-05-22 | BESTIA         | L   | 0.829      | -            | -                | -                | -         |    -7.70 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           74 |     1143 | 2024-05-22 | BESTIA         | L   | 0.828      | -            | -                | -                | -         |    -8.19 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           73 |     1182 | 2024-05-21 | Sharks         | W   | 0.822      | 0.450        | 0.046 (0.017)    | 0.501 (0.185)    | -         |    16.25 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           72 |     1183 | 2024-05-21 | Sharks         | L   | 0.822      | -            | -                | -                | -         |    -9.58 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           71 |     1192 | 2024-05-21 | ODDIK          | W   | 0.821      | 0.303        | 0.084 (0.021)    | 0.678 (0.169)    | -         |    14.67 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           70 |     1231 | 2024-05-20 | Galorys        | W   | 0.814      | -            | -                | -                | -         |    11.92 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           69 |     1249 | 2024-05-19 | ODDIK          | L   | 0.809      | -            | -                | -                | -         |   -10.64 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           68 |     1277 | 2024-05-18 | Solid          | W   | 0.802      | 0.303        | 0.047 (0.011)    | -                | -         |    12.31 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           67 |     1314 | 2024-05-17 | Fluxo          | L   | 0.795      | -            | -                | -                | -         |    -5.57 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           66 |     1320 | 2024-05-17 | Hype           | W   | 0.794      | -            | -                | -                | -         |     9.97 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           65 |     1353 | 2024-05-16 | KRÜ            | W   | 0.788      | -            | -                | -                | -         |    12.61 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           64 |     1361 | 2024-05-16 | Yawara         | W   | 0.787      | -            | -                | -                | -         |     2.34 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           63 |     1399 | 2024-05-15 | Corinthians    | W   | 0.781      | -            | -                | -                | -         |     2.43 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           62 |     1401 | 2024-05-15 | Corinthians    | W   | 0.781      | -            | -                | -                | -         |     2.49 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           61 |     1408 | 2024-05-15 | Galorys        | W   | 0.780      | -            | -                | -                | -         |    12.69 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           60 |     1449 | 2024-05-14 | Galorys        | W   | 0.775      | 0.450        | -                | 0.535 (0.187)    | -         |    13.51 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           59 |     1453 | 2024-05-14 | Galorys        | L   | 0.775      | -            | -                | -                | -         |   -11.02 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           58 |     1466 | 2024-05-14 | Hype           | L   | 0.774      | -            | -                | -                | -         |   -14.11 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           57 |     1488 | 2024-05-13 | Intense        | W   | 0.768      | -            | -                | -                | -         |     3.46 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           56 |     1516 | 2024-05-12 | Solid          | L   | 0.761      | -            | -                | -                | -         |   -11.41 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           55 |     1549 | 2024-05-11 | Galorys        | L   | 0.753      | -            | -                | -                | -         |   -12.73 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           54 |     1627 | 2024-05-07 | inSanitY       | L   | 0.727      | -            | -                | -                | -         |   -10.60 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           53 |     1655 | 2024-05-05 | ODDIK          | L   | 0.716      | -            | -                | -                | -         |    -8.95 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           52 |     1714 | 2024-05-02 | ODDIK          | W   | 0.695      | 0.450        | 0.084 (0.026)    | 0.678 (0.212)    | -         |    13.54 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           51 |     1715 | 2024-05-02 | ODDIK          | L   | 0.695      | -            | -                | -                | -         |    -8.41 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           50 |     1739 | 2024-05-01 | 9z             | L   | 0.688      | -            | -                | -                | -         |    -0.31 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           49 |     1741 | 2024-05-01 | 9z             | L   | 0.687      | -            | -                | -                | -         |    -0.31 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           48 |     2115 | 2024-04-17 | MIBR           | L   | 0.595      | -            | -                | -                | -         |    -0.52 | RCF, RICIOLI, snow, urban0, yepz       |
|           47 |     2152 | 2024-04-16 | Galorys        | W   | 0.589      | -            | -                | -                | -         |     8.92 | RCF, RICIOLI, snow, urban0, yepz       |
|           46 |     2203 | 2024-04-13 | MIBR           | L   | 0.567      | -            | -                | -                | -         |    -0.50 | pr1sma, RCF, RICIOLI, urban0, yepz     |
|           45 |     2216 | 2024-04-12 | adalYamigos    | W   | 0.563      | -            | -                | -                | -         |     3.55 | RCF, RICIOLI, snow, urban0, yepz       |
|           44 |     2251 | 2024-04-11 | FURIA Academy  | W   | 0.553      | -            | -                | -                | -         |     1.83 | RCF, RICIOLI, snow, urban0, yepz       |
|           43 |     2324 | 2024-04-09 | paiN           | L   | 0.542      | -            | -                | -                | -         |    -0.45 | RCF, RICIOLI, snow, urban0, yepz       |
|           42 |     2330 | 2024-04-09 | paiN           | L   | 0.542      | -            | -                | -                | -         |    -0.45 | RCF, RICIOLI, snow, urban0, yepz       |
|           41 |     2401 | 2024-04-07 | adalYamigos    | L   | 0.529      | -            | -                | -                | -         |   -13.57 | RCF, RICIOLI, snow, urban0, yepz       |
|           40 |     2463 | 2024-04-04 | RED Canids     | W   | 0.509      | 0.450        | 0.123 (0.028)    | 0.714 (0.163)    | -         |    13.06 | RCF, RICIOLI, snow, urban0, yepz       |
|           39 |     2466 | 2024-04-04 | RED Canids     | L   | 0.508      | -            | -                | -                | -         |    -2.93 | RCF, RICIOLI, snow, urban0, yepz       |
|           38 |     2502 | 2024-04-03 | Imperial       | L   | 0.502      | -            | -                | -                | -         |    -0.71 | RCF, RICIOLI, snow, urban0, yepz       |
|           37 |     2505 | 2024-04-03 | Imperial       | L   | 0.502      | -            | -                | -                | -         |    -0.71 | RCF, RICIOLI, snow, urban0, yepz       |
|           36 |     2635 | 2024-03-27 | MIBR           | L   | 0.456      | -            | -                | -                | -         |    -0.45 | RCF, RICIOLI, snow, urban0, yepz       |
|           35 |     2641 | 2024-03-27 | MIBR           | L   | 0.455      | -            | -                | -                | -         |    -0.45 | RCF, RICIOLI, snow, urban0, yepz       |
|           34 |     2811 | 2024-03-17 | ODDIK          | L   | 0.388      | -            | -                | -                | -         |    -4.57 | RCF, RICIOLI, snow, urban0, yepz       |
|           33 |     2835 | 2024-03-16 | MIBR Academy   | W   | 0.381      | -            | -                | -                | -         |     1.13 | RCF, RICIOLI, snow, urban0, yepz       |
|           32 |     2850 | 2024-03-15 | RED Canids     | L   | 0.375      | -            | -                | -                | -         |    -2.52 | RCF, RICIOLI, snow, urban0, yepz       |
|           31 |     2890 | 2024-03-14 | FURIA Academy  | W   | 0.368      | -            | -                | -                | -         |     1.16 | RCF, RICIOLI, snow, urban0, yepz       |
|           30 |     2909 | 2024-03-13 | RED Canids     | L   | 0.362      | -            | -                | -                | -         |    -2.37 | RCF, RICIOLI, snow, urban0, yepz       |
|           29 |     2919 | 2024-03-13 | Yawara         | L   | 0.361      | -            | -                | -                | -         |   -10.45 | RCF, RICIOLI, snow, urban0, yepz       |
|           28 |     2923 | 2024-03-13 | ODDIK          | L   | 0.360      | -            | -                | -                | -         |    -4.49 | RCF, RICIOLI, snow, urban0, yepz       |
|           27 |     2959 | 2024-03-12 | LA RUGONETA    | W   | 0.353      | -            | -                | -                | -         |     1.27 | RCF, RICIOLI, snow, urban0, yepz       |
|           26 |     2988 | 2024-03-10 | FURIA Academy  | W   | 0.342      | -            | -                | -                | -         |     0.95 | RCF, RICIOLI, snow, urban0, yepz       |
|           25 |     3008 | 2024-03-09 | Sharks         | W   | 0.335      | -            | -                | -                | -         |     6.10 | RCF, RICIOLI, snow, urban0, yepz       |
|           24 |     3058 | 2024-03-07 | Fluxo          | W   | 0.322      | 0.435        | 0.169 (0.024)    | -                | -         |     7.05 | RCF, RICIOLI, snow, urban0, yepz       |
|           23 |     3120 | 2024-03-05 | adalYamigos    | L   | 0.309      | -            | -                | -                | -         |    -8.26 | RCF, RICIOLI, snow, urban0, yepz       |
|           22 |     3122 | 2024-03-05 | adalYamigos    | L   | 0.309      | -            | -                | -                | -         |    -8.37 | RCF, RICIOLI, snow, urban0, yepz       |
|           21 |     3150 | 2024-03-04 | Fluxo          | L   | 0.302      | -            | -                | -                | -         |    -3.08 | RCF, RICIOLI, snow, urban0, yepz       |
|           20 |     3151 | 2024-03-04 | Fluxo          | L   | 0.302      | -            | -                | -                | -         |    -3.15 | RCF, RICIOLI, snow, urban0, yepz       |
|           19 |     3327 | 2024-02-24 | 2GAME          | W   | 0.242      | -            | -                | -                | -         |     1.54 | RCF, RICIOLI, snow, urban0, yepz       |
|           18 |     3334 | 2024-02-24 | 2GAME          | L   | 0.242      | -            | -                | -                | -         |    -6.15 | RCF, RICIOLI, snow, urban0, yepz       |
|           17 |     3387 | 2024-02-21 | Solid          | W   | 0.223      | -            | -                | -                | -         |     3.23 | RCF, RICIOLI, snow, urban0, yepz       |
|           16 |     3388 | 2024-02-21 | Solid          | L   | 0.222      | -            | -                | -                | -         |    -3.83 | RCF, RICIOLI, snow, urban0, yepz       |
|           15 |     3395 | 2024-02-21 | Sharks         | L   | 0.222      | -            | -                | -                | -         |    -3.30 | RCF, RICIOLI, snow, urban0, yepz       |
|           14 |     3424 | 2024-02-20 | 9z             | L   | 0.215      | -            | -                | -                | -         |    -0.09 | RCF, RICIOLI, snow, urban0, yepz       |
|           13 |     3427 | 2024-02-20 | W7M            | W   | 0.215      | -            | -                | -                | -         |     2.28 | RCF, RICIOLI, snow, urban0, yepz       |
|           12 |     3431 | 2024-02-20 | Sharks         | L   | 0.214      | -            | -                | -                | -         |    -3.18 | RCF, RICIOLI, snow, urban0, yepz       |
|           11 |     3471 | 2024-02-18 | Galorys        | L   | 0.202      | -            | -                | -                | -         |    -3.82 | RCF, RICIOLI, snow, urban0, yepz       |
|           10 |     3492 | 2024-02-17 | Solid          | W   | 0.196      | -            | -                | -                | -         |     2.75 | RCF, RICIOLI, snow, urban0, yepz       |
|            9 |     3516 | 2024-02-16 | BESTIA         | W   | 0.189      | -            | -                | -                | -         |     3.49 | RCF, RICIOLI, snow, urban0, yepz       |
|            8 |     3549 | 2024-02-15 | 9z             | L   | 0.182      | -            | -                | -                | -         |    -0.07 | RCF, RICIOLI, snow, urban0, yepz       |
|            7 |     3550 | 2024-02-15 | Sharks         | W   | 0.181      | -            | -                | -                | -         |     3.08 | RCF, RICIOLI, snow, urban0, yepz       |
|            6 |     3557 | 2024-02-15 | Flamengo       | W   | 0.180      | -            | -                | -                | -         |     0.41 | RCF, RICIOLI, snow, urban0, yepz       |
|            5 |     3578 | 2024-02-14 | O PLANO C      | W   | 0.176      | -            | -                | -                | -         |     0.22 | RCF, RICIOLI, snow, urban0, yepz       |
|            4 |     3621 | 2024-02-13 | W7M            | W   | 0.169      | -            | -                | -                | -         |     1.84 | RCF, RICIOLI, snow, urban0, yepz       |
|            3 |     3625 | 2024-02-13 | W7M            | L   | 0.169      | -            | -                | -                | -         |    -3.52 | RCF, RICIOLI, snow, urban0, yepz       |
|            2 |     3630 | 2024-02-13 | Galorys        | W   | 0.168      | -            | -                | -                | -         |     2.18 | RCF, RICIOLI, snow, urban0, yepz       |
|            1 |     3643 | 2024-02-12 | Dusty Roots    | W   | 0.160      | -            | -                | -                | -         |     1.40 | RCF, RICIOLI, snow, urban0, yepz       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,243.79)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-19 |      1.000 | $2,150.00      | $2,150.00       |
| 2024-06-09 |      0.948 | $600.00        | $569.07         |
| 2024-05-21 |      0.821 | $3,500.00      | $2,874.69       |
| 2024-05-19 |      0.808 | $1,000.00      | $808.44         |
| 2024-03-14 |      0.368 | $5,000.00      | $1,841.59       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
