### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, Snappi, SunPayus<br />
Global Rank: [16](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_11.md)<br />
Regional Rank: [12]( ../../standings_europe_2024_09_11.md)<br />
<br />
Final Rank Value:  1471.5<br />
<br />
Final Rank Value (1471.5) = Starting Rank Value (1511.2) + Head To Head Adjustments (-39.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.657[<sup>1</sup>](#table2)
- Bounty Collected: 0.573[<sup>2</sup>](#table1)
- Opponent Network: 0.202[<sup>2</sup>](#table1)
- LAN Wins: 0.856[<sup>2</sup>](#table1)

The average of these factors is 0.572<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1511.2
- 400 + ( ( 0.572 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1511.2


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
|           39 |        8 | 2024-09-11 | FURIA            | L   | 1.000      | -            | -                | -                | -         |   -10.68 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           38 |      376 | 2024-08-29 | Virtus.pro       | L   | 1.000      | -            | -                | -                | -         |   -14.69 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           37 |      411 | 2024-08-28 | HEROIC           | L   | 1.000      | -            | -                | -                | -         |   -18.99 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           36 |      431 | 2024-08-28 | Spirit           | L   | 1.000      | -            | -                | -                | -         |    -2.92 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           35 |      462 | 2024-08-27 | Eternal Fire     | L   | 1.000      | -            | -                | -                | -         |    -7.62 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           34 |      487 | 2024-08-27 | paiN             | L   | 1.000      | -            | -                | -                | -         |   -13.62 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           33 |      523 | 2024-08-26 | 3DMAX            | W   | 1.000      | 0.143        | 0.512 (0.073)    | 0.913 (0.130)    | -         |    10.97 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           32 |      545 | 2024-08-26 | OG               | W   | 1.000      | -            | -                | -                | -         |     1.91 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           31 |      567 | 2024-08-26 | 9z               | W   | 1.000      | 0.143        | 0.362 (0.052)    | -                | 1 (1.000) |    11.40 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           30 |      588 | 2024-08-25 | Virtus.pro       | W   | 1.000      | 0.535        | 0.522 (0.279)    | 0.314 (0.168)    | -         |    16.59 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           29 |      600 | 2024-08-25 | BetBoom          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     7.21 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           28 |      613 | 2024-08-24 | Complexity       | W   | 1.000      | 0.535        | 0.337 (0.180)    | 0.390 (0.208)    | -         |    17.41 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           27 |      619 | 2024-08-24 | 9z               | L   | 1.000      | -            | -                | -                | -         |   -18.24 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           26 |      661 | 2024-08-22 | M80              | W   | 1.000      | 0.535        | 0.169 (0.090)    | 0.505 (0.270)    | -         |     5.60 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |      971 | 2024-08-13 | FaZe             | L   | 1.000      | -            | -                | -                | -         |    -6.86 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |     1019 | 2024-08-12 | Virtus.pro       | W   | 0.999      | 1.000        | 0.522 (0.521)    | 0.314 (0.313)    | 1 (0.999) |    18.01 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |     1045 | 2024-08-11 | MOUZ             | L   | 0.992      | -            | -                | -                | -         |    -2.80 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     1086 | 2024-08-09 | BIG              | W   | 0.980      | -            | -                | -                | 1 (0.980) |     7.00 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     1108 | 2024-08-08 | ALTERNATE aTTaX  | W   | 0.974      | 0.143        | -                | 0.812 (0.113)    | 1 (0.974) |     1.19 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     1152 | 2024-08-07 | Eternal Fire     | L   | 0.967      | -            | -                | -                | -         |    -4.62 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     1340 | 2024-08-02 | Astralis         | L   | 0.933      | -            | -                | -                | -         |   -12.34 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     1462 | 2024-07-30 | GamerLegion      | W   | 0.914      | 0.581        | 0.196 (0.104)    | 0.586 (0.311)    | 1 (0.914) |     2.81 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     1493 | 2024-07-29 | Astralis         | L   | 0.907      | -            | -                | -                | -         |   -12.77 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     2261 | 2024-06-16 | Complexity       | L   | 0.619      | -            | -                | -                | -         |    -8.98 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     2266 | 2024-06-16 | ENCE             | W   | 0.619      | -            | -                | -                | 1 (0.619) |     3.16 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     2295 | 2024-06-15 | The MongolZ      | W   | 0.613      | 0.500        | 0.863 (0.265)    | 0.666 (0.204)    | 1 (0.613) |    16.80 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     2305 | 2024-06-15 | Party Astronauts | W   | 0.611      | 0.500        | -                | 0.466 (0.142)    | 1 (0.611) |     0.83 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     2348 | 2024-06-14 | Aurora           | L   | 0.605      | -            | -                | -                | -         |   -14.14 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     2954 | 2024-05-28 | Liquid           | L   | 0.496      | -            | -                | -                | -         |    -5.79 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           10 |     2975 | 2024-05-27 | Monte            | W   | 0.488      | -            | -                | -                | 1 (0.488) |     0.76 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            9 |     2987 | 2024-05-27 | G2               | L   | 0.487      | -            | -                | -                | -         |    -1.12 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            8 |     3238 | 2024-05-18 | Spirit           | L   | 0.426      | -            | -                | -                | -         |    -1.02 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            7 |     3268 | 2024-05-17 | Virtus.pro       | W   | 0.419      | 0.769        | 0.522 (0.168)    | -                | -         |     7.81 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            6 |     3342 | 2024-05-15 | BetBoom          | W   | 0.407      | 0.769        | 0.227 (0.071)    | 0.511 (0.160)    | -         |     2.18 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     3408 | 2024-05-14 | Virtus.pro       | L   | 0.400      | -            | -                | -                | -         |    -5.17 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     3781 | 2024-04-27 | G2               | L   | 0.286      | -            | -                | -                | -         |    -0.63 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     3806 | 2024-04-26 | BetBoom          | L   | 0.279      | -            | -                | -                | -         |    -7.34 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     3832 | 2024-04-25 | TYLOO            | W   | 0.272      | -            | -                | -                | -         |     0.09 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     3852 | 2024-04-24 | The MongolZ      | L   | 0.266      | -            | -                | -                | -         |    -1.00 | dupreeh, Maden, Magisk, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($88,420.49)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.30) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-01 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-08-25 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-08-18 |      1.000 | $16,000.00     | $16,000.00      |
| 2024-08-04 |      0.946 | $8,500.00      | $8,043.76       |
| 2024-06-16 |      0.619 | $20,000.00     | $12,389.85      |
| 2024-06-02 |      0.528 | $5,000.00      | $2,639.10       |
| 2024-05-19 |      0.433 | $50,000.00     | $21,641.07      |
| 2024-05-12 |      0.387 | $7,000.00      | $2,706.71       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
