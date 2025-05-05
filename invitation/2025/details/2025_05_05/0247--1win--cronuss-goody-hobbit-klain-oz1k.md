### Roster Details<br />
Team Name: 1win<br />
Roster: cronuss, Goody, HObbit, klain, oz1k<br />
Global Rank: [247](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [138]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  526.3<br />
<br />
Final Rank Value (526.3) = Starting Rank Value (518.2) + Head To Head Adjustments (8.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 518.2
- 400 + ( ( 0.065 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 518.2


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
|           10 |      507 | 2025-04-04 | CYBERSHOKE | L   | 0.993      | -            | -                | -                | -         |    -4.18 | cronuss, Goody, HObbit, klain, oz1k  |
|            9 |      529 | 2025-04-03 | Chimera    | L   | 0.986      | -            | -                | -                | -         |   -10.70 | cronuss, Goody, HObbit, klain, oz1k  |
|            8 |      608 | 2025-03-31 | Aurora     | W   | 0.967      | 0.143        | 0.040 (0.006)    | 0.613 (0.085)    | 0 (0.000) |    27.40 | cronuss, Goody, HObbit, klain, oz1k  |
|            7 |     1289 | 2025-03-08 | GenOne     | L   | 0.814      | -            | -                | -                | -         |    -8.08 | cronuss, HObbit, klain, oz1k, SANJI  |
|            6 |     1425 | 2025-03-06 | NEVERMORE  | L   | 0.800      | -            | -                | -                | -         |    -6.52 | cronuss, HObbit, klain, oz1k, SANJI  |
|            5 |     1482 | 2025-03-04 | Leo        | W   | 0.787      | 0.372        | 0.005 (0.001)    | 0.368 (0.108)    | 0 (0.000) |    17.89 | cronuss, HObbit, klain, oz1k, SANJI  |
|            4 |     1755 | 2025-02-21 | Dark Cloud | L   | 0.713      | -            | -                | -                | -         |    -7.67 | cronuss, HObbit, klain, oz1k, sh1geo |
|            3 |     2884 | 2024-11-30 | GenOne     | L   | 0.161      | -            | -                | -                | -         |    -1.62 | cronuss, HObbit, Jyo, lattykk, oz1k  |
|            2 |     2936 | 2024-11-28 | CPH Wolves | L   | 0.147      | -            | -                | -                | -         |    -1.38 | cronuss, HObbit, Jyo, lattykk, oz1k  |
|            1 |     2963 | 2024-11-26 | Arrow      | W   | 0.134      | 0.372        | 0.004 (0.000)    | 0.021 (0.001)    | 0 (0.000) |     2.98 | cronuss, HObbit, Jyo, lattykk, oz1k  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
