### Roster Details<br />
Team Name: Monte Gen<br />
Roster: Burmylov, fnl, Gizmy, leen, ryu<br />
Global Rank: [95](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_25.md)<br />
Regional Rank: [71]( ../../standings_europe_2024_11_25.md)<br />
<br />
Final Rank Value:  919.0<br />
<br />
Final Rank Value (919.0) = Starting Rank Value (842.1) + Head To Head Adjustments (76.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.364[<sup>2</sup>](#table1)
- Opponent Network: 0.199[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.221<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 842.1
- 400 + ( ( 0.221 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 842.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |       14 | 2024-11-24 | TNL               | L   | 1.000      | -            | -                | -                | -         |   -25.48 | Burmylov, fnl, Gizmy, leen, ryu |
|           37 |      723 | 2024-10-22 | Insilio           | L   | 0.973      | -            | -                | -                | -         |   -12.36 | fnl, Gizmy, leen, ryu, shield   |
|           36 |      873 | 2024-10-16 | CYBERSHOKE        | W   | 0.932      | -            | -                | -                | 0 (0.000) |    15.16 | fnl, Gizmy, leen, ryu, shield   |
|           35 |     1028 | 2024-10-08 | ALTERNATE aTTaX   | L   | 0.880      | -            | -                | -                | -         |   -10.84 | fnl, Gizmy, leen, ryu, shield   |
|           34 |     1272 | 2024-10-01 | ECSTATIC          | L   | 0.833      | -            | -                | -                | -         |   -10.78 | fnl, Gizmy, leen, ryu, shield   |
|           33 |     1299 | 2024-09-30 | ECLOT             | L   | 0.826      | -            | -                | -                | -         |    -4.55 | fnl, Gizmy, leen, ryu, shield   |
|           32 |     1310 | 2024-09-29 | WW                | W   | 0.821      | -            | -                | -                | 0 (0.000) |     3.13 | AiyvaN, fnl, leen, ryu, shield  |
|           31 |     1353 | 2024-09-28 | Permitta          | L   | 0.814      | -            | -                | -                | -         |    -9.74 | fnl, Gizmy, leen, ryu, shield   |
|           30 |     1439 | 2024-09-26 | BetBoom           | L   | 0.801      | -            | -                | -                | -         |    -5.63 | fnl, Gizmy, leen, ryu, shield   |
|           29 |     1455 | 2024-09-26 | Spirit Academy    | L   | 0.799      | -            | -                | -                | -         |   -11.34 | fnl, Gizmy, leen, ryu, shield   |
|           28 |     1550 | 2024-09-24 | Rhyno             | W   | 0.787      | 0.435        | 0.139 (0.048)    | 0.554 (0.189)    | 0 (0.000) |    16.58 | fnl, Gizmy, leen, ryu, shield   |
|           27 |     1654 | 2024-09-20 | Passion UA        | W   | 0.761      | 0.435        | 0.103 (0.034)    | 1.000 (0.331)    | 0 (0.000) |    16.31 | fnl, Gizmy, leen, ryu, shield   |
|           26 |     1736 | 2024-09-18 | Zero Tenacity     | W   | 0.746      | 0.435        | 0.076 (0.025)    | 0.743 (0.241)    | 0 (0.000) |    18.20 | fnl, Gizmy, leen, ryu, shield   |
|           25 |     1819 | 2024-09-15 | ALTERNATE aTTaX   | W   | 0.726      | 0.435        | 0.070 (0.022)    | 0.729 (0.230)    | 0 (0.000) |    17.23 | AiyvaN, fnl, Gizmy, leen, ryu   |
|           24 |     1833 | 2024-09-14 | DMS               | W   | 0.721      | -            | -                | -                | 0 (0.000) |     8.30 | AiyvaN, fnl, Gizmy, leen, ryu   |
|           23 |     1885 | 2024-09-13 | GamerLegion       | L   | 0.712      | -            | -                | -                | -         |    -4.42 | AiyvaN, fnl, Gizmy, leen, ryu   |
|           22 |     1961 | 2024-09-10 | SovvyKiNG         | W   | 0.695      | -            | -                | -                | 0 (0.000) |     4.37 | fnl, Gizmy, leen, ryu, shield   |
|           21 |     1970 | 2024-09-10 | CYBERSHOKE        | W   | 0.694      | 0.435        | 0.018 (0.005)    | 0.560 (0.169)    | 0 (0.000) |    12.99 | fnl, Gizmy, leen, ryu, shield   |
|           20 |     1988 | 2024-09-09 | Verdant           | W   | 0.687      | -            | -                | -                | 0 (0.000) |    10.61 | fnl, Gizmy, leen, ryu, shield   |
|           19 |     1994 | 2024-09-09 | GUN5              | L   | 0.686      | -            | -                | -                | -         |    -6.31 | fnl, Gizmy, leen, ryu, shield   |
|           18 |     2050 | 2024-09-07 | Insilio           | W   | 0.673      | 0.435        | 0.019 (0.005)    | 0.600 (0.175)    | -         |    11.79 | fnl, Gizmy, leen, ryu, shield   |
|           17 |     2136 | 2024-09-04 | Aurora Young Blud | W   | 0.655      | 0.435        | 0.021 (0.006)    | 0.682 (0.194)    | -         |    10.65 | fnl, Gizmy, leen, ryu, shield   |
|           16 |     2176 | 2024-09-03 | EYEBALLERS        | L   | 0.647      | -            | -                | -                | -         |   -11.85 | fnl, Gizmy, leen, ryu, shield   |
|           15 |     2214 | 2024-09-01 | CPH Wolves        | W   | 0.635      | -            | -                | -                | -         |     8.74 | fnl, Gizmy, leen, ryu, shield   |
|           14 |     2357 | 2024-08-28 | ALTERNATE aTTaX   | L   | 0.606      | -            | -                | -                | -         |    -3.27 | fnl, Gizmy, leen, ryu, shield   |
|           13 |     2396 | 2024-08-27 | TSM               | W   | 0.601      | 0.435        | 0.041 (0.011)    | 0.616 (0.161)    | -         |    14.03 | fnl, Gizmy, leen, ryu, shield   |
|           12 |     2518 | 2024-08-25 | PARIVISION        | W   | 0.589      | 0.435        | 0.028 (0.007)    | -                | -         |    14.89 | fnl, Gizmy, leen, ryu, shield   |
|           11 |     2706 | 2024-08-20 | Revenant          | W   | 0.555      | -            | -                | -                | -         |     9.95 | fnl, Gizmy, leen, ryu, shield   |
|           10 |     2777 | 2024-08-17 | Insilio           | W   | 0.536      | 0.435        | -                | 0.600 (0.140)    | -         |    10.38 | fnl, Gizmy, leen, ryu, shield   |
|            9 |     2810 | 2024-08-16 | Permitta          | L   | 0.527      | -            | -                | -                | -         |    -1.79 | AiyvaN, fnl, leen, ryu, shield  |
|            8 |     2906 | 2024-08-13 | ALTERNATE aTTaX   | W   | 0.506      | 0.435        | 0.070 (0.015)    | 0.729 (0.160)    | -         |    14.08 | fnl, Gizmy, leen, ryu, shield   |
|            7 |     2953 | 2024-08-12 | Preasy            | W   | 0.500      | -            | -                | -                | -         |     6.28 | fnl, Gizmy, leen, ryu, shield   |
|            6 |     3025 | 2024-08-09 | HAVU              | L   | 0.480      | -            | -                | -                | -         |   -12.97 | fnl, Gizmy, leen, ryu, shield   |
|            5 |     3101 | 2024-08-07 | DMS               | L   | 0.466      | -            | -                | -                | -         |    -7.69 | fnl, Gizmy, leen, ryu, shield   |
|            4 |     3134 | 2024-08-06 | CYBERSHOKE        | L   | 0.461      | -            | -                | -                | -         |    -5.86 | fnl, Gizmy, leen, ryu, shield   |
|            3 |     3191 | 2024-08-04 | Revenant          | W   | 0.448      | -            | -                | -                | -         |     7.13 | fnl, Gizmy, leen, ryu, shield   |
|            2 |     3408 | 2024-07-30 | Sampi             | L   | 0.413      | -            | -                | -                | -         |    -2.64 | fnl, Gizmy, leen, ryu, shield   |
|            1 |     3432 | 2024-07-29 | MOUZ NXT          | L   | 0.407      | -            | -                | -                | -         |    -6.43 | fnl, Gizmy, leen, ryu, shield   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,041.90)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
