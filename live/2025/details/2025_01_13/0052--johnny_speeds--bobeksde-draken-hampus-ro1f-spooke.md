### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: bobeksde, draken, hampus, Ro1f, spooke<br />
Global Rank: [52](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [37]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  1100.5<br />
<br />
Final Rank Value (1100.5) = Starting Rank Value (1076.6) + Head To Head Adjustments (23.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.510[<sup>1</sup>](#table2)
- Bounty Collected: 0.410[<sup>2</sup>](#table1)
- Opponent Network: 0.143[<sup>2</sup>](#table1)
- LAN Wins: 0.302[<sup>2</sup>](#table1)

The average of these factors is 0.341<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1076.6
- 400 + ( ( 0.341 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1076.6


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
|           65 |      611 | 2024-11-23 | Alliance          | W   | 0.861      | 0.377        | 0.037 (0.012)    | 0.387 (0.126)    | 1 (0.861) |     6.84 | bobeksde, draken, hampus, Ro1f, spooke   |
|           64 |      665 | 2024-11-21 | Kappa Bar         | W   | 0.848      | -            | -                | -                | 1 (0.848) |     4.36 | bobeksde, draken, hampus, Ro1f, spooke   |
|           63 |      667 | 2024-11-21 | Alliance          | W   | 0.847      | 0.377        | 0.037 (0.012)    | 0.387 (0.124)    | 1 (0.847) |     6.88 | bobeksde, draken, hampus, Ro1f, spooke   |
|           62 |      944 | 2024-11-10 | OG                | W   | 0.775      | 0.354        | 0.171 (0.047)    | -                | 0 (0.000) |     8.98 | bobeksde, draken, hampus, Ro1f, spooke   |
|           61 |      978 | 2024-11-08 | Metizport         | L   | 0.762      | -            | -                | -                | -         |    -5.92 | bobeksde, draken, hampus, Ro1f, spooke   |
|           60 |     1023 | 2024-11-06 | ECLOT             | L   | 0.745      | -            | -                | -                | -         |    -7.34 | bobeksde, draken, hampus, Ro1f, spooke   |
|           59 |     1035 | 2024-11-05 | showmakerz        | W   | 0.741      | -            | -                | -                | 0 (0.000) |     0.49 | bobeksde, draken, hampus, Ro1f, spooke   |
|           58 |     1053 | 2024-11-04 | HOTU              | W   | 0.734      | 0.384        | -                | 0.411 (0.116)    | 0 (0.000) |     3.98 | bobeksde, draken, hampus, Ro1f, spooke   |
|           57 |     1065 | 2024-11-03 | Insilio           | W   | 0.728      | 0.354        | -                | 0.520 (0.134)    | 0 (0.000) |     2.98 | bobeksde, draken, hampus, Ro1f, spooke   |
|           56 |     1120 | 2024-11-01 | OG                | W   | 0.714      | 0.384        | 0.171 (0.047)    | -                | 0 (0.000) |     8.44 | bobeksde, draken, hampus, Ro1f, spooke   |
|           55 |     1133 | 2024-10-31 | ECSTATIC          | L   | 0.709      | -            | -                | -                | -         |   -12.90 | bobeksde, draken, hampus, Ro1f, spooke   |
|           54 |     1136 | 2024-10-31 | Metizport         | W   | 0.708      | 0.333        | 0.179 (0.042)    | 0.801 (0.189)    | 0 (0.000) |    17.06 | bobeksde, draken, hampus, Ro1f, spooke   |
|           53 |     1167 | 2024-10-30 | 9 Pandas          | L   | 0.700      | -            | -                | -                | -         |    -9.25 | bobeksde, draken, hampus, Ro1f, spooke   |
|           52 |     1175 | 2024-10-29 | Endpoint          | W   | 0.695      | 0.333        | -                | 0.524 (0.122)    | 0 (0.000) |     5.53 | bobeksde, draken, hampus, Ro1f, spooke   |
|           51 |     1179 | 2024-10-29 | Gaimin Gladiators | L   | 0.695      | -            | -                | -                | -         |   -12.80 | bobeksde, draken, hampus, Ro1f, spooke   |
|           50 |     1184 | 2024-10-29 | Rare Atom         | W   | 0.694      | 0.333        | 0.118 (0.027)    | -                | -         |    15.68 | bobeksde, draken, hampus, Ro1f, spooke   |
|           49 |     1239 | 2024-10-26 | Nexus             | W   | 0.674      | 0.354        | 0.397 (0.095)    | 0.761 (0.181)    | -         |    16.92 | bobeksde, draken, hampus, Ro1f, spooke   |
|           48 |     1310 | 2024-10-21 | UNiTY             | W   | 0.640      | -            | -                | -                | -         |     7.50 | bobeksde, draken, hampus, Ro1f, spooke   |
|           47 |     1324 | 2024-10-20 | Into the Breach   | L   | 0.634      | -            | -                | -                | -         |   -13.11 | bobeksde, draken, hampus, Ro1f, spooke   |
|           46 |     1448 | 2024-10-16 | WW                | W   | 0.606      | -            | -                | -                | -         |     1.22 | bobeksde, draken, hampus, Ro1f, spooke   |
|           45 |     1483 | 2024-10-13 | Insilio           | L   | 0.588      | -            | -                | -                | -         |   -16.48 | bobeksde, draken, hampus, Ro1f, spooke   |
|           44 |     1632 | 2024-10-07 | Preasy            | W   | 0.546      | -            | -                | -                | -         |     2.36 | bobeksde, draken, hampus, Ro1f, spooke   |
|           43 |     1644 | 2024-10-06 | EYEBALLERS        | W   | 0.541      | -            | -                | -                | -         |     3.63 | bobeksde, draken, hampus, Ro1f, spooke   |
|           42 |     1652 | 2024-10-06 | fightclub         | W   | 0.540      | -            | -                | -                | -         |     0.40 | bobeksde, draken, hampus, Ro1f, spooke   |
|           41 |     1687 | 2024-10-05 | ENCE Academy      | W   | 0.533      | -            | -                | -                | -         |     2.85 | bobeksde, draken, hampus, Ro1f, spooke   |
|           40 |     1720 | 2024-10-04 | NAVI Junior       | W   | 0.527      | 0.333        | 0.202 (0.036)    | 1.000 (0.176)    | -         |     8.63 | bobeksde, draken, hampus, Ro1f, spooke   |
|           39 |     1752 | 2024-10-03 | Partizan          | W   | 0.521      | 0.333        | 0.114 (0.020)    | -                | -         |    12.05 | bobeksde, draken, hampus, Ro1f, spooke   |
|           38 |     1855 | 2024-10-01 | los kogutos       | L   | 0.505      | -            | -                | -                | -         |    -7.33 | bobeksde, draken, hampus, Ro1f, spooke   |
|           37 |     1866 | 2024-09-30 | MOUZ NXT          | W   | 0.501      | -            | -                | -                | -         |     0.41 | bobeksde, draken, hampus, Ro1f, spooke   |
|           36 |     1872 | 2024-09-30 | Gaimin Gladiators | L   | 0.500      | -            | -                | -                | -         |    -9.80 | bobeksde, draken, hampus, Ro1f, spooke   |
|           35 |     1925 | 2024-09-28 | ARCRED            | W   | 0.488      | -            | -                | -                | -         |     2.77 | bobeksde, draken, hampus, Ro1f, spooke   |
|           34 |     1938 | 2024-09-28 | Into the Breach   | L   | 0.486      | -            | -                | -                | -         |   -10.12 | bobeksde, draken, hampus, Ro1f, spooke   |
|           33 |     2159 | 2024-09-23 | Nemiga            | L   | 0.455      | -            | -                | -                | -         |    -3.61 | bobeksde, draken, hampus, Ro1f, spooke   |
|           32 |     2166 | 2024-09-23 | 9INE              | L   | 0.454      | -            | -                | -                | -         |    -8.68 | bobeksde, draken, hampus, Ro1f, spooke   |
|           31 |     2169 | 2024-09-23 | Apogee            | W   | 0.453      | -            | -                | -                | -         |     2.40 | bobeksde, draken, hampus, Ro1f, spooke   |
|           30 |     2241 | 2024-09-20 | devils.one        | W   | 0.433      | -            | -                | -                | -         |     1.83 | bobeksde, draken, hampus, Ro1f, spooke   |
|           29 |     2260 | 2024-09-19 | CYBERSHOKE        | W   | 0.429      | 0.443        | -                | 0.633 (0.120)    | -         |     3.59 | bobeksde, draken, hampus, Ro1f, spooke   |
|           28 |     2274 | 2024-09-19 | Alliance          | W   | 0.427      | -            | -                | -                | -         |     4.24 | bobeksde, draken, hampus, Ro1f, spooke   |
|           27 |     2386 | 2024-09-15 | 9 Pandas          | W   | 0.400      | 0.443        | 0.156 (0.028)    | 0.797 (0.141)    | -         |     7.76 | bobeksde, draken, hampus, Ro1f, spooke   |
|           26 |     2395 | 2024-09-15 | K27               | W   | 0.399      | -            | -                | -                | -         |     0.87 | bobeksde, draken, hampus, Ro1f, spooke   |
|           25 |     2460 | 2024-09-13 | Rebels            | L   | 0.386      | -            | -                | -                | -         |    -9.50 | bobeksde, draken, hampus, Ro1f, spooke   |
|           24 |     3161 | 2024-08-23 | Rebels            | L   | 0.246      | -            | -                | -                | -         |    -6.17 | bobeksde, dex, draken, Ro1f, spooke      |
|           23 |     3173 | 2024-08-22 | Zero Tenacity     | W   | 0.241      | -            | -                | -                | -         |     3.35 | bobeksde, dex, draken, Ro1f, spooke      |
|           22 |     3231 | 2024-08-21 | ARCRED            | L   | 0.234      | -            | -                | -                | -         |    -6.11 | bobeksde, dex, draken, Ro1f, spooke      |
|           21 |     3270 | 2024-08-21 | Cloud9            | L   | 0.232      | -            | -                | -                | -         |    -3.85 | bobeksde, dex, draken, Ro1f, spooke      |
|           20 |     3378 | 2024-08-17 | ECSTATIC          | L   | 0.206      | -            | -                | -                | -         |    -4.23 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|           19 |     3481 | 2024-08-13 | kONO              | L   | 0.180      | -            | -                | -                | -         |    -3.98 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|           18 |     3533 | 2024-08-12 | TSM               | L   | 0.173      | -            | -                | -                | -         |    -4.15 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|           17 |     3574 | 2024-08-10 | ex-Enterprise     | W   | 0.160      | -            | -                | -                | -         |     1.19 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|           16 |     3627 | 2024-08-08 | TSM               | W   | 0.147      | -            | -                | -                | -         |     1.09 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|           15 |     3661 | 2024-08-07 | Metizport         | L   | 0.141      | -            | -                | -                | -         |    -0.78 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|           14 |     3678 | 2024-08-07 | ECSTATIC          | W   | 0.139      | -            | -                | -                | -         |     1.54 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|           13 |     3724 | 2024-08-06 | UNPAID            | W   | 0.133      | -            | -                | -                | -         |     1.74 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|           12 |     3726 | 2024-08-06 | Metizport         | W   | 0.132      | -            | -                | -                | -         |     3.47 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|           11 |     3739 | 2024-08-05 | Into the Breach   | W   | 0.127      | -            | -                | -                | -         |     1.01 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|           10 |     3750 | 2024-08-05 | 9 Pandas          | L   | 0.126      | -            | -                | -                | -         |    -3.44 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            9 |     3777 | 2024-08-04 | 3DMAX             | W   | 0.120      | -            | -                | -                | -         |     3.33 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            8 |     3804 | 2024-08-03 | Cloud9            | W   | 0.114      | -            | -                | -                | -         |     1.65 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            7 |     3857 | 2024-08-02 | Nemiga            | W   | 0.105      | -            | -                | -                | -         |     2.53 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            6 |     3948 | 2024-07-31 | fnatic            | W   | 0.092      | -            | -                | -                | -         |     1.76 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            5 |     4287 | 2024-07-20 | Nexus             | W   | 0.021      | -            | -                | -                | -         |     0.60 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            4 |     4306 | 2024-07-20 | Illuminar         | L   | 0.019      | -            | -                | -                | -         |    -0.54 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            3 |     4320 | 2024-07-19 | Preasy            | W   | 0.014      | -            | -                | -                | -         |     0.03 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            2 |     4382 | 2024-07-18 | 9INE              | W   | 0.007      | -            | -                | -                | -         |     0.09 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            1 |     4389 | 2024-07-18 | Passion UA        | L   | 0.006      | -            | -                | -                | -         |    -0.07 | bobeksde, chawzyyy, draken, Ro1f, spooke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,841.12)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.867 | $1,000.00      | $866.79         |
| 2024-11-23 |      0.861 | $11,343.00     | $9,769.70       |
| 2024-11-09 |      0.768 | $4,848.00      | $3,722.32       |
| 2024-10-31 |      0.709 | $2,000.00      | $1,417.30       |
| 2024-10-06 |      0.541 | $5,000.00      | $2,704.06       |
| 2024-10-05 |      0.533 | $5,000.00      | $2,663.97       |
| 2024-09-24 |      0.460 | $8,000.00      | $3,679.03       |
| 2024-09-14 |      0.394 | $1,000.00      | $394.50         |
| 2024-08-12 |      0.173 | $3,000.00      | $518.79         |
| 2024-07-20 |      0.021 | $5,000.00      | $104.66         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
