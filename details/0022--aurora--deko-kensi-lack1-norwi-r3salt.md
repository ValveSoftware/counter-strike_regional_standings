### Roster Details<br />
Team Name: Aurora<br />
Roster: deko, KENSI, Lack1, Norwi, r3salt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [22](../standings_global.md)<br />
Regional Rank: [15]( ../standings_europe.md)<br />
Final Rank Value:  1375.7<br />
<br />
Final Rank Value (1375.7) = Starting Rank Value (1611.9) + Head To Head Adjustments (-236.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.728[<sup>1</sup>](#table2)
- Bounty Collected: 0.512[<sup>2</sup>](#table1)
- Opponent Network: 0.265[<sup>2</sup>](#table1)
- LAN Wins: 0.890[<sup>2</sup>](#table1)

The average of these factors is 0.599<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1611.9
- 400 + ( ( 0.599 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1611.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           80 |       18 | 2024-07-24 | PARIVISION         | W   | 1.000      | 0.650        | -                | 0.429 (0.279)    | 1 (1.000) |     3.81 | deko, KENSI, Lack1, Norwi, r3salt     |
|           79 |      207 | 2024-07-18 | B8                 | W   | 1.000      | 0.500        | 0.206 (0.103)    | 0.933 (0.466)    | -         |     7.46 | deko, KENSI, Lack1, Norwi, r3salt     |
|           78 |      336 | 2024-07-16 | PERA               | W   | 1.000      | 0.500        | 0.061 (0.030)    | 0.462 (0.231)    | -         |     3.85 | deko, KENSI, Lack1, Norwi, r3salt     |
|           77 |      619 | 2024-06-16 | Complexity         | L   | 0.944      | -            | -                | -                | -         |    -5.46 | deko, KENSI, Lack1, Norwi, r3salt     |
|           76 |      687 | 2024-06-14 | The MongolZ        | W   | 0.932      | 0.500        | 1.000 (0.466)    | 0.725 (0.338)    | 1 (0.932) |    27.70 | deko, KENSI, Lack1, Norwi, r3salt     |
|           75 |      697 | 2024-06-14 | Falcons            | W   | 0.931      | 0.500        | 0.276 (0.128)    | -                | 1 (0.931) |    18.67 | deko, KENSI, Lack1, Norwi, r3salt     |
|           74 |      796 | 2024-06-10 | 9 Pandas           | W   | 0.905      | -            | -                | -                | -         |     5.86 | deko, KENSI, Lack1, Norwi, r3salt     |
|           73 |      800 | 2024-06-10 | Monte              | W   | 0.905      | -            | -                | -                | -         |     3.92 | deko, KENSI, Lack1, Norwi, r3salt     |
|           72 |      804 | 2024-06-10 | SAW                | L   | 0.905      | -            | -                | -                | -         |   -20.18 | deko, KENSI, Lack1, Norwi, r3salt     |
|           71 |      832 | 2024-06-09 | Monte              | L   | 0.900      | -            | -                | -                | -         |   -24.82 | deko, KENSI, Lack1, Norwi, r3salt     |
|           70 |      839 | 2024-06-09 | PARIVISION         | W   | 0.899      | -            | -                | -                | -         |     4.58 | deko, KENSI, Lack1, Norwi, r3salt     |
|           69 |      848 | 2024-06-09 | RUSH B             | L   | 0.899      | -            | -                | -                | -         |   -26.52 | deko, KENSI, Lack1, Norwi, r3salt     |
|           68 |      854 | 2024-06-09 | 3DMAX              | L   | 0.898      | -            | -                | -                | -         |   -21.61 | deko, KENSI, Lack1, Norwi, r3salt     |
|           67 |      861 | 2024-06-09 | SINNERS            | L   | 0.898      | -            | -                | -                | -         |   -25.79 | deko, KENSI, Lack1, Norwi, r3salt     |
|           66 |      948 | 2024-06-07 | Sangal             | L   | 0.887      | -            | -                | -                | -         |   -23.29 | deko, KENSI, Lack1, Norwi, r3salt     |
|           65 |      965 | 2024-06-07 | Verdant            | W   | 0.886      | -            | -                | -                | -         |     1.38 | deko, KENSI, Lack1, Norwi, r3salt     |
|           64 |      967 | 2024-06-07 | PERA               | W   | 0.885      | -            | -                | -                | -         |     1.82 | deko, KENSI, Lack1, Norwi, r3salt     |
|           63 |     1005 | 2024-06-06 | RUSH B             | W   | 0.880      | -            | -                | -                | -         |     1.00 | deko, KENSI, Lack1, Norwi, r3salt     |
|           62 |     1070 | 2024-06-05 | PARIVISION         | W   | 0.874      | 0.500        | -                | 0.429 (0.188)    | -         |     2.66 | deko, KENSI, Lack1, Norwi, r3salt     |
|           61 |     1121 | 2024-06-04 | 3DMAX              | L   | 0.867      | -            | -                | -                | -         |   -21.95 | deko, KENSI, Lack1, Norwi, r3salt     |
|           60 |     1188 | 2024-06-02 | BLEED              | L   | 0.850      | -            | -                | -                | -         |   -20.89 | deko, KENSI, Lack1, Norwi, r3salt     |
|           59 |     1213 | 2024-06-01 | Lynn Vision        | W   | 0.845      | 0.500        | 0.103 (0.043)    | -                | 1 (0.845) |     2.08 | deko, KENSI, Lack1, Norwi, r3salt     |
|           58 |     1222 | 2024-06-01 | Chinggis Warriors  | W   | 0.844      | -            | -                | -                | 1 (0.844) |     0.37 | deko, KENSI, Lack1, Norwi, r3salt     |
|           57 |     1297 | 2024-05-29 | The MongolZ        | L   | 0.825      | -            | -                | -                | -         |    -2.90 | deko, KENSI, Lack1, Norwi, r3salt     |
|           56 |     1320 | 2024-05-28 | Lynn Vision        | W   | 0.817      | 0.500        | 0.103 (0.042)    | -                | 1 (0.817) |     1.81 | deko, KENSI, Lack1, Norwi, r3salt     |
|           55 |     1491 | 2024-05-21 | Astralis           | L   | 0.772      | -            | -                | -                | -         |    -4.40 | deko, KENSI, Lack1, Norwi, r3salt     |
|           54 |     1621 | 2024-05-17 | SAW                | W   | 0.745      | 0.769        | 0.121 (0.069)    | 0.500 (0.286)    | -         |     4.56 | deko, KENSI, Lack1, Norwi, r3salt     |
|           53 |     1636 | 2024-05-16 | PARIVISION         | W   | 0.741      | 0.769        | -                | 0.429 (0.245)    | -         |     1.74 | deko, KENSI, Lack1, Norwi, r3salt     |
|           52 |     1645 | 2024-05-16 | MIBR               | L   | 0.740      | -            | -                | -                | -         |   -11.48 | deko, KENSI, Lack1, Norwi, r3salt     |
|           51 |     1658 | 2024-05-16 | SAW                | L   | 0.738      | -            | -                | -                | -         |   -19.30 | deko, KENSI, Lack1, Norwi, r3salt     |
|           50 |     1709 | 2024-05-15 | Spirit             | L   | 0.731      | -            | -                | -                | -         |    -2.20 | deko, KENSI, Lack1, Norwi, r3salt     |
|           49 |     1852 | 2024-05-10 | MOUZ NXT           | L   | 0.701      | -            | -                | -                | -         |   -20.65 | deko, KENSI, Lack1, Norwi, r3salt     |
|           48 |     2110 | 2024-04-28 | MIBR               | L   | 0.618      | -            | -                | -                | -         |   -11.14 | deko, KENSI, Lack1, Norwi, r3salt     |
|           47 |     2111 | 2024-04-28 | Rebels             | W   | 0.617      | 0.500        | -                | 0.661 (0.204)    | 1 (0.617) |     1.06 | deko, KENSI, Lack1, Norwi, r3salt     |
|           46 |     2137 | 2024-04-27 | Party Astronauts   | W   | 0.611      | 0.500        | -                | 0.591 (0.181)    | 1 (0.611) |     0.73 | deko, KENSI, Lack1, Norwi, r3salt     |
|           45 |     2161 | 2024-04-25 | Apeks              | L   | 0.603      | -            | -                | -                | -         |   -18.18 | deko, KENSI, Lack1, Norwi, r3salt     |
|           44 |     2165 | 2024-04-25 | Party Astronauts   | W   | 0.602      | -            | -                | -                | 1 (0.602) |     0.65 | deko, KENSI, Lack1, Norwi, r3salt     |
|           43 |     2371 | 2024-04-18 | RUBY               | L   | 0.553      | -            | -                | -                | -         |   -16.86 | deko, KENSI, Lack1, Norwi, r3salt     |
|           42 |     2481 | 2024-04-14 | OG                 | W   | 0.526      | 0.684        | 0.170 (0.061)    | -                | -         |     1.12 | deko, KENSI, Lack1, Norwi, r3salt     |
|           41 |     2495 | 2024-04-13 | BetBoom            | W   | 0.520      | 0.684        | 0.333 (0.118)    | 0.642 (0.228)    | -         |     6.08 | deko, KENSI, Lack1, Norwi, r3salt     |
|           40 |     2506 | 2024-04-12 | AMKAL              | W   | 0.514      | -            | -                | -                | -         |     1.09 | deko, KENSI, Lack1, Norwi, r3salt     |
|           39 |     2529 | 2024-04-11 | BetBoom            | W   | 0.507      | -            | -                | -                | -         |     6.21 | deko, KENSI, Lack1, Norwi, r3salt     |
|           38 |     2536 | 2024-04-11 | Apeks              | W   | 0.506      | -            | -                | -                | -         |     0.59 | deko, KENSI, Lack1, Norwi, r3salt     |
|           37 |     2541 | 2024-04-11 | FORZE              | W   | 0.506      | -            | -                | -                | -         |     0.60 | deko, KENSI, Lack1, Norwi, r3salt     |
|           36 |     2570 | 2024-04-10 | PARIVISION         | W   | 0.501      | -            | -                | -                | -         |     0.76 | deko, KENSI, Lack1, Norwi, r3salt     |
|           35 |     2583 | 2024-04-10 | BetBoom            | L   | 0.499      | -            | -                | -                | -         |    -9.77 | deko, KENSI, Lack1, Norwi, r3salt     |
|           34 |     2630 | 2024-04-09 | KOI                | L   | 0.494      | -            | -                | -                | -         |   -14.60 | deko, KENSI, Lack1, Norwi, r3salt     |
|           33 |     2640 | 2024-04-09 | 1WIN               | W   | 0.492      | -            | -                | -                | -         |     0.37 | deko, KENSI, Lack1, Norwi, r3salt     |
|           32 |     2647 | 2024-04-09 | 9 Pandas           | W   | 0.492      | -            | -                | -                | -         |     0.70 | deko, KENSI, Lack1, Norwi, r3salt     |
|           31 |     2658 | 2024-04-08 | Metizport          | W   | 0.487      | -            | -                | -                | -         |     0.51 | deko, KENSI, Lack1, Norwi, r3salt     |
|           30 |     2662 | 2024-04-08 | OG                 | W   | 0.487      | 0.684        | 0.170 (0.056)    | -                | -         |     0.75 | deko, KENSI, Lack1, Norwi, r3salt     |
|           29 |     2675 | 2024-04-08 | 1WIN               | L   | 0.485      | -            | -                | -                | -         |   -14.97 | deko, KENSI, Lack1, Norwi, r3salt     |
|           28 |     2764 | 2024-04-04 | Ninjas in Pyjamas  | W   | 0.460      | -            | -                | -                | -         |     9.27 | deko, KENSI, Lack1, Norwi, r3salt     |
|           27 |     2805 | 2024-04-03 | Ninjas in Pyjamas  | W   | 0.453      | -            | -                | -                | -         |     9.48 | deko, KENSI, Lack1, Norwi, r3salt     |
|           26 |     2843 | 2024-04-02 | Apeks              | W   | 0.447      | -            | -                | -                | -         |     0.44 | deko, KENSI, Lack1, Norwi, r3salt     |
|           25 |     2851 | 2024-04-02 | Metizport          | W   | 0.446      | -            | -                | -                | -         |     0.39 | deko, KENSI, Lack1, Norwi, r3salt     |
|           24 |     2863 | 2024-04-01 | SINNERS            | L   | 0.441      | -            | -                | -                | -         |   -13.25 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           23 |     2903 | 2024-03-28 | brazylijski luz    | W   | 0.414      | -            | -                | -                | -         |     0.17 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           22 |     2934 | 2024-03-27 | Metizport          | W   | 0.408      | -            | -                | -                | -         |     0.34 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           21 |     2941 | 2024-03-27 | AURA               | W   | 0.407      | -            | -                | -                | -         |     0.03 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           20 |     2975 | 2024-03-25 | Rebels             | W   | 0.394      | -            | -                | -                | -         |     0.49 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           19 |     2991 | 2024-03-23 | ALTERNATE aTTaX    | W   | 0.380      | -            | -                | -                | -         |     0.42 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           18 |     3006 | 2024-03-22 | ex-Sprout          | W   | 0.373      | -            | -                | -                | -         |     0.03 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           17 |     3129 | 2024-03-16 | Gods Reign         | W   | 0.332      | -            | -                | -                | 1 (0.332) |     0.13 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           16 |     3151 | 2024-03-15 | Gods Reign         | W   | 0.324      | -            | -                | -                | -         |     0.12 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           15 |     3185 | 2024-03-14 | Bad News Kangaroos | W   | 0.317      | -            | -                | -                | -         |     0.11 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           14 |     3443 | 2024-03-04 | Young Ninjas       | L   | 0.253      | -            | -                | -                | -         |    -7.88 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           13 |     3488 | 2024-03-02 | Rebels             | W   | 0.240      | -            | -                | -                | -         |     0.30 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           12 |     3507 | 2024-03-01 | FORZE              | W   | 0.234      | -            | -                | -                | -         |     0.18 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           11 |     3515 | 2024-03-01 | 9 Pandas           | W   | 0.233      | -            | -                | -                | -         |     0.32 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           10 |     3520 | 2024-02-29 | KOI                | W   | 0.227      | -            | -                | -                | -         |     0.46 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            9 |     3525 | 2024-02-29 | Spirit Academy     | W   | 0.226      | -            | -                | -                | -         |     0.02 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            8 |     3530 | 2024-02-29 | HAVU               | W   | 0.225      | -            | -                | -                | -         |     0.05 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            7 |     3533 | 2024-02-28 | kONO               | W   | 0.221      | -            | -                | -                | -         |     0.09 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            6 |     3540 | 2024-02-28 | FORZE              | L   | 0.219      | -            | -                | -                | -         |    -6.76 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            5 |     3760 | 2024-02-18 | Monte              | L   | 0.154      | -            | -                | -                | -         |    -4.64 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            4 |     3770 | 2024-02-18 | B8                 | W   | 0.152      | -            | -                | -                | -         |     0.26 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            3 |     3787 | 2024-02-17 | kONO               | W   | 0.146      | -            | -                | -                | -         |     0.06 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            2 |     3791 | 2024-02-17 | Monte              | L   | 0.146      | -            | -                | -                | -         |    -4.40 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            1 |     3794 | 2024-02-17 | kONO               | W   | 0.146      | -            | -                | -                | -         |     0.06 | BELCHONOKK, deko, KENSI, Lack1, Norwi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($116,820.88)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.42) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.946 | $10,000.00     | $9,458.39       |
| 2024-06-09 |      0.900 | $8,500.00      | $7,653.23       |
| 2024-06-02 |      0.852 | $15,000.00     | $12,782.70      |
| 2024-05-23 |      0.787 | $12,500.00     | $9,831.65       |
| 2024-04-28 |      0.618 | $20,000.00     | $12,356.17      |
| 2024-04-14 |      0.526 | $105,000.00    | $55,282.06      |
| 2024-03-16 |      0.332 | $28,500.00     | $9,456.67       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
