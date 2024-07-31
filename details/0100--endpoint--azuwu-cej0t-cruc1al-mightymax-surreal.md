### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal<br />
Global Rank: [100](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [73]( ../standings_europe.md)<br />
<br />
Final Rank Value:  857.5<br />
<br />
Final Rank Value (857.5) = Starting Rank Value (897.3) + Head To Head Adjustments (-39.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.342[<sup>1</sup>](#table2)
- Bounty Collected: 0.373[<sup>2</sup>](#table1)
- Opponent Network: 0.248[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.241<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 897.3
- 400 + ( ( 0.241 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 897.3


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
|           57 |       13 | 2024-07-31 | K27              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.63 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           56 |       20 | 2024-07-31 | Permitta         | W   | 1.000      | 0.426        | 0.025 (0.010)    | 0.799 (0.340)    | 0 (0.000) |    19.15 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           55 |       70 | 2024-07-30 | GUN5             | L   | 1.000      | -            | -                | -                | -         |   -13.99 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           54 |      136 | 2024-07-28 | Space            | W   | 1.000      | 0.435        | -                | 0.406 (0.176)    | 0 (0.000) |    17.66 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           53 |      169 | 2024-07-26 | Sampi            | L   | 1.000      | -            | -                | -                | -         |   -12.89 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           52 |      222 | 2024-07-25 | Monte            | L   | 1.000      | -            | -                | -                | -         |    -7.36 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           51 |      340 | 2024-07-21 | GUN5             | L   | 1.000      | -            | -                | -                | -         |   -12.78 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           50 |      415 | 2024-07-19 | ALTERNATE aTTaX  | W   | 1.000      | 0.435        | 0.032 (0.014)    | 0.564 (0.245)    | 0 (0.000) |    15.40 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           49 |      532 | 2024-07-17 | SINNERS          | L   | 1.000      | -            | -                | -                | -         |   -11.99 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           48 |      535 | 2024-07-17 | 9INE             | L   | 1.000      | -            | -                | -                | -         |   -13.66 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           47 |      588 | 2024-07-16 | Metizport        | L   | 1.000      | -            | -                | -                | -         |   -11.47 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           46 |      636 | 2024-07-15 | Johnny Speeds    | L   | 1.000      | -            | -                | -                | -         |    -3.97 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           45 |      697 | 2024-07-11 | Sashi            | L   | 1.000      | -            | -                | -                | -         |    -4.65 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           44 |      701 | 2024-07-11 | 9INE             | W   | 1.000      | 0.358        | 0.022 (0.008)    | 0.486 (0.174)    | 0 (0.000) |    17.19 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           43 |      723 | 2024-07-10 | Johnny Speeds    | L   | 1.000      | -            | -                | -                | -         |    -3.66 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           42 |      739 | 2024-07-09 | ROSOMAHA         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.03 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           41 |      922 | 2024-06-14 | GamerLegion      | L   | 0.886      | -            | -                | -                | -         |    -4.26 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           40 |     1033 | 2024-06-10 | MOUZ NXT         | W   | 0.858      | 0.450        | 0.141 (0.054)    | 1.000 (0.386)    | 0 (0.000) |    20.99 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           39 |     1162 | 2024-06-08 | Entropiq         | W   | 0.844      | -            | -                | -                | 0 (0.000) |     1.88 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           38 |     1189 | 2024-06-07 | 9INE             | L   | 0.840      | -            | -                | -                | -         |   -11.61 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           37 |     1276 | 2024-06-06 | NAVI Junior      | L   | 0.831      | -            | -                | -                | -         |   -22.27 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           36 |     1288 | 2024-06-06 | 5W               | L   | 0.830      | -            | -                | -                | -         |   -11.54 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           35 |     1360 | 2024-06-04 | Rhyno            | L   | 0.820      | -            | -                | -                | -         |    -9.84 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           34 |     1582 | 2024-05-27 | Rhyno            | L   | 0.765      | -            | -                | -                | -         |    -9.32 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           33 |     1634 | 2024-05-24 | ALTERNATE aTTaX  | W   | 0.745      | 0.435        | 0.032 (0.010)    | 0.564 (0.183)    | 0 (0.000) |    11.24 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           32 |     1688 | 2024-05-22 | Permitta         | L   | 0.732      | -            | -                | -                | -         |   -12.78 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           31 |     1737 | 2024-05-21 | RUBY             | L   | 0.724      | -            | -                | -                | -         |   -10.59 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           30 |     1791 | 2024-05-19 | Sangal           | L   | 0.712      | -            | -                | -                | -         |    -6.88 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           29 |     1856 | 2024-05-17 | Zero Tenacity    | L   | 0.699      | -            | -                | -                | -         |    -7.17 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           28 |     1942 | 2024-05-15 | Passion UA       | W   | 0.686      | 0.435        | 0.172 (0.051)    | 1.000 (0.298)    | 0 (0.000) |    12.88 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           27 |     1950 | 2024-05-15 | Sashi            | L   | 0.684      | -            | -                | -                | -         |    -3.57 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           26 |     2006 | 2024-05-14 | ALTERNATE aTTaX  | L   | 0.678      | -            | -                | -                | -         |    -9.63 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           25 |     2065 | 2024-05-11 | MOUZ NXT         | L   | 0.660      | -            | -                | -                | -         |    -7.45 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           24 |     2119 | 2024-05-09 | PARIVISION       | W   | 0.646      | -            | -                | -                | -         |    13.54 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           23 |     2200 | 2024-05-05 | SINNERS          | L   | 0.618      | -            | -                | -                | -         |    -8.25 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           22 |     2221 | 2024-05-04 | Sampi            | W   | 0.611      | 0.435        | 0.028 (0.008)    | 1.000 (0.265)    | -         |     9.25 | AZUWU, CRUC1AL, Frøg, MiGHTYMAX, Surreal  |
|           21 |     2246 | 2024-05-02 | MOUZ NXT         | W   | 0.600      | 0.435        | 0.141 (0.037)    | 1.000 (0.261)    | -         |    12.56 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           20 |     2261 | 2024-05-02 | Grannys Knockers | W   | 0.598      | -            | -                | -                | -         |     5.67 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           19 |     2299 | 2024-04-30 | ALTERNATE aTTaX  | W   | 0.586      | 0.396        | 0.032 (0.007)    | -                | -         |    10.76 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           18 |     2306 | 2024-04-30 | ENCE Academy     | W   | 0.585      | -            | -                | -                | -         |     4.98 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           17 |     2320 | 2024-04-29 | Nexus            | W   | 0.579      | -            | -                | -                | -         |     7.58 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           16 |     2333 | 2024-04-29 | Alliance         | L   | 0.577      | -            | -                | -                | -         |    -9.88 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           15 |     2441 | 2024-04-24 | SINNERS          | W   | 0.545      | 0.384        | 0.038 (0.008)    | 0.721 (0.151)    | -         |    12.01 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           14 |     2674 | 2024-04-17 | EYEBALLERS       | W   | 0.497      | -            | -                | -                | -         |     7.93 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           13 |     3390 | 2024-03-15 | ex-sYnck         | W   | 0.278      | -            | -                | -                | -         |     0.93 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           12 |     3418 | 2024-03-14 | The Chosen Few   | L   | 0.273      | -            | -                | -                | -         |    -6.50 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           11 |     3491 | 2024-03-12 | Secret           | W   | 0.258      | -            | -                | -                | -         |     0.98 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           10 |     3526 | 2024-03-10 | Nemiga           | L   | 0.246      | -            | -                | -                | -         |    -1.37 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            9 |     3562 | 2024-03-09 | BLEED            | L   | 0.237      | -            | -                | -                | -         |    -2.84 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            8 |     3592 | 2024-03-07 | kONO             | W   | 0.227      | -            | -                | -                | -         |     2.73 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            7 |     3631 | 2024-03-06 | V1dar            | W   | 0.219      | -            | -                | -                | -         |     0.79 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            6 |     3673 | 2024-03-05 | AURA             | W   | 0.212      | -            | -                | -                | -         |     0.68 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            5 |     3766 | 2024-02-29 | Metizport        | L   | 0.179      | -            | -                | -                | -         |    -2.72 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            4 |     3824 | 2024-02-26 | ALTERNATE aTTaX  | L   | 0.158      | -            | -                | -                | -         |    -1.82 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            3 |     4204 | 2024-02-09 | 3DMAX            | L   | 0.046      | -            | -                | -                | -         |    -0.02 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            2 |     4209 | 2024-02-09 | fnatic           | L   | 0.045      | -            | -                | -                | -         |    -0.03 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            1 |     4229 | 2024-02-07 | Permitta         | W   | 0.031      | -            | -                | -                | -         |     0.54 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,947.88)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      0.905 | $2,500.00      | $2,262.44       |
| 2024-05-18 |      0.706 | $500.00        | $353.09         |
| 2024-05-12 |      0.666 | $2,000.00      | $1,332.34       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
