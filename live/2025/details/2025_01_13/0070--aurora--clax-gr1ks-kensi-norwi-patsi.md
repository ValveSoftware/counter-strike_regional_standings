### Roster Details<br />
Team Name: Aurora<br />
Roster: clax, gr1ks, KENSI, Norwi, Patsi<br />
Global Rank: [70](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [49]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  988.8<br />
<br />
Final Rank Value (988.8) = Starting Rank Value (943.5) + Head To Head Adjustments (45.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.447[<sup>1</sup>](#table2)
- Bounty Collected: 0.378[<sup>2</sup>](#table1)
- Opponent Network: 0.171[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.274<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 943.5
- 400 + ( ( 0.274 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 943.5


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
|           32 |      253 | 2024-12-11 | GUN5            | L   | 0.982      | -            | -                | -                | -         |   -10.10 | clax, gr1ks, KENSI, Norwi, Patsi |
|           31 |      270 | 2024-12-10 | Monte           | L   | 0.974      | -            | -                | -                | -         |   -10.94 | clax, gr1ks, KENSI, Norwi, Patsi |
|           30 |      276 | 2024-12-09 | Sashi           | W   | 0.968      | 0.435        | 0.045 (0.019)    | 0.622 (0.262)    | 0 (0.000) |    17.89 | clax, gr1ks, KENSI, Norwi, Patsi |
|           29 |      631 | 2024-11-22 | 9 Pandas        | L   | 0.857      | -            | -                | -                | -         |    -6.22 | clax, deko, KENSI, Lack1, Norwi  |
|           28 |      661 | 2024-11-21 | Spirit          | L   | 0.850      | -            | -                | -                | -         |    -0.14 | clax, deko, KENSI, Lack1, Norwi  |
|           27 |      674 | 2024-11-21 | B8              | W   | 0.846      | 0.143        | 0.166 (0.020)    | 0.520 (0.063)    | 1 (0.846) |    20.59 | clax, deko, KENSI, Lack1, Norwi  |
|           26 |      686 | 2024-11-20 | Eternal Fire    | L   | 0.844      | -            | -                | -                | -         |    -2.19 | clax, deko, KENSI, Lack1, Norwi  |
|           25 |      988 | 2024-11-08 | NAVI Junior     | L   | 0.759      | -            | -                | -                | -         |    -7.91 | clax, deko, KENSI, Lack1, Norwi  |
|           24 |     1000 | 2024-11-07 | 9 Pandas        | W   | 0.754      | 0.426        | 0.156 (0.050)    | 0.797 (0.256)    | 0 (0.000) |    18.02 | clax, deko, KENSI, Lack1, Norwi  |
|           23 |     1039 | 2024-11-05 | 9INE            | W   | 0.740      | 0.426        | 0.123 (0.039)    | 1.000 (0.315)    | 0 (0.000) |    13.36 | clax, deko, KENSI, Lack1, Norwi  |
|           22 |     1276 | 2024-10-24 | M80             | L   | 0.661      | -            | -                | -                | -         |    -4.31 | clax, deko, KENSI, Lack1, Norwi  |
|           21 |     1284 | 2024-10-24 | BIG             | L   | 0.659      | -            | -                | -                | -         |    -1.94 | clax, deko, KENSI, Lack1, Norwi  |
|           20 |     1419 | 2024-10-17 | Nemiga          | L   | 0.612      | -            | -                | -                | -         |    -3.19 | clax, deko, KENSI, Lack1, Norwi  |
|           19 |     1451 | 2024-10-16 | Fluxo           | L   | 0.606      | -            | -                | -                | -         |    -5.09 | clax, deko, KENSI, Lack1, Norwi  |
|           18 |     1464 | 2024-10-15 | PARIVISION      | L   | 0.601      | -            | -                | -                | -         |   -10.65 | clax, deko, KENSI, Lack1, Norwi  |
|           17 |     1486 | 2024-10-13 | FAVBET          | L   | 0.587      | -            | -                | -                | -         |   -10.65 | clax, deko, KENSI, Lack1, Norwi  |
|           16 |     1507 | 2024-10-12 | Metizport       | W   | 0.580      | 0.435        | 0.179 (0.045)    | 0.801 (0.202)    | 0 (0.000) |    15.56 | clax, deko, KENSI, Lack1, Norwi  |
|           15 |     1534 | 2024-10-10 | Zero Tenacity   | W   | 0.565      | 0.435        | 0.084 (0.021)    | 0.622 (0.153)    | 0 (0.000) |    11.94 | clax, deko, KENSI, Lack1, Norwi  |
|           14 |     1724 | 2024-10-04 | Passion UA      | L   | 0.526      | -            | -                | -                | -         |    -4.45 | clax, deko, KENSI, Lack1, Norwi  |
|           13 |     1928 | 2024-09-28 | GamerLegion     | L   | 0.487      | -            | -                | -                | -         |    -1.79 | clax, deko, KENSI, Lack1, Norwi  |
|           12 |     1970 | 2024-09-27 | ECSTATIC        | W   | 0.481      | 0.435        | 0.078 (0.016)    | 1.000 (0.209)    | 0 (0.000) |     8.64 | clax, deko, KENSI, Lack1, Norwi  |
|           11 |     2015 | 2024-09-26 | 3DMAX           | L   | 0.474      | -            | -                | -                | -         |    -1.04 | clax, deko, KENSI, Lack1, Norwi  |
|           10 |     2027 | 2024-09-26 | Into the Breach | W   | 0.473      | 0.384        | -                | 0.518 (0.094)    | 0 (0.000) |     7.28 | clax, deko, KENSI, Lack1, Norwi  |
|            9 |     2065 | 2024-09-25 | Endpoint        | W   | 0.468      | 0.435        | 0.035 (0.007)    | 0.524 (0.107)    | 0 (0.000) |     5.84 | clax, deko, KENSI, Lack1, Norwi  |
|            8 |     2116 | 2024-09-24 | AMKAL           | W   | 0.462      | 0.384        | 0.045 (0.008)    | 0.272 (0.048)    | 0 (0.000) |     5.95 | clax, deko, KENSI, Lack1, Norwi  |
|            7 |     2825 | 2024-08-30 | Monte           | L   | 0.294      | -            | -                | -                | -         |    -3.44 | deko, gr1ks, KENSI, Lack1, Norwi |
|            6 |     2831 | 2024-08-30 | Sashi           | W   | 0.293      | 0.143        | 0.045 (0.002)    | -                | -         |     5.60 | deko, gr1ks, KENSI, Lack1, Norwi |
|            5 |     2857 | 2024-08-29 | GenOne          | W   | 0.288      | -            | -                | -                | -         |     3.06 | deko, gr1ks, KENSI, Lack1, Norwi |
|            4 |     2872 | 2024-08-29 | GamerLegion     | L   | 0.287      | -            | -                | -                | -         |    -0.73 | deko, gr1ks, KENSI, Lack1, Norwi |
|            3 |     3064 | 2024-08-26 | FURIA           | L   | 0.266      | -            | -                | -                | -         |    -0.22 | clax, deko, KENSI, Lack1, Norwi  |
|            2 |     3103 | 2024-08-25 | Eternal Fire    | L   | 0.261      | -            | -                | -                | -         |    -0.70 | clax, deko, KENSI, Lack1, Norwi  |
|            1 |     3321 | 2024-08-19 | Sashi           | L   | 0.220      | -            | -                | -                | -         |    -2.74 | clax, deko, KENSI, Lack1, Norwi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,725.47)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.767 | $5,000.00      | $3,835.49       |
| 2024-10-20 |      0.634 | $4,500.00      | $2,851.75       |
| 2024-10-13 |      0.588 | $5,000.00      | $2,939.83       |
| 2024-09-28 |      0.488 | $5,000.00      | $2,438.94       |
| 2024-09-26 |      0.474 | $3,500.00      | $1,659.47       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
