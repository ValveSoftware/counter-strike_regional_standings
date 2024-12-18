### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, s1mple, Snappi<br />
Global Rank: [51](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [38]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  1105.7<br />
<br />
Final Rank Value (1105.7) = Starting Rank Value (1052.9) + Head To Head Adjustments (52.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.494[<sup>1</sup>](#table2)
- Bounty Collected: 0.395[<sup>2</sup>](#table1)
- Opponent Network: 0.094[<sup>2</sup>](#table1)
- LAN Wins: 0.381[<sup>2</sup>](#table1)

The average of these factors is 0.341<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1052.9
- 400 + ( ( 0.341 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 1052.9


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
|           36 |      568 | 2024-11-19 | GamerLegion     | L   | 1.000      | -            | -                | -                | -         |    -8.91 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           35 |      584 | 2024-11-17 | SAW             | L   | 0.996      | -            | -                | -                | -         |    -4.93 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           34 |      595 | 2024-11-17 | FaZe            | L   | 0.992      | -            | -                | -                | -         |    -0.77 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           33 |      608 | 2024-11-16 | ECLOT           | W   | 0.990      | 0.143        | 0.230 (0.033)    | 1.000 (0.141)    | 1 (0.990) |    18.14 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           32 |     1111 | 2024-10-26 | Eternal Fire    | L   | 0.845      | -            | -                | -                | -         |    -2.27 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           31 |     1132 | 2024-10-25 | SAW             | L   | 0.838      | -            | -                | -                | -         |    -3.91 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           30 |     1168 | 2024-10-21 | Virtus.pro      | L   | 0.813      | -            | -                | -                | -         |    -4.36 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           29 |     1175 | 2024-10-21 | 3DMAX           | L   | 0.811      | -            | -                | -                | -         |    -4.69 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           28 |     1891 | 2024-09-26 | FaZe            | L   | 0.645      | -            | -                | -                | -         |    -0.43 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           27 |     1942 | 2024-09-25 | Natus Vincere   | L   | 0.638      | -            | -                | -                | -         |    -0.34 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           26 |     2283 | 2024-09-14 | RED Canids      | L   | 0.565      | -            | -                | -                | -         |    -8.83 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |     2315 | 2024-09-13 | Virtus.pro      | L   | 0.559      | -            | -                | -                | -         |    -3.60 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |     2353 | 2024-09-12 | ATOX            | W   | 0.552      | 0.889        | 0.056 (0.028)    | 0.315 (0.155)    | 1 (0.552) |     3.87 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |     2380 | 2024-09-11 | FURIA           | L   | 0.546      | -            | -                | -                | -         |    -1.20 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     2748 | 2024-08-29 | Virtus.pro      | L   | 0.458      | -            | -                | -                | -         |    -2.96 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     2783 | 2024-08-28 | HEROIC          | L   | 0.452      | -            | -                | -                | -         |    -0.51 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     2803 | 2024-08-28 | Spirit          | L   | 0.451      | -            | -                | -                | -         |    -0.13 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     2834 | 2024-08-27 | Eternal Fire    | L   | 0.447      | -            | -                | -                | -         |    -1.91 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     2859 | 2024-08-27 | paiN            | L   | 0.444      | -            | -                | -                | -         |    -1.29 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     2895 | 2024-08-26 | 3DMAX           | W   | 0.441      | 0.143        | 0.421 (0.027)    | 0.720 (0.045)    | 0 (0.000) |    12.07 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     2917 | 2024-08-26 | OG              | W   | 0.439      | 0.143        | 0.150 (0.009)    | -                | 0 (0.000) |     4.50 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     2939 | 2024-08-26 | 9z              | W   | 0.438      | -            | -                | -                | 1 (0.438) |     5.59 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     2960 | 2024-08-25 | Virtus.pro      | W   | 0.434      | 0.535        | 0.177 (0.041)    | 0.385 (0.089)    | -         |    11.31 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     2972 | 2024-08-25 | BetBoom         | W   | 0.431      | 0.143        | -                | 0.502 (0.031)    | 1 (0.431) |     7.50 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     2985 | 2024-08-24 | Complexity      | W   | 0.426      | 0.535        | 0.124 (0.028)    | 0.352 (0.080)    | -         |    11.52 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     2991 | 2024-08-24 | 9z              | L   | 0.425      | -            | -                | -                | -         |    -7.56 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           10 |     3033 | 2024-08-22 | M80             | W   | 0.414      | 0.535        | 0.139 (0.031)    | 0.546 (0.121)    | -         |     9.12 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            9 |     3343 | 2024-08-13 | FaZe            | L   | 0.352      | -            | -                | -                | -         |    -0.15 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            8 |     3391 | 2024-08-12 | Virtus.pro      | W   | 0.346      | 1.000        | 0.177 (0.061)    | 0.385 (0.133)    | 1 (0.346) |     9.27 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            7 |     3417 | 2024-08-11 | MOUZ            | L   | 0.339      | -            | -                | -                | -         |    -0.15 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            6 |     3458 | 2024-08-09 | BIG             | W   | 0.327      | 0.143        | 0.216 (0.010)    | -                | 1 (0.327) |     9.04 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     3480 | 2024-08-08 | ALTERNATE aTTaX | W   | 0.320      | 0.143        | -                | 0.786 (0.036)    | 1 (0.320) |     6.16 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     3524 | 2024-08-07 | Eternal Fire    | L   | 0.313      | -            | -                | -                | -         |    -0.90 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     3712 | 2024-08-02 | Astralis        | L   | 0.279      | -            | -                | -                | -         |    -1.32 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     3834 | 2024-07-30 | GamerLegion     | W   | 0.260      | 0.581        | 0.171 (0.026)    | 0.685 (0.104)    | 1 (0.260) |     7.11 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     3865 | 2024-07-29 | Astralis        | L   | 0.254      | -            | -                | -                | -         |    -1.17 | dupreeh, Maden, Magisk, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($32,473.83)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.854 | $2,000.00      | $1,707.03       |
| 2024-09-29 |      0.667 | $10,000.00     | $6,666.37       |
| 2024-09-22 |      0.621 | $7,000.00      | $4,344.57       |
| 2024-09-01 |      0.479 | $5,000.00      | $2,394.01       |
| 2024-08-25 |      0.434 | $20,000.00     | $8,676.99       |
| 2024-08-18 |      0.387 | $16,000.00     | $6,195.93       |
| 2024-08-04 |      0.293 | $8,500.00      | $2,488.92       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
