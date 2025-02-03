### Roster Details<br />
Team Name: Monte Gen<br />
Roster: fnl, Gizmy, leen, ryu, shield<br />
Global Rank: [95](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [65]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  846.1<br />
<br />
Final Rank Value (846.1) = Starting Rank Value (795.7) + Head To Head Adjustments (50.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.415[<sup>1</sup>](#table2)
- Bounty Collected: 0.319[<sup>2</sup>](#table1)
- Opponent Network: 0.082[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.204<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 795.7
- 400 + ( ( 0.204 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 795.7


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
|           39 |      442 | 2024-12-21 | AMKAL            | L   | 0.906      | -            | -                | -                | -         |   -13.90 | fnl, Gizmy, leen, ryu, shield    |
|           38 |      449 | 2024-12-20 | Anonymo          | W   | 0.900      | 0.333        | 0.066 (0.020)    | 0.423 (0.127)    | 0 (0.000) |    12.42 | AiyvaN, Gizmy, leen, ryu, shield |
|           37 |      461 | 2024-12-19 | Betera           | W   | 0.893      | 0.333        | -                | 0.261 (0.078)    | 0 (0.000) |    11.03 | AiyvaN, Gizmy, leen, ryu, shield |
|           36 |      742 | 2024-12-04 | FORZE Reload     | W   | 0.793      | 0.333        | 0.033 (0.009)    | 0.149 (0.039)    | 0 (0.000) |     9.74 | fnl, Gizmy, leen, ryu, shield    |
|           35 |      759 | 2024-12-03 | FLuffy Gangsters | W   | 0.787      | 0.333        | 0.015 (0.004)    | 0.608 (0.159)    | 0 (0.000) |    10.67 | fnl, Gizmy, leen, ryu, shield    |
|           34 |      775 | 2024-12-02 | Preasy           | W   | 0.781      | 0.333        | 0.014 (0.004)    | -                | 0 (0.000) |     9.51 | fnl, Gizmy, leen, ryu, shield    |
|           33 |      927 | 2024-11-24 | TNL              | L   | 0.726      | -            | -                | -                | -         |   -12.90 | Burmylov, fnl, Gizmy, leen, ryu  |
|           32 |     1636 | 2024-10-22 | Insilio          | L   | 0.505      | -            | -                | -                | -         |   -11.47 | fnl, Gizmy, leen, ryu, shield    |
|           31 |     1786 | 2024-10-16 | CYBERSHOKE       | W   | 0.464      | 0.143        | -                | 0.565 (0.037)    | 0 (0.000) |     7.14 | fnl, Gizmy, leen, ryu, shield    |
|           30 |     1941 | 2024-10-08 | ALTERNATE aTTaX  | L   | 0.412      | -            | -                | -                | -         |    -3.81 | fnl, Gizmy, leen, ryu, shield    |
|           29 |     2185 | 2024-10-01 | ECSTATIC         | L   | 0.365      | -            | -                | -                | -         |    -3.93 | fnl, Gizmy, leen, ryu, shield    |
|           28 |     2212 | 2024-09-30 | ECLOT            | L   | 0.358      | -            | -                | -                | -         |    -1.18 | fnl, Gizmy, leen, ryu, shield    |
|           27 |     2223 | 2024-09-29 | WW               | W   | 0.353      | -            | -                | -                | 0 (0.000) |     1.82 | AiyvaN, fnl, leen, ryu, shield   |
|           26 |     2266 | 2024-09-28 | los kogutos      | L   | 0.346      | -            | -                | -                | -         |    -2.33 | fnl, Gizmy, leen, ryu, shield    |
|           25 |     2352 | 2024-09-26 | BetBoom          | L   | 0.333      | -            | -                | -                | -         |    -1.97 | fnl, Gizmy, leen, ryu, shield    |
|           24 |     2368 | 2024-09-26 | Spirit Academy   | L   | 0.331      | -            | -                | -                | -         |    -2.77 | fnl, Gizmy, leen, ryu, shield    |
|           23 |     2463 | 2024-09-24 | Rhyno            | W   | 0.319      | -            | -                | -                | 0 (0.000) |     3.53 | fnl, Gizmy, leen, ryu, shield    |
|           22 |     2567 | 2024-09-20 | Passion UA       | W   | 0.293      | 0.435        | 0.103 (0.013)    | 0.772 (0.098)    | 0 (0.000) |     7.48 | fnl, Gizmy, leen, ryu, shield    |
|           21 |     2649 | 2024-09-18 | Zero Tenacity    | W   | 0.278      | 0.435        | 0.078 (0.009)    | 0.715 (0.086)    | 0 (0.000) |     6.72 | fnl, Gizmy, leen, ryu, shield    |
|           20 |     2732 | 2024-09-15 | ALTERNATE aTTaX  | W   | 0.258      | 0.435        | 0.066 (0.007)    | 0.643 (0.072)    | -         |     6.36 | AiyvaN, fnl, Gizmy, leen, ryu    |
|           19 |     2746 | 2024-09-14 | AMKAL            | W   | 0.253      | -            | -                | -                | -         |     2.37 | AiyvaN, fnl, Gizmy, leen, ryu    |
|           18 |     2798 | 2024-09-13 | GamerLegion      | L   | 0.244      | -            | -                | -                | -         |    -4.22 | AiyvaN, fnl, Gizmy, leen, ryu    |
|           17 |     2874 | 2024-09-10 | SovvyKiNG        | W   | 0.227      | -            | -                | -                | -         |     1.34 | fnl, Gizmy, leen, ryu, shield    |
|           16 |     2883 | 2024-09-10 | CYBERSHOKE       | W   | 0.225      | 0.435        | -                | 0.565 (0.055)    | -         |     3.61 | fnl, Gizmy, leen, ryu, shield    |
|           15 |     2901 | 2024-09-09 | ALASKA           | W   | 0.219      | 0.143        | 0.052 (0.002)    | -                | -         |     4.51 | fnl, Gizmy, leen, ryu, shield    |
|           14 |     2907 | 2024-09-09 | GUN5             | L   | 0.218      | -            | -                | -                | -         |    -1.42 | fnl, Gizmy, leen, ryu, shield    |
|           13 |     2963 | 2024-09-07 | Insilio          | W   | 0.205      | -            | -                | -                | -         |     2.87 | fnl, Gizmy, leen, ryu, shield    |
|           12 |     3049 | 2024-09-04 | Chimera          | W   | 0.187      | 0.435        | 0.044 (0.004)    | 0.806 (0.065)    | -         |     3.74 | fnl, Gizmy, leen, ryu, shield    |
|           11 |     3089 | 2024-09-03 | EYEBALLERS       | L   | 0.179      | -            | -                | -                | -         |    -2.60 | fnl, Gizmy, leen, ryu, shield    |
|           10 |     3127 | 2024-09-01 | CPH Wolves       | W   | 0.167      | -            | -                | -                | -         |     2.13 | fnl, Gizmy, leen, ryu, shield    |
|            9 |     3270 | 2024-08-28 | ALTERNATE aTTaX  | L   | 0.138      | -            | -                | -                | -         |    -0.86 | fnl, Gizmy, leen, ryu, shield    |
|            8 |     3309 | 2024-08-27 | TSM              | W   | 0.133      | 0.435        | 0.030 (0.002)    | -                | -         |     2.31 | fnl, Gizmy, leen, ryu, shield    |
|            7 |     3431 | 2024-08-25 | PARIVISION       | W   | 0.121      | -            | -                | -                | -         |     2.08 | fnl, Gizmy, leen, ryu, shield    |
|            6 |     3619 | 2024-08-20 | Revenant         | W   | 0.087      | -            | -                | -                | -         |     0.92 | fnl, Gizmy, leen, ryu, shield    |
|            5 |     3690 | 2024-08-17 | Insilio          | W   | 0.068      | -            | -                | -                | -         |     0.94 | fnl, Gizmy, leen, ryu, shield    |
|            4 |     3723 | 2024-08-16 | los kogutos      | L   | 0.059      | -            | -                | -                | -         |    -0.25 | AiyvaN, fnl, leen, ryu, shield   |
|            3 |     3819 | 2024-08-13 | ALTERNATE aTTaX  | W   | 0.038      | -            | -                | -                | -         |     0.98 | fnl, Gizmy, leen, ryu, shield    |
|            2 |     3866 | 2024-08-12 | Preasy           | W   | 0.032      | -            | -                | -                | -         |     0.10 | fnl, Gizmy, leen, ryu, shield    |
|            1 |     3938 | 2024-08-09 | HAVU             | L   | 0.012      | -            | -                | -                | -         |    -0.33 | fnl, Gizmy, leen, ryu, shield    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,385.67)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      0.906 | $3,000.00      | $2,717.72       |
| 2024-12-04 |      0.793 | $5,000.00      | $3,966.15       |
| 2024-08-28 |      0.140 | $5,000.00      | $701.81         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
