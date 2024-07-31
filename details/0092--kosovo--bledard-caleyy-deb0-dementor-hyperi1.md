### Roster Details<br />
Team Name: Kosovo<br />
Roster: BledarD, Caleyy, deb0, Dementor, HYPERI1<br />
Global Rank: [92](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [67]( ../standings_europe.md)<br />
<br />
Final Rank Value:  882.0<br />
<br />
Final Rank Value (882.0) = Starting Rank Value (828.6) + Head To Head Adjustments (53.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.277[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.193[<sup>2</sup>](#table1)

The average of these factors is 0.208<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 828.6
- 400 + ( ( 0.208 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 828.6


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
|           10 |      648 | 2024-07-14 | ECLOT           | W   | 1.000      | 0.143        | 0.065 (0.009)    | 0.502 (0.072)    | 0 (0.000) |    23.82 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            9 |      651 | 2024-07-14 | ALTERNATE aTTaX | W   | 1.000      | 0.143        | 0.032 (0.005)    | 0.564 (0.081)    | 0 (0.000) |    17.61 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            8 |      659 | 2024-07-14 | ECLOT           | L   | 1.000      | -            | -                | -                | -         |    -6.62 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            7 |      665 | 2024-07-13 | Portugal        | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.122 (0.017)    | 0 (0.000) |     9.16 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            6 |      759 | 2024-07-08 | Latvia          | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.138 (0.020)    | 0 (0.000) |    17.10 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            5 |     1136 | 2024-06-08 | M1X KS          | L   | 0.846      | -            | -                | -                | -         |   -11.67 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            4 |     1147 | 2024-06-08 | ALTERNATE aTTaX | W   | 0.845      | 0.337        | 0.032 (0.009)    | 0.564 (0.161)    | 1 (0.845) |    15.65 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            3 |     1204 | 2024-06-07 | plusW KS        | W   | 0.839      | 0.337        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.839) |     2.34 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            2 |     1621 | 2024-05-25 | ex-Guild Eagles | L   | 0.751      | -            | -                | -                | -         |   -10.00 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            1 |     1631 | 2024-05-24 | Zero Tenacity   | L   | 0.746      | -            | -                | -                | -         |    -3.94 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,761.21)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
