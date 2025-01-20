### Roster Details<br />
Team Name: LaChampionsLiga<br />
Roster: dott1, Hezz, lenci, nacho, pavv<br />
Global Rank: [202](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_16.md)<br />
Regional Rank: [62]( ../../standings_americas_2025_01_16.md)<br />
<br />
Final Rank Value:  590.6<br />
<br />
Final Rank Value (590.6) = Starting Rank Value (652.9) + Head To Head Adjustments (-62.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.329[<sup>1</sup>](#table2)
- Bounty Collected: 0.178[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 652.9
- 400 + ( ( 0.128 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 652.9


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
|           16 |      129 | 2024-12-21 | GameHunters       | L   | 1.000      | -            | -                | -                | -         |   -10.42 | dott1, Hezz, lenci, nacho, pavv |
|           15 |      150 | 2024-12-19 | Solid             | L   | 1.000      | -            | -                | -                | -         |    -4.37 | dott1, Hezz, lenci, nacho, pavv |
|           14 |      165 | 2024-12-18 | Bad News Chickens | L   | 1.000      | -            | -                | -                | -         |   -10.31 | dott1, Hezz, lenci, nacho, pavv |
|           13 |      183 | 2024-12-16 | 2070              | W   | 0.994      | 0.143        | 0.002 (0.000)    | 0.268 (0.038)    | 0 (0.000) |    19.06 | dott1, Hezz, lenci, nacho, pavv |
|           12 |      669 | 2024-11-22 | BESTIA Academy    | W   | 0.831      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.83 | dott1, Hezz, lenci, pavv, rzk   |
|           11 |      720 | 2024-11-20 | JOGA DE TERNO     | L   | 0.819      | -            | -                | -                | -         |   -13.06 | dott1, Hezz, lenci, pavv, rzk   |
|           10 |      742 | 2024-11-18 | ShindeN           | L   | 0.806      | -            | -                | -                | -         |    -7.53 | dott1, Hezz, lenci, pavv, rzk   |
|            9 |     1090 | 2024-11-03 | 9z Academy        | L   | 0.706      | -            | -                | -                | -         |   -14.06 | dott1, Hezz, lenci, pavv, rzk   |
|            8 |     1146 | 2024-11-01 | BeBold            | W   | 0.691      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.54 | dott1, Hezz, lenci, pavv, rzk   |
|            7 |     1189 | 2024-10-30 | Yawara            | L   | 0.678      | -            | -                | -                | -         |    -9.58 | dott1, Hezz, lenci, pavv, rzk   |
|            6 |     1208 | 2024-10-29 | VELOX             | L   | 0.672      | -            | -                | -                | -         |   -13.54 | dott1, Hezz, lenci, pavv, rzk   |
|            5 |     1538 | 2024-10-11 | ShindeN           | L   | 0.555      | -            | -                | -                | -         |    -6.07 | dott1, Hezz, lenci, pavv, rzk   |
|            4 |     3590 | 2024-08-10 | Hawks             | L   | 0.140      | -            | -                | -                | -         |    -2.35 | castrz, dott1, Hezz, pavv, rzk  |
|            3 |     3891 | 2024-08-01 | BESTIA            | L   | 0.080      | -            | -                | -                | -         |    -0.23 | castrz, dott1, Hezz, pavv, rzk  |
|            2 |     4148 | 2024-07-25 | ODDIK             | L   | 0.033      | -            | -                | -                | -         |    -0.19 | castrz, dott1, Hezz, pavv, rzk  |
|            1 |     4220 | 2024-07-23 | RED Canids        | L   | 0.020      | -            | -                | -                | -         |    -0.05 | castrz, dott1, Hezz, pavv, rzk  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,066.88)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-11 |      0.555 | $3,600.00      | $1,996.79       |
| 2024-08-10 |      0.140 | $500.00        | $70.10          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
