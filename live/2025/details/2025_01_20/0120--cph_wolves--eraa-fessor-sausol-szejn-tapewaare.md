### Roster Details<br />
Team Name: CPH Wolves<br />
Roster: eraa, Fessor, sausol, szejn, Tapewaare<br />
Global Rank: [120](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [87]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  811.1<br />
<br />
Final Rank Value (811.1) = Starting Rank Value (760.1) + Head To Head Adjustments (51.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.290[<sup>1</sup>](#table2)
- Bounty Collected: 0.343[<sup>2</sup>](#table1)
- Opponent Network: 0.092[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.181<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 760.1
- 400 + ( ( 0.181 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 760.1


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
|           45 |     1852 | 2024-10-01 | ALTERNATE aTTaX   | L   | 0.466      | -            | -                | -                | -         |    -3.38 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           44 |     1901 | 2024-09-29 | G2 Ares           | L   | 0.453      | -            | -                | -                | -         |   -11.23 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           43 |     1907 | 2024-09-29 | Into the Breach   | W   | 0.452      | 0.435        | -                | 0.510 (0.100)    | 0 (0.000) |     9.39 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           42 |     1953 | 2024-09-28 | K27               | W   | 0.443      | -            | -                | -                | 0 (0.000) |     3.16 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           41 |     1985 | 2024-09-27 | Passion UA        | L   | 0.438      | -            | -                | -                | -         |    -2.22 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           40 |     2019 | 2024-09-26 | GamerLegion       | L   | 0.433      | -            | -                | -                | -         |    -0.58 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           39 |     2091 | 2024-09-25 | Endpoint          | W   | 0.424      | 0.435        | 0.033 (0.006)    | 0.511 (0.094)    | 0 (0.000) |     7.65 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           38 |     2096 | 2024-09-25 | PeeP              | W   | 0.423      | -            | -                | -                | 0 (0.000) |     2.32 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           37 |     2141 | 2024-09-24 | K27               | L   | 0.418      | -            | -                | -                | -         |   -10.27 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           36 |     2164 | 2024-09-23 | ECSTATIC          | L   | 0.413      | -            | -                | -                | -         |    -3.69 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           35 |     2198 | 2024-09-22 | SovvyKiNG         | W   | 0.405      | -            | -                | -                | 0 (0.000) |     2.85 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           34 |     2204 | 2024-09-22 | Zero Tenacity     | W   | 0.404      | 0.435        | 0.083 (0.015)    | 0.567 (0.100)    | 0 (0.000) |    10.16 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           33 |     2221 | 2024-09-21 | FLuffy Gangsters  | W   | 0.399      | 0.143        | -                | 0.592 (0.034)    | 0 (0.000) |     5.50 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           32 |     2240 | 2024-09-20 | RUBY              | L   | 0.393      | -            | -                | -                | -         |    -9.69 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           31 |     2277 | 2024-09-19 | 9 Pandas          | W   | 0.386      | 0.435        | 0.160 (0.027)    | 0.804 (0.135)    | 0 (0.000) |    10.40 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           30 |     2282 | 2024-09-19 | Verdant           | W   | 0.385      | 0.143        | 0.050 (0.003)    | -                | 0 (0.000) |     8.21 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           29 |     2342 | 2024-09-17 | FAVBET            | L   | 0.373      | -            | -                | -                | -         |    -3.78 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           28 |     2354 | 2024-09-17 | ALTERNATE aTTaX   | W   | 0.371      | 0.435        | 0.074 (0.012)    | 0.680 (0.110)    | 0 (0.000) |     9.82 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           27 |     2385 | 2024-09-15 | FLuffy Gangsters  | W   | 0.360      | 0.372        | -                | 0.592 (0.079)    | -         |     5.37 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           26 |     2389 | 2024-09-15 | CYBERSHOKE        | L   | 0.359      | -            | -                | -                | -         |    -4.59 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           25 |     2448 | 2024-09-14 | FLuffy Gangsters  | W   | 0.350      | -            | -                | -                | -         |     5.32 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           24 |     2456 | 2024-09-13 | Daystar           | W   | 0.346      | -            | -                | -                | -         |     4.50 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           23 |     2492 | 2024-09-12 | DMS               | W   | 0.339      | -            | -                | -                | -         |     4.16 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           22 |     2506 | 2024-09-12 | Astralis Talent   | L   | 0.337      | -            | -                | -                | -         |    -5.34 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           21 |     2527 | 2024-09-11 | ECLOT             | W   | 0.332      | 0.372        | 0.286 (0.035)    | 1.000 (0.124)    | -         |     9.98 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           20 |     2544 | 2024-09-11 | ENCE Academy      | W   | 0.330      | -            | -                | -                | -         |     5.49 | eraa, Fessor, sense, szejn, Tapewaare      |
|           19 |     2571 | 2024-09-10 | Apogee            | L   | 0.323      | -            | -                | -                | -         |    -5.23 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           18 |     2628 | 2024-09-07 | Endpoint          | L   | 0.305      | -            | -                | -                | -         |    -3.60 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           17 |     2689 | 2024-09-05 | UNiTY             | W   | 0.292      | 0.372        | 0.070 (0.008)    | -                | -         |     6.92 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           16 |     2754 | 2024-09-03 | L&G               | W   | 0.279      | 0.372        | 0.058 (0.006)    | 0.568 (0.059)    | -         |     5.51 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           15 |     2806 | 2024-09-01 | Monte Gen         | L   | 0.266      | -            | -                | -                | -         |    -3.41 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           14 |     2812 | 2024-09-01 | CYBERSHOKE        | L   | 0.265      | -            | -                | -                | -         |    -3.28 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           13 |     2839 | 2024-08-30 | Endpoint          | L   | 0.252      | -            | -                | -                | -         |    -3.04 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           12 |     2930 | 2024-08-28 | Aurora Young Blud | W   | 0.239      | 0.435        | 0.045 (0.005)    | 0.837 (0.087)    | -         |     5.51 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           11 |     2979 | 2024-08-27 | Sampi             | L   | 0.233      | -            | -                | -                | -         |    -1.56 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           10 |     3141 | 2024-08-24 | Kosovo            | W   | 0.211      | -            | -                | -                | -         |     1.58 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            9 |     3156 | 2024-08-23 | Spirit Academy    | W   | 0.206      | 0.143        | 0.168 (0.005)    | -                | -         |     5.21 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            8 |     3200 | 2024-08-22 | Preasy            | W   | 0.197      | -            | -                | -                | -         |     3.20 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            7 |     3227 | 2024-08-21 | Spirit Academy    | L   | 0.192      | -            | -                | -                | -         |    -1.16 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            6 |     3550 | 2024-08-12 | Young Ninjas      | L   | 0.130      | -            | -                | -                | -         |    -2.34 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            5 |     3796 | 2024-08-04 | Kosovo            | L   | 0.077      | -            | -                | -                | -         |    -1.88 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            4 |     3984 | 2024-07-30 | Passion UA        | L   | 0.046      | -            | -                | -                | -         |    -0.12 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            3 |     4053 | 2024-07-28 | Sampi             | L   | 0.032      | -            | -                | -                | -         |    -0.22 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            2 |     4078 | 2024-07-27 | 1WIN              | L   | 0.026      | -            | -                | -                | -         |    -0.53 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            1 |     4186 | 2024-07-24 | SovvyKiNG         | W   | 0.004      | -            | -                | -                | -         |     0.03 | BøghmagiC, Fessor, sense, szejn, Tapewaare |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($796.68)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
