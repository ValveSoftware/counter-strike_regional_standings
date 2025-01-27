### Roster Details<br />
Team Name: Monte Gen<br />
Roster: fnl, Gizmy, leen, ryu, shield<br />
Global Rank: [96](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [67]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  862.0<br />
<br />
Final Rank Value (862.0) = Starting Rank Value (806.0) + Head To Head Adjustments (56.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.415[<sup>1</sup>](#table2)
- Bounty Collected: 0.325[<sup>2</sup>](#table1)
- Opponent Network: 0.091[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.208<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 806.0
- 400 + ( ( 0.208 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 806.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |      324 | 2024-12-21 | AMKAL            | L   | 0.953      | -            | -                | -                | -         |   -14.67 | fnl, Gizmy, leen, ryu, shield    |
|           41 |      331 | 2024-12-20 | Anonymo          | W   | 0.947      | 0.333        | 0.065 (0.021)    | 0.421 (0.133)    | 0 (0.000) |    12.65 | AiyvaN, Gizmy, leen, ryu, shield |
|           40 |      343 | 2024-12-19 | Betera           | W   | 0.940      | 0.333        | -                | 0.194 (0.061)    | 0 (0.000) |    10.42 | AiyvaN, Gizmy, leen, ryu, shield |
|           39 |      624 | 2024-12-04 | FORZE Reload     | W   | 0.840      | 0.333        | 0.033 (0.009)    | 0.145 (0.041)    | 0 (0.000) |     9.87 | fnl, Gizmy, leen, ryu, shield    |
|           38 |      641 | 2024-12-03 | FLuffy Gangsters | W   | 0.833      | 0.333        | 0.015 (0.004)    | 0.605 (0.168)    | 0 (0.000) |    10.95 | fnl, Gizmy, leen, ryu, shield    |
|           37 |      657 | 2024-12-02 | Preasy           | W   | 0.828      | 0.333        | 0.013 (0.004)    | -                | 0 (0.000) |     9.73 | fnl, Gizmy, leen, ryu, shield    |
|           36 |      809 | 2024-11-24 | TNL              | L   | 0.772      | -            | -                | -                | -         |   -14.12 | Burmylov, fnl, Gizmy, leen, ryu  |
|           35 |     1518 | 2024-10-22 | Insilio          | L   | 0.552      | -            | -                | -                | -         |   -12.43 | fnl, Gizmy, leen, ryu, shield    |
|           34 |     1668 | 2024-10-16 | CYBERSHOKE       | W   | 0.511      | 0.143        | -                | 0.588 (0.043)    | 0 (0.000) |     7.83 | fnl, Gizmy, leen, ryu, shield    |
|           33 |     1823 | 2024-10-08 | ALTERNATE aTTaX  | L   | 0.459      | -            | -                | -                | -         |    -4.13 | fnl, Gizmy, leen, ryu, shield    |
|           32 |     2067 | 2024-10-01 | ECSTATIC         | L   | 0.412      | -            | -                | -                | -         |    -4.34 | fnl, Gizmy, leen, ryu, shield    |
|           31 |     2094 | 2024-09-30 | ECLOT            | L   | 0.404      | -            | -                | -                | -         |    -1.22 | fnl, Gizmy, leen, ryu, shield    |
|           30 |     2105 | 2024-09-29 | WW               | W   | 0.400      | -            | -                | -                | 0 (0.000) |     1.96 | AiyvaN, fnl, leen, ryu, shield   |
|           29 |     2148 | 2024-09-28 | los kogutos      | L   | 0.392      | -            | -                | -                | -         |    -2.54 | fnl, Gizmy, leen, ryu, shield    |
|           28 |     2234 | 2024-09-26 | BetBoom          | L   | 0.380      | -            | -                | -                | -         |    -2.17 | fnl, Gizmy, leen, ryu, shield    |
|           27 |     2250 | 2024-09-26 | Spirit Academy   | L   | 0.378      | -            | -                | -                | -         |    -3.43 | fnl, Gizmy, leen, ryu, shield    |
|           26 |     2345 | 2024-09-24 | Rhyno            | W   | 0.365      | -            | -                | -                | 0 (0.000) |     3.95 | fnl, Gizmy, leen, ryu, shield    |
|           25 |     2449 | 2024-09-20 | Passion UA       | W   | 0.340      | 0.435        | 0.105 (0.015)    | 0.802 (0.118)    | 0 (0.000) |     8.82 | fnl, Gizmy, leen, ryu, shield    |
|           24 |     2531 | 2024-09-18 | Zero Tenacity    | W   | 0.324      | 0.435        | 0.081 (0.011)    | 0.719 (0.101)    | 0 (0.000) |     7.94 | fnl, Gizmy, leen, ryu, shield    |
|           23 |     2614 | 2024-09-15 | ALTERNATE aTTaX  | W   | 0.305      | 0.435        | 0.070 (0.009)    | 0.666 (0.088)    | -         |     7.67 | AiyvaN, fnl, Gizmy, leen, ryu    |
|           22 |     2628 | 2024-09-14 | AMKAL            | W   | 0.300      | -            | -                | -                | -         |     2.86 | AiyvaN, fnl, Gizmy, leen, ryu    |
|           21 |     2680 | 2024-09-13 | GamerLegion      | L   | 0.291      | -            | -                | -                | -         |    -4.87 | AiyvaN, fnl, Gizmy, leen, ryu    |
|           20 |     2756 | 2024-09-10 | SovvyKiNG        | W   | 0.274      | -            | -                | -                | -         |     1.58 | fnl, Gizmy, leen, ryu, shield    |
|           19 |     2765 | 2024-09-10 | CYBERSHOKE       | W   | 0.272      | 0.435        | -                | 0.588 (0.070)    | -         |     4.40 | fnl, Gizmy, leen, ryu, shield    |
|           18 |     2783 | 2024-09-09 | ALASKA           | W   | 0.266      | -            | -                | -                | -         |     5.58 | fnl, Gizmy, leen, ryu, shield    |
|           17 |     2789 | 2024-09-09 | GUN5             | L   | 0.265      | -            | -                | -                | -         |    -1.64 | fnl, Gizmy, leen, ryu, shield    |
|           16 |     2845 | 2024-09-07 | Insilio          | W   | 0.251      | -            | -                | -                | -         |     3.57 | fnl, Gizmy, leen, ryu, shield    |
|           15 |     2931 | 2024-09-04 | Chimera          | W   | 0.234      | 0.435        | 0.044 (0.004)    | 0.816 (0.083)    | -         |     4.63 | fnl, Gizmy, leen, ryu, shield    |
|           14 |     2971 | 2024-09-03 | EYEBALLERS       | L   | 0.226      | -            | -                | -                | -         |    -3.26 | fnl, Gizmy, leen, ryu, shield    |
|           13 |     3009 | 2024-09-01 | CPH Wolves       | W   | 0.214      | -            | -                | -                | -         |     2.73 | fnl, Gizmy, leen, ryu, shield    |
|           12 |     3152 | 2024-08-28 | ALTERNATE aTTaX  | L   | 0.185      | -            | -                | -                | -         |    -1.03 | fnl, Gizmy, leen, ryu, shield    |
|           11 |     3191 | 2024-08-27 | TSM              | W   | 0.180      | 0.435        | 0.032 (0.002)    | -                | -         |     3.27 | fnl, Gizmy, leen, ryu, shield    |
|           10 |     3313 | 2024-08-25 | PARIVISION       | W   | 0.167      | -            | -                | -                | -         |     3.01 | fnl, Gizmy, leen, ryu, shield    |
|            9 |     3501 | 2024-08-20 | Revenant         | W   | 0.134      | -            | -                | -                | -         |     1.53 | fnl, Gizmy, leen, ryu, shield    |
|            8 |     3572 | 2024-08-17 | Insilio          | W   | 0.114      | -            | -                | -                | -         |     1.63 | fnl, Gizmy, leen, ryu, shield    |
|            7 |     3605 | 2024-08-16 | los kogutos      | L   | 0.106      | -            | -                | -                | -         |    -0.38 | AiyvaN, fnl, leen, ryu, shield   |
|            6 |     3701 | 2024-08-13 | ALTERNATE aTTaX  | W   | 0.085      | 0.435        | 0.070 (0.003)    | -                | -         |     2.24 | fnl, Gizmy, leen, ryu, shield    |
|            5 |     3748 | 2024-08-12 | Preasy           | W   | 0.079      | -            | -                | -                | -         |     0.23 | fnl, Gizmy, leen, ryu, shield    |
|            4 |     3820 | 2024-08-09 | HAVU             | L   | 0.059      | -            | -                | -                | -         |    -1.58 | fnl, Gizmy, leen, ryu, shield    |
|            3 |     3896 | 2024-08-07 | AMKAL            | L   | 0.045      | -            | -                | -                | -         |    -0.96 | fnl, Gizmy, leen, ryu, shield    |
|            2 |     3929 | 2024-08-06 | CYBERSHOKE       | L   | 0.040      | -            | -                | -                | -         |    -0.61 | fnl, Gizmy, leen, ryu, shield    |
|            1 |     3986 | 2024-08-04 | Revenant         | W   | 0.027      | -            | -                | -                | -         |     0.30 | fnl, Gizmy, leen, ryu, shield    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,993.61)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      0.953 | $3,000.00      | $2,858.01       |
| 2024-12-04 |      0.840 | $5,000.00      | $4,199.97       |
| 2024-08-28 |      0.187 | $5,000.00      | $935.63         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
