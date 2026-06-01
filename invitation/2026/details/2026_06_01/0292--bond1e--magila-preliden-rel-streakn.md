### Roster Details<br />
Team Name: bond1e<br />
Roster: MAGILA, prelideN, REL, StreakN<br />
Global Rank: [292](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [186]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  580.1<br />
<br />
Final Rank Value (580.1) = Starting Rank Value (528.7) + Head To Head Adjustments (51.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 528.7
- 400 + ( ( 0.068 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 528.7


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
|            5 |     1646 | 2026-04-10 | Inner Circle Academy | L   | 0.855      | -            | -                | -                | -         |    -4.75 | MAGILA, prelideN, REL, smooya, StreakN |
|            4 |     1682 | 2026-04-09 | HYPERSPIRIT          | L   | 0.846      | -            | -                | -                | -         |    -2.60 | MAGILA, prelideN, REL, smooya, StreakN |
|            3 |     1735 | 2026-04-07 | M1X KS               | W   | 0.833      | 0.384        | 0.000 (0.000)    | 0.175 (0.056)    | 0 (0.000) |    15.77 | MAGILA, prelideN, REL, smooya, StreakN |
|            2 |     2566 | 2026-03-27 | UNiTY                | W   | 0.760      | 0.384        | 0.001 (0.000)    | 0.605 (0.177)    | 0 (0.000) |    20.07 | MAGILA, prelideN, REL, StreakN, Uzman  |
|            1 |     2599 | 2026-03-26 | BASEMENT BOYS        | W   | 0.753      | 0.384        | 0.016 (0.005)    | 0.509 (0.147)    | 0 (0.000) |    22.84 | MAGILA, prelideN, REL, smooya, StreakN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
