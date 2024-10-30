### Roster Details<br />
Team Name: FAVBET<br />
Roster: bondik, j3kie, Marix, Smash, t3ns1on<br />
Global Rank: [71](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_30.md)<br />
Regional Rank: [49]( ../../standings_europe_2024_10_30.md)<br />
<br />
Final Rank Value:  990.0<br />
<br />
Final Rank Value (990.0) = Starting Rank Value (971.1) + Head To Head Adjustments (18.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.442[<sup>1</sup>](#table2)
- Bounty Collected: 0.428[<sup>2</sup>](#table1)
- Opponent Network: 0.282[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.288<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 971.1
- 400 + ( ( 0.288 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 971.1


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
|           71 |      172 | 2024-10-20 | Gaimin Gladiators | W   | 1.000      | 0.354        | -                | 0.708 (0.251)    | 0 (0.000) |    16.37 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           70 |      250 | 2024-10-17 | Preasy            | L   | 1.000      | -            | -                | -                | -         |   -27.12 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           69 |      324 | 2024-10-13 | Spirit Academy    | L   | 1.000      | -            | -                | -                | -         |    -9.04 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           68 |      328 | 2024-10-13 | Aurora            | W   | 1.000      | 0.435        | 0.190 (0.082)    | 0.459 (0.199)    | 0 (0.000) |    23.14 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           67 |      331 | 2024-10-13 | RUSH B            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.20 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           66 |      351 | 2024-10-12 | Passion UA        | W   | 1.000      | 0.435        | 0.221 (0.096)    | 1.000 (0.435)    | 0 (0.000) |    23.92 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           65 |      361 | 2024-10-11 | BetBoom           | W   | 1.000      | 0.435        | 0.202 (0.088)    | -                | 0 (0.000) |    26.23 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           64 |      374 | 2024-10-10 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -12.66 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           63 |      445 | 2024-10-08 | TSM               | W   | 1.000      | 0.435        | 0.086 (0.037)    | 0.722 (0.314)    | 0 (0.000) |    20.47 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           62 |      489 | 2024-10-06 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -12.88 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           61 |      496 | 2024-10-06 | DRILLAS           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    13.65 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           60 |      537 | 2024-10-05 | GUN5              | L   | 1.000      | -            | -                | -                | -         |    -9.48 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           59 |      626 | 2024-10-02 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |   -12.46 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           58 |      638 | 2024-10-02 | HOTU              | W   | 1.000      | 0.435        | -                | 0.521 (0.226)    | 0 (0.000) |    13.00 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           57 |      687 | 2024-10-01 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -8.31 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           56 |      738 | 2024-09-29 | Permitta          | W   | 0.993      | 0.354        | 0.060 (0.021)    | 1.000 (0.351)    | 0 (0.000) |    16.61 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           55 |      743 | 2024-09-29 | Rhyno             | L   | 0.992      | -            | -                | -                | -         |   -18.14 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           54 |      779 | 2024-09-28 | CYBERSHOKE        | L   | 0.985      | -            | -                | -                | -         |   -10.99 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           53 |      870 | 2024-09-26 | DRILLAS           | L   | 0.972      | -            | -                | -                | -         |   -19.36 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           52 |     1006 | 2024-09-23 | WW                | W   | 0.953      | -            | -                | -                | 0 (0.000) |     3.54 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           51 |     1013 | 2024-09-23 | ECSTATIC          | L   | 0.952      | -            | -                | -                | -         |   -13.60 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           50 |     1062 | 2024-09-21 | ALTERNATE aTTaX   | W   | 0.938      | 0.435        | 0.082 (0.034)    | 0.746 (0.304)    | -         |    14.92 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           49 |     1077 | 2024-09-20 | Spirit Academy    | L   | 0.933      | -            | -                | -                | -         |   -11.81 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           48 |     1115 | 2024-09-19 | Zero Tenacity     | L   | 0.926      | -            | -                | -                | -         |    -9.21 | guthriee, j3kie, Marix, Smash, t3ns1on  |
|           47 |     1151 | 2024-09-18 | Passion UA        | L   | 0.919      | -            | -                | -                | -         |   -11.68 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           46 |     1171 | 2024-09-17 | CPH Wolves        | W   | 0.914      | -            | -                | -                | -         |     9.91 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           45 |     1200 | 2024-09-16 | Endpoint          | W   | 0.906      | 0.372        | 0.057 (0.019)    | 0.626 (0.211)    | -         |    14.69 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           44 |     1222 | 2024-09-15 | Lynn Vision       | W   | 0.900      | 0.435        | 0.044 (0.017)    | -                | -         |     9.36 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           43 |     1288 | 2024-09-13 | HOTU              | W   | 0.887      | -            | -                | -                | -         |    11.41 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           42 |     1337 | 2024-09-12 | SINNERS           | L   | 0.878      | -            | -                | -                | -         |    -6.99 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           41 |     1357 | 2024-09-11 | K27               | W   | 0.873      | -            | -                | -                | -         |     4.34 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           40 |     1411 | 2024-09-09 | Gaimin Gladiators | W   | 0.859      | 0.435        | -                | 0.708 (0.264)    | -         |    14.06 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           39 |     1429 | 2024-09-08 | FLuffy Gangsters  | L   | 0.852      | -            | -                | -                | -         |   -19.41 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           38 |     1489 | 2024-09-06 | CYBERSHOKE        | W   | 0.840      | 0.435        | -                | 0.717 (0.262)    | -         |    16.19 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           37 |     1511 | 2024-09-05 | Molotov           | W   | 0.834      | -            | -                | -                | -         |     6.74 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           36 |     1523 | 2024-09-05 | ALTERNATE aTTaX   | L   | 0.833      | -            | -                | -                | -         |   -11.03 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           35 |     1564 | 2024-09-04 | SovvyKiNG         | W   | 0.826      | -            | -                | -                | -         |     7.86 | bondik, guthriee, j3kie, Marix, Smash   |
|           34 |     1617 | 2024-09-02 | Revenant          | L   | 0.814      | -            | -                | -                | -         |   -12.63 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           33 |     1622 | 2024-09-02 | Metizport         | L   | 0.812      | -            | -                | -                | -         |   -11.79 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           32 |     1647 | 2024-09-01 | The Suspect       | W   | 0.804      | -            | -                | -                | -         |     6.66 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           31 |     1682 | 2024-08-30 | Aurora Young Blud | L   | 0.792      | -            | -                | -                | -         |   -14.36 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           30 |     1789 | 2024-08-28 | CYBERSHOKE        | L   | 0.778      | -            | -                | -                | -         |   -11.34 | bondik, guthriee, Marix, Smash, t3ns1on |
|           29 |     1820 | 2024-08-27 | Rebels            | L   | 0.773      | -            | -                | -                | -         |   -11.67 | guthriee, j3kie, Marix, Smash, Topa     |
|           28 |     1837 | 2024-08-27 | Insilio           | L   | 0.772      | -            | -                | -                | -         |   -14.15 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           27 |     1965 | 2024-08-24 | ALTERNATE aTTaX   | W   | 0.754      | -            | -                | -                | -         |     9.71 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           26 |     2017 | 2024-08-22 | Spirit Academy    | W   | 0.740      | -            | -                | -                | -         |    12.56 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           25 |     2071 | 2024-08-21 | Preasy            | W   | 0.733      | -            | -                | -                | -         |     3.74 | bondik, guthriee, j3kie, Marix, Smash   |
|           24 |     2084 | 2024-08-21 | Gaimin Gladiators | W   | 0.732      | -            | -                | -                | -         |     8.88 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           23 |     2200 | 2024-08-17 | Monte             | L   | 0.707      | -            | -                | -                | -         |    -7.25 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           22 |     2210 | 2024-08-17 | ECSTATIC          | W   | 0.706      | -            | -                | -                | -         |    10.19 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           21 |     2257 | 2024-08-15 | Spirit Academy    | L   | 0.693      | -            | -                | -                | -         |    -9.24 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           20 |     2380 | 2024-08-12 | Zero Tenacity     | W   | 0.671      | 0.384        | 0.131 (0.034)    | -                | -         |    13.65 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           19 |     2468 | 2024-08-08 | TNL               | W   | 0.646      | -            | -                | -                | -         |     3.30 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           18 |     2570 | 2024-08-06 | Lilmix            | W   | 0.632      | -            | -                | -                | -         |     3.84 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           17 |     2731 | 2024-08-01 | Meteor            | L   | 0.599      | -            | -                | -                | -         |   -15.31 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           16 |     3050 | 2024-07-23 | Rhyno             | L   | 0.539      | -            | -                | -                | -         |    -9.46 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           15 |     3352 | 2024-07-16 | ECLOT             | W   | 0.493      | -            | -                | -                | -         |    12.43 | bondik, j3kie, Marix, Smash, t3ns1on    |
|           14 |     3608 | 2024-06-16 | Zero Tenacity     | L   | 0.294      | -            | -                | -                | -         |    -3.47 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           13 |     3638 | 2024-06-15 | 9INE              | W   | 0.287      | -            | -                | -                | -         |     0.68 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           12 |     3674 | 2024-06-14 | ARCRED            | L   | 0.281      | -            | -                | -                | -         |    -6.03 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           11 |     3743 | 2024-06-12 | Nemiga            | W   | 0.267      | 0.143        | 0.838 (0.032)    | -                | -         |     8.05 | bondik, guthriee, j3kie, Smash, t3ns1on |
|           10 |     3767 | 2024-06-11 | Nexus             | W   | 0.260      | -            | -                | -                | -         |     3.12 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            9 |     4004 | 2024-06-06 | Zero Tenacity     | L   | 0.227      | -            | -                | -                | -         |    -2.55 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            8 |     4031 | 2024-06-06 | 1WIN              | W   | 0.226      | -            | -                | -                | -         |     1.89 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            7 |     4136 | 2024-06-04 | RUSTEC            | W   | 0.213      | -            | -                | -                | -         |     0.43 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            6 |     4186 | 2024-06-02 | JANO              | W   | 0.199      | -            | -                | -                | -         |     0.25 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            5 |     4247 | 2024-05-31 | Sangal            | L   | 0.186      | -            | -                | -                | -         |    -0.30 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            4 |     4253 | 2024-05-31 | SAW               | L   | 0.185      | -            | -                | -                | -         |    -0.07 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            3 |     4266 | 2024-05-30 | ARCRED            | L   | 0.181      | -            | -                | -                | -         |    -3.97 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            2 |     4296 | 2024-05-29 | Aurora Young Blud | W   | 0.173      | -            | -                | -                | -         |     2.21 | bondik, guthriee, j3kie, Smash, t3ns1on |
|            1 |     4865 | 2024-05-10 | Johnny Speeds     | L   | 0.045      | -            | -                | -                | -         |    -0.57 | bondik, guthriee, j3kie, Smash, t3ns1on |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,291.58)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-09-21 |      0.940 | $3,300.00      | $3,100.80       |
| 2024-06-10 |      0.254 | $750.00        | $190.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
