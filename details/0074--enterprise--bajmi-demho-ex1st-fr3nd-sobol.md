### Roster Details<br />
Team Name: Enterprise<br />
Roster: bajmi, Demho, ex1st, fr3nd, Sobol<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [74](../standings_global.md)<br />
Regional Rank: [53]( ../standings_europe.md)<br />
Final Rank Value:  985.7<br />
<br />
Final Rank Value (985.7) = Starting Rank Value (994.4) + Head To Head Adjustments (-8.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.428[<sup>1</sup>](#table2)
- Bounty Collected: 0.408[<sup>2</sup>](#table1)
- Opponent Network: 0.296[<sup>2</sup>](#table1)
- LAN Wins: 0.038[<sup>2</sup>](#table1)

The average of these factors is 0.293<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 994.4
- 400 + ( ( 0.293 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 994.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           60 |       29 | 2024-06-16 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -5.29 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           59 |      116 | 2024-06-13 | PERA              | L   | 1.000      | -            | -                | -                | -         |   -13.98 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           58 |      133 | 2024-06-13 | Illuminar         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.91 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           57 |      157 | 2024-06-12 | Sampi             | W   | 1.000      | 0.379        | 0.045 (0.017)    | 0.837 (0.317)    | 0 (0.000) |    11.81 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           56 |      200 | 2024-06-10 | SINNERS           | W   | 1.000      | 0.379        | 0.045 (0.017)    | 0.782 (0.296)    | 0 (0.000) |    18.23 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           55 |      214 | 2024-06-10 | Gaimin Gladiators | W   | 1.000      | 0.450        | 0.076 (0.034)    | 0.632 (0.284)    | 0 (0.000) |    22.05 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           54 |      256 | 2024-06-09 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |    -7.62 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           53 |      300 | 2024-06-08 | Nexus             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.41 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           52 |      380 | 2024-06-07 | Entropiq          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.46 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           51 |      429 | 2024-06-06 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |   -22.79 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           50 |      480 | 2024-06-05 | Verdant           | L   | 1.000      | -            | -                | -                | -         |   -21.20 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           49 |      492 | 2024-06-05 | ex-iNation        | L   | 1.000      | -            | -                | -                | -         |   -21.53 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           48 |      552 | 2024-06-04 | Johnny Speeds     | W   | 1.000      | 0.371        | 0.118 (0.044)    | 0.507 (0.188)    | 0 (0.000) |    24.70 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           47 |      575 | 2024-06-03 | UNiTY             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    16.83 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           46 |      620 | 2024-06-01 | ARCRED            | L   | 1.000      | -            | -                | -                | -         |   -18.57 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           45 |      634 | 2024-06-01 | Permitta          | W   | 1.000      | 0.371        | 0.039 (0.014)    | 0.885 (0.328)    | 0 (0.000) |    13.79 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           44 |      675 | 2024-05-30 | RUSTEC            | W   | 1.000      | -            | -                | -                | -         |     1.25 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           43 |      689 | 2024-05-30 | brazylijski luz   | L   | 1.000      | -            | -                | -                | -         |   -19.66 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           42 |      699 | 2024-05-29 | FLuffy Gangsters  | W   | 1.000      | -            | -                | -                | -         |     2.33 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           41 |      727 | 2024-05-28 | Sampi             | W   | 1.000      | 0.379        | 0.045 (0.017)    | 0.837 (0.317)    | -         |    15.24 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           40 |      808 | 2024-05-24 | Illuminar         | W   | 1.000      | -            | -                | -                | -         |     9.60 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           39 |      855 | 2024-05-22 | Entropiq          | W   | 1.000      | -            | -                | -                | -         |     1.31 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           38 |      943 | 2024-05-20 | ECSTATIC          | W   | 1.000      | -            | -                | -                | -         |     1.32 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           37 |     1272 | 2024-05-10 | BetBoom           | L   | 0.941      | -            | -                | -                | -         |    -1.40 | bajmi, Demho, ex1st, fr3nd, kadziu |
|           36 |     1339 | 2024-05-07 | Permitta          | W   | 0.921      | 0.435        | 0.039 (0.015)    | 0.885 (0.354)    | -         |    14.46 | bajmi, Demho, ex1st, fr3nd, kadziu |
|           35 |     1353 | 2024-05-06 | B8                | L   | 0.915      | -            | -                | -                | -         |    -8.61 | bajmi, Demho, ex1st, fr3nd, kadziu |
|           34 |     1381 | 2024-05-04 | MOUZ NXT          | W   | 0.903      | 0.435        | 0.158 (0.062)    | 1.000 (0.392)    | -         |    19.60 | bajmi, Demho, ex1st, fr3nd, kadziu |
|           33 |     1440 | 2024-05-01 | ENCE Academy      | W   | 0.883      | -            | -                | -                | -         |     8.24 | bajmi, Demho, ex1st, fr3nd, kadziu |
|           32 |     1469 | 2024-04-30 | EYEBALLERS        | L   | 0.876      | -            | -                | -                | -         |   -13.90 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           31 |     1506 | 2024-04-29 | Nexus             | L   | 0.867      | -            | -                | -                | -         |   -16.09 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           30 |     1547 | 2024-04-27 | Permitta          | L   | 0.854      | -            | -                | -                | -         |   -12.64 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           29 |     1566 | 2024-04-26 | Insilio           | L   | 0.848      | -            | -                | -                | -         |   -12.40 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           28 |     1639 | 2024-04-23 | ALTERNATE aTTaX   | L   | 0.827      | -            | -                | -                | -         |   -14.30 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           27 |     1705 | 2024-04-20 | ALTERNATE aTTaX   | L   | 0.807      | -            | -                | -                | -         |   -13.56 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           26 |     1779 | 2024-04-18 | MOUZ NXT          | L   | 0.795      | -            | -                | -                | -         |    -9.43 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           25 |     1802 | 2024-04-18 | Nexus             | W   | 0.794      | -            | -                | -                | -         |     9.25 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           24 |     1827 | 2024-04-17 | ENCE              | L   | 0.788      | -            | -                | -                | -         |    -1.66 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           23 |     1959 | 2024-04-11 | Sashi             | L   | 0.747      | -            | -                | -                | -         |    -8.84 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           22 |     2003 | 2024-04-10 | AMKAL             | W   | 0.741      | 0.384        | 0.139 (0.039)    | -                | -         |    16.37 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           21 |     2132 | 2024-04-06 | Sampi             | L   | 0.714      | -            | -                | -                | -         |   -11.71 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           20 |     2223 | 2024-04-03 | Permitta          | W   | 0.695      | 0.384        | -                | 0.885 (0.237)    | -         |    10.07 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           19 |     2283 | 2024-04-01 | BLEED             | W   | 0.681      | 0.384        | 0.347 (0.091)    | 0.946 (0.248)    | -         |    19.23 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           18 |     2721 | 2024-03-09 | kONO              | L   | 0.529      | -            | -                | -                | -         |   -11.94 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           17 |     2731 | 2024-03-09 | Sampi             | L   | 0.528      | -            | -                | -                | -         |    -9.79 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           16 |     2801 | 2024-03-06 | INGLORIOUS        | L   | 0.509      | -            | -                | -                | -         |   -14.96 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           15 |     2807 | 2024-03-06 | Permitta          | L   | 0.508      | -            | -                | -                | -         |    -9.33 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           14 |     2918 | 2024-03-02 | Sampi             | W   | 0.480      | -            | -                | -                | -         |     5.85 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           13 |     3231 | 2024-02-16 | SAW               | L   | 0.383      | -            | -                | -                | -         |    -2.02 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           12 |     3265 | 2024-02-15 | BetBoom           | L   | 0.374      | -            | -                | -                | -         |    -0.37 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           11 |     3292 | 2024-02-14 | Natus Vincere     | L   | 0.370      | -            | -                | -                | -         |    -0.07 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           10 |     3304 | 2024-02-14 | AMKAL             | W   | 0.368      | -            | -                | -                | 1 (0.368) |     8.34 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            9 |     3763 | 2024-01-20 | KOI               | W   | 0.202      | -            | -                | -                | -         |     4.62 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            8 |     3823 | 2024-01-19 | ex-sYnck          | W   | 0.195      | -            | -                | -                | -         |     0.36 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            7 |     3871 | 2024-01-18 | Aurora            | W   | 0.189      | -            | -                | -                | -         |     5.82 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            6 |     3883 | 2024-01-18 | Astralis          | L   | 0.189      | -            | -                | -                | -         |    -0.03 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            5 |     4201 | 2024-01-09 | KOI               | W   | 0.131      | -            | -                | -                | -         |     3.00 | adamS, dav1g, JUST, mopoz, stadodo |
|            4 |     4204 | 2024-01-09 | fnatic            | W   | 0.130      | -            | -                | -                | -         |     3.97 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            3 |     4210 | 2024-01-09 | Sashi             | W   | 0.130      | -            | -                | -                | -         |     2.93 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            2 |     4225 | 2024-01-09 | Johnny Speeds     | W   | 0.129      | -            | -                | -                | -         |     3.44 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            1 |     4235 | 2024-01-09 | Underrated        | W   | 0.129      | -            | -                | -                | -         |     0.14 | bajmi, Demho, ex1st, fr3nd, TOAO   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,891.56)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-13 |      1.000 | $5,447.00      | $5,447.00       |
| 2024-06-06 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-05-02 |      0.889 | $500.00        | $444.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
