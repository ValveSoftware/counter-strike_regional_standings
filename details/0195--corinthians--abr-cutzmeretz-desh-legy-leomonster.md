### Roster Details<br />
Team Name: Corinthians<br />
Roster: abr, CutzMeretz, desh, legy, Leomonster<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [195](../standings_global.md)<br />
Regional Rank: [52]( ../standings_americas.md)<br />
Final Rank Value:  515.1<br />
<br />
Final Rank Value (515.1) = Starting Rank Value (525.5) + Head To Head Adjustments (-10.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 525.5
- 400 + ( ( 0.060 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 525.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |      842 | 2024-05-29 | 9z Academy   | W   | 0.913      | 0.371        | 0.000 (0.000)    | 0.038 (0.013)    | 0 (0.000) |     9.78 | abr, CutzMeretz, desh, legy, Leomonster    |
|           28 |      858 | 2024-05-28 | Hype         | L   | 0.907      | -            | -                | -                | -         |    -4.17 | abr, CutzMeretz, desh, legy, Leomonster    |
|           27 |     1059 | 2024-05-20 | BESTIA       | L   | 0.855      | -            | -                | -                | -         |    -1.68 | abr, CutzMeretz, desh, legy, Leomonster    |
|           26 |     1235 | 2024-05-15 | Case         | L   | 0.821      | -            | -                | -                | -         |    -3.19 | abr, CutzMeretz, desh, legy, Leomonster    |
|           25 |     1237 | 2024-05-15 | Case         | L   | 0.821      | -            | -                | -                | -         |    -3.29 | abr, CutzMeretz, desh, legy, Leomonster    |
|           24 |     1286 | 2024-05-14 | RED Canids   | L   | 0.815      | -            | -                | -                | -         |    -0.67 | abr, CutzMeretz, desh, legy, Leomonster    |
|           23 |     1290 | 2024-05-14 | RED Canids   | L   | 0.815      | -            | -                | -                | -         |    -0.67 | abr, CutzMeretz, desh, legy, Leomonster    |
|           22 |     2298 | 2024-04-04 | Fluxo        | L   | 0.548      | -            | -                | -                | -         |    -0.73 | abr, CutzMeretz, desh, legy, Leomonster    |
|           21 |     2304 | 2024-04-04 | Fluxo        | L   | 0.548      | -            | -                | -                | -         |    -0.73 | abr, CutzMeretz, desh, legy, Leomonster    |
|           20 |     2475 | 2024-03-27 | ex-2GAME     | L   | 0.495      | -            | -                | -                | -         |    -3.93 | abr, CutzMeretz, desh, legy, Leomonster    |
|           19 |     2478 | 2024-03-27 | ex-2GAME     | W   | 0.495      | 0.450        | 0.003 (0.001)    | 0.124 (0.028)    | 0 (0.000) |    11.92 | abr, CutzMeretz, desh, legy, Leomonster    |
|           18 |     2749 | 2024-03-13 | MIBR Academy | L   | 0.401      | -            | -                | -                | -         |    -6.19 | abr, CutzMeretz, desh, legy, Leomonster    |
|           17 |     2807 | 2024-03-11 | RED Canids   | L   | 0.387      | -            | -                | -                | -         |    -0.32 | abr, CutzMeretz, desh, legy, Leomonster    |
|           16 |     2858 | 2024-03-09 | Fluxo        | L   | 0.373      | -            | -                | -                | -         |    -0.51 | abr, CutzMeretz, desh, legy, Leomonster    |
|           15 |     2908 | 2024-03-07 | Sharks       | L   | 0.360      | -            | -                | -                | -         |    -0.72 | abr, CutzMeretz, desh, legy, Leomonster    |
|           14 |     3164 | 2024-02-24 | W7M          | L   | 0.282      | -            | -                | -                | -         |    -1.45 | abr, CutzMeretz, desh, legy, Leomonster    |
|           13 |     3173 | 2024-02-24 | W7M          | L   | 0.282      | -            | -                | -                | -         |    -1.47 | abr, CutzMeretz, desh, legy, Leomonster    |
|           12 |     3193 | 2024-02-23 | Galorys      | W   | 0.275      | 0.450        | 0.026 (0.003)    | 0.519 (0.064)    | 0 (0.000) |     7.61 | abr, CutzMeretz, desh, legy, Leomonster    |
|           11 |     3194 | 2024-02-23 | Galorys      | L   | 0.275      | -            | -                | -                | -         |    -1.05 | abr, CutzMeretz, desh, legy, Leomonster    |
|           10 |     3227 | 2024-02-21 | Sharks       | L   | 0.262      | -            | -                | -                | -         |    -0.55 | abr, CutzMeretz, desh, legy, Leomonster    |
|            9 |     3334 | 2024-02-17 | Galorys      | L   | 0.234      | -            | -                | -                | -         |    -0.87 | abr, CutzMeretz, desh, legy, Leomonster    |
|            8 |     3412 | 2024-02-14 | adalYamigos  | L   | 0.215      | -            | -                | -                | -         |    -2.43 | abr, CutzMeretz, desh, legy, Leomonster    |
|            7 |     3421 | 2024-02-14 | adalYamigos  | L   | 0.215      | -            | -                | -                | -         |    -2.47 | abr, CutzMeretz, desh, legy, Leomonster    |
|            6 |     3426 | 2024-02-14 | Solid        | L   | 0.214      | -            | -                | -                | -         |    -0.70 | abr, CutzMeretz, desh, legy, Leomonster    |
|            5 |     3467 | 2024-02-13 | W7M          | L   | 0.207      | -            | -                | -                | -         |    -1.10 | abr, CutzMeretz, desh, legy, Leomonster    |
|            4 |     3478 | 2024-02-12 | W7M          | L   | 0.201      | -            | -                | -                | -         |    -1.08 | abr, CutzMeretz, desh, legy, Leomonster    |
|            3 |     4147 | 2024-01-15 | Imperial     | L   | 0.015      | -            | -                | -                | -         |    -0.00 | abr, Alisson, CutzMeretz, desh, Leomonster |
|            2 |     4181 | 2024-01-14 | Sharks       | L   | 0.008      | -            | -                | -                | -         |    -0.02 | abr, Alisson, CutzMeretz, desh, Leomonster |
|            1 |     4184 | 2024-01-14 | KRÜ          | W   | 0.007      | 0.143        | 0.025 (0.000)    | 0.235 (0.000)    | 0 (0.000) |     0.20 | abr, Alisson, CutzMeretz, desh, Leomonster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
