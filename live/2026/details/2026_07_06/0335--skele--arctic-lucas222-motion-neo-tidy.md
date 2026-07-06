### Roster Details<br />
Team Name: Skele<br />
Roster: Arctic, lucas222, motion, neo, tidy<br />
Global Rank: [335](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_07_06.md)<br />
Regional Rank: [39]( ../../standings_asia_2026_07_06.md)<br />
<br />
Final Rank Value:  513.8<br />
<br />
Final Rank Value (513.8) = Starting Rank Value (509.2) + Head To Head Adjustments (4.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.2
- 400 + ( ( 0.058 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 509.2


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
|           16 |     1794 | 2026-04-28 | FURY              | L   | 0.739      | -            | -                | -                | -         |   -12.77 | Arctic, lucas222, motion, neo, tidy  |
|           15 |     1840 | 2026-04-27 | Ground Zero       | L   | 0.732      | -            | -                | -                | -         |    -4.40 | Arctic, lucas222, motion, neo, tidy  |
|           14 |     1907 | 2026-04-26 | Time Waves        | W   | 0.725      | 0.278        | 0.000 (0.000)    | 0.065 (0.013)    | 0 (0.000) |     7.79 | Arctic, lucas222, motion, neo, tidy  |
|           13 |     2446 | 2026-04-06 | Rooster           | L   | 0.592      | -            | -                | -                | -         |    -3.76 | BaN4na, lucas222, motion, neo, tidy  |
|           12 |     3456 | 2026-03-23 | MARKandLARRY      | L   | 0.499      | -            | -                | -                | -         |    -5.76 | Arctic, BaN4na, lucas222, neo, tidy  |
|           11 |     3564 | 2026-03-21 | Ground Zero       | L   | 0.486      | -            | -                | -                | -         |    -3.06 | Arctic, BaN4na, lucas222, neo, tidy  |
|           10 |     4702 | 2026-02-25 | Mindfreak         | L   | 0.331      | -            | -                | -                | -         |    -2.65 | motion, neo, Oath, sunshinez, tidy   |
|            9 |     4795 | 2026-02-24 | Rooster           | W   | 0.318      | 0.317        | 0.009 (0.001)    | 0.394 (0.040)    | 0 (0.000) |     8.09 | motion, neo, Oath, sunshinez, tidy   |
|            8 |     4833 | 2026-02-23 | THUNDER dOWNUNDER | L   | 0.311      | -            | -                | -                | -         |    -0.34 | motion, neo, Oath, sunshinez, tidy   |
|            7 |     4904 | 2026-02-22 | Mindfreak         | L   | 0.306      | -            | -                | -                | -         |    -2.36 | motion, neo, Oath, sunshinez, tidy   |
|            6 |     4950 | 2026-02-21 | Ding Cuts         | W   | 0.299      | 0.317        | 0.001 (0.000)    | 0.122 (0.012)    | 0 (0.000) |     5.93 | Arctic, lucas222, motion, neo, Oath  |
|            5 |     4956 | 2026-02-21 | Rooster           | W   | 0.298      | 0.278        | 0.009 (0.001)    | 0.394 (0.033)    | 0 (0.000) |     7.79 | motion, neo, Oath, sunshinez, tidy   |
|            4 |     5005 | 2026-02-20 | THUNDER dOWNUNDER | L   | 0.292      | -            | -                | -                | -         |    -0.30 | motion, neo, Oath, sunshinez, tidy   |
|            3 |     5049 | 2026-02-19 | Abyssal           | L   | 0.286      | -            | -                | -                | -         |    -2.77 | lucas222, neo, Oath, sunshinez, tidy |
|            2 |     5111 | 2026-02-18 | Rooster           | W   | 0.279      | 0.278        | 0.009 (0.001)    | 0.394 (0.030)    | 0 (0.000) |     7.34 | motion, neo, Oath, sunshinez, tidy   |
|            1 |     5113 | 2026-02-18 | Ding Cuts         | W   | 0.278      | 0.317        | 0.001 (0.000)    | 0.122 (0.011)    | 0 (0.000) |     5.76 | lucas222, neo, Oath, sunshinez, tidy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
