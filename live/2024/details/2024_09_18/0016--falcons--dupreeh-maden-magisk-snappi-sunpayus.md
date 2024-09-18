### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, Snappi, SunPayus<br />
Global Rank: [16](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [12]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  1483.9<br />
<br />
Final Rank Value (1483.9) = Starting Rank Value (1553.6) + Head To Head Adjustments (-69.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.676[<sup>1</sup>](#table2)
- Bounty Collected: 0.580[<sup>2</sup>](#table1)
- Opponent Network: 0.221[<sup>2</sup>](#table1)
- LAN Wins: 0.879[<sup>2</sup>](#table1)

The average of these factors is 0.589<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1553.6
- 400 + ( ( 0.589 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 1553.6


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
|           42 |      116 | 2024-09-14 | RED Canids       | L   | 1.000      | -            | -                | -                | -         |   -27.42 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           41 |      148 | 2024-09-13 | Virtus.pro       | L   | 1.000      | -            | -                | -                | -         |   -12.10 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           40 |      186 | 2024-09-12 | ATOX             | W   | 1.000      | 0.889        | -                | 0.310 (0.276)    | 1 (1.000) |     0.76 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           39 |      213 | 2024-09-11 | FURIA            | L   | 1.000      | -            | -                | -                | -         |    -9.90 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           38 |      581 | 2024-08-29 | Virtus.pro       | L   | 1.000      | -            | -                | -                | -         |   -12.47 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           37 |      616 | 2024-08-28 | HEROIC           | L   | 1.000      | -            | -                | -                | -         |   -18.46 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           36 |      636 | 2024-08-28 | Spirit           | L   | 1.000      | -            | -                | -                | -         |    -3.15 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           35 |      667 | 2024-08-27 | Eternal Fire     | L   | 1.000      | -            | -                | -                | -         |    -7.09 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           34 |      692 | 2024-08-27 | paiN             | L   | 1.000      | -            | -                | -                | -         |   -14.90 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           33 |      728 | 2024-08-26 | 3DMAX            | W   | 1.000      | 0.143        | 0.521 (0.074)    | 0.869 (0.124)    | -         |     9.80 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           32 |      750 | 2024-08-26 | OG               | W   | 1.000      | -            | -                | -                | -         |     1.61 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           31 |      772 | 2024-08-26 | 9z               | W   | 1.000      | 0.143        | 0.362 (0.052)    | -                | 1 (1.000) |     9.64 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           30 |      793 | 2024-08-25 | Virtus.pro       | W   | 1.000      | 0.535        | 0.587 (0.314)    | 0.337 (0.180)    | -         |    18.91 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           29 |      805 | 2024-08-25 | BetBoom          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     5.68 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           28 |      818 | 2024-08-24 | Complexity       | W   | 1.000      | 0.535        | 0.337 (0.180)    | 0.449 (0.240)    | -         |    20.99 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           27 |      824 | 2024-08-24 | 9z               | L   | 1.000      | -            | -                | -                | -         |   -20.13 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           26 |      866 | 2024-08-22 | M80              | W   | 1.000      | 0.535        | 0.169 (0.090)    | 0.552 (0.295)    | -         |     6.95 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |     1176 | 2024-08-13 | FaZe             | L   | 0.960      | -            | -                | -                | -         |    -7.98 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |     1224 | 2024-08-12 | Virtus.pro       | W   | 0.953      | 1.000        | 0.587 (0.559)    | 0.337 (0.321)    | 1 (0.953) |    19.53 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |     1250 | 2024-08-11 | MOUZ             | L   | 0.946      | -            | -                | -                | -         |    -2.68 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     1291 | 2024-08-09 | BIG              | W   | 0.934      | -            | -                | -                | 1 (0.934) |     9.71 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     1313 | 2024-08-08 | ALTERNATE aTTaX  | W   | 0.928      | -            | -                | -                | 1 (0.928) |     1.01 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     1357 | 2024-08-07 | Eternal Fire     | L   | 0.921      | -            | -                | -                | -         |    -4.03 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     1545 | 2024-08-02 | Astralis         | L   | 0.887      | -            | -                | -                | -         |   -12.79 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     1667 | 2024-07-30 | GamerLegion      | W   | 0.868      | 0.581        | 0.233 (0.118)    | 0.639 (0.322)    | 1 (0.868) |     2.40 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     1698 | 2024-07-29 | Astralis         | L   | 0.861      | -            | -                | -                | -         |   -13.23 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     2466 | 2024-06-16 | Complexity       | L   | 0.574      | -            | -                | -                | -         |    -5.50 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     2471 | 2024-06-16 | ENCE             | W   | 0.573      | -            | -                | -                | 1 (0.573) |     2.36 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     2500 | 2024-06-15 | The MongolZ      | W   | 0.567      | 0.500        | 0.947 (0.269)    | 0.669 (0.190)    | 1 (0.567) |    15.33 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     2510 | 2024-06-15 | Party Astronauts | W   | 0.565      | 0.500        | -                | 0.457 (0.129)    | 1 (0.565) |     0.52 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     2553 | 2024-06-14 | Aurora           | L   | 0.559      | -            | -                | -                | -         |   -13.99 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     3159 | 2024-05-28 | Liquid           | L   | 0.450      | -            | -                | -                | -         |    -5.29 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           10 |     3180 | 2024-05-27 | Monte            | W   | 0.442      | -            | -                | -                | -         |     0.51 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            9 |     3192 | 2024-05-27 | G2               | L   | 0.441      | -            | -                | -                | -         |    -1.31 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            8 |     3443 | 2024-05-18 | Spirit           | L   | 0.380      | -            | -                | -                | -         |    -0.97 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            7 |     3473 | 2024-05-17 | Virtus.pro       | W   | 0.373      | 0.769        | 0.587 (0.168)    | -                | -         |     8.03 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            6 |     3547 | 2024-05-15 | BetBoom          | W   | 0.361      | 0.769        | 0.220 (0.061)    | 0.479 (0.133)    | -         |     1.49 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     3613 | 2024-05-14 | Virtus.pro       | L   | 0.354      | -            | -                | -                | -         |    -3.52 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     3986 | 2024-04-27 | G2               | L   | 0.240      | -            | -                | -                | -         |    -0.69 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     4011 | 2024-04-26 | BetBoom          | L   | 0.233      | -            | -                | -                | -         |    -6.42 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     4037 | 2024-04-25 | TYLOO            | W   | 0.226      | -            | -                | -                | -         |     0.06 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     4057 | 2024-04-24 | The MongolZ      | L   | 0.220      | -            | -                | -                | -         |    -0.92 | dupreeh, Maden, Magisk, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($91,177.10)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.33) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-18 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-09-01 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-08-25 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-08-18 |      0.995 | $16,000.00     | $15,916.63      |
| 2024-08-04 |      0.900 | $8,500.00      | $7,653.04       |
| 2024-06-16 |      0.574 | $20,000.00     | $11,470.51      |
| 2024-06-02 |      0.482 | $5,000.00      | $2,409.27       |
| 2024-05-19 |      0.387 | $50,000.00     | $19,342.72      |
| 2024-05-12 |      0.341 | $7,000.00      | $2,384.94       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
