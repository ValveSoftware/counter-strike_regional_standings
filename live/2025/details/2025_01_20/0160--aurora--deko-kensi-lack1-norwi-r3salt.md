### Roster Details<br />
Team Name: Aurora<br />
Roster: deko, KENSI, Lack1, Norwi, r3salt<br />
Global Rank: [160](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [108]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  693.9<br />
<br />
Final Rank Value (693.9) = Starting Rank Value (694.3) + Head To Head Adjustments (-0.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.361[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.005[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 694.3
- 400 + ( ( 0.148 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 694.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     3534 | 2024-08-12 | TSM          | L   | 0.133      | -            | -                | -                | -         |    -1.11 | deko, KENSI, Lack1, Norwi, r3salt |
|            9 |     3671 | 2024-08-07 | SovvyKiNG    | W   | 0.099      | 0.500        | 0.000 (0.000)    | 0.177 (0.009)    | 0 (0.000) |     1.01 | deko, KENSI, Lack1, Norwi, r3salt |
|            8 |     3749 | 2024-08-05 | ARCRED       | L   | 0.086      | -            | -                | -                | -         |    -1.03 | deko, KENSI, Lack1, Norwi, r3salt |
|            7 |     3786 | 2024-08-04 | Nemiga       | L   | 0.078      | -            | -                | -                | -         |    -0.10 | deko, KENSI, Lack1, Norwi, r3salt |
|            6 |     4063 | 2024-07-28 | 3DMAX        | L   | 0.031      | -            | -                | -                | -         |    -0.02 | deko, KENSI, Lack1, Norwi, r3salt |
|            5 |     4116 | 2024-07-26 | The MongolZ  | L   | 0.017      | -            | -                | -                | -         |    -0.00 | deko, KENSI, Lack1, Norwi, r3salt |
|            4 |     4120 | 2024-07-26 | UNPAID       | W   | 0.016      | 0.650        | 0.140 (0.001)    | 0.203 (0.002)    | 1 (0.016) |     0.43 | deko, KENSI, Lack1, Norwi, r3salt |
|            3 |     4146 | 2024-07-25 | True Rippers | W   | 0.011      | 0.650        | 0.000 (0.000)    | 0.037 (0.000)    | 1 (0.011) |     0.09 | deko, KENSI, Lack1, Norwi, r3salt |
|            2 |     4158 | 2024-07-25 | ENCE         | W   | 0.010      | 0.650        | 0.336 (0.002)    | 0.323 (0.002)    | 1 (0.010) |     0.28 | deko, KENSI, Lack1, Norwi, r3salt |
|            1 |     4193 | 2024-07-24 | PARIVISION   | W   | 0.003      | 0.650        | 0.023 (0.000)    | 0.238 (0.000)    | 1 (0.003) |     0.06 | deko, KENSI, Lack1, Norwi, r3salt |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,779.94)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.592 | $4,500.00      | $2,662.57       |
| 2024-07-28 |      0.032 | $35,000.00     | $1,117.37       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
