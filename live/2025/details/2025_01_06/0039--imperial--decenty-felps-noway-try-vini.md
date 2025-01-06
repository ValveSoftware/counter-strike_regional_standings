### Roster Details<br />
Team Name: Imperial<br />
Roster: decenty, felps, noway, try, VINI<br />
Global Rank: [39](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_06.md)<br />
Regional Rank: [11]( ../../standings_americas_2025_01_06.md)<br />
<br />
Final Rank Value:  1166.8<br />
<br />
Final Rank Value (1166.8) = Starting Rank Value (1161.4) + Head To Head Adjustments (5.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.555[<sup>1</sup>](#table2)
- Bounty Collected: 0.450[<sup>2</sup>](#table1)
- Opponent Network: 0.159[<sup>2</sup>](#table1)
- LAN Wins: 0.376[<sup>2</sup>](#table1)

The average of these factors is 0.385<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1161.4
- 400 + ( ( 0.385 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 1161.4


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
|           68 |      430 | 2024-12-01 | Complexity        | L   | 0.958      | -            | -                | -                | -         |    -7.82 | decenty, felps, noway, try, VINI  |
|           67 |      456 | 2024-11-30 | FURIA             | L   | 0.952      | -            | -                | -                | -         |    -3.10 | decenty, felps, noway, try, VINI  |
|           66 |      464 | 2024-11-29 | paiN              | L   | 0.951      | -            | -                | -                | -         |    -5.29 | decenty, felps, noway, try, VINI  |
|           65 |      760 | 2024-11-15 | RED Canids        | W   | 0.851      | -            | -                | -                | 1 (0.851) |     9.58 | decenty, felps, noway, try, VINI  |
|           64 |      803 | 2024-11-14 | KRÜ               | W   | 0.844      | -            | -                | -                | 1 (0.844) |     3.24 | decenty, felps, noway, try, VINI  |
|           63 |      835 | 2024-11-12 | paiN              | L   | 0.837      | -            | -                | -                | -         |    -4.65 | decenty, felps, noway, try, VINI  |
|           62 |      849 | 2024-11-12 | MIBR              | L   | 0.832      | -            | -                | -                | -         |    -6.39 | decenty, felps, noway, try, VINI  |
|           61 |      867 | 2024-11-12 | Case              | W   | 0.831      | -            | -                | -                | 1 (0.831) |     2.59 | decenty, felps, noway, try, VINI  |
|           60 |     1192 | 2024-10-26 | The MongolZ       | L   | 0.721      | -            | -                | -                | -         |    -0.65 | decenty, felps, noway, try, VINI  |
|           59 |     1218 | 2024-10-25 | Ninjas in Pyjamas | W   | 0.714      | 0.477        | 0.079 (0.027)    | -                | 0 (0.000) |     8.73 | decenty, felps, noway, try, VINI  |
|           58 |     1247 | 2024-10-23 | Legacy            | W   | 0.701      | 0.477        | -                | 0.432 (0.144)    | 0 (0.000) |     8.91 | decenty, felps, noway, try, VINI  |
|           57 |     1248 | 2024-10-23 | Ninjas in Pyjamas | L   | 0.700      | -            | -                | -                | -         |   -13.54 | decenty, felps, noway, try, VINI  |
|           56 |     1358 | 2024-10-17 | RED Canids        | L   | 0.662      | -            | -                | -                | -         |   -13.27 | decenty, felps, noway, try, VINI  |
|           55 |     1390 | 2024-10-16 | Sharks            | W   | 0.655      | 0.450        | 0.105 (0.031)    | 0.600 (0.177)    | 0 (0.000) |     9.72 | decenty, felps, noway, try, VINI  |
|           54 |     1419 | 2024-10-15 | inSanitY          | L   | 0.649      | -            | -                | -                | -         |   -18.08 | decenty, felps, noway, try, VINI  |
|           53 |     1510 | 2024-10-09 | Solid             | W   | 0.609      | 0.450        | -                | 0.570 (0.156)    | 0 (0.000) |     3.90 | decenty, felps, noway, try, VINI  |
|           52 |     1513 | 2024-10-09 | Solid             | W   | 0.608      | 0.450        | -                | 0.570 (0.156)    | 0 (0.000) |     4.04 | decenty, felps, noway, try, VINI  |
|           51 |     1543 | 2024-10-08 | paiN              | W   | 0.602      | 0.450        | 0.251 (0.068)    | 0.645 (0.175)    | -         |    15.84 | decenty, felps, noway, try, VINI  |
|           50 |     1550 | 2024-10-08 | paiN              | L   | 0.602      | -            | -                | -                | -         |    -3.04 | decenty, felps, noway, try, VINI  |
|           49 |     1575 | 2024-10-07 | Complexity        | L   | 0.595      | -            | -                | -                | -         |    -4.36 | decenty, felps, noway, try, VINI  |
|           48 |     1587 | 2024-10-07 | Natus Vincere     | L   | 0.593      | -            | -                | -                | -         |    -0.50 | decenty, felps, noway, try, VINI  |
|           47 |     1597 | 2024-10-06 | MIBR              | L   | 0.589      | -            | -                | -                | -         |    -3.60 | decenty, felps, noway, try, VINI  |
|           46 |     1598 | 2024-10-06 | MIBR              | W   | 0.588      | 0.450        | 0.203 (0.054)    | 0.616 (0.163)    | -         |    15.24 | decenty, felps, noway, try, VINI  |
|           45 |     1664 | 2024-10-04 | RED Canids        | L   | 0.575      | -            | -                | -                | -         |   -11.01 | decenty, felps, noway, try, VINI  |
|           44 |     1732 | 2024-10-02 | Hype              | W   | 0.562      | -            | -                | -                | -         |     1.60 | decenty, felps, noway, VINI, zqkS |
|           43 |     1739 | 2024-10-02 | Hype              | W   | 0.562      | -            | -                | -                | -         |     1.62 | decenty, felps, noway, VINI, zqkS |
|           42 |     1784 | 2024-10-01 | Sharks            | W   | 0.555      | 0.450        | 0.105 (0.026)    | 0.600 (0.150)    | -         |     8.90 | decenty, felps, noway, try, VINI  |
|           41 |     1788 | 2024-10-01 | Sharks            | L   | 0.555      | -            | -                | -                | -         |    -8.78 | decenty, felps, noway, try, VINI  |
|           40 |     1820 | 2024-09-30 | Fluxo             | L   | 0.549      | -            | -                | -                | -         |   -10.53 | decenty, felps, noway, try, VINI  |
|           39 |     1822 | 2024-09-30 | Fluxo             | L   | 0.548      | -            | -                | -                | -         |   -11.02 | decenty, felps, noway, try, VINI  |
|           38 |     1973 | 2024-09-26 | Sharks            | W   | 0.520      | -            | -                | -                | -         |     7.77 | decenty, felps, noway, try, VINI  |
|           37 |     2014 | 2024-09-25 | BESTIA            | L   | 0.515      | -            | -                | -                | -         |   -12.04 | decenty, felps, noway, try, VINI  |
|           36 |     2018 | 2024-09-25 | BESTIA            | W   | 0.515      | 0.450        | 0.103 (0.024)    | 0.512 (0.119)    | -         |     4.18 | decenty, felps, noway, try, VINI  |
|           35 |     2023 | 2024-09-25 | BESTIA            | W   | 0.514      | -            | -                | -                | -         |     4.33 | decenty, felps, noway, try, VINI  |
|           34 |     2264 | 2024-09-18 | Spirit            | L   | 0.467      | -            | -                | -                | -         |    -0.17 | decenty, felps, noway, try, VINI  |
|           33 |     2365 | 2024-09-14 | M80               | L   | 0.441      | -            | -                | -                | -         |    -6.90 | decenty, felps, noway, try, VINI  |
|           32 |     2465 | 2024-09-11 | MOUZ              | W   | 0.421      | 0.889        | 0.666 (0.249)    | 0.480 (0.180)    | 1 (0.421) |    12.87 | decenty, felps, noway, try, VINI  |
|           31 |     2502 | 2024-09-10 | BIG               | W   | 0.414      | 0.889        | 0.243 (0.089)    | 0.475 (0.175)    | 1 (0.414) |     9.89 | decenty, felps, noway, try, VINI  |
|           30 |     2590 | 2024-09-06 | ODDIK             | W   | 0.389      | 0.450        | 0.092 (0.016)    | -                | -         |     3.01 | decenty, felps, noway, try, VINI  |
|           29 |     2591 | 2024-09-06 | ODDIK             | W   | 0.388      | 0.450        | 0.092 (0.016)    | -                | -         |     3.09 | decenty, felps, noway, try, VINI  |
|           28 |     2728 | 2024-09-02 | Galorys           | W   | 0.362      | -            | -                | -                | -         |     0.73 | decenty, felps, noway, try, VINI  |
|           27 |     2730 | 2024-09-02 | Galorys           | W   | 0.362      | -            | -                | -                | -         |     0.73 | decenty, felps, noway, try, VINI  |
|           26 |     2981 | 2024-08-26 | Players           | W   | 0.315      | -            | -                | -                | -         |     0.74 | decenty, felps, noway, try, VINI  |
|           25 |     2982 | 2024-08-26 | Players           | W   | 0.315      | -            | -                | -                | -         |     0.75 | decenty, felps, noway, try, VINI  |
|           24 |     3239 | 2024-08-20 | Dusty Roots       | W   | 0.275      | -            | -                | -                | -         |     1.20 | decenty, felps, noway, try, VINI  |
|           23 |     3240 | 2024-08-20 | Dusty Roots       | W   | 0.275      | -            | -                | -                | -         |     1.21 | decenty, felps, noway, try, VINI  |
|           22 |     3464 | 2024-08-12 | inSanitY          | W   | 0.222      | -            | -                | -                | -         |     0.73 | decenty, felps, noway, try, VINI  |
|           21 |     3469 | 2024-08-12 | inSanitY          | W   | 0.222      | -            | -                | -                | -         |     0.74 | decenty, felps, noway, try, VINI  |
|           20 |     3562 | 2024-08-09 | paiN              | L   | 0.199      | -            | -                | -                | -         |    -0.81 | decenty, felps, noway, try, VINI  |
|           19 |     3618 | 2024-08-07 | FURIA             | L   | 0.187      | -            | -                | -                | -         |    -0.47 | decenty, felps, noway, try, VINI  |
|           18 |     3957 | 2024-07-29 | paiN              | L   | 0.129      | -            | -                | -                | -         |    -0.54 | decenty, felps, noway, try, VINI  |
|           17 |     3960 | 2024-07-29 | MIBR              | W   | 0.128      | -            | -                | -                | -         |     3.66 | decenty, felps, noway, try, VINI  |
|           16 |     3985 | 2024-07-28 | paiN              | L   | 0.123      | -            | -                | -                | -         |    -0.50 | decenty, felps, noway, try, VINI  |
|           15 |     3993 | 2024-07-28 | MIBR              | W   | 0.121      | -            | -                | -                | -         |     3.47 | decenty, felps, noway, try, VINI  |
|           14 |     4039 | 2024-07-26 | Fluxo             | W   | 0.109      | -            | -                | -                | -         |     1.38 | decenty, felps, noway, try, VINI  |
|           13 |     4042 | 2024-07-26 | Sharks            | W   | 0.108      | -            | -                | -                | -         |     2.02 | decenty, felps, noway, try, VINI  |
|           12 |     4071 | 2024-07-25 | Solid             | W   | 0.102      | -            | -                | -                | -         |     0.57 | decenty, felps, noway, try, VINI  |
|           11 |     4075 | 2024-07-25 | Yawara            | W   | 0.102      | -            | -                | -                | -         |     0.20 | decenty, felps, noway, try, VINI  |
|           10 |     4145 | 2024-07-23 | Solid             | L   | 0.089      | -            | -                | -                | -         |    -2.31 | decenty, felps, noway, try, VINI  |
|            9 |     4153 | 2024-07-23 | Atrix             | W   | 0.088      | -            | -                | -                | -         |     0.17 | decenty, felps, noway, try, VINI  |
|            8 |     4239 | 2024-07-20 | paiN              | L   | 0.068      | -            | -                | -                | -         |    -0.27 | decenty, felps, noway, try, VINI  |
|            7 |     4327 | 2024-07-18 | BESTIA            | W   | 0.054      | -            | -                | -                | -         |     0.55 | decenty, felps, noway, try, VINI  |
|            6 |     4332 | 2024-07-18 | ODDIK             | L   | 0.054      | -            | -                | -                | -         |    -1.30 | decenty, felps, noway, try, VINI  |
|            5 |     4340 | 2024-07-18 | Amigos de T2M4SS  | W   | 0.053      | -            | -                | -                | -         |     0.02 | decenty, felps, noway, try, VINI  |
|            4 |     4380 | 2024-07-17 | KRÜ               | W   | 0.049      | -            | -                | -                | -         |     0.17 | decenty, felps, noway, try, VINI  |
|            3 |     4388 | 2024-07-17 | KRÜ               | W   | 0.048      | -            | -                | -                | -         |     0.17 | decenty, felps, noway, try, VINI  |
|            2 |     4506 | 2024-07-15 | Case              | L   | 0.034      | -            | -                | -                | -         |    -0.97 | decenty, felps, noway, VINI, zakk |
|            1 |     4509 | 2024-07-15 | Case              | L   | 0.034      | -            | -                | -                | -         |    -0.97 | decenty, felps, noway, VINI, zakk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($41,948.89)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.972 | $10,000.00     | $9,719.09       |
| 2024-10-26 |      0.722 | $20,000.00     | $14,434.70      |
| 2024-10-20 |      0.682 | $3,000.00      | $2,044.93       |
| 2024-10-13 |      0.635 | $4,000.00      | $2,538.07       |
| 2024-10-05 |      0.581 | $1,875.00      | $1,089.96       |
| 2024-09-22 |      0.494 | $23,500.00     | $11,619.07      |
| 2024-08-09 |      0.201 | $2,500.00      | $503.09         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
