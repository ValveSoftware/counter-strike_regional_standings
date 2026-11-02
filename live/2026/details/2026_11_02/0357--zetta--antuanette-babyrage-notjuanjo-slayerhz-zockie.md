### Roster Details<br />
Team Name: Zetta<br />
Roster: Antuanette, BabyRage, Notjuanjo, Slayerhz, zockie<br />
Global Rank: [357](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_11_02.md)<br />
Regional Rank: [79]( ../../standings_americas_2026_11_02.md)<br />
<br />
Final Rank Value:  451.2<br />
<br />
Final Rank Value (451.2) = Starting Rank Value (492.5) + Head To Head Adjustments (-41.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.186[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 492.5
- 400 + ( ( 0.049 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 492.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      335 | 2026-10-21 | LOS NINOS      | L   | 1.000      | -            | -                | -                | -         |   -12.09 | Antuanette, BabyRage, Notjuanjo, Slayerhz, zockie |
|           12 |      465 | 2026-10-19 | Mansão Maromba | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.082 (0.029)    | 0 (0.000) |    13.61 | Antuanette, BabyRage, Notjuanjo, Slayerhz, zockie |
|           11 |      535 | 2026-10-17 | EXODIA         | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.041 (0.014)    | 0 (0.000) |    12.20 | Antuanette, BabyRage, Notjuanjo, Slayerhz, zockie |
|           10 |      627 | 2026-10-15 | SUKEBAN        | L   | 1.000      | -            | -                | -                | -         |   -17.67 | Antuanette, BabyRage, Notjuanjo, Slayerhz, zockie |
|            9 |      670 | 2026-10-14 | DAMAJUANA      | L   | 1.000      | -            | -                | -                | -         |   -15.17 | Antuanette, BabyRage, Notjuanjo, Slayerhz, zockie |
|            8 |     1371 | 2026-09-28 | MIBR fe        | L   | 0.967      | -            | -                | -                | -         |    -7.45 | Antuanette, BabyRage, Notjuanjo, Slayerhz, zockie |
|            7 |     1459 | 2026-09-26 | your end       | W   | 0.954      | 0.354        | 0.001 (0.000)    | 0.210 (0.071)    | 0 (0.000) |    20.16 | Antuanette, BabyRage, Notjuanjo, Slayerhz, zockie |
|            6 |     1620 | 2026-09-24 | MEIA NOITE     | L   | 0.940      | -            | -                | -                | -         |    -9.74 | Antuanette, BabyRage, Notjuanjo, Slayerhz, zockie |
|            5 |     1742 | 2026-09-22 | BESTIA Academy | L   | 0.928      | -            | -                | -                | -         |    -9.48 | Antuanette, BabyRage, Notjuanjo, Slayerhz, zockie |
|            4 |     2705 | 2026-08-31 | DAMAJUANA      | L   | 0.781      | -            | -                | -                | -         |   -12.06 | Antuanette, BabyRage, Notjuanjo, Slayerhz, zockie |
|            3 |     2825 | 2026-08-29 | Procyon        | L   | 0.768      | -            | -                | -                | -         |    -3.76 | Antuanette, BabyRage, Notjuanjo, Slayerhz, zockie |
|            2 |     2953 | 2026-08-26 | Pugdesonesto   | W   | 0.749      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.59 | Antuanette, BabyRage, Notjuanjo, Slayerhz, zockie |
|            1 |     2970 | 2026-08-26 | BESTIA Academy | L   | 0.747      | -            | -                | -                | -         |    -8.43 | Antuanette, BabyRage, Notjuanjo, Slayerhz, zockie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
