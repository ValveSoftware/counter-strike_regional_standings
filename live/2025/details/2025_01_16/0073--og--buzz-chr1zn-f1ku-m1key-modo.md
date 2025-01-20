### Roster Details<br />
Team Name: OG<br />
Roster: Buzz, Chr1zN, F1KU, M1key, MoDo<br />
Global Rank: [73](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [53]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  967.9<br />
<br />
Final Rank Value (967.9) = Starting Rank Value (937.4) + Head To Head Adjustments (30.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.566[<sup>1</sup>](#table2)
- Bounty Collected: 0.408[<sup>2</sup>](#table1)
- Opponent Network: 0.111[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.271<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 937.4
- 400 + ( ( 0.271 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 937.4


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
|           36 |      971 | 2024-11-10 | Johnny Speeds   | L   | 0.753      | -            | -                | -                | -         |    -8.86 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           35 |     1025 | 2024-11-07 | NAVI Junior     | L   | 0.732      | -            | -                | -                | -         |    -7.96 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           34 |     1030 | 2024-11-07 | Sashi           | L   | 0.731      | -            | -                | -                | -         |   -10.77 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           33 |     1041 | 2024-11-06 | BetBoom         | W   | 0.726      | 0.426        | 0.112 (0.035)    | 0.425 (0.131)    | 0 (0.000) |    15.06 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           32 |     1060 | 2024-11-05 | los kogutos     | W   | 0.719      | 0.384        | 0.072 (0.020)    | 0.843 (0.233)    | 0 (0.000) |    12.66 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           31 |     1102 | 2024-11-03 | 3DMAX           | L   | 0.704      | -            | -                | -                | -         |    -2.24 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           30 |     1123 | 2024-11-02 | Falcons         | L   | 0.699      | -            | -                | -                | -         |    -0.30 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           29 |     1147 | 2024-11-01 | Johnny Speeds   | L   | 0.691      | -            | -                | -                | -         |    -8.32 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           28 |     1197 | 2024-10-30 | 9INE            | L   | 0.677      | -            | -                | -                | -         |    -9.17 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           27 |     1212 | 2024-10-29 | Zero Tenacity   | W   | 0.671      | 0.426        | 0.084 (0.024)    | 0.572 (0.164)    | 0 (0.000) |    12.57 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           26 |     1215 | 2024-10-29 | Wu-Tang         | W   | 0.671      | -            | -                | -                | 0 (0.000) |     0.81 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           25 |     1224 | 2024-10-28 | 500             | L   | 0.665      | -            | -                | -                | -         |   -10.57 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           24 |     1275 | 2024-10-26 | BIG             | W   | 0.650      | 0.477        | 0.257 (0.080)    | 0.491 (0.152)    | 0 (0.000) |    18.42 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           23 |     1291 | 2024-10-25 | Virtus.pro      | W   | 0.644      | 0.477        | 0.133 (0.041)    | 0.381 (0.117)    | 0 (0.000) |    17.87 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           22 |     1333 | 2024-10-21 | 3DMAX           | L   | 0.619      | -            | -                | -                | -         |    -1.83 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           21 |     1336 | 2024-10-21 | Virtus.pro      | W   | 0.618      | 0.477        | 0.133 (0.039)    | 0.381 (0.112)    | 0 (0.000) |    17.46 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           20 |     1553 | 2024-10-10 | Spirit Academy  | L   | 0.545      | -            | -                | -                | -         |    -5.89 | Buzz, Chr1zN, F1KU, MoDo, spooke |
|           19 |     1988 | 2024-09-27 | Apogee          | L   | 0.459      | -            | -                | -                | -         |    -9.70 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           18 |     1998 | 2024-09-27 | B8              | L   | 0.458      | -            | -                | -                | -         |    -3.85 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           17 |     2444 | 2024-09-14 | Sashi           | L   | 0.371      | -            | -                | -                | -         |    -4.79 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           16 |     2515 | 2024-09-12 | Sampi           | W   | 0.357      | 0.384        | 0.042 (0.006)    | 0.283 (0.039)    | 0 (0.000) |     6.13 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           15 |     2841 | 2024-08-31 | ALTERNATE aTTaX | L   | 0.278      | -            | -                | -                | -         |    -2.56 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           14 |     2860 | 2024-08-30 | Endpoint        | W   | 0.271      | 0.384        | -                | 0.566 (0.059)    | 0 (0.000) |     3.23 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           13 |     3068 | 2024-08-26 | fnatic          | L   | 0.245      | -            | -                | -                | -         |    -1.94 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           12 |     3083 | 2024-08-26 | Falcons         | L   | 0.245      | -            | -                | -                | -         |    -3.32 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           11 |     3129 | 2024-08-25 | FaZe            | L   | 0.238      | -            | -                | -                | -         |    -0.04 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           10 |     3168 | 2024-08-23 | AMKAL           | W   | 0.227      | 0.535        | 0.044 (0.005)    | 0.274 (0.033)    | 0 (0.000) |     2.50 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            9 |     3176 | 2024-08-23 | Sashi           | L   | 0.225      | -            | -                | -                | -         |    -2.96 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            8 |     3182 | 2024-08-23 | Passion UA      | L   | 0.224      | -            | -                | -                | -         |    -1.48 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            7 |     3220 | 2024-08-22 | Rebels          | W   | 0.216      | -            | -                | -                | -         |     2.21 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            6 |     3242 | 2024-08-21 | Falcons         | W   | 0.212      | 0.535        | 0.874 (0.099)    | 0.617 (0.070)    | -         |     6.61 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            5 |     3255 | 2024-08-21 | Zero Tenacity   | W   | 0.211      | -            | -                | -                | -         |     4.08 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            4 |     3291 | 2024-08-21 | SAW             | L   | 0.210      | -            | -                | -                | -         |    -0.60 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            3 |     3435 | 2024-08-15 | B8              | W   | 0.172      | 0.143        | 0.164 (0.004)    | -                | -         |     4.06 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            2 |     3441 | 2024-08-15 | PARIVISION      | W   | 0.172      | -            | -                | -                | -         |     2.33 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            1 |     3446 | 2024-08-15 | ARCRED          | W   | 0.171      | -            | -                | -                | -         |     1.64 | Buzz, Chr1zN, F1KU, MoDo, Nexius |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($39,018.81)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.706 | $50,000.00     | $35,286.62      |
| 2024-09-14 |      0.372 | $2,000.00      | $744.27         |
| 2024-08-25 |      0.239 | $12,500.00     | $2,987.92       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
