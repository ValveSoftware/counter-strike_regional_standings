### Roster Details<br />
Team Name: Passion UA<br />
Roster: fear, jackasmo, jambo, s-chilla, zeRRoFIX<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [61](../standings_global.md)<br />
Regional Rank: [44]( ../standings_europe.md)<br />
Final Rank Value:  1043.9<br />
<br />
Final Rank Value (1043.9) = Starting Rank Value (1036.6) + Head To Head Adjustments (7.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.486[<sup>1</sup>](#table2)
- Bounty Collected: 0.419[<sup>2</sup>](#table1)
- Opponent Network: 0.282[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.296<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1036.6
- 400 + ( ( 0.296 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1036.6


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
|           74 |       13 | 2024-07-17 | Aurora Young Blud | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.04 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           73 |       69 | 2024-07-16 | Permitta          | W   | 1.000      | 0.371        | -                | 0.794 (0.294)    | 0 (0.000) |    13.03 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           72 |       93 | 2024-07-15 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -7.26 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           71 |      116 | 2024-07-15 | WOPA              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.52 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           70 |      132 | 2024-07-14 | Preasy            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.12 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           69 |      195 | 2024-07-10 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -17.12 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           68 |      213 | 2024-07-09 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -19.98 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           67 |      215 | 2024-07-09 | Insilio           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.36 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           66 |      236 | 2024-07-08 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -19.95 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           65 |      408 | 2024-06-14 | 3DMAX             | L   | 0.978      | -            | -                | -                | -         |    -9.34 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           64 |      498 | 2024-06-10 | Space             | W   | 0.954      | -            | -                | -                | 0 (0.000) |     9.88 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           63 |      611 | 2024-06-08 | Zero Tenacity     | L   | 0.940      | -            | -                | -                | -         |   -12.48 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           62 |      671 | 2024-06-07 | Rare Atom         | W   | 0.933      | -            | -                | -                | 0 (0.000) |     3.03 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           61 |      689 | 2024-06-07 | Aurora Young Blud | W   | 0.932      | -            | -                | -                | 0 (0.000) |     6.02 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           60 |      748 | 2024-06-06 | Serbia            | W   | 0.926      | -            | -                | -                | 0 (0.000) |     7.64 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           59 |      811 | 2024-06-05 | EYEBALLERS        | L   | 0.918      | -            | -                | -                | -         |   -20.71 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           58 |      840 | 2024-06-04 | Illuminar         | W   | 0.913      | -            | -                | -                | 0 (0.000) |     6.15 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           57 |      845 | 2024-06-04 | Serbia            | W   | 0.913      | -            | -                | -                | -         |     6.94 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           56 |      899 | 2024-06-02 | UNiTY             | W   | 0.898      | -            | -                | -                | -         |    13.45 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           55 |      959 | 2024-05-31 | Zero Tenacity     | L   | 0.886      | -            | -                | -                | -         |   -11.23 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           54 |      979 | 2024-05-30 | Zero Tenacity     | W   | 0.880      | 0.371        | 0.154 (0.050)    | 1.000 (0.326)    | -         |    16.89 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           53 |     1010 | 2024-05-29 | Illuminar         | W   | 0.872      | -            | -                | -                | -         |     7.69 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           52 |     1081 | 2024-05-25 | Sampi             | W   | 0.847      | 0.435        | 0.045 (0.016)    | 0.975 (0.359)    | -         |    11.04 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           51 |     1102 | 2024-05-24 | FURIA             | L   | 0.840      | -            | -                | -                | -         |    -1.33 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           50 |     1107 | 2024-05-24 | ECSTATIC          | W   | 0.838      | -            | -                | -                | -         |     0.76 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           49 |     1123 | 2024-05-23 | SINNERS           | W   | 0.832      | 0.435        | 0.058 (0.021)    | 0.744 (0.269)    | -         |    14.76 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           48 |     1244 | 2024-05-20 | Permitta          | W   | 0.812      | 0.435        | -                | 0.794 (0.280)    | -         |     9.46 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           47 |     1258 | 2024-05-19 | Sashi             | L   | 0.807      | -            | -                | -                | -         |    -5.43 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           46 |     1267 | 2024-05-19 | ALTERNATE aTTaX   | W   | 0.806      | 0.435        | 0.050 (0.017)    | 0.644 (0.225)    | -         |    11.81 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           45 |     1287 | 2024-05-18 | 9 Pandas          | L   | 0.800      | -            | -                | -                | -         |    -8.69 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           44 |     1332 | 2024-05-17 | Nexus             | W   | 0.792      | -            | -                | -                | -         |     6.74 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           43 |     1372 | 2024-05-16 | Sashi             | W   | 0.785      | 0.500        | 0.215 (0.084)    | 1.000 (0.393)    | -         |    20.13 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           42 |     1412 | 2024-05-15 | Endpoint          | L   | 0.780      | -            | -                | -                | -         |   -12.71 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           41 |     1467 | 2024-05-14 | SINNERS           | L   | 0.774      | -            | -                | -                | -         |   -10.11 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           40 |     1559 | 2024-05-11 | Preasy            | W   | 0.751      | -            | -                | -                | -         |     5.81 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           39 |     1722 | 2024-05-02 | Nemiga            | L   | 0.694      | -            | -                | -                | -         |    -3.93 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           38 |     1748 | 2024-05-01 | PARIVISION        | W   | 0.687      | -            | -                | -                | -         |    11.48 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           37 |     1783 | 2024-04-30 | 9 Pandas          | W   | 0.679      | 0.500        | 0.126 (0.043)    | -                | -         |    13.20 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           36 |     1810 | 2024-04-28 | ALTERNATE aTTaX   | L   | 0.667      | -            | -                | -                | -         |    -9.64 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           35 |     1860 | 2024-04-26 | 9 Pandas          | W   | 0.653      | 0.500        | 0.126 (0.041)    | -                | -         |    12.80 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           34 |     1896 | 2024-04-25 | Sashi             | L   | 0.646      | -            | -                | -                | -         |    -4.51 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           33 |     1908 | 2024-04-24 | Permitta          | L   | 0.640      | -            | -                | -                | -         |    -9.58 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           32 |     1940 | 2024-04-22 | B8                | L   | 0.627      | -            | -                | -                | -         |    -7.21 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           31 |     1982 | 2024-04-20 | Young Ninjas      | W   | 0.614      | -            | -                | -                | -         |     5.96 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           30 |     2002 | 2024-04-20 | Permitta          | L   | 0.612      | -            | -                | -                | -         |    -9.76 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           29 |     2039 | 2024-04-19 | ALTERNATE aTTaX   | L   | 0.607      | -            | -                | -                | -         |    -9.59 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           28 |     2091 | 2024-04-18 | Permitta          | W   | 0.599      | 0.500        | -                | 0.794 (0.238)    | -         |     9.26 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           27 |     2124 | 2024-04-17 | Sashi             | W   | 0.593      | 0.371        | 0.215 (0.047)    | 1.000 (0.220)    | -         |    12.66 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           26 |     2158 | 2024-04-16 | 500               | L   | 0.587      | -            | -                | -                | -         |   -13.85 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           25 |     2197 | 2024-04-14 | SINNERS           | L   | 0.572      | -            | -                | -                | -         |    -5.27 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           24 |     2252 | 2024-04-11 | 3DMAX             | W   | 0.553      | 0.384        | 0.209 (0.044)    | 1.000 (0.212)    | -         |    13.80 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           23 |     2299 | 2024-04-10 | Sashi             | W   | 0.546      | 0.371        | 0.215 (0.043)    | -                | -         |    12.01 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           22 |     2486 | 2024-04-04 | HAVU              | W   | 0.506      | -            | -                | -                | -         |     3.64 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           21 |     2558 | 2024-04-02 | BLEED             | L   | 0.494      | -            | -                | -                | -         |    -5.52 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           20 |     2587 | 2024-03-31 | FAVBET            | L   | 0.480      | -            | -                | -                | -         |   -10.85 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           19 |     2594 | 2024-03-30 | Lazer Cats        | W   | 0.472      | -            | -                | -                | -         |     1.18 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           18 |     2602 | 2024-03-29 | NAVI Junior       | L   | 0.466      | -            | -                | -                | -         |   -12.09 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           17 |     2621 | 2024-03-28 | GL Academy        | L   | 0.459      | -            | -                | -                | -         |   -11.33 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           16 |     2831 | 2024-03-17 | Sampi             | L   | 0.385      | -            | -                | -                | -         |    -6.85 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           15 |     2840 | 2024-03-16 | ex-Preasy         | L   | 0.379      | -            | -                | -                | -         |    -7.93 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           14 |     2893 | 2024-03-14 | Sampi             | W   | 0.366      | -            | -                | -                | -         |     4.85 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           13 |     2960 | 2024-03-12 | Alliance          | W   | 0.353      | -            | -                | -                | -         |     4.23 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           12 |     2982 | 2024-03-11 | MOUZ NXT          | L   | 0.346      | -            | -                | -                | -         |    -4.25 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           11 |     3001 | 2024-03-10 | MOUZ NXT          | W   | 0.340      | -            | -                | -                | -         |     6.65 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           10 |     3014 | 2024-03-09 | The Chosen Few    | L   | 0.334      | -            | -                | -                | -         |    -8.99 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            9 |     3042 | 2024-03-08 | Spirit Academy    | L   | 0.327      | -            | -                | -                | -         |    -9.56 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            8 |     3046 | 2024-03-08 | Entropiq          | W   | 0.326      | -            | -                | -                | -         |     0.82 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            7 |     3065 | 2024-03-07 | AURA              | W   | 0.321      | -            | -                | -                | -         |     0.55 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            6 |     3103 | 2024-03-06 | Permitta          | L   | 0.313      | -            | -                | -                | -         |    -5.71 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            5 |     3105 | 2024-03-06 | Fraud5            | W   | 0.312      | -            | -                | -                | -         |     1.31 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            4 |     3134 | 2024-03-05 | B8                | L   | 0.307      | -            | -                | -                | -         |    -3.31 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            3 |     3161 | 2024-03-04 | ALTERNATE aTTaX   | W   | 0.299      | -            | -                | -                | -         |     4.84 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            2 |     3692 | 2024-02-08 | BLEED             | L   | 0.133      | -            | -                | -                | -         |    -1.94 | jackasmo, jambo, marat2k, s-chilla, Zinchenko |
|            1 |     3873 | 2024-01-29 | Alliance          | W   | 0.066      | -            | -                | -                | -         |     0.70 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,414.51)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-06 |      0.926 | $11,000.00     | $10,182.52      |
| 2024-05-03 |      0.700 | $12,500.00     | $8,749.16       |
| 2024-03-31 |      0.480 | $657.00        | $315.25         |
| 2024-03-30 |      0.472 | $1,000.00      | $472.47         |
| 2024-03-18 |      0.392 | $3,000.00      | $1,175.97       |
| 2024-03-11 |      0.346 | $1,500.00      | $519.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
