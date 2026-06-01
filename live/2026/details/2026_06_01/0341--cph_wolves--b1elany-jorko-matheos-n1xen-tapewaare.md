### Roster Details<br />
Team Name: CPH Wolves<br />
Roster: b1elany, Jorko, Matheos, n1Xen, Tapewaare<br />
Global Rank: [341](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [209]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  482.1<br />
<br />
Final Rank Value (482.1) = Starting Rank Value (487.4) + Head To Head Adjustments (-5.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.182[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 487.4
- 400 + ( ( 0.046 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 487.4


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
|            8 |     5327 | 2026-01-23 | The Last Resort | L   | 0.344      | -            | -                | -                | -         |    -1.09 | Jorko, n1Xen, REDSTAR, SHiPZ, Tapewaare   |
|            7 |     5645 | 2026-01-16 | cirahvi         | L   | 0.292      | -            | -                | -                | -         |    -1.48 | Jorko, n1Xen, REDSTAR, SHiPZ, Tapewaare   |
|            6 |     5734 | 2026-01-11 | BRUTE           | L   | 0.259      | -            | -                | -                | -         |    -3.86 | Jorko, n1Xen, REDSTAR, SHiPZ, Tapewaare   |
|            5 |     6016 | 2025-12-12 | magic           | L   | 0.058      | -            | -                | -                | -         |    -0.00 | b1elany, Jorko, Matheos, n1Xen, Tapewaare |
|            4 |     6024 | 2025-12-11 | MOUZ NXT        | W   | 0.054      | 0.384        | 0.015 (0.000)    | 0.814 (0.017)    | 0 (0.000) |     1.63 | b1elany, Jorko, Matheos, n1Xen, Tapewaare |
|            3 |     6052 | 2025-12-09 | Eternal Fire    | L   | 0.039      | -            | -                | -                | -         |    -0.49 | b1elany, Jorko, Matheos, n1Xen, Tapewaare |
|            2 |     6142 | 2025-12-05 | FUT             | L   | 0.013      | -            | -                | -                | -         |     0.00 | b1elany, Jorko, Matheos, n1Xen, Tapewaare |
|            1 |     6179 | 2025-12-03 | RUBY            | L   | 0.001      | -            | -                | -                | -         |    -0.02 | b1elany, Jorko, Matheos, n1Xen, Tapewaare |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
