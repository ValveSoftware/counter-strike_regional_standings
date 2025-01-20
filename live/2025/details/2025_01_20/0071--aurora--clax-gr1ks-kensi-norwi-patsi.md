### Roster Details<br />
Team Name: Aurora<br />
Roster: clax, gr1ks, KENSI, Norwi, Patsi<br />
Global Rank: [71](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [51]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  973.5<br />
<br />
Final Rank Value (973.5) = Starting Rank Value (935.2) + Head To Head Adjustments (38.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.447[<sup>1</sup>](#table2)
- Bounty Collected: 0.374[<sup>2</sup>](#table1)
- Opponent Network: 0.157[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.269<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 935.2
- 400 + ( ( 0.269 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 935.2


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
|           32 |      266 | 2024-12-11 | GUN5            | L   | 0.940      | -            | -                | -                | -         |    -9.40 | clax, gr1ks, KENSI, Norwi, Patsi |
|           31 |      283 | 2024-12-10 | Monte           | L   | 0.932      | -            | -                | -                | -         |   -10.74 | clax, gr1ks, KENSI, Norwi, Patsi |
|           30 |      289 | 2024-12-09 | Sashi           | W   | 0.926      | 0.435        | 0.042 (0.017)    | 0.613 (0.247)    | 0 (0.000) |    17.13 | clax, gr1ks, KENSI, Norwi, Patsi |
|           29 |      644 | 2024-11-22 | 9 Pandas        | L   | 0.815      | -            | -                | -                | -         |    -5.81 | clax, deko, KENSI, Lack1, Norwi  |
|           28 |      674 | 2024-11-21 | Spirit          | L   | 0.808      | -            | -                | -                | -         |    -0.12 | clax, deko, KENSI, Lack1, Norwi  |
|           27 |      687 | 2024-11-21 | B8              | W   | 0.804      | 0.143        | 0.162 (0.019)    | 0.490 (0.056)    | 1 (0.804) |    19.44 | clax, deko, KENSI, Lack1, Norwi  |
|           26 |      699 | 2024-11-20 | Eternal Fire    | L   | 0.802      | -            | -                | -                | -         |    -2.25 | clax, deko, KENSI, Lack1, Norwi  |
|           25 |     1001 | 2024-11-08 | NAVI Junior     | L   | 0.717      | -            | -                | -                | -         |    -7.37 | clax, deko, KENSI, Lack1, Norwi  |
|           24 |     1013 | 2024-11-07 | 9 Pandas        | W   | 0.712      | 0.426        | 0.160 (0.048)    | 0.804 (0.244)    | 0 (0.000) |    17.14 | clax, deko, KENSI, Lack1, Norwi  |
|           23 |     1052 | 2024-11-05 | 9INE            | W   | 0.698      | 0.426        | 0.125 (0.037)    | 1.000 (0.297)    | 0 (0.000) |    12.76 | clax, deko, KENSI, Lack1, Norwi  |
|           22 |     1289 | 2024-10-24 | M80             | L   | 0.619      | -            | -                | -                | -         |    -4.06 | clax, deko, KENSI, Lack1, Norwi  |
|           21 |     1297 | 2024-10-24 | BIG             | L   | 0.617      | -            | -                | -                | -         |    -1.67 | clax, deko, KENSI, Lack1, Norwi  |
|           20 |     1432 | 2024-10-17 | Nemiga          | L   | 0.570      | -            | -                | -                | -         |    -2.92 | clax, deko, KENSI, Lack1, Norwi  |
|           19 |     1464 | 2024-10-16 | Fluxo           | L   | 0.563      | -            | -                | -                | -         |    -4.66 | clax, deko, KENSI, Lack1, Norwi  |
|           18 |     1477 | 2024-10-15 | PARIVISION      | L   | 0.559      | -            | -                | -                | -         |   -10.33 | clax, deko, KENSI, Lack1, Norwi  |
|           17 |     1499 | 2024-10-13 | FAVBET          | L   | 0.545      | -            | -                | -                | -         |    -9.72 | clax, deko, KENSI, Lack1, Norwi  |
|           16 |     1520 | 2024-10-12 | Metizport       | W   | 0.538      | 0.435        | 0.182 (0.043)    | 0.793 (0.185)    | 0 (0.000) |    14.70 | clax, deko, KENSI, Lack1, Norwi  |
|           15 |     1547 | 2024-10-10 | Zero Tenacity   | W   | 0.523      | 0.435        | 0.083 (0.019)    | 0.567 (0.129)    | 0 (0.000) |    10.90 | clax, deko, KENSI, Lack1, Norwi  |
|           14 |     1737 | 2024-10-04 | Passion UA      | L   | 0.484      | -            | -                | -                | -         |    -4.04 | clax, deko, KENSI, Lack1, Norwi  |
|           13 |     1941 | 2024-09-28 | GamerLegion     | L   | 0.445      | -            | -                | -                | -         |    -1.22 | clax, deko, KENSI, Lack1, Norwi  |
|           12 |     1983 | 2024-09-27 | ECSTATIC        | W   | 0.439      | 0.435        | 0.079 (0.015)    | 1.000 (0.191)    | 0 (0.000) |     7.94 | clax, deko, KENSI, Lack1, Norwi  |
|           11 |     2028 | 2024-09-26 | 3DMAX           | L   | 0.432      | -            | -                | -                | -         |    -0.97 | clax, deko, KENSI, Lack1, Norwi  |
|           10 |     2040 | 2024-09-26 | Into the Breach | W   | 0.431      | 0.384        | -                | 0.510 (0.084)    | 0 (0.000) |     6.51 | clax, deko, KENSI, Lack1, Norwi  |
|            9 |     2078 | 2024-09-25 | Endpoint        | W   | 0.426      | 0.435        | 0.033 (0.006)    | 0.511 (0.095)    | 0 (0.000) |     5.18 | clax, deko, KENSI, Lack1, Norwi  |
|            8 |     2129 | 2024-09-24 | AMKAL           | W   | 0.419      | 0.384        | 0.043 (0.007)    | 0.276 (0.044)    | 0 (0.000) |     5.38 | clax, deko, KENSI, Lack1, Norwi  |
|            7 |     2838 | 2024-08-30 | Monte           | L   | 0.252      | -            | -                | -                | -         |    -2.99 | deko, gr1ks, KENSI, Lack1, Norwi |
|            6 |     2844 | 2024-08-30 | Sashi           | W   | 0.251      | 0.143        | 0.042 (0.002)    | -                | -         |     4.82 | deko, gr1ks, KENSI, Lack1, Norwi |
|            5 |     2870 | 2024-08-29 | GenOne          | W   | 0.246      | -            | -                | -                | -         |     2.74 | deko, gr1ks, KENSI, Lack1, Norwi |
|            4 |     2885 | 2024-08-29 | GamerLegion     | L   | 0.245      | -            | -                | -                | -         |    -4.99 | deko, gr1ks, KENSI, Lack1, Norwi |
|            3 |     3077 | 2024-08-26 | FURIA           | L   | 0.224      | -            | -                | -                | -         |    -0.18 | clax, deko, KENSI, Lack1, Norwi  |
|            2 |     3116 | 2024-08-25 | Eternal Fire    | L   | 0.219      | -            | -                | -                | -         |    -0.64 | clax, deko, KENSI, Lack1, Norwi  |
|            1 |     3334 | 2024-08-19 | Sashi           | L   | 0.178      | -            | -                | -                | -         |    -2.24 | clax, deko, KENSI, Lack1, Norwi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,758.58)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.725 | $5,000.00      | $3,625.30       |
| 2024-10-20 |      0.592 | $4,500.00      | $2,662.57       |
| 2024-10-13 |      0.546 | $5,000.00      | $2,729.63       |
| 2024-09-28 |      0.446 | $5,000.00      | $2,228.75       |
| 2024-09-26 |      0.432 | $3,500.00      | $1,512.33       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
