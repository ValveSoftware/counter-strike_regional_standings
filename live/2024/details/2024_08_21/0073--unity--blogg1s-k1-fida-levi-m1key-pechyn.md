### Roster Details<br />
Team Name: UNiTY<br />
Roster: Blogg1s, K1-FiDa, Levi, M1key, Pechyn<br />
Global Rank: [73](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_21.md)<br />
Regional Rank: [52]( ../../standings_europe_2024_08_21.md)<br />
<br />
Final Rank Value:  961.2<br />
<br />
Final Rank Value (961.2) = Starting Rank Value (945.1) + Head To Head Adjustments (16.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.398[<sup>1</sup>](#table2)
- Bounty Collected: 0.353[<sup>2</sup>](#table1)
- Opponent Network: 0.180[<sup>2</sup>](#table1)
- LAN Wins: 0.166[<sup>2</sup>](#table1)

The average of these factors is 0.275<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 945.1
- 400 + ( ( 0.275 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 945.1


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
|           38 |        5 | 2024-08-21 | ENCE            | W   | 1.000      | 0.143        | 0.157 (0.022)    | -                | 0 (0.000) |    25.85 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           37 |       42 | 2024-08-21 | Monte           | L   | 1.000      | -            | -                | -                | -         |   -13.45 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           36 |      276 | 2024-08-13 | Revenant        | L   | 1.000      | -            | -                | -                | -         |   -17.11 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           35 |      345 | 2024-08-11 | Revenant        | W   | 1.000      | 0.333        | 0.045 (0.015)    | 0.514 (0.171)    | 0 (0.000) |    13.59 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           34 |      399 | 2024-08-09 | kONO            | W   | 1.000      | 0.333        | 0.029 (0.010)    | 0.577 (0.192)    | 0 (0.000) |    12.09 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           33 |      510 | 2024-08-06 | NAVI Junior     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.03 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           32 |     1091 | 2024-07-20 | Insilio         | L   | 0.984      | -            | -                | -                | -         |   -15.44 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           31 |     1120 | 2024-07-19 | Enterprise      | L   | 0.979      | -            | -                | -                | -         |   -17.48 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           30 |     1352 | 2024-07-15 | kONO            | W   | 0.950      | 0.371        | 0.029 (0.010)    | 0.577 (0.203)    | 0 (0.000) |    11.66 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           29 |     1411 | 2024-07-11 | ALTERNATE aTTaX | W   | 0.924      | 0.371        | 0.035 (0.012)    | 0.565 (0.193)    | 0 (0.000) |    11.94 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           28 |     1538 | 2024-06-18 | kONO            | L   | 0.770      | -            | -                | -                | -         |   -14.74 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           27 |     1542 | 2024-06-17 | K10             | W   | 0.765      | -            | -                | -                | 0 (0.000) |     4.40 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           26 |     1570 | 2024-06-16 | Verdant         | W   | 0.757      | 0.333        | -                | 0.310 (0.078)    | -         |     9.38 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           25 |     2113 | 2024-06-03 | Enterprise      | L   | 0.671      | -            | -                | -                | -         |   -12.12 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           24 |     2124 | 2024-06-02 | ECLOT           | L   | 0.666      | -            | -                | -                | -         |    -5.03 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           23 |     2130 | 2024-06-02 | SINNERS         | W   | 0.665      | 0.346        | 0.075 (0.017)    | 1.000 (0.230)    | 1 (0.665) |    14.20 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           22 |     2137 | 2024-06-02 | Passion UA      | L   | 0.664      | -            | -                | -                | -         |    -7.74 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           21 |     2155 | 2024-06-01 | ECLOT           | L   | 0.659      | -            | -                | -                | -         |    -5.05 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           20 |     2192 | 2024-05-31 | SINNERS         | W   | 0.652      | 0.346        | 0.075 (0.017)    | 1.000 (0.226)    | 1 (0.652) |    14.57 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           19 |     2201 | 2024-05-31 | Johnny Speeds   | W   | 0.650      | 0.371        | 0.120 (0.029)    | 1.000 (0.241)    | -         |    16.94 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           18 |     2246 | 2024-05-29 | Rebels          | W   | 0.638      | 0.371        | 0.035 (0.008)    | 0.594 (0.140)    | -         |    11.43 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           17 |     2258 | 2024-05-28 | GL Academy      | L   | 0.633      | -            | -                | -                | -         |   -15.17 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           16 |     2328 | 2024-05-25 | Serbia          | L   | 0.611      | -            | -                | -                | -         |   -14.31 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           15 |     2354 | 2024-05-23 | SINNERS         | L   | 0.599      | -            | -                | -                | -         |    -5.74 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           14 |     2447 | 2024-05-21 | Rebels          | W   | 0.584      | 0.371        | 0.035 (0.007)    | 0.594 (0.128)    | -         |     9.93 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           13 |     2733 | 2024-05-13 | Johnny Speeds   | L   | 0.532      | -            | -                | -                | -         |    -2.85 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           12 |     3335 | 2024-04-18 | Johnny Speeds   | L   | 0.364      | -            | -                | -                | -         |    -1.98 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           11 |     3372 | 2024-04-17 | Viperio         | W   | 0.357      | -            | -                | -                | -         |     1.52 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           10 |     3408 | 2024-04-16 | Lilmix          | W   | 0.350      | -            | -                | -                | -         |     0.50 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            9 |     3437 | 2024-04-14 | Sashi           | L   | 0.337      | -            | -                | -                | -         |    -2.95 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            8 |     3543 | 2024-04-10 | SINNERS         | L   | 0.310      | -            | -                | -                | -         |    -2.08 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            7 |     3671 | 2024-04-06 | Sashi           | L   | 0.284      | -            | -                | -                | -         |    -2.52 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            6 |     3682 | 2024-04-05 | ECLOT           | W   | 0.277      | -            | -                | -                | -         |     7.12 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            5 |     3728 | 2024-04-04 | Sashi           | L   | 0.271      | -            | -                | -                | -         |    -2.38 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            4 |     3807 | 2024-04-02 | Illuminar       | W   | 0.258      | -            | -                | -                | -         |     0.66 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            3 |     4059 | 2024-03-17 | SINNERS         | L   | 0.152      | -            | -                | -                | -         |    -1.07 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            2 |     4074 | 2024-03-16 | ECLOT           | L   | 0.146      | -            | -                | -                | -         |    -0.88 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            1 |     4090 | 2024-03-15 | SINNERS         | W   | 0.140      | -            | -                | -                | 1 (0.140) |     3.44 | K1-FiDa, Levi, M1key, NIO, Pechyn     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,479.91)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-13 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-18 |      0.770 | $3,000.00      | $2,310.66       |
| 2024-06-02 |      0.666 | $3,048.00      | $2,028.88       |
| 2024-04-18 |      0.364 | $3,000.00      | $1,093.22       |
| 2024-04-06 |      0.284 | $3,000.00      | $851.30         |
| 2024-03-17 |      0.153 | $1,279.00      | $195.84         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
