### Roster Details<br />
Team Name: B8<br />
Roster: alex666, cptkurtka023, esenthial, headtr1ck, npl<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [40](../standings_global.md)<br />
Regional Rank: [28]( ../standings_europe.md)<br />
Final Rank Value:  1148.8<br />
<br />
Final Rank Value (1148.8) = Starting Rank Value (1095.8) + Head To Head Adjustments (52.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.593[<sup>1</sup>](#table2)
- Bounty Collected: 0.462[<sup>2</sup>](#table1)
- Opponent Network: 0.321[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.344<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1095.8
- 400 + ( ( 0.344 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1095.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           79 |      122 | 2024-07-20 | Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |   -16.77 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           78 |      177 | 2024-07-19 | Rebels        | W   | 1.000      | 0.500        | -                | 0.661 (0.330)    | 0 (0.000) |     9.91 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           77 |      207 | 2024-07-18 | Aurora        | L   | 1.000      | -            | -                | -                | -         |    -7.46 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           76 |      285 | 2024-07-17 | Sangal        | L   | 1.000      | -            | -                | -                | -         |   -14.28 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           75 |      393 | 2024-07-15 | 9INE          | W   | 1.000      | 0.500        | -                | 0.480 (0.240)    | 0 (0.000) |     4.62 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           74 |      605 | 2024-06-16 | 3DMAX         | W   | 0.947      | 0.435        | 0.175 (0.072)    | 1.000 (0.411)    | 0 (0.000) |    17.85 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           73 |      616 | 2024-06-16 | Monte         | W   | 0.945      | -            | -                | -                | 0 (0.000) |     9.99 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           72 |      651 | 2024-06-15 | Illuminar     | W   | 0.938      | -            | -                | -                | 0 (0.000) |     6.44 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           71 |      730 | 2024-06-13 | MOUZ NXT      | W   | 0.924      | 0.435        | 0.169 (0.068)    | 1.000 (0.402)    | 0 (0.000) |    11.92 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           70 |      750 | 2024-06-12 | BLEED         | L   | 0.919      | -            | -                | -                | -         |   -10.24 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           69 |      843 | 2024-06-09 | AMKAL         | L   | 0.899      | -            | -                | -                | -         |   -12.25 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           68 |      955 | 2024-06-07 | Verdant       | W   | 0.886      | -            | -                | -                | 0 (0.000) |     6.02 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           67 |      963 | 2024-06-07 | PERA          | W   | 0.886      | -            | -                | -                | 0 (0.000) |     7.65 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           66 |      972 | 2024-06-07 | Verdant       | L   | 0.885      | -            | -                | -                | -         |   -22.15 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           65 |     1265 | 2024-05-30 | SINNERS       | L   | 0.833      | -            | -                | -                | -         |   -17.49 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           64 |     1357 | 2024-05-26 | MOUZ NXT      | L   | 0.805      | -            | -                | -                | -         |   -16.89 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           63 |     1365 | 2024-05-25 | RUBY          | W   | 0.801      | 0.435        | 0.122 (0.042)    | -                | 0 (0.000) |     6.04 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           62 |     1371 | 2024-05-25 | BetBoom       | W   | 0.800      | 0.435        | 0.333 (0.116)    | -                | 0 (0.000) |    19.87 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           61 |     1387 | 2024-05-24 | Alliance      | W   | 0.793      | -            | -                | -                | -         |     4.15 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           60 |     1407 | 2024-05-23 | DMS           | W   | 0.785      | -            | -                | -                | -         |     4.76 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           59 |     1485 | 2024-05-21 | Rhyno         | W   | 0.774      | -            | -                | -                | -         |     7.71 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           58 |     1526 | 2024-05-20 | EYEBALLERS    | W   | 0.766      | -            | -                | -                | -         |     4.73 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           57 |     1551 | 2024-05-19 | Zero Tenacity | L   | 0.759      | -            | -                | -                | -         |   -14.89 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           56 |     1573 | 2024-05-18 | Sashi         | W   | 0.753      | 0.384        | 0.234 (0.068)    | 1.000 (0.290)    | -         |    14.16 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           55 |     1589 | 2024-05-18 | Rebels        | W   | 0.751      | -            | -                | -                | -         |     8.70 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           54 |     1618 | 2024-05-17 | 3DMAX         | W   | 0.745      | 0.500        | 0.175 (0.065)    | 1.000 (0.373)    | -         |    15.02 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           53 |     1646 | 2024-05-16 | DMS           | W   | 0.740      | -            | -                | -                | -         |     4.76 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           52 |     1661 | 2024-05-16 | Sampi         | W   | 0.738      | 0.384        | -                | 0.994 (0.282)    | -         |     6.53 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           51 |     1694 | 2024-05-15 | PARIVISION    | L   | 0.734      | -            | -                | -                | -         |   -14.60 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           50 |     1761 | 2024-05-14 | Verdant       | W   | 0.726      | -            | -                | -                | -         |     5.68 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           49 |     1766 | 2024-05-14 | MOUZ NXT      | W   | 0.725      | 0.384        | 0.169 (0.047)    | 1.000 (0.279)    | -         |     9.77 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           48 |     1801 | 2024-05-12 | BetBoom       | W   | 0.713      | 0.435        | 0.333 (0.103)    | -                | -         |    19.30 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           47 |     1812 | 2024-05-12 | MOUZ NXT      | W   | 0.712      | 0.435        | 0.169 (0.052)    | 1.000 (0.309)    | -         |    10.68 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           46 |     1846 | 2024-05-11 | BLEED         | W   | 0.704      | -            | -                | -                | -         |    11.82 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           45 |     1882 | 2024-05-09 | KOI           | W   | 0.691      | -            | -                | -                | -         |    11.68 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           44 |     1939 | 2024-05-06 | Enterprise    | W   | 0.672      | -            | -                | -                | -         |     6.45 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           43 |     1977 | 2024-05-04 | GL Academy    | W   | 0.659      | -            | -                | -                | -         |     3.80 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           42 |     2024 | 2024-05-02 | Permitta      | W   | 0.644      | -            | -                | -                | -         |     7.43 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           41 |     2031 | 2024-05-01 | Nemiga        | L   | 0.640      | -            | -                | -                | -         |    -6.07 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           40 |     2035 | 2024-05-01 | V1dar         | W   | 0.639      | -            | -                | -                | -         |     1.16 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           39 |     2049 | 2024-05-01 | SINNERS       | W   | 0.638      | -            | -                | -                | -         |     9.50 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           38 |     2066 | 2024-04-30 | Alliance      | W   | 0.632      | -            | -                | -                | -         |     6.32 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           37 |     2070 | 2024-04-30 | Zero Tenacity | L   | 0.631      | -            | -                | -                | -         |    -9.43 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           36 |     2095 | 2024-04-28 | BLEED         | L   | 0.621      | -            | -                | -                | -         |    -7.90 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           35 |     2143 | 2024-04-26 | Alliance      | W   | 0.607      | -            | -                | -                | -         |     5.50 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           34 |     2213 | 2024-04-23 | BLEED         | L   | 0.586      | -            | -                | -                | -         |    -7.93 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           33 |     2228 | 2024-04-22 | Passion UA    | W   | 0.580      | 0.500        | 0.163 (0.047)    | 1.000 (0.290)    | -         |     8.59 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           32 |     2234 | 2024-04-22 | Alliance      | L   | 0.579      | -            | -                | -                | -         |   -13.14 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           31 |     2252 | 2024-04-21 | PARIVISION    | W   | 0.572      | -            | -                | -                | -         |     7.81 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           30 |     2331 | 2024-04-19 | HAVU          | W   | 0.559      | -            | -                | -                | -         |     2.50 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           29 |     2392 | 2024-04-18 | Zero Tenacity | W   | 0.551      | -            | -                | -                | -         |     8.98 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           28 |     2417 | 2024-04-17 | Zero Tenacity | L   | 0.545      | -            | -                | -                | -         |    -8.46 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           27 |     2454 | 2024-04-16 | AMKAL         | L   | 0.538      | -            | -                | -                | -         |    -7.19 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           26 |     2464 | 2024-04-15 | Sangal        | L   | 0.534      | -            | -                | -                | -         |    -7.91 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           25 |     2585 | 2024-04-10 | Nexus         | L   | 0.499      | -            | -                | -                | -         |   -11.70 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           24 |     2626 | 2024-04-09 | Rebels        | L   | 0.494      | -            | -                | -                | -         |    -8.82 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           23 |     2671 | 2024-04-08 | MOUZ NXT      | L   | 0.485      | -            | -                | -                | -         |    -8.22 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           22 |     2845 | 2024-04-02 | Metizport     | L   | 0.447      | -            | -                | -                | -         |    -9.78 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           21 |     2850 | 2024-04-02 | Apeks         | L   | 0.446      | -            | -                | -                | -         |    -9.68 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           20 |     2876 | 2024-03-31 | Apeks         | W   | 0.432      | -            | -                | -                | -         |     4.26 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           19 |     2889 | 2024-03-29 | Space         | L   | 0.420      | -            | -                | -                | -         |   -10.92 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           18 |     2935 | 2024-03-27 | Rebels        | W   | 0.407      | -            | -                | -                | -         |     5.01 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           17 |     2947 | 2024-03-27 | Sampi         | W   | 0.407      | -            | -                | -                | -         |     3.43 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           16 |     2978 | 2024-03-25 | FORZE         | W   | 0.393      | -            | -                | -                | -         |     4.01 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           15 |     3037 | 2024-03-21 | BetBoom       | L   | 0.365      | -            | -                | -                | -         |    -1.18 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           14 |     3077 | 2024-03-19 | ex-Sprout     | W   | 0.352      | -            | -                | -                | -         |     0.44 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           13 |     3144 | 2024-03-15 | 3DMAX         | L   | 0.327      | -            | -                | -                | -         |    -3.52 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           12 |     3237 | 2024-03-12 | Metizport     | L   | 0.307      | -            | -                | -                | -         |    -6.83 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           11 |     3243 | 2024-03-12 | ENCE          | W   | 0.306      | -            | -                | -                | -         |     8.23 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           10 |     3257 | 2024-03-11 | KOI           | W   | 0.301      | -            | -                | -                | -         |     4.99 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            9 |     3265 | 2024-03-11 | Virtus.pro    | L   | 0.300      | -            | -                | -                | -         |    -0.18 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            8 |     3329 | 2024-03-08 | PARIVISION    | L   | 0.280      | -            | -                | -                | -         |    -5.15 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            7 |     3415 | 2024-03-05 | Johnny Speeds | W   | 0.260      | -            | -                | -                | -         |     6.51 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            6 |     3422 | 2024-03-05 | Passion UA    | W   | 0.260      | -            | -                | -                | -         |     4.10 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            5 |     3430 | 2024-03-05 | UGANDA        | W   | 0.260      | -            | -                | -                | -         |     0.17 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            4 |     3557 | 2024-02-27 | DMS           | L   | 0.213      | -            | -                | -                | -         |    -5.33 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            3 |     3770 | 2024-02-18 | Aurora        | L   | 0.152      | -            | -                | -                | -         |    -0.26 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            2 |     3821 | 2024-02-16 | 500           | W   | 0.139      | -            | -                | -                | -         |     0.47 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            1 |     3826 | 2024-02-16 | PERA          | W   | 0.139      | -            | -                | -                | -         |     0.09 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($56,846.36)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.947 | $22,000.00     | $20,824.25      |
| 2024-06-09 |      0.900 | $1,500.00      | $1,350.57       |
| 2024-05-26 |      0.806 | $5,000.00      | $4,031.97       |
| 2024-05-18 |      0.753 | $10,000.00     | $7,534.69       |
| 2024-05-12 |      0.713 | $22,000.00     | $15,696.12      |
| 2024-04-24 |      0.593 | $12,500.00     | $7,408.76       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
