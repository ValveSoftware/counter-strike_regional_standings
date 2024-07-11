### Roster Details<br />
Team Name: Illuminar<br />
Roster: ANeraX, b1elany, Furlan, phr, ultimate<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [169](../standings_global.md)<br />
Regional Rank: [106]( ../standings_europe.md)<br />
Final Rank Value:  662.9<br />
<br />
Final Rank Value (662.9) = Starting Rank Value (698.4) + Head To Head Adjustments (-35.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 698.4
- 400 + ( ( 0.141 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 698.4


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
|           19 |      640 | 2024-06-05 | Aurora Young Blud | L   | 0.959      | -            | -                | -                | -         |   -10.50 | ANeraX, b1elany, Furlan, phr, ultimate  |
|           18 |      676 | 2024-06-04 | Passion UA        | L   | 0.953      | -            | -                | -                | -         |    -2.96 | ANeraX, b1elany, Furlan, phr, ultimate  |
|           17 |      769 | 2024-06-01 | WOPA              | W   | 0.931      | 0.143        | 0.002 (0.000)    | 0.155 (0.021)    | 0 (0.000) |    12.99 | ANeraX, b1elany, phr, splawik, ultimate |
|           16 |      835 | 2024-05-29 | INFINITE          | L   | 0.914      | -            | -                | -                | -         |   -20.12 | ANeraX, b1elany, Furlan, phr, ultimate  |
|           15 |      846 | 2024-05-29 | Passion UA        | L   | 0.911      | -            | -                | -                | -         |    -3.48 | ANeraX, b1elany, Furlan, phr, ultimate  |
|           14 |      942 | 2024-05-24 | Enterprise        | L   | 0.879      | -            | -                | -                | -         |    -4.99 | ANeraX, b1elany, Furlan, phr, ultimate  |
|           13 |      944 | 2024-05-24 | MOUZ NXT          | L   | 0.878      | -            | -                | -                | -         |    -2.91 | ANeraX, b1elany, Furlan, phr, ultimate  |
|           12 |      999 | 2024-05-22 | Zero Tenacity     | L   | 0.865      | -            | -                | -                | -         |    -2.13 | ANeraX, b1elany, Furlan, phr, ultimate  |
|           11 |     1036 | 2024-05-21 | NAVI Junior       | L   | 0.860      | -            | -                | -                | -         |   -18.96 | ANeraX, b1elany, Furlan, phr, ultimate  |
|           10 |     1072 | 2024-05-20 | Slovakia          | L   | 0.853      | -            | -                | -                | -         |    -5.83 | ANeraX, b1elany, Furlan, phr, ultimate  |
|            9 |     1683 | 2024-04-27 | EYEBALLERS        | L   | 0.698      | -            | -                | -                | -         |    -5.39 | ANeraX, Furlan, keis, phr, ultimate     |
|            8 |     1706 | 2024-04-26 | Zero Tenacity     | L   | 0.691      | -            | -                | -                | -         |    -3.12 | ANeraX, Furlan, keis, phr, ultimate     |
|            7 |     1771 | 2024-04-23 | Romania           | W   | 0.672      | 0.435        | 0.011 (0.003)    | 0.375 (0.110)    | 0 (0.000) |    15.05 | ANeraX, Furlan, keis, phr, ultimate     |
|            6 |     1796 | 2024-04-21 | BLEED             | L   | 0.660      | -            | -                | -                | -         |    -0.48 | ANeraX, Furlan, keis, phr, ultimate     |
|            5 |     1835 | 2024-04-20 | Viperio           | W   | 0.652      | 0.143        | 0.002 (0.000)    | 0.052 (0.005)    | 0 (0.000) |     8.92 | ANeraX, Furlan, keis, phr, ultimate     |
|            4 |     1901 | 2024-04-18 | Portugal          | W   | 0.641      | 0.143        | 0.006 (0.001)    | 0.175 (0.016)    | 0 (0.000) |    11.86 | ANeraX, Furlan, keis, phr, ultimate     |
|            3 |     1955 | 2024-04-17 | Secret            | W   | 0.634      | 0.143        | 0.000 (0.000)    | 0.092 (0.008)    | 0 (0.000) |     7.14 | ANeraX, Furlan, keis, phr, ultimate     |
|            2 |     2364 | 2024-04-03 | PGE Turow         | L   | 0.539      | -            | -                | -                | -         |    -8.41 | ANeraX, Furlan, keis, phr, ultimate     |
|            1 |     2405 | 2024-04-02 | UNiTY             | L   | 0.532      | -            | -                | -                | -         |    -2.16 | ANeraX, Furlan, keis, phr, ultimate     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,000.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
