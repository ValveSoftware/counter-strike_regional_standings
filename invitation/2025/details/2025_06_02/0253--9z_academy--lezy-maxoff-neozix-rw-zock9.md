### Roster Details<br />
Team Name: 9z Academy<br />
Roster: lezy, MaxOff, neozix, rw, zock9<br />
Global Rank: [253](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [82]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  480.5<br />
<br />
Final Rank Value (480.5) = Starting Rank Value (479.0) + Head To Head Adjustments (1.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.172[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 479.0
- 400 + ( ( 0.043 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 479.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     3514 | 2025-01-09 | Elevate  | L   | 0.244      | -            | -                | -                | -         |    -3.35 | lezy, MaxOff, neozix, rw, zock9   |
|            6 |     3591 | 2024-12-21 | Players  | W   | 0.117      | 0.143        | 0.002 (0.000)    | 0.218 (0.004)    | 0 (0.000) |     2.77 | lezy, MaxOff, neozix, rw, zock9   |
|            5 |     3610 | 2024-12-19 | 2070     | W   | 0.105      | 0.143        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     1.98 | lezy, MaxOff, neozix, rw, zock9   |
|            4 |     3621 | 2024-12-18 | Solid    | L   | 0.100      | -            | -                | -                | -         |    -0.35 | lezy, MaxOff, neozix, rw, zock9   |
|            3 |     3644 | 2024-12-16 | ShindeN  | L   | 0.085      | -            | -                | -                | -         |    -0.61 | lezy, MaxOff, neozix, vlad, zock9 |
|            2 |     3680 | 2024-12-14 | LOBOARMY | W   | 0.072      | 0.143        | 0.012 (0.000)    | 0.217 (0.002)    | 0 (0.000) |     1.75 | lezy, MaxOff, neozix, vlad, zock9 |
|            1 |     3725 | 2024-12-12 | 2070     | L   | 0.059      | -            | -                | -                | -         |    -0.74 | divine, lezy, MaxOff, neozix, rw  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
