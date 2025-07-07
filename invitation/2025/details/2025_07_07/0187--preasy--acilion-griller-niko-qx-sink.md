### Roster Details<br />
Team Name: Preasy<br />
Roster: AcilioN, Griller, niko, qx, SinK<br />
Global Rank: [187](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [101]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  606.3<br />
<br />
Final Rank Value (606.3) = Starting Rank Value (569.5) + Head To Head Adjustments (36.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.110[<sup>2</sup>](#table1)

The average of these factors is 0.091<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 569.5
- 400 + ( ( 0.091 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 569.5


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
|            6 |      202 | 2025-06-14 | Passion UA   | L   | 1.000      | -            | -                | -                | -         |    -1.62 | AcilioN, Griller, niko, qx, SinK   |
|            5 |      218 | 2025-06-14 | Tricked      | W   | 1.000      | 0.360        | 0.017 (0.006)    | 0.320 (0.115)    | 1 (1.000) |    28.07 | AcilioN, Griller, niko, qx, SinK   |
|            4 |      234 | 2025-06-13 | TNL          | L   | 1.000      | -            | -                | -                | -         |    -0.88 | AcilioN, Griller, niko, qx, SinK   |
|            3 |      334 | 2025-06-08 | TPuDCATb TPu | L   | 1.000      | -            | -                | -                | -         |    -4.60 | AcilioN, bekker, Griller, niko, qx |
|            2 |      363 | 2025-06-07 | UNiTY        | W   | 0.998      | 0.143        | 0.001 (0.000)    | 0.272 (0.039)    | 0 (0.000) |    19.57 | AcilioN, bekker, Griller, niko, qx |
|            1 |      369 | 2025-06-06 | TPuDCATb TPu | L   | 0.993      | -            | -                | -                | -         |    -3.83 | AcilioN, bekker, Griller, niko, qx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
