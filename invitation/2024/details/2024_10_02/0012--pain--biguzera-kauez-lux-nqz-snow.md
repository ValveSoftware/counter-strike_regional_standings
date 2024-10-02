### Roster Details<br />
Team Name: paiN<br />
Roster: biguzera, kauez, lux, nqz, snow<br />
Global Rank: [12](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_02.md)<br />
Regional Rank: [4]( ../../standings_americas_2024_10_02.md)<br />
<br />
Final Rank Value:  1509.3<br />
<br />
Final Rank Value (1509.3) = Starting Rank Value (1562.6) + Head To Head Adjustments (-53.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.656[<sup>1</sup>](#table2)
- Bounty Collected: 0.557[<sup>2</sup>](#table1)
- Opponent Network: 0.308[<sup>2</sup>](#table1)
- LAN Wins: 0.910[<sup>2</sup>](#table1)

The average of these factors is 0.607<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1562.6
- 400 + ( ( 0.607 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 1562.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|          122 |        0 | 2024-10-02 | RED Canids        | W   | 1.000      | 0.450        | -                | 0.559 (0.252)    | -         |     3.08 | biguzera, kauez, lux, nqz, snow   |
|          121 |        5 | 2024-10-02 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |   -28.82 | biguzera, kauez, lux, nqz, snow   |
|          120 |       41 | 2024-10-01 | Hype              | W   | 1.000      | -            | -                | -                | -         |     0.58 | biguzera, kauez, lux, nqz, snow   |
|          119 |       45 | 2024-10-01 | Hype              | W   | 1.000      | -            | -                | -                | -         |     0.59 | biguzera, kauez, lux, nqz, snow   |
|          118 |       99 | 2024-09-29 | Fluxo             | W   | 1.000      | -            | -                | -                | -         |     2.60 | biguzera, kauez, lux, nqz, snow   |
|          117 |      103 | 2024-09-29 | Solid             | W   | 1.000      | -            | -                | -                | -         |     1.27 | biguzera, kauez, lux, nqz, snow   |
|          116 |      129 | 2024-09-28 | RED Canids        | W   | 1.000      | -            | -                | -                | -         |     2.42 | biguzera, kauez, lux, nqz, snow   |
|          115 |      135 | 2024-09-28 | Solid             | L   | 1.000      | -            | -                | -                | -         |   -30.35 | biguzera, kauez, lux, nqz, snow   |
|          114 |      267 | 2024-09-25 | ODDIK             | W   | 1.000      | 0.450        | 0.150 (0.067)    | 0.661 (0.298)    | -         |     1.52 | biguzera, kauez, lux, nqz, snow   |
|          113 |      271 | 2024-09-25 | ODDIK             | W   | 1.000      | 0.450        | 0.150 (0.067)    | 0.661 (0.298)    | -         |     1.54 | biguzera, kauez, lux, nqz, snow   |
|          112 |      319 | 2024-09-24 | Sharks            | W   | 1.000      | -            | -                | -                | -         |     1.13 | biguzera, kauez, lux, nqz, snow   |
|          111 |      326 | 2024-09-24 | Sharks            | W   | 1.000      | -            | -                | -                | -         |     1.14 | biguzera, kauez, lux, nqz, snow   |
|          110 |      366 | 2024-09-23 | RED Canids        | W   | 1.000      | -            | -                | -                | -         |     2.83 | biguzera, kauez, lux, nqz, snow   |
|          109 |      382 | 2024-09-23 | inSanitY          | W   | 1.000      | -            | -                | -                | -         |     0.93 | biguzera, kauez, lux, nqz, snow   |
|          108 |      472 | 2024-09-19 | KRÜ               | W   | 1.000      | 0.450        | -                | 0.493 (0.222)    | -         |     0.74 | biguzera, kauez, lux, nqz, snow   |
|          107 |      475 | 2024-09-19 | KRÜ               | W   | 1.000      | 0.450        | -                | 0.493 (0.222)    | -         |     0.75 | biguzera, kauez, lux, nqz, snow   |
|          106 |      508 | 2024-09-18 | BESTIA            | W   | 1.000      | 0.450        | 0.080 (0.036)    | 0.763 (0.343)    | -         |     1.40 | biguzera, kauez, lux, nqz, snow   |
|          105 |      512 | 2024-09-18 | BESTIA            | W   | 1.000      | 0.450        | -                | 0.763 (0.343)    | -         |     1.42 | biguzera, kauez, lux, nqz, snow   |
|          104 |     1035 | 2024-08-31 | Eternal Fire      | L   | 0.985      | -            | -                | -                | -         |    -7.32 | biguzera, kauez, lux, nqz, snow   |
|          103 |     1045 | 2024-08-30 | Virtus.pro        | W   | 0.979      | 0.769        | 0.434 (0.327)    | -                | 1 (0.979) |    13.10 | biguzera, kauez, lux, nqz, snow   |
|          102 |     1073 | 2024-08-29 | MOUZ              | L   | 0.973      | -            | -                | -                | -         |    -5.02 | biguzera, kauez, lux, nqz, snow   |
|          101 |     1125 | 2024-08-28 | HEROIC            | W   | 0.967      | 0.769        | 0.207 (0.154)    | 0.378 (0.281)    | 1 (0.967) |     9.26 | biguzera, kauez, lux, nqz, snow   |
|          100 |     1215 | 2024-08-27 | Falcons           | W   | 0.957      | 0.143        | 0.274 (0.038)    | -                | 1 (0.957) |    12.73 | biguzera, kauez, lux, nqz, snow   |
|           99 |     1323 | 2024-08-25 | 9z                | W   | 0.945      | -            | -                | -                | 1 (0.945) |     7.90 | biguzera, kauez, lux, nqz, snow   |
|           98 |     1339 | 2024-08-24 | FaZe              | L   | 0.940      | -            | -                | -                | -         |    -9.16 | biguzera, kauez, lux, nqz, snow   |
|           97 |     1342 | 2024-08-24 | BetBoom           | W   | 0.939      | -            | -                | -                | 1 (0.939) |     4.59 | biguzera, kauez, lux, nqz, snow   |
|           96 |     1368 | 2024-08-23 | Cloud9            | W   | 0.932      | 0.535        | 0.088 (0.044)    | -                | -         |     1.85 | biguzera, kauez, lux, nqz, snow   |
|           95 |     1694 | 2024-08-13 | G2                | L   | 0.865      | -            | -                | -                | -         |    -2.39 | biguzera, kauez, lux, nqz, snow   |
|           94 |     1733 | 2024-08-12 | The MongolZ       | W   | 0.860      | 1.000        | 0.676 (0.582)    | 0.528 (0.454)    | 1 (0.860) |    16.91 | biguzera, kauez, lux, nqz, snow   |
|           93 |     1762 | 2024-08-11 | 9z                | W   | 0.853      | 1.000        | 0.254 (0.217)    | 0.428 (0.365)    | 1 (0.853) |     7.42 | biguzera, kauez, lux, nqz, snow   |
|           92 |     1786 | 2024-08-10 | Natus Vincere     | L   | 0.846      | -            | -                | -                | -         |    -1.94 | biguzera, kauez, lux, nqz, snow   |
|           91 |     1808 | 2024-08-09 | MIBR              | W   | 0.840      | -            | -                | -                | 1 (0.840) |     7.18 | biguzera, kauez, lux, nqz, snow   |
|           90 |     1820 | 2024-08-09 | Imperial          | W   | 0.838      | -            | -                | -                | 1 (0.838) |     3.46 | biguzera, kauez, lux, nqz, snow   |
|           89 |     1870 | 2024-08-07 | Liquid            | L   | 0.827      | -            | -                | -                | -         |    -6.64 | biguzera, kauez, lux, nqz, snow   |
|           88 |     2011 | 2024-08-03 | Legacy            | W   | 0.801      | -            | -                | -                | -         |     1.65 | biguzera, kauez, lux, nqz, snow   |
|           87 |     2023 | 2024-08-03 | ODDIK             | W   | 0.799      | -            | -                | -                | -         |     2.06 | biguzera, kauez, lux, nqz, snow   |
|           86 |     2046 | 2024-08-02 | MIBR              | W   | 0.794      | 0.371        | 0.223 (0.066)    | -                | -         |     7.14 | biguzera, kauez, lux, nqz, snow   |
|           85 |     2049 | 2024-08-02 | Legacy            | W   | 0.793      | -            | -                | -                | -         |     1.54 | biguzera, kauez, lux, nqz, snow   |
|           84 |     2065 | 2024-08-02 | Sharks            | W   | 0.792      | -            | -                | -                | -         |     1.48 | biguzera, kauez, lux, nqz, snow   |
|           83 |     2101 | 2024-08-01 | Sharks            | W   | 0.786      | -            | -                | -                | -         |     1.44 | biguzera, kauez, lux, nqz, snow   |
|           82 |     2130 | 2024-07-31 | ODDIK             | W   | 0.781      | -            | -                | -                | -         |     1.93 | biguzera, kauez, lux, nqz, snow   |
|           81 |     2154 | 2024-07-31 | Dusty Roots       | W   | 0.779      | -            | -                | -                | -         |     0.46 | biguzera, kauez, lux, nqz, snow   |
|           80 |     2178 | 2024-07-30 | Players           | W   | 0.774      | -            | -                | -                | -         |     0.26 | biguzera, kauez, lux, nqz, snow   |
|           79 |     2181 | 2024-07-30 | Players           | W   | 0.774      | -            | -                | -                | -         |     0.26 | biguzera, kauez, lux, nqz, snow   |
|           78 |     2195 | 2024-07-30 | Case              | W   | 0.772      | -            | -                | -                | -         |     0.88 | biguzera, kauez, lux, nqz, snow   |
|           77 |     2215 | 2024-07-29 | Imperial          | W   | 0.768      | -            | -                | -                | -         |     3.53 | biguzera, kauez, lux, nqz, snow   |
|           76 |     2243 | 2024-07-28 | Imperial          | W   | 0.762      | -            | -                | -                | -         |     3.31 | biguzera, kauez, lux, nqz, snow   |
|           75 |     2250 | 2024-07-28 | RED Canids        | W   | 0.760      | -            | -                | -                | -         |     2.90 | biguzera, kauez, lux, nqz, snow   |
|           74 |     2464 | 2024-07-21 | Fluxo             | L   | 0.714      | -            | -                | -                | -         |   -20.15 | biguzera, kauez, lux, nqz, snow   |
|           73 |     2473 | 2024-07-21 | Fluxo             | W   | 0.713      | -            | -                | -                | -         |     2.20 | biguzera, kauez, lux, nqz, snow   |
|           72 |     2497 | 2024-07-20 | Imperial          | W   | 0.707      | -            | -                | -                | -         |     2.59 | biguzera, kauez, lux, nqz, snow   |
|           71 |     2512 | 2024-07-20 | Bounty Hunters    | W   | 0.706      | -            | -                | -                | -         |     0.66 | biguzera, kauez, lux, nqz, snow   |
|           70 |     2533 | 2024-07-19 | Fluxo             | W   | 0.700      | -            | -                | -                | -         |     2.02 | biguzera, kauez, lux, nqz, snow   |
|           69 |     2545 | 2024-07-19 | Vikings KR        | W   | 0.699      | -            | -                | -                | -         |     0.36 | biguzera, kauez, lux, nqz, snow   |
|           68 |     2572 | 2024-07-18 | Dusty Roots       | W   | 0.694      | -            | -                | -                | -         |     0.36 | biguzera, kauez, lux, nqz, snow   |
|           67 |     2577 | 2024-07-18 | Dusty Roots       | W   | 0.694      | -            | -                | -                | -         |     0.36 | biguzera, kauez, lux, nqz, snow   |
|           66 |     2640 | 2024-07-17 | Case              | W   | 0.688      | -            | -                | -                | -         |     0.71 | biguzera, kauez, lux, nqz, snow   |
|           65 |     2642 | 2024-07-17 | Case              | W   | 0.687      | -            | -                | -                | -         |     0.72 | biguzera, kauez, lux, nqz, snow   |
|           64 |     2670 | 2024-07-17 | W7M               | W   | 0.686      | -            | -                | -                | -         |     0.35 | biguzera, kauez, lux, nqz, snow   |
|           63 |     2703 | 2024-07-16 | Galorys           | W   | 0.681      | -            | -                | -                | -         |     0.41 | biguzera, kauez, lux, nqz, snow   |
|           62 |     2708 | 2024-07-16 | Galorys           | W   | 0.681      | -            | -                | -                | -         |     0.41 | biguzera, kauez, lux, nqz, snow   |
|           61 |     2748 | 2024-07-15 | Solid             | W   | 0.675      | -            | -                | -                | -         |     0.50 | biguzera, kauez, lux, nqz, snow   |
|           60 |     2751 | 2024-07-15 | Solid             | W   | 0.674      | -            | -                | -                | -         |     0.51 | biguzera, kauez, lux, nqz, snow   |
|           59 |     2979 | 2024-06-16 | Fluxo             | L   | 0.480      | -            | -                | -                | -         |   -14.15 | biguzera, kauez, lux, nqz, snow   |
|           58 |     3006 | 2024-06-15 | 9z                | L   | 0.474      | -            | -                | -                | -         |   -10.97 | biguzera, kauez, lux, nqz, snow   |
|           57 |     3022 | 2024-06-15 | ODDIK             | W   | 0.472      | -            | -                | -                | -         |     0.98 | biguzera, kauez, lux, nqz, snow   |
|           56 |     3039 | 2024-06-14 | Ninjas in Pyjamas | L   | 0.468      | -            | -                | -                | -         |   -11.15 | biguzera, kauez, lux, nqz, snow   |
|           55 |     3057 | 2024-06-14 | BESTIA            | W   | 0.466      | -            | -                | -                | 1 (0.466) |     0.72 | biguzera, kauez, lux, nqz, snow   |
|           54 |     3082 | 2024-06-13 | KRÜ               | W   | 0.460      | -            | -                | -                | -         |     0.33 | biguzera, kauez, lux, nqz, snow   |
|           53 |     3156 | 2024-06-10 | BESTIA            | W   | 0.441      | -            | -                | -                | -         |     0.69 | biguzera, kauez, lux, nqz, snow   |
|           52 |     3166 | 2024-06-10 | Imperial          | W   | 0.439      | -            | -                | -                | -         |     1.87 | biguzera, kauez, lux, nqz, snow   |
|           51 |     3197 | 2024-06-09 | Sharks            | W   | 0.433      | -            | -                | -                | -         |     0.82 | biguzera, kauez, lux, nqz, snow   |
|           50 |     3253 | 2024-06-08 | Hype              | W   | 0.428      | -            | -                | -                | -         |     0.30 | biguzera, kauez, lux, nqz, snow   |
|           49 |     3289 | 2024-06-08 | Dusty Roots       | W   | 0.425      | -            | -                | -                | -         |     0.25 | biguzera, kauez, lux, nqz, snow   |
|           48 |     3311 | 2024-06-07 | Patins da Ferrari | W   | 0.421      | -            | -                | -                | -         |     0.17 | biguzera, kauez, lux, nqz, snow   |
|           47 |     3361 | 2024-06-06 | Galorys           | W   | 0.415      | -            | -                | -                | -         |     0.26 | biguzera, kauez, lux, nqz, snow   |
|           46 |     3370 | 2024-06-06 | Sharks            | L   | 0.414      | -            | -                | -                | -         |   -12.33 | biguzera, kauez, lux, nqz, snow   |
|           45 |     3439 | 2024-06-05 | Fluxo             | W   | 0.408      | -            | -                | -                | -         |     0.62 | biguzera, kauez, lux, nqz, snow   |
|           44 |     3491 | 2024-06-04 | ODDIK             | W   | 0.401      | -            | -                | -                | -         |     0.81 | biguzera, kauez, lux, nqz, snow   |
|           43 |     3818 | 2024-05-22 | MIBR              | L   | 0.313      | -            | -                | -                | -         |    -6.33 | biguzera, kauez, lux, nqz, snow   |
|           42 |     3821 | 2024-05-22 | MIBR              | L   | 0.313      | -            | -                | -                | -         |    -6.48 | biguzera, kauez, lux, nqz, snow   |
|           41 |     3927 | 2024-05-19 | AMKAL             | L   | 0.293      | -            | -                | -                | -         |    -8.59 | biguzera, kauez, lux, nqz, snow   |
|           40 |     3937 | 2024-05-19 | OG                | W   | 0.291      | -            | -                | -                | -         |     0.24 | biguzera, kauez, lux, nqz, snow   |
|           39 |     3951 | 2024-05-18 | AMKAL             | L   | 0.286      | -            | -                | -                | -         |    -8.46 | biguzera, kauez, lux, nqz, snow   |
|           38 |     4174 | 2024-05-12 | 9z                | W   | 0.247      | -            | -                | -                | -         |     1.82 | biguzera, kauez, lux, nqz, snow   |
|           37 |     4206 | 2024-05-11 | BESTIA            | W   | 0.240      | -            | -                | -                | -         |     0.25 | biguzera, kauez, lux, nqz, snow   |
|           36 |     4235 | 2024-05-10 | RED Canids        | W   | 0.232      | -            | -                | -                | -         |     0.54 | biguzera, kauez, lux, nqz, snow   |
|           35 |     4245 | 2024-05-09 | Fluxo             | L   | 0.228      | -            | -                | -                | -         |    -6.91 | biguzera, kauez, lux, nqz, snow   |
|           34 |     4251 | 2024-05-09 | Fluxo             | W   | 0.228      | -            | -                | -                | -         |     0.28 | biguzera, kauez, lux, nqz, snow   |
|           33 |     4270 | 2024-05-08 | RED Canids        | W   | 0.221      | -            | -                | -                | -         |     0.50 | biguzera, kauez, lux, nqz, snow   |
|           32 |     4272 | 2024-05-08 | RED Canids        | L   | 0.221      | -            | -                | -                | -         |    -6.49 | biguzera, kauez, lux, nqz, snow   |
|           31 |     4276 | 2024-05-08 | Galorys           | W   | 0.220      | -            | -                | -                | -         |     0.05 | biguzera, kauez, lux, nqz, snow   |
|           30 |     4278 | 2024-05-08 | Galorys           | W   | 0.220      | -            | -                | -                | -         |     0.05 | biguzera, kauez, lux, nqz, snow   |
|           29 |     4291 | 2024-05-07 | W7M               | W   | 0.214      | -            | -                | -                | -         |     0.07 | biguzera, kauez, lux, nqz, snow   |
|           28 |     4311 | 2024-05-06 | W7M               | W   | 0.206      | -            | -                | -                | -         |     0.07 | biguzera, kauez, lux, nqz, snow   |
|           27 |     4312 | 2024-05-06 | W7M               | W   | 0.206      | -            | -                | -                | -         |     0.07 | biguzera, kauez, lux, nqz, snow   |
|           26 |     4324 | 2024-05-05 | KRÜ               | W   | 0.200      | -            | -                | -                | -         |     0.12 | biguzera, kauez, lux, nqz, snow   |
|           25 |     4548 | 2024-04-25 | Solid             | W   | 0.134      | -            | -                | -                | -         |     0.02 | biguzera, kauez, lux, nqz, nyezin |
|           24 |     4550 | 2024-04-25 | Solid             | W   | 0.134      | -            | -                | -                | -         |     0.02 | biguzera, kauez, lux, nqz, nyezin |
|           23 |     4569 | 2024-04-24 | ODDIK             | W   | 0.128      | -            | -                | -                | -         |     0.25 | biguzera, kauez, lux, nqz, nyezin |
|           22 |     4570 | 2024-04-24 | ODDIK             | L   | 0.127      | -            | -                | -                | -         |    -3.77 | biguzera, kauez, lux, nqz, nyezin |
|           21 |     4642 | 2024-04-20 | Imperial          | W   | 0.101      | -            | -                | -                | -         |     0.30 | biguzera, kauez, lux, nqz, nyezin |
|           20 |     4651 | 2024-04-20 | MIBR              | W   | 0.100      | -            | -                | -                | -         |     1.04 | biguzera, kauez, lux, nqz, nyezin |
|           19 |     4673 | 2024-04-20 | Imperial          | L   | 0.096      | -            | -                | -                | -         |    -2.76 | biguzera, kauez, lux, nqz, nyezin |
|           18 |     4674 | 2024-04-19 | MIBR              | L   | 0.095      | -            | -                | -                | -         |    -2.03 | biguzera, kauez, lux, nqz, nyezin |
|           17 |     4687 | 2024-04-19 | Imperial          | W   | 0.094      | -            | -                | -                | -         |     0.27 | biguzera, kauez, lux, nqz, nyezin |
|           16 |     4703 | 2024-04-19 | MIBR              | W   | 0.093      | -            | -                | -                | -         |     0.94 | biguzera, kauez, lux, nqz, nyezin |
|           15 |     4723 | 2024-04-18 | Fluxo             | W   | 0.089      | -            | -                | -                | -         |     0.02 | biguzera, kauez, lux, nqz, nyezin |
|           14 |     4726 | 2024-04-18 | MIBR              | L   | 0.088      | -            | -                | -                | -         |    -1.89 | biguzera, kauez, lux, nqz, nyezin |
|           13 |     4754 | 2024-04-18 | Monte             | W   | 0.086      | -            | -                | -                | -         |     0.05 | biguzera, kauez, lux, nqz, nyezin |
|           12 |     4857 | 2024-04-14 | Imperial          | L   | 0.060      | -            | -                | -                | -         |    -1.72 | biguzera, kauez, lux, nqz, nyezin |
|           11 |     4868 | 2024-04-13 | ODDIK             | W   | 0.054      | -            | -                | -                | -         |     0.10 | biguzera, kauez, lux, nqz, nyezin |
|           10 |     4900 | 2024-04-11 | MIBR              | L   | 0.041      | -            | -                | -                | -         |    -0.90 | biguzera, kauez, lux, nqz, nyezin |
|            9 |     4907 | 2024-04-11 | Sharks            | W   | 0.040      | -            | -                | -                | -         |     0.05 | biguzera, kauez, lux, nqz, nyezin |
|            8 |     4913 | 2024-04-11 | Imperial          | W   | 0.039      | -            | -                | -                | -         |     0.11 | biguzera, kauez, lux, nqz, nyezin |
|            7 |     4948 | 2024-04-10 | RED Canids        | W   | 0.034      | -            | -                | -                | -         |     0.07 | biguzera, kauez, lux, nqz, nyezin |
|            6 |     4991 | 2024-04-09 | Case              | W   | 0.028      | -            | -                | -                | -         |     0.02 | biguzera, kauez, lux, nqz, nyezin |
|            5 |     4997 | 2024-04-09 | Case              | W   | 0.027      | -            | -                | -                | -         |     0.02 | biguzera, kauez, lux, nqz, nyezin |
|            4 |     5016 | 2024-04-09 | Imperial          | L   | 0.026      | -            | -                | -                | -         |    -0.74 | biguzera, kauez, lux, nqz, nyezin |
|            3 |     5038 | 2024-04-08 | Sharks            | W   | 0.020      | -            | -                | -                | -         |     0.00 | biguzera, kauez, lux, nqz, nyezin |
|            2 |     5067 | 2024-04-07 | MIBR              | L   | 0.015      | -            | -                | -                | -         |    -0.33 | biguzera, kauez, lux, nqz, nyezin |
|            1 |     5071 | 2024-04-07 | Galorys           | W   | 0.014      | -            | -                | -                | -         |     0.00 | biguzera, kauez, lux, nqz, nyezin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($97,807.45)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.30) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-01 |      0.992 | $25,000.00     | $24,788.90      |
| 2024-08-27 |      0.959 | $10,000.00     | $9,586.23       |
| 2024-08-25 |      0.947 | $7,500.00      | $7,099.52       |
| 2024-08-18 |      0.900 | $24,000.00     | $21,599.99      |
| 2024-08-02 |      0.794 | $10,000.00     | $7,942.66       |
| 2024-06-16 |      0.480 | $10,000.00     | $4,804.77       |
| 2024-06-10 |      0.441 | $10,000.00     | $4,412.38       |
| 2024-06-09 |      0.434 | $3,000.00      | $1,302.36       |
| 2024-05-12 |      0.247 | $25,000.00     | $6,184.47       |
| 2024-04-20 |      0.101 | $100,000.00    | $10,086.16      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
