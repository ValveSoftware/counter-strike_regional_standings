### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: Burmylov, Chr1zN, Neityu, PR, sirah<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [44](../standings_global.md)<br />
Regional Rank: [32]( ../standings_europe.md)<br />
Final Rank Value:  1102.3<br />
<br />
Final Rank Value (1102.3) = Starting Rank Value (1057.5) + Head To Head Adjustments (44.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.565[<sup>1</sup>](#table2)
- Bounty Collected: 0.454[<sup>2</sup>](#table1)
- Opponent Network: 0.280[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.325<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1057.5
- 400 + ( ( 0.325 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1057.5


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
|           86 |      100 | 2024-07-21 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -3.96 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           85 |      140 | 2024-07-20 | BLEED             | W   | 1.000      | 0.500        | 0.162 (0.081)    | 0.439 (0.219)    | 0 (0.000) |    21.14 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           84 |      152 | 2024-07-19 | Rhyno             | W   | 1.000      | 0.500        | 0.091 (0.045)    | 0.453 (0.226)    | 0 (0.000) |    12.92 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           83 |      205 | 2024-07-18 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -1.48 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           82 |      351 | 2024-07-16 | Rhyno             | W   | 1.000      | 0.500        | 0.091 (0.045)    | 0.453 (0.226)    | 0 (0.000) |    13.51 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           81 |      730 | 2024-06-13 | B8                | L   | 0.924      | -            | -                | -                | -         |   -11.92 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           80 |      791 | 2024-06-10 | Endpoint          | L   | 0.906      | -            | -                | -                | -         |   -22.07 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           79 |      830 | 2024-06-09 | GhoulsW           | W   | 0.900      | -            | -                | -                | 0 (0.000) |     0.57 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           78 |      842 | 2024-06-09 | BLEED             | L   | 0.899      | -            | -                | -                | -         |    -8.57 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           77 |      906 | 2024-06-08 | Sampi             | W   | 0.893      | 0.435        | -                | 0.994 (0.385)    | 0 (0.000) |     7.13 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           76 |      914 | 2024-06-08 | ECLOT             | L   | 0.892      | -            | -                | -                | -         |   -13.90 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           75 |      941 | 2024-06-07 | GamerLegion       | L   | 0.887      | -            | -                | -                | -         |   -10.19 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           74 |     1007 | 2024-06-06 | Rhyno             | W   | 0.880      | -            | -                | -                | 0 (0.000) |    10.00 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           73 |     1032 | 2024-06-06 | Entropiq          | W   | 0.879      | -            | -                | -                | 0 (0.000) |     0.51 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           72 |     1136 | 2024-06-04 | NAVI Junior       | W   | 0.865      | -            | -                | -                | 0 (0.000) |     1.27 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           71 |     1142 | 2024-06-04 | Aurora Young Blud | W   | 0.864      | -            | -                | -                | 0 (0.000) |     3.89 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           70 |     1181 | 2024-06-02 | FURIA             | L   | 0.852      | -            | -                | -                | -         |    -1.25 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           69 |     1212 | 2024-06-01 | AMKAL             | W   | 0.846      | 0.435        | 0.111 (0.041)    | -                | 0 (0.000) |    16.49 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           68 |     1273 | 2024-05-30 | Sangal            | W   | 0.831      | 0.435        | 0.195 (0.070)    | 0.860 (0.310)    | -         |    14.18 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           67 |     1314 | 2024-05-28 | RUBY              | W   | 0.820      | 0.435        | 0.122 (0.043)    | -                | -         |     9.30 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           66 |     1342 | 2024-05-27 | Nexus             | W   | 0.811      | -            | -                | -                | -         |     4.59 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           65 |     1349 | 2024-05-26 | 9 Pandas          | L   | 0.806      | -            | -                | -                | -         |   -11.76 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           64 |     1357 | 2024-05-26 | B8                | W   | 0.805      | 0.435        | 0.206 (0.072)    | 0.933 (0.326)    | -         |    16.89 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           63 |     1381 | 2024-05-25 | 3DMAX             | W   | 0.798      | 0.435        | 0.175 (0.061)    | 1.000 (0.347)    | -         |    18.34 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           62 |     1396 | 2024-05-24 | Illuminar         | W   | 0.791      | -            | -                | -                | -         |     7.02 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           61 |     1408 | 2024-05-23 | Rare Atom         | W   | 0.785      | -            | -                | -                | -         |     2.61 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           60 |     1448 | 2024-05-22 | Rhyno             | L   | 0.779      | -            | -                | -                | -         |   -12.95 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           59 |     1490 | 2024-05-21 | DMS               | L   | 0.772      | -            | -                | -                | -         |   -17.52 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           58 |     1560 | 2024-05-19 | BLEED             | L   | 0.758      | -            | -                | -                | -         |    -6.34 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           57 |     1626 | 2024-05-17 | DMS               | W   | 0.744      | -            | -                | -                | -         |     6.03 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           56 |     1650 | 2024-05-16 | Sampi             | W   | 0.739      | 0.435        | -                | 0.994 (0.319)    | -         |     8.02 | Chr1zN, Neityu, PR, sirah, TOBIZ       |
|           55 |     1710 | 2024-05-15 | BLEED             | L   | 0.731      | -            | -                | -                | -         |    -5.17 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           54 |     1766 | 2024-05-14 | B8                | L   | 0.725      | -            | -                | -                | -         |    -9.77 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           53 |     1790 | 2024-05-13 | Space             | W   | 0.718      | -            | -                | -                | -         |     5.29 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           52 |     1812 | 2024-05-12 | B8                | L   | 0.712      | -            | -                | -                | -         |   -10.68 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           51 |     1823 | 2024-05-11 | Endpoint          | W   | 0.707      | -            | -                | -                | -         |     7.85 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           50 |     1852 | 2024-05-10 | Aurora            | W   | 0.701      | 0.435        | 0.423 (0.129)    | 0.783 (0.238)    | -         |    20.65 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           49 |     1922 | 2024-05-07 | RUSH B            | W   | 0.679      | -            | -                | -                | -         |     5.46 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           48 |     1964 | 2024-05-05 | GL Academy        | W   | 0.665      | -            | -                | -                | -         |     4.01 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           47 |     1967 | 2024-05-04 | Enterprise        | L   | 0.660      | -            | -                | -                | -         |   -14.41 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           46 |     1987 | 2024-05-03 | Nemiga            | L   | 0.653      | -            | -                | -                | -         |    -6.11 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           45 |     2004 | 2024-05-02 | Endpoint          | L   | 0.647      | -            | -                | -                | -         |   -13.67 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           44 |     2020 | 2024-05-02 | ALTERNATE aTTaX   | W   | 0.645      | 0.500        | -                | 0.638 (0.206)    | -         |     8.31 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           43 |     2025 | 2024-05-02 | 9 Pandas          | L   | 0.644      | -            | -                | -                | -         |   -11.89 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           42 |     2040 | 2024-05-01 | BLEED             | W   | 0.639      | 0.500        | 0.126 (0.040)    | -                | -         |    11.65 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           41 |     2052 | 2024-04-30 | ECLOT             | W   | 0.634      | -            | -                | -                | -         |    12.24 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           40 |     2062 | 2024-04-30 | V1dar             | W   | 0.632      | -            | -                | -                | -         |     1.14 | Burmylov, Chr1zN, PR, sirah, TOBIZ     |
|           39 |     2076 | 2024-04-29 | Nemiga            | L   | 0.627      | -            | -                | -                | -         |    -6.25 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           38 |     2086 | 2024-04-29 | Grannys Knockers  | W   | 0.625      | -            | -                | -                | -         |     3.72 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           37 |     2116 | 2024-04-27 | ECLOT             | W   | 0.614      | -            | -                | -                | -         |    12.32 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           36 |     2186 | 2024-04-25 | Insilio           | L   | 0.598      | -            | -                | -                | -         |   -12.24 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           35 |     2200 | 2024-04-24 | PARIVISION        | L   | 0.592      | -            | -                | -                | -         |   -10.70 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           34 |     2232 | 2024-04-22 | EYEBALLERS        | W   | 0.579      | -            | -                | -                | -         |     5.04 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           33 |     2239 | 2024-04-22 | Nemiga            | L   | 0.578      | -            | -                | -                | -         |    -5.75 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           32 |     2250 | 2024-04-21 | ALTERNATE aTTaX   | W   | 0.573      | -            | -                | -                | -         |     6.58 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           31 |     2256 | 2024-04-21 | ECLOT             | L   | 0.572      | -            | -                | -                | -         |    -7.22 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           30 |     2278 | 2024-04-20 | BLEED             | L   | 0.566      | -            | -                | -                | -         |    -9.03 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           29 |     2365 | 2024-04-18 | Enterprise        | W   | 0.553      | -            | -                | -                | -         |     5.93 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           28 |     2387 | 2024-04-18 | ENCE Academy      | W   | 0.552      | -            | -                | -                | -         |     2.83 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           27 |     2434 | 2024-04-17 | JANO              | W   | 0.544      | -            | -                | -                | -         |     1.96 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           26 |     2447 | 2024-04-16 | GamerLegion       | L   | 0.539      | -            | -                | -                | -         |    -6.20 | Anlelele, Burmylov, Neityu, PR, sirah  |
|           25 |     2473 | 2024-04-15 | Alliance          | W   | 0.531      | -            | -                | -                | -         |     4.29 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           24 |     2514 | 2024-04-12 | Permitta          | L   | 0.512      | -            | -                | -                | -         |   -10.42 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           23 |     2641 | 2024-04-09 | Zero Tenacity     | W   | 0.492      | -            | -                | -                | -         |     7.98 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           22 |     2671 | 2024-04-08 | B8                | W   | 0.485      | -            | -                | -                | -         |     8.22 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           21 |     2801 | 2024-04-03 | PARIVISION        | W   | 0.454      | -            | -                | -                | -         |     7.11 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           20 |     3130 | 2024-03-16 | Sampi             | L   | 0.332      | -            | -                | -                | -         |    -7.06 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           19 |     3147 | 2024-03-15 | Entropiq          | W   | 0.326      | -            | -                | -                | -         |     0.71 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           18 |     3196 | 2024-03-13 | Permitta          | L   | 0.314      | -            | -                | -                | -         |    -6.20 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           17 |     3216 | 2024-03-13 | Alliance          | W   | 0.312      | -            | -                | -                | -         |     2.67 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           16 |     3244 | 2024-03-12 | AURA              | W   | 0.306      | -            | -                | -                | -         |     0.43 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           15 |     3250 | 2024-03-12 | Sampi             | L   | 0.305      | -            | -                | -                | -         |    -6.68 | Burmylov, Chr1zN, Neityu, sirah, xReal |
|           14 |     3270 | 2024-03-11 | Passion UA        | W   | 0.299      | -            | -                | -                | -         |     4.88 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           13 |     3272 | 2024-03-11 | NOM               | W   | 0.298      | -            | -                | -                | -         |     0.47 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           12 |     3280 | 2024-03-10 | V1dar             | W   | 0.294      | -            | -                | -                | -         |     0.47 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           11 |     3289 | 2024-03-10 | Passion UA        | L   | 0.292      | -            | -                | -                | -         |    -4.51 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           10 |     3293 | 2024-03-10 | ALTERNATE aTTaX   | W   | 0.291      | -            | -                | -                | -         |     3.98 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            9 |     3331 | 2024-03-08 | Fraud5            | W   | 0.280      | -            | -                | -                | -         |     0.88 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            8 |     3347 | 2024-03-07 | INGLORIOUS        | L   | 0.274      | -            | -                | -                | -         |    -8.19 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            7 |     3482 | 2024-03-03 | ex-Preasy         | W   | 0.245      | -            | -                | -                | -         |     1.61 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            6 |     3495 | 2024-03-02 | kONO              | W   | 0.239      | -            | -                | -                | -         |     1.61 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            5 |     3565 | 2024-02-27 | ECLOT             | L   | 0.212      | -            | -                | -                | -         |    -2.58 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            4 |     3580 | 2024-02-26 | BLEED             | W   | 0.206      | -            | -                | -                | -         |     2.64 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            3 |     3643 | 2024-02-24 | Sashi             | W   | 0.191      | -            | -                | -                | -         |     3.93 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            2 |     3697 | 2024-02-21 | Entropiq          | W   | 0.171      | -            | -                | -                | -         |     0.32 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            1 |     4191 | 2024-01-27 | TSM               | L   | 0.004      | -            | -                | -                | -         |    -0.13 | Burmylov, Chr1zN, Neityu, PR, sirah    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($46,807.59)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-22 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-06-02 |      0.853 | $5,000.00      | $4,263.95       |
| 2024-05-26 |      0.806 | $10,000.00     | $8,063.95       |
| 2024-05-18 |      0.753 | $500.00        | $376.73         |
| 2024-05-12 |      0.713 | $5,000.00      | $3,567.30       |
| 2024-05-03 |      0.653 | $25,000.00     | $16,317.70      |
| 2024-03-18 |      0.345 | $1,000.00      | $344.77         |
| 2024-03-11 |      0.299 | $3,500.00      | $1,046.02       |
| 2024-02-28 |      0.218 | $1,500.00      | $327.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
