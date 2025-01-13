### Roster Details<br />
Team Name: ex-Enterprise<br />
Roster: bajmi, Demho, ex1st, mwlky, Sobol<br />
Global Rank: [100](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [72]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  872.5<br />
<br />
Final Rank Value (872.5) = Starting Rank Value (875.2) + Head To Head Adjustments (-2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.339[<sup>1</sup>](#table2)
- Bounty Collected: 0.316[<sup>2</sup>](#table1)
- Opponent Network: 0.066[<sup>2</sup>](#table1)
- LAN Wins: 0.238[<sup>2</sup>](#table1)

The average of these factors is 0.240<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 875.2
- 400 + ( ( 0.240 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 875.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |     1232 | 2024-10-26 | Illuminar       | W   | 0.674      | 0.303        | 0.018 (0.004)    | 0.478 (0.098)    | 1 (0.674) |    13.64 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           44 |     1251 | 2024-10-26 | los kogutos     | W   | 0.673      | 0.303        | 0.072 (0.015)    | 0.851 (0.174)    | 1 (0.673) |    16.09 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           43 |     1255 | 2024-10-26 | Insomnia        | W   | 0.672      | -            | -                | -                | 1 (0.672) |     5.78 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           42 |     1485 | 2024-10-13 | Passion UA      | L   | 0.587      | -            | -                | -                | -         |    -2.77 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           41 |     1504 | 2024-10-12 | Illuminar       | L   | 0.580      | -            | -                | -                | -         |    -6.17 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           40 |     2124 | 2024-09-24 | Rebels          | L   | 0.460      | -            | -                | -                | -         |    -6.82 | Demho, ex1st, mwlky, sk1tt, Sobol   |
|           39 |     2158 | 2024-09-23 | los kogutos     | W   | 0.455      | 0.143        | 0.072 (0.005)    | 0.851 (0.055)    | 0 (0.000) |    11.70 | Demho, ex1st, mwlky, sk1tt, Sobol   |
|           38 |     2242 | 2024-09-20 | SovvyKiNG       | L   | 0.433      | -            | -                | -                | -         |   -10.98 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           37 |     2399 | 2024-09-15 | kONO            | L   | 0.399      | -            | -                | -                | -         |    -5.08 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           36 |     2419 | 2024-09-14 | NAVI Junior     | L   | 0.393      | -            | -                | -                | -         |    -2.92 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           35 |     2459 | 2024-09-13 | HOTU            | L   | 0.386      | -            | -                | -                | -         |    -7.86 | bajmi, Demho, ex1st, m4tthi, Sobol  |
|           34 |     2497 | 2024-09-12 | UNiTY           | W   | 0.379      | 0.333        | 0.070 (0.009)    | 0.285 (0.036)    | 0 (0.000) |     7.49 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           33 |     2605 | 2024-09-07 | TNL             | L   | 0.348      | -            | -                | -                | -         |    -6.68 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           32 |     2617 | 2024-09-07 | Partizan        | L   | 0.347      | -            | -                | -                | -         |    -1.32 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           31 |     2746 | 2024-09-03 | HOTU            | L   | 0.321      | -            | -                | -                | -         |    -6.99 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           30 |     2763 | 2024-09-03 | Sampi           | L   | 0.319      | -            | -                | -                | -         |    -3.50 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           29 |     2941 | 2024-08-28 | ECLOT           | L   | 0.279      | -            | -                | -                | -         |    -0.63 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           28 |     2985 | 2024-08-27 | Anonymo         | W   | 0.273      | 0.371        | 0.063 (0.006)    | 0.401 (0.041)    | 0 (0.000) |     3.97 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           27 |     2997 | 2024-08-27 | Metizport       | L   | 0.272      | -            | -                | -                | -         |    -0.60 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           26 |     3067 | 2024-08-26 | GUN5            | L   | 0.266      | -            | -                | -                | -         |    -2.00 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           25 |     3129 | 2024-08-24 | ECSTATIC        | W   | 0.253      | 0.371        | 0.078 (0.007)    | 1.000 (0.094)    | 0 (0.000) |     5.15 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           24 |     3152 | 2024-08-23 | Sampi           | L   | 0.247      | -            | -                | -                | -         |    -2.60 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           23 |     3179 | 2024-08-22 | ENCE            | L   | 0.240      | -            | -                | -                | -         |    -1.15 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           22 |     3219 | 2024-08-21 | B8              | L   | 0.234      | -            | -                | -                | -         |    -1.36 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           21 |     3247 | 2024-08-21 | PARIVISION      | L   | 0.233      | -            | -                | -                | -         |    -3.42 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           20 |     3295 | 2024-08-20 | Revenant        | W   | 0.225      | -            | -                | -                | 0 (0.000) |     2.36 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           19 |     3326 | 2024-08-19 | kONO            | W   | 0.220      | 0.384        | 0.044 (0.004)    | 0.721 (0.061)    | 0 (0.000) |     3.98 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           18 |     3332 | 2024-08-19 | Alliance        | W   | 0.219      | -            | -                | -                | 0 (0.000) |     4.13 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           17 |     3367 | 2024-08-17 | Monte           | L   | 0.207      | -            | -                | -                | -         |    -1.99 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           16 |     3391 | 2024-08-16 | Alliance        | W   | 0.199      | 0.371        | 0.037 (0.003)    | 0.387 (0.029)    | -         |     3.82 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           15 |     3427 | 2024-08-15 | Into the Breach | L   | 0.193      | -            | -                | -                | -         |    -2.84 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           14 |     3446 | 2024-08-14 | 1WIN            | L   | 0.186      | -            | -                | -                | -         |    -4.44 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           13 |     3560 | 2024-08-11 | TSM             | L   | 0.166      | -            | -                | -                | -         |    -2.58 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           12 |     3574 | 2024-08-10 | Johnny Speeds   | L   | 0.160      | -            | -                | -                | -         |    -1.19 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           11 |     3583 | 2024-08-10 | kONO            | L   | 0.159      | -            | -                | -                | -         |    -2.14 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           10 |     3635 | 2024-08-08 | Astralis Talent | W   | 0.146      | 0.333        | -                | 0.469 (0.023)    | -         |     1.65 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|            9 |     3638 | 2024-08-08 | ECLOT           | W   | 0.145      | 0.333        | 0.284 (0.014)    | 1.000 (0.048)    | -         |     4.30 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|            8 |     3691 | 2024-08-07 | TSM             | L   | 0.138      | -            | -                | -                | -         |    -2.18 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|            7 |     3727 | 2024-08-06 | Verdant         | W   | 0.132      | 0.333        | 0.049 (0.002)    | -                | -         |     2.59 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|            6 |     3993 | 2024-07-30 | Rhyno           | W   | 0.085      | -            | -                | -                | -         |     0.96 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|            5 |     4221 | 2024-07-23 | Rebels          | L   | 0.038      | -            | -                | -                | -         |    -0.69 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|            4 |     4235 | 2024-07-22 | TNL             | W   | 0.033      | -            | -                | -                | -         |     0.28 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|            3 |     4242 | 2024-07-22 | Illuminar       | W   | 0.032      | -            | -                | -                | -         |     0.25 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|            2 |     4266 | 2024-07-21 | 9INE            | L   | 0.026      | -            | -                | -                | -         |    -0.27 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|            1 |     4332 | 2024-07-19 | UNiTY           | W   | 0.013      | -            | -                | -                | -         |     0.27 | bajmi, Demho, ex1st, fr3nd, hotd0g  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,645.31)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-26 |      0.674 | $3,027.00      | $2,041.64       |
| 2024-08-30 |      0.292 | $1,000.00      | $292.27         |
| 2024-08-12 |      0.173 | $1,500.00      | $259.40         |
| 2024-07-25 |      0.052 | $1,000.00      | $52.01          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
