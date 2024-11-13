### Roster Details<br />
Team Name: OG<br />
Roster: Buzz, Chr1zN, F1KU, M1key, MoDo<br />
Global Rank: [60](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_13.md)<br />
Regional Rank: [42]( ../../standings_europe_2024_11_13.md)<br />
<br />
Final Rank Value:  1009.5<br />
<br />
Final Rank Value (1009.5) = Starting Rank Value (985.5) + Head To Head Adjustments (24.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.534[<sup>1</sup>](#table2)
- Bounty Collected: 0.447[<sup>2</sup>](#table1)
- Opponent Network: 0.192[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.293<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 985.5
- 400 + ( ( 0.293 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 985.5


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
|           36 |       96 | 2024-11-10 | Johnny Speeds   | L   | 1.000      | -            | -                | -                | -         |   -14.92 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           35 |      150 | 2024-11-07 | NAVI Junior     | L   | 1.000      | -            | -                | -                | -         |   -12.98 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           34 |      155 | 2024-11-07 | Sashi           | L   | 1.000      | -            | -                | -                | -         |   -16.40 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           33 |      166 | 2024-11-06 | BetBoom         | W   | 1.000      | 0.426        | 0.117 (0.050)    | 0.442 (0.188)    | 0 (0.000) |    18.84 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           32 |      185 | 2024-11-05 | Permitta        | W   | 1.000      | 0.384        | 0.030 (0.011)    | 1.000 (0.384)    | 0 (0.000) |    10.53 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           31 |      227 | 2024-11-03 | 3DMAX           | L   | 1.000      | -            | -                | -                | -         |    -3.73 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           30 |      248 | 2024-11-02 | HEROIC          | L   | 1.000      | -            | -                | -                | -         |    -1.01 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           29 |      272 | 2024-11-01 | Johnny Speeds   | L   | 1.000      | -            | -                | -                | -         |   -16.26 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           28 |      322 | 2024-10-30 | 9INE            | L   | 1.000      | -            | -                | -                | -         |   -15.82 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           27 |      337 | 2024-10-29 | Zero Tenacity   | W   | 1.000      | 0.426        | 0.059 (0.025)    | 0.753 (0.321)    | 0 (0.000) |    14.13 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           26 |      340 | 2024-10-29 | Wu-Tang         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.81 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           25 |      349 | 2024-10-28 | 500             | L   | 1.000      | -            | -                | -                | -         |   -18.62 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           24 |      400 | 2024-10-26 | BIG             | W   | 1.000      | 0.477        | 0.155 (0.074)    | 0.425 (0.203)    | 0 (0.000) |    26.32 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           23 |      416 | 2024-10-25 | Virtus.pro      | W   | 1.000      | 0.477        | 0.211 (0.101)    | 0.269 (0.128)    | 0 (0.000) |    29.10 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           22 |      458 | 2024-10-21 | 3DMAX           | L   | 1.000      | -            | -                | -                | -         |    -3.59 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           21 |      461 | 2024-10-21 | Virtus.pro      | W   | 1.000      | 0.477        | 0.211 (0.101)    | 0.269 (0.128)    | 0 (0.000) |    29.63 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           20 |      678 | 2024-10-10 | Spirit Academy  | L   | 0.973      | -            | -                | -                | -         |   -11.77 | Buzz, Chr1zN, F1KU, MoDo, spooke |
|           19 |     1113 | 2024-09-27 | Apogee          | L   | 0.887      | -            | -                | -                | -         |   -18.20 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           18 |     1123 | 2024-09-27 | B8              | L   | 0.886      | -            | -                | -                | -         |    -7.40 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           17 |     1569 | 2024-09-14 | Sashi           | L   | 0.799      | -            | -                | -                | -         |   -12.89 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           16 |     1640 | 2024-09-12 | Sampi           | W   | 0.785      | 0.384        | 0.025 (0.008)    | 0.512 (0.154)    | 0 (0.000) |     9.15 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           15 |     1966 | 2024-08-31 | ALTERNATE aTTaX | L   | 0.706      | -            | -                | -                | -         |   -13.43 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           14 |     1985 | 2024-08-30 | Endpoint        | W   | 0.699      | 0.384        | -                | 0.604 (0.162)    | 0 (0.000) |     7.86 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           13 |     2193 | 2024-08-26 | fnatic          | L   | 0.674      | -            | -                | -                | -         |    -5.03 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           12 |     2208 | 2024-08-26 | Falcons         | L   | 0.673      | -            | -                | -                | -         |    -4.05 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           11 |     2254 | 2024-08-25 | FaZe            | L   | 0.667      | -            | -                | -                | -         |    -0.76 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           10 |     2293 | 2024-08-23 | AMKAL           | W   | 0.655      | 0.535        | 0.031 (0.011)    | -                | 0 (0.000) |     6.67 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            9 |     2301 | 2024-08-23 | Sashi           | L   | 0.653      | -            | -                | -                | -         |   -11.40 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            8 |     2307 | 2024-08-23 | Passion UA      | L   | 0.652      | -            | -                | -                | -         |    -9.78 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            7 |     2345 | 2024-08-22 | Rebels          | W   | 0.645      | -            | -                | -                | -         |     7.00 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            6 |     2367 | 2024-08-21 | HEROIC          | W   | 0.640      | 0.535        | 0.549 (0.188)    | 0.505 (0.173)    | -         |    19.65 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            5 |     2380 | 2024-08-21 | Zero Tenacity   | W   | 0.639      | -            | -                | -                | -         |     8.95 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            4 |     2416 | 2024-08-21 | SAW             | L   | 0.638      | -            | -                | -                | -         |    -0.66 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            3 |     2560 | 2024-08-15 | B8              | W   | 0.601      | 0.143        | 0.162 (0.014)    | 0.888 (0.076)    | -         |    15.44 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            2 |     2566 | 2024-08-15 | PARIVISION      | W   | 0.600      | -            | -                | -                | -         |    12.36 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            1 |     2571 | 2024-08-15 | ARCRED          | W   | 0.600      | -            | -                | -                | -         |     6.29 | Buzz, Chr1zN, F1KU, MoDo, Nexius |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($59,939.98)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-09-14 |      0.800 | $2,000.00      | $1,600.51       |
| 2024-08-25 |      0.667 | $12,500.00     | $8,339.47       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
