### Roster Details<br />
Team Name: VP.Prodigy<br />
Roster: AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1<br />
Global Rank: [140](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [86]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  686.2<br />
<br />
Final Rank Value (686.2) = Starting Rank Value (578.0) + Head To Head Adjustments (108.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.343[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.094<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 578.0
- 400 + ( ( 0.094 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 578.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |        3 | 2025-08-03 | ECSTATIC | L   | 1.000      | -            | -                | -                | -         |    -1.11 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            4 |       14 | 2025-08-02 | FUT      | W   | 1.000      | 0.143        | 0.298 (0.043)    | 0.878 (0.125)    | 0 (0.000) |    29.43 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            3 |       30 | 2025-08-01 | Liquid   | W   | 1.000      | 0.143        | 0.247 (0.035)    | 0.255 (0.036)    | 0 (0.000) |    30.81 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            2 |      167 | 2025-07-20 | FUT      | W   | 1.000      | 0.143        | 0.298 (0.043)    | 0.878 (0.125)    | 0 (0.000) |    30.12 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            1 |      170 | 2025-07-20 | Leo      | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.318 (0.045)    | 0 (0.000) |    18.98 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
