### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [95](../standings_global.md)<br />
Regional Rank: [69]( ../standings_europe.md)<br />
Final Rank Value:  892.1<br />
<br />
Final Rank Value (892.1) = Starting Rank Value (917.1) + Head To Head Adjustments (-25.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.359[<sup>1</sup>](#table2)
- Bounty Collected: 0.385[<sup>2</sup>](#table1)
- Opponent Network: 0.274[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.255<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 917.1
- 400 + ( ( 0.255 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 917.1


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
|           47 |       92 | 2024-06-14 | GamerLegion      | L   | 1.000      | -            | -                | -                | -         |    -2.94 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           46 |      203 | 2024-06-10 | MOUZ NXT         | W   | 1.000      | 0.450        | 0.158 (0.071)    | 1.000 (0.450)    | 0 (0.000) |    25.25 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           45 |      332 | 2024-06-08 | Entropiq         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.11 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           44 |      359 | 2024-06-07 | 9INE             | L   | 1.000      | -            | -                | -                | -         |   -19.56 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           43 |      446 | 2024-06-06 | NAVI Junior      | L   | 1.000      | -            | -                | -                | -         |   -26.79 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           42 |      458 | 2024-06-06 | 5W               | L   | 1.000      | -            | -                | -                | -         |   -14.14 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           41 |      530 | 2024-06-04 | Rhyno            | L   | 1.000      | -            | -                | -                | -         |   -11.35 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           40 |      754 | 2024-05-27 | Rhyno            | L   | 1.000      | -            | -                | -                | -         |   -11.50 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           39 |      806 | 2024-05-24 | ALTERNATE aTTaX  | W   | 1.000      | 0.435        | 0.046 (0.020)    | 0.573 (0.249)    | 0 (0.000) |    14.11 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           38 |      860 | 2024-05-22 | Permitta         | L   | 1.000      | -            | -                | -                | -         |   -17.57 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           37 |      909 | 2024-05-21 | RUBY             | L   | 1.000      | -            | -                | -                | -         |   -13.93 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           36 |      963 | 2024-05-19 | Sangal           | L   | 1.000      | -            | -                | -                | -         |   -11.12 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           35 |     1028 | 2024-05-17 | Zero Tenacity    | L   | 0.988      | -            | -                | -                | -         |   -10.99 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           34 |     1114 | 2024-05-15 | Passion UA       | W   | 0.975      | 0.435        | 0.086 (0.036)    | 0.803 (0.340)    | 0 (0.000) |    15.21 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           33 |     1122 | 2024-05-15 | Sashi            | L   | 0.974      | -            | -                | -                | -         |    -4.45 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           32 |     1178 | 2024-05-14 | ALTERNATE aTTaX  | L   | 0.968      | -            | -                | -                | -         |   -13.94 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           31 |     1237 | 2024-05-11 | MOUZ NXT         | L   | 0.950      | -            | -                | -                | -         |   -10.18 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           30 |     1291 | 2024-05-09 | PARIVISION       | W   | 0.936      | 0.435        | 0.015 (0.006)    | 0.462 (0.188)    | 0 (0.000) |    15.48 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           29 |     1372 | 2024-05-05 | SINNERS          | L   | 0.908      | -            | -                | -                | -         |   -12.54 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           28 |     1393 | 2024-05-04 | Sampi            | W   | 0.901      | 0.435        | 0.045 (0.018)    | 0.837 (0.328)    | 0 (0.000) |    14.50 | AZUWU, CRUC1AL, Frøg, MiGHTYMAX, Surreal  |
|           27 |     1418 | 2024-05-02 | MOUZ NXT         | W   | 0.890      | 0.435        | 0.158 (0.061)    | 1.000 (0.387)    | 0 (0.000) |    19.07 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           26 |     1433 | 2024-05-02 | Grannys Knockers | W   | 0.888      | -            | -                | -                | 0 (0.000) |     8.72 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           25 |     1471 | 2024-04-30 | ALTERNATE aTTaX  | W   | 0.875      | 0.396        | 0.046 (0.016)    | 0.573 (0.199)    | 0 (0.000) |    15.85 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           24 |     1478 | 2024-04-30 | ENCE Academy     | W   | 0.874      | -            | -                | -                | 0 (0.000) |     8.31 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           23 |     1492 | 2024-04-29 | Nexus            | W   | 0.869      | 0.435        | 0.012 (0.005)    | 0.397 (0.150)    | -         |    11.90 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           22 |     1505 | 2024-04-29 | Alliance         | L   | 0.867      | -            | -                | -                | -         |   -13.29 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           21 |     1613 | 2024-04-24 | SINNERS          | W   | 0.835      | 0.384        | 0.045 (0.015)    | 0.782 (0.251)    | -         |    19.42 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           20 |     1846 | 2024-04-17 | EYEBALLERS       | W   | 0.787      | 0.384        | -                | 0.653 (0.197)    | -         |    12.63 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           19 |     2563 | 2024-03-15 | ex-sYnck         | W   | 0.568      | -            | -                | -                | -         |     2.06 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           18 |     2591 | 2024-03-14 | The Chosen Few   | L   | 0.563      | -            | -                | -                | -         |   -12.85 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           17 |     2664 | 2024-03-12 | Secret           | W   | 0.548      | -            | -                | -                | -         |     2.28 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           16 |     2699 | 2024-03-10 | Nemiga           | L   | 0.536      | -            | -                | -                | -         |    -1.74 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           15 |     2735 | 2024-03-09 | BLEED            | L   | 0.527      | -            | -                | -                | -         |    -1.15 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           14 |     2765 | 2024-03-07 | kONO             | W   | 0.516      | 0.372        | 0.033 (0.006)    | -                | -         |     6.30 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           13 |     2804 | 2024-03-06 | V1dar            | W   | 0.509      | -            | -                | -                | -         |     1.93 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           12 |     2846 | 2024-03-05 | AURA             | W   | 0.502      | -            | -                | -                | -         |     1.74 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           11 |     2939 | 2024-02-29 | Metizport        | L   | 0.469      | -            | -                | -                | -         |    -5.75 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           10 |     2997 | 2024-02-26 | ALTERNATE aTTaX  | L   | 0.447      | -            | -                | -                | -         |    -5.09 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            9 |     3377 | 2024-02-09 | 3DMAX            | L   | 0.335      | -            | -                | -                | -         |    -1.62 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            8 |     3382 | 2024-02-09 | fnatic           | L   | 0.334      | -            | -                | -                | -         |    -0.25 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            7 |     3402 | 2024-02-07 | Permitta         | W   | 0.321      | -            | -                | -                | -         |     5.67 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            6 |     3572 | 2024-01-30 | Entropiq         | W   | 0.268      | -            | -                | -                | -         |     1.28 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            5 |     3961 | 2024-01-16 | Nexus            | L   | 0.178      | -            | -                | -                | -         |    -3.06 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            4 |     3975 | 2024-01-16 | 00NATION         | W   | 0.177      | -            | -                | -                | -         |     0.46 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            3 |     3984 | 2024-01-16 | GUN5             | W   | 0.176      | -            | -                | -                | -         |     0.30 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            2 |     4167 | 2024-01-11 | ILIN             | L   | 0.142      | -            | -                | -                | -         |    -4.07 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            1 |     4182 | 2024-01-10 | GRGECHI          | W   | 0.137      | -            | -                | -                | -         |     0.23 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,909.93)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-05-18 |      0.996 | $500.00        | $497.99         |
| 2024-05-12 |      0.956 | $2,000.00      | $1,911.94       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
