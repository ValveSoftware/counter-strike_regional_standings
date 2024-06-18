### Roster Details<br />
Team Name: Sashi<br />
Roster: Cabbi, IceBerg, kwezz, Lucky, MistR<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [31](../standings_global.md)<br />
Regional Rank: [21]( ../standings_europe.md)<br />
Final Rank Value:  1265.3<br />
<br />
Final Rank Value (1265.3) = Starting Rank Value (1158.8) + Head To Head Adjustments (106.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.588[<sup>1</sup>](#table2)
- Bounty Collected: 0.512[<sup>2</sup>](#table1)
- Opponent Network: 0.289[<sup>2</sup>](#table1)
- LAN Wins: 0.104[<sup>2</sup>](#table1)

The average of these factors is 0.373<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1158.8
- 400 + ( ( 0.373 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1158.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           97 |       95 | 2024-06-14 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -17.29 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           96 |      131 | 2024-06-13 | Sampi             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.16 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           95 |      154 | 2024-06-12 | CPH Wolves        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.36 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           94 |      159 | 2024-06-12 | Astralis Talent   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.67 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           93 |      423 | 2024-06-06 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -4.22 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           92 |      455 | 2024-06-06 | HEROIC            | L   | 1.000      | -            | -                | -                | -         |    -2.89 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           91 |      488 | 2024-06-05 | ENCE              | L   | 1.000      | -            | -                | -                | -         |   -12.59 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           90 |      502 | 2024-06-05 | Astralis          | W   | 1.000      | 0.715        | 0.533 (0.381)    | 0.501 (0.358)    | 1 (1.000) |    30.45 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           89 |      510 | 2024-06-05 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -1.16 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           88 |      945 | 2024-05-20 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -14.89 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           87 |      960 | 2024-05-19 | Passion UA        | W   | 1.000      | 0.500        | 0.086 (0.043)    | 0.803 (0.401)    | 0 (0.000) |     5.61 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           86 |      987 | 2024-05-18 | B8                | L   | 0.996      | -            | -                | -                | -         |   -18.21 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           85 |      998 | 2024-05-18 | Monte             | W   | 0.995      | 0.384        | 0.189 (0.072)    | 0.674 (0.258)    | 0 (0.000) |    16.02 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           84 |     1004 | 2024-05-18 | ALTERNATE aTTaX   | W   | 0.994      | 0.500        | -                | 0.573 (0.285)    | 0 (0.000) |     4.64 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           83 |     1037 | 2024-05-17 | ex-Guild Eagles   | W   | 0.987      | -            | -                | -                | 0 (0.000) |     4.08 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           82 |     1074 | 2024-05-16 | Passion UA        | L   | 0.981      | -            | -                | -                | -         |   -26.05 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           81 |     1122 | 2024-05-15 | Endpoint          | W   | 0.974      | -            | -                | -                | 0 (0.000) |     4.45 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           80 |     1294 | 2024-05-09 | 1WIN              | W   | 0.934      | 0.396        | -                | 0.592 (0.219)    | 0 (0.000) |     6.34 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           79 |     1317 | 2024-05-08 | Grannys Knockers  | W   | 0.928      | -            | -                | -                | -         |     2.45 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           78 |     1335 | 2024-05-07 | 9 Pandas          | W   | 0.922      | 0.396        | 0.114 (0.042)    | 0.663 (0.242)    | -         |     8.32 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           77 |     1349 | 2024-05-06 | ALTERNATE aTTaX   | W   | 0.916      | -            | -                | -                | -         |     5.49 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           76 |     1363 | 2024-05-05 | Gaimin Gladiators | L   | 0.909      | -            | -                | -                | -         |   -18.14 | Cabbi, IceBerg, kwezz, Lucky, PR1mE       |
|           75 |     1373 | 2024-05-05 | Come on now dawg  | W   | 0.908      | -            | -                | -                | -         |     0.20 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           74 |     1422 | 2024-05-02 | fnatic            | W   | 0.889      | 0.384        | 0.290 (0.099)    | 0.666 (0.228)    | -         |    20.85 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           73 |     1456 | 2024-05-01 | 3DMAX             | W   | 0.881      | 0.384        | 0.186 (0.063)    | 1.000 (0.339)    | -         |    15.17 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           72 |     1473 | 2024-04-30 | OG                | W   | 0.875      | 0.384        | 0.235 (0.079)    | -                | -         |    15.72 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           71 |     1501 | 2024-04-29 | 500               | W   | 0.867      | -            | -                | -                | -         |     2.34 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           70 |     1529 | 2024-04-27 | 777               | W   | 0.856      | -            | -                | -                | -         |     1.56 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           69 |     1533 | 2024-04-27 | JANO              | W   | 0.856      | -            | -                | -                | -         |     1.34 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           68 |     1598 | 2024-04-25 | Passion UA        | W   | 0.841      | 0.384        | -                | 0.803 (0.259)    | -         |     4.89 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           67 |     1632 | 2024-04-23 | Gaimin Gladiators | W   | 0.828      | -            | -                | -                | -         |    14.61 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           66 |     1636 | 2024-04-23 | BLEED             | W   | 0.828      | 0.384        | 0.347 (0.110)    | 0.946 (0.301)    | -         |    19.28 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           65 |     1683 | 2024-04-20 | Eternal Fire      | W   | 0.810      | 0.143        | 1.000 (0.116)    | -                | -         |    24.85 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           64 |     1697 | 2024-04-20 | Cloud9            | W   | 0.808      | -            | -                | -                | -         |    19.95 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           63 |     1733 | 2024-04-19 | Eternal Fire      | L   | 0.803      | -            | -                | -                | -         |    -0.53 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           62 |     1742 | 2024-04-19 | Cloud9            | W   | 0.802      | -            | -                | -                | -         |    20.31 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           61 |     1769 | 2024-04-18 | ex-Guild Eagles   | W   | 0.796      | -            | -                | -                | -         |     7.39 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           60 |     1776 | 2024-04-18 | RUBY              | W   | 0.796      | -            | -                | -                | -         |     8.71 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           59 |     1784 | 2024-04-18 | GamerLegion       | W   | 0.795      | -            | -                | -                | -         |    17.81 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           58 |     1826 | 2024-04-17 | Passion UA        | L   | 0.788      | -            | -                | -                | -         |   -16.53 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           57 |     1862 | 2024-04-16 | ex-Guild Eagles   | L   | 0.782      | -            | -                | -                | -         |   -17.97 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           56 |     1884 | 2024-04-15 | ex-Preasy         | W   | 0.775      | -            | -                | -                | -         |     7.97 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           55 |     1901 | 2024-04-14 | UNiTY             | W   | 0.767      | -            | -                | -                | -         |     8.33 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           54 |     1959 | 2024-04-11 | Enterprise        | W   | 0.747      | -            | -                | -                | -         |     8.84 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           53 |     2001 | 2024-04-10 | Passion UA        | L   | 0.741      | -            | -                | -                | -         |   -16.13 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           52 |     2135 | 2024-04-06 | UNiTY             | W   | 0.714      | -            | -                | -                | -         |     8.25 | K1-FiDa, Levi, M1key, NIO, Pechyn         |
|           51 |     2192 | 2024-04-04 | UNiTY             | W   | 0.701      | -            | -                | -                | -         |     8.12 | K1-FiDa, Levi, M1key, NIO, Pechyn         |
|           50 |     2276 | 2024-04-02 | Permitta          | W   | 0.687      | -            | -                | -                | -         |     7.87 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           49 |     2285 | 2024-04-01 | Nexus             | L   | 0.681      | -            | -                | -                | -         |   -16.36 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           48 |     2360 | 2024-03-27 | Rebels            | L   | 0.649      | -            | -                | -                | -         |   -10.91 | casey, Flayy, innocent, kisserek, olimp   |
|           47 |     2394 | 2024-03-25 | Nexus             | W   | 0.636      | -            | -                | -                | -         |     4.44 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           46 |     2419 | 2024-03-22 | Nemiga            | W   | 0.616      | 0.372        | 0.486 (0.112)    | -                | -         |    14.17 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           45 |     2484 | 2024-03-19 | RUBY              | W   | 0.596      | -            | -                | -                | -         |     6.36 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           44 |     2496 | 2024-03-18 | Insilio           | W   | 0.589      | -            | -                | -                | -         |     6.17 | faydett, FpSSS, Pipw, Polt, sugaR         |
|           43 |     2565 | 2024-03-15 | ECLOT             | W   | 0.567      | -            | -                | -                | -         |    10.92 | Blytz, Dytor, forsyy, kreaz, nbqq         |
|           42 |     2634 | 2024-03-13 | BLEED             | L   | 0.554      | -            | -                | -                | -         |    -2.76 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           41 |     2682 | 2024-03-11 | Nemiga            | L   | 0.542      | -            | -                | -                | -         |    -3.91 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r      |
|           40 |     2707 | 2024-03-10 | Sampi             | L   | 0.535      | -            | -                | -                | -         |   -11.67 | Cabbi, IceBerg, Kristou, Lucky, MistR     |
|           39 |     2733 | 2024-03-09 | Permitta          | W   | 0.528      | -            | -                | -                | -         |     6.04 | Cabbi, IceBerg, larsen, Lucky, MistR      |
|           38 |     2752 | 2024-03-08 | ALTERNATE aTTaX   | L   | 0.520      | -            | -                | -                | -         |   -10.22 | ArroW, awzek, FreeZe, hyped, skyye        |
|           37 |     2764 | 2024-03-07 | Insilio           | W   | 0.517      | -            | -                | -                | -         |     5.06 | faydett, FpSSS, Pipw, Polt, sugaR         |
|           36 |     2776 | 2024-03-07 | ex-sYnck          | W   | 0.515      | -            | -                | -                | -         |     0.64 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           35 |     2809 | 2024-03-06 | Alliance          | W   | 0.507      | -            | -                | -                | -         |     3.97 | avid, b0denmaster, PlesseN, robiin, twist |
|           34 |     2843 | 2024-03-05 | Johnny Speeds     | L   | 0.502      | -            | -                | -                | -         |    -3.92 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           33 |     2851 | 2024-03-05 | ALTERNATE aTTaX   | L   | 0.500      | -            | -                | -                | -         |   -10.22 | ArroW, awzek, FreeZe, hyped, skyye        |
|           32 |     2867 | 2024-03-04 | Entropiq          | L   | 0.494      | -            | -                | -                | -         |   -14.60 | c0llins, Marix, mwlky, oxygeN, tiziaN     |
|           31 |     2911 | 2024-03-02 | brazylijski luz   | W   | 0.482      | -            | -                | -                | -         |     2.15 | Furlan, phr, POLO, Prism, Qlocuu          |
|           30 |     2946 | 2024-02-29 | JANO              | W   | 0.467      | -            | -                | -                | -         |     1.32 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           29 |     2954 | 2024-02-28 | Sampi             | W   | 0.462      | -            | -                | -                | -         |     4.11 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           28 |     2971 | 2024-02-27 | V1dar             | L   | 0.456      | -            | -                | -                | -         |   -13.82 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           27 |     3012 | 2024-02-25 | Sangal            | L   | 0.443      | -            | -                | -                | -         |    -6.77 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           26 |     3018 | 2024-02-25 | PGE Turow         | L   | 0.441      | -            | -                | -                | -         |   -12.89 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           25 |     3058 | 2024-02-24 | MOUZ NXT          | L   | 0.434      | -            | -                | -                | -         |    -7.74 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           24 |     3110 | 2024-02-21 | Sampi             | W   | 0.415      | -            | -                | -                | -         |     3.22 | fino, manguss, sAvana1, The eLiVe, ZEDKO  |
|           23 |     3205 | 2024-02-17 | Zero Tenacity     | W   | 0.389      | -            | -                | -                | -         |     5.15 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           22 |     3354 | 2024-02-11 | ARCRED            | W   | 0.348      | -            | -                | -                | -         |     2.00 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           21 |     3356 | 2024-02-10 | Nemiga            | L   | 0.343      | -            | -                | -                | -         |    -3.19 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           20 |     3359 | 2024-02-10 | AMKAL             | W   | 0.343      | -            | -                | -                | -         |     6.18 | Forester, ICY, Krad, NickelBack, TRAVIS   |
|           19 |     3373 | 2024-02-09 | FORZE             | W   | 0.336      | -            | -                | -                | -         |     3.17 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           18 |     3378 | 2024-02-09 | Insilio           | W   | 0.335      | -            | -                | -                | -         |     2.82 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           17 |     3387 | 2024-02-08 | Nemiga            | L   | 0.330      | -            | -                | -                | -         |    -3.03 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           16 |     3390 | 2024-02-08 | FORZE             | W   | 0.329      | -            | -                | -                | -         |     2.98 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           15 |     3422 | 2024-02-05 | Entropiq          | W   | 0.308      | -            | -                | -                | -         |     0.49 | c0llins, Marix, mwlky, oxygeN, tiziaN     |
|           14 |     3439 | 2024-02-04 | TMVG              | L   | 0.302      | -            | -                | -                | -         |    -9.21 | shaker, spargo, STOVVE, ykis, yolt        |
|           13 |     3455 | 2024-02-03 | showmakerz        | W   | 0.296      | -            | -                | -                | -         |     0.14 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           12 |     3461 | 2024-02-03 | Gaimin Gladiators | W   | 0.296      | -            | -                | -                | -         |     5.46 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           11 |     3472 | 2024-02-03 | Sampi             | L   | 0.294      | -            | -                | -                | -         |    -7.12 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           10 |     3492 | 2024-02-02 | EYEBALLERS        | L   | 0.289      | -            | -                | -                | -         |    -7.11 | HEAP, JW, Peppzor, Sapec, SHiNE           |
|            9 |     3547 | 2024-01-31 | Permitta          | L   | 0.275      | -            | -                | -                | -         |    -6.59 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|            8 |     3558 | 2024-01-30 | Insilio           | W   | 0.270      | -            | -                | -                | -         |     2.07 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|            7 |     3560 | 2024-01-30 | FORZE             | W   | 0.270      | -            | -                | -                | -         |     0.26 | gokushima, r3salt, shalfey, sstiNiX, tN1R |
|            6 |     3568 | 2024-01-30 | RUSH B            | W   | 0.269      | -            | -                | -                | -         |     1.26 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|            5 |     3982 | 2024-01-16 | EYEBALLERS        | L   | 0.176      | -            | -                | -                | -         |    -4.37 | HEAP, JW, Peppzor, Sapec, SHiNE           |
|            4 |     3996 | 2024-01-16 | ARCRED            | W   | 0.176      | -            | -                | -                | -         |     0.98 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|            3 |     4210 | 2024-01-09 | Enterprise        | L   | 0.130      | -            | -                | -                | -         |    -2.93 | bajmi, Demho, ex1st, fr3nd, TOAO          |
|            2 |     4230 | 2024-01-09 | ECLOT             | W   | 0.129      | -            | -                | -                | -         |     2.48 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|            1 |     4242 | 2024-01-09 | PERA              | W   | 0.129      | -            | -                | -                | -         |     1.10 | Cabbi, IceBerg, kwezz, Lucky, MistR       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($60,016.65)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.20) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-12 |      1.000 | $9,365.00      | $9,365.00       |
| 2024-06-09 |      1.000 | $8,000.00      | $8,000.00       |
| 2024-05-18 |      0.996 | $5,000.00      | $4,979.89       |
| 2024-05-09 |      0.934 | $14,000.00     | $13,081.40      |
| 2024-05-02 |      0.889 | $12,500.00     | $11,114.12      |
| 2024-04-27 |      0.856 | $6,375.00      | $5,458.11       |
| 2024-04-06 |      0.714 | $5,000.00      | $3,567.73       |
| 2024-03-25 |      0.636 | $7,000.00      | $4,450.40       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
