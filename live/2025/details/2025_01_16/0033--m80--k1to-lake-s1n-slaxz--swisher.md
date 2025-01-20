### Roster Details<br />
Team Name: M80<br />
Roster: k1to, Lake, s1n, slaxz-, Swisher<br />
Global Rank: [33](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [24]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  1184.4<br />
<br />
Final Rank Value (1184.4) = Starting Rank Value (1171.6) + Head To Head Adjustments (12.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.540[<sup>1</sup>](#table2)
- Bounty Collected: 0.409[<sup>2</sup>](#table1)
- Opponent Network: 0.137[<sup>2</sup>](#table1)
- LAN Wins: 0.471[<sup>2</sup>](#table1)

The average of these factors is 0.389<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1171.6
- 400 + ( ( 0.389 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1171.6


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
|           50 |        4 | 2025-01-16 | FaZe               | L   | 1.000      | -            | -                | -                | -         |    -0.75 | k1to, Lake, s1n, slaxz-, Swisher |
|           49 |      813 | 2024-11-15 | FURIA              | L   | 0.784      | -            | -                | -                | -         |    -2.56 | Lake, reck, s1n, slaxz-, Swisher |
|           48 |      829 | 2024-11-14 | BESTIA             | W   | 0.782      | -            | -                | -                | 1 (0.782) |    10.92 | Lake, reck, s1n, slaxz-, Swisher |
|           47 |      870 | 2024-11-14 | Complexity         | L   | 0.776      | -            | -                | -                | -         |    -6.53 | Lake, reck, s1n, slaxz-, Swisher |
|           46 |      905 | 2024-11-12 | Legacy             | W   | 0.768      | -            | -                | -                | 1 (0.768) |     9.27 | Lake, reck, s1n, slaxz-, Swisher |
|           45 |      919 | 2024-11-12 | RED Canids         | W   | 0.764      | -            | -                | -                | 1 (0.764) |     8.45 | Lake, reck, s1n, slaxz-, Swisher |
|           44 |      937 | 2024-11-11 | BOSS               | L   | 0.762      | -            | -                | -                | -         |   -15.19 | Lake, reck, s1n, slaxz-, Swisher |
|           43 |     1283 | 2024-10-25 | BESTIA             | L   | 0.646      | -            | -                | -                | -         |   -11.91 | Lake, reck, s1n, slaxz-, Swisher |
|           42 |     1303 | 2024-10-24 | Aurora             | W   | 0.638      | 0.477        | 0.058 (0.018)    | 0.313 (0.095)    | 0 (0.000) |     4.22 | Lake, reck, s1n, slaxz-, Swisher |
|           41 |     1306 | 2024-10-24 | BESTIA             | L   | 0.637      | -            | -                | -                | -         |   -12.18 | Lake, reck, s1n, slaxz-, Swisher |
|           40 |     1344 | 2024-10-20 | NRG                | W   | 0.614      | 0.477        | 0.122 (0.036)    | 0.585 (0.171)    | 0 (0.000) |     9.47 | Lake, reck, s1n, slaxz-, Swisher |
|           39 |     1424 | 2024-10-17 | Legacy             | W   | 0.595      | 0.477        | 0.074 (0.021)    | 0.503 (0.143)    | 0 (0.000) |     7.29 | Lake, reck, s1n, slaxz-, Swisher |
|           38 |     1455 | 2024-10-16 | NRG                | W   | 0.588      | 0.477        | 0.122 (0.034)    | 0.585 (0.164)    | -         |     9.12 | Lake, reck, s1n, slaxz-, Swisher |
|           37 |     1564 | 2024-10-09 | BOSS               | W   | 0.541      | 0.477        | -                | 0.421 (0.109)    | -         |     6.31 | Lake, reck, s1n, slaxz-, Swisher |
|           36 |     1570 | 2024-10-09 | BOSS               | L   | 0.541      | -            | -                | -                | -         |   -11.00 | Lake, reck, s1n, slaxz-, Swisher |
|           35 |     1603 | 2024-10-08 | Legacy             | W   | 0.534      | 0.477        | 0.074 (0.019)    | 0.503 (0.128)    | -         |     6.64 | Lake, reck, s1n, slaxz-, Swisher |
|           34 |     1610 | 2024-10-08 | Legacy             | L   | 0.534      | -            | -                | -                | -         |   -10.44 | Lake, reck, s1n, slaxz-, Swisher |
|           33 |     1701 | 2024-10-05 | Wildcard           | L   | 0.512      | -            | -                | -                | -         |    -5.08 | Lake, reck, s1n, slaxz-, Swisher |
|           32 |     1735 | 2024-10-04 | BIG                | L   | 0.506      | -            | -                | -                | -         |    -4.46 | Lake, reck, s1n, slaxz-, Swisher |
|           31 |     1739 | 2024-10-04 | Wildcard           | W   | 0.506      | 0.500        | 0.230 (0.058)    | 0.636 (0.161)    | 1 (0.506) |    11.07 | Lake, reck, s1n, slaxz-, Swisher |
|           30 |     1839 | 2024-10-01 | Party Astronauts   | W   | 0.488      | -            | -                | -                | -         |     2.91 | Lake, reck, s1n, slaxz-, Swisher |
|           29 |     1844 | 2024-10-01 | Party Astronauts   | L   | 0.487      | -            | -                | -                | -         |   -12.67 | Lake, reck, s1n, slaxz-, Swisher |
|           28 |     1849 | 2024-10-01 | Nouns              | W   | 0.487      | 0.477        | -                | 0.577 (0.134)    | -         |     5.77 | Lake, reck, s1n, slaxz-, Swisher |
|           27 |     1853 | 2024-10-01 | Nouns              | L   | 0.487      | -            | -                | -                | -         |    -9.80 | Lake, reck, s1n, slaxz-, Swisher |
|           26 |     1887 | 2024-09-30 | Revenge Nation     | W   | 0.480      | -            | -                | -                | -         |     0.83 | Lake, reck, s1n, slaxz-, Swisher |
|           25 |     1889 | 2024-09-30 | Revenge Nation     | W   | 0.480      | -            | -                | -                | -         |     0.83 | Lake, reck, s1n, slaxz-, Swisher |
|           24 |     1936 | 2024-09-28 | Bad News Capybaras | W   | 0.467      | -            | -                | -                | -         |     1.09 | Lake, reck, s1n, slaxz-, Swisher |
|           23 |     1937 | 2024-09-28 | Bad News Capybaras | W   | 0.467      | -            | -                | -                | -         |     1.10 | Lake, reck, s1n, slaxz-, Swisher |
|           22 |     2019 | 2024-09-26 | timbermen          | W   | 0.454      | -            | -                | -                | -         |     1.92 | Lake, reck, s1n, slaxz-, Swisher |
|           21 |     2021 | 2024-09-26 | timbermen          | W   | 0.454      | -            | -                | -                | -         |     1.95 | Lake, reck, s1n, slaxz-, Swisher |
|           20 |     2067 | 2024-09-25 | NRG                | W   | 0.448      | 0.477        | 0.122 (0.026)    | 0.585 (0.125)    | -         |     8.20 | Lake, reck, s1n, slaxz-, Swisher |
|           19 |     2072 | 2024-09-25 | NRG                | L   | 0.447      | -            | -                | -                | -         |    -6.00 | Lake, reck, s1n, slaxz-, Swisher |
|           18 |     2299 | 2024-09-19 | MIBR               | L   | 0.405      | -            | -                | -                | -         |    -1.42 | Lake, reck, s1n, slaxz-, Swisher |
|           17 |     2433 | 2024-09-14 | Imperial           | W   | 0.372      | 0.889        | 0.165 (0.054)    | 0.430 (0.142)    | 1 (0.372) |     5.87 | Lake, reck, s1n, slaxz-, Swisher |
|           16 |     2531 | 2024-09-11 | fnatic             | W   | 0.353      | 0.889        | 0.183 (0.058)    | -                | 1 (0.353) |     5.18 | Lake, reck, s1n, slaxz-, Swisher |
|           15 |     2566 | 2024-09-10 | Complexity         | W   | 0.345      | 0.889        | 0.122 (0.037)    | -                | 1 (0.345) |     7.74 | Lake, reck, s1n, slaxz-, Swisher |
|           14 |     3199 | 2024-08-22 | Falcons            | L   | 0.219      | -            | -                | -                | -         |    -5.13 | Lake, reck, s1n, slaxz-, Swisher |
|           13 |     3363 | 2024-08-18 | Wildcard           | L   | 0.193      | -            | -                | -                | -         |    -1.62 | Lake, reck, s1n, slaxz-, Swisher |
|           12 |     3378 | 2024-08-17 | undefined          | W   | 0.187      | -            | -                | -                | -         |     0.35 | Lake, reck, s1n, slaxz-, Swisher |
|           11 |     3487 | 2024-08-13 | InControl          | W   | 0.160      | -            | -                | -                | -         |     0.26 | Lake, reck, s1n, slaxz-, Swisher |
|           10 |     3528 | 2024-08-12 | Mythic             | W   | 0.154      | -            | -                | -                | -         |     0.14 | Lake, reck, s1n, slaxz-, Swisher |
|            9 |     3531 | 2024-08-12 | Mythic             | W   | 0.154      | -            | -                | -                | -         |     0.14 | Lake, reck, s1n, slaxz-, Swisher |
|            8 |     3668 | 2024-08-07 | LAG                | W   | 0.121      | -            | -                | -                | -         |     0.18 | Lake, reck, s1n, slaxz-, Swisher |
|            7 |     3670 | 2024-08-07 | LAG                | W   | 0.121      | -            | -                | -                | -         |     0.18 | Lake, reck, s1n, slaxz-, Swisher |
|            6 |     3722 | 2024-08-06 | FLUFFY AIMERS      | W   | 0.114      | -            | -                | -                | -         |     0.73 | Lake, reck, s1n, slaxz-, Swisher |
|            5 |     3725 | 2024-08-06 | FLUFFY AIMERS      | W   | 0.114      | -            | -                | -                | -         |     0.73 | Lake, reck, s1n, slaxz-, Swisher |
|            4 |     3929 | 2024-07-31 | Limitless          | W   | 0.074      | -            | -                | -                | -         |     0.12 | Lake, reck, s1n, slaxz-, Swisher |
|            3 |     3935 | 2024-07-31 | Limitless          | W   | 0.074      | -            | -                | -                | -         |     0.11 | Lake, reck, s1n, slaxz-, Swisher |
|            2 |     3979 | 2024-07-30 | E-Xolos LAZER      | W   | 0.068      | -            | -                | -                | -         |     0.17 | Lake, reck, s1n, slaxz-, Swisher |
|            1 |     3984 | 2024-07-30 | E-Xolos LAZER      | W   | 0.067      | -            | -                | -                | -         |     0.17 | Lake, reck, s1n, slaxz-, Swisher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($32,020.69)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.614 | $25,000.00     | $15,346.20      |
| 2024-10-06 |      0.520 | $3,000.00      | $1,560.55       |
| 2024-09-22 |      0.426 | $32,000.00     | $13,626.78      |
| 2024-08-25 |      0.239 | $5,000.00      | $1,195.17       |
| 2024-08-18 |      0.195 | $1,500.00      | $291.99         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
