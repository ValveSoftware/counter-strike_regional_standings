### Roster Details<br />
Team Name: paiN<br />
Roster: biguzera, kauez, lux, nqz, snow<br />
Global Rank: [14](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [4]( ../standings_americas.md)<br />
<br />
Final Rank Value:  1510.4<br />
<br />
Final Rank Value (1510.4) = Starting Rank Value (1601.7) + Head To Head Adjustments (-91.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.698[<sup>1</sup>](#table2)
- Bounty Collected: 0.596[<sup>2</sup>](#table1)
- Opponent Network: 0.390[<sup>2</sup>](#table1)
- LAN Wins: 0.752[<sup>2</sup>](#table1)

The average of these factors is 0.609<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1601.7
- 400 + ( ( 0.609 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 1601.7


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
|          111 |       38 | 2024-08-13 | G2                | L   | 1.000      | -            | -                | -                | -         |    -2.50 | biguzera, kauez, lux, nqz, snow   |
|          110 |       77 | 2024-08-12 | The MongolZ       | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.738 (0.738)    | 1 (1.000) |    21.85 | biguzera, kauez, lux, nqz, snow   |
|          109 |      106 | 2024-08-11 | 9z                | W   | 1.000      | 1.000        | 0.408 (0.408)    | 0.591 (0.591)    | 1 (1.000) |    14.97 | biguzera, kauez, lux, nqz, snow   |
|          108 |      130 | 2024-08-10 | Natus Vincere     | L   | 1.000      | -            | -                | -                | -         |    -2.48 | biguzera, kauez, lux, nqz, snow   |
|          107 |      152 | 2024-08-09 | MIBR              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     8.97 | biguzera, kauez, lux, nqz, snow   |
|          106 |      164 | 2024-08-09 | Imperial          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     5.62 | biguzera, kauez, lux, nqz, snow   |
|          105 |      214 | 2024-08-07 | Liquid            | L   | 1.000      | -            | -                | -                | -         |    -5.56 | biguzera, kauez, lux, nqz, snow   |
|          104 |      355 | 2024-08-03 | Legacy            | W   | 1.000      | -            | -                | -                | -         |     3.22 | biguzera, kauez, lux, nqz, snow   |
|          103 |      367 | 2024-08-03 | ODDIK             | W   | 1.000      | -            | -                | -                | -         |     3.00 | biguzera, kauez, lux, nqz, snow   |
|          102 |      390 | 2024-08-02 | MIBR              | W   | 1.000      | 0.371        | 0.204 (0.076)    | -                | -         |     9.37 | biguzera, kauez, lux, nqz, snow   |
|          101 |      393 | 2024-08-02 | Legacy            | W   | 1.000      | -            | -                | -                | -         |     3.07 | biguzera, kauez, lux, nqz, snow   |
|          100 |      409 | 2024-08-02 | Sharks            | W   | 1.000      | -            | -                | -                | -         |     2.38 | biguzera, kauez, lux, nqz, snow   |
|           99 |      445 | 2024-08-01 | Sharks            | W   | 1.000      | -            | -                | -                | -         |     2.32 | biguzera, kauez, lux, nqz, snow   |
|           98 |      474 | 2024-07-31 | ODDIK             | W   | 1.000      | -            | -                | -                | -         |     2.90 | biguzera, kauez, lux, nqz, snow   |
|           97 |      498 | 2024-07-31 | Dusty Roots       | W   | 1.000      | -            | -                | -                | -         |     0.85 | biguzera, kauez, lux, nqz, snow   |
|           96 |      522 | 2024-07-30 | Smoke             | W   | 1.000      | -            | -                | -                | -         |     0.50 | biguzera, kauez, lux, nqz, snow   |
|           95 |      525 | 2024-07-30 | Smoke             | W   | 1.000      | -            | -                | -                | -         |     0.51 | biguzera, kauez, lux, nqz, snow   |
|           94 |      539 | 2024-07-30 | Case              | W   | 1.000      | -            | -                | -                | -         |     1.55 | biguzera, kauez, lux, nqz, snow   |
|           93 |      559 | 2024-07-29 | Imperial          | W   | 1.000      | -            | -                | -                | -         |     6.72 | biguzera, kauez, lux, nqz, snow   |
|           92 |      587 | 2024-07-28 | Imperial          | W   | 1.000      | -            | -                | -                | -         |     6.46 | biguzera, kauez, lux, nqz, snow   |
|           91 |      594 | 2024-07-28 | RED Canids        | W   | 1.000      | -            | -                | -                | -         |     5.33 | biguzera, kauez, lux, nqz, snow   |
|           90 |      808 | 2024-07-21 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |   -25.67 | biguzera, kauez, lux, nqz, snow   |
|           89 |      817 | 2024-07-21 | Fluxo             | W   | 1.000      | -            | -                | -                | -         |     5.33 | biguzera, kauez, lux, nqz, snow   |
|           88 |      841 | 2024-07-20 | Imperial          | W   | 1.000      | -            | -                | -                | -         |     5.55 | biguzera, kauez, lux, nqz, snow   |
|           87 |      856 | 2024-07-20 | Bounty Hunters    | W   | 1.000      | -            | -                | -                | -         |     1.76 | biguzera, kauez, lux, nqz, snow   |
|           86 |      877 | 2024-07-19 | Fluxo             | W   | 1.000      | -            | -                | -                | -         |     5.22 | biguzera, kauez, lux, nqz, snow   |
|           85 |      889 | 2024-07-19 | Vikings KR        | W   | 1.000      | -            | -                | -                | -         |     0.92 | biguzera, kauez, lux, nqz, snow   |
|           84 |      916 | 2024-07-18 | Dusty Roots       | W   | 1.000      | -            | -                | -                | -         |     0.76 | biguzera, kauez, lux, nqz, snow   |
|           83 |      921 | 2024-07-18 | Dusty Roots       | W   | 1.000      | -            | -                | -                | -         |     0.77 | biguzera, kauez, lux, nqz, snow   |
|           82 |      984 | 2024-07-17 | Case              | W   | 1.000      | 0.450        | -                | 0.768 (0.346)    | -         |     1.43 | biguzera, kauez, lux, nqz, snow   |
|           81 |      986 | 2024-07-17 | Case              | W   | 1.000      | 0.450        | -                | 0.768 (0.346)    | -         |     1.45 | biguzera, kauez, lux, nqz, snow   |
|           80 |     1014 | 2024-07-17 | W7M               | W   | 1.000      | -            | -                | -                | -         |     0.85 | biguzera, kauez, lux, nqz, snow   |
|           79 |     1047 | 2024-07-16 | Galorys           | W   | 1.000      | -            | -                | -                | -         |     0.92 | biguzera, kauez, lux, nqz, snow   |
|           78 |     1052 | 2024-07-16 | Galorys           | W   | 1.000      | -            | -                | -                | -         |     0.93 | biguzera, kauez, lux, nqz, snow   |
|           77 |     1092 | 2024-07-15 | Solid             | W   | 1.000      | 0.450        | -                | 0.760 (0.342)    | -         |     1.10 | biguzera, kauez, lux, nqz, snow   |
|           76 |     1095 | 2024-07-15 | Solid             | W   | 1.000      | 0.450        | -                | 0.760 (0.342)    | -         |     1.11 | biguzera, kauez, lux, nqz, snow   |
|           75 |     1323 | 2024-06-16 | Fluxo             | L   | 0.807      | -            | -                | -                | -         |   -22.41 | biguzera, kauez, lux, nqz, snow   |
|           74 |     1350 | 2024-06-15 | 9z                | L   | 0.800      | -            | -                | -                | -         |   -11.89 | biguzera, kauez, lux, nqz, snow   |
|           73 |     1366 | 2024-06-15 | ODDIK             | W   | 0.799      | 0.450        | -                | 0.822 (0.296)    | -         |     1.51 | biguzera, kauez, lux, nqz, snow   |
|           72 |     1383 | 2024-06-14 | Ninjas in Pyjamas | L   | 0.795      | -            | -                | -                | -         |    -9.82 | biguzera, kauez, lux, nqz, snow   |
|           71 |     1401 | 2024-06-14 | BESTIA            | W   | 0.793      | 0.548        | -                | 0.880 (0.382)    | 1 (0.793) |     1.98 | biguzera, kauez, lux, nqz, snow   |
|           70 |     1426 | 2024-06-13 | KRÜ               | W   | 0.787      | -            | -                | -                | -         |     0.83 | biguzera, kauez, lux, nqz, snow   |
|           69 |     1500 | 2024-06-10 | BESTIA            | W   | 0.768      | 0.371        | -                | 0.880 (0.250)    | -         |     1.97 | biguzera, kauez, lux, nqz, snow   |
|           68 |     1510 | 2024-06-10 | Imperial          | W   | 0.766      | 0.371        | 0.213 (0.060)    | -                | -         |     5.97 | biguzera, kauez, lux, nqz, snow   |
|           67 |     1541 | 2024-06-09 | Sharks            | W   | 0.760      | -            | -                | -                | -         |     1.95 | biguzera, kauez, lux, nqz, snow   |
|           66 |     1597 | 2024-06-08 | Hype              | W   | 0.755      | -            | -                | -                | -         |     1.00 | biguzera, kauez, lux, nqz, snow   |
|           65 |     1633 | 2024-06-08 | Dusty Roots       | W   | 0.752      | -            | -                | -                | -         |     0.75 | biguzera, kauez, lux, nqz, snow   |
|           64 |     1655 | 2024-06-07 | Corinthians       | W   | 0.748      | -            | -                | -                | -         |     0.39 | biguzera, kauez, lux, nqz, snow   |
|           63 |     1705 | 2024-06-06 | Galorys           | W   | 0.742      | -            | -                | -                | -         |     0.84 | biguzera, kauez, lux, nqz, snow   |
|           62 |     1714 | 2024-06-06 | Sharks            | L   | 0.741      | -            | -                | -                | -         |   -21.65 | biguzera, kauez, lux, nqz, snow   |
|           61 |     1783 | 2024-06-05 | Fluxo             | W   | 0.734      | -            | -                | -                | -         |     1.84 | biguzera, kauez, lux, nqz, snow   |
|           60 |     1835 | 2024-06-04 | ODDIK             | W   | 0.728      | 0.450        | -                | 0.822 (0.269)    | -         |     1.29 | biguzera, kauez, lux, nqz, snow   |
|           59 |     2162 | 2024-05-22 | MIBR              | L   | 0.640      | -            | -                | -                | -         |   -11.58 | biguzera, kauez, lux, nqz, snow   |
|           58 |     2165 | 2024-05-22 | MIBR              | L   | 0.639      | -            | -                | -                | -         |   -12.23 | biguzera, kauez, lux, nqz, snow   |
|           57 |     2271 | 2024-05-19 | AMKAL             | L   | 0.619      | -            | -                | -                | -         |   -17.00 | biguzera, kauez, lux, nqz, snow   |
|           56 |     2281 | 2024-05-19 | OG                | W   | 0.618      | 0.769        | 0.121 (0.057)    | -                | -         |     1.05 | biguzera, kauez, lux, nqz, snow   |
|           55 |     2295 | 2024-05-18 | AMKAL             | L   | 0.613      | -            | -                | -                | -         |   -17.20 | biguzera, kauez, lux, nqz, snow   |
|           54 |     2518 | 2024-05-12 | 9z                | W   | 0.574      | 0.435        | 0.408 (0.102)    | -                | -         |     9.88 | biguzera, kauez, lux, nqz, snow   |
|           53 |     2550 | 2024-05-11 | BESTIA            | W   | 0.566      | -            | -                | -                | -         |     0.73 | biguzera, kauez, lux, nqz, snow   |
|           52 |     2579 | 2024-05-10 | RED Canids        | W   | 0.559      | -            | -                | -                | -         |     1.38 | biguzera, kauez, lux, nqz, snow   |
|           51 |     2589 | 2024-05-09 | Fluxo             | L   | 0.555      | -            | -                | -                | -         |   -16.50 | biguzera, kauez, lux, nqz, snow   |
|           50 |     2595 | 2024-05-09 | Fluxo             | W   | 0.554      | -            | -                | -                | -         |     0.94 | biguzera, kauez, lux, nqz, snow   |
|           49 |     2614 | 2024-05-08 | RED Canids        | W   | 0.548      | -            | -                | -                | -         |     1.25 | biguzera, kauez, lux, nqz, snow   |
|           48 |     2616 | 2024-05-08 | RED Canids        | L   | 0.548      | -            | -                | -                | -         |   -16.14 | biguzera, kauez, lux, nqz, snow   |
|           47 |     2620 | 2024-05-08 | Galorys           | W   | 0.546      | -            | -                | -                | -         |     0.37 | biguzera, kauez, lux, nqz, snow   |
|           46 |     2622 | 2024-05-08 | Galorys           | W   | 0.546      | -            | -                | -                | -         |     0.37 | biguzera, kauez, lux, nqz, snow   |
|           45 |     2635 | 2024-05-07 | W7M               | W   | 0.540      | -            | -                | -                | -         |     0.29 | biguzera, kauez, lux, nqz, snow   |
|           44 |     2655 | 2024-05-06 | W7M               | W   | 0.533      | -            | -                | -                | -         |     0.29 | biguzera, kauez, lux, nqz, snow   |
|           43 |     2656 | 2024-05-06 | W7M               | W   | 0.533      | -            | -                | -                | -         |     0.29 | biguzera, kauez, lux, nqz, snow   |
|           42 |     2668 | 2024-05-05 | KRÜ               | W   | 0.527      | -            | -                | -                | -         |     0.39 | biguzera, kauez, lux, nqz, snow   |
|           41 |     2892 | 2024-04-25 | Solid             | W   | 0.461      | -            | -                | -                | -         |     0.29 | biguzera, kauez, lux, nqz, nyezin |
|           40 |     2894 | 2024-04-25 | Solid             | W   | 0.460      | -            | -                | -                | -         |     0.29 | biguzera, kauez, lux, nqz, nyezin |
|           39 |     2913 | 2024-04-24 | ODDIK             | W   | 0.454      | -            | -                | -                | -         |     0.64 | biguzera, kauez, lux, nqz, nyezin |
|           38 |     2914 | 2024-04-24 | ODDIK             | L   | 0.454      | -            | -                | -                | -         |   -13.73 | biguzera, kauez, lux, nqz, nyezin |
|           37 |     2986 | 2024-04-20 | Imperial          | W   | 0.427      | 0.589        | 0.213 (0.054)    | -                | 1 (0.427) |     1.94 | biguzera, kauez, lux, nqz, nyezin |
|           36 |     2995 | 2024-04-20 | MIBR              | W   | 0.426      | 0.589        | 0.204 (0.051)    | -                | 1 (0.426) |     4.67 | biguzera, kauez, lux, nqz, nyezin |
|           35 |     3017 | 2024-04-20 | Imperial          | L   | 0.423      | -            | -                | -                | -         |   -11.52 | biguzera, kauez, lux, nqz, nyezin |
|           34 |     3018 | 2024-04-19 | MIBR              | L   | 0.422      | -            | -                | -                | -         |    -9.09 | biguzera, kauez, lux, nqz, nyezin |
|           33 |     3031 | 2024-04-19 | Imperial          | W   | 0.420      | -            | -                | -                | -         |     1.70 | biguzera, kauez, lux, nqz, nyezin |
|           32 |     3047 | 2024-04-19 | MIBR              | W   | 0.419      | -            | -                | -                | 1 (0.419) |     4.08 | biguzera, kauez, lux, nqz, nyezin |
|           31 |     3067 | 2024-04-18 | Fluxo             | W   | 0.415      | -            | -                | -                | -         |     0.29 | biguzera, kauez, lux, nqz, nyezin |
|           30 |     3070 | 2024-04-18 | MIBR              | L   | 0.415      | -            | -                | -                | -         |    -9.27 | biguzera, kauez, lux, nqz, nyezin |
|           29 |     3098 | 2024-04-18 | Monte             | W   | 0.412      | -            | -                | -                | 1 (0.412) |     0.65 | biguzera, kauez, lux, nqz, nyezin |
|           28 |     3201 | 2024-04-14 | Imperial          | L   | 0.386      | -            | -                | -                | -         |   -10.82 | biguzera, kauez, lux, nqz, nyezin |
|           27 |     3212 | 2024-04-13 | ODDIK             | W   | 0.380      | -            | -                | -                | -         |     0.41 | biguzera, kauez, lux, nqz, nyezin |
|           26 |     3244 | 2024-04-11 | MIBR              | L   | 0.368      | -            | -                | -                | -         |    -8.69 | biguzera, kauez, lux, nqz, nyezin |
|           25 |     3251 | 2024-04-11 | Sharks            | W   | 0.367      | -            | -                | -                | -         |     0.32 | biguzera, kauez, lux, nqz, nyezin |
|           24 |     3257 | 2024-04-11 | Imperial          | W   | 0.366      | -            | -                | -                | -         |     1.19 | biguzera, kauez, lux, nqz, nyezin |
|           23 |     3292 | 2024-04-10 | RED Canids        | W   | 0.360      | -            | -                | -                | -         |     0.55 | biguzera, kauez, lux, nqz, nyezin |
|           22 |     3335 | 2024-04-09 | Case              | W   | 0.354      | -            | -                | -                | -         |     0.23 | biguzera, kauez, lux, nqz, nyezin |
|           21 |     3341 | 2024-04-09 | Case              | W   | 0.354      | -            | -                | -                | -         |     0.23 | biguzera, kauez, lux, nqz, nyezin |
|           20 |     3360 | 2024-04-09 | Imperial          | L   | 0.352      | -            | -                | -                | -         |    -9.99 | biguzera, kauez, lux, nqz, nyezin |
|           19 |     3382 | 2024-04-08 | Sharks            | W   | 0.347      | -            | -                | -                | -         |     0.10 | biguzera, kauez, lux, nqz, nyezin |
|           18 |     3411 | 2024-04-07 | MIBR              | L   | 0.342      | -            | -                | -                | -         |    -8.41 | biguzera, kauez, lux, nqz, nyezin |
|           17 |     3415 | 2024-04-07 | Galorys           | W   | 0.340      | -            | -                | -                | -         |     0.18 | biguzera, kauez, lux, nqz, nyezin |
|           16 |     3452 | 2024-04-05 | Sharks            | W   | 0.326      | -            | -                | -                | -         |     0.08 | biguzera, kauez, lux, nqz, nyezin |
|           15 |     3470 | 2024-04-04 | Sharks            | W   | 0.321      | -            | -                | -                | -         |     0.08 | biguzera, kauez, lux, nqz, nyezin |
|           14 |     3478 | 2024-04-04 | Sharks            | W   | 0.321      | -            | -                | -                | -         |     0.08 | biguzera, kauez, lux, nqz, nyezin |
|           13 |     3704 | 2024-03-24 | Natus Vincere     | L   | 0.246      | -            | -                | -                | -         |    -0.87 | biguzera, kauez, lux, n1ssim, nqz |
|           12 |     3715 | 2024-03-23 | HEROIC            | W   | 0.240      | 1.000        | 0.220 (0.053)    | -                | 1 (0.240) |     2.65 | biguzera, kauez, lux, n1ssim, nqz |
|           11 |     3730 | 2024-03-22 | The MongolZ       | W   | 0.233      | 1.000        | 1.000 (0.233)    | -                | -         |     6.17 | biguzera, kauez, lux, n1ssim, nqz |
|           10 |     3750 | 2024-03-21 | Virtus.pro        | L   | 0.226      | -            | -                | -                | -         |    -3.48 | biguzera, kauez, lux, n1ssim, nqz |
|            9 |     3758 | 2024-03-21 | Complexity        | L   | 0.225      | -            | -                | -                | -         |    -3.13 | biguzera, kauez, lux, n1ssim, nqz |
|            8 |     3795 | 2024-03-19 | SAW               | W   | 0.212      | -            | -                | -                | -         |     2.14 | biguzera, kauez, lux, n1ssim, nqz |
|            7 |     3810 | 2024-03-18 | ENCE              | W   | 0.204      | -            | -                | -                | -         |     1.52 | biguzera, kauez, lux, n1ssim, nqz |
|            6 |     3829 | 2024-03-17 | Eternal Fire      | L   | 0.199      | -            | -                | -                | -         |    -2.74 | biguzera, kauez, lux, n1ssim, nqz |
|            5 |     3838 | 2024-03-17 | Apeks             | W   | 0.198      | -            | -                | -                | -         |     0.09 | biguzera, kauez, lux, n1ssim, nqz |
|            4 |     4167 | 2024-03-04 | ODDIK             | W   | 0.112      | -            | -                | -                | -         |     0.15 | biguzera, kauez, lux, n1ssim, nqz |
|            3 |     4184 | 2024-03-03 | Imperial          | L   | 0.106      | -            | -                | -                | -         |    -3.06 | biguzera, kauez, lux, n1ssim, nqz |
|            2 |     4216 | 2024-03-02 | RED Canids        | W   | 0.099      | -            | -                | -                | -         |     0.13 | biguzera, kauez, lux, n1ssim, nqz |
|            1 |     4229 | 2024-03-01 | Legacy            | W   | 0.094      | -            | -                | -                | -         |     0.08 | biguzera, kauez, lux, n1ssim, nqz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($118,169.88)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.37) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-13 |      1.000 | $24,000.00     | $24,000.00      |
| 2024-08-02 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-16 |      0.808 | $1,500.00      | $1,212.03       |
| 2024-06-16 |      0.807 | $10,000.00     | $8,070.50       |
| 2024-06-10 |      0.768 | $10,000.00     | $7,678.11       |
| 2024-06-09 |      0.761 | $3,000.00      | $2,282.08       |
| 2024-05-12 |      0.574 | $25,000.00     | $14,348.79      |
| 2024-04-20 |      0.427 | $100,000.00    | $42,743.41      |
| 2024-04-15 |      0.394 | $5,000.00      | $1,969.54       |
| 2024-03-31 |      0.293 | $20,000.00     | $5,865.44       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
