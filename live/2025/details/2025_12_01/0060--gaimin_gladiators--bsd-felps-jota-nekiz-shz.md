### Roster Details<br />
Team Name: Gaimin Gladiators<br />
Roster: bsd, felps, JOTA, NEKIZ, shz<br />
Global Rank: [60](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [13]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  1128.4<br />
<br />
Final Rank Value (1128.4) = Starting Rank Value (1079.2) + Head To Head Adjustments (49.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.368[<sup>1</sup>](#table2)
- Bounty Collected: 0.344[<sup>2</sup>](#table1)
- Opponent Network: 0.197[<sup>2</sup>](#table1)
- LAN Wins: 0.518[<sup>2</sup>](#table1)

The average of these factors is 0.357<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1079.2
- 400 + ( ( 0.357 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1079.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           54 |      219 | 2025-11-20 | 9z             | W   | 1.000      | 0.143        | 0.088 (0.013)    | -                | 0 (0.000) |    19.77 | bsd, felps, JOTA, NEKIZ, shz  |
|           53 |      261 | 2025-11-19 | BESTIA         | W   | 1.000      | 0.143        | 0.077 (0.011)    | -                | 0 (0.000) |    19.02 | bsd, felps, JOTA, NEKIZ, shz  |
|           52 |      317 | 2025-11-15 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |   -12.96 | bsd, felps, JOTA, NEKIZ, shz  |
|           51 |      339 | 2025-11-14 | Sharks         | W   | 1.000      | 0.371        | 0.081 (0.030)    | 0.626 (0.232)    | 0 (0.000) |    23.95 | bsd, felps, JOTA, NEKIZ, shz  |
|           50 |      380 | 2025-11-12 | Galorys        | W   | 1.000      | 0.371        | -                | 0.625 (0.232)    | 0 (0.000) |    12.05 | bsd, felps, JOTA, NEKIZ, shz  |
|           49 |      514 | 2025-11-08 | Sharks         | L   | 1.000      | -            | -                | -                | -         |    -7.25 | bsd, felps, JOTA, NEKIZ, shz  |
|           48 |      560 | 2025-11-07 | Bounty Hunters | W   | 1.000      | 0.333        | -                | 0.615 (0.205)    | 1 (1.000) |    11.24 | bsd, felps, JOTA, NEKIZ, shz  |
|           47 |      648 | 2025-11-06 | Charrados      | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.75 | bsd, felps, JOTA, NEKIZ, shz  |
|           46 |      649 | 2025-11-06 | Bounty Hunters | L   | 1.000      | -            | -                | -                | -         |   -20.39 | bsd, felps, JOTA, NEKIZ, shz  |
|           45 |      917 | 2025-10-27 | LP             | L   | 0.969      | -            | -                | -                | -         |   -25.71 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           44 |      964 | 2025-10-26 | Sharks         | L   | 0.962      | -            | -                | -                | -         |    -9.12 | bsd, horvy, JOTA, NEKIZ, shz  |
|           43 |     1081 | 2025-10-24 | Bounty Hunters | W   | 0.948      | 0.363        | -                | 0.615 (0.211)    | -         |     6.06 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           42 |     1224 | 2025-10-19 | RED Canids     | W   | 0.915      | 0.363        | 0.021 (0.007)    | -                | -         |    17.15 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           41 |     1241 | 2025-10-18 | Dusty Roots    | W   | 0.908      | 0.363        | -                | 0.487 (0.161)    | -         |     9.80 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           40 |     1295 | 2025-10-16 | ODDIK          | W   | 0.895      | 0.363        | 0.026 (0.008)    | -                | -         |    16.26 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           39 |     1307 | 2025-10-16 | Yawara         | L   | 0.893      | -            | -                | -                | -         |   -21.65 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           38 |     1332 | 2025-10-15 | Keyd Stars     | W   | 0.889      | 0.363        | 0.021 (0.007)    | 0.605 (0.195)    | -         |    14.66 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           37 |     1368 | 2025-10-14 | Fake do Biru   | W   | 0.882      | 0.363        | -                | 0.513 (0.164)    | -         |     9.36 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           36 |     1498 | 2025-10-09 | Four Magic     | W   | 0.848      | -            | -                | -                | -         |     1.62 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           35 |     1547 | 2025-10-08 | ODDIK          | L   | 0.842      | -            | -                | -                | -         |   -10.87 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           34 |     1669 | 2025-10-06 | Galorys        | W   | 0.827      | 0.363        | -                | 0.625 (0.188)    | -         |     9.65 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           33 |     1724 | 2025-10-05 | JERSA          | W   | 0.821      | -            | -                | -                | -         |     0.75 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           32 |     1820 | 2025-10-03 | Fake do Biru   | L   | 0.807      | -            | -                | -                | -         |   -17.30 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           31 |     1845 | 2025-10-02 | Imperial       | L   | 0.804      | -            | -                | -                | -         |    -3.52 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           30 |     1847 | 2025-10-02 | Fake do Biru   | W   | 0.803      | -            | -                | -                | 1 (0.803) |     7.81 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           29 |     1923 | 2025-09-30 | ODDIK          | L   | 0.789      | -            | -                | -                | -         |   -10.43 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           28 |     1967 | 2025-09-29 | Imperial       | L   | 0.783      | -            | -                | -                | -         |    -3.32 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           27 |     1968 | 2025-09-29 | Keyd Stars     | W   | 0.782      | 0.390        | 0.021 (0.006)    | 0.605 (0.185)    | 1 (0.782) |    13.58 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           26 |     1999 | 2025-09-28 | 9z             | W   | 0.776      | 0.390        | 0.088 (0.027)    | 0.664 (0.201)    | 1 (0.776) |    17.25 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           25 |     2002 | 2025-09-28 | Yawara         | W   | 0.775      | -            | -                | -                | 1 (0.775) |     5.88 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           24 |     2054 | 2025-09-27 | Sharks         | L   | 0.769      | -            | -                | -                | -         |    -5.54 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           23 |     2384 | 2025-09-17 | Galorys        | L   | 0.701      | -            | -                | -                | -         |   -13.07 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           22 |     2535 | 2025-09-13 | Fake do Biru   | L   | 0.673      | -            | -                | -                | -         |   -14.59 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           21 |     2567 | 2025-09-12 | KRÜ            | W   | 0.668      | -            | -                | -                | -         |     3.21 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           20 |     2615 | 2025-09-11 | Yawara         | L   | 0.662      | -            | -                | -                | -         |   -16.51 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           19 |     2718 | 2025-09-09 | Fluxo          | W   | 0.648      | 0.363        | 0.040 (0.009)    | -                | -         |    15.27 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           18 |     2722 | 2025-09-09 | Keyd Stars     | W   | 0.648      | -            | -                | -                | -         |    11.56 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           17 |     2771 | 2025-09-08 | Four Magic     | W   | 0.642      | -            | -                | -                | -         |     1.00 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           16 |     2805 | 2025-09-07 | KRÜ            | W   | 0.635      | -            | -                | -                | -         |     3.31 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           15 |     2870 | 2025-09-05 | Players        | W   | 0.619      | -            | -                | -                | -         |     0.77 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           14 |     3176 | 2025-08-20 | ShindeN        | L   | 0.515      | -            | -                | -                | -         |   -10.88 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           13 |     3297 | 2025-08-16 | BESTIA         | L   | 0.486      | -            | -                | -                | -         |    -6.84 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           12 |     3322 | 2025-08-15 | 9z             | L   | 0.481      | -            | -                | -                | -         |    -4.42 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           11 |     3382 | 2025-08-14 | KRÜ            | W   | 0.473      | -            | -                | -                | -         |     2.16 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           10 |     3466 | 2025-08-12 | ODDIK          | W   | 0.462      | -            | -                | -                | -         |     8.72 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            9 |     3520 | 2025-08-11 | Crashers       | W   | 0.455      | -            | -                | -                | -         |     0.82 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            8 |     3525 | 2025-08-11 | ShindeN        | W   | 0.454      | -            | -                | -                | -         |     4.74 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            7 |     3585 | 2025-08-10 | Bounty Hunters | L   | 0.446      | -            | -                | -                | -         |   -10.21 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            6 |     3638 | 2025-08-07 | JERSA          | W   | 0.427      | -            | -                | -                | -         |     0.41 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            5 |     3710 | 2025-08-01 | ODDIK          | L   | 0.389      | -            | -                | -                | -         |    -4.93 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            4 |     3774 | 2025-07-28 | Bounty Hunters | W   | 0.361      | -            | -                | -                | -         |     3.07 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            3 |     3799 | 2025-07-27 | Fluxo          | W   | 0.355      | 0.419        | 0.040 (0.006)    | -                | -         |     8.91 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            2 |     4004 | 2025-07-16 | ODDIK          | L   | 0.283      | -            | -                | -                | -         |    -3.45 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            1 |     4018 | 2025-07-16 | Procyon        | W   | 0.280      | -            | -                | -                | -         |     1.63 | b4rtiN, bsd, JOTA, NEKIZ, shz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,987.79)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-15 |      1.000 | $1,500.00      | $1,500.00       |
| 2025-10-19 |      0.915 | $8,000.00      | $7,322.34       |
| 2025-09-30 |      0.790 | $2,742.00      | $2,165.45       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
