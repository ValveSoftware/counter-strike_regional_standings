### Roster Details<br />
Team Name: ALGO<br />
Roster: anber, Dengzoe, Few, Scr0b, St0m4k<br />
Global Rank: [171](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [103]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  639.0<br />
<br />
Final Rank Value (639.0) = Starting Rank Value (673.5) + Head To Head Adjustments (-34.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.231[<sup>1</sup>](#table2)
- Bounty Collected: 0.270[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.024[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 673.5
- 400 + ( ( 0.140 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 673.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |      156 | 2025-09-28 | Mousquetaires      | L   | 1.000      | -            | -                | -                | -         |   -13.65 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           26 |      211 | 2025-09-27 | THE                | L   | 1.000      | -            | -                | -                | -         |   -18.38 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           25 |      269 | 2025-09-26 | Mousquetaires      | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.232 (0.033)    | 0 (0.000) |    16.05 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           24 |      455 | 2025-09-18 | m1x                | L   | 1.000      | -            | -                | -                | -         |   -10.48 | anber, Damkilde, Dengzoe, Few, Scr0b   |
|           23 |      508 | 2025-09-17 | Square Sausages    | W   | 1.000      | 0.384        | 0.000 (0.000)    | -                | 0 (0.000) |     5.67 | anber, Damkilde, Dengzoe, Few, Scr0b   |
|           22 |      595 | 2025-09-14 | NIP Impact         | W   | 1.000      | 0.384        | 0.021 (0.008)    | 0.065 (0.025)    | 0 (0.000) |    15.15 | anber, Dengzoe, Few, Scr0b, St0m4k     |
|           21 |      648 | 2025-09-13 | Mousquetaires      | L   | 1.000      | -            | -                | -                | -         |   -14.68 | anber, Dengzoe, Few, Scr0b, St0m4k     |
|           20 |      893 | 2025-09-07 | Zero Tenacity      | L   | 1.000      | -            | -                | -                | -         |    -1.70 | anber, Dengzoe, Few, Scr0b, St0m4k     |
|           19 |      999 | 2025-09-01 | FACEITPLAYERS      | L   | 0.965      | -            | -                | -                | -         |   -13.16 | anber, Dengzoe, doto, Scr0b, St0m4k    |
|           18 |     1115 | 2025-08-28 | Reason             | L   | 0.939      | -            | -                | -                | -         |    -4.21 | anber, Dengzoe, doto, Scr0b, St0m4k    |
|           17 |     1310 | 2025-08-18 | Betera             | L   | 0.872      | -            | -                | -                | -         |    -3.09 | anber, Dengzoe, doto, fnl, Scr0b       |
|           16 |     1346 | 2025-08-17 | Imperial Valkyries | W   | 0.866      | 0.384        | 0.000 (0.000)    | 0.035 (0.012)    | 0 (0.000) |     7.88 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|           15 |     1476 | 2025-08-14 | NIP Impact         | W   | 0.846      | 0.384        | 0.021 (0.007)    | 0.065 (0.021)    | 0 (0.000) |    13.96 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|           14 |     1512 | 2025-08-13 | Eternal Fire       | L   | 0.841      | -            | -                | -                | -         |   -11.57 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|           13 |     2288 | 2025-07-08 | Y5                 | L   | 0.601      | -            | -                | -                | -         |    -9.38 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|           12 |     2314 | 2025-07-06 | KHAN               | L   | 0.585      | -            | -                | -                | -         |    -6.53 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|           11 |     2324 | 2025-07-04 | The Glecs          | W   | 0.572      | 0.486        | 0.000 (0.000)    | 0.236 (0.066)    | 0 (0.000) |     7.77 | anber, Dengzoe, doto, fnl, Scr0b       |
|           10 |     2347 | 2025-07-01 | ROSY               | L   | 0.552      | -            | -                | -                | -         |    -9.56 | anber, Dengzoe, doto, fnl, Scr0b       |
|            9 |     2569 | 2025-06-14 | Nexus              | L   | 0.438      | -            | -                | -                | -         |    -1.80 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|            8 |     2616 | 2025-06-12 | Partizan           | L   | 0.427      | -            | -                | -                | -         |    -0.72 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|            7 |     2638 | 2025-06-11 | Gentle Mates       | L   | 0.420      | -            | -                | -                | -         |    -0.13 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|            6 |     2668 | 2025-06-09 | Dziuseppe          | W   | 0.408      | 0.384        | 0.008 (0.001)    | 0.337 (0.053)    | 0 (0.000) |     7.27 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|            5 |     2708 | 2025-06-07 | CPH Wolves         | W   | 0.393      | 0.384        | 0.020 (0.003)    | 0.807 (0.122)    | 0 (0.000) |     9.32 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|            4 |     2722 | 2025-06-06 | -72c               | W   | 0.385      | 0.384        | 0.000 (0.000)    | 0.016 (0.002)    | -         |     2.15 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|            3 |     3518 | 2025-04-27 | Tricked            | L   | 0.119      | -            | -                | -                | -         |    -1.99 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|            2 |     3524 | 2025-04-27 | Preasy             | W   | 0.118      | 0.321        | 0.000 (0.000)    | 0.005 (0.000)    | 1 (0.118) |     0.68 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|            1 |     3541 | 2025-04-26 | WOPA               | W   | 0.115      | 0.321        | -                | 0.012 (0.000)    | 1 (0.115) |     0.69 | anber, Dengzoe, fnl, Scr0b, St0m4k     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($181.81)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-04-27 |      0.119 | $1,522.00      | $181.81         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
