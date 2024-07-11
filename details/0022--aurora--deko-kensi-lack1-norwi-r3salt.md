### Roster Details<br />
Team Name: Aurora<br />
Roster: deko, KENSI, Lack1, Norwi, r3salt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [22](../standings_global.md)<br />
Regional Rank: [15]( ../standings_europe.md)<br />
Final Rank Value:  1416.4<br />
<br />
Final Rank Value (1416.4) = Starting Rank Value (1685.2) + Head To Head Adjustments (-268.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.778[<sup>1</sup>](#table2)
- Bounty Collected: 0.530[<sup>2</sup>](#table1)
- Opponent Network: 0.239[<sup>2</sup>](#table1)
- LAN Wins: 0.890[<sup>2</sup>](#table1)

The average of these factors is 0.609<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1685.2
- 400 + ( ( 0.609 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1685.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           80 |      167 | 2024-06-16 | Complexity         | L   | 1.000      | -            | -                | -                | -         |    -5.02 | deko, KENSI, Lack1, Norwi, r3salt     |
|           79 |      235 | 2024-06-14 | The MongolZ        | W   | 1.000      | 0.500        | 1.000 (0.500)    | 0.692 (0.346)    | 1 (1.000) |    29.72 | deko, KENSI, Lack1, Norwi, r3salt     |
|           78 |      245 | 2024-06-14 | Falcons            | W   | 1.000      | 0.500        | 0.352 (0.176)    | 0.285 (0.142)    | 1 (1.000) |    23.00 | deko, KENSI, Lack1, Norwi, r3salt     |
|           77 |      344 | 2024-06-10 | 9 Pandas           | W   | 0.992      | -            | -                | -                | -         |     6.75 | deko, KENSI, Lack1, Norwi, r3salt     |
|           76 |      348 | 2024-06-10 | Monte              | W   | 0.992      | -            | -                | -                | -         |     8.22 | deko, KENSI, Lack1, Norwi, r3salt     |
|           75 |      352 | 2024-06-10 | SAW                | L   | 0.991      | -            | -                | -                | -         |   -21.10 | deko, KENSI, Lack1, Norwi, r3salt     |
|           74 |      380 | 2024-06-09 | Monte              | L   | 0.986      | -            | -                | -                | -         |   -22.91 | deko, KENSI, Lack1, Norwi, r3salt     |
|           73 |      387 | 2024-06-09 | PARIVISION         | W   | 0.986      | -            | -                | -                | -         |     4.47 | deko, KENSI, Lack1, Norwi, r3salt     |
|           72 |      396 | 2024-06-09 | RUSH B             | L   | 0.985      | -            | -                | -                | -         |   -29.11 | deko, KENSI, Lack1, Norwi, r3salt     |
|           71 |      402 | 2024-06-09 | 3DMAX              | L   | 0.985      | -            | -                | -                | -         |   -24.21 | deko, KENSI, Lack1, Norwi, r3salt     |
|           70 |      409 | 2024-06-09 | SINNERS            | L   | 0.985      | -            | -                | -                | -         |   -28.34 | deko, KENSI, Lack1, Norwi, r3salt     |
|           69 |      496 | 2024-06-07 | Sangal             | L   | 0.974      | -            | -                | -                | -         |   -25.41 | deko, KENSI, Lack1, Norwi, r3salt     |
|           68 |      513 | 2024-06-07 | Verdant            | W   | 0.972      | -            | -                | -                | -         |     0.89 | deko, KENSI, Lack1, Norwi, r3salt     |
|           67 |      515 | 2024-06-07 | PERA               | W   | 0.972      | -            | -                | -                | -         |     1.89 | deko, KENSI, Lack1, Norwi, r3salt     |
|           66 |      553 | 2024-06-06 | RUSH B             | W   | 0.967      | 0.500        | -                | 0.320 (0.155)    | -         |     1.01 | deko, KENSI, Lack1, Norwi, r3salt     |
|           65 |      618 | 2024-06-05 | PARIVISION         | W   | 0.960      | 0.500        | -                | 0.446 (0.214)    | -         |     2.26 | deko, KENSI, Lack1, Norwi, r3salt     |
|           64 |      669 | 2024-06-04 | 3DMAX              | L   | 0.954      | -            | -                | -                | -         |   -24.91 | deko, KENSI, Lack1, Norwi, r3salt     |
|           63 |      736 | 2024-06-02 | BLEED              | L   | 0.937      | -            | -                | -                | -         |   -23.32 | deko, KENSI, Lack1, Norwi, r3salt     |
|           62 |      761 | 2024-06-01 | Lynn Vision        | W   | 0.932      | 0.500        | 0.127 (0.059)    | -                | 1 (0.932) |     2.81 | deko, KENSI, Lack1, Norwi, r3salt     |
|           61 |      770 | 2024-06-01 | Chinggis Warriors  | W   | 0.931      | -            | -                | -                | 1 (0.931) |     0.37 | deko, KENSI, Lack1, Norwi, r3salt     |
|           60 |      845 | 2024-05-29 | The MongolZ        | L   | 0.912      | -            | -                | -                | -         |    -3.41 | deko, KENSI, Lack1, Norwi, r3salt     |
|           59 |      868 | 2024-05-28 | Lynn Vision        | W   | 0.904      | 0.500        | 0.127 (0.058)    | -                | 1 (0.904) |     2.46 | deko, KENSI, Lack1, Norwi, r3salt     |
|           58 |     1039 | 2024-05-21 | Astralis           | L   | 0.859      | -            | -                | -                | -         |    -2.98 | deko, KENSI, Lack1, Norwi, r3salt     |
|           57 |     1169 | 2024-05-17 | SAW                | W   | 0.832      | 0.769        | 0.147 (0.094)    | 0.526 (0.336)    | -         |     5.69 | deko, KENSI, Lack1, Norwi, r3salt     |
|           56 |     1184 | 2024-05-16 | PARIVISION         | W   | 0.828      | 0.769        | -                | 0.446 (0.284)    | -         |     1.36 | deko, KENSI, Lack1, Norwi, r3salt     |
|           55 |     1193 | 2024-05-16 | MIBR               | L   | 0.827      | -            | -                | -                | -         |   -11.12 | deko, KENSI, Lack1, Norwi, r3salt     |
|           54 |     1206 | 2024-05-16 | SAW                | L   | 0.825      | -            | -                | -                | -         |   -21.01 | deko, KENSI, Lack1, Norwi, r3salt     |
|           53 |     1257 | 2024-05-15 | Spirit             | L   | 0.818      | -            | -                | -                | -         |    -2.08 | deko, KENSI, Lack1, Norwi, r3salt     |
|           52 |     1400 | 2024-05-10 | MOUZ NXT           | L   | 0.787      | -            | -                | -                | -         |   -23.28 | deko, KENSI, Lack1, Norwi, r3salt     |
|           51 |     1658 | 2024-04-28 | MIBR               | L   | 0.705      | -            | -                | -                | -         |   -11.38 | deko, KENSI, Lack1, Norwi, r3salt     |
|           50 |     1659 | 2024-04-28 | Rebels             | W   | 0.704      | 0.500        | -                | 0.551 (0.194)    | 1 (0.704) |     1.19 | deko, KENSI, Lack1, Norwi, r3salt     |
|           49 |     1685 | 2024-04-27 | Party Astronauts   | W   | 0.698      | 0.500        | -                | 0.589 (0.205)    | 1 (0.698) |     0.78 | deko, KENSI, Lack1, Norwi, r3salt     |
|           48 |     1709 | 2024-04-25 | Apeks              | L   | 0.690      | -            | -                | -                | -         |   -20.60 | deko, KENSI, Lack1, Norwi, r3salt     |
|           47 |     1713 | 2024-04-25 | Party Astronauts   | W   | 0.689      | 0.500        | -                | 0.589 (0.203)    | 1 (0.689) |     0.69 | deko, KENSI, Lack1, Norwi, r3salt     |
|           46 |     1919 | 2024-04-18 | RUBY               | L   | 0.640      | -            | -                | -                | -         |   -19.60 | deko, KENSI, Lack1, Norwi, r3salt     |
|           45 |     2029 | 2024-04-14 | OG                 | W   | 0.613      | 0.684        | 0.215 (0.090)    | -                | -         |     1.69 | deko, KENSI, Lack1, Norwi, r3salt     |
|           44 |     2043 | 2024-04-13 | BetBoom            | W   | 0.606      | 0.684        | 0.406 (0.168)    | 0.745 (0.309)    | -         |     8.66 | deko, KENSI, Lack1, Norwi, r3salt     |
|           43 |     2054 | 2024-04-12 | AMKAL              | W   | 0.601      | -            | -                | -                | -         |     1.14 | deko, KENSI, Lack1, Norwi, r3salt     |
|           42 |     2077 | 2024-04-11 | BetBoom            | W   | 0.594      | 0.143        | 0.406 (0.034)    | -                | -         |     8.97 | deko, KENSI, Lack1, Norwi, r3salt     |
|           41 |     2084 | 2024-04-11 | Apeks              | W   | 0.593      | -            | -                | -                | -         |     0.84 | deko, KENSI, Lack1, Norwi, r3salt     |
|           40 |     2089 | 2024-04-11 | FORZE              | W   | 0.592      | 0.684        | 0.095 (0.039)    | -                | -         |     0.72 | deko, KENSI, Lack1, Norwi, r3salt     |
|           39 |     2118 | 2024-04-10 | PARIVISION         | W   | 0.587      | -            | -                | -                | -         |     0.54 | deko, KENSI, Lack1, Norwi, r3salt     |
|           38 |     2131 | 2024-04-10 | BetBoom            | L   | 0.586      | -            | -                | -                | -         |    -9.67 | deko, KENSI, Lack1, Norwi, r3salt     |
|           37 |     2178 | 2024-04-09 | KOI                | L   | 0.581      | -            | -                | -                | -         |   -17.12 | deko, KENSI, Lack1, Norwi, r3salt     |
|           36 |     2188 | 2024-04-09 | 1WIN               | W   | 0.579      | -            | -                | -                | -         |     0.44 | deko, KENSI, Lack1, Norwi, r3salt     |
|           35 |     2195 | 2024-04-09 | 9 Pandas           | W   | 0.578      | -            | -                | -                | -         |     0.86 | deko, KENSI, Lack1, Norwi, r3salt     |
|           34 |     2206 | 2024-04-08 | Metizport          | W   | 0.574      | -            | -                | -                | -         |     0.59 | deko, KENSI, Lack1, Norwi, r3salt     |
|           33 |     2210 | 2024-04-08 | OG                 | W   | 0.573      | 0.684        | 0.215 (0.084)    | -                | -         |     1.12 | deko, KENSI, Lack1, Norwi, r3salt     |
|           32 |     2223 | 2024-04-08 | 1WIN               | L   | 0.572      | -            | -                | -                | -         |   -17.66 | deko, KENSI, Lack1, Norwi, r3salt     |
|           31 |     2312 | 2024-04-04 | Ninjas in Pyjamas  | W   | 0.547      | -            | -                | -                | -         |    11.54 | deko, KENSI, Lack1, Norwi, r3salt     |
|           30 |     2353 | 2024-04-03 | Ninjas in Pyjamas  | W   | 0.540      | -            | -                | -                | -         |    11.88 | deko, KENSI, Lack1, Norwi, r3salt     |
|           29 |     2391 | 2024-04-02 | Apeks              | W   | 0.534      | -            | -                | -                | -         |     0.64 | deko, KENSI, Lack1, Norwi, r3salt     |
|           28 |     2399 | 2024-04-02 | Metizport          | W   | 0.533      | -            | -                | -                | -         |     0.44 | deko, KENSI, Lack1, Norwi, r3salt     |
|           27 |     2411 | 2024-04-01 | SINNERS            | L   | 0.527      | -            | -                | -                | -         |   -15.88 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           26 |     2451 | 2024-03-28 | brazylijski luz    | W   | 0.500      | -            | -                | -                | -         |     0.15 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           25 |     2482 | 2024-03-27 | Metizport          | W   | 0.494      | -            | -                | -                | -         |     0.39 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           24 |     2489 | 2024-03-27 | AURA               | W   | 0.494      | -            | -                | -                | -         |     0.03 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           23 |     2523 | 2024-03-25 | Rebels             | W   | 0.480      | -            | -                | -                | -         |     0.58 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           22 |     2539 | 2024-03-23 | ALTERNATE aTTaX    | W   | 0.467      | -            | -                | -                | -         |     0.44 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           21 |     2554 | 2024-03-22 | ex-Sprout          | W   | 0.460      | -            | -                | -                | -         |     0.03 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           20 |     2677 | 2024-03-16 | Gods Reign         | W   | 0.419      | -            | -                | -                | 1 (0.419) |     0.15 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           19 |     2699 | 2024-03-15 | Gods Reign         | W   | 0.411      | -            | -                | -                | 1 (0.411) |     0.14 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           18 |     2733 | 2024-03-14 | Bad News Kangaroos | W   | 0.404      | -            | -                | -                | -         |     0.14 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           17 |     2991 | 2024-03-04 | Young Ninjas       | L   | 0.340      | -            | -                | -                | -         |   -10.60 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           16 |     3036 | 2024-03-02 | Rebels             | W   | 0.327      | -            | -                | -                | -         |     0.39 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           15 |     3055 | 2024-03-01 | FORZE              | W   | 0.321      | -            | -                | -                | -         |     0.24 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           14 |     3063 | 2024-03-01 | 9 Pandas           | W   | 0.319      | -            | -                | -                | -         |     0.47 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           13 |     3068 | 2024-02-29 | KOI                | W   | 0.314      | -            | -                | -                | -         |     0.68 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           12 |     3073 | 2024-02-29 | Spirit Academy     | W   | 0.313      | -            | -                | -                | -         |     0.02 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           11 |     3078 | 2024-02-29 | HAVU               | W   | 0.312      | -            | -                | -                | -         |     0.06 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           10 |     3081 | 2024-02-28 | kONO               | W   | 0.308      | -            | -                | -                | -         |     0.11 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            9 |     3088 | 2024-02-28 | FORZE              | L   | 0.306      | -            | -                | -                | -         |    -9.45 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            8 |     3308 | 2024-02-18 | Monte              | L   | 0.241      | -            | -                | -                | -         |    -6.80 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            7 |     3318 | 2024-02-18 | B8                 | W   | 0.239      | -            | -                | -                | -         |     0.41 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            6 |     3335 | 2024-02-17 | kONO               | W   | 0.233      | -            | -                | -                | -         |     0.07 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            5 |     3339 | 2024-02-17 | Monte              | L   | 0.233      | -            | -                | -                | -         |    -6.62 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            4 |     3342 | 2024-02-17 | kONO               | W   | 0.232      | -            | -                | -                | -         |     0.07 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            3 |     3941 | 2024-01-19 | FORZE              | L   | 0.041      | -            | -                | -                | -         |    -1.29 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            2 |     4004 | 2024-01-18 | Enterprise         | L   | 0.034      | -            | -                | -                | -         |    -1.04 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            1 |     4015 | 2024-01-18 | IKLA               | L   | 0.033      | -            | -                | -                | -         |    -1.04 | deko, KENSI, Lack1, Norwi, SELLTER    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($133,817.79)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.52) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-09 |      0.987 | $8,500.00      | $8,391.33       |
| 2024-06-02 |      0.939 | $15,000.00     | $14,085.23      |
| 2024-05-23 |      0.873 | $12,500.00     | $10,917.09      |
| 2024-04-28 |      0.705 | $20,000.00     | $14,092.88      |
| 2024-04-14 |      0.613 | $105,000.00    | $64,399.78      |
| 2024-03-16 |      0.419 | $28,500.00     | $11,931.48      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
