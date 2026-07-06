### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: HEAP, jocab, Lekr0, nawwk, titulus<br />
Global Rank: [79](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [57]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  1061.1<br />
<br />
Final Rank Value (1061.1) = Starting Rank Value (1182.3) + Head To Head Adjustments (-121.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.431[<sup>1</sup>](#table2)
- Bounty Collected: 0.367[<sup>2</sup>](#table1)
- Opponent Network: 0.255[<sup>2</sup>](#table1)
- LAN Wins: 0.607[<sup>2</sup>](#table1)

The average of these factors is 0.415<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1182.3
- 400 + ( ( 0.415 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 1182.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           86 |       94 | 2026-06-27 | roamsfiest       | L   | 1.000      | -            | -                | -                | -         |   -25.89 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           85 |      107 | 2026-06-26 | ReThink          | L   | 1.000      | -            | -                | -                | -         |   -25.41 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           84 |      155 | 2026-06-23 | train launcher   | W   | 1.000      | -            | -                | -                | -         |     2.81 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           83 |      159 | 2026-06-23 | Entropy          | W   | 1.000      | -            | -                | -                | -         |     4.42 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           82 |      484 | 2026-06-06 | 100 Thieves      | L   | 1.000      | -            | -                | -                | -         |    -9.51 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           81 |      503 | 2026-06-06 | 1win             | W   | 0.999      | 0.384        | 0.081 (0.031)    | 0.548 (0.210)    | -         |    18.43 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           80 |      534 | 2026-06-05 | ex-Zero Tenacity | W   | 0.992      | 0.384        | -                | 0.879 (0.335)    | -         |     7.22 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           79 |      568 | 2026-06-03 | los kogutos      | W   | 0.980      | 0.384        | 0.019 (0.007)    | 0.945 (0.356)    | -         |     8.75 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           78 |      685 | 2026-05-30 | WW               | L   | 0.953      | -            | -                | -                | -         |   -17.53 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           77 |      727 | 2026-05-29 | AM               | W   | 0.945      | 0.384        | -                | 0.670 (0.243)    | -         |    15.85 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           76 |      752 | 2026-05-28 | DragonClaw       | L   | 0.941      | -            | -                | -                | -         |   -19.60 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           75 |      823 | 2026-05-27 | Phantom          | W   | 0.932      | 0.384        | -                | 0.743 (0.266)    | -         |    11.56 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           74 |     1207 | 2026-05-16 | Oxuji            | L   | 0.860      | -            | -                | -                | -         |   -14.29 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           73 |     1234 | 2026-05-15 | ex-RUBY          | L   | 0.853      | -            | -                | -                | -         |   -16.42 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           72 |     1303 | 2026-05-13 | Walczaki         | W   | 0.838      | 0.435        | 0.105 (0.038)    | 1.000 (0.364)    | -         |    17.74 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           71 |     1372 | 2026-05-11 | Betclic          | W   | 0.826      | 0.435        | 0.020 (0.007)    | 0.529 (0.190)    | -         |    14.68 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           70 |     1442 | 2026-05-09 | Eternal Fire     | L   | 0.813      | -            | -                | -                | -         |   -13.88 | jocab, nawwk, Sapec, Svedjehed, titulus |
|           69 |     1584 | 2026-05-02 | INFINITE         | L   | 0.768      | -            | -                | -                | -         |    -5.65 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           68 |     1600 | 2026-05-02 | G2 Ares          | W   | 0.767      | 0.303        | -                | 0.614 (0.142)    | 1 (0.767) |     7.27 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           67 |     1612 | 2026-05-02 | MTX              | W   | 0.766      | -            | -                | -                | 1 (0.766) |     1.42 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           66 |     1646 | 2026-05-01 | Lilmix           | W   | 0.761      | -            | -                | -                | 1 (0.761) |     4.44 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           65 |     1648 | 2026-05-01 | INFINITE         | L   | 0.761      | -            | -                | -                | -         |    -5.59 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           64 |     1657 | 2026-05-01 | dJ uNT frIENDS   | W   | 0.760      | -            | -                | -                | 1 (0.760) |     0.47 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           63 |     1754 | 2026-04-29 | illwill          | L   | 0.746      | -            | -                | -                | -         |   -15.94 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           62 |     2109 | 2026-04-20 | Echo             | L   | 0.688      | -            | -                | -                | -         |    -8.06 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           61 |     2226 | 2026-04-14 | ECSTATIC         | L   | 0.647      | -            | -                | -                | -         |   -14.29 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           60 |     2239 | 2026-04-13 | SINNERS          | L   | 0.641      | -            | -                | -                | -         |    -6.95 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           59 |     2336 | 2026-04-09 | INOX Division    | L   | 0.614      | -            | -                | -                | -         |   -15.56 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           58 |     2392 | 2026-04-07 | PsychoFace       | W   | 0.601      | 0.384        | -                | 1.000 (0.231)    | -         |     7.01 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           57 |     2402 | 2026-04-07 | Ursa             | L   | 0.600      | -            | -                | -                | -         |   -14.45 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           56 |     2470 | 2026-04-05 | ENCE             | W   | 0.587      | -            | -                | -                | -         |     2.48 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           55 |     2626 | 2026-04-03 | ex-MANA          | W   | 0.574      | -            | -                | -                | -         |     2.54 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           54 |     2726 | 2026-04-02 | illwill          | W   | 0.567      | -            | -                | -                | -         |     4.07 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           53 |     2770 | 2026-04-02 | Nemesis          | W   | 0.565      | 0.435        | 0.138 (0.034)    | 0.876 (0.215)    | -         |     9.17 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           52 |     2811 | 2026-04-01 | Dripmen          | W   | 0.561      | -            | -                | -                | -         |     1.39 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           51 |     2840 | 2026-04-01 | ECSTATIC         | W   | 0.559      | -            | -                | -                | -         |     5.37 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           50 |     2915 | 2026-03-31 | The Last Resort  | W   | 0.553      | -            | -                | -                | -         |     3.39 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           49 |     2930 | 2026-03-31 | PsychoFace       | L   | 0.553      | -            | -                | -                | -         |   -11.24 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           48 |     3016 | 2026-03-30 | rottweilers      | W   | 0.546      | -            | -                | -                | -         |     0.84 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           47 |     3178 | 2026-03-28 | Alliance         | L   | 0.533      | -            | -                | -                | -         |    -3.67 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           46 |     3224 | 2026-03-27 | Betclic          | W   | 0.527      | -            | -                | -                | 1 (0.527) |    10.03 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           45 |     3347 | 2026-03-24 | Famalicão        | W   | 0.508      | -            | -                | -                | 1 (0.508) |     1.32 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           44 |     3359 | 2026-03-24 | M80              | L   | 0.507      | -            | -                | -                | -         |    -4.34 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           43 |     3371 | 2026-03-24 | Famalicão        | W   | 0.506      | -            | -                | -                | 1 (0.506) |     1.30 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           42 |     4009 | 2026-03-11 | ex-RUBY          | L   | 0.422      | -            | -                | -                | -         |   -10.09 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           41 |     4061 | 2026-03-10 | AM               | L   | 0.413      | -            | -                | -                | -         |    -6.46 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           40 |     4069 | 2026-03-10 | Betclic          | L   | 0.412      | -            | -                | -                | -         |    -5.66 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           39 |     4113 | 2026-03-09 | 100 Thieves      | W   | 0.407      | 0.433        | 0.049 (0.009)    | -                | 1 (0.407) |     8.87 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           38 |     4133 | 2026-03-09 | Voca             | W   | 0.405      | 0.433        | 0.041 (0.007)    | -                | 1 (0.405) |     5.76 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           37 |     4157 | 2026-03-08 | Sashi            | W   | 0.402      | -            | -                | -                | 1 (0.402) |     5.32 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           36 |     4174 | 2026-03-08 | EAC              | L   | 0.401      | -            | -                | -                | -         |    -5.98 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           35 |     4200 | 2026-03-08 | 100 Thieves      | L   | 0.400      | -            | -                | -                | -         |    -4.08 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           34 |     4209 | 2026-03-08 | Evo Novo         | W   | 0.399      | -            | -                | -                | -         |     0.18 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           33 |     4212 | 2026-03-08 | MASONIC          | L   | 0.399      | -            | -                | -                | -         |    -8.30 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           32 |     4260 | 2026-03-07 | K27              | L   | 0.392      | -            | -                | -                | -         |    -4.97 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           31 |     4360 | 2026-03-04 | BIG              | L   | 0.375      | -            | -                | -                | -         |    -2.95 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           30 |     4440 | 2026-03-03 | PsychoFace       | W   | 0.366      | -            | -                | -                | -         |     2.97 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           29 |     5028 | 2026-02-19 | Alliance         | L   | 0.288      | -            | -                | -                | -         |    -1.88 | draken, HEAP, jocab, Lekr0, Sapec       |
|           28 |     5079 | 2026-02-18 | MOUZ NXT         | L   | 0.281      | -            | -                | -                | -         |    -7.10 | draken, HEAP, jocab, Lekr0, Sapec       |
|           27 |     5088 | 2026-02-18 | Metizport        | L   | 0.281      | -            | -                | -                | -         |    -5.34 | draken, HEAP, jocab, Lekr0, Sapec       |
|           26 |     5183 | 2026-02-16 | playersclub      | W   | 0.268      | -            | -                | -                | -         |     0.28 | draken, HEAP, jocab, Lekr0, Sapec       |
|           25 |     5294 | 2026-02-14 | UNiTY            | W   | 0.255      | -            | -                | -                | -         |     0.70 | draken, HEAP, jocab, Lekr0, Sapec       |
|           24 |     5442 | 2026-02-11 | SINNERS          | L   | 0.235      | -            | -                | -                | -         |    -3.37 | draken, HEAP, jocab, Lekr0, Sapec       |
|           23 |     5453 | 2026-02-11 | Inner Circle     | W   | 0.234      | 0.769        | 0.142 (0.026)    | -                | -         |     6.10 | draken, HEAP, jocab, Lekr0, Sapec       |
|           22 |     5458 | 2026-02-11 | K27              | W   | 0.233      | 0.769        | 0.084 (0.015)    | -                | -         |     4.39 | draken, HEAP, jocab, Lekr0, Sapec       |
|           21 |     5490 | 2026-02-10 | Nuclear TigeRES  | W   | 0.228      | 0.769        | 0.078 (0.014)    | -                | -         |     4.27 | draken, HEAP, jocab, Lekr0, Sapec       |
|           20 |     5505 | 2026-02-10 | Alliance         | L   | 0.226      | -            | -                | -                | -         |    -1.39 | draken, HEAP, jocab, Lekr0, Sapec       |
|           19 |     5727 | 2026-02-02 | 1win             | L   | 0.173      | -            | -                | -                | -         |    -2.79 | draken, HEAP, jocab, Lekr0, Sapec       |
|           18 |     5795 | 2026-01-31 | Metizport        | W   | 0.160      | -            | -                | -                | -         |     2.08 | draken, HEAP, jocab, Lekr0, Sapec       |
|           17 |     5843 | 2026-01-29 | Ursa             | W   | 0.147      | -            | -                | -                | -         |     0.74 | draken, HEAP, jocab, Lekr0, Sapec       |
|           16 |     5855 | 2026-01-29 | magic            | L   | 0.146      | -            | -                | -                | -         |    -0.76 | draken, HEAP, jocab, Lekr0, Sapec       |
|           15 |     5896 | 2026-01-27 | los kogutos      | L   | 0.133      | -            | -                | -                | -         |    -3.39 | draken, HEAP, jocab, Lekr0, Sapec       |
|           14 |     5912 | 2026-01-26 | ex-RUBY          | L   | 0.128      | -            | -                | -                | -         |    -3.27 | draken, HEAP, jocab, Lekr0, Sapec       |
|           13 |     5981 | 2026-01-24 | BIG              | L   | 0.113      | -            | -                | -                | -         |    -0.93 | draken, HEAP, jocab, Lekr0, Sapec       |
|           12 |     6024 | 2026-01-23 | EXEN             | W   | 0.107      | -            | -                | -                | -         |     0.04 | draken, HEAP, jocab, Lekr0, Sapec       |
|           11 |     6028 | 2026-01-23 | INFURITY         | W   | 0.106      | -            | -                | -                | -         |     0.04 | draken, HEAP, jocab, Lekr0, Sapec       |
|           10 |     6033 | 2026-01-23 | SemperFi         | W   | 0.106      | -            | -                | -                | -         |     0.72 | draken, HEAP, jocab, Lekr0, Sapec       |
|            9 |     6190 | 2026-01-17 | Echo             | L   | 0.069      | -            | -                | -                | -         |    -0.74 | draken, HEAP, jocab, Lekr0, Sapec       |
|            8 |     6228 | 2026-01-17 | STATE            | W   | 0.067      | -            | -                | -                | -         |     1.15 | draken, HEAP, jocab, Lekr0, Sapec       |
|            7 |     6241 | 2026-01-17 | Sashi            | W   | 0.066      | -            | -                | -                | -         |     0.87 | draken, HEAP, jocab, Lekr0, Sapec       |
|            6 |     6253 | 2026-01-16 | aimclub          | W   | 0.062      | -            | -                | -                | -         |     0.35 | draken, HEAP, jocab, Lekr0, Sapec       |
|            5 |     6258 | 2026-01-16 | AaB              | W   | 0.061      | -            | -                | -                | -         |     0.05 | draken, HEAP, jocab, Lekr0, Sapec       |
|            4 |     6264 | 2026-01-16 | STATE            | L   | 0.061      | -            | -                | -                | -         |    -0.86 | draken, HEAP, jocab, Lekr0, Sapec       |
|            3 |     6274 | 2026-01-16 | aimclub          | L   | 0.060      | -            | -                | -                | -         |    -1.56 | draken, HEAP, jocab, Lekr0, Sapec       |
|            2 |     6289 | 2026-01-16 | INFINITE         | W   | 0.060      | -            | -                | -                | -         |     0.05 | draken, HEAP, jocab, Lekr0, Sapec       |
|            1 |     6295 | 2026-01-16 | Prestige         | W   | 0.059      | -            | -                | -                | -         |     0.07 | draken, HEAP, jocab, Lekr0, Sapec       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,061.29)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-27 |      1.000 | $841.00        | $841.00         |
| 2026-06-06 |      1.000 | $5,000.00      | $5,000.00       |
| 2026-05-30 |      0.954 | $2,500.00      | $2,385.13       |
| 2026-05-02 |      0.768 | $1,000.00      | $768.10         |
| 2026-04-09 |      0.614 | $5,000.00      | $3,072.20       |
| 2026-04-02 |      0.567 | $22,000.00     | $12,481.27      |
| 2026-03-28 |      0.534 | $3,000.00      | $1,602.74       |
| 2026-03-10 |      0.414 | $1,745.00      | $722.41         |
| 2026-01-17 |      0.069 | $2,724.00      | $188.46         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
