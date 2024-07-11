### Roster Details<br />
Team Name: Czech Republic<br />
Roster: Dytor, forsyy, K1-FiDa, nbqq, PR<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [46](../standings_global.md)<br />
Regional Rank: [33]( ../standings_europe.md)<br />
Final Rank Value:  1138.5<br />
<br />
Final Rank Value (1138.5) = Starting Rank Value (1237.7) + Head To Head Adjustments (-99.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.504[<sup>1</sup>](#table2)
- Bounty Collected: 0.377[<sup>2</sup>](#table1)
- Opponent Network: 0.237[<sup>2</sup>](#table1)
- LAN Wins: 0.470[<sup>2</sup>](#table1)

The average of these factors is 0.397<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1237.7
- 400 + ( ( 0.397 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1237.7


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
|           51 |       64 | 2024-07-08 | Hungary         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.35 | Dytor, forsyy, K1-FiDa, nbqq, PR  |
|           50 |      237 | 2024-06-14 | 5W              | L   | 1.000      | -            | -                | -                | -         |   -20.33 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           49 |      308 | 2024-06-11 | PERA            | L   | 1.000      | -            | -                | -                | -         |   -22.01 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           48 |      392 | 2024-06-09 | Enterprise      | W   | 0.986      | 0.450        | 0.053 (0.024)    | 0.654 (0.290)    | 0 (0.000) |     6.98 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           47 |      462 | 2024-06-08 | MOUZ NXT        | W   | 0.979      | 0.450        | 0.152 (0.067)    | 1.000 (0.441)    | 0 (0.000) |    14.89 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           46 |      522 | 2024-06-07 | GhoulsW         | W   | 0.971      | -            | -                | -                | 0 (0.000) |     0.44 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           45 |      550 | 2024-06-06 | GamerLegion     | L   | 0.967      | -            | -                | -                | -         |    -9.92 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           44 |      722 | 2024-06-02 | UNiTY           | W   | 0.940      | 0.346        | 0.039 (0.013)    | -                | 1 (0.940) |     9.92 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           43 |      753 | 2024-06-01 | UNiTY           | W   | 0.933      | 0.346        | 0.039 (0.012)    | -                | 1 (0.933) |    10.52 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           42 |      783 | 2024-05-31 | Slovakia        | W   | 0.927      | 0.346        | 0.045 (0.014)    | 0.891 (0.286)    | 1 (0.927) |     7.32 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           41 |      908 | 2024-05-26 | Permitta        | L   | 0.891      | -            | -                | -                | -         |   -21.37 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           40 |      998 | 2024-05-22 | Preasy          | L   | 0.865      | -            | -                | -                | -         |   -24.12 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           39 |     1337 | 2024-05-13 | Johnny Speeds   | L   | 0.805      | -            | -                | -                | -         |    -7.17 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           38 |     1407 | 2024-05-10 | Verdant         | W   | 0.785      | -            | -                | -                | -         |     3.42 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           37 |     1600 | 2024-04-30 | MOUZ NXT        | L   | 0.721      | -            | -                | -                | -         |   -14.44 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           36 |     1628 | 2024-04-29 | 1WIN            | W   | 0.713      | 0.500        | 0.041 (0.015)    | 0.570 (0.203)    | -         |     5.29 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           35 |     1664 | 2024-04-27 | MOUZ NXT        | L   | 0.700      | -            | -                | -                | -         |   -14.69 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           34 |     1733 | 2024-04-25 | Slovakia        | W   | 0.685      | 0.371        | 0.045 (0.011)    | 0.891 (0.226)    | -         |     5.08 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           33 |     1772 | 2024-04-23 | Slovakia        | W   | 0.672      | 0.371        | -                | 0.891 (0.222)    | -         |     4.96 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           32 |     1804 | 2024-04-21 | MOUZ NXT        | W   | 0.658      | 0.371        | 0.152 (0.037)    | 1.000 (0.244)    | -         |     7.77 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           31 |     1888 | 2024-04-19 | SINNERS         | W   | 0.644      | 0.371        | 0.057 (0.014)    | 0.767 (0.183)    | -         |     9.04 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           30 |     1966 | 2024-04-17 | Alliance        | W   | 0.632      | -            | -                | -                | -         |     3.87 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           29 |     2022 | 2024-04-15 | Astralis Talent | W   | 0.618      | -            | -                | -                | -         |     1.64 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           28 |     2192 | 2024-04-09 | ALTERNATE aTTaX | L   | 0.579      | -            | -                | -                | -         |   -13.28 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           27 |     2280 | 2024-04-05 | UNiTY           | L   | 0.552      | -            | -                | -                | -         |   -12.36 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           26 |     2328 | 2024-04-04 | PGE Turow       | W   | 0.545      | -            | -                | -                | -         |     0.99 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           25 |     2369 | 2024-04-03 | Permitta        | W   | 0.538      | 0.333        | -                | 0.837 (0.150)    | -         |     3.94 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           24 |     2650 | 2024-03-17 | SINNERS         | W   | 0.427      | -            | -                | -                | 1 (0.427) |     5.01 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           23 |     2672 | 2024-03-16 | UNiTY           | W   | 0.420      | -            | -                | -                | 1 (0.420) |     4.13 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           22 |     2693 | 2024-03-15 | Slovakia        | W   | 0.413      | 0.345        | -                | 0.891 (0.127)    | 1 (0.413) |     2.84 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           21 |     2698 | 2024-03-15 | Sashi           | L   | 0.411      | -            | -                | -                | -         |    -7.96 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           20 |     2763 | 2024-03-13 | Permitta        | L   | 0.399      | -            | -                | -                | -         |    -9.60 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           19 |     2777 | 2024-03-13 | Permitta        | L   | 0.398      | -            | -                | -                | -         |    -9.82 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           18 |     2821 | 2024-03-11 | Entropiq        | L   | 0.385      | -            | -                | -                | -         |   -11.72 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           17 |     2839 | 2024-03-10 | Zero Tenacity   | L   | 0.379      | -            | -                | -                | -         |    -7.99 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           16 |     2982 | 2024-03-05 | 9INE            | W   | 0.345      | -            | -                | -                | -         |     0.19 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           15 |     3026 | 2024-03-03 | Metizport       | W   | 0.333      | -            | -                | -                | -         |     2.00 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           14 |     3067 | 2024-03-01 | Viperio         | W   | 0.318      | -            | -                | -                | -         |     0.17 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           13 |     3094 | 2024-02-28 | Permitta        | W   | 0.305      | -            | -                | -                | -         |     1.88 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           12 |     3113 | 2024-02-27 | MOUZ NXT        | W   | 0.299      | 0.333        | 0.152 (0.015)    | -                | -         |     3.23 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           11 |     3114 | 2024-02-27 | ex-sYnck        | W   | 0.299      | -            | -                | -                | -         |     0.16 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           10 |     3132 | 2024-02-26 | PGE Turow       | W   | 0.291      | -            | -                | -                | -         |     0.45 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            9 |     3154 | 2024-02-25 | Slovakia        | W   | 0.285      | -            | -                | -                | -         |     1.54 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            8 |     3189 | 2024-02-24 | Permitta        | L   | 0.279      | -            | -                | -                | -         |    -7.11 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            7 |     3216 | 2024-02-22 | BIG Academy     | W   | 0.265      | -            | -                | -                | -         |     0.08 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            6 |     3250 | 2024-02-21 | Permitta        | W   | 0.258      | -            | -                | -                | -         |     1.54 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            5 |     3270 | 2024-02-20 | NAVI Junior     | W   | 0.252      | -            | -                | -                | -         |     0.42 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            4 |     3297 | 2024-02-19 | Permitta        | L   | 0.245      | -            | -                | -                | -         |    -6.34 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            3 |     3703 | 2024-01-30 | ex-Sprout       | L   | 0.113      | -            | -                | -                | -         |    -3.49 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            2 |     4133 | 2024-01-16 | Zero Tenacity   | L   | 0.018      | -            | -                | -                | -         |    -0.38 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            1 |     4186 | 2024-01-14 | Permitta        | L   | 0.006      | -            | -                | -                | -         |    -0.14 | Blytz, Dytor, forsyy, kreaz, nbqq |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($26,903.41)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-06-13 |      1.000 | $545.00        | $545.00         |
| 2024-06-02 |      0.940 | $7,837.00      | $7,364.80       |
| 2024-05-13 |      0.805 | $3,000.00      | $2,414.12       |
| 2024-04-25 |      0.685 | $11,000.00     | $7,535.93       |
| 2024-04-06 |      0.558 | $1,500.00      | $836.81         |
| 2024-03-17 |      0.427 | $7,675.00      | $3,278.96       |
| 2024-02-28 |      0.305 | $5,000.00      | $1,524.77       |
| 2024-02-21 |      0.258 | $3,500.00      | $903.03         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
