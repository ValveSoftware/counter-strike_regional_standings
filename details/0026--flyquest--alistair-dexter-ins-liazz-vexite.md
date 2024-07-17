### Roster Details<br />
Team Name: FlyQuest<br />
Roster: aliStair, dexter, INS, Liazz, Vexite<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [26](../standings_global.md)<br />
Regional Rank: [2]( ../standings_asia.md)<br />
Final Rank Value:  1334.6<br />
<br />
Final Rank Value (1334.6) = Starting Rank Value (1322.7) + Head To Head Adjustments (12.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.517[<sup>1</sup>](#table2)
- Bounty Collected: 0.471[<sup>2</sup>](#table1)
- Opponent Network: 0.187[<sup>2</sup>](#table1)
- LAN Wins: 0.544[<sup>2</sup>](#table1)

The average of these factors is 0.430<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1322.7
- 400 + ( ( 0.430 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1322.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           54 |        8 | 2024-07-17 | FaZe               | L   | 1.000      | -            | -                | -                | -         |    -1.40 | aliStair, dexter, INS, Liazz, Vexite |
|           53 |      579 | 2024-06-09 | Rooster            | W   | 0.945      | 0.333        | 0.017 (0.005)    | 0.275 (0.087)    | 0 (0.000) |     2.63 | aliStair, dexter, INS, Liazz, Vexite |
|           52 |      635 | 2024-06-08 | Mindfreak          | W   | 0.938      | 0.333        | -                | 0.218 (0.068)    | -         |     1.44 | aliStair, dexter, INS, Liazz, Vexite |
|           51 |      687 | 2024-06-07 | Rooster            | L   | 0.932      | -            | -                | -                | -         |   -27.09 | aliStair, dexter, INS, Liazz, Vexite |
|           50 |     1018 | 2024-05-28 | BIG                | L   | 0.868      | -            | -                | -                | -         |   -13.38 | aliStair, dexter, INS, Liazz, Vexite |
|           49 |     1040 | 2024-05-27 | Spirit             | L   | 0.861      | -            | -                | -                | -         |    -0.82 | aliStair, dexter, INS, Liazz, Vexite |
|           48 |     1168 | 2024-05-22 | Mindfreak          | W   | 0.825      | 0.333        | -                | 0.218 (0.060)    | -         |     0.92 | aliStair, dexter, INS, Liazz, Vexite |
|           47 |     1172 | 2024-05-22 | Mindfreak          | W   | 0.825      | 0.333        | -                | 0.218 (0.060)    | -         |     0.92 | aliStair, dexter, INS, Liazz, Vexite |
|           46 |     1245 | 2024-05-20 | Canon Event        | W   | 0.812      | -            | -                | -                | -         |     0.17 | aliStair, dexter, INS, Liazz, Vexite |
|           45 |     1247 | 2024-05-20 | Canon Event        | W   | 0.812      | -            | -                | -                | -         |     0.17 | aliStair, dexter, INS, Liazz, Vexite |
|           44 |     1612 | 2024-05-08 | Liquid             | L   | 0.734      | -            | -                | -                | -         |    -5.53 | aliStair, dexter, INS, Liazz, Vexite |
|           43 |     1630 | 2024-05-07 | BetBoom            | W   | 0.727      | 0.889        | 0.403 (0.260)    | 0.704 (0.455)    | 1 (0.727) |    16.24 | aliStair, dexter, INS, Liazz, Vexite |
|           42 |     1674 | 2024-05-05 | Ninjas in Pyjamas  | W   | 0.712      | 0.889        | 0.343 (0.217)    | 0.534 (0.338)    | 1 (0.712) |    19.82 | aliStair, dexter, INS, Liazz, Vexite |
|           41 |     1688 | 2024-05-04 | PERA               | W   | 0.706      | 0.889        | 0.067 (0.042)    | 0.454 (0.285)    | 1 (0.706) |     2.65 | aliStair, dexter, INS, Liazz, Vexite |
|           40 |     1706 | 2024-05-03 | HEROIC             | L   | 0.699      | -            | -                | -                | -         |    -2.12 | aliStair, dexter, INS, Liazz, Vexite |
|           39 |     1734 | 2024-05-02 | BOSS               | W   | 0.692      | 0.889        | 0.022 (0.013)    | 0.345 (0.213)    | 1 (0.692) |     1.47 | aliStair, dexter, INS, Liazz, Vexite |
|           38 |     1757 | 2024-05-01 | Natus Vincere      | L   | 0.686      | -            | -                | -                | -         |    -0.86 | aliStair, dexter, INS, Liazz, Vexite |
|           37 |     2001 | 2024-04-20 | Bad News Kangaroos | W   | 0.612      | 0.143        | 0.028 (0.002)    | -                | -         |     1.22 | aliStair, dexter, INS, Liazz, Vexite |
|           36 |     2047 | 2024-04-19 | Rooster            | W   | 0.606      | -            | -                | -                | -         |     1.25 | aliStair, dexter, INS, Liazz, Vexite |
|           35 |     2054 | 2024-04-19 | Mindfreak          | W   | 0.604      | -            | -                | -                | -         |     0.72 | aliStair, dexter, INS, Liazz, Vexite |
|           34 |     2300 | 2024-04-10 | FaZe               | L   | 0.546      | -            | -                | -                | -         |    -0.69 | aliStair, dexter, INS, Liazz, Vexite |
|           33 |     2314 | 2024-04-10 | Nemiga             | W   | 0.544      | 0.624        | 0.498 (0.169)    | 0.725 (0.246)    | 1 (0.544) |     7.18 | aliStair, dexter, INS, Liazz, Vexite |
|           32 |     2364 | 2024-04-09 | Virtus.pro         | L   | 0.538      | -            | -                | -                | -         |    -1.56 | aliStair, dexter, INS, Liazz, Vexite |
|           31 |     2395 | 2024-04-08 | Cloud9             | W   | 0.531      | 0.624        | 0.119 (0.039)    | 0.175 (0.058)    | 1 (0.531) |     6.71 | aliStair, dexter, INS, Liazz, Vexite |
|           30 |     2538 | 2024-04-03 | Arcade             | W   | 0.498      | -            | -                | -                | -         |     0.42 | aliStair, dexter, INS, Liazz, Vexite |
|           29 |     2542 | 2024-04-03 | Arcade             | W   | 0.498      | -            | -                | -                | -         |     0.43 | aliStair, dexter, INS, Liazz, Vexite |
|           28 |     2663 | 2024-03-27 | KZG                | W   | 0.452      | -            | -                | -                | -         |     0.42 | aliStair, dexter, INS, Liazz, Vexite |
|           27 |     2669 | 2024-03-27 | KZG                | W   | 0.452      | -            | -                | -                | -         |     0.42 | aliStair, dexter, INS, Liazz, Vexite |
|           26 |     2934 | 2024-03-13 | Rooster            | W   | 0.358      | -            | -                | -                | -         |     0.71 | aliStair, dexter, INS, Liazz, Vexite |
|           25 |     2942 | 2024-03-13 | Rooster            | W   | 0.358      | -            | -                | -                | -         |     0.71 | aliStair, dexter, INS, Liazz, Vexite |
|           24 |     3110 | 2024-03-06 | DXA                | W   | 0.312      | -            | -                | -                | -         |     0.30 | aliStair, dexter, INS, Liazz, Vexite |
|           23 |     3112 | 2024-03-06 | DXA                | W   | 0.312      | -            | -                | -                | -         |     0.30 | aliStair, dexter, INS, Liazz, Vexite |
|           22 |     3260 | 2024-02-28 | Lynn Vision        | L   | 0.265      | -            | -                | -                | -         |    -6.37 | aliStair, dexter, INS, Liazz, Vexite |
|           21 |     3261 | 2024-02-27 | ATOX               | W   | 0.264      | -            | -                | -                | 1 (0.264) |     0.90 | aliStair, dexter, INS, Liazz, Vexite |
|           20 |     3281 | 2024-02-27 | JiJieHao           | W   | 0.258      | -            | -                | -                | 1 (0.258) |     0.05 | aliStair, dexter, INS, Liazz, Vexite |
|           19 |     3298 | 2024-02-25 | The MongolZ        | L   | 0.251      | -            | -                | -                | -         |    -0.20 | aliStair, dexter, INS, Liazz, Vexite |
|           18 |     3303 | 2024-02-25 | ATOX               | W   | 0.250      | -            | -                | -                | 1 (0.250) |     0.84 | aliStair, dexter, INS, Liazz, Vexite |
|           17 |     3363 | 2024-02-23 | Rooster            | W   | 0.232      | -            | -                | -                | -         |     0.44 | aliStair, dexter, INS, Liazz, Vexite |
|           16 |     3383 | 2024-02-22 | Rooster            | W   | 0.225      | -            | -                | -                | -         |     0.42 | aliStair, dexter, INS, Liazz, Vexite |
|           15 |     3386 | 2024-02-21 | Bad News Kangaroos | W   | 0.224      | -            | -                | -                | -         |     0.42 | aliStair, dexter, INS, Liazz, Vexite |
|           14 |     3411 | 2024-02-21 | Bad News Kangaroos | W   | 0.219      | 0.333        | 0.028 (0.002)    | -                | -         |     0.41 | aliStair, dexter, INS, Liazz, Vexite |
|           13 |     3415 | 2024-02-21 | Bad News Kangaroos | W   | 0.218      | 0.333        | 0.028 (0.002)    | -                | -         |     0.42 | aliStair, dexter, INS, Liazz, Vexite |
|           12 |     3468 | 2024-02-19 | Mindfreak          | W   | 0.204      | -            | -                | -                | -         |     0.21 | aliStair, dexter, INS, Liazz, Vexite |
|           11 |     3486 | 2024-02-18 | Arcade             | W   | 0.198      | -            | -                | -                | -         |     0.18 | aliStair, dexter, INS, Liazz, Vexite |
|           10 |     3489 | 2024-02-18 | MANTRA             | W   | 0.198      | -            | -                | -                | -         |     0.04 | aliStair, dexter, INS, Liazz, Vexite |
|            9 |     3490 | 2024-02-17 | Arcade             | W   | 0.196      | -            | -                | -                | -         |     0.17 | aliStair, dexter, INS, Liazz, Vexite |
|            8 |     3512 | 2024-02-16 | GR                 | W   | 0.190      | -            | -                | -                | -         |     0.18 | aliStair, dexter, INS, Liazz, Vexite |
|            7 |     3978 | 2024-01-23 | Mindfreak          | W   | 0.025      | -            | -                | -                | -         |     0.01 | aliStair, dexter, INS, Liazz, Vexite |
|            6 |     4007 | 2024-01-22 | Mindfreak          | W   | 0.019      | -            | -                | -                | -         |     0.01 | aliStair, dexter, INS, Liazz, Vexite |
|            5 |     4009 | 2024-01-22 | Bad News Kangaroos | W   | 0.018      | -            | -                | -                | -         |     0.03 | aliStair, dexter, INS, Liazz, Vexite |
|            4 |     4034 | 2024-01-21 | Bad News Kangaroos | W   | 0.012      | -            | -                | -                | -         |     0.02 | aliStair, dexter, INS, Liazz, Vexite |
|            3 |     4039 | 2024-01-20 | Rooster            | W   | 0.011      | -            | -                | -                | -         |     0.02 | aliStair, dexter, INS, Liazz, Vexite |
|            2 |     4043 | 2024-01-20 | Mindfreak          | W   | 0.010      | -            | -                | -                | -         |     0.00 | aliStair, dexter, INS, Liazz, Vexite |
|            1 |     4084 | 2024-01-20 | Vantage            | W   | 0.005      | -            | -                | -                | -         |     0.00 | aliStair, dexter, INS, Liazz, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($28,513.16)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.945 | $3,250.00      | $3,069.99       |
| 2024-06-02 |      0.901 | $4,000.00      | $3,605.57       |
| 2024-05-12 |      0.760 | $23,500.00     | $17,865.76      |
| 2024-04-14 |      0.572 | $6,000.00      | $3,432.73       |
| 2024-02-17 |      0.196 | $2,750.00      | $539.10         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
