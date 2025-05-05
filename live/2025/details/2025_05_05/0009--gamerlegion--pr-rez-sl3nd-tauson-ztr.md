### Roster Details<br />
Team Name: GamerLegion<br />
Roster: PR, REZ, sl3nd, Tauson, ztr<br />
Global Rank: [9](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [8]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  1672.3<br />
<br />
Final Rank Value (1672.3) = Starting Rank Value (1792.1) + Head To Head Adjustments (-119.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.793[<sup>1</sup>](#table2)
- Bounty Collected: 0.734[<sup>2</sup>](#table1)
- Opponent Network: 0.563[<sup>2</sup>](#table1)
- LAN Wins: 0.980[<sup>2</sup>](#table1)

The average of these factors is 0.768<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1792.1
- 400 + ( ( 0.768 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 1792.1


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
|           46 |      136 | 2025-04-25 | Falcons       | L   | 1.000      | -            | -                | -                | -         |    -7.58 | PR, REZ, sl3nd, Tauson, ztr      |
|           45 |      150 | 2025-04-23 | FaZe          | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.590 (0.590)    | 1 (1.000) |    20.38 | PR, REZ, sl3nd, Tauson, ztr      |
|           44 |      154 | 2025-04-22 | Complexity    | W   | 1.000      | 1.000        | 0.393 (0.393)    | 0.799 (0.799)    | 1 (1.000) |    11.20 | PR, REZ, sl3nd, Tauson, ztr      |
|           43 |      166 | 2025-04-21 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |    -4.89 | PR, REZ, sl3nd, Tauson, ztr      |
|           42 |      178 | 2025-04-20 | 3DMAX         | W   | 1.000      | 1.000        | 0.453 (0.453)    | 0.518 (0.518)    | 1 (1.000) |    17.75 | PR, REZ, sl3nd, Tauson, ztr      |
|           41 |      287 | 2025-04-16 | SAW           | L   | 1.000      | -            | -                | -                | -         |   -28.18 | PR, REZ, sl3nd, Tauson, ztr      |
|           40 |      314 | 2025-04-15 | 500           | W   | 1.000      | -            | -                | -                | -         |     0.73 | PR, REZ, sl3nd, Tauson, ztr      |
|           39 |      318 | 2025-04-14 | fnatic        | L   | 1.000      | -            | -                | -                | -         |   -30.92 | PR, REZ, sl3nd, Tauson, ztr      |
|           38 |      329 | 2025-04-14 | Nemiga        | L   | 1.000      | -            | -                | -                | -         |   -30.75 | PR, REZ, sl3nd, Tauson, ztr      |
|           37 |      385 | 2025-04-11 | Falcons       | L   | 1.000      | -            | -                | -                | -         |   -10.83 | PR, REZ, sl3nd, Tauson, ztr      |
|           36 |      423 | 2025-04-09 | Virtus.pro    | W   | 1.000      | 1.000        | 0.396 (0.396)    | 0.458 (0.458)    | 1 (1.000) |    10.85 | PR, REZ, sl3nd, Tauson, ztr      |
|           35 |      448 | 2025-04-08 | Legacy        | W   | 1.000      | 1.000        | 0.063 (0.063)    | 0.601 (0.601)    | 1 (1.000) |     0.52 | PR, REZ, sl3nd, Tauson, ztr      |
|           34 |      464 | 2025-04-07 | Falcons       | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.838 (0.838)    | 1 (1.000) |    20.83 | PR, REZ, sl3nd, Tauson, ztr      |
|           33 |      479 | 2025-04-06 | G2            | L   | 1.000      | -            | -                | -                | -         |   -10.97 | PR, REZ, sl3nd, Tauson, ztr      |
|           32 |     1141 | 2025-03-11 | G2            | L   | 0.834      | -            | -                | -                | -         |    -9.26 | PR, REZ, sl3nd, Tauson, ztr      |
|           31 |     1190 | 2025-03-10 | SAW           | W   | 0.826      | 1.000        | 0.190 (0.157)    | 0.407 (0.337)    | 1 (0.826) |     2.19 | PR, REZ, sl3nd, Tauson, ztr      |
|           30 |     1244 | 2025-03-09 | TYLOO         | W   | 0.819      | 1.000        | 0.043 (0.035)    | 0.877 (0.718)    | 1 (0.819) |     0.62 | PR, REZ, sl3nd, Tauson, ztr      |
|           29 |     1313 | 2025-03-08 | paiN          | L   | 0.813      | -            | -                | -                | -         |   -22.41 | PR, REZ, sl3nd, Tauson, ztr      |
|           28 |     1379 | 2025-03-07 | The MongolZ   | L   | 0.806      | -            | -                | -                | -         |    -8.50 | PR, REZ, sl3nd, Tauson, ztr      |
|           27 |     1506 | 2025-03-03 | TYLOO         | W   | 0.780      | -            | -                | -                | 1 (0.780) |     0.49 | PR, REZ, sl3nd, Tauson, ztr      |
|           26 |     1522 | 2025-03-02 | MIBR          | W   | 0.774      | -            | -                | -                | 1 (0.774) |     0.86 | PR, REZ, sl3nd, Tauson, ztr      |
|           25 |     1548 | 2025-03-01 | NRG           | W   | 0.768      | -            | -                | -                | -         |     0.33 | PR, REZ, sl3nd, Tauson, ztr      |
|           24 |     1995 | 2025-02-10 | Metizport     | W   | 0.642      | -            | -                | -                | -         |     0.20 | PR, REZ, sl3nd, Tauson, ztr      |
|           23 |     2013 | 2025-02-10 | Hesta         | W   | 0.640      | -            | -                | -                | -         |     0.03 | PR, REZ, sl3nd, Tauson, ztr      |
|           22 |     2114 | 2025-02-08 | PARIVISION    | L   | 0.625      | -            | -                | -                | -         |   -19.56 | PR, REZ, sl3nd, Tauson, ztr      |
|           21 |     2217 | 2025-02-04 | Spirit        | L   | 0.601      | -            | -                | -                | -         |    -7.75 | PR, REZ, sl3nd, Tauson, ztr      |
|           20 |     2227 | 2025-02-04 | Astralis      | W   | 0.599      | 1.000        | 0.443 (0.265)    | 0.651 (0.390)    | -         |     3.55 | PR, REZ, sl3nd, Tauson, ztr      |
|           19 |     2237 | 2025-02-03 | The MongolZ   | L   | 0.593      | -            | -                | -                | -         |    -6.42 | PR, REZ, sl3nd, Tauson, ztr      |
|           18 |     2257 | 2025-02-01 | MOUZ          | W   | 0.581      | 1.000        | 1.000 (0.581)    | 0.658 (0.382)    | -         |    12.98 | PR, REZ, sl3nd, Tauson, ztr      |
|           17 |     2274 | 2025-01-30 | paiN          | W   | 0.566      | -            | -                | -                | -         |     1.98 | PR, REZ, sl3nd, Tauson, ztr      |
|           16 |     2284 | 2025-01-29 | SAW           | W   | 0.559      | -            | -                | -                | -         |     0.88 | PR, REZ, sl3nd, Tauson, ztr      |
|           15 |     2391 | 2025-01-17 | paiN          | L   | 0.479      | -            | -                | -                | -         |   -13.75 | PR, REZ, sl3nd, Tauson, ztr      |
|           14 |     2733 | 2024-12-06 | Natus Vincere | L   | 0.204      | -            | -                | -                | -         |    -4.59 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           13 |     2759 | 2024-12-05 | Wildcard      | W   | 0.198      | -            | -                | -                | -         |     0.10 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           12 |     2787 | 2024-12-05 | Liquid        | L   | 0.191      | -            | -                | -                | -         |    -4.48 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           11 |     2796 | 2024-12-04 | Vitality      | L   | 0.190      | -            | -                | -                | -         |    -1.46 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           10 |     2850 | 2024-12-02 | Passion UA    | W   | 0.172      | -            | -                | -                | -         |     0.01 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            9 |     2868 | 2024-12-01 | The MongolZ   | L   | 0.165      | -            | -                | -                | -         |    -1.93 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            8 |     2894 | 2024-11-30 | paiN          | W   | 0.159      | -            | -                | -                | -         |     0.41 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            7 |     2909 | 2024-11-29 | FURIA         | W   | 0.156      | -            | -                | -                | -         |     0.18 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            6 |     3095 | 2024-11-20 | BetBoom       | W   | 0.093      | -            | -                | -                | -         |     0.05 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            5 |     3096 | 2024-11-20 | SINNERS       | W   | 0.092      | -            | -                | -                | -         |     0.03 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            4 |     3108 | 2024-11-19 | Falcons       | W   | 0.085      | -            | -                | -                | -         |     0.00 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            3 |     3119 | 2024-11-18 | UNiTY         | W   | 0.079      | -            | -                | -                | -         |     0.01 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            2 |     3144 | 2024-11-17 | ECLOT         | L   | 0.072      | -            | -                | -                | -         |    -2.22 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            1 |     3152 | 2024-11-16 | Vitality      | L   | 0.070      | -            | -                | -                | -         |    -0.55 | FL4MUS, sl3nd, Tauson, volt, ztr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($197,652.57)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.55) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-04-27 |      1.000 | $72,500.00     | $72,500.00      |
| 2025-04-13 |      1.000 | $62,500.00     | $62,500.00      |
| 2025-03-16 |      0.867 | $38,500.00     | $33,387.01      |
| 2025-02-09 |      0.634 | $38,000.00     | $24,089.98      |
| 2024-12-15 |      0.259 | $20,000.00     | $5,175.58       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
