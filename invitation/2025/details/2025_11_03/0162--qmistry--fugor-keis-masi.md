### Roster Details<br />
Team Name: QMISTRY<br />
Roster: Fugor, keis, Masi<br />
Global Rank: [162](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [103]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  665.4<br />
<br />
Final Rank Value (665.4) = Starting Rank Value (650.9) + Head To Head Adjustments (14.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 650.9
- 400 + ( ( 0.134 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 650.9


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
|            6 |     1042 | 2025-09-27 | KHAN         | W   | 0.954      | 0.303        | 0.002 (0.001)    | 0.582 (0.168)    | 0 (0.000) |    22.20 | Fugor, keis, Markoś, Masi, virtuoso |
|            5 |     1127 | 2025-09-26 | ENCE Academy | L   | 0.944      | -            | -                | -                | -         |    -9.27 | Fugor, keis, Markoś, Masi, virtuoso |
|            4 |     3569 | 2025-06-09 | ALGO         | L   | 0.221      | -            | -                | -                | -         |    -4.51 | Fugor, keis, Masi, Showk, Xydoo     |
|            3 |     3590 | 2025-06-08 | NOVAQ        | W   | 0.212      | 0.384        | 0.014 (0.001)    | 0.409 (0.033)    | 0 (0.000) |     5.32 | Fugor, keis, Masi, Showk, Xydoo     |
|            2 |     3635 | 2025-06-05 | Y5           | W   | 0.192      | 0.384        | 0.003 (0.000)    | 0.284 (0.021)    | 0 (0.000) |     3.40 | Fugor, keis, Masi, Showk, Xydoo     |
|            1 |     3643 | 2025-06-04 | HubaBuba     | L   | 0.187      | -            | -                | -                | -         |    -2.72 | Fugor, keis, Masi, Showk, Xydoo     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,942.13)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-01 |      0.981 | $3,000.00      | $2,942.13       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
