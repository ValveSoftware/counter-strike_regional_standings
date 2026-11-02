### Roster Details<br />
Team Name: Banger Gang<br />
Roster: duggy, hatex, licaNy, Rip, Viresse<br />
Global Rank: [286](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [191]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  586.5<br />
<br />
Final Rank Value (586.5) = Starting Rank Value (529.4) + Head To Head Adjustments (57.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.069<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 529.4
- 400 + ( ( 0.069 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 529.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     1900 | 2026-09-18 | NAVI Junior | L   | 0.901      | -            | -                | -                | -         |    -1.47 | duggy, hatex, licaNy, Rip, Viresse |
|            8 |     2009 | 2026-09-16 | ZOTIX       | W   | 0.888      | 0.357        | 0.000 (0.000)    | 0.081 (0.026)    | 0 (0.000) |    12.36 | duggy, hatex, licaNy, Rip, Viresse |
|            7 |     2069 | 2026-09-14 | Dark Moon   | W   | 0.874      | 0.357        | 0.000 (0.000)    | 0.026 (0.008)    | 0 (0.000) |     7.71 | duggy, hatex, licaNy, Rip, Viresse |
|            6 |     2197 | 2026-09-11 | WBT Academy | W   | 0.854      | 0.357        | 0.031 (0.010)    | 0.673 (0.205)    | 0 (0.000) |    24.26 | duggy, hatex, licaNy, Rip, Viresse |
|            5 |     2375 | 2026-09-08 | Younglings  | W   | 0.834      | 0.357        | 0.001 (0.000)    | 0.109 (0.032)    | 0 (0.000) |    16.67 | duggy, hatex, licaNy, Rip, Viresse |
|            4 |     2509 | 2026-09-05 | NAVI Junior | L   | 0.814      | -            | -                | -                | -         |    -0.62 | duggy, hatex, licaNy, qw1, Viresse |
|            3 |     4850 | 2026-06-08 | DONSTU      | L   | 0.221      | -            | -                | -                | -         |    -1.51 | hatex, mini, R4DYX, Rip, Viresse   |
|            2 |     4929 | 2026-06-05 | ZOTIX       | W   | 0.201      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.08 | hatex, mini, R4DYX, Rip, Viresse   |
|            1 |     5028 | 2026-06-01 | NEW VISION  | L   | 0.174      | -            | -                | -                | -         |    -2.47 | duggy, hatex, mini, R4DYX, Rip     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
