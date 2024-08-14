### Roster Details<br />
Team Name: Corinthians<br />
Roster: CutzMeretz, desh, Leomonster, roz, zede<br />
Global Rank: [141](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [37]( ../standings_americas.md)<br />
<br />
Final Rank Value:  742.9<br />
<br />
Final Rank Value (742.9) = Starting Rank Value (733.5) + Head To Head Adjustments (9.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.312[<sup>1</sup>](#table2)
- Bounty Collected: 0.299[<sup>2</sup>](#table1)
- Opponent Network: 0.065[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.169<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 733.5
- 400 + ( ( 0.169 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 733.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |     1395 | 2024-06-14 | inSanitY     | L   | 0.793      | -            | -                | -                | -         |    -6.12 | CutzMeretz, desh, Leomonster, roz, zede |
|           25 |     1559 | 2024-06-09 | Vikings KR   | W   | 0.759      | 0.450        | 0.008 (0.003)    | 0.478 (0.163)    | 0 (0.000) |    13.71 | CutzMeretz, desh, Leomonster, roz, zede |
|           24 |     1625 | 2024-06-08 | Sharks       | W   | 0.752      | 0.450        | 0.027 (0.009)    | 0.533 (0.180)    | 0 (0.000) |    19.73 | CutzMeretz, desh, Leomonster, roz, zede |
|           23 |     1655 | 2024-06-07 | paiN         | L   | 0.748      | -            | -                | -                | -         |    -0.39 | CutzMeretz, desh, Leomonster, roz, zede |
|           22 |     1731 | 2024-06-06 | ODDIK        | W   | 0.740      | 0.450        | 0.097 (0.032)    | 0.822 (0.274)    | 0 (0.000) |    18.69 | CutzMeretz, desh, Leomonster, roz, zede |
|           21 |     2017 | 2024-05-29 | 9z Academy   | W   | 0.686      | 0.371        | 0.000 (0.000)    | 0.065 (0.017)    | 0 (0.000) |     5.66 | abr, CutzMeretz, desh, legy, Leomonster |
|           20 |     2033 | 2024-05-28 | Hype         | L   | 0.680      | -            | -                | -                | -         |    -6.02 | abr, CutzMeretz, desh, legy, Leomonster |
|           19 |     2234 | 2024-05-20 | BESTIA       | L   | 0.627      | -            | -                | -                | -         |    -3.58 | abr, CutzMeretz, desh, legy, Leomonster |
|           18 |     2410 | 2024-05-15 | Case         | L   | 0.594      | -            | -                | -                | -         |    -5.01 | abr, CutzMeretz, desh, legy, Leomonster |
|           17 |     2412 | 2024-05-15 | Case         | L   | 0.593      | -            | -                | -                | -         |    -5.23 | abr, CutzMeretz, desh, legy, Leomonster |
|           16 |     2461 | 2024-05-14 | RED Canids   | L   | 0.588      | -            | -                | -                | -         |    -2.21 | abr, CutzMeretz, desh, legy, Leomonster |
|           15 |     2465 | 2024-05-14 | RED Canids   | L   | 0.587      | -            | -                | -                | -         |    -2.26 | abr, CutzMeretz, desh, legy, Leomonster |
|           14 |     3473 | 2024-04-04 | Fluxo        | L   | 0.321      | -            | -                | -                | -         |    -3.67 | abr, CutzMeretz, desh, legy, Leomonster |
|           13 |     3479 | 2024-04-04 | Fluxo        | L   | 0.321      | -            | -                | -                | -         |    -3.76 | abr, CutzMeretz, desh, legy, Leomonster |
|           12 |     3650 | 2024-03-27 | 2GAME        | L   | 0.268      | -            | -                | -                | -         |    -5.08 | abr, CutzMeretz, desh, legy, Leomonster |
|           11 |     3653 | 2024-03-27 | 2GAME        | W   | 0.267      | 0.450        | 0.002 (0.000)    | 0.038 (0.005)    | 0 (0.000) |     3.40 | abr, CutzMeretz, desh, legy, Leomonster |
|           10 |     3924 | 2024-03-13 | MIBR Academy | L   | 0.174      | -            | -                | -                | -         |    -3.79 | abr, CutzMeretz, desh, legy, Leomonster |
|            9 |     3982 | 2024-03-11 | RED Canids   | L   | 0.160      | -            | -                | -                | -         |    -0.76 | abr, CutzMeretz, desh, legy, Leomonster |
|            8 |     4033 | 2024-03-09 | Fluxo        | L   | 0.145      | -            | -                | -                | -         |    -1.90 | abr, CutzMeretz, desh, legy, Leomonster |
|            7 |     4083 | 2024-03-07 | Sharks       | L   | 0.132      | -            | -                | -                | -         |    -0.96 | abr, CutzMeretz, desh, legy, Leomonster |
|            6 |     4339 | 2024-02-24 | W7M          | L   | 0.054      | -            | -                | -                | -         |    -0.66 | abr, CutzMeretz, desh, legy, Leomonster |
|            5 |     4348 | 2024-02-24 | W7M          | L   | 0.054      | -            | -                | -                | -         |    -0.66 | abr, CutzMeretz, desh, legy, Leomonster |
|            4 |     4368 | 2024-02-23 | Galorys      | W   | 0.048      | 0.450        | 0.028 (0.001)    | 0.497 (0.011)    | 0 (0.000) |     1.03 | abr, CutzMeretz, desh, legy, Leomonster |
|            3 |     4369 | 2024-02-23 | Galorys      | L   | 0.047      | -            | -                | -                | -         |    -0.47 | abr, CutzMeretz, desh, legy, Leomonster |
|            2 |     4402 | 2024-02-21 | Sharks       | L   | 0.035      | -            | -                | -                | -         |    -0.25 | abr, CutzMeretz, desh, legy, Leomonster |
|            1 |     4509 | 2024-02-17 | Galorys      | L   | 0.006      | -            | -                | -                | -         |    -0.06 | abr, CutzMeretz, desh, legy, Leomonster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,017.62)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
