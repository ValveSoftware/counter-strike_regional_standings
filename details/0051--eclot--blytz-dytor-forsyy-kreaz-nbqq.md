### Roster Details<br />
Team Name: ECLOT<br />
Roster: Blytz, Dytor, forsyy, kreaz, nbqq<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [51](../standings_global.md)<br />
Regional Rank: [37]( ../standings_europe.md)<br />
Final Rank Value:  1111.5<br />
<br />
Final Rank Value (1111.5) = Starting Rank Value (1239.7) + Head To Head Adjustments (-128.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.508[<sup>1</sup>](#table2)
- Bounty Collected: 0.385[<sup>2</sup>](#table1)
- Opponent Network: 0.268[<sup>2</sup>](#table1)
- LAN Wins: 0.493[<sup>2</sup>](#table1)

The average of these factors is 0.413<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1239.7
- 400 + ( ( 0.413 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1239.7


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
|           52 |      101 | 2024-06-14 | 5W              | L   | 1.000      | -            | -                | -                | -         |   -20.34 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           51 |      172 | 2024-06-11 | PERA            | L   | 1.000      | -            | -                | -                | -         |   -21.70 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           50 |      256 | 2024-06-09 | Enterprise      | W   | 1.000      | 0.450        | 0.046 (0.021)    | 0.575 (0.259)    | 0 (0.000) |     7.62 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           49 |      326 | 2024-06-08 | MOUZ NXT        | W   | 1.000      | 0.450        | 0.158 (0.071)    | 1.000 (0.450)    | 0 (0.000) |    16.47 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           48 |      386 | 2024-06-07 | GhoulsW         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.52 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           47 |      414 | 2024-06-06 | GamerLegion     | L   | 1.000      | -            | -                | -                | -         |    -8.57 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           46 |      586 | 2024-06-02 | UNiTY           | W   | 1.000      | 0.346        | 0.038 (0.013)    | -                | 1 (1.000) |    10.57 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           45 |      619 | 2024-06-01 | UNiTY           | W   | 1.000      | -            | -                | -                | 1 (1.000) |    11.24 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           44 |      649 | 2024-05-31 | Sampi           | W   | 1.000      | 0.346        | 0.045 (0.016)    | 0.837 (0.289)    | 1 (1.000) |     9.00 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           43 |      774 | 2024-05-26 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -23.18 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           42 |      864 | 2024-05-22 | Preasy          | L   | 1.000      | -            | -                | -                | -         |   -27.59 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           41 |     1203 | 2024-05-13 | Johnny Speeds   | L   | 0.960      | -            | -                | -                | -         |   -11.48 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           40 |     1273 | 2024-05-10 | Verdant         | W   | 0.941      | -            | -                | -                | 0 (0.000) |     4.23 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           39 |     1466 | 2024-04-30 | MOUZ NXT        | L   | 0.876      | -            | -                | -                | -         |   -16.94 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           38 |     1494 | 2024-04-29 | 1WIN            | W   | 0.869      | 0.500        | 0.041 (0.018)    | 0.592 (0.257)    | -         |     7.31 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           37 |     1530 | 2024-04-27 | MOUZ NXT        | L   | 0.856      | -            | -                | -                | -         |   -17.49 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           36 |     1599 | 2024-04-25 | Sampi           | W   | 0.841      | 0.371        | 0.045 (0.014)    | 0.837 (0.261)    | -         |     7.23 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           35 |     1638 | 2024-04-23 | Sampi           | W   | 0.827      | 0.371        | 0.045 (0.014)    | 0.837 (0.257)    | -         |     7.16 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           34 |     1670 | 2024-04-21 | MOUZ NXT        | W   | 0.814      | 0.371        | 0.158 (0.048)    | 1.000 (0.302)    | -         |    10.29 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           33 |     1754 | 2024-04-19 | SINNERS         | W   | 0.800      | 0.371        | 0.045 (0.013)    | 0.782 (0.232)    | -         |    12.03 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           32 |     1832 | 2024-04-17 | Alliance        | W   | 0.787      | -            | -                | -                | -         |     5.17 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           31 |     1888 | 2024-04-15 | Astralis Talent | W   | 0.774      | -            | -                | -                | -         |     2.71 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           30 |     2058 | 2024-04-09 | ALTERNATE aTTaX | L   | 0.734      | -            | -                | -                | -         |   -16.96 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           29 |     2146 | 2024-04-05 | UNiTY           | L   | 0.707      | -            | -                | -                | -         |   -15.96 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           28 |     2194 | 2024-04-04 | PGE Turow       | W   | 0.700      | -            | -                | -                | -         |     1.51 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           27 |     2235 | 2024-04-03 | Permitta        | W   | 0.694      | 0.333        | -                | 0.885 (0.205)    | -         |     5.62 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           26 |     2517 | 2024-03-17 | SINNERS         | W   | 0.583      | -            | -                | -                | 1 (0.583) |     7.05 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           25 |     2539 | 2024-03-16 | UNiTY           | W   | 0.576      | -            | -                | -                | 1 (0.576) |     5.55 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           24 |     2560 | 2024-03-15 | Sampi           | W   | 0.569      | 0.345        | -                | 0.837 (0.164)    | 1 (0.569) |     4.68 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           23 |     2565 | 2024-03-15 | Sashi           | L   | 0.567      | -            | -                | -                | -         |   -10.92 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           22 |     2630 | 2024-03-13 | Permitta        | L   | 0.555      | -            | -                | -                | -         |   -12.79 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           21 |     2644 | 2024-03-13 | Permitta        | L   | 0.554      | -            | -                | -                | -         |   -13.24 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           20 |     2688 | 2024-03-11 | Entropiq        | L   | 0.540      | -            | -                | -                | -         |   -16.28 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           19 |     2706 | 2024-03-10 | Zero Tenacity   | L   | 0.535      | -            | -                | -                | -         |   -11.21 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           18 |     2849 | 2024-03-05 | 9INE            | W   | 0.501      | -            | -                | -                | -         |     0.32 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           17 |     2893 | 2024-03-03 | Metizport       | W   | 0.488      | -            | -                | -                | -         |     3.42 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           16 |     2934 | 2024-03-01 | Viperio         | W   | 0.474      | -            | -                | -                | -         |     0.30 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           15 |     2961 | 2024-02-28 | Permitta        | W   | 0.461      | -            | -                | -                | -         |     3.00 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           14 |     2980 | 2024-02-27 | MOUZ NXT        | W   | 0.455      | 0.333        | 0.158 (0.024)    | -                | -         |     5.23 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           13 |     2981 | 2024-02-27 | ex-sYnck        | W   | 0.454      | -            | -                | -                | -         |     0.29 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           12 |     2999 | 2024-02-26 | PGE Turow       | W   | 0.447      | -            | -                | -                | -         |     0.77 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           11 |     3021 | 2024-02-25 | Sampi           | W   | 0.441      | -            | -                | -                | -         |     2.71 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           10 |     3056 | 2024-02-24 | Permitta        | L   | 0.434      | -            | -                | -                | -         |   -10.95 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            9 |     3083 | 2024-02-22 | BIG Academy     | W   | 0.421      | -            | -                | -                | -         |     0.14 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            8 |     3117 | 2024-02-21 | Permitta        | W   | 0.414      | -            | -                | -                | -         |     2.57 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            7 |     3137 | 2024-02-20 | NAVI Junior     | W   | 0.408      | -            | -                | -                | -         |     0.73 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            6 |     3164 | 2024-02-19 | Permitta        | L   | 0.401      | -            | -                | -                | -         |   -10.31 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            5 |     3570 | 2024-01-30 | ex-Sprout       | L   | 0.269      | -            | -                | -                | -         |    -8.26 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            4 |     4000 | 2024-01-16 | Zero Tenacity   | L   | 0.174      | -            | -                | -                | -         |    -3.67 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            3 |     4053 | 2024-01-14 | Permitta        | L   | 0.161      | -            | -                | -                | -         |    -4.22 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            2 |     4230 | 2024-01-09 | Sashi           | L   | 0.129      | -            | -                | -                | -         |    -2.48 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            1 |     4250 | 2024-01-09 | Rhyno           | W   | 0.129      | -            | -                | -                | -         |     0.95 | Blytz, Dytor, forsyy, kreaz, nbqq |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($32,306.55)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-06-13 |      1.000 | $545.00        | $545.00         |
| 2024-06-02 |      1.000 | $7,837.00      | $7,837.00       |
| 2024-05-13 |      0.960 | $3,000.00      | $2,881.14       |
| 2024-04-25 |      0.841 | $11,000.00     | $9,248.33       |
| 2024-04-06 |      0.714 | $1,500.00      | $1,070.32       |
| 2024-03-17 |      0.583 | $7,675.00      | $4,473.75       |
| 2024-02-28 |      0.461 | $5,000.00      | $2,303.13       |
| 2024-02-21 |      0.414 | $3,500.00      | $1,447.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
