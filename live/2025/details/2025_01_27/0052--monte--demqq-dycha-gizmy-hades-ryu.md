### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, dycha, Gizmy, hades, ryu<br />
Global Rank: [52](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [38]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  1066.6<br />
<br />
Final Rank Value (1066.6) = Starting Rank Value (1021.1) + Head To Head Adjustments (45.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.473[<sup>1</sup>](#table2)
- Bounty Collected: 0.422[<sup>2</sup>](#table1)
- Opponent Network: 0.222[<sup>2</sup>](#table1)
- LAN Wins: 0.153[<sup>2</sup>](#table1)

The average of these factors is 0.318<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1021.1
- 400 + ( ( 0.318 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1021.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |      102 | 2025-01-23 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -17.87 | DemQQ, dycha, Gizmy, hades, ryu     |
|           51 |      188 | 2025-01-21 | 9 Pandas          | W   | 1.000      | 0.500        | 0.163 (0.082)    | 0.864 (0.432)    | 0 (0.000) |    19.16 | DemQQ, dycha, Gizmy, hades, ryu     |
|           50 |      376 | 2024-12-16 | ECLOT             | L   | 0.920      | -            | -                | -                | -         |   -10.10 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           49 |      448 | 2024-12-13 | Metizport         | L   | 0.899      | -            | -                | -                | -         |    -8.98 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           48 |      486 | 2024-12-10 | Aurora            | W   | 0.880      | 0.435        | 0.057 (0.022)    | 0.425 (0.163)    | 0 (0.000) |     9.97 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           47 |      495 | 2024-12-09 | GUN5              | W   | 0.873      | 0.435        | 0.227 (0.086)    | 0.988 (0.375)    | 0 (0.000) |    14.32 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           46 |      807 | 2024-11-24 | ENCE              | L   | 0.773      | -            | -                | -                | -         |    -8.67 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           45 |     1162 | 2024-11-10 | FAVBET            | W   | 0.680      | 0.354        | 0.074 (0.018)    | 1.000 (0.241)    | 0 (0.000) |     6.64 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           44 |     1218 | 2024-11-07 | 500               | L   | 0.659      | -            | -                | -                | -         |   -12.85 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           43 |     1234 | 2024-11-06 | Spirit Academy    | W   | 0.653      | 0.426        | 0.169 (0.047)    | 1.000 (0.278)    | 0 (0.000) |    10.30 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           42 |     1433 | 2024-10-27 | SAW               | L   | 0.585      | -            | -                | -                | -         |    -4.28 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           41 |     1457 | 2024-10-26 | Legacy            | W   | 0.579      | 0.500        | 0.077 (0.022)    | 0.498 (0.144)    | 1 (0.579) |     9.30 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           40 |     1474 | 2024-10-25 | MIBR              | W   | 0.574      | 0.500        | 0.205 (0.059)    | 0.598 (0.172)    | 1 (0.574) |    15.81 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           39 |     1483 | 2024-10-25 | paiN              | L   | 0.572      | -            | -                | -                | -         |    -1.67 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           38 |     1730 | 2024-10-11 | SINNERS           | L   | 0.480      | -            | -                | -                | -         |    -7.85 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           37 |     1850 | 2024-10-07 | Metizport         | W   | 0.452      | 0.435        | 0.184 (0.036)    | 0.796 (0.156)    | 0 (0.000) |    11.51 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           36 |     1905 | 2024-10-05 | Adventurers       | W   | 0.439      | -            | -                | -                | 0 (0.000) |     3.31 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           35 |     1972 | 2024-10-03 | Spirit Academy    | L   | 0.426      | -            | -                | -                | -         |    -7.11 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           34 |     2085 | 2024-09-30 | ECSTATIC          | W   | 0.406      | 0.435        | 0.080 (0.014)    | 1.000 (0.176)    | 0 (0.000) |     5.23 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           33 |     2252 | 2024-09-26 | 3DMAX             | L   | 0.378      | -            | -                | -                | -         |    -1.61 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           32 |     2335 | 2024-09-24 | Rebels            | W   | 0.367      | -            | -                | -                | -         |     3.26 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           31 |     2337 | 2024-09-24 | GameAgents        | W   | 0.367      | -            | -                | -                | -         |     2.14 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           30 |     2346 | 2024-09-24 | BIG               | W   | 0.365      | 0.384        | 0.298 (0.042)    | -                | -         |     9.99 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           29 |     2368 | 2024-09-23 | 4wb               | W   | 0.361      | -            | -                | -                | -         |     0.33 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           28 |     2386 | 2024-09-23 | PARIVISION        | W   | 0.358      | -            | -                | -                | -         |     3.29 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           27 |     2491 | 2024-09-19 | Sashi             | W   | 0.332      | 0.384        | -                | 0.652 (0.083)    | -         |     5.04 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           26 |     2559 | 2024-09-17 | EYEBALLERS        | W   | 0.319      | -            | -                | -                | -         |     2.67 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           25 |     2705 | 2024-09-12 | Nemiga            | L   | 0.285      | -            | -                | -                | -         |    -1.94 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           24 |     2844 | 2024-09-07 | GamerLegion       | L   | 0.251      | -            | -                | -                | -         |    -6.17 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           23 |     2912 | 2024-09-05 | SINNERS           | W   | 0.238      | -            | -                | -                | -         |     4.22 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           22 |     2942 | 2024-09-04 | PARIVISION        | L   | 0.232      | -            | -                | -                | -         |    -5.24 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           21 |     2993 | 2024-09-02 | BetBoom           | L   | 0.220      | -            | -                | -                | -         |    -2.48 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           20 |     3032 | 2024-08-31 | GUN5              | L   | 0.206      | -            | -                | -                | -         |    -2.85 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           19 |     3041 | 2024-08-30 | Aurora            | W   | 0.200      | -            | -                | -                | -         |     2.27 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           18 |     3048 | 2024-08-30 | GamerLegion       | W   | 0.199      | -            | -                | -                | -         |     1.37 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           17 |     3071 | 2024-08-29 | Ninjas in Pyjamas | W   | 0.194      | -            | -                | -                | -         |     3.34 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           16 |     3085 | 2024-08-29 | Sashi             | L   | 0.193      | -            | -                | -                | -         |    -3.15 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           15 |     3132 | 2024-08-28 | MOUZ NXT          | W   | 0.187      | -            | -                | -                | -         |     0.70 | DemQQ, dycha, Gizmy, hades, KEi     |
|           14 |     3166 | 2024-08-28 | Passion UA        | W   | 0.184      | -            | -                | -                | -         |     3.96 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           13 |     3363 | 2024-08-23 | B8                | L   | 0.153      | -            | -                | -                | -         |    -1.76 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           12 |     3378 | 2024-08-23 | ENCE              | W   | 0.152      | -            | -                | -                | -         |     3.21 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           11 |     3415 | 2024-08-22 | ECLOT             | L   | 0.144      | -            | -                | -                | -         |    -0.78 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           10 |     3437 | 2024-08-21 | Iberian Soul      | L   | 0.140      | -            | -                | -                | -         |    -2.75 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|            9 |     3470 | 2024-08-21 | UNiTY             | W   | 0.139      | -            | -                | -                | -         |     1.65 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|            8 |     3523 | 2024-08-19 | B8                | L   | 0.127      | -            | -                | -                | -         |    -1.45 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|            7 |     3528 | 2024-08-19 | Iberian Soul      | W   | 0.127      | -            | -                | -                | -         |     1.49 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|            6 |     3536 | 2024-08-19 | NewBALLS          | W   | 0.126      | -            | -                | -                | -         |     0.24 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|            5 |     3574 | 2024-08-17 | FAVBET            | W   | 0.114      | -            | -                | -                | -         |     1.27 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|            4 |     3583 | 2024-08-17 | ex-Enterprise     | W   | 0.113      | -            | -                | -                | -         |     0.96 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|            3 |     3687 | 2024-08-13 | ARCRED            | L   | 0.087      | -            | -                | -                | -         |    -2.20 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|            2 |     3880 | 2024-08-07 | Insilio           | W   | 0.047      | -            | -                | -                | -         |     0.29 | DemQQ, dycha, hades, kRaSnaL, STYKO |
|            1 |     4141 | 2024-07-31 | EYEBALLERS        | W   | 0.000      | -            | -                | -                | -         |     0.00 | DemQQ, dycha, hades, kRaSnaL, STYKO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,766.66)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      0.927 | $5,000.00      | $4,637.31       |
| 2024-11-24 |      0.773 | $4,000.00      | $3,090.61       |
| 2024-10-27 |      0.587 | $10,000.00     | $5,869.19       |
| 2024-10-20 |      0.540 | $2,000.00      | $1,079.16       |
| 2024-09-26 |      0.380 | $1,500.00      | $569.99         |
| 2024-09-08 |      0.260 | $2,000.00      | $520.42         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
