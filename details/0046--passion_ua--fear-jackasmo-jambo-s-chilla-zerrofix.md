### Roster Details<br />
Team Name: Passion UA<br />
Roster: fear, jackasmo, jambo, s-chilla, zeRRoFIX<br />
Global Rank: [46](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [35]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1088.0<br />
<br />
Final Rank Value (1088.0) = Starting Rank Value (1092.6) + Head To Head Adjustments (-4.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.567[<sup>1</sup>](#table2)
- Bounty Collected: 0.463[<sup>2</sup>](#table1)
- Opponent Network: 0.312[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.336<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1092.6
- 400 + ( ( 0.336 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1092.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           90 |       51 | 2024-07-30 | CPH Wolves        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.41 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           89 |       92 | 2024-07-29 | Nexus             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.82 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           88 |      102 | 2024-07-29 | Into the Breach   | L   | 1.000      | -            | -                | -                | -         |   -28.12 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           87 |      143 | 2024-07-27 | SAW               | L   | 1.000      | -            | -                | -                | -         |   -12.16 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           86 |      166 | 2024-07-26 | Gaimin Gladiators | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.54 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           85 |      182 | 2024-07-26 | Astralis Talent   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.41 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           84 |      204 | 2024-07-25 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -26.52 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           83 |      224 | 2024-07-25 | 9INE              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.76 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           82 |      289 | 2024-07-23 | 9INE              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.34 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           81 |      310 | 2024-07-22 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -4.03 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           80 |      317 | 2024-07-22 | BC.Game           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.51 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           79 |      337 | 2024-07-21 | Zero Tenacity     | W   | 1.000      | 0.500        | 0.139 (0.069)    | 1.000 (0.500)    | 0 (0.000) |    17.43 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           78 |      373 | 2024-07-20 | Ninjas in Pyjamas | W   | 1.000      | 0.500        | 0.227 (0.113)    | 0.477 (0.239)    | 0 (0.000) |    29.48 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           77 |      384 | 2024-07-20 | RUBY              | W   | 1.000      | 0.435        | 0.097 (0.042)    | -                | 0 (0.000) |     9.11 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           76 |      417 | 2024-07-19 | Nemiga            | W   | 1.000      | 0.500        | 0.325 (0.163)    | 0.698 (0.349)    | -         |    21.18 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           75 |      469 | 2024-07-18 | Johnny Speeds     | W   | 1.000      | 0.371        | 0.124 (0.046)    | 0.817 (0.303)    | -         |    23.78 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           74 |      479 | 2024-07-18 | CPH Wolves        | L   | 1.000      | -            | -                | -                | -         |   -23.26 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           73 |      543 | 2024-07-17 | Aurora Young Blud | W   | 1.000      | -            | -                | -                | -         |     9.81 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           72 |      599 | 2024-07-16 | Permitta          | W   | 1.000      | 0.371        | -                | 0.799 (0.296)    | -         |    11.86 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           71 |      623 | 2024-07-15 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -9.26 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           70 |      646 | 2024-07-15 | WOPA              | W   | 1.000      | -            | -                | -                | -         |     1.97 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           69 |      662 | 2024-07-14 | Preasy            | W   | 1.000      | -            | -                | -                | -         |     6.54 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           68 |      725 | 2024-07-10 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -18.56 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           67 |      743 | 2024-07-09 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -18.82 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           66 |      745 | 2024-07-09 | Insilio           | W   | 1.000      | -            | -                | -                | -         |    12.04 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           65 |      766 | 2024-07-08 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -18.74 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           64 |      938 | 2024-06-14 | 3DMAX             | L   | 0.884      | -            | -                | -                | -         |    -3.10 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           63 |     1028 | 2024-06-10 | Space             | W   | 0.859      | -            | -                | -                | -         |     7.55 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           62 |     1141 | 2024-06-08 | Zero Tenacity     | L   | 0.846      | -            | -                | -                | -         |   -11.73 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           61 |     1201 | 2024-06-07 | Rare Atom         | W   | 0.839      | -            | -                | -                | -         |     2.49 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           60 |     1219 | 2024-06-07 | Aurora Young Blud | W   | 0.837      | -            | -                | -                | -         |     6.02 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           59 |     1278 | 2024-06-06 | Serbia            | W   | 0.831      | -            | -                | -                | -         |     5.69 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           58 |     1341 | 2024-06-05 | EYEBALLERS        | L   | 0.824      | -            | -                | -                | -         |   -19.40 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           57 |     1370 | 2024-06-04 | Illuminar         | W   | 0.819      | -            | -                | -                | -         |     5.34 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           56 |     1375 | 2024-06-04 | Serbia            | W   | 0.818      | -            | -                | -                | -         |     5.11 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           55 |     1429 | 2024-06-02 | UNiTY             | W   | 0.804      | -            | -                | -                | -         |     9.52 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           54 |     1489 | 2024-05-31 | Zero Tenacity     | L   | 0.791      | -            | -                | -                | -         |   -10.54 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           53 |     1509 | 2024-05-30 | Zero Tenacity     | W   | 0.786      | 0.371        | 0.139 (0.040)    | 1.000 (0.291)    | -         |    14.59 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           52 |     1540 | 2024-05-29 | Illuminar         | W   | 0.777      | -            | -                | -                | -         |     6.32 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           51 |     1611 | 2024-05-25 | Sampi             | W   | 0.753      | 0.435        | -                | 1.000 (0.327)    | -         |     8.12 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           50 |     1632 | 2024-05-24 | FURIA             | L   | 0.745      | -            | -                | -                | -         |    -0.79 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           49 |     1637 | 2024-05-24 | ECSTATIC          | W   | 0.744      | -            | -                | -                | -         |     0.65 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           48 |     1653 | 2024-05-23 | SINNERS           | W   | 0.737      | 0.435        | -                | 0.721 (0.231)    | -         |    11.23 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           47 |     1774 | 2024-05-20 | Permitta          | W   | 0.717      | 0.435        | -                | 0.799 (0.249)    | -         |     7.12 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           46 |     1788 | 2024-05-19 | Sashi             | L   | 0.713      | -            | -                | -                | -         |    -5.66 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           45 |     1797 | 2024-05-19 | ALTERNATE aTTaX   | W   | 0.711      | -            | -                | -                | -         |     8.75 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           44 |     1817 | 2024-05-18 | 9 Pandas          | L   | 0.706      | -            | -                | -                | -         |   -10.48 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           43 |     1862 | 2024-05-17 | Nexus             | W   | 0.698      | -            | -                | -                | -         |     4.92 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           42 |     1902 | 2024-05-16 | Sashi             | W   | 0.691      | 0.500        | 0.187 (0.064)    | 0.973 (0.336)    | -         |    16.76 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           41 |     1942 | 2024-05-15 | Endpoint          | L   | 0.686      | -            | -                | -                | -         |   -12.88 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           40 |     1997 | 2024-05-14 | SINNERS           | L   | 0.679      | -            | -                | -                | -         |   -11.12 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           39 |     2089 | 2024-05-11 | Preasy            | W   | 0.657      | -            | -                | -                | -         |     4.19 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           38 |     2252 | 2024-05-02 | Nemiga            | L   | 0.599      | -            | -                | -                | -         |    -5.72 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           37 |     2278 | 2024-05-01 | PARIVISION        | W   | 0.592      | -            | -                | -                | -         |    10.94 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           36 |     2313 | 2024-04-30 | 9 Pandas          | W   | 0.584      | -            | -                | -                | -         |     8.60 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           35 |     2340 | 2024-04-28 | ALTERNATE aTTaX   | L   | 0.572      | -            | -                | -                | -         |   -10.30 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           34 |     2390 | 2024-04-26 | 9 Pandas          | W   | 0.559      | -            | -                | -                | -         |     8.14 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           33 |     2426 | 2024-04-25 | Sashi             | L   | 0.551      | -            | -                | -                | -         |    -4.93 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           32 |     2438 | 2024-04-24 | Permitta          | L   | 0.545      | -            | -                | -                | -         |   -10.08 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           31 |     2470 | 2024-04-22 | B8                | L   | 0.533      | -            | -                | -                | -         |    -7.95 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           30 |     2512 | 2024-04-20 | Young Ninjas      | W   | 0.520      | -            | -                | -                | -         |     3.27 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           29 |     2532 | 2024-04-20 | Permitta          | L   | 0.517      | -            | -                | -                | -         |   -10.11 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           28 |     2569 | 2024-04-19 | ALTERNATE aTTaX   | L   | 0.512      | -            | -                | -                | -         |   -10.04 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           27 |     2621 | 2024-04-18 | Permitta          | W   | 0.505      | -            | -                | -                | -         |     5.90 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           26 |     2654 | 2024-04-17 | Sashi             | W   | 0.499      | 0.371        | 0.187 (0.034)    | -                | -         |     9.80 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           25 |     2688 | 2024-04-16 | 500               | L   | 0.493      | -            | -                | -                | -         |   -12.98 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           24 |     2727 | 2024-04-14 | SINNERS           | L   | 0.478      | -            | -                | -                | -         |    -6.77 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           23 |     2782 | 2024-04-11 | 3DMAX             | W   | 0.458      | 0.384        | 0.504 (0.089)    | -                | -         |    13.98 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           22 |     2829 | 2024-04-10 | Sashi             | W   | 0.451      | 0.371        | 0.187 (0.031)    | -                | -         |     9.18 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           21 |     3016 | 2024-04-04 | HAVU              | W   | 0.412      | -            | -                | -                | -         |     1.88 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           20 |     3088 | 2024-04-02 | BLEED             | L   | 0.399      | -            | -                | -                | -         |    -7.09 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           19 |     3117 | 2024-03-31 | FAVBET            | L   | 0.385      | -            | -                | -                | -         |    -9.89 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           18 |     3124 | 2024-03-30 | Lazer Cats        | W   | 0.378      | -            | -                | -                | -         |     0.67 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           17 |     3132 | 2024-03-29 | NAVI Junior       | L   | 0.372      | -            | -                | -                | -         |   -10.26 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           16 |     3151 | 2024-03-28 | GL Academy        | L   | 0.365      | -            | -                | -                | -         |    -9.85 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           15 |     3361 | 2024-03-17 | Sampi             | L   | 0.291      | -            | -                | -                | -         |    -6.50 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           14 |     3370 | 2024-03-16 | ex-Preasy         | L   | 0.285      | -            | -                | -                | -         |    -7.25 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           13 |     3423 | 2024-03-14 | Sampi             | W   | 0.271      | -            | -                | -                | -         |     2.37 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           12 |     3490 | 2024-03-12 | Alliance          | W   | 0.258      | -            | -                | -                | -         |     1.95 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           11 |     3512 | 2024-03-11 | MOUZ NXT          | L   | 0.252      | -            | -                | -                | -         |    -4.24 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           10 |     3531 | 2024-03-10 | MOUZ NXT          | W   | 0.245      | -            | -                | -                | -         |     3.64 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            9 |     3544 | 2024-03-09 | The Chosen Few    | L   | 0.239      | -            | -                | -                | -         |    -6.81 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            8 |     3572 | 2024-03-08 | Spirit Academy    | L   | 0.232      | -            | -                | -                | -         |    -6.96 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            7 |     3576 | 2024-03-08 | Entropiq          | W   | 0.232      | -            | -                | -                | -         |     0.37 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            6 |     3595 | 2024-03-07 | AURA              | W   | 0.226      | -            | -                | -                | -         |     0.26 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            5 |     3633 | 2024-03-06 | Permitta          | L   | 0.219      | -            | -                | -                | -         |    -4.84 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            4 |     3635 | 2024-03-06 | Fraud5            | W   | 0.218      | -            | -                | -                | -         |     0.55 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            3 |     3664 | 2024-03-05 | B8                | L   | 0.213      | -            | -                | -                | -         |    -3.36 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            2 |     3691 | 2024-03-04 | ALTERNATE aTTaX   | W   | 0.205      | -            | -                | -                | -         |     2.30 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            1 |     4222 | 2024-02-08 | BLEED             | L   | 0.038      | -            | -                | -                | -         |    -0.80 | jackasmo, jambo, marat2k, s-chilla, Zinchenko |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($56,611.54)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-28 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-07-25 |      1.000 | $11,000.00     | $11,000.00      |
| 2024-07-22 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-06-06 |      0.831 | $11,000.00     | $9,142.88       |
| 2024-05-03 |      0.605 | $12,500.00     | $7,567.75       |
| 2024-03-31 |      0.385 | $657.00        | $253.16         |
| 2024-03-30 |      0.378 | $1,000.00      | $377.96         |
| 2024-03-18 |      0.297 | $3,000.00      | $892.43         |
| 2024-03-11 |      0.252 | $1,500.00      | $377.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
