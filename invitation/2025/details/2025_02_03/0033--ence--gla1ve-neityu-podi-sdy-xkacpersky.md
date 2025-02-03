### Roster Details<br />
Team Name: ENCE<br />
Roster: gla1ve, Neityu, podi, sdy, xKacpersky<br />
Global Rank: [33](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [24]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  1138.2<br />
<br />
Final Rank Value (1138.2) = Starting Rank Value (1126.2) + Head To Head Adjustments (12.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.674[<sup>1</sup>](#table2)
- Bounty Collected: 0.457[<sup>2</sup>](#table1)
- Opponent Network: 0.124[<sup>2</sup>](#table1)
- LAN Wins: 0.242[<sup>2</sup>](#table1)

The average of these factors is 0.374<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1126.2
- 400 + ( ( 0.374 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 1126.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |      338 | 2025-01-15 | Falcons        | L   | 1.000      | -            | -                | -                | -         |    -1.44 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           21 |      516 | 2024-12-15 | Spirit Academy | L   | 0.866      | -            | -                | -                | -         |   -16.57 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           20 |      529 | 2024-12-14 | AMKAL          | W   | 0.861      | 0.435        | 0.040 (0.015)    | 0.274 (0.103)    | 0 (0.000) |     3.88 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           19 |      580 | 2024-12-12 | Endpoint       | W   | 0.846      | 0.435        | 0.026 (0.010)    | 0.463 (0.170)    | 0 (0.000) |     3.17 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           18 |      925 | 2024-11-24 | Monte          | W   | 0.726      | 0.354        | 0.077 (0.020)    | 0.635 (0.163)    | 0 (0.000) |     8.38 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           17 |      947 | 2024-11-23 | Zero Tenacity  | W   | 0.720      | 0.354        | 0.078 (0.020)    | 0.715 (0.182)    | 0 (0.000) |     7.80 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           16 |     1262 | 2024-11-11 | 500            | L   | 0.639      | -            | -                | -                | -         |   -13.73 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           15 |     1302 | 2024-11-09 | moneyF         | W   | 0.626      | 0.354        | 0.005 (0.001)    | 0.639 (0.142)    | 0 (0.000) |     3.89 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           14 |     1654 | 2024-10-20 | Falcons        | W   | 0.494      | 0.589        | 0.923 (0.268)    | 0.627 (0.182)    | 1 (0.494) |    14.89 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           13 |     1688 | 2024-10-19 | The MongolZ    | W   | 0.486      | 0.589        | 1.000 (0.286)    | 0.716 (0.205)    | 1 (0.486) |    15.08 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           12 |     1718 | 2024-10-18 | 9z             | W   | 0.480      | 0.589        | 0.051 (0.014)    | 0.168 (0.047)    | 1 (0.480) |     3.90 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           11 |     1743 | 2024-10-17 | Falcons        | L   | 0.473      | -            | -                | -                | -         |    -0.55 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           10 |     1751 | 2024-10-17 | 9z             | W   | 0.472      | 0.589        | 0.051 (0.014)    | 0.168 (0.047)    | 1 (0.472) |     3.85 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            9 |     2779 | 2024-09-13 | ATOX           | L   | 0.247      | -            | -                | -                | -         |    -3.06 | gla1ve, Goofy, Kylar, podi, sdy       |
|            8 |     2814 | 2024-09-12 | RED Canids     | L   | 0.240      | -            | -                | -                | -         |    -4.44 | gla1ve, Goofy, Kylar, podi, sdy       |
|            7 |     2878 | 2024-09-10 | Liquid         | L   | 0.226      | -            | -                | -                | -         |    -0.39 | gla1ve, Goofy, Kylar, podi, sdy       |
|            6 |     3161 | 2024-08-30 | Young Ninjas   | L   | 0.153      | -            | -                | -                | -         |    -4.47 | gla1ve, Goofy, Kylar, podi, sdy       |
|            5 |     3496 | 2024-08-23 | Monte          | L   | 0.105      | -            | -                | -                | -         |    -2.16 | gla1ve, Goofy, Kylar, podi, sdy       |
|            4 |     3513 | 2024-08-22 | ex-Enterprise  | W   | 0.100      | 0.143        | 0.010 (0.000)    | 0.142 (0.002)    | 0 (0.000) |     0.48 | gla1ve, Goofy, Kylar, podi, sdy       |
|            3 |     3551 | 2024-08-21 | UNiTY          | L   | 0.093      | -            | -                | -                | -         |    -2.28 | gla1ve, Goofy, Kylar, podi, sdy       |
|            2 |     3603 | 2024-08-21 | Iberian Soul   | L   | 0.091      | -            | -                | -                | -         |    -2.21 | gla1ve, Goofy, Kylar, podi, sdy       |
|            1 |     3647 | 2024-08-19 | kONO           | L   | 0.080      | -            | -                | -                | -         |    -1.98 | gla1ve, Goofy, Kylar, podi, sdy       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($61,949.12)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.33) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.867 | $5,000.00      | $4,332.95       |
| 2024-11-24 |      0.726 | $9,000.00      | $6,532.98       |
| 2024-11-12 |      0.646 | $1,000.00      | $646.32         |
| 2024-10-20 |      0.494 | $100,000.00    | $49,361.34      |
| 2024-09-22 |      0.307 | $3,500.00      | $1,075.52       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
