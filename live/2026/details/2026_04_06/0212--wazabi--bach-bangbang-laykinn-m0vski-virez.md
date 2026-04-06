### Roster Details<br />
Team Name: WAZABI<br />
Roster: BacH, BangBang, Laykinn, m0vski, VireZ<br />
Global Rank: [212](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [139]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  731.0<br />
<br />
Final Rank Value (731.0) = Starting Rank Value (705.9) + Head To Head Adjustments (25.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.300[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 705.9
- 400 + ( ( 0.156 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 705.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      212 | 2026-04-01 | Falcons Force | L   | 1.000      | -            | -                | -                | -         |   -11.00 | BacH, BangBang, Laykinn, m0vski, VireZ |
|            6 |      222 | 2026-04-01 | 3DMAX         | L   | 1.000      | -            | -                | -                | -         |    -0.51 | BacH, BangBang, Laykinn, m0vski, VireZ |
|            5 |      245 | 2026-03-31 | Z7            | W   | 1.000      | 0.340        | 0.000 (0.000)    | 0.031 (0.010)    | 1 (1.000) |     5.39 | BacH, BangBang, Laykinn, m0vski, VireZ |
|            4 |      253 | 2026-03-31 | maquinas      | W   | 1.000      | 0.340        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     3.88 | BacH, BangBang, Laykinn, m0vski, VireZ |
|            3 |      269 | 2026-03-31 | AM            | L   | 1.000      | -            | -                | -                | -         |    -1.32 | BacH, BangBang, Laykinn, m0vski, VireZ |
|            2 |      288 | 2026-03-31 | B8            | W   | 1.000      | 0.340        | 0.186 (0.063)    | 0.349 (0.119)    | 1 (1.000) |    31.13 | BacH, BangBang, Laykinn, m0vski, VireZ |
|            1 |      298 | 2026-03-31 | Phantom       | L   | 1.000      | -            | -                | -                | -         |    -2.47 | BacH, BangBang, Laykinn, m0vski, VireZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
