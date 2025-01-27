### Roster Details<br />
Team Name: Just Swing<br />
Roster: gas, Marek, Purely, qqGOD, VanceKK<br />
Global Rank: [149](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_01_27.md)<br />
Regional Rank: [12]( ../../standings_asia_2025_01_27.md)<br />
<br />
Final Rank Value:  731.0<br />
<br />
Final Rank Value (731.0) = Starting Rank Value (719.7) + Head To Head Adjustments (11.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.330[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.053[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.163<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 719.7
- 400 + ( ( 0.163 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 719.7


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
|           15 |       57 | 2025-01-24 | TYLOO    | L   | 1.000      | -            | -                | -                | -         |    -7.45 | gas, Marek, Purely, qqGOD, VanceKK |
|           14 |       65 | 2025-01-24 | TYLOO    | L   | 1.000      | -            | -                | -                | -         |    -7.95 | gas, Marek, Purely, qqGOD, VanceKK |
|           13 |      107 | 2025-01-23 | The QUBE | W   | 1.000      | 0.417        | 0.000 (0.000)    | 0.056 (0.023)    | 0 (0.000) |     6.30 | gas, Marek, Purely, qqGOD, VanceKK |
|           12 |      112 | 2025-01-23 | The QUBE | W   | 1.000      | 0.417        | 0.000 (0.000)    | 0.056 (0.023)    | 0 (0.000) |     6.67 | gas, Marek, Purely, qqGOD, VanceKK |
|           11 |      150 | 2025-01-22 | NomadS   | L   | 1.000      | -            | -                | -                | -         |   -22.93 | gas, Marek, Purely, qqGOD, VanceKK |
|           10 |      158 | 2025-01-22 | NomadS   | W   | 1.000      | 0.417        | 0.000 (0.000)    | 0.168 (0.070)    | 0 (0.000) |     8.08 | gas, Marek, Purely, qqGOD, VanceKK |
|            9 |      193 | 2025-01-21 | UR       | L   | 1.000      | -            | -                | -                | -         |   -17.08 | gas, Marek, Purely, qqGOD, VanceKK |
|            8 |      200 | 2025-01-21 | UR       | W   | 1.000      | 0.417        | 0.009 (0.004)    | 0.320 (0.134)    | 0 (0.000) |    14.30 | gas, Marek, Purely, qqGOD, VanceKK |
|            7 |      630 | 2024-12-04 | ATOX     | L   | 0.838      | -            | -                | -                | -         |    -1.95 | gas, Marek, Purely, qqGOD, VanceKK |
|            6 |      633 | 2024-12-04 | IHC      | L   | 0.837      | -            | -                | -                | -         |   -13.46 | gas, Marek, Purely, qqGOD, VanceKK |
|            5 |      634 | 2024-12-03 | NomadS   | W   | 0.837      | 0.333        | 0.000 (0.000)    | 0.168 (0.047)    | 0 (0.000) |     5.88 | gas, Marek, Purely, qqGOD, VanceKK |
|            4 |      841 | 2024-11-23 | ATOX     | L   | 0.765      | -            | -                | -                | -         |    -1.67 | gas, Marek, Purely, qqGOD, VanceKK |
|            3 |      843 | 2024-11-23 | IHC      | W   | 0.764      | 0.333        | 0.005 (0.001)    | 0.136 (0.035)    | 0 (0.000) |    11.18 | gas, Marek, Purely, qqGOD, VanceKK |
|            2 |      895 | 2024-11-21 | harizma  | W   | 0.751      | 0.333        | 0.003 (0.001)    | 0.230 (0.057)    | 0 (0.000) |    11.46 | gas, Marek, Purely, qqGOD, VanceKK |
|            1 |      898 | 2024-11-20 | The Huns | W   | 0.750      | 0.333        | 0.057 (0.014)    | 0.569 (0.142)    | 0 (0.000) |    19.89 | gas, Marek, Purely, qqGOD, VanceKK |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,911.68)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
