### Roster Details<br />
Team Name: BLEED<br />
Roster: CYPHER, faveN, hampus, jkaem, nawwk<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [32](../standings_global.md)<br />
Regional Rank: [22]( ../standings_europe.md)<br />
Final Rank Value:  1259.0<br />
<br />
Final Rank Value (1259.0) = Starting Rank Value (1375.8) + Head To Head Adjustments (-116.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.685[<sup>1</sup>](#table2)
- Bounty Collected: 0.502[<sup>2</sup>](#table1)
- Opponent Network: 0.421[<sup>2</sup>](#table1)
- LAN Wins: 0.313[<sup>2</sup>](#table1)

The average of these factors is 0.480<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1375.8
- 400 + ( ( 0.480 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1375.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           70 |       53 | 2024-06-15 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -18.64 | CYPHER, faveN, hampus, jkaem, nawwk |
|           69 |       62 | 2024-06-15 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -17.07 | CYPHER, faveN, hampus, jkaem, nawwk |
|           68 |      105 | 2024-06-14 | Monte             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.86 | CYPHER, faveN, hampus, jkaem, nawwk |
|           67 |      136 | 2024-06-13 | Aurora Young Blud | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.10 | CYPHER, faveN, hampus, jkaem, nawwk |
|           66 |      162 | 2024-06-12 | B8                | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.20 | CYPHER, faveN, hampus, jkaem, nawwk |
|           65 |      205 | 2024-06-10 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |   -17.97 | CYPHER, faveN, hampus, jkaem, nawwk |
|           64 |      254 | 2024-06-09 | MOUZ NXT          | W   | 1.000      | 0.500        | 0.158 (0.079)    | 1.000 (0.500)    | 0 (0.000) |    10.12 | CYPHER, faveN, hampus, jkaem, nawwk |
|           63 |      304 | 2024-06-08 | 9INE              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.04 | CYPHER, faveN, hampus, jkaem, nawwk |
|           62 |      358 | 2024-06-07 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -22.98 | CYPHER, faveN, hampus, jkaem, nawwk |
|           61 |      503 | 2024-06-05 | Nexus             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.65 | CYPHER, faveN, hampus, jkaem, nawwk |
|           60 |      592 | 2024-06-02 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -1.36 | CYPHER, faveN, hampus, jkaem, nawwk |
|           59 |      602 | 2024-06-02 | Aurora            | W   | 1.000      | 0.500        | 0.526 (0.263)    | 0.874 (0.437)    | 1 (1.000) |    24.07 | CYPHER, faveN, hampus, jkaem, nawwk |
|           58 |      632 | 2024-06-01 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -1.21 | CYPHER, faveN, hampus, jkaem, nawwk |
|           57 |      690 | 2024-05-29 | ATOX              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     4.89 | CYPHER, faveN, hampus, jkaem, nawwk |
|           56 |      714 | 2024-05-28 | Chinggis Warriors | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.52 | CYPHER, faveN, hampus, jkaem, nawwk |
|           55 |      903 | 2024-05-21 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -21.82 | CYPHER, faveN, hampus, jkaem, nawwk |
|           54 |      936 | 2024-05-20 | 9 Pandas          | W   | 1.000      | 0.500        | -                | 0.663 (0.332)    | 0 (0.000) |     9.86 | CYPHER, faveN, hampus, jkaem, nawwk |
|           53 |      974 | 2024-05-19 | MOUZ NXT          | W   | 1.000      | 0.500        | 0.158 (0.079)    | 1.000 (0.500)    | -         |     8.94 | CYPHER, faveN, hampus, jkaem, nawwk |
|           52 |     1027 | 2024-05-17 | Monte             | L   | 0.989      | -            | -                | -                | -         |   -14.81 | CYPHER, faveN, hampus, jkaem, nawwk |
|           51 |     1116 | 2024-05-15 | Gaimin Gladiators | L   | 0.975      | -            | -                | -                | -         |   -20.20 | CYPHER, faveN, hampus, jkaem, nawwk |
|           50 |     1124 | 2024-05-15 | MOUZ NXT          | W   | 0.974      | 0.500        | 0.158 (0.077)    | 1.000 (0.487)    | -         |     7.47 | CYPHER, faveN, hampus, jkaem, nawwk |
|           49 |     1260 | 2024-05-11 | B8                | L   | 0.947      | -            | -                | -                | -         |   -21.80 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           48 |     1288 | 2024-05-09 | Sampi             | W   | 0.936      | 0.435        | -                | 0.837 (0.340)    | -         |     4.27 | CYPHER, draken, faveN, hampus, VLDN |
|           47 |     1330 | 2024-05-07 | 1WIN              | L   | 0.922      | -            | -                | -                | -         |   -24.61 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           46 |     1354 | 2024-05-06 | Insilio           | W   | 0.914      | -            | -                | -                | -         |     4.39 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           45 |     1420 | 2024-05-02 | AMKAL             | L   | 0.890      | -            | -                | -                | -         |   -18.87 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           44 |     1454 | 2024-05-01 | MOUZ NXT          | L   | 0.881      | -            | -                | -                | -         |   -22.44 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           43 |     1486 | 2024-04-30 | Permitta          | W   | 0.874      | -            | -                | -                | -         |     2.76 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           42 |     1509 | 2024-04-28 | B8                | W   | 0.863      | 0.500        | 0.229 (0.099)    | 1.000 (0.432)    | -         |     4.49 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           41 |     1560 | 2024-04-26 | ex-Guild Eagles   | W   | 0.849      | -            | -                | -                | -         |     2.69 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           40 |     1568 | 2024-04-26 | DMS               | W   | 0.848      | -            | -                | -                | -         |     1.73 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           39 |     1608 | 2024-04-24 | Permitta          | W   | 0.836      | -            | -                | -                | -         |     3.20 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           38 |     1611 | 2024-04-24 | Nemiga            | L   | 0.835      | -            | -                | -                | -         |   -15.96 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           37 |     1627 | 2024-04-23 | B8                | W   | 0.829      | 0.500        | 0.229 (0.095)    | 1.000 (0.414)    | -         |     4.16 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           36 |     1636 | 2024-04-23 | Sashi             | L   | 0.828      | -            | -                | -                | -         |   -19.28 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           35 |     1645 | 2024-04-22 | Sangal            | W   | 0.822      | 0.500        | 0.216 (0.089)    | 0.884 (0.363)    | -         |     4.56 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           34 |     1647 | 2024-04-22 | Gaimin Gladiators | W   | 0.821      | -            | -                | -                | -         |     8.99 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           33 |     1662 | 2024-04-21 | Illuminar         | W   | 0.816      | -            | -                | -                | -         |     1.47 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           32 |     1668 | 2024-04-21 | BIG               | W   | 0.814      | 0.384        | 0.225 (0.070)    | -                | -         |    13.96 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           31 |     1692 | 2024-04-20 | MOUZ NXT          | W   | 0.809      | 0.500        | 0.158 (0.064)    | 1.000 (0.404)    | -         |     4.94 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           30 |     1748 | 2024-04-19 | Sampi             | W   | 0.801      | -            | -                | -                | -         |     3.00 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           29 |     1805 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.794      | -            | -                | -                | -         |     2.88 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           28 |     1829 | 2024-04-17 | 3DMAX             | L   | 0.788      | -            | -                | -                | -         |   -17.20 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           27 |     1857 | 2024-04-16 | KOI               | W   | 0.783      | -            | -                | -                | -         |     6.31 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           26 |     1869 | 2024-04-16 | SINNERS           | W   | 0.780      | -            | -                | -                | -         |     6.05 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           25 |     2047 | 2024-04-09 | Alliance          | W   | 0.736      | -            | -                | -                | -         |     1.75 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           24 |     2060 | 2024-04-09 | HAVU              | W   | 0.734      | -            | -                | -                | -         |     0.75 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           23 |     2141 | 2024-04-05 | BetBoom           | L   | 0.709      | -            | -                | -                | -         |    -5.22 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           22 |     2144 | 2024-04-05 | Alliance          | W   | 0.708      | -            | -                | -                | -         |     1.64 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           21 |     2185 | 2024-04-04 | Benched Heroes    | W   | 0.702      | -            | -                | -                | -         |     0.10 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           20 |     2191 | 2024-04-04 | BetBoom           | L   | 0.701      | -            | -                | -                | -         |    -5.38 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           19 |     2260 | 2024-04-02 | Passion UA        | W   | 0.689      | -            | -                | -                | -         |     2.04 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           18 |     2283 | 2024-04-01 | Enterprise        | L   | 0.681      | -            | -                | -                | -         |   -19.23 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           17 |     2634 | 2024-03-13 | Sashi             | W   | 0.554      | -            | -                | -                | -         |     2.76 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           16 |     2735 | 2024-03-09 | Endpoint          | W   | 0.527      | -            | -                | -                | -         |     1.15 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           15 |     2802 | 2024-03-06 | fnatic            | L   | 0.509      | -            | -                | -                | -         |    -5.21 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           14 |     2848 | 2024-03-05 | BetBoom           | W   | 0.501      | 0.500        | 0.414 (0.104)    | -                | -         |    12.36 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           13 |     2857 | 2024-03-04 | Rebels            | W   | 0.496      | -            | -                | -                | -         |     2.95 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           12 |     2863 | 2024-03-04 | AURA              | W   | 0.494      | -            | -                | -                | -         |     0.14 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           11 |     2929 | 2024-03-01 | Young Ninjas      | W   | 0.476      | -            | -                | -                | -         |     0.72 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           10 |     2944 | 2024-02-29 | AURA              | W   | 0.468      | -            | -                | -                | -         |     0.14 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            9 |     2960 | 2024-02-28 | BIG               | W   | 0.461      | -            | -                | -                | -         |     8.74 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            8 |     3395 | 2024-02-08 | Passion UA        | W   | 0.328      | -            | -                | -                | -         |     1.51 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            7 |     3533 | 2024-02-01 | Into the Breach   | L   | 0.281      | -            | -                | -                | -         |    -8.64 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            6 |     3552 | 2024-01-31 | 9INE              | W   | 0.274      | -            | -                | -                | -         |     0.08 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            5 |     3577 | 2024-01-29 | Metizport         | L   | 0.261      | -            | -                | -                | -         |    -7.46 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            4 |     3643 | 2024-01-25 | Into the Breach   | W   | 0.234      | -            | -                | -                | -         |     0.16 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            3 |     4213 | 2024-01-09 | Entropiq          | L   | 0.130      | -            | -                | -                | -         |    -4.04 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            2 |     4226 | 2024-01-09 | IKLA              | W   | 0.129      | -            | -                | -                | -         |     0.04 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            1 |     4234 | 2024-01-09 | Sangal            | W   | 0.129      | -            | -                | -                | -         |     0.98 | CeRq, CYPHER, faveN, hampus, lauNX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($104,443.52)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.35) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-11 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-06-02 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-05-22 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-05-18 |      0.996 | $500.00        | $497.99         |
| 2024-05-12 |      0.956 | $2,000.00      | $1,911.94       |
| 2024-04-24 |      0.835 | $25,000.00     | $20,880.24      |
| 2024-04-22 |      0.821 | $20,000.00     | $16,425.25      |
| 2024-03-06 |      0.509 | $25,000.00     | $12,728.11      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
