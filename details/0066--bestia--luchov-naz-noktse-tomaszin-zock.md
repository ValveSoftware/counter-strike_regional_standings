### Roster Details<br />
Team Name: BESTIA<br />
Roster: luchov, naz, Noktse, tomaszin, zock<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [66](../standings_global.md)<br />
Regional Rank: [16]( ../standings_americas.md)<br />
Final Rank Value:  1029.6<br />
<br />
Final Rank Value (1029.6) = Starting Rank Value (1034.2) + Head To Head Adjustments (-4.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.435[<sup>1</sup>](#table2)
- Bounty Collected: 0.489[<sup>2</sup>](#table1)
- Opponent Network: 0.257[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.295<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1034.2
- 400 + ( ( 0.295 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1034.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           87 |       38 | 2024-07-16 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |   -13.59 | luchov, naz, Noktse, tomaszin, zock    |
|           86 |       42 | 2024-07-16 | ODDIK          | W   | 1.000      | 0.450        | 0.084 (0.038)    | 0.678 (0.305)    | 0 (0.000) |    18.11 | luchov, naz, Noktse, tomaszin, zock    |
|           85 |       53 | 2024-07-16 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |   -13.18 | luchov, naz, Noktse, tomaszin, zock    |
|           84 |      101 | 2024-07-15 | Vikings KR     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.64 | luchov, naz, Noktse, tomaszin, zock    |
|           83 |      133 | 2024-07-13 | Intense        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.21 | luchov, naz, Noktse, tomaszin, zock    |
|           82 |      145 | 2024-07-12 | SPORT          | L   | 1.000      | -            | -                | -                | -         |   -26.59 | luchov, naz, Noktse, tomaszin, zock    |
|           81 |      176 | 2024-07-10 | Sharks         | L   | 1.000      | -            | -                | -                | -         |   -16.94 | luchov, naz, Noktse, tomaszin, zock    |
|           80 |      202 | 2024-07-09 | SPORT          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.00 | luchov, naz, Noktse, tomaszin, zock    |
|           79 |      219 | 2024-07-08 | Intense        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.62 | luchov, naz, Noktse, tomaszin, zock    |
|           78 |      226 | 2024-07-08 | Bounty Hunters | L   | 1.000      | -            | -                | -                | -         |   -19.82 | luchov, naz, Noktse, tomaszin, zock    |
|           77 |      359 | 2024-06-15 | 9z             | L   | 0.986      | -            | -                | -                | -         |    -1.80 | luchov, meyern, naz, Noktse, tomaszin  |
|           76 |      390 | 2024-06-14 | paiN           | L   | 0.980      | -            | -                | -                | -         |    -2.95 | luchov, meyern, naz, Noktse, tomaszin  |
|           75 |      489 | 2024-06-10 | paiN           | L   | 0.956      | -            | -                | -                | -         |    -2.98 | luchov, meyern, naz, Noktse, tomaszin  |
|           74 |      491 | 2024-06-10 | Bounty Hunters | W   | 0.955      | -            | -                | -                | 0 (0.000) |     9.70 | luchov, meyern, naz, Noktse, tomaszin  |
|           73 |      523 | 2024-06-09 | RED Canids     | W   | 0.949      | 0.371        | 0.123 (0.043)    | 0.714 (0.251)    | 0 (0.000) |    21.99 | luchov, meyern, naz, Noktse, tomaszin  |
|           72 |      546 | 2024-06-09 | Sharks         | L   | 0.947      | -            | -                | -                | -         |   -14.00 | luchov, meyern, naz, Noktse, tomaszin  |
|           71 |      590 | 2024-06-08 | Solid          | W   | 0.942      | -            | -                | -                | 0 (0.000) |     8.73 | luchov, meyern, naz, Noktse, tomaszin  |
|           70 |      609 | 2024-06-08 | Vikings KR     | L   | 0.941      | -            | -                | -                | -         |   -24.26 | luchov, meyern, naz, Noktse, tomaszin  |
|           69 |      650 | 2024-06-07 | ODDIK          | W   | 0.935      | 0.450        | 0.084 (0.035)    | 0.678 (0.285)    | 0 (0.000) |     9.92 | luchov, meyern, naz, Noktse, tomaszin  |
|           68 |      710 | 2024-06-06 | inSanitY       | L   | 0.928      | -            | -                | -                | -         |   -17.70 | luchov, meyern, naz, Noktse, tomaszin  |
|           67 |      773 | 2024-06-05 | MIBR           | L   | 0.922      | -            | -                | -                | -         |    -1.81 | luchov, meyern, naz, Noktse, tomaszin  |
|           66 |      823 | 2024-06-04 | Sharks         | L   | 0.916      | -            | -                | -                | -         |   -16.02 | luchov, meyern, naz, Noktse, tomaszin  |
|           65 |     1139 | 2024-05-22 | Case           | W   | 0.829      | 0.450        | -                | 0.697 (0.260)    | 0 (0.000) |     7.70 | luchov, meyern, naz, Noktse, tomaszin  |
|           64 |     1143 | 2024-05-22 | Case           | W   | 0.828      | 0.450        | -                | 0.697 (0.260)    | -         |     8.19 | luchov, meyern, naz, Noktse, tomaszin  |
|           63 |     1149 | 2024-05-22 | Fluxo          | W   | 0.828      | 0.450        | 0.169 (0.063)    | 0.630 (0.235)    | -         |    14.99 | luchov, meyern, naz, Noktse, tomaszin  |
|           62 |     1150 | 2024-05-22 | Fluxo          | W   | 0.828      | 0.450        | 0.169 (0.063)    | 0.630 (0.235)    | -         |    16.08 | luchov, meyern, naz, Noktse, tomaszin  |
|           61 |     1184 | 2024-05-21 | Smoke          | W   | 0.822      | -            | -                | -                | -         |     2.90 | luchov, meyern, naz, Noktse, tomaszin  |
|           60 |     1187 | 2024-05-21 | Smoke          | W   | 0.822      | -            | -                | -                | -         |     2.98 | luchov, meyern, naz, Noktse, tomaszin  |
|           59 |     1193 | 2024-05-21 | Imperial       | W   | 0.821      | 0.450        | 0.386 (0.143)    | -                | -         |    23.28 | luchov, meyern, naz, Noktse, tomaszin  |
|           58 |     1195 | 2024-05-21 | Imperial       | W   | 0.821      | 0.450        | 0.386 (0.143)    | -                | -         |    23.83 | luchov, meyern, naz, Noktse, tomaszin  |
|           57 |     1223 | 2024-05-20 | Corinthians    | W   | 0.815      | -            | -                | -                | -         |     1.47 | luchov, meyern, naz, Noktse, tomaszin  |
|           56 |     1228 | 2024-05-20 | 9z             | W   | 0.814      | 0.450        | 0.606 (0.222)    | 0.728 (0.267)    | -         |    24.86 | luchov, meyern, naz, Noktse, tomaszin  |
|           55 |     1230 | 2024-05-20 | 9z             | L   | 0.814      | -            | -                | -                | -         |    -0.72 | luchov, meyern, naz, Noktse, tomaszin  |
|           54 |     1310 | 2024-05-17 | Solid          | L   | 0.795      | -            | -                | -                | -         |   -15.13 | luchov, meyern, naz, Noktse, tomaszin  |
|           53 |     1312 | 2024-05-17 | Solid          | W   | 0.795      | -            | -                | -                | -         |     9.92 | luchov, meyern, naz, Noktse, tomaszin  |
|           52 |     1396 | 2024-05-15 | ODDIK          | W   | 0.782      | 0.450        | 0.084 (0.029)    | 0.678 (0.239)    | -         |    12.65 | luchov, meyern, naz, Noktse, tomaszin  |
|           51 |     1398 | 2024-05-15 | ODDIK          | W   | 0.781      | 0.450        | -                | 0.678 (0.239)    | -         |    13.56 | luchov, meyern, naz, Noktse, tomaszin  |
|           50 |     1407 | 2024-05-15 | Hype           | L   | 0.781      | -            | -                | -                | -         |   -15.91 | luchov, meyern, naz, Noktse, tomaszin  |
|           49 |     1455 | 2024-05-14 | Imperial       | L   | 0.775      | -            | -                | -                | -         |    -1.70 | luchov, meyern, naz, Noktse, tomaszin  |
|           48 |     1468 | 2024-05-14 | RED Canids     | L   | 0.774      | -            | -                | -                | -         |    -6.37 | luchov, meyern, naz, Noktse, tomaszin  |
|           47 |     1508 | 2024-05-12 | Solid          | W   | 0.762      | -            | -                | -                | -         |    10.13 | luchov, meyern, naz, Noktse, tomaszin  |
|           46 |     1515 | 2024-05-12 | O PLANO        | W   | 0.761      | -            | -                | -                | -         |     1.87 | luchov, meyern, naz, Noktse, tomaszin  |
|           45 |     1539 | 2024-05-11 | paiN           | L   | 0.754      | -            | -                | -                | -         |    -1.08 | luchov, meyern, naz, Noktse, tomaszin  |
|           44 |     1565 | 2024-05-10 | Imperial       | W   | 0.748      | 0.435        | 0.386 (0.126)    | -                | -         |    22.15 | luchov, meyern, naz, Noktse, tomaszin  |
|           43 |     1581 | 2024-05-09 | Sharks         | W   | 0.742      | -            | -                | -                | -         |    13.66 | luchov, meyern, naz, Noktse, tomaszin  |
|           42 |     1610 | 2024-05-08 | Vikings KR     | W   | 0.734      | -            | -                | -                | -         |     8.39 | luchov, meyern, naz, Noktse, tomaszin  |
|           41 |     1642 | 2024-05-06 | Sharks         | L   | 0.722      | -            | -                | -                | -         |    -9.23 | luchov, meyern, naz, Noktse, tomaszin  |
|           40 |     1880 | 2024-04-25 | RED Canids     | L   | 0.649      | -            | -                | -                | -         |    -4.28 | luchov, meyern, naz, Noktse, tomaszin  |
|           39 |     1882 | 2024-04-25 | RED Canids     | L   | 0.648      | -            | -                | -                | -         |    -4.44 | luchov, meyern, naz, Noktse, tomaszin  |
|           38 |     2147 | 2024-04-16 | O PLANO        | L   | 0.589      | -            | -                | -                | -         |   -17.08 | luchov, meyern, naz, Noktse, tomaszin  |
|           37 |     2244 | 2024-04-11 | Galorys        | L   | 0.554      | -            | -                | -                | -         |   -10.45 | luchov, meyern, naz, Noktse, tomaszin  |
|           36 |     2326 | 2024-04-09 | Galorys        | L   | 0.542      | -            | -                | -                | -         |   -10.69 | luchov, meyern, naz, Noktse, tomaszin  |
|           35 |     2331 | 2024-04-09 | Galorys        | W   | 0.542      | -            | -                | -                | -         |     6.46 | luchov, meyern, naz, Noktse, tomaszin  |
|           34 |     2367 | 2024-04-08 | RED Canids     | L   | 0.535      | -            | -                | -                | -         |    -4.40 | luchov, meyern, naz, Noktse, tomaszin  |
|           33 |     2410 | 2024-04-07 | Sharks         | L   | 0.526      | -            | -                | -                | -         |   -12.49 | luchov, meyern, naz, Noktse, tomaszin  |
|           32 |     2417 | 2024-04-06 | Fluxo          | W   | 0.522      | -            | -                | -                | -         |    10.67 | luchov, meyern, naz, Noktse, tomaszin  |
|           31 |     2456 | 2024-04-04 | adalYamigos    | L   | 0.509      | -            | -                | -                | -         |   -13.99 | luchov, meyern, naz, Noktse, tomaszin  |
|           30 |     2460 | 2024-04-04 | adalYamigos    | W   | 0.509      | -            | -                | -                | -         |     2.00 | luchov, meyern, naz, Noktse, tomaszin  |
|           29 |     2472 | 2024-04-04 | Imperial       | L   | 0.508      | -            | -                | -                | -         |    -1.04 | luchov, meyern, naz, Noktse, tomaszin  |
|           28 |     2509 | 2024-04-03 | Fluxo          | L   | 0.501      | -            | -                | -                | -         |    -6.14 | luchov, meyern, naz, Noktse, tomaszin  |
|           27 |     2545 | 2024-04-02 | Sharks         | W   | 0.496      | -            | -                | -                | -         |     3.50 | luchov, meyern, naz, Noktse, tomaszin  |
|           26 |     2550 | 2024-04-02 | Fluxo          | L   | 0.495      | -            | -                | -                | -         |    -6.22 | luchov, meyern, naz, Noktse, tomaszin  |
|           25 |     2638 | 2024-03-27 | W7M            | L   | 0.455      | -            | -                | -                | -         |   -10.73 | luchov, meyern, naz, Noktse, tomaszin  |
|           24 |     2643 | 2024-03-27 | W7M            | W   | 0.455      | -            | -                | -                | -         |     3.62 | luchov, meyern, naz, Noktse, tomaszin  |
|           23 |     2953 | 2024-03-12 | RED Canids     | L   | 0.354      | -            | -                | -                | -         |    -3.35 | deco, luchov, meyern, Noktse, tomaszin |
|           22 |     2963 | 2024-03-11 | FURIA Academy  | W   | 0.349      | -            | -                | -                | -         |     0.68 | deco, luchov, meyern, Noktse, tomaszin |
|           21 |     2986 | 2024-03-10 | adalYamigos    | L   | 0.343      | -            | -                | -                | -         |    -9.64 | deco, luchov, meyern, Noktse, tomaszin |
|           20 |     3034 | 2024-03-08 | FURIA Academy  | W   | 0.329      | -            | -                | -                | -         |     0.60 | deco, luchov, meyern, Noktse, tomaszin |
|           19 |     3199 | 2024-03-02 | Wildcard       | L   | 0.287      | -            | -                | -                | -         |    -5.49 | deco, luchov, meyern, Noktse, tomaszin |
|           18 |     3216 | 2024-03-01 | Liquid         | L   | 0.282      | -            | -                | -                | -         |    -0.43 | deco, luchov, meyern, Noktse, tomaszin |
|           17 |     3340 | 2024-02-24 | Imperial       | L   | 0.241      | -            | -                | -                | -         |    -0.58 | deco, luchov, meyern, Noktse, tomaszin |
|           16 |     3359 | 2024-02-23 | 9z             | L   | 0.235      | -            | -                | -                | -         |    -0.15 | deco, luchov, meyern, Noktse, tomaszin |
|           15 |     3367 | 2024-02-22 | Imperial       | W   | 0.229      | -            | -                | -                | -         |     6.69 | deco, luchov, meyern, Noktse, tomaszin |
|           14 |     3376 | 2024-02-22 | 9z             | L   | 0.228      | -            | -                | -                | -         |    -0.14 | deco, luchov, meyern, Noktse, tomaszin |
|           13 |     3401 | 2024-02-21 | W7M            | W   | 0.220      | -            | -                | -                | -         |     1.82 | deco, luchov, meyern, Noktse, tomaszin |
|           12 |     3476 | 2024-02-18 | FURIA Academy  | W   | 0.201      | -            | -                | -                | -         |     0.37 | deco, luchov, meyern, Noktse, tomaszin |
|           11 |     3516 | 2024-02-16 | Case           | L   | 0.189      | -            | -                | -                | -         |    -3.49 | deco, luchov, meyern, Noktse, tomaszin |
|           10 |     3638 | 2024-02-12 | FURIA Academy  | W   | 0.162      | -            | -                | -                | -         |     0.29 | deco, luchov, meyern, Noktse, tomaszin |
|            9 |     3773 | 2024-02-02 | Imperial       | L   | 0.096      | -            | -                | -                | -         |    -0.23 | deco, luchov, meyern, Noktse, tomaszin |
|            8 |     3775 | 2024-02-02 | ODDIK          | W   | 0.096      | -            | -                | -                | -         |     1.52 | deco, luchov, meyern, Noktse, tomaszin |
|            7 |     3779 | 2024-02-02 | Imperial       | L   | 0.095      | -            | -                | -                | -         |    -0.22 | deco, luchov, meyern, Noktse, tomaszin |
|            6 |     3963 | 2024-01-23 | Imperial       | L   | 0.028      | -            | -                | -                | -         |    -0.07 | deco, luchov, meyern, Noktse, tomaszin |
|            5 |     3981 | 2024-01-22 | AJF            | W   | 0.022      | -            | -                | -                | -         |     0.02 | deco, luchov, meyern, Noktse, tomaszin |
|            4 |     4016 | 2024-01-21 | W7M            | W   | 0.015      | -            | -                | -                | -         |     0.12 | deco, luchov, meyern, Noktse, tomaszin |
|            3 |     4049 | 2024-01-20 | MIBR           | L   | 0.008      | -            | -                | -                | -         |    -0.01 | deco, luchov, meyern, Noktse, tomaszin |
|            2 |     4099 | 2024-01-19 | Imperial       | W   | 0.002      | -            | -                | -                | -         |     0.07 | deco, luchov, meyern, Noktse, tomaszin |
|            1 |     4103 | 2024-01-19 | Flamengo       | W   | 0.002      | -            | -                | -                | -         |     0.00 | deco, luchov, meyern, Noktse, tomaszin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,261.75)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.996 | $1,500.00      | $1,493.66       |
| 2024-06-10 |      0.956 | $4,000.00      | $3,822.27       |
| 2024-06-09 |      0.948 | $2,000.00      | $1,896.90       |
| 2024-05-12 |      0.762 | $5,000.00      | $3,808.54       |
| 2024-02-25 |      0.248 | $5,000.00      | $1,240.38       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
