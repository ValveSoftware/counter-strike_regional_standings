### Roster Details<br />
Team Name: The Suspect<br />
Roster: BledarD, Caleyy, Dementor, HYPERI1, vAloN<br />
Global Rank: [99](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [70]( ../standings_europe.md)<br />
<br />
Final Rank Value:  871.8<br />
<br />
Final Rank Value (871.8) = Starting Rank Value (826.0) + Head To Head Adjustments (45.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.324[<sup>1</sup>](#table2)
- Bounty Collected: 0.280[<sup>2</sup>](#table1)
- Opponent Network: 0.039[<sup>2</sup>](#table1)
- LAN Wins: 0.186[<sup>2</sup>](#table1)

The average of these factors is 0.207<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 826.0
- 400 + ( ( 0.207 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 826.0


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
|           13 |       42 | 2024-08-05 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -10.61 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           12 |       71 | 2024-08-04 | CPH Wolves        | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.354 (0.051)    | 0 (0.000) |    13.91 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           11 |      181 | 2024-08-01 | Alliance          | L   | 1.000      | -            | -                | -                | -         |   -16.62 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|           10 |      856 | 2024-07-14 | ECLOT             | W   | 1.000      | 0.143        | 0.086 (0.012)    | 0.537 (0.077)    | 0 (0.000) |    26.72 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            9 |      859 | 2024-07-14 | ALTERNATE aTTaX   | W   | 1.000      | 0.143        | 0.031 (0.004)    | 0.537 (0.077)    | 0 (0.000) |    18.06 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            8 |      867 | 2024-07-14 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |    -3.95 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            7 |      873 | 2024-07-13 | Portugal          | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.115 (0.016)    | 0 (0.000) |     8.97 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            6 |      967 | 2024-07-08 | Latvia            | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.134 (0.019)    | 0 (0.000) |    16.66 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            5 |     1344 | 2024-06-08 | M1X KS            | L   | 0.807      | -            | -                | -                | -         |   -11.40 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            4 |     1355 | 2024-06-08 | ALTERNATE aTTaX   | W   | 0.806      | 0.337        | 0.031 (0.008)    | 0.537 (0.146)    | 1 (0.806) |    15.34 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            3 |     1412 | 2024-06-07 | plusW KS          | W   | 0.799      | 0.337        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.799) |     2.25 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            2 |     1829 | 2024-05-25 | ex-Guild Eagles   | L   | 0.712      | -            | -                | -                | -         |    -9.82 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            1 |     1839 | 2024-05-24 | Zero Tenacity     | L   | 0.706      | -            | -                | -                | -         |    -3.71 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,633.41)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
