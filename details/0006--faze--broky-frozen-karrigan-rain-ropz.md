### Roster Details<br />
Team Name: FaZe<br />
Roster: broky, frozen, karrigan, rain, ropz<br />
Global Rank: [6](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [6]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1738.0<br />
<br />
Final Rank Value (1738.0) = Starting Rank Value (1718.5) + Head To Head Adjustments (19.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.839[<sup>1</sup>](#table2)
- Bounty Collected: 0.633[<sup>2</sup>](#table1)
- Opponent Network: 0.239[<sup>2</sup>](#table1)
- LAN Wins: 0.843[<sup>2</sup>](#table1)

The average of these factors is 0.639<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1718.5
- 400 + ( ( 0.639 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1718.5


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
|           42 |       23 | 2024-07-31 | Cloud9        | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.02 | broky, frozen, karrigan, rain, ropz |
|           41 |      391 | 2024-07-19 | Natus Vincere | L   | 1.000      | -            | -                | -                | -         |    -7.83 | broky, frozen, karrigan, rain, ropz |
|           40 |      538 | 2024-07-17 | FlyQuest      | W   | 1.000      | 1.000        | -                | 0.298 (0.298)    | 1 (1.000) |     1.46 | broky, frozen, karrigan, rain, ropz |
|           39 |      921 | 2024-06-14 | Vitality      | L   | 0.886      | -            | -                | -                | -         |    -9.77 | broky, frozen, karrigan, rain, ropz |
|           38 |      962 | 2024-06-13 | Natus Vincere | L   | 0.878      | -            | -                | -                | -         |    -7.48 | broky, frozen, karrigan, rain, ropz |
|           37 |      994 | 2024-06-12 | SAW           | W   | 0.871      | 0.729        | -                | 0.545 (0.346)    | 1 (0.871) |     1.03 | broky, frozen, karrigan, rain, ropz |
|           36 |     1469 | 2024-05-31 | G2            | L   | 0.794      | -            | -                | -                | -         |    -6.87 | broky, frozen, karrigan, rain, ropz |
|           35 |     1525 | 2024-05-29 | Spirit        | L   | 0.780      | -            | -                | -                | -         |    -7.25 | broky, frozen, karrigan, rain, ropz |
|           34 |     1546 | 2024-05-28 | Virtus.pro    | W   | 0.774      | 0.624        | 0.483 (0.233)    | -                | 1 (0.774) |     9.46 | broky, frozen, karrigan, rain, ropz |
|           33 |     1571 | 2024-05-27 | M80           | W   | 0.767      | 0.624        | -                | 0.551 (0.264)    | 1 (0.767) |     1.35 | broky, frozen, karrigan, rain, ropz |
|           32 |     2096 | 2024-05-10 | Vitality      | L   | 0.653      | -            | -                | -                | -         |    -7.90 | broky, frozen, karrigan, rain, ropz |
|           31 |     2138 | 2024-05-08 | Natus Vincere | W   | 0.640      | 0.889        | 1.000 (0.569)    | 0.331 (0.189)    | 1 (0.640) |    15.42 | broky, frozen, karrigan, rain, ropz |
|           30 |     2155 | 2024-05-07 | Monte         | W   | 0.633      | -            | -                | -                | 1 (0.633) |     0.37 | broky, frozen, karrigan, rain, ropz |
|           29 |     2387 | 2024-04-26 | Eternal Fire  | W   | 0.559      | 0.889        | 0.759 (0.377)    | 0.462 (0.230)    | 1 (0.559) |     8.06 | broky, frozen, karrigan, rain, ropz |
|           28 |     2416 | 2024-04-25 | Virtus.pro    | W   | 0.553      | 0.889        | 0.483 (0.237)    | 0.327 (0.161)    | 1 (0.553) |     7.59 | broky, frozen, karrigan, rain, ropz |
|           27 |     2435 | 2024-04-24 | Astralis      | L   | 0.546      | -            | -                | -                | -         |    -9.57 | broky, frozen, karrigan, rain, ropz |
|           26 |     2453 | 2024-04-23 | Imperial      | W   | 0.539      | 0.889        | 0.245 (0.117)    | 0.685 (0.328)    | 1 (0.539) |     1.43 | broky, frozen, karrigan, rain, ropz |
|           25 |     2728 | 2024-04-14 | MOUZ          | W   | 0.478      | 0.624        | 1.000 (0.298)    | -                | -         |    10.51 | broky, frozen, karrigan, rain, ropz |
|           24 |     2742 | 2024-04-13 | Astralis      | W   | 0.471      | 0.624        | 0.360 (0.106)    | -                | -         |     6.75 | broky, frozen, karrigan, rain, ropz |
|           23 |     2755 | 2024-04-12 | Liquid        | W   | 0.465      | -            | -                | -                | -         |     2.72 | broky, frozen, karrigan, rain, ropz |
|           22 |     2830 | 2024-04-10 | FlyQuest      | W   | 0.451      | -            | -                | -                | -         |     0.69 | broky, frozen, karrigan, rain, ropz |
|           21 |     2845 | 2024-04-10 | Cloud9        | W   | 0.449      | -            | -                | -                | -         |     0.41 | broky, frozen, karrigan, rain, ropz |
|           20 |     2891 | 2024-04-09 | Astralis      | L   | 0.444      | -            | -                | -                | -         |    -7.87 | broky, frozen, karrigan, rain, ropz |
|           19 |     2922 | 2024-04-08 | Nemiga        | W   | 0.437      | 0.624        | -                | 0.698 (0.190)    | -         |     0.55 | broky, frozen, karrigan, rain, ropz |
|           18 |     3115 | 2024-03-31 | Natus Vincere | L   | 0.387      | -            | -                | -                | -         |    -2.36 | broky, frozen, karrigan, rain, ropz |
|           17 |     3121 | 2024-03-30 | Vitality      | W   | 0.379      | 1.000        | 0.592 (0.225)    | -                | -         |     7.82 | broky, frozen, karrigan, rain, ropz |
|           16 |     3139 | 2024-03-28 | Spirit        | W   | 0.367      | 1.000        | 1.000 (0.367)    | -                | -         |     8.71 | broky, frozen, karrigan, rain, ropz |
|           15 |     3226 | 2024-03-24 | Complexity    | W   | 0.338      | 1.000        | 0.319 (0.108)    | -                | -         |     4.18 | broky, frozen, karrigan, rain, ropz |
|           14 |     3239 | 2024-03-23 | Imperial      | W   | 0.332      | 1.000        | -                | 0.685 (0.227)    | -         |     0.93 | broky, frozen, karrigan, rain, ropz |
|           13 |     3253 | 2024-03-22 | Eternal Fire  | L   | 0.325      | -            | -                | -                | -         |    -4.96 | broky, frozen, karrigan, rain, ropz |
|           12 |     3264 | 2024-03-21 | FURIA         | W   | 0.320      | 1.000        | -                | 0.495 (0.159)    | -         |     5.26 | broky, frozen, karrigan, rain, ropz |
|           11 |     3276 | 2024-03-21 | HEROIC        | L   | 0.318      | -            | -                | -                | -         |    -6.79 | broky, frozen, karrigan, rain, ropz |
|           10 |     4064 | 2024-02-16 | Eternal Fire  | W   | 0.092      | -            | -                | -                | -         |     1.47 | broky, frozen, karrigan, rain, ropz |
|            9 |     4091 | 2024-02-15 | G2            | L   | 0.085      | -            | -                | -                | -         |    -0.47 | broky, frozen, karrigan, rain, ropz |
|            8 |     4125 | 2024-02-14 | Falcons       | W   | 0.079      | -            | -                | -                | -         |     0.45 | broky, frozen, karrigan, rain, ropz |
|            7 |     4140 | 2024-02-14 | 9 Pandas      | W   | 0.077      | -            | -                | -                | -         |     0.04 | broky, frozen, karrigan, rain, ropz |
|            6 |     4177 | 2024-02-11 | Spirit        | L   | 0.059      | -            | -                | -                | -         |    -0.47 | broky, frozen, karrigan, rain, ropz |
|            5 |     4189 | 2024-02-10 | MOUZ          | W   | 0.052      | -            | -                | -                | -         |     1.16 | broky, frozen, karrigan, rain, ropz |
|            4 |     4203 | 2024-02-09 | G2            | W   | 0.046      | -            | -                | -                | -         |     1.19 | broky, frozen, karrigan, rain, ropz |
|            3 |     4234 | 2024-02-06 | Spirit        | L   | 0.026      | -            | -                | -                | -         |    -0.20 | broky, frozen, karrigan, rain, ropz |
|            2 |     4253 | 2024-02-04 | Eternal Fire  | W   | 0.014      | -            | -                | -                | -         |     0.22 | broky, frozen, karrigan, rain, ropz |
|            1 |     4293 | 2024-02-03 | Rebels        | W   | 0.006      | -            | -                | -                | -         |     0.00 | broky, frozen, karrigan, rain, ropz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($211,519.21)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.64) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $40,000.00     | $40,000.00      |
| 2024-06-16 |      0.899 | $20,000.00     | $17,982.33      |
| 2024-06-02 |      0.807 | $10,000.00     | $8,068.80       |
| 2024-05-12 |      0.666 | $32,000.00     | $21,303.44      |
| 2024-04-14 |      0.478 | $100,000.00    | $47,760.96      |
| 2024-03-31 |      0.387 | $170,000.00    | $65,707.62      |
| 2024-02-11 |      0.059 | $180,000.00    | $10,696.07      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
