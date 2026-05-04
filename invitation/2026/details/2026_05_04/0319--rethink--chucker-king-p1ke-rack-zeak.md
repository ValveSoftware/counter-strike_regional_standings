### Roster Details<br />
Team Name: ReThink<br />
Roster: chucker, king, p1ke, Rack, zeak<br />
Global Rank: [319](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [193]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  517.8<br />
<br />
Final Rank Value (517.8) = Starting Rank Value (519.3) + Head To Head Adjustments (-1.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.053[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 519.3
- 400 + ( ( 0.064 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 519.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1238 | 2026-03-31 | TNT              | L   | 0.974      | -            | -                | -                | -         |    -5.34 | chucker, hechtikal, king, Rack, zeak |
|            7 |     1396 | 2026-03-29 | ex-Zero Tenacity | L   | 0.961      | -            | -                | -                | -         |    -3.79 | chucker, king, p1ke, Rack, zeak      |
|            6 |     1616 | 2026-03-26 | Young Ninjas     | L   | 0.940      | -            | -                | -                | -         |    -3.59 | chucker, king, p1ke, Rack, zeak      |
|            5 |     1623 | 2026-03-26 | Alliance         | L   | 0.939      | -            | -                | -                | -         |    -0.29 | chucker, king, p1ke, Rack, zeak      |
|            4 |     3307 | 2026-02-21 | Acend            | L   | 0.718      | -            | -                | -                | -         |    -0.75 | chucker, king, p1ke, Rack, zeak      |
|            3 |     4357 | 2026-01-23 | HAVU             | L   | 0.527      | -            | -                | -                | -         |    -1.07 | king, p1ke, Rack, TIMhehe, zeak      |
|            2 |     4362 | 2026-01-23 | Metizport        | L   | 0.527      | -            | -                | -                | -         |    -0.83 | king, p1ke, Rack, TIMhehe, zeak      |
|            1 |     4368 | 2026-01-23 | Entropy          | W   | 0.527      | 0.333        | 0.006 (0.001)    | 0.134 (0.024)    | 1 (0.527) |    14.12 | king, p1ke, Rack, TIMhehe, zeak      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
