### Roster Details<br />
Team Name: Slovakia<br />
Roster: fino, M1key, sAvana1, T4gg3D, The eLiVe<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [90](../standings_global.md)<br />
Regional Rank: [64]( ../standings_europe.md)<br />
Final Rank Value:  927.5<br />
<br />
Final Rank Value (927.5) = Starting Rank Value (932.9) + Head To Head Adjustments (-5.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.426[<sup>1</sup>](#table2)
- Bounty Collected: 0.398[<sup>2</sup>](#table1)
- Opponent Network: 0.187[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.253<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 932.9
- 400 + ( ( 0.253 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 932.9


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
|           81 |       21 | 2024-07-10 | Hungary           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.47 | fino, M1key, sAvana1, T4gg3D, The eLiVe     |
|           80 |       61 | 2024-07-08 | Austria           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.65 | fino, M1key, MATYS, sAvana1, The eLiVe      |
|           79 |      263 | 2024-06-13 | Rebels            | W   | 1.000      | 0.379        | 0.053 (0.020)    | 0.551 (0.209)    | 0 (0.000) |    22.87 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           78 |      267 | 2024-06-13 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -3.48 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           77 |      293 | 2024-06-12 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -11.76 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           76 |      314 | 2024-06-11 | Astralis Talent   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.19 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           75 |      322 | 2024-06-11 | Illuminar         | L   | 0.998      | -            | -                | -                | -         |   -12.22 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           74 |      383 | 2024-06-09 | Aurora Young Blud | L   | 0.986      | -            | -                | -                | -         |   -20.77 | fino, manguss, sAvana1, The eLiVe, Verttzzz |
|           73 |      454 | 2024-06-08 | MOUZ NXT          | L   | 0.979      | -            | -                | -                | -         |    -7.35 | fino, manguss, sAvana1, The eLiVe, Verttzzz |
|           72 |      470 | 2024-06-08 | CYBERSHOKE        | L   | 0.978      | -            | -                | -                | -         |   -20.00 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           71 |      570 | 2024-06-06 | Nemiga            | L   | 0.966      | -            | -                | -                | -         |    -6.08 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           70 |      588 | 2024-06-06 | HAVU              | W   | 0.965      | -            | -                | -                | 0 (0.000) |     8.16 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           69 |      633 | 2024-06-05 | NAVI Junior       | W   | 0.959      | -            | -                | -                | 0 (0.000) |     3.11 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           68 |      670 | 2024-06-04 | INFINITE          | W   | 0.954      | -            | -                | -                | 0 (0.000) |     2.61 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           67 |      689 | 2024-06-04 | DMS               | W   | 0.951      | 0.500        | -                | 0.471 (0.224)    | 0 (0.000) |    17.18 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           66 |      712 | 2024-06-03 | Rare Atom         | W   | 0.945      | -            | -                | -                | 0 (0.000) |     5.34 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           65 |      762 | 2024-06-01 | SINNERS           | L   | 0.932      | -            | -                | -                | -         |    -8.64 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           64 |      783 | 2024-05-31 | Czech Republic    | L   | 0.927      | -            | -                | -                | -         |    -7.32 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           63 |      802 | 2024-05-30 | 3DMAX             | L   | 0.921      | -            | -                | -                | -         |    -4.86 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           62 |      861 | 2024-05-28 | Enterprise        | L   | 0.907      | -            | -                | -                | -         |   -13.87 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           61 |      865 | 2024-05-28 | Rhyno             | W   | 0.905      | 0.435        | 0.107 (0.042)    | 0.377 (0.149)    | 0 (0.000) |    18.09 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           60 |      900 | 2024-05-26 | SINNERS           | L   | 0.893      | -            | -                | -                | -         |    -9.51 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           59 |      917 | 2024-05-25 | Passion UA        | L   | 0.887      | -            | -                | -                | -         |   -11.32 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           58 |      948 | 2024-05-23 | GUN5              | W   | 0.874      | 0.435        | 0.109 (0.041)    | 0.450 (0.171)    | -         |    14.95 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           57 |      982 | 2024-05-22 | VENI VIDI VICI    | W   | 0.868      | -            | -                | -                | -         |     1.18 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           56 |     1072 | 2024-05-20 | Illuminar         | W   | 0.853      | -            | -                | -                | -         |     5.83 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           55 |     1078 | 2024-05-20 | Verdant           | L   | 0.852      | -            | -                | -                | -         |   -17.13 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           54 |     1130 | 2024-05-18 | DMS               | L   | 0.839      | -            | -                | -                | -         |   -15.38 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           53 |     1198 | 2024-05-16 | MOUZ NXT          | L   | 0.826      | -            | -                | -                | -         |    -8.86 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           52 |     1209 | 2024-05-16 | B8                | L   | 0.825      | -            | -                | -                | -         |    -6.84 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           51 |     1334 | 2024-05-13 | Romania           | W   | 0.805      | -            | -                | -                | -         |     7.49 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           50 |     1422 | 2024-05-09 | BLEED             | L   | 0.781      | -            | -                | -                | -         |    -3.21 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           49 |     1496 | 2024-05-05 | RUSH B            | W   | 0.754      | -            | -                | -                | -         |     8.77 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           48 |     1527 | 2024-05-04 | Endpoint          | L   | 0.745      | -            | -                | -                | -         |   -11.98 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           47 |     1561 | 2024-05-02 | Permitta          | W   | 0.733      | 0.435        | 0.038 (0.012)    | 0.837 (0.267)    | -         |    10.98 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           46 |     1587 | 2024-05-01 | ALTERNATE aTTaX   | L   | 0.726      | -            | -                | -                | -         |   -10.13 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           45 |     1594 | 2024-05-01 | ENCE Academy      | W   | 0.725      | -            | -                | -                | -         |     5.26 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           44 |     1599 | 2024-04-30 | GL Academy        | W   | 0.721      | -            | -                | -                | -         |     6.01 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           43 |     1617 | 2024-04-30 | ALTERNATE aTTaX   | L   | 0.718      | -            | -                | -                | -         |   -10.38 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           42 |     1733 | 2024-04-25 | Czech Republic    | L   | 0.685      | -            | -                | -                | -         |    -5.08 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           41 |     1753 | 2024-04-24 | Permitta          | W   | 0.678      | 0.371        | -                | 0.837 (0.210)    | -         |    11.07 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           40 |     1772 | 2024-04-23 | Czech Republic    | L   | 0.672      | -            | -                | -                | -         |    -4.96 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           39 |     1808 | 2024-04-21 | ALTERNATE aTTaX   | W   | 0.658      | 0.371        | -                | 0.577 (0.141)    | -         |    10.70 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           38 |     1882 | 2024-04-19 | BLEED             | L   | 0.645      | -            | -                | -                | -         |    -2.10 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           37 |     1941 | 2024-04-18 | Permitta          | W   | 0.638      | 0.371        | -                | 0.837 (0.198)    | -         |    10.80 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           36 |     1962 | 2024-04-17 | NOM               | L   | 0.632      | -            | -                | -                | -         |   -18.34 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           35 |     2001 | 2024-04-16 | SAW               | W   | 0.625      | 0.384        | 0.147 (0.035)    | -                | -         |    16.68 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           34 |     2004 | 2024-04-16 | Secret            | W   | 0.625      | -            | -                | -                | -         |     2.07 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           33 |     2016 | 2024-04-15 | ENCE Academy      | L   | 0.619      | -            | -                | -                | -         |   -14.19 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           32 |     2050 | 2024-04-13 | BetBoom           | L   | 0.605      | -            | -                | -                | -         |    -0.58 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           31 |     2094 | 2024-04-11 | PGE Turow         | W   | 0.591      | -            | -                | -                | -         |     3.18 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           30 |     2266 | 2024-04-06 | Enterprise        | W   | 0.558      | -            | -                | -                | -         |     9.33 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           29 |     2368 | 2024-04-03 | Ninjas in Pyjamas | W   | 0.538      | 0.384        | 0.340 (0.070)    | -                | -         |    16.81 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           28 |     2495 | 2024-03-27 | B8                | L   | 0.493      | -            | -                | -                | -         |    -3.65 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           27 |     2636 | 2024-03-18 | ex-Preasy         | L   | 0.432      | -            | -                | -                | -         |    -7.56 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           26 |     2667 | 2024-03-17 | Passion UA        | W   | 0.425      | 0.371        | 0.087 (0.014)    | -                | -         |     7.60 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           25 |     2675 | 2024-03-16 | SINNERS           | L   | 0.419      | -            | -                | -                | -         |    -4.33 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           24 |     2678 | 2024-03-16 | MOUZ NXT          | W   | 0.418      | 0.371        | 0.152 (0.024)    | 1.000 (0.155)    | -         |     8.93 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           23 |     2693 | 2024-03-15 | Czech Republic    | L   | 0.413      | -            | -                | -                | -         |    -2.84 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           22 |     2697 | 2024-03-15 | Permitta          | W   | 0.412      | -            | -                | -                | -         |     7.44 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           21 |     2729 | 2024-03-14 | Passion UA        | L   | 0.406      | -            | -                | -                | -         |    -5.30 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           20 |     2798 | 2024-03-12 | MOUZ NXT          | W   | 0.391      | 0.371        | 0.152 (0.022)    | 1.000 (0.145)    | -         |     8.66 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           19 |     2840 | 2024-03-10 | Sashi             | W   | 0.379      | 0.358        | 0.202 (0.027)    | -                | -         |     8.73 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           18 |     2864 | 2024-03-09 | Enterprise        | W   | 0.372      | -            | -                | -                | -         |     6.79 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           17 |     2949 | 2024-03-06 | AURA              | W   | 0.351      | -            | -                | -                | -         |     1.04 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           16 |     2998 | 2024-03-04 | Sangal            | L   | 0.339      | -            | -                | -                | -         |    -2.47 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           15 |     3051 | 2024-03-02 | Enterprise        | L   | 0.325      | -            | -                | -                | -         |    -4.15 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           14 |     3087 | 2024-02-28 | Sashi             | L   | 0.306      | -            | -                | -                | -         |    -2.45 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           13 |     3154 | 2024-02-25 | Czech Republic    | L   | 0.285      | -            | -                | -                | -         |    -1.54 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           12 |     3200 | 2024-02-23 | Entropiq          | W   | 0.271      | -            | -                | -                | -         |     1.04 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           11 |     3243 | 2024-02-21 | Sashi             | L   | 0.259      | -            | -                | -                | -         |    -1.88 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           10 |     3346 | 2024-02-17 | Secret            | W   | 0.232      | -            | -                | -                | -         |     0.81 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|            9 |     3493 | 2024-02-10 | Zero Tenacity     | W   | 0.187      | -            | -                | -                | -         |     4.25 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            8 |     3552 | 2024-02-05 | Imperial fe       | W   | 0.153      | -            | -                | -                | -         |     3.69 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            7 |     3605 | 2024-02-03 | Sashi             | W   | 0.139      | -            | -                | -                | -         |     3.40 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            6 |     3659 | 2024-02-01 | Metizport         | L   | 0.126      | -            | -                | -                | -         |    -1.82 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            5 |     3803 | 2024-01-23 | ex-Guild Eagles   | L   | 0.067      | -            | -                | -                | -         |    -1.14 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            4 |     3807 | 2024-01-23 | Viperio           | L   | 0.066      | -            | -                | -                | -         |    -1.91 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            3 |     3825 | 2024-01-22 | Rebels            | W   | 0.060      | -            | -                | -                | -         |     1.31 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            2 |     3831 | 2024-01-22 | PERA              | W   | 0.060      | -            | -                | -                | -         |     1.11 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            1 |     3833 | 2024-01-22 | ALTERNATE aTTaX   | L   | 0.060      | -            | -                | -                | -         |    -0.60 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,558.69)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-13 |      1.000 | $3,268.00      | $3,268.00       |
| 2024-06-02 |      0.940 | $653.00        | $613.66         |
| 2024-05-18 |      0.840 | $1,000.00      | $840.30         |
| 2024-04-25 |      0.685 | $5,000.00      | $3,425.42       |
| 2024-04-14 |      0.613 | $1,600.00      | $980.31         |
| 2024-03-18 |      0.432 | $5,000.00      | $2,158.00       |
| 2024-03-17 |      0.427 | $639.00        | $273.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
