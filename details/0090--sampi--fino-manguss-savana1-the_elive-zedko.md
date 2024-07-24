### Roster Details<br />
Team Name: Sampi<br />
Roster: fino, manguss, sAvana1, The eLiVe, ZEDKO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [90](../standings_global.md)<br />
Regional Rank: [64]( ../standings_europe.md)<br />
Final Rank Value:  897.4<br />
<br />
Final Rank Value (897.4) = Starting Rank Value (903.1) + Head To Head Adjustments (-5.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.410[<sup>1</sup>](#table2)
- Bounty Collected: 0.395[<sup>2</sup>](#table1)
- Opponent Network: 0.188[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.249<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 903.1
- 400 + ( ( 0.249 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 903.1


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
|           86 |        7 | 2024-07-24 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -13.64 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           85 |       40 | 2024-07-23 | CPH Wolves        | W   | 1.000      | 0.435        | -                | 0.388 (0.169)    | 0 (0.000) |    13.65 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           84 |       79 | 2024-07-22 | INFINITE          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.28 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           83 |       92 | 2024-07-21 | WOPA              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.31 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           82 |      167 | 2024-07-19 | Metizport         | L   | 1.000      | -            | -                | -                | -         |   -12.04 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           81 |      213 | 2024-07-18 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -17.20 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           80 |      344 | 2024-07-16 | RUBY              | W   | 1.000      | 0.435        | 0.122 (0.053)    | 0.575 (0.250)    | 0 (0.000) |    15.66 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           79 |      353 | 2024-07-16 | Meteor            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.96 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           78 |      412 | 2024-07-14 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -15.91 | fino, M1key, sAvana1, T4gg3D, The eLiVe     |
|           77 |      414 | 2024-07-14 | Portugal          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.24 | fino, M1key, sAvana1, T4gg3D, The eLiVe     |
|           76 |      473 | 2024-07-10 | Hungary           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.09 | fino, M1key, sAvana1, T4gg3D, The eLiVe     |
|           75 |      513 | 2024-07-08 | Austria           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.91 | fino, M1key, MATYS, sAvana1, The eLiVe      |
|           74 |      715 | 2024-06-13 | Rebels            | W   | 0.927      | 0.379        | 0.053 (0.018)    | 0.661 (0.232)    | 0 (0.000) |    20.41 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           73 |      719 | 2024-06-13 | Sashi             | L   | 0.926      | -            | -                | -                | -         |    -3.66 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           72 |      745 | 2024-06-12 | Enterprise        | L   | 0.919      | -            | -                | -                | -         |   -11.43 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           71 |      766 | 2024-06-11 | Astralis Talent   | W   | 0.913      | -            | -                | -                | 0 (0.000) |     9.88 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           70 |      774 | 2024-06-11 | Illuminar         | L   | 0.911      | -            | -                | -                | -         |   -13.65 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           69 |      835 | 2024-06-09 | Aurora Young Blud | L   | 0.899      | -            | -                | -                | -         |   -17.21 | fino, manguss, sAvana1, The eLiVe, Verttzzz |
|           68 |      906 | 2024-06-08 | MOUZ NXT          | L   | 0.893      | -            | -                | -                | -         |    -7.13 | fino, manguss, sAvana1, The eLiVe, Verttzzz |
|           67 |      922 | 2024-06-08 | CYBERSHOKE        | L   | 0.891      | -            | -                | -                | -         |   -18.03 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           66 |     1022 | 2024-06-06 | Nemiga            | L   | 0.879      | -            | -                | -                | -         |    -6.45 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           65 |     1040 | 2024-06-06 | HAVU              | W   | 0.878      | -            | -                | -                | -         |     7.38 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           64 |     1085 | 2024-06-05 | NAVI Junior       | W   | 0.873      | -            | -                | -                | -         |     3.27 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           63 |     1122 | 2024-06-04 | INFINITE          | W   | 0.867      | -            | -                | -                | -         |     3.22 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           62 |     1141 | 2024-06-04 | DMS               | W   | 0.864      | 0.500        | -                | 0.461 (0.199)    | -         |    15.26 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           61 |     1164 | 2024-06-03 | Rare Atom         | W   | 0.858      | -            | -                | -                | -         |     5.14 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           60 |     1214 | 2024-06-01 | SINNERS           | L   | 0.845      | -            | -                | -                | -         |    -8.38 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           59 |     1235 | 2024-05-31 | ECLOT             | L   | 0.840      | -            | -                | -                | -         |    -7.22 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           58 |     1254 | 2024-05-30 | 3DMAX             | L   | 0.834      | -            | -                | -                | -         |    -4.23 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           57 |     1313 | 2024-05-28 | Enterprise        | L   | 0.820      | -            | -                | -                | -         |   -12.85 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           56 |     1317 | 2024-05-28 | Rhyno             | W   | 0.818      | 0.435        | 0.091 (0.032)    | 0.453 (0.161)    | -         |    16.19 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           55 |     1352 | 2024-05-26 | SINNERS           | L   | 0.806      | -            | -                | -                | -         |    -9.12 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           54 |     1369 | 2024-05-25 | Passion UA        | L   | 0.800      | -            | -                | -                | -         |    -9.06 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           53 |     1400 | 2024-05-23 | GUN5              | W   | 0.787      | 0.435        | 0.093 (0.032)    | 0.489 (0.167)    | -         |    13.27 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           52 |     1434 | 2024-05-22 | VENI VIDI VICI    | W   | 0.781      | -            | -                | -                | -         |     1.27 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           51 |     1524 | 2024-05-20 | Illuminar         | W   | 0.766      | -            | -                | -                | -         |    11.71 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           50 |     1530 | 2024-05-20 | Verdant           | L   | 0.765      | -            | -                | -                | -         |   -11.68 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           49 |     1582 | 2024-05-18 | DMS               | L   | 0.752      | -            | -                | -                | -         |   -13.68 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           48 |     1650 | 2024-05-16 | MOUZ NXT          | L   | 0.739      | -            | -                | -                | -         |    -8.02 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           47 |     1661 | 2024-05-16 | B8                | L   | 0.738      | -            | -                | -                | -         |    -6.53 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           46 |     1786 | 2024-05-13 | Nexus             | W   | 0.718      | 0.435        | -                | 0.480 (0.150)    | -         |     7.58 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           45 |     1874 | 2024-05-09 | BLEED             | L   | 0.694      | -            | -                | -                | -         |    -6.56 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           44 |     1948 | 2024-05-05 | RUSH B            | W   | 0.667      | -            | -                | -                | -         |     7.99 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           43 |     1979 | 2024-05-04 | Endpoint          | L   | 0.658      | -            | -                | -                | -         |   -10.29 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           42 |     2013 | 2024-05-02 | Permitta          | W   | 0.646      | 0.435        | -                | 0.790 (0.222)    | -         |     9.96 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           41 |     2039 | 2024-05-01 | ALTERNATE aTTaX   | L   | 0.639      | -            | -                | -                | -         |    -8.74 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           40 |     2046 | 2024-05-01 | ENCE Academy      | W   | 0.638      | -            | -                | -                | -         |     4.83 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           39 |     2051 | 2024-04-30 | GL Academy        | W   | 0.634      | -            | -                | -                | -         |     5.60 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           38 |     2069 | 2024-04-30 | ALTERNATE aTTaX   | L   | 0.631      | -            | -                | -                | -         |    -8.88 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           37 |     2185 | 2024-04-25 | ECLOT             | L   | 0.598      | -            | -                | -                | -         |    -4.82 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           36 |     2205 | 2024-04-24 | Permitta          | W   | 0.591      | 0.371        | -                | 0.790 (0.173)    | -         |    10.06 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           35 |     2224 | 2024-04-23 | ECLOT             | L   | 0.585      | -            | -                | -                | -         |    -4.70 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           34 |     2260 | 2024-04-21 | ALTERNATE aTTaX   | W   | 0.571      | -            | -                | -                | -         |     9.63 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           33 |     2334 | 2024-04-19 | BLEED             | L   | 0.558      | -            | -                | -                | -         |    -6.07 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           32 |     2393 | 2024-04-18 | Permitta          | W   | 0.551      | 0.371        | -                | 0.790 (0.161)    | -         |     9.49 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           31 |     2414 | 2024-04-17 | NOM               | L   | 0.546      | -            | -                | -                | -         |   -15.61 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           30 |     2453 | 2024-04-16 | SAW               | W   | 0.538      | 0.384        | 0.121 (0.025)    | -                | -         |    13.82 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           29 |     2456 | 2024-04-16 | Secret            | W   | 0.538      | -            | -                | -                | -         |     1.92 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           28 |     2468 | 2024-04-15 | ENCE Academy      | L   | 0.533      | -            | -                | -                | -         |   -12.23 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           27 |     2502 | 2024-04-13 | BetBoom           | L   | 0.518      | -            | -                | -                | -         |    -0.78 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           26 |     2546 | 2024-04-11 | PGE Turow         | W   | 0.504      | -            | -                | -                | -         |     2.87 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           25 |     2718 | 2024-04-06 | Enterprise        | W   | 0.472      | -            | -                | -                | -         |     7.52 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           24 |     2820 | 2024-04-03 | Ninjas in Pyjamas | W   | 0.452      | 0.384        | 0.287 (0.050)    | -                | -         |    14.06 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           23 |     2947 | 2024-03-27 | B8                | L   | 0.407      | -            | -                | -                | -         |    -3.43 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           22 |     3088 | 2024-03-18 | ex-Preasy         | L   | 0.345      | -            | -                | -                | -         |    -6.49 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           21 |     3119 | 2024-03-17 | Passion UA        | W   | 0.338      | 0.371        | 0.163 (0.020)    | -                | -         |     7.30 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           20 |     3127 | 2024-03-16 | SINNERS           | L   | 0.333      | -            | -                | -                | -         |    -3.65 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           19 |     3130 | 2024-03-16 | MOUZ NXT          | W   | 0.332      | 0.371        | 0.169 (0.021)    | -                | -         |     7.06 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           18 |     3145 | 2024-03-15 | ECLOT             | L   | 0.326      | -            | -                | -                | -         |    -2.56 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           17 |     3149 | 2024-03-15 | Permitta          | W   | 0.325      | -            | -                | -                | -         |     5.87 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           16 |     3181 | 2024-03-14 | Passion UA        | L   | 0.319      | -            | -                | -                | -         |    -3.01 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           15 |     3250 | 2024-03-12 | MOUZ NXT          | W   | 0.305      | 0.371        | 0.169 (0.019)    | -                | -         |     6.68 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           14 |     3292 | 2024-03-10 | Sashi             | W   | 0.292      | 0.358        | 0.234 (0.024)    | -                | -         |     7.21 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           13 |     3316 | 2024-03-09 | Enterprise        | W   | 0.285      | -            | -                | -                | -         |     4.94 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           12 |     3401 | 2024-03-06 | AURA              | W   | 0.264      | -            | -                | -                | -         |     0.84 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           11 |     3450 | 2024-03-04 | Sangal            | L   | 0.252      | -            | -                | -                | -         |    -1.99 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           10 |     3503 | 2024-03-02 | Enterprise        | L   | 0.238      | -            | -                | -                | -         |    -3.31 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|            9 |     3539 | 2024-02-28 | Sashi             | L   | 0.219      | -            | -                | -                | -         |    -1.40 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|            8 |     3606 | 2024-02-25 | ECLOT             | L   | 0.198      | -            | -                | -                | -         |    -1.31 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|            7 |     3652 | 2024-02-23 | Entropiq          | W   | 0.184      | -            | -                | -                | -         |     0.74 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|            6 |     3695 | 2024-02-21 | Sashi             | L   | 0.172      | -            | -                | -                | -         |    -1.02 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|            5 |     3798 | 2024-02-17 | Secret            | W   | 0.145      | -            | -                | -                | -         |     0.54 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|            4 |     3945 | 2024-02-10 | Zero Tenacity     | W   | 0.100      | -            | -                | -                | -         |     2.36 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            3 |     4004 | 2024-02-05 | Imperial fe       | W   | 0.066      | -            | -                | -                | -         |     1.50 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            2 |     4057 | 2024-02-03 | Sashi             | W   | 0.052      | -            | -                | -                | -         |     1.33 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            1 |     4111 | 2024-02-01 | Metizport         | L   | 0.039      | -            | -                | -                | -         |    -0.58 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,115.20)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-13 |      0.927 | $3,268.00      | $3,030.83       |
| 2024-06-02 |      0.853 | $653.00        | $556.95         |
| 2024-05-18 |      0.753 | $1,000.00      | $753.47         |
| 2024-04-25 |      0.598 | $5,000.00      | $2,991.25       |
| 2024-04-14 |      0.526 | $1,600.00      | $841.37         |
| 2024-03-18 |      0.345 | $5,000.00      | $1,723.83       |
| 2024-03-17 |      0.340 | $639.00        | $217.51         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
