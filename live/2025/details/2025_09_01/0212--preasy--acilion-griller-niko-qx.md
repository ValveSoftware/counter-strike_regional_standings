### Roster Details<br />
Team Name: Preasy<br />
Roster: AcilioN, Griller, niko, qx<br />
Global Rank: [212](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [110]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  577.1<br />
<br />
Final Rank Value (577.1) = Starting Rank Value (552.9) + Head To Head Adjustments (24.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.077[<sup>2</sup>](#table1)

The average of these factors is 0.080<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 552.9
- 400 + ( ( 0.080 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 552.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1419 | 2025-06-14 | Passion UA   | L   | 0.674      | -            | -                | -                | -         |    -0.97 | AcilioN, Griller, niko, qx, SinK   |
|            5 |     1435 | 2025-06-14 | Tricked      | W   | 0.673      | 0.360        | 0.011 (0.003)    | 0.543 (0.132)    | 1 (0.673) |    19.29 | AcilioN, Griller, niko, qx, SinK   |
|            4 |     1451 | 2025-06-13 | TNL          | L   | 0.668      | -            | -                | -                | -         |    -0.67 | AcilioN, Griller, niko, qx, SinK   |
|            3 |     1551 | 2025-06-08 | TPuDCATb TPu | L   | 0.634      | -            | -                | -                | -         |    -3.26 | AcilioN, bekker, Griller, niko, qx |
|            2 |     1580 | 2025-06-07 | UNiTY        | W   | 0.626      | 0.384        | 0.002 (0.001)    | 0.270 (0.065)    | 0 (0.000) |    12.67 | AcilioN, bekker, Griller, niko, qx |
|            1 |     1586 | 2025-06-06 | TPuDCATb TPu | L   | 0.621      | -            | -                | -                | -         |    -2.87 | AcilioN, bekker, Griller, niko, qx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
