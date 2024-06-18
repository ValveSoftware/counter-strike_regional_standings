### Roster Details<br />
Team Name: UNiTY<br />
Roster: K1-FiDa, Levi, M1key, NIO, Pechyn<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [75](../standings_global.md)<br />
Regional Rank: [54]( ../standings_europe.md)<br />
Final Rank Value:  985.3<br />
<br />
Final Rank Value (985.3) = Starting Rank Value (1008.3) + Head To Head Adjustments (-23.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.412[<sup>1</sup>](#table2)
- Bounty Collected: 0.360[<sup>2</sup>](#table1)
- Opponent Network: 0.157[<sup>2</sup>](#table1)
- LAN Wins: 0.268[<sup>2</sup>](#table1)

The average of these factors is 0.299<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1008.3
- 400 + ( ( 0.299 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1008.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |        0 | 2024-06-18 | kONO              | L   | 1.000      | -            | -                | -                | -         |   -19.14 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           30 |        4 | 2024-06-17 | EXO               | W   | 1.000      | 0.333        | 0.020 (0.007)    | 0.137 (0.046)    | 0 (0.000) |     8.15 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           29 |       32 | 2024-06-16 | Verdant           | W   | 1.000      | 0.333        | 0.013 (0.004)    | 0.308 (0.103)    | 0 (0.000) |     8.22 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           28 |      575 | 2024-06-03 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -16.83 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           27 |      586 | 2024-06-02 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |   -10.57 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           26 |      593 | 2024-06-02 | SINNERS           | W   | 1.000      | 0.346        | 0.045 (0.016)    | 0.782 (0.271)    | 1 (1.000) |    18.17 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           25 |      600 | 2024-06-02 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -13.12 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           24 |      619 | 2024-06-01 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |   -11.24 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           23 |      656 | 2024-05-31 | SINNERS           | W   | 1.000      | 0.346        | 0.045 (0.016)    | 0.782 (0.271)    | 1 (1.000) |    19.16 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           22 |      665 | 2024-05-31 | Johnny Speeds     | W   | 1.000      | 0.371        | 0.118 (0.044)    | 0.507 (0.188)    | 0 (0.000) |    25.02 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           21 |      710 | 2024-05-29 | Rebels            | W   | 1.000      | 0.371        | 0.054 (0.020)    | 0.450 (0.167)    | 0 (0.000) |    21.08 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           20 |      722 | 2024-05-28 | GL Academy        | L   | 1.000      | -            | -                | -                | -         |   -22.34 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           19 |      792 | 2024-05-25 | ex-iNation        | L   | 1.000      | -            | -                | -                | -         |   -23.17 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           18 |      818 | 2024-05-23 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -13.87 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           17 |      911 | 2024-05-21 | Rebels            | W   | 1.000      | 0.371        | 0.054 (0.020)    | 0.450 (0.167)    | 0 (0.000) |    20.03 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           16 |     1197 | 2024-05-13 | Johnny Speeds     | L   | 0.962      | -            | -                | -                | -         |    -5.70 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           15 |     1799 | 2024-04-18 | Johnny Speeds     | L   | 0.794      | -            | -                | -                | -         |    -4.78 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           14 |     1836 | 2024-04-17 | Viperio           | W   | 0.787      | -            | -                | -                | 0 (0.000) |     2.93 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           13 |     1872 | 2024-04-16 | Lilmix            | W   | 0.780      | 0.333        | 0.030 (0.008)    | -                | 0 (0.000) |     8.25 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           12 |     1901 | 2024-04-14 | Sashi             | L   | 0.767      | -            | -                | -                | -         |    -8.33 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           11 |     2007 | 2024-04-10 | SINNERS           | L   | 0.740      | -            | -                | -                | -         |    -7.61 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           10 |     2135 | 2024-04-06 | Sashi             | L   | 0.714      | -            | -                | -                | -         |    -8.25 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            9 |     2146 | 2024-04-05 | ECLOT             | W   | 0.707      | 0.333        | 0.107 (0.025)    | 0.478 (0.113)    | -         |    15.96 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            8 |     2192 | 2024-04-04 | Sashi             | L   | 0.701      | -            | -                | -                | -         |    -8.12 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            7 |     2271 | 2024-04-02 | Illuminar         | W   | 0.688      | 0.333        | -                | 0.399 (0.091)    | -         |     7.12 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            6 |     2524 | 2024-03-17 | SINNERS           | L   | 0.582      | -            | -                | -                | -         |    -7.36 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            5 |     2539 | 2024-03-16 | ECLOT             | L   | 0.576      | -            | -                | -                | -         |    -5.55 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            4 |     2555 | 2024-03-15 | SINNERS           | W   | 0.570      | 0.345        | 0.045 (0.009)    | 0.782 (0.154)    | 1 (0.570) |    10.71 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            3 |     4080 | 2024-01-13 | Gaimin Gladiators | L   | 0.155      | -            | -                | -                | -         |    -1.28 | Levi, luko, M1key, NIO, Pechyn    |
|            2 |     4124 | 2024-01-12 | Comedy Club       | W   | 0.150      | -            | -                | -                | -         |     0.15 | Levi, luko, M1key, NIO, Pechyn    |
|            1 |     4247 | 2024-01-09 | Johnny Speeds     | L   | 0.129      | -            | -                | -                | -         |    -0.68 | Levi, luko, M1key, NIO, Pechyn    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,316.72)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-18 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-02 |      1.000 | $3,048.00      | $3,048.00       |
| 2024-04-18 |      0.794 | $3,000.00      | $2,382.56       |
| 2024-04-06 |      0.714 | $3,000.00      | $2,140.64       |
| 2024-03-17 |      0.583 | $1,279.00      | $745.53         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
