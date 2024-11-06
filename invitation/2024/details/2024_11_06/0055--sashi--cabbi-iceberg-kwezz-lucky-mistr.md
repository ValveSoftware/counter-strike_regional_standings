### Roster Details<br />
Team Name: Sashi<br />
Roster: Cabbi, IceBerg, kwezz, Lucky, MistR<br />
Global Rank: [55](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_06.md)<br />
Regional Rank: [38]( ../../standings_europe_2024_11_06.md)<br />
<br />
Final Rank Value:  1011.7<br />
<br />
Final Rank Value (1011.7) = Starting Rank Value (959.9) + Head To Head Adjustments (51.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.438[<sup>1</sup>](#table2)
- Bounty Collected: 0.394[<sup>2</sup>](#table1)
- Opponent Network: 0.241[<sup>2</sup>](#table1)
- LAN Wins: 0.069[<sup>2</sup>](#table1)

The average of these factors is 0.285<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 959.9
- 400 + ( ( 0.285 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 959.9


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
|           70 |       21 | 2024-11-05 | Rebels            | W   | 1.000      | 0.384        | -                | 0.516 (0.198)    | 0 (0.000) |    13.35 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           69 |       82 | 2024-11-02 | Into the Breach   | L   | 1.000      | -            | -                | -                | -         |   -16.72 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           68 |       97 | 2024-11-01 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -18.37 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           67 |      108 | 2024-11-01 | Permitta          | W   | 1.000      | 0.426        | -                | 1.000 (0.426)    | 0 (0.000) |    10.41 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           66 |      173 | 2024-10-29 | GUN5              | L   | 1.000      | -            | -                | -                | -         |   -14.42 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           65 |      260 | 2024-10-24 | ECLOT             | W   | 1.000      | 0.384        | 0.048 (0.018)    | 0.957 (0.368)    | 0 (0.000) |    14.70 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           64 |      346 | 2024-10-19 | SovvyKiNG         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.21 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           63 |      386 | 2024-10-17 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -4.54 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           62 |      416 | 2024-10-16 | PARIVISION        | W   | 1.000      | 0.500        | 0.028 (0.014)    | 0.516 (0.258)    | 0 (0.000) |    19.41 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           61 |      448 | 2024-10-15 | Sangal            | L   | 1.000      | -            | -                | -                | -         |    -3.06 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           60 |      489 | 2024-10-12 | Fire Flux         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.29 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           59 |     1258 | 2024-09-19 | Monte             | L   | 0.879      | -            | -                | -                | -         |   -11.99 | Altekz, Cabbi, IceBerg, Lucky, MistR |
|           58 |     1300 | 2024-09-18 | UNPAID            | W   | 0.872      | 0.384        | 0.113 (0.038)    | -                | 0 (0.000) |    17.82 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           57 |     1314 | 2024-09-17 | UNPAID            | L   | 0.868      | -            | -                | -                | -         |    -9.43 | Altekz, Cabbi, IceBerg, Lucky, MistR |
|           56 |     1319 | 2024-09-17 | Into the Breach   | L   | 0.867      | -            | -                | -                | -         |   -16.13 | Altekz, Cabbi, IceBerg, Lucky, MistR |
|           55 |     1328 | 2024-09-17 | UNPAID            | W   | 0.866      | 0.443        | 0.113 (0.043)    | 0.426 (0.163)    | 0 (0.000) |    17.34 | Altekz, Cabbi, IceBerg, Lucky, MistR |
|           54 |     1390 | 2024-09-14 | Rebels            | L   | 0.848      | -            | -                | -                | -         |   -15.64 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           53 |     1400 | 2024-09-14 | OG                | W   | 0.847      | 0.384        | 0.127 (0.041)    | -                | -         |    13.62 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           52 |     1467 | 2024-09-12 | TSM               | W   | 0.833      | 0.384        | 0.042 (0.013)    | 0.725 (0.232)    | -         |    13.13 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           51 |     1533 | 2024-09-10 | GamerLegion       | W   | 0.819      | 0.384        | 0.132 (0.042)    | 0.567 (0.179)    | -         |    14.73 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           50 |     1743 | 2024-09-03 | Nemiga            | L   | 0.773      | -            | -                | -                | -         |    -3.52 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           49 |     1814 | 2024-08-30 | Aurora            | L   | 0.746      | -            | -                | -                | -         |    -8.17 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           48 |     1844 | 2024-08-29 | GUN5              | L   | 0.741      | -            | -                | -                | -         |   -12.59 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           47 |     1852 | 2024-08-29 | Monte             | W   | 0.740      | -            | -                | -                | -         |    13.83 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           46 |     2016 | 2024-08-26 | Sampi             | L   | 0.721      | -            | -                | -                | -         |   -12.94 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           45 |     2132 | 2024-08-23 | OG                | W   | 0.700      | 0.143        | 0.127 (0.013)    | -                | -         |    12.22 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           44 |     2146 | 2024-08-23 | ARCRED            | W   | 0.699      | -            | -                | -                | -         |     7.44 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           43 |     2181 | 2024-08-22 | Nemiga            | L   | 0.692      | -            | -                | -                | -         |    -2.44 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           42 |     2201 | 2024-08-21 | AMKAL             | W   | 0.687      | -            | -                | -                | -         |     8.70 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           41 |     2236 | 2024-08-21 | Qiang             | L   | 0.686      | -            | -                | -                | -         |   -16.67 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           40 |     2293 | 2024-08-19 | B8                | L   | 0.674      | -            | -                | -                | -         |    -4.13 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           39 |     2297 | 2024-08-19 | Metizport         | W   | 0.674      | -            | -                | -                | -         |     8.48 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           38 |     2304 | 2024-08-19 | Aurora            | W   | 0.673      | 0.500        | 0.088 (0.030)    | 0.489 (0.165)    | -         |    14.64 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           37 |     2508 | 2024-08-12 | SAW               | L   | 0.627      | -            | -                | -                | -         |    -0.56 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           36 |     2558 | 2024-08-10 | Endpoint          | L   | 0.613      | -            | -                | -                | -         |   -11.60 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           35 |     2592 | 2024-08-09 | Qiang             | W   | 0.605      | -            | -                | -                | -         |     4.38 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           34 |     2640 | 2024-08-07 | 1WIN              | W   | 0.594      | -            | -                | -                | -         |     5.09 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           33 |     2691 | 2024-08-06 | KOI               | W   | 0.588      | -            | -                | -                | -         |     6.07 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           32 |     2724 | 2024-08-05 | ECSTATIC          | L   | 0.580      | -            | -                | -                | -         |   -10.20 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           31 |     2729 | 2024-08-05 | TSM               | L   | 0.579      | -            | -                | -                | -         |   -10.85 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           30 |     2734 | 2024-08-05 | ECSTATIC          | W   | 0.579      | -            | -                | -                | -         |     7.85 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           29 |     2915 | 2024-07-31 | Insilio           | W   | 0.547      | 0.500        | -                | 0.730 (0.200)    | -         |     7.12 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           28 |     2951 | 2024-07-30 | EYEBALLERS        | W   | 0.541      | -            | -                | -                | -         |     4.08 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           27 |     2966 | 2024-07-30 | Zero Tenacity     | L   | 0.540      | -            | -                | -                | -         |    -7.15 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           26 |     3142 | 2024-07-24 | Monte             | W   | 0.501      | 0.500        | -                | 0.882 (0.221)    | -         |     9.25 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           25 |     3367 | 2024-07-18 | FURIA             | L   | 0.460      | -            | -                | -                | -         |    -0.53 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           24 |     3376 | 2024-07-18 | Qiang             | W   | 0.459      | -            | -                | -                | 1 (0.459) |     2.46 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           23 |     3439 | 2024-07-17 | MOUZ              | L   | 0.453      | -            | -                | -                | -         |    -0.20 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           22 |     3574 | 2024-07-13 | TSM               | L   | 0.427      | -            | -                | -                | -         |    -7.51 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           21 |     3582 | 2024-07-12 | FLuffy Gangsters  | W   | 0.420      | -            | -                | -                | -         |     2.86 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           20 |     3600 | 2024-07-11 | Endpoint          | W   | 0.413      | -            | -                | -                | -         |     5.02 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           19 |     3624 | 2024-07-10 | Johnny Speeds     | L   | 0.406      | -            | -                | -                | -         |    -5.94 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           18 |     3627 | 2024-07-10 | 9INE              | W   | 0.405      | -            | -                | -                | -         |     6.43 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           17 |     3828 | 2024-06-14 | 3DMAX             | L   | 0.233      | -            | -                | -                | -         |    -0.34 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           16 |     3864 | 2024-06-13 | Sampi             | W   | 0.227      | -            | -                | -                | -         |     3.54 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           15 |     3887 | 2024-06-12 | CPH Wolves        | W   | 0.221      | -            | -                | -                | -         |     1.79 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           14 |     3892 | 2024-06-12 | Astralis Talent   | W   | 0.220      | -            | -                | -                | -         |     0.90 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           13 |     4156 | 2024-06-06 | Ninjas in Pyjamas | L   | 0.181      | -            | -                | -                | -         |    -1.70 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           12 |     4188 | 2024-06-06 | HEROIC            | L   | 0.179      | -            | -                | -                | -         |    -0.09 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           11 |     4221 | 2024-06-05 | ENCE              | L   | 0.174      | -            | -                | -                | -         |    -0.54 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           10 |     4235 | 2024-06-05 | Astralis          | W   | 0.173      | 0.715        | 0.291 (0.036)    | -                | 1 (0.173) |     5.15 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            9 |     4243 | 2024-06-05 | The MongolZ       | L   | 0.172      | -            | -                | -                | -         |    -0.03 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            8 |     4676 | 2024-05-20 | Monte             | L   | 0.066      | -            | -                | -                | -         |    -1.67 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            7 |     4691 | 2024-05-19 | Passion UA        | W   | 0.061      | -            | -                | -                | -         |     1.10 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            6 |     4718 | 2024-05-18 | B8                | L   | 0.054      | -            | -                | -                | -         |    -0.20 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            5 |     4729 | 2024-05-18 | Monte             | W   | 0.053      | -            | -                | -                | -         |     0.32 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            4 |     4735 | 2024-05-18 | ALTERNATE aTTaX   | W   | 0.052      | -            | -                | -                | -         |     0.78 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            3 |     4768 | 2024-05-17 | ex-Guild Eagles   | W   | 0.045      | -            | -                | -                | -         |     0.19 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            2 |     4805 | 2024-05-16 | Passion UA        | L   | 0.039      | -            | -                | -                | -         |    -0.52 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            1 |     4853 | 2024-05-15 | Endpoint          | W   | 0.032      | -            | -                | -                | -         |     0.42 | Cabbi, IceBerg, kwezz, Lucky, MistR  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,870.35)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-09-14 |      0.848 | $5,000.00      | $4,237.79       |
| 2024-08-11 |      0.620 | $5,000.00      | $3,097.82       |
| 2024-07-21 |      0.481 | $15,000.00     | $7,220.68       |
| 2024-07-13 |      0.427 | $3,216.00      | $1,371.85       |
| 2024-06-12 |      0.221 | $9,365.00      | $2,067.12       |
| 2024-06-09 |      0.200 | $8,000.00      | $1,603.99       |
| 2024-05-18 |      0.054 | $5,000.00      | $271.10         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
