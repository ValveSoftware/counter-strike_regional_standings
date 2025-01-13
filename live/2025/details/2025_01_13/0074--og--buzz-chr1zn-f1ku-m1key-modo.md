### Roster Details<br />
Team Name: OG<br />
Roster: Buzz, Chr1zN, F1KU, M1key, MoDo<br />
Global Rank: [74](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [53]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  974.8<br />
<br />
Final Rank Value (974.8) = Starting Rank Value (941.9) + Head To Head Adjustments (32.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.566[<sup>1</sup>](#table2)
- Bounty Collected: 0.413[<sup>2</sup>](#table1)
- Opponent Network: 0.113[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.273<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 941.9
- 400 + ( ( 0.273 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 941.9


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
|           36 |      944 | 2024-11-10 | Johnny Speeds   | L   | 0.775      | -            | -                | -                | -         |    -8.98 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           35 |      998 | 2024-11-07 | NAVI Junior     | L   | 0.755      | -            | -                | -                | -         |    -8.22 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           34 |     1003 | 2024-11-07 | Sashi           | L   | 0.753      | -            | -                | -                | -         |   -11.13 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           33 |     1014 | 2024-11-06 | BetBoom         | W   | 0.748      | 0.426        | 0.114 (0.036)    | 0.428 (0.136)    | 0 (0.000) |    15.50 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           32 |     1033 | 2024-11-05 | los kogutos     | W   | 0.741      | 0.384        | 0.072 (0.020)    | 0.851 (0.242)    | 0 (0.000) |    12.79 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           31 |     1075 | 2024-11-03 | 3DMAX           | L   | 0.727      | -            | -                | -                | -         |    -2.28 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           30 |     1096 | 2024-11-02 | HEROIC          | L   | 0.721      | -            | -                | -                | -         |    -0.34 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           29 |     1120 | 2024-11-01 | Johnny Speeds   | L   | 0.714      | -            | -                | -                | -         |    -8.44 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           28 |     1170 | 2024-10-30 | 9INE            | L   | 0.699      | -            | -                | -                | -         |    -9.54 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           27 |     1185 | 2024-10-29 | Zero Tenacity   | W   | 0.694      | 0.426        | 0.084 (0.025)    | 0.622 (0.184)    | 0 (0.000) |    12.95 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           26 |     1188 | 2024-10-29 | Wu-Tang         | W   | 0.693      | -            | -                | -                | 0 (0.000) |     0.80 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           25 |     1197 | 2024-10-28 | 500             | L   | 0.687      | -            | -                | -                | -         |   -10.96 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           24 |     1248 | 2024-10-26 | BIG             | W   | 0.673      | 0.477        | 0.257 (0.083)    | 0.469 (0.150)    | 0 (0.000) |    19.02 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           23 |     1264 | 2024-10-25 | Virtus.pro      | W   | 0.667      | 0.477        | 0.146 (0.046)    | 0.333 (0.106)    | 0 (0.000) |    18.57 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           22 |     1306 | 2024-10-21 | 3DMAX           | L   | 0.642      | -            | -                | -                | -         |    -1.87 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           21 |     1309 | 2024-10-21 | Virtus.pro      | W   | 0.640      | 0.477        | 0.146 (0.045)    | 0.333 (0.102)    | 0 (0.000) |    18.18 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           20 |     1526 | 2024-10-10 | Spirit Academy  | L   | 0.567      | -            | -                | -                | -         |    -6.08 | Buzz, Chr1zN, F1KU, MoDo, spooke |
|           19 |     1961 | 2024-09-27 | Apogee          | L   | 0.482      | -            | -                | -                | -         |   -10.17 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           18 |     1971 | 2024-09-27 | B8              | L   | 0.481      | -            | -                | -                | -         |    -4.03 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           17 |     2417 | 2024-09-14 | Sashi           | L   | 0.393      | -            | -                | -                | -         |    -5.08 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           16 |     2488 | 2024-09-12 | Sampi           | W   | 0.380      | 0.384        | 0.042 (0.006)    | 0.293 (0.043)    | 0 (0.000) |     6.48 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           15 |     2814 | 2024-08-31 | ALTERNATE aTTaX | L   | 0.300      | -            | -                | -                | -         |    -2.80 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           14 |     2833 | 2024-08-30 | Endpoint        | W   | 0.293      | 0.384        | -                | 0.524 (0.059)    | 0 (0.000) |     3.53 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           13 |     3041 | 2024-08-26 | fnatic          | L   | 0.268      | -            | -                | -                | -         |    -2.10 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           12 |     3056 | 2024-08-26 | Falcons         | L   | 0.267      | -            | -                | -                | -         |    -3.45 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           11 |     3102 | 2024-08-25 | FaZe            | L   | 0.261      | -            | -                | -                | -         |    -0.04 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           10 |     3141 | 2024-08-23 | AMKAL           | W   | 0.249      | 0.535        | 0.045 (0.006)    | 0.272 (0.036)    | 0 (0.000) |     2.73 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            9 |     3149 | 2024-08-23 | Sashi           | L   | 0.247      | -            | -                | -                | -         |    -3.26 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            8 |     3155 | 2024-08-23 | Passion UA      | L   | 0.247      | -            | -                | -                | -         |    -1.62 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            7 |     3193 | 2024-08-22 | Rebels          | W   | 0.239      | -            | -                | -                | -         |     2.42 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            6 |     3215 | 2024-08-21 | HEROIC          | W   | 0.234      | 0.535        | 0.873 (0.109)    | 0.599 (0.075)    | -         |     7.31 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            5 |     3228 | 2024-08-21 | Zero Tenacity   | W   | 0.234      | -            | -                | -                | -         |     4.51 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            4 |     3264 | 2024-08-21 | SAW             | L   | 0.232      | -            | -                | -                | -         |    -0.62 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            3 |     3408 | 2024-08-15 | B8              | W   | 0.195      | 0.143        | 0.166 (0.005)    | -                | -         |     4.59 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            2 |     3414 | 2024-08-15 | PARIVISION      | W   | 0.194      | -            | -                | -                | -         |     2.71 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            1 |     3419 | 2024-08-15 | ARCRED          | W   | 0.194      | -            | -                | -                | -         |     1.85 | Buzz, Chr1zN, F1KU, MoDo, Nexius |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($40,461.13)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.728 | $50,000.00     | $36,404.70      |
| 2024-09-14 |      0.394 | $2,000.00      | $788.99         |
| 2024-08-25 |      0.261 | $12,500.00     | $3,267.44       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
