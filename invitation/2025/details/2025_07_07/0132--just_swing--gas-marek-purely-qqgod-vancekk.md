### Roster Details<br />
Team Name: Just Swing<br />
Roster: gas, Marek, Purely, qqGOD, VanceKK<br />
Global Rank: [132](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_07_07.md)<br />
Regional Rank: [19]( ../../standings_asia_2025_07_07.md)<br />
<br />
Final Rank Value:  695.8<br />
<br />
Final Rank Value (695.8) = Starting Rank Value (719.7) + Head To Head Adjustments (-23.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.256[<sup>1</sup>](#table2)
- Bounty Collected: 0.253[<sup>2</sup>](#table1)
- Opponent Network: 0.029[<sup>2</sup>](#table1)
- LAN Wins: 0.147[<sup>2</sup>](#table1)

The average of these factors is 0.171<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 719.7
- 400 + ( ( 0.171 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 719.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |     1134 | 2025-04-29 | FengDa            | L   | 0.739      | -            | -                | -                | -         |   -10.16 | gas, Marek, Purely, qqGOD, VanceKK |
|           37 |     1174 | 2025-04-27 | Chinggis Warriors | L   | 0.725      | -            | -                | -                | -         |    -3.35 | gas, Marek, Purely, qqGOD, VanceKK |
|           36 |     1216 | 2025-04-26 | Rare Atom         | L   | 0.717      | -            | -                | -                | -         |    -1.16 | gas, Marek, Purely, qqGOD, VanceKK |
|           35 |     1301 | 2025-04-20 | XDM               | W   | 0.678      | 0.143        | 0.002 (0.000)    | -                | 1 (0.678) |     9.20 | gas, Marek, Purely, qqGOD, VanceKK |
|           34 |     1370 | 2025-04-17 | Change The Game   | W   | 0.658      | 0.143        | 0.000 (0.000)    | 0.090 (0.008)    | 1 (0.658) |     6.90 | gas, Marek, Purely, qqGOD, VanceKK |
|           33 |     1546 | 2025-04-09 | Rare Atom         | L   | 0.604      | -            | -                | -                | -         |    -0.85 | gas, Marek, Purely, qqGOD, VanceKK |
|           32 |     1547 | 2025-04-09 | Rare Atom         | L   | 0.604      | -            | -                | -                | -         |    -0.86 | gas, Marek, Purely, qqGOD, VanceKK |
|           31 |     1583 | 2025-04-08 | Chinggis Warriors | W   | 0.599      | 0.417        | 0.033 (0.008)    | 0.551 (0.138)    | 0 (0.000) |    16.94 | gas, Marek, Purely, qqGOD, VanceKK |
|           30 |     1585 | 2025-04-08 | Chinggis Warriors | L   | 0.599      | -            | -                | -                | -         |    -1.85 | gas, Marek, Purely, qqGOD, VanceKK |
|           29 |     1764 | 2025-04-02 | Lynn Vision       | L   | 0.559      | -            | -                | -                | -         |    -0.36 | gas, Marek, Purely, qqGOD, VanceKK |
|           28 |     1772 | 2025-04-02 | Lynn Vision       | L   | 0.558      | -            | -                | -                | -         |    -0.36 | gas, Marek, Purely, qqGOD, VanceKK |
|           27 |     1817 | 2025-04-01 | The Huns          | L   | 0.552      | -            | -                | -                | -         |    -2.81 | gas, Marek, Purely, qqGOD, VanceKK |
|           26 |     1823 | 2025-04-01 | The Huns          | L   | 0.552      | -            | -                | -                | -         |    -2.89 | gas, Marek, Purely, qqGOD, VanceKK |
|           25 |     2004 | 2025-03-28 | Shika             | L   | 0.524      | -            | -                | -                | -         |    -9.86 | gas, Marek, Purely, qqGOD, VanceKK |
|           24 |     2070 | 2025-03-27 | TYLOO             | L   | 0.518      | -            | -                | -                | -         |    -0.33 | gas, Marek, Purely, qqGOD, VanceKK |
|           23 |     2111 | 2025-03-26 | THE               | L   | 0.512      | -            | -                | -                | -         |    -8.75 | gas, Marek, Purely, qqGOD, VanceKK |
|           22 |     2119 | 2025-03-26 | THE               | L   | 0.512      | -            | -                | -                | -         |    -9.15 | gas, Marek, Purely, qqGOD, VanceKK |
|           21 |     2153 | 2025-03-25 | FengDa            | L   | 0.506      | -            | -                | -                | -         |    -8.16 | gas, Marek, Purely, qqGOD, VanceKK |
|           20 |     2163 | 2025-03-25 | FengDa            | W   | 0.505      | 0.417        | 0.004 (0.001)    | 0.188 (0.040)    | 0 (0.000) |     7.93 | gas, Marek, Purely, qqGOD, VanceKK |
|           19 |     2314 | 2025-03-19 | harizma           | W   | 0.466      | 0.417        | 0.000 (0.000)    | 0.067 (0.013)    | 0 (0.000) |     3.69 | gas, Marek, Purely, qqGOD, VanceKK |
|           18 |     2319 | 2025-03-19 | harizma           | W   | 0.465      | 0.417        | 0.000 (0.000)    | 0.067 (0.013)    | 0 (0.000) |     3.81 | gas, Marek, Purely, qqGOD, VanceKK |
|           17 |     2478 | 2025-03-12 | Gods Reign        | W   | 0.419      | 0.417        | 0.004 (0.001)    | 0.185 (0.032)    | 0 (0.000) |     6.64 | gas, Marek, Purely, qqGOD, VanceKK |
|           16 |     2480 | 2025-03-12 | Gods Reign        | W   | 0.419      | 0.417        | 0.004 (0.001)    | 0.185 (0.032)    | 0 (0.000) |     6.89 | gas, Marek, Purely, qqGOD, VanceKK |
|           15 |     3005 | 2025-02-26 | ROSY              | L   | 0.326      | -            | -                | -                | -         |    -5.30 | gas, Marek, Purely, qqGOD, VanceKK |
|           14 |     3007 | 2025-02-26 | ROSY              | L   | 0.325      | -            | -                | -                | -         |    -5.45 | gas, Marek, Purely, qqGOD, VanceKK |
|           13 |     3057 | 2025-02-25 | NinJa             | L   | 0.317      | -            | -                | -                | -         |    -4.10 | gas, Marek, Purely, qqGOD, VanceKK |
|           12 |     3079 | 2025-02-24 | Shika             | L   | 0.312      | -            | -                | -                | -         |    -6.25 | gas, Marek, Purely, qqGOD, VanceKK |
|           11 |     3466 | 2025-02-09 | Rooster           | L   | 0.217      | -            | -                | -                | -         |    -3.16 | gas, Marek, Purely, qqGOD, VanceKK |
|           10 |     3498 | 2025-02-09 | SemperFi          | L   | 0.211      | -            | -                | -                | -         |    -2.66 | gas, Marek, Purely, qqGOD, VanceKK |
|            9 |     3563 | 2025-02-08 | DXA               | W   | 0.204      | -            | -                | -                | 0 (0.000) |     0.91 | gas, Marek, Purely, qqGOD, VanceKK |
|            8 |     3839 | 2025-01-24 | TYLOO             | L   | 0.106      | -            | -                | -                | -         |    -0.06 | gas, Marek, Purely, qqGOD, VanceKK |
|            7 |     3845 | 2025-01-24 | TYLOO             | L   | 0.106      | -            | -                | -                | -         |    -0.06 | gas, Marek, Purely, qqGOD, VanceKK |
|            6 |     3875 | 2025-01-23 | The QUBE          | W   | 0.099      | 0.417        | -                | 0.080 (0.003)    | 0 (0.000) |     0.78 | gas, Marek, Purely, qqGOD, VanceKK |
|            5 |     3879 | 2025-01-23 | The QUBE          | W   | 0.099      | 0.417        | -                | 0.080 (0.003)    | -         |     0.78 | gas, Marek, Purely, qqGOD, VanceKK |
|            4 |     3906 | 2025-01-22 | NomadS            | L   | 0.092      | -            | -                | -                | -         |    -1.90 | gas, Marek, Purely, qqGOD, VanceKK |
|            3 |     3911 | 2025-01-22 | NomadS            | W   | 0.092      | 0.417        | 0.002 (0.000)    | -                | -         |     1.01 | gas, Marek, Purely, qqGOD, VanceKK |
|            2 |     3939 | 2025-01-21 | NinJa             | L   | 0.086      | -            | -                | -                | -         |    -1.15 | gas, Marek, Purely, qqGOD, VanceKK |
|            1 |     3944 | 2025-01-21 | NinJa             | W   | 0.085      | 0.417        | 0.013 (0.000)    | 0.190 (0.007)    | -         |     1.56 | gas, Marek, Purely, qqGOD, VanceKK |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($617.43)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-04 |      0.772 | $800.00        | $617.43         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
