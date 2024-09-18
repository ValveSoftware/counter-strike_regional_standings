### Roster Details<br />
Team Name: Monte Gen<br />
Roster: fnl, Gizmy, leen, ryu, shield<br />
Global Rank: [55](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [39]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  1022.3<br />
<br />
Final Rank Value (1022.3) = Starting Rank Value (939.0) + Head To Head Adjustments (83.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.365[<sup>1</sup>](#table2)
- Bounty Collected: 0.396[<sup>2</sup>](#table1)
- Opponent Network: 0.340[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.275<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 939.0
- 400 + ( ( 0.275 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 939.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |        9 | 2024-09-18 | Zero Tenacity     | W   | 1.000      | 0.435        | 0.168 (0.073)    | 1.000 (0.435)    | 0 (0.000) |    19.84 | fnl, Gizmy, leen, ryu, shield  |
|           25 |       92 | 2024-09-15 | ALTERNATE aTTaX   | W   | 1.000      | 0.435        | 0.110 (0.048)    | 0.792 (0.344)    | 0 (0.000) |    14.54 | AiyvaN, fnl, Gizmy, leen, ryu  |
|           24 |      106 | 2024-09-14 | DMS               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.17 | AiyvaN, fnl, Gizmy, leen, ryu  |
|           23 |      158 | 2024-09-13 | GamerLegion       | L   | 1.000      | -            | -                | -                | -         |   -10.98 | AiyvaN, fnl, Gizmy, leen, ryu  |
|           22 |      234 | 2024-09-10 | Space             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.62 | fnl, Gizmy, leen, ryu, shield  |
|           21 |      243 | 2024-09-10 | CYBERSHOKE        | W   | 1.000      | 0.435        | 0.044 (0.019)    | 0.750 (0.326)    | 0 (0.000) |    17.69 | fnl, Gizmy, leen, ryu, shield  |
|           20 |      261 | 2024-09-09 | Verdant           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.30 | fnl, Gizmy, leen, ryu, shield  |
|           19 |      267 | 2024-09-09 | GUN5              | L   | 1.000      | -            | -                | -                | -         |   -10.71 | fnl, Gizmy, leen, ryu, shield  |
|           18 |      323 | 2024-09-07 | Insilio           | W   | 1.000      | 0.435        | 0.041 (0.018)    | 0.799 (0.347)    | 0 (0.000) |    14.63 | fnl, Gizmy, leen, ryu, shield  |
|           17 |      409 | 2024-09-04 | Aurora Young Blud | W   | 1.000      | 0.435        | 0.019 (0.008)    | 0.711 (0.309)    | 0 (0.000) |    12.14 | fnl, Gizmy, leen, ryu, shield  |
|           16 |      449 | 2024-09-03 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -22.35 | fnl, Gizmy, leen, ryu, shield  |
|           15 |      487 | 2024-09-01 | CPH Wolves        | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.87 | fnl, Gizmy, leen, ryu, shield  |
|           14 |      630 | 2024-08-28 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -15.22 | fnl, Gizmy, leen, ryu, shield  |
|           13 |      669 | 2024-08-27 | TSM               | W   | 1.000      | 0.435        | 0.064 (0.028)    | 0.864 (0.376)    | 0 (0.000) |    21.45 | fnl, Gizmy, leen, ryu, shield  |
|           12 |      791 | 2024-08-25 | PARIVISION        | W   | 1.000      | 0.435        | 0.046 (0.020)    | 0.684 (0.297)    | -         |    24.08 | fnl, Gizmy, leen, ryu, shield  |
|           11 |      979 | 2024-08-20 | Revenant          | W   | 1.000      | 0.435        | 0.044 (0.019)    | 0.682 (0.296)    | -         |    17.81 | fnl, Gizmy, leen, ryu, shield  |
|           10 |     1050 | 2024-08-17 | Insilio           | W   | 0.988      | 0.435        | 0.041 (0.018)    | 0.799 (0.343)    | -         |    16.82 | fnl, Gizmy, leen, ryu, shield  |
|            9 |     1083 | 2024-08-16 | Permitta          | L   | 0.980      | -            | -                | -                | -         |   -14.43 | AiyvaN, fnl, leen, ryu, shield |
|            8 |     1179 | 2024-08-13 | ALTERNATE aTTaX   | W   | 0.959      | 0.435        | 0.110 (0.046)    | 0.792 (0.330)    | -         |    15.15 | fnl, Gizmy, leen, ryu, shield  |
|            7 |     1226 | 2024-08-12 | Preasy            | W   | 0.953      | -            | -                | -                | -         |     7.88 | fnl, Gizmy, leen, ryu, shield  |
|            6 |     1298 | 2024-08-09 | HAVU              | L   | 0.933      | -            | -                | -                | -         |   -25.23 | fnl, Gizmy, leen, ryu, shield  |
|            5 |     1374 | 2024-08-07 | DMS               | L   | 0.919      | -            | -                | -                | -         |   -15.44 | fnl, Gizmy, leen, ryu, shield  |
|            4 |     1407 | 2024-08-06 | CYBERSHOKE        | L   | 0.914      | -            | -                | -                | -         |   -13.11 | fnl, Gizmy, leen, ryu, shield  |
|            3 |     1464 | 2024-08-04 | Revenant          | W   | 0.901      | -            | -                | -                | -         |    14.19 | fnl, Gizmy, leen, ryu, shield  |
|            2 |     1681 | 2024-07-30 | Sampi             | L   | 0.866      | -            | -                | -                | -         |   -13.47 | fnl, Gizmy, leen, ryu, shield  |
|            1 |     1705 | 2024-07-29 | MOUZ NXT          | L   | 0.860      | -            | -                | -                | -         |    -8.87 | fnl, Gizmy, leen, ryu, shield  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,000.00)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
