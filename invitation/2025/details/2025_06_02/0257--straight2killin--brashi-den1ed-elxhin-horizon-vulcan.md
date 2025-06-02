### Roster Details<br />
Team Name: Straight2Killin<br />
Roster: Brashi, den1ed, Elxhin, HorizoN, VulcaN<br />
Global Rank: [257](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [84]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  478.3<br />
<br />
Final Rank Value (478.3) = Starting Rank Value (479.0) + Head To Head Adjustments (-0.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.171[<sup>2</sup>](#table1)
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


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1409 | 2025-03-29 | regain       | L   | 0.773      | -            | -                | -                | -         |   -10.79 | Brashi, den1ed, Elxhin, HorizoN, VulcaN |
|            4 |     1471 | 2025-03-28 | Getting Info | L   | 0.767      | -            | -                | -                | -         |    -1.80 | Brashi, den1ed, Elxhin, HorizoN, VulcaN |
|            3 |     1567 | 2025-03-27 | LAG          | W   | 0.758      | 0.143        | 0.001 (0.000)    | 0.100 (0.011)    | 0 (0.000) |    18.21 | Brashi, den1ed, Elxhin, HorizoN, VulcaN |
|            2 |     2293 | 2025-03-06 | Moneyball    | L   | 0.619      | -            | -                | -                | -         |    -2.07 | Brashi, den1ed, Elxhin, HorizoN, VulcaN |
|            1 |     2325 | 2025-03-05 | LAG          | L   | 0.614      | -            | -                | -                | -         |    -4.25 | Brashi, den1ed, Elxhin, HorizoN, VulcaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
