### Roster Details<br />
Team Name: Nemiga<br />
Roster: 1eeR, khaN, riskyb0b, Xant3r, zweih<br />
Global Rank: [28](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [20]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  1213.7<br />
<br />
Final Rank Value (1213.7) = Starting Rank Value (1270.4) + Head To Head Adjustments (-56.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.771[<sup>1</sup>](#table2)
- Bounty Collected: 0.440[<sup>2</sup>](#table1)
- Opponent Network: 0.158[<sup>2</sup>](#table1)
- LAN Wins: 0.385[<sup>2</sup>](#table1)

The average of these factors is 0.438<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1270.4
- 400 + ( ( 0.438 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 1270.4


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
|           57 |       10 | 2025-01-17 | FURIA           | L   | 1.000      | -            | -                | -                | -         |    -3.57 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           56 |      724 | 2024-11-18 | BetBoom         | L   | 0.789      | -            | -                | -                | -         |   -15.66 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           55 |      733 | 2024-11-18 | Rebels          | W   | 0.783      | -            | -                | -                | 1 (0.783) |     2.60 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           54 |      749 | 2024-11-17 | Cloud9          | L   | 0.777      | -            | -                | -                | -         |   -17.71 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           53 |      763 | 2024-11-16 | MOUZ            | L   | 0.775      | -            | -                | -                | -         |    -1.27 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           52 |      979 | 2024-11-09 | NAVI Junior     | L   | 0.725      | -            | -                | -                | -         |   -16.19 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           51 |      997 | 2024-11-08 | 500             | W   | 0.718      | 0.426        | -                | 0.860 (0.263)    | 0 (0.000) |     4.65 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           50 |     1022 | 2024-11-07 | PARIVISION      | W   | 0.710      | -            | -                | -                | 0 (0.000) |     2.84 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           49 |     1049 | 2024-11-05 | Into the Breach | W   | 0.699      | 0.426        | -                | 0.510 (0.152)    | 0 (0.000) |     3.38 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           48 |     1341 | 2024-10-20 | HEROIC          | L   | 0.592      | -            | -                | -                | -         |    -9.98 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           47 |     1360 | 2024-10-19 | UNPAID          | W   | 0.586      | 0.624        | 0.140 (0.051)    | -                | 1 (0.586) |     3.54 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           46 |     1363 | 2024-10-19 | 3DMAX           | W   | 0.585      | 0.500        | 0.422 (0.124)    | 0.571 (0.167)    | 0 (0.000) |    11.78 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           45 |     1377 | 2024-10-19 | fnatic          | W   | 0.584      | 0.624        | 0.180 (0.065)    | -                | 1 (0.584) |     6.42 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           44 |     1402 | 2024-10-18 | Fluxo           | W   | 0.577      | 0.624        | 0.130 (0.047)    | 0.529 (0.191)    | 1 (0.577) |     6.52 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           43 |     1417 | 2024-10-17 | HEROIC          | L   | 0.573      | -            | -                | -                | -         |    -9.05 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           42 |     1432 | 2024-10-17 | Aurora          | W   | 0.570      | 0.624        | 0.058 (0.021)    | 0.314 (0.112)    | 1 (0.570) |     2.92 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           41 |     1450 | 2024-10-16 | 3DMAX           | W   | 0.566      | 0.500        | 0.422 (0.119)    | 0.571 (0.162)    | 0 (0.000) |    11.84 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           40 |     1457 | 2024-10-16 | HEROIC          | L   | 0.565      | -            | -                | -                | -         |    -9.47 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           39 |     1942 | 2024-09-28 | SAW             | L   | 0.445      | -            | -                | -                | -         |    -5.32 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           38 |     1975 | 2024-09-27 | Alliance        | W   | 0.440      | -            | -                | -                | -         |     1.99 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           37 |     1990 | 2024-09-27 | 3DMAX           | L   | 0.438      | -            | -                | -                | -         |    -3.96 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           36 |     2020 | 2024-09-26 | GUN5            | W   | 0.433      | -            | -                | -                | -         |     3.86 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           35 |     2036 | 2024-09-26 | RUSTEC          | W   | 0.432      | -            | -                | -                | -         |     0.12 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           34 |     2140 | 2024-09-24 | 9INE            | L   | 0.418      | -            | -                | -                | -         |   -10.60 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           33 |     2172 | 2024-09-23 | Johnny Speeds   | W   | 0.413      | 0.443        | 0.108 (0.020)    | 0.764 (0.140)    | -         |     3.29 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           32 |     2176 | 2024-09-23 | AMKAL           | L   | 0.412      | -            | -                | -                | -         |   -11.74 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           31 |     2206 | 2024-09-22 | 9 Pandas        | W   | 0.403      | 0.443        | 0.160 (0.029)    | 0.804 (0.144)    | -         |     3.84 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           30 |     2222 | 2024-09-21 | CYBERSHOKE      | W   | 0.399      | 0.443        | -                | 0.624 (0.110)    | -         |     1.24 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           29 |     2244 | 2024-09-20 | 9INE            | L   | 0.392      | -            | -                | -                | -         |   -10.23 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           28 |     2291 | 2024-09-19 | 9 Pandas        | W   | 0.384      | 0.443        | 0.160 (0.027)    | 0.804 (0.137)    | -         |     3.80 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           27 |     2315 | 2024-09-18 | SINNERS         | W   | 0.379      | -            | -                | -                | -         |     3.22 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           26 |     2367 | 2024-09-16 | CYBERSHOKE      | W   | 0.365      | -            | -                | -                | -         |     1.10 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           25 |     2377 | 2024-09-16 | BOGATYRI        | W   | 0.364      | -            | -                | -                | -         |     0.09 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           24 |     2502 | 2024-09-12 | Monte           | W   | 0.337      | -            | -                | -                | -         |     2.15 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           23 |     2616 | 2024-09-07 | Zero Tenacity   | L   | 0.306      | -            | -                | -                | -         |    -7.47 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           22 |     2681 | 2024-09-05 | los kogutos     | W   | 0.293      | -            | -                | -                | -         |     3.22 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           21 |     2773 | 2024-09-03 | Sashi           | W   | 0.277      | -            | -                | -                | -         |     1.69 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           20 |     2945 | 2024-08-28 | Metizport       | L   | 0.237      | -            | -                | -                | -         |    -2.88 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           19 |     2987 | 2024-08-27 | ALTERNATE aTTaX | L   | 0.232      | -            | -                | -                | -         |    -5.20 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           18 |     3157 | 2024-08-23 | Insilio         | W   | 0.206      | -            | -                | -                | -         |     0.41 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           17 |     3171 | 2024-08-23 | 9 Pandas        | L   | 0.204      | -            | -                | -                | -         |    -4.48 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           16 |     3211 | 2024-08-22 | Sashi           | W   | 0.197      | -            | -                | -                | -         |     1.16 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           15 |     3253 | 2024-08-21 | los kogutos     | L   | 0.191      | -            | -                | -                | -         |    -3.83 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           14 |     3275 | 2024-08-21 | ARCRED          | W   | 0.190      | -            | -                | -                | -         |     0.36 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           13 |     3438 | 2024-08-15 | HEROIC          | W   | 0.151      | -            | -                | -                | -         |     1.84 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           12 |     3528 | 2024-08-12 | 3DMAX           | W   | 0.133      | 0.500        | 0.422 (0.028)    | -                | -         |     2.88 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           11 |     3568 | 2024-08-11 | Endpoint        | W   | 0.124      | -            | -                | -                | -         |     0.34 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|           10 |     3592 | 2024-08-10 | B8              | W   | 0.117      | -            | -                | -                | -         |     1.16 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            9 |     3613 | 2024-08-09 | 9 Pandas        | W   | 0.112      | -            | -                | -                | -         |     0.18 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            8 |     3630 | 2024-08-08 | Sampi           | W   | 0.106      | -            | -                | -                | -         |     0.58 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            7 |     3665 | 2024-08-07 | B8              | W   | 0.100      | -            | -                | -                | -         |     0.99 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            6 |     3786 | 2024-08-04 | Aurora          | W   | 0.078      | -            | -                | -                | -         |     0.10 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            5 |     3822 | 2024-08-03 | los kogutos     | L   | 0.072      | -            | -                | -                | -         |    -1.33 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            4 |     3866 | 2024-08-02 | fnatic          | L   | 0.064      | -            | -                | -                | -         |    -1.36 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            3 |     3870 | 2024-08-02 | Johnny Speeds   | L   | 0.063      | -            | -                | -                | -         |    -1.51 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            2 |     3936 | 2024-07-31 | SovvyKiNG       | W   | 0.053      | -            | -                | -                | -         |     0.03 | 1eeR, khaN, riskyb0b, Xant3r, zweih |
|            1 |     3998 | 2024-07-30 | G2 Ares         | W   | 0.044      | -            | -                | -                | -         |     0.03 | 1eeR, khaN, riskyb0b, Xant3r, zweih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($111,561.24)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.50) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.725 | $10,000.00     | $7,250.59       |
| 2024-10-20 |      0.592 | $12,500.00     | $7,396.03       |
| 2024-10-19 |      0.586 | $150,000.00    | $87,948.30      |
| 2024-09-26 |      0.432 | $500.00        | $216.05         |
| 2024-09-24 |      0.418 | $12,000.00     | $5,014.08       |
| 2024-09-08 |      0.312 | $2,000.00      | $624.63         |
| 2024-08-11 |      0.124 | $25,000.00     | $3,111.56       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
