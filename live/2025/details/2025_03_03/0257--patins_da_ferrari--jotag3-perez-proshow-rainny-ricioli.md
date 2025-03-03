### Roster Details<br />
Team Name: Patins da Ferrari<br />
Roster: Jotag3, perez, proSHOW, rainny, RICIOLI<br />
Global Rank: [257](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_03.md)<br />
Regional Rank: [79]( ../../standings_americas_2025_03_03.md)<br />
<br />
Final Rank Value:  523.4<br />
<br />
Final Rank Value (523.4) = Starting Rank Value (500.9) + Head To Head Adjustments (22.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 500.9
- 400 + ( ( 0.052 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 500.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      731 | 2025-01-09 | ShindeN         | L   | 0.849      | -            | -                | -                | -         |    -8.06 | Jotag3, perez, proSHOW, rainny, RICIOLI      |
|            5 |      810 | 2024-12-21 | NITRO           | W   | 0.720      | 0.143        | 0.001 (0.000)    | 0.352 (0.036)    | 0 (0.000) |    15.13 | Jotag3, perez, proSHOW, rainny, RICIOLI      |
|            4 |      818 | 2024-12-20 | UNO MILLE       | L   | 0.714      | -            | -                | -                | -         |    -6.14 | CutzMeretz, Jotag3, perez, proSHOW, rainny   |
|            3 |      854 | 2024-12-17 | Players         | W   | 0.696      | 0.143        | 0.008 (0.001)    | 0.582 (0.058)    | 0 (0.000) |    16.96 | CutzMeretz, Jotag3, perez, proSHOW, rainny   |
|            2 |      887 | 2024-12-15 | Galorys Academy | W   | 0.680      | 0.143        | 0.000 (0.000)    | 0.041 (0.004)    | 0 (0.000) |     7.50 | CutzMeretz, Jotag3, perez, proSHOW, rainny   |
|            1 |      926 | 2024-12-13 | Solid           | L   | 0.669      | -            | -                | -                | -         |    -2.88 | cerolzin, CutzMeretz, Jotag3, perez, proSHOW |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
