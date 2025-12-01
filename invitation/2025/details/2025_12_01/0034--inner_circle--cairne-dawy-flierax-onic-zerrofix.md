### Roster Details<br />
Team Name: Inner Circle<br />
Roster: cairne, Dawy, Flierax, onic, zeRRoFIX<br />
Global Rank: [34](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [24]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  1319.3<br />
<br />
Final Rank Value (1319.3) = Starting Rank Value (1467.8) + Head To Head Adjustments (-148.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.476[<sup>1</sup>](#table2)
- Bounty Collected: 0.548[<sup>2</sup>](#table1)
- Opponent Network: 0.296[<sup>2</sup>](#table1)
- LAN Wins: 0.923[<sup>2</sup>](#table1)

The average of these factors is 0.561<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1467.8
- 400 + ( ( 0.561 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1467.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           61 |        6 | 2025-11-30 | FUT               | L   | 1.000      | -            | -                | -                | -         |    -9.36 | cairne, Dawy, Flierax, onic, zeRRoFIX |
|           60 |       19 | 2025-11-29 | Sashi             | W   | 1.000      | 0.333        | -                | 0.793 (0.264)    | 1 (1.000) |    11.31 | cairne, Dawy, Flierax, onic, zeRRoFIX |
|           59 |       28 | 2025-11-29 | AaB               | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.85 | cairne, Dawy, Flierax, onic, zeRRoFIX |
|           58 |      169 | 2025-11-22 | FUT               | L   | 1.000      | -            | -                | -                | -         |   -11.41 | cairne, Dawy, Flierax, onic, zeRRoFIX |
|           57 |      182 | 2025-11-21 | GenOne            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.84 | cairne, Dawy, Flierax, onic, zeRRoFIX |
|           56 |      207 | 2025-11-21 | Betclic           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.80 | cairne, Dawy, Flierax, onic, zeRRoFIX |
|           55 |      209 | 2025-11-21 | illwill           | L   | 1.000      | -            | -                | -                | -         |   -30.36 | cairne, Dawy, Flierax, onic, zeRRoFIX |
|           54 |      565 | 2025-11-07 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -25.75 | cairne, Dawy, Flierax, onic, zeRRoFIX |
|           53 |      577 | 2025-11-07 | Metizport         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.77 | cairne, Dawy, Flierax, onic, zeRRoFIX |
|           52 |      608 | 2025-11-07 | Young Ninjas      | L   | 1.000      | -            | -                | -                | -         |   -30.95 | cairne, Dawy, Flierax, onic, zeRRoFIX |
|           51 |      617 | 2025-11-07 | Acend             | L   | 1.000      | -            | -                | -                | -         |   -29.49 | cairne, Dawy, Flierax, onic, zeRRoFIX |
|           50 |      641 | 2025-11-07 | Minkens finest    | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.10 | cairne, Dawy, Flierax, onic, zeRRoFIX |
|           49 |     1421 | 2025-10-12 | PARIVISION        | L   | 0.866      | -            | -                | -                | -         |   -13.13 | cairne, Dawy, Flierax, nifee, onic    |
|           48 |     1435 | 2025-10-11 | Nemiga            | W   | 0.860      | 0.435        | 0.083 (0.031)    | 0.744 (0.278)    | -         |     3.07 | cairne, Dawy, Flierax, nifee, onic    |
|           47 |     1477 | 2025-10-10 | Monte             | W   | 0.853      | 0.435        | 0.033 (0.012)    | 0.945 (0.350)    | -         |     6.81 | cairne, Dawy, Flierax, nifee, onic    |
|           46 |     1570 | 2025-10-08 | Eternal Fire      | W   | 0.840      | 0.435        | -                | 0.743 (0.271)    | -         |     1.55 | cairne, Dawy, Flierax, nifee, onic    |
|           45 |     1618 | 2025-10-07 | FaZe              | L   | 0.834      | -            | -                | -                | -         |    -7.27 | cairne, Dawy, Flierax, nifee, onic    |
|           44 |     1700 | 2025-10-06 | FURIA             | L   | 0.825      | -            | -                | -                | -         |    -1.64 | cairne, Dawy, Flierax, nifee, onic    |
|           43 |     1763 | 2025-10-05 | The MongolZ       | W   | 0.818      | 1.000        | 1.000 (0.818)    | 0.458 (0.375)    | 1 (0.818) |    23.48 | cairne, Dawy, Flierax, nifee, onic    |
|           42 |     1806 | 2025-10-04 | Spirit            | L   | 0.811      | -            | -                | -                | -         |    -4.19 | cairne, Dawy, Flierax, nifee, onic    |
|           41 |     1949 | 2025-09-30 | Gentle Mates      | W   | 0.786      | 0.769        | 0.182 (0.110)    | 0.665 (0.402)    | 1 (0.786) |    15.17 | cairne, Dawy, Flierax, nifee, onic    |
|           40 |     1985 | 2025-09-29 | GamerLegion       | W   | 0.779      | 0.769        | 0.263 (0.157)    | 0.402 (0.241)    | 1 (0.779) |    17.25 | cairne, Dawy, Flierax, nifee, onic    |
|           39 |     2029 | 2025-09-28 | 3DMAX             | W   | 0.772      | 0.769        | 0.521 (0.309)    | 0.493 (0.293)    | 1 (0.772) |    20.00 | cairne, Dawy, Flierax, nifee, onic    |
|           38 |     2266 | 2025-09-21 | Betera            | L   | 0.727      | -            | -                | -                | -         |   -20.22 | cairne, Dawy, Flierax, nifee, onic    |
|           37 |     2310 | 2025-09-20 | Friendly Campers  | L   | 0.718      | -            | -                | -                | -         |   -15.91 | cairne, Dawy, Flierax, nifee, onic    |
|           36 |     2364 | 2025-09-18 | ARCRED            | W   | 0.706      | -            | -                | -                | -         |     1.43 | cairne, Dawy, Flierax, nifee, onic    |
|           35 |     2519 | 2025-09-13 | BIG               | L   | 0.675      | -            | -                | -                | -         |   -12.39 | cairne, Dawy, Flierax, nifee, onic    |
|           34 |     2679 | 2025-09-10 | Imperial          | L   | 0.654      | -            | -                | -                | -         |   -10.92 | cairne, Dawy, Flierax, nifee, onic    |
|           33 |     2926 | 2025-08-31 | BetBoom           | L   | 0.587      | -            | -                | -                | -         |    -6.22 | cairne, Dawy, Flierax, nifee, onic    |
|           32 |     2929 | 2025-08-31 | Spirit Academy    | W   | 0.586      | -            | -                | -                | -         |     1.01 | cairne, Dawy, Flierax, nifee, onic    |
|           31 |     2949 | 2025-08-30 | JiJieHao          | W   | 0.581      | -            | -                | -                | -         |     1.00 | cairne, Dawy, Flierax, nifee, onic    |
|           30 |     2982 | 2025-08-29 | Oramond           | W   | 0.574      | 0.435        | -                | 0.987 (0.246)    | -         |     1.65 | cairne, Dawy, Flierax, nifee, onic    |
|           29 |     3140 | 2025-08-22 | BetBoom           | L   | 0.526      | -            | -                | -                | -         |    -6.28 | cairne, Dawy, Flierax, nifee, onic    |
|           28 |     3157 | 2025-08-21 | CYBERSHOKE        | W   | 0.520      | 0.486        | 0.045 (0.011)    | 0.936 (0.237)    | -         |     2.81 | cairne, Dawy, Flierax, nifee, onic    |
|           27 |     3216 | 2025-08-19 | 9INE              | W   | 0.505      | 0.486        | 0.049 (0.012)    | -                | -         |     5.29 | cairne, Dawy, Flierax, nifee, onic    |
|           26 |     3339 | 2025-08-15 | ECSTATIC          | L   | 0.480      | -            | -                | -                | -         |    -8.73 | cairne, Dawy, Flierax, nifee, onic    |
|           25 |     3399 | 2025-08-14 | OG                | L   | 0.472      | -            | -                | -                | -         |    -9.32 | cairne, Dawy, Flierax, nifee, onic    |
|           24 |     3574 | 2025-08-10 | BIG               | L   | 0.447      | -            | -                | -                | -         |   -13.71 | cairne, Dawy, Flierax, nifee, onic    |
|           23 |     3611 | 2025-08-09 | SAW               | L   | 0.438      | -            | -                | -                | -         |    -3.97 | cairne, Dawy, Flierax, nifee, onic    |
|           22 |     3646 | 2025-08-07 | Johnny Speeds     | W   | 0.425      | -            | -                | -                | -         |     4.40 | cairne, Dawy, Flierax, nifee, onic    |
|           21 |     3653 | 2025-08-06 | Natus Vincere     | L   | 0.420      | -            | -                | -                | -         |    -2.62 | cairne, Dawy, Flierax, nifee, onic    |
|           20 |     3895 | 2025-07-22 | Partizan          | L   | 0.320      | -            | -                | -                | -         |    -9.83 | cairne, Dawy, Flierax, nifee, onic    |
|           19 |     3898 | 2025-07-21 | RUBY              | W   | 0.314      | -            | -                | -                | -         |     0.69 | cairne, Dawy, Flierax, nifee, onic    |
|           18 |     3937 | 2025-07-19 | Betera            | W   | 0.300      | -            | -                | -                | -         |     0.61 | cairne, Dawy, Flierax, nifee, onic    |
|           17 |     3994 | 2025-07-17 | PARIVISION        | W   | 0.287      | 0.624        | 0.135 (0.024)    | -                | -         |     2.97 | cairne, Dawy, Flierax, nifee, onic    |
|           16 |     4014 | 2025-07-16 | Nemiga            | W   | 0.281      | 0.624        | 0.083 (0.015)    | -                | -         |     1.12 | cairne, Dawy, Flierax, nifee, onic    |
|           15 |     4036 | 2025-07-15 | Sashi             | W   | 0.274      | -            | -                | -                | -         |     3.02 | cairne, Dawy, Flierax, nifee, onic    |
|           14 |     4043 | 2025-07-15 | Passion UA        | W   | 0.273      | -            | -                | -                | -         |     0.19 | cairne, Dawy, Flierax, nifee, onic    |
|           13 |     4064 | 2025-07-14 | 9INE              | W   | 0.267      | -            | -                | -                | -         |     2.28 | cairne, Dawy, Flierax, nifee, onic    |
|           12 |     4322 | 2025-06-22 | Nexus             | L   | 0.121      | -            | -                | -                | -         |    -3.29 | cairne, Dawy, Flierax, nifee, onic    |
|           11 |     4325 | 2025-06-22 | fnatic            | W   | 0.120      | -            | -                | -                | -         |     1.88 | cairne, Dawy, Flierax, nifee, onic    |
|           10 |     4330 | 2025-06-22 | BC.Game           | W   | 0.119      | -            | -                | -                | -         |     0.03 | cairne, Dawy, Flierax, nifee, onic    |
|            9 |     4342 | 2025-06-21 | Ninjas in Pyjamas | L   | 0.113      | -            | -                | -                | -         |    -2.36 | cairne, Dawy, Flierax, nifee, onic    |
|            8 |     4343 | 2025-06-21 | FAVBET            | W   | 0.112      | -            | -                | -                | -         |     0.17 | cairne, Dawy, Flierax, nifee, onic    |
|            7 |     4348 | 2025-06-21 | Betclic           | W   | 0.111      | -            | -                | -                | -         |     0.03 | cairne, Dawy, Flierax, nifee, onic    |
|            6 |     4379 | 2025-06-19 | Monte             | W   | 0.098      | -            | -                | -                | -         |     0.93 | cairne, Dawy, Flierax, nifee, onic    |
|            5 |     4393 | 2025-06-18 | 9INE              | W   | 0.091      | -            | -                | -                | -         |     0.83 | cairne, Dawy, Flierax, nifee, onic    |
|            4 |     4461 | 2025-06-14 | ECSTATIC          | L   | 0.068      | -            | -                | -                | -         |    -1.29 | cairne, Dawy, Flierax, nifee, onic    |
|            3 |     4469 | 2025-06-14 | kONO              | W   | 0.067      | -            | -                | -                | -         |     0.06 | cairne, Dawy, Flierax, nifee, onic    |
|            2 |     4486 | 2025-06-14 | Alliance          | L   | 0.066      | -            | -                | -                | -         |    -1.28 | cairne, Dawy, Flierax, nifee, onic    |
|            1 |     4504 | 2025-06-13 | Preasy            | W   | 0.061      | -            | -                | -                | -         |     0.01 | cairne, Dawy, Flierax, nifee, onic    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($45,721.68)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-30 |      1.000 | $1,000.00      | $1,000.00       |
| 2025-10-12 |      0.867 | $20,500.00     | $17,767.85      |
| 2025-10-12 |      0.866 | $11,000.00     | $9,522.00       |
| 2025-09-21 |      0.727 | $2,000.00      | $1,453.88       |
| 2025-08-31 |      0.587 | $10,000.00     | $5,868.36       |
| 2025-08-22 |      0.527 | $5,833.00      | $3,076.05       |
| 2025-08-10 |      0.447 | $2,000.00      | $893.71         |
| 2025-07-22 |      0.320 | $4,000.00      | $1,280.16       |
| 2025-06-22 |      0.120 | $2,000.00      | $240.52         |
| 2025-06-22 |      0.120 | $38,500.00     | $4,619.15       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
