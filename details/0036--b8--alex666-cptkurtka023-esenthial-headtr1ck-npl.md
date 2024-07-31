### Roster Details<br />
Team Name: B8<br />
Roster: alex666, cptkurtka023, esenthial, headtr1ck, npl<br />
Global Rank: [36](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [27]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1170.9<br />
<br />
Final Rank Value (1170.9) = Starting Rank Value (1095.4) + Head To Head Adjustments (75.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.564[<sup>1</sup>](#table2)
- Bounty Collected: 0.476[<sup>2</sup>](#table1)
- Opponent Network: 0.308[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.337<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1095.4
- 400 + ( ( 0.337 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1095.4


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
|           83 |        1 | 2024-07-31 | PERA          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.64 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           82 |       55 | 2024-07-30 | ARCRED        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.42 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           81 |      156 | 2024-07-27 | Sangal        | L   | 1.000      | -            | -                | -                | -         |   -13.12 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           80 |      206 | 2024-07-25 | SINNERS       | W   | 1.000      | 0.435        | -                | 0.721 (0.313)    | 0 (0.000) |     7.21 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           79 |      364 | 2024-07-20 | Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |   -16.97 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           78 |      419 | 2024-07-19 | Rebels        | W   | 1.000      | 0.500        | -                | 0.596 (0.298)    | 0 (0.000) |     9.12 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           77 |      449 | 2024-07-18 | Aurora        | L   | 1.000      | -            | -                | -                | -         |    -5.72 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           76 |      527 | 2024-07-17 | Sangal        | L   | 1.000      | -            | -                | -                | -         |   -13.90 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           75 |      635 | 2024-07-15 | 9INE          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.48 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           74 |      847 | 2024-06-16 | 3DMAX         | W   | 0.899      | 0.435        | 0.504 (0.197)    | 1.000 (0.391)    | 0 (0.000) |    23.31 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           73 |      858 | 2024-06-16 | Monte         | W   | 0.898      | 0.435        | 0.081 (0.032)    | -                | 0 (0.000) |    10.69 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           72 |      893 | 2024-06-15 | Illuminar     | W   | 0.891      | -            | -                | -                | 0 (0.000) |     6.14 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           71 |      972 | 2024-06-13 | MOUZ NXT      | W   | 0.877      | 0.435        | 0.141 (0.054)    | 1.000 (0.381)    | 0 (0.000) |    11.30 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           70 |      992 | 2024-06-12 | BLEED         | L   | 0.872      | -            | -                | -                | -         |    -6.13 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           69 |     1085 | 2024-06-09 | AMKAL         | L   | 0.852      | -            | -                | -                | -         |   -10.98 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           68 |     1197 | 2024-06-07 | Verdant       | W   | 0.839      | -            | -                | -                | 0 (0.000) |     5.61 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           67 |     1205 | 2024-06-07 | PERA          | W   | 0.839      | -            | -                | -                | -         |     6.87 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           66 |     1214 | 2024-06-07 | Verdant       | L   | 0.838      | -            | -                | -                | -         |   -21.09 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           65 |     1507 | 2024-05-30 | SINNERS       | L   | 0.786      | -            | -                | -                | -         |   -16.73 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           64 |     1599 | 2024-05-26 | MOUZ NXT      | L   | 0.758      | -            | -                | -                | -         |   -15.77 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           63 |     1607 | 2024-05-25 | RUBY          | W   | 0.753      | -            | -                | -                | -         |     5.33 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           62 |     1613 | 2024-05-25 | BetBoom       | W   | 0.752      | 0.435        | 0.259 (0.085)    | -                | -         |    18.30 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           61 |     1629 | 2024-05-24 | Alliance      | W   | 0.746      | -            | -                | -                | -         |     3.68 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           60 |     1649 | 2024-05-23 | DMS           | W   | 0.738      | -            | -                | -                | -         |     5.21 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           59 |     1727 | 2024-05-21 | Rhyno         | W   | 0.726      | -            | -                | -                | -         |     6.69 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           58 |     1768 | 2024-05-20 | EYEBALLERS    | W   | 0.718      | -            | -                | -                | -         |     4.42 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           57 |     1793 | 2024-05-19 | Zero Tenacity | L   | 0.712      | -            | -                | -                | -         |   -13.77 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           56 |     1815 | 2024-05-18 | Sashi         | W   | 0.706      | 0.384        | 0.187 (0.051)    | 0.973 (0.264)    | -         |    13.17 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           55 |     1831 | 2024-05-18 | Rebels        | W   | 0.704      | -            | -                | -                | -         |     7.48 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           54 |     1860 | 2024-05-17 | 3DMAX         | W   | 0.698      | 0.500        | 0.504 (0.176)    | 1.000 (0.349)    | -         |    20.45 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           53 |     1888 | 2024-05-16 | DMS           | W   | 0.693      | -            | -                | -                | -         |     5.50 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           52 |     1903 | 2024-05-16 | Sampi         | W   | 0.691      | 0.384        | -                | 1.000 (0.265)    | -         |     5.81 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           51 |     1936 | 2024-05-15 | PARIVISION    | L   | 0.686      | -            | -                | -                | -         |   -12.40 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           50 |     2003 | 2024-05-14 | Verdant       | W   | 0.679      | -            | -                | -                | -         |     5.25 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           49 |     2008 | 2024-05-14 | MOUZ NXT      | W   | 0.677      | 0.384        | 0.141 (0.037)    | 1.000 (0.260)    | -         |     9.01 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           48 |     2043 | 2024-05-12 | BetBoom       | W   | 0.666      | 0.435        | 0.259 (0.075)    | -                | -         |    17.76 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           47 |     2054 | 2024-05-12 | MOUZ NXT      | W   | 0.664      | 0.435        | 0.141 (0.041)    | 1.000 (0.289)    | -         |     9.77 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           46 |     2088 | 2024-05-11 | BLEED         | W   | 0.657      | -            | -                | -                | -         |    10.43 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           45 |     2124 | 2024-05-09 | KOI           | W   | 0.644      | -            | -                | -                | -         |    10.64 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           44 |     2181 | 2024-05-06 | Enterprise    | W   | 0.625      | -            | -                | -                | -         |     5.68 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           43 |     2219 | 2024-05-04 | GL Academy    | W   | 0.611      | -            | -                | -                | -         |     3.31 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           42 |     2266 | 2024-05-02 | Permitta      | W   | 0.597      | -            | -                | -                | -         |     6.61 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           41 |     2273 | 2024-05-01 | Nemiga        | L   | 0.593      | -            | -                | -                | -         |    -6.32 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           40 |     2277 | 2024-05-01 | V1dar         | W   | 0.592      | -            | -                | -                | -         |     1.01 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           39 |     2291 | 2024-05-01 | SINNERS       | W   | 0.590      | -            | -                | -                | -         |     8.61 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           38 |     2308 | 2024-04-30 | Alliance      | W   | 0.585      | -            | -                | -                | -         |     5.45 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           37 |     2312 | 2024-04-30 | Zero Tenacity | L   | 0.584      | -            | -                | -                | -         |    -8.64 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           36 |     2337 | 2024-04-28 | BLEED         | L   | 0.573      | -            | -                | -                | -         |    -8.07 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           35 |     2385 | 2024-04-26 | Alliance      | W   | 0.560      | -            | -                | -                | -         |     4.69 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           34 |     2455 | 2024-04-23 | BLEED         | L   | 0.539      | -            | -                | -                | -         |    -8.08 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           33 |     2470 | 2024-04-22 | Passion UA    | W   | 0.533      | 0.500        | 0.172 (0.046)    | 1.000 (0.266)    | -         |     7.95 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           32 |     2476 | 2024-04-22 | Alliance      | L   | 0.531      | -            | -                | -                | -         |   -12.45 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           31 |     2494 | 2024-04-21 | PARIVISION    | W   | 0.525      | -            | -                | -                | -         |     8.15 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           30 |     2573 | 2024-04-19 | HAVU          | W   | 0.512      | -            | -                | -                | -         |     2.11 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           29 |     2634 | 2024-04-18 | Zero Tenacity | W   | 0.504      | -            | -                | -                | -         |     8.33 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           28 |     2659 | 2024-04-17 | Zero Tenacity | L   | 0.498      | -            | -                | -                | -         |    -7.61 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           27 |     2696 | 2024-04-16 | AMKAL         | L   | 0.491      | -            | -                | -                | -         |    -5.75 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           26 |     2706 | 2024-04-15 | Sangal        | L   | 0.487      | -            | -                | -                | -         |    -6.39 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           25 |     2827 | 2024-04-10 | Nexus         | L   | 0.452      | -            | -                | -                | -         |   -10.85 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           24 |     2868 | 2024-04-09 | Rebels        | L   | 0.447      | -            | -                | -                | -         |    -8.41 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           23 |     2913 | 2024-04-08 | MOUZ NXT      | L   | 0.438      | -            | -                | -                | -         |    -7.55 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           22 |     3087 | 2024-04-02 | Metizport     | L   | 0.399      | -            | -                | -                | -         |    -9.05 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           21 |     3092 | 2024-04-02 | Apeks         | L   | 0.398      | -            | -                | -                | -         |    -9.14 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           20 |     3118 | 2024-03-31 | Apeks         | W   | 0.385      | -            | -                | -                | -         |     3.32 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           19 |     3131 | 2024-03-29 | Space         | L   | 0.372      | -            | -                | -                | -         |    -9.82 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           18 |     3177 | 2024-03-27 | Rebels        | W   | 0.360      | -            | -                | -                | -         |     4.10 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           17 |     3189 | 2024-03-27 | Sampi         | W   | 0.359      | -            | -                | -                | -         |     2.83 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           16 |     3220 | 2024-03-25 | FORZE         | W   | 0.346      | -            | -                | -                | -         |     3.16 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           15 |     3279 | 2024-03-21 | BetBoom       | L   | 0.318      | -            | -                | -                | -         |    -1.37 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           14 |     3319 | 2024-03-19 | ex-Sprout     | W   | 0.304      | -            | -                | -                | -         |     0.36 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           13 |     3386 | 2024-03-15 | 3DMAX         | L   | 0.279      | -            | -                | -                | -         |    -0.35 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           12 |     3479 | 2024-03-12 | Metizport     | L   | 0.260      | -            | -                | -                | -         |    -5.99 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           11 |     3485 | 2024-03-12 | ENCE          | W   | 0.259      | -            | -                | -                | -         |     7.33 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           10 |     3499 | 2024-03-11 | KOI           | W   | 0.253      | -            | -                | -                | -         |     4.06 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            9 |     3507 | 2024-03-11 | Virtus.pro    | L   | 0.252      | -            | -                | -                | -         |    -0.23 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            8 |     3571 | 2024-03-08 | PARIVISION    | L   | 0.232      | -            | -                | -                | -         |    -3.74 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            7 |     3657 | 2024-03-05 | Johnny Speeds | W   | 0.213      | -            | -                | -                | -         |     5.15 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            6 |     3664 | 2024-03-05 | Passion UA    | W   | 0.213      | -            | -                | -                | -         |     3.36 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            5 |     3672 | 2024-03-05 | UGANDA        | W   | 0.212      | -            | -                | -                | -         |     0.14 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            4 |     3799 | 2024-02-27 | DMS           | L   | 0.166      | -            | -                | -                | -         |    -3.85 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            3 |     4012 | 2024-02-18 | Aurora        | L   | 0.105      | -            | -                | -                | -         |    -0.11 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            2 |     4063 | 2024-02-16 | 500           | W   | 0.092      | -            | -                | -                | -         |     0.30 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            1 |     4068 | 2024-02-16 | PERA          | W   | 0.091      | -            | -                | -                | -         |     0.06 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($55,394.37)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-28 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-16 |      0.899 | $22,000.00     | $19,783.92      |
| 2024-06-09 |      0.853 | $1,500.00      | $1,279.64       |
| 2024-05-26 |      0.759 | $5,000.00      | $3,795.54       |
| 2024-05-18 |      0.706 | $10,000.00     | $7,061.82       |
| 2024-05-12 |      0.666 | $22,000.00     | $14,655.79      |
| 2024-04-24 |      0.545 | $12,500.00     | $6,817.67       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
