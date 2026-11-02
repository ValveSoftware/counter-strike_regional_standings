### Roster Details<br />
Team Name: Beyond Limits<br />
Roster: Beastman, denz, doltn, flixxy, Pr0mise<br />
Global Rank: [316](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_11_02.md)<br />
Regional Rank: [69]( ../../standings_americas_2026_11_02.md)<br />
<br />
Final Rank Value:  534.7<br />
<br />
Final Rank Value (534.7) = Starting Rank Value (528.9) + Head To Head Adjustments (5.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.069<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 528.9
- 400 + ( ( 0.069 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 528.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1850 | 2026-09-19 | my life be like | L   | 0.910      | -            | -                | -                | -         |   -15.04 | Beastman, denz, doltn, flixxy, Pr0mise |
|            6 |     2432 | 2026-09-06 | FarmVille       | L   | 0.823      | -            | -                | -                | -         |    -8.72 | Beastman, denz, doltn, flixxy, Pr0mise |
|            5 |     2444 | 2026-09-06 | Iowa Stormboar  | L   | 0.821      | -            | -                | -                | -         |    -7.20 | Beastman, denz, doltn, flixxy, Pr0mise |
|            4 |     2497 | 2026-09-05 | Without a Roof  | W   | 0.815      | 0.333        | 0.043 (0.012)    | 0.493 (0.134)    | 0 (0.000) |    23.68 | Beastman, denz, doltn, flixxy, Pr0mise |
|            3 |     2536 | 2026-09-04 | NuTorious       | W   | 0.809      | 0.333        | 0.003 (0.001)    | 0.195 (0.053)    | 0 (0.000) |    17.99 | Beastman, denz, doltn, flixxy, Pr0mise |
|            2 |     2592 | 2026-09-03 | LAG             | L   | 0.802      | -            | -                | -                | -         |    -1.25 | Beastman, denz, doltn, flixxy, Pr0mise |
|            1 |     4451 | 2026-06-29 | Club 333        | L   | 0.363      | -            | -                | -                | -         |    -3.61 | Beastman, denz, doltn, flixxy, Pr0mise |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
