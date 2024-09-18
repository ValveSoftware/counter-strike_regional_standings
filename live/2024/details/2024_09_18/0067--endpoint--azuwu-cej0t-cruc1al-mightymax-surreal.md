### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal<br />
Global Rank: [67](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [50]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  973.6<br />
<br />
Final Rank Value (973.6) = Starting Rank Value (1018.9) + Head To Head Adjustments (-45.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.468[<sup>1</sup>](#table2)
- Bounty Collected: 0.429[<sup>2</sup>](#table1)
- Opponent Network: 0.367[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.316<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1018.9
- 400 + ( ( 0.316 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 1018.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           73 |       52 | 2024-09-16 | FAVBET           | L   | 1.000      | -            | -                | -                | -         |   -18.08 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           72 |       85 | 2024-09-15 | Nexus            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.46 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           71 |      257 | 2024-09-09 | NAVI Junior      | L   | 1.000      | -            | -                | -                | -         |   -21.38 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           70 |      309 | 2024-09-07 | CPH Wolves       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.79 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           69 |      337 | 2024-09-06 | GamerLegion      | L   | 1.000      | -            | -                | -                | -         |   -12.09 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           68 |      366 | 2024-09-05 | GL Academy       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.71 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           67 |      439 | 2024-09-03 | Anonymo          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.28 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           66 |      467 | 2024-09-02 | 9INE             | W   | 1.000      | 0.435        | -                | 0.747 (0.325)    | 0 (0.000) |    15.68 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           65 |      520 | 2024-08-30 | CPH Wolves       | W   | 1.000      | 0.435        | -                | 0.691 (0.300)    | 0 (0.000) |    10.72 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           64 |      527 | 2024-08-30 | OG               | L   | 1.000      | -            | -                | -                | -         |   -12.45 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           63 |      625 | 2024-08-28 | EYEBALLERS       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.90 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           62 |      665 | 2024-08-27 | B8               | L   | 1.000      | -            | -                | -                | -         |    -9.48 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           61 |      677 | 2024-08-27 | Revenant         | L   | 1.000      | -            | -                | -                | -         |   -17.02 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           60 |      742 | 2024-08-26 | Passion UA       | W   | 1.000      | 0.435        | 0.174 (0.076)    | 1.000 (0.435)    | 0 (0.000) |    20.62 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           59 |      884 | 2024-08-22 | DASH             | L   | 1.000      | -            | -                | -                | -         |   -27.72 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           58 |     1031 | 2024-08-18 | Permitta         | W   | 0.995      | 0.435        | -                | 0.979 (0.423)    | 0 (0.000) |    11.22 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           57 |     1037 | 2024-08-18 | BetBoom          | L   | 0.993      | -            | -                | -                | -         |    -5.77 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           56 |     1060 | 2024-08-17 | Insilio          | W   | 0.987      | 0.435        | -                | 0.799 (0.343)    | 0 (0.000) |    12.73 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           55 |     1077 | 2024-08-16 | RUBY             | W   | 0.982      | 0.435        | 0.072 (0.031)    | -                | -         |    10.58 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           54 |     1127 | 2024-08-15 | Rhyno            | L   | 0.972      | -            | -                | -                | -         |   -17.24 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           53 |     1173 | 2024-08-13 | DMS              | W   | 0.960      | -            | -                | -                | -         |    10.30 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           52 |     1223 | 2024-08-12 | SINNERS          | W   | 0.953      | 0.435        | 0.176 (0.073)    | 1.000 (0.414)    | -         |    17.14 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           51 |     1249 | 2024-08-11 | Nemiga           | L   | 0.946      | -            | -                | -                | -         |    -7.16 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           50 |     1262 | 2024-08-10 | CYBERSHOKE       | L   | 0.941      | -            | -                | -                | -         |   -15.37 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           49 |     1269 | 2024-08-10 | Sashi            | W   | 0.940      | 0.426        | 0.164 (0.066)    | 0.938 (0.376)    | -         |    19.55 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           48 |     1296 | 2024-08-09 | MOUZ NXT         | W   | 0.933      | 0.426        | 0.109 (0.044)    | 0.742 (0.295)    | -         |    18.63 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           47 |     1315 | 2024-08-08 | Space            | W   | 0.927      | -            | -                | -                | -         |     8.82 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           46 |     1330 | 2024-08-08 | Passion UA       | W   | 0.926      | 0.426        | 0.174 (0.069)    | 1.000 (0.394)    | -         |    20.14 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           45 |     1413 | 2024-08-06 | DMS              | W   | 0.913      | -            | -                | -                | -         |    12.88 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           44 |     1627 | 2024-07-31 | K27              | W   | 0.874      | -            | -                | -                | -         |     4.43 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           43 |     1634 | 2024-07-31 | Permitta         | W   | 0.873      | 0.426        | -                | 0.979 (0.364)    | -         |    14.99 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           42 |     1684 | 2024-07-30 | GUN5             | L   | 0.866      | -            | -                | -                | -         |   -12.58 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           41 |     1750 | 2024-07-28 | Space            | W   | 0.853      | -            | -                | -                | -         |    11.40 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           40 |     1783 | 2024-07-26 | Sampi            | L   | 0.841      | -            | -                | -                | -         |   -12.93 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           39 |     1836 | 2024-07-25 | Monte            | L   | 0.832      | -            | -                | -                | -         |   -12.36 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           38 |     1954 | 2024-07-21 | GUN5             | L   | 0.807      | -            | -                | -                | -         |   -11.53 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           37 |     2029 | 2024-07-19 | ALTERNATE aTTaX  | W   | 0.793      | 0.435        | 0.110 (0.038)    | -                | -         |    12.27 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           36 |     2146 | 2024-07-17 | SINNERS          | L   | 0.780      | -            | -                | -                | -         |    -8.14 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           35 |     2149 | 2024-07-17 | 9INE             | L   | 0.780      | -            | -                | -                | -         |   -13.27 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           34 |     2202 | 2024-07-16 | Metizport        | L   | 0.773      | -            | -                | -                | -         |   -13.29 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           33 |     2250 | 2024-07-15 | Johnny Speeds    | L   | 0.767      | -            | -                | -                | -         |    -6.77 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           32 |     2311 | 2024-07-11 | Sashi            | L   | 0.740      | -            | -                | -                | -         |    -6.84 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           31 |     2315 | 2024-07-11 | 9INE             | W   | 0.739      | -            | -                | -                | -         |     9.96 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           30 |     2337 | 2024-07-10 | Johnny Speeds    | L   | 0.733      | -            | -                | -                | -         |    -6.64 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           29 |     2353 | 2024-07-09 | ROSOMAHA         | W   | 0.727      | -            | -                | -                | -         |     1.82 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           28 |     2536 | 2024-06-14 | GamerLegion      | L   | 0.561      | -            | -                | -                | -         |    -5.27 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           27 |     2647 | 2024-06-10 | MOUZ NXT         | W   | 0.533      | 0.450        | 0.109 (0.026)    | -                | -         |    10.06 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           26 |     2776 | 2024-06-08 | Entropiq         | W   | 0.519      | -            | -                | -                | -         |     0.68 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           25 |     2803 | 2024-06-07 | 9INE             | L   | 0.515      | -            | -                | -                | -         |    -9.46 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           24 |     2890 | 2024-06-06 | NAVI Junior      | L   | 0.506      | -            | -                | -                | -         |   -10.50 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           23 |     2902 | 2024-06-06 | 5W               | L   | 0.505      | -            | -                | -                | -         |   -10.52 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           22 |     2974 | 2024-06-04 | Rhyno            | L   | 0.495      | -            | -                | -                | -         |    -9.38 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           21 |     3196 | 2024-05-27 | Rhyno            | L   | 0.440      | -            | -                | -                | -         |    -8.54 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           20 |     3248 | 2024-05-24 | ALTERNATE aTTaX  | W   | 0.420      | 0.435        | 0.110 (0.020)    | -                | -         |     6.43 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           19 |     3302 | 2024-05-22 | Permitta         | L   | 0.407      | -            | -                | -                | -         |    -8.20 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           18 |     3351 | 2024-05-21 | RUBY             | L   | 0.399      | -            | -                | -                | -         |    -8.44 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           17 |     3405 | 2024-05-19 | Sangal           | L   | 0.387      | -            | -                | -                | -         |    -2.30 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           16 |     3470 | 2024-05-17 | Zero Tenacity    | L   | 0.374      | -            | -                | -                | -         |    -5.08 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           15 |     3556 | 2024-05-15 | Passion UA       | W   | 0.361      | 0.435        | 0.174 (0.027)    | -                | -         |     5.71 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           14 |     3564 | 2024-05-15 | Sashi            | L   | 0.359      | -            | -                | -                | -         |    -4.11 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           13 |     3620 | 2024-05-14 | ALTERNATE aTTaX  | L   | 0.353      | -            | -                | -                | -         |    -5.27 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           12 |     3679 | 2024-05-11 | MOUZ NXT         | L   | 0.335      | -            | -                | -                | -         |    -5.92 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           11 |     3733 | 2024-05-09 | PARIVISION       | W   | 0.321      | -            | -                | -                | -         |     5.66 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           10 |     3814 | 2024-05-05 | SINNERS          | L   | 0.293      | -            | -                | -                | -         |    -2.91 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            9 |     3835 | 2024-05-04 | Sampi            | W   | 0.286      | -            | -                | -                | -         |     3.44 | AZUWU, CRUC1AL, Frøg, MiGHTYMAX, Surreal  |
|            8 |     3860 | 2024-05-02 | MOUZ NXT         | W   | 0.275      | -            | -                | -                | -         |     3.87 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            7 |     3875 | 2024-05-02 | Grannys Knockers | W   | 0.273      | -            | -                | -                | -         |     1.25 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            6 |     3913 | 2024-04-30 | ALTERNATE aTTaX  | W   | 0.261      | -            | -                | -                | -         |     4.43 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            5 |     3920 | 2024-04-30 | ENCE Academy     | W   | 0.260      | -            | -                | -                | -         |     0.98 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            4 |     3934 | 2024-04-29 | Nexus            | W   | 0.254      | -            | -                | -                | -         |     1.79 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            3 |     3947 | 2024-04-29 | Alliance         | L   | 0.252      | -            | -                | -                | -         |    -5.89 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            2 |     4055 | 2024-04-24 | SINNERS          | W   | 0.220      | -            | -                | -                | -         |     5.13 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            1 |     4288 | 2024-04-17 | EYEBALLERS       | W   | 0.172      | -            | -                | -                | -         |     1.21 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,008.82)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-17 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-08-28 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-08-18 |      0.994 | $5,000.00      | $4,971.09       |
| 2024-08-11 |      0.946 | $10,000.00     | $9,464.99       |
| 2024-06-17 |      0.580 | $2,500.00      | $1,449.87       |
| 2024-05-18 |      0.381 | $500.00        | $190.58         |
| 2024-05-12 |      0.341 | $2,000.00      | $682.29         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
