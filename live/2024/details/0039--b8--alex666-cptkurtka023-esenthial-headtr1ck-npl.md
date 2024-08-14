### Roster Details<br />
Team Name: B8<br />
Roster: alex666, cptkurtka023, esenthial, headtr1ck, npl<br />
Global Rank: [39](../standings_global_2024_08_14.md)<br />
<br />
Region: [Europe]( ../standings_europe_2024_08_14.md)<br />
Regional Rank: [28]( ../standings_europe_2024_08_14.md)<br />
<br />
Final Rank Value:  1101.1<br />
<br />
Final Rank Value (1101.1) = Starting Rank Value (1048.8) + Head To Head Adjustments (52.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.568[<sup>1</sup>](#table2)
- Bounty Collected: 0.460[<sup>2</sup>](#table1)
- Opponent Network: 0.287[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.329<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1048.8
- 400 + ( ( 0.329 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 1048.8


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
|           90 |       27 | 2024-08-13 | KOI           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.77 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           89 |       80 | 2024-08-12 | SINNERS       | L   | 1.000      | -            | -                | -                | -         |   -20.78 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           88 |      140 | 2024-08-10 | Nemiga        | L   | 1.000      | -            | -                | -                | -         |   -12.55 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           87 |      169 | 2024-08-09 | TALON         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.59 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           86 |      213 | 2024-08-07 | Nemiga        | L   | 1.000      | -            | -                | -                | -         |   -14.40 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           85 |      242 | 2024-08-07 | 9INE          | W   | 1.000      | 0.426        | -                | 0.557 (0.237)    | 0 (0.000) |     7.87 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           84 |      296 | 2024-08-05 | Permitta      | L   | 1.000      | -            | -                | -                | -         |   -23.45 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           83 |      329 | 2024-08-04 | BC.Game       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.65 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           82 |      400 | 2024-08-02 | Space         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.37 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           81 |      482 | 2024-07-31 | ex-PERA       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.13 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           80 |      536 | 2024-07-30 | ARCRED        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.80 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           79 |      637 | 2024-07-27 | Sangal        | L   | 1.000      | -            | -                | -                | -         |   -11.49 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           78 |      687 | 2024-07-25 | SINNERS       | W   | 1.000      | 0.435        | -                | 0.922 (0.401)    | 0 (0.000) |     9.31 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           77 |      845 | 2024-07-20 | Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |   -16.43 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           76 |      900 | 2024-07-19 | Rebels        | W   | 1.000      | 0.500        | -                | 0.585 (0.292)    | 0 (0.000) |     9.26 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           75 |      930 | 2024-07-18 | Aurora        | L   | 1.000      | -            | -                | -                | -         |    -5.46 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           74 |     1008 | 2024-07-17 | Sangal        | L   | 1.000      | -            | -                | -                | -         |   -12.10 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           73 |     1116 | 2024-07-15 | 9INE          | W   | 0.999      | 0.500        | -                | 0.557 (0.278)    | 0 (0.000) |     6.10 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           72 |     1328 | 2024-06-16 | 3DMAX         | W   | 0.806      | 0.435        | 0.508 (0.178)    | 1.000 (0.350)    | -         |    21.31 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           71 |     1339 | 2024-06-16 | Monte         | W   | 0.804      | 0.435        | 0.101 (0.035)    | -                | -         |    11.68 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           70 |     1374 | 2024-06-15 | Illuminar     | W   | 0.798      | -            | -                | -                | -         |     5.89 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           69 |     1453 | 2024-06-13 | MOUZ NXT      | W   | 0.784      | 0.435        | 0.130 (0.044)    | 0.929 (0.316)    | -         |    10.78 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           68 |     1473 | 2024-06-12 | BLEED         | L   | 0.778      | -            | -                | -                | -         |    -5.92 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           67 |     1566 | 2024-06-09 | AMKAL         | L   | 0.758      | -            | -                | -                | -         |    -9.90 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           66 |     1678 | 2024-06-07 | Verdant       | W   | 0.746      | -            | -                | -                | -         |     5.39 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           65 |     1686 | 2024-06-07 | ex-PERA       | W   | 0.745      | -            | -                | -                | -         |     6.75 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           64 |     1695 | 2024-06-07 | Verdant       | L   | 0.744      | -            | -                | -                | -         |   -18.33 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           63 |     1988 | 2024-05-30 | SINNERS       | L   | 0.692      | -            | -                | -                | -         |   -12.48 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           62 |     2080 | 2024-05-26 | MOUZ NXT      | L   | 0.664      | -            | -                | -                | -         |   -13.25 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           61 |     2088 | 2024-05-25 | RUBY          | W   | 0.660      | -            | -                | -                | -         |     5.11 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           60 |     2094 | 2024-05-25 | BetBoom       | W   | 0.659      | 0.435        | 0.223 (0.064)    | -                | -         |    15.24 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           59 |     2110 | 2024-05-24 | Alliance      | W   | 0.653      | -            | -                | -                | -         |     3.54 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           58 |     2130 | 2024-05-23 | DMS           | W   | 0.645      | -            | -                | -                | -         |     5.09 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           57 |     2208 | 2024-05-21 | Rhyno         | W   | 0.633      | -            | -                | -                | -         |     5.82 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           56 |     2249 | 2024-05-20 | EYEBALLERS    | W   | 0.625      | -            | -                | -                | -         |     4.38 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           55 |     2274 | 2024-05-19 | Zero Tenacity | L   | 0.618      | -            | -                | -                | -         |   -11.49 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           54 |     2296 | 2024-05-18 | Sashi         | W   | 0.613      | 0.384        | 0.183 (0.043)    | 1.000 (0.236)    | -         |    11.46 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           53 |     2312 | 2024-05-18 | Rebels        | W   | 0.611      | -            | -                | -                | -         |     6.41 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           52 |     2341 | 2024-05-17 | 3DMAX         | W   | 0.605      | 0.500        | 0.508 (0.154)    | 1.000 (0.302)    | -         |    17.73 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           51 |     2369 | 2024-05-16 | DMS           | W   | 0.599      | -            | -                | -                | -         |     5.28 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           50 |     2384 | 2024-05-16 | Sampi         | W   | 0.597      | 0.384        | -                | 0.981 (0.225)    | -         |     5.24 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           49 |     2417 | 2024-05-15 | PARIVISION    | L   | 0.593      | -            | -                | -                | -         |    -9.32 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           48 |     2484 | 2024-05-14 | Verdant       | W   | 0.585      | -            | -                | -                | -         |     4.86 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           47 |     2489 | 2024-05-14 | MOUZ NXT      | W   | 0.584      | 0.384        | 0.130 (0.029)    | -                | -         |     8.24 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           46 |     2524 | 2024-05-12 | BetBoom       | W   | 0.573      | 0.435        | 0.223 (0.055)    | -                | -         |    14.50 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           45 |     2535 | 2024-05-12 | MOUZ NXT      | W   | 0.571      | 0.435        | 0.130 (0.032)    | 0.929 (0.231)    | -         |     8.75 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           44 |     2569 | 2024-05-11 | BLEED         | W   | 0.564      | -            | -                | -                | -         |     8.38 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           43 |     2605 | 2024-05-09 | KOI           | W   | 0.551      | -            | -                | -                | -         |     8.24 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           42 |     2662 | 2024-05-06 | Enterprise    | W   | 0.532      | -            | -                | -                | -         |     5.11 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           41 |     2700 | 2024-05-04 | GL Academy    | W   | 0.518      | -            | -                | -                | -         |     2.81 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           40 |     2747 | 2024-05-02 | Permitta      | W   | 0.504      | -            | -                | -                | -         |     6.29 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           39 |     2754 | 2024-05-01 | Nemiga        | L   | 0.500      | -            | -                | -                | -         |    -4.36 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           38 |     2758 | 2024-05-01 | V1dar         | W   | 0.499      | -            | -                | -                | -         |     0.94 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           37 |     2772 | 2024-05-01 | SINNERS       | W   | 0.497      | -            | -                | -                | -         |     9.36 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           36 |     2789 | 2024-04-30 | Alliance      | W   | 0.491      | -            | -                | -                | -         |     4.69 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           35 |     2793 | 2024-04-30 | Zero Tenacity | L   | 0.491      | -            | -                | -                | -         |    -7.07 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           34 |     2818 | 2024-04-28 | BLEED         | L   | 0.480      | -            | -                | -                | -         |    -7.44 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           33 |     2866 | 2024-04-26 | Alliance      | W   | 0.467      | -            | -                | -                | -         |     4.03 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           32 |     2936 | 2024-04-23 | BLEED         | L   | 0.446      | -            | -                | -                | -         |    -7.35 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           31 |     2951 | 2024-04-22 | Passion UA    | W   | 0.440      | 0.500        | 0.168 (0.037)    | -                | -         |     7.12 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           30 |     2957 | 2024-04-22 | Alliance      | L   | 0.438      | -            | -                | -                | -         |   -10.13 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           29 |     2975 | 2024-04-21 | PARIVISION    | W   | 0.432      | -            | -                | -                | -         |     7.79 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           28 |     3054 | 2024-04-19 | HAVU          | W   | 0.418      | -            | -                | -                | -         |     1.77 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           27 |     3115 | 2024-04-18 | Zero Tenacity | W   | 0.410      | -            | -                | -                | -         |     6.87 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           26 |     3140 | 2024-04-17 | Zero Tenacity | L   | 0.405      | -            | -                | -                | -         |    -6.09 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           25 |     3177 | 2024-04-16 | AMKAL         | L   | 0.398      | -            | -                | -                | -         |    -4.68 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           24 |     3187 | 2024-04-15 | Sangal        | L   | 0.393      | -            | -                | -                | -         |    -4.14 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           23 |     3308 | 2024-04-10 | Nexus         | L   | 0.359      | -            | -                | -                | -         |    -8.31 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           22 |     3349 | 2024-04-09 | Rebels        | L   | 0.353      | -            | -                | -                | -         |    -6.70 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           21 |     3394 | 2024-04-08 | MOUZ NXT      | L   | 0.345      | -            | -                | -                | -         |    -5.85 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           20 |     3568 | 2024-04-02 | Metizport     | L   | 0.306      | -            | -                | -                | -         |    -7.50 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           19 |     3573 | 2024-04-02 | Apeks         | L   | 0.305      | -            | -                | -                | -         |    -7.40 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           18 |     3599 | 2024-03-31 | Apeks         | W   | 0.292      | -            | -                | -                | -         |     2.13 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           17 |     3612 | 2024-03-29 | Space         | L   | 0.279      | -            | -                | -                | -         |    -7.16 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           16 |     3658 | 2024-03-27 | Rebels        | W   | 0.267      | -            | -                | -                | -         |     3.07 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           15 |     3670 | 2024-03-27 | Sampi         | W   | 0.266      | -            | -                | -                | -         |     2.22 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           14 |     3701 | 2024-03-25 | FORZE         | W   | 0.253      | -            | -                | -                | -         |     2.14 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           13 |     3760 | 2024-03-21 | BetBoom       | L   | 0.225      | -            | -                | -                | -         |    -1.34 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           12 |     3800 | 2024-03-19 | ex-Sprout     | W   | 0.211      | -            | -                | -                | -         |     0.17 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           11 |     3867 | 2024-03-15 | 3DMAX         | L   | 0.186      | -            | -                | -                | -         |    -0.25 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           10 |     3960 | 2024-03-12 | Metizport     | L   | 0.167      | -            | -                | -                | -         |    -4.15 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            9 |     3966 | 2024-03-12 | ENCE          | W   | 0.166      | -            | -                | -                | -         |     4.55 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            8 |     3980 | 2024-03-11 | KOI           | W   | 0.160      | -            | -                | -                | -         |     2.32 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            7 |     3988 | 2024-03-11 | Virtus.pro    | L   | 0.159      | -            | -                | -                | -         |    -0.21 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            6 |     4052 | 2024-03-08 | PARIVISION    | L   | 0.139      | -            | -                | -                | -         |    -1.84 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            5 |     4138 | 2024-03-05 | Johnny Speeds | W   | 0.120      | -            | -                | -                | -         |     2.86 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            4 |     4145 | 2024-03-05 | Passion UA    | W   | 0.119      | -            | -                | -                | -         |     1.99 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            3 |     4153 | 2024-03-05 | UGANDA        | W   | 0.119      | -            | -                | -                | -         |     0.10 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            2 |     4280 | 2024-02-27 | DMS           | L   | 0.073      | -            | -                | -                | -         |    -1.62 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            1 |     4493 | 2024-02-18 | Aurora        | L   | 0.012      | -            | -                | -                | -         |    -0.02 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($55,587.58)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-11 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-08-06 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-07-28 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-16 |      0.806 | $22,000.00     | $17,732.56      |
| 2024-06-09 |      0.760 | $1,500.00      | $1,139.77       |
| 2024-05-26 |      0.666 | $5,000.00      | $3,329.32       |
| 2024-05-18 |      0.613 | $10,000.00     | $6,129.38       |
| 2024-05-12 |      0.573 | $22,000.00     | $12,604.43      |
| 2024-04-24 |      0.452 | $12,500.00     | $5,652.12       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
