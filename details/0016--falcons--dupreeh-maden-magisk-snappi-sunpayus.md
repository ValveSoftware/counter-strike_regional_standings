### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, Snappi, SunPayus<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [16](../standings_global.md)<br />
Regional Rank: [12]( ../standings_europe.md)<br />
Final Rank Value:  1573.3<br />
<br />
Final Rank Value (1573.3) = Starting Rank Value (1588.8) + Head To Head Adjustments (-15.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.688[<sup>1</sup>](#table2)
- Bounty Collected: 0.550[<sup>2</sup>](#table1)
- Opponent Network: 0.230[<sup>2</sup>](#table1)
- LAN Wins: 0.787[<sup>2</sup>](#table1)

The average of these factors is 0.564<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1588.8
- 400 + ( ( 0.564 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1588.8


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
|           30 |      158 | 2024-06-16 | Complexity       | L   | 1.000      | -            | -                | -                | -         |    -9.68 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           29 |      163 | 2024-06-16 | ENCE             | W   | 1.000      | 0.500        | 0.216 (0.108)    | 0.399 (0.199)    | 1 (1.000) |     8.55 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           28 |      192 | 2024-06-15 | The MongolZ      | W   | 1.000      | 0.500        | 1.000 (0.500)    | 0.692 (0.346)    | 1 (1.000) |    26.98 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           27 |      202 | 2024-06-15 | Party Astronauts | W   | 1.000      | 0.500        | 0.062 (0.031)    | 0.589 (0.294)    | 1 (1.000) |     1.76 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           26 |      245 | 2024-06-14 | Aurora           | L   | 1.000      | -            | -                | -                | -         |   -23.00 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |      851 | 2024-05-28 | Liquid           | L   | 0.909      | -            | -                | -                | -         |   -11.68 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |      872 | 2024-05-27 | Monte            | W   | 0.902      | 0.624        | 0.188 (0.106)    | 0.668 (0.376)    | 1 (0.902) |     4.10 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |      884 | 2024-05-27 | G2               | L   | 0.900      | -            | -                | -                | -         |    -4.63 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     1135 | 2024-05-18 | Spirit           | L   | 0.839      | -            | -                | -                | -         |    -2.21 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     1165 | 2024-05-17 | Virtus.pro       | W   | 0.832      | 0.769        | 0.347 (0.222)    | 0.391 (0.250)    | 1 (0.832) |    18.64 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     1239 | 2024-05-15 | BetBoom          | W   | 0.820      | 0.769        | 0.406 (0.256)    | 0.745 (0.470)    | 1 (0.820) |    10.80 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     1305 | 2024-05-14 | Virtus.pro       | L   | 0.813      | -            | -                | -                | -         |    -6.74 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     1678 | 2024-04-27 | G2               | L   | 0.699      | -            | -                | -                | -         |    -3.30 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     1703 | 2024-04-26 | BetBoom          | L   | 0.692      | -            | -                | -                | -         |   -11.08 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     1729 | 2024-04-25 | TYLOO            | W   | 0.686      | 0.889        | 0.050 (0.031)    | 0.240 (0.146)    | 1 (0.686) |     0.33 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     1749 | 2024-04-24 | The MongolZ      | L   | 0.679      | -            | -                | -                | -         |    -2.82 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     2924 | 2024-03-06 | Metizport        | L   | 0.354      | -            | -                | -                | -         |   -10.81 | Maden, Magisk, s1mple, Snappi, SunPayus  |
|           13 |     3375 | 2024-02-16 | AMKAL            | L   | 0.225      | -            | -                | -                | -         |    -6.59 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           12 |     3405 | 2024-02-15 | Eternal Fire     | L   | 0.218      | -            | -                | -                | -         |    -2.15 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           11 |     3431 | 2024-02-14 | FaZe             | L   | 0.213      | -            | -                | -                | -         |    -0.99 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           10 |     3435 | 2024-02-14 | 3DMAX            | W   | 0.212      | -            | -                | -                | 1 (0.212) |     0.79 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            9 |     3491 | 2024-02-10 | Spirit           | L   | 0.187      | -            | -                | -                | -         |    -0.55 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            8 |     3504 | 2024-02-09 | ENCE             | W   | 0.181      | 1.000        | 0.216 (0.039)    | 0.399 (0.072)    | 1 (0.181) |     2.11 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            7 |     3539 | 2024-02-06 | Natus Vincere    | W   | 0.160      | 1.000        | 1.000 (0.160)    | -                | 1 (0.160) |     4.30 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            6 |     3548 | 2024-02-05 | Complexity       | W   | 0.154      | 1.000        | 0.440 (0.068)    | 0.427 (0.066)    | -         |     3.77 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            5 |     3562 | 2024-02-04 | Rebels           | W   | 0.148      | 1.000        | -                | 0.551 (0.081)    | -         |     0.25 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            4 |     3604 | 2024-02-03 | Eternal Fire     | L   | 0.139      | -            | -                | -                | -         |    -1.31 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            3 |     3754 | 2024-01-26 | Vitality         | L   | 0.086      | -            | -                | -                | -         |    -0.28 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            2 |     3800 | 2024-01-23 | OG               | W   | 0.068      | -            | -                | -                | -         |     0.17 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            1 |     3828 | 2024-01-22 | Astralis         | L   | 0.060      | -            | -                | -                | -         |    -0.25 | BOROS, Maden, Magisk, Snappi, SunPayus   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($90,845.51)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.35) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-06-02 |      0.941 | $5,000.00      | $4,705.01       |
| 2024-05-19 |      0.846 | $50,000.00     | $42,300.20      |
| 2024-05-12 |      0.800 | $7,000.00      | $5,598.99       |
| 2024-03-10 |      0.381 | $5,000.00      | $1,904.96       |
| 2024-02-11 |      0.194 | $80,000.00     | $15,483.65      |
| 2024-01-28 |      0.100 | $8,500.00      | $852.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
