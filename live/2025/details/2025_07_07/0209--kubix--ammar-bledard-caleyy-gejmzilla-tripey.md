### Roster Details<br />
Team Name: Kubix<br />
Roster: ammar, BledarD, Caleyy, gejmzilla, tripey<br />
Global Rank: [209](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [109]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  562.9<br />
<br />
Final Rank Value (562.9) = Starting Rank Value (510.0) + Head To Head Adjustments (52.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.059<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 510.0
- 400 + ( ( 0.059 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 510.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      452 | 2025-05-29 | Fisher College | W   | 0.938      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.48 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            7 |      486 | 2025-05-26 | UNiTY          | W   | 0.919      | 0.143        | 0.001 (0.000)    | 0.272 (0.036)    | 0 (0.000) |    19.50 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            6 |     1048 | 2025-05-02 | GUN5           | L   | 0.760      | -            | -                | -                | -         |    -1.91 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            5 |     1151 | 2025-04-28 | ECLOT          | L   | 0.733      | -            | -                | -                | -         |    -1.86 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            4 |     1224 | 2025-04-25 | fnatic         | L   | 0.713      | -            | -                | -                | -         |    -0.38 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            3 |     1263 | 2025-04-22 | 9INE           | W   | 0.694      | 0.143        | 0.022 (0.002)    | 0.897 (0.089)    | 0 (0.000) |    21.21 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            2 |     2412 | 2025-03-15 | AMKAL          | L   | 0.440      | -            | -                | -                | -         |    -3.46 | ammar, Caleyy, gejmzilla, tripey, v1w     |
|            1 |     2422 | 2025-03-15 | Betera         | W   | 0.439      | 0.143        | 0.014 (0.001)    | 0.164 (0.010)    | 0 (0.000) |    11.34 | ammar, Caleyy, gejmzilla, tripey, v1w     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
