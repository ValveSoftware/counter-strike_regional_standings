### Roster Details<br />
Team Name: Enterprise<br />
Roster: bajmi, Demho, ex1st, fr3nd, Sobol<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [81](../standings_global.md)<br />
Regional Rank: [57]( ../standings_europe.md)<br />
Final Rank Value:  932.6<br />
<br />
Final Rank Value (932.6) = Starting Rank Value (944.6) + Head To Head Adjustments (-11.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.434[<sup>1</sup>](#table2)
- Bounty Collected: 0.378[<sup>2</sup>](#table1)
- Opponent Network: 0.249[<sup>2</sup>](#table1)
- LAN Wins: 0.015[<sup>2</sup>](#table1)

The average of these factors is 0.269<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 944.6
- 400 + ( ( 0.269 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 944.6


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
|           60 |       59 | 2024-07-23 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -11.53 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           59 |       73 | 2024-07-22 | DASH              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.87 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           58 |       80 | 2024-07-22 | Illuminar         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.58 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           57 |      104 | 2024-07-21 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -16.37 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|           56 |      170 | 2024-07-19 | UNiTY             | W   | 1.000      | 0.371        | 0.032 (0.012)    | -                | 0 (0.000) |    17.84 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|           55 |      298 | 2024-07-17 | FORZE Reload      | L   | 1.000      | -            | -                | -                | -         |   -28.20 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|           54 |      403 | 2024-07-15 | TNL               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.12 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|           53 |      440 | 2024-07-12 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -12.48 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           52 |      521 | 2024-07-08 | Revenant          | W   | 1.000      | 0.371        | 0.033 (0.012)    | -                | 0 (0.000) |    11.04 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           51 |      617 | 2024-06-16 | 3DMAX             | L   | 0.945      | -            | -                | -                | -         |    -5.11 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           50 |      704 | 2024-06-13 | PERA              | L   | 0.927      | -            | -                | -                | -         |   -13.00 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           49 |      721 | 2024-06-13 | Illuminar         | W   | 0.926      | 0.450        | -                | 0.378 (0.157)    | 0 (0.000) |    11.92 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           48 |      745 | 2024-06-12 | Sampi             | W   | 0.919      | 0.379        | 0.037 (0.013)    | 0.994 (0.346)    | 0 (0.000) |    11.43 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           47 |      788 | 2024-06-10 | SINNERS           | W   | 0.906      | 0.379        | 0.048 (0.017)    | 0.769 (0.264)    | 0 (0.000) |    16.29 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           46 |      802 | 2024-06-10 | Gaimin Gladiators | W   | 0.905      | 0.450        | 0.053 (0.022)    | 0.432 (0.176)    | 0 (0.000) |    17.69 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           45 |      844 | 2024-06-09 | ECLOT             | L   | 0.899      | -            | -                | -                | -         |    -6.93 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           44 |      888 | 2024-06-08 | Nexus             | W   | 0.894      | 0.450        | -                | 0.480 (0.193)    | -         |     8.48 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           43 |      968 | 2024-06-07 | Entropiq          | W   | 0.885      | -            | -                | -                | -         |     1.51 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           42 |     1017 | 2024-06-06 | Illuminar         | L   | 0.880      | -            | -                | -                | -         |   -17.96 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           41 |     1068 | 2024-06-05 | Verdant           | L   | 0.874      | -            | -                | -                | -         |   -14.91 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           40 |     1080 | 2024-06-05 | Serbia            | L   | 0.873      | -            | -                | -                | -         |   -18.32 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           39 |     1140 | 2024-06-04 | Johnny Speeds     | W   | 0.865      | 0.371        | 0.154 (0.049)    | 0.858 (0.275)    | -         |    23.38 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           38 |     1163 | 2024-06-03 | UNiTY             | W   | 0.858      | -            | -                | -                | -         |    15.39 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           37 |     1206 | 2024-06-01 | ARCRED            | L   | 0.846      | -            | -                | -                | -         |   -15.01 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           36 |     1220 | 2024-06-01 | Permitta          | W   | 0.844      | 0.371        | -                | 0.790 (0.247)    | -         |    12.38 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           35 |     1261 | 2024-05-30 | RUSTEC            | W   | 0.834      | -            | -                | -                | -         |     1.33 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           34 |     1275 | 2024-05-30 | brazylijski luz   | L   | 0.831      | -            | -                | -                | -         |   -15.63 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           33 |     1285 | 2024-05-29 | FLuffy Gangsters  | W   | 0.827      | -            | -                | -                | -         |     2.94 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           32 |     1313 | 2024-05-28 | Sampi             | W   | 0.820      | 0.379        | 0.037 (0.011)    | 0.994 (0.308)    | -         |    12.85 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           31 |     1394 | 2024-05-24 | Illuminar         | W   | 0.792      | -            | -                | -                | -         |    10.40 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           30 |     1441 | 2024-05-22 | Entropiq          | W   | 0.780      | -            | -                | -                | -         |     1.32 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           29 |     1529 | 2024-05-20 | ECSTATIC          | W   | 0.765      | -            | -                | -                | -         |     1.30 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           28 |     1858 | 2024-05-10 | BetBoom           | L   | 0.699      | -            | -                | -                | -         |    -1.20 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           27 |     1925 | 2024-05-07 | Permitta          | W   | 0.678      | 0.435        | -                | 0.790 (0.233)    | -         |    11.17 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           26 |     1939 | 2024-05-06 | B8                | L   | 0.672      | -            | -                | -                | -         |    -6.45 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           25 |     1967 | 2024-05-04 | MOUZ NXT          | W   | 0.660      | 0.435        | 0.169 (0.049)    | 1.000 (0.287)    | -         |    14.41 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           24 |     2026 | 2024-05-01 | ENCE Academy      | W   | 0.641      | -            | -                | -                | -         |     5.97 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           23 |     2055 | 2024-04-30 | EYEBALLERS        | L   | 0.633      | -            | -                | -                | -         |   -10.05 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           22 |     2092 | 2024-04-29 | Nexus             | L   | 0.624      | -            | -                | -                | -         |   -11.36 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           21 |     2133 | 2024-04-27 | Permitta          | L   | 0.612      | -            | -                | -                | -         |    -8.65 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           20 |     2152 | 2024-04-26 | Insilio           | L   | 0.605      | -            | -                | -                | -         |    -8.95 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           19 |     2225 | 2024-04-23 | ALTERNATE aTTaX   | L   | 0.585      | -            | -                | -                | -         |    -8.76 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           18 |     2291 | 2024-04-20 | ALTERNATE aTTaX   | L   | 0.564      | -            | -                | -                | -         |    -8.06 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           17 |     2365 | 2024-04-18 | MOUZ NXT          | L   | 0.553      | -            | -                | -                | -         |    -5.93 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           16 |     2388 | 2024-04-18 | Nexus             | W   | 0.552      | -            | -                | -                | -         |     7.20 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           15 |     2413 | 2024-04-17 | ENCE              | L   | 0.546      | -            | -                | -                | -         |    -1.41 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           14 |     2545 | 2024-04-11 | Sashi             | L   | 0.505      | -            | -                | -                | -         |    -4.24 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           13 |     2589 | 2024-04-10 | AMKAL             | W   | 0.498      | 0.384        | 0.111 (0.021)    | -                | -         |    10.96 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           12 |     2718 | 2024-04-06 | Sampi             | L   | 0.472      | -            | -                | -                | -         |    -7.52 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           11 |     2809 | 2024-04-03 | Permitta          | W   | 0.453      | -            | -                | -                | -         |     7.39 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           10 |     2869 | 2024-04-01 | BLEED             | W   | 0.439      | 0.384        | 0.126 (0.021)    | -                | -         |     8.64 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            9 |     3306 | 2024-03-09 | kONO              | L   | 0.286      | -            | -                | -                | -         |    -5.89 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            8 |     3316 | 2024-03-09 | Sampi             | L   | 0.285      | -            | -                | -                | -         |    -4.94 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            7 |     3386 | 2024-03-06 | INGLORIOUS        | L   | 0.267      | -            | -                | -                | -         |    -7.62 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            6 |     3392 | 2024-03-06 | Permitta          | L   | 0.265      | -            | -                | -                | -         |    -4.23 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            5 |     3503 | 2024-03-02 | Sampi             | W   | 0.238      | -            | -                | -                | -         |     3.31 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            4 |     3816 | 2024-02-16 | SAW               | L   | 0.140      | -            | -                | -                | -         |    -0.92 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            3 |     3850 | 2024-02-15 | BetBoom           | L   | 0.132      | -            | -                | -                | -         |    -0.17 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            2 |     3877 | 2024-02-14 | Natus Vincere     | L   | 0.127      | -            | -                | -                | -         |    -0.01 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            1 |     3889 | 2024-02-14 | AMKAL             | W   | 0.125      | -            | -                | -                | 1 (0.125) |     2.79 | bajmi, Demho, ex1st, fr3nd, TOAO    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,771.69)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-24 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-17 |      0.952 | $5,000.00      | $4,761.32       |
| 2024-06-13 |      0.927 | $5,447.00      | $5,051.69       |
| 2024-06-06 |      0.878 | $3,000.00      | $2,635.38       |
| 2024-05-02 |      0.647 | $500.00        | $323.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
