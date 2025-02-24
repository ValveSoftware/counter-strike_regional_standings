### Roster Details<br />
Team Name: Chile<br />
Roster: alexer, DOPWEEK, KratZen, OrphaN, wait<br />
Global Rank: [275](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_24.md)<br />
Regional Rank: [87]( ../../standings_americas_2025_02_24.md)<br />
<br />
Final Rank Value:  470.3<br />
<br />
Final Rank Value (470.3) = Starting Rank Value (458.4) + Head To Head Adjustments (11.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.121[<sup>2</sup>](#table1)

The average of these factors is 0.031<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 458.4
- 400 + ( ( 0.031 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 458.4


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
|            5 |     1402 | 2024-11-15 | Kosovo          | W   | 0.525      | 0.617        | 0.000 (0.000)    | 0.030 (0.010)    | 1 (0.525) |     9.01 | alexer, DOPWEEK, KratZen, OrphaN, wait |
|            4 |     1409 | 2024-11-15 | Jordan          | W   | 0.525      | 0.617        | 0.000 (0.000)    | 0.031 (0.010)    | 1 (0.525) |     7.74 | alexer, DOPWEEK, KratZen, OrphaN, wait |
|            3 |     1456 | 2024-11-14 | Hungary         | L   | 0.518      | -            | -                | -                | -         |    -2.58 | alexer, DOPWEEK, KratZen, OrphaN, wait |
|            2 |     1457 | 2024-11-14 | GTZ             | L   | 0.518      | -            | -                | -                | -         |    -0.56 | alexer, DOPWEEK, KratZen, OrphaN, wait |
|            1 |     1463 | 2024-11-14 | ALTERNATE aTTaX | L   | 0.517      | -            | -                | -                | -         |    -1.71 | alexer, DOPWEEK, KratZen, OrphaN, wait |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
