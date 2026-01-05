### Roster Details<br />
Team Name: VP.Prodigy<br />
Roster: AquaRS, F0R3VER, kaito, sun, TriBorgg1<br />
Global Rank: [138](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [95]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  831.3<br />
<br />
Final Rank Value (831.3) = Starting Rank Value (814.3) + Head To Head Adjustments (17.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.347[<sup>1</sup>](#table2)
- Bounty Collected: 0.323[<sup>2</sup>](#table1)
- Opponent Network: 0.102[<sup>2</sup>](#table1)
- LAN Wins: 0.063[<sup>2</sup>](#table1)

The average of these factors is 0.209<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 814.3
- 400 + ( ( 0.209 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 814.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |      123 | 2025-12-20 | Phantom       | L   | 1.000      | -            | -                | -                | -         |    -5.32 | AquaRS, F0R3VER, kaito, sun, TriBorgg1      |
|           26 |      293 | 2025-12-09 | Johnny Speeds | L   | 1.000      | -            | -                | -                | -         |    -4.62 | AquaRS, F0R3VER, kaito, sun, TriBorgg1      |
|           25 |      312 | 2025-12-08 | magic         | L   | 1.000      | -            | -                | -                | -         |    -5.94 | AquaRS, F0R3VER, kaito, sun, TriBorgg1      |
|           24 |      353 | 2025-12-06 | FORZE Reload  | W   | 1.000      | 0.371        | 0.002 (0.001)    | 0.434 (0.161)    | 0 (0.000) |    19.13 | AquaRS, F0R3VER, kaito, sun, TriBorgg1      |
|           23 |      422 | 2025-12-03 | CPH Wolves    | W   | 0.979      | 0.371        | 0.003 (0.001)    | 0.816 (0.296)    | 0 (0.000) |    22.26 | AquaRS, F0R3VER, kaito, sun, TriBorgg1      |
|           22 |     1233 | 2025-11-06 | FAVBET        | L   | 0.799      | -            | -                | -                | -         |    -5.29 | AquaRS, F0R3VER, lasfas, ProbLeM, TriBorgg1 |
|           21 |     1498 | 2025-10-27 | 33            | L   | 0.733      | -            | -                | -                | -         |    -4.22 | AquaRS, F0R3VER, lasfas, TriBorgg1, turbo   |
|           20 |     1568 | 2025-10-26 | Nexus         | L   | 0.725      | -            | -                | -                | -         |    -4.61 | AquaRS, F0R3VER, lasfas, TriBorgg1, turbo   |
|           19 |     1601 | 2025-10-25 | ECLOT         | L   | 0.721      | -            | -                | -                | -         |    -3.47 | AquaRS, F0R3VER, lasfas, TriBorgg1, turbo   |
|           18 |     1660 | 2025-10-24 | AaB           | L   | 0.714      | -            | -                | -                | -         |   -12.95 | AquaRS, F0R3VER, lasfas, TriBorgg1, turbo   |
|           17 |     1709 | 2025-10-23 | Fire Flux     | W   | 0.707      | 0.435        | 0.019 (0.006)    | 0.856 (0.263)    | 0 (0.000) |    13.17 | AquaRS, F0R3VER, lasfas, TriBorgg1, turbo   |
|           16 |     1747 | 2025-10-22 | SPARTA        | L   | 0.700      | -            | -                | -                | -         |    -9.00 | AquaRS, F0R3VER, lasfas, TriBorgg1, turbo   |
|           15 |     2174 | 2025-10-07 | GUN5          | L   | 0.601      | -            | -                | -                | -         |    -1.47 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           14 |     2236 | 2025-10-06 | 500           | L   | 0.594      | -            | -                | -                | -         |    -4.14 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           13 |     2293 | 2025-10-05 | Betclic       | L   | 0.588      | -            | -                | -                | -         |    -8.43 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           12 |     2350 | 2025-10-04 | EYEBALLERS    | L   | 0.580      | -            | -                | -                | -         |    -1.00 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           11 |     2467 | 2025-10-01 | Nexus         | L   | 0.560      | -            | -                | -                | -         |    -2.90 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           10 |     3684 | 2025-08-23 | NOVAQ         | W   | 0.300      | 0.372        | 0.018 (0.002)    | 0.826 (0.092)    | 1 (0.300) |     7.08 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            9 |     3690 | 2025-08-23 | Flame Sharks  | W   | 0.298      | -            | -                | -                | 1 (0.298) |     2.68 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            8 |     3823 | 2025-08-17 | UNiTY         | W   | 0.260      | 0.278        | 0.012 (0.001)    | 0.346 (0.025)    | 0 (0.000) |     4.91 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            7 |     3947 | 2025-08-14 | K27           | W   | 0.240      | 0.278        | 0.087 (0.006)    | 0.935 (0.062)    | 0 (0.000) |     7.34 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            6 |     4176 | 2025-08-08 | Hesta         | W   | 0.201      | -            | -                | -                | 0 (0.000) |     0.72 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            5 |     4246 | 2025-08-03 | ECSTATIC      | L   | 0.167      | -            | -                | -                | -         |    -0.23 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            4 |     4266 | 2025-08-02 | FUT           | W   | 0.159      | 0.480        | 0.214 (0.016)    | 0.717 (0.055)    | 0 (0.000) |     4.95 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            3 |     4290 | 2025-08-01 | Liquid        | W   | 0.152      | 0.480        | 0.552 (0.040)    | 0.406 (0.030)    | 0 (0.000) |     4.76 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            2 |     4470 | 2025-07-20 | FUT           | W   | 0.074      | 0.419        | 0.214 (0.007)    | 0.717 (0.022)    | -         |     2.30 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            1 |     4473 | 2025-07-20 | Leo           | W   | 0.073      | 0.419        | 0.011 (0.000)    | 0.506 (0.016)    | -         |     1.35 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,634.67)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-10 |      1.000 | $1,000.00      | $1,000.00       |
| 2025-08-23 |      0.300 | $13,921.00     | $4,180.40       |
| 2025-08-17 |      0.260 | $1,750.00      | $454.27         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
