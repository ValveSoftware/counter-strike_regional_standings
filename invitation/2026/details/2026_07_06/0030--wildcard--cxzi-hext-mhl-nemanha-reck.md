### Roster Details<br />
Team Name: Wildcard<br />
Roster: Cxzi, HexT, mhL, nEMANHA, reck<br />
Global Rank: [30](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_06.md)<br />
Regional Rank: [7]( ../../standings_americas_2026_07_06.md)<br />
<br />
Final Rank Value:  1337.9<br />
<br />
Final Rank Value (1337.9) = Starting Rank Value (1329.7) + Head To Head Adjustments (8.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.510[<sup>1</sup>](#table2)
- Bounty Collected: 0.428[<sup>2</sup>](#table1)
- Opponent Network: 0.215[<sup>2</sup>](#table1)
- LAN Wins: 0.819[<sup>2</sup>](#table1)

The average of these factors is 0.493<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1329.7
- 400 + ( ( 0.493 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 1329.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           48 |      909 | 2026-05-24 | FOKUS          | W   | 0.914      | 0.435        | 0.085 (0.034)    | 0.602 (0.239)    | 1 (0.914) |    12.10 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           47 |      949 | 2026-05-23 | FOKUS          | W   | 0.908      | 0.435        | 0.085 (0.033)    | 0.602 (0.238)    | 1 (0.908) |    12.27 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           46 |      980 | 2026-05-23 | Acend          | W   | 0.906      | 0.435        | 0.070 (0.028)    | 0.908 (0.357)    | 1 (0.906) |    13.31 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           45 |     1004 | 2026-05-22 | Inner Circle   | W   | 0.901      | 0.435        | 0.142 (0.056)    | 0.608 (0.238)    | 1 (0.901) |    16.42 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           44 |     1541 | 2026-05-03 | M80            | L   | 0.777      | -            | -                | -                | -         |   -10.51 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           43 |     1542 | 2026-05-03 | Voca           | L   | 0.777      | -            | -                | -                | -         |   -18.60 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           42 |     1550 | 2026-05-03 | ex-Aether      | W   | 0.774      | -            | -                | -                | -         |     0.80 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           41 |     1626 | 2026-05-01 | Voca           | W   | 0.763      | 0.363        | 0.041 (0.011)    | 0.494 (0.137)    | -         |     5.52 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           40 |     1647 | 2026-05-01 | FarmVille      | W   | 0.761      | -            | -                | -                | -         |     0.97 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           39 |     1724 | 2026-04-29 | FarmVille      | W   | 0.750      | -            | -                | -                | -         |     0.97 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           38 |     1804 | 2026-04-27 | Aether         | W   | 0.736      | -            | -                | -                | -         |     0.88 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           37 |     1850 | 2026-04-26 | Wanted Goons   | W   | 0.729      | -            | -                | -                | -         |     0.84 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           36 |     1862 | 2026-04-26 | Fisher College | W   | 0.729      | 0.371        | 0.043 (0.012)    | -                | 1 (0.729) |     4.55 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           35 |     1875 | 2026-04-26 | Passion UA     | W   | 0.728      | -            | -                | -                | 1 (0.728) |     6.47 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           34 |     1918 | 2026-04-25 | Chicken Coop   | W   | 0.723      | -            | -                | -                | 1 (0.723) |     3.39 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           33 |     1929 | 2026-04-25 | Voca           | W   | 0.722      | 0.371        | 0.041 (0.011)    | 0.494 (0.132)    | 1 (0.722) |     5.99 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           32 |     1954 | 2026-04-25 | FRZ            | W   | 0.721      | -            | -                | -                | 1 (0.721) |     0.25 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           31 |     2369 | 2026-04-08 | PARIVISION     | L   | 0.607      | -            | -                | -                | -         |    -3.55 | HexT, mhL, nEMANHA, Peeping, reck |
|           30 |     2409 | 2026-04-07 | The MongolZ    | L   | 0.599      | -            | -                | -                | -         |    -2.00 | HexT, mhL, nEMANHA, Peeping, reck |
|           29 |     2448 | 2026-04-06 | FOKUS          | W   | 0.592      | 1.000        | 0.085 (0.050)    | 0.602 (0.356)    | 1 (0.592) |     9.73 | HexT, mhL, nEMANHA, Peeping, reck |
|           28 |     2511 | 2026-04-04 | FaZe           | W   | 0.584      | 1.000        | 0.310 (0.181)    | 0.327 (0.191)    | -         |    11.80 | HexT, mhL, nEMANHA, Peeping, reck |
|           27 |     2574 | 2026-04-04 | B8             | L   | 0.579      | -            | -                | -                | -         |    -2.55 | HexT, mhL, nEMANHA, Peeping, reck |
|           26 |     3165 | 2026-03-28 | NOMERCY        | W   | 0.533      | -            | -                | -                | -         |     0.13 | HexT, mhL, nEMANHA, Peeping, reck |
|           25 |     3173 | 2026-03-28 | BetBoom        | W   | 0.533      | 0.341        | 0.261 (0.047)    | 0.677 (0.123)    | -         |    15.02 | HexT, mhL, nEMANHA, Peeping, reck |
|           24 |     3179 | 2026-03-28 | Sangal         | L   | 0.533      | -            | -                | -                | -         |   -14.79 | HexT, mhL, nEMANHA, Peeping, reck |
|           23 |     3184 | 2026-03-28 | BESTIA         | L   | 0.532      | -            | -                | -                | -         |   -12.05 | HexT, mhL, nEMANHA, Peeping, reck |
|           22 |     3367 | 2026-03-24 | FOKUS          | L   | 0.506      | -            | -                | -                | -         |    -8.03 | HexT, mhL, nEMANHA, Peeping, reck |
|           21 |     3401 | 2026-03-23 | EAC            | L   | 0.502      | -            | -                | -                | -         |   -10.95 | HexT, mhL, nEMANHA, Peeping, reck |
|           20 |     3407 | 2026-03-23 | Exilium        | W   | 0.502      | -            | -                | -                | -         |     0.10 | HexT, mhL, nEMANHA, Peeping, reck |
|           19 |     3409 | 2026-03-23 | BERG           | W   | 0.502      | -            | -                | -                | -         |     0.67 | HexT, mhL, nEMANHA, Peeping, reck |
|           18 |     4497 | 2026-03-01 | Voca           | L   | 0.357      | -            | -                | -                | -         |    -8.55 | CLASIA, HexT, mhL, Peeping, reck  |
|           17 |     4504 | 2026-03-01 | LAG            | W   | 0.355      | 0.769        | -                | 0.520 (0.142)    | -         |     2.10 | CLASIA, HexT, mhL, Peeping, reck  |
|           16 |     4540 | 2026-02-28 | Voca           | L   | 0.350      | -            | -                | -                | -         |    -8.56 | CLASIA, HexT, mhL, Peeping, reck  |
|           15 |     4586 | 2026-02-27 | BOSS           | W   | 0.343      | -            | -                | -                | -         |     0.54 | CLASIA, HexT, mhL, Peeping, reck  |
|           14 |     4642 | 2026-02-26 | Shimmer        | W   | 0.336      | -            | -                | -                | -         |     0.29 | CLASIA, HexT, mhL, Peeping, reck  |
|           13 |     4963 | 2026-02-20 | LAG            | L   | 0.297      | -            | -                | -                | -         |    -7.75 | CLASIA, HexT, mhL, Peeping, reck  |
|           12 |     5073 | 2026-02-18 | Blitzkrieg     | W   | 0.282      | -            | -                | -                | -         |     0.10 | CLASIA, HexT, mhL, Peeping, reck  |
|           11 |     5219 | 2026-02-15 | ClayMakers     | W   | 0.264      | -            | -                | -                | -         |     0.09 | CLASIA, HexT, mhL, Peeping, reck  |
|           10 |     5396 | 2026-02-12 | Passion UA     | L   | 0.243      | -            | -                | -                | -         |    -5.86 | CLASIA, HexT, mhL, Peeping, reck  |
|            9 |     5435 | 2026-02-11 | Voca           | W   | 0.237      | -            | -                | -                | -         |     1.50 | CLASIA, HexT, mhL, Peeping, reck  |
|            8 |     5437 | 2026-02-11 | Passion UA     | L   | 0.236      | -            | -                | -                | -         |    -5.77 | CLASIA, HexT, mhL, Peeping, reck  |
|            7 |     5468 | 2026-02-10 | Fisher College | W   | 0.230      | -            | -                | -                | -         |     1.24 | CLASIA, HexT, mhL, Peeping, reck  |
|            6 |     5480 | 2026-02-10 | Voca           | W   | 0.229      | -            | -                | -                | -         |     1.42 | CLASIA, HexT, mhL, Peeping, reck  |
|            5 |     5509 | 2026-02-09 | regain         | W   | 0.223      | -            | -                | -                | -         |     0.24 | CLASIA, HexT, mhL, Peeping, reck  |
|            4 |     5527 | 2026-02-08 | ClayMakers     | W   | 0.216      | -            | -                | -                | -         |     0.07 | CLASIA, HexT, mhL, Peeping, reck  |
|            3 |     5590 | 2026-02-06 | M80            | L   | 0.203      | -            | -                | -                | -         |    -3.12 | CLASIA, HexT, mhL, Peeping, reck  |
|            2 |     5624 | 2026-02-05 | LAG            | W   | 0.197      | -            | -                | -                | -         |     1.03 | CLASIA, HexT, mhL, Peeping, reck  |
|            1 |     5704 | 2026-02-02 | FlyQuest RED   | W   | 0.176      | -            | -                | -                | -         |     0.08 | CLASIA, HexT, mhL, Peeping, reck  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($61,569.98)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      0.914 | $30,000.00     | $27,429.41      |
| 2026-05-03 |      0.777 | $4,000.00      | $3,108.78       |
| 2026-05-03 |      0.777 | $4,000.00      | $3,106.16       |
| 2026-04-26 |      0.729 | $11,000.00     | $8,014.59       |
| 2026-04-11 |      0.627 | $31,250.00     | $19,601.78      |
| 2026-02-22 |      0.309 | $1,000.00      | $309.26         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
