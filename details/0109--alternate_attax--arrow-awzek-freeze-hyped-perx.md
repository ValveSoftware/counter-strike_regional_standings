### Roster Details<br />
Team Name: ALTERNATE aTTaX<br />
Roster: ArroW, awzek, FreeZe, hyped, PerX<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [109](../standings_global.md)<br />
Regional Rank: [79]( ../standings_europe.md)<br />
Final Rank Value:  858.3<br />
<br />
Final Rank Value (858.3) = Starting Rank Value (1018.5) + Head To Head Adjustments (-160.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.419[<sup>1</sup>](#table2)
- Bounty Collected: 0.383[<sup>2</sup>](#table1)
- Opponent Network: 0.204[<sup>2</sup>](#table1)
- LAN Wins: 0.216[<sup>2</sup>](#table1)

The average of these factors is 0.306<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1018.5
- 400 + ( ( 0.306 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1018.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           79 |        8 | 2024-07-24 | Lilmix            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    17.89 | ArroW, awzek, FreeZe, hyped, PerX  |
|           78 |      173 | 2024-07-19 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -15.66 | ArroW, awzek, FreeZe, hyped, PerX  |
|           77 |      281 | 2024-07-17 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -12.65 | ArroW, awzek, FreeZe, hyped, PerX  |
|           76 |      302 | 2024-07-17 | Nexus             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.13 | ArroW, awzek, FreeZe, hyped, PerX  |
|           75 |      335 | 2024-07-16 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -14.06 | ArroW, awzek, FreeZe, hyped, PerX  |
|           74 |      400 | 2024-07-15 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |   -14.79 | ArroW, awzek, FreeZe, hyped, PerX  |
|           73 |      409 | 2024-07-14 | Kosovo            | L   | 1.000      | -            | -                | -                | -         |   -17.30 | ArroW, awzek, FreeZe, hyped, PerX  |
|           72 |      412 | 2024-07-14 | Sampi             | W   | 1.000      | 0.143        | -                | 0.994 (0.142)    | 0 (0.000) |    15.91 | ArroW, awzek, FreeZe, hyped, PerX  |
|           71 |      413 | 2024-07-14 | Latvia            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.58 | ArroW, awzek, FreeZe, hyped, PerX  |
|           70 |      422 | 2024-07-13 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |    -7.24 | ArroW, awzek, FreeZe, hyped, PerX  |
|           69 |      461 | 2024-07-11 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |   -11.99 | ArroW, awzek, FreeZe, hyped, PerX  |
|           68 |      518 | 2024-07-08 | Austria           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.89 | ArroW, awzek, FreeZe, hyped, PerX  |
|           67 |      639 | 2024-06-15 | Sissi State Punks | W   | 0.940      | -            | -                | -                | 1 (0.940) |     7.91 | ArroW, awzek, FreeZe, hyped, PerX  |
|           66 |      744 | 2024-06-12 | Versager trupp    | W   | 0.920      | -            | -                | -                | 0 (0.000) |     1.83 | ArroW, awzek, FreeZe, hyped, PerX  |
|           65 |      905 | 2024-06-08 | Kosovo            | L   | 0.893      | -            | -                | -                | -         |   -16.16 | ArroW, awzek, FreeZe, hyped, PerX  |
|           64 |      944 | 2024-06-07 | Kubix             | W   | 0.887      | -            | -                | -                | 1 (0.887) |     1.64 | ArroW, awzek, FreeZe, hyped, PerX  |
|           63 |     1392 | 2024-05-24 | Endpoint          | L   | 0.792      | -            | -                | -                | -         |   -12.01 | ArroW, awzek, FreeZe, hyped, PerX  |
|           62 |     1409 | 2024-05-23 | Entropiq          | W   | 0.785      | -            | -                | -                | 0 (0.000) |     1.36 | ArroW, awzek, FreeZe, hyped, PerX  |
|           61 |     1433 | 2024-05-22 | VP.Prodigy        | L   | 0.781      | -            | -                | -                | -         |   -13.25 | ArroW, awzek, FreeZe, hyped, PerX  |
|           60 |     1517 | 2024-05-20 | Nexus             | L   | 0.767      | -            | -                | -                | -         |   -16.29 | ArroW, awzek, FreeZe, hyped, PerX  |
|           59 |     1555 | 2024-05-19 | Passion UA        | L   | 0.758      | -            | -                | -                | -         |    -9.67 | ArroW, awzek, FreeZe, hyped, PerX  |
|           58 |     1590 | 2024-05-18 | Sashi             | L   | 0.751      | -            | -                | -                | -         |    -4.25 | ArroW, awzek, FreeZe, hyped, PerX  |
|           57 |     1610 | 2024-05-17 | EYEBALLERS        | L   | 0.747      | -            | -                | -                | -         |   -14.03 | ArroW, awzek, FreeZe, hyped, PerX  |
|           56 |     1647 | 2024-05-16 | 9 Pandas          | L   | 0.740      | -            | -                | -                | -         |    -8.99 | ArroW, awzek, FreeZe, hyped, PerX  |
|           55 |     1662 | 2024-05-16 | SINNERS           | L   | 0.738      | -            | -                | -                | -         |   -10.23 | ArroW, awzek, FreeZe, hyped, PerX  |
|           54 |     1752 | 2024-05-14 | PERA              | L   | 0.727      | -            | -                | -                | -         |   -13.13 | ArroW, awzek, FreeZe, hyped, PerX  |
|           53 |     1764 | 2024-05-14 | Endpoint          | W   | 0.725      | 0.435        | -                | 0.466 (0.147)    | 0 (0.000) |    10.12 | ArroW, awzek, FreeZe, hyped, PerX  |
|           52 |     1935 | 2024-05-06 | Sashi             | L   | 0.673      | -            | -                | -                | -         |    -4.68 | ArroW, awzek, FreeZe, hyped, PerX  |
|           51 |     2020 | 2024-05-02 | MOUZ NXT          | L   | 0.645      | -            | -                | -                | -         |    -8.31 | ArroW, awzek, FreeZe, hyped, PerX  |
|           50 |     2039 | 2024-05-01 | Sampi             | W   | 0.639      | 0.396        | 0.037 (0.009)    | 0.994 (0.252)    | -         |     8.74 | ArroW, awzek, FreeZe, hyped, PerX  |
|           49 |     2048 | 2024-05-01 | Sangal            | W   | 0.638      | 0.500        | 0.195 (0.062)    | 0.860 (0.274)    | -         |    13.31 | ArroW, awzek, FreeZe, hyped, PerX  |
|           48 |     2057 | 2024-04-30 | Endpoint          | L   | 0.633      | -            | -                | -                | -         |   -11.82 | ArroW, awzek, FreeZe, hyped, PerX  |
|           47 |     2069 | 2024-04-30 | Sampi             | W   | 0.631      | 0.396        | 0.037 (0.009)    | 0.994 (0.249)    | -         |     8.88 | ArroW, awzek, FreeZe, hyped, PerX  |
|           46 |     2098 | 2024-04-28 | Passion UA        | W   | 0.620      | 0.500        | 0.163 (0.050)    | 1.000 (0.310)    | -         |    10.66 | ArroW, awzek, FreeZe, hyped, PerX  |
|           45 |     2157 | 2024-04-26 | Gaimin Gladiators | W   | 0.605      | 0.500        | 0.053 (0.016)    | 0.432 (0.131)    | -         |    12.77 | ArroW, awzek, FreeZe, hyped, skyye |
|           44 |     2225 | 2024-04-23 | Enterprise        | W   | 0.585      | 0.384        | 0.050 (0.011)    | 0.646 (0.145)    | -         |     8.76 | ArroW, FreeZe, hyped, PerX, skyye  |
|           43 |     2227 | 2024-04-23 | Permitta          | L   | 0.584      | -            | -                | -                | -         |    -8.76 | ArroW, FreeZe, hyped, PerX, skyye  |
|           42 |     2237 | 2024-04-22 | ENCE Academy      | W   | 0.578      | -            | -                | -                | -         |     4.79 | ArroW, FreeZe, hyped, PerX, skyye  |
|           41 |     2250 | 2024-04-21 | MOUZ NXT          | L   | 0.573      | -            | -                | -                | -         |    -6.58 | ArroW, awzek, FreeZe, hyped, skyye |
|           40 |     2260 | 2024-04-21 | Sampi             | L   | 0.571      | -            | -                | -                | -         |    -9.63 | ArroW, awzek, FreeZe, hyped, skyye |
|           39 |     2267 | 2024-04-20 | Space             | L   | 0.567      | -            | -                | -                | -         |   -12.22 | ArroW, awzek, FreeZe, hyped, skyye |
|           38 |     2291 | 2024-04-20 | Enterprise        | W   | 0.564      | 0.500        | 0.050 (0.014)    | 0.646 (0.182)    | -         |     8.06 | ArroW, awzek, FreeZe, hyped, skyye |
|           37 |     2327 | 2024-04-19 | Passion UA        | W   | 0.559      | 0.371        | 0.163 (0.034)    | 1.000 (0.207)    | -         |    10.59 | ArroW, awzek, FreeZe, hyped, skyye |
|           36 |     2333 | 2024-04-19 | Zero Tenacity     | L   | 0.559      | -            | -                | -                | -         |    -6.91 | ArroW, awzek, FreeZe, hyped, skyye |
|           35 |     2383 | 2024-04-18 | HAVU              | L   | 0.552      | -            | -                | -                | -         |   -14.19 | ArroW, awzek, FreeZe, hyped, skyye |
|           34 |     2391 | 2024-04-18 | BLEED             | L   | 0.551      | -            | -                | -                | -         |    -7.21 | ArroW, awzek, FreeZe, hyped, skyye |
|           33 |     2452 | 2024-04-16 | Aurora Young Blud | W   | 0.539      | -            | -                | -                | -         |     4.10 | ArroW, awzek, FreeZe, hyped, skyye |
|           32 |     2465 | 2024-04-15 | Zero Tenacity     | L   | 0.533      | -            | -                | -                | -         |    -7.13 | ArroW, awzek, FreeZe, hyped, skyye |
|           31 |     2501 | 2024-04-13 | Alliance          | W   | 0.518      | -            | -                | -                | -         |     5.70 | ArroW, awzek, FreeZe, hyped, skyye |
|           30 |     2644 | 2024-04-09 | ECLOT             | W   | 0.492      | 0.371        | 0.084 (0.015)    | -                | -         |    10.70 | ArroW, awzek, FreeZe, hyped, skyye |
|           29 |     2678 | 2024-04-08 | SINNERS           | L   | 0.484      | -            | -                | -                | -         |    -5.80 | ArroW, awzek, FreeZe, hyped, skyye |
|           28 |     2769 | 2024-04-04 | Rebels            | L   | 0.460      | -            | -                | -                | -         |    -6.57 | ArroW, awzek, FreeZe, hyped, skyye |
|           27 |     2860 | 2024-04-02 | AMKAL             | L   | 0.445      | -            | -                | -                | -         |    -5.29 | ArroW, awzek, FreeZe, hyped, skyye |
|           26 |     2936 | 2024-03-27 | FAVBET            | L   | 0.407      | -            | -                | -                | -         |   -10.03 | ArroW, awzek, FreeZe, hyped, skyye |
|           25 |     2943 | 2024-03-27 | ex-Guild Eagles   | W   | 0.407      | -            | -                | -                | -         |     3.73 | ArroW, awzek, FreeZe, hyped, skyye |
|           24 |     2976 | 2024-03-25 | ex-Sprout         | W   | 0.394      | -            | -                | -                | -         |     0.84 | ArroW, awzek, FreeZe, hyped, skyye |
|           23 |     2991 | 2024-03-23 | Aurora            | L   | 0.380      | -            | -                | -                | -         |    -0.42 | ArroW, awzek, FreeZe, hyped, skyye |
|           22 |     3180 | 2024-03-14 | Metizport         | W   | 0.319      | -            | -                | -                | -         |     4.50 | ArroW, awzek, FreeZe, hyped, skyye |
|           21 |     3208 | 2024-03-13 | SINNERS           | L   | 0.314      | -            | -                | -                | -         |    -4.37 | ArroW, awzek, FreeZe, hyped, skyye |
|           20 |     3290 | 2024-03-10 | Entropiq          | L   | 0.292      | -            | -                | -                | -         |    -8.45 | ArroW, awzek, FreeZe, hyped, skyye |
|           19 |     3293 | 2024-03-10 | MOUZ NXT          | L   | 0.291      | -            | -                | -                | -         |    -3.98 | ArroW, awzek, FreeZe, hyped, skyye |
|           18 |     3337 | 2024-03-08 | Sashi             | W   | 0.278      | 0.371        | 0.234 (0.024)    | -                | -         |     5.96 | ArroW, awzek, FreeZe, hyped, skyye |
|           17 |     3377 | 2024-03-06 | brazylijski luz   | W   | 0.268      | -            | -                | -                | -         |     2.13 | ArroW, awzek, FreeZe, hyped, skyye |
|           16 |     3436 | 2024-03-05 | Sashi             | W   | 0.258      | -            | -                | -                | -         |     5.65 | ArroW, awzek, FreeZe, hyped, skyye |
|           15 |     3449 | 2024-03-04 | Passion UA        | L   | 0.252      | -            | -                | -                | -         |    -2.99 | ArroW, awzek, FreeZe, hyped, skyye |
|           14 |     3489 | 2024-03-02 | 500               | L   | 0.240      | -            | -                | -                | -         |    -6.27 | ArroW, awzek, FreeZe, hyped, skyye |
|           13 |     3516 | 2024-03-01 | fnatic            | L   | 0.232      | -            | -                | -                | -         |    -0.28 | ArroW, awzek, FreeZe, hyped, skyye |
|           12 |     3542 | 2024-02-28 | BetBoom           | L   | 0.219      | -            | -                | -                | -         |    -0.41 | ArroW, awzek, FreeZe, hyped, skyye |
|           11 |     3559 | 2024-02-27 | RUBY              | L   | 0.213      | -            | -                | -                | -         |    -3.85 | ArroW, awzek, FreeZe, hyped, skyye |
|           10 |     3582 | 2024-02-26 | Endpoint          | W   | 0.205      | -            | -                | -                | -         |     2.25 | ArroW, awzek, FreeZe, hyped, skyye |
|            9 |     3599 | 2024-02-25 | Alliance          | L   | 0.200      | -            | -                | -                | -         |    -4.38 | ArroW, awzek, FreeZe, hyped, skyye |
|            8 |     3762 | 2024-02-18 | Young Ninjas      | L   | 0.154      | -            | -                | -                | -         |    -3.87 | ArroW, awzek, FreeZe, PANIX, PerX  |
|            7 |     3934 | 2024-02-11 | Entropiq          | W   | 0.107      | -            | -                | -                | -         |     0.24 | ArroW, awzek, FreeZe, PANIX, PerX  |
|            6 |     3994 | 2024-02-06 | 500               | W   | 0.073      | -            | -                | -                | -         |     0.36 | awzek, FreeZe, Goody, PANIX, PerX  |
|            5 |     4020 | 2024-02-04 | brazylijski luz   | W   | 0.060      | -            | -                | -                | -         |     0.46 | awzek, FreeZe, Goody, PANIX, PerX  |
|            4 |     4031 | 2024-02-04 | Sangal            | L   | 0.058      | -            | -                | -                | -         |    -0.68 | awzek, FreeZe, PANIX, PerX, S3NSEY |
|            3 |     4059 | 2024-02-03 | TSM               | L   | 0.052      | -            | -                | -                | -         |    -1.41 | awzek, FreeZe, Goody, PANIX, PerX  |
|            2 |     4120 | 2024-02-01 | Sangal            | L   | 0.038      | -            | -                | -                | -         |    -0.45 | awzek, FreeZe, Goody, PANIX, PerX  |
|            1 |     4158 | 2024-01-30 | ex-Sprout         | W   | 0.025      | -            | -                | -                | -         |     0.05 | awzek, FreeZe, Goody, PANIX, PerX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,390.01)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-15 |      0.940 | $810.00        | $761.29         |
| 2024-06-09 |      0.900 | $1,000.00      | $900.38         |
| 2024-06-08 |      0.894 | $1,087.00      | $971.24         |
| 2024-05-03 |      0.653 | $12,500.00     | $8,158.85       |
| 2024-04-25 |      0.598 | $1,000.00      | $598.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
