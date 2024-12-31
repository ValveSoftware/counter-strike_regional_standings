### Roster Details<br />
Team Name: LaChampionsLiga<br />
Roster: dott1, Hezz, lenci, nacho, pavv<br />
Global Rank: [205](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_31.md)<br />
Regional Rank: [63]( ../../standings_americas_2024_12_31.md)<br />
<br />
Final Rank Value:  575.8<br />
<br />
Final Rank Value (575.8) = Starting Rank Value (650.4) + Head To Head Adjustments (-74.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.185[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 650.4
- 400 + ( ( 0.128 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 650.4


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
|           16 |       46 | 2024-12-21 | GameHunters       | L   | 1.000      | -            | -                | -                | -         |   -10.40 | dott1, Hezz, lenci, nacho, pavv |
|           15 |       67 | 2024-12-19 | Solid             | L   | 1.000      | -            | -                | -                | -         |    -3.84 | dott1, Hezz, lenci, nacho, pavv |
|           14 |       82 | 2024-12-18 | Bad News Chickens | L   | 1.000      | -            | -                | -                | -         |   -10.90 | dott1, Hezz, lenci, nacho, pavv |
|           13 |      100 | 2024-12-16 | 2070              | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.211 (0.030)    | 0 (0.000) |    18.59 | dott1, Hezz, lenci, nacho, pavv |
|           12 |      586 | 2024-11-22 | BESTIA Academy    | W   | 0.953      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.94 | dott1, Hezz, lenci, pavv, rzk   |
|           11 |      637 | 2024-11-20 | JOGA DE TERNO     | L   | 0.940      | -            | -                | -                | -         |   -14.53 | dott1, Hezz, lenci, pavv, rzk   |
|           10 |      659 | 2024-11-18 | ShindeN           | L   | 0.927      | -            | -                | -                | -         |    -8.90 | dott1, Hezz, lenci, pavv, rzk   |
|            9 |     1007 | 2024-11-03 | 9z Academy        | L   | 0.827      | -            | -                | -                | -         |   -16.13 | dott1, Hezz, lenci, pavv, rzk   |
|            8 |     1063 | 2024-11-01 | BeBold            | W   | 0.813      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.52 | dott1, Hezz, lenci, pavv, rzk   |
|            7 |     1106 | 2024-10-30 | Yawara            | L   | 0.799      | -            | -                | -                | -         |   -11.28 | dott1, Hezz, lenci, pavv, rzk   |
|            6 |     1125 | 2024-10-29 | VELOX             | L   | 0.793      | -            | -                | -                | -         |   -15.67 | dott1, Hezz, lenci, pavv, rzk   |
|            5 |     1455 | 2024-10-11 | ShindeN           | L   | 0.676      | -            | -                | -                | -         |    -7.91 | dott1, Hezz, lenci, pavv, rzk   |
|            4 |     3507 | 2024-08-10 | Hawks             | L   | 0.261      | -            | -                | -                | -         |    -4.27 | castrz, dott1, Hezz, pavv, rzk  |
|            3 |     3808 | 2024-08-01 | BESTIA            | L   | 0.201      | -            | -                | -                | -         |    -0.69 | castrz, dott1, Hezz, pavv, rzk  |
|            2 |     4065 | 2024-07-25 | ODDIK             | L   | 0.155      | -            | -                | -                | -         |    -0.74 | castrz, dott1, Hezz, pavv, rzk  |
|            1 |     4137 | 2024-07-23 | RED Canids        | L   | 0.141      | -            | -                | -                | -         |    -0.32 | castrz, dott1, Hezz, pavv, rzk  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,563.77)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-11 |      0.676 | $3,600.00      | $2,433.08       |
| 2024-08-10 |      0.261 | $500.00        | $130.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
