### Roster Details<br />
Team Name: Chile<br />
Roster: alexer, DOPWEEK, KratZen, OrphaN, wait<br />
Global Rank: [279](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_03.md)<br />
Regional Rank: [88]( ../../standings_americas_2025_03_03.md)<br />
<br />
Final Rank Value:  465.8<br />
<br />
Final Rank Value (465.8) = Starting Rank Value (454.9) + Head To Head Adjustments (10.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.113[<sup>2</sup>](#table1)

The average of these factors is 0.028<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 454.9
- 400 + ( ( 0.028 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 454.9


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
|            5 |     1490 | 2024-11-15 | Kosovo          | W   | 0.480      | 0.617        | 0.000 (0.000)    | 0.019 (0.006)    | 1 (0.480) |     8.21 | alexer, DOPWEEK, KratZen, OrphaN, wait |
|            4 |     1497 | 2024-11-15 | Jordan          | W   | 0.479      | 0.617        | 0.000 (0.000)    | 0.028 (0.008)    | 1 (0.479) |     7.09 | alexer, DOPWEEK, KratZen, OrphaN, wait |
|            3 |     1544 | 2024-11-14 | Hungary         | L   | 0.473      | -            | -                | -                | -         |    -2.40 | alexer, DOPWEEK, KratZen, OrphaN, wait |
|            2 |     1545 | 2024-11-14 | GTZ             | L   | 0.472      | -            | -                | -                | -         |    -0.51 | alexer, DOPWEEK, KratZen, OrphaN, wait |
|            1 |     1551 | 2024-11-14 | ALTERNATE aTTaX | L   | 0.472      | -            | -                | -                | -         |    -1.53 | alexer, DOPWEEK, KratZen, OrphaN, wait |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
