### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, s1mple, Snappi<br />
Global Rank: [63](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [45]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  1012.9<br />
<br />
Final Rank Value (1012.9) = Starting Rank Value (970.5) + Head To Head Adjustments (42.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.482[<sup>1</sup>](#table2)
- Bounty Collected: 0.363[<sup>2</sup>](#table1)
- Opponent Network: 0.052[<sup>2</sup>](#table1)
- LAN Wins: 0.255[<sup>2</sup>](#table1)

The average of these factors is 0.288<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 970.5
- 400 + ( ( 0.288 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 970.5


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
|           36 |      734 | 2024-11-19 | GamerLegion     | L   | 0.810      | -            | -                | -                | -         |    -4.16 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           35 |      750 | 2024-11-17 | SAW             | L   | 0.802      | -            | -                | -                | -         |    -3.69 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           34 |      761 | 2024-11-17 | FaZe            | L   | 0.797      | -            | -                | -                | -         |    -0.25 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           33 |      774 | 2024-11-16 | ECLOT           | W   | 0.796      | 0.143        | 0.286 (0.033)    | 1.000 (0.114)    | 1 (0.796) |    18.48 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           32 |     1277 | 2024-10-26 | Eternal Fire    | L   | 0.650      | -            | -                | -                | -         |    -1.97 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           31 |     1298 | 2024-10-25 | SAW             | L   | 0.644      | -            | -                | -                | -         |    -2.81 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           30 |     1334 | 2024-10-21 | Virtus.pro      | L   | 0.619      | -            | -                | -                | -         |    -2.99 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           29 |     1341 | 2024-10-21 | 3DMAX           | L   | 0.617      | -            | -                | -                | -         |    -2.52 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           28 |     2057 | 2024-09-26 | FaZe            | L   | 0.450      | -            | -                | -                | -         |    -0.11 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           27 |     2108 | 2024-09-25 | Natus Vincere   | L   | 0.443      | -            | -                | -                | -         |    -0.19 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           26 |     2449 | 2024-09-14 | RED Canids      | L   | 0.371      | -            | -                | -                | -         |    -4.73 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |     2481 | 2024-09-13 | Virtus.pro      | L   | 0.364      | -            | -                | -                | -         |    -2.01 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |     2519 | 2024-09-12 | ATOX            | W   | 0.357      | 0.889        | 0.126 (0.040)    | 0.453 (0.144)    | 1 (0.357) |     8.21 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |     2546 | 2024-09-11 | FURIA           | L   | 0.351      | -            | -                | -                | -         |    -0.45 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     2914 | 2024-08-29 | Virtus.pro      | L   | 0.263      | -            | -                | -                | -         |    -1.42 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     2949 | 2024-08-28 | Falcons         | L   | 0.258      | -            | -                | -                | -         |    -0.11 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     2969 | 2024-08-28 | Spirit          | L   | 0.256      | -            | -                | -                | -         |    -0.03 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     3000 | 2024-08-27 | Eternal Fire    | L   | 0.252      | -            | -                | -                | -         |    -1.04 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     3025 | 2024-08-27 | paiN            | L   | 0.250      | -            | -                | -                | -         |    -0.49 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     3061 | 2024-08-26 | 3DMAX           | W   | 0.246      | 0.143        | 0.433 (0.015)    | 0.578 (0.020)    | 0 (0.000) |     7.01 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     3083 | 2024-08-26 | OG              | W   | 0.245      | 0.143        | 0.171 (0.006)    | -                | 0 (0.000) |     3.32 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     3105 | 2024-08-26 | 9z              | W   | 0.243      | -            | -                | -                | 1 (0.243) |     3.75 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     3126 | 2024-08-25 | Virtus.pro      | W   | 0.239      | 0.535        | 0.133 (0.017)    | 0.381 (0.049)    | -         |     6.38 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     3138 | 2024-08-25 | BetBoom         | W   | 0.236      | 0.143        | -                | 0.425 (0.014)    | 1 (0.236) |     4.85 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     3151 | 2024-08-24 | Complexity      | W   | 0.231      | 0.535        | 0.122 (0.015)    | 0.293 (0.036)    | -         |     6.40 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     3157 | 2024-08-24 | 9z              | L   | 0.230      | -            | -                | -                | -         |    -3.56 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           10 |     3199 | 2024-08-22 | M80             | W   | 0.219      | 0.535        | 0.141 (0.016)    | 0.439 (0.051)    | -         |     5.13 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            9 |     3509 | 2024-08-13 | FaZe            | L   | 0.157      | -            | -                | -                | -         |    -0.03 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            8 |     3557 | 2024-08-12 | Virtus.pro      | W   | 0.151      | 1.000        | 0.133 (0.020)    | 0.381 (0.057)    | 1 (0.151) |     4.08 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            7 |     3583 | 2024-08-11 | MOUZ            | L   | 0.144      | -            | -                | -                | -         |    -0.04 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            6 |     3624 | 2024-08-09 | BIG             | W   | 0.132      | 0.143        | 0.257 (0.005)    | -                | 1 (0.132) |     3.80 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     3646 | 2024-08-08 | ALTERNATE aTTaX | W   | 0.126      | 0.143        | -                | 0.684 (0.012)    | 1 (0.126) |     2.77 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     3690 | 2024-08-07 | Eternal Fire    | L   | 0.119      | -            | -                | -                | -         |    -0.40 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     3878 | 2024-08-02 | Astralis        | L   | 0.084      | -            | -                | -                | -         |    -0.35 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     4000 | 2024-07-30 | GamerLegion     | W   | 0.065      | 0.581        | 0.200 (0.008)    | 0.604 (0.023)    | 1 (0.065) |     1.89 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     4031 | 2024-07-29 | Astralis        | L   | 0.059      | -            | -                | -                | -         |    -0.24 | dupreeh, Maden, Magisk, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($19,128.95)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.659 | $2,000.00      | $1,317.40       |
| 2024-09-29 |      0.472 | $10,000.00     | $4,718.22       |
| 2024-09-22 |      0.426 | $7,000.00      | $2,980.86       |
| 2024-09-01 |      0.284 | $5,000.00      | $1,419.93       |
| 2024-08-25 |      0.239 | $20,000.00     | $4,780.68       |
| 2024-08-18 |      0.192 | $16,000.00     | $3,078.88       |
| 2024-08-04 |      0.098 | $8,500.00      | $832.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
