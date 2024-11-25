### Roster Details<br />
Team Name: Kosovo<br />
Roster: BledarD, Caleyy, deb0, Dementor, HYPERI1<br />
Global Rank: [158](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_25.md)<br />
Regional Rank: [108]( ../../standings_europe_2024_11_25.md)<br />
<br />
Final Rank Value:  709.7<br />
<br />
Final Rank Value (709.7) = Starting Rank Value (696.6) + Head To Head Adjustments (13.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.235[<sup>1</sup>](#table2)
- Bounty Collected: 0.306[<sup>2</sup>](#table1)
- Opponent Network: 0.037[<sup>2</sup>](#table1)
- LAN Wins: 0.014[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 696.6
- 400 + ( ( 0.148 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 696.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      197 | 2024-11-15 | Chile             | L   | 1.000      | -            | -                | -                | -         |   -19.92 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           30 |      203 | 2024-11-15 | Hungary           | L   | 1.000      | -            | -                | -                | -         |    -7.94 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           29 |      248 | 2024-11-14 | Rhyno             | L   | 1.000      | -            | -                | -                | -         |    -4.26 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           28 |      253 | 2024-11-14 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |    -6.59 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           27 |      260 | 2024-11-14 | Jordan            | L   | 1.000      | -            | -                | -                | -         |   -23.62 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           26 |     1410 | 2024-09-27 | Anonymo           | W   | 0.806      | 0.143        | 0.043 (0.005)    | 0.185 (0.021)    | 0 (0.000) |    12.76 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           25 |     1450 | 2024-09-26 | FLuffy Gangsters  | L   | 0.800      | -            | -                | -                | -         |   -12.91 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           24 |     1698 | 2024-09-19 | ALTERNATE aTTaX   | L   | 0.753      | -            | -                | -                | -         |    -3.29 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           23 |     1753 | 2024-09-17 | 9 Pandas          | L   | 0.741      | -            | -                | -                | -         |    -2.02 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           22 |     1784 | 2024-09-16 | Insilio           | L   | 0.733      | -            | -                | -                | -         |    -5.25 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           21 |     1842 | 2024-09-14 | TALON             | W   | 0.720      | 0.143        | -                | 0.228 (0.023)    | 0 (0.000) |     8.88 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           20 |     1892 | 2024-09-12 | Alliance          | W   | 0.709      | 0.143        | 0.029 (0.003)    | 0.459 (0.047)    | 0 (0.000) |    16.59 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           19 |     1929 | 2024-09-11 | Nexus             | W   | 0.702      | 0.143        | 0.267 (0.027)    | 0.669 (0.067)    | 0 (0.000) |    20.95 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           18 |     2226 | 2024-09-01 | FAVBET            | L   | 0.632      | -            | -                | -                | -         |    -5.17 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           17 |     2549 | 2024-08-24 | CPH Wolves        | L   | 0.580      | -            | -                | -                | -         |    -6.79 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           16 |     2707 | 2024-08-20 | ALTERNATE aTTaX   | W   | 0.554      | 0.143        | 0.070 (0.006)    | 0.729 (0.058)    | 0 (0.000) |    15.80 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           15 |     2749 | 2024-08-19 | Grannys Knockers  | W   | 0.546      | 0.143        | 0.001 (0.000)    | -                | 0 (0.000) |     6.64 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           14 |     2980 | 2024-08-11 | FLuffy Gangsters  | L   | 0.493      | -            | -                | -                | -         |    -7.65 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           13 |     3020 | 2024-08-09 | SINNERS           | L   | 0.481      | -            | -                | -                | -         |    -1.08 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           12 |     3094 | 2024-08-07 | Preasy            | W   | 0.467      | 0.435        | 0.003 (0.001)    | 0.136 (0.028)    | 0 (0.000) |     8.04 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           11 |     3175 | 2024-08-05 | Aurora Young Blud | L   | 0.453      | -            | -                | -                | -         |    -3.79 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           10 |     3204 | 2024-08-04 | CPH Wolves        | W   | 0.447      | 0.143        | 0.004 (0.000)    | 0.585 (0.037)    | 0 (0.000) |     9.27 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            9 |     3314 | 2024-08-01 | Alliance          | L   | 0.427      | -            | -                | -                | -         |    -2.61 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            8 |     3989 | 2024-07-14 | ECLOT             | W   | 0.309      | 0.143        | 0.187 (0.008)    | 1.000 (0.044)    | -         |     9.59 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            7 |     3992 | 2024-07-14 | ALTERNATE aTTaX   | W   | 0.309      | 0.143        | 0.070 (0.003)    | 0.729 (0.032)    | -         |     9.23 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            6 |     4000 | 2024-07-14 | ECLOT             | L   | 0.307      | -            | -                | -                | -         |    -0.13 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            5 |     4006 | 2024-07-13 | Portugal          | W   | 0.302      | -            | -                | -                | -         |     1.52 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            4 |     4100 | 2024-07-08 | Latvia            | W   | 0.268      | -            | -                | -                | -         |     5.81 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            3 |     4477 | 2024-06-08 | M1X KS            | L   | 0.068      | -            | -                | -                | -         |    -1.30 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            2 |     4488 | 2024-06-08 | ALTERNATE aTTaX   | W   | 0.067      | 0.337        | 0.070 (0.002)    | 0.729 (0.017)    | 1 (0.067) |     2.03 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            1 |     4545 | 2024-06-07 | plusW KS          | W   | 0.061      | -            | -                | -                | 1 (0.061) |     0.30 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($222.88)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
