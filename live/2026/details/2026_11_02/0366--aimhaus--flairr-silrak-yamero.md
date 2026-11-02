### Roster Details<br />
Team Name: Aimhaus<br />
Roster: flairr, silrak, Yamero<br />
Global Rank: [366](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [240]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  411.0<br />
<br />
Final Rank Value (411.0) = Starting Rank Value (416.5) + Head To Head Adjustments (-5.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.035[<sup>2</sup>](#table1)

The average of these factors is 0.009<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 416.5
- 400 + ( ( 0.009 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 416.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1320 | 2026-09-29 | ENCE        | L   | 0.974      | -            | -                | -                | -         |    -0.88 | BRK, Ed1m, flairr, silrak, Yamero          |
|            6 |     1326 | 2026-09-29 | Sangal      | L   | 0.974      | -            | -                | -                | -         |    -0.18 | BRK, Ed1m, flairr, silrak, Yamero          |
|            5 |     1330 | 2026-09-29 | HYPERSPIRIT | L   | 0.974      | -            | -                | -                | -         |    -1.69 | BRK, Ed1m, flairr, silrak, Yamero          |
|            4 |     4467 | 2026-06-29 | BERG        | L   | 0.358      | -            | -                | -                | -         |    -2.18 | blazekiNho, flairr, nisker, silrak, Yamero |
|            3 |     4489 | 2026-06-28 | Coalesce    | L   | 0.353      | -            | -                | -                | -         |    -5.27 | blazekiNho, flairr, nisker, silrak, Yamero |
|            2 |     4493 | 2026-06-28 | GAMEHARMONY | W   | 0.352      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.352) |     5.19 | blazekiNho, flairr, nisker, silrak, Yamero |
|            1 |     4494 | 2026-06-28 | Leo         | L   | 0.352      | -            | -                | -                | -         |    -0.50 | blazekiNho, flairr, nisker, silrak, Yamero |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
