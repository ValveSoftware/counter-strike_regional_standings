### Roster Details<br />
Team Name: Gaimin Gladiators<br />
Roster: b4rtiN, bsd, JOTA, NEKIZ, shz<br />
Global Rank: [58](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_11_03.md)<br />
Regional Rank: [14]( ../../standings_americas_2025_11_03.md)<br />
<br />
Final Rank Value:  1068.6<br />
<br />
Final Rank Value (1068.6) = Starting Rank Value (1009.5) + Head To Head Adjustments (59.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.362[<sup>1</sup>](#table2)
- Bounty Collected: 0.337[<sup>2</sup>](#table1)
- Opponent Network: 0.208[<sup>2</sup>](#table1)
- LAN Wins: 0.393[<sup>2</sup>](#table1)

The average of these factors is 0.325<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1009.5
- 400 + ( ( 0.325 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 1009.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           51 |      218 | 2025-10-19 | RED Canids      | W   | 1.000      | 0.363        | 0.026 (0.009)    | 0.580 (0.210)    | 0 (0.000) |    19.75 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           50 |      233 | 2025-10-18 | Dusty Roots     | W   | 1.000      | 0.363        | 0.013 (0.005)    | 0.556 (0.202)    | 0 (0.000) |    12.39 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           49 |      282 | 2025-10-16 | ODDIK           | W   | 1.000      | 0.363        | 0.033 (0.012)    | 0.521 (0.189)    | 0 (0.000) |    20.02 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           48 |      294 | 2025-10-16 | Yawara          | L   | 1.000      | -            | -                | -                | -         |   -24.11 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           47 |      317 | 2025-10-15 | Keyd Stars      | W   | 1.000      | 0.363        | -                | 0.657 (0.238)    | 0 (0.000) |    16.14 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           46 |      353 | 2025-10-14 | Fake do Biru    | W   | 1.000      | 0.363        | 0.016 (0.006)    | 0.556 (0.202)    | 0 (0.000) |    11.94 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           45 |      477 | 2025-10-09 | Tropa do KinGui | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.23 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           44 |      526 | 2025-10-08 | ODDIK           | L   | 1.000      | -            | -                | -                | -         |   -10.60 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           43 |      648 | 2025-10-06 | Galorys         | W   | 1.000      | -            | -                | -                | -         |     9.84 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           42 |      703 | 2025-10-05 | JERSA           | W   | 1.000      | -            | -                | -                | -         |     1.22 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           41 |      799 | 2025-10-03 | Fake do Biru    | L   | 0.994      | -            | -                | -                | -         |   -19.79 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           40 |      824 | 2025-10-02 | Imperial        | L   | 0.990      | -            | -                | -                | -         |    -3.37 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           39 |      826 | 2025-10-02 | Fake do Biru    | W   | 0.990      | 0.333        | 0.016 (0.005)    | 0.556 (0.183)    | 1 (0.990) |    10.93 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           38 |      902 | 2025-09-30 | ODDIK           | L   | 0.975      | -            | -                | -                | -         |   -10.36 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           37 |      946 | 2025-09-29 | Imperial        | L   | 0.970      | -            | -                | -                | -         |    -3.14 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           36 |      947 | 2025-09-29 | Keyd Stars      | W   | 0.969      | 0.390        | -                | 0.657 (0.248)    | 1 (0.969) |    16.39 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           35 |      978 | 2025-09-28 | 9z              | W   | 0.963      | 0.390        | 0.077 (0.029)    | 0.627 (0.236)    | 1 (0.963) |    21.38 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           34 |      981 | 2025-09-28 | Yawara          | W   | 0.962      | -            | -                | -                | 1 (0.962) |     7.26 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           33 |     1033 | 2025-09-27 | Sharks          | L   | 0.955      | -            | -                | -                | -         |   -10.83 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           32 |     1363 | 2025-09-17 | Galorys         | L   | 0.888      | -            | -                | -                | -         |   -18.26 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           31 |     1514 | 2025-09-13 | Fake do Biru    | L   | 0.860      | -            | -                | -                | -         |   -17.26 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           30 |     1546 | 2025-09-12 | KRÜ             | W   | 0.855      | -            | -                | -                | -         |     5.24 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           29 |     1594 | 2025-09-11 | Yawara          | L   | 0.848      | -            | -                | -                | -         |   -21.46 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           28 |     1697 | 2025-09-09 | Fluxo           | W   | 0.835      | 0.363        | 0.036 (0.011)    | -                | -         |    18.10 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           27 |     1701 | 2025-09-09 | Keyd Stars      | W   | 0.834      | 0.371        | -                | 0.657 (0.203)    | -         |    13.87 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           26 |     1750 | 2025-09-08 | Tropa do KinGui | W   | 0.828      | -            | -                | -                | -         |     2.32 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           25 |     1784 | 2025-09-07 | KRÜ             | W   | 0.822      | -            | -                | -                | -         |     5.49 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           24 |     1849 | 2025-09-05 | Players         | W   | 0.806      | -            | -                | -                | -         |     1.39 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           23 |     2155 | 2025-08-20 | ShindeN         | L   | 0.701      | -            | -                | -                | -         |   -13.09 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           22 |     2276 | 2025-08-16 | BESTIA          | L   | 0.673      | -            | -                | -                | -         |    -7.39 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           21 |     2301 | 2025-08-15 | 9z              | L   | 0.668      | -            | -                | -                | -         |    -5.97 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           20 |     2361 | 2025-08-14 | KRÜ             | W   | 0.660      | -            | -                | -                | -         |     3.81 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           19 |     2445 | 2025-08-12 | ODDIK           | W   | 0.649      | 0.363        | 0.033 (0.008)    | -                | -         |    15.40 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           18 |     2499 | 2025-08-11 | Crashers        | W   | 0.642      | -            | -                | -                | -         |     2.35 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           17 |     2504 | 2025-08-11 | ShindeN         | W   | 0.641      | 0.371        | -                | 0.725 (0.172)    | -         |     8.61 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           16 |     2564 | 2025-08-10 | Bounty Hunters  | L   | 0.632      | -            | -                | -                | -         |   -14.65 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           15 |     2617 | 2025-08-07 | JERSA           | W   | 0.613      | -            | -                | -                | -         |     0.82 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           14 |     2689 | 2025-08-01 | ODDIK           | L   | 0.575      | -            | -                | -                | -         |    -4.19 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           13 |     2753 | 2025-07-28 | Bounty Hunters  | W   | 0.548      | -            | -                | -                | -         |     4.49 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           12 |     2778 | 2025-07-27 | Fluxo           | W   | 0.541      | 0.419        | 0.036 (0.008)    | -                | -         |    12.90 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           11 |     2983 | 2025-07-16 | ODDIK           | L   | 0.470      | -            | -                | -                | -         |    -3.02 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|           10 |     2997 | 2025-07-16 | Procyon         | W   | 0.467      | -            | -                | -                | -         |     3.50 | b4rtiN, bsd, JOTA, NEKIZ, shz   |
|            9 |     3115 | 2025-07-11 | Imperial        | L   | 0.434      | -            | -                | -                | -         |    -1.37 | b4rtiN, JOTA, levi, shz, urban0 |
|            8 |     3156 | 2025-07-09 | BESTIA          | L   | 0.421      | -            | -                | -                | -         |    -4.62 | b4rtiN, JOTA, levi, shz, urban0 |
|            7 |     3160 | 2025-07-09 | Galorys         | W   | 0.421      | -            | -                | -                | -         |     2.99 | b4rtiN, JOTA, levi, shz, urban0 |
|            6 |     3191 | 2025-07-08 | BESTIA          | L   | 0.414      | -            | -                | -                | -         |    -4.52 | b4rtiN, JOTA, levi, shz, urban0 |
|            5 |     3200 | 2025-07-07 | Bounty Hunters  | W   | 0.408      | -            | -                | -                | -         |     3.51 | b4rtiN, JOTA, levi, shz, urban0 |
|            4 |     3204 | 2025-07-07 | Imperial        | W   | 0.407      | 0.376        | 0.092 (0.014)    | -                | -         |    11.61 | b4rtiN, JOTA, levi, shz, urban0 |
|            3 |     3250 | 2025-06-30 | Bounty Hunters  | L   | 0.361      | -            | -                | -                | -         |    -8.39 | b4rtiN, JOTA, levi, shz, urban0 |
|            2 |     3256 | 2025-06-29 | RED Canids      | L   | 0.355      | -            | -                | -                | -         |    -4.02 | b4rtiN, JOTA, levi, shz, urban0 |
|            1 |     3259 | 2025-06-29 | Galorys         | W   | 0.353      | -            | -                | -                | -         |     2.63 | b4rtiN, JOTA, levi, shz, urban0 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,677.24)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-19 |      1.000 | $8,000.00      | $8,000.00       |
| 2025-09-30 |      0.976 | $2,742.00      | $2,677.24       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
