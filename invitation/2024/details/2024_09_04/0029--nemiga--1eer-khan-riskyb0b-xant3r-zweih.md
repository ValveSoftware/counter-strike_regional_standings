### Roster Details<br />
Team Name: Nemiga<br />
Roster: 1eeR, khaN, riskyb0b, Xant3r, zweih<br />
Global Rank: [29](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_04.md)<br />
Regional Rank: [21]( ../../standings_europe_2024_09_04.md)<br />
<br />
Final Rank Value:  1164.1<br />
<br />
Final Rank Value (1164.1) = Starting Rank Value (1174.9) + Head To Head Adjustments (-10.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.656[<sup>1</sup>](#table2)
- Bounty Collected: 0.490[<sup>2</sup>](#table1)
- Opponent Network: 0.396[<sup>2</sup>](#table1)
- LAN Wins: 0.022[<sup>2</sup>](#table1)

The average of these factors is 0.391<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1174.9
- 400 + ( ( 0.391 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 1174.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           65 |       44 | 2024-09-03 | Sashi             | W   | 1.000      | 0.384        | 0.152 (0.059)    | 0.966 (0.371)    | 0 (0.000) |    11.77 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           64 |      216 | 2024-08-28 | Metizport         | L   | 1.000      | -            | -                | -                | -         |   -24.04 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           63 |      258 | 2024-08-27 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -25.58 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           62 |      428 | 2024-08-23 | Insilio           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.98 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           61 |      442 | 2024-08-23 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -19.68 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           60 |      482 | 2024-08-22 | Sashi             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.68 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           59 |      524 | 2024-08-21 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -26.93 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           58 |      546 | 2024-08-21 | ARCRED            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.48 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           57 |      709 | 2024-08-15 | Sangal            | W   | 1.000      | 0.500        | 0.248 (0.124)    | 0.831 (0.416)    | 0 (0.000) |    19.83 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           56 |      799 | 2024-08-12 | 3DMAX             | W   | 1.000      | 0.500        | 0.469 (0.234)    | 0.926 (0.463)    | 0 (0.000) |    23.83 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           55 |      839 | 2024-08-11 | Endpoint          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.47 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           54 |      863 | 2024-08-10 | B8                | W   | 1.000      | 0.426        | 0.176 (0.075)    | 1.000 (0.426)    | 0 (0.000) |    12.91 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           53 |      884 | 2024-08-09 | 9 Pandas          | W   | 1.000      | 0.426        | -                | 0.719 (0.306)    | 0 (0.000) |    13.88 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           52 |      901 | 2024-08-08 | Sampi             | W   | 1.000      | 0.426        | -                | 1.000 (0.426)    | -         |     6.13 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           51 |      936 | 2024-08-07 | B8                | W   | 1.000      | 0.500        | 0.176 (0.088)    | 1.000 (0.500)    | -         |    14.91 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           50 |     1057 | 2024-08-04 | Aurora            | W   | 0.993      | 0.500        | 0.299 (0.148)    | 0.636 (0.316)    | -         |    24.76 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           49 |     1093 | 2024-08-03 | Permitta          | L   | 0.987      | -            | -                | -                | -         |   -22.72 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           48 |     1137 | 2024-08-02 | fnatic            | L   | 0.979      | -            | -                | -                | -         |    -7.48 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           47 |     1141 | 2024-08-02 | Johnny Speeds     | L   | 0.978      | -            | -                | -                | -         |   -14.27 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           46 |     1207 | 2024-07-31 | Space             | W   | 0.968      | -            | -                | -                | -         |     4.65 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           45 |     1269 | 2024-07-30 | G2 Ares           | W   | 0.959      | -            | -                | -                | -         |     0.46 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           44 |     1621 | 2024-07-19 | Passion UA        | L   | 0.886      | -            | -                | -                | -         |   -18.18 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           43 |     1647 | 2024-07-18 | Qiang             | W   | 0.881      | -            | -                | -                | -         |     6.78 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           42 |     1718 | 2024-07-17 | BLEED             | L   | 0.875      | -            | -                | -                | -         |   -22.71 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           41 |     1780 | 2024-07-16 | ARCRED            | W   | 0.868      | -            | -                | -                | -         |     5.92 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           40 |     1827 | 2024-07-15 | Passion UA        | W   | 0.861      | 0.500        | 0.147 (0.063)    | 1.000 (0.431)    | -         |     8.30 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           39 |     2083 | 2024-06-15 | Zero Tenacity     | W   | 0.661      | -            | -                | -                | -         |     7.75 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           38 |     2119 | 2024-06-14 | System5           | W   | 0.654      | -            | -                | -                | -         |     1.13 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           37 |     2156 | 2024-06-13 | Verdant           | W   | 0.647      | -            | -                | -                | -         |     3.63 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           36 |     2185 | 2024-06-12 | FAVBET            | L   | 0.641      | -            | -                | -                | -         |   -17.56 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           35 |     2202 | 2024-06-11 | Permitta          | W   | 0.635      | -            | -                | -                | -         |     4.33 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           34 |     2214 | 2024-06-11 | Rhyno             | W   | 0.633      | -            | -                | -                | -         |     4.29 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           33 |     2239 | 2024-06-10 | BLEED             | W   | 0.626      | 0.500        | 0.142 (0.044)    | -                | -         |     8.15 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           32 |     2305 | 2024-06-09 | Zero Tenacity     | W   | 0.618      | 0.500        | 0.138 (0.043)    | 1.000 (0.309)    | -         |     7.57 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           31 |     2468 | 2024-06-06 | Sampi             | W   | 0.600      | -            | -                | -                | -         |     4.38 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           30 |     2575 | 2024-06-04 | CYBERSHOKE        | W   | 0.587      | -            | -                | -                | -         |     4.24 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           29 |     2621 | 2024-06-02 | Grannys Knockers  | L   | 0.573      | -            | -                | -                | -         |   -16.41 | 1eeR, boX, khaN, riskyb0b, Xant3r    |
|           28 |     2715 | 2024-05-30 | DMS               | L   | 0.553      | -            | -                | -                | -         |   -14.14 | 1eeR, boX, khaN, riskyb0b, Xant3r    |
|           27 |     3306 | 2024-05-10 | RUBY              | L   | 0.419      | -            | -                | -                | -         |   -10.88 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           26 |     3350 | 2024-05-08 | 1WIN              | L   | 0.405      | -            | -                | -                | -         |   -10.38 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           25 |     3369 | 2024-05-07 | SINNERS           | W   | 0.399      | -            | -                | -                | -         |     5.15 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           24 |     3393 | 2024-05-05 | VP.Prodigy        | W   | 0.387      | -            | -                | -                | -         |     1.51 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           23 |     3433 | 2024-05-03 | MOUZ NXT          | W   | 0.373      | -            | -                | -                | -         |     3.21 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           22 |     3456 | 2024-05-02 | Passion UA        | W   | 0.367      | -            | -                | -                | -         |     3.39 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           21 |     3477 | 2024-05-01 | B8                | W   | 0.361      | -            | -                | -                | -         |     3.52 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           20 |     3522 | 2024-04-29 | MOUZ NXT          | W   | 0.347      | -            | -                | -                | -         |     3.01 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           19 |     3553 | 2024-04-28 | Grannys Knockers  | L   | 0.339      | -            | -                | -                | -         |    -9.90 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           18 |     3575 | 2024-04-27 | 1WIN              | W   | 0.333      | -            | -                | -                | -         |     1.95 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           17 |     3599 | 2024-04-26 | Sangal            | L   | 0.326      | -            | -                | -                | -         |    -4.71 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           16 |     3643 | 2024-04-24 | BLEED             | W   | 0.313      | -            | -                | -                | -         |     3.67 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           15 |     3667 | 2024-04-23 | Zero Tenacity     | W   | 0.306      | -            | -                | -                | -         |     3.26 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           14 |     3685 | 2024-04-22 | MOUZ NXT          | W   | 0.298      | -            | -                | -                | -         |     2.55 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           13 |     3701 | 2024-04-21 | 1WIN              | W   | 0.292      | -            | -                | -                | -         |     1.72 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           12 |     3734 | 2024-04-20 | Gaimin Gladiators | L   | 0.285      | -            | -                | -                | -         |    -7.18 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           11 |     3769 | 2024-04-19 | Sangal            | W   | 0.280      | 0.500        | 0.248 (0.035)    | -                | -         |     5.06 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           10 |     3815 | 2024-04-18 | Secret            | W   | 0.273      | -            | -                | -                | -         |     0.23 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            9 |     3857 | 2024-04-17 | Alliance          | W   | 0.267      | -            | -                | -                | -         |     1.17 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            8 |     4048 | 2024-04-10 | FlyQuest          | L   | 0.218      | -            | -                | -                | -         |    -5.07 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            7 |     4097 | 2024-04-09 | Steel Helmet      | W   | 0.211      | -            | -                | -                | 1 (0.211) |     0.19 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            6 |     4126 | 2024-04-08 | FaZe              | L   | 0.205      | -            | -                | -                | -         |    -0.31 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            5 |     4318 | 2024-04-01 | Zero Tenacity     | W   | 0.158      | -            | -                | -                | -         |     1.74 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            4 |     4450 | 2024-03-22 | Sashi             | L   | 0.094      | -            | -                | -                | -         |    -1.81 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            3 |     4686 | 2024-03-12 | Nexus             | L   | 0.028      | -            | -                | -                | -         |    -0.77 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            2 |     4713 | 2024-03-11 | Sashi             | W   | 0.020      | -            | -                | -                | -         |     0.25 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            1 |     4730 | 2024-03-10 | Endpoint          | W   | 0.014      | -            | -                | -                | -         |     0.13 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($94,239.01)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.30) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-11 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-06-11 |      0.633 | $50,000.00     | $31,661.00      |
| 2024-05-09 |      0.412 | $4,000.00      | $1,649.71       |
| 2024-05-03 |      0.373 | $50,000.00     | $18,662.91      |
| 2024-04-24 |      0.313 | $50,000.00     | $15,662.57      |
| 2024-04-14 |      0.245 | $5,000.00      | $1,227.24       |
| 2024-03-25 |      0.114 | $3,300.00      | $375.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
