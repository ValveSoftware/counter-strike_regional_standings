### Roster Details<br />
Team Name: Sampi<br />
Roster: fino, manguss, sAvana1, The eLiVe, ZEDKO<br />
Global Rank: [94](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [67]( ../standings_europe.md)<br />
<br />
Final Rank Value:  888.4<br />
<br />
Final Rank Value (888.4) = Starting Rank Value (886.5) + Head To Head Adjustments (1.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.389[<sup>1</sup>](#table2)
- Bounty Collected: 0.374[<sup>2</sup>](#table1)
- Opponent Network: 0.183[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.236<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 886.5
- 400 + ( ( 0.236 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 886.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           94 |       37 | 2024-08-05 | Alliance          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    13.40 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           93 |      174 | 2024-08-01 | BC.Game           | L   | 1.000      | -            | -                | -                | -         |   -14.26 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           92 |      184 | 2024-08-01 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -16.84 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           91 |      215 | 2024-07-31 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -13.55 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           90 |      233 | 2024-07-31 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |   -15.47 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           89 |      272 | 2024-07-30 | CYBERSHOKE        | W   | 1.000      | 0.426        | 0.039 (0.017)    | 0.378 (0.161)    | 0 (0.000) |    16.73 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           88 |      275 | 2024-07-30 | Monte Gen         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.02 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           87 |      307 | 2024-07-29 | CYBERSHOKE        | L   | 1.000      | -            | -                | -                | -         |   -15.01 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           86 |      328 | 2024-07-28 | CPH Wolves        | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.66 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           85 |      377 | 2024-07-26 | Endpoint          | W   | 1.000      | 0.435        | -                | 0.540 (0.235)    | 0 (0.000) |    12.67 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           84 |      384 | 2024-07-26 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -1.43 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           83 |      457 | 2024-07-24 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -12.77 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           82 |      490 | 2024-07-23 | CPH Wolves        | W   | 1.000      | -            | -                | -                | 0 (0.000) |    13.34 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           81 |      529 | 2024-07-22 | INFINITE          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.14 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           80 |      542 | 2024-07-21 | WOPA              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.08 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           79 |      617 | 2024-07-19 | Metizport         | L   | 1.000      | -            | -                | -                | -         |   -12.95 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           78 |      663 | 2024-07-18 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -14.64 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           77 |      794 | 2024-07-16 | RUBY              | W   | 1.000      | 0.435        | 0.095 (0.041)    | 0.479 (0.208)    | 0 (0.000) |    15.21 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           76 |      803 | 2024-07-16 | Meteor            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.54 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           75 |      862 | 2024-07-14 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -15.95 | fino, M1key, sAvana1, T4gg3D, The eLiVe     |
|           74 |      864 | 2024-07-14 | Portugal          | W   | 1.000      | -            | -                | -                | -         |     6.38 | fino, M1key, sAvana1, T4gg3D, The eLiVe     |
|           73 |      923 | 2024-07-10 | Hungary           | W   | 1.000      | -            | -                | -                | -         |    10.96 | fino, M1key, sAvana1, T4gg3D, The eLiVe     |
|           72 |      963 | 2024-07-08 | Austria           | W   | 1.000      | -            | -                | -                | -         |     1.81 | fino, M1key, MATYS, sAvana1, The eLiVe      |
|           71 |     1165 | 2024-06-13 | Rebels            | W   | 0.840      | 0.379        | 0.038 (0.012)    | 0.578 (0.184)    | -         |    17.52 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           70 |     1169 | 2024-06-13 | Sashi             | L   | 0.839      | -            | -                | -                | -         |    -3.67 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           69 |     1195 | 2024-06-12 | Enterprise        | L   | 0.833      | -            | -                | -                | -         |   -11.08 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           68 |     1216 | 2024-06-11 | Astralis Talent   | W   | 0.826      | -            | -                | -                | -         |     8.02 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           67 |     1224 | 2024-06-11 | Illuminar         | L   | 0.825      | -            | -                | -                | -         |   -12.53 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           66 |     1285 | 2024-06-09 | Aurora Young Blud | L   | 0.813      | -            | -                | -                | -         |   -12.95 | fino, manguss, sAvana1, The eLiVe, Verttzzz |
|           65 |     1356 | 2024-06-08 | MOUZ NXT          | L   | 0.806      | -            | -                | -                | -         |    -6.48 | fino, manguss, sAvana1, The eLiVe, Verttzzz |
|           64 |     1372 | 2024-06-08 | CYBERSHOKE        | L   | 0.805      | -            | -                | -                | -         |   -14.88 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           63 |     1472 | 2024-06-06 | Nemiga            | L   | 0.793      | -            | -                | -                | -         |    -6.33 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           62 |     1490 | 2024-06-06 | HAVU              | W   | 0.792      | -            | -                | -                | -         |     6.01 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           61 |     1535 | 2024-06-05 | NAVI Junior       | W   | 0.786      | -            | -                | -                | -         |     6.03 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           60 |     1572 | 2024-06-04 | INFINITE          | W   | 0.780      | -            | -                | -                | -         |     2.89 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           59 |     1591 | 2024-06-04 | DMS               | W   | 0.778      | 0.500        | -                | 0.428 (0.166)    | -         |    14.28 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           58 |     1614 | 2024-06-03 | Rare Atom         | W   | 0.771      | 0.435        | -                | 0.465 (0.156)    | -         |     9.85 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           57 |     1664 | 2024-06-01 | SINNERS           | L   | 0.759      | -            | -                | -                | -         |    -6.20 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           56 |     1685 | 2024-05-31 | ECLOT             | L   | 0.754      | -            | -                | -                | -         |    -3.71 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           55 |     1704 | 2024-05-30 | 3DMAX             | L   | 0.748      | -            | -                | -                | -         |    -0.61 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           54 |     1763 | 2024-05-28 | Enterprise        | L   | 0.733      | -            | -                | -                | -         |   -11.60 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           53 |     1767 | 2024-05-28 | Rhyno             | W   | 0.732      | 0.435        | 0.071 (0.022)    | -                | -         |    13.92 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           52 |     1802 | 2024-05-26 | SINNERS           | L   | 0.720      | -            | -                | -                | -         |    -6.31 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           51 |     1819 | 2024-05-25 | Passion UA        | L   | 0.713      | -            | -                | -                | -         |    -7.33 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           50 |     1850 | 2024-05-23 | GUN5              | W   | 0.701      | 0.435        | 0.072 (0.022)    | 0.550 (0.168)    | -         |    12.00 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           49 |     1884 | 2024-05-22 | VENI VIDI VICI    | W   | 0.694      | -            | -                | -                | -         |     1.20 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           48 |     1974 | 2024-05-20 | Illuminar         | W   | 0.680      | -            | -                | -                | -         |    10.74 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           47 |     1980 | 2024-05-20 | Verdant           | L   | 0.679      | -            | -                | -                | -         |   -10.31 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           46 |     2032 | 2024-05-18 | DMS               | L   | 0.666      | -            | -                | -                | -         |   -10.59 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           45 |     2100 | 2024-05-16 | MOUZ NXT          | L   | 0.653      | -            | -                | -                | -         |    -6.75 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           44 |     2111 | 2024-05-16 | B8                | L   | 0.652      | -            | -                | -                | -         |    -5.59 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           43 |     2236 | 2024-05-13 | Nexus             | W   | 0.632      | -            | -                | -                | -         |     6.92 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           42 |     2324 | 2024-05-09 | BLEED             | L   | 0.607      | -            | -                | -                | -         |    -6.16 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           41 |     2398 | 2024-05-05 | RUSH B            | W   | 0.580      | -            | -                | -                | -         |     7.83 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           40 |     2429 | 2024-05-04 | Endpoint          | L   | 0.572      | -            | -                | -                | -         |    -8.76 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           39 |     2463 | 2024-05-02 | Permitta          | W   | 0.560      | 0.435        | -                | 0.919 (0.224)    | -         |     9.63 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           38 |     2489 | 2024-05-01 | ALTERNATE aTTaX   | L   | 0.552      | -            | -                | -                | -         |    -7.39 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           37 |     2496 | 2024-05-01 | ENCE Academy      | W   | 0.551      | -            | -                | -                | -         |     4.01 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           36 |     2501 | 2024-04-30 | GL Academy        | W   | 0.548      | -            | -                | -                | -         |     4.84 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           35 |     2519 | 2024-04-30 | ALTERNATE aTTaX   | L   | 0.545      | -            | -                | -                | -         |    -7.49 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           34 |     2635 | 2024-04-25 | ECLOT             | L   | 0.512      | -            | -                | -                | -         |    -2.02 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           33 |     2655 | 2024-04-24 | Permitta          | W   | 0.504      | 0.371        | -                | 0.919 (0.172)    | -         |     9.57 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           32 |     2674 | 2024-04-23 | ECLOT             | L   | 0.498      | -            | -                | -                | -         |    -1.91 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           31 |     2710 | 2024-04-21 | ALTERNATE aTTaX   | W   | 0.485      | -            | -                | -                | -         |     8.53 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           30 |     2784 | 2024-04-19 | BLEED             | L   | 0.472      | -            | -                | -                | -         |    -5.51 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           29 |     2843 | 2024-04-18 | Permitta          | W   | 0.464      | 0.371        | -                | 0.919 (0.158)    | -         |     9.03 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           28 |     2864 | 2024-04-17 | NOM               | L   | 0.459      | -            | -                | -                | -         |   -12.87 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           27 |     2903 | 2024-04-16 | SAW               | W   | 0.452      | 0.384        | 0.104 (0.018)    | -                | -         |    11.52 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           26 |     2906 | 2024-04-16 | Secret            | W   | 0.451      | -            | -                | -                | -         |     1.69 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           25 |     2918 | 2024-04-15 | ENCE Academy      | L   | 0.446      | -            | -                | -                | -         |   -10.45 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           24 |     2952 | 2024-04-13 | BetBoom           | L   | 0.432      | -            | -                | -                | -         |    -0.83 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           23 |     2996 | 2024-04-11 | PGE Turow         | W   | 0.418      | -            | -                | -                | -         |     2.47 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           22 |     3168 | 2024-04-06 | Enterprise        | W   | 0.385      | -            | -                | -                | -         |     6.18 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           21 |     3270 | 2024-04-03 | Ninjas in Pyjamas | W   | 0.365      | 0.384        | 0.253 (0.036)    | -                | -         |    11.36 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           20 |     3397 | 2024-03-27 | B8                | L   | 0.320      | -            | -                | -                | -         |    -2.59 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           19 |     3538 | 2024-03-18 | ex-Preasy         | L   | 0.258      | -            | -                | -                | -         |    -5.23 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           18 |     3569 | 2024-03-17 | Passion UA        | W   | 0.252      | 0.371        | 0.173 (0.016)    | -                | -         |     5.75 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           17 |     3577 | 2024-03-16 | SINNERS           | L   | 0.246      | -            | -                | -                | -         |    -1.60 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           16 |     3580 | 2024-03-16 | MOUZ NXT          | W   | 0.245      | 0.371        | 0.139 (0.013)    | -                | -         |     5.33 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           15 |     3595 | 2024-03-15 | ECLOT             | L   | 0.240      | -            | -                | -                | -         |    -0.82 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           14 |     3599 | 2024-03-15 | Permitta          | W   | 0.238      | -            | -                | -                | -         |     4.83 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           13 |     3631 | 2024-03-14 | Passion UA        | L   | 0.232      | -            | -                | -                | -         |    -1.91 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           12 |     3700 | 2024-03-12 | MOUZ NXT          | W   | 0.218      | -            | -                | -                | -         |     4.85 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           11 |     3742 | 2024-03-10 | Sashi             | W   | 0.206      | 0.358        | 0.184 (0.014)    | -                | -         |     5.22 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           10 |     3766 | 2024-03-09 | Enterprise        | W   | 0.199      | -            | -                | -                | -         |     3.40 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|            9 |     3851 | 2024-03-06 | AURA              | W   | 0.178      | -            | -                | -                | -         |     0.56 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|            8 |     3900 | 2024-03-04 | Sangal            | L   | 0.165      | -            | -                | -                | -         |    -0.92 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|            7 |     3953 | 2024-03-02 | Enterprise        | L   | 0.151      | -            | -                | -                | -         |    -2.15 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|            6 |     3989 | 2024-02-28 | Sashi             | L   | 0.133      | -            | -                | -                | -         |    -0.78 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|            5 |     4056 | 2024-02-25 | ECLOT             | L   | 0.112      | -            | -                | -                | -         |    -0.31 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|            4 |     4102 | 2024-02-23 | Entropiq          | W   | 0.098      | -            | -                | -                | -         |     0.40 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|            3 |     4145 | 2024-02-21 | Sashi             | L   | 0.086      | -            | -                | -                | -         |    -0.48 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|            2 |     4248 | 2024-02-17 | Secret            | W   | 0.059      | -            | -                | -                | -         |     0.23 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|            1 |     4395 | 2024-02-10 | Zero Tenacity     | W   | 0.013      | -            | -                | -                | -         |     0.33 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,631.68)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-13 |      0.841 | $3,268.00      | $2,748.30       |
| 2024-06-02 |      0.766 | $653.00        | $500.50         |
| 2024-05-18 |      0.667 | $1,000.00      | $667.02         |
| 2024-04-25 |      0.512 | $5,000.00      | $2,558.98       |
| 2024-04-14 |      0.439 | $1,600.00      | $703.05         |
| 2024-03-18 |      0.258 | $5,000.00      | $1,291.57       |
| 2024-03-17 |      0.254 | $639.00        | $162.27         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
