### Roster Details<br />
Team Name: M80<br />
Roster: k1to, Lake, s1n, slaxz-, Swisher<br />
Global Rank: [39](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [28]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  1123.3<br />
<br />
Final Rank Value (1123.3) = Starting Rank Value (1096.2) + Head To Head Adjustments (27.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.528[<sup>1</sup>](#table2)
- Bounty Collected: 0.390[<sup>2</sup>](#table1)
- Opponent Network: 0.134[<sup>2</sup>](#table1)
- LAN Wins: 0.384[<sup>2</sup>](#table1)

The average of these factors is 0.359<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1096.2
- 400 + ( ( 0.359 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 1096.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |      334 | 2025-01-16 | FaZe               | L   | 1.000      | -            | -                | -                | -         |    -0.54 | k1to, Lake, s1n, slaxz-, Swisher |
|           43 |     1120 | 2024-11-15 | FURIA              | L   | 0.665      | -            | -                | -                | -         |    -1.61 | Lake, reck, s1n, slaxz-, Swisher |
|           42 |     1136 | 2024-11-14 | BESTIA             | W   | 0.663      | 0.143        | 0.160 (0.015)    | -                | 1 (0.663) |    10.02 | Lake, reck, s1n, slaxz-, Swisher |
|           41 |     1177 | 2024-11-14 | Complexity         | L   | 0.657      | -            | -                | -                | -         |    -6.54 | Lake, reck, s1n, slaxz-, Swisher |
|           40 |     1212 | 2024-11-12 | Legacy             | W   | 0.650      | -            | -                | -                | 1 (0.650) |     8.10 | Lake, reck, s1n, slaxz-, Swisher |
|           39 |     1226 | 2024-11-12 | RED Canids         | W   | 0.645      | -            | -                | -                | 1 (0.645) |     7.88 | Lake, reck, s1n, slaxz-, Swisher |
|           38 |     1244 | 2024-11-11 | BOSS               | L   | 0.644      | -            | -                | -                | -         |   -11.23 | Lake, reck, s1n, slaxz-, Swisher |
|           37 |     1590 | 2024-10-25 | BESTIA             | L   | 0.528      | -            | -                | -                | -         |    -9.06 | Lake, reck, s1n, slaxz-, Swisher |
|           36 |     1610 | 2024-10-24 | Aurora             | W   | 0.520      | 0.477        | -                | 0.430 (0.107)    | 0 (0.000) |     3.75 | Lake, reck, s1n, slaxz-, Swisher |
|           35 |     1613 | 2024-10-24 | BESTIA             | L   | 0.519      | -            | -                | -                | -         |    -9.18 | Lake, reck, s1n, slaxz-, Swisher |
|           34 |     1651 | 2024-10-20 | NRG                | W   | 0.495      | 0.477        | 0.122 (0.029)    | 0.808 (0.191)    | 0 (0.000) |     8.62 | Lake, reck, s1n, slaxz-, Swisher |
|           33 |     1731 | 2024-10-17 | Legacy             | W   | 0.476      | 0.477        | 0.079 (0.018)    | 0.487 (0.110)    | 0 (0.000) |     6.08 | Lake, reck, s1n, slaxz-, Swisher |
|           32 |     1762 | 2024-10-16 | NRG                | W   | 0.469      | 0.477        | 0.122 (0.027)    | 0.808 (0.181)    | -         |     8.24 | Lake, reck, s1n, slaxz-, Swisher |
|           31 |     1871 | 2024-10-09 | BOSS               | W   | 0.422      | 0.477        | -                | 0.694 (0.140)    | -         |     6.11 | Lake, reck, s1n, slaxz-, Swisher |
|           30 |     1877 | 2024-10-09 | BOSS               | L   | 0.422      | -            | -                | -                | -         |    -7.35 | Lake, reck, s1n, slaxz-, Swisher |
|           29 |     1910 | 2024-10-08 | Legacy             | W   | 0.416      | 0.477        | 0.079 (0.016)    | 0.487 (0.096)    | -         |     5.43 | Lake, reck, s1n, slaxz-, Swisher |
|           28 |     1917 | 2024-10-08 | Legacy             | L   | 0.415      | -            | -                | -                | -         |    -7.83 | Lake, reck, s1n, slaxz-, Swisher |
|           27 |     2008 | 2024-10-05 | Wildcard           | L   | 0.394      | -            | -                | -                | -         |    -2.78 | Lake, reck, s1n, slaxz-, Swisher |
|           26 |     2042 | 2024-10-04 | BIG                | L   | 0.388      | -            | -                | -                | -         |    -2.16 | Lake, reck, s1n, slaxz-, Swisher |
|           25 |     2046 | 2024-10-04 | Wildcard           | W   | 0.387      | 0.500        | 0.269 (0.052)    | 0.701 (0.136)    | 1 (0.387) |     9.59 | Lake, reck, s1n, slaxz-, Swisher |
|           24 |     2146 | 2024-10-01 | Party Astronauts   | W   | 0.369      | 0.477        | -                | 0.637 (0.112)    | -         |     2.91 | Lake, reck, s1n, slaxz-, Swisher |
|           23 |     2151 | 2024-10-01 | Party Astronauts   | L   | 0.369      | -            | -                | -                | -         |    -8.86 | Lake, reck, s1n, slaxz-, Swisher |
|           22 |     2156 | 2024-10-01 | Nouns              | W   | 0.368      | 0.477        | -                | 0.799 (0.140)    | -         |     4.96 | Lake, reck, s1n, slaxz-, Swisher |
|           21 |     2160 | 2024-10-01 | Nouns              | L   | 0.368      | -            | -                | -                | -         |    -6.78 | Lake, reck, s1n, slaxz-, Swisher |
|           20 |     2194 | 2024-09-30 | Chill Guys         | W   | 0.362      | -            | -                | -                | -         |     1.30 | Lake, reck, s1n, slaxz-, Swisher |
|           19 |     2196 | 2024-09-30 | Chill Guys         | W   | 0.361      | -            | -                | -                | -         |     1.32 | Lake, reck, s1n, slaxz-, Swisher |
|           18 |     2243 | 2024-09-28 | Bad News Capybaras | W   | 0.349      | -            | -                | -                | -         |     1.46 | Lake, reck, s1n, slaxz-, Swisher |
|           17 |     2244 | 2024-09-28 | Bad News Capybaras | W   | 0.349      | -            | -                | -                | -         |     1.48 | Lake, reck, s1n, slaxz-, Swisher |
|           16 |     2326 | 2024-09-26 | timbermen          | W   | 0.336      | -            | -                | -                | -         |     0.85 | Lake, reck, s1n, slaxz-, Swisher |
|           15 |     2328 | 2024-09-26 | timbermen          | W   | 0.335      | -            | -                | -                | -         |     0.86 | Lake, reck, s1n, slaxz-, Swisher |
|           14 |     2374 | 2024-09-25 | NRG                | W   | 0.329      | 0.477        | 0.122 (0.019)    | 0.808 (0.127)    | -         |     6.63 | Lake, reck, s1n, slaxz-, Swisher |
|           13 |     2379 | 2024-09-25 | NRG                | L   | 0.329      | -            | -                | -                | -         |    -3.79 | Lake, reck, s1n, slaxz-, Swisher |
|           12 |     2606 | 2024-09-19 | MIBR               | L   | 0.286      | -            | -                | -                | -         |    -0.82 | Lake, reck, s1n, slaxz-, Swisher |
|           11 |     2740 | 2024-09-14 | Imperial           | W   | 0.254      | 0.889        | 0.158 (0.036)    | -                | 1 (0.254) |     4.00 | Lake, reck, s1n, slaxz-, Swisher |
|           10 |     2838 | 2024-09-11 | fnatic             | W   | 0.234      | 0.889        | 0.176 (0.037)    | -                | 1 (0.234) |     3.67 | Lake, reck, s1n, slaxz-, Swisher |
|            9 |     2873 | 2024-09-10 | Complexity         | W   | 0.227      | 0.889        | 0.116 (0.023)    | -                | 1 (0.227) |     4.79 | Lake, reck, s1n, slaxz-, Swisher |
|            8 |     3506 | 2024-08-22 | Falcons            | L   | 0.100      | -            | -                | -                | -         |    -2.47 | Lake, reck, s1n, slaxz-, Swisher |
|            7 |     3670 | 2024-08-18 | Wildcard           | L   | 0.075      | -            | -                | -                | -         |    -0.43 | Lake, reck, s1n, slaxz-, Swisher |
|            6 |     3685 | 2024-08-17 | Marsborne          | W   | 0.068      | -            | -                | -                | -         |     0.26 | Lake, reck, s1n, slaxz-, Swisher |
|            5 |     3794 | 2024-08-13 | InControl          | W   | 0.041      | -            | -                | -                | -         |     0.09 | Lake, reck, s1n, slaxz-, Swisher |
|            4 |     3835 | 2024-08-12 | Mythic             | W   | 0.036      | -            | -                | -                | -         |     0.04 | Lake, reck, s1n, slaxz-, Swisher |
|            3 |     3838 | 2024-08-12 | Mythic             | W   | 0.035      | -            | -                | -                | -         |     0.04 | Lake, reck, s1n, slaxz-, Swisher |
|            2 |     3975 | 2024-08-07 | LAG                | W   | 0.002      | -            | -                | -                | -         |     0.00 | Lake, reck, s1n, slaxz-, Swisher |
|            1 |     3977 | 2024-08-07 | LAG                | W   | 0.002      | -            | -                | -                | -         |     0.00 | Lake, reck, s1n, slaxz-, Swisher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,137.37)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.495 | $25,000.00     | $12,382.54      |
| 2024-10-06 |      0.402 | $3,000.00      | $1,204.91       |
| 2024-09-22 |      0.307 | $32,000.00     | $9,833.30       |
| 2024-08-25 |      0.120 | $5,000.00      | $602.44         |
| 2024-08-18 |      0.076 | $1,500.00      | $114.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
