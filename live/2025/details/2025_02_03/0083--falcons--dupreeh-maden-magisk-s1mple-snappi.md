### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, s1mple, Snappi<br />
Global Rank: [83](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [57]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  902.4<br />
<br />
Final Rank Value (902.4) = Starting Rank Value (869.5) + Head To Head Adjustments (32.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.449[<sup>1</sup>](#table2)
- Bounty Collected: 0.334[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.152[<sup>2</sup>](#table1)

The average of these factors is 0.242<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 869.5
- 400 + ( ( 0.242 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 869.5


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
|           32 |     1041 | 2024-11-19 | GamerLegion     | L   | 0.691      | -            | -                | -                | -         |    -0.93 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           31 |     1057 | 2024-11-17 | SAW             | L   | 0.683      | -            | -                | -                | -         |    -3.20 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           30 |     1068 | 2024-11-17 | FaZe            | L   | 0.679      | -            | -                | -                | -         |    -0.11 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           29 |     1081 | 2024-11-16 | ECLOT           | W   | 0.677      | 0.143        | 0.288 (0.028)    | 0.978 (0.095)    | 1 (0.677) |    17.30 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           28 |     1584 | 2024-10-26 | Eternal Fire    | L   | 0.532      | -            | -                | -                | -         |    -0.17 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           27 |     1605 | 2024-10-25 | SAW             | L   | 0.525      | -            | -                | -                | -         |    -2.39 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           26 |     1641 | 2024-10-21 | Virtus.pro      | L   | 0.500      | -            | -                | -                | -         |    -0.46 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           25 |     1648 | 2024-10-21 | 3DMAX           | L   | 0.498      | -            | -                | -                | -         |    -0.64 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           24 |     2364 | 2024-09-26 | FaZe            | L   | 0.332      | -            | -                | -                | -         |    -0.04 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |     2415 | 2024-09-25 | Natus Vincere   | L   | 0.325      | -            | -                | -                | -         |    -0.07 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     2756 | 2024-09-14 | RED Canids      | L   | 0.252      | -            | -                | -                | -         |    -2.33 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     2788 | 2024-09-13 | Virtus.pro      | L   | 0.246      | -            | -                | -                | -         |    -0.23 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     2826 | 2024-09-12 | ATOX            | W   | 0.238      | 0.889        | 0.135 (0.029)    | 0.548 (0.116)    | 1 (0.238) |     6.33 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     2853 | 2024-09-11 | FURIA           | L   | 0.232      | -            | -                | -                | -         |    -0.15 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     3221 | 2024-08-29 | Virtus.pro      | L   | 0.145      | -            | -                | -                | -         |    -0.13 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     3256 | 2024-08-28 | Falcons         | L   | 0.139      | -            | -                | -                | -         |    -0.05 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     3276 | 2024-08-28 | Spirit          | L   | 0.138      | -            | -                | -                | -         |    -0.01 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     3307 | 2024-08-27 | Eternal Fire    | L   | 0.134      | -            | -                | -                | -         |    -0.04 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     3332 | 2024-08-27 | paiN            | L   | 0.131      | -            | -                | -                | -         |    -0.15 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     3368 | 2024-08-26 | 3DMAX           | W   | 0.127      | 0.143        | 0.403 (0.007)    | 0.722 (0.013)    | 0 (0.000) |     3.90 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     3390 | 2024-08-26 | OG              | W   | 0.126      | 0.143        | 0.166 (0.003)    | 0.257 (0.005)    | 0 (0.000) |     2.20 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     3412 | 2024-08-26 | 9z              | W   | 0.124      | 0.143        | 0.051 (0.001)    | 0.168 (0.003)    | 1 (0.124) |     2.12 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           10 |     3433 | 2024-08-25 | Virtus.pro      | W   | 0.120      | 0.535        | 0.154 (0.010)    | 0.628 (0.040)    | 0 (0.000) |     3.70 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            9 |     3445 | 2024-08-25 | BetBoom         | W   | 0.118      | 0.143        | 0.230 (0.004)    | 0.518 (0.009)    | 1 (0.118) |     2.91 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            8 |     3458 | 2024-08-24 | Complexity      | W   | 0.113      | 0.535        | 0.116 (0.007)    | 0.268 (0.016)    | -         |     3.12 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            7 |     3464 | 2024-08-24 | 9z              | L   | 0.111      | -            | -                | -                | -         |    -1.58 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            6 |     3506 | 2024-08-22 | M80             | W   | 0.100      | 0.535        | 0.128 (0.007)    | 0.391 (0.021)    | -         |     2.47 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     3816 | 2024-08-13 | FaZe            | L   | 0.039      | -            | -                | -                | -         |    -0.00 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     3864 | 2024-08-12 | Virtus.pro      | W   | 0.032      | 1.000        | 0.154 (0.005)    | 0.628 (0.020)    | 1 (0.032) |     0.99 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     3890 | 2024-08-11 | MOUZ            | L   | 0.025      | -            | -                | -                | -         |    -0.01 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     3931 | 2024-08-09 | BIG             | W   | 0.013      | -            | -                | -                | 1 (0.013) |     0.40 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     3953 | 2024-08-08 | ALTERNATE aTTaX | W   | 0.007      | -            | -                | -                | 1 (0.007) |     0.16 | dupreeh, Maden, Magisk, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,183.19)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.540 | $2,000.00      | $1,080.31       |
| 2024-09-29 |      0.353 | $10,000.00     | $3,532.75       |
| 2024-09-22 |      0.307 | $7,000.00      | $2,151.03       |
| 2024-09-01 |      0.165 | $5,000.00      | $827.20         |
| 2024-08-25 |      0.120 | $20,000.00     | $2,409.75       |
| 2024-08-18 |      0.074 | $16,000.00     | $1,182.14       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
