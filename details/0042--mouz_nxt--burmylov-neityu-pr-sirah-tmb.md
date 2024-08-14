### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: Burmylov, Neityu, PR, sirah, TMB<br />
Global Rank: [42](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [31]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1083.8<br />
<br />
Final Rank Value (1083.8) = Starting Rank Value (1009.0) + Head To Head Adjustments (74.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.530[<sup>1</sup>](#table2)
- Bounty Collected: 0.451[<sup>2</sup>](#table1)
- Opponent Network: 0.253[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.309<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1009.0
- 400 + ( ( 0.309 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 1009.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           93 |        9 | 2024-08-14 | kONO              | W   | 1.000      | 0.384        | -                | 0.603 (0.232)    | 0 (0.000) |     8.47 | Burmylov, Neityu, PR, sirah, TMB       |
|           92 |      163 | 2024-08-09 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -22.43 | Burmylov, Neityu, PR, sirah, TOBIZ     |
|           91 |      192 | 2024-08-08 | AMKAL             | W   | 1.000      | 0.426        | 0.115 (0.049)    | -                | 0 (0.000) |    16.63 | Burmylov, Neityu, PR, sirah, TOBIZ     |
|           90 |      361 | 2024-08-03 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |   -20.88 | Burmylov, Neityu, PR, sirah, TOBIZ     |
|           89 |      569 | 2024-07-29 | CYBERSHOKE        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.19 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           88 |      572 | 2024-07-29 | Monte Gen         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.44 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           87 |      628 | 2024-07-27 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -4.80 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           86 |      700 | 2024-07-25 | Aurora Young Blud | W   | 1.000      | 0.435        | -                | 0.594 (0.258)    | 0 (0.000) |     9.98 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           85 |      823 | 2024-07-21 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -4.95 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           84 |      863 | 2024-07-20 | BLEED             | W   | 1.000      | 0.500        | 0.117 (0.058)    | 0.520 (0.260)    | 0 (0.000) |    24.04 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           83 |      875 | 2024-07-19 | Rhyno             | W   | 1.000      | 0.500        | 0.066 (0.033)    | 0.407 (0.203)    | 0 (0.000) |    11.71 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           82 |      928 | 2024-07-18 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -2.12 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           81 |     1074 | 2024-07-16 | Rhyno             | W   | 1.000      | 0.500        | 0.066 (0.033)    | 0.407 (0.203)    | 0 (0.000) |    12.10 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           80 |     1453 | 2024-06-13 | B8                | L   | 0.784      | -            | -                | -                | -         |   -10.78 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           79 |     1514 | 2024-06-10 | Endpoint          | L   | 0.765      | -            | -                | -                | -         |   -17.16 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           78 |     1553 | 2024-06-09 | GhoulsW           | W   | 0.759      | -            | -                | -                | 0 (0.000) |     0.54 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           77 |     1565 | 2024-06-09 | BLEED             | L   | 0.758      | -            | -                | -                | -         |    -5.02 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           76 |     1629 | 2024-06-08 | Sampi             | W   | 0.752      | 0.435        | -                | 0.981 (0.321)    | 0 (0.000) |     6.22 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           75 |     1637 | 2024-06-08 | ECLOT             | L   | 0.752      | -            | -                | -                | -         |    -9.18 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           74 |     1664 | 2024-06-07 | GamerLegion       | L   | 0.747      | -            | -                | -                | -         |   -10.86 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           73 |     1730 | 2024-06-06 | Rhyno             | W   | 0.740      | -            | -                | -                | -         |     7.59 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           72 |     1755 | 2024-06-06 | Entropiq          | W   | 0.738      | -            | -                | -                | -         |     0.50 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           71 |     1859 | 2024-06-04 | NAVI Junior       | W   | 0.725      | -            | -                | -                | -         |     2.59 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           70 |     1865 | 2024-06-04 | Aurora Young Blud | W   | 0.724      | -            | -                | -                | -         |     6.08 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           69 |     1904 | 2024-06-02 | FURIA             | L   | 0.711      | -            | -                | -                | -         |    -1.21 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           68 |     1935 | 2024-06-01 | AMKAL             | W   | 0.705      | 0.435        | 0.115 (0.035)    | -                | -         |    13.85 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           67 |     1996 | 2024-05-30 | Sangal            | W   | 0.691      | 0.435        | 0.276 (0.083)    | 0.851 (0.255)    | -         |    13.58 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           66 |     2037 | 2024-05-28 | RUBY              | W   | 0.679      | 0.435        | 0.089 (0.026)    | -                | -         |     7.26 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           65 |     2065 | 2024-05-27 | Nexus             | W   | 0.671      | -            | -                | -                | -         |     3.95 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           64 |     2072 | 2024-05-26 | 9 Pandas          | L   | 0.666      | -            | -                | -                | -         |   -10.53 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           63 |     2080 | 2024-05-26 | B8                | W   | 0.664      | 0.435        | 0.174 (0.050)    | 0.903 (0.261)    | -         |    13.25 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           62 |     2104 | 2024-05-25 | 3DMAX             | W   | 0.657      | 0.435        | 0.508 (0.145)    | 1.000 (0.286)    | -         |    19.56 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           61 |     2119 | 2024-05-24 | Illuminar         | W   | 0.650      | -            | -                | -                | -         |     5.90 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           60 |     2131 | 2024-05-23 | Rare Atom         | W   | 0.645      | -            | -                | -                | -         |     5.27 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           59 |     2171 | 2024-05-22 | Rhyno             | L   | 0.638      | -            | -                | -                | -         |   -11.79 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           58 |     2213 | 2024-05-21 | DMS               | L   | 0.632      | -            | -                | -                | -         |   -13.26 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           57 |     2283 | 2024-05-19 | BLEED             | L   | 0.617      | -            | -                | -                | -         |    -3.21 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           56 |     2349 | 2024-05-17 | DMS               | W   | 0.604      | -            | -                | -                | -         |     6.23 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           55 |     2373 | 2024-05-16 | Sampi             | W   | 0.599      | 0.435        | -                | 0.981 (0.255)    | -         |     6.17 | Chr1zN, Neityu, PR, sirah, TOBIZ       |
|           54 |     2433 | 2024-05-15 | BLEED             | L   | 0.591      | -            | -                | -                | -         |    -2.55 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           53 |     2489 | 2024-05-14 | B8                | L   | 0.584      | -            | -                | -                | -         |    -8.24 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           52 |     2513 | 2024-05-13 | Space             | W   | 0.577      | -            | -                | -                | -         |     4.16 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           51 |     2535 | 2024-05-12 | B8                | L   | 0.571      | -            | -                | -                | -         |    -8.75 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           50 |     2546 | 2024-05-11 | Endpoint          | W   | 0.567      | -            | -                | -                | -         |     8.29 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           49 |     2575 | 2024-05-10 | Aurora            | W   | 0.560      | 0.435        | 0.387 (0.094)    | -                | -         |    16.69 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           48 |     2645 | 2024-05-07 | RUSH B            | W   | 0.539      | -            | -                | -                | -         |     5.11 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           47 |     2687 | 2024-05-05 | GL Academy        | W   | 0.524      | -            | -                | -                | -         |     2.99 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           46 |     2690 | 2024-05-04 | Enterprise        | L   | 0.520      | -            | -                | -                | -         |   -11.34 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           45 |     2710 | 2024-05-03 | Nemiga            | L   | 0.512      | -            | -                | -                | -         |    -4.39 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           44 |     2727 | 2024-05-02 | Endpoint          | L   | 0.507      | -            | -                | -                | -         |    -8.75 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           43 |     2743 | 2024-05-02 | ALTERNATE aTTaX   | W   | 0.505      | -            | -                | -                | -         |     6.47 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           42 |     2748 | 2024-05-02 | 9 Pandas          | L   | 0.504      | -            | -                | -                | -         |    -9.35 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           41 |     2763 | 2024-05-01 | BLEED             | W   | 0.498      | -            | -                | -                | -         |     7.91 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           40 |     2775 | 2024-04-30 | ECLOT             | W   | 0.493      | -            | -                | -                | -         |    11.56 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           39 |     2785 | 2024-04-30 | V1dar             | W   | 0.492      | -            | -                | -                | -         |     0.94 | Burmylov, Chr1zN, PR, sirah, TOBIZ     |
|           38 |     2799 | 2024-04-29 | Nemiga            | L   | 0.486      | -            | -                | -                | -         |    -4.32 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           37 |     2809 | 2024-04-29 | Grannys Knockers  | W   | 0.484      | -            | -                | -                | -         |     2.90 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           36 |     2839 | 2024-04-27 | ECLOT             | W   | 0.473      | -            | -                | -                | -         |    11.39 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           35 |     2909 | 2024-04-25 | Insilio           | L   | 0.457      | -            | -                | -                | -         |    -9.55 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           34 |     2923 | 2024-04-24 | PARIVISION        | L   | 0.452      | -            | -                | -                | -         |    -6.11 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           33 |     2955 | 2024-04-22 | EYEBALLERS        | W   | 0.439      | -            | -                | -                | -         |     4.53 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           32 |     2962 | 2024-04-22 | Nemiga            | L   | 0.437      | -            | -                | -                | -         |    -3.78 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           31 |     2973 | 2024-04-21 | ALTERNATE aTTaX   | W   | 0.432      | -            | -                | -                | -         |     5.16 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           30 |     2979 | 2024-04-21 | ECLOT             | L   | 0.431      | -            | -                | -                | -         |    -3.39 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           29 |     3001 | 2024-04-20 | BLEED             | L   | 0.426      | -            | -                | -                | -         |    -7.67 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           28 |     3088 | 2024-04-18 | Enterprise        | W   | 0.412      | -            | -                | -                | -         |     4.51 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           27 |     3110 | 2024-04-18 | ENCE Academy      | W   | 0.411      | -            | -                | -                | -         |     1.92 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           26 |     3157 | 2024-04-17 | JANO              | W   | 0.404      | -            | -                | -                | -         |     1.61 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           25 |     3170 | 2024-04-16 | GamerLegion       | L   | 0.399      | -            | -                | -                | -         |    -5.59 | Anlelele, Burmylov, Neityu, PR, sirah  |
|           24 |     3196 | 2024-04-15 | Alliance          | W   | 0.391      | -            | -                | -                | -         |     3.21 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           23 |     3237 | 2024-04-12 | Permitta          | L   | 0.371      | -            | -                | -                | -         |    -6.84 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           22 |     3364 | 2024-04-09 | Zero Tenacity     | W   | 0.352      | -            | -                | -                | -         |     6.00 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           21 |     3394 | 2024-04-08 | B8                | W   | 0.345      | -            | -                | -                | -         |     5.85 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           20 |     3524 | 2024-04-03 | PARIVISION        | W   | 0.313      | -            | -                | -                | -         |     6.33 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           19 |     3853 | 2024-03-16 | Sampi             | L   | 0.191      | -            | -                | -                | -         |    -4.12 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           18 |     3870 | 2024-03-15 | Entropiq          | W   | 0.185      | -            | -                | -                | -         |     0.41 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           17 |     3919 | 2024-03-13 | Permitta          | L   | 0.174      | -            | -                | -                | -         |    -3.09 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           16 |     3939 | 2024-03-13 | Alliance          | W   | 0.172      | -            | -                | -                | -         |     1.49 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           15 |     3967 | 2024-03-12 | AURA              | W   | 0.166      | -            | -                | -                | -         |     0.26 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           14 |     3973 | 2024-03-12 | Sampi             | L   | 0.164      | -            | -                | -                | -         |    -3.60 | Burmylov, Chr1zN, Neityu, sirah, xReal |
|           13 |     3993 | 2024-03-11 | Passion UA        | W   | 0.158      | -            | -                | -                | -         |     2.83 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           12 |     3995 | 2024-03-11 | NOM               | W   | 0.157      | -            | -                | -                | -         |     0.26 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           11 |     4003 | 2024-03-10 | V1dar             | W   | 0.153      | -            | -                | -                | -         |     0.28 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           10 |     4012 | 2024-03-10 | Passion UA        | L   | 0.152      | -            | -                | -                | -         |    -2.09 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            9 |     4016 | 2024-03-10 | ALTERNATE aTTaX   | W   | 0.151      | -            | -                | -                | -         |     2.01 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            8 |     4054 | 2024-03-08 | Fraud5            | W   | 0.139      | -            | -                | -                | -         |     0.46 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            7 |     4070 | 2024-03-07 | INGLORIOUS        | L   | 0.134      | -            | -                | -                | -         |    -3.95 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            6 |     4205 | 2024-03-03 | ex-Preasy         | W   | 0.104      | -            | -                | -                | -         |     0.59 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            5 |     4218 | 2024-03-02 | kONO              | W   | 0.098      | -            | -                | -                | -         |     0.89 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            4 |     4288 | 2024-02-27 | ECLOT             | L   | 0.072      | -            | -                | -                | -         |    -0.51 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            3 |     4303 | 2024-02-26 | BLEED             | W   | 0.065      | -            | -                | -                | -         |     0.76 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            2 |     4366 | 2024-02-24 | Sashi             | W   | 0.051      | -            | -                | -                | -         |     1.03 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            1 |     4420 | 2024-02-21 | Entropiq          | W   | 0.031      | -            | -                | -                | -         |     0.06 | Burmylov, Chr1zN, Neityu, PR, sirah    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($41,570.23)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-28 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-07-22 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-06-02 |      0.712 | $5,000.00      | $3,561.29       |
| 2024-05-26 |      0.666 | $10,000.00     | $6,658.64       |
| 2024-05-18 |      0.613 | $500.00        | $306.47         |
| 2024-05-12 |      0.573 | $5,000.00      | $2,864.64       |
| 2024-05-03 |      0.512 | $25,000.00     | $12,804.42      |
| 2024-03-18 |      0.204 | $1,000.00      | $204.23         |
| 2024-03-11 |      0.158 | $3,500.00      | $554.16         |
| 2024-02-28 |      0.078 | $1,500.00      | $116.38         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
