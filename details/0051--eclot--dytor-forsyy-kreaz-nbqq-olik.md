### Roster Details<br />
Team Name: ECLOT<br />
Roster: Dytor, forsyy, kreaz, nbqq, Olik<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [51](../standings_global.md)<br />
Regional Rank: [37]( ../standings_europe.md)<br />
Final Rank Value:  1105.1<br />
<br />
Final Rank Value (1105.1) = Starting Rank Value (1232.0) + Head To Head Adjustments (-126.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.503[<sup>1</sup>](#table2)
- Bounty Collected: 0.373[<sup>2</sup>](#table1)
- Opponent Network: 0.229[<sup>2</sup>](#table1)
- LAN Wins: 0.444[<sup>2</sup>](#table1)

The average of these factors is 0.387<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1232.0
- 400 + ( ( 0.387 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1232.0


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
|           53 |       60 | 2024-07-16 | FAVBET          | L   | 1.000      | -            | -                | -                | -         |   -24.49 | Dytor, forsyy, kreaz, nbqq, Olik  |
|           52 |      118 | 2024-07-14 | Kosovo          | L   | 1.000      | -            | -                | -                | -         |   -24.48 | Dytor, forsyy, nbqq, NEOFRAG, PR  |
|           51 |      129 | 2024-07-14 | Kosovo          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.02 | Dytor, forsyy, nbqq, NEOFRAG, PR  |
|           50 |      134 | 2024-07-13 | ALTERNATE aTTaX | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.59 | Dytor, forsyy, K1-FiDa, nbqq, PR  |
|           49 |      228 | 2024-07-08 | Hungary         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.29 | Dytor, forsyy, K1-FiDa, nbqq, PR  |
|           48 |      401 | 2024-06-14 | 5W              | L   | 0.979      | -            | -                | -                | -         |   -19.80 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           47 |      472 | 2024-06-11 | PERA            | L   | 0.961      | -            | -                | -                | -         |   -21.18 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           46 |      556 | 2024-06-09 | Enterprise      | W   | 0.946      | 0.450        | 0.055 (0.023)    | 0.635 (0.270)    | 0 (0.000) |     6.69 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           45 |      626 | 2024-06-08 | MOUZ NXT        | W   | 0.939      | 0.450        | 0.150 (0.063)    | 1.000 (0.423)    | -         |    13.97 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           44 |      686 | 2024-06-07 | GhoulsW         | W   | 0.932      | -            | -                | -                | -         |     0.42 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           43 |      714 | 2024-06-06 | GamerLegion     | L   | 0.928      | -            | -                | -                | -         |    -9.97 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           42 |      886 | 2024-06-02 | UNiTY           | W   | 0.900      | 0.346        | 0.039 (0.012)    | -                | 1 (0.900) |     9.65 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           41 |      917 | 2024-06-01 | UNiTY           | W   | 0.894      | 0.346        | 0.039 (0.012)    | -                | 1 (0.894) |    10.23 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           40 |      947 | 2024-05-31 | Sampi           | W   | 0.887      | 0.346        | 0.045 (0.014)    | 0.975 (0.299)    | 1 (0.887) |     7.06 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           39 |     1072 | 2024-05-26 | Permitta        | L   | 0.852      | -            | -                | -                | -         |   -20.56 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           38 |     1162 | 2024-05-22 | Preasy          | L   | 0.826      | -            | -                | -                | -         |   -22.97 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           37 |     1501 | 2024-05-13 | Johnny Speeds   | L   | 0.765      | -            | -                | -                | -         |    -6.54 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           36 |     1571 | 2024-05-10 | Verdant         | W   | 0.746      | -            | -                | -                | -         |     3.31 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           35 |     1764 | 2024-04-30 | MOUZ NXT        | L   | 0.681      | -            | -                | -                | -         |   -13.77 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           34 |     1792 | 2024-04-29 | 1WIN            | W   | 0.673      | 0.500        | 0.041 (0.014)    | 0.545 (0.183)    | -         |     4.77 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           33 |     1828 | 2024-04-27 | MOUZ NXT        | L   | 0.661      | -            | -                | -                | -         |   -13.95 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           32 |     1897 | 2024-04-25 | Sampi           | W   | 0.645      | 0.371        | 0.045 (0.011)    | 0.975 (0.233)    | -         |     4.82 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           31 |     1936 | 2024-04-23 | Sampi           | W   | 0.632      | 0.371        | -                | 0.975 (0.228)    | -         |     4.70 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           30 |     1968 | 2024-04-21 | MOUZ NXT        | W   | 0.619      | 0.371        | 0.150 (0.034)    | 1.000 (0.229)    | -         |     7.18 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           29 |     2052 | 2024-04-19 | SINNERS         | W   | 0.605      | 0.371        | 0.058 (0.013)    | 0.744 (0.167)    | -         |     8.32 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           28 |     2130 | 2024-04-17 | Alliance        | W   | 0.592      | -            | -                | -                | -         |     3.52 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           27 |     2186 | 2024-04-15 | Astralis Talent | W   | 0.578      | -            | -                | -                | -         |     1.48 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           26 |     2356 | 2024-04-09 | ALTERNATE aTTaX | L   | 0.539      | -            | -                | -                | -         |   -12.22 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           25 |     2444 | 2024-04-05 | UNiTY           | L   | 0.512      | -            | -                | -                | -         |   -11.28 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           24 |     2492 | 2024-04-04 | PGE Turow       | W   | 0.505      | -            | -                | -                | -         |     0.90 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           23 |     2533 | 2024-04-03 | Permitta        | W   | 0.499      | 0.333        | -                | 0.794 (0.132)    | -         |     3.68 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           22 |     2814 | 2024-03-17 | SINNERS         | W   | 0.388      | -            | -                | -                | 1 (0.388) |     4.63 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           21 |     2836 | 2024-03-16 | UNiTY           | W   | 0.381      | -            | -                | -                | 1 (0.381) |     3.90 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           20 |     2857 | 2024-03-15 | Sampi           | W   | 0.374      | 0.345        | -                | 0.975 (0.126)    | 1 (0.374) |     2.67 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           19 |     2862 | 2024-03-15 | Sashi           | L   | 0.372      | -            | -                | -                | -         |    -7.18 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           18 |     2927 | 2024-03-13 | Permitta        | L   | 0.360      | -            | -                | -                | -         |    -8.63 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           17 |     2941 | 2024-03-13 | Permitta        | L   | 0.358      | -            | -                | -                | -         |    -8.80 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           16 |     2985 | 2024-03-11 | Entropiq        | L   | 0.345      | -            | -                | -                | -         |   -10.53 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           15 |     3003 | 2024-03-10 | Zero Tenacity   | L   | 0.339      | -            | -                | -                | -         |    -7.15 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           14 |     3146 | 2024-03-05 | 9INE            | W   | 0.306      | -            | -                | -                | -         |     0.17 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           13 |     3190 | 2024-03-03 | Metizport       | W   | 0.293      | -            | -                | -                | -         |     1.79 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           12 |     3231 | 2024-03-01 | Viperio         | W   | 0.278      | -            | -                | -                | -         |     0.15 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           11 |     3258 | 2024-02-28 | Permitta        | W   | 0.265      | -            | -                | -                | -         |     1.68 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           10 |     3277 | 2024-02-27 | MOUZ NXT        | W   | 0.259      | 0.333        | 0.150 (0.013)    | -                | -         |     2.83 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            9 |     3278 | 2024-02-27 | ex-sYnck        | W   | 0.259      | -            | -                | -                | -         |     0.15 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            8 |     3296 | 2024-02-26 | PGE Turow       | W   | 0.252      | -            | -                | -                | -         |     0.40 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            7 |     3318 | 2024-02-25 | Sampi           | W   | 0.245      | -            | -                | -                | -         |     1.42 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            6 |     3353 | 2024-02-24 | Permitta        | L   | 0.239      | -            | -                | -                | -         |    -6.05 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            5 |     3380 | 2024-02-22 | BIG Academy     | W   | 0.226      | -            | -                | -                | -         |     0.07 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            4 |     3414 | 2024-02-21 | Permitta        | W   | 0.218      | -            | -                | -                | -         |     1.35 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            3 |     3434 | 2024-02-20 | NAVI Junior     | W   | 0.213      | -            | -                | -                | -         |     0.37 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            2 |     3461 | 2024-02-19 | Permitta        | L   | 0.206      | -            | -                | -                | -         |    -5.26 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            1 |     3867 | 2024-01-30 | ex-Sprout       | L   | 0.074      | -            | -                | -                | -         |    -2.27 | Blytz, Dytor, forsyy, kreaz, nbqq |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,323.24)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      0.999 | $2,500.00      | $2,498.72       |
| 2024-06-13 |      0.975 | $545.00        | $531.18         |
| 2024-06-02 |      0.900 | $7,837.00      | $7,054.37       |
| 2024-05-13 |      0.765 | $3,000.00      | $2,295.29       |
| 2024-04-25 |      0.645 | $11,000.00     | $7,100.22       |
| 2024-04-06 |      0.518 | $1,500.00      | $777.40         |
| 2024-03-17 |      0.388 | $7,675.00      | $2,974.95       |
| 2024-02-28 |      0.265 | $5,000.00      | $1,326.71       |
| 2024-02-21 |      0.218 | $3,500.00      | $764.39         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
