### Roster Details<br />
Team Name: KRÜ<br />
Roster: atarax1a, deco, laser, reversive, righi<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [104](../standings_global.md)<br />
Regional Rank: [25]( ../standings_americas.md)<br />
Final Rank Value:  894.2<br />
<br />
Final Rank Value (894.2) = Starting Rank Value (910.4) + Head To Head Adjustments (-16.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.405[<sup>1</sup>](#table2)
- Bounty Collected: 0.347[<sup>2</sup>](#table1)
- Opponent Network: 0.199[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.238<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 910.4
- 400 + ( ( 0.238 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 910.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |        4 | 2024-07-17 | Yawara         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.83 | atarax1a, deco, laser, reversive, righi   |
|           34 |       30 | 2024-07-16 | Hype           | W   | 1.000      | 0.450        | 0.010 (0.005)    | 0.427 (0.192)    | 0 (0.000) |    16.75 | atarax1a, deco, laser, reversive, righi   |
|           33 |       35 | 2024-07-16 | Hype           | L   | 1.000      | -            | -                | -                | -         |   -14.66 | atarax1a, deco, laser, reversive, righi   |
|           32 |       44 | 2024-07-16 | Dusty Roots    | L   | 1.000      | -            | -                | -                | -         |   -21.95 | atarax1a, deco, laser, reversive, righi   |
|           31 |       87 | 2024-07-15 | Sharks         | W   | 1.000      | 0.450        | 0.046 (0.021)    | 0.501 (0.225)    | 0 (0.000) |    21.09 | atarax1a, deco, laser, reversive, righi   |
|           30 |       91 | 2024-07-15 | Sharks         | L   | 1.000      | -            | -                | -                | -         |   -10.00 | atarax1a, deco, laser, reversive, righi   |
|           29 |      127 | 2024-07-14 | FURIA Academy  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.65 | atarax1a, deco, laser, reversive, righi   |
|           28 |      138 | 2024-07-13 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |    -9.57 | atarax1a, deco, laser, reversive, righi   |
|           27 |      148 | 2024-07-12 | W7M            | W   | 1.000      | 0.371        | 0.005 (0.002)    | 0.418 (0.155)    | 0 (0.000) |    12.71 | atarax1a, deco, laser, reversive, righi   |
|           26 |      162 | 2024-07-11 | RED Canids     | L   | 1.000      | -            | -                | -                | -         |    -3.82 | atarax1a, deco, laser, reversive, righi   |
|           25 |      196 | 2024-07-09 | Sharks         | W   | 1.000      | 0.371        | 0.046 (0.017)    | 0.501 (0.186)    | 0 (0.000) |    22.09 | atarax1a, laser, reversive, righi, yel    |
|           24 |      198 | 2024-07-09 | Vikings KR     | L   | 1.000      | -            | -                | -                | -         |   -17.48 | Andrew, atarax1a, laser, reversive, righi |
|           23 |      217 | 2024-07-08 | Solid          | W   | 1.000      | 0.371        | 0.047 (0.017)    | 0.622 (0.230)    | 0 (0.000) |    15.09 | atarax1a, deco, laser, reversive, righi   |
|           22 |      246 | 2024-07-05 | FURIA Academy  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.96 | atarax1a, laser, lenci, reversive, righi  |
|           21 |      268 | 2024-06-28 | Sharks         | L   | 1.000      | -            | -                | -                | -         |    -8.33 | atarax1a, laser, lenci, reversive, righi  |
|           20 |      275 | 2024-06-27 | Galorys        | L   | 1.000      | -            | -                | -                | -         |   -16.80 | atarax1a, laser, lenci, reversive, righi  |
|           19 |      415 | 2024-06-13 | paiN           | L   | 0.975      | -            | -                | -                | -         |    -1.10 | atarax1a, laser, lenci, reversive, righi  |
|           18 |      476 | 2024-06-11 | Bounty Hunters | W   | 0.960      | 0.450        | 0.030 (0.013)    | 0.441 (0.191)    | 0 (0.000) |    17.25 | atarax1a, laser, lenci, reversive, righi  |
|           17 |      529 | 2024-06-09 | Hype           | L   | 0.948      | -            | -                | -                | -         |   -14.53 | atarax1a, laser, lenci, reversive, righi  |
|           16 |      587 | 2024-06-08 | Fluxo          | L   | 0.942      | -            | -                | -                | -         |    -6.04 | atarax1a, laser, lenci, reversive, righi  |
|           15 |      649 | 2024-06-07 | Solid          | W   | 0.935      | 0.450        | 0.047 (0.020)    | 0.622 (0.261)    | 0 (0.000) |    16.49 | atarax1a, laser, lenci, reversive, righi  |
|           14 |      672 | 2024-06-07 | inSanitY       | L   | 0.933      | -            | -                | -                | -         |    -9.38 | atarax1a, laser, lenci, reversive, righi  |
|           13 |     1345 | 2024-05-16 | FURIA Academy  | L   | 0.788      | -            | -                | -                | -         |   -22.05 | atarax1a, laser, lenci, reversive, righi  |
|           12 |     1353 | 2024-05-16 | Case           | L   | 0.788      | -            | -                | -                | -         |   -12.61 | Andrew, atarax1a, laser, lenci, reversive |
|           11 |     1400 | 2024-05-15 | Solid          | W   | 0.781      | 0.371        | 0.047 (0.013)    | 0.622 (0.180)    | -         |    12.20 | atarax1a, laser, lenci, reversive, righi  |
|           10 |     1463 | 2024-05-14 | ODDIK          | L   | 0.774      | -            | -                | -                | -         |    -9.07 | atarax1a, laser, lenci, reversive, righi  |
|            9 |     1496 | 2024-05-13 | Imperial       | L   | 0.767      | -            | -                | -                | -         |    -1.25 | atarax1a, laser, lenci, reversive, righi  |
|            8 |     1509 | 2024-05-12 | Galorys        | L   | 0.762      | -            | -                | -                | -         |   -12.92 | atarax1a, laser, lenci, reversive, righi  |
|            7 |     1533 | 2024-05-11 | 9z             | L   | 0.755      | -            | -                | -                | -         |    -0.34 | atarax1a, laser, lenci, reversive, righi  |
|            6 |     1563 | 2024-05-10 | Solid          | W   | 0.749      | 0.435        | 0.047 (0.015)    | 0.622 (0.202)    | -         |    11.64 | atarax1a, laser, lenci, reversive, righi  |
|            5 |     1590 | 2024-05-09 | W7M            | W   | 0.740      | -            | -                | -                | -         |     9.08 | atarax1a, laser, lenci, reversive, righi  |
|            4 |     1631 | 2024-05-07 | Galorys        | W   | 0.727      | 0.435        | 0.026 (0.008)    | 0.535 (0.169)    | -         |    10.97 | atarax1a, laser, lenci, reversive, righi  |
|            3 |     1657 | 2024-05-05 | paiN           | L   | 0.715      | -            | -                | -                | -         |    -0.59 | atarax1a, laser, lenci, reversive, righi  |
|            2 |     3552 | 2024-02-15 | 9z             | L   | 0.181      | -            | -                | -                | -         |    -0.05 | atarax1a, laser, lenci, reversive, righi  |
|            1 |     3580 | 2024-02-14 | O PLANO        | W   | 0.176      | -            | -                | -                | -         |     0.57 | atarax1a, laser, lenci, reversive, righi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,295.55)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-14 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-16 |      0.995 | $2,500.00      | $2,487.02       |
| 2024-05-12 |      0.762 | $5,000.00      | $3,808.54       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
