### Roster Details<br />
Team Name: Outfit 49<br />
Roster: bezymecc, H0NeST, marekiew<br />
Global Rank: [254](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [132]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  481.9<br />
<br />
Final Rank Value (481.9) = Starting Rank Value (466.5) + Head To Head Adjustments (15.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.138[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.035<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 466.5
- 400 + ( ( 0.035 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 466.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1078 | 2025-07-11 | M80           | L   | 0.855      | -            | -                | -                | -         |    -0.58 | 6SIX, bezymecc, H0NeST, KmZ, marekiew          |
|            5 |     1086 | 2025-07-11 | Mythic        | W   | 0.854      | 0.143        | 0.000 (0.000)    | 0.075 (0.009)    | 0 (0.000) |    15.40 | 6SIX, bezymecc, H0NeST, KmZ, marekiew          |
|            4 |     3838 | 2025-03-08 | Arrival Seven | L   | 0.022      | -            | -                | -                | -         |    -0.14 | bezymecc, H0NeST, marekiew, nico1ajus, Termina |
|            3 |     3901 | 2025-03-07 | Worms         | W   | 0.017      | 0.769        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.34 | bezymecc, H0NeST, marekiew, nico1ajus, Termina |
|            2 |     3923 | 2025-03-07 | Take Flyte    | W   | 0.015      | 0.769        | 0.000 (0.000)    | 0.099 (0.001)    | 0 (0.000) |     0.26 | bezymecc, H0NeST, marekiew, nico1ajus, Termina |
|            1 |     3979 | 2025-03-06 | HbITuKu       | W   | 0.009      | 0.769        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.11 | bezymecc, H0NeST, marekiew, nico1ajus, Termina |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
