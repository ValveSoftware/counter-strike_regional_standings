### Roster Details<br />
Team Name: Nemiga<br />
Roster: 1eeR, khaN, riskyb0b, Xant3r, zweih<br />
Global Rank: [24](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [18]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  1242.1<br />
<br />
Final Rank Value (1242.1) = Starting Rank Value (1313.8) + Head To Head Adjustments (-71.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.745[<sup>1</sup>](#table2)
- Bounty Collected: 0.467[<sup>2</sup>](#table1)
- Opponent Network: 0.261[<sup>2</sup>](#table1)
- LAN Wins: 0.434[<sup>2</sup>](#table1)

The average of these factors is 0.477<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1313.8
- 400 + ( ( 0.477 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 1313.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           61 |      572 | 2024-11-18 | BetBoom         | L   | 1.000      | -            | -                | -                | -         |   -19.35 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           60 |      581 | 2024-11-18 | Rebels          | W   | 0.998      | -            | -                | -                | 1 (0.998) |     3.82 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           59 |      597 | 2024-11-17 | Cloud9          | L   | 0.992      | -            | -                | -                | -         |   -21.55 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           58 |      611 | 2024-11-16 | MOUZ            | L   | 0.990      | -            | -                | -                | -         |    -2.02 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           57 |      827 | 2024-11-09 | NAVI Junior     | L   | 0.940      | -            | -                | -                | -         |   -21.41 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           56 |      845 | 2024-11-08 | 500             | W   | 0.932      | 0.426        | -                | 0.837 (0.333)    | 0 (0.000) |     5.94 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           55 |      870 | 2024-11-07 | PARIVISION      | W   | 0.925      | -            | -                | -                | 0 (0.000) |     5.01 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           54 |      897 | 2024-11-05 | Into the Breach | W   | 0.913      | 0.426        | -                | 0.617 (0.240)    | 0 (0.000) |     4.51 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           53 |     1189 | 2024-10-20 | Sangal          | L   | 0.806      | -            | -                | -                | -         |   -11.04 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           52 |     1208 | 2024-10-19 | UNPAID          | W   | 0.801      | 0.624        | 0.124 (0.062)    | -                | 1 (0.801) |     5.65 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           51 |     1211 | 2024-10-19 | 3DMAX           | W   | 0.800      | 0.500        | 0.421 (0.169)    | 0.720 (0.288)    | 0 (0.000) |    16.27 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           50 |     1225 | 2024-10-19 | fnatic          | W   | 0.798      | 0.624        | 0.188 (0.094)    | 0.404 (0.201)    | 1 (0.798) |     9.38 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           49 |     1250 | 2024-10-18 | Fluxo           | W   | 0.792      | 0.624        | 0.110 (0.055)    | 0.643 (0.318)    | 1 (0.792) |     9.70 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           48 |     1265 | 2024-10-17 | Sangal          | L   | 0.787      | -            | -                | -                | -         |    -9.38 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           47 |     1280 | 2024-10-17 | Aurora          | W   | 0.785      | -            | -                | -                | 1 (0.785) |     4.17 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           46 |     1298 | 2024-10-16 | 3DMAX           | W   | 0.780      | 0.500        | 0.421 (0.164)    | 0.720 (0.281)    | 0 (0.000) |    16.81 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           45 |     1305 | 2024-10-16 | Sangal          | L   | 0.779      | -            | -                | -                | -         |   -10.00 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           44 |     1790 | 2024-09-28 | SAW             | L   | 0.659      | -            | -                | -                | -         |    -5.24 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           43 |     1823 | 2024-09-27 | Alliance        | W   | 0.654      | -            | -                | -                | -         |     2.49 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           42 |     1838 | 2024-09-27 | 3DMAX           | L   | 0.652      | -            | -                | -                | -         |    -4.98 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           41 |     1868 | 2024-09-26 | GUN5            | W   | 0.647      | -            | -                | -                | -         |     4.82 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           40 |     1884 | 2024-09-26 | RUSTEC          | W   | 0.646      | -            | -                | -                | -         |     0.16 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           39 |     1988 | 2024-09-24 | 9INE            | L   | 0.632      | -            | -                | -                | -         |   -16.34 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           38 |     2020 | 2024-09-23 | Johnny Speeds   | W   | 0.627      | 0.443        | 0.097 (0.027)    | 0.952 (0.264)    | -         |     4.98 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           37 |     2024 | 2024-09-23 | AMKAL           | L   | 0.626      | -            | -                | -                | -         |   -17.85 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           36 |     2054 | 2024-09-22 | 9 Pandas        | W   | 0.618      | 0.443        | 0.098 (0.027)    | 0.871 (0.238)    | -         |     5.42 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           35 |     2070 | 2024-09-21 | CYBERSHOKE      | W   | 0.613      | -            | -                | -                | -         |     2.35 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           34 |     2092 | 2024-09-20 | 9INE            | L   | 0.606      | -            | -                | -                | -         |   -16.32 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           33 |     2139 | 2024-09-19 | 9 Pandas        | W   | 0.599      | 0.443        | 0.098 (0.026)    | 0.871 (0.231)    | -         |     5.62 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           32 |     2163 | 2024-09-18 | SINNERS         | W   | 0.593      | -            | -                | -                | -         |     5.50 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           31 |     2215 | 2024-09-16 | CYBERSHOKE      | W   | 0.580      | -            | -                | -                | -         |     2.14 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           30 |     2225 | 2024-09-16 | BOGATYRI        | W   | 0.578      | -            | -                | -                | -         |     0.13 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           29 |     2350 | 2024-09-12 | Monte           | W   | 0.552      | -            | -                | -                | -         |     3.79 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           28 |     2464 | 2024-09-07 | Zero Tenacity   | L   | 0.521      | -            | -                | -                | -         |   -12.25 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           27 |     2529 | 2024-09-05 | los kogutos     | W   | 0.507      | 0.435        | -                | 0.981 (0.216)    | -         |     4.14 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           26 |     2621 | 2024-09-03 | Sashi           | W   | 0.492      | -            | -                | -                | -         |     2.89 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           25 |     2793 | 2024-08-28 | Metizport       | L   | 0.452      | -            | -                | -                | -         |    -6.94 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           24 |     2835 | 2024-08-27 | ALTERNATE aTTaX | L   | 0.447      | -            | -                | -                | -         |   -10.56 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           23 |     3005 | 2024-08-23 | Insilio         | W   | 0.420      | -            | -                | -                | -         |     0.91 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           22 |     3019 | 2024-08-23 | 9 Pandas        | L   | 0.419      | -            | -                | -                | -         |    -9.58 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           21 |     3059 | 2024-08-22 | Sashi           | W   | 0.411      | -            | -                | -                | -         |     2.26 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           20 |     3101 | 2024-08-21 | los kogutos     | L   | 0.406      | -            | -                | -                | -         |    -9.35 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           19 |     3123 | 2024-08-21 | ARCRED          | W   | 0.405      | -            | -                | -                | -         |     0.65 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           18 |     3286 | 2024-08-15 | Sangal          | W   | 0.366      | 0.500        | 0.158 (0.029)    | -                | -         |     5.41 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           17 |     3376 | 2024-08-12 | 3DMAX           | W   | 0.347      | 0.500        | 0.421 (0.073)    | -                | -         |     7.96 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           16 |     3416 | 2024-08-11 | Endpoint        | W   | 0.339      | -            | -                | -                | -         |     1.02 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           15 |     3440 | 2024-08-10 | B8              | W   | 0.332      | -            | -                | -                | -         |     3.37 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           14 |     3461 | 2024-08-09 | 9 Pandas        | W   | 0.326      | -            | -                | -                | -         |     3.01 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           13 |     3478 | 2024-08-08 | Sampi           | W   | 0.321      | -            | -                | -                | -         |     1.64 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           12 |     3513 | 2024-08-07 | B8              | W   | 0.314      | -            | -                | -                | -         |     3.33 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           11 |     3634 | 2024-08-04 | Aurora          | W   | 0.293      | -            | -                | -                | -         |     0.66 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           10 |     3670 | 2024-08-03 | los kogutos     | L   | 0.286      | -            | -                | -                | -         |    -5.53 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            9 |     3714 | 2024-08-02 | fnatic          | L   | 0.279      | -            | -                | -                | -         |    -5.71 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            8 |     3718 | 2024-08-02 | Johnny Speeds   | L   | 0.278      | -            | -                | -                | -         |    -6.78 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            7 |     3784 | 2024-07-31 | SovvyKiNG       | W   | 0.267      | -            | -                | -                | -         |     0.16 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            6 |     3846 | 2024-07-30 | G2 Ares         | W   | 0.259      | -            | -                | -                | -         |     0.13 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            5 |     4198 | 2024-07-19 | Passion UA      | L   | 0.185      | -            | -                | -                | -         |    -3.70 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            4 |     4224 | 2024-07-18 | Qiang           | W   | 0.181      | -            | -                | -                | -         |     0.14 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            3 |     4295 | 2024-07-17 | UNPAID          | L   | 0.174      | -            | -                | -                | -         |    -4.25 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            2 |     4357 | 2024-07-16 | ARCRED          | W   | 0.167      | -            | -                | -                | -         |     0.26 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            1 |     4404 | 2024-07-15 | Passion UA      | W   | 0.161      | -            | -                | -                | -         |     1.84 | 1eeR, khaN, riskyb0b, Xant3r, zweih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($157,033.70)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.46) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.940 | $10,000.00     | $9,395.52       |
| 2024-10-20 |      0.806 | $12,500.00     | $10,077.19      |
| 2024-10-19 |      0.801 | $150,000.00    | $120,122.21     |
| 2024-09-26 |      0.647 | $500.00        | $323.29         |
| 2024-09-24 |      0.632 | $12,000.00     | $7,587.99       |
| 2024-09-08 |      0.527 | $2,000.00      | $1,053.61       |
| 2024-08-11 |      0.339 | $25,000.00     | $8,473.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
