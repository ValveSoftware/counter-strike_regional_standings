### Roster Details<br />
Team Name: paiN<br />
Roster: biguzera, kauez, lux, nqz, snow<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [21](../standings_global.md)<br />
Regional Rank: [6]( ../standings_americas.md)<br />
Final Rank Value:  1453.2<br />
<br />
Final Rank Value (1453.2) = Starting Rank Value (1586.5) + Head To Head Adjustments (-133.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.756[<sup>1</sup>](#table2)
- Bounty Collected: 0.547[<sup>2</sup>](#table1)
- Opponent Network: 0.274[<sup>2</sup>](#table1)
- LAN Wins: 0.632[<sup>2</sup>](#table1)

The average of these factors is 0.553<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1586.5
- 400 + ( ( 0.553 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1586.5


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
|           91 |        3 | 2024-07-17 | W7M               | W   | 1.000      | -            | -                | -                | -         |     0.84 | biguzera, kauez, lux, nqz, snow   |
|           90 |       36 | 2024-07-16 | Galorys           | W   | 1.000      | 0.450        | -                | 0.535 (0.241)    | -         |     0.87 | biguzera, kauez, lux, nqz, snow   |
|           89 |       41 | 2024-07-16 | Galorys           | W   | 1.000      | 0.450        | -                | 0.535 (0.241)    | -         |     0.88 | biguzera, kauez, lux, nqz, snow   |
|           88 |       81 | 2024-07-15 | Solid             | W   | 1.000      | 0.450        | -                | 0.622 (0.280)    | -         |     1.17 | biguzera, kauez, lux, nqz, snow   |
|           87 |       84 | 2024-07-15 | Solid             | W   | 1.000      | 0.450        | -                | 0.622 (0.280)    | -         |     1.19 | biguzera, kauez, lux, nqz, snow   |
|           86 |      312 | 2024-06-16 | Fluxo             | L   | 0.995      | -            | -                | -                | -         |   -25.93 | biguzera, kauez, lux, nqz, snow   |
|           85 |      339 | 2024-06-15 | 9z                | L   | 0.988      | -            | -                | -                | -         |   -10.94 | biguzera, kauez, lux, nqz, snow   |
|           84 |      355 | 2024-06-15 | ODDIK             | W   | 0.987      | 0.450        | -                | 0.678 (0.301)    | -         |     1.89 | biguzera, kauez, lux, nqz, snow   |
|           83 |      372 | 2024-06-14 | Ninjas in Pyjamas | L   | 0.983      | -            | -                | -                | -         |    -6.92 | biguzera, kauez, lux, nqz, snow   |
|           82 |      390 | 2024-06-14 | BESTIA            | W   | 0.980      | 0.548        | -                | 0.645 (0.346)    | 1 (0.980) |     2.95 | biguzera, kauez, lux, nqz, snow   |
|           81 |      415 | 2024-06-13 | KRÜ               | W   | 0.975      | -            | -                | -                | -         |     1.10 | biguzera, kauez, lux, nqz, snow   |
|           80 |      489 | 2024-06-10 | BESTIA            | W   | 0.956      | -            | -                | -                | -         |     2.98 | biguzera, kauez, lux, nqz, snow   |
|           79 |      499 | 2024-06-10 | Imperial          | W   | 0.954      | 0.371        | 0.386 (0.137)    | -                | -         |    13.96 | biguzera, kauez, lux, nqz, snow   |
|           78 |      530 | 2024-06-09 | Sharks            | W   | 0.948      | -            | -                | -                | -         |     3.30 | biguzera, kauez, lux, nqz, snow   |
|           77 |      586 | 2024-06-08 | Hype              | W   | 0.942      | -            | -                | -                | -         |     1.16 | biguzera, kauez, lux, nqz, snow   |
|           76 |      622 | 2024-06-08 | Dusty Roots       | W   | 0.940      | -            | -                | -                | -         |     0.70 | biguzera, kauez, lux, nqz, snow   |
|           75 |      644 | 2024-06-07 | Patins da Ferrari | W   | 0.935      | -            | -                | -                | -         |     0.79 | biguzera, kauez, lux, nqz, snow   |
|           74 |      694 | 2024-06-06 | Galorys           | W   | 0.930      | -            | -                | -                | -         |     1.10 | biguzera, kauez, lux, nqz, snow   |
|           73 |      703 | 2024-06-06 | Sharks            | L   | 0.929      | -            | -                | -                | -         |   -26.31 | biguzera, kauez, lux, nqz, snow   |
|           72 |      772 | 2024-06-05 | Fluxo             | W   | 0.922      | 0.450        | 0.169 (0.070)    | 0.630 (0.261)    | -         |     3.51 | biguzera, kauez, lux, nqz, snow   |
|           71 |      824 | 2024-06-04 | ODDIK             | W   | 0.915      | 0.450        | -                | 0.678 (0.279)    | -         |     1.71 | biguzera, kauez, lux, nqz, snow   |
|           70 |     1151 | 2024-05-22 | MIBR              | L   | 0.827      | -            | -                | -                | -         |    -9.95 | biguzera, kauez, lux, nqz, snow   |
|           69 |     1154 | 2024-05-22 | MIBR              | L   | 0.827      | -            | -                | -                | -         |   -10.67 | biguzera, kauez, lux, nqz, snow   |
|           68 |     1260 | 2024-05-19 | AMKAL             | L   | 0.807      | -            | -                | -                | -         |   -21.27 | biguzera, kauez, lux, nqz, snow   |
|           67 |     1270 | 2024-05-19 | OG                | W   | 0.806      | 0.769        | 0.210 (0.130)    | -                | -         |     3.40 | biguzera, kauez, lux, nqz, snow   |
|           66 |     1284 | 2024-05-18 | AMKAL             | L   | 0.801      | -            | -                | -                | -         |   -21.77 | biguzera, kauez, lux, nqz, snow   |
|           65 |     1507 | 2024-05-12 | 9z                | W   | 0.762      | 0.435        | 0.606 (0.201)    | 0.728 (0.241)    | -         |    17.04 | biguzera, kauez, lux, nqz, snow   |
|           64 |     1539 | 2024-05-11 | BESTIA            | W   | 0.754      | -            | -                | -                | -         |     1.08 | biguzera, kauez, lux, nqz, snow   |
|           63 |     1568 | 2024-05-10 | RED Canids        | W   | 0.747      | -            | -                | -                | -         |     3.14 | biguzera, kauez, lux, nqz, snow   |
|           62 |     1578 | 2024-05-09 | Fluxo             | L   | 0.743      | -            | -                | -                | -         |   -21.19 | biguzera, kauez, lux, nqz, snow   |
|           61 |     1584 | 2024-05-09 | Fluxo             | W   | 0.742      | 0.450        | 0.169 (0.056)    | -                | -         |     2.07 | biguzera, kauez, lux, nqz, snow   |
|           60 |     1603 | 2024-05-08 | RED Canids        | W   | 0.736      | -            | -                | -                | -         |     2.89 | biguzera, kauez, lux, nqz, snow   |
|           59 |     1605 | 2024-05-08 | RED Canids        | L   | 0.735      | -            | -                | -                | -         |   -20.60 | biguzera, kauez, lux, nqz, snow   |
|           58 |     1609 | 2024-05-08 | Galorys           | W   | 0.734      | -            | -                | -                | -         |     0.54 | biguzera, kauez, lux, nqz, snow   |
|           57 |     1611 | 2024-05-08 | Galorys           | W   | 0.734      | -            | -                | -                | -         |     0.54 | biguzera, kauez, lux, nqz, snow   |
|           56 |     1624 | 2024-05-07 | W7M               | W   | 0.728      | -            | -                | -                | -         |     0.42 | biguzera, kauez, lux, nqz, snow   |
|           55 |     1644 | 2024-05-06 | W7M               | W   | 0.721      | -            | -                | -                | -         |     0.42 | biguzera, kauez, lux, nqz, snow   |
|           54 |     1645 | 2024-05-06 | W7M               | W   | 0.721      | -            | -                | -                | -         |     0.42 | biguzera, kauez, lux, nqz, snow   |
|           53 |     1657 | 2024-05-05 | KRÜ               | W   | 0.715      | -            | -                | -                | -         |     0.59 | biguzera, kauez, lux, nqz, snow   |
|           52 |     1881 | 2024-04-25 | Solid             | W   | 0.649      | -            | -                | -                | -         |     0.55 | biguzera, kauez, lux, nqz, nyezin |
|           51 |     1883 | 2024-04-25 | Solid             | W   | 0.648      | -            | -                | -                | -         |     0.55 | biguzera, kauez, lux, nqz, nyezin |
|           50 |     1902 | 2024-04-24 | ODDIK             | W   | 0.642      | -            | -                | -                | -         |     0.91 | biguzera, kauez, lux, nqz, nyezin |
|           49 |     1903 | 2024-04-24 | ODDIK             | L   | 0.642      | -            | -                | -                | -         |   -19.42 | biguzera, kauez, lux, nqz, nyezin |
|           48 |     1975 | 2024-04-20 | Imperial          | W   | 0.615      | 0.589        | 0.386 (0.140)    | -                | 1 (0.615) |     7.68 | biguzera, kauez, lux, nqz, nyezin |
|           47 |     1984 | 2024-04-20 | MIBR              | W   | 0.614      | 0.589        | 0.269 (0.097)    | -                | 1 (0.614) |    10.91 | biguzera, kauez, lux, nqz, nyezin |
|           46 |     2006 | 2024-04-20 | Imperial          | L   | 0.611      | -            | -                | -                | -         |   -11.63 | biguzera, kauez, lux, nqz, nyezin |
|           45 |     2007 | 2024-04-19 | MIBR              | L   | 0.610      | -            | -                | -                | -         |    -8.88 | biguzera, kauez, lux, nqz, nyezin |
|           44 |     2020 | 2024-04-19 | Imperial          | W   | 0.608      | -            | -                | -                | -         |     7.43 | biguzera, kauez, lux, nqz, nyezin |
|           43 |     2036 | 2024-04-19 | MIBR              | W   | 0.607      | 0.589        | 0.269 (0.096)    | -                | 1 (0.607) |    10.45 | biguzera, kauez, lux, nqz, nyezin |
|           42 |     2056 | 2024-04-18 | Fluxo             | W   | 0.603      | -            | -                | -                | -         |     1.58 | biguzera, kauez, lux, nqz, nyezin |
|           41 |     2059 | 2024-04-18 | MIBR              | L   | 0.602      | -            | -                | -                | -         |    -8.91 | biguzera, kauez, lux, nqz, nyezin |
|           40 |     2087 | 2024-04-18 | Monte             | W   | 0.600      | -            | -                | -                | 1 (0.600) |     1.52 | biguzera, kauez, lux, nqz, nyezin |
|           39 |     2190 | 2024-04-14 | Imperial          | L   | 0.574      | -            | -                | -                | -         |   -11.34 | biguzera, kauez, lux, nqz, nyezin |
|           38 |     2201 | 2024-04-13 | ODDIK             | W   | 0.568      | -            | -                | -                | -         |     0.65 | biguzera, kauez, lux, nqz, nyezin |
|           37 |     2233 | 2024-04-11 | MIBR              | L   | 0.556      | -            | -                | -                | -         |    -9.21 | biguzera, kauez, lux, nqz, nyezin |
|           36 |     2240 | 2024-04-11 | Sharks            | W   | 0.555      | -            | -                | -                | -         |     0.68 | biguzera, kauez, lux, nqz, nyezin |
|           35 |     2246 | 2024-04-11 | Imperial          | W   | 0.554      | -            | -                | -                | -         |     6.31 | biguzera, kauez, lux, nqz, nyezin |
|           34 |     2281 | 2024-04-10 | RED Canids        | W   | 0.548      | -            | -                | -                | -         |     1.72 | biguzera, kauez, lux, nqz, nyezin |
|           33 |     2324 | 2024-04-09 | Case              | W   | 0.542      | -            | -                | -                | -         |     0.45 | biguzera, kauez, lux, nqz, nyezin |
|           32 |     2330 | 2024-04-09 | Case              | W   | 0.542      | -            | -                | -                | -         |     0.45 | biguzera, kauez, lux, nqz, nyezin |
|           31 |     2349 | 2024-04-09 | Imperial          | L   | 0.540      | -            | -                | -                | -         |   -10.64 | biguzera, kauez, lux, nqz, nyezin |
|           30 |     2371 | 2024-04-08 | Sharks            | W   | 0.534      | -            | -                | -                | -         |     0.22 | biguzera, kauez, lux, nqz, nyezin |
|           29 |     2400 | 2024-04-07 | MIBR              | L   | 0.530      | -            | -                | -                | -         |    -9.48 | biguzera, kauez, lux, nqz, nyezin |
|           28 |     2404 | 2024-04-07 | Galorys           | W   | 0.528      | -            | -                | -                | -         |     0.34 | biguzera, kauez, lux, nqz, nyezin |
|           27 |     2441 | 2024-04-05 | Sharks            | W   | 0.514      | -            | -                | -                | -         |     0.17 | biguzera, kauez, lux, nqz, nyezin |
|           26 |     2459 | 2024-04-04 | Sharks            | W   | 0.509      | -            | -                | -                | -         |     0.17 | biguzera, kauez, lux, nqz, nyezin |
|           25 |     2467 | 2024-04-04 | Sharks            | W   | 0.508      | -            | -                | -                | -         |     0.17 | biguzera, kauez, lux, nqz, nyezin |
|           24 |     2693 | 2024-03-24 | Natus Vincere     | L   | 0.434      | -            | -                | -                | -         |    -2.27 | biguzera, kauez, lux, n1ssim, nqz |
|           23 |     2704 | 2024-03-23 | HEROIC            | W   | 0.428      | 1.000        | 0.333 (0.143)    | -                | 1 (0.428) |     9.56 | biguzera, kauez, lux, n1ssim, nqz |
|           22 |     2719 | 2024-03-22 | The MongolZ       | W   | 0.420      | 1.000        | 1.000 (0.420)    | 0.653 (0.275)    | 1 (0.420) |    11.69 | biguzera, kauez, lux, n1ssim, nqz |
|           21 |     2739 | 2024-03-21 | Virtus.pro        | L   | 0.414      | -            | -                | -                | -         |    -3.74 | biguzera, kauez, lux, n1ssim, nqz |
|           20 |     2747 | 2024-03-21 | Complexity        | L   | 0.413      | -            | -                | -                | -         |    -2.88 | biguzera, kauez, lux, n1ssim, nqz |
|           19 |     2784 | 2024-03-19 | SAW               | W   | 0.400      | -            | -                | -                | 1 (0.400) |     2.02 | biguzera, kauez, lux, n1ssim, nqz |
|           18 |     2799 | 2024-03-18 | ENCE              | W   | 0.392      | -            | -                | -                | 1 (0.392) |     4.12 | biguzera, kauez, lux, n1ssim, nqz |
|           17 |     2818 | 2024-03-17 | Eternal Fire      | L   | 0.387      | -            | -                | -                | -         |    -3.64 | biguzera, kauez, lux, n1ssim, nqz |
|           16 |     2827 | 2024-03-17 | Apeks             | W   | 0.386      | -            | -                | -                | 1 (0.386) |     0.60 | biguzera, kauez, lux, n1ssim, nqz |
|           15 |     3156 | 2024-03-04 | ODDIK             | W   | 0.300      | -            | -                | -                | -         |     0.46 | biguzera, kauez, lux, n1ssim, nqz |
|           14 |     3173 | 2024-03-03 | Imperial          | L   | 0.294      | -            | -                | -                | -         |    -5.90 | biguzera, kauez, lux, n1ssim, nqz |
|           13 |     3205 | 2024-03-02 | RED Canids        | W   | 0.287      | -            | -                | -                | -         |     0.86 | biguzera, kauez, lux, n1ssim, nqz |
|           12 |     3218 | 2024-03-01 | Legacy            | W   | 0.281      | -            | -                | -                | -         |     0.58 | biguzera, kauez, lux, n1ssim, nqz |
|           11 |     3807 | 2024-02-01 | W7M               | L   | 0.089      | -            | -                | -                | -         |    -2.77 | biguzera, kauez, lux, n1ssim, nqz |
|           10 |     3811 | 2024-02-01 | MIBR              | L   | 0.089      | -            | -                | -                | -         |    -1.45 | biguzera, kauez, lux, n1ssim, nqz |
|            9 |     3812 | 2024-02-01 | RED Canids        | W   | 0.088      | -            | -                | -                | -         |     0.26 | biguzera, kauez, lux, n1ssim, nqz |
|            8 |     3942 | 2024-01-24 | Sharks            | L   | 0.036      | -            | -                | -                | -         |    -1.08 | biguzera, kauez, lux, n1ssim, nqz |
|            7 |     3962 | 2024-01-23 | W7M               | W   | 0.028      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, n1ssim, nqz |
|            6 |     3988 | 2024-01-22 | inSanitY          | W   | 0.022      | -            | -                | -                | -         |     0.00 | biguzera, kauez, lux, n1ssim, nqz |
|            5 |     4012 | 2024-01-21 | Case              | W   | 0.016      | -            | -                | -                | -         |     0.00 | biguzera, kauez, lux, n1ssim, nqz |
|            4 |     4017 | 2024-01-21 | Imperial          | L   | 0.015      | -            | -                | -                | -         |    -0.30 | biguzera, kauez, lux, n1ssim, nqz |
|            3 |     4059 | 2024-01-20 | Sharks            | W   | 0.008      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, n1ssim, nqz |
|            2 |     4098 | 2024-01-19 | Legacy            | L   | 0.002      | -            | -                | -                | -         |    -0.07 | biguzera, kauez, lux, n1ssim, nqz |
|            1 |     4113 | 2024-01-19 | W7M               | W   | 0.001      | -            | -                | -                | -         |     0.00 | biguzera, kauez, lux, n1ssim, nqz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($116,933.38)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.48) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.996 | $1,500.00      | $1,493.66       |
| 2024-06-16 |      0.995 | $10,000.00     | $9,948.06       |
| 2024-06-10 |      0.956 | $10,000.00     | $9,555.67       |
| 2024-06-09 |      0.948 | $3,000.00      | $2,845.35       |
| 2024-05-12 |      0.762 | $25,000.00     | $19,042.70      |
| 2024-04-20 |      0.615 | $100,000.00    | $61,519.05      |
| 2024-04-15 |      0.582 | $5,000.00      | $2,908.32       |
| 2024-03-31 |      0.481 | $20,000.00     | $9,620.56       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
