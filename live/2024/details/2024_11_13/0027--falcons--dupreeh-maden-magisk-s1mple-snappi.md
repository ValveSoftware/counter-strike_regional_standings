### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, s1mple, Snappi<br />
Global Rank: [27](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_13.md)<br />
Regional Rank: [20]( ../../standings_europe_2024_11_13.md)<br />
<br />
Final Rank Value:  1243.3<br />
<br />
Final Rank Value (1243.3) = Starting Rank Value (1212.4) + Head To Head Adjustments (30.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.520[<sup>1</sup>](#table2)
- Bounty Collected: 0.440[<sup>2</sup>](#table1)
- Opponent Network: 0.113[<sup>2</sup>](#table1)
- LAN Wins: 0.555[<sup>2</sup>](#table1)

The average of these factors is 0.407<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1212.4
- 400 + ( ( 0.407 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 1212.4


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
|           41 |      402 | 2024-10-26 | Eternal Fire     | L   | 1.000      | -            | -                | -                | -         |    -2.44 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           40 |      423 | 2024-10-25 | SAW              | L   | 1.000      | -            | -                | -                | -         |    -5.78 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           39 |      459 | 2024-10-21 | Virtus.pro       | L   | 1.000      | -            | -                | -                | -         |    -7.00 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           38 |      466 | 2024-10-21 | 3DMAX            | L   | 1.000      | -            | -                | -                | -         |   -11.21 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           37 |     1182 | 2024-09-26 | FaZe             | L   | 0.879      | -            | -                | -                | -         |    -3.74 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           36 |     1233 | 2024-09-25 | Natus Vincere    | L   | 0.871      | -            | -                | -                | -         |    -0.62 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           35 |     1574 | 2024-09-14 | RED Canids       | L   | 0.799      | -            | -                | -                | -         |   -15.38 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           34 |     1606 | 2024-09-13 | Virtus.pro       | L   | 0.792      | -            | -                | -                | -         |    -7.21 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           33 |     1644 | 2024-09-12 | ATOX             | W   | 0.785      | 0.889        | 0.030 (0.021)    | 0.258 (0.180)    | 1 (0.785) |     4.47 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           32 |     1671 | 2024-09-11 | FURIA            | L   | 0.779      | -            | -                | -                | -         |    -4.19 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           31 |     2039 | 2024-08-29 | Virtus.pro       | L   | 0.692      | -            | -                | -                | -         |    -6.34 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           30 |     2074 | 2024-08-28 | HEROIC           | L   | 0.686      | -            | -                | -                | -         |    -2.59 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           29 |     2094 | 2024-08-28 | Spirit           | L   | 0.685      | -            | -                | -                | -         |    -0.82 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           28 |     2125 | 2024-08-27 | Eternal Fire     | L   | 0.680      | -            | -                | -                | -         |    -2.49 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           27 |     2150 | 2024-08-27 | paiN             | L   | 0.678      | -            | -                | -                | -         |    -4.25 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           26 |     2186 | 2024-08-26 | 3DMAX            | W   | 0.674      | 0.143        | 0.384 (0.037)    | 0.766 (0.074)    | -         |    14.79 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |     2208 | 2024-08-26 | OG               | W   | 0.673      | 0.143        | 0.134 (0.013)    | -                | -         |     4.05 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |     2230 | 2024-08-26 | 9z               | W   | 0.671      | -            | -                | -                | 1 (0.671) |    10.15 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |     2251 | 2024-08-25 | Virtus.pro       | W   | 0.667      | 0.535        | 0.211 (0.075)    | 0.269 (0.096)    | -         |    15.89 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     2263 | 2024-08-25 | BetBoom          | W   | 0.665      | 0.143        | -                | 0.442 (0.042)    | 1 (0.665) |     6.03 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     2276 | 2024-08-24 | Complexity       | W   | 0.659      | 0.535        | 0.137 (0.048)    | 0.336 (0.119)    | -         |    16.59 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     2282 | 2024-08-24 | 9z               | L   | 0.658      | -            | -                | -                | -         |    -9.73 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     2324 | 2024-08-22 | M80              | W   | 0.647      | 0.535        | 0.159 (0.055)    | 0.584 (0.202)    | -         |    13.14 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     2634 | 2024-08-13 | FaZe             | L   | 0.585      | -            | -                | -                | -         |    -2.04 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     2682 | 2024-08-12 | Virtus.pro       | W   | 0.579      | 1.000        | 0.211 (0.122)    | 0.269 (0.155)    | 1 (0.579) |    14.61 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     2708 | 2024-08-11 | MOUZ             | L   | 0.572      | -            | -                | -                | -         |    -1.07 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     2749 | 2024-08-09 | BIG              | W   | 0.560      | -            | -                | -                | 1 (0.560) |    12.73 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     2771 | 2024-08-08 | ALTERNATE aTTaX  | W   | 0.554      | 0.143        | -                | 0.664 (0.053)    | 1 (0.554) |     2.75 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     2815 | 2024-08-07 | Eternal Fire     | L   | 0.547      | -            | -                | -                | -         |    -1.09 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     3003 | 2024-08-02 | Astralis         | L   | 0.512      | -            | -                | -                | -         |    -3.24 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     3125 | 2024-07-30 | GamerLegion      | W   | 0.494      | 0.581        | 0.128 (0.037)    | 0.502 (0.144)    | 1 (0.494) |     3.78 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           10 |     3156 | 2024-07-29 | Astralis         | L   | 0.487      | -            | -                | -                | -         |    -3.09 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            9 |     3924 | 2024-06-16 | Complexity       | L   | 0.199      | -            | -                | -                | -         |    -1.10 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            8 |     3929 | 2024-06-16 | ENCE             | W   | 0.198      | 0.500        | 0.258 (0.026)    | -                | 1 (0.198) |     4.55 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            7 |     3958 | 2024-06-15 | The MongolZ      | W   | 0.193      | 0.500        | 1.000 (0.096)    | 0.636 (0.061)    | 1 (0.193) |     5.94 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            6 |     3968 | 2024-06-15 | Party Astronauts | W   | 0.191      | -            | -                | -                | 1 (0.191) |     0.78 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     4011 | 2024-06-14 | Aurora           | L   | 0.184      | -            | -                | -                | -         |    -3.69 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     4617 | 2024-05-28 | Liquid           | L   | 0.075      | -            | -                | -                | -         |    -0.33 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     4638 | 2024-05-27 | Monte            | W   | 0.068      | -            | -                | -                | -         |     0.11 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     4650 | 2024-05-27 | G2               | L   | 0.067      | -            | -                | -                | -         |    -0.03 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     4901 | 2024-05-18 | Spirit           | L   | 0.005      | -            | -                | -                | -         |    -0.00 | dupreeh, Maden, Magisk, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($53,436.57)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-09-29 |      0.900 | $10,000.00     | $8,999.45       |
| 2024-09-22 |      0.854 | $7,000.00      | $5,977.72       |
| 2024-09-01 |      0.712 | $5,000.00      | $3,560.55       |
| 2024-08-25 |      0.667 | $20,000.00     | $13,343.15      |
| 2024-08-18 |      0.621 | $16,000.00     | $9,928.85       |
| 2024-08-04 |      0.526 | $8,500.00      | $4,472.03       |
| 2024-06-16 |      0.199 | $20,000.00     | $3,985.79       |
| 2024-06-02 |      0.108 | $5,000.00      | $538.09         |
| 2024-05-19 |      0.013 | $50,000.00     | $630.94         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
