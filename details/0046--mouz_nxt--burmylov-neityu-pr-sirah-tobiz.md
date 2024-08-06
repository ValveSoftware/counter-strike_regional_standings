### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: Burmylov, Neityu, PR, sirah, TOBIZ<br />
Global Rank: [46](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [33]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1109.5<br />
<br />
Final Rank Value (1109.5) = Starting Rank Value (1045.5) + Head To Head Adjustments (64.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.538[<sup>1</sup>](#table2)
- Bounty Collected: 0.454[<sup>2</sup>](#table1)
- Opponent Network: 0.263[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.314<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1045.5
- 400 + ( ( 0.314 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 1045.5


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
|           90 |       88 | 2024-08-03 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |   -21.28 | Burmylov, Neityu, PR, sirah, TOBIZ     |
|           89 |      296 | 2024-07-29 | CYBERSHOKE        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.30 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           88 |      299 | 2024-07-29 | Monte Gen         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.04 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           87 |      355 | 2024-07-27 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -4.30 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           86 |      427 | 2024-07-25 | Aurora Young Blud | W   | 1.000      | 0.435        | -                | 0.521 (0.227)    | 0 (0.000) |     9.28 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           85 |      550 | 2024-07-21 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -4.42 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           84 |      590 | 2024-07-20 | BLEED             | W   | 1.000      | 0.500        | 0.126 (0.063)    | 0.538 (0.269)    | 0 (0.000) |    24.49 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           83 |      602 | 2024-07-19 | Rhyno             | W   | 1.000      | 0.500        | 0.071 (0.035)    | 0.427 (0.214)    | 0 (0.000) |    11.64 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           82 |      655 | 2024-07-18 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -1.69 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           81 |      801 | 2024-07-16 | Rhyno             | W   | 1.000      | 0.500        | 0.071 (0.035)    | 0.427 (0.214)    | 0 (0.000) |    12.06 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           80 |     1180 | 2024-06-13 | B8                | L   | 0.838      | -            | -                | -                | -         |   -11.29 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           79 |     1241 | 2024-06-10 | Endpoint          | L   | 0.819      | -            | -                | -                | -         |   -20.12 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           78 |     1280 | 2024-06-09 | GhoulsW           | W   | 0.813      | -            | -                | -                | 0 (0.000) |     0.48 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           77 |     1292 | 2024-06-09 | BLEED             | L   | 0.812      | -            | -                | -                | -         |    -4.83 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           76 |     1356 | 2024-06-08 | Sampi             | W   | 0.806      | 0.435        | -                | 1.000 (0.350)    | 0 (0.000) |     6.48 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           75 |     1364 | 2024-06-08 | ECLOT             | L   | 0.806      | -            | -                | -                | -         |    -9.16 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           74 |     1391 | 2024-06-07 | GamerLegion       | L   | 0.801      | -            | -                | -                | -         |   -10.52 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           73 |     1457 | 2024-06-06 | Rhyno             | W   | 0.794      | 0.500        | 0.071 (0.028)    | -                | 0 (0.000) |     8.06 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           72 |     1482 | 2024-06-06 | Entropiq          | W   | 0.792      | -            | -                | -                | 0 (0.000) |     0.46 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           71 |     1586 | 2024-06-04 | NAVI Junior       | W   | 0.779      | -            | -                | -                | -         |     2.57 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           70 |     1592 | 2024-06-04 | Aurora Young Blud | W   | 0.778      | -            | -                | -                | -         |     5.66 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           69 |     1631 | 2024-06-02 | FURIA             | L   | 0.765      | -            | -                | -                | -         |    -1.44 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           68 |     1662 | 2024-06-01 | AMKAL             | W   | 0.759      | 0.435        | 0.130 (0.043)    | -                | -         |    15.03 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           67 |     1723 | 2024-05-30 | Sangal            | W   | 0.745      | 0.435        | 0.219 (0.071)    | 0.846 (0.274)    | -         |    13.79 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           66 |     1764 | 2024-05-28 | RUBY              | W   | 0.733      | 0.435        | 0.095 (0.030)    | -                | -         |     7.63 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           65 |     1792 | 2024-05-27 | Nexus             | W   | 0.725      | -            | -                | -                | -         |     3.92 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           64 |     1799 | 2024-05-26 | 9 Pandas          | L   | 0.720      | -            | -                | -                | -         |   -11.48 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           63 |     1807 | 2024-05-26 | B8                | W   | 0.718      | 0.435        | 0.170 (0.053)    | 0.912 (0.285)    | -         |    14.58 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           62 |     1831 | 2024-05-25 | 3DMAX             | W   | 0.711      | 0.435        | 0.510 (0.158)    | 1.000 (0.309)    | -         |    21.25 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           61 |     1846 | 2024-05-24 | Illuminar         | W   | 0.705      | -            | -                | -                | -         |     6.28 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           60 |     1858 | 2024-05-23 | Rare Atom         | W   | 0.699      | -            | -                | -                | -         |     5.63 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           59 |     1898 | 2024-05-22 | Rhyno             | L   | 0.692      | -            | -                | -                | -         |   -12.61 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           58 |     1940 | 2024-05-21 | DMS               | L   | 0.686      | -            | -                | -                | -         |   -14.78 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           57 |     2010 | 2024-05-19 | BLEED             | L   | 0.671      | -            | -                | -                | -         |    -3.02 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           56 |     2076 | 2024-05-17 | DMS               | W   | 0.658      | -            | -                | -                | -         |     6.36 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           55 |     2100 | 2024-05-16 | Sampi             | W   | 0.653      | 0.435        | -                | 1.000 (0.284)    | -         |     6.75 | Chr1zN, Neityu, PR, sirah, TOBIZ       |
|           54 |     2160 | 2024-05-15 | BLEED             | L   | 0.645      | -            | -                | -                | -         |    -2.33 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           53 |     2216 | 2024-05-14 | B8                | L   | 0.638      | -            | -                | -                | -         |    -8.77 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           52 |     2240 | 2024-05-13 | Space             | W   | 0.631      | -            | -                | -                | -         |     4.43 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           51 |     2262 | 2024-05-12 | B8                | L   | 0.625      | -            | -                | -                | -         |    -9.43 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           50 |     2273 | 2024-05-11 | Endpoint          | W   | 0.621      | -            | -                | -                | -         |     6.85 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           49 |     2302 | 2024-05-10 | Aurora            | W   | 0.614      | 0.435        | 0.420 (0.112)    | 0.758 (0.202)    | -         |    18.53 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           48 |     2372 | 2024-05-07 | RUSH B            | W   | 0.593      | -            | -                | -                | -         |     5.20 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           47 |     2414 | 2024-05-05 | GL Academy        | W   | 0.578      | -            | -                | -                | -         |     3.24 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           46 |     2417 | 2024-05-04 | Enterprise        | L   | 0.574      | -            | -                | -                | -         |   -12.74 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           45 |     2437 | 2024-05-03 | Nemiga            | L   | 0.566      | -            | -                | -                | -         |    -5.82 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           44 |     2454 | 2024-05-02 | Endpoint          | L   | 0.561      | -            | -                | -                | -         |   -11.94 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           43 |     2470 | 2024-05-02 | ALTERNATE aTTaX   | W   | 0.559      | -            | -                | -                | -         |     7.05 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           42 |     2475 | 2024-05-02 | 9 Pandas          | L   | 0.558      | -            | -                | -                | -         |   -10.78 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           41 |     2490 | 2024-05-01 | BLEED             | W   | 0.552      | -            | -                | -                | -         |     9.18 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           40 |     2502 | 2024-04-30 | ECLOT             | W   | 0.547      | -            | -                | -                | -         |    13.29 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           39 |     2512 | 2024-04-30 | V1dar             | W   | 0.546      | -            | -                | -                | -         |     0.94 | Burmylov, Chr1zN, PR, sirah, TOBIZ     |
|           38 |     2526 | 2024-04-29 | Nemiga            | L   | 0.540      | -            | -                | -                | -         |    -5.89 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           37 |     2536 | 2024-04-29 | Grannys Knockers  | W   | 0.539      | -            | -                | -                | -         |     3.00 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           36 |     2566 | 2024-04-27 | ECLOT             | W   | 0.527      | -            | -                | -                | -         |    13.15 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           35 |     2636 | 2024-04-25 | Insilio           | L   | 0.511      | -            | -                | -                | -         |   -10.73 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           34 |     2650 | 2024-04-24 | PARIVISION        | L   | 0.506      | -            | -                | -                | -         |    -7.62 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           33 |     2682 | 2024-04-22 | EYEBALLERS        | W   | 0.493      | -            | -                | -                | -         |     4.50 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           32 |     2689 | 2024-04-22 | Nemiga            | L   | 0.491      | -            | -                | -                | -         |    -5.35 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           31 |     2700 | 2024-04-21 | ALTERNATE aTTaX   | W   | 0.486      | -            | -                | -                | -         |     5.63 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           30 |     2706 | 2024-04-21 | ECLOT             | L   | 0.485      | -            | -                | -                | -         |    -3.40 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           29 |     2728 | 2024-04-20 | BLEED             | L   | 0.480      | -            | -                | -                | -         |    -8.33 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           28 |     2815 | 2024-04-18 | Enterprise        | W   | 0.466      | -            | -                | -                | -         |     4.83 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           27 |     2837 | 2024-04-18 | ENCE Academy      | W   | 0.465      | -            | -                | -                | -         |     2.11 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           26 |     2884 | 2024-04-17 | JANO              | W   | 0.458      | -            | -                | -                | -         |     1.66 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           25 |     2897 | 2024-04-16 | GamerLegion       | L   | 0.453      | -            | -                | -                | -         |    -5.83 | Anlelele, Burmylov, Neityu, PR, sirah  |
|           24 |     2923 | 2024-04-15 | Alliance          | W   | 0.445      | -            | -                | -                | -         |     3.50 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           23 |     2964 | 2024-04-12 | Permitta          | L   | 0.425      | -            | -                | -                | -         |    -7.92 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           22 |     3091 | 2024-04-09 | Zero Tenacity     | W   | 0.406      | -            | -                | -                | -         |     6.96 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           21 |     3121 | 2024-04-08 | B8                | W   | 0.399      | -            | -                | -                | -         |     6.78 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           20 |     3251 | 2024-04-03 | PARIVISION        | W   | 0.367      | -            | -                | -                | -         |     6.90 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           19 |     3580 | 2024-03-16 | Sampi             | L   | 0.245      | -            | -                | -                | -         |    -5.33 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           18 |     3597 | 2024-03-15 | Entropiq          | W   | 0.239      | -            | -                | -                | -         |     0.48 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           17 |     3646 | 2024-03-13 | Permitta          | L   | 0.228      | -            | -                | -                | -         |    -4.08 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           16 |     3666 | 2024-03-13 | Alliance          | W   | 0.226      | -            | -                | -                | -         |     1.88 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           15 |     3694 | 2024-03-12 | AURA              | W   | 0.220      | -            | -                | -                | -         |     0.29 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           14 |     3700 | 2024-03-12 | Sampi             | L   | 0.218      | -            | -                | -                | -         |    -4.85 | Burmylov, Chr1zN, Neityu, sirah, xReal |
|           13 |     3720 | 2024-03-11 | Passion UA        | W   | 0.212      | -            | -                | -                | -         |     3.70 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           12 |     3722 | 2024-03-11 | NOM               | W   | 0.211      | -            | -                | -                | -         |     0.30 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           11 |     3730 | 2024-03-10 | V1dar             | W   | 0.207      | -            | -                | -                | -         |     0.33 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           10 |     3739 | 2024-03-10 | Passion UA        | L   | 0.206      | -            | -                | -                | -         |    -2.93 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            9 |     3743 | 2024-03-10 | ALTERNATE aTTaX   | W   | 0.205      | -            | -                | -                | -         |     2.69 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            8 |     3781 | 2024-03-08 | Fraud5            | W   | 0.193      | -            | -                | -                | -         |     0.60 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            7 |     3797 | 2024-03-07 | INGLORIOUS        | L   | 0.188      | -            | -                | -                | -         |    -5.60 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            6 |     3932 | 2024-03-03 | ex-Preasy         | W   | 0.158      | -            | -                | -                | -         |     0.90 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            5 |     3945 | 2024-03-02 | kONO              | W   | 0.153      | -            | -                | -                | -         |     1.02 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            4 |     4015 | 2024-02-27 | ECLOT             | L   | 0.126      | -            | -                | -                | -         |    -0.77 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            3 |     4030 | 2024-02-26 | BLEED             | W   | 0.119      | -            | -                | -                | -         |     1.41 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            2 |     4093 | 2024-02-24 | Sashi             | W   | 0.105      | -            | -                | -                | -         |     2.17 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            1 |     4147 | 2024-02-21 | Entropiq          | W   | 0.085      | -            | -                | -                | -         |     0.15 | Burmylov, Chr1zN, Neityu, PR, sirah    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($44,355.30)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-28 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-07-22 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-06-02 |      0.766 | $5,000.00      | $3,831.69       |
| 2024-05-26 |      0.720 | $10,000.00     | $7,199.43       |
| 2024-05-18 |      0.667 | $500.00        | $333.51         |
| 2024-05-12 |      0.627 | $5,000.00      | $3,135.04       |
| 2024-05-03 |      0.566 | $25,000.00     | $14,156.39      |
| 2024-03-18 |      0.258 | $1,000.00      | $258.31         |
| 2024-03-11 |      0.212 | $3,500.00      | $743.43         |
| 2024-02-28 |      0.132 | $1,500.00      | $197.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
