### Roster Details<br />
Team Name: MANA<br />
Roster: ammar, BledarD, Caleyy, cerber, gejmzilla<br />
Global Rank: [171](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [97]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  634.0<br />
<br />
Final Rank Value (634.0) = Starting Rank Value (598.3) + Head To Head Adjustments (35.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.242[<sup>2</sup>](#table1)
- Opponent Network: 0.057[<sup>2</sup>](#table1)
- LAN Wins: 0.115[<sup>2</sup>](#table1)

The average of these factors is 0.103<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 598.3
- 400 + ( ( 0.103 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 598.3


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
|           16 |       59 | 2025-08-29 | ENCE           | L   | 1.000      | -            | -                | -                | -         |    -1.27 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           15 |       72 | 2025-08-29 | Insiders       | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     6.65 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           14 |      851 | 2025-07-21 | m1x            | L   | 0.920      | -            | -                | -                | -         |    -9.90 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           13 |      944 | 2025-07-17 | AMKAL          | L   | 0.893      | -            | -                | -                | -         |   -11.30 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           12 |     1020 | 2025-07-14 | Fire Flux      | W   | 0.872      | 0.435        | 0.002 (0.001)    | 0.323 (0.122)    | 0 (0.000) |    16.81 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           11 |     1147 | 2025-07-09 | GUN5           | L   | 0.839      | -            | -                | -                | -         |    -4.57 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           10 |     1204 | 2025-07-02 | KHAN           | W   | 0.793      | 0.435        | 0.009 (0.003)    | 0.612 (0.211)    | 0 (0.000) |    17.29 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            9 |     1257 | 2025-06-24 | TPuDCATb TPu   | L   | 0.740      | -            | -                | -                | -         |    -5.68 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            8 |     1669 | 2025-05-29 | Fisher College | W   | 0.566      | 0.384        | 0.001 (0.000)    | 0.160 (0.035)    | 0 (0.000) |    10.51 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            7 |     1703 | 2025-05-26 | UNiTY          | W   | 0.546      | 0.384        | 0.002 (0.000)    | 0.270 (0.057)    | 0 (0.000) |     9.96 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            6 |     2265 | 2025-05-02 | GUN5           | L   | 0.388      | -            | -                | -                | -         |    -1.72 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            5 |     2368 | 2025-04-28 | ECLOT          | L   | 0.360      | -            | -                | -                | -         |    -1.94 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            4 |     2441 | 2025-04-25 | fnatic         | L   | 0.340      | -            | -                | -                | -         |    -0.12 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            3 |     2480 | 2025-04-22 | 9INE           | W   | 0.321      | 0.359        | 0.022 (0.003)    | 1.000 (0.115)    | 0 (0.000) |     9.90 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            2 |     3629 | 2025-03-15 | AMKAL          | L   | 0.067      | -            | -                | -                | -         |    -0.64 | ammar, Caleyy, gejmzilla, tripey, v1w     |
|            1 |     3639 | 2025-03-15 | Betera         | W   | 0.066      | 0.624        | 0.009 (0.000)    | 0.718 (0.030)    | 0 (0.000) |     1.70 | ammar, Caleyy, gejmzilla, tripey, v1w     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
