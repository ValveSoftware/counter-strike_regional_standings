### Roster Details<br />
Team Name: OG<br />
Roster: Buzz, Chr1zN, F1KU, M1key, MoDo<br />
Global Rank: [71](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [51]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  987.8<br />
<br />
Final Rank Value (987.8) = Starting Rank Value (949.6) + Head To Head Adjustments (38.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.554[<sup>1</sup>](#table2)
- Bounty Collected: 0.427[<sup>2</sup>](#table1)
- Opponent Network: 0.147[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.282<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 949.6
- 400 + ( ( 0.282 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 949.6


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
|           36 |      888 | 2024-11-10 | Johnny Speeds   | L   | 0.874      | -            | -                | -                | -         |   -10.73 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           35 |      942 | 2024-11-07 | NAVI Junior     | L   | 0.853      | -            | -                | -                | -         |    -9.68 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           34 |      947 | 2024-11-07 | Sashi           | L   | 0.852      | -            | -                | -                | -         |   -12.75 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           33 |      958 | 2024-11-06 | BetBoom         | W   | 0.847      | 0.426        | 0.110 (0.040)    | 0.468 (0.169)    | 0 (0.000) |    17.40 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           32 |      977 | 2024-11-05 | los kogutos     | W   | 0.840      | 0.384        | 0.066 (0.021)    | 0.989 (0.319)    | 0 (0.000) |    13.02 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           31 |     1019 | 2024-11-03 | 3DMAX           | L   | 0.826      | -            | -                | -                | -         |    -2.66 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           30 |     1040 | 2024-11-02 | HEROIC          | L   | 0.820      | -            | -                | -                | -         |    -0.49 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           29 |     1064 | 2024-11-01 | Johnny Speeds   | L   | 0.813      | -            | -                | -                | -         |   -10.31 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           28 |     1114 | 2024-10-30 | 9INE            | L   | 0.798      | -            | -                | -                | -         |   -11.26 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           27 |     1129 | 2024-10-29 | Zero Tenacity   | W   | 0.793      | 0.426        | 0.080 (0.027)    | 0.650 (0.219)    | 0 (0.000) |    14.49 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           26 |     1132 | 2024-10-29 | Wu-Tang         | W   | 0.792      | -            | -                | -                | 0 (0.000) |     0.83 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           25 |     1141 | 2024-10-28 | 500             | L   | 0.786      | -            | -                | -                | -         |   -12.98 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           24 |     1192 | 2024-10-26 | BIG             | W   | 0.772      | 0.477        | 0.230 (0.085)    | 0.504 (0.186)    | 0 (0.000) |    21.54 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           23 |     1208 | 2024-10-25 | Virtus.pro      | W   | 0.766      | 0.477        | 0.168 (0.061)    | 0.364 (0.133)    | 0 (0.000) |    21.62 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           22 |     1250 | 2024-10-21 | 3DMAX           | L   | 0.740      | -            | -                | -                | -         |    -2.20 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           21 |     1253 | 2024-10-21 | Virtus.pro      | W   | 0.739      | 0.477        | 0.168 (0.059)    | 0.364 (0.128)    | 0 (0.000) |    21.28 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           20 |     1470 | 2024-10-10 | Spirit Academy  | L   | 0.666      | -            | -                | -                | -         |    -7.45 | Buzz, Chr1zN, F1KU, MoDo, spooke |
|           19 |     1905 | 2024-09-27 | Apogee          | L   | 0.580      | -            | -                | -                | -         |   -12.15 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           18 |     1915 | 2024-09-27 | B8              | L   | 0.579      | -            | -                | -                | -         |    -4.95 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           17 |     2361 | 2024-09-14 | Sashi           | L   | 0.492      | -            | -                | -                | -         |    -6.42 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           16 |     2432 | 2024-09-12 | Sampi           | W   | 0.478      | 0.384        | 0.039 (0.007)    | 0.369 (0.068)    | 0 (0.000) |     7.82 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           15 |     2758 | 2024-08-31 | ALTERNATE aTTaX | L   | 0.399      | -            | -                | -                | -         |    -4.09 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           14 |     2777 | 2024-08-30 | Endpoint        | W   | 0.392      | 0.384        | -                | 0.585 (0.088)    | 0 (0.000) |     4.74 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           13 |     2985 | 2024-08-26 | fnatic          | L   | 0.367      | -            | -                | -                | -         |    -2.82 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           12 |     3000 | 2024-08-26 | Falcons         | L   | 0.366      | -            | -                | -                | -         |    -4.14 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           11 |     3046 | 2024-08-25 | FaZe            | L   | 0.360      | -            | -                | -                | -         |    -0.08 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           10 |     3085 | 2024-08-23 | AMKAL           | W   | 0.348      | 0.535        | 0.043 (0.008)    | 0.279 (0.052)    | 0 (0.000) |     3.73 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            9 |     3093 | 2024-08-23 | Sashi           | L   | 0.346      | -            | -                | -                | -         |    -4.63 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            8 |     3099 | 2024-08-23 | Passion UA      | L   | 0.345      | -            | -                | -                | -         |    -2.32 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            7 |     3137 | 2024-08-22 | Rebels          | W   | 0.338      | -            | -                | -                | -         |     3.46 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            6 |     3159 | 2024-08-21 | HEROIC          | W   | 0.333      | 0.535        | 0.776 (0.138)    | 0.632 (0.113)    | -         |    10.36 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            5 |     3172 | 2024-08-21 | Zero Tenacity   | W   | 0.332      | -            | -                | -                | -         |     6.41 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            4 |     3208 | 2024-08-21 | SAW             | L   | 0.331      | -            | -                | -                | -         |    -0.72 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            3 |     3352 | 2024-08-15 | B8              | W   | 0.294      | 0.143        | 0.159 (0.007)    | -                | -         |     6.95 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            2 |     3358 | 2024-08-15 | PARIVISION      | W   | 0.293      | -            | -                | -                | -         |     4.62 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            1 |     3363 | 2024-08-15 | ARCRED          | W   | 0.293      | -            | -                | -                | -         |     2.75 | Buzz, Chr1zN, F1KU, MoDo, Nexius |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($46,835.72)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.827 | $50,000.00     | $41,346.24      |
| 2024-09-14 |      0.493 | $2,000.00      | $986.65         |
| 2024-08-25 |      0.360 | $12,500.00     | $4,502.83       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
