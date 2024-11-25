### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, s1mple, Snappi<br />
Global Rank: [34](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_25.md)<br />
Regional Rank: [26]( ../../standings_europe_2024_11_25.md)<br />
<br />
Final Rank Value:  1232.0<br />
<br />
Final Rank Value (1232.0) = Starting Rank Value (1203.6) + Head To Head Adjustments (28.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.515[<sup>1</sup>](#table2)
- Bounty Collected: 0.424[<sup>2</sup>](#table1)
- Opponent Network: 0.119[<sup>2</sup>](#table1)
- LAN Wins: 0.549[<sup>2</sup>](#table1)

The average of these factors is 0.401<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1203.6
- 400 + ( ( 0.401 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 1203.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |      128 | 2024-11-19 | GamerLegion      | L   | 1.000      | -            | -                | -                | -         |   -16.74 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           40 |      144 | 2024-11-17 | SAW              | L   | 1.000      | -            | -                | -                | -         |    -5.24 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           39 |      155 | 2024-11-17 | FaZe             | L   | 1.000      | -            | -                | -                | -         |    -3.39 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           38 |      168 | 2024-11-16 | ECLOT            | W   | 1.000      | 0.143        | 0.187 (0.027)    | 1.000 (0.143)    | 1 (1.000) |    13.50 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           37 |      671 | 2024-10-26 | Eternal Fire     | L   | 1.000      | -            | -                | -                | -         |    -2.87 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           36 |      692 | 2024-10-25 | SAW              | L   | 0.993      | -            | -                | -                | -         |    -5.02 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           35 |      728 | 2024-10-21 | Virtus.pro       | L   | 0.968      | -            | -                | -                | -         |    -6.02 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           34 |      735 | 2024-10-21 | 3DMAX            | L   | 0.966      | -            | -                | -                | -         |    -8.71 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           33 |     1451 | 2024-09-26 | FaZe             | L   | 0.800      | -            | -                | -                | -         |    -3.03 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           32 |     1502 | 2024-09-25 | Natus Vincere    | L   | 0.793      | -            | -                | -                | -         |    -0.60 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           31 |     1843 | 2024-09-14 | RED Canids       | L   | 0.720      | -            | -                | -                | -         |   -13.10 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           30 |     1875 | 2024-09-13 | Virtus.pro       | L   | 0.714      | -            | -                | -                | -         |    -5.45 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           29 |     1913 | 2024-09-12 | ATOX             | W   | 0.706      | 0.889        | 0.034 (0.021)    | 0.273 (0.171)    | 1 (0.706) |     2.58 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           28 |     1940 | 2024-09-11 | FURIA            | L   | 0.700      | -            | -                | -                | -         |    -4.02 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           27 |     2308 | 2024-08-29 | Virtus.pro       | L   | 0.613      | -            | -                | -                | -         |    -4.64 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           26 |     2343 | 2024-08-28 | HEROIC           | L   | 0.607      | -            | -                | -                | -         |    -2.01 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |     2363 | 2024-08-28 | Spirit           | L   | 0.606      | -            | -                | -                | -         |    -0.67 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |     2394 | 2024-08-27 | Eternal Fire     | L   | 0.602      | -            | -                | -                | -         |    -2.60 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |     2419 | 2024-08-27 | paiN             | L   | 0.599      | -            | -                | -                | -         |    -3.88 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     2455 | 2024-08-26 | 3DMAX            | W   | 0.595      | 0.143        | 0.396 (0.034)    | 0.764 (0.065)    | -         |    14.51 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     2477 | 2024-08-26 | OG               | W   | 0.594      | -            | -                | -                | -         |     3.90 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     2499 | 2024-08-26 | 9z               | W   | 0.592      | -            | -                | -                | 1 (0.592) |     7.36 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     2520 | 2024-08-25 | Virtus.pro       | W   | 0.589      | 0.535        | 0.199 (0.063)    | 0.357 (0.112)    | -         |    14.85 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     2532 | 2024-08-25 | BetBoom          | W   | 0.586      | 0.143        | -                | 0.519 (0.043)    | 1 (0.586) |     8.31 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     2545 | 2024-08-24 | Complexity       | W   | 0.581      | 0.535        | 0.127 (0.040)    | 0.341 (0.106)    | -         |    14.51 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     2551 | 2024-08-24 | 9z               | L   | 0.579      | -            | -                | -                | -         |   -10.32 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     2593 | 2024-08-22 | M80              | W   | 0.569      | 0.535        | 0.157 (0.048)    | 0.588 (0.179)    | -         |    11.76 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     2903 | 2024-08-13 | FaZe             | L   | 0.507      | -            | -                | -                | -         |    -1.54 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     2951 | 2024-08-12 | Virtus.pro       | W   | 0.500      | 1.000        | 0.199 (0.099)    | 0.357 (0.178)    | 1 (0.500) |    13.17 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     2977 | 2024-08-11 | MOUZ             | L   | 0.494      | -            | -                | -                | -         |    -0.97 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     3018 | 2024-08-09 | BIG              | W   | 0.481      | -            | -                | -                | 1 (0.481) |    12.19 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           10 |     3040 | 2024-08-08 | ALTERNATE aTTaX  | W   | 0.475      | 0.143        | -                | 0.729 (0.049)    | 1 (0.475) |     7.18 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            9 |     3084 | 2024-08-07 | Eternal Fire     | L   | 0.468      | -            | -                | -                | -         |    -1.18 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            8 |     3272 | 2024-08-02 | Astralis         | L   | 0.434      | -            | -                | -                | -         |    -2.06 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            7 |     3394 | 2024-07-30 | GamerLegion      | W   | 0.415      | 0.581        | 0.125 (0.030)    | 0.583 (0.140)    | 1 (0.415) |     6.64 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            6 |     3425 | 2024-07-29 | Astralis         | L   | 0.408      | -            | -                | -                | -         |    -1.90 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     4193 | 2024-06-16 | Complexity       | L   | 0.121      | -            | -                | -                | -         |    -0.70 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     4198 | 2024-06-16 | ENCE             | W   | 0.120      | 0.500        | 0.295 (0.018)    | -                | 1 (0.120) |     2.71 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     4227 | 2024-06-15 | The MongolZ      | W   | 0.114      | 0.500        | 1.000 (0.057)    | -                | 1 (0.114) |     3.52 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     4237 | 2024-06-15 | Party Astronauts | W   | 0.112      | -            | -                | -                | -         |     0.43 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     4280 | 2024-06-14 | Aurora           | L   | 0.106      | -            | -                | -                | -         |    -2.07 | dupreeh, Maden, Magisk, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($45,464.33)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-09-29 |      0.821 | $10,000.00     | $8,212.95       |
| 2024-09-22 |      0.775 | $7,000.00      | $5,427.17       |
| 2024-09-01 |      0.633 | $5,000.00      | $3,167.30       |
| 2024-08-25 |      0.589 | $20,000.00     | $11,770.15      |
| 2024-08-18 |      0.542 | $16,000.00     | $8,670.46       |
| 2024-08-04 |      0.447 | $8,500.00      | $3,803.51       |
| 2024-06-16 |      0.121 | $20,000.00     | $2,412.79       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
