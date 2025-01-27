### Roster Details<br />
Team Name: OG<br />
Roster: Buzz, Chr1zN, F1KU, M1key, MoDo<br />
Global Rank: [75](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [52]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  949.1<br />
<br />
Final Rank Value (949.1) = Starting Rank Value (923.3) + Head To Head Adjustments (25.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.564[<sup>1</sup>](#table2)
- Bounty Collected: 0.406[<sup>2</sup>](#table1)
- Opponent Network: 0.101[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.268<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 923.3
- 400 + ( ( 0.268 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 923.3


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
|           36 |     1160 | 2024-11-10 | Johnny Speeds   | L   | 0.681      | -            | -                | -                | -         |    -8.03 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           35 |     1214 | 2024-11-07 | NAVI Junior     | L   | 0.660      | -            | -                | -                | -         |    -6.97 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           34 |     1219 | 2024-11-07 | Sashi           | L   | 0.659      | -            | -                | -                | -         |    -9.39 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           33 |     1230 | 2024-11-06 | BetBoom         | W   | 0.654      | 0.426        | 0.227 (0.063)    | 0.524 (0.146)    | 0 (0.000) |    14.72 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           32 |     1249 | 2024-11-05 | los kogutos     | W   | 0.647      | 0.384        | 0.070 (0.018)    | 0.808 (0.201)    | 0 (0.000) |    12.04 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           31 |     1291 | 2024-11-03 | 3DMAX           | L   | 0.633      | -            | -                | -                | -         |    -2.11 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           30 |     1312 | 2024-11-02 | Falcons         | L   | 0.627      | -            | -                | -                | -         |    -0.27 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           29 |     1336 | 2024-11-01 | Johnny Speeds   | L   | 0.620      | -            | -                | -                | -         |    -7.41 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           28 |     1386 | 2024-10-30 | 9INE            | L   | 0.605      | -            | -                | -                | -         |    -8.26 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           27 |     1401 | 2024-10-29 | Zero Tenacity   | W   | 0.600      | 0.426        | 0.081 (0.021)    | 0.719 (0.184)    | 0 (0.000) |    11.48 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           26 |     1404 | 2024-10-29 | Wu-Tang         | W   | 0.599      | -            | -                | -                | 0 (0.000) |     0.81 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           25 |     1413 | 2024-10-28 | 500             | L   | 0.593      | -            | -                | -                | -         |    -9.39 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           24 |     1464 | 2024-10-26 | BIG             | W   | 0.579      | 0.477        | 0.298 (0.082)    | 0.492 (0.136)    | 0 (0.000) |    16.47 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           23 |     1480 | 2024-10-25 | Virtus.pro      | W   | 0.573      | 0.477        | 0.159 (0.043)    | 0.386 (0.105)    | 0 (0.000) |    15.82 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           22 |     1522 | 2024-10-21 | 3DMAX           | L   | 0.548      | -            | -                | -                | -         |    -1.71 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           21 |     1525 | 2024-10-21 | Virtus.pro      | W   | 0.546      | 0.477        | 0.159 (0.041)    | 0.386 (0.101)    | 0 (0.000) |    15.35 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           20 |     1742 | 2024-10-10 | Spirit Academy  | L   | 0.473      | -            | -                | -                | -         |    -5.08 | Buzz, Chr1zN, F1KU, MoDo, spooke |
|           19 |     2177 | 2024-09-27 | GameAgents      | L   | 0.387      | -            | -                | -                | -         |    -8.28 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           18 |     2187 | 2024-09-27 | B8              | L   | 0.386      | -            | -                | -                | -         |    -3.19 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           17 |     2633 | 2024-09-14 | Sashi           | L   | 0.299      | -            | -                | -                | -         |    -3.71 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           16 |     2704 | 2024-09-12 | Sampi           | W   | 0.285      | 0.384        | 0.040 (0.004)    | 0.252 (0.028)    | 0 (0.000) |     4.87 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           15 |     3030 | 2024-08-31 | ALTERNATE aTTaX | L   | 0.206      | -            | -                | -                | -         |    -1.91 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           14 |     3049 | 2024-08-30 | Endpoint        | W   | 0.199      | 0.384        | 0.029 (0.002)    | 0.489 (0.037)    | 0 (0.000) |     2.32 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           13 |     3257 | 2024-08-26 | fnatic          | L   | 0.174      | -            | -                | -                | -         |    -1.42 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           12 |     3272 | 2024-08-26 | Falcons         | L   | 0.173      | -            | -                | -                | -         |    -2.70 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           11 |     3318 | 2024-08-25 | FaZe            | L   | 0.167      | -            | -                | -                | -         |    -0.03 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           10 |     3357 | 2024-08-23 | AMKAL           | W   | 0.155      | 0.535        | 0.040 (0.003)    | 0.276 (0.023)    | 0 (0.000) |     1.70 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            9 |     3365 | 2024-08-23 | Sashi           | L   | 0.153      | -            | -                | -                | -         |    -1.89 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            8 |     3371 | 2024-08-23 | Passion UA      | L   | 0.152      | -            | -                | -                | -         |    -1.04 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            7 |     3409 | 2024-08-22 | Rebels          | W   | 0.145      | -            | -                | -                | -         |     1.72 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            6 |     3431 | 2024-08-21 | Falcons         | W   | 0.140      | 0.535        | 0.872 (0.065)    | 0.627 (0.047)    | -         |     4.37 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            5 |     3444 | 2024-08-21 | Zero Tenacity   | W   | 0.139      | -            | -                | -                | -         |     2.83 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            4 |     3480 | 2024-08-21 | SAW             | L   | 0.138      | -            | -                | -                | -         |    -0.51 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            3 |     3624 | 2024-08-15 | B8              | W   | 0.101      | -            | -                | -                | -         |     2.39 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            2 |     3630 | 2024-08-15 | PARIVISION      | W   | 0.100      | -            | -                | -                | -         |     1.26 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            1 |     3635 | 2024-08-15 | ARCRED          | W   | 0.100      | -            | -                | -                | -         |     0.94 | Buzz, Chr1zN, F1KU, MoDo, Nexius |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($34,388.91)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.634 | $50,000.00     | $31,697.55      |
| 2024-09-14 |      0.300 | $2,000.00      | $600.70         |
| 2024-08-25 |      0.167 | $12,500.00     | $2,090.66       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
