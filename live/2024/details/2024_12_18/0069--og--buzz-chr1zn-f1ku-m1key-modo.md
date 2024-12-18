### Roster Details<br />
Team Name: OG<br />
Roster: Buzz, Chr1zN, F1KU, M1key, MoDo<br />
Global Rank: [69](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [50]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  994.8<br />
<br />
Final Rank Value (994.8) = Starting Rank Value (952.2) + Head To Head Adjustments (42.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.548[<sup>1</sup>](#table2)
- Bounty Collected: 0.435[<sup>2</sup>](#table1)
- Opponent Network: 0.170[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.288<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 952.2
- 400 + ( ( 0.288 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 952.2


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
|           36 |      805 | 2024-11-10 | Johnny Speeds   | L   | 0.947      | -            | -                | -                | -         |   -11.94 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           35 |      859 | 2024-11-07 | NAVI Junior     | L   | 0.927      | -            | -                | -                | -         |   -10.81 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           34 |      864 | 2024-11-07 | Sashi           | L   | 0.926      | -            | -                | -                | -         |   -14.09 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           33 |      875 | 2024-11-06 | BetBoom         | W   | 0.921      | 0.426        | 0.108 (0.042)    | 0.502 (0.197)    | 0 (0.000) |    18.95 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           32 |      894 | 2024-11-05 | los kogutos     | W   | 0.914      | 0.384        | 0.063 (0.022)    | 0.981 (0.345)    | 0 (0.000) |    13.23 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           31 |      936 | 2024-11-03 | 3DMAX           | L   | 0.899      | -            | -                | -                | -         |    -2.87 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           30 |      957 | 2024-11-02 | HEROIC          | L   | 0.893      | -            | -                | -                | -         |    -0.62 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           29 |      981 | 2024-11-01 | Johnny Speeds   | L   | 0.886      | -            | -                | -                | -         |   -11.63 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           28 |     1031 | 2024-10-30 | 9INE            | L   | 0.872      | -            | -                | -                | -         |   -12.84 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           27 |     1046 | 2024-10-29 | Zero Tenacity   | W   | 0.866      | 0.426        | 0.079 (0.029)    | 0.706 (0.261)    | 0 (0.000) |    15.67 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           26 |     1049 | 2024-10-29 | Wu-Tang         | W   | 0.865      | -            | -                | -                | 0 (0.000) |     0.86 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           25 |     1058 | 2024-10-28 | 500             | L   | 0.860      | -            | -                | -                | -         |   -14.46 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           24 |     1109 | 2024-10-26 | BIG             | W   | 0.845      | 0.477        | 0.216 (0.087)    | 0.526 (0.212)    | 0 (0.000) |    23.42 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           23 |     1125 | 2024-10-25 | Virtus.pro      | W   | 0.839      | 0.477        | 0.177 (0.071)    | 0.385 (0.154)    | 0 (0.000) |    23.88 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           22 |     1167 | 2024-10-21 | 3DMAX           | L   | 0.814      | -            | -                | -                | -         |    -2.39 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           21 |     1170 | 2024-10-21 | Virtus.pro      | W   | 0.813      | 0.477        | 0.177 (0.069)    | 0.385 (0.149)    | 0 (0.000) |    23.59 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           20 |     1387 | 2024-10-10 | Spirit Academy  | L   | 0.740      | -            | -                | -                | -         |    -8.28 | Buzz, Chr1zN, F1KU, MoDo, spooke |
|           19 |     1822 | 2024-09-27 | Apogee          | L   | 0.654      | -            | -                | -                | -         |   -13.74 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           18 |     1832 | 2024-09-27 | B8              | L   | 0.653      | -            | -                | -                | -         |    -5.47 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           17 |     2278 | 2024-09-14 | Sashi           | L   | 0.566      | -            | -                | -                | -         |    -7.59 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           16 |     2349 | 2024-09-12 | Sampi           | W   | 0.552      | 0.384        | 0.037 (0.008)    | 0.426 (0.090)    | 0 (0.000) |     8.70 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           15 |     2675 | 2024-08-31 | ALTERNATE aTTaX | L   | 0.473      | -            | -                | -                | -         |    -4.94 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           14 |     2694 | 2024-08-30 | Endpoint        | W   | 0.466      | 0.384        | -                | 0.631 (0.113)    | 0 (0.000) |     5.96 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           13 |     2902 | 2024-08-26 | fnatic          | L   | 0.440      | -            | -                | -                | -         |    -3.24 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           12 |     2917 | 2024-08-26 | Falcons         | L   | 0.439      | -            | -                | -                | -         |    -4.50 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           11 |     2963 | 2024-08-25 | FaZe            | L   | 0.433      | -            | -                | -                | -         |    -0.12 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           10 |     3002 | 2024-08-23 | AMKAL           | W   | 0.422      | 0.535        | 0.028 (0.006)    | -                | 0 (0.000) |     4.06 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            9 |     3010 | 2024-08-23 | Sashi           | L   | 0.420      | -            | -                | -                | -         |    -5.82 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            8 |     3016 | 2024-08-23 | Passion UA      | L   | 0.419      | -            | -                | -                | -         |    -2.97 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            7 |     3054 | 2024-08-22 | Rebels          | W   | 0.411      | -            | -                | -                | -         |     4.42 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            6 |     3076 | 2024-08-21 | HEROIC          | W   | 0.407      | 0.535        | 0.727 (0.158)    | 0.656 (0.143)    | -         |    12.63 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            5 |     3089 | 2024-08-21 | Zero Tenacity   | W   | 0.406      | 0.143        | -                | 0.706 (0.041)    | -         |     7.80 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            4 |     3125 | 2024-08-21 | SAW             | L   | 0.405      | -            | -                | -                | -         |    -0.72 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            3 |     3269 | 2024-08-15 | B8              | W   | 0.367      | 0.143        | 0.156 (0.008)    | -                | -         |     8.77 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            2 |     3275 | 2024-08-15 | PARIVISION      | W   | 0.367      | -            | -                | -                | -         |     6.23 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            1 |     3280 | 2024-08-15 | ARCRED          | W   | 0.366      | -            | -                | -                | -         |     3.42 | Buzz, Chr1zN, F1KU, MoDo, Nexius |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($51,584.42)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.901 | $50,000.00     | $45,027.40      |
| 2024-09-14 |      0.567 | $2,000.00      | $1,133.90       |
| 2024-08-25 |      0.434 | $12,500.00     | $5,423.12       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
