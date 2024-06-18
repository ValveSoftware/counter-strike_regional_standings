### Roster Details<br />
Team Name: Nemiga<br />
Roster: 1eeR, khaN, riskyb0b, roman, Xant3r<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [36](../standings_global.md)<br />
Regional Rank: [26]( ../standings_europe.md)<br />
Final Rank Value:  1237.1<br />
<br />
Final Rank Value (1237.1) = Starting Rank Value (1291.8) + Head To Head Adjustments (-54.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.761[<sup>1</sup>](#table2)
- Bounty Collected: 0.489[<sup>2</sup>](#table1)
- Opponent Network: 0.429[<sup>2</sup>](#table1)
- LAN Wins: 0.076[<sup>2</sup>](#table1)

The average of these factors is 0.439<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1291.8
- 400 + ( ( 0.439 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1291.8


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
|           51 |       49 | 2024-06-15 | Zero Tenacity     | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.76 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           50 |       85 | 2024-06-14 | System5           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.78 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           49 |      122 | 2024-06-13 | Verdant           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.55 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           48 |      151 | 2024-06-12 | FAVBET            | L   | 1.000      | -            | -                | -                | -         |   -27.73 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           47 |      168 | 2024-06-11 | Permitta          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.49 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           46 |      180 | 2024-06-11 | Rhyno             | W   | 1.000      | 0.500        | 0.094 (0.047)    | -                | 0 (0.000) |     8.29 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           45 |      205 | 2024-06-10 | BLEED             | W   | 1.000      | 0.500        | 0.347 (0.174)    | 0.946 (0.473)    | 0 (0.000) |    17.97 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           44 |      271 | 2024-06-09 | Zero Tenacity     | W   | 1.000      | 0.500        | 0.153 (0.077)    | 1.000 (0.500)    | 0 (0.000) |    11.22 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           43 |      434 | 2024-06-06 | Sampi             | W   | 1.000      | 0.500        | -                | 0.837 (0.418)    | 0 (0.000) |     6.65 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           42 |      541 | 2024-06-04 | CYBERSHOKE        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.22 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           41 |      587 | 2024-06-02 | Grannys Knockers  | L   | 1.000      | -            | -                | -                | -         |   -28.43 | 1eeR, boX, khaN, riskyb0b, Xant3r    |
|           40 |      683 | 2024-05-30 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -26.45 | 1eeR, boX, khaN, riskyb0b, Xant3r    |
|           39 |     1274 | 2024-05-10 | RUBY              | L   | 0.941      | -            | -                | -                | -         |   -24.34 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           38 |     1318 | 2024-05-08 | 1WIN              | L   | 0.927      | -            | -                | -                | -         |   -23.19 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           37 |     1337 | 2024-05-07 | SINNERS           | W   | 0.921      | -            | -                | -                | -         |     5.67 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           36 |     1361 | 2024-05-05 | VP.Prodigy        | W   | 0.909      | -            | -                | -                | -         |     2.91 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           35 |     1401 | 2024-05-03 | MOUZ NXT          | W   | 0.895      | 0.500        | 0.158 (0.071)    | 1.000 (0.448)    | -         |     7.23 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           34 |     1424 | 2024-05-02 | Passion UA        | W   | 0.889      | 0.500        | -                | 0.803 (0.357)    | -         |     4.71 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           33 |     1445 | 2024-05-01 | B8                | W   | 0.883      | 0.500        | 0.229 (0.101)    | 1.000 (0.441)    | -         |     7.17 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           32 |     1490 | 2024-04-29 | MOUZ NXT          | W   | 0.869      | 0.500        | 0.158 (0.069)    | 1.000 (0.435)    | -         |     7.30 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           31 |     1521 | 2024-04-28 | Grannys Knockers  | L   | 0.861      | -            | -                | -                | -         |   -25.24 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           30 |     1543 | 2024-04-27 | 1WIN              | W   | 0.855      | -            | -                | -                | -         |     5.06 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           29 |     1567 | 2024-04-26 | Sangal            | L   | 0.848      | -            | -                | -                | -         |   -19.32 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           28 |     1611 | 2024-04-24 | BLEED             | W   | 0.835      | 0.500        | 0.347 (0.145)    | 0.946 (0.395)    | -         |    15.96 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           27 |     1635 | 2024-04-23 | Zero Tenacity     | W   | 0.828      | 0.500        | 0.153 (0.064)    | 1.000 (0.414)    | -         |     5.93 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           26 |     1653 | 2024-04-22 | MOUZ NXT          | W   | 0.820      | 0.500        | 0.158 (0.065)    | 1.000 (0.410)    | -         |     6.94 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           25 |     1669 | 2024-04-21 | 1WIN              | W   | 0.814      | -            | -                | -                | -         |     4.87 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           24 |     1702 | 2024-04-20 | Gaimin Gladiators | L   | 0.807      | -            | -                | -                | -         |   -13.48 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           23 |     1737 | 2024-04-19 | Sangal            | W   | 0.802      | 0.500        | 0.216 (0.087)    | -                | -         |     7.46 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           22 |     1783 | 2024-04-18 | Secret            | W   | 0.795      | -            | -                | -                | -         |     0.62 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           21 |     1825 | 2024-04-17 | Alliance          | W   | 0.789      | -            | -                | -                | -         |     2.86 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           20 |     2016 | 2024-04-10 | FlyQuest          | L   | 0.739      | -            | -                | -                | -         |    -8.13 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           19 |     2065 | 2024-04-09 | Steel Helmet      | W   | 0.733      | -            | -                | -                | 1 (0.733) |     0.67 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           18 |     2094 | 2024-04-08 | FaZe              | L   | 0.727      | -            | -                | -                | -         |    -0.50 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           17 |     2286 | 2024-04-01 | Zero Tenacity     | W   | 0.680      | -            | -                | -                | -         |     5.46 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           16 |     2419 | 2024-03-22 | Sashi             | L   | 0.616      | -            | -                | -                | -         |   -14.17 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           15 |     2655 | 2024-03-12 | Nexus             | L   | 0.550      | -            | -                | -                | -         |   -15.78 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           14 |     2682 | 2024-03-11 | Sashi             | W   | 0.542      | -            | -                | -                | -         |     3.91 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           13 |     2699 | 2024-03-10 | Endpoint          | W   | 0.536      | -            | -                | -                | -         |     1.74 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           12 |     2771 | 2024-03-07 | Zero Tenacity     | W   | 0.516      | -            | -                | -                | -         |     3.81 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           11 |     2833 | 2024-03-05 | KOI               | L   | 0.503      | -            | -                | -                | -         |   -10.45 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           10 |     2841 | 2024-03-05 | GUN5              | W   | 0.502      | -            | -                | -                | -         |     0.10 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            9 |     3356 | 2024-02-10 | Sashi             | W   | 0.343      | -            | -                | -                | -         |     3.19 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            8 |     3372 | 2024-02-09 | AMKAL             | W   | 0.336      | -            | -                | -                | -         |     3.85 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            7 |     3387 | 2024-02-08 | Sashi             | W   | 0.330      | -            | -                | -                | -         |     3.03 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            6 |     3392 | 2024-02-08 | BetBoom           | W   | 0.329      | -            | -                | -                | -         |     9.21 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            5 |     3559 | 2024-01-30 | RUBY              | W   | 0.270      | -            | -                | -                | -         |     1.31 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            4 |     3562 | 2024-01-30 | ex-Sprout         | W   | 0.269      | -            | -                | -                | -         |     0.16 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            3 |     3566 | 2024-01-30 | 9 Pandas          | W   | 0.269      | -            | -                | -                | -         |     2.75 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            2 |     3981 | 2024-01-16 | samaloyod         | L   | 0.176      | -            | -                | -                | -         |    -5.48 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            1 |     4237 | 2024-01-09 | brazylijski luz   | L   | 0.129      | -            | -                | -                | -         |    -3.82 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($146,193.91)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.49) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-11 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-05-09 |      0.934 | $4,000.00      | $3,737.54       |
| 2024-05-03 |      0.895 | $50,000.00     | $44,760.82      |
| 2024-04-24 |      0.835 | $50,000.00     | $41,760.47      |
| 2024-04-14 |      0.767 | $5,000.00      | $3,837.03       |
| 2024-03-25 |      0.636 | $3,300.00      | $2,098.04       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
