### Roster Details<br />
Team Name: Corinthians<br />
Roster: CutzMeretz, desh, Leomonster, roz, zede<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [147](../standings_global.md)<br />
Regional Rank: [41]( ../standings_americas.md)<br />
Final Rank Value:  726.6<br />
<br />
Final Rank Value (726.6) = Starting Rank Value (753.7) + Head To Head Adjustments (-27.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.301[<sup>2</sup>](#table1)
- Opponent Network: 0.071[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.174<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 753.7
- 400 + ( ( 0.174 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 753.7


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
|           37 |       84 | 2024-06-14 | inSanitY     | L   | 1.000      | -            | -                | -                | -         |    -7.81 | CutzMeretz, desh, Leomonster, roz, zede    |
|           36 |      248 | 2024-06-09 | Vikings KR   | W   | 1.000      | 0.450        | 0.008 (0.004)    | 0.239 (0.108)    | 0 (0.000) |    16.74 | CutzMeretz, desh, Leomonster, roz, zede    |
|           35 |      314 | 2024-06-08 | Sharks       | W   | 1.000      | 0.450        | 0.044 (0.020)    | 0.429 (0.193)    | 0 (0.000) |    28.12 | CutzMeretz, desh, Leomonster, roz, zede    |
|           34 |      344 | 2024-06-07 | paiN         | L   | 1.000      | -            | -                | -                | -         |    -0.42 | CutzMeretz, desh, Leomonster, roz, zede    |
|           33 |      420 | 2024-06-06 | ODDIK        | W   | 1.000      | 0.450        | 0.040 (0.018)    | 0.558 (0.251)    | 0 (0.000) |    25.34 | CutzMeretz, desh, Leomonster, roz, zede    |
|           32 |      708 | 2024-05-29 | 9z Academy   | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.036 (0.014)    | 0 (0.000) |     5.66 | abr, CutzMeretz, desh, legy, Leomonster    |
|           31 |      724 | 2024-05-28 | Hype         | L   | 1.000      | -            | -                | -                | -         |   -10.05 | abr, CutzMeretz, desh, legy, Leomonster    |
|           30 |      925 | 2024-05-20 | BESTIA       | L   | 1.000      | -            | -                | -                | -         |    -4.49 | abr, CutzMeretz, desh, legy, Leomonster    |
|           29 |     1101 | 2024-05-15 | Case         | L   | 0.977      | -            | -                | -                | -         |    -8.23 | abr, CutzMeretz, desh, legy, Leomonster    |
|           28 |     1103 | 2024-05-15 | Case         | L   | 0.976      | -            | -                | -                | -         |    -8.81 | abr, CutzMeretz, desh, legy, Leomonster    |
|           27 |     1152 | 2024-05-14 | RED Canids   | L   | 0.971      | -            | -                | -                | -         |    -2.07 | abr, CutzMeretz, desh, legy, Leomonster    |
|           26 |     1156 | 2024-05-14 | RED Canids   | L   | 0.970      | -            | -                | -                | -         |    -2.11 | abr, CutzMeretz, desh, legy, Leomonster    |
|           25 |     2164 | 2024-04-04 | Fluxo        | L   | 0.704      | -            | -                | -                | -         |    -2.33 | abr, CutzMeretz, desh, legy, Leomonster    |
|           24 |     2170 | 2024-04-04 | Fluxo        | L   | 0.704      | -            | -                | -                | -         |    -2.38 | abr, CutzMeretz, desh, legy, Leomonster    |
|           23 |     2342 | 2024-03-27 | ex-2GAME     | L   | 0.651      | -            | -                | -                | -         |    -9.78 | abr, CutzMeretz, desh, legy, Leomonster    |
|           22 |     2345 | 2024-03-27 | ex-2GAME     | W   | 0.651      | 0.450        | 0.003 (0.001)    | 0.139 (0.041)    | 0 (0.000) |    10.95 | abr, CutzMeretz, desh, legy, Leomonster    |
|           21 |     2616 | 2024-03-13 | MIBR Academy | L   | 0.557      | -            | -                | -                | -         |   -10.72 | abr, CutzMeretz, desh, legy, Leomonster    |
|           20 |     2674 | 2024-03-11 | RED Canids   | L   | 0.543      | -            | -                | -                | -         |    -1.32 | abr, CutzMeretz, desh, legy, Leomonster    |
|           19 |     2725 | 2024-03-09 | Fluxo        | L   | 0.528      | -            | -                | -                | -         |    -1.98 | abr, CutzMeretz, desh, legy, Leomonster    |
|           18 |     2775 | 2024-03-07 | Sharks       | L   | 0.515      | -            | -                | -                | -         |    -2.66 | abr, CutzMeretz, desh, legy, Leomonster    |
|           17 |     3031 | 2024-02-24 | W7M          | L   | 0.437      | -            | -                | -                | -         |    -4.80 | abr, CutzMeretz, desh, legy, Leomonster    |
|           16 |     3040 | 2024-02-24 | W7M          | L   | 0.437      | -            | -                | -                | -         |    -4.97 | abr, CutzMeretz, desh, legy, Leomonster    |
|           15 |     3060 | 2024-02-23 | Galorys      | W   | 0.431      | 0.450        | 0.023 (0.005)    | 0.517 (0.100)    | 0 (0.000) |     9.23 | abr, CutzMeretz, desh, legy, Leomonster    |
|           14 |     3061 | 2024-02-23 | Galorys      | L   | 0.430      | -            | -                | -                | -         |    -4.38 | abr, CutzMeretz, desh, legy, Leomonster    |
|           13 |     3094 | 2024-02-21 | Sharks       | L   | 0.418      | -            | -                | -                | -         |    -2.42 | abr, CutzMeretz, desh, legy, Leomonster    |
|           12 |     3201 | 2024-02-17 | Galorys      | L   | 0.389      | -            | -                | -                | -         |    -3.97 | abr, CutzMeretz, desh, legy, Leomonster    |
|           11 |     3279 | 2024-02-14 | adalYamigos  | L   | 0.371      | -            | -                | -                | -         |    -6.84 | abr, CutzMeretz, desh, legy, Leomonster    |
|           10 |     3288 | 2024-02-14 | adalYamigos  | L   | 0.371      | -            | -                | -                | -         |    -7.06 | abr, CutzMeretz, desh, legy, Leomonster    |
|            9 |     3293 | 2024-02-14 | Solid        | L   | 0.370      | -            | -                | -                | -         |    -3.54 | abr, CutzMeretz, desh, legy, Leomonster    |
|            8 |     3334 | 2024-02-13 | W7M          | L   | 0.362      | -            | -                | -                | -         |    -4.56 | abr, CutzMeretz, desh, legy, Leomonster    |
|            7 |     3345 | 2024-02-12 | W7M          | L   | 0.357      | -            | -                | -                | -         |    -4.63 | abr, CutzMeretz, desh, legy, Leomonster    |
|            6 |     4014 | 2024-01-15 | Imperial     | L   | 0.171      | -            | -                | -                | -         |    -0.06 | abr, Alisson, CutzMeretz, desh, Leomonster |
|            5 |     4048 | 2024-01-14 | Sharks       | L   | 0.163      | -            | -                | -                | -         |    -1.15 | doc, drg, gafolo, rdnzao, togs             |
|            4 |     4051 | 2024-01-14 | KRÜ          | W   | 0.163      | 0.143        | 0.024 (0.001)    | 0.150 (0.003)    | 0 (0.000) |     3.02 | atarax1a, laser, lenci, reversive, righi   |
|            3 |     4156 | 2024-01-11 | ex-2GAME     | L   | 0.143      | -            | -                | -                | -         |    -2.47 | BRNZ1K, dok, dzt, santos, vhz              |
|            2 |     4211 | 2024-01-09 | ODDIK        | L   | 0.130      | -            | -                | -                | -         |    -0.93 | abr, Alisson, CutzMeretz, desh, Leomonster |
|            1 |     4218 | 2024-01-09 | TIMACETA     | W   | 0.130      | 0.143        | 0.000 (0.000)    | 0.023 (0.000)    | 0 (0.000) |     0.84 | beg0d, bnc, cerolzin, farias, leleo        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,500.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
