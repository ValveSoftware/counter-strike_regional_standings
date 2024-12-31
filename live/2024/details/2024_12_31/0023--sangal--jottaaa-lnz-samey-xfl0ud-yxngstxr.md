### Roster Details<br />
Team Name: Sangal<br />
Roster: jottAAA, LNZ, SaMey, xfl0ud, yxngstxr<br />
Global Rank: [23](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [17]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  1274.9<br />
<br />
Final Rank Value (1274.9) = Starting Rank Value (1238.3) + Head To Head Adjustments (36.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.555[<sup>1</sup>](#table2)
- Bounty Collected: 0.542[<sup>2</sup>](#table1)
- Opponent Network: 0.233[<sup>2</sup>](#table1)
- LAN Wins: 0.391[<sup>2</sup>](#table1)

The average of these factors is 0.430<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1238.3
- 400 + ( ( 0.430 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 1238.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      657 | 2024-11-18 | ECLOT         | L   | 0.929      | -            | -                | -                | -         |   -18.89 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           39 |      669 | 2024-11-17 | Cloud9        | L   | 0.923      | -            | -                | -                | -         |   -21.08 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           38 |      682 | 2024-11-17 | MOUZ          | L   | 0.918      | -            | -                | -                | -         |    -2.17 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           37 |      690 | 2024-11-16 | Rebels        | W   | 0.917      | -            | -                | -                | 1 (0.917) |     2.51 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           36 |     1272 | 2024-10-20 | Nemiga        | W   | 0.733      | 0.500        | 0.474 (0.173)    | 0.662 (0.243)    | 0 (0.000) |    10.77 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           35 |     1301 | 2024-10-19 | UNPAID        | L   | 0.726      | -            | -                | -                | -         |   -18.81 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           34 |     1348 | 2024-10-17 | Nemiga        | W   | 0.713      | 0.500        | 0.474 (0.169)    | 0.662 (0.236)    | 0 (0.000) |     9.39 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           33 |     1359 | 2024-10-17 | Fluxo         | W   | 0.712      | 0.624        | 0.119 (0.053)    | 0.606 (0.269)    | 1 (0.712) |     7.16 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           32 |     1380 | 2024-10-16 | SAW           | W   | 0.707      | 0.500        | 0.260 (0.092)    | 0.532 (0.188)    | 0 (0.000) |    14.36 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           31 |     1388 | 2024-10-16 | Nemiga        | W   | 0.706      | 0.624        | 0.474 (0.209)    | 0.662 (0.292)    | 1 (0.706) |     9.96 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           30 |     1409 | 2024-10-15 | Sashi         | W   | 0.700      | 0.500        | 0.048 (0.017)    | 0.684 (0.239)    | 0 (0.000) |     4.39 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           29 |     1908 | 2024-09-27 | BetBoom       | L   | 0.580      | -            | -                | -                | -         |   -13.19 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           28 |     1970 | 2024-09-26 | Passion UA    | W   | 0.572      | 0.435        | 0.116 (0.029)    | 0.972 (0.242)    | -         |     4.95 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           27 |     2529 | 2024-09-08 | HEROIC        | L   | 0.452      | -            | -                | -                | -         |    -1.31 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           26 |     2568 | 2024-09-07 | FlyQuest      | W   | 0.445      | 0.889        | 0.168 (0.066)    | 0.474 (0.187)    | 1 (0.445) |     7.58 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           25 |     2590 | 2024-09-06 | FaZe          | L   | 0.439      | -            | -                | -                | -         |    -0.54 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           24 |     2611 | 2024-09-05 | HEROIC        | W   | 0.434      | 0.889        | 0.776 (0.299)    | 0.632 (0.244)    | 1 (0.434) |    12.56 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           23 |     2664 | 2024-09-04 | Eternal Fire  | L   | 0.426      | -            | -                | -                | -         |    -3.35 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           22 |     2695 | 2024-09-03 | FaZe          | W   | 0.419      | 0.889        | 0.853 (0.318)    | 0.513 (0.191)    | 1 (0.419) |    12.77 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           21 |     3129 | 2024-08-22 | UNPAID        | W   | 0.338      | -            | -                | -                | -         |     2.58 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           20 |     3179 | 2024-08-21 | BC.Game       | W   | 0.332      | -            | -                | -                | -         |     1.25 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           19 |     3215 | 2024-08-21 | 1WIN          | W   | 0.331      | -            | -                | -                | -         |     0.47 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           18 |     3369 | 2024-08-15 | Nemiga        | L   | 0.292      | -            | -                | -                | -         |    -4.06 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           17 |     3461 | 2024-08-12 | Zero Tenacity | W   | 0.274      | -            | -                | -                | -         |     2.13 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           16 |     3611 | 2024-08-07 | Rebels        | W   | 0.239      | -            | -                | -                | -         |     0.67 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           15 |     3655 | 2024-08-06 | PARIVISION    | W   | 0.233      | -            | -                | -                | -         |     1.01 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           14 |     3662 | 2024-08-06 | los kogutos   | W   | 0.232      | -            | -                | -                | -         |     3.30 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           13 |     3699 | 2024-08-05 | 1WIN          | W   | 0.224      | -            | -                | -                | -         |     0.31 | Chill, LNZ, SaMey, xfl0ud, yxngstxr     |
|           12 |     3759 | 2024-08-03 | Passion UA    | W   | 0.212      | -            | -                | -                | -         |     3.07 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           11 |     3925 | 2024-07-30 | SINNERS       | W   | 0.185      | -            | -                | -                | -         |     1.95 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           10 |     3983 | 2024-07-28 | fnatic        | W   | 0.173      | -            | -                | -                | -         |     2.23 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            9 |     3999 | 2024-07-28 | Monte         | W   | 0.172      | -            | -                | -                | -         |     1.27 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            8 |     4020 | 2024-07-27 | B8            | W   | 0.164      | -            | -                | -                | -         |     2.00 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            7 |     4036 | 2024-07-26 | los kogutos   | W   | 0.159      | -            | -                | -                | -         |     2.38 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            6 |     4150 | 2024-07-23 | Apogee        | W   | 0.139      | -            | -                | -                | -         |     0.30 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            5 |     4251 | 2024-07-20 | fnatic        | L   | 0.118      | -            | -                | -                | -         |    -2.22 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            4 |     4379 | 2024-07-17 | SAW           | L   | 0.100      | -            | -                | -                | -         |    -0.92 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            3 |     4391 | 2024-07-17 | B8            | W   | 0.100      | -            | -                | -                | -         |     1.23 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            2 |     4488 | 2024-07-15 | RUSH B        | W   | 0.087      | -            | -                | -                | -         |     0.32 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            1 |     4507 | 2024-07-15 | Rebels        | W   | 0.084      | -            | -                | -                | -         |     0.26 | imoRR, jottAAA, SaMey, xfl0ud, yxngstxr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($47,311.22)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.733 | $17,000.00     | $12,453.38      |
| 2024-10-19 |      0.727 | $25,000.00     | $18,179.79      |
| 2024-09-28 |      0.587 | $2,000.00      | $1,173.24       |
| 2024-09-22 |      0.547 | $12,000.00     | $6,564.35       |
| 2024-08-06 |      0.233 | $22,000.00     | $5,127.07       |
| 2024-07-28 |      0.173 | $22,000.00     | $3,813.39       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
