### Roster Details<br />
Team Name: Procyon<br />
Roster: AGL, dott1, Hezz, lenci, pavv<br />
Global Rank: [141](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [32]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  790.4<br />
<br />
Final Rank Value (790.4) = Starting Rank Value (813.5) + Head To Head Adjustments (-23.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.270[<sup>1</sup>](#table2)
- Bounty Collected: 0.322[<sup>2</sup>](#table1)
- Opponent Network: 0.126[<sup>2</sup>](#table1)
- LAN Wins: 0.151[<sup>2</sup>](#table1)

The average of these factors is 0.217<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 813.5
- 400 + ( ( 0.217 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 813.5


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
|           32 |      351 | 2025-11-13 | BESTIA            | L   | 1.000      | -            | -                | -                | -         |    -3.92 | AGL, dott1, Hezz, lenci, pavv |
|           31 |      421 | 2025-11-11 | FURIA fe          | W   | 1.000      | 0.371        | 0.013 (0.005)    | 0.304 (0.113)    | 0 (0.000) |    16.99 | AGL, dott1, Hezz, lenci, pavv |
|           30 |      476 | 2025-11-09 | Vasco             | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.231 (0.086)    | 0 (0.000) |     8.11 | AGL, dott1, Hezz, lenci, pavv |
|           29 |      559 | 2025-11-07 | Prison Breakers   | L   | 1.000      | -            | -                | -                | -         |   -25.13 | AGL, dott1, Hezz, lenci, pavv |
|           28 |      681 | 2025-11-05 | Bounty Hunters    | L   | 1.000      | -            | -                | -                | -         |    -9.49 | AGL, dott1, Hezz, lenci, pavv |
|           27 |      721 | 2025-11-04 | Fuego             | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.345 (0.128)    | 0 (0.000) |    10.39 | AGL, dott1, Hezz, lenci, pavv |
|           26 |      967 | 2025-10-26 | Galorys           | L   | 0.962      | -            | -                | -                | -         |   -10.10 | AGL, dott1, Hezz, lenci, pavv |
|           25 |     1023 | 2025-10-25 | Crashers          | W   | 0.955      | 0.363        | 0.000 (0.000)    | 0.296 (0.103)    | 0 (0.000) |     6.99 | AGL, dott1, Hezz, lenci, pavv |
|           24 |     1090 | 2025-10-24 | BESTIA            | L   | 0.948      | -            | -                | -                | -         |    -2.80 | AGL, dott1, Hezz, lenci, pavv |
|           23 |     1138 | 2025-10-23 | Four Magic        | W   | 0.941      | -            | -                | -                | 0 (0.000) |     6.55 | AGL, dott1, Hezz, lenci, pavv |
|           22 |     1370 | 2025-10-14 | ShindeN           | L   | 0.882      | -            | -                | -                | -         |    -7.65 | AGL, dott1, Hezz, lenci, pavv |
|           21 |     1413 | 2025-10-12 | MIBR Academy      | L   | 0.867      | -            | -                | -                | -         |   -23.01 | AGL, dott1, Hezz, lenci, pavv |
|           20 |     1482 | 2025-10-10 | JERSA             | W   | 0.853      | -            | -                | -                | 0 (0.000) |     2.62 | AGL, dott1, Hezz, lenci, pavv |
|           19 |     1500 | 2025-10-09 | Sharks            | W   | 0.848      | 0.363        | 0.081 (0.025)    | 0.626 (0.193)    | 0 (0.000) |    24.57 | AGL, dott1, Hezz, lenci, pavv |
|           18 |     1550 | 2025-10-08 | Fuego             | W   | 0.842      | 0.363        | -                | 0.345 (0.105)    | 0 (0.000) |     8.05 | AGL, dott1, Hezz, lenci, pavv |
|           17 |     1572 | 2025-10-08 | Crashers          | L   | 0.840      | -            | -                | -                | -         |   -20.76 | AGL, dott1, Hezz, lenci, pavv |
|           16 |     1599 | 2025-10-07 | Galorys           | W   | 0.835      | 0.363        | 0.004 (0.001)    | 0.625 (0.189)    | -         |    18.78 | AGL, dott1, Hezz, lenci, pavv |
|           15 |     1672 | 2025-10-06 | Yawara            | L   | 0.827      | -            | -                | -                | -         |   -11.04 | AGL, dott1, Hezz, lenci, pavv |
|           14 |     1718 | 2025-10-05 | GameHunters       | L   | 0.822      | -            | -                | -                | -         |   -16.81 | AGL, dott1, Hezz, lenci, pavv |
|           13 |     2153 | 2025-09-25 | Dusty Roots       | L   | 0.755      | -            | -                | -                | -         |    -7.17 | AGL, dott1, Hezz, lenci, pavv |
|           12 |     2193 | 2025-09-24 | Dusty Roots       | W   | 0.748      | 0.314        | 0.012 (0.003)    | 0.487 (0.114)    | 1 (0.748) |    16.33 | AGL, dott1, Hezz, lenci, pavv |
|           11 |     2205 | 2025-09-24 | 9z                | W   | 0.747      | 0.314        | 0.088 (0.021)    | 0.664 (0.156)    | 1 (0.747) |    21.92 | AGL, dott1, Hezz, lenci, pavv |
|           10 |     2665 | 2025-09-10 | Fuego             | L   | 0.655      | -            | -                | -                | -         |   -15.29 | AGL, dott1, Hezz, lenci, pavv |
|            9 |     2784 | 2025-09-08 | MIBR fe           | W   | 0.640      | 0.371        | 0.102 (0.024)    | 0.310 (0.074)    | -         |    16.99 | AGL, dott1, Hezz, lenci, pavv |
|            8 |     2849 | 2025-09-06 | Players           | L   | 0.626      | -            | -                | -                | -         |   -16.52 | AGL, dott1, Hezz, lenci, pavv |
|            7 |     2882 | 2025-09-04 | KRÜ               | L   | 0.615      | -            | -                | -                | -         |   -10.59 | AGL, dott1, Hezz, lenci, pavv |
|            6 |     3807 | 2025-07-27 | 9z                | L   | 0.354      | -            | -                | -                | -         |    -0.89 | AGL, dott1, Hezz, lenci, pavv |
|            5 |     4018 | 2025-07-16 | Gaimin Gladiators | L   | 0.280      | -            | -                | -                | -         |    -1.63 | AGL, dott1, Hezz, lenci, pavv |
|            4 |     4179 | 2025-07-09 | Yawara            | W   | 0.234      | 0.525        | 0.004 (0.000)    | -                | -         |     4.24 | AGL, dott1, Hezz, lenci, pavv |
|            3 |     4385 | 2025-06-18 | Dusty Roots       | L   | 0.094      | -            | -                | -                | -         |    -0.84 | AGL, dott1, Hezz, lenci, pavv |
|            2 |     4421 | 2025-06-16 | Players           | L   | 0.079      | -            | -                | -                | -         |    -1.73 | AGL, dott1, Hezz, lenci, pavv |
|            1 |     4478 | 2025-06-14 | Keyd Stars        | L   | 0.066      | -            | -                | -                | -         |    -0.33 | AGL, dott1, Hezz, lenci, pavv |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,133.04)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-25 |      0.755 | $1,500.00      | $1,133.04       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
