### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: bobeksde, dex, draken, Ro1f, spooke<br />
Global Rank: [40](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_21.md)<br />
Regional Rank: [30]( ../../standings_europe_2024_08_21.md)<br />
<br />
Final Rank Value:  1096.7<br />
<br />
Final Rank Value (1096.7) = Starting Rank Value (1236.2) + Head To Head Adjustments (-139.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.521[<sup>1</sup>](#table2)
- Bounty Collected: 0.409[<sup>2</sup>](#table1)
- Opponent Network: 0.220[<sup>2</sup>](#table1)
- LAN Wins: 0.536[<sup>2</sup>](#table1)

The average of these factors is 0.421<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1236.2
- 400 + ( ( 0.421 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 1236.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |       19 | 2024-08-21 | ARCRED          | L   | 1.000      | -            | -                | -                | -         |   -21.72 | bobeksde, dex, draken, Ro1f, spooke       |
|           62 |       58 | 2024-08-21 | Cloud9          | L   | 1.000      | -            | -                | -                | -         |   -24.65 | bobeksde, dex, draken, Ro1f, spooke       |
|           61 |      166 | 2024-08-17 | ECSTATIC        | L   | 1.000      | -            | -                | -                | -         |   -29.33 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           60 |      269 | 2024-08-13 | kONO            | L   | 1.000      | -            | -                | -                | -         |   -26.36 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           59 |      321 | 2024-08-12 | TSM             | L   | 1.000      | -            | -                | -                | -         |   -23.56 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           58 |      362 | 2024-08-10 | Enterprise      | W   | 1.000      | 0.333        | 0.041 (0.014)    | 0.695 (0.232)    | 0 (0.000) |     5.28 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           57 |      415 | 2024-08-08 | TSM             | W   | 1.000      | 0.333        | 0.055 (0.018)    | 0.715 (0.238)    | 0 (0.000) |     7.58 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           56 |      449 | 2024-08-07 | Metizport       | L   | 1.000      | -            | -                | -                | -         |   -27.18 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           55 |      466 | 2024-08-07 | ECSTATIC        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.26 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           54 |      512 | 2024-08-06 | BLEED           | W   | 1.000      | 0.143        | 0.113 (0.016)    | -                | -         |    16.76 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           53 |      514 | 2024-08-06 | Metizport       | W   | 1.000      | -            | -                | -                | -         |     3.17 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           52 |      527 | 2024-08-05 | Into the Breach | W   | 1.000      | -            | -                | -                | -         |     3.49 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           51 |      538 | 2024-08-05 | 9 Pandas        | L   | 1.000      | -            | -                | -                | -         |   -21.78 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           50 |      565 | 2024-08-04 | 3DMAX           | W   | 1.000      | 0.143        | 0.519 (0.074)    | -                | -         |    24.37 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           49 |      592 | 2024-08-03 | Cloud9          | W   | 1.000      | -            | -                | -                | -         |     3.40 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           48 |      645 | 2024-08-02 | Nemiga          | W   | 1.000      | 0.143        | 0.355 (0.051)    | -                | -         |    14.44 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           47 |      736 | 2024-07-31 | fnatic          | W   | 1.000      | 0.143        | 0.348 (0.050)    | -                | -         |    23.93 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           46 |     1075 | 2024-07-20 | Nexus           | W   | 0.986      | -            | -                | -                | -         |     3.36 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           45 |     1094 | 2024-07-20 | Illuminar       | L   | 0.984      | -            | -                | -                | -         |   -25.44 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           44 |     1108 | 2024-07-19 | Preasy          | W   | 0.979      | -            | -                | -                | -         |     2.74 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           43 |     1170 | 2024-07-18 | 9INE            | W   | 0.972      | 0.333        | -                | 0.550 (0.178)    | -         |     5.39 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           42 |     1177 | 2024-07-18 | Passion UA      | L   | 0.971      | -            | -                | -                | -         |   -22.00 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           41 |     1297 | 2024-07-16 | Young Ninjas    | W   | 0.958      | -            | -                | -                | -         |     3.12 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           40 |     1344 | 2024-07-15 | Endpoint        | W   | 0.952      | 0.371        | 0.059 (0.021)    | 0.605 (0.213)    | -         |     5.57 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           39 |     1391 | 2024-07-12 | TSM             | L   | 0.931      | -            | -                | -                | -         |   -21.14 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           38 |     1429 | 2024-07-10 | Sashi           | W   | 0.918      | 0.358        | 0.180 (0.059)    | 0.989 (0.325)    | -         |    12.89 | bobeksde, chawzyyy, Ro1f, SHiNE, spooke   |
|           37 |     1431 | 2024-07-10 | Endpoint        | W   | 0.918      | 0.358        | 0.059 (0.019)    | 0.605 (0.199)    | -         |     5.28 | bobeksde, chawzyyy, Ro1f, SHiNE, spooke   |
|           36 |     1452 | 2024-07-09 | 9INE            | W   | 0.911      | 0.371        | -                | 0.550 (0.186)    | -         |     4.89 | bobeksde, chawzyyy, Ro1f, SHiNE, spooke   |
|           35 |     1454 | 2024-07-09 | Revenant        | L   | 0.911      | -            | -                | -                | -         |   -24.32 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           34 |     1477 | 2024-07-07 | lajtbitexe      | W   | 0.898      | -            | -                | -                | -         |     1.71 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           33 |     1485 | 2024-07-05 | kONO            | W   | 0.885      | 0.333        | -                | 0.577 (0.170)    | -         |     3.81 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           32 |     1495 | 2024-06-30 | Young Gods      | W   | 0.852      | -            | -                | -                | -         |     1.38 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           31 |     1517 | 2024-06-27 | Revenant        | W   | 0.831      | -            | -                | -                | -         |     3.87 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           30 |     1521 | 2024-06-25 | Revenant        | W   | 0.818      | -            | -                | -                | -         |     3.83 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           29 |     1528 | 2024-06-23 | Anonymo         | W   | 0.804      | -            | -                | -                | -         |     0.64 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|           28 |     1596 | 2024-06-15 | Lilmix          | W   | 0.752      | -            | -                | -                | 1 (0.752) |     2.68 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           27 |     1636 | 2024-06-14 | Lilmix          | W   | 0.745      | -            | -                | -                | 1 (0.745) |     2.63 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|           26 |     1678 | 2024-06-13 | Kappa Bar       | W   | 0.737      | -            | -                | -                | 1 (0.737) |     0.62 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           25 |     1777 | 2024-06-09 | Alliance        | W   | 0.713      | -            | -                | -                | 1 (0.713) |     2.60 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           24 |     1816 | 2024-06-09 | Preasy          | W   | 0.710      | -            | -                | -                | 1 (0.710) |     0.57 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           23 |     2090 | 2024-06-04 | Enterprise      | L   | 0.677      | -            | -                | -                | -         |   -17.86 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           22 |     2109 | 2024-06-03 | brazylijski luz | W   | 0.672      | -            | -                | -                | -         |     1.92 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           21 |     2111 | 2024-06-03 | Zero Tenacity   | W   | 0.671      | 0.371        | 0.139 (0.035)    | 1.000 (0.249)    | -         |     7.83 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           20 |     2201 | 2024-05-31 | UNiTY           | L   | 0.650      | -            | -                | -                | -         |   -16.94 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           19 |     2306 | 2024-05-26 | Preasy          | W   | 0.618      | -            | -                | -                | -         |     1.43 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           18 |     2404 | 2024-05-22 | Permitta        | W   | 0.590      | 0.371        | -                | 0.953 (0.208)    | -         |     2.56 | bobeksde, draken, Lekr0, Ro1f, spooke     |
|           17 |     2717 | 2024-05-14 | kONO            | L   | 0.537      | -            | -                | -                | -         |   -14.91 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           16 |     2733 | 2024-05-13 | UNiTY           | W   | 0.532      | -            | -                | -                | -         |     2.85 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           15 |     2739 | 2024-05-13 | ECLOT           | W   | 0.531      | -            | -                | -                | -         |     7.72 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           14 |     2750 | 2024-05-12 | Verdant         | W   | 0.526      | -            | -                | -                | -         |     2.59 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           13 |     2763 | 2024-05-12 | Preasy          | L   | 0.524      | -            | -                | -                | -         |   -15.46 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           12 |     2779 | 2024-05-11 | Lilmix          | W   | 0.520      | -            | -                | -                | 1 (0.520) |     1.61 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           11 |     2793 | 2024-05-11 | Flying Angels   | W   | 0.518      | -            | -                | -                | 1 (0.518) |     0.30 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           10 |     2811 | 2024-05-10 | FAVBET          | W   | 0.510      | -            | -                | -                | -         |     1.28 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            9 |     3335 | 2024-04-18 | UNiTY           | W   | 0.364      | -            | -                | -                | -         |     1.98 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            8 |     3400 | 2024-04-16 | Viperio         | W   | 0.352      | -            | -                | -                | -         |     0.35 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            7 |     3646 | 2024-04-07 | Alliance        | W   | 0.293      | -            | -                | -                | -         |     0.86 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            6 |     3654 | 2024-04-07 | Metizport       | L   | 0.291      | -            | -                | -                | -         |    -8.30 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            5 |     3664 | 2024-04-06 | JANO            | W   | 0.285      | -            | -                | -                | -         |     0.35 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            4 |     4264 | 2024-03-09 | Alliance        | L   | 0.098      | -            | -                | -                | -         |    -2.81 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            3 |     4365 | 2024-03-05 | B8              | L   | 0.073      | -            | -                | -                | -         |    -1.72 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            2 |     4371 | 2024-03-05 | Insilio         | W   | 0.073      | -            | -                | -                | -         |     0.28 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            1 |     4378 | 2024-03-05 | Sashi           | W   | 0.072      | -            | -                | -                | -         |     0.79 | chawzyyy, draken, Lekr0, Ro1f, spooke     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($36,924.42)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-12 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-07-20 |      0.986 | $5,000.00      | $4,929.87       |
| 2024-07-09 |      0.911 | $3,000.00      | $2,731.77       |
| 2024-06-27 |      0.831 | $5,000.00      | $4,153.21       |
| 2024-06-15 |      0.752 | $11,615.00     | $8,733.82       |
| 2024-06-09 |      0.713 | $7,224.00      | $5,147.49       |
| 2024-06-06 |      0.691 | $1,000.00      | $691.19         |
| 2024-05-13 |      0.531 | $6,000.00      | $3,183.61       |
| 2024-05-11 |      0.520 | $4,170.00      | $2,167.03       |
| 2024-04-18 |      0.364 | $6,000.00      | $2,186.44       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
