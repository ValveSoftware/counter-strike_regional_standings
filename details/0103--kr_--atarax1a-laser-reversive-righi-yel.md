### Roster Details<br />
Team Name: KRÜ<br />
Roster: atarax1a, laser, reversive, righi, yel<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [103](../standings_global.md)<br />
Regional Rank: [25]( ../standings_americas.md)<br />
Final Rank Value:  861.0<br />
<br />
Final Rank Value (861.0) = Starting Rank Value (863.7) + Head To Head Adjustments (-2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.385[<sup>1</sup>](#table2)
- Bounty Collected: 0.337[<sup>2</sup>](#table1)
- Opponent Network: 0.158[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.220<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 863.7
- 400 + ( ( 0.220 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 863.7


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
|           26 |       32 | 2024-07-09 | Sharks         | W   | 1.000      | 0.371        | 0.046 (0.017)    | 0.520 (0.193)    | 0 (0.000) |    22.86 | atarax1a, laser, reversive, righi, yel    |
|           25 |       34 | 2024-07-09 | Vikings KR     | L   | 1.000      | -            | -                | -                | -         |   -16.98 | Andrew, atarax1a, laser, reversive, righi |
|           24 |       53 | 2024-07-08 | Solid          | W   | 1.000      | 0.371        | 0.048 (0.018)    | 0.585 (0.217)    | 0 (0.000) |    15.46 | atarax1a, deco, laser, reversive, righi   |
|           23 |       82 | 2024-07-05 | FURIA Academy  | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.075 (0.025)    | 0 (0.000) |     4.54 | atarax1a, laser, lenci, reversive, righi  |
|           22 |      104 | 2024-06-28 | Sharks         | L   | 1.000      | -            | -                | -                | -         |    -7.53 | atarax1a, laser, lenci, reversive, righi  |
|           21 |      111 | 2024-06-27 | Galorys        | L   | 1.000      | -            | -                | -                | -         |   -16.37 | atarax1a, laser, lenci, reversive, righi  |
|           20 |      251 | 2024-06-13 | paiN           | L   | 1.000      | -            | -                | -                | -         |    -0.93 | atarax1a, laser, lenci, reversive, righi  |
|           19 |      312 | 2024-06-11 | Bounty Hunters | W   | 1.000      | 0.450        | 0.025 (0.011)    | 0.440 (0.198)    | 0 (0.000) |    18.71 | atarax1a, laser, lenci, reversive, righi  |
|           18 |      365 | 2024-06-09 | Hype           | L   | 0.988      | -            | -                | -                | -         |   -14.53 | atarax1a, laser, lenci, reversive, righi  |
|           17 |      423 | 2024-06-08 | Fluxo          | L   | 0.982      | -            | -                | -                | -         |    -5.58 | atarax1a, laser, lenci, reversive, righi  |
|           16 |      485 | 2024-06-07 | Solid          | W   | 0.974      | 0.450        | 0.048 (0.021)    | 0.585 (0.256)    | 0 (0.000) |    17.80 | atarax1a, laser, lenci, reversive, righi  |
|           15 |      508 | 2024-06-07 | inSanitY       | L   | 0.973      | -            | -                | -                | -         |    -8.98 | atarax1a, laser, lenci, reversive, righi  |
|           14 |     1181 | 2024-05-16 | FURIA Academy  | L   | 0.828      | -            | -                | -                | -         |   -22.57 | atarax1a, laser, lenci, reversive, righi  |
|           13 |     1189 | 2024-05-16 | Case           | L   | 0.827      | -            | -                | -                | -         |   -13.36 | Andrew, atarax1a, laser, lenci, reversive |
|           12 |     1236 | 2024-05-15 | Solid          | W   | 0.821      | 0.371        | 0.048 (0.015)    | 0.585 (0.178)    | 0 (0.000) |    13.38 | atarax1a, laser, lenci, reversive, righi  |
|           11 |     1299 | 2024-05-14 | ODDIK          | L   | 0.814      | -            | -                | -                | -         |    -9.67 | atarax1a, laser, lenci, reversive, righi  |
|           10 |     1332 | 2024-05-13 | Imperial       | L   | 0.806      | -            | -                | -                | -         |    -1.01 | atarax1a, laser, lenci, reversive, righi  |
|            9 |     1345 | 2024-05-12 | Galorys        | L   | 0.801      | -            | -                | -                | -         |   -12.92 | atarax1a, laser, lenci, reversive, righi  |
|            8 |     1369 | 2024-05-11 | 9z             | L   | 0.794      | -            | -                | -                | -         |    -0.31 | atarax1a, laser, lenci, reversive, righi  |
|            7 |     1399 | 2024-05-10 | Solid          | W   | 0.788      | 0.435        | 0.048 (0.017)    | 0.585 (0.200)    | 0 (0.000) |    12.95 | atarax1a, laser, lenci, reversive, righi  |
|            6 |     1426 | 2024-05-09 | W7M            | W   | 0.780      | 0.435        | 0.001 (0.000)    | 0.404 (0.137)    | 0 (0.000) |     9.83 | atarax1a, laser, lenci, reversive, righi  |
|            5 |     1467 | 2024-05-07 | Galorys        | W   | 0.766      | 0.435        | 0.026 (0.009)    | 0.519 (0.173)    | 0 (0.000) |    12.32 | atarax1a, laser, lenci, reversive, righi  |
|            4 |     1493 | 2024-05-05 | paiN           | L   | 0.754      | -            | -                | -                | -         |    -0.48 | atarax1a, laser, lenci, reversive, righi  |
|            3 |     3388 | 2024-02-15 | 9z             | L   | 0.221      | -            | -                | -                | -         |    -0.05 | atarax1a, laser, lenci, reversive, righi  |
|            2 |     3416 | 2024-02-14 | O PLANO        | W   | 0.215      | 0.143        | 0.000 (0.000)    | 0.026 (0.001)    | 0 (0.000) |     0.88 | atarax1a, laser, lenci, reversive, righi  |
|            1 |     4184 | 2024-01-14 | Corinthians    | L   | 0.007      | -            | -                | -                | -         |    -0.20 | atarax1a, laser, lenci, reversive, righi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,506.59)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-05-12 |      0.801 | $5,000.00      | $4,006.59       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
