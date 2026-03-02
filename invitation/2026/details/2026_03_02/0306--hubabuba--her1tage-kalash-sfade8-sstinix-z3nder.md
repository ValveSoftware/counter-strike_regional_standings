### Roster Details<br />
Team Name: HubaBuba<br />
Roster: her1tage, kAlash, sFade8, sstiNiX, z3ndeR<br />
Global Rank: [306](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [182]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  493.2<br />
<br />
Final Rank Value (493.2) = Starting Rank Value (485.8) + Head To Head Adjustments (7.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.176[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.045<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 485.8
- 400 + ( ( 0.045 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 485.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     3289 | 2025-10-27 | ALLINNERS   | L   | 0.358      | -            | -                | -                | -         |    -2.87 | her1tage, kAlash, sFade8, sstiNiX, z3ndeR      |
|           14 |     3336 | 2025-10-26 | HYPERSPIRIT | W   | 0.353      | 0.344        | 0.000 (0.000)    | 0.317 (0.039)    | 0 (0.000) |     9.51 | her1tage, kAlash, sFade8, sstiNiX, z3ndeR      |
|           13 |     3347 | 2025-10-26 | ALLINNERS   | L   | 0.352      | -            | -                | -                | -         |    -2.77 | her1tage, kAlash, sFade8, sstiNiX, z3ndeR      |
|           12 |     3378 | 2025-10-25 | NOVAQ       | L   | 0.347      | -            | -                | -                | -         |    -0.35 | her1tage, kAlash, sFade8, sstiNiX, z3ndeR      |
|           11 |     3429 | 2025-10-24 | ALLINNERS   | L   | 0.341      | -            | -                | -                | -         |    -2.71 | her1tage, iDISBALANCE, sFade8, sstiNiX, z3ndeR |
|           10 |     3484 | 2025-10-23 | KOLESIE     | L   | 0.334      | -            | -                | -                | -         |    -0.17 | her1tage, kAlash, sFade8, sstiNiX, z3ndeR      |
|            9 |     3515 | 2025-10-23 | Dziuseppe   | W   | 0.331      | 0.384        | 0.002 (0.000)    | 0.064 (0.008)    | 0 (0.000) |     7.98 | her1tage, kAlash, sFade8, sstiNiX, z3ndeR      |
|            8 |     3528 | 2025-10-22 | UNiTY       | L   | 0.326      | -            | -                | -                | -         |    -1.00 | her1tage, kAlash, sFade8, sstiNiX, z3ndeR      |
|            7 |     3570 | 2025-10-19 | CPH Wolves  | L   | 0.307      | -            | -                | -                | -         |    -1.80 | her1tage, kAlash, sFade8, sstiNiX, z3ndeR      |
|            6 |     3591 | 2025-10-18 | The Glecs   | W   | 0.300      | 0.384        | 0.000 (0.000)    | 0.035 (0.004)    | 0 (0.000) |     5.09 | her1tage, kAlash, sFade8, sstiNiX, z3ndeR      |
|            5 |     3620 | 2025-10-17 | kONO        | L   | 0.293      | -            | -                | -                | -         |    -1.45 | kAlash, markovich, sFade8, sstiNiX, z3ndeR     |
|            4 |     3952 | 2025-10-07 | ARCRED      | L   | 0.227      | -            | -                | -                | -         |    -0.31 | kAlash, markovich, sFade8, sstiNiX, z3ndeR     |
|            3 |     4013 | 2025-10-06 | Partizan    | L   | 0.221      | -            | -                | -                | -         |    -1.52 | kAlash, markovich, sFade8, sstiNiX, z3ndeR     |
|            2 |     4249 | 2025-10-01 | ARCRED      | L   | 0.186      | -            | -                | -                | -         |    -0.24 | kAlash, markovich, sFade8, sstiNiX, z3ndeR     |
|            1 |     4276 | 2025-09-30 | Nemesis     | L   | 0.180      | -            | -                | -                | -         |    -0.06 | kAlash, markovich, sFade8, sstiNiX, z3ndeR     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
