### Roster Details<br />
Team Name: VP.Prodigy<br />
Roster: AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1<br />
Global Rank: [74](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [48]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  1019.0<br />
<br />
Final Rank Value (1019.0) = Starting Rank Value (937.1) + Head To Head Adjustments (81.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.412[<sup>1</sup>](#table2)
- Bounty Collected: 0.408[<sup>2</sup>](#table1)
- Opponent Network: 0.091[<sup>2</sup>](#table1)
- LAN Wins: 0.186[<sup>2</sup>](#table1)

The average of these factors is 0.274<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 937.1
- 400 + ( ( 0.274 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 937.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1204 | 2025-08-23 | NOVAQ        | W   | 0.907      | 0.372        | 0.027 (0.009)    | 0.202 (0.068)    | 1 (0.907) |     8.16 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            9 |     1210 | 2025-08-23 | Flame Sharks | W   | 0.905      | 0.372        | 0.004 (0.001)    | 0.000 (0.000)    | 1 (0.905) |     1.97 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            8 |     1343 | 2025-08-17 | UNiTY        | W   | 0.866      | 0.278        | 0.005 (0.001)    | 0.353 (0.085)    | 0 (0.000) |     4.86 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            7 |     1467 | 2025-08-14 | K27          | W   | 0.847      | 0.278        | 0.005 (0.001)    | 0.322 (0.076)    | 0 (0.000) |     5.58 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            6 |     1694 | 2025-08-08 | Hesta        | W   | 0.808      | 0.278        | 0.000 (0.000)    | 0.070 (0.016)    | 0 (0.000) |     1.85 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            5 |     1764 | 2025-08-03 | ECSTATIC     | L   | 0.774      | -            | -                | -                | -         |    -1.93 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            4 |     1784 | 2025-08-02 | FUT          | W   | 0.766      | 0.480        | 0.221 (0.081)    | 0.606 (0.223)    | 0 (0.000) |    17.98 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            3 |     1808 | 2025-08-01 | Liquid       | W   | 0.759      | 0.480        | 0.546 (0.199)    | 0.476 (0.173)    | 0 (0.000) |    23.46 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            2 |     1988 | 2025-07-20 | FUT          | W   | 0.681      | 0.419        | 0.221 (0.063)    | 0.606 (0.173)    | 0 (0.000) |    16.81 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            1 |     1991 | 2025-07-20 | Leo          | W   | 0.680      | 0.419        | 0.000 (0.000)    | 0.324 (0.092)    | 0 (0.000) |     3.15 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,144.64)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-23 |      0.907 | $13,921.00     | $12,628.38      |
| 2025-08-17 |      0.866 | $1,750.00      | $1,516.26       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
