### Roster Details<br />
Team Name: ENCE<br />
Roster: gla1ve, Neityu, podi, sdy, xKacpersky<br />
Global Rank: [33](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [24]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  1163.9<br />
<br />
Final Rank Value (1163.9) = Starting Rank Value (1157.9) + Head To Head Adjustments (6.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.675[<sup>1</sup>](#table2)
- Bounty Collected: 0.464[<sup>2</sup>](#table1)
- Opponent Network: 0.130[<sup>2</sup>](#table1)
- LAN Wins: 0.281[<sup>2</sup>](#table1)

The average of these factors is 0.388<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1157.9
- 400 + ( ( 0.388 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1157.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |      220 | 2025-01-15 | Falcons         | L   | 1.000      | -            | -                | -                | -         |    -1.48 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           23 |      398 | 2024-12-15 | Spirit Academy  | L   | 0.913      | -            | -                | -                | -         |   -18.05 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           22 |      411 | 2024-12-14 | AMKAL           | W   | 0.908      | 0.435        | 0.040 (0.016)    | 0.276 (0.109)    | 0 (0.000) |     3.82 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           21 |      462 | 2024-12-12 | Endpoint        | W   | 0.892      | 0.435        | 0.029 (0.011)    | 0.489 (0.190)    | 0 (0.000) |     3.18 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           20 |      807 | 2024-11-24 | Monte           | W   | 0.773      | 0.354        | 0.077 (0.021)    | 0.600 (0.164)    | 0 (0.000) |     8.67 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           19 |      829 | 2024-11-23 | Zero Tenacity   | W   | 0.767      | 0.354        | 0.081 (0.022)    | 0.719 (0.195)    | 0 (0.000) |     8.14 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           18 |     1144 | 2024-11-11 | 500             | L   | 0.686      | -            | -                | -                | -         |   -15.09 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           17 |     1184 | 2024-11-09 | Into the Breach | W   | 0.673      | 0.354        | 0.006 (0.001)    | 0.497 (0.118)    | 0 (0.000) |     4.20 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           16 |     1536 | 2024-10-20 | Falcons         | W   | 0.540      | 0.589        | 0.872 (0.277)    | 0.627 (0.199)    | 1 (0.540) |    16.33 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           15 |     1570 | 2024-10-19 | The MongolZ     | W   | 0.533      | 0.589        | 1.000 (0.314)    | 0.646 (0.203)    | 1 (0.533) |    16.38 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           14 |     1600 | 2024-10-18 | 9z              | W   | 0.527      | 0.589        | 0.054 (0.017)    | 0.178 (0.055)    | 1 (0.527) |     4.54 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           13 |     1625 | 2024-10-17 | Falcons         | L   | 0.519      | -            | -                | -                | -         |    -0.57 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           12 |     1633 | 2024-10-17 | 9z              | W   | 0.518      | 0.589        | 0.054 (0.017)    | 0.178 (0.054)    | 1 (0.518) |     4.52 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           11 |     2661 | 2024-09-13 | ATOX            | L   | 0.294      | -            | -                | -                | -         |    -3.42 | gla1ve, Goofy, Kylar, podi, sdy       |
|           10 |     2696 | 2024-09-12 | RED Canids      | L   | 0.286      | -            | -                | -                | -         |    -5.51 | gla1ve, Goofy, Kylar, podi, sdy       |
|            9 |     2760 | 2024-09-10 | Liquid          | L   | 0.273      | -            | -                | -                | -         |    -0.68 | gla1ve, Goofy, Kylar, podi, sdy       |
|            8 |     3043 | 2024-08-30 | Young Ninjas    | L   | 0.200      | -            | -                | -                | -         |    -5.84 | gla1ve, Goofy, Kylar, podi, sdy       |
|            7 |     3378 | 2024-08-23 | Monte           | L   | 0.152      | -            | -                | -                | -         |    -3.21 | gla1ve, Goofy, Kylar, podi, sdy       |
|            6 |     3395 | 2024-08-22 | ex-Enterprise   | W   | 0.146      | -            | -                | -                | 0 (0.000) |     0.71 | gla1ve, Goofy, Kylar, podi, sdy       |
|            5 |     3433 | 2024-08-21 | UNiTY           | L   | 0.140      | -            | -                | -                | -         |    -3.41 | gla1ve, Goofy, Kylar, podi, sdy       |
|            4 |     3485 | 2024-08-21 | Iberian Soul    | L   | 0.138      | -            | -                | -                | -         |    -3.38 | gla1ve, Goofy, Kylar, podi, sdy       |
|            3 |     3529 | 2024-08-19 | kONO            | L   | 0.126      | -            | -                | -                | -         |    -3.19 | gla1ve, Goofy, Kylar, podi, sdy       |
|            2 |     3959 | 2024-08-05 | PARIVISION      | L   | 0.032      | -            | -                | -                | -         |    -0.87 | gla1ve, Goofy, Kylar, podi, sdy       |
|            1 |     3980 | 2024-08-04 | 9INE            | W   | 0.027      | 0.435        | 0.125 (0.001)    | 1.000 (0.012)    | -         |     0.23 | gla1ve, Goofy, Kylar, podi, sdy       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($67,570.89)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.33) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.913 | $5,000.00      | $4,566.78       |
| 2024-11-24 |      0.773 | $9,000.00      | $6,953.87       |
| 2024-11-12 |      0.693 | $1,000.00      | $693.09         |
| 2024-10-20 |      0.540 | $100,000.00    | $54,037.82      |
| 2024-09-22 |      0.354 | $3,500.00      | $1,239.19       |
| 2024-08-06 |      0.040 | $2,000.00      | $80.15          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
