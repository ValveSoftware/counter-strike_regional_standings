### Roster Details<br />
Team Name: MANA<br />
Roster: ammar, BledarD, Caleyy, cerber, gejmzilla<br />
Global Rank: [238](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [139]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  557.2<br />
<br />
Final Rank Value (557.2) = Starting Rank Value (547.7) + Head To Head Adjustments (9.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.058[<sup>2</sup>](#table1)

The average of these factors is 0.078<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 547.7
- 400 + ( ( 0.078 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 547.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      206 | 2025-11-21 | ComeBack         | L   | 1.000      | -            | -                | -                | -         |    -9.65 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           17 |      267 | 2025-11-19 | Eternal Fire     | L   | 1.000      | -            | -                | -                | -         |    -4.61 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           16 |      276 | 2025-11-18 | HAVU             | L   | 1.000      | -            | -                | -                | -         |    -4.89 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           15 |      281 | 2025-11-17 | Eternal Fire     | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.743 (0.106)    | 0 (0.000) |    27.14 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           14 |      810 | 2025-11-01 | Bushido Wildcats | L   | 0.999      | -            | -                | -                | -         |    -6.27 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           13 |     1807 | 2025-10-04 | m1x              | L   | 0.811      | -            | -                | -                | -         |    -9.32 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           12 |     1833 | 2025-10-03 | Dziuseppe        | W   | 0.806      | 0.344        | 0.004 (0.001)    | 0.298 (0.083)    | 0 (0.000) |    20.70 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           11 |     1869 | 2025-10-02 | m1x              | L   | 0.800      | -            | -                | -                | -         |    -9.02 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           10 |     2168 | 2025-09-25 | GenOne           | L   | 0.753      | -            | -                | -                | -         |    -2.81 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            9 |     2185 | 2025-09-25 | Passion UA       | L   | 0.752      | -            | -                | -                | -         |    -0.23 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            8 |     3000 | 2025-08-29 | ENCE             | L   | 0.572      | -            | -                | -                | -         |    -0.17 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            7 |     3015 | 2025-08-29 | Insiders         | W   | 0.571      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.571) |     5.34 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            6 |     3904 | 2025-07-21 | m1x              | L   | 0.313      | -            | -                | -                | -         |    -4.33 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            5 |     3997 | 2025-07-17 | HubaBuba         | L   | 0.286      | -            | -                | -                | -         |    -3.22 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            4 |     4073 | 2025-07-14 | Fire Flux        | W   | 0.264      | 0.435        | 0.010 (0.001)    | 0.786 (0.090)    | 0 (0.000) |     6.67 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            3 |     4200 | 2025-07-09 | GUN5             | L   | 0.232      | -            | -                | -                | -         |    -0.19 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            2 |     4257 | 2025-07-02 | KHAN             | W   | 0.186      | 0.435        | 0.001 (0.000)    | 0.384 (0.031)    | 0 (0.000) |     4.65 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            1 |     4310 | 2025-06-24 | TPuDCATb TPu     | L   | 0.133      | -            | -                | -                | -         |    -0.26 | ammar, BledarD, Caleyy, cerber, gejmzilla |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
