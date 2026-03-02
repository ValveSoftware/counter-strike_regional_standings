### Roster Details<br />
Team Name: FOKUS<br />
Roster: Banjo, Jorko, Matheos, volt, ztr<br />
Global Rank: [179](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [123]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  750.8<br />
<br />
Final Rank Value (750.8) = Starting Rank Value (577.8) + Head To Head Adjustments (173.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.329[<sup>2</sup>](#table1)
- Opponent Network: 0.047[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.094<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 577.8
- 400 + ( ( 0.094 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 577.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |        7 | 2026-03-01 | Inner Circle | W   | 1.000      | 0.143        | 0.129 (0.018)    | 0.532 (0.076)    | 0 (0.000) |    28.17 | Banjo, Jorko, Matheos, volt, ztr |
|            5 |       38 | 2026-02-28 | EYEBALLERS   | W   | 1.000      | 0.143        | 0.182 (0.026)    | 0.707 (0.101)    | 0 (0.000) |    29.99 | Banjo, Jorko, Matheos, volt, ztr |
|            4 |       61 | 2026-02-27 | Inner Circle | W   | 1.000      | 0.143        | 0.129 (0.018)    | 0.532 (0.076)    | 0 (0.000) |    28.53 | Banjo, Jorko, Matheos, volt, ztr |
|            3 |      113 | 2026-02-26 | BetBoom      | W   | 1.000      | 0.143        | 0.157 (0.022)    | 0.931 (0.133)    | 0 (0.000) |    31.14 | Banjo, Jorko, Matheos, volt, ztr |
|            2 |      536 | 2026-02-17 | Rune Eaters  | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.143 (0.020)    | 0 (0.000) |    27.24 | Banjo, Jorko, Matheos, volt, ztr |
|            1 |      548 | 2026-02-17 | JiJieHao     | W   | 1.000      | 0.143        | 0.030 (0.004)    | 0.450 (0.064)    | 0 (0.000) |    27.96 | Banjo, Jorko, Matheos, volt, ztr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
