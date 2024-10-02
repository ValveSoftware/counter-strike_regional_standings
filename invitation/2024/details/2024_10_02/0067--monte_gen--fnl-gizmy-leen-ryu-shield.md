### Roster Details<br />
Team Name: Monte Gen<br />
Roster: fnl, Gizmy, leen, ryu, shield<br />
Global Rank: [67](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_02.md)<br />
Regional Rank: [50]( ../../standings_europe_2024_10_02.md)<br />
<br />
Final Rank Value:  942.4<br />
<br />
Final Rank Value (942.4) = Starting Rank Value (915.9) + Head To Head Adjustments (26.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.353[<sup>1</sup>](#table2)
- Bounty Collected: 0.392[<sup>2</sup>](#table1)
- Opponent Network: 0.334[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.270<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 915.9
- 400 + ( ( 0.270 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 915.9


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
|           34 |       68 | 2024-10-01 | ECSTATIC          | L   | 1.000      | -            | -                | -                | -         |   -14.29 | fnl, Gizmy, leen, ryu, shield  |
|           33 |       95 | 2024-09-30 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |   -16.80 | fnl, Gizmy, leen, ryu, shield  |
|           32 |      106 | 2024-09-29 | WW                | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.70 | AiyvaN, fnl, leen, ryu, shield |
|           31 |      149 | 2024-09-28 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -21.04 | fnl, Gizmy, leen, ryu, shield  |
|           30 |      235 | 2024-09-26 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |    -8.07 | fnl, Gizmy, leen, ryu, shield  |
|           29 |      251 | 2024-09-26 | Spirit Academy    | L   | 1.000      | -            | -                | -                | -         |   -18.12 | fnl, Gizmy, leen, ryu, shield  |
|           28 |      346 | 2024-09-24 | Rhyno             | W   | 1.000      | 0.435        | 0.036 (0.016)    | -                | 0 (0.000) |     7.71 | fnl, Gizmy, leen, ryu, shield  |
|           27 |      450 | 2024-09-20 | Passion UA        | W   | 1.000      | 0.435        | 0.128 (0.056)    | 1.000 (0.435)    | 0 (0.000) |    14.68 | fnl, Gizmy, leen, ryu, shield  |
|           26 |      532 | 2024-09-18 | Zero Tenacity     | W   | 1.000      | 0.435        | 0.125 (0.054)    | 1.000 (0.435)    | 0 (0.000) |    19.46 | fnl, Gizmy, leen, ryu, shield  |
|           25 |      615 | 2024-09-15 | ALTERNATE aTTaX   | W   | 1.000      | 0.435        | 0.084 (0.037)    | 0.847 (0.368)    | 0 (0.000) |    14.48 | AiyvaN, fnl, Gizmy, leen, ryu  |
|           24 |      629 | 2024-09-14 | DMS               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.23 | AiyvaN, fnl, Gizmy, leen, ryu  |
|           23 |      681 | 2024-09-13 | GamerLegion       | L   | 1.000      | -            | -                | -                | -         |   -12.11 | AiyvaN, fnl, Gizmy, leen, ryu  |
|           22 |      757 | 2024-09-10 | Space             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.67 | fnl, Gizmy, leen, ryu, shield  |
|           21 |      766 | 2024-09-10 | CYBERSHOKE        | W   | 1.000      | 0.435        | 0.044 (0.019)    | 0.798 (0.347)    | 0 (0.000) |    17.83 | fnl, Gizmy, leen, ryu, shield  |
|           20 |      784 | 2024-09-09 | Verdant           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.40 | fnl, Gizmy, leen, ryu, shield  |
|           19 |      790 | 2024-09-09 | GUN5              | L   | 1.000      | -            | -                | -                | -         |   -11.20 | fnl, Gizmy, leen, ryu, shield  |
|           18 |      846 | 2024-09-07 | Insilio           | W   | 1.000      | 0.435        | 0.039 (0.017)    | 0.731 (0.318)    | 0 (0.000) |    14.40 | fnl, Gizmy, leen, ryu, shield  |
|           17 |      932 | 2024-09-04 | Aurora Young Blud | W   | 1.000      | 0.435        | -                | 0.622 (0.270)    | -         |    11.85 | fnl, Gizmy, leen, ryu, shield  |
|           16 |      972 | 2024-09-03 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -22.45 | fnl, Gizmy, leen, ryu, shield  |
|           15 |     1010 | 2024-09-01 | CPH Wolves        | W   | 0.993      | -            | -                | -                | -         |    12.04 | fnl, Gizmy, leen, ryu, shield  |
|           14 |     1153 | 2024-08-28 | ALTERNATE aTTaX   | L   | 0.964      | -            | -                | -                | -         |   -14.65 | fnl, Gizmy, leen, ryu, shield  |
|           13 |     1192 | 2024-08-27 | TSM               | W   | 0.959      | 0.435        | 0.048 (0.020)    | 0.800 (0.333)    | -         |    19.86 | fnl, Gizmy, leen, ryu, shield  |
|           12 |     1314 | 2024-08-25 | PARIVISION        | W   | 0.947      | 0.435        | 0.035 (0.015)    | -                | -         |    21.74 | fnl, Gizmy, leen, ryu, shield  |
|           11 |     1502 | 2024-08-20 | Revenant          | W   | 0.913      | 0.435        | -                | 0.575 (0.228)    | -         |    15.92 | fnl, Gizmy, leen, ryu, shield  |
|           10 |     1573 | 2024-08-17 | Insilio           | W   | 0.894      | 0.435        | 0.039 (0.015)    | 0.731 (0.284)    | -         |    14.93 | fnl, Gizmy, leen, ryu, shield  |
|            9 |     1606 | 2024-08-16 | Permitta          | L   | 0.885      | -            | -                | -                | -         |   -13.50 | AiyvaN, fnl, leen, ryu, shield |
|            8 |     1702 | 2024-08-13 | ALTERNATE aTTaX   | W   | 0.864      | 0.435        | 0.084 (0.032)    | 0.847 (0.318)    | -         |    13.81 | fnl, Gizmy, leen, ryu, shield  |
|            7 |     1749 | 2024-08-12 | Preasy            | W   | 0.858      | -            | -                | -                | -         |     7.15 | fnl, Gizmy, leen, ryu, shield  |
|            6 |     1821 | 2024-08-09 | HAVU              | L   | 0.838      | -            | -                | -                | -         |   -22.77 | fnl, Gizmy, leen, ryu, shield  |
|            5 |     1897 | 2024-08-07 | DMS               | L   | 0.824      | -            | -                | -                | -         |   -14.17 | fnl, Gizmy, leen, ryu, shield  |
|            4 |     1930 | 2024-08-06 | CYBERSHOKE        | L   | 0.819      | -            | -                | -                | -         |   -11.38 | fnl, Gizmy, leen, ryu, shield  |
|            3 |     1987 | 2024-08-04 | Revenant          | W   | 0.806      | -            | -                | -                | -         |    12.10 | fnl, Gizmy, leen, ryu, shield  |
|            2 |     2204 | 2024-07-30 | Sampi             | L   | 0.771      | -            | -                | -                | -         |   -11.59 | fnl, Gizmy, leen, ryu, shield  |
|            1 |     2228 | 2024-07-29 | MOUZ NXT          | L   | 0.765      | -            | -                | -                | -         |    -9.38 | fnl, Gizmy, leen, ryu, shield  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,832.38)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
