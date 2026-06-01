### Roster Details<br />
Team Name: WAZABI<br />
Roster: BacH, BangBang, Laykinn, m0vski, VireZ<br />
Global Rank: [142](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [95]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  906.9<br />
<br />
Final Rank Value (906.9) = Starting Rank Value (948.0) + Head To Head Adjustments (-41.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.277[<sup>1</sup>](#table2)
- Bounty Collected: 0.328[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.515[<sup>2</sup>](#table1)

The average of these factors is 0.288<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 948.0
- 400 + ( ( 0.288 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 948.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |       63 | 2026-05-30 | Young Ninjas  | L   | 1.000      | -            | -                | -                | -         |   -16.16 | BacH, BangBang, Bukhavez, Laykinn, m0vski |
|           15 |      101 | 2026-05-29 | Atreides      | L   | 1.000      | -            | -                | -                | -         |   -12.88 | BacH, BangBang, Laykinn, m0vski, mAnGo    |
|           14 |      133 | 2026-05-28 | Young Ninjas  | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.549 (0.078)    | 0 (0.000) |    13.90 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|           13 |     1245 | 2026-04-26 | MASONIC       | L   | 0.958      | -            | -                | -                | -         |   -16.69 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|           12 |     1274 | 2026-04-25 | IMA PROBLEM   | W   | 0.955      | 0.322        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.955) |     1.40 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|           11 |     1602 | 2026-04-12 | Entropy       | L   | 0.866      | -            | -                | -                | -         |   -18.43 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|           10 |     1604 | 2026-04-12 | EAC           | L   | 0.866      | -            | -                | -                | -         |    -6.39 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            9 |     1624 | 2026-04-11 | Entropy       | W   | 0.860      | 0.341        | 0.004 (0.001)    | 0.115 (0.034)    | 1 (0.860) |     7.79 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            8 |     1633 | 2026-04-11 | SAW           | W   | 0.858      | 0.341        | 0.001 (0.000)    | 0.207 (0.061)    | 1 (0.858) |     8.52 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            7 |     2182 | 2026-04-01 | Falcons Force | L   | 0.792      | -            | -                | -                | -         |   -16.09 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            6 |     2195 | 2026-04-01 | 3DMAX         | L   | 0.791      | -            | -                | -                | -         |    -1.34 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            5 |     2226 | 2026-03-31 | Z7            | W   | 0.787      | 0.340        | 0.000 (0.000)    | 0.026 (0.007)    | 1 (0.787) |     1.31 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            4 |     2237 | 2026-03-31 | maquinas      | W   | 0.787      | 0.340        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.787) |     0.96 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            3 |     2259 | 2026-03-31 | AM            | L   | 0.786      | -            | -                | -                | -         |    -3.80 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            2 |     2281 | 2026-03-31 | B8            | W   | 0.785      | 0.340        | 0.329 (0.088)    | 0.469 (0.125)    | 1 (0.785) |    24.05 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            1 |     2293 | 2026-03-31 | Phantom       | L   | 0.785      | -            | -                | -                | -         |    -7.22 | BacH, BangBang, Laykinn, m0vski, VireZ    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,517.66)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-12 |      0.867 | $1,750.00      | $1,517.66       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
