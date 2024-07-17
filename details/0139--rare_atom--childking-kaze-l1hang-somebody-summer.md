### Roster Details<br />
Team Name: Rare Atom<br />
Roster: ChildKing, kaze, L1haNg, somebody, Summer<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [139](../standings_global.md)<br />
Regional Rank: [12]( ../standings_asia.md)<br />
Final Rank Value:  770.3<br />
<br />
Final Rank Value (770.3) = Starting Rank Value (644.4) + Head To Head Adjustments (125.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.382[<sup>2</sup>](#table1)
- Opponent Network: 0.073[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.114<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 644.4
- 400 + ( ( 0.114 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 644.4


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
|           21 |      140 | 2024-07-13 | TYLOO       | W   | 1.000      | 0.143        | 0.019 (0.003)    | 0.238 (0.034)    | 0 (0.000) |    17.00 | ChildKing, kaze, L1haNg, somebody, Summer |
|           20 |      143 | 2024-07-13 | Alter Ego   | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.082 (0.012)    | 0 (0.000) |     7.77 | ChildKing, kaze, L1haNg, somebody, Summer |
|           19 |      172 | 2024-07-11 | The MongolZ | W   | 1.000      | 0.143        | 1.000 (0.143)    | 0.653 (0.093)    | 0 (0.000) |    31.44 | ChildKing, kaze, L1haNg, somebody, Summer |
|           18 |      174 | 2024-07-11 | CatEvil     | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.082 (0.012)    | 0 (0.000) |    10.64 | ChildKing, kaze, L1haNg, somebody, Summer |
|           17 |      477 | 2024-06-11 | Space       | L   | 0.960      | -            | -                | -                | -         |    -6.56 | ChildKing, L1haNg, Risk, somebody, Summer |
|           16 |      519 | 2024-06-10 | SINNERS     | W   | 0.951      | 0.435        | 0.058 (0.024)    | 0.744 (0.308)    | 0 (0.000) |    26.61 | ChildKing, L1haNg, Risk, somebody, Summer |
|           15 |      671 | 2024-06-07 | Passion UA  | L   | 0.933      | -            | -                | -                | -         |    -3.03 | ChildKing, L1haNg, Risk, somebody, Summer |
|           14 |      812 | 2024-06-05 | RUBY        | W   | 0.918      | 0.435        | 0.144 (0.057)    | 0.580 (0.231)    | 0 (0.000) |    25.09 | ChildKing, L1haNg, Risk, somebody, Summer |
|           13 |      876 | 2024-06-03 | Sampi       | L   | 0.905      | -            | -                | -                | -         |    -5.05 | ChildKing, L1haNg, Risk, somebody, Summer |
|           12 |     1120 | 2024-05-23 | MOUZ NXT    | L   | 0.832      | -            | -                | -                | -         |    -2.54 | ChildKing, L1haNg, Risk, somebody, Summer |
|           11 |     1297 | 2024-05-18 | Sangal      | L   | 0.799      | -            | -                | -                | -         |    -2.15 | ChildKing, L1haNg, Risk, somebody, Summer |
|           10 |     1319 | 2024-05-17 | NOM         | L   | 0.794      | -            | -                | -                | -         |   -16.36 | ChildKing, L1haNg, Risk, somebody, Summer |
|            9 |     1368 | 2024-05-16 | Metizport   | L   | 0.786      | -            | -                | -                | -         |    -3.07 | ChildKing, L1haNg, Risk, somebody, Summer |
|            8 |     1470 | 2024-05-14 | DMS         | L   | 0.774      | -            | -                | -                | -         |    -5.15 | ChildKing, L1haNg, Risk, somebody, Summer |
|            7 |     1500 | 2024-05-13 | NOM         | W   | 0.765      | 0.143        | 0.000 (0.000)    | 0.103 (0.011)    | 0 (0.000) |     7.47 | ChildKing, L1haNg, Risk, somebody, Summer |
|            6 |     2038 | 2024-04-19 | The MongolZ | L   | 0.607      | -            | -                | -                | -         |    -0.02 | ChildKing, L1haNg, Risk, somebody, Summer |
|            5 |     2048 | 2024-04-19 | TYLOO       | W   | 0.605      | 0.143        | 0.032 (0.003)    | 0.141 (0.012)    | 0 (0.000) |    13.62 | ChildKing, L1haNg, Risk, somebody, Summer |
|            4 |     2089 | 2024-04-18 | Lynn Vision | W   | 0.600      | 0.143        | 0.126 (0.011)    | 0.212 (0.018)    | 0 (0.000) |    17.49 | ChildKing, L1haNg, Risk, somebody, Summer |
|            3 |     2098 | 2024-04-18 | The MongolZ | L   | 0.599      | -            | -                | -                | -         |    -0.02 | ChildKing, L1haNg, Risk, somebody, Summer |
|            2 |     2131 | 2024-04-17 | NKT         | W   | 0.592      | 0.143        | -                | 0.024 (0.002)    | 0 (0.000) |     5.87 | ChildKing, L1haNg, Risk, somebody, Summer |
|            1 |     2139 | 2024-04-17 | MIRAI       | W   | 0.592      | 0.143        | 0.003 (0.000)    | -                | -         |     6.81 | ChildKing, L1haNg, Risk, somebody, Summer |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
