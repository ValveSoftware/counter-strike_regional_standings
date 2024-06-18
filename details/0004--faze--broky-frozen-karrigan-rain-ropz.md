### Roster Details<br />
Team Name: FaZe<br />
Roster: broky, frozen, karrigan, rain, ropz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [4](../standings_global.md)<br />
Regional Rank: [4]( ../standings_europe.md)<br />
Final Rank Value:  1915.8<br />
<br />
Final Rank Value (1915.8) = Starting Rank Value (1963.2) + Head To Head Adjustments (-47.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.752[<sup>2</sup>](#table1)
- Opponent Network: 0.397[<sup>2</sup>](#table1)
- LAN Wins: 0.928[<sup>2</sup>](#table1)

The average of these factors is 0.769<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1963.2
- 400 + ( ( 0.769 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1963.2


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
|           43 |       91 | 2024-06-14 | Vitality      | L   | 1.000      | -            | -                | -                | -         |   -13.99 | broky, frozen, karrigan, rain, ropz |
|           42 |      132 | 2024-06-13 | Natus Vincere | L   | 1.000      | -            | -                | -                | -         |   -17.07 | broky, frozen, karrigan, rain, ropz |
|           41 |      164 | 2024-06-12 | SAW           | W   | 1.000      | 0.729        | -                | 0.571 (0.416)    | 1 (1.000) |     0.66 | broky, frozen, karrigan, rain, ropz |
|           40 |      641 | 2024-05-31 | G2            | L   | 1.000      | -            | -                | -                | -         |   -18.14 | broky, frozen, karrigan, rain, ropz |
|           39 |      697 | 2024-05-29 | Spirit        | L   | 1.000      | -            | -                | -                | -         |   -13.82 | broky, frozen, karrigan, rain, ropz |
|           38 |      718 | 2024-05-28 | Virtus.pro    | W   | 1.000      | -            | -                | -                | 1 (1.000) |     6.66 | broky, frozen, karrigan, rain, ropz |
|           37 |      743 | 2024-05-27 | M80           | W   | 1.000      | 0.624        | -                | 0.666 (0.416)    | 1 (1.000) |     0.58 | broky, frozen, karrigan, rain, ropz |
|           36 |     1268 | 2024-05-10 | Vitality      | L   | 0.943      | -            | -                | -                | -         |   -15.14 | broky, frozen, karrigan, rain, ropz |
|           35 |     1310 | 2024-05-08 | Natus Vincere | W   | 0.930      | 0.889        | 1.000 (0.826)    | -                | 1 (0.930) |    12.48 | broky, frozen, karrigan, rain, ropz |
|           34 |     1327 | 2024-05-07 | Monte         | W   | 0.923      | 0.889        | -                | 0.674 (0.553)    | 1 (0.923) |     0.59 | broky, frozen, karrigan, rain, ropz |
|           33 |     1559 | 2024-04-26 | Eternal Fire  | W   | 0.849      | 0.889        | 1.000 (0.755)    | 0.485 (0.366)    | 1 (0.849) |     7.64 | broky, frozen, karrigan, rain, ropz |
|           32 |     1588 | 2024-04-25 | Virtus.pro    | W   | 0.843      | 0.889        | 0.345 (0.259)    | 0.427 (0.320)    | 1 (0.843) |     5.81 | broky, frozen, karrigan, rain, ropz |
|           31 |     1607 | 2024-04-24 | Astralis      | L   | 0.836      | -            | -                | -                | -         |   -15.65 | broky, frozen, karrigan, rain, ropz |
|           30 |     1625 | 2024-04-23 | Imperial      | W   | 0.829      | 0.889        | 0.406 (0.299)    | 0.694 (0.512)    | 1 (0.829) |     1.93 | broky, frozen, karrigan, rain, ropz |
|           29 |     1900 | 2024-04-14 | MOUZ          | W   | 0.767      | 0.624        | 1.000 (0.479)    | -                | 1 (0.767) |    13.34 | broky, frozen, karrigan, rain, ropz |
|           28 |     1914 | 2024-04-13 | Astralis      | W   | 0.761      | -            | -                | -                | 1 (0.761) |     9.87 | broky, frozen, karrigan, rain, ropz |
|           27 |     1927 | 2024-04-12 | Liquid        | W   | 0.754      | -            | -                | -                | -         |     3.75 | broky, frozen, karrigan, rain, ropz |
|           26 |     2002 | 2024-04-10 | FlyQuest      | W   | 0.741      | -            | -                | -                | -         |     1.02 | broky, frozen, karrigan, rain, ropz |
|           25 |     2017 | 2024-04-10 | Cloud9        | W   | 0.739      | -            | -                | -                | -         |     1.03 | broky, frozen, karrigan, rain, ropz |
|           24 |     2063 | 2024-04-09 | Astralis      | L   | 0.734      | -            | -                | -                | -         |   -13.98 | broky, frozen, karrigan, rain, ropz |
|           23 |     2094 | 2024-04-08 | Nemiga        | W   | 0.727      | 0.624        | -                | 0.694 (0.315)    | -         |     0.50 | broky, frozen, karrigan, rain, ropz |
|           22 |     2287 | 2024-03-31 | Natus Vincere | L   | 0.676      | -            | -                | -                | -         |   -11.33 | broky, frozen, karrigan, rain, ropz |
|           21 |     2294 | 2024-03-30 | Vitality      | W   | 0.669      | 1.000        | 0.738 (0.494)    | -                | -         |    10.45 | broky, frozen, karrigan, rain, ropz |
|           20 |     2312 | 2024-03-28 | Spirit        | W   | 0.657      | 1.000        | 1.000 (0.657)    | 0.498 (0.327)    | -         |    11.96 | broky, frozen, karrigan, rain, ropz |
|           19 |     2399 | 2024-03-24 | Complexity    | W   | 0.628      | 1.000        | 0.426 (0.267)    | -                | -         |     5.50 | broky, frozen, karrigan, rain, ropz |
|           18 |     2412 | 2024-03-23 | Imperial      | W   | 0.621      | 1.000        | -                | 0.694 (0.431)    | -         |     1.80 | broky, frozen, karrigan, rain, ropz |
|           17 |     2426 | 2024-03-22 | Eternal Fire  | L   | 0.614      | -            | -                | -                | -         |   -13.00 | broky, frozen, karrigan, rain, ropz |
|           16 |     2437 | 2024-03-21 | FURIA         | W   | 0.610      | 1.000        | -                | 0.521 (0.318)    | -         |     2.66 | broky, frozen, karrigan, rain, ropz |
|           15 |     2449 | 2024-03-21 | HEROIC        | L   | 0.608      | -            | -                | -                | -         |   -13.99 | broky, frozen, karrigan, rain, ropz |
|           14 |     3237 | 2024-02-16 | Eternal Fire  | W   | 0.382      | -            | -                | -                | -         |     3.50 | broky, frozen, karrigan, rain, ropz |
|           13 |     3264 | 2024-02-15 | G2            | L   | 0.375      | -            | -                | -                | -         |    -6.47 | broky, frozen, karrigan, rain, ropz |
|           12 |     3298 | 2024-02-14 | Falcons       | W   | 0.369      | -            | -                | -                | -         |     1.51 | broky, frozen, karrigan, rain, ropz |
|           11 |     3313 | 2024-02-14 | 9 Pandas      | W   | 0.367      | -            | -                | -                | -         |     0.12 | broky, frozen, karrigan, rain, ropz |
|           10 |     3350 | 2024-02-11 | Spirit        | L   | 0.349      | -            | -                | -                | -         |    -5.12 | broky, frozen, karrigan, rain, ropz |
|            9 |     3362 | 2024-02-10 | MOUZ          | W   | 0.342      | 1.000        | 1.000 (0.342)    | -                | -         |     5.81 | broky, frozen, karrigan, rain, ropz |
|            8 |     3376 | 2024-02-09 | G2            | W   | 0.335      | -            | -                | -                | -         |     4.83 | broky, frozen, karrigan, rain, ropz |
|            7 |     3407 | 2024-02-06 | Spirit        | L   | 0.315      | -            | -                | -                | -         |    -4.63 | broky, frozen, karrigan, rain, ropz |
|            6 |     3426 | 2024-02-04 | Eternal Fire  | W   | 0.304      | 1.000        | 1.000 (0.304)    | -                | -         |     2.85 | broky, frozen, karrigan, rain, ropz |
|            5 |     3466 | 2024-02-03 | Rebels        | W   | 0.295      | -            | -                | -                | -         |     0.07 | broky, frozen, karrigan, rain, ropz |
|            4 |     3597 | 2024-01-27 | Liquid        | W   | 0.249      | -            | -                | -                | -         |     1.23 | broky, frozen, karrigan, rain, ropz |
|            3 |     3611 | 2024-01-26 | GamerLegion   | W   | 0.243      | -            | -                | -                | -         |     0.05 | broky, frozen, karrigan, rain, ropz |
|            2 |     3636 | 2024-01-25 | Spirit        | W   | 0.235      | -            | -                | -                | -         |     3.94 | broky, frozen, karrigan, rain, ropz |
|            1 |     3657 | 2024-01-24 | GamerLegion   | L   | 0.228      | -            | -                | -                | -         |    -7.13 | broky, frozen, karrigan, rain, ropz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($320,909.60)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-06-02 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-05-12 |      0.956 | $32,000.00     | $30,576.91      |
| 2024-04-14 |      0.767 | $100,000.00    | $76,740.57      |
| 2024-03-31 |      0.676 | $170,000.00    | $114,972.97     |
| 2024-02-11 |      0.349 | $180,000.00    | $62,859.38      |
| 2024-01-28 |      0.256 | $22,500.00     | $5,759.78       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
