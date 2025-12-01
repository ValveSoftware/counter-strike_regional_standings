### Roster Details<br />
Team Name: 500<br />
Roster: CeRq, CYPHER, hampus, Rainwaker, volt<br />
Global Rank: [74](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [51]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  1054.8<br />
<br />
Final Rank Value (1054.8) = Starting Rank Value (1031.4) + Head To Head Adjustments (23.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.339[<sup>1</sup>](#table2)
- Bounty Collected: 0.365[<sup>2</sup>](#table1)
- Opponent Network: 0.315[<sup>2</sup>](#table1)
- LAN Wins: 0.308[<sup>2</sup>](#table1)

The average of these factors is 0.332<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1031.4
- 400 + ( ( 0.332 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1031.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           72 |       29 | 2025-11-29 | Monte            | L   | 1.000      | -            | -                | -                | -         |    -8.48 | CeRq, CYPHER, hampus, Rainwaker, volt    |
|           71 |      153 | 2025-11-22 | FAVBET           | L   | 1.000      | -            | -                | -                | -         |   -17.12 | CeRq, CYPHER, hampus, Rainwaker, volt    |
|           70 |      185 | 2025-11-21 | HEROIC           | L   | 1.000      | -            | -                | -                | -         |    -1.54 | CeRq, CYPHER, hampus, Rainwaker, volt    |
|           69 |      231 | 2025-11-20 | CPH Wolves       | W   | 1.000      | 0.384        | -                | 0.772 (0.297)    | 0 (0.000) |     8.94 | CeRq, CYPHER, hampus, Rainwaker, volt    |
|           68 |      266 | 2025-11-19 | ECLOT            | W   | 1.000      | 0.435        | 0.069 (0.030)    | -                | 0 (0.000) |    15.92 | CeRq, CYPHER, hampus, Rainwaker, volt    |
|           67 |      283 | 2025-11-17 | RUBY             | W   | 1.000      | 0.435        | 0.049 (0.021)    | 1.000 (0.435)    | 0 (0.000) |    14.41 | CeRq, CYPHER, hampus, Rainwaker, volt    |
|           66 |      320 | 2025-11-15 | Leo              | L   | 1.000      | -            | -                | -                | -         |   -20.25 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           65 |      355 | 2025-11-13 | SPARTA           | W   | 1.000      | 0.435        | -                | 0.679 (0.295)    | 0 (0.000) |     9.40 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           64 |      365 | 2025-11-13 | Monte            | L   | 1.000      | -            | -                | -                | -         |    -8.32 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           63 |      386 | 2025-11-12 | NOVAQ            | W   | 1.000      | 0.384        | 0.013 (0.005)    | 0.724 (0.278)    | 0 (0.000) |    10.99 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           62 |      396 | 2025-11-12 | Nuclear TigeRES  | L   | 1.000      | -            | -                | -                | -         |   -13.66 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           61 |      416 | 2025-11-11 | K27              | L   | 1.000      | -            | -                | -                | -         |   -11.06 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           60 |      419 | 2025-11-11 | 9BOOMPRO         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.27 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           59 |      437 | 2025-11-10 | FORZE Reload     | W   | 1.000      | 0.384        | -                | 0.711 (0.273)    | -         |     7.94 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           58 |      527 | 2025-11-08 | Betera           | L   | 1.000      | -            | -                | -                | -         |   -16.53 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           57 |      601 | 2025-11-07 | ECSTATIC         | W   | 1.000      | 0.435        | 0.081 (0.035)    | 0.727 (0.316)    | -         |    24.56 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           56 |      690 | 2025-11-05 | SPARTA           | W   | 1.000      | 0.435        | -                | 0.679 (0.295)    | -         |     9.84 | CeRq, POP0V, Rainwaker, REDSTAR, volt    |
|           55 |      712 | 2025-11-04 | Nuclear TigeRES  | L   | 1.000      | -            | -                | -                | -         |   -15.07 | CeRq, POP0V, Rainwaker, REDSTAR, volt    |
|           54 |      797 | 2025-11-01 | ALLINNERS        | W   | 1.000      | -            | -                | -                | -         |     8.36 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           53 |      850 | 2025-10-30 | Washington       | W   | 0.986      | -            | -                | -                | -         |     4.17 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           52 |      870 | 2025-10-29 | GUN5             | L   | 0.979      | -            | -                | -                | -         |    -9.39 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           51 |      894 | 2025-10-28 | SINNERS          | L   | 0.974      | -            | -                | -                | -         |    -8.51 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           50 |      973 | 2025-10-26 | Nexus            | W   | 0.961      | 0.384        | -                | 0.840 (0.310)    | -         |    12.79 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           49 |     1121 | 2025-10-24 | Washington       | W   | 0.945      | -            | -                | -                | -         |     4.69 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           48 |     1276 | 2025-10-17 | Nuclear TigeRES  | L   | 0.899      | -            | -                | -                | -         |   -14.03 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           47 |     1351 | 2025-10-15 | ARCRED           | W   | 0.886      | -            | -                | -                | -         |     9.72 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           46 |     1375 | 2025-10-14 | GUN5             | L   | 0.881      | -            | -                | -                | -         |    -8.68 | CeRq, POP0V, Rainwaker, REDSTAR, volt    |
|           45 |     1408 | 2025-10-13 | Oramond          | L   | 0.873      | -            | -                | -                | -         |   -14.45 | CeRq, chawzyyy, Rainwaker, REDSTAR, volt |
|           44 |     1463 | 2025-10-10 | Sangal           | L   | 0.854      | -            | -                | -                | -         |   -11.77 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt  |
|           43 |     1510 | 2025-10-09 | Leo              | W   | 0.847      | -            | -                | -                | -         |     6.78 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt  |
|           42 |     1560 | 2025-10-08 | EYEBALLERS       | W   | 0.841      | 0.384        | 0.068 (0.022)    | 1.000 (0.323)    | -         |    20.61 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt  |
|           41 |     1589 | 2025-10-08 | Nemiga           | L   | 0.838      | -            | -                | -                | -         |   -13.21 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt  |
|           40 |     1676 | 2025-10-06 | VP.Prodigy       | W   | 0.827      | -            | -                | -                | -         |     7.13 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           39 |     1684 | 2025-10-06 | kONO             | W   | 0.826      | -            | -                | -                | -         |     6.40 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           38 |     1824 | 2025-10-03 | Sangal           | W   | 0.807      | 0.435        | 0.026 (0.009)    | 0.925 (0.325)    | -         |    15.39 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           37 |     1897 | 2025-10-01 | SPARTA           | W   | 0.794      | -            | -                | -                | -         |     6.72 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           36 |     1973 | 2025-09-29 | Friendly Campers | L   | 0.781      | -            | -                | -                | -         |    -5.87 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           35 |     1997 | 2025-09-29 | CPH Wolves       | L   | 0.777      | -            | -                | -                | -         |   -16.08 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           34 |     2040 | 2025-09-28 | Liquid           | L   | 0.771      | -            | -                | -                | -         |    -0.66 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           33 |     2070 | 2025-09-27 | Friendly Campers | W   | 0.767      | 0.354        | 0.117 (0.032)    | -                | 1 (0.767) |    18.43 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           32 |     2076 | 2025-09-27 | Betclic          | W   | 0.766      | -            | -                | -                | 1 (0.766) |    10.29 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           31 |     2094 | 2025-09-27 | Liquid           | L   | 0.765      | -            | -                | -                | -         |    -0.51 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           30 |     2109 | 2025-09-26 | kONO             | W   | 0.761      | -            | -                | -                | 1 (0.761) |     6.41 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           29 |     2135 | 2025-09-26 | BIG              | L   | 0.759      | -            | -                | -                | -         |    -3.49 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           28 |     2146 | 2025-09-26 | AaB              | W   | 0.758      | -            | -                | -                | 1 (0.758) |     7.36 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           27 |     2202 | 2025-09-24 | ARCRED           | W   | 0.747      | -            | -                | -                | -         |     9.66 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           26 |     2221 | 2025-09-23 | Tricked          | W   | 0.741      | -            | -                | -                | -         |     4.68 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt  |
|           25 |     2244 | 2025-09-22 | GUN5             | L   | 0.733      | -            | -                | -                | -         |    -5.94 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           24 |     2247 | 2025-09-22 | KHAN             | W   | 0.732      | -            | -                | -                | -         |     6.28 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           23 |     2295 | 2025-09-20 | FORZE Reload     | W   | 0.720      | -            | -                | -                | -         |     7.90 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           22 |     2305 | 2025-09-20 | RUBY             | L   | 0.718      | -            | -                | -                | -         |   -10.28 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           21 |     2401 | 2025-09-17 | AMKAL            | W   | 0.700      | -            | -                | -                | -         |     7.71 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           20 |     2443 | 2025-09-15 | SENZA            | W   | 0.687      | -            | -                | -                | -         |     3.57 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           19 |     2522 | 2025-09-13 | AMKAL            | L   | 0.674      | -            | -                | -                | -         |   -13.52 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           18 |     2693 | 2025-09-10 | SENZA            | W   | 0.653      | -            | -                | -                | -         |     3.97 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           17 |     2854 | 2025-09-06 | 1win             | L   | 0.625      | -            | -                | -                | -         |   -12.62 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           16 |     2856 | 2025-09-06 | AaB              | W   | 0.624      | -            | -                | -                | -         |     8.08 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           15 |     2864 | 2025-09-05 | Oramond          | L   | 0.620      | -            | -                | -                | -         |    -9.24 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           14 |     2871 | 2025-09-05 | ENCE             | L   | 0.619      | -            | -                | -                | -         |    -2.08 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           13 |     3096 | 2025-08-25 | ARCRED           | L   | 0.547      | -            | -                | -                | -         |   -12.48 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           12 |     3128 | 2025-08-23 | FAVBET           | W   | 0.532      | 0.435        | 0.043 (0.010)    | -                | -         |     6.25 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           11 |     3163 | 2025-08-21 | VRSoholics       | L   | 0.519      | -            | -                | -                | -         |   -14.32 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           10 |     3196 | 2025-08-20 | Metizport        | L   | 0.512      | -            | -                | -                | -         |    -7.00 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|            9 |     3258 | 2025-08-17 | HOTU             | L   | 0.493      | -            | -                | -                | -         |    -3.48 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|            8 |     3352 | 2025-08-15 | CYBERSHOKE       | L   | 0.479      | -            | -                | -                | -         |    -5.29 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|            7 |     3397 | 2025-08-14 | SINNERS          | L   | 0.472      | -            | -                | -                | -         |    -2.62 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|            6 |     3445 | 2025-08-13 | Passion UA       | W   | 0.466      | -            | -                | -                | -         |     3.03 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|            5 |     3479 | 2025-08-12 | Betclic          | L   | 0.461      | -            | -                | -                | -         |    -8.76 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|            4 |     3535 | 2025-08-11 | CYBERSHOKE       | W   | 0.454      | 0.384        | 0.045 (0.008)    | -                | -         |     9.16 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|            3 |     3554 | 2025-08-11 | 9INE             | W   | 0.452      | 0.486        | 0.049 (0.011)    | -                | -         |    11.28 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|            2 |     3664 | 2025-08-05 | ARCRED           | W   | 0.413      | -            | -                | -                | -         |     3.17 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|            1 |     3670 | 2025-08-05 | TPuDCATb TPu     | W   | 0.411      | -            | -                | -                | -         |     6.45 | CeRq, hampus, Rainwaker, REDSTAR, volt   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,462.79)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-23 |      1.000 | $500.00        | $500.00         |
| 2025-11-16 |      1.000 | $750.00        | $750.00         |
| 2025-11-13 |      1.000 | $3,000.00      | $3,000.00       |
| 2025-11-09 |      1.000 | $2,000.00      | $2,000.00       |
| 2025-09-28 |      0.774 | $275.00        | $212.79         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
