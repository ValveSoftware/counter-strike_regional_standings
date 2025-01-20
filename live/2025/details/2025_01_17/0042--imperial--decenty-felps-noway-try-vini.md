### Roster Details<br />
Team Name: Imperial<br />
Roster: decenty, felps, noway, try, VINI<br />
Global Rank: [42](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_17.md)<br />
Regional Rank: [10]( ../../standings_americas_2025_01_17.md)<br />
<br />
Final Rank Value:  1155.2<br />
<br />
Final Rank Value (1155.2) = Starting Rank Value (1149.6) + Head To Head Adjustments (5.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.560[<sup>1</sup>](#table2)
- Bounty Collected: 0.441[<sup>2</sup>](#table1)
- Opponent Network: 0.146[<sup>2</sup>](#table1)
- LAN Wins: 0.365[<sup>2</sup>](#table1)

The average of these factors is 0.378<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1149.6
- 400 + ( ( 0.378 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1149.6


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
|           60 |      475 | 2024-12-01 | Complexity        | L   | 0.883      | -            | -                | -                | -         |    -7.73 | decenty, felps, noway, try, VINI  |
|           59 |      501 | 2024-11-30 | FURIA             | L   | 0.878      | -            | -                | -                | -         |    -2.78 | decenty, felps, noway, try, VINI  |
|           58 |      509 | 2024-11-29 | paiN              | L   | 0.876      | -            | -                | -                | -         |    -4.82 | decenty, felps, noway, try, VINI  |
|           57 |      805 | 2024-11-15 | RED Canids        | W   | 0.776      | -            | -                | -                | 1 (0.776) |     8.91 | decenty, felps, noway, try, VINI  |
|           56 |      848 | 2024-11-14 | KRÜ               | W   | 0.770      | -            | -                | -                | 1 (0.770) |     2.95 | decenty, felps, noway, try, VINI  |
|           55 |      880 | 2024-11-12 | paiN              | L   | 0.762      | -            | -                | -                | -         |    -4.19 | decenty, felps, noway, try, VINI  |
|           54 |      894 | 2024-11-12 | MIBR              | L   | 0.758      | -            | -                | -                | -         |    -5.30 | decenty, felps, noway, try, VINI  |
|           53 |      912 | 2024-11-12 | Case              | W   | 0.756      | -            | -                | -                | 1 (0.756) |     2.29 | decenty, felps, noway, try, VINI  |
|           52 |     1237 | 2024-10-26 | The MongolZ       | L   | 0.646      | -            | -                | -                | -         |    -0.54 | decenty, felps, noway, try, VINI  |
|           51 |     1263 | 2024-10-25 | Ninjas in Pyjamas | W   | 0.639      | 0.477        | 0.079 (0.024)    | -                | 0 (0.000) |     7.66 | decenty, felps, noway, try, VINI  |
|           50 |     1292 | 2024-10-23 | Legacy            | W   | 0.626      | 0.477        | 0.074 (0.022)    | 0.502 (0.150)    | 0 (0.000) |     8.06 | decenty, felps, noway, try, VINI  |
|           49 |     1293 | 2024-10-23 | Ninjas in Pyjamas | L   | 0.625      | -            | -                | -                | -         |   -12.29 | decenty, felps, noway, try, VINI  |
|           48 |     1403 | 2024-10-17 | RED Canids        | L   | 0.588      | -            | -                | -                | -         |   -11.67 | decenty, felps, noway, try, VINI  |
|           47 |     1435 | 2024-10-16 | Sharks            | W   | 0.581      | 0.450        | 0.110 (0.029)    | 0.596 (0.156)    | 0 (0.000) |     9.21 | decenty, felps, noway, try, VINI  |
|           46 |     1464 | 2024-10-15 | inSanitY          | L   | 0.574      | -            | -                | -                | -         |   -15.99 | decenty, felps, noway, try, VINI  |
|           45 |     1555 | 2024-10-09 | Solid             | W   | 0.534      | 0.450        | -                | 0.644 (0.155)    | 0 (0.000) |     3.57 | decenty, felps, noway, try, VINI  |
|           44 |     1558 | 2024-10-09 | Solid             | W   | 0.534      | 0.450        | -                | 0.644 (0.155)    | 0 (0.000) |     3.69 | decenty, felps, noway, try, VINI  |
|           43 |     1588 | 2024-10-08 | paiN              | W   | 0.527      | 0.450        | 0.256 (0.061)    | 0.667 (0.158)    | -         |    13.89 | decenty, felps, noway, try, VINI  |
|           42 |     1595 | 2024-10-08 | paiN              | L   | 0.527      | -            | -                | -                | -         |    -2.68 | decenty, felps, noway, try, VINI  |
|           41 |     1620 | 2024-10-07 | Complexity        | L   | 0.521      | -            | -                | -                | -         |    -4.21 | decenty, felps, noway, try, VINI  |
|           40 |     1632 | 2024-10-07 | Natus Vincere     | L   | 0.518      | -            | -                | -                | -         |    -0.50 | decenty, felps, noway, try, VINI  |
|           39 |     1642 | 2024-10-06 | MIBR              | L   | 0.514      | -            | -                | -                | -         |    -2.86 | decenty, felps, noway, try, VINI  |
|           38 |     1643 | 2024-10-06 | MIBR              | W   | 0.514      | 0.450        | 0.211 (0.049)    | 0.613 (0.142)    | -         |    13.56 | decenty, felps, noway, try, VINI  |
|           37 |     1709 | 2024-10-04 | RED Canids        | L   | 0.500      | -            | -                | -                | -         |    -9.61 | decenty, felps, noway, try, VINI  |
|           36 |     1777 | 2024-10-02 | Hype              | W   | 0.487      | -            | -                | -                | -         |     1.40 | decenty, felps, noway, VINI, zqkS |
|           35 |     1784 | 2024-10-02 | Hype              | W   | 0.487      | -            | -                | -                | -         |     1.42 | decenty, felps, noway, VINI, zqkS |
|           34 |     1829 | 2024-10-01 | Sharks            | W   | 0.481      | 0.450        | 0.110 (0.024)    | 0.596 (0.129)    | -         |     8.16 | decenty, felps, noway, try, VINI  |
|           33 |     1833 | 2024-10-01 | Sharks            | L   | 0.480      | -            | -                | -                | -         |    -7.12 | decenty, felps, noway, try, VINI  |
|           32 |     1865 | 2024-09-30 | Fluxo             | L   | 0.474      | -            | -                | -                | -         |    -9.00 | decenty, felps, noway, try, VINI  |
|           31 |     1867 | 2024-09-30 | Fluxo             | L   | 0.474      | -            | -                | -                | -         |    -9.36 | decenty, felps, noway, try, VINI  |
|           30 |     2018 | 2024-09-26 | Sharks            | W   | 0.446      | -            | -                | -                | -         |     7.18 | decenty, felps, noway, try, VINI  |
|           29 |     2059 | 2024-09-25 | BESTIA            | L   | 0.440      | -            | -                | -                | -         |    -9.58 | decenty, felps, noway, try, VINI  |
|           28 |     2063 | 2024-09-25 | BESTIA            | W   | 0.440      | 0.450        | 0.155 (0.031)    | 0.602 (0.119)    | -         |     4.33 | decenty, felps, noway, try, VINI  |
|           27 |     2068 | 2024-09-25 | BESTIA            | W   | 0.440      | -            | -                | -                | -         |     4.48 | decenty, felps, noway, try, VINI  |
|           26 |     2309 | 2024-09-18 | Spirit            | L   | 0.392      | -            | -                | -                | -         |    -0.12 | decenty, felps, noway, try, VINI  |
|           25 |     2410 | 2024-09-14 | M80               | L   | 0.366      | -            | -                | -                | -         |    -5.76 | decenty, felps, noway, try, VINI  |
|           24 |     2510 | 2024-09-11 | MOUZ              | W   | 0.346      | 0.889        | 0.677 (0.209)    | 0.479 (0.148)    | 1 (0.346) |    10.61 | decenty, felps, noway, try, VINI  |
|           23 |     2547 | 2024-09-10 | BIG               | W   | 0.339      | 0.889        | 0.257 (0.077)    | 0.492 (0.148)    | 1 (0.339) |     8.21 | decenty, felps, noway, try, VINI  |
|           22 |     2635 | 2024-09-06 | ODDIK             | W   | 0.314      | 0.450        | 0.087 (0.012)    | -                | -         |     2.28 | decenty, felps, noway, try, VINI  |
|           21 |     2636 | 2024-09-06 | ODDIK             | W   | 0.314      | -            | -                | -                | -         |     2.33 | decenty, felps, noway, try, VINI  |
|           20 |     2773 | 2024-09-02 | Galorys           | W   | 0.287      | -            | -                | -                | -         |     0.58 | decenty, felps, noway, try, VINI  |
|           19 |     2775 | 2024-09-02 | Galorys           | W   | 0.287      | -            | -                | -                | -         |     0.58 | decenty, felps, noway, try, VINI  |
|           18 |     3026 | 2024-08-26 | Players           | W   | 0.241      | -            | -                | -                | -         |     0.62 | decenty, felps, noway, try, VINI  |
|           17 |     3027 | 2024-08-26 | Players           | W   | 0.240      | -            | -                | -                | -         |     0.63 | decenty, felps, noway, try, VINI  |
|           16 |     3284 | 2024-08-20 | Dusty Roots       | W   | 0.201      | -            | -                | -                | -         |     1.08 | decenty, felps, noway, try, VINI  |
|           15 |     3285 | 2024-08-20 | Dusty Roots       | W   | 0.200      | -            | -                | -                | -         |     1.09 | decenty, felps, noway, try, VINI  |
|           14 |     3509 | 2024-08-12 | inSanitY          | W   | 0.147      | -            | -                | -                | -         |     0.51 | decenty, felps, noway, try, VINI  |
|           13 |     3514 | 2024-08-12 | inSanitY          | W   | 0.147      | -            | -                | -                | -         |     0.51 | decenty, felps, noway, try, VINI  |
|           12 |     3607 | 2024-08-09 | paiN              | L   | 0.125      | -            | -                | -                | -         |    -0.52 | decenty, felps, noway, try, VINI  |
|           11 |     3663 | 2024-08-07 | FURIA             | L   | 0.113      | -            | -                | -                | -         |    -0.28 | decenty, felps, noway, try, VINI  |
|           10 |     4002 | 2024-07-29 | paiN              | L   | 0.054      | -            | -                | -                | -         |    -0.23 | decenty, felps, noway, try, VINI  |
|            9 |     4005 | 2024-07-29 | MIBR              | W   | 0.054      | -            | -                | -                | -         |     1.53 | decenty, felps, noway, try, VINI  |
|            8 |     4030 | 2024-07-28 | paiN              | L   | 0.048      | -            | -                | -                | -         |    -0.20 | decenty, felps, noway, try, VINI  |
|            7 |     4038 | 2024-07-28 | MIBR              | W   | 0.047      | -            | -                | -                | -         |     1.33 | decenty, felps, noway, try, VINI  |
|            6 |     4084 | 2024-07-26 | Fluxo             | W   | 0.034      | -            | -                | -                | -         |     0.07 | decenty, felps, noway, try, VINI  |
|            5 |     4087 | 2024-07-26 | Sharks            | W   | 0.033      | -            | -                | -                | -         |     0.64 | decenty, felps, noway, try, VINI  |
|            4 |     4116 | 2024-07-25 | Solid             | W   | 0.028      | -            | -                | -                | -         |     0.02 | decenty, felps, noway, try, VINI  |
|            3 |     4120 | 2024-07-25 | Yawara            | W   | 0.027      | -            | -                | -                | -         |     0.06 | decenty, felps, noway, try, VINI  |
|            2 |     4190 | 2024-07-23 | Solid             | L   | 0.014      | -            | -                | -                | -         |    -0.43 | decenty, felps, noway, try, VINI  |
|            1 |     4198 | 2024-07-23 | Atrix             | W   | 0.014      | -            | -                | -                | -         |     0.03 | decenty, felps, noway, try, VINI  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($37,102.85)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.897 | $10,000.00     | $8,972.10       |
| 2024-10-26 |      0.647 | $20,000.00     | $12,940.74      |
| 2024-10-20 |      0.607 | $3,000.00      | $1,820.83       |
| 2024-10-13 |      0.560 | $4,000.00      | $2,239.27       |
| 2024-10-05 |      0.507 | $1,875.00      | $949.90         |
| 2024-09-22 |      0.420 | $23,500.00     | $9,863.66       |
| 2024-08-09 |      0.127 | $2,500.00      | $316.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
