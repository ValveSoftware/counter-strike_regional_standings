### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [112](../standings_global.md)<br />
Regional Rank: [81]( ../standings_europe.md)<br />
Final Rank Value:  845.6<br />
<br />
Final Rank Value (845.6) = Starting Rank Value (896.0) + Head To Head Adjustments (-50.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.355[<sup>1</sup>](#table2)
- Bounty Collected: 0.383[<sup>2</sup>](#table1)
- Opponent Network: 0.243[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.245<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 896.0
- 400 + ( ( 0.245 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 896.0


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
|           52 |       98 | 2024-07-21 | GUN5             | L   | 1.000      | -            | -                | -                | -         |   -12.54 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           51 |      173 | 2024-07-19 | ALTERNATE aTTaX  | W   | 1.000      | 0.435        | 0.041 (0.018)    | 0.638 (0.277)    | 0 (0.000) |    15.66 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           50 |      290 | 2024-07-17 | SINNERS          | L   | 1.000      | -            | -                | -                | -         |   -12.23 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           49 |      293 | 2024-07-17 | 9INE             | L   | 1.000      | -            | -                | -                | -         |   -15.38 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           48 |      346 | 2024-07-16 | Metizport        | L   | 1.000      | -            | -                | -                | -         |   -10.64 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           47 |      394 | 2024-07-15 | Johnny Speeds    | L   | 1.000      | -            | -                | -                | -         |    -3.65 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           46 |      455 | 2024-07-11 | Sashi            | L   | 1.000      | -            | -                | -                | -         |    -4.76 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           45 |      459 | 2024-07-11 | 9INE             | W   | 1.000      | 0.358        | -                | 0.480 (0.172)    | 0 (0.000) |    15.08 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           44 |      481 | 2024-07-10 | Johnny Speeds    | L   | 1.000      | -            | -                | -                | -         |    -3.36 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           43 |      497 | 2024-07-09 | ROSOMAHA         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.07 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           42 |      680 | 2024-06-14 | GamerLegion      | L   | 0.933      | -            | -                | -                | -         |    -4.07 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           41 |      791 | 2024-06-10 | MOUZ NXT         | W   | 0.906      | 0.450        | 0.169 (0.069)    | 1.000 (0.408)    | 0 (0.000) |    22.07 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           40 |      920 | 2024-06-08 | Entropiq         | W   | 0.891      | -            | -                | -                | 0 (0.000) |     2.02 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           39 |      947 | 2024-06-07 | 9INE             | L   | 0.887      | -            | -                | -                | -         |   -14.08 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           38 |     1034 | 2024-06-06 | NAVI Junior      | L   | 0.879      | -            | -                | -                | -         |   -23.46 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           37 |     1046 | 2024-06-06 | 5W               | L   | 0.878      | -            | -                | -                | -         |   -12.28 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           36 |     1118 | 2024-06-04 | Rhyno            | L   | 0.867      | -            | -                | -                | -         |    -9.87 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           35 |     1340 | 2024-05-27 | Rhyno            | L   | 0.812      | -            | -                | -                | -         |    -9.36 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           34 |     1392 | 2024-05-24 | ALTERNATE aTTaX  | W   | 0.792      | 0.435        | 0.041 (0.014)    | 0.638 (0.220)    | 0 (0.000) |    12.01 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           33 |     1446 | 2024-05-22 | Permitta         | L   | 0.780      | -            | -                | -                | -         |   -13.49 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           32 |     1495 | 2024-05-21 | RUBY             | L   | 0.771      | -            | -                | -                | -         |   -10.78 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           31 |     1549 | 2024-05-19 | Sangal           | L   | 0.759      | -            | -                | -                | -         |    -8.19 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           30 |     1614 | 2024-05-17 | Zero Tenacity    | L   | 0.746      | -            | -                | -                | -         |    -7.98 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           29 |     1700 | 2024-05-15 | Passion UA       | W   | 0.733      | 0.435        | 0.163 (0.052)    | 1.000 (0.318)    | 0 (0.000) |    13.42 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           28 |     1708 | 2024-05-15 | Sashi            | L   | 0.731      | -            | -                | -                | -         |    -3.80 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           27 |     1764 | 2024-05-14 | ALTERNATE aTTaX  | L   | 0.725      | -            | -                | -                | -         |   -10.12 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           26 |     1823 | 2024-05-11 | MOUZ NXT         | L   | 0.707      | -            | -                | -                | -         |    -7.85 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           25 |     1877 | 2024-05-09 | PARIVISION       | W   | 0.693      | 0.435        | 0.022 (0.007)    | -                | 0 (0.000) |    13.20 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           24 |     1958 | 2024-05-05 | SINNERS          | L   | 0.666      | -            | -                | -                | -         |    -8.95 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           23 |     1979 | 2024-05-04 | Sampi            | W   | 0.658      | 0.435        | 0.037 (0.010)    | 0.994 (0.284)    | 0 (0.000) |    10.29 | AZUWU, CRUC1AL, Frøg, MiGHTYMAX, Surreal  |
|           22 |     2004 | 2024-05-02 | MOUZ NXT         | W   | 0.647      | 0.435        | 0.169 (0.048)    | 1.000 (0.281)    | 0 (0.000) |    13.67 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           21 |     2019 | 2024-05-02 | Grannys Knockers | W   | 0.645      | -            | -                | -                | -         |     6.31 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           20 |     2057 | 2024-04-30 | ALTERNATE aTTaX  | W   | 0.633      | 0.396        | 0.041 (0.010)    | 0.638 (0.160)    | -         |    11.82 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           19 |     2064 | 2024-04-30 | ENCE Academy     | W   | 0.632      | -            | -                | -                | -         |     5.66 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           18 |     2078 | 2024-04-29 | Nexus            | W   | 0.627      | 0.435        | 0.018 (0.005)    | 0.480 (0.131)    | -         |     8.44 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           17 |     2091 | 2024-04-29 | Alliance         | L   | 0.624      | -            | -                | -                | -         |   -10.33 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           16 |     2199 | 2024-04-24 | SINNERS          | W   | 0.592      | 0.384        | 0.048 (0.011)    | 0.769 (0.175)    | -         |    13.23 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           15 |     2432 | 2024-04-17 | EYEBALLERS       | W   | 0.544      | -            | -                | -                | -         |     8.57 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           14 |     3148 | 2024-03-15 | ex-sYnck         | W   | 0.326      | -            | -                | -                | -         |     1.11 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           13 |     3176 | 2024-03-14 | The Chosen Few   | L   | 0.320      | -            | -                | -                | -         |    -7.54 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           12 |     3249 | 2024-03-12 | Secret           | W   | 0.305      | -            | -                | -                | -         |     1.21 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           11 |     3284 | 2024-03-10 | Nemiga           | L   | 0.293      | -            | -                | -                | -         |    -1.38 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           10 |     3320 | 2024-03-09 | BLEED            | L   | 0.285      | -            | -                | -                | -         |    -3.07 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            9 |     3350 | 2024-03-07 | kONO             | W   | 0.274      | -            | -                | -                | -         |     3.44 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            8 |     3389 | 2024-03-06 | V1dar            | W   | 0.266      | -            | -                | -                | -         |     0.99 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            7 |     3431 | 2024-03-05 | AURA             | W   | 0.259      | -            | -                | -                | -         |     0.86 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            6 |     3524 | 2024-02-29 | Metizport        | L   | 0.226      | -            | -                | -                | -         |    -3.24 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            5 |     3582 | 2024-02-26 | ALTERNATE aTTaX  | L   | 0.205      | -            | -                | -                | -         |    -2.25 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            4 |     3962 | 2024-02-09 | 3DMAX            | L   | 0.093      | -            | -                | -                | -         |    -0.38 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            3 |     3967 | 2024-02-09 | fnatic           | L   | 0.092      | -            | -                | -                | -         |    -0.05 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            2 |     3987 | 2024-02-07 | Permitta         | W   | 0.078      | -            | -                | -                | -         |     1.39 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            1 |     4157 | 2024-01-30 | Entropiq         | W   | 0.026      | -            | -                | -                | -         |     0.11 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,184.31)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      0.952 | $2,500.00      | $2,380.66       |
| 2024-05-18 |      0.753 | $500.00        | $376.73         |
| 2024-05-12 |      0.713 | $2,000.00      | $1,426.92       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
