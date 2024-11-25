### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal<br />
Global Rank: [88](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_25.md)<br />
Regional Rank: [65]( ../../standings_europe_2024_11_25.md)<br />
<br />
Final Rank Value:  942.6<br />
<br />
Final Rank Value (942.6) = Starting Rank Value (903.0) + Head To Head Adjustments (39.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.413[<sup>1</sup>](#table2)
- Bounty Collected: 0.379[<sup>2</sup>](#table1)
- Opponent Network: 0.213[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.251<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 903.0
- 400 + ( ( 0.251 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 903.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           72 |        9 | 2024-11-24 | Fire Flux         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.70 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           71 |       35 | 2024-11-23 | PCIFIC            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.19 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           70 |      420 | 2024-11-07 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -8.96 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           69 |      492 | 2024-11-03 | Aurora Young Blud | W   | 1.000      | 0.384        | -                | 0.682 (0.262)    | 0 (0.000) |    15.49 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           68 |      522 | 2024-11-02 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |    -5.27 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           67 |      527 | 2024-11-02 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -14.34 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           66 |      543 | 2024-11-01 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |    -8.22 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           65 |      596 | 2024-10-29 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -9.03 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           64 |      601 | 2024-10-29 | Rare Atom         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.11 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           63 |      604 | 2024-10-29 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |   -11.82 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           62 |      637 | 2024-10-27 | Rebels            | W   | 1.000      | 0.371        | 0.036 (0.013)    | -                | 0 (0.000) |    16.82 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           61 |      701 | 2024-10-24 | NewBALLS          | W   | 0.987      | -            | -                | -                | 0 (0.000) |     3.48 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           60 |      747 | 2024-10-20 | DMS               | L   | 0.961      | -            | -                | -                | -         |   -16.18 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           59 |      939 | 2024-10-11 | ARCRED            | W   | 0.901      | 0.384        | 0.039 (0.014)    | -                | 0 (0.000) |     9.08 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           58 |     1405 | 2024-09-27 | WW                | L   | 0.806      | -            | -                | -                | -         |   -22.39 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           57 |     1486 | 2024-09-25 | Aurora            | L   | 0.795      | -            | -                | -                | -         |    -7.72 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           56 |     1499 | 2024-09-25 | CPH Wolves        | L   | 0.793      | -            | -                | -                | -         |   -15.00 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           55 |     1538 | 2024-09-24 | Into the Breach   | L   | 0.788      | -            | -                | -                | -         |   -11.36 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           54 |     1650 | 2024-09-20 | CYBERSHOKE        | W   | 0.762      | 0.435        | -                | 0.560 (0.185)    | 0 (0.000) |    11.83 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           53 |     1718 | 2024-09-18 | Insilio           | W   | 0.749      | 0.435        | -                | 0.600 (0.195)    | 0 (0.000) |    12.33 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           52 |     1779 | 2024-09-16 | FAVBET            | L   | 0.734      | -            | -                | -                | -         |   -12.43 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           51 |     1812 | 2024-09-15 | Nexus             | W   | 0.727      | 0.435        | 0.267 (0.084)    | 0.669 (0.211)    | 0 (0.000) |    18.75 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           50 |     1984 | 2024-09-09 | NAVI Junior       | L   | 0.688      | -            | -                | -                | -         |    -9.59 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           49 |     2036 | 2024-09-07 | CPH Wolves        | W   | 0.674      | -            | -                | -                | -         |     7.11 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           48 |     2064 | 2024-09-06 | GamerLegion       | L   | 0.668      | -            | -                | -                | -         |    -5.34 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           47 |     2093 | 2024-09-05 | GL Academy        | W   | 0.661      | -            | -                | -                | -         |     0.77 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           46 |     2166 | 2024-09-03 | Anonymo           | W   | 0.648      | -            | -                | -                | -         |     5.78 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           45 |     2194 | 2024-09-02 | 9INE              | W   | 0.642      | 0.435        | 0.056 (0.016)    | 0.750 (0.209)    | -         |    11.84 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           44 |     2247 | 2024-08-30 | CPH Wolves        | W   | 0.622      | -            | -                | -                | -         |     7.00 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           43 |     2254 | 2024-08-30 | OG                | L   | 0.620      | -            | -                | -                | -         |    -7.45 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           42 |     2352 | 2024-08-28 | EYEBALLERS        | W   | 0.607      | -            | -                | -                | -         |     5.32 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           41 |     2392 | 2024-08-27 | B8                | L   | 0.602      | -            | -                | -                | -         |    -3.01 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           40 |     2404 | 2024-08-27 | Revenant          | L   | 0.600      | -            | -                | -                | -         |   -10.80 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           39 |     2469 | 2024-08-26 | Passion UA        | W   | 0.594      | 0.435        | 0.103 (0.027)    | 1.000 (0.258)    | -         |    14.73 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           38 |     2611 | 2024-08-22 | DASH              | L   | 0.566      | -            | -                | -                | -         |   -15.75 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           37 |     2758 | 2024-08-18 | Permitta          | W   | 0.542      | 0.435        | 0.062 (0.015)    | 1.000 (0.236)    | -         |    13.47 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           36 |     2764 | 2024-08-18 | BetBoom           | L   | 0.540      | -            | -                | -                | -         |    -3.26 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           35 |     2787 | 2024-08-17 | Insilio           | W   | 0.534      | -            | -                | -                | -         |     7.78 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           34 |     2804 | 2024-08-16 | RUBY              | W   | 0.529      | -            | -                | -                | -         |     4.61 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           33 |     2854 | 2024-08-15 | Rhyno             | L   | 0.519      | -            | -                | -                | -         |    -2.16 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           32 |     2900 | 2024-08-13 | DMS               | W   | 0.507      | -            | -                | -                | -         |     5.25 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           31 |     2950 | 2024-08-12 | SINNERS           | W   | 0.500      | 0.435        | 0.090 (0.020)    | 0.885 (0.192)    | -         |    12.73 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           30 |     2976 | 2024-08-11 | Nemiga            | L   | 0.494      | -            | -                | -                | -         |    -0.96 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           29 |     2989 | 2024-08-10 | CYBERSHOKE        | L   | 0.488      | -            | -                | -                | -         |    -8.08 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           28 |     2996 | 2024-08-10 | Sashi             | W   | 0.487      | 0.426        | 0.053 (0.011)    | -                | -         |    10.46 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           27 |     3023 | 2024-08-09 | MOUZ NXT          | W   | 0.480      | -            | -                | -                | -         |     6.01 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           26 |     3042 | 2024-08-08 | SovvyKiNG         | W   | 0.474      | -            | -                | -                | -         |     2.47 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           25 |     3057 | 2024-08-08 | Passion UA        | W   | 0.473      | 0.426        | 0.103 (0.021)    | 1.000 (0.201)    | -         |    12.17 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           24 |     3140 | 2024-08-06 | DMS               | W   | 0.460      | -            | -                | -                | -         |     5.51 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           23 |     3354 | 2024-07-31 | K27               | W   | 0.421      | -            | -                | -                | -         |     2.03 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           22 |     3361 | 2024-07-31 | Permitta          | W   | 0.420      | 0.426        | 0.062 (0.011)    | 1.000 (0.179)    | -         |    11.99 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           21 |     3411 | 2024-07-30 | GUN5              | L   | 0.413      | -            | -                | -                | -         |    -5.64 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           20 |     3477 | 2024-07-28 | SovvyKiNG         | W   | 0.400      | -            | -                | -                | -         |     2.50 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           19 |     3510 | 2024-07-26 | Sampi             | L   | 0.388      | -            | -                | -                | -         |    -3.16 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           18 |     3563 | 2024-07-25 | Monte             | L   | 0.379      | -            | -                | -                | -         |    -3.66 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           17 |     3681 | 2024-07-21 | GUN5              | L   | 0.354      | -            | -                | -                | -         |    -4.68 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           16 |     3756 | 2024-07-19 | ALTERNATE aTTaX   | W   | 0.340      | -            | -                | -                | -         |     9.11 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           15 |     3873 | 2024-07-17 | SINNERS           | L   | 0.328      | -            | -                | -                | -         |    -1.49 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           14 |     3876 | 2024-07-17 | 9INE              | L   | 0.327      | -            | -                | -                | -         |    -4.27 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           13 |     3929 | 2024-07-16 | Metizport         | L   | 0.321      | -            | -                | -                | -         |    -0.47 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           12 |     3977 | 2024-07-15 | Johnny Speeds     | L   | 0.314      | -            | -                | -                | -         |    -1.92 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           11 |     4038 | 2024-07-11 | Sashi             | L   | 0.287      | -            | -                | -                | -         |    -2.53 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           10 |     4042 | 2024-07-11 | 9INE              | W   | 0.286      | -            | -                | -                | -         |     5.38 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            9 |     4064 | 2024-07-10 | Johnny Speeds     | L   | 0.280      | -            | -                | -                | -         |    -1.69 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            8 |     4080 | 2024-07-09 | SkyFury           | W   | 0.274      | -            | -                | -                | -         |     1.57 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            7 |     4263 | 2024-06-14 | GamerLegion       | L   | 0.108      | -            | -                | -                | -         |    -0.49 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            6 |     4374 | 2024-06-10 | MOUZ NXT          | W   | 0.080      | -            | -                | -                | -         |     0.94 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            5 |     4503 | 2024-06-08 | Entropiq          | W   | 0.066      | -            | -                | -                | -         |     0.12 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            4 |     4530 | 2024-06-07 | 9INE              | L   | 0.062      | -            | -                | -                | -         |    -0.77 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            3 |     4617 | 2024-06-06 | NAVI Junior       | L   | 0.053      | -            | -                | -                | -         |    -0.58 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            2 |     4629 | 2024-06-06 | 5W                | L   | 0.052      | -            | -                | -                | -         |    -1.21 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            1 |     4701 | 2024-06-04 | Rhyno             | L   | 0.042      | -            | -                | -                | -         |    -0.12 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,136.58)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-09-21 |      0.767 | $1,250.00      | $959.36         |
| 2024-08-28 |      0.608 | $2,000.00      | $1,216.76       |
| 2024-08-18 |      0.541 | $5,000.00      | $2,706.66       |
| 2024-08-11 |      0.494 | $10,000.00     | $4,936.13       |
| 2024-06-17 |      0.127 | $2,500.00      | $317.66         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
