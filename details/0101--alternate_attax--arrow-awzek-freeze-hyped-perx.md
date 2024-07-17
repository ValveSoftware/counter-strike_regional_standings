### Roster Details<br />
Team Name: ALTERNATE aTTaX<br />
Roster: ArroW, awzek, FreeZe, hyped, PerX<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [101](../standings_global.md)<br />
Regional Rank: [73]( ../standings_europe.md)<br />
Final Rank Value:  900.7<br />
<br />
Final Rank Value (900.7) = Starting Rank Value (1072.9) + Head To Head Adjustments (-172.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.434[<sup>1</sup>](#table2)
- Bounty Collected: 0.384[<sup>2</sup>](#table1)
- Opponent Network: 0.212[<sup>2</sup>](#table1)
- LAN Wins: 0.223[<sup>2</sup>](#table1)

The average of these factors is 0.313<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1072.9
- 400 + ( ( 0.313 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1072.9


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
|           83 |       14 | 2024-07-17 | Nexus             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.48 | ArroW, awzek, FreeZe, hyped, PerX  |
|           82 |       47 | 2024-07-16 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -13.96 | ArroW, awzek, FreeZe, hyped, PerX  |
|           81 |      112 | 2024-07-15 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |   -14.91 | ArroW, awzek, FreeZe, hyped, PerX  |
|           80 |      121 | 2024-07-14 | Kosovo            | L   | 1.000      | -            | -                | -                | -         |   -17.02 | ArroW, awzek, FreeZe, hyped, PerX  |
|           79 |      124 | 2024-07-14 | Sampi             | W   | 1.000      | 0.143        | -                | 0.975 (0.139)    | 0 (0.000) |    15.78 | ArroW, awzek, FreeZe, hyped, PerX  |
|           78 |      125 | 2024-07-14 | Latvia            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    16.15 | ArroW, awzek, FreeZe, hyped, PerX  |
|           77 |      134 | 2024-07-13 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |    -6.59 | ArroW, awzek, FreeZe, hyped, PerX  |
|           76 |      173 | 2024-07-11 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |   -11.26 | ArroW, awzek, FreeZe, hyped, PerX  |
|           75 |      230 | 2024-07-08 | Austria           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.61 | ArroW, awzek, FreeZe, hyped, PerX  |
|           74 |      351 | 2024-06-15 | Sissi State Punks | W   | 0.987      | -            | -                | -                | 1 (0.987) |     8.01 | ArroW, awzek, FreeZe, hyped, PerX  |
|           73 |      456 | 2024-06-12 | Versager trupp    | W   | 0.967      | -            | -                | -                | 0 (0.000) |     1.64 | ArroW, awzek, FreeZe, hyped, PerX  |
|           72 |      617 | 2024-06-08 | Kosovo            | L   | 0.940      | -            | -                | -                | -         |   -16.66 | ArroW, awzek, FreeZe, hyped, PerX  |
|           71 |      656 | 2024-06-07 | Kubix             | W   | 0.934      | -            | -                | -                | 1 (0.934) |     1.46 | ArroW, awzek, FreeZe, hyped, PerX  |
|           70 |     1104 | 2024-05-24 | Endpoint          | L   | 0.839      | -            | -                | -                | -         |   -12.81 | ArroW, awzek, FreeZe, hyped, PerX  |
|           69 |     1121 | 2024-05-23 | Entropiq          | W   | 0.832      | -            | -                | -                | 0 (0.000) |     1.22 | ArroW, awzek, FreeZe, hyped, PerX  |
|           68 |     1145 | 2024-05-22 | VP.Prodigy        | L   | 0.828      | -            | -                | -                | -         |   -13.81 | ArroW, awzek, FreeZe, hyped, PerX  |
|           67 |     1229 | 2024-05-20 | Nexus             | L   | 0.814      | -            | -                | -                | -         |   -17.69 | ArroW, awzek, FreeZe, hyped, PerX  |
|           66 |     1267 | 2024-05-19 | Passion UA        | L   | 0.806      | -            | -                | -                | -         |   -11.81 | ArroW, awzek, FreeZe, hyped, PerX  |
|           65 |     1302 | 2024-05-18 | Sashi             | L   | 0.798      | -            | -                | -                | -         |    -4.80 | ArroW, awzek, FreeZe, hyped, PerX  |
|           64 |     1322 | 2024-05-17 | EYEBALLERS        | L   | 0.794      | -            | -                | -                | -         |   -14.96 | ArroW, awzek, FreeZe, hyped, PerX  |
|           63 |     1359 | 2024-05-16 | 9 Pandas          | L   | 0.787      | -            | -                | -                | -         |    -8.98 | ArroW, awzek, FreeZe, hyped, PerX  |
|           62 |     1374 | 2024-05-16 | SINNERS           | L   | 0.785      | -            | -                | -                | -         |   -10.56 | ArroW, awzek, FreeZe, hyped, PerX  |
|           61 |     1464 | 2024-05-14 | PERA              | L   | 0.774      | -            | -                | -                | -         |   -13.67 | ArroW, awzek, FreeZe, hyped, PerX  |
|           60 |     1476 | 2024-05-14 | Endpoint          | W   | 0.772      | 0.435        | -                | 0.498 (0.167)    | 0 (0.000) |    10.53 | ArroW, awzek, FreeZe, hyped, PerX  |
|           59 |     1647 | 2024-05-06 | Sashi             | L   | 0.720      | -            | -                | -                | -         |    -5.39 | ArroW, awzek, FreeZe, hyped, PerX  |
|           58 |     1732 | 2024-05-02 | MOUZ NXT          | L   | 0.692      | -            | -                | -                | -         |    -8.82 | ArroW, awzek, FreeZe, hyped, PerX  |
|           57 |     1751 | 2024-05-01 | Sampi             | W   | 0.686      | 0.396        | 0.045 (0.012)    | 0.975 (0.265)    | 0 (0.000) |     9.59 | ArroW, awzek, FreeZe, hyped, PerX  |
|           56 |     1760 | 2024-05-01 | Sangal            | W   | 0.685      | 0.500        | 0.232 (0.080)    | 0.893 (0.306)    | -         |    14.55 | ArroW, awzek, FreeZe, hyped, PerX  |
|           55 |     1769 | 2024-04-30 | Endpoint          | L   | 0.680      | -            | -                | -                | -         |   -12.95 | ArroW, awzek, FreeZe, hyped, PerX  |
|           54 |     1781 | 2024-04-30 | Sampi             | W   | 0.679      | 0.396        | 0.045 (0.012)    | 0.975 (0.262)    | -         |     9.80 | ArroW, awzek, FreeZe, hyped, PerX  |
|           53 |     1810 | 2024-04-28 | Passion UA        | W   | 0.667      | 0.500        | 0.087 (0.029)    | 0.847 (0.282)    | -         |     9.64 | ArroW, awzek, FreeZe, hyped, PerX  |
|           52 |     1869 | 2024-04-26 | Gaimin Gladiators | W   | 0.652      | 0.500        | 0.067 (0.022)    | 0.488 (0.159)    | -         |    14.66 | ArroW, awzek, FreeZe, hyped, skyye |
|           51 |     1937 | 2024-04-23 | Enterprise        | W   | 0.632      | 0.384        | 0.055 (0.013)    | 0.635 (0.154)    | -         |     9.72 | ArroW, FreeZe, hyped, PerX, skyye  |
|           50 |     1939 | 2024-04-23 | Permitta          | L   | 0.631      | -            | -                | -                | -         |    -9.62 | ArroW, FreeZe, hyped, PerX, skyye  |
|           49 |     1949 | 2024-04-22 | ENCE Academy      | W   | 0.625      | -            | -                | -                | -         |     5.22 | ArroW, FreeZe, hyped, PerX, skyye  |
|           48 |     1962 | 2024-04-21 | MOUZ NXT          | L   | 0.620      | -            | -                | -                | -         |    -7.02 | ArroW, awzek, FreeZe, hyped, skyye |
|           47 |     1972 | 2024-04-21 | Sampi             | L   | 0.618      | -            | -                | -                | -         |   -10.16 | ArroW, awzek, FreeZe, hyped, skyye |
|           46 |     1979 | 2024-04-20 | Space             | L   | 0.614      | -            | -                | -                | -         |   -13.14 | ArroW, awzek, FreeZe, hyped, skyye |
|           45 |     2003 | 2024-04-20 | Enterprise        | W   | 0.612      | 0.500        | 0.055 (0.017)    | 0.635 (0.194)    | -         |     8.97 | ArroW, awzek, FreeZe, hyped, skyye |
|           44 |     2039 | 2024-04-19 | Passion UA        | W   | 0.607      | 0.371        | 0.087 (0.020)    | 0.847 (0.190)    | -         |     9.59 | ArroW, awzek, FreeZe, hyped, skyye |
|           43 |     2045 | 2024-04-19 | Zero Tenacity     | L   | 0.606      | -            | -                | -                | -         |    -8.27 | ArroW, awzek, FreeZe, hyped, skyye |
|           42 |     2095 | 2024-04-18 | HAVU              | L   | 0.599      | -            | -                | -                | -         |   -15.53 | ArroW, awzek, FreeZe, hyped, skyye |
|           41 |     2103 | 2024-04-18 | BLEED             | L   | 0.598      | -            | -                | -                | -         |    -7.15 | ArroW, awzek, FreeZe, hyped, skyye |
|           40 |     2164 | 2024-04-16 | Aurora Young Blud | W   | 0.586      | -            | -                | -                | -         |     3.71 | ArroW, awzek, FreeZe, hyped, skyye |
|           39 |     2177 | 2024-04-15 | Zero Tenacity     | L   | 0.581      | -            | -                | -                | -         |    -8.71 | ArroW, awzek, FreeZe, hyped, skyye |
|           38 |     2213 | 2024-04-13 | Alliance          | W   | 0.565      | -            | -                | -                | -         |     6.39 | ArroW, awzek, FreeZe, hyped, skyye |
|           37 |     2356 | 2024-04-09 | ECLOT             | W   | 0.539      | 0.371        | 0.103 (0.021)    | -                | -         |    12.22 | ArroW, awzek, FreeZe, hyped, skyye |
|           36 |     2390 | 2024-04-08 | SINNERS           | L   | 0.532      | -            | -                | -                | -         |    -5.91 | ArroW, awzek, FreeZe, hyped, skyye |
|           35 |     2481 | 2024-04-04 | Rebels            | L   | 0.507      | -            | -                | -                | -         |    -7.41 | ArroW, awzek, FreeZe, hyped, skyye |
|           34 |     2572 | 2024-04-02 | AMKAL             | L   | 0.492      | -            | -                | -                | -         |    -6.32 | ArroW, awzek, FreeZe, hyped, skyye |
|           33 |     2648 | 2024-03-27 | FAVBET            | L   | 0.455      | -            | -                | -                | -         |   -11.33 | ArroW, awzek, FreeZe, hyped, skyye |
|           32 |     2655 | 2024-03-27 | ex-Guild Eagles   | W   | 0.454      | -            | -                | -                | -         |     4.28 | ArroW, awzek, FreeZe, hyped, skyye |
|           31 |     2688 | 2024-03-25 | ex-Sprout         | W   | 0.441      | -            | -                | -                | -         |     0.84 | ArroW, awzek, FreeZe, hyped, skyye |
|           30 |     2703 | 2024-03-23 | Aurora            | L   | 0.428      | -            | -                | -                | -         |    -0.42 | ArroW, awzek, FreeZe, hyped, skyye |
|           29 |     2892 | 2024-03-14 | Metizport         | W   | 0.366      | -            | -                | -                | -         |     5.25 | ArroW, awzek, FreeZe, hyped, skyye |
|           28 |     2920 | 2024-03-13 | SINNERS           | L   | 0.361      | -            | -                | -                | -         |    -4.75 | ArroW, awzek, FreeZe, hyped, skyye |
|           27 |     3002 | 2024-03-10 | Entropiq          | L   | 0.339      | -            | -                | -                | -         |    -9.91 | ArroW, awzek, FreeZe, hyped, skyye |
|           26 |     3005 | 2024-03-10 | MOUZ NXT          | L   | 0.339      | -            | -                | -                | -         |    -4.63 | ArroW, awzek, FreeZe, hyped, skyye |
|           25 |     3049 | 2024-03-08 | Sashi             | W   | 0.325      | 0.371        | 0.215 (0.026)    | -                | -         |     6.20 | ArroW, awzek, FreeZe, hyped, skyye |
|           24 |     3089 | 2024-03-06 | brazylijski luz   | W   | 0.315      | -            | -                | -                | -         |     2.29 | ArroW, awzek, FreeZe, hyped, skyye |
|           23 |     3148 | 2024-03-05 | Sashi             | W   | 0.305      | -            | -                | -                | -         |     5.96 | ArroW, awzek, FreeZe, hyped, skyye |
|           22 |     3161 | 2024-03-04 | Passion UA        | L   | 0.299      | -            | -                | -                | -         |    -4.84 | ArroW, awzek, FreeZe, hyped, skyye |
|           21 |     3201 | 2024-03-02 | 500               | L   | 0.287      | -            | -                | -                | -         |    -7.63 | ArroW, awzek, FreeZe, hyped, skyye |
|           20 |     3228 | 2024-03-01 | fnatic            | L   | 0.279      | -            | -                | -                | -         |    -0.42 | ArroW, awzek, FreeZe, hyped, skyye |
|           19 |     3254 | 2024-02-28 | BetBoom           | L   | 0.266      | -            | -                | -                | -         |    -0.33 | ArroW, awzek, FreeZe, hyped, skyye |
|           18 |     3271 | 2024-02-27 | RUBY              | L   | 0.260      | -            | -                | -                | -         |    -4.69 | ArroW, awzek, FreeZe, hyped, skyye |
|           17 |     3294 | 2024-02-26 | Endpoint          | W   | 0.252      | -            | -                | -                | -         |     2.54 | ArroW, awzek, FreeZe, hyped, skyye |
|           16 |     3311 | 2024-02-25 | Alliance          | L   | 0.247      | -            | -                | -                | -         |    -5.44 | ArroW, awzek, FreeZe, hyped, skyye |
|           15 |     3474 | 2024-02-18 | Young Ninjas      | L   | 0.201      | -            | -                | -                | -         |    -5.08 | ArroW, awzek, FreeZe, PANIX, PerX  |
|           14 |     3646 | 2024-02-11 | Entropiq          | W   | 0.154      | -            | -                | -                | -         |     0.30 | ArroW, awzek, FreeZe, PANIX, PerX  |
|           13 |     3706 | 2024-02-06 | 500               | W   | 0.120      | -            | -                | -                | -         |     0.52 | awzek, FreeZe, Goody, PANIX, PerX  |
|           12 |     3732 | 2024-02-04 | brazylijski luz   | W   | 0.107      | -            | -                | -                | -         |     0.73 | awzek, FreeZe, Goody, PANIX, PerX  |
|           11 |     3743 | 2024-02-04 | Sangal            | L   | 0.105      | -            | -                | -                | -         |    -1.20 | awzek, FreeZe, PANIX, PerX, S3NSEY |
|           10 |     3771 | 2024-02-03 | TSM               | L   | 0.099      | -            | -                | -                | -         |    -2.72 | awzek, FreeZe, Goody, PANIX, PerX  |
|            9 |     3832 | 2024-02-01 | Sangal            | L   | 0.085      | -            | -                | -                | -         |    -0.97 | awzek, FreeZe, Goody, PANIX, PerX  |
|            8 |     3870 | 2024-01-30 | ex-Sprout         | W   | 0.073      | -            | -                | -                | -         |     0.11 | awzek, FreeZe, Goody, PANIX, PerX  |
|            7 |     3919 | 2024-01-26 | Entropiq          | W   | 0.046      | -            | -                | -                | -         |     0.09 | awzek, FreeZe, Goody, PANIX, PerX  |
|            6 |     3946 | 2024-01-24 | ex-Guild Eagles   | L   | 0.034      | -            | -                | -                | -         |    -0.78 | awzek, FreeZe, Goody, PANIX, PerX  |
|            5 |     3966 | 2024-01-23 | PERA              | L   | 0.027      | -            | -                | -                | -         |    -0.51 | awzek, FreeZe, Goody, PANIX, PerX  |
|            4 |     3970 | 2024-01-23 | ex-Guild Eagles   | L   | 0.027      | -            | -                | -                | -         |    -0.61 | awzek, FreeZe, Goody, PANIX, PerX  |
|            3 |     3990 | 2024-01-22 | Viperio           | W   | 0.021      | -            | -                | -                | -         |     0.03 | awzek, FreeZe, Goody, PANIX, PerX  |
|            2 |     3994 | 2024-01-22 | Rebels            | L   | 0.020      | -            | -                | -                | -         |    -0.34 | awzek, FreeZe, Goody, PANIX, PerX  |
|            1 |     3997 | 2024-01-22 | Sampi             | W   | 0.020      | -            | -                | -                | -         |     0.21 | awzek, FreeZe, Goody, PANIX, PerX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,164.36)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-15 |      0.987 | $810.00        | $799.55         |
| 2024-06-09 |      0.948 | $1,000.00      | $947.61         |
| 2024-06-08 |      0.941 | $1,087.00      | $1,022.57       |
| 2024-05-03 |      0.700 | $12,500.00     | $8,749.16       |
| 2024-04-25 |      0.645 | $1,000.00      | $645.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
