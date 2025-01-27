### Roster Details<br />
Team Name: Aurora<br />
Roster: clax, gr1ks, KENSI, Norwi, Patsi<br />
Global Rank: [78](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [54]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  946.8<br />
<br />
Final Rank Value (946.8) = Starting Rank Value (925.2) + Head To Head Adjustments (21.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.445[<sup>1</sup>](#table2)
- Bounty Collected: 0.370[<sup>2</sup>](#table1)
- Opponent Network: 0.160[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.269<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 925.2
- 400 + ( ( 0.269 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 925.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |        0 | 2025-01-27 | FAVBET            | L   | 1.000      | -            | -                | -                | -         |   -15.21 | clax, gr1ks, KENSI, Norwi, Patsi |
|           35 |       14 | 2025-01-26 | Ninjas in Pyjamas | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.50 | clax, gr1ks, KENSI, Norwi, Patsi |
|           34 |       47 | 2025-01-24 | NAVI Junior       | L   | 1.000      | -            | -                | -                | -         |    -9.71 | clax, gr1ks, KENSI, Norwi, Patsi |
|           33 |      145 | 2025-01-22 | GameAgents        | W   | 1.000      | 0.500        | 0.011 (0.005)    | 0.292 (0.146)    | 0 (0.000) |     8.14 | clax, gr1ks, KENSI, Norwi, Patsi |
|           32 |      469 | 2024-12-11 | GUN5              | L   | 0.888      | -            | -                | -                | -         |    -9.06 | clax, gr1ks, KENSI, Norwi, Patsi |
|           31 |      486 | 2024-12-10 | Monte             | L   | 0.880      | -            | -                | -                | -         |    -9.97 | clax, gr1ks, KENSI, Norwi, Patsi |
|           30 |      492 | 2024-12-09 | Sashi             | W   | 0.874      | 0.435        | 0.040 (0.015)    | 0.652 (0.247)    | 0 (0.000) |    16.53 | clax, gr1ks, KENSI, Norwi, Patsi |
|           29 |      847 | 2024-11-22 | 9 Pandas          | L   | 0.763      | -            | -                | -                | -         |    -5.65 | clax, deko, KENSI, Lack1, Norwi  |
|           28 |      877 | 2024-11-21 | Spirit            | L   | 0.756      | -            | -                | -                | -         |    -0.10 | clax, deko, KENSI, Lack1, Norwi  |
|           27 |      890 | 2024-11-21 | B8                | W   | 0.752      | 0.143        | 0.154 (0.017)    | 0.499 (0.054)    | 1 (0.752) |    18.26 | clax, deko, KENSI, Lack1, Norwi  |
|           26 |      902 | 2024-11-20 | Eternal Fire      | L   | 0.750      | -            | -                | -                | -         |    -0.74 | clax, deko, KENSI, Lack1, Norwi  |
|           25 |     1204 | 2024-11-08 | NAVI Junior       | L   | 0.665      | -            | -                | -                | -         |    -6.70 | clax, deko, KENSI, Lack1, Norwi  |
|           24 |     1216 | 2024-11-07 | 9 Pandas          | W   | 0.660      | 0.426        | 0.163 (0.046)    | 0.864 (0.243)    | 0 (0.000) |    15.74 | clax, deko, KENSI, Lack1, Norwi  |
|           23 |     1255 | 2024-11-05 | 9INE              | W   | 0.646      | 0.426        | 0.125 (0.034)    | 1.000 (0.275)    | 0 (0.000) |    11.69 | clax, deko, KENSI, Lack1, Norwi  |
|           22 |     1492 | 2024-10-24 | M80               | L   | 0.566      | -            | -                | -                | -         |    -3.91 | clax, deko, KENSI, Lack1, Norwi  |
|           21 |     1500 | 2024-10-24 | BIG               | L   | 0.565      | -            | -                | -                | -         |    -1.60 | clax, deko, KENSI, Lack1, Norwi  |
|           20 |     1635 | 2024-10-17 | Nemiga            | L   | 0.518      | -            | -                | -                | -         |    -2.64 | clax, deko, KENSI, Lack1, Norwi  |
|           19 |     1667 | 2024-10-16 | Fluxo             | L   | 0.511      | -            | -                | -                | -         |    -4.40 | clax, deko, KENSI, Lack1, Norwi  |
|           18 |     1680 | 2024-10-15 | PARIVISION        | L   | 0.507      | -            | -                | -                | -         |    -9.69 | clax, deko, KENSI, Lack1, Norwi  |
|           17 |     1702 | 2024-10-13 | FAVBET            | L   | 0.493      | -            | -                | -                | -         |    -8.78 | clax, deko, KENSI, Lack1, Norwi  |
|           16 |     1723 | 2024-10-12 | Metizport         | W   | 0.485      | 0.435        | 0.184 (0.039)    | 0.796 (0.168)    | 0 (0.000) |    13.35 | clax, deko, KENSI, Lack1, Norwi  |
|           15 |     1750 | 2024-10-10 | Zero Tenacity     | W   | 0.471      | 0.435        | 0.081 (0.016)    | 0.719 (0.147)    | 0 (0.000) |     9.99 | clax, deko, KENSI, Lack1, Norwi  |
|           14 |     1940 | 2024-10-04 | Passion UA        | L   | 0.432      | -            | -                | -                | -         |    -3.64 | clax, deko, KENSI, Lack1, Norwi  |
|           13 |     2144 | 2024-09-28 | GamerLegion       | L   | 0.393      | -            | -                | -                | -         |    -1.11 | clax, deko, KENSI, Lack1, Norwi  |
|           12 |     2186 | 2024-09-27 | ECSTATIC          | W   | 0.387      | 0.435        | 0.080 (0.013)    | 1.000 (0.168)    | 0 (0.000) |     6.95 | clax, deko, KENSI, Lack1, Norwi  |
|           11 |     2231 | 2024-09-26 | 3DMAX             | L   | 0.380      | -            | -                | -                | -         |    -0.95 | clax, deko, KENSI, Lack1, Norwi  |
|           10 |     2243 | 2024-09-26 | Into the Breach   | W   | 0.379      | 0.384        | -                | 0.497 (0.072)    | 0 (0.000) |     5.43 | clax, deko, KENSI, Lack1, Norwi  |
|            9 |     2281 | 2024-09-25 | Endpoint          | W   | 0.374      | 0.435        | 0.029 (0.005)    | 0.489 (0.079)    | -         |     4.40 | clax, deko, KENSI, Lack1, Norwi  |
|            8 |     2332 | 2024-09-24 | AMKAL             | W   | 0.367      | 0.384        | 0.040 (0.006)    | -                | -         |     4.53 | clax, deko, KENSI, Lack1, Norwi  |
|            7 |     3041 | 2024-08-30 | Monte             | L   | 0.200      | -            | -                | -                | -         |    -2.27 | deko, gr1ks, KENSI, Lack1, Norwi |
|            6 |     3047 | 2024-08-30 | Sashi             | W   | 0.199      | -            | -                | -                | -         |     3.92 | deko, gr1ks, KENSI, Lack1, Norwi |
|            5 |     3073 | 2024-08-29 | GenOne            | W   | 0.194      | -            | -                | -                | -         |     2.16 | deko, gr1ks, KENSI, Lack1, Norwi |
|            4 |     3088 | 2024-08-29 | GamerLegion       | L   | 0.193      | -            | -                | -                | -         |    -4.07 | deko, gr1ks, KENSI, Lack1, Norwi |
|            3 |     3280 | 2024-08-26 | FURIA             | L   | 0.172      | -            | -                | -                | -         |    -0.15 | clax, deko, KENSI, Lack1, Norwi  |
|            2 |     3319 | 2024-08-25 | Eternal Fire      | L   | 0.167      | -            | -                | -                | -         |    -0.14 | clax, deko, KENSI, Lack1, Norwi  |
|            1 |     3537 | 2024-08-19 | Sashi             | L   | 0.126      | -            | -                | -                | -         |    -1.51 | clax, deko, KENSI, Lack1, Norwi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,560.18)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.673 | $5,000.00      | $3,364.78       |
| 2024-10-20 |      0.540 | $4,500.00      | $2,428.10       |
| 2024-10-13 |      0.494 | $5,000.00      | $2,469.11       |
| 2024-09-28 |      0.394 | $5,000.00      | $1,968.23       |
| 2024-09-26 |      0.380 | $3,500.00      | $1,329.97       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
