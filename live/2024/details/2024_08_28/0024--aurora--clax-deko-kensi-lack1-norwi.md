### Roster Details<br />
Team Name: Aurora<br />
Roster: clax, deko, KENSI, Lack1, Norwi<br />
Global Rank: [24](../../standings_global_2024_08_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_28.md)<br />
Regional Rank: [19]( ../../standings_europe_2024_08_28.md)<br />
<br />
Final Rank Value:  1288.9<br />
<br />
Final Rank Value (1288.9) = Starting Rank Value (1524.2) + Head To Head Adjustments (-235.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.693[<sup>1</sup>](#table2)
- Bounty Collected: 0.499[<sup>2</sup>](#table1)
- Opponent Network: 0.283[<sup>2</sup>](#table1)
- LAN Wins: 0.794[<sup>2</sup>](#table1)

The average of these factors is 0.567<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1524.2
- 400 + ( ( 0.567 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1524.2


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
|           81 |      147 | 2024-08-26 | FURIA              | L   | 1.000      | -            | -                | -                | -         |    -5.32 | clax, deko, KENSI, Lack1, Norwi       |
|           80 |      186 | 2024-08-25 | Eternal Fire       | L   | 1.000      | -            | -                | -                | -         |    -5.09 | clax, deko, KENSI, Lack1, Norwi       |
|           79 |      404 | 2024-08-19 | Sashi              | L   | 1.000      | -            | -                | -                | -         |   -23.79 | clax, deko, KENSI, Lack1, Norwi       |
|           78 |      604 | 2024-08-12 | TSM                | L   | 1.000      | -            | -                | -                | -         |   -26.38 | deko, KENSI, Lack1, Norwi, r3salt     |
|           77 |      741 | 2024-08-07 | Space              | W   | 1.000      | 0.500        | -                | 0.421 (0.210)    | -         |     1.49 | deko, KENSI, Lack1, Norwi, r3salt     |
|           76 |      819 | 2024-08-05 | ARCRED             | L   | 1.000      | -            | -                | -                | -         |   -28.51 | deko, KENSI, Lack1, Norwi, r3salt     |
|           75 |      856 | 2024-08-04 | Nemiga             | L   | 1.000      | -            | -                | -                | -         |   -25.34 | deko, KENSI, Lack1, Norwi, r3salt     |
|           74 |     1133 | 2024-07-28 | 3DMAX              | L   | 0.993      | -            | -                | -                | -         |   -16.87 | deko, KENSI, Lack1, Norwi, r3salt     |
|           73 |     1186 | 2024-07-26 | The MongolZ        | L   | 0.978      | -            | -                | -                | -         |    -5.73 | deko, KENSI, Lack1, Norwi, r3salt     |
|           72 |     1190 | 2024-07-26 | BLEED              | W   | 0.977      | 0.650        | 0.112 (0.071)    | 0.519 (0.330)    | 1 (0.977) |     8.68 | deko, KENSI, Lack1, Norwi, r3salt     |
|           71 |     1216 | 2024-07-25 | True Rippers       | W   | 0.973      | -            | -                | -                | 1 (0.973) |     0.54 | deko, KENSI, Lack1, Norwi, r3salt     |
|           70 |     1228 | 2024-07-25 | ENCE               | W   | 0.971      | 0.650        | 0.156 (0.098)    | 0.349 (0.221)    | 1 (0.971) |    10.07 | deko, KENSI, Lack1, Norwi, r3salt     |
|           69 |     1263 | 2024-07-24 | PARIVISION         | W   | 0.964      | 0.650        | 0.050 (0.031)    | 0.703 (0.441)    | 1 (0.964) |     4.25 | deko, KENSI, Lack1, Norwi, r3salt     |
|           68 |     1452 | 2024-07-18 | B8                 | W   | 0.927      | 0.500        | 0.168 (0.078)    | 1.000 (0.464)    | -         |     5.18 | deko, KENSI, Lack1, Norwi, r3salt     |
|           67 |     1581 | 2024-07-16 | Qiang              | W   | 0.914      | 0.500        | -                | 0.410 (0.187)    | -         |     2.39 | deko, KENSI, Lack1, Norwi, r3salt     |
|           66 |     1864 | 2024-06-16 | Complexity         | L   | 0.711      | -            | -                | -                | -         |    -6.38 | deko, KENSI, Lack1, Norwi, r3salt     |
|           65 |     1932 | 2024-06-14 | The MongolZ        | W   | 0.699      | 0.500        | 1.000 (0.350)    | 0.615 (0.215)    | 1 (0.699) |    20.49 | deko, KENSI, Lack1, Norwi, r3salt     |
|           64 |     1942 | 2024-06-14 | Falcons            | W   | 0.698      | 0.500        | 0.316 (0.110)    | -                | 1 (0.698) |    16.30 | deko, KENSI, Lack1, Norwi, r3salt     |
|           63 |     2041 | 2024-06-10 | 9 Pandas           | W   | 0.672      | -            | -                | -                | -         |     3.58 | deko, KENSI, Lack1, Norwi, r3salt     |
|           62 |     2045 | 2024-06-10 | Monte              | W   | 0.672      | -            | -                | -                | -         |     2.85 | deko, KENSI, Lack1, Norwi, r3salt     |
|           61 |     2049 | 2024-06-10 | SAW                | L   | 0.672      | -            | -                | -                | -         |    -7.93 | deko, KENSI, Lack1, Norwi, r3salt     |
|           60 |     2077 | 2024-06-09 | Monte              | L   | 0.667      | -            | -                | -                | -         |   -18.30 | deko, KENSI, Lack1, Norwi, r3salt     |
|           59 |     2084 | 2024-06-09 | PARIVISION         | W   | 0.666      | -            | -                | -                | -         |     3.74 | deko, KENSI, Lack1, Norwi, r3salt     |
|           58 |     2093 | 2024-06-09 | RUSH B             | L   | 0.666      | -            | -                | -                | -         |   -19.74 | deko, KENSI, Lack1, Norwi, r3salt     |
|           57 |     2099 | 2024-06-09 | 3DMAX              | L   | 0.665      | -            | -                | -                | -         |    -9.12 | deko, KENSI, Lack1, Norwi, r3salt     |
|           56 |     2106 | 2024-06-09 | SINNERS            | L   | 0.665      | -            | -                | -                | -         |   -18.52 | deko, KENSI, Lack1, Norwi, r3salt     |
|           55 |     2193 | 2024-06-07 | Sangal             | L   | 0.654      | -            | -                | -                | -         |   -16.45 | deko, KENSI, Lack1, Norwi, r3salt     |
|           54 |     2210 | 2024-06-07 | Verdant            | W   | 0.653      | -            | -                | -                | -         |     0.89 | deko, KENSI, Lack1, Norwi, r3salt     |
|           53 |     2212 | 2024-06-07 | Qiang              | W   | 0.652      | -            | -                | -                | -         |     1.12 | deko, KENSI, Lack1, Norwi, r3salt     |
|           52 |     2250 | 2024-06-06 | RUSH B             | W   | 0.647      | -            | -                | -                | -         |     0.83 | deko, KENSI, Lack1, Norwi, r3salt     |
|           51 |     2315 | 2024-06-05 | PARIVISION         | W   | 0.641      | 0.500        | -                | 0.703 (0.225)    | -         |     2.56 | deko, KENSI, Lack1, Norwi, r3salt     |
|           50 |     2366 | 2024-06-04 | 3DMAX              | L   | 0.634      | -            | -                | -                | -         |    -8.49 | deko, KENSI, Lack1, Norwi, r3salt     |
|           49 |     2433 | 2024-06-02 | BLEED              | L   | 0.617      | -            | -                | -                | -         |   -14.38 | deko, KENSI, Lack1, Norwi, r3salt     |
|           48 |     2458 | 2024-06-01 | Lynn Vision        | W   | 0.613      | -            | -                | -                | 1 (0.613) |     1.05 | deko, KENSI, Lack1, Norwi, r3salt     |
|           47 |     2467 | 2024-06-01 | Chinggis Warriors  | W   | 0.611      | -            | -                | -                | 1 (0.611) |     0.96 | deko, KENSI, Lack1, Norwi, r3salt     |
|           46 |     2542 | 2024-05-29 | The MongolZ        | L   | 0.592      | -            | -                | -                | -         |    -1.81 | deko, KENSI, Lack1, Norwi, r3salt     |
|           45 |     2565 | 2024-05-28 | Lynn Vision        | W   | 0.584      | -            | -                | -                | 1 (0.584) |     0.93 | deko, KENSI, Lack1, Norwi, r3salt     |
|           44 |     2736 | 2024-05-21 | Astralis           | L   | 0.539      | -            | -                | -                | -         |    -4.48 | deko, KENSI, Lack1, Norwi, r3salt     |
|           43 |     2866 | 2024-05-17 | SAW                | W   | 0.512      | 0.769        | 0.360 (0.142)    | 0.657 (0.258)    | -         |    10.34 | deko, KENSI, Lack1, Norwi, r3salt     |
|           42 |     2881 | 2024-05-16 | PARIVISION         | W   | 0.508      | 0.769        | -                | 0.703 (0.275)    | -         |     1.84 | deko, KENSI, Lack1, Norwi, r3salt     |
|           41 |     2890 | 2024-05-16 | MIBR               | L   | 0.507      | -            | -                | -                | -         |   -10.25 | deko, KENSI, Lack1, Norwi, r3salt     |
|           40 |     2903 | 2024-05-16 | SAW                | L   | 0.505      | -            | -                | -                | -         |    -5.83 | deko, KENSI, Lack1, Norwi, r3salt     |
|           39 |     2954 | 2024-05-15 | Spirit             | L   | 0.498      | -            | -                | -                | -         |    -2.36 | deko, KENSI, Lack1, Norwi, r3salt     |
|           38 |     3097 | 2024-05-10 | MOUZ NXT           | L   | 0.468      | -            | -                | -                | -         |   -13.76 | deko, KENSI, Lack1, Norwi, r3salt     |
|           37 |     3355 | 2024-04-28 | MIBR               | L   | 0.385      | -            | -                | -                | -         |    -8.29 | deko, KENSI, Lack1, Norwi, r3salt     |
|           36 |     3356 | 2024-04-28 | Rebels             | W   | 0.384      | -            | -                | -                | 1 (0.384) |     0.59 | deko, KENSI, Lack1, Norwi, r3salt     |
|           35 |     3382 | 2024-04-27 | Party Astronauts   | W   | 0.378      | -            | -                | -                | -         |     0.44 | deko, KENSI, Lack1, Norwi, r3salt     |
|           34 |     3406 | 2024-04-25 | Apeks              | L   | 0.370      | -            | -                | -                | -         |   -11.39 | deko, KENSI, Lack1, Norwi, r3salt     |
|           33 |     3410 | 2024-04-25 | Party Astronauts   | W   | 0.369      | -            | -                | -                | -         |     0.41 | deko, KENSI, Lack1, Norwi, r3salt     |
|           32 |     3616 | 2024-04-18 | RUBY               | L   | 0.320      | -            | -                | -                | -         |    -9.74 | deko, KENSI, Lack1, Norwi, r3salt     |
|           31 |     3726 | 2024-04-14 | OG                 | W   | 0.294      | 0.684        | 0.144 (0.029)    | -                | -         |     0.53 | deko, KENSI, Lack1, Norwi, r3salt     |
|           30 |     3740 | 2024-04-13 | BetBoom            | W   | 0.287      | 0.684        | 0.273 (0.053)    | -                | -         |     2.08 | deko, KENSI, Lack1, Norwi, r3salt     |
|           29 |     3751 | 2024-04-12 | AMKAL              | W   | 0.281      | -            | -                | -                | -         |     0.89 | deko, KENSI, Lack1, Norwi, r3salt     |
|           28 |     3774 | 2024-04-11 | BetBoom            | W   | 0.274      | -            | -                | -                | -         |     2.03 | deko, KENSI, Lack1, Norwi, r3salt     |
|           27 |     3781 | 2024-04-11 | Apeks              | W   | 0.273      | -            | -                | -                | -         |     0.18 | deko, KENSI, Lack1, Norwi, r3salt     |
|           26 |     3786 | 2024-04-11 | GUN5               | W   | 0.273      | -            | -                | -                | -         |     0.42 | deko, KENSI, Lack1, Norwi, r3salt     |
|           25 |     3815 | 2024-04-10 | PARIVISION         | W   | 0.268      | -            | -                | -                | -         |     0.79 | deko, KENSI, Lack1, Norwi, r3salt     |
|           24 |     3828 | 2024-04-10 | BetBoom            | L   | 0.266      | -            | -                | -                | -         |    -6.50 | deko, KENSI, Lack1, Norwi, r3salt     |
|           23 |     3875 | 2024-04-09 | KOI                | L   | 0.261      | -            | -                | -                | -         |    -7.83 | deko, KENSI, Lack1, Norwi, r3salt     |
|           22 |     3885 | 2024-04-09 | 1WIN               | W   | 0.260      | -            | -                | -                | -         |     0.27 | deko, KENSI, Lack1, Norwi, r3salt     |
|           21 |     3892 | 2024-04-09 | 9 Pandas           | W   | 0.259      | -            | -                | -                | -         |     0.50 | deko, KENSI, Lack1, Norwi, r3salt     |
|           20 |     3903 | 2024-04-08 | Metizport          | W   | 0.254      | -            | -                | -                | -         |     0.15 | deko, KENSI, Lack1, Norwi, r3salt     |
|           19 |     3907 | 2024-04-08 | OG                 | W   | 0.254      | 0.684        | 0.144 (0.025)    | -                | -         |     0.38 | deko, KENSI, Lack1, Norwi, r3salt     |
|           18 |     3920 | 2024-04-08 | 1WIN               | L   | 0.252      | -            | -                | -                | -         |    -7.71 | deko, KENSI, Lack1, Norwi, r3salt     |
|           17 |     4009 | 2024-04-04 | Ninjas in Pyjamas  | W   | 0.227      | -            | -                | -                | -         |     3.31 | deko, KENSI, Lack1, Norwi, r3salt     |
|           16 |     4050 | 2024-04-03 | Ninjas in Pyjamas  | W   | 0.221      | -            | -                | -                | -         |     3.27 | deko, KENSI, Lack1, Norwi, r3salt     |
|           15 |     4088 | 2024-04-02 | Apeks              | W   | 0.214      | -            | -                | -                | -         |     0.12 | deko, KENSI, Lack1, Norwi, r3salt     |
|           14 |     4096 | 2024-04-02 | Metizport          | W   | 0.213      | -            | -                | -                | -         |     0.11 | deko, KENSI, Lack1, Norwi, r3salt     |
|           13 |     4108 | 2024-04-01 | SINNERS            | L   | 0.208      | -            | -                | -                | -         |    -5.72 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           12 |     4148 | 2024-03-28 | brazylijski luz    | W   | 0.181      | -            | -                | -                | -         |     0.08 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           11 |     4179 | 2024-03-27 | Metizport          | W   | 0.175      | -            | -                | -                | -         |     0.09 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           10 |     4186 | 2024-03-27 | AURA               | W   | 0.174      | -            | -                | -                | -         |     0.02 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            9 |     4220 | 2024-03-25 | Rebels             | W   | 0.161      | -            | -                | -                | -         |     0.20 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            8 |     4236 | 2024-03-23 | ALTERNATE aTTaX    | W   | 0.148      | -            | -                | -                | -         |     0.24 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            7 |     4251 | 2024-03-22 | ex-Sprout          | W   | 0.141      | -            | -                | -                | -         |     0.01 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            6 |     4374 | 2024-03-16 | Gods Reign         | W   | 0.099      | -            | -                | -                | -         |     0.04 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            5 |     4396 | 2024-03-15 | Gods Reign         | W   | 0.091      | -            | -                | -                | -         |     0.03 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            4 |     4430 | 2024-03-14 | Bad News Kangaroos | W   | 0.084      | -            | -                | -                | -         |     0.03 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            3 |     4688 | 2024-03-04 | Young Ninjas       | L   | 0.020      | -            | -                | -                | -         |    -0.62 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            2 |     4733 | 2024-03-02 | Rebels             | W   | 0.007      | -            | -                | -                | -         |     0.01 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            1 |     4752 | 2024-03-01 | FORZE              | W   | 0.001      | -            | -                | -                | -         |     0.00 | BELCHONOKK, deko, KENSI, Lack1, Norwi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($105,117.40)
- Divide that value by the 5th highest value among all rosters ($290,989.03)
- The final value (0.36) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-28 |      0.993 | $35,000.00     | $34,766.92      |
| 2024-06-16 |      0.713 | $10,000.00     | $7,129.05       |
| 2024-06-09 |      0.667 | $8,500.00      | $5,673.29       |
| 2024-06-02 |      0.619 | $15,000.00     | $9,288.68       |
| 2024-05-23 |      0.554 | $12,500.00     | $6,919.97       |
| 2024-04-28 |      0.385 | $20,000.00     | $7,697.48       |
| 2024-04-14 |      0.294 | $105,000.00    | $30,823.96      |
| 2024-03-16 |      0.099 | $28,500.00     | $2,818.04       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
