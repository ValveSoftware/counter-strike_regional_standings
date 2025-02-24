### Roster Details<br />
Team Name: Kosovo<br />
Roster: BledarD, Caleyy, deb0, Dementor, HYPERI1<br />
Global Rank: [270](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [156]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  489.3<br />
<br />
Final Rank Value (489.3) = Starting Rank Value (507.4) + Head To Head Adjustments (-18.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.4
- 400 + ( ( 0.056 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 507.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1402 | 2024-11-15 | Chile            | L   | 0.525      | -            | -                | -                | -         |    -9.01 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           14 |     1408 | 2024-11-15 | Hungary          | L   | 0.525      | -            | -                | -                | -         |    -3.18 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           13 |     1453 | 2024-11-14 | GTZ              | L   | 0.518      | -            | -                | -                | -         |    -0.71 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           12 |     1458 | 2024-11-14 | ALTERNATE aTTaX  | L   | 0.518      | -            | -                | -                | -         |    -2.12 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           11 |     1465 | 2024-11-14 | Jordan           | L   | 0.517      | -            | -                | -                | -         |    -9.95 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           10 |     2613 | 2024-09-28 | FLuffy Gangsters | L   | 0.203      | -            | -                | -                | -         |    -1.83 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            9 |     2660 | 2024-09-27 | Dark Cloud       | W   | 0.196      | 0.143        | 0.027 (0.001)    | 0.412 (0.012)    | 0 (0.000) |     4.84 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            8 |     2702 | 2024-09-26 | FLuffy Gangsters | L   | 0.191      | -            | -                | -                | -         |    -1.69 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            7 |     2958 | 2024-09-19 | ALTERNATE aTTaX  | L   | 0.144      | -            | -                | -                | -         |    -0.51 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            6 |     3017 | 2024-09-17 | 9 Pandas         | L   | 0.132      | -            | -                | -                | -         |    -0.31 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            5 |     3048 | 2024-09-16 | Insilio          | L   | 0.124      | -            | -                | -                | -         |    -1.03 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            4 |     3106 | 2024-09-14 | TALON            | W   | 0.111      | 0.143        | 0.000 (0.000)    | 0.041 (0.001)    | 0 (0.000) |     1.92 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            3 |     3158 | 2024-09-12 | Alliance         | W   | 0.100      | 0.143        | 0.015 (0.000)    | 0.522 (0.007)    | 0 (0.000) |     2.78 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            2 |     3196 | 2024-09-11 | Nexus            | W   | 0.093      | 0.143        | 0.172 (0.002)    | 0.614 (0.008)    | 0 (0.000) |     2.85 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            1 |     3496 | 2024-09-01 | FAVBET           | L   | 0.023      | -            | -                | -                | -         |    -0.12 | BledarD, cerber, Dementor, HYPERI1, vAloN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
