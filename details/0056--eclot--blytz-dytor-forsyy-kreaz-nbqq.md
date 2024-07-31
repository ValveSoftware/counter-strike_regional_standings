### Roster Details<br />
Team Name: ECLOT<br />
Roster: Blytz, Dytor, forsyy, kreaz, nbqq<br />
Global Rank: [56](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [41]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1024.8<br />
<br />
Final Rank Value (1024.8) = Starting Rank Value (1115.0) + Head To Head Adjustments (-90.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.457[<sup>1</sup>](#table2)
- Bounty Collected: 0.353[<sup>2</sup>](#table1)
- Opponent Network: 0.201[<sup>2</sup>](#table1)
- LAN Wins: 0.374[<sup>2</sup>](#table1)

The average of these factors is 0.346<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1115.0
- 400 + ( ( 0.346 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1115.0


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
|           55 |       59 | 2024-07-30 | 1WIN            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    13.52 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           54 |       98 | 2024-07-29 | DASH            | L   | 1.000      | -            | -                | -                | -         |   -29.19 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           53 |      214 | 2024-07-25 | HAVU            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.48 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           52 |      590 | 2024-07-16 | FAVBET          | L   | 1.000      | -            | -                | -                | -         |   -23.71 | Dytor, forsyy, kreaz, nbqq, olik  |
|           51 |      648 | 2024-07-14 | Kosovo          | L   | 1.000      | -            | -                | -                | -         |   -23.82 | Dytor, forsyy, nbqq, NEOFRAG, PR  |
|           50 |      659 | 2024-07-14 | Kosovo          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.62 | Dytor, forsyy, nbqq, NEOFRAG, PR  |
|           49 |      664 | 2024-07-13 | ALTERNATE aTTaX | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.73 | Dytor, forsyy, K1-FiDa, nbqq, PR  |
|           48 |      758 | 2024-07-08 | Hungary         | W   | 1.000      | -            | -                | -                | -         |     5.88 | Dytor, forsyy, K1-FiDa, nbqq, PR  |
|           47 |      931 | 2024-06-14 | 5W              | L   | 0.885      | -            | -                | -                | -         |   -17.43 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           46 |     1002 | 2024-06-11 | PERA            | L   | 0.866      | -            | -                | -                | -         |   -18.55 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           45 |     1086 | 2024-06-09 | Enterprise      | W   | 0.851      | 0.450        | 0.040 (0.015)    | 0.622 (0.238)    | -         |     6.92 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           44 |     1156 | 2024-06-08 | MOUZ NXT        | W   | 0.845      | 0.450        | 0.141 (0.054)    | 1.000 (0.380)    | -         |    14.02 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           43 |     1216 | 2024-06-07 | GhoulsW         | W   | 0.837      | -            | -                | -                | -         |     0.58 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           42 |     1244 | 2024-06-06 | GamerLegion     | L   | 0.833      | -            | -                | -                | -         |    -9.56 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           41 |     1416 | 2024-06-02 | UNiTY           | W   | 0.806      | 0.346        | 0.025 (0.007)    | -                | 1 (0.806) |     8.82 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           40 |     1447 | 2024-06-01 | UNiTY           | W   | 0.799      | 0.346        | 0.025 (0.007)    | -                | 1 (0.799) |     9.17 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           39 |     1477 | 2024-05-31 | Sampi           | W   | 0.793      | 0.346        | 0.028 (0.008)    | 1.000 (0.274)    | 1 (0.793) |     7.24 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           38 |     1602 | 2024-05-26 | Permitta        | L   | 0.757      | -            | -                | -                | -         |   -17.22 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           37 |     1692 | 2024-05-22 | Preasy          | L   | 0.731      | -            | -                | -                | -         |   -19.48 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           36 |     2031 | 2024-05-13 | Johnny Speeds   | L   | 0.671      | -            | -                | -                | -         |    -5.75 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           35 |     2101 | 2024-05-10 | Verdant         | W   | 0.651      | -            | -                | -                | -         |     6.03 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           34 |     2294 | 2024-04-30 | MOUZ NXT        | L   | 0.587      | -            | -                | -                | -         |   -10.86 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           33 |     2322 | 2024-04-29 | 1WIN            | W   | 0.579      | 0.500        | 0.027 (0.008)    | 0.630 (0.182)    | -         |     4.67 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           32 |     2358 | 2024-04-27 | MOUZ NXT        | L   | 0.566      | -            | -                | -                | -         |   -10.85 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           31 |     2427 | 2024-04-25 | Sampi           | W   | 0.551      | 0.371        | 0.028 (0.006)    | 1.000 (0.204)    | -         |     4.64 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           30 |     2466 | 2024-04-23 | Sampi           | W   | 0.538      | 0.371        | -                | 1.000 (0.199)    | -         |     4.52 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           29 |     2498 | 2024-04-21 | MOUZ NXT        | W   | 0.524      | 0.371        | 0.141 (0.027)    | 1.000 (0.194)    | -         |     7.11 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           28 |     2582 | 2024-04-19 | SINNERS         | W   | 0.510      | 0.371        | 0.038 (0.007)    | 0.721 (0.136)    | -         |     7.53 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           27 |     2660 | 2024-04-17 | Alliance        | W   | 0.498      | -            | -                | -                | -         |     3.37 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           26 |     2716 | 2024-04-15 | Astralis Talent | W   | 0.484      | -            | -                | -                | -         |     2.33 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           25 |     2886 | 2024-04-09 | ALTERNATE aTTaX | L   | 0.445      | -            | -                | -                | -         |    -9.35 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           24 |     2974 | 2024-04-05 | UNiTY           | L   | 0.417      | -            | -                | -                | -         |    -8.95 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           23 |     3022 | 2024-04-04 | PGE Turow       | W   | 0.410      | -            | -                | -                | -         |     1.03 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           22 |     3063 | 2024-04-03 | Permitta        | W   | 0.404      | 0.333        | -                | 0.799 (0.108)    | -         |     3.74 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           21 |     3344 | 2024-03-17 | SINNERS         | W   | 0.293      | -            | -                | -                | 1 (0.293) |     3.85 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           20 |     3366 | 2024-03-16 | UNiTY           | W   | 0.286      | -            | -                | -                | 1 (0.286) |     3.06 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           19 |     3387 | 2024-03-15 | Sampi           | W   | 0.279      | 0.345        | -                | 1.000 (0.096)    | 1 (0.279) |     2.31 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           18 |     3392 | 2024-03-15 | Sashi           | L   | 0.277      | -            | -                | -                | -         |    -3.90 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           17 |     3457 | 2024-03-13 | Permitta        | L   | 0.265      | -            | -                | -                | -         |    -5.87 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           16 |     3471 | 2024-03-13 | Permitta        | L   | 0.264      | -            | -                | -                | -         |    -5.95 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           15 |     3515 | 2024-03-11 | Entropiq        | L   | 0.250      | -            | -                | -                | -         |    -7.53 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           14 |     3533 | 2024-03-10 | Zero Tenacity   | L   | 0.245      | -            | -                | -                | -         |    -3.98 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           13 |     3676 | 2024-03-05 | 9INE            | W   | 0.211      | -            | -                | -                | -         |     0.21 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           12 |     3720 | 2024-03-03 | Metizport       | W   | 0.199      | -            | -                | -                | -         |     1.50 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           11 |     3761 | 2024-03-01 | Viperio         | W   | 0.184      | -            | -                | -                | -         |     0.10 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           10 |     3788 | 2024-02-28 | Permitta        | W   | 0.171      | -            | -                | -                | -         |     1.45 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            9 |     3807 | 2024-02-27 | MOUZ NXT        | W   | 0.165      | 0.333        | 0.141 (0.008)    | -                | -         |     2.19 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            8 |     3808 | 2024-02-27 | ex-sYnck        | W   | 0.164      | -            | -                | -                | -         |     0.16 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            7 |     3826 | 2024-02-26 | PGE Turow       | W   | 0.157      | -            | -                | -                | -         |     0.37 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            6 |     3848 | 2024-02-25 | Sampi           | W   | 0.151      | -            | -                | -                | -         |     1.09 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            5 |     3883 | 2024-02-24 | Permitta        | L   | 0.144      | -            | -                | -                | -         |    -3.34 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            4 |     3910 | 2024-02-22 | BIG Academy     | W   | 0.131      | -            | -                | -                | -         |     0.07 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            3 |     3944 | 2024-02-21 | Permitta        | W   | 0.124      | -            | -                | -                | -         |     1.04 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            2 |     3964 | 2024-02-20 | NAVI Junior     | W   | 0.118      | -            | -                | -                | -         |     0.33 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            1 |     3991 | 2024-02-19 | Permitta        | L   | 0.111      | -            | -                | -                | -         |    -2.58 | Blytz, Dytor, forsyy, kreaz, nbqq |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,301.05)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      0.905 | $2,500.00      | $2,262.44       |
| 2024-06-13 |      0.880 | $545.00        | $479.68         |
| 2024-06-02 |      0.806 | $7,837.00      | $6,313.68       |
| 2024-05-13 |      0.671 | $3,000.00      | $2,011.75       |
| 2024-04-25 |      0.551 | $11,000.00     | $6,060.58       |
| 2024-04-06 |      0.424 | $1,500.00      | $635.63         |
| 2024-03-17 |      0.293 | $7,675.00      | $2,249.56       |
| 2024-02-28 |      0.171 | $5,000.00      | $854.15         |
| 2024-02-21 |      0.124 | $3,500.00      | $433.60         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
