### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, Snappi, SunPayus<br />
Global Rank: [17](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [13]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  1379.9<br />
<br />
Final Rank Value (1379.9) = Starting Rank Value (1390.4) + Head To Head Adjustments (-10.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.628[<sup>1</sup>](#table2)
- Bounty Collected: 0.518[<sup>2</sup>](#table1)
- Opponent Network: 0.165[<sup>2</sup>](#table1)
- LAN Wins: 0.729[<sup>2</sup>](#table1)

The average of these factors is 0.510<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1390.4
- 400 + ( ( 0.510 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1390.4


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
|           44 |      564 | 2024-09-26 | FaZe             | L   | 1.000      | -            | -                | -                | -         |    -5.85 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           43 |      615 | 2024-09-25 | Natus Vincere    | L   | 1.000      | -            | -                | -                | -         |    -0.94 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           42 |      956 | 2024-09-14 | RED Canids       | L   | 0.993      | -            | -                | -                | -         |   -24.40 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           41 |      988 | 2024-09-13 | Virtus.pro       | L   | 0.987      | -            | -                | -                | -         |    -9.24 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           40 |     1026 | 2024-09-12 | ATOX             | W   | 0.979      | 0.889        | -                | 0.248 (0.216)    | 1 (0.979) |     1.67 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           39 |     1053 | 2024-09-11 | FURIA            | L   | 0.973      | -            | -                | -                | -         |    -6.72 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           38 |     1421 | 2024-08-29 | Virtus.pro       | L   | 0.886      | -            | -                | -                | -         |    -8.28 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           37 |     1456 | 2024-08-28 | HEROIC           | L   | 0.880      | -            | -                | -                | -         |   -11.71 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           36 |     1476 | 2024-08-28 | Spirit           | L   | 0.879      | -            | -                | -                | -         |    -2.12 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           35 |     1507 | 2024-08-27 | Eternal Fire     | L   | 0.875      | -            | -                | -                | -         |    -3.58 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           34 |     1532 | 2024-08-27 | paiN             | L   | 0.872      | -            | -                | -                | -         |   -11.36 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           33 |     1568 | 2024-08-26 | 3DMAX            | W   | 0.868      | 0.143        | 0.426 (0.053)    | 0.739 (0.092)    | -         |    10.72 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           32 |     1590 | 2024-08-26 | OG               | W   | 0.867      | -            | -                | -                | -         |     1.51 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           31 |     1612 | 2024-08-26 | 9z               | W   | 0.865      | 0.143        | 0.236 (0.029)    | -                | 1 (0.865) |     8.21 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           30 |     1633 | 2024-08-25 | Virtus.pro       | W   | 0.861      | 0.535        | 0.437 (0.201)    | 0.316 (0.146)    | -         |    19.65 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           29 |     1645 | 2024-08-25 | BetBoom          | W   | 0.859      | -            | -                | -                | 1 (0.859) |     6.48 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           28 |     1658 | 2024-08-24 | Complexity       | W   | 0.854      | 0.535        | 0.300 (0.137)    | 0.356 (0.162)    | -         |    20.01 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           27 |     1664 | 2024-08-24 | 9z               | L   | 0.852      | -            | -                | -                | -         |   -17.46 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           26 |     1706 | 2024-08-22 | M80              | W   | 0.841      | 0.535        | 0.216 (0.097)    | 0.601 (0.271)    | -         |    10.14 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |     2016 | 2024-08-13 | FaZe             | L   | 0.780      | -            | -                | -                | -         |    -4.35 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |     2064 | 2024-08-12 | Virtus.pro       | W   | 0.773      | 1.000        | 0.437 (0.338)    | 0.316 (0.244)    | 1 (0.773) |    18.84 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |     2090 | 2024-08-11 | MOUZ             | L   | 0.766      | -            | -                | -                | -         |    -1.40 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     2131 | 2024-08-09 | BIG              | W   | 0.754      | -            | -                | -                | 1 (0.754) |    14.18 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     2153 | 2024-08-08 | ALTERNATE aTTaX  | W   | 0.748      | 0.143        | -                | 0.787 (0.084)    | 1 (0.748) |     1.67 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     2197 | 2024-08-07 | Eternal Fire     | L   | 0.741      | -            | -                | -                | -         |    -1.61 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     2385 | 2024-08-02 | Astralis         | L   | 0.707      | -            | -                | -                | -         |   -10.30 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     2507 | 2024-07-30 | GamerLegion      | W   | 0.688      | 0.581        | 0.250 (0.100)    | 0.610 (0.244)    | 1 (0.688) |     3.46 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     2538 | 2024-07-29 | Astralis         | L   | 0.681      | -            | -                | -                | -         |   -10.42 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     3306 | 2024-06-16 | Complexity       | L   | 0.394      | -            | -                | -                | -         |    -2.82 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     3311 | 2024-06-16 | ENCE             | W   | 0.393      | -            | -                | -                | 1 (0.393) |     1.61 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     3340 | 2024-06-15 | The MongolZ      | W   | 0.387      | 0.500        | 0.631 (0.122)    | 0.488 (0.095)    | 1 (0.387) |    10.63 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     3350 | 2024-06-15 | Party Astronauts | W   | 0.385      | 0.500        | -                | 0.515 (0.099)    | 1 (0.385) |     0.78 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     3393 | 2024-06-14 | Aurora           | L   | 0.379      | -            | -                | -                | -         |    -8.98 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     3999 | 2024-05-28 | Liquid           | L   | 0.270      | -            | -                | -                | -         |    -1.71 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           10 |     4020 | 2024-05-27 | Monte            | W   | 0.262      | -            | -                | -                | -         |     0.33 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            9 |     4032 | 2024-05-27 | G2               | L   | 0.261      | -            | -                | -                | -         |    -0.37 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            8 |     4283 | 2024-05-18 | Spirit           | L   | 0.200      | -            | -                | -                | -         |    -0.34 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            7 |     4313 | 2024-05-17 | Virtus.pro       | W   | 0.193      | 0.769        | 0.437 (0.065)    | -                | -         |     4.91 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            6 |     4387 | 2024-05-15 | BetBoom          | W   | 0.181      | 0.769        | 0.191 (0.027)    | -                | -         |     1.27 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     4453 | 2024-05-14 | Virtus.pro       | L   | 0.174      | -            | -                | -                | -         |    -1.05 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     4826 | 2024-04-27 | G2               | L   | 0.060      | -            | -                | -                | -         |    -0.08 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     4851 | 2024-04-26 | BetBoom          | L   | 0.053      | -            | -                | -                | -         |    -1.30 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     4877 | 2024-04-25 | TYLOO            | W   | 0.047      | -            | -                | -                | -         |     0.02 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     4897 | 2024-04-24 | The MongolZ      | L   | 0.040      | -            | -                | -                | -         |    -0.15 | dupreeh, Maden, Magisk, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($78,771.07)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.26) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-29 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-09-22 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-09-01 |      0.906 | $5,000.00      | $4,531.89       |
| 2024-08-25 |      0.861 | $20,000.00     | $17,228.53      |
| 2024-08-18 |      0.815 | $16,000.00     | $13,037.16      |
| 2024-08-04 |      0.720 | $8,500.00      | $6,123.32       |
| 2024-06-16 |      0.394 | $20,000.00     | $7,871.17       |
| 2024-06-02 |      0.302 | $5,000.00      | $1,509.43       |
| 2024-05-19 |      0.207 | $50,000.00     | $10,344.39      |
| 2024-05-12 |      0.161 | $7,000.00      | $1,125.17       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
