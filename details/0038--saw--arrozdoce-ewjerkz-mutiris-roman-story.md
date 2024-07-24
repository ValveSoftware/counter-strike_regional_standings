### Roster Details<br />
Team Name: SAW<br />
Roster: arrozdoce, ewjerkz, MUTiRiS, roman, story<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [38](../standings_global.md)<br />
Regional Rank: [26]( ../standings_europe.md)<br />
Final Rank Value:  1170.1<br />
<br />
Final Rank Value (1170.1) = Starting Rank Value (1189.2) + Head To Head Adjustments (-19.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.521[<sup>1</sup>](#table2)
- Bounty Collected: 0.518[<sup>2</sup>](#table1)
- Opponent Network: 0.246[<sup>2</sup>](#table1)
- LAN Wins: 0.274[<sup>2</sup>](#table1)

The average of these factors is 0.390<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1189.2
- 400 + ( ( 0.390 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1189.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           54 |        2 | 2024-07-24 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -21.95 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           53 |      164 | 2024-07-19 | RUSH B            | W   | 1.000      | 0.500        | -                | 0.306 (0.153)    | 0 (0.000) |     5.07 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           52 |      273 | 2024-07-17 | Sangal            | W   | 1.000      | 0.500        | 0.195 (0.097)    | 0.860 (0.430)    | 0 (0.000) |    16.80 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           51 |      386 | 2024-07-15 | SINNERS           | W   | 1.000      | 0.500        | 0.048 (0.024)    | 0.769 (0.385)    | 0 (0.000) |     7.35 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           50 |      726 | 2024-06-13 | Astralis          | L   | 0.925      | -            | -                | -                | -         |    -1.28 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           49 |      752 | 2024-06-12 | FaZe              | L   | 0.918      | -            | -                | -                | -         |    -0.75 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           48 |      792 | 2024-06-10 | 3DMAX             | L   | 0.905      | -            | -                | -                | -         |   -14.97 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           47 |      801 | 2024-06-10 | RUSH B            | W   | 0.905      | -            | -                | -                | -         |     5.82 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           46 |      804 | 2024-06-10 | Aurora            | W   | 0.905      | 0.143        | 0.423 (0.055)    | 0.783 (0.101)    | -         |    20.18 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           45 |      840 | 2024-06-09 | SINNERS           | L   | 0.899      | -            | -                | -                | -         |   -19.57 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           44 |      847 | 2024-06-09 | Monte             | W   | 0.899      | -            | -                | -                | -         |     6.90 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           43 |      852 | 2024-06-09 | 9 Pandas          | L   | 0.898      | -            | -                | -                | -         |   -16.92 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           42 |      860 | 2024-06-09 | PARIVISION        | W   | 0.898      | -            | -                | -                | -         |     8.83 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           41 |     1069 | 2024-06-05 | Sangal            | L   | 0.874      | -            | -                | -                | -         |   -16.40 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           40 |     1124 | 2024-06-04 | RUSH B            | L   | 0.867      | -            | -                | -                | -         |   -23.96 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           39 |     1173 | 2024-06-02 | Zero Tenacity     | L   | 0.853      | -            | -                | -                | -         |   -17.40 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           38 |     1240 | 2024-05-31 | Sangal            | W   | 0.840      | 0.143        | 0.195 (0.023)    | 0.860 (0.103)    | -         |     8.66 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           37 |     1246 | 2024-05-31 | fnatic            | L   | 0.839      | -            | -                | -                | -         |    -5.30 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           36 |     1249 | 2024-05-31 | FAVBET            | W   | 0.838      | -            | -                | -                | -         |     2.23 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           35 |     1621 | 2024-05-17 | Aurora            | L   | 0.745      | -            | -                | -                | -         |    -4.56 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           34 |     1642 | 2024-05-16 | Eternal Fire      | L   | 0.740      | -            | -                | -                | -         |    -2.06 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           33 |     1658 | 2024-05-16 | Aurora            | W   | 0.738      | 0.769        | 0.423 (0.240)    | 0.783 (0.444)    | -         |    19.30 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           32 |     2102 | 2024-04-28 | Virtus.pro        | L   | 0.619      | -            | -                | -                | -         |    -0.92 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           31 |     2117 | 2024-04-27 | Eternal Fire      | W   | 0.613      | 0.889        | 0.833 (0.454)    | 0.443 (0.242)    | 1 (0.613) |    17.94 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           30 |     2149 | 2024-04-26 | Imperial          | W   | 0.606      | 0.889        | 0.317 (0.171)    | 0.653 (0.352)    | 1 (0.606) |    14.09 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           29 |     2198 | 2024-04-24 | Virtus.pro        | L   | 0.593      | -            | -                | -                | -         |    -0.73 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           28 |     2220 | 2024-04-23 | 3DMAX             | L   | 0.585      | -            | -                | -                | -         |    -8.35 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           27 |     2453 | 2024-04-16 | Sampi             | L   | 0.538      | -            | -                | -                | -         |   -13.82 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           26 |     2571 | 2024-04-10 | 9 Pandas          | W   | 0.501      | 0.500        | 0.105 (0.026)    | 0.578 (0.145)    | -         |     4.37 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           25 |     2623 | 2024-04-09 | 3DMAX             | L   | 0.494      | -            | -                | -                | -         |    -7.23 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           24 |     2733 | 2024-04-05 | PGE Turow         | W   | 0.465      | -            | -                | -                | -         |     0.70 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           23 |     2767 | 2024-04-04 | Betera            | W   | 0.460      | -            | -                | -                | -         |     0.93 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           22 |     2810 | 2024-04-03 | PERA              | W   | 0.453      | 0.500        | -                | 0.462 (0.105)    | -         |     2.53 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           21 |     3055 | 2024-03-20 | FURIA             | L   | 0.360      | -            | -                | -                | -         |    -0.44 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           20 |     3072 | 2024-03-19 | paiN              | L   | 0.353      | -            | -                | -                | -         |    -1.99 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           19 |     3080 | 2024-03-18 | Cloud9            | L   | 0.347      | -            | -                | -                | -         |    -6.74 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           18 |     3094 | 2024-03-17 | GamerLegion       | W   | 0.341      | -            | -                | -                | 1 (0.341) |     1.34 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           17 |     3111 | 2024-03-17 | KOI               | W   | 0.339      | -            | -                | -                | 1 (0.339) |     3.98 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           16 |     3199 | 2024-03-13 | System5           | W   | 0.314      | -            | -                | -                | -         |     0.51 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           15 |     3283 | 2024-03-10 | OG                | W   | 0.293      | 0.535        | 0.170 (0.027)    | -                | -         |     2.79 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           14 |     3324 | 2024-03-08 | Cloud9            | W   | 0.281      | -            | -                | -                | -         |     3.42 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           13 |     3358 | 2024-03-07 | Liquid            | W   | 0.273      | 0.535        | 0.411 (0.060)    | -                | -         |     6.86 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           12 |     3414 | 2024-03-05 | Monte             | W   | 0.261      | -            | -                | -                | -         |     2.61 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           11 |     3578 | 2024-02-26 | RUSH B            | W   | 0.208      | -            | -                | -                | -         |     0.78 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           10 |     3792 | 2024-02-17 | fnatic            | W   | 0.146      | -            | -                | -                | 1 (0.146) |     4.18 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            9 |     3816 | 2024-02-16 | Enterprise        | W   | 0.140      | -            | -                | -                | 1 (0.140) |     0.92 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            8 |     3848 | 2024-02-15 | Ninjas in Pyjamas | W   | 0.132      | -            | -                | -                | 1 (0.132) |     0.05 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            7 |     3886 | 2024-02-14 | 9 Pandas          | L   | 0.126      | -            | -                | -                | -         |    -2.76 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            6 |     3897 | 2024-02-14 | Virtus.pro        | L   | 0.125      | -            | -                | -                | -         |    -0.13 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            5 |     4022 | 2024-02-04 | Rhyno             | W   | 0.059      | -            | -                | -                | -         |     0.49 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            4 |     4052 | 2024-02-03 | KOI               | W   | 0.053      | -            | -                | -                | -         |     0.67 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            3 |     4107 | 2024-02-01 | AL QATRAO         | W   | 0.040      | -            | -                | -                | -         |     0.08 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            2 |     4108 | 2024-02-01 | Agency            | W   | 0.040      | -            | -                | -                | -         |     0.01 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            1 |     4113 | 2024-02-01 | AL QATRAO         | L   | 0.039      | -            | -                | -                | -         |    -1.16 | arrozdoce, ewjerkz, MUTiRiS, roman, story |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($33,356.97)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.946 | $10,000.00     | $9,464.04       |
| 2024-06-09 |      0.900 | $6,500.00      | $5,852.47       |
| 2024-05-12 |      0.713 | $12,000.00     | $8,556.24       |
| 2024-03-20 |      0.360 | $10,000.00     | $3,601.09       |
| 2024-03-10 |      0.294 | $20,000.00     | $5,883.13       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
