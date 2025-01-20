### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, s1mple, Snappi<br />
Global Rank: [64](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [46]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  1000.1<br />
<br />
Final Rank Value (1000.1) = Starting Rank Value (959.5) + Head To Head Adjustments (40.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.477[<sup>1</sup>](#table2)
- Bounty Collected: 0.360[<sup>2</sup>](#table1)
- Opponent Network: 0.048[<sup>2</sup>](#table1)
- LAN Wins: 0.242[<sup>2</sup>](#table1)

The average of these factors is 0.282<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 959.5
- 400 + ( ( 0.282 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 959.5


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
|           36 |      720 | 2024-11-19 | GamerLegion     | L   | 0.790      | -            | -                | -                | -         |    -3.15 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           35 |      736 | 2024-11-17 | SAW             | L   | 0.782      | -            | -                | -                | -         |    -3.59 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           34 |      747 | 2024-11-17 | FaZe            | L   | 0.777      | -            | -                | -                | -         |    -0.21 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           33 |      760 | 2024-11-16 | ECLOT           | W   | 0.776      | 0.143        | 0.286 (0.032)    | 1.000 (0.111)    | 1 (0.776) |    18.36 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           32 |     1263 | 2024-10-26 | Eternal Fire    | L   | 0.631      | -            | -                | -                | -         |    -1.88 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           31 |     1284 | 2024-10-25 | SAW             | L   | 0.624      | -            | -                | -                | -         |    -2.71 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           30 |     1320 | 2024-10-21 | Virtus.pro      | L   | 0.599      | -            | -                | -                | -         |    -2.61 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           29 |     1327 | 2024-10-21 | 3DMAX           | L   | 0.597      | -            | -                | -                | -         |    -2.33 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           28 |     2043 | 2024-09-26 | FaZe            | L   | 0.431      | -            | -                | -                | -         |    -0.09 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           27 |     2094 | 2024-09-25 | Natus Vincere   | L   | 0.424      | -            | -                | -                | -         |    -0.18 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           26 |     2435 | 2024-09-14 | RED Canids      | L   | 0.351      | -            | -                | -                | -         |    -4.33 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |     2467 | 2024-09-13 | Virtus.pro      | L   | 0.345      | -            | -                | -                | -         |    -1.70 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |     2505 | 2024-09-12 | ATOX            | W   | 0.337      | 0.889        | 0.128 (0.038)    | 0.460 (0.138)    | 1 (0.337) |     8.02 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |     2532 | 2024-09-11 | FURIA           | L   | 0.331      | -            | -                | -                | -         |    -0.38 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     2900 | 2024-08-29 | Virtus.pro      | L   | 0.244      | -            | -                | -                | -         |    -1.17 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     2935 | 2024-08-28 | Falcons         | L   | 0.238      | -            | -                | -                | -         |    -0.10 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     2955 | 2024-08-28 | Spirit          | L   | 0.237      | -            | -                | -                | -         |    -0.03 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     2986 | 2024-08-27 | Eternal Fire    | L   | 0.232      | -            | -                | -                | -         |    -0.93 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     3011 | 2024-08-27 | paiN            | L   | 0.230      | -            | -                | -                | -         |    -0.41 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     3047 | 2024-08-26 | 3DMAX           | W   | 0.226      | 0.143        | 0.422 (0.014)    | 0.571 (0.018)    | 0 (0.000) |     6.47 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     3069 | 2024-08-26 | OG              | W   | 0.225      | 0.143        | 0.171 (0.005)    | 0.285 (0.009)    | 0 (0.000) |     3.19 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     3091 | 2024-08-26 | 9z              | W   | 0.223      | -            | -                | -                | 1 (0.223) |     3.52 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     3112 | 2024-08-25 | Virtus.pro      | W   | 0.219      | 0.535        | 0.164 (0.019)    | 0.383 (0.045)    | -         |     5.97 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     3124 | 2024-08-25 | BetBoom         | W   | 0.217      | 0.143        | 0.110 (0.003)    | 0.524 (0.016)    | 1 (0.217) |     4.61 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     3137 | 2024-08-24 | Complexity      | W   | 0.212      | 0.535        | 0.119 (0.013)    | 0.290 (0.033)    | -         |     5.88 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     3143 | 2024-08-24 | 9z              | L   | 0.210      | -            | -                | -                | -         |    -3.20 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           10 |     3185 | 2024-08-22 | M80             | W   | 0.199      | 0.535        | 0.139 (0.015)    | 0.433 (0.046)    | -         |     4.72 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            9 |     3495 | 2024-08-13 | FaZe            | L   | 0.137      | -            | -                | -                | -         |    -0.02 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            8 |     3543 | 2024-08-12 | Virtus.pro      | W   | 0.131      | 1.000        | 0.164 (0.022)    | 0.383 (0.050)    | 1 (0.131) |     3.61 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            7 |     3569 | 2024-08-11 | MOUZ            | L   | 0.124      | -            | -                | -                | -         |    -0.03 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            6 |     3610 | 2024-08-09 | BIG             | W   | 0.112      | 0.143        | 0.299 (0.005)    | -                | 1 (0.112) |     3.26 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     3632 | 2024-08-08 | ALTERNATE aTTaX | W   | 0.106      | 0.143        | -                | 0.680 (0.010)    | 1 (0.106) |     2.38 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     3676 | 2024-08-07 | Eternal Fire    | L   | 0.099      | -            | -                | -                | -         |    -0.33 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     3864 | 2024-08-02 | Astralis        | L   | 0.065      | -            | -                | -                | -         |    -0.26 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     3986 | 2024-07-30 | GamerLegion     | W   | 0.046      | -            | -                | -                | 1 (0.046) |     0.42 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     4017 | 2024-07-29 | Astralis        | L   | 0.039      | -            | -                | -                | -         |    -0.16 | dupreeh, Maden, Magisk, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,781.07)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.639 | $2,000.00      | $1,278.05       |
| 2024-09-29 |      0.452 | $10,000.00     | $4,521.45       |
| 2024-09-22 |      0.406 | $7,000.00      | $2,843.12       |
| 2024-09-01 |      0.264 | $5,000.00      | $1,321.55       |
| 2024-08-25 |      0.219 | $20,000.00     | $4,387.14       |
| 2024-08-18 |      0.173 | $16,000.00     | $2,764.05       |
| 2024-08-04 |      0.078 | $8,500.00      | $665.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
