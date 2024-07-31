### Roster Details<br />
Team Name: SINNERS<br />
Roster: beastik, majky, MoriiSko, oskar, SHOCK<br />
Global Rank: [70](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [50]( ../standings_europe.md)<br />
<br />
Final Rank Value:  951.9<br />
<br />
Final Rank Value (951.9) = Starting Rank Value (1044.6) + Head To Head Adjustments (-92.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.413[<sup>1</sup>](#table2)
- Bounty Collected: 0.439[<sup>2</sup>](#table1)
- Opponent Network: 0.238[<sup>2</sup>](#table1)
- LAN Wins: 0.158[<sup>2</sup>](#table1)

The average of these factors is 0.312<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1044.6
- 400 + ( ( 0.312 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1044.6


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
|           78 |       61 | 2024-07-30 | Sangal            | L   | 1.000      | -            | -                | -                | -         |    -4.69 | beastik, majky, MoriiSko, oskar, SHOCK |
|           77 |       97 | 2024-07-29 | Alliance          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.63 | beastik, majky, MoriiSko, oskar, SHOCK |
|           76 |      206 | 2024-07-25 | B8                | L   | 1.000      | -            | -                | -                | -         |    -7.21 | beastik, majky, MoriiSko, oskar, SHOCK |
|           75 |      279 | 2024-07-23 | RUSH B            | L   | 1.000      | -            | -                | -                | -         |   -18.04 | beastik, majky, MoriiSko, oskar, SHOCK |
|           74 |      314 | 2024-07-22 | CPH Wolves        | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.72 | beastik, majky, MoriiSko, oskar, SHOCK |
|           73 |      395 | 2024-07-19 | DMS               | W   | 1.000      | 0.435        | -                | 0.447 (0.194)    | 0 (0.000) |    13.92 | beastik, majky, MoriiSko, oskar, SHOCK |
|           72 |      532 | 2024-07-17 | Endpoint          | W   | 1.000      | 0.435        | -                | 0.523 (0.227)    | 0 (0.000) |    11.99 | beastik, majky, MoriiSko, oskar, SHOCK |
|           71 |      594 | 2024-07-16 | BC.Game           | L   | 1.000      | -            | -                | -                | -         |   -26.61 | beastik, majky, MoriiSko, oskar, SHOCK |
|           70 |      628 | 2024-07-15 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -7.14 | beastik, majky, MoriiSko, oskar, SHOCK |
|           69 |      638 | 2024-07-15 | Nexus             | L   | 1.000      | -            | -                | -                | -         |   -24.77 | beastik, majky, MoriiSko, oskar, SHOCK |
|           68 |     1000 | 2024-06-11 | 3DMAX             | L   | 0.867      | -            | -                | -                | -         |    -2.23 | beastik, majky, MoriiSko, oskar, SHOCK |
|           67 |     1013 | 2024-06-11 | ex-Guild Eagles   | W   | 0.865      | -            | -                | -                | 0 (0.000) |     9.37 | beastik, majky, MoriiSko, oskar, SHOCK |
|           66 |     1030 | 2024-06-10 | Enterprise        | L   | 0.859      | -            | -                | -                | -         |   -16.08 | beastik, majky, MoriiSko, oskar, SHOCK |
|           65 |     1037 | 2024-06-10 | Monte             | L   | 0.858      | -            | -                | -                | -         |   -12.84 | beastik, majky, MoriiSko, oskar, SHOCK |
|           64 |     1040 | 2024-06-10 | 9 Pandas          | L   | 0.858      | -            | -                | -                | -         |   -11.75 | beastik, majky, MoriiSko, oskar, SHOCK |
|           63 |     1047 | 2024-06-10 | PARIVISION        | W   | 0.857      | -            | -                | -                | 0 (0.000) |    16.05 | beastik, majky, MoriiSko, oskar, SHOCK |
|           62 |     1049 | 2024-06-10 | Rare Atom         | L   | 0.857      | -            | -                | -                | -         |   -23.73 | beastik, majky, MoriiSko, oskar, SHOCK |
|           61 |     1082 | 2024-06-09 | SAW               | W   | 0.852      | -            | -                | -                | 0 (0.000) |    18.71 | beastik, majky, MoriiSko, oskar, SHOCK |
|           60 |     1091 | 2024-06-09 | 3DMAX             | W   | 0.851      | 0.143        | 0.504 (0.061)    | -                | -         |    25.07 | beastik, majky, MoriiSko, oskar, SHOCK |
|           59 |     1095 | 2024-06-09 | RUSH B            | L   | 0.851      | -            | -                | -                | -         |   -18.08 | beastik, majky, MoriiSko, oskar, SHOCK |
|           58 |     1103 | 2024-06-09 | Aurora            | W   | 0.851      | 0.143        | 0.433 (0.053)    | -                | -         |    25.26 | beastik, majky, MoriiSko, oskar, SHOCK |
|           57 |     1125 | 2024-06-08 | Sangal            | L   | 0.847      | -            | -                | -                | -         |    -6.43 | beastik, majky, MoriiSko, oskar, SHOCK |
|           56 |     1215 | 2024-06-07 | RUBY              | W   | 0.838      | 0.435        | 0.097 (0.035)    | 0.506 (0.184)    | -         |    10.98 | beastik, majky, MoriiSko, oskar, SHOCK |
|           55 |     1255 | 2024-06-06 | KOI               | L   | 0.833      | -            | -                | -                | -         |    -9.47 | beastik, majky, MoriiSko, oskar, SHOCK |
|           54 |     1316 | 2024-06-05 | RUSH B            | W   | 0.826      | -            | -                | -                | -         |     9.03 | beastik, majky, MoriiSko, oskar, SHOCK |
|           53 |     1323 | 2024-06-05 | EYEBALLERS        | L   | 0.825      | -            | -                | -                | -         |   -16.57 | beastik, majky, MoriiSko, oskar, SHOCK |
|           52 |     1381 | 2024-06-04 | VP.Prodigy        | L   | 0.818      | -            | -                | -                | -         |   -15.31 | beastik, majky, MoriiSko, oskar, SHOCK |
|           51 |     1422 | 2024-06-02 | UNiTY             | L   | 0.805      | -            | -                | -                | -         |   -14.59 | AJTT, beastik, oskar, SHOCK, Tomkeejs  |
|           50 |     1437 | 2024-06-01 | GUN5              | L   | 0.800      | -            | -                | -                | -         |   -15.52 | AJTT, beastik, MoriiSko, oskar, SHOCK  |
|           49 |     1456 | 2024-06-01 | Sampi             | W   | 0.798      | 0.346        | -                | 1.000 (0.276)    | 1 (0.798) |     7.94 | AJTT, beastik, oskar, SHOCK, Tomkeejs  |
|           48 |     1484 | 2024-05-31 | UNiTY             | L   | 0.792      | -            | -                | -                | -         |   -15.00 | AJTT, beastik, oskar, SHOCK, Tomkeejs  |
|           47 |     1507 | 2024-05-30 | B8                | W   | 0.786      | 0.435        | 0.168 (0.058)    | 0.879 (0.300)    | -         |    16.73 | beastik, majky, MoriiSko, oskar, SHOCK |
|           46 |     1535 | 2024-05-29 | brazylijski luz   | W   | 0.779      | -            | -                | -                | -         |     6.49 | beastik, majky, MoriiSko, oskar, SHOCK |
|           45 |     1594 | 2024-05-26 | Sampi             | W   | 0.759      | 0.435        | -                | 1.000 (0.330)    | -         |     8.45 | beastik, majky, MoriiSko, oskar, SHOCK |
|           44 |     1627 | 2024-05-24 | GUN5              | W   | 0.747      | 0.435        | 0.074 (0.024)    | -                | -         |     9.19 | AJTT, beastik, majky, MoriiSko, oskar  |
|           43 |     1635 | 2024-05-24 | 9 Pandas          | L   | 0.745      | -            | -                | -                | -         |   -10.64 | AJTT, beastik, majky, oskar, SHOCK     |
|           42 |     1646 | 2024-05-23 | UNiTY             | W   | 0.739      | -            | -                | -                | -         |    10.25 | AJTT, beastik, majky, MoriiSko, oskar  |
|           41 |     1653 | 2024-05-23 | Passion UA        | L   | 0.737      | -            | -                | -                | -         |   -11.23 | AJTT, beastik, majky, MoriiSko, oskar  |
|           40 |     1770 | 2024-05-20 | VP.Prodigy        | W   | 0.718      | -            | -                | -                | -         |     7.52 | AJTT, beastik, majky, MoriiSko, oskar  |
|           39 |     1823 | 2024-05-18 | 1WIN              | L   | 0.705      | -            | -                | -                | -         |   -12.30 | AJTT, beastik, oskar, SHOCK, Tomkeejs  |
|           38 |     1904 | 2024-05-16 | ALTERNATE aTTaX   | W   | 0.691      | 0.435        | -                | 0.564 (0.169)    | -         |     9.46 | AJTT, beastik, majky, oskar, SHOCK     |
|           37 |     1997 | 2024-05-14 | Passion UA        | W   | 0.679      | 0.435        | 0.172 (0.051)    | 1.000 (0.295)    | -         |    11.12 | AJTT, beastik, majky, oskar, SHOCK     |
|           36 |     2165 | 2024-05-07 | Nemiga            | L   | 0.631      | -            | -                | -                | -         |    -5.29 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           35 |     2200 | 2024-05-05 | Endpoint          | W   | 0.618      | -            | -                | -                | -         |     8.25 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           34 |     2263 | 2024-05-02 | Gaimin Gladiators | L   | 0.598      | -            | -                | -                | -         |    -9.34 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           33 |     2291 | 2024-05-01 | B8                | L   | 0.590      | -            | -                | -                | -         |    -8.61 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           32 |     2326 | 2024-04-29 | 1WIN              | W   | 0.578      | -            | -                | -                | -         |     6.84 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           31 |     2332 | 2024-04-29 | Sangal            | L   | 0.577      | -            | -                | -                | -         |    -6.49 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           30 |     2343 | 2024-04-28 | Zero Tenacity     | L   | 0.572      | -            | -                | -                | -         |    -8.03 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           29 |     2376 | 2024-04-27 | Zero Tenacity     | L   | 0.564      | -            | -                | -                | -         |    -8.40 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           28 |     2392 | 2024-04-26 | PARIVISION        | L   | 0.559      | -            | -                | -                | -         |    -8.27 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           27 |     2441 | 2024-04-24 | Endpoint          | L   | 0.545      | -            | -                | -                | -         |   -12.01 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           26 |     2477 | 2024-04-22 | HAVU              | W   | 0.531      | -            | -                | -                | -         |     2.13 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           25 |     2526 | 2024-04-20 | ENCE Academy      | L   | 0.518      | -            | -                | -                | -         |   -13.99 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           24 |     2582 | 2024-04-19 | ECLOT             | L   | 0.510      | -            | -                | -                | -         |    -7.53 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           23 |     2665 | 2024-04-17 | Gaimin Gladiators | L   | 0.497      | -            | -                | -                | -         |    -8.85 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           22 |     2697 | 2024-04-16 | BLEED             | L   | 0.490      | -            | -                | -                | -         |    -9.54 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           21 |     2727 | 2024-04-14 | Passion UA        | W   | 0.478      | 0.371        | 0.172 (0.030)    | 1.000 (0.177)    | -         |     6.77 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           20 |     2816 | 2024-04-10 | 3DMAX             | W   | 0.453      | 0.500        | 0.504 (0.114)    | 1.000 (0.227)    | -         |    13.77 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           19 |     2835 | 2024-04-10 | UNiTY             | W   | 0.450      | -            | -                | -                | -         |     5.20 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           18 |     2866 | 2024-04-09 | 9 Pandas          | W   | 0.447      | 0.500        | 0.083 (0.019)    | -                | -         |     6.04 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           17 |     2920 | 2024-04-08 | ALTERNATE aTTaX   | W   | 0.437      | -            | -                | -                | -         |     5.28 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           16 |     2970 | 2024-04-05 | Nexus             | W   | 0.419      | -            | -                | -                | -         |     3.36 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           15 |     3061 | 2024-04-03 | Rebels            | W   | 0.404      | -            | -                | -                | -         |     5.58 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           14 |     3105 | 2024-04-01 | Aurora            | W   | 0.393      | 0.500        | 0.433 (0.085)    | -                | -         |    12.06 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           13 |     3129 | 2024-03-29 | ex-Sprout         | W   | 0.373      | -            | -                | -                | -         |     0.33 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           12 |     3344 | 2024-03-17 | ECLOT             | L   | 0.293      | -            | -                | -                | -         |    -3.85 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           11 |     3351 | 2024-03-17 | UNiTY             | W   | 0.292      | -            | -                | -                | 1 (0.292) |     3.80 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           10 |     3369 | 2024-03-16 | Sampi             | W   | 0.285      | -            | -                | -                | 1 (0.285) |     3.04 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            9 |     3382 | 2024-03-15 | UNiTY             | L   | 0.280      | -            | -                | -                | -         |    -5.19 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            8 |     3450 | 2024-03-13 | ALTERNATE aTTaX   | W   | 0.266      | -            | -                | -                | -         |     3.66 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            7 |     3503 | 2024-03-11 | brazylijski luz   | L   | 0.253      | -            | -                | -                | -         |    -6.32 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            6 |     3717 | 2024-03-03 | Gaimin Gladiators | L   | 0.199      | -            | -                | -                | -         |    -3.54 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            5 |     4005 | 2024-02-18 | Monte             | L   | 0.106      | -            | -                | -                | -         |    -1.80 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            4 |     4053 | 2024-02-16 | 500               | W   | 0.093      | -            | -                | -                | -         |     0.39 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            3 |     4060 | 2024-02-16 | PERA              | W   | 0.092      | -            | -                | -                | -         |     1.04 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            2 |     4065 | 2024-02-16 | 500               | L   | 0.092      | -            | -                | -                | -         |    -2.52 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            1 |     4271 | 2024-02-04 | Into the Breach   | L   | 0.011      | -            | -                | -                | -         |    -0.32 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,548.37)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-13 |      0.880 | $545.00        | $479.68         |
| 2024-06-09 |      0.853 | $10,000.00     | $8,530.93       |
| 2024-06-02 |      0.806 | $1,306.00      | $1,052.15       |
| 2024-06-02 |      0.806 | $2,000.00      | $1,611.00       |
| 2024-03-17 |      0.293 | $2,984.00      | $874.62         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
