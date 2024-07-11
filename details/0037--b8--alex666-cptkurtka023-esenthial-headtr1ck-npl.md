### Roster Details<br />
Team Name: B8<br />
Roster: alex666, cptkurtka023, esenthial, headtr1ck, npl<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [37](../standings_global.md)<br />
Regional Rank: [26]( ../standings_europe.md)<br />
Final Rank Value:  1232.5<br />
<br />
Final Rank Value (1232.5) = Starting Rank Value (1165.9) + Head To Head Adjustments (66.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.619[<sup>1</sup>](#table2)
- Bounty Collected: 0.490[<sup>2</sup>](#table1)
- Opponent Network: 0.344[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.363<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1165.9
- 400 + ( ( 0.363 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1165.9


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
|           74 |      153 | 2024-06-16 | 3DMAX         | W   | 1.000      | 0.435        | 0.205 (0.089)    | 1.000 (0.435)    | 0 (0.000) |    17.96 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           73 |      164 | 2024-06-16 | Monte         | W   | 1.000      | 0.435        | 0.188 (0.082)    | 0.668 (0.290)    | 0 (0.000) |    15.18 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           72 |      199 | 2024-06-15 | Illuminar     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.95 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           71 |      278 | 2024-06-13 | MOUZ NXT      | W   | 1.000      | 0.435        | 0.152 (0.066)    | 1.000 (0.435)    | 0 (0.000) |    12.41 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           70 |      298 | 2024-06-12 | BLEED         | L   | 1.000      | -            | -                | -                | -         |   -11.45 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           69 |      391 | 2024-06-09 | AMKAL         | L   | 0.986      | -            | -                | -                | -         |   -12.56 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           68 |      503 | 2024-06-07 | Verdant       | W   | 0.973      | -            | -                | -                | 0 (0.000) |     4.16 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           67 |      511 | 2024-06-07 | PERA          | W   | 0.973      | -            | -                | -                | 0 (0.000) |     7.96 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           66 |      520 | 2024-06-07 | Verdant       | L   | 0.972      | -            | -                | -                | -         |   -26.77 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           65 |      813 | 2024-05-30 | SINNERS       | L   | 0.920      | -            | -                | -                | -         |   -19.72 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           64 |      905 | 2024-05-26 | MOUZ NXT      | L   | 0.892      | -            | -                | -                | -         |   -19.37 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           63 |      913 | 2024-05-25 | RUBY          | W   | 0.888      | 0.435        | 0.139 (0.054)    | -                | 0 (0.000) |     5.88 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           62 |      919 | 2024-05-25 | BetBoom       | W   | 0.886      | 0.435        | 0.406 (0.156)    | 0.745 (0.287)    | 0 (0.000) |    22.87 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           61 |      935 | 2024-05-24 | Alliance      | W   | 0.880      | -            | -                | -                | 0 (0.000) |     4.40 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           60 |      955 | 2024-05-23 | DMS           | W   | 0.872      | -            | -                | -                | 0 (0.000) |     4.84 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           59 |     1033 | 2024-05-21 | Rhyno         | W   | 0.860      | -            | -                | -                | -         |     7.83 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           58 |     1074 | 2024-05-20 | EYEBALLERS    | W   | 0.852      | -            | -                | -                | -         |     4.70 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           57 |     1099 | 2024-05-19 | Zero Tenacity | L   | 0.846      | -            | -                | -                | -         |   -17.90 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           56 |     1121 | 2024-05-18 | Sashi         | W   | 0.840      | 0.384        | 0.202 (0.065)    | 1.000 (0.323)    | -         |    15.06 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           55 |     1137 | 2024-05-18 | Rebels        | W   | 0.838      | -            | -                | -                | -         |     9.57 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           54 |     1166 | 2024-05-17 | 3DMAX         | W   | 0.832      | 0.500        | 0.205 (0.085)    | 1.000 (0.416)    | -         |    15.38 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           53 |     1194 | 2024-05-16 | DMS           | W   | 0.827      | -            | -                | -                | -         |     4.81 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           52 |     1209 | 2024-05-16 | Slovakia      | W   | 0.825      | 0.384        | -                | 0.891 (0.282)    | -         |     6.84 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           51 |     1242 | 2024-05-15 | PARIVISION    | L   | 0.820      | -            | -                | -                | -         |   -18.78 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           50 |     1309 | 2024-05-14 | Verdant       | W   | 0.813      | -            | -                | -                | -         |     3.18 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           49 |     1314 | 2024-05-14 | MOUZ NXT      | W   | 0.812      | 0.384        | -                | 1.000 (0.312)    | -         |    10.26 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           48 |     1349 | 2024-05-12 | BetBoom       | W   | 0.800      | 0.435        | 0.406 (0.141)    | -                | -         |    22.16 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           47 |     1360 | 2024-05-12 | MOUZ NXT      | W   | 0.799      | 0.435        | 0.152 (0.053)    | 1.000 (0.347)    | -         |    11.43 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           46 |     1394 | 2024-05-11 | BLEED         | W   | 0.791      | 0.435        | 0.348 (0.120)    | 0.908 (0.312)    | -         |    18.52 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           45 |     1430 | 2024-05-09 | KOI           | W   | 0.778      | -            | -                | -                | -         |    13.52 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           44 |     1487 | 2024-05-06 | Enterprise    | W   | 0.759      | -            | -                | -                | -         |     6.95 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           43 |     1525 | 2024-05-04 | GL Academy    | W   | 0.745      | -            | -                | -                | -         |     3.86 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           42 |     1572 | 2024-05-02 | Permitta      | W   | 0.731      | -            | -                | -                | -         |     7.83 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           41 |     1579 | 2024-05-01 | Nemiga        | L   | 0.727      | -            | -                | -                | -         |    -6.17 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           40 |     1583 | 2024-05-01 | V1dar         | W   | 0.726      | -            | -                | -                | -         |     1.05 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           39 |     1597 | 2024-05-01 | SINNERS       | W   | 0.725      | -            | -                | -                | -         |    10.60 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           38 |     1614 | 2024-04-30 | Alliance      | W   | 0.719      | -            | -                | -                | -         |     7.21 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           37 |     1618 | 2024-04-30 | Zero Tenacity | L   | 0.718      | -            | -                | -                | -         |   -11.92 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           36 |     1643 | 2024-04-28 | BLEED         | L   | 0.708      | -            | -                | -                | -         |    -3.85 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           35 |     1691 | 2024-04-26 | Alliance      | W   | 0.694      | -            | -                | -                | -         |     6.38 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           34 |     1761 | 2024-04-23 | BLEED         | L   | 0.673      | -            | -                | -                | -         |    -3.56 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           33 |     1776 | 2024-04-22 | Passion UA    | W   | 0.667      | -            | -                | -                | -         |     7.56 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           32 |     1782 | 2024-04-22 | Alliance      | L   | 0.665      | -            | -                | -                | -         |   -14.93 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           31 |     1800 | 2024-04-21 | PARIVISION    | W   | 0.659      | -            | -                | -                | -         |     6.67 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           30 |     1879 | 2024-04-19 | HAVU          | W   | 0.646      | -            | -                | -                | -         |     2.65 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           29 |     1940 | 2024-04-18 | Zero Tenacity | W   | 0.638      | -            | -                | -                | -         |     9.16 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           28 |     1965 | 2024-04-17 | Zero Tenacity | L   | 0.632      | -            | -                | -                | -         |   -11.09 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           27 |     2002 | 2024-04-16 | AMKAL         | L   | 0.625      | -            | -                | -                | -         |    -8.65 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           26 |     2012 | 2024-04-15 | Sangal        | L   | 0.621      | -            | -                | -                | -         |    -9.41 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           25 |     2133 | 2024-04-10 | Romania       | L   | 0.586      | -            | -                | -                | -         |   -14.58 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           24 |     2174 | 2024-04-09 | Rebels        | L   | 0.581      | -            | -                | -                | -         |   -10.48 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           23 |     2219 | 2024-04-08 | MOUZ NXT      | L   | 0.572      | -            | -                | -                | -         |   -10.31 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           22 |     2393 | 2024-04-02 | Metizport     | L   | 0.534      | -            | -                | -                | -         |   -11.97 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           21 |     2398 | 2024-04-02 | Apeks         | L   | 0.533      | -            | -                | -                | -         |   -10.99 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           20 |     2424 | 2024-03-31 | Apeks         | W   | 0.519      | -            | -                | -                | -         |     5.69 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           19 |     2437 | 2024-03-29 | Space         | L   | 0.507      | -            | -                | -                | -         |   -13.69 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           18 |     2483 | 2024-03-27 | Rebels        | W   | 0.494      | -            | -                | -                | -         |     5.83 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           17 |     2495 | 2024-03-27 | Slovakia      | W   | 0.493      | -            | -                | -                | -         |     3.65 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           16 |     2526 | 2024-03-25 | FORZE         | W   | 0.480      | -            | -                | -                | -         |     4.83 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           15 |     2585 | 2024-03-21 | BetBoom       | L   | 0.452      | -            | -                | -                | -         |    -1.05 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           14 |     2625 | 2024-03-19 | ex-Sprout     | W   | 0.439      | -            | -                | -                | -         |     0.45 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           13 |     2692 | 2024-03-15 | 3DMAX         | L   | 0.413      | -            | -                | -                | -         |    -5.58 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           12 |     2785 | 2024-03-12 | Metizport     | L   | 0.394      | -            | -                | -                | -         |    -8.99 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           11 |     2791 | 2024-03-12 | ENCE          | W   | 0.393      | -            | -                | -                | -         |    10.72 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           10 |     2805 | 2024-03-11 | KOI           | W   | 0.387      | -            | -                | -                | -         |     6.53 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            9 |     2813 | 2024-03-11 | Virtus.pro    | L   | 0.387      | -            | -                | -                | -         |    -0.42 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            8 |     2877 | 2024-03-08 | PARIVISION    | L   | 0.367      | -            | -                | -                | -         |    -8.44 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            7 |     2963 | 2024-03-05 | Johnny Speeds | W   | 0.347      | -            | -                | -                | -         |     8.60 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            6 |     2970 | 2024-03-05 | Passion UA    | W   | 0.347      | -            | -                | -                | -         |     3.63 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            5 |     2978 | 2024-03-05 | UGANDA        | W   | 0.346      | -            | -                | -                | -         |     0.15 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            4 |     3105 | 2024-02-27 | DMS           | L   | 0.300      | -            | -                | -                | -         |    -7.85 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            3 |     3318 | 2024-02-18 | Aurora        | L   | 0.239      | -            | -                | -                | -         |    -0.41 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            2 |     3369 | 2024-02-16 | 500           | W   | 0.226      | -            | -                | -                | -         |     0.61 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            1 |     3374 | 2024-02-16 | PERA          | W   | 0.225      | -            | -                | -                | -         |     0.10 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($62,450.72)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.24) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $22,000.00     | $22,000.00      |
| 2024-06-09 |      0.987 | $1,500.00      | $1,480.82       |
| 2024-05-26 |      0.893 | $5,000.00      | $4,466.15       |
| 2024-05-18 |      0.840 | $10,000.00     | $8,403.05       |
| 2024-05-12 |      0.800 | $22,000.00     | $17,606.50      |
| 2024-04-24 |      0.680 | $12,500.00     | $8,494.21       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
