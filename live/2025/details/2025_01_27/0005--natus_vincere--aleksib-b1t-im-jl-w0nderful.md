### Roster Details<br />
Team Name: Natus Vincere<br />
Roster: Aleksib, b1t, iM, jL, w0nderful<br />
Global Rank: [5](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [4]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  1735.5<br />
<br />
Final Rank Value (1735.5) = Starting Rank Value (1767.6) + Head To Head Adjustments (-32.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.629[<sup>2</sup>](#table1)
- Opponent Network: 0.265[<sup>2</sup>](#table1)
- LAN Wins: 0.902[<sup>2</sup>](#table1)

The average of these factors is 0.699<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1767.6
- 400 + ( ( 0.699 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1767.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |       16 | 2025-01-25 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -7.54 | Aleksib, b1t, iM, jL, w0nderful |
|           39 |       46 | 2025-01-24 | paiN              | W   | 1.000      | 0.769        | 0.313 (0.241)    | 0.754 (0.580)    | 1 (1.000) |     5.34 | Aleksib, b1t, iM, jL, w0nderful |
|           38 |      207 | 2025-01-18 | Astralis          | W   | 1.000      | -            | -                | -                | -         |     2.38 | Aleksib, b1t, iM, jL, w0nderful |
|           37 |      215 | 2025-01-16 | Imperial fe       | W   | 1.000      | -            | -                | -                | -         |     1.88 | Aleksib, b1t, iM, jL, w0nderful |
|           36 |      520 | 2024-12-08 | Falcons           | L   | 0.864      | -            | -                | -                | -         |   -15.25 | Aleksib, b1t, iM, jL, w0nderful |
|           35 |      553 | 2024-12-06 | GamerLegion       | W   | 0.857      | 1.000        | -                | 0.468 (0.401)    | 1 (0.857) |     3.08 | Aleksib, b1t, iM, jL, w0nderful |
|           34 |      586 | 2024-12-05 | Spirit            | L   | 0.849      | -            | -                | -                | -         |    -7.84 | Aleksib, b1t, iM, jL, w0nderful |
|           33 |      598 | 2024-12-05 | MIBR              | L   | 0.845      | -            | -                | -                | -         |   -23.33 | Aleksib, b1t, iM, jL, w0nderful |
|           32 |      619 | 2024-12-04 | Liquid            | W   | 0.843      | 1.000        | 0.371 (0.313)    | 0.519 (0.437)    | 1 (0.843) |     6.62 | Aleksib, b1t, iM, jL, w0nderful |
|           31 |      926 | 2024-11-18 | SAW               | W   | 0.737      | -            | -                | -                | 1 (0.737) |     1.40 | Aleksib, b1t, iM, jL, w0nderful |
|           30 |      937 | 2024-11-18 | MOUZ              | L   | 0.731      | -            | -                | -                | -         |   -12.70 | Aleksib, b1t, iM, jL, w0nderful |
|           29 |      960 | 2024-11-17 | SINNERS           | W   | 0.724      | -            | -                | -                | 1 (0.724) |     0.38 | Aleksib, b1t, iM, jL, w0nderful |
|           28 |      968 | 2024-11-16 | fnatic            | W   | 0.723      | -            | -                | -                | 1 (0.723) |     0.55 | Aleksib, b1t, iM, jL, w0nderful |
|           27 |     1367 | 2024-10-31 | FaZe              | L   | 0.611      | -            | -                | -                | -         |    -8.51 | Aleksib, b1t, iM, jL, w0nderful |
|           26 |     1388 | 2024-10-30 | Astralis          | L   | 0.604      | -            | -                | -                | -         |   -18.12 | Aleksib, b1t, iM, jL, w0nderful |
|           25 |     1695 | 2024-10-13 | MOUZ              | W   | 0.494      | 0.624        | 0.656 (0.202)    | 0.482 (0.149)    | 1 (0.494) |     6.73 | Aleksib, b1t, iM, jL, w0nderful |
|           24 |     1715 | 2024-10-12 | Falcons           | W   | 0.487      | 0.624        | 0.872 (0.265)    | 0.627 (0.190)    | 1 (0.487) |     6.29 | Aleksib, b1t, iM, jL, w0nderful |
|           23 |     1733 | 2024-10-11 | Virtus.pro        | W   | 0.480      | -            | -                | -                | 1 (0.480) |     0.91 | Aleksib, b1t, iM, jL, w0nderful |
|           22 |     1777 | 2024-10-09 | FURIA             | L   | 0.467      | -            | -                | -                | -         |   -11.39 | Aleksib, b1t, iM, jL, w0nderful |
|           21 |     1831 | 2024-10-07 | Liquid            | W   | 0.455      | 0.624        | -                | 0.519 (0.147)    | 1 (0.455) |     3.28 | Aleksib, b1t, iM, jL, w0nderful |
|           20 |     1844 | 2024-10-07 | Imperial          | W   | 0.453      | -            | -                | -                | -         |     0.34 | Aleksib, b1t, iM, jL, w0nderful |
|           19 |     2106 | 2024-09-29 | G2                | L   | 0.400      | -            | -                | -                | -         |    -3.78 | Aleksib, b1t, iM, jL, w0nderful |
|           18 |     2133 | 2024-09-28 | FaZe              | W   | 0.394      | 0.729        | 1.000 (0.288)    | 0.566 (0.163)    | -         |     7.27 | Aleksib, b1t, iM, jL, w0nderful |
|           17 |     2241 | 2024-09-26 | G2                | W   | 0.379      | 0.729        | 1.000 (0.277)    | 0.569 (0.157)    | -         |     8.51 | Aleksib, b1t, iM, jL, w0nderful |
|           16 |     2297 | 2024-09-25 | Falcons           | W   | 0.372      | -            | -                | -                | -         |     0.10 | Aleksib, b1t, iM, jL, w0nderful |
|           15 |     2398 | 2024-09-22 | Eternal Fire      | W   | 0.354      | 0.889        | 0.710 (0.223)    | -                | -         |     2.92 | Aleksib, b1t, iM, jL, w0nderful |
|           14 |     2422 | 2024-09-21 | G2                | W   | 0.347      | 0.889        | 1.000 (0.309)    | 0.569 (0.176)    | -         |     7.98 | Aleksib, b1t, iM, jL, w0nderful |
|           13 |     2453 | 2024-09-20 | Spirit            | W   | 0.339      | 0.889        | 1.000 (0.302)    | 0.842 (0.254)    | -         |     8.32 | Aleksib, b1t, iM, jL, w0nderful |
|           12 |     2818 | 2024-09-07 | Eternal Fire      | W   | 0.254      | 0.889        | 0.710 (0.160)    | -                | -         |     2.11 | Aleksib, b1t, iM, jL, w0nderful |
|           11 |     2930 | 2024-09-04 | Ninjas in Pyjamas | W   | 0.234      | -            | -                | -                | -         |     0.14 | Aleksib, b1t, iM, jL, w0nderful |
|           10 |     2974 | 2024-09-03 | Lynn Vision       | W   | 0.225      | -            | -                | -                | -         |     0.09 | Aleksib, b1t, iM, jL, w0nderful |
|            9 |     3554 | 2024-08-18 | Vitality          | L   | 0.121      | -            | -                | -                | -         |    -2.11 | Aleksib, b1t, iM, jL, w0nderful |
|            8 |     3576 | 2024-08-17 | MOUZ              | W   | 0.114      | -            | -                | -                | -         |     1.81 | Aleksib, b1t, iM, jL, w0nderful |
|            7 |     3691 | 2024-08-13 | SAW               | W   | 0.086      | -            | -                | -                | -         |     0.17 | Aleksib, b1t, iM, jL, w0nderful |
|            6 |     3768 | 2024-08-11 | Astralis          | W   | 0.073      | -            | -                | -                | -         |     0.14 | Aleksib, b1t, iM, jL, w0nderful |
|            5 |     3785 | 2024-08-10 | paiN              | W   | 0.067      | -            | -                | -                | -         |     0.35 | Aleksib, b1t, iM, jL, w0nderful |
|            4 |     3990 | 2024-08-04 | Complexity        | W   | 0.026      | -            | -                | -                | -         |     0.05 | Aleksib, b1t, iM, jL, w0nderful |
|            3 |     4015 | 2024-08-03 | Liquid            | L   | 0.021      | -            | -                | -                | -         |    -0.49 | Aleksib, b1t, iM, jL, w0nderful |
|            2 |     4052 | 2024-08-02 | BIG               | W   | 0.014      | -            | -                | -                | -         |     0.04 | Aleksib, b1t, iM, jL, w0nderful |
|            1 |     4094 | 2024-08-01 | Liquid            | L   | 0.007      | -            | -                | -                | -         |    -0.16 | Aleksib, b1t, iM, jL, w0nderful |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($215,860.56)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-26 |      1.000 | $22,500.00     | $22,500.00      |
| 2024-12-15 |      0.912 | $20,000.00     | $18,234.63      |
| 2024-11-03 |      0.632 | $15,000.00     | $9,474.25       |
| 2024-10-13 |      0.494 | $100,000.00    | $49,414.39      |
| 2024-09-29 |      0.400 | $85,000.00     | $34,003.41      |
| 2024-09-22 |      0.354 | $170,000.00    | $60,189.42      |
| 2024-08-18 |      0.121 | $180,000.00    | $21,716.75      |
| 2024-08-04 |      0.026 | $12,500.00     | $327.71         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
