### Roster Details<br />
Team Name: Rare Atom<br />
Roster: expro, kory, phzy, somebody, Summer<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [154](../standings_global.md)<br />
Regional Rank: [13]( ../standings_asia.md)<br />
Final Rank Value:  700.9<br />
<br />
Final Rank Value (700.9) = Starting Rank Value (687.5) + Head To Head Adjustments (13.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 687.5
- 400 + ( ( 0.141 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 687.5


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
|           17 |     2805 | 2024-03-06 | Cloud9       | L   | 0.509      | -            | -                | -                | -         |    -0.41 | expro, kory, phzy, somebody, Summer |
|           16 |     3501 | 2024-02-02 | GR           | W   | 0.288      | 0.143        | 0.011 (0.000)    | 0.119 (0.005)    | 0 (0.000) |     4.38 | expro, kory, phzy, somebody, Summer |
|           15 |     3506 | 2024-02-02 | TYLOO        | W   | 0.287      | 0.143        | 0.003 (0.000)    | 0.093 (0.004)    | 0 (0.000) |     5.48 | expro, kory, phzy, somebody, Summer |
|           14 |     3550 | 2024-01-31 | NKT          | W   | 0.274      | 0.143        | 0.003 (0.000)    | 0.030 (0.001)    | 0 (0.000) |     4.43 | expro, kory, phzy, somebody, Summer |
|           13 |     3553 | 2024-01-31 | Lynn Vision  | W   | 0.274      | 0.143        | 0.126 (0.005)    | 0.258 (0.010)    | 0 (0.000) |     8.13 | expro, kory, phzy, somebody, Summer |
|           12 |     3556 | 2024-01-31 | ATOX         | L   | 0.274      | -            | -                | -                | -         |    -1.57 | expro, kory, phzy, somebody, Summer |
|           11 |     3637 | 2024-01-25 | Wings Up     | L   | 0.234      | -            | -                | -                | -         |    -5.34 | expro, kory, phzy, somebody, Summer |
|           10 |     3641 | 2024-01-25 | Newhappy     | W   | 0.234      | 0.143        | 0.000 (0.000)    | 0.066 (0.002)    | 0 (0.000) |     2.18 | expro, kory, phzy, somebody, Summer |
|            9 |     3655 | 2024-01-24 | Eruption     | W   | 0.228      | 0.143        | 0.000 (0.000)    | 0.022 (0.001)    | 0 (0.000) |     1.26 | expro, kory, phzy, somebody, Summer |
|            8 |     3707 | 2024-01-22 | ATOX         | L   | 0.215      | -            | -                | -                | -         |    -1.22 | expro, kory, phzy, somebody, Summer |
|            7 |     3734 | 2024-01-21 | TYLOO        | L   | 0.208      | -            | -                | -                | -         |    -2.72 | expro, kory, phzy, somebody, Summer |
|            6 |     3740 | 2024-01-21 | Newhappy     | W   | 0.207      | 0.143        | 0.000 (0.000)    | 0.066 (0.002)    | 0 (0.000) |     1.95 | expro, kory, phzy, somebody, Summer |
|            5 |     3782 | 2024-01-20 | Wings Up     | W   | 0.200      | 0.143        | 0.000 (0.000)    | 0.032 (0.001)    | 0 (0.000) |     1.72 | expro, kory, phzy, somebody, Summer |
|            4 |     3791 | 2024-01-19 | SHPL         | W   | 0.199      | 0.143        | 0.000 (0.000)    | 0.010 (0.000)    | 0 (0.000) |     1.09 | expro, kory, phzy, somebody, Summer |
|            3 |     3850 | 2024-01-18 | Newhappy     | L   | 0.192      | -            | -                | -                | -         |    -4.30 | expro, kory, phzy, somebody, Summer |
|            2 |     4128 | 2024-01-12 | Steel Helmet | L   | 0.147      | -            | -                | -                | -         |    -2.45 | expro, kory, phzy, somebody, Summer |
|            1 |     4131 | 2024-01-12 | SHPL         | W   | 0.147      | 0.143        | 0.000 (0.000)    | 0.010 (0.000)    | 0 (0.000) |     0.78 | expro, kory, phzy, somebody, Summer |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,683.33)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
