### Roster Details<br />
Team Name: Cloud9<br />
Roster: alpha, Ax1Le, Boombl4, HObbit, Perfecto<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [29](../standings_global.md)<br />
Regional Rank: [20]( ../standings_europe.md)<br />
Final Rank Value:  1281.1<br />
<br />
Final Rank Value (1281.1) = Starting Rank Value (1235.5) + Head To Head Adjustments (45.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.525[<sup>1</sup>](#table2)
- Bounty Collected: 0.497[<sup>2</sup>](#table1)
- Opponent Network: 0.101[<sup>2</sup>](#table1)
- LAN Wins: 0.462[<sup>2</sup>](#table1)

The average of these factors is 0.396<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1235.5
- 400 + ( ( 0.396 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1235.5


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
|           30 |     1831 | 2024-04-20 | Sashi             | L   | 0.653      | -            | -                | -                | -         |   -14.06 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           29 |     1862 | 2024-04-19 | BetBoom           | W   | 0.647      | 0.143        | 0.406 (0.037)    | 0.745 (0.069)    | -         |    17.01 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           28 |     1876 | 2024-04-19 | Sashi             | L   | 0.646      | -            | -                | -                | -         |   -14.18 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           27 |     2151 | 2024-04-10 | FaZe              | L   | 0.584      | -            | -                | -                | -         |    -0.59 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           26 |     2201 | 2024-04-08 | Wildcard          | W   | 0.577      | 0.624        | 0.073 (0.026)    | 0.569 (0.205)    | 1 (0.577) |     2.71 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           25 |     2231 | 2024-04-08 | FlyQuest          | L   | 0.570      | -            | -                | -                | -         |    -7.93 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           24 |     2454 | 2024-03-28 | Vitality          | L   | 0.500      | -            | -                | -                | -         |    -0.36 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           23 |     2537 | 2024-03-23 | Natus Vincere     | W   | 0.468      | 1.000        | 1.000 (0.468)    | 0.306 (0.143)    | 1 (0.468) |    14.29 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           22 |     2561 | 2024-03-22 | G2                | W   | 0.458      | 1.000        | 0.745 (0.342)    | 0.481 (0.221)    | 1 (0.458) |    14.06 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           21 |     2572 | 2024-03-21 | Gaimin Gladiators | W   | 0.454      | 1.000        | 0.069 (0.031)    | 0.528 (0.240)    | 1 (0.454) |     5.39 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           20 |     2580 | 2024-03-21 | Spirit            | L   | 0.453      | -            | -                | -                | -         |    -0.22 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           19 |     2628 | 2024-03-18 | SAW               | W   | 0.433      | 0.143        | 0.147 (0.009)    | 0.526 (0.033)    | 1 (0.433) |     7.61 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           18 |     2646 | 2024-03-17 | Legacy            | W   | 0.427      | 0.143        | 0.160 (0.010)    | 0.508 (0.031)    | 1 (0.427) |     4.21 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           17 |     2664 | 2024-03-17 | Gaimin Gladiators | W   | 0.425      | 0.143        | -                | 0.528 (0.032)    | 1 (0.425) |     4.88 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           16 |     2872 | 2024-03-08 | SAW               | L   | 0.368      | -            | -                | -                | -         |    -5.24 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           15 |     2938 | 2024-03-06 | Rare Atom         | W   | 0.353      | -            | -                | -                | -         |     0.46 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           14 |     3269 | 2024-02-20 | Vitality          | W   | 0.253      | 0.143        | 0.733 (0.026)    | -                | 1 (0.253) |     7.83 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           13 |     3287 | 2024-02-19 | Apeks             | W   | 0.247      | -            | -                | -                | 1 (0.247) |     2.08 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           12 |     3296 | 2024-02-19 | PERA              | W   | 0.245      | 0.143        | -                | 0.433 (0.015)    | 1 (0.245) |     1.55 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           11 |     3553 | 2024-02-05 | Monte             | L   | 0.152      | -            | -                | -                | -         |    -2.15 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           10 |     3573 | 2024-02-04 | MOUZ              | L   | 0.146      | -            | -                | -                | -         |    -0.09 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            9 |     3626 | 2024-02-02 | Virtus.pro        | W   | 0.133      | -            | -                | -                | -         |     3.97 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            8 |     3654 | 2024-02-01 | BetBoom           | W   | 0.127      | 0.143        | 0.406 (0.007)    | -                | -         |     3.67 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            7 |     3678 | 2024-01-31 | Rebels            | L   | 0.120      | -            | -                | -                | -         |    -2.71 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            6 |     3743 | 2024-01-26 | BIG               | L   | 0.088      | -            | -                | -                | -         |    -0.77 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            5 |     3768 | 2024-01-25 | Virtus.pro        | L   | 0.080      | -            | -                | -                | -         |    -0.13 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            4 |     3781 | 2024-01-24 | HEROIC            | W   | 0.074      | 0.581        | 0.338 (0.015)    | 0.480 (0.021)    | -         |     2.22 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            3 |     3953 | 2024-01-19 | BetBoom           | W   | 0.040      | -            | -                | -                | -         |     1.15 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            2 |     4006 | 2024-01-18 | 3DMAX             | W   | 0.034      | -            | -                | -                | -         |     0.55 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            1 |     4027 | 2024-01-18 | OG                | W   | 0.033      | -            | -                | -                | -         |     0.40 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($32,132.99)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.612 | $5,000.00      | $3,058.66       |
| 2024-03-31 |      0.521 | $45,000.00     | $23,428.73      |
| 2024-03-10 |      0.381 | $7,500.00      | $2,857.44       |
| 2024-02-11 |      0.194 | $10,000.00     | $1,935.46       |
| 2024-01-28 |      0.100 | $8,500.00      | $852.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
