### Roster Details<br />
Team Name: 1WIN<br />
Roster: cronuss, HObbit, klain, oz1k, sh1geo<br />
Global Rank: [194](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [121]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  633.7<br />
<br />
Final Rank Value (633.7) = Starting Rank Value (646.0) + Head To Head Adjustments (-12.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.288[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 646.0
- 400 + ( ( 0.128 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 646.0


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
|            6 |      156 | 2025-02-21 | Dark Cloud | L   | 1.000      | -            | -                | -                | -         |   -12.41 | cronuss, HObbit, klain, oz1k, sh1geo |
|            5 |     1197 | 2024-11-30 | GenOne     | L   | 0.581      | -            | -                | -                | -         |    -7.00 | cronuss, HObbit, Jyo, lattykk, oz1k  |
|            4 |     1249 | 2024-11-28 | CPH Wolves | L   | 0.567      | -            | -                | -                | -         |    -6.56 | cronuss, HObbit, Jyo, lattykk, oz1k  |
|            3 |     1276 | 2024-11-26 | Arrow      | W   | 0.554      | 0.372        | 0.012 (0.003)    | 0.123 (0.025)    | 0 (0.000) |    11.51 | cronuss, HObbit, Jyo, lattykk, oz1k  |
|            2 |     1811 | 2024-11-02 | RUSH B     | L   | 0.394      | -            | -                | -                | -         |    -3.24 | cronuss, HObbit, Jyo, lattykk, oz1k  |
|            1 |     1862 | 2024-10-31 | QUAZAR     | W   | 0.380      | 0.396        | 0.002 (0.000)    | 0.009 (0.001)    | 0 (0.000) |     5.34 | cronuss, HObbit, Jyo, lattykk, oz1k  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,127.95)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.401 | $2,812.00      | $1,127.95       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
