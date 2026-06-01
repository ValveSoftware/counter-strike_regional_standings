### Roster Details<br />
Team Name: Sangal<br />
Roster: clax, danistzz, h0kz, Patsi, R4DYX<br />
Global Rank: [209](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [134]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  733.8<br />
<br />
Final Rank Value (733.8) = Starting Rank Value (689.9) + Head To Head Adjustments (43.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.259[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.059[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 689.9
- 400 + ( ( 0.152 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 689.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     4547 | 2026-02-16 | TNC                | W   | 0.499      | 0.384        | 0.022 (0.004)    | 1.000 (0.192)    | 0 (0.000) |    13.20 | clax, danistzz, h0kz, Patsi, R4DYX   |
|           18 |     5060 | 2026-02-02 | Nemiga             | W   | 0.406      | 0.435        | 0.135 (0.024)    | 1.000 (0.177)    | 0 (0.000) |    12.43 | clax, danistzz, h0kz, Patsi, R4DYX   |
|           17 |     5260 | 2026-01-26 | 1win               | L   | 0.359      | -            | -                | -                | -         |    -0.45 | clax, danistzz, h0kz, Patsi, R4DYX   |
|           16 |     5283 | 2026-01-25 | ex-RUBY            | L   | 0.352      | -            | -                | -                | -         |    -2.32 | clax, danistzz, h0kz, Patsi, R4DYX   |
|           15 |     5351 | 2026-01-23 | FAVBET             | W   | 0.340      | 0.435        | 0.015 (0.002)    | 0.513 (0.076)    | 0 (0.000) |     7.68 | clax, danistzz, h0kz, Patsi, R4DYX   |
|           14 |     5442 | 2026-01-21 | Nuclear TigeRES    | L   | 0.328      | -            | -                | -                | -         |    -0.28 | clax, danistzz, h0kz, Patsi, R4DYX   |
|           13 |     5461 | 2026-01-21 | HOTU               | L   | 0.326      | -            | -                | -                | -         |    -0.20 | clax, danistzz, h0kz, Patsi, R4DYX   |
|           12 |     5474 | 2026-01-20 | FORZE Reload       | W   | 0.320      | 0.435        | 0.000 (0.000)    | 0.100 (0.014)    | 0 (0.000) |     4.88 | clax, danistzz, h0kz, Patsi, R4DYX   |
|           11 |     5518 | 2026-01-18 | illwill            | L   | 0.306      | -            | -                | -                | -         |    -0.95 | clax, danistzz, h0kz, Patsi, R4DYX   |
|           10 |     5546 | 2026-01-17 | KOLESIE            | W   | 0.301      | 0.624        | 0.033 (0.006)    | 0.644 (0.121)    | 0 (0.000) |     8.91 | clax, danistzz, h0kz, Patsi, R4DYX   |
|            9 |     5563 | 2026-01-17 | BULGARIAPEEK       | W   | 0.300      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.56 | clax, danistzz, h0kz, Patsi, R4DYX   |
|            8 |     5860 | 2025-12-22 | Nemesis            | L   | 0.125      | -            | -                | -                | -         |    -2.48 | danistzz, h0kz, Norwi, Patsi, R4DYX  |
|            7 |     5878 | 2025-12-21 | Mousquetaires      | W   | 0.118      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.61 | clax, danistzz, Norwi, Patsi, r3salt |
|            6 |     6009 | 2025-12-12 | BIG                | L   | 0.060      | -            | -                | -                | -         |    -0.04 | clax, danistzz, Norwi, Patsi, r3salt |
|            5 |     6043 | 2025-12-09 | ex-Fingers Crossed | W   | 0.041      | 0.435        | 0.000 (0.000)    | 0.137 (0.002)    | 0 (0.000) |     0.44 | clax, danistzz, Norwi, Patsi, r3salt |
|            4 |     6091 | 2025-12-07 | EYEBALLERS         | L   | 0.026      | -            | -                | -                | -         |    -0.01 | clax, danistzz, Norwi, Patsi, r3salt |
|            3 |     6111 | 2025-12-06 | Sashi              | W   | 0.020      | 0.435        | 0.008 (0.000)    | 0.517 (0.004)    | 0 (0.000) |     0.59 | clax, danistzz, Norwi, Patsi, r3salt |
|            2 |     6134 | 2025-12-05 | Alliance           | L   | 0.014      | -            | -                | -                | -         |    -0.01 | clax, danistzz, Norwi, Patsi, r3salt |
|            1 |     6143 | 2025-12-05 | DragonClaw         | W   | 0.012      | 0.371        | 0.031 (0.000)    | 0.505 (0.002)    | 0 (0.000) |     0.31 | clax, danistzz, Norwi, Patsi, r3salt |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($854.12)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-05 |      0.427 | $2,000.00      | $854.12         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
