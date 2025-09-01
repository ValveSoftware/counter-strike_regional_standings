### Roster Details<br />
Team Name: Sashi<br />
Roster: Beccie, Cabbi, Lucky, MistR, Zyphon<br />
Global Rank: [53](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [36]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  1036.2<br />
<br />
Final Rank Value (1036.2) = Starting Rank Value (943.9) + Head To Head Adjustments (92.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.323[<sup>1</sup>](#table2)
- Bounty Collected: 0.376[<sup>2</sup>](#table1)
- Opponent Network: 0.211[<sup>2</sup>](#table1)
- LAN Wins: 0.224[<sup>2</sup>](#table1)

The average of these factors is 0.284<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 943.9
- 400 + ( ( 0.284 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 943.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           95 |      522 | 2025-08-10 | BetBoom            | L   | 1.000      | -            | -                | -                | -         |    -4.38 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           94 |      528 | 2025-08-10 | Inner Circle       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.98 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           93 |      564 | 2025-08-08 | fnatic             | L   | 1.000      | -            | -                | -                | -         |    -5.43 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           92 |      607 | 2025-08-05 | Betclic            | W   | 1.000      | 0.435        | 0.027 (0.012)    | 0.588 (0.256)    | 0 (0.000) |    14.74 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           91 |      646 | 2025-08-02 | Nexus              | W   | 1.000      | 0.435        | 0.055 (0.024)    | 0.778 (0.338)    | 0 (0.000) |    13.75 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           90 |      690 | 2025-07-31 | ARCRED             | W   | 0.985      | 0.435        | -                | 0.488 (0.209)    | 0 (0.000) |    10.62 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           89 |      705 | 2025-07-29 | 9INE               | L   | 0.974      | -            | -                | -                | -         |   -12.09 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           88 |      963 | 2025-07-16 | PARIVISION         | L   | 0.888      | -            | -                | -                | -         |   -11.13 | Beccie, Cabbi, Lucky, Patti, Zyphon   |
|           87 |      973 | 2025-07-16 | FUT                | W   | 0.886      | 0.143        | 0.221 (0.028)    | -                | 0 (0.000) |    18.29 | Beccie, Cabbi, Lucky, Patti, Zyphon   |
|           86 |      983 | 2025-07-15 | TNL                | L   | 0.881      | -            | -                | -                | -         |    -7.04 | Beccie, Cabbi, Lucky, Patti, Zyphon   |
|           85 |      993 | 2025-07-15 | fnatic             | W   | 0.880      | 0.143        | 0.111 (0.014)    | -                | 0 (0.000) |    24.82 | Beccie, Cabbi, Lucky, Patti, Zyphon   |
|           84 |     1010 | 2025-07-14 | Liquid             | W   | 0.874      | 0.143        | 0.264 (0.033)    | -                | -         |    22.70 | Beccie, Cabbi, Lucky, Patti, Zyphon   |
|           83 |     1021 | 2025-07-14 | 1win               | W   | 0.871      | -            | -                | -                | -         |     6.88 | Beccie, Cabbi, Lucky, Patti, Zyphon   |
|           82 |     1351 | 2025-06-17 | PARIVISION         | L   | 0.693      | -            | -                | -                | -         |    -8.80 | Beccie, Cabbi, kiR, Lucky, Zyphon     |
|           81 |     1374 | 2025-06-16 | CYBERSHOKE         | L   | 0.685      | -            | -                | -                | -         |   -11.36 | Beccie, Cabbi, kiR, Lucky, Zyphon     |
|           80 |     1410 | 2025-06-14 | Passion UA         | L   | 0.674      | -            | -                | -                | -         |    -6.75 | Beccie, Cabbi, kiR, Lucky, Zyphon     |
|           79 |     1417 | 2025-06-14 | Metizport          | W   | 0.674      | -            | -                | -                | 1 (0.674) |     8.55 | Beccie, Cabbi, kiR, Lucky, Zyphon     |
|           78 |     1429 | 2025-06-14 | EYEBALLERS         | W   | 0.673      | 0.360        | -                | 0.576 (0.139)    | 1 (0.673) |    10.94 | Beccie, Cabbi, kiR, Lucky, Zyphon     |
|           77 |     1444 | 2025-06-13 | 9INE               | L   | 0.668      | -            | -                | -                | -         |    -4.59 | Beccie, Cabbi, kiR, Lucky, Zyphon     |
|           76 |     1498 | 2025-06-12 | Nexus              | W   | 0.659      | 0.480        | 0.055 (0.017)    | 0.778 (0.246)    | -         |    11.02 | Beccie, Cabbi, kiR, Lucky, Zyphon     |
|           75 |     1525 | 2025-06-10 | Gentle Mates       | L   | 0.646      | -            | -                | -                | -         |    -2.83 | Beccie, Cabbi, kiR, Lucky, Zyphon     |
|           74 |     1592 | 2025-06-06 | SINNERS            | W   | 0.618      | 0.480        | -                | 0.615 (0.182)    | -         |     7.60 | Beccie, Cabbi, kiR, Lucky, Zyphon     |
|           73 |     1677 | 2025-05-28 | Gentle Mates       | L   | 0.559      | -            | -                | -                | -         |    -1.87 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           72 |     1694 | 2025-05-26 | ENCE               | L   | 0.548      | -            | -                | -                | -         |    -2.38 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           71 |     1701 | 2025-05-26 | Sangal             | L   | 0.546      | -            | -                | -                | -         |    -9.63 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           70 |     1705 | 2025-05-26 | PARIVISION         | L   | 0.545      | -            | -                | -                | -         |    -6.93 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           69 |     1715 | 2025-05-25 | Ninjas in Pyjamas  | L   | 0.538      | -            | -                | -                | -         |    -1.45 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           68 |     1739 | 2025-05-23 | SAW                | W   | 0.528      | 0.435        | 0.253 (0.058)    | -                | -         |    14.44 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           67 |     1744 | 2025-05-23 | TPuDCATb TPu       | W   | 0.527      | 0.384        | -                | 0.970 (0.196)    | -         |     6.31 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           66 |     1750 | 2025-05-23 | Passion UA         | L   | 0.525      | -            | -                | -                | -         |    -4.69 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           65 |     1760 | 2025-05-22 | ECLOT              | W   | 0.520      | 0.435        | 0.058 (0.013)    | -                | -         |     6.23 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           64 |     1768 | 2025-05-22 | FAVBET             | W   | 0.519      | -            | -                | -                | -         |     6.17 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           63 |     1794 | 2025-05-21 | Monte              | W   | 0.512      | 0.435        | -                | 0.947 (0.211)    | -         |    11.41 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           62 |     1803 | 2025-05-20 | Reason             | W   | 0.507      | -            | -                | -                | -         |     6.24 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           61 |     1823 | 2025-05-20 | Fire Flux          | W   | 0.505      | -            | -                | -                | -         |     4.60 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           60 |     1846 | 2025-05-19 | 9INE               | L   | 0.499      | -            | -                | -                | -         |    -2.23 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           59 |     1868 | 2025-05-17 | Zero Tenacity      | L   | 0.488      | -            | -                | -                | -         |    -8.44 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           58 |     1914 | 2025-05-15 | ECLOT              | L   | 0.474      | -            | -                | -                | -         |    -8.80 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           57 |     1926 | 2025-05-15 | Passion UA         | L   | 0.472      | -            | -                | -                | -         |    -3.66 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           56 |     1946 | 2025-05-14 | ECLOT              | W   | 0.466      | 0.384        | 0.058 (0.010)    | -                | -         |     6.19 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           55 |     1974 | 2025-05-13 | Passion UA         | L   | 0.461      | -            | -                | -                | -         |    -3.55 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           54 |     1988 | 2025-05-13 | CYBERSHOKE         | L   | 0.459      | -            | -                | -                | -         |    -8.13 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           53 |     2036 | 2025-05-11 | CYBERSHOKE         | W   | 0.446      | 0.435        | -                | 0.987 (0.191)    | -         |     6.23 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           52 |     2105 | 2025-05-08 | JANO               | W   | 0.428      | -            | -                | -                | -         |     1.28 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           51 |     2114 | 2025-05-08 | Zero Tenacity      | W   | 0.426      | -            | -                | -                | -         |     6.00 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           50 |     2133 | 2025-05-07 | Nexus              | W   | 0.421      | 0.435        | 0.055 (0.010)    | 0.778 (0.142)    | -         |     6.91 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           49 |     2143 | 2025-05-07 | SPARTA             | W   | 0.419      | -            | -                | -                | -         |     4.55 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           48 |     2166 | 2025-05-06 | Partizan           | L   | 0.414      | -            | -                | -                | -         |    -5.99 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           47 |     2183 | 2025-05-06 | UNiTY              | W   | 0.412      | -            | -                | -                | -         |     2.59 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           46 |     2198 | 2025-05-05 | Nexus              | W   | 0.407      | -            | -                | -                | -         |     6.90 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           45 |     2205 | 2025-05-05 | Zero Tenacity      | L   | 0.406      | -            | -                | -                | -         |    -7.17 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           44 |     2210 | 2025-05-05 | FUT                | L   | 0.405      | -            | -                | -                | -         |    -4.54 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           43 |     2252 | 2025-05-03 | Alliance           | W   | 0.393      | -            | -                | -                | -         |     9.09 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           42 |     2257 | 2025-05-03 | SINNERS            | W   | 0.392      | -            | -                | -                | -         |     5.40 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           41 |     2275 | 2025-05-02 | CYBERSHOKE         | L   | 0.386      | -            | -                | -                | -         |    -6.60 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           40 |     2285 | 2025-05-01 | modeame            | W   | 0.381      | -            | -                | -                | -         |     2.80 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           39 |     2304 | 2025-05-01 | ECLOT              | L   | 0.378      | -            | -                | -                | -         |    -6.72 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           38 |     2320 | 2025-04-30 | CPH Wolves         | W   | 0.373      | -            | -                | -                | -         |     3.94 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           37 |     2347 | 2025-04-29 | Imperial Valkyries | W   | 0.367      | -            | -                | -                | -         |     3.52 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           36 |     2354 | 2025-04-29 | Portuguese Family  | W   | 0.366      | -            | -                | -                | -         |     0.97 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           35 |     2363 | 2025-04-28 | FUT                | L   | 0.360      | -            | -                | -                | -         |    -3.97 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           34 |     2365 | 2025-04-28 | FUT                | L   | 0.360      | -            | -                | -                | -         |    -4.08 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           33 |     2394 | 2025-04-27 | Tricked            | L   | 0.352      | -            | -                | -                | -         |    -4.97 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           32 |     2414 | 2025-04-26 | Prestige           | W   | 0.348      | -            | -                | -                | 1 (0.348) |     0.50 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           31 |     2459 | 2025-04-24 | 9INE               | W   | 0.333      | -            | -                | -                | -         |     9.19 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           30 |     2467 | 2025-04-23 | Passion UA         | L   | 0.327      | -            | -                | -                | -         |    -2.41 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           29 |     2483 | 2025-04-22 | Eternal Fire       | W   | 0.320      | -            | -                | -                | -         |     3.13 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           28 |     2495 | 2025-04-21 | PARIVISION         | L   | 0.315      | -            | -                | -                | -         |    -3.88 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           27 |     2588 | 2025-04-17 | SINNERS            | W   | 0.285      | -            | -                | -                | -         |     4.10 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           26 |     2602 | 2025-04-16 | NOVAQ              | W   | 0.280      | -            | -                | -                | -         |     4.35 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           25 |     2669 | 2025-04-13 | Johnny Speeds      | L   | 0.261      | -            | -                | -                | -         |    -6.89 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           24 |     2672 | 2025-04-13 | 9INE               | L   | 0.260      | -            | -                | -                | -         |    -0.95 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           23 |     2679 | 2025-04-13 | EYEBALLERS         | W   | 0.259      | -            | -                | -                | 1 (0.259) |     0.40 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           22 |     2710 | 2025-04-11 | ECSTATIC           | L   | 0.246      | -            | -                | -                | -         |    -1.64 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           21 |     2868 | 2025-04-05 | OG                 | L   | 0.207      | -            | -                | -                | -         |    -1.71 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           20 |     3030 | 2025-04-01 | KOLESIE            | L   | 0.181      | -            | -                | -                | -         |    -1.45 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           19 |     3078 | 2025-03-30 | ECSTATIC           | L   | 0.167      | -            | -                | -                | -         |    -1.14 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           18 |     3139 | 2025-03-29 | PARIVISION         | L   | 0.160      | -            | -                | -                | -         |    -2.05 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           17 |     3211 | 2025-03-28 | Roler Coaster      | W   | 0.152      | -            | -                | -                | -         |     0.38 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           16 |     3276 | 2025-03-27 | CYBERSHOKE         | L   | 0.146      | -            | -                | -                | -         |    -2.57 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           15 |     3368 | 2025-03-25 | Passion UA         | L   | 0.134      | -            | -                | -                | -         |    -0.94 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           14 |     3449 | 2025-03-22 | Alliance           | W   | 0.113      | -            | -                | -                | -         |     2.68 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           13 |     3487 | 2025-03-20 | ECSTATIC           | W   | 0.098      | -            | -                | -                | -         |     2.45 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           12 |     3566 | 2025-03-18 | Sangal             | L   | 0.088      | -            | -                | -                | -         |    -1.69 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           11 |     3570 | 2025-03-18 | TPuDCATb TPu       | L   | 0.087      | -            | -                | -                | -         |    -1.85 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           10 |     3658 | 2025-03-14 | TPuDCATb TPu       | W   | 0.060      | -            | -                | -                | -         |     0.62 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|            9 |     3674 | 2025-03-13 | Alliance           | W   | 0.054      | -            | -                | -                | -         |     1.30 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|            8 |     3709 | 2025-03-11 | Sangal             | W   | 0.041      | -            | -                | -                | -         |     0.51 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|            7 |     3786 | 2025-03-09 | SINNERS            | L   | 0.028      | -            | -                | -                | -         |    -0.50 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|            6 |     3821 | 2025-03-09 | Zero Tenacity      | L   | 0.025      | -            | -                | -                | -         |    -0.47 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|            5 |     3877 | 2025-03-08 | ARCRED             | W   | 0.020      | -            | -                | -                | -         |     0.30 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|            4 |     3891 | 2025-03-08 | The Last Resort    | L   | 0.019      | -            | -                | -                | -         |    -0.45 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|            3 |     3924 | 2025-03-07 | Spirit Academy     | L   | 0.015      | -            | -                | -                | -         |    -0.19 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|            2 |     3938 | 2025-03-07 | Betclic            | L   | 0.014      | -            | -                | -                | -         |    -0.15 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|            1 |     3999 | 2025-03-06 | Zero Tenacity      | L   | 0.007      | -            | -                | -                | -         |    -0.14 | Cabbi, IceBerg, Lucky, niko, Zyphon   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,405.74)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-15 |      0.681 | $316.00        | $215.27         |
| 2025-06-04 |      0.608 | $863.00        | $524.63         |
| 2025-05-31 |      0.580 | $1,500.00      | $870.03         |
| 2025-05-27 |      0.554 | $1,000.00      | $553.99         |
| 2025-05-11 |      0.448 | $1,500.00      | $672.33         |
| 2025-05-01 |      0.380 | $1,500.00      | $569.49         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
