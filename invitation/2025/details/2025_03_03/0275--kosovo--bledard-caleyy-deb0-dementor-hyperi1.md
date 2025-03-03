### Roster Details<br />
Team Name: Kosovo<br />
Roster: BledarD, Caleyy, deb0, Dementor, HYPERI1<br />
Global Rank: [275](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [153]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  484.3<br />
<br />
Final Rank Value (484.3) = Starting Rank Value (502.9) + Head To Head Adjustments (-18.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 502.9
- 400 + ( ( 0.053 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 502.9


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
|           14 |     1490 | 2024-11-15 | Chile            | L   | 0.480      | -            | -                | -                | -         |    -8.21 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           13 |     1496 | 2024-11-15 | Hungary          | L   | 0.479      | -            | -                | -                | -         |    -2.92 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           12 |     1541 | 2024-11-14 | GTZ              | L   | 0.473      | -            | -                | -                | -         |    -0.64 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           11 |     1546 | 2024-11-14 | ALTERNATE aTTaX  | L   | 0.472      | -            | -                | -                | -         |    -1.88 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           10 |     1553 | 2024-11-14 | Jordan           | L   | 0.472      | -            | -                | -                | -         |    -8.98 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            9 |     2701 | 2024-09-28 | FLuffy Gangsters | L   | 0.158      | -            | -                | -                | -         |    -1.39 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            8 |     2748 | 2024-09-27 | Dark Cloud       | W   | 0.151      | 0.143        | 0.027 (0.001)    | 0.387 (0.008)    | 0 (0.000) |     3.76 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            7 |     2790 | 2024-09-26 | FLuffy Gangsters | L   | 0.146      | -            | -                | -                | -         |    -1.26 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            6 |     3046 | 2024-09-19 | ALTERNATE aTTaX  | L   | 0.099      | -            | -                | -                | -         |    -0.35 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            5 |     3105 | 2024-09-17 | 9 Pandas         | L   | 0.087      | -            | -                | -                | -         |    -0.20 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            4 |     3136 | 2024-09-16 | Insilio          | L   | 0.078      | -            | -                | -                | -         |    -0.68 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            3 |     3194 | 2024-09-14 | TALON            | W   | 0.066      | 0.143        | 0.000 (0.000)    | 0.152 (0.001)    | 0 (0.000) |     1.15 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            2 |     3246 | 2024-09-12 | Alliance         | W   | 0.054      | 0.143        | 0.015 (0.000)    | 0.615 (0.005)    | 0 (0.000) |     1.52 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            1 |     3284 | 2024-09-11 | Nexus            | W   | 0.047      | 0.143        | 0.176 (0.001)    | 0.556 (0.004)    | 0 (0.000) |     1.45 | BledarD, cerber, Dementor, HYPERI1, vAloN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
