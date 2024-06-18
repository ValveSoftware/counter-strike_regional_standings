### Roster Details<br />
Team Name: Sangal<br />
Roster: jottAAA, LNZ, SaMey, xfl0ud, yxngstxr<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [35](../standings_global.md)<br />
Regional Rank: [25]( ../standings_europe.md)<br />
Final Rank Value:  1239.6<br />
<br />
Final Rank Value (1239.6) = Starting Rank Value (1172.1) + Head To Head Adjustments (67.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.601[<sup>1</sup>](#table2)
- Bounty Collected: 0.515[<sup>2</sup>](#table1)
- Opponent Network: 0.404[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.380<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1172.1
- 400 + ( ( 0.380 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1172.1


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
|           64 |      231 | 2024-06-09 | KOI               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.88 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           63 |      295 | 2024-06-08 | SINNERS           | W   | 1.000      | 0.500        | -                | 0.782 (0.391)    | 0 (0.000) |     7.70 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           62 |      360 | 2024-06-07 | Aurora            | W   | 1.000      | 0.500        | 0.526 (0.263)    | 0.874 (0.437)    | 0 (0.000) |    25.14 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           61 |      418 | 2024-06-06 | 3DMAX             | W   | 1.000      | 0.500        | 0.186 (0.093)    | 1.000 (0.500)    | 0 (0.000) |    16.66 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           60 |      481 | 2024-06-05 | SAW               | W   | 1.000      | 0.500        | 0.140 (0.070)    | -                | 0 (0.000) |    20.97 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           59 |      537 | 2024-06-04 | 9 Pandas          | W   | 1.000      | 0.500        | 0.114 (0.057)    | 0.663 (0.332)    | 0 (0.000) |    16.96 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           58 |      654 | 2024-05-31 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -7.58 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           57 |      657 | 2024-05-31 | FAVBET            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.51 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           56 |      662 | 2024-05-31 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -5.83 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           55 |      687 | 2024-05-30 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -16.96 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           54 |      859 | 2024-05-22 | Zero Tenacity     | W   | 1.000      | 0.500        | 0.153 (0.077)    | 1.000 (0.500)    | 0 (0.000) |    15.02 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           53 |      906 | 2024-05-21 | Monte             | W   | 1.000      | 0.500        | 0.189 (0.095)    | 0.674 (0.337)    | 0 (0.000) |    22.06 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           52 |      941 | 2024-05-20 | PARIVISION        | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.03 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           51 |      957 | 2024-05-19 | Ninjas in Pyjamas | W   | 1.000      | 0.500        | 0.315 (0.157)    | -                | -         |    29.46 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           50 |      963 | 2024-05-19 | Endpoint          | W   | 1.000      | -            | -                | -                | -         |    11.12 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           49 |      999 | 2024-05-18 | Rare Atom         | W   | 0.994      | -            | -                | -                | -         |     2.57 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           48 |     1038 | 2024-05-17 | Permitta          | W   | 0.987      | 0.435        | -                | 0.885 (0.380)    | -         |     9.10 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           47 |     1058 | 2024-05-16 | Ninjas in Pyjamas | L   | 0.983      | -            | -                | -                | -         |    -1.32 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           46 |     1120 | 2024-05-15 | Verdant           | L   | 0.974      | -            | -                | -                | -         |   -24.49 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           45 |     1183 | 2024-05-14 | DMS               | L   | 0.967      | -            | -                | -                | -         |   -22.79 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           44 |     1429 | 2024-05-02 | Metizport         | L   | 0.888      | -            | -                | -                | -         |   -16.85 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           43 |     1462 | 2024-05-01 | ALTERNATE aTTaX   | L   | 0.880      | -            | -                | -                | -         |   -18.98 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           42 |     1474 | 2024-04-30 | Zero Tenacity     | W   | 0.875      | 0.500        | 0.153 (0.067)    | 1.000 (0.438)    | -         |    10.83 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           41 |     1504 | 2024-04-29 | SINNERS           | W   | 0.867      | 0.500        | -                | 0.782 (0.339)    | -         |    10.52 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           40 |     1511 | 2024-04-28 | 1WIN              | W   | 0.862      | -            | -                | -                | -         |     9.73 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           39 |     1536 | 2024-04-27 | PARIVISION        | L   | 0.855      | -            | -                | -                | -         |   -17.44 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           38 |     1567 | 2024-04-26 | Nemiga            | W   | 0.848      | 0.435        | 0.486 (0.179)    | -                | -         |    19.32 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           37 |     1640 | 2024-04-23 | Grannys Knockers  | W   | 0.827      | -            | -                | -                | -         |     3.66 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           36 |     1645 | 2024-04-22 | BLEED             | L   | 0.822      | -            | -                | -                | -         |    -4.56 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           35 |     1656 | 2024-04-22 | ex-Guild Eagles   | L   | 0.820      | -            | -                | -                | -         |   -18.29 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           34 |     1671 | 2024-04-21 | Alliance          | W   | 0.814      | -            | -                | -                | -         |     6.11 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           33 |     1687 | 2024-04-20 | brazylijski luz   | W   | 0.809      | -            | -                | -                | -         |     4.85 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           32 |     1706 | 2024-04-20 | JANO              | W   | 0.807      | -            | -                | -                | -         |     2.25 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           31 |     1731 | 2024-04-19 | TSM               | W   | 0.803      | -            | -                | -                | -         |     2.93 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           30 |     1737 | 2024-04-19 | Nemiga            | L   | 0.802      | -            | -                | -                | -         |    -7.46 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           29 |     1835 | 2024-04-17 | 9 Pandas          | W   | 0.787      | -            | -                | -                | -         |    12.41 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           28 |     1858 | 2024-04-16 | Zero Tenacity     | W   | 0.783      | -            | -                | -                | -         |     9.59 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           27 |     1878 | 2024-04-15 | B8                | W   | 0.776      | 0.500        | 0.229 (0.089)    | 1.000 (0.388)    | -         |    12.22 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           26 |     1881 | 2024-04-15 | Aurora Young Blud | W   | 0.775      | -            | -                | -                | -         |     3.21 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           25 |     1923 | 2024-04-12 | Monte             | L   | 0.755      | -            | -                | -                | -         |    -6.78 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           24 |     2177 | 2024-04-04 | EYEBALLERS        | W   | 0.703      | -            | -                | -                | -         |     6.31 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           23 |     2256 | 2024-04-02 | 9 Pandas          | L   | 0.689      | -            | -                | -                | -         |    -8.95 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           22 |     2617 | 2024-03-13 | KOI               | L   | 0.557      | -            | -                | -                | -         |    -6.74 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           21 |     2722 | 2024-03-09 | Zero Tenacity     | L   | 0.529      | -            | -                | -                | -         |    -8.96 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           20 |     2774 | 2024-03-07 | 500               | L   | 0.515      | -            | -                | -                | -         |   -14.06 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           19 |     2796 | 2024-03-06 | TSM               | W   | 0.510      | -            | -                | -                | -         |     1.68 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           18 |     2865 | 2024-03-04 | Sampi             | W   | 0.494      | -            | -                | -                | -         |     4.07 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           17 |     2891 | 2024-03-03 | Rebels            | L   | 0.489      | -            | -                | -                | -         |    -8.25 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           16 |     2917 | 2024-03-02 | HAVU              | W   | 0.480      | -            | -                | -                | -         |     1.72 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           15 |     2938 | 2024-02-29 | Rebels            | L   | 0.469      | -            | -                | -                | -         |    -8.21 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           14 |     2959 | 2024-02-28 | Alliance          | L   | 0.461      | -            | -                | -                | -         |   -11.61 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           13 |     2966 | 2024-02-27 | 9INE              | W   | 0.456      | -            | -                | -                | -         |     0.44 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           12 |     3012 | 2024-02-25 | Sashi             | W   | 0.443      | -            | -                | -                | -         |     6.77 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           11 |     3186 | 2024-02-18 | 500               | W   | 0.394      | -            | -                | -                | -         |     1.27 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           10 |     3393 | 2024-02-08 | AURA              | L   | 0.328      | -            | -                | -                | -         |   -10.02 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            9 |     3412 | 2024-02-06 | ex-Preasy         | L   | 0.314      | -            | -                | -                | -         |    -8.02 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            8 |     3446 | 2024-02-04 | ALTERNATE aTTaX   | W   | 0.300      | -            | -                | -                | -         |     3.16 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            7 |     3465 | 2024-02-03 | Entropiq          | L   | 0.295      | -            | -                | -                | -         |    -8.92 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            6 |     3475 | 2024-02-03 | Metizport         | L   | 0.294      | -            | -                | -                | -         |    -6.83 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            5 |     3527 | 2024-02-01 | Spirit Academy    | W   | 0.282      | -            | -                | -                | -         |     0.50 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            4 |     3535 | 2024-02-01 | ALTERNATE aTTaX   | W   | 0.281      | -            | -                | -                | -         |     2.94 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            3 |     3588 | 2024-01-28 | Gaimin Gladiators | L   | 0.254      | -            | -                | -                | -         |    -3.70 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            2 |     3652 | 2024-01-24 | Spirit Academy    | W   | 0.228      | -            | -                | -                | -         |     0.39 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            1 |     4234 | 2024-01-09 | BLEED             | L   | 0.129      | -            | -                | -                | -         |    -0.98 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($65,000.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.22) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-05-22 |      1.000 | $50,000.00     | $50,000.00      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
