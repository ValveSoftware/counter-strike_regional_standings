### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: Burmylov, Chr1zN, Neityu, PR, sirah<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [50](../standings_global.md)<br />
Regional Rank: [36]( ../standings_europe.md)<br />
Final Rank Value:  1110.7<br />
<br />
Final Rank Value (1110.7) = Starting Rank Value (1103.1) + Head To Head Adjustments (7.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.548[<sup>1</sup>](#table2)
- Bounty Collected: 0.469[<sup>2</sup>](#table1)
- Opponent Network: 0.292[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.327<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1103.1
- 400 + ( ( 0.327 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1103.1


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
|           85 |       63 | 2024-07-16 | Rhyno             | W   | 1.000      | 0.500        | 0.108 (0.054)    | -                | 0 (0.000) |    13.53 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           84 |      442 | 2024-06-13 | B8                | L   | 0.971      | -            | -                | -                | -         |   -12.37 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           83 |      503 | 2024-06-10 | Endpoint          | L   | 0.953      | -            | -                | -                | -         |   -23.57 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           82 |      542 | 2024-06-09 | GhoulsW           | W   | 0.947      | -            | -                | -                | 0 (0.000) |     0.48 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           81 |      554 | 2024-06-09 | BLEED             | L   | 0.946      | -            | -                | -                | -         |   -10.53 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           80 |      618 | 2024-06-08 | Sampi             | W   | 0.940      | 0.435        | -                | 0.975 (0.398)    | 0 (0.000) |     7.37 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           79 |      626 | 2024-06-08 | ECLOT             | L   | 0.939      | -            | -                | -                | -         |   -13.97 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           78 |      653 | 2024-06-07 | GamerLegion       | L   | 0.934      | -            | -                | -                | -         |    -9.45 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           77 |      719 | 2024-06-06 | Rhyno             | W   | 0.928      | 0.500        | 0.108 (0.050)    | -                | 0 (0.000) |    10.39 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           76 |      744 | 2024-06-06 | Entropiq          | W   | 0.926      | -            | -                | -                | 0 (0.000) |     0.44 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           75 |      848 | 2024-06-04 | NAVI Junior       | W   | 0.913      | -            | -                | -                | 0 (0.000) |     1.17 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           74 |      854 | 2024-06-04 | Aurora Young Blud | W   | 0.911      | -            | -                | -                | 0 (0.000) |     3.42 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           73 |      893 | 2024-06-02 | FURIA             | L   | 0.899      | -            | -                | -                | -         |    -2.90 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           72 |      924 | 2024-06-01 | AMKAL             | W   | 0.893      | 0.435        | 0.134 (0.052)    | 0.523 (0.203)    | 0 (0.000) |    17.43 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           71 |      985 | 2024-05-30 | Sangal            | W   | 0.878      | 0.435        | 0.232 (0.089)    | 0.893 (0.341)    | 0 (0.000) |    15.02 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           70 |     1026 | 2024-05-28 | RUBY              | W   | 0.867      | 0.435        | 0.144 (0.054)    | 0.580 (0.219)    | 0 (0.000) |     9.98 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           69 |     1054 | 2024-05-27 | Nexus             | W   | 0.858      | -            | -                | -                | -         |     4.46 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           68 |     1061 | 2024-05-26 | 9 Pandas          | L   | 0.854      | -            | -                | -                | -         |   -11.94 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           67 |     1069 | 2024-05-26 | B8                | W   | 0.852      | 0.435        | 0.246 (0.091)    | 1.000 (0.370)    | -         |    18.19 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           66 |     1093 | 2024-05-25 | 3DMAX             | W   | 0.845      | 0.435        | 0.209 (0.077)    | 1.000 (0.367)    | -         |    18.74 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           65 |     1108 | 2024-05-24 | Illuminar         | W   | 0.838      | -            | -                | -                | -         |     7.03 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           64 |     1120 | 2024-05-23 | Rare Atom         | W   | 0.832      | -            | -                | -                | -         |     2.54 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           63 |     1160 | 2024-05-22 | Rhyno             | L   | 0.826      | -            | -                | -                | -         |   -13.75 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           62 |     1202 | 2024-05-21 | DMS               | L   | 0.820      | -            | -                | -                | -         |   -18.44 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           61 |     1272 | 2024-05-19 | BLEED             | L   | 0.805      | -            | -                | -                | -         |    -8.26 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           60 |     1338 | 2024-05-17 | DMS               | W   | 0.792      | -            | -                | -                | -         |     6.47 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           59 |     1362 | 2024-05-16 | Sampi             | W   | 0.787      | 0.435        | -                | 0.975 (0.333)    | -         |     8.63 | Chr1zN, Neityu, PR, sirah, TOBIZ       |
|           58 |     1422 | 2024-05-15 | BLEED             | L   | 0.778      | -            | -                | -                | -         |    -6.94 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           57 |     1478 | 2024-05-14 | B8                | L   | 0.772      | -            | -                | -                | -         |   -10.06 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           56 |     1502 | 2024-05-13 | Space             | W   | 0.765      | -            | -                | -                | -         |     5.60 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           55 |     1524 | 2024-05-12 | B8                | L   | 0.759      | -            | -                | -                | -         |   -11.12 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           54 |     1535 | 2024-05-11 | Endpoint          | W   | 0.755      | -            | -                | -                | -         |     8.04 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           53 |     1564 | 2024-05-10 | Aurora            | W   | 0.748      | 0.435        | 0.514 (0.167)    | 0.813 (0.264)    | -         |    22.20 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           52 |     1634 | 2024-05-07 | RUSH B            | W   | 0.726      | -            | -                | -                | -         |     5.46 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           51 |     1676 | 2024-05-05 | GL Academy        | W   | 0.712      | -            | -                | -                | -         |     4.16 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           50 |     1679 | 2024-05-04 | Enterprise        | L   | 0.708      | -            | -                | -                | -         |   -15.42 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           49 |     1699 | 2024-05-03 | Nemiga            | L   | 0.700      | -            | -                | -                | -         |    -5.88 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           48 |     1716 | 2024-05-02 | Endpoint          | L   | 0.694      | -            | -                | -                | -         |   -14.95 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           47 |     1732 | 2024-05-02 | ALTERNATE aTTaX   | W   | 0.692      | 0.500        | -                | 0.644 (0.223)    | -         |     8.82 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           46 |     1737 | 2024-05-02 | 9 Pandas          | L   | 0.691      | -            | -                | -                | -         |   -12.38 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           45 |     1752 | 2024-05-01 | BLEED             | W   | 0.686      | 0.500        | 0.156 (0.053)    | -                | -         |    13.20 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           44 |     1764 | 2024-04-30 | ECLOT             | W   | 0.681      | -            | -                | -                | -         |    13.77 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           43 |     1774 | 2024-04-30 | V1dar             | W   | 0.680      | -            | -                | -                | -         |     1.06 | Burmylov, Chr1zN, PR, sirah, TOBIZ     |
|           42 |     1788 | 2024-04-29 | Nemiga            | L   | 0.674      | -            | -                | -                | -         |    -5.95 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           41 |     1798 | 2024-04-29 | Grannys Knockers  | W   | 0.672      | -            | -                | -                | -         |     3.96 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           40 |     1828 | 2024-04-27 | ECLOT             | W   | 0.661      | -            | -                | -                | -         |    13.95 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           39 |     1898 | 2024-04-25 | Insilio           | L   | 0.645      | -            | -                | -                | -         |   -13.11 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           38 |     1912 | 2024-04-24 | PARIVISION        | L   | 0.640      | -            | -                | -                | -         |   -13.62 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           37 |     1944 | 2024-04-22 | EYEBALLERS        | W   | 0.626      | -            | -                | -                | -         |     5.36 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           36 |     1951 | 2024-04-22 | Nemiga            | L   | 0.625      | -            | -                | -                | -         |    -5.45 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           35 |     1962 | 2024-04-21 | ALTERNATE aTTaX   | W   | 0.620      | -            | -                | -                | -         |     7.02 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           34 |     1968 | 2024-04-21 | ECLOT             | L   | 0.619      | -            | -                | -                | -         |    -7.18 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           33 |     1990 | 2024-04-20 | BLEED             | L   | 0.614      | -            | -                | -                | -         |    -9.04 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           32 |     2077 | 2024-04-18 | Enterprise        | W   | 0.600      | -            | -                | -                | -         |     6.62 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           31 |     2099 | 2024-04-18 | ENCE Academy      | W   | 0.599      | -            | -                | -                | -         |     3.05 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           30 |     2146 | 2024-04-17 | JANO              | W   | 0.591      | -            | -                | -                | -         |     1.94 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           29 |     2159 | 2024-04-16 | GamerLegion       | L   | 0.587      | -            | -                | -                | -         |    -5.75 | Anlelele, Burmylov, Neityu, PR, sirah  |
|           28 |     2185 | 2024-04-15 | Alliance          | W   | 0.578      | -            | -                | -                | -         |     4.88 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           27 |     2226 | 2024-04-12 | Permitta          | L   | 0.559      | -            | -                | -                | -         |   -11.50 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           26 |     2353 | 2024-04-09 | Zero Tenacity     | W   | 0.540      | -            | -                | -                | -         |     7.93 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           25 |     2383 | 2024-04-08 | B8                | W   | 0.533      | 0.384        | 0.246 (0.050)    | 1.000 (0.205)    | -         |     9.49 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           24 |     2513 | 2024-04-03 | PARIVISION        | W   | 0.501      | -            | -                | -                | -         |     5.95 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           23 |     2842 | 2024-03-16 | Sampi             | L   | 0.379      | -            | -                | -                | -         |    -7.98 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           22 |     2859 | 2024-03-15 | Entropiq          | W   | 0.373      | -            | -                | -                | -         |     0.75 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           21 |     2908 | 2024-03-13 | Permitta          | L   | 0.362      | -            | -                | -                | -         |    -7.23 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           20 |     2928 | 2024-03-13 | Alliance          | W   | 0.359      | -            | -                | -                | -         |     3.15 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           19 |     2956 | 2024-03-12 | AURA              | W   | 0.354      | -            | -                | -                | -         |     0.43 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           18 |     2962 | 2024-03-12 | Sampi             | L   | 0.352      | -            | -                | -                | -         |    -7.65 | Burmylov, Chr1zN, Neityu, sirah, xReal |
|           17 |     2982 | 2024-03-11 | Passion UA        | W   | 0.346      | -            | -                | -                | -         |     4.25 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           16 |     2984 | 2024-03-11 | NOM               | W   | 0.345      | -            | -                | -                | -         |     0.46 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           15 |     2992 | 2024-03-10 | V1dar             | W   | 0.341      | -            | -                | -                | -         |     0.46 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           14 |     3001 | 2024-03-10 | Passion UA        | L   | 0.340      | -            | -                | -                | -         |    -6.65 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           13 |     3005 | 2024-03-10 | ALTERNATE aTTaX   | W   | 0.339      | -            | -                | -                | -         |     4.63 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           12 |     3043 | 2024-03-08 | Fraud5            | W   | 0.327      | -            | -                | -                | -         |     0.99 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           11 |     3059 | 2024-03-07 | INGLORIOUS        | L   | 0.321      | -            | -                | -                | -         |    -9.68 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           10 |     3194 | 2024-03-03 | ex-Preasy         | W   | 0.292      | -            | -                | -                | -         |     1.95 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            9 |     3207 | 2024-03-02 | kONO              | W   | 0.286      | -            | -                | -                | -         |     1.89 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            8 |     3277 | 2024-02-27 | ECLOT             | L   | 0.259      | -            | -                | -                | -         |    -2.83 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            7 |     3292 | 2024-02-26 | BLEED             | W   | 0.253      | -            | -                | -                | -         |     3.51 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            6 |     3355 | 2024-02-24 | Sashi             | W   | 0.238      | -            | -                | -                | -         |     4.34 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            5 |     3409 | 2024-02-21 | Entropiq          | W   | 0.219      | -            | -                | -                | -         |     0.36 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            4 |     3903 | 2024-01-27 | TSM               | L   | 0.052      | -            | -                | -                | -         |    -1.45 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            3 |     3973 | 2024-01-23 | SINNERS           | L   | 0.026      | -            | -                | -                | -         |    -0.39 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            2 |     4035 | 2024-01-21 | Astralis Talent   | W   | 0.012      | -            | -                | -                | -         |     0.05 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            1 |     4078 | 2024-01-20 | Monte Gen         | W   | 0.005      | -            | -                | -                | -         |     0.01 | Chr1zN, Kristou, Neityu, PR, sirah     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($36,815.05)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.900 | $5,000.00      | $4,500.07       |
| 2024-05-26 |      0.854 | $10,000.00     | $8,536.20       |
| 2024-05-18 |      0.801 | $500.00        | $400.35         |
| 2024-05-12 |      0.761 | $5,000.00      | $3,803.43       |
| 2024-05-03 |      0.700 | $25,000.00     | $17,498.33      |
| 2024-03-18 |      0.392 | $1,000.00      | $391.99         |
| 2024-03-11 |      0.346 | $3,500.00      | $1,211.30       |
| 2024-02-28 |      0.265 | $1,500.00      | $398.01         |
| 2024-01-21 |      0.012 | $5,000.00      | $57.76          |
| 2024-01-20 |      0.005 | $3,500.00      | $17.61          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
