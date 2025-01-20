### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: bobeksde, draken, hampus, Ro1f, spooke<br />
Global Rank: [51](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [37]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  1087.9<br />
<br />
Final Rank Value (1087.9) = Starting Rank Value (1070.3) + Head To Head Adjustments (17.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.509[<sup>1</sup>](#table2)
- Bounty Collected: 0.405[<sup>2</sup>](#table1)
- Opponent Network: 0.136[<sup>2</sup>](#table1)
- LAN Wins: 0.302[<sup>2</sup>](#table1)

The average of these factors is 0.338<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1070.3
- 400 + ( ( 0.338 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1070.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           60 |      615 | 2024-11-23 | Alliance          | W   | 0.833      | 0.377        | 0.037 (0.012)    | 0.384 (0.121)    | 1 (0.833) |     6.94 | bobeksde, draken, hampus, Ro1f, spooke   |
|           59 |      669 | 2024-11-21 | Kappa Bar         | W   | 0.820      | -            | -                | -                | 1 (0.820) |     4.47 | bobeksde, draken, hampus, Ro1f, spooke   |
|           58 |      671 | 2024-11-21 | Alliance          | W   | 0.819      | 0.377        | 0.037 (0.011)    | 0.384 (0.119)    | 1 (0.819) |     6.99 | bobeksde, draken, hampus, Ro1f, spooke   |
|           57 |      948 | 2024-11-10 | OG                | W   | 0.747      | 0.354        | 0.171 (0.045)    | -                | 0 (0.000) |     8.79 | bobeksde, draken, hampus, Ro1f, spooke   |
|           56 |      982 | 2024-11-08 | Metizport         | L   | 0.733      | -            | -                | -                | -         |    -5.25 | bobeksde, draken, hampus, Ro1f, spooke   |
|           55 |     1027 | 2024-11-06 | ECLOT             | L   | 0.717      | -            | -                | -                | -         |    -6.75 | bobeksde, draken, hampus, Ro1f, spooke   |
|           54 |     1039 | 2024-11-05 | showmakerz        | W   | 0.712      | -            | -                | -                | 0 (0.000) |     0.51 | bobeksde, draken, hampus, Ro1f, spooke   |
|           53 |     1057 | 2024-11-04 | HOTU              | W   | 0.705      | 0.384        | -                | 0.408 (0.111)    | 0 (0.000) |     3.92 | bobeksde, draken, hampus, Ro1f, spooke   |
|           52 |     1069 | 2024-11-03 | Insilio           | W   | 0.700      | 0.354        | -                | 0.535 (0.133)    | 0 (0.000) |     2.94 | bobeksde, draken, hampus, Ro1f, spooke   |
|           51 |     1124 | 2024-11-01 | OG                | W   | 0.685      | 0.384        | 0.171 (0.045)    | -                | 0 (0.000) |     8.24 | bobeksde, draken, hampus, Ro1f, spooke   |
|           50 |     1137 | 2024-10-31 | ECSTATIC          | L   | 0.680      | -            | -                | -                | -         |   -12.26 | bobeksde, draken, hampus, Ro1f, spooke   |
|           49 |     1140 | 2024-10-31 | Metizport         | W   | 0.679      | 0.333        | 0.182 (0.041)    | 0.790 (0.179)    | 0 (0.000) |    16.82 | bobeksde, draken, hampus, Ro1f, spooke   |
|           48 |     1171 | 2024-10-30 | 9 Pandas          | L   | 0.671      | -            | -                | -                | -         |    -8.61 | bobeksde, draken, hampus, Ro1f, spooke   |
|           47 |     1179 | 2024-10-29 | Endpoint          | W   | 0.667      | 0.333        | -                | 0.515 (0.115)    | 0 (0.000) |     5.18 | bobeksde, draken, hampus, Ro1f, spooke   |
|           46 |     1183 | 2024-10-29 | Gaimin Gladiators | L   | 0.666      | -            | -                | -                | -         |   -12.24 | bobeksde, draken, hampus, Ro1f, spooke   |
|           45 |     1188 | 2024-10-29 | Rare Atom         | W   | 0.665      | 0.333        | 0.059 (0.013)    | -                | -         |     8.76 | bobeksde, draken, hampus, Ro1f, spooke   |
|           44 |     1243 | 2024-10-26 | Nexus             | W   | 0.645      | 0.354        | 0.401 (0.092)    | 0.766 (0.175)    | -         |    16.55 | bobeksde, draken, hampus, Ro1f, spooke   |
|           43 |     1314 | 2024-10-21 | UNiTY             | W   | 0.611      | -            | -                | -                | -         |     7.20 | bobeksde, draken, hampus, Ro1f, spooke   |
|           42 |     1328 | 2024-10-20 | Into the Breach   | L   | 0.606      | -            | -                | -                | -         |   -12.68 | bobeksde, draken, hampus, Ro1f, spooke   |
|           41 |     1452 | 2024-10-16 | WW                | W   | 0.578      | -            | -                | -                | -         |     1.18 | bobeksde, draken, hampus, Ro1f, spooke   |
|           40 |     1487 | 2024-10-13 | Insilio           | L   | 0.559      | -            | -                | -                | -         |   -15.66 | bobeksde, draken, hampus, Ro1f, spooke   |
|           39 |     1636 | 2024-10-07 | Preasy            | W   | 0.518      | -            | -                | -                | -         |     2.35 | bobeksde, draken, hampus, Ro1f, spooke   |
|           38 |     1648 | 2024-10-06 | EYEBALLERS        | W   | 0.512      | -            | -                | -                | -         |     3.52 | bobeksde, draken, hampus, Ro1f, spooke   |
|           37 |     1656 | 2024-10-06 | fightclub         | W   | 0.512      | -            | -                | -                | -         |     0.40 | bobeksde, draken, hampus, Ro1f, spooke   |
|           36 |     1691 | 2024-10-05 | ENCE Academy      | W   | 0.504      | -            | -                | -                | -         |     2.75 | bobeksde, draken, hampus, Ro1f, spooke   |
|           35 |     1724 | 2024-10-04 | NAVI Junior       | W   | 0.498      | 0.333        | 0.204 (0.034)    | 1.000 (0.166)    | -         |     8.21 | bobeksde, draken, hampus, Ro1f, spooke   |
|           34 |     1756 | 2024-10-03 | Partizan          | W   | 0.493      | 0.333        | 0.115 (0.019)    | -                | -         |    11.38 | bobeksde, draken, hampus, Ro1f, spooke   |
|           33 |     1859 | 2024-10-01 | los kogutos       | L   | 0.477      | -            | -                | -                | -         |    -6.67 | bobeksde, draken, hampus, Ro1f, spooke   |
|           32 |     1870 | 2024-09-30 | MOUZ NXT          | W   | 0.472      | -            | -                | -                | -         |     0.40 | bobeksde, draken, hampus, Ro1f, spooke   |
|           31 |     1876 | 2024-09-30 | Gaimin Gladiators | L   | 0.471      | -            | -                | -                | -         |    -9.33 | bobeksde, draken, hampus, Ro1f, spooke   |
|           30 |     1929 | 2024-09-28 | ARCRED            | W   | 0.459      | -            | -                | -                | -         |     2.65 | bobeksde, draken, hampus, Ro1f, spooke   |
|           29 |     1942 | 2024-09-28 | Into the Breach   | L   | 0.457      | -            | -                | -                | -         |    -9.65 | bobeksde, draken, hampus, Ro1f, spooke   |
|           28 |     2163 | 2024-09-23 | Nemiga            | L   | 0.426      | -            | -                | -                | -         |    -3.38 | bobeksde, draken, hampus, Ro1f, spooke   |
|           27 |     2170 | 2024-09-23 | 9INE              | L   | 0.425      | -            | -                | -                | -         |    -8.08 | bobeksde, draken, hampus, Ro1f, spooke   |
|           26 |     2173 | 2024-09-23 | Apogee            | W   | 0.424      | -            | -                | -                | -         |     2.28 | bobeksde, draken, hampus, Ro1f, spooke   |
|           25 |     2245 | 2024-09-20 | devils.one        | W   | 0.404      | -            | -                | -                | -         |     1.75 | bobeksde, draken, hampus, Ro1f, spooke   |
|           24 |     2264 | 2024-09-19 | CYBERSHOKE        | W   | 0.400      | 0.443        | -                | 0.627 (0.111)    | -         |     3.31 | bobeksde, draken, hampus, Ro1f, spooke   |
|           23 |     2278 | 2024-09-19 | Alliance          | W   | 0.398      | -            | -                | -                | -         |     4.08 | bobeksde, draken, hampus, Ro1f, spooke   |
|           22 |     2390 | 2024-09-15 | 9 Pandas          | W   | 0.371      | 0.443        | 0.159 (0.026)    | 0.802 (0.132)    | -         |     7.25 | bobeksde, draken, hampus, Ro1f, spooke   |
|           21 |     2399 | 2024-09-15 | K27               | W   | 0.371      | -            | -                | -                | -         |     0.82 | bobeksde, draken, hampus, Ro1f, spooke   |
|           20 |     2464 | 2024-09-13 | Rebels            | L   | 0.357      | -            | -                | -                | -         |    -8.81 | bobeksde, draken, hampus, Ro1f, spooke   |
|           19 |     3165 | 2024-08-23 | Rebels            | L   | 0.217      | -            | -                | -                | -         |    -5.45 | bobeksde, dex, draken, Ro1f, spooke      |
|           18 |     3177 | 2024-08-22 | Zero Tenacity     | W   | 0.213      | -            | -                | -                | -         |     2.96 | bobeksde, dex, draken, Ro1f, spooke      |
|           17 |     3235 | 2024-08-21 | ARCRED            | L   | 0.205      | -            | -                | -                | -         |    -5.34 | bobeksde, dex, draken, Ro1f, spooke      |
|           16 |     3274 | 2024-08-21 | Cloud9            | L   | 0.203      | -            | -                | -                | -         |    -3.38 | bobeksde, dex, draken, Ro1f, spooke      |
|           15 |     3382 | 2024-08-17 | ECSTATIC          | L   | 0.177      | -            | -                | -                | -         |    -3.60 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|           14 |     3485 | 2024-08-13 | kONO              | L   | 0.151      | -            | -                | -                | -         |    -3.29 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|           13 |     3537 | 2024-08-12 | TSM               | L   | 0.144      | -            | -                | -                | -         |    -3.44 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|           12 |     3578 | 2024-08-10 | ex-Enterprise     | W   | 0.132      | -            | -                | -                | -         |     0.99 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|           11 |     3631 | 2024-08-08 | TSM               | W   | 0.118      | -            | -                | -                | -         |     0.90 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|           10 |     3665 | 2024-08-07 | Metizport         | L   | 0.112      | -            | -                | -                | -         |    -0.58 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            9 |     3682 | 2024-08-07 | ECSTATIC          | W   | 0.111      | -            | -                | -                | -         |     1.25 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            8 |     3728 | 2024-08-06 | UNPAID            | W   | 0.104      | -            | -                | -                | -         |     1.36 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            7 |     3730 | 2024-08-06 | Metizport         | W   | 0.104      | -            | -                | -                | -         |     0.13 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            6 |     3743 | 2024-08-05 | Into the Breach   | W   | 0.099      | -            | -                | -                | -         |     0.79 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            5 |     3754 | 2024-08-05 | 9 Pandas          | L   | 0.097      | -            | -                | -                | -         |    -2.66 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            4 |     3781 | 2024-08-04 | 3DMAX             | W   | 0.092      | -            | -                | -                | -         |     2.53 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            3 |     3808 | 2024-08-03 | Cloud9            | W   | 0.086      | -            | -                | -                | -         |     1.23 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            2 |     3861 | 2024-08-02 | Nemiga            | W   | 0.077      | -            | -                | -                | -         |     1.83 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            1 |     3952 | 2024-07-31 | fnatic            | W   | 0.064      | -            | -                | -                | -         |     1.21 | bobeksde, chawzyyy, draken, Ro1f, spooke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,563.82)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.838 | $1,000.00      | $838.33         |
| 2024-11-23 |      0.833 | $11,343.00     | $9,446.79       |
| 2024-11-09 |      0.739 | $4,848.00      | $3,584.30       |
| 2024-10-31 |      0.680 | $2,000.00      | $1,360.36       |
| 2024-10-06 |      0.512 | $5,000.00      | $2,561.72       |
| 2024-10-05 |      0.504 | $5,000.00      | $2,521.63       |
| 2024-09-24 |      0.431 | $8,000.00      | $3,451.28       |
| 2024-09-14 |      0.366 | $1,000.00      | $366.03         |
| 2024-08-12 |      0.144 | $3,000.00      | $433.39         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
