### Roster Details<br />
Team Name: paiN<br />
Roster: biguzera, kauez, lux, nqz, snow<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [21](../standings_global.md)<br />
Regional Rank: [6]( ../standings_americas.md)<br />
Final Rank Value:  1438.2<br />
<br />
Final Rank Value (1438.2) = Starting Rank Value (1635.8) + Head To Head Adjustments (-197.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.764[<sup>1</sup>](#table2)
- Bounty Collected: 0.589[<sup>2</sup>](#table1)
- Opponent Network: 0.327[<sup>2</sup>](#table1)
- LAN Wins: 0.753[<sup>2</sup>](#table1)

The average of these factors is 0.608<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1635.8
- 400 + ( ( 0.608 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1635.8


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
|           92 |       12 | 2024-06-16 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |   -26.20 | biguzera, kauez, lux, nqz, snow   |
|           91 |       39 | 2024-06-15 | 9z                | L   | 1.000      | -            | -                | -                | -         |   -13.93 | biguzera, kauez, lux, nqz, snow   |
|           90 |       55 | 2024-06-15 | ODDIK             | W   | 1.000      | -            | -                | -                | -         |     1.53 | biguzera, kauez, lux, nqz, snow   |
|           89 |       72 | 2024-06-14 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -9.05 | biguzera, kauez, lux, nqz, snow   |
|           88 |       90 | 2024-06-14 | BESTIA            | W   | 1.000      | 0.548        | -                | 0.594 (0.326)    | 1 (1.000) |     2.87 | biguzera, kauez, lux, nqz, snow   |
|           87 |      115 | 2024-06-13 | KRÜ               | W   | 1.000      | -            | -                | -                | -         |     0.75 | biguzera, kauez, lux, nqz, snow   |
|           86 |      189 | 2024-06-10 | BESTIA            | W   | 1.000      | -            | -                | -                | -         |     2.96 | biguzera, kauez, lux, nqz, snow   |
|           85 |      199 | 2024-06-10 | Imperial          | W   | 1.000      | 0.384        | 0.406 (0.156)    | -                | -         |    14.83 | biguzera, kauez, lux, nqz, snow   |
|           84 |      230 | 2024-06-09 | Sharks            | W   | 1.000      | -            | -                | -                | -         |     3.42 | biguzera, kauez, lux, nqz, snow   |
|           83 |      286 | 2024-06-08 | Hype              | W   | 1.000      | -            | -                | -                | -         |     0.98 | biguzera, kauez, lux, nqz, snow   |
|           82 |      322 | 2024-06-08 | Dusty Roots       | W   | 1.000      | -            | -                | -                | -         |     0.57 | biguzera, kauez, lux, nqz, snow   |
|           81 |      344 | 2024-06-07 | Corinthians       | W   | 1.000      | -            | -                | -                | -         |     0.42 | biguzera, kauez, lux, nqz, snow   |
|           80 |      394 | 2024-06-06 | Galorys           | W   | 1.000      | -            | -                | -                | -         |     0.96 | biguzera, kauez, lux, nqz, snow   |
|           79 |      403 | 2024-06-06 | Sharks            | L   | 1.000      | -            | -                | -                | -         |   -28.33 | biguzera, kauez, lux, nqz, snow   |
|           78 |      472 | 2024-06-05 | Fluxo             | W   | 1.000      | 0.450        | 0.159 (0.072)    | -                | -         |     3.67 | biguzera, kauez, lux, nqz, snow   |
|           77 |      524 | 2024-06-04 | ODDIK             | W   | 1.000      | -            | -                | -                | -         |     1.46 | biguzera, kauez, lux, nqz, snow   |
|           76 |      853 | 2024-05-22 | MIBR              | L   | 1.000      | -            | -                | -                | -         |   -11.26 | biguzera, kauez, lux, nqz, snow   |
|           75 |      856 | 2024-05-22 | MIBR              | L   | 1.000      | -            | -                | -                | -         |   -12.23 | biguzera, kauez, lux, nqz, snow   |
|           74 |      962 | 2024-05-19 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |   -24.18 | biguzera, kauez, lux, nqz, snow   |
|           73 |      972 | 2024-05-19 | OG                | W   | 1.000      | 0.769        | 0.235 (0.181)    | -                | -         |     5.67 | biguzera, kauez, lux, nqz, snow   |
|           72 |      986 | 2024-05-18 | AMKAL             | L   | 0.996      | -            | -                | -                | -         |   -25.26 | biguzera, kauez, lux, nqz, snow   |
|           71 |     1209 | 2024-05-12 | 9z                | W   | 0.957      | 0.435        | 0.525 (0.218)    | 0.749 (0.312)    | -         |    17.20 | biguzera, kauez, lux, nqz, snow   |
|           70 |     1241 | 2024-05-11 | BESTIA            | W   | 0.949      | -            | -                | -                | -         |     1.14 | biguzera, kauez, lux, nqz, snow   |
|           69 |     1270 | 2024-05-10 | RED Canids        | W   | 0.942      | 0.435        | -                | 0.693 (0.284)    | -         |     3.49 | biguzera, kauez, lux, nqz, snow   |
|           68 |     1280 | 2024-05-09 | Fluxo             | L   | 0.938      | -            | -                | -                | -         |   -26.85 | biguzera, kauez, lux, nqz, snow   |
|           67 |     1286 | 2024-05-09 | Fluxo             | W   | 0.938      | -            | -                | -                | -         |     2.41 | biguzera, kauez, lux, nqz, snow   |
|           66 |     1305 | 2024-05-08 | RED Canids        | W   | 0.931      | 0.450        | -                | 0.693 (0.290)    | -         |     3.14 | biguzera, kauez, lux, nqz, snow   |
|           65 |     1307 | 2024-05-08 | RED Canids        | L   | 0.931      | -            | -                | -                | -         |   -26.57 | biguzera, kauez, lux, nqz, snow   |
|           64 |     1311 | 2024-05-08 | Galorys           | W   | 0.929      | -            | -                | -                | -         |     0.52 | biguzera, kauez, lux, nqz, snow   |
|           63 |     1313 | 2024-05-08 | Galorys           | W   | 0.929      | -            | -                | -                | -         |     0.52 | biguzera, kauez, lux, nqz, snow   |
|           62 |     1326 | 2024-05-07 | W7M               | W   | 0.923      | -            | -                | -                | -         |     0.42 | biguzera, kauez, lux, nqz, snow   |
|           61 |     1346 | 2024-05-06 | W7M               | W   | 0.916      | -            | -                | -                | -         |     0.42 | biguzera, kauez, lux, nqz, snow   |
|           60 |     1347 | 2024-05-06 | W7M               | W   | 0.916      | -            | -                | -                | -         |     0.42 | biguzera, kauez, lux, nqz, snow   |
|           59 |     1359 | 2024-05-05 | KRÜ               | W   | 0.910      | -            | -                | -                | -         |     0.40 | biguzera, kauez, lux, nqz, snow   |
|           58 |     1583 | 2024-04-25 | Solid             | W   | 0.844      | -            | -                | -                | -         |     0.54 | biguzera, kauez, lux, nqz, nyezin |
|           57 |     1585 | 2024-04-25 | Solid             | W   | 0.844      | -            | -                | -                | -         |     0.55 | biguzera, kauez, lux, nqz, nyezin |
|           56 |     1604 | 2024-04-24 | ODDIK             | W   | 0.837      | -            | -                | -                | -         |     0.82 | biguzera, kauez, lux, nqz, nyezin |
|           55 |     1605 | 2024-04-24 | ODDIK             | L   | 0.837      | -            | -                | -                | -         |   -25.67 | biguzera, kauez, lux, nqz, nyezin |
|           54 |     1677 | 2024-04-20 | Imperial          | W   | 0.810      | 0.589        | 0.406 (0.194)    | 0.694 (0.331)    | 1 (0.810) |    10.65 | biguzera, kauez, lux, nqz, nyezin |
|           53 |     1686 | 2024-04-20 | MIBR              | W   | 0.809      | 0.589        | 0.281 (0.134)    | 0.688 (0.328)    | 1 (0.809) |    14.90 | biguzera, kauez, lux, nqz, nyezin |
|           52 |     1708 | 2024-04-20 | Imperial          | L   | 0.806      | -            | -                | -                | -         |   -14.59 | biguzera, kauez, lux, nqz, nyezin |
|           51 |     1709 | 2024-04-19 | MIBR              | L   | 0.805      | -            | -                | -                | -         |   -11.21 | biguzera, kauez, lux, nqz, nyezin |
|           50 |     1722 | 2024-04-19 | Imperial          | W   | 0.803      | -            | -                | -                | -         |    10.40 | biguzera, kauez, lux, nqz, nyezin |
|           49 |     1738 | 2024-04-19 | MIBR              | W   | 0.802      | 0.589        | 0.281 (0.133)    | 0.688 (0.325)    | 1 (0.802) |    14.35 | biguzera, kauez, lux, nqz, nyezin |
|           48 |     1758 | 2024-04-18 | Fluxo             | W   | 0.798      | -            | -                | -                | -         |     1.90 | biguzera, kauez, lux, nqz, nyezin |
|           47 |     1761 | 2024-04-18 | MIBR              | L   | 0.798      | -            | -                | -                | -         |   -11.18 | biguzera, kauez, lux, nqz, nyezin |
|           46 |     1789 | 2024-04-18 | Monte             | W   | 0.795      | 0.589        | 0.189 (0.089)    | 0.674 (0.315)    | 1 (0.795) |     3.74 | biguzera, kauez, lux, nqz, nyezin |
|           45 |     1892 | 2024-04-14 | Imperial          | L   | 0.769      | -            | -                | -                | -         |   -14.32 | biguzera, kauez, lux, nqz, nyezin |
|           44 |     1903 | 2024-04-13 | ODDIK             | W   | 0.763      | -            | -                | -                | -         |     0.57 | biguzera, kauez, lux, nqz, nyezin |
|           43 |     1935 | 2024-04-11 | MIBR              | L   | 0.751      | -            | -                | -                | -         |   -12.20 | biguzera, kauez, lux, nqz, nyezin |
|           42 |     1942 | 2024-04-11 | Sharks            | W   | 0.750      | -            | -                | -                | -         |     0.80 | biguzera, kauez, lux, nqz, nyezin |
|           41 |     1948 | 2024-04-11 | Imperial          | W   | 0.749      | -            | -                | -                | -         |     9.23 | biguzera, kauez, lux, nqz, nyezin |
|           40 |     1983 | 2024-04-10 | RED Canids        | W   | 0.743      | -            | -                | -                | -         |     1.88 | biguzera, kauez, lux, nqz, nyezin |
|           39 |     2026 | 2024-04-09 | Case              | W   | 0.737      | -            | -                | -                | -         |     0.38 | biguzera, kauez, lux, nqz, nyezin |
|           38 |     2032 | 2024-04-09 | Case              | W   | 0.737      | -            | -                | -                | -         |     0.38 | biguzera, kauez, lux, nqz, nyezin |
|           37 |     2051 | 2024-04-09 | Imperial          | L   | 0.735      | -            | -                | -                | -         |   -13.43 | biguzera, kauez, lux, nqz, nyezin |
|           36 |     2073 | 2024-04-08 | Sharks            | W   | 0.730      | -            | -                | -                | -         |     0.25 | biguzera, kauez, lux, nqz, nyezin |
|           35 |     2102 | 2024-04-07 | MIBR              | L   | 0.725      | -            | -                | -                | -         |   -13.07 | biguzera, kauez, lux, nqz, nyezin |
|           34 |     2106 | 2024-04-07 | Galorys           | W   | 0.723      | -            | -                | -                | -         |     0.35 | biguzera, kauez, lux, nqz, nyezin |
|           33 |     2143 | 2024-04-05 | Sharks            | W   | 0.709      | -            | -                | -                | -         |     0.18 | biguzera, kauez, lux, nqz, nyezin |
|           32 |     2161 | 2024-04-04 | Sharks            | W   | 0.704      | -            | -                | -                | -         |     0.18 | biguzera, kauez, lux, nqz, nyezin |
|           31 |     2169 | 2024-04-04 | Sharks            | W   | 0.704      | -            | -                | -                | -         |     0.18 | biguzera, kauez, lux, nqz, nyezin |
|           30 |     2396 | 2024-03-24 | Natus Vincere     | L   | 0.629      | -            | -                | -                | -         |    -3.10 | biguzera, kauez, lux, n1ssim, nqz |
|           29 |     2407 | 2024-03-23 | HEROIC            | W   | 0.623      | 1.000        | 0.354 (0.221)    | 0.545 (0.340)    | 1 (0.623) |    13.91 | biguzera, kauez, lux, n1ssim, nqz |
|           28 |     2422 | 2024-03-22 | The MongolZ       | W   | 0.616      | 1.000        | 0.986 (0.607)    | 0.681 (0.419)    | 1 (0.616) |    16.21 | biguzera, kauez, lux, n1ssim, nqz |
|           27 |     2442 | 2024-03-21 | Virtus.pro        | L   | 0.609      | -            | -                | -                | -         |    -5.17 | biguzera, kauez, lux, n1ssim, nqz |
|           26 |     2450 | 2024-03-21 | Complexity        | L   | 0.608      | -            | -                | -                | -         |    -5.26 | biguzera, kauez, lux, n1ssim, nqz |
|           25 |     2487 | 2024-03-19 | SAW               | W   | 0.595      | -            | -                | -                | 1 (0.595) |     3.90 | biguzera, kauez, lux, n1ssim, nqz |
|           24 |     2502 | 2024-03-18 | ENCE              | W   | 0.587      | -            | -                | -                | 1 (0.587) |     7.76 | biguzera, kauez, lux, n1ssim, nqz |
|           23 |     2521 | 2024-03-17 | Eternal Fire      | L   | 0.582      | -            | -                | -                | -         |    -4.04 | biguzera, kauez, lux, n1ssim, nqz |
|           22 |     2530 | 2024-03-17 | Apeks             | W   | 0.581      | -            | -                | -                | 1 (0.581) |     1.30 | biguzera, kauez, lux, n1ssim, nqz |
|           21 |     2859 | 2024-03-04 | ODDIK             | W   | 0.495      | -            | -                | -                | -         |     0.52 | biguzera, kauez, lux, n1ssim, nqz |
|           20 |     2876 | 2024-03-03 | Imperial          | L   | 0.489      | -            | -                | -                | -         |    -9.08 | biguzera, kauez, lux, n1ssim, nqz |
|           19 |     2908 | 2024-03-02 | RED Canids        | W   | 0.482      | -            | -                | -                | -         |     1.22 | biguzera, kauez, lux, n1ssim, nqz |
|           18 |     2921 | 2024-03-01 | Legacy            | W   | 0.477      | -            | -                | -                | -         |     0.80 | biguzera, kauez, lux, n1ssim, nqz |
|           17 |     3510 | 2024-02-01 | W7M               | L   | 0.285      | -            | -                | -                | -         |    -8.86 | biguzera, kauez, lux, n1ssim, nqz |
|           16 |     3514 | 2024-02-01 | MIBR              | L   | 0.284      | -            | -                | -                | -         |    -4.43 | biguzera, kauez, lux, n1ssim, nqz |
|           15 |     3515 | 2024-02-01 | RED Canids        | W   | 0.284      | -            | -                | -                | -         |     0.66 | biguzera, kauez, lux, n1ssim, nqz |
|           14 |     3645 | 2024-01-24 | Sharks            | L   | 0.231      | -            | -                | -                | -         |    -7.06 | biguzera, kauez, lux, n1ssim, nqz |
|           13 |     3665 | 2024-01-23 | W7M               | W   | 0.224      | -            | -                | -                | -         |     0.07 | biguzera, kauez, lux, n1ssim, nqz |
|           12 |     3691 | 2024-01-22 | inSanitY          | W   | 0.217      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, n1ssim, nqz |
|           11 |     3715 | 2024-01-21 | Case              | W   | 0.211      | -            | -                | -                | -         |     0.03 | biguzera, kauez, lux, n1ssim, nqz |
|           10 |     3720 | 2024-01-21 | Imperial          | L   | 0.210      | -            | -                | -                | -         |    -4.06 | biguzera, kauez, lux, n1ssim, nqz |
|            9 |     3762 | 2024-01-20 | Sharks            | W   | 0.203      | -            | -                | -                | -         |     0.18 | biguzera, kauez, lux, n1ssim, nqz |
|            8 |     3801 | 2024-01-19 | Legacy            | L   | 0.198      | -            | -                | -                | -         |    -5.95 | biguzera, kauez, lux, n1ssim, nqz |
|            7 |     3816 | 2024-01-19 | W7M               | W   | 0.196      | -            | -                | -                | -         |     0.06 | biguzera, kauez, lux, n1ssim, nqz |
|            6 |     3972 | 2024-01-16 | Case              | L   | 0.177      | -            | -                | -                | -         |    -5.54 | biguzera, kauez, lux, n1ssim, nqz |
|            5 |     4015 | 2024-01-15 | Dusty Roots       | W   | 0.171      | -            | -                | -                | -         |     0.04 | biguzera, kauez, lux, n1ssim, nqz |
|            4 |     4039 | 2024-01-14 | Sharks            | L   | 0.165      | -            | -                | -                | -         |    -5.05 | biguzera, kauez, lux, n1ssim, nqz |
|            3 |     4044 | 2024-01-14 | RED Canids        | W   | 0.164      | -            | -                | -                | -         |     0.34 | biguzera, kauez, lux, n1ssim, nqz |
|            2 |     4050 | 2024-01-14 | ODDIK             | W   | 0.163      | -            | -                | -                | -         |     0.12 | biguzera, kauez, lux, n1ssim, nqz |
|            1 |     4067 | 2024-01-13 | LFO               | W   | 0.157      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, n1ssim, nqz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($147,883.13)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.49) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-06-16 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-10 |      1.000 | $11,000.00     | $11,000.00      |
| 2024-06-09 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-05-12 |      0.957 | $25,000.00     | $23,924.78      |
| 2024-04-20 |      0.810 | $100,000.00    | $81,047.38      |
| 2024-04-15 |      0.777 | $5,000.00      | $3,884.73       |
| 2024-03-31 |      0.676 | $20,000.00     | $13,526.23      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
