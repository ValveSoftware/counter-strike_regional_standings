### Roster Details<br />
Team Name: BadGuys<br />
Roster: BOROS, hAdji, leen, Sapec, Woro2k<br />
Global Rank: [247](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [143]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  550.0<br />
<br />
Final Rank Value (550.0) = Starting Rank Value (520.0) + Head To Head Adjustments (30.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.063<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 520.0
- 400 + ( ( 0.063 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 520.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      647 | 2025-01-09 | kONO             | L   | 0.892      | -            | -                | -                | -         |   -12.37 | BOROS, hAdji, leen, Sapec, Woro2k |
|            5 |      651 | 2025-01-08 | FLuffy Gangsters | W   | 0.886      | 0.143        | 0.006 (0.001)    | 0.452 (0.057)    | 0 (0.000) |    18.45 | hAdji, leen, Sapec, VLDN, Woro2k  |
|            4 |      660 | 2025-01-06 | WOPA             | W   | 0.871      | 0.143        | 0.027 (0.003)    | 0.549 (0.068)    | 0 (0.000) |    21.47 | hAdji, leen, Sapec, VLDN, Woro2k  |
|            3 |      663 | 2025-01-05 | los kogutos      | L   | 0.864      | -            | -                | -                | -         |   -14.46 | BOROS, hAdji, leen, VLDN, Woro2k  |
|            2 |      673 | 2025-01-03 | ECSTATIC         | L   | 0.850      | -            | -                | -                | -         |    -3.07 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            1 |      680 | 2024-12-28 | GenOne           | W   | 0.813      | 0.143        | 0.008 (0.001)    | 0.573 (0.067)    | 0 (0.000) |    20.05 | hAdji, Patti, Sapec, VLDN, Woro2k |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
