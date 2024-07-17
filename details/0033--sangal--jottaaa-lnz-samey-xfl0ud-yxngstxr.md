### Roster Details<br />
Team Name: Sangal<br />
Roster: jottAAA, LNZ, SaMey, xfl0ud, yxngstxr<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [33](../standings_global.md)<br />
Regional Rank: [22]( ../standings_europe.md)<br />
Final Rank Value:  1242.4<br />
<br />
Final Rank Value (1242.4) = Starting Rank Value (1173.5) + Head To Head Adjustments (68.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.612[<sup>1</sup>](#table2)
- Bounty Collected: 0.497[<sup>2</sup>](#table1)
- Opponent Network: 0.332[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.360<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1173.5
- 400 + ( ( 0.360 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1173.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           65 |       94 | 2024-07-15 | RUSH B            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.18 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           64 |      113 | 2024-07-15 | Rebels            | W   | 1.000      | 0.500        | -                | 0.575 (0.287)    | 0 (0.000) |     8.90 | imoRR, jottAAA, SaMey, xfl0ud, yxngstxr |
|           63 |      531 | 2024-06-09 | KOI               | W   | 0.948      | 0.500        | 0.091 (0.043)    | -                | 0 (0.000) |    11.91 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           62 |      595 | 2024-06-08 | SINNERS           | W   | 0.941      | 0.500        | -                | 0.744 (0.350)    | 0 (0.000) |     7.94 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           61 |      660 | 2024-06-07 | Aurora            | W   | 0.934      | 0.500        | 0.514 (0.240)    | 0.813 (0.380)    | 0 (0.000) |    24.76 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           60 |      718 | 2024-06-06 | 3DMAX             | W   | 0.928      | 0.500        | 0.209 (0.097)    | 1.000 (0.464)    | 0 (0.000) |    15.92 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           59 |      781 | 2024-06-05 | SAW               | W   | 0.921      | 0.500        | 0.147 (0.068)    | 0.544 (0.251)    | 0 (0.000) |    18.02 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           58 |      837 | 2024-06-04 | 9 Pandas          | W   | 0.914      | 0.500        | 0.126 (0.057)    | 0.591 (0.270)    | 0 (0.000) |    14.60 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           57 |      952 | 2024-05-31 | SAW               | L   | 0.887      | -            | -                | -                | -         |    -8.23 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           56 |      955 | 2024-05-31 | FAVBET            | W   | 0.887      | -            | -                | -                | 0 (0.000) |     4.23 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           55 |      960 | 2024-05-31 | fnatic            | L   | 0.886      | -            | -                | -                | -         |    -3.79 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           54 |      985 | 2024-05-30 | MOUZ NXT          | L   | 0.878      | -            | -                | -                | -         |   -15.02 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           53 |     1157 | 2024-05-22 | Zero Tenacity     | W   | 0.827      | 0.500        | 0.154 (0.064)    | 1.000 (0.414)    | 0 (0.000) |    12.25 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           52 |     1204 | 2024-05-21 | Monte             | W   | 0.819      | -            | -                | -                | -         |     9.62 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           51 |     1239 | 2024-05-20 | PARIVISION        | W   | 0.813      | -            | -                | -                | -         |     8.98 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           50 |     1255 | 2024-05-19 | Ninjas in Pyjamas | W   | 0.808      | 0.500        | 0.343 (0.139)    | -                | -         |    24.33 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           49 |     1261 | 2024-05-19 | Endpoint          | W   | 0.806      | -            | -                | -                | -         |     8.31 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           48 |     1297 | 2024-05-18 | Rare Atom         | W   | 0.799      | -            | -                | -                | -         |     2.15 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           47 |     1336 | 2024-05-17 | Permitta          | W   | 0.792      | 0.435        | -                | 0.794 (0.273)    | -         |     6.98 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           46 |     1356 | 2024-05-16 | Ninjas in Pyjamas | L   | 0.788      | -            | -                | -                | -         |    -0.79 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           45 |     1418 | 2024-05-15 | Verdant           | L   | 0.779      | -            | -                | -                | -         |   -19.62 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           44 |     1481 | 2024-05-14 | DMS               | L   | 0.771      | -            | -                | -                | -         |   -18.36 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           43 |     1727 | 2024-05-02 | Metizport         | L   | 0.693      | -            | -                | -                | -         |   -14.42 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           42 |     1760 | 2024-05-01 | ALTERNATE aTTaX   | L   | 0.685      | -            | -                | -                | -         |   -14.55 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           41 |     1772 | 2024-04-30 | Zero Tenacity     | W   | 0.680      | 0.500        | 0.154 (0.052)    | 1.000 (0.340)    | -         |     8.48 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           40 |     1802 | 2024-04-29 | SINNERS           | W   | 0.672      | -            | -                | -                | -         |     8.48 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           39 |     1809 | 2024-04-28 | 1WIN              | W   | 0.667      | -            | -                | -                | -         |     6.53 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           38 |     1834 | 2024-04-27 | PARIVISION        | L   | 0.660      | -            | -                | -                | -         |   -14.23 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           37 |     1865 | 2024-04-26 | Nemiga            | W   | 0.653      | 0.435        | 0.498 (0.141)    | -                | -         |    14.27 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           36 |     1938 | 2024-04-23 | Grannys Knockers  | W   | 0.632      | -            | -                | -                | -         |     2.71 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           35 |     1943 | 2024-04-22 | BLEED             | L   | 0.627      | -            | -                | -                | -         |    -8.99 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           34 |     1954 | 2024-04-22 | ex-Guild Eagles   | L   | 0.625      | -            | -                | -                | -         |   -15.27 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           33 |     1969 | 2024-04-21 | Alliance          | W   | 0.619      | -            | -                | -                | -         |     4.40 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           32 |     1985 | 2024-04-20 | brazylijski luz   | W   | 0.614      | -            | -                | -                | -         |     3.63 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           31 |     2004 | 2024-04-20 | JANO              | W   | 0.611      | -            | -                | -                | -         |     1.61 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           30 |     2029 | 2024-04-19 | TSM               | W   | 0.607      | -            | -                | -                | -         |     1.87 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           29 |     2035 | 2024-04-19 | Nemiga            | L   | 0.607      | -            | -                | -                | -         |    -6.26 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           28 |     2133 | 2024-04-17 | 9 Pandas          | W   | 0.592      | -            | -                | -                | -         |     7.95 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           27 |     2156 | 2024-04-16 | Zero Tenacity     | W   | 0.588      | -            | -                | -                | -         |     7.22 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           26 |     2176 | 2024-04-15 | B8                | W   | 0.581      | 0.500        | 0.246 (0.071)    | 1.000 (0.291)    | -         |     8.75 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           25 |     2179 | 2024-04-15 | Aurora Young Blud | W   | 0.580      | -            | -                | -                | -         |     2.40 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           24 |     2221 | 2024-04-12 | Monte             | L   | 0.560      | -            | -                | -                | -         |    -9.11 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           23 |     2475 | 2024-04-04 | EYEBALLERS        | W   | 0.507      | -            | -                | -                | -         |     4.14 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           22 |     2554 | 2024-04-02 | 9 Pandas          | L   | 0.494      | -            | -                | -                | -         |    -8.22 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           21 |     2914 | 2024-03-13 | KOI               | L   | 0.361      | -            | -                | -                | -         |    -4.83 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           20 |     3019 | 2024-03-09 | Zero Tenacity     | L   | 0.333      | -            | -                | -                | -         |    -5.93 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           19 |     3071 | 2024-03-07 | 500               | L   | 0.320      | -            | -                | -                | -         |    -9.06 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           18 |     3093 | 2024-03-06 | TSM               | W   | 0.314      | -            | -                | -                | -         |     0.86 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           17 |     3162 | 2024-03-04 | Sampi             | W   | 0.299      | -            | -                | -                | -         |     2.29 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           16 |     3188 | 2024-03-03 | Rebels            | L   | 0.294      | -            | -                | -                | -         |    -5.78 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           15 |     3214 | 2024-03-02 | HAVU              | W   | 0.285      | -            | -                | -                | -         |     0.88 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           14 |     3235 | 2024-02-29 | Rebels            | L   | 0.274      | -            | -                | -                | -         |    -5.51 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           13 |     3256 | 2024-02-28 | Alliance          | L   | 0.266      | -            | -                | -                | -         |    -6.70 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           12 |     3263 | 2024-02-27 | 9INE              | W   | 0.261      | -            | -                | -                | -         |     0.24 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           11 |     3309 | 2024-02-25 | Sashi             | W   | 0.248      | -            | -                | -                | -         |     3.73 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           10 |     3483 | 2024-02-18 | 500               | W   | 0.198      | -            | -                | -                | -         |     0.54 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            9 |     3690 | 2024-02-08 | AURA              | L   | 0.133      | -            | -                | -                | -         |    -4.08 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            8 |     3709 | 2024-02-06 | ex-Preasy         | L   | 0.119      | -            | -                | -                | -         |    -3.19 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            7 |     3743 | 2024-02-04 | ALTERNATE aTTaX   | W   | 0.105      | -            | -                | -                | -         |     1.20 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            6 |     3762 | 2024-02-03 | Entropiq          | L   | 0.100      | -            | -                | -                | -         |    -3.04 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            5 |     3772 | 2024-02-03 | Metizport         | L   | 0.098      | -            | -                | -                | -         |    -2.35 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            4 |     3824 | 2024-02-01 | Spirit Academy    | W   | 0.086      | -            | -                | -                | -         |     0.08 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            3 |     3832 | 2024-02-01 | ALTERNATE aTTaX   | W   | 0.085      | -            | -                | -                | -         |     0.97 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            2 |     3885 | 2024-01-28 | Gaimin Gladiators | L   | 0.059      | -            | -                | -                | -         |    -1.11 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            1 |     3949 | 2024-01-24 | Spirit Academy    | W   | 0.033      | -            | -                | -                | -         |     0.03 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($56,987.56)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.23) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.948 | $16,500.00     | $15,635.49      |
| 2024-05-22 |      0.827 | $50,000.00     | $41,352.07      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
