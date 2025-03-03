### Roster Details<br />
Team Name: HOTU<br />
Roster: kade0, lampada, mizu, Re1GN, youka<br />
Global Rank: [151](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [100]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  683.8<br />
<br />
Final Rank Value (683.8) = Starting Rank Value (648.9) + Head To Head Adjustments (34.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.218[<sup>1</sup>](#table2)
- Bounty Collected: 0.269[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 648.9
- 400 + ( ( 0.129 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 648.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |       30 | 2025-02-27 | ATOX              | L   | 1.000      | -            | -                | -                | -         |    -3.93 | kade0, lampada, mizu, Re1GN, youka         |
|           41 |       44 | 2025-02-26 | Chinggis Warriors | L   | 1.000      | -            | -                | -                | -         |   -12.25 | kade0, lampada, mizu, Re1GN, youka         |
|           40 |       62 | 2025-02-25 | NomadS            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.34 | kade0, lampada, mizu, Re1GN, youka         |
|           39 |       90 | 2025-02-23 | ATOX              | W   | 1.000      | 0.143        | 0.057 (0.008)    | 0.651 (0.093)    | 0 (0.000) |    27.48 | kade0, lampada, mizu, Re1GN, youka         |
|           38 |     1483 | 2024-11-16 | Chimera           | L   | 0.485      | -            | -                | -                | -         |    -4.42 | fineshine52, kade0, lampada, mizu, Re1GN   |
|           37 |     1513 | 2024-11-15 | WOPA              | W   | 0.478      | 0.143        | 0.028 (0.002)    | 0.517 (0.035)    | 0 (0.000) |    10.06 | fineshine52, kade0, lampada, mizu, Re1GN   |
|           36 |     1556 | 2024-11-14 | Daystar           | W   | 0.472      | -            | -                | -                | 0 (0.000) |     6.25 | anttzz, fineshine52, kade0, lampada, Re1GN |
|           35 |     1584 | 2024-11-13 | WOPA              | L   | 0.465      | -            | -                | -                | -         |    -4.74 | fineshine52, kade0, lampada, mizu, Re1GN   |
|           34 |     1739 | 2024-11-06 | Zero Tenacity     | L   | 0.419      | -            | -                | -                | -         |    -3.55 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           33 |     1773 | 2024-11-04 | Johnny Speeds     | L   | 0.407      | -            | -                | -                | -         |    -2.64 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           32 |     1839 | 2024-11-01 | Chimera           | L   | 0.387      | -            | -                | -                | -         |    -3.59 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           31 |     1846 | 2024-11-01 | Gaimin Gladiators | L   | 0.386      | -            | -                | -                | -         |    -7.38 | abiraju, anttzz, lampada, mizu, Re1GN      |
|           30 |     1909 | 2024-10-29 | SINNERS           | W   | 0.366      | 0.384        | 0.026 (0.004)    | 0.503 (0.071)    | 0 (0.000) |     8.88 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           29 |     1940 | 2024-10-27 | 9INE              | L   | 0.352      | -            | -                | -                | -         |    -4.07 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           28 |     2002 | 2024-10-24 | UNiTY             | W   | 0.333      | 0.143        | 0.026 (0.001)    | 0.238 (0.011)    | 0 (0.000) |     6.86 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           27 |     2037 | 2024-10-21 | 9INE              | L   | 0.312      | -            | -                | -                | -         |    -3.73 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           26 |     2140 | 2024-10-17 | TSM               | W   | 0.285      | 0.384        | 0.009 (0.001)    | 0.159 (0.017)    | 0 (0.000) |     5.28 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           25 |     2195 | 2024-10-15 | ALTERNATE aTTaX   | W   | 0.272      | 0.143        | 0.020 (0.001)    | 0.371 (0.014)    | 0 (0.000) |     6.50 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           24 |     2245 | 2024-10-11 | Tricked           | L   | 0.246      | -            | -                | -                | -         |    -2.33 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           23 |     2298 | 2024-10-09 | 500               | L   | 0.231      | -            | -                | -                | -         |    -1.10 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           22 |     2404 | 2024-10-06 | CYBERSHOKE        | L   | 0.212      | -            | -                | -                | -         |    -1.94 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           21 |     2472 | 2024-10-04 | RUBY              | W   | 0.199      | -            | -                | -                | 0 (0.000) |     1.93 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           20 |     2547 | 2024-10-02 | FAVBET            | L   | 0.186      | -            | -                | -                | -         |    -1.86 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           19 |     2559 | 2024-10-02 | Tricked           | W   | 0.184      | 0.143        | 0.033 (0.001)    | 0.768 (0.020)    | 0 (0.000) |     4.06 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           18 |     2604 | 2024-10-01 | GUN5              | L   | 0.179      | -            | -                | -                | -         |    -0.94 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           17 |     2611 | 2024-10-01 | ALTERNATE aTTaX   | L   | 0.178      | -            | -                | -                | -         |    -1.34 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           16 |     2663 | 2024-09-29 | AMKAL             | W   | 0.164      | 0.143        | -                | 0.471 (0.011)    | -         |     2.42 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           15 |     2693 | 2024-09-28 | ENCE Academy      | W   | 0.159      | 0.143        | 0.008 (0.000)    | -                | -         |     3.19 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           14 |     2843 | 2024-09-25 | Daystar           | W   | 0.139      | -            | -                | -                | -         |     1.93 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           13 |     2888 | 2024-09-24 | ENCE Academy      | L   | 0.133      | -            | -                | -                | -         |    -1.51 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           12 |     2953 | 2024-09-22 | ARCRED            | W   | 0.120      | 0.384        | 0.015 (0.001)    | 0.285 (0.013)    | -         |     2.22 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           11 |     2960 | 2024-09-22 | WW                | L   | 0.118      | -            | -                | -                | -         |    -2.61 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           10 |     2978 | 2024-09-21 | GenOne            | W   | 0.113      | -            | -                | -                | -         |     2.31 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|            9 |     2998 | 2024-09-20 | AMKAL             | L   | 0.107      | -            | -                | -                | -         |    -1.88 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|            8 |     3040 | 2024-09-19 | CYBERSHOKE        | L   | 0.100      | -            | -                | -                | -         |    -0.84 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|            7 |     3050 | 2024-09-19 | GenOne            | W   | 0.098      | -            | -                | -                | -         |     2.00 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|            6 |     3221 | 2024-09-13 | FAVBET            | L   | 0.060      | -            | -                | -                | -         |    -0.57 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|            5 |     3234 | 2024-09-13 | ex-Enterprise     | W   | 0.059      | -            | -                | -                | -         |     1.08 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|            4 |     3286 | 2024-09-11 | Passion UA        | W   | 0.047      | 0.372        | 0.041 (0.001)    | 0.575 (0.010)    | -         |     1.29 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|            3 |     3357 | 2024-09-08 | Spirit Academy    | L   | 0.027      | -            | -                | -                | -         |    -0.17 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|            2 |     3446 | 2024-09-05 | MOUZ NXT          | W   | 0.007      | -            | -                | -                | -         |     0.07 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|            1 |     3460 | 2024-09-05 | RUSH B            | W   | 0.006      | -            | -                | -                | -         |     0.15 | anttzz, fineshine52, lampada, mizu, Re1GN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($84.83)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.113 | $750.00        | $84.83          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
