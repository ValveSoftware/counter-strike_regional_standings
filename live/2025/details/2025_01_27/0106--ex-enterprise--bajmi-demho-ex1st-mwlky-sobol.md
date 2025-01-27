### Roster Details<br />
Team Name: ex-Enterprise<br />
Roster: bajmi, Demho, ex1st, mwlky, Sobol<br />
Global Rank: [106](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [75]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  846.5<br />
<br />
Final Rank Value (846.5) = Starting Rank Value (843.7) + Head To Head Adjustments (2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.334[<sup>1</sup>](#table2)
- Bounty Collected: 0.298[<sup>2</sup>](#table1)
- Opponent Network: 0.045[<sup>2</sup>](#table1)
- LAN Wins: 0.230[<sup>2</sup>](#table1)

The average of these factors is 0.227<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 843.7
- 400 + ( ( 0.227 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 843.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |     1448 | 2024-10-26 | Illuminar       | W   | 0.580      | 0.303        | 0.018 (0.003)    | 0.487 (0.086)    | 1 (0.580) |    11.78 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           38 |     1467 | 2024-10-26 | los kogutos     | W   | 0.578      | 0.303        | 0.070 (0.012)    | 0.808 (0.142)    | 1 (0.578) |    14.36 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           37 |     1471 | 2024-10-26 | Insomnia        | W   | 0.578      | 0.303        | -                | 0.054 (0.009)    | 1 (0.578) |     5.25 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           36 |     1701 | 2024-10-13 | Passion UA      | L   | 0.493      | -            | -                | -                | -         |    -2.36 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           35 |     1720 | 2024-10-12 | Illuminar       | L   | 0.486      | -            | -                | -                | -         |    -5.22 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           34 |     2340 | 2024-09-24 | Rebels          | L   | 0.366      | -            | -                | -                | -         |    -5.09 | Demho, ex1st, mwlky, sk1tt, Sobol  |
|           33 |     2374 | 2024-09-23 | los kogutos     | W   | 0.360      | 0.143        | 0.070 (0.004)    | 0.808 (0.042)    | 0 (0.000) |     9.53 | Demho, ex1st, mwlky, sk1tt, Sobol  |
|           32 |     2458 | 2024-09-20 | SovvyKiNG       | L   | 0.339      | -            | -                | -                | -         |    -8.57 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           31 |     2615 | 2024-09-15 | kONO            | L   | 0.305      | -            | -                | -                | -         |    -3.78 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           30 |     2635 | 2024-09-14 | NAVI Junior     | L   | 0.299      | -            | -                | -                | -         |    -2.03 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           29 |     2675 | 2024-09-13 | HOTU            | L   | 0.292      | -            | -                | -                | -         |    -5.92 | bajmi, Demho, ex1st, m4tthi, Sobol |
|           28 |     2713 | 2024-09-12 | UNiTY           | W   | 0.284      | 0.333        | 0.069 (0.007)    | 0.266 (0.025)    | 0 (0.000) |     5.60 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           27 |     2821 | 2024-09-07 | TNL             | L   | 0.254      | -            | -                | -                | -         |    -4.67 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           26 |     2833 | 2024-09-07 | Partizan        | L   | 0.253      | -            | -                | -                | -         |    -0.96 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           25 |     2962 | 2024-09-03 | HOTU            | L   | 0.227      | -            | -                | -                | -         |    -4.83 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           24 |     2979 | 2024-09-03 | Sampi           | L   | 0.225      | -            | -                | -                | -         |    -2.42 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           23 |     3157 | 2024-08-28 | ECLOT           | L   | 0.185      | -            | -                | -                | -         |    -0.42 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           22 |     3201 | 2024-08-27 | Anonymo         | W   | 0.179      | 0.371        | 0.065 (0.004)    | 0.421 (0.028)    | 0 (0.000) |     2.72 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           21 |     3213 | 2024-08-27 | Metizport       | L   | 0.178      | -            | -                | -                | -         |    -0.34 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           20 |     3283 | 2024-08-26 | GUN5            | L   | 0.172      | -            | -                | -                | -         |    -1.21 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           19 |     3345 | 2024-08-24 | ECSTATIC        | W   | 0.159      | 0.371        | 0.080 (0.005)    | 1.000 (0.059)    | 0 (0.000) |     3.31 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           18 |     3368 | 2024-08-23 | Sampi           | L   | 0.153      | -            | -                | -                | -         |    -1.60 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           17 |     3395 | 2024-08-22 | ENCE            | L   | 0.146      | -            | -                | -                | -         |    -0.71 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           16 |     3435 | 2024-08-21 | B8              | L   | 0.140      | -            | -                | -                | -         |    -0.76 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           15 |     3463 | 2024-08-21 | PARIVISION      | L   | 0.139      | -            | -                | -                | -         |    -2.15 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           14 |     3511 | 2024-08-20 | Revenant        | W   | 0.131      | -            | -                | -                | 0 (0.000) |     1.31 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           13 |     3542 | 2024-08-19 | kONO            | W   | 0.126      | 0.384        | 0.047 (0.002)    | 0.601 (0.029)    | 0 (0.000) |     2.34 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           12 |     3548 | 2024-08-19 | Alliance        | W   | 0.124      | 0.143        | 0.037 (0.001)    | -                | 0 (0.000) |     2.44 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           11 |     3583 | 2024-08-17 | Monte           | L   | 0.113      | -            | -                | -                | -         |    -0.96 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           10 |     3607 | 2024-08-16 | Alliance        | W   | 0.105      | 0.371        | 0.037 (0.001)    | 0.375 (0.015)    | -         |     2.07 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            9 |     3643 | 2024-08-15 | Into the Breach | L   | 0.099      | -            | -                | -                | -         |    -1.47 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            8 |     3662 | 2024-08-14 | 1WIN            | L   | 0.092      | -            | -                | -                | -         |    -2.25 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            7 |     3776 | 2024-08-11 | TSM             | L   | 0.072      | -            | -                | -                | -         |    -1.11 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            6 |     3790 | 2024-08-10 | Johnny Speeds   | L   | 0.066      | -            | -                | -                | -         |    -0.50 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            5 |     3799 | 2024-08-10 | kONO            | L   | 0.064      | -            | -                | -                | -         |    -0.83 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            4 |     3851 | 2024-08-08 | Astralis Talent | W   | 0.052      | -            | -                | -                | -         |     0.65 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            3 |     3854 | 2024-08-08 | ECLOT           | W   | 0.051      | 0.333        | 0.287 (0.005)    | 0.994 (0.017)    | -         |     1.51 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            2 |     3907 | 2024-08-07 | TSM             | L   | 0.044      | -            | -                | -                | -         |    -0.69 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            1 |     3943 | 2024-08-06 | ALASKA          | W   | 0.038      | -            | -                | -                | -         |     0.78 | bajmi, Demho, ex1st, fr3nd, Sobol  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,072.97)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-26 |      0.580 | $3,027.00      | $1,756.67       |
| 2024-08-30 |      0.198 | $1,000.00      | $198.12         |
| 2024-08-12 |      0.079 | $1,500.00      | $118.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
