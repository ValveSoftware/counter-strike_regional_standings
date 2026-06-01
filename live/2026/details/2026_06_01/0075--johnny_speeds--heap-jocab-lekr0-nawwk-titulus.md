### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: HEAP, jocab, Lekr0, nawwk, titulus<br />
Global Rank: [75](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [50]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  1138.0<br />
<br />
Final Rank Value (1138.0) = Starting Rank Value (1315.3) + Head To Head Adjustments (-177.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.431[<sup>1</sup>](#table2)
- Bounty Collected: 0.374[<sup>2</sup>](#table1)
- Opponent Network: 0.284[<sup>2</sup>](#table1)
- LAN Wins: 0.833[<sup>2</sup>](#table1)

The average of these factors is 0.480<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1315.3
- 400 + ( ( 0.480 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1315.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           89 |       61 | 2026-05-30 | WW                 | L   | 1.000      | -            | -                | -                | -         |   -14.62 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           88 |       98 | 2026-05-29 | AM                 | W   | 1.000      | 0.384        | -                | 0.725 (0.279)    | -         |    17.12 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           87 |      118 | 2026-05-28 | DragonClaw         | L   | 1.000      | -            | -                | -                | -         |   -20.50 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           86 |      177 | 2026-05-27 | Phantom            | W   | 1.000      | 0.384        | -                | 0.736 (0.283)    | -         |    11.40 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           85 |      546 | 2026-05-16 | Oxuji              | L   | 1.000      | -            | -                | -                | -         |   -16.43 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           84 |      573 | 2026-05-15 | ex-RUBY            | L   | 1.000      | -            | -                | -                | -         |   -17.98 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           83 |      642 | 2026-05-13 | Walczaki           | W   | 1.000      | 0.435        | 0.089 (0.039)    | 1.000 (0.435)    | -         |    21.52 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           82 |      711 | 2026-05-11 | Betclic            | W   | 1.000      | 0.435        | -                | 0.521 (0.226)    | -         |    15.85 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           81 |      781 | 2026-05-09 | Eternal Fire       | L   | 1.000      | -            | -                | -                | -         |   -14.64 | jocab, nawwk, Sapec, Svedjehed, titulus |
|           80 |      923 | 2026-05-02 | INFINITE           | L   | 1.000      | -            | -                | -                | -         |   -10.90 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           79 |      939 | 2026-05-02 | G2 Ares            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     9.31 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           78 |      951 | 2026-05-02 | MTX                | W   | 0.999      | -            | -                | -                | 1 (0.999) |     1.56 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           77 |      985 | 2026-05-01 | Lilmix             | W   | 0.994      | -            | -                | -                | 1 (0.994) |     3.82 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           76 |      987 | 2026-05-01 | INFINITE           | L   | 0.994      | -            | -                | -                | -         |   -11.22 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           75 |      996 | 2026-05-01 | dJ uNT frIENDS     | W   | 0.993      | -            | -                | -                | 1 (0.993) |     0.43 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           74 |     1093 | 2026-04-29 | illwill            | L   | 0.979      | -            | -                | -                | -         |   -19.84 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           73 |     1448 | 2026-04-20 | Tricked            | L   | 0.921      | -            | -                | -                | -         |   -13.95 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           72 |     1565 | 2026-04-14 | ECSTATIC           | L   | 0.880      | -            | -                | -                | -         |   -16.94 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           71 |     1578 | 2026-04-13 | SINNERS            | L   | 0.874      | -            | -                | -                | -         |    -6.78 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           70 |     1675 | 2026-04-09 | INOX Division      | L   | 0.848      | -            | -                | -                | -         |   -22.27 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           69 |     1731 | 2026-04-07 | PsychoFace         | W   | 0.834      | 0.384        | 0.036 (0.011)    | 1.000 (0.321)    | -         |    10.12 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           68 |     1741 | 2026-04-07 | Ursa               | L   | 0.833      | -            | -                | -                | -         |   -19.76 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           67 |     1809 | 2026-04-05 | ENCE               | W   | 0.821      | -            | -                | -                | -         |     3.27 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           66 |     1965 | 2026-04-03 | MANA               | W   | 0.807      | 0.384        | -                | 0.712 (0.221)    | -         |     4.11 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           65 |     2065 | 2026-04-02 | illwill            | W   | 0.800      | 0.435        | 0.024 (0.008)    | -                | -         |     5.69 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           64 |     2109 | 2026-04-02 | Nemesis            | W   | 0.798      | 0.435        | 0.141 (0.049)    | 0.978 (0.339)    | -         |    14.68 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           63 |     2150 | 2026-04-01 | Dripmen            | W   | 0.794      | -            | -                | -                | -         |     1.54 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           62 |     2179 | 2026-04-01 | ECSTATIC           | W   | 0.793      | 0.435        | 0.040 (0.014)    | -                | -         |    10.37 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           61 |     2254 | 2026-03-31 | The Last Resort    | W   | 0.786      | -            | -                | -                | -         |     4.25 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           60 |     2269 | 2026-03-31 | PsychoFace         | L   | 0.786      | -            | -                | -                | -         |   -15.07 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           59 |     2355 | 2026-03-30 | rottweilers        | W   | 0.779      | -            | -                | -                | -         |     1.09 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           58 |     2517 | 2026-03-28 | Alliance           | L   | 0.766      | -            | -                | -                | -         |    -7.19 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           57 |     2563 | 2026-03-27 | Betclic            | W   | 0.760      | -            | -                | -                | 1 (0.760) |    12.90 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           56 |     2686 | 2026-03-24 | Famalicão          | W   | 0.741      | -            | -                | -                | 1 (0.741) |     2.16 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           55 |     2698 | 2026-03-24 | M80                | L   | 0.740      | -            | -                | -                | -         |    -8.09 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           54 |     2710 | 2026-03-24 | Famalicão          | W   | 0.739      | -            | -                | -                | 1 (0.739) |     2.11 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           53 |     3348 | 2026-03-11 | ex-RUBY            | L   | 0.655      | -            | -                | -                | -         |   -15.48 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           52 |     3400 | 2026-03-10 | AM                 | L   | 0.646      | -            | -                | -                | -         |    -9.08 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           51 |     3408 | 2026-03-10 | Betclic            | L   | 0.645      | -            | -                | -                | -         |   -10.73 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           50 |     3452 | 2026-03-09 | 100 Thieves        | W   | 0.640      | -            | -                | -                | 1 (0.640) |    13.26 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           49 |     3472 | 2026-03-09 | Voca               | W   | 0.638      | 0.433        | 0.053 (0.015)    | -                | 1 (0.638) |    11.77 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           48 |     3496 | 2026-03-08 | Sashi              | W   | 0.635      | -            | -                | -                | 1 (0.635) |     7.79 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           47 |     3513 | 2026-03-08 | EAC                | L   | 0.634      | -            | -                | -                | -         |   -11.33 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           46 |     3539 | 2026-03-08 | 100 Thieves        | L   | 0.633      | -            | -                | -                | -         |    -7.26 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           45 |     3548 | 2026-03-08 | Evo Novo           | W   | 0.632      | -            | -                | -                | -         |     0.18 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           44 |     3551 | 2026-03-08 | MASONIC            | L   | 0.632      | -            | -                | -                | -         |   -15.72 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           43 |     3599 | 2026-03-07 | K27                | L   | 0.625      | -            | -                | -                | -         |    -7.07 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           42 |     3699 | 2026-03-04 | BIG                | L   | 0.608      | -            | -                | -                | -         |    -6.21 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           41 |     3779 | 2026-03-03 | PsychoFace         | W   | 0.599      | 0.371        | 0.036 (0.008)    | 1.000 (0.222)    | -         |     4.86 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           40 |     4367 | 2026-02-19 | Alliance           | L   | 0.521      | -            | -                | -                | -         |    -5.46 | draken, HEAP, jocab, Lekr0, Sapec       |
|           39 |     4418 | 2026-02-18 | MOUZ NXT           | L   | 0.514      | -            | -                | -                | -         |   -11.39 | draken, HEAP, jocab, Lekr0, Sapec       |
|           38 |     4427 | 2026-02-18 | Metizport          | L   | 0.514      | -            | -                | -                | -         |   -13.48 | draken, HEAP, jocab, Lekr0, Sapec       |
|           37 |     4522 | 2026-02-16 | playersclub        | W   | 0.501      | -            | -                | -                | -         |     0.36 | draken, HEAP, jocab, Lekr0, Sapec       |
|           36 |     4633 | 2026-02-14 | UNiTY              | W   | 0.488      | -            | -                | -                | -         |     1.03 | draken, HEAP, jocab, Lekr0, Sapec       |
|           35 |     4781 | 2026-02-11 | SINNERS            | L   | 0.468      | -            | -                | -                | -         |    -5.16 | draken, HEAP, jocab, Lekr0, Sapec       |
|           34 |     4792 | 2026-02-11 | Inner Circle       | W   | 0.467      | 0.769        | 0.054 (0.019)    | -                | -         |     9.10 | draken, HEAP, jocab, Lekr0, Sapec       |
|           33 |     4797 | 2026-02-11 | K27                | W   | 0.466      | 0.769        | 0.095 (0.034)    | 0.689 (0.247)    | -         |     9.32 | draken, HEAP, jocab, Lekr0, Sapec       |
|           32 |     4829 | 2026-02-10 | Nuclear TigeRES    | W   | 0.461      | 0.769        | 0.047 (0.017)    | 0.748 (0.265)    | -         |     8.26 | draken, HEAP, jocab, Lekr0, Sapec       |
|           31 |     4844 | 2026-02-10 | Alliance           | L   | 0.459      | -            | -                | -                | -         |    -4.63 | draken, HEAP, jocab, Lekr0, Sapec       |
|           30 |     5066 | 2026-02-02 | 1win               | L   | 0.406      | -            | -                | -                | -         |    -6.49 | draken, HEAP, jocab, Lekr0, Sapec       |
|           29 |     5134 | 2026-01-31 | Metizport          | W   | 0.393      | -            | -                | -                | -         |     2.12 | draken, HEAP, jocab, Lekr0, Sapec       |
|           28 |     5182 | 2026-01-29 | Ursa               | W   | 0.381      | -            | -                | -                | -         |     1.55 | draken, HEAP, jocab, Lekr0, Sapec       |
|           27 |     5194 | 2026-01-29 | magic              | L   | 0.379      | -            | -                | -                | -         |    -1.65 | draken, HEAP, jocab, Lekr0, Sapec       |
|           26 |     5235 | 2026-01-27 | TNC                | L   | 0.366      | -            | -                | -                | -         |    -9.58 | draken, HEAP, jocab, Lekr0, Sapec       |
|           25 |     5251 | 2026-01-26 | ex-RUBY            | L   | 0.361      | -            | -                | -                | -         |    -9.96 | draken, HEAP, jocab, Lekr0, Sapec       |
|           24 |     5320 | 2026-01-24 | BIG                | L   | 0.346      | -            | -                | -                | -         |    -4.31 | draken, HEAP, jocab, Lekr0, Sapec       |
|           23 |     5363 | 2026-01-23 | EXEN               | W   | 0.340      | -            | -                | -                | -         |     0.07 | draken, HEAP, jocab, Lekr0, Sapec       |
|           22 |     5367 | 2026-01-23 | INFURITY           | W   | 0.339      | -            | -                | -                | -         |     0.07 | draken, HEAP, jocab, Lekr0, Sapec       |
|           21 |     5372 | 2026-01-23 | SemperFi           | W   | 0.339      | -            | -                | -                | -         |     2.16 | draken, HEAP, jocab, Lekr0, Sapec       |
|           20 |     5529 | 2026-01-17 | Tricked            | L   | 0.302      | -            | -                | -                | -         |    -5.11 | draken, HEAP, jocab, Lekr0, Sapec       |
|           19 |     5567 | 2026-01-17 | STATE              | W   | 0.300      | -            | -                | -                | -         |     2.92 | draken, HEAP, jocab, Lekr0, Sapec       |
|           18 |     5580 | 2026-01-17 | Sashi              | W   | 0.299      | -            | -                | -                | -         |     3.32 | draken, HEAP, jocab, Lekr0, Sapec       |
|           17 |     5592 | 2026-01-16 | aimclub            | W   | 0.295      | -            | -                | -                | -         |     0.58 | draken, HEAP, jocab, Lekr0, Sapec       |
|           16 |     5597 | 2026-01-16 | EAC                | W   | 0.294      | -            | -                | -                | -         |     3.85 | draken, HEAP, jocab, Lekr0, Sapec       |
|           15 |     5603 | 2026-01-16 | STATE              | L   | 0.294      | -            | -                | -                | -         |    -6.29 | draken, HEAP, jocab, Lekr0, Sapec       |
|           14 |     5613 | 2026-01-16 | aimclub            | L   | 0.294      | -            | -                | -                | -         |    -8.72 | draken, HEAP, jocab, Lekr0, Sapec       |
|           13 |     5628 | 2026-01-16 | INFINITE           | W   | 0.293      | -            | -                | -                | -         |     0.14 | draken, HEAP, jocab, Lekr0, Sapec       |
|           12 |     5634 | 2026-01-16 | Prestige           | W   | 0.292      | -            | -                | -                | -         |     0.25 | draken, HEAP, jocab, Lekr0, Sapec       |
|           11 |     5945 | 2025-12-17 | magic              | L   | 0.095      | -            | -                | -                | -         |    -0.48 | draken, HEAP, jocab, Lekr0, Sapec       |
|           10 |     5975 | 2025-12-15 | RUBY               | W   | 0.080      | -            | -                | -                | -         |     0.02 | draken, HEAP, jocab, Lekr0, Sapec       |
|            9 |     6008 | 2025-12-12 | BetBoom            | L   | 0.061      | -            | -                | -                | -         |    -0.45 | draken, HEAP, jocab, Lekr0, Sapec       |
|            8 |     6035 | 2025-12-10 | ex-Fingers Crossed | W   | 0.046      | -            | -                | -                | -         |     0.02 | draken, HEAP, jocab, Lekr0, Sapec       |
|            7 |     6053 | 2025-12-09 | DragonClaw         | L   | 0.039      | -            | -                | -                | -         |    -1.11 | draken, HEAP, jocab, Lekr0, Sapec       |
|            6 |     6056 | 2025-12-09 | VP.Prodigy         | W   | 0.038      | -            | -                | -                | -         |     0.02 | draken, HEAP, jocab, Lekr0, Sapec       |
|            5 |     6074 | 2025-12-08 | EYEBALLERS         | L   | 0.032      | -            | -                | -                | -         |    -0.35 | draken, HEAP, jocab, Lekr0, Sapec       |
|            4 |     6090 | 2025-12-07 | SIXSEVEN           | W   | 0.026      | -            | -                | -                | -         |     0.02 | draken, HEAP, jocab, Lekr0, Sapec       |
|            3 |     6093 | 2025-12-07 | SIXSEVEN           | W   | 0.025      | -            | -                | -                | -         |     0.01 | draken, HEAP, jocab, Lekr0, Sapec       |
|            2 |     6164 | 2025-12-04 | FORZE Reload       | W   | 0.007      | -            | -                | -                | -         |     0.01 | draken, HEAP, jocab, Lekr0, Sapec       |
|            1 |     6176 | 2025-12-04 | NOVAQ              | W   | 0.005      | -            | -                | -                | -         |     0.01 | draken, HEAP, jocab, Lekr0, Sapec       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29,838.70)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-30 |      1.000 | $2,500.00      | $2,500.00       |
| 2026-05-02 |      1.000 | $1,000.00      | $1,000.00       |
| 2026-04-09 |      0.848 | $5,000.00      | $4,237.61       |
| 2026-04-02 |      0.800 | $22,000.00     | $17,609.06      |
| 2026-03-28 |      0.767 | $3,000.00      | $2,301.99       |
| 2026-03-10 |      0.647 | $1,745.00      | $1,129.14       |
| 2026-01-17 |      0.302 | $2,724.00      | $823.37         |
| 2025-12-18 |      0.100 | $1,000.00      | $100.31         |
| 2025-12-10 |      0.046 | $3,000.00      | $137.21         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
