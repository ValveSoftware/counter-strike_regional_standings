### Roster Details<br />
Team Name: Aurora<br />
Roster: clax, gr1ks, KENSI, Norwi, Patsi<br />
Global Rank: [68](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_06.md)<br />
Regional Rank: [49]( ../../standings_europe_2025_01_06.md)<br />
<br />
Final Rank Value:  994.0<br />
<br />
Final Rank Value (994.0) = Starting Rank Value (944.7) + Head To Head Adjustments (49.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.444[<sup>1</sup>](#table2)
- Bounty Collected: 0.376[<sup>2</sup>](#table1)
- Opponent Network: 0.183[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.276<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 944.7
- 400 + ( ( 0.276 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 944.7


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
|           32 |      212 | 2024-12-11 | GUN5            | L   | 1.000      | -            | -                | -                | -         |   -10.53 | clax, gr1ks, KENSI, Norwi, Patsi |
|           31 |      229 | 2024-12-10 | Monte           | L   | 1.000      | -            | -                | -                | -         |   -11.20 | clax, gr1ks, KENSI, Norwi, Patsi |
|           30 |      235 | 2024-12-09 | Sashi           | W   | 1.000      | 0.435        | 0.046 (0.020)    | 0.637 (0.277)    | 0 (0.000) |    18.54 | clax, gr1ks, KENSI, Norwi, Patsi |
|           29 |      590 | 2024-11-22 | 9 Pandas        | L   | 0.904      | -            | -                | -                | -         |    -6.63 | clax, deko, KENSI, Lack1, Norwi  |
|           28 |      620 | 2024-11-21 | Spirit          | L   | 0.897      | -            | -                | -                | -         |    -0.16 | clax, deko, KENSI, Lack1, Norwi  |
|           27 |      633 | 2024-11-21 | B8              | W   | 0.892      | 0.143        | 0.162 (0.021)    | 0.556 (0.071)    | 1 (0.892) |    21.85 | clax, deko, KENSI, Lack1, Norwi  |
|           26 |      645 | 2024-11-20 | Eternal Fire    | L   | 0.890      | -            | -                | -                | -         |    -2.02 | clax, deko, KENSI, Lack1, Norwi  |
|           25 |      947 | 2024-11-08 | NAVI Junior     | L   | 0.805      | -            | -                | -                | -         |    -8.45 | clax, deko, KENSI, Lack1, Norwi  |
|           24 |      959 | 2024-11-07 | 9 Pandas        | W   | 0.800      | 0.426        | 0.108 (0.037)    | 0.754 (0.257)    | 0 (0.000) |    18.99 | clax, deko, KENSI, Lack1, Norwi  |
|           23 |      998 | 2024-11-05 | 9INE            | W   | 0.786      | 0.426        | 0.115 (0.039)    | 1.000 (0.335)    | 0 (0.000) |    14.11 | clax, deko, KENSI, Lack1, Norwi  |
|           22 |     1235 | 2024-10-24 | M80             | L   | 0.707      | -            | -                | -                | -         |    -4.64 | clax, deko, KENSI, Lack1, Norwi  |
|           21 |     1243 | 2024-10-24 | BIG             | L   | 0.705      | -            | -                | -                | -         |    -2.13 | clax, deko, KENSI, Lack1, Norwi  |
|           20 |     1378 | 2024-10-17 | Nemiga          | L   | 0.658      | -            | -                | -                | -         |    -3.47 | clax, deko, KENSI, Lack1, Norwi  |
|           19 |     1410 | 2024-10-16 | Fluxo           | L   | 0.652      | -            | -                | -                | -         |    -5.36 | clax, deko, KENSI, Lack1, Norwi  |
|           18 |     1423 | 2024-10-15 | PARIVISION      | L   | 0.647      | -            | -                | -                | -         |   -10.92 | clax, deko, KENSI, Lack1, Norwi  |
|           17 |     1445 | 2024-10-13 | FAVBET          | L   | 0.633      | -            | -                | -                | -         |   -11.55 | clax, deko, KENSI, Lack1, Norwi  |
|           16 |     1466 | 2024-10-12 | Metizport       | W   | 0.626      | 0.435        | 0.168 (0.046)    | 0.805 (0.219)    | 0 (0.000) |    16.53 | clax, deko, KENSI, Lack1, Norwi  |
|           15 |     1493 | 2024-10-10 | Zero Tenacity   | W   | 0.612      | 0.435        | 0.081 (0.022)    | 0.599 (0.159)    | 0 (0.000) |    13.04 | clax, deko, KENSI, Lack1, Norwi  |
|           14 |     1683 | 2024-10-04 | Passion UA      | L   | 0.573      | -            | -                | -                | -         |    -4.90 | clax, deko, KENSI, Lack1, Norwi  |
|           13 |     1887 | 2024-09-28 | GamerLegion     | L   | 0.533      | -            | -                | -                | -         |    -2.19 | clax, deko, KENSI, Lack1, Norwi  |
|           12 |     1929 | 2024-09-27 | ECSTATIC        | W   | 0.527      | 0.435        | 0.072 (0.017)    | 1.000 (0.229)    | 0 (0.000) |     9.38 | clax, deko, KENSI, Lack1, Norwi  |
|           11 |     1974 | 2024-09-26 | 3DMAX           | L   | 0.520      | -            | -                | -                | -         |    -1.11 | clax, deko, KENSI, Lack1, Norwi  |
|           10 |     1986 | 2024-09-26 | Into the Breach | W   | 0.519      | 0.384        | -                | 0.535 (0.107)    | 0 (0.000) |     8.22 | clax, deko, KENSI, Lack1, Norwi  |
|            9 |     2024 | 2024-09-25 | Endpoint        | W   | 0.514      | 0.435        | 0.035 (0.008)    | 0.542 (0.121)    | 0 (0.000) |     6.54 | clax, deko, KENSI, Lack1, Norwi  |
|            8 |     2075 | 2024-09-24 | AMKAL           | W   | 0.508      | 0.384        | 0.044 (0.009)    | 0.269 (0.053)    | 0 (0.000) |     6.73 | clax, deko, KENSI, Lack1, Norwi  |
|            7 |     2784 | 2024-08-30 | Monte           | L   | 0.341      | -            | -                | -                | -         |    -3.93 | deko, gr1ks, KENSI, Lack1, Norwi |
|            6 |     2790 | 2024-08-30 | Sashi           | W   | 0.340      | 0.143        | 0.046 (0.002)    | -                | -         |     6.57 | deko, gr1ks, KENSI, Lack1, Norwi |
|            5 |     2816 | 2024-08-29 | GenOne          | W   | 0.334      | -            | -                | -                | -         |     3.12 | deko, gr1ks, KENSI, Lack1, Norwi |
|            4 |     2831 | 2024-08-29 | GamerLegion     | L   | 0.333      | -            | -                | -                | -         |    -0.92 | deko, gr1ks, KENSI, Lack1, Norwi |
|            3 |     3023 | 2024-08-26 | FURIA           | L   | 0.313      | -            | -                | -                | -         |    -0.25 | clax, deko, KENSI, Lack1, Norwi  |
|            2 |     3062 | 2024-08-25 | Eternal Fire    | L   | 0.307      | -            | -                | -                | -         |    -0.71 | clax, deko, KENSI, Lack1, Norwi  |
|            1 |     3280 | 2024-08-19 | Sashi           | L   | 0.267      | -            | -                | -                | -         |    -3.25 | clax, deko, KENSI, Lack1, Norwi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,788.76)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.813 | $5,000.00      | $4,066.64       |
| 2024-10-20 |      0.680 | $4,500.00      | $3,059.78       |
| 2024-10-13 |      0.634 | $5,000.00      | $3,170.98       |
| 2024-09-28 |      0.534 | $5,000.00      | $2,670.09       |
| 2024-09-26 |      0.520 | $3,500.00      | $1,821.27       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
