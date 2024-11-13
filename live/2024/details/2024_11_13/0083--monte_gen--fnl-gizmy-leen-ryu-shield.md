### Roster Details<br />
Team Name: Monte Gen<br />
Roster: fnl, Gizmy, leen, ryu, shield<br />
Global Rank: [83](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_13.md)<br />
Regional Rank: [57]( ../../standings_europe_2024_11_13.md)<br />
<br />
Final Rank Value:  906.6<br />
<br />
Final Rank Value (906.6) = Starting Rank Value (841.2) + Head To Head Adjustments (65.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.346[<sup>2</sup>](#table1)
- Opponent Network: 0.217[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.221<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 841.2
- 400 + ( ( 0.221 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 841.2


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
|           37 |      454 | 2024-10-22 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -12.43 | fnl, Gizmy, leen, ryu, shield  |
|           36 |      604 | 2024-10-16 | CYBERSHOKE        | W   | 1.000      | -            | -                | -                | 0 (0.000) |    16.02 | fnl, Gizmy, leen, ryu, shield  |
|           35 |      759 | 2024-10-08 | ALTERNATE aTTaX   | L   | 0.959      | -            | -                | -                | -         |   -15.27 | fnl, Gizmy, leen, ryu, shield  |
|           34 |     1003 | 2024-10-01 | ECSTATIC          | L   | 0.912      | -            | -                | -                | -         |   -11.34 | fnl, Gizmy, leen, ryu, shield  |
|           33 |     1030 | 2024-09-30 | ECLOT             | L   | 0.904      | -            | -                | -                | -         |    -9.40 | fnl, Gizmy, leen, ryu, shield  |
|           32 |     1041 | 2024-09-29 | WW                | W   | 0.900      | -            | -                | -                | 0 (0.000) |     3.93 | AiyvaN, fnl, leen, ryu, shield |
|           31 |     1084 | 2024-09-28 | Permitta          | L   | 0.892      | -            | -                | -                | -         |   -13.69 | fnl, Gizmy, leen, ryu, shield  |
|           30 |     1170 | 2024-09-26 | BetBoom           | L   | 0.880      | -            | -                | -                | -         |    -8.78 | fnl, Gizmy, leen, ryu, shield  |
|           29 |     1186 | 2024-09-26 | Spirit Academy    | L   | 0.878      | -            | -                | -                | -         |   -11.88 | fnl, Gizmy, leen, ryu, shield  |
|           28 |     1281 | 2024-09-24 | Rhyno             | W   | 0.865      | 0.435        | 0.016 (0.006)    | 0.371 (0.140)    | 0 (0.000) |     8.40 | fnl, Gizmy, leen, ryu, shield  |
|           27 |     1385 | 2024-09-20 | Passion UA        | W   | 0.840      | 0.435        | 0.105 (0.038)    | 1.000 (0.365)    | 0 (0.000) |    15.15 | fnl, Gizmy, leen, ryu, shield  |
|           26 |     1467 | 2024-09-18 | Zero Tenacity     | W   | 0.824      | 0.435        | 0.059 (0.021)    | 0.753 (0.270)    | 0 (0.000) |    17.79 | fnl, Gizmy, leen, ryu, shield  |
|           25 |     1550 | 2024-09-15 | ALTERNATE aTTaX   | W   | 0.805      | 0.435        | 0.039 (0.014)    | 0.664 (0.232)    | 0 (0.000) |    13.43 | AiyvaN, fnl, Gizmy, leen, ryu  |
|           24 |     1564 | 2024-09-14 | DMS               | W   | 0.799      | -            | -                | -                | 0 (0.000) |     9.20 | AiyvaN, fnl, Gizmy, leen, ryu  |
|           23 |     1616 | 2024-09-13 | GamerLegion       | L   | 0.791      | -            | -                | -                | -         |    -8.45 | AiyvaN, fnl, Gizmy, leen, ryu  |
|           22 |     1692 | 2024-09-10 | SovvyKiNG         | W   | 0.774      | -            | -                | -                | 0 (0.000) |     6.41 | fnl, Gizmy, leen, ryu, shield  |
|           21 |     1701 | 2024-09-10 | CYBERSHOKE        | W   | 0.772      | 0.435        | 0.020 (0.007)    | 0.617 (0.207)    | 0 (0.000) |    14.44 | fnl, Gizmy, leen, ryu, shield  |
|           20 |     1719 | 2024-09-09 | Verdant           | W   | 0.766      | -            | -                | -                | 0 (0.000) |    11.46 | fnl, Gizmy, leen, ryu, shield  |
|           19 |     1725 | 2024-09-09 | GUN5              | L   | 0.765      | -            | -                | -                | -         |    -7.19 | fnl, Gizmy, leen, ryu, shield  |
|           18 |     1781 | 2024-09-07 | Insilio           | W   | 0.751      | 0.435        | 0.019 (0.006)    | 0.654 (0.214)    | -         |    13.05 | fnl, Gizmy, leen, ryu, shield  |
|           17 |     1867 | 2024-09-04 | Aurora Young Blud | W   | 0.733      | 0.435        | 0.020 (0.006)    | 0.652 (0.208)    | -         |    11.03 | fnl, Gizmy, leen, ryu, shield  |
|           16 |     1907 | 2024-09-03 | EYEBALLERS        | L   | 0.726      | -            | -                | -                | -         |   -13.42 | fnl, Gizmy, leen, ryu, shield  |
|           15 |     1945 | 2024-09-01 | CPH Wolves        | W   | 0.714      | -            | -                | -                | -         |     9.94 | fnl, Gizmy, leen, ryu, shield  |
|           14 |     2088 | 2024-08-28 | ALTERNATE aTTaX   | L   | 0.685      | -            | -                | -                | -         |    -8.78 | fnl, Gizmy, leen, ryu, shield  |
|           13 |     2127 | 2024-08-27 | TSM               | W   | 0.680      | 0.435        | 0.042 (0.012)    | 0.642 (0.190)    | -         |    14.93 | fnl, Gizmy, leen, ryu, shield  |
|           12 |     2249 | 2024-08-25 | PARIVISION        | W   | 0.667      | 0.435        | 0.028 (0.008)    | -                | -         |    17.17 | fnl, Gizmy, leen, ryu, shield  |
|           11 |     2437 | 2024-08-20 | Revenant          | W   | 0.633      | -            | -                | -                | -         |    11.17 | fnl, Gizmy, leen, ryu, shield  |
|           10 |     2508 | 2024-08-17 | Insilio           | W   | 0.614      | 0.435        | -                | 0.654 (0.175)    | -         |    11.93 | fnl, Gizmy, leen, ryu, shield  |
|            9 |     2541 | 2024-08-16 | Permitta          | L   | 0.606      | -            | -                | -                | -         |    -3.65 | AiyvaN, fnl, leen, ryu, shield |
|            8 |     2637 | 2024-08-13 | ALTERNATE aTTaX   | W   | 0.585      | 0.435        | 0.039 (0.010)    | 0.664 (0.169)    | -         |    11.31 | fnl, Gizmy, leen, ryu, shield  |
|            7 |     2684 | 2024-08-12 | Preasy            | W   | 0.579      | -            | -                | -                | -         |     7.26 | fnl, Gizmy, leen, ryu, shield  |
|            6 |     2756 | 2024-08-09 | HAVU              | L   | 0.559      | -            | -                | -                | -         |   -14.93 | fnl, Gizmy, leen, ryu, shield  |
|            5 |     2832 | 2024-08-07 | DMS               | L   | 0.545      | -            | -                | -                | -         |    -8.88 | fnl, Gizmy, leen, ryu, shield  |
|            4 |     2865 | 2024-08-06 | CYBERSHOKE        | L   | 0.540      | -            | -                | -                | -         |    -6.62 | fnl, Gizmy, leen, ryu, shield  |
|            3 |     2922 | 2024-08-04 | Revenant          | W   | 0.527      | -            | -                | -                | -         |     8.34 | fnl, Gizmy, leen, ryu, shield  |
|            2 |     3139 | 2024-07-30 | Sampi             | L   | 0.492      | -            | -                | -                | -         |    -4.92 | fnl, Gizmy, leen, ryu, shield  |
|            1 |     3163 | 2024-07-29 | MOUZ NXT          | L   | 0.486      | -            | -                | -                | -         |    -7.33 | fnl, Gizmy, leen, ryu, shield  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,435.15)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
