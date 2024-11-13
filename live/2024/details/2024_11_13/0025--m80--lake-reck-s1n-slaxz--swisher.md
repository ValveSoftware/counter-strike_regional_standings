### Roster Details<br />
Team Name: M80<br />
Roster: Lake, reck, s1n, slaxz-, Swisher<br />
Global Rank: [25](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_11_13.md)<br />
Regional Rank: [6]( ../../standings_americas_2024_11_13.md)<br />
<br />
Final Rank Value:  1255.2<br />
<br />
Final Rank Value (1255.2) = Starting Rank Value (1356.0) + Head To Head Adjustments (-100.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.556[<sup>1</sup>](#table2)
- Bounty Collected: 0.442[<sup>2</sup>](#table1)
- Opponent Network: 0.269[<sup>2</sup>](#table1)
- LAN Wins: 0.648[<sup>2</sup>](#table1)

The average of these factors is 0.479<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1356.0
- 400 + ( ( 0.479 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 1356.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           70 |       30 | 2024-11-12 | Legacy           | W   | 1.000      | -            | -                | -                | 1 (1.000) |    11.82 | Lake, reck, s1n, slaxz-, Swisher    |
|           69 |       44 | 2024-11-12 | RED Canids       | W   | 1.000      | -            | -                | -                | 1 (1.000) |    10.40 | Lake, reck, s1n, slaxz-, Swisher    |
|           68 |       62 | 2024-11-11 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -25.77 | Lake, reck, s1n, slaxz-, Swisher    |
|           67 |      408 | 2024-10-25 | BESTIA           | L   | 1.000      | -            | -                | -                | -         |   -19.17 | Lake, reck, s1n, slaxz-, Swisher    |
|           66 |      428 | 2024-10-24 | Aurora           | W   | 1.000      | 0.477        | 0.095 (0.045)    | 0.457 (0.218)    | 0 (0.000) |     7.36 | Lake, reck, s1n, slaxz-, Swisher    |
|           65 |      431 | 2024-10-24 | BESTIA           | L   | 1.000      | -            | -                | -                | -         |   -20.12 | Lake, reck, s1n, slaxz-, Swisher    |
|           64 |      469 | 2024-10-20 | NRG              | W   | 1.000      | 0.477        | 0.051 (0.024)    | 0.453 (0.216)    | 0 (0.000) |     7.90 | Lake, reck, s1n, slaxz-, Swisher    |
|           63 |      549 | 2024-10-17 | Legacy           | W   | 1.000      | 0.477        | 0.052 (0.025)    | 0.667 (0.318)    | 0 (0.000) |    12.13 | Lake, reck, s1n, slaxz-, Swisher    |
|           62 |      580 | 2024-10-16 | NRG              | W   | 1.000      | 0.477        | 0.051 (0.024)    | 0.453 (0.216)    | -         |     7.08 | Lake, reck, s1n, slaxz-, Swisher    |
|           61 |      689 | 2024-10-09 | BOSS             | W   | 0.969      | -            | -                | -                | -         |     4.86 | Lake, reck, s1n, slaxz-, Swisher    |
|           60 |      695 | 2024-10-09 | BOSS             | L   | 0.969      | -            | -                | -                | -         |   -26.17 | Lake, reck, s1n, slaxz-, Swisher    |
|           59 |      728 | 2024-10-08 | Legacy           | W   | 0.962      | 0.477        | 0.052 (0.024)    | 0.667 (0.306)    | -         |    11.32 | Lake, reck, s1n, slaxz-, Swisher    |
|           58 |      735 | 2024-10-08 | Legacy           | L   | 0.962      | -            | -                | -                | -         |   -19.35 | Lake, reck, s1n, slaxz-, Swisher    |
|           57 |      826 | 2024-10-05 | Wildcard         | L   | 0.940      | -            | -                | -                | -         |   -17.99 | Lake, reck, s1n, slaxz-, Swisher    |
|           56 |      860 | 2024-10-04 | BIG              | L   | 0.934      | -            | -                | -                | -         |   -14.61 | Lake, reck, s1n, slaxz-, Swisher    |
|           55 |      864 | 2024-10-04 | Wildcard         | W   | 0.934      | 0.500        | 0.068 (0.032)    | 0.549 (0.256)    | 1 (0.934) |    10.47 | Lake, reck, s1n, slaxz-, Swisher    |
|           54 |      964 | 2024-10-01 | Party Astronauts | W   | 0.916      | -            | -                | -                | -         |     3.02 | Lake, reck, s1n, slaxz-, Swisher    |
|           53 |      969 | 2024-10-01 | Party Astronauts | L   | 0.915      | -            | -                | -                | -         |   -26.20 | Lake, reck, s1n, slaxz-, Swisher    |
|           52 |      974 | 2024-10-01 | Nouns            | W   | 0.915      | 0.477        | -                | 0.553 (0.241)    | -         |     5.15 | Lake, reck, s1n, slaxz-, Swisher    |
|           51 |      978 | 2024-10-01 | Nouns            | L   | 0.915      | -            | -                | -                | -         |   -24.18 | Lake, reck, s1n, slaxz-, Swisher    |
|           50 |     1012 | 2024-09-30 | Revenge Nation   | W   | 0.908      | -            | -                | -                | -         |     0.74 | Lake, reck, s1n, slaxz-, Swisher    |
|           49 |     1014 | 2024-09-30 | Revenge Nation   | W   | 0.908      | -            | -                | -                | -         |     0.75 | Lake, reck, s1n, slaxz-, Swisher    |
|           48 |     1061 | 2024-09-28 | Take Flyte       | W   | 0.896      | -            | -                | -                | -         |     0.82 | Lake, reck, s1n, slaxz-, Swisher    |
|           47 |     1062 | 2024-09-28 | Take Flyte       | W   | 0.895      | -            | -                | -                | -         |     0.83 | Lake, reck, s1n, slaxz-, Swisher    |
|           46 |     1144 | 2024-09-26 | timbermen        | W   | 0.882      | -            | -                | -                | -         |     1.92 | Lake, reck, s1n, slaxz-, Swisher    |
|           45 |     1146 | 2024-09-26 | timbermen        | W   | 0.882      | -            | -                | -                | -         |     1.95 | Lake, reck, s1n, slaxz-, Swisher    |
|           44 |     1192 | 2024-09-25 | NRG              | W   | 0.876      | -            | -                | -                | -         |     6.18 | Lake, reck, s1n, slaxz-, Swisher    |
|           43 |     1197 | 2024-09-25 | NRG              | L   | 0.875      | -            | -                | -                | -         |   -21.91 | Lake, reck, s1n, slaxz-, Swisher    |
|           42 |     1424 | 2024-09-19 | MIBR             | L   | 0.833      | -            | -                | -                | -         |   -10.56 | Lake, reck, s1n, slaxz-, Swisher    |
|           41 |     1558 | 2024-09-14 | Imperial         | W   | 0.800      | 0.889        | 0.120 (0.085)    | 0.564 (0.401)    | 1 (0.800) |     8.12 | Lake, reck, s1n, slaxz-, Swisher    |
|           40 |     1656 | 2024-09-11 | fnatic           | W   | 0.781      | 0.889        | 0.196 (0.136)    | 0.419 (0.291)    | 1 (0.781) |     8.36 | Lake, reck, s1n, slaxz-, Swisher    |
|           39 |     1691 | 2024-09-10 | Complexity       | W   | 0.774      | 0.889        | 0.137 (0.094)    | 0.336 (0.231)    | 1 (0.774) |    16.41 | Lake, reck, s1n, slaxz-, Swisher    |
|           38 |     2324 | 2024-08-22 | Falcons          | L   | 0.647      | -            | -                | -                | -         |   -13.14 | Lake, reck, s1n, slaxz-, Swisher    |
|           37 |     2488 | 2024-08-18 | Wildcard         | L   | 0.621      | -            | -                | -                | -         |   -13.48 | Lake, reck, s1n, slaxz-, Swisher    |
|           36 |     2503 | 2024-08-17 | undefined        | W   | 0.615      | -            | -                | -                | -         |     0.53 | Lake, reck, s1n, slaxz-, Swisher    |
|           35 |     2612 | 2024-08-13 | InControl        | W   | 0.588      | -            | -                | -                | -         |     0.38 | Lake, reck, s1n, slaxz-, Swisher    |
|           34 |     2653 | 2024-08-12 | Mythic           | W   | 0.582      | -            | -                | -                | -         |     0.45 | Lake, reck, s1n, slaxz-, Swisher    |
|           33 |     2656 | 2024-08-12 | Mythic           | W   | 0.582      | -            | -                | -                | -         |     0.46 | Lake, reck, s1n, slaxz-, Swisher    |
|           32 |     2793 | 2024-08-07 | LAG              | W   | 0.549      | -            | -                | -                | -         |     0.51 | Lake, reck, s1n, slaxz-, Swisher    |
|           31 |     2795 | 2024-08-07 | LAG              | W   | 0.549      | -            | -                | -                | -         |     0.51 | Lake, reck, s1n, slaxz-, Swisher    |
|           30 |     2847 | 2024-08-06 | FLUFFY AIMERS    | W   | 0.542      | -            | -                | -                | -         |     0.64 | Lake, reck, s1n, slaxz-, Swisher    |
|           29 |     2850 | 2024-08-06 | FLUFFY AIMERS    | W   | 0.542      | -            | -                | -                | -         |     0.64 | Lake, reck, s1n, slaxz-, Swisher    |
|           28 |     3054 | 2024-07-31 | Limitless        | W   | 0.502      | -            | -                | -                | -         |     0.56 | Lake, reck, s1n, slaxz-, Swisher    |
|           27 |     3060 | 2024-07-31 | Limitless        | W   | 0.502      | -            | -                | -                | -         |     0.57 | Lake, reck, s1n, slaxz-, Swisher    |
|           26 |     3104 | 2024-07-30 | E-Xolos LAZER    | W   | 0.496      | -            | -                | -                | -         |     0.57 | Lake, reck, s1n, slaxz-, Swisher    |
|           25 |     3109 | 2024-07-30 | E-Xolos LAZER    | W   | 0.495      | -            | -                | -                | -         |     0.57 | Lake, reck, s1n, slaxz-, Swisher    |
|           24 |     3529 | 2024-07-18 | The MongolZ      | L   | 0.413      | -            | -                | -                | -         |    -0.78 | Lake, reck, s1n, slaxz-, Swisher    |
|           23 |     3542 | 2024-07-18 | Complexity       | W   | 0.412      | 1.000        | 0.137 (0.056)    | -                | 1 (0.412) |     8.77 | Lake, reck, s1n, slaxz-, Swisher    |
|           22 |     3603 | 2024-07-17 | Vitality         | L   | 0.406      | -            | -                | -                | -         |    -0.71 | Lake, reck, s1n, slaxz-, Swisher    |
|           21 |     4124 | 2024-06-09 | Wildcard         | W   | 0.156      | -            | -                | -                | -         |     1.62 | malbsMd, reck, s1n, slaxz-, Swisher |
|           20 |     4138 | 2024-06-09 | NRG              | L   | 0.154      | -            | -                | -                | -         |    -4.47 | malbsMd, reck, s1n, slaxz-, Swisher |
|           19 |     4191 | 2024-06-08 | Legacy           | W   | 0.148      | -            | -                | -                | -         |     0.66 | malbsMd, reck, s1n, slaxz-, Swisher |
|           18 |     4298 | 2024-06-06 | Wildcard         | W   | 0.136      | -            | -                | -                | -         |     1.42 | malbsMd, reck, s1n, slaxz-, Swisher |
|           17 |     4318 | 2024-06-06 | Wildcard         | W   | 0.134      | -            | -                | -                | -         |     1.44 | malbsMd, reck, s1n, slaxz-, Swisher |
|           16 |     4328 | 2024-06-06 | FLUFFY AIMERS    | W   | 0.133      | -            | -                | -                | -         |     0.18 | malbsMd, reck, s1n, slaxz-, Swisher |
|           15 |     4368 | 2024-06-05 | Nouns            | W   | 0.129      | -            | -                | -                | -         |     0.59 | malbsMd, reck, s1n, slaxz-, Swisher |
|           14 |     4625 | 2024-05-28 | HEROIC           | L   | 0.073      | -            | -                | -                | -         |    -0.25 | malbsMd, reck, s1n, slaxz-, Swisher |
|           13 |     4643 | 2024-05-27 | FaZe             | L   | 0.067      | -            | -                | -                | -         |    -0.38 | malbsMd, reck, s1n, slaxz-, Swisher |
|           12 |     4698 | 2024-05-24 | Nouns            | W   | 0.049      | -            | -                | -                | -         |     0.22 | malbsMd, reck, s1n, slaxz-, Swisher |
|           11 |     4713 | 2024-05-23 | Wildcard         | W   | 0.041      | -            | -                | -                | -         |     0.45 | malbsMd, reck, s1n, slaxz-, Swisher |
|           10 |     4738 | 2024-05-22 | Party Astronauts | L   | 0.035      | -            | -                | -                | -         |    -1.04 | malbsMd, reck, s1n, slaxz-, Swisher |
|            9 |     4743 | 2024-05-22 | Party Astronauts | W   | 0.035      | -            | -                | -                | -         |     0.06 | malbsMd, reck, s1n, slaxz-, Swisher |
|            8 |     4749 | 2024-05-22 | Mythic           | W   | 0.034      | -            | -                | -                | -         |     0.03 | malbsMd, reck, s1n, slaxz-, Swisher |
|            7 |     4813 | 2024-05-20 | NRG              | W   | 0.022      | -            | -                | -                | -         |     0.06 | malbsMd, reck, s1n, slaxz-, Swisher |
|            6 |     4818 | 2024-05-20 | NRG              | W   | 0.022      | -            | -                | -                | -         |     0.05 | malbsMd, reck, s1n, slaxz-, Swisher |
|            5 |     4828 | 2024-05-20 | E-Xolos LAZER    | W   | 0.021      | -            | -                | -                | -         |     0.02 | malbsMd, reck, s1n, slaxz-, Swisher |
|            4 |     4852 | 2024-05-19 | BOSS             | W   | 0.015      | -            | -                | -                | -         |     0.04 | malbsMd, reck, s1n, slaxz-, Swisher |
|            3 |     4854 | 2024-05-19 | BOSS             | W   | 0.015      | -            | -                | -                | -         |     0.04 | malbsMd, reck, s1n, slaxz-, Swisher |
|            2 |     4877 | 2024-05-18 | Nouns            | L   | 0.008      | -            | -                | -                | -         |    -0.22 | malbsMd, reck, s1n, slaxz-, Swisher |
|            1 |     4911 | 2024-05-17 | DETONATE         | W   | 0.002      | -            | -                | -                | -         |     0.00 | malbsMd, reck, s1n, slaxz-, Swisher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($71,260.55)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-10-06 |      0.948 | $3,000.00      | $2,844.92       |
| 2024-09-22 |      0.854 | $32,000.00     | $27,326.73      |
| 2024-08-25 |      0.667 | $5,000.00      | $3,335.79       |
| 2024-08-18 |      0.623 | $1,500.00      | $934.18         |
| 2024-07-21 |      0.434 | $15,000.00     | $6,511.16       |
| 2024-06-09 |      0.156 | $25,000.00     | $3,893.47       |
| 2024-06-02 |      0.108 | $4,000.00      | $430.47         |
| 2024-05-24 |      0.049 | $20,000.00     | $983.84         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
