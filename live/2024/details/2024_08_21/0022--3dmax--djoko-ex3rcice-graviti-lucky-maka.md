### Roster Details<br />
Team Name: 3DMAX<br />
Roster: Djoko, Ex3rcice, Graviti, Lucky, Maka<br />
Global Rank: [22](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_21.md)<br />
Regional Rank: [17]( ../../standings_europe_2024_08_21.md)<br />
<br />
Final Rank Value:  1360.7<br />
<br />
Final Rank Value (1360.7) = Starting Rank Value (1627.9) + Head To Head Adjustments (-267.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.778[<sup>1</sup>](#table2)
- Bounty Collected: 0.559[<sup>2</sup>](#table1)
- Opponent Network: 0.361[<sup>2</sup>](#table1)
- LAN Wins: 0.777[<sup>2</sup>](#table1)

The average of these factors is 0.619<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1627.9
- 400 + ( ( 0.619 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 1627.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           82 |      180 | 2024-08-16 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -27.63 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           81 |      255 | 2024-08-13 | Zero Tenacity     | W   | 1.000      | 0.500        | 0.139 (0.070)    | 1.000 (0.500)    | 0 (0.000) |     4.26 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           80 |      303 | 2024-08-12 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |   -23.02 | Djoko, Ex3rcice, Graviti, Maka, wasiNk |
|           79 |      386 | 2024-08-09 | PARIVISION        | W   | 1.000      | 0.500        | -                | 0.678 (0.339)    | 0 (0.000) |     5.27 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           78 |      410 | 2024-08-08 | HEROIC            | L   | 1.000      | -            | -                | -                | -         |   -13.22 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           77 |      450 | 2024-08-07 | GUN5              | W   | 1.000      | 0.500        | -                | 0.586 (0.293)    | -         |     1.41 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           76 |      465 | 2024-08-07 | 9z                | L   | 1.000      | -            | -                | -                | -         |   -14.13 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           75 |      565 | 2024-08-04 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -24.37 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           74 |      590 | 2024-08-03 | fnatic            | W   | 1.000      | -            | -                | -                | -         |    12.59 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           73 |      632 | 2024-08-02 | BLEED             | W   | 1.000      | -            | -                | -                | -         |     9.74 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           72 |      669 | 2024-08-01 | Betera            | W   | 1.000      | -            | -                | -                | -         |     0.31 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           71 |      707 | 2024-07-31 | Cloud9            | W   | 1.000      | -            | -                | -                | -         |     0.79 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           70 |      830 | 2024-07-28 | The MongolZ       | W   | 1.000      | 0.650        | 0.995 (0.647)    | 0.655 (0.426)    | 1 (1.000) |    25.90 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           69 |      838 | 2024-07-28 | Aurora            | W   | 1.000      | 0.650        | 0.372 (0.242)    | 0.643 (0.418)    | 1 (1.000) |    17.84 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           68 |      856 | 2024-07-27 | ENCE              | W   | 1.000      | 0.650        | 0.157 (0.102)    | -                | 1 (1.000) |    12.88 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           67 |      883 | 2024-07-26 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -7.02 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           66 |      925 | 2024-07-25 | Revenant          | W   | 1.000      | 0.650        | -                | 0.514 (0.334)    | 1 (1.000) |     2.22 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           65 |      934 | 2024-07-25 | DMS               | W   | 1.000      | 0.650        | -                | 0.510 (0.332)    | 1 (1.000) |     1.96 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           64 |      963 | 2024-07-24 | AMKAL             | W   | 1.000      | 0.650        | 0.119 (0.077)    | -                | 1 (1.000) |     7.47 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           63 |     1220 | 2024-07-17 | 9 Pandas          | W   | 0.967      | 0.500        | -                | 0.678 (0.328)    | -         |     4.39 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           62 |     1333 | 2024-07-15 | TSM               | L   | 0.953      | -            | -                | -                | -         |   -25.26 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           61 |     1460 | 2024-07-08 | Latvia            | L   | 0.906      | -            | -                | -                | -         |   -27.61 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           60 |     1541 | 2024-06-17 | 5W                | L   | 0.765      | -            | -                | -                | -         |   -22.37 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           59 |     1555 | 2024-06-16 | B8                | L   | 0.759      | -            | -                | -                | -         |   -20.61 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           58 |     1562 | 2024-06-16 | Permitta          | W   | 0.758      | 0.435        | -                | 0.953 (0.314)    | -         |     1.29 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           57 |     1567 | 2024-06-16 | Enterprise        | W   | 0.757      | -            | -                | -                | -         |     1.16 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           56 |     1582 | 2024-06-15 | GUN5              | W   | 0.753      | -            | -                | -                | -         |     1.51 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           55 |     1600 | 2024-06-15 | BLEED             | W   | 0.751      | -            | -                | -                | -         |     7.14 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           54 |     1633 | 2024-06-14 | Sashi             | W   | 0.745      | -            | -                | -                | -         |     4.21 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           53 |     1646 | 2024-06-14 | Passion UA        | W   | 0.744      | 0.435        | 0.170 (0.055)    | 1.000 (0.323)    | -         |     2.40 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           52 |     1659 | 2024-06-13 | 9INE              | W   | 0.740      | -            | -                | -                | -         |     1.17 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           51 |     1677 | 2024-06-13 | VP.Prodigy        | W   | 0.738      | -            | -                | -                | -         |     0.96 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           50 |     1708 | 2024-06-11 | SINNERS           | W   | 0.727      | -            | -                | -                | -         |     2.26 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           49 |     1719 | 2024-06-11 | BUHAWI            | W   | 0.725      | -            | -                | -                | -         |     0.07 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           48 |     1735 | 2024-06-10 | EYEBALLERS        | W   | 0.719      | -            | -                | -                | -         |     0.98 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           47 |     1742 | 2024-06-10 | SAW               | W   | 0.718      | -            | -                | -                | -         |    12.89 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           46 |     1749 | 2024-06-10 | PARIVISION        | W   | 0.718      | -            | -                | -                | -         |     3.17 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           45 |     1753 | 2024-06-10 | 9 Pandas          | W   | 0.717      | -            | -                | -                | -         |     2.45 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           44 |     1776 | 2024-06-09 | 9INE              | L   | 0.713      | -            | -                | -                | -         |   -21.35 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           43 |     1791 | 2024-06-09 | Monte             | L   | 0.712      | -            | -                | -                | -         |   -20.43 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           42 |     1799 | 2024-06-09 | SINNERS           | L   | 0.711      | -            | -                | -                | -         |   -20.49 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           41 |     1804 | 2024-06-09 | Aurora            | W   | 0.711      | -            | -                | -                | -         |    10.32 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           40 |     1813 | 2024-06-09 | RUSH B            | W   | 0.711      | -            | -                | -                | -         |     0.79 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           39 |     1848 | 2024-06-08 | Illuminar         | L   | 0.706      | -            | -                | -                | -         |   -21.60 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           38 |     1907 | 2024-06-07 | Gaimin Gladiators | W   | 0.699      | -            | -                | -                | -         |     0.82 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           37 |     1943 | 2024-06-06 | Nexus             | W   | 0.694      | -            | -                | -                | -         |     0.36 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           36 |     1956 | 2024-06-06 | Sangal            | L   | 0.693      | -            | -                | -                | -         |   -18.79 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           35 |     2025 | 2024-06-05 | KOI               | L   | 0.686      | -            | -                | -                | -         |   -20.57 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           34 |     2071 | 2024-06-04 | Aurora            | W   | 0.680      | 0.500        | 0.372 (0.126)    | -                | -         |     9.72 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           33 |     2154 | 2024-06-01 | VP.Prodigy        | L   | 0.659      | -            | -                | -                | -         |   -20.20 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           32 |     2204 | 2024-05-30 | Sampi             | W   | 0.647      | -            | -                | -                | -         |     0.50 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           31 |     2331 | 2024-05-25 | MOUZ NXT          | L   | 0.611      | -            | -                | -                | -         |   -18.31 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           30 |     2356 | 2024-05-23 | Zero Tenacity     | W   | 0.599      | -            | -                | -                | -         |     1.24 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           29 |     2568 | 2024-05-17 | B8                | L   | 0.558      | -            | -                | -                | -         |   -16.52 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           28 |     2654 | 2024-05-15 | Zero Tenacity     | L   | 0.545      | -            | -                | -                | -         |   -16.38 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           27 |     2851 | 2024-05-08 | G2                | L   | 0.499      | -            | -                | -                | -         |    -1.86 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           26 |     2992 | 2024-05-01 | Sashi             | L   | 0.451      | -            | -                | -                | -         |   -13.15 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           25 |     3018 | 2024-04-30 | BetBoom           | W   | 0.444      | -            | -                | -                | -         |     2.60 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           24 |     3025 | 2024-04-29 | PARIVISION        | W   | 0.440      | -            | -                | -                | -         |     0.81 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           23 |     3073 | 2024-04-27 | Astralis          | L   | 0.425      | -            | -                | -                | -         |    -5.24 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           22 |     3145 | 2024-04-24 | fnatic            | W   | 0.405      | 0.889        | 0.348 (0.126)    | -                | 1 (0.405) |     3.56 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           21 |     3170 | 2024-04-23 | SAW               | W   | 0.398      | 0.889        | 0.349 (0.123)    | -                | 1 (0.398) |     6.42 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           20 |     3180 | 2024-04-22 | ex-Guild Eagles   | W   | 0.393      | -            | -                | -                | -         |     0.14 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           19 |     3365 | 2024-04-17 | BLEED             | W   | 0.358      | -            | -                | -                | -         |     0.27 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           18 |     3433 | 2024-04-14 | BetBoom           | L   | 0.339      | -            | -                | -                | -         |    -8.81 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           17 |     3448 | 2024-04-13 | ex-Preasy         | W   | 0.332      | -            | -                | -                | -         |     0.09 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           16 |     3490 | 2024-04-11 | Passion UA        | L   | 0.318      | -            | -                | -                | -         |    -9.66 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           15 |     3524 | 2024-04-10 | SINNERS           | L   | 0.313      | -            | -                | -                | -         |    -9.07 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           14 |     3573 | 2024-04-09 | SAW               | W   | 0.307      | 0.500        | 0.349 (0.054)    | -                | -         |     4.87 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           13 |     3650 | 2024-04-07 | Young Ninjas      | W   | 0.292      | -            | -                | -                | -         |     0.10 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           12 |     3723 | 2024-04-04 | Space             | W   | 0.272      | -            | -                | -                | -         |     0.09 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           11 |     3752 | 2024-04-03 | GUN5              | W   | 0.266      | -            | -                | -                | -         |     0.17 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           10 |     3803 | 2024-04-02 | Permitta          | W   | 0.258      | -            | -                | -                | -         |     0.20 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            9 |     3858 | 2024-03-28 | Apeks             | W   | 0.226      | -            | -                | -                | -         |     0.08 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            8 |     3981 | 2024-03-21 | fnatic            | L   | 0.179      | -            | -                | -                | -         |    -4.11 | Djoko, Ex3rcice, Lucky, Maka, NBK-     |
|            7 |     4023 | 2024-03-19 | GUN5              | W   | 0.165      | -            | -                | -                | -         |     0.01 | Djoko, Ex3rcice, Lucky, Maka, NBK-     |
|            6 |     4094 | 2024-03-15 | B8                | W   | 0.139      | -            | -                | -                | -         |     0.17 | Djoko, Ex3rcice, Lucky, Maka, misutaaa |
|            5 |     4162 | 2024-03-13 | PARIVISION        | L   | 0.126      | -            | -                | -                | -         |    -3.74 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            4 |     4375 | 2024-03-05 | FORZE             | L   | 0.073      | -            | -                | -                | -         |    -2.26 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            3 |     4397 | 2024-03-04 | fnatic            | L   | 0.065      | -            | -                | -                | -         |    -1.52 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            2 |     4435 | 2024-03-02 | Monte             | W   | 0.053      | -            | -                | -                | -         |     0.06 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            1 |     4472 | 2024-02-29 | Gaimin Gladiators | W   | 0.040      | -            | -                | -                | -         |     0.02 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($159,702.37)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.52) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-09 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-07-28 |      1.000 | $120,000.00    | $120,000.00     |
| 2024-06-17 |      0.765 | $10,000.00     | $7,649.94       |
| 2024-06-16 |      0.759 | $10,000.00     | $7,592.87       |
| 2024-06-09 |      0.713 | $7,000.00      | $4,991.77       |
| 2024-06-02 |      0.666 | $2,000.00      | $1,331.04       |
| 2024-05-26 |      0.619 | $2,000.00      | $1,238.25       |
| 2024-05-12 |      0.526 | $23,500.00     | $12,355.13      |
| 2024-05-02 |      0.459 | $1,500.00      | $689.03         |
| 2024-04-14 |      0.339 | $4,000.00      | $1,354.35       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
