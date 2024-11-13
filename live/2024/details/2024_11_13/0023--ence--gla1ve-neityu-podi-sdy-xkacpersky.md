### Roster Details<br />
Team Name: ENCE<br />
Roster: gla1ve, Neityu, podi, sdy, xKacpersky<br />
Global Rank: [23](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_13.md)<br />
Regional Rank: [18]( ../../standings_europe_2024_11_13.md)<br />
<br />
Final Rank Value:  1298.6<br />
<br />
Final Rank Value (1298.6) = Starting Rank Value (1395.0) + Head To Head Adjustments (-96.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.629[<sup>1</sup>](#table2)
- Bounty Collected: 0.514[<sup>2</sup>](#table1)
- Opponent Network: 0.183[<sup>2</sup>](#table1)
- LAN Wins: 0.667[<sup>2</sup>](#table1)

The average of these factors is 0.498<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1395.0
- 400 + ( ( 0.498 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 1395.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |       80 | 2024-11-11 | 500               | L   | 1.000      | -            | -                | -                | -         |   -24.72 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           34 |      120 | 2024-11-09 | Into the Breach   | W   | 1.000      | 0.354        | -                | 0.673 (0.238)    | -         |     3.89 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           33 |      472 | 2024-10-20 | HEROIC            | W   | 1.000      | 0.589        | 0.549 (0.323)    | 0.505 (0.297)    | 1 (1.000) |    27.41 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           32 |      506 | 2024-10-19 | The MongolZ       | W   | 1.000      | 0.589        | 1.000 (0.589)    | 0.636 (0.375)    | 1 (1.000) |    29.15 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           31 |      536 | 2024-10-18 | 9z                | W   | 1.000      | 0.589        | 0.113 (0.067)    | 0.316 (0.186)    | 1 (1.000) |    14.74 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           30 |      561 | 2024-10-17 | HEROIC            | L   | 1.000      | -            | -                | -                | -         |    -2.98 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           29 |      569 | 2024-10-17 | 9z                | W   | 1.000      | 0.589        | 0.113 (0.067)    | 0.316 (0.186)    | 1 (1.000) |    15.70 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           28 |     1597 | 2024-09-13 | ATOX              | L   | 0.793      | -            | -                | -                | -         |   -19.31 | gla1ve, Goofy, Kylar, podi, sdy       |
|           27 |     1632 | 2024-09-12 | RED Canids        | L   | 0.786      | -            | -                | -                | -         |   -14.90 | gla1ve, Goofy, Kylar, podi, sdy       |
|           26 |     1696 | 2024-09-10 | Liquid            | L   | 0.773      | -            | -                | -                | -         |    -3.83 | gla1ve, Goofy, Kylar, podi, sdy       |
|           25 |     1979 | 2024-08-30 | Young Ninjas      | L   | 0.700      | -            | -                | -                | -         |   -20.45 | gla1ve, Goofy, Kylar, podi, sdy       |
|           24 |     2314 | 2024-08-23 | Monte             | L   | 0.652      | -            | -                | -                | -         |   -16.47 | gla1ve, Goofy, Kylar, podi, sdy       |
|           23 |     2331 | 2024-08-22 | ex-Enterprise     | W   | 0.646      | -            | -                | -                | -         |     2.42 | gla1ve, Goofy, Kylar, podi, sdy       |
|           22 |     2369 | 2024-08-21 | UNiTY             | L   | 0.640      | -            | -                | -                | -         |   -17.51 | gla1ve, Goofy, Kylar, podi, sdy       |
|           21 |     2421 | 2024-08-21 | KOI               | L   | 0.638      | -            | -                | -                | -         |   -19.01 | gla1ve, Goofy, Kylar, podi, sdy       |
|           20 |     2465 | 2024-08-19 | kONO              | L   | 0.626      | -            | -                | -                | -         |   -18.66 | gla1ve, Goofy, Kylar, podi, sdy       |
|           19 |     2895 | 2024-08-05 | PARIVISION        | L   | 0.532      | -            | -                | -                | -         |   -14.26 | gla1ve, Goofy, Kylar, podi, sdy       |
|           18 |     2916 | 2024-08-04 | 9INE              | W   | 0.527      | 0.435        | 0.056 (0.013)    | 0.789 (0.181)    | -         |     1.52 | gla1ve, Goofy, Kylar, podi, sdy       |
|           17 |     3220 | 2024-07-27 | 3DMAX             | L   | 0.473      | -            | -                | -                | -         |    -5.36 | gla1ve, Goofy, Kylar, podi, sdy       |
|           16 |     3249 | 2024-07-26 | True Rippers      | W   | 0.465      | -            | -                | -                | 1 (0.465) |     0.21 | gla1ve, Goofy, Kylar, podi, sdy       |
|           15 |     3288 | 2024-07-25 | PARIVISION        | W   | 0.459      | 0.650        | 0.028 (0.008)    | 0.475 (0.142)    | 1 (0.459) |     2.10 | gla1ve, Goofy, Kylar, podi, sdy       |
|           14 |     3297 | 2024-07-25 | Aurora            | L   | 0.457      | -            | -                | -                | -         |   -11.52 | gla1ve, Goofy, Kylar, podi, sdy       |
|           13 |     3319 | 2024-07-24 | The MongolZ       | L   | 0.453      | -            | -                | -                | -         |    -1.11 | gla1ve, Goofy, Kylar, podi, sdy       |
|           12 |     3329 | 2024-07-24 | UNPAID            | W   | 0.451      | 0.650        | 0.120 (0.035)    | 0.385 (0.113)    | 1 (0.451) |     4.78 | gla1ve, Goofy, Kylar, podi, sdy       |
|           11 |     3929 | 2024-06-16 | Falcons           | L   | 0.198      | -            | -                | -                | -         |    -4.55 | gla1ve, Goofy, Kylar, podi, sdy       |
|           10 |     3998 | 2024-06-14 | Complexity        | W   | 0.186      | 0.500        | 0.137 (0.013)    | -                | 1 (0.186) |     3.79 | gla1ve, Goofy, Kylar, podi, sdy       |
|            9 |     4005 | 2024-06-14 | MIBR              | W   | 0.185      | 0.500        | 0.138 (0.013)    | 0.548 (0.051)    | 1 (0.185) |     3.54 | gla1ve, Goofy, Kylar, podi, sdy       |
|            8 |     4340 | 2024-06-06 | HEROIC            | L   | 0.133      | -            | -                | -                | -         |    -0.54 | gla1ve, Goofy, Kylar, podi, sdy       |
|            7 |     4353 | 2024-06-06 | Astralis          | L   | 0.132      | -            | -                | -                | -         |    -1.67 | gla1ve, Goofy, Kylar, podi, sdy       |
|            6 |     4390 | 2024-06-05 | Sashi             | W   | 0.127      | 0.715        | 0.056 (0.005)    | 0.652 (0.059)    | 1 (0.127) |     0.36 | gla1ve, Goofy, Kylar, podi, sdy       |
|            5 |     4400 | 2024-06-05 | The MongolZ       | L   | 0.126      | -            | -                | -                | -         |    -0.21 | gla1ve, Goofy, Kylar, podi, sdy       |
|            4 |     4410 | 2024-06-05 | Ninjas in Pyjamas | L   | 0.125      | -            | -                | -                | -         |    -3.08 | gla1ve, Goofy, Kylar, podi, sdy       |
|            3 |     4515 | 2024-06-01 | DMS               | L   | 0.100      | -            | -                | -                | -         |    -3.03 | gla1ve, Goofy, Kylar, podi, sdy       |
|            2 |     4521 | 2024-06-01 | KOI               | W   | 0.100      | -            | -                | -                | -         |     0.11 | gla1ve, Goofy, Kylar, podi, sdy       |
|            1 |     4530 | 2024-06-01 | DMS               | L   | 0.098      | -            | -                | -                | -         |    -2.98 | gla1ve, Goofy, Kylar, podi, sdy       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($115,483.17)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.26) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-10-20 |      1.000 | $100,000.00    | $100,000.00     |
| 2024-09-22 |      0.854 | $3,500.00      | $2,988.86       |
| 2024-08-06 |      0.540 | $2,000.00      | $1,079.96       |
| 2024-07-28 |      0.480 | $15,000.00     | $7,195.88       |
| 2024-06-16 |      0.199 | $10,000.00     | $1,992.90       |
| 2024-06-09 |      0.153 | $8,000.00      | $1,225.58       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
