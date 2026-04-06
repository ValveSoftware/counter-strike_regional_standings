### Roster Details<br />
Team Name: Keyd Stars<br />
Roster: CutzMeretz, danoco, delboNi, desh, vsm<br />
Global Rank: [281](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [71]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  596.9<br />
<br />
Final Rank Value (596.9) = Starting Rank Value (596.2) + Head To Head Adjustments (0.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.227[<sup>1</sup>](#table2)
- Bounty Collected: 0.173[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.100<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 596.2
- 400 + ( ( 0.100 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 596.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     5488 | 2025-10-18 | Bounty Hunters    | L   | 0.067      | -            | -                | -                | -         |    -0.10 | CutzMeretz, danoco, delboNi, desh, vsm |
|            5 |     5512 | 2025-10-17 | FOLHA AMARELA     | W   | 0.061      | 0.371        | 0.005 (0.000)    | 0.356 (0.008)    | 0 (0.000) |     1.37 | CutzMeretz, danoco, delboNi, desh, vsm |
|            4 |     5572 | 2025-10-15 | Gaimin Gladiators | L   | 0.049      | -            | -                | -                | -         |    -0.68 | CutzMeretz, danoco, delboNi, desh, vsm |
|            3 |     5589 | 2025-10-15 | Crashers          | W   | 0.046      | 0.371        | 0.000 (0.000)    | 0.303 (0.005)    | 0 (0.000) |     0.68 | CutzMeretz, danoco, delboNi, desh, vsm |
|            2 |     5611 | 2025-10-14 | Dusty Roots       | L   | 0.042      | -            | -                | -                | -         |    -0.62 | CutzMeretz, danoco, delboNi, desh, vsm |
|            1 |     5793 | 2025-10-08 | ShindeN           | W   | 0.002      | 0.363        | 0.071 (0.000)    | 0.607 (0.000)    | 0 (0.000) |     0.06 | CutzMeretz, danoco, delboNi, desh, vsm |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($179.05)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-19 |      0.076 | $1,000.00      | $75.83          |
| 2025-10-18 |      0.069 | $1,500.00      | $103.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
