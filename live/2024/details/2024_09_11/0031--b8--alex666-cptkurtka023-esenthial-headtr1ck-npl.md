### Roster Details<br />
Team Name: B8<br />
Roster: alex666, cptkurtka023, esenthial, headtr1ck, npl<br />
Global Rank: [31](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_11.md)<br />
Regional Rank: [23]( ../../standings_europe_2024_09_11.md)<br />
<br />
Final Rank Value:  1161.3<br />
<br />
Final Rank Value (1161.3) = Starting Rank Value (1093.7) + Head To Head Adjustments (67.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.622[<sup>1</sup>](#table2)
- Bounty Collected: 0.458[<sup>2</sup>](#table1)
- Opponent Network: 0.348[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.357<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1093.7
- 400 + ( ( 0.357 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1093.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|          110 |       69 | 2024-09-08 | GamerLegion     | W   | 1.000      | 0.435        | 0.196 (0.085)    | -                | 0 (0.000) |    12.80 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|          109 |       75 | 2024-09-08 | Zero Tenacity   | W   | 1.000      | 0.435        | 0.164 (0.071)    | 1.000 (0.435)    | 0 (0.000) |    12.79 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|          108 |      101 | 2024-09-07 | BLEED           | W   | 1.000      | 0.435        | 0.100 (0.044)    | -                | 0 (0.000) |    11.87 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|          107 |      124 | 2024-09-06 | 9 Pandas        | L   | 1.000      | -            | -                | -                | -         |   -14.56 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|          106 |      152 | 2024-09-05 | SINNERS         | W   | 1.000      | 0.500        | 0.092 (0.046)    | 1.000 (0.500)    | 0 (0.000) |    13.23 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|          105 |      176 | 2024-09-05 | 9INE            | W   | 1.000      | 0.435        | -                | 0.687 (0.299)    | 0 (0.000) |     9.59 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|          104 |      242 | 2024-09-03 | TSM             | L   | 1.000      | -            | -                | -                | -         |   -18.48 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|          103 |      276 | 2024-09-02 | BLEED           | W   | 1.000      | 0.384        | 0.100 (0.039)    | -                | 0 (0.000) |    12.01 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|          102 |      374 | 2024-08-29 | Revenant        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.86 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|          101 |      400 | 2024-08-28 | ALTERNATE aTTaX | L   | 1.000      | -            | -                | -                | -         |   -22.39 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|          100 |      409 | 2024-08-28 | SINNERS         | W   | 1.000      | 0.435        | 0.092 (0.040)    | 1.000 (0.435)    | 0 (0.000) |    17.18 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           99 |      460 | 2024-08-27 | Endpoint        | W   | 1.000      | 0.435        | -                | 0.703 (0.306)    | 0 (0.000) |     9.47 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           98 |      476 | 2024-08-27 | 9INE            | L   | 1.000      | -            | -                | -                | -         |   -22.31 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           97 |      529 | 2024-08-26 | HEROIC          | L   | 1.000      | -            | -                | -                | -         |    -6.04 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           96 |      551 | 2024-08-26 | Eternal Fire    | L   | 1.000      | -            | -                | -                | -         |    -1.03 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           95 |      594 | 2024-08-25 | Revenant        | W   | 1.000      | 0.435        | -                | 0.652 (0.283)    | 0 (0.000) |     7.98 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           94 |      636 | 2024-08-23 | Monte           | W   | 1.000      | -            | -                | -                | -         |    10.51 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           93 |      656 | 2024-08-23 | Rhyno           | W   | 1.000      | -            | -                | -                | -         |     2.62 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           92 |      681 | 2024-08-22 | PARIVISION      | L   | 1.000      | -            | -                | -                | -         |   -15.92 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           91 |      708 | 2024-08-21 | Enterprise      | W   | 1.000      | -            | -                | -                | -         |     6.78 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           90 |      749 | 2024-08-21 | SINNERS         | L   | 1.000      | -            | -                | -                | -         |   -17.53 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           89 |      771 | 2024-08-20 | RUSH B          | W   | 1.000      | -            | -                | -                | -         |     7.16 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           88 |      796 | 2024-08-19 | Monte           | W   | 1.000      | -            | -                | -                | -         |    10.76 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           87 |      799 | 2024-08-19 | Sashi           | W   | 1.000      | -            | -                | -                | -         |    14.86 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           86 |      804 | 2024-08-19 | AMKAL           | W   | 1.000      | -            | -                | -                | -         |    13.26 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           85 |      850 | 2024-08-17 | GenOne          | W   | 1.000      | -            | -                | -                | -         |     1.25 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           84 |      853 | 2024-08-17 | Lazer Cats      | W   | 1.000      | -            | -                | -                | -         |     1.20 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           83 |      897 | 2024-08-15 | OG              | L   | 1.000      | -            | -                | -                | -         |   -20.72 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           82 |      901 | 2024-08-15 | Spirit Academy  | W   | 1.000      | -            | -                | -                | -         |     4.88 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           81 |      909 | 2024-08-15 | BLEED           | W   | 1.000      | -            | -                | -                | -         |    17.76 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           80 |      955 | 2024-08-13 | KOI             | W   | 1.000      | -            | -                | -                | -         |     9.98 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           79 |     1008 | 2024-08-12 | SINNERS         | L   | 1.000      | -            | -                | -                | -         |   -19.70 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           78 |     1068 | 2024-08-10 | Nemiga          | L   | 0.985      | -            | -                | -                | -         |   -12.89 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           77 |     1097 | 2024-08-09 | TALON           | W   | 0.979      | -            | -                | -                | -         |     1.68 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           76 |     1141 | 2024-08-07 | Nemiga          | L   | 0.968      | -            | -                | -                | -         |   -14.58 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           75 |     1170 | 2024-08-07 | 9INE            | W   | 0.965      | 0.426        | -                | 0.687 (0.283)    | -         |     7.75 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           74 |     1224 | 2024-08-05 | Permitta        | L   | 0.954      | -            | -                | -                | -         |   -22.14 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           73 |     1257 | 2024-08-04 | BC.Game         | W   | 0.947      | -            | -                | -                | -         |     7.53 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           72 |     1328 | 2024-08-02 | Space           | W   | 0.934      | -            | -                | -                | -         |     4.13 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           71 |     1410 | 2024-07-31 | Qiang           | W   | 0.921      | -            | -                | -                | -         |     6.40 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           70 |     1464 | 2024-07-30 | ARCRED          | W   | 0.914      | -            | -                | -                | -         |     7.53 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           69 |     1565 | 2024-07-27 | Sangal          | L   | 0.891      | -            | -                | -                | -         |    -7.25 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           68 |     1615 | 2024-07-25 | SINNERS         | W   | 0.881      | 0.435        | -                | 1.000 (0.383)    | -         |     9.70 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           67 |     1773 | 2024-07-20 | Zero Tenacity   | L   | 0.847      | -            | -                | -                | -         |   -14.30 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           66 |     1828 | 2024-07-19 | Rebels          | W   | 0.838      | 0.500        | -                | 0.670 (0.281)    | -         |     7.18 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           65 |     1858 | 2024-07-18 | Aurora          | L   | 0.834      | -            | -                | -                | -         |    -6.23 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           64 |     1936 | 2024-07-17 | Sangal          | L   | 0.827      | -            | -                | -                | -         |    -6.74 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           63 |     2044 | 2024-07-15 | 9INE            | W   | 0.813      | 0.500        | -                | 0.687 (0.279)    | -         |     5.53 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           62 |     2256 | 2024-06-16 | 3DMAX           | W   | 0.620      | 0.435        | 0.512 (0.138)    | -                | -         |    17.92 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           61 |     2267 | 2024-06-16 | Monte           | W   | 0.619      | -            | -                | -                | -         |     7.02 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           60 |     2302 | 2024-06-15 | Illuminar       | W   | 0.612      | -            | -                | -                | -         |     4.19 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           59 |     2381 | 2024-06-13 | MOUZ NXT        | W   | 0.598      | -            | -                | -                | -         |     7.50 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           58 |     2401 | 2024-06-12 | BLEED           | L   | 0.593      | -            | -                | -                | -         |    -6.55 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           57 |     2494 | 2024-06-09 | AMKAL           | L   | 0.572      | -            | -                | -                | -         |    -8.41 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           56 |     2606 | 2024-06-07 | Verdant         | W   | 0.560      | -            | -                | -                | -         |     3.57 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           55 |     2614 | 2024-06-07 | Qiang           | W   | 0.560      | -            | -                | -                | -         |     4.13 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           54 |     2623 | 2024-06-07 | Verdant         | L   | 0.559      | -            | -                | -                | -         |   -14.25 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           53 |     2916 | 2024-05-30 | SINNERS         | L   | 0.507      | -            | -                | -                | -         |    -8.19 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           52 |     3008 | 2024-05-26 | MOUZ NXT        | L   | 0.479      | -            | -                | -                | -         |   -10.13 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           51 |     3016 | 2024-05-25 | RUBY            | W   | 0.474      | -            | -                | -                | -         |     3.21 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           50 |     3022 | 2024-05-25 | BetBoom         | W   | 0.473      | 0.435        | 0.227 (0.047)    | -                | -         |     9.62 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           49 |     3038 | 2024-05-24 | Alliance        | W   | 0.467      | -            | -                | -                | -         |     2.46 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           48 |     3058 | 2024-05-23 | DMS             | W   | 0.459      | -            | -                | -                | -         |     3.15 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           47 |     3136 | 2024-05-21 | Rhyno           | W   | 0.447      | -            | -                | -                | -         |     2.93 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           46 |     3177 | 2024-05-20 | EYEBALLERS      | W   | 0.439      | -            | -                | -                | -         |     1.72 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           45 |     3202 | 2024-05-19 | Zero Tenacity   | L   | 0.433      | -            | -                | -                | -         |    -8.01 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           44 |     3224 | 2024-05-18 | Sashi           | W   | 0.427      | -            | -                | -                | -         |     6.84 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           43 |     3240 | 2024-05-18 | Rebels          | W   | 0.425      | -            | -                | -                | -         |     3.67 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           42 |     3269 | 2024-05-17 | 3DMAX           | W   | 0.419      | 0.500        | 0.512 (0.107)    | -                | -         |    12.68 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           41 |     3297 | 2024-05-16 | DMS             | W   | 0.414      | -            | -                | -                | -         |     3.02 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           40 |     3312 | 2024-05-16 | Sampi           | W   | 0.412      | -            | -                | -                | -         |     3.62 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           39 |     3345 | 2024-05-15 | PARIVISION      | L   | 0.407      | -            | -                | -                | -         |    -6.93 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           38 |     3412 | 2024-05-14 | Verdant         | W   | 0.399      | -            | -                | -                | -         |     2.61 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           37 |     3417 | 2024-05-14 | MOUZ NXT        | W   | 0.398      | -            | -                | -                | -         |     4.67 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           36 |     3452 | 2024-05-12 | BetBoom         | W   | 0.387      | 0.435        | 0.227 (0.038)    | -                | -         |     8.38 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           35 |     3463 | 2024-05-12 | MOUZ NXT        | W   | 0.385      | -            | -                | -                | -         |     4.75 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           34 |     3497 | 2024-05-11 | BLEED           | W   | 0.378      | -            | -                | -                | -         |     3.44 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           33 |     3533 | 2024-05-09 | KOI             | W   | 0.365      | -            | -                | -                | -         |     3.85 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           32 |     3590 | 2024-05-06 | Enterprise      | W   | 0.346      | -            | -                | -                | -         |     2.63 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           31 |     3628 | 2024-05-04 | GL Academy      | W   | 0.332      | -            | -                | -                | -         |     1.11 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           30 |     3675 | 2024-05-02 | Permitta        | W   | 0.318      | -            | -                | -                | -         |     3.27 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           29 |     3682 | 2024-05-01 | Nemiga          | L   | 0.314      | -            | -                | -                | -         |    -3.63 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           28 |     3686 | 2024-05-01 | NewBALLS        | W   | 0.313      | -            | -                | -                | -         |     0.40 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           27 |     3700 | 2024-05-01 | SINNERS         | W   | 0.311      | -            | -                | -                | -         |     5.80 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           26 |     3717 | 2024-04-30 | Alliance        | W   | 0.306      | -            | -                | -                | -         |     2.22 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           25 |     3721 | 2024-04-30 | Zero Tenacity   | L   | 0.305      | -            | -                | -                | -         |    -4.92 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           24 |     3746 | 2024-04-28 | BLEED           | L   | 0.294      | -            | -                | -                | -         |    -6.64 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           23 |     3794 | 2024-04-26 | Alliance        | W   | 0.281      | -            | -                | -                | -         |     1.87 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           22 |     3864 | 2024-04-23 | BLEED           | L   | 0.260      | -            | -                | -                | -         |    -6.05 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           21 |     3879 | 2024-04-22 | Passion UA      | W   | 0.254      | -            | -                | -                | -         |     3.37 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           20 |     3885 | 2024-04-22 | Alliance        | L   | 0.252      | -            | -                | -                | -         |    -6.33 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           19 |     3903 | 2024-04-21 | PARIVISION      | W   | 0.246      | -            | -                | -                | -         |     3.72 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           18 |     3982 | 2024-04-19 | HAVU            | W   | 0.233      | -            | -                | -                | -         |     0.41 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           17 |     4043 | 2024-04-18 | Zero Tenacity   | W   | 0.225      | -            | -                | -                | -         |     3.38 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           16 |     4068 | 2024-04-17 | Zero Tenacity   | L   | 0.219      | -            | -                | -                | -         |    -3.66 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           15 |     4105 | 2024-04-16 | AMKAL           | L   | 0.212      | -            | -                | -                | -         |    -3.17 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           14 |     4115 | 2024-04-15 | Sangal          | L   | 0.208      | -            | -                | -                | -         |    -1.30 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           13 |     4236 | 2024-04-10 | Nexus           | L   | 0.173      | -            | -                | -                | -         |    -4.50 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           12 |     4277 | 2024-04-09 | Rebels          | L   | 0.168      | -            | -                | -                | -         |    -3.74 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           11 |     4322 | 2024-04-08 | MOUZ NXT        | L   | 0.159      | -            | -                | -                | -         |    -3.26 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           10 |     4496 | 2024-04-02 | Metizport       | L   | 0.120      | -            | -                | -                | -         |    -3.32 | baz, cptkurtka023, esenthial, npl, OWNER         |
|            9 |     4501 | 2024-04-02 | Apeks           | L   | 0.119      | -            | -                | -                | -         |    -3.28 | baz, cptkurtka023, esenthial, npl, OWNER         |
|            8 |     4527 | 2024-03-31 | Apeks           | W   | 0.106      | -            | -                | -                | -         |     0.43 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            7 |     4540 | 2024-03-29 | Space           | L   | 0.093      | -            | -                | -                | -         |    -2.45 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            6 |     4586 | 2024-03-27 | Rebels          | W   | 0.081      | -            | -                | -                | -         |     0.70 | baz, cptkurtka023, esenthial, npl, OWNER         |
|            5 |     4598 | 2024-03-27 | Sampi           | W   | 0.080      | -            | -                | -                | -         |     0.68 | baz, cptkurtka023, esenthial, npl, OWNER         |
|            4 |     4629 | 2024-03-25 | FORZE           | W   | 0.067      | -            | -                | -                | -         |     0.32 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            3 |     4688 | 2024-03-21 | BetBoom         | L   | 0.039      | -            | -                | -                | -         |    -0.41 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            2 |     4728 | 2024-03-19 | ex-Sprout       | W   | 0.025      | -            | -                | -                | -         |     0.02 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            1 |     4795 | 2024-03-15 | 3DMAX           | L   | 0.000      | -            | -                | -                | -         |     0.00 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($72,845.60)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.25) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-08 |      1.000 | $22,000.00     | $22,000.00      |
| 2024-08-28 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-08-11 |      0.992 | $5,000.00      | $4,962.33       |
| 2024-08-06 |      0.960 | $2,000.00      | $1,920.36       |
| 2024-07-28 |      0.900 | $2,000.00      | $1,800.94       |
| 2024-06-16 |      0.620 | $22,000.00     | $13,644.61      |
| 2024-05-26 |      0.480 | $5,000.00      | $2,400.24       |
| 2024-05-18 |      0.427 | $10,000.00     | $4,271.22       |
| 2024-05-12 |      0.387 | $22,000.00     | $8,516.48       |
| 2024-04-24 |      0.266 | $12,500.00     | $3,329.42       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
