### Roster Details<br />
Team Name: Cloud9<br />
Roster: alpha, Ax1Le, Boombl4, HObbit, Perfecto<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [39](../standings_global.md)<br />
Regional Rank: [27]( ../standings_europe.md)<br />
Final Rank Value:  1151.3<br />
<br />
Final Rank Value (1151.3) = Starting Rank Value (1111.2) + Head To Head Adjustments (40.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.492[<sup>1</sup>](#table2)
- Bounty Collected: 0.482[<sup>2</sup>](#table1)
- Opponent Network: 0.064[<sup>2</sup>](#table1)
- LAN Wins: 0.369[<sup>2</sup>](#table1)

The average of these factors is 0.351<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1111.2
- 400 + ( ( 0.351 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1111.2


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
|           25 |     2283 | 2024-04-20 | Sashi             | L   | 0.566      | -            | -                | -                | -         |    -9.31 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           24 |     2314 | 2024-04-19 | BetBoom           | W   | 0.560      | 0.143        | 0.333 (0.027)    | 0.642 (0.051)    | -         |    14.96 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           23 |     2328 | 2024-04-19 | Sashi             | L   | 0.559      | -            | -                | -                | -         |    -9.28 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           22 |     2603 | 2024-04-10 | FaZe              | L   | 0.497      | -            | -                | -                | -         |    -0.45 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           21 |     2653 | 2024-04-08 | Wildcard          | W   | 0.490      | 0.624        | 0.008 (0.002)    | -                | 1 (0.490) |     0.91 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           20 |     2683 | 2024-04-08 | FlyQuest          | L   | 0.484      | -            | -                | -                | -         |    -5.86 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           19 |     2906 | 2024-03-28 | Vitality          | L   | 0.413      | -            | -                | -                | -         |    -0.23 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           18 |     2989 | 2024-03-23 | Natus Vincere     | W   | 0.381      | 1.000        | 1.000 (0.381)    | 0.364 (0.138)    | 1 (0.381) |    11.89 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           17 |     3013 | 2024-03-22 | G2                | W   | 0.372      | 1.000        | 1.000 (0.372)    | 0.515 (0.191)    | 1 (0.372) |    11.61 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           16 |     3024 | 2024-03-21 | Gaimin Gladiators | W   | 0.367      | 1.000        | 0.053 (0.020)    | 0.432 (0.159)    | 1 (0.367) |     4.63 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           15 |     3032 | 2024-03-21 | Spirit            | L   | 0.366      | -            | -                | -                | -         |    -0.14 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           14 |     3080 | 2024-03-18 | SAW               | W   | 0.347      | 0.143        | 0.121 (0.006)    | 0.500 (0.025)    | 1 (0.347) |     6.74 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           13 |     3098 | 2024-03-17 | Legacy            | W   | 0.341      | 0.143        | 0.150 (0.007)    | 0.540 (0.026)    | 1 (0.341) |     4.46 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           12 |     3116 | 2024-03-17 | Gaimin Gladiators | W   | 0.338      | 0.143        | 0.053 (0.003)    | 0.432 (0.021)    | 1 (0.338) |     4.19 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           11 |     3324 | 2024-03-08 | SAW               | L   | 0.281      | -            | -                | -                | -         |    -3.42 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           10 |     3390 | 2024-03-06 | Rare Atom         | W   | 0.266      | -            | -                | -                | -         |     0.58 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            9 |     3721 | 2024-02-20 | Vitality          | W   | 0.166      | 0.143        | 0.749 (0.018)    | 0.381 (0.009)    | 1 (0.166) |     5.15 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            8 |     3739 | 2024-02-19 | Apeks             | W   | 0.160      | 0.143        | -                | 0.219 (0.005)    | 1 (0.160) |     1.52 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            7 |     3748 | 2024-02-19 | PERA              | W   | 0.159      | 0.143        | -                | 0.462 (0.010)    | 1 (0.159) |     1.44 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            6 |     4005 | 2024-02-05 | Monte             | L   | 0.065      | -            | -                | -                | -         |    -1.21 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            5 |     4025 | 2024-02-04 | MOUZ              | L   | 0.059      | -            | -                | -                | -         |    -0.02 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            4 |     4078 | 2024-02-02 | Virtus.pro        | W   | 0.046      | 0.143        | 0.595 (0.004)    | -                | -         |     1.43 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            3 |     4106 | 2024-02-01 | BetBoom           | W   | 0.040      | -            | -                | -                | -         |     1.14 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            2 |     4130 | 2024-01-31 | Rebels            | L   | 0.033      | -            | -                | -                | -         |    -0.64 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            1 |     4195 | 2024-01-26 | BIG               | L   | 0.001      | -            | -                | -                | -         |    -0.01 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,533.50)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.525 | $5,000.00      | $2,624.49       |
| 2024-03-31 |      0.434 | $45,000.00     | $19,521.14      |
| 2024-03-10 |      0.294 | $7,500.00      | $2,206.18       |
| 2024-02-11 |      0.107 | $10,000.00     | $1,067.10       |
| 2024-01-28 |      0.013 | $8,500.00      | $114.59         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
