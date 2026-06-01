### Roster Details<br />
Team Name: Skele<br />
Roster: Arctic, lucas222, motion, neo, tidy<br />
Global Rank: [310](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [39]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  533.9<br />
<br />
Final Rank Value (533.9) = Starting Rank Value (516.3) + Head To Head Adjustments (17.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 516.3
- 400 + ( ( 0.061 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 516.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     1133 | 2026-04-28 | FURY              | L   | 0.972      | -            | -                | -                | -         |   -18.07 | Arctic, lucas222, motion, neo, tidy  |
|           15 |     1179 | 2026-04-27 | Ground Zero       | L   | 0.965      | -            | -                | -                | -         |    -3.17 | Arctic, lucas222, motion, neo, tidy  |
|           14 |     1246 | 2026-04-26 | Time Waves        | W   | 0.958      | 0.278        | 0.000 (0.000)    | 0.090 (0.024)    | 0 (0.000) |     9.69 | Arctic, lucas222, motion, neo, tidy  |
|           13 |     1785 | 2026-04-06 | Rooster           | L   | 0.825      | -            | -                | -                | -         |    -4.80 | BaN4na, lucas222, motion, neo, tidy  |
|           12 |     2795 | 2026-03-23 | MARKandLARRY      | L   | 0.732      | -            | -                | -                | -         |   -12.35 | Arctic, BaN4na, lucas222, neo, tidy  |
|           11 |     2903 | 2026-03-21 | Ground Zero       | L   | 0.719      | -            | -                | -                | -         |    -2.82 | Arctic, BaN4na, lucas222, neo, tidy  |
|           10 |     4041 | 2026-02-25 | Mindfreak         | L   | 0.564      | -            | -                | -                | -         |    -3.74 | motion, neo, Oath, sunshinez, tidy   |
|            9 |     4134 | 2026-02-24 | Rooster           | W   | 0.551      | 0.317        | 0.006 (0.001)    | 0.348 (0.061)    | 0 (0.000) |    13.95 | motion, neo, Oath, sunshinez, tidy   |
|            8 |     4172 | 2026-02-23 | THUNDER dOWNUNDER | L   | 0.544      | -            | -                | -                | -         |    -0.47 | motion, neo, Oath, sunshinez, tidy   |
|            7 |     4243 | 2026-02-22 | Mindfreak         | L   | 0.539      | -            | -                | -                | -         |    -3.39 | motion, neo, Oath, sunshinez, tidy   |
|            6 |     4289 | 2026-02-21 | Ding Cuts         | W   | 0.532      | 0.317        | 0.001 (0.000)    | 0.138 (0.023)    | 0 (0.000) |     9.88 | Arctic, lucas222, motion, neo, Oath  |
|            5 |     4295 | 2026-02-21 | Rooster           | W   | 0.531      | 0.278        | 0.006 (0.001)    | 0.348 (0.051)    | 0 (0.000) |    14.07 | motion, neo, Oath, sunshinez, tidy   |
|            4 |     4344 | 2026-02-20 | THUNDER dOWNUNDER | L   | 0.525      | -            | -                | -                | -         |    -0.42 | motion, neo, Oath, sunshinez, tidy   |
|            3 |     4388 | 2026-02-19 | Abyssal           | L   | 0.519      | -            | -                | -                | -         |    -4.86 | lucas222, neo, Oath, sunshinez, tidy |
|            2 |     4450 | 2026-02-18 | Rooster           | W   | 0.512      | 0.278        | 0.006 (0.001)    | 0.348 (0.049)    | 0 (0.000) |    13.79 | motion, neo, Oath, sunshinez, tidy   |
|            1 |     4452 | 2026-02-18 | Ding Cuts         | W   | 0.511      | 0.317        | 0.001 (0.000)    | 0.138 (0.022)    | 0 (0.000) |    10.34 | lucas222, neo, Oath, sunshinez, tidy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
