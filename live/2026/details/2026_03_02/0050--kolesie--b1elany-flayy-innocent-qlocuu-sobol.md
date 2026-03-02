### Roster Details<br />
Team Name: KOLESIE<br />
Roster: b1elany, flayy, innocent, Qlocuu, Sobol<br />
Global Rank: [50](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [37]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  1198.3<br />
<br />
Final Rank Value (1198.3) = Starting Rank Value (1241.5) + Head To Head Adjustments (-43.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.486[<sup>1</sup>](#table2)
- Bounty Collected: 0.370[<sup>2</sup>](#table1)
- Opponent Network: 0.306[<sup>2</sup>](#table1)
- LAN Wins: 0.617[<sup>2</sup>](#table1)

The average of these factors is 0.445<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1241.5
- 400 + ( ( 0.445 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1241.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           67 |        6 | 2026-03-01 | Lazer Cats        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.47 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           66 |       15 | 2026-03-01 | los kogutos       | W   | 1.000      | 0.384        | 0.037 (0.014)    | 1.000 (0.384)    | -         |    12.23 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           65 |       41 | 2026-02-28 | WW                | W   | 1.000      | 0.384        | -                | 0.541 (0.208)    | -         |     9.71 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           64 |       81 | 2026-02-27 | ARCRED            | W   | 1.000      | 0.384        | -                | 0.942 (0.362)    | -         |    10.52 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           63 |      496 | 2026-02-18 | los kogutos       | L   | 1.000      | -            | -                | -                | -         |   -19.96 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           62 |      540 | 2026-02-17 | illwill           | L   | 1.000      | -            | -                | -                | -         |    -9.20 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           61 |      577 | 2026-02-16 | Leo               | L   | 1.000      | -            | -                | -                | -         |   -26.37 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           60 |      691 | 2026-02-14 | ALGO              | W   | 1.000      | -            | -                | -                | -         |     6.20 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           59 |      728 | 2026-02-14 | illwill           | L   | 1.000      | -            | -                | -                | -         |    -8.17 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           58 |      812 | 2026-02-12 | MASONIC           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.88 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           57 |      821 | 2026-02-12 | Sashi             | W   | 1.000      | 0.333        | -                | 0.618 (0.206)    | 1 (1.000) |    11.64 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           56 |     1028 | 2026-02-05 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |    -6.64 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           55 |     1052 | 2026-02-04 | Nuclear TigeRES   | W   | 1.000      | 0.435        | 0.082 (0.036)    | 1.000 (0.435)    | -         |    18.95 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           54 |     1164 | 2026-01-31 | ex-RUBY           | L   | 1.000      | -            | -                | -                | -         |   -22.43 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           53 |     1198 | 2026-01-30 | MINLATE           | W   | 0.994      | 0.435        | -                | 0.462 (0.200)    | -         |     8.46 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           52 |     1261 | 2026-01-28 | ex-RUBY           | W   | 0.979      | 0.435        | 0.029 (0.012)    | 1.000 (0.425)    | -         |     9.48 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           51 |     1277 | 2026-01-27 | Eternal Fire      | W   | 0.973      | -            | -                | -                | -         |     9.11 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           50 |     1295 | 2026-01-26 | los kogutos       | W   | 0.967      | 0.435        | 0.037 (0.015)    | 1.000 (0.420)    | -         |     9.04 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           49 |     1443 | 2026-01-22 | Nuclear TigeRES   | L   | 0.939      | -            | -                | -                | -         |   -11.70 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           48 |     1466 | 2026-01-21 | BetBoom           | L   | 0.935      | -            | -                | -                | -         |    -6.38 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           47 |     1487 | 2026-01-21 | fnatic            | W   | 0.933      | 0.143        | 0.115 (0.015)    | -                | -         |    18.76 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           46 |     1577 | 2026-01-17 | Sangal            | L   | 0.908      | -            | -                | -                | -         |   -19.48 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           45 |     1588 | 2026-01-17 | Metizport         | W   | 0.907      | -            | -                | -                | -         |    11.15 | b1elany, flayy, innocent, Qlocuu, Sobol |
|           44 |     1797 | 2026-01-04 | GamerLegion       | L   | 0.820      | -            | -                | -                | -         |    -2.98 | dycha, flayy, innocent, Qlocuu, Sobol   |
|           43 |     1828 | 2026-01-03 | F5                | W   | 0.817      | -            | -                | -                | 1 (0.817) |     1.00 | dycha, flayy, innocent, Qlocuu, Sobol   |
|           42 |     1831 | 2026-01-03 | 9INE              | L   | 0.816      | -            | -                | -                | -         |    -9.57 | dycha, flayy, innocent, Qlocuu, Sobol   |
|           41 |     1834 | 2026-01-03 | F5                | W   | 0.815      | -            | -                | -                | 1 (0.815) |     0.92 | dycha, flayy, innocent, Qlocuu, Sobol   |
|           40 |     1924 | 2025-12-19 | 9INE              | L   | 0.715      | -            | -                | -                | -         |    -8.47 | dycha, flayy, innocent, Qlocuu, Sobol   |
|           39 |     1936 | 2025-12-19 | Acend             | W   | 0.713      | -            | -                | -                | 1 (0.713) |     8.33 | dycha, flayy, innocent, Qlocuu, Sobol   |
|           38 |     1941 | 2025-12-19 | illwill           | L   | 0.712      | -            | -                | -                | -         |    -4.12 | dycha, flayy, innocent, Qlocuu, Sobol   |
|           37 |     1953 | 2025-12-18 | MOUZ NXT          | W   | 0.706      | 0.339        | -                | 1.000 (0.239)    | 1 (0.706) |    10.25 | dycha, flayy, innocent, Qlocuu, Sobol   |
|           36 |     2153 | 2025-12-05 | Oramond           | L   | 0.620      | -            | -                | -                | -         |   -12.65 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           35 |     2279 | 2025-11-29 | OG                | L   | 0.581      | -            | -                | -                | -         |   -14.93 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           34 |     2293 | 2025-11-29 | Alliance          | W   | 0.580      | 0.333        | 0.124 (0.024)    | 0.943 (0.182)    | 1 (0.580) |    11.51 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           33 |     2497 | 2025-11-21 | 1win              | L   | 0.528      | -            | -                | -                | -         |   -10.66 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           32 |     2572 | 2025-11-20 | Oramond           | L   | 0.518      | -            | -                | -                | -         |   -12.10 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           31 |     2639 | 2025-11-15 | Monte             | L   | 0.488      | -            | -                | -                | -         |    -5.20 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           30 |     2661 | 2025-11-14 | SINNERS           | L   | 0.481      | -            | -                | -                | -         |    -5.01 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           29 |     2748 | 2025-11-11 | BET-M             | W   | 0.461      | -            | -                | -                | -         |     4.17 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           28 |     2778 | 2025-11-10 | NOVAQ             | L   | 0.454      | -            | -                | -                | -         |   -10.58 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           27 |     2851 | 2025-11-08 | Oramond           | L   | 0.440      | -            | -                | -                | -         |   -11.61 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           26 |     2898 | 2025-11-07 | ARCRED            | W   | 0.434      | -            | -                | -                | -         |     2.41 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           25 |     3103 | 2025-11-02 | Nemiga            | L   | 0.401      | -            | -                | -                | -         |    -5.68 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           24 |     3115 | 2025-11-02 | ECSTATIC          | W   | 0.399      | 0.435        | 0.143 (0.025)    | -                | -         |     7.85 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           23 |     3147 | 2025-11-01 | CYBERSHOKE        | W   | 0.393      | -            | -                | -                | -         |     5.51 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           22 |     3174 | 2025-10-31 | magic             | W   | 0.385      | 0.435        | 0.136 (0.023)    | -                | -         |     3.50 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           21 |     3222 | 2025-10-28 | Nemiga            | W   | 0.368      | 0.384        | 0.091 (0.013)    | -                | -         |     6.58 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           20 |     3318 | 2025-10-26 | RUBY              | W   | 0.354      | -            | -                | -                | -         |     1.19 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           19 |     3484 | 2025-10-23 | HubaBuba          | W   | 0.334      | -            | -                | -                | -         |     0.17 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           18 |     3609 | 2025-10-17 | Aurora            | L   | 0.294      | -            | -                | -                | -         |    -0.45 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           17 |     3639 | 2025-10-16 | Imperial          | W   | 0.288      | 0.934        | 0.080 (0.022)    | -                | 1 (0.288) |     4.88 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           16 |     3679 | 2025-10-15 | Aurora            | L   | 0.281      | -            | -                | -                | -         |    -0.41 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           15 |     3804 | 2025-10-10 | RUBY              | L   | 0.247      | -            | -                | -                | -         |    -7.11 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           14 |     4133 | 2025-10-04 | BIG               | L   | 0.206      | -            | -                | -                | -         |    -2.23 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           13 |     4399 | 2025-09-27 | Monte             | L   | 0.161      | -            | -                | -                | -         |    -1.57 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           12 |     4428 | 2025-09-27 | Gentle Mates      | W   | 0.159      | -            | -                | -                | 1 (0.159) |     3.96 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           11 |     4437 | 2025-09-27 | Partizan          | L   | 0.158      | -            | -                | -                | -         |    -4.72 | flayy, hfah, innocent, Qlocuu, Sobol    |
|           10 |     4619 | 2025-09-21 | SINNERS           | L   | 0.118      | -            | -                | -                | -         |    -1.14 | flayy, hfah, innocent, Qlocuu, Sobol    |
|            9 |     4628 | 2025-09-20 | BIG               | L   | 0.114      | -            | -                | -                | -         |    -1.19 | flayy, hfah, innocent, Qlocuu, Sobol    |
|            8 |     4681 | 2025-09-19 | CYBERSHOKE        | W   | 0.105      | -            | -                | -                | -         |     0.06 | flayy, hfah, innocent, Qlocuu, Sobol    |
|            7 |     4752 | 2025-09-17 | ARCRED            | W   | 0.091      | -            | -                | -                | -         |     0.79 | flayy, hfah, innocent, Qlocuu, Sobol    |
|            6 |     4912 | 2025-09-12 | Monte             | L   | 0.061      | -            | -                | -                | -         |    -0.59 | flayy, hfah, innocent, Qlocuu, Sobol    |
|            5 |     4976 | 2025-09-11 | Sangal            | L   | 0.054      | -            | -                | -                | -         |    -1.38 | flayy, hfah, innocent, Qlocuu, Sobol    |
|            4 |     4992 | 2025-09-11 | Nemiga            | W   | 0.051      | -            | -                | -                | -         |     0.95 | flayy, hfah, innocent, Qlocuu, Sobol    |
|            3 |     5026 | 2025-09-10 | Ninjas in Pyjamas | W   | 0.047      | -            | -                | -                | -         |     0.84 | flayy, hfah, innocent, Qlocuu, Sobol    |
|            2 |     5067 | 2025-09-09 | Metizport         | W   | 0.041      | -            | -                | -                | -         |     0.43 | flayy, hfah, innocent, Qlocuu, Sobol    |
|            1 |     5192 | 2025-09-06 | Oramond           | L   | 0.019      | -            | -                | -                | -         |    -0.50 | flayy, hfah, innocent, Qlocuu, Sobol    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29,411.91)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-01 |      1.000 | $15,000.00     | $15,000.00      |
| 2026-02-06 |      1.000 | $2,000.00      | $2,000.00       |
| 2025-11-16 |      0.494 | $2,250.00      | $1,111.70       |
| 2025-11-09 |      0.448 | $2,000.00      | $895.11         |
| 2025-11-02 |      0.401 | $10,000.00     | $4,011.81       |
| 2025-10-19 |      0.308 | $20,000.00     | $6,152.43       |
| 2025-09-21 |      0.120 | $2,000.00      | $240.85         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
