### Roster Details<br />
Team Name: Aurora<br />
Roster: clax, gr1ks, KENSI, Norwi, Patsi<br />
Global Rank: [71](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [51]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  976.4<br />
<br />
Final Rank Value (976.4) = Starting Rank Value (937.2) + Head To Head Adjustments (39.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.447[<sup>1</sup>](#table2)
- Bounty Collected: 0.375[<sup>2</sup>](#table1)
- Opponent Network: 0.161[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.271<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 937.2
- 400 + ( ( 0.271 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 937.2


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
|           32 |      257 | 2024-12-11 | GUN5            | L   | 0.953      | -            | -                | -                | -         |    -9.60 | clax, gr1ks, KENSI, Norwi, Patsi |
|           31 |      274 | 2024-12-10 | Monte           | L   | 0.946      | -            | -                | -                | -         |   -10.86 | clax, gr1ks, KENSI, Norwi, Patsi |
|           30 |      280 | 2024-12-09 | Sashi           | W   | 0.940      | 0.435        | 0.043 (0.017)    | 0.616 (0.252)    | 0 (0.000) |    17.34 | clax, gr1ks, KENSI, Norwi, Patsi |
|           29 |      635 | 2024-11-22 | 9 Pandas        | L   | 0.829      | -            | -                | -                | -         |    -5.92 | clax, deko, KENSI, Lack1, Norwi  |
|           28 |      665 | 2024-11-21 | Spirit          | L   | 0.822      | -            | -                | -                | -         |    -0.13 | clax, deko, KENSI, Lack1, Norwi  |
|           27 |      678 | 2024-11-21 | B8              | W   | 0.817      | 0.143        | 0.163 (0.019)    | 0.500 (0.058)    | 1 (0.817) |    19.79 | clax, deko, KENSI, Lack1, Norwi  |
|           26 |      690 | 2024-11-20 | Eternal Fire    | L   | 0.816      | -            | -                | -                | -         |    -2.25 | clax, deko, KENSI, Lack1, Norwi  |
|           25 |      992 | 2024-11-08 | NAVI Junior     | L   | 0.731      | -            | -                | -                | -         |    -7.50 | clax, deko, KENSI, Lack1, Norwi  |
|           24 |     1004 | 2024-11-07 | 9 Pandas        | W   | 0.726      | 0.426        | 0.159 (0.049)    | 0.802 (0.248)    | 0 (0.000) |    17.45 | clax, deko, KENSI, Lack1, Norwi  |
|           23 |     1043 | 2024-11-05 | 9INE            | W   | 0.711      | 0.426        | 0.125 (0.038)    | 1.000 (0.303)    | 0 (0.000) |    12.99 | clax, deko, KENSI, Lack1, Norwi  |
|           22 |     1280 | 2024-10-24 | M80             | L   | 0.632      | -            | -                | -                | -         |    -4.12 | clax, deko, KENSI, Lack1, Norwi  |
|           21 |     1288 | 2024-10-24 | BIG             | L   | 0.631      | -            | -                | -                | -         |    -1.83 | clax, deko, KENSI, Lack1, Norwi  |
|           20 |     1423 | 2024-10-17 | Nemiga          | L   | 0.584      | -            | -                | -                | -         |    -2.99 | clax, deko, KENSI, Lack1, Norwi  |
|           19 |     1455 | 2024-10-16 | Fluxo           | L   | 0.577      | -            | -                | -                | -         |    -4.77 | clax, deko, KENSI, Lack1, Norwi  |
|           18 |     1468 | 2024-10-15 | PARIVISION      | L   | 0.573      | -            | -                | -                | -         |   -10.43 | clax, deko, KENSI, Lack1, Norwi  |
|           17 |     1490 | 2024-10-13 | FAVBET          | L   | 0.558      | -            | -                | -                | -         |    -9.99 | clax, deko, KENSI, Lack1, Norwi  |
|           16 |     1511 | 2024-10-12 | Metizport       | W   | 0.551      | 0.435        | 0.182 (0.043)    | 0.790 (0.189)    | 0 (0.000) |    15.03 | clax, deko, KENSI, Lack1, Norwi  |
|           15 |     1538 | 2024-10-10 | Zero Tenacity   | W   | 0.537      | 0.435        | 0.083 (0.019)    | 0.570 (0.133)    | 0 (0.000) |    11.20 | clax, deko, KENSI, Lack1, Norwi  |
|           14 |     1728 | 2024-10-04 | Passion UA      | L   | 0.498      | -            | -                | -                | -         |    -4.19 | clax, deko, KENSI, Lack1, Norwi  |
|           13 |     1932 | 2024-09-28 | GamerLegion     | L   | 0.459      | -            | -                | -                | -         |    -1.26 | clax, deko, KENSI, Lack1, Norwi  |
|           12 |     1974 | 2024-09-27 | ECSTATIC        | W   | 0.452      | 0.435        | 0.079 (0.016)    | 1.000 (0.197)    | 0 (0.000) |     8.18 | clax, deko, KENSI, Lack1, Norwi  |
|           11 |     2019 | 2024-09-26 | 3DMAX           | L   | 0.446      | -            | -                | -                | -         |    -0.99 | clax, deko, KENSI, Lack1, Norwi  |
|           10 |     2031 | 2024-09-26 | Into the Breach | W   | 0.445      | 0.384        | -                | 0.512 (0.088)    | 0 (0.000) |     6.76 | clax, deko, KENSI, Lack1, Norwi  |
|            9 |     2069 | 2024-09-25 | Endpoint        | W   | 0.440      | 0.435        | 0.033 (0.006)    | 0.515 (0.098)    | 0 (0.000) |     5.38 | clax, deko, KENSI, Lack1, Norwi  |
|            8 |     2120 | 2024-09-24 | AMKAL           | W   | 0.433      | 0.384        | 0.044 (0.007)    | 0.275 (0.046)    | 0 (0.000) |     5.60 | clax, deko, KENSI, Lack1, Norwi  |
|            7 |     2829 | 2024-08-30 | Monte           | L   | 0.266      | -            | -                | -                | -         |    -3.14 | deko, gr1ks, KENSI, Lack1, Norwi |
|            6 |     2835 | 2024-08-30 | Sashi           | W   | 0.265      | 0.143        | 0.043 (0.002)    | -                | -         |     5.08 | deko, gr1ks, KENSI, Lack1, Norwi |
|            5 |     2861 | 2024-08-29 | GenOne          | W   | 0.260      | -            | -                | -                | -         |     2.87 | deko, gr1ks, KENSI, Lack1, Norwi |
|            4 |     2876 | 2024-08-29 | GamerLegion     | L   | 0.258      | -            | -                | -                | -         |    -5.23 | deko, gr1ks, KENSI, Lack1, Norwi |
|            3 |     3068 | 2024-08-26 | FURIA           | L   | 0.238      | -            | -                | -                | -         |    -0.19 | clax, deko, KENSI, Lack1, Norwi  |
|            2 |     3107 | 2024-08-25 | Eternal Fire    | L   | 0.232      | -            | -                | -                | -         |    -0.67 | clax, deko, KENSI, Lack1, Norwi  |
|            1 |     3325 | 2024-08-19 | Sashi           | L   | 0.192      | -            | -                | -                | -         |    -2.41 | clax, deko, KENSI, Lack1, Norwi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,070.70)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.739 | $5,000.00      | $3,693.15       |
| 2024-10-20 |      0.605 | $4,500.00      | $2,723.64       |
| 2024-10-13 |      0.559 | $5,000.00      | $2,797.49       |
| 2024-09-28 |      0.459 | $5,000.00      | $2,296.60       |
| 2024-09-26 |      0.446 | $3,500.00      | $1,559.83       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
