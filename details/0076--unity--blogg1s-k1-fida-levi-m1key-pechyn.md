### Roster Details<br />
Team Name: UNiTY<br />
Roster: Blogg1s, K1-FiDa, Levi, M1key, Pechyn<br />
Global Rank: [76](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [55]( ../standings_europe.md)<br />
<br />
Final Rank Value:  940.3<br />
<br />
Final Rank Value (940.3) = Starting Rank Value (969.7) + Head To Head Adjustments (-29.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.385[<sup>1</sup>](#table2)
- Bounty Collected: 0.342[<sup>2</sup>](#table1)
- Opponent Network: 0.161[<sup>2</sup>](#table1)
- LAN Wins: 0.216[<sup>2</sup>](#table1)

The average of these factors is 0.276<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 969.7
- 400 + ( ( 0.276 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 969.7


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
|           32 |      383 | 2024-07-20 | Insilio         | L   | 1.000      | -            | -                | -                | -         |   -14.82 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           31 |      412 | 2024-07-19 | Enterprise      | L   | 1.000      | -            | -                | -                | -         |   -17.43 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           30 |      644 | 2024-07-15 | kONO            | W   | 1.000      | 0.371        | 0.029 (0.011)    | 0.537 (0.199)    | 0 (0.000) |    11.65 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           29 |      703 | 2024-07-11 | ALTERNATE aTTaX | W   | 1.000      | 0.371        | 0.032 (0.012)    | 0.564 (0.209)    | 0 (0.000) |    12.62 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           28 |      830 | 2024-06-18 | kONO            | L   | 0.910      | -            | -                | -                | -         |   -18.04 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           27 |      834 | 2024-06-17 | K10             | W   | 0.905      | -            | -                | -                | 0 (0.000) |     5.45 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           26 |      862 | 2024-06-16 | Verdant         | W   | 0.897      | 0.333        | 0.015 (0.004)    | 0.300 (0.090)    | 0 (0.000) |    10.73 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           25 |     1405 | 2024-06-03 | Enterprise      | L   | 0.811      | -            | -                | -                | -         |   -14.26 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           24 |     1416 | 2024-06-02 | ECLOT           | L   | 0.806      | -            | -                | -                | -         |    -8.82 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           23 |     1422 | 2024-06-02 | SINNERS         | W   | 0.805      | 0.346        | 0.038 (0.011)    | 0.721 (0.201)    | 1 (0.805) |    14.59 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           22 |     1429 | 2024-06-02 | Passion UA      | L   | 0.804      | -            | -                | -                | -         |    -9.52 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           21 |     1447 | 2024-06-01 | ECLOT           | L   | 0.799      | -            | -                | -                | -         |    -9.17 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           20 |     1484 | 2024-05-31 | SINNERS         | W   | 0.792      | 0.346        | 0.038 (0.010)    | 0.721 (0.198)    | 1 (0.792) |    15.00 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           19 |     1493 | 2024-05-31 | Johnny Speeds   | W   | 0.790      | 0.371        | 0.124 (0.036)    | 0.817 (0.239)    | 0 (0.000) |    21.20 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           18 |     1538 | 2024-05-29 | Rebels          | W   | 0.778      | 0.371        | 0.041 (0.012)    | 0.596 (0.172)    | 0 (0.000) |    14.78 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           17 |     1550 | 2024-05-28 | GL Academy      | L   | 0.773      | -            | -                | -                | -         |   -17.75 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           16 |     1620 | 2024-05-25 | Serbia          | L   | 0.751      | -            | -                | -                | -         |   -17.28 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           15 |     1646 | 2024-05-23 | SINNERS         | L   | 0.739      | -            | -                | -                | -         |   -10.25 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           14 |     1739 | 2024-05-21 | Rebels          | W   | 0.724      | 0.371        | 0.041 (0.011)    | 0.596 (0.160)    | 0 (0.000) |    13.00 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           13 |     2025 | 2024-05-13 | Johnny Speeds   | L   | 0.672      | -            | -                | -                | -         |    -2.99 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           12 |     2627 | 2024-04-18 | Johnny Speeds   | L   | 0.504      | -            | -                | -                | -         |    -2.21 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           11 |     2664 | 2024-04-17 | Viperio         | W   | 0.497      | -            | -                | -                | -         |     2.13 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           10 |     2700 | 2024-04-16 | Lilmix          | W   | 0.490      | -            | -                | -                | -         |     0.64 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            9 |     2729 | 2024-04-14 | Sashi           | L   | 0.477      | -            | -                | -                | -         |    -4.17 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            8 |     2835 | 2024-04-10 | SINNERS         | L   | 0.450      | -            | -                | -                | -         |    -5.20 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            7 |     2963 | 2024-04-06 | Sashi           | L   | 0.424      | -            | -                | -                | -         |    -3.82 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            6 |     2974 | 2024-04-05 | ECLOT           | W   | 0.417      | 0.333        | 0.065 (0.009)    | 0.502 (0.070)    | -         |     8.95 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            5 |     3020 | 2024-04-04 | Sashi           | L   | 0.411      | -            | -                | -                | -         |    -3.68 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            4 |     3099 | 2024-04-02 | Illuminar       | W   | 0.398      | -            | -                | -                | -         |     0.96 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            3 |     3351 | 2024-03-17 | SINNERS         | L   | 0.292      | -            | -                | -                | -         |    -3.80 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            2 |     3366 | 2024-03-16 | ECLOT           | L   | 0.286      | -            | -                | -                | -         |    -3.06 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            1 |     3382 | 2024-03-15 | SINNERS         | W   | 0.280      | 0.345        | 0.038 (0.004)    | 0.721 (0.070)    | 1 (0.280) |     5.19 | K1-FiDa, Levi, M1key, NIO, Pechyn     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,345.45)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-18 |      0.910 | $3,000.00      | $2,730.61       |
| 2024-06-02 |      0.806 | $3,048.00      | $2,455.54       |
| 2024-04-18 |      0.504 | $3,000.00      | $1,513.17       |
| 2024-04-06 |      0.424 | $3,000.00      | $1,271.25       |
| 2024-03-17 |      0.293 | $1,279.00      | $374.88         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
