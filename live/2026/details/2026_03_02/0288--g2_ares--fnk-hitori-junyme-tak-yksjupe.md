### Roster Details<br />
Team Name: G2 Ares<br />
Roster: fNk, hitori, Junyme, tAk, yksjupe<br />
Global Rank: [288](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [173]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  521.7<br />
<br />
Final Rank Value (521.7) = Starting Rank Value (497.2) + Head To Head Adjustments (24.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.195[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 497.2
- 400 + ( ( 0.051 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 497.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       73 | 2026-02-27 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -10.87 | hitori, Junyme, SHiNE, tAk, yksjupe |
|            9 |      815 | 2026-02-12 | Bushido Wildcats  | L   | 1.000      | -            | -                | -                | -         |    -6.18 | hitori, Junyme, SHiNE, tAk, yksjupe |
|            8 |     1948 | 2025-12-18 | Acend             | L   | 0.707      | -            | -                | -                | -         |    -0.91 | fNk, hitori, Junyme, tAk, yksjupe   |
|            7 |     1956 | 2025-12-18 | fnatic            | L   | 0.706      | -            | -                | -                | -         |    -0.31 | fNk, hitori, Junyme, tAk, yksjupe   |
|            6 |     1965 | 2025-12-17 | aimclub           | W   | 0.701      | 0.339        | 0.000 (0.000)    | 0.188 (0.045)    | 1 (0.701) |    16.79 | fNk, hitori, Junyme, tAk, yksjupe   |
|            5 |     1975 | 2025-12-17 | Acend             | L   | 0.699      | -            | -                | -                | -         |    -0.79 | fNk, hitori, Junyme, tAk, yksjupe   |
|            4 |     1982 | 2025-12-17 | aimclub           | W   | 0.698      | 0.339        | 0.000 (0.000)    | 0.188 (0.044)    | 1 (0.698) |    17.38 | fNk, hitori, Junyme, tAk, yksjupe   |
|            3 |     2546 | 2025-11-20 | Nexus             | L   | 0.521      | -            | -                | -                | -         |    -0.99 | Fessor, fNk, Junyme, tAk, yksjupe   |
|            2 |     2552 | 2025-11-20 | INFINITE          | W   | 0.520      | 0.339        | 0.000 (0.000)    | 0.111 (0.019)    | 1 (0.520) |    11.01 | Fessor, fNk, Junyme, tAk, yksjupe   |
|            1 |     2565 | 2025-11-20 | STATE             | L   | 0.519      | -            | -                | -                | -         |    -0.68 | Fessor, fNk, Junyme, tAk, yksjupe   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
