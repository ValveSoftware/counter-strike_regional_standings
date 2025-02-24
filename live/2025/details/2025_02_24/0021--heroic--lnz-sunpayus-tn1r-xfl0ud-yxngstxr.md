### Roster Details<br />
Team Name: HEROIC<br />
Roster: LNZ, SunPayus, tN1R, xfl0ud, yxngstxr<br />
Global Rank: [21](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [16]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  1155.2<br />
<br />
Final Rank Value (1155.2) = Starting Rank Value (1022.8) + Head To Head Adjustments (132.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.526[<sup>1</sup>](#table2)
- Bounty Collected: 0.414[<sup>2</sup>](#table1)
- Opponent Network: 0.098[<sup>2</sup>](#table1)
- LAN Wins: 0.270[<sup>2</sup>](#table1)

The average of these factors is 0.327<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1022.8
- 400 + ( ( 0.327 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1022.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |       88 | 2025-02-20 | Astralis      | W   | 1.000      | 0.143        | 0.580 (0.083)    | 1.000 (0.143)    | 0 (0.000) |    29.53 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           31 |      265 | 2025-02-11 | Metizport     | W   | 1.000      | 0.143        | -                | 0.691 (0.099)    | 0 (0.000) |    10.10 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           30 |      275 | 2025-02-11 | BIG           | W   | 1.000      | 0.143        | 0.228 (0.033)    | 0.644 (0.092)    | 0 (0.000) |    22.33 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           29 |      288 | 2025-02-10 | 3DMAX         | L   | 1.000      | -            | -                | -                | -         |    -3.02 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           28 |      303 | 2025-02-10 | Zero Tenacity | W   | 1.000      | 0.143        | -                | 0.657 (0.094)    | -         |     5.58 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           27 |      344 | 2025-02-09 | PARIVISION    | L   | 1.000      | -            | -                | -                | -         |   -28.32 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           26 |      406 | 2025-02-08 | Passion UA    | W   | 1.000      | 0.143        | -                | 0.655 (0.094)    | -         |    13.97 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           25 |      558 | 2025-01-31 | BIG           | L   | 1.000      | -            | -                | -                | -         |    -7.11 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           24 |      561 | 2025-01-30 | Eternal Fire  | L   | 1.000      | -            | -                | -                | -         |    -0.58 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           23 |      568 | 2025-01-29 | Liquid        | W   | 1.000      | 0.143        | 0.197 (0.028)    | -                | 1 (1.000) |    27.40 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           22 |      604 | 2025-01-23 | Spirit        | L   | 0.985      | -            | -                | -                | -         |    -0.22 | LNZ, Maden, SunPayus, xfl0ud, yxngstxr |
|           21 |      612 | 2025-01-18 | Liquid        | W   | 0.951      | 0.143        | 0.197 (0.027)    | -                | -         |    26.99 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           20 |      627 | 2025-01-14 | 3DMAX         | W   | 0.925      | 0.143        | 0.298 (0.039)    | 0.717 (0.095)    | -         |    27.00 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           19 |     1339 | 2024-11-18 | ECLOT         | L   | 0.548      | -            | -                | -                | -         |    -8.54 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           18 |     1351 | 2024-11-17 | Cloud9        | L   | 0.542      | -            | -                | -                | -         |   -12.55 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           17 |     1364 | 2024-11-17 | MOUZ          | L   | 0.537      | -            | -                | -                | -         |    -0.10 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           16 |     1372 | 2024-11-16 | Rebels        | W   | 0.536      | -            | -                | -                | 1 (0.536) |     2.31 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           15 |     1964 | 2024-10-20 | Nemiga        | W   | 0.352      | 0.500        | 0.177 (0.031)    | 0.432 (0.076)    | -         |     5.49 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           14 |     1993 | 2024-10-19 | BC.Game       | L   | 0.345      | -            | -                | -                | -         |    -6.19 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           13 |     2040 | 2024-10-17 | Nemiga        | W   | 0.333      | 0.500        | 0.177 (0.029)    | -                | -         |     4.88 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           12 |     2051 | 2024-10-17 | Fluxo         | W   | 0.331      | 0.624        | -                | 0.453 (0.093)    | 1 (0.331) |     3.46 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           11 |     2072 | 2024-10-16 | SAW           | W   | 0.326      | 0.500        | 0.244 (0.040)    | -                | -         |     8.45 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|           10 |     2080 | 2024-10-16 | Nemiga        | W   | 0.325      | 0.624        | 0.177 (0.036)    | 0.432 (0.088)    | 1 (0.325) |     4.91 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            9 |     2102 | 2024-10-15 | Sashi         | W   | 0.319      | 0.500        | -                | 0.685 (0.109)    | -         |     3.77 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            8 |     2635 | 2024-09-27 | BetBoom       | L   | 0.199      | -            | -                | -                | -         |    -3.64 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            7 |     2699 | 2024-09-26 | Passion UA    | W   | 0.191      | -            | -                | -                | -         |     2.63 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            6 |     3273 | 2024-09-08 | Falcons       | L   | 0.072      | -            | -                | -                | -         |    -0.02 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            5 |     3312 | 2024-09-07 | FlyQuest      | W   | 0.064      | -            | -                | -                | 1 (0.064) |     1.05 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            4 |     3334 | 2024-09-06 | FaZe          | L   | 0.058      | -            | -                | -                | -         |    -0.01 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            3 |     3355 | 2024-09-05 | Falcons       | W   | 0.053      | 0.889        | 0.865 (0.041)    | -                | 1 (0.053) |     1.65 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            2 |     3409 | 2024-09-04 | Eternal Fire  | L   | 0.045      | -            | -                | -                | -         |    -0.01 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |
|            1 |     3442 | 2024-09-03 | FaZe          | W   | 0.039      | -            | -                | -                | 1 (0.039) |     1.21 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($46,546.53)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-31 |      1.000 | $4,500.00      | $4,500.00       |
| 2025-01-26 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-10-20 |      0.352 | $17,000.00     | $5,979.96       |
| 2024-10-19 |      0.346 | $25,000.00     | $8,660.04       |
| 2024-09-28 |      0.206 | $2,000.00      | $411.66         |
| 2024-09-22 |      0.166 | $12,000.00     | $1,994.87       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
