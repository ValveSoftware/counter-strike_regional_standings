### Roster Details<br />
Team Name: Rare Atom<br />
Roster: ChildKing, kaze, L1haNg, somebody, Summer<br />
Global Rank: [94](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_23.md)<br />
Regional Rank: [6]( ../../standings_asia_2024_10_23.md)<br />
<br />
Final Rank Value:  882.6<br />
<br />
Final Rank Value (882.6) = Starting Rank Value (800.5) + Head To Head Adjustments (82.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.376[<sup>1</sup>](#table2)
- Bounty Collected: 0.333[<sup>2</sup>](#table1)
- Opponent Network: 0.036[<sup>2</sup>](#table1)
- LAN Wins: 0.073[<sup>2</sup>](#table1)

The average of these factors is 0.204<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 800.5
- 400 + ( ( 0.204 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 800.5


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
|           30 |     1589 | 2024-08-29 | TYLOO       | W   | 0.832      | 0.143        | 0.040 (0.005)    | 0.235 (0.028)    | 0 (0.000) |    14.33 | ChildKing, kaze, L1haNg, somebody, Summer |
|           29 |     1606 | 2024-08-29 | Teamwork    | W   | 0.830      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     2.45 | ChildKing, kaze, L1haNg, somebody, Summer |
|           28 |     1660 | 2024-08-28 | TYLOO       | L   | 0.824      | -            | -                | -                | -         |   -11.73 | ChildKing, kaze, L1haNg, somebody, Summer |
|           27 |     1712 | 2024-08-27 | CatEvil     | W   | 0.817      | 0.143        | -                | 0.149 (0.017)    | 0 (0.000) |     4.41 | ChildKing, kaze, L1haNg, somebody, Summer |
|           26 |     1717 | 2024-08-27 | XNL         | W   | 0.817      | -            | -                | -                | 0 (0.000) |     1.63 | ChildKing, kaze, L1haNg, somebody, Summer |
|           25 |     1938 | 2024-08-21 | FaZe        | L   | 0.779      | -            | -                | -                | -         |    -0.24 | ChildKing, kaze, L1haNg, somebody, Summer |
|           24 |     2456 | 2024-08-05 | TYLOO       | L   | 0.672      | -            | -                | -                | -         |   -10.45 | ChildKing, kaze, L1haNg, somebody, Summer |
|           23 |     2534 | 2024-08-03 | WDNMD       | W   | 0.658      | -            | -                | -                | 1 (0.658) |     1.31 | ChildKing, kaze, L1haNg, somebody, Summer |
|           22 |     2561 | 2024-08-02 | TYLOO       | W   | 0.652      | 0.143        | 0.040 (0.004)    | 0.235 (0.022)    | 0 (0.000) |    10.31 | ChildKing, kaze, L1haNg, somebody, Summer |
|           21 |     2568 | 2024-08-02 | ATOX        | W   | 0.651      | 0.143        | 0.035 (0.003)    | 0.280 (0.026)    | 0 (0.000) |    15.68 | ChildKing, kaze, L1haNg, somebody, Summer |
|           20 |     2603 | 2024-08-01 | TYLOO       | L   | 0.645      | -            | -                | -                | -         |    -9.86 | ChildKing, kaze, L1haNg, somebody, Summer |
|           19 |     2609 | 2024-08-01 | ATOX        | W   | 0.644      | 0.143        | 0.035 (0.003)    | 0.280 (0.026)    | 0 (0.000) |    15.93 | ChildKing, kaze, L1haNg, somebody, Summer |
|           18 |     2786 | 2024-07-27 | NomadS      | W   | 0.611      | -            | -                | -                | 0 (0.000) |     2.65 | ChildKing, kaze, L1haNg, somebody, Summer |
|           17 |     2789 | 2024-07-27 | CatEvil     | W   | 0.611      | -            | -                | -                | 0 (0.000) |     3.44 | ChildKing, kaze, L1haNg, somebody, Summer |
|           16 |     2813 | 2024-07-26 | IHC         | W   | 0.605      | 0.143        | 0.035 (0.003)    | 0.287 (0.025)    | -         |    14.05 | ChildKing, kaze, L1haNg, somebody, Summer |
|           15 |     3302 | 2024-07-13 | TYLOO       | W   | 0.519      | 0.143        | 0.040 (0.003)    | 0.235 (0.017)    | -         |     9.32 | ChildKing, kaze, L1haNg, somebody, Summer |
|           14 |     3305 | 2024-07-13 | Alter Ego   | W   | 0.517      | -            | -                | -                | -         |     2.88 | ChildKing, kaze, L1haNg, somebody, Summer |
|           13 |     3334 | 2024-07-11 | The MongolZ | W   | 0.504      | 0.143        | 0.696 (0.050)    | 0.597 (0.043)    | -         |    15.82 | ChildKing, kaze, L1haNg, somebody, Summer |
|           12 |     3336 | 2024-07-11 | CatEvil     | W   | 0.504      | -            | -                | -                | -         |     3.19 | ChildKing, kaze, L1haNg, somebody, Summer |
|           11 |     3639 | 2024-06-11 | Space       | L   | 0.306      | -            | -                | -                | -         |    -4.89 | ChildKing, L1haNg, Risk, somebody, Summer |
|           10 |     3681 | 2024-06-10 | SINNERS     | W   | 0.297      | 0.435        | 0.177 (0.023)    | 0.957 (0.124)    | -         |     8.59 | ChildKing, L1haNg, Risk, somebody, Summer |
|            9 |     3833 | 2024-06-07 | Passion UA  | L   | 0.279      | -            | -                | -                | -         |    -1.37 | ChildKing, L1haNg, Risk, somebody, Summer |
|            8 |     3974 | 2024-06-05 | RUBY        | W   | 0.264      | 0.435        | 0.042 (0.005)    | 0.323 (0.037)    | -         |     4.59 | ChildKing, L1haNg, Risk, somebody, Summer |
|            7 |     4038 | 2024-06-03 | Sampi       | L   | 0.251      | -            | -                | -                | -         |    -1.89 | ChildKing, L1haNg, Risk, somebody, Summer |
|            6 |     4282 | 2024-05-23 | MOUZ NXT    | L   | 0.178      | -            | -                | -                | -         |    -2.06 | ChildKing, L1haNg, Risk, somebody, Summer |
|            5 |     4459 | 2024-05-18 | Sangal      | L   | 0.145      | -            | -                | -                | -         |    -0.10 | ChildKing, L1haNg, Risk, somebody, Summer |
|            4 |     4481 | 2024-05-17 | NOM         | L   | 0.140      | -            | -                | -                | -         |    -3.60 | ChildKing, L1haNg, Risk, somebody, Summer |
|            3 |     4530 | 2024-05-16 | Metizport   | L   | 0.132      | -            | -                | -                | -         |    -1.38 | ChildKing, L1haNg, Risk, somebody, Summer |
|            2 |     4632 | 2024-05-14 | DMS         | L   | 0.119      | -            | -                | -                | -         |    -1.57 | ChildKing, L1haNg, Risk, somebody, Summer |
|            1 |     4662 | 2024-05-13 | NOM         | W   | 0.111      | -            | -                | -                | -         |     0.63 | ChildKing, L1haNg, Risk, somebody, Summer |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,902.87)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-25 |      0.807 | $5,000.00      | $4,033.41       |
| 2024-08-06 |      0.678 | $2,756.00      | $1,869.45       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
