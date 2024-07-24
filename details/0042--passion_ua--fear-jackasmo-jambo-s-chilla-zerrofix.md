### Roster Details<br />
Team Name: Passion UA<br />
Roster: fear, jackasmo, jambo, s-chilla, zeRRoFIX<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [42](../standings_global.md)<br />
Regional Rank: [30]( ../standings_europe.md)<br />
Final Rank Value:  1115.3<br />
<br />
Final Rank Value (1115.3) = Starting Rank Value (1091.2) + Head To Head Adjustments (24.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.559[<sup>1</sup>](#table2)
- Bounty Collected: 0.478[<sup>2</sup>](#table1)
- Opponent Network: 0.328[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.341<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1091.2
- 400 + ( ( 0.341 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1091.2


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
|           83 |       47 | 2024-07-23 | 9INE              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.37 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           82 |       68 | 2024-07-22 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -3.97 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           81 |       75 | 2024-07-22 | BC.Game           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.22 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           80 |       95 | 2024-07-21 | Zero Tenacity     | W   | 1.000      | 0.500        | 0.173 (0.087)    | 1.000 (0.500)    | 0 (0.000) |    17.25 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           79 |      131 | 2024-07-20 | Ninjas in Pyjamas | W   | 1.000      | 0.500        | 0.287 (0.144)    | 0.537 (0.269)    | 0 (0.000) |    29.89 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           78 |      142 | 2024-07-20 | RUBY              | W   | 1.000      | 0.435        | 0.122 (0.053)    | -                | 0 (0.000) |     9.56 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           77 |      175 | 2024-07-19 | Nemiga            | W   | 1.000      | 0.500        | 0.415 (0.207)    | 0.707 (0.354)    | 0 (0.000) |    21.65 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           76 |      227 | 2024-07-18 | Johnny Speeds     | W   | 1.000      | 0.371        | 0.154 (0.057)    | 0.858 (0.318)    | 0 (0.000) |    24.38 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           75 |      237 | 2024-07-18 | CPH Wolves        | L   | 1.000      | -            | -                | -                | -         |   -23.02 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           74 |      301 | 2024-07-17 | Aurora Young Blud | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.40 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           73 |      357 | 2024-07-16 | Permitta          | W   | 1.000      | 0.371        | -                | 0.790 (0.293)    | 0 (0.000) |    12.27 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           72 |      381 | 2024-07-15 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -8.57 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           71 |      404 | 2024-07-15 | WOPA              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.07 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           70 |      420 | 2024-07-14 | Preasy            | W   | 1.000      | -            | -                | -                | -         |     6.99 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           69 |      483 | 2024-07-10 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -18.07 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           68 |      501 | 2024-07-09 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -19.79 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           67 |      503 | 2024-07-09 | Insilio           | W   | 1.000      | -            | -                | -                | -         |    12.93 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           66 |      524 | 2024-07-08 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -19.79 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           65 |      696 | 2024-06-14 | 3DMAX             | L   | 0.931      | -            | -                | -                | -         |    -9.40 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           64 |      786 | 2024-06-10 | Space             | W   | 0.906      | -            | -                | -                | -         |     8.38 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           63 |      899 | 2024-06-08 | Zero Tenacity     | L   | 0.893      | -            | -                | -                | -         |   -12.67 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           62 |      959 | 2024-06-07 | Rare Atom         | W   | 0.886      | -            | -                | -                | -         |     2.66 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           61 |      977 | 2024-06-07 | Aurora Young Blud | W   | 0.884      | -            | -                | -                | -         |     5.78 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           60 |     1036 | 2024-06-06 | Serbia            | W   | 0.878      | -            | -                | -                | -         |     6.35 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           59 |     1099 | 2024-06-05 | EYEBALLERS        | L   | 0.871      | -            | -                | -                | -         |   -20.56 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           58 |     1128 | 2024-06-04 | Illuminar         | W   | 0.866      | -            | -                | -                | -         |     5.45 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           57 |     1133 | 2024-06-04 | Serbia            | W   | 0.865      | -            | -                | -                | -         |     5.70 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           56 |     1187 | 2024-06-02 | UNiTY             | W   | 0.851      | -            | -                | -                | -         |    10.88 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           55 |     1247 | 2024-05-31 | Zero Tenacity     | L   | 0.839      | -            | -                | -                | -         |   -11.45 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           54 |     1267 | 2024-05-30 | Zero Tenacity     | W   | 0.833      | 0.371        | 0.173 (0.054)    | 1.000 (0.309)    | -         |    15.14 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           53 |     1298 | 2024-05-29 | Illuminar         | W   | 0.824      | -            | -                | -                | -         |     6.57 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           52 |     1369 | 2024-05-25 | Sampi             | W   | 0.800      | 0.435        | -                | 0.994 (0.345)    | -         |     9.06 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           51 |     1390 | 2024-05-24 | FURIA             | L   | 0.793      | -            | -                | -                | -         |    -0.69 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           50 |     1395 | 2024-05-24 | ECSTATIC          | W   | 0.791      | -            | -                | -                | -         |     0.70 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           49 |     1411 | 2024-05-23 | SINNERS           | W   | 0.784      | 0.435        | -                | 0.769 (0.262)    | -         |    12.19 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           48 |     1532 | 2024-05-20 | Permitta          | W   | 0.765      | 0.435        | -                | 0.790 (0.263)    | -         |     7.82 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           47 |     1546 | 2024-05-19 | Sashi             | L   | 0.760      | -            | -                | -                | -         |    -5.87 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           46 |     1555 | 2024-05-19 | ALTERNATE aTTaX   | W   | 0.758      | -            | -                | -                | -         |     9.67 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           45 |     1575 | 2024-05-18 | 9 Pandas          | L   | 0.753      | -            | -                | -                | -         |   -10.26 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           44 |     1620 | 2024-05-17 | Nexus             | W   | 0.745      | -            | -                | -                | -         |     5.55 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           43 |     1660 | 2024-05-16 | Sashi             | W   | 0.738      | 0.500        | 0.234 (0.086)    | 1.000 (0.369)    | -         |    18.14 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           42 |     1700 | 2024-05-15 | Endpoint          | L   | 0.733      | -            | -                | -                | -         |   -13.42 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           41 |     1755 | 2024-05-14 | SINNERS           | L   | 0.727      | -            | -                | -                | -         |   -11.56 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           40 |     1847 | 2024-05-11 | Preasy            | W   | 0.704      | -            | -                | -                | -         |     4.83 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           39 |     2010 | 2024-05-02 | Nemiga            | L   | 0.646      | -            | -                | -                | -         |    -5.38 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           38 |     2036 | 2024-05-01 | PARIVISION        | W   | 0.639      | -            | -                | -                | -         |    10.85 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           37 |     2071 | 2024-04-30 | 9 Pandas          | W   | 0.631      | -            | -                | -                | -         |    10.15 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           36 |     2098 | 2024-04-28 | ALTERNATE aTTaX   | L   | 0.620      | -            | -                | -                | -         |   -10.66 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           35 |     2148 | 2024-04-26 | 9 Pandas          | W   | 0.606      | -            | -                | -                | -         |     9.68 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           34 |     2184 | 2024-04-25 | Sashi             | L   | 0.598      | -            | -                | -                | -         |    -5.03 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           33 |     2196 | 2024-04-24 | Permitta          | L   | 0.593      | -            | -                | -                | -         |   -10.41 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           32 |     2228 | 2024-04-22 | B8                | L   | 0.580      | -            | -                | -                | -         |    -8.59 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           31 |     2270 | 2024-04-20 | Young Ninjas      | W   | 0.567      | -            | -                | -                | -         |     4.00 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           30 |     2290 | 2024-04-20 | Permitta          | L   | 0.565      | -            | -                | -                | -         |   -10.56 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           29 |     2327 | 2024-04-19 | ALTERNATE aTTaX   | L   | 0.559      | -            | -                | -                | -         |   -10.59 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           28 |     2379 | 2024-04-18 | Permitta          | W   | 0.552      | -            | -                | -                | -         |     6.92 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           27 |     2412 | 2024-04-17 | Sashi             | W   | 0.546      | 0.371        | 0.234 (0.047)    | -                | -         |    10.85 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           26 |     2446 | 2024-04-16 | 500               | L   | 0.540      | -            | -                | -                | -         |   -13.88 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           25 |     2485 | 2024-04-14 | SINNERS           | L   | 0.525      | -            | -                | -                | -         |    -6.97 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           24 |     2540 | 2024-04-11 | 3DMAX             | W   | 0.506      | 0.384        | 0.175 (0.034)    | -                | -         |    11.85 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           23 |     2587 | 2024-04-10 | Sashi             | W   | 0.499      | 0.371        | 0.234 (0.043)    | -                | -         |    10.19 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           22 |     2774 | 2024-04-04 | HAVU              | W   | 0.459      | -            | -                | -                | -         |     2.32 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           21 |     2846 | 2024-04-02 | BLEED             | L   | 0.447      | -            | -                | -                | -         |    -7.20 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           20 |     2875 | 2024-03-31 | FAVBET            | L   | 0.433      | -            | -                | -                | -         |   -10.90 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           19 |     2882 | 2024-03-30 | Lazer Cats        | W   | 0.425      | -            | -                | -                | -         |     0.79 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           18 |     2890 | 2024-03-29 | NAVI Junior       | L   | 0.419      | -            | -                | -                | -         |   -11.47 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           17 |     2909 | 2024-03-28 | GL Academy        | L   | 0.412      | -            | -                | -                | -         |   -10.99 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           16 |     3119 | 2024-03-17 | Sampi             | L   | 0.338      | -            | -                | -                | -         |    -7.30 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           15 |     3128 | 2024-03-16 | ex-Preasy         | L   | 0.332      | -            | -                | -                | -         |    -8.11 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           14 |     3181 | 2024-03-14 | Sampi             | W   | 0.319      | -            | -                | -                | -         |     3.01 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           13 |     3248 | 2024-03-12 | Alliance          | W   | 0.306      | -            | -                | -                | -         |     2.53 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           12 |     3270 | 2024-03-11 | MOUZ NXT          | L   | 0.299      | -            | -                | -                | -         |    -4.88 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           11 |     3289 | 2024-03-10 | MOUZ NXT          | W   | 0.292      | -            | -                | -                | -         |     4.51 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           10 |     3302 | 2024-03-09 | The Chosen Few    | L   | 0.287      | -            | -                | -                | -         |    -8.12 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            9 |     3330 | 2024-03-08 | Spirit Academy    | L   | 0.280      | -            | -                | -                | -         |    -8.36 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            8 |     3334 | 2024-03-08 | Entropiq          | W   | 0.279      | -            | -                | -                | -         |     0.48 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            7 |     3353 | 2024-03-07 | AURA              | W   | 0.274      | -            | -                | -                | -         |     0.33 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            6 |     3391 | 2024-03-06 | Permitta          | L   | 0.266      | -            | -                | -                | -         |    -5.75 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            5 |     3393 | 2024-03-06 | Fraud5            | W   | 0.265      | -            | -                | -                | -         |     0.72 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            4 |     3422 | 2024-03-05 | B8                | L   | 0.260      | -            | -                | -                | -         |    -4.10 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            3 |     3449 | 2024-03-04 | ALTERNATE aTTaX   | W   | 0.252      | -            | -                | -                | -         |     2.99 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            2 |     3980 | 2024-02-08 | BLEED             | L   | 0.085      | -            | -                | -                | -         |    -1.70 | jackasmo, jambo, marat2k, s-chilla, Zinchenko |
|            1 |     4161 | 2024-01-29 | Alliance          | W   | 0.019      | -            | -                | -                | -         |     0.13 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($45,013.95)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-22 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-06-06 |      0.878 | $11,000.00     | $9,663.04       |
| 2024-05-03 |      0.653 | $12,500.00     | $8,158.85       |
| 2024-03-31 |      0.433 | $657.00        | $284.22         |
| 2024-03-30 |      0.425 | $1,000.00      | $425.25         |
| 2024-03-18 |      0.345 | $3,000.00      | $1,034.30       |
| 2024-03-11 |      0.299 | $1,500.00      | $448.29         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
