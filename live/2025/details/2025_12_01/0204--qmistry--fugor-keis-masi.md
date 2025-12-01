### Roster Details<br />
Team Name: QMISTRY<br />
Roster: Fugor, keis, Masi<br />
Global Rank: [204](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [126]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  647.4<br />
<br />
Final Rank Value (647.4) = Starting Rank Value (634.1) + Head To Head Adjustments (13.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.296[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 634.1
- 400 + ( ( 0.123 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 634.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2063 | 2025-09-27 | KHAN         | W   | 0.767      | 0.303        | 0.001 (0.000)    | 0.384 (0.089)    | 0 (0.000) |    18.84 | Fugor, keis, Markoś, Masi, virtuoso |
|            5 |     2148 | 2025-09-26 | ENCE Academy | L   | 0.758      | -            | -                | -                | -         |    -5.67 | Fugor, keis, Markoś, Masi, virtuoso |
|            4 |     4590 | 2025-06-09 | ALGO         | L   | 0.034      | -            | -                | -                | -         |    -0.65 | Fugor, keis, Masi, Showk, Xydoo     |
|            3 |     4611 | 2025-06-08 | NOVAQ        | W   | 0.026      | 0.384        | 0.013 (0.000)    | 0.724 (0.007)    | 0 (0.000) |     0.69 | Fugor, keis, Masi, Showk, Xydoo     |
|            2 |     4656 | 2025-06-05 | ComeBack     | W   | 0.005      | 0.384        | 0.002 (0.000)    | 0.239 (0.000)    | 0 (0.000) |     0.09 | Fugor, keis, Masi, Showk, Xydoo     |
|            1 |     4664 | 2025-06-04 | HubaBuba     | L   | 0.000      | -            | -                | -                | -         |    -0.00 | Fugor, keis, Masi, Showk, Xydoo     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,382.19)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-01 |      0.794 | $3,000.00      | $2,382.19       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
