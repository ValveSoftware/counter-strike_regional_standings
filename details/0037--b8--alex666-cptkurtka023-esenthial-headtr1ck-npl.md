### Roster Details<br />
Team Name: B8<br />
Roster: alex666, cptkurtka023, esenthial, headtr1ck, npl<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [37](../standings_global.md)<br />
Regional Rank: [26]( ../standings_europe.md)<br />
Final Rank Value:  1217.2<br />
<br />
Final Rank Value (1217.2) = Starting Rank Value (1162.1) + Head To Head Adjustments (55.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.621[<sup>1</sup>](#table2)
- Bounty Collected: 0.475[<sup>2</sup>](#table1)
- Opponent Network: 0.324[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.355<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1162.1
- 400 + ( ( 0.355 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1162.1


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
|           75 |      105 | 2024-07-15 | 9INE          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.41 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           74 |      317 | 2024-06-16 | 3DMAX         | W   | 0.994      | 0.435        | 0.209 (0.090)    | 1.000 (0.432)    | 0 (0.000) |    18.08 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           73 |      328 | 2024-06-16 | Monte         | W   | 0.992      | -            | -                | -                | 0 (0.000) |    10.39 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           72 |      363 | 2024-06-15 | Illuminar     | W   | 0.986      | -            | -                | -                | 0 (0.000) |     6.42 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           71 |      442 | 2024-06-13 | MOUZ NXT      | W   | 0.971      | 0.435        | 0.150 (0.063)    | 1.000 (0.422)    | 0 (0.000) |    12.37 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           70 |      462 | 2024-06-12 | BLEED         | L   | 0.966      | -            | -                | -                | -         |   -12.32 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           69 |      555 | 2024-06-09 | AMKAL         | L   | 0.946      | -            | -                | -                | -         |   -12.84 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           68 |      667 | 2024-06-07 | Verdant       | W   | 0.933      | -            | -                | -                | 0 (0.000) |     4.30 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           67 |      675 | 2024-06-07 | PERA          | W   | 0.933      | -            | -                | -                | 0 (0.000) |     8.10 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           66 |      684 | 2024-06-07 | Verdant       | L   | 0.932      | -            | -                | -                | -         |   -25.38 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           65 |      977 | 2024-05-30 | SINNERS       | L   | 0.880      | -            | -                | -                | -         |   -18.50 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           64 |     1069 | 2024-05-26 | MOUZ NXT      | L   | 0.852      | -            | -                | -                | -         |   -18.19 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           63 |     1077 | 2024-05-25 | RUBY          | W   | 0.848      | 0.435        | 0.144 (0.053)    | -                | 0 (0.000) |     6.28 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           62 |     1083 | 2024-05-25 | BetBoom       | W   | 0.847      | 0.435        | 0.403 (0.148)    | 0.704 (0.259)    | 0 (0.000) |    22.05 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           61 |     1099 | 2024-05-24 | Alliance      | W   | 0.840      | -            | -                | -                | 0 (0.000) |     4.43 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           60 |     1119 | 2024-05-23 | DMS           | W   | 0.833      | -            | -                | -                | -         |     5.00 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           59 |     1197 | 2024-05-21 | Rhyno         | W   | 0.821      | -            | -                | -                | -         |     7.89 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           58 |     1238 | 2024-05-20 | EYEBALLERS    | W   | 0.813      | -            | -                | -                | -         |     4.80 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           57 |     1263 | 2024-05-19 | Zero Tenacity | L   | 0.806      | -            | -                | -                | -         |   -16.68 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           56 |     1285 | 2024-05-18 | Sashi         | W   | 0.801      | 0.384        | 0.215 (0.066)    | 1.000 (0.308)    | -         |    14.22 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           55 |     1301 | 2024-05-18 | Rebels        | W   | 0.799      | -            | -                | -                | -         |     8.93 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           54 |     1330 | 2024-05-17 | 3DMAX         | W   | 0.793      | 0.500        | 0.209 (0.083)    | 1.000 (0.396)    | -         |    14.89 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           53 |     1358 | 2024-05-16 | DMS           | W   | 0.787      | -            | -                | -                | -         |     4.99 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           52 |     1373 | 2024-05-16 | Sampi         | W   | 0.785      | 0.384        | -                | 0.975 (0.294)    | -         |     6.86 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           51 |     1406 | 2024-05-15 | PARIVISION    | L   | 0.781      | -            | -                | -                | -         |   -17.70 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           50 |     1473 | 2024-05-14 | Verdant       | W   | 0.773      | -            | -                | -                | -         |     3.36 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           49 |     1478 | 2024-05-14 | MOUZ NXT      | W   | 0.772      | 0.384        | 0.150 (0.045)    | 1.000 (0.297)    | -         |    10.06 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           48 |     1513 | 2024-05-12 | BetBoom       | W   | 0.761      | 0.435        | 0.403 (0.133)    | 0.704 (0.233)    | -         |    21.19 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           47 |     1524 | 2024-05-12 | MOUZ NXT      | W   | 0.759      | 0.435        | 0.150 (0.049)    | 1.000 (0.330)    | -         |    11.12 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           46 |     1558 | 2024-05-11 | BLEED         | W   | 0.752      | 0.435        | 0.156 (0.051)    | -                | -         |    13.00 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           45 |     1594 | 2024-05-09 | KOI           | W   | 0.738      | -            | -                | -                | -         |    13.15 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           44 |     1651 | 2024-05-06 | Enterprise    | W   | 0.719      | -            | -                | -                | -         |     6.76 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           43 |     1689 | 2024-05-04 | GL Academy    | W   | 0.706      | -            | -                | -                | -         |     3.84 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           42 |     1736 | 2024-05-02 | Permitta      | W   | 0.692      | -            | -                | -                | -         |     7.53 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           41 |     1743 | 2024-05-01 | Nemiga        | L   | 0.687      | -            | -                | -                | -         |    -5.93 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           40 |     1747 | 2024-05-01 | V1dar         | W   | 0.687      | -            | -                | -                | -         |     1.03 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           39 |     1761 | 2024-05-01 | SINNERS       | W   | 0.685      | -            | -                | -                | -         |    10.27 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           38 |     1778 | 2024-04-30 | Alliance      | W   | 0.679      | -            | -                | -                | -         |     6.91 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           37 |     1782 | 2024-04-30 | Zero Tenacity | L   | 0.679      | -            | -                | -                | -         |   -11.07 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           36 |     1807 | 2024-04-28 | BLEED         | L   | 0.668      | -            | -                | -                | -         |    -7.93 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           35 |     1855 | 2024-04-26 | Alliance      | W   | 0.654      | -            | -                | -                | -         |     6.01 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           34 |     1925 | 2024-04-23 | BLEED         | L   | 0.634      | -            | -                | -                | -         |    -7.98 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           33 |     1940 | 2024-04-22 | Passion UA    | W   | 0.627      | 0.500        | -                | 0.847 (0.266)    | -         |     7.21 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           32 |     1946 | 2024-04-22 | Alliance      | L   | 0.626      | -            | -                | -                | -         |   -14.16 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           31 |     1964 | 2024-04-21 | PARIVISION    | W   | 0.619      | -            | -                | -                | -         |     6.10 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           30 |     2043 | 2024-04-19 | HAVU          | W   | 0.606      | -            | -                | -                | -         |     2.48 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           29 |     2104 | 2024-04-18 | Zero Tenacity | W   | 0.598      | -            | -                | -                | -         |     8.62 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           28 |     2129 | 2024-04-17 | Zero Tenacity | L   | 0.592      | -            | -                | -                | -         |   -10.37 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           27 |     2166 | 2024-04-16 | AMKAL         | L   | 0.585      | -            | -                | -                | -         |    -8.55 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           26 |     2176 | 2024-04-15 | Sangal        | L   | 0.581      | -            | -                | -                | -         |    -8.75 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           25 |     2297 | 2024-04-10 | Nexus         | L   | 0.546      | -            | -                | -                | -         |   -13.46 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           24 |     2338 | 2024-04-09 | Rebels        | L   | 0.541      | -            | -                | -                | -         |   -10.19 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           23 |     2383 | 2024-04-08 | MOUZ NXT      | L   | 0.533      | -            | -                | -                | -         |    -9.49 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           22 |     2557 | 2024-04-02 | Metizport     | L   | 0.494      | -            | -                | -                | -         |   -11.11 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           21 |     2562 | 2024-04-02 | Apeks         | L   | 0.493      | -            | -                | -                | -         |   -10.44 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           20 |     2588 | 2024-03-31 | Apeks         | W   | 0.479      | -            | -                | -                | -         |     4.99 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           19 |     2601 | 2024-03-29 | Space         | L   | 0.467      | -            | -                | -                | -         |   -12.37 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           18 |     2647 | 2024-03-27 | Rebels        | W   | 0.455      | -            | -                | -                | -         |     5.05 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           17 |     2659 | 2024-03-27 | Sampi         | W   | 0.454      | -            | -                | -                | -         |     3.56 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           16 |     2690 | 2024-03-25 | FORZE         | W   | 0.441      | -            | -                | -                | -         |     4.34 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           15 |     2749 | 2024-03-21 | BetBoom       | L   | 0.413      | -            | -                | -                | -         |    -0.99 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           14 |     2789 | 2024-03-19 | ex-Sprout     | W   | 0.399      | -            | -                | -                | -         |     0.40 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           13 |     2856 | 2024-03-15 | 3DMAX         | L   | 0.374      | -            | -                | -                | -         |    -4.97 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           12 |     2949 | 2024-03-12 | Metizport     | L   | 0.355      | -            | -                | -                | -         |    -8.10 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           11 |     2955 | 2024-03-12 | ENCE          | W   | 0.354      | -            | -                | -                | -         |     9.36 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           10 |     2969 | 2024-03-11 | KOI           | W   | 0.348      | -            | -                | -                | -         |     6.02 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            9 |     2977 | 2024-03-11 | Virtus.pro    | L   | 0.347      | -            | -                | -                | -         |    -0.40 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            8 |     3041 | 2024-03-08 | PARIVISION    | L   | 0.327      | -            | -                | -                | -         |    -7.61 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            7 |     3127 | 2024-03-05 | Johnny Speeds | W   | 0.308      | -            | -                | -                | -         |     7.73 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            6 |     3134 | 2024-03-05 | Passion UA    | W   | 0.307      | -            | -                | -                | -         |     3.31 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            5 |     3142 | 2024-03-05 | UGANDA        | W   | 0.307      | -            | -                | -                | -         |     0.14 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            4 |     3269 | 2024-02-27 | DMS           | L   | 0.260      | -            | -                | -                | -         |    -6.67 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            3 |     3482 | 2024-02-18 | Aurora        | L   | 0.199      | -            | -                | -                | -         |    -0.34 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            2 |     3533 | 2024-02-16 | 500           | W   | 0.187      | -            | -                | -                | -         |     0.51 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            1 |     3538 | 2024-02-16 | PERA          | W   | 0.186      | -            | -                | -                | -         |     0.08 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($60,293.80)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.25) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.994 | $22,000.00     | $21,863.20      |
| 2024-06-09 |      0.948 | $1,500.00      | $1,421.41       |
| 2024-05-26 |      0.854 | $5,000.00      | $4,268.10       |
| 2024-05-18 |      0.801 | $10,000.00     | $8,006.94       |
| 2024-05-12 |      0.761 | $22,000.00     | $16,735.07      |
| 2024-04-24 |      0.640 | $12,500.00     | $7,999.08       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
