### Roster Details<br />
Team Name: GamerLegion<br />
Roster: PR, REZ, sl3nd, Tauson, ztr<br />
Global Rank: [13](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [11]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  1491.2<br />
<br />
Final Rank Value (1491.2) = Starting Rank Value (1482.1) + Head To Head Adjustments (9.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.559[<sup>1</sup>](#table2)
- Bounty Collected: 0.576[<sup>2</sup>](#table1)
- Opponent Network: 0.258[<sup>2</sup>](#table1)
- LAN Wins: 0.880[<sup>2</sup>](#table1)

The average of these factors is 0.568<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1482.1
- 400 + ( ( 0.568 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1482.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      286 | 2025-02-10 | Metizport     | W   | 1.000      | 0.143        | 0.073 (0.010)    | 0.691 (0.099)    | -         |     1.69 | PR, REZ, sl3nd, Tauson, ztr      |
|           32 |      304 | 2025-02-10 | Hesta         | W   | 1.000      | -            | -                | -                | -         |     0.20 | PR, REZ, sl3nd, Tauson, ztr      |
|           31 |      405 | 2025-02-08 | PARIVISION    | L   | 1.000      | -            | -                | -                | -         |   -31.18 | PR, REZ, sl3nd, Tauson, ztr      |
|           30 |      508 | 2025-02-04 | Spirit        | L   | 1.000      | -            | -                | -                | -         |    -2.42 | PR, REZ, sl3nd, Tauson, ztr      |
|           29 |      518 | 2025-02-04 | Astralis      | W   | 1.000      | 1.000        | 0.580 (0.580)    | 1.000 (1.000)    | 1 (1.000) |    23.34 | PR, REZ, sl3nd, Tauson, ztr      |
|           28 |      528 | 2025-02-03 | The MongolZ   | L   | 1.000      | -            | -                | -                | -         |    -2.61 | PR, REZ, sl3nd, Tauson, ztr      |
|           27 |      548 | 2025-02-01 | MOUZ          | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.622 (0.622)    | 1 (1.000) |    28.74 | PR, REZ, sl3nd, Tauson, ztr      |
|           26 |      565 | 2025-01-30 | paiN          | W   | 1.000      | 0.143        | 0.296 (0.042)    | 0.747 (0.107)    | 1 (1.000) |    17.88 | PR, REZ, sl3nd, Tauson, ztr      |
|           25 |      575 | 2025-01-29 | SAW           | W   | 1.000      | 0.143        | 0.244 (0.035)    | -                | 1 (1.000) |     8.16 | PR, REZ, sl3nd, Tauson, ztr      |
|           24 |      616 | 2025-01-17 | paiN          | L   | 0.944      | -            | -                | -                | -         |   -13.80 | PR, REZ, sl3nd, Tauson, ztr      |
|           23 |      958 | 2024-12-06 | Natus Vincere | L   | 0.669      | -            | -                | -                | -         |    -4.39 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           22 |      984 | 2024-12-05 | Wildcard      | W   | 0.663      | 1.000        | 0.165 (0.109)    | 0.579 (0.384)    | 1 (0.663) |     4.48 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           21 |     1012 | 2024-12-05 | Liquid        | L   | 0.656      | -            | -                | -                | -         |   -10.72 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           20 |     1021 | 2024-12-04 | Vitality      | L   | 0.655      | -            | -                | -                | -         |    -1.64 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           19 |     1075 | 2024-12-02 | Passion UA    | W   | 0.637      | -            | -                | -                | 1 (0.637) |     1.64 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           18 |     1093 | 2024-12-01 | The MongolZ   | L   | 0.630      | -            | -                | -                | -         |    -1.59 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           17 |     1119 | 2024-11-30 | paiN          | W   | 0.624      | 0.143        | 0.296 (0.026)    | 0.747 (0.067)    | 1 (0.624) |    10.67 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           16 |     1134 | 2024-11-29 | FURIA         | W   | 0.622      | -            | -                | -                | 1 (0.622) |     6.79 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           15 |     1320 | 2024-11-20 | BetBoom       | W   | 0.558      | -            | -                | -                | 1 (0.558) |     1.36 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           14 |     1321 | 2024-11-20 | SINNERS       | W   | 0.557      | -            | -                | -                | 1 (0.557) |     0.78 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           13 |     1333 | 2024-11-19 | Falcons       | W   | 0.550      | -            | -                | -                | -         |     0.31 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           12 |     1344 | 2024-11-18 | UNiTY         | W   | 0.544      | -            | -                | -                | -         |     0.37 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           11 |     1369 | 2024-11-17 | ECLOT         | L   | 0.537      | -            | -                | -                | -         |   -15.47 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           10 |     1377 | 2024-11-16 | Vitality      | L   | 0.535      | -            | -                | -                | -         |    -1.38 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            9 |     2153 | 2024-10-11 | GUN5          | L   | 0.292      | -            | -                | -                | -         |    -8.74 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            8 |     2296 | 2024-10-06 | Passion UA    | W   | 0.260      | 0.435        | -                | 0.655 (0.074)    | -         |     0.55 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            7 |     2301 | 2024-10-06 | 9 Pandas      | W   | 0.259      | 0.435        | 0.081 (0.009)    | 0.663 (0.075)    | -         |     0.42 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            6 |     2329 | 2024-10-05 | B8            | W   | 0.253      | 0.435        | 0.119 (0.013)    | 0.770 (0.085)    | -         |     0.89 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            5 |     2368 | 2024-10-04 | Adventurers   | W   | 0.246      | -            | -                | -                | -         |     0.11 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            4 |     2594 | 2024-09-28 | BetBoom       | L   | 0.206      | -            | -                | -                | -         |    -6.11 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            3 |     2598 | 2024-09-28 | Aurora        | W   | 0.205      | -            | -                | -                | -         |     0.14 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            2 |     2651 | 2024-09-27 | B8            | W   | 0.198      | 0.435        | 0.119 (0.010)    | 0.770 (0.066)    | -         |     0.64 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            1 |     2677 | 2024-09-26 | CPH Wolves    | W   | 0.193      | -            | -                | -                | -         |     0.07 | FL4MUS, sl3nd, Tauson, volt, ztr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($60,249.44)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-09 |      1.000 | $38,000.00     | $38,000.00      |
| 2024-12-15 |      0.724 | $20,000.00     | $14,478.31      |
| 2024-10-06 |      0.260 | $22,000.00     | $5,712.83       |
| 2024-09-28 |      0.206 | $10,000.00     | $2,058.29       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
