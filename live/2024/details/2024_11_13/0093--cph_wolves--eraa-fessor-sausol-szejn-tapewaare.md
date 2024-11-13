### Roster Details<br />
Team Name: CPH Wolves<br />
Roster: eraa, Fessor, sausol, szejn, Tapewaare<br />
Global Rank: [93](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_13.md)<br />
Regional Rank: [65]( ../../standings_europe_2024_11_13.md)<br />
<br />
Final Rank Value:  875.7<br />
<br />
Final Rank Value (875.7) = Starting Rank Value (837.4) + Head To Head Adjustments (38.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.297[<sup>1</sup>](#table2)
- Bounty Collected: 0.353[<sup>2</sup>](#table1)
- Opponent Network: 0.226[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.219<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 837.4
- 400 + ( ( 0.219 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 837.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           58 |      991 | 2024-10-01 | ALTERNATE aTTaX   | L   | 0.914      | -            | -                | -                | -         |   -13.64 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           57 |     1040 | 2024-09-29 | G2 Ares           | L   | 0.900      | -            | -                | -                | -         |   -23.66 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           56 |     1046 | 2024-09-29 | Into the Breach   | W   | 0.899      | 0.435        | -                | 0.673 (0.263)    | 0 (0.000) |    17.86 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           55 |     1092 | 2024-09-28 | K27               | W   | 0.891      | -            | -                | -                | 0 (0.000) |     5.64 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           54 |     1124 | 2024-09-27 | Passion UA        | L   | 0.886      | -            | -                | -                | -         |   -10.17 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           53 |     1158 | 2024-09-26 | GamerLegion       | L   | 0.881      | -            | -                | -                | -         |    -8.47 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           52 |     1230 | 2024-09-25 | Endpoint          | W   | 0.872      | 0.435        | 0.026 (0.010)    | 0.604 (0.229)    | 0 (0.000) |    15.45 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           51 |     1235 | 2024-09-25 | PeeP              | W   | 0.871      | -            | -                | -                | 0 (0.000) |     3.32 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           50 |     1280 | 2024-09-24 | K27               | L   | 0.866      | -            | -                | -                | -         |   -22.20 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           49 |     1303 | 2024-09-23 | ECSTATIC          | L   | 0.861      | -            | -                | -                | -         |   -10.85 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           48 |     1337 | 2024-09-22 | SovvyKiNG         | W   | 0.853      | -            | -                | -                | 0 (0.000) |     7.55 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           47 |     1343 | 2024-09-22 | Zero Tenacity     | W   | 0.852      | 0.435        | 0.059 (0.022)    | 0.753 (0.279)    | 0 (0.000) |    19.07 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           46 |     1360 | 2024-09-21 | FLuffy Gangsters  | W   | 0.847      | -            | -                | -                | 0 (0.000) |     8.59 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           45 |     1379 | 2024-09-20 | RUBY              | L   | 0.841      | -            | -                | -                | -         |   -17.42 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           44 |     1416 | 2024-09-19 | 9 Pandas          | W   | 0.834      | 0.435        | 0.088 (0.032)    | 0.858 (0.311)    | 0 (0.000) |    20.00 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           43 |     1421 | 2024-09-19 | Verdant           | W   | 0.833      | -            | -                | -                | 0 (0.000) |    11.42 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           42 |     1481 | 2024-09-17 | FAVBET            | L   | 0.821      | -            | -                | -                | -         |   -10.20 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           41 |     1493 | 2024-09-17 | ALTERNATE aTTaX   | W   | 0.819      | 0.435        | 0.039 (0.014)    | 0.664 (0.236)    | 0 (0.000) |    14.78 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           40 |     1524 | 2024-09-15 | FLuffy Gangsters  | W   | 0.807      | -            | -                | -                | -         |     9.28 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           39 |     1528 | 2024-09-15 | CYBERSHOKE        | L   | 0.807      | -            | -                | -                | -         |    -9.36 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           38 |     1587 | 2024-09-14 | FLuffy Gangsters  | W   | 0.798      | -            | -                | -                | -         |     9.48 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           37 |     1595 | 2024-09-13 | Daystar           | W   | 0.794      | -            | -                | -                | -         |     9.10 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           36 |     1631 | 2024-09-12 | DMS               | W   | 0.786      | -            | -                | -                | -         |    11.22 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           35 |     1645 | 2024-09-12 | Astralis Talent   | L   | 0.785      | -            | -                | -                | -         |   -18.59 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           34 |     1666 | 2024-09-11 | ECLOT             | W   | 0.780      | 0.372        | 0.077 (0.022)    | 1.000 (0.290)    | -         |    20.23 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           33 |     1683 | 2024-09-11 | ENCE Academy      | W   | 0.778      | -            | -                | -                | -         |     9.63 | eraa, Fessor, sense, szejn, Tapewaare      |
|           32 |     1710 | 2024-09-10 | Apogee            | L   | 0.771      | -            | -                | -                | -         |   -12.93 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           31 |     1767 | 2024-09-07 | Endpoint          | L   | 0.753      | -            | -                | -                | -         |    -8.71 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           30 |     1828 | 2024-09-05 | UNiTY             | W   | 0.740      | 0.372        | 0.023 (0.006)    | -                | -         |    16.62 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           29 |     1893 | 2024-09-03 | L&G               | W   | 0.727      | 0.372        | -                | 0.418 (0.113)    | -         |     8.80 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           28 |     1945 | 2024-09-01 | Monte Gen         | L   | 0.714      | -            | -                | -                | -         |    -9.94 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           27 |     1951 | 2024-09-01 | CYBERSHOKE        | L   | 0.713      | -            | -                | -                | -         |    -7.80 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           26 |     1978 | 2024-08-30 | Endpoint          | L   | 0.700      | -            | -                | -                | -         |    -8.64 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           25 |     2069 | 2024-08-28 | Aurora Young Blud | W   | 0.686      | 0.435        | 0.020 (0.006)    | 0.652 (0.194)    | -         |    12.25 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           24 |     2118 | 2024-08-27 | Sampi             | L   | 0.681      | -            | -                | -                | -         |    -7.05 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           23 |     2280 | 2024-08-24 | The Suspect       | W   | 0.659      | -            | -                | -                | -         |     7.60 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           22 |     2295 | 2024-08-23 | Spirit Academy    | W   | 0.654      | 0.143        | 0.065 (0.006)    | -                | -         |    13.87 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           21 |     2339 | 2024-08-22 | Preasy            | W   | 0.645      | -            | -                | -                | -         |     7.40 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           20 |     2366 | 2024-08-21 | Spirit Academy    | L   | 0.640      | -            | -                | -                | -         |    -6.11 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           19 |     2689 | 2024-08-12 | Young Ninjas      | L   | 0.578      | -            | -                | -                | -         |    -9.92 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           18 |     2935 | 2024-08-04 | The Suspect       | L   | 0.525      | -            | -                | -                | -         |   -10.95 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           17 |     3123 | 2024-07-30 | Passion UA        | L   | 0.494      | -            | -                | -                | -         |    -3.82 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           16 |     3192 | 2024-07-28 | Sampi             | L   | 0.480      | -            | -                | -                | -         |    -5.07 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           15 |     3217 | 2024-07-27 | 1WIN              | L   | 0.473      | -            | -                | -                | -         |   -10.10 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           14 |     3325 | 2024-07-24 | SovvyKiNG         | W   | 0.452      | -            | -                | -                | -         |     5.47 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           13 |     3354 | 2024-07-23 | Sampi             | L   | 0.447      | -            | -                | -                | -         |    -4.90 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           12 |     3375 | 2024-07-22 | TSM               | W   | 0.441      | -            | -                | -                | -         |     8.67 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           11 |     3386 | 2024-07-22 | SINNERS           | L   | 0.439      | -            | -                | -                | -         |    -2.50 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           10 |     3431 | 2024-07-20 | INFINITE          | W   | 0.428      | -            | -                | -                | -         |     1.91 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            9 |     3440 | 2024-07-20 | SovvyKiNG         | L   | 0.427      | -            | -                | -                | -         |    -8.40 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            8 |     3475 | 2024-07-19 | Heimo             | W   | 0.420      | -            | -                | -                | -         |     3.07 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            7 |     3551 | 2024-07-18 | Passion UA        | W   | 0.411      | 0.435        | 0.105 (0.019)    | 1.000 (0.179)    | -         |     9.30 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            6 |     3712 | 2024-07-15 | GUN5              | W   | 0.392      | 0.435        | 0.051 (0.009)    | 1.000 (0.170)    | -         |     8.44 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            5 |     3928 | 2024-06-16 | 777               | W   | 0.199      | -            | -                | -                | -         |     1.32 | BøghmagiC, Fessor, szejn, Tapewaare, tOPZ  |
|            4 |     3996 | 2024-06-14 | FLuffy Gangsters  | W   | 0.186      | -            | -                | -                | -         |     2.08 | BøghmagiC, Fessor, szejn, Tapewaare, tOPZ  |
|            3 |     4037 | 2024-06-13 | INFINITE          | W   | 0.179      | -            | -                | -                | -         |     0.80 | BøghmagiC, Fessor, szejn, Tapewaare, tOPZ  |
|            2 |     4056 | 2024-06-12 | Sashi             | L   | 0.173      | -            | -                | -                | -         |    -1.77 | BøghmagiC, Fessor, szejn, Tapewaare, tOPZ  |
|            1 |     4062 | 2024-06-12 | WOPA              | W   | 0.173      | -            | -                | -                | -         |     1.29 | BøghmagiC, Fessor, szejn, Tapewaare, tOPZ  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,942.18)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.846 | $2,000.00      | $1,692.28       |
| 2024-06-12 |      0.173 | $1,441.00      | $249.91         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
