### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: ben1337, cxzi, FaNg, Infinite, WolfY<br />
Global Rank: [85](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_09_04.md)<br />
Regional Rank: [21]( ../../standings_americas_2024_09_04.md)<br />
<br />
Final Rank Value:  905.4<br />
<br />
Final Rank Value (905.4) = Starting Rank Value (883.7) + Head To Head Adjustments (21.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.404[<sup>1</sup>](#table2)
- Bounty Collected: 0.352[<sup>2</sup>](#table1)
- Opponent Network: 0.186[<sup>2</sup>](#table1)
- LAN Wins: 0.035[<sup>2</sup>](#table1)

The average of these factors is 0.244<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 883.7
- 400 + ( ( 0.244 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 883.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           81 |      132 | 2024-08-29 | Nouns         | L   | 1.000      | -            | -                | -                | -         |   -11.74 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           80 |      136 | 2024-08-29 | Wildcard      | L   | 1.000      | -            | -                | -                | -         |    -8.01 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           79 |      247 | 2024-08-27 | FLUFFY AIMERS | L   | 1.000      | -            | -                | -                | -         |   -24.31 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           78 |      302 | 2024-08-26 | Nouns         | L   | 1.000      | -            | -                | -                | -         |   -14.21 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           77 |      313 | 2024-08-26 | Phoenix       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.20 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           76 |      583 | 2024-08-19 | FLUFFY AIMERS | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.01 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           75 |      588 | 2024-08-19 | InControl     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.91 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           74 |      633 | 2024-08-17 | Elevate       | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.77 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           73 |      638 | 2024-08-17 | E-Xolos LAZER | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.22 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           72 |      663 | 2024-08-16 | Elevate       | L   | 1.000      | -            | -                | -                | -         |   -16.47 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           71 |      679 | 2024-08-15 | Phoenix       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.90 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           70 |      682 | 2024-08-15 | Elevate       | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.23 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           69 |      686 | 2024-08-15 | E-Xolos LAZER | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.12 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           68 |      734 | 2024-08-13 | Nouns         | L   | 1.000      | -            | -                | -                | -         |   -13.80 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           67 |      737 | 2024-08-13 | Nouns         | L   | 1.000      | -            | -                | -                | -         |   -15.07 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           66 |      978 | 2024-08-06 | LAG           | W   | 1.000      | 0.477        | -                | 0.387 (0.185)    | 0 (0.000) |     7.03 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           65 |      983 | 2024-08-06 | LAG           | W   | 1.000      | 0.477        | -                | 0.387 (0.185)    | -         |     7.48 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           64 |     1073 | 2024-08-03 | Elevate       | L   | 0.990      | -            | -                | -                | -         |   -18.02 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           63 |     1235 | 2024-07-30 | NRG           | W   | 0.963      | 0.477        | 0.031 (0.014)    | 0.590 (0.271)    | -         |    15.22 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           62 |     1240 | 2024-07-30 | NRG           | W   | 0.962      | 0.477        | 0.031 (0.014)    | 0.590 (0.271)    | -         |    16.57 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           61 |     1466 | 2024-07-23 | FLUFFY AIMERS | W   | 0.916      | 0.477        | -                | 0.475 (0.207)    | -         |     6.84 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           60 |     1468 | 2024-07-23 | FLUFFY AIMERS | L   | 0.916      | -            | -                | -                | -         |   -22.55 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           59 |     1554 | 2024-07-20 | Wildcard      | L   | 0.896      | -            | -                | -                | -         |   -12.86 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           58 |     1690 | 2024-07-17 | Take Flyte    | W   | 0.876      | -            | -                | -                | -         |     5.64 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           57 |     1694 | 2024-07-17 | Take Flyte    | W   | 0.876      | -            | -                | -                | -         |     5.93 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           56 |     1758 | 2024-07-16 | Limitless     | W   | 0.869      | -            | -                | -                | -         |     2.33 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           55 |     1762 | 2024-07-16 | Limitless     | W   | 0.869      | -            | -                | -                | -         |     2.38 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           54 |     2100 | 2024-06-15 | Falcons       | L   | 0.658      | -            | -                | -                | -         |    -0.70 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           53 |     2144 | 2024-06-14 | The MongolZ   | L   | 0.651      | -            | -                | -                | -         |    -0.12 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           52 |     2254 | 2024-06-09 | Legacy        | L   | 0.623      | -            | -                | -                | -         |   -10.06 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           51 |     2325 | 2024-06-08 | Wildcard      | W   | 0.615      | 0.384        | 0.076 (0.018)    | 0.599 (0.142)    | -         |    10.60 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           50 |     2332 | 2024-06-08 | NRG           | L   | 0.614      | -            | -                | -                | -         |   -11.08 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           49 |     2372 | 2024-06-07 | Nouns         | L   | 0.610      | -            | -                | -                | -         |    -9.62 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           48 |     2381 | 2024-06-07 | Legacy        | W   | 0.608      | 0.143        | 0.093 (0.008)    | -                | -         |     9.36 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           47 |     2388 | 2024-06-07 | NRG           | W   | 0.608      | 0.384        | 0.031 (0.007)    | 0.590 (0.138)    | -         |     8.30 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           46 |     2400 | 2024-06-07 | Nouns         | W   | 0.607      | -            | -                | -                | -         |    10.24 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           45 |     2431 | 2024-06-06 | NRG           | W   | 0.603      | 0.477        | 0.031 (0.009)    | 0.590 (0.170)    | -         |     8.97 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           44 |     2447 | 2024-06-06 | E-Xolos LAZER | W   | 0.601      | -            | -                | -                | -         |     6.11 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           43 |     2501 | 2024-06-05 | Wildcard      | L   | 0.596      | -            | -                | -                | -         |    -7.78 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           42 |     2550 | 2024-06-04 | Elevate       | W   | 0.590      | 0.477        | 0.026 (0.007)    | 0.570 (0.160)    | -         |    10.51 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           41 |     2860 | 2024-05-22 | Nouns         | L   | 0.503      | -            | -                | -                | -         |    -7.51 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           40 |     2870 | 2024-05-22 | M80           | W   | 0.502      | 0.477        | 0.169 (0.041)    | 0.541 (0.130)    | -         |    12.66 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           39 |     2875 | 2024-05-22 | M80           | L   | 0.502      | -            | -                | -                | -         |    -3.13 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           38 |     2908 | 2024-05-21 | Limitless     | W   | 0.496      | -            | -                | -                | -         |     2.64 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           37 |     2911 | 2024-05-21 | Limitless     | W   | 0.496      | -            | -                | -                | -         |     2.70 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           36 |     2944 | 2024-05-20 | Akimbo        | W   | 0.490      | -            | -                | -                | -         |     4.07 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           35 |     3013 | 2024-05-18 | NRG           | L   | 0.475      | -            | -                | -                | -         |    -7.17 | ben1337, chop, cxzi, Infinite, WolfY |
|           34 |     3045 | 2024-05-17 | Legacy        | W   | 0.469      | 0.303        | 0.093 (0.013)    | -                | -         |     7.92 | ben1337, chop, cxzi, Infinite, WolfY |
|           33 |     3074 | 2024-05-16 | FLUFFY AIMERS | W   | 0.463      | -            | -                | -                | -         |     4.26 | ben1337, chop, cxzi, Infinite, WolfY |
|           32 |     3077 | 2024-05-16 | FLUFFY AIMERS | W   | 0.462      | -            | -                | -                | -         |     4.40 | ben1337, chop, cxzi, Infinite, WolfY |
|           31 |     3167 | 2024-05-14 | Mythic        | W   | 0.449      | -            | -                | -                | -         |     5.28 | ben1337, chop, cxzi, RUSH, WolfY     |
|           30 |     3175 | 2024-05-14 | Mythic        | L   | 0.449      | -            | -                | -                | -         |    -9.09 | ben1337, chop, cxzi, RUSH, WolfY     |
|           29 |     3268 | 2024-05-11 | BOSS          | L   | 0.428      | -            | -                | -                | -         |    -8.66 | ben1337, chop, cxzi, RUSH, WolfY     |
|           28 |     3274 | 2024-05-11 | Phoenix       | L   | 0.427      | -            | -                | -                | -         |   -10.09 | ben1337, chop, cxzi, RUSH, WolfY     |
|           27 |     3330 | 2024-05-08 | LAG           | W   | 0.409      | -            | -                | -                | -         |     4.30 | ben1337, chop, cxzi, RUSH, WolfY     |
|           26 |     3335 | 2024-05-08 | LAG           | W   | 0.409      | -            | -                | -                | -         |     4.44 | ben1337, chop, cxzi, RUSH, WolfY     |
|           25 |     3355 | 2024-05-07 | Elevate       | L   | 0.403      | -            | -                | -                | -         |    -5.77 | ben1337, chop, cxzi, RUSH, WolfY     |
|           24 |     3356 | 2024-05-07 | Elevate       | W   | 0.403      | -            | -                | -                | -         |     7.08 | ben1337, chop, cxzi, RUSH, WolfY     |
|           23 |     3374 | 2024-05-06 | NRG           | L   | 0.396      | -            | -                | -                | -         |    -6.91 | ben1337, chop, cxzi, RUSH, WolfY     |
|           22 |     3375 | 2024-05-06 | NRG           | W   | 0.396      | -            | -                | -                | -         |     5.67 | ben1337, chop, cxzi, RUSH, WolfY     |
|           21 |     3446 | 2024-05-02 | Wildcard      | L   | 0.369      | -            | -                | -                | -         |    -5.03 | ben1337, chop, cxzi, RUSH, WolfY     |
|           20 |     3447 | 2024-05-02 | Wildcard      | W   | 0.369      | 0.477        | 0.076 (0.013)    | -                | -         |     6.74 | ben1337, chop, cxzi, RUSH, WolfY     |
|           19 |     3583 | 2024-04-27 | Aurora        | L   | 0.331      | -            | -                | -                | -         |    -0.47 | ben1337, chop, cxzi, RUSH, WolfY     |
|           18 |     3585 | 2024-04-26 | sunday school | W   | 0.330      | -            | -                | -                | 1 (0.330) |     1.24 | ben1337, chop, cxzi, RUSH, WolfY     |
|           17 |     3611 | 2024-04-25 | Aurora        | L   | 0.323      | -            | -                | -                | -         |    -0.44 | ben1337, chop, cxzi, RUSH, WolfY     |
|           16 |     4050 | 2024-04-09 | Take Flyte    | W   | 0.216      | -            | -                | -                | -         |     1.72 | ben1337, chop, cxzi, RUSH, WolfY     |
|           15 |     4057 | 2024-04-09 | Take Flyte    | W   | 0.216      | -            | -                | -                | -         |     1.75 | ben1337, chop, cxzi, RUSH, WolfY     |
|           14 |     4181 | 2024-04-04 | MIGHT         | W   | 0.183      | -            | -                | -                | -         |     0.58 | ben1337, chop, cxzi, RUSH, WolfY     |
|           13 |     4189 | 2024-04-04 | MIGHT         | W   | 0.182      | -            | -                | -                | -         |     0.58 | ben1337, chop, cxzi, RUSH, WolfY     |
|           12 |     4278 | 2024-04-02 | Phoenix       | W   | 0.170      | -            | -                | -                | -         |     1.43 | ben1337, chop, CLASIA, cxzi, WolfY   |
|           11 |     4281 | 2024-04-02 | Nouns         | L   | 0.169      | -            | -                | -                | -         |    -2.55 | ben1337, chop, CLASIA, cxzi, WolfY   |
|           10 |     4359 | 2024-03-27 | Carpe Diem    | W   | 0.130      | -            | -                | -                | -         |     1.13 | ben1337, chop, cxzi, RUSH, WolfY     |
|            9 |     4363 | 2024-03-27 | Carpe Diem    | W   | 0.129      | -            | -                | -                | -         |     1.13 | ben1337, chop, cxzi, RUSH, WolfY     |
|            8 |     4405 | 2024-03-26 | Nouns         | L   | 0.123      | -            | -                | -                | -         |    -1.87 | ben1337, chop, cxzi, RUSH, WolfY     |
|            7 |     4409 | 2024-03-26 | Nouns         | L   | 0.123      | -            | -                | -                | -         |    -1.88 | ben1337, chop, cxzi, RUSH, WolfY     |
|            6 |     4487 | 2024-03-20 | BOSS          | W   | 0.083      | -            | -                | -                | -         |     0.98 | ben1337, chop, cxzi, RUSH, WolfY     |
|            5 |     4491 | 2024-03-20 | BOSS          | W   | 0.083      | -            | -                | -                | -         |     0.98 | ben1337, chop, cxzi, RUSH, WolfY     |
|            4 |     4508 | 2024-03-19 | Phoenix       | W   | 0.077      | -            | -                | -                | -         |     0.65 | ben1337, chop, cxzi, RUSH, WolfY     |
|            3 |     4511 | 2024-03-19 | Phoenix       | W   | 0.076      | -            | -                | -                | -         |     0.65 | ben1337, chop, cxzi, RUSH, WolfY     |
|            2 |     4640 | 2024-03-13 | Carpe Diem    | W   | 0.035      | -            | -                | -                | -         |     0.31 | ben1337, chop, cxzi, RUSH, WolfY     |
|            1 |     4678 | 2024-03-12 | Elevate       | W   | 0.029      | -            | -                | -                | -         |     0.53 | ben1337, chop, cxzi, RUSH, WolfY     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,573.01)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-18 |      1.000 | $750.00        | $750.00         |
| 2024-06-16 |      0.666 | $2,000.00      | $1,332.78       |
| 2024-06-09 |      0.623 | $5,000.00      | $3,115.28       |
| 2024-06-09 |      0.623 | $7,000.00      | $4,359.87       |
| 2024-04-28 |      0.338 | $3,000.00      | $1,015.08       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
