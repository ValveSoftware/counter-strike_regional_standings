### Roster Details<br />
Team Name: Mai Tai<br />
Roster: aimy, chudy, Melavi, tomiko<br />
Global Rank: [327](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [216]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  515.9<br />
<br />
Final Rank Value (515.9) = Starting Rank Value (500.6) + Head To Head Adjustments (15.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 500.6
- 400 + ( ( 0.054 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 500.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     2418 | 2026-09-07 | Spirit Academy | L   | 0.826      | -            | -                | -                | -         |    -2.07 | chudy, Melavi, sEIS, tomiko, wazak   |
|            9 |     2486 | 2026-09-06 | NAVI Junior    | L   | 0.819      | -            | -                | -                | -         |    -0.59 | chudy, Melavi, sEIS, tomiko, wazak   |
|            8 |     3897 | 2026-07-26 | Misa           | W   | 0.539      | 0.344        | 0.005 (0.001)    | 0.488 (0.091)    | 0 (0.000) |    13.98 | chudy, Melavi, Nami, Pelle, wazak    |
|            7 |     4430 | 2026-07-01 | DONSTU         | L   | 0.372      | -            | -                | -                | -         |    -2.37 | chudy, Maze, Melavi, Nami, tomiko    |
|            6 |     4459 | 2026-06-29 | Entropy        | L   | 0.360      | -            | -                | -                | -         |    -3.98 | chudy, Maze, Melavi, Nami, tomiko    |
|            5 |     4511 | 2026-06-27 | megoshort      | W   | 0.346      | 0.303        | 0.002 (0.000)    | 0.379 (0.040)    | 0 (0.000) |     8.53 | aimy, chudy, Melavi, Nami, tomiko    |
|            4 |     5098 | 2026-05-30 | Vexar          | L   | 0.159      | -            | -                | -                | -         |    -1.01 | aimy, chudy, Melavi, next1me, tomiko |
|            3 |     5143 | 2026-05-29 | Misa           | W   | 0.152      | 0.303        | 0.000 (0.000)    | 0.118 (0.005)    | 0 (0.000) |     2.60 | aimy, chudy, Melavi, next1me, tomiko |
|            2 |     5178 | 2026-05-28 | Enjoy          | L   | 0.147      | -            | -                | -                | -         |    -1.04 | aimy, chudy, Melavi, next1me, tomiko |
|            1 |     5398 | 2026-05-23 | Julie&Cie      | W   | 0.112      | 0.303        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     1.28 | aimy, chudy, Melavi, next1me, tomiko |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
