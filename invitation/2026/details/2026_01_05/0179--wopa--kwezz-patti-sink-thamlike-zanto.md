### Roster Details<br />
Team Name: WOPA<br />
Roster: kwezz, Patti, SinK, thamlike, Zanto<br />
Global Rank: [179](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [120]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  712.6<br />
<br />
Final Rank Value (712.6) = Starting Rank Value (687.5) + Head To Head Adjustments (25.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.191[<sup>2</sup>](#table1)
- Opponent Network: 0.029[<sup>2</sup>](#table1)
- LAN Wins: 0.360[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 687.5
- 400 + ( ( 0.145 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 687.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      733 | 2025-11-21 | ENCE             | L   | 0.899      | -            | -                | -                | -         |    -0.91 | kwezz, Patti, SinK, thamlike, Zanto |
|            9 |      749 | 2025-11-21 | Friendly Campers | L   | 0.898      | -            | -                | -                | -         |    -0.56 | kwezz, Patti, SinK, thamlike, Zanto |
|            8 |      782 | 2025-11-20 | Nexus            | W   | 0.892      | 0.339        | 0.002 (0.001)    | 0.796 (0.241)    | 1 (0.892) |    23.18 | kwezz, Patti, SinK, thamlike, Zanto |
|            7 |      785 | 2025-11-20 | G2 Ares          | W   | 0.892      | 0.339        | 0.000 (0.000)    | 0.078 (0.024)    | 1 (0.892) |     8.97 | kwezz, Patti, SinK, thamlike, Zanto |
|            6 |     1134 | 2025-11-07 | aimclub          | W   | 0.807      | 0.335        | 0.000 (0.000)    | 0.089 (0.024)    | 1 (0.807) |     7.53 | kwezz, Patti, SinK, thamlike, Zanto |
|            5 |     1146 | 2025-11-07 | BC.Game          | L   | 0.806      | -            | -                | -                | -         |    -2.58 | kwezz, Patti, SinK, thamlike, Zanto |
|            4 |     1160 | 2025-11-07 | Alliance         | L   | 0.806      | -            | -                | -                | -         |    -0.83 | kwezz, Patti, SinK, thamlike, Zanto |
|            3 |     1181 | 2025-11-07 | boomer demons    | W   | 0.806      | 0.335        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.806) |     4.43 | kwezz, Patti, SinK, thamlike, Zanto |
|            2 |     1187 | 2025-11-07 | AM               | L   | 0.805      | -            | -                | -                | -         |    -1.74 | kwezz, Patti, SinK, thamlike, Zanto |
|            1 |     1306 | 2025-11-03 | Flame Sharks     | L   | 0.780      | -            | -                | -                | -         |   -12.40 | kwezz, Patti, SinK, thamlike, Zanto |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
