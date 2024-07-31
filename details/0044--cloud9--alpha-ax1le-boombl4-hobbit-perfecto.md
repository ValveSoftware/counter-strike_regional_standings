### Roster Details<br />
Team Name: Cloud9<br />
Roster: alpha, Ax1Le, Boombl4, HObbit, Perfecto<br />
Global Rank: [44](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [33]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1098.3<br />
<br />
Final Rank Value (1098.3) = Starting Rank Value (1061.3) + Head To Head Adjustments (37.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.461[<sup>1</sup>](#table2)
- Bounty Collected: 0.466[<sup>2</sup>](#table1)
- Opponent Network: 0.051[<sup>2</sup>](#table1)
- LAN Wins: 0.304[<sup>2</sup>](#table1)

The average of these factors is 0.320<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1061.3
- 400 + ( ( 0.320 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1061.3


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
|           21 |     2525 | 2024-04-20 | Sashi             | L   | 0.518      | -            | -                | -                | -         |    -7.29 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           20 |     2556 | 2024-04-19 | BetBoom           | W   | 0.513      | 0.143        | 0.259 (0.019)    | 0.554 (0.041)    | -         |    13.94 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           19 |     2570 | 2024-04-19 | Sashi             | L   | 0.512      | -            | -                | -                | -         |    -7.20 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           18 |     2845 | 2024-04-10 | FaZe              | L   | 0.449      | -            | -                | -                | -         |    -0.41 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           17 |     2895 | 2024-04-08 | Wildcard          | W   | 0.443      | 0.624        | 0.006 (0.002)    | -                | 1 (0.443) |     1.01 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           16 |     2925 | 2024-04-08 | FlyQuest          | L   | 0.436      | -            | -                | -                | -         |    -5.25 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           15 |     3148 | 2024-03-28 | Vitality          | L   | 0.366      | -            | -                | -                | -         |    -0.18 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           14 |     3231 | 2024-03-23 | Natus Vincere     | W   | 0.334      | 1.000        | 1.000 (0.334)    | 0.331 (0.111)    | 1 (0.334) |    10.44 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           13 |     3255 | 2024-03-22 | G2                | W   | 0.324      | 1.000        | 1.000 (0.324)    | 0.492 (0.160)    | 1 (0.324) |    10.15 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           12 |     3266 | 2024-03-21 | Gaimin Gladiators | W   | 0.320      | 1.000        | 0.040 (0.013)    | 0.363 (0.116)    | 1 (0.320) |     4.15 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           11 |     3274 | 2024-03-21 | Spirit            | L   | 0.319      | -            | -                | -                | -         |    -0.09 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           10 |     3322 | 2024-03-18 | SAW               | W   | 0.299      | 0.143        | 0.108 (0.005)    | 0.545 (0.023)    | 1 (0.299) |     6.33 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            9 |     3340 | 2024-03-17 | Legacy            | W   | 0.293      | 0.143        | 0.119 (0.005)    | 0.562 (0.024)    | 1 (0.293) |     4.07 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            8 |     3358 | 2024-03-17 | Gaimin Gladiators | W   | 0.291      | 0.143        | 0.040 (0.002)    | 0.363 (0.015)    | 1 (0.291) |     3.73 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            7 |     3566 | 2024-03-08 | SAW               | L   | 0.233      | -            | -                | -                | -         |    -2.43 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            6 |     3632 | 2024-03-06 | Rare Atom         | W   | 0.219      | -            | -                | -                | -         |     0.36 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            5 |     3963 | 2024-02-20 | Vitality          | W   | 0.119      | 0.143        | 0.592 (0.010)    | 0.385 (0.007)    | 1 (0.119) |     3.69 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            4 |     3981 | 2024-02-19 | Apeks             | W   | 0.113      | 0.143        | -                | 0.176 (0.003)    | 1 (0.113) |     1.13 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            3 |     3990 | 2024-02-19 | PERA              | W   | 0.111      | 0.143        | 0.048 (0.001)    | 0.452 (0.007)    | 1 (0.111) |     1.16 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            2 |     4247 | 2024-02-05 | Monte             | L   | 0.018      | -            | -                | -                | -         |    -0.33 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            1 |     4267 | 2024-02-04 | MOUZ              | L   | 0.012      | -            | -                | -                | -         |    -0.00 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22,226.99)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.478 | $5,000.00      | $2,388.05       |
| 2024-03-31 |      0.387 | $45,000.00     | $17,393.19      |
| 2024-03-10 |      0.247 | $7,500.00      | $1,851.52       |
| 2024-02-11 |      0.059 | $10,000.00     | $594.23         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
