### Roster Details<br />
Team Name: Rebels<br />
Roster: Icarus, NOPEEj, snapy, stadodo, TMKj<br />
Global Rank: [94](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [66]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  1006.7<br />
<br />
Final Rank Value (1006.7) = Starting Rank Value (1108.2) + Head To Head Adjustments (-101.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.320[<sup>2</sup>](#table1)
- Opponent Network: 0.180[<sup>2</sup>](#table1)
- LAN Wins: 0.678[<sup>2</sup>](#table1)

The average of these factors is 0.376<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1108.2
- 400 + ( ( 0.376 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 1108.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           67 |      599 | 2026-06-02 | ex-Zero Tenacity  | L   | 0.973      | -            | -                | -                | -         |   -22.00 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           66 |      621 | 2026-05-31 | HAVU              | W   | 0.961      | 0.384        | -                | 0.391 (0.144)    | -         |     7.30 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           65 |      730 | 2026-05-29 | Rune Eaters       | W   | 0.945      | 0.384        | 0.010 (0.004)    | 0.680 (0.247)    | -         |     9.58 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           64 |      815 | 2026-05-27 | Bushido Wildcats  | L   | 0.933      | -            | -                | -                | -         |   -22.95 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           63 |      860 | 2026-05-26 | ASTRAL            | L   | 0.925      | -            | -                | -                | -         |   -15.99 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           62 |     1002 | 2026-05-22 | Betclic           | L   | 0.901      | -            | -                | -                | -         |   -11.72 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           61 |     1011 | 2026-05-22 | FOKUS             | L   | 0.900      | -            | -                | -                | -         |    -7.42 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           60 |     1029 | 2026-05-22 | INFINITE          | W   | 0.899      | 0.435        | 0.032 (0.013)    | 0.616 (0.241)    | 1 (0.899) |    23.00 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           59 |     1048 | 2026-05-21 | OG                | L   | 0.894      | -            | -                | -                | -         |   -11.73 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           58 |     1049 | 2026-05-21 | Metizport         | W   | 0.894      | 0.435        | 0.028 (0.011)    | 0.465 (0.181)    | 1 (0.894) |    15.74 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           57 |     1055 | 2026-05-21 | Betclic           | W   | 0.894      | 0.435        | 0.020 (0.008)    | 0.529 (0.205)    | 1 (0.894) |    16.76 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           56 |     1085 | 2026-05-21 | Passion UA        | W   | 0.891      | 0.435        | 0.024 (0.009)    | 0.308 (0.119)    | 1 (0.891) |    16.98 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           55 |     1503 | 2026-05-06 | Walczaki          | L   | 0.792      | -            | -                | -                | -         |    -6.77 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           54 |     1515 | 2026-05-05 | HYPERSPIRIT       | W   | 0.786      | 0.384        | -                | 0.504 (0.152)    | -         |     7.35 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           53 |     1533 | 2026-05-04 | HAVU              | W   | 0.779      | 0.384        | -                | 0.391 (0.117)    | -         |     6.35 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           52 |     1551 | 2026-05-03 | HYPERSPIRIT       | L   | 0.774      | -            | -                | -                | -         |   -17.22 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           51 |     1691 | 2026-04-30 | Lavked            | L   | 0.754      | -            | -                | -                | -         |   -13.23 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           50 |     1735 | 2026-04-29 | SPARTA            | L   | 0.748      | -            | -                | -                | -         |    -9.82 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           49 |     1823 | 2026-04-27 | aAa               | W   | 0.734      | -            | -                | -                | -         |     6.61 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           48 |     1960 | 2026-04-25 | playersclub       | W   | 0.721      | -            | -                | -                | -         |     2.34 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           47 |     2047 | 2026-04-23 | aimclub           | W   | 0.708      | -            | -                | -                | -         |     5.80 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           46 |     2121 | 2026-04-20 | los kogutos       | L   | 0.685      | -            | -                | -                | -         |   -15.00 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           45 |     2126 | 2026-04-19 | Phantom Academy   | W   | 0.681      | -            | -                | -                | 1 (0.681) |     2.88 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           44 |     2131 | 2026-04-19 | INFINITE          | L   | 0.680      | -            | -                | -                | -         |    -4.08 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           43 |     2146 | 2026-04-19 | XI                | W   | 0.679      | -            | -                | -                | 1 (0.679) |     2.23 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           42 |     2707 | 2026-04-02 | Nemesis           | L   | 0.568      | -            | -                | -                | -         |    -6.35 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           41 |     2907 | 2026-03-31 | BET-M             | W   | 0.554      | 0.435        | 0.026 (0.006)    | -                | -         |    10.31 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           40 |     3020 | 2026-03-30 | illwill           | L   | 0.545      | -            | -                | -                | -         |   -11.44 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           39 |     3051 | 2026-03-29 | Leo               | W   | 0.541      | -            | -                | -                | -         |     3.35 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           38 |     3213 | 2026-03-27 | Lavked            | L   | 0.528      | -            | -                | -                | -         |   -11.98 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           37 |     3317 | 2026-03-25 | Ursa              | W   | 0.513      | 0.435        | 0.013 (0.003)    | 0.903 (0.201)    | -         |     5.49 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           36 |     3325 | 2026-03-25 | Persona Grata     | W   | 0.512      | -            | -                | -                | -         |     1.32 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           35 |     3438 | 2026-03-23 | PsychoFace        | L   | 0.500      | -            | -                | -                | -         |    -9.49 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           34 |     3485 | 2026-03-22 | megoshort         | W   | 0.494      | -            | -                | -                | -         |     2.41 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           33 |     3502 | 2026-03-22 | ASTRAL            | W   | 0.492      | 0.435        | 0.012 (0.003)    | 0.898 (0.192)    | -         |     8.34 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           32 |     3599 | 2026-03-20 | ex-MANA           | L   | 0.481      | -            | -                | -                | -         |   -11.76 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           31 |     3641 | 2026-03-19 | TDK               | L   | 0.475      | -            | -                | -                | -         |    -5.74 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           30 |     3658 | 2026-03-19 | ALGO              | L   | 0.473      | -            | -                | -                | -         |   -12.62 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           29 |     3678 | 2026-03-18 | cirahvi           | W   | 0.469      | -            | -                | -                | -         |     1.94 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           28 |     3749 | 2026-03-17 | Rune Eaters       | W   | 0.459      | -            | -                | -                | -         |     1.46 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           27 |     3973 | 2026-03-12 | M80               | W   | 0.427      | 0.350        | 0.070 (0.010)    | -                | 1 (0.427) |    10.92 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           26 |     3976 | 2026-03-12 | 9INE              | L   | 0.427      | -            | -                | -                | -         |    -6.54 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           25 |     3981 | 2026-03-12 | JiJieHao          | L   | 0.426      | -            | -                | -                | -         |    -4.08 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           24 |     3987 | 2026-03-12 | NIC               | W   | 0.426      | -            | -                | -                | 1 (0.426) |     0.30 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           23 |     4519 | 2026-03-01 | Fuzos             | W   | 0.354      | -            | -                | -                | 1 (0.354) |     1.22 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           22 |     4558 | 2026-02-28 | SAW Youngsters    | W   | 0.347      | -            | -                | -                | 1 (0.347) |     1.99 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           21 |     4694 | 2026-02-26 | Clutchain fe      | L   | 0.332      | -            | -                | -                | -         |    -9.30 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           20 |     4715 | 2026-02-25 | Ursa              | L   | 0.328      | -            | -                | -                | -         |    -7.98 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           19 |     5018 | 2026-02-19 | Passion UA        | L   | 0.289      | -            | -                | -                | -         |    -4.28 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           18 |     5023 | 2026-02-19 | HOTU              | L   | 0.288      | -            | -                | -                | -         |    -2.17 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           17 |     5032 | 2026-02-19 | Passion UA        | W   | 0.288      | -            | -                | -                | -         |     4.87 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           16 |     5082 | 2026-02-18 | Alliance          | L   | 0.281      | -            | -                | -                | -         |    -1.29 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           15 |     5145 | 2026-02-17 | ENCE              | W   | 0.275      | -            | -                | -                | -         |     1.19 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           14 |     5192 | 2026-02-16 | cirahvi           | L   | 0.267      | -            | -                | -                | -         |    -7.59 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           13 |     5197 | 2026-02-16 | TDK               | L   | 0.267      | -            | -                | -                | -         |    -3.93 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           12 |     5251 | 2026-02-15 | VP.Prodigy        | L   | 0.261      | -            | -                | -                | -         |    -7.83 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           11 |     5340 | 2026-02-14 | 1win              | W   | 0.252      | 0.384        | 0.081 (0.008)    | -                | -         |     4.69 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|           10 |     5377 | 2026-02-13 | BASEMENT BOYS     | W   | 0.246      | -            | -                | -                | -         |     4.69 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|            9 |     5570 | 2026-02-07 | SPARTA            | L   | 0.207      | -            | -                | -                | -         |    -3.52 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|            8 |     5620 | 2026-02-06 | WW                | W   | 0.199      | -            | -                | -                | -         |     2.56 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|            7 |     5686 | 2026-02-03 | Aurora Young Blud | L   | 0.180      | -            | -                | -                | -         |    -5.37 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|            6 |     5724 | 2026-02-02 | Clutchain fe      | W   | 0.173      | -            | -                | -                | -         |     0.56 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|            5 |     6174 | 2026-01-18 | BIG               | L   | 0.074      | -            | -                | -                | -         |    -0.44 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|            4 |     6209 | 2026-01-17 | BASEMENT BOYS     | W   | 0.068      | -            | -                | -                | -         |     1.32 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|            3 |     6279 | 2026-01-16 | SAW               | W   | 0.060      | -            | -                | -                | -         |     0.06 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|            2 |     6297 | 2026-01-16 | DimoniX           | W   | 0.059      | -            | -                | -                | -         |     0.04 | Icarus, NOPEEj, snapy, stadodo, TMKj |
|            1 |     6304 | 2026-01-16 | SAW               | L   | 0.059      | -            | -                | -                | -         |    -1.79 | Icarus, NOPEEj, snapy, stadodo, TMKj |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,739.23)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      0.914 | $500.00        | $457.16         |
| 2026-05-03 |      0.774 | $1,250.00      | $967.95         |
| 2026-04-20 |      0.687 | $1,178.00      | $809.72         |
| 2026-04-03 |      0.574 | $2,000.00      | $1,147.76       |
| 2026-03-01 |      0.354 | $3,530.00      | $1,248.21       |
| 2026-01-18 |      0.075 | $1,454.00      | $108.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
