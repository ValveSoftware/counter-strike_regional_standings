### Roster Details<br />
Team Name: LaChampionsLiga<br />
Roster: dott1, Hezz, lenci, nacho, pavv<br />
Global Rank: [199](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_20.md)<br />
Regional Rank: [58]( ../../standings_americas_2025_01_20.md)<br />
<br />
Final Rank Value:  591.9<br />
<br />
Final Rank Value (591.9) = Starting Rank Value (657.5) + Head To Head Adjustments (-65.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 657.5
- 400 + ( ( 0.130 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 657.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      115 | 2024-12-21 | GameHunters       | L   | 1.000      | -            | -                | -                | -         |   -11.04 | dott1, Hezz, lenci, nacho, pavv |
|           15 |      136 | 2024-12-19 | Solid             | L   | 0.993      | -            | -                | -                | -         |    -4.49 | dott1, Hezz, lenci, nacho, pavv |
|           14 |      151 | 2024-12-18 | Bad News Chickens | L   | 0.986      | -            | -                | -                | -         |   -11.31 | dott1, Hezz, lenci, nacho, pavv |
|           13 |      169 | 2024-12-16 | 2070              | W   | 0.974      | 0.143        | 0.003 (0.000)    | 0.222 (0.031)    | 0 (0.000) |    17.59 | dott1, Hezz, lenci, nacho, pavv |
|           12 |      655 | 2024-11-22 | BESTIA Academy    | W   | 0.812      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.60 | dott1, Hezz, lenci, pavv, rzk   |
|           11 |      706 | 2024-11-20 | JOGA DE TERNO     | L   | 0.799      | -            | -                | -                | -         |   -13.01 | dott1, Hezz, lenci, pavv, rzk   |
|           10 |      728 | 2024-11-18 | ShindeN           | L   | 0.786      | -            | -                | -                | -         |    -8.03 | dott1, Hezz, lenci, pavv, rzk   |
|            9 |     1076 | 2024-11-03 | 9z Academy        | L   | 0.686      | -            | -                | -                | -         |   -13.82 | dott1, Hezz, lenci, pavv, rzk   |
|            8 |     1132 | 2024-11-01 | BeBold            | W   | 0.672      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.32 | dott1, Hezz, lenci, pavv, rzk   |
|            7 |     1175 | 2024-10-30 | Yawara            | L   | 0.658      | -            | -                | -                | -         |    -9.33 | dott1, Hezz, lenci, pavv, rzk   |
|            6 |     1194 | 2024-10-29 | VELOX             | L   | 0.652      | -            | -                | -                | -         |   -13.30 | dott1, Hezz, lenci, pavv, rzk   |
|            5 |     1524 | 2024-10-11 | ShindeN           | L   | 0.535      | -            | -                | -                | -         |    -6.42 | dott1, Hezz, lenci, pavv, rzk   |
|            4 |     3576 | 2024-08-10 | Hawks             | L   | 0.121      | -            | -                | -                | -         |    -2.06 | castrz, dott1, Hezz, pavv, rzk  |
|            3 |     3877 | 2024-08-01 | BESTIA            | L   | 0.060      | -            | -                | -                | -         |    -0.18 | castrz, dott1, Hezz, pavv, rzk  |
|            2 |     4134 | 2024-07-25 | ODDIK             | L   | 0.014      | -            | -                | -                | -         |    -0.08 | castrz, dott1, Hezz, pavv, rzk  |
|            1 |     4206 | 2024-07-23 | RED Canids        | L   | 0.000      | -            | -                | -                | -         |     0.00 | castrz, dott1, Hezz, pavv, rzk  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,986.21)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-11 |      0.535 | $3,600.00      | $1,925.95       |
| 2024-08-10 |      0.121 | $500.00        | $60.26          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
