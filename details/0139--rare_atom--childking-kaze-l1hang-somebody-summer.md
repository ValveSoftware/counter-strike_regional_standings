### Roster Details<br />
Team Name: Rare Atom<br />
Roster: ChildKing, kaze, L1haNg, somebody, Summer<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [139](../standings_global.md)<br />
Regional Rank: [12]( ../standings_asia.md)<br />
Final Rank Value:  746.5<br />
<br />
Final Rank Value (746.5) = Starting Rank Value (626.7) + Head To Head Adjustments (119.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.376[<sup>2</sup>](#table1)
- Opponent Network: 0.071[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.112<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 626.7
- 400 + ( ( 0.112 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 626.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      428 | 2024-07-13 | TYLOO       | W   | 1.000      | 0.143        | 0.016 (0.002)    | 0.229 (0.033)    | 0 (0.000) |    16.74 | ChildKing, kaze, L1haNg, somebody, Summer |
|           20 |      431 | 2024-07-13 | Alter Ego   | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.081 (0.012)    | 0 (0.000) |     8.22 | ChildKing, kaze, L1haNg, somebody, Summer |
|           19 |      460 | 2024-07-11 | The MongolZ | W   | 1.000      | 0.143        | 1.000 (0.143)    | 0.725 (0.104)    | 0 (0.000) |    31.43 | ChildKing, kaze, L1haNg, somebody, Summer |
|           18 |      462 | 2024-07-11 | CatEvil     | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.081 (0.012)    | 0 (0.000) |    11.17 | ChildKing, kaze, L1haNg, somebody, Summer |
|           17 |      765 | 2024-06-11 | Space       | L   | 0.913      | -            | -                | -                | -         |    -6.62 | ChildKing, L1haNg, Risk, somebody, Summer |
|           16 |      807 | 2024-06-10 | SINNERS     | W   | 0.904      | 0.435        | 0.048 (0.019)    | 0.769 (0.302)    | 0 (0.000) |    24.96 | ChildKing, L1haNg, Risk, somebody, Summer |
|           15 |      959 | 2024-06-07 | Passion UA  | L   | 0.886      | -            | -                | -                | -         |    -2.66 | ChildKing, L1haNg, Risk, somebody, Summer |
|           14 |     1100 | 2024-06-05 | RUBY        | W   | 0.871      | 0.435        | 0.122 (0.046)    | 0.575 (0.218)    | 0 (0.000) |    23.45 | ChildKing, L1haNg, Risk, somebody, Summer |
|           13 |     1164 | 2024-06-03 | Sampi       | L   | 0.858      | -            | -                | -                | -         |    -5.14 | ChildKing, L1haNg, Risk, somebody, Summer |
|           12 |     1408 | 2024-05-23 | MOUZ NXT    | L   | 0.785      | -            | -                | -                | -         |    -2.61 | ChildKing, L1haNg, Risk, somebody, Summer |
|           11 |     1585 | 2024-05-18 | Sangal      | L   | 0.752      | -            | -                | -                | -         |    -2.25 | ChildKing, L1haNg, Risk, somebody, Summer |
|           10 |     1607 | 2024-05-17 | NOM         | L   | 0.747      | -            | -                | -                | -         |   -15.15 | ChildKing, L1haNg, Risk, somebody, Summer |
|            9 |     1656 | 2024-05-16 | Metizport   | L   | 0.739      | -            | -                | -                | -         |    -3.25 | ChildKing, L1haNg, Risk, somebody, Summer |
|            8 |     1758 | 2024-05-14 | DMS         | L   | 0.726      | -            | -                | -                | -         |    -5.35 | ChildKing, L1haNg, Risk, somebody, Summer |
|            7 |     1788 | 2024-05-13 | NOM         | W   | 0.718      | 0.143        | 0.000 (0.000)    | 0.094 (0.010)    | 0 (0.000) |     7.30 | ChildKing, L1haNg, Risk, somebody, Summer |
|            6 |     2326 | 2024-04-19 | The MongolZ | L   | 0.560      | -            | -                | -                | -         |    -0.02 | ChildKing, L1haNg, Risk, somebody, Summer |
|            5 |     2336 | 2024-04-19 | TYLOO       | W   | 0.558      | 0.143        | 0.026 (0.002)    | 0.116 (0.009)    | 0 (0.000) |    11.91 | ChildKing, L1haNg, Risk, somebody, Summer |
|            4 |     2377 | 2024-04-18 | Lynn Vision | W   | 0.552      | 0.143        | 0.103 (0.008)    | 0.187 (0.015)    | 0 (0.000) |    15.64 | ChildKing, L1haNg, Risk, somebody, Summer |
|            3 |     2386 | 2024-04-18 | The MongolZ | L   | 0.552      | -            | -                | -                | -         |    -0.02 | ChildKing, L1haNg, Risk, somebody, Summer |
|            2 |     2419 | 2024-04-17 | NKT         | W   | 0.545      | 0.143        | -                | 0.022 (0.002)    | 0 (0.000) |     5.59 | ChildKing, L1haNg, Risk, somebody, Summer |
|            1 |     2427 | 2024-04-17 | MIRAI       | W   | 0.544      | 0.143        | 0.003 (0.000)    | -                | -         |     6.43 | ChildKing, L1haNg, Risk, somebody, Summer |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
