### Roster Details<br />
Team Name: Illuminar<br />
Roster: b1elany, Furlan, kadziu, phr, ultimate<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [94](../standings_global.md)<br />
Regional Rank: [68]( ../standings_europe.md)<br />
Final Rank Value:  904.4<br />
<br />
Final Rank Value (904.4) = Starting Rank Value (881.6) + Head To Head Adjustments (22.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.354[<sup>1</sup>](#table2)
- Bounty Collected: 0.390[<sup>2</sup>](#table1)
- Opponent Network: 0.204[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.237<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 881.6
- 400 + ( ( 0.237 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 881.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |       63 | 2024-06-15 | B8                | L   | 1.000      | -            | -                | -                | -         |    -5.08 | b1elany, Furlan, kadziu, phr, ultimate  |
|           27 |      123 | 2024-06-13 | GamerLegion       | W   | 1.000      | 0.435        | 0.239 (0.104)    | 0.336 (0.146)    | 0 (0.000) |    28.75 | Furlan, kadziu, phr, splawik, ultimate  |
|           26 |      133 | 2024-06-13 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -10.91 | b1elany, Furlan, kadziu, phr, ultimate  |
|           25 |      186 | 2024-06-11 | Sampi             | W   | 1.000      | 0.435        | 0.045 (0.020)    | 0.837 (0.364)    | 0 (0.000) |    16.76 | Furlan, kadziu, phr, splawik, ultimate  |
|           24 |      276 | 2024-06-09 | VP.Prodigy        | W   | 1.000      | 0.435        | 0.033 (0.014)    | 0.518 (0.225)    | 0 (0.000) |    18.93 | b1elany, Furlan, kadziu, phr, ultimate  |
|           23 |      310 | 2024-06-08 | 3DMAX             | W   | 1.000      | 0.450        | 0.186 (0.084)    | 1.000 (0.450)    | 0 (0.000) |    27.79 | b1elany, Furlan, kadziu, phr, ultimate  |
|           22 |      382 | 2024-06-07 | EYEBALLERS        | W   | 1.000      | 0.450        | 0.006 (0.003)    | 0.653 (0.294)    | 0 (0.000) |    20.50 | b1elany, Furlan, kadziu, phr, ultimate  |
|           21 |      391 | 2024-06-07 | CYBERSHOKE        | W   | 1.000      | 0.435        | 0.050 (0.022)    | 0.284 (0.124)    | 0 (0.000) |    16.34 | b1elany, Furlan, kadziu, phr, ultimate  |
|           20 |      429 | 2024-06-06 | Enterprise        | W   | 1.000      | 0.450        | 0.046 (0.021)    | 0.575 (0.259)    | 0 (0.000) |    22.79 | b1elany, Furlan, kadziu, phr, ultimate  |
|           19 |      504 | 2024-06-05 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -15.59 | ANeraX, b1elany, Furlan, phr, ultimate  |
|           18 |      540 | 2024-06-04 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |    -5.10 | ANeraX, b1elany, Furlan, phr, ultimate  |
|           17 |      635 | 2024-06-01 | WOPA              | W   | 1.000      | 0.143        | -                | 0.141 (0.020)    | 0 (0.000) |     8.81 | ANeraX, b1elany, phr, splawik, ultimate |
|           16 |      701 | 2024-05-29 | INFINITE          | L   | 1.000      | -            | -                | -                | -         |   -25.45 | ANeraX, b1elany, Furlan, phr, ultimate  |
|           15 |      712 | 2024-05-29 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |    -6.56 | ANeraX, b1elany, Furlan, phr, ultimate  |
|           14 |      808 | 2024-05-24 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |    -9.60 | ANeraX, b1elany, Furlan, phr, ultimate  |
|           13 |      810 | 2024-05-24 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |    -6.33 | ANeraX, b1elany, Furlan, phr, ultimate  |
|           12 |      865 | 2024-05-22 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -4.58 | ANeraX, b1elany, Furlan, phr, ultimate  |
|           11 |      902 | 2024-05-21 | NAVI Junior       | L   | 1.000      | -            | -                | -                | -         |   -26.14 | ANeraX, b1elany, Furlan, phr, ultimate  |
|           10 |      938 | 2024-05-20 | Sampi             | L   | 1.000      | -            | -                | -                | -         |   -11.87 | ANeraX, b1elany, Furlan, phr, ultimate  |
|            9 |     1549 | 2024-04-27 | EYEBALLERS        | L   | 0.854      | -            | -                | -                | -         |   -11.77 | ANeraX, Furlan, keis, phr, ultimate     |
|            8 |     1572 | 2024-04-26 | Zero Tenacity     | L   | 0.847      | -            | -                | -                | -         |    -8.21 | ANeraX, Furlan, keis, phr, ultimate     |
|            7 |     1637 | 2024-04-23 | Nexus             | W   | 0.827      | 0.435        | 0.012 (0.004)    | 0.397 (0.143)    | 0 (0.000) |    13.65 | ANeraX, Furlan, keis, phr, ultimate     |
|            6 |     1662 | 2024-04-21 | BLEED             | L   | 0.816      | -            | -                | -                | -         |    -1.47 | ANeraX, Furlan, keis, phr, ultimate     |
|            5 |     1701 | 2024-04-20 | Viperio           | W   | 0.808      | 0.143        | 0.003 (0.000)    | -                | 0 (0.000) |     5.85 | ANeraX, Furlan, keis, phr, ultimate     |
|            4 |     1767 | 2024-04-18 | esmagaB           | W   | 0.796      | 0.143        | 0.007 (0.001)    | 0.176 (0.020)    | -         |     9.34 | ANeraX, Furlan, keis, phr, ultimate     |
|            3 |     1821 | 2024-04-17 | Secret            | W   | 0.789      | -            | -                | -                | -         |     4.75 | ANeraX, Furlan, keis, phr, ultimate     |
|            2 |     2230 | 2024-04-03 | PGE Turow         | L   | 0.695      | -            | -                | -                | -         |   -15.68 | ANeraX, Furlan, keis, phr, ultimate     |
|            1 |     2271 | 2024-04-02 | UNiTY             | L   | 0.688      | -            | -                | -                | -         |    -7.12 | ANeraX, Furlan, keis, phr, ultimate     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,500.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-06-16 |      1.000 | $2,000.00      | $2,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
