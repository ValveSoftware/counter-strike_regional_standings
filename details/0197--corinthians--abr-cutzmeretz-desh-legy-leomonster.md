### Roster Details<br />
Team Name: Corinthians<br />
Roster: abr, CutzMeretz, desh, legy, Leomonster<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [197](../standings_global.md)<br />
Regional Rank: [53]( ../standings_americas.md)<br />
Final Rank Value:  518.8<br />
<br />
Final Rank Value (518.8) = Starting Rank Value (524.9) + Head To Head Adjustments (-6.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 524.9
- 400 + ( ( 0.058 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 524.9


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
|           26 |     1006 | 2024-05-29 | 9z Academy   | W   | 0.874      | 0.371        | 0.000 (0.000)    | 0.037 (0.012)    | 0 (0.000) |     9.27 | abr, CutzMeretz, desh, legy, Leomonster |
|           25 |     1022 | 2024-05-28 | Hype         | L   | 0.868      | -            | -                | -                | -         |    -3.51 | abr, CutzMeretz, desh, legy, Leomonster |
|           24 |     1223 | 2024-05-20 | BESTIA       | L   | 0.815      | -            | -                | -                | -         |    -1.47 | abr, CutzMeretz, desh, legy, Leomonster |
|           23 |     1399 | 2024-05-15 | Case         | L   | 0.781      | -            | -                | -                | -         |    -2.43 | abr, CutzMeretz, desh, legy, Leomonster |
|           22 |     1401 | 2024-05-15 | Case         | L   | 0.781      | -            | -                | -                | -         |    -2.49 | abr, CutzMeretz, desh, legy, Leomonster |
|           21 |     1450 | 2024-05-14 | RED Canids   | L   | 0.775      | -            | -                | -                | -         |    -0.59 | abr, CutzMeretz, desh, legy, Leomonster |
|           20 |     1454 | 2024-05-14 | RED Canids   | L   | 0.775      | -            | -                | -                | -         |    -0.59 | abr, CutzMeretz, desh, legy, Leomonster |
|           19 |     2462 | 2024-04-04 | Fluxo        | L   | 0.509      | -            | -                | -                | -         |    -0.64 | abr, CutzMeretz, desh, legy, Leomonster |
|           18 |     2468 | 2024-04-04 | Fluxo        | L   | 0.508      | -            | -                | -                | -         |    -0.64 | abr, CutzMeretz, desh, legy, Leomonster |
|           17 |     2639 | 2024-03-27 | 2GAME        | L   | 0.455      | -            | -                | -                | -         |    -3.67 | abr, CutzMeretz, desh, legy, Leomonster |
|           16 |     2642 | 2024-03-27 | 2GAME        | W   | 0.455      | 0.450        | 0.003 (0.001)    | 0.079 (0.016)    | 0 (0.000) |    10.89 | abr, CutzMeretz, desh, legy, Leomonster |
|           15 |     2913 | 2024-03-13 | MIBR Academy | L   | 0.361      | -            | -                | -                | -         |    -5.60 | abr, CutzMeretz, desh, legy, Leomonster |
|           14 |     2971 | 2024-03-11 | RED Canids   | L   | 0.347      | -            | -                | -                | -         |    -0.27 | abr, CutzMeretz, desh, legy, Leomonster |
|           13 |     3022 | 2024-03-09 | Fluxo        | L   | 0.333      | -            | -                | -                | -         |    -0.43 | abr, CutzMeretz, desh, legy, Leomonster |
|           12 |     3072 | 2024-03-07 | Sharks       | L   | 0.320      | -            | -                | -                | -         |    -0.62 | abr, CutzMeretz, desh, legy, Leomonster |
|           11 |     3328 | 2024-02-24 | W7M          | L   | 0.242      | -            | -                | -                | -         |    -1.04 | abr, CutzMeretz, desh, legy, Leomonster |
|           10 |     3337 | 2024-02-24 | W7M          | L   | 0.242      | -            | -                | -                | -         |    -1.05 | abr, CutzMeretz, desh, legy, Leomonster |
|            9 |     3357 | 2024-02-23 | Galorys      | W   | 0.235      | 0.450        | 0.026 (0.003)    | 0.535 (0.057)    | 0 (0.000) |     6.61 | abr, CutzMeretz, desh, legy, Leomonster |
|            8 |     3358 | 2024-02-23 | Galorys      | L   | 0.235      | -            | -                | -                | -         |    -0.81 | abr, CutzMeretz, desh, legy, Leomonster |
|            7 |     3391 | 2024-02-21 | Sharks       | L   | 0.222      | -            | -                | -                | -         |    -0.45 | abr, CutzMeretz, desh, legy, Leomonster |
|            6 |     3498 | 2024-02-17 | Galorys      | L   | 0.194      | -            | -                | -                | -         |    -0.65 | abr, CutzMeretz, desh, legy, Leomonster |
|            5 |     3576 | 2024-02-14 | adalYamigos  | L   | 0.176      | -            | -                | -                | -         |    -2.02 | abr, CutzMeretz, desh, legy, Leomonster |
|            4 |     3585 | 2024-02-14 | adalYamigos  | L   | 0.175      | -            | -                | -                | -         |    -2.05 | abr, CutzMeretz, desh, legy, Leomonster |
|            3 |     3590 | 2024-02-14 | Solid        | L   | 0.175      | -            | -                | -                | -         |    -0.51 | abr, CutzMeretz, desh, legy, Leomonster |
|            2 |     3631 | 2024-02-13 | W7M          | L   | 0.167      | -            | -                | -                | -         |    -0.73 | abr, CutzMeretz, desh, legy, Leomonster |
|            1 |     3642 | 2024-02-12 | W7M          | L   | 0.161      | -            | -                | -                | -         |    -0.71 | abr, CutzMeretz, desh, legy, Leomonster |

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
