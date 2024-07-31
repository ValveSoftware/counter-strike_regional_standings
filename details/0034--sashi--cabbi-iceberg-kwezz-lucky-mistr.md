### Roster Details<br />
Team Name: Sashi<br />
Roster: Cabbi, IceBerg, kwezz, Lucky, MistR<br />
Global Rank: [34](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [25]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1185.1<br />
<br />
Final Rank Value (1185.1) = Starting Rank Value (1172.0) + Head To Head Adjustments (13.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.578[<sup>1</sup>](#table2)
- Bounty Collected: 0.465[<sup>2</sup>](#table1)
- Opponent Network: 0.242[<sup>2</sup>](#table1)
- LAN Wins: 0.210[<sup>2</sup>](#table1)

The average of these factors is 0.374<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1172.0
- 400 + ( ( 0.374 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1172.0


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
|           99 |       12 | 2024-07-31 | Insilio           | W   | 1.000      | 0.500        | -                | 0.554 (0.277)    | 0 (0.000) |     6.88 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           98 |       48 | 2024-07-30 | EYEBALLERS        | W   | 1.000      | 0.500        | -                | 0.513 (0.257)    | 0 (0.000) |     3.15 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           97 |       63 | 2024-07-30 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -17.20 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           96 |      239 | 2024-07-24 | Monte             | W   | 1.000      | 0.500        | 0.081 (0.041)    | 0.613 (0.306)    | 0 (0.000) |    10.34 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           95 |      464 | 2024-07-18 | FURIA             | L   | 1.000      | -            | -                | -                | -         |    -2.80 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           94 |      473 | 2024-07-18 | JiJieHao          | W   | 1.000      | 1.000        | 0.030 (0.030)    | -                | 1 (1.000) |     1.21 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           93 |      536 | 2024-07-17 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -0.56 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           92 |      671 | 2024-07-13 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -23.01 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           91 |      679 | 2024-07-12 | FLuffy Gangsters  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.40 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           90 |      697 | 2024-07-11 | Endpoint          | W   | 1.000      | 0.358        | -                | 0.523 (0.187)    | 0 (0.000) |     4.65 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           89 |      721 | 2024-07-10 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -13.99 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           88 |      724 | 2024-07-10 | 9INE              | W   | 1.000      | 0.358        | -                | 0.486 (0.174)    | 0 (0.000) |     5.32 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           87 |      925 | 2024-06-14 | 3DMAX             | L   | 0.885      | -            | -                | -                | -         |    -6.24 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           86 |      961 | 2024-06-13 | Sampi             | W   | 0.878      | -            | -                | -                | 0 (0.000) |     3.46 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           85 |      984 | 2024-06-12 | CPH Wolves        | W   | 0.873      | -            | -                | -                | 0 (0.000) |     2.45 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           84 |      989 | 2024-06-12 | Astralis Talent   | W   | 0.872      | -            | -                | -                | -         |     1.90 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           83 |     1253 | 2024-06-06 | Ninjas in Pyjamas | L   | 0.833      | -            | -                | -                | -         |    -3.43 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           82 |     1285 | 2024-06-06 | HEROIC            | L   | 0.831      | -            | -                | -                | -         |    -3.25 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           81 |     1318 | 2024-06-05 | ENCE              | L   | 0.826      | -            | -                | -                | -         |    -8.42 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           80 |     1332 | 2024-06-05 | Astralis          | W   | 0.825      | 0.715        | 0.360 (0.212)    | 0.386 (0.228)    | 1 (0.825) |    24.51 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           79 |     1340 | 2024-06-05 | The MongolZ       | L   | 0.824      | -            | -                | -                | -         |    -0.50 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           78 |     1773 | 2024-05-20 | Monte             | L   | 0.718      | -            | -                | -                | -         |   -16.38 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           77 |     1788 | 2024-05-19 | Passion UA        | W   | 0.713      | 0.500        | 0.172 (0.061)    | 1.000 (0.356)    | -         |     5.66 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           76 |     1815 | 2024-05-18 | B8                | L   | 0.706      | -            | -                | -                | -         |   -13.17 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           75 |     1826 | 2024-05-18 | Monte             | W   | 0.705      | -            | -                | -                | -         |     5.83 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           74 |     1832 | 2024-05-18 | ALTERNATE aTTaX   | W   | 0.704      | 0.500        | -                | 0.564 (0.199)    | -         |     3.93 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           73 |     1865 | 2024-05-17 | ex-Guild Eagles   | W   | 0.697      | -            | -                | -                | -         |     2.51 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           72 |     1902 | 2024-05-16 | Passion UA        | L   | 0.691      | -            | -                | -                | -         |   -16.76 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           71 |     1950 | 2024-05-15 | Endpoint          | W   | 0.684      | -            | -                | -                | -         |     3.57 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           70 |     2122 | 2024-05-09 | 1WIN              | W   | 0.645      | -            | -                | -                | -         |     3.72 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           69 |     2145 | 2024-05-08 | Grannys Knockers  | W   | 0.638      | -            | -                | -                | -         |     1.72 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           68 |     2163 | 2024-05-07 | 9 Pandas          | W   | 0.632      | -            | -                | -                | -         |     4.82 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           67 |     2177 | 2024-05-06 | ALTERNATE aTTaX   | W   | 0.626      | -            | -                | -                | -         |     4.22 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           66 |     2191 | 2024-05-05 | Gaimin Gladiators | L   | 0.619      | -            | -                | -                | -         |   -14.76 | Cabbi, IceBerg, kwezz, Lucky, PR1mE   |
|           65 |     2201 | 2024-05-05 | Come on now dawg  | W   | 0.618      | -            | -                | -                | -         |     0.19 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           64 |     2250 | 2024-05-02 | fnatic            | W   | 0.599      | 0.384        | 0.374 (0.086)    | -                | -         |    16.22 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           63 |     2284 | 2024-05-01 | 3DMAX             | W   | 0.591      | 0.384        | 0.504 (0.114)    | 1.000 (0.227)    | -         |    17.13 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           62 |     2301 | 2024-04-30 | OG                | W   | 0.585      | 0.384        | 0.144 (0.032)    | -                | -         |     6.75 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           61 |     2329 | 2024-04-29 | 500               | W   | 0.578      | -            | -                | -                | -         |     1.38 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           60 |     2357 | 2024-04-27 | 777               | W   | 0.566      | -            | -                | -                | -         |     1.22 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           59 |     2361 | 2024-04-27 | JANO              | W   | 0.566      | -            | -                | -                | -         |     1.06 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           58 |     2426 | 2024-04-25 | Passion UA        | W   | 0.551      | 0.384        | 0.172 (0.036)    | 1.000 (0.212)    | -         |     4.93 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           57 |     2460 | 2024-04-23 | Gaimin Gladiators | W   | 0.538      | -            | -                | -                | -         |     5.73 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           56 |     2464 | 2024-04-23 | BLEED             | W   | 0.538      | -            | -                | -                | -         |     6.29 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           55 |     2511 | 2024-04-20 | Eternal Fire      | W   | 0.520      | 0.143        | 0.759 (0.056)    | -                | -         |    15.78 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           54 |     2525 | 2024-04-20 | Cloud9            | W   | 0.518      | -            | -                | -                | -         |     7.29 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           53 |     2561 | 2024-04-19 | Eternal Fire      | L   | 0.513      | -            | -                | -                | -         |    -0.55 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           52 |     2570 | 2024-04-19 | Cloud9            | W   | 0.512      | -            | -                | -                | -         |     7.20 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           51 |     2597 | 2024-04-18 | ex-Guild Eagles   | W   | 0.506      | -            | -                | -                | -         |     2.80 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           50 |     2604 | 2024-04-18 | RUBY              | W   | 0.506      | -            | -                | -                | -         |     4.45 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           49 |     2612 | 2024-04-18 | GamerLegion       | W   | 0.506      | -            | -                | -                | -         |     8.40 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           48 |     2654 | 2024-04-17 | Passion UA        | L   | 0.499      | -            | -                | -                | -         |    -9.80 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           47 |     2690 | 2024-04-16 | ex-Guild Eagles   | L   | 0.492      | -            | -                | -                | -         |   -13.10 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           46 |     2712 | 2024-04-15 | ex-Preasy         | W   | 0.485      | -            | -                | -                | -         |     2.46 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           45 |     2729 | 2024-04-14 | UNiTY             | W   | 0.477      | -            | -                | -                | -         |     4.17 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           44 |     2787 | 2024-04-11 | Enterprise        | W   | 0.458      | -            | -                | -                | -         |     3.50 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           43 |     2829 | 2024-04-10 | Passion UA        | L   | 0.451      | -            | -                | -                | -         |    -9.18 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           42 |     2963 | 2024-04-06 | UNiTY             | W   | 0.424      | -            | -                | -                | -         |     3.82 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           41 |     3020 | 2024-04-04 | UNiTY             | W   | 0.411      | -            | -                | -                | -         |     3.68 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           40 |     3104 | 2024-04-02 | Permitta          | W   | 0.397      | -            | -                | -                | -         |     3.31 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           39 |     3113 | 2024-04-01 | Nexus             | L   | 0.391      | -            | -                | -                | -         |   -10.24 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           38 |     3187 | 2024-03-27 | Rebels            | L   | 0.359      | -            | -                | -                | -         |    -7.85 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           37 |     3221 | 2024-03-25 | Nexus             | W   | 0.346      | -            | -                | -                | -         |     1.76 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           36 |     3246 | 2024-03-22 | Nemiga            | W   | 0.326      | 0.372        | 0.325 (0.040)    | -                | -         |     5.50 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           35 |     3311 | 2024-03-19 | RUBY              | W   | 0.307      | -            | -                | -                | -         |     2.40 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           34 |     3323 | 2024-03-18 | Insilio           | W   | 0.299      | -            | -                | -                | -         |     2.04 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           33 |     3392 | 2024-03-15 | ECLOT             | W   | 0.277      | -            | -                | -                | -         |     3.90 | Cabbi, IceBerg, larsen, Lucky, MistR  |
|           32 |     3461 | 2024-03-13 | BLEED             | L   | 0.264      | -            | -                | -                | -         |    -5.80 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           31 |     3509 | 2024-03-11 | Nemiga            | L   | 0.252      | -            | -                | -                | -         |    -3.64 | Cabbi, IceBerg, larsen, Lucky, MistR  |
|           30 |     3534 | 2024-03-10 | Sampi             | L   | 0.245      | -            | -                | -                | -         |    -6.21 | Cabbi, IceBerg, Kristou, Lucky, MistR |
|           29 |     3560 | 2024-03-09 | Permitta          | W   | 0.238      | -            | -                | -                | -         |     1.85 | Cabbi, IceBerg, larsen, Lucky, MistR  |
|           28 |     3579 | 2024-03-08 | ALTERNATE aTTaX   | L   | 0.230      | -            | -                | -                | -         |    -5.13 | Cabbi, IceBerg, larsen, Lucky, MistR  |
|           27 |     3591 | 2024-03-07 | Insilio           | W   | 0.227      | -            | -                | -                | -         |     1.41 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           26 |     3603 | 2024-03-07 | ex-sYnck          | W   | 0.225      | -            | -                | -                | -         |     0.18 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           25 |     3636 | 2024-03-06 | Alliance          | W   | 0.218      | -            | -                | -                | -         |     1.11 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           24 |     3670 | 2024-03-05 | Johnny Speeds     | L   | 0.212      | -            | -                | -                | -         |    -1.96 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           23 |     3678 | 2024-03-05 | ALTERNATE aTTaX   | L   | 0.211      | -            | -                | -                | -         |    -4.78 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           22 |     3694 | 2024-03-04 | Entropiq          | L   | 0.204      | -            | -                | -                | -         |    -6.21 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           21 |     3738 | 2024-03-02 | brazylijski luz   | W   | 0.192      | -            | -                | -                | -         |     0.70 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           20 |     3773 | 2024-02-29 | JANO              | W   | 0.177      | -            | -                | -                | -         |     0.37 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           19 |     3781 | 2024-02-28 | Sampi             | W   | 0.172      | -            | -                | -                | -         |     1.00 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           18 |     3798 | 2024-02-27 | V1dar             | L   | 0.166      | -            | -                | -                | -         |    -5.08 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           17 |     3839 | 2024-02-25 | Sangal            | L   | 0.153      | -            | -                | -                | -         |    -2.51 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           16 |     3845 | 2024-02-25 | PGE Turow         | L   | 0.151      | -            | -                | -                | -         |    -4.51 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           15 |     3885 | 2024-02-24 | MOUZ NXT          | L   | 0.144      | -            | -                | -                | -         |    -3.01 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           14 |     3937 | 2024-02-21 | Sampi             | W   | 0.125      | -            | -                | -                | -         |     0.68 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           13 |     4032 | 2024-02-17 | Zero Tenacity     | W   | 0.099      | -            | -                | -                | -         |     1.28 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           12 |     4181 | 2024-02-11 | ARCRED            | W   | 0.058      | -            | -                | -                | -         |     0.28 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           11 |     4183 | 2024-02-10 | Nemiga            | L   | 0.054      | -            | -                | -                | -         |    -0.85 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           10 |     4186 | 2024-02-10 | AMKAL             | W   | 0.053      | -            | -                | -                | -         |     0.80 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            9 |     4200 | 2024-02-09 | FORZE             | W   | 0.046      | -            | -                | -                | -         |     0.26 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            8 |     4205 | 2024-02-09 | Insilio           | W   | 0.045      | -            | -                | -                | -         |     0.25 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            7 |     4214 | 2024-02-08 | Nemiga            | L   | 0.040      | -            | -                | -                | -         |    -0.64 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            6 |     4217 | 2024-02-08 | FORZE             | W   | 0.039      | -            | -                | -                | -         |     0.22 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            5 |     4249 | 2024-02-05 | Entropiq          | W   | 0.018      | -            | -                | -                | -         |     0.02 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            4 |     4266 | 2024-02-04 | TMVG              | L   | 0.012      | -            | -                | -                | -         |    -0.37 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            3 |     4282 | 2024-02-03 | showmakerz        | W   | 0.007      | -            | -                | -                | -         |     0.00 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            2 |     4288 | 2024-02-03 | Gaimin Gladiators | W   | 0.006      | -            | -                | -                | -         |     0.05 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            1 |     4299 | 2024-02-03 | Sampi             | L   | 0.005      | -            | -                | -                | -         |    -0.12 | Cabbi, IceBerg, kwezz, Lucky, MistR   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($61,406.47)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.19) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-07-13 |      1.000 | $3,216.00      | $3,216.00       |
| 2024-06-12 |      0.873 | $9,365.00      | $8,172.73       |
| 2024-06-09 |      0.852 | $8,000.00      | $6,819.67       |
| 2024-05-18 |      0.706 | $5,000.00      | $3,530.91       |
| 2024-05-09 |      0.645 | $14,000.00     | $9,024.25       |
| 2024-05-02 |      0.599 | $12,500.00     | $7,491.66       |
| 2024-04-27 |      0.566 | $6,375.00      | $3,610.66       |
| 2024-04-06 |      0.424 | $5,000.00      | $2,118.75       |
| 2024-03-25 |      0.346 | $7,000.00      | $2,421.83       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
