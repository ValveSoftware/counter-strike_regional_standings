### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, s1mple, Snappi<br />
Global Rank: [58](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_06.md)<br />
Regional Rank: [41]( ../../standings_europe_2025_01_06.md)<br />
<br />
Final Rank Value:  1055.6<br />
<br />
Final Rank Value (1055.6) = Starting Rank Value (1007.4) + Head To Head Adjustments (48.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.489[<sup>1</sup>](#table2)
- Bounty Collected: 0.378[<sup>2</sup>](#table1)
- Opponent Network: 0.065[<sup>2</sup>](#table1)
- LAN Wins: 0.297[<sup>2</sup>](#table1)

The average of these factors is 0.307<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1007.4
- 400 + ( ( 0.307 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 1007.4


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
|           36 |      666 | 2024-11-19 | GamerLegion     | L   | 0.878      | -            | -                | -                | -         |    -5.90 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           35 |      682 | 2024-11-17 | SAW             | L   | 0.870      | -            | -                | -                | -         |    -4.24 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           34 |      693 | 2024-11-17 | FaZe            | L   | 0.866      | -            | -                | -                | -         |    -0.38 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           33 |      706 | 2024-11-16 | ECLOT           | W   | 0.864      | 0.143        | 0.267 (0.033)    | 1.000 (0.123)    | 1 (0.864) |    18.36 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           32 |     1209 | 2024-10-26 | Eternal Fire    | L   | 0.719      | -            | -                | -                | -         |    -2.11 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           31 |     1230 | 2024-10-25 | SAW             | L   | 0.712      | -            | -                | -                | -         |    -3.28 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           30 |     1266 | 2024-10-21 | Virtus.pro      | L   | 0.687      | -            | -                | -                | -         |    -3.51 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           29 |     1273 | 2024-10-21 | 3DMAX           | L   | 0.685      | -            | -                | -                | -         |    -3.28 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           28 |     1989 | 2024-09-26 | FaZe            | L   | 0.519      | -            | -                | -                | -         |    -0.18 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           27 |     2040 | 2024-09-25 | Natus Vincere   | L   | 0.512      | -            | -                | -                | -         |    -0.24 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           26 |     2381 | 2024-09-14 | RED Canids      | L   | 0.439      | -            | -                | -                | -         |    -6.29 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |     2413 | 2024-09-13 | Virtus.pro      | L   | 0.433      | -            | -                | -                | -         |    -2.58 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |     2451 | 2024-09-12 | ATOX            | W   | 0.426      | 0.889        | 0.114 (0.043)    | 0.434 (0.164)    | 1 (0.426) |     8.62 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |     2478 | 2024-09-11 | FURIA           | L   | 0.419      | -            | -                | -                | -         |    -0.65 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     2846 | 2024-08-29 | Virtus.pro      | L   | 0.332      | -            | -                | -                | -         |    -1.93 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     2881 | 2024-08-28 | HEROIC          | L   | 0.326      | -            | -                | -                | -         |    -0.21 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     2901 | 2024-08-28 | Spirit          | L   | 0.325      | -            | -                | -                | -         |    -0.06 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     2932 | 2024-08-27 | Eternal Fire    | L   | 0.321      | -            | -                | -                | -         |    -1.36 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     2957 | 2024-08-27 | paiN            | L   | 0.318      | -            | -                | -                | -         |    -0.73 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     2993 | 2024-08-26 | 3DMAX           | W   | 0.314      | 0.143        | 0.434 (0.019)    | 0.610 (0.027)    | 0 (0.000) |     8.84 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     3015 | 2024-08-26 | OG              | W   | 0.313      | 0.143        | 0.164 (0.007)    | -                | 0 (0.000) |     3.81 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     3037 | 2024-08-26 | 9z              | W   | 0.312      | -            | -                | -                | 1 (0.312) |     4.36 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     3058 | 2024-08-25 | Virtus.pro      | W   | 0.308      | 0.535        | 0.158 (0.026)    | 0.340 (0.056)    | -         |     8.13 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     3070 | 2024-08-25 | BetBoom         | W   | 0.305      | 0.143        | -                | 0.437 (0.019)    | 1 (0.305) |     5.86 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     3083 | 2024-08-24 | Complexity      | W   | 0.300      | 0.535        | 0.126 (0.020)    | 0.306 (0.049)    | -         |     8.23 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     3089 | 2024-08-24 | 9z              | L   | 0.299      | -            | -                | -                | -         |    -5.02 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           10 |     3131 | 2024-08-22 | M80             | W   | 0.288      | 0.535        | 0.142 (0.022)    | 0.461 (0.071)    | -         |     6.48 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            9 |     3441 | 2024-08-13 | FaZe            | L   | 0.226      | -            | -                | -                | -         |    -0.06 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            8 |     3489 | 2024-08-12 | Virtus.pro      | W   | 0.219      | 1.000        | 0.158 (0.035)    | 0.340 (0.075)    | 1 (0.219) |     5.91 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            7 |     3515 | 2024-08-11 | MOUZ            | L   | 0.213      | -            | -                | -                | -         |    -0.07 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            6 |     3556 | 2024-08-09 | BIG             | W   | 0.200      | 0.143        | 0.243 (0.007)    | -                | 1 (0.200) |     5.68 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     3578 | 2024-08-08 | ALTERNATE aTTaX | W   | 0.194      | 0.143        | -                | 0.706 (0.020)    | 1 (0.194) |     4.05 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     3622 | 2024-08-07 | Eternal Fire    | L   | 0.187      | -            | -                | -                | -         |    -0.61 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     3810 | 2024-08-02 | Astralis        | L   | 0.153      | -            | -                | -                | -         |    -0.69 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     3932 | 2024-07-30 | GamerLegion     | W   | 0.134      | 0.581        | 0.190 (0.015)    | 0.616 (0.048)    | 1 (0.134) |     3.78 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     3963 | 2024-07-29 | Astralis        | L   | 0.128      | -            | -                | -                | -         |    -0.57 | dupreeh, Maden, Magisk, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,827.47)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.727 | $2,000.00      | $1,454.58       |
| 2024-09-29 |      0.540 | $10,000.00     | $5,404.13       |
| 2024-09-22 |      0.494 | $7,000.00      | $3,461.00       |
| 2024-09-01 |      0.353 | $5,000.00      | $1,762.89       |
| 2024-08-25 |      0.308 | $20,000.00     | $6,152.51       |
| 2024-08-18 |      0.261 | $16,000.00     | $4,176.34       |
| 2024-08-04 |      0.167 | $8,500.00      | $1,416.01       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
