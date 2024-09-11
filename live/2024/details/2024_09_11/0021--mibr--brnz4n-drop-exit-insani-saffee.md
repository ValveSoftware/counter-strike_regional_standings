### Roster Details<br />
Team Name: MIBR<br />
Roster: brnz4n, drop, exit, insani, saffee<br />
Global Rank: [21](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_09_11.md)<br />
Regional Rank: [6]( ../../standings_americas_2024_09_11.md)<br />
<br />
Final Rank Value:  1327.3<br />
<br />
Final Rank Value (1327.3) = Starting Rank Value (1365.5) + Head To Head Adjustments (-38.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.550[<sup>1</sup>](#table2)
- Bounty Collected: 0.573[<sup>2</sup>](#table1)
- Opponent Network: 0.305[<sup>2</sup>](#table1)
- LAN Wins: 0.560[<sup>2</sup>](#table1)

The average of these factors is 0.497<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1365.5
- 400 + ( ( 0.497 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1365.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           83 |       68 | 2024-09-08 | G2             | L   | 1.000      | -            | -                | -                | -         |    -0.92 | brnz4n, drop, exit, insani, saffee |
|           82 |      177 | 2024-09-05 | Spirit         | W   | 1.000      | 0.889        | 1.000 (0.889)    | 0.540 (0.480)    | 1 (1.000) |    30.59 | brnz4n, drop, exit, insani, saffee |
|           81 |      232 | 2024-09-03 | 9z             | W   | 1.000      | 0.889        | 0.362 (0.322)    | 0.507 (0.450)    | 1 (1.000) |    20.75 | brnz4n, drop, exit, insani, saffee |
|           80 |      694 | 2024-08-21 | Hype           | W   | 1.000      | 0.450        | -                | 0.420 (0.189)    | -         |     2.13 | brnz4n, drop, exit, insani, saffee |
|           79 |      697 | 2024-08-21 | Hype           | W   | 1.000      | 0.450        | -                | 0.420 (0.189)    | -         |     2.18 | brnz4n, drop, exit, insani, saffee |
|           78 |      944 | 2024-08-13 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |   -26.56 | brnz4n, drop, exit, insani, saffee |
|           77 |      947 | 2024-08-13 | BESTIA         | W   | 1.000      | 0.450        | 0.108 (0.049)    | 0.817 (0.368)    | -         |     4.47 | brnz4n, drop, exit, insani, saffee |
|           76 |     1080 | 2024-08-09 | paiN           | L   | 0.981      | -            | -                | -                | -         |    -6.36 | brnz4n, drop, exit, insani, saffee |
|           75 |     1095 | 2024-08-09 | 9z             | L   | 0.979      | -            | -                | -                | -         |   -10.14 | brnz4n, drop, exit, insani, saffee |
|           74 |     1163 | 2024-08-07 | HEROIC         | W   | 0.966      | -            | -                | -                | 1 (0.966) |    21.16 | brnz4n, drop, exit, insani, saffee |
|           73 |     1318 | 2024-08-02 | paiN           | L   | 0.935      | -            | -                | -                | -         |    -6.04 | brnz4n, drop, exit, insani, saffee |
|           72 |     1319 | 2024-08-02 | ODDIK          | L   | 0.934      | -            | -                | -                | -         |   -23.50 | brnz4n, drop, exit, insani, saffee |
|           71 |     1334 | 2024-08-02 | Fluxo          | W   | 0.933      | 0.371        | -                | 0.633 (0.219)    | -         |     6.89 | brnz4n, drop, exit, insani, saffee |
|           70 |     1360 | 2024-08-01 | ODDIK          | W   | 0.928      | 0.371        | 0.193 (0.066)    | 0.810 (0.279)    | -         |     5.47 | brnz4n, drop, exit, insani, saffee |
|           69 |     1406 | 2024-07-31 | Sharks         | W   | 0.921      | -            | -                | -                | -         |     4.68 | brnz4n, drop, exit, insani, saffee |
|           68 |     1415 | 2024-07-31 | ODDIK          | W   | 0.920      | 0.450        | 0.193 (0.080)    | 0.810 (0.336)    | -         |     5.89 | brnz4n, drop, exit, insani, saffee |
|           67 |     1420 | 2024-07-31 | ODDIK          | W   | 0.920      | 0.450        | 0.193 (0.080)    | 0.810 (0.335)    | -         |     6.21 | brnz4n, drop, exit, insani, saffee |
|           66 |     1448 | 2024-07-30 | Dusty Roots    | L   | 0.915      | -            | -                | -                | -         |   -27.55 | brnz4n, drop, exit, insani, saffee |
|           65 |     1451 | 2024-07-30 | Dusty Roots    | W   | 0.915      | -            | -                | -                | -         |     1.14 | brnz4n, drop, exit, insani, saffee |
|           64 |     1455 | 2024-07-30 | 9z Academy     | W   | 0.914      | -            | -                | -                | -         |     0.29 | brnz4n, drop, exit, insani, saffee |
|           63 |     1490 | 2024-07-29 | Imperial       | L   | 0.908      | -            | -                | -                | -         |   -20.81 | brnz4n, drop, exit, insani, saffee |
|           62 |     1516 | 2024-07-28 | RED Canids     | W   | 0.903      | -            | -                | -                | -         |     5.57 | brnz4n, drop, exit, insani, saffee |
|           61 |     1523 | 2024-07-28 | Imperial       | L   | 0.901      | -            | -                | -                | -         |   -21.68 | brnz4n, drop, exit, insani, saffee |
|           60 |     1612 | 2024-07-25 | Galorys        | W   | 0.881      | -            | -                | -                | -         |     1.07 | brnz4n, drop, exit, insani, saffee |
|           59 |     1617 | 2024-07-25 | Galorys        | W   | 0.881      | -            | -                | -                | -         |     1.08 | brnz4n, drop, exit, insani, saffee |
|           58 |     1880 | 2024-07-18 | The MongolZ    | L   | 0.832      | -            | -                | -                | -         |    -2.37 | brnz4n, drop, exit, insani, saffee |
|           57 |     1930 | 2024-07-17 | Spirit         | L   | 0.827      | -            | -                | -                | -         |    -0.80 | brnz4n, drop, exit, insani, saffee |
|           56 |     2300 | 2024-06-15 | Complexity     | L   | 0.612      | -            | -                | -                | -         |    -5.54 | brnz4n, drop, exit, insani, saffee |
|           55 |     2325 | 2024-06-14 | Alliance       | W   | 0.607      | -            | -                | -                | 1 (0.607) |     0.92 | brnz4n, drop, exit, insani, saffee |
|           54 |     2342 | 2024-06-14 | ENCE           | L   | 0.605      | -            | -                | -                | -         |   -14.04 | brnz4n, drop, exit, insani, saffee |
|           53 |     2581 | 2024-06-07 | Bounty Hunters | L   | 0.562      | -            | -                | -                | -         |   -16.91 | brnz4n, drop, exit, insani, saffee |
|           52 |     2640 | 2024-06-06 | 9z             | L   | 0.555      | -            | -                | -                | -         |    -7.97 | brnz4n, drop, exit, insani, saffee |
|           51 |     2712 | 2024-06-05 | BESTIA         | W   | 0.548      | 0.450        | -                | 0.817 (0.202)    | -         |     1.67 | brnz4n, drop, exit, insani, saffee |
|           50 |     2764 | 2024-06-04 | Galorys        | W   | 0.542      | -            | -                | -                | -         |     0.48 | brnz4n, drop, exit, insani, saffee |
|           49 |     3090 | 2024-05-22 | paiN           | W   | 0.454      | 0.450        | 0.420 (0.086)    | -                | -         |    10.79 | brnz4n, drop, exit, insani, saffee |
|           48 |     3093 | 2024-05-22 | paiN           | W   | 0.454      | 0.450        | 0.420 (0.086)    | -                | -         |    11.10 | brnz4n, drop, exit, insani, saffee |
|           47 |     3163 | 2024-05-20 | BetBoom        | L   | 0.441      | -            | -                | -                | -         |    -9.86 | brnz4n, drop, exit, insani, saffee |
|           46 |     3176 | 2024-05-20 | BIG            | W   | 0.439      | 0.769        | 0.145 (0.049)    | -                | -         |     4.45 | brnz4n, drop, exit, insani, saffee |
|           45 |     3185 | 2024-05-20 | BetBoom        | L   | 0.438      | -            | -                | -                | -         |   -10.00 | brnz4n, drop, exit, insani, saffee |
|           44 |     3262 | 2024-05-17 | HEROIC         | L   | 0.420      | -            | -                | -                | -         |    -5.55 | brnz4n, drop, exit, insani, saffee |
|           43 |     3296 | 2024-05-16 | Aurora         | W   | 0.414      | 0.769        | 0.282 (0.090)    | -                | 1 (0.414) |     6.01 | brnz4n, drop, exit, insani, saffee |
|           42 |     3352 | 2024-05-15 | HEROIC         | L   | 0.406      | -            | -                | -                | -         |    -5.43 | brnz4n, drop, exit, insani, saffee |
|           41 |     3761 | 2024-04-28 | Aurora         | W   | 0.291      | -            | -                | -                | 1 (0.291) |     4.49 | brnz4n, drop, exit, insani, saffee |
|           40 |     3763 | 2024-04-27 | Apeks          | W   | 0.290      | -            | -                | -                | 1 (0.290) |     0.29 | brnz4n, drop, exit, insani, saffee |
|           39 |     3789 | 2024-04-27 | Rooster        | W   | 0.284      | -            | -                | -                | 1 (0.284) |     0.22 | brnz4n, drop, exit, insani, saffee |
|           38 |     3811 | 2024-04-26 | Rebels         | L   | 0.277      | -            | -                | -                | -         |    -8.16 | brnz4n, drop, exit, insani, saffee |
|           37 |     3814 | 2024-04-25 | KZG            | W   | 0.276      | -            | -                | -                | 1 (0.276) |     0.13 | brnz4n, drop, exit, insani, saffee |
|           36 |     3923 | 2024-04-20 | paiN           | L   | 0.241      | -            | -                | -                | -         |    -1.49 | brnz4n, drop, exit, insani, saffee |
|           35 |     3930 | 2024-04-20 | OG             | W   | 0.240      | -            | -                | -                | 1 (0.240) |     0.64 | brnz4n, drop, exit, insani, saffee |
|           34 |     3946 | 2024-04-19 | paiN           | W   | 0.236      | -            | -                | -                | -         |     6.09 | brnz4n, drop, exit, insani, saffee |
|           33 |     3953 | 2024-04-19 | FURIA          | W   | 0.235      | -            | -                | -                | -         |     6.08 | brnz4n, drop, exit, insani, saffee |
|           32 |     3975 | 2024-04-19 | paiN           | L   | 0.233      | -            | -                | -                | -         |    -1.30 | brnz4n, drop, exit, insani, saffee |
|           31 |     3996 | 2024-04-18 | Imperial       | W   | 0.230      | -            | -                | -                | -         |     1.36 | brnz4n, drop, exit, insani, saffee |
|           30 |     3998 | 2024-04-18 | paiN           | W   | 0.229      | -            | -                | -                | -         |     6.00 | brnz4n, drop, exit, insani, saffee |
|           29 |     4003 | 2024-04-18 | OG             | W   | 0.228      | -            | -                | -                | -         |     0.64 | brnz4n, drop, exit, insani, saffee |
|           28 |     4048 | 2024-04-17 | RED Canids     | W   | 0.222      | -            | -                | -                | -         |     0.65 | brnz4n, drop, exit, insani, saffee |
|           27 |     4054 | 2024-04-17 | Case           | W   | 0.221      | -            | -                | -                | -         |     0.57 | brnz4n, drop, exit, insani, saffee |
|           26 |     4093 | 2024-04-16 | Bounty Hunters | W   | 0.215      | -            | -                | -                | -         |     0.30 | brnz4n, drop, exit, insani, saffee |
|           25 |     4114 | 2024-04-15 | Imperial       | W   | 0.208      | -            | -                | -                | -         |     1.25 | brnz4n, drop, exit, insani, saffee |
|           24 |     4128 | 2024-04-14 | Galorys        | W   | 0.201      | -            | -                | -                | -         |     0.17 | brnz4n, drop, exit, insani, saffee |
|           23 |     4142 | 2024-04-13 | Case           | W   | 0.194      | -            | -                | -                | -         |     0.50 | brnz4n, drop, exit, insani, saffee |
|           22 |     4172 | 2024-04-11 | paiN           | W   | 0.182      | -            | -                | -                | -         |     4.86 | brnz4n, drop, exit, insani, saffee |
|           21 |     4214 | 2024-04-10 | Galorys        | W   | 0.175      | -            | -                | -                | -         |     0.15 | brnz4n, drop, exit, insani, saffee |
|           20 |     4215 | 2024-04-10 | Galorys        | W   | 0.175      | -            | -                | -                | -         |     0.15 | brnz4n, drop, exit, insani, saffee |
|           19 |     4232 | 2024-04-10 | Imperial       | W   | 0.173      | -            | -                | -                | -         |     1.06 | brnz4n, drop, exit, insani, saffee |
|           18 |     4264 | 2024-04-09 | adalYamigos    | W   | 0.168      | -            | -                | -                | -         |     0.05 | brnz4n, drop, exit, insani, saffee |
|           17 |     4268 | 2024-04-09 | adalYamigos    | W   | 0.168      | -            | -                | -                | -         |     0.05 | brnz4n, drop, exit, insani, saffee |
|           16 |     4273 | 2024-04-09 | RED Canids     | W   | 0.168      | -            | -                | -                | -         |     0.50 | brnz4n, drop, exit, insani, saffee |
|           15 |     4305 | 2024-04-08 | W7M            | W   | 0.162      | -            | -                | -                | -         |     0.19 | brnz4n, drop, exit, insani, saffee |
|           14 |     4339 | 2024-04-07 | paiN           | W   | 0.156      | -            | -                | -                | -         |     4.22 | brnz4n, drop, exit, insani, saffee |
|           13 |     4357 | 2024-04-06 | Bounty Hunters | W   | 0.149      | -            | -                | -                | -         |     0.23 | brnz4n, drop, exit, insani, saffee |
|           12 |     4373 | 2024-04-05 | Fluxo          | W   | 0.142      | -            | -                | -                | -         |     0.12 | brnz4n, drop, exit, insani, saffee |
|           11 |     4374 | 2024-04-05 | Fluxo          | L   | 0.142      | -            | -                | -                | -         |    -4.34 | brnz4n, drop, exit, insani, saffee |
|           10 |     4377 | 2024-04-05 | ODDIK          | W   | 0.141      | -            | -                | -                | -         |     0.93 | brnz4n, drop, exit, insani, saffee |
|            9 |     4400 | 2024-04-04 | Solid          | W   | 0.135      | -            | -                | -                | -         |     0.21 | brnz4n, drop, exit, insani, saffee |
|            8 |     4404 | 2024-04-04 | Solid          | W   | 0.135      | -            | -                | -                | -         |     0.21 | brnz4n, drop, exit, insani, saffee |
|            7 |     4435 | 2024-04-03 | Fluxo          | W   | 0.129      | -            | -                | -                | -         |     0.11 | brnz4n, drop, exit, insani, saffee |
|            6 |     4485 | 2024-04-02 | Fluxo          | W   | 0.122      | -            | -                | -                | -         |     0.10 | brnz4n, drop, exit, insani, saffee |
|            5 |     4488 | 2024-04-02 | Sharks         | W   | 0.121      | -            | -                | -                | -         |     0.10 | brnz4n, drop, exit, insani, saffee |
|            4 |     4574 | 2024-03-27 | Case           | W   | 0.082      | -            | -                | -                | -         |     0.23 | brnz4n, drop, exit, insani, saffee |
|            3 |     4580 | 2024-03-27 | Case           | W   | 0.082      | -            | -                | -                | -         |     0.23 | brnz4n, drop, exit, insani, saffee |
|            2 |     4620 | 2024-03-26 | ODDIK          | W   | 0.075      | -            | -                | -                | -         |     0.53 | brnz4n, drop, exit, insani, saffee |
|            1 |     4622 | 2024-03-26 | ODDIK          | W   | 0.075      | -            | -                | -                | -         |     0.53 | brnz4n, drop, exit, insani, saffee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($44,888.08)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-09 |      0.981 | $4,500.00      | $4,414.37       |
| 2024-08-02 |      0.935 | $4,000.00      | $3,740.09       |
| 2024-07-21 |      0.854 | $10,000.00     | $8,542.80       |
| 2024-06-16 |      0.619 | $3,000.00      | $1,858.48       |
| 2024-06-09 |      0.575 | $3,000.00      | $1,724.63       |
| 2024-04-28 |      0.291 | $50,000.00     | $14,573.07      |
| 2024-04-20 |      0.242 | $20,000.00     | $4,832.36       |
| 2024-04-15 |      0.208 | $25,000.00     | $5,202.28       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
