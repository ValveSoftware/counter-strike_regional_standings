### Roster Details<br />
Team Name: ALASKA<br />
Roster: arTisT, Extinct, Girafffe, Tree60, Vacancy<br />
Global Rank: [84](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [58]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  910.1<br />
<br />
Final Rank Value (910.1) = Starting Rank Value (953.1) + Head To Head Adjustments (-43.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.437[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.069[<sup>2</sup>](#table1)
- LAN Wins: 0.311[<sup>2</sup>](#table1)

The average of these factors is 0.283<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 953.1
- 400 + ( ( 0.283 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 953.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |       53 | 2025-01-24 | Chimera           | W   | 1.000      | 0.143        | 0.044 (0.006)    | 0.816 (0.117)    | 0 (0.000) |    19.36 | arTisT, Extinct, Girafffe, Tree60, Vacancy  |
|           36 |      299 | 2024-12-24 | WOPA              | W   | 0.971      | 0.333        | 0.063 (0.021)    | 0.652 (0.211)    | 0 (0.000) |    17.79 | arTisT, Extinct, Girafffe, leaf, Vacancy    |
|           35 |      315 | 2024-12-22 | Heimo             | W   | 0.959      | 0.333        | 0.006 (0.002)    | 0.209 (0.067)    | 0 (0.000) |    10.49 | arTisT, Extinct, Girafffe, leaf, Vacancy    |
|           34 |      321 | 2024-12-21 | WOPA              | L   | 0.953      | -            | -                | -                | -         |   -13.55 | arTisT, Extinct, Girafffe, leaf, Vacancy    |
|           33 |      338 | 2024-12-20 | Anonymo           | W   | 0.945      | 0.333        | 0.065 (0.020)    | 0.421 (0.133)    | 0 (0.000) |    13.19 | arTisT, Extinct, Girafffe, leaf, Vacancy    |
|           32 |      360 | 2024-12-18 | ENCE Academy      | L   | 0.932      | -            | -                | -                | -         |   -18.85 | arTisT, Extinct, Girafffe, leaf, Vacancy    |
|           31 |      370 | 2024-12-17 | Preasy            | W   | 0.926      | 0.333        | 0.013 (0.004)    | 0.114 (0.035)    | 0 (0.000) |     8.72 | arTisT, Extinct, Girafffe, leaf, Vacancy    |
|           30 |      541 | 2024-12-07 | Belfast Storm     | W   | 0.860      | 0.287        | 0.004 (0.001)    | 0.082 (0.020)    | 1 (0.860) |     6.19 | arTisT, Extinct, Girafffe, leaf, Vacancy    |
|           29 |      787 | 2024-11-25 | TRAXXXMANIA       | W   | 0.781      | -            | -                | -                | 0 (0.000) |     1.68 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           28 |     1044 | 2024-11-14 | Alliance          | L   | 0.706      | -            | -                | -                | -         |   -10.29 | arTisT, dobbo, Extinct, Girafffe, leaf      |
|           27 |     1063 | 2024-11-13 | Fire Flux         | L   | 0.701      | -            | -                | -                | -         |   -11.13 | arTisT, Diviiii, Extinct, Girafffe, leaf    |
|           26 |     1097 | 2024-11-12 | ROYALS            | W   | 0.694      | -            | -                | -                | -         |     1.36 | arTisT, Diviiii, Extinct, Girafffe, leaf    |
|           25 |     1344 | 2024-11-01 | ECSTATIC          | L   | 0.618      | -            | -                | -                | -         |    -6.68 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           24 |     1417 | 2024-10-28 | 9 Pandas          | L   | 0.592      | -            | -                | -                | -         |    -4.50 | arTisT, bevve, Extinct, Girafffe, Vacancy   |
|           23 |     1430 | 2024-10-27 | VFE               | W   | 0.586      | 0.315        | 0.004 (0.001)    | 0.033 (0.006)    | 1 (0.586) |     4.29 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           22 |     1450 | 2024-10-26 | VFE               | W   | 0.580      | -            | -                | -                | 1 (0.580) |     4.24 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           21 |     1521 | 2024-10-22 | Heimo             | L   | 0.551      | -            | -                | -                | -         |   -12.61 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           20 |     1549 | 2024-10-20 | WOPA              | L   | 0.539      | -            | -                | -                | -         |    -8.35 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           19 |     2199 | 2024-09-27 | GameAgents        | L   | 0.385      | -            | -                | -                | -         |    -8.16 | cryths, Diviiii, Extinct, Girafffe, Vacancy |
|           18 |     2389 | 2024-09-23 | Alliance          | W   | 0.358      | 0.371        | 0.037 (0.005)    | 0.375 (0.050)    | -         |     5.65 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           17 |     2454 | 2024-09-20 | FLuffy Gangsters  | L   | 0.339      | -            | -                | -                | -         |    -7.75 | arTisT, Diviiii, Extinct, leaf, Vacancy     |
|           16 |     2485 | 2024-09-19 | CPH Wolves        | L   | 0.333      | -            | -                | -                | -         |    -7.34 | arTisT, Diviiii, Extinct, leaf, Vacancy     |
|           15 |     2496 | 2024-09-19 | GameAgents        | L   | 0.331      | -            | -                | -                | -         |    -7.56 | arTisT, Diviiii, Extinct, leaf, Vacancy     |
|           14 |     2554 | 2024-09-17 | Dreams To Legends | W   | 0.319      | -            | -                | -                | 1 (0.319) |     1.44 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           13 |     2767 | 2024-09-10 | FLuffy Gangsters  | L   | 0.272      | -            | -                | -                | -         |    -6.33 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           12 |     2783 | 2024-09-09 | Monte Gen         | L   | 0.266      | -            | -                | -                | -         |    -5.58 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           11 |     3320 | 2024-08-25 | ROYALS            | W   | 0.166      | -            | -                | -                | -         |     0.24 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           10 |     3329 | 2024-08-25 | Anonymo           | L   | 0.164      | -            | -                | -                | -         |    -3.42 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|            9 |     3366 | 2024-08-23 | Revenant          | L   | 0.153      | -            | -                | -                | -         |    -3.83 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|            8 |     3382 | 2024-08-23 | Sampi             | L   | 0.151      | -            | -                | -                | -         |    -2.30 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|            7 |     3411 | 2024-08-22 | ENCE Academy      | W   | 0.145      | -            | -                | -                | -         |     1.22 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|            6 |     3461 | 2024-08-21 | Alliance          | L   | 0.139      | -            | -                | -                | -         |    -2.36 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|            5 |     3592 | 2024-08-17 | kONO              | W   | 0.112      | 0.371        | 0.047 (0.002)    | 0.601 (0.025)    | -         |     1.56 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|            4 |     3703 | 2024-08-13 | ECSTATIC          | W   | 0.085      | 0.371        | 0.080 (0.003)    | 1.000 (0.031)    | -         |     1.36 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|            3 |     3740 | 2024-08-12 | Nexus             | L   | 0.080      | -            | -                | -                | -         |    -0.14 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|            2 |     3892 | 2024-08-07 | los kogutos       | L   | 0.045      | -            | -                | -                | -         |    -0.31 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|            1 |     3943 | 2024-08-06 | ex-Enterprise     | L   | 0.038      | -            | -                | -                | -         |    -0.78 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,542.43)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-24 |      0.971 | $6,000.00      | $5,828.00       |
| 2024-12-07 |      0.860 | $2,204.00      | $1,896.27       |
| 2024-10-27 |      0.586 | $3,618.00      | $2,120.56       |
| 2024-09-17 |      0.319 | $2,186.00      | $697.60         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
