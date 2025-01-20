### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: bobeksde, draken, hampus, Ro1f, spooke<br />
Global Rank: [51](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [37]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  1086.3<br />
<br />
Final Rank Value (1086.3) = Starting Rank Value (1068.8) + Head To Head Adjustments (17.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.509[<sup>1</sup>](#table2)
- Bounty Collected: 0.403[<sup>2</sup>](#table1)
- Opponent Network: 0.133[<sup>2</sup>](#table1)
- LAN Wins: 0.302[<sup>2</sup>](#table1)

The average of these factors is 0.337<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1068.8
- 400 + ( ( 0.337 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 1068.8


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
|           60 |      624 | 2024-11-23 | Alliance          | W   | 0.819      | 0.377        | 0.037 (0.011)    | 0.383 (0.118)    | 1 (0.819) |     6.88 | bobeksde, draken, hampus, Ro1f, spooke   |
|           59 |      678 | 2024-11-21 | Kappa Bar         | W   | 0.806      | -            | -                | -                | 1 (0.806) |     4.43 | bobeksde, draken, hampus, Ro1f, spooke   |
|           58 |      680 | 2024-11-21 | Alliance          | W   | 0.805      | 0.377        | 0.037 (0.011)    | 0.383 (0.116)    | 1 (0.805) |     6.93 | bobeksde, draken, hampus, Ro1f, spooke   |
|           57 |      957 | 2024-11-10 | OG                | W   | 0.733      | 0.354        | 0.171 (0.044)    | -                | 0 (0.000) |     8.66 | bobeksde, draken, hampus, Ro1f, spooke   |
|           56 |      991 | 2024-11-08 | Metizport         | L   | 0.720      | -            | -                | -                | -         |    -5.10 | bobeksde, draken, hampus, Ro1f, spooke   |
|           55 |     1036 | 2024-11-06 | ECLOT             | L   | 0.703      | -            | -                | -                | -         |    -6.57 | bobeksde, draken, hampus, Ro1f, spooke   |
|           54 |     1048 | 2024-11-05 | showmakerz        | W   | 0.699      | -            | -                | -                | 0 (0.000) |     0.50 | bobeksde, draken, hampus, Ro1f, spooke   |
|           53 |     1066 | 2024-11-04 | HOTU              | W   | 0.692      | 0.384        | -                | 0.406 (0.108)    | 0 (0.000) |     3.81 | bobeksde, draken, hampus, Ro1f, spooke   |
|           52 |     1078 | 2024-11-03 | Insilio           | W   | 0.686      | 0.354        | -                | 0.542 (0.132)    | 0 (0.000) |     2.86 | bobeksde, draken, hampus, Ro1f, spooke   |
|           51 |     1133 | 2024-11-01 | OG                | W   | 0.672      | 0.384        | 0.171 (0.044)    | -                | 0 (0.000) |     8.11 | bobeksde, draken, hampus, Ro1f, spooke   |
|           50 |     1146 | 2024-10-31 | ECSTATIC          | L   | 0.667      | -            | -                | -                | -         |   -12.04 | bobeksde, draken, hampus, Ro1f, spooke   |
|           49 |     1149 | 2024-10-31 | Metizport         | W   | 0.666      | 0.333        | 0.182 (0.040)    | 0.793 (0.176)    | 0 (0.000) |    16.53 | bobeksde, draken, hampus, Ro1f, spooke   |
|           48 |     1180 | 2024-10-30 | 9 Pandas          | L   | 0.658      | -            | -                | -                | -         |    -8.45 | bobeksde, draken, hampus, Ro1f, spooke   |
|           47 |     1188 | 2024-10-29 | Endpoint          | W   | 0.653      | 0.333        | -                | 0.511 (0.111)    | 0 (0.000) |     5.03 | bobeksde, draken, hampus, Ro1f, spooke   |
|           46 |     1192 | 2024-10-29 | Gaimin Gladiators | L   | 0.653      | -            | -                | -                | -         |   -12.04 | bobeksde, draken, hampus, Ro1f, spooke   |
|           45 |     1197 | 2024-10-29 | Rare Atom         | W   | 0.652      | 0.333        | 0.060 (0.013)    | -                | -         |     8.62 | bobeksde, draken, hampus, Ro1f, spooke   |
|           44 |     1252 | 2024-10-26 | Nexus             | W   | 0.632      | 0.354        | 0.402 (0.090)    | 0.768 (0.172)    | -         |    16.34 | bobeksde, draken, hampus, Ro1f, spooke   |
|           43 |     1323 | 2024-10-21 | UNiTY             | W   | 0.598      | -            | -                | -                | -         |     7.00 | bobeksde, draken, hampus, Ro1f, spooke   |
|           42 |     1337 | 2024-10-20 | Into the Breach   | L   | 0.592      | -            | -                | -                | -         |   -12.47 | bobeksde, draken, hampus, Ro1f, spooke   |
|           41 |     1461 | 2024-10-16 | WW                | W   | 0.564      | -            | -                | -                | -         |     1.14 | bobeksde, draken, hampus, Ro1f, spooke   |
|           40 |     1496 | 2024-10-13 | Insilio           | L   | 0.546      | -            | -                | -                | -         |   -15.29 | bobeksde, draken, hampus, Ro1f, spooke   |
|           39 |     1645 | 2024-10-07 | Preasy            | W   | 0.504      | -            | -                | -                | -         |     2.31 | bobeksde, draken, hampus, Ro1f, spooke   |
|           38 |     1657 | 2024-10-06 | EYEBALLERS        | W   | 0.499      | -            | -                | -                | -         |     3.46 | bobeksde, draken, hampus, Ro1f, spooke   |
|           37 |     1665 | 2024-10-06 | fightclub         | W   | 0.498      | -            | -                | -                | -         |     0.39 | bobeksde, draken, hampus, Ro1f, spooke   |
|           36 |     1700 | 2024-10-05 | ENCE Academy      | W   | 0.491      | -            | -                | -                | -         |     2.68 | bobeksde, draken, hampus, Ro1f, spooke   |
|           35 |     1733 | 2024-10-04 | NAVI Junior       | W   | 0.485      | 0.333        | 0.204 (0.033)    | 1.000 (0.162)    | -         |     7.96 | bobeksde, draken, hampus, Ro1f, spooke   |
|           34 |     1765 | 2024-10-03 | Partizan          | W   | 0.479      | 0.333        | 0.115 (0.018)    | -                | -         |    11.06 | bobeksde, draken, hampus, Ro1f, spooke   |
|           33 |     1868 | 2024-10-01 | los kogutos       | L   | 0.463      | -            | -                | -                | -         |    -6.38 | bobeksde, draken, hampus, Ro1f, spooke   |
|           32 |     1879 | 2024-09-30 | MOUZ NXT          | W   | 0.459      | -            | -                | -                | -         |     0.39 | bobeksde, draken, hampus, Ro1f, spooke   |
|           31 |     1885 | 2024-09-30 | Gaimin Gladiators | L   | 0.458      | -            | -                | -                | -         |    -9.08 | bobeksde, draken, hampus, Ro1f, spooke   |
|           30 |     1938 | 2024-09-28 | ARCRED            | W   | 0.446      | -            | -                | -                | -         |     2.57 | bobeksde, draken, hampus, Ro1f, spooke   |
|           29 |     1951 | 2024-09-28 | Into the Breach   | L   | 0.444      | -            | -                | -                | -         |    -9.42 | bobeksde, draken, hampus, Ro1f, spooke   |
|           28 |     2172 | 2024-09-23 | Nemiga            | L   | 0.413      | -            | -                | -                | -         |    -3.29 | bobeksde, draken, hampus, Ro1f, spooke   |
|           27 |     2179 | 2024-09-23 | 9INE              | L   | 0.412      | -            | -                | -                | -         |    -7.82 | bobeksde, draken, hampus, Ro1f, spooke   |
|           26 |     2182 | 2024-09-23 | Apogee            | W   | 0.411      | -            | -                | -                | -         |     2.20 | bobeksde, draken, hampus, Ro1f, spooke   |
|           25 |     2254 | 2024-09-20 | devils.one        | W   | 0.391      | -            | -                | -                | -         |     1.69 | bobeksde, draken, hampus, Ro1f, spooke   |
|           24 |     2273 | 2024-09-19 | CYBERSHOKE        | W   | 0.387      | 0.443        | -                | 0.624 (0.107)    | -         |     3.15 | bobeksde, draken, hampus, Ro1f, spooke   |
|           23 |     2287 | 2024-09-19 | Alliance          | W   | 0.384      | -            | -                | -                | -         |     3.96 | bobeksde, draken, hampus, Ro1f, spooke   |
|           22 |     2399 | 2024-09-15 | 9 Pandas          | W   | 0.358      | 0.443        | 0.160 (0.025)    | 0.804 (0.127)    | -         |     6.96 | bobeksde, draken, hampus, Ro1f, spooke   |
|           21 |     2408 | 2024-09-15 | K27               | W   | 0.357      | -            | -                | -                | -         |     0.78 | bobeksde, draken, hampus, Ro1f, spooke   |
|           20 |     2473 | 2024-09-13 | Rebels            | L   | 0.344      | -            | -                | -                | -         |    -8.51 | bobeksde, draken, hampus, Ro1f, spooke   |
|           19 |     3174 | 2024-08-23 | Rebels            | L   | 0.204      | -            | -                | -                | -         |    -5.12 | bobeksde, dex, draken, Ro1f, spooke      |
|           18 |     3186 | 2024-08-22 | Zero Tenacity     | W   | 0.199      | -            | -                | -                | -         |     2.77 | bobeksde, dex, draken, Ro1f, spooke      |
|           17 |     3244 | 2024-08-21 | ARCRED            | L   | 0.191      | -            | -                | -                | -         |    -4.99 | bobeksde, dex, draken, Ro1f, spooke      |
|           16 |     3283 | 2024-08-21 | Cloud9            | L   | 0.190      | -            | -                | -                | -         |    -3.16 | bobeksde, dex, draken, Ro1f, spooke      |
|           15 |     3391 | 2024-08-17 | ECSTATIC          | L   | 0.164      | -            | -                | -                | -         |    -3.31 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|           14 |     3494 | 2024-08-13 | kONO              | L   | 0.138      | -            | -                | -                | -         |    -2.98 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|           13 |     3546 | 2024-08-12 | TSM               | L   | 0.131      | -            | -                | -                | -         |    -3.12 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|           12 |     3587 | 2024-08-10 | ex-Enterprise     | W   | 0.118      | -            | -                | -                | -         |     0.89 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|           11 |     3640 | 2024-08-08 | TSM               | W   | 0.105      | -            | -                | -                | -         |     0.80 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|           10 |     3674 | 2024-08-07 | Metizport         | L   | 0.099      | -            | -                | -                | -         |    -0.51 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            9 |     3691 | 2024-08-07 | ECSTATIC          | W   | 0.097      | -            | -                | -                | -         |     1.10 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            8 |     3737 | 2024-08-06 | UNPAID            | W   | 0.091      | -            | -                | -                | -         |     1.17 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            7 |     3739 | 2024-08-06 | Metizport         | W   | 0.090      | -            | -                | -                | -         |     0.11 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            6 |     3752 | 2024-08-05 | Into the Breach   | W   | 0.085      | -            | -                | -                | -         |     0.68 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            5 |     3763 | 2024-08-05 | 9 Pandas          | L   | 0.084      | -            | -                | -                | -         |    -2.29 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            4 |     3790 | 2024-08-04 | 3DMAX             | W   | 0.078      | -            | -                | -                | -         |     2.15 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            3 |     3817 | 2024-08-03 | Cloud9            | W   | 0.072      | -            | -                | -                | -         |     1.04 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            2 |     3870 | 2024-08-02 | Nemiga            | W   | 0.063      | -            | -                | -                | -         |     1.51 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            1 |     3961 | 2024-07-31 | fnatic            | W   | 0.050      | -            | -                | -                | -         |     0.95 | bobeksde, chawzyyy, draken, Ro1f, spooke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,004.84)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.825 | $1,000.00      | $824.76         |
| 2024-11-23 |      0.819 | $11,343.00     | $9,292.86       |
| 2024-11-09 |      0.726 | $4,848.00      | $3,518.51       |
| 2024-10-31 |      0.667 | $2,000.00      | $1,333.22       |
| 2024-10-06 |      0.499 | $5,000.00      | $2,493.86       |
| 2024-10-05 |      0.491 | $5,000.00      | $2,453.77       |
| 2024-09-24 |      0.418 | $8,000.00      | $3,342.72       |
| 2024-09-14 |      0.352 | $1,000.00      | $352.46         |
| 2024-08-12 |      0.131 | $3,000.00      | $392.68         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
