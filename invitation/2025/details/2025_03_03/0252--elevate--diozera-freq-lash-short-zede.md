### Roster Details<br />
Team Name: Elevate<br />
Roster: diozera, fREQ, lash, short, zede<br />
Global Rank: [252](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_03.md)<br />
Regional Rank: [77]( ../../standings_americas_2025_03_03.md)<br />
<br />
Final Rank Value:  544.4<br />
<br />
Final Rank Value (544.4) = Starting Rank Value (507.4) + Head To Head Adjustments (37.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.4
- 400 + ( ( 0.056 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 507.4


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
|            6 |      513 | 2025-02-07 | RED Canids   | L   | 1.000      | -            | -                | -                | -         |    -4.58 | diozera, fREQ, lash, short, zede    |
|            5 |      531 | 2025-02-06 | 9z           | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.151 (0.022)    | 0 (0.000) |    24.34 | diozera, fREQ, lash, short, zede    |
|            4 |      537 | 2025-02-06 | Tropa do VSM | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    10.33 | diozera, fREQ, lash, short, zede    |
|            3 |      561 | 2025-02-05 | RED Canids   | L   | 1.000      | -            | -                | -                | -         |    -4.29 | diozera, fREQ, lash, short, zede    |
|            2 |      724 | 2025-01-10 | BESTIA       | L   | 0.855      | -            | -                | -                | -         |    -2.51 | desh, fREQ, Leomonster, short, zede |
|            1 |      736 | 2025-01-09 | 9z Academy   | W   | 0.846      | 0.384        | 0.000 (0.000)    | 0.205 (0.067)    | 0 (0.000) |    13.74 | desh, fREQ, Leomonster, short, zede |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
