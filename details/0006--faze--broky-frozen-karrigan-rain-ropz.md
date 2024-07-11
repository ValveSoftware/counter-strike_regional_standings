### Roster Details<br />
Team Name: FaZe<br />
Roster: broky, frozen, karrigan, rain, ropz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [6](../standings_global.md)<br />
Regional Rank: [6]( ../standings_europe.md)<br />
Final Rank Value:  1882.3<br />
<br />
Final Rank Value (1882.3) = Starting Rank Value (1907.2) + Head To Head Adjustments (-24.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.972[<sup>1</sup>](#table2)
- Bounty Collected: 0.694[<sup>2</sup>](#table1)
- Opponent Network: 0.310[<sup>2</sup>](#table1)
- LAN Wins: 0.883[<sup>2</sup>](#table1)

The average of these factors is 0.715<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1907.2
- 400 + ( ( 0.715 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1907.2


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
|           43 |      227 | 2024-06-14 | Vitality      | L   | 1.000      | -            | -                | -                | -         |   -12.53 | broky, frozen, karrigan, rain, ropz |
|           42 |      268 | 2024-06-13 | Natus Vincere | L   | 1.000      | -            | -                | -                | -         |   -16.30 | broky, frozen, karrigan, rain, ropz |
|           41 |      300 | 2024-06-12 | SAW           | W   | 1.000      | 0.729        | -                | 0.526 (0.384)    | 1 (1.000) |     0.69 | broky, frozen, karrigan, rain, ropz |
|           40 |      775 | 2024-05-31 | G2            | L   | 0.928      | -            | -                | -                | -         |   -15.58 | broky, frozen, karrigan, rain, ropz |
|           39 |      831 | 2024-05-29 | Spirit        | L   | 0.914      | -            | -                | -                | -         |   -11.15 | broky, frozen, karrigan, rain, ropz |
|           38 |      852 | 2024-05-28 | Virtus.pro    | W   | 0.908      | 0.624        | 0.347 (0.197)    | -                | 1 (0.908) |     7.01 | broky, frozen, karrigan, rain, ropz |
|           37 |      877 | 2024-05-27 | M80           | W   | 0.901      | 0.624        | -                | 0.649 (0.365)    | 1 (0.901) |     0.66 | broky, frozen, karrigan, rain, ropz |
|           36 |     1402 | 2024-05-10 | Vitality      | L   | 0.787      | -            | -                | -                | -         |   -11.10 | broky, frozen, karrigan, rain, ropz |
|           35 |     1444 | 2024-05-08 | Natus Vincere | W   | 0.774      | 0.889        | 1.000 (0.688)    | -                | 1 (0.774) |    11.15 | broky, frozen, karrigan, rain, ropz |
|           34 |     1461 | 2024-05-07 | Monte         | W   | 0.767      | 0.889        | -                | 0.668 (0.456)    | 1 (0.767) |     0.56 | broky, frozen, karrigan, rain, ropz |
|           33 |     1693 | 2024-04-26 | Eternal Fire  | W   | 0.694      | 0.889        | 1.000 (0.616)    | 0.430 (0.265)    | 1 (0.694) |     6.05 | broky, frozen, karrigan, rain, ropz |
|           32 |     1722 | 2024-04-25 | Virtus.pro    | W   | 0.687      | 0.889        | 0.347 (0.212)    | 0.391 (0.239)    | 1 (0.687) |     5.47 | broky, frozen, karrigan, rain, ropz |
|           31 |     1741 | 2024-04-24 | Astralis      | L   | 0.680      | -            | -                | -                | -         |   -11.21 | broky, frozen, karrigan, rain, ropz |
|           30 |     1759 | 2024-04-23 | Imperial      | W   | 0.674      | 0.889        | 0.390 (0.234)    | 0.646 (0.387)    | 1 (0.674) |     1.74 | broky, frozen, karrigan, rain, ropz |
|           29 |     2034 | 2024-04-14 | MOUZ          | W   | 0.612      | 0.624        | 1.000 (0.382)    | -                | 1 (0.612) |    10.80 | broky, frozen, karrigan, rain, ropz |
|           28 |     2048 | 2024-04-13 | Astralis      | W   | 0.605      | 0.624        | 0.546 (0.206)    | -                | 1 (0.605) |     9.40 | broky, frozen, karrigan, rain, ropz |
|           27 |     2061 | 2024-04-12 | Liquid        | W   | 0.599      | -            | -                | -                | -         |     3.08 | broky, frozen, karrigan, rain, ropz |
|           26 |     2136 | 2024-04-10 | FlyQuest      | W   | 0.585      | -            | -                | -                | -         |     0.79 | broky, frozen, karrigan, rain, ropz |
|           25 |     2151 | 2024-04-10 | Cloud9        | W   | 0.584      | -            | -                | -                | -         |     0.59 | broky, frozen, karrigan, rain, ropz |
|           24 |     2197 | 2024-04-09 | Astralis      | L   | 0.578      | -            | -                | -                | -         |    -9.45 | broky, frozen, karrigan, rain, ropz |
|           23 |     2228 | 2024-04-08 | Nemiga        | W   | 0.571      | 0.624        | -                | 0.678 (0.242)    | -         |     0.52 | broky, frozen, karrigan, rain, ropz |
|           22 |     2421 | 2024-03-31 | Natus Vincere | L   | 0.521      | -            | -                | -                | -         |    -8.25 | broky, frozen, karrigan, rain, ropz |
|           21 |     2427 | 2024-03-30 | Vitality      | W   | 0.513      | 1.000        | 0.733 (0.376)    | -                | -         |     9.25 | broky, frozen, karrigan, rain, ropz |
|           20 |     2445 | 2024-03-28 | Spirit        | W   | 0.501      | 1.000        | 1.000 (0.501)    | 0.462 (0.232)    | -         |    10.21 | broky, frozen, karrigan, rain, ropz |
|           19 |     2532 | 2024-03-24 | Complexity    | W   | 0.472      | 1.000        | 0.440 (0.207)    | -                | -         |     5.33 | broky, frozen, karrigan, rain, ropz |
|           18 |     2545 | 2024-03-23 | Imperial      | W   | 0.466      | 1.000        | -                | 0.646 (0.301)    | -         |     1.42 | broky, frozen, karrigan, rain, ropz |
|           17 |     2559 | 2024-03-22 | Eternal Fire  | L   | 0.459      | -            | -                | -                | -         |    -9.99 | broky, frozen, karrigan, rain, ropz |
|           16 |     2570 | 2024-03-21 | FURIA         | W   | 0.454      | 1.000        | -                | 0.509 (0.231)    | -         |     2.75 | broky, frozen, karrigan, rain, ropz |
|           15 |     2582 | 2024-03-21 | HEROIC        | L   | 0.453      | -            | -                | -                | -         |    -9.74 | broky, frozen, karrigan, rain, ropz |
|           14 |     3370 | 2024-02-16 | Eternal Fire  | W   | 0.226      | -            | -                | -                | -         |     1.99 | broky, frozen, karrigan, rain, ropz |
|           13 |     3397 | 2024-02-15 | G2            | L   | 0.219      | -            | -                | -                | -         |    -3.36 | broky, frozen, karrigan, rain, ropz |
|           12 |     3431 | 2024-02-14 | Falcons       | W   | 0.213      | -            | -                | -                | -         |     0.99 | broky, frozen, karrigan, rain, ropz |
|           11 |     3446 | 2024-02-14 | 9 Pandas      | W   | 0.211      | -            | -                | -                | -         |     0.07 | broky, frozen, karrigan, rain, ropz |
|           10 |     3483 | 2024-02-11 | Spirit        | L   | 0.194      | -            | -                | -                | -         |    -2.29 | broky, frozen, karrigan, rain, ropz |
|            9 |     3495 | 2024-02-10 | MOUZ          | W   | 0.186      | -            | -                | -                | -         |     3.28 | broky, frozen, karrigan, rain, ropz |
|            8 |     3509 | 2024-02-09 | G2            | W   | 0.180      | -            | -                | -                | -         |     2.95 | broky, frozen, karrigan, rain, ropz |
|            7 |     3540 | 2024-02-06 | Spirit        | L   | 0.160      | -            | -                | -                | -         |    -1.88 | broky, frozen, karrigan, rain, ropz |
|            6 |     3559 | 2024-02-04 | Eternal Fire  | W   | 0.148      | -            | -                | -                | -         |     1.32 | broky, frozen, karrigan, rain, ropz |
|            5 |     3599 | 2024-02-03 | Rebels        | W   | 0.140      | -            | -                | -                | -         |     0.04 | broky, frozen, karrigan, rain, ropz |
|            4 |     3730 | 2024-01-27 | Liquid        | W   | 0.093      | -            | -                | -                | -         |     0.48 | broky, frozen, karrigan, rain, ropz |
|            3 |     3744 | 2024-01-26 | GamerLegion   | W   | 0.087      | -            | -                | -                | -         |     0.01 | broky, frozen, karrigan, rain, ropz |
|            2 |     3769 | 2024-01-25 | Spirit        | W   | 0.079      | -            | -                | -                | -         |     1.56 | broky, frozen, karrigan, rain, ropz |
|            1 |     3790 | 2024-01-24 | GamerLegion   | L   | 0.072      | -            | -                | -                | -         |    -2.25 | broky, frozen, karrigan, rain, ropz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($241,782.57)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.94) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-06-02 |      0.941 | $10,000.00     | $9,410.03       |
| 2024-05-12 |      0.800 | $32,000.00     | $25,595.38      |
| 2024-04-14 |      0.612 | $100,000.00    | $61,173.26      |
| 2024-03-31 |      0.521 | $170,000.00    | $88,508.55      |
| 2024-02-11 |      0.194 | $180,000.00    | $34,838.22      |
| 2024-01-28 |      0.100 | $22,500.00     | $2,257.13       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
