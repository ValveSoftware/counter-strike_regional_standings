### Roster Details<br />
Team Name: paiN<br />
Roster: biguzera, dav1deuS, kauez, nqz, snow<br />
Global Rank: [16](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_03.md)<br />
Regional Rank: [3]( ../../standings_americas_2025_02_03.md)<br />
<br />
Final Rank Value:  1444.6<br />
<br />
Final Rank Value (1444.6) = Starting Rank Value (1470.0) + Head To Head Adjustments (-25.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.674[<sup>1</sup>](#table2)
- Bounty Collected: 0.476[<sup>2</sup>](#table1)
- Opponent Network: 0.164[<sup>2</sup>](#table1)
- LAN Wins: 0.893[<sup>2</sup>](#table1)

The average of these factors is 0.552<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1470.0
- 400 + ( ( 0.552 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 1470.0


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
|           67 |       29 | 2025-01-31 | Astralis      | L   | 1.000      | -            | -                | -                | -         |   -16.23 | biguzera, dav1deuS, kauez, nqz, snow |
|           66 |       39 | 2025-01-30 | GamerLegion   | L   | 1.000      | -            | -                | -                | -         |   -15.38 | biguzera, dav1deuS, kauez, nqz, snow |
|           65 |       54 | 2025-01-29 | Virtus.pro    | W   | 1.000      | -            | -                | -                | 1 (1.000) |    14.41 | biguzera, dav1deuS, kauez, nqz, snow |
|           64 |      164 | 2025-01-24 | Natus Vincere | L   | 1.000      | -            | -                | -                | -         |    -5.24 | biguzera, dav1deuS, kauez, nqz, snow |
|           63 |      327 | 2025-01-18 | FaZe          | W   | 1.000      | 0.143        | 1.000 (0.143)    | -                | -         |    28.18 | biguzera, dav1deuS, kauez, nqz, snow |
|           62 |      332 | 2025-01-17 | GamerLegion   | W   | 1.000      | 0.143        | 0.157 (0.022)    | -                | -         |    17.61 | biguzera, dav1deuS, kauez, nqz, snow |
|           61 |      666 | 2024-12-07 | FURIA         | L   | 0.812      | -            | -                | -                | -         |    -7.67 | biguzera, kauez, lux, nqz, snow      |
|           60 |      694 | 2024-12-06 | BIG           | W   | 0.805      | 1.000        | 0.352 (0.283)    | 0.608 (0.489)    | 1 (0.805) |    11.17 | biguzera, kauez, lux, nqz, snow      |
|           59 |      713 | 2024-12-05 | 3DMAX         | L   | 0.798      | -            | -                | -                | -         |   -10.42 | biguzera, kauez, lux, nqz, snow      |
|           58 |      731 | 2024-12-04 | MOUZ          | L   | 0.796      | -            | -                | -                | -         |    -4.25 | biguzera, kauez, lux, nqz, snow      |
|           57 |      788 | 2024-12-02 | FlyQuest      | W   | 0.777      | -            | -                | -                | 1 (0.777) |     7.06 | biguzera, kauez, lux, nqz, snow      |
|           56 |      809 | 2024-11-30 | Cloud9        | W   | 0.770      | -            | -                | -                | 1 (0.770) |     2.75 | biguzera, kauez, lux, nqz, snow      |
|           55 |      830 | 2024-11-30 | GamerLegion   | L   | 0.765      | -            | -                | -                | -         |   -10.27 | biguzera, kauez, lux, nqz, snow      |
|           54 |      839 | 2024-11-29 | Imperial      | W   | 0.764      | -            | -                | -                | 1 (0.764) |     3.45 | biguzera, kauez, lux, nqz, snow      |
|           53 |     1180 | 2024-11-13 | 9z            | W   | 0.656      | -            | -                | -                | 1 (0.656) |     1.21 | biguzera, kauez, lux, nqz, snow      |
|           52 |     1210 | 2024-11-12 | Imperial      | W   | 0.650      | -            | -                | -                | 1 (0.650) |     2.88 | biguzera, kauez, lux, nqz, snow      |
|           51 |     1236 | 2024-11-12 | Wildcard      | L   | 0.645      | -            | -                | -                | -         |   -12.98 | biguzera, kauez, lux, nqz, snow      |
|           50 |     1247 | 2024-11-11 | Nouns         | W   | 0.643      | -            | -                | -                | 1 (0.643) |     2.15 | biguzera, kauez, lux, nqz, snow      |
|           49 |     1546 | 2024-10-27 | B8            | L   | 0.540      | -            | -                | -                | -         |   -14.12 | biguzera, kauez, lux, nqz, snow      |
|           48 |     1595 | 2024-10-25 | Legacy        | W   | 0.526      | 0.500        | -                | 0.487 (0.128)    | 1 (0.526) |     1.58 | biguzera, kauez, lux, nqz, snow      |
|           47 |     1601 | 2024-10-25 | Monte         | W   | 0.525      | 0.500        | -                | 0.635 (0.167)    | 1 (0.525) |     1.44 | biguzera, kauez, lux, nqz, snow      |
|           46 |     1652 | 2024-10-20 | MIBR          | W   | 0.495      | 0.450        | 0.225 (0.050)    | 0.649 (0.144)    | -         |     7.37 | biguzera, kauez, lux, nqz, snow      |
|           45 |     1734 | 2024-10-17 | MIBR          | W   | 0.475      | 0.450        | 0.225 (0.048)    | 0.649 (0.139)    | -         |     7.36 | biguzera, kauez, lux, nqz, snow      |
|           44 |     1764 | 2024-10-16 | adalYamigos   | W   | 0.468      | -            | -                | -                | -         |     0.43 | biguzera, kauez, lux, nqz, snow      |
|           43 |     1918 | 2024-10-08 | Imperial      | L   | 0.415      | -            | -                | -                | -         |   -11.39 | biguzera, kauez, lux, nqz, snow      |
|           42 |     1925 | 2024-10-08 | Imperial      | W   | 0.415      | 0.450        | 0.158 (0.029)    | -                | -         |     1.67 | biguzera, kauez, lux, nqz, snow      |
|           41 |     1931 | 2024-10-08 | MIBR          | W   | 0.414      | 0.450        | 0.225 (0.042)    | 0.649 (0.121)    | -         |     6.39 | biguzera, kauez, lux, nqz, snow      |
|           40 |     1934 | 2024-10-08 | MIBR          | W   | 0.413      | 0.450        | 0.225 (0.042)    | 0.649 (0.121)    | -         |     6.63 | biguzera, kauez, lux, nqz, snow      |
|           39 |     1953 | 2024-10-07 | FaZe          | L   | 0.408      | -            | -                | -                | -         |    -1.04 | biguzera, kauez, lux, nqz, snow      |
|           38 |     1963 | 2024-10-07 | MOUZ          | L   | 0.406      | -            | -                | -                | -         |    -2.40 | biguzera, kauez, lux, nqz, snow      |
|           37 |     2048 | 2024-10-04 | BESTIA        | L   | 0.387      | -            | -                | -                | -         |   -10.90 | biguzera, kauez, lux, nqz, snow      |
|           36 |     2110 | 2024-10-02 | Fluxo         | L   | 0.375      | -            | -                | -                | -         |   -10.47 | biguzera, kauez, lux, nqz, snow      |
|           35 |     2113 | 2024-10-02 | Fluxo         | L   | 0.375      | -            | -                | -                | -         |   -10.60 | biguzera, kauez, lux, nqz, snow      |
|           34 |     2117 | 2024-10-02 | RED Canids    | W   | 0.374      | -            | -                | -                | -         |     1.05 | biguzera, kauez, lux, nqz, snow      |
|           33 |     2122 | 2024-10-02 | RED Canids    | L   | 0.374      | -            | -                | -                | -         |   -10.81 | biguzera, kauez, lux, nqz, snow      |
|           32 |     2158 | 2024-10-01 | Swingers      | W   | 0.368      | -            | -                | -                | -         |     0.29 | biguzera, kauez, lux, nqz, snow      |
|           31 |     2162 | 2024-10-01 | Swingers      | W   | 0.368      | -            | -                | -                | -         |     0.29 | biguzera, kauez, lux, nqz, snow      |
|           30 |     2216 | 2024-09-29 | Fluxo         | W   | 0.356      | -            | -                | -                | -         |     1.01 | biguzera, kauez, lux, nqz, snow      |
|           29 |     2220 | 2024-09-29 | Solid         | W   | 0.354      | -            | -                | -                | -         |     0.52 | biguzera, kauez, lux, nqz, snow      |
|           28 |     2246 | 2024-09-28 | RED Canids    | W   | 0.349      | -            | -                | -                | -         |     0.89 | biguzera, kauez, lux, nqz, snow      |
|           27 |     2252 | 2024-09-28 | Solid         | L   | 0.348      | -            | -                | -                | -         |   -10.47 | biguzera, kauez, lux, nqz, snow      |
|           26 |     2384 | 2024-09-25 | ODDIK         | W   | 0.328      | -            | -                | -                | -         |     0.35 | biguzera, kauez, lux, nqz, snow      |
|           25 |     2388 | 2024-09-25 | ODDIK         | W   | 0.328      | -            | -                | -                | -         |     0.35 | biguzera, kauez, lux, nqz, snow      |
|           24 |     2436 | 2024-09-24 | Sharks        | W   | 0.322      | 0.450        | -                | 0.717 (0.104)    | -         |     1.40 | biguzera, kauez, lux, nqz, snow      |
|           23 |     2443 | 2024-09-24 | Sharks        | W   | 0.321      | -            | -                | -                | -         |     1.41 | biguzera, kauez, lux, nqz, snow      |
|           22 |     2483 | 2024-09-23 | RED Canids    | W   | 0.314      | -            | -                | -                | -         |     0.14 | biguzera, kauez, lux, nqz, snow      |
|           21 |     2499 | 2024-09-23 | inSanitY      | W   | 0.313      | -            | -                | -                | -         |     0.15 | biguzera, kauez, lux, nqz, snow      |
|           20 |     2589 | 2024-09-19 | KRÜ           | W   | 0.288      | -            | -                | -                | -         |     0.20 | biguzera, kauez, lux, nqz, snow      |
|           19 |     2592 | 2024-09-19 | KRÜ           | W   | 0.288      | -            | -                | -                | -         |     0.20 | biguzera, kauez, lux, nqz, snow      |
|           18 |     2625 | 2024-09-18 | BESTIA        | W   | 0.281      | 0.450        | -                | 0.887 (0.112)    | -         |     0.70 | biguzera, kauez, lux, nqz, snow      |
|           17 |     2629 | 2024-09-18 | BESTIA        | W   | 0.281      | 0.450        | -                | 0.887 (0.112)    | -         |     0.70 | biguzera, kauez, lux, nqz, snow      |
|           16 |     3152 | 2024-08-31 | Eternal Fire  | L   | 0.159      | -            | -                | -                | -         |    -1.06 | biguzera, kauez, lux, nqz, snow      |
|           15 |     3162 | 2024-08-30 | Virtus.pro    | W   | 0.153      | -            | -                | -                | -         |     2.73 | biguzera, kauez, lux, nqz, snow      |
|           14 |     3190 | 2024-08-29 | MOUZ          | L   | 0.147      | -            | -                | -                | -         |    -0.95 | biguzera, kauez, lux, nqz, snow      |
|           13 |     3242 | 2024-08-28 | Falcons       | W   | 0.140      | 0.769        | 0.923 (0.100)    | -                | -         |     3.43 | biguzera, kauez, lux, nqz, snow      |
|           12 |     3332 | 2024-08-27 | Falcons       | W   | 0.131      | -            | -                | -                | -         |     0.15 | biguzera, kauez, lux, nqz, snow      |
|           11 |     3440 | 2024-08-25 | 9z            | W   | 0.119      | -            | -                | -                | -         |     0.15 | biguzera, kauez, lux, nqz, snow      |
|           10 |     3456 | 2024-08-24 | FaZe          | L   | 0.114      | -            | -                | -                | -         |    -0.31 | biguzera, kauez, lux, nqz, snow      |
|            9 |     3459 | 2024-08-24 | BetBoom       | W   | 0.113      | -            | -                | -                | -         |     0.41 | biguzera, kauez, lux, nqz, snow      |
|            8 |     3485 | 2024-08-23 | Cloud9        | W   | 0.106      | -            | -                | -                | -         |     0.22 | biguzera, kauez, lux, nqz, snow      |
|            7 |     3811 | 2024-08-13 | G2            | L   | 0.039      | -            | -                | -                | -         |    -0.07 | biguzera, kauez, lux, nqz, snow      |
|            6 |     3850 | 2024-08-12 | The MongolZ   | W   | 0.034      | 1.000        | 1.000 (0.034)    | -                | -         |     0.97 | biguzera, kauez, lux, nqz, snow      |
|            5 |     3879 | 2024-08-11 | 9z            | W   | 0.027      | -            | -                | -                | -         |     0.04 | biguzera, kauez, lux, nqz, snow      |
|            4 |     3903 | 2024-08-10 | Natus Vincere | L   | 0.020      | -            | -                | -                | -         |    -0.10 | biguzera, kauez, lux, nqz, snow      |
|            3 |     3925 | 2024-08-09 | MIBR          | W   | 0.014      | -            | -                | -                | -         |     0.24 | biguzera, kauez, lux, nqz, snow      |
|            2 |     3937 | 2024-08-09 | Imperial      | W   | 0.012      | -            | -                | -                | -         |     0.04 | biguzera, kauez, lux, nqz, snow      |
|            1 |     3987 | 2024-08-07 | Liquid        | L   | 0.001      | -            | -                | -                | -         |    -0.01 | biguzera, kauez, lux, nqz, snow      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($62,018.45)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.33) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-31 |      1.000 | $4,500.00      | $4,500.00       |
| 2025-01-26 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-12-15 |      0.865 | $20,000.00     | $17,299.34      |
| 2024-10-27 |      0.540 | $10,000.00     | $5,401.54       |
| 2024-10-20 |      0.495 | $20,000.00     | $9,890.10       |
| 2024-10-13 |      0.447 | $4,000.00      | $1,789.52       |
| 2024-09-01 |      0.165 | $25,000.00     | $4,136.01       |
| 2024-08-27 |      0.133 | $10,000.00     | $1,325.07       |
| 2024-08-25 |      0.120 | $7,500.00      | $903.66         |
| 2024-08-18 |      0.074 | $24,000.00     | $1,773.21       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
