### Roster Details<br />
Team Name: LaChampionsLiga<br />
Roster: dott1, Hezz, lenci, nacho, pavv<br />
Global Rank: [200](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_17.md)<br />
Regional Rank: [59]( ../../standings_americas_2025_01_17.md)<br />
<br />
Final Rank Value:  590.9<br />
<br />
Final Rank Value (590.9) = Starting Rank Value (657.4) + Head To Head Adjustments (-66.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.329[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 657.4
- 400 + ( ( 0.130 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 657.4


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
|           16 |      106 | 2024-12-21 | GameHunters       | L   | 1.000      | -            | -                | -                | -         |   -10.98 | dott1, Hezz, lenci, nacho, pavv |
|           15 |      127 | 2024-12-19 | Solid             | L   | 1.000      | -            | -                | -                | -         |    -4.44 | dott1, Hezz, lenci, nacho, pavv |
|           14 |      142 | 2024-12-18 | Bad News Chickens | L   | 1.000      | -            | -                | -                | -         |   -11.39 | dott1, Hezz, lenci, nacho, pavv |
|           13 |      160 | 2024-12-16 | 2070              | W   | 0.987      | 0.143        | 0.003 (0.000)    | 0.220 (0.031)    | 0 (0.000) |    17.87 | dott1, Hezz, lenci, nacho, pavv |
|           12 |      646 | 2024-11-22 | BESTIA Academy    | W   | 0.825      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.71 | dott1, Hezz, lenci, pavv, rzk   |
|           11 |      697 | 2024-11-20 | JOGA DE TERNO     | L   | 0.813      | -            | -                | -                | -         |   -13.16 | dott1, Hezz, lenci, pavv, rzk   |
|           10 |      719 | 2024-11-18 | ShindeN           | L   | 0.800      | -            | -                | -                | -         |    -8.12 | dott1, Hezz, lenci, pavv, rzk   |
|            9 |     1067 | 2024-11-03 | 9z Academy        | L   | 0.700      | -            | -                | -                | -         |   -14.06 | dott1, Hezz, lenci, pavv, rzk   |
|            8 |     1123 | 2024-11-01 | BeBold            | W   | 0.685      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.42 | dott1, Hezz, lenci, pavv, rzk   |
|            7 |     1166 | 2024-10-30 | Yawara            | L   | 0.672      | -            | -                | -                | -         |    -9.52 | dott1, Hezz, lenci, pavv, rzk   |
|            6 |     1185 | 2024-10-29 | VELOX             | L   | 0.666      | -            | -                | -                | -         |   -13.55 | dott1, Hezz, lenci, pavv, rzk   |
|            5 |     1515 | 2024-10-11 | ShindeN           | L   | 0.549      | -            | -                | -                | -         |    -6.56 | dott1, Hezz, lenci, pavv, rzk   |
|            4 |     3567 | 2024-08-10 | Hawks             | L   | 0.134      | -            | -                | -                | -         |    -2.28 | castrz, dott1, Hezz, pavv, rzk  |
|            3 |     3868 | 2024-08-01 | BESTIA            | L   | 0.074      | -            | -                | -                | -         |    -0.22 | castrz, dott1, Hezz, pavv, rzk  |
|            2 |     4125 | 2024-07-25 | ODDIK             | L   | 0.027      | -            | -                | -                | -         |    -0.16 | castrz, dott1, Hezz, pavv, rzk  |
|            1 |     4197 | 2024-07-23 | RED Canids        | L   | 0.014      | -            | -                | -                | -         |    -0.04 | castrz, dott1, Hezz, pavv, rzk  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,041.85)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-11 |      0.549 | $3,600.00      | $1,974.80       |
| 2024-08-10 |      0.134 | $500.00        | $67.04          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
