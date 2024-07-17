### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [111](../standings_global.md)<br />
Regional Rank: [80]( ../standings_europe.md)<br />
Final Rank Value:  867.0<br />
<br />
Final Rank Value (867.0) = Starting Rank Value (921.1) + Head To Head Adjustments (-54.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.364[<sup>1</sup>](#table2)
- Bounty Collected: 0.375[<sup>2</sup>](#table1)
- Opponent Network: 0.231[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.243<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 921.1
- 400 + ( ( 0.243 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 921.1


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
|           50 |        2 | 2024-07-17 | SINNERS          | L   | 1.000      | -            | -                | -                | -         |   -11.67 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           49 |        5 | 2024-07-17 | 9INE             | L   | 1.000      | -            | -                | -                | -         |   -17.30 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           48 |       58 | 2024-07-16 | Metizport        | L   | 1.000      | -            | -                | -                | -         |    -9.86 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           47 |      106 | 2024-07-15 | Johnny Speeds    | L   | 1.000      | -            | -                | -                | -         |    -3.22 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           46 |      167 | 2024-07-11 | Sashi            | L   | 1.000      | -            | -                | -                | -         |    -4.75 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           45 |      171 | 2024-07-11 | 9INE             | W   | 1.000      | 0.358        | 0.010 (0.004)    | -                | 0 (0.000) |    12.91 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           44 |      193 | 2024-07-10 | Johnny Speeds    | L   | 1.000      | -            | -                | -                | -         |    -2.95 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           43 |      209 | 2024-07-09 | ROSOMAHA         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.76 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           42 |      392 | 2024-06-14 | GamerLegion      | L   | 0.980      | -            | -                | -                | -         |    -3.43 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           41 |      503 | 2024-06-10 | MOUZ NXT         | W   | 0.953      | 0.450        | 0.150 (0.064)    | 1.000 (0.429)    | 0 (0.000) |    23.57 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           40 |      632 | 2024-06-08 | Entropiq         | W   | 0.939      | -            | -                | -                | 0 (0.000) |     1.88 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           39 |      659 | 2024-06-07 | 9INE             | L   | 0.934      | -            | -                | -                | -         |   -17.20 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           38 |      746 | 2024-06-06 | NAVI Junior      | L   | 0.926      | -            | -                | -                | -         |   -24.96 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           37 |      758 | 2024-06-06 | 5W               | L   | 0.925      | -            | -                | -                | -         |   -11.83 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           36 |      830 | 2024-06-04 | Rhyno            | L   | 0.914      | -            | -                | -                | -         |   -10.12 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           35 |     1052 | 2024-05-27 | Rhyno            | L   | 0.859      | -            | -                | -                | -         |    -9.63 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           34 |     1104 | 2024-05-24 | ALTERNATE aTTaX  | W   | 0.839      | 0.435        | 0.050 (0.018)    | 0.644 (0.235)    | 0 (0.000) |    12.81 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           33 |     1158 | 2024-05-22 | Permitta         | L   | 0.827      | -            | -                | -                | -         |   -14.30 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           32 |     1207 | 2024-05-21 | RUBY             | L   | 0.819      | -            | -                | -                | -         |   -10.84 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           31 |     1261 | 2024-05-19 | Sangal           | L   | 0.806      | -            | -                | -                | -         |    -8.31 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           30 |     1326 | 2024-05-17 | Zero Tenacity    | L   | 0.793      | -            | -                | -                | -         |    -8.74 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           29 |     1412 | 2024-05-15 | Passion UA       | W   | 0.780      | 0.435        | 0.087 (0.030)    | 0.847 (0.287)    | 0 (0.000) |    12.71 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           28 |     1420 | 2024-05-15 | Sashi            | L   | 0.779      | -            | -                | -                | -         |    -4.17 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           27 |     1476 | 2024-05-14 | ALTERNATE aTTaX  | L   | 0.772      | -            | -                | -                | -         |   -10.53 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           26 |     1535 | 2024-05-11 | MOUZ NXT         | L   | 0.755      | -            | -                | -                | -         |    -8.04 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           25 |     1589 | 2024-05-09 | PARIVISION       | W   | 0.740      | 0.435        | 0.027 (0.009)    | 0.424 (0.137)    | 0 (0.000) |    12.24 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           24 |     1670 | 2024-05-05 | SINNERS          | L   | 0.713      | -            | -                | -                | -         |    -9.10 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           23 |     1691 | 2024-05-04 | Sampi            | W   | 0.705      | 0.435        | 0.045 (0.014)    | 0.975 (0.299)    | 0 (0.000) |    11.43 | AZUWU, CRUC1AL, Frøg, MiGHTYMAX, Surreal  |
|           22 |     1716 | 2024-05-02 | MOUZ NXT         | W   | 0.694      | 0.435        | 0.150 (0.045)    | 1.000 (0.302)    | 0 (0.000) |    14.95 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           21 |     1731 | 2024-05-02 | Grannys Knockers | W   | 0.693      | -            | -                | -                | 0 (0.000) |     6.94 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           20 |     1769 | 2024-04-30 | ALTERNATE aTTaX  | W   | 0.680      | 0.396        | 0.050 (0.013)    | 0.644 (0.174)    | -         |    12.95 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           19 |     1776 | 2024-04-30 | ENCE Academy     | W   | 0.679      | -            | -                | -                | -         |     6.25 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           18 |     1790 | 2024-04-29 | Nexus            | W   | 0.674      | 0.435        | -                | 0.432 (0.126)    | -         |     8.86 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           17 |     1803 | 2024-04-29 | Alliance         | L   | 0.672      | -            | -                | -                | -         |   -10.43 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           16 |     1911 | 2024-04-24 | SINNERS          | W   | 0.640      | 0.384        | 0.058 (0.014)    | 0.744 (0.183)    | -         |    14.96 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           15 |     2144 | 2024-04-17 | EYEBALLERS       | W   | 0.592      | 0.384        | -                | 0.619 (0.141)    | -         |     9.62 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           14 |     2860 | 2024-03-15 | ex-sYnck         | W   | 0.373      | -            | -                | -                | -         |     1.19 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           13 |     2888 | 2024-03-14 | The Chosen Few   | L   | 0.368      | -            | -                | -                | -         |    -8.67 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           12 |     2961 | 2024-03-12 | Secret           | W   | 0.352      | -            | -                | -                | -         |     1.34 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           11 |     2996 | 2024-03-10 | Nemiga           | L   | 0.341      | -            | -                | -                | -         |    -1.22 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           10 |     3032 | 2024-03-09 | BLEED            | L   | 0.332      | -            | -                | -                | -         |    -3.01 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            9 |     3062 | 2024-03-07 | kONO             | W   | 0.321      | 0.372        | 0.042 (0.005)    | -                | -         |     4.22 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            8 |     3101 | 2024-03-06 | V1dar            | W   | 0.313      | -            | -                | -                | -         |     1.09 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            7 |     3143 | 2024-03-05 | AURA             | W   | 0.307      | -            | -                | -                | -         |     0.97 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            6 |     3236 | 2024-02-29 | Metizport        | L   | 0.273      | -            | -                | -                | -         |    -3.71 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            5 |     3294 | 2024-02-26 | ALTERNATE aTTaX  | L   | 0.252      | -            | -                | -                | -         |    -2.54 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            4 |     3674 | 2024-02-09 | 3DMAX            | L   | 0.140      | -            | -                | -                | -         |    -0.65 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            3 |     3679 | 2024-02-09 | fnatic           | L   | 0.139      | -            | -                | -                | -         |    -0.09 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            2 |     3699 | 2024-02-07 | Permitta         | W   | 0.126      | -            | -                | -                | -         |     2.24 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            1 |     3869 | 2024-01-30 | Entropiq         | W   | 0.073      | -            | -                | -                | -         |     0.29 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,420.44)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      0.999 | $2,500.00      | $2,498.72       |
| 2024-05-18 |      0.801 | $500.00        | $400.35         |
| 2024-05-12 |      0.761 | $2,000.00      | $1,521.37       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
