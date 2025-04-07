### Roster Details<br />
Team Name: Patins da Ferrari<br />
Roster: Jotag3, perez, proSHOW, rainny, RICIOLI<br />
Global Rank: [250](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [77]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  504.5<br />
<br />
Final Rank Value (504.5) = Starting Rank Value (489.7) + Head To Head Adjustments (14.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.190[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 489.7
- 400 + ( ( 0.049 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 489.7


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
|            6 |     1666 | 2025-01-09 | ShindeN         | L   | 0.616      | -            | -                | -                | -         |    -4.43 | Jotag3, perez, proSHOW, rainny, RICIOLI      |
|            5 |     1745 | 2024-12-21 | NITRO           | W   | 0.487      | 0.143        | 0.001 (0.000)    | 0.209 (0.015)    | 0 (0.000) |    10.30 | Jotag3, perez, proSHOW, rainny, RICIOLI      |
|            4 |     1753 | 2024-12-20 | ex-Vikings      | L   | 0.481      | -            | -                | -                | -         |    -4.92 | CutzMeretz, Jotag3, perez, proSHOW, rainny   |
|            3 |     1789 | 2024-12-17 | Players         | W   | 0.463      | 0.143        | 0.007 (0.000)    | 0.528 (0.035)    | 0 (0.000) |    10.94 | CutzMeretz, Jotag3, perez, proSHOW, rainny   |
|            2 |     1822 | 2024-12-15 | Galorys Academy | W   | 0.446      | 0.143        | 0.000 (0.000)    | 0.025 (0.002)    | 0 (0.000) |     5.21 | CutzMeretz, Jotag3, perez, proSHOW, rainny   |
|            1 |     1861 | 2024-12-13 | Solid           | L   | 0.436      | -            | -                | -                | -         |    -2.31 | cerolzin, CutzMeretz, Jotag3, perez, proSHOW |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
