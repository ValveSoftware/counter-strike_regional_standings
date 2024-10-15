### Roster Details<br />
Team Name: Monte Gen<br />
Roster: fnl, Gizmy, leen, ryu, shield<br />
Global Rank: [71](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [51]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  931.1<br />
<br />
Final Rank Value (931.1) = Starting Rank Value (908.6) + Head To Head Adjustments (22.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.351[<sup>1</sup>](#table2)
- Bounty Collected: 0.396[<sup>2</sup>](#table1)
- Opponent Network: 0.300[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.262<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 908.6
- 400 + ( ( 0.262 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 908.6


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
|           35 |      141 | 2024-10-08 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -18.20 | fnl, Gizmy, leen, ryu, shield  |
|           34 |      385 | 2024-10-01 | ECSTATIC          | L   | 1.000      | -            | -                | -                | -         |   -14.11 | fnl, Gizmy, leen, ryu, shield  |
|           33 |      412 | 2024-09-30 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |   -14.52 | fnl, Gizmy, leen, ryu, shield  |
|           32 |      423 | 2024-09-29 | WW                | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.80 | AiyvaN, fnl, leen, ryu, shield |
|           31 |      466 | 2024-09-28 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -20.78 | fnl, Gizmy, leen, ryu, shield  |
|           30 |      552 | 2024-09-26 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |    -8.20 | fnl, Gizmy, leen, ryu, shield  |
|           29 |      568 | 2024-09-26 | Spirit Academy    | L   | 1.000      | -            | -                | -                | -         |   -15.33 | fnl, Gizmy, leen, ryu, shield  |
|           28 |      663 | 2024-09-24 | Rhyno             | W   | 1.000      | 0.435        | 0.041 (0.018)    | 0.481 (0.209)    | 0 (0.000) |     8.49 | fnl, Gizmy, leen, ryu, shield  |
|           27 |      767 | 2024-09-20 | Passion UA        | W   | 1.000      | 0.435        | 0.192 (0.084)    | 1.000 (0.435)    | 0 (0.000) |    15.70 | fnl, Gizmy, leen, ryu, shield  |
|           26 |      849 | 2024-09-18 | Zero Tenacity     | W   | 1.000      | 0.435        | 0.117 (0.051)    | 0.861 (0.374)    | 0 (0.000) |    19.72 | fnl, Gizmy, leen, ryu, shield  |
|           25 |      932 | 2024-09-15 | ALTERNATE aTTaX   | W   | 0.999      | 0.435        | 0.078 (0.034)    | 0.787 (0.342)    | 0 (0.000) |    14.69 | AiyvaN, fnl, Gizmy, leen, ryu  |
|           24 |      946 | 2024-09-14 | DMS               | W   | 0.994      | -            | -                | -                | 0 (0.000) |    10.17 | AiyvaN, fnl, Gizmy, leen, ryu  |
|           23 |      998 | 2024-09-13 | GamerLegion       | L   | 0.985      | -            | -                | -                | -         |   -10.95 | AiyvaN, fnl, Gizmy, leen, ryu  |
|           22 |     1074 | 2024-09-10 | Space             | W   | 0.968      | -            | -                | -                | 0 (0.000) |     6.77 | fnl, Gizmy, leen, ryu, shield  |
|           21 |     1083 | 2024-09-10 | CYBERSHOKE        | W   | 0.966      | 0.435        | 0.042 (0.018)    | 0.774 (0.325)    | 0 (0.000) |    17.63 | fnl, Gizmy, leen, ryu, shield  |
|           20 |     1101 | 2024-09-09 | Verdant           | W   | 0.960      | -            | -                | -                | 0 (0.000) |     9.30 | fnl, Gizmy, leen, ryu, shield  |
|           19 |     1107 | 2024-09-09 | GUN5              | L   | 0.959      | -            | -                | -                | -         |   -10.32 | fnl, Gizmy, leen, ryu, shield  |
|           18 |     1163 | 2024-09-07 | Insilio           | W   | 0.945      | 0.435        | 0.038 (0.016)    | 0.690 (0.283)    | 0 (0.000) |    14.25 | fnl, Gizmy, leen, ryu, shield  |
|           17 |     1249 | 2024-09-04 | Aurora Young Blud | W   | 0.928      | 0.435        | -                | 0.550 (0.222)    | -         |    11.59 | fnl, Gizmy, leen, ryu, shield  |
|           16 |     1289 | 2024-09-03 | EYEBALLERS        | L   | 0.920      | -            | -                | -                | -         |   -18.46 | fnl, Gizmy, leen, ryu, shield  |
|           15 |     1327 | 2024-09-01 | CPH Wolves        | W   | 0.908      | -            | -                | -                | -         |    10.24 | fnl, Gizmy, leen, ryu, shield  |
|           14 |     1470 | 2024-08-28 | ALTERNATE aTTaX   | L   | 0.879      | -            | -                | -                | -         |   -12.94 | fnl, Gizmy, leen, ryu, shield  |
|           13 |     1509 | 2024-08-27 | TSM               | W   | 0.874      | 0.435        | 0.062 (0.023)    | 0.788 (0.299)    | -         |    18.22 | fnl, Gizmy, leen, ryu, shield  |
|           12 |     1631 | 2024-08-25 | PARIVISION        | W   | 0.862      | 0.435        | 0.039 (0.015)    | -                | -         |    19.75 | fnl, Gizmy, leen, ryu, shield  |
|           11 |     1819 | 2024-08-20 | Revenant          | W   | 0.828      | -            | -                | -                | -         |    14.45 | fnl, Gizmy, leen, ryu, shield  |
|           10 |     1890 | 2024-08-17 | Insilio           | W   | 0.808      | 0.435        | 0.038 (0.013)    | 0.690 (0.242)    | -         |    14.02 | fnl, Gizmy, leen, ryu, shield  |
|            9 |     1923 | 2024-08-16 | Permitta          | L   | 0.800      | -            | -                | -                | -         |   -11.81 | AiyvaN, fnl, leen, ryu, shield |
|            8 |     2019 | 2024-08-13 | ALTERNATE aTTaX   | W   | 0.779      | 0.435        | 0.078 (0.026)    | 0.787 (0.267)    | -         |    13.06 | fnl, Gizmy, leen, ryu, shield  |
|            7 |     2066 | 2024-08-12 | Preasy            | W   | 0.773      | -            | -                | -                | -         |     6.55 | fnl, Gizmy, leen, ryu, shield  |
|            6 |     2138 | 2024-08-09 | HAVU              | L   | 0.753      | -            | -                | -                | -         |   -20.59 | fnl, Gizmy, leen, ryu, shield  |
|            5 |     2214 | 2024-08-07 | DMS               | L   | 0.739      | -            | -                | -                | -         |   -12.88 | fnl, Gizmy, leen, ryu, shield  |
|            4 |     2247 | 2024-08-06 | CYBERSHOKE        | L   | 0.734      | -            | -                | -                | -         |    -9.73 | fnl, Gizmy, leen, ryu, shield  |
|            3 |     2304 | 2024-08-04 | Revenant          | W   | 0.721      | -            | -                | -                | -         |    10.87 | fnl, Gizmy, leen, ryu, shield  |
|            2 |     2521 | 2024-07-30 | Sampi             | L   | 0.686      | -            | -                | -                | -         |    -9.11 | fnl, Gizmy, leen, ryu, shield  |
|            1 |     2545 | 2024-07-29 | MOUZ NXT          | L   | 0.680      | -            | -                | -                | -         |    -8.87 | fnl, Gizmy, leen, ryu, shield  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,406.50)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
