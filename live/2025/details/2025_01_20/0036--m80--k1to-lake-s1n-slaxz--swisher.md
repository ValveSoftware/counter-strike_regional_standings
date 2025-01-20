### Roster Details<br />
Team Name: M80<br />
Roster: k1to, Lake, s1n, slaxz-, Swisher<br />
Global Rank: [36](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [26]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  1179.0<br />
<br />
Final Rank Value (1179.0) = Starting Rank Value (1165.3) + Head To Head Adjustments (13.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.538[<sup>1</sup>](#table2)
- Bounty Collected: 0.406[<sup>2</sup>](#table1)
- Opponent Network: 0.131[<sup>2</sup>](#table1)
- LAN Wins: 0.466[<sup>2</sup>](#table1)

The average of these factors is 0.385<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1165.3
- 400 + ( ( 0.385 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 1165.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           50 |       13 | 2025-01-16 | FaZe             | L   | 1.000      | -            | -                | -                | -         |    -0.71 | k1to, Lake, s1n, slaxz-, Swisher |
|           49 |      799 | 2024-11-15 | FURIA            | L   | 0.764      | -            | -                | -                | -         |    -2.37 | Lake, reck, s1n, slaxz-, Swisher |
|           48 |      815 | 2024-11-14 | BESTIA           | W   | 0.762      | -            | -                | -                | 1 (0.762) |    10.68 | Lake, reck, s1n, slaxz-, Swisher |
|           47 |      856 | 2024-11-14 | Complexity       | L   | 0.756      | -            | -                | -                | -         |    -6.44 | Lake, reck, s1n, slaxz-, Swisher |
|           46 |      891 | 2024-11-12 | Legacy           | W   | 0.748      | -            | -                | -                | 1 (0.748) |     8.98 | Lake, reck, s1n, slaxz-, Swisher |
|           45 |      905 | 2024-11-12 | RED Canids       | W   | 0.744      | -            | -                | -                | 1 (0.744) |     8.28 | Lake, reck, s1n, slaxz-, Swisher |
|           44 |      923 | 2024-11-11 | BOSS             | L   | 0.742      | -            | -                | -                | -         |   -14.63 | Lake, reck, s1n, slaxz-, Swisher |
|           43 |     1269 | 2024-10-25 | BESTIA           | L   | 0.627      | -            | -                | -                | -         |   -11.51 | Lake, reck, s1n, slaxz-, Swisher |
|           42 |     1289 | 2024-10-24 | Aurora           | W   | 0.619      | 0.477        | 0.058 (0.017)    | 0.314 (0.093)    | 0 (0.000) |     4.06 | Lake, reck, s1n, slaxz-, Swisher |
|           41 |     1292 | 2024-10-24 | BESTIA           | L   | 0.618      | -            | -                | -                | -         |   -11.76 | Lake, reck, s1n, slaxz-, Swisher |
|           40 |     1330 | 2024-10-20 | NRG              | W   | 0.594      | 0.477        | 0.122 (0.035)    | 0.580 (0.164)    | 0 (0.000) |     9.31 | Lake, reck, s1n, slaxz-, Swisher |
|           39 |     1410 | 2024-10-17 | Legacy           | W   | 0.575      | 0.477        | 0.075 (0.020)    | 0.500 (0.137)    | 0 (0.000) |     7.00 | Lake, reck, s1n, slaxz-, Swisher |
|           38 |     1441 | 2024-10-16 | NRG              | W   | 0.568      | 0.477        | 0.122 (0.033)    | 0.580 (0.157)    | -         |     8.96 | Lake, reck, s1n, slaxz-, Swisher |
|           37 |     1550 | 2024-10-09 | BOSS             | W   | 0.521      | 0.477        | -                | 0.422 (0.105)    | -         |     6.21 | Lake, reck, s1n, slaxz-, Swisher |
|           36 |     1556 | 2024-10-09 | BOSS             | L   | 0.521      | -            | -                | -                | -         |   -10.46 | Lake, reck, s1n, slaxz-, Swisher |
|           35 |     1589 | 2024-10-08 | Legacy           | W   | 0.514      | 0.477        | 0.075 (0.018)    | 0.500 (0.123)    | -         |     6.36 | Lake, reck, s1n, slaxz-, Swisher |
|           34 |     1596 | 2024-10-08 | Legacy           | L   | 0.514      | -            | -                | -                | -         |   -10.09 | Lake, reck, s1n, slaxz-, Swisher |
|           33 |     1687 | 2024-10-05 | Wildcard         | L   | 0.493      | -            | -                | -                | -         |    -4.76 | Lake, reck, s1n, slaxz-, Swisher |
|           32 |     1721 | 2024-10-04 | BIG              | L   | 0.487      | -            | -                | -                | -         |    -4.05 | Lake, reck, s1n, slaxz-, Swisher |
|           31 |     1725 | 2024-10-04 | Wildcard         | W   | 0.486      | 0.500        | 0.232 (0.056)    | 0.638 (0.155)    | 1 (0.486) |    10.76 | Lake, reck, s1n, slaxz-, Swisher |
|           30 |     1825 | 2024-10-01 | Party Astronauts | W   | 0.468      | -            | -                | -                | -         |     2.81 | Lake, reck, s1n, slaxz-, Swisher |
|           29 |     1830 | 2024-10-01 | Party Astronauts | L   | 0.468      | -            | -                | -                | -         |   -12.14 | Lake, reck, s1n, slaxz-, Swisher |
|           28 |     1835 | 2024-10-01 | Nouns            | W   | 0.467      | 0.477        | -                | 0.576 (0.128)    | -         |     5.58 | Lake, reck, s1n, slaxz-, Swisher |
|           27 |     1839 | 2024-10-01 | Nouns            | L   | 0.467      | -            | -                | -                | -         |    -9.35 | Lake, reck, s1n, slaxz-, Swisher |
|           26 |     1873 | 2024-09-30 | Revenge Nation   | W   | 0.461      | -            | -                | -                | -         |     0.82 | Lake, reck, s1n, slaxz-, Swisher |
|           25 |     1875 | 2024-09-30 | Revenge Nation   | W   | 0.460      | -            | -                | -                | -         |     0.82 | Lake, reck, s1n, slaxz-, Swisher |
|           24 |     1922 | 2024-09-28 | Take Flyte       | W   | 0.448      | -            | -                | -                | -         |     1.10 | Lake, reck, s1n, slaxz-, Swisher |
|           23 |     1923 | 2024-09-28 | Take Flyte       | W   | 0.447      | -            | -                | -                | -         |     1.11 | Lake, reck, s1n, slaxz-, Swisher |
|           22 |     2005 | 2024-09-26 | timbermen        | W   | 0.434      | -            | -                | -                | -         |     1.87 | Lake, reck, s1n, slaxz-, Swisher |
|           21 |     2007 | 2024-09-26 | timbermen        | W   | 0.434      | -            | -                | -                | -         |     1.90 | Lake, reck, s1n, slaxz-, Swisher |
|           20 |     2053 | 2024-09-25 | NRG              | W   | 0.428      | 0.477        | 0.122 (0.025)    | 0.580 (0.118)    | -         |     7.93 | Lake, reck, s1n, slaxz-, Swisher |
|           19 |     2058 | 2024-09-25 | NRG              | L   | 0.428      | -            | -                | -                | -         |    -5.64 | Lake, reck, s1n, slaxz-, Swisher |
|           18 |     2285 | 2024-09-19 | MIBR             | L   | 0.385      | -            | -                | -                | -         |    -1.31 | Lake, reck, s1n, slaxz-, Swisher |
|           17 |     2419 | 2024-09-14 | Imperial         | W   | 0.353      | 0.889        | 0.164 (0.051)    | 0.424 (0.133)    | 1 (0.353) |     5.56 | Lake, reck, s1n, slaxz-, Swisher |
|           16 |     2517 | 2024-09-11 | fnatic           | W   | 0.333      | 0.889        | 0.180 (0.053)    | -                | 1 (0.333) |     4.92 | Lake, reck, s1n, slaxz-, Swisher |
|           15 |     2552 | 2024-09-10 | Complexity       | W   | 0.326      | 0.889        | 0.119 (0.034)    | -                | 1 (0.326) |     7.29 | Lake, reck, s1n, slaxz-, Swisher |
|           14 |     3185 | 2024-08-22 | Falcons          | L   | 0.199      | -            | -                | -                | -         |    -4.72 | Lake, reck, s1n, slaxz-, Swisher |
|           13 |     3349 | 2024-08-18 | Wildcard         | L   | 0.173      | -            | -                | -                | -         |    -1.42 | Lake, reck, s1n, slaxz-, Swisher |
|           12 |     3364 | 2024-08-17 | undefined        | W   | 0.167      | -            | -                | -                | -         |     0.32 | Lake, reck, s1n, slaxz-, Swisher |
|           11 |     3473 | 2024-08-13 | InControl        | W   | 0.140      | -            | -                | -                | -         |     0.24 | Lake, reck, s1n, slaxz-, Swisher |
|           10 |     3514 | 2024-08-12 | Mythic           | W   | 0.135      | -            | -                | -                | -         |     0.12 | Lake, reck, s1n, slaxz-, Swisher |
|            9 |     3517 | 2024-08-12 | Mythic           | W   | 0.134      | -            | -                | -                | -         |     0.12 | Lake, reck, s1n, slaxz-, Swisher |
|            8 |     3654 | 2024-08-07 | LAG              | W   | 0.101      | -            | -                | -                | -         |     0.16 | Lake, reck, s1n, slaxz-, Swisher |
|            7 |     3656 | 2024-08-07 | LAG              | W   | 0.101      | -            | -                | -                | -         |     0.16 | Lake, reck, s1n, slaxz-, Swisher |
|            6 |     3708 | 2024-08-06 | FLUFFY AIMERS    | W   | 0.095      | -            | -                | -                | -         |     0.62 | Lake, reck, s1n, slaxz-, Swisher |
|            5 |     3711 | 2024-08-06 | FLUFFY AIMERS    | W   | 0.094      | -            | -                | -                | -         |     0.62 | Lake, reck, s1n, slaxz-, Swisher |
|            4 |     3915 | 2024-07-31 | Limitless        | W   | 0.054      | -            | -                | -                | -         |     0.09 | Lake, reck, s1n, slaxz-, Swisher |
|            3 |     3921 | 2024-07-31 | Limitless        | W   | 0.054      | -            | -                | -                | -         |     0.09 | Lake, reck, s1n, slaxz-, Swisher |
|            2 |     3965 | 2024-07-30 | E-Xolos LAZER    | W   | 0.048      | -            | -                | -                | -         |     0.12 | Lake, reck, s1n, slaxz-, Swisher |
|            1 |     3970 | 2024-07-30 | E-Xolos LAZER    | W   | 0.048      | -            | -                | -                | -         |     0.12 | Lake, reck, s1n, slaxz-, Swisher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30,712.17)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.594 | $25,000.00     | $14,854.27      |
| 2024-10-06 |      0.501 | $3,000.00      | $1,501.52       |
| 2024-09-22 |      0.406 | $32,000.00     | $12,997.11      |
| 2024-08-25 |      0.219 | $5,000.00      | $1,096.78       |
| 2024-08-18 |      0.175 | $1,500.00      | $262.48         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
