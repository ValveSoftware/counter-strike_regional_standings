### Roster Details<br />
Team Name: Nouns<br />
Roster: cJ dA K1nG, Jeorge, junior, nosraC, RUSH<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [63](../standings_global.md)<br />
Regional Rank: [14]( ../standings_americas.md)<br />
Final Rank Value:  1048.6<br />
<br />
Final Rank Value (1048.6) = Starting Rank Value (963.3) + Head To Head Adjustments (85.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.479[<sup>1</sup>](#table2)
- Bounty Collected: 0.407[<sup>2</sup>](#table1)
- Opponent Network: 0.224[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.277<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 963.3
- 400 + ( ( 0.277 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 963.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           73 |        6 | 2024-06-16 | Legacy           | L   | 1.000      | -            | -                | -                | -         |   -12.39 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           72 |       13 | 2024-06-16 | Wildcard         | W   | 1.000      | 0.384        | 0.068 (0.026)    | 0.572 (0.220)    | 0 (0.000) |    14.51 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           71 |      114 | 2024-06-13 | Limitless        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.31 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           70 |      281 | 2024-06-08 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |   -17.32 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           69 |      338 | 2024-06-07 | Party Astronauts | W   | 1.000      | 0.477        | 0.055 (0.026)    | 0.600 (0.286)    | 0 (0.000) |    16.08 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           68 |      346 | 2024-06-07 | Elevate          | W   | 1.000      | 0.384        | -                | 0.481 (0.185)    | 0 (0.000) |    13.81 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           67 |      351 | 2024-06-07 | Elevate          | L   | 1.000      | -            | -                | -                | -         |   -17.87 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           66 |      366 | 2024-06-07 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -16.95 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           65 |      395 | 2024-06-06 | Elevate          | W   | 1.000      | 0.477        | -                | 0.481 (0.229)    | 0 (0.000) |    13.16 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           64 |      466 | 2024-06-05 | M80              | L   | 1.000      | -            | -                | -                | -         |    -7.58 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           63 |      515 | 2024-06-04 | NRG              | W   | 1.000      | 0.477        | -                | 0.507 (0.242)    | 0 (0.000) |    11.33 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           62 |      527 | 2024-06-04 | TSM Shimmer      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.38 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           61 |      798 | 2024-05-24 | M80              | L   | 1.000      | -            | -                | -                | -         |    -7.46 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           60 |      812 | 2024-05-23 | NRG              | W   | 1.000      | 0.384        | -                | 0.507 (0.195)    | 0 (0.000) |    12.18 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           59 |      828 | 2024-05-22 | Party Astronauts | W   | 1.000      | 0.384        | 0.055 (0.021)    | 0.600 (0.231)    | 0 (0.000) |    14.74 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           58 |      875 | 2024-05-21 | FLUFFY AIMERS    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.92 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           57 |      878 | 2024-05-21 | FLUFFY AIMERS    | W   | 1.000      | -            | -                | -                | -         |     6.26 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           56 |      955 | 2024-05-19 | FLUFFY AIMERS    | W   | 1.000      | -            | -                | -                | -         |     6.52 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           55 |      976 | 2024-05-18 | NRG              | W   | 0.998      | -            | -                | -                | -         |    16.59 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           54 |      977 | 2024-05-18 | M80              | W   | 0.997      | 0.303        | 0.205 (0.062)    | 0.666 (0.201)    | -         |    26.04 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           53 |     1008 | 2024-05-17 | Wildcard         | W   | 0.991      | 0.303        | 0.068 (0.021)    | -                | -         |    17.04 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           52 |     1081 | 2024-05-15 | Carpe Diem       | L   | 0.978      | -            | -                | -                | -         |   -22.19 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           51 |     1086 | 2024-05-15 | Carpe Diem       | L   | 0.978      | -            | -                | -                | -         |   -23.70 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           50 |     1184 | 2024-05-13 | Wildcard         | L   | 0.965      | -            | -                | -                | -         |   -17.35 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           49 |     1186 | 2024-05-13 | Wildcard         | W   | 0.964      | 0.477        | 0.068 (0.031)    | 0.572 (0.263)    | -         |    12.90 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           48 |     1228 | 2024-05-11 | Elevate          | L   | 0.951      | -            | -                | -                | -         |   -17.19 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           47 |     1230 | 2024-05-11 | Mythic           | L   | 0.951      | -            | -                | -                | -         |   -21.60 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           46 |     1232 | 2024-05-11 | Elevate          | W   | 0.950      | -            | -                | -                | -         |    11.06 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           45 |     1277 | 2024-05-09 | BOSS             | W   | 0.938      | -            | -                | -                | -         |     8.40 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           44 |     1282 | 2024-05-09 | BOSS             | W   | 0.938      | -            | -                | -                | -         |     9.00 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           43 |     1302 | 2024-05-08 | Take Flyte       | W   | 0.931      | -            | -                | -                | -         |     6.22 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           42 |     1304 | 2024-05-08 | Take Flyte       | W   | 0.931      | -            | -                | -                | -         |     6.57 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           41 |     1621 | 2024-04-23 | One More         | L   | 0.831      | -            | -                | -                | -         |   -21.86 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           40 |     1623 | 2024-04-23 | One More         | W   | 0.831      | -            | -                | -                | -         |     4.08 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           39 |     1809 | 2024-04-17 | Elevate          | L   | 0.791      | -            | -                | -                | -         |   -15.77 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           38 |     1813 | 2024-04-17 | Take Flyte       | W   | 0.790      | -            | -                | -                | -         |     5.08 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           37 |     1873 | 2024-04-15 | Limitless        | W   | 0.778      | -            | -                | -                | -         |     2.91 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           36 |     1874 | 2024-04-15 | Limitless        | W   | 0.778      | -            | -                | -                | -         |     2.99 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           35 |     1963 | 2024-04-10 | Elevate          | W   | 0.745      | -            | -                | -                | -         |     8.43 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           34 |     1969 | 2024-04-10 | Elevate          | W   | 0.744      | -            | -                | -                | -         |     8.97 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           33 |     2019 | 2024-04-09 | MIGHT            | W   | 0.738      | -            | -                | -                | -         |     2.02 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           32 |     2022 | 2024-04-09 | MIGHT            | W   | 0.738      | -            | -                | -                | -         |     2.06 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           31 |     2151 | 2024-04-04 | LAG              | L   | 0.705      | -            | -                | -                | -         |   -14.23 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           30 |     2156 | 2024-04-04 | LAG              | W   | 0.704      | -            | -                | -                | -         |     7.97 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           29 |     2195 | 2024-04-03 | Party Astronauts | L   | 0.698      | -            | -                | -                | -         |   -20.43 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           28 |     2245 | 2024-04-02 | BOSS             | W   | 0.692      | -            | -                | -                | -         |     5.73 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           27 |     2249 | 2024-04-02 | Party Astronauts | W   | 0.691      | -            | -                | -                | -         |    10.28 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           26 |     2325 | 2024-03-27 | NRG              | L   | 0.652      | -            | -                | -                | -         |   -13.59 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           25 |     2330 | 2024-03-27 | NRG              | W   | 0.651      | -            | -                | -                | -         |     6.96 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           24 |     2374 | 2024-03-26 | Party Astronauts | W   | 0.645      | 0.477        | 0.055 (0.017)    | 0.600 (0.185)    | -         |     9.71 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           23 |     2378 | 2024-03-26 | Party Astronauts | W   | 0.645      | -            | -                | -                | -         |    10.28 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           22 |     2457 | 2024-03-20 | Mythic           | L   | 0.605      | -            | -                | -                | -         |   -12.59 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           21 |     2462 | 2024-03-20 | Mythic           | W   | 0.605      | -            | -                | -                | -         |     6.50 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           20 |     2569 | 2024-03-14 | M80              | W   | 0.565      | 0.477        | 0.205 (0.055)    | -                | -         |    14.14 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           19 |     2572 | 2024-03-14 | M80              | W   | 0.565      | 0.477        | 0.205 (0.055)    | -                | -         |    14.59 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           18 |     2899 | 2024-03-02 | Legacy           | L   | 0.484      | -            | -                | -                | -         |    -5.39 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           17 |     2927 | 2024-03-01 | FURIA            | L   | 0.476      | -            | -                | -                | -         |    -0.37 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           16 |     2990 | 2024-02-26 | Liquid           | L   | 0.452      | -            | -                | -                | -         |    -0.33 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           15 |     3005 | 2024-02-25 | BOSS             | W   | 0.445      | -            | -                | -                | -         |     4.72 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           14 |     3009 | 2024-02-25 | Liquid           | W   | 0.444      | 0.143        | 0.498 (0.032)    | -                | -         |    13.71 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           13 |     3448 | 2024-02-03 | Wildcard         | L   | 0.298      | -            | -                | -                | -         |    -4.41 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           12 |     3509 | 2024-02-01 | BOSS             | W   | 0.285      | -            | -                | -                | -         |     3.10 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           11 |     3513 | 2024-02-01 | Elevate          | L   | 0.284      | -            | -                | -                | -         |    -5.37 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           10 |     3518 | 2024-02-01 | Rocket           | W   | 0.283      | -            | -                | -                | -         |     0.77 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            9 |     3856 | 2024-01-18 | Wildcard         | L   | 0.192      | -            | -                | -                | -         |    -2.98 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            8 |     3858 | 2024-01-18 | Rocket           | W   | 0.191      | -            | -                | -                | -         |     0.51 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            7 |     3860 | 2024-01-18 | Zomblers         | W   | 0.191      | -            | -                | -                | -         |     0.49 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            6 |     3915 | 2024-01-17 | Snakes Den       | W   | 0.184      | -            | -                | -                | -         |     0.46 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            5 |     4036 | 2024-01-14 | Carpe Diem       | W   | 0.165      | -            | -                | -                | -         |     1.47 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            4 |     4038 | 2024-01-14 | M80              | L   | 0.165      | -            | -                | -                | -         |    -0.76 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            3 |     4061 | 2024-01-13 | NRG              | W   | 0.158      | -            | -                | -                | -         |     1.94 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            2 |     4097 | 2024-01-12 | vagrants         | W   | 0.153      | -            | -                | -                | -         |     0.20 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            1 |     4110 | 2024-01-12 | Liquid           | L   | 0.151      | -            | -                | -                | -         |    -0.09 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,492.72)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-09 |      1.000 | $10,500.00     | $10,500.00      |
| 2024-05-24 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-18 |      0.998 | $4,000.00      | $3,992.72       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
