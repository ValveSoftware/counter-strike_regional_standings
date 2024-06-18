### Roster Details<br />
Team Name: FlyQuest<br />
Roster: aliStair, dexter, INS, Liazz, Vexite<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [26](../standings_global.md)<br />
Regional Rank: [2]( ../standings_asia.md)<br />
Final Rank Value:  1387.7<br />
<br />
Final Rank Value (1387.7) = Starting Rank Value (1382.0) + Head To Head Adjustments (5.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.518[<sup>1</sup>](#table2)
- Bounty Collected: 0.496[<sup>2</sup>](#table1)
- Opponent Network: 0.247[<sup>2</sup>](#table1)
- LAN Wins: 0.671[<sup>2</sup>](#table1)

The average of these factors is 0.483<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1382.0
- 400 + ( ( 0.483 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1382.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           58 |      279 | 2024-06-09 | Rooster            | W   | 1.000      | 0.333        | 0.018 (0.006)    | 0.258 (0.086)    | 0 (0.000) |     2.35 | aliStair, dexter, INS, Liazz, Vexite         |
|           57 |      335 | 2024-06-08 | Mindfreak          | W   | 1.000      | 0.333        | -                | 0.226 (0.075)    | -         |     1.32 | aliStair, dexter, INS, Liazz, Vexite         |
|           56 |      387 | 2024-06-07 | Rooster            | L   | 1.000      | -            | -                | -                | -         |   -29.47 | aliStair, dexter, INS, Liazz, Vexite         |
|           55 |      720 | 2024-05-28 | BIG                | L   | 1.000      | -            | -                | -                | -         |   -16.06 | aliStair, dexter, INS, Liazz, Vexite         |
|           54 |      742 | 2024-05-27 | Spirit             | L   | 1.000      | -            | -                | -                | -         |    -1.27 | aliStair, dexter, INS, Liazz, Vexite         |
|           53 |      870 | 2024-05-22 | Mindfreak          | W   | 1.000      | 0.333        | -                | 0.226 (0.075)    | -         |     0.89 | aliStair, dexter, INS, Liazz, Vexite         |
|           52 |      874 | 2024-05-22 | Mindfreak          | W   | 1.000      | 0.333        | -                | 0.226 (0.075)    | -         |     0.90 | aliStair, dexter, INS, Liazz, Vexite         |
|           51 |      947 | 2024-05-20 | Canon Event        | W   | 1.000      | -            | -                | -                | -         |     0.13 | aliStair, dexter, INS, Liazz, Vexite         |
|           50 |      949 | 2024-05-20 | Canon Event        | W   | 1.000      | -            | -                | -                | -         |     0.13 | aliStair, dexter, INS, Liazz, Vexite         |
|           49 |     1314 | 2024-05-08 | Liquid             | L   | 0.929      | -            | -                | -                | -         |    -6.95 | aliStair, dexter, INS, Liazz, Vexite         |
|           48 |     1332 | 2024-05-07 | BetBoom            | W   | 0.922      | 0.889        | 0.414 (0.339)    | 0.798 (0.654)    | 1 (0.922) |    17.61 | aliStair, dexter, INS, Liazz, Vexite         |
|           47 |     1376 | 2024-05-05 | Ninjas in Pyjamas  | W   | 0.908      | 0.889        | 0.315 (0.254)    | 0.497 (0.401)    | 1 (0.908) |    22.34 | aliStair, dexter, INS, Liazz, Vexite         |
|           46 |     1390 | 2024-05-04 | PERA               | W   | 0.901      | 0.889        | 0.058 (0.047)    | 0.455 (0.365)    | 1 (0.901) |     2.28 | aliStair, dexter, INS, Liazz, Vexite         |
|           45 |     1408 | 2024-05-03 | HEROIC             | L   | 0.894      | -            | -                | -                | -         |    -3.42 | aliStair, dexter, INS, Liazz, Vexite         |
|           44 |     1436 | 2024-05-02 | BOSS               | W   | 0.888      | 0.889        | 0.021 (0.017)    | 0.386 (0.305)    | 1 (0.888) |     1.40 | aliStair, dexter, INS, Liazz, Vexite         |
|           43 |     1459 | 2024-05-01 | Natus Vincere      | L   | 0.881      | -            | -                | -                | -         |    -1.19 | aliStair, dexter, INS, Liazz, Vexite         |
|           42 |     1703 | 2024-04-20 | Bad News Kangaroos | W   | 0.807      | 0.143        | 0.031 (0.004)    | -                | -         |     1.37 | aliStair, dexter, INS, Liazz, Vexite         |
|           41 |     1749 | 2024-04-19 | Rooster            | W   | 0.801      | -            | -                | -                | -         |     1.29 | aliStair, dexter, INS, Liazz, Vexite         |
|           40 |     1756 | 2024-04-19 | Mindfreak          | W   | 0.799      | -            | -                | -                | -         |     0.75 | aliStair, dexter, INS, Liazz, Vexite         |
|           39 |     2002 | 2024-04-10 | FaZe               | L   | 0.741      | -            | -                | -                | -         |    -1.02 | aliStair, dexter, INS, Liazz, Vexite         |
|           38 |     2016 | 2024-04-10 | Nemiga             | W   | 0.739      | 0.624        | 0.486 (0.224)    | 0.694 (0.320)    | 1 (0.739) |     8.13 | aliStair, dexter, INS, Liazz, Vexite         |
|           37 |     2066 | 2024-04-09 | Virtus.pro         | L   | 0.733      | -            | -                | -                | -         |    -2.43 | aliStair, dexter, INS, Liazz, Vexite         |
|           36 |     2097 | 2024-04-08 | Cloud9             | W   | 0.726      | 0.624        | 0.146 (0.066)    | 0.255 (0.116)    | 1 (0.726) |    12.10 | aliStair, dexter, INS, Liazz, Vexite         |
|           35 |     2240 | 2024-04-03 | Arcade             | W   | 0.693      | -            | -                | -                | -         |     0.44 | aliStair, dexter, INS, Liazz, Vexite         |
|           34 |     2244 | 2024-04-03 | Arcade             | W   | 0.693      | -            | -                | -                | -         |     0.44 | aliStair, dexter, INS, Liazz, Vexite         |
|           33 |     2366 | 2024-03-27 | KZG                | W   | 0.647      | -            | -                | -                | -         |     0.40 | aliStair, dexter, INS, Liazz, Vexite         |
|           32 |     2372 | 2024-03-27 | KZG                | W   | 0.647      | -            | -                | -                | -         |     0.40 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs    |
|           31 |     2637 | 2024-03-13 | Rooster            | W   | 0.554      | -            | -                | -                | -         |     0.83 | asap, chelleos, dangeR, nettik, TjP          |
|           30 |     2645 | 2024-03-13 | Rooster            | W   | 0.554      | -            | -                | -                | -         |     0.83 | aliStair, dexter, INS, Liazz, Vexite         |
|           29 |     2813 | 2024-03-06 | DXA                | W   | 0.507      | -            | -                | -                | -         |     0.33 | aliStair, dexter, INS, Liazz, Vexite         |
|           28 |     2815 | 2024-03-06 | DXA                | W   | 0.507      | -            | -                | -                | -         |     0.33 | Kiyo, lucas222, motion, rocky, Roflko        |
|           27 |     2963 | 2024-02-28 | Lynn Vision        | L   | 0.460      | -            | -                | -                | -         |   -11.20 | aliStair, dexter, INS, Liazz, Vexite         |
|           26 |     2964 | 2024-02-27 | ATOX               | W   | 0.459      | -            | -                | -                | 1 (0.459) |     1.16 | aliStair, dexter, INS, Liazz, Vexite         |
|           25 |     2984 | 2024-02-27 | JiJieHao           | W   | 0.454      | -            | -                | -                | 1 (0.454) |     0.07 | DavCost, El1an, ISSAA, m1N1, ViTaL           |
|           24 |     3001 | 2024-02-25 | The MongolZ        | L   | 0.446      | -            | -                | -                | -         |    -0.61 | aliStair, dexter, INS, Liazz, Vexite         |
|           23 |     3006 | 2024-02-25 | ATOX               | W   | 0.445      | -            | -                | -                | 1 (0.445) |     1.10 | AccuracyTG, dobu, kabal, MiQ, Zesta          |
|           22 |     3066 | 2024-02-23 | Rooster            | W   | 0.427      | -            | -                | -                | -         |     0.58 | asap, chelleos, dangeR, nettik, TjP          |
|           21 |     3086 | 2024-02-22 | Rooster            | W   | 0.420      | -            | -                | -                | -         |     0.55 | asap, chelleos, dangeR, nettik, TjP          |
|           20 |     3089 | 2024-02-21 | Bad News Kangaroos | W   | 0.419      | -            | -                | -                | -         |     0.69 | ADDICT, BRACE, Hatz, hazr, pz                |
|           19 |     3114 | 2024-02-21 | Bad News Kangaroos | W   | 0.414      | 0.333        | 0.031 (0.004)    | -                | -         |     0.69 | ADDICT, BRACE, Hatz, hazr, pz                |
|           18 |     3118 | 2024-02-21 | Bad News Kangaroos | W   | 0.414      | 0.333        | 0.031 (0.004)    | -                | -         |     0.69 | aliStair, dexter, INS, Liazz, Vexite         |
|           17 |     3171 | 2024-02-19 | Mindfreak          | W   | 0.400      | -            | -                | -                | -         |     0.31 | gump, Rickeh, Sliimey, supar, tucks          |
|           16 |     3189 | 2024-02-18 | Arcade             | W   | 0.393      | -            | -                | -                | -         |     0.26 | apocdud, damyo, foggers, Kobe, void          |
|           15 |     3192 | 2024-02-18 | MANTRA             | W   | 0.393      | -            | -                | -                | -         |     0.05 | cheeseball, cookie, Reapz, rekonz, w0mbat    |
|           14 |     3193 | 2024-02-17 | Arcade             | W   | 0.391      | -            | -                | -                | -         |     0.25 | apocdud, damyo, foggers, Kobe, void          |
|           13 |     3215 | 2024-02-16 | GR                 | W   | 0.386      | -            | -                | -                | -         |     0.23 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           12 |     3681 | 2024-01-23 | Mindfreak          | W   | 0.220      | -            | -                | -                | -         |     0.07 | dangeR, dpr, Forleks, supar, tucks           |
|           11 |     3710 | 2024-01-22 | Mindfreak          | W   | 0.214      | -            | -                | -                | -         |     0.06 | dangeR, dpr, Forleks, supar, tucks           |
|           10 |     3712 | 2024-01-22 | Bad News Kangaroos | W   | 0.213      | -            | -                | -                | -         |     0.37 | ADDICT, BRACE, Hatz, hazr, pz                |
|            9 |     3737 | 2024-01-21 | Bad News Kangaroos | W   | 0.207      | -            | -                | -                | -         |     0.36 | aliStair, dexter, INS, Liazz, Vexite         |
|            8 |     3742 | 2024-01-20 | Rooster            | W   | 0.206      | -            | -                | -                | -         |     0.28 | aliStair, dexter, INS, Liazz, Vexite         |
|            7 |     3746 | 2024-01-20 | Mindfreak          | W   | 0.205      | -            | -                | -                | -         |     0.06 | dangeR, dpr, Forleks, supar, tucks           |
|            6 |     3787 | 2024-01-20 | Vantage            | W   | 0.200      | -            | -                | -                | -         |     0.12 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            5 |     3843 | 2024-01-19 | Bad News Kangaroos | L   | 0.193      | -            | -                | -                | -         |    -5.77 | ADDICT, BRACE, Hatz, hazr, pz                |
|            4 |     3854 | 2024-01-18 | RKON               | W   | 0.192      | -            | -                | -                | -         |     0.05 | alecc, Crunchy, dingus, Jynx, TRIPLUS        |
|            3 |     4001 | 2024-01-16 | sunday school      | W   | 0.173      | -            | -                | -                | -         |     0.04 | gump, HUGH, nexar, rekonz, versa             |
|            2 |     4003 | 2024-01-16 | Mindfreak          | W   | 0.173      | -            | -                | -                | -         |     0.04 | dangeR, dpr, Forleks, supar, tucks           |
|            1 |     4033 | 2024-01-15 | disciples          | W   | 0.166      | -            | -                | -                | -         |     0.02 | badger, DickStacy, mswag, Sync, Texta        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($35,385.49)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $3,250.00      | $3,250.00       |
| 2024-06-02 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-12 |      0.956 | $23,500.00     | $22,454.92      |
| 2024-04-14 |      0.767 | $6,000.00      | $4,604.43       |
| 2024-02-17 |      0.391 | $2,750.00      | $1,076.13       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
