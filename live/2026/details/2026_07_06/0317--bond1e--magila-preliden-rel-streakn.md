### Roster Details<br />
Team Name: bond1e<br />
Roster: MAGILA, prelideN, REL, StreakN<br />
Global Rank: [317](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [203]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  550.4<br />
<br />
Final Rank Value (550.4) = Starting Rank Value (516.1) + Head To Head Adjustments (34.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 516.1
- 400 + ( ( 0.062 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 516.1


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
|            5 |     2307 | 2026-04-10 | Inner Circle Academy | L   | 0.622      | -            | -                | -                | -         |    -3.29 | MAGILA, prelideN, REL, smooya, StreakN |
|            4 |     2343 | 2026-04-09 | HYPERSPIRIT          | L   | 0.613      | -            | -                | -                | -         |    -2.37 | MAGILA, prelideN, REL, smooya, StreakN |
|            3 |     2396 | 2026-04-07 | M1X KS               | W   | 0.600      | 0.384        | 0.000 (0.000)    | 0.134 (0.031)    | 0 (0.000) |    10.91 | MAGILA, prelideN, REL, smooya, StreakN |
|            2 |     3227 | 2026-03-27 | UNiTY                | W   | 0.527      | 0.384        | 0.001 (0.000)    | 0.452 (0.091)    | 0 (0.000) |    13.31 | MAGILA, prelideN, REL, StreakN, Uzman  |
|            1 |     3260 | 2026-03-26 | BASEMENT BOYS        | W   | 0.520      | 0.384        | 0.017 (0.003)    | 0.478 (0.096)    | 0 (0.000) |    15.83 | MAGILA, prelideN, REL, smooya, StreakN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
