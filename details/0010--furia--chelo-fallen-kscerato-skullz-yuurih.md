### Roster Details<br />
Team Name: FURIA<br />
Roster: chelo, FalleN, KSCERATO, skullz, yuurih<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [10](../standings_global.md)<br />
Regional Rank: [1]( ../standings_americas.md)<br />
Final Rank Value:  1641.7<br />
<br />
Final Rank Value (1641.7) = Starting Rank Value (1804.9) + Head To Head Adjustments (-163.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.690[<sup>1</sup>](#table2)
- Bounty Collected: 0.647[<sup>2</sup>](#table1)
- Opponent Network: 0.449[<sup>2</sup>](#table1)
- LAN Wins: 0.990[<sup>2</sup>](#table1)

The average of these factors is 0.694<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1804.9
- 400 + ( ( 0.694 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1804.9


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
|           47 |      159 | 2024-07-19 | MOUZ               | L   | 1.000      | -            | -                | -                | -         |    -5.05 | chelo, FalleN, KSCERATO, skullz, yuurih |
|           46 |      210 | 2024-07-18 | The MongolZ        | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.725 (0.725)    | 1 (1.000) |    20.05 | chelo, FalleN, KSCERATO, skullz, yuurih |
|           45 |      222 | 2024-07-18 | Sashi              | W   | 1.000      | 1.000        | 0.234 (0.234)    | 1.000 (1.000)    | 1 (1.000) |     2.34 | chelo, FalleN, KSCERATO, skullz, yuurih |
|           44 |      230 | 2024-07-18 | FlyQuest           | W   | 1.000      | 1.000        | 0.133 (0.133)    | 0.349 (0.349)    | 1 (1.000) |     3.50 | chelo, FalleN, KSCERATO, skullz, yuurih |
|           43 |      287 | 2024-07-17 | Natus Vincere      | L   | 1.000      | -            | -                | -                | -         |    -4.59 | chelo, FalleN, KSCERATO, skullz, yuurih |
|           42 |      895 | 2024-06-08 | Ninjas in Pyjamas  | L   | 0.893      | -            | -                | -                | -         |   -14.98 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           41 |     1018 | 2024-06-06 | Complexity         | W   | 0.880      | 0.715        | 0.405 (0.255)    | 0.378 (0.238)    | 1 (0.880) |    14.65 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           40 |     1030 | 2024-06-06 | fnatic             | W   | 0.879      | 0.715        | 0.428 (0.269)    | 0.666 (0.419)    | 1 (0.879) |     8.46 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           39 |     1050 | 2024-06-06 | Eternal Fire       | W   | 0.877      | 0.715        | 0.833 (0.522)    | 0.443 (0.278)    | 1 (0.877) |    14.45 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           38 |     1083 | 2024-06-05 | BetBoom            | W   | 0.873      | 0.715        | 0.333 (0.208)    | 0.642 (0.401)    | 1 (0.873) |     7.06 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           37 |     1097 | 2024-06-05 | BIG                | L   | 0.871      | -            | -                | -                | -         |   -22.82 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           36 |     1176 | 2024-06-02 | GUN5               | L   | 0.853      | -            | -                | -                | -         |   -26.15 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           35 |     1181 | 2024-06-02 | MOUZ NXT           | W   | 0.852      | 0.435        | 0.169 (0.063)    | 1.000 (0.370)    | -         |     1.25 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           34 |     1219 | 2024-06-01 | Zero Tenacity      | W   | 0.844      | 0.435        | 0.173 (0.064)    | 1.000 (0.367)    | -         |     1.28 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           33 |     1270 | 2024-05-30 | RUBY               | W   | 0.832      | -            | -                | -                | -         |     0.56 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           32 |     1374 | 2024-05-25 | 1WIN               | L   | 0.799      | -            | -                | -                | -         |   -24.50 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           31 |     1390 | 2024-05-24 | Passion UA         | W   | 0.793      | 0.435        | -                | 1.000 (0.344)    | -         |     0.69 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           30 |     1953 | 2024-05-05 | Monte              | L   | 0.666      | -            | -                | -                | -         |   -20.33 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           29 |     1972 | 2024-05-04 | ENCE               | W   | 0.659      | 0.889        | 0.171 (0.100)    | -                | 1 (0.659) |     2.56 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           28 |     1989 | 2024-05-03 | Bad News Kangaroos | W   | 0.653      | -            | -                | -                | 1 (0.653) |     0.16 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           27 |     2032 | 2024-05-01 | FORZE              | L   | 0.640      | -            | -                | -                | -         |   -19.81 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           26 |     2053 | 2024-04-30 | Liquid             | L   | 0.634      | -            | -                | -                | -         |   -16.16 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           25 |     2302 | 2024-04-19 | MIBR               | L   | 0.562      | -            | -                | -                | -         |   -13.99 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           24 |     2322 | 2024-04-19 | Metizport          | W   | 0.560      | -            | -                | -                | 1 (0.560) |     0.24 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           23 |     2357 | 2024-04-18 | 9z                 | L   | 0.554      | -            | -                | -                | -         |   -11.61 | chelo, FalleN, KSCERATO, kye, yuurih    |
|           22 |     2643 | 2024-04-09 | HEROIC             | L   | 0.492      | -            | -                | -                | -         |   -10.71 | arT, chelo, FalleN, KSCERATO, yuurih    |
|           21 |     2666 | 2024-04-08 | MOUZ               | L   | 0.486      | -            | -                | -                | -         |    -4.40 | arT, chelo, FalleN, KSCERATO, yuurih    |
|           20 |     2685 | 2024-04-07 | Lynn Vision        | W   | 0.483      | -            | -                | -                | -         |     0.28 | arT, chelo, FalleN, KSCERATO, yuurih    |
|           19 |     3003 | 2024-03-22 | Gaimin Gladiators  | L   | 0.374      | -            | -                | -                | -         |   -11.57 | arT, chelo, FalleN, KSCERATO, yuurih    |
|           18 |     3022 | 2024-03-21 | FaZe               | L   | 0.367      | -            | -                | -                | -         |    -5.75 | arT, chelo, FalleN, KSCERATO, yuurih    |
|           17 |     3033 | 2024-03-21 | G2                 | L   | 0.366      | -            | -                | -                | -         |    -2.70 | arT, chelo, FalleN, KSCERATO, yuurih    |
|           16 |     3055 | 2024-03-20 | SAW                | W   | 0.360      | -            | -                | -                | -         |     0.44 | arT, chelo, FalleN, KSCERATO, yuurih    |
|           15 |     3071 | 2024-03-19 | ENCE               | W   | 0.353      | -            | -                | -                | -         |     1.20 | arT, chelo, FalleN, KSCERATO, yuurih    |
|           14 |     3079 | 2024-03-18 | KOI                | W   | 0.347      | -            | -                | -                | -         |     0.26 | arT, chelo, FalleN, KSCERATO, yuurih    |
|           13 |     3093 | 2024-03-17 | Lynn Vision        | L   | 0.341      | -            | -                | -                | -         |   -10.58 | arT, chelo, FalleN, KSCERATO, yuurih    |
|           12 |     3108 | 2024-03-17 | Legacy             | L   | 0.340      | -            | -                | -                | -         |   -10.53 | arT, chelo, FalleN, KSCERATO, yuurih    |
|           11 |     3455 | 2024-03-03 | Complexity         | W   | 0.248      | -            | -                | -                | -         |     2.77 | arT, chelo, FalleN, KSCERATO, yuurih    |
|           10 |     3490 | 2024-03-02 | Liquid             | W   | 0.240      | -            | -                | -                | -         |     0.93 | arT, chelo, FalleN, KSCERATO, yuurih    |
|            9 |     3512 | 2024-03-01 | Nouns              | W   | 0.234      | -            | -                | -                | -         |     0.06 | arT, chelo, FalleN, KSCERATO, yuurih    |
|            8 |     3644 | 2024-02-23 | 9z                 | L   | 0.189      | -            | -                | -                | -         |    -4.34 | arT, chelo, FalleN, KSCERATO, yuurih    |
|            7 |     3657 | 2024-02-22 | 9z                 | W   | 0.182      | -            | -                | -                | -         |     1.56 | arT, chelo, FalleN, KSCERATO, yuurih    |
|            6 |     3665 | 2024-02-22 | Imperial           | W   | 0.181      | -            | -                | -                | -         |     0.47 | arT, chelo, FalleN, KSCERATO, yuurih    |
|            5 |     3946 | 2024-02-10 | Metizport          | L   | 0.100      | -            | -                | -                | -         |    -3.12 | arT, chelo, FalleN, KSCERATO, yuurih    |
|            4 |     3948 | 2024-02-10 | ex-Anonymo         | W   | 0.099      | -            | -                | -                | -         |     0.00 | arT, chelo, FalleN, KSCERATO, yuurih    |
|            3 |     3950 | 2024-02-10 | Metizport          | L   | 0.099      | -            | -                | -                | -         |    -3.09 | arT, chelo, FalleN, KSCERATO, yuurih    |
|            2 |     4104 | 2024-02-01 | Apeks              | L   | 0.041      | -            | -                | -                | -         |    -1.27 | arT, chelo, FalleN, KSCERATO, yuurih    |
|            1 |     4127 | 2024-01-31 | The MongolZ        | L   | 0.033      | -            | -                | -                | -         |    -0.36 | arT, chelo, FalleN, KSCERATO, yuurih    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($98,149.34)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.36) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $40,000.00     | $40,000.00      |
| 2024-06-09 |      0.900 | $28,000.00     | $25,192.91      |
| 2024-06-02 |      0.853 | $10,000.00     | $8,527.89       |
| 2024-05-26 |      0.806 | $2,000.00      | $1,612.79       |
| 2024-05-12 |      0.713 | $12,000.00     | $8,556.24       |
| 2024-04-20 |      0.568 | $5,000.00      | $2,839.83       |
| 2024-04-14 |      0.525 | $5,000.00      | $2,624.49       |
| 2024-03-31 |      0.434 | $20,000.00     | $8,676.06       |
| 2024-02-02 |      0.048 | $2,500.00      | $119.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
