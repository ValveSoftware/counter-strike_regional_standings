### Roster Details<br />
Team Name: Omega<br />
Roster: adai, Aldikon, Botpa1, dan4o, def1zer<br />
Global Rank: [100](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [68]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  981.3<br />
<br />
Final Rank Value (981.3) = Starting Rank Value (1118.8) + Head To Head Adjustments (-137.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.359[<sup>1</sup>](#table2)
- Bounty Collected: 0.305[<sup>2</sup>](#table1)
- Opponent Network: 0.189[<sup>2</sup>](#table1)
- LAN Wins: 0.673[<sup>2</sup>](#table1)

The average of these factors is 0.381<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1118.8
- 400 + ( ( 0.381 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 1118.8


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
|           77 |        2 | 2026-07-05 | Rune Eaters      | W   | 1.000      | 0.288        | 0.010 (0.003)    | 0.680 (0.196)    | 1 (1.000) |    12.38 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           76 |      642 | 2026-05-31 | Rune Eaters      | L   | 0.959      | -            | -                | -                | -         |   -17.78 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           75 |      677 | 2026-05-30 | DEPO             | W   | 0.953      | 0.354        | 0.007 (0.002)    | -                | 1 (0.953) |    15.21 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           74 |      686 | 2026-05-30 | Rune Eaters      | L   | 0.953      | -            | -                | -                | -         |   -18.40 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           73 |      695 | 2026-05-30 | TDK              | L   | 0.952      | -            | -                | -                | -         |    -7.77 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           72 |      723 | 2026-05-29 | DEPO             | W   | 0.946      | 0.354        | 0.007 (0.002)    | -                | 1 (0.946) |    15.30 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           71 |      736 | 2026-05-29 | Dark Moon        | W   | 0.945      | -            | -                | -                | 1 (0.945) |     3.89 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           70 |      767 | 2026-05-28 | ex-RUBY          | W   | 0.939      | 0.396        | 0.037 (0.014)    | 1.000 (0.372)    | -         |    19.27 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           69 |      905 | 2026-05-24 | ALGO             | W   | 0.915      | 0.396        | 0.007 (0.002)    | 0.319 (0.116)    | -         |     8.01 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           68 |      976 | 2026-05-23 | ASTRAL           | W   | 0.906      | 0.396        | 0.012 (0.004)    | 0.898 (0.322)    | -         |    15.29 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           67 |     1434 | 2026-05-09 | HAVU             | L   | 0.814      | -            | -                | -                | -         |   -17.22 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           66 |     1465 | 2026-05-08 | INOX Division    | L   | 0.806      | -            | -                | -                | -         |    -9.36 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           65 |     1508 | 2026-05-05 | UNiTY            | W   | 0.788      | 0.384        | -                | 0.452 (0.137)    | -         |     7.95 | adai, Aldikon, Botpa1, dan4o, Maison    |
|           64 |     1569 | 2026-05-03 | Lavked           | L   | 0.772      | -            | -                | -                | -         |   -11.19 | adai, Aldikon, Botpa1, dan4o, Maison    |
|           63 |     1902 | 2026-04-26 | DEPO             | L   | 0.726      | -            | -                | -                | -         |   -10.62 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           62 |     1914 | 2026-04-26 | Rune Eaters      | W   | 0.725      | 0.297        | -                | 0.680 (0.146)    | 1 (0.725) |     9.62 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           61 |     2391 | 2026-04-07 | EYEBALLERS       | L   | 0.601      | -            | -                | -                | -         |    -3.31 | adai, Botpa1, dan4o, Maison, modeSavage |
|           60 |     2447 | 2026-04-06 | megoshort        | W   | 0.592      | -            | -                | -                | -         |     4.68 | adai, Botpa1, dan4o, Maison, modeSavage |
|           59 |     2471 | 2026-04-05 | ASTRAL           | L   | 0.587      | -            | -                | -                | -         |    -7.43 | adai, Botpa1, dan4o, Maison, modeSavage |
|           58 |     2663 | 2026-04-03 | Rune Eaters      | W   | 0.572      | 0.435        | 0.010 (0.002)    | 0.680 (0.169)    | -         |     8.68 | adai, Botpa1, dan4o, Maison, modeSavage |
|           57 |     2918 | 2026-03-31 | M1X KS           | L   | 0.553      | -            | -                | -                | -         |   -15.51 | adai, Botpa1, dan4o, Maison, modeSavage |
|           56 |     2964 | 2026-03-31 | OlyBet           | W   | 0.551      | -            | -                | -                | -         |     3.04 | adai, Botpa1, dan4o, Maison, modeSavage |
|           55 |     2982 | 2026-03-30 | G2 Ares          | L   | 0.548      | -            | -                | -                | -         |    -9.13 | adai, Botpa1, dan4o, Maison, modeSavage |
|           54 |     3015 | 2026-03-30 | Ursa             | L   | 0.546      | -            | -                | -                | -         |    -9.52 | adai, Botpa1, dan4o, Maison, modeSavage |
|           53 |     3265 | 2026-03-26 | megoshort        | L   | 0.520      | -            | -                | -                | -         |   -13.15 | adai, Botpa1, dan4o, Maison, modeSavage |
|           52 |     3368 | 2026-03-24 | ALGO             | L   | 0.506      | -            | -                | -                | -         |   -12.68 | adai, Botpa1, dan4o, Maison, modeSavage |
|           51 |     3495 | 2026-03-22 | los kogutos      | L   | 0.493      | -            | -                | -                | -         |   -10.15 | adai, Botpa1, dan4o, Maison, noni       |
|           50 |     3601 | 2026-03-20 | Sangal           | L   | 0.481      | -            | -                | -                | -         |   -10.68 | adai, Botpa1, dan4o, Maison, noni       |
|           49 |     3644 | 2026-03-19 | ex-RUBY          | L   | 0.475      | -            | -                | -                | -         |    -8.90 | adai, Botpa1, dan4o, Maison, noni       |
|           48 |     3740 | 2026-03-17 | MASONIC          | W   | 0.460      | -            | -                | -                | -         |     6.77 | adai, Botpa1, dan4o, Maison, noni       |
|           47 |     3776 | 2026-03-16 | ex-Zero Tenacity | L   | 0.455      | -            | -                | -                | -         |   -11.02 | adai, Botpa1, dan4o, Maison, modeSavage |
|           46 |     3826 | 2026-03-15 | Eternal Fire     | L   | 0.447      | -            | -                | -                | -         |    -6.63 | adai, Botpa1, dan4o, Maison, modeSavage |
|           45 |     3840 | 2026-03-15 | DEPO             | W   | 0.446      | -            | -                | -                | 1 (0.446) |     5.91 | adai, Botpa1, dan4o, Maison, modeSavage |
|           44 |     3844 | 2026-03-15 | NOVAQ            | W   | 0.445      | -            | -                | -                | 1 (0.445) |     3.91 | adai, Botpa1, dan4o, Maison, modeSavage |
|           43 |     3969 | 2026-03-12 | FAVBET           | W   | 0.427      | -            | -                | -                | -         |     3.27 | adai, Botpa1, dan4o, Maison, modeSavage |
|           42 |     4016 | 2026-03-11 | Ursa             | L   | 0.420      | -            | -                | -                | -         |    -9.75 | adai, Botpa1, dan4o, Maison, modeSavage |
|           41 |     4126 | 2026-03-09 | Phantom          | L   | 0.406      | -            | -                | -                | -         |    -6.95 | adai, Botpa1, dan4o, Maison, modeSavage |
|           40 |     4171 | 2026-03-08 | los kogutos      | W   | 0.401      | 0.435        | 0.019 (0.003)    | 0.945 (0.165)    | -         |     3.91 | adai, Botpa1, dan4o, Maison, modeSavage |
|           39 |     4179 | 2026-03-08 | los kogutos      | L   | 0.401      | -            | -                | -                | -         |    -8.90 | adai, Botpa1, dan4o, Maison, modeSavage |
|           38 |     4240 | 2026-03-07 | ASTRAL           | W   | 0.394      | 0.435        | -                | 0.898 (0.154)    | -         |     6.61 | adai, Botpa1, dan4o, Maison, modeSavage |
|           37 |     4251 | 2026-03-07 | ex-Zero Tenacity | L   | 0.393      | -            | -                | -                | -         |   -10.07 | adai, Botpa1, dan4o, Maison, modeSavage |
|           36 |     4285 | 2026-03-06 | Acend            | L   | 0.387      | -            | -                | -                | -         |    -1.85 | adai, Botpa1, dan4o, Maison, modeSavage |
|           35 |     4399 | 2026-03-04 | Fuzos            | W   | 0.372      | -            | -                | -                | -         |     1.20 | adai, Botpa1, dan4o, Maison, noni       |
|           34 |     4421 | 2026-03-03 | NOVAQ            | W   | 0.368      | -            | -                | -                | -         |     2.70 | adai, Botpa1, dan4o, Maison, noni       |
|           33 |     4486 | 2026-03-02 | ENCE             | L   | 0.359      | -            | -                | -                | -         |    -9.49 | adai, Botpa1, dan4o, Maison, SNk        |
|           32 |     4523 | 2026-03-01 | Acend            | L   | 0.353      | -            | -                | -                | -         |    -1.61 | adai, Botpa1, dan4o, Maison, SNk        |
|           31 |     4535 | 2026-03-01 | ex-RUBY          | L   | 0.352      | -            | -                | -                | -         |    -7.74 | adai, Botpa1, dan4o, Maison, SNk        |
|           30 |     4549 | 2026-02-28 | Sashi            | L   | 0.348      | -            | -                | -                | -         |    -5.55 | adai, Botpa1, dan4o, Maison, SNk        |
|           29 |     4575 | 2026-02-28 | ALGO             | W   | 0.346      | -            | -                | -                | -         |     1.47 | adai, Botpa1, dan4o, Maison, SNk        |
|           28 |     4613 | 2026-02-27 | NOVAQ            | L   | 0.340      | -            | -                | -                | -         |    -8.62 | adai, Botpa1, dan4o, Maison, SNk        |
|           27 |     4629 | 2026-02-27 | HOTU             | W   | 0.338      | 0.351        | 0.060 (0.007)    | -                | 1 (0.338) |     8.23 | adai, Botpa1, dan4o, Maison, SNk        |
|           26 |     4677 | 2026-02-26 | ASTRAL           | W   | 0.333      | 0.384        | -                | 0.898 (0.115)    | -         |     5.74 | adai, Botpa1, dan4o, Maison, SNk        |
|           25 |     4687 | 2026-02-26 | Sangal           | W   | 0.333      | -            | -                | -                | 1 (0.333) |     2.70 | adai, Botpa1, dan4o, Maison, SNk        |
|           24 |     4775 | 2026-02-24 | Acend            | L   | 0.320      | -            | -                | -                | -         |    -1.44 | adai, Botpa1, dan4o, Maison, SNk        |
|           23 |     4820 | 2026-02-23 | ARCRED           | L   | 0.313      | -            | -                | -                | -         |    -4.79 | adai, Botpa1, dan4o, Maison, SNk        |
|           22 |     4868 | 2026-02-22 | Nemesis          | L   | 0.307      | -            | -                | -                | -         |    -4.48 | adai, Botpa1, dan4o, Maison, SNk        |
|           21 |     4892 | 2026-02-22 | Nemiga           | W   | 0.306      | 0.333        | 0.111 (0.011)    | -                | 1 (0.306) |     5.74 | adai, Botpa1, dan4o, Maison, SNk        |
|           20 |     4969 | 2026-02-20 | illwill          | W   | 0.295      | -            | -                | -                | -         |     2.79 | adai, Botpa1, dan4o, Maison, SNk        |
|           19 |     4995 | 2026-02-20 | Fuzos            | W   | 0.293      | -            | -                | -                | -         |     0.90 | adai, Botpa1, dan4o, Maison, SNk        |
|           18 |     5026 | 2026-02-19 | SPARTA           | L   | 0.288      | -            | -                | -                | -         |    -4.91 | adai, Botpa1, dan4o, Maison, SNk        |
|           17 |     5047 | 2026-02-19 | VP.Prodigy       | W   | 0.286      | -            | -                | -                | -         |     0.52 | adai, Botpa1, dan4o, Maison, SNk        |
|           16 |     5099 | 2026-02-18 | cirahvi          | L   | 0.280      | -            | -                | -                | -         |    -7.90 | adai, Botpa1, dan4o, Maison, SNk        |
|           15 |     5112 | 2026-02-18 | WW               | L   | 0.278      | -            | -                | -                | -         |    -5.29 | adai, Botpa1, dan4o, Maison, SNk        |
|           14 |     5148 | 2026-02-17 | Sangal           | L   | 0.274      | -            | -                | -                | -         |    -6.63 | adai, Botpa1, dan4o, Maison, SNk        |
|           13 |     5158 | 2026-02-17 | los kogutos      | W   | 0.274      | -            | -                | -                | -         |     2.25 | adai, Botpa1, dan4o, Maison, SNk        |
|           12 |     5185 | 2026-02-16 | MOUZ NXT         | L   | 0.268      | -            | -                | -                | -         |    -6.52 | adai, Botpa1, dan4o, Maison, SNk        |
|           11 |     5277 | 2026-02-15 | Just Players     | W   | 0.259      | -            | -                | -                | -         |     0.64 | adai, Botpa1, dan4o, Maison, SNk        |
|           10 |     5297 | 2026-02-14 | AM               | W   | 0.254      | -            | -                | -                | -         |     0.74 | adai, Botpa1, dan4o, Maison, SNk        |
|            9 |     5369 | 2026-02-13 | BASEMENT BOYS    | W   | 0.247      | -            | -                | -                | -         |     4.57 | adai, Botpa1, dan4o, Maison, SNk        |
|            8 |     5378 | 2026-02-13 | cirahvi          | W   | 0.246      | -            | -                | -                | -         |     0.75 | adai, Botpa1, dan4o, Maison, SNk        |
|            7 |     5421 | 2026-02-12 | home             | W   | 0.240      | -            | -                | -                | -         |     0.27 | adai, Botpa1, dan4o, Maison, SNk        |
|            6 |     5581 | 2026-02-07 | Nexus            | L   | 0.205      | -            | -                | -                | -         |    -5.99 | adai, Botpa1, dan4o, Maison, SNk        |
|            5 |     5679 | 2026-02-03 | VP.Prodigy       | W   | 0.181      | -            | -                | -                | -         |     0.23 | adai, Botpa1, dan4o, Maison, SNk        |
|            4 |     5719 | 2026-02-02 | Bebop            | W   | 0.174      | -            | -                | -                | -         |     0.20 | adai, Botpa1, dan4o, Maison, SNk        |
|            3 |     5893 | 2026-01-27 | ALLINNERS        | L   | 0.134      | -            | -                | -                | -         |    -3.98 | adai, Botpa1, dan4o, Maison, SNk        |
|            2 |     5901 | 2026-01-27 | BetBoom          | L   | 0.133      | -            | -                | -                | -         |    -0.16 | adai, Botpa1, dan4o, Maison, SNk        |
|            1 |     5907 | 2026-01-27 | ALLINNERS        | W   | 0.132      | -            | -                | -                | -         |     0.23 | adai, Botpa1, dan4o, Maison, SNk        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,269.44)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-05 |      1.000 | $2,088.00      | $2,088.00       |
| 2026-05-31 |      0.961 | $1,000.00      | $961.09         |
| 2026-05-31 |      0.960 | $2,000.00      | $1,919.55       |
| 2026-04-26 |      0.726 | $1,072.00      | $778.19         |
| 2026-03-15 |      0.446 | $2,036.00      | $908.11         |
| 2026-03-01 |      0.354 | $500.00        | $177.25         |
| 2026-02-27 |      0.340 | $5,095.00      | $1,730.64       |
| 2026-02-22 |      0.307 | $2,300.00      | $706.62         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
