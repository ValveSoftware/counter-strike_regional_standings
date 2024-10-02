### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, Snappi, SunPayus<br />
Global Rank: [17](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_02.md)<br />
Regional Rank: [13]( ../../standings_europe_2024_10_02.md)<br />
<br />
Final Rank Value:  1373.0<br />
<br />
Final Rank Value (1373.0) = Starting Rank Value (1430.8) + Head To Head Adjustments (-57.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.640[<sup>1</sup>](#table2)
- Bounty Collected: 0.533[<sup>2</sup>](#table1)
- Opponent Network: 0.179[<sup>2</sup>](#table1)
- LAN Wins: 0.802[<sup>2</sup>](#table1)

The average of these factors is 0.539<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1430.8
- 400 + ( ( 0.539 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 1430.8


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
|           44 |      247 | 2024-09-26 | FaZe             | L   | 1.000      | -            | -                | -                | -         |    -6.18 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           43 |      298 | 2024-09-25 | Natus Vincere    | L   | 1.000      | -            | -                | -                | -         |    -1.00 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           42 |      639 | 2024-09-14 | RED Canids       | L   | 1.000      | -            | -                | -                | -         |   -26.01 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           41 |      671 | 2024-09-13 | Virtus.pro       | L   | 1.000      | -            | -                | -                | -         |   -12.58 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           40 |      709 | 2024-09-12 | ATOX             | W   | 1.000      | 0.889        | -                | 0.258 (0.230)    | 1 (1.000) |     1.11 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           39 |      736 | 2024-09-11 | FURIA            | L   | 1.000      | -            | -                | -                | -         |    -9.38 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           38 |     1104 | 2024-08-29 | Virtus.pro       | L   | 0.971      | -            | -                | -                | -         |   -12.87 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           37 |     1139 | 2024-08-28 | HEROIC           | L   | 0.965      | -            | -                | -                | -         |   -17.84 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           36 |     1159 | 2024-08-28 | Spirit           | L   | 0.964      | -            | -                | -                | -         |    -2.54 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           35 |     1190 | 2024-08-27 | Eternal Fire     | L   | 0.960      | -            | -                | -                | -         |    -5.00 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           34 |     1215 | 2024-08-27 | paiN             | L   | 0.957      | -            | -                | -                | -         |   -12.73 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           33 |     1251 | 2024-08-26 | 3DMAX            | W   | 0.953      | 0.143        | 0.433 (0.059)    | 0.799 (0.109)    | -         |    11.07 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           32 |     1273 | 2024-08-26 | OG               | W   | 0.952      | -            | -                | -                | -         |     1.79 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           31 |     1295 | 2024-08-26 | 9z               | W   | 0.951      | 0.143        | 0.254 (0.035)    | -                | 1 (0.951) |     9.64 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           30 |     1316 | 2024-08-25 | Virtus.pro       | W   | 0.947      | 0.535        | 0.434 (0.220)    | 0.269 (0.136)    | -         |    17.35 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           29 |     1328 | 2024-08-25 | BetBoom          | W   | 0.944      | -            | -                | -                | 1 (0.944) |     6.66 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           28 |     1341 | 2024-08-24 | Complexity       | W   | 0.939      | 0.535        | 0.307 (0.154)    | 0.366 (0.184)    | -         |    20.30 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           27 |     1347 | 2024-08-24 | 9z               | L   | 0.937      | -            | -                | -                | -         |   -18.46 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           26 |     1389 | 2024-08-22 | M80              | W   | 0.927      | 0.535        | 0.216 (0.107)    | 0.593 (0.294)    | -         |     8.83 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |     1699 | 2024-08-13 | FaZe             | L   | 0.865      | -            | -                | -                | -         |    -5.67 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |     1747 | 2024-08-12 | Virtus.pro       | W   | 0.858      | 1.000        | 0.434 (0.373)    | 0.269 (0.231)    | 1 (0.858) |    17.17 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |     1773 | 2024-08-11 | MOUZ             | L   | 0.852      | -            | -                | -                | -         |    -2.55 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     1814 | 2024-08-09 | BIG              | W   | 0.839      | -            | -                | -                | 1 (0.839) |     9.00 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     1836 | 2024-08-08 | ALTERNATE aTTaX  | W   | 0.833      | 0.143        | -                | 0.847 (0.101)    | 1 (0.833) |     1.50 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     1880 | 2024-08-07 | Eternal Fire     | L   | 0.826      | -            | -                | -                | -         |    -2.44 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     2068 | 2024-08-02 | Astralis         | L   | 0.792      | -            | -                | -                | -         |   -12.71 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     2190 | 2024-07-30 | GamerLegion      | W   | 0.773      | 0.581        | 0.188 (0.084)    | 0.593 (0.266)    | 1 (0.773) |     2.76 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     2221 | 2024-07-29 | Astralis         | L   | 0.767      | -            | -                | -                | -         |   -13.04 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     2989 | 2024-06-16 | Complexity       | L   | 0.479      | -            | -                | -                | -         |    -4.33 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     2994 | 2024-06-16 | ENCE             | W   | 0.478      | -            | -                | -                | 1 (0.478) |     2.08 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     3023 | 2024-06-15 | The MongolZ      | W   | 0.472      | 0.500        | 0.676 (0.160)    | 0.528 (0.125)    | 1 (0.472) |    12.38 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     3033 | 2024-06-15 | Party Astronauts | W   | 0.470      | 0.500        | -                | 0.499 (0.117)    | 1 (0.470) |     0.74 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     3076 | 2024-06-14 | Aurora           | L   | 0.464      | -            | -                | -                | -         |   -11.25 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     3682 | 2024-05-28 | Liquid           | L   | 0.355      | -            | -                | -                | -         |    -2.80 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           10 |     3703 | 2024-05-27 | Monte            | W   | 0.348      | -            | -                | -                | -         |     0.47 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            9 |     3715 | 2024-05-27 | G2               | L   | 0.346      | -            | -                | -                | -         |    -0.60 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            8 |     3966 | 2024-05-18 | Spirit           | L   | 0.285      | -            | -                | -                | -         |    -0.57 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            7 |     3996 | 2024-05-17 | Virtus.pro       | W   | 0.278      | 0.769        | 0.434 (0.093)    | -                | -         |     5.68 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            6 |     4070 | 2024-05-15 | BetBoom          | W   | 0.266      | 0.769        | 0.206 (0.042)    | -                | -         |     1.53 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     4136 | 2024-05-14 | Virtus.pro       | L   | 0.259      | -            | -                | -                | -         |    -2.88 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     4509 | 2024-04-27 | G2               | L   | 0.145      | -            | -                | -                | -         |    -0.24 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     4534 | 2024-04-26 | BetBoom          | L   | 0.138      | -            | -                | -                | -         |    -3.58 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     4560 | 2024-04-25 | TYLOO            | W   | 0.132      | -            | -                | -                | -         |     0.05 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     4580 | 2024-04-24 | The MongolZ      | L   | 0.125      | -            | -                | -                | -         |    -0.63 | dupreeh, Maden, Magisk, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($89,971.85)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.27) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-29 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-09-22 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-09-01 |      0.992 | $5,000.00      | $4,957.78       |
| 2024-08-25 |      0.947 | $20,000.00     | $18,932.07      |
| 2024-08-18 |      0.900 | $16,000.00     | $14,399.99      |
| 2024-08-04 |      0.806 | $8,500.00      | $6,847.33       |
| 2024-06-16 |      0.479 | $20,000.00     | $9,574.71       |
| 2024-06-02 |      0.387 | $5,000.00      | $1,935.32       |
| 2024-05-19 |      0.292 | $50,000.00     | $14,603.24      |
| 2024-05-12 |      0.246 | $7,000.00      | $1,721.41       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
