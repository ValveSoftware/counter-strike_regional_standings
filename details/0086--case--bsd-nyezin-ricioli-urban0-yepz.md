### Roster Details<br />
Team Name: Case<br />
Roster: bsd, nyezin, RICIOLI, urban0, yepz<br />
Global Rank: [86](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [23]( ../standings_americas.md)<br />
<br />
Final Rank Value:  913.3<br />
<br />
Final Rank Value (913.3) = Starting Rank Value (946.2) + Head To Head Adjustments (-32.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.396[<sup>1</sup>](#table2)
- Bounty Collected: 0.412[<sup>2</sup>](#table1)
- Opponent Network: 0.251[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.265<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 946.2
- 400 + ( ( 0.265 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 946.2


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
|          118 |        0 | 2024-07-31 | KRÜ               | L   | 1.000      | -            | -                | -                | -         |   -17.95 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          117 |        8 | 2024-07-31 | Dusty Roots       | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.66 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          116 |       58 | 2024-07-30 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -2.10 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          115 |      121 | 2024-07-28 | Solid             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    17.30 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          114 |      146 | 2024-07-27 | Patins da Ferrari | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.67 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          113 |      158 | 2024-07-26 | Galorys           | L   | 1.000      | -            | -                | -                | -         |   -19.59 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          112 |      275 | 2024-07-23 | KRÜ               | L   | 1.000      | -            | -                | -                | -         |   -18.19 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          111 |      277 | 2024-07-23 | Fluxo             | W   | 1.000      | 0.143        | 0.123 (0.018)    | -                | 0 (0.000) |    25.70 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          110 |      284 | 2024-07-23 | Sharks Youngsters | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.82 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          109 |      306 | 2024-07-22 | Intense           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.45 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          108 |      363 | 2024-07-20 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |    -5.14 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          107 |      390 | 2024-07-19 | Dusty Roots       | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.47 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          106 |      402 | 2024-07-19 | Vikings KR        | L   | 1.000      | -            | -                | -                | -         |   -18.62 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          105 |      404 | 2024-07-19 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -5.56 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          104 |      428 | 2024-07-18 | Smoke             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.17 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          103 |      432 | 2024-07-18 | Smoke             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.76 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          102 |      437 | 2024-07-18 | ODDIK             | W   | 1.000      | 0.384        | 0.096 (0.037)    | 0.781 (0.300)    | 0 (0.000) |    22.51 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          101 |      442 | 2024-07-18 | Hype              | L   | 1.000      | -            | -                | -                | -         |   -15.08 | bsd, nyezin, RICIOLI, urban0, yepz     |
|          100 |      503 | 2024-07-17 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -2.21 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           99 |      505 | 2024-07-17 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -2.26 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           98 |      530 | 2024-07-17 | Vikings KR        | L   | 1.000      | -            | -                | -                | -         |   -18.47 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           97 |      563 | 2024-07-16 | Solid             | L   | 1.000      | -            | -                | -                | -         |   -19.20 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           96 |      569 | 2024-07-16 | Solid             | W   | 1.000      | 0.450        | 0.027 (0.012)    | 0.817 (0.368)    | -         |    12.00 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           95 |      612 | 2024-07-15 | 9z Academy        | W   | 1.000      | -            | -                | -                | -         |     2.64 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           94 |      620 | 2024-07-15 | ODDIK             | L   | 1.000      | -            | -                | -                | -         |   -10.46 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           93 |      627 | 2024-07-15 | Imperial          | W   | 1.000      | 0.450        | 0.245 (0.110)    | 0.685 (0.308)    | -         |    27.17 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           92 |      630 | 2024-07-15 | Imperial          | W   | 1.000      | 0.450        | 0.245 (0.110)    | 0.685 (0.308)    | -         |    28.20 | bsd, nyezin, RICIOLI, urban0, yepz     |
|           91 |      667 | 2024-07-13 | Dusty Roots       | W   | 1.000      | -            | -                | -                | -         |    12.24 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           90 |      688 | 2024-07-11 | W7M               | L   | 1.000      | -            | -                | -                | -         |   -18.09 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           89 |      693 | 2024-07-11 | Hawks             | W   | 1.000      | -            | -                | -                | -         |     4.16 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           88 |      694 | 2024-07-11 | Galorys           | W   | 1.000      | 0.371        | 0.030 (0.011)    | 0.552 (0.205)    | -         |    13.63 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           87 |      711 | 2024-07-10 | Legacy            | L   | 1.000      | -            | -                | -                | -         |    -7.52 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           86 |      737 | 2024-07-09 | W7M               | W   | 1.000      | 0.371        | -                | 0.531 (0.197)    | -         |    11.72 | nyezin, paqueta, RICIOLI, urban0, yepz |
|           85 |      827 | 2024-06-19 | inSanitY          | L   | 0.920      | -            | -                | -                | -         |    -9.17 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           84 |      829 | 2024-06-18 | Solid             | W   | 0.914      | 0.337        | -                | 0.817 (0.251)    | -         |    14.63 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           83 |     1145 | 2024-06-08 | Galorys           | L   | 0.845      | -            | -                | -                | -         |   -13.17 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           82 |     1194 | 2024-06-07 | Vikings KR        | L   | 0.839      | -            | -                | -                | -         |   -16.41 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           81 |     1228 | 2024-06-06 | Bounty Hunters    | L   | 0.835      | -            | -                | -                | -         |   -13.08 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           80 |     1266 | 2024-06-06 | Bounty Hunters    | L   | 0.832      | -            | -                | -                | -         |   -14.04 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           79 |     1388 | 2024-06-03 | Solid             | L   | 0.814      | -            | -                | -                | -         |   -13.42 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           78 |     1435 | 2024-06-01 | Smoke             | W   | 0.800      | -            | -                | -                | -         |     6.18 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           77 |     1522 | 2024-05-29 | Dusty Roots       | W   | 0.781      | -            | -                | -                | -         |     9.52 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           76 |     1574 | 2024-05-27 | Hawks             | L   | 0.766      | -            | -                | -                | -         |   -21.51 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           75 |     1669 | 2024-05-22 | BESTIA            | L   | 0.734      | -            | -                | -                | -         |    -7.16 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           74 |     1673 | 2024-05-22 | BESTIA            | L   | 0.734      | -            | -                | -                | -         |    -7.58 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           73 |     1712 | 2024-05-21 | Sharks            | W   | 0.728      | 0.450        | -                | 0.558 (0.183)    | -         |    14.07 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           72 |     1713 | 2024-05-21 | Sharks            | L   | 0.727      | -            | -                | -                | -         |    -8.88 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           71 |     1722 | 2024-05-21 | ODDIK             | W   | 0.727      | 0.303        | 0.096 (0.021)    | -                | -         |    12.73 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           70 |     1761 | 2024-05-20 | Galorys           | W   | 0.720      | -            | -                | -                | -         |    10.85 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           69 |     1779 | 2024-05-19 | ODDIK             | L   | 0.714      | -            | -                | -                | -         |    -9.76 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           68 |     1807 | 2024-05-18 | Solid             | W   | 0.707      | 0.303        | -                | 0.817 (0.175)    | -         |    10.51 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           67 |     1844 | 2024-05-17 | Fluxo             | L   | 0.700      | -            | -                | -                | -         |    -5.69 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           66 |     1850 | 2024-05-17 | Hype              | W   | 0.700      | -            | -                | -                | -         |    10.09 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           65 |     1883 | 2024-05-16 | KRÜ               | W   | 0.693      | -            | -                | -                | -         |    11.10 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           64 |     1891 | 2024-05-16 | Yawara            | W   | 0.692      | -            | -                | -                | -         |     2.26 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           63 |     1929 | 2024-05-15 | Corinthians       | W   | 0.687      | -            | -                | -                | -         |     2.23 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           62 |     1931 | 2024-05-15 | Corinthians       | W   | 0.687      | -            | -                | -                | -         |     2.28 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           61 |     1938 | 2024-05-15 | Galorys           | W   | 0.686      | -            | -                | -                | -         |    11.34 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           60 |     1979 | 2024-05-14 | Galorys           | W   | 0.681      | -            | -                | -                | -         |    11.96 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           59 |     1983 | 2024-05-14 | Galorys           | L   | 0.681      | -            | -                | -                | -         |    -9.62 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           58 |     1996 | 2024-05-14 | Hype              | L   | 0.679      | -            | -                | -                | -         |   -10.97 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           57 |     2018 | 2024-05-13 | Intense           | W   | 0.674      | -            | -                | -                | -         |     3.75 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           56 |     2046 | 2024-05-12 | Solid             | L   | 0.666      | -            | -                | -                | -         |   -10.45 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           55 |     2079 | 2024-05-11 | Galorys           | L   | 0.659      | -            | -                | -                | -         |   -10.78 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           54 |     2157 | 2024-05-07 | inSanitY          | L   | 0.633      | -            | -                | -                | -         |    -9.70 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           53 |     2185 | 2024-05-05 | ODDIK             | L   | 0.621      | -            | -                | -                | -         |    -8.06 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           52 |     2244 | 2024-05-02 | ODDIK             | W   | 0.601      | 0.450        | 0.096 (0.026)    | 0.781 (0.211)    | -         |    11.41 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           51 |     2245 | 2024-05-02 | ODDIK             | L   | 0.600      | -            | -                | -                | -         |    -7.60 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           50 |     2269 | 2024-05-01 | 9z                | L   | 0.593      | -            | -                | -                | -         |    -0.55 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           49 |     2271 | 2024-05-01 | 9z                | L   | 0.593      | -            | -                | -                | -         |    -0.55 | nyezin, RCF, RICIOLI, urban0, yepz     |
|           48 |     2645 | 2024-04-17 | MIBR              | L   | 0.500      | -            | -                | -                | -         |    -0.78 | RCF, RICIOLI, snow, urban0, yepz       |
|           47 |     2682 | 2024-04-16 | Galorys           | W   | 0.494      | -            | -                | -                | -         |     7.77 | RCF, RICIOLI, snow, urban0, yepz       |
|           46 |     2733 | 2024-04-13 | MIBR              | L   | 0.473      | -            | -                | -                | -         |    -0.74 | pr1sma, RCF, RICIOLI, urban0, yepz     |
|           45 |     2746 | 2024-04-12 | adalYamigos       | W   | 0.468      | -            | -                | -                | -         |     2.64 | RCF, RICIOLI, snow, urban0, yepz       |
|           44 |     2781 | 2024-04-11 | FURIA Academy     | W   | 0.459      | -            | -                | -                | -         |     1.50 | RCF, RICIOLI, snow, urban0, yepz       |
|           43 |     2854 | 2024-04-09 | paiN              | L   | 0.448      | -            | -                | -                | -         |    -0.75 | RCF, RICIOLI, snow, urban0, yepz       |
|           42 |     2860 | 2024-04-09 | paiN              | L   | 0.447      | -            | -                | -                | -         |    -0.75 | RCF, RICIOLI, snow, urban0, yepz       |
|           41 |     2931 | 2024-04-07 | adalYamigos       | L   | 0.435      | -            | -                | -                | -         |   -11.42 | RCF, RICIOLI, snow, urban0, yepz       |
|           40 |     2993 | 2024-04-04 | RED Canids        | W   | 0.414      | 0.450        | 0.079 (0.015)    | -                | -         |     9.81 | RCF, RICIOLI, snow, urban0, yepz       |
|           39 |     2996 | 2024-04-04 | RED Canids        | L   | 0.414      | -            | -                | -                | -         |    -3.24 | RCF, RICIOLI, snow, urban0, yepz       |
|           38 |     3032 | 2024-04-03 | Imperial          | L   | 0.407      | -            | -                | -                | -         |    -1.35 | RCF, RICIOLI, snow, urban0, yepz       |
|           37 |     3035 | 2024-04-03 | Imperial          | L   | 0.407      | -            | -                | -                | -         |    -1.37 | RCF, RICIOLI, snow, urban0, yepz       |
|           36 |     3165 | 2024-03-27 | MIBR              | L   | 0.361      | -            | -                | -                | -         |    -0.65 | RCF, RICIOLI, snow, urban0, yepz       |
|           35 |     3171 | 2024-03-27 | MIBR              | L   | 0.361      | -            | -                | -                | -         |    -0.66 | RCF, RICIOLI, snow, urban0, yepz       |
|           34 |     3341 | 2024-03-17 | ODDIK             | L   | 0.293      | -            | -                | -                | -         |    -3.64 | RCF, RICIOLI, snow, urban0, yepz       |
|           33 |     3365 | 2024-03-16 | MIBR Academy      | W   | 0.287      | -            | -                | -                | -         |     0.84 | RCF, RICIOLI, snow, urban0, yepz       |
|           32 |     3380 | 2024-03-15 | RED Canids        | L   | 0.281      | -            | -                | -                | -         |    -2.53 | RCF, RICIOLI, snow, urban0, yepz       |
|           31 |     3420 | 2024-03-14 | FURIA Academy     | W   | 0.273      | -            | -                | -                | -         |     0.83 | RCF, RICIOLI, snow, urban0, yepz       |
|           30 |     3439 | 2024-03-13 | RED Canids        | L   | 0.267      | -            | -                | -                | -         |    -2.39 | RCF, RICIOLI, snow, urban0, yepz       |
|           29 |     3449 | 2024-03-13 | Yawara            | L   | 0.266      | -            | -                | -                | -         |    -7.65 | RCF, RICIOLI, snow, urban0, yepz       |
|           28 |     3453 | 2024-03-13 | ODDIK             | L   | 0.266      | -            | -                | -                | -         |    -3.45 | RCF, RICIOLI, snow, urban0, yepz       |
|           27 |     3489 | 2024-03-12 | LA RUGONETA       | W   | 0.259      | -            | -                | -                | -         |     0.86 | RCF, RICIOLI, snow, urban0, yepz       |
|           26 |     3518 | 2024-03-10 | FURIA Academy     | W   | 0.247      | -            | -                | -                | -         |     0.69 | RCF, RICIOLI, snow, urban0, yepz       |
|           25 |     3538 | 2024-03-09 | Sharks            | W   | 0.240      | -            | -                | -                | -         |     4.25 | RCF, RICIOLI, snow, urban0, yepz       |
|           24 |     3588 | 2024-03-07 | Fluxo             | W   | 0.227      | 0.435        | 0.123 (0.012)    | -                | -         |     4.74 | RCF, RICIOLI, snow, urban0, yepz       |
|           23 |     3650 | 2024-03-05 | adalYamigos       | L   | 0.214      | -            | -                | -                | -         |    -5.83 | RCF, RICIOLI, snow, urban0, yepz       |
|           22 |     3652 | 2024-03-05 | adalYamigos       | L   | 0.214      | -            | -                | -                | -         |    -5.87 | RCF, RICIOLI, snow, urban0, yepz       |
|           21 |     3680 | 2024-03-04 | Fluxo             | L   | 0.208      | -            | -                | -                | -         |    -2.31 | RCF, RICIOLI, snow, urban0, yepz       |
|           20 |     3681 | 2024-03-04 | Fluxo             | L   | 0.207      | -            | -                | -                | -         |    -2.35 | RCF, RICIOLI, snow, urban0, yepz       |
|           19 |     3857 | 2024-02-24 | 2GAME             | W   | 0.148      | -            | -                | -                | -         |     0.88 | RCF, RICIOLI, snow, urban0, yepz       |
|           18 |     3864 | 2024-02-24 | 2GAME             | L   | 0.147      | -            | -                | -                | -         |    -3.79 | RCF, RICIOLI, snow, urban0, yepz       |
|           17 |     3917 | 2024-02-21 | Solid             | W   | 0.128      | -            | -                | -                | -         |     1.78 | RCF, RICIOLI, snow, urban0, yepz       |
|           16 |     3918 | 2024-02-21 | Solid             | L   | 0.128      | -            | -                | -                | -         |    -2.28 | RCF, RICIOLI, snow, urban0, yepz       |
|           15 |     3925 | 2024-02-21 | Sharks            | L   | 0.127      | -            | -                | -                | -         |    -1.90 | RCF, RICIOLI, snow, urban0, yepz       |
|           14 |     3954 | 2024-02-20 | 9z                | L   | 0.120      | -            | -                | -                | -         |    -0.12 | RCF, RICIOLI, snow, urban0, yepz       |
|           13 |     3957 | 2024-02-20 | W7M               | W   | 0.120      | -            | -                | -                | -         |     1.35 | RCF, RICIOLI, snow, urban0, yepz       |
|           12 |     3961 | 2024-02-20 | Sharks            | L   | 0.119      | -            | -                | -                | -         |    -1.78 | RCF, RICIOLI, snow, urban0, yepz       |
|           11 |     4001 | 2024-02-18 | Galorys           | L   | 0.107      | -            | -                | -                | -         |    -1.92 | RCF, RICIOLI, snow, urban0, yepz       |
|           10 |     4022 | 2024-02-17 | Solid             | W   | 0.101      | -            | -                | -                | -         |     1.37 | RCF, RICIOLI, snow, urban0, yepz       |
|            9 |     4046 | 2024-02-16 | BESTIA            | W   | 0.094      | -            | -                | -                | -         |     1.80 | RCF, RICIOLI, snow, urban0, yepz       |
|            8 |     4079 | 2024-02-15 | 9z                | L   | 0.087      | -            | -                | -                | -         |    -0.08 | RCF, RICIOLI, snow, urban0, yepz       |
|            7 |     4080 | 2024-02-15 | Sharks            | W   | 0.087      | -            | -                | -                | -         |     1.46 | RCF, RICIOLI, snow, urban0, yepz       |
|            6 |     4087 | 2024-02-15 | Flamengo          | W   | 0.086      | -            | -                | -                | -         |     0.20 | RCF, RICIOLI, snow, urban0, yepz       |
|            5 |     4108 | 2024-02-14 | O PLANO C         | W   | 0.081      | -            | -                | -                | -         |     0.11 | RCF, RICIOLI, snow, urban0, yepz       |
|            4 |     4151 | 2024-02-13 | W7M               | W   | 0.074      | -            | -                | -                | -         |     0.85 | RCF, RICIOLI, snow, urban0, yepz       |
|            3 |     4155 | 2024-02-13 | W7M               | L   | 0.074      | -            | -                | -                | -         |    -1.50 | RCF, RICIOLI, snow, urban0, yepz       |
|            2 |     4160 | 2024-02-13 | Galorys           | W   | 0.073      | -            | -                | -                | -         |     1.01 | RCF, RICIOLI, snow, urban0, yepz       |
|            1 |     4173 | 2024-02-12 | Dusty Roots       | W   | 0.066      | -            | -                | -                | -         |     0.75 | RCF, RICIOLI, snow, urban0, yepz       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,817.91)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-27 |      1.000 | $2,700.00      | $2,700.00       |
| 2024-06-19 |      0.920 | $2,150.00      | $1,978.70       |
| 2024-06-09 |      0.854 | $600.00        | $512.36         |
| 2024-05-21 |      0.727 | $3,500.00      | $2,543.89       |
| 2024-05-19 |      0.714 | $1,000.00      | $713.93         |
| 2024-03-14 |      0.274 | $5,000.00      | $1,369.03       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
