### Roster Details<br />
Team Name: Sashi<br />
Roster: Cabbi, IceBerg, kwezz, Lucky, MistR<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [39](../standings_global.md)<br />
Regional Rank: [27]( ../standings_europe.md)<br />
Final Rank Value:  1199.1<br />
<br />
Final Rank Value (1199.1) = Starting Rank Value (1158.1) + Head To Head Adjustments (41.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.600[<sup>1</sup>](#table2)
- Bounty Collected: 0.484[<sup>2</sup>](#table1)
- Opponent Network: 0.222[<sup>2</sup>](#table1)
- LAN Wins: 0.107[<sup>2</sup>](#table1)

The average of these factors is 0.353<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1158.1
- 400 + ( ( 0.353 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1158.1


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
|           98 |        6 | 2024-07-17 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -0.33 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           97 |      141 | 2024-07-13 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -24.24 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           96 |      149 | 2024-07-12 | FLuffy Gangsters  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.39 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           95 |      167 | 2024-07-11 | Endpoint          | W   | 1.000      | 0.358        | -                | 0.498 (0.178)    | 0 (0.000) |     4.75 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           94 |      191 | 2024-07-10 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -11.78 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           93 |      194 | 2024-07-10 | 9INE              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.40 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           92 |      395 | 2024-06-14 | 3DMAX             | L   | 0.980      | -            | -                | -                | -         |   -15.73 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           91 |      431 | 2024-06-13 | Sampi             | W   | 0.973      | -            | -                | -                | 0 (0.000) |     3.90 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           90 |      454 | 2024-06-12 | CPH Wolves        | W   | 0.967      | -            | -                | -                | 0 (0.000) |     1.93 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           89 |      459 | 2024-06-12 | Astralis Talent   | W   | 0.967      | -            | -                | -                | 0 (0.000) |     0.91 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           88 |      723 | 2024-06-06 | Ninjas in Pyjamas | L   | 0.927      | -            | -                | -                | -         |    -2.20 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           87 |      755 | 2024-06-06 | HEROIC            | L   | 0.925      | -            | -                | -                | -         |    -2.10 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           86 |      788 | 2024-06-05 | ENCE              | L   | 0.921      | -            | -                | -                | -         |   -10.99 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           85 |      802 | 2024-06-05 | Astralis          | W   | 0.919      | 0.715        | 0.549 (0.361)    | 0.434 (0.285)    | 1 (0.919) |    28.19 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           84 |      810 | 2024-06-05 | The MongolZ       | L   | 0.918      | -            | -                | -                | -         |    -0.62 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           83 |     1243 | 2024-05-20 | Monte             | L   | 0.812      | -            | -                | -                | -         |   -19.15 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           82 |     1258 | 2024-05-19 | Passion UA        | W   | 0.807      | 0.500        | 0.087 (0.035)    | 0.847 (0.342)    | 0 (0.000) |     5.43 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           81 |     1285 | 2024-05-18 | B8                | L   | 0.801      | -            | -                | -                | -         |   -14.22 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           80 |     1296 | 2024-05-18 | Monte             | W   | 0.799      | 0.384        | 0.099 (0.030)    | -                | 0 (0.000) |     5.89 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           79 |     1302 | 2024-05-18 | ALTERNATE aTTaX   | W   | 0.798      | 0.500        | -                | 0.644 (0.257)    | 0 (0.000) |     4.80 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           78 |     1335 | 2024-05-17 | ex-Guild Eagles   | W   | 0.792      | -            | -                | -                | -         |     3.32 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           77 |     1372 | 2024-05-16 | Passion UA        | L   | 0.785      | -            | -                | -                | -         |   -20.13 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           76 |     1420 | 2024-05-15 | Endpoint          | W   | 0.779      | -            | -                | -                | -         |     4.17 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           75 |     1592 | 2024-05-09 | 1WIN              | W   | 0.739      | 0.396        | -                | 0.545 (0.160)    | -         |     5.07 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           74 |     1615 | 2024-05-08 | Grannys Knockers  | W   | 0.733      | -            | -                | -                | -         |     2.25 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           73 |     1633 | 2024-05-07 | 9 Pandas          | W   | 0.727      | 0.396        | 0.126 (0.036)    | 0.591 (0.170)    | -         |     6.88 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           72 |     1647 | 2024-05-06 | ALTERNATE aTTaX   | W   | 0.720      | 0.396        | -                | 0.644 (0.184)    | -         |     5.39 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           71 |     1661 | 2024-05-05 | Gaimin Gladiators | L   | 0.714      | -            | -                | -                | -         |   -15.01 | Cabbi, IceBerg, kwezz, Lucky, PR1mE   |
|           70 |     1671 | 2024-05-05 | Come on now dawg  | W   | 0.713      | -            | -                | -                | -         |     0.19 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           69 |     1720 | 2024-05-02 | fnatic            | W   | 0.694      | 0.384        | 0.300 (0.080)    | 0.632 (0.169)    | -         |    18.33 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           68 |     1754 | 2024-05-01 | 3DMAX             | W   | 0.686      | 0.384        | 0.209 (0.055)    | 1.000 (0.264)    | -         |    12.50 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           67 |     1771 | 2024-04-30 | OG                | W   | 0.680      | 0.384        | 0.210 (0.055)    | -                | -         |    10.93 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           66 |     1799 | 2024-04-29 | 500               | W   | 0.672      | -            | -                | -                | -         |     1.79 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           65 |     1827 | 2024-04-27 | 777               | W   | 0.661      | -            | -                | -                | -         |     1.51 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           64 |     1831 | 2024-04-27 | JANO              | W   | 0.660      | -            | -                | -                | -         |     1.26 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           63 |     1896 | 2024-04-25 | Passion UA        | W   | 0.646      | 0.384        | -                | 0.847 (0.210)    | -         |     4.51 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           62 |     1930 | 2024-04-23 | Gaimin Gladiators | W   | 0.633      | -            | -                | -                | -         |     9.44 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           61 |     1934 | 2024-04-23 | BLEED             | W   | 0.632      | 0.384        | 0.156 (0.038)    | -                | -         |     9.60 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           60 |     1981 | 2024-04-20 | Eternal Fire      | W   | 0.614      | 0.143        | 1.000 (0.088)    | -                | -         |    18.64 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           59 |     1995 | 2024-04-20 | Cloud9            | W   | 0.613      | -            | -                | -                | -         |    12.28 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           58 |     2031 | 2024-04-19 | Eternal Fire      | L   | 0.607      | -            | -                | -                | -         |    -0.63 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           57 |     2040 | 2024-04-19 | Cloud9            | W   | 0.607      | -            | -                | -                | -         |    12.35 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           56 |     2067 | 2024-04-18 | ex-Guild Eagles   | W   | 0.601      | -            | -                | -                | -         |     4.48 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           55 |     2074 | 2024-04-18 | RUBY              | W   | 0.600      | -            | -                | -                | -         |     6.81 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           54 |     2082 | 2024-04-18 | GamerLegion       | W   | 0.600      | -            | -                | -                | -         |    12.72 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           53 |     2124 | 2024-04-17 | Passion UA        | L   | 0.593      | -            | -                | -                | -         |   -12.66 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           52 |     2160 | 2024-04-16 | ex-Guild Eagles   | L   | 0.586      | -            | -                | -                | -         |   -14.52 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           51 |     2182 | 2024-04-15 | ex-Preasy         | W   | 0.579      | -            | -                | -                | -         |     4.34 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           50 |     2199 | 2024-04-14 | UNiTY             | W   | 0.572      | -            | -                | -                | -         |     6.85 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           49 |     2257 | 2024-04-11 | Enterprise        | W   | 0.552      | -            | -                | -                | -         |     5.69 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           48 |     2299 | 2024-04-10 | Passion UA        | L   | 0.546      | -            | -                | -                | -         |   -12.01 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           47 |     2433 | 2024-04-06 | UNiTY             | W   | 0.518      | -            | -                | -                | -         |     6.51 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           46 |     2490 | 2024-04-04 | UNiTY             | W   | 0.505      | -            | -                | -                | -         |     6.38 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           45 |     2574 | 2024-04-02 | Permitta          | W   | 0.491      | -            | -                | -                | -         |     5.20 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           44 |     2583 | 2024-04-01 | Nexus             | L   | 0.485      | -            | -                | -                | -         |   -12.14 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           43 |     2657 | 2024-03-27 | Rebels            | L   | 0.454      | -            | -                | -                | -         |    -8.70 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           42 |     2691 | 2024-03-25 | Nexus             | W   | 0.440      | -            | -                | -                | -         |     2.73 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           41 |     2716 | 2024-03-22 | Nemiga            | W   | 0.421      | 0.372        | 0.498 (0.078)    | -                | -         |     9.29 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           40 |     2781 | 2024-03-19 | RUBY              | W   | 0.401      | -            | -                | -                | -         |     4.36 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           39 |     2793 | 2024-03-18 | Insilio           | W   | 0.393      | -            | -                | -                | -         |     3.71 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           38 |     2862 | 2024-03-15 | ECLOT             | W   | 0.372      | -            | -                | -                | -         |     7.18 | Cabbi, IceBerg, larsen, Lucky, MistR  |
|           37 |     2931 | 2024-03-13 | BLEED             | L   | 0.359      | -            | -                | -                | -         |    -6.07 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           36 |     2979 | 2024-03-11 | Nemiga            | L   | 0.347      | -            | -                | -                | -         |    -3.04 | Cabbi, IceBerg, larsen, Lucky, MistR  |
|           35 |     3004 | 2024-03-10 | Sampi             | L   | 0.339      | -            | -                | -                | -         |    -7.73 | Cabbi, IceBerg, Kristou, Lucky, MistR |
|           34 |     3030 | 2024-03-09 | Permitta          | W   | 0.332      | -            | -                | -                | -         |     3.39 | Cabbi, IceBerg, larsen, Lucky, MistR  |
|           33 |     3049 | 2024-03-08 | ALTERNATE aTTaX   | L   | 0.325      | -            | -                | -                | -         |    -6.20 | Cabbi, IceBerg, larsen, Lucky, MistR  |
|           32 |     3061 | 2024-03-07 | Insilio           | W   | 0.321      | -            | -                | -                | -         |     2.83 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           31 |     3073 | 2024-03-07 | ex-sYnck          | W   | 0.320      | -            | -                | -                | -         |     0.32 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           30 |     3106 | 2024-03-06 | Alliance          | W   | 0.312      | -            | -                | -                | -         |     2.34 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           29 |     3140 | 2024-03-05 | Johnny Speeds     | L   | 0.307      | -            | -                | -                | -         |    -1.67 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           28 |     3148 | 2024-03-05 | ALTERNATE aTTaX   | L   | 0.305      | -            | -                | -                | -         |    -5.96 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           27 |     3164 | 2024-03-04 | Entropiq          | L   | 0.299      | -            | -                | -                | -         |    -8.98 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           26 |     3208 | 2024-03-02 | brazylijski luz   | W   | 0.286      | -            | -                | -                | -         |     1.39 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           25 |     3243 | 2024-02-29 | JANO              | W   | 0.272      | -            | -                | -                | -         |     0.72 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           24 |     3251 | 2024-02-28 | Sampi             | W   | 0.267      | -            | -                | -                | -         |     2.22 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           23 |     3268 | 2024-02-27 | V1dar             | L   | 0.260      | -            | -                | -                | -         |    -7.93 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           22 |     3309 | 2024-02-25 | Sangal            | L   | 0.248      | -            | -                | -                | -         |    -3.73 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           21 |     3315 | 2024-02-25 | PGE Turow         | L   | 0.246      | -            | -                | -                | -         |    -7.21 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           20 |     3355 | 2024-02-24 | MOUZ NXT          | L   | 0.238      | -            | -                | -                | -         |    -4.34 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           19 |     3407 | 2024-02-21 | Sampi             | W   | 0.219      | -            | -                | -                | -         |     1.68 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           18 |     3502 | 2024-02-17 | Zero Tenacity     | W   | 0.193      | -            | -                | -                | -         |     2.60 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           17 |     3651 | 2024-02-11 | ARCRED            | W   | 0.153      | -            | -                | -                | -         |     0.98 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           16 |     3653 | 2024-02-10 | Nemiga            | L   | 0.148      | -            | -                | -                | -         |    -1.50 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           15 |     3656 | 2024-02-10 | AMKAL             | W   | 0.147      | -            | -                | -                | -         |     2.12 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           14 |     3670 | 2024-02-09 | FORZE             | W   | 0.141      | -            | -                | -                | -         |     1.18 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           13 |     3675 | 2024-02-09 | Insilio           | W   | 0.140      | -            | -                | -                | -         |     1.10 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           12 |     3684 | 2024-02-08 | Nemiga            | L   | 0.135      | -            | -                | -                | -         |    -1.36 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           11 |     3687 | 2024-02-08 | FORZE             | W   | 0.133      | -            | -                | -                | -         |     1.09 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|           10 |     3719 | 2024-02-05 | Entropiq          | W   | 0.112      | -            | -                | -                | -         |     0.14 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            9 |     3736 | 2024-02-04 | TMVG              | L   | 0.106      | -            | -                | -                | -         |    -3.26 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            8 |     3752 | 2024-02-03 | showmakerz        | W   | 0.101      | -            | -                | -                | -         |     0.05 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            7 |     3758 | 2024-02-03 | Gaimin Gladiators | W   | 0.100      | -            | -                | -                | -         |     1.37 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            6 |     3769 | 2024-02-03 | Sampi             | L   | 0.099      | -            | -                | -                | -         |    -2.38 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            5 |     3789 | 2024-02-02 | EYEBALLERS        | L   | 0.094      | -            | -                | -                | -         |    -2.28 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            4 |     3844 | 2024-01-31 | Permitta          | L   | 0.080      | -            | -                | -                | -         |    -1.87 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            3 |     3855 | 2024-01-30 | Insilio           | W   | 0.075      | -            | -                | -                | -         |     0.57 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            2 |     3857 | 2024-01-30 | FORZE             | W   | 0.074      | -            | -                | -                | -         |     0.05 | Cabbi, IceBerg, kwezz, Lucky, MistR   |
|            1 |     3865 | 2024-01-30 | RUSH B            | W   | 0.074      | -            | -                | -                | -         |     0.36 | Cabbi, IceBerg, kwezz, Lucky, MistR   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($52,761.51)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-13 |      1.000 | $3,216.00      | $3,216.00       |
| 2024-06-12 |      0.967 | $9,365.00      | $9,057.85       |
| 2024-06-09 |      0.947 | $8,000.00      | $7,575.78       |
| 2024-05-18 |      0.801 | $5,000.00      | $4,003.47       |
| 2024-05-09 |      0.739 | $14,000.00     | $10,347.43      |
| 2024-05-02 |      0.694 | $12,500.00     | $8,673.07       |
| 2024-04-27 |      0.661 | $6,375.00      | $4,213.18       |
| 2024-04-06 |      0.518 | $5,000.00      | $2,591.32       |
| 2024-03-25 |      0.440 | $7,000.00      | $3,083.41       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
