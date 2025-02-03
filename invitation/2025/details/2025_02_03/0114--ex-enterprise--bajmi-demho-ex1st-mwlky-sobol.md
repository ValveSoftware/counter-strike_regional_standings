### Roster Details<br />
Team Name: ex-Enterprise<br />
Roster: bajmi, Demho, ex1st, mwlky, Sobol<br />
Global Rank: [114](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [80]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  819.9<br />
<br />
Final Rank Value (819.9) = Starting Rank Value (814.4) + Head To Head Adjustments (5.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.331[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.036[<sup>2</sup>](#table1)
- LAN Wins: 0.200[<sup>2</sup>](#table1)

The average of these factors is 0.214<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 814.4
- 400 + ( ( 0.214 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 814.4


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
|           37 |     1566 | 2024-10-26 | Illuminar       | W   | 0.534      | 0.303        | 0.018 (0.003)    | 0.486 (0.079)    | 1 (0.534) |    10.73 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           36 |     1585 | 2024-10-26 | los kogutos     | W   | 0.532      | 0.303        | 0.070 (0.011)    | 0.779 (0.126)    | 1 (0.532) |    13.22 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           35 |     1589 | 2024-10-26 | Insomnia        | W   | 0.531      | 0.303        | 0.004 (0.001)    | 0.053 (0.008)    | 1 (0.531) |     5.20 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           34 |     1819 | 2024-10-13 | Passion UA      | L   | 0.446      | -            | -                | -                | -         |    -2.19 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           33 |     1838 | 2024-10-12 | Illuminar       | L   | 0.439      | -            | -                | -                | -         |    -4.87 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           32 |     2458 | 2024-09-24 | Rebels          | L   | 0.320      | -            | -                | -                | -         |    -4.24 | Demho, ex1st, mwlky, sk1tt, Sobol  |
|           31 |     2492 | 2024-09-23 | los kogutos     | W   | 0.314      | 0.143        | 0.070 (0.003)    | 0.779 (0.035)    | 0 (0.000) |     8.25 | Demho, ex1st, mwlky, sk1tt, Sobol  |
|           30 |     2576 | 2024-09-20 | SovvyKiNG       | L   | 0.292      | -            | -                | -                | -         |    -7.27 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           29 |     2733 | 2024-09-15 | kONO            | L   | 0.258      | -            | -                | -                | -         |    -3.10 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           28 |     2753 | 2024-09-14 | NAVI Junior     | L   | 0.252      | -            | -                | -                | -         |    -1.62 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           27 |     2793 | 2024-09-13 | HOTU            | L   | 0.245      | -            | -                | -                | -         |    -4.83 | bajmi, Demho, ex1st, m4tthi, Sobol |
|           26 |     2831 | 2024-09-12 | UNiTY           | W   | 0.238      | 0.333        | 0.069 (0.005)    | 0.250 (0.020)    | 0 (0.000) |     4.64 | bajmi, Demho, ex1st, mwlky, Sobol  |
|           25 |     2939 | 2024-09-07 | TNL             | L   | 0.207      | -            | -                | -                | -         |    -3.61 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           24 |     2951 | 2024-09-07 | Partizan        | L   | 0.206      | -            | -                | -                | -         |    -0.85 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           23 |     3080 | 2024-09-03 | HOTU            | L   | 0.180      | -            | -                | -                | -         |    -3.70 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           22 |     3097 | 2024-09-03 | Sampi           | L   | 0.178      | -            | -                | -                | -         |    -1.95 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           21 |     3275 | 2024-08-28 | ECLOT           | L   | 0.138      | -            | -                | -                | -         |    -0.34 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           20 |     3319 | 2024-08-27 | Anonymo         | W   | 0.132      | 0.371        | 0.066 (0.003)    | 0.423 (0.021)    | 0 (0.000) |     2.13 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           19 |     3331 | 2024-08-27 | Metizport       | L   | 0.131      | -            | -                | -                | -         |    -0.28 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           18 |     3401 | 2024-08-26 | GUN5            | L   | 0.125      | -            | -                | -                | -         |    -0.85 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           17 |     3463 | 2024-08-24 | ECSTATIC        | W   | 0.112      | 0.371        | 0.081 (0.003)    | 1.000 (0.041)    | 0 (0.000) |     2.35 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           16 |     3486 | 2024-08-23 | Sampi           | L   | 0.106      | -            | -                | -                | -         |    -1.14 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           15 |     3513 | 2024-08-22 | ENCE            | L   | 0.100      | -            | -                | -                | -         |    -0.48 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           14 |     3553 | 2024-08-21 | B8              | L   | 0.093      | -            | -                | -                | -         |    -0.46 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           13 |     3581 | 2024-08-21 | PARIVISION      | L   | 0.092      | -            | -                | -                | -         |    -1.40 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           12 |     3629 | 2024-08-20 | Revenant        | W   | 0.085      | -            | -                | -                | 0 (0.000) |     0.84 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           11 |     3660 | 2024-08-19 | kONO            | W   | 0.079      | 0.384        | 0.048 (0.001)    | 0.600 (0.018)    | 0 (0.000) |     1.51 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           10 |     3666 | 2024-08-19 | Alliance        | W   | 0.078      | 0.143        | -                | 0.404 (0.004)    | 0 (0.000) |     1.65 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            9 |     3701 | 2024-08-17 | Monte           | L   | 0.066      | -            | -                | -                | -         |    -0.53 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            8 |     3725 | 2024-08-16 | Alliance        | W   | 0.058      | 0.371        | 0.038 (0.001)    | 0.404 (0.009)    | -         |     1.25 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            7 |     3761 | 2024-08-15 | moneyF          | L   | 0.052      | -            | -                | -                | -         |    -0.76 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            6 |     3780 | 2024-08-14 | 1WIN            | L   | 0.045      | -            | -                | -                | -         |    -1.24 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            5 |     3894 | 2024-08-11 | TSM             | L   | 0.025      | -            | -                | -                | -         |    -0.38 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            4 |     3908 | 2024-08-10 | Johnny Speeds   | L   | 0.019      | -            | -                | -                | -         |    -0.15 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            3 |     3917 | 2024-08-10 | kONO            | L   | 0.018      | -            | -                | -                | -         |    -0.22 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            2 |     3969 | 2024-08-08 | Astralis Talent | W   | 0.005      | -            | -                | -                | -         |     0.07 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|            1 |     3972 | 2024-08-08 | ECLOT           | W   | 0.004      | 0.333        | 0.288 (0.000)    | -                | -         |     0.13 | bajmi, Demho, ex1st, fr3nd, Sobol  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,814.50)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-26 |      0.534 | $3,027.00      | $1,615.11       |
| 2024-08-30 |      0.151 | $1,000.00      | $151.36         |
| 2024-08-12 |      0.032 | $1,500.00      | $48.04          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
