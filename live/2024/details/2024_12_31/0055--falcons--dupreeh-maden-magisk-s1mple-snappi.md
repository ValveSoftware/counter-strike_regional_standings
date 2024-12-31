### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, s1mple, Snappi<br />
Global Rank: [55](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [40]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  1079.8<br />
<br />
Final Rank Value (1079.8) = Starting Rank Value (1027.9) + Head To Head Adjustments (51.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.491[<sup>1</sup>](#table2)
- Bounty Collected: 0.388[<sup>2</sup>](#table1)
- Opponent Network: 0.080[<sup>2</sup>](#table1)
- LAN Wins: 0.331[<sup>2</sup>](#table1)

The average of these factors is 0.322<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1027.9
- 400 + ( ( 0.322 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 1027.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |      651 | 2024-11-19 | GamerLegion     | L   | 0.931      | -            | -                | -                | -         |    -7.18 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           35 |      667 | 2024-11-17 | SAW             | L   | 0.923      | -            | -                | -                | -         |    -4.62 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           34 |      678 | 2024-11-17 | FaZe            | L   | 0.918      | -            | -                | -                | -         |    -0.53 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           33 |      691 | 2024-11-16 | ECLOT           | W   | 0.917      | 0.143        | 0.252 (0.033)    | 1.000 (0.131)    | 1 (0.917) |    18.23 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           32 |     1194 | 2024-10-26 | Eternal Fire    | L   | 0.771      | -            | -                | -                | -         |    -2.22 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           31 |     1215 | 2024-10-25 | SAW             | L   | 0.765      | -            | -                | -                | -         |    -3.62 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           30 |     1251 | 2024-10-21 | Virtus.pro      | L   | 0.740      | -            | -                | -                | -         |    -3.90 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           29 |     1258 | 2024-10-21 | 3DMAX           | L   | 0.738      | -            | -                | -                | -         |    -3.91 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           28 |     1974 | 2024-09-26 | FaZe            | L   | 0.572      | -            | -                | -                | -         |    -0.27 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           27 |     2025 | 2024-09-25 | Natus Vincere   | L   | 0.565      | -            | -                | -                | -         |    -0.29 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           26 |     2366 | 2024-09-14 | RED Canids      | L   | 0.492      | -            | -                | -                | -         |    -7.41 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |     2398 | 2024-09-13 | Virtus.pro      | L   | 0.485      | -            | -                | -                | -         |    -3.02 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |     2436 | 2024-09-12 | ATOX            | W   | 0.478      | 0.889        | 0.104 (0.044)    | 0.441 (0.187)    | 1 (0.478) |     8.70 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |     2463 | 2024-09-11 | FURIA           | L   | 0.472      | -            | -                | -                | -         |    -0.85 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     2831 | 2024-08-29 | Virtus.pro      | L   | 0.385      | -            | -                | -                | -         |    -2.34 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     2866 | 2024-08-28 | HEROIC          | L   | 0.379      | -            | -                | -                | -         |    -0.31 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     2886 | 2024-08-28 | Spirit          | L   | 0.378      | -            | -                | -                | -         |    -0.08 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     2917 | 2024-08-27 | Eternal Fire    | L   | 0.373      | -            | -                | -                | -         |    -1.61 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     2942 | 2024-08-27 | paiN            | L   | 0.371      | -            | -                | -                | -         |    -0.95 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     2978 | 2024-08-26 | 3DMAX           | W   | 0.367      | 0.143        | 0.428 (0.022)    | 0.664 (0.035)    | 0 (0.000) |    10.20 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     3000 | 2024-08-26 | OG              | W   | 0.366      | 0.143        | 0.157 (0.008)    | -                | 0 (0.000) |     4.14 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     3022 | 2024-08-26 | 9z              | W   | 0.364      | -            | -                | -                | 1 (0.364) |     4.86 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     3043 | 2024-08-25 | Virtus.pro      | W   | 0.360      | 0.535        | 0.168 (0.032)    | 0.364 (0.070)    | -         |     9.47 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     3055 | 2024-08-25 | BetBoom         | W   | 0.358      | 0.143        | -                | 0.468 (0.024)    | 1 (0.358) |     6.57 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     3068 | 2024-08-24 | Complexity      | W   | 0.352      | 0.535        | 0.126 (0.024)    | 0.330 (0.062)    | -         |     9.60 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     3074 | 2024-08-24 | 9z              | L   | 0.351      | -            | -                | -                | -         |    -6.10 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           10 |     3116 | 2024-08-22 | M80             | W   | 0.340      | 0.535        | 0.141 (0.026)    | 0.501 (0.091)    | -         |     7.55 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            9 |     3426 | 2024-08-13 | FaZe            | L   | 0.278      | -            | -                | -                | -         |    -0.09 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            8 |     3474 | 2024-08-12 | Virtus.pro      | W   | 0.272      | 1.000        | 0.168 (0.046)    | 0.364 (0.099)    | 1 (0.272) |     7.31 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            7 |     3500 | 2024-08-11 | MOUZ            | L   | 0.265      | -            | -                | -                | -         |    -0.10 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            6 |     3541 | 2024-08-09 | BIG             | W   | 0.253      | 0.143        | 0.230 (0.008)    | -                | 1 (0.253) |     7.10 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     3563 | 2024-08-08 | ALTERNATE aTTaX | W   | 0.247      | 0.143        | -                | 0.760 (0.027)    | 1 (0.247) |     4.90 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     3607 | 2024-08-07 | Eternal Fire    | L   | 0.240      | -            | -                | -                | -         |    -0.75 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     3795 | 2024-08-02 | Astralis        | L   | 0.205      | -            | -                | -                | -         |    -0.96 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     3917 | 2024-07-30 | GamerLegion     | W   | 0.187      | 0.581        | 0.181 (0.020)    | 0.654 (0.071)    | 1 (0.187) |     5.20 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     3948 | 2024-07-29 | Astralis        | L   | 0.180      | -            | -                | -                | -         |    -0.83 | dupreeh, Maden, Magisk, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,430.64)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.780 | $2,000.00      | $1,559.79       |
| 2024-09-29 |      0.593 | $10,000.00     | $5,930.14       |
| 2024-09-22 |      0.547 | $7,000.00      | $3,829.21       |
| 2024-09-01 |      0.405 | $5,000.00      | $2,025.90       |
| 2024-08-25 |      0.360 | $20,000.00     | $7,204.53       |
| 2024-08-18 |      0.314 | $16,000.00     | $5,017.96       |
| 2024-08-04 |      0.219 | $8,500.00      | $1,863.12       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
