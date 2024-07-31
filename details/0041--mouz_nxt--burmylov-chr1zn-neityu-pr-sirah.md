### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: Burmylov, Chr1zN, Neityu, PR, sirah<br />
Global Rank: [41](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [30]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1122.1<br />
<br />
Final Rank Value (1122.1) = Starting Rank Value (1051.6) + Head To Head Adjustments (70.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.540[<sup>1</sup>](#table2)
- Bounty Collected: 0.459[<sup>2</sup>](#table1)
- Opponent Network: 0.263[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.316<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1051.6
- 400 + ( ( 0.316 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1051.6


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
|           89 |       88 | 2024-07-29 | CYBERSHOKE        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.61 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           88 |       91 | 2024-07-29 | Monte Gen         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.57 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           87 |      147 | 2024-07-27 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -3.95 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           86 |      219 | 2024-07-25 | Aurora Young Blud | W   | 1.000      | 0.435        | -                | 0.416 (0.181)    | 0 (0.000) |     7.71 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           85 |      342 | 2024-07-21 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -4.06 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           84 |      382 | 2024-07-20 | BLEED             | W   | 1.000      | 0.500        | 0.128 (0.064)    | 0.512 (0.256)    | 0 (0.000) |    24.75 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           83 |      394 | 2024-07-19 | Rhyno             | W   | 1.000      | 0.500        | 0.072 (0.036)    | 0.403 (0.202)    | 0 (0.000) |    12.24 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           82 |      447 | 2024-07-18 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -1.86 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           81 |      593 | 2024-07-16 | Rhyno             | W   | 1.000      | 0.500        | 0.072 (0.036)    | 0.403 (0.202)    | 0 (0.000) |    12.73 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           80 |      972 | 2024-06-13 | B8                | L   | 0.877      | -            | -                | -                | -         |   -11.30 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           79 |     1033 | 2024-06-10 | Endpoint          | L   | 0.858      | -            | -                | -                | -         |   -20.99 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           78 |     1072 | 2024-06-09 | GhoulsW           | W   | 0.852      | -            | -                | -                | 0 (0.000) |     0.53 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           77 |     1084 | 2024-06-09 | BLEED             | L   | 0.852      | -            | -                | -                | -         |    -4.76 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           76 |     1148 | 2024-06-08 | Sampi             | W   | 0.845      | 0.435        | -                | 1.000 (0.367)    | 0 (0.000) |     6.66 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           75 |     1156 | 2024-06-08 | ECLOT             | L   | 0.845      | -            | -                | -                | -         |   -14.02 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           74 |     1183 | 2024-06-07 | GamerLegion       | L   | 0.840      | -            | -                | -                | -         |   -10.41 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           73 |     1249 | 2024-06-06 | Rhyno             | W   | 0.833      | 0.500        | 0.072 (0.030)    | -                | 0 (0.000) |     8.92 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           72 |     1274 | 2024-06-06 | Entropiq          | W   | 0.832      | -            | -                | -                | 0 (0.000) |     0.48 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           71 |     1378 | 2024-06-04 | NAVI Junior       | W   | 0.818      | -            | -                | -                | -         |     1.17 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           70 |     1384 | 2024-06-04 | Aurora Young Blud | W   | 0.817      | -            | -                | -                | -         |     4.16 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           69 |     1423 | 2024-06-02 | FURIA             | L   | 0.805      | -            | -                | -                | -         |    -1.40 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           68 |     1454 | 2024-06-01 | AMKAL             | W   | 0.798      | 0.435        | 0.132 (0.046)    | -                | -         |    16.19 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           67 |     1515 | 2024-05-30 | Sangal            | W   | 0.784      | 0.435        | 0.221 (0.075)    | 0.824 (0.281)    | -         |    14.10 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           66 |     1556 | 2024-05-28 | RUBY              | W   | 0.772      | 0.435        | 0.097 (0.032)    | -                | -         |     8.27 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           65 |     1584 | 2024-05-27 | Nexus             | W   | 0.764      | -            | -                | -                | -         |     4.14 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           64 |     1591 | 2024-05-26 | 9 Pandas          | L   | 0.759      | -            | -                | -                | -         |   -11.86 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           63 |     1599 | 2024-05-26 | B8                | W   | 0.758      | 0.435        | 0.168 (0.055)    | 0.879 (0.289)    | -         |    15.77 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           62 |     1623 | 2024-05-25 | 3DMAX             | W   | 0.750      | 0.435        | 0.504 (0.164)    | 1.000 (0.326)    | -         |    22.44 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           61 |     1638 | 2024-05-24 | Illuminar         | W   | 0.744      | -            | -                | -                | -         |     6.75 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           60 |     1650 | 2024-05-23 | Rare Atom         | W   | 0.738      | -            | -                | -                | -         |     2.44 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           59 |     1690 | 2024-05-22 | Rhyno             | L   | 0.732      | -            | -                | -                | -         |   -12.81 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           58 |     1732 | 2024-05-21 | DMS               | L   | 0.725      | -            | -                | -                | -         |   -15.42 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           57 |     1802 | 2024-05-19 | BLEED             | L   | 0.710      | -            | -                | -                | -         |    -3.04 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           56 |     1868 | 2024-05-17 | DMS               | W   | 0.697      | -            | -                | -                | -         |     6.91 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           55 |     1892 | 2024-05-16 | Sampi             | W   | 0.692      | 0.435        | -                | 1.000 (0.301)    | -         |     7.26 | Chr1zN, Neityu, PR, sirah, TOBIZ       |
|           54 |     1952 | 2024-05-15 | BLEED             | L   | 0.684      | -            | -                | -                | -         |    -2.31 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           53 |     2008 | 2024-05-14 | B8                | L   | 0.677      | -            | -                | -                | -         |    -9.01 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           52 |     2032 | 2024-05-13 | Space             | W   | 0.670      | -            | -                | -                | -         |     4.83 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           51 |     2054 | 2024-05-12 | B8                | L   | 0.664      | -            | -                | -                | -         |    -9.77 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           50 |     2065 | 2024-05-11 | Endpoint          | W   | 0.660      | -            | -                | -                | -         |     7.45 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           49 |     2094 | 2024-05-10 | Aurora            | W   | 0.653      | 0.435        | 0.433 (0.123)    | 0.800 (0.227)    | -         |    19.74 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           48 |     2164 | 2024-05-07 | RUSH B            | W   | 0.632      | -            | -                | -                | -         |     5.39 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           47 |     2206 | 2024-05-05 | GL Academy        | W   | 0.618      | -            | -                | -                | -         |     3.67 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           46 |     2209 | 2024-05-04 | Enterprise        | L   | 0.613      | -            | -                | -                | -         |   -13.48 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           45 |     2229 | 2024-05-03 | Nemiga            | L   | 0.605      | -            | -                | -                | -         |    -6.08 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           44 |     2246 | 2024-05-02 | Endpoint          | L   | 0.600      | -            | -                | -                | -         |   -12.56 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           43 |     2262 | 2024-05-02 | ALTERNATE aTTaX   | W   | 0.598      | -            | -                | -                | -         |     7.69 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           42 |     2267 | 2024-05-02 | 9 Pandas          | L   | 0.597      | -            | -                | -                | -         |   -11.35 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           41 |     2282 | 2024-05-01 | BLEED             | W   | 0.591      | -            | -                | -                | -         |    10.36 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           40 |     2294 | 2024-04-30 | ECLOT             | W   | 0.587      | -            | -                | -                | -         |    10.86 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           39 |     2304 | 2024-04-30 | V1dar             | W   | 0.585      | -            | -                | -                | -         |     1.06 | Burmylov, Chr1zN, PR, sirah, TOBIZ     |
|           38 |     2318 | 2024-04-29 | Nemiga            | L   | 0.580      | -            | -                | -                | -         |    -6.25 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           37 |     2328 | 2024-04-29 | Grannys Knockers  | W   | 0.578      | -            | -                | -                | -         |     3.36 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           36 |     2358 | 2024-04-27 | ECLOT             | W   | 0.566      | -            | -                | -                | -         |    10.85 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           35 |     2428 | 2024-04-25 | Insilio           | L   | 0.551      | -            | -                | -                | -         |   -11.48 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           34 |     2442 | 2024-04-24 | PARIVISION        | L   | 0.545      | -            | -                | -                | -         |    -8.61 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           33 |     2474 | 2024-04-22 | EYEBALLERS        | W   | 0.532      | -            | -                | -                | -         |     4.90 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           32 |     2481 | 2024-04-22 | Nemiga            | L   | 0.531      | -            | -                | -                | -         |    -5.77 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           31 |     2492 | 2024-04-21 | ALTERNATE aTTaX   | W   | 0.525      | -            | -                | -                | -         |     6.05 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           30 |     2498 | 2024-04-21 | ECLOT             | L   | 0.524      | -            | -                | -                | -         |    -7.11 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           29 |     2520 | 2024-04-20 | BLEED             | L   | 0.519      | -            | -                | -                | -         |    -8.73 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           28 |     2607 | 2024-04-18 | Enterprise        | W   | 0.506      | -            | -                | -                | -         |     5.24 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           27 |     2629 | 2024-04-18 | ENCE Academy      | W   | 0.504      | -            | -                | -                | -         |     2.46 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           26 |     2676 | 2024-04-17 | JANO              | W   | 0.497      | -            | -                | -                | -         |     1.80 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           25 |     2689 | 2024-04-16 | GamerLegion       | L   | 0.492      | -            | -                | -                | -         |    -6.03 | Anlelele, Burmylov, Neityu, PR, sirah  |
|           24 |     2715 | 2024-04-15 | Alliance          | W   | 0.484      | -            | -                | -                | -         |     3.78 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           23 |     2756 | 2024-04-12 | Permitta          | L   | 0.465      | -            | -                | -                | -         |    -9.56 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           22 |     2883 | 2024-04-09 | Zero Tenacity     | W   | 0.445      | -            | -                | -                | -         |     7.53 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           21 |     2913 | 2024-04-08 | B8                | W   | 0.438      | -            | -                | -                | -         |     7.55 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           20 |     3043 | 2024-04-03 | PARIVISION        | W   | 0.406      | -            | -                | -                | -         |     7.33 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           19 |     3372 | 2024-03-16 | Sampi             | L   | 0.284      | -            | -                | -                | -         |    -6.16 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           18 |     3389 | 2024-03-15 | Entropiq          | W   | 0.278      | -            | -                | -                | -         |     0.57 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           17 |     3438 | 2024-03-13 | Permitta          | L   | 0.267      | -            | -                | -                | -         |    -5.36 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           16 |     3458 | 2024-03-13 | Alliance          | W   | 0.265      | -            | -                | -                | -         |     2.18 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           15 |     3486 | 2024-03-12 | AURA              | W   | 0.259      | -            | -                | -                | -         |     0.37 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           14 |     3492 | 2024-03-12 | Sampi             | L   | 0.257      | -            | -                | -                | -         |    -5.71 | Burmylov, Chr1zN, Neityu, sirah, xReal |
|           13 |     3512 | 2024-03-11 | Passion UA        | W   | 0.252      | -            | -                | -                | -         |     4.24 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           12 |     3514 | 2024-03-11 | NOM               | W   | 0.250      | -            | -                | -                | -         |     0.36 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           11 |     3522 | 2024-03-10 | V1dar             | W   | 0.247      | -            | -                | -                | -         |     0.40 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           10 |     3531 | 2024-03-10 | Passion UA        | L   | 0.245      | -            | -                | -                | -         |    -3.64 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            9 |     3535 | 2024-03-10 | ALTERNATE aTTaX   | W   | 0.244      | -            | -                | -                | -         |     3.26 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            8 |     3573 | 2024-03-08 | Fraud5            | W   | 0.232      | -            | -                | -                | -         |     0.72 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            7 |     3589 | 2024-03-07 | INGLORIOUS        | L   | 0.227      | -            | -                | -                | -         |    -6.77 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            6 |     3724 | 2024-03-03 | ex-Preasy         | W   | 0.197      | -            | -                | -                | -         |     1.19 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            5 |     3737 | 2024-03-02 | kONO              | W   | 0.192      | -            | -                | -                | -         |     1.26 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            4 |     3807 | 2024-02-27 | ECLOT             | L   | 0.165      | -            | -                | -                | -         |    -2.19 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            3 |     3822 | 2024-02-26 | BLEED             | W   | 0.159      | -            | -                | -                | -         |     1.91 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            2 |     3885 | 2024-02-24 | Sashi             | W   | 0.144      | -            | -                | -                | -         |     3.01 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            1 |     3939 | 2024-02-21 | Entropiq          | W   | 0.124      | -            | -                | -                | -         |     0.23 | Burmylov, Chr1zN, Neityu, PR, sirah    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($46,372.27)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-28 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-07-22 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-06-02 |      0.806 | $5,000.00      | $4,027.51       |
| 2024-05-26 |      0.759 | $10,000.00     | $7,591.07       |
| 2024-05-18 |      0.706 | $500.00        | $353.09         |
| 2024-05-12 |      0.666 | $5,000.00      | $3,330.86       |
| 2024-05-03 |      0.605 | $25,000.00     | $15,135.51      |
| 2024-03-18 |      0.297 | $1,000.00      | $297.48         |
| 2024-03-11 |      0.252 | $3,500.00      | $880.51         |
| 2024-02-28 |      0.171 | $1,500.00      | $256.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
