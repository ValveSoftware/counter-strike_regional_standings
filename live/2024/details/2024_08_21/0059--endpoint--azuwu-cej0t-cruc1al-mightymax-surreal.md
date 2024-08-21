### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal<br />
Global Rank: [59](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_21.md)<br />
Regional Rank: [42]( ../../standings_europe_2024_08_21.md)<br />
<br />
Final Rank Value:  996.2<br />
<br />
Final Rank Value (996.2) = Starting Rank Value (1002.8) + Head To Head Adjustments (-6.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.449[<sup>1</sup>](#table2)
- Bounty Collected: 0.419[<sup>2</sup>](#table1)
- Opponent Network: 0.346[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.304<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1002.8
- 400 + ( ( 0.304 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 1002.8


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
|           68 |      125 | 2024-08-18 | Permitta         | W   | 1.000      | 0.435        | 0.036 (0.016)    | 0.953 (0.414)    | 0 (0.000) |    11.16 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           67 |      131 | 2024-08-18 | BetBoom          | L   | 1.000      | -            | -                | -                | -         |    -3.41 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           66 |      154 | 2024-08-17 | Insilio          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.86 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           65 |      171 | 2024-08-16 | RUBY             | W   | 1.000      | 0.435        | 0.086 (0.038)    | -                | 0 (0.000) |    11.82 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           64 |      221 | 2024-08-15 | Rhyno            | L   | 1.000      | -            | -                | -                | -         |   -15.52 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           63 |      267 | 2024-08-13 | DMS              | W   | 1.000      | 0.435        | -                | 0.510 (0.222)    | 0 (0.000) |    11.46 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           62 |      317 | 2024-08-12 | SINNERS          | W   | 1.000      | 0.435        | 0.075 (0.033)    | 1.000 (0.435)    | 0 (0.000) |    17.45 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           61 |      343 | 2024-08-11 | Nemiga           | L   | 1.000      | -            | -                | -                | -         |    -6.23 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           60 |      356 | 2024-08-10 | CYBERSHOKE       | L   | 1.000      | -            | -                | -                | -         |   -15.86 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           59 |      363 | 2024-08-10 | Sashi            | W   | 1.000      | 0.426        | 0.180 (0.077)    | 0.989 (0.421)    | 0 (0.000) |    22.37 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           58 |      390 | 2024-08-09 | MOUZ NXT         | W   | 1.000      | 0.426        | 0.127 (0.054)    | 0.885 (0.377)    | 0 (0.000) |    21.86 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           57 |      409 | 2024-08-08 | Space            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.71 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           56 |      424 | 2024-08-08 | Passion UA       | W   | 1.000      | 0.426        | 0.170 (0.073)    | 1.000 (0.426)    | 0 (0.000) |    23.00 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           55 |      507 | 2024-08-06 | DMS              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    16.04 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           54 |      721 | 2024-07-31 | K27              | W   | 1.000      | -            | -                | -                | -         |     4.96 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           53 |      728 | 2024-07-31 | Permitta         | W   | 1.000      | 0.426        | 0.036 (0.015)    | 0.953 (0.406)    | -         |    18.27 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           52 |      778 | 2024-07-30 | GUN5             | L   | 1.000      | -            | -                | -                | -         |   -14.65 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           51 |      844 | 2024-07-28 | Space            | W   | 1.000      | -            | -                | -                | -         |    15.20 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           50 |      877 | 2024-07-26 | Sampi            | L   | 1.000      | -            | -                | -                | -         |   -14.54 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           49 |      930 | 2024-07-25 | Monte            | L   | 1.000      | -            | -                | -                | -         |   -15.43 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           48 |     1048 | 2024-07-21 | GUN5             | L   | 0.992      | -            | -                | -                | -         |   -14.63 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           47 |     1123 | 2024-07-19 | ALTERNATE aTTaX  | W   | 0.978      | 0.435        | -                | 0.565 (0.240)    | -         |    13.39 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           46 |     1240 | 2024-07-17 | SINNERS          | L   | 0.965      | -            | -                | -                | -         |   -10.76 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           45 |     1243 | 2024-07-17 | 9INE             | L   | 0.965      | -            | -                | -                | -         |   -15.56 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           44 |     1296 | 2024-07-16 | Metizport        | L   | 0.958      | -            | -                | -                | -         |   -18.53 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           43 |     1344 | 2024-07-15 | Johnny Speeds    | L   | 0.952      | -            | -                | -                | -         |    -5.57 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           42 |     1405 | 2024-07-11 | Sashi            | L   | 0.925      | -            | -                | -                | -         |    -6.40 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           41 |     1409 | 2024-07-11 | 9INE             | W   | 0.924      | -            | -                | -                | -         |    13.05 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           40 |     1431 | 2024-07-10 | Johnny Speeds    | L   | 0.918      | -            | -                | -                | -         |    -5.28 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           39 |     1447 | 2024-07-09 | ROSOMAHA         | W   | 0.912      | -            | -                | -                | -         |     2.77 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           38 |     1630 | 2024-06-14 | GamerLegion      | L   | 0.746      | -            | -                | -                | -         |    -6.17 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           37 |     1741 | 2024-06-10 | MOUZ NXT         | W   | 0.718      | 0.450        | 0.127 (0.041)    | 0.885 (0.286)    | -         |    15.39 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           36 |     1870 | 2024-06-08 | Entropiq         | W   | 0.704      | -            | -                | -                | -         |     1.13 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           35 |     1897 | 2024-06-07 | 9INE             | L   | 0.700      | -            | -                | -                | -         |   -12.28 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           34 |     1984 | 2024-06-06 | NAVI Junior      | L   | 0.691      | -            | -                | -                | -         |   -17.16 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           33 |     1996 | 2024-06-06 | 5W               | L   | 0.690      | -            | -                | -                | -         |   -12.69 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           32 |     2068 | 2024-06-04 | Rhyno            | L   | 0.680      | -            | -                | -                | -         |   -10.98 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           31 |     2290 | 2024-05-27 | Rhyno            | L   | 0.625      | -            | -                | -                | -         |   -10.36 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           30 |     2342 | 2024-05-24 | ALTERNATE aTTaX  | W   | 0.605      | -            | -                | -                | -         |     7.26 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           29 |     2396 | 2024-05-22 | Permitta         | L   | 0.592      | -            | -                | -                | -         |   -11.81 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           28 |     2445 | 2024-05-21 | RUBY             | L   | 0.584      | -            | -                | -                | -         |   -11.12 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           27 |     2499 | 2024-05-19 | Sangal           | L   | 0.572      | -            | -                | -                | -         |    -6.28 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           26 |     2564 | 2024-05-17 | Zero Tenacity    | L   | 0.559      | -            | -                | -                | -         |    -7.88 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           25 |     2650 | 2024-05-15 | Passion UA       | W   | 0.546      | 0.435        | 0.170 (0.040)    | 1.000 (0.237)    | -         |     8.63 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           24 |     2658 | 2024-05-15 | Sashi            | L   | 0.544      | -            | -                | -                | -         |    -4.84 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           23 |     2714 | 2024-05-14 | ALTERNATE aTTaX  | L   | 0.538      | -            | -                | -                | -         |   -10.01 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           22 |     2773 | 2024-05-11 | MOUZ NXT         | L   | 0.520      | -            | -                | -                | -         |    -8.29 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           21 |     2827 | 2024-05-09 | PARIVISION       | W   | 0.506      | -            | -                | -                | -         |     9.48 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           20 |     2908 | 2024-05-05 | SINNERS          | L   | 0.478      | -            | -                | -                | -         |    -5.84 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           19 |     2929 | 2024-05-04 | Sampi            | W   | 0.471      | -            | -                | -                | -         |     4.81 | AZUWU, CRUC1AL, Frøg, MiGHTYMAX, Surreal  |
|           18 |     2954 | 2024-05-02 | MOUZ NXT         | W   | 0.460      | 0.435        | 0.127 (0.025)    | -                | -         |     7.29 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           17 |     2969 | 2024-05-02 | Grannys Knockers | W   | 0.458      | -            | -                | -                | -         |     2.62 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           16 |     3007 | 2024-04-30 | ALTERNATE aTTaX  | W   | 0.446      | -            | -                | -                | -         |     5.87 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           15 |     3014 | 2024-04-30 | ENCE Academy     | W   | 0.445      | -            | -                | -                | -         |     1.98 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           14 |     3028 | 2024-04-29 | Nexus            | W   | 0.439      | -            | -                | -                | -         |     3.73 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           13 |     3041 | 2024-04-29 | Alliance         | L   | 0.437      | -            | -                | -                | -         |    -9.94 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           12 |     3149 | 2024-04-24 | SINNERS          | W   | 0.405      | -            | -                | -                | -         |     9.04 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           11 |     3382 | 2024-04-17 | EYEBALLERS       | W   | 0.357      | -            | -                | -                | -         |     3.91 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           10 |     4098 | 2024-03-15 | ex-sYnck         | W   | 0.138      | -            | -                | -                | -         |     0.24 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            9 |     4126 | 2024-03-14 | The Chosen Few   | L   | 0.133      | -            | -                | -                | -         |    -3.67 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            8 |     4199 | 2024-03-12 | Secret           | W   | 0.118      | -            | -                | -                | -         |     0.24 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            7 |     4234 | 2024-03-10 | Nemiga           | L   | 0.106      | -            | -                | -                | -         |    -0.81 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            6 |     4270 | 2024-03-09 | BLEED            | L   | 0.097      | -            | -                | -                | -         |    -1.95 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            5 |     4300 | 2024-03-07 | kONO             | W   | 0.087      | -            | -                | -                | -         |     0.81 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            4 |     4339 | 2024-03-06 | NewBALLS         | W   | 0.079      | -            | -                | -                | -         |     0.14 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            3 |     4381 | 2024-03-05 | AURA             | W   | 0.072      | -            | -                | -                | -         |     0.12 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            2 |     4474 | 2024-02-29 | Metizport        | L   | 0.039      | -            | -                | -                | -         |    -0.93 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            1 |     4532 | 2024-02-26 | ALTERNATE aTTaX  | L   | 0.018      | -            | -                | -                | -         |    -0.32 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,247.96)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-18 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-08-11 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-17 |      0.765 | $2,500.00      | $1,912.48       |
| 2024-05-18 |      0.566 | $500.00        | $283.10         |
| 2024-05-12 |      0.526 | $2,000.00      | $1,052.38       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
