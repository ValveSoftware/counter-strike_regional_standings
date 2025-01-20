### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: Burmylov, Neityu, PR, TOBIZ, xelex<br />
Global Rank: [162](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [109]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  692.0<br />
<br />
Final Rank Value (692.0) = Starting Rank Value (678.2) + Head To Head Adjustments (13.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.287[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 678.2
- 400 + ( ( 0.140 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 678.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     2566 | 2024-09-10 | Sampi             | L   | 0.324      | -            | -                | -                | -         |    -1.70 | Burmylov, Neityu, PR, TOBIZ, xelex  |
|           19 |     2583 | 2024-09-09 | ECLOT             | L   | 0.318      | -            | -                | -                | -         |    -0.30 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           18 |     2591 | 2024-09-08 | ZEROvariant       | W   | 0.313      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.59 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           17 |     2683 | 2024-09-05 | HOTU              | L   | 0.293      | -            | -                | -                | -         |    -4.09 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           16 |     2889 | 2024-08-29 | TSM               | W   | 0.244      | 0.384        | 0.034 (0.003)    | 0.401 (0.038)    | 0 (0.000) |     5.82 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           15 |     2929 | 2024-08-28 | Monte             | L   | 0.239      | -            | -                | -                | -         |    -1.03 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           14 |     3009 | 2024-08-27 | ALTERNATE aTTaX   | L   | 0.230      | -            | -                | -                | -         |    -0.65 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           13 |     3044 | 2024-08-26 | CYBERSHOKE        | W   | 0.226      | 0.435        | 0.017 (0.002)    | 0.624 (0.061)    | 0 (0.000) |     5.05 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           12 |     3272 | 2024-08-21 | Into the Breach   | W   | 0.190      | 0.384        | 0.006 (0.000)    | 0.510 (0.037)    | 0 (0.000) |     4.53 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           11 |     3372 | 2024-08-17 | GUN5              | L   | 0.166      | -            | -                | -                | -         |    -0.51 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|           10 |     3383 | 2024-08-17 | RUSTEC            | W   | 0.165      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.89 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|            9 |     3439 | 2024-08-15 | CYBERSHOKE        | L   | 0.151      | -            | -                | -                | -         |    -1.42 | Burmylov, Neityu, PR, sirah, TMB    |
|            8 |     3461 | 2024-08-14 | kONO              | W   | 0.144      | 0.384        | 0.046 (0.003)    | 0.747 (0.041)    | 0 (0.000) |     3.65 | Burmylov, Neityu, PR, sirah, TMB    |
|            7 |     3615 | 2024-08-09 | Endpoint          | L   | 0.111      | -            | -                | -                | -         |    -0.99 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|            6 |     3644 | 2024-08-08 | AMKAL             | W   | 0.104      | 0.426        | 0.043 (0.002)    | 0.276 (0.012)    | 0 (0.000) |     2.35 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|            5 |     3813 | 2024-08-03 | 1WIN              | L   | 0.073      | -            | -                | -                | -         |    -1.26 | Burmylov, Neityu, PR, sirah, TOBIZ  |
|            4 |     4021 | 2024-07-29 | CYBERSHOKE        | W   | 0.039      | 0.426        | 0.017 (0.000)    | 0.624 (0.010)    | 0 (0.000) |     0.86 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            3 |     4024 | 2024-07-29 | Monte Gen         | W   | 0.038      | 0.426        | 0.039 (0.001)    | 0.500 (0.008)    | 0 (0.000) |     0.82 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            2 |     4080 | 2024-07-27 | fnatic            | L   | 0.025      | -            | -                | -                | -         |    -0.06 | Burmylov, Chr1zN, Neityu, PR, sirah |
|            1 |     4152 | 2024-07-25 | Aurora Young Blud | W   | 0.010      | 0.435        | 0.045 (0.000)    | 0.837 (0.004)    | 0 (0.000) |     0.27 | Burmylov, Chr1zN, Neityu, PR, sirah |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($719.62)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-14 |      0.352 | $500.00        | $176.23         |
| 2024-08-28 |      0.239 | $2,000.00      | $478.46         |
| 2024-07-28 |      0.032 | $2,000.00      | $64.93          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
