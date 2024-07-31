### Roster Details<br />
Team Name: Enterprise<br />
Roster: bajmi, Demho, ex1st, fr3nd, Sobol<br />
Global Rank: [73](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [53]( ../standings_europe.md)<br />
<br />
Final Rank Value:  946.0<br />
<br />
Final Rank Value (946.0) = Starting Rank Value (925.4) + Head To Head Adjustments (20.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.417[<sup>1</sup>](#table2)
- Bounty Collected: 0.364[<sup>2</sup>](#table1)
- Opponent Network: 0.228[<sup>2</sup>](#table1)
- LAN Wins: 0.009[<sup>2</sup>](#table1)

The average of these factors is 0.254<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 925.4
- 400 + ( ( 0.254 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 925.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           61 |       73 | 2024-07-30 | Rhyno             | W   | 1.000      | 0.143        | 0.072 (0.010)    | -                | 0 (0.000) |    18.34 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           60 |      301 | 2024-07-23 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -11.64 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           59 |      315 | 2024-07-22 | DASH              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.43 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           58 |      322 | 2024-07-22 | Illuminar         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.95 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           57 |      346 | 2024-07-21 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -14.56 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|           56 |      412 | 2024-07-19 | UNiTY             | W   | 1.000      | 0.371        | 0.025 (0.009)    | -                | 0 (0.000) |    17.43 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|           55 |      540 | 2024-07-17 | FORZE Reload      | L   | 1.000      | -            | -                | -                | -         |   -28.09 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|           54 |      645 | 2024-07-15 | TNL               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.21 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|           53 |      682 | 2024-07-12 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -12.68 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           52 |      763 | 2024-07-08 | Revenant          | W   | 1.000      | 0.371        | 0.027 (0.010)    | -                | 0 (0.000) |    11.10 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           51 |      859 | 2024-06-16 | 3DMAX             | L   | 0.897      | -            | -                | -                | -         |    -1.56 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           50 |      946 | 2024-06-13 | PERA              | L   | 0.880      | -            | -                | -                | -         |   -12.47 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           49 |      963 | 2024-06-13 | Illuminar         | W   | 0.878      | 0.450        | -                | 0.348 (0.138)    | 0 (0.000) |    12.04 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           48 |      987 | 2024-06-12 | Sampi             | W   | 0.872      | 0.379        | 0.028 (0.009)    | 1.000 (0.330)    | 0 (0.000) |    11.23 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           47 |     1030 | 2024-06-10 | SINNERS           | W   | 0.859      | 0.379        | 0.038 (0.012)    | 0.721 (0.234)    | 0 (0.000) |    16.08 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           46 |     1044 | 2024-06-10 | Gaimin Gladiators | W   | 0.858      | 0.450        | 0.040 (0.015)    | 0.363 (0.140)    | -         |    16.54 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           45 |     1086 | 2024-06-09 | ECLOT             | L   | 0.851      | -            | -                | -                | -         |    -6.92 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           44 |     1130 | 2024-06-08 | Nexus             | W   | 0.846      | 0.450        | -                | 0.465 (0.177)    | -         |     8.34 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           43 |     1210 | 2024-06-07 | Entropiq          | W   | 0.838      | -            | -                | -                | -         |     1.50 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           42 |     1259 | 2024-06-06 | Illuminar         | L   | 0.833      | -            | -                | -                | -         |   -16.37 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           41 |     1310 | 2024-06-05 | Verdant           | L   | 0.826      | -            | -                | -                | -         |   -13.84 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           40 |     1322 | 2024-06-05 | Serbia            | L   | 0.826      | -            | -                | -                | -         |   -17.31 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           39 |     1382 | 2024-06-04 | Johnny Speeds     | W   | 0.817      | 0.371        | 0.124 (0.037)    | 0.817 (0.248)    | -         |    22.01 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           38 |     1405 | 2024-06-03 | UNiTY             | W   | 0.811      | -            | -                | -                | -         |    14.26 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           37 |     1448 | 2024-06-01 | ARCRED            | L   | 0.799      | -            | -                | -                | -         |   -13.81 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           36 |     1462 | 2024-06-01 | Permitta          | W   | 0.797      | 0.371        | -                | 0.799 (0.236)    | -         |    11.95 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           35 |     1503 | 2024-05-30 | RUSTEC            | W   | 0.786      | -            | -                | -                | -         |     1.33 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           34 |     1517 | 2024-05-30 | brazylijski luz   | L   | 0.784      | -            | -                | -                | -         |   -14.89 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           33 |     1527 | 2024-05-29 | FLuffy Gangsters  | W   | 0.780      | -            | -                | -                | -         |     2.92 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           32 |     1555 | 2024-05-28 | Sampi             | W   | 0.772      | 0.379        | -                | 1.000 (0.293)    | -         |    12.17 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           31 |     1636 | 2024-05-24 | Illuminar         | W   | 0.744      | -            | -                | -                | -         |    10.37 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           30 |     1683 | 2024-05-22 | Entropiq          | W   | 0.733      | -            | -                | -                | -         |     1.32 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           29 |     1771 | 2024-05-20 | ECSTATIC          | W   | 0.718      | -            | -                | -                | -         |     1.30 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           28 |     2100 | 2024-05-10 | BetBoom           | L   | 0.651      | -            | -                | -                | -         |    -1.17 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           27 |     2167 | 2024-05-07 | Permitta          | W   | 0.631      | 0.435        | -                | 0.799 (0.219)    | -         |    10.53 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           26 |     2181 | 2024-05-06 | B8                | L   | 0.625      | -            | -                | -                | -         |    -5.68 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           25 |     2209 | 2024-05-04 | MOUZ NXT          | W   | 0.613      | 0.435        | 0.141 (0.038)    | 1.000 (0.266)    | -         |    13.48 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           24 |     2268 | 2024-05-01 | ENCE Academy      | W   | 0.593      | -            | -                | -                | -         |     5.50 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           23 |     2297 | 2024-04-30 | EYEBALLERS        | L   | 0.586      | -            | -                | -                | -         |    -8.91 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           22 |     2334 | 2024-04-29 | Nexus             | L   | 0.577      | -            | -                | -                | -         |   -10.46 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           21 |     2375 | 2024-04-27 | Permitta          | L   | 0.564      | -            | -                | -                | -         |    -7.89 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           20 |     2394 | 2024-04-26 | Insilio           | L   | 0.558      | -            | -                | -                | -         |    -8.28 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           19 |     2467 | 2024-04-23 | ALTERNATE aTTaX   | L   | 0.538      | -            | -                | -                | -         |    -7.86 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           18 |     2533 | 2024-04-20 | ALTERNATE aTTaX   | L   | 0.517      | -            | -                | -                | -         |    -7.21 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           17 |     2607 | 2024-04-18 | MOUZ NXT          | L   | 0.506      | -            | -                | -                | -         |    -5.24 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           16 |     2630 | 2024-04-18 | Nexus             | W   | 0.504      | -            | -                | -                | -         |     6.62 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           15 |     2655 | 2024-04-17 | ENCE              | L   | 0.498      | -            | -                | -                | -         |    -0.81 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           14 |     2787 | 2024-04-11 | Sashi             | L   | 0.458      | -            | -                | -                | -         |    -3.50 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           13 |     2831 | 2024-04-10 | AMKAL             | W   | 0.451      | 0.384        | 0.132 (0.023)    | -                | -         |    10.94 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           12 |     2960 | 2024-04-06 | Sampi             | L   | 0.424      | -            | -                | -                | -         |    -6.76 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           11 |     3051 | 2024-04-03 | Permitta          | W   | 0.406      | -            | -                | -                | -         |     6.74 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           10 |     3111 | 2024-04-01 | BLEED             | W   | 0.391      | 0.384        | 0.096 (0.014)    | -                | -         |     7.51 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            9 |     3548 | 2024-03-09 | kONO              | L   | 0.239      | -            | -                | -                | -         |    -4.86 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            8 |     3558 | 2024-03-09 | Sampi             | L   | 0.238      | -            | -                | -                | -         |    -4.07 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            7 |     3628 | 2024-03-06 | INGLORIOUS        | L   | 0.219      | -            | -                | -                | -         |    -6.21 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            6 |     3634 | 2024-03-06 | Permitta          | L   | 0.218      | -            | -                | -                | -         |    -3.39 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            5 |     3745 | 2024-03-02 | Sampi             | W   | 0.190      | -            | -                | -                | -         |     2.70 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            4 |     4058 | 2024-02-16 | SAW               | L   | 0.093      | -            | -                | -                | -         |    -0.57 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            3 |     4092 | 2024-02-15 | BetBoom           | L   | 0.084      | -            | -                | -                | -         |    -0.14 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            2 |     4119 | 2024-02-14 | Natus Vincere     | L   | 0.080      | -            | -                | -                | -         |    -0.01 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            1 |     4131 | 2024-02-14 | AMKAL             | W   | 0.078      | -            | -                | -                | 1 (0.078) |     1.93 | bajmi, Demho, ex1st, fr3nd, TOAO    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,112.17)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-25 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-17 |      0.905 | $5,000.00      | $4,524.88       |
| 2024-06-13 |      0.880 | $5,447.00      | $4,794.11       |
| 2024-06-06 |      0.831 | $3,000.00      | $2,493.51       |
| 2024-05-02 |      0.599 | $500.00        | $299.67         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
