### Roster Details<br />
Team Name: THE<br />
Roster: 1Drezz, d0RREN, krc, Sange, vt0rnikk<br />
Global Rank: [202](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [117]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  593.6<br />
<br />
Final Rank Value (593.6) = Starting Rank Value (527.9) + Head To Head Adjustments (65.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.061[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 527.9
- 400 + ( ( 0.068 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 527.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      950 | 2025-09-29 | 1win      | L   | 0.967      | -            | -                | -                | -         |    -4.25 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            6 |     1044 | 2025-09-27 | ALGO      | W   | 0.954      | 0.384        | 0.000 (0.000)    | 0.258 (0.094)    | 0 (0.000) |    14.31 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            5 |     1094 | 2025-09-26 | ARCRED    | W   | 0.947      | 0.384        | 0.003 (0.001)    | 0.888 (0.323)    | 0 (0.000) |    25.60 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            4 |     1352 | 2025-09-18 | Oramond   | L   | 0.891      | -            | -                | -                | -         |    -2.22 | 1Drezz, d0RREN, KarmaN, krc, Sange   |
|            3 |     1372 | 2025-09-17 | Y5        | W   | 0.887      | 0.384        | 0.003 (0.001)    | 0.284 (0.097)    | 0 (0.000) |    19.18 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            2 |     1491 | 2025-09-13 | The Glecs | W   | 0.863      | 0.384        | 0.000 (0.000)    | 0.279 (0.093)    | 0 (0.000) |    16.93 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            1 |     1515 | 2025-09-13 | 1win      | L   | 0.860      | -            | -                | -                | -         |    -3.80 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
