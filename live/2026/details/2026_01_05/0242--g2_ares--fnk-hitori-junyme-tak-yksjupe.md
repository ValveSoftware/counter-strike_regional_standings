### Roster Details<br />
Team Name: G2 Ares<br />
Roster: fNk, hitori, Junyme, tAk, yksjupe<br />
Global Rank: [242](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [147]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  573.8<br />
<br />
Final Rank Value (573.8) = Starting Rank Value (554.9) + Head To Head Adjustments (18.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.306[<sup>2</sup>](#table1)

The average of these factors is 0.078<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 554.9
- 400 + ( ( 0.078 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 554.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      168 | 2025-12-18 | Acend    | L   | 1.000      | -            | -                | -                | -         |    -2.36 | fNk, hitori, Junyme, tAk, yksjupe |
|            7 |      176 | 2025-12-18 | fnatic   | L   | 1.000      | -            | -                | -                | -         |    -0.21 | fNk, hitori, Junyme, tAk, yksjupe |
|            6 |      185 | 2025-12-17 | aimclub  | W   | 1.000      | 0.339        | 0.000 (0.000)    | 0.089 (0.030)    | 1 (1.000) |    13.09 | fNk, hitori, Junyme, tAk, yksjupe |
|            5 |      195 | 2025-12-17 | Acend    | L   | 1.000      | -            | -                | -                | -         |    -2.17 | fNk, hitori, Junyme, tAk, yksjupe |
|            4 |      202 | 2025-12-17 | aimclub  | W   | 1.000      | 0.339        | 0.000 (0.000)    | 0.089 (0.030)    | 1 (1.000) |    13.69 | fNk, hitori, Junyme, tAk, yksjupe |
|            3 |      766 | 2025-11-20 | Nexus    | L   | 0.894      | -            | -                | -                | -         |    -2.55 | Fessor, fNk, Junyme, tAk, yksjupe |
|            2 |      772 | 2025-11-20 | INFINITE | W   | 0.893      | 0.339        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.893) |     8.34 | Fessor, fNk, Junyme, tAk, yksjupe |
|            1 |      785 | 2025-11-20 | WOPA     | L   | 0.892      | -            | -                | -                | -         |    -8.97 | Fessor, fNk, Junyme, tAk, yksjupe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
