### Roster Details<br />
Team Name: OG<br />
Roster: Buzz, Chr1zN, F1KU, MoDo, Nexius<br />
Global Rank: [48](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_04.md)<br />
Regional Rank: [36]( ../../standings_europe_2024_09_04.md)<br />
<br />
Final Rank Value:  1042.5<br />
<br />
Final Rank Value (1042.5) = Starting Rank Value (965.8) + Head To Head Adjustments (76.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.521[<sup>1</sup>](#table2)
- Bounty Collected: 0.420[<sup>2</sup>](#table1)
- Opponent Network: 0.141[<sup>2</sup>](#table1)
- LAN Wins: 0.060[<sup>2</sup>](#table1)

The average of these factors is 0.286<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 965.8
- 400 + ( ( 0.286 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 965.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |       98 | 2024-08-31 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -19.43 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           32 |      117 | 2024-08-30 | Endpoint          | W   | 1.000      | 0.384        | 0.063 (0.024)    | 0.689 (0.265)    | 0 (0.000) |    11.93 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           31 |      325 | 2024-08-26 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -5.71 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           30 |      340 | 2024-08-26 | Falcons           | L   | 1.000      | -            | -                | -                | -         |    -1.84 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           29 |      386 | 2024-08-25 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -0.82 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           28 |      425 | 2024-08-23 | AMKAL             | W   | 1.000      | 0.535        | 0.123 (0.066)    | 0.417 (0.223)    | 0 (0.000) |    14.06 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           27 |      433 | 2024-08-23 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -13.45 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           26 |      439 | 2024-08-23 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -14.08 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           25 |      477 | 2024-08-22 | Rebels            | W   | 1.000      | 0.143        | -                | 0.639 (0.091)    | 0 (0.000) |    10.60 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           24 |      499 | 2024-08-21 | HEROIC            | W   | 1.000      | 0.535        | 0.207 (0.111)    | 0.368 (0.197)    | 0 (0.000) |    27.16 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           23 |      512 | 2024-08-21 | Zero Tenacity     | W   | 1.000      | 0.143        | 0.138 (0.020)    | 1.000 (0.143)    | 0 (0.000) |    15.15 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           22 |      548 | 2024-08-21 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -1.86 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           21 |      692 | 2024-08-15 | B8                | W   | 1.000      | 0.143        | 0.176 (0.025)    | 1.000 (0.143)    | 0 (0.000) |    19.32 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           20 |      698 | 2024-08-15 | PARIVISION        | W   | 1.000      | 0.143        | -                | 0.751 (0.107)    | 0 (0.000) |    21.38 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           19 |      703 | 2024-08-15 | ARCRED            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.80 | Buzz, Chr1zN, F1KU, MoDo, Nexius   |
|           18 |     1266 | 2024-07-30 | Complexity        | L   | 0.959      | -            | -                | -                | -         |    -1.43 | F1KU, k1to, MoDo, Nexius, Thomas   |
|           17 |     1304 | 2024-07-29 | Spirit            | L   | 0.952      | -            | -                | -                | -         |    -0.13 | F1KU, k1to, MoDo, Nexius, Thomas   |
|           16 |     2717 | 2024-05-30 | Chinggis Warriors | L   | 0.552      | -            | -                | -                | -         |   -10.31 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           15 |     2745 | 2024-05-29 | ATOX              | L   | 0.545      | -            | -                | -                | -         |   -12.69 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           14 |     3004 | 2024-05-19 | paiN              | L   | 0.479      | -            | -                | -                | -         |    -0.41 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           13 |     3012 | 2024-05-18 | Liquid            | L   | 0.475      | -            | -                | -                | -         |    -0.45 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           12 |     3476 | 2024-05-01 | Insilio           | L   | 0.361      | -            | -                | -                | -         |    -6.99 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           11 |     3505 | 2024-04-30 | Sashi             | L   | 0.353      | -            | -                | -                | -         |    -3.80 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|           10 |     3725 | 2024-04-20 | MIBR              | L   | 0.287      | -            | -                | -                | -         |    -0.97 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            9 |     3743 | 2024-04-19 | 9z                | W   | 0.283      | 0.589        | 0.343 (0.057)    | 0.514 (0.086)    | 1 (0.283) |     8.35 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            8 |     3753 | 2024-04-19 | Monte             | W   | 0.281      | -            | -                | -                | 1 (0.281) |     4.18 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            7 |     3798 | 2024-04-18 | MIBR              | L   | 0.275      | -            | -                | -                | -         |    -0.99 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            6 |     3927 | 2024-04-14 | Aurora            | L   | 0.247      | -            | -                | -                | -         |    -0.55 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            5 |     3936 | 2024-04-13 | BetBoom           | W   | 0.241      | 0.684        | 0.232 (0.038)    | 0.521 (0.086)    | -         |     6.28 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            4 |     3945 | 2024-04-13 | BIG               | W   | 0.239      | 0.684        | 0.148 (0.024)    | -                | -         |     6.08 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            3 |     3957 | 2024-04-12 | Ninjas in Pyjamas | W   | 0.233      | 0.684        | 0.211 (0.034)    | 0.448 (0.071)    | -         |     6.92 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            2 |     4028 | 2024-04-10 | ENCE              | W   | 0.220      | 0.684        | 0.132 (0.020)    | -                | -         |     5.84 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            1 |     4108 | 2024-04-08 | Aurora            | L   | 0.207      | -            | -                | -                | -         |    -0.40 | F1KU, HeavyGod, k1to, MoDo, Nexius |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($38,011.67)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-25 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-08-04 |      0.993 | $5,000.00      | $4,966.11       |
| 2024-05-02 |      0.367 | $1,000.00      | $367.17         |
| 2024-04-20 |      0.289 | $10,000.00     | $2,885.16       |
| 2024-04-14 |      0.247 | $70,000.00     | $17,293.23      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
