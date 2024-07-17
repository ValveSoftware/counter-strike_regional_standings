### Roster Details<br />
Team Name: UNiTY<br />
Roster: Blogg1s, K1-FiDa, Levi, M1key, Pechyn<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [63](../standings_global.md)<br />
Regional Rank: [45]( ../standings_europe.md)<br />
Final Rank Value:  1037.5<br />
<br />
Final Rank Value (1037.5) = Starting Rank Value (1053.8) + Head To Head Adjustments (-16.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.415[<sup>1</sup>](#table2)
- Bounty Collected: 0.367[<sup>2</sup>](#table1)
- Opponent Network: 0.185[<sup>2</sup>](#table1)
- LAN Wins: 0.251[<sup>2</sup>](#table1)

The average of these factors is 0.304<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1053.8
- 400 + ( ( 0.304 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1053.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      114 | 2024-07-15 | kONO            | W   | 1.000      | 0.371        | 0.042 (0.016)    | 0.595 (0.220)    | 0 (0.000) |    10.94 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           29 |      173 | 2024-07-11 | ALTERNATE aTTaX | W   | 1.000      | 0.371        | 0.050 (0.018)    | 0.644 (0.239)    | 0 (0.000) |    11.26 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           28 |      300 | 2024-06-18 | kONO            | L   | 1.000      | -            | -                | -                | -         |   -20.31 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           27 |      304 | 2024-06-17 | EXO             | W   | 0.999      | -            | -                | -                | 0 (0.000) |     6.82 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           26 |      332 | 2024-06-16 | Verdant         | W   | 0.991      | 0.333        | -                | 0.316 (0.104)    | 0 (0.000) |     8.13 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           25 |      875 | 2024-06-03 | Enterprise      | L   | 0.905      | -            | -                | -                | -         |   -16.61 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           24 |      886 | 2024-06-02 | ECLOT           | L   | 0.900      | -            | -                | -                | -         |    -9.65 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           23 |      892 | 2024-06-02 | SINNERS         | W   | 0.899      | 0.346        | 0.058 (0.018)    | 0.744 (0.231)    | 1 (0.899) |    15.41 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           22 |      899 | 2024-06-02 | Passion UA      | L   | 0.898      | -            | -                | -                | -         |   -13.45 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           21 |      917 | 2024-06-01 | ECLOT           | L   | 0.894      | -            | -                | -                | -         |   -10.23 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           20 |      954 | 2024-05-31 | SINNERS         | W   | 0.887      | 0.346        | 0.058 (0.018)    | 0.744 (0.228)    | 1 (0.887) |    15.84 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           19 |      963 | 2024-05-31 | Johnny Speeds   | W   | 0.885      | 0.371        | 0.162 (0.053)    | 0.852 (0.279)    | 0 (0.000) |    23.80 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           18 |     1008 | 2024-05-29 | Rebels          | W   | 0.872      | 0.371        | 0.052 (0.017)    | 0.575 (0.186)    | 0 (0.000) |    15.94 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           17 |     1020 | 2024-05-28 | GL Academy      | L   | 0.868      | -            | -                | -                | -         |   -20.76 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           16 |     1090 | 2024-05-25 | Serbia          | L   | 0.846      | -            | -                | -                | -         |   -20.29 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           15 |     1116 | 2024-05-23 | SINNERS         | L   | 0.834      | -            | -                | -                | -         |   -12.69 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           14 |     1209 | 2024-05-21 | Rebels          | W   | 0.818      | 0.371        | 0.052 (0.016)    | 0.575 (0.174)    | 0 (0.000) |    13.84 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           13 |     1495 | 2024-05-13 | Johnny Speeds   | L   | 0.767      | -            | -                | -                | -         |    -3.34 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           12 |     2097 | 2024-04-18 | Johnny Speeds   | L   | 0.599      | -            | -                | -                | -         |    -2.53 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           11 |     2134 | 2024-04-17 | Viperio         | W   | 0.592      | -            | -                | -                | -         |     1.91 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           10 |     2170 | 2024-04-16 | Lilmix          | W   | 0.585      | 0.333        | 0.035 (0.007)    | -                | -         |     6.22 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            9 |     2199 | 2024-04-14 | Sashi           | L   | 0.572      | -            | -                | -                | -         |    -6.85 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            8 |     2305 | 2024-04-10 | SINNERS         | L   | 0.545      | -            | -                | -                | -         |    -6.38 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            7 |     2433 | 2024-04-06 | Sashi           | L   | 0.518      | -            | -                | -                | -         |    -6.51 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            6 |     2444 | 2024-04-05 | ECLOT           | W   | 0.512      | 0.333        | 0.103 (0.018)    | 0.551 (0.094)    | -         |    11.28 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            5 |     2490 | 2024-04-04 | Sashi           | L   | 0.505      | -            | -                | -                | -         |    -6.38 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            4 |     2569 | 2024-04-02 | Illuminar       | W   | 0.492      | -            | -                | -                | -         |     0.79 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            3 |     2821 | 2024-03-17 | SINNERS         | L   | 0.386      | -            | -                | -                | -         |    -5.29 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            2 |     2836 | 2024-03-16 | ECLOT           | L   | 0.381      | -            | -                | -                | -         |    -3.90 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            1 |     2852 | 2024-03-15 | SINNERS         | W   | 0.374      | 0.345        | 0.058 (0.007)    | 0.744 (0.096)    | 1 (0.374) |     6.68 | K1-FiDa, Levi, M1key, NIO, Pechyn     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,590.87)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-18 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-02 |      0.900 | $3,048.00      | $2,743.62       |
| 2024-04-18 |      0.599 | $3,000.00      | $1,796.71       |
| 2024-04-06 |      0.518 | $3,000.00      | $1,554.79       |
| 2024-03-17 |      0.388 | $1,279.00      | $495.76         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
