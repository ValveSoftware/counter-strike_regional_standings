### Roster Details<br />
Team Name: LAG<br />
Roster: Andrew, brett, mason, Sandman, Wolffe<br />
Global Rank: [105](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [24]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  781.9<br />
<br />
Final Rank Value (781.9) = Starting Rank Value (793.3) + Head To Head Adjustments (-11.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.349[<sup>1</sup>](#table2)
- Bounty Collected: 0.284[<sup>2</sup>](#table1)
- Opponent Network: 0.086[<sup>2</sup>](#table1)
- LAN Wins: 0.111[<sup>2</sup>](#table1)

The average of these factors is 0.208<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 793.3
- 400 + ( ( 0.208 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 793.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           57 |       37 | 2025-07-30 | Wildcard            | L   | 1.000      | -            | -                | -                | -         |    -7.12 | Andrew, brett, mason, Sandman, Wolffe |
|           56 |       48 | 2025-07-28 | MIGHT               | W   | 1.000      | 0.384        | -                | 0.279 (0.107)    | 0 (0.000) |     8.98 | Andrew, brett, mason, Sandman, Wolffe |
|           55 |      105 | 2025-07-26 | Marsborne           | L   | 1.000      | -            | -                | -                | -         |    -9.53 | Andrew, brett, mason, Sandman, Wolffe |
|           54 |      128 | 2025-07-24 | Party Astronauts    | W   | 1.000      | 0.384        | 0.004 (0.002)    | 0.310 (0.119)    | 0 (0.000) |    13.09 | brett, consti, mason, Sandman, Wolffe |
|           53 |      191 | 2025-07-19 | Marsborne           | L   | 1.000      | -            | -                | -                | -         |    -9.52 | brett, consti, mason, Sandman, Wolffe |
|           52 |      221 | 2025-07-18 | Derpy diamond dudes | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.25 | brett, consti, mason, Sandman, Wolffe |
|           51 |      229 | 2025-07-18 | Marsborne           | L   | 1.000      | -            | -                | -                | -         |    -9.88 | brett, consti, mason, Sandman, Wolffe |
|           50 |      337 | 2025-07-13 | BLUEJAYS            | L   | 1.000      | -            | -                | -                | -         |    -8.26 | brett, consti, mason, Sandman, Wolffe |
|           49 |      354 | 2025-07-12 | Lycus Empire        | W   | 1.000      | 0.143        | 0.006 (0.001)    | -                | 0 (0.000) |    14.72 | brett, consti, mason, Sandman, Wolffe |
|           48 |      356 | 2025-07-12 | Getting Info        | L   | 1.000      | -            | -                | -                | -         |   -12.87 | brett, consti, mason, Sandman, Wolffe |
|           47 |      387 | 2025-07-11 | Party Astronauts    | W   | 1.000      | -            | -                | -                | 0 (0.000) |    13.25 | brett, consti, mason, Sandman, Wolffe |
|           46 |      533 | 2025-06-29 | Getting Info        | L   | 0.963      | -            | -                | -                | -         |   -13.71 | brett, consti, mason, Sandman, Wolffe |
|           45 |      549 | 2025-06-26 | BLUEJAYS            | W   | 0.943      | 0.333        | 0.036 (0.011)    | 0.817 (0.257)    | 0 (0.000) |    22.16 | brett, consti, mason, Sandman, Wolffe |
|           44 |      653 | 2025-06-17 | MIGHT               | W   | 0.883      | 0.333        | -                | 0.279 (0.082)    | 0 (0.000) |     8.94 | brett, consti, mason, Sandman, Wolffe |
|           43 |      686 | 2025-06-15 | Getting Info        | L   | 0.870      | -            | -                | -                | -         |   -12.71 | brett, consti, mason, Sandman, Wolffe |
|           42 |      709 | 2025-06-14 | Tsunami             | W   | 0.863      | 0.333        | -                | 0.208 (0.060)    | 0 (0.000) |     8.60 | brett, consti, mason, Sandman, Wolffe |
|           41 |      812 | 2025-06-11 | Party Astronauts    | L   | 0.843      | -            | -                | -                | -         |   -13.67 | brett, consti, mason, Sandman, Wolffe |
|           40 |      843 | 2025-06-09 | Wanted Goons        | W   | 0.829      | 0.333        | -                | 0.166 (0.046)    | 0 (0.000) |     7.19 | brett, consti, mason, Sandman, Wolffe |
|           39 |      947 | 2025-06-01 | Akimbo              | W   | 0.776      | 0.303        | 0.007 (0.002)    | 0.221 (0.052)    | 0 (0.000) |     8.28 | brett, consti, mason, Sandman, Wolffe |
|           38 |     1432 | 2025-05-07 | Legacy              | L   | 0.609      | -            | -                | -                | -         |    -1.23 | brett, consti, mason, Sandman, Seb    |
|           37 |     1464 | 2025-05-06 | BLUEJAYS            | L   | 0.603      | -            | -                | -                | -         |    -4.82 | brett, consti, mason, Sandman, Seb    |
|           36 |     1714 | 2025-04-26 | Ninjas in Pyjamas   | L   | 0.537      | -            | -                | -                | -         |    -0.43 | brett, consti, mason, Sandman, Seb    |
|           35 |     1973 | 2025-04-13 | JERSA               | L   | 0.450      | -            | -                | -                | -         |    -9.68 | brett, consti, mason, Sandman, Seb    |
|           34 |     2024 | 2025-04-10 | Chicken Coop        | L   | 0.429      | -            | -                | -                | -         |    -7.70 | brett, consti, mason, Sandman, Seb    |
|           33 |     2035 | 2025-04-09 | Akimbo              | W   | 0.423      | 0.477        | 0.007 (0.001)    | 0.221 (0.044)    | -         |     4.46 | brett, consti, mason, Sandman, Seb    |
|           32 |     2041 | 2025-04-09 | Akimbo              | W   | 0.423      | 0.477        | 0.007 (0.001)    | 0.221 (0.044)    | -         |     4.61 | brett, consti, mason, Sandman, Seb    |
|           31 |     2087 | 2025-04-08 | Fisher College      | L   | 0.416      | -            | -                | -                | -         |    -8.41 | brett, consti, mason, Sandman, Seb    |
|           30 |     2249 | 2025-04-02 | InControl           | W   | 0.376      | -            | -                | -                | -         |     2.48 | brett, consti, mason, Sandman, Seb    |
|           29 |     2256 | 2025-04-02 | InControl           | W   | 0.376      | -            | -                | -                | -         |     2.54 | brett, consti, mason, Sandman, Seb    |
|           28 |     2315 | 2025-04-01 | BLUEJAYS            | L   | 0.370      | -            | -                | -                | -         |    -3.01 | brett, consti, mason, Sandman, Seb    |
|           27 |     2325 | 2025-04-01 | BLUEJAYS            | L   | 0.369      | -            | -                | -                | -         |    -3.09 | brett, consti, mason, Sandman, Seb    |
|           26 |     2409 | 2025-03-29 | Mythic              | L   | 0.349      | -            | -                | -                | -         |    -9.19 | brett, consti, mason, Sandman, Seb    |
|           25 |     2419 | 2025-03-29 | Aether              | W   | 0.349      | -            | -                | -                | -         |     1.05 | brett, consti, mason, Sandman, Seb    |
|           24 |     2477 | 2025-03-28 | M80                 | L   | 0.343      | -            | -                | -                | -         |    -1.09 | brett, consti, mason, Sandman, Seb    |
|           23 |     2549 | 2025-03-27 | Mythic              | W   | 0.336      | -            | -                | -                | -         |     1.65 | brett, consti, mason, Sandman, Seb    |
|           22 |     2612 | 2025-03-26 | Chicken Coop        | W   | 0.330      | -            | -                | -                | -         |     4.85 | brett, consti, mason, Sandman, Seb    |
|           21 |     2618 | 2025-03-26 | Chicken Coop        | W   | 0.329      | -            | -                | -                | -         |     4.99 | brett, consti, mason, Sandman, Seb    |
|           20 |     2658 | 2025-03-25 | Lycus Empire        | L   | 0.323      | -            | -                | -                | -         |    -5.39 | brett, consti, mason, Sandman, Seb    |
|           19 |     2663 | 2025-03-25 | Lycus Empire        | W   | 0.323      | 0.477        | 0.006 (0.001)    | -                | -         |     4.88 | brett, consti, mason, Sandman, Seb    |
|           18 |     2854 | 2025-03-18 | Aether              | L   | 0.276      | -            | -                | -                | -         |    -5.84 | brett, Cyrix, mason, Sandman, Seb     |
|           17 |     2860 | 2025-03-18 | Aether              | W   | 0.276      | 0.477        | -                | 0.378 (0.050)    | -         |     2.90 | brett, Cyrix, mason, Sandman, Seb     |
|           16 |     3147 | 2025-03-08 | Fisher College      | L   | 0.208      | -            | -                | -                | -         |    -5.52 | brett, Cyrix, mason, Sandman, Seb     |
|           15 |     3221 | 2025-03-07 | Wildcard            | L   | 0.202      | -            | -                | -                | -         |    -1.88 | brett, Cyrix, mason, Sandman, Seb     |
|           14 |     3281 | 2025-03-06 | Marsborne           | W   | 0.196      | -            | -                | -                | -         |     3.97 | brett, Cyrix, mason, Sandman, Seb     |
|           13 |     3325 | 2025-03-05 | Akimbo              | W   | 0.190      | -            | -                | -                | -         |     1.62 | brett, Cyrix, mason, Sandman, Seb     |
|           12 |     3496 | 2025-02-26 | Getting Info        | W   | 0.143      | 0.477        | 0.017 (0.001)    | -                | -         |     2.19 | brett, Cyrix, mason, Sandman, Seb     |
|           11 |     3502 | 2025-02-26 | Getting Info        | L   | 0.143      | -            | -                | -                | -         |    -2.34 | brett, Cyrix, mason, Sandman, Seb     |
|           10 |     3551 | 2025-02-25 | Marsborne           | W   | 0.136      | -            | -                | -                | -         |     2.78 | brett, Cyrix, mason, Sandman, Seb     |
|            9 |     3557 | 2025-02-25 | Marsborne           | L   | 0.136      | -            | -                | -                | -         |    -1.53 | brett, Cyrix, mason, Sandman, Seb     |
|            8 |     3723 | 2025-02-19 | Legacy              | W   | 0.095      | 0.477        | 0.113 (0.005)    | -                | -         |     2.87 | brett, Cyrix, mason, Sandman, Seb     |
|            7 |     3724 | 2025-02-19 | Legacy              | W   | 0.095      | 0.477        | 0.113 (0.005)    | -                | -         |     2.87 | brett, Cyrix, mason, Sandman, Seb     |
|            6 |     3748 | 2025-02-18 | Worms               | L   | 0.090      | -            | -                | -                | -         |    -2.10 | brett, Cyrix, mason, Sandman, Seb     |
|            5 |     3752 | 2025-02-18 | Worms               | W   | 0.089      | -            | -                | -                | -         |     0.73 | brett, Cyrix, mason, Sandman, Seb     |
|            4 |     3960 | 2025-02-10 | Immigrants peek     | L   | 0.036      | -            | -                | -                | -         |    -0.96 | brett, Cyrix, mason, Sandman, Seb     |
|            3 |     4003 | 2025-02-09 | Aether              | W   | 0.028      | -            | -                | -                | -         |     0.32 | brett, Cyrix, mason, Sandman, Seb     |
|            2 |     4040 | 2025-02-08 | BLUEJAYS            | L   | 0.022      | -            | -                | -                | -         |    -0.18 | brett, Cyrix, mason, Sandman, Seb     |
|            1 |     4049 | 2025-02-08 | Immigrants peek     | W   | 0.021      | -            | -                | -                | -         |     0.10 | brett, Cyrix, mason, Sandman, Seb     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,980.60)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-30 |      0.969 | $1,000.00      | $969.39         |
| 2025-06-01 |      0.776 | $4,000.00      | $3,102.88       |
| 2025-05-11 |      0.636 | $3,000.00      | $1,908.33       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
