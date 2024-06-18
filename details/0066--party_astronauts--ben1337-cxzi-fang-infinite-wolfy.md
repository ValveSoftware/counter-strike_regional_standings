### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: ben1337, cxzi, FaNg, Infinite, WolfY<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [66](../standings_global.md)<br />
Regional Rank: [15]( ../standings_americas.md)<br />
Final Rank Value:  1033.0<br />
<br />
Final Rank Value (1033.0) = Starting Rank Value (983.5) + Head To Head Adjustments (49.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.443[<sup>1</sup>](#table2)
- Bounty Collected: 0.392[<sup>2</sup>](#table1)
- Opponent Network: 0.225[<sup>2</sup>](#table1)
- LAN Wins: 0.089[<sup>2</sup>](#table1)

The average of these factors is 0.287<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 983.5
- 400 + ( ( 0.287 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 983.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           74 |       66 | 2024-06-15 | Falcons       | L   | 1.000      | -            | -                | -                | -         |    -1.60 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           73 |      110 | 2024-06-14 | The MongolZ   | L   | 1.000      | -            | -                | -                | -         |    -0.28 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           72 |      220 | 2024-06-09 | Legacy        | L   | 1.000      | -            | -                | -                | -         |   -13.46 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           71 |      291 | 2024-06-08 | Wildcard      | W   | 1.000      | 0.384        | 0.068 (0.026)    | 0.572 (0.220)    | 0 (0.000) |    14.64 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           70 |      298 | 2024-06-08 | NRG           | L   | 1.000      | -            | -                | -                | -         |   -19.19 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           69 |      338 | 2024-06-07 | Nouns         | L   | 1.000      | -            | -                | -                | -         |   -16.08 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           68 |      347 | 2024-06-07 | Legacy        | W   | 1.000      | 0.143        | 0.146 (0.021)    | -                | 0 (0.000) |    17.68 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           67 |      354 | 2024-06-07 | NRG           | W   | 1.000      | 0.384        | -                | 0.507 (0.195)    | 0 (0.000) |    12.08 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           66 |      366 | 2024-06-07 | Nouns         | W   | 1.000      | 0.143        | 0.081 (0.012)    | -                | 0 (0.000) |    16.95 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           65 |      397 | 2024-06-06 | NRG           | W   | 1.000      | 0.477        | 0.024 (0.011)    | 0.507 (0.242)    | 0 (0.000) |    13.92 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           64 |      413 | 2024-06-06 | E-Xolos LAZER | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.68 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           63 |      467 | 2024-06-05 | Wildcard      | L   | 1.000      | -            | -                | -                | -         |   -15.11 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           62 |      516 | 2024-06-04 | Elevate       | W   | 1.000      | 0.477        | 0.031 (0.015)    | 0.481 (0.229)    | 0 (0.000) |    15.10 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           61 |      828 | 2024-05-22 | Nouns         | L   | 1.000      | -            | -                | -                | -         |   -14.74 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           60 |      838 | 2024-05-22 | M80           | W   | 1.000      | 0.477        | 0.205 (0.098)    | 0.666 (0.318)    | 0 (0.000) |    25.45 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           59 |      843 | 2024-05-22 | M80           | L   | 1.000      | -            | -                | -                | -         |    -5.55 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           58 |      876 | 2024-05-21 | Limitless     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.84 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           57 |      879 | 2024-05-21 | Limitless     | W   | 1.000      | -            | -                | -                | -         |     4.00 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           56 |      912 | 2024-05-20 | OMiT          | W   | 1.000      | -            | -                | -                | -         |     8.66 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           55 |      981 | 2024-05-18 | NRG           | L   | 0.997      | -            | -                | -                | -         |   -14.33 | ben1337, chop, cxzi, Infinite, WolfY |
|           54 |     1013 | 2024-05-17 | Legacy        | W   | 0.991      | 0.303        | 0.146 (0.044)    | -                | -         |    20.89 | ben1337, chop, cxzi, Infinite, WolfY |
|           53 |     1042 | 2024-05-16 | FLUFFY AIMERS | W   | 0.985      | -            | -                | -                | -         |     8.42 | ben1337, chop, cxzi, Infinite, WolfY |
|           52 |     1045 | 2024-05-16 | FLUFFY AIMERS | W   | 0.984      | -            | -                | -                | -         |     9.03 | ben1337, chop, cxzi, Infinite, WolfY |
|           51 |     1135 | 2024-05-14 | Mythic        | W   | 0.971      | -            | -                | -                | -         |    11.66 | ben1337, chop, cxzi, RUSH, WolfY     |
|           50 |     1143 | 2024-05-14 | Mythic        | L   | 0.971      | -            | -                | -                | -         |   -19.28 | ben1337, chop, cxzi, RUSH, WolfY     |
|           49 |     1236 | 2024-05-11 | BOSS          | L   | 0.950      | -            | -                | -                | -         |   -20.02 | ben1337, chop, cxzi, RUSH, WolfY     |
|           48 |     1242 | 2024-05-11 | Take Flyte    | L   | 0.949      | -            | -                | -                | -         |   -23.14 | ben1337, chop, cxzi, RUSH, WolfY     |
|           47 |     1298 | 2024-05-08 | LAG           | W   | 0.931      | 0.477        | -                | 0.421 (0.187)    | -         |    10.20 | ben1337, chop, cxzi, RUSH, WolfY     |
|           46 |     1303 | 2024-05-08 | LAG           | W   | 0.931      | 0.477        | -                | 0.421 (0.187)    | -         |    11.00 | ben1337, chop, cxzi, RUSH, WolfY     |
|           45 |     1323 | 2024-05-07 | Elevate       | L   | 0.925      | -            | -                | -                | -         |   -17.48 | ben1337, chop, cxzi, RUSH, WolfY     |
|           44 |     1324 | 2024-05-07 | Elevate       | W   | 0.925      | 0.477        | 0.031 (0.014)    | 0.481 (0.212)    | -         |    11.51 | ben1337, chop, cxzi, RUSH, WolfY     |
|           43 |     1342 | 2024-05-06 | NRG           | L   | 0.918      | -            | -                | -                | -         |   -17.80 | ben1337, chop, cxzi, RUSH, WolfY     |
|           42 |     1343 | 2024-05-06 | NRG           | W   | 0.918      | 0.477        | 0.024 (0.010)    | 0.507 (0.222)    | -         |    10.95 | ben1337, chop, cxzi, RUSH, WolfY     |
|           41 |     1414 | 2024-05-02 | Wildcard      | L   | 0.891      | -            | -                | -                | -         |   -15.50 | ben1337, chop, cxzi, RUSH, WolfY     |
|           40 |     1415 | 2024-05-02 | Wildcard      | W   | 0.891      | 0.477        | 0.068 (0.029)    | 0.572 (0.243)    | -         |    12.57 | ben1337, chop, cxzi, RUSH, WolfY     |
|           39 |     1551 | 2024-04-27 | Aurora        | L   | 0.853      | -            | -                | -                | -         |    -1.11 | ben1337, chop, cxzi, RUSH, WolfY     |
|           38 |     1553 | 2024-04-26 | sunday school | W   | 0.852      | -            | -                | -                | 1 (0.852) |     3.55 | ben1337, chop, cxzi, RUSH, WolfY     |
|           37 |     1579 | 2024-04-25 | Aurora        | L   | 0.844      | -            | -                | -                | -         |    -0.96 | ben1337, chop, cxzi, RUSH, WolfY     |
|           36 |     2018 | 2024-04-09 | One More      | W   | 0.738      | -            | -                | -                | -         |     3.85 | ben1337, chop, cxzi, RUSH, WolfY     |
|           35 |     2025 | 2024-04-09 | One More      | W   | 0.738      | -            | -                | -                | -         |     3.99 | ben1337, chop, cxzi, RUSH, WolfY     |
|           34 |     2149 | 2024-04-04 | MIGHT         | W   | 0.705      | -            | -                | -                | -         |     2.04 | ben1337, chop, cxzi, RUSH, WolfY     |
|           33 |     2157 | 2024-04-04 | MIGHT         | W   | 0.704      | -            | -                | -                | -         |     2.09 | ben1337, chop, cxzi, RUSH, WolfY     |
|           32 |     2246 | 2024-04-02 | Take Flyte    | W   | 0.692      | -            | -                | -                | -         |     4.86 | ben1337, chop, CLASIA, cxzi, WolfY   |
|           31 |     2249 | 2024-04-02 | Nouns         | L   | 0.691      | -            | -                | -                | -         |   -10.28 | ben1337, chop, CLASIA, cxzi, WolfY   |
|           30 |     2328 | 2024-03-27 | Carpe Diem    | W   | 0.652      | -            | -                | -                | -         |     4.75 | ben1337, chop, cxzi, RUSH, WolfY     |
|           29 |     2332 | 2024-03-27 | Carpe Diem    | W   | 0.651      | -            | -                | -                | -         |     4.96 | ben1337, chop, cxzi, RUSH, WolfY     |
|           28 |     2374 | 2024-03-26 | Nouns         | L   | 0.645      | -            | -                | -                | -         |    -9.71 | ben1337, chop, cxzi, RUSH, WolfY     |
|           27 |     2378 | 2024-03-26 | Nouns         | L   | 0.645      | -            | -                | -                | -         |   -10.28 | ben1337, chop, cxzi, RUSH, WolfY     |
|           26 |     2456 | 2024-03-20 | BOSS          | W   | 0.605      | -            | -                | -                | -         |     5.84 | ben1337, chop, cxzi, RUSH, WolfY     |
|           25 |     2460 | 2024-03-20 | BOSS          | W   | 0.605      | -            | -                | -                | -         |     6.12 | ben1337, chop, cxzi, RUSH, WolfY     |
|           24 |     2477 | 2024-03-19 | Take Flyte    | W   | 0.598      | -            | -                | -                | -         |     4.32 | ben1337, chop, cxzi, RUSH, WolfY     |
|           23 |     2480 | 2024-03-19 | Take Flyte    | W   | 0.598      | -            | -                | -                | -         |     4.49 | ben1337, chop, cxzi, RUSH, WolfY     |
|           22 |     2609 | 2024-03-13 | Carpe Diem    | W   | 0.557      | -            | -                | -                | -         |     4.68 | ben1337, chop, cxzi, RUSH, WolfY     |
|           21 |     2647 | 2024-03-12 | Elevate       | W   | 0.551      | -            | -                | -                | -         |     6.85 | ben1337, chop, cxzi, RUSH, WolfY     |
|           20 |     3027 | 2024-02-24 | Wildcard      | L   | 0.438      | -            | -                | -                | -         |    -6.86 | ben1337, chop, cxzi, Walco, WolfY    |
|           19 |     3034 | 2024-02-24 | ex-CatEvil    | W   | 0.437      | -            | -                | -                | -         |     0.52 | ben1337, chop, cxzi, Walco, WolfY    |
|           18 |     3069 | 2024-02-22 | Liquid        | L   | 0.425      | -            | -                | -                | -         |    -0.29 | ben1337, chop, cxzi, Walco, WolfY    |
|           17 |     3071 | 2024-02-22 | NRG           | W   | 0.424      | -            | -                | -                | -         |     5.27 | ben1337, chop, cxzi, Walco, WolfY    |
|           16 |     3076 | 2024-02-22 | One More      | W   | 0.424      | -            | -                | -                | -         |     2.78 | ben1337, chop, cxzi, Walco, WolfY    |
|           15 |     3123 | 2024-02-20 | NRG           | W   | 0.412      | -            | -                | -                | -         |     5.20 | ben1337, chop, cxzi, Walco, WolfY    |
|           14 |     3124 | 2024-02-20 | Mythic        | W   | 0.411      | -            | -                | -                | -         |     4.96 | ben1337, chop, cxzi, Walco, WolfY    |
|           13 |     3148 | 2024-02-19 | NRG           | L   | 0.406      | -            | -                | -                | -         |    -7.75 | ben1337, chop, cxzi, Walco, WolfY    |
|           12 |     3151 | 2024-02-19 | OMiT          | W   | 0.404      | -            | -                | -                | -         |     3.79 | ben1337, chop, cxzi, Walco, WolfY    |
|           11 |     3477 | 2024-02-02 | NRG           | L   | 0.291      | -            | -                | -                | -         |    -5.69 | ben1337, chop, cxzi, viz, WolfY      |
|           10 |     3479 | 2024-02-02 | Carpe Diem    | W   | 0.291      | -            | -                | -                | -         |     2.41 | ben1337, chop, cxzi, viz, WolfY      |
|            9 |     3483 | 2024-02-02 | NRG           | L   | 0.290      | -            | -                | -                | -         |    -5.75 | ben1337, chop, cxzi, viz, WolfY      |
|            8 |     3911 | 2024-01-17 | MIGHT         | L   | 0.184      | -            | -                | -                | -         |    -5.29 | ben1337, chop, cxzi, viz, WolfY      |
|            7 |     3965 | 2024-01-16 | Elevate       | L   | 0.177      | -            | -                | -                | -         |    -3.54 | ben1337, chop, cxzi, viz, WolfY      |
|            6 |     4011 | 2024-01-15 | Zomblers      | W   | 0.171      | -            | -                | -                | -         |     0.40 | ben1337, chop, cxzi, viz, WolfY      |
|            5 |     4034 | 2024-01-14 | Elevate       | L   | 0.166      | -            | -                | -                | -         |    -3.37 | ben1337, chop, cxzi, viz, WolfY      |
|            4 |     4041 | 2024-01-14 | Liquid        | L   | 0.164      | -            | -                | -                | -         |    -0.12 | ben1337, chop, cxzi, viz, WolfY      |
|            3 |     4060 | 2024-01-13 | Complexity    | L   | 0.158      | -            | -                | -                | -         |    -0.05 | ben1337, chop, cxzi, viz, WolfY      |
|            2 |     4102 | 2024-01-12 | Carpe Diem    | W   | 0.152      | -            | -                | -                | -         |     1.26 | ben1337, chop, cxzi, viz, WolfY      |
|            1 |     4107 | 2024-01-12 | Akimbo        | W   | 0.152      | -            | -                | -                | -         |     0.83 | ben1337, chop, cxzi, viz, WolfY      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,580.95)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-09 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-09 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-04-28 |      0.860 | $3,000.00      | $2,580.95       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
