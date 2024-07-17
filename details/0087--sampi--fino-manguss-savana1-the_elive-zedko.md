### Roster Details<br />
Team Name: Sampi<br />
Roster: fino, manguss, sAvana1, The eLiVe, ZEDKO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [87](../standings_global.md)<br />
Regional Rank: [63]( ../standings_europe.md)<br />
Final Rank Value:  946.2<br />
<br />
Final Rank Value (946.2) = Starting Rank Value (948.4) + Head To Head Adjustments (-2.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.425[<sup>1</sup>](#table2)
- Bounty Collected: 0.405[<sup>2</sup>](#table1)
- Opponent Network: 0.191[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.255<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 948.4
- 400 + ( ( 0.255 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 948.4


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
|           85 |       56 | 2024-07-16 | RUBY              | W   | 1.000      | 0.435        | 0.144 (0.063)    | 0.580 (0.252)    | 0 (0.000) |    16.08 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           84 |       65 | 2024-07-16 | Meteor            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.13 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           83 |      124 | 2024-07-14 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -15.78 | fino, M1key, sAvana1, T4gg3D, The eLiVe     |
|           82 |      126 | 2024-07-14 | Portugal          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.29 | fino, M1key, sAvana1, T4gg3D, The eLiVe     |
|           81 |      185 | 2024-07-10 | Hungary           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.40 | fino, M1key, sAvana1, T4gg3D, The eLiVe     |
|           80 |      225 | 2024-07-08 | Austria           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.64 | fino, M1key, MATYS, sAvana1, The eLiVe      |
|           79 |      427 | 2024-06-13 | Rebels            | W   | 0.974      | 0.379        | 0.052 (0.019)    | 0.575 (0.212)    | 0 (0.000) |    21.67 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           78 |      431 | 2024-06-13 | Sashi             | L   | 0.973      | -            | -                | -                | -         |    -3.90 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           77 |      457 | 2024-06-12 | Enterprise        | L   | 0.967      | -            | -                | -                | -         |   -11.58 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           76 |      478 | 2024-06-11 | Astralis Talent   | W   | 0.960      | -            | -                | -                | 0 (0.000) |     4.97 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           75 |      486 | 2024-06-11 | Illuminar         | L   | 0.958      | -            | -                | -                | -         |   -14.64 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           74 |      547 | 2024-06-09 | Aurora Young Blud | L   | 0.946      | -            | -                | -                | -         |   -19.20 | fino, manguss, sAvana1, The eLiVe, Verttzzz |
|           73 |      618 | 2024-06-08 | MOUZ NXT          | L   | 0.940      | -            | -                | -                | -         |    -7.37 | fino, manguss, sAvana1, The eLiVe, Verttzzz |
|           72 |      634 | 2024-06-08 | CYBERSHOKE        | L   | 0.938      | -            | -                | -                | -         |   -19.24 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           71 |      734 | 2024-06-06 | Nemiga            | L   | 0.927      | -            | -                | -                | -         |    -6.13 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           70 |      752 | 2024-06-06 | HAVU              | W   | 0.926      | -            | -                | -                | 0 (0.000) |     7.68 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           69 |      797 | 2024-06-05 | NAVI Junior       | W   | 0.920      | -            | -                | -                | 0 (0.000) |     3.09 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           68 |      834 | 2024-06-04 | INFINITE          | W   | 0.914      | -            | -                | -                | 0 (0.000) |     2.69 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           67 |      853 | 2024-06-04 | DMS               | W   | 0.912      | 0.500        | -                | 0.494 (0.225)    | -         |    16.27 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           66 |      876 | 2024-06-03 | Rare Atom         | W   | 0.905      | 0.435        | -                | 0.372 (0.146)    | -         |     5.05 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           65 |      926 | 2024-06-01 | SINNERS           | L   | 0.893      | -            | -                | -                | -         |    -8.52 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           64 |      947 | 2024-05-31 | ECLOT             | L   | 0.887      | -            | -                | -                | -         |    -7.06 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           63 |      966 | 2024-05-30 | 3DMAX             | L   | 0.881      | -            | -                | -                | -         |    -4.92 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           62 |     1025 | 2024-05-28 | Enterprise        | L   | 0.867      | -            | -                | -                | -         |   -13.38 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           61 |     1029 | 2024-05-28 | Rhyno             | W   | 0.866      | 0.435        | 0.108 (0.041)    | 0.401 (0.151)    | -         |    17.06 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           60 |     1064 | 2024-05-26 | SINNERS           | L   | 0.853      | -            | -                | -                | -         |    -9.35 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           59 |     1081 | 2024-05-25 | Passion UA        | L   | 0.847      | -            | -                | -                | -         |   -11.04 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           58 |     1112 | 2024-05-23 | GUN5              | W   | 0.835      | 0.435        | 0.110 (0.040)    | 0.477 (0.173)    | -         |    14.19 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           57 |     1146 | 2024-05-22 | VENI VIDI VICI    | W   | 0.828      | -            | -                | -                | -         |     1.09 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           56 |     1236 | 2024-05-20 | Illuminar         | W   | 0.813      | -            | -                | -                | -         |    11.99 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           55 |     1242 | 2024-05-20 | Verdant           | L   | 0.812      | -            | -                | -                | -         |   -16.18 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           54 |     1294 | 2024-05-18 | DMS               | L   | 0.799      | -            | -                | -                | -         |   -14.49 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           53 |     1362 | 2024-05-16 | MOUZ NXT          | L   | 0.787      | -            | -                | -                | -         |    -8.63 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           52 |     1373 | 2024-05-16 | B8                | L   | 0.785      | -            | -                | -                | -         |    -6.86 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           51 |     1498 | 2024-05-13 | Nexus             | W   | 0.765      | -            | -                | -                | -         |     7.34 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           50 |     1586 | 2024-05-09 | BLEED             | L   | 0.741      | -            | -                | -                | -         |    -6.54 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           49 |     1660 | 2024-05-05 | RUSH B            | W   | 0.714      | -            | -                | -                | -         |     7.97 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           48 |     1691 | 2024-05-04 | Endpoint          | L   | 0.705      | -            | -                | -                | -         |   -11.43 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           47 |     1725 | 2024-05-02 | Permitta          | W   | 0.693      | 0.435        | -                | 0.794 (0.239)    | -         |    10.23 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           46 |     1751 | 2024-05-01 | ALTERNATE aTTaX   | L   | 0.686      | -            | -                | -                | -         |    -9.59 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           45 |     1758 | 2024-05-01 | ENCE Academy      | W   | 0.685      | -            | -                | -                | -         |     4.93 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           44 |     1763 | 2024-04-30 | GL Academy        | W   | 0.681      | -            | -                | -                | -         |     5.69 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           43 |     1781 | 2024-04-30 | ALTERNATE aTTaX   | L   | 0.679      | -            | -                | -                | -         |    -9.80 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           42 |     1897 | 2024-04-25 | ECLOT             | L   | 0.645      | -            | -                | -                | -         |    -4.82 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           41 |     1917 | 2024-04-24 | Permitta          | W   | 0.638      | 0.371        | -                | 0.794 (0.188)    | -         |    10.40 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           40 |     1936 | 2024-04-23 | ECLOT             | L   | 0.632      | -            | -                | -                | -         |    -4.70 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           39 |     1972 | 2024-04-21 | ALTERNATE aTTaX   | W   | 0.618      | 0.371        | -                | 0.644 (0.148)    | -         |    10.16 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           38 |     2046 | 2024-04-19 | BLEED             | L   | 0.606      | -            | -                | -                | -         |    -6.08 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           37 |     2105 | 2024-04-18 | Permitta          | W   | 0.598      | 0.371        | -                | 0.794 (0.176)    | -         |     9.96 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           36 |     2126 | 2024-04-17 | NOM               | L   | 0.593      | -            | -                | -                | -         |   -17.25 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           35 |     2165 | 2024-04-16 | SAW               | W   | 0.586      | 0.384        | 0.147 (0.033)    | -                | -         |    15.40 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           34 |     2168 | 2024-04-16 | Secret            | W   | 0.585      | -            | -                | -                | -         |     1.83 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           33 |     2180 | 2024-04-15 | ENCE Academy      | L   | 0.580      | -            | -                | -                | -         |   -13.48 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           32 |     2214 | 2024-04-13 | BetBoom           | L   | 0.565      | -            | -                | -                | -         |    -0.60 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           31 |     2258 | 2024-04-11 | PGE Turow         | W   | 0.552      | -            | -                | -                | -         |     2.82 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           30 |     2430 | 2024-04-06 | Enterprise        | W   | 0.519      | -            | -                | -                | -         |     8.34 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           29 |     2532 | 2024-04-03 | Ninjas in Pyjamas | W   | 0.499      | 0.384        | 0.343 (0.066)    | -                | -         |    15.58 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           28 |     2659 | 2024-03-27 | B8                | L   | 0.454      | -            | -                | -                | -         |    -3.56 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           27 |     2800 | 2024-03-18 | ex-Preasy         | L   | 0.392      | -            | -                | -                | -         |    -7.26 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           26 |     2831 | 2024-03-17 | Passion UA        | W   | 0.385      | 0.371        | 0.087 (0.012)    | -                | -         |     6.85 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           25 |     2839 | 2024-03-16 | SINNERS           | L   | 0.380      | -            | -                | -                | -         |    -3.97 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           24 |     2842 | 2024-03-16 | MOUZ NXT          | W   | 0.379      | 0.371        | 0.150 (0.021)    | -                | -         |     7.98 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           23 |     2857 | 2024-03-15 | ECLOT             | L   | 0.374      | -            | -                | -                | -         |    -2.67 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           22 |     2861 | 2024-03-15 | Permitta          | W   | 0.372      | -            | -                | -                | -         |     6.55 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           21 |     2893 | 2024-03-14 | Passion UA        | L   | 0.366      | -            | -                | -                | -         |    -4.85 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           20 |     2962 | 2024-03-12 | MOUZ NXT          | W   | 0.352      | 0.371        | 0.150 (0.020)    | -                | -         |     7.65 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           19 |     3004 | 2024-03-10 | Sashi             | W   | 0.339      | 0.358        | 0.215 (0.026)    | -                | -         |     7.73 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           18 |     3028 | 2024-03-09 | Enterprise        | W   | 0.333      | -            | -                | -                | -         |     5.83 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           17 |     3113 | 2024-03-06 | AURA              | W   | 0.312      | -            | -                | -                | -         |     0.85 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           16 |     3162 | 2024-03-04 | Sangal            | L   | 0.299      | -            | -                | -                | -         |    -2.29 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           15 |     3215 | 2024-03-02 | Enterprise        | L   | 0.285      | -            | -                | -                | -         |    -3.88 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           14 |     3251 | 2024-02-28 | Sashi             | L   | 0.267      | -            | -                | -                | -         |    -2.22 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           13 |     3318 | 2024-02-25 | ECLOT             | L   | 0.245      | -            | -                | -                | -         |    -1.42 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           12 |     3364 | 2024-02-23 | Entropiq          | W   | 0.232      | -            | -                | -                | -         |     0.82 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           11 |     3407 | 2024-02-21 | Sashi             | L   | 0.219      | -            | -                | -                | -         |    -1.68 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           10 |     3510 | 2024-02-17 | Secret            | W   | 0.192      | -            | -                | -                | -         |     0.62 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|            9 |     3657 | 2024-02-10 | Zero Tenacity     | W   | 0.147      | -            | -                | -                | -         |     3.26 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            8 |     3716 | 2024-02-05 | Imperial fe       | W   | 0.113      | -            | -                | -                | -         |     2.68 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            7 |     3769 | 2024-02-03 | Sashi             | W   | 0.099      | -            | -                | -                | -         |     2.38 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            6 |     3823 | 2024-02-01 | Metizport         | L   | 0.087      | -            | -                | -                | -         |    -1.30 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            5 |     3967 | 2024-01-23 | ex-Guild Eagles   | L   | 0.027      | -            | -                | -                | -         |    -0.49 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            4 |     3971 | 2024-01-23 | Viperio           | L   | 0.027      | -            | -                | -                | -         |    -0.78 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            3 |     3989 | 2024-01-22 | Rebels            | W   | 0.021      | -            | -                | -                | -         |     0.42 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            2 |     3995 | 2024-01-22 | PERA              | W   | 0.020      | -            | -                | -                | -         |     0.37 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            1 |     3997 | 2024-01-22 | ALTERNATE aTTaX   | L   | 0.020      | -            | -                | -                | -         |    -0.21 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,925.58)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-13 |      0.975 | $3,268.00      | $3,185.16       |
| 2024-06-02 |      0.900 | $653.00        | $587.79         |
| 2024-05-18 |      0.801 | $1,000.00      | $800.69         |
| 2024-04-25 |      0.645 | $5,000.00      | $3,227.37       |
| 2024-04-14 |      0.573 | $1,600.00      | $916.93         |
| 2024-03-18 |      0.392 | $5,000.00      | $1,959.95       |
| 2024-03-17 |      0.388 | $639.00        | $247.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
