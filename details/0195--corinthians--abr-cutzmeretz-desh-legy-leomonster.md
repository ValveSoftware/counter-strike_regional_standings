### Roster Details<br />
Team Name: Corinthians<br />
Roster: abr, CutzMeretz, desh, legy, Leomonster<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [195](../standings_global.md)<br />
Regional Rank: [54]( ../standings_americas.md)<br />
Final Rank Value:  512.3<br />
<br />
Final Rank Value (512.3) = Starting Rank Value (513.6) + Head To Head Adjustments (-1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.216[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.6
- 400 + ( ( 0.056 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 513.6


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
|           26 |     1294 | 2024-05-29 | 9z Academy   | W   | 0.826      | 0.371        | 0.000 (0.000)    | 0.075 (0.023)    | 0 (0.000) |    12.88 | abr, CutzMeretz, desh, legy, Leomonster |
|           25 |     1310 | 2024-05-28 | Hype         | L   | 0.820      | -            | -                | -                | -         |    -2.79 | abr, CutzMeretz, desh, legy, Leomonster |
|           24 |     1511 | 2024-05-20 | BESTIA       | L   | 0.768      | -            | -                | -                | -         |    -1.39 | abr, CutzMeretz, desh, legy, Leomonster |
|           23 |     1687 | 2024-05-15 | Case         | L   | 0.734      | -            | -                | -                | -         |    -2.43 | abr, CutzMeretz, desh, legy, Leomonster |
|           22 |     1689 | 2024-05-15 | Case         | L   | 0.734      | -            | -                | -                | -         |    -2.49 | abr, CutzMeretz, desh, legy, Leomonster |
|           21 |     1738 | 2024-05-14 | RED Canids   | L   | 0.728      | -            | -                | -                | -         |    -0.69 | abr, CutzMeretz, desh, legy, Leomonster |
|           20 |     1742 | 2024-05-14 | RED Canids   | L   | 0.728      | -            | -                | -                | -         |    -0.69 | abr, CutzMeretz, desh, legy, Leomonster |
|           19 |     2750 | 2024-04-04 | Fluxo        | L   | 0.461      | -            | -                | -                | -         |    -0.60 | abr, CutzMeretz, desh, legy, Leomonster |
|           18 |     2756 | 2024-04-04 | Fluxo        | L   | 0.461      | -            | -                | -                | -         |    -0.61 | abr, CutzMeretz, desh, legy, Leomonster |
|           17 |     2927 | 2024-03-27 | 2GAME        | L   | 0.408      | -            | -                | -                | -         |    -3.50 | abr, CutzMeretz, desh, legy, Leomonster |
|           16 |     2930 | 2024-03-27 | 2GAME        | W   | 0.408      | 0.450        | 0.003 (0.001)    | 0.069 (0.013)    | 0 (0.000) |     9.54 | abr, CutzMeretz, desh, legy, Leomonster |
|           15 |     3201 | 2024-03-13 | MIBR Academy | L   | 0.314      | -            | -                | -                | -         |    -4.89 | abr, CutzMeretz, desh, legy, Leomonster |
|           14 |     3259 | 2024-03-11 | RED Canids   | L   | 0.300      | -            | -                | -                | -         |    -0.31 | abr, CutzMeretz, desh, legy, Leomonster |
|           13 |     3310 | 2024-03-09 | Fluxo        | L   | 0.286      | -            | -                | -                | -         |    -0.38 | abr, CutzMeretz, desh, legy, Leomonster |
|           12 |     3360 | 2024-03-07 | Sharks       | L   | 0.273      | -            | -                | -                | -         |    -0.57 | abr, CutzMeretz, desh, legy, Leomonster |
|           11 |     3616 | 2024-02-24 | W7M          | L   | 0.195      | -            | -                | -                | -         |    -0.80 | abr, CutzMeretz, desh, legy, Leomonster |
|           10 |     3625 | 2024-02-24 | W7M          | L   | 0.195      | -            | -                | -                | -         |    -0.81 | abr, CutzMeretz, desh, legy, Leomonster |
|            9 |     3645 | 2024-02-23 | Galorys      | W   | 0.188      | 0.450        | 0.021 (0.002)    | 0.592 (0.050)    | 0 (0.000) |     5.23 | abr, CutzMeretz, desh, legy, Leomonster |
|            8 |     3646 | 2024-02-23 | Galorys      | L   | 0.188      | -            | -                | -                | -         |    -0.70 | abr, CutzMeretz, desh, legy, Leomonster |
|            7 |     3679 | 2024-02-21 | Sharks       | L   | 0.175      | -            | -                | -                | -         |    -0.38 | abr, CutzMeretz, desh, legy, Leomonster |
|            6 |     3786 | 2024-02-17 | Galorys      | L   | 0.147      | -            | -                | -                | -         |    -0.54 | abr, CutzMeretz, desh, legy, Leomonster |
|            5 |     3864 | 2024-02-14 | adalYamigos  | L   | 0.129      | -            | -                | -                | -         |    -1.50 | abr, CutzMeretz, desh, legy, Leomonster |
|            4 |     3873 | 2024-02-14 | adalYamigos  | L   | 0.128      | -            | -                | -                | -         |    -1.51 | abr, CutzMeretz, desh, legy, Leomonster |
|            3 |     3878 | 2024-02-14 | Solid        | L   | 0.127      | -            | -                | -                | -         |    -0.40 | abr, CutzMeretz, desh, legy, Leomonster |
|            2 |     3919 | 2024-02-13 | W7M          | L   | 0.120      | -            | -                | -                | -         |    -0.50 | abr, CutzMeretz, desh, legy, Leomonster |
|            1 |     3930 | 2024-02-12 | W7M          | L   | 0.114      | -            | -                | -                | -         |    -0.48 | abr, CutzMeretz, desh, legy, Leomonster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
