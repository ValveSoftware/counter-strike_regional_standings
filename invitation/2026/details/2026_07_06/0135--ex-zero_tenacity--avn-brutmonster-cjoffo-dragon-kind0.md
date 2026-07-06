### Roster Details<br />
Team Name: ex-Zero Tenacity<br />
Roster: aVN, brutmonster, Cjoffo, Dragon, Kind0<br />
Global Rank: [135](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [93]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  877.2<br />
<br />
Final Rank Value (877.2) = Starting Rank Value (817.9) + Head To Head Adjustments (59.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.312[<sup>2</sup>](#table1)
- Opponent Network: 0.242[<sup>2</sup>](#table1)
- LAN Wins: 0.060[<sup>2</sup>](#table1)

The average of these factors is 0.222<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 817.9
- 400 + ( ( 0.222 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 817.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           98 |      445 | 2026-06-08 | brazylijski luz      | L   | 1.000      | -            | -                | -                | -         |   -17.86 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           97 |      482 | 2026-06-06 | BIG Academy          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.50 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           96 |      523 | 2026-06-05 | aAa                  | W   | 0.994      | -            | -                | -                | 0 (0.000) |    11.05 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           95 |      534 | 2026-06-05 | Johnny Speeds        | L   | 0.992      | -            | -                | -                | -         |    -7.22 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           94 |      578 | 2026-06-03 | illwill              | W   | 0.979      | 0.384        | 0.019 (0.007)    | -                | 0 (0.000) |    18.82 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           93 |      599 | 2026-06-02 | Rebels               | W   | 0.973      | 0.384        | 0.008 (0.003)    | 0.614 (0.229)    | 0 (0.000) |    22.00 | aVN, Cjoffo, Dragon, Kind0, RiiL3          |
|           92 |      612 | 2026-06-01 | Ursa                 | L   | 0.967      | -            | -                | -                | -         |   -10.21 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           91 |      675 | 2026-05-30 | ex-RUBY              | L   | 0.953      | -            | -                | -                | -         |    -7.63 | aVN, Cjoffo, Dragon, Kind0, RiiL3          |
|           90 |      720 | 2026-05-29 | aAa                  | L   | 0.946      | -            | -                | -                | -         |   -18.80 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           89 |      748 | 2026-05-28 | KOLESIE              | W   | 0.941      | 0.384        | 0.026 (0.009)    | 0.839 (0.304)    | 0 (0.000) |    22.93 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           88 |      783 | 2026-05-28 | INOX Division        | L   | 0.938      | -            | -                | -                | -         |    -7.58 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           87 |      802 | 2026-05-27 | los kogutos          | L   | 0.934      | -            | -                | -                | -         |   -13.67 | aVN, Cjoffo, Dragon, Kind0, RiiL3          |
|           86 |      836 | 2026-05-26 | Just Players         | L   | 0.927      | -            | -                | -                | -         |   -14.77 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           85 |      869 | 2026-05-25 | ASTRAL               | L   | 0.921      | -            | -                | -                | -         |   -10.57 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           84 |      877 | 2026-05-25 | Leo                  | W   | 0.920      | 0.384        | -                | 0.489 (0.173)    | 0 (0.000) |    16.58 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           83 |      889 | 2026-05-25 | los kogutos          | W   | 0.919      | 0.396        | 0.019 (0.007)    | 0.945 (0.344)    | 0 (0.000) |    14.43 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           82 |      932 | 2026-05-24 | CYBERSHOKE Prospects | W   | 0.912      | 0.344        | 0.013 (0.004)    | 0.663 (0.208)    | 0 (0.000) |    22.87 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           81 |      966 | 2026-05-23 | Julie&Cie            | W   | 0.907      | -            | -                | -                | 0 (0.000) |     9.60 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           80 |      978 | 2026-05-23 | ALGO                 | W   | 0.906      | -            | -                | -                | -         |    13.03 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           79 |     1013 | 2026-05-22 | SAW Youngsters       | L   | 0.900      | -            | -                | -                | -         |   -18.06 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           78 |     1073 | 2026-05-21 | Subtop De France     | W   | 0.892      | -            | -                | -                | -         |     9.96 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           77 |     1108 | 2026-05-20 | Lavked               | L   | 0.886      | -            | -                | -                | -         |    -7.04 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           76 |     1158 | 2026-05-18 | fnatic               | L   | 0.872      | -            | -                | -                | -         |    -5.28 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           75 |     1175 | 2026-05-17 | GenOne               | L   | 0.867      | -            | -                | -                | -         |   -12.65 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           74 |     1197 | 2026-05-16 | Young Ninjas         | W   | 0.861      | 0.344        | -                | 0.619 (0.184)    | -         |    14.71 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           73 |     1228 | 2026-05-15 | Just Players         | L   | 0.854      | -            | -                | -                | -         |   -14.93 | andr1x, aVN, brutmonster, Cjoffo, Kind0    |
|           72 |     1256 | 2026-05-14 | Young Ninjas         | W   | 0.847      | 0.344        | -                | 0.619 (0.181)    | -         |    14.62 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           71 |     1476 | 2026-05-07 | Nuclear TigeRES      | L   | 0.801      | -            | -                | -                | -         |    -2.70 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           70 |     1502 | 2026-05-06 | benched gods         | L   | 0.793      | -            | -                | -                | -         |   -18.53 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           69 |     1512 | 2026-05-05 | INOX Division        | L   | 0.787      | -            | -                | -                | -         |    -7.18 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           68 |     1575 | 2026-05-03 | Lilmix               | W   | 0.771      | -            | -                | -                | -         |    10.22 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           67 |     1605 | 2026-05-02 | ASTRAL               | W   | 0.766      | 0.435        | 0.012 (0.004)    | 0.898 (0.299)    | -         |    17.91 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           66 |     1664 | 2026-05-01 | Lavked               | W   | 0.759      | 0.435        | 0.016 (0.005)    | 0.929 (0.306)    | -         |    16.87 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           65 |     1785 | 2026-04-28 | CYBERSHOKE           | W   | 0.740      | 0.435        | 0.020 (0.006)    | 0.586 (0.188)    | -         |    19.10 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           64 |     2003 | 2026-04-24 | brazylijski luz      | L   | 0.714      | -            | -                | -                | -         |   -13.38 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           63 |     2061 | 2026-04-23 | The Last Resort      | L   | 0.706      | -            | -                | -                | -         |   -10.48 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           62 |     2098 | 2026-04-22 | Endless Journey      | W   | 0.699      | -            | -                | -                | -         |     7.49 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           61 |     2488 | 2026-04-05 | BIG                  | L   | 0.586      | -            | -                | -                | -         |    -0.91 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           60 |     2510 | 2026-04-05 | Mai Tai              | L   | 0.584      | -            | -                | -                | -         |    -9.26 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           59 |     2628 | 2026-04-03 | illwill              | L   | 0.574      | -            | -                | -                | -         |    -6.50 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           58 |     2641 | 2026-04-03 | Deorum               | W   | 0.573      | -            | -                | -                | 1 (0.573) |     1.42 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           57 |     2650 | 2026-04-03 | STATE                | L   | 0.572      | -            | -                | -                | -         |    -2.93 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           56 |     2723 | 2026-04-02 | RUSTEC               | L   | 0.568      | -            | -                | -                | -         |    -8.83 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           55 |     2846 | 2026-04-01 | OKSUCC               | W   | 0.559      | -            | -                | -                | -         |     1.35 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           54 |     2980 | 2026-03-30 | Ursa                 | L   | 0.548      | -            | -                | -                | -         |    -6.08 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           53 |     3021 | 2026-03-30 | Mai Tai              | W   | 0.545      | -            | -                | -                | -         |     8.21 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           52 |     3043 | 2026-03-29 | ReThink              | W   | 0.541      | -            | -                | -                | -         |     8.84 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           51 |     3176 | 2026-03-28 | Bebop                | L   | 0.533      | -            | -                | -                | -         |    -8.72 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           50 |     3356 | 2026-03-24 | MASONIC              | W   | 0.507      | -            | -                | -                | -         |    10.96 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           49 |     3454 | 2026-03-23 | rottweilers          | W   | 0.499      | -            | -                | -                | -         |     3.12 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           48 |     3565 | 2026-03-21 | Hashiras             | L   | 0.485      | -            | -                | -                | -         |    -9.30 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           47 |     3590 | 2026-03-20 | HAVU                 | L   | 0.482      | -            | -                | -                | -         |    -8.47 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           46 |     3604 | 2026-03-20 | home                 | W   | 0.481      | -            | -                | -                | -         |     1.89 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           45 |     3656 | 2026-03-19 | SINQU                | W   | 0.473      | -            | -                | -                | -         |     2.09 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           44 |     3662 | 2026-03-19 | MASONIC              | W   | 0.473      | -            | -                | -                | -         |    10.40 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           43 |     3683 | 2026-03-18 | BIG                  | L   | 0.468      | -            | -                | -                | -         |    -0.72 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           42 |     3689 | 2026-03-18 | Clutchain fe         | W   | 0.467      | -            | -                | -                | -         |     4.49 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           41 |     3690 | 2026-03-18 | yngods               | L   | 0.467      | -            | -                | -                | -         |   -10.70 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           40 |     3738 | 2026-03-17 | Nemesis              | L   | 0.460      | -            | -                | -                | -         |    -2.28 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           39 |     3776 | 2026-03-16 | Omega                | W   | 0.455      | 0.435        | 0.016 (0.003)    | -                | -         |    11.02 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           38 |     3786 | 2026-03-16 | HEROIC Academy       | W   | 0.454      | -            | -                | -                | -         |     6.97 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           37 |     3835 | 2026-03-15 | ex-RUBY              | L   | 0.446      | -            | -                | -                | -         |    -4.23 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           36 |     3922 | 2026-03-13 | Sangal               | W   | 0.433      | -            | -                | -                | -         |     8.07 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           35 |     4020 | 2026-03-11 | HOTU                 | L   | 0.420      | -            | -                | -                | -         |    -8.10 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           34 |     4058 | 2026-03-10 | HAVU                 | W   | 0.413      | -            | -                | -                | -         |     6.48 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           33 |     4060 | 2026-03-10 | HEROIC Academy       | L   | 0.413      | -            | -                | -                | -         |    -6.65 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           32 |     4100 | 2026-03-09 | megoshort            | L   | 0.408      | -            | -                | -                | -         |    -7.63 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           31 |     4105 | 2026-03-09 | Acend                | W   | 0.407      | 0.435        | 0.070 (0.012)    | -                | -         |    12.18 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           30 |     4122 | 2026-03-09 | FAVBET               | L   | 0.406      | -            | -                | -                | -         |    -6.27 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           29 |     4228 | 2026-03-07 | HAVU                 | W   | 0.395      | -            | -                | -                | -         |     6.28 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           28 |     4242 | 2026-03-07 | Oxuji                | W   | 0.394      | -            | -                | -                | -         |    10.57 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           27 |     4251 | 2026-03-07 | Omega                | W   | 0.393      | -            | -                | -                | -         |    10.07 | andr1x, aVN, brutmonster, Cjoffo, Kind0    |
|           26 |     4270 | 2026-03-06 | BASEMENT BOYS        | W   | 0.388      | -            | -                | -                | -         |    10.64 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           25 |     4313 | 2026-03-05 | NOVAQ                | L   | 0.382      | -            | -                | -                | -         |    -4.89 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           24 |     4335 | 2026-03-05 | Leo                  | L   | 0.380      | -            | -                | -                | -         |    -6.69 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           23 |     4346 | 2026-03-05 | MASONIC              | W   | 0.379      | -            | -                | -                | -         |     9.60 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           22 |     4404 | 2026-03-04 | PsychoFace           | L   | 0.372      | -            | -                | -                | -         |    -3.10 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           21 |     4405 | 2026-03-04 | FAVBET               | L   | 0.372      | -            | -                | -                | -         |    -5.57 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           20 |     4430 | 2026-03-03 | PsychoFace           | L   | 0.367      | -            | -                | -                | -         |    -3.22 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           19 |     4449 | 2026-03-03 | WW                   | W   | 0.366      | -            | -                | -                | -         |     8.76 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           18 |     4512 | 2026-03-01 | STATE                | W   | 0.354      | -            | -                | -                | -         |    10.12 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           17 |     4528 | 2026-03-01 | ASTRAL               | W   | 0.353      | -            | -                | -                | -         |     9.52 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           16 |     4741 | 2026-02-25 | ex-RUBY              | L   | 0.326      | -            | -                | -                | -         |    -3.07 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           15 |     4777 | 2026-02-24 | ARCRED               | L   | 0.320      | -            | -                | -                | -         |    -1.44 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           14 |     4815 | 2026-02-23 | Fuzos                | L   | 0.313      | -            | -                | -                | -         |    -6.32 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           13 |     4943 | 2026-02-21 | Oxuji                | L   | 0.300      | -            | -                | -                | -         |    -1.01 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           12 |     4976 | 2026-02-20 | OlyBet               | W   | 0.295      | -            | -                | -                | -         |     3.96 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           11 |     5046 | 2026-02-19 | Just Players         | L   | 0.286      | -            | -                | -                | -         |    -5.97 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           10 |     5089 | 2026-02-18 | Bushido Wildcats     | W   | 0.281      | -            | -                | -                | -         |     3.92 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|            9 |     5139 | 2026-02-17 | SPARTA               | L   | 0.275      | -            | -                | -                | -         |    -1.55 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|            8 |     5194 | 2026-02-16 | los kogutos          | L   | 0.267      | -            | -                | -                | -         |    -2.78 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|            7 |     5209 | 2026-02-16 | home                 | L   | 0.266      | -            | -                | -                | -         |    -7.00 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|            6 |     5276 | 2026-02-15 | UNiTY                | L   | 0.259      | -            | -                | -                | -         |    -4.54 | aVN, brutmonster, Cjoffo, KiMaRR, skizzyee |
|            5 |     5310 | 2026-02-14 | ALGO                 | L   | 0.254      | -            | -                | -                | -         |    -6.70 | aVN, brutmonster, Cjoffo, KiMaRR, skizzyee |
|            4 |     5372 | 2026-02-13 | Hashiras             | L   | 0.247      | -            | -                | -                | -         |    -4.68 | aVN, brutmonster, Cjoffo, KiMaRR, skizzyee |
|            3 |     5384 | 2026-02-13 | Lazer Cats           | L   | 0.246      | -            | -                | -                | -         |    -4.42 | aVN, brutmonster, Cjoffo, KiMaRR, skizzyee |
|            2 |     5462 | 2026-02-11 | Acend                | L   | 0.233      | -            | -                | -                | -         |    -0.27 | aVN, brutmonster, Cjoffo, KiMaRR, skizzyee |
|            1 |     5536 | 2026-02-08 | ASTRAL               | W   | 0.215      | -            | -                | -                | -         |     5.99 | aVN, brutmonster, Cjoffo, KiMaRR, skizzyee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,250.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-06 |      1.000 | $1,250.00      | $1,250.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
