### Roster Details<br />
Team Name: SINNERS<br />
Roster: beastik, majky, MoriiSko, oskar, SHOCK<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [68](../standings_global.md)<br />
Regional Rank: [50]( ../standings_europe.md)<br />
Final Rank Value:  1025.0<br />
<br />
Final Rank Value (1025.0) = Starting Rank Value (1118.4) + Head To Head Adjustments (-93.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.426[<sup>1</sup>](#table2)
- Bounty Collected: 0.457[<sup>2</sup>](#table1)
- Opponent Network: 0.306[<sup>2</sup>](#table1)
- LAN Wins: 0.225[<sup>2</sup>](#table1)

The average of these factors is 0.354<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1118.4
- 400 + ( ( 0.354 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1118.4


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
|           79 |      170 | 2024-06-11 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -8.44 | beastik, majky, MoriiSko, oskar, SHOCK |
|           78 |      183 | 2024-06-11 | ex-Guild Eagles   | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.81 | beastik, majky, MoriiSko, oskar, SHOCK |
|           77 |      200 | 2024-06-10 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -18.23 | beastik, majky, MoriiSko, oskar, SHOCK |
|           76 |      207 | 2024-06-10 | Monte             | L   | 1.000      | -            | -                | -                | -         |    -9.73 | beastik, majky, MoriiSko, oskar, SHOCK |
|           75 |      210 | 2024-06-10 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -11.63 | beastik, majky, MoriiSko, oskar, SHOCK |
|           74 |      217 | 2024-06-10 | PARIVISION        | W   | 1.000      | -            | -                | -                | 0 (0.000) |    16.77 | beastik, majky, MoriiSko, oskar, SHOCK |
|           73 |      219 | 2024-06-10 | Rare Atom         | L   | 1.000      | -            | -                | -                | -         |   -28.24 | beastik, majky, MoriiSko, oskar, SHOCK |
|           72 |      252 | 2024-06-09 | SAW               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    24.03 | beastik, majky, MoriiSko, oskar, SHOCK |
|           71 |      261 | 2024-06-09 | 3DMAX             | W   | 1.000      | 0.143        | 0.186 (0.027)    | -                | 0 (0.000) |    22.64 | beastik, majky, MoriiSko, oskar, SHOCK |
|           70 |      265 | 2024-06-09 | RUSH B            | L   | 1.000      | -            | -                | -                | -         |   -21.98 | beastik, majky, MoriiSko, oskar, SHOCK |
|           69 |      273 | 2024-06-09 | Aurora            | W   | 1.000      | 0.143        | 0.526 (0.075)    | -                | 0 (0.000) |    28.37 | beastik, majky, MoriiSko, oskar, SHOCK |
|           68 |      295 | 2024-06-08 | Sangal            | L   | 1.000      | -            | -                | -                | -         |    -7.70 | beastik, majky, MoriiSko, oskar, SHOCK |
|           67 |      385 | 2024-06-07 | RUBY              | W   | 1.000      | 0.435        | 0.121 (0.053)    | 0.574 (0.249)    | 0 (0.000) |    13.09 | beastik, majky, MoriiSko, oskar, SHOCK |
|           66 |      425 | 2024-06-06 | KOI               | L   | 1.000      | -            | -                | -                | -         |   -10.39 | beastik, majky, MoriiSko, oskar, SHOCK |
|           65 |      486 | 2024-06-05 | RUSH B            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.20 | beastik, majky, MoriiSko, oskar, SHOCK |
|           64 |      493 | 2024-06-05 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -20.21 | beastik, majky, MoriiSko, oskar, SHOCK |
|           63 |      551 | 2024-06-04 | VP.Prodigy        | L   | 1.000      | -            | -                | -                | -         |   -18.88 | beastik, majky, MoriiSko, oskar, SHOCK |
|           62 |      593 | 2024-06-02 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |   -18.17 | AJTT, beastik, oskar, SHOCK, Tomkeejs  |
|           61 |      609 | 2024-06-01 | GUN5              | L   | 1.000      | -            | -                | -                | -         |   -19.66 | AJTT, beastik, MoriiSko, oskar, SHOCK  |
|           60 |      628 | 2024-06-01 | Sampi             | W   | 1.000      | 0.346        | -                | 0.837 (0.289)    | 1 (1.000) |     9.60 | AJTT, beastik, oskar, SHOCK, Tomkeejs  |
|           59 |      656 | 2024-05-31 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |   -19.16 | AJTT, beastik, oskar, SHOCK, Tomkeejs  |
|           58 |      679 | 2024-05-30 | B8                | W   | 1.000      | 0.435        | 0.229 (0.100)    | 1.000 (0.435)    | -         |    21.97 | beastik, majky, MoriiSko, oskar, SHOCK |
|           57 |      707 | 2024-05-29 | brazylijski luz   | W   | 1.000      | -            | -                | -                | -         |     7.98 | beastik, majky, MoriiSko, oskar, SHOCK |
|           56 |      766 | 2024-05-26 | Sampi             | W   | 1.000      | 0.435        | -                | 0.837 (0.364)    | -         |    11.25 | beastik, majky, MoriiSko, oskar, SHOCK |
|           55 |      799 | 2024-05-24 | GUN5              | W   | 1.000      | 0.435        | 0.095 (0.041)    | -                | -         |    11.79 | AJTT, beastik, majky, MoriiSko, oskar  |
|           54 |      807 | 2024-05-24 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -11.75 | AJTT, beastik, majky, oskar, SHOCK     |
|           53 |      818 | 2024-05-23 | UNiTY             | W   | 1.000      | -            | -                | -                | -         |    13.87 | AJTT, beastik, majky, MoriiSko, oskar  |
|           52 |      825 | 2024-05-23 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -17.05 | AJTT, beastik, majky, MoriiSko, oskar  |
|           51 |      942 | 2024-05-20 | VP.Prodigy        | W   | 1.000      | -            | -                | -                | -         |     9.85 | AJTT, beastik, majky, MoriiSko, oskar  |
|           50 |      995 | 2024-05-18 | 1WIN              | L   | 0.995      | -            | -                | -                | -         |   -14.40 | AJTT, beastik, oskar, SHOCK, Tomkeejs  |
|           49 |     1076 | 2024-05-16 | ALTERNATE aTTaX   | W   | 0.980      | 0.435        | -                | 0.573 (0.244)    | -         |    12.91 | AJTT, beastik, majky, oskar, SHOCK     |
|           48 |     1169 | 2024-05-14 | Passion UA        | W   | 0.969      | 0.435        | 0.086 (0.036)    | 0.803 (0.338)    | -         |    12.99 | AJTT, beastik, majky, oskar, SHOCK     |
|           47 |     1337 | 2024-05-07 | Nemiga            | L   | 0.921      | -            | -                | -                | -         |    -5.67 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           46 |     1372 | 2024-05-05 | Endpoint          | W   | 0.908      | -            | -                | -                | -         |    12.54 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           45 |     1435 | 2024-05-02 | Gaimin Gladiators | L   | 0.888      | -            | -                | -                | -         |    -8.77 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           44 |     1463 | 2024-05-01 | B8                | L   | 0.880      | -            | -                | -                | -         |   -12.65 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           43 |     1498 | 2024-04-29 | 1WIN              | W   | 0.868      | -            | -                | -                | -         |    12.11 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           42 |     1504 | 2024-04-29 | Sangal            | L   | 0.867      | -            | -                | -                | -         |   -10.52 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           41 |     1515 | 2024-04-28 | Zero Tenacity     | L   | 0.862      | -            | -                | -                | -         |   -13.51 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           40 |     1548 | 2024-04-27 | Zero Tenacity     | L   | 0.854      | -            | -                | -                | -         |   -14.66 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           39 |     1564 | 2024-04-26 | PARIVISION        | L   | 0.848      | -            | -                | -                | -         |   -16.61 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           38 |     1613 | 2024-04-24 | Endpoint          | L   | 0.835      | -            | -                | -                | -         |   -19.42 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           37 |     1649 | 2024-04-22 | HAVU              | W   | 0.821      | -            | -                | -                | -         |     2.99 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           36 |     1698 | 2024-04-20 | ENCE Academy      | L   | 0.808      | -            | -                | -                | -         |   -21.68 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           35 |     1754 | 2024-04-19 | ECLOT             | L   | 0.800      | -            | -                | -                | -         |   -12.03 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           34 |     1837 | 2024-04-17 | Gaimin Gladiators | L   | 0.787      | -            | -                | -                | -         |    -9.28 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           33 |     1869 | 2024-04-16 | BLEED             | L   | 0.780      | -            | -                | -                | -         |    -6.05 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           32 |     1899 | 2024-04-14 | Passion UA        | W   | 0.768      | 0.371        | 0.086 (0.024)    | 0.803 (0.228)    | -         |     6.89 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           31 |     1988 | 2024-04-10 | 3DMAX             | W   | 0.743      | 0.500        | 0.186 (0.069)    | 1.000 (0.372)    | -         |    14.59 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           30 |     2007 | 2024-04-10 | UNiTY             | W   | 0.740      | -            | -                | -                | -         |     7.61 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           29 |     2038 | 2024-04-09 | 9 Pandas          | W   | 0.737      | 0.500        | 0.114 (0.042)    | 0.663 (0.244)    | -         |    11.94 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           28 |     2092 | 2024-04-08 | ALTERNATE aTTaX   | W   | 0.727      | -            | -                | -                | -         |     7.12 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           27 |     2142 | 2024-04-05 | Nexus             | W   | 0.709      | -            | -                | -                | -         |     5.35 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           26 |     2233 | 2024-04-03 | Rebels            | W   | 0.694      | -            | -                | -                | -         |    10.55 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           25 |     2277 | 2024-04-01 | Aurora            | W   | 0.683      | 0.500        | 0.526 (0.180)    | 0.874 (0.299)    | -         |    20.44 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           24 |     2302 | 2024-03-29 | ex-Sprout         | W   | 0.663      | -            | -                | -                | -         |     0.46 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           23 |     2517 | 2024-03-17 | ECLOT             | L   | 0.583      | -            | -                | -                | -         |    -7.05 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           22 |     2524 | 2024-03-17 | UNiTY             | W   | 0.582      | -            | -                | -                | 1 (0.582) |     7.36 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           21 |     2542 | 2024-03-16 | Sampi             | W   | 0.575      | -            | -                | -                | 1 (0.575) |     6.68 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           20 |     2555 | 2024-03-15 | UNiTY             | L   | 0.570      | -            | -                | -                | -         |   -10.71 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           19 |     2623 | 2024-03-13 | ALTERNATE aTTaX   | W   | 0.556      | -            | -                | -                | -         |     6.74 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           18 |     2676 | 2024-03-11 | brazylijski luz   | L   | 0.542      | -            | -                | -                | -         |   -14.28 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           17 |     2890 | 2024-03-03 | Gaimin Gladiators | L   | 0.489      | -            | -                | -                | -         |    -5.33 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           16 |     3178 | 2024-02-18 | Monte             | L   | 0.396      | -            | -                | -                | -         |    -2.75 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           15 |     3226 | 2024-02-16 | 500               | W   | 0.383      | -            | -                | -                | -         |     1.54 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           14 |     3233 | 2024-02-16 | PERA              | W   | 0.382      | -            | -                | -                | -         |     4.33 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           13 |     3238 | 2024-02-16 | 500               | L   | 0.382      | -            | -                | -                | -         |   -10.56 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           12 |     3444 | 2024-02-04 | Into the Breach   | L   | 0.301      | -            | -                | -                | -         |    -8.59 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           11 |     3507 | 2024-02-02 | ex-Preasy         | L   | 0.287      | -            | -                | -                | -         |    -7.00 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           10 |     3603 | 2024-01-27 | GODSENT           | W   | 0.248      | -            | -                | -                | -         |     0.24 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            9 |     3676 | 2024-01-23 | MOUZ NXT          | W   | 0.221      | -            | -                | -                | -         |     3.46 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            8 |     3809 | 2024-01-19 | Nexus             | L   | 0.197      | -            | -                | -                | -         |    -4.90 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            7 |     3869 | 2024-01-18 | fnatic            | L   | 0.189      | -            | -                | -                | -         |    -0.40 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            6 |     3890 | 2024-01-18 | Virtus.pro        | L   | 0.188      | -            | -                | -                | -         |    -0.15 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            5 |     4147 | 2024-01-11 | HEROIC            | L   | 0.144      | -            | -                | -                | -         |    -0.10 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            4 |     4152 | 2024-01-11 | PERA              | W   | 0.143      | -            | -                | -                | -         |     1.44 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            3 |     4163 | 2024-01-11 | ILIN              | W   | 0.142      | -            | -                | -                | -         |     0.14 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            2 |     4168 | 2024-01-11 | V1dar             | W   | 0.142      | -            | -                | -                | -         |     0.17 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            1 |     4183 | 2024-01-10 | The Prodigies     | W   | 0.137      | -            | -                | -                | -         |     0.15 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,590.37)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-13 |      1.000 | $545.00        | $545.00         |
| 2024-06-09 |      1.000 | $8,000.00      | $8,000.00       |
| 2024-06-02 |      1.000 | $1,306.00      | $1,306.00       |
| 2024-06-02 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-03-17 |      0.583 | $2,984.00      | $1,739.37       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
