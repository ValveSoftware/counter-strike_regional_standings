### Roster Details<br />
Team Name: CPH Wolves<br />
Roster: eraa, Fessor, sausol, szejn, Tapewaare<br />
Global Rank: [100](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_25.md)<br />
Regional Rank: [74]( ../../standings_europe_2024_11_25.md)<br />
<br />
Final Rank Value:  899.9<br />
<br />
Final Rank Value (899.9) = Starting Rank Value (834.4) + Head To Head Adjustments (65.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.296[<sup>1</sup>](#table2)
- Bounty Collected: 0.367[<sup>2</sup>](#table1)
- Opponent Network: 0.205[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.217<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 834.4
- 400 + ( ( 0.217 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 834.4


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
|           58 |     1260 | 2024-10-01 | ALTERNATE aTTaX   | L   | 0.835      | -            | -                | -                | -         |    -8.59 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           57 |     1309 | 2024-09-29 | G2 Ares           | L   | 0.822      | -            | -                | -                | -         |   -21.57 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           56 |     1315 | 2024-09-29 | Into the Breach   | W   | 0.821      | 0.435        | -                | 0.642 (0.229)    | 0 (0.000) |    17.07 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           55 |     1361 | 2024-09-28 | K27               | W   | 0.812      | -            | -                | -                | 0 (0.000) |     4.83 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           54 |     1393 | 2024-09-27 | Passion UA        | L   | 0.808      | -            | -                | -                | -         |    -7.27 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           53 |     1427 | 2024-09-26 | GamerLegion       | L   | 0.802      | -            | -                | -                | -         |    -4.77 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           52 |     1499 | 2024-09-25 | Endpoint          | W   | 0.793      | 0.435        | 0.038 (0.013)    | 0.636 (0.219)    | 0 (0.000) |    15.00 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           51 |     1504 | 2024-09-25 | PeeP              | W   | 0.793      | -            | -                | -                | 0 (0.000) |     2.97 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           50 |     1549 | 2024-09-24 | K27               | L   | 0.787      | -            | -                | -                | -         |   -20.37 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           49 |     1572 | 2024-09-23 | ECSTATIC          | L   | 0.782      | -            | -                | -                | -         |    -9.54 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           48 |     1606 | 2024-09-22 | SovvyKiNG         | W   | 0.775      | -            | -                | -                | 0 (0.000) |     5.46 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           47 |     1612 | 2024-09-22 | Zero Tenacity     | W   | 0.773      | 0.435        | 0.076 (0.026)    | 0.743 (0.250)    | 0 (0.000) |    19.31 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           46 |     1629 | 2024-09-21 | FLuffy Gangsters  | W   | 0.768      | -            | -                | -                | 0 (0.000) |     7.44 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           45 |     1648 | 2024-09-20 | RUBY              | L   | 0.762      | -            | -                | -                | -         |   -15.82 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           44 |     1685 | 2024-09-19 | 9 Pandas          | W   | 0.755      | 0.435        | 0.092 (0.030)    | 0.892 (0.293)    | 0 (0.000) |    19.74 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           43 |     1690 | 2024-09-19 | Verdant           | W   | 0.754      | -            | -                | -                | 0 (0.000) |    10.66 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           42 |     1750 | 2024-09-17 | FAVBET            | L   | 0.742      | -            | -                | -                | -         |    -9.18 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           41 |     1762 | 2024-09-17 | ALTERNATE aTTaX   | W   | 0.740      | 0.435        | 0.070 (0.022)    | 0.729 (0.234)    | 0 (0.000) |    18.23 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           40 |     1793 | 2024-09-15 | FLuffy Gangsters  | W   | 0.729      | -            | -                | -                | -         |     8.07 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           39 |     1797 | 2024-09-15 | CYBERSHOKE        | L   | 0.728      | -            | -                | -                | -         |    -8.46 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           38 |     1856 | 2024-09-14 | FLuffy Gangsters  | W   | 0.719      | -            | -                | -                | -         |     8.19 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           37 |     1864 | 2024-09-13 | Daystar           | W   | 0.715      | -            | -                | -                | -         |     8.14 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           36 |     1900 | 2024-09-12 | DMS               | W   | 0.708      | -            | -                | -                | -         |    10.04 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           35 |     1914 | 2024-09-12 | Astralis Talent   | L   | 0.706      | -            | -                | -                | -         |   -14.80 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           34 |     1935 | 2024-09-11 | ECLOT             | W   | 0.701      | 0.372        | 0.187 (0.049)    | 1.000 (0.261)    | -         |    20.59 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           33 |     1952 | 2024-09-11 | ENCE Academy      | W   | 0.699      | -            | -                | -                | -         |     8.47 | eraa, Fessor, sense, szejn, Tapewaare      |
|           32 |     1979 | 2024-09-10 | Apogee            | L   | 0.692      | -            | -                | -                | -         |   -12.08 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           31 |     2036 | 2024-09-07 | Endpoint          | L   | 0.674      | -            | -                | -                | -         |    -7.11 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           30 |     2097 | 2024-09-05 | UNiTY             | W   | 0.661      | 0.372        | 0.057 (0.014)    | -                | -         |    16.26 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           29 |     2162 | 2024-09-03 | L&G               | W   | 0.648      | 0.372        | 0.028 (0.007)    | 0.444 (0.107)    | -         |     9.20 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           28 |     2214 | 2024-09-01 | Monte Gen         | L   | 0.635      | -            | -                | -                | -         |    -8.74 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           27 |     2220 | 2024-09-01 | CYBERSHOKE        | L   | 0.634      | -            | -                | -                | -         |    -7.20 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           26 |     2247 | 2024-08-30 | Endpoint          | L   | 0.622      | -            | -                | -                | -         |    -7.00 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           25 |     2338 | 2024-08-28 | Aurora Young Blud | W   | 0.608      | 0.435        | 0.021 (0.006)    | 0.682 (0.180)    | -         |    11.86 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           24 |     2387 | 2024-08-27 | Sampi             | L   | 0.602      | -            | -                | -                | -         |    -4.09 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           23 |     2549 | 2024-08-24 | Kosovo            | W   | 0.580      | -            | -                | -                | -         |     6.79 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           22 |     2564 | 2024-08-23 | Spirit Academy    | W   | 0.575      | -            | -                | -                | -         |    12.07 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           21 |     2608 | 2024-08-22 | Preasy            | W   | 0.566      | -            | -                | -                | -         |     6.67 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           20 |     2635 | 2024-08-21 | Spirit Academy    | L   | 0.562      | -            | -                | -                | -         |    -5.57 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           19 |     2958 | 2024-08-12 | Young Ninjas      | L   | 0.499      | -            | -                | -                | -         |    -8.72 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           18 |     3204 | 2024-08-04 | Kosovo            | L   | 0.447      | -            | -                | -                | -         |    -9.27 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           17 |     3392 | 2024-07-30 | Passion UA        | L   | 0.415      | -            | -                | -                | -         |    -1.72 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           16 |     3461 | 2024-07-28 | Sampi             | L   | 0.401      | -            | -                | -                | -         |    -2.62 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           15 |     3486 | 2024-07-27 | 1WIN              | L   | 0.395      | -            | -                | -                | -         |    -8.48 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           14 |     3594 | 2024-07-24 | SovvyKiNG         | W   | 0.373      | -            | -                | -                | -         |     2.83 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           13 |     3623 | 2024-07-23 | Sampi             | L   | 0.368      | -            | -                | -                | -         |    -2.44 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           12 |     3644 | 2024-07-22 | TSM               | W   | 0.362      | -            | -                | -                | -         |     7.82 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           11 |     3655 | 2024-07-22 | SINNERS           | L   | 0.361      | -            | -                | -                | -         |    -1.28 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           10 |     3700 | 2024-07-20 | INFINITE          | W   | 0.349      | -            | -                | -                | -         |     1.57 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            9 |     3709 | 2024-07-20 | SovvyKiNG         | L   | 0.348      | -            | -                | -                | -         |    -8.40 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            8 |     3744 | 2024-07-19 | Heimo             | W   | 0.341      | -            | -                | -                | -         |     2.77 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            7 |     3820 | 2024-07-18 | Passion UA        | W   | 0.333      | 0.435        | 0.103 (0.015)    | 1.000 (0.145)    | -         |     8.99 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            6 |     3981 | 2024-07-15 | GUN5              | W   | 0.313      | 0.435        | 0.048 (0.007)    | 1.000 (0.136)    | -         |     6.79 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            5 |     4197 | 2024-06-16 | 777               | W   | 0.120      | -            | -                | -                | -         |     0.46 | BøghmagiC, Fessor, szejn, Tapewaare, tOPZ  |
|            4 |     4265 | 2024-06-14 | FLuffy Gangsters  | W   | 0.107      | -            | -                | -                | -         |     1.20 | BøghmagiC, Fessor, szejn, Tapewaare, tOPZ  |
|            3 |     4306 | 2024-06-13 | INFINITE          | W   | 0.100      | -            | -                | -                | -         |     0.45 | BøghmagiC, Fessor, szejn, Tapewaare, tOPZ  |
|            2 |     4325 | 2024-06-12 | Sashi             | L   | 0.095      | -            | -                | -                | -         |    -0.63 | BøghmagiC, Fessor, szejn, Tapewaare, tOPZ  |
|            1 |     4331 | 2024-06-12 | WOPA              | W   | 0.094      | -            | -                | -                | -         |     1.27 | BøghmagiC, Fessor, szejn, Tapewaare, tOPZ  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,671.55)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.767 | $2,000.00      | $1,534.98       |
| 2024-06-12 |      0.095 | $1,441.00      | $136.57         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
