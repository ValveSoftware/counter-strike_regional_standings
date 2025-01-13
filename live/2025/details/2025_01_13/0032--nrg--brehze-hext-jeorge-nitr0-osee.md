### Roster Details<br />
Team Name: NRG<br />
Roster: Brehze, HexT, Jeorge, nitr0, oSee<br />
Global Rank: [32](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_13.md)<br />
Regional Rank: [8]( ../../standings_americas_2025_01_13.md)<br />
<br />
Final Rank Value:  1194.6<br />
<br />
Final Rank Value (1194.6) = Starting Rank Value (1215.1) + Head To Head Adjustments (-20.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.522[<sup>1</sup>](#table2)
- Bounty Collected: 0.402[<sup>2</sup>](#table1)
- Opponent Network: 0.154[<sup>2</sup>](#table1)
- LAN Wins: 0.565[<sup>2</sup>](#table1)

The average of these factors is 0.411<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1215.1
- 400 + ( ( 0.411 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1215.1


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
|           67 |      164 | 2024-12-15 | timbermen         | L   | 1.000      | -            | -                | -                | -         |   -26.12 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           66 |      171 | 2024-12-15 | Party Astronauts  | W   | 1.000      | 0.303        | -                | 0.392 (0.119)    | 0 (0.000) |     5.00 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           65 |      191 | 2024-12-14 | Make Your Mind    | W   | 1.000      | 0.303        | 0.029 (0.009)    | -                | 0 (0.000) |     2.48 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           64 |      285 | 2024-12-08 | Sharks            | W   | 0.964      | 0.384        | 0.110 (0.041)    | 0.597 (0.221)    | 1 (0.964) |    12.98 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           63 |      288 | 2024-12-08 | Sharks            | W   | 0.962      | 0.384        | 0.110 (0.041)    | 0.597 (0.221)    | 1 (0.962) |    13.58 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           62 |      307 | 2024-12-07 | BOSS              | W   | 0.957      | 0.384        | 0.042 (0.015)    | 0.421 (0.155)    | 1 (0.957) |    10.27 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           61 |      315 | 2024-12-07 | Undone            | W   | 0.956      | -            | -                | -                | 1 (0.956) |     3.44 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           60 |      344 | 2024-12-06 | Stand On Business | W   | 0.950      | -            | -                | -                | 1 (0.950) |     0.39 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           59 |      581 | 2024-11-24 | Nouns             | L   | 0.870      | -            | -                | -                | -         |   -17.20 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           58 |      585 | 2024-11-24 | timbermen         | W   | 0.869      | -            | -                | -                | 0 (0.000) |     3.95 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           57 |      605 | 2024-11-23 | Revenge Nation    | W   | 0.863      | -            | -                | -                | 0 (0.000) |     1.83 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           56 |     1317 | 2024-10-20 | M80               | L   | 0.636      | -            | -                | -                | -         |    -9.65 | autimatic, Brehze, HexT, nitr0, oSee |
|           55 |     1343 | 2024-10-19 | Legacy            | W   | 0.630      | 0.477        | 0.073 (0.022)    | 0.507 (0.152)    | 0 (0.000) |     7.73 | autimatic, Brehze, HexT, nitr0, oSee |
|           54 |     1367 | 2024-10-18 | Party Astronauts  | W   | 0.623      | 0.477        | -                | 0.392 (0.116)    | -         |     4.13 | autimatic, Brehze, HexT, nitr0, oSee |
|           53 |     1398 | 2024-10-17 | Wildcard          | W   | 0.617      | 0.477        | 0.227 (0.067)    | 0.634 (0.186)    | -         |    13.28 | autimatic, Brehze, HexT, nitr0, oSee |
|           52 |     1428 | 2024-10-16 | M80               | L   | 0.610      | -            | -                | -                | -         |    -9.29 | autimatic, Brehze, HexT, nitr0, oSee |
|           51 |     1455 | 2024-10-15 | Party Astronauts  | W   | 0.603      | 0.477        | -                | 0.392 (0.113)    | -         |     3.87 | autimatic, Brehze, HexT, nitr0, oSee |
|           50 |     1572 | 2024-10-08 | Nouns             | L   | 0.557      | -            | -                | -                | -         |   -10.70 | autimatic, Brehze, HexT, nitr0, oSee |
|           49 |     1578 | 2024-10-08 | Nouns             | L   | 0.556      | -            | -                | -                | -         |   -11.21 | autimatic, Brehze, HexT, nitr0, oSee |
|           48 |     1733 | 2024-10-03 | BOSS              | L   | 0.523      | -            | -                | -                | -         |   -11.57 | autimatic, Brehze, HexT, nitr0, oSee |
|           47 |     1811 | 2024-10-01 | Legacy            | L   | 0.510      | -            | -                | -                | -         |   -10.55 | autimatic, Brehze, HexT, nitr0, oSee |
|           46 |     1816 | 2024-10-01 | Legacy            | L   | 0.510      | -            | -                | -                | -         |   -10.97 | autimatic, Brehze, HexT, nitr0, oSee |
|           45 |     1946 | 2024-09-27 | Legacy            | L   | 0.483      | -            | -                | -                | -         |   -11.26 | autimatic, Brehze, HexT, nitr0, oSee |
|           44 |     1951 | 2024-09-27 | E-Xolos LAZER     | W   | 0.482      | -            | -                | -                | -         |     0.90 | autimatic, Brehze, HexT, nitr0, oSee |
|           43 |     2040 | 2024-09-25 | M80               | L   | 0.470      | -            | -                | -                | -         |    -8.50 | autimatic, Brehze, HexT, nitr0, oSee |
|           42 |     2045 | 2024-09-25 | M80               | W   | 0.470      | 0.477        | 0.144 (0.032)    | -                | -         |     6.42 | autimatic, Brehze, HexT, nitr0, oSee |
|           41 |     2097 | 2024-09-24 | timbermen         | W   | 0.463      | -            | -                | -                | -         |     1.60 | autimatic, Brehze, HexT, nitr0, oSee |
|           40 |     2100 | 2024-09-24 | timbermen         | W   | 0.463      | -            | -                | -                | -         |     1.62 | autimatic, Brehze, HexT, nitr0, oSee |
|           39 |     2176 | 2024-09-22 | Nouns             | W   | 0.450      | -            | -                | -                | -         |     5.04 | autimatic, Brehze, HexT, nitr0, oSee |
|           38 |     2180 | 2024-09-22 | FLUFFY AIMERS     | W   | 0.448      | -            | -                | -                | -         |     2.29 | autimatic, Brehze, HexT, nitr0, oSee |
|           37 |     2205 | 2024-09-21 | Party Astronauts  | W   | 0.442      | -            | -                | -                | -         |     1.94 | autimatic, Brehze, HexT, nitr0, oSee |
|           36 |     2252 | 2024-09-19 | Wildcard          | W   | 0.429      | 0.477        | 0.227 (0.046)    | 0.634 (0.130)    | -         |     9.08 | autimatic, Brehze, HexT, nitr0, oSee |
|           35 |     2256 | 2024-09-19 | Wildcard          | W   | 0.429      | 0.477        | 0.227 (0.046)    | 0.634 (0.130)    | -         |     9.38 | autimatic, Brehze, HexT, nitr0, oSee |
|           34 |     2285 | 2024-09-18 | Take Flyte        | W   | 0.423      | -            | -                | -                | -         |     0.97 | autimatic, Brehze, HexT, nitr0, oSee |
|           33 |     2288 | 2024-09-18 | Take Flyte        | W   | 0.423      | -            | -                | -                | -         |     0.97 | autimatic, Brehze, HexT, nitr0, oSee |
|           32 |     2321 | 2024-09-17 | LAG               | W   | 0.416      | -            | -                | -                | -         |     0.52 | autimatic, Brehze, HexT, nitr0, oSee |
|           31 |     2322 | 2024-09-17 | LAG               | W   | 0.416      | -            | -                | -                | -         |     0.52 | autimatic, Brehze, HexT, nitr0, oSee |
|           30 |     2821 | 2024-08-30 | Wildcard          | L   | 0.297      | -            | -                | -                | -         |    -2.70 | autimatic, Brehze, HexT, nitr0, oSee |
|           29 |     2822 | 2024-08-30 | Nouns             | W   | 0.296      | -            | -                | -                | -         |     3.55 | autimatic, Brehze, HexT, nitr0, oSee |
|           28 |     2847 | 2024-08-29 | Wildcard          | L   | 0.290      | -            | -                | -                | -         |    -2.66 | autimatic, Brehze, HexT, nitr0, oSee |
|           27 |     2851 | 2024-08-29 | Nouns             | W   | 0.289      | -            | -                | -                | -         |     3.50 | autimatic, Brehze, HexT, nitr0, oSee |
|           26 |     2903 | 2024-08-28 | Legacy            | L   | 0.282      | -            | -                | -                | -         |    -6.98 | autimatic, Brehze, HexT, nitr0, oSee |
|           25 |     2967 | 2024-08-27 | Nouns             | L   | 0.275      | -            | -                | -                | -         |    -5.51 | autimatic, Brehze, HexT, nitr0, oSee |
|           24 |     3015 | 2024-08-26 | timbermen         | W   | 0.269      | -            | -                | -                | -         |     1.11 | autimatic, Brehze, HexT, nitr0, oSee |
|           23 |     3036 | 2024-08-26 | Akimbo            | W   | 0.268      | -            | -                | -                | -         |     0.45 | autimatic, Brehze, HexT, nitr0, oSee |
|           22 |     3348 | 2024-08-17 | Wildcard          | L   | 0.210      | -            | -                | -                | -         |    -2.08 | autimatic, Brehze, HexT, nitr0, oSee |
|           21 |     3350 | 2024-08-17 | LAG               | W   | 0.209      | -            | -                | -                | -         |     0.25 | autimatic, Brehze, HexT, nitr0, oSee |
|           20 |     3352 | 2024-08-17 | DETONATE          | W   | 0.209      | -            | -                | -                | -         |     0.11 | autimatic, Brehze, HexT, nitr0, oSee |
|           19 |     3399 | 2024-08-15 | LAG               | W   | 0.196      | -            | -                | -                | -         |     0.23 | autimatic, Brehze, HexT, nitr0, oSee |
|           18 |     3401 | 2024-08-15 | InControl         | W   | 0.196      | -            | -                | -                | -         |     0.26 | autimatic, Brehze, HexT, nitr0, oSee |
|           17 |     3509 | 2024-08-12 | Akimbo            | W   | 0.176      | -            | -                | -                | -         |     0.30 | autimatic, Brehze, HexT, nitr0, oSee |
|           16 |     3697 | 2024-08-06 | Revenge Nation    | W   | 0.136      | -            | -                | -                | -         |     0.23 | autimatic, Brehze, HexT, nitr0, oSee |
|           15 |     3702 | 2024-08-06 | Revenge Nation    | W   | 0.136      | -            | -                | -                | -         |     0.23 | autimatic, Brehze, HexT, nitr0, oSee |
|           14 |     3757 | 2024-08-04 | timbermen         | W   | 0.124      | -            | -                | -                | -         |     0.50 | autimatic, Brehze, HexT, nitr0, oSee |
|           13 |     3762 | 2024-08-04 | Wildcard          | W   | 0.122      | 0.303        | 0.227 (0.008)    | -                | -         |     2.68 | autimatic, Brehze, HexT, nitr0, oSee |
|           12 |     3796 | 2024-08-03 | BOSS              | W   | 0.116      | -            | -                | -                | -         |     1.26 | autimatic, Brehze, HexT, nitr0, oSee |
|           11 |     3903 | 2024-07-31 | BOSS              | W   | 0.097      | -            | -                | -                | -         |     1.06 | autimatic, Brehze, HexT, nitr0, oSee |
|           10 |     3907 | 2024-07-31 | BOSS              | W   | 0.096      | -            | -                | -                | -         |     1.07 | autimatic, Brehze, HexT, nitr0, oSee |
|            9 |     3951 | 2024-07-30 | Party Astronauts  | L   | 0.090      | -            | -                | -                | -         |    -2.40 | autimatic, Brehze, HexT, nitr0, oSee |
|            8 |     3956 | 2024-07-30 | Party Astronauts  | L   | 0.090      | -            | -                | -                | -         |    -2.40 | autimatic, Brehze, HexT, nitr0, oSee |
|            7 |     4244 | 2024-07-21 | Wildcard          | L   | 0.030      | -            | -                | -                | -         |    -0.29 | autimatic, Brehze, HexT, nitr0, oSee |
|            6 |     4248 | 2024-07-21 | Nouns             | W   | 0.028      | -            | -                | -                | -         |     0.32 | autimatic, Brehze, HexT, nitr0, oSee |
|            5 |     4274 | 2024-07-20 | BOSS              | W   | 0.022      | -            | -                | -                | -         |     0.25 | autimatic, Brehze, HexT, nitr0, oSee |
|            4 |     4342 | 2024-07-18 | E-Xolos LAZER     | W   | 0.010      | -            | -                | -                | -         |     0.02 | autimatic, Brehze, HexT, nitr0, oSee |
|            3 |     4346 | 2024-07-18 | E-Xolos LAZER     | W   | 0.010      | -            | -                | -                | -         |     0.02 | autimatic, Brehze, HexT, nitr0, oSee |
|            2 |     4408 | 2024-07-17 | Mythic            | W   | 0.003      | -            | -                | -                | -         |     0.00 | autimatic, Brehze, HexT, nitr0, oSee |
|            1 |     4413 | 2024-07-17 | Mythic            | W   | 0.003      | -            | -                | -                | -         |     0.00 | autimatic, Brehze, HexT, nitr0, oSee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($28,758.29)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-12-08 |      0.964 | $15,000.00     | $14,453.41      |
| 2024-11-24 |      0.870 | $1,000.00      | $870.02         |
| 2024-10-20 |      0.636 | $15,000.00     | $9,543.14       |
| 2024-10-05 |      0.537 | $750.00        | $402.60         |
| 2024-09-22 |      0.450 | $4,000.00      | $1,799.63       |
| 2024-08-18 |      0.217 | $750.00        | $162.77         |
| 2024-08-04 |      0.124 | $4,000.00      | $496.55         |
| 2024-07-21 |      0.030 | $1,000.00      | $30.17          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
