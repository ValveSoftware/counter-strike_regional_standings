### Roster Details<br />
Team Name: Nemiga<br />
Roster: 1eeR, khaN, riskyb0b, Xant3r, zweih<br />
Global Rank: [30](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [22]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  1179.0<br />
<br />
Final Rank Value (1179.0) = Starting Rank Value (1157.6) + Head To Head Adjustments (21.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.651[<sup>1</sup>](#table2)
- Bounty Collected: 0.496[<sup>2</sup>](#table1)
- Opponent Network: 0.388[<sup>2</sup>](#table1)
- LAN Wins: 0.012[<sup>2</sup>](#table1)

The average of these factors is 0.387<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1157.6
- 400 + ( ( 0.387 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 1157.6


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
|           67 |       48 | 2024-09-16 | CYBERSHOKE        | W   | 1.000      | 0.443        | -                | 0.750 (0.332)    | 0 (0.000) |     9.16 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           66 |       58 | 2024-09-16 | BOGATYRI          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.40 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           65 |      183 | 2024-09-12 | Monte             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.00 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           64 |      297 | 2024-09-07 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -18.88 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           63 |      362 | 2024-09-05 | Permitta          | W   | 1.000      | 0.435        | -                | 0.979 (0.425)    | 0 (0.000) |     5.79 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           62 |      454 | 2024-09-03 | Sashi             | W   | 1.000      | 0.384        | 0.164 (0.063)    | 0.938 (0.360)    | 0 (0.000) |    11.58 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           61 |      626 | 2024-08-28 | Metizport         | L   | 1.000      | -            | -                | -                | -         |   -23.98 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           60 |      668 | 2024-08-27 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -25.20 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           59 |      838 | 2024-08-23 | Insilio           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.33 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           58 |      852 | 2024-08-23 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -19.66 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           57 |      892 | 2024-08-22 | Sashi             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.51 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           56 |      934 | 2024-08-21 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -26.74 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           55 |      956 | 2024-08-21 | ARCRED            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.05 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           54 |     1119 | 2024-08-15 | Sangal            | W   | 0.974      | 0.500        | 0.292 (0.142)    | 0.811 (0.395)    | 0 (0.000) |    21.02 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           53 |     1209 | 2024-08-12 | 3DMAX             | W   | 0.955      | 0.500        | 0.521 (0.249)    | 0.869 (0.415)    | -         |    24.73 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           52 |     1249 | 2024-08-11 | Endpoint          | W   | 0.946      | 0.426        | 0.073 (0.029)    | -                | -         |     7.16 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           51 |     1273 | 2024-08-10 | B8                | W   | 0.939      | 0.426        | 0.252 (0.101)    | 1.000 (0.400)    | -         |    12.72 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           50 |     1294 | 2024-08-09 | 9 Pandas          | W   | 0.934      | 0.426        | -                | 0.786 (0.313)    | -         |    12.79 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           49 |     1311 | 2024-08-08 | Sampi             | W   | 0.928      | 0.426        | -                | 1.000 (0.396)    | -         |     5.91 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           48 |     1346 | 2024-08-07 | B8                | W   | 0.922      | 0.500        | 0.252 (0.116)    | 1.000 (0.461)    | -         |    14.28 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           47 |     1467 | 2024-08-04 | Aurora            | W   | 0.900      | 0.500        | 0.268 (0.121)    | -                | -         |    21.70 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           46 |     1503 | 2024-08-03 | Permitta          | L   | 0.894      | -            | -                | -                | -         |   -20.75 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           45 |     1547 | 2024-08-02 | fnatic            | L   | 0.886      | -            | -                | -                | -         |    -6.47 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           44 |     1551 | 2024-08-02 | Johnny Speeds     | L   | 0.885      | -            | -                | -                | -         |   -14.15 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           43 |     1617 | 2024-07-31 | Space             | W   | 0.875      | -            | -                | -                | -         |     3.89 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           42 |     1679 | 2024-07-30 | G2 Ares           | W   | 0.866      | -            | -                | -                | -         |     0.40 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           41 |     2031 | 2024-07-19 | Passion UA        | L   | 0.793      | -            | -                | -                | -         |   -16.31 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           40 |     2057 | 2024-07-18 | Qiang             | W   | 0.788      | -            | -                | -                | -         |     5.24 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           39 |     2128 | 2024-07-17 | BLEED             | L   | 0.782      | -            | -                | -                | -         |   -10.15 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           38 |     2190 | 2024-07-16 | ARCRED            | W   | 0.775      | -            | -                | -                | -         |     5.08 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           37 |     2237 | 2024-07-15 | Passion UA        | W   | 0.768      | 0.500        | 0.174 (0.067)    | 1.000 (0.384)    | -         |     7.82 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           36 |     2493 | 2024-06-15 | Zero Tenacity     | W   | 0.568      | -            | -                | -                | -         |     7.02 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           35 |     2529 | 2024-06-14 | System5           | W   | 0.561      | -            | -                | -                | -         |     0.95 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           34 |     2566 | 2024-06-13 | Verdant           | W   | 0.555      | -            | -                | -                | -         |     3.63 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           33 |     2595 | 2024-06-12 | FAVBET            | L   | 0.548      | -            | -                | -                | -         |   -14.68 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           32 |     2612 | 2024-06-11 | Permitta          | W   | 0.542      | -            | -                | -                | -         |     3.81 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           31 |     2624 | 2024-06-11 | Rhyno             | W   | 0.540      | -            | -                | -                | -         |     4.11 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           30 |     2649 | 2024-06-10 | BLEED             | W   | 0.533      | -            | -                | -                | -         |    10.46 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           29 |     2715 | 2024-06-09 | Zero Tenacity     | W   | 0.526      | 0.500        | 0.168 (0.044)    | -                | -         |     6.94 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           28 |     2878 | 2024-06-06 | Sampi             | W   | 0.507      | -            | -                | -                | -         |     4.07 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           27 |     2985 | 2024-06-04 | CYBERSHOKE        | W   | 0.494      | -            | -                | -                | -         |     3.99 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           26 |     3031 | 2024-06-02 | Grannys Knockers  | L   | 0.481      | -            | -                | -                | -         |   -13.81 | 1eeR, boX, khaN, riskyb0b, Xant3r    |
|           25 |     3125 | 2024-05-30 | DMS               | L   | 0.460      | -            | -                | -                | -         |   -11.85 | 1eeR, boX, khaN, riskyb0b, Xant3r    |
|           24 |     3716 | 2024-05-10 | RUBY              | L   | 0.326      | -            | -                | -                | -         |    -8.45 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           23 |     3760 | 2024-05-08 | 1WIN              | L   | 0.312      | -            | -                | -                | -         |    -8.14 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           22 |     3779 | 2024-05-07 | SINNERS           | W   | 0.306      | -            | -                | -                | -         |     4.93 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           21 |     3803 | 2024-05-05 | VP.Prodigy        | W   | 0.295      | -            | -                | -                | -         |     1.16 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           20 |     3843 | 2024-05-03 | MOUZ NXT          | W   | 0.280      | -            | -                | -                | -         |     2.39 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           19 |     3866 | 2024-05-02 | Passion UA        | W   | 0.274      | -            | -                | -                | -         |     2.82 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           18 |     3887 | 2024-05-01 | B8                | W   | 0.268      | 0.500        | 0.252 (0.034)    | -                | -         |     3.39 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           17 |     3932 | 2024-04-29 | MOUZ NXT          | W   | 0.255      | -            | -                | -                | -         |     2.20 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           16 |     3963 | 2024-04-28 | Grannys Knockers  | L   | 0.246      | -            | -                | -                | -         |    -7.19 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           15 |     3985 | 2024-04-27 | 1WIN              | W   | 0.240      | -            | -                | -                | -         |     1.32 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           14 |     4009 | 2024-04-26 | Sangal            | L   | 0.233      | -            | -                | -                | -         |    -2.16 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           13 |     4053 | 2024-04-24 | BLEED             | W   | 0.220      | -            | -                | -                | -         |     1.13 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           12 |     4077 | 2024-04-23 | Zero Tenacity     | W   | 0.213      | -            | -                | -                | -         |     2.63 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           11 |     4095 | 2024-04-22 | MOUZ NXT          | W   | 0.206      | -            | -                | -                | -         |     1.76 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           10 |     4111 | 2024-04-21 | 1WIN              | W   | 0.199      | -            | -                | -                | -         |     1.10 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            9 |     4144 | 2024-04-20 | Gaimin Gladiators | L   | 0.193      | -            | -                | -                | -         |    -4.65 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            8 |     4179 | 2024-04-19 | Sangal            | W   | 0.187      | -            | -                | -                | -         |     4.30 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            7 |     4225 | 2024-04-18 | Secret            | W   | 0.181      | -            | -                | -                | -         |     0.15 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            6 |     4267 | 2024-04-17 | Alliance          | W   | 0.174      | -            | -                | -                | -         |     0.75 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            5 |     4458 | 2024-04-10 | FlyQuest          | L   | 0.125      | -            | -                | -                | -         |    -2.78 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            4 |     4507 | 2024-04-09 | Steel Helmet      | W   | 0.119      | -            | -                | -                | 1 (0.119) |     0.11 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            3 |     4536 | 2024-04-08 | FaZe              | L   | 0.112      | -            | -                | -                | -         |    -0.13 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            2 |     4728 | 2024-04-01 | Zero Tenacity     | W   | 0.066      | -            | -                | -                | -         |     0.82 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            1 |     4860 | 2024-03-22 | Sashi             | L   | 0.001      | -            | -                | -                | -         |    -0.03 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($79,829.57)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.29) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-08 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-08-11 |      0.946 | $25,000.00     | $23,662.46      |
| 2024-06-11 |      0.540 | $50,000.00     | $27,017.78      |
| 2024-05-09 |      0.320 | $4,000.00      | $1,278.25       |
| 2024-05-03 |      0.280 | $50,000.00     | $14,019.69      |
| 2024-04-24 |      0.220 | $50,000.00     | $11,019.34      |
| 2024-04-14 |      0.153 | $5,000.00      | $762.92         |
| 2024-03-25 |      0.021 | $3,300.00      | $69.13          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
