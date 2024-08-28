### Roster Details<br />
Team Name: UNiTY<br />
Roster: Blogg1s, K1-FiDa, Levi, M1key, Pechyn<br />
Global Rank: [64](../../standings_global_2024_08_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_28.md)<br />
Regional Rank: [46]( ../../standings_europe_2024_08_28.md)<br />
<br />
Final Rank Value:  976.8<br />
<br />
Final Rank Value (976.8) = Starting Rank Value (930.3) + Head To Head Adjustments (46.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.397[<sup>1</sup>](#table2)
- Bounty Collected: 0.354[<sup>2</sup>](#table1)
- Opponent Network: 0.179[<sup>2</sup>](#table1)
- LAN Wins: 0.140[<sup>2</sup>](#table1)

The average of these factors is 0.268<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 930.3
- 400 + ( ( 0.268 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 930.3


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
|           40 |      236 | 2024-08-23 | KOI             | W   | 1.000      | 0.143        | 0.049 (0.007)    | -                | 0 (0.000) |    15.95 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           39 |      280 | 2024-08-22 | Rhyno           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.94 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           38 |      300 | 2024-08-21 | ENCE            | W   | 1.000      | 0.143        | 0.156 (0.022)    | -                | 0 (0.000) |    25.24 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           37 |      337 | 2024-08-21 | Monte           | L   | 1.000      | -            | -                | -                | -         |   -12.70 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           36 |      571 | 2024-08-13 | Revenant        | L   | 1.000      | -            | -                | -                | -         |   -16.33 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           35 |      640 | 2024-08-11 | Revenant        | W   | 1.000      | 0.333        | 0.047 (0.016)    | 0.576 (0.192)    | 0 (0.000) |    14.46 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           34 |      694 | 2024-08-09 | kONO            | W   | 1.000      | 0.333        | 0.029 (0.010)    | 0.548 (0.183)    | 0 (0.000) |    12.32 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           33 |      805 | 2024-08-06 | NAVI Junior     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.08 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           32 |     1386 | 2024-07-20 | Insilio         | L   | 0.939      | -            | -                | -                | -         |   -14.62 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           31 |     1415 | 2024-07-19 | Enterprise      | L   | 0.933      | -            | -                | -                | -         |   -16.27 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           30 |     1647 | 2024-07-15 | kONO            | W   | 0.905      | 0.371        | 0.029 (0.010)    | 0.548 (0.184)    | 0 (0.000) |    11.37 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           29 |     1706 | 2024-07-11 | ALTERNATE aTTaX | W   | 0.878      | 0.371        | 0.035 (0.011)    | 0.707 (0.230)    | -         |    12.93 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           28 |     1833 | 2024-06-18 | kONO            | L   | 0.725      | -            | -                | -                | -         |   -13.65 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           27 |     1837 | 2024-06-17 | K10             | W   | 0.719      | -            | -                | -                | -         |     4.29 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           26 |     1865 | 2024-06-16 | Verdant         | W   | 0.711      | 0.333        | -                | 0.363 (0.086)    | -         |     8.94 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           25 |     2408 | 2024-06-03 | Enterprise      | L   | 0.625      | -            | -                | -                | -         |   -10.87 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           24 |     2419 | 2024-06-02 | ECLOT           | L   | 0.620      | -            | -                | -                | -         |    -4.48 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           23 |     2425 | 2024-06-02 | SINNERS         | W   | 0.619      | 0.346        | 0.094 (0.020)    | 1.000 (0.214)    | 1 (0.619) |    13.85 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           22 |     2432 | 2024-06-02 | Passion UA      | L   | 0.618      | -            | -                | -                | -         |    -6.78 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           21 |     2450 | 2024-06-01 | ECLOT           | L   | 0.613      | -            | -                | -                | -         |    -4.47 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           20 |     2487 | 2024-05-31 | SINNERS         | W   | 0.606      | 0.346        | 0.094 (0.020)    | 1.000 (0.210)    | 1 (0.606) |    14.11 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           19 |     2496 | 2024-05-31 | Johnny Speeds   | W   | 0.605      | 0.371        | 0.119 (0.027)    | 0.985 (0.221)    | -         |    15.50 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           18 |     2541 | 2024-05-29 | Rebels          | W   | 0.592      | 0.371        | 0.034 (0.007)    | 0.640 (0.140)    | -         |    10.63 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           17 |     2553 | 2024-05-28 | GL Academy      | L   | 0.588      | -            | -                | -                | -         |   -14.02 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           16 |     2623 | 2024-05-25 | Serbia          | L   | 0.566      | -            | -                | -                | -         |   -13.08 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           15 |     2649 | 2024-05-23 | SINNERS         | L   | 0.553      | -            | -                | -                | -         |    -4.76 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           14 |     2742 | 2024-05-21 | Rebels          | W   | 0.538      | 0.371        | -                | 0.640 (0.127)    | -         |     9.22 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           13 |     3028 | 2024-05-13 | Johnny Speeds   | L   | 0.486      | -            | -                | -                | -         |    -2.83 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           12 |     3630 | 2024-04-18 | Johnny Speeds   | L   | 0.319      | -            | -                | -                | -         |    -1.89 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           11 |     3667 | 2024-04-17 | Viperio         | W   | 0.312      | -            | -                | -                | -         |     1.41 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           10 |     3703 | 2024-04-16 | Lilmix          | W   | 0.305      | -            | -                | -                | -         |     0.47 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            9 |     3732 | 2024-04-14 | Sashi           | L   | 0.292      | -            | -                | -                | -         |    -2.52 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            8 |     3838 | 2024-04-10 | SINNERS         | L   | 0.265      | -            | -                | -                | -         |    -1.61 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            7 |     3966 | 2024-04-06 | Sashi           | L   | 0.238      | -            | -                | -                | -         |    -2.08 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            6 |     3977 | 2024-04-05 | ECLOT           | W   | 0.232      | -            | -                | -                | -         |     6.00 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            5 |     4023 | 2024-04-04 | Sashi           | L   | 0.225      | -            | -                | -                | -         |    -1.95 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            4 |     4102 | 2024-04-02 | Illuminar       | W   | 0.212      | -            | -                | -                | -         |     0.58 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            3 |     4354 | 2024-03-17 | SINNERS         | L   | 0.106      | -            | -                | -                | -         |    -0.68 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            2 |     4369 | 2024-03-16 | ECLOT           | L   | 0.101      | -            | -                | -                | -         |    -0.58 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            1 |     4385 | 2024-03-15 | SINNERS         | W   | 0.094      | -            | -                | -                | 1 (0.094) |     2.38 | K1-FiDa, Levi, M1key, NIO, Pechyn     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,871.34)
- Divide that value by the 5th highest value among all rosters ($290,989.03)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-13 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-18 |      0.725 | $3,000.00      | $2,173.67       |
| 2024-06-02 |      0.620 | $3,048.00      | $1,889.69       |
| 2024-04-18 |      0.319 | $3,000.00      | $956.23         |
| 2024-04-06 |      0.238 | $3,000.00      | $714.31         |
| 2024-03-17 |      0.107 | $1,279.00      | $137.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
