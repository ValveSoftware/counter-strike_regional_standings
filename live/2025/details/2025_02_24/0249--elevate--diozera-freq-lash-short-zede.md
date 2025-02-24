### Roster Details<br />
Team Name: Elevate<br />
Roster: diozera, fREQ, lash, short, zede<br />
Global Rank: [249](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_24.md)<br />
Regional Rank: [75]( ../../standings_americas_2025_02_24.md)<br />
<br />
Final Rank Value:  546.4<br />
<br />
Final Rank Value (546.4) = Starting Rank Value (507.3) + Head To Head Adjustments (39.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.3
- 400 + ( ( 0.056 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 507.3


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
|            6 |      425 | 2025-02-07 | RED Canids   | L   | 1.000      | -            | -                | -                | -         |    -4.19 | diozera, fREQ, lash, short, zede    |
|            5 |      443 | 2025-02-06 | 9z           | W   | 1.000      | 0.143        | 0.016 (0.002)    | 0.166 (0.024)    | 0 (0.000) |    24.90 | diozera, fREQ, lash, short, zede    |
|            4 |      449 | 2025-02-06 | Tropa do VSM | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    10.30 | diozera, fREQ, lash, short, zede    |
|            3 |      473 | 2025-02-05 | RED Canids   | L   | 1.000      | -            | -                | -                | -         |    -3.90 | diozera, fREQ, lash, short, zede    |
|            2 |      636 | 2025-01-10 | BESTIA       | L   | 0.900      | -            | -                | -                | -         |    -2.48 | desh, fREQ, Leomonster, short, zede |
|            1 |      648 | 2025-01-09 | 9z Academy   | W   | 0.892      | 0.384        | 0.000 (0.000)    | 0.220 (0.075)    | 0 (0.000) |    14.49 | desh, fREQ, Leomonster, short, zede |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
