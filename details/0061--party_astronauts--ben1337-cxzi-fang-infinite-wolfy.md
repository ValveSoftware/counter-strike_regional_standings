### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: ben1337, cxzi, FaNg, Infinite, WolfY<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [61](../standings_global.md)<br />
Regional Rank: [15]( ../standings_americas.md)<br />
Final Rank Value:  1041.1<br />
<br />
Final Rank Value (1041.1) = Starting Rank Value (994.4) + Head To Head Adjustments (46.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.453[<sup>1</sup>](#table2)
- Bounty Collected: 0.390[<sup>2</sup>](#table1)
- Opponent Network: 0.204[<sup>2</sup>](#table1)
- LAN Wins: 0.081[<sup>2</sup>](#table1)

The average of these factors is 0.282<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 994.4
- 400 + ( ( 0.282 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 994.4


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
|           72 |      202 | 2024-06-15 | Falcons       | L   | 1.000      | -            | -                | -                | -         |    -1.76 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           71 |      246 | 2024-06-14 | The MongolZ   | L   | 1.000      | -            | -                | -                | -         |    -0.23 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           70 |      356 | 2024-06-09 | Legacy        | L   | 0.989      | -            | -                | -                | -         |   -13.81 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           69 |      427 | 2024-06-08 | Wildcard      | W   | 0.981      | 0.384        | 0.073 (0.027)    | 0.569 (0.215)    | 0 (0.000) |    14.01 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           68 |      434 | 2024-06-08 | NRG           | L   | 0.981      | -            | -                | -                | -         |   -19.05 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           67 |      474 | 2024-06-07 | Nouns         | L   | 0.976      | -            | -                | -                | -         |   -15.59 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           66 |      483 | 2024-06-07 | Legacy        | W   | 0.974      | 0.143        | 0.160 (0.022)    | -                | 0 (0.000) |    16.69 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           65 |      490 | 2024-06-07 | NRG           | W   | 0.974      | 0.384        | 0.026 (0.010)    | 0.478 (0.179)    | 0 (0.000) |    11.53 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           64 |      502 | 2024-06-07 | Nouns         | W   | 0.973      | 0.143        | 0.086 (0.012)    | -                | 0 (0.000) |    16.43 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           63 |      533 | 2024-06-06 | NRG           | W   | 0.969      | 0.477        | 0.026 (0.012)    | 0.478 (0.221)    | 0 (0.000) |    13.17 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           62 |      549 | 2024-06-06 | E-Xolos LAZER | W   | 0.967      | -            | -                | -                | 0 (0.000) |     5.60 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           61 |      603 | 2024-06-05 | Wildcard      | L   | 0.962      | -            | -                | -                | -         |   -15.10 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           60 |      652 | 2024-06-04 | Elevate       | W   | 0.956      | 0.477        | 0.041 (0.019)    | 0.596 (0.272)    | 0 (0.000) |    16.39 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           59 |      962 | 2024-05-22 | Nouns         | L   | 0.869      | -            | -                | -                | -         |   -12.88 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           58 |      972 | 2024-05-22 | M80           | W   | 0.868      | 0.477        | 0.218 (0.090)    | 0.649 (0.269)    | 0 (0.000) |    21.96 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           57 |      977 | 2024-05-22 | M80           | L   | 0.868      | -            | -                | -                | -         |    -5.09 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           56 |     1010 | 2024-05-21 | Limitless     | W   | 0.863      | -            | -                | -                | 0 (0.000) |     3.33 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           55 |     1013 | 2024-05-21 | Limitless     | W   | 0.862      | -            | -                | -                | -         |     3.44 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           54 |     1046 | 2024-05-20 | OMiT          | W   | 0.856      | -            | -                | -                | -         |     7.26 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           53 |     1115 | 2024-05-18 | NRG           | L   | 0.841      | -            | -                | -                | -         |   -13.14 | ben1337, chop, cxzi, Infinite, WolfY |
|           52 |     1147 | 2024-05-17 | Legacy        | W   | 0.835      | 0.303        | 0.160 (0.040)    | -                | -         |    16.82 | ben1337, chop, cxzi, Infinite, WolfY |
|           51 |     1176 | 2024-05-16 | FLUFFY AIMERS | W   | 0.829      | -            | -                | -                | -         |     6.80 | ben1337, chop, cxzi, Infinite, WolfY |
|           50 |     1179 | 2024-05-16 | FLUFFY AIMERS | W   | 0.829      | -            | -                | -                | -         |     7.20 | ben1337, chop, cxzi, Infinite, WolfY |
|           49 |     1269 | 2024-05-14 | Mythic        | W   | 0.816      | -            | -                | -                | -         |     9.19 | ben1337, chop, cxzi, RUSH, WolfY     |
|           48 |     1277 | 2024-05-14 | Mythic        | L   | 0.815      | -            | -                | -                | -         |   -16.91 | ben1337, chop, cxzi, RUSH, WolfY     |
|           47 |     1370 | 2024-05-11 | BOSS          | L   | 0.794      | -            | -                | -                | -         |   -17.46 | ben1337, chop, cxzi, RUSH, WolfY     |
|           46 |     1376 | 2024-05-11 | Take Flyte    | L   | 0.794      | -            | -                | -                | -         |   -19.73 | ben1337, chop, cxzi, RUSH, WolfY     |
|           45 |     1432 | 2024-05-08 | LAG           | W   | 0.776      | 0.477        | -                | 0.396 (0.147)    | -         |     8.13 | ben1337, chop, cxzi, RUSH, WolfY     |
|           44 |     1437 | 2024-05-08 | LAG           | W   | 0.775      | 0.477        | -                | 0.396 (0.146)    | -         |     8.64 | ben1337, chop, cxzi, RUSH, WolfY     |
|           43 |     1457 | 2024-05-07 | Elevate       | L   | 0.769      | -            | -                | -                | -         |   -11.47 | ben1337, chop, cxzi, RUSH, WolfY     |
|           42 |     1458 | 2024-05-07 | Elevate       | W   | 0.769      | 0.477        | 0.041 (0.015)    | 0.596 (0.218)    | -         |    13.00 | ben1337, chop, cxzi, RUSH, WolfY     |
|           41 |     1476 | 2024-05-06 | NRG           | L   | 0.762      | -            | -                | -                | -         |   -15.28 | ben1337, chop, cxzi, RUSH, WolfY     |
|           40 |     1477 | 2024-05-06 | NRG           | W   | 0.762      | 0.477        | -                | 0.478 (0.174)    | -         |     8.70 | ben1337, chop, cxzi, RUSH, WolfY     |
|           39 |     1548 | 2024-05-02 | Wildcard      | L   | 0.735      | -            | -                | -                | -         |   -13.25 | ben1337, chop, cxzi, RUSH, WolfY     |
|           38 |     1549 | 2024-05-02 | Wildcard      | W   | 0.735      | 0.477        | 0.073 (0.025)    | 0.569 (0.199)    | -         |    10.01 | ben1337, chop, cxzi, RUSH, WolfY     |
|           37 |     1685 | 2024-04-27 | Aurora        | L   | 0.698      | -            | -                | -                | -         |    -0.78 | ben1337, chop, cxzi, RUSH, WolfY     |
|           36 |     1687 | 2024-04-26 | sunday school | W   | 0.696      | -            | -                | -                | 1 (0.696) |     2.73 | ben1337, chop, cxzi, RUSH, WolfY     |
|           35 |     1713 | 2024-04-25 | Aurora        | L   | 0.689      | -            | -                | -                | -         |    -0.69 | ben1337, chop, cxzi, RUSH, WolfY     |
|           34 |     2152 | 2024-04-09 | One More      | W   | 0.582      | -            | -                | -                | -         |     3.00 | ben1337, chop, cxzi, RUSH, WolfY     |
|           33 |     2159 | 2024-04-09 | One More      | W   | 0.582      | -            | -                | -                | -         |     3.08 | ben1337, chop, cxzi, RUSH, WolfY     |
|           32 |     2283 | 2024-04-04 | MIGHT         | W   | 0.549      | -            | -                | -                | -         |     1.36 | ben1337, chop, cxzi, RUSH, WolfY     |
|           31 |     2291 | 2024-04-04 | MIGHT         | W   | 0.549      | -            | -                | -                | -         |     1.38 | ben1337, chop, cxzi, RUSH, WolfY     |
|           30 |     2380 | 2024-04-02 | Take Flyte    | W   | 0.536      | -            | -                | -                | -         |     3.61 | ben1337, chop, CLASIA, cxzi, WolfY   |
|           29 |     2383 | 2024-04-02 | Nouns         | L   | 0.535      | -            | -                | -                | -         |    -8.34 | ben1337, chop, CLASIA, cxzi, WolfY   |
|           28 |     2461 | 2024-03-27 | Carpe Diem    | W   | 0.496      | -            | -                | -                | -         |     3.68 | ben1337, chop, cxzi, RUSH, WolfY     |
|           27 |     2465 | 2024-03-27 | Carpe Diem    | W   | 0.496      | -            | -                | -                | -         |     3.80 | ben1337, chop, cxzi, RUSH, WolfY     |
|           26 |     2507 | 2024-03-26 | Nouns         | L   | 0.489      | -            | -                | -                | -         |    -7.70 | ben1337, chop, cxzi, RUSH, WolfY     |
|           25 |     2511 | 2024-03-26 | Nouns         | L   | 0.489      | -            | -                | -                | -         |    -8.04 | ben1337, chop, cxzi, RUSH, WolfY     |
|           24 |     2589 | 2024-03-20 | BOSS          | W   | 0.449      | -            | -                | -                | -         |     3.93 | ben1337, chop, cxzi, RUSH, WolfY     |
|           23 |     2593 | 2024-03-20 | BOSS          | W   | 0.449      | -            | -                | -                | -         |     4.06 | ben1337, chop, cxzi, RUSH, WolfY     |
|           22 |     2610 | 2024-03-19 | Take Flyte    | W   | 0.443      | -            | -                | -                | -         |     3.02 | ben1337, chop, cxzi, RUSH, WolfY     |
|           21 |     2613 | 2024-03-19 | Take Flyte    | W   | 0.443      | -            | -                | -                | -         |     3.10 | ben1337, chop, cxzi, RUSH, WolfY     |
|           20 |     2742 | 2024-03-13 | Carpe Diem    | W   | 0.401      | -            | -                | -                | -         |     3.21 | ben1337, chop, cxzi, RUSH, WolfY     |
|           19 |     2780 | 2024-03-12 | Elevate       | W   | 0.395      | -            | -                | -                | -         |     7.45 | ben1337, chop, cxzi, RUSH, WolfY     |
|           18 |     3160 | 2024-02-24 | Wildcard      | L   | 0.282      | -            | -                | -                | -         |    -4.85 | ben1337, chop, cxzi, Walco, WolfY    |
|           17 |     3167 | 2024-02-24 | ex-CatEvil    | W   | 0.282      | -            | -                | -                | -         |     0.30 | ben1337, chop, cxzi, Walco, WolfY    |
|           16 |     3202 | 2024-02-22 | Liquid        | L   | 0.270      | -            | -                | -                | -         |    -0.26 | ben1337, chop, cxzi, Walco, WolfY    |
|           15 |     3204 | 2024-02-22 | NRG           | W   | 0.269      | -            | -                | -                | -         |     3.10 | ben1337, chop, cxzi, Walco, WolfY    |
|           14 |     3209 | 2024-02-22 | One More      | W   | 0.268      | -            | -                | -                | -         |     1.63 | ben1337, chop, cxzi, Walco, WolfY    |
|           13 |     3256 | 2024-02-20 | NRG           | W   | 0.256      | -            | -                | -                | -         |     2.98 | ben1337, chop, cxzi, Walco, WolfY    |
|           12 |     3257 | 2024-02-20 | Mythic        | W   | 0.255      | -            | -                | -                | -         |     2.79 | ben1337, chop, cxzi, Walco, WolfY    |
|           11 |     3281 | 2024-02-19 | NRG           | L   | 0.250      | -            | -                | -                | -         |    -5.02 | ben1337, chop, cxzi, Walco, WolfY    |
|           10 |     3284 | 2024-02-19 | OMiT          | W   | 0.248      | -            | -                | -                | -         |     2.17 | ben1337, chop, cxzi, Walco, WolfY    |
|            9 |     3610 | 2024-02-02 | NRG           | L   | 0.136      | -            | -                | -                | -         |    -2.76 | ben1337, chop, cxzi, viz, WolfY      |
|            8 |     3612 | 2024-02-02 | Carpe Diem    | W   | 0.135      | -            | -                | -                | -         |     1.08 | ben1337, chop, cxzi, viz, WolfY      |
|            7 |     3616 | 2024-02-02 | NRG           | L   | 0.135      | -            | -                | -                | -         |    -2.76 | ben1337, chop, cxzi, viz, WolfY      |
|            6 |     4044 | 2024-01-17 | MIGHT         | L   | 0.029      | -            | -                | -                | -         |    -0.83 | ben1337, chop, cxzi, viz, WolfY      |
|            5 |     4098 | 2024-01-16 | Elevate       | L   | 0.022      | -            | -                | -                | -         |    -0.27 | ben1337, chop, cxzi, viz, WolfY      |
|            4 |     4144 | 2024-01-15 | Zomblers      | W   | 0.015      | -            | -                | -                | -         |     0.04 | ben1337, chop, cxzi, viz, WolfY      |
|            3 |     4167 | 2024-01-14 | Elevate       | L   | 0.010      | -            | -                | -                | -         |    -0.13 | ben1337, chop, cxzi, viz, WolfY      |
|            2 |     4174 | 2024-01-14 | Liquid        | L   | 0.009      | -            | -                | -                | -         |    -0.01 | ben1337, chop, cxzi, viz, WolfY      |
|            1 |     4193 | 2024-01-13 | Complexity    | L   | 0.002      | -            | -                | -                | -         |    -0.00 | ben1337, chop, cxzi, viz, WolfY      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,984.51)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-09 |      0.989 | $5,000.00      | $4,946.71       |
| 2024-06-09 |      0.989 | $7,000.00      | $6,923.87       |
| 2024-04-28 |      0.705 | $3,000.00      | $2,113.93       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
