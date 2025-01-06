### Roster Details<br />
Team Name: OG<br />
Roster: Buzz, Chr1zN, F1KU, M1key, MoDo<br />
Global Rank: [72](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_06.md)<br />
Regional Rank: [52]( ../../standings_europe_2025_01_06.md)<br />
<br />
Final Rank Value:  980.9<br />
<br />
Final Rank Value (980.9) = Starting Rank Value (945.9) + Head To Head Adjustments (35.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.560[<sup>1</sup>](#table2)
- Bounty Collected: 0.420[<sup>2</sup>](#table1)
- Opponent Network: 0.125[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.276<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 945.9
- 400 + ( ( 0.276 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 945.9


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
|           36 |      903 | 2024-11-10 | Johnny Speeds   | L   | 0.821      | -            | -                | -                | -         |    -9.92 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           35 |      957 | 2024-11-07 | NAVI Junior     | L   | 0.801      | -            | -                | -                | -         |    -8.91 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           34 |      962 | 2024-11-07 | Sashi           | L   | 0.799      | -            | -                | -                | -         |   -11.86 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           33 |      973 | 2024-11-06 | BetBoom         | W   | 0.794      | 0.426        | 0.112 (0.038)    | 0.437 (0.148)    | 0 (0.000) |    16.39 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           32 |      992 | 2024-11-05 | los kogutos     | W   | 0.787      | 0.384        | 0.069 (0.021)    | 0.876 (0.265)    | 0 (0.000) |    12.87 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           31 |     1034 | 2024-11-03 | 3DMAX           | L   | 0.773      | -            | -                | -                | -         |    -2.47 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           30 |     1055 | 2024-11-02 | HEROIC          | L   | 0.767      | -            | -                | -                | -         |    -0.40 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           29 |     1079 | 2024-11-01 | Johnny Speeds   | L   | 0.760      | -            | -                | -                | -         |    -9.44 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           28 |     1129 | 2024-10-30 | 9INE            | L   | 0.745      | -            | -                | -                | -         |   -10.37 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           27 |     1144 | 2024-10-29 | Zero Tenacity   | W   | 0.740      | 0.426        | 0.081 (0.026)    | 0.599 (0.189)    | 0 (0.000) |    13.67 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           26 |     1147 | 2024-10-29 | Wu-Tang         | W   | 0.739      | -            | -                | -                | 0 (0.000) |     0.82 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           25 |     1156 | 2024-10-28 | 500             | L   | 0.734      | -            | -                | -                | -         |   -11.88 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           24 |     1207 | 2024-10-26 | BIG             | W   | 0.719      | 0.477        | 0.243 (0.083)    | 0.475 (0.163)    | 0 (0.000) |    20.18 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           23 |     1223 | 2024-10-25 | Virtus.pro      | W   | 0.713      | 0.477        | 0.158 (0.054)    | 0.340 (0.115)    | 0 (0.000) |    20.01 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           22 |     1265 | 2024-10-21 | 3DMAX           | L   | 0.688      | -            | -                | -                | -         |    -2.03 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           21 |     1268 | 2024-10-21 | Virtus.pro      | W   | 0.686      | 0.477        | 0.158 (0.052)    | 0.340 (0.111)    | 0 (0.000) |    19.64 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           20 |     1485 | 2024-10-10 | Spirit Academy  | L   | 0.613      | -            | -                | -                | -         |    -6.78 | Buzz, Chr1zN, F1KU, MoDo, spooke |
|           19 |     1920 | 2024-09-27 | Apogee          | L   | 0.528      | -            | -                | -                | -         |   -11.11 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           18 |     1930 | 2024-09-27 | B8              | L   | 0.527      | -            | -                | -                | -         |    -4.47 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           17 |     2376 | 2024-09-14 | Sashi           | L   | 0.440      | -            | -                | -                | -         |    -5.69 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           16 |     2447 | 2024-09-12 | Sampi           | W   | 0.426      | 0.384        | 0.040 (0.007)    | 0.319 (0.052)    | 0 (0.000) |     7.12 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           15 |     2773 | 2024-08-31 | ALTERNATE aTTaX | L   | 0.347      | -            | -                | -                | -         |    -3.36 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           14 |     2792 | 2024-08-30 | Endpoint        | W   | 0.339      | 0.384        | -                | 0.542 (0.071)    | 0 (0.000) |     4.08 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           13 |     3000 | 2024-08-26 | fnatic          | L   | 0.314      | -            | -                | -                | -         |    -2.43 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           12 |     3015 | 2024-08-26 | Falcons         | L   | 0.313      | -            | -                | -                | -         |    -3.81 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           11 |     3061 | 2024-08-25 | FaZe            | L   | 0.307      | -            | -                | -                | -         |    -0.06 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           10 |     3100 | 2024-08-23 | AMKAL           | W   | 0.296      | 0.535        | 0.044 (0.007)    | 0.269 (0.043)    | 0 (0.000) |     3.21 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            9 |     3108 | 2024-08-23 | Sashi           | L   | 0.294      | -            | -                | -                | -         |    -3.89 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            8 |     3114 | 2024-08-23 | Passion UA      | L   | 0.293      | -            | -                | -                | -         |    -1.93 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            7 |     3152 | 2024-08-22 | Rebels          | W   | 0.285      | -            | -                | -                | -         |     2.89 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            6 |     3174 | 2024-08-21 | HEROIC          | W   | 0.280      | 0.535        | 0.822 (0.123)    | 0.603 (0.090)    | -         |     8.74 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            5 |     3187 | 2024-08-21 | Zero Tenacity   | W   | 0.280      | -            | -                | -                | -         |     5.40 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            4 |     3223 | 2024-08-21 | SAW             | L   | 0.278      | -            | -                | -                | -         |    -0.68 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            3 |     3367 | 2024-08-15 | B8              | W   | 0.241      | 0.143        | 0.162 (0.006)    | -                | -         |     5.69 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            2 |     3373 | 2024-08-15 | PARIVISION      | W   | 0.240      | -            | -                | -                | -         |     3.56 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            1 |     3378 | 2024-08-15 | ARCRED          | W   | 0.240      | -            | -                | -                | -         |     2.28 | Buzz, Chr1zN, F1KU, MoDo, Nexius |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($43,442.96)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.774 | $50,000.00     | $38,716.19      |
| 2024-09-14 |      0.441 | $2,000.00      | $881.45         |
| 2024-08-25 |      0.308 | $12,500.00     | $3,845.32       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
