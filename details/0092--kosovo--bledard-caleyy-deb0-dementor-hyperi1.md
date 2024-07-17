### Roster Details<br />
Team Name: Kosovo<br />
Roster: BledarD, Caleyy, deb0, Dementor, HYPERI1<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [92](../standings_global.md)<br />
Regional Rank: [65]( ../standings_europe.md)<br />
Final Rank Value:  931.9<br />
<br />
Final Rank Value (931.9) = Starting Rank Value (882.1) + Head To Head Adjustments (49.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.344[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.217[<sup>2</sup>](#table1)

The average of these factors is 0.224<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 882.1
- 400 + ( ( 0.224 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 882.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      118 | 2024-07-14 | ECLOT           | W   | 1.000      | 0.143        | 0.103 (0.015)    | 0.551 (0.079)    | 0 (0.000) |    24.48 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           10 |      121 | 2024-07-14 | ALTERNATE aTTaX | W   | 1.000      | 0.143        | 0.050 (0.007)    | 0.644 (0.092)    | 0 (0.000) |    17.02 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            9 |      129 | 2024-07-14 | ECLOT           | L   | 1.000      | -            | -                | -                | -         |    -6.02 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            8 |      135 | 2024-07-13 | Portugal        | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.162 (0.023)    | 0 (0.000) |     8.95 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            7 |      229 | 2024-07-08 | Latvia          | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.160 (0.023)    | 0 (0.000) |    16.83 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            6 |      606 | 2024-06-08 | M1X KS          | L   | 0.941      | -            | -                | -                | -         |   -13.05 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            5 |      617 | 2024-06-08 | ALTERNATE aTTaX | W   | 0.940      | 0.337        | 0.050 (0.016)    | 0.644 (0.204)    | 1 (0.940) |    16.66 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            4 |      674 | 2024-06-07 | plusW KS        | W   | 0.933      | 0.337        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.933) |     2.00 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            3 |     1091 | 2024-05-25 | ex-Guild Eagles | L   | 0.846      | -            | -                | -                | -         |   -10.94 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            2 |     1101 | 2024-05-24 | Zero Tenacity   | L   | 0.840      | -            | -                | -                | -         |    -5.43 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            1 |     3868 | 2024-01-30 | RUBY            | L   | 0.074      | -            | -                | -                | -         |    -0.77 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,069.60)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
