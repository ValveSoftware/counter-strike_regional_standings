### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, Snappi, SunPayus<br />
Global Rank: [17](../../standings_global_2024_09_26.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_26.md)<br />
Regional Rank: [13]( ../../standings_europe_2024_09_26.md)<br />
<br />
Final Rank Value:  1393.4<br />
<br />
Final Rank Value (1393.4) = Starting Rank Value (1459.9) + Head To Head Adjustments (-66.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.648[<sup>1</sup>](#table2)
- Bounty Collected: 0.543[<sup>2</sup>](#table1)
- Opponent Network: 0.203[<sup>2</sup>](#table1)
- LAN Wins: 0.849[<sup>2</sup>](#table1)

The average of these factors is 0.561<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1459.9
- 400 + ( ( 0.561 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1459.9


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
|           44 |       14 | 2024-09-26 | FaZe             | L   | 1.000      | -            | -                | -                | -         |    -7.18 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           43 |       65 | 2024-09-25 | Natus Vincere    | L   | 1.000      | -            | -                | -                | -         |    -1.13 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           42 |      406 | 2024-09-14 | RED Canids       | L   | 1.000      | -            | -                | -                | -         |   -26.45 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           41 |      438 | 2024-09-13 | Virtus.pro       | L   | 1.000      | -            | -                | -                | -         |   -12.42 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           40 |      476 | 2024-09-12 | ATOX             | W   | 1.000      | 0.889        | -                | 0.300 (0.267)    | 1 (1.000) |     0.98 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           39 |      503 | 2024-09-11 | FURIA            | L   | 1.000      | -            | -                | -                | -         |    -9.66 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           38 |      871 | 2024-08-29 | Virtus.pro       | L   | 1.000      | -            | -                | -                | -         |   -13.03 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           37 |      906 | 2024-08-28 | HEROIC           | L   | 1.000      | -            | -                | -                | -         |   -18.41 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           36 |      926 | 2024-08-28 | Spirit           | L   | 1.000      | -            | -                | -                | -         |    -2.81 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           35 |      957 | 2024-08-27 | Eternal Fire     | L   | 1.000      | -            | -                | -                | -         |    -5.60 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           34 |      982 | 2024-08-27 | paiN             | L   | 0.998      | -            | -                | -                | -         |   -13.55 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           33 |     1018 | 2024-08-26 | 3DMAX            | W   | 0.994      | 0.143        | 0.401 (0.057)    | 0.849 (0.121)    | -         |    10.47 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           32 |     1040 | 2024-08-26 | OG               | W   | 0.993      | -            | -                | -                | -         |     1.84 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           31 |     1062 | 2024-08-26 | 9z               | W   | 0.992      | 0.143        | 0.271 (0.038)    | -                | 1 (0.992) |    10.00 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           30 |     1083 | 2024-08-25 | Virtus.pro       | W   | 0.988      | 0.535        | 0.453 (0.239)    | 0.317 (0.167)    | -         |    18.25 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           29 |     1095 | 2024-08-25 | BetBoom          | W   | 0.985      | -            | -                | -                | 1 (0.985) |     5.99 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           28 |     1108 | 2024-08-24 | Complexity       | W   | 0.980      | 0.535        | 0.321 (0.168)    | 0.426 (0.223)    | -         |    21.07 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           27 |     1114 | 2024-08-24 | 9z               | L   | 0.978      | -            | -                | -                | -         |   -19.24 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           26 |     1156 | 2024-08-22 | M80              | W   | 0.968      | 0.535        | 0.223 (0.115)    | 0.547 (0.283)    | -         |     8.52 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |     1466 | 2024-08-13 | FaZe             | L   | 0.906      | -            | -                | -                | -         |    -7.24 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |     1514 | 2024-08-12 | Virtus.pro       | W   | 0.899      | 1.000        | 0.453 (0.407)    | 0.317 (0.285)    | 1 (0.899) |    18.10 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |     1540 | 2024-08-11 | MOUZ             | L   | 0.893      | -            | -                | -                | -         |    -2.53 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     1581 | 2024-08-09 | BIG              | W   | 0.880      | -            | -                | -                | 1 (0.880) |     9.38 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     1603 | 2024-08-08 | ALTERNATE aTTaX  | W   | 0.874      | 0.143        | -                | 0.904 (0.113)    | 1 (0.874) |     1.37 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     1647 | 2024-08-07 | Eternal Fire     | L   | 0.867      | -            | -                | -                | -         |    -2.77 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     1835 | 2024-08-02 | Astralis         | L   | 0.833      | -            | -                | -                | -         |   -13.09 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     1957 | 2024-07-30 | GamerLegion      | W   | 0.814      | 0.581        | 0.179 (0.085)    | 0.617 (0.292)    | 1 (0.814) |     2.65 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     1988 | 2024-07-29 | Astralis         | L   | 0.807      | -            | -                | -                | -         |   -13.48 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     2756 | 2024-06-16 | Complexity       | L   | 0.520      | -            | -                | -                | -         |    -4.76 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     2761 | 2024-06-16 | ENCE             | W   | 0.519      | -            | -                | -                | 1 (0.519) |     2.33 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     2790 | 2024-06-15 | The MongolZ      | W   | 0.513      | 0.500        | 0.714 (0.183)    | 0.623 (0.160)    | 1 (0.513) |    13.47 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     2800 | 2024-06-15 | Party Astronauts | W   | 0.511      | 0.500        | -                | 0.472 (0.121)    | 1 (0.511) |     0.68 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     2843 | 2024-06-14 | Aurora           | L   | 0.505      | -            | -                | -                | -         |   -12.42 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     3449 | 2024-05-28 | Liquid           | L   | 0.396      | -            | -                | -                | -         |    -3.28 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           10 |     3470 | 2024-05-27 | Monte            | W   | 0.389      | -            | -                | -                | -         |     0.52 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            9 |     3482 | 2024-05-27 | G2               | L   | 0.387      | -            | -                | -                | -         |    -1.10 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            8 |     3733 | 2024-05-18 | Spirit           | L   | 0.326      | -            | -                | -                | -         |    -0.69 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            7 |     3763 | 2024-05-17 | Virtus.pro       | W   | 0.319      | 0.769        | 0.453 (0.111)    | -                | -         |     6.63 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            6 |     3837 | 2024-05-15 | BetBoom          | W   | 0.307      | 0.769        | 0.156 (0.037)    | -                | -         |     1.40 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     3903 | 2024-05-14 | Virtus.pro       | L   | 0.300      | -            | -                | -                | -         |    -3.23 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     4276 | 2024-04-27 | G2               | L   | 0.186      | -            | -                | -                | -         |    -0.51 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     4301 | 2024-04-26 | BetBoom          | L   | 0.179      | -            | -                | -                | -         |    -4.86 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     4327 | 2024-04-25 | TYLOO            | W   | 0.173      | -            | -                | -                | -         |     0.06 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     4347 | 2024-04-24 | The MongolZ      | L   | 0.166      | -            | -                | -                | -         |    -0.82 | dupreeh, Maden, Magisk, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($95,190.52)
- Divide that value by the 5th highest value among all rosters ($332,851.90)
- The final value (0.29) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-26 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-09-22 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-09-01 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-08-25 |      0.988 | $20,000.00     | $19,750.48      |
| 2024-08-18 |      0.941 | $16,000.00     | $15,054.72      |
| 2024-08-04 |      0.846 | $8,500.00      | $7,195.15       |
| 2024-06-16 |      0.520 | $20,000.00     | $10,393.13      |
| 2024-06-02 |      0.428 | $5,000.00      | $2,139.92       |
| 2024-05-19 |      0.333 | $50,000.00     | $16,649.27      |
| 2024-05-12 |      0.287 | $7,000.00      | $2,007.86       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
