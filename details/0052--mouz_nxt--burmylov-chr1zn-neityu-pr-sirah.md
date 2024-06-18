### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: Burmylov, Chr1zN, Neityu, PR, sirah<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [52](../standings_global.md)<br />
Regional Rank: [38]( ../standings_europe.md)<br />
Final Rank Value:  1106.0<br />
<br />
Final Rank Value (1106.0) = Starting Rank Value (1112.4) + Head To Head Adjustments (-6.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.555[<sup>1</sup>](#table2)
- Bounty Collected: 0.490[<sup>2</sup>](#table1)
- Opponent Network: 0.357[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.351<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1112.4
- 400 + ( ( 0.351 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1112.4


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
|           89 |      142 | 2024-06-13 | B8                | L   | 1.000      | -            | -                | -                | -         |   -12.25 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           88 |      203 | 2024-06-10 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -25.25 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           87 |      242 | 2024-06-09 | GhoulsW           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.48 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           86 |      254 | 2024-06-09 | BLEED             | L   | 1.000      | -            | -                | -                | -         |   -10.12 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           85 |      318 | 2024-06-08 | Sampi             | W   | 1.000      | 0.435        | -                | 0.837 (0.364)    | 0 (0.000) |     7.42 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           84 |      326 | 2024-06-08 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |   -16.47 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           83 |      353 | 2024-06-07 | GamerLegion       | L   | 1.000      | -            | -                | -                | -         |    -9.46 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           82 |      419 | 2024-06-06 | Rhyno             | W   | 1.000      | 0.500        | 0.094 (0.047)    | -                | 0 (0.000) |    10.27 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           81 |      444 | 2024-06-06 | Entropiq          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.44 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           80 |      548 | 2024-06-04 | NAVI Junior       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.19 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           79 |      554 | 2024-06-04 | Aurora Young Blud | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.04 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           78 |      594 | 2024-06-02 | FURIA             | L   | 1.000      | -            | -                | -                | -         |    -3.93 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           77 |      626 | 2024-06-01 | AMKAL             | W   | 1.000      | 0.435        | 0.139 (0.060)    | 0.613 (0.267)    | 0 (0.000) |    21.82 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           76 |      687 | 2024-05-30 | Sangal            | W   | 1.000      | 0.435        | 0.216 (0.094)    | 0.884 (0.384)    | 0 (0.000) |    16.96 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           75 |      728 | 2024-05-28 | RUBY              | W   | 1.000      | 0.435        | 0.121 (0.053)    | -                | 0 (0.000) |    10.64 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           74 |      756 | 2024-05-27 | Nexus             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.91 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           73 |      763 | 2024-05-26 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -12.89 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           72 |      771 | 2024-05-26 | B8                | W   | 1.000      | 0.435        | 0.229 (0.100)    | 1.000 (0.435)    | -         |    22.07 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           71 |      795 | 2024-05-25 | 3DMAX             | W   | 1.000      | 0.435        | 0.186 (0.081)    | 1.000 (0.435)    | -         |    22.22 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           70 |      810 | 2024-05-24 | Illuminar         | W   | 1.000      | -            | -                | -                | -         |     6.33 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           69 |      822 | 2024-05-23 | Rare Atom         | W   | 1.000      | -            | -                | -                | -         |     2.65 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           68 |      862 | 2024-05-22 | Rhyno             | L   | 1.000      | -            | -                | -                | -         |   -17.17 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           67 |      904 | 2024-05-21 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -22.56 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           66 |      974 | 2024-05-19 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -8.94 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           65 |     1040 | 2024-05-17 | DMS               | W   | 0.987      | -            | -                | -                | -         |     7.72 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           64 |     1064 | 2024-05-16 | Sampi             | W   | 0.982      | 0.435        | -                | 0.837 (0.357)    | -         |    10.93 | Chr1zN, Neityu, PR, sirah, TOBIZ       |
|           63 |     1124 | 2024-05-15 | BLEED             | L   | 0.974      | -            | -                | -                | -         |    -7.47 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           62 |     1180 | 2024-05-14 | B8                | L   | 0.967      | -            | -                | -                | -         |   -11.91 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           61 |     1204 | 2024-05-13 | Space             | W   | 0.960      | -            | -                | -                | -         |     6.24 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           60 |     1226 | 2024-05-12 | B8                | L   | 0.954      | -            | -                | -                | -         |   -13.61 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           59 |     1237 | 2024-05-11 | Endpoint          | W   | 0.950      | -            | -                | -                | -         |    10.18 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           58 |     1266 | 2024-05-10 | Aurora            | W   | 0.943      | 0.435        | 0.526 (0.216)    | 0.874 (0.358)    | -         |    27.45 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           57 |     1336 | 2024-05-07 | RUSH B            | W   | 0.922      | -            | -                | -                | -         |     6.71 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           56 |     1378 | 2024-05-05 | GL Academy        | W   | 0.907      | -            | -                | -                | -         |     5.35 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           55 |     1381 | 2024-05-04 | Enterprise        | L   | 0.903      | -            | -                | -                | -         |   -19.60 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           54 |     1401 | 2024-05-03 | Nemiga            | L   | 0.895      | -            | -                | -                | -         |    -7.23 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           53 |     1418 | 2024-05-02 | Endpoint          | L   | 0.890      | -            | -                | -                | -         |   -19.07 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           52 |     1434 | 2024-05-02 | ALTERNATE aTTaX   | W   | 0.888      | -            | -                | -                | -         |    10.49 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           51 |     1439 | 2024-05-02 | 9 Pandas          | L   | 0.887      | -            | -                | -                | -         |   -15.29 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           50 |     1454 | 2024-05-01 | BLEED             | W   | 0.881      | 0.500        | 0.347 (0.153)    | 0.946 (0.417)    | -         |    22.44 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           49 |     1466 | 2024-04-30 | ECLOT             | W   | 0.876      | 0.500        | 0.107 (0.047)    | -                | -         |    16.94 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           48 |     1476 | 2024-04-30 | V1dar             | W   | 0.875      | -            | -                | -                | -         |     1.44 | Burmylov, Chr1zN, PR, sirah, TOBIZ     |
|           47 |     1490 | 2024-04-29 | Nemiga            | L   | 0.869      | -            | -                | -                | -         |    -7.30 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           46 |     1500 | 2024-04-29 | Grannys Knockers  | W   | 0.868      | -            | -                | -                | -         |     5.18 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           45 |     1530 | 2024-04-27 | ECLOT             | W   | 0.856      | -            | -                | -                | -         |    17.49 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           44 |     1600 | 2024-04-25 | Insilio           | L   | 0.840      | -            | -                | -                | -         |   -16.58 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           43 |     1614 | 2024-04-24 | PARIVISION        | L   | 0.835      | -            | -                | -                | -         |   -17.48 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           42 |     1646 | 2024-04-22 | EYEBALLERS        | W   | 0.822      | -            | -                | -                | -         |     6.61 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           41 |     1653 | 2024-04-22 | Nemiga            | L   | 0.820      | -            | -                | -                | -         |    -6.94 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           40 |     1664 | 2024-04-21 | ALTERNATE aTTaX   | W   | 0.815      | -            | -                | -                | -         |     7.97 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           39 |     1670 | 2024-04-21 | ECLOT             | L   | 0.814      | -            | -                | -                | -         |   -10.29 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           38 |     1692 | 2024-04-20 | BLEED             | L   | 0.809      | -            | -                | -                | -         |    -4.94 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           37 |     1779 | 2024-04-18 | Enterprise        | W   | 0.795      | -            | -                | -                | -         |     9.43 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           36 |     1801 | 2024-04-18 | ENCE Academy      | W   | 0.794      | -            | -                | -                | -         |     4.54 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           35 |     1848 | 2024-04-17 | JANO              | W   | 0.787      | -            | -                | -                | -         |     2.54 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           34 |     1861 | 2024-04-16 | GamerLegion       | L   | 0.782      | -            | -                | -                | -         |    -6.95 | Anlelele, Burmylov, Neityu, PR, sirah  |
|           33 |     1887 | 2024-04-15 | Alliance          | W   | 0.774      | -            | -                | -                | -         |     6.45 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           32 |     1928 | 2024-04-12 | Permitta          | L   | 0.754      | -            | -                | -                | -         |   -15.32 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           31 |     2055 | 2024-04-09 | Zero Tenacity     | W   | 0.735      | 0.371        | -                | 1.000 (0.272)    | -         |    10.34 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           30 |     2085 | 2024-04-08 | B8                | W   | 0.728      | 0.384        | 0.229 (0.064)    | 1.000 (0.280)    | -         |    13.08 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           29 |     2215 | 2024-04-03 | PARIVISION        | W   | 0.696      | -            | -                | -                | -         |     9.12 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           28 |     2545 | 2024-03-16 | Sampi             | L   | 0.574      | -            | -                | -                | -         |   -11.81 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           27 |     2562 | 2024-03-15 | Entropiq          | W   | 0.568      | -            | -                | -                | -         |     1.50 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           26 |     2611 | 2024-03-13 | Permitta          | L   | 0.557      | -            | -                | -                | -         |   -10.82 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           25 |     2631 | 2024-03-13 | Alliance          | W   | 0.555      | -            | -                | -                | -         |     4.71 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           24 |     2659 | 2024-03-12 | AURA              | W   | 0.549      | -            | -                | -                | -         |     0.71 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           23 |     2665 | 2024-03-12 | Sampi             | L   | 0.547      | -            | -                | -                | -         |   -11.81 | Burmylov, Chr1zN, Neityu, sirah, xReal |
|           22 |     2685 | 2024-03-11 | Passion UA        | W   | 0.541      | -            | -                | -                | -         |     6.63 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           21 |     2687 | 2024-03-11 | NOM               | W   | 0.540      | -            | -                | -                | -         |     0.74 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           20 |     2695 | 2024-03-10 | V1dar             | W   | 0.536      | -            | -                | -                | -         |     0.76 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           19 |     2704 | 2024-03-10 | Passion UA        | L   | 0.535      | -            | -                | -                | -         |   -10.53 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           18 |     2708 | 2024-03-10 | ALTERNATE aTTaX   | W   | 0.534      | -            | -                | -                | -         |     6.42 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           17 |     2746 | 2024-03-08 | Fraud5            | W   | 0.522      | -            | -                | -                | -         |     1.67 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           16 |     2762 | 2024-03-07 | INGLORIOUS        | L   | 0.517      | -            | -                | -                | -         |   -15.55 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           15 |     2897 | 2024-03-03 | ex-Preasy         | W   | 0.487      | -            | -                | -                | -         |     4.13 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           14 |     2910 | 2024-03-02 | kONO              | W   | 0.482      | -            | -                | -                | -         |     2.82 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           13 |     2980 | 2024-02-27 | ECLOT             | L   | 0.455      | -            | -                | -                | -         |    -5.23 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           12 |     2995 | 2024-02-26 | BLEED             | W   | 0.448      | -            | -                | -                | -         |     0.26 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           11 |     3058 | 2024-02-24 | Sashi             | W   | 0.434      | -            | -                | -                | -         |     7.74 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           10 |     3112 | 2024-02-21 | Entropiq          | W   | 0.414      | -            | -                | -                | -         |     0.81 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            9 |     3606 | 2024-01-27 | TSM               | L   | 0.247      | -            | -                | -                | -         |    -6.97 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            8 |     3676 | 2024-01-23 | SINNERS           | L   | 0.221      | -            | -                | -                | -         |    -3.46 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            7 |     3738 | 2024-01-21 | Astralis Talent   | W   | 0.207      | -            | -                | -                | -         |     1.01 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            6 |     3781 | 2024-01-20 | Monte Gen         | W   | 0.200      | -            | -                | -                | -         |     0.37 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            5 |     3829 | 2024-01-19 | Astralis Talent   | W   | 0.194      | -            | -                | -                | -         |     0.94 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            4 |     3837 | 2024-01-19 | WOPA              | W   | 0.193      | -            | -                | -                | -         |     0.39 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            3 |     3903 | 2024-01-18 | Passion UA        | W   | 0.187      | -            | -                | -                | -         |     2.41 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            2 |     3943 | 2024-01-17 | Aurora Young Blud | W   | 0.180      | -            | -                | -                | -         |     0.68 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            1 |     4027 | 2024-01-15 | The Prodigies     | L   | 0.167      | -            | -                | -                | -         |    -5.07 | Chr1zN, Neityu, PR, sirah, TOBIZ       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($47,566.52)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-26 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-05-18 |      0.996 | $500.00        | $497.99         |
| 2024-05-12 |      0.956 | $5,000.00      | $4,779.84       |
| 2024-05-03 |      0.895 | $25,000.00     | $22,380.41      |
| 2024-03-18 |      0.587 | $1,000.00      | $587.27         |
| 2024-03-11 |      0.541 | $3,500.00      | $1,894.80       |
| 2024-02-28 |      0.461 | $1,500.00      | $690.94         |
| 2024-01-21 |      0.207 | $5,000.00      | $1,034.17       |
| 2024-01-20 |      0.200 | $3,500.00      | $701.10         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
