### Roster Details<br />
Team Name: Elevate<br />
Roster: desh, diozera, short, skr, zede<br />
Global Rank: [121](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_27.md)<br />
Regional Rank: [30]( ../../standings_americas_2025_01_27.md)<br />
<br />
Final Rank Value:  805.0<br />
<br />
Final Rank Value (805.0) = Starting Rank Value (739.5) + Head To Head Adjustments (65.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.319[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.081[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.174<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 739.5
- 400 + ( ( 0.174 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 739.5


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
|           19 |       87 | 2025-01-23 | RED Canids      | L   | 1.000      | -            | -                | -                | -         |    -9.06 | desh, diozera, short, skr, zede       |
|           18 |       93 | 2025-01-23 | RED Canids      | W   | 1.000      | 0.450        | 0.069 (0.031)    | 0.322 (0.145)    | 0 (0.000) |    22.95 | desh, diozera, short, skr, zede       |
|           17 |      182 | 2025-01-21 | Yawara          | W   | 1.000      | 0.450        | 0.005 (0.002)    | 0.386 (0.174)    | 0 (0.000) |    12.30 | desh, diozera, short, skr, zede       |
|           16 |      187 | 2025-01-21 | Yawara          | W   | 1.000      | 0.450        | 0.005 (0.002)    | 0.386 (0.174)    | 0 (0.000) |    13.39 | desh, diozera, short, skr, zede       |
|           15 |      234 | 2025-01-10 | BESTIA          | L   | 1.000      | -            | -                | -                | -         |    -3.82 | desh, fREQ, Leomonster, short, zede   |
|           14 |      246 | 2025-01-09 | 9z Academy      | W   | 1.000      | 0.384        | -                | 0.273 (0.105)    | 0 (0.000) |     7.40 | desh, fREQ, Leomonster, short, zede   |
|           13 |      354 | 2024-12-18 | LaChampionsLiga | W   | 0.934      | 0.143        | 0.009 (0.001)    | 0.129 (0.017)    | 0 (0.000) |     9.15 | Alisson, desh, Leomonster, short, skr |
|           12 |      374 | 2024-12-16 | UNO MILLE       | W   | 0.921      | 0.143        | 0.016 (0.002)    | 0.444 (0.058)    | 0 (0.000) |    15.33 | Alisson, desh, Leomonster, short, skr |
|           11 |      446 | 2024-12-13 | GameHunters     | W   | 0.899      | 0.143        | 0.002 (0.000)    | 0.458 (0.059)    | 0 (0.000) |    15.29 | Alisson, desh, Leomonster, short, skr |
|           10 |      767 | 2024-11-27 | Tropa do Taco   | L   | 0.793      | -            | -                | -                | -         |    -8.54 | Alisson, desh, Leomonster, short, skr |
|            9 |      942 | 2024-11-17 | Tropa do Taco   | L   | 0.729      | -            | -                | -                | -         |    -9.08 | Alisson, desh, Leomonster, short, skr |
|            8 |     1229 | 2024-11-06 | GameHunters     | L   | 0.654      | -            | -                | -                | -         |    -9.91 | Alisson, desh, Leomonster, short, skr |
|            7 |     1856 | 2024-10-06 | MIBR Academy    | W   | 0.448      | 0.270        | 0.003 (0.000)    | 0.200 (0.024)    | 0 (0.000) |     5.45 | Alisson, desh, Leomonster, short, skr |
|            6 |     2171 | 2024-09-27 | Case            | L   | 0.388      | -            | -                | -                | -         |    -6.29 | Alisson, desh, Leomonster, short, skr |
|            5 |     2174 | 2024-09-27 | GameHunters     | W   | 0.388      | 0.143        | 0.002 (0.000)    | 0.458 (0.025)    | 0 (0.000) |     5.99 | Alisson, desh, Leomonster, short, skr |
|            4 |     2829 | 2024-09-07 | MIBR Academy    | W   | 0.253      | 0.270        | 0.003 (0.000)    | -                | 0 (0.000) |     3.17 | Alisson, desh, Leomonster, short, skr |
|            3 |     2850 | 2024-09-06 | Yawara          | W   | 0.247      | 0.270        | 0.005 (0.000)    | 0.386 (0.026)    | -         |     3.98 | Alisson, desh, Leomonster, short, skr |
|            2 |     2992 | 2024-09-02 | Solid           | L   | 0.220      | -            | -                | -                | -         |    -2.03 | Alisson, desh, Leomonster, short, skr |
|            1 |     4086 | 2024-08-01 | Case            | L   | 0.008      | -            | -                | -                | -         |    -0.13 | Alisson, desh, Leomonster, short, skr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,502.58)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-17 |      0.729 | $523.00        | $381.03         |
| 2024-10-06 |      0.448 | $1,600.00      | $716.43         |
| 2024-09-07 |      0.253 | $1,600.00      | $405.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
