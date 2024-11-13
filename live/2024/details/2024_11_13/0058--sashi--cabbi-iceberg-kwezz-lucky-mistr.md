### Roster Details<br />
Team Name: Sashi<br />
Roster: Cabbi, IceBerg, kwezz, Lucky, MistR<br />
Global Rank: [58](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_13.md)<br />
Regional Rank: [40]( ../../standings_europe_2024_11_13.md)<br />
<br />
Final Rank Value:  1021.2<br />
<br />
Final Rank Value (1021.2) = Starting Rank Value (967.5) + Head To Head Adjustments (53.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.444[<sup>1</sup>](#table2)
- Bounty Collected: 0.402[<sup>2</sup>](#table1)
- Opponent Network: 0.230[<sup>2</sup>](#table1)
- LAN Wins: 0.061[<sup>2</sup>](#table1)

The average of these factors is 0.284<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 967.5
- 400 + ( ( 0.284 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 967.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           71 |      124 | 2024-11-09 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |   -11.92 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           70 |      142 | 2024-11-08 | 500               | L   | 1.000      | -            | -                | -                | -         |   -15.53 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           69 |      151 | 2024-11-07 | Endpoint          | W   | 1.000      | 0.384        | -                | 0.604 (0.232)    | 0 (0.000) |     9.52 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           68 |      155 | 2024-11-07 | OG                | W   | 1.000      | 0.384        | 0.134 (0.051)    | 0.393 (0.151)    | 0 (0.000) |    16.40 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           67 |      190 | 2024-11-05 | Rebels            | W   | 1.000      | 0.384        | 0.035 (0.013)    | 0.469 (0.180)    | 0 (0.000) |    13.34 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           66 |      251 | 2024-11-02 | Into the Breach   | L   | 1.000      | -            | -                | -                | -         |   -16.46 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           65 |      266 | 2024-11-01 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -18.17 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           64 |      277 | 2024-11-01 | Permitta          | W   | 1.000      | 0.426        | -                | 1.000 (0.426)    | 0 (0.000) |    11.21 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           63 |      342 | 2024-10-29 | GUN5              | L   | 1.000      | -            | -                | -                | -         |   -14.19 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           62 |      429 | 2024-10-24 | ECLOT             | W   | 1.000      | 0.384        | 0.077 (0.030)    | 1.000 (0.384)    | 0 (0.000) |    15.80 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           61 |      515 | 2024-10-19 | SovvyKiNG         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.17 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           60 |      555 | 2024-10-17 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -4.28 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           59 |      585 | 2024-10-16 | PARIVISION        | W   | 1.000      | 0.500        | 0.028 (0.014)    | 0.475 (0.237)    | 0 (0.000) |    19.62 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           58 |      617 | 2024-10-15 | Sangal            | L   | 1.000      | -            | -                | -                | -         |    -2.95 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           57 |      658 | 2024-10-12 | Fire Flux         | W   | 0.985      | -            | -                | -                | 0 (0.000) |     2.09 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           56 |     1427 | 2024-09-19 | Monte             | L   | 0.832      | -            | -                | -                | -         |   -11.31 | Altekz, Cabbi, IceBerg, Lucky, MistR |
|           55 |     1469 | 2024-09-18 | UNPAID            | W   | 0.824      | 0.384        | 0.120 (0.038)    | -                | -         |    17.14 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           54 |     1483 | 2024-09-17 | UNPAID            | L   | 0.820      | -            | -                | -                | -         |    -8.66 | Altekz, Cabbi, IceBerg, Lucky, MistR |
|           53 |     1488 | 2024-09-17 | Into the Breach   | L   | 0.819      | -            | -                | -                | -         |   -15.29 | Altekz, Cabbi, IceBerg, Lucky, MistR |
|           52 |     1497 | 2024-09-17 | UNPAID            | W   | 0.818      | 0.443        | 0.120 (0.044)    | -                | -         |    16.74 | Altekz, Cabbi, IceBerg, Lucky, MistR |
|           51 |     1559 | 2024-09-14 | Rebels            | L   | 0.800      | -            | -                | -                | -         |   -14.74 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           50 |     1569 | 2024-09-14 | OG                | W   | 0.799      | 0.384        | 0.134 (0.041)    | -                | -         |    12.89 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           49 |     1636 | 2024-09-12 | TSM               | W   | 0.786      | 0.384        | -                | 0.642 (0.194)    | -         |    12.38 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           48 |     1702 | 2024-09-10 | GamerLegion       | W   | 0.772      | 0.384        | 0.128 (0.038)    | 0.502 (0.149)    | -         |    13.54 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           47 |     1912 | 2024-09-03 | Nemiga            | L   | 0.725      | -            | -                | -                | -         |    -2.96 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           46 |     1983 | 2024-08-30 | Aurora            | L   | 0.699      | -            | -                | -                | -         |    -7.83 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           45 |     2013 | 2024-08-29 | GUN5              | L   | 0.694      | -            | -                | -                | -         |   -11.63 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           44 |     2021 | 2024-08-29 | Monte             | W   | 0.693      | -            | -                | -                | -         |    12.99 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           43 |     2185 | 2024-08-26 | Sampi             | L   | 0.674      | -            | -                | -                | -         |   -11.70 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           42 |     2301 | 2024-08-23 | OG                | W   | 0.653      | -            | -                | -                | -         |    11.40 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           41 |     2315 | 2024-08-23 | ARCRED            | W   | 0.652      | -            | -                | -                | -         |     6.62 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           40 |     2350 | 2024-08-22 | Nemiga            | L   | 0.644      | -            | -                | -                | -         |    -2.08 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           39 |     2370 | 2024-08-21 | AMKAL             | W   | 0.640      | -            | -                | -                | -         |     7.77 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           38 |     2405 | 2024-08-21 | Qiang             | L   | 0.638      | -            | -                | -                | -         |   -15.90 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           37 |     2462 | 2024-08-19 | B8                | L   | 0.627      | -            | -                | -                | -         |    -3.66 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           36 |     2466 | 2024-08-19 | Metizport         | W   | 0.626      | -            | -                | -                | -         |    13.58 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           35 |     2473 | 2024-08-19 | Aurora            | W   | 0.626      | 0.500        | 0.095 (0.030)    | -                | -         |    13.56 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           34 |     2677 | 2024-08-12 | SAW               | L   | 0.580      | -            | -                | -                | -         |    -0.49 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           33 |     2727 | 2024-08-10 | Endpoint          | L   | 0.566      | -            | -                | -                | -         |   -10.74 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           32 |     2761 | 2024-08-09 | Qiang             | W   | 0.558      | -            | -                | -                | -         |     3.81 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           31 |     2809 | 2024-08-07 | 1WIN              | W   | 0.547      | -            | -                | -                | -         |     4.38 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           30 |     2860 | 2024-08-06 | KOI               | W   | 0.540      | -            | -                | -                | -         |     5.18 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           29 |     2893 | 2024-08-05 | ECSTATIC          | L   | 0.533      | -            | -                | -                | -         |    -9.35 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           28 |     2898 | 2024-08-05 | TSM               | L   | 0.532      | -            | -                | -                | -         |   -10.05 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           27 |     2903 | 2024-08-05 | ECSTATIC          | W   | 0.531      | -            | -                | -                | -         |     7.27 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           26 |     3084 | 2024-07-31 | Insilio           | W   | 0.500      | 0.500        | -                | 0.654 (0.163)    | -         |     6.47 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           25 |     3120 | 2024-07-30 | EYEBALLERS        | W   | 0.494      | -            | -                | -                | -         |     3.77 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           24 |     3135 | 2024-07-30 | Zero Tenacity     | L   | 0.492      | -            | -                | -                | -         |    -6.76 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           23 |     3311 | 2024-07-24 | Monte             | W   | 0.454      | 0.500        | -                | 0.807 (0.183)    | -         |     8.50 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           22 |     3536 | 2024-07-18 | FURIA             | L   | 0.412      | -            | -                | -                | -         |    -0.42 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           21 |     3545 | 2024-07-18 | Qiang             | W   | 0.411      | -            | -                | -                | 1 (0.411) |     2.22 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           20 |     3608 | 2024-07-17 | MOUZ              | L   | 0.406      | -            | -                | -                | -         |    -0.19 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           19 |     3743 | 2024-07-13 | TSM               | L   | 0.379      | -            | -                | -                | -         |    -6.88 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           18 |     3751 | 2024-07-12 | FLuffy Gangsters  | W   | 0.372      | -            | -                | -                | -         |     2.47 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           17 |     3769 | 2024-07-11 | Endpoint          | W   | 0.366      | -            | -                | -                | -         |     4.35 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           16 |     3793 | 2024-07-10 | Johnny Speeds     | L   | 0.359      | -            | -                | -                | -         |    -5.31 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           15 |     3796 | 2024-07-10 | 9INE              | W   | 0.358      | -            | -                | -                | -         |     5.69 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           14 |     3997 | 2024-06-14 | 3DMAX             | L   | 0.186      | -            | -                | -                | -         |    -0.27 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           13 |     4033 | 2024-06-13 | Sampi             | W   | 0.179      | -            | -                | -                | -         |     2.86 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           12 |     4056 | 2024-06-12 | CPH Wolves        | W   | 0.173      | -            | -                | -                | -         |     1.77 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           11 |     4061 | 2024-06-12 | Astralis Talent   | W   | 0.173      | -            | -                | -                | -         |     0.83 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           10 |     4325 | 2024-06-06 | Ninjas in Pyjamas | L   | 0.134      | -            | -                | -                | -         |    -1.02 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            9 |     4357 | 2024-06-06 | HEROIC            | L   | 0.132      | -            | -                | -                | -         |    -0.06 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            8 |     4390 | 2024-06-05 | ENCE              | L   | 0.127      | -            | -                | -                | -         |    -0.36 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            7 |     4404 | 2024-06-05 | Astralis          | W   | 0.126      | 0.715        | 0.294 (0.026)    | -                | 1 (0.126) |     3.73 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            6 |     4412 | 2024-06-05 | The MongolZ       | L   | 0.125      | -            | -                | -                | -         |    -0.02 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            5 |     4845 | 2024-05-20 | Monte             | L   | 0.018      | -            | -                | -                | -         |    -0.47 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            4 |     4860 | 2024-05-19 | Passion UA        | W   | 0.013      | -            | -                | -                | -         |     0.23 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            3 |     4887 | 2024-05-18 | B8                | L   | 0.007      | -            | -                | -                | -         |    -0.03 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            2 |     4898 | 2024-05-18 | Monte             | W   | 0.006      | -            | -                | -                | -         |     0.03 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            1 |     4904 | 2024-05-18 | ALTERNATE aTTaX   | W   | 0.005      | -            | -                | -                | -         |     0.07 | Cabbi, IceBerg, kwezz, Lucky, MistR  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,977.80)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-10 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-10-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-09-14 |      0.800 | $5,000.00      | $4,001.28       |
| 2024-08-11 |      0.572 | $5,000.00      | $2,861.31       |
| 2024-07-21 |      0.434 | $15,000.00     | $6,511.16       |
| 2024-07-13 |      0.379 | $3,216.00      | $1,219.73       |
| 2024-06-12 |      0.173 | $9,365.00      | $1,624.14       |
| 2024-06-09 |      0.153 | $8,000.00      | $1,225.58       |
| 2024-05-18 |      0.007 | $5,000.00      | $34.60          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
