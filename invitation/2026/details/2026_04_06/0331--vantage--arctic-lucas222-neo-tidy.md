### Roster Details<br />
Team Name: Vantage<br />
Roster: Arctic, lucas222, neo, tidy<br />
Global Rank: [331](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_04_06.md)<br />
Regional Rank: [40]( ../../standings_asia_2026_04_06.md)<br />
<br />
Final Rank Value:  487.2<br />
<br />
Final Rank Value (487.2) = Starting Rank Value (483.8) + Head To Head Adjustments (3.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.168[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 483.8
- 400 + ( ( 0.043 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 483.8


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
|            9 |      719 | 2026-03-23 | MARKandLARRY      | L   | 1.000      | -            | -                | -                | -         |   -14.67 | Arctic, BaN4na, lucas222, neo, tidy  |
|            8 |      823 | 2026-03-21 | Ground Zero       | L   | 1.000      | -            | -                | -                | -         |    -2.13 | Arctic, BaN4na, lucas222, neo, tidy  |
|            7 |     2206 | 2026-02-21 | LE-LUX            | W   | 0.906      | 0.317        | 0.000 (0.000)    | 0.051 (0.015)    | 0 (0.000) |    13.77 | Arctic, lucas222, motion, neo, Oath  |
|            6 |     2305 | 2026-02-19 | Abyssal           | L   | 0.893      | -            | -                | -                | -         |    -7.92 | lucas222, neo, Oath, sunshinez, tidy |
|            5 |     2369 | 2026-02-18 | LE-LUX            | W   | 0.885      | 0.317        | 0.000 (0.000)    | 0.051 (0.014)    | 0 (0.000) |    13.51 | lucas222, neo, Oath, sunshinez, tidy |
|            4 |     4353 | 2025-11-23 | Arcade            | L   | 0.306      | -            | -                | -                | -         |    -0.78 | Arctic, Kiyo, lzj, neo, tidy         |
|            3 |     4421 | 2025-11-21 | THUNDER dOWNUNDER | L   | 0.292      | -            | -                | -                | -         |    -0.10 | Arctic, Kiyo, lzj, neo, tidy         |
|            2 |     5299 | 2025-10-25 | Rooster           | L   | 0.112      | -            | -                | -                | -         |    -1.11 | Arctic, Kiyo, motion, neo, tidy      |
|            1 |     5410 | 2025-10-23 | Arcade            | W   | 0.099      | 0.278        | 0.004 (0.000)    | 0.279 (0.008)    | 0 (0.000) |     2.88 | Arctic, Kiyo, motion, neo, tidy      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
