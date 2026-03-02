### Roster Details<br />
Team Name: THE<br />
Roster: 1Drezz, d0RREN, krc, Sange, vt0rnikk<br />
Global Rank: [302](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [178]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  503.5<br />
<br />
Final Rank Value (503.5) = Starting Rank Value (494.0) + Head To Head Adjustments (9.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.193[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 494.0
- 400 + ( ( 0.050 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 494.0


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
|            7 |     4311 | 2025-09-29 | 1win      | L   | 0.174      | -            | -                | -                | -         |    -0.22 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            6 |     4405 | 2025-09-27 | ALGO      | W   | 0.161      | 0.384        | 0.000 (0.000)    | 0.037 (0.002)    | 0 (0.000) |     2.52 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            5 |     4455 | 2025-09-26 | ARCRED    | W   | 0.154      | 0.384        | 0.011 (0.001)    | 0.942 (0.056)    | 0 (0.000) |     4.64 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            4 |     4713 | 2025-09-18 | Oramond   | L   | 0.098      | -            | -                | -                | -         |    -0.20 | 1Drezz, d0RREN, KarmaN, krc, Sange   |
|            3 |     4733 | 2025-09-17 | ComeBack  | W   | 0.094      | 0.384        | 0.000 (0.000)    | 0.055 (0.002)    | 0 (0.000) |     1.97 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            2 |     4852 | 2025-09-13 | The Glecs | W   | 0.070      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.82 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            1 |     4876 | 2025-09-13 | 1win      | L   | 0.067      | -            | -                | -                | -         |    -0.08 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
