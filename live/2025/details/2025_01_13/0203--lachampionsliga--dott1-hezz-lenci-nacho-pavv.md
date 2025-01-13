### Roster Details<br />
Team Name: LaChampionsLiga<br />
Roster: dott1, Hezz, lenci, nacho, pavv<br />
Global Rank: [203](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_13.md)<br />
Regional Rank: [62]( ../../standings_americas_2025_01_13.md)<br />
<br />
Final Rank Value:  589.4<br />
<br />
Final Rank Value (589.4) = Starting Rank Value (657.6) + Head To Head Adjustments (-68.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.329[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 657.6
- 400 + ( ( 0.130 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 657.6


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
|           16 |      102 | 2024-12-21 | GameHunters       | L   | 1.000      | -            | -                | -                | -         |   -10.85 | dott1, Hezz, lenci, nacho, pavv |
|           15 |      123 | 2024-12-19 | Solid             | L   | 1.000      | -            | -                | -                | -         |    -4.26 | dott1, Hezz, lenci, nacho, pavv |
|           14 |      138 | 2024-12-18 | Bad News Chickens | L   | 1.000      | -            | -                | -                | -         |   -11.26 | dott1, Hezz, lenci, nacho, pavv |
|           13 |      156 | 2024-12-16 | 2070              | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.216 (0.031)    | 0 (0.000) |    18.21 | dott1, Hezz, lenci, nacho, pavv |
|           12 |      642 | 2024-11-22 | BESTIA Academy    | W   | 0.854      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.94 | dott1, Hezz, lenci, pavv, rzk   |
|           11 |      693 | 2024-11-20 | JOGA DE TERNO     | L   | 0.841      | -            | -                | -                | -         |   -13.47 | dott1, Hezz, lenci, pavv, rzk   |
|           10 |      715 | 2024-11-18 | ShindeN           | L   | 0.828      | -            | -                | -                | -         |    -8.28 | dott1, Hezz, lenci, pavv, rzk   |
|            9 |     1063 | 2024-11-03 | 9z Academy        | L   | 0.728      | -            | -                | -                | -         |   -14.57 | dott1, Hezz, lenci, pavv, rzk   |
|            8 |     1119 | 2024-11-01 | BeBold            | W   | 0.714      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.62 | dott1, Hezz, lenci, pavv, rzk   |
|            7 |     1162 | 2024-10-30 | Yawara            | L   | 0.700      | -            | -                | -                | -         |    -9.92 | dott1, Hezz, lenci, pavv, rzk   |
|            6 |     1181 | 2024-10-29 | VELOX             | L   | 0.694      | -            | -                | -                | -         |   -14.07 | dott1, Hezz, lenci, pavv, rzk   |
|            5 |     1511 | 2024-10-11 | ShindeN           | L   | 0.577      | -            | -                | -                | -         |    -6.85 | dott1, Hezz, lenci, pavv, rzk   |
|            4 |     3563 | 2024-08-10 | Hawks             | L   | 0.163      | -            | -                | -                | -         |    -2.73 | castrz, dott1, Hezz, pavv, rzk  |
|            3 |     3864 | 2024-08-01 | BESTIA            | L   | 0.103      | -            | -                | -                | -         |    -0.30 | castrz, dott1, Hezz, pavv, rzk  |
|            2 |     4121 | 2024-07-25 | ODDIK             | L   | 0.056      | -            | -                | -                | -         |    -0.31 | castrz, dott1, Hezz, pavv, rzk  |
|            1 |     4193 | 2024-07-23 | RED Canids        | L   | 0.042      | -            | -                | -                | -         |    -0.11 | castrz, dott1, Hezz, pavv, rzk  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,158.57)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-11 |      0.577 | $3,600.00      | $2,077.29       |
| 2024-08-10 |      0.163 | $500.00        | $81.28          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
