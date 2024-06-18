### Roster Details<br />
Team Name: G2<br />
Roster: HooXi, huNter-, m0NESY, nexa, NiKo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [6](../standings_global.md)<br />
Regional Rank: [6]( ../standings_europe.md)<br />
Final Rank Value:  1905.2<br />
<br />
Final Rank Value (1905.2) = Starting Rank Value (1939.2) + Head To Head Adjustments (-34.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.891[<sup>1</sup>](#table2)
- Bounty Collected: 0.715[<sup>2</sup>](#table1)
- Opponent Network: 0.427[<sup>2</sup>](#table1)
- LAN Wins: 0.997[<sup>2</sup>](#table1)

The average of these factors is 0.758<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1939.2
- 400 + ( ( 0.758 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1939.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |      126 | 2024-06-13 | Vitality          | L   | 1.000      | -            | -                | -                | -         |   -14.14 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           42 |      147 | 2024-06-12 | Spirit            | L   | 1.000      | -            | -                | -                | -         |   -12.05 | HooXi, huNter-, nexa, NiKo, TaZ       |
|           41 |      579 | 2024-06-02 | Vitality          | W   | 1.000      | 0.624        | 0.738 (0.460)    | -                | 1 (1.000) |    18.09 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           40 |      605 | 2024-06-01 | 9z                | W   | 1.000      | 0.624        | 0.525 (0.328)    | 0.749 (0.468)    | 1 (1.000) |     3.45 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           39 |      641 | 2024-05-31 | FaZe              | W   | 1.000      | 0.624        | 1.000 (0.624)    | 0.540 (0.337)    | 1 (1.000) |    18.14 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           38 |      691 | 2024-05-29 | Liquid            | W   | 1.000      | 0.624        | 0.498 (0.311)    | 0.629 (0.393)    | 1 (1.000) |     7.28 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           37 |      715 | 2024-05-28 | MOUZ              | W   | 1.000      | 0.624        | 1.000 (0.624)    | -                | 1 (1.000) |    21.84 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           36 |      739 | 2024-05-27 | Vitality          | L   | 1.000      | -            | -                | -                | -         |   -10.79 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           35 |      750 | 2024-05-27 | Falcons           | W   | 1.000      | 0.624        | 0.381 (0.238)    | -                | 1 (1.000) |     5.42 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           34 |     1289 | 2024-05-09 | MOUZ              | L   | 0.936      | -            | -                | -                | -         |    -9.63 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           33 |     1315 | 2024-05-08 | 3DMAX             | W   | 0.929      | 0.889        | -                | 1.000 (0.826)    | 1 (0.929) |     1.01 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           32 |     1334 | 2024-05-07 | BIG               | W   | 0.922      | 0.889        | -                | 0.433 (0.355)    | 1 (0.922) |     2.10 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           31 |     1510 | 2024-04-28 | M80               | W   | 0.863      | 0.889        | -                | 0.666 (0.511)    | 1 (0.863) |     0.80 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           30 |     1544 | 2024-04-27 | Falcons           | W   | 0.855      | 0.889        | 0.381 (0.289)    | -                | 1 (0.855) |     4.26 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           29 |     1565 | 2024-04-26 | M80               | L   | 0.848      | -            | -                | -                | -         |   -26.03 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           28 |     1597 | 2024-04-25 | The MongolZ       | L   | 0.841      | -            | -                | -                | -         |   -14.76 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           27 |     1617 | 2024-04-24 | TYLOO             | W   | 0.834      | -            | -                | -                | -         |     0.06 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           26 |     1917 | 2024-04-13 | MOUZ              | L   | 0.760      | -            | -                | -                | -         |    -9.15 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           25 |     1930 | 2024-04-12 | Virtus.pro        | W   | 0.753      | -            | -                | -                | -         |     7.04 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           24 |     2000 | 2024-04-10 | HEROIC            | W   | 0.741      | -            | -                | -                | -         |     6.96 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           23 |     2059 | 2024-04-09 | Lynn Vision       | W   | 0.734      | -            | -                | -                | -         |     0.41 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           22 |     2090 | 2024-04-08 | Liquid            | L   | 0.727      | -            | -                | -                | -         |   -18.89 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           21 |     2100 | 2024-04-07 | 9z                | W   | 0.725      | 0.624        | 0.525 (0.238)    | 0.749 (0.339)    | -         |     3.77 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           20 |     2293 | 2024-03-30 | Natus Vincere     | L   | 0.670      | -            | -                | -                | -         |   -10.41 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           19 |     2300 | 2024-03-29 | MOUZ              | W   | 0.663      | 1.000        | 1.000 (0.663)    | 0.494 (0.327)    | -         |    12.73 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           18 |     2397 | 2024-03-24 | Virtus.pro        | W   | 0.629      | 1.000        | 0.345 (0.217)    | -                | -         |     6.20 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           17 |     2409 | 2024-03-23 | Gaimin Gladiators | W   | 0.622      | 1.000        | -                | 0.632 (0.393)    | -         |     0.49 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           16 |     2428 | 2024-03-22 | Cloud9            | L   | 0.614      | -            | -                | -                | -         |   -18.49 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           15 |     2438 | 2024-03-21 | Natus Vincere     | L   | 0.610      | -            | -                | -                | -         |    -9.57 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           14 |     2448 | 2024-03-21 | FURIA             | W   | 0.608      | 1.000        | -                | 0.521 (0.317)    | -         |     2.87 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           13 |     3264 | 2024-02-15 | FaZe              | W   | 0.375      | -            | -                | -                | -         |     6.47 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           12 |     3295 | 2024-02-14 | Eternal Fire      | W   | 0.369      | -            | -                | -                | -         |     3.88 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           11 |     3311 | 2024-02-14 | Into the Breach   | W   | 0.367      | -            | -                | -                | -         |     0.01 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           10 |     3376 | 2024-02-09 | FaZe              | L   | 0.335      | -            | -                | -                | -         |    -4.83 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            9 |     3404 | 2024-02-06 | HEROIC            | W   | 0.316      | -            | -                | -                | -         |     3.05 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            8 |     3410 | 2024-02-06 | Monte             | W   | 0.315      | -            | -                | -                | -         |     0.31 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            7 |     3416 | 2024-02-05 | ENCE              | L   | 0.309      | -            | -                | -                | -         |    -8.74 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            6 |     3469 | 2024-02-03 | HEROIC            | W   | 0.295      | -            | -                | -                | -         |     2.74 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            5 |     3583 | 2024-01-28 | Liquid            | W   | 0.256      | -            | -                | -                | -         |     1.43 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            4 |     3600 | 2024-01-27 | Natus Vincere     | L   | 0.248      | -            | -                | -                | -         |    -3.89 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            3 |     3616 | 2024-01-26 | Ninjas in Pyjamas | W   | 0.242      | -            | -                | -                | -         |     0.01 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            2 |     3677 | 2024-01-23 | Natus Vincere     | L   | 0.221      | -            | -                | -                | -         |    -3.53 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            1 |     3709 | 2024-01-22 | Ninjas in Pyjamas | W   | 0.214      | -            | -                | -                | -         |     0.01 | HooXi, huNter-, m0NESY, nexa, NiKo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($227,198.58)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.76) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-02 |      1.000 | $100,000.00    | $100,000.00     |
| 2024-05-12 |      0.956 | $32,000.00     | $30,576.91      |
| 2024-04-14 |      0.767 | $20,000.00     | $15,348.11      |
| 2024-03-31 |      0.676 | $80,000.00     | $54,104.93      |
| 2024-02-11 |      0.349 | $40,000.00     | $13,968.75      |
| 2024-01-28 |      0.256 | $12,500.00     | $3,199.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
