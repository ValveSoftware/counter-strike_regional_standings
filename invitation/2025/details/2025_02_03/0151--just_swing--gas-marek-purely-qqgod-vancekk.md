### Roster Details<br />
Team Name: Just Swing<br />
Roster: gas, Marek, Purely, qqGOD, VanceKK<br />
Global Rank: [151](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_03.md)<br />
Regional Rank: [13]( ../../standings_asia_2025_02_03.md)<br />
<br />
Final Rank Value:  725.8<br />
<br />
Final Rank Value (725.8) = Starting Rank Value (718.1) + Head To Head Adjustments (7.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.331[<sup>1</sup>](#table2)
- Bounty Collected: 0.269[<sup>2</sup>](#table1)
- Opponent Network: 0.056[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.164<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 718.1
- 400 + ( ( 0.164 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 718.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      175 | 2025-01-24 | TYLOO    | L   | 1.000      | -            | -                | -                | -         |    -7.99 | gas, Marek, Purely, qqGOD, VanceKK |
|           14 |      183 | 2025-01-24 | TYLOO    | L   | 1.000      | -            | -                | -                | -         |    -8.55 | gas, Marek, Purely, qqGOD, VanceKK |
|           13 |      225 | 2025-01-23 | The QUBE | W   | 1.000      | 0.417        | 0.000 (0.000)    | 0.061 (0.025)    | 0 (0.000) |     6.38 | gas, Marek, Purely, qqGOD, VanceKK |
|           12 |      230 | 2025-01-23 | The QUBE | W   | 1.000      | 0.417        | 0.000 (0.000)    | 0.061 (0.025)    | 0 (0.000) |     6.76 | gas, Marek, Purely, qqGOD, VanceKK |
|           11 |      268 | 2025-01-22 | NomadS   | L   | 1.000      | -            | -                | -                | -         |   -22.80 | gas, Marek, Purely, qqGOD, VanceKK |
|           10 |      276 | 2025-01-22 | NomadS   | W   | 1.000      | 0.417        | 0.000 (0.000)    | 0.182 (0.076)    | 0 (0.000) |     8.22 | gas, Marek, Purely, qqGOD, VanceKK |
|            9 |      311 | 2025-01-21 | UR       | L   | 1.000      | -            | -                | -                | -         |   -17.05 | gas, Marek, Purely, qqGOD, VanceKK |
|            8 |      318 | 2025-01-21 | UR       | W   | 1.000      | 0.417        | 0.009 (0.004)    | 0.331 (0.138)    | 0 (0.000) |    14.34 | gas, Marek, Purely, qqGOD, VanceKK |
|            7 |      748 | 2024-12-04 | ATOX     | L   | 0.791      | -            | -                | -                | -         |    -2.19 | gas, Marek, Purely, qqGOD, VanceKK |
|            6 |      751 | 2024-12-04 | IHC      | L   | 0.791      | -            | -                | -                | -         |   -12.75 | gas, Marek, Purely, qqGOD, VanceKK |
|            5 |      752 | 2024-12-03 | NomadS   | W   | 0.790      | 0.333        | 0.000 (0.000)    | 0.182 (0.048)    | 0 (0.000) |     5.67 | gas, Marek, Purely, qqGOD, VanceKK |
|            4 |      959 | 2024-11-23 | ATOX     | L   | 0.718      | -            | -                | -                | -         |    -1.88 | gas, Marek, Purely, qqGOD, VanceKK |
|            3 |      961 | 2024-11-23 | IHC      | W   | 0.717      | 0.333        | 0.005 (0.001)    | 0.139 (0.033)    | 0 (0.000) |    10.53 | gas, Marek, Purely, qqGOD, VanceKK |
|            2 |     1013 | 2024-11-21 | harizma  | W   | 0.704      | 0.333        | 0.003 (0.001)    | 0.241 (0.056)    | 0 (0.000) |    10.71 | gas, Marek, Purely, qqGOD, VanceKK |
|            1 |     1016 | 2024-11-20 | The Huns | W   | 0.704      | 0.333        | 0.058 (0.014)    | 0.655 (0.154)    | 0 (0.000) |    18.38 | gas, Marek, Purely, qqGOD, VanceKK |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,794.77)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
