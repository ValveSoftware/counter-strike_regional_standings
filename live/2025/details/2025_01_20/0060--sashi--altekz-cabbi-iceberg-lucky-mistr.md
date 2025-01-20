### Roster Details<br />
Team Name: Sashi<br />
Roster: Altekz, Cabbi, IceBerg, Lucky, MistR<br />
Global Rank: [60](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [42]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  1024.1<br />
<br />
Final Rank Value (1024.1) = Starting Rank Value (1011.6) + Head To Head Adjustments (12.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.421[<sup>1</sup>](#table2)
- Bounty Collected: 0.410[<sup>2</sup>](#table1)
- Opponent Network: 0.201[<sup>2</sup>](#table1)
- LAN Wins: 0.200[<sup>2</sup>](#table1)

The average of these factors is 0.308<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1011.6
- 400 + ( ( 0.308 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 1011.6


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
|           62 |      200 | 2024-12-15 | Aurora Young Blud | L   | 0.964      | -            | -                | -                | -         |   -15.96 | Altekz, Cabbi, IceBerg, Lucky, MistR |
|           61 |      223 | 2024-12-14 | 9INE              | W   | 0.957      | 0.371        | 0.125 (0.044)    | 1.000 (0.355)    | 0 (0.000) |    12.62 | Altekz, Cabbi, IceBerg, Lucky, MistR |
|           60 |      244 | 2024-12-13 | NAVI Junior       | L   | 0.951      | -            | -                | -                | -         |   -11.45 | Altekz, Cabbi, IceBerg, Lucky, MistR |
|           59 |      273 | 2024-12-11 | Aurora Young Blud | W   | 0.938      | 0.371        | -                | 0.837 (0.291)    | 0 (0.000) |    12.64 | Altekz, Cabbi, IceBerg, Lucky, MistR |
|           58 |      278 | 2024-12-10 | GUN5              | L   | 0.933      | -            | -                | -                | -         |   -11.78 | Altekz, Cabbi, IceBerg, Lucky, MistR |
|           57 |      289 | 2024-12-09 | Aurora            | L   | 0.926      | -            | -                | -                | -         |   -17.13 | Altekz, Cabbi, IceBerg, Lucky, MistR |
|           56 |      344 | 2024-12-07 | Alliance          | W   | 0.911      | 0.371        | -                | 0.383 (0.129)    | 0 (0.000) |     8.77 | Altekz, Cabbi, IceBerg, Lucky, MistR |
|           55 |      446 | 2024-12-03 | 9INE              | W   | 0.883      | 0.371        | 0.125 (0.041)    | 1.000 (0.327)    | 0 (0.000) |     9.46 | Altekz, Cabbi, IceBerg, Lucky, MistR |
|           54 |      613 | 2024-11-24 | Spirit            | L   | 0.823      | -            | -                | -                | -         |    -0.18 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           53 |      643 | 2024-11-22 | Virtus.pro        | L   | 0.816      | -            | -                | -                | -         |    -4.84 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           52 |      672 | 2024-11-21 | Eternal Fire      | W   | 0.809      | 0.143        | 0.324 (0.037)    | -                | 1 (0.809) |    22.02 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           51 |      685 | 2024-11-21 | Astralis          | W   | 0.804      | 0.143        | 0.325 (0.037)    | -                | 1 (0.804) |    21.25 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           50 |      694 | 2024-11-21 | BIG               | L   | 0.803      | -            | -                | -                | -         |    -3.25 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           49 |      985 | 2024-11-09 | ECLOT             | L   | 0.724      | -            | -                | -                | -         |    -5.16 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           48 |     1003 | 2024-11-08 | 500               | L   | 0.717      | -            | -                | -                | -         |   -11.25 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           47 |     1012 | 2024-11-07 | Endpoint          | W   | 0.712      | 0.384        | -                | 0.511 (0.140)    | 0 (0.000) |     6.23 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           46 |     1016 | 2024-11-07 | OG                | W   | 0.711      | 0.384        | 0.171 (0.047)    | 0.285 (0.078)    | 0 (0.000) |    10.70 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           45 |     1051 | 2024-11-05 | Rebels            | W   | 0.698      | 0.384        | -                | 0.299 (0.080)    | 0 (0.000) |     6.78 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           44 |     1112 | 2024-11-02 | Into the Breach   | L   | 0.678      | -            | -                | -                | -         |   -11.89 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           43 |     1127 | 2024-11-01 | Insilio           | L   | 0.673      | -            | -                | -                | -         |   -17.86 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           42 |     1138 | 2024-11-01 | los kogutos       | W   | 0.671      | 0.426        | 0.071 (0.020)    | 0.836 (0.239)    | 0 (0.000) |    11.60 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           41 |     1203 | 2024-10-29 | GUN5              | L   | 0.650      | -            | -                | -                | -         |    -7.66 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           40 |     1290 | 2024-10-24 | ECLOT             | W   | 0.618      | 0.384        | 0.286 (0.068)    | 1.000 (0.238)    | -         |    15.07 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           39 |     1376 | 2024-10-19 | SovvyKiNG         | W   | 0.584      | -            | -                | -                | -         |     1.73 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           38 |     1416 | 2024-10-17 | 3DMAX             | L   | 0.573      | -            | -                | -                | -         |    -2.31 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           37 |     1446 | 2024-10-16 | PARIVISION        | W   | 0.566      | -            | -                | -                | -         |     6.83 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           36 |     1478 | 2024-10-15 | HEROIC            | L   | 0.559      | -            | -                | -                | -         |    -4.22 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           35 |     1519 | 2024-10-12 | Fire Flux         | W   | 0.538      | 0.384        | -                | 0.635 (0.131)    | -         |     5.01 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           34 |     2288 | 2024-09-19 | Monte             | L   | 0.384      | -            | -                | -                | -         |    -5.85 | Altekz, Cabbi, IceBerg, Lucky, MistR |
|           33 |     2330 | 2024-09-18 | UNPAID            | W   | 0.376      | 0.384        | 0.140 (0.020)    | -                | -         |     5.88 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           32 |     2344 | 2024-09-17 | UNPAID            | L   | 0.372      | -            | -                | -                | -         |    -6.04 | Altekz, Cabbi, IceBerg, Lucky, MistR |
|           31 |     2349 | 2024-09-17 | Into the Breach   | L   | 0.372      | -            | -                | -                | -         |    -7.69 | Altekz, Cabbi, IceBerg, Lucky, MistR |
|           30 |     2358 | 2024-09-17 | UNPAID            | W   | 0.370      | 0.443        | 0.140 (0.023)    | -                | -         |     5.53 | Altekz, Cabbi, IceBerg, Lucky, MistR |
|           29 |     2420 | 2024-09-14 | Rebels            | L   | 0.352      | -            | -                | -                | -         |    -8.04 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           28 |     2430 | 2024-09-14 | OG                | W   | 0.351      | 0.384        | 0.171 (0.023)    | -                | -         |     4.68 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           27 |     2497 | 2024-09-12 | TSM               | W   | 0.338      | -            | -                | -                | -         |     3.76 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           26 |     2563 | 2024-09-10 | GamerLegion       | W   | 0.324      | -            | -                | -                | -         |     2.90 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           25 |     2773 | 2024-09-03 | Nemiga            | L   | 0.277      | -            | -                | -                | -         |    -1.69 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           24 |     2844 | 2024-08-30 | Aurora            | L   | 0.251      | -            | -                | -                | -         |    -4.82 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           23 |     2874 | 2024-08-29 | GUN5              | L   | 0.246      | -            | -                | -                | -         |    -3.06 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           22 |     2882 | 2024-08-29 | Monte             | W   | 0.245      | -            | -                | -                | -         |     3.99 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           21 |     3046 | 2024-08-26 | Sampi             | L   | 0.226      | -            | -                | -                | -         |    -3.70 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           20 |     3162 | 2024-08-23 | OG                | W   | 0.205      | -            | -                | -                | -         |     2.74 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           19 |     3176 | 2024-08-23 | ARCRED            | W   | 0.204      | -            | -                | -                | -         |     1.45 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           18 |     3211 | 2024-08-22 | Nemiga            | L   | 0.197      | -            | -                | -                | -         |    -1.16 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           17 |     3231 | 2024-08-21 | AMKAL             | W   | 0.192      | -            | -                | -                | -         |     1.68 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           16 |     3266 | 2024-08-21 | Qiang             | L   | 0.191      | -            | -                | -                | -         |    -5.65 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           15 |     3323 | 2024-08-19 | B8                | L   | 0.179      | -            | -                | -                | -         |    -1.96 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           14 |     3327 | 2024-08-19 | Metizport         | W   | 0.179      | -            | -                | -                | -         |     4.94 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           13 |     3334 | 2024-08-19 | Aurora            | W   | 0.178      | -            | -                | -                | -         |     2.24 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           12 |     3538 | 2024-08-12 | SAW               | L   | 0.132      | -            | -                | -                | -         |    -0.56 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           11 |     3588 | 2024-08-10 | Endpoint          | L   | 0.118      | -            | -                | -                | -         |    -2.65 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|           10 |     3622 | 2024-08-09 | Qiang             | W   | 0.110      | -            | -                | -                | -         |     0.21 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            9 |     3670 | 2024-08-07 | 1WIN              | W   | 0.099      | -            | -                | -                | -         |     0.37 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            8 |     3721 | 2024-08-06 | KOI               | W   | 0.093      | -            | -                | -                | -         |     1.16 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            7 |     3754 | 2024-08-05 | ECSTATIC          | L   | 0.085      | -            | -                | -                | -         |    -1.48 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            6 |     3759 | 2024-08-05 | TSM               | L   | 0.084      | -            | -                | -                | -         |    -1.85 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            5 |     3764 | 2024-08-05 | ECSTATIC          | W   | 0.084      | -            | -                | -                | -         |     1.17 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            4 |     3945 | 2024-07-31 | Insilio           | W   | 0.052      | -            | -                | -                | -         |     0.36 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            3 |     3981 | 2024-07-30 | EYEBALLERS        | W   | 0.046      | -            | -                | -                | -         |     0.44 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            2 |     3996 | 2024-07-30 | Zero Tenacity     | L   | 0.045      | -            | -                | -                | -         |    -0.65 | Cabbi, IceBerg, kwezz, Lucky, MistR  |
|            1 |     4172 | 2024-07-24 | Monte             | W   | 0.006      | -            | -                | -                | -         |     0.10 | Cabbi, IceBerg, kwezz, Lucky, MistR  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,335.01)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      0.977 | $1,000.00      | $977.14         |
| 2024-11-10 |      0.733 | $2,500.00      | $1,831.51       |
| 2024-10-20 |      0.592 | $7,000.00      | $4,141.78       |
| 2024-09-14 |      0.352 | $5,000.00      | $1,762.28       |
| 2024-08-11 |      0.124 | $5,000.00      | $622.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
