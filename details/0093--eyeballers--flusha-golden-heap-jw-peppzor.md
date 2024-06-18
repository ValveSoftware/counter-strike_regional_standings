### Roster Details<br />
Team Name: EYEBALLERS<br />
Roster: flusha, Golden, HEAP, JW, Peppzor<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [93](../standings_global.md)<br />
Regional Rank: [67]( ../standings_europe.md)<br />
Final Rank Value:  908.4<br />
<br />
Final Rank Value (908.4) = Starting Rank Value (926.1) + Head To Head Adjustments (-17.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.308[<sup>1</sup>](#table2)
- Bounty Collected: 0.407[<sup>2</sup>](#table1)
- Opponent Network: 0.320[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.259<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 926.1
- 400 + ( ( 0.259 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 926.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |       15 | 2024-06-16 | System5           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.70 | flusha, Golden, HEAP, JW, Peppzor |
|           62 |       48 | 2024-06-15 | ARCRED            | L   | 1.000      | -            | -                | -                | -         |   -12.37 | flusha, Golden, HEAP, JW, Peppzor |
|           61 |       81 | 2024-06-14 | 9INE              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.86 | flusha, Golden, HEAP, JW, Peppzor |
|           60 |      184 | 2024-06-11 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -7.97 | flusha, Golden, HEAP, JW, Peppzor |
|           59 |      197 | 2024-06-10 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -5.56 | flusha, Golden, HEAP, JW, Peppzor |
|           58 |      209 | 2024-06-10 | GUN5              | L   | 1.000      | -            | -                | -                | -         |   -11.02 | flusha, Golden, HEAP, JW, Peppzor |
|           57 |      245 | 2024-06-09 | CYBERSHOKE        | L   | 1.000      | -            | -                | -                | -         |   -20.49 | flusha, Golden, HEAP, JW, Peppzor |
|           56 |      270 | 2024-06-09 | Nexus             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.86 | flusha, Golden, HEAP, JW, Peppzor |
|           55 |      312 | 2024-06-08 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -8.48 | flusha, Golden, HEAP, JW, Peppzor |
|           54 |      329 | 2024-06-08 | VP.Prodigy        | W   | 1.000      | 0.435        | -                | 0.518 (0.225)    | 0 (0.000) |    16.01 | flusha, Golden, HEAP, JW, Peppzor |
|           53 |      368 | 2024-06-07 | Zero Tenacity     | W   | 1.000      | 0.500        | 0.153 (0.077)    | 1.000 (0.500)    | 0 (0.000) |    23.46 | flusha, Golden, HEAP, JW, Peppzor |
|           52 |      382 | 2024-06-07 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |   -20.50 | flusha, Golden, HEAP, JW, Peppzor |
|           51 |      441 | 2024-06-06 | 9INE              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.92 | flusha, Golden, HEAP, JW, Peppzor |
|           50 |      493 | 2024-06-05 | SINNERS           | W   | 1.000      | 0.435        | 0.045 (0.020)    | 0.782 (0.340)    | 0 (0.000) |    20.21 | flusha, Golden, HEAP, JW, Peppzor |
|           49 |      511 | 2024-06-05 | Passion UA        | W   | 1.000      | 0.500        | 0.086 (0.043)    | 0.803 (0.401)    | 0 (0.000) |    22.86 | flusha, Golden, HEAP, JW, Peppzor |
|           48 |      566 | 2024-06-03 | Space             | L   | 1.000      | -            | -                | -                | -         |   -14.32 | flusha, Golden, HEAP, JW, Peppzor |
|           47 |      898 | 2024-05-21 | PERA              | L   | 1.000      | -            | -                | -                | -         |   -12.10 | Golden, HEAP, JW, Peppzor, Sapec  |
|           46 |      901 | 2024-05-21 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -14.53 | Golden, HEAP, JW, Peppzor, Sapec  |
|           45 |      940 | 2024-05-20 | B8                | L   | 1.000      | -            | -                | -                | -         |    -5.23 | Golden, HEAP, JW, Peppzor, Sapec  |
|           44 |     1024 | 2024-05-17 | ALTERNATE aTTaX   | W   | 0.989      | 0.435        | 0.046 (0.020)    | 0.573 (0.246)    | 0 (0.000) |    17.84 | Golden, HEAP, JW, Peppzor, Sapec  |
|           43 |     1073 | 2024-05-16 | MASONIC           | L   | 0.981      | -            | -                | -                | -         |   -19.26 | Golden, HEAP, JW, Peppzor, Sapec  |
|           42 |     1104 | 2024-05-15 | Permitta          | W   | 0.976      | 0.435        | 0.039 (0.016)    | 0.885 (0.376)    | 0 (0.000) |    15.27 | Golden, HEAP, JW, Peppzor, Sapec  |
|           41 |     1117 | 2024-05-15 | 9INE              | W   | 0.975      | -            | -                | -                | -         |     2.86 | Golden, HEAP, JW, Peppzor, Sapec  |
|           40 |     1121 | 2024-05-15 | Rhyno             | L   | 0.974      | -            | -                | -                | -         |   -10.92 | Golden, HEAP, JW, Peppzor, Sapec  |
|           39 |     1162 | 2024-05-14 | Space             | L   | 0.970      | -            | -                | -                | -         |   -17.81 | Golden, HEAP, JW, Peppzor, Sapec  |
|           38 |     1196 | 2024-05-13 | Zero Tenacity     | L   | 0.962      | -            | -                | -                | -         |   -10.57 | Golden, HEAP, JW, Peppzor, Sapec  |
|           37 |     1269 | 2024-05-10 | Metizport         | L   | 0.942      | -            | -                | -                | -         |   -10.45 | Golden, HEAP, JW, Peppzor, Sapec  |
|           36 |     1398 | 2024-05-03 | Zero Tenacity     | W   | 0.896      | 0.435        | 0.153 (0.060)    | 1.000 (0.389)    | -         |    18.06 | Golden, HEAP, JW, Peppzor, Sapec  |
|           35 |     1431 | 2024-05-02 | RUSH B            | W   | 0.888      | -            | -                | -                | -         |    11.45 | Golden, HEAP, JW, Peppzor, Sapec  |
|           34 |     1452 | 2024-05-01 | BetBoom           | L   | 0.882      | -            | -                | -                | -         |    -0.97 | Golden, HEAP, JW, Peppzor, Sapec  |
|           33 |     1469 | 2024-04-30 | Enterprise        | W   | 0.876      | 0.435        | 0.046 (0.018)    | 0.575 (0.219)    | -         |    13.90 | Golden, HEAP, JW, Peppzor, Sapec  |
|           32 |     1477 | 2024-04-30 | HAVU              | L   | 0.875      | -            | -                | -                | -         |   -20.04 | Golden, HEAP, JW, Peppzor, Sapec  |
|           31 |     1491 | 2024-04-29 | ex-Guild Eagles   | W   | 0.869      | -            | -                | -                | -         |    14.53 | Golden, HEAP, JW, Peppzor, Sapec  |
|           30 |     1549 | 2024-04-27 | Illuminar         | W   | 0.854      | -            | -                | -                | -         |    11.77 | Golden, HEAP, JW, Peppzor, Sapec  |
|           29 |     1589 | 2024-04-25 | HAVU              | W   | 0.843      | -            | -                | -                | -         |     7.09 | Golden, HEAP, JW, Peppzor, Sapec  |
|           28 |     1596 | 2024-04-25 | Zero Tenacity     | W   | 0.841      | 0.384        | 0.153 (0.050)    | 1.000 (0.323)    | -         |    18.18 | Golden, HEAP, JW, Peppzor, Sapec  |
|           27 |     1626 | 2024-04-23 | Insilio           | L   | 0.829      | -            | -                | -                | -         |   -10.40 | Golden, HEAP, JW, Peppzor, Sapec  |
|           26 |     1646 | 2024-04-22 | MOUZ NXT          | L   | 0.822      | -            | -                | -                | -         |    -6.61 | Golden, HEAP, JW, Peppzor, Sapec  |
|           25 |     1685 | 2024-04-20 | PERA              | W   | 0.809      | 0.500        | 0.058 (0.024)    | 0.455 (0.184)    | -         |    14.29 | Golden, HEAP, JW, Peppzor, Sapec  |
|           24 |     1782 | 2024-04-18 | DMS               | L   | 0.795      | -            | -                | -                | -         |   -13.07 | Golden, HEAP, JW, Peppzor, Sapec  |
|           23 |     1846 | 2024-04-17 | Endpoint          | L   | 0.787      | -            | -                | -                | -         |   -12.63 | Golden, HEAP, JW, Peppzor, Sapec  |
|           22 |     2008 | 2024-04-10 | Permitta          | L   | 0.740      | -            | -                | -                | -         |    -9.79 | Golden, HEAP, JW, Peppzor, Sapec  |
|           21 |     2109 | 2024-04-07 | Metizport         | L   | 0.722      | -            | -                | -                | -         |    -7.09 | Golden, HEAP, JW, Peppzor, Sapec  |
|           20 |     2113 | 2024-04-07 | Alliance          | W   | 0.722      | -            | -                | -                | -         |    10.80 | Golden, HEAP, JW, Peppzor, Sapec  |
|           19 |     2125 | 2024-04-06 | Onliners5         | W   | 0.715      | -            | -                | -                | -         |     2.85 | Golden, HEAP, JW, Peppzor, Sapec  |
|           18 |     2177 | 2024-04-04 | Sangal            | L   | 0.703      | -            | -                | -                | -         |    -6.31 | Golden, HEAP, JW, Peppzor, Sapec  |
|           17 |     2221 | 2024-04-03 | 9 Pandas          | L   | 0.696      | -            | -                | -                | -         |    -4.65 | Golden, HEAP, JW, Peppzor, Sapec  |
|           16 |     2231 | 2024-04-03 | BIG               | L   | 0.695      | -            | -                | -                | -         |    -1.37 | Golden, HEAP, JW, Peppzor, Sapec  |
|           15 |     2322 | 2024-03-28 | KOI               | W   | 0.655      | 0.500        | 0.077 (0.025)    | -                | -         |    16.62 | Golden, HEAP, JW, Peppzor, Sapec  |
|           14 |     2584 | 2024-03-14 | TSM               | L   | 0.564      | -            | -                | -                | -         |   -13.05 | flusha, HEAP, JW, Peppzor, Sapec  |
|           13 |     2703 | 2024-03-10 | Alliance          | L   | 0.535      | -            | -                | -                | -         |    -8.96 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|           12 |     2726 | 2024-03-09 | Metizport         | W   | 0.528      | -            | -                | -                | -         |    10.15 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|           11 |     2730 | 2024-03-09 | Onliners5         | W   | 0.528      | -            | -                | -                | -         |     2.08 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|           10 |     2793 | 2024-03-06 | 9INE              | W   | 0.510      | -            | -                | -                | -         |     1.57 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            9 |     3487 | 2024-02-02 | Metizport         | L   | 0.290      | -            | -                | -                | -         |    -3.94 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            8 |     3492 | 2024-02-02 | Sashi             | W   | 0.289      | -            | -                | -                | -         |     7.11 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            7 |     3813 | 2024-01-19 | Entropiq          | L   | 0.196      | -            | -                | -                | -         |    -5.32 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            6 |     3872 | 2024-01-18 | PERA              | L   | 0.189      | -            | -                | -                | -         |    -2.60 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            5 |     3892 | 2024-01-18 | MOUZ              | L   | 0.188      | -            | -                | -                | -         |    -0.01 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            4 |     3958 | 2024-01-16 | The Witchers      | W   | 0.178      | -            | -                | -                | -         |     1.02 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            3 |     3982 | 2024-01-16 | Sashi             | W   | 0.176      | -            | -                | -                | -         |     4.37 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            2 |     3995 | 2024-01-16 | PARIVISION        | W   | 0.176      | -            | -                | -                | -         |     3.27 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            1 |     4115 | 2024-01-12 | Insilio           | L   | 0.150      | -            | -                | -                | -         |    -2.27 | HEAP, JW, Peppzor, Sapec, SHiNE   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,697.76)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
