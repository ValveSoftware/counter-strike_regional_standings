### Roster Details<br />
Team Name: Cloud9<br />
Roster: alpha, Ax1Le, Boombl4, HObbit, Perfecto<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [34](../standings_global.md)<br />
Regional Rank: [23]( ../standings_europe.md)<br />
Final Rank Value:  1241.9<br />
<br />
Final Rank Value (1241.9) = Starting Rank Value (1200.9) + Head To Head Adjustments (41.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.519[<sup>1</sup>](#table2)
- Bounty Collected: 0.484[<sup>2</sup>](#table1)
- Opponent Network: 0.072[<sup>2</sup>](#table1)
- LAN Wins: 0.417[<sup>2</sup>](#table1)

The average of these factors is 0.373<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1200.9
- 400 + ( ( 0.373 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1200.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |     1995 | 2024-04-20 | Sashi             | L   | 0.613      | -            | -                | -                | -         |   -12.28 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           27 |     2026 | 2024-04-19 | BetBoom           | W   | 0.608      | 0.143        | 0.403 (0.035)    | 0.704 (0.061)    | -         |    16.39 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           26 |     2040 | 2024-04-19 | Sashi             | L   | 0.607      | -            | -                | -                | -         |   -12.35 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           25 |     2315 | 2024-04-10 | FaZe              | L   | 0.544      | -            | -                | -                | -         |    -0.43 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           24 |     2365 | 2024-04-08 | Wildcard          | W   | 0.537      | -            | -                | -                | 1 (0.537) |     0.70 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           23 |     2395 | 2024-04-08 | FlyQuest          | L   | 0.531      | -            | -                | -                | -         |    -6.71 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           22 |     2618 | 2024-03-28 | Vitality          | L   | 0.460      | -            | -                | -                | -         |    -0.24 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           21 |     2701 | 2024-03-23 | Natus Vincere     | W   | 0.428      | 1.000        | 1.000 (0.428)    | 0.285 (0.122)    | 1 (0.428) |    13.13 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           20 |     2725 | 2024-03-22 | G2                | W   | 0.419      | 1.000        | 0.738 (0.309)    | 0.496 (0.208)    | 1 (0.419) |    12.98 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           19 |     2736 | 2024-03-21 | Gaimin Gladiators | W   | 0.414      | 1.000        | 0.067 (0.028)    | 0.488 (0.202)    | 1 (0.414) |     4.97 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           18 |     2744 | 2024-03-21 | Spirit            | L   | 0.413      | -            | -                | -                | -         |    -0.17 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           17 |     2792 | 2024-03-18 | SAW               | W   | 0.394      | 0.143        | 0.147 (0.008)    | 0.544 (0.031)    | 1 (0.394) |     7.38 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           16 |     2810 | 2024-03-17 | Legacy            | W   | 0.388      | 0.143        | 0.178 (0.010)    | 0.572 (0.032)    | 1 (0.388) |     4.75 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           15 |     2828 | 2024-03-17 | Gaimin Gladiators | W   | 0.386      | 0.143        | -                | 0.488 (0.027)    | 1 (0.386) |     4.49 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           14 |     3036 | 2024-03-08 | SAW               | L   | 0.328      | -            | -                | -                | -         |    -4.25 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           13 |     3102 | 2024-03-06 | Rare Atom         | W   | 0.313      | -            | -                | -                | -         |     0.50 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           12 |     3433 | 2024-02-20 | Vitality          | W   | 0.213      | 0.143        | 0.733 (0.022)    | 0.416 (0.013)    | 1 (0.213) |     6.63 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           11 |     3451 | 2024-02-19 | Apeks             | W   | 0.207      | -            | -                | -                | 1 (0.207) |     1.89 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           10 |     3460 | 2024-02-19 | PERA              | W   | 0.206      | 0.143        | -                | 0.454 (0.013)    | 1 (0.206) |     1.58 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            9 |     3717 | 2024-02-05 | Monte             | L   | 0.113      | -            | -                | -                | -         |    -2.18 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            8 |     3737 | 2024-02-04 | MOUZ              | L   | 0.106      | -            | -                | -                | -         |    -0.04 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            7 |     3790 | 2024-02-02 | Virtus.pro        | W   | 0.094      | 0.143        | 0.349 (0.005)    | -                | -         |     2.81 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            6 |     3818 | 2024-02-01 | BetBoom           | W   | 0.087      | 0.143        | 0.403 (0.005)    | -                | -         |     2.54 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            5 |     3842 | 2024-01-31 | Rebels            | L   | 0.080      | -            | -                | -                | -         |    -1.75 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            4 |     3907 | 2024-01-26 | BIG               | L   | 0.048      | -            | -                | -                | -         |    -0.39 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            3 |     3932 | 2024-01-25 | Virtus.pro        | L   | 0.041      | -            | -                | -                | -         |    -0.06 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            2 |     3945 | 2024-01-24 | HEROIC            | W   | 0.034      | 0.581        | 0.333 (0.007)    | 0.448 (0.009)    | -         |     1.04 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            1 |     4117 | 2024-01-19 | BetBoom           | W   | 0.000      | -            | -                | -                | -         |     0.01 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29,122.61)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.572 | $5,000.00      | $2,860.61       |
| 2024-03-31 |      0.481 | $45,000.00     | $21,646.27      |
| 2024-03-10 |      0.341 | $7,500.00      | $2,560.36       |
| 2024-02-11 |      0.154 | $10,000.00     | $1,539.35       |
| 2024-01-28 |      0.061 | $8,500.00      | $516.01         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
