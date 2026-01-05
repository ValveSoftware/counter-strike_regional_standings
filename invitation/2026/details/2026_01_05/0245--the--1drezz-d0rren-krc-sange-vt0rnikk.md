### Roster Details<br />
Team Name: THE<br />
Roster: 1Drezz, d0RREN, krc, Sange, vt0rnikk<br />
Global Rank: [245](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [148]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  566.0<br />
<br />
Final Rank Value (566.0) = Starting Rank Value (521.7) + Head To Head Adjustments (44.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 521.7
- 400 + ( ( 0.061 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 521.7


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
|            7 |     2531 | 2025-09-29 | 1win      | L   | 0.548      | -            | -                | -                | -         |    -1.84 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            6 |     2625 | 2025-09-27 | ALGO      | W   | 0.534      | 0.384        | 0.005 (0.001)    | 0.245 (0.050)    | 0 (0.000) |    15.37 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            5 |     2675 | 2025-09-26 | ARCRED    | W   | 0.527      | 0.384        | 0.009 (0.002)    | 0.736 (0.149)    | 0 (0.000) |    14.81 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            4 |     2933 | 2025-09-18 | Oramond   | L   | 0.472      | -            | -                | -                | -         |    -0.68 | 1Drezz, d0RREN, KarmaN, krc, Sange   |
|            3 |     2953 | 2025-09-17 | ComeBack  | W   | 0.467      | 0.384        | 0.001 (0.000)    | 0.168 (0.030)    | 0 (0.000) |     9.91 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            2 |     3072 | 2025-09-13 | The Glecs | W   | 0.444      | 0.384        | 0.000 (0.000)    | 0.137 (0.023)    | 0 (0.000) |     8.21 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            1 |     3096 | 2025-09-13 | 1win      | L   | 0.440      | -            | -                | -                | -         |    -1.49 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
