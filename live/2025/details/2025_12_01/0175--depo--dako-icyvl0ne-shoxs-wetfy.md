### Roster Details<br />
Team Name: DEPO<br />
Roster: dako, icyvl0ne, shoxs, wetfy<br />
Global Rank: [175](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_12_01.md)<br />
Regional Rank: [23]( ../../standings_asia_2025_12_01.md)<br />
<br />
Final Rank Value:  700.0<br />
<br />
Final Rank Value (700.0) = Starting Rank Value (678.0) + Head To Head Adjustments (22.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.262[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.058[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 678.0
- 400 + ( ( 0.146 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 678.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1527 | 2025-10-09 | FengDa            | L   | 0.846      | -            | -                | -                | -         |    -6.47 | chrizm, dako, icyvl0ne, shoxs, wetfy   |
|            6 |     1581 | 2025-10-08 | The Huns          | L   | 0.839      | -            | -                | -                | -         |    -2.57 | chrizm, dako, icyvl0ne, shoxs, wetfy   |
|            5 |     1694 | 2025-10-06 | Chinggis Warriors | W   | 0.826      | 0.333        | 0.022 (0.006)    | 0.419 (0.115)    | 0 (0.000) |    20.60 | chrizm, dako, icyvl0ne, shoxs, wetfy   |
|            4 |     1746 | 2025-10-05 | Eruption          | W   | 0.819      | 0.333        | 0.009 (0.002)    | 0.237 (0.065)    | 0 (0.000) |    17.93 | chrizm, dako, icyvl0ne, shoxs, wetfy   |
|            3 |     2938 | 2025-08-31 | ALLINNERS         | L   | 0.585      | -            | -                | -                | -         |    -9.05 | dako, her1tage, icyvl0ne, shoxs, wetfy |
|            2 |     2950 | 2025-08-30 | NOVAQ             | L   | 0.580      | -            | -                | -                | -         |    -3.68 | dako, her1tage, icyvl0ne, shoxs, wetfy |
|            1 |     2960 | 2025-08-30 | AK BARS           | W   | 0.579      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.579) |     5.25 | dako, her1tage, icyvl0ne, shoxs, wetfy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($878.48)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-31 |      0.586 | $1,500.00      | $878.48         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
