### Roster Details<br />
Team Name: Natus Vincere<br />
Roster: Aleksib, b1t, iM, jL, w0nderful<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [5](../standings_global.md)<br />
Regional Rank: [5]( ../standings_europe.md)<br />
Final Rank Value:  1914.9<br />
<br />
Final Rank Value (1914.9) = Starting Rank Value (1929.4) + Head To Head Adjustments (-14.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.763[<sup>2</sup>](#table1)
- Opponent Network: 0.371[<sup>2</sup>](#table1)
- LAN Wins: 0.876[<sup>2</sup>](#table1)

The average of these factors is 0.753<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1929.4
- 400 + ( ( 0.753 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1929.4


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
|           33 |       18 | 2024-06-16 | Spirit            | L   | 1.000      | -            | -                | -                | -         |   -10.64 | Aleksib, b1t, iM, jL, w0nderful |
|           32 |       42 | 2024-06-15 | Virtus.pro        | W   | 1.000      | 0.729        | 0.345 (0.252)    | 0.427 (0.311)    | 1 (1.000) |     8.55 | Aleksib, b1t, iM, jL, w0nderful |
|           31 |      132 | 2024-06-13 | FaZe              | W   | 1.000      | 0.729        | 1.000 (0.729)    | 0.540 (0.394)    | 1 (1.000) |    17.07 | Aleksib, b1t, iM, jL, w0nderful |
|           30 |      161 | 2024-06-12 | Astralis          | W   | 1.000      | 0.729        | 0.533 (0.389)    | 0.501 (0.365)    | 1 (1.000) |    13.43 | Aleksib, b1t, iM, jL, w0nderful |
|           29 |      705 | 2024-05-29 | HEROIC            | L   | 1.000      | -            | -                | -                | -         |   -23.03 | Aleksib, b1t, iM, jL, w0nderful |
|           28 |      726 | 2024-05-28 | Spirit            | L   | 1.000      | -            | -                | -                | -         |   -11.99 | Aleksib, b1t, iM, jL, w0nderful |
|           27 |      744 | 2024-05-27 | BIG               | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.68 | Aleksib, b1t, iM, jL, w0nderful |
|           26 |     1310 | 2024-05-08 | FaZe              | L   | 0.930      | -            | -                | -                | -         |   -12.48 | Aleksib, b1t, iM, jL, w0nderful |
|           25 |     1360 | 2024-05-05 | Complexity        | L   | 0.910      | -            | -                | -                | -         |   -20.09 | Aleksib, b1t, iM, jL, w0nderful |
|           24 |     1432 | 2024-05-02 | BIG               | W   | 0.888      | 0.889        | -                | 0.433 (0.342)    | 1 (0.888) |     1.18 | Aleksib, b1t, iM, jL, w0nderful |
|           23 |     1459 | 2024-05-01 | FlyQuest          | W   | 0.881      | 0.889        | -                | 0.476 (0.373)    | 1 (0.881) |     1.19 | Aleksib, b1t, iM, jL, w0nderful |
|           22 |     2287 | 2024-03-31 | FaZe              | W   | 0.676      | 1.000        | 1.000 (0.676)    | 0.540 (0.365)    | 1 (0.676) |    11.33 | Aleksib, b1t, iM, jL, w0nderful |
|           21 |     2293 | 2024-03-30 | G2                | W   | 0.670      | 1.000        | 0.756 (0.506)    | 0.508 (0.341)    | 1 (0.670) |    10.41 | Aleksib, b1t, iM, jL, w0nderful |
|           20 |     2303 | 2024-03-29 | Eternal Fire      | W   | 0.662      | 1.000        | 1.000 (0.662)    | 0.485 (0.321)    | 1 (0.662) |     7.93 | Aleksib, b1t, iM, jL, w0nderful |
|           19 |     2396 | 2024-03-24 | paiN              | W   | 0.629      | 1.000        | 0.492 (0.310)    | 0.775 (0.488)    | 1 (0.629) |     3.10 | Aleksib, b1t, iM, jL, w0nderful |
|           18 |     2404 | 2024-03-23 | Cloud9            | L   | 0.623      | -            | -                | -                | -         |   -18.71 | Aleksib, b1t, iM, jL, w0nderful |
|           17 |     2420 | 2024-03-22 | Spirit            | L   | 0.616      | -            | -                | -                | -         |    -7.99 | Aleksib, b1t, iM, jL, w0nderful |
|           16 |     2438 | 2024-03-21 | G2                | W   | 0.610      | 1.000        | 0.756 (0.461)    | -                | -         |     9.57 | Aleksib, b1t, iM, jL, w0nderful |
|           15 |     2455 | 2024-03-21 | The MongolZ       | W   | 0.607      | 1.000        | 0.986 (0.599)    | 0.681 (0.414)    | -         |     8.90 | Aleksib, b1t, iM, jL, w0nderful |
|           14 |     3227 | 2024-02-16 | BetBoom           | W   | 0.383      | -            | -                | -                | -         |     2.01 | Aleksib, b1t, iM, jL, w0nderful |
|           13 |     3262 | 2024-02-15 | Virtus.pro        | L   | 0.375      | -            | -                | -                | -         |    -8.44 | Aleksib, b1t, iM, jL, w0nderful |
|           12 |     3292 | 2024-02-14 | Enterprise        | W   | 0.370      | -            | -                | -                | -         |     0.07 | Aleksib, b1t, iM, jL, w0nderful |
|           11 |     3309 | 2024-02-14 | KOI               | W   | 0.368      | -            | -                | -                | -         |     0.17 | Aleksib, b1t, iM, jL, w0nderful |
|           10 |     3406 | 2024-02-06 | Falcons           | L   | 0.315      | -            | -                | -                | -         |    -8.55 | Aleksib, b1t, iM, jL, w0nderful |
|            9 |     3414 | 2024-02-05 | Eternal Fire      | W   | 0.310      | 1.000        | 1.000 (0.310)    | -                | -         |     3.16 | Aleksib, b1t, iM, jL, w0nderful |
|            8 |     3431 | 2024-02-04 | Apeks             | W   | 0.303      | -            | -                | -                | -         |     0.10 | Aleksib, b1t, iM, jL, w0nderful |
|            7 |     3457 | 2024-02-03 | Spirit            | L   | 0.296      | -            | -                | -                | -         |    -4.13 | Aleksib, b1t, iM, jL, w0nderful |
|            6 |     3600 | 2024-01-27 | G2                | W   | 0.248      | -            | -                | -                | -         |     3.89 | Aleksib, b1t, iM, jL, w0nderful |
|            5 |     3677 | 2024-01-23 | G2                | W   | 0.221      | -            | -                | -                | -         |     3.53 | Aleksib, b1t, iM, jL, w0nderful |
|            4 |     3703 | 2024-01-22 | Complexity        | W   | 0.215      | -            | -                | -                | -         |     2.26 | Aleksib, b1t, iM, jL, w0nderful |
|            3 |     3819 | 2024-01-19 | Virtus.pro        | W   | 0.196      | -            | -                | -                | -         |     1.84 | Aleksib, b1t, iM, jL, w0nderful |
|            2 |     3875 | 2024-01-18 | 9 Pandas          | W   | 0.189      | -            | -                | -                | -         |     0.07 | Aleksib, b1t, iM, jL, w0nderful |
|            1 |     3891 | 2024-01-18 | Gaimin Gladiators | W   | 0.188      | -            | -                | -                | -         |     0.10 | Aleksib, b1t, iM, jL, w0nderful |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($464,751.74)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $85,000.00     | $85,000.00      |
| 2024-06-02 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-12 |      0.956 | $23,500.00     | $22,454.92      |
| 2024-03-31 |      0.676 | $500,000.00    | $338,155.79     |
| 2024-02-11 |      0.349 | $24,000.00     | $8,381.25       |
| 2024-01-28 |      0.256 | $22,500.00     | $5,759.78       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
