### Roster Details<br />
Team Name: Sashi<br />
Roster: Beccie, Cabbi, MistR, smooya, Zyphon<br />
Global Rank: [49](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [35]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  1214.0<br />
<br />
Final Rank Value (1214.0) = Starting Rank Value (1347.1) + Head To Head Adjustments (-133.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.375[<sup>1</sup>](#table2)
- Bounty Collected: 0.401[<sup>2</sup>](#table1)
- Opponent Network: 0.299[<sup>2</sup>](#table1)
- LAN Wins: 0.915[<sup>2</sup>](#table1)

The average of these factors is 0.498<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1347.1
- 400 + ( ( 0.498 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1347.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           67 |       19 | 2025-11-29 | Inner Circle     | L   | 1.000      | -            | -                | -                | -         |   -11.31 | Beccie, Cabbi, MistR, smooya, Zyphon |
|           66 |       32 | 2025-11-29 | GUN5             | W   | 1.000      | 0.333        | -                | 0.967 (0.322)    | 1 (1.000) |    13.25 | Beccie, Cabbi, MistR, smooya, Zyphon |
|           65 |      139 | 2025-11-23 | AMKAL            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.48 | Beccie, Cabbi, MistR, smooya, Zyphon |
|           64 |      164 | 2025-11-22 | Impulse GW       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.31 | Beccie, Cabbi, MistR, smooya, Zyphon |
|           63 |      528 | 2025-11-08 | BetBoom          | L   | 1.000      | -            | -                | -                | -         |    -6.20 | Beccie, Cabbi, MistR, smooya, Zyphon |
|           62 |      540 | 2025-11-08 | Alliance         | W   | 1.000      | 0.335        | 0.045 (0.015)    | 0.901 (0.302)    | 1 (1.000) |    18.01 | Beccie, Cabbi, MistR, smooya, Zyphon |
|           61 |      555 | 2025-11-07 | BC.Game          | W   | 1.000      | 0.335        | 0.041 (0.014)    | -                | 1 (1.000) |    12.13 | Beccie, Cabbi, MistR, smooya, Zyphon |
|           60 |      575 | 2025-11-07 | BetBoom          | L   | 1.000      | -            | -                | -                | -         |    -5.78 | Beccie, Cabbi, MistR, smooya, Zyphon |
|           59 |      596 | 2025-11-07 | 777              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.32 | Beccie, Cabbi, MistR, smooya, Zyphon |
|           58 |      607 | 2025-11-07 | Boys N Da HUD    | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.36 | Beccie, Cabbi, MistR, smooya, Zyphon |
|           57 |      615 | 2025-11-07 | Betclic          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     6.04 | Beccie, Cabbi, MistR, smooya, Zyphon |
|           56 |      625 | 2025-11-07 | Lilmix           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.25 | Beccie, Cabbi, MistR, smooya, Zyphon |
|           55 |      854 | 2025-10-30 | Spirit Academy   | L   | 0.985      | -            | -                | -                | -         |   -24.29 | Beccie, Cabbi, MistR, smooya, Zyphon |
|           54 |      889 | 2025-10-28 | kONO             | W   | 0.974      | 0.435        | -                | 0.622 (0.263)    | -         |     7.24 | Beccie, Cabbi, MistR, smooya, Zyphon |
|           53 |      993 | 2025-10-26 | Sangal           | L   | 0.960      | -            | -                | -                | -         |   -14.65 | Beccie, Cabbi, MistR, smooya, Zyphon |
|           52 |     1125 | 2025-10-24 | SPARTA           | W   | 0.945      | 0.435        | -                | 0.679 (0.279)    | -         |     3.99 | Beccie, Cabbi, MistR, smooya, Zyphon |
|           51 |     1208 | 2025-10-21 | Fire Flux        | W   | 0.925      | 0.435        | -                | 0.786 (0.316)    | -         |     3.35 | Beccie, Cabbi, MistR, smooya, Zyphon |
|           50 |     1436 | 2025-10-11 | RUBY             | L   | 0.860      | -            | -                | -                | -         |   -18.29 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           49 |     1446 | 2025-10-11 | Johnny Speeds    | L   | 0.859      | -            | -                | -                | -         |   -13.41 | Beccie, Cabbi, MistR, rosen, Zyphon  |
|           48 |     1468 | 2025-10-10 | Partizan         | L   | 0.854      | -            | -                | -                | -         |   -18.44 | Beccie, Cabbi, MistR, rosen, Zyphon  |
|           47 |     1476 | 2025-10-10 | CYBERSHOKE       | W   | 0.853      | 0.435        | 0.045 (0.017)    | 0.936 (0.347)    | -         |     8.26 | Beccie, Cabbi, MistR, rosen, Zyphon  |
|           46 |     1511 | 2025-10-09 | SPARTA           | W   | 0.847      | -            | -                | -                | -         |     2.49 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           45 |     1613 | 2025-10-07 | Oramond          | W   | 0.834      | 0.384        | 0.044 (0.014)    | 0.987 (0.316)    | -         |     5.76 | Beccie, Cabbi, MistR, rosen, Zyphon  |
|           44 |     1623 | 2025-10-07 | Monte            | L   | 0.833      | -            | -                | -                | -         |   -12.05 | Beccie, Bl4zE, Cabbi, MistR, Zyphon  |
|           43 |     1679 | 2025-10-06 | ECLOT            | L   | 0.827      | -            | -                | -                | -         |   -17.23 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           42 |     1732 | 2025-10-05 | NOVAQ            | L   | 0.821      | -            | -                | -                | -         |   -22.31 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           41 |     1947 | 2025-09-30 | Friendly Campers | L   | 0.786      | -            | -                | -                | -         |   -14.02 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           40 |     2025 | 2025-09-28 | SINNERS          | W   | 0.773      | 0.435        | 0.171 (0.057)    | 1.000 (0.336)    | -         |     7.60 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           39 |     2128 | 2025-09-26 | FORZE Reload     | W   | 0.759      | 0.435        | -                | 0.711 (0.235)    | -         |     2.24 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           38 |     2171 | 2025-09-25 | RUBY             | L   | 0.753      | -            | -                | -                | -         |   -19.16 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           37 |     2182 | 2025-09-25 | HOTU             | L   | 0.752      | -            | -                | -                | -         |   -12.68 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           36 |     2230 | 2025-09-23 | FORZE Reload     | W   | 0.739      | -            | -                | -                | -         |     1.91 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           35 |     2232 | 2025-09-23 | SINNERS          | W   | 0.738      | 0.371        | 0.171 (0.047)    | 1.000 (0.274)    | -         |     7.37 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           34 |     2271 | 2025-09-21 | Betclic          | W   | 0.726      | -            | -                | -                | -         |     3.03 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           33 |     2303 | 2025-09-20 | BetBoom          | L   | 0.719      | -            | -                | -                | -         |    -5.19 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           32 |     2327 | 2025-09-19 | HOTU             | W   | 0.713      | 0.435        | 0.049 (0.015)    | -                | -         |    10.59 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           31 |     2371 | 2025-09-18 | Metizport        | W   | 0.705      | -            | -                | -                | -         |     4.49 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           30 |     2533 | 2025-09-13 | Nexus            | L   | 0.674      | -            | -                | -                | -         |   -16.36 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           29 |     2577 | 2025-09-12 | JiJieHao         | W   | 0.667      | -            | -                | -                | -         |     2.04 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           28 |     2685 | 2025-09-10 | AaB              | W   | 0.653      | -            | -                | -                | -         |     2.02 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           27 |     2730 | 2025-09-09 | BC.Game          | L   | 0.647      | -            | -                | -                | -         |   -16.02 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           26 |     3291 | 2025-08-16 | Nexus            | L   | 0.487      | -            | -                | -                | -         |   -11.97 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           25 |     3336 | 2025-08-15 | Partizan         | W   | 0.481      | -            | -                | -                | -         |     1.16 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           24 |     3435 | 2025-08-13 | GUN5             | W   | 0.467      | -            | -                | -                | -         |     4.19 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           23 |     3489 | 2025-08-12 | PARIVISION       | L   | 0.460      | -            | -                | -                | -         |    -7.32 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           22 |     3575 | 2025-08-10 | BetBoom          | L   | 0.447      | -            | -                | -                | -         |    -3.65 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           21 |     3581 | 2025-08-10 | ex-Inner Circle  | W   | 0.446      | -            | -                | -                | -         |     1.45 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           20 |     3617 | 2025-08-08 | fnatic           | L   | 0.434      | -            | -                | -                | -         |    -5.15 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           19 |     3660 | 2025-08-05 | Betclic          | W   | 0.414      | -            | -                | -                | -         |     1.40 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           18 |     3699 | 2025-08-02 | Nexus            | W   | 0.394      | -            | -                | -                | -         |     2.83 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           17 |     3743 | 2025-07-31 | ARCRED           | W   | 0.378      | -            | -                | -                | -         |     0.61 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           16 |     3758 | 2025-07-29 | 9INE             | L   | 0.367      | -            | -                | -                | -         |    -6.90 | Beccie, Cabbi, Lucky, MistR, Zyphon  |
|           15 |     4016 | 2025-07-16 | PARIVISION       | L   | 0.281      | -            | -                | -                | -         |    -4.68 | Beccie, Cabbi, Lucky, Patti, Zyphon  |
|           14 |     4026 | 2025-07-16 | FUT              | W   | 0.279      | 0.624        | 0.161 (0.028)    | -                | -         |     6.55 | Beccie, Cabbi, Lucky, Patti, Zyphon  |
|           13 |     4036 | 2025-07-15 | Inner Circle     | L   | 0.274      | -            | -                | -                | -         |    -3.02 | Beccie, Cabbi, Lucky, Patti, Zyphon  |
|           12 |     4046 | 2025-07-15 | fnatic           | W   | 0.273      | 0.624        | 0.150 (0.025)    | -                | -         |     5.59 | Beccie, Cabbi, Lucky, Patti, Zyphon  |
|           11 |     4063 | 2025-07-14 | Liquid           | W   | 0.267      | 0.624        | 0.536 (0.089)    | -                | -         |     7.60 | Beccie, Cabbi, Lucky, Patti, Zyphon  |
|           10 |     4074 | 2025-07-14 | 1win             | W   | 0.264      | -            | -                | -                | -         |     0.73 | Beccie, Cabbi, Lucky, Patti, Zyphon  |
|            9 |     4404 | 2025-06-17 | PARIVISION       | L   | 0.086      | -            | -                | -                | -         |    -1.39 | Beccie, Cabbi, kiR, Lucky, Zyphon    |
|            8 |     4427 | 2025-06-16 | CYBERSHOKE       | L   | 0.077      | -            | -                | -                | -         |    -1.83 | Beccie, Cabbi, kiR, Lucky, Zyphon    |
|            7 |     4463 | 2025-06-14 | Passion UA       | L   | 0.067      | -            | -                | -                | -         |    -2.04 | Beccie, Cabbi, kiR, Lucky, Zyphon    |
|            6 |     4470 | 2025-06-14 | Metizport        | W   | 0.067      | -            | -                | -                | 1 (0.067) |     0.01 | Beccie, Cabbi, kiR, Lucky, Zyphon    |
|            5 |     4482 | 2025-06-14 | EYEBALLERS       | W   | 0.066      | -            | -                | -                | -         |     1.39 | Beccie, Cabbi, kiR, Lucky, Zyphon    |
|            4 |     4497 | 2025-06-13 | 9INE             | L   | 0.061      | -            | -                | -                | -         |    -1.07 | Beccie, Cabbi, kiR, Lucky, Zyphon    |
|            3 |     4551 | 2025-06-12 | Nexus            | W   | 0.052      | -            | -                | -                | -         |     0.39 | Beccie, Cabbi, kiR, Lucky, Zyphon    |
|            2 |     4578 | 2025-06-10 | Gentle Mates     | L   | 0.039      | -            | -                | -                | -         |    -0.28 | Beccie, Cabbi, kiR, Lucky, Zyphon    |
|            1 |     4645 | 2025-06-06 | SINNERS          | W   | 0.011      | -            | -                | -                | -         |     0.17 | Beccie, Cabbi, kiR, Lucky, Zyphon    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,473.85)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-23 |      1.000 | $2,610.00      | $2,610.00       |
| 2025-11-08 |      1.000 | $1,305.00      | $1,305.00       |
| 2025-10-12 |      0.867 | $2,000.00      | $1,733.80       |
| 2025-10-01 |      0.794 | $2,000.00      | $1,587.84       |
| 2025-09-25 |      0.752 | $5,000.00      | $3,759.89       |
| 2025-09-21 |      0.727 | $2,000.00      | $1,453.88       |
| 2025-06-15 |      0.074 | $316.00        | $23.44          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
