### Roster Details<br />
Team Name: Kosovo<br />
Roster: BledarD, Caleyy, deb0, Dementor, HYPERI1<br />
Global Rank: [175](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_02.md)<br />
Regional Rank: [116]( ../../standings_europe_2024_12_02.md)<br />
<br />
Final Rank Value:  691.0<br />
<br />
Final Rank Value (691.0) = Starting Rank Value (677.3) + Head To Head Adjustments (13.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.211[<sup>1</sup>](#table2)
- Bounty Collected: 0.304[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.004[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 677.3
- 400 + ( ( 0.138 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 677.3


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
|           31 |      330 | 2024-11-15 | Chile             | L   | 1.000      | -            | -                | -                | -         |   -19.43 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           30 |      336 | 2024-11-15 | Hungary           | L   | 1.000      | -            | -                | -                | -         |    -7.26 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           29 |      381 | 2024-11-14 | Rhyno             | L   | 1.000      | -            | -                | -                | -         |    -3.55 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           28 |      386 | 2024-11-14 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |    -5.88 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           27 |      393 | 2024-11-14 | Jordan            | L   | 1.000      | -            | -                | -                | -         |   -23.15 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           26 |     1543 | 2024-09-27 | Anonymo           | W   | 0.758      | 0.143        | 0.046 (0.005)    | 0.266 (0.029)    | 0 (0.000) |    13.25 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           25 |     1583 | 2024-09-26 | FLuffy Gangsters  | L   | 0.753      | -            | -                | -                | -         |   -11.56 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           24 |     1831 | 2024-09-19 | ALTERNATE aTTaX   | L   | 0.706      | -            | -                | -                | -         |    -2.72 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           23 |     1886 | 2024-09-17 | 9 Pandas          | L   | 0.694      | -            | -                | -                | -         |    -1.60 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           22 |     1917 | 2024-09-16 | Insilio           | L   | 0.685      | -            | -                | -                | -         |    -4.52 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           21 |     1975 | 2024-09-14 | TALON             | W   | 0.673      | 0.143        | -                | 0.224 (0.021)    | 0 (0.000) |     8.82 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           20 |     2025 | 2024-09-12 | Alliance          | W   | 0.661      | 0.143        | 0.030 (0.003)    | 0.462 (0.044)    | 0 (0.000) |    16.04 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           19 |     2062 | 2024-09-11 | Nexus             | W   | 0.654      | 0.143        | 0.286 (0.027)    | 0.747 (0.070)    | 0 (0.000) |    19.85 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           18 |     2359 | 2024-09-01 | FAVBET            | L   | 0.585      | -            | -                | -                | -         |    -4.04 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           17 |     2682 | 2024-08-24 | CPH Wolves        | L   | 0.533      | -            | -                | -                | -         |    -6.90 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           16 |     2840 | 2024-08-20 | ALTERNATE aTTaX   | W   | 0.507      | 0.143        | 0.072 (0.005)    | 0.795 (0.058)    | 0 (0.000) |    14.64 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           15 |     2882 | 2024-08-19 | Grannys Knockers  | W   | 0.499      | 0.143        | 0.001 (0.000)    | -                | 0 (0.000) |     6.28 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           14 |     3113 | 2024-08-11 | FLuffy Gangsters  | L   | 0.446      | -            | -                | -                | -         |    -6.24 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           13 |     3153 | 2024-08-09 | SINNERS           | L   | 0.434      | -            | -                | -                | -         |    -0.86 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           12 |     3227 | 2024-08-07 | Preasy            | W   | 0.420      | 0.435        | 0.004 (0.001)    | 0.134 (0.025)    | 0 (0.000) |     7.70 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           11 |     3308 | 2024-08-05 | Aurora Young Blud | L   | 0.405      | -            | -                | -                | -         |    -3.10 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           10 |     3337 | 2024-08-04 | CPH Wolves        | W   | 0.399      | 0.143        | 0.004 (0.000)    | 0.277 (0.016)    | 0 (0.000) |     7.71 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            9 |     3447 | 2024-08-01 | Alliance          | L   | 0.379      | -            | -                | -                | -         |    -2.10 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            8 |     4122 | 2024-07-14 | ECLOT             | W   | 0.262      | 0.143        | 0.198 (0.007)    | 1.000 (0.037)    | -         |     8.13 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            7 |     4125 | 2024-07-14 | ALTERNATE aTTaX   | W   | 0.261      | 0.143        | 0.072 (0.003)    | 0.795 (0.030)    | -         |     7.84 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            6 |     4133 | 2024-07-14 | ECLOT             | L   | 0.260      | -            | -                | -                | -         |    -0.10 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            5 |     4139 | 2024-07-13 | Portugal          | W   | 0.254      | -            | -                | -                | -         |     1.40 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            4 |     4233 | 2024-07-08 | Latvia            | W   | 0.220      | -            | -                | -                | -         |     4.85 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            3 |     4610 | 2024-06-08 | M1X KS            | L   | 0.021      | -            | -                | -                | -         |    -0.41 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            2 |     4621 | 2024-06-08 | ALTERNATE aTTaX   | W   | 0.020      | 0.337        | 0.072 (0.000)    | 0.795 (0.005)    | 1 (0.020) |     0.60 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            1 |     4678 | 2024-06-07 | plusW KS          | W   | 0.013      | -            | -                | -                | 1 (0.013) |     0.07 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($68.22)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
