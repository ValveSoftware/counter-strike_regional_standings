### Roster Details<br />
Team Name: The Suspect<br />
Roster: BledarD, cerber, Dementor, HYPERI1, vAloN<br />
Global Rank: [100](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [73]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  841.7<br />
<br />
Final Rank Value (841.7) = Starting Rank Value (796.1) + Head To Head Adjustments (45.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.312[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.076[<sup>2</sup>](#table1)
- LAN Wins: 0.108[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 796.1
- 400 + ( ( 0.202 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 796.1


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
|           25 |       26 | 2024-09-17 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |    -5.15 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           24 |       57 | 2024-09-16 | Insilio           | L   | 1.000      | -            | -                | -                | -         |    -9.04 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           23 |      115 | 2024-09-14 | TALON             | W   | 1.000      | 0.143        | -                | 0.334 (0.048)    | 0 (0.000) |     9.48 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           22 |      165 | 2024-09-12 | Alliance          | W   | 1.000      | 0.143        | 0.014 (0.002)    | 0.374 (0.053)    | 0 (0.000) |    16.05 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           21 |      202 | 2024-09-11 | Nexus             | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.542 (0.077)    | 0 (0.000) |    11.94 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           20 |      499 | 2024-09-01 | FAVBET            | L   | 1.000      | -            | -                | -                | -         |   -13.50 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           19 |      822 | 2024-08-24 | CPH Wolves        | L   | 1.000      | -            | -                | -                | -         |   -15.16 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           18 |      980 | 2024-08-20 | ALTERNATE aTTaX   | W   | 1.000      | 0.143        | 0.110 (0.016)    | 0.792 (0.113)    | 0 (0.000) |    16.96 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           17 |     1022 | 2024-08-19 | Grannys Knockers  | W   | 0.999      | 0.143        | 0.003 (0.000)    | 0.121 (0.017)    | 0 (0.000) |    11.04 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           16 |     1253 | 2024-08-11 | FLuffy Gangsters  | L   | 0.946      | -            | -                | -                | -         |   -17.33 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           15 |     1293 | 2024-08-09 | SINNERS           | L   | 0.934      | -            | -                | -                | -         |    -7.27 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           14 |     1367 | 2024-08-07 | Preasy            | W   | 0.920      | 0.435        | 0.006 (0.003)    | 0.145 (0.058)    | 0 (0.000) |    10.10 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           13 |     1448 | 2024-08-05 | Aurora Young Blud | L   | 0.906      | -            | -                | -                | -         |    -8.82 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           12 |     1477 | 2024-08-04 | CPH Wolves        | W   | 0.899      | 0.143        | 0.010 (0.001)    | 0.691 (0.089)    | 0 (0.000) |    15.16 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           11 |     1587 | 2024-08-01 | Alliance          | L   | 0.879      | -            | -                | -                | -         |   -14.09 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           10 |     2262 | 2024-07-14 | ECLOT             | W   | 0.762      | 0.143        | 0.081 (0.009)    | 0.758 (0.083)    | 0 (0.000) |    20.00 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            9 |     2265 | 2024-07-14 | ALTERNATE aTTaX   | W   | 0.762      | 0.143        | 0.110 (0.012)    | 0.792 (0.086)    | -         |    17.11 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            8 |     2273 | 2024-07-14 | ECLOT             | L   | 0.760      | -            | -                | -                | -         |    -3.50 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            7 |     2279 | 2024-07-13 | Portugal          | W   | 0.755      | -            | -                | -                | -         |     6.18 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            6 |     2373 | 2024-07-08 | Latvia            | W   | 0.721      | 0.143        | 0.004 (0.000)    | -                | -         |     9.85 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            5 |     2750 | 2024-06-08 | M1X KS            | L   | 0.521      | -            | -                | -                | -         |    -9.00 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            4 |     2761 | 2024-06-08 | ALTERNATE aTTaX   | W   | 0.520      | 0.337        | 0.110 (0.019)    | 0.792 (0.139)    | 1 (0.520) |    12.33 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            3 |     2818 | 2024-06-07 | plusW KS          | W   | 0.514      | -            | -                | -                | 1 (0.514) |     1.66 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            2 |     3235 | 2024-05-25 | ex-Guild Eagles   | L   | 0.426      | -            | -                | -                | -         |    -7.41 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            1 |     3245 | 2024-05-24 | Zero Tenacity     | L   | 0.421      | -            | -                | -                | -         |    -2.05 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,700.65)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
