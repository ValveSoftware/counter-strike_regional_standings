### Roster Details<br />
Team Name: paiN<br />
Roster: biguzera, kauez, lux, nqz, snow<br />
Global Rank: [22](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [5]( ../standings_americas.md)<br />
<br />
Final Rank Value:  1396.6<br />
<br />
Final Rank Value (1396.6) = Starting Rank Value (1422.9) + Head To Head Adjustments (-26.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.660[<sup>1</sup>](#table2)
- Bounty Collected: 0.496[<sup>2</sup>](#table1)
- Opponent Network: 0.309[<sup>2</sup>](#table1)
- LAN Wins: 0.517[<sup>2</sup>](#table1)

The average of these factors is 0.495<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1422.9
- 400 + ( ( 0.495 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1422.9


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
|           97 |       17 | 2024-07-31 | Dusty Roots       | W   | 1.000      | -            | -                | -                | -         |     1.16 | biguzera, kauez, lux, nqz, snow   |
|           96 |       41 | 2024-07-30 | Smoke             | W   | 1.000      | -            | -                | -                | -         |     0.68 | biguzera, kauez, lux, nqz, snow   |
|           95 |       44 | 2024-07-30 | Smoke             | W   | 1.000      | -            | -                | -                | -         |     0.69 | biguzera, kauez, lux, nqz, snow   |
|           94 |       58 | 2024-07-30 | Case              | W   | 1.000      | -            | -                | -                | -         |     2.10 | biguzera, kauez, lux, nqz, snow   |
|           93 |       78 | 2024-07-29 | Imperial          | W   | 1.000      | -            | -                | -                | -         |     9.75 | biguzera, kauez, lux, nqz, snow   |
|           92 |      106 | 2024-07-28 | Imperial          | W   | 1.000      | -            | -                | -                | -         |     9.67 | biguzera, kauez, lux, nqz, snow   |
|           91 |      113 | 2024-07-28 | RED Canids        | W   | 1.000      | -            | -                | -                | -         |     7.91 | biguzera, kauez, lux, nqz, snow   |
|           90 |      327 | 2024-07-21 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |   -22.76 | biguzera, kauez, lux, nqz, snow   |
|           89 |      336 | 2024-07-21 | Fluxo             | W   | 1.000      | -            | -                | -                | -         |     8.25 | biguzera, kauez, lux, nqz, snow   |
|           88 |      360 | 2024-07-20 | Imperial          | W   | 1.000      | -            | -                | -                | -         |     9.15 | biguzera, kauez, lux, nqz, snow   |
|           87 |      375 | 2024-07-20 | Bounty Hunters    | W   | 1.000      | -            | -                | -                | -         |     2.90 | biguzera, kauez, lux, nqz, snow   |
|           86 |      396 | 2024-07-19 | Fluxo             | W   | 1.000      | -            | -                | -                | -         |     8.53 | biguzera, kauez, lux, nqz, snow   |
|           85 |      408 | 2024-07-19 | Vikings KR        | W   | 1.000      | -            | -                | -                | -         |     1.53 | biguzera, kauez, lux, nqz, snow   |
|           84 |      435 | 2024-07-18 | Dusty Roots       | W   | 1.000      | -            | -                | -                | -         |     1.19 | biguzera, kauez, lux, nqz, snow   |
|           83 |      440 | 2024-07-18 | Dusty Roots       | W   | 1.000      | -            | -                | -                | -         |     1.20 | biguzera, kauez, lux, nqz, snow   |
|           82 |      503 | 2024-07-17 | Case              | W   | 1.000      | 0.450        | -                | 0.720 (0.324)    | -         |     2.21 | biguzera, kauez, lux, nqz, snow   |
|           81 |      505 | 2024-07-17 | Case              | W   | 1.000      | 0.450        | -                | 0.720 (0.324)    | -         |     2.26 | biguzera, kauez, lux, nqz, snow   |
|           80 |      533 | 2024-07-17 | W7M               | W   | 1.000      | -            | -                | -                | -         |     1.39 | biguzera, kauez, lux, nqz, snow   |
|           79 |      566 | 2024-07-16 | Galorys           | W   | 1.000      | 0.450        | -                | 0.552 (0.249)    | -         |     1.44 | biguzera, kauez, lux, nqz, snow   |
|           78 |      571 | 2024-07-16 | Galorys           | W   | 1.000      | 0.450        | -                | 0.552 (0.249)    | -         |     1.46 | biguzera, kauez, lux, nqz, snow   |
|           77 |      611 | 2024-07-15 | Solid             | W   | 1.000      | 0.450        | -                | 0.817 (0.368)    | -         |     1.83 | biguzera, kauez, lux, nqz, snow   |
|           76 |      614 | 2024-07-15 | Solid             | W   | 1.000      | 0.450        | -                | 0.817 (0.368)    | -         |     1.87 | biguzera, kauez, lux, nqz, snow   |
|           75 |      842 | 2024-06-16 | Fluxo             | L   | 0.900      | -            | -                | -                | -         |   -22.19 | biguzera, kauez, lux, nqz, snow   |
|           74 |      869 | 2024-06-15 | 9z                | L   | 0.894      | -            | -                | -                | -         |   -10.51 | biguzera, kauez, lux, nqz, snow   |
|           73 |      885 | 2024-06-15 | ODDIK             | W   | 0.892      | 0.450        | -                | 0.781 (0.314)    | -         |     2.61 | biguzera, kauez, lux, nqz, snow   |
|           72 |      902 | 2024-06-14 | Ninjas in Pyjamas | L   | 0.888      | -            | -                | -                | -         |    -6.63 | biguzera, kauez, lux, nqz, snow   |
|           71 |      920 | 2024-06-14 | BESTIA            | W   | 0.886      | 0.548        | 0.093 (0.045)    | 0.731 (0.355)    | 1 (0.886) |     3.88 | biguzera, kauez, lux, nqz, snow   |
|           70 |      945 | 2024-06-13 | KRÜ               | W   | 0.880      | -            | -                | -                | -         |     1.66 | biguzera, kauez, lux, nqz, snow   |
|           69 |     1019 | 2024-06-10 | BESTIA            | W   | 0.861      | -            | -                | -                | -         |     3.95 | biguzera, kauez, lux, nqz, snow   |
|           68 |     1029 | 2024-06-10 | Imperial          | W   | 0.859      | 0.371        | 0.245 (0.078)    | -                | -         |    11.91 | biguzera, kauez, lux, nqz, snow   |
|           67 |     1060 | 2024-06-09 | Sharks            | W   | 0.853      | -            | -                | -                | -         |     4.16 | biguzera, kauez, lux, nqz, snow   |
|           66 |     1116 | 2024-06-08 | Hype              | W   | 0.848      | -            | -                | -                | -         |     2.03 | biguzera, kauez, lux, nqz, snow   |
|           65 |     1152 | 2024-06-08 | Dusty Roots       | W   | 0.845      | -            | -                | -                | -         |     1.48 | biguzera, kauez, lux, nqz, snow   |
|           64 |     1174 | 2024-06-07 | Patins da Ferrari | W   | 0.841      | -            | -                | -                | -         |     1.23 | biguzera, kauez, lux, nqz, snow   |
|           63 |     1224 | 2024-06-06 | Galorys           | W   | 0.835      | -            | -                | -                | -         |     1.76 | biguzera, kauez, lux, nqz, snow   |
|           62 |     1233 | 2024-06-06 | Sharks            | L   | 0.834      | -            | -                | -                | -         |   -22.50 | biguzera, kauez, lux, nqz, snow   |
|           61 |     1302 | 2024-06-05 | Fluxo             | W   | 0.828      | 0.450        | 0.123 (0.046)    | 0.685 (0.255)    | -         |     4.37 | biguzera, kauez, lux, nqz, snow   |
|           60 |     1354 | 2024-06-04 | ODDIK             | W   | 0.821      | 0.450        | -                | 0.781 (0.289)    | -         |     2.45 | biguzera, kauez, lux, nqz, snow   |
|           59 |     1681 | 2024-05-22 | MIBR              | L   | 0.733      | -            | -                | -                | -         |    -8.79 | biguzera, kauez, lux, nqz, snow   |
|           58 |     1684 | 2024-05-22 | MIBR              | L   | 0.733      | -            | -                | -                | -         |    -9.35 | biguzera, kauez, lux, nqz, snow   |
|           57 |     1790 | 2024-05-19 | AMKAL             | L   | 0.712      | -            | -                | -                | -         |   -16.57 | biguzera, kauez, lux, nqz, snow   |
|           56 |     1800 | 2024-05-19 | OG                | W   | 0.711      | 0.769        | 0.144 (0.079)    | -                | -         |     3.07 | biguzera, kauez, lux, nqz, snow   |
|           55 |     1814 | 2024-05-18 | AMKAL             | L   | 0.706      | -            | -                | -                | -         |   -17.05 | biguzera, kauez, lux, nqz, snow   |
|           54 |     2037 | 2024-05-12 | 9z                | W   | 0.667      | 0.435        | 0.412 (0.119)    | -                | -         |    14.45 | biguzera, kauez, lux, nqz, snow   |
|           53 |     2069 | 2024-05-11 | BESTIA            | W   | 0.660      | -            | -                | -                | -         |     1.75 | biguzera, kauez, lux, nqz, snow   |
|           52 |     2098 | 2024-05-10 | RED Canids        | W   | 0.652      | -            | -                | -                | -         |     3.53 | biguzera, kauez, lux, nqz, snow   |
|           51 |     2108 | 2024-05-09 | Fluxo             | L   | 0.648      | -            | -                | -                | -         |   -17.55 | biguzera, kauez, lux, nqz, snow   |
|           50 |     2114 | 2024-05-09 | Fluxo             | W   | 0.648      | -            | -                | -                | -         |     2.76 | biguzera, kauez, lux, nqz, snow   |
|           49 |     2133 | 2024-05-08 | RED Canids        | W   | 0.641      | -            | -                | -                | -         |     3.32 | biguzera, kauez, lux, nqz, snow   |
|           48 |     2135 | 2024-05-08 | RED Canids        | L   | 0.641      | -            | -                | -                | -         |   -17.18 | biguzera, kauez, lux, nqz, snow   |
|           47 |     2139 | 2024-05-08 | Galorys           | W   | 0.640      | -            | -                | -                | -         |     0.96 | biguzera, kauez, lux, nqz, snow   |
|           46 |     2141 | 2024-05-08 | Galorys           | W   | 0.639      | -            | -                | -                | -         |     0.97 | biguzera, kauez, lux, nqz, snow   |
|           45 |     2154 | 2024-05-07 | W7M               | W   | 0.633      | -            | -                | -                | -         |     0.74 | biguzera, kauez, lux, nqz, snow   |
|           44 |     2174 | 2024-05-06 | W7M               | W   | 0.626      | -            | -                | -                | -         |     0.74 | biguzera, kauez, lux, nqz, snow   |
|           43 |     2175 | 2024-05-06 | W7M               | W   | 0.626      | -            | -                | -                | -         |     0.74 | biguzera, kauez, lux, nqz, snow   |
|           42 |     2187 | 2024-05-05 | KRÜ               | W   | 0.620      | -            | -                | -                | -         |     1.01 | biguzera, kauez, lux, nqz, snow   |
|           41 |     2411 | 2024-04-25 | Solid             | W   | 0.554      | -            | -                | -                | -         |     0.84 | biguzera, kauez, lux, nqz, nyezin |
|           40 |     2413 | 2024-04-25 | Solid             | W   | 0.554      | -            | -                | -                | -         |     0.85 | biguzera, kauez, lux, nqz, nyezin |
|           39 |     2432 | 2024-04-24 | ODDIK             | W   | 0.547      | -            | -                | -                | -         |     1.38 | biguzera, kauez, lux, nqz, nyezin |
|           38 |     2433 | 2024-04-24 | ODDIK             | L   | 0.547      | -            | -                | -                | -         |   -16.01 | biguzera, kauez, lux, nqz, nyezin |
|           37 |     2505 | 2024-04-20 | Imperial          | W   | 0.521      | 0.589        | 0.245 (0.075)    | -                | 1 (0.521) |     6.06 | biguzera, kauez, lux, nqz, nyezin |
|           36 |     2514 | 2024-04-20 | MIBR              | W   | 0.520      | 0.589        | 0.202 (0.062)    | -                | 1 (0.520) |     9.54 | biguzera, kauez, lux, nqz, nyezin |
|           35 |     2536 | 2024-04-20 | Imperial          | L   | 0.516      | -            | -                | -                | -         |   -10.30 | biguzera, kauez, lux, nqz, nyezin |
|           34 |     2537 | 2024-04-19 | MIBR              | L   | 0.515      | -            | -                | -                | -         |    -7.16 | biguzera, kauez, lux, nqz, nyezin |
|           33 |     2550 | 2024-04-19 | Imperial          | W   | 0.513      | -            | -                | -                | -         |     5.84 | biguzera, kauez, lux, nqz, nyezin |
|           32 |     2566 | 2024-04-19 | MIBR              | W   | 0.512      | 0.589        | 0.202 (0.061)    | -                | 1 (0.512) |     9.08 | biguzera, kauez, lux, nqz, nyezin |
|           31 |     2586 | 2024-04-18 | Fluxo             | W   | 0.509      | -            | -                | -                | -         |     2.13 | biguzera, kauez, lux, nqz, nyezin |
|           30 |     2589 | 2024-04-18 | MIBR              | L   | 0.508      | -            | -                | -                | -         |    -7.20 | biguzera, kauez, lux, nqz, nyezin |
|           29 |     2617 | 2024-04-18 | Monte             | W   | 0.505      | -            | -                | -                | 1 (0.505) |     1.57 | biguzera, kauez, lux, nqz, nyezin |
|           28 |     2720 | 2024-04-14 | Imperial          | L   | 0.480      | -            | -                | -                | -         |    -9.92 | biguzera, kauez, lux, nqz, nyezin |
|           27 |     2731 | 2024-04-13 | ODDIK             | W   | 0.473      | -            | -                | -                | -         |     1.00 | biguzera, kauez, lux, nqz, nyezin |
|           26 |     2763 | 2024-04-11 | MIBR              | L   | 0.461      | -            | -                | -                | -         |    -7.22 | biguzera, kauez, lux, nqz, nyezin |
|           25 |     2770 | 2024-04-11 | Sharks            | W   | 0.460      | -            | -                | -                | -         |     1.05 | biguzera, kauez, lux, nqz, nyezin |
|           24 |     2776 | 2024-04-11 | Imperial          | W   | 0.459      | -            | -                | -                | -         |     4.84 | biguzera, kauez, lux, nqz, nyezin |
|           23 |     2811 | 2024-04-10 | RED Canids        | W   | 0.453      | -            | -                | -                | -         |     2.00 | biguzera, kauez, lux, nqz, nyezin |
|           22 |     2854 | 2024-04-09 | Case              | W   | 0.448      | -            | -                | -                | -         |     0.75 | biguzera, kauez, lux, nqz, nyezin |
|           21 |     2860 | 2024-04-09 | Case              | W   | 0.447      | -            | -                | -                | -         |     0.75 | biguzera, kauez, lux, nqz, nyezin |
|           20 |     2879 | 2024-04-09 | Imperial          | L   | 0.446      | -            | -                | -                | -         |    -9.29 | biguzera, kauez, lux, nqz, nyezin |
|           19 |     2901 | 2024-04-08 | Sharks            | W   | 0.440      | -            | -                | -                | -         |     0.35 | biguzera, kauez, lux, nqz, nyezin |
|           18 |     2930 | 2024-04-07 | MIBR              | L   | 0.435      | -            | -                | -                | -         |    -7.26 | biguzera, kauez, lux, nqz, nyezin |
|           17 |     2934 | 2024-04-07 | Galorys           | W   | 0.434      | -            | -                | -                | -         |     0.63 | biguzera, kauez, lux, nqz, nyezin |
|           16 |     2971 | 2024-04-05 | Sharks            | W   | 0.419      | -            | -                | -                | -         |     0.28 | biguzera, kauez, lux, nqz, nyezin |
|           15 |     2989 | 2024-04-04 | Sharks            | W   | 0.414      | -            | -                | -                | -         |     0.28 | biguzera, kauez, lux, nqz, nyezin |
|           14 |     2997 | 2024-04-04 | Sharks            | W   | 0.414      | -            | -                | -                | -         |     0.28 | biguzera, kauez, lux, nqz, nyezin |
|           13 |     3223 | 2024-03-24 | Natus Vincere     | L   | 0.340      | -            | -                | -                | -         |    -0.49 | biguzera, kauez, lux, n1ssim, nqz |
|           12 |     3234 | 2024-03-23 | HEROIC            | W   | 0.333      | 1.000        | 0.210 (0.070)    | -                | 1 (0.333) |     7.35 | biguzera, kauez, lux, n1ssim, nqz |
|           11 |     3249 | 2024-03-22 | The MongolZ       | W   | 0.326      | 1.000        | 1.000 (0.326)    | -                | 1 (0.326) |     9.69 | biguzera, kauez, lux, n1ssim, nqz |
|           10 |     3269 | 2024-03-21 | Virtus.pro        | L   | 0.319      | -            | -                | -                | -         |    -1.60 | biguzera, kauez, lux, n1ssim, nqz |
|            9 |     3277 | 2024-03-21 | Complexity        | L   | 0.318      | -            | -                | -                | -         |    -2.35 | biguzera, kauez, lux, n1ssim, nqz |
|            8 |     3314 | 2024-03-19 | SAW               | W   | 0.305      | -            | -                | -                | 1 (0.305) |     2.08 | biguzera, kauez, lux, n1ssim, nqz |
|            7 |     3329 | 2024-03-18 | ENCE              | W   | 0.298      | -            | -                | -                | 1 (0.298) |     5.42 | biguzera, kauez, lux, n1ssim, nqz |
|            6 |     3348 | 2024-03-17 | Eternal Fire      | L   | 0.293      | -            | -                | -                | -         |    -1.38 | biguzera, kauez, lux, n1ssim, nqz |
|            5 |     3357 | 2024-03-17 | Apeks             | W   | 0.291      | -            | -                | -                | 1 (0.291) |     0.56 | biguzera, kauez, lux, n1ssim, nqz |
|            4 |     3686 | 2024-03-04 | ODDIK             | W   | 0.206      | -            | -                | -                | -         |     0.60 | biguzera, kauez, lux, n1ssim, nqz |
|            3 |     3703 | 2024-03-03 | Imperial          | L   | 0.200      | -            | -                | -                | -         |    -4.24 | biguzera, kauez, lux, n1ssim, nqz |
|            2 |     3735 | 2024-03-02 | RED Canids        | W   | 0.192      | -            | -                | -                | -         |     0.81 | biguzera, kauez, lux, n1ssim, nqz |
|            1 |     3748 | 2024-03-01 | Legacy            | W   | 0.187      | -            | -                | -                | -         |     0.52 | biguzera, kauez, lux, n1ssim, nqz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($100,440.89)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.31) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.901 | $1,500.00      | $1,351.89       |
| 2024-06-16 |      0.900 | $10,000.00     | $9,002.93       |
| 2024-06-10 |      0.861 | $10,000.00     | $8,610.55       |
| 2024-06-09 |      0.854 | $3,000.00      | $2,561.81       |
| 2024-05-12 |      0.667 | $25,000.00     | $16,679.88      |
| 2024-04-20 |      0.521 | $100,000.00    | $52,067.77      |
| 2024-04-15 |      0.487 | $5,000.00      | $2,435.75       |
| 2024-03-31 |      0.387 | $20,000.00     | $7,730.31       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
