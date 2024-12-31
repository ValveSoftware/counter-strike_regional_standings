### Roster Details<br />
Team Name: ex-Enterprise<br />
Roster: bajmi, Demho, ex1st, mwlky, Sobol<br />
Global Rank: [96](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [69]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  877.4<br />
<br />
Final Rank Value (877.4) = Starting Rank Value (888.0) + Head To Head Adjustments (-10.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.338[<sup>1</sup>](#table2)
- Bounty Collected: 0.324[<sup>2</sup>](#table1)
- Opponent Network: 0.090[<sup>2</sup>](#table1)
- LAN Wins: 0.249[<sup>2</sup>](#table1)

The average of these factors is 0.250<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 888.0
- 400 + ( ( 0.250 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 888.0


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
|           49 |     1176 | 2024-10-26 | Illuminar       | W   | 0.773      | 0.303        | 0.016 (0.004)    | 0.497 (0.117)    | 1 (0.773) |    15.60 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           48 |     1195 | 2024-10-26 | los kogutos     | W   | 0.771      | 0.303        | 0.066 (0.015)    | 0.989 (0.231)    | 1 (0.771) |    17.60 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           47 |     1199 | 2024-10-26 | Insomnia        | W   | 0.771      | -            | -                | -                | 1 (0.771) |     6.54 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           46 |     1429 | 2024-10-13 | Passion UA      | L   | 0.686      | -            | -                | -                | -         |    -3.25 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           45 |     1448 | 2024-10-12 | Illuminar       | L   | 0.679      | -            | -                | -                | -         |    -7.09 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           44 |     2068 | 2024-09-24 | Rebels          | L   | 0.559      | -            | -                | -                | -         |    -7.57 | Demho, ex1st, mwlky, sk1tt, Sobol   |
|           43 |     2102 | 2024-09-23 | los kogutos     | W   | 0.553      | 0.143        | 0.066 (0.005)    | 0.989 (0.078)    | 0 (0.000) |    13.71 | Demho, ex1st, mwlky, sk1tt, Sobol   |
|           42 |     2186 | 2024-09-20 | SovvyKiNG       | L   | 0.532      | -            | -                | -                | -         |   -13.17 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           41 |     2343 | 2024-09-15 | kONO            | L   | 0.498      | -            | -                | -                | -         |    -6.72 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           40 |     2363 | 2024-09-14 | NAVI Junior     | L   | 0.492      | -            | -                | -                | -         |    -3.78 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           39 |     2403 | 2024-09-13 | HOTU            | L   | 0.485      | -            | -                | -                | -         |    -9.71 | bajmi, Demho, ex1st, m4tthi, Sobol  |
|           38 |     2441 | 2024-09-12 | UNiTY           | W   | 0.477      | 0.333        | 0.064 (0.010)    | 0.319 (0.051)    | 0 (0.000) |     9.39 | bajmi, Demho, ex1st, mwlky, Sobol   |
|           37 |     2549 | 2024-09-07 | TNL             | L   | 0.447      | -            | -                | -                | -         |    -8.90 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           36 |     2561 | 2024-09-07 | Partizan        | L   | 0.446      | -            | -                | -                | -         |    -1.76 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           35 |     2690 | 2024-09-03 | HOTU            | L   | 0.420      | -            | -                | -                | -         |    -9.19 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           34 |     2707 | 2024-09-03 | Sampi           | L   | 0.418      | -            | -                | -                | -         |    -4.76 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           33 |     2885 | 2024-08-28 | ECLOT           | L   | 0.378      | -            | -                | -                | -         |    -0.96 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           32 |     2929 | 2024-08-27 | Anonymo         | W   | 0.372      | 0.371        | 0.056 (0.008)    | 0.405 (0.056)    | 0 (0.000) |     5.09 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           31 |     2941 | 2024-08-27 | Metizport       | L   | 0.371      | -            | -                | -                | -         |    -0.96 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           30 |     3011 | 2024-08-26 | GUN5            | L   | 0.365      | -            | -                | -                | -         |    -3.22 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           29 |     3073 | 2024-08-24 | ECSTATIC        | W   | 0.352      | 0.371        | 0.067 (0.009)    | 1.000 (0.130)    | 0 (0.000) |     6.93 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           28 |     3096 | 2024-08-23 | Sampi           | L   | 0.346      | -            | -                | -                | -         |    -3.73 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           27 |     3123 | 2024-08-22 | ENCE            | L   | 0.339      | -            | -                | -                | -         |    -1.63 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           26 |     3163 | 2024-08-21 | B8              | L   | 0.333      | -            | -                | -                | -         |    -1.94 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           25 |     3191 | 2024-08-21 | PARIVISION      | L   | 0.332      | -            | -                | -                | -         |    -4.34 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           24 |     3239 | 2024-08-20 | Revenant        | W   | 0.324      | -            | -                | -                | 0 (0.000) |     3.63 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           23 |     3270 | 2024-08-19 | kONO            | W   | 0.319      | 0.384        | 0.037 (0.005)    | 0.597 (0.073)    | 0 (0.000) |     5.43 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           22 |     3276 | 2024-08-19 | Alliance        | W   | 0.317      | -            | -                | -                | 0 (0.000) |     5.70 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           21 |     3311 | 2024-08-17 | Monte           | L   | 0.306      | -            | -                | -                | -         |    -3.02 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           20 |     3335 | 2024-08-16 | Alliance        | W   | 0.298      | 0.371        | 0.033 (0.004)    | 0.421 (0.047)    | -         |     5.46 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           19 |     3371 | 2024-08-15 | Into the Breach | L   | 0.292      | -            | -                | -                | -         |    -4.17 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           18 |     3390 | 2024-08-14 | 1WIN            | L   | 0.285      | -            | -                | -                | -         |    -6.61 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           17 |     3504 | 2024-08-11 | TSM             | L   | 0.265      | -            | -                | -                | -         |    -3.90 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           16 |     3518 | 2024-08-10 | Johnny Speeds   | L   | 0.259      | -            | -                | -                | -         |    -1.91 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           15 |     3527 | 2024-08-10 | kONO            | L   | 0.257      | -            | -                | -                | -         |    -3.80 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           14 |     3579 | 2024-08-08 | Astralis Talent | W   | 0.245      | 0.333        | -                | 0.455 (0.037)    | -         |     2.59 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           13 |     3582 | 2024-08-08 | ECLOT           | W   | 0.244      | 0.333        | 0.252 (0.020)    | 1.000 (0.081)    | -         |     7.18 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           12 |     3635 | 2024-08-07 | TSM             | L   | 0.237      | -            | -                | -                | -         |    -3.58 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           11 |     3671 | 2024-08-06 | Verdant         | W   | 0.231      | 0.333        | 0.042 (0.003)    | -                | -         |     4.35 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           10 |     3937 | 2024-07-30 | Rhyno           | W   | 0.184      | -            | -                | -                | -         |     2.05 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|            9 |     4165 | 2024-07-23 | Rebels          | L   | 0.137      | -            | -                | -                | -         |    -2.42 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|            8 |     4179 | 2024-07-22 | DASH            | W   | 0.132      | -            | -                | -                | -         |     1.07 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|            7 |     4186 | 2024-07-22 | Illuminar       | W   | 0.131      | -            | -                | -                | -         |     1.04 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|            6 |     4210 | 2024-07-21 | 9INE            | L   | 0.125      | -            | -                | -                | -         |    -1.40 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|            5 |     4276 | 2024-07-19 | UNiTY           | W   | 0.112      | -            | -                | -                | -         |     2.20 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|            4 |     4404 | 2024-07-17 | FORZE Reload    | L   | 0.099      | -            | -                | -                | -         |    -2.80 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|            3 |     4509 | 2024-07-15 | TNL             | W   | 0.084      | -            | -                | -                | -         |     0.93 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|            2 |     4546 | 2024-07-12 | Rebels          | L   | 0.065      | -            | -                | -                | -         |    -1.15 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|            1 |     4627 | 2024-07-08 | Revenant        | W   | 0.038      | -            | -                | -                | -         |     0.39 | bajmi, Demho, ex1st, fr3nd, Sobol   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,290.38)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-26 |      0.773 | $3,027.00      | $2,340.80       |
| 2024-08-30 |      0.391 | $1,000.00      | $391.10         |
| 2024-08-12 |      0.272 | $1,500.00      | $407.64         |
| 2024-07-25 |      0.151 | $1,000.00      | $150.84         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
