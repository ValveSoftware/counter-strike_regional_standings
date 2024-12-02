### Roster Details<br />
Team Name: SAW<br />
Roster: Ag1l, ewjerkz, MUTiRiS, roman, story<br />
Global Rank: [12](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_02.md)<br />
Regional Rank: [10]( ../../standings_europe_2024_12_02.md)<br />
<br />
Final Rank Value:  1503.5<br />
<br />
Final Rank Value (1503.5) = Starting Rank Value (1595.4) + Head To Head Adjustments (-91.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.649[<sup>1</sup>](#table2)
- Bounty Collected: 0.545[<sup>2</sup>](#table1)
- Opponent Network: 0.270[<sup>2</sup>](#table1)
- LAN Wins: 0.917[<sup>2</sup>](#table1)

The average of these factors is 0.595<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1595.4
- 400 + ( ( 0.595 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 1595.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           56 |      255 | 2024-11-19 | BetBoom       | L   | 1.000      | -            | -                | -                | -         |   -25.48 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           55 |      264 | 2024-11-18 | Natus Vincere | L   | 1.000      | -            | -                | -                | -         |    -4.75 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           54 |      277 | 2024-11-17 | Falcons       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     4.96 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           53 |      289 | 2024-11-17 | UNiTY         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.34 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           52 |      302 | 2024-11-16 | SINNERS       | L   | 1.000      | -            | -                | -                | -         |   -28.60 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           51 |      762 | 2024-10-27 | B8            | W   | 0.961      | 0.500        | 0.172 (0.083)    | 0.787 (0.378)    | 1 (0.961) |     7.28 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           50 |      771 | 2024-10-27 | Monte         | W   | 0.959      | 0.500        | -                | 0.743 (0.357)    | 1 (0.959) |     3.27 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           49 |      816 | 2024-10-25 | B8            | W   | 0.947      | 0.500        | 0.172 (0.081)    | 0.787 (0.373)    | 1 (0.947) |     6.29 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           48 |      825 | 2024-10-25 | Falcons       | W   | 0.946      | 0.500        | 0.112 (0.053)    | -                | 1 (0.946) |     4.48 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           47 |      932 | 2024-10-18 | 3DMAX         | L   | 0.901      | -            | -                | -                | -         |   -18.60 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           46 |      956 | 2024-10-17 | 9 Pandas      | W   | 0.894      | 0.500        | -                | 0.899 (0.402)    | -         |     3.30 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           45 |      990 | 2024-10-16 | Sangal        | L   | 0.888      | -            | -                | -                | -         |   -18.57 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           44 |     1197 | 2024-10-06 | BIG           | L   | 0.821      | -            | -                | -                | -         |   -17.57 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           43 |     1224 | 2024-10-05 | BetBoom       | W   | 0.815      | 0.500        | 0.117 (0.048)    | 0.517 (0.211)    | 1 (0.815) |     3.22 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           42 |     1264 | 2024-10-04 | FlyQuest      | L   | 0.808      | -            | -                | -                | -         |   -18.31 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           41 |     1273 | 2024-10-04 | Rooster       | W   | 0.807      | -            | -                | -                | 1 (0.807) |     0.20 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           40 |     1447 | 2024-09-29 | 3DMAX         | W   | 0.773      | 0.143        | 0.409 (0.045)    | -                | -         |     8.22 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           39 |     1477 | 2024-09-28 | 9z            | W   | 0.768      | -            | -                | -                | -         |     2.17 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           38 |     1483 | 2024-09-28 | Nemiga        | W   | 0.767      | 0.143        | 0.490 (0.054)    | -                | -         |     4.83 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           37 |     1520 | 2024-09-27 | B8            | L   | 0.761      | -            | -                | -                | -         |   -21.02 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           36 |     1530 | 2024-09-27 | Apogee        | W   | 0.760      | -            | -                | -                | -         |     0.41 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           35 |     2041 | 2024-09-12 | Insilio       | L   | 0.659      | -            | -                | -                | -         |   -20.24 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           34 |     2106 | 2024-09-10 | TSM           | W   | 0.646      | 0.500        | -                | 0.635 (0.205)    | -         |     0.74 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           33 |     2365 | 2024-08-31 | GUN5          | W   | 0.581      | -            | -                | -                | -         |     0.63 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           32 |     2378 | 2024-08-30 | GUN5          | W   | 0.575      | -            | -                | -                | -         |     0.59 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           31 |     2412 | 2024-08-29 | GamerLegion   | W   | 0.568      | -            | -                | -                | -         |     2.99 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           30 |     2425 | 2024-08-29 | GenOne        | W   | 0.567      | -            | -                | -                | -         |     0.13 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           29 |     2740 | 2024-08-22 | Permitta      | W   | 0.519      | -            | -                | -                | -         |     1.43 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           28 |     2776 | 2024-08-21 | Qiang         | W   | 0.514      | -            | -                | -                | -         |     0.11 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           27 |     2818 | 2024-08-21 | OG            | W   | 0.512      | -            | -                | -                | -         |     0.56 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           26 |     2927 | 2024-08-17 | Vitality      | L   | 0.486      | -            | -                | -                | -         |    -3.19 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           25 |     2941 | 2024-08-16 | FaZe          | W   | 0.480      | 1.000        | 0.329 (0.158)    | 0.327 (0.157)    | 1 (0.480) |     8.05 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           24 |     3029 | 2024-08-13 | Natus Vincere | L   | 0.460      | -            | -                | -                | -         |    -2.82 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           23 |     3079 | 2024-08-12 | Sashi         | W   | 0.454      | 0.500        | -                | 0.667 (0.151)    | -         |     0.59 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           22 |     3105 | 2024-08-11 | The MongolZ   | W   | 0.447      | 1.000        | 1.000 (0.447)    | 0.686 (0.306)    | 1 (0.447) |    10.90 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           21 |     3127 | 2024-08-10 | G2            | W   | 0.440      | 1.000        | 1.000 (0.440)    | 0.375 (0.165)    | -         |    12.54 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           20 |     3183 | 2024-08-08 | BIG           | W   | 0.426      | -            | -                | -                | -         |     5.25 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           19 |     3237 | 2024-08-07 | The MongolZ   | W   | 0.419      | 0.143        | 1.000 (0.060)    | -                | -         |    10.54 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           18 |     3490 | 2024-07-31 | Apogee        | W   | 0.373      | -            | -                | -                | -         |     0.15 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           17 |     3602 | 2024-07-28 | fnatic        | L   | 0.353      | -            | -                | -                | -         |    -9.13 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           16 |     3617 | 2024-07-27 | Passion UA    | W   | 0.348      | -            | -                | -                | -         |     1.63 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           15 |     3692 | 2024-07-25 | BC.Game       | W   | 0.333      | -            | -                | -                | -         |     0.17 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           14 |     3718 | 2024-07-24 | Rebels        | L   | 0.327      | -            | -                | -                | -         |   -10.06 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           13 |     3880 | 2024-07-19 | RUSH B        | W   | 0.294      | -            | -                | -                | -         |     0.11 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           12 |     3989 | 2024-07-17 | Sangal        | W   | 0.281      | -            | -                | -                | -         |     2.10 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           11 |     4102 | 2024-07-15 | SINNERS       | W   | 0.268      | -            | -                | -                | -         |     0.93 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           10 |     4442 | 2024-06-13 | Astralis      | L   | 0.052      | -            | -                | -                | -         |    -1.04 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            9 |     4468 | 2024-06-12 | FaZe          | L   | 0.046      | -            | -                | -                | -         |    -0.62 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            8 |     4508 | 2024-06-10 | 3DMAX         | L   | 0.033      | -            | -                | -                | -         |    -0.57 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            7 |     4517 | 2024-06-10 | RUSH B        | W   | 0.032      | -            | -                | -                | -         |     0.01 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            6 |     4520 | 2024-06-10 | Aurora        | W   | 0.032      | -            | -                | -                | -         |     0.06 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            5 |     4556 | 2024-06-09 | SINNERS       | L   | 0.026      | -            | -                | -                | -         |    -0.74 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            4 |     4563 | 2024-06-09 | Monte         | W   | 0.026      | -            | -                | -                | -         |     0.00 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            3 |     4568 | 2024-06-09 | 9 Pandas      | L   | 0.026      | -            | -                | -                | -         |    -0.73 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            2 |     4576 | 2024-06-09 | PARIVISION    | W   | 0.025      | -            | -                | -                | -         |     0.03 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            1 |     4785 | 2024-06-05 | Sangal        | L   | 0.001      | -            | -                | -                | -         |    -0.03 | arrozdoce, ewjerkz, MUTiRiS, roman, story |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($106,275.83)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.29) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.961 | $50,000.00     | $48,038.80      |
| 2024-10-20 |      0.913 | $8,500.00      | $7,764.20       |
| 2024-10-06 |      0.822 | $10,000.00     | $8,222.60       |
| 2024-08-18 |      0.495 | $80,000.00     | $39,560.48      |
| 2024-07-28 |      0.354 | $5,000.00      | $1,771.10       |
| 2024-06-16 |      0.074 | $10,000.00     | $738.07         |
| 2024-06-09 |      0.028 | $6,500.00      | $180.59         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
