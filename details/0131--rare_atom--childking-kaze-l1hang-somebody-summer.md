### Roster Details<br />
Team Name: Rare Atom<br />
Roster: ChildKing, kaze, L1haNg, somebody, Summer<br />
Global Rank: [131](../standings_global.md)<br />
<br />
Region: [Asia]( ../standings_asia.md)<br />
Regional Rank: [9]( ../standings_asia.md)<br />
<br />
Final Rank Value:  765.6<br />
<br />
Final Rank Value (765.6) = Starting Rank Value (627.1) + Head To Head Adjustments (138.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.371[<sup>2</sup>](#table1)
- Opponent Network: 0.069[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 627.1
- 400 + ( ( 0.110 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 627.1


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
|           24 |      154 | 2024-07-27 | NomadS      | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.077 (0.011)    | 0 (0.000) |     6.96 | ChildKing, kaze, L1haNg, somebody, Summer |
|           23 |      157 | 2024-07-27 | CatEvil     | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.230 (0.033)    | 0 (0.000) |     9.91 | ChildKing, kaze, L1haNg, somebody, Summer |
|           22 |      181 | 2024-07-26 | IHC         | W   | 1.000      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     4.75 | ChildKing, kaze, L1haNg, somebody, Summer |
|           21 |      670 | 2024-07-13 | TYLOO       | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.210 (0.030)    | 0 (0.000) |    16.63 | ChildKing, kaze, L1haNg, somebody, Summer |
|           20 |      673 | 2024-07-13 | Alter Ego   | W   | 1.000      | 0.143        | -                | 0.077 (0.011)    | 0 (0.000) |     8.27 | ChildKing, kaze, L1haNg, somebody, Summer |
|           19 |      702 | 2024-07-11 | The MongolZ | W   | 1.000      | 0.143        | 1.000 (0.143)    | 0.719 (0.103)    | 0 (0.000) |    31.45 | ChildKing, kaze, L1haNg, somebody, Summer |
|           18 |      704 | 2024-07-11 | CatEvil     | W   | 1.000      | 0.143        | -                | 0.230 (0.033)    | 0 (0.000) |    11.47 | ChildKing, kaze, L1haNg, somebody, Summer |
|           17 |     1007 | 2024-06-11 | Space       | L   | 0.866      | -            | -                | -                | -         |    -6.53 | ChildKing, L1haNg, Risk, somebody, Summer |
|           16 |     1049 | 2024-06-10 | SINNERS     | W   | 0.857      | 0.435        | 0.038 (0.014)    | 0.721 (0.268)    | 0 (0.000) |    23.73 | ChildKing, L1haNg, Risk, somebody, Summer |
|           15 |     1201 | 2024-06-07 | Passion UA  | L   | 0.839      | -            | -                | -                | -         |    -2.49 | ChildKing, L1haNg, Risk, somebody, Summer |
|           14 |     1342 | 2024-06-05 | RUBY        | W   | 0.824      | 0.435        | 0.097 (0.035)    | 0.506 (0.181)    | 0 (0.000) |    21.97 | ChildKing, L1haNg, Risk, somebody, Summer |
|           13 |     1406 | 2024-06-03 | Sampi       | L   | 0.810      | -            | -                | -                | -         |    -5.00 | ChildKing, L1haNg, Risk, somebody, Summer |
|           12 |     1650 | 2024-05-23 | MOUZ NXT    | L   | 0.738      | -            | -                | -                | -         |    -2.44 | ChildKing, L1haNg, Risk, somebody, Summer |
|           11 |     1827 | 2024-05-18 | Sangal      | L   | 0.705      | -            | -                | -                | -         |    -1.82 | ChildKing, L1haNg, Risk, somebody, Summer |
|           10 |     1849 | 2024-05-17 | NOM         | L   | 0.700      | -            | -                | -                | -         |   -13.89 | ChildKing, L1haNg, Risk, somebody, Summer |
|            9 |     1898 | 2024-05-16 | Metizport   | L   | 0.691      | -            | -                | -                | -         |    -3.31 | ChildKing, L1haNg, Risk, somebody, Summer |
|            8 |     2000 | 2024-05-14 | DMS         | L   | 0.679      | -            | -                | -                | -         |    -4.03 | ChildKing, L1haNg, Risk, somebody, Summer |
|            7 |     2030 | 2024-05-13 | NOM         | W   | 0.671      | 0.143        | -                | 0.110 (0.011)    | 0 (0.000) |     7.21 | ChildKing, L1haNg, Risk, somebody, Summer |
|            6 |     2568 | 2024-04-19 | The MongolZ | L   | 0.512      | -            | -                | -                | -         |    -0.01 | ChildKing, L1haNg, Risk, somebody, Summer |
|            5 |     2578 | 2024-04-19 | TYLOO       | W   | 0.511      | 0.143        | 0.020 (0.001)    | -                | -         |    10.69 | ChildKing, L1haNg, Risk, somebody, Summer |
|            4 |     2619 | 2024-04-18 | Lynn Vision | W   | 0.505      | 0.143        | 0.080 (0.006)    | 0.158 (0.011)    | -         |    14.00 | ChildKing, L1haNg, Risk, somebody, Summer |
|            3 |     2628 | 2024-04-18 | The MongolZ | L   | 0.504      | -            | -                | -                | -         |    -0.01 | ChildKing, L1haNg, Risk, somebody, Summer |
|            2 |     2661 | 2024-04-17 | NKT         | W   | 0.498      | -            | -                | -                | -         |     5.08 | ChildKing, L1haNg, Risk, somebody, Summer |
|            1 |     2669 | 2024-04-17 | MIRAI       | W   | 0.497      | 0.143        | 0.002 (0.000)    | -                | -         |     5.87 | ChildKing, L1haNg, Risk, somebody, Summer |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
