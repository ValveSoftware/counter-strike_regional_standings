### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, Snappi, SunPayus<br />
Global Rank: [16](../../standings_global_2024_08_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_28.md)<br />
Regional Rank: [12]( ../../standings_europe_2024_08_28.md)<br />
<br />
Final Rank Value:  1519.5<br />
<br />
Final Rank Value (1519.5) = Starting Rank Value (1585.1) + Head To Head Adjustments (-65.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.666[<sup>1</sup>](#table2)
- Bounty Collected: 0.595[<sup>2</sup>](#table1)
- Opponent Network: 0.205[<sup>2</sup>](#table1)
- LAN Wins: 0.925[<sup>2</sup>](#table1)

The average of these factors is 0.598<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1585.1
- 400 + ( ( 0.598 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1585.1


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
|           38 |        5 | 2024-08-28 | HEROIC           | L   | 1.000      | -            | -                | -                | -         |   -20.89 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           37 |       25 | 2024-08-28 | Spirit           | L   | 1.000      | -            | -                | -                | -         |    -5.98 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           36 |       56 | 2024-08-27 | Eternal Fire     | L   | 1.000      | -            | -                | -                | -         |   -14.11 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           35 |       81 | 2024-08-27 | paiN             | L   | 1.000      | -            | -                | -                | -         |   -16.39 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           34 |      117 | 2024-08-26 | 3DMAX            | W   | 1.000      | 0.143        | 0.537 (0.077)    | 0.917 (0.131)    | -         |     7.30 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           33 |      139 | 2024-08-26 | OG               | W   | 1.000      | -            | -                | -                | -         |     1.83 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           32 |      161 | 2024-08-26 | 9z               | W   | 1.000      | 0.143        | 0.398 (0.057)    | -                | 1 (1.000) |    10.56 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           31 |      182 | 2024-08-25 | Virtus.pro       | W   | 1.000      | 0.535        | 0.557 (0.298)    | 0.290 (0.155)    | -         |    15.42 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           30 |      194 | 2024-08-25 | BetBoom          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     7.54 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           29 |      207 | 2024-08-24 | Complexity       | W   | 1.000      | 0.535        | 0.388 (0.207)    | 0.376 (0.201)    | -         |    16.32 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           28 |      213 | 2024-08-24 | 9z               | L   | 1.000      | -            | -                | -                | -         |   -19.22 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           27 |      255 | 2024-08-22 | M80              | W   | 1.000      | 0.535        | 0.196 (0.105)    | 0.544 (0.291)    | -         |     4.13 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           26 |      565 | 2024-08-13 | FaZe             | L   | 1.000      | -            | -                | -                | -         |    -9.20 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |      613 | 2024-08-12 | Virtus.pro       | W   | 1.000      | 1.000        | 0.557 (0.557)    | 0.290 (0.290)    | 1 (1.000) |    16.51 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |      639 | 2024-08-11 | MOUZ             | L   | 1.000      | -            | -                | -                | -         |    -4.69 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |      680 | 2024-08-09 | BIG              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     6.11 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |      702 | 2024-08-08 | ALTERNATE aTTaX  | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.81 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |      746 | 2024-08-07 | Eternal Fire     | L   | 1.000      | -            | -                | -                | -         |   -12.07 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |      934 | 2024-08-02 | Astralis         | L   | 1.000      | -            | -                | -                | -         |   -11.85 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     1056 | 2024-07-30 | GamerLegion      | W   | 1.000      | 0.581        | 0.188 (0.109)    | 0.478 (0.277)    | 1 (1.000) |     2.38 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     1087 | 2024-07-29 | Astralis         | L   | 1.000      | -            | -                | -                | -         |   -12.54 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     1855 | 2024-06-16 | Complexity       | L   | 0.713      | -            | -                | -                | -         |   -11.06 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     1860 | 2024-06-16 | ENCE             | W   | 0.712      | 0.500        | -                | 0.349 (0.124)    | 1 (0.712) |     3.76 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     1889 | 2024-06-15 | The MongolZ      | W   | 0.706      | 0.500        | 1.000 (0.353)    | 0.615 (0.217)    | 1 (0.706) |    18.34 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     1899 | 2024-06-15 | Party Astronauts | W   | 0.705      | 0.500        | -                | 0.498 (0.175)    | 1 (0.705) |     0.73 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     1942 | 2024-06-14 | Aurora           | L   | 0.698      | -            | -                | -                | -         |   -16.30 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     2548 | 2024-05-28 | Liquid           | L   | 0.589      | -            | -                | -                | -         |    -7.38 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     2569 | 2024-05-27 | Monte            | W   | 0.582      | -            | -                | -                | 1 (0.582) |     0.88 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           10 |     2581 | 2024-05-27 | G2               | L   | 0.580      | -            | -                | -                | -         |    -2.08 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            9 |     2832 | 2024-05-18 | Spirit           | L   | 0.519      | -            | -                | -                | -         |    -3.85 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            8 |     2862 | 2024-05-17 | Virtus.pro       | W   | 0.513      | 0.769        | 0.557 (0.219)    | -                | -         |     8.32 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            7 |     2936 | 2024-05-15 | BetBoom          | W   | 0.501      | 0.769        | 0.273 (0.105)    | 0.497 (0.191)    | -         |     2.61 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            6 |     3002 | 2024-05-14 | Virtus.pro       | L   | 0.494      | -            | -                | -                | -         |    -7.57 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     3375 | 2024-04-27 | G2               | L   | 0.379      | -            | -                | -                | -         |    -1.33 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     3400 | 2024-04-26 | BetBoom          | L   | 0.372      | -            | -                | -                | -         |    -9.81 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     3426 | 2024-04-25 | TYLOO            | W   | 0.366      | -            | -                | -                | -         |     0.09 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     3446 | 2024-04-24 | The MongolZ      | L   | 0.359      | -            | -                | -                | -         |    -1.95 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     4621 | 2024-03-06 | Metizport        | L   | 0.035      | -            | -                | -                | -         |    -1.08 | Maden, Magisk, s1mple, Snappi, SunPayus  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($91,842.69)
- Divide that value by the 5th highest value among all rosters ($290,989.03)
- The final value (0.32) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-25 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-08-18 |      1.000 | $16,000.00     | $16,000.00      |
| 2024-08-04 |      1.000 | $8,500.00      | $8,500.00       |
| 2024-06-16 |      0.713 | $20,000.00     | $14,258.10      |
| 2024-06-02 |      0.621 | $5,000.00      | $3,106.17       |
| 2024-05-19 |      0.526 | $50,000.00     | $26,311.71      |
| 2024-05-12 |      0.480 | $7,000.00      | $3,360.60       |
| 2024-03-10 |      0.061 | $5,000.00      | $306.11         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
