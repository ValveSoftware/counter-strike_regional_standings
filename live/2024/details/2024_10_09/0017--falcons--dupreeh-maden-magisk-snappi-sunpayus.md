### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, Snappi, SunPayus<br />
Global Rank: [17](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_09.md)<br />
Regional Rank: [13]( ../../standings_europe_2024_10_09.md)<br />
<br />
Final Rank Value:  1390.3<br />
<br />
Final Rank Value (1390.3) = Starting Rank Value (1414.5) + Head To Head Adjustments (-24.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.641[<sup>1</sup>](#table2)
- Bounty Collected: 0.529[<sup>2</sup>](#table1)
- Opponent Network: 0.175[<sup>2</sup>](#table1)
- LAN Wins: 0.754[<sup>2</sup>](#table1)

The average of these factors is 0.525<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1414.5
- 400 + ( ( 0.525 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1414.5


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
|           44 |      467 | 2024-09-26 | FaZe             | L   | 1.000      | -            | -                | -                | -         |    -5.76 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           43 |      518 | 2024-09-25 | Natus Vincere    | L   | 1.000      | -            | -                | -                | -         |    -1.01 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           42 |      859 | 2024-09-14 | RED Canids       | L   | 1.000      | -            | -                | -                | -         |   -24.75 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           41 |      891 | 2024-09-13 | Virtus.pro       | L   | 1.000      | -            | -                | -                | -         |   -10.68 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           40 |      929 | 2024-09-12 | ATOX             | W   | 1.000      | 0.889        | -                | 0.271 (0.241)    | 1 (1.000) |     1.50 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           39 |      956 | 2024-09-11 | FURIA            | L   | 1.000      | -            | -                | -                | -         |    -8.17 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           38 |     1324 | 2024-08-29 | Virtus.pro       | L   | 0.925      | -            | -                | -                | -         |   -10.14 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           37 |     1359 | 2024-08-28 | HEROIC           | L   | 0.920      | -            | -                | -                | -         |   -14.81 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           36 |     1379 | 2024-08-28 | Spirit           | L   | 0.918      | -            | -                | -                | -         |    -2.39 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           35 |     1410 | 2024-08-27 | Eternal Fire     | L   | 0.914      | -            | -                | -                | -         |    -3.98 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           34 |     1435 | 2024-08-27 | paiN             | L   | 0.912      | -            | -                | -                | -         |   -12.02 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           33 |     1471 | 2024-08-26 | 3DMAX            | W   | 0.908      | 0.143        | 0.454 (0.059)    | 0.768 (0.100)    | -         |    10.67 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           32 |     1493 | 2024-08-26 | OG               | W   | 0.907      | -            | -                | -                | -         |     1.55 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           31 |     1515 | 2024-08-26 | 9z               | W   | 0.905      | 0.143        | 0.261 (0.034)    | -                | 1 (0.905) |     8.78 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           30 |     1536 | 2024-08-25 | Virtus.pro       | W   | 0.901      | 0.535        | 0.436 (0.210)    | 0.297 (0.143)    | -         |    18.91 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           29 |     1548 | 2024-08-25 | BetBoom          | W   | 0.898      | -            | -                | -                | 1 (0.898) |     6.93 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           28 |     1561 | 2024-08-24 | Complexity       | W   | 0.893      | 0.535        | 0.324 (0.155)    | 0.368 (0.176)    | -         |    20.19 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           27 |     1567 | 2024-08-24 | 9z               | L   | 0.892      | -            | -                | -                | -         |   -18.02 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           26 |     1609 | 2024-08-22 | M80              | W   | 0.881      | 0.535        | 0.230 (0.108)    | 0.589 (0.277)    | -         |    10.35 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |     1919 | 2024-08-13 | FaZe             | L   | 0.819      | -            | -                | -                | -         |    -4.67 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |     1967 | 2024-08-12 | Virtus.pro       | W   | 0.813      | 1.000        | 0.436 (0.354)    | 0.297 (0.241)    | 1 (0.813) |    18.41 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |     1993 | 2024-08-11 | MOUZ             | L   | 0.806      | -            | -                | -                | -         |    -2.05 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     2034 | 2024-08-09 | BIG              | W   | 0.794      | -            | -                | -                | 1 (0.794) |    14.26 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     2056 | 2024-08-08 | ALTERNATE aTTaX  | W   | 0.788      | 0.143        | -                | 0.812 (0.091)    | 1 (0.788) |     1.61 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     2100 | 2024-08-07 | Eternal Fire     | L   | 0.781      | -            | -                | -                | -         |    -1.80 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     2288 | 2024-08-02 | Astralis         | L   | 0.746      | -            | -                | -                | -         |   -10.58 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     2410 | 2024-07-30 | GamerLegion      | W   | 0.727      | 0.581        | 0.264 (0.111)    | 0.621 (0.262)    | 1 (0.727) |     3.48 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     2441 | 2024-07-29 | Astralis         | L   | 0.721      | -            | -                | -                | -         |   -10.73 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     3209 | 2024-06-16 | Complexity       | L   | 0.433      | -            | -                | -                | -         |    -3.39 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     3214 | 2024-06-16 | ENCE             | W   | 0.432      | -            | -                | -                | 1 (0.432) |     1.79 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     3243 | 2024-06-15 | The MongolZ      | W   | 0.427      | 0.500        | 0.670 (0.143)    | 0.515 (0.110)    | 1 (0.427) |    11.71 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     3253 | 2024-06-15 | Party Astronauts | W   | 0.425      | 0.500        | -                | 0.522 (0.111)    | 1 (0.425) |     0.80 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     3296 | 2024-06-14 | Aurora           | L   | 0.418      | -            | -                | -                | -         |   -10.23 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     3902 | 2024-05-28 | Liquid           | L   | 0.309      | -            | -                | -                | -         |    -2.08 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           10 |     3923 | 2024-05-27 | Monte            | W   | 0.302      | -            | -                | -                | -         |     0.38 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            9 |     3935 | 2024-05-27 | G2               | L   | 0.301      | -            | -                | -                | -         |    -0.47 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            8 |     4186 | 2024-05-18 | Spirit           | L   | 0.239      | -            | -                | -                | -         |    -0.44 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            7 |     4216 | 2024-05-17 | Virtus.pro       | W   | 0.233      | 0.769        | 0.436 (0.078)    | -                | -         |     5.50 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            6 |     4290 | 2024-05-15 | BetBoom          | W   | 0.221      | 0.769        | 0.208 (0.035)    | -                | -         |     1.56 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     4356 | 2024-05-14 | Virtus.pro       | L   | 0.214      | -            | -                | -                | -         |    -1.68 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     4729 | 2024-04-27 | G2               | L   | 0.099      | -            | -                | -                | -         |    -0.15 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     4754 | 2024-04-26 | BetBoom          | L   | 0.093      | -            | -                | -                | -         |    -2.27 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     4780 | 2024-04-25 | TYLOO            | W   | 0.086      | -            | -                | -                | -         |     0.04 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     4800 | 2024-04-24 | The MongolZ      | L   | 0.079      | -            | -                | -                | -         |    -0.30 | dupreeh, Maden, Magisk, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($83,981.26)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.28) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-29 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-09-22 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-09-01 |      0.946 | $5,000.00      | $4,730.00       |
| 2024-08-25 |      0.901 | $20,000.00     | $18,020.95      |
| 2024-08-18 |      0.854 | $16,000.00     | $13,671.10      |
| 2024-08-04 |      0.760 | $8,500.00      | $6,460.10       |
| 2024-06-16 |      0.433 | $20,000.00     | $8,663.60       |
| 2024-06-02 |      0.342 | $5,000.00      | $1,707.54       |
| 2024-05-19 |      0.247 | $50,000.00     | $12,325.45      |
| 2024-05-12 |      0.200 | $7,000.00      | $1,402.52       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
