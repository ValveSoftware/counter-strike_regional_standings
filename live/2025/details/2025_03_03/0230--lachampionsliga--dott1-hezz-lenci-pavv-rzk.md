### Roster Details<br />
Team Name: LaChampionsLiga<br />
Roster: dott1, Hezz, lenci, pavv, rzk<br />
Global Rank: [230](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_03.md)<br />
Regional Rank: [68]( ../../standings_americas_2025_03_03.md)<br />
<br />
Final Rank Value:  596.4<br />
<br />
Final Rank Value (596.4) = Starting Rank Value (634.8) + Head To Head Adjustments (-38.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.280[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.122<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 634.8
- 400 + ( ( 0.122 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 634.8


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
|           16 |      456 | 2025-02-08 | Legacy            | L   | 1.000      | -            | -                | -                | -         |    -4.68 | dott1, Hezz, lenci, pavv, rzk   |
|           15 |      506 | 2025-02-07 | Tropa do KinGui   | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.041 (0.006)    | 0 (0.000) |    10.29 | dott1, Hezz, lenci, pavv, rzk   |
|           14 |      808 | 2024-12-21 | GameHunters       | L   | 0.721      | -            | -                | -                | -         |    -9.39 | dott1, Hezz, lenci, nacho, pavv |
|           13 |      829 | 2024-12-19 | Solid             | L   | 0.708      | -            | -                | -                | -         |    -5.16 | dott1, Hezz, lenci, nacho, pavv |
|           12 |      845 | 2024-12-18 | Bad News Chickens | L   | 0.701      | -            | -                | -                | -         |   -10.01 | dott1, Hezz, lenci, nacho, pavv |
|           11 |      863 | 2024-12-16 | 2070              | W   | 0.689      | 0.143        | 0.001 (0.000)    | 0.176 (0.017)    | 0 (0.000) |    11.26 | dott1, Hezz, lenci, nacho, pavv |
|           10 |      901 | 2024-12-14 | Players           | W   | 0.675      | 0.143        | 0.008 (0.001)    | 0.582 (0.056)    | 0 (0.000) |    14.84 | dott1, Hezz, lenci, nacho, pavv |
|            9 |     1314 | 2024-11-23 | Patins da Ferrari | L   | 0.536      | -            | -                | -                | -         |   -10.48 | dott1, Hezz, lenci, pavv, rzk   |
|            8 |     1355 | 2024-11-22 | BESTIA Academy    | W   | 0.527      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.79 | dott1, Hezz, lenci, pavv, rzk   |
|            7 |     1406 | 2024-11-20 | JOGA DE TERNO     | L   | 0.514      | -            | -                | -                | -         |   -10.64 | dott1, Hezz, lenci, pavv, rzk   |
|            6 |     1429 | 2024-11-18 | ShindeN           | L   | 0.501      | -            | -                | -                | -         |    -6.33 | dott1, Hezz, lenci, pavv, rzk   |
|            5 |     1783 | 2024-11-03 | 9z Academy        | L   | 0.401      | -            | -                | -                | -         |    -8.27 | dott1, Hezz, lenci, pavv, rzk   |
|            4 |     1841 | 2024-11-01 | BeBold            | W   | 0.387      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.64 | dott1, Hezz, lenci, pavv, rzk   |
|            3 |     1884 | 2024-10-30 | Yawara            | L   | 0.373      | -            | -                | -                | -         |    -5.08 | dott1, Hezz, lenci, pavv, rzk   |
|            2 |     1903 | 2024-10-29 | VELOX             | L   | 0.367      | -            | -                | -                | -         |    -7.68 | dott1, Hezz, lenci, pavv, rzk   |
|            1 |     2236 | 2024-10-11 | ShindeN           | L   | 0.250      | -            | -                | -                | -         |    -3.45 | dott1, Hezz, lenci, pavv, rzk   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($899.13)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-11 |      0.250 | $3,600.00      | $899.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
