### Roster Details<br />
Team Name: bond1e<br />
Roster: MAGILA, prelideN, REL, StreakN<br />
Global Rank: [290](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [181]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  571.8<br />
<br />
Final Rank Value (571.8) = Starting Rank Value (513.6) + Head To Head Adjustments (58.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.6
- 400 + ( ( 0.061 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 513.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      660 | 2026-04-10 | Inner Circle Academy | L   | 1.000      | -            | -                | -                | -         |    -9.48 | MAGILA, prelideN, REL, smooya, StreakN |
|            4 |      696 | 2026-04-09 | HYPERSPIRIT          | L   | 1.000      | -            | -                | -                | -         |    -2.64 | MAGILA, prelideN, REL, smooya, StreakN |
|            3 |      749 | 2026-04-07 | M1X KS               | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.140 (0.054)    | 0 (0.000) |    19.89 | MAGILA, prelideN, REL, smooya, StreakN |
|            2 |     1580 | 2026-03-27 | UNiTY                | W   | 0.946      | 0.384        | 0.003 (0.001)    | 0.615 (0.224)    | 0 (0.000) |    25.83 | MAGILA, prelideN, REL, StreakN, Uzman  |
|            1 |     1613 | 2026-03-26 | BASEMENT BOYS        | W   | 0.940      | 0.384        | 0.000 (0.000)    | 0.395 (0.143)    | 0 (0.000) |    24.60 | MAGILA, prelideN, REL, smooya, StreakN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
