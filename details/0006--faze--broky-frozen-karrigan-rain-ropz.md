### Roster Details<br />
Team Name: FaZe<br />
Roster: broky, frozen, karrigan, rain, ropz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [6](../standings_global.md)<br />
Regional Rank: [6]( ../standings_europe.md)<br />
Final Rank Value:  1783.2<br />
<br />
Final Rank Value (1783.2) = Starting Rank Value (1780.3) + Head To Head Adjustments (2.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.936[<sup>1</sup>](#table2)
- Bounty Collected: 0.670[<sup>2</sup>](#table1)
- Opponent Network: 0.267[<sup>2</sup>](#table1)
- LAN Wins: 0.855[<sup>2</sup>](#table1)

The average of these factors is 0.682<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1780.3
- 400 + ( ( 0.682 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1780.3


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
|           43 |      149 | 2024-07-19 | Natus Vincere | L   | 1.000      | -            | -                | -                | -         |    -9.19 | broky, frozen, karrigan, rain, ropz |
|           42 |      296 | 2024-07-17 | FlyQuest      | W   | 1.000      | 1.000        | -                | 0.349 (0.349)    | 1 (1.000) |     1.48 | broky, frozen, karrigan, rain, ropz |
|           41 |      679 | 2024-06-14 | Vitality      | L   | 0.933      | -            | -                | -                | -         |   -11.09 | broky, frozen, karrigan, rain, ropz |
|           40 |      720 | 2024-06-13 | Natus Vincere | L   | 0.926      | -            | -                | -                | -         |    -9.39 | broky, frozen, karrigan, rain, ropz |
|           39 |      752 | 2024-06-12 | SAW           | W   | 0.918      | 0.729        | -                | 0.500 (0.335)    | 1 (0.918) |     0.75 | broky, frozen, karrigan, rain, ropz |
|           38 |     1227 | 2024-05-31 | G2            | L   | 0.841      | -            | -                | -                | -         |    -9.11 | broky, frozen, karrigan, rain, ropz |
|           37 |     1283 | 2024-05-29 | Spirit        | L   | 0.828      | -            | -                | -                | -         |    -9.35 | broky, frozen, karrigan, rain, ropz |
|           36 |     1304 | 2024-05-28 | Virtus.pro    | W   | 0.821      | 0.624        | 0.595 (0.305)    | -                | 1 (0.821) |     9.85 | broky, frozen, karrigan, rain, ropz |
|           35 |     1329 | 2024-05-27 | M80           | W   | 0.814      | 0.624        | -                | 0.614 (0.312)    | 1 (0.814) |     1.30 | broky, frozen, karrigan, rain, ropz |
|           34 |     1854 | 2024-05-10 | Vitality      | L   | 0.700      | -            | -                | -                | -         |    -9.28 | broky, frozen, karrigan, rain, ropz |
|           33 |     1896 | 2024-05-08 | Natus Vincere | W   | 0.687      | 0.889        | 1.000 (0.611)    | 0.364 (0.222)    | 1 (0.687) |    15.33 | broky, frozen, karrigan, rain, ropz |
|           32 |     1913 | 2024-05-07 | Monte         | W   | 0.681      | -            | -                | -                | 1 (0.681) |     0.35 | broky, frozen, karrigan, rain, ropz |
|           31 |     2145 | 2024-04-26 | Eternal Fire  | W   | 0.607      | 0.889        | 0.833 (0.449)    | 0.443 (0.239)    | 1 (0.607) |     6.05 | broky, frozen, karrigan, rain, ropz |
|           30 |     2174 | 2024-04-25 | Virtus.pro    | W   | 0.600      | 0.889        | 0.595 (0.317)    | 0.374 (0.199)    | 1 (0.600) |     8.23 | broky, frozen, karrigan, rain, ropz |
|           29 |     2193 | 2024-04-24 | Astralis      | L   | 0.593      | -            | -                | -                | -         |   -10.97 | broky, frozen, karrigan, rain, ropz |
|           28 |     2211 | 2024-04-23 | Imperial      | W   | 0.587      | 0.889        | 0.317 (0.166)    | 0.653 (0.341)    | 1 (0.587) |     1.55 | broky, frozen, karrigan, rain, ropz |
|           27 |     2486 | 2024-04-14 | MOUZ          | W   | 0.525      | 0.624        | 1.000 (0.328)    | -                | 1 (0.525) |    11.20 | broky, frozen, karrigan, rain, ropz |
|           26 |     2500 | 2024-04-13 | Astralis      | W   | 0.518      | 0.624        | 0.457 (0.148)    | -                | -         |     6.95 | broky, frozen, karrigan, rain, ropz |
|           25 |     2513 | 2024-04-12 | Liquid        | W   | 0.512      | -            | -                | -                | -         |     2.21 | broky, frozen, karrigan, rain, ropz |
|           24 |     2588 | 2024-04-10 | FlyQuest      | W   | 0.498      | -            | -                | -                | -         |     0.76 | broky, frozen, karrigan, rain, ropz |
|           23 |     2603 | 2024-04-10 | Cloud9        | W   | 0.497      | -            | -                | -                | -         |     0.45 | broky, frozen, karrigan, rain, ropz |
|           22 |     2649 | 2024-04-09 | Astralis      | L   | 0.491      | -            | -                | -                | -         |    -9.22 | broky, frozen, karrigan, rain, ropz |
|           21 |     2680 | 2024-04-08 | Nemiga        | W   | 0.484      | 0.624        | -                | 0.707 (0.214)    | -         |     0.53 | broky, frozen, karrigan, rain, ropz |
|           20 |     2873 | 2024-03-31 | Natus Vincere | L   | 0.434      | -            | -                | -                | -         |    -3.38 | broky, frozen, karrigan, rain, ropz |
|           19 |     2879 | 2024-03-30 | Vitality      | W   | 0.427      | 1.000        | 0.749 (0.319)    | -                | -         |     8.24 | broky, frozen, karrigan, rain, ropz |
|           18 |     2897 | 2024-03-28 | Spirit        | W   | 0.414      | 1.000        | 1.000 (0.414)    | -                | -         |     8.94 | broky, frozen, karrigan, rain, ropz |
|           17 |     2984 | 2024-03-24 | Complexity    | W   | 0.385      | 1.000        | 0.405 (0.156)    | -                | -         |     4.48 | broky, frozen, karrigan, rain, ropz |
|           16 |     2997 | 2024-03-23 | Imperial      | W   | 0.379      | 1.000        | -                | 0.653 (0.248)    | -         |     1.09 | broky, frozen, karrigan, rain, ropz |
|           15 |     3011 | 2024-03-22 | Eternal Fire  | L   | 0.372      | -            | -                | -                | -         |    -7.61 | broky, frozen, karrigan, rain, ropz |
|           14 |     3022 | 2024-03-21 | FURIA         | W   | 0.367      | 1.000        | -                | 0.563 (0.207)    | -         |     5.75 | broky, frozen, karrigan, rain, ropz |
|           13 |     3034 | 2024-03-21 | HEROIC        | L   | 0.366      | -            | -                | -                | -         |    -8.24 | broky, frozen, karrigan, rain, ropz |
|           12 |     3822 | 2024-02-16 | Eternal Fire  | W   | 0.139      | -            | -                | -                | -         |     1.45 | broky, frozen, karrigan, rain, ropz |
|           11 |     3849 | 2024-02-15 | G2            | L   | 0.132      | -            | -                | -                | -         |    -1.00 | broky, frozen, karrigan, rain, ropz |
|           10 |     3883 | 2024-02-14 | Falcons       | W   | 0.127      | -            | -                | -                | -         |     0.52 | broky, frozen, karrigan, rain, ropz |
|            9 |     3898 | 2024-02-14 | 9 Pandas      | W   | 0.125      | -            | -                | -                | -         |     0.06 | broky, frozen, karrigan, rain, ropz |
|            8 |     3935 | 2024-02-11 | Spirit        | L   | 0.107      | -            | -                | -                | -         |    -1.10 | broky, frozen, karrigan, rain, ropz |
|            7 |     3947 | 2024-02-10 | MOUZ          | W   | 0.099      | -            | -                | -                | -         |     2.14 | broky, frozen, karrigan, rain, ropz |
|            6 |     3961 | 2024-02-09 | G2            | W   | 0.093      | -            | -                | -                | -         |     2.24 | broky, frozen, karrigan, rain, ropz |
|            5 |     3992 | 2024-02-06 | Spirit        | L   | 0.073      | -            | -                | -                | -         |    -0.74 | broky, frozen, karrigan, rain, ropz |
|            4 |     4011 | 2024-02-04 | Eternal Fire  | W   | 0.061      | -            | -                | -                | -         |     0.65 | broky, frozen, karrigan, rain, ropz |
|            3 |     4051 | 2024-02-03 | Rebels        | W   | 0.053      | -            | -                | -                | -         |     0.02 | broky, frozen, karrigan, rain, ropz |
|            2 |     4182 | 2024-01-27 | Liquid        | W   | 0.007      | -            | -                | -                | -         |     0.03 | broky, frozen, karrigan, rain, ropz |
|            1 |     4196 | 2024-01-26 | GamerLegion   | W   | 0.000      | -            | -                | -                | -         |     0.00 | broky, frozen, karrigan, rain, ropz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($236,033.83)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.85) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $40,000.00     | $40,000.00      |
| 2024-06-16 |      0.946 | $20,000.00     | $18,928.08      |
| 2024-06-02 |      0.854 | $10,000.00     | $8,541.67       |
| 2024-05-12 |      0.713 | $32,000.00     | $22,816.64      |
| 2024-04-14 |      0.525 | $100,000.00    | $52,489.72      |
| 2024-03-31 |      0.434 | $170,000.00    | $73,746.52      |
| 2024-02-11 |      0.107 | $180,000.00    | $19,207.85      |
| 2024-01-28 |      0.013 | $22,500.00     | $303.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
