### Roster Details<br />
Team Name: ex-Enterprise<br />
Roster: bajmi, Demho, ex1st, mwlky, Sobol<br />
Global Rank: [101](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [72]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  867.8<br />
<br />
Final Rank Value (867.8) = Starting Rank Value (869.5) + Head To Head Adjustments (-1.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.338[<sup>1</sup>](#table2)
- Bounty Collected: 0.312[<sup>2</sup>](#table1)
- Opponent Network: 0.061[<sup>2</sup>](#table1)
- LAN Wins: 0.237[<sup>2</sup>](#table1)

The average of these factors is 0.237<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 869.5
- 400 + ( ( 0.237 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 869.5


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
|           44 |     1259 | 2024-10-26 | Illuminar       | W   | 0.652      | 0.303        | 0.018 (0.004)    | 0.480 (0.095)    | 1 (0.652) |    13.21 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           43 |     1278 | 2024-10-26 | los kogutos     | W   | 0.650      | 0.303        | 0.072 (0.014)    | 0.843 (0.166)    | 1 (0.650) |    15.69 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           42 |     1282 | 2024-10-26 | Insomnia        | W   | 0.650      | -            | -                | -                | 1 (0.650) |     5.64 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           41 |     1512 | 2024-10-13 | Passion UA      | L   | 0.565      | -            | -                | -                | -         |    -2.68 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           40 |     1531 | 2024-10-12 | Illuminar       | L   | 0.558      | -            | -                | -                | -         |    -5.94 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           39 |     2151 | 2024-09-24 | Rebels          | L   | 0.438      | -            | -                | -                | -         |    -6.68 | Demho, ex1st, mwlky, sk1tt, Sobol   |
|           38 |     2185 | 2024-09-23 | los kogutos     | W   | 0.432      | 0.143        | 0.072 (0.004)    | 0.843 (0.052)    | 0 (0.000) |    11.19 | Demho, ex1st, mwlky, sk1tt, Sobol   |
|           37 |     2269 | 2024-09-20 | SovvyKiNG       | L   | 0.410      | -            | -                | -                | -         |   -10.41 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           36 |     2426 | 2024-09-15 | kONO            | L   | 0.376      | -            | -                | -                | -         |    -4.74 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           35 |     2446 | 2024-09-14 | NAVI Junior     | L   | 0.371      | -            | -                | -                | -         |    -2.75 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           34 |     2486 | 2024-09-13 | HOTU            | L   | 0.364      | -            | -                | -                | -         |    -7.42 | bajmi, Demho, ex1st, m4tthi, Sobol  |
|           33 |     2524 | 2024-09-12 | UNiTY           | W   | 0.356      | 0.333        | 0.070 (0.008)    | 0.282 (0.033)    | 0 (0.000) |     7.04 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           32 |     2632 | 2024-09-07 | TNL             | L   | 0.326      | -            | -                | -                | -         |    -6.21 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           31 |     2644 | 2024-09-07 | Partizan        | L   | 0.325      | -            | -                | -                | -         |    -1.25 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           30 |     2773 | 2024-09-03 | HOTU            | L   | 0.299      | -            | -                | -                | -         |    -6.48 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           29 |     2790 | 2024-09-03 | Sampi           | L   | 0.296      | -            | -                | -                | -         |    -3.23 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           28 |     2968 | 2024-08-28 | ECLOT           | L   | 0.257      | -            | -                | -                | -         |    -0.57 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           27 |     3012 | 2024-08-27 | Anonymo         | W   | 0.251      | 0.371        | 0.064 (0.006)    | 0.407 (0.038)    | 0 (0.000) |     3.69 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           26 |     3024 | 2024-08-27 | Metizport       | L   | 0.250      | -            | -                | -                | -         |    -0.51 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           25 |     3094 | 2024-08-26 | GUN5            | L   | 0.244      | -            | -                | -                | -         |    -1.78 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           24 |     3156 | 2024-08-24 | ECSTATIC        | W   | 0.230      | 0.371        | 0.079 (0.007)    | 1.000 (0.085)    | 0 (0.000) |     4.71 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           23 |     3179 | 2024-08-23 | Sampi           | L   | 0.224      | -            | -                | -                | -         |    -2.36 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           22 |     3206 | 2024-08-22 | ENCE            | L   | 0.218      | -            | -                | -                | -         |    -1.05 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           21 |     3246 | 2024-08-21 | B8              | L   | 0.212      | -            | -                | -                | -         |    -1.24 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           20 |     3274 | 2024-08-21 | PARIVISION      | L   | 0.210      | -            | -                | -                | -         |    -3.16 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           19 |     3322 | 2024-08-20 | Revenant        | W   | 0.203      | -            | -                | -                | 0 (0.000) |     2.11 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           18 |     3353 | 2024-08-19 | kONO            | W   | 0.197      | 0.384        | 0.045 (0.003)    | 0.735 (0.056)    | 0 (0.000) |     3.62 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           17 |     3359 | 2024-08-19 | Alliance        | W   | 0.196      | -            | -                | -                | 0 (0.000) |     3.77 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           16 |     3394 | 2024-08-17 | Monte           | L   | 0.185      | -            | -                | -                | -         |    -1.77 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           15 |     3418 | 2024-08-16 | Alliance        | W   | 0.177      | 0.371        | 0.037 (0.002)    | 0.385 (0.025)    | -         |     3.44 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           14 |     3454 | 2024-08-15 | Into the Breach | L   | 0.171      | -            | -                | -                | -         |    -2.52 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           13 |     3473 | 2024-08-14 | 1WIN            | L   | 0.164      | -            | -                | -                | -         |    -3.93 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           12 |     3587 | 2024-08-11 | TSM             | L   | 0.144      | -            | -                | -                | -         |    -2.23 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           11 |     3601 | 2024-08-10 | Johnny Speeds   | L   | 0.138      | -            | -                | -                | -         |    -1.04 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           10 |     3610 | 2024-08-10 | kONO            | L   | 0.136      | -            | -                | -                | -         |    -1.81 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|            9 |     3662 | 2024-08-08 | Astralis Talent | W   | 0.124      | 0.333        | -                | 0.476 (0.020)    | -         |     1.43 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|            8 |     3665 | 2024-08-08 | ECLOT           | W   | 0.123      | 0.333        | 0.286 (0.012)    | 1.000 (0.041)    | -         |     3.63 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|            7 |     3718 | 2024-08-07 | TSM             | L   | 0.116      | -            | -                | -                | -         |    -1.82 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|            6 |     3754 | 2024-08-06 | ALASKA          | W   | 0.110      | 0.333        | 0.050 (0.002)    | -                | -         |     2.17 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|            5 |     4020 | 2024-07-30 | Rhyno           | W   | 0.063      | -            | -                | -                | -         |     0.71 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|            4 |     4248 | 2024-07-23 | Rebels          | L   | 0.016      | -            | -                | -                | -         |    -0.29 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|            3 |     4262 | 2024-07-22 | DASH            | W   | 0.011      | -            | -                | -                | -         |     0.09 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|            2 |     4269 | 2024-07-22 | Illuminar       | W   | 0.009      | -            | -                | -                | -         |     0.07 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|            1 |     4293 | 2024-07-21 | 9INE            | L   | 0.004      | -            | -                | -                | -         |    -0.04 | bajmi, Demho, ex1st, fr3nd, hotd0g  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,499.35)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-26 |      0.652 | $3,027.00      | $1,973.95       |
| 2024-08-30 |      0.270 | $1,000.00      | $269.90         |
| 2024-08-12 |      0.151 | $1,500.00      | $225.85         |
| 2024-07-25 |      0.030 | $1,000.00      | $29.64          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
