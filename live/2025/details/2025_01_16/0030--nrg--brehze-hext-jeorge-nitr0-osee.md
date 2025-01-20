### Roster Details<br />
Team Name: NRG<br />
Roster: Brehze, HexT, Jeorge, nitr0, oSee<br />
Global Rank: [30](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_16.md)<br />
Regional Rank: [8]( ../../standings_americas_2025_01_16.md)<br />
<br />
Final Rank Value:  1190.8<br />
<br />
Final Rank Value (1190.8) = Starting Rank Value (1211.7) + Head To Head Adjustments (-20.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.523[<sup>1</sup>](#table2)
- Bounty Collected: 0.400[<sup>2</sup>](#table1)
- Opponent Network: 0.149[<sup>2</sup>](#table1)
- LAN Wins: 0.567[<sup>2</sup>](#table1)

The average of these factors is 0.410<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1211.7
- 400 + ( ( 0.410 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1211.7


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
|           62 |      191 | 2024-12-15 | timbermen          | L   | 0.988      | -            | -                | -                | -         |   -25.85 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           61 |      198 | 2024-12-15 | Party Astronauts   | W   | 0.986      | 0.303        | -                | 0.390 (0.117)    | 0 (0.000) |     4.94 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           60 |      218 | 2024-12-14 | Make Your Mind     | W   | 0.981      | 0.303        | 0.029 (0.009)    | -                | 0 (0.000) |     2.49 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           59 |      312 | 2024-12-08 | Sharks             | W   | 0.941      | 0.384        | 0.110 (0.040)    | 0.596 (0.216)    | 1 (0.941) |    12.82 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           58 |      315 | 2024-12-08 | Sharks             | W   | 0.940      | 0.384        | 0.110 (0.040)    | 0.596 (0.215)    | 1 (0.940) |    13.40 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           57 |      334 | 2024-12-07 | BOSS               | W   | 0.935      | 0.384        | 0.042 (0.015)    | 0.421 (0.151)    | 1 (0.935) |    10.11 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           56 |      342 | 2024-12-07 | Undone             | W   | 0.933      | -            | -                | -                | 1 (0.933) |     3.47 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           55 |      371 | 2024-12-06 | Stand On Business  | W   | 0.928      | -            | -                | -                | 1 (0.928) |     0.39 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           54 |      608 | 2024-11-24 | Nouns              | L   | 0.848      | -            | -                | -                | -         |   -16.86 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           53 |      612 | 2024-11-24 | timbermen          | W   | 0.846      | 0.303        | 0.030 (0.008)    | -                | 0 (0.000) |     3.83 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           52 |      632 | 2024-11-23 | Revenge Nation     | W   | 0.840      | -            | -                | -                | 0 (0.000) |     1.79 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           51 |     1344 | 2024-10-20 | M80                | L   | 0.614      | -            | -                | -                | -         |    -9.47 | autimatic, Brehze, HexT, nitr0, oSee |
|           50 |     1370 | 2024-10-19 | Legacy             | W   | 0.608      | 0.477        | 0.074 (0.021)    | 0.503 (0.146)    | 0 (0.000) |     7.30 | autimatic, Brehze, HexT, nitr0, oSee |
|           49 |     1394 | 2024-10-18 | Party Astronauts   | W   | 0.601      | 0.477        | -                | 0.390 (0.112)    | -         |     3.96 | autimatic, Brehze, HexT, nitr0, oSee |
|           48 |     1425 | 2024-10-17 | Wildcard           | W   | 0.594      | 0.477        | 0.230 (0.065)    | 0.636 (0.180)    | -         |    12.81 | autimatic, Brehze, HexT, nitr0, oSee |
|           47 |     1455 | 2024-10-16 | M80                | L   | 0.588      | -            | -                | -                | -         |    -9.12 | autimatic, Brehze, HexT, nitr0, oSee |
|           46 |     1482 | 2024-10-15 | Party Astronauts   | W   | 0.581      | 0.477        | -                | 0.390 (0.108)    | -         |     3.71 | autimatic, Brehze, HexT, nitr0, oSee |
|           45 |     1599 | 2024-10-08 | Nouns              | L   | 0.534      | -            | -                | -                | -         |   -10.35 | autimatic, Brehze, HexT, nitr0, oSee |
|           44 |     1605 | 2024-10-08 | Nouns              | L   | 0.534      | -            | -                | -                | -         |   -10.81 | autimatic, Brehze, HexT, nitr0, oSee |
|           43 |     1760 | 2024-10-03 | BOSS               | L   | 0.501      | -            | -                | -                | -         |   -11.00 | autimatic, Brehze, HexT, nitr0, oSee |
|           42 |     1838 | 2024-10-01 | Legacy             | L   | 0.488      | -            | -                | -                | -         |   -10.21 | autimatic, Brehze, HexT, nitr0, oSee |
|           41 |     1843 | 2024-10-01 | Legacy             | L   | 0.487      | -            | -                | -                | -         |   -10.59 | autimatic, Brehze, HexT, nitr0, oSee |
|           40 |     1973 | 2024-09-27 | Legacy             | L   | 0.460      | -            | -                | -                | -         |   -10.80 | autimatic, Brehze, HexT, nitr0, oSee |
|           39 |     1978 | 2024-09-27 | E-Xolos LAZER      | W   | 0.460      | -            | -                | -                | -         |     0.91 | autimatic, Brehze, HexT, nitr0, oSee |
|           38 |     2067 | 2024-09-25 | M80                | L   | 0.448      | -            | -                | -                | -         |    -8.20 | autimatic, Brehze, HexT, nitr0, oSee |
|           37 |     2072 | 2024-09-25 | M80                | W   | 0.447      | 0.477        | 0.141 (0.030)    | -                | -         |     6.00 | autimatic, Brehze, HexT, nitr0, oSee |
|           36 |     2124 | 2024-09-24 | timbermen          | W   | 0.441      | -            | -                | -                | -         |     1.52 | autimatic, Brehze, HexT, nitr0, oSee |
|           35 |     2127 | 2024-09-24 | timbermen          | W   | 0.441      | -            | -                | -                | -         |     1.54 | autimatic, Brehze, HexT, nitr0, oSee |
|           34 |     2203 | 2024-09-22 | Nouns              | W   | 0.428      | -            | -                | -                | -         |     4.75 | autimatic, Brehze, HexT, nitr0, oSee |
|           33 |     2207 | 2024-09-22 | FLUFFY AIMERS      | W   | 0.426      | -            | -                | -                | -         |     2.22 | autimatic, Brehze, HexT, nitr0, oSee |
|           32 |     2232 | 2024-09-21 | Party Astronauts   | W   | 0.420      | -            | -                | -                | -         |     1.85 | autimatic, Brehze, HexT, nitr0, oSee |
|           31 |     2279 | 2024-09-19 | Wildcard           | W   | 0.407      | 0.477        | 0.230 (0.045)    | 0.636 (0.123)    | -         |     8.61 | autimatic, Brehze, HexT, nitr0, oSee |
|           30 |     2283 | 2024-09-19 | Wildcard           | W   | 0.407      | 0.477        | 0.230 (0.045)    | 0.636 (0.123)    | -         |     8.88 | autimatic, Brehze, HexT, nitr0, oSee |
|           29 |     2312 | 2024-09-18 | Bad News Capybaras | W   | 0.401      | -            | -                | -                | -         |     0.91 | autimatic, Brehze, HexT, nitr0, oSee |
|           28 |     2315 | 2024-09-18 | Bad News Capybaras | W   | 0.401      | -            | -                | -                | -         |     0.91 | autimatic, Brehze, HexT, nitr0, oSee |
|           27 |     2348 | 2024-09-17 | LAG                | W   | 0.394      | -            | -                | -                | -         |     0.49 | autimatic, Brehze, HexT, nitr0, oSee |
|           26 |     2349 | 2024-09-17 | LAG                | W   | 0.394      | -            | -                | -                | -         |     0.50 | autimatic, Brehze, HexT, nitr0, oSee |
|           25 |     2848 | 2024-08-30 | Wildcard           | L   | 0.274      | -            | -                | -                | -         |    -2.51 | autimatic, Brehze, HexT, nitr0, oSee |
|           24 |     2849 | 2024-08-30 | Nouns              | W   | 0.273      | -            | -                | -                | -         |     3.23 | autimatic, Brehze, HexT, nitr0, oSee |
|           23 |     2874 | 2024-08-29 | Wildcard           | L   | 0.268      | -            | -                | -                | -         |    -2.47 | autimatic, Brehze, HexT, nitr0, oSee |
|           22 |     2878 | 2024-08-29 | Nouns              | W   | 0.267      | -            | -                | -                | -         |     3.18 | autimatic, Brehze, HexT, nitr0, oSee |
|           21 |     2930 | 2024-08-28 | Legacy             | L   | 0.260      | -            | -                | -                | -         |    -6.44 | autimatic, Brehze, HexT, nitr0, oSee |
|           20 |     2994 | 2024-08-27 | Nouns              | L   | 0.253      | -            | -                | -                | -         |    -5.10 | autimatic, Brehze, HexT, nitr0, oSee |
|           19 |     3042 | 2024-08-26 | timbermen          | W   | 0.247      | -            | -                | -                | -         |     1.01 | autimatic, Brehze, HexT, nitr0, oSee |
|           18 |     3063 | 2024-08-26 | Akimbo             | W   | 0.246      | -            | -                | -                | -         |     0.13 | autimatic, Brehze, HexT, nitr0, oSee |
|           17 |     3375 | 2024-08-17 | Wildcard           | L   | 0.188      | -            | -                | -                | -         |    -1.85 | autimatic, Brehze, HexT, nitr0, oSee |
|           16 |     3377 | 2024-08-17 | LAG                | W   | 0.187      | -            | -                | -                | -         |     0.23 | autimatic, Brehze, HexT, nitr0, oSee |
|           15 |     3379 | 2024-08-17 | DETONATE           | W   | 0.186      | -            | -                | -                | -         |     0.10 | autimatic, Brehze, HexT, nitr0, oSee |
|           14 |     3426 | 2024-08-15 | LAG                | W   | 0.173      | -            | -                | -                | -         |     0.21 | autimatic, Brehze, HexT, nitr0, oSee |
|           13 |     3428 | 2024-08-15 | InControl          | W   | 0.173      | -            | -                | -                | -         |     0.23 | autimatic, Brehze, HexT, nitr0, oSee |
|           12 |     3536 | 2024-08-12 | Akimbo             | W   | 0.153      | -            | -                | -                | -         |     0.28 | autimatic, Brehze, HexT, nitr0, oSee |
|           11 |     3724 | 2024-08-06 | Revenge Nation     | W   | 0.114      | -            | -                | -                | -         |     0.19 | autimatic, Brehze, HexT, nitr0, oSee |
|           10 |     3729 | 2024-08-06 | Revenge Nation     | W   | 0.114      | -            | -                | -                | -         |     0.19 | autimatic, Brehze, HexT, nitr0, oSee |
|            9 |     3784 | 2024-08-04 | timbermen          | W   | 0.102      | -            | -                | -                | -         |     0.41 | autimatic, Brehze, HexT, nitr0, oSee |
|            8 |     3789 | 2024-08-04 | Wildcard           | W   | 0.100      | -            | -                | -                | -         |     2.18 | autimatic, Brehze, HexT, nitr0, oSee |
|            7 |     3823 | 2024-08-03 | BOSS               | W   | 0.093      | -            | -                | -                | -         |     1.02 | autimatic, Brehze, HexT, nitr0, oSee |
|            6 |     3930 | 2024-07-31 | BOSS               | W   | 0.074      | -            | -                | -                | -         |     0.82 | autimatic, Brehze, HexT, nitr0, oSee |
|            5 |     3934 | 2024-07-31 | BOSS               | W   | 0.074      | -            | -                | -                | -         |     0.82 | autimatic, Brehze, HexT, nitr0, oSee |
|            4 |     3978 | 2024-07-30 | Party Astronauts   | L   | 0.068      | -            | -                | -                | -         |    -1.80 | autimatic, Brehze, HexT, nitr0, oSee |
|            3 |     3983 | 2024-07-30 | Party Astronauts   | L   | 0.067      | -            | -                | -                | -         |    -1.80 | autimatic, Brehze, HexT, nitr0, oSee |
|            2 |     4271 | 2024-07-21 | Wildcard           | L   | 0.008      | -            | -                | -                | -         |    -0.08 | autimatic, Brehze, HexT, nitr0, oSee |
|            1 |     4275 | 2024-07-21 | Nouns              | W   | 0.006      | -            | -                | -                | -         |     0.07 | autimatic, Brehze, HexT, nitr0, oSee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,818.27)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.988 | $1,000.00      | $987.99         |
| 2024-12-08 |      0.941 | $15,000.00     | $14,117.99      |
| 2024-11-24 |      0.848 | $1,000.00      | $847.65         |
| 2024-10-20 |      0.614 | $15,000.00     | $9,207.72       |
| 2024-10-05 |      0.514 | $750.00        | $385.83         |
| 2024-09-22 |      0.428 | $4,000.00      | $1,710.18       |
| 2024-08-18 |      0.195 | $750.00        | $146.00         |
| 2024-08-04 |      0.102 | $4,000.00      | $407.11         |
| 2024-07-21 |      0.008 | $1,000.00      | $7.81           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
