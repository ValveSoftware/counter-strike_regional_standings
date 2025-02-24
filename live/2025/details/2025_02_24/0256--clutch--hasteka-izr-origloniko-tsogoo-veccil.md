### Roster Details<br />
Team Name: Clutch<br />
Roster: hasteka, IZR, ORIGLONIKO, Tsogoo, Veccil<br />
Global Rank: [256](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_24.md)<br />
Regional Rank: [33]( ../../standings_asia_2025_02_24.md)<br />
<br />
Final Rank Value:  521.7<br />
<br />
Final Rank Value (521.7) = Starting Rank Value (525.7) + Head To Head Adjustments (-4.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.065[<sup>2</sup>](#table1)

The average of these factors is 0.066<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 525.7
- 400 + ( ( 0.066 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 525.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1641 | 2024-11-07 | IHC               | L   | 0.470      | -            | -                | -                | -         |    -5.01 | hasteka, IZR, ORIGLONIKO, Tsogoo, Veccil  |
|            7 |     1656 | 2024-11-06 | Gods Reign        | W   | 0.463      | 0.333        | 0.005 (0.001)    | 0.248 (0.038)    | 0 (0.000) |    10.26 | hasteka, IZR, ORIGLONIKO, Tsogoo, Veccil  |
|            6 |     1658 | 2024-11-05 | Dewa United       | L   | 0.462      | -            | -                | -                | -         |    -9.66 | hasteka, IZR, ORIGLONIKO, Tsogoo, Veccil  |
|            5 |     2059 | 2024-10-17 | ATOX              | L   | 0.330      | -            | -                | -                | -         |    -2.88 | clouden, hasteka, IZR, ORIGLONIKO, Tsogoo |
|            4 |     2089 | 2024-10-16 | The QUBE          | W   | 0.323      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.323) |     3.33 | clouden, hasteka, IZR, ORIGLONIKO, Tsogoo |
|            3 |     2108 | 2024-10-15 | Chinggis Warriors | L   | 0.317      | -            | -                | -                | -         |    -2.02 | clouden, hasteka, IZR, ORIGLONIKO, Tsogoo |
|            2 |     2383 | 2024-10-04 | ATOX              | L   | 0.244      | -            | -                | -                | -         |    -0.51 | clouden, hasteka, IZR, ORIGLONIKO, Tsogoo |
|            1 |     2390 | 2024-10-03 | The QUBE          | W   | 0.242      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.242) |     2.52 | clouden, hasteka, IZR, ORIGLONIKO, Tsogoo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
