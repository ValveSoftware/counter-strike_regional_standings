### Roster Details<br />
Team Name: Noir Verse<br />
Roster: fostar, kirxttu, Naginat, Santuriano, xeNji<br />
Global Rank: [165](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [117]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  811.6<br />
<br />
Final Rank Value (811.6) = Starting Rank Value (786.7) + Head To Head Adjustments (24.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.313[<sup>2</sup>](#table1)

The average of these factors is 0.205<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 786.7
- 400 + ( ( 0.205 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 786.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      228 | 2026-06-18 | FOKUS    | L   | 1.000      | -            | -                | -                | -         |    -2.17 | fostar, kirxttu, Naginat, Santuriano, xeNji |
|            6 |      291 | 2026-06-14 | Nexus    | L   | 1.000      | -            | -                | -                | -         |   -13.38 | fostar, kirxttu, Naginat, Santuriano, xeNji |
|            5 |      300 | 2026-06-13 | aimclub  | W   | 1.000      | 0.373        | 0.001 (0.000)    | 0.298 (0.111)    | 1 (1.000) |    16.36 | fostar, kirxttu, Naginat, Santuriano, xeNji |
|            4 |      309 | 2026-06-13 | Entropy  | W   | 1.000      | 0.373        | 0.004 (0.002)    | 0.323 (0.121)    | 1 (1.000) |    15.32 | fostar, kirxttu, Naginat, Santuriano, xeNji |
|            3 |      324 | 2026-06-13 | atputies | W   | 1.000      | 0.373        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     3.09 | fostar, kirxttu, Naginat, Santuriano, xeNji |
|            2 |      332 | 2026-06-13 | EAC      | L   | 1.000      | -            | -                | -                | -         |    -6.57 | fostar, kirxttu, Naginat, Santuriano, xeNji |
|            1 |      456 | 2026-06-07 | WBT      | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.256 (0.037)    | 0 (0.000) |    12.27 | fostar, kirxttu, Naginat, Santuriano, xeNji |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($750.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-14 |      1.000 | $750.00        | $750.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
