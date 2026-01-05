### Roster Details<br />
Team Name: Bounty Hunters<br />
Roster: fREQ, KAISER, ninjaZ, piriajr, zock<br />
Global Rank: [95](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [22]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  961.3<br />
<br />
Final Rank Value (961.3) = Starting Rank Value (873.1) + Head To Head Adjustments (88.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.358[<sup>1</sup>](#table2)
- Bounty Collected: 0.322[<sup>2</sup>](#table1)
- Opponent Network: 0.131[<sup>2</sup>](#table1)
- LAN Wins: 0.142[<sup>2</sup>](#table1)

The average of these factors is 0.239<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 873.1
- 400 + ( ( 0.239 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 873.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |      856 | 2025-11-15 | Keyd Stars        | L   | 0.861      | -            | -                | -                | -         |   -11.73 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           62 |      877 | 2025-11-14 | 9z                | L   | 0.855      | -            | -                | -                | -         |    -7.08 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           61 |      885 | 2025-11-14 | BESTIA            | L   | 0.854      | -            | -                | -                | -         |    -5.23 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           60 |      917 | 2025-11-13 | ShindeN           | W   | 0.846      | 0.371        | 0.006 (0.002)    | 0.369 (0.116)    | 0 (0.000) |    10.56 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           59 |      930 | 2025-11-12 | BESTIA            | W   | 0.843      | 0.363        | 0.086 (0.026)    | 0.624 (0.191)    | 0 (0.000) |    22.06 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           58 |      965 | 2025-11-11 | ShindeN           | W   | 0.836      | 0.363        | 0.006 (0.002)    | 0.369 (0.112)    | 0 (0.000) |    12.05 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           57 |      996 | 2025-11-10 | Galorys           | W   | 0.829      | 0.363        | -                | 0.464 (0.140)    | 0 (0.000) |    14.17 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           56 |     1063 | 2025-11-08 | Galorys           | W   | 0.814      | 0.371        | -                | 0.464 (0.140)    | 0 (0.000) |    14.06 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           55 |     1120 | 2025-11-07 | Gaimin Gladiators | L   | 0.808      | -            | -                | -                | -         |    -9.50 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           54 |     1207 | 2025-11-06 | Fluxo             | L   | 0.803      | -            | -                | -                | -         |    -3.50 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           53 |     1209 | 2025-11-06 | Gaimin Gladiators | W   | 0.802      | 0.333        | 0.019 (0.005)    | 0.492 (0.132)    | 1 (0.802) |    16.08 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           52 |     1241 | 2025-11-05 | Procyon           | W   | 0.795      | -            | -                | -                | 0 (0.000) |     8.00 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           51 |     1296 | 2025-11-03 | MAGICOS           | W   | 0.782      | -            | -                | -                | 0 (0.000) |     1.36 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           50 |     1481 | 2025-10-27 | Keyd Stars        | W   | 0.735      | 0.363        | 0.022 (0.006)    | 0.458 (0.122)    | 0 (0.000) |    15.59 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           49 |     1528 | 2025-10-26 | Fuego             | W   | 0.729      | -            | -                | -                | -         |     4.77 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           48 |     1552 | 2025-10-26 | BESTIA            | W   | 0.727      | 0.350        | 0.086 (0.022)    | 0.624 (0.159)    | -         |    20.88 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           47 |     1589 | 2025-10-25 | Vasco             | W   | 0.721      | -            | -                | -                | -         |     3.64 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           46 |     1594 | 2025-10-25 | Dusty Roots       | W   | 0.721      | 0.350        | 0.011 (0.003)    | 0.348 (0.088)    | -         |    13.53 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           45 |     1641 | 2025-10-24 | Gaimin Gladiators | L   | 0.715      | -            | -                | -                | -         |    -5.59 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           44 |     1662 | 2025-10-24 | BESTIA            | L   | 0.714      | -            | -                | -                | -         |    -1.66 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           43 |     1702 | 2025-10-23 | MAGICOS           | W   | 0.708      | -            | -                | -                | -         |     1.68 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           42 |     1800 | 2025-10-18 | Sharks            | L   | 0.675      | -            | -                | -                | -         |    -1.70 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           41 |     1808 | 2025-10-18 | Keyd Stars        | W   | 0.674      | 0.371        | 0.022 (0.005)    | 0.458 (0.114)    | -         |    15.85 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           40 |     1838 | 2025-10-17 | Dusty Roots       | W   | 0.666      | 0.371        | 0.011 (0.003)    | -                | -         |    13.65 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           39 |     1870 | 2025-10-16 | RED Canids        | W   | 0.660      | 0.371        | 0.019 (0.005)    | -                | -         |    17.73 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           38 |     1937 | 2025-10-14 | Vasco             | W   | 0.647      | -            | -                | -                | -         |     4.53 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           37 |     1966 | 2025-10-13 | Players           | L   | 0.640      | -            | -                | -                | -         |   -14.15 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           36 |     2012 | 2025-10-10 | MAGICOS           | W   | 0.622      | -            | -                | -                | -         |     1.80 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           35 |     2106 | 2025-10-08 | VEXA              | W   | 0.609      | -            | -                | -                | -         |     1.73 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           34 |     2166 | 2025-10-07 | FOLHA AMARELA     | L   | 0.601      | -            | -                | -                | -         |   -13.32 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           33 |     2169 | 2025-10-07 | KRÜ               | L   | 0.601      | -            | -                | -                | -         |   -11.90 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           32 |     2285 | 2025-10-05 | Vasco             | L   | 0.588      | -            | -                | -                | -         |   -15.21 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           31 |     2346 | 2025-10-04 | ECSTATIC          | L   | 0.580      | -            | -                | -                | -         |    -0.99 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           30 |     2560 | 2025-09-28 | ODDIK             | L   | 0.543      | -            | -                | -                | -         |    -4.48 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           29 |     2561 | 2025-09-28 | GameHunters       | W   | 0.542      | -            | -                | -                | 1 (0.542) |     3.64 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           28 |     2606 | 2025-09-27 | BESTIA            | L   | 0.537      | -            | -                | -                | -         |    -1.29 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           27 |     3080 | 2025-09-13 | Sharks            | L   | 0.442      | -            | -                | -                | -         |    -1.01 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           26 |     3133 | 2025-09-12 | Fuego             | W   | 0.434      | -            | -                | -                | -         |     2.71 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           25 |     3172 | 2025-09-11 | Galorys           | L   | 0.429      | -            | -                | -                | -         |    -5.04 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           24 |     3182 | 2025-09-11 | ShindeN           | L   | 0.428      | -            | -                | -                | -         |    -5.92 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           23 |     3232 | 2025-09-10 | MAGICOS           | W   | 0.421      | -            | -                | -                | -         |     0.94 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           22 |     3280 | 2025-09-09 | ODDIK             | L   | 0.415      | -            | -                | -                | -         |    -3.73 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           21 |     3306 | 2025-09-09 | Four Magic        | W   | 0.413      | -            | -                | -                | -         |     1.75 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           20 |     3330 | 2025-09-08 | Crashers          | W   | 0.409      | -            | -                | -                | -         |     1.95 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           19 |     3376 | 2025-09-07 | LP                | L   | 0.400      | -            | -                | -                | -         |   -10.47 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           18 |     3426 | 2025-09-05 | MAGICOS           | W   | 0.387      | -            | -                | -                | -         |     0.81 | fREQ, KAISER, ninjaZ, piriajr, zock  |
|           17 |     3801 | 2025-08-17 | Sharks            | L   | 0.262      | -            | -                | -                | -         |    -0.56 | fREQ, KAISER, meyern, Tuurtle, zock  |
|           16 |     3889 | 2025-08-15 | Vasco             | W   | 0.248      | -            | -                | -                | -         |     1.16 | fREQ, KAISER, meyern, Tuurtle, zock  |
|           15 |     3929 | 2025-08-14 | Dusty Roots       | L   | 0.241      | -            | -                | -                | -         |    -3.32 | fREQ, KAISER, meyern, Tuurtle, zock  |
|           14 |     3978 | 2025-08-13 | Keyd Stars        | L   | 0.235      | -            | -                | -                | -         |    -2.16 | fREQ, KAISER, meyern, Tuurtle, zock  |
|           13 |     4029 | 2025-08-12 | Galorys           | L   | 0.229      | -            | -                | -                | -         |    -2.90 | fREQ, KAISER, piriajr, Tuurtle, zock |
|           12 |     4145 | 2025-08-10 | Gaimin Gladiators | W   | 0.213      | -            | -                | -                | -         |     4.56 | fREQ, KAISER, piriajr, Tuurtle, zock |
|           11 |     4238 | 2025-08-03 | 9z                | L   | 0.169      | -            | -                | -                | -         |    -0.93 | fREQ, KAISER, nyezin, Tuurtle, zock  |
|           10 |     4298 | 2025-07-31 | Players           | W   | 0.148      | -            | -                | -                | -         |     1.09 | fREQ, KAISER, nyezin, Tuurtle, zock  |
|            9 |     4314 | 2025-07-29 | Keyd Stars        | L   | 0.135      | -            | -                | -                | -         |    -1.22 | fREQ, KAISER, nyezin, Tuurtle, zock  |
|            8 |     4334 | 2025-07-28 | Gaimin Gladiators | L   | 0.128      | -            | -                | -                | -         |    -1.29 | fREQ, KAISER, nyezin, Tuurtle, zock  |
|            7 |     4361 | 2025-07-27 | paiN Academy      | W   | 0.121      | -            | -                | -                | -         |     0.46 | fREQ, KAISER, nyezin, Tuurtle, zock  |
|            6 |     4376 | 2025-07-27 | Fake do Biru      | W   | 0.120      | -            | -                | -                | -         |     1.83 | fREQ, KAISER, nyezin, Tuurtle, zock  |
|            5 |     4429 | 2025-07-24 | MAGICOS           | W   | 0.102      | -            | -                | -                | -         |     0.22 | fREQ, KAISER, nyezin, Tuurtle, zock  |
|            4 |     4568 | 2025-07-16 | 9z                | L   | 0.049      | -            | -                | -                | -         |    -0.27 | fREQ, KAISER, nyezin, Tuurtle, zock  |
|            3 |     4692 | 2025-07-11 | Keyd Stars        | L   | 0.015      | -            | -                | -                | -         |    -0.41 | fREQ, KAISER, meyern, Tuurtle, zock  |
|            2 |     4704 | 2025-07-11 | Imperial          | L   | 0.013      | -            | -                | -                | -         |    -0.01 | fREQ, KAISER, meyern, Tuurtle, zock  |
|            1 |     4723 | 2025-07-10 | 9z                | L   | 0.007      | -            | -                | -                | -         |    -0.04 | fREQ, KAISER, meyern, Tuurtle, zock  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,924.15)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-16 |      0.869 | $2,134.00      | $1,853.43       |
| 2025-11-15 |      0.862 | $2,000.00      | $1,724.12       |
| 2025-11-15 |      0.861 | $750.00        | $645.77         |
| 2025-10-18 |      0.675 | $4,000.00      | $2,700.84       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
