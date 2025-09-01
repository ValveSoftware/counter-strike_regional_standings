### Roster Details<br />
Team Name: LaChampionsLiga<br />
Roster: AGL, dott1, Hezz, lenci, pavv<br />
Global Rank: [246](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_09_01.md)<br />
Regional Rank: [80]( ../../standings_americas_2025_09_01.md)<br />
<br />
Final Rank Value:  504.9<br />
<br />
Final Rank Value (504.9) = Starting Rank Value (503.6) + Head To Head Adjustments (1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 503.6
- 400 + ( ( 0.054 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 503.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      754 | 2025-07-27 | 9z          | L   | 0.961      | -            | -                | -                | -         |    -1.83 | AGL, dott1, Hezz, lenci, pavv |
|           15 |      965 | 2025-07-16 | ex-W7M      | L   | 0.888      | -            | -                | -                | -         |    -7.44 | AGL, dott1, Hezz, lenci, pavv |
|           14 |     1126 | 2025-07-09 | Yawara      | W   | 0.841      | 0.143        | 0.006 (0.001)    | 0.364 (0.044)    | 0 (0.000) |    19.75 | AGL, dott1, Hezz, lenci, pavv |
|           13 |     1332 | 2025-06-18 | Dusty Roots | L   | 0.701      | -            | -                | -                | -         |    -4.89 | AGL, dott1, Hezz, lenci, pavv |
|           12 |     1368 | 2025-06-16 | Players     | L   | 0.686      | -            | -                | -                | -         |    -6.68 | AGL, dott1, Hezz, lenci, pavv |
|           11 |     1425 | 2025-06-14 | Flamengo    | L   | 0.673      | -            | -                | -                | -         |    -2.94 | AGL, dott1, Hezz, lenci, pavv |
|           10 |     3106 | 2025-03-29 | SELVA       | L   | 0.162      | -            | -                | -                | -         |    -0.88 | dott1, Hezz, lenci, pavv, rzk |
|            9 |     3137 | 2025-03-29 | R2          | W   | 0.160      | 0.769        | 0.000 (0.000)    | 0.166 (0.020)    | 0 (0.000) |     2.62 | dott1, Hezz, lenci, pavv, rzk |
|            8 |     3180 | 2025-03-28 | Fluxo       | L   | 0.155      | -            | -                | -                | -         |    -0.16 | dott1, Hezz, lenci, pavv, rzk |
|            7 |     3255 | 2025-03-27 | Yawara      | W   | 0.148      | 0.769        | 0.006 (0.001)    | 0.364 (0.041)    | 0 (0.000) |     3.66 | dott1, Hezz, lenci, pavv, rzk |
|            6 |     3792 | 2025-03-09 | 2GAME       | L   | 0.027      | -            | -                | -                | -         |    -0.13 | dott1, Hezz, lenci, pavv, rzk |
|            5 |     3852 | 2025-03-08 | Flamengo    | L   | 0.021      | -            | -                | -                | -         |    -0.08 | dott1, Hezz, lenci, pavv, rzk |
|            4 |     3870 | 2025-03-08 | Fluxo       | L   | 0.020      | -            | -                | -                | -         |    -0.17 | dott1, Hezz, lenci, pavv, rzk |
|            3 |     3926 | 2025-03-07 | adalYamigos | W   | 0.014      | 0.769        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.28 | dott1, Hezz, lenci, pavv, rzk |
|            2 |     3970 | 2025-03-06 | GameHunters | W   | 0.009      | 0.371        | 0.003 (0.000)    | 0.549 (0.002)    | 0 (0.000) |     0.25 | dott1, Hezz, lenci, pavv, rzk |
|            1 |     4016 | 2025-03-05 | Dusty Roots | L   | 0.003      | -            | -                | -                | -         |    -0.02 | dott1, Hezz, lenci, pavv, rzk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
