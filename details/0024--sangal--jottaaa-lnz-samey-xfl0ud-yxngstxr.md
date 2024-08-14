### Roster Details<br />
Team Name: Sangal<br />
Roster: jottAAA, LNZ, SaMey, xfl0ud, yxngstxr<br />
Global Rank: [24](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [19]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1302.4<br />
<br />
Final Rank Value (1302.4) = Starting Rank Value (1164.7) + Head To Head Adjustments (137.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.642[<sup>1</sup>](#table2)
- Bounty Collected: 0.498[<sup>2</sup>](#table1)
- Opponent Network: 0.411[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.388<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1164.7
- 400 + ( ( 0.388 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 1164.7


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
|           71 |       78 | 2024-08-12 | Zero Tenacity     | W   | 1.000      | 0.500        | 0.135 (0.067)    | 1.000 (0.500)    | 0 (0.000) |     6.48 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           70 |      228 | 2024-08-07 | Rebels            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.93 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           69 |      272 | 2024-08-06 | PARIVISION        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.32 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           68 |      279 | 2024-08-06 | Permitta          | W   | 1.000      | 0.435        | -                | 0.957 (0.416)    | 0 (0.000) |     4.54 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           67 |      316 | 2024-08-05 | 1WIN              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.57 | Chill, LNZ, SaMey, xfl0ud, yxngstxr     |
|           66 |      376 | 2024-08-03 | Passion UA        | W   | 1.000      | 0.435        | 0.168 (0.073)    | 1.000 (0.435)    | 0 (0.000) |     8.51 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           65 |      542 | 2024-07-30 | SINNERS           | W   | 1.000      | 0.500        | -                | 0.922 (0.461)    | 0 (0.000) |     5.28 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           64 |      600 | 2024-07-28 | fnatic            | W   | 1.000      | 0.435        | 0.352 (0.153)    | -                | 0 (0.000) |    22.22 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           63 |      616 | 2024-07-28 | Monte             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.96 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           62 |      637 | 2024-07-27 | B8                | W   | 1.000      | 0.435        | 0.174 (0.075)    | 0.903 (0.393)    | 0 (0.000) |    11.49 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           61 |      653 | 2024-07-26 | Permitta          | W   | 1.000      | 0.435        | -                | 0.957 (0.416)    | -         |     4.21 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           60 |      767 | 2024-07-23 | brazylijski luz   | W   | 1.000      | -            | -                | -                | -         |     3.23 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           59 |      868 | 2024-07-20 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -9.01 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           58 |      996 | 2024-07-17 | SAW               | L   | 1.000      | -            | -                | -                | -         |   -10.54 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           57 |     1008 | 2024-07-17 | B8                | W   | 1.000      | 0.500        | 0.174 (0.087)    | 0.903 (0.452)    | -         |    12.10 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           56 |     1105 | 2024-07-15 | RUSH B            | W   | 1.000      | -            | -                | -                | -         |     5.13 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           55 |     1124 | 2024-07-15 | Rebels            | W   | 0.997      | -            | -                | -                | -         |     6.88 | imoRR, jottAAA, SaMey, xfl0ud, yxngstxr |
|           54 |     1542 | 2024-06-09 | KOI               | W   | 0.760      | -            | -                | -                | -         |     6.30 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           53 |     1606 | 2024-06-08 | SINNERS           | W   | 0.753      | 0.500        | -                | 0.922 (0.347)    | -         |     6.15 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           52 |     1671 | 2024-06-07 | Aurora            | W   | 0.746      | 0.500        | 0.387 (0.144)    | -                | -         |    19.49 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           51 |     1729 | 2024-06-06 | 3DMAX             | W   | 0.740      | 0.500        | 0.508 (0.188)    | 1.000 (0.370)    | -         |    19.83 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           50 |     1792 | 2024-06-05 | SAW               | W   | 0.733      | -            | -                | -                | -         |    18.36 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           49 |     1848 | 2024-06-04 | 9 Pandas          | W   | 0.726      | -            | -                | -                | -         |     8.72 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           48 |     1963 | 2024-05-31 | SAW               | L   | 0.699      | -            | -                | -                | -         |    -3.44 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           47 |     1966 | 2024-05-31 | FAVBET            | W   | 0.699      | -            | -                | -                | -         |     2.88 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           46 |     1971 | 2024-05-31 | fnatic            | L   | 0.698      | -            | -                | -                | -         |    -4.23 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           45 |     1996 | 2024-05-30 | MOUZ NXT          | L   | 0.691      | -            | -                | -                | -         |   -13.58 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           44 |     2168 | 2024-05-22 | Zero Tenacity     | W   | 0.639      | 0.500        | 0.135 (0.043)    | 1.000 (0.320)    | -         |     8.35 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           43 |     2215 | 2024-05-21 | Monte             | W   | 0.632      | -            | -                | -                | -         |     8.55 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           42 |     2250 | 2024-05-20 | PARIVISION        | W   | 0.625      | -            | -                | -                | -         |     8.71 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           41 |     2266 | 2024-05-19 | Ninjas in Pyjamas | W   | 0.620      | 0.500        | 0.236 (0.073)    | -                | -         |    17.30 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           40 |     2272 | 2024-05-19 | Endpoint          | W   | 0.619      | -            | -                | -                | -         |     6.62 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           39 |     2308 | 2024-05-18 | Rare Atom         | W   | 0.611      | -            | -                | -                | -         |     3.42 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           38 |     2347 | 2024-05-17 | Permitta          | W   | 0.604      | -            | -                | -                | -         |     4.62 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           37 |     2367 | 2024-05-16 | Ninjas in Pyjamas | L   | 0.600      | -            | -                | -                | -         |    -1.75 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           36 |     2429 | 2024-05-15 | Verdant           | L   | 0.591      | -            | -                | -                | -         |   -14.28 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           35 |     2492 | 2024-05-14 | DMS               | L   | 0.584      | -            | -                | -                | -         |   -14.28 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           34 |     2738 | 2024-05-02 | Metizport         | L   | 0.505      | -            | -                | -                | -         |   -13.20 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           33 |     2771 | 2024-05-01 | ALTERNATE aTTaX   | L   | 0.497      | -            | -                | -                | -         |   -11.85 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           32 |     2783 | 2024-04-30 | Zero Tenacity     | W   | 0.492      | -            | -                | -                | -         |     5.56 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           31 |     2813 | 2024-04-29 | SINNERS           | W   | 0.484      | -            | -                | -                | -         |     6.41 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           30 |     2820 | 2024-04-28 | 1WIN              | W   | 0.479      | -            | -                | -                | -         |     3.74 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           29 |     2845 | 2024-04-27 | PARIVISION        | L   | 0.472      | -            | -                | -                | -         |    -8.58 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           28 |     2876 | 2024-04-26 | Nemiga            | W   | 0.465      | 0.435        | 0.365 (0.074)    | -                | -         |     8.61 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           27 |     2949 | 2024-04-23 | Grannys Knockers  | W   | 0.444      | -            | -                | -                | -         |     1.35 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           26 |     2954 | 2024-04-22 | BLEED             | L   | 0.439      | -            | -                | -                | -         |    -9.54 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           25 |     2965 | 2024-04-22 | ex-Guild Eagles   | L   | 0.437      | -            | -                | -                | -         |   -12.06 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           24 |     2980 | 2024-04-21 | Alliance          | W   | 0.431      | -            | -                | -                | -         |     2.00 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           23 |     2996 | 2024-04-20 | brazylijski luz   | W   | 0.426      | -            | -                | -                | -         |     1.67 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           22 |     3015 | 2024-04-20 | JANO              | W   | 0.424      | -            | -                | -                | -         |     0.86 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           21 |     3040 | 2024-04-19 | TSM               | W   | 0.420      | -            | -                | -                | -         |     0.82 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           20 |     3046 | 2024-04-19 | Nemiga            | L   | 0.419      | -            | -                | -                | -         |    -5.87 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           19 |     3144 | 2024-04-17 | 9 Pandas          | W   | 0.404      | -            | -                | -                | -         |     3.55 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           18 |     3167 | 2024-04-16 | Zero Tenacity     | W   | 0.400      | -            | -                | -                | -         |     4.28 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           17 |     3187 | 2024-04-15 | B8                | W   | 0.393      | -            | -                | -                | -         |     4.14 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           16 |     3190 | 2024-04-15 | Aurora Young Blud | W   | 0.392      | -            | -                | -                | -         |     2.71 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           15 |     3232 | 2024-04-12 | Monte             | L   | 0.372      | -            | -                | -                | -         |    -7.66 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           14 |     3486 | 2024-04-04 | EYEBALLERS        | W   | 0.320      | -            | -                | -                | -         |     2.02 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           13 |     3565 | 2024-04-02 | 9 Pandas          | L   | 0.306      | -            | -                | -                | -         |    -6.89 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           12 |     3925 | 2024-03-13 | KOI               | L   | 0.174      | -            | -                | -                | -         |    -3.71 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           11 |     4030 | 2024-03-09 | Zero Tenacity     | L   | 0.145      | -            | -                | -                | -         |    -2.91 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           10 |     4082 | 2024-03-07 | 500               | L   | 0.132      | -            | -                | -                | -         |    -3.89 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            9 |     4104 | 2024-03-06 | TSM               | W   | 0.127      | -            | -                | -                | -         |     0.22 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            8 |     4173 | 2024-03-04 | Sampi             | W   | 0.111      | -            | -                | -                | -         |     0.54 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            7 |     4199 | 2024-03-03 | Rebels            | L   | 0.106      | -            | -                | -                | -         |    -2.53 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            6 |     4225 | 2024-03-02 | HAVU              | W   | 0.097      | -            | -                | -                | -         |     0.19 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            5 |     4246 | 2024-02-29 | Rebels            | L   | 0.086      | -            | -                | -                | -         |    -2.07 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            4 |     4267 | 2024-02-28 | Alliance          | L   | 0.078      | -            | -                | -                | -         |    -2.13 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            3 |     4274 | 2024-02-27 | 9INE              | W   | 0.073      | -            | -                | -                | -         |     0.06 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            2 |     4320 | 2024-02-25 | Sashi             | W   | 0.060      | -            | -                | -                | -         |     0.82 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            1 |     4494 | 2024-02-18 | 500               | W   | 0.011      | -            | -                | -                | -         |     0.02 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($88,501.76)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.28) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-06 |      1.000 | $22,000.00     | $22,000.00      |
| 2024-07-28 |      1.000 | $22,000.00     | $22,000.00      |
| 2024-06-09 |      0.760 | $16,500.00     | $12,537.51      |
| 2024-05-22 |      0.639 | $50,000.00     | $31,964.25      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
