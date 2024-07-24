### Roster Details<br />
Team Name: UNiTY<br />
Roster: Blogg1s, K1-FiDa, Levi, M1key, Pechyn<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [75](../standings_global.md)<br />
Regional Rank: [52]( ../standings_europe.md)<br />
Final Rank Value:  956.7<br />
<br />
Final Rank Value (956.7) = Starting Rank Value (997.3) + Head To Head Adjustments (-40.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.402[<sup>1</sup>](#table2)
- Bounty Collected: 0.358[<sup>2</sup>](#table1)
- Opponent Network: 0.182[<sup>2</sup>](#table1)
- LAN Wins: 0.238[<sup>2</sup>](#table1)

The average of these factors is 0.295<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 997.3
- 400 + ( ( 0.295 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 997.3


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
|           32 |      141 | 2024-07-20 | Insilio         | L   | 1.000      | -            | -                | -                | -         |   -15.13 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           31 |      170 | 2024-07-19 | Enterprise      | L   | 1.000      | -            | -                | -                | -         |   -17.84 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           30 |      402 | 2024-07-15 | kONO            | W   | 1.000      | 0.371        | 0.036 (0.013)    | 0.559 (0.207)    | 0 (0.000) |    11.41 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           29 |      461 | 2024-07-11 | ALTERNATE aTTaX | W   | 1.000      | 0.371        | 0.041 (0.015)    | 0.638 (0.236)    | 0 (0.000) |    11.99 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           28 |      588 | 2024-06-18 | kONO            | L   | 0.957      | -            | -                | -                | -         |   -19.13 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           27 |      592 | 2024-06-17 | K10             | W   | 0.952      | -            | -                | -                | 0 (0.000) |     5.33 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           26 |      620 | 2024-06-16 | Verdant         | W   | 0.944      | 0.333        | 0.019 (0.006)    | 0.336 (0.106)    | 0 (0.000) |    10.52 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           25 |     1163 | 2024-06-03 | Enterprise      | L   | 0.858      | -            | -                | -                | -         |   -15.39 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           24 |     1174 | 2024-06-02 | ECLOT           | L   | 0.853      | -            | -                | -                | -         |    -9.27 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           23 |     1180 | 2024-06-02 | SINNERS         | W   | 0.852      | 0.346        | 0.048 (0.014)    | 0.769 (0.227)    | 1 (0.852) |    14.89 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           22 |     1187 | 2024-06-02 | Passion UA      | L   | 0.851      | -            | -                | -                | -         |   -10.88 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           21 |     1205 | 2024-06-01 | ECLOT           | L   | 0.846      | -            | -                | -                | -         |    -9.71 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           20 |     1242 | 2024-05-31 | SINNERS         | W   | 0.839      | 0.346        | 0.048 (0.014)    | 0.769 (0.223)    | 1 (0.839) |    15.32 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           19 |     1251 | 2024-05-31 | Johnny Speeds   | W   | 0.838      | 0.371        | 0.154 (0.048)    | 0.858 (0.266)    | 0 (0.000) |    22.43 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           18 |     1296 | 2024-05-29 | Rebels          | W   | 0.825      | 0.371        | 0.053 (0.016)    | 0.661 (0.202)    | 0 (0.000) |    15.62 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           17 |     1308 | 2024-05-28 | GL Academy      | L   | 0.821      | -            | -                | -                | -         |   -19.11 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           16 |     1378 | 2024-05-25 | Serbia          | L   | 0.798      | -            | -                | -                | -         |   -18.69 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           15 |     1404 | 2024-05-23 | SINNERS         | L   | 0.786      | -            | -                | -                | -         |   -11.58 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           14 |     1497 | 2024-05-21 | Rebels          | W   | 0.771      | 0.371        | 0.053 (0.015)    | 0.661 (0.189)    | 0 (0.000) |    13.71 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           13 |     1783 | 2024-05-13 | Johnny Speeds   | L   | 0.719      | -            | -                | -                | -         |    -3.22 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           12 |     2385 | 2024-04-18 | Johnny Speeds   | L   | 0.552      | -            | -                | -                | -         |    -2.43 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           11 |     2422 | 2024-04-17 | Viperio         | W   | 0.545      | -            | -                | -                | -         |     2.11 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           10 |     2458 | 2024-04-16 | Lilmix          | W   | 0.538      | -            | -                | -                | -         |     0.61 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            9 |     2487 | 2024-04-14 | Sashi           | L   | 0.524      | -            | -                | -                | -         |    -5.15 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            8 |     2593 | 2024-04-10 | SINNERS         | L   | 0.498      | -            | -                | -                | -         |    -6.01 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            7 |     2721 | 2024-04-06 | Sashi           | L   | 0.471      | -            | -                | -                | -         |    -4.81 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            6 |     2732 | 2024-04-05 | ECLOT           | W   | 0.465      | 0.333        | 0.084 (0.013)    | 0.510 (0.079)    | -         |    10.02 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            5 |     2778 | 2024-04-04 | Sashi           | L   | 0.458      | -            | -                | -                | -         |    -4.67 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            4 |     2857 | 2024-04-02 | Illuminar       | W   | 0.445      | -            | -                | -                | -         |     0.94 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            3 |     3109 | 2024-03-17 | SINNERS         | L   | 0.339      | -            | -                | -                | -         |    -4.70 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            2 |     3124 | 2024-03-16 | ECLOT           | L   | 0.333      | -            | -                | -                | -         |    -3.56 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            1 |     3140 | 2024-03-15 | SINNERS         | W   | 0.327      | 0.345        | 0.048 (0.005)    | 0.769 (0.087)    | 1 (0.327) |     5.78 | K1-FiDa, Levi, M1key, NIO, Pechyn     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,975.65)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-18 |      0.957 | $3,000.00      | $2,872.47       |
| 2024-06-02 |      0.853 | $3,048.00      | $2,599.68       |
| 2024-04-18 |      0.552 | $3,000.00      | $1,655.03       |
| 2024-04-06 |      0.471 | $3,000.00      | $1,413.11       |
| 2024-03-17 |      0.340 | $1,279.00      | $435.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
