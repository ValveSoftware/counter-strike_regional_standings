### Roster Details<br />
Team Name: MANA<br />
Roster: ammar, BledarD, Caleyy, cerber, gejmzilla<br />
Global Rank: [219](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [127]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  566.8<br />
<br />
Final Rank Value (566.8) = Starting Rank Value (553.4) + Head To Head Adjustments (13.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.077[<sup>2</sup>](#table1)

The average of these factors is 0.082<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 553.4
- 400 + ( ( 0.082 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 553.4


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
|           15 |      786 | 2025-10-04 | m1x            | L   | 0.998      | -            | -                | -                | -         |    -9.52 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           14 |      812 | 2025-10-03 | Dziuseppe      | W   | 0.993      | 0.344        | 0.005 (0.002)    | 0.357 (0.122)    | 0 (0.000) |    23.66 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           13 |      848 | 2025-10-02 | m1x            | L   | 0.986      | -            | -                | -                | -         |    -8.93 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           12 |     1147 | 2025-09-25 | GenOne         | L   | 0.940      | -            | -                | -                | -         |    -9.93 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           11 |     1164 | 2025-09-25 | Passion UA     | L   | 0.938      | -            | -                | -                | -         |    -0.37 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           10 |     1979 | 2025-08-29 | ENCE           | L   | 0.758      | -            | -                | -                | -         |    -0.45 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            9 |     1994 | 2025-08-29 | Insiders       | W   | 0.757      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.757) |     6.62 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            8 |     2883 | 2025-07-21 | m1x            | L   | 0.499      | -            | -                | -                | -         |    -4.45 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            7 |     2976 | 2025-07-17 | HubaBuba       | L   | 0.473      | -            | -                | -                | -         |    -4.75 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            6 |     3052 | 2025-07-14 | Fire Flux      | W   | 0.451      | 0.435        | 0.002 (0.000)    | 0.454 (0.089)    | 0 (0.000) |    10.13 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            5 |     3179 | 2025-07-09 | GUN5           | L   | 0.419      | -            | -                | -                | -         |    -1.50 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            4 |     3236 | 2025-07-02 | KHAN           | W   | 0.373      | 0.435        | 0.002 (0.000)    | 0.582 (0.094)    | 0 (0.000) |     9.32 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            3 |     3289 | 2025-06-24 | TPuDCATb TPu   | L   | 0.319      | -            | -                | -                | -         |    -1.21 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            2 |     3701 | 2025-05-29 | Fisher College | W   | 0.145      | 0.384        | 0.000 (0.000)    | 0.027 (0.001)    | 0 (0.000) |     1.91 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            1 |     3735 | 2025-05-26 | UNiTY          | W   | 0.125      | 0.384        | 0.002 (0.000)    | 0.431 (0.021)    | 0 (0.000) |     2.90 | ammar, BledarD, Caleyy, gejmzilla, tripey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
