### Roster Details<br />
Team Name: VP.Prodigy<br />
Roster: AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1<br />
Global Rank: [103](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [69]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  843.4<br />
<br />
Final Rank Value (843.4) = Starting Rank Value (863.5) + Head To Head Adjustments (-20.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.365[<sup>1</sup>](#table2)
- Bounty Collected: 0.384[<sup>2</sup>](#table1)
- Opponent Network: 0.094[<sup>2</sup>](#table1)
- LAN Wins: 0.146[<sup>2</sup>](#table1)

The average of these factors is 0.247<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 863.5
- 400 + ( ( 0.247 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 863.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |       90 | 2025-10-27 | TPuDCATb TPu | L   | 1.000      | -            | -                | -                | -         |   -10.79 | AquaRS, F0R3VER, lasfas, TriBorgg1, turbo   |
|           18 |      125 | 2025-10-26 | Nexus        | L   | 1.000      | -            | -                | -                | -         |   -15.62 | AquaRS, F0R3VER, lasfas, TriBorgg1, turbo   |
|           17 |      176 | 2025-10-23 | Fire Flux    | W   | 1.000      | 0.435        | 0.002 (0.001)    | 0.454 (0.197)    | 0 (0.000) |    12.04 | AquaRS, F0R3VER, lasfas, TriBorgg1, turbo   |
|           16 |      190 | 2025-10-22 | SPARTA       | L   | 1.000      | -            | -                | -                | -         |   -17.07 | AquaRS, F0R3VER, lasfas, TriBorgg1, turbo   |
|           15 |      593 | 2025-10-07 | GUN5         | L   | 1.000      | -            | -                | -                | -         |    -8.35 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           14 |      655 | 2025-10-06 | 500          | L   | 1.000      | -            | -                | -                | -         |   -10.02 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           13 |      712 | 2025-10-05 | Betclic      | L   | 1.000      | -            | -                | -                | -         |   -16.16 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           12 |      769 | 2025-10-04 | EYEBALLERS   | L   | 1.000      | -            | -                | -                | -         |   -11.68 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           11 |      886 | 2025-10-01 | Nexus        | L   | 0.980      | -            | -                | -                | -         |   -15.46 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           10 |     2103 | 2025-08-23 | NOVAQ        | W   | 0.720      | 0.372        | 0.014 (0.004)    | 0.409 (0.110)    | 1 (0.720) |     8.74 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            9 |     2109 | 2025-08-23 | Flame Sharks | W   | 0.718      | 0.372        | 0.002 (0.001)    | 0.000 (0.000)    | 1 (0.718) |     2.18 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            8 |     2242 | 2025-08-17 | UNiTY        | W   | 0.679      | 0.278        | 0.002 (0.000)    | 0.431 (0.081)    | 0 (0.000) |     5.63 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            7 |     2366 | 2025-08-14 | K27          | W   | 0.660      | 0.278        | 0.003 (0.000)    | 0.269 (0.049)    | 0 (0.000) |     5.33 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            6 |     2595 | 2025-08-08 | QWENTRY      | W   | 0.621      | 0.278        | 0.000 (0.000)    | 0.034 (0.006)    | 0 (0.000) |     2.14 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            5 |     2665 | 2025-08-03 | ECSTATIC     | L   | 0.587      | -            | -                | -                | -         |    -2.05 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            4 |     2685 | 2025-08-02 | FUT          | W   | 0.579      | 0.480        | 0.170 (0.047)    | 0.567 (0.157)    | 0 (0.000) |    16.08 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            3 |     2709 | 2025-08-01 | Liquid       | W   | 0.572      | 0.480        | 0.583 (0.160)    | 0.570 (0.156)    | 0 (0.000) |    17.91 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            2 |     2889 | 2025-07-20 | FUT          | W   | 0.494      | 0.419        | 0.170 (0.035)    | 0.567 (0.117)    | 0 (0.000) |    14.01 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            1 |     2892 | 2025-07-20 | Leo          | W   | 0.493      | 0.419        | 0.000 (0.000)    | 0.339 (0.070)    | 0 (0.000) |     3.09 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,211.99)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-23 |      0.720 | $13,921.00     | $10,023.23      |
| 2025-08-17 |      0.679 | $1,750.00      | $1,188.77       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
