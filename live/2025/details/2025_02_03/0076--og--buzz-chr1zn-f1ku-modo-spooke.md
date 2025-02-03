### Roster Details<br />
Team Name: OG<br />
Roster: Buzz, Chr1zN, F1KU, MoDo, spooke<br />
Global Rank: [76](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [54]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  927.7<br />
<br />
Final Rank Value (927.7) = Starting Rank Value (916.4) + Head To Head Adjustments (11.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.562[<sup>1</sup>](#table2)
- Bounty Collected: 0.399[<sup>2</sup>](#table1)
- Opponent Network: 0.104[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.266<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 916.4
- 400 + ( ( 0.266 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 916.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |       28 | 2025-02-01 | fnatic          | L   | 1.000      | -            | -                | -                | -         |    -9.22 | Buzz, Chr1zN, F1KU, MoDo, spooke |
|           36 |     1278 | 2024-11-10 | Johnny Speeds   | L   | 0.634      | -            | -                | -                | -         |    -7.86 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           35 |     1332 | 2024-11-07 | NAVI Junior     | L   | 0.614      | -            | -                | -                | -         |    -6.62 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           34 |     1337 | 2024-11-07 | Sashi           | L   | 0.612      | -            | -                | -                | -         |    -9.10 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           33 |     1348 | 2024-11-06 | BetBoom         | W   | 0.607      | 0.426        | 0.230 (0.060)    | 0.518 (0.134)    | 0 (0.000) |    13.39 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           32 |     1367 | 2024-11-05 | los kogutos     | W   | 0.600      | 0.384        | 0.070 (0.016)    | 0.779 (0.180)    | 0 (0.000) |    10.90 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           31 |     1409 | 2024-11-03 | 3DMAX           | L   | 0.586      | -            | -                | -                | -         |    -0.95 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           30 |     1430 | 2024-11-02 | Falcons         | L   | 0.580      | -            | -                | -                | -         |    -0.28 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           29 |     1454 | 2024-11-01 | Johnny Speeds   | L   | 0.573      | -            | -                | -                | -         |    -7.20 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           28 |     1504 | 2024-10-30 | 9INE            | L   | 0.558      | -            | -                | -                | -         |    -9.87 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           27 |     1519 | 2024-10-29 | Zero Tenacity   | W   | 0.553      | 0.426        | 0.078 (0.018)    | 0.715 (0.168)    | 0 (0.000) |    10.33 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           26 |     1522 | 2024-10-29 | Wu-Tang         | W   | 0.552      | -            | -                | -                | 0 (0.000) |     0.79 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           25 |     1531 | 2024-10-28 | 500             | L   | 0.546      | -            | -                | -                | -         |    -8.53 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           24 |     1582 | 2024-10-26 | BIG             | W   | 0.532      | 0.477        | 0.352 (0.089)    | 0.608 (0.154)    | 0 (0.000) |    15.48 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           23 |     1598 | 2024-10-25 | Virtus.pro      | W   | 0.526      | 0.477        | 0.154 (0.039)    | 0.628 (0.158)    | 0 (0.000) |    15.97 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           22 |     1640 | 2024-10-21 | 3DMAX           | L   | 0.501      | -            | -                | -                | -         |    -0.75 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           21 |     1643 | 2024-10-21 | Virtus.pro      | W   | 0.499      | 0.477        | 0.154 (0.037)    | 0.628 (0.150)    | 0 (0.000) |    15.25 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           20 |     1860 | 2024-10-10 | Spirit Academy  | L   | 0.426      | -            | -                | -                | -         |    -4.46 | Buzz, Chr1zN, F1KU, MoDo, spooke |
|           19 |     2295 | 2024-09-27 | GameAgents      | L   | 0.341      | -            | -                | -                | -         |    -7.37 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           18 |     2305 | 2024-09-27 | B8              | L   | 0.340      | -            | -                | -                | -         |    -2.79 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           17 |     2751 | 2024-09-14 | Sashi           | L   | 0.253      | -            | -                | -                | -         |    -3.35 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           16 |     2822 | 2024-09-12 | Sampi           | W   | 0.239      | 0.384        | 0.039 (0.004)    | 0.231 (0.021)    | 0 (0.000) |     3.83 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           15 |     3148 | 2024-08-31 | ALTERNATE aTTaX | L   | 0.159      | -            | -                | -                | -         |    -1.63 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           14 |     3167 | 2024-08-30 | Endpoint        | W   | 0.152      | 0.384        | 0.026 (0.002)    | 0.463 (0.027)    | 0 (0.000) |     1.72 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           13 |     3375 | 2024-08-26 | fnatic          | L   | 0.127      | -            | -                | -                | -         |    -1.11 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           12 |     3390 | 2024-08-26 | Falcons         | L   | 0.126      | -            | -                | -                | -         |    -2.20 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           11 |     3436 | 2024-08-25 | FaZe            | L   | 0.120      | -            | -                | -                | -         |    -0.02 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           10 |     3475 | 2024-08-23 | AMKAL           | W   | 0.108      | 0.535        | 0.040 (0.002)    | 0.274 (0.016)    | 0 (0.000) |     1.21 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            9 |     3483 | 2024-08-23 | Sashi           | L   | 0.106      | -            | -                | -                | -         |    -1.41 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            8 |     3489 | 2024-08-23 | Passion UA      | L   | 0.106      | -            | -                | -                | -         |    -0.83 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            7 |     3527 | 2024-08-22 | Rebels          | W   | 0.098      | -            | -                | -                | -         |     1.19 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            6 |     3549 | 2024-08-21 | Falcons         | W   | 0.093      | 0.535        | 0.923 (0.046)    | 0.627 (0.031)    | -         |     2.90 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            5 |     3562 | 2024-08-21 | Zero Tenacity   | W   | 0.093      | -            | -                | -                | -         |     1.83 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            4 |     3598 | 2024-08-21 | SAW             | L   | 0.091      | -            | -                | -                | -         |    -0.48 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            3 |     3742 | 2024-08-15 | B8              | W   | 0.054      | -            | -                | -                | -         |     1.27 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            2 |     3748 | 2024-08-15 | PARIVISION      | W   | 0.053      | -            | -                | -                | -         |     0.63 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            1 |     3753 | 2024-08-15 | ARCRED          | W   | 0.053      | -            | -                | -                | -         |     0.54 | Buzz, Chr1zN, F1KU, MoDo, Nexius |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($31,372.58)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.587 | $50,000.00     | $29,359.31      |
| 2024-09-14 |      0.254 | $2,000.00      | $507.17         |
| 2024-08-25 |      0.120 | $12,500.00     | $1,506.10       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
