### Roster Details<br />
Team Name: Legacy<br />
Roster: dumau, latto, lux, n1ssim, saadzin<br />
Global Rank: [27](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_02.md)<br />
Regional Rank: [5]( ../../standings_americas_2026_03_02.md)<br />
<br />
Final Rank Value:  1349.9<br />
<br />
Final Rank Value (1349.9) = Starting Rank Value (1361.3) + Head To Head Adjustments (-11.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.828[<sup>1</sup>](#table2)
- Bounty Collected: 0.515[<sup>2</sup>](#table1)
- Opponent Network: 0.176[<sup>2</sup>](#table1)
- LAN Wins: 0.514[<sup>2</sup>](#table1)

The average of these factors is 0.508<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1361.3
- 400 + ( ( 0.508 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1361.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |     1222 | 2026-01-29 | FUT          | L   | 0.987      | -            | -                | -                | -         |   -10.48 | dumau, latto, lux, n1ssim, saadzin |
|           35 |     1251 | 2026-01-28 | BC.Game      | L   | 0.980      | -            | -                | -                | -         |   -14.01 | dumau, latto, lux, n1ssim, saadzin |
|           34 |     1559 | 2026-01-17 | MIBR         | L   | 0.910      | -            | -                | -                | -         |   -14.26 | dumau, latto, lux, n1ssim, saadzin |
|           33 |     1612 | 2026-01-16 | Sharks       | L   | 0.903      | -            | -                | -                | -         |   -15.05 | dumau, latto, lux, n1ssim, saadzin |
|           32 |     1673 | 2026-01-15 | MIBR         | W   | 0.896      | 0.435        | 0.153 (0.060)    | 0.666 (0.259)    | 1 (0.896) |    14.20 | dumau, latto, lux, n1ssim, saadzin |
|           31 |     1704 | 2026-01-14 | GameHunters  | W   | 0.889      | 0.435        | -                | 0.395 (0.153)    | 1 (0.889) |     0.72 | dumau, latto, lux, n1ssim, saadzin |
|           30 |     2346 | 2025-11-27 | PARIVISION   | L   | 0.568      | -            | -                | -                | -         |    -0.93 | dumau, latto, lux, n1ssim, saadzin |
|           29 |     2362 | 2025-11-26 | B8           | L   | 0.560      | -            | -                | -                | -         |    -8.93 | dumau, latto, lux, n1ssim, saadzin |
|           28 |     2387 | 2025-11-25 | RED Canids   | W   | 0.553      | 0.624        | -                | 0.676 (0.233)    | 1 (0.553) |     5.36 | dumau, latto, lux, n1ssim, saadzin |
|           27 |     2409 | 2025-11-24 | Rare Atom    | W   | 0.547      | 0.624        | -                | 0.280 (0.096)    | 1 (0.547) |     1.56 | dumau, latto, lux, n1ssim, saadzin |
|           26 |     2423 | 2025-11-24 | FlyQuest     | L   | 0.546      | -            | -                | -                | -         |   -10.84 | dumau, latto, lux, n1ssim, saadzin |
|           25 |     3138 | 2025-11-01 | Aurora       | L   | 0.394      | -            | -                | -                | -         |    -1.60 | dumau, latto, lux, n1ssim, saadzin |
|           24 |     3163 | 2025-10-31 | BC.Game      | W   | 0.387      | 1.000        | 0.224 (0.087)    | 0.521 (0.201)    | 1 (0.387) |     7.56 | dumau, latto, lux, n1ssim, saadzin |
|           23 |     3172 | 2025-10-31 | paiN         | W   | 0.386      | 1.000        | 0.369 (0.143)    | -                | 1 (0.386) |     4.49 | dumau, latto, lux, n1ssim, saadzin |
|           22 |     3195 | 2025-10-30 | FlyQuest     | W   | 0.379      | 1.000        | -                | 0.360 (0.136)    | 1 (0.379) |     4.59 | dumau, latto, lux, n1ssim, saadzin |
|           21 |     3209 | 2025-10-29 | B8           | L   | 0.373      | -            | -                | -                | -         |    -6.16 | dumau, latto, lux, n1ssim, saadzin |
|           20 |     3248 | 2025-10-28 | Astralis     | W   | 0.365      | 1.000        | 0.468 (0.171)    | 0.375 (0.137)    | 1 (0.365) |     9.00 | dumau, latto, lux, n1ssim, saadzin |
|           19 |     3292 | 2025-10-27 | Gentle Mates | W   | 0.358      | 1.000        | 0.206 (0.074)    | 0.686 (0.246)    | 1 (0.358) |     6.99 | dumau, latto, lux, n1ssim, saadzin |
|           18 |     3349 | 2025-10-26 | Liquid       | L   | 0.352      | -            | -                | -                | -         |    -5.59 | dumau, latto, lux, n1ssim, saadzin |
|           17 |     3574 | 2025-10-19 | 3DMAX        | W   | 0.305      | 1.000        | 0.401 (0.122)    | -                | 1 (0.305) |     5.97 | dumau, latto, lux, n1ssim, saadzin |
|           16 |     3596 | 2025-10-18 | HEROIC       | W   | 0.298      | 1.000        | 0.443 (0.132)    | 0.433 (0.129)    | -         |     6.07 | dumau, latto, lux, n1ssim, saadzin |
|           15 |     3623 | 2025-10-17 | FUT          | W   | 0.292      | 1.000        | 0.369 (0.108)    | 0.578 (0.169)    | -         |     6.76 | dumau, latto, lux, n1ssim, saadzin |
|           14 |     3662 | 2025-10-16 | Liquid       | L   | 0.284      | -            | -                | -                | -         |    -4.44 | dumau, latto, lux, n1ssim, saadzin |
|           13 |     3720 | 2025-10-14 | 3DMAX        | W   | 0.273      | 1.000        | 0.401 (0.109)    | -                | -         |     5.47 | dumau, latto, lux, n1ssim, saadzin |
|           12 |     3733 | 2025-10-13 | Virtus.pro   | W   | 0.270      | -            | -                | -                | -         |     0.60 | dumau, latto, lux, n1ssim, saadzin |
|           11 |     4206 | 2025-10-02 | Astralis     | L   | 0.193      | -            | -                | -                | -         |    -1.11 | dumau, latto, lux, n1ssim, saadzin |
|           10 |     4240 | 2025-10-01 | Gentle Mates | L   | 0.187      | -            | -                | -                | -         |    -2.10 | dumau, latto, lux, n1ssim, saadzin |
|            9 |     4274 | 2025-09-30 | FURIA        | W   | 0.180      | 0.769        | 1.000 (0.139)    | -                | -         |     5.45 | dumau, latto, lux, n1ssim, saadzin |
|            8 |     4320 | 2025-09-29 | NRG          | W   | 0.173      | -            | -                | -                | -         |     2.70 | dumau, latto, lux, n1ssim, saadzin |
|            7 |     4361 | 2025-09-28 | B8           | L   | 0.166      | -            | -                | -                | -         |    -2.56 | dumau, latto, lux, n1ssim, saadzin |
|            6 |     4758 | 2025-09-16 | Astralis     | L   | 0.087      | -            | -                | -                | -         |    -0.49 | dumau, latto, lux, n1ssim, saadzin |
|            5 |     4788 | 2025-09-15 | G2           | L   | 0.080      | -            | -                | -                | -         |    -0.59 | dumau, latto, lux, n1ssim, saadzin |
|            4 |     4835 | 2025-09-14 | Falcons      | L   | 0.072      | -            | -                | -                | -         |    -0.14 | dumau, latto, lux, n1ssim, saadzin |
|            3 |     4897 | 2025-09-13 | HEROIC       | W   | 0.065      | -            | -                | -                | -         |     1.35 | dumau, latto, lux, n1ssim, saadzin |
|            2 |     4971 | 2025-09-11 | Imperial     | L   | 0.054      | -            | -                | -                | -         |    -1.08 | dumau, latto, lux, n1ssim, saadzin |
|            1 |     5074 | 2025-09-09 | JiJieHao     | W   | 0.040      | -            | -                | -                | -         |     0.12 | dumau, latto, lux, n1ssim, saadzin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($207,140.23)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.62) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-30 |      0.994 | $2,500.00      | $2,485.19       |
| 2026-01-18 |      0.916 | $6,250.00      | $5,726.02       |
| 2025-11-01 |      0.394 | $187,500.00    | $73,806.38      |
| 2025-10-19 |      0.305 | $400,000.00    | $122,046.08     |
| 2025-10-02 |      0.194 | $6,500.00      | $1,261.55       |
| 2025-09-21 |      0.121 | $15,000.00     | $1,815.01       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
