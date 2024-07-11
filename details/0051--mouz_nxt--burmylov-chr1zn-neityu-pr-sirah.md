### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: Burmylov, Chr1zN, Neityu, PR, sirah<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [51](../standings_global.md)<br />
Regional Rank: [37]( ../standings_europe.md)<br />
Final Rank Value:  1102.3<br />
<br />
Final Rank Value (1102.3) = Starting Rank Value (1106.1) + Head To Head Adjustments (-3.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.550[<sup>1</sup>](#table2)
- Bounty Collected: 0.479[<sup>2</sup>](#table1)
- Opponent Network: 0.310[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.335<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1106.1
- 400 + ( ( 0.335 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1106.1


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
|           89 |      278 | 2024-06-13 | B8                | L   | 1.000      | -            | -                | -                | -         |   -12.41 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           88 |      339 | 2024-06-10 | Endpoint          | L   | 0.993      | -            | -                | -                | -         |   -24.82 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           87 |      378 | 2024-06-09 | GhoulsW           | W   | 0.986      | -            | -                | -                | 0 (0.000) |     0.48 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           86 |      390 | 2024-06-09 | BLEED             | L   | 0.986      | -            | -                | -                | -         |    -9.42 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           85 |      454 | 2024-06-08 | Slovakia          | W   | 0.979      | 0.435        | -                | 0.891 (0.379)    | 0 (0.000) |     7.35 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           84 |      462 | 2024-06-08 | Czech Republic    | L   | 0.979      | -            | -                | -                | -         |   -14.89 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           83 |      489 | 2024-06-07 | GamerLegion       | L   | 0.974      | -            | -                | -                | -         |    -9.72 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           82 |      555 | 2024-06-06 | Rhyno             | W   | 0.967      | 0.500        | 0.107 (0.052)    | -                | 0 (0.000) |    10.63 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           81 |      580 | 2024-06-06 | Entropiq          | W   | 0.966      | -            | -                | -                | 0 (0.000) |     0.44 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           80 |      684 | 2024-06-04 | NAVI Junior       | W   | 0.952      | -            | -                | -                | 0 (0.000) |     1.11 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           79 |      690 | 2024-06-04 | Aurora Young Blud | W   | 0.951      | -            | -                | -                | 0 (0.000) |     3.04 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           78 |      729 | 2024-06-02 | FURIA             | L   | 0.939      | -            | -                | -                | -         |    -3.05 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           77 |      760 | 2024-06-01 | AMKAL             | W   | 0.932      | 0.435        | 0.135 (0.055)    | 0.559 (0.226)    | 0 (0.000) |    18.86 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           76 |      821 | 2024-05-30 | Sangal            | W   | 0.918      | 0.435        | 0.231 (0.092)    | 0.853 (0.340)    | 0 (0.000) |    15.95 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           75 |      862 | 2024-05-28 | RUBY              | W   | 0.907      | 0.435        | 0.139 (0.055)    | 0.563 (0.222)    | 0 (0.000) |     9.90 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           74 |      890 | 2024-05-27 | Romania           | W   | 0.898      | -            | -                | -                | 0 (0.000) |     4.43 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           73 |      897 | 2024-05-26 | 9 Pandas          | L   | 0.893      | -            | -                | -                | -         |   -12.35 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           72 |      905 | 2024-05-26 | B8                | W   | 0.892      | 0.435        | 0.242 (0.094)    | 1.000 (0.388)    | -         |    19.37 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           71 |      929 | 2024-05-25 | 3DMAX             | W   | 0.885      | 0.435        | 0.205 (0.079)    | 1.000 (0.384)    | -         |    19.74 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           70 |      944 | 2024-05-24 | Illuminar         | W   | 0.878      | -            | -                | -                | -         |     2.91 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           69 |      956 | 2024-05-23 | Rare Atom         | W   | 0.872      | -            | -                | -                | -         |     2.54 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           68 |      996 | 2024-05-22 | Rhyno             | L   | 0.866      | -            | -                | -                | -         |   -14.59 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           67 |     1038 | 2024-05-21 | DMS               | L   | 0.859      | -            | -                | -                | -         |   -19.67 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           66 |     1108 | 2024-05-19 | BLEED             | L   | 0.845      | -            | -                | -                | -         |    -7.19 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           65 |     1174 | 2024-05-17 | DMS               | W   | 0.831      | -            | -                | -                | -         |     6.46 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           64 |     1198 | 2024-05-16 | Slovakia          | W   | 0.826      | 0.435        | -                | 0.891 (0.320)    | -         |     8.86 | Chr1zN, Neityu, PR, sirah, TOBIZ       |
|           63 |     1258 | 2024-05-15 | BLEED             | L   | 0.818      | -            | -                | -                | -         |    -6.04 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           62 |     1314 | 2024-05-14 | B8                | L   | 0.812      | -            | -                | -                | -         |   -10.26 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           61 |     1338 | 2024-05-13 | Space             | W   | 0.804      | -            | -                | -                | -         |     5.31 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           60 |     1360 | 2024-05-12 | B8                | L   | 0.799      | -            | -                | -                | -         |   -11.43 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           59 |     1371 | 2024-05-11 | Endpoint          | W   | 0.794      | -            | -                | -                | -         |     8.25 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           58 |     1400 | 2024-05-10 | Aurora            | W   | 0.787      | 0.435        | 0.518 (0.177)    | 0.853 (0.292)    | -         |    23.28 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           57 |     1470 | 2024-05-07 | RUSH B            | W   | 0.766      | -            | -                | -                | -         |     5.83 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           56 |     1512 | 2024-05-05 | GL Academy        | W   | 0.752      | -            | -                | -                | -         |     4.23 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           55 |     1515 | 2024-05-04 | Enterprise        | L   | 0.747      | -            | -                | -                | -         |   -16.40 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           54 |     1535 | 2024-05-03 | Nemiga            | L   | 0.740      | -            | -                | -                | -         |    -6.07 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           53 |     1552 | 2024-05-02 | Endpoint          | L   | 0.734      | -            | -                | -                | -         |   -16.02 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           52 |     1568 | 2024-05-02 | ALTERNATE aTTaX   | W   | 0.732      | -            | -                | -                | -         |     9.01 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           51 |     1573 | 2024-05-02 | 9 Pandas          | L   | 0.731      | -            | -                | -                | -         |   -13.23 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           50 |     1588 | 2024-05-01 | BLEED             | W   | 0.725      | 0.500        | 0.348 (0.126)    | 0.908 (0.329)    | -         |    18.59 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           49 |     1600 | 2024-04-30 | Czech Republic    | W   | 0.721      | 0.500        | 0.104 (0.038)    | -                | -         |    14.44 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           48 |     1610 | 2024-04-30 | V1dar             | W   | 0.719      | -            | -                | -                | -         |     1.10 | Burmylov, Chr1zN, PR, sirah, TOBIZ     |
|           47 |     1624 | 2024-04-29 | Nemiga            | L   | 0.714      | -            | -                | -                | -         |    -6.07 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           46 |     1634 | 2024-04-29 | Grannys Knockers  | W   | 0.712      | -            | -                | -                | -         |     4.08 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           45 |     1664 | 2024-04-27 | Czech Republic    | W   | 0.700      | -            | -                | -                | -         |    14.69 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           44 |     1734 | 2024-04-25 | Insilio           | L   | 0.685      | -            | -                | -                | -         |   -14.07 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           43 |     1748 | 2024-04-24 | PARIVISION        | L   | 0.679      | -            | -                | -                | -         |   -14.34 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           42 |     1780 | 2024-04-22 | EYEBALLERS        | W   | 0.666      | -            | -                | -                | -         |     5.53 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           41 |     1787 | 2024-04-22 | Nemiga            | L   | 0.665      | -            | -                | -                | -         |    -5.70 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           40 |     1798 | 2024-04-21 | ALTERNATE aTTaX   | W   | 0.660      | -            | -                | -                | -         |     7.19 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           39 |     1804 | 2024-04-21 | Czech Republic    | L   | 0.658      | -            | -                | -                | -         |    -7.77 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           38 |     1826 | 2024-04-20 | BLEED             | L   | 0.653      | -            | -                | -                | -         |    -3.84 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           37 |     1913 | 2024-04-18 | Enterprise        | W   | 0.640      | -            | -                | -                | -         |     7.24 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           36 |     1935 | 2024-04-18 | ENCE Academy      | W   | 0.638      | -            | -                | -                | -         |     3.32 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           35 |     1982 | 2024-04-17 | JANO              | W   | 0.631      | -            | -                | -                | -         |     2.05 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           34 |     1995 | 2024-04-16 | GamerLegion       | L   | 0.626      | -            | -                | -                | -         |    -5.95 | Anlelele, Burmylov, Neityu, PR, sirah  |
|           33 |     2021 | 2024-04-15 | Alliance          | W   | 0.618      | -            | -                | -                | -         |     5.35 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           32 |     2062 | 2024-04-12 | Permitta          | L   | 0.599      | -            | -                | -                | -         |   -12.31 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           31 |     2189 | 2024-04-09 | Zero Tenacity     | W   | 0.579      | -            | -                | -                | -         |     8.56 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           30 |     2219 | 2024-04-08 | B8                | W   | 0.572      | 0.384        | 0.242 (0.053)    | 1.000 (0.220)    | -         |    10.31 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           29 |     2349 | 2024-04-03 | PARIVISION        | W   | 0.541      | -            | -                | -                | -         |     6.76 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           28 |     2678 | 2024-03-16 | Slovakia          | L   | 0.418      | -            | -                | -                | -         |    -8.93 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           27 |     2695 | 2024-03-15 | Entropiq          | W   | 0.413      | -            | -                | -                | -         |     0.87 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           26 |     2744 | 2024-03-13 | Permitta          | L   | 0.401      | -            | -                | -                | -         |    -8.00 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           25 |     2764 | 2024-03-13 | Alliance          | W   | 0.399      | -            | -                | -                | -         |     3.50 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           24 |     2792 | 2024-03-12 | AURA              | W   | 0.393      | -            | -                | -                | -         |     0.49 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           23 |     2798 | 2024-03-12 | Slovakia          | L   | 0.391      | -            | -                | -                | -         |    -8.66 | Burmylov, Chr1zN, Neityu, sirah, xReal |
|           22 |     2818 | 2024-03-11 | Passion UA        | W   | 0.386      | -            | -                | -                | -         |     4.64 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           21 |     2820 | 2024-03-11 | NOM               | W   | 0.385      | -            | -                | -                | -         |     0.51 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           20 |     2828 | 2024-03-10 | V1dar             | W   | 0.381      | -            | -                | -                | -         |     0.52 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           19 |     2837 | 2024-03-10 | Passion UA        | L   | 0.379      | -            | -                | -                | -         |    -7.53 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           18 |     2841 | 2024-03-10 | ALTERNATE aTTaX   | W   | 0.378      | -            | -                | -                | -         |     5.04 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           17 |     2879 | 2024-03-08 | Fraud5            | W   | 0.366      | -            | -                | -                | -         |     1.12 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           16 |     2895 | 2024-03-07 | INGLORIOUS        | L   | 0.361      | -            | -                | -                | -         |   -10.87 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           15 |     3030 | 2024-03-03 | ex-Preasy         | W   | 0.331      | -            | -                | -                | -         |     2.33 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           14 |     3043 | 2024-03-02 | kONO              | W   | 0.326      | -            | -                | -                | -         |     2.09 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           13 |     3113 | 2024-02-27 | Czech Republic    | L   | 0.299      | -            | -                | -                | -         |    -3.23 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           12 |     3128 | 2024-02-26 | BLEED             | W   | 0.293      | -            | -                | -                | -         |     0.17 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           11 |     3191 | 2024-02-24 | Sashi             | W   | 0.278      | -            | -                | -                | -         |     5.03 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           10 |     3245 | 2024-02-21 | Entropiq          | W   | 0.258      | -            | -                | -                | -         |     0.43 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            9 |     3739 | 2024-01-27 | TSM               | L   | 0.091      | -            | -                | -                | -         |    -2.57 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            8 |     3809 | 2024-01-23 | SINNERS           | L   | 0.066      | -            | -                | -                | -         |    -1.00 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            7 |     3871 | 2024-01-21 | Astralis Talent   | W   | 0.051      | -            | -                | -                | -         |     0.21 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            6 |     3914 | 2024-01-20 | Monte Gen         | W   | 0.045      | -            | -                | -                | -         |     0.08 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            5 |     3962 | 2024-01-19 | Astralis Talent   | W   | 0.039      | -            | -                | -                | -         |     0.16 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            4 |     3970 | 2024-01-19 | WOPA              | W   | 0.038      | -            | -                | -                | -         |     0.08 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            3 |     4036 | 2024-01-18 | Passion UA        | W   | 0.031      | -            | -                | -                | -         |     0.39 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            2 |     4076 | 2024-01-17 | Aurora Young Blud | W   | 0.025      | -            | -                | -                | -         |     0.10 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            1 |     4160 | 2024-01-15 | The Prodigies     | L   | 0.011      | -            | -                | -                | -         |    -0.35 | Chr1zN, Neityu, PR, sirah, TOBIZ       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($39,191.66)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.940 | $5,000.00      | $4,698.12       |
| 2024-05-26 |      0.893 | $10,000.00     | $8,932.30       |
| 2024-05-18 |      0.840 | $500.00        | $420.15         |
| 2024-05-12 |      0.800 | $5,000.00      | $4,001.48       |
| 2024-05-03 |      0.740 | $25,000.00     | $18,488.58      |
| 2024-03-18 |      0.432 | $1,000.00      | $431.60         |
| 2024-03-11 |      0.386 | $3,500.00      | $1,349.94       |
| 2024-02-28 |      0.305 | $1,500.00      | $457.43         |
| 2024-01-21 |      0.051 | $5,000.00      | $255.81         |
| 2024-01-20 |      0.045 | $3,500.00      | $156.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
