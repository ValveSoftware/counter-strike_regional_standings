### Roster Details<br />
Team Name: HEROIC Academy<br />
Roster: anber, Dengzoe, fnl, Scr0b, St0m4k<br />
Global Rank: [131](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [82]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  722.0<br />
<br />
Final Rank Value (722.0) = Starting Rank Value (718.2) + Head To Head Adjustments (3.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.257[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.080[<sup>2</sup>](#table1)

The average of these factors is 0.166<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 718.2
- 400 + ( ( 0.166 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 718.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      235 | 2025-08-18 | Betera             | L   | 1.000      | -            | -                | -                | -         |    -8.18 | anber, Dengzoe, doto, fnl, Scr0b   |
|           20 |      268 | 2025-08-17 | Imperial Valkyries | W   | 1.000      | 0.384        | 0.034 (0.013)    | 0.107 (0.041)    | 0 (0.000) |    16.04 | anber, Dengzoe, fnl, Scr0b, St0m4k |
|           19 |      369 | 2025-08-14 | NIP Impact         | W   | 1.000      | 0.384        | 0.034 (0.013)    | 0.070 (0.027)    | 0 (0.000) |    15.48 | anber, Dengzoe, fnl, Scr0b, St0m4k |
|           18 |      400 | 2025-08-13 | Eternal Fire       | L   | 1.000      | -            | -                | -                | -         |   -10.93 | anber, Dengzoe, fnl, Scr0b, St0m4k |
|           17 |     1157 | 2025-07-08 | modeame            | L   | 0.834      | -            | -                | -                | -         |   -15.30 | anber, Dengzoe, fnl, Scr0b, St0m4k |
|           16 |     1183 | 2025-07-06 | KHAN               | L   | 0.818      | -            | -                | -                | -         |   -12.03 | anber, Dengzoe, fnl, Scr0b, St0m4k |
|           15 |     1193 | 2025-07-04 | The Glecs          | W   | 0.805      | 0.486        | 0.001 (0.000)    | 0.337 (0.132)    | 0 (0.000) |    13.03 | anber, Dengzoe, doto, fnl, Scr0b   |
|           14 |     1216 | 2025-07-01 | SENZA              | L   | 0.785      | -            | -                | -                | -         |   -10.43 | anber, Dengzoe, doto, fnl, Scr0b   |
|           13 |     1438 | 2025-06-14 | Nexus              | L   | 0.672      | -            | -                | -                | -         |    -4.45 | anber, Dengzoe, fnl, Scr0b, St0m4k |
|           12 |     1485 | 2025-06-12 | Partizan           | L   | 0.661      | -            | -                | -                | -         |    -4.13 | anber, Dengzoe, fnl, Scr0b, St0m4k |
|           11 |     1507 | 2025-06-11 | Gentle Mates       | L   | 0.653      | -            | -                | -                | -         |    -0.91 | anber, Dengzoe, fnl, Scr0b, St0m4k |
|           10 |     1537 | 2025-06-09 | QMISTRY            | W   | 0.641      | 0.384        | 0.001 (0.000)    | 0.158 (0.039)    | 0 (0.000) |     8.28 | anber, Dengzoe, fnl, Scr0b, St0m4k |
|            9 |     1577 | 2025-06-07 | CPH Wolves         | W   | 0.626      | 0.384        | 0.023 (0.006)    | 0.535 (0.129)    | 0 (0.000) |    11.91 | anber, Dengzoe, fnl, Scr0b, St0m4k |
|            8 |     1591 | 2025-06-06 | ROSY               | W   | 0.618      | 0.384        | 0.002 (0.000)    | 0.053 (0.013)    | 0 (0.000) |     6.77 | anber, Dengzoe, fnl, Scr0b, St0m4k |
|            7 |     2387 | 2025-04-27 | Tricked            | L   | 0.353      | -            | -                | -                | -         |    -2.06 | anber, Dengzoe, fnl, Scr0b, St0m4k |
|            6 |     2393 | 2025-04-27 | Preasy             | W   | 0.352      | 0.321        | 0.000 (0.000)    | 0.017 (0.002)    | 1 (0.352) |     1.79 | anber, Dengzoe, fnl, Scr0b, St0m4k |
|            5 |     2410 | 2025-04-26 | WOPA               | W   | 0.348      | 0.321        | 0.000 (0.000)    | 0.027 (0.003)    | 1 (0.348) |     1.83 | anber, Dengzoe, fnl, Scr0b, St0m4k |
|            4 |     3391 | 2025-03-24 | GhoulsW            | L   | 0.127      | -            | -                | -                | -         |    -3.16 | anber, Dengzoe, Few, Kragh, Scr0b  |
|            3 |     3400 | 2025-03-24 | QMISTRY            | W   | 0.126      | 0.624        | 0.001 (0.000)    | 0.158 (0.012)    | 0 (0.000) |     1.67 | anber, Dengzoe, Few, Kragh, Scr0b  |
|            2 |     3599 | 2025-03-17 | ESC                | L   | 0.080      | -            | -                | -                | -         |    -0.91 | anber, Dengzoe, Few, Kragh, Scr0b  |
|            1 |     3848 | 2025-03-08 | ex-Heimo           | L   | 0.021      | -            | -                | -                | -         |    -0.54 | anber, Dengzoe, Few, Kragh, Scr0b  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($536.85)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-04-27 |      0.353 | $1,522.00      | $536.85         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
