### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, s1mple, Snappi<br />
Global Rank: [41](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_02.md)<br />
Regional Rank: [31]( ../../standings_europe_2024_12_02.md)<br />
<br />
Final Rank Value:  1216.4<br />
<br />
Final Rank Value (1216.4) = Starting Rank Value (1174.7) + Head To Head Adjustments (41.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.512[<sup>1</sup>](#table2)
- Bounty Collected: 0.415[<sup>2</sup>](#table1)
- Opponent Network: 0.115[<sup>2</sup>](#table1)
- LAN Wins: 0.500[<sup>2</sup>](#table1)

The average of these factors is 0.386<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1174.7
- 400 + ( ( 0.386 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 1174.7


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
|           41 |      261 | 2024-11-19 | GamerLegion      | L   | 1.000      | -            | -                | -                | -         |   -13.00 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           40 |      277 | 2024-11-17 | SAW              | L   | 1.000      | -            | -                | -                | -         |    -4.96 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           39 |      288 | 2024-11-17 | FaZe             | L   | 1.000      | -            | -                | -                | -         |    -3.06 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           38 |      301 | 2024-11-16 | ECLOT            | W   | 1.000      | 0.143        | 0.198 (0.028)    | 1.000 (0.143)    | 1 (1.000) |    14.71 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           37 |      804 | 2024-10-26 | Eternal Fire     | L   | 0.952      | -            | -                | -                | -         |    -2.62 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           36 |      825 | 2024-10-25 | SAW              | L   | 0.946      | -            | -                | -                | -         |    -4.48 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           35 |      861 | 2024-10-21 | Virtus.pro       | L   | 0.921      | -            | -                | -                | -         |    -5.04 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           34 |      868 | 2024-10-21 | 3DMAX            | L   | 0.919      | -            | -                | -                | -         |    -7.47 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           33 |     1584 | 2024-09-26 | FaZe             | L   | 0.753      | -            | -                | -                | -         |    -2.54 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           32 |     1635 | 2024-09-25 | Natus Vincere    | L   | 0.745      | -            | -                | -                | -         |    -0.57 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           31 |     1976 | 2024-09-14 | RED Canids       | L   | 0.673      | -            | -                | -                | -         |   -11.71 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           30 |     2008 | 2024-09-13 | Virtus.pro       | L   | 0.666      | -            | -                | -                | -         |    -4.35 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           29 |     2046 | 2024-09-12 | ATOX             | W   | 0.659      | 0.889        | 0.035 (0.020)    | 0.273 (0.160)    | 1 (0.659) |     2.70 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           28 |     2073 | 2024-09-11 | FURIA            | L   | 0.653      | -            | -                | -                | -         |    -3.21 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           27 |     2441 | 2024-08-29 | Virtus.pro       | L   | 0.565      | -            | -                | -                | -         |    -3.65 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           26 |     2476 | 2024-08-28 | HEROIC           | L   | 0.560      | -            | -                | -                | -         |    -1.51 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |     2496 | 2024-08-28 | Spirit           | L   | 0.559      | -            | -                | -                | -         |    -0.52 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |     2527 | 2024-08-27 | Eternal Fire     | L   | 0.554      | -            | -                | -                | -         |    -2.27 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |     2552 | 2024-08-27 | paiN             | L   | 0.552      | -            | -                | -                | -         |    -2.51 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     2588 | 2024-08-26 | 3DMAX            | W   | 0.548      | 0.143        | 0.409 (0.032)    | 0.739 (0.058)    | -         |    13.83 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     2610 | 2024-08-26 | OG               | W   | 0.547      | 0.143        | 0.157 (0.012)    | -                | -         |     4.10 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     2632 | 2024-08-26 | 9z               | W   | 0.545      | -            | -                | -                | 1 (0.545) |     6.70 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     2653 | 2024-08-25 | Virtus.pro       | W   | 0.541      | 0.535        | 0.217 (0.063)    | 0.395 (0.114)    | -         |    14.19 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     2665 | 2024-08-25 | BetBoom          | W   | 0.538      | 0.143        | -                | 0.517 (0.040)    | 1 (0.538) |     7.93 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     2678 | 2024-08-24 | Complexity       | W   | 0.533      | 0.535        | 0.120 (0.034)    | 0.376 (0.107)    | -         |    14.01 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     2684 | 2024-08-24 | 9z               | L   | 0.532      | -            | -                | -                | -         |    -9.61 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     2726 | 2024-08-22 | M80              | W   | 0.521      | 0.535        | 0.155 (0.043)    | 0.585 (0.163)    | -         |    11.05 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     3036 | 2024-08-13 | FaZe             | L   | 0.459      | -            | -                | -                | -         |    -1.24 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     3084 | 2024-08-12 | Virtus.pro       | W   | 0.453      | 1.000        | 0.217 (0.098)    | 0.395 (0.179)    | 1 (0.453) |    12.29 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     3110 | 2024-08-11 | MOUZ             | L   | 0.446      | -            | -                | -                | -         |    -0.83 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     3151 | 2024-08-09 | BIG              | W   | 0.434      | -            | -                | -                | 1 (0.434) |    11.65 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           10 |     3173 | 2024-08-08 | ALTERNATE aTTaX  | W   | 0.428      | 0.143        | -                | 0.795 (0.049)    | 1 (0.428) |     6.93 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            9 |     3217 | 2024-08-07 | Eternal Fire     | L   | 0.421      | -            | -                | -                | -         |    -1.03 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            8 |     3405 | 2024-08-02 | Astralis         | L   | 0.386      | -            | -                | -                | -         |    -1.77 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            7 |     3527 | 2024-07-30 | GamerLegion      | W   | 0.367      | 0.581        | 0.126 (0.027)    | 0.660 (0.141)    | 1 (0.367) |     8.68 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            6 |     3558 | 2024-07-29 | Astralis         | L   | 0.361      | -            | -                | -                | -         |    -1.61 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     4326 | 2024-06-16 | Complexity       | L   | 0.073      | -            | -                | -                | -         |    -0.33 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     4331 | 2024-06-16 | ENCE             | W   | 0.072      | -            | -                | -                | 1 (0.072) |     1.65 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     4360 | 2024-06-15 | The MongolZ      | W   | 0.067      | 0.500        | 1.000 (0.033)    | -                | 1 (0.067) |     2.06 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     4370 | 2024-06-15 | Party Astronauts | W   | 0.065      | -            | -                | -                | -         |     0.27 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     4413 | 2024-06-14 | Aurora           | L   | 0.058      | -            | -                | -                | -         |    -1.13 | dupreeh, Maden, Magisk, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($41,285.99)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.961 | $2,000.00      | $1,921.55       |
| 2024-09-29 |      0.774 | $10,000.00     | $7,738.97       |
| 2024-09-22 |      0.728 | $7,000.00      | $5,095.39       |
| 2024-09-01 |      0.586 | $5,000.00      | $2,930.31       |
| 2024-08-25 |      0.541 | $20,000.00     | $10,822.20      |
| 2024-08-18 |      0.495 | $16,000.00     | $7,912.10       |
| 2024-08-04 |      0.400 | $8,500.00      | $3,400.63       |
| 2024-06-16 |      0.073 | $20,000.00     | $1,464.84       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
