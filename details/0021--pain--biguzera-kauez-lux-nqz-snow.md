### Roster Details<br />
Team Name: paiN<br />
Roster: biguzera, kauez, lux, nqz, snow<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [21](../standings_global.md)<br />
Regional Rank: [6]( ../standings_americas.md)<br />
Final Rank Value:  1392.7<br />
<br />
Final Rank Value (1392.7) = Starting Rank Value (1481.4) + Head To Head Adjustments (-88.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.712[<sup>1</sup>](#table2)
- Bounty Collected: 0.524[<sup>2</sup>](#table1)
- Opponent Network: 0.314[<sup>2</sup>](#table1)
- LAN Wins: 0.587[<sup>2</sup>](#table1)

The average of these factors is 0.534<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1481.4
- 400 + ( ( 0.534 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1481.4


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
|           93 |       85 | 2024-07-21 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |   -23.09 | biguzera, kauez, lux, nqz, snow   |
|           92 |       94 | 2024-07-21 | Fluxo             | W   | 1.000      | -            | -                | -                | -         |     7.91 | biguzera, kauez, lux, nqz, snow   |
|           91 |      118 | 2024-07-20 | Imperial          | W   | 1.000      | -            | -                | -                | -         |     9.37 | biguzera, kauez, lux, nqz, snow   |
|           90 |      133 | 2024-07-20 | Bounty Hunters    | W   | 1.000      | -            | -                | -                | -         |     2.58 | biguzera, kauez, lux, nqz, snow   |
|           89 |      154 | 2024-07-19 | Fluxo             | W   | 1.000      | -            | -                | -                | -         |     8.19 | biguzera, kauez, lux, nqz, snow   |
|           88 |      166 | 2024-07-19 | Vikings KR        | W   | 1.000      | -            | -                | -                | -         |     1.31 | biguzera, kauez, lux, nqz, snow   |
|           87 |      193 | 2024-07-18 | Dusty Roots       | W   | 1.000      | -            | -                | -                | -         |     0.90 | biguzera, kauez, lux, nqz, snow   |
|           86 |      198 | 2024-07-18 | Dusty Roots       | W   | 1.000      | -            | -                | -                | -         |     0.91 | biguzera, kauez, lux, nqz, snow   |
|           85 |      261 | 2024-07-17 | Case              | W   | 1.000      | 0.450        | -                | 0.751 (0.338)    | -         |     1.87 | biguzera, kauez, lux, nqz, snow   |
|           84 |      263 | 2024-07-17 | Case              | W   | 1.000      | 0.450        | -                | 0.751 (0.338)    | -         |     1.91 | biguzera, kauez, lux, nqz, snow   |
|           83 |      291 | 2024-07-17 | W7M               | W   | 1.000      | -            | -                | -                | -         |     1.19 | biguzera, kauez, lux, nqz, snow   |
|           82 |      324 | 2024-07-16 | Galorys           | W   | 1.000      | 0.450        | -                | 0.592 (0.266)    | -         |     1.18 | biguzera, kauez, lux, nqz, snow   |
|           81 |      329 | 2024-07-16 | Galorys           | W   | 1.000      | -            | -                | -                | -         |     1.19 | biguzera, kauez, lux, nqz, snow   |
|           80 |      369 | 2024-07-15 | Solid             | W   | 1.000      | 0.450        | -                | 0.791 (0.356)    | -         |     1.57 | biguzera, kauez, lux, nqz, snow   |
|           79 |      372 | 2024-07-15 | Solid             | W   | 1.000      | 0.450        | -                | 0.791 (0.356)    | -         |     1.60 | biguzera, kauez, lux, nqz, snow   |
|           78 |      600 | 2024-06-16 | Fluxo             | L   | 0.948      | -            | -                | -                | -         |   -23.62 | biguzera, kauez, lux, nqz, snow   |
|           77 |      627 | 2024-06-15 | 9z                | L   | 0.941      | -            | -                | -                | -         |   -10.81 | biguzera, kauez, lux, nqz, snow   |
|           76 |      643 | 2024-06-15 | ODDIK             | W   | 0.939      | 0.450        | -                | 0.694 (0.293)    | -         |     2.35 | biguzera, kauez, lux, nqz, snow   |
|           75 |      660 | 2024-06-14 | Ninjas in Pyjamas | L   | 0.935      | -            | -                | -                | -         |    -6.75 | biguzera, kauez, lux, nqz, snow   |
|           74 |      678 | 2024-06-14 | BESTIA            | W   | 0.933      | 0.548        | 0.114 (0.058)    | 0.740 (0.379)    | 1 (0.933) |     3.70 | biguzera, kauez, lux, nqz, snow   |
|           73 |      703 | 2024-06-13 | KRÜ               | W   | 0.927      | -            | -                | -                | -         |     1.44 | biguzera, kauez, lux, nqz, snow   |
|           72 |      777 | 2024-06-10 | BESTIA            | W   | 0.908      | -            | -                | -                | -         |     3.77 | biguzera, kauez, lux, nqz, snow   |
|           71 |      787 | 2024-06-10 | Imperial          | W   | 0.906      | 0.371        | 0.317 (0.107)    | -                | -         |    12.94 | biguzera, kauez, lux, nqz, snow   |
|           70 |      818 | 2024-06-09 | Sharks            | W   | 0.900      | -            | -                | -                | -         |     3.99 | biguzera, kauez, lux, nqz, snow   |
|           69 |      874 | 2024-06-08 | Hype              | W   | 0.895      | -            | -                | -                | -         |     1.83 | biguzera, kauez, lux, nqz, snow   |
|           68 |      910 | 2024-06-08 | Dusty Roots       | W   | 0.893      | -            | -                | -                | -         |     1.08 | biguzera, kauez, lux, nqz, snow   |
|           67 |      932 | 2024-06-07 | Patins da Ferrari | W   | 0.888      | -            | -                | -                | -         |     1.00 | biguzera, kauez, lux, nqz, snow   |
|           66 |      982 | 2024-06-06 | Galorys           | W   | 0.882      | -            | -                | -                | -         |     1.45 | biguzera, kauez, lux, nqz, snow   |
|           65 |      991 | 2024-06-06 | Sharks            | L   | 0.881      | -            | -                | -                | -         |   -24.17 | biguzera, kauez, lux, nqz, snow   |
|           64 |     1060 | 2024-06-05 | Fluxo             | W   | 0.875      | 0.450        | 0.157 (0.062)    | 0.685 (0.270)    | -         |     4.30 | biguzera, kauez, lux, nqz, snow   |
|           63 |     1112 | 2024-06-04 | ODDIK             | W   | 0.868      | 0.450        | -                | 0.694 (0.271)    | -         |     2.18 | biguzera, kauez, lux, nqz, snow   |
|           62 |     1439 | 2024-05-22 | MIBR              | L   | 0.780      | -            | -                | -                | -         |    -9.66 | biguzera, kauez, lux, nqz, snow   |
|           61 |     1442 | 2024-05-22 | MIBR              | L   | 0.780      | -            | -                | -                | -         |   -10.33 | biguzera, kauez, lux, nqz, snow   |
|           60 |     1548 | 2024-05-19 | AMKAL             | L   | 0.760      | -            | -                | -                | -         |   -19.16 | biguzera, kauez, lux, nqz, snow   |
|           59 |     1558 | 2024-05-19 | OG                | W   | 0.758      | 0.769        | 0.170 (0.099)    | -                | -         |     3.17 | biguzera, kauez, lux, nqz, snow   |
|           58 |     1572 | 2024-05-18 | AMKAL             | L   | 0.754      | -            | -                | -                | -         |   -19.65 | biguzera, kauez, lux, nqz, snow   |
|           57 |     1795 | 2024-05-12 | 9z                | W   | 0.714      | 0.435        | 0.511 (0.159)    | -                | -         |    15.68 | biguzera, kauez, lux, nqz, snow   |
|           56 |     1827 | 2024-05-11 | BESTIA            | W   | 0.707      | -            | -                | -                | -         |     1.56 | biguzera, kauez, lux, nqz, snow   |
|           55 |     1856 | 2024-05-10 | RED Canids        | W   | 0.700      | -            | -                | -                | -         |     3.46 | biguzera, kauez, lux, nqz, snow   |
|           54 |     1866 | 2024-05-09 | Fluxo             | L   | 0.695      | -            | -                | -                | -         |   -19.11 | biguzera, kauez, lux, nqz, snow   |
|           53 |     1872 | 2024-05-09 | Fluxo             | W   | 0.695      | -            | -                | -                | -         |     2.66 | biguzera, kauez, lux, nqz, snow   |
|           52 |     1891 | 2024-05-08 | RED Canids        | W   | 0.688      | -            | -                | -                | -         |     3.23 | biguzera, kauez, lux, nqz, snow   |
|           51 |     1893 | 2024-05-08 | RED Canids        | L   | 0.688      | -            | -                | -                | -         |   -18.78 | biguzera, kauez, lux, nqz, snow   |
|           50 |     1897 | 2024-05-08 | Galorys           | W   | 0.687      | -            | -                | -                | -         |     0.73 | biguzera, kauez, lux, nqz, snow   |
|           49 |     1899 | 2024-05-08 | Galorys           | W   | 0.687      | -            | -                | -                | -         |     0.74 | biguzera, kauez, lux, nqz, snow   |
|           48 |     1912 | 2024-05-07 | W7M               | W   | 0.681      | -            | -                | -                | -         |     0.63 | biguzera, kauez, lux, nqz, snow   |
|           47 |     1932 | 2024-05-06 | W7M               | W   | 0.674      | -            | -                | -                | -         |     0.63 | biguzera, kauez, lux, nqz, snow   |
|           46 |     1933 | 2024-05-06 | W7M               | W   | 0.673      | -            | -                | -                | -         |     0.63 | biguzera, kauez, lux, nqz, snow   |
|           45 |     1945 | 2024-05-05 | KRÜ               | W   | 0.667      | -            | -                | -                | -         |     0.82 | biguzera, kauez, lux, nqz, snow   |
|           44 |     2169 | 2024-04-25 | Solid             | W   | 0.601      | -            | -                | -                | -         |     0.74 | biguzera, kauez, lux, nqz, nyezin |
|           43 |     2171 | 2024-04-25 | Solid             | W   | 0.601      | -            | -                | -                | -         |     0.74 | biguzera, kauez, lux, nqz, nyezin |
|           42 |     2190 | 2024-04-24 | ODDIK             | W   | 0.595      | -            | -                | -                | -         |     1.19 | biguzera, kauez, lux, nqz, nyezin |
|           41 |     2191 | 2024-04-24 | ODDIK             | L   | 0.594      | -            | -                | -                | -         |   -17.68 | biguzera, kauez, lux, nqz, nyezin |
|           40 |     2263 | 2024-04-20 | Imperial          | W   | 0.568      | 0.589        | 0.317 (0.106)    | -                | 1 (0.568) |     6.83 | biguzera, kauez, lux, nqz, nyezin |
|           39 |     2272 | 2024-04-20 | MIBR              | W   | 0.567      | 0.589        | 0.257 (0.086)    | -                | 1 (0.567) |    10.07 | biguzera, kauez, lux, nqz, nyezin |
|           38 |     2294 | 2024-04-20 | Imperial          | L   | 0.563      | -            | -                | -                | -         |   -11.02 | biguzera, kauez, lux, nqz, nyezin |
|           37 |     2295 | 2024-04-19 | MIBR              | L   | 0.563      | -            | -                | -                | -         |    -8.20 | biguzera, kauez, lux, nqz, nyezin |
|           36 |     2308 | 2024-04-19 | Imperial          | W   | 0.561      | -            | -                | -                | -         |     6.58 | biguzera, kauez, lux, nqz, nyezin |
|           35 |     2324 | 2024-04-19 | MIBR              | W   | 0.560      | 0.589        | 0.257 (0.085)    | -                | 1 (0.560) |     9.52 | biguzera, kauez, lux, nqz, nyezin |
|           34 |     2344 | 2024-04-18 | Fluxo             | W   | 0.556      | -            | -                | -                | -         |     2.05 | biguzera, kauez, lux, nqz, nyezin |
|           33 |     2347 | 2024-04-18 | MIBR              | L   | 0.555      | -            | -                | -                | -         |    -8.31 | biguzera, kauez, lux, nqz, nyezin |
|           32 |     2375 | 2024-04-18 | Monte             | W   | 0.553      | -            | -                | -                | 1 (0.553) |     1.60 | biguzera, kauez, lux, nqz, nyezin |
|           31 |     2478 | 2024-04-14 | Imperial          | L   | 0.527      | -            | -                | -                | -         |   -10.70 | biguzera, kauez, lux, nqz, nyezin |
|           30 |     2489 | 2024-04-13 | ODDIK             | W   | 0.521      | -            | -                | -                | -         |     0.84 | biguzera, kauez, lux, nqz, nyezin |
|           29 |     2521 | 2024-04-11 | MIBR              | L   | 0.509      | -            | -                | -                | -         |    -8.48 | biguzera, kauez, lux, nqz, nyezin |
|           28 |     2528 | 2024-04-11 | Sharks            | W   | 0.507      | -            | -                | -                | -         |     0.91 | biguzera, kauez, lux, nqz, nyezin |
|           27 |     2534 | 2024-04-11 | Imperial          | W   | 0.506      | -            | -                | -                | -         |     5.51 | biguzera, kauez, lux, nqz, nyezin |
|           26 |     2569 | 2024-04-10 | RED Canids        | W   | 0.501      | -            | -                | -                | -         |     1.93 | biguzera, kauez, lux, nqz, nyezin |
|           25 |     2612 | 2024-04-09 | Case              | W   | 0.495      | -            | -                | -                | -         |     0.60 | biguzera, kauez, lux, nqz, nyezin |
|           24 |     2618 | 2024-04-09 | Case              | W   | 0.494      | -            | -                | -                | -         |     0.61 | biguzera, kauez, lux, nqz, nyezin |
|           23 |     2637 | 2024-04-09 | Imperial          | L   | 0.493      | -            | -                | -                | -         |   -10.06 | biguzera, kauez, lux, nqz, nyezin |
|           22 |     2659 | 2024-04-08 | Sharks            | W   | 0.487      | -            | -                | -                | -         |     0.30 | biguzera, kauez, lux, nqz, nyezin |
|           21 |     2688 | 2024-04-07 | MIBR              | L   | 0.482      | -            | -                | -                | -         |    -8.63 | biguzera, kauez, lux, nqz, nyezin |
|           20 |     2692 | 2024-04-07 | Galorys           | W   | 0.481      | -            | -                | -                | -         |     0.46 | biguzera, kauez, lux, nqz, nyezin |
|           19 |     2729 | 2024-04-05 | Sharks            | W   | 0.466      | -            | -                | -                | -         |     0.24 | biguzera, kauez, lux, nqz, nyezin |
|           18 |     2747 | 2024-04-04 | Sharks            | W   | 0.461      | -            | -                | -                | -         |     0.24 | biguzera, kauez, lux, nqz, nyezin |
|           17 |     2755 | 2024-04-04 | Sharks            | W   | 0.461      | -            | -                | -                | -         |     0.24 | biguzera, kauez, lux, nqz, nyezin |
|           16 |     2981 | 2024-03-24 | Natus Vincere     | L   | 0.387      | -            | -                | -                | -         |    -0.73 | biguzera, kauez, lux, n1ssim, nqz |
|           15 |     2992 | 2024-03-23 | HEROIC            | W   | 0.380      | 1.000        | 0.272 (0.104)    | -                | 1 (0.380) |     8.04 | biguzera, kauez, lux, n1ssim, nqz |
|           14 |     3007 | 2024-03-22 | The MongolZ       | W   | 0.373      | 1.000        | 1.000 (0.373)    | 0.725 (0.271)    | 1 (0.373) |    10.66 | biguzera, kauez, lux, n1ssim, nqz |
|           13 |     3027 | 2024-03-21 | Virtus.pro        | L   | 0.367      | -            | -                | -                | -         |    -1.73 | biguzera, kauez, lux, n1ssim, nqz |
|           12 |     3035 | 2024-03-21 | Complexity        | L   | 0.366      | -            | -                | -                | -         |    -2.83 | biguzera, kauez, lux, n1ssim, nqz |
|           11 |     3072 | 2024-03-19 | SAW               | W   | 0.353      | -            | -                | -                | 1 (0.353) |     1.99 | biguzera, kauez, lux, n1ssim, nqz |
|           10 |     3087 | 2024-03-18 | ENCE              | W   | 0.345      | -            | -                | -                | 1 (0.345) |     4.38 | biguzera, kauez, lux, n1ssim, nqz |
|            9 |     3106 | 2024-03-17 | Eternal Fire      | L   | 0.340      | -            | -                | -                | -         |    -2.75 | biguzera, kauez, lux, n1ssim, nqz |
|            8 |     3115 | 2024-03-17 | Apeks             | W   | 0.339      | -            | -                | -                | 1 (0.339) |     0.59 | biguzera, kauez, lux, n1ssim, nqz |
|            7 |     3444 | 2024-03-04 | ODDIK             | W   | 0.253      | -            | -                | -                | -         |     0.55 | biguzera, kauez, lux, n1ssim, nqz |
|            6 |     3461 | 2024-03-03 | Imperial          | L   | 0.247      | -            | -                | -                | -         |    -5.14 | biguzera, kauez, lux, n1ssim, nqz |
|            5 |     3493 | 2024-03-02 | RED Canids        | W   | 0.239      | -            | -                | -                | -         |     0.87 | biguzera, kauez, lux, n1ssim, nqz |
|            4 |     3506 | 2024-03-01 | Legacy            | W   | 0.234      | -            | -                | -                | -         |     0.57 | biguzera, kauez, lux, n1ssim, nqz |
|            3 |     4095 | 2024-02-01 | W7M               | L   | 0.042      | -            | -                | -                | -         |    -1.29 | biguzera, kauez, lux, n1ssim, nqz |
|            2 |     4099 | 2024-02-01 | MIBR              | L   | 0.042      | -            | -                | -                | -         |    -0.69 | biguzera, kauez, lux, n1ssim, nqz |
|            1 |     4100 | 2024-02-01 | RED Canids        | W   | 0.041      | -            | -                | -                | -         |     0.15 | biguzera, kauez, lux, n1ssim, nqz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($108,692.59)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.39) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.949 | $1,500.00      | $1,422.83       |
| 2024-06-16 |      0.948 | $10,000.00     | $9,475.81       |
| 2024-06-10 |      0.908 | $10,000.00     | $9,083.42       |
| 2024-06-09 |      0.901 | $3,000.00      | $2,703.67       |
| 2024-05-12 |      0.714 | $25,000.00     | $17,862.07      |
| 2024-04-20 |      0.568 | $100,000.00    | $56,796.54      |
| 2024-04-15 |      0.534 | $5,000.00      | $2,672.19       |
| 2024-03-31 |      0.434 | $20,000.00     | $8,676.06       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
