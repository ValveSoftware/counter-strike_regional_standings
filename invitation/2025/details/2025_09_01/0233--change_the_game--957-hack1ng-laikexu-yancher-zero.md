### Roster Details<br />
Team Name: Change The Game<br />
Roster: 957, Hack1ng, LaiKeXu, yancher, Zero<br />
Global Rank: [233](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_09_01.md)<br />
Regional Rank: [39]( ../../standings_asia_2025_09_01.md)<br />
<br />
Final Rank Value:  530.2<br />
<br />
Final Rank Value (530.2) = Starting Rank Value (517.9) + Head To Head Adjustments (12.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.172[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.073[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 517.9
- 400 + ( ( 0.061 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 517.9


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
|            8 |     1095 | 2025-07-11 | Chinggis Warriors | L   | 0.852      | -            | -                | -                | -         |    -1.15 | 957, Hack1ng, LaiKeXu, VanceKK, Zero |
|            7 |     1105 | 2025-07-10 | LE-LUX            | W   | 0.850      | 0.143        | 0.000 (0.000)    | 0.005 (0.001)    | 0 (0.000) |    13.62 | 957, Hack1ng, LaiKeXu, VanceKK, Zero |
|            6 |     2015 | 2025-05-12 | E9                | L   | 0.452      | -            | -                | -                | -         |    -9.46 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            5 |     2181 | 2025-05-06 | TYLOO             | L   | 0.413      | -            | -                | -                | -         |    -0.01 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            4 |     2399 | 2025-04-27 | Chinggis Warriors | L   | 0.351      | -            | -                | -                | -         |    -0.51 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            3 |     2449 | 2025-04-25 | Exusiai           | W   | 0.338      | 0.624        | 0.000 (0.000)    | 0.014 (0.003)    | 1 (0.338) |     5.39 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            2 |     2531 | 2025-04-19 | Gods Reign        | W   | 0.298      | 0.624        | 0.001 (0.000)    | 0.048 (0.009)    | 1 (0.298) |     6.22 | 957, Hack1ng, LaiKeXu, yancher, Zero |
|            1 |     2587 | 2025-04-17 | Just Swing        | L   | 0.285      | -            | -                | -                | -         |    -1.80 | 957, Hack1ng, LaiKeXu, yancher, Zero |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
