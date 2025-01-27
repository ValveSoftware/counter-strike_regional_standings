### Roster Details<br />
Team Name: LaChampionsLiga<br />
Roster: dott1, Hezz, lenci, nacho, pavv<br />
Global Rank: [202](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_27.md)<br />
Regional Rank: [60]( ../../standings_americas_2025_01_27.md)<br />
<br />
Final Rank Value:  596.7<br />
<br />
Final Rank Value (596.7) = Starting Rank Value (652.4) + Head To Head Adjustments (-55.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 652.4
- 400 + ( ( 0.129 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 652.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      318 | 2024-12-21 | GameHunters    | L   | 0.955      | -            | -                | -                | -         |    -9.22 | dott1, Hezz, lenci, nacho, pavv |
|           13 |      339 | 2024-12-19 | Solid          | L   | 0.941      | -            | -                | -                | -         |    -4.33 | dott1, Hezz, lenci, nacho, pavv |
|           12 |      354 | 2024-12-18 | Elevate        | L   | 0.934      | -            | -                | -                | -         |    -9.15 | dott1, Hezz, lenci, nacho, pavv |
|           11 |      372 | 2024-12-16 | 2070           | W   | 0.922      | 0.143        | 0.003 (0.000)    | 0.230 (0.030)    | 0 (0.000) |    16.61 | dott1, Hezz, lenci, nacho, pavv |
|           10 |      858 | 2024-11-22 | BESTIA Academy | W   | 0.760      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.25 | dott1, Hezz, lenci, pavv, rzk   |
|            9 |      909 | 2024-11-20 | Floripa Stars  | L   | 0.747      | -            | -                | -                | -         |   -12.11 | dott1, Hezz, lenci, pavv, rzk   |
|            8 |      931 | 2024-11-18 | ShindeN        | L   | 0.734      | -            | -                | -                | -         |    -7.67 | dott1, Hezz, lenci, pavv, rzk   |
|            7 |     1279 | 2024-11-03 | 9z Academy     | L   | 0.634      | -            | -                | -                | -         |   -12.85 | dott1, Hezz, lenci, pavv, rzk   |
|            6 |     1335 | 2024-11-01 | BeBold         | W   | 0.620      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.01 | dott1, Hezz, lenci, pavv, rzk   |
|            5 |     1378 | 2024-10-30 | Yawara         | L   | 0.606      | -            | -                | -                | -         |    -6.85 | dott1, Hezz, lenci, pavv, rzk   |
|            4 |     1397 | 2024-10-29 | VELOX          | L   | 0.600      | -            | -                | -                | -         |   -12.26 | dott1, Hezz, lenci, pavv, rzk   |
|            3 |     1727 | 2024-10-11 | ShindeN        | L   | 0.483      | -            | -                | -                | -         |    -5.89 | dott1, Hezz, lenci, pavv, rzk   |
|            2 |     3779 | 2024-08-10 | Hawks          | L   | 0.068      | -            | -                | -                | -         |    -1.21 | castrz, dott1, Hezz, pavv, rzk  |
|            1 |     4080 | 2024-08-01 | BESTIA         | L   | 0.008      | -            | -                | -                | -         |    -0.02 | castrz, dott1, Hezz, pavv, rzk  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,772.58)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-11 |      0.483 | $3,600.00      | $1,738.38       |
| 2024-08-10 |      0.068 | $500.00        | $34.20          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
