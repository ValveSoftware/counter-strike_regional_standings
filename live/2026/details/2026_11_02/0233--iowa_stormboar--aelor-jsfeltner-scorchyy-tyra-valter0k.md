### Roster Details<br />
Team Name: Iowa Stormboar<br />
Roster: aelor, jsfeltner, Scorchyy, TyRa, Valter0k<br />
Global Rank: [233](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_11_02.md)<br />
Regional Rank: [47]( ../../standings_americas_2026_11_02.md)<br />
<br />
Final Rank Value:  660.3<br />
<br />
Final Rank Value (660.3) = Starting Rank Value (636.6) + Head To Head Adjustments (23.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.257[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 636.6
- 400 + ( ( 0.126 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 636.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1316 | 2026-09-29 | Without a Roof  | L   | 0.976      | -            | -                | -                | -         |    -3.32 | H0NeST, jsfeltner, Scorchyy, TyRa, Valter0k  |
|           13 |     1596 | 2026-09-24 | Club 333        | W   | 0.943      | 0.363        | 0.005 (0.002)    | 0.119 (0.041)    | 0 (0.000) |    14.01 | aelor, jsfeltner, Scorchyy, TyRa, Valter0k   |
|           12 |     2143 | 2026-09-12 | LAG             | L   | 0.862      | -            | -                | -                | -         |    -2.73 | aelor, false, Scorchyy, TyRa, Valter0k       |
|           11 |     2858 | 2026-08-28 | EMPIRE          | L   | 0.763      | -            | -                | -                | -         |   -11.87 | aelor, false, Scorchyy, TyRa, Valter0k       |
|           10 |     2908 | 2026-08-27 | Villainous      | W   | 0.756      | 0.363        | 0.002 (0.000)    | 0.252 (0.069)    | 0 (0.000) |    13.40 | aelor, false, Scorchyy, TyRa, Valter0k       |
|            9 |     2951 | 2026-08-26 | Marsborne       | L   | 0.749      | -            | -                | -                | -         |    -4.83 | aelor, false, Scorchyy, TyRa, Valter0k       |
|            8 |     3002 | 2026-08-25 | Shimmer         | W   | 0.743      | 0.363        | 0.004 (0.001)    | 0.010 (0.003)    | 0 (0.000) |    10.98 | aelor, false, Scorchyy, TyRa, Valter0k       |
|            7 |     4686 | 2026-06-14 | Marsborne       | L   | 0.262      | -            | -                | -                | -         |    -1.72 | aelor, H0NeST, jsfeltner, Scorchyy, TyRa     |
|            6 |     4688 | 2026-06-14 | Festina Lente   | W   | 0.261      | 0.303        | 0.000 (0.000)    | 0.016 (0.001)    | 0 (0.000) |     3.40 | aelor, H0NeST, jsfeltner, Scorchyy, TyRa     |
|            5 |     4713 | 2026-06-13 | DETONATE        | W   | 0.255      | 0.303        | 0.001 (0.000)    | 0.042 (0.003)    | 0 (0.000) |     3.71 | aelor, dopplahs, H0NeST, jsfeltner, Scorchyy |
|            4 |     4716 | 2026-06-13 | Overtake Sector | W   | 0.255      | 0.303        | 0.023 (0.002)    | 0.460 (0.036)    | 0 (0.000) |     5.17 | aelor, dopplahs, H0NeST, jsfeltner, Scorchyy |
|            3 |     4765 | 2026-06-12 | Club 333        | W   | 0.249      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.66 | aelor, H0NeST, jsfeltner, Scorchyy, TyRa     |
|            2 |     4797 | 2026-06-11 | DETONATE        | L   | 0.243      | -            | -                | -                | -         |    -4.12 | aelor, H0NeST, jsfeltner, Scorchyy, TyRa     |
|            1 |     5244 | 2026-05-26 | M80             | L   | 0.136      | -            | -                | -                | -         |    -0.04 | BiNoX, calamity, jsfeltner, Scorchyy, TyRa   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($696.63)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-13 |      0.870 | $500.00        | $434.83         |
| 2026-06-14 |      0.262 | $1,000.00      | $261.80         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
