### Roster Details<br />
Team Name: Sampi<br />
Roster: fino, manguss, sAvana1, The eLiVe, ZEDKO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [92](../standings_global.md)<br />
Regional Rank: [66]( ../standings_europe.md)<br />
Final Rank Value:  911.0<br />
<br />
Final Rank Value (911.0) = Starting Rank Value (940.9) + Head To Head Adjustments (-30.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.427[<sup>1</sup>](#table2)
- Bounty Collected: 0.412[<sup>2</sup>](#table1)
- Opponent Network: 0.226[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.266<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 940.9
- 400 + ( ( 0.266 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 940.9


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
|           80 |      127 | 2024-06-13 | Rebels            | W   | 1.000      | 0.379        | 0.054 (0.020)    | -                | 0 (0.000) |    23.18 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           79 |      131 | 2024-06-13 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -3.16 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           78 |      157 | 2024-06-12 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -11.81 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           77 |      178 | 2024-06-11 | Astralis Talent   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.89 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           76 |      186 | 2024-06-11 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |   -16.76 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           75 |      247 | 2024-06-09 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -21.05 | fino, manguss, sAvana1, The eLiVe, Verttzzz |
|           74 |      318 | 2024-06-08 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |    -7.42 | fino, manguss, sAvana1, The eLiVe, Verttzzz |
|           73 |      334 | 2024-06-08 | CYBERSHOKE        | L   | 1.000      | -            | -                | -                | -         |   -21.59 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           72 |      434 | 2024-06-06 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -6.65 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           71 |      452 | 2024-06-06 | HAVU              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.37 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           70 |      497 | 2024-06-05 | NAVI Junior       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.32 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           69 |      534 | 2024-06-04 | INFINITE          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.89 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           68 |      553 | 2024-06-04 | DMS               | W   | 1.000      | 0.500        | -                | 0.473 (0.236)    | 0 (0.000) |    18.15 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           67 |      576 | 2024-06-03 | Rare Atom         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.98 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           66 |      628 | 2024-06-01 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |    -9.60 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           65 |      649 | 2024-05-31 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |    -9.00 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           64 |      668 | 2024-05-30 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -5.48 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           63 |      727 | 2024-05-28 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -15.24 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           62 |      731 | 2024-05-28 | Rhyno             | W   | 1.000      | 0.435        | 0.094 (0.041)    | -                | 0 (0.000) |    19.10 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           61 |      766 | 2024-05-26 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -11.25 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           60 |      783 | 2024-05-25 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -12.86 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           59 |      814 | 2024-05-23 | GUN5              | W   | 1.000      | 0.435        | 0.095 (0.041)    | 0.425 (0.185)    | 0 (0.000) |    15.97 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           58 |      848 | 2024-05-22 | VENI VIDI VICI    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.30 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           57 |      938 | 2024-05-20 | Illuminar         | W   | 1.000      | 0.435        | -                | 0.399 (0.173)    | -         |    11.87 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           56 |      944 | 2024-05-20 | Verdant           | L   | 1.000      | -            | -                | -                | -         |   -20.70 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           55 |      996 | 2024-05-18 | DMS               | L   | 0.995      | -            | -                | -                | -         |   -18.31 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           54 |     1064 | 2024-05-16 | MOUZ NXT          | L   | 0.982      | -            | -                | -                | -         |   -10.93 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           53 |     1075 | 2024-05-16 | B8                | L   | 0.980      | -            | -                | -                | -         |    -8.35 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           52 |     1200 | 2024-05-13 | Nexus             | W   | 0.961      | -            | -                | -                | -         |     8.77 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           51 |     1288 | 2024-05-09 | BLEED             | L   | 0.936      | -            | -                | -                | -         |    -4.27 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           50 |     1362 | 2024-05-05 | RUSH B            | W   | 0.909      | -            | -                | -                | -         |     9.61 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           49 |     1393 | 2024-05-04 | Endpoint          | L   | 0.901      | -            | -                | -                | -         |   -14.50 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           48 |     1427 | 2024-05-02 | Permitta          | W   | 0.889      | 0.435        | -                | 0.885 (0.342)    | -         |    12.68 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           47 |     1453 | 2024-05-01 | ALTERNATE aTTaX   | L   | 0.881      | -            | -                | -                | -         |   -13.22 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           46 |     1460 | 2024-05-01 | ENCE Academy      | W   | 0.880      | -            | -                | -                | -         |     6.16 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           45 |     1465 | 2024-04-30 | GL Academy        | W   | 0.877      | -            | -                | -                | -         |     7.00 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           44 |     1483 | 2024-04-30 | ALTERNATE aTTaX   | L   | 0.874      | -            | -                | -                | -         |   -13.77 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           43 |     1599 | 2024-04-25 | ECLOT             | L   | 0.841      | -            | -                | -                | -         |    -7.23 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           42 |     1619 | 2024-04-24 | Permitta          | W   | 0.833      | 0.371        | -                | 0.885 (0.273)    | -         |    13.10 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           41 |     1638 | 2024-04-23 | ECLOT             | L   | 0.827      | -            | -                | -                | -         |    -7.16 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           40 |     1674 | 2024-04-21 | ALTERNATE aTTaX   | W   | 0.814      | -            | -                | -                | -         |    11.44 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           39 |     1748 | 2024-04-19 | BLEED             | L   | 0.801      | -            | -                | -                | -         |    -3.00 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           38 |     1807 | 2024-04-18 | Permitta          | W   | 0.793      | 0.371        | -                | 0.885 (0.260)    | -         |    12.96 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           37 |     1828 | 2024-04-17 | NOM               | L   | 0.788      | -            | -                | -                | -         |   -22.98 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           36 |     1867 | 2024-04-16 | SAW               | W   | 0.781      | 0.384        | 0.140 (0.042)    | -                | -         |    21.39 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           35 |     1870 | 2024-04-16 | Secret            | W   | 0.780      | -            | -                | -                | -         |     2.58 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           34 |     1882 | 2024-04-15 | ENCE Academy      | L   | 0.775      | -            | -                | -                | -         |   -17.68 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           33 |     1916 | 2024-04-13 | BetBoom           | L   | 0.761      | -            | -                | -                | -         |    -0.94 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           32 |     1960 | 2024-04-11 | PGE Turow         | W   | 0.747      | -            | -                | -                | -         |     3.81 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           31 |     2132 | 2024-04-06 | Enterprise        | W   | 0.714      | -            | -                | -                | -         |    11.71 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           30 |     2234 | 2024-04-03 | Ninjas in Pyjamas | W   | 0.694      | 0.384        | 0.315 (0.084)    | -                | -         |    21.61 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           29 |     2362 | 2024-03-27 | B8                | L   | 0.649      | -            | -                | -                | -         |    -5.08 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           28 |     2503 | 2024-03-18 | ex-Preasy         | L   | 0.587      | -            | -                | -                | -         |    -9.17 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           27 |     2534 | 2024-03-17 | Passion UA        | W   | 0.580      | -            | -                | -                | -         |    10.11 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           26 |     2542 | 2024-03-16 | SINNERS           | L   | 0.575      | -            | -                | -                | -         |    -6.68 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           25 |     2545 | 2024-03-16 | MOUZ NXT          | W   | 0.574      | 0.371        | 0.158 (0.034)    | 1.000 (0.213)    | -         |    11.81 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           24 |     2560 | 2024-03-15 | ECLOT             | L   | 0.569      | -            | -                | -                | -         |    -4.68 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           23 |     2564 | 2024-03-15 | Permitta          | W   | 0.567      | 0.371        | -                | 0.885 (0.186)    | -         |    10.14 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           22 |     2596 | 2024-03-14 | Passion UA        | L   | 0.561      | -            | -                | -                | -         |    -7.52 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           21 |     2665 | 2024-03-12 | MOUZ NXT          | W   | 0.547      | 0.371        | 0.158 (0.032)    | 1.000 (0.203)    | -         |    11.81 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           20 |     2707 | 2024-03-10 | Sashi             | W   | 0.535      | 0.358        | 0.200 (0.038)    | 1.000 (0.192)    | -         |    11.67 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           19 |     2731 | 2024-03-09 | Enterprise        | W   | 0.528      | -            | -                | -                | -         |     9.79 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           18 |     2816 | 2024-03-06 | AURA              | W   | 0.507      | -            | -                | -                | -         |     1.50 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           17 |     2865 | 2024-03-04 | Sangal            | L   | 0.494      | -            | -                | -                | -         |    -4.07 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           16 |     2918 | 2024-03-02 | Enterprise        | L   | 0.480      | -            | -                | -                | -         |    -5.85 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           15 |     2954 | 2024-02-28 | Sashi             | L   | 0.462      | -            | -                | -                | -         |    -4.11 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           14 |     3021 | 2024-02-25 | ECLOT             | L   | 0.441      | -            | -                | -                | -         |    -2.71 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           13 |     3067 | 2024-02-23 | Entropiq          | W   | 0.427      | -            | -                | -                | -         |     1.79 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           12 |     3110 | 2024-02-21 | Sashi             | L   | 0.415      | -            | -                | -                | -         |    -3.22 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           11 |     3213 | 2024-02-17 | Secret            | W   | 0.388      | -            | -                | -                | -         |     1.36 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           10 |     3360 | 2024-02-10 | Zero Tenacity     | W   | 0.342      | 0.358        | 0.153 (0.019)    | -                | -         |     7.56 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            9 |     3419 | 2024-02-05 | Imperial fe       | W   | 0.308      | -            | -                | -                | -         |     6.98 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            8 |     3472 | 2024-02-03 | Sashi             | W   | 0.294      | 0.358        | 0.200 (0.021)    | -                | -         |     7.12 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            7 |     3526 | 2024-02-01 | Metizport         | L   | 0.282      | -            | -                | -                | -         |    -3.96 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            6 |     3670 | 2024-01-23 | ex-Guild Eagles   | L   | 0.222      | -            | -                | -                | -         |    -3.52 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            5 |     3674 | 2024-01-23 | Viperio           | L   | 0.222      | -            | -                | -                | -         |    -6.42 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            4 |     3692 | 2024-01-22 | Rebels            | W   | 0.216      | -            | -                | -                | -         |     4.83 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            3 |     3698 | 2024-01-22 | PERA              | W   | 0.216      | -            | -                | -                | -         |     3.80 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            2 |     3700 | 2024-01-22 | ALTERNATE aTTaX   | L   | 0.215      | -            | -                | -                | -         |    -2.30 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            1 |     4244 | 2024-01-09 | HAVU              | L   | 0.129      | -            | -                | -                | -         |    -2.91 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,658.99)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-13 |      1.000 | $3,268.00      | $3,268.00       |
| 2024-06-02 |      1.000 | $653.00        | $653.00         |
| 2024-05-18 |      0.996 | $1,000.00      | $995.98         |
| 2024-04-25 |      0.841 | $5,000.00      | $4,203.79       |
| 2024-04-14 |      0.768 | $1,600.00      | $1,229.38       |
| 2024-03-18 |      0.587 | $5,000.00      | $2,936.37       |
| 2024-03-17 |      0.583 | $639.00        | $372.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
