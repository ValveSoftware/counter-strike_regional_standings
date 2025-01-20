### Roster Details<br />
Team Name: Aurora<br />
Roster: clax, gr1ks, KENSI, Norwi, Patsi<br />
Global Rank: [71](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [51]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  981.7<br />
<br />
Final Rank Value (981.7) = Starting Rank Value (938.4) + Head To Head Adjustments (43.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.447[<sup>1</sup>](#table2)
- Bounty Collected: 0.376[<sup>2</sup>](#table1)
- Opponent Network: 0.164[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.272<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 938.4
- 400 + ( ( 0.272 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 938.4


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
|           32 |      280 | 2024-12-11 | GUN5            | L   | 0.959      | -            | -                | -                | -         |    -9.77 | clax, gr1ks, KENSI, Norwi, Patsi |
|           31 |      297 | 2024-12-10 | Monte           | L   | 0.952      | -            | -                | -                | -         |   -10.76 | clax, gr1ks, KENSI, Norwi, Patsi |
|           30 |      303 | 2024-12-09 | Sashi           | W   | 0.946      | 0.435        | 0.043 (0.018)    | 0.617 (0.254)    | 0 (0.000) |    17.49 | clax, gr1ks, KENSI, Norwi, Patsi |
|           29 |      658 | 2024-11-22 | 9 Pandas        | L   | 0.835      | -            | -                | -                | -         |    -6.03 | clax, deko, KENSI, Lack1, Norwi  |
|           28 |      688 | 2024-11-21 | Spirit          | L   | 0.828      | -            | -                | -                | -         |    -0.13 | clax, deko, KENSI, Lack1, Norwi  |
|           27 |      701 | 2024-11-21 | B8              | W   | 0.823      | 0.143        | 0.164 (0.019)    | 0.504 (0.059)    | 1 (0.823) |    19.99 | clax, deko, KENSI, Lack1, Norwi  |
|           26 |      713 | 2024-11-20 | Eternal Fire    | L   | 0.822      | -            | -                | -                | -         |    -2.27 | clax, deko, KENSI, Lack1, Norwi  |
|           25 |     1015 | 2024-11-08 | NAVI Junior     | L   | 0.737      | -            | -                | -                | -         |    -7.67 | clax, deko, KENSI, Lack1, Norwi  |
|           24 |     1027 | 2024-11-07 | 9 Pandas        | W   | 0.732      | 0.426        | 0.159 (0.049)    | 0.801 (0.250)    | 0 (0.000) |    17.53 | clax, deko, KENSI, Lack1, Norwi  |
|           23 |     1066 | 2024-11-05 | 9INE            | W   | 0.718      | 0.426        | 0.125 (0.038)    | 1.000 (0.306)    | 0 (0.000) |    13.02 | clax, deko, KENSI, Lack1, Norwi  |
|           22 |     1303 | 2024-10-24 | M80             | L   | 0.638      | -            | -                | -                | -         |    -4.22 | clax, deko, KENSI, Lack1, Norwi  |
|           21 |     1311 | 2024-10-24 | BIG             | L   | 0.637      | -            | -                | -                | -         |    -1.86 | clax, deko, KENSI, Lack1, Norwi  |
|           20 |     1446 | 2024-10-17 | Nemiga          | L   | 0.590      | -            | -                | -                | -         |    -3.08 | clax, deko, KENSI, Lack1, Norwi  |
|           19 |     1478 | 2024-10-16 | Fluxo           | L   | 0.583      | -            | -                | -                | -         |    -4.88 | clax, deko, KENSI, Lack1, Norwi  |
|           18 |     1491 | 2024-10-15 | PARIVISION      | L   | 0.579      | -            | -                | -                | -         |   -10.47 | clax, deko, KENSI, Lack1, Norwi  |
|           17 |     1513 | 2024-10-13 | FAVBET          | L   | 0.564      | -            | -                | -                | -         |   -10.21 | clax, deko, KENSI, Lack1, Norwi  |
|           16 |     1534 | 2024-10-12 | Metizport       | W   | 0.557      | 0.435        | 0.181 (0.044)    | 0.788 (0.191)    | 0 (0.000) |    15.13 | clax, deko, KENSI, Lack1, Norwi  |
|           15 |     1561 | 2024-10-10 | Zero Tenacity   | W   | 0.543      | 0.435        | 0.084 (0.020)    | 0.572 (0.135)    | 0 (0.000) |    11.44 | clax, deko, KENSI, Lack1, Norwi  |
|           14 |     1751 | 2024-10-04 | Passion UA      | L   | 0.504      | -            | -                | -                | -         |    -4.24 | clax, deko, KENSI, Lack1, Norwi  |
|           13 |     1955 | 2024-09-28 | GamerLegion     | L   | 0.465      | -            | -                | -                | -         |    -1.67 | clax, deko, KENSI, Lack1, Norwi  |
|           12 |     1997 | 2024-09-27 | ECSTATIC        | W   | 0.458      | 0.435        | 0.079 (0.016)    | 1.000 (0.199)    | 0 (0.000) |     8.22 | clax, deko, KENSI, Lack1, Norwi  |
|           11 |     2042 | 2024-09-26 | 3DMAX           | L   | 0.452      | -            | -                | -                | -         |    -1.02 | clax, deko, KENSI, Lack1, Norwi  |
|           10 |     2054 | 2024-09-26 | Into the Breach | W   | 0.451      | 0.384        | -                | 0.513 (0.089)    | 0 (0.000) |     6.85 | clax, deko, KENSI, Lack1, Norwi  |
|            9 |     2092 | 2024-09-25 | Endpoint        | W   | 0.446      | 0.435        | 0.034 (0.007)    | 0.566 (0.110)    | 0 (0.000) |     5.49 | clax, deko, KENSI, Lack1, Norwi  |
|            8 |     2143 | 2024-09-24 | AMKAL           | W   | 0.439      | 0.384        | 0.044 (0.007)    | 0.274 (0.046)    | 0 (0.000) |     5.63 | clax, deko, KENSI, Lack1, Norwi  |
|            7 |     2852 | 2024-08-30 | Monte           | L   | 0.272      | -            | -                | -                | -         |    -3.20 | deko, gr1ks, KENSI, Lack1, Norwi |
|            6 |     2858 | 2024-08-30 | Sashi           | W   | 0.271      | 0.143        | 0.043 (0.002)    | -                | -         |     5.16 | deko, gr1ks, KENSI, Lack1, Norwi |
|            5 |     2884 | 2024-08-29 | GenOne          | W   | 0.266      | -            | -                | -                | -         |     2.89 | deko, gr1ks, KENSI, Lack1, Norwi |
|            4 |     2899 | 2024-08-29 | GamerLegion     | L   | 0.264      | -            | -                | -                | -         |    -0.67 | deko, gr1ks, KENSI, Lack1, Norwi |
|            3 |     3091 | 2024-08-26 | FURIA           | L   | 0.244      | -            | -                | -                | -         |    -0.20 | clax, deko, KENSI, Lack1, Norwi  |
|            2 |     3130 | 2024-08-25 | Eternal Fire    | L   | 0.238      | -            | -                | -                | -         |    -0.68 | clax, deko, KENSI, Lack1, Norwi  |
|            1 |     3348 | 2024-08-19 | Sashi           | L   | 0.198      | -            | -                | -                | -         |    -2.47 | clax, deko, KENSI, Lack1, Norwi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,211.15)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.745 | $5,000.00      | $3,723.68       |
| 2024-10-20 |      0.611 | $4,500.00      | $2,751.12       |
| 2024-10-13 |      0.566 | $5,000.00      | $2,828.02       |
| 2024-09-28 |      0.465 | $5,000.00      | $2,327.13       |
| 2024-09-26 |      0.452 | $3,500.00      | $1,581.20       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
