### Roster Details<br />
Team Name: Sashi<br />
Roster: Cabbi, IceBerg, kwezz, Lucky, MistR<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [34](../standings_global.md)<br />
Regional Rank: [24]( ../standings_europe.md)<br />
Final Rank Value:  1243.5<br />
<br />
Final Rank Value (1243.5) = Starting Rank Value (1158.8) + Head To Head Adjustments (84.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.590[<sup>1</sup>](#table2)
- Bounty Collected: 0.498[<sup>2</sup>](#table1)
- Opponent Network: 0.240[<sup>2</sup>](#table1)
- LAN Wins: 0.111[<sup>2</sup>](#table1)

The average of these factors is 0.360<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1158.8
- 400 + ( ( 0.360 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1158.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           97 |        3 | 2024-07-11 | Endpoint          | W   | 1.000      | 0.358        | -                | 0.524 (0.188)    | 0 (0.000) |     4.21 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           96 |       27 | 2024-07-10 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -13.20 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           95 |       30 | 2024-07-10 | 9INE              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.78 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           94 |      231 | 2024-06-14 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -16.57 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           93 |      267 | 2024-06-13 | Slovakia          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.48 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           92 |      290 | 2024-06-12 | CPH Wolves        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.55 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           91 |      295 | 2024-06-12 | Astralis Talent   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.80 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           90 |      559 | 2024-06-06 | Ninjas in Pyjamas | L   | 0.967      | -            | -                | -                | -         |    -2.80 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           89 |      591 | 2024-06-06 | HEROIC            | L   | 0.965      | -            | -                | -                | -         |    -2.44 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           88 |      624 | 2024-06-05 | ENCE              | L   | 0.960      | -            | -                | -                | -         |   -11.59 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           87 |      638 | 2024-06-05 | Astralis          | W   | 0.959      | 0.715        | 0.546 (0.375)    | 0.461 (0.316)    | 1 (0.959) |    29.34 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           86 |      646 | 2024-06-05 | The MongolZ       | L   | 0.958      | -            | -                | -                | -         |    -0.75 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           85 |     1079 | 2024-05-20 | Monte             | L   | 0.852      | -            | -                | -                | -         |   -12.76 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           84 |     1094 | 2024-05-19 | Passion UA        | W   | 0.847      | 0.500        | 0.087 (0.037)    | 0.821 (0.347)    | 0 (0.000) |     5.18 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           83 |     1121 | 2024-05-18 | B8                | L   | 0.840      | -            | -                | -                | -         |   -15.06 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           82 |     1132 | 2024-05-18 | Monte             | W   | 0.839      | 0.384        | 0.188 (0.060)    | 0.668 (0.215)    | 0 (0.000) |    13.68 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           81 |     1138 | 2024-05-18 | ALTERNATE aTTaX   | W   | 0.838      | 0.500        | -                | 0.577 (0.242)    | 0 (0.000) |     4.67 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           80 |     1171 | 2024-05-17 | ex-Guild Eagles   | W   | 0.831      | -            | -                | -                | 0 (0.000) |     3.41 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           79 |     1208 | 2024-05-16 | Passion UA        | L   | 0.825      | -            | -                | -                | -         |   -21.48 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           78 |     1256 | 2024-05-15 | Endpoint          | W   | 0.818      | -            | -                | -                | -         |     4.10 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           77 |     1428 | 2024-05-09 | 1WIN              | W   | 0.779      | 0.396        | -                | 0.570 (0.176)    | -         |     5.37 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           76 |     1451 | 2024-05-08 | Grannys Knockers  | W   | 0.772      | -            | -                | -                | -         |     2.19 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           75 |     1469 | 2024-05-07 | 9 Pandas          | W   | 0.766      | 0.396        | 0.125 (0.038)    | 0.625 (0.190)    | -         |     7.00 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           74 |     1483 | 2024-05-06 | ALTERNATE aTTaX   | W   | 0.760      | -            | -                | -                | -         |     5.31 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           73 |     1497 | 2024-05-05 | Gaimin Gladiators | L   | 0.754      | -            | -                | -                | -         |   -15.30 | Cabbi, IceBerg, kwezz, Lucky, PR1mE   |
|           72 |     1507 | 2024-05-05 | Come on now dawg  | W   | 0.752      | -            | -                | -                | -         |     0.19 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           71 |     1556 | 2024-05-02 | fnatic            | W   | 0.733      | 0.384        | 0.298 (0.084)    | -                | -         |    19.06 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           70 |     1590 | 2024-05-01 | 3DMAX             | W   | 0.725      | 0.384        | 0.205 (0.057)    | 1.000 (0.279)    | -         |    13.10 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           69 |     1607 | 2024-04-30 | OG                | W   | 0.720      | 0.384        | 0.215 (0.059)    | -                | -         |    11.96 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           68 |     1635 | 2024-04-29 | 500               | W   | 0.712      | -            | -                | -                | -         |     1.84 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           67 |     1663 | 2024-04-27 | 777               | W   | 0.701      | -            | -                | -                | -         |     1.46 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           66 |     1667 | 2024-04-27 | JANO              | W   | 0.700      | -            | -                | -                | -         |     1.23 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           65 |     1732 | 2024-04-25 | Passion UA        | W   | 0.685      | 0.384        | -                | 0.821 (0.216)    | -         |     4.43 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           64 |     1766 | 2024-04-23 | Gaimin Gladiators | W   | 0.673      | -            | -                | -                | -         |    10.89 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           63 |     1770 | 2024-04-23 | BLEED             | W   | 0.672      | 0.384        | 0.348 (0.090)    | 0.908 (0.234)    | -         |    15.97 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           62 |     1817 | 2024-04-20 | Eternal Fire      | W   | 0.654      | 0.143        | 1.000 (0.093)    | -                | -         |    19.90 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           61 |     1831 | 2024-04-20 | Cloud9            | W   | 0.653      | -            | -                | -                | -         |    14.06 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           60 |     1867 | 2024-04-19 | Eternal Fire      | L   | 0.647      | -            | -                | -                | -         |    -0.60 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           59 |     1876 | 2024-04-19 | Cloud9            | W   | 0.646      | -            | -                | -                | -         |    14.18 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           58 |     1903 | 2024-04-18 | ex-Guild Eagles   | W   | 0.641      | -            | -                | -                | -         |     4.96 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           57 |     1910 | 2024-04-18 | RUBY              | W   | 0.640      | -            | -                | -                | -         |     6.92 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           56 |     1918 | 2024-04-18 | GamerLegion       | W   | 0.640      | -            | -                | -                | -         |    13.73 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           55 |     1960 | 2024-04-17 | Passion UA        | L   | 0.633      | -            | -                | -                | -         |   -13.57 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           54 |     1996 | 2024-04-16 | ex-Guild Eagles   | L   | 0.626      | -            | -                | -                | -         |   -15.35 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           53 |     2018 | 2024-04-15 | ex-Preasy         | W   | 0.619      | -            | -                | -                | -         |     4.92 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           52 |     2035 | 2024-04-14 | UNiTY             | W   | 0.611      | -            | -                | -                | -         |     7.06 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           51 |     2093 | 2024-04-11 | Enterprise        | W   | 0.592      | -            | -                | -                | -         |     6.28 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           50 |     2135 | 2024-04-10 | Passion UA        | L   | 0.585      | -            | -                | -                | -         |   -12.97 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           49 |     2269 | 2024-04-06 | UNiTY             | W   | 0.558      | -            | -                | -                | -         |     6.77 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           48 |     2326 | 2024-04-04 | UNiTY             | W   | 0.545      | -            | -                | -                | -         |     6.64 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           47 |     2410 | 2024-04-02 | Permitta          | W   | 0.531      | -            | -                | -                | -         |     5.61 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           46 |     2419 | 2024-04-01 | Romania           | L   | 0.525      | -            | -                | -                | -         |   -13.24 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           45 |     2493 | 2024-03-27 | Rebels            | L   | 0.493      | -            | -                | -                | -         |    -9.00 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           44 |     2527 | 2024-03-25 | Romania           | W   | 0.480      | -            | -                | -                | -         |     2.86 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           43 |     2552 | 2024-03-22 | Nemiga            | W   | 0.460      | 0.372        | 0.498 (0.085)    | -                | -         |    10.31 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           42 |     2617 | 2024-03-19 | RUBY              | W   | 0.441      | -            | -                | -                | -         |     4.54 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           41 |     2629 | 2024-03-18 | Insilio           | W   | 0.433      | -            | -                | -                | -         |     4.02 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           40 |     2698 | 2024-03-15 | Czech Republic    | W   | 0.411      | -            | -                | -                | -         |     7.96 | Cabbi, IceBerg, larsen, Lucky, MistR  |
|           39 |     2767 | 2024-03-13 | BLEED             | L   | 0.398      | -            | -                | -                | -         |    -2.21 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           38 |     2815 | 2024-03-11 | Nemiga            | L   | 0.386      | -            | -                | -                | -         |    -3.17 | Cabbi, IceBerg, larsen, Lucky, MistR  |
|           37 |     2840 | 2024-03-10 | Slovakia          | L   | 0.379      | -            | -                | -                | -         |    -8.73 | Cabbi, IceBerg, Kristou, Lucky, MistR |
|           36 |     2866 | 2024-03-09 | Permitta          | W   | 0.372      | -            | -                | -                | -         |     3.85 | Cabbi, IceBerg, larsen, Lucky, MistR  |
|           35 |     2885 | 2024-03-08 | ALTERNATE aTTaX   | L   | 0.365      | -            | -                | -                | -         |    -7.03 | Cabbi, IceBerg, larsen, Lucky, MistR  |
|           34 |     2897 | 2024-03-07 | Insilio           | W   | 0.361      | -            | -                | -                | -         |     3.16 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           33 |     2909 | 2024-03-07 | ex-sYnck          | W   | 0.359      | -            | -                | -                | -         |     0.36 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           32 |     2942 | 2024-03-06 | Alliance          | W   | 0.352      | -            | -                | -                | -         |     2.67 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           31 |     2976 | 2024-03-05 | Johnny Speeds     | L   | 0.347      | -            | -                | -                | -         |    -1.91 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           30 |     2984 | 2024-03-05 | ALTERNATE aTTaX   | L   | 0.345      | -            | -                | -                | -         |    -6.82 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           29 |     3000 | 2024-03-04 | Entropiq          | L   | 0.338      | -            | -                | -                | -         |   -10.15 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           28 |     3044 | 2024-03-02 | brazylijski luz   | W   | 0.326      | -            | -                | -                | -         |     1.45 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           27 |     3079 | 2024-02-29 | JANO              | W   | 0.311      | -            | -                | -                | -         |     0.83 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           26 |     3087 | 2024-02-28 | Slovakia          | W   | 0.306      | -            | -                | -                | -         |     2.45 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           25 |     3104 | 2024-02-27 | V1dar             | L   | 0.300      | -            | -                | -                | -         |    -9.13 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           24 |     3145 | 2024-02-25 | Sangal            | L   | 0.287      | -            | -                | -                | -         |    -4.32 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           23 |     3151 | 2024-02-25 | PGE Turow         | L   | 0.285      | -            | -                | -                | -         |    -8.37 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           22 |     3191 | 2024-02-24 | MOUZ NXT          | L   | 0.278      | -            | -                | -                | -         |    -5.03 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           21 |     3243 | 2024-02-21 | Slovakia          | W   | 0.259      | -            | -                | -                | -         |     1.88 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           20 |     3338 | 2024-02-17 | Zero Tenacity     | W   | 0.233      | -            | -                | -                | -         |     3.16 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           19 |     3487 | 2024-02-11 | ARCRED            | W   | 0.192      | -            | -                | -                | -         |     1.20 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           18 |     3489 | 2024-02-10 | Nemiga            | L   | 0.188      | -            | -                | -                | -         |    -1.82 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           17 |     3492 | 2024-02-10 | AMKAL             | W   | 0.187      | -            | -                | -                | -         |     2.88 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           16 |     3506 | 2024-02-09 | FORZE             | W   | 0.180      | -            | -                | -                | -         |     1.53 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           15 |     3511 | 2024-02-09 | Insilio           | W   | 0.179      | -            | -                | -                | -         |     1.39 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           14 |     3520 | 2024-02-08 | Nemiga            | L   | 0.174      | -            | -                | -                | -         |    -1.69 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           13 |     3523 | 2024-02-08 | FORZE             | W   | 0.173      | -            | -                | -                | -         |     1.44 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           12 |     3555 | 2024-02-05 | Entropiq          | W   | 0.152      | -            | -                | -                | -         |     0.20 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           11 |     3572 | 2024-02-04 | TMVG              | L   | 0.146      | -            | -                | -                | -         |    -4.47 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           10 |     3588 | 2024-02-03 | showmakerz        | W   | 0.141      | -            | -                | -                | -         |     0.07 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            9 |     3594 | 2024-02-03 | Gaimin Gladiators | W   | 0.140      | -            | -                | -                | -         |     2.13 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            8 |     3605 | 2024-02-03 | Slovakia          | L   | 0.139      | -            | -                | -                | -         |    -3.40 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            7 |     3625 | 2024-02-02 | EYEBALLERS        | L   | 0.133      | -            | -                | -                | -         |    -3.25 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            6 |     3680 | 2024-01-31 | Permitta          | L   | 0.120      | -            | -                | -                | -         |    -2.83 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            5 |     3691 | 2024-01-30 | Insilio           | W   | 0.115      | -            | -                | -                | -         |     0.85 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            4 |     3693 | 2024-01-30 | FORZE             | W   | 0.114      | -            | -                | -                | -         |     0.10 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            3 |     3701 | 2024-01-30 | RUSH B            | W   | 0.113      | -            | -                | -                | -         |     0.58 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            2 |     4115 | 2024-01-16 | EYEBALLERS        | L   | 0.021      | -            | -                | -                | -         |    -0.51 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            1 |     4129 | 2024-01-16 | ARCRED            | W   | 0.020      | -            | -                | -                | -         |     0.13 | Cabbi, IceBerg, kwezz, Lucky, MistR   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($52,145.11)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.20) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-12 |      1.000 | $9,365.00      | $9,365.00       |
| 2024-06-09 |      0.987 | $8,000.00      | $7,892.66       |
| 2024-05-18 |      0.840 | $5,000.00      | $4,201.52       |
| 2024-05-09 |      0.779 | $14,000.00     | $10,901.98      |
| 2024-05-02 |      0.733 | $12,500.00     | $9,168.20       |
| 2024-04-27 |      0.701 | $6,375.00      | $4,465.69       |
| 2024-04-06 |      0.558 | $5,000.00      | $2,789.37       |
| 2024-03-25 |      0.480 | $7,000.00      | $3,360.69       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
