### Roster Details<br />
Team Name: NuTorious<br />
Roster: Jr24racing, looke, Msaia, Toasty<br />
Global Rank: [260](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_09_01.md)<br />
Regional Rank: [83]( ../../standings_americas_2025_09_01.md)<br />
<br />
Final Rank Value:  451.6<br />
<br />
Final Rank Value (451.6) = Starting Rank Value (463.3) + Head To Head Adjustments (-11.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.132[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.033<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 463.3
- 400 + ( ( 0.033 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 463.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      740 | 2025-07-27 | BOSS             | L   | 0.962      | -            | -                | -                | -         |    -4.93 | Jr24racing, looke, Msaia, nova, Toasty   |
|            6 |      903 | 2025-07-18 | InControl        | L   | 0.903      | -            | -                | -                | -         |    -5.54 | Jr24racing, looke, Msaia, nova, Toasty   |
|            5 |      905 | 2025-07-18 | BLUEJAYS         | L   | 0.903      | -            | -                | -                | -         |    -1.49 | Jr24racing, looke, Msaia, nova, Toasty   |
|            4 |     3908 | 2025-03-07 | Mythic           | L   | 0.016      | -            | -                | -                | -         |    -0.21 | icarus, Jr24racing, looke, Msaia, Toasty |
|            3 |     3915 | 2025-03-07 | ASPYRE           | W   | 0.015      | 0.769        | 0.000 (0.000)    | 0.214 (0.003)    | 0 (0.000) |     0.35 | icarus, Jr24racing, looke, Msaia, Toasty |
|            2 |     3977 | 2025-03-06 | seoul            | W   | 0.009      | 0.769        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.12 | icarus, Jr24racing, looke, Msaia, Toasty |
|            1 |     4014 | 2025-03-05 | Party Astronauts | L   | 0.003      | -            | -                | -                | -         |    -0.02 | icarus, Jr24racing, looke, Msaia, Toasty |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
