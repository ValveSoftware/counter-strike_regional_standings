### Roster Details<br />
Team Name: adalYamigos<br />
Roster: delboNi, f4stzin, piriajr, shz, zqkS<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [136](../standings_global.md)<br />
Regional Rank: [37]( ../standings_americas.md)<br />
Final Rank Value:  745.8<br />
<br />
Final Rank Value (745.8) = Starting Rank Value (625.6) + Head To Head Adjustments (120.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.325[<sup>2</sup>](#table1)
- Opponent Network: 0.120[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.111<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 625.6
- 400 + ( ( 0.111 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 625.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |     1918 | 2024-04-12 | Case        | L   | 0.758      | -            | -                | -                | -         |    -8.30 | delboNi, f4stzin, piriajr, shz, zqkS |
|           34 |     1938 | 2024-04-11 | Imperial    | L   | 0.751      | -            | -                | -                | -         |    -0.34 | delboNi, f4stzin, piriajr, shz, zqkS |
|           33 |     2027 | 2024-04-09 | MIBR        | L   | 0.737      | -            | -                | -                | -         |    -0.24 | delboNi, f4stzin, piriajr, shz, zqkS |
|           32 |     2031 | 2024-04-09 | MIBR        | L   | 0.737      | -            | -                | -                | -         |    -0.24 | delboNi, f4stzin, piriajr, shz, zqkS |
|           31 |     2103 | 2024-04-07 | Case        | W   | 0.725      | 0.435        | 0.026 (0.008)    | 0.579 (0.182)    | 0 (0.000) |    15.16 | delboNi, f4stzin, piriajr, shz, zqkS |
|           30 |     2138 | 2024-04-05 | ex-2GAME    | L   | 0.710      | -            | -                | -                | -         |   -12.20 | delboNi, f4stzin, piriajr, shz, zqkS |
|           29 |     2139 | 2024-04-05 | ex-2GAME    | W   | 0.710      | 0.450        | -                | 0.139 (0.044)    | 0 (0.000) |    10.31 | delboNi, f4stzin, piriajr, shz, zqkS |
|           28 |     2158 | 2024-04-04 | BESTIA      | W   | 0.704      | 0.450        | 0.052 (0.016)    | 0.594 (0.188)    | 0 (0.000) |    17.82 | delboNi, f4stzin, piriajr, shz, zqkS |
|           27 |     2162 | 2024-04-04 | BESTIA      | L   | 0.704      | -            | -                | -                | -         |    -4.23 | delboNi, f4stzin, piriajr, shz, zqkS |
|           26 |     2650 | 2024-03-12 | Solid       | L   | 0.551      | -            | -                | -                | -         |    -5.33 | delboNi, f4stzin, piriajr, shz, zqkS |
|           25 |     2689 | 2024-03-10 | BESTIA      | W   | 0.538      | 0.435        | 0.052 (0.012)    | 0.594 (0.139)    | 0 (0.000) |    14.26 | delboNi, f4stzin, piriajr, shz, zqkS |
|           24 |     2743 | 2024-03-08 | Flamengo    | W   | 0.523      | -            | -                | -                | 0 (0.000) |     4.09 | delboNi, f4stzin, piriajr, shz, zqkS |
|           23 |     2823 | 2024-03-05 | Case        | W   | 0.504      | 0.450        | 0.026 (0.006)    | 0.579 (0.131)    | 0 (0.000) |    11.24 | delboNi, f4stzin, piriajr, shz, zqkS |
|           22 |     2825 | 2024-03-05 | Case        | W   | 0.504      | 0.450        | 0.026 (0.006)    | 0.579 (0.131)    | 0 (0.000) |    11.65 | delboNi, f4stzin, piriajr, shz, zqkS |
|           21 |     3093 | 2024-02-21 | Galorys     | W   | 0.418      | 0.450        | 0.023 (0.004)    | 0.517 (0.097)    | 0 (0.000) |     9.48 | delboNi, f4stzin, piriajr, shz, zqkS |
|           20 |     3097 | 2024-02-21 | Galorys     | W   | 0.417      | 0.450        | 0.023 (0.004)    | 0.517 (0.097)    | 0 (0.000) |     9.76 | delboNi, f4stzin, piriajr, shz, zqkS |
|           19 |     3173 | 2024-02-18 | Solid       | L   | 0.397      | -            | -                | -                | -         |    -2.78 | delboNi, f4stzin, piriajr, shz, zqkS |
|           18 |     3200 | 2024-02-17 | Imperial    | L   | 0.390      | -            | -                | -                | -         |    -0.09 | delboNi, f4stzin, piriajr, shz, zqkS |
|           17 |     3279 | 2024-02-14 | Corinthians | W   | 0.371      | -            | -                | -                | 0 (0.000) |     6.84 | delboNi, f4stzin, piriajr, shz, zqkS |
|           16 |     3288 | 2024-02-14 | Corinthians | W   | 0.371      | -            | -                | -                | -         |     7.06 | delboNi, f4stzin, piriajr, shz, zqkS |
|           15 |     3321 | 2024-02-13 | Solid       | W   | 0.364      | 0.450        | 0.051 (0.008)    | 0.566 (0.093)    | -         |     9.14 | delboNi, f4stzin, piriajr, shz, zqkS |
|           14 |     3325 | 2024-02-13 | Solid       | W   | 0.364      | 0.450        | 0.051 (0.008)    | 0.566 (0.093)    | -         |     9.32 | delboNi, f4stzin, piriajr, shz, zqkS |
|           13 |     3335 | 2024-02-13 | inSanitY    | W   | 0.362      | -            | -                | -                | -         |     2.35 | delboNi, f4stzin, piriajr, shz, zqkS |
|           12 |     3663 | 2024-01-23 | Sharks      | L   | 0.224      | -            | -                | -                | -         |    -0.87 | delboNi, f4stzin, piriajr, shz, zqkS |
|           11 |     3690 | 2024-01-22 | MIBR        | W   | 0.217      | 0.143        | 0.281 (0.009)    | -                | -         |     6.82 | delboNi, f4stzin, piriajr, shz, zqkS |
|           10 |     3748 | 2024-01-20 | Case        | L   | 0.205      | -            | -                | -                | -         |    -3.20 | delboNi, f4stzin, piriajr, shz, zqkS |
|            9 |     3795 | 2024-01-19 | 9z          | L   | 0.198      | -            | -                | -                | -         |    -0.02 | delboNi, f4stzin, piriajr, shz, zqkS |
|            8 |     3810 | 2024-01-19 | Fluxo       | L   | 0.197      | -            | -                | -                | -         |    -0.54 | delboNi, f4stzin, piriajr, shz, zqkS |
|            7 |     3977 | 2024-01-16 | RED Canids  | L   | 0.177      | -            | -                | -                | -         |    -0.28 | delboNi, f4stzin, piriajr, shz, zqkS |
|            6 |     3997 | 2024-01-16 | ODDIK       | W   | 0.176      | -            | -                | -                | -         |     4.82 | delboNi, f4stzin, piriajr, shz, zqkS |
|            5 |     4142 | 2024-01-11 | Galorys     | W   | 0.144      | -            | -                | -                | -         |     3.65 | delboNi, f4stzin, piriajr, shz, zqkS |
|            4 |     4144 | 2024-01-11 | TIMACETA    | W   | 0.144      | -            | -                | -                | -         |     1.58 | delboNi, f4stzin, piriajr, shz, zqkS |
|            3 |     4149 | 2024-01-11 | ex-2GAME    | W   | 0.143      | -            | -                | -                | -         |     2.84 | delboNi, f4stzin, piriajr, shz, zqkS |
|            2 |     4158 | 2024-01-11 | ex-LRV      | W   | 0.143      | -            | -                | -                | -         |     0.99 | delboNi, f4stzin, piriajr, shz, zqkS |
|            1 |     4216 | 2024-01-09 | Legacy      | L   | 0.130      | -            | -                | -                | -         |    -0.31 | delboNi, f4stzin, piriajr, shz, zqkS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
