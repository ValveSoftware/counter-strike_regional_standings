### Roster Details<br />
Team Name: BadGuys<br />
Roster: BOROS, hAdji, leen, Sapec, Woro2k<br />
Global Rank: [250](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [142]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  548.4<br />
<br />
Final Rank Value (548.4) = Starting Rank Value (520.0) + Head To Head Adjustments (28.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 520.0
- 400 + ( ( 0.062 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 520.0


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
|            6 |      735 | 2025-01-09 | kONO             | L   | 0.847      | -            | -                | -                | -         |   -11.78 | BOROS, hAdji, leen, Sapec, Woro2k |
|            5 |      739 | 2025-01-08 | FLuffy Gangsters | W   | 0.841      | 0.143        | 0.006 (0.001)    | 0.409 (0.049)    | 0 (0.000) |    17.54 | hAdji, leen, Sapec, VLDN, Woro2k  |
|            4 |      748 | 2025-01-06 | WOPA             | W   | 0.826      | 0.143        | 0.028 (0.003)    | 0.517 (0.061)    | 0 (0.000) |    20.42 | hAdji, leen, Sapec, VLDN, Woro2k  |
|            3 |      751 | 2025-01-05 | los kogutos      | L   | 0.819      | -            | -                | -                | -         |   -13.71 | BOROS, hAdji, leen, VLDN, Woro2k  |
|            2 |      761 | 2025-01-03 | ECSTATIC         | L   | 0.805      | -            | -                | -                | -         |    -3.03 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            1 |      768 | 2024-12-28 | GenOne           | W   | 0.768      | 0.143        | 0.008 (0.001)    | 0.538 (0.059)    | 0 (0.000) |    18.93 | hAdji, Patti, Sapec, VLDN, Woro2k |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
