### Roster Details<br />
Team Name: SINNERS<br />
Roster: beastik, majky, MoriiSko, oskar, SHOCK<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [79](../standings_global.md)<br />
Regional Rank: [55]( ../standings_europe.md)<br />
Final Rank Value:  973.4<br />
<br />
Final Rank Value (973.4) = Starting Rank Value (1123.7) + Head To Head Adjustments (-150.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.447[<sup>1</sup>](#table2)
- Bounty Collected: 0.444[<sup>2</sup>](#table1)
- Opponent Network: 0.265[<sup>2</sup>](#table1)
- LAN Wins: 0.193[<sup>2</sup>](#table1)

The average of these factors is 0.337<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1123.7
- 400 + ( ( 0.337 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1123.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           76 |        2 | 2024-07-17 | Endpoint          | W   | 1.000      | 0.435        | -                | 0.498 (0.216)    | 0 (0.000) |    11.67 | beastik, majky, MoriiSko, oskar, SHOCK |
|           75 |       64 | 2024-07-16 | BC.Game           | L   | 1.000      | -            | -                | -                | -         |   -28.42 | beastik, majky, MoriiSko, oskar, SHOCK |
|           74 |       98 | 2024-07-15 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -6.86 | beastik, majky, MoriiSko, oskar, SHOCK |
|           73 |      108 | 2024-07-15 | Nexus             | L   | 1.000      | -            | -                | -                | -         |   -25.17 | beastik, majky, MoriiSko, oskar, SHOCK |
|           72 |      470 | 2024-06-11 | 3DMAX             | L   | 0.961      | -            | -                | -                | -         |    -8.43 | beastik, majky, MoriiSko, oskar, SHOCK |
|           71 |      483 | 2024-06-11 | ex-Guild Eagles   | W   | 0.959      | -            | -                | -                | 0 (0.000) |    11.18 | beastik, majky, MoriiSko, oskar, SHOCK |
|           70 |      500 | 2024-06-10 | Enterprise        | L   | 0.953      | -            | -                | -                | -         |   -17.20 | beastik, majky, MoriiSko, oskar, SHOCK |
|           69 |      507 | 2024-06-10 | Monte             | L   | 0.953      | -            | -                | -                | -         |   -15.72 | beastik, majky, MoriiSko, oskar, SHOCK |
|           68 |      510 | 2024-06-10 | 9 Pandas          | L   | 0.952      | -            | -                | -                | -         |   -12.54 | beastik, majky, MoriiSko, oskar, SHOCK |
|           67 |      517 | 2024-06-10 | PARIVISION        | W   | 0.952      | -            | -                | -                | 0 (0.000) |    14.47 | beastik, majky, MoriiSko, oskar, SHOCK |
|           66 |      519 | 2024-06-10 | Rare Atom         | L   | 0.951      | -            | -                | -                | -         |   -26.61 | beastik, majky, MoriiSko, oskar, SHOCK |
|           65 |      552 | 2024-06-09 | SAW               | W   | 0.946      | 0.143        | 0.147 (0.020)    | -                | 0 (0.000) |    21.05 | beastik, majky, MoriiSko, oskar, SHOCK |
|           64 |      561 | 2024-06-09 | 3DMAX             | W   | 0.946      | 0.143        | 0.209 (0.028)    | -                | 0 (0.000) |    21.14 | beastik, majky, MoriiSko, oskar, SHOCK |
|           63 |      565 | 2024-06-09 | RUSH B            | L   | 0.945      | -            | -                | -                | -         |   -21.03 | beastik, majky, MoriiSko, oskar, SHOCK |
|           62 |      573 | 2024-06-09 | Aurora            | W   | 0.945      | 0.143        | 0.514 (0.069)    | -                | 0 (0.000) |    27.27 | beastik, majky, MoriiSko, oskar, SHOCK |
|           61 |      595 | 2024-06-08 | Sangal            | L   | 0.941      | -            | -                | -                | -         |    -7.94 | beastik, majky, MoriiSko, oskar, SHOCK |
|           60 |      685 | 2024-06-07 | RUBY              | W   | 0.932      | 0.435        | 0.144 (0.058)    | 0.580 (0.235)    | 0 (0.000) |    12.33 | beastik, majky, MoriiSko, oskar, SHOCK |
|           59 |      725 | 2024-06-06 | KOI               | L   | 0.927      | -            | -                | -                | -         |    -9.88 | beastik, majky, MoriiSko, oskar, SHOCK |
|           58 |      786 | 2024-06-05 | RUSH B            | W   | 0.921      | -            | -                | -                | -         |     9.13 | beastik, majky, MoriiSko, oskar, SHOCK |
|           57 |      793 | 2024-06-05 | EYEBALLERS        | L   | 0.920      | -            | -                | -                | -         |   -18.92 | beastik, majky, MoriiSko, oskar, SHOCK |
|           56 |      851 | 2024-06-04 | VP.Prodigy        | L   | 0.912      | -            | -                | -                | -         |   -17.59 | beastik, majky, MoriiSko, oskar, SHOCK |
|           55 |      892 | 2024-06-02 | UNiTY             | L   | 0.899      | -            | -                | -                | -         |   -15.41 | AJTT, beastik, oskar, SHOCK, Tomkeejs  |
|           54 |      907 | 2024-06-01 | GUN5              | L   | 0.895      | -            | -                | -                | -         |   -17.34 | AJTT, beastik, MoriiSko, oskar, SHOCK  |
|           53 |      926 | 2024-06-01 | Sampi             | W   | 0.893      | 0.346        | -                | 0.975 (0.301)    | 1 (0.893) |     8.52 | AJTT, beastik, oskar, SHOCK, Tomkeejs  |
|           52 |      954 | 2024-05-31 | UNiTY             | L   | 0.887      | -            | -                | -                | -         |   -15.84 | AJTT, beastik, oskar, SHOCK, Tomkeejs  |
|           51 |      977 | 2024-05-30 | B8                | W   | 0.880      | 0.435        | 0.246 (0.094)    | 1.000 (0.383)    | -         |    18.50 | beastik, majky, MoriiSko, oskar, SHOCK |
|           50 |     1005 | 2024-05-29 | brazylijski luz   | W   | 0.874      | -            | -                | -                | -         |     7.10 | beastik, majky, MoriiSko, oskar, SHOCK |
|           49 |     1064 | 2024-05-26 | Sampi             | W   | 0.853      | 0.435        | -                | 0.975 (0.362)    | -         |     9.35 | beastik, majky, MoriiSko, oskar, SHOCK |
|           48 |     1097 | 2024-05-24 | GUN5              | W   | 0.841      | 0.435        | 0.110 (0.040)    | -                | -         |    10.34 | AJTT, beastik, majky, MoriiSko, oskar  |
|           47 |     1105 | 2024-05-24 | 9 Pandas          | L   | 0.839      | -            | -                | -                | -         |   -11.21 | AJTT, beastik, majky, oskar, SHOCK     |
|           46 |     1116 | 2024-05-23 | UNiTY             | W   | 0.834      | -            | -                | -                | -         |    12.69 | AJTT, beastik, majky, MoriiSko, oskar  |
|           45 |     1123 | 2024-05-23 | Passion UA        | L   | 0.832      | -            | -                | -                | -         |   -14.76 | AJTT, beastik, majky, MoriiSko, oskar  |
|           44 |     1240 | 2024-05-20 | VP.Prodigy        | W   | 0.813      | -            | -                | -                | -         |     7.99 | AJTT, beastik, majky, MoriiSko, oskar  |
|           43 |     1293 | 2024-05-18 | 1WIN              | L   | 0.800      | -            | -                | -                | -         |   -13.39 | AJTT, beastik, oskar, SHOCK, Tomkeejs  |
|           42 |     1374 | 2024-05-16 | ALTERNATE aTTaX   | W   | 0.785      | 0.435        | -                | 0.644 (0.220)    | -         |    10.56 | AJTT, beastik, majky, oskar, SHOCK     |
|           41 |     1467 | 2024-05-14 | Passion UA        | W   | 0.774      | 0.435        | 0.087 (0.029)    | 0.847 (0.285)    | -         |    10.11 | AJTT, beastik, majky, oskar, SHOCK     |
|           40 |     1635 | 2024-05-07 | Nemiga            | L   | 0.725      | -            | -                | -                | -         |    -5.08 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           39 |     1670 | 2024-05-05 | Endpoint          | W   | 0.713      | -            | -                | -                | -         |     9.10 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           38 |     1733 | 2024-05-02 | Gaimin Gladiators | L   | 0.692      | -            | -                | -                | -         |    -9.17 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           37 |     1761 | 2024-05-01 | B8                | L   | 0.685      | -            | -                | -                | -         |   -10.27 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           36 |     1796 | 2024-04-29 | 1WIN              | W   | 0.673      | -            | -                | -                | -         |     8.21 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           35 |     1802 | 2024-04-29 | Sangal            | L   | 0.672      | -            | -                | -                | -         |    -8.48 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           34 |     1813 | 2024-04-28 | Zero Tenacity     | L   | 0.667      | -            | -                | -                | -         |   -10.73 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           33 |     1846 | 2024-04-27 | Zero Tenacity     | L   | 0.659      | -            | -                | -                | -         |   -11.36 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           32 |     1862 | 2024-04-26 | PARIVISION        | L   | 0.653      | -            | -                | -                | -         |   -13.46 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           31 |     1911 | 2024-04-24 | Endpoint          | L   | 0.640      | -            | -                | -                | -         |   -14.96 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           30 |     1947 | 2024-04-22 | HAVU              | W   | 0.626      | -            | -                | -                | -         |     2.23 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           29 |     1996 | 2024-04-20 | ENCE Academy      | L   | 0.613      | -            | -                | -                | -         |   -16.72 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           28 |     2052 | 2024-04-19 | ECLOT             | L   | 0.605      | -            | -                | -                | -         |    -8.32 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           27 |     2135 | 2024-04-17 | Gaimin Gladiators | L   | 0.592      | -            | -                | -                | -         |    -9.11 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           26 |     2167 | 2024-04-16 | BLEED             | L   | 0.585      | -            | -                | -                | -         |   -10.71 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           25 |     2197 | 2024-04-14 | Passion UA        | W   | 0.572      | 0.371        | -                | 0.847 (0.180)    | -         |     5.27 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           24 |     2286 | 2024-04-10 | 3DMAX             | W   | 0.548      | 0.500        | 0.209 (0.057)    | 1.000 (0.274)    | -         |    10.85 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           23 |     2305 | 2024-04-10 | UNiTY             | W   | 0.545      | -            | -                | -                | -         |     6.38 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           22 |     2336 | 2024-04-09 | 9 Pandas          | W   | 0.541      | 0.500        | 0.126 (0.034)    | -                | -         |     7.69 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           21 |     2390 | 2024-04-08 | ALTERNATE aTTaX   | W   | 0.532      | -            | -                | -                | -         |     5.91 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           20 |     2440 | 2024-04-05 | Nexus             | W   | 0.514      | -            | -                | -                | -         |     3.46 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           19 |     2531 | 2024-04-03 | Rebels            | W   | 0.499      | -            | -                | -                | -         |     6.50 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           18 |     2575 | 2024-04-01 | Aurora            | W   | 0.488      | 0.500        | 0.514 (0.125)    | 0.813 (0.198)    | -         |    14.67 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           17 |     2599 | 2024-03-29 | ex-Sprout         | W   | 0.467      | -            | -                | -                | -         |     0.28 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           16 |     2814 | 2024-03-17 | ECLOT             | L   | 0.388      | -            | -                | -                | -         |    -4.63 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           15 |     2821 | 2024-03-17 | UNiTY             | W   | 0.386      | -            | -                | -                | 1 (0.386) |     5.29 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           14 |     2839 | 2024-03-16 | Sampi             | W   | 0.380      | -            | -                | -                | 1 (0.380) |     3.97 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           13 |     2852 | 2024-03-15 | UNiTY             | L   | 0.374      | -            | -                | -                | -         |    -6.68 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           12 |     2920 | 2024-03-13 | ALTERNATE aTTaX   | W   | 0.361      | -            | -                | -                | -         |     4.75 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           11 |     2973 | 2024-03-11 | brazylijski luz   | L   | 0.347      | -            | -                | -                | -         |    -9.00 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           10 |     3187 | 2024-03-03 | Gaimin Gladiators | L   | 0.294      | -            | -                | -                | -         |    -4.64 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            9 |     3475 | 2024-02-18 | Monte             | L   | 0.201      | -            | -                | -                | -         |    -3.02 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            8 |     3523 | 2024-02-16 | 500               | W   | 0.187      | -            | -                | -                | -         |     0.64 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            7 |     3530 | 2024-02-16 | PERA              | W   | 0.187      | -            | -                | -                | -         |     2.06 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            6 |     3535 | 2024-02-16 | 500               | L   | 0.186      | -            | -                | -                | -         |    -5.25 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            5 |     3741 | 2024-02-04 | Into the Breach   | L   | 0.106      | -            | -                | -                | -         |    -3.08 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            4 |     3804 | 2024-02-02 | ex-Preasy         | L   | 0.092      | -            | -                | -                | -         |    -2.36 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            3 |     3900 | 2024-01-27 | GODSENT           | W   | 0.052      | -            | -                | -                | -         |     0.05 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            2 |     3973 | 2024-01-23 | MOUZ NXT          | W   | 0.026      | -            | -                | -                | -         |     0.39 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            1 |     4106 | 2024-01-19 | Nexus             | L   | 0.001      | -            | -                | -                | -         |    -0.03 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,139.49)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-13 |      0.975 | $545.00        | $531.18         |
| 2024-06-09 |      0.948 | $10,000.00     | $9,476.05       |
| 2024-06-02 |      0.900 | $1,306.00      | $1,175.58       |
| 2024-06-02 |      0.900 | $2,000.00      | $1,800.03       |
| 2024-03-17 |      0.388 | $2,984.00      | $1,156.64       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
