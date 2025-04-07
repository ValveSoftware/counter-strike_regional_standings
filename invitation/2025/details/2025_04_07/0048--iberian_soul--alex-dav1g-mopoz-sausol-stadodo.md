### Roster Details<br />
Team Name: Iberian Soul<br />
Roster: alex, dav1g, mopoz, sausol, stadodo<br />
Global Rank: [48](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [31]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  922.0<br />
<br />
Final Rank Value (922.0) = Starting Rank Value (924.0) + Head To Head Adjustments (-2.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.373[<sup>1</sup>](#table2)
- Bounty Collected: 0.344[<sup>2</sup>](#table1)
- Opponent Network: 0.181[<sup>2</sup>](#table1)
- LAN Wins: 0.240[<sup>2</sup>](#table1)

The average of these factors is 0.284<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 924.0
- 400 + ( ( 0.284 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 924.0


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
|           51 |      114 | 2025-03-30 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |   -12.79 | alex, dav1g, mopoz, sausol, stadodo   |
|           50 |      117 | 2025-03-30 | 9INE              | W   | 1.000      | 0.143        | 0.030 (0.004)    | 0.937 (0.134)    | 0 (0.000) |    17.79 | alex, dav1g, mopoz, sausol, stadodo   |
|           49 |      157 | 2025-03-29 | Novaq             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.70 | alex, dav1g, mopoz, sausol, stadodo   |
|           48 |      177 | 2025-03-29 | Partizan          | W   | 1.000      | 0.143        | 0.110 (0.016)    | 0.795 (0.114)    | 0 (0.000) |    14.54 | alex, dav1g, mopoz, sausol, stadodo   |
|           47 |      237 | 2025-03-28 | ECLOT             | W   | 1.000      | 0.143        | 0.114 (0.016)    | -                | 0 (0.000) |    18.70 | alex, dav1g, mopoz, sausol, stadodo   |
|           46 |      278 | 2025-03-27 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -11.10 | alex, dav1g, mopoz, sausol, stadodo   |
|           45 |      450 | 2025-03-16 | Leça              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     8.26 | alex, dav1g, mopoz, sausol, stadodo   |
|           44 |      479 | 2025-03-15 | KlanPedrajas      | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.84 | alex, dav1g, mopoz, sausol, stadodo   |
|           43 |      621 | 2025-03-09 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |    -8.53 | alex, dav1g, mopoz, sausol, stadodo   |
|           42 |      696 | 2025-03-08 | fnatic            | L   | 0.999      | -            | -                | -                | -         |    -8.93 | alex, dav1g, mopoz, sausol, stadodo   |
|           41 |      800 | 2025-03-06 | Monte             | L   | 0.987      | -            | -                | -                | -         |   -15.72 | alex, dav1g, mopoz, sausol, stadodo   |
|           40 |      804 | 2025-03-06 | NAVI Junior       | L   | 0.985      | -            | -                | -                | -         |   -11.88 | alex, dav1g, mopoz, sausol, stadodo   |
|           39 |      831 | 2025-03-05 | GTZ               | L   | 0.980      | -            | -                | -                | -         |   -16.97 | alex, dav1g, mopoz, sausol, stadodo   |
|           38 |      845 | 2025-03-04 | Monte             | W   | 0.974      | 0.435        | 0.012 (0.005)    | 0.768 (0.325)    | 0 (0.000) |    13.17 | alex, dav1g, mopoz, sausol, stadodo   |
|           37 |      882 | 2025-03-02 | Partizan          | W   | 0.961      | 0.435        | 0.110 (0.046)    | 0.795 (0.332)    | 0 (0.000) |    19.51 | alex, dav1g, mopoz, sausol, stadodo   |
|           36 |      920 | 2025-03-01 | Alliance          | W   | 0.954      | -            | -                | -                | 0 (0.000) |    11.13 | alex, dav1g, mopoz, sausol, stadodo   |
|           35 |      926 | 2025-03-01 | 9 Pandas          | L   | 0.952      | -            | -                | -                | -         |    -9.40 | alex, dav1g, mopoz, sausol, stadodo   |
|           34 |      940 | 2025-02-28 | Fire Flux         | W   | 0.946      | 0.143        | -                | 0.864 (0.117)    | -         |    12.31 | alex, dav1g, mopoz, sausol, stadodo   |
|           33 |      948 | 2025-02-27 | SINNERS           | W   | 0.942      | 0.435        | 0.027 (0.011)    | 0.665 (0.272)    | -         |    15.90 | alex, dav1g, mopoz, sausol, stadodo   |
|           32 |      987 | 2025-02-25 | Aurora            | L   | 0.928      | -            | -                | -                | -         |   -15.09 | alex, dav1g, mopoz, sausol, stadodo   |
|           31 |     1005 | 2025-02-24 | OG                | W   | 0.922      | 0.143        | 0.111 (0.015)    | 1.000 (0.132)    | -         |    18.50 | alex, dav1g, mopoz, sausol, stadodo   |
|           30 |     1008 | 2025-02-24 | Fire Flux         | W   | 0.920      | 0.143        | -                | 0.864 (0.114)    | -         |    14.04 | alex, dav1g, mopoz, sausol, stadodo   |
|           29 |     1049 | 2025-02-23 | Alliance          | W   | 0.913      | -            | -                | -                | -         |    12.56 | alex, dav1g, mopoz, sausol, stadodo   |
|           28 |     1110 | 2025-02-20 | ECSTATIC          | W   | 0.893      | 0.143        | 0.030 (0.004)    | 1.000 (0.128)    | -         |    13.00 | alex, dav1g, mopoz, sausol, stadodo   |
|           27 |     1120 | 2025-02-19 | 9INE              | L   | 0.887      | -            | -                | -                | -         |   -10.05 | alex, dav1g, mopoz, sausol, stadodo   |
|           26 |     1364 | 2025-02-09 | CPH Wolves        | L   | 0.820      | -            | -                | -                | -         |   -15.68 | alex, dav1g, mopoz, sausol, stadodo   |
|           25 |     1430 | 2025-02-08 | UNiTY             | W   | 0.812      | -            | -                | -                | -         |     9.16 | alex, dav1g, mopoz, sausol, stadodo   |
|           24 |     1527 | 2025-02-05 | Ninjas in Pyjamas | W   | 0.791      | -            | -                | -                | -         |     5.57 | alex, dav1g, mopoz, sausol, stadodo   |
|           23 |     1539 | 2025-02-04 | UNiTY             | L   | 0.786      | -            | -                | -                | -         |   -15.83 | alex, dav1g, mopoz, sausol, stadodo   |
|           22 |     1619 | 2025-01-25 | ECSTATIC          | L   | 0.720      | -            | -                | -                | -         |   -12.10 | alex, dav1g, mopoz, sausol, stadodo   |
|           21 |     1624 | 2025-01-24 | kONO              | L   | 0.713      | -            | -                | -                | -         |   -19.03 | alex, dav1g, mopoz, sausol, stadodo   |
|           20 |     1850 | 2024-12-14 | Chimera           | L   | 0.440      | -            | -                | -                | -         |    -8.77 | adamS, dav1g, mopoz, sausol, stadodo  |
|           19 |     1877 | 2024-12-13 | GUN5              | L   | 0.432      | -            | -                | -                | -         |    -6.25 | adamS, dav1g, mopoz, sausol, stadodo  |
|           18 |     1902 | 2024-12-11 | Endpoint          | L   | 0.421      | -            | -                | -                | -         |   -10.45 | adamS, dav1g, mopoz, sausol, stadodo  |
|           17 |     1915 | 2024-12-10 | Spirit Academy    | L   | 0.414      | -            | -                | -                | -         |    -8.05 | adamS, dav1g, mopoz, sausol, stadodo  |
|           16 |     1917 | 2024-12-10 | TSM               | W   | 0.413      | -            | -                | -                | -         |     2.27 | adamS, dav1g, mopoz, sausol, stadodo  |
|           15 |     1972 | 2024-12-07 | FAVBET            | W   | 0.394      | 0.435        | 0.017 (0.003)    | -                | -         |     3.49 | adamS, dav1g, mopoz, sausol, stadodo  |
|           14 |     1999 | 2024-12-06 | 9INE              | L   | 0.386      | -            | -                | -                | -         |    -7.17 | adamS, dav1g, mopoz, sausol, stadodo  |
|           13 |     2020 | 2024-12-05 | Apogee            | W   | 0.379      | 0.371        | -                | 1.000 (0.141)    | -         |     4.93 | adamS, dav1g, mopoz, sausol, stadodo  |
|           12 |     2055 | 2024-12-04 | Gaimin Gladiators | W   | 0.373      | 0.435        | 0.022 (0.004)    | -                | -         |     3.81 | adamS, dav1g, mopoz, sausol, stadodo  |
|           11 |     2111 | 2024-12-01 | Gaimin Gladiators | W   | 0.353      | -            | -                | -                | -         |     3.71 | adamS, dav1g, mopoz, sausol, stadodo  |
|           10 |     2183 | 2024-11-28 | GUN5              | L   | 0.334      | -            | -                | -                | -         |    -5.05 | adamS, dav1g, mopoz, sausol, stadodo  |
|            9 |     2195 | 2024-11-27 | Gaimin Gladiators | L   | 0.327      | -            | -                | -                | -         |    -7.28 | adamS, dav1g, mopoz, sausol, stadodo  |
|            8 |     2198 | 2024-11-27 | TNL               | W   | 0.327      | -            | -                | -                | -         |     2.33 | adamS, dav1g, mopoz, sausol, stadodo  |
|            7 |     2207 | 2024-11-26 | Gaimin Gladiators | W   | 0.321      | -            | -                | -                | -         |     2.95 | adamS, dav1g, mopoz, sausol, stadodo  |
|            6 |     2223 | 2024-11-25 | 9INE              | W   | 0.313      | -            | -                | -                | -         |     1.77 | adamS, dav1g, mopoz, sausol, stadodo  |
|            5 |     2379 | 2024-11-17 | Rhyno             | L   | 0.260      | -            | -                | -                | -         |    -6.30 | adamS, dav1g, deLonge, mopoz, stadodo |
|            4 |     2407 | 2024-11-16 | EXSAD             | W   | 0.254      | -            | -                | -                | 1 (0.254) |     0.75 | adamS, dav1g, deLonge, mopoz, stadodo |
|            3 |     2810 | 2024-10-30 | ECSTATIC          | L   | 0.142      | -            | -                | -                | -         |    -2.54 | adamS, dav1g, JUST, mopoz, stadodo    |
|            2 |     2813 | 2024-10-30 | Illuminar         | W   | 0.141      | -            | -                | -                | -         |     0.88 | adamS, dav1g, JUST, mopoz, stadodo    |
|            1 |     2817 | 2024-10-30 | Metizport         | L   | 0.140      | -            | -                | -                | -         |    -1.60 | adamS, dav1g, JUST, mopoz, stadodo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,719.56)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-16 |      1.000 | $3,253.00      | $3,253.00       |
| 2024-11-27 |      0.327 | $5,000.00      | $1,633.75       |
| 2024-11-17 |      0.260 | $3,197.00      | $832.81         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
