### Roster Details<br />
Team Name: Sashi<br />
Roster: Cabbi, IceBerg, kwezz, Lucky, MistR<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [36](../standings_global.md)<br />
Regional Rank: [24]( ../standings_europe.md)<br />
Final Rank Value:  1173.6<br />
<br />
Final Rank Value (1173.6) = Starting Rank Value (1171.3) + Head To Head Adjustments (2.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.613[<sup>1</sup>](#table2)
- Bounty Collected: 0.473[<sup>2</sup>](#table1)
- Opponent Network: 0.217[<sup>2</sup>](#table1)
- LAN Wins: 0.221[<sup>2</sup>](#table1)

The average of these factors is 0.381<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1171.3
- 400 + ( ( 0.381 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1171.3


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
|          100 |      222 | 2024-07-18 | FURIA             | L   | 1.000      | -            | -                | -                | -         |    -2.34 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           99 |      231 | 2024-07-18 | JiJieHao          | W   | 1.000      | 1.000        | 0.036 (0.036)    | -                | 1 (1.000) |     1.28 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           98 |      294 | 2024-07-17 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -0.43 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           97 |      429 | 2024-07-13 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -23.69 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           96 |      437 | 2024-07-12 | FLuffy Gangsters  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.49 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           95 |      455 | 2024-07-11 | Endpoint          | W   | 1.000      | 0.358        | -                | 0.466 (0.167)    | 0 (0.000) |     4.76 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           94 |      479 | 2024-07-10 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -12.94 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           93 |      482 | 2024-07-10 | 9INE              | W   | 1.000      | 0.358        | -                | 0.480 (0.172)    | 0 (0.000) |     4.34 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           92 |      683 | 2024-06-14 | 3DMAX             | L   | 0.933      | -            | -                | -                | -         |   -14.96 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           91 |      719 | 2024-06-13 | Sampi             | W   | 0.926      | -            | -                | -                | 0 (0.000) |     3.66 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           90 |      742 | 2024-06-12 | CPH Wolves        | W   | 0.920      | -            | -                | -                | 0 (0.000) |     2.60 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           89 |      747 | 2024-06-12 | Astralis Talent   | W   | 0.919      | -            | -                | -                | 0 (0.000) |     2.10 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           88 |     1011 | 2024-06-06 | Ninjas in Pyjamas | L   | 0.880      | -            | -                | -                | -         |    -2.89 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           87 |     1043 | 2024-06-06 | HEROIC            | L   | 0.878      | -            | -                | -                | -         |    -2.95 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           86 |     1076 | 2024-06-05 | ENCE              | L   | 0.873      | -            | -                | -                | -         |   -10.93 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           85 |     1090 | 2024-06-05 | Astralis          | W   | 0.872      | 0.715        | 0.457 (0.285)    | 0.398 (0.248)    | 1 (0.872) |    26.10 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           84 |     1098 | 2024-06-05 | The MongolZ       | L   | 0.871      | -            | -                | -                | -         |    -0.67 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           83 |     1531 | 2024-05-20 | Monte             | L   | 0.765      | -            | -                | -                | -         |   -18.52 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           82 |     1546 | 2024-05-19 | Passion UA        | W   | 0.760      | 0.500        | 0.163 (0.062)    | 1.000 (0.380)    | 0 (0.000) |     5.87 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           81 |     1573 | 2024-05-18 | B8                | L   | 0.753      | -            | -                | -                | -         |   -14.16 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           80 |     1584 | 2024-05-18 | Monte             | W   | 0.752      | -            | -                | -                | 0 (0.000) |     5.12 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           79 |     1590 | 2024-05-18 | ALTERNATE aTTaX   | W   | 0.751      | 0.500        | -                | 0.638 (0.240)    | -         |     4.25 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           78 |     1623 | 2024-05-17 | ex-Guild Eagles   | W   | 0.745      | -            | -                | -                | -         |     2.81 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           77 |     1660 | 2024-05-16 | Passion UA        | L   | 0.738      | -            | -                | -                | -         |   -18.14 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           76 |     1708 | 2024-05-15 | Endpoint          | W   | 0.731      | -            | -                | -                | -         |     3.80 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           75 |     1880 | 2024-05-09 | 1WIN              | W   | 0.692      | -            | -                | -                | -         |     4.20 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           74 |     1903 | 2024-05-08 | Grannys Knockers  | W   | 0.686      | -            | -                | -                | -         |     1.94 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           73 |     1921 | 2024-05-07 | 9 Pandas          | W   | 0.679      | 0.396        | -                | 0.578 (0.156)    | -         |     5.62 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           72 |     1935 | 2024-05-06 | ALTERNATE aTTaX   | W   | 0.673      | 0.396        | -                | 0.638 (0.170)    | -         |     4.68 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           71 |     1949 | 2024-05-05 | Gaimin Gladiators | L   | 0.667      | -            | -                | -                | -         |   -15.17 | Cabbi, IceBerg, kwezz, Lucky, PR1mE   |
|           70 |     1959 | 2024-05-05 | Come on now dawg  | W   | 0.666      | -            | -                | -                | -         |     0.20 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           69 |     2008 | 2024-05-02 | fnatic            | W   | 0.647      | 0.384        | 0.428 (0.106)    | 0.666 (0.166)    | -         |    17.39 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           68 |     2042 | 2024-05-01 | 3DMAX             | W   | 0.639      | 0.384        | 0.175 (0.043)    | 1.000 (0.245)    | -         |    11.72 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           67 |     2059 | 2024-04-30 | OG                | W   | 0.633      | 0.384        | 0.170 (0.041)    | -                | -         |     8.13 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           66 |     2087 | 2024-04-29 | 500               | W   | 0.625      | -            | -                | -                | -         |     1.55 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           65 |     2115 | 2024-04-27 | 777               | W   | 0.614      | -            | -                | -                | -         |     1.33 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           64 |     2119 | 2024-04-27 | JANO              | W   | 0.613      | -            | -                | -                | -         |     1.14 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           63 |     2184 | 2024-04-25 | Passion UA        | W   | 0.598      | 0.384        | 0.163 (0.037)    | 1.000 (0.230)    | -         |     5.03 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           62 |     2218 | 2024-04-23 | Gaimin Gladiators | W   | 0.586      | -            | -                | -                | -         |     7.18 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           61 |     2222 | 2024-04-23 | BLEED             | W   | 0.585      | 0.384        | 0.126 (0.028)    | -                | -         |     7.45 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           60 |     2269 | 2024-04-20 | Eternal Fire      | W   | 0.567      | 0.143        | 0.833 (0.067)    | -                | -         |    16.99 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           59 |     2283 | 2024-04-20 | Cloud9            | W   | 0.566      | -            | -                | -                | -         |     9.31 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           58 |     2319 | 2024-04-19 | Eternal Fire      | L   | 0.560      | -            | -                | -                | -         |    -0.79 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           57 |     2328 | 2024-04-19 | Cloud9            | W   | 0.559      | -            | -                | -                | -         |     9.28 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           56 |     2355 | 2024-04-18 | ex-Guild Eagles   | W   | 0.554      | -            | -                | -                | -         |     3.37 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           55 |     2362 | 2024-04-18 | RUBY              | W   | 0.553      | -            | -                | -                | -         |     5.30 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           54 |     2370 | 2024-04-18 | GamerLegion       | W   | 0.553      | -            | -                | -                | -         |     9.87 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           53 |     2412 | 2024-04-17 | Passion UA        | L   | 0.546      | -            | -                | -                | -         |   -10.85 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           52 |     2448 | 2024-04-16 | ex-Guild Eagles   | L   | 0.539      | -            | -                | -                | -         |   -14.08 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           51 |     2470 | 2024-04-15 | ex-Preasy         | W   | 0.532      | -            | -                | -                | -         |     3.17 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           50 |     2487 | 2024-04-14 | UNiTY             | W   | 0.524      | -            | -                | -                | -         |     5.15 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           49 |     2545 | 2024-04-11 | Enterprise        | W   | 0.505      | -            | -                | -                | -         |     4.24 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           48 |     2587 | 2024-04-10 | Passion UA        | L   | 0.499      | -            | -                | -                | -         |   -10.19 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           47 |     2721 | 2024-04-06 | UNiTY             | W   | 0.471      | -            | -                | -                | -         |     4.81 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           46 |     2778 | 2024-04-04 | UNiTY             | W   | 0.458      | -            | -                | -                | -         |     4.67 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           45 |     2862 | 2024-04-02 | Permitta          | W   | 0.444      | -            | -                | -                | -         |     4.04 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           44 |     2871 | 2024-04-01 | Nexus             | L   | 0.438      | -            | -                | -                | -         |   -11.24 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           43 |     2945 | 2024-03-27 | Rebels            | L   | 0.407      | -            | -                | -                | -         |    -8.44 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           42 |     2979 | 2024-03-25 | Nexus             | W   | 0.393      | -            | -                | -                | -         |     2.20 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           41 |     3004 | 2024-03-22 | Nemiga            | W   | 0.374      | 0.372        | 0.415 (0.058)    | -                | -         |     6.97 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           40 |     3069 | 2024-03-19 | RUBY              | W   | 0.354      | -            | -                | -                | -         |     3.09 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           39 |     3081 | 2024-03-18 | Insilio           | W   | 0.346      | -            | -                | -                | -         |     2.62 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           38 |     3150 | 2024-03-15 | ECLOT             | W   | 0.325      | -            | -                | -                | -         |     5.13 | Cabbi, IceBerg, larsen, Lucky, MistR  |
|           37 |     3219 | 2024-03-13 | BLEED             | L   | 0.312      | -            | -                | -                | -         |    -6.37 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           36 |     3267 | 2024-03-11 | Nemiga            | L   | 0.300      | -            | -                | -                | -         |    -3.73 | Cabbi, IceBerg, larsen, Lucky, MistR  |
|           35 |     3292 | 2024-03-10 | Sampi             | L   | 0.292      | -            | -                | -                | -         |    -7.21 | Cabbi, IceBerg, Kristou, Lucky, MistR |
|           34 |     3318 | 2024-03-09 | Permitta          | W   | 0.285      | -            | -                | -                | -         |     2.43 | Cabbi, IceBerg, larsen, Lucky, MistR  |
|           33 |     3337 | 2024-03-08 | ALTERNATE aTTaX   | L   | 0.278      | -            | -                | -                | -         |    -5.96 | Cabbi, IceBerg, larsen, Lucky, MistR  |
|           32 |     3349 | 2024-03-07 | Insilio           | W   | 0.274      | -            | -                | -                | -         |     1.90 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           31 |     3361 | 2024-03-07 | ex-sYnck          | W   | 0.273      | -            | -                | -                | -         |     0.23 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           30 |     3394 | 2024-03-06 | Alliance          | W   | 0.265      | -            | -                | -                | -         |     1.51 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           29 |     3428 | 2024-03-05 | Johnny Speeds     | L   | 0.260      | -            | -                | -                | -         |    -2.06 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           28 |     3436 | 2024-03-05 | ALTERNATE aTTaX   | L   | 0.258      | -            | -                | -                | -         |    -5.65 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           27 |     3452 | 2024-03-04 | Entropiq          | L   | 0.251      | -            | -                | -                | -         |    -7.62 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           26 |     3496 | 2024-03-02 | brazylijski luz   | W   | 0.239      | -            | -                | -                | -         |     0.97 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           25 |     3531 | 2024-02-29 | JANO              | W   | 0.225      | -            | -                | -                | -         |     0.49 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           24 |     3539 | 2024-02-28 | Sampi             | W   | 0.219      | -            | -                | -                | -         |     1.40 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           23 |     3556 | 2024-02-27 | V1dar             | L   | 0.213      | -            | -                | -                | -         |    -6.52 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           22 |     3597 | 2024-02-25 | Sangal            | L   | 0.201      | -            | -                | -                | -         |    -3.63 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           21 |     3603 | 2024-02-25 | PGE Turow         | L   | 0.199      | -            | -                | -                | -         |    -5.90 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           20 |     3643 | 2024-02-24 | MOUZ NXT          | L   | 0.191      | -            | -                | -                | -         |    -3.93 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           19 |     3695 | 2024-02-21 | Sampi             | W   | 0.172      | -            | -                | -                | -         |     1.02 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           18 |     3790 | 2024-02-17 | Zero Tenacity     | W   | 0.146      | -            | -                | -                | -         |     1.86 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           17 |     3939 | 2024-02-11 | ARCRED            | W   | 0.106      | -            | -                | -                | -         |     0.51 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           16 |     3941 | 2024-02-10 | Nemiga            | L   | 0.101      | -            | -                | -                | -         |    -1.43 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           15 |     3944 | 2024-02-10 | AMKAL             | W   | 0.100      | -            | -                | -                | -         |     1.29 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           14 |     3958 | 2024-02-09 | FORZE             | W   | 0.094      | -            | -                | -                | -         |     0.60 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           13 |     3963 | 2024-02-09 | Insilio           | W   | 0.093      | -            | -                | -                | -         |     0.56 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           12 |     3972 | 2024-02-08 | Nemiga            | L   | 0.087      | -            | -                | -                | -         |    -1.24 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           11 |     3975 | 2024-02-08 | FORZE             | W   | 0.086      | -            | -                | -                | -         |     0.54 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           10 |     4007 | 2024-02-05 | Entropiq          | W   | 0.065      | -            | -                | -                | -         |     0.07 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            9 |     4024 | 2024-02-04 | TMVG              | L   | 0.059      | -            | -                | -                | -         |    -1.82 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            8 |     4040 | 2024-02-03 | showmakerz        | W   | 0.054      | -            | -                | -                | -         |     0.02 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            7 |     4046 | 2024-02-03 | Gaimin Gladiators | W   | 0.053      | -            | -                | -                | -         |     0.53 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            6 |     4057 | 2024-02-03 | Sampi             | L   | 0.052      | -            | -                | -                | -         |    -1.33 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            5 |     4077 | 2024-02-02 | EYEBALLERS        | L   | 0.047      | -            | -                | -                | -         |    -1.20 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            4 |     4132 | 2024-01-31 | Permitta          | L   | 0.033      | -            | -                | -                | -         |    -0.81 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            3 |     4143 | 2024-01-30 | Insilio           | W   | 0.028      | -            | -                | -                | -         |     0.17 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            2 |     4145 | 2024-01-30 | FORZE             | W   | 0.027      | -            | -                | -                | -         |     0.01 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            1 |     4153 | 2024-01-30 | RUSH B            | W   | 0.026      | -            | -                | -                | -         |     0.11 | Cabbi, IceBerg, kwezz, Lucky, MistR   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($64,586.09)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.23) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-07-13 |      1.000 | $3,216.00      | $3,216.00       |
| 2024-06-12 |      0.920 | $9,365.00      | $8,615.58       |
| 2024-06-09 |      0.900 | $8,000.00      | $7,197.97       |
| 2024-05-18 |      0.753 | $5,000.00      | $3,767.35       |
| 2024-05-09 |      0.692 | $14,000.00     | $9,686.28       |
| 2024-05-02 |      0.647 | $12,500.00     | $8,082.76       |
| 2024-04-27 |      0.614 | $6,375.00      | $3,912.12       |
| 2024-04-06 |      0.471 | $5,000.00      | $2,355.19       |
| 2024-03-25 |      0.393 | $7,000.00      | $2,752.84       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
