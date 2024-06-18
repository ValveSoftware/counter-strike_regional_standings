### Roster Details<br />
Team Name: ALTERNATE aTTaX<br />
Roster: ArroW, awzek, FreeZe, hyped, PerX<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [96](../standings_global.md)<br />
Regional Rank: [70]( ../standings_europe.md)<br />
Final Rank Value:  888.2<br />
<br />
Final Rank Value (888.2) = Starting Rank Value (1061.4) + Head To Head Adjustments (-173.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.428[<sup>1</sup>](#table2)
- Bounty Collected: 0.401[<sup>2</sup>](#table1)
- Opponent Network: 0.264[<sup>2</sup>](#table1)
- LAN Wins: 0.208[<sup>2</sup>](#table1)

The average of these factors is 0.326<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1061.4
- 400 + ( ( 0.326 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1061.4


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
|           76 |       51 | 2024-06-15 | Sissi State Punks | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.90 | ArroW, awzek, FreeZe, hyped, PerX  |
|           75 |      156 | 2024-06-12 | Versager trupp    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.96 | ArroW, awzek, FreeZe, hyped, PerX  |
|           74 |      317 | 2024-06-08 | The Suspect       | L   | 1.000      | -            | -                | -                | -         |   -19.02 | ArroW, awzek, FreeZe, hyped, PerX  |
|           73 |      356 | 2024-06-07 | Kubix             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.79 | ArroW, awzek, FreeZe, hyped, PerX  |
|           72 |      806 | 2024-05-24 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -14.11 | ArroW, awzek, FreeZe, hyped, PerX  |
|           71 |      823 | 2024-05-23 | Entropiq          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.67 | ArroW, awzek, FreeZe, hyped, PerX  |
|           70 |      847 | 2024-05-22 | VP.Prodigy        | L   | 1.000      | -            | -                | -                | -         |   -15.78 | ArroW, awzek, FreeZe, hyped, PerX  |
|           69 |      931 | 2024-05-20 | Nexus             | L   | 1.000      | -            | -                | -                | -         |   -20.85 | ArroW, awzek, FreeZe, hyped, PerX  |
|           68 |      969 | 2024-05-19 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -13.67 | ArroW, awzek, FreeZe, hyped, PerX  |
|           67 |     1004 | 2024-05-18 | Sashi             | L   | 0.994      | -            | -                | -                | -         |    -4.64 | ArroW, awzek, FreeZe, hyped, PerX  |
|           66 |     1024 | 2024-05-17 | EYEBALLERS        | L   | 0.989      | -            | -                | -                | -         |   -17.84 | ArroW, awzek, FreeZe, hyped, PerX  |
|           65 |     1061 | 2024-05-16 | 9 Pandas          | L   | 0.982      | -            | -                | -                | -         |    -9.50 | ArroW, awzek, FreeZe, hyped, PerX  |
|           64 |     1076 | 2024-05-16 | SINNERS           | L   | 0.980      | -            | -                | -                | -         |   -12.91 | ArroW, awzek, FreeZe, hyped, PerX  |
|           63 |     1166 | 2024-05-14 | PERA              | L   | 0.969      | -            | -                | -                | -         |   -17.38 | ArroW, awzek, FreeZe, hyped, PerX  |
|           62 |     1178 | 2024-05-14 | Endpoint          | W   | 0.968      | 0.435        | -                | 0.490 (0.206)    | 0 (0.000) |    13.94 | ArroW, awzek, FreeZe, hyped, PerX  |
|           61 |     1349 | 2024-05-06 | Sashi             | L   | 0.916      | -            | -                | -                | -         |    -5.49 | ArroW, awzek, FreeZe, hyped, PerX  |
|           60 |     1434 | 2024-05-02 | MOUZ NXT          | L   | 0.888      | -            | -                | -                | -         |   -10.49 | ArroW, awzek, FreeZe, hyped, PerX  |
|           59 |     1453 | 2024-05-01 | Sampi             | W   | 0.881      | 0.396        | 0.045 (0.016)    | 0.837 (0.292)    | 0 (0.000) |    13.22 | ArroW, awzek, FreeZe, hyped, PerX  |
|           58 |     1462 | 2024-05-01 | Sangal            | W   | 0.880      | 0.500        | 0.216 (0.095)    | 0.884 (0.389)    | 0 (0.000) |    18.98 | ArroW, awzek, FreeZe, hyped, PerX  |
|           57 |     1471 | 2024-04-30 | Endpoint          | L   | 0.875      | -            | -                | -                | -         |   -15.85 | ArroW, awzek, FreeZe, hyped, PerX  |
|           56 |     1483 | 2024-04-30 | Sampi             | W   | 0.874      | 0.396        | 0.045 (0.016)    | 0.837 (0.290)    | 0 (0.000) |    13.77 | ArroW, awzek, FreeZe, hyped, PerX  |
|           55 |     1512 | 2024-04-28 | Passion UA        | W   | 0.862      | 0.500        | 0.086 (0.037)    | 0.803 (0.346)    | 0 (0.000) |    12.91 | ArroW, awzek, FreeZe, hyped, PerX  |
|           54 |     1571 | 2024-04-26 | Gaimin Gladiators | W   | 0.847      | 0.500        | 0.076 (0.032)    | 0.632 (0.268)    | 0 (0.000) |    21.91 | ArroW, awzek, FreeZe, hyped, skyye |
|           53 |     1639 | 2024-04-23 | Enterprise        | W   | 0.827      | 0.384        | 0.046 (0.015)    | 0.575 (0.183)    | -         |    14.30 | ArroW, FreeZe, hyped, PerX, skyye  |
|           52 |     1641 | 2024-04-23 | Permitta          | L   | 0.826      | -            | -                | -                | -         |   -11.11 | ArroW, FreeZe, hyped, PerX, skyye  |
|           51 |     1651 | 2024-04-22 | ENCE Academy      | W   | 0.821      | -            | -                | -                | -         |     8.48 | ArroW, FreeZe, hyped, PerX, skyye  |
|           50 |     1664 | 2024-04-21 | MOUZ NXT          | L   | 0.815      | -            | -                | -                | -         |    -7.97 | ArroW, awzek, FreeZe, hyped, skyye |
|           49 |     1674 | 2024-04-21 | Sampi             | L   | 0.814      | -            | -                | -                | -         |   -11.44 | ArroW, awzek, FreeZe, hyped, skyye |
|           48 |     1681 | 2024-04-20 | Space             | L   | 0.810      | -            | -                | -                | -         |   -16.93 | ArroW, awzek, FreeZe, hyped, skyye |
|           47 |     1705 | 2024-04-20 | Enterprise        | W   | 0.807      | 0.500        | 0.046 (0.019)    | 0.575 (0.232)    | -         |    13.56 | ArroW, awzek, FreeZe, hyped, skyye |
|           46 |     1741 | 2024-04-19 | Passion UA        | W   | 0.802      | 0.371        | 0.086 (0.026)    | 0.803 (0.239)    | -         |    13.80 | ArroW, awzek, FreeZe, hyped, skyye |
|           45 |     1747 | 2024-04-19 | Zero Tenacity     | L   | 0.801      | -            | -                | -                | -         |   -10.39 | ArroW, awzek, FreeZe, hyped, skyye |
|           44 |     1797 | 2024-04-18 | HAVU              | L   | 0.794      | -            | -                | -                | -         |   -19.76 | ArroW, awzek, FreeZe, hyped, skyye |
|           43 |     1805 | 2024-04-18 | BLEED             | L   | 0.794      | -            | -                | -                | -         |    -2.88 | ArroW, awzek, FreeZe, hyped, skyye |
|           42 |     1866 | 2024-04-16 | Aurora Young Blud | W   | 0.781      | -            | -                | -                | -         |     5.10 | ArroW, awzek, FreeZe, hyped, skyye |
|           41 |     1879 | 2024-04-15 | Zero Tenacity     | L   | 0.776      | -            | -                | -                | -         |   -11.16 | ArroW, awzek, FreeZe, hyped, skyye |
|           40 |     1915 | 2024-04-13 | Alliance          | W   | 0.761      | -            | -                | -                | -         |     9.64 | ArroW, awzek, FreeZe, hyped, skyye |
|           39 |     2058 | 2024-04-09 | ECLOT             | W   | 0.734      | 0.371        | 0.107 (0.029)    | -                | -         |    16.96 | ArroW, awzek, FreeZe, hyped, skyye |
|           38 |     2092 | 2024-04-08 | SINNERS           | L   | 0.727      | -            | -                | -                | -         |    -7.12 | ArroW, awzek, FreeZe, hyped, skyye |
|           37 |     2183 | 2024-04-04 | Rebels            | L   | 0.702      | -            | -                | -                | -         |    -7.95 | ArroW, awzek, FreeZe, hyped, skyye |
|           36 |     2274 | 2024-04-02 | AMKAL             | L   | 0.687      | -            | -                | -                | -         |    -6.10 | ArroW, awzek, FreeZe, hyped, skyye |
|           35 |     2351 | 2024-03-27 | FAVBET            | L   | 0.650      | -            | -                | -                | -         |   -15.72 | ArroW, awzek, FreeZe, hyped, skyye |
|           34 |     2358 | 2024-03-27 | ex-Guild Eagles   | W   | 0.649      | -            | -                | -                | -         |     8.17 | ArroW, awzek, FreeZe, hyped, skyye |
|           33 |     2391 | 2024-03-25 | ex-Sprout         | W   | 0.636      | -            | -                | -                | -         |     1.84 | ArroW, awzek, FreeZe, hyped, skyye |
|           32 |     2406 | 2024-03-23 | Aurora            | L   | 0.623      | -            | -                | -                | -         |    -0.60 | ArroW, awzek, FreeZe, hyped, skyye |
|           31 |     2595 | 2024-03-14 | Metizport         | W   | 0.562      | -            | -                | -                | -         |    10.20 | ArroW, awzek, FreeZe, hyped, skyye |
|           30 |     2623 | 2024-03-13 | SINNERS           | L   | 0.556      | -            | -                | -                | -         |    -6.74 | ArroW, awzek, FreeZe, hyped, skyye |
|           29 |     2705 | 2024-03-10 | Entropiq          | L   | 0.535      | -            | -                | -                | -         |   -14.97 | ArroW, awzek, FreeZe, hyped, skyye |
|           28 |     2708 | 2024-03-10 | MOUZ NXT          | L   | 0.534      | -            | -                | -                | -         |    -6.42 | ArroW, awzek, FreeZe, hyped, skyye |
|           27 |     2752 | 2024-03-08 | Sashi             | W   | 0.520      | 0.371        | 0.200 (0.038)    | 1.000 (0.193)    | -         |    10.22 | ArroW, awzek, FreeZe, hyped, skyye |
|           26 |     2792 | 2024-03-06 | brazylijski luz   | W   | 0.510      | -            | -                | -                | -         |     3.81 | ArroW, awzek, FreeZe, hyped, skyye |
|           25 |     2851 | 2024-03-05 | Sashi             | W   | 0.500      | -            | -                | -                | -         |    10.22 | ArroW, awzek, FreeZe, hyped, skyye |
|           24 |     2864 | 2024-03-04 | Passion UA        | L   | 0.494      | -            | -                | -                | -         |    -6.81 | ArroW, awzek, FreeZe, hyped, skyye |
|           23 |     2904 | 2024-03-02 | 500               | L   | 0.482      | -            | -                | -                | -         |   -11.98 | ArroW, awzek, FreeZe, hyped, skyye |
|           22 |     2931 | 2024-03-01 | fnatic            | L   | 0.475      | -            | -                | -                | -         |    -0.82 | ArroW, awzek, FreeZe, hyped, skyye |
|           21 |     2957 | 2024-02-28 | BetBoom           | L   | 0.462      | -            | -                | -                | -         |    -0.47 | ArroW, awzek, FreeZe, hyped, skyye |
|           20 |     2974 | 2024-02-27 | RUBY              | L   | 0.456      | -            | -                | -                | -         |    -7.97 | ArroW, awzek, FreeZe, hyped, skyye |
|           19 |     2997 | 2024-02-26 | Endpoint          | W   | 0.447      | -            | -                | -                | -         |     5.09 | ArroW, awzek, FreeZe, hyped, skyye |
|           18 |     3014 | 2024-02-25 | Alliance          | L   | 0.442      | -            | -                | -                | -         |    -9.46 | ArroW, awzek, FreeZe, hyped, skyye |
|           17 |     3177 | 2024-02-18 | Young Ninjas      | L   | 0.397      | -            | -                | -                | -         |    -9.44 | ArroW, awzek, FreeZe, PANIX, PerX  |
|           16 |     3349 | 2024-02-11 | Entropiq          | W   | 0.349      | -            | -                | -                | -         |     0.94 | ArroW, awzek, FreeZe, PANIX, PerX  |
|           15 |     3409 | 2024-02-06 | 500               | W   | 0.315      | -            | -                | -                | -         |     1.73 | awzek, FreeZe, Goody, PANIX, PerX  |
|           14 |     3435 | 2024-02-04 | brazylijski luz   | W   | 0.302      | -            | -                | -                | -         |     2.04 | awzek, FreeZe, Goody, PANIX, PerX  |
|           13 |     3446 | 2024-02-04 | Sangal            | L   | 0.300      | -            | -                | -                | -         |    -3.16 | awzek, FreeZe, PANIX, PerX, S3NSEY |
|           12 |     3474 | 2024-02-03 | TSM               | L   | 0.294      | -            | -                | -                | -         |    -7.87 | awzek, FreeZe, Goody, PANIX, PerX  |
|           11 |     3535 | 2024-02-01 | Sangal            | L   | 0.281      | -            | -                | -                | -         |    -2.94 | awzek, FreeZe, Goody, PANIX, PerX  |
|           10 |     3573 | 2024-01-30 | ex-Sprout         | W   | 0.268      | -            | -                | -                | -         |     0.56 | awzek, FreeZe, Goody, PANIX, PerX  |
|            9 |     3622 | 2024-01-26 | Entropiq          | W   | 0.241      | -            | -                | -                | -         |     0.60 | awzek, FreeZe, Goody, PANIX, PerX  |
|            8 |     3649 | 2024-01-24 | ex-Guild Eagles   | L   | 0.229      | -            | -                | -                | -         |    -4.66 | awzek, FreeZe, Goody, PANIX, PerX  |
|            7 |     3669 | 2024-01-23 | PERA              | L   | 0.222      | -            | -                | -                | -         |    -4.16 | awzek, FreeZe, Goody, PANIX, PerX  |
|            6 |     3673 | 2024-01-23 | ex-Guild Eagles   | L   | 0.222      | -            | -                | -                | -         |    -4.66 | awzek, FreeZe, Goody, PANIX, PerX  |
|            5 |     3693 | 2024-01-22 | Viperio           | W   | 0.216      | -            | -                | -                | -         |     0.31 | awzek, FreeZe, Goody, PANIX, PerX  |
|            4 |     3697 | 2024-01-22 | Rebels            | L   | 0.216      | -            | -                | -                | -         |    -3.03 | awzek, FreeZe, Goody, PANIX, PerX  |
|            3 |     3700 | 2024-01-22 | Sampi             | W   | 0.215      | -            | -                | -                | -         |     2.30 | awzek, FreeZe, Goody, PANIX, PerX  |
|            2 |     4055 | 2024-01-14 | Lilmix            | L   | 0.161      | -            | -                | -                | -         |    -4.84 | awzek, FreeZe, Goody, PANIX, PerX  |
|            1 |     4088 | 2024-01-13 | Astralis          | L   | 0.155      | -            | -                | -                | -         |    -0.04 | awzek, FreeZe, Goody, PANIX, PerX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,927.96)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-15 |      1.000 | $810.00        | $810.00         |
| 2024-06-08 |      1.000 | $1,087.00      | $1,087.00       |
| 2024-05-03 |      0.895 | $12,500.00     | $11,190.20      |
| 2024-04-25 |      0.841 | $1,000.00      | $840.76         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
