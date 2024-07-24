### Roster Details<br />
Team Name: Imperial<br />
Roster: decenty, felps, noway, try, VINI<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [27](../standings_global.md)<br />
Regional Rank: [8]( ../standings_americas.md)<br />
Final Rank Value:  1219.6<br />
<br />
Final Rank Value (1219.6) = Starting Rank Value (1360.9) + Head To Head Adjustments (-141.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.667[<sup>1</sup>](#table2)
- Bounty Collected: 0.539[<sup>2</sup>](#table1)
- Opponent Network: 0.243[<sup>2</sup>](#table1)
- LAN Wins: 0.449[<sup>2</sup>](#table1)

The average of these factors is 0.475<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1360.9
- 400 + ( ( 0.475 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1360.9


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
|           97 |       24 | 2024-07-23 | Solid             | L   | 1.000      | -            | -                | -                | -         |   -26.55 | decenty, felps, noway, try, VINI  |
|           96 |       32 | 2024-07-23 | Atrix             | W   | 1.000      | -            | -                | -                | -         |     1.08 | decenty, felps, noway, try, VINI  |
|           95 |      118 | 2024-07-20 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -9.37 | decenty, felps, noway, try, VINI  |
|           94 |      206 | 2024-07-18 | BESTIA            | W   | 1.000      | -            | -                | -                | -         |     5.74 | decenty, felps, noway, try, VINI  |
|           93 |      211 | 2024-07-18 | ODDIK             | L   | 1.000      | -            | -                | -                | -         |   -23.90 | decenty, felps, noway, try, VINI  |
|           92 |      219 | 2024-07-18 | Amigos de T2M4SS  | W   | 1.000      | -            | -                | -                | -         |     0.24 | decenty, felps, noway, try, VINI  |
|           91 |      259 | 2024-07-17 | KRÜ               | W   | 1.000      | 0.450        | -                | 0.477 (0.215)    | -         |     3.21 | decenty, felps, noway, try, VINI  |
|           90 |      267 | 2024-07-17 | KRÜ               | W   | 1.000      | 0.450        | -                | 0.477 (0.215)    | -         |     3.31 | decenty, felps, noway, try, VINI  |
|           89 |      385 | 2024-07-15 | Case              | L   | 1.000      | -            | -                | -                | -         |   -27.96 | decenty, felps, noway, VINI, zakk |
|           88 |      388 | 2024-07-15 | Case              | L   | 1.000      | -            | -                | -                | -         |   -28.85 | decenty, felps, noway, VINI, zakk |
|           87 |      635 | 2024-06-15 | fnatic            | L   | 0.940      | -            | -                | -                | -         |    -9.95 | decenty, felps, HEN1, noway, VINI |
|           86 |      662 | 2024-06-14 | KOI               | L   | 0.935      | -            | -                | -                | -         |   -23.76 | decenty, felps, HEN1, noway, VINI |
|           85 |      787 | 2024-06-10 | paiN              | L   | 0.906      | -            | -                | -                | -         |   -12.94 | decenty, felps, HEN1, noway, VINI |
|           84 |      815 | 2024-06-09 | RED Canids        | W   | 0.901      | 0.450        | 0.102 (0.041)    | 0.793 (0.322)    | -         |     8.50 | decenty, felps, HEN1, noway, VINI |
|           83 |      831 | 2024-06-09 | ODDIK             | W   | 0.900      | 0.371        | -                | 0.694 (0.231)    | -         |     2.47 | decenty, felps, HEN1, noway, VINI |
|           82 |      876 | 2024-06-08 | 9z                | W   | 0.895      | 0.450        | 0.511 (0.206)    | 0.671 (0.270)    | -         |    20.32 | decenty, felps, HEN1, noway, VINI |
|           81 |      936 | 2024-06-07 | Galorys           | W   | 0.888      | -            | -                | -                | -         |     1.68 | decenty, felps, HEN1, noway, VINI |
|           80 |      990 | 2024-06-06 | RED Canids        | L   | 0.881      | -            | -                | -                | -         |   -19.14 | decenty, felps, HEN1, noway, VINI |
|           79 |     1059 | 2024-06-05 | Sharks            | W   | 0.875      | 0.450        | -                | 0.538 (0.212)    | -         |     4.22 | decenty, felps, HEN1, noway, VINI |
|           78 |     1428 | 2024-05-22 | 9z                | W   | 0.781      | 0.450        | 0.511 (0.180)    | 0.671 (0.236)    | -         |    17.03 | decenty, felps, HEN1, noway, VINI |
|           77 |     1430 | 2024-05-22 | 9z                | W   | 0.781      | 0.450        | 0.511 (0.180)    | 0.671 (0.236)    | -         |    18.02 | decenty, felps, HEN1, noway, VINI |
|           76 |     1440 | 2024-05-22 | Sharks            | L   | 0.780      | -            | -                | -                | -         |   -20.86 | decenty, felps, HEN1, noway, VINI |
|           75 |     1444 | 2024-05-22 | Sharks            | W   | 0.780      | -            | -                | -                | -         |     3.51 | decenty, felps, HEN1, noway, VINI |
|           74 |     1481 | 2024-05-21 | BESTIA            | L   | 0.774      | -            | -                | -                | -         |   -20.79 | decenty, felps, HEN1, noway, VINI |
|           73 |     1483 | 2024-05-21 | BESTIA            | L   | 0.774      | -            | -                | -                | -         |   -21.45 | decenty, felps, HEN1, noway, VINI |
|           72 |     1640 | 2024-05-16 | 9z                | W   | 0.741      | 0.384        | 0.511 (0.145)    | -                | -         |    17.49 | decenty, felps, HEN1, noway, VINI |
|           71 |     1697 | 2024-05-15 | Fluxo             | W   | 0.733      | 0.384        | 0.157 (0.044)    | -                | -         |     5.27 | decenty, felps, HEN1, noway, VINI |
|           70 |     1731 | 2024-05-14 | W7M               | W   | 0.728      | -            | -                | -                | -         |     1.04 | decenty, felps, HEN1, noway, VINI |
|           69 |     1734 | 2024-05-14 | W7M               | W   | 0.728      | -            | -                | -                | -         |     1.05 | decenty, felps, HEN1, noway, VINI |
|           68 |     1743 | 2024-05-14 | BESTIA            | W   | 0.728      | -            | -                | -                | -         |     2.55 | decenty, felps, HEN1, noway, VINI |
|           67 |     1784 | 2024-05-13 | KRÜ               | W   | 0.719      | -            | -                | -                | -         |     1.77 | decenty, felps, HEN1, noway, VINI |
|           66 |     1853 | 2024-05-10 | BESTIA            | L   | 0.700      | -            | -                | -                | -         |   -19.89 | decenty, felps, HEN1, noway, VINI |
|           65 |     1911 | 2024-05-07 | ODDIK             | W   | 0.682      | -            | -                | -                | -         |     2.37 | decenty, felps, HEN1, noway, VINI |
|           64 |     1951 | 2024-05-05 | inSanitY          | W   | 0.666      | -            | -                | -                | -         |     1.69 | decenty, felps, HEN1, noway, VINI |
|           63 |     2149 | 2024-04-26 | SAW               | L   | 0.606      | -            | -                | -                | -         |   -14.09 | decenty, felps, HEN1, noway, VINI |
|           62 |     2192 | 2024-04-24 | Eternal Fire      | L   | 0.594      | -            | -                | -                | -         |    -3.16 | decenty, felps, HEN1, noway, VINI |
|           61 |     2211 | 2024-04-23 | FaZe              | L   | 0.587      | -            | -                | -                | -         |    -1.55 | decenty, felps, HEN1, noway, VINI |
|           60 |     2263 | 2024-04-20 | paiN              | L   | 0.568      | -            | -                | -                | -         |    -6.83 | decenty, felps, HEN1, noway, VINI |
|           59 |     2294 | 2024-04-20 | paiN              | W   | 0.563      | 0.589        | 0.393 (0.130)    | 0.825 (0.274)    | 1 (0.563) |    11.02 | decenty, felps, HEN1, noway, VINI |
|           58 |     2308 | 2024-04-19 | paiN              | L   | 0.561      | -            | -                | -                | -         |    -6.58 | decenty, felps, HEN1, noway, VINI |
|           57 |     2345 | 2024-04-18 | MIBR              | L   | 0.556      | -            | -                | -                | -         |    -6.26 | decenty, felps, HEN1, noway, VINI |
|           56 |     2348 | 2024-04-18 | 9z                | W   | 0.555      | 0.589        | 0.511 (0.167)    | 0.671 (0.219)    | 1 (0.555) |    13.91 | decenty, felps, HEN1, noway, VINI |
|           55 |     2349 | 2024-04-18 | Fluxo             | W   | 0.555      | -            | -                | -                | -         |     3.16 | decenty, felps, HEN1, noway, VINI |
|           54 |     2360 | 2024-04-18 | Metizport         | W   | 0.553      | -            | -                | -                | 1 (0.553) |     1.67 | decenty, felps, HEN1, noway, VINI |
|           53 |     2463 | 2024-04-15 | MIBR              | L   | 0.534      | -            | -                | -                | -         |    -6.19 | decenty, felps, HEN1, noway, VINI |
|           52 |     2478 | 2024-04-14 | paiN              | W   | 0.527      | 0.435        | 0.393 (0.090)    | -                | -         |    10.70 | decenty, felps, HEN1, noway, VINI |
|           51 |     2488 | 2024-04-13 | RED Canids        | W   | 0.522      | -            | -                | -                | -         |     3.48 | decenty, felps, HEN1, noway, VINI |
|           50 |     2524 | 2024-04-11 | adalYamigos       | W   | 0.508      | -            | -                | -                | -         |     0.31 | decenty, felps, HEN1, noway, VINI |
|           49 |     2534 | 2024-04-11 | paiN              | L   | 0.506      | -            | -                | -                | -         |    -5.51 | decenty, felps, HEN1, noway, VINI |
|           48 |     2561 | 2024-04-10 | Fluxo             | L   | 0.501      | -            | -                | -                | -         |   -13.13 | decenty, felps, HEN1, noway, VINI |
|           47 |     2565 | 2024-04-10 | Fluxo             | W   | 0.501      | -            | -                | -                | -         |     2.63 | decenty, felps, HEN1, noway, VINI |
|           46 |     2581 | 2024-04-10 | MIBR              | L   | 0.500      | -            | -                | -                | -         |    -6.31 | decenty, felps, HEN1, noway, VINI |
|           45 |     2627 | 2024-04-09 | Solid             | W   | 0.494      | -            | -                | -                | -         |     0.98 | decenty, felps, HEN1, noway, VINI |
|           44 |     2632 | 2024-04-09 | Solid             | W   | 0.494      | -            | -                | -                | -         |     0.99 | decenty, felps, HEN1, noway, VINI |
|           43 |     2637 | 2024-04-09 | paiN              | W   | 0.493      | -            | -                | -                | -         |    10.06 | decenty, felps, HEN1, noway, VINI |
|           42 |     2691 | 2024-04-07 | RED Canids        | W   | 0.481      | -            | -                | -                | -         |     2.95 | decenty, felps, HEN1, noway, VINI |
|           41 |     2694 | 2024-04-07 | FURIA Academy     | W   | 0.480      | -            | -                | -                | -         |     0.14 | decenty, felps, HEN1, noway, VINI |
|           40 |     2752 | 2024-04-04 | ODDIK             | W   | 0.461      | -            | -                | -                | -         |     1.53 | decenty, felps, HEN1, noway, VINI |
|           39 |     2757 | 2024-04-04 | ODDIK             | W   | 0.461      | -            | -                | -                | -         |     1.55 | decenty, felps, HEN1, noway, VINI |
|           38 |     2760 | 2024-04-04 | BESTIA            | W   | 0.461      | -            | -                | -                | -         |     1.73 | decenty, felps, HEN1, noway, VINI |
|           37 |     2790 | 2024-04-03 | Case              | W   | 0.455      | -            | -                | -                | -         |     1.04 | decenty, felps, HEN1, noway, VINI |
|           36 |     2793 | 2024-04-03 | Case              | W   | 0.454      | -            | -                | -                | -         |     1.05 | decenty, felps, HEN1, noway, VINI |
|           35 |     2997 | 2024-03-23 | FaZe              | L   | 0.379      | -            | -                | -                | -         |    -1.09 | decenty, felps, HEN1, noway, VINI |
|           34 |     3010 | 2024-03-22 | Vitality          | L   | 0.372      | -            | -                | -                | -         |    -0.65 | decenty, felps, HEN1, noway, VINI |
|           33 |     3020 | 2024-03-21 | Spirit            | L   | 0.367      | -            | -                | -                | -         |    -0.51 | decenty, felps, HEN1, noway, VINI |
|           32 |     3038 | 2024-03-21 | Virtus.pro        | W   | 0.365      | 1.000        | 0.595 (0.217)    | -                | 1 (0.365) |    10.60 | decenty, felps, HEN1, noway, VINI |
|           31 |     3057 | 2024-03-20 | GamerLegion       | W   | 0.359      | -            | -                | -                | 1 (0.359) |     0.71 | decenty, felps, HEN1, noway, VINI |
|           30 |     3070 | 2024-03-19 | Gaimin Gladiators | L   | 0.354      | -            | -                | -                | -         |    -9.45 | decenty, felps, HEN1, noway, VINI |
|           29 |     3086 | 2024-03-18 | Apeks             | W   | 0.345      | -            | -                | -                | 1 (0.345) |     1.12 | decenty, felps, HEN1, noway, VINI |
|           28 |     3104 | 2024-03-17 | HEROIC            | L   | 0.340      | -            | -                | -                | -         |    -2.17 | decenty, felps, HEN1, noway, VINI |
|           27 |     3113 | 2024-03-17 | ENCE              | W   | 0.339      | -            | -                | -                | 1 (0.339) |     6.07 | decenty, felps, HEN1, noway, VINI |
|           26 |     3343 | 2024-03-07 | Monte             | L   | 0.275      | -            | -                | -                | -         |    -7.35 | decenty, felps, HEN1, noway, VINI |
|           25 |     3461 | 2024-03-03 | paiN              | W   | 0.247      | -            | -                | -                | 1 (0.247) |     5.14 | decenty, felps, HEN1, noway, VINI |
|           24 |     3492 | 2024-03-02 | M80               | W   | 0.240      | -            | -                | -                | 1 (0.240) |     3.09 | decenty, felps, HEN1, noway, VINI |
|           23 |     3505 | 2024-03-01 | NRG               | W   | 0.234      | -            | -                | -                | 1 (0.234) |     0.44 | decenty, felps, HEN1, noway, VINI |
|           22 |     3596 | 2024-02-25 | Fluxo             | L   | 0.201      | -            | -                | -                | -         |    -5.30 | decenty, felps, HEN1, noway, VINI |
|           21 |     3628 | 2024-02-24 | BESTIA            | W   | 0.194      | -            | -                | -                | -         |     0.87 | decenty, felps, HEN1, noway, VINI |
|           20 |     3655 | 2024-02-22 | BESTIA            | L   | 0.182      | -            | -                | -                | -         |    -4.94 | decenty, felps, HEN1, noway, VINI |
|           19 |     3665 | 2024-02-22 | FURIA             | L   | 0.181      | -            | -                | -                | -         |    -0.47 | decenty, felps, HEN1, noway, VINI |
|           18 |     3680 | 2024-02-21 | 2GAME             | W   | 0.175      | -            | -                | -                | -         |     0.12 | decenty, felps, HEN1, noway, VINI |
|           17 |     3684 | 2024-02-21 | 2GAME             | W   | 0.175      | -            | -                | -                | -         |     0.12 | decenty, felps, HEN1, noway, VINI |
|           16 |     3693 | 2024-02-21 | LA RUGONETA       | W   | 0.172      | -            | -                | -                | -         |     0.06 | decenty, felps, HEN1, noway, VINI |
|           15 |     3785 | 2024-02-17 | adalYamigos       | W   | 0.147      | -            | -                | -                | -         |     0.07 | decenty, felps, HEN1, noway, VINI |
|           14 |     3814 | 2024-02-16 | Galorys           | W   | 0.140      | -            | -                | -                | -         |     0.26 | decenty, felps, HEN1, noway, VINI |
|           13 |     3817 | 2024-02-16 | Galorys           | W   | 0.140      | -            | -                | -                | -         |     0.26 | decenty, felps, HEN1, noway, VINI |
|           12 |     3834 | 2024-02-15 | 9z                | W   | 0.135      | -            | -                | -                | -         |     3.49 | decenty, felps, HEN1, noway, VINI |
|           11 |     3836 | 2024-02-15 | Fluxo             | W   | 0.135      | -            | -                | -                | -         |     0.68 | decenty, felps, HEN1, noway, VINI |
|           10 |     3841 | 2024-02-15 | Solid             | W   | 0.134      | -            | -                | -                | -         |     0.31 | decenty, felps, HEN1, noway, VINI |
|            9 |     3871 | 2024-02-14 | Yawara            | W   | 0.128      | -            | -                | -                | -         |     0.04 | decenty, felps, HEN1, noway, VINI |
|            8 |     3908 | 2024-02-13 | RED Canids        | W   | 0.122      | -            | -                | -                | -         |     0.78 | decenty, felps, HEN1, noway, VINI |
|            7 |     3912 | 2024-02-13 | RED Canids        | L   | 0.121      | -            | -                | -                | -         |    -3.07 | decenty, felps, HEN1, noway, VINI |
|            6 |     3915 | 2024-02-13 | Solid             | W   | 0.121      | -            | -                | -                | -         |     0.28 | decenty, felps, HEN1, noway, VINI |
|            5 |     4012 | 2024-02-04 | 9z                | W   | 0.061      | -            | -                | -                | -         |     1.58 | decenty, felps, HEN1, noway, VINI |
|            4 |     4035 | 2024-02-03 | MIBR              | W   | 0.055      | -            | -                | -                | -         |     1.11 | decenty, felps, HEN1, noway, VINI |
|            3 |     4061 | 2024-02-02 | BESTIA            | W   | 0.049      | -            | -                | -                | -         |     0.22 | decenty, felps, HEN1, noway, VINI |
|            2 |     4065 | 2024-02-02 | 9z                | L   | 0.048      | -            | -                | -                | -         |    -0.27 | decenty, felps, HEN1, noway, VINI |
|            1 |     4067 | 2024-02-02 | BESTIA            | W   | 0.048      | -            | -                | -                | -         |     0.21 | decenty, felps, HEN1, noway, VINI |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($87,689.95)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.32) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.949 | $1,500.00      | $1,422.83       |
| 2024-06-10 |      0.908 | $1,500.00      | $1,362.51       |
| 2024-06-09 |      0.901 | $20,000.00     | $18,024.49      |
| 2024-05-16 |      0.741 | $20,000.00     | $14,810.10      |
| 2024-05-12 |      0.713 | $3,500.00      | $2,495.57       |
| 2024-04-20 |      0.568 | $50,000.00     | $28,398.27      |
| 2024-04-15 |      0.534 | $15,000.00     | $8,016.57       |
| 2024-03-31 |      0.434 | $20,000.00     | $8,676.06       |
| 2024-03-10 |      0.294 | $5,000.00      | $1,470.78       |
| 2024-02-25 |      0.201 | $15,000.00     | $3,012.77       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
