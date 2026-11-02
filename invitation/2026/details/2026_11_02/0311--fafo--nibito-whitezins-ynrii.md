### Roster Details<br />
Team Name: FAFO<br />
Roster: nibito, whitezins, ynrii<br />
Global Rank: [311](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [206]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  548.0<br />
<br />
Final Rank Value (548.0) = Starting Rank Value (537.1) + Head To Head Adjustments (10.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.196[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.093[<sup>2</sup>](#table1)

The average of these factors is 0.073<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 537.1
- 400 + ( ( 0.073 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 537.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1616 | 2026-09-24 | aimclub     | L   | 0.940      | -            | -                | -                | -         |    -1.11 | bonce, nibito, s1mbalance, whitezins, ynrii |
|            5 |     1642 | 2026-09-24 | INFURITY    | L   | 0.939      | -            | -                | -                | -         |    -7.98 | bonce, nibito, s1mbalance, whitezins, ynrii |
|            4 |     1693 | 2026-09-23 | Diamant     | W   | 0.933      | 0.345        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.933) |     8.60 | bonce, nibito, s1mbalance, whitezins, ynrii |
|            3 |     2415 | 2026-09-07 | WBT Academy | L   | 0.826      | -            | -                | -                | -         |    -2.38 | nibito, Pleb0rs, R1N7331, whitezins, ynrii  |
|            2 |     2454 | 2026-09-06 | Banda Chuya | L   | 0.820      | -            | -                | -                | -         |    -5.00 | nibito, Pleb0rs, R1N7331, whitezins, ynrii  |
|            1 |     2467 | 2026-09-06 | Gothic      | W   | 0.820      | 0.317        | 0.003 (0.001)    | 0.129 (0.034)    | 0 (0.000) |    18.79 | nibito, Pleb0rs, R1N7331, whitezins, ynrii  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
