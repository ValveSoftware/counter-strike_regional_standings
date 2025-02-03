### Roster Details<br />
Team Name: ALASKA<br />
Roster: arTisT, Extinct, Girafffe, Tree60, Vacancy<br />
Global Rank: [86](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [59]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  882.3<br />
<br />
Final Rank Value (882.3) = Starting Rank Value (925.9) + Head To Head Adjustments (-43.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.438[<sup>1</sup>](#table2)
- Bounty Collected: 0.311[<sup>2</sup>](#table1)
- Opponent Network: 0.065[<sup>2</sup>](#table1)
- LAN Wins: 0.271[<sup>2</sup>](#table1)

The average of these factors is 0.271<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 925.9
- 400 + ( ( 0.271 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 925.9


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
|           36 |       84 | 2025-01-28 | Apogee            | L   | 1.000      | -            | -                | -                | -         |   -13.72 | arTisT, Extinct, Girafffe, Tree60, Vacancy  |
|           35 |      171 | 2025-01-24 | Chimera           | W   | 1.000      | 0.143        | 0.044 (0.006)    | 0.806 (0.115)    | 0 (0.000) |    19.27 | arTisT, Extinct, Girafffe, Tree60, Vacancy  |
|           34 |      417 | 2024-12-24 | WOPA              | W   | 0.925      | 0.333        | 0.065 (0.020)    | 0.673 (0.207)    | 0 (0.000) |    16.64 | arTisT, Extinct, Girafffe, leaf, Vacancy    |
|           33 |      433 | 2024-12-22 | Heimo             | W   | 0.912      | 0.333        | 0.006 (0.002)    | 0.210 (0.064)    | 0 (0.000) |    10.19 | arTisT, Extinct, Girafffe, leaf, Vacancy    |
|           32 |      439 | 2024-12-21 | WOPA              | L   | 0.907      | -            | -                | -                | -         |   -13.25 | arTisT, Extinct, Girafffe, leaf, Vacancy    |
|           31 |      456 | 2024-12-20 | Anonymo           | W   | 0.898      | 0.333        | 0.066 (0.020)    | 0.423 (0.127)    | 0 (0.000) |    12.76 | arTisT, Extinct, Girafffe, leaf, Vacancy    |
|           30 |      478 | 2024-12-18 | ENCE Academy      | L   | 0.885      | -            | -                | -                | -         |   -17.77 | arTisT, Extinct, Girafffe, leaf, Vacancy    |
|           29 |      488 | 2024-12-17 | Preasy            | W   | 0.879      | 0.333        | 0.014 (0.004)    | 0.118 (0.035)    | 0 (0.000) |     8.52 | arTisT, Extinct, Girafffe, leaf, Vacancy    |
|           28 |      659 | 2024-12-07 | Belfast Storm     | W   | 0.814      | 0.287        | 0.004 (0.001)    | 0.083 (0.019)    | 1 (0.814) |     6.13 | arTisT, Extinct, Girafffe, leaf, Vacancy    |
|           27 |      905 | 2024-11-25 | TRAXXXMANIA       | W   | 0.734      | -            | -                | -                | 0 (0.000) |     1.69 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           26 |     1162 | 2024-11-14 | Alliance          | L   | 0.659      | -            | -                | -                | -         |    -8.98 | arTisT, dobbo, Extinct, Girafffe, leaf      |
|           25 |     1181 | 2024-11-13 | Fire Flux         | L   | 0.654      | -            | -                | -                | -         |    -9.82 | arTisT, Diviiii, Extinct, Girafffe, leaf    |
|           24 |     1215 | 2024-11-12 | ROYALS            | W   | 0.647      | -            | -                | -                | -         |     1.38 | arTisT, Diviiii, Extinct, Girafffe, leaf    |
|           23 |     1462 | 2024-11-01 | ECSTATIC          | L   | 0.571      | -            | -                | -                | -         |    -6.42 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           22 |     1535 | 2024-10-28 | 9 Pandas          | L   | 0.545      | -            | -                | -                | -         |    -4.32 | arTisT, bevve, Extinct, Girafffe, Vacancy   |
|           21 |     1548 | 2024-10-27 | VFE               | W   | 0.539      | 0.315        | 0.004 (0.001)    | 0.033 (0.006)    | 1 (0.539) |     4.08 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           20 |     1568 | 2024-10-26 | VFE               | W   | 0.533      | -            | -                | -                | 1 (0.533) |     4.04 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           19 |     1639 | 2024-10-22 | Heimo             | L   | 0.504      | -            | -                | -                | -         |   -11.34 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           18 |     1667 | 2024-10-20 | WOPA              | L   | 0.492      | -            | -                | -                | -         |    -7.78 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           17 |     2317 | 2024-09-27 | GameAgents        | L   | 0.338      | -            | -                | -                | -         |    -7.14 | cryths, Diviiii, Extinct, Girafffe, Vacancy |
|           16 |     2507 | 2024-09-23 | Alliance          | W   | 0.311      | 0.371        | 0.038 (0.004)    | 0.404 (0.047)    | -         |     5.33 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           15 |     2572 | 2024-09-20 | FLuffy Gangsters  | L   | 0.292      | -            | -                | -                | -         |    -6.55 | arTisT, Diviiii, Extinct, leaf, Vacancy     |
|           14 |     2603 | 2024-09-19 | CPH Wolves        | L   | 0.286      | -            | -                | -                | -         |    -6.29 | arTisT, Diviiii, Extinct, leaf, Vacancy     |
|           13 |     2614 | 2024-09-19 | GameAgents        | L   | 0.285      | -            | -                | -                | -         |    -6.41 | arTisT, Diviiii, Extinct, leaf, Vacancy     |
|           12 |     2672 | 2024-09-17 | Dreams To Legends | W   | 0.272      | -            | -                | -                | 1 (0.272) |     1.33 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           11 |     2885 | 2024-09-10 | FLuffy Gangsters  | L   | 0.225      | -            | -                | -                | -         |    -5.12 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           10 |     2901 | 2024-09-09 | Monte Gen         | L   | 0.219      | -            | -                | -                | -         |    -4.51 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|            9 |     3438 | 2024-08-25 | ROYALS            | W   | 0.119      | -            | -                | -                | -         |     0.20 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|            8 |     3447 | 2024-08-25 | Anonymo           | L   | 0.117      | -            | -                | -                | -         |    -2.36 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|            7 |     3484 | 2024-08-23 | Revenant          | L   | 0.106      | -            | -                | -                | -         |    -2.68 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|            6 |     3500 | 2024-08-23 | Sampi             | L   | 0.105      | -            | -                | -                | -         |    -1.63 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|            5 |     3529 | 2024-08-22 | ENCE Academy      | W   | 0.098      | -            | -                | -                | -         |     0.89 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|            4 |     3579 | 2024-08-21 | Alliance          | L   | 0.092      | -            | -                | -                | -         |    -1.40 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|            3 |     3710 | 2024-08-17 | kONO              | W   | 0.065      | 0.371        | 0.048 (0.001)    | 0.600 (0.014)    | -         |     0.93 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|            2 |     3821 | 2024-08-13 | ECSTATIC          | W   | 0.038      | 0.371        | 0.081 (0.001)    | 1.000 (0.014)    | -         |     0.61 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|            1 |     3858 | 2024-08-12 | Nexus             | L   | 0.033      | -            | -                | -                | -         |    -0.07 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,887.35)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-24 |      0.925 | $6,000.00      | $5,547.41       |
| 2024-12-07 |      0.814 | $2,204.00      | $1,793.20       |
| 2024-10-27 |      0.539 | $3,618.00      | $1,951.36       |
| 2024-09-17 |      0.272 | $2,186.00      | $595.37         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
