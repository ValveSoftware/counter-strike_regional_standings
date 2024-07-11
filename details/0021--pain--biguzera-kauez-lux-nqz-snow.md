### Roster Details<br />
Team Name: paiN<br />
Roster: biguzera, kauez, lux, nqz, snow<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [21](../standings_global.md)<br />
Regional Rank: [6]( ../standings_americas.md)<br />
Final Rank Value:  1443.4<br />
<br />
Final Rank Value (1443.4) = Starting Rank Value (1592.4) + Head To Head Adjustments (-148.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.757[<sup>1</sup>](#table2)
- Bounty Collected: 0.557[<sup>2</sup>](#table1)
- Opponent Network: 0.273[<sup>2</sup>](#table1)
- LAN Wins: 0.674[<sup>2</sup>](#table1)

The average of these factors is 0.565<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1592.4
- 400 + ( ( 0.565 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1592.4


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
|           92 |      148 | 2024-06-16 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |   -26.33 | biguzera, kauez, lux, nqz, snow   |
|           91 |      175 | 2024-06-15 | 9z                | L   | 1.000      | -            | -                | -                | -         |   -11.60 | biguzera, kauez, lux, nqz, snow   |
|           90 |      191 | 2024-06-15 | ODDIK             | W   | 1.000      | 0.450        | -                | 0.602 (0.271)    | -         |     1.59 | biguzera, kauez, lux, nqz, snow   |
|           89 |      208 | 2024-06-14 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -7.28 | biguzera, kauez, lux, nqz, snow   |
|           88 |      226 | 2024-06-14 | BESTIA            | W   | 1.000      | 0.548        | -                | 0.657 (0.360)    | 1 (1.000) |     2.80 | biguzera, kauez, lux, nqz, snow   |
|           87 |      251 | 2024-06-13 | KRÜ               | W   | 1.000      | -            | -                | -                | -         |     0.93 | biguzera, kauez, lux, nqz, snow   |
|           86 |      325 | 2024-06-10 | BESTIA            | W   | 0.995      | -            | -                | -                | -         |     2.88 | biguzera, kauez, lux, nqz, snow   |
|           85 |      335 | 2024-06-10 | Imperial          | W   | 0.993      | 0.371        | 0.390 (0.144)    | -                | -         |    14.63 | biguzera, kauez, lux, nqz, snow   |
|           84 |      366 | 2024-06-09 | Sharks            | W   | 0.987      | -            | -                | -                | -         |     3.29 | biguzera, kauez, lux, nqz, snow   |
|           83 |      422 | 2024-06-08 | Hype              | W   | 0.982      | -            | -                | -                | -         |     1.06 | biguzera, kauez, lux, nqz, snow   |
|           82 |      458 | 2024-06-08 | Dusty Roots       | W   | 0.979      | -            | -                | -                | -         |     0.64 | biguzera, kauez, lux, nqz, snow   |
|           81 |      480 | 2024-06-07 | Patins da Ferrari | W   | 0.975      | -            | -                | -                | -         |     0.78 | biguzera, kauez, lux, nqz, snow   |
|           80 |      530 | 2024-06-06 | Galorys           | W   | 0.969      | -            | -                | -                | -         |     1.00 | biguzera, kauez, lux, nqz, snow   |
|           79 |      539 | 2024-06-06 | Sharks            | L   | 0.968      | -            | -                | -                | -         |   -27.57 | biguzera, kauez, lux, nqz, snow   |
|           78 |      608 | 2024-06-05 | Fluxo             | W   | 0.962      | 0.450        | 0.166 (0.072)    | 0.615 (0.266)    | -         |     3.43 | biguzera, kauez, lux, nqz, snow   |
|           77 |      660 | 2024-06-04 | ODDIK             | W   | 0.955      | 0.450        | -                | 0.602 (0.259)    | -         |     1.44 | biguzera, kauez, lux, nqz, snow   |
|           76 |      987 | 2024-05-22 | MIBR              | L   | 0.867      | -            | -                | -                | -         |   -10.08 | biguzera, kauez, lux, nqz, snow   |
|           75 |      990 | 2024-05-22 | MIBR              | L   | 0.867      | -            | -                | -                | -         |   -10.84 | biguzera, kauez, lux, nqz, snow   |
|           74 |     1096 | 2024-05-19 | AMKAL             | L   | 0.846      | -            | -                | -                | -         |   -21.72 | biguzera, kauez, lux, nqz, snow   |
|           73 |     1106 | 2024-05-19 | OG                | W   | 0.845      | 0.769        | 0.215 (0.139)    | -                | -         |     3.99 | biguzera, kauez, lux, nqz, snow   |
|           72 |     1120 | 2024-05-18 | AMKAL             | L   | 0.840      | -            | -                | -                | -         |   -22.34 | biguzera, kauez, lux, nqz, snow   |
|           71 |     1343 | 2024-05-12 | 9z                | W   | 0.801      | 0.435        | 0.586 (0.204)    | 0.749 (0.261)    | -         |    17.38 | biguzera, kauez, lux, nqz, snow   |
|           70 |     1375 | 2024-05-11 | BESTIA            | W   | 0.794      | -            | -                | -                | -         |     1.02 | biguzera, kauez, lux, nqz, snow   |
|           69 |     1404 | 2024-05-10 | RED Canids        | W   | 0.786      | -            | -                | -                | -         |     3.07 | biguzera, kauez, lux, nqz, snow   |
|           68 |     1414 | 2024-05-09 | Fluxo             | L   | 0.782      | -            | -                | -                | -         |   -22.46 | biguzera, kauez, lux, nqz, snow   |
|           67 |     1420 | 2024-05-09 | Fluxo             | W   | 0.782      | -            | -                | -                | -         |     2.02 | biguzera, kauez, lux, nqz, snow   |
|           66 |     1439 | 2024-05-08 | RED Canids        | W   | 0.775      | -            | -                | -                | -         |     2.81 | biguzera, kauez, lux, nqz, snow   |
|           65 |     1441 | 2024-05-08 | RED Canids        | L   | 0.775      | -            | -                | -                | -         |   -21.94 | biguzera, kauez, lux, nqz, snow   |
|           64 |     1445 | 2024-05-08 | Galorys           | W   | 0.774      | -            | -                | -                | -         |     0.49 | biguzera, kauez, lux, nqz, snow   |
|           63 |     1447 | 2024-05-08 | Galorys           | W   | 0.773      | -            | -                | -                | -         |     0.50 | biguzera, kauez, lux, nqz, snow   |
|           62 |     1460 | 2024-05-07 | W7M               | W   | 0.768      | -            | -                | -                | -         |     0.36 | biguzera, kauez, lux, nqz, snow   |
|           61 |     1480 | 2024-05-06 | W7M               | W   | 0.760      | -            | -                | -                | -         |     0.36 | biguzera, kauez, lux, nqz, snow   |
|           60 |     1481 | 2024-05-06 | W7M               | W   | 0.760      | -            | -                | -                | -         |     0.36 | biguzera, kauez, lux, nqz, snow   |
|           59 |     1493 | 2024-05-05 | KRÜ               | W   | 0.754      | -            | -                | -                | -         |     0.48 | biguzera, kauez, lux, nqz, snow   |
|           58 |     1717 | 2024-04-25 | Solid             | W   | 0.688      | -            | -                | -                | -         |     0.50 | biguzera, kauez, lux, nqz, nyezin |
|           57 |     1719 | 2024-04-25 | Solid             | W   | 0.688      | -            | -                | -                | -         |     0.50 | biguzera, kauez, lux, nqz, nyezin |
|           56 |     1738 | 2024-04-24 | ODDIK             | W   | 0.682      | -            | -                | -                | -         |     0.72 | biguzera, kauez, lux, nqz, nyezin |
|           55 |     1739 | 2024-04-24 | ODDIK             | L   | 0.681      | -            | -                | -                | -         |   -20.84 | biguzera, kauez, lux, nqz, nyezin |
|           54 |     1811 | 2024-04-20 | Imperial          | W   | 0.655      | 0.589        | 0.390 (0.150)    | 0.646 (0.249)    | 1 (0.655) |     8.34 | biguzera, kauez, lux, nqz, nyezin |
|           53 |     1820 | 2024-04-20 | MIBR              | W   | 0.654      | 0.589        | 0.270 (0.104)    | 0.648 (0.249)    | 1 (0.654) |    11.83 | biguzera, kauez, lux, nqz, nyezin |
|           52 |     1842 | 2024-04-20 | Imperial          | L   | 0.650      | -            | -                | -                | -         |   -12.18 | biguzera, kauez, lux, nqz, nyezin |
|           51 |     1843 | 2024-04-19 | MIBR              | L   | 0.649      | -            | -                | -                | -         |    -9.25 | biguzera, kauez, lux, nqz, nyezin |
|           50 |     1856 | 2024-04-19 | Imperial          | W   | 0.648      | -            | -                | -                | -         |     8.10 | biguzera, kauez, lux, nqz, nyezin |
|           49 |     1872 | 2024-04-19 | MIBR              | W   | 0.646      | 0.589        | 0.270 (0.103)    | 0.648 (0.246)    | 1 (0.646) |    11.35 | biguzera, kauez, lux, nqz, nyezin |
|           48 |     1892 | 2024-04-18 | Fluxo             | W   | 0.643      | -            | -                | -                | -         |     1.55 | biguzera, kauez, lux, nqz, nyezin |
|           47 |     1895 | 2024-04-18 | MIBR              | L   | 0.642      | -            | -                | -                | -         |    -9.26 | biguzera, kauez, lux, nqz, nyezin |
|           46 |     1923 | 2024-04-18 | Monte             | W   | 0.639      | 0.589        | 0.188 (0.071)    | 0.668 (0.252)    | 1 (0.639) |     2.97 | biguzera, kauez, lux, nqz, nyezin |
|           45 |     2026 | 2024-04-14 | Imperial          | L   | 0.614      | -            | -                | -                | -         |   -11.88 | biguzera, kauez, lux, nqz, nyezin |
|           44 |     2037 | 2024-04-13 | ODDIK             | W   | 0.608      | -            | -                | -                | -         |     0.51 | biguzera, kauez, lux, nqz, nyezin |
|           43 |     2069 | 2024-04-11 | MIBR              | L   | 0.595      | -            | -                | -                | -         |    -9.66 | biguzera, kauez, lux, nqz, nyezin |
|           42 |     2076 | 2024-04-11 | Sharks            | W   | 0.594      | -            | -                | -                | -         |     0.69 | biguzera, kauez, lux, nqz, nyezin |
|           41 |     2082 | 2024-04-11 | Imperial          | W   | 0.593      | -            | -                | -                | -         |     6.99 | biguzera, kauez, lux, nqz, nyezin |
|           40 |     2117 | 2024-04-10 | RED Canids        | W   | 0.588      | -            | -                | -                | -         |     1.68 | biguzera, kauez, lux, nqz, nyezin |
|           39 |     2160 | 2024-04-09 | Case              | W   | 0.582      | -            | -                | -                | -         |     0.35 | biguzera, kauez, lux, nqz, nyezin |
|           38 |     2166 | 2024-04-09 | Case              | W   | 0.581      | -            | -                | -                | -         |     0.35 | biguzera, kauez, lux, nqz, nyezin |
|           37 |     2185 | 2024-04-09 | Imperial          | L   | 0.580      | -            | -                | -                | -         |   -11.14 | biguzera, kauez, lux, nqz, nyezin |
|           36 |     2207 | 2024-04-08 | Sharks            | W   | 0.574      | -            | -                | -                | -         |     0.22 | biguzera, kauez, lux, nqz, nyezin |
|           35 |     2236 | 2024-04-07 | MIBR              | L   | 0.569      | -            | -                | -                | -         |   -10.04 | biguzera, kauez, lux, nqz, nyezin |
|           34 |     2240 | 2024-04-07 | Galorys           | W   | 0.568      | -            | -                | -                | -         |     0.32 | biguzera, kauez, lux, nqz, nyezin |
|           33 |     2277 | 2024-04-05 | Sharks            | W   | 0.553      | -            | -                | -                | -         |     0.17 | biguzera, kauez, lux, nqz, nyezin |
|           32 |     2295 | 2024-04-04 | Sharks            | W   | 0.548      | -            | -                | -                | -         |     0.17 | biguzera, kauez, lux, nqz, nyezin |
|           31 |     2303 | 2024-04-04 | Sharks            | W   | 0.548      | -            | -                | -                | -         |     0.17 | biguzera, kauez, lux, nqz, nyezin |
|           30 |     2529 | 2024-03-24 | Natus Vincere     | L   | 0.474      | -            | -                | -                | -         |    -2.34 | biguzera, kauez, lux, n1ssim, nqz |
|           29 |     2540 | 2024-03-23 | HEROIC            | W   | 0.467      | 1.000        | 0.338 (0.158)    | -                | 1 (0.467) |    10.66 | biguzera, kauez, lux, n1ssim, nqz |
|           28 |     2555 | 2024-03-22 | The MongolZ       | W   | 0.460      | 1.000        | 1.000 (0.460)    | 0.692 (0.318)    | 1 (0.460) |    12.79 | biguzera, kauez, lux, n1ssim, nqz |
|           27 |     2575 | 2024-03-21 | Virtus.pro        | L   | 0.454      | -            | -                | -                | -         |    -3.90 | biguzera, kauez, lux, n1ssim, nqz |
|           26 |     2583 | 2024-03-21 | Complexity        | L   | 0.452      | -            | -                | -                | -         |    -3.33 | biguzera, kauez, lux, n1ssim, nqz |
|           25 |     2620 | 2024-03-19 | SAW               | W   | 0.440      | -            | -                | -                | 1 (0.440) |     2.33 | biguzera, kauez, lux, n1ssim, nqz |
|           24 |     2635 | 2024-03-18 | ENCE              | W   | 0.432      | -            | -                | -                | 1 (0.432) |     5.19 | biguzera, kauez, lux, n1ssim, nqz |
|           23 |     2654 | 2024-03-17 | Eternal Fire      | L   | 0.427      | -            | -                | -                | -         |    -3.68 | biguzera, kauez, lux, n1ssim, nqz |
|           22 |     2663 | 2024-03-17 | Apeks             | W   | 0.425      | -            | -                | -                | 1 (0.425) |     0.74 | biguzera, kauez, lux, n1ssim, nqz |
|           21 |     2992 | 2024-03-04 | ODDIK             | W   | 0.340      | -            | -                | -                | -         |     0.36 | biguzera, kauez, lux, n1ssim, nqz |
|           20 |     3009 | 2024-03-03 | Imperial          | L   | 0.334      | -            | -                | -                | -         |    -6.51 | biguzera, kauez, lux, n1ssim, nqz |
|           19 |     3041 | 2024-03-02 | RED Canids        | W   | 0.326      | -            | -                | -                | -         |     0.93 | biguzera, kauez, lux, n1ssim, nqz |
|           18 |     3054 | 2024-03-01 | Legacy            | W   | 0.321      | -            | -                | -                | -         |     0.58 | biguzera, kauez, lux, n1ssim, nqz |
|           17 |     3643 | 2024-02-01 | W7M               | L   | 0.129      | -            | -                | -                | -         |    -4.01 | biguzera, kauez, lux, n1ssim, nqz |
|           16 |     3647 | 2024-02-01 | MIBR              | L   | 0.128      | -            | -                | -                | -         |    -2.02 | biguzera, kauez, lux, n1ssim, nqz |
|           15 |     3648 | 2024-02-01 | RED Canids        | W   | 0.128      | -            | -                | -                | -         |     0.35 | biguzera, kauez, lux, n1ssim, nqz |
|           14 |     3778 | 2024-01-24 | Sharks            | L   | 0.075      | -            | -                | -                | -         |    -2.29 | biguzera, kauez, lux, n1ssim, nqz |
|           13 |     3798 | 2024-01-23 | W7M               | W   | 0.068      | -            | -                | -                | -         |     0.03 | biguzera, kauez, lux, n1ssim, nqz |
|           12 |     3824 | 2024-01-22 | inSanitY          | W   | 0.062      | -            | -                | -                | -         |     0.00 | biguzera, kauez, lux, n1ssim, nqz |
|           11 |     3848 | 2024-01-21 | Case              | W   | 0.056      | -            | -                | -                | -         |     0.00 | biguzera, kauez, lux, n1ssim, nqz |
|           10 |     3853 | 2024-01-21 | Imperial          | L   | 0.055      | -            | -                | -                | -         |    -1.08 | biguzera, kauez, lux, n1ssim, nqz |
|            9 |     3895 | 2024-01-20 | Sharks            | W   | 0.047      | -            | -                | -                | -         |     0.05 | biguzera, kauez, lux, n1ssim, nqz |
|            8 |     3934 | 2024-01-19 | Legacy            | L   | 0.042      | -            | -                | -                | -         |    -1.25 | biguzera, kauez, lux, n1ssim, nqz |
|            7 |     3949 | 2024-01-19 | W7M               | W   | 0.041      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, n1ssim, nqz |
|            6 |     4105 | 2024-01-16 | Case              | L   | 0.021      | -            | -                | -                | -         |    -0.66 | biguzera, kauez, lux, n1ssim, nqz |
|            5 |     4148 | 2024-01-15 | Dusty Roots       | W   | 0.015      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, n1ssim, nqz |
|            4 |     4172 | 2024-01-14 | Sharks            | L   | 0.009      | -            | -                | -                | -         |    -0.27 | biguzera, kauez, lux, n1ssim, nqz |
|            3 |     4177 | 2024-01-14 | RED Canids        | W   | 0.008      | -            | -                | -                | -         |     0.02 | biguzera, kauez, lux, n1ssim, nqz |
|            2 |     4183 | 2024-01-14 | ODDIK             | W   | 0.008      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, n1ssim, nqz |
|            1 |     4200 | 2024-01-13 | LFO               | W   | 0.002      | -            | -                | -                | -         |     0.00 | biguzera, kauez, lux, n1ssim, nqz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($123,448.13)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.48) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-06-16 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-10 |      0.995 | $10,000.00     | $9,951.78       |
| 2024-06-09 |      0.988 | $3,000.00      | $2,964.18       |
| 2024-05-12 |      0.801 | $25,000.00     | $20,032.95      |
| 2024-04-20 |      0.655 | $100,000.00    | $65,480.08      |
| 2024-04-15 |      0.621 | $5,000.00      | $3,106.37       |
| 2024-03-31 |      0.521 | $20,000.00     | $10,412.77      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
