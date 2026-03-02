### Roster Details<br />
Team Name: aimclub<br />
Roster: BRK, Ed1m, ERSIN, RoberttMP, zewts<br />
Global Rank: [194](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [133]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  714.2<br />
<br />
Final Rank Value (714.2) = Starting Rank Value (765.0) + Head To Head Adjustments (-50.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.501[<sup>2</sup>](#table1)

The average of these factors is 0.193<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 765.0
- 400 + ( ( 0.193 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 765.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |      169 | 2026-02-25 | 100 Thieves   | L   | 1.000      | -            | -                | -                | -         |    -1.37 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           18 |      182 | 2026-02-25 | CYBERSHOKE    | L   | 1.000      | -            | -                | -                | -         |    -2.16 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           17 |      191 | 2026-02-24 | Diamant       | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.038 (0.014)    | 1 (1.000) |     6.42 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           16 |      197 | 2026-02-24 | mindshock     | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     4.66 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           15 |      224 | 2026-02-24 | Diamant       | L   | 1.000      | -            | -                | -                | -         |   -25.45 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           14 |     1619 | 2026-01-16 | Johnny Speeds | L   | 0.901      | -            | -                | -                | -         |    -2.88 | Ed1m, ERSIN, ra1n, RoberttMP, zewts |
|           13 |     1625 | 2026-01-16 | INFINITE      | W   | 0.901      | 0.338        | 0.000 (0.000)    | 0.111 (0.034)    | 1 (0.901) |     9.41 | Ed1m, ERSIN, ra1n, RoberttMP, zewts |
|           12 |     1633 | 2026-01-16 | AaB           | L   | 0.900      | -            | -                | -                | -         |    -7.31 | Ed1m, ERSIN, ra1n, RoberttMP, zewts |
|           11 |     1640 | 2026-01-16 | Johnny Speeds | W   | 0.900      | 0.338        | 0.021 (0.007)    | 0.910 (0.276)    | 1 (0.900) |    26.03 | Ed1m, ERSIN, ra1n, RoberttMP, zewts |
|           10 |     1644 | 2026-01-16 | Prestige      | L   | 0.900      | -            | -                | -                | -         |   -11.89 | Ed1m, ERSIN, ra1n, RoberttMP, zewts |
|            9 |     1664 | 2026-01-16 | STATE         | L   | 0.899      | -            | -                | -                | -         |    -5.25 | Ed1m, ERSIN, ra1n, RoberttMP, zewts |
|            8 |     1965 | 2025-12-17 | G2 Ares       | L   | 0.701      | -            | -                | -                | -         |   -16.79 | Ed1m, ERSIN, RoberttMP, waZz, zewts |
|            7 |     1970 | 2025-12-17 | nomix         | W   | 0.700      | 0.339        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.700) |     2.85 | Ed1m, ERSIN, RoberttMP, waZz, zewts |
|            6 |     1982 | 2025-12-17 | G2 Ares       | L   | 0.698      | -            | -                | -                | -         |   -17.38 | Ed1m, ERSIN, RoberttMP, waZz, zewts |
|            5 |     2914 | 2025-11-07 | STATE         | L   | 0.433      | -            | -                | -                | -         |    -2.17 | Ed1m, ERSIN, RoberttMP, waZz, zewts |
|            4 |     2930 | 2025-11-07 | boomer demons | W   | 0.433      | 0.335        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.433) |     1.62 | Ed1m, ERSIN, RoberttMP, waZz, zewts |
|            3 |     2939 | 2025-11-07 | AM            | L   | 0.433      | -            | -                | -                | -         |    -2.70 | Ed1m, ERSIN, RoberttMP, waZz, zewts |
|            2 |     2960 | 2025-11-07 | Alliance      | L   | 0.432      | -            | -                | -                | -         |    -0.62 | Ed1m, ERSIN, RoberttMP, waZz, zewts |
|            1 |     2979 | 2025-11-07 | BC.Game       | L   | 0.432      | -            | -                | -                | -         |    -5.82 | Ed1m, ERSIN, RoberttMP, waZz, zewts |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
