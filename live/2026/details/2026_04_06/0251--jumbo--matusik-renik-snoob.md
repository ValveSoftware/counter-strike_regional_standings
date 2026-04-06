### Roster Details<br />
Team Name: JUMBO<br />
Roster: matusik, reNIK, Snoob<br />
Global Rank: [251](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [162]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  651.4<br />
<br />
Final Rank Value (651.4) = Starting Rank Value (619.9) + Head To Head Adjustments (31.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.177[<sup>2</sup>](#table1)

The average of these factors is 0.112<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 619.9
- 400 + ( ( 0.112 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 619.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      157 | 2026-04-02 | 1win     | L   | 1.000      | -            | -                | -                | -         |    -0.71 | kinyx, matusik, reNIK, Snoob, str0ngl |
|            6 |      168 | 2026-04-02 | NOVAQ    | W   | 1.000      | 0.435        | 0.023 (0.010)    | 0.525 (0.228)    | 1 (1.000) |    28.43 | kinyx, matusik, reNIK, Snoob, str0ngl |
|            5 |      169 | 2026-04-02 | 1win     | L   | 1.000      | -            | -                | -                | -         |    -0.58 | kinyx, matusik, reNIK, Snoob, str0ngl |
|            4 |     2992 | 2026-02-01 | BET-M    | L   | 0.775      | -            | -                | -                | -         |    -0.43 | DeDe, matusik, Proper, reNIK, Snoob   |
|            3 |     2998 | 2026-02-01 | Gluck    | W   | 0.774      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.774) |     5.42 | DeDe, matusik, Proper, reNIK, Snoob   |
|            2 |     3014 | 2026-02-01 | BET-M    | L   | 0.773      | -            | -                | -                | -         |    -0.40 | DeDe, matusik, Proper, reNIK, Snoob   |
|            1 |     5451 | 2025-10-21 | NOVAQ    | L   | 0.085      | -            | -                | -                | -         |    -0.17 | DeDe, fiction, matusik, reNIK, Snoob  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
