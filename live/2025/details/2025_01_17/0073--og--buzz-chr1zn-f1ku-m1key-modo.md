### Roster Details<br />
Team Name: OG<br />
Roster: Buzz, Chr1zN, F1KU, M1key, MoDo<br />
Global Rank: [73](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [53]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  966.2<br />
<br />
Final Rank Value (966.2) = Starting Rank Value (937.1) + Head To Head Adjustments (29.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.566[<sup>1</sup>](#table2)
- Bounty Collected: 0.406[<sup>2</sup>](#table1)
- Opponent Network: 0.111[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.271<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 937.1
- 400 + ( ( 0.271 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 937.1


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
|           36 |      948 | 2024-11-10 | Johnny Speeds   | L   | 0.747      | -            | -                | -                | -         |    -8.79 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           35 |     1002 | 2024-11-07 | NAVI Junior     | L   | 0.726      | -            | -                | -                | -         |    -7.89 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           34 |     1007 | 2024-11-07 | Sashi           | L   | 0.725      | -            | -                | -                | -         |   -10.85 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           33 |     1018 | 2024-11-06 | BetBoom         | W   | 0.720      | 0.426        | 0.112 (0.034)    | 0.474 (0.145)    | 0 (0.000) |    15.09 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           32 |     1037 | 2024-11-05 | los kogutos     | W   | 0.713      | 0.384        | 0.072 (0.020)    | 0.841 (0.230)    | 0 (0.000) |    12.62 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           31 |     1079 | 2024-11-03 | 3DMAX           | L   | 0.698      | -            | -                | -                | -         |    -2.23 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           30 |     1100 | 2024-11-02 | Falcons         | L   | 0.692      | -            | -                | -                | -         |    -0.30 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           29 |     1124 | 2024-11-01 | Johnny Speeds   | L   | 0.685      | -            | -                | -                | -         |    -8.24 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           28 |     1174 | 2024-10-30 | 9INE            | L   | 0.671      | -            | -                | -                | -         |    -9.12 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           27 |     1189 | 2024-10-29 | Zero Tenacity   | W   | 0.665      | 0.426        | 0.083 (0.024)    | 0.570 (0.162)    | 0 (0.000) |    12.24 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           26 |     1192 | 2024-10-29 | Wu-Tang         | W   | 0.664      | -            | -                | -                | 0 (0.000) |     0.81 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           25 |     1201 | 2024-10-28 | 500             | L   | 0.659      | -            | -                | -                | -         |   -10.46 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           24 |     1252 | 2024-10-26 | BIG             | W   | 0.644      | 0.477        | 0.257 (0.079)    | 0.492 (0.151)    | 0 (0.000) |    18.22 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           23 |     1268 | 2024-10-25 | Virtus.pro      | W   | 0.638      | 0.477        | 0.133 (0.040)    | 0.382 (0.116)    | 0 (0.000) |    17.70 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           22 |     1310 | 2024-10-21 | 3DMAX           | L   | 0.613      | -            | -                | -                | -         |    -1.82 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           21 |     1313 | 2024-10-21 | Virtus.pro      | W   | 0.612      | 0.477        | 0.133 (0.039)    | 0.382 (0.111)    | 0 (0.000) |    17.29 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           20 |     1530 | 2024-10-10 | Spirit Academy  | L   | 0.539      | -            | -                | -                | -         |    -5.84 | Buzz, Chr1zN, F1KU, MoDo, spooke |
|           19 |     1965 | 2024-09-27 | Apogee          | L   | 0.453      | -            | -                | -                | -         |    -9.60 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           18 |     1975 | 2024-09-27 | B8              | L   | 0.452      | -            | -                | -                | -         |    -3.92 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           17 |     2421 | 2024-09-14 | Sashi           | L   | 0.365      | -            | -                | -                | -         |    -4.83 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           16 |     2492 | 2024-09-12 | Sampi           | W   | 0.351      | 0.384        | 0.041 (0.006)    | 0.280 (0.038)    | 0 (0.000) |     6.03 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           15 |     2818 | 2024-08-31 | ALTERNATE aTTaX | L   | 0.272      | -            | -                | -                | -         |    -2.50 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           14 |     2837 | 2024-08-30 | Endpoint        | W   | 0.265      | 0.384        | -                | 0.515 (0.052)    | 0 (0.000) |     3.13 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           13 |     3045 | 2024-08-26 | fnatic          | L   | 0.239      | -            | -                | -                | -         |    -1.90 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           12 |     3060 | 2024-08-26 | Falcons         | L   | 0.239      | -            | -                | -                | -         |    -3.29 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           11 |     3106 | 2024-08-25 | FaZe            | L   | 0.232      | -            | -                | -                | -         |    -0.04 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           10 |     3145 | 2024-08-23 | AMKAL           | W   | 0.221      | 0.535        | 0.044 (0.005)    | 0.275 (0.032)    | 0 (0.000) |     2.42 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            9 |     3153 | 2024-08-23 | Sashi           | L   | 0.219      | -            | -                | -                | -         |    -2.90 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            8 |     3159 | 2024-08-23 | Passion UA      | L   | 0.218      | -            | -                | -                | -         |    -1.44 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            7 |     3197 | 2024-08-22 | Rebels          | W   | 0.210      | -            | -                | -                | -         |     2.12 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            6 |     3219 | 2024-08-21 | Falcons         | W   | 0.206      | 0.535        | 0.874 (0.096)    | 0.618 (0.068)    | -         |     6.42 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            5 |     3232 | 2024-08-21 | Zero Tenacity   | W   | 0.205      | -            | -                | -                | -         |     3.93 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            4 |     3268 | 2024-08-21 | SAW             | L   | 0.204      | -            | -                | -                | -         |    -0.59 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            3 |     3412 | 2024-08-15 | B8              | W   | 0.166      | 0.143        | 0.163 (0.004)    | -                | -         |     3.90 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            2 |     3418 | 2024-08-15 | PARIVISION      | W   | 0.166      | -            | -                | -                | -         |     2.21 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            1 |     3423 | 2024-08-15 | ARCRED          | W   | 0.165      | -            | -                | -                | -         |     1.58 | Buzz, Chr1zN, F1KU, MoDo, Nexius |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($38,624.92)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.700 | $50,000.00     | $34,981.28      |
| 2024-09-14 |      0.366 | $2,000.00      | $732.05         |
| 2024-08-25 |      0.233 | $12,500.00     | $2,911.59       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
