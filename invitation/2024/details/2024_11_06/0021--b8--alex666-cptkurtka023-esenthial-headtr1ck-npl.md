### Roster Details<br />
Team Name: B8<br />
Roster: alex666, cptkurtka023, esenthial, headtr1ck, npl<br />
Global Rank: [21](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_06.md)<br />
Regional Rank: [17]( ../../standings_europe_2024_11_06.md)<br />
<br />
Final Rank Value:  1293.1<br />
<br />
Final Rank Value (1293.1) = Starting Rank Value (1324.4) + Head To Head Adjustments (-31.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.555[<sup>1</sup>](#table2)
- Bounty Collected: 0.482[<sup>2</sup>](#table1)
- Opponent Network: 0.300[<sup>2</sup>](#table1)
- LAN Wins: 0.547[<sup>2</sup>](#table1)

The average of these factors is 0.471<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1324.4
- 400 + ( ( 0.471 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 1324.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           97 |      191 | 2024-10-27 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -7.24 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           96 |      195 | 2024-10-27 | paiN              | W   | 1.000      | 0.500        | 0.192 (0.096)    | 0.776 (0.388)    | 1 (1.000) |    20.98 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           95 |      218 | 2024-10-26 | Eternal Fire      | W   | 1.000      | 0.500        | 0.459 (0.229)    | 0.537 (0.268)    | 1 (1.000) |    28.59 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           94 |      245 | 2024-10-25 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -6.28 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           93 |      255 | 2024-10-25 | Eternal Fire      | W   | 1.000      | 0.500        | 0.459 (0.229)    | 0.537 (0.268)    | 1 (1.000) |    29.24 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           92 |      331 | 2024-10-19 | HEROIC            | L   | 1.000      | -            | -                | -                | -         |    -2.97 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           91 |      370 | 2024-10-18 | JANO              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     4.63 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           90 |      425 | 2024-10-16 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -1.82 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           89 |      430 | 2024-10-16 | Ninjas in Pyjamas | W   | 1.000      | 0.589        | 0.071 (0.042)    | -                | 1 (1.000) |    10.08 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           88 |      656 | 2024-10-05 | GamerLegion       | L   | 0.988      | -            | -                | -                | -         |   -21.14 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           87 |      742 | 2024-10-03 | ALTERNATE aTTaX   | W   | 0.973      | 0.435        | -                | 0.749 (0.317)    | 0 (0.000) |     3.80 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           86 |      903 | 2024-09-28 | 3DMAX             | W   | 0.941      | 0.143        | 0.377 (0.051)    | -                | 0 (0.000) |    22.15 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           85 |      949 | 2024-09-27 | SAW               | W   | 0.934      | 0.143        | 0.264 (0.035)    | -                | 0 (0.000) |    26.32 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           84 |      954 | 2024-09-27 | OG                | W   | 0.934      | -            | -                | -                | 0 (0.000) |     8.09 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           83 |      963 | 2024-09-27 | GamerLegion       | L   | 0.933      | -            | -                | -                | -         |   -19.67 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           82 |      995 | 2024-09-26 | Fire Flux         | W   | 0.927      | -            | -                | -                | 0 (0.000) |     0.76 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           81 |     1004 | 2024-09-26 | Illuminar         | W   | 0.927      | -            | -                | -                | -         |     4.10 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           80 |     1018 | 2024-09-26 | Insilio           | W   | 0.925      | 0.435        | -                | 0.730 (0.293)    | -         |     6.72 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           79 |     1348 | 2024-09-16 | Sampi             | L   | 0.858      | -            | -                | -                | -         |   -22.54 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           78 |     1477 | 2024-09-12 | AMKAL             | L   | 0.832      | -            | -                | -                | -         |   -22.16 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           77 |     1563 | 2024-09-08 | GamerLegion       | W   | 0.807      | 0.435        | 0.132 (0.046)    | -                | -         |     6.79 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           76 |     1569 | 2024-09-08 | Zero Tenacity     | W   | 0.806      | 0.435        | -                | 0.792 (0.278)    | -         |     7.12 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           75 |     1595 | 2024-09-07 | UNPAID            | W   | 0.800      | 0.435        | 0.113 (0.039)    | -                | -         |     9.71 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           74 |     1618 | 2024-09-06 | 9 Pandas          | L   | 0.794      | -            | -                | -                | -         |   -16.53 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           73 |     1646 | 2024-09-05 | SINNERS           | W   | 0.788      | 0.500        | 0.090 (0.035)    | 0.974 (0.384)    | -         |     8.36 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           72 |     1670 | 2024-09-05 | 9INE              | W   | 0.786      | 0.435        | -                | 0.813 (0.278)    | -         |     5.50 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           71 |     1736 | 2024-09-03 | TSM               | L   | 0.773      | -            | -                | -                | -         |   -18.89 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           70 |     1770 | 2024-09-02 | UNPAID            | W   | 0.765      | -            | -                | -                | -         |     9.01 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           69 |     1868 | 2024-08-29 | Revenant          | W   | 0.739      | -            | -                | -                | -         |     3.54 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           68 |     1894 | 2024-08-28 | ALTERNATE aTTaX   | L   | 0.734      | -            | -                | -                | -         |   -19.13 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           67 |     1903 | 2024-08-28 | SINNERS           | W   | 0.733      | 0.435        | -                | 0.974 (0.310)    | -         |     9.52 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           66 |     1954 | 2024-08-27 | Endpoint          | W   | 0.728      | -            | -                | -                | -         |     3.58 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           65 |     1970 | 2024-08-27 | 9INE              | L   | 0.726      | -            | -                | -                | -         |   -18.41 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           64 |     2023 | 2024-08-26 | HEROIC            | L   | 0.721      | -            | -                | -                | -         |    -2.37 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           63 |     2045 | 2024-08-26 | Eternal Fire      | L   | 0.720      | -            | -                | -                | -         |    -1.77 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           62 |     2088 | 2024-08-25 | Revenant          | W   | 0.713      | -            | -                | -                | -         |     2.89 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           61 |     2130 | 2024-08-23 | Monte             | W   | 0.701      | -            | -                | -                | -         |     5.80 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           60 |     2150 | 2024-08-23 | Rhyno             | W   | 0.698      | -            | -                | -                | -         |     2.71 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           59 |     2175 | 2024-08-22 | PARIVISION        | L   | 0.692      | -            | -                | -                | -         |   -15.29 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           58 |     2202 | 2024-08-21 | ex-Enterprise     | W   | 0.687      | -            | -                | -                | -         |     3.32 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           57 |     2243 | 2024-08-21 | SINNERS           | L   | 0.685      | -            | -                | -                | -         |   -14.60 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           56 |     2265 | 2024-08-20 | RUSH B            | W   | 0.681      | -            | -                | -                | -         |     1.91 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           55 |     2290 | 2024-08-19 | Monte             | W   | 0.674      | -            | -                | -                | -         |     5.34 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           54 |     2293 | 2024-08-19 | Sashi             | W   | 0.674      | -            | -                | -                | -         |     4.13 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           53 |     2298 | 2024-08-19 | AMKAL             | W   | 0.674      | -            | -                | -                | -         |     2.98 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           52 |     2344 | 2024-08-17 | GenOne            | W   | 0.661      | -            | -                | -                | -         |     0.41 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           51 |     2347 | 2024-08-17 | Lazer Cats        | W   | 0.660      | -            | -                | -                | -         |     0.72 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           50 |     2391 | 2024-08-15 | OG                | L   | 0.648      | -            | -                | -                | -         |   -16.49 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           49 |     2395 | 2024-08-15 | Spirit Academy    | W   | 0.647      | -            | -                | -                | -         |     3.59 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           48 |     2403 | 2024-08-15 | UNPAID            | W   | 0.647      | -            | -                | -                | -         |     9.21 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           47 |     2449 | 2024-08-13 | KOI               | W   | 0.635      | -            | -                | -                | -         |     1.81 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           46 |     2502 | 2024-08-12 | SINNERS           | L   | 0.628      | -            | -                | -                | -         |   -14.37 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           45 |     2562 | 2024-08-10 | Nemiga            | L   | 0.612      | -            | -                | -                | -         |    -7.65 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           44 |     2591 | 2024-08-09 | TALON             | W   | 0.606      | -            | -                | -                | -         |     0.38 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           43 |     2635 | 2024-08-07 | Nemiga            | L   | 0.595      | -            | -                | -                | -         |    -7.96 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           42 |     2664 | 2024-08-07 | 9INE              | W   | 0.592      | -            | -                | -                | -         |     2.85 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           41 |     2718 | 2024-08-05 | Permitta          | L   | 0.581      | -            | -                | -                | -         |   -14.29 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           40 |     2751 | 2024-08-04 | BC.Game           | W   | 0.574      | -            | -                | -                | -         |     1.39 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           39 |     2822 | 2024-08-02 | SovvyKiNG         | W   | 0.561      | -            | -                | -                | -         |     0.86 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           38 |     2904 | 2024-07-31 | Qiang             | W   | 0.548      | -            | -                | -                | -         |     0.84 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           37 |     2958 | 2024-07-30 | ARCRED            | W   | 0.541      | -            | -                | -                | -         |     1.35 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           36 |     3059 | 2024-07-27 | Sangal            | L   | 0.519      | -            | -                | -                | -         |    -6.13 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           35 |     3109 | 2024-07-25 | SINNERS           | W   | 0.508      | 0.435        | -                | 0.974 (0.215)    | -         |     4.29 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           34 |     3267 | 2024-07-20 | Zero Tenacity     | L   | 0.474      | -            | -                | -                | -         |   -12.22 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           33 |     3322 | 2024-07-19 | Rebels            | W   | 0.465      | -            | -                | -                | -         |     1.66 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           32 |     3352 | 2024-07-18 | Aurora            | L   | 0.461      | -            | -                | -                | -         |   -10.61 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           31 |     3430 | 2024-07-17 | Sangal            | L   | 0.454      | -            | -                | -                | -         |    -5.70 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           30 |     3538 | 2024-07-15 | 9INE              | W   | 0.440      | -            | -                | -                | -         |     1.71 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           29 |     3750 | 2024-06-16 | 3DMAX             | W   | 0.247      | 0.435        | 0.377 (0.041)    | -                | -         |     5.90 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           28 |     3761 | 2024-06-16 | Monte             | W   | 0.246      | -            | -                | -                | -         |     0.30 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           27 |     3796 | 2024-06-15 | Illuminar         | W   | 0.239      | -            | -                | -                | -         |     1.43 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           26 |     3875 | 2024-06-13 | MOUZ NXT          | W   | 0.225      | -            | -                | -                | -         |     0.50 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           25 |     3895 | 2024-06-12 | BLEED             | L   | 0.220      | -            | -                | -                | -         |    -6.59 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           24 |     3988 | 2024-06-09 | AMKAL             | L   | 0.200      | -            | -                | -                | -         |    -5.53 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           23 |     4100 | 2024-06-07 | Verdant           | W   | 0.187      | -            | -                | -                | -         |     0.64 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           22 |     4108 | 2024-06-07 | Qiang             | W   | 0.187      | -            | -                | -                | -         |     0.21 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           21 |     4117 | 2024-06-07 | Verdant           | L   | 0.186      | -            | -                | -                | -         |    -5.24 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           20 |     4410 | 2024-05-30 | SINNERS           | L   | 0.134      | -            | -                | -                | -         |    -2.95 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           19 |     4502 | 2024-05-26 | MOUZ NXT          | L   | 0.106      | -            | -                | -                | -         |    -3.14 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           18 |     4510 | 2024-05-25 | RUBY              | W   | 0.101      | -            | -                | -                | -         |     0.13 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           17 |     4516 | 2024-05-25 | BetBoom           | W   | 0.100      | -            | -                | -                | -         |     0.57 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           16 |     4532 | 2024-05-24 | Alliance          | W   | 0.094      | -            | -                | -                | -         |     0.11 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           15 |     4552 | 2024-05-23 | DMS               | W   | 0.086      | -            | -                | -                | -         |     0.16 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           14 |     4630 | 2024-05-21 | Rhyno             | W   | 0.074      | -            | -                | -                | -         |     0.17 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           13 |     4671 | 2024-05-20 | EYEBALLERS        | W   | 0.066      | -            | -                | -                | -         |     0.05 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           12 |     4696 | 2024-05-19 | Zero Tenacity     | L   | 0.060      | -            | -                | -                | -         |    -1.63 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           11 |     4718 | 2024-05-18 | Sashi             | W   | 0.054      | -            | -                | -                | -         |     0.20 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           10 |     4734 | 2024-05-18 | Rebels            | W   | 0.052      | -            | -                | -                | -         |     0.14 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            9 |     4763 | 2024-05-17 | 3DMAX             | W   | 0.046      | -            | -                | -                | -         |     1.12 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            8 |     4791 | 2024-05-16 | DMS               | W   | 0.041      | -            | -                | -                | -         |     0.07 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            7 |     4806 | 2024-05-16 | Sampi             | W   | 0.039      | -            | -                | -                | -         |     0.16 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            6 |     4839 | 2024-05-15 | PARIVISION        | L   | 0.034      | -            | -                | -                | -         |    -0.89 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            5 |     4906 | 2024-05-14 | Verdant           | W   | 0.027      | -            | -                | -                | -         |     0.09 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            4 |     4911 | 2024-05-14 | MOUZ NXT          | W   | 0.026      | -            | -                | -                | -         |     0.04 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            3 |     4946 | 2024-05-12 | BetBoom           | W   | 0.014      | -            | -                | -                | -         |     0.08 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            2 |     4957 | 2024-05-12 | MOUZ NXT          | W   | 0.012      | -            | -                | -                | -         |     0.02 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            1 |     4991 | 2024-05-11 | BLEED             | W   | 0.005      | -            | -                | -                | -         |     0.01 | alex666, cptkurtka023, esenthial, headtr1ck, npl |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($75,690.74)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-10-20 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-10-20 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-10-06 |      0.995 | $2,000.00      | $1,989.39       |
| 2024-09-28 |      0.941 | $2,000.00      | $1,881.70       |
| 2024-09-08 |      0.807 | $22,000.00     | $17,763.15      |
| 2024-08-28 |      0.734 | $10,000.00     | $7,343.32       |
| 2024-08-11 |      0.620 | $5,000.00      | $3,097.82       |
| 2024-08-06 |      0.587 | $2,000.00      | $1,174.56       |
| 2024-06-16 |      0.247 | $22,000.00     | $5,440.78       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
