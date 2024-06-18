### Roster Details<br />
Team Name: B8<br />
Roster: alex666, cptkurtka023, esenthial, headtr1ck, npl<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [37](../standings_global.md)<br />
Regional Rank: [27]( ../standings_europe.md)<br />
Final Rank Value:  1237.1<br />
<br />
Final Rank Value (1237.1) = Starting Rank Value (1164.4) + Head To Head Adjustments (72.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.610[<sup>1</sup>](#table2)
- Bounty Collected: 0.502[<sup>2</sup>](#table1)
- Opponent Network: 0.393[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.376<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1164.4
- 400 + ( ( 0.376 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1164.4


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
|           74 |       17 | 2024-06-16 | 3DMAX         | W   | 1.000      | 0.435        | 0.186 (0.081)    | 1.000 (0.435)    | 0 (0.000) |    17.73 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           73 |       28 | 2024-06-16 | Monte         | W   | 1.000      | 0.435        | 0.189 (0.082)    | -                | 0 (0.000) |    15.41 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           72 |       63 | 2024-06-15 | Illuminar     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.08 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           71 |      142 | 2024-06-13 | MOUZ NXT      | W   | 1.000      | 0.435        | 0.158 (0.069)    | 1.000 (0.435)    | 0 (0.000) |    12.25 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           70 |      162 | 2024-06-12 | BLEED         | L   | 1.000      | -            | -                | -                | -         |   -12.20 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           69 |      255 | 2024-06-09 | AMKAL         | L   | 1.000      | -            | -                | -                | -         |   -11.24 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           68 |      367 | 2024-06-07 | Verdant       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.96 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           67 |      375 | 2024-06-07 | PERA          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.48 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           66 |      384 | 2024-06-07 | Verdant       | L   | 1.000      | -            | -                | -                | -         |   -27.85 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           65 |      679 | 2024-05-30 | SINNERS       | L   | 1.000      | -            | -                | -                | -         |   -21.97 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           64 |      771 | 2024-05-26 | MOUZ NXT      | L   | 1.000      | -            | -                | -                | -         |   -22.07 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           63 |      779 | 2024-05-25 | RUBY          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.16 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           62 |      785 | 2024-05-25 | BetBoom       | W   | 1.000      | 0.435        | 0.414 (0.180)    | 0.798 (0.347)    | 0 (0.000) |    24.79 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           61 |      801 | 2024-05-24 | Alliance      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.56 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           60 |      821 | 2024-05-23 | DMS           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.45 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           59 |      899 | 2024-05-21 | Rhyno         | W   | 1.000      | -            | -                | -                | -         |     8.16 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           58 |      940 | 2024-05-20 | EYEBALLERS    | W   | 1.000      | -            | -                | -                | -         |     5.23 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           57 |      965 | 2024-05-19 | Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |   -21.47 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           56 |      987 | 2024-05-18 | Sashi         | W   | 0.996      | 0.384        | 0.200 (0.076)    | 1.000 (0.383)    | -         |    18.21 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           55 |     1003 | 2024-05-18 | Rebels        | W   | 0.994      | -            | -                | -                | -         |    11.63 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           54 |     1032 | 2024-05-17 | 3DMAX         | W   | 0.988      | 0.500        | 0.186 (0.092)    | 1.000 (0.494)    | -         |    17.81 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           53 |     1060 | 2024-05-16 | DMS           | W   | 0.982      | -            | -                | -                | -         |     5.65 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           52 |     1075 | 2024-05-16 | Sampi         | W   | 0.980      | -            | -                | -                | -         |     8.35 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           51 |     1108 | 2024-05-15 | PARIVISION    | L   | 0.976      | -            | -                | -                | -         |   -22.24 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           50 |     1175 | 2024-05-14 | Verdant       | W   | 0.968      | -            | -                | -                | -         |     3.37 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           49 |     1180 | 2024-05-14 | MOUZ NXT      | W   | 0.967      | 0.384        | 0.158 (0.059)    | 1.000 (0.372)    | -         |    11.91 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           48 |     1215 | 2024-05-12 | BetBoom       | W   | 0.956      | 0.435        | 0.414 (0.172)    | 0.798 (0.331)    | -         |    25.82 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           47 |     1226 | 2024-05-12 | MOUZ NXT      | W   | 0.954      | 0.435        | 0.158 (0.066)    | 1.000 (0.415)    | -         |    13.61 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           46 |     1260 | 2024-05-11 | BLEED         | W   | 0.947      | 0.435        | 0.347 (0.143)    | 0.946 (0.389)    | -         |    21.80 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           45 |     1296 | 2024-05-09 | KOI           | W   | 0.934      | -            | -                | -                | -         |    16.19 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           44 |     1353 | 2024-05-06 | Enterprise    | W   | 0.915      | -            | -                | -                | -         |     8.61 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           43 |     1391 | 2024-05-04 | GL Academy    | W   | 0.901      | -            | -                | -                | -         |     4.99 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           42 |     1438 | 2024-05-02 | Permitta      | W   | 0.887      | -            | -                | -                | -         |     9.85 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           41 |     1445 | 2024-05-01 | Nemiga        | L   | 0.883      | -            | -                | -                | -         |    -7.17 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           40 |     1449 | 2024-05-01 | V1dar         | W   | 0.882      | -            | -                | -                | -         |     1.41 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           39 |     1463 | 2024-05-01 | SINNERS       | W   | 0.880      | -            | -                | -                | -         |    12.65 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           38 |     1480 | 2024-04-30 | Alliance      | W   | 0.874      | -            | -                | -                | -         |     9.07 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           37 |     1484 | 2024-04-30 | Zero Tenacity | L   | 0.874      | -            | -                | -                | -         |   -14.22 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           36 |     1509 | 2024-04-28 | BLEED         | L   | 0.863      | -            | -                | -                | -         |    -4.49 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           35 |     1557 | 2024-04-26 | Alliance      | W   | 0.850      | -            | -                | -                | -         |     7.95 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           34 |     1627 | 2024-04-23 | BLEED         | L   | 0.829      | -            | -                | -                | -         |    -4.16 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           33 |     1642 | 2024-04-22 | Passion UA    | W   | 0.823      | 0.500        | -                | 0.803 (0.330)    | -         |     9.64 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           32 |     1648 | 2024-04-22 | Alliance      | L   | 0.821      | -            | -                | -                | -         |   -18.20 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           31 |     1666 | 2024-04-21 | PARIVISION    | W   | 0.815      | -            | -                | -                | -         |     8.50 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           30 |     1745 | 2024-04-19 | HAVU          | W   | 0.801      | -            | -                | -                | -         |     3.55 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           29 |     1806 | 2024-04-18 | Zero Tenacity | W   | 0.793      | -            | -                | -                | -         |    11.13 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           28 |     1831 | 2024-04-17 | Zero Tenacity | L   | 0.788      | -            | -                | -                | -         |   -14.05 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           27 |     1868 | 2024-04-16 | AMKAL         | L   | 0.781      | -            | -                | -                | -         |    -8.99 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           26 |     1878 | 2024-04-15 | Sangal        | L   | 0.776      | -            | -                | -                | -         |   -12.22 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           25 |     1999 | 2024-04-10 | Nexus         | L   | 0.742      | -            | -                | -                | -         |   -17.71 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           24 |     2040 | 2024-04-09 | Rebels        | L   | 0.736      | -            | -                | -                | -         |   -12.59 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           23 |     2085 | 2024-04-08 | MOUZ NXT      | L   | 0.728      | -            | -                | -                | -         |   -13.08 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           22 |     2259 | 2024-04-02 | Metizport     | L   | 0.689      | -            | -                | -                | -         |   -14.72 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           21 |     2264 | 2024-04-02 | Apeks         | L   | 0.688      | -            | -                | -                | -         |   -12.73 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           20 |     2291 | 2024-03-31 | Apeks         | W   | 0.675      | -            | -                | -                | -         |     8.85 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           19 |     2304 | 2024-03-29 | Space         | L   | 0.662      | -            | -                | -                | -         |   -17.99 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           18 |     2350 | 2024-03-27 | Rebels        | W   | 0.650      | -            | -                | -                | -         |     8.06 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           17 |     2362 | 2024-03-27 | Sampi         | W   | 0.649      | -            | -                | -                | -         |     5.08 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           16 |     2393 | 2024-03-25 | FORZE         | W   | 0.636      | -            | -                | -                | -         |     7.33 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           15 |     2452 | 2024-03-21 | BetBoom       | L   | 0.608      | -            | -                | -                | -         |    -1.56 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           14 |     2492 | 2024-03-19 | ex-Sprout     | W   | 0.594      | -            | -                | -                | -         |     0.73 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           13 |     2559 | 2024-03-15 | 3DMAX         | L   | 0.569      | -            | -                | -                | -         |    -8.09 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           12 |     2652 | 2024-03-12 | Metizport     | L   | 0.550      | -            | -                | -                | -         |   -11.84 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           11 |     2658 | 2024-03-12 | ENCE          | W   | 0.549      | -            | -                | -                | -         |    15.46 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           10 |     2672 | 2024-03-11 | KOI           | W   | 0.543      | -            | -                | -                | -         |     9.34 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            9 |     2680 | 2024-03-11 | Virtus.pro    | L   | 0.542      | -            | -                | -                | -         |    -0.52 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            8 |     2744 | 2024-03-08 | PARIVISION    | L   | 0.522      | -            | -                | -                | -         |   -11.95 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            7 |     2830 | 2024-03-05 | Johnny Speeds | W   | 0.503      | -            | -                | -                | -         |    10.77 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            6 |     2837 | 2024-03-05 | Passion UA    | W   | 0.502      | -            | -                | -                | -         |     5.59 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            5 |     2845 | 2024-03-05 | UGANDA        | W   | 0.502      | -            | -                | -                | -         |     0.23 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            4 |     2972 | 2024-02-27 | DMS           | L   | 0.456      | -            | -                | -                | -         |   -11.89 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            3 |     3185 | 2024-02-18 | Aurora        | L   | 0.395      | -            | -                | -                | -         |    -0.77 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            2 |     3236 | 2024-02-16 | 500           | W   | 0.382      | -            | -                | -                | -         |     1.10 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            1 |     3241 | 2024-02-16 | PERA          | W   | 0.381      | -            | -                | -                | -         |     0.16 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($68,931.20)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.23) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $22,000.00     | $22,000.00      |
| 2024-06-09 |      1.000 | $500.00        | $500.00         |
| 2024-05-26 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-18 |      0.996 | $10,000.00     | $9,959.78       |
| 2024-05-12 |      0.956 | $22,000.00     | $21,031.31      |
| 2024-04-24 |      0.835 | $12,500.00     | $10,440.12      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
