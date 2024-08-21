### Roster Details<br />
Team Name: Sashi<br />
Roster: Cabbi, IceBerg, kwezz, Lucky, MistR<br />
Global Rank: [38](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_21.md)<br />
Regional Rank: [29]( ../../standings_europe_2024_08_21.md)<br />
<br />
Final Rank Value:  1112.7<br />
<br />
Final Rank Value (1112.7) = Starting Rank Value (1127.9) + Head To Head Adjustments (-15.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.573[<sup>1</sup>](#table2)
- Bounty Collected: 0.468[<sup>2</sup>](#table1)
- Opponent Network: 0.237[<sup>2</sup>](#table1)
- LAN Wins: 0.189[<sup>2</sup>](#table1)

The average of these factors is 0.367<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1127.9
- 400 + ( ( 0.367 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 1127.9


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
|           98 |        6 | 2024-08-21 | AMKAL             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.22 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           97 |       41 | 2024-08-21 | Qiang             | L   | 1.000      | -            | -                | -                | -         |   -22.16 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           96 |       98 | 2024-08-19 | B8                | L   | 1.000      | -            | -                | -                | -         |   -15.87 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           95 |      102 | 2024-08-19 | Metizport         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.40 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           94 |      109 | 2024-08-19 | Aurora            | W   | 1.000      | 0.500        | 0.372 (0.186)    | 0.643 (0.321)    | 0 (0.000) |    24.43 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           93 |      313 | 2024-08-12 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -2.89 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           92 |      363 | 2024-08-10 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -22.37 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           91 |      397 | 2024-08-09 | Qiang             | W   | 1.000      | 0.426        | -                | 0.436 (0.186)    | 0 (0.000) |     8.54 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           90 |      445 | 2024-08-07 | 1WIN              | W   | 1.000      | 0.426        | -                | 0.644 (0.274)    | 0 (0.000) |    10.71 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           89 |      496 | 2024-08-06 | KOI               | W   | 1.000      | 0.500        | 0.051 (0.025)    | 0.377 (0.189)    | 0 (0.000) |    11.97 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           88 |      529 | 2024-08-05 | ECSTATIC          | L   | 1.000      | -            | -                | -                | -         |   -29.26 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           87 |      534 | 2024-08-05 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -21.50 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           86 |      539 | 2024-08-05 | ECSTATIC          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.61 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           85 |      720 | 2024-07-31 | Insilio           | W   | 1.000      | 0.500        | -                | 0.482 (0.241)    | 0 (0.000) |     7.07 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           84 |      756 | 2024-07-30 | EYEBALLERS        | W   | 1.000      | 0.500        | -                | 0.550 (0.275)    | -         |     3.71 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           83 |      771 | 2024-07-30 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -16.63 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           82 |      947 | 2024-07-24 | Monte             | W   | 1.000      | 0.500        | -                | 0.435 (0.217)    | -         |     5.59 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           81 |     1172 | 2024-07-18 | FURIA             | L   | 0.972      | -            | -                | -                | -         |    -2.75 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           80 |     1181 | 2024-07-18 | JiJieHao          | W   | 0.971      | 1.000        | 0.032 (0.031)    | -                | 1 (0.971) |     1.32 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           79 |     1244 | 2024-07-17 | MOUZ              | L   | 0.965      | -            | -                | -                | -         |    -0.50 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           78 |     1379 | 2024-07-13 | TSM               | L   | 0.939      | -            | -                | -                | -         |   -19.01 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           77 |     1387 | 2024-07-12 | FLuffy Gangsters  | W   | 0.932      | -            | -                | -                | -         |     1.53 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           76 |     1405 | 2024-07-11 | Endpoint          | W   | 0.925      | 0.358        | -                | 0.605 (0.200)    | -         |     6.40 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           75 |     1429 | 2024-07-10 | Johnny Speeds     | L   | 0.918      | -            | -                | -                | -         |   -12.89 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           74 |     1432 | 2024-07-10 | 9INE              | W   | 0.917      | 0.358        | -                | 0.550 (0.180)    | -         |     5.32 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           73 |     1633 | 2024-06-14 | 3DMAX             | L   | 0.745      | -            | -                | -                | -         |    -4.21 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           72 |     1669 | 2024-06-13 | Sampi             | W   | 0.738      | -            | -                | -                | -         |     3.45 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           71 |     1692 | 2024-06-12 | CPH Wolves        | W   | 0.733      | -            | -                | -                | -         |     2.29 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           70 |     1697 | 2024-06-12 | Astralis Talent   | W   | 0.732      | -            | -                | -                | -         |     1.65 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           69 |     1961 | 2024-06-06 | Ninjas in Pyjamas | L   | 0.693      | -            | -                | -                | -         |    -3.18 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           68 |     1993 | 2024-06-06 | HEROIC            | L   | 0.691      | -            | -                | -                | -         |    -3.42 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           67 |     2026 | 2024-06-05 | ENCE              | L   | 0.686      | -            | -                | -                | -         |    -7.66 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           66 |     2040 | 2024-06-05 | Astralis          | W   | 0.685      | 0.715        | 0.403 (0.197)    | -                | 1 (0.685) |    20.47 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           65 |     2048 | 2024-06-05 | The MongolZ       | L   | 0.684      | -            | -                | -                | -         |    -0.41 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           64 |     2481 | 2024-05-20 | Monte             | L   | 0.578      | -            | -                | -                | -         |   -11.80 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           63 |     2496 | 2024-05-19 | Passion UA        | W   | 0.573      | 0.500        | 0.170 (0.049)    | 1.000 (0.286)    | -         |     5.37 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           62 |     2523 | 2024-05-18 | B8                | L   | 0.566      | -            | -                | -                | -         |   -10.82 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           61 |     2534 | 2024-05-18 | Monte             | W   | 0.565      | -            | -                | -                | -         |     6.18 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           60 |     2540 | 2024-05-18 | ALTERNATE aTTaX   | W   | 0.564      | -            | -                | -                | -         |     3.62 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           59 |     2573 | 2024-05-17 | ex-Guild Eagles   | W   | 0.557      | -            | -                | -                | -         |     1.82 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           58 |     2610 | 2024-05-16 | Passion UA        | L   | 0.551      | -            | -                | -                | -         |   -12.49 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           57 |     2658 | 2024-05-15 | Endpoint          | W   | 0.544      | -            | -                | -                | -         |     4.84 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           56 |     2830 | 2024-05-09 | 1WIN              | W   | 0.505      | -            | -                | -                | -         |     3.51 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           55 |     2853 | 2024-05-08 | Grannys Knockers  | W   | 0.498      | -            | -                | -                | -         |     1.44 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           54 |     2871 | 2024-05-07 | 9 Pandas          | W   | 0.492      | -            | -                | -                | -         |     4.08 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           53 |     2885 | 2024-05-06 | ALTERNATE aTTaX   | W   | 0.486      | -            | -                | -                | -         |     3.60 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           52 |     2899 | 2024-05-05 | Gaimin Gladiators | L   | 0.480      | -            | -                | -                | -         |   -12.26 | Cabbi, IceBerg, kwezz, Lucky, PR1mE   |
|           51 |     2909 | 2024-05-05 | Come on now dawg  | W   | 0.478      | -            | -                | -                | -         |     0.19 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           50 |     2958 | 2024-05-02 | fnatic            | W   | 0.459      | 0.384        | 0.348 (0.062)    | -                | -         |    11.72 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           49 |     2992 | 2024-05-01 | 3DMAX             | W   | 0.451      | 0.384        | 0.519 (0.090)    | -                | -         |    13.15 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           48 |     3009 | 2024-04-30 | OG                | W   | 0.445      | -            | -                | -                | -         |     4.49 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           47 |     3037 | 2024-04-29 | 500               | W   | 0.438      | -            | -                | -                | -         |     1.00 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           46 |     3065 | 2024-04-27 | 777               | W   | 0.426      | -            | -                | -                | -         |     0.98 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           45 |     3069 | 2024-04-27 | JANO              | W   | 0.426      | -            | -                | -                | -         |     0.87 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           44 |     3134 | 2024-04-25 | Passion UA        | W   | 0.411      | 0.384        | 0.170 (0.027)    | -                | -         |     4.25 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           43 |     3168 | 2024-04-23 | Gaimin Gladiators | W   | 0.398      | -            | -                | -                | -         |     2.92 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           42 |     3172 | 2024-04-23 | BLEED             | W   | 0.398      | -            | -                | -                | -         |     3.68 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           41 |     3219 | 2024-04-20 | Eternal Fire      | W   | 0.380      | 0.143        | 0.682 (0.037)    | -                | -         |    11.36 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           40 |     3233 | 2024-04-20 | Cloud9            | W   | 0.378      | -            | -                | -                | -         |     3.18 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           39 |     3269 | 2024-04-19 | Eternal Fire      | L   | 0.373      | -            | -                | -                | -         |    -0.57 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           38 |     3278 | 2024-04-19 | Cloud9            | W   | 0.372      | -            | -                | -                | -         |     3.06 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           37 |     3305 | 2024-04-18 | ex-Guild Eagles   | W   | 0.367      | -            | -                | -                | -         |     1.57 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           36 |     3312 | 2024-04-18 | RUBY              | W   | 0.366      | -            | -                | -                | -         |     2.98 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           35 |     3320 | 2024-04-18 | GamerLegion       | W   | 0.366      | -            | -                | -                | -         |     5.31 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           34 |     3362 | 2024-04-17 | Passion UA        | L   | 0.359      | -            | -                | -                | -         |    -6.93 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           33 |     3398 | 2024-04-16 | ex-Guild Eagles   | L   | 0.352      | -            | -                | -                | -         |    -9.73 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           32 |     3420 | 2024-04-15 | ex-Preasy         | W   | 0.345      | -            | -                | -                | -         |     1.21 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           31 |     3437 | 2024-04-14 | UNiTY             | W   | 0.337      | -            | -                | -                | -         |     2.95 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           30 |     3495 | 2024-04-11 | Enterprise        | W   | 0.318      | -            | -                | -                | -         |     2.33 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           29 |     3537 | 2024-04-10 | Passion UA        | L   | 0.311      | -            | -                | -                | -         |    -6.19 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           28 |     3671 | 2024-04-06 | UNiTY             | W   | 0.284      | -            | -                | -                | -         |     2.52 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           27 |     3728 | 2024-04-04 | UNiTY             | W   | 0.271      | -            | -                | -                | -         |     2.38 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           26 |     3812 | 2024-04-02 | Permitta          | W   | 0.257      | -            | -                | -                | -         |     2.40 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           25 |     3821 | 2024-04-01 | Nexus             | L   | 0.251      | -            | -                | -                | -         |    -6.60 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           24 |     3895 | 2024-03-27 | Rebels            | L   | 0.219      | -            | -                | -                | -         |    -4.93 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           23 |     3929 | 2024-03-25 | Nexus             | W   | 0.206      | -            | -                | -                | -         |     1.05 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           22 |     3954 | 2024-03-22 | Nemiga            | W   | 0.186      | 0.372        | 0.355 (0.025)    | -                | -         |     3.58 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           21 |     4019 | 2024-03-19 | RUBY              | W   | 0.167      | -            | -                | -                | -         |     1.24 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           20 |     4031 | 2024-03-18 | Insilio           | W   | 0.159      | -            | -                | -                | -         |     1.08 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           19 |     4100 | 2024-03-15 | ECLOT             | W   | 0.137      | -            | -                | -                | -         |     2.71 | Cabbi, IceBerg, larsen, Lucky, MistR  |
|           18 |     4169 | 2024-03-13 | BLEED             | L   | 0.124      | -            | -                | -                | -         |    -3.01 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           17 |     4217 | 2024-03-11 | Nemiga            | L   | 0.112      | -            | -                | -                | -         |    -1.36 | Cabbi, IceBerg, larsen, Lucky, MistR  |
|           16 |     4242 | 2024-03-10 | Sampi             | L   | 0.105      | -            | -                | -                | -         |    -2.68 | Cabbi, IceBerg, Kristou, Lucky, MistR |
|           15 |     4268 | 2024-03-09 | Permitta          | W   | 0.098      | -            | -                | -                | -         |     0.89 | Cabbi, IceBerg, larsen, Lucky, MistR  |
|           14 |     4287 | 2024-03-08 | ALTERNATE aTTaX   | L   | 0.090      | -            | -                | -                | -         |    -2.05 | Cabbi, IceBerg, larsen, Lucky, MistR  |
|           13 |     4299 | 2024-03-07 | Insilio           | W   | 0.087      | -            | -                | -                | -         |     0.57 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           12 |     4311 | 2024-03-07 | ex-sYnck          | W   | 0.085      | -            | -                | -                | -         |     0.07 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           11 |     4344 | 2024-03-06 | Alliance          | W   | 0.078      | -            | -                | -                | -         |     0.39 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           10 |     4378 | 2024-03-05 | Johnny Speeds     | L   | 0.072      | -            | -                | -                | -         |    -0.79 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            9 |     4386 | 2024-03-05 | ALTERNATE aTTaX   | L   | 0.071      | -            | -                | -                | -         |    -1.61 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            8 |     4402 | 2024-03-04 | Entropiq          | L   | 0.064      | -            | -                | -                | -         |    -1.95 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            7 |     4446 | 2024-03-02 | brazylijski luz   | W   | 0.052      | -            | -                | -                | -         |     0.19 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            6 |     4481 | 2024-02-29 | JANO              | W   | 0.037      | -            | -                | -                | -         |     0.08 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            5 |     4489 | 2024-02-28 | Sampi             | W   | 0.032      | -            | -                | -                | -         |     0.18 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            4 |     4506 | 2024-02-27 | NewBALLS          | L   | 0.026      | -            | -                | -                | -         |    -0.79 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            3 |     4547 | 2024-02-25 | Sangal            | L   | 0.013      | -            | -                | -                | -         |    -0.18 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            2 |     4553 | 2024-02-25 | PGE Turow         | L   | 0.011      | -            | -                | -                | -         |    -0.34 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            1 |     4593 | 2024-02-24 | MOUZ NXT          | L   | 0.004      | -            | -                | -                | -         |    -0.08 | Cabbi, IceBerg, kwezz, Lucky, MistR   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($55,277.95)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-11 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-07-21 |      0.993 | $15,000.00     | $14,900.36      |
| 2024-07-13 |      0.939 | $3,216.00      | $3,018.37       |
| 2024-06-12 |      0.733 | $9,365.00      | $6,861.80       |
| 2024-06-09 |      0.712 | $8,000.00      | $5,699.81       |
| 2024-05-18 |      0.566 | $5,000.00      | $2,831.00       |
| 2024-05-09 |      0.505 | $14,000.00     | $7,064.50       |
| 2024-05-02 |      0.459 | $12,500.00     | $5,741.89       |
| 2024-04-27 |      0.426 | $6,375.00      | $2,718.27       |
| 2024-03-25 |      0.206 | $7,000.00      | $1,441.95       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
