### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal<br />
Global Rank: [96](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [68]( ../standings_europe.md)<br />
<br />
Final Rank Value:  880.6<br />
<br />
Final Rank Value (880.6) = Starting Rank Value (893.5) + Head To Head Adjustments (-12.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.341[<sup>1</sup>](#table2)
- Bounty Collected: 0.372[<sup>2</sup>](#table1)
- Opponent Network: 0.247[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.240<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 893.5
- 400 + ( ( 0.240 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 893.5


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
|           57 |        7 | 2024-08-06 | DMS              | W   | 1.000      | 0.435        | -                | 0.428 (0.186)    | 0 (0.000) |    17.10 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           56 |      221 | 2024-07-31 | K27              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.48 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           55 |      228 | 2024-07-31 | Permitta         | W   | 1.000      | 0.426        | 0.039 (0.017)    | 0.919 (0.392)    | 0 (0.000) |    19.70 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           54 |      278 | 2024-07-30 | GUN5             | L   | 1.000      | -            | -                | -                | -         |   -13.47 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           53 |      344 | 2024-07-28 | Space            | W   | 1.000      | 0.435        | -                | 0.429 (0.187)    | 0 (0.000) |    17.57 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           52 |      377 | 2024-07-26 | Sampi            | L   | 1.000      | -            | -                | -                | -         |   -12.67 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           51 |      430 | 2024-07-25 | Monte            | L   | 1.000      | -            | -                | -                | -         |    -7.67 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           50 |      548 | 2024-07-21 | GUN5             | L   | 1.000      | -            | -                | -                | -         |   -12.85 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           49 |      623 | 2024-07-19 | ALTERNATE aTTaX  | W   | 1.000      | 0.435        | 0.031 (0.014)    | 0.537 (0.233)    | 0 (0.000) |    15.57 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           48 |      740 | 2024-07-17 | SINNERS          | L   | 1.000      | -            | -                | -                | -         |   -10.54 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           47 |      743 | 2024-07-17 | 9INE             | L   | 1.000      | -            | -                | -                | -         |   -13.90 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           46 |      796 | 2024-07-16 | Metizport        | L   | 1.000      | -            | -                | -                | -         |   -11.81 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           45 |      844 | 2024-07-15 | Johnny Speeds    | L   | 1.000      | -            | -                | -                | -         |    -3.98 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           44 |      905 | 2024-07-11 | Sashi            | L   | 1.000      | -            | -                | -                | -         |    -4.87 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           43 |      909 | 2024-07-11 | 9INE             | W   | 1.000      | 0.358        | 0.022 (0.008)    | 0.523 (0.187)    | 0 (0.000) |    16.91 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           42 |      931 | 2024-07-10 | Johnny Speeds    | L   | 1.000      | -            | -                | -                | -         |    -3.69 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           41 |      947 | 2024-07-09 | ROSOMAHA         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.92 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           40 |     1130 | 2024-06-14 | GamerLegion      | L   | 0.846      | -            | -                | -                | -         |    -4.43 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           39 |     1241 | 2024-06-10 | MOUZ NXT         | W   | 0.819      | 0.450        | 0.139 (0.051)    | 0.961 (0.354)    | 0 (0.000) |    20.12 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           38 |     1370 | 2024-06-08 | Entropiq         | W   | 0.805      | -            | -                | -                | 0 (0.000) |     1.77 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           37 |     1397 | 2024-06-07 | 9INE             | L   | 0.800      | -            | -                | -                | -         |   -11.32 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           36 |     1484 | 2024-06-06 | NAVI Junior      | L   | 0.792      | -            | -                | -                | -         |   -17.57 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           35 |     1496 | 2024-06-06 | 5W               | L   | 0.791      | -            | -                | -                | -         |   -11.29 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           34 |     1568 | 2024-06-04 | Rhyno            | L   | 0.781      | -            | -                | -                | -         |    -9.77 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           33 |     1790 | 2024-05-27 | Rhyno            | L   | 0.726      | -            | -                | -                | -         |    -9.25 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           32 |     1842 | 2024-05-24 | ALTERNATE aTTaX  | W   | 0.706      | 0.435        | 0.031 (0.010)    | 0.537 (0.165)    | 0 (0.000) |    10.78 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           31 |     1896 | 2024-05-22 | Permitta         | L   | 0.693      | -            | -                | -                | -         |   -11.29 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           30 |     1945 | 2024-05-21 | RUBY             | L   | 0.685      | -            | -                | -                | -         |   -10.16 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           29 |     1999 | 2024-05-19 | Sangal           | L   | 0.673      | -            | -                | -                | -         |    -6.00 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           28 |     2064 | 2024-05-17 | Zero Tenacity    | L   | 0.659      | -            | -                | -                | -         |    -6.70 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           27 |     2150 | 2024-05-15 | Passion UA       | W   | 0.646      | 0.435        | 0.173 (0.049)    | 1.000 (0.281)    | -         |    12.59 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           26 |     2158 | 2024-05-15 | Sashi            | L   | 0.645      | -            | -                | -                | -         |    -3.50 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           25 |     2214 | 2024-05-14 | ALTERNATE aTTaX  | L   | 0.639      | -            | -                | -                | -         |    -9.05 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           24 |     2273 | 2024-05-11 | MOUZ NXT         | L   | 0.621      | -            | -                | -                | -         |    -6.85 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           23 |     2327 | 2024-05-09 | PARIVISION       | W   | 0.607      | -            | -                | -                | -         |    13.14 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           22 |     2408 | 2024-05-05 | SINNERS          | L   | 0.579      | -            | -                | -                | -         |    -5.67 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           21 |     2429 | 2024-05-04 | Sampi            | W   | 0.572      | 0.435        | 0.027 (0.007)    | 1.000 (0.248)    | -         |     8.76 | AZUWU, CRUC1AL, Frøg, MiGHTYMAX, Surreal  |
|           20 |     2454 | 2024-05-02 | MOUZ NXT         | W   | 0.561      | 0.435        | 0.139 (0.034)    | 0.961 (0.234)    | -         |    11.94 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           19 |     2469 | 2024-05-02 | Grannys Knockers | W   | 0.559      | -            | -                | -                | -         |     5.25 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           18 |     2507 | 2024-04-30 | ALTERNATE aTTaX  | W   | 0.546      | 0.396        | 0.031 (0.007)    | -                | -         |    10.10 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           17 |     2514 | 2024-04-30 | ENCE Academy     | W   | 0.545      | -            | -                | -                | -         |     4.41 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           16 |     2528 | 2024-04-29 | Nexus            | W   | 0.540      | -            | -                | -                | -         |     7.11 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           15 |     2541 | 2024-04-29 | Alliance         | L   | 0.538      | -            | -                | -                | -         |    -9.21 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           14 |     2649 | 2024-04-24 | SINNERS          | W   | 0.506      | 0.384        | 0.047 (0.009)    | -                | -         |    12.78 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           13 |     2882 | 2024-04-17 | EYEBALLERS       | W   | 0.458      | -            | -                | -                | -         |     7.30 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           12 |     3598 | 2024-03-15 | ex-sYnck         | W   | 0.239      | -            | -                | -                | -         |     0.79 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           11 |     3626 | 2024-03-14 | The Chosen Few   | L   | 0.234      | -            | -                | -                | -         |    -5.60 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           10 |     3699 | 2024-03-12 | Secret           | W   | 0.219      | -            | -                | -                | -         |     0.84 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            9 |     3734 | 2024-03-10 | Nemiga           | L   | 0.207      | -            | -                | -                | -         |    -1.14 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            8 |     3770 | 2024-03-09 | BLEED            | L   | 0.198      | -            | -                | -                | -         |    -2.47 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            7 |     3800 | 2024-03-07 | kONO             | W   | 0.187      | -            | -                | -                | -         |     2.28 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            6 |     3839 | 2024-03-06 | V1dar            | W   | 0.180      | -            | -                | -                | -         |     0.65 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            5 |     3881 | 2024-03-05 | AURA             | W   | 0.173      | -            | -                | -                | -         |     0.52 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            4 |     3974 | 2024-02-29 | Metizport        | L   | 0.140      | -            | -                | -                | -         |    -2.13 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            3 |     4032 | 2024-02-26 | ALTERNATE aTTaX  | L   | 0.118      | -            | -                | -                | -         |    -1.40 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            2 |     4412 | 2024-02-09 | 3DMAX            | L   | 0.006      | -            | -                | -                | -         |    -0.00 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            1 |     4417 | 2024-02-09 | fnatic           | L   | 0.005      | -            | -                | -                | -         |    -0.00 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,752.05)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      0.866 | $2,500.00      | $2,164.53       |
| 2024-05-18 |      0.667 | $500.00        | $333.51         |
| 2024-05-12 |      0.627 | $2,000.00      | $1,254.02       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
