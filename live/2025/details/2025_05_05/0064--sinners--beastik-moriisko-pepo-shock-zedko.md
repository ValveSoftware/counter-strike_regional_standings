### Roster Details<br />
Team Name: SINNERS<br />
Roster: beastik, MoriiSko, Pepo, SHOCK, ZEDKO<br />
Global Rank: [64](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [42]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  893.6<br />
<br />
Final Rank Value (893.6) = Starting Rank Value (983.0) + Head To Head Adjustments (-89.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.363[<sup>1</sup>](#table2)
- Bounty Collected: 0.405[<sup>2</sup>](#table1)
- Opponent Network: 0.183[<sup>2</sup>](#table1)
- LAN Wins: 0.335[<sup>2</sup>](#table1)

The average of these factors is 0.321<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 983.0
- 400 + ( ( 0.321 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 983.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |      170 | 2025-04-21 | Nexus          | L   | 1.000      | -            | -                | -                | -         |   -16.68 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           41 |      262 | 2025-04-17 | Sashi          | L   | 1.000      | -            | -                | -                | -         |   -20.09 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           40 |      317 | 2025-04-14 | Iberian Soul   | L   | 1.000      | -            | -                | -                | -         |   -16.88 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           39 |      384 | 2025-04-11 | NAVI Junior    | W   | 1.000      | 0.435        | 0.456 (0.198)    | 1.000 (0.435)    | 0 (0.000) |    19.99 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           38 |      469 | 2025-04-06 | ECLOT          | W   | 1.000      | 0.321        | 0.108 (0.035)    | 0.654 (0.209)    | 1 (1.000) |    14.24 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           37 |      487 | 2025-04-05 | UNiTY          | W   | 1.000      | 0.321        | 0.007 (0.002)    | -                | 1 (1.000) |     8.82 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           36 |      504 | 2025-04-04 | 1DayHeroes     | W   | 0.993      | -            | -                | -                | 1 (0.993) |     3.18 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           35 |     1149 | 2025-03-11 | NAVI Junior    | L   | 0.834      | -            | -                | -                | -         |    -8.33 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           34 |     1193 | 2025-03-10 | NAVI Junior    | L   | 0.826      | -            | -                | -                | -         |    -7.72 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           33 |     1219 | 2025-03-09 | Sashi          | W   | 0.821      | 0.435        | 0.005 (0.002)    | 0.705 (0.251)    | 0 (0.000) |    10.47 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           32 |     1238 | 2025-03-09 | OG             | L   | 0.820      | -            | -                | -                | -         |   -10.27 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           31 |     1280 | 2025-03-08 | BIG            | W   | 0.814      | 0.143        | 0.289 (0.034)    | 0.467 (0.054)    | 0 (0.000) |    22.06 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           30 |     1357 | 2025-03-07 | OG             | L   | 0.808      | -            | -                | -                | -         |   -10.49 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           29 |     1387 | 2025-03-07 | NAVI Junior    | W   | 0.805      | 0.143        | 0.456 (0.052)    | 1.000 (0.115)    | 0 (0.000) |    18.75 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           28 |     1429 | 2025-03-06 | ECSTATIC       | L   | 0.799      | -            | -                | -                | -         |   -13.86 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           27 |     1485 | 2025-03-04 | PARIVISION     | W   | 0.787      | 0.435        | 0.012 (0.004)    | 0.903 (0.309)    | 0 (0.000) |    14.58 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           26 |     1490 | 2025-03-04 | PARIVISION     | L   | 0.786      | -            | -                | -                | -         |   -10.23 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           25 |     1509 | 2025-03-03 | GUN5           | L   | 0.779      | -            | -                | -                | -         |   -10.84 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           24 |     1571 | 2025-02-28 | Fire Flux      | W   | 0.761      | 0.435        | -                | 0.751 (0.248)    | -         |     9.03 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           23 |     1586 | 2025-02-27 | Iberian Soul   | L   | 0.755      | -            | -                | -                | -         |   -13.51 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           22 |     1844 | 2025-02-16 | ECSTATIC       | L   | 0.681      | -            | -                | -                | -         |   -13.27 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           21 |     1887 | 2025-02-15 | Sashi          | L   | 0.672      | -            | -                | -                | -         |   -11.24 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           20 |     1952 | 2025-02-12 | ALASKA         | W   | 0.653      | 0.435        | 0.012 (0.003)    | 0.278 (0.079)    | -         |     6.34 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           19 |     2011 | 2025-02-10 | GUN5           | L   | 0.640      | -            | -                | -                | -         |   -10.26 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           18 |     2042 | 2025-02-09 | Fire Flux      | L   | 0.634      | -            | -                | -                | -         |   -13.65 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           17 |     2145 | 2025-02-07 | Monte          | W   | 0.619      | 0.435        | -                | 0.162 (0.044)    | -         |     4.79 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           16 |     2181 | 2025-02-05 | OG             | L   | 0.608      | -            | -                | -                | -         |   -10.19 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           15 |     2219 | 2025-02-04 | Alliance       | L   | 0.600      | -            | -                | -                | -         |   -14.55 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           14 |     2253 | 2025-02-01 | GTZ            | W   | 0.581      | 0.435        | 0.028 (0.007)    | 0.336 (0.085)    | -         |     6.48 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           13 |     2408 | 2025-01-11 | Wildcard       | L   | 0.440      | -            | -                | -                | -         |    -5.28 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           12 |     2417 | 2025-01-10 | kONO           | W   | 0.432      | -            | -                | -                | -         |     1.10 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           11 |     2618 | 2024-12-13 | ECSTATIC       | L   | 0.248      | -            | -                | -                | -         |    -4.98 | beastik, majky, MoriiSko, oskar, SHOCK |
|           10 |     2630 | 2024-12-13 | Spirit Academy | L   | 0.245      | -            | -                | -                | -         |    -5.46 | beastik, majky, MoriiSko, oskar, SHOCK |
|            9 |     2636 | 2024-12-12 | NAVI Junior    | L   | 0.241      | -            | -                | -                | -         |    -2.15 | beastik, majky, MoriiSko, oskar, SHOCK |
|            8 |     3096 | 2024-11-20 | GamerLegion    | L   | 0.092      | -            | -                | -                | -         |    -0.03 | beastik, majky, MoriiSko, oskar, SHOCK |
|            7 |     3113 | 2024-11-18 | Cloud9         | L   | 0.083      | -            | -                | -                | -         |    -2.24 | beastik, majky, MoriiSko, oskar, SHOCK |
|            6 |     3125 | 2024-11-17 | ECLOT          | W   | 0.077      | -            | -                | -                | 1 (0.077) |     1.48 | beastik, majky, MoriiSko, oskar, SHOCK |
|            5 |     3145 | 2024-11-17 | Natus Vincere  | L   | 0.071      | -            | -                | -                | -         |    -0.06 | beastik, majky, MoriiSko, oskar, SHOCK |
|            4 |     3149 | 2024-11-16 | SAW            | W   | 0.071      | 0.143        | 0.190 (0.002)    | -                | 1 (0.071) |     1.81 | beastik, majky, MoriiSko, oskar, SHOCK |
|            3 |     3351 | 2024-11-10 | ECLOT          | L   | 0.027      | -            | -                | -                | -         |    -0.32 | beastik, majky, MoriiSko, oskar, SHOCK |
|            2 |     3412 | 2024-11-07 | 500            | W   | 0.005      | -            | -                | -                | -         |     0.07 | beastik, majky, MoriiSko, oskar, SHOCK |
|            1 |     3421 | 2024-11-06 | PARIVISION     | L   | 0.001      | -            | -                | -                | -         |    -0.02 | beastik, majky, MoriiSko, oskar, SHOCK |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,354.22)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-04-06 |      1.000 | $4,100.00      | $4,100.00       |
| 2025-01-12 |      0.447 | $5,000.00      | $2,234.15       |
| 2024-11-12 |      0.040 | $500.00        | $20.07          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
