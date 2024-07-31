### Roster Details<br />
Team Name: Corinthians<br />
Roster: abr, CutzMeretz, desh, legy, Leomonster<br />
Global Rank: [197](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [56]( ../standings_americas.md)<br />
<br />
Final Rank Value:  513.9<br />
<br />
Final Rank Value (513.9) = Starting Rank Value (514.6) + Head To Head Adjustments (-0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.216[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 514.6
- 400 + ( ( 0.055 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 514.6


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
|           26 |     1536 | 2024-05-29 | 9z Academy   | W   | 0.779      | 0.371        | 0.000 (0.000)    | 0.069 (0.020)    | 0 (0.000) |    12.12 | abr, CutzMeretz, desh, legy, Leomonster |
|           25 |     1552 | 2024-05-28 | Hype         | L   | 0.773      | -            | -                | -                | -         |    -2.68 | abr, CutzMeretz, desh, legy, Leomonster |
|           24 |     1753 | 2024-05-20 | BESTIA       | L   | 0.720      | -            | -                | -                | -         |    -1.39 | abr, CutzMeretz, desh, legy, Leomonster |
|           23 |     1929 | 2024-05-15 | Case         | L   | 0.687      | -            | -                | -                | -         |    -2.23 | abr, CutzMeretz, desh, legy, Leomonster |
|           22 |     1931 | 2024-05-15 | Case         | L   | 0.687      | -            | -                | -                | -         |    -2.28 | abr, CutzMeretz, desh, legy, Leomonster |
|           21 |     1980 | 2024-05-14 | RED Canids   | L   | 0.681      | -            | -                | -                | -         |    -0.73 | abr, CutzMeretz, desh, legy, Leomonster |
|           20 |     1984 | 2024-05-14 | RED Canids   | L   | 0.681      | -            | -                | -                | -         |    -0.74 | abr, CutzMeretz, desh, legy, Leomonster |
|           19 |     2992 | 2024-04-04 | Fluxo        | L   | 0.414      | -            | -                | -                | -         |    -0.62 | abr, CutzMeretz, desh, legy, Leomonster |
|           18 |     2998 | 2024-04-04 | Fluxo        | L   | 0.414      | -            | -                | -                | -         |    -0.62 | abr, CutzMeretz, desh, legy, Leomonster |
|           17 |     3169 | 2024-03-27 | 2GAME        | L   | 0.361      | -            | -                | -                | -         |    -3.20 | abr, CutzMeretz, desh, legy, Leomonster |
|           16 |     3172 | 2024-03-27 | 2GAME        | W   | 0.361      | 0.450        | 0.002 (0.000)    | 0.056 (0.009)    | 0 (0.000) |     8.32 | abr, CutzMeretz, desh, legy, Leomonster |
|           15 |     3443 | 2024-03-13 | MIBR Academy | L   | 0.267      | -            | -                | -                | -         |    -4.22 | abr, CutzMeretz, desh, legy, Leomonster |
|           14 |     3501 | 2024-03-11 | RED Canids   | L   | 0.253      | -            | -                | -                | -         |    -0.31 | abr, CutzMeretz, desh, legy, Leomonster |
|           13 |     3552 | 2024-03-09 | Fluxo        | L   | 0.239      | -            | -                | -                | -         |    -0.36 | abr, CutzMeretz, desh, legy, Leomonster |
|           12 |     3602 | 2024-03-07 | Sharks       | L   | 0.225      | -            | -                | -                | -         |    -0.49 | abr, CutzMeretz, desh, legy, Leomonster |
|           11 |     3858 | 2024-02-24 | W7M          | L   | 0.148      | -            | -                | -                | -         |    -0.63 | abr, CutzMeretz, desh, legy, Leomonster |
|           10 |     3867 | 2024-02-24 | W7M          | L   | 0.147      | -            | -                | -                | -         |    -0.63 | abr, CutzMeretz, desh, legy, Leomonster |
|            9 |     3887 | 2024-02-23 | Galorys      | W   | 0.141      | 0.450        | 0.030 (0.002)    | 0.552 (0.035)    | 0 (0.000) |     3.98 | abr, CutzMeretz, desh, legy, Leomonster |
|            8 |     3888 | 2024-02-23 | Galorys      | L   | 0.141      | -            | -                | -                | -         |    -0.46 | abr, CutzMeretz, desh, legy, Leomonster |
|            7 |     3921 | 2024-02-21 | Sharks       | L   | 0.128      | -            | -                | -                | -         |    -0.29 | abr, CutzMeretz, desh, legy, Leomonster |
|            6 |     4028 | 2024-02-17 | Galorys      | L   | 0.099      | -            | -                | -                | -         |    -0.32 | abr, CutzMeretz, desh, legy, Leomonster |
|            5 |     4106 | 2024-02-14 | adalYamigos  | L   | 0.081      | -            | -                | -                | -         |    -1.00 | abr, CutzMeretz, desh, legy, Leomonster |
|            4 |     4115 | 2024-02-14 | adalYamigos  | L   | 0.081      | -            | -                | -                | -         |    -1.00 | abr, CutzMeretz, desh, legy, Leomonster |
|            3 |     4120 | 2024-02-14 | Solid        | L   | 0.080      | -            | -                | -                | -         |    -0.26 | abr, CutzMeretz, desh, legy, Leomonster |
|            2 |     4161 | 2024-02-13 | W7M          | L   | 0.073      | -            | -                | -                | -         |    -0.31 | abr, CutzMeretz, desh, legy, Leomonster |
|            1 |     4172 | 2024-02-12 | W7M          | L   | 0.067      | -            | -                | -                | -         |    -0.29 | abr, CutzMeretz, desh, legy, Leomonster |

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
