### Roster Details<br />
Team Name: Skele<br />
Roster: motion, neo, Oath, sunshinez, tidy<br />
Global Rank: [292](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_04_06.md)<br />
Regional Rank: [33]( ../../standings_asia_2026_04_06.md)<br />
<br />
Final Rank Value:  579.1<br />
<br />
Final Rank Value (579.1) = Starting Rank Value (521.6) + Head To Head Adjustments (57.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 521.6
- 400 + ( ( 0.062 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 521.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     1200 | 2026-03-12 | Arcade            | L   | 1.000      | -            | -                | -                | -         |    -6.05 | HUGH, Kiyo, motion, neo, Oath      |
|            8 |     1203 | 2026-03-12 | SemperFi          | L   | 1.000      | -            | -                | -                | -         |    -1.28 | HUGH, Kiyo, motion, neo, Oath      |
|            7 |     1959 | 2026-02-25 | Mindfreak         | L   | 0.938      | -            | -                | -                | -         |    -3.28 | motion, neo, Oath, sunshinez, tidy |
|            6 |     2052 | 2026-02-24 | Rooster           | W   | 0.925      | 0.317        | 0.006 (0.002)    | 0.229 (0.067)    | 0 (0.000) |    23.04 | motion, neo, Oath, sunshinez, tidy |
|            5 |     2090 | 2026-02-23 | THUNDER dOWNUNDER | L   | 0.918      | -            | -                | -                | -         |    -0.44 | motion, neo, Oath, sunshinez, tidy |
|            4 |     2161 | 2026-02-22 | Mindfreak         | L   | 0.912      | -            | -                | -                | -         |    -2.62 | motion, neo, Oath, sunshinez, tidy |
|            3 |     2212 | 2026-02-21 | Rooster           | W   | 0.905      | 0.278        | 0.006 (0.001)    | 0.229 (0.058)    | 0 (0.000) |    24.08 | motion, neo, Oath, sunshinez, tidy |
|            2 |     2261 | 2026-02-20 | THUNDER dOWNUNDER | L   | 0.899      | -            | -                | -                | -         |    -0.40 | motion, neo, Oath, sunshinez, tidy |
|            1 |     2367 | 2026-02-18 | Rooster           | W   | 0.885      | 0.278        | 0.006 (0.001)    | 0.229 (0.056)    | 0 (0.000) |    24.42 | motion, neo, Oath, sunshinez, tidy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
