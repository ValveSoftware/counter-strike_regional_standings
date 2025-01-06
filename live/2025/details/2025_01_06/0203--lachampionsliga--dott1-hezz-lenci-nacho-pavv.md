### Roster Details<br />
Team Name: LaChampionsLiga<br />
Roster: dott1, Hezz, lenci, nacho, pavv<br />
Global Rank: [203](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_06.md)<br />
Regional Rank: [62]( ../../standings_americas_2025_01_06.md)<br />
<br />
Final Rank Value:  583.7<br />
<br />
Final Rank Value (583.7) = Starting Rank Value (655.3) + Head To Head Adjustments (-71.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.186[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 655.3
- 400 + ( ( 0.129 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 655.3


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
|           16 |       61 | 2024-12-21 | GameHunters       | L   | 1.000      | -            | -                | -                | -         |   -10.67 | dott1, Hezz, lenci, nacho, pavv |
|           15 |       82 | 2024-12-19 | Solid             | L   | 1.000      | -            | -                | -                | -         |    -4.16 | dott1, Hezz, lenci, nacho, pavv |
|           14 |       97 | 2024-12-18 | Bad News Chickens | L   | 1.000      | -            | -                | -                | -         |   -11.16 | dott1, Hezz, lenci, nacho, pavv |
|           13 |      115 | 2024-12-16 | 2070              | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.209 (0.030)    | 0 (0.000) |    18.38 | dott1, Hezz, lenci, nacho, pavv |
|           12 |      601 | 2024-11-22 | BESTIA Academy    | W   | 0.900      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.38 | dott1, Hezz, lenci, pavv, rzk   |
|           11 |      652 | 2024-11-20 | JOGA DE TERNO     | L   | 0.888      | -            | -                | -                | -         |   -13.97 | dott1, Hezz, lenci, pavv, rzk   |
|           10 |      674 | 2024-11-18 | ShindeN           | L   | 0.875      | -            | -                | -                | -         |    -8.63 | dott1, Hezz, lenci, pavv, rzk   |
|            9 |     1022 | 2024-11-03 | 9z Academy        | L   | 0.775      | -            | -                | -                | -         |   -15.31 | dott1, Hezz, lenci, pavv, rzk   |
|            8 |     1078 | 2024-11-01 | BeBold            | W   | 0.760      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.01 | dott1, Hezz, lenci, pavv, rzk   |
|            7 |     1121 | 2024-10-30 | Yawara            | L   | 0.747      | -            | -                | -                | -         |   -10.56 | dott1, Hezz, lenci, pavv, rzk   |
|            6 |     1140 | 2024-10-29 | VELOX             | L   | 0.740      | -            | -                | -                | -         |   -14.86 | dott1, Hezz, lenci, pavv, rzk   |
|            5 |     1470 | 2024-10-11 | ShindeN           | L   | 0.623      | -            | -                | -                | -         |    -7.39 | dott1, Hezz, lenci, pavv, rzk   |
|            4 |     3522 | 2024-08-10 | Hawks             | L   | 0.209      | -            | -                | -                | -         |    -3.45 | castrz, dott1, Hezz, pavv, rzk  |
|            3 |     3823 | 2024-08-01 | BESTIA            | L   | 0.149      | -            | -                | -                | -         |    -0.52 | castrz, dott1, Hezz, pavv, rzk  |
|            2 |     4080 | 2024-07-25 | ODDIK             | L   | 0.102      | -            | -                | -                | -         |    -0.53 | castrz, dott1, Hezz, pavv, rzk  |
|            1 |     4152 | 2024-07-23 | RED Canids        | L   | 0.088      | -            | -                | -                | -         |    -0.22 | castrz, dott1, Hezz, pavv, rzk  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,348.11)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-11 |      0.623 | $3,600.00      | $2,243.72       |
| 2024-08-10 |      0.209 | $500.00        | $104.39         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
