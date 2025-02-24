### Roster Details<br />
Team Name: 1WIN<br />
Roster: cronuss, HObbit, klain, oz1k, sh1geo<br />
Global Rank: [191](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [122]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  631.6<br />
<br />
Final Rank Value (631.6) = Starting Rank Value (643.8) + Head To Head Adjustments (-12.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.288[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 643.8
- 400 + ( ( 0.128 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 643.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |       68 | 2025-02-21 | Dark Cloud | L   | 1.000      | -            | -                | -                | -         |   -12.44 | cronuss, HObbit, klain, oz1k, sh1geo |
|            5 |     1109 | 2024-11-30 | GenOne     | L   | 0.626      | -            | -                | -                | -         |    -7.51 | cronuss, HObbit, Jyo, lattykk, oz1k  |
|            4 |     1161 | 2024-11-28 | CPH Wolves | L   | 0.612      | -            | -                | -                | -         |    -7.08 | cronuss, HObbit, Jyo, lattykk, oz1k  |
|            3 |     1188 | 2024-11-26 | Arrow      | W   | 0.599      | 0.372        | 0.012 (0.003)    | 0.133 (0.030)    | 0 (0.000) |    12.46 | cronuss, HObbit, Jyo, lattykk, oz1k  |
|            2 |     1723 | 2024-11-02 | RUSH B     | L   | 0.440      | -            | -                | -                | -         |    -3.70 | cronuss, HObbit, Jyo, lattykk, oz1k  |
|            1 |     1774 | 2024-10-31 | QUAZAR     | W   | 0.425      | 0.396        | 0.002 (0.000)    | 0.017 (0.003)    | 0 (0.000) |     6.03 | cronuss, HObbit, Jyo, lattykk, oz1k  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,255.36)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.446 | $2,812.00      | $1,255.36       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
