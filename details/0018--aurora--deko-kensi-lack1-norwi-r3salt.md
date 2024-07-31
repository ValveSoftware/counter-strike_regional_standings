### Roster Details<br />
Team Name: Aurora<br />
Roster: deko, KENSI, Lack1, Norwi, r3salt<br />
Global Rank: [18](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [14]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1445.3<br />
<br />
Final Rank Value (1445.3) = Starting Rank Value (1700.2) + Head To Head Adjustments (-254.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.733[<sup>1</sup>](#table2)
- Bounty Collected: 0.508[<sup>2</sup>](#table1)
- Opponent Network: 0.277[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.630<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1700.2
- 400 + ( ( 0.630 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1700.2


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
|           85 |      130 | 2024-07-28 | 3DMAX              | L   | 1.000      | -            | -                | -                | -         |   -18.67 | deko, KENSI, Lack1, Norwi, r3salt     |
|           84 |      183 | 2024-07-26 | The MongolZ        | L   | 1.000      | -            | -                | -                | -         |    -6.50 | deko, KENSI, Lack1, Norwi, r3salt     |
|           83 |      187 | 2024-07-26 | BLEED              | W   | 1.000      | 0.650        | 0.128 (0.084)    | 0.512 (0.333)    | 1 (1.000) |    10.10 | deko, KENSI, Lack1, Norwi, r3salt     |
|           82 |      213 | 2024-07-25 | True Rippers       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.53 | deko, KENSI, Lack1, Norwi, r3salt     |
|           81 |      225 | 2024-07-25 | ENCE               | W   | 1.000      | 0.650        | 0.175 (0.114)    | 0.404 (0.263)    | 1 (1.000) |    12.40 | deko, KENSI, Lack1, Norwi, r3salt     |
|           80 |      260 | 2024-07-24 | PARIVISION         | W   | 1.000      | 0.650        | -                | 0.452 (0.294)    | 1 (1.000) |     3.24 | deko, KENSI, Lack1, Norwi, r3salt     |
|           79 |      449 | 2024-07-18 | B8                 | W   | 1.000      | 0.500        | 0.168 (0.084)    | 0.879 (0.440)    | -         |     5.72 | deko, KENSI, Lack1, Norwi, r3salt     |
|           78 |      578 | 2024-07-16 | PERA               | W   | 1.000      | 0.500        | -                | 0.452 (0.226)    | -         |     2.47 | deko, KENSI, Lack1, Norwi, r3salt     |
|           77 |      861 | 2024-06-16 | Complexity         | L   | 0.897      | -            | -                | -                | -         |    -8.19 | deko, KENSI, Lack1, Norwi, r3salt     |
|           76 |      929 | 2024-06-14 | The MongolZ        | W   | 0.885      | 0.500        | 1.000 (0.442)    | 0.719 (0.318)    | 1 (0.885) |    25.91 | deko, KENSI, Lack1, Norwi, r3salt     |
|           75 |      939 | 2024-06-14 | Falcons            | W   | 0.884      | 0.500        | 0.208 (0.092)    | -                | 1 (0.884) |    14.92 | deko, KENSI, Lack1, Norwi, r3salt     |
|           74 |     1038 | 2024-06-10 | 9 Pandas           | W   | 0.858      | -            | -                | -                | -         |     3.70 | deko, KENSI, Lack1, Norwi, r3salt     |
|           73 |     1042 | 2024-06-10 | Monte              | W   | 0.858      | -            | -                | -                | -         |     2.94 | deko, KENSI, Lack1, Norwi, r3salt     |
|           72 |     1046 | 2024-06-10 | SAW                | L   | 0.857      | -            | -                | -                | -         |   -21.41 | deko, KENSI, Lack1, Norwi, r3salt     |
|           71 |     1074 | 2024-06-09 | Monte              | L   | 0.852      | -            | -                | -                | -         |   -24.24 | deko, KENSI, Lack1, Norwi, r3salt     |
|           70 |     1081 | 2024-06-09 | PARIVISION         | W   | 0.852      | -            | -                | -                | -         |     3.36 | deko, KENSI, Lack1, Norwi, r3salt     |
|           69 |     1090 | 2024-06-09 | RUSH B             | L   | 0.851      | -            | -                | -                | -         |   -25.72 | deko, KENSI, Lack1, Norwi, r3salt     |
|           68 |     1096 | 2024-06-09 | 3DMAX              | L   | 0.851      | -            | -                | -                | -         |   -13.20 | deko, KENSI, Lack1, Norwi, r3salt     |
|           67 |     1103 | 2024-06-09 | SINNERS            | L   | 0.851      | -            | -                | -                | -         |   -25.26 | deko, KENSI, Lack1, Norwi, r3salt     |
|           66 |     1190 | 2024-06-07 | Sangal             | L   | 0.840      | -            | -                | -                | -         |   -23.06 | deko, KENSI, Lack1, Norwi, r3salt     |
|           65 |     1207 | 2024-06-07 | Verdant            | W   | 0.838      | -            | -                | -                | -         |     0.84 | deko, KENSI, Lack1, Norwi, r3salt     |
|           64 |     1209 | 2024-06-07 | PERA               | W   | 0.838      | -            | -                | -                | -         |     1.05 | deko, KENSI, Lack1, Norwi, r3salt     |
|           63 |     1247 | 2024-06-06 | RUSH B             | W   | 0.833      | -            | -                | -                | -         |     0.63 | deko, KENSI, Lack1, Norwi, r3salt     |
|           62 |     1312 | 2024-06-05 | PARIVISION         | W   | 0.826      | 0.500        | -                | 0.452 (0.187)    | -         |     2.02 | deko, KENSI, Lack1, Norwi, r3salt     |
|           61 |     1363 | 2024-06-04 | 3DMAX              | L   | 0.820      | -            | -                | -                | -         |   -12.70 | deko, KENSI, Lack1, Norwi, r3salt     |
|           60 |     1430 | 2024-06-02 | BLEED              | L   | 0.803      | -            | -                | -                | -         |   -18.03 | deko, KENSI, Lack1, Norwi, r3salt     |
|           59 |     1455 | 2024-06-01 | Lynn Vision        | W   | 0.798      | 0.500        | 0.080 (0.032)    | -                | 1 (0.798) |     1.14 | deko, KENSI, Lack1, Norwi, r3salt     |
|           58 |     1464 | 2024-06-01 | Chinggis Warriors  | W   | 0.797      | -            | -                | -                | 1 (0.797) |     0.22 | deko, KENSI, Lack1, Norwi, r3salt     |
|           57 |     1539 | 2024-05-29 | The MongolZ        | L   | 0.778      | -            | -                | -                | -         |    -3.11 | deko, KENSI, Lack1, Norwi, r3salt     |
|           56 |     1562 | 2024-05-28 | Lynn Vision        | W   | 0.770      | -            | -                | -                | 1 (0.770) |     0.97 | deko, KENSI, Lack1, Norwi, r3salt     |
|           55 |     1733 | 2024-05-21 | Astralis           | L   | 0.725      | -            | -                | -                | -         |    -6.41 | deko, KENSI, Lack1, Norwi, r3salt     |
|           54 |     1863 | 2024-05-17 | SAW                | W   | 0.698      | 0.769        | 0.108 (0.058)    | 0.545 (0.292)    | -         |     3.01 | deko, KENSI, Lack1, Norwi, r3salt     |
|           53 |     1878 | 2024-05-16 | PARIVISION         | W   | 0.694      | 0.769        | -                | 0.452 (0.241)    | -         |     1.35 | deko, KENSI, Lack1, Norwi, r3salt     |
|           52 |     1887 | 2024-05-16 | MIBR               | L   | 0.693      | -            | -                | -                | -         |   -13.93 | deko, KENSI, Lack1, Norwi, r3salt     |
|           51 |     1900 | 2024-05-16 | SAW                | L   | 0.691      | -            | -                | -                | -         |   -19.25 | deko, KENSI, Lack1, Norwi, r3salt     |
|           50 |     1951 | 2024-05-15 | Spirit             | L   | 0.684      | -            | -                | -                | -         |    -3.01 | deko, KENSI, Lack1, Norwi, r3salt     |
|           49 |     2094 | 2024-05-10 | MOUZ NXT           | L   | 0.653      | -            | -                | -                | -         |   -19.74 | deko, KENSI, Lack1, Norwi, r3salt     |
|           48 |     2352 | 2024-04-28 | MIBR               | L   | 0.571      | -            | -                | -                | -         |   -12.84 | deko, KENSI, Lack1, Norwi, r3salt     |
|           47 |     2353 | 2024-04-28 | Rebels             | W   | 0.570      | -            | -                | -                | 1 (0.570) |     0.57 | deko, KENSI, Lack1, Norwi, r3salt     |
|           46 |     2379 | 2024-04-27 | Party Astronauts   | W   | 0.563      | -            | -                | -                | -         |     0.41 | deko, KENSI, Lack1, Norwi, r3salt     |
|           45 |     2403 | 2024-04-25 | Apeks              | L   | 0.556      | -            | -                | -                | -         |   -17.10 | deko, KENSI, Lack1, Norwi, r3salt     |
|           44 |     2407 | 2024-04-25 | Party Astronauts   | W   | 0.555      | -            | -                | -                | -         |     0.36 | deko, KENSI, Lack1, Norwi, r3salt     |
|           43 |     2613 | 2024-04-18 | RUBY               | L   | 0.506      | -            | -                | -                | -         |   -15.62 | deko, KENSI, Lack1, Norwi, r3salt     |
|           42 |     2723 | 2024-04-14 | OG                 | W   | 0.479      | 0.684        | 0.144 (0.047)    | -                | -         |     0.55 | deko, KENSI, Lack1, Norwi, r3salt     |
|           41 |     2737 | 2024-04-13 | BetBoom            | W   | 0.472      | 0.684        | 0.259 (0.084)    | 0.554 (0.179)    | -         |     3.34 | deko, KENSI, Lack1, Norwi, r3salt     |
|           40 |     2748 | 2024-04-12 | AMKAL              | W   | 0.466      | -            | -                | -                | -         |     0.81 | deko, KENSI, Lack1, Norwi, r3salt     |
|           39 |     2771 | 2024-04-11 | BetBoom            | W   | 0.460      | -            | -                | -                | -         |     3.35 | deko, KENSI, Lack1, Norwi, r3salt     |
|           38 |     2778 | 2024-04-11 | Apeks              | W   | 0.459      | -            | -                | -                | -         |     0.28 | deko, KENSI, Lack1, Norwi, r3salt     |
|           37 |     2783 | 2024-04-11 | FORZE              | W   | 0.458      | -            | -                | -                | -         |     0.29 | deko, KENSI, Lack1, Norwi, r3salt     |
|           36 |     2812 | 2024-04-10 | PARIVISION         | W   | 0.453      | -            | -                | -                | -         |     0.57 | deko, KENSI, Lack1, Norwi, r3salt     |
|           35 |     2825 | 2024-04-10 | BetBoom            | L   | 0.452      | -            | -                | -                | -         |   -11.13 | deko, KENSI, Lack1, Norwi, r3salt     |
|           34 |     2872 | 2024-04-09 | KOI                | L   | 0.446      | -            | -                | -                | -         |   -13.54 | deko, KENSI, Lack1, Norwi, r3salt     |
|           33 |     2882 | 2024-04-09 | 1WIN               | W   | 0.445      | -            | -                | -                | -         |     0.20 | deko, KENSI, Lack1, Norwi, r3salt     |
|           32 |     2889 | 2024-04-09 | 9 Pandas           | W   | 0.444      | -            | -                | -                | -         |     0.34 | deko, KENSI, Lack1, Norwi, r3salt     |
|           31 |     2900 | 2024-04-08 | Metizport          | W   | 0.440      | -            | -                | -                | -         |     0.25 | deko, KENSI, Lack1, Norwi, r3salt     |
|           30 |     2904 | 2024-04-08 | OG                 | W   | 0.439      | 0.684        | 0.144 (0.043)    | -                | -         |     0.35 | deko, KENSI, Lack1, Norwi, r3salt     |
|           29 |     2917 | 2024-04-08 | 1WIN               | L   | 0.438      | -            | -                | -                | -         |   -13.63 | deko, KENSI, Lack1, Norwi, r3salt     |
|           28 |     3006 | 2024-04-04 | Ninjas in Pyjamas  | W   | 0.413      | -            | -                | -                | -         |     5.61 | deko, KENSI, Lack1, Norwi, r3salt     |
|           27 |     3047 | 2024-04-03 | Ninjas in Pyjamas  | W   | 0.406      | -            | -                | -                | -         |     5.71 | deko, KENSI, Lack1, Norwi, r3salt     |
|           26 |     3085 | 2024-04-02 | Apeks              | W   | 0.400      | -            | -                | -                | -         |     0.20 | deko, KENSI, Lack1, Norwi, r3salt     |
|           25 |     3093 | 2024-04-02 | Metizport          | W   | 0.398      | -            | -                | -                | -         |     0.19 | deko, KENSI, Lack1, Norwi, r3salt     |
|           24 |     3105 | 2024-04-01 | SINNERS            | L   | 0.393      | -            | -                | -                | -         |   -12.06 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           23 |     3145 | 2024-03-28 | brazylijski luz    | W   | 0.366      | -            | -                | -                | -         |     0.09 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           22 |     3176 | 2024-03-27 | Metizport          | W   | 0.360      | -            | -                | -                | -         |     0.16 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           21 |     3183 | 2024-03-27 | AURA               | W   | 0.359      | -            | -                | -                | -         |     0.01 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           20 |     3217 | 2024-03-25 | Rebels             | W   | 0.346      | -            | -                | -                | -         |     0.23 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           19 |     3233 | 2024-03-23 | ALTERNATE aTTaX    | W   | 0.333      | -            | -                | -                | -         |     0.21 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           18 |     3248 | 2024-03-22 | ex-Sprout          | W   | 0.326      | -            | -                | -                | -         |     0.01 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           17 |     3371 | 2024-03-16 | Gods Reign         | W   | 0.285      | -            | -                | -                | -         |     0.06 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           16 |     3393 | 2024-03-15 | Gods Reign         | W   | 0.277      | -            | -                | -                | -         |     0.06 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           15 |     3427 | 2024-03-14 | Bad News Kangaroos | W   | 0.270      | -            | -                | -                | -         |     0.05 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           14 |     3685 | 2024-03-04 | Young Ninjas       | L   | 0.206      | -            | -                | -                | -         |    -6.44 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           13 |     3730 | 2024-03-02 | Rebels             | W   | 0.193      | -            | -                | -                | -         |     0.13 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           12 |     3749 | 2024-03-01 | FORZE              | W   | 0.187      | -            | -                | -                | -         |     0.08 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           11 |     3757 | 2024-03-01 | 9 Pandas           | W   | 0.185      | -            | -                | -                | -         |     0.13 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           10 |     3762 | 2024-02-29 | KOI                | W   | 0.180      | -            | -                | -                | -         |     0.21 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            9 |     3767 | 2024-02-29 | Spirit Academy     | W   | 0.179      | -            | -                | -                | -         |     0.01 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            8 |     3772 | 2024-02-29 | HAVU               | W   | 0.177      | -            | -                | -                | -         |     0.02 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            7 |     3775 | 2024-02-28 | kONO               | W   | 0.173      | -            | -                | -                | -         |     0.04 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            6 |     3782 | 2024-02-28 | FORZE              | L   | 0.172      | -            | -                | -                | -         |    -5.36 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            5 |     4002 | 2024-02-18 | Monte              | L   | 0.107      | -            | -                | -                | -         |    -3.30 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            4 |     4012 | 2024-02-18 | B8                 | W   | 0.105      | -            | -                | -                | -         |     0.11 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            3 |     4029 | 2024-02-17 | kONO               | W   | 0.099      | -            | -                | -                | -         |     0.02 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            2 |     4033 | 2024-02-17 | Monte              | L   | 0.099      | -            | -                | -                | -         |    -3.04 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            1 |     4036 | 2024-02-17 | kONO               | W   | 0.098      | -            | -                | -                | -         |     0.02 | BELCHONOKK, deko, KENSI, Lack1, Norwi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($142,386.99)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.43) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-28 |      1.000 | $35,000.00     | $35,000.00      |
| 2024-06-16 |      0.899 | $10,000.00     | $8,985.52       |
| 2024-06-09 |      0.853 | $8,500.00      | $7,251.29       |
| 2024-06-02 |      0.805 | $15,000.00     | $12,073.38      |
| 2024-05-23 |      0.739 | $12,500.00     | $9,240.55       |
| 2024-04-28 |      0.571 | $20,000.00     | $11,410.42      |
| 2024-04-14 |      0.479 | $105,000.00    | $50,316.86      |
| 2024-03-16 |      0.285 | $28,500.00     | $8,108.97       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
