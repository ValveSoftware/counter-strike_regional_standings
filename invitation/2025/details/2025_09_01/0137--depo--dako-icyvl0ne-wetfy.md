### Roster Details<br />
Team Name: DEPO<br />
Roster: dako, icyvl0ne, wetfy<br />
Global Rank: [137](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_09_01.md)<br />
Regional Rank: [17]( ../../standings_asia_2025_09_01.md)<br />
<br />
Final Rank Value:  706.2<br />
<br />
Final Rank Value (706.2) = Starting Rank Value (721.1) + Head To Head Adjustments (-14.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.162[<sup>2</sup>](#table1)

The average of these factors is 0.167<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 721.1
- 400 + ( ( 0.167 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 721.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |       12 | 2025-08-31 | ALLINNERS | L   | 1.000      | -            | -                | -                | -         |   -14.02 | dako, her1tage, icyvl0ne, shoxs, wetfy  |
|            5 |       21 | 2025-08-30 | NOVAQ     | L   | 1.000      | -            | -                | -                | -         |   -12.19 | dako, her1tage, icyvl0ne, shoxs, wetfy  |
|            4 |       28 | 2025-08-30 | AK BARS   | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.000 (0.000)    | 1 (1.000) |     7.74 | dako, her1tage, icyvl0ne, shoxs, wetfy  |
|            3 |     2852 | 2025-04-06 | KHAN      | L   | 0.213      | -            | -                | -                | -         |    -2.44 | D1sastrouS, dako, fr0k, icyvl0ne, wetfy |
|            2 |     2867 | 2025-04-05 | RAGE      | W   | 0.207      | 0.333        | 0.001 (0.000)    | 0.010 (0.001)    | 1 (0.207) |     2.38 | D1sastrouS, dako, fr0k, icyvl0ne, wetfy |
|            1 |     2875 | 2025-04-05 | ALLINNERS | W   | 0.205      | 0.333        | 0.008 (0.001)    | 0.099 (0.007)    | 1 (0.205) |     3.65 | D1sastrouS, dako, fr0k, icyvl0ne, wetfy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,031.35)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-31 |      1.000 | $1,500.00      | $1,500.00       |
| 2025-04-06 |      0.213 | $2,500.00      | $531.35         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
