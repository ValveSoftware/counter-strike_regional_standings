### Roster Details<br />
Team Name: FaZe<br />
Roster: broky, frozen, karrigan, rain, ropz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [6](../standings_global.md)<br />
Regional Rank: [6]( ../standings_europe.md)<br />
Final Rank Value:  1884.0<br />
<br />
Final Rank Value (1884.0) = Starting Rank Value (1906.8) + Head To Head Adjustments (-22.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.957[<sup>1</sup>](#table2)
- Bounty Collected: 0.681[<sup>2</sup>](#table1)
- Opponent Network: 0.279[<sup>2</sup>](#table1)
- LAN Wins: 0.890[<sup>2</sup>](#table1)

The average of these factors is 0.702<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1906.8
- 400 + ( ( 0.702 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1906.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |        8 | 2024-07-17 | FlyQuest      | W   | 1.000      | 1.000        | -                | 0.388 (0.388)    | 1 (1.000) |     1.40 | broky, frozen, karrigan, rain, ropz |
|           43 |      391 | 2024-06-14 | Vitality      | L   | 0.980      | -            | -                | -                | -         |   -11.50 | broky, frozen, karrigan, rain, ropz |
|           42 |      432 | 2024-06-13 | Natus Vincere | L   | 0.973      | -            | -                | -                | -         |   -16.35 | broky, frozen, karrigan, rain, ropz |
|           41 |      464 | 2024-06-12 | SAW           | W   | 0.966      | 0.729        | -                | 0.544 (0.383)    | 1 (0.966) |     0.62 | broky, frozen, karrigan, rain, ropz |
|           40 |      939 | 2024-05-31 | G2            | L   | 0.888      | -            | -                | -                | -         |   -13.31 | broky, frozen, karrigan, rain, ropz |
|           39 |      995 | 2024-05-29 | Spirit        | L   | 0.875      | -            | -                | -                | -         |   -10.86 | broky, frozen, karrigan, rain, ropz |
|           38 |     1016 | 2024-05-28 | Virtus.pro    | W   | 0.869      | 0.624        | 0.349 (0.189)    | -                | 1 (0.869) |     6.58 | broky, frozen, karrigan, rain, ropz |
|           37 |     1041 | 2024-05-27 | M80           | W   | 0.861      | 0.624        | -                | 0.621 (0.334)    | 1 (0.861) |     0.74 | broky, frozen, karrigan, rain, ropz |
|           36 |     1566 | 2024-05-10 | Vitality      | L   | 0.747      | -            | -                | -                | -         |    -9.81 | broky, frozen, karrigan, rain, ropz |
|           35 |     1608 | 2024-05-08 | Natus Vincere | W   | 0.734      | 0.889        | 1.000 (0.653)    | -                | 1 (0.734) |    10.28 | broky, frozen, karrigan, rain, ropz |
|           34 |     1625 | 2024-05-07 | Monte         | W   | 0.728      | -            | -                | -                | 1 (0.728) |     0.29 | broky, frozen, karrigan, rain, ropz |
|           33 |     1857 | 2024-04-26 | Eternal Fire  | W   | 0.654      | 0.889        | 1.000 (0.581)    | 0.401 (0.233)    | 1 (0.654) |     5.34 | broky, frozen, karrigan, rain, ropz |
|           32 |     1886 | 2024-04-25 | Virtus.pro    | W   | 0.647      | 0.889        | 0.349 (0.201)    | 0.367 (0.211)    | 1 (0.647) |     5.01 | broky, frozen, karrigan, rain, ropz |
|           31 |     1905 | 2024-04-24 | Astralis      | L   | 0.641      | -            | -                | -                | -         |   -10.92 | broky, frozen, karrigan, rain, ropz |
|           30 |     1923 | 2024-04-23 | Imperial      | W   | 0.634      | 0.889        | 0.386 (0.218)    | 0.607 (0.342)    | 1 (0.634) |     1.58 | broky, frozen, karrigan, rain, ropz |
|           29 |     2198 | 2024-04-14 | MOUZ          | W   | 0.572      | 0.624        | 1.000 (0.357)    | -                | 1 (0.572) |    11.22 | broky, frozen, karrigan, rain, ropz |
|           28 |     2212 | 2024-04-13 | Astralis      | W   | 0.566      | 0.624        | 0.549 (0.194)    | -                | -         |     8.48 | broky, frozen, karrigan, rain, ropz |
|           27 |     2225 | 2024-04-12 | Liquid        | W   | 0.559      | -            | -                | -                | -         |     2.50 | broky, frozen, karrigan, rain, ropz |
|           26 |     2300 | 2024-04-10 | FlyQuest      | W   | 0.546      | -            | -                | -                | -         |     0.69 | broky, frozen, karrigan, rain, ropz |
|           25 |     2315 | 2024-04-10 | Cloud9        | W   | 0.544      | -            | -                | -                | -         |     0.43 | broky, frozen, karrigan, rain, ropz |
|           24 |     2361 | 2024-04-09 | Astralis      | L   | 0.538      | -            | -                | -                | -         |    -9.13 | broky, frozen, karrigan, rain, ropz |
|           23 |     2392 | 2024-04-08 | Nemiga        | W   | 0.531      | 0.624        | -                | 0.725 (0.240)    | -         |     0.46 | broky, frozen, karrigan, rain, ropz |
|           22 |     2585 | 2024-03-31 | Natus Vincere | L   | 0.481      | -            | -                | -                | -         |    -7.92 | broky, frozen, karrigan, rain, ropz |
|           21 |     2591 | 2024-03-30 | Vitality      | W   | 0.474      | 1.000        | 0.733 (0.347)    | -                | -         |     8.99 | broky, frozen, karrigan, rain, ropz |
|           20 |     2609 | 2024-03-28 | Spirit        | W   | 0.462      | 1.000        | 1.000 (0.462)    | 0.434 (0.200)    | -         |     9.23 | broky, frozen, karrigan, rain, ropz |
|           19 |     2696 | 2024-03-24 | Complexity    | W   | 0.432      | 1.000        | 0.445 (0.192)    | -                | -         |     5.09 | broky, frozen, karrigan, rain, ropz |
|           18 |     2709 | 2024-03-23 | Imperial      | W   | 0.426      | 1.000        | -                | 0.607 (0.259)    | -         |     1.21 | broky, frozen, karrigan, rain, ropz |
|           17 |     2723 | 2024-03-22 | Eternal Fire  | L   | 0.419      | -            | -                | -                | -         |    -9.44 | broky, frozen, karrigan, rain, ropz |
|           16 |     2734 | 2024-03-21 | FURIA         | W   | 0.415      | 1.000        | -                | 0.483 (0.200)    | -         |     2.40 | broky, frozen, karrigan, rain, ropz |
|           15 |     2746 | 2024-03-21 | HEROIC        | L   | 0.413      | -            | -                | -                | -         |    -9.14 | broky, frozen, karrigan, rain, ropz |
|           14 |     3534 | 2024-02-16 | Eternal Fire  | W   | 0.186      | -            | -                | -                | -         |     1.50 | broky, frozen, karrigan, rain, ropz |
|           13 |     3561 | 2024-02-15 | G2            | L   | 0.179      | -            | -                | -                | -         |    -2.32 | broky, frozen, karrigan, rain, ropz |
|           12 |     3595 | 2024-02-14 | Falcons       | W   | 0.174      | -            | -                | -                | -         |     0.70 | broky, frozen, karrigan, rain, ropz |
|           11 |     3610 | 2024-02-14 | 9 Pandas      | W   | 0.172      | -            | -                | -                | -         |     0.06 | broky, frozen, karrigan, rain, ropz |
|           10 |     3647 | 2024-02-11 | Spirit        | L   | 0.154      | -            | -                | -                | -         |    -1.87 | broky, frozen, karrigan, rain, ropz |
|            9 |     3659 | 2024-02-10 | MOUZ          | W   | 0.147      | -            | -                | -                | -         |     2.88 | broky, frozen, karrigan, rain, ropz |
|            8 |     3673 | 2024-02-09 | G2            | W   | 0.140      | -            | -                | -                | -         |     2.63 | broky, frozen, karrigan, rain, ropz |
|            7 |     3704 | 2024-02-06 | Spirit        | L   | 0.120      | -            | -                | -                | -         |    -1.45 | broky, frozen, karrigan, rain, ropz |
|            6 |     3723 | 2024-02-04 | Eternal Fire  | W   | 0.108      | -            | -                | -                | -         |     0.89 | broky, frozen, karrigan, rain, ropz |
|            5 |     3763 | 2024-02-03 | Rebels        | W   | 0.100      | -            | -                | -                | -         |     0.03 | broky, frozen, karrigan, rain, ropz |
|            4 |     3894 | 2024-01-27 | Liquid        | W   | 0.054      | -            | -                | -                | -         |     0.23 | broky, frozen, karrigan, rain, ropz |
|            3 |     3908 | 2024-01-26 | GamerLegion   | W   | 0.047      | -            | -                | -                | -         |     0.01 | broky, frozen, karrigan, rain, ropz |
|            2 |     3933 | 2024-01-25 | Spirit        | W   | 0.039      | -            | -                | -                | -         |     0.76 | broky, frozen, karrigan, rain, ropz |
|            1 |     3954 | 2024-01-24 | GamerLegion   | L   | 0.032      | -            | -                | -                | -         |    -1.01 | broky, frozen, karrigan, rain, ropz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($221,275.67)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.90) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.994 | $20,000.00     | $19,872.58      |
| 2024-06-02 |      0.901 | $10,000.00     | $9,013.93       |
| 2024-05-12 |      0.760 | $32,000.00     | $24,327.85      |
| 2024-04-14 |      0.572 | $100,000.00    | $57,212.24      |
| 2024-03-31 |      0.481 | $170,000.00    | $81,774.80      |
| 2024-02-11 |      0.154 | $180,000.00    | $27,708.38      |
| 2024-01-28 |      0.061 | $22,500.00     | $1,365.90       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
