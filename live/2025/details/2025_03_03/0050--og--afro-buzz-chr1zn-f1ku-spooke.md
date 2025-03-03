### Roster Details<br />
Team Name: OG<br />
Roster: afro, Buzz, Chr1zN, F1KU, spooke<br />
Global Rank: [50](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [34]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  932.7<br />
<br />
Final Rank Value (932.7) = Starting Rank Value (872.8) + Head To Head Adjustments (59.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.451[<sup>1</sup>](#table2)
- Bounty Collected: 0.380[<sup>2</sup>](#table1)
- Opponent Network: 0.150[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.245<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 872.8
- 400 + ( ( 0.245 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 872.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |       15 | 2025-03-01 | FAVBET         | W   | 1.000      | 0.143        | 0.029 (0.004)    | 0.671 (0.096)    | 0 (0.000) |    10.78 | afro, Buzz, Chr1zN, F1KU, spooke     |
|           43 |       53 | 2025-02-25 | ESC            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.20 | afro, Buzz, Chr1zN, F1KU, spooke     |
|           42 |       70 | 2025-02-24 | Iberian Soul   | L   | 1.000      | -            | -                | -                | -         |   -20.06 | Buzz, Chr1zN, F1KU, nicoodoz, spooke |
|           41 |       75 | 2025-02-24 | Tricked        | W   | 1.000      | 0.143        | 0.033 (0.005)    | 0.768 (0.110)    | 0 (0.000) |    11.45 | afro, Buzz, Chr1zN, F1KU, spooke     |
|           40 |      126 | 2025-02-22 | BC.Game        | W   | 1.000      | 0.143        | 0.076 (0.011)    | 0.906 (0.129)    | 0 (0.000) |    23.48 | Buzz, Chr1zN, F1KU, nicoodoz, spooke |
|           39 |      161 | 2025-02-21 | Aurora         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.97 | Buzz, Chr1zN, F1KU, nicoodoz, spooke |
|           38 |      196 | 2025-02-17 | Leo            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.33 | afro, Buzz, Chr1zN, F1KU, spooke     |
|           37 |      197 | 2025-02-17 | CYBERSHOKE     | W   | 1.000      | 0.143        | -                | 1.000 (0.143)    | 0 (0.000) |    14.06 | afro, Buzz, Chr1zN, F1KU, spooke     |
|           36 |      206 | 2025-02-17 | WeLoveUSmooya  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.51 | afro, Buzz, Chr1zN, F1KU, spooke     |
|           35 |      215 | 2025-02-17 | moneytrees     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.18 | afro, Buzz, Chr1zN, F1KU, spooke     |
|           34 |      256 | 2025-02-15 | Rebels         | L   | 1.000      | -            | -                | -                | -         |   -22.71 | afro, Buzz, Chr1zN, F1KU, spooke     |
|           33 |      384 | 2025-02-10 | BIG            | L   | 1.000      | -            | -                | -                | -         |    -3.15 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           32 |      398 | 2025-02-10 | Astralis       | L   | 1.000      | -            | -                | -                | -         |    -0.32 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           31 |      430 | 2025-02-09 | RUSH B         | L   | 1.000      | -            | -                | -                | -         |   -18.01 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           30 |      431 | 2025-02-09 | Sashi          | L   | 1.000      | -            | -                | -                | -         |   -15.20 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           29 |      470 | 2025-02-08 | TNL            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.81 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           28 |      473 | 2025-02-08 | benched        | W   | 1.000      | -            | -                | -                | -         |     1.67 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           27 |      481 | 2025-02-08 | 500            | L   | 1.000      | -            | -                | -                | -         |   -10.16 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           26 |      536 | 2025-02-06 | AMKAL          | W   | 1.000      | -            | -                | -                | -         |     8.62 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           25 |      560 | 2025-02-05 | SINNERS        | W   | 1.000      | 0.435        | 0.026 (0.011)    | 0.503 (0.219)    | -         |    14.00 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           24 |      562 | 2025-02-05 | Alliance       | W   | 1.000      | 0.143        | -                | 0.615 (0.088)    | -         |    14.72 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           23 |      617 | 2025-02-03 | NAVI Junior    | W   | 1.000      | 0.435        | 0.089 (0.039)    | 0.996 (0.433)    | -         |    18.41 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           22 |      642 | 2025-02-01 | fnatic         | L   | 0.999      | -            | -                | -                | -         |    -9.58 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           21 |     1661 | 2024-11-10 | Johnny Speeds  | L   | 0.448      | -            | -                | -                | -         |    -6.88 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|           20 |     1717 | 2024-11-07 | NAVI Junior    | L   | 0.427      | -            | -                | -                | -         |    -5.25 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|           19 |     1722 | 2024-11-07 | Sashi          | L   | 0.426      | -            | -                | -                | -         |    -6.34 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|           18 |     1733 | 2024-11-06 | BetBoom        | W   | 0.421      | 0.426        | 0.102 (0.018)    | -                | -         |     8.05 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|           17 |     1753 | 2024-11-05 | Permitta       | W   | 0.414      | 0.384        | 0.027 (0.004)    | -                | -         |     6.38 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|           16 |     1795 | 2024-11-03 | 3DMAX          | L   | 0.400      | -            | -                | -                | -         |    -0.39 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|           15 |     1816 | 2024-11-02 | Falcons        | L   | 0.394      | -            | -                | -                | -         |    -0.04 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|           14 |     1842 | 2024-11-01 | Johnny Speeds  | L   | 0.387      | -            | -                | -                | -         |    -5.94 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|           13 |     1892 | 2024-10-30 | 9INE           | L   | 0.372      | -            | -                | -                | -         |    -7.72 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|           12 |     1907 | 2024-10-29 | Zero Tenacity  | W   | 0.366      | 0.426        | -                | 0.603 (0.094)    | -         |     4.92 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|           11 |     1910 | 2024-10-29 | Wu-Tang        | W   | 0.366      | -            | -                | -                | -         |     0.69 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|           10 |     1919 | 2024-10-28 | 500            | L   | 0.360      | -            | -                | -                | -         |    -4.38 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|            9 |     1972 | 2024-10-26 | BIG            | W   | 0.345      | 0.477        | 0.241 (0.040)    | 0.611 (0.101)    | -         |    10.22 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|            8 |     1988 | 2024-10-25 | Virtus.pro     | W   | 0.339      | 0.477        | 0.330 (0.053)    | 0.552 (0.089)    | -         |    10.49 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|            7 |     2030 | 2024-10-21 | 3DMAX          | L   | 0.314      | -            | -                | -                | -         |    -0.29 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|            6 |     2033 | 2024-10-21 | Virtus.pro     | W   | 0.313      | 0.477        | 0.330 (0.049)    | -                | -         |     9.69 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|            5 |     2251 | 2024-10-10 | Spirit Academy | L   | 0.240      | -            | -                | -                | -         |    -3.33 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|            4 |     2720 | 2024-09-27 | Apogee         | L   | 0.154      | -            | -                | -                | -         |    -3.62 | Buzz, Chr1zN, F1KU, MoDo, Nexius     |
|            3 |     2730 | 2024-09-27 | B8             | L   | 0.153      | -            | -                | -                | -         |    -1.09 | Buzz, Chr1zN, F1KU, MoDo, Nexius     |
|            2 |     3190 | 2024-09-14 | Sashi          | L   | 0.066      | -            | -                | -                | -         |    -0.86 | Buzz, Chr1zN, F1KU, MoDo, Nexius     |
|            1 |     3263 | 2024-09-12 | Sampi          | W   | 0.052      | -            | -                | -                | -         |     0.62 | Buzz, Chr1zN, F1KU, MoDo, Nexius     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,175.80)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.401 | $50,000.00     | $20,041.34      |
| 2024-09-14 |      0.067 | $2,000.00      | $134.46         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
