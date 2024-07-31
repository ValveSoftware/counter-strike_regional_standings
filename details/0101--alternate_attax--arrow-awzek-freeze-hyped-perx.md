### Roster Details<br />
Team Name: ALTERNATE aTTaX<br />
Roster: ArroW, awzek, FreeZe, hyped, PerX<br />
Global Rank: [101](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [74]( ../standings_europe.md)<br />
<br />
Final Rank Value:  856.0<br />
<br />
Final Rank Value (856.0) = Starting Rank Value (1000.3) + Head To Head Adjustments (-144.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.401[<sup>1</sup>](#table2)
- Bounty Collected: 0.375[<sup>2</sup>](#table1)
- Opponent Network: 0.187[<sup>2</sup>](#table1)
- LAN Wins: 0.199[<sup>2</sup>](#table1)

The average of these factors is 0.291<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1000.3
- 400 + ( ( 0.291 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1000.3


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
|           77 |      250 | 2024-07-24 | Lilmix            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    17.37 | ArroW, awzek, FreeZe, hyped, PerX  |
|           76 |      415 | 2024-07-19 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -15.40 | ArroW, awzek, FreeZe, hyped, PerX  |
|           75 |      523 | 2024-07-17 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -12.72 | ArroW, awzek, FreeZe, hyped, PerX  |
|           74 |      544 | 2024-07-17 | Nexus             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.18 | ArroW, awzek, FreeZe, hyped, PerX  |
|           73 |      577 | 2024-07-16 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -12.88 | ArroW, awzek, FreeZe, hyped, PerX  |
|           72 |      642 | 2024-07-15 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |   -14.43 | ArroW, awzek, FreeZe, hyped, PerX  |
|           71 |      651 | 2024-07-14 | Kosovo            | L   | 1.000      | -            | -                | -                | -         |   -17.61 | ArroW, awzek, FreeZe, hyped, PerX  |
|           70 |      654 | 2024-07-14 | Sampi             | W   | 1.000      | 0.143        | -                | 1.000 (0.143)    | 0 (0.000) |    15.91 | ArroW, awzek, FreeZe, hyped, PerX  |
|           69 |      655 | 2024-07-14 | Latvia            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.96 | ArroW, awzek, FreeZe, hyped, PerX  |
|           68 |      664 | 2024-07-13 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |    -7.73 | ArroW, awzek, FreeZe, hyped, PerX  |
|           67 |      703 | 2024-07-11 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |   -12.62 | ArroW, awzek, FreeZe, hyped, PerX  |
|           66 |      760 | 2024-07-08 | Austria           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.91 | ArroW, awzek, FreeZe, hyped, PerX  |
|           65 |      881 | 2024-06-15 | Sissi State Punks | W   | 0.893      | -            | -                | -                | 1 (0.893) |     7.55 | ArroW, awzek, FreeZe, hyped, PerX  |
|           64 |      986 | 2024-06-12 | Versager trupp    | W   | 0.873      | -            | -                | -                | 0 (0.000) |     1.76 | ArroW, awzek, FreeZe, hyped, PerX  |
|           63 |     1147 | 2024-06-08 | Kosovo            | L   | 0.845      | -            | -                | -                | -         |   -15.65 | ArroW, awzek, FreeZe, hyped, PerX  |
|           62 |     1186 | 2024-06-07 | Kubix             | W   | 0.840      | -            | -                | -                | 1 (0.840) |     1.57 | ArroW, awzek, FreeZe, hyped, PerX  |
|           61 |     1634 | 2024-05-24 | Endpoint          | L   | 0.745      | -            | -                | -                | -         |   -11.24 | ArroW, awzek, FreeZe, hyped, PerX  |
|           60 |     1651 | 2024-05-23 | Entropiq          | W   | 0.738      | -            | -                | -                | 0 (0.000) |     1.30 | ArroW, awzek, FreeZe, hyped, PerX  |
|           59 |     1675 | 2024-05-22 | VP.Prodigy        | L   | 0.734      | -            | -                | -                | -         |   -12.24 | ArroW, awzek, FreeZe, hyped, PerX  |
|           58 |     1759 | 2024-05-20 | Nexus             | L   | 0.720      | -            | -                | -                | -         |   -15.35 | ArroW, awzek, FreeZe, hyped, PerX  |
|           57 |     1797 | 2024-05-19 | Passion UA        | L   | 0.711      | -            | -                | -                | -         |    -8.75 | ArroW, awzek, FreeZe, hyped, PerX  |
|           56 |     1832 | 2024-05-18 | Sashi             | L   | 0.704      | -            | -                | -                | -         |    -3.93 | ArroW, awzek, FreeZe, hyped, PerX  |
|           55 |     1852 | 2024-05-17 | EYEBALLERS        | L   | 0.699      | -            | -                | -                | -         |   -12.89 | ArroW, awzek, FreeZe, hyped, PerX  |
|           54 |     1889 | 2024-05-16 | 9 Pandas          | L   | 0.692      | -            | -                | -                | -         |    -8.85 | ArroW, awzek, FreeZe, hyped, PerX  |
|           53 |     1904 | 2024-05-16 | SINNERS           | L   | 0.691      | -            | -                | -                | -         |    -9.46 | ArroW, awzek, FreeZe, hyped, PerX  |
|           52 |     1994 | 2024-05-14 | PERA              | L   | 0.680      | -            | -                | -                | -         |   -12.38 | ArroW, awzek, FreeZe, hyped, PerX  |
|           51 |     2006 | 2024-05-14 | Endpoint          | W   | 0.678      | 0.435        | -                | 0.523 (0.154)    | 0 (0.000) |     9.63 | ArroW, awzek, FreeZe, hyped, PerX  |
|           50 |     2177 | 2024-05-06 | Sashi             | L   | 0.626      | -            | -                | -                | -         |    -4.22 | ArroW, awzek, FreeZe, hyped, PerX  |
|           49 |     2262 | 2024-05-02 | MOUZ NXT          | L   | 0.598      | -            | -                | -                | -         |    -7.69 | ArroW, awzek, FreeZe, hyped, PerX  |
|           48 |     2281 | 2024-05-01 | Sampi             | W   | 0.591      | 0.396        | 0.028 (0.007)    | 1.000 (0.234)    | -         |     7.91 | ArroW, awzek, FreeZe, hyped, PerX  |
|           47 |     2290 | 2024-05-01 | Sangal            | W   | 0.591      | 0.500        | 0.221 (0.065)    | 0.824 (0.243)    | -         |    13.16 | ArroW, awzek, FreeZe, hyped, PerX  |
|           46 |     2299 | 2024-04-30 | Endpoint          | L   | 0.586      | -            | -                | -                | -         |   -10.76 | ArroW, awzek, FreeZe, hyped, PerX  |
|           45 |     2311 | 2024-04-30 | Sampi             | W   | 0.584      | 0.396        | 0.028 (0.007)    | 1.000 (0.232)    | -         |     8.03 | ArroW, awzek, FreeZe, hyped, PerX  |
|           44 |     2340 | 2024-04-28 | Passion UA        | W   | 0.572      | 0.500        | 0.172 (0.049)    | 1.000 (0.286)    | -         |    10.30 | ArroW, awzek, FreeZe, hyped, PerX  |
|           43 |     2399 | 2024-04-26 | Gaimin Gladiators | W   | 0.557      | 0.500        | 0.040 (0.011)    | 0.363 (0.101)    | -         |    11.00 | ArroW, awzek, FreeZe, hyped, skyye |
|           42 |     2467 | 2024-04-23 | Enterprise        | W   | 0.538      | 0.384        | 0.040 (0.008)    | 0.622 (0.128)    | -         |     7.86 | ArroW, FreeZe, hyped, PerX, skyye  |
|           41 |     2469 | 2024-04-23 | Permitta          | L   | 0.537      | -            | -                | -                | -         |    -8.16 | ArroW, FreeZe, hyped, PerX, skyye  |
|           40 |     2479 | 2024-04-22 | ENCE Academy      | W   | 0.531      | -            | -                | -                | -         |     4.22 | ArroW, FreeZe, hyped, PerX, skyye  |
|           39 |     2492 | 2024-04-21 | MOUZ NXT          | L   | 0.525      | -            | -                | -                | -         |    -6.05 | ArroW, awzek, FreeZe, hyped, skyye |
|           38 |     2502 | 2024-04-21 | Sampi             | L   | 0.524      | -            | -                | -                | -         |    -9.06 | ArroW, awzek, FreeZe, hyped, skyye |
|           37 |     2509 | 2024-04-20 | Space             | L   | 0.520      | -            | -                | -                | -         |   -11.30 | ArroW, awzek, FreeZe, hyped, skyye |
|           36 |     2533 | 2024-04-20 | Enterprise        | W   | 0.517      | 0.500        | 0.040 (0.010)    | 0.622 (0.161)    | -         |     7.21 | ArroW, awzek, FreeZe, hyped, skyye |
|           35 |     2569 | 2024-04-19 | Passion UA        | W   | 0.512      | 0.371        | 0.172 (0.033)    | 1.000 (0.190)    | -         |    10.04 | ArroW, awzek, FreeZe, hyped, skyye |
|           34 |     2575 | 2024-04-19 | Zero Tenacity     | L   | 0.511      | -            | -                | -                | -         |    -5.92 | ArroW, awzek, FreeZe, hyped, skyye |
|           33 |     2625 | 2024-04-18 | HAVU              | L   | 0.505      | -            | -                | -                | -         |   -13.00 | ArroW, awzek, FreeZe, hyped, skyye |
|           32 |     2633 | 2024-04-18 | BLEED             | L   | 0.504      | -            | -                | -                | -         |    -6.96 | ArroW, awzek, FreeZe, hyped, skyye |
|           31 |     2694 | 2024-04-16 | Aurora Young Blud | W   | 0.491      | -            | -                | -                | -         |     4.44 | ArroW, awzek, FreeZe, hyped, skyye |
|           30 |     2707 | 2024-04-15 | Zero Tenacity     | L   | 0.486      | -            | -                | -                | -         |    -6.04 | ArroW, awzek, FreeZe, hyped, skyye |
|           29 |     2743 | 2024-04-13 | Alliance          | W   | 0.471      | -            | -                | -                | -         |     5.10 | ArroW, awzek, FreeZe, hyped, skyye |
|           28 |     2886 | 2024-04-09 | ECLOT             | W   | 0.445      | 0.371        | 0.065 (0.011)    | -                | -         |     9.35 | ArroW, awzek, FreeZe, hyped, skyye |
|           27 |     2920 | 2024-04-08 | SINNERS           | L   | 0.437      | -            | -                | -                | -         |    -5.28 | ArroW, awzek, FreeZe, hyped, skyye |
|           26 |     3011 | 2024-04-04 | Rebels            | L   | 0.412      | -            | -                | -                | -         |    -6.09 | ArroW, awzek, FreeZe, hyped, skyye |
|           25 |     3102 | 2024-04-02 | AMKAL             | L   | 0.397      | -            | -                | -                | -         |    -3.73 | ArroW, awzek, FreeZe, hyped, skyye |
|           24 |     3178 | 2024-03-27 | FAVBET            | L   | 0.360      | -            | -                | -                | -         |    -8.81 | ArroW, awzek, FreeZe, hyped, skyye |
|           23 |     3185 | 2024-03-27 | ex-Guild Eagles   | W   | 0.359      | -            | -                | -                | -         |     3.22 | ArroW, awzek, FreeZe, hyped, skyye |
|           22 |     3218 | 2024-03-25 | ex-Sprout         | W   | 0.346      | -            | -                | -                | -         |     0.76 | ArroW, awzek, FreeZe, hyped, skyye |
|           21 |     3233 | 2024-03-23 | Aurora            | L   | 0.333      | -            | -                | -                | -         |    -0.21 | ArroW, awzek, FreeZe, hyped, skyye |
|           20 |     3422 | 2024-03-14 | Metizport         | W   | 0.272      | -            | -                | -                | -         |     3.69 | ArroW, awzek, FreeZe, hyped, skyye |
|           19 |     3450 | 2024-03-13 | SINNERS           | L   | 0.266      | -            | -                | -                | -         |    -3.66 | ArroW, awzek, FreeZe, hyped, skyye |
|           18 |     3532 | 2024-03-10 | Entropiq          | L   | 0.245      | -            | -                | -                | -         |    -7.09 | ArroW, awzek, FreeZe, hyped, skyye |
|           17 |     3535 | 2024-03-10 | MOUZ NXT          | L   | 0.244      | -            | -                | -                | -         |    -3.26 | ArroW, awzek, FreeZe, hyped, skyye |
|           16 |     3579 | 2024-03-08 | Sashi             | W   | 0.230      | 0.371        | 0.187 (0.016)    | -                | -         |     5.13 | ArroW, awzek, FreeZe, hyped, skyye |
|           15 |     3619 | 2024-03-06 | brazylijski luz   | W   | 0.220      | -            | -                | -                | -         |     1.75 | ArroW, awzek, FreeZe, hyped, skyye |
|           14 |     3678 | 2024-03-05 | Sashi             | W   | 0.211      | -            | -                | -                | -         |     4.78 | ArroW, awzek, FreeZe, hyped, skyye |
|           13 |     3691 | 2024-03-04 | Passion UA        | L   | 0.205      | -            | -                | -                | -         |    -2.30 | ArroW, awzek, FreeZe, hyped, skyye |
|           12 |     3731 | 2024-03-02 | 500               | L   | 0.193      | -            | -                | -                | -         |    -5.01 | ArroW, awzek, FreeZe, hyped, skyye |
|           11 |     3758 | 2024-03-01 | fnatic            | L   | 0.185      | -            | -                | -                | -         |    -0.22 | ArroW, awzek, FreeZe, hyped, skyye |
|           10 |     3784 | 2024-02-28 | BetBoom           | L   | 0.172      | -            | -                | -                | -         |    -0.41 | ArroW, awzek, FreeZe, hyped, skyye |
|            9 |     3801 | 2024-02-27 | RUBY              | L   | 0.166      | -            | -                | -                | -         |    -3.02 | ArroW, awzek, FreeZe, hyped, skyye |
|            8 |     3824 | 2024-02-26 | Endpoint          | W   | 0.158      | -            | -                | -                | -         |     1.82 | ArroW, awzek, FreeZe, hyped, skyye |
|            7 |     3841 | 2024-02-25 | Alliance          | L   | 0.153      | -            | -                | -                | -         |    -3.33 | ArroW, awzek, FreeZe, hyped, skyye |
|            6 |     4004 | 2024-02-18 | Young Ninjas      | L   | 0.107      | -            | -                | -                | -         |    -2.67 | ArroW, awzek, FreeZe, PANIX, PerX  |
|            5 |     4176 | 2024-02-11 | Entropiq          | W   | 0.060      | -            | -                | -                | -         |     0.14 | ArroW, awzek, FreeZe, PANIX, PerX  |
|            4 |     4236 | 2024-02-06 | 500               | W   | 0.025      | -            | -                | -                | -         |     0.13 | awzek, FreeZe, Goody, PANIX, PerX  |
|            3 |     4262 | 2024-02-04 | brazylijski luz   | W   | 0.013      | -            | -                | -                | -         |     0.10 | awzek, FreeZe, Goody, PANIX, PerX  |
|            2 |     4273 | 2024-02-04 | Sangal            | L   | 0.010      | -            | -                | -                | -         |    -0.10 | awzek, FreeZe, PANIX, PerX, S3NSEY |
|            1 |     4301 | 2024-02-03 | TSM               | L   | 0.005      | -            | -                | -                | -         |    -0.12 | awzek, FreeZe, Goody, PANIX, PerX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,614.63)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-15 |      0.893 | $810.00        | $722.99         |
| 2024-06-09 |      0.853 | $1,000.00      | $853.09         |
| 2024-06-08 |      0.846 | $1,087.00      | $919.84         |
| 2024-05-03 |      0.605 | $12,500.00     | $7,567.75       |
| 2024-04-25 |      0.551 | $1,000.00      | $550.96         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
