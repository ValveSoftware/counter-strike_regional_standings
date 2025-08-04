### Roster Details<br />
Team Name: LaChampionsLiga<br />
Roster: AGL, dott1, Hezz, lenci, pavv<br />
Global Rank: [254](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [82]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  496.6<br />
<br />
Final Rank Value (496.6) = Starting Rank Value (498.2) + Head To Head Adjustments (-1.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 498.2
- 400 + ( ( 0.052 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 498.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |       79 | 2025-07-27 | 9z                | L   | 1.000      | -            | -                | -                | -         |    -2.43 | AGL, dott1, Hezz, lenci, pavv |
|           20 |      275 | 2025-07-16 | ex-W7M            | L   | 1.000      | -            | -                | -                | -         |   -10.28 | AGL, dott1, Hezz, lenci, pavv |
|           19 |      436 | 2025-07-09 | Yawara            | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.144 (0.021)    | 0 (0.000) |    20.59 | AGL, dott1, Hezz, lenci, pavv |
|           18 |      642 | 2025-06-18 | Dusty Roots       | L   | 0.887      | -            | -                | -                | -         |   -12.66 | AGL, dott1, Hezz, lenci, pavv |
|           17 |      678 | 2025-06-16 | Players           | L   | 0.873      | -            | -                | -                | -         |    -9.48 | AGL, dott1, Hezz, lenci, pavv |
|           16 |      735 | 2025-06-14 | Flamengo          | L   | 0.860      | -            | -                | -                | -         |    -5.37 | AGL, dott1, Hezz, lenci, pavv |
|           15 |     2416 | 2025-03-29 | SELVA             | L   | 0.349      | -            | -                | -                | -         |    -1.98 | dott1, Hezz, lenci, pavv, rzk |
|           14 |     2447 | 2025-03-29 | R2                | W   | 0.346      | 0.143        | 0.000 (0.000)    | 0.036 (0.002)    | 0 (0.000) |     4.84 | dott1, Hezz, lenci, pavv, rzk |
|           13 |     2490 | 2025-03-28 | Fluxo             | L   | 0.342      | -            | -                | -                | -         |    -0.50 | dott1, Hezz, lenci, pavv, rzk |
|           12 |     2565 | 2025-03-27 | Yawara            | W   | 0.334      | 0.143        | 0.003 (0.000)    | 0.144 (0.007)    | 0 (0.000) |     7.40 | dott1, Hezz, lenci, pavv, rzk |
|           11 |     3102 | 2025-03-09 | 2GAME             | L   | 0.214      | -            | -                | -                | -         |    -1.29 | dott1, Hezz, lenci, pavv, rzk |
|           10 |     3162 | 2025-03-08 | Flamengo          | L   | 0.208      | -            | -                | -                | -         |    -1.22 | dott1, Hezz, lenci, pavv, rzk |
|            9 |     3180 | 2025-03-08 | Fluxo             | L   | 0.207      | -            | -                | -                | -         |    -1.50 | dott1, Hezz, lenci, pavv, rzk |
|            8 |     3236 | 2025-03-07 | adalYamigos       | W   | 0.201      | 0.143        | 0.001 (0.000)    | 0.025 (0.001)    | 0 (0.000) |     4.18 | dott1, Hezz, lenci, pavv, rzk |
|            7 |     3280 | 2025-03-06 | GameHunters       | W   | 0.196      | 0.371        | 0.004 (0.000)    | 0.366 (0.027)    | 0 (0.000) |     5.16 | dott1, Hezz, lenci, pavv, rzk |
|            6 |     3326 | 2025-03-05 | Dusty Roots       | L   | 0.190      | -            | -                | -                | -         |    -2.82 | dott1, Hezz, lenci, pavv, rzk |
|            5 |     3409 | 2025-03-02 | Players           | W   | 0.167      | 0.371        | 0.001 (0.000)    | 0.213 (0.013)    | 0 (0.000) |     3.73 | dott1, Hezz, lenci, pavv, rzk |
|            4 |     3455 | 2025-02-28 | Bounty Hunters fe | W   | 0.155      | 0.371        | 0.001 (0.000)    | 0.055 (0.003)    | 0 (0.000) |     3.11 | dott1, Hezz, lenci, pavv, rzk |
|            3 |     3512 | 2025-02-26 | UNO MILLE         | L   | 0.142      | -            | -                | -                | -         |    -1.36 | dott1, Hezz, lenci, pavv, rzk |
|            2 |     4045 | 2025-02-08 | Legacy            | L   | 0.021      | -            | -                | -                | -         |    -0.01 | dott1, Hezz, lenci, pavv, rzk |
|            1 |     4095 | 2025-02-07 | Tropa do KinGui   | W   | 0.016      | 0.143        | 0.001 (0.000)    | 0.076 (0.000)    | 0 (0.000) |     0.33 | dott1, Hezz, lenci, pavv, rzk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
