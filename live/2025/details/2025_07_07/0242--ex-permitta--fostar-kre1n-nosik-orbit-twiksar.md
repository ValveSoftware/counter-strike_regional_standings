### Roster Details<br />
Team Name: ex-Permitta<br />
Roster: fostar, Kre1N, Nosik, Orbit, Twiksar<br />
Global Rank: [242](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [128]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  495.3<br />
<br />
Final Rank Value (495.3) = Starting Rank Value (487.5) + Head To Head Adjustments (7.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.181[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 487.5
- 400 + ( ( 0.047 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 487.5


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
|            6 |      573 | 2025-05-21 | FORZE Reload  | L   | 0.885      | -            | -                | -                | -         |   -11.94 | fostar, Kre1N, Nosik, Orbit, Twiksar   |
|            5 |      616 | 2025-05-19 | CPH Wolves    | L   | 0.874      | -            | -                | -                | -         |    -4.28 | fostar, Kre1N, Orbit, Tionix, Twiksar  |
|            4 |      621 | 2025-05-19 | Mousquetaires | L   | 0.873      | -            | -                | -                | -         |   -14.30 | fostar, Kre1N, Orbit, P4TriCK, Twiksar |
|            3 |      640 | 2025-05-18 | UNiTY         | W   | 0.866      | 0.143        | 0.001 (0.000)    | 0.272 (0.034)    | 0 (0.000) |    19.97 | fostar, Kre1N, Orbit, Tionix, Twiksar  |
|            2 |      656 | 2025-05-17 | Alliance      | L   | 0.859      | -            | -                | -                | -         |    -1.95 | fostar, Kre1N, Orbit, Tionix, Twiksar  |
|            1 |      682 | 2025-05-16 | UNiTY         | W   | 0.852      | 0.143        | 0.001 (0.000)    | 0.272 (0.033)    | 0 (0.000) |    20.33 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
