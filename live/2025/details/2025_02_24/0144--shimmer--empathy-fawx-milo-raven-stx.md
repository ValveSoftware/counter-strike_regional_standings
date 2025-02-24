### Roster Details<br />
Team Name: Shimmer<br />
Roster: empathy, Fawx, milo, raven, Stx<br />
Global Rank: [144](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_24.md)<br />
Regional Rank: [36]( ../../standings_americas_2025_02_24.md)<br />
<br />
Final Rank Value:  689.4<br />
<br />
Final Rank Value (689.4) = Starting Rank Value (653.7) + Head To Head Adjustments (35.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.322[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 653.7
- 400 + ( ( 0.133 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 653.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      665 | 2025-01-04 | Lotus fe       | W   | 0.861      | 0.250        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.23 | empathy, Fawx, milo, raven, Stx        |
|            6 |      785 | 2024-12-15 | Lotus fe       | W   | 0.728      | 0.250        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.48 | empathy, milo, raven, Serendipity, Stx |
|            5 |     1082 | 2024-12-01 | Lotus fe       | W   | 0.634      | 0.250        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.94 | empathy, Fawx, phoebe, raven, Stx      |
|            4 |     1353 | 2024-11-17 | Lotus fe       | W   | 0.541      | 0.250        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.30 | empathy, Fawx, phoebe, raven, Stx      |
|            3 |     1693 | 2024-11-03 | Lotus fe       | W   | 0.447      | 0.250        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.55 | Celia, empathy, phoebe, raven, Stx     |
|            2 |     1838 | 2024-10-27 | Unjustified fe | W   | 0.401      | 0.250        | 0.000 (0.000)    | 0.059 (0.006)    | 0 (0.000) |     3.75 | Celia, empathy, phoebe, raven, Stx     |
|            1 |     2291 | 2024-10-06 | Imp Pact fe    | W   | 0.261      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.44 | Celia, empathy, phoebe, raven, Stx     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,903.57)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-04 |      0.861 | $750.00        | $645.69         |
| 2024-12-15 |      0.728 | $750.00        | $545.69         |
| 2024-12-01 |      0.634 | $750.00        | $475.22         |
| 2024-11-17 |      0.541 | $750.00        | $405.43         |
| 2024-11-03 |      0.447 | $750.00        | $335.48         |
| 2024-10-27 |      0.401 | $750.00        | $300.43         |
| 2024-10-06 |      0.261 | $750.00        | $195.63         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
