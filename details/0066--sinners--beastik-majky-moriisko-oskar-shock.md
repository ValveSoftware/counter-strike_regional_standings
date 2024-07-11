### Roster Details<br />
Team Name: SINNERS<br />
Roster: beastik, majky, MoriiSko, oskar, SHOCK<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [66](../standings_global.md)<br />
Regional Rank: [47]( ../standings_europe.md)<br />
Final Rank Value:  1029.4<br />
<br />
Final Rank Value (1029.4) = Starting Rank Value (1120.2) + Head To Head Adjustments (-90.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.446[<sup>1</sup>](#table2)
- Bounty Collected: 0.448[<sup>2</sup>](#table1)
- Opponent Network: 0.266[<sup>2</sup>](#table1)
- LAN Wins: 0.206[<sup>2</sup>](#table1)

The average of these factors is 0.341<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1120.2
- 400 + ( ( 0.341 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1120.2


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
|           74 |      306 | 2024-06-11 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -8.57 | beastik, majky, MoriiSko, oskar, SHOCK |
|           73 |      319 | 2024-06-11 | ex-Guild Eagles   | W   | 0.999      | -            | -                | -                | 0 (0.000) |    11.64 | beastik, majky, MoriiSko, oskar, SHOCK |
|           72 |      336 | 2024-06-10 | Enterprise        | L   | 0.993      | -            | -                | -                | -         |   -18.17 | beastik, majky, MoriiSko, oskar, SHOCK |
|           71 |      343 | 2024-06-10 | Monte             | L   | 0.992      | -            | -                | -                | -         |   -10.36 | beastik, majky, MoriiSko, oskar, SHOCK |
|           70 |      346 | 2024-06-10 | 9 Pandas          | L   | 0.992      | -            | -                | -                | -         |   -12.55 | beastik, majky, MoriiSko, oskar, SHOCK |
|           69 |      353 | 2024-06-10 | PARIVISION        | W   | 0.991      | -            | -                | -                | 0 (0.000) |    15.95 | beastik, majky, MoriiSko, oskar, SHOCK |
|           68 |      355 | 2024-06-10 | Rare Atom         | L   | 0.991      | -            | -                | -                | -         |   -27.75 | beastik, majky, MoriiSko, oskar, SHOCK |
|           67 |      388 | 2024-06-09 | SAW               | W   | 0.986      | 0.143        | 0.147 (0.021)    | -                | 0 (0.000) |    22.31 | beastik, majky, MoriiSko, oskar, SHOCK |
|           66 |      397 | 2024-06-09 | 3DMAX             | W   | 0.985      | 0.143        | 0.205 (0.029)    | -                | 0 (0.000) |    22.25 | beastik, majky, MoriiSko, oskar, SHOCK |
|           65 |      401 | 2024-06-09 | RUSH B            | L   | 0.985      | -            | -                | -                | -         |   -21.54 | beastik, majky, MoriiSko, oskar, SHOCK |
|           64 |      409 | 2024-06-09 | Aurora            | W   | 0.985      | 0.143        | 0.518 (0.073)    | -                | 0 (0.000) |    28.34 | beastik, majky, MoriiSko, oskar, SHOCK |
|           63 |      431 | 2024-06-08 | Sangal            | L   | 0.981      | -            | -                | -                | -         |    -7.83 | beastik, majky, MoriiSko, oskar, SHOCK |
|           62 |      521 | 2024-06-07 | RUBY              | W   | 0.972      | 0.435        | 0.139 (0.059)    | 0.563 (0.238)    | 0 (0.000) |    12.51 | beastik, majky, MoriiSko, oskar, SHOCK |
|           61 |      561 | 2024-06-06 | KOI               | L   | 0.967      | -            | -                | -                | -         |   -10.25 | beastik, majky, MoriiSko, oskar, SHOCK |
|           60 |      622 | 2024-06-05 | RUSH B            | W   | 0.960      | -            | -                | -                | 0 (0.000) |     9.91 | beastik, majky, MoriiSko, oskar, SHOCK |
|           59 |      629 | 2024-06-05 | EYEBALLERS        | L   | 0.960      | -            | -                | -                | -         |   -19.68 | beastik, majky, MoriiSko, oskar, SHOCK |
|           58 |      687 | 2024-06-04 | VP.Prodigy        | L   | 0.952      | -            | -                | -                | -         |   -18.29 | beastik, majky, MoriiSko, oskar, SHOCK |
|           57 |      728 | 2024-06-02 | UNiTY             | L   | 0.939      | -            | -                | -                | -         |   -16.39 | AJTT, beastik, oskar, SHOCK, Tomkeejs  |
|           56 |      743 | 2024-06-01 | GUN5              | L   | 0.934      | -            | -                | -                | -         |   -18.21 | AJTT, beastik, MoriiSko, oskar, SHOCK  |
|           55 |      762 | 2024-06-01 | Slovakia          | W   | 0.932      | 0.346        | -                | 0.891 (0.287)    | 1 (0.932) |     8.64 | AJTT, beastik, oskar, SHOCK, Tomkeejs  |
|           54 |      790 | 2024-05-31 | UNiTY             | L   | 0.926      | -            | -                | -                | -         |   -16.92 | AJTT, beastik, oskar, SHOCK, Tomkeejs  |
|           53 |      813 | 2024-05-30 | B8                | W   | 0.920      | 0.435        | 0.242 (0.097)    | 1.000 (0.400)    | -         |    19.72 | beastik, majky, MoriiSko, oskar, SHOCK |
|           52 |      841 | 2024-05-29 | brazylijski luz   | W   | 0.913      | -            | -                | -                | -         |     6.98 | beastik, majky, MoriiSko, oskar, SHOCK |
|           51 |      900 | 2024-05-26 | Slovakia          | W   | 0.893      | 0.435        | -                | 0.891 (0.346)    | -         |     9.51 | beastik, majky, MoriiSko, oskar, SHOCK |
|           50 |      933 | 2024-05-24 | GUN5              | W   | 0.881      | 0.435        | 0.109 (0.042)    | -                | -         |    10.63 | AJTT, beastik, majky, MoriiSko, oskar  |
|           49 |      941 | 2024-05-24 | 9 Pandas          | L   | 0.879      | -            | -                | -                | -         |   -11.51 | AJTT, beastik, majky, oskar, SHOCK     |
|           48 |      952 | 2024-05-23 | UNiTY             | W   | 0.873      | -            | -                | -                | -         |    12.86 | AJTT, beastik, majky, MoriiSko, oskar  |
|           47 |      959 | 2024-05-23 | Passion UA        | L   | 0.871      | -            | -                | -                | -         |   -15.51 | AJTT, beastik, majky, MoriiSko, oskar  |
|           46 |     1076 | 2024-05-20 | VP.Prodigy        | W   | 0.852      | 0.435        | -                | 0.519 (0.192)    | -         |     8.26 | AJTT, beastik, majky, MoriiSko, oskar  |
|           45 |     1129 | 2024-05-18 | 1WIN              | L   | 0.839      | -            | -                | -                | -         |   -13.53 | AJTT, beastik, oskar, SHOCK, Tomkeejs  |
|           44 |     1210 | 2024-05-16 | ALTERNATE aTTaX   | W   | 0.825      | 0.435        | -                | 0.577 (0.207)    | -         |    10.94 | AJTT, beastik, majky, oskar, SHOCK     |
|           43 |     1303 | 2024-05-14 | Passion UA        | W   | 0.813      | 0.435        | 0.087 (0.031)    | 0.821 (0.290)    | -         |    10.49 | AJTT, beastik, majky, oskar, SHOCK     |
|           42 |     1471 | 2024-05-07 | Nemiga            | L   | 0.765      | -            | -                | -                | -         |    -5.09 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           41 |     1506 | 2024-05-05 | Endpoint          | W   | 0.753      | -            | -                | -                | -         |     9.58 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           40 |     1569 | 2024-05-02 | Gaimin Gladiators | L   | 0.732      | -            | -                | -                | -         |    -8.67 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           39 |     1597 | 2024-05-01 | B8                | L   | 0.725      | -            | -                | -                | -         |   -10.60 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           38 |     1632 | 2024-04-29 | 1WIN              | W   | 0.712      | -            | -                | -                | -         |     9.01 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           37 |     1638 | 2024-04-29 | Sangal            | L   | 0.711      | -            | -                | -                | -         |    -8.82 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           36 |     1649 | 2024-04-28 | Zero Tenacity     | L   | 0.706      | -            | -                | -                | -         |   -11.34 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           35 |     1682 | 2024-04-27 | Zero Tenacity     | L   | 0.698      | -            | -                | -                | -         |   -12.06 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           34 |     1698 | 2024-04-26 | PARIVISION        | L   | 0.693      | -            | -                | -                | -         |   -14.08 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           33 |     1747 | 2024-04-24 | Endpoint          | L   | 0.679      | -            | -                | -                | -         |   -16.00 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           32 |     1783 | 2024-04-22 | HAVU              | W   | 0.665      | -            | -                | -                | -         |     2.33 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           31 |     1832 | 2024-04-20 | ENCE Academy      | L   | 0.652      | -            | -                | -                | -         |   -17.82 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           30 |     1888 | 2024-04-19 | Czech Republic    | L   | 0.644      | -            | -                | -                | -         |    -9.04 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           29 |     1971 | 2024-04-17 | Gaimin Gladiators | L   | 0.631      | -            | -                | -                | -         |    -8.82 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           28 |     2003 | 2024-04-16 | BLEED             | L   | 0.625      | -            | -                | -                | -         |    -4.65 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           27 |     2033 | 2024-04-14 | Passion UA        | W   | 0.612      | 0.371        | -                | 0.821 (0.186)    | -         |     5.58 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           26 |     2122 | 2024-04-10 | 3DMAX             | W   | 0.587      | 0.500        | 0.205 (0.060)    | 1.000 (0.294)    | -         |    11.71 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           25 |     2141 | 2024-04-10 | UNiTY             | W   | 0.585      | -            | -                | -                | -         |     6.65 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           24 |     2172 | 2024-04-09 | 9 Pandas          | W   | 0.581      | 0.500        | 0.125 (0.036)    | -                | -         |     8.49 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           23 |     2226 | 2024-04-08 | ALTERNATE aTTaX   | W   | 0.571      | -            | -                | -                | -         |     6.20 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           22 |     2276 | 2024-04-05 | Romania           | W   | 0.553      | -            | -                | -                | -         |     3.67 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           21 |     2367 | 2024-04-03 | Rebels            | W   | 0.538      | -            | -                | -                | -         |     7.60 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           20 |     2411 | 2024-04-01 | Aurora            | W   | 0.527      | 0.500        | 0.518 (0.137)    | 0.853 (0.225)    | -         |    15.88 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           19 |     2435 | 2024-03-29 | ex-Sprout         | W   | 0.507      | -            | -                | -                | -         |     0.32 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           18 |     2650 | 2024-03-17 | Czech Republic    | L   | 0.427      | -            | -                | -                | -         |    -5.01 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           17 |     2657 | 2024-03-17 | UNiTY             | W   | 0.426      | -            | -                | -                | 1 (0.426) |     5.72 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           16 |     2675 | 2024-03-16 | Slovakia          | W   | 0.419      | -            | -                | -                | 1 (0.419) |     4.33 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           15 |     2688 | 2024-03-15 | UNiTY             | L   | 0.414      | -            | -                | -                | -         |    -7.50 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           14 |     2756 | 2024-03-13 | ALTERNATE aTTaX   | W   | 0.400      | -            | -                | -                | -         |     5.19 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           13 |     2809 | 2024-03-11 | brazylijski luz   | L   | 0.387      | -            | -                | -                | -         |   -10.18 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           12 |     3023 | 2024-03-03 | Gaimin Gladiators | L   | 0.333      | -            | -                | -                | -         |    -4.67 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           11 |     3311 | 2024-02-18 | Monte             | L   | 0.240      | -            | -                | -                | -         |    -2.02 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           10 |     3359 | 2024-02-16 | 500               | W   | 0.227      | -            | -                | -                | -         |     0.81 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            9 |     3366 | 2024-02-16 | PERA              | W   | 0.227      | -            | -                | -                | -         |     2.51 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            8 |     3371 | 2024-02-16 | 500               | L   | 0.226      | -            | -                | -                | -         |    -6.34 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            7 |     3577 | 2024-02-04 | Into the Breach   | L   | 0.145      | -            | -                | -                | -         |    -4.21 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            6 |     3640 | 2024-02-02 | ex-Preasy         | L   | 0.131      | -            | -                | -                | -         |    -3.34 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            5 |     3736 | 2024-01-27 | GODSENT           | W   | 0.092      | -            | -                | -                | -         |     0.09 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            4 |     3809 | 2024-01-23 | MOUZ NXT          | W   | 0.066      | -            | -                | -                | -         |     1.00 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            3 |     3942 | 2024-01-19 | Romania           | L   | 0.041      | -            | -                | -                | -         |    -1.04 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            2 |     4002 | 2024-01-18 | fnatic            | L   | 0.034      | -            | -                | -                | -         |    -0.06 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            1 |     4023 | 2024-01-18 | Virtus.pro        | L   | 0.033      | -            | -                | -                | -         |    -0.03 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,798.56)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-13 |      1.000 | $545.00        | $545.00         |
| 2024-06-09 |      0.987 | $10,000.00     | $9,872.16       |
| 2024-06-02 |      0.940 | $1,306.00      | $1,227.31       |
| 2024-06-02 |      0.940 | $2,000.00      | $1,879.25       |
| 2024-03-17 |      0.427 | $2,984.00      | $1,274.84       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
