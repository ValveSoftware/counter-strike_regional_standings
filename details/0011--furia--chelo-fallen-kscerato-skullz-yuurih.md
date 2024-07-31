### Roster Details<br />
Team Name: FURIA<br />
Roster: chelo, FalleN, KSCERATO, skullz, yuurih<br />
Global Rank: [11](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [1]( ../standings_americas.md)<br />
<br />
Final Rank Value:  1617.5<br />
<br />
Final Rank Value (1617.5) = Starting Rank Value (1751.4) + Head To Head Adjustments (-134.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.648[<sup>1</sup>](#table2)
- Bounty Collected: 0.625[<sup>2</sup>](#table1)
- Opponent Network: 0.421[<sup>2</sup>](#table1)
- LAN Wins: 0.925[<sup>2</sup>](#table1)

The average of these factors is 0.655<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1751.4
- 400 + ( ( 0.655 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1751.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |      401 | 2024-07-19 | MOUZ               | L   | 1.000      | -            | -                | -                | -         |    -5.33 | chelo, FalleN, KSCERATO, skullz, yuurih |
|           44 |      452 | 2024-07-18 | The MongolZ        | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.719 (0.719)    | 1 (1.000) |    22.36 | chelo, FalleN, KSCERATO, skullz, yuurih |
|           43 |      464 | 2024-07-18 | Sashi              | W   | 1.000      | 1.000        | 0.187 (0.187)    | 0.973 (0.973)    | 1 (1.000) |     2.80 | chelo, FalleN, KSCERATO, skullz, yuurih |
|           42 |      472 | 2024-07-18 | FlyQuest           | W   | 1.000      | 1.000        | 0.106 (0.106)    | 0.298 (0.298)    | 1 (1.000) |     3.13 | chelo, FalleN, KSCERATO, skullz, yuurih |
|           41 |      529 | 2024-07-17 | Natus Vincere      | L   | 1.000      | -            | -                | -                | -         |    -4.15 | chelo, FalleN, KSCERATO, skullz, yuurih |
|           40 |     1137 | 2024-06-08 | Ninjas in Pyjamas  | L   | 0.846      | -            | -                | -                | -         |   -14.82 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           39 |     1260 | 2024-06-06 | Complexity         | W   | 0.832      | 0.715        | 0.319 (0.190)    | -                | 1 (0.832) |    13.60 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           38 |     1272 | 2024-06-06 | fnatic             | W   | 0.832      | 0.715        | 0.374 (0.223)    | 0.633 (0.376)    | 1 (0.832) |     9.19 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           37 |     1292 | 2024-06-06 | Eternal Fire       | W   | 0.830      | 0.715        | 0.759 (0.451)    | 0.462 (0.274)    | 1 (0.830) |    16.18 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           36 |     1325 | 2024-06-05 | BetBoom            | W   | 0.825      | 0.715        | 0.259 (0.153)    | 0.554 (0.327)    | 1 (0.825) |     7.01 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           35 |     1339 | 2024-06-05 | BIG                | L   | 0.824      | -            | -                | -                | -         |   -22.00 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           34 |     1418 | 2024-06-02 | GUN5               | L   | 0.806      | -            | -                | -                | -         |   -24.63 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           33 |     1423 | 2024-06-02 | MOUZ NXT           | W   | 0.805      | 0.435        | 0.141 (0.049)    | 1.000 (0.350)    | -         |     1.40 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           32 |     1461 | 2024-06-01 | Zero Tenacity      | W   | 0.797      | 0.435        | -                | 1.000 (0.346)    | -         |     1.49 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           31 |     1512 | 2024-05-30 | RUBY               | W   | 0.785      | -            | -                | -                | -         |     0.59 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           30 |     1616 | 2024-05-25 | 1WIN               | L   | 0.752      | -            | -                | -                | -         |   -22.99 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           29 |     1632 | 2024-05-24 | Passion UA         | W   | 0.745      | 0.435        | 0.172 (0.056)    | 1.000 (0.324)    | -         |     0.79 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           28 |     2195 | 2024-05-05 | Monte              | L   | 0.619      | -            | -                | -                | -         |   -18.89 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           27 |     2214 | 2024-05-04 | ENCE               | W   | 0.612      | 0.889        | 0.175 (0.095)    | 0.404 (0.220)    | 1 (0.612) |     3.86 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           26 |     2231 | 2024-05-03 | Bad News Kangaroos | W   | 0.605      | -            | -                | -                | 1 (0.605) |     0.16 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           25 |     2274 | 2024-05-01 | FORZE              | L   | 0.593      | -            | -                | -                | -         |   -18.33 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           24 |     2295 | 2024-04-30 | Liquid             | L   | 0.586      | -            | -                | -                | -         |   -14.23 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           23 |     2544 | 2024-04-19 | MIBR               | L   | 0.514      | -            | -                | -                | -         |   -12.71 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           22 |     2564 | 2024-04-19 | Metizport          | W   | 0.513      | -            | -                | -                | 1 (0.513) |     0.24 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           21 |     2599 | 2024-04-18 | 9z                 | L   | 0.506      | -            | -                | -                | -         |   -10.90 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           20 |     2885 | 2024-04-09 | HEROIC             | L   | 0.445      | -            | -                | -                | -         |    -9.48 | arT, chelo, FalleN, KSCERATO, yuurih    |
|           19 |     2908 | 2024-04-08 | MOUZ               | L   | 0.439      | -            | -                | -                | -         |    -3.95 | arT, chelo, FalleN, KSCERATO, yuurih    |
|           18 |     2927 | 2024-04-07 | Lynn Vision        | W   | 0.436      | -            | -                | -                | -         |     0.26 | arT, chelo, FalleN, KSCERATO, yuurih    |
|           17 |     3245 | 2024-03-22 | Gaimin Gladiators  | L   | 0.327      | -            | -                | -                | -         |   -10.11 | arT, chelo, FalleN, KSCERATO, yuurih    |
|           16 |     3264 | 2024-03-21 | FaZe               | L   | 0.320      | -            | -                | -                | -         |    -5.26 | arT, chelo, FalleN, KSCERATO, yuurih    |
|           15 |     3275 | 2024-03-21 | G2                 | L   | 0.319      | -            | -                | -                | -         |    -1.85 | arT, chelo, FalleN, KSCERATO, yuurih    |
|           14 |     3297 | 2024-03-20 | SAW                | W   | 0.313      | -            | -                | -                | -         |     0.46 | arT, chelo, FalleN, KSCERATO, yuurih    |
|           13 |     3313 | 2024-03-19 | ENCE               | W   | 0.306      | -            | -                | -                | -         |     1.82 | arT, chelo, FalleN, KSCERATO, yuurih    |
|           12 |     3321 | 2024-03-18 | KOI                | W   | 0.299      | -            | -                | -                | -         |     0.27 | arT, chelo, FalleN, KSCERATO, yuurih    |
|           11 |     3335 | 2024-03-17 | Lynn Vision        | L   | 0.294      | -            | -                | -                | -         |    -9.11 | arT, chelo, FalleN, KSCERATO, yuurih    |
|           10 |     3350 | 2024-03-17 | Legacy             | L   | 0.292      | -            | -                | -                | -         |    -9.05 | arT, chelo, FalleN, KSCERATO, yuurih    |
|            9 |     3697 | 2024-03-03 | Complexity         | W   | 0.201      | -            | -                | -                | -         |     2.28 | arT, chelo, FalleN, KSCERATO, yuurih    |
|            8 |     3732 | 2024-03-02 | Liquid             | W   | 0.192      | -            | -                | -                | -         |     0.98 | arT, chelo, FalleN, KSCERATO, yuurih    |
|            7 |     3754 | 2024-03-01 | Nouns              | W   | 0.186      | -            | -                | -                | -         |     0.06 | arT, chelo, FalleN, KSCERATO, yuurih    |
|            6 |     3886 | 2024-02-23 | 9z                 | L   | 0.142      | -            | -                | -                | -         |    -3.29 | arT, chelo, FalleN, KSCERATO, yuurih    |
|            5 |     3899 | 2024-02-22 | 9z                 | W   | 0.134      | -            | -                | -                | -         |     1.12 | arT, chelo, FalleN, KSCERATO, yuurih    |
|            4 |     3907 | 2024-02-22 | Imperial           | W   | 0.133      | -            | -                | -                | -         |     0.31 | arT, chelo, FalleN, KSCERATO, yuurih    |
|            3 |     4188 | 2024-02-10 | Metizport          | L   | 0.052      | -            | -                | -                | -         |    -1.64 | arT, chelo, FalleN, KSCERATO, yuurih    |
|            2 |     4190 | 2024-02-10 | ex-Anonymo         | W   | 0.052      | -            | -                | -                | -         |     0.00 | arT, chelo, FalleN, KSCERATO, yuurih    |
|            1 |     4192 | 2024-02-10 | Metizport          | L   | 0.051      | -            | -                | -                | -         |    -1.61 | arT, chelo, FalleN, KSCERATO, yuurih    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($94,152.62)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.29) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $40,000.00     | $40,000.00      |
| 2024-06-09 |      0.852 | $28,000.00     | $23,868.85      |
| 2024-06-02 |      0.806 | $10,000.00     | $8,055.02       |
| 2024-05-26 |      0.759 | $2,000.00      | $1,518.21       |
| 2024-05-12 |      0.666 | $12,000.00     | $7,988.79       |
| 2024-04-20 |      0.521 | $5,000.00      | $2,603.39       |
| 2024-04-14 |      0.478 | $5,000.00      | $2,388.05       |
| 2024-03-31 |      0.387 | $20,000.00     | $7,730.31       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
