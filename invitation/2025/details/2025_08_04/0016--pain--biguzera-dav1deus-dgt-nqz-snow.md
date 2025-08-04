### Roster Details<br />
Team Name: paiN<br />
Roster: biguzera, dav1deuS, dgt, nqz, snow<br />
Global Rank: [16](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [2]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  1478.6<br />
<br />
Final Rank Value (1478.6) = Starting Rank Value (1557.8) + Head To Head Adjustments (-79.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.656[<sup>1</sup>](#table2)
- Bounty Collected: 0.535[<sup>2</sup>](#table1)
- Opponent Network: 0.302[<sup>2</sup>](#table1)
- LAN Wins: 0.951[<sup>2</sup>](#table1)

The average of these factors is 0.611<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1557.8
- 400 + ( ( 0.611 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 1557.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |      118 | 2025-07-25 | Astralis      | L   | 1.000      | -            | -                | -                | -         |    -7.63 | biguzera, dav1deuS, dgt, nqz, snow   |
|           43 |      124 | 2025-07-25 | BIG           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     4.65 | biguzera, dav1deuS, dgt, nqz, snow   |
|           42 |      140 | 2025-07-23 | Liquid        | L   | 1.000      | -            | -                | -                | -         |   -22.98 | biguzera, dav1deuS, dgt, nqz, snow   |
|           41 |      258 | 2025-07-17 | 3DMAX         | L   | 1.000      | -            | -                | -                | -         |   -12.06 | biguzera, dav1deuS, dgt, nqz, snow   |
|           40 |      284 | 2025-07-16 | Lynn Vision   | L   | 1.000      | -            | -                | -                | -         |   -17.10 | biguzera, dav1deuS, dgt, nqz, snow   |
|           39 |      306 | 2025-07-15 | Rare Atom     | W   | 1.000      | 1.000        | 0.066 (0.066)    | 0.439 (0.439)    | 1 (1.000) |     3.29 | biguzera, dav1deuS, dgt, nqz, snow   |
|           38 |      591 | 2025-06-21 | The MongolZ   | L   | 0.909      | -            | -                | -                | -         |    -4.92 | biguzera, dav1deuS, dgt, nqz, snow   |
|           37 |      621 | 2025-06-19 | FURIA         | W   | 0.896      | 1.000        | 0.477 (0.428)    | 0.620 (0.556)    | 1 (0.896) |    20.68 | biguzera, dav1deuS, dgt, nqz, snow   |
|           36 |      687 | 2025-06-15 | Virtus.pro    | W   | 0.869      | 1.000        | 0.200 (0.174)    | 0.414 (0.360)    | 1 (0.869) |    13.29 | biguzera, dav1deuS, dgt, nqz, snow   |
|           35 |      730 | 2025-06-14 | 3DMAX         | W   | 0.860      | 1.000        | 0.374 (0.321)    | 0.571 (0.491)    | 1 (0.860) |    18.20 | biguzera, dav1deuS, dgt, nqz, snow   |
|           34 |      755 | 2025-06-13 | Nemiga        | W   | 0.855      | 1.000        | 0.075 (0.064)    | 0.739 (0.631)    | 1 (0.855) |     4.77 | biguzera, dav1deuS, dgt, nqz, snow   |
|           33 |      785 | 2025-06-12 | G2            | L   | 0.849      | -            | -                | -                | -         |    -9.45 | biguzera, dav1deuS, dgt, nqz, snow   |
|           32 |      801 | 2025-06-12 | Spirit        | L   | 0.847      | -            | -                | -                | -         |    -1.72 | biguzera, dav1deuS, dgt, nqz, snow   |
|           31 |      848 | 2025-06-09 | Lynn Vision   | W   | 0.827      | 0.143        | 0.274 (0.032)    | 0.639 (0.076)    | 1 (0.827) |    12.98 | biguzera, dav1deuS, dgt, nqz, snow   |
|           30 |      859 | 2025-06-08 | Virtus.pro    | L   | 0.821      | -            | -                | -                | -         |   -13.44 | biguzera, dav1deuS, dgt, nqz, snow   |
|           29 |      877 | 2025-06-07 | FURIA         | W   | 0.814      | 0.143        | 0.477 (0.055)    | 0.620 (0.072)    | 1 (0.814) |    19.45 | biguzera, dav1deuS, dgt, nqz, snow   |
|           28 |      882 | 2025-06-07 | Nemiga        | W   | 0.814      | 0.143        | -                | 0.739 (0.086)    | 1 (0.814) |     3.90 | biguzera, dav1deuS, dgt, nqz, snow   |
|           27 |     1299 | 2025-05-13 | MIBR          | L   | 0.645      | -            | -                | -                | -         |   -15.31 | biguzera, dav1deuS, dgt, nqz, snow   |
|           26 |     1328 | 2025-05-12 | ODDIK         | L   | 0.638      | -            | -                | -                | -         |   -19.23 | biguzera, dav1deuS, dgt, nqz, snow   |
|           25 |     1356 | 2025-05-11 | Astralis      | L   | 0.631      | -            | -                | -                | -         |    -5.11 | biguzera, dav1deuS, nqz, rikz, snow  |
|           24 |     1369 | 2025-05-10 | HOTU          | W   | 0.626      | 1.000        | -                | 0.361 (0.226)    | 1 (0.626) |     0.71 | biguzera, dav1deuS, nqz, rikz, snow  |
|           23 |     1613 | 2025-05-01 | Wildcard      | L   | 0.565      | -            | -                | -                | -         |   -16.92 | biguzera, dav1deuS, dgt, nqz, snow   |
|           22 |     1633 | 2025-04-30 | MOUZ          | L   | 0.559      | -            | -                | -                | -         |    -1.57 | biguzera, dav1deuS, dgt, nqz, snow   |
|           21 |     1803 | 2025-04-21 | Complexity    | L   | 0.503      | -            | -                | -                | -         |   -10.83 | dav1deuS, deemO, nqz, rikz, snow     |
|           20 |     1816 | 2025-04-20 | FaZe          | L   | 0.496      | -            | -                | -                | -         |    -4.26 | dav1deuS, deemO, nqz, rikz, snow     |
|           19 |     2108 | 2025-04-08 | Falcons       | L   | 0.413      | -            | -                | -                | -         |    -4.24 | biguzera, dav1deuS, deemO, nqz, snow |
|           18 |     2145 | 2025-04-07 | FaZe          | L   | 0.406      | -            | -                | -                | -         |    -3.52 | biguzera, dav1deuS, deemO, nqz, snow |
|           17 |     2159 | 2025-04-06 | Aurora        | L   | 0.400      | -            | -                | -                | -         |    -3.94 | biguzera, dav1deuS, deemO, nqz, snow |
|           16 |     3057 | 2025-03-10 | Aurora        | L   | 0.220      | -            | -                | -                | -         |    -2.31 | biguzera, dav1deuS, kauez, nqz, snow |
|           15 |     3112 | 2025-03-09 | Natus Vincere | L   | 0.213      | -            | -                | -                | -         |    -1.43 | biguzera, dav1deuS, kauez, nqz, snow |
|           14 |     3194 | 2025-03-08 | GamerLegion   | W   | 0.206      | 1.000        | 0.450 (0.093)    | 0.420 (0.087)    | -         |     3.67 | biguzera, dav1deuS, kauez, nqz, snow |
|           13 |     3244 | 2025-03-07 | G2            | L   | 0.201      | -            | -                | -                | -         |    -2.99 | biguzera, dav1deuS, kauez, nqz, snow |
|           12 |     3345 | 2025-03-05 | Nemiga        | W   | 0.187      | -            | -                | -                | -         |     0.54 | biguzera, dav1deuS, kauez, nqz, snow |
|           11 |     3366 | 2025-03-04 | Lynn Vision   | W   | 0.181      | -            | -                | -                | -         |     2.38 | biguzera, dav1deuS, kauez, nqz, snow |
|           10 |     3384 | 2025-03-03 | FlyQuest      | L   | 0.174      | -            | -                | -                | -         |    -4.49 | biguzera, dav1deuS, kauez, nqz, snow |
|            9 |     3406 | 2025-03-02 | M80           | L   | 0.167      | -            | -                | -                | -         |    -4.70 | biguzera, dav1deuS, kauez, nqz, snow |
|            8 |     3438 | 2025-03-01 | Ground Zero   | W   | 0.161      | -            | -                | -                | -         |     0.04 | biguzera, dav1deuS, kauez, nqz, snow |
|            7 |     3693 | 2025-02-21 | MOUZ          | L   | 0.105      | -            | -                | -                | -         |    -0.35 | biguzera, dav1deuS, kauez, nqz, snow |
|            6 |     3789 | 2025-02-17 | Virtus.pro    | W   | 0.081      | -            | -                | -                | -         |     1.01 | biguzera, dav1deuS, kauez, nqz, snow |
|            5 |     3811 | 2025-02-16 | The MongolZ   | L   | 0.074      | -            | -                | -                | -         |    -0.36 | biguzera, dav1deuS, kauez, nqz, snow |
|            4 |     3835 | 2025-02-15 | Falcons       | W   | 0.067      | 1.000        | 1.000 (0.067)    | -                | -         |     1.46 | biguzera, dav1deuS, kauez, nqz, snow |
|            3 |     3876 | 2025-02-14 | Astralis      | W   | 0.060      | 1.000        | 0.888 (0.053)    | -                | -         |     1.45 | biguzera, dav1deuS, kauez, nqz, snow |
|            2 |     4016 | 2025-02-09 | Imperial      | L   | 0.027      | -            | -                | -                | -         |    -0.81 | biguzera, dav1deuS, kauez, nqz, snow |
|            1 |     4047 | 2025-02-08 | RED Canids    | W   | 0.021      | -            | -                | -                | -         |     0.00 | biguzera, dav1deuS, kauez, nqz, snow |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($131,981.92)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.30) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-25 |      1.000 | $4,500.00      | $4,500.00       |
| 2025-07-20 |      1.000 | $15,000.00     | $15,000.00      |
| 2025-06-22 |      0.915 | $80,000.00     | $73,187.62      |
| 2025-05-18 |      0.680 | $18,750.00     | $12,748.75      |
| 2025-05-04 |      0.587 | $10,000.00     | $5,874.12       |
| 2025-04-27 |      0.539 | $4,000.00      | $2,155.73       |
| 2025-04-13 |      0.447 | $12,500.00     | $5,586.41       |
| 2025-03-16 |      0.261 | $20,500.00     | $5,340.73       |
| 2025-02-23 |      0.121 | $62,500.00     | $7,588.57       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
