### Roster Details<br />
Team Name: WAZABI<br />
Roster: BacH, BangBang, Laykinn, m0vski<br />
Global Rank: [351](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [231]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  464.3<br />
<br />
Final Rank Value (464.3) = Starting Rank Value (470.4) + Head To Head Adjustments (-6.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.150[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.038<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 470.4
- 400 + ( ( 0.038 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 470.4


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
|            7 |     2399 | 2026-09-08 | Bushido Wildcats | L   | 0.831      | -            | -                | -                | -         |    -1.32 | BacH, BangBang, m0vski, No1r, SaMsInG     |
|            6 |     2408 | 2026-09-07 | G2 Ares          | L   | 0.827      | -            | -                | -                | -         |    -1.27 | BacH, BangBang, m0vski, No1r, SaMsInG     |
|            5 |     5106 | 2026-05-30 | Drip Too Hard    | L   | 0.159      | -            | -                | -                | -         |    -1.27 | BacH, BangBang, Bukhavez, Laykinn, m0vski |
|            4 |     5152 | 2026-05-29 | Atreides         | L   | 0.151      | -            | -                | -                | -         |    -1.05 | BacH, BangBang, Laykinn, m0vski, mAnGo    |
|            3 |     5187 | 2026-05-28 | Drip Too Hard    | W   | 0.146      | 0.384        | 0.000 (0.000)    | 0.111 (0.006)    | 0 (0.000) |     3.40 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            2 |     5197 | 2026-05-28 | Project 91       | L   | 0.145      | -            | -                | -                | -         |    -2.72 | BacH, BangBang, Laykinn, m0vski, mAnGo    |
|            1 |     5350 | 2026-05-24 | Entropy          | L   | 0.119      | -            | -                | -                | -         |    -1.81 | BacH, BangBang, Laykinn, m0vski, mAnGo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
