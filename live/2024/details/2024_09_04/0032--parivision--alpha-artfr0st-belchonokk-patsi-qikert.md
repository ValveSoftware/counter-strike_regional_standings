### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Global Rank: [32](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_04.md)<br />
Regional Rank: [24]( ../../standings_europe_2024_09_04.md)<br />
<br />
Final Rank Value:  1119.6<br />
<br />
Final Rank Value (1119.6) = Starting Rank Value (1102.3) + Head To Head Adjustments (17.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.426[<sup>1</sup>](#table2)
- Bounty Collected: 0.483[<sup>2</sup>](#table1)
- Opponent Network: 0.313[<sup>2</sup>](#table1)
- LAN Wins: 0.196[<sup>2</sup>](#table1)

The average of these factors is 0.355<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1102.3
- 400 + ( ( 0.355 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 1102.3


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
|           71 |       10 | 2024-09-04 | Monte             | W   | 1.000      | 0.384        | -                | 0.668 (0.257)    | 0 (0.000) |    13.11 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           70 |      162 | 2024-08-29 | AMKAL             | W   | 1.000      | 0.384        | 0.123 (0.047)    | -                | 0 (0.000) |    12.01 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           69 |      276 | 2024-08-27 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |   -24.90 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           68 |      381 | 2024-08-25 | Monte Gen         | L   | 1.000      | -            | -                | -                | -         |   -25.90 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           67 |      440 | 2024-08-23 | GamerLegion       | W   | 1.000      | -            | -                | -                | 0 (0.000) |    13.91 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           66 |      476 | 2024-08-22 | B8                | W   | 1.000      | 0.143        | 0.176 (0.025)    | -                | 0 (0.000) |    15.49 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           65 |      508 | 2024-08-21 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -16.50 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           64 |      531 | 2024-08-21 | Enterprise        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.45 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           63 |      571 | 2024-08-20 | 9 Pandas          | W   | 1.000      | 0.500        | 0.060 (0.030)    | 0.719 (0.359)    | 0 (0.000) |    15.91 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           62 |      602 | 2024-08-19 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -4.00 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           61 |      698 | 2024-08-15 | OG                | L   | 1.000      | -            | -                | -                | -         |   -21.38 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           60 |      706 | 2024-08-15 | 9INE              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.32 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           59 |      714 | 2024-08-15 | Metizport         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.53 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           58 |      752 | 2024-08-13 | RUSH B            | W   | 1.000      | -            | -                | -                | -         |     8.87 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           57 |      797 | 2024-08-12 | Monte             | W   | 1.000      | 0.500        | -                | 0.668 (0.334)    | -         |    11.49 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           56 |      882 | 2024-08-09 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -4.76 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           55 |      963 | 2024-08-07 | SINNERS           | W   | 1.000      | -            | -                | -                | -         |    11.88 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           54 |      995 | 2024-08-06 | Sangal            | L   | 1.000      | -            | -                | -                | -         |    -7.22 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           53 |     1009 | 2024-08-06 | Aurora Young Blud | W   | 1.000      | 0.435        | -                | 0.651 (0.283)    | -         |    11.83 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           52 |     1027 | 2024-08-05 | ENCE              | W   | 0.999      | 0.435        | 0.132 (0.057)    | -                | -         |    22.20 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           51 |     1050 | 2024-08-04 | Betera            | L   | 0.994      | -            | -                | -                | -         |   -29.04 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           50 |     1091 | 2024-08-03 | GUN5              | L   | 0.987      | -            | -                | -                | -         |   -23.87 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           49 |     1108 | 2024-08-03 | CYBERSHOKE        | W   | 0.985      | 0.435        | -                | 0.652 (0.279)    | -         |     8.94 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           48 |     1118 | 2024-08-02 | TSM               | W   | 0.981      | 0.500        | 0.057 (0.028)    | 0.914 (0.448)    | -         |    11.56 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           47 |     1159 | 2024-08-01 | 9 Pandas          | W   | 0.974      | 0.500        | 0.060 (0.029)    | 0.719 (0.350)    | -         |    13.56 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           46 |     1272 | 2024-07-30 | Permitta          | W   | 0.959      | -            | -                | -                | -         |     9.13 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           45 |     1374 | 2024-07-26 | BLEED             | L   | 0.933      | -            | -                | -                | -         |   -20.48 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           44 |     1389 | 2024-07-26 | True Rippers      | W   | 0.932      | -            | -                | -                | 1 (0.932) |     2.69 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           43 |     1420 | 2024-07-25 | ENCE              | L   | 0.926      | -            | -                | -                | -         |    -9.05 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           42 |     1458 | 2024-07-24 | The MongolZ       | W   | 0.919      | 0.650        | 0.865 (0.517)    | 0.606 (0.362)    | 1 (0.919) |    28.12 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           41 |     1464 | 2024-07-24 | Aurora            | L   | 0.918      | -            | -                | -                | -         |    -4.63 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           40 |     2138 | 2024-06-14 | Permitta          | L   | 0.652      | -            | -                | -                | -         |   -14.62 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           39 |     2240 | 2024-06-10 | RUSH B            | W   | 0.626      | -            | -                | -                | -         |     5.56 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           38 |     2245 | 2024-06-10 | 3DMAX             | L   | 0.626      | -            | -                | -                | -         |    -2.23 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           37 |     2251 | 2024-06-10 | SINNERS           | L   | 0.625      | -            | -                | -                | -         |   -10.30 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           36 |     2285 | 2024-06-09 | Aurora            | L   | 0.620      | -            | -                | -                | -         |    -3.96 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           35 |     2292 | 2024-06-09 | 9 Pandas          | W   | 0.619      | -            | -                | -                | -         |     9.26 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           34 |     2301 | 2024-06-09 | Monte             | W   | 0.619      | -            | -                | -                | -         |     7.14 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           33 |     2306 | 2024-06-09 | SAW               | L   | 0.618      | -            | -                | -                | -         |    -2.00 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           32 |     2516 | 2024-06-05 | Aurora            | L   | 0.594      | -            | -                | -                | -         |    -2.88 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           31 |     2566 | 2024-06-04 | Monte             | W   | 0.587      | -            | -                | -                | -         |     7.13 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           30 |     2973 | 2024-05-20 | Sangal            | L   | 0.486      | -            | -                | -                | -         |    -5.46 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           29 |     3051 | 2024-05-17 | Zero Tenacity     | W   | 0.468      | 0.500        | 0.138 (0.032)    | 1.000 (0.234)    | -         |     6.83 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           28 |     3082 | 2024-05-16 | Aurora            | L   | 0.462      | -            | -                | -                | -         |    -2.06 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           27 |     3100 | 2024-05-16 | Eternal Fire      | L   | 0.459      | -            | -                | -                | -         |    -0.18 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           26 |     3140 | 2024-05-15 | B8                | W   | 0.454      | 0.500        | 0.176 (0.040)    | 1.000 (0.227)    | -         |     7.04 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           25 |     3323 | 2024-05-09 | Endpoint          | L   | 0.414      | -            | -                | -                | -         |    -7.27 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           24 |     3482 | 2024-05-01 | Passion UA        | L   | 0.360      | -            | -                | -                | -         |    -6.86 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           23 |     3496 | 2024-05-01 | fnatic            | L   | 0.358      | -            | -                | -                | -         |    -2.10 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           22 |     3521 | 2024-04-29 | 3DMAX             | L   | 0.347      | -            | -                | -                | -         |    -0.56 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           21 |     3531 | 2024-04-29 | Zero Tenacity     | W   | 0.346      | -            | -                | -                | -         |     4.86 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           20 |     3568 | 2024-04-27 | Sangal            | W   | 0.333      | 0.500        | 0.248 (0.041)    | -                | -         |     7.07 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           19 |     3596 | 2024-04-26 | SINNERS           | W   | 0.327      | -            | -                | -                | -         |     6.20 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           18 |     3624 | 2024-04-25 | ex-Guild Eagles   | W   | 0.320      | -            | -                | -                | -         |     1.59 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           17 |     3646 | 2024-04-24 | MOUZ NXT          | W   | 0.313      | -            | -                | -                | -         |     3.91 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           16 |     3695 | 2024-04-21 | Nexus             | W   | 0.293      | -            | -                | -                | -         |     1.87 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           15 |     3698 | 2024-04-21 | B8                | L   | 0.293      | -            | -                | -                | -         |    -5.19 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           14 |     3755 | 2024-04-19 | Zero Tenacity     | L   | 0.281      | -            | -                | -                | -         |    -4.83 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           13 |     3854 | 2024-04-17 | HAVU              | W   | 0.267      | -            | -                | -                | -         |     0.46 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           12 |     3855 | 2024-04-17 | Permitta          | L   | 0.267      | -            | -                | -                | -         |    -5.57 | ArtFr0st, bl1x1, Jerry, Patsi, Qikert      |
|           11 |     3977 | 2024-04-11 | 500               | L   | 0.227      | -            | -                | -                | -         |    -6.55 | ArtFr0st, bl1x1, Jerry, Patsi, Qikert      |
|           10 |     4016 | 2024-04-10 | Aurora            | L   | 0.221      | -            | -                | -                | -         |    -0.84 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            9 |     4075 | 2024-04-09 | RUSH B            | L   | 0.214      | -            | -                | -                | -         |    -5.33 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            8 |     4247 | 2024-04-03 | MOUZ NXT          | L   | 0.174      | -            | -                | -                | -         |    -3.59 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            7 |     4258 | 2024-04-03 | Space             | W   | 0.173      | -            | -                | -                | -         |     0.96 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            6 |     4293 | 2024-04-02 | AMKAL             | L   | 0.167      | -            | -                | -                | -         |    -2.53 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            5 |     4302 | 2024-04-02 | Insilio           | L   | 0.166      | -            | -                | -                | -         |    -3.98 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            4 |     4313 | 2024-04-01 | Metizport         | W   | 0.160      | -            | -                | -                | -         |     0.65 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            3 |     4476 | 2024-03-21 | FORZE             | W   | 0.087      | -            | -                | -                | -         |     0.44 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            2 |     4658 | 2024-03-13 | 3DMAX             | W   | 0.034      | -            | -                | -                | -         |     1.01 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            1 |     4775 | 2024-03-08 | B8                | W   | 0.000      | -            | -                | -                | -         |     0.00 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,219.63)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-06 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-09 |      0.621 | $6,500.00      | $4,036.05       |
| 2024-05-02 |      0.367 | $500.00        | $183.59         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
