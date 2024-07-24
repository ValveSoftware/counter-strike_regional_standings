### Roster Details<br />
Team Name: ECLOT<br />
Roster: Dytor, forsyy, kreaz, nbqq, Olik<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [51](../standings_global.md)<br />
Regional Rank: [38]( ../standings_europe.md)<br />
Final Rank Value:  1053.6<br />
<br />
Final Rank Value (1053.6) = Starting Rank Value (1151.6) + Head To Head Adjustments (-98.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.482[<sup>1</sup>](#table2)
- Bounty Collected: 0.369[<sup>2</sup>](#table1)
- Opponent Network: 0.216[<sup>2</sup>](#table1)
- LAN Wins: 0.418[<sup>2</sup>](#table1)

The average of these factors is 0.371<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1151.6
- 400 + ( ( 0.371 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1151.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           53 |      348 | 2024-07-16 | FAVBET          | L   | 1.000      | -            | -                | -                | -         |   -24.00 | Dytor, forsyy, kreaz, nbqq, Olik  |
|           52 |      406 | 2024-07-14 | Kosovo          | L   | 1.000      | -            | -                | -                | -         |   -24.07 | Dytor, forsyy, nbqq, NEOFRAG, PR  |
|           51 |      417 | 2024-07-14 | Kosovo          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.40 | Dytor, forsyy, nbqq, NEOFRAG, PR  |
|           50 |      422 | 2024-07-13 | ALTERNATE aTTaX | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.24 | Dytor, forsyy, K1-FiDa, nbqq, PR  |
|           49 |      516 | 2024-07-08 | Hungary         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.70 | Dytor, forsyy, K1-FiDa, nbqq, PR  |
|           48 |      689 | 2024-06-14 | 5W              | L   | 0.932      | -            | -                | -                | -         |   -19.01 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           47 |      760 | 2024-06-11 | PERA            | L   | 0.914      | -            | -                | -                | -         |   -19.85 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           46 |      844 | 2024-06-09 | Enterprise      | W   | 0.899      | 0.450        | 0.050 (0.020)    | 0.646 (0.261)    | 0 (0.000) |     6.93 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           45 |      914 | 2024-06-08 | MOUZ NXT        | W   | 0.892      | 0.450        | 0.169 (0.068)    | 1.000 (0.402)    | -         |    13.90 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           44 |      974 | 2024-06-07 | GhoulsW         | W   | 0.885      | -            | -                | -                | -         |     0.54 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           43 |     1002 | 2024-06-06 | GamerLegion     | L   | 0.880      | -            | -                | -                | -         |   -10.15 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           42 |     1174 | 2024-06-02 | UNiTY           | W   | 0.853      | 0.346        | 0.032 (0.010)    | -                | 1 (0.853) |     9.27 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           41 |     1205 | 2024-06-01 | UNiTY           | W   | 0.846      | 0.346        | 0.032 (0.010)    | -                | 1 (0.846) |     9.71 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           40 |     1235 | 2024-05-31 | Sampi           | W   | 0.840      | 0.346        | 0.037 (0.011)    | 0.994 (0.289)    | 1 (0.840) |     7.22 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           39 |     1360 | 2024-05-26 | Permitta        | L   | 0.804      | -            | -                | -                | -         |   -18.76 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           38 |     1450 | 2024-05-22 | Preasy          | L   | 0.779      | -            | -                | -                | -         |   -20.96 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           37 |     1789 | 2024-05-13 | Johnny Speeds   | L   | 0.718      | -            | -                | -                | -         |    -6.23 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           36 |     1859 | 2024-05-10 | Verdant         | W   | 0.698      | -            | -                | -                | -         |     6.05 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           35 |     2052 | 2024-04-30 | MOUZ NXT        | L   | 0.634      | -            | -                | -                | -         |   -12.24 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           34 |     2080 | 2024-04-29 | 1WIN            | W   | 0.626      | 0.500        | 0.035 (0.011)    | 0.542 (0.170)    | -         |     4.73 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           33 |     2116 | 2024-04-27 | MOUZ NXT        | L   | 0.614      | -            | -                | -                | -         |   -12.32 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           32 |     2185 | 2024-04-25 | Sampi           | W   | 0.598      | 0.371        | 0.037 (0.008)    | 0.994 (0.220)    | -         |     4.82 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           31 |     2224 | 2024-04-23 | Sampi           | W   | 0.585      | 0.371        | -                | 0.994 (0.215)    | -         |     4.70 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           30 |     2256 | 2024-04-21 | MOUZ NXT        | W   | 0.572      | 0.371        | 0.169 (0.036)    | 1.000 (0.212)    | -         |     7.22 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           29 |     2340 | 2024-04-19 | SINNERS         | W   | 0.557      | 0.371        | 0.048 (0.010)    | 0.769 (0.159)    | -         |     7.80 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           28 |     2418 | 2024-04-17 | Alliance        | W   | 0.545      | -            | -                | -                | -         |     3.47 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           27 |     2474 | 2024-04-15 | Astralis Talent | W   | 0.531      | -            | -                | -                | -         |     2.37 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           26 |     2644 | 2024-04-09 | ALTERNATE aTTaX | L   | 0.492      | -            | -                | -                | -         |   -10.70 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           25 |     2732 | 2024-04-05 | UNiTY           | L   | 0.465      | -            | -                | -                | -         |   -10.02 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           24 |     2780 | 2024-04-04 | PGE Turow       | W   | 0.458      | -            | -                | -                | -         |     1.03 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           23 |     2821 | 2024-04-03 | Permitta        | W   | 0.452      | 0.333        | -                | 0.790 (0.119)    | -         |     3.88 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           22 |     3102 | 2024-03-17 | SINNERS         | W   | 0.340      | -            | -                | -                | 1 (0.340) |     4.17 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           21 |     3124 | 2024-03-16 | UNiTY           | W   | 0.333      | -            | -                | -                | 1 (0.333) |     3.56 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           20 |     3145 | 2024-03-15 | Sampi           | W   | 0.326      | 0.345        | -                | 0.994 (0.112)    | 1 (0.326) |     2.56 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           19 |     3150 | 2024-03-15 | Sashi           | L   | 0.325      | -            | -                | -                | -         |    -5.13 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           18 |     3215 | 2024-03-13 | Permitta        | L   | 0.312      | -            | -                | -                | -         |    -7.10 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           17 |     3229 | 2024-03-13 | Permitta        | L   | 0.311      | -            | -                | -                | -         |    -7.23 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           16 |     3273 | 2024-03-11 | Entropiq        | L   | 0.298      | -            | -                | -                | -         |    -8.99 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           15 |     3291 | 2024-03-10 | Zero Tenacity   | L   | 0.292      | -            | -                | -                | -         |    -5.30 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           14 |     3434 | 2024-03-05 | 9INE            | W   | 0.258      | -            | -                | -                | -         |     0.21 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           13 |     3478 | 2024-03-03 | Metizport       | W   | 0.246      | -            | -                | -                | -         |     1.74 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           12 |     3519 | 2024-03-01 | Viperio         | W   | 0.231      | -            | -                | -                | -         |     0.11 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           11 |     3546 | 2024-02-28 | Permitta        | W   | 0.218      | -            | -                | -                | -         |     1.69 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           10 |     3565 | 2024-02-27 | MOUZ NXT        | W   | 0.212      | 0.333        | 0.169 (0.012)    | -                | -         |     2.58 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            9 |     3566 | 2024-02-27 | ex-sYnck        | W   | 0.212      | -            | -                | -                | -         |     0.17 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            8 |     3584 | 2024-02-26 | PGE Turow       | W   | 0.205      | -            | -                | -                | -         |     0.42 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            7 |     3606 | 2024-02-25 | Sampi           | W   | 0.198      | -            | -                | -                | -         |     1.31 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            6 |     3641 | 2024-02-24 | Permitta        | L   | 0.192      | -            | -                | -                | -         |    -4.58 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            5 |     3668 | 2024-02-22 | BIG Academy     | W   | 0.179      | -            | -                | -                | -         |     0.08 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            4 |     3702 | 2024-02-21 | Permitta        | W   | 0.171      | -            | -                | -                | -         |     1.30 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            3 |     3722 | 2024-02-20 | NAVI Junior     | W   | 0.166      | -            | -                | -                | -         |     0.39 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            2 |     3749 | 2024-02-19 | Permitta        | L   | 0.159      | -            | -                | -                | -         |    -3.82 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            1 |     4155 | 2024-01-30 | ex-Sprout       | L   | 0.026      | -            | -                | -                | -         |    -0.81 | Blytz, Dytor, forsyy, kreaz, nbqq |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,313.48)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      0.952 | $2,500.00      | $2,380.66       |
| 2024-06-13 |      0.927 | $545.00        | $505.45         |
| 2024-06-02 |      0.853 | $7,837.00      | $6,684.27       |
| 2024-05-13 |      0.718 | $3,000.00      | $2,153.62       |
| 2024-04-25 |      0.598 | $11,000.00     | $6,580.74       |
| 2024-04-06 |      0.471 | $1,500.00      | $706.56         |
| 2024-03-17 |      0.340 | $7,675.00      | $2,612.49       |
| 2024-02-28 |      0.218 | $5,000.00      | $1,090.59       |
| 2024-02-21 |      0.171 | $3,500.00      | $599.10         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
