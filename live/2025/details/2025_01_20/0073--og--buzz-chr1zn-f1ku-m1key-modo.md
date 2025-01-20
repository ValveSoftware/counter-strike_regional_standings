### Roster Details<br />
Team Name: OG<br />
Roster: Buzz, Chr1zN, F1KU, M1key, MoDo<br />
Global Rank: [73](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [53]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  965.9<br />
<br />
Final Rank Value (965.9) = Starting Rank Value (938.7) + Head To Head Adjustments (27.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.566[<sup>1</sup>](#table2)
- Bounty Collected: 0.410[<sup>2</sup>](#table1)
- Opponent Network: 0.109[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.271<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 938.7
- 400 + ( ( 0.271 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 938.7


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
|           36 |      957 | 2024-11-10 | Johnny Speeds   | L   | 0.733      | -            | -                | -                | -         |    -8.66 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           35 |     1011 | 2024-11-07 | NAVI Junior     | L   | 0.713      | -            | -                | -                | -         |    -7.80 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           34 |     1016 | 2024-11-07 | Sashi           | L   | 0.711      | -            | -                | -                | -         |   -10.70 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           33 |     1027 | 2024-11-06 | BetBoom         | W   | 0.706      | 0.426        | 0.110 (0.033)    | 0.524 (0.158)    | 0 (0.000) |    14.82 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           32 |     1046 | 2024-11-05 | los kogutos     | W   | 0.699      | 0.384        | 0.071 (0.019)    | 0.836 (0.225)    | 0 (0.000) |    12.48 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           31 |     1088 | 2024-11-03 | 3DMAX           | L   | 0.685      | -            | -                | -                | -         |    -2.22 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           30 |     1109 | 2024-11-02 | Falcons         | L   | 0.679      | -            | -                | -                | -         |    -0.28 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           29 |     1133 | 2024-11-01 | Johnny Speeds   | L   | 0.672      | -            | -                | -                | -         |    -8.11 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           28 |     1183 | 2024-10-30 | 9INE            | L   | 0.657      | -            | -                | -                | -         |    -8.99 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           27 |     1198 | 2024-10-29 | Zero Tenacity   | W   | 0.652      | 0.426        | 0.083 (0.023)    | 0.567 (0.157)    | 0 (0.000) |    11.93 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           26 |     1201 | 2024-10-29 | Wu-Tang         | W   | 0.651      | -            | -                | -                | 0 (0.000) |     0.79 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           25 |     1210 | 2024-10-28 | 500             | L   | 0.645      | -            | -                | -                | -         |   -10.31 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           24 |     1261 | 2024-10-26 | BIG             | W   | 0.631      | 0.477        | 0.299 (0.090)    | 0.493 (0.148)    | 0 (0.000) |    17.94 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           23 |     1277 | 2024-10-25 | Virtus.pro      | W   | 0.625      | 0.477        | 0.164 (0.049)    | 0.383 (0.114)    | 0 (0.000) |    17.42 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           22 |     1319 | 2024-10-21 | 3DMAX           | L   | 0.600      | -            | -                | -                | -         |    -1.82 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           21 |     1322 | 2024-10-21 | Virtus.pro      | W   | 0.598      | 0.477        | 0.164 (0.047)    | 0.383 (0.109)    | 0 (0.000) |    16.98 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           20 |     1539 | 2024-10-10 | Spirit Academy  | L   | 0.525      | -            | -                | -                | -         |    -5.76 | Buzz, Chr1zN, F1KU, MoDo, spooke |
|           19 |     1974 | 2024-09-27 | Apogee          | L   | 0.440      | -            | -                | -                | -         |    -9.37 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           18 |     1984 | 2024-09-27 | B8              | L   | 0.439      | -            | -                | -                | -         |    -3.83 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           17 |     2430 | 2024-09-14 | Sashi           | L   | 0.351      | -            | -                | -                | -         |    -4.68 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           16 |     2501 | 2024-09-12 | Sampi           | W   | 0.338      | 0.384        | 0.041 (0.005)    | 0.274 (0.036)    | 0 (0.000) |     5.77 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           15 |     2827 | 2024-08-31 | ALTERNATE aTTaX | L   | 0.258      | -            | -                | -                | -         |    -2.38 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           14 |     2846 | 2024-08-30 | Endpoint        | W   | 0.251      | 0.384        | -                | 0.511 (0.049)    | 0 (0.000) |     2.92 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           13 |     3054 | 2024-08-26 | fnatic          | L   | 0.226      | -            | -                | -                | -         |    -1.82 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           12 |     3069 | 2024-08-26 | Falcons         | L   | 0.225      | -            | -                | -                | -         |    -3.19 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           11 |     3115 | 2024-08-25 | FaZe            | L   | 0.219      | -            | -                | -                | -         |    -0.03 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           10 |     3154 | 2024-08-23 | AMKAL           | W   | 0.207      | 0.535        | 0.043 (0.005)    | 0.276 (0.031)    | 0 (0.000) |     2.24 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            9 |     3162 | 2024-08-23 | Sashi           | L   | 0.205      | -            | -                | -                | -         |    -2.74 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            8 |     3168 | 2024-08-23 | Passion UA      | L   | 0.205      | -            | -                | -                | -         |    -1.37 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            7 |     3206 | 2024-08-22 | Rebels          | W   | 0.197      | -            | -                | -                | -         |     1.96 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            6 |     3228 | 2024-08-21 | Falcons         | W   | 0.192      | 0.535        | 0.874 (0.090)    | 0.621 (0.064)    | -         |     6.00 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            5 |     3241 | 2024-08-21 | Zero Tenacity   | W   | 0.192      | -            | -                | -                | -         |     3.65 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            4 |     3277 | 2024-08-21 | SAW             | L   | 0.190      | -            | -                | -                | -         |    -0.58 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            3 |     3421 | 2024-08-15 | B8              | W   | 0.153      | 0.143        | 0.162 (0.004)    | -                | -         |     3.56 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            2 |     3427 | 2024-08-15 | PARIVISION      | W   | 0.152      | -            | -                | -                | -         |     1.96 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            1 |     3432 | 2024-08-15 | ARCRED          | W   | 0.152      | -            | -                | -                | -         |     1.43 | Buzz, Chr1zN, F1KU, MoDo, Nexius |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($37,749.64)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.686 | $50,000.00     | $34,302.77      |
| 2024-09-14 |      0.352 | $2,000.00      | $704.91         |
| 2024-08-25 |      0.219 | $12,500.00     | $2,741.96       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
