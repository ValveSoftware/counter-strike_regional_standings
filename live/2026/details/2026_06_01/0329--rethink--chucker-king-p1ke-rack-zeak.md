### Roster Details<br />
Team Name: ReThink<br />
Roster: chucker, king, p1ke, Rack, zeak<br />
Global Rank: [329](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [204]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  503.6<br />
<br />
Final Rank Value (503.6) = Starting Rank Value (506.4) + Head To Head Adjustments (-2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.035[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 506.4
- 400 + ( ( 0.056 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 506.4


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
|            8 |     2224 | 2026-03-31 | NEW VISION       | L   | 0.787      | -            | -                | -                | -         |    -4.30 | chucker, hechtikal, king, Rack, zeak |
|            7 |     2382 | 2026-03-29 | ex-Zero Tenacity | L   | 0.774      | -            | -                | -                | -         |    -3.27 | chucker, king, p1ke, Rack, zeak      |
|            6 |     2602 | 2026-03-26 | Young Ninjas     | L   | 0.753      | -            | -                | -                | -         |    -2.57 | chucker, king, p1ke, Rack, zeak      |
|            5 |     2609 | 2026-03-26 | Alliance         | L   | 0.752      | -            | -                | -                | -         |    -0.20 | chucker, king, p1ke, Rack, zeak      |
|            4 |     4293 | 2026-02-21 | Acend            | L   | 0.532      | -            | -                | -                | -         |    -0.24 | chucker, king, p1ke, Rack, zeak      |
|            3 |     5343 | 2026-01-23 | HAVU             | L   | 0.341      | -            | -                | -                | -         |    -0.71 | king, p1ke, Rack, TIMhehe, zeak      |
|            2 |     5348 | 2026-01-23 | Metizport        | L   | 0.341      | -            | -                | -                | -         |    -0.58 | king, p1ke, Rack, TIMhehe, zeak      |
|            1 |     5354 | 2026-01-23 | Entropy          | W   | 0.340      | 0.333        | 0.004 (0.000)    | 0.115 (0.013)    | 1 (0.340) |     9.05 | king, p1ke, Rack, TIMhehe, zeak      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
