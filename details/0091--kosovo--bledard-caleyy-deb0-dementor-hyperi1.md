### Roster Details<br />
Team Name: Kosovo<br />
Roster: BledarD, Caleyy, deb0, Dementor, HYPERI1<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [91](../standings_global.md)<br />
Regional Rank: [65]( ../standings_europe.md)<br />
Final Rank Value:  892.8<br />
<br />
Final Rank Value (892.8) = Starting Rank Value (841.4) + Head To Head Adjustments (51.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.336[<sup>1</sup>](#table2)
- Bounty Collected: 0.286[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.210[<sup>2</sup>](#table1)

The average of these factors is 0.218<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 841.4
- 400 + ( ( 0.218 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 841.4


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
|           11 |      406 | 2024-07-14 | ECLOT           | W   | 1.000      | 0.143        | 0.084 (0.012)    | 0.510 (0.073)    | 0 (0.000) |    24.07 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           10 |      409 | 2024-07-14 | ALTERNATE aTTaX | W   | 1.000      | 0.143        | 0.041 (0.006)    | 0.638 (0.091)    | 0 (0.000) |    17.30 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            9 |      417 | 2024-07-14 | ECLOT           | L   | 1.000      | -            | -                | -                | -         |    -6.40 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            8 |      423 | 2024-07-13 | Portugal        | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.145 (0.021)    | 0 (0.000) |     9.23 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            7 |      517 | 2024-07-08 | Latvia          | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.153 (0.022)    | 0 (0.000) |    16.49 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            6 |      894 | 2024-06-08 | M1X KS          | L   | 0.894      | -            | -                | -                | -         |   -12.16 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            5 |      905 | 2024-06-08 | ALTERNATE aTTaX | W   | 0.893      | 0.337        | 0.041 (0.012)    | 0.638 (0.192)    | 1 (0.893) |    16.16 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            4 |      962 | 2024-06-07 | plusW KS        | W   | 0.886      | 0.337        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.886) |     2.33 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            3 |     1379 | 2024-05-25 | ex-Guild Eagles | L   | 0.798      | -            | -                | -                | -         |   -10.55 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            2 |     1389 | 2024-05-24 | Zero Tenacity   | L   | 0.793      | -            | -                | -                | -         |    -4.73 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            1 |     4156 | 2024-01-30 | RUBY            | L   | 0.026      | -            | -                | -                | -         |    -0.28 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,915.51)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
