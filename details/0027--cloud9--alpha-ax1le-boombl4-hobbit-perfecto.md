### Roster Details<br />
Team Name: Cloud9<br />
Roster: alpha, Ax1Le, Boombl4, HObbit, Perfecto<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [27](../standings_global.md)<br />
Regional Rank: [18]( ../standings_europe.md)<br />
Final Rank Value:  1372.8<br />
<br />
Final Rank Value (1372.8) = Starting Rank Value (1318.3) + Head To Head Adjustments (54.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.545[<sup>1</sup>](#table2)
- Bounty Collected: 0.535[<sup>2</sup>](#table1)
- Opponent Network: 0.150[<sup>2</sup>](#table1)
- LAN Wins: 0.578[<sup>2</sup>](#table1)

The average of these factors is 0.452<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1318.3
- 400 + ( ( 0.452 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1318.3


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
|           30 |     1697 | 2024-04-20 | Sashi             | L   | 0.808      | -            | -                | -                | -         |   -19.95 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           29 |     1728 | 2024-04-19 | BetBoom           | W   | 0.803      | 0.143        | 0.414 (0.047)    | 0.798 (0.091)    | -         |    17.95 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           28 |     1742 | 2024-04-19 | Sashi             | L   | 0.802      | -            | -                | -                | -         |   -20.31 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           27 |     2017 | 2024-04-10 | FaZe              | L   | 0.739      | -            | -                | -                | -         |    -1.03 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           26 |     2067 | 2024-04-08 | Wildcard          | W   | 0.733      | 0.624        | 0.068 (0.031)    | 0.572 (0.261)    | 1 (0.733) |     2.27 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           25 |     2097 | 2024-04-08 | FlyQuest          | L   | 0.726      | -            | -                | -                | -         |   -12.10 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           24 |     2321 | 2024-03-28 | Vitality          | L   | 0.656      | -            | -                | -                | -         |    -0.88 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           23 |     2404 | 2024-03-23 | Natus Vincere     | W   | 0.623      | 1.000        | 1.000 (0.623)    | 0.337 (0.210)    | 1 (0.623) |    18.71 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           22 |     2428 | 2024-03-22 | G2                | W   | 0.614      | 1.000        | 0.756 (0.464)    | 0.508 (0.312)    | 1 (0.614) |    18.49 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           21 |     2439 | 2024-03-21 | Gaimin Gladiators | W   | 0.610      | 1.000        | 0.076 (0.047)    | 0.632 (0.385)    | 1 (0.610) |     6.47 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           20 |     2447 | 2024-03-21 | Spirit            | L   | 0.608      | -            | -                | -                | -         |    -0.53 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           19 |     2495 | 2024-03-18 | SAW               | W   | 0.589      | 0.143        | -                | 0.571 (0.048)    | 1 (0.589) |     9.48 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           18 |     2513 | 2024-03-17 | Legacy            | W   | 0.583      | 0.143        | 0.146 (0.012)    | 0.452 (0.038)    | 1 (0.583) |     4.10 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           17 |     2531 | 2024-03-17 | Gaimin Gladiators | W   | 0.581      | 0.143        | -                | 0.632 (0.052)    | 1 (0.581) |     5.80 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           16 |     2739 | 2024-03-08 | SAW               | L   | 0.523      | -            | -                | -                | -         |    -8.31 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           15 |     2805 | 2024-03-06 | Rare Atom         | W   | 0.509      | -            | -                | -                | -         |     0.41 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           14 |     3136 | 2024-02-20 | Vitality          | W   | 0.408      | 0.143        | 0.738 (0.043)    | -                | 1 (0.408) |    12.49 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           13 |     3154 | 2024-02-19 | Apeks             | W   | 0.403      | -            | -                | -                | 1 (0.403) |     2.99 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           12 |     3163 | 2024-02-19 | PERA              | W   | 0.401      | -            | -                | -                | 1 (0.401) |     1.57 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           11 |     3420 | 2024-02-05 | Monte             | L   | 0.308      | -            | -                | -                | -         |    -5.28 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           10 |     3440 | 2024-02-04 | MOUZ              | L   | 0.302      | -            | -                | -                | -         |    -0.24 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            9 |     3493 | 2024-02-02 | Virtus.pro        | W   | 0.289      | 0.143        | 0.345 (0.014)    | -                | -         |     8.37 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            8 |     3521 | 2024-02-01 | BetBoom           | W   | 0.283      | 0.143        | 0.414 (0.017)    | 0.798 (0.032)    | -         |     7.77 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            7 |     3545 | 2024-01-31 | Rebels            | L   | 0.275      | -            | -                | -                | -         |    -6.95 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            6 |     3610 | 2024-01-26 | BIG               | L   | 0.243      | -            | -                | -                | -         |    -2.73 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            5 |     3635 | 2024-01-25 | Virtus.pro        | L   | 0.236      | -            | -                | -                | -         |    -0.57 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            4 |     3648 | 2024-01-24 | HEROIC            | W   | 0.230      | 0.581        | 0.354 (0.047)    | 0.545 (0.073)    | -         |     6.71 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            3 |     3820 | 2024-01-19 | BetBoom           | W   | 0.196      | -            | -                | -                | -         |     5.42 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            2 |     3873 | 2024-01-18 | 3DMAX             | W   | 0.189      | -            | -                | -                | -         |     2.42 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            1 |     3894 | 2024-01-18 | OG                | W   | 0.188      | -            | -                | -                | -         |     1.94 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($43,964.14)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.767 | $5,000.00      | $3,837.03       |
| 2024-03-31 |      0.676 | $45,000.00     | $30,434.02      |
| 2024-03-10 |      0.537 | $7,500.00      | $4,024.99       |
| 2024-02-11 |      0.349 | $10,000.00     | $3,492.19       |
| 2024-01-28 |      0.256 | $8,500.00      | $2,175.92       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
