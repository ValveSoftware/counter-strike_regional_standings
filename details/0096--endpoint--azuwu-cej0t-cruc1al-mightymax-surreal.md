### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [96](../standings_global.md)<br />
Regional Rank: [69]( ../standings_europe.md)<br />
Final Rank Value:  905.6<br />
<br />
Final Rank Value (905.6) = Starting Rank Value (915.0) + Head To Head Adjustments (-9.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.363[<sup>1</sup>](#table2)
- Bounty Collected: 0.378[<sup>2</sup>](#table1)
- Opponent Network: 0.236[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.244<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 915.0
- 400 + ( ( 0.244 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 915.0


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
|           49 |        3 | 2024-07-11 | Sashi            | L   | 1.000      | -            | -                | -                | -         |    -4.21 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           48 |        7 | 2024-07-11 | 9INE             | W   | 1.000      | 0.358        | 0.010 (0.003)    | -                | 0 (0.000) |    12.39 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           47 |       29 | 2024-07-10 | Johnny Speeds    | L   | 1.000      | -            | -                | -                | -         |    -3.08 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           46 |       45 | 2024-07-09 | ROSOMAHA         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.75 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           45 |      228 | 2024-06-14 | GamerLegion      | L   | 1.000      | -            | -                | -                | -         |    -3.27 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           44 |      339 | 2024-06-10 | MOUZ NXT         | W   | 0.993      | 0.450        | 0.152 (0.068)    | 1.000 (0.447)    | 0 (0.000) |    24.82 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           43 |      468 | 2024-06-08 | Entropiq         | W   | 0.978      | -            | -                | -                | 0 (0.000) |     2.00 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           42 |      495 | 2024-06-07 | 9INE             | L   | 0.974      | -            | -                | -                | -         |   -18.58 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           41 |      582 | 2024-06-06 | NAVI Junior      | L   | 0.965      | -            | -                | -                | -         |   -26.17 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           40 |      594 | 2024-06-06 | 5W               | L   | 0.964      | -            | -                | -                | -         |   -12.65 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           39 |      666 | 2024-06-04 | Rhyno            | L   | 0.954      | -            | -                | -                | -         |   -10.44 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           38 |      888 | 2024-05-27 | Rhyno            | L   | 0.899      | -            | -                | -                | -         |    -9.94 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           37 |      940 | 2024-05-24 | ALTERNATE aTTaX  | W   | 0.879      | 0.435        | 0.050 (0.019)    | 0.577 (0.221)    | 0 (0.000) |    13.25 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           36 |      994 | 2024-05-22 | Permitta         | L   | 0.867      | -            | -                | -                | -         |   -14.91 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           35 |     1043 | 2024-05-21 | RUBY             | L   | 0.858      | -            | -                | -                | -         |   -11.74 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           34 |     1097 | 2024-05-19 | Sangal           | L   | 0.846      | -            | -                | -                | -         |    -8.67 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           33 |     1162 | 2024-05-17 | Zero Tenacity    | L   | 0.833      | -            | -                | -                | -         |    -9.10 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           32 |     1248 | 2024-05-15 | Passion UA       | W   | 0.820      | 0.435        | 0.087 (0.031)    | 0.821 (0.292)    | 0 (0.000) |    13.21 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           31 |     1256 | 2024-05-15 | Sashi            | L   | 0.818      | -            | -                | -                | -         |    -4.10 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           30 |     1312 | 2024-05-14 | ALTERNATE aTTaX  | L   | 0.812      | -            | -                | -                | -         |   -11.13 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           29 |     1371 | 2024-05-11 | MOUZ NXT         | L   | 0.794      | -            | -                | -                | -         |    -8.25 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           28 |     1425 | 2024-05-09 | PARIVISION       | W   | 0.780      | 0.435        | 0.026 (0.009)    | 0.446 (0.151)    | 0 (0.000) |    13.14 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           27 |     1506 | 2024-05-05 | SINNERS          | L   | 0.753      | -            | -                | -                | -         |    -9.58 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           26 |     1527 | 2024-05-04 | Slovakia         | W   | 0.745      | 0.435        | 0.045 (0.014)    | 0.891 (0.288)    | 0 (0.000) |    11.98 | AZUWU, CRUC1AL, Frøg, MiGHTYMAX, Surreal  |
|           25 |     1552 | 2024-05-02 | MOUZ NXT         | W   | 0.734      | 0.435        | 0.152 (0.048)    | 1.000 (0.319)    | 0 (0.000) |    16.02 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           24 |     1567 | 2024-05-02 | Grannys Knockers | W   | 0.732      | -            | -                | -                | 0 (0.000) |     7.27 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           23 |     1605 | 2024-04-30 | ALTERNATE aTTaX  | W   | 0.720      | 0.396        | 0.050 (0.014)    | 0.577 (0.165)    | -         |    13.66 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           22 |     1612 | 2024-04-30 | ENCE Academy     | W   | 0.719      | -            | -                | -                | -         |     6.68 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           21 |     1626 | 2024-04-29 | Romania          | W   | 0.713      | 0.435        | -                | 0.375 (0.116)    | -         |     9.32 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           20 |     1639 | 2024-04-29 | Alliance         | L   | 0.711      | -            | -                | -                | -         |   -10.81 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           19 |     1747 | 2024-04-24 | SINNERS          | W   | 0.679      | 0.384        | 0.057 (0.015)    | 0.767 (0.200)    | -         |    16.00 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           18 |     1980 | 2024-04-17 | EYEBALLERS       | W   | 0.631      | 0.384        | -                | 0.646 (0.157)    | -         |    10.29 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           17 |     2696 | 2024-03-15 | ex-sYnck         | W   | 0.412      | -            | -                | -                | -         |     1.33 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           16 |     2724 | 2024-03-14 | The Chosen Few   | L   | 0.407      | -            | -                | -                | -         |    -9.54 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           15 |     2797 | 2024-03-12 | Secret           | W   | 0.392      | -            | -                | -                | -         |     1.53 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           14 |     2832 | 2024-03-10 | Nemiga           | L   | 0.380      | -            | -                | -                | -         |    -1.28 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           13 |     2868 | 2024-03-09 | BLEED            | L   | 0.371      | -            | -                | -                | -         |    -0.80 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           12 |     2898 | 2024-03-07 | kONO             | W   | 0.361      | 0.372        | 0.041 (0.005)    | -                | -         |     4.70 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           11 |     2937 | 2024-03-06 | V1dar            | W   | 0.353      | -            | -                | -                | -         |     1.27 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           10 |     2979 | 2024-03-05 | AURA             | W   | 0.346      | -            | -                | -                | -         |     1.15 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            9 |     3072 | 2024-02-29 | Metizport        | L   | 0.313      | -            | -                | -                | -         |    -4.17 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            8 |     3130 | 2024-02-26 | ALTERNATE aTTaX  | L   | 0.292      | -            | -                | -                | -         |    -2.98 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            7 |     3510 | 2024-02-09 | 3DMAX            | L   | 0.180      | -            | -                | -                | -         |    -0.81 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            6 |     3515 | 2024-02-09 | fnatic           | L   | 0.179      | -            | -                | -                | -         |    -0.11 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            5 |     3535 | 2024-02-07 | Permitta         | W   | 0.165      | -            | -                | -                | -         |     2.96 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            4 |     3705 | 2024-01-30 | Entropiq         | W   | 0.113      | -            | -                | -                | -         |     0.47 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            3 |     4094 | 2024-01-16 | Romania          | L   | 0.022      | -            | -                | -                | -         |    -0.40 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            2 |     4108 | 2024-01-16 | 00NATION         | W   | 0.021      | -            | -                | -                | -         |     0.05 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            1 |     4117 | 2024-01-16 | GUN5             | W   | 0.021      | -            | -                | -                | -         |     0.04 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,520.74)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-05-18 |      0.840 | $500.00        | $420.15         |
| 2024-05-12 |      0.800 | $2,000.00      | $1,600.59       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
