### Roster Details<br />
Team Name: BLEED<br />
Roster: CYPHER, faveN, hampus, jkaem, nawwk<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [31](../standings_global.md)<br />
Regional Rank: [21]( ../standings_europe.md)<br />
Final Rank Value:  1266.5<br />
<br />
Final Rank Value (1266.5) = Starting Rank Value (1375.4) + Head To Head Adjustments (-108.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.686[<sup>1</sup>](#table2)
- Bounty Collected: 0.485[<sup>2</sup>](#table1)
- Opponent Network: 0.359[<sup>2</sup>](#table1)
- LAN Wins: 0.320[<sup>2</sup>](#table1)

The average of these factors is 0.462<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1375.4
- 400 + ( ( 0.462 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1375.4


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
|           67 |      189 | 2024-06-15 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -19.41 | CYPHER, faveN, hampus, jkaem, nawwk |
|           66 |      198 | 2024-06-15 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -17.43 | CYPHER, faveN, hampus, jkaem, nawwk |
|           65 |      241 | 2024-06-14 | Monte             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.04 | CYPHER, faveN, hampus, jkaem, nawwk |
|           64 |      272 | 2024-06-13 | Aurora Young Blud | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.97 | CYPHER, faveN, hampus, jkaem, nawwk |
|           63 |      298 | 2024-06-12 | B8                | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.45 | CYPHER, faveN, hampus, jkaem, nawwk |
|           62 |      341 | 2024-06-10 | Nemiga            | L   | 0.992      | -            | -                | -                | -         |   -17.95 | CYPHER, faveN, hampus, jkaem, nawwk |
|           61 |      390 | 2024-06-09 | MOUZ NXT          | W   | 0.986      | 0.500        | 0.152 (0.075)    | 1.000 (0.493)    | 0 (0.000) |     9.42 | CYPHER, faveN, hampus, jkaem, nawwk |
|           60 |      440 | 2024-06-08 | 9INE              | W   | 0.980      | -            | -                | -                | 0 (0.000) |     2.06 | CYPHER, faveN, hampus, jkaem, nawwk |
|           59 |      494 | 2024-06-07 | Rebels            | L   | 0.974      | -            | -                | -                | -         |   -23.05 | CYPHER, faveN, hampus, jkaem, nawwk |
|           58 |      639 | 2024-06-05 | Romania           | W   | 0.959      | -            | -                | -                | 0 (0.000) |     1.50 | CYPHER, faveN, hampus, jkaem, nawwk |
|           57 |      727 | 2024-06-02 | The MongolZ       | L   | 0.939      | -            | -                | -                | -         |    -1.02 | CYPHER, faveN, hampus, jkaem, nawwk |
|           56 |      736 | 2024-06-02 | Aurora            | W   | 0.937      | 0.500        | 0.518 (0.243)    | 0.853 (0.399)    | 1 (0.937) |    23.32 | CYPHER, faveN, hampus, jkaem, nawwk |
|           55 |      766 | 2024-06-01 | The MongolZ       | L   | 0.931      | -            | -                | -                | -         |    -0.90 | CYPHER, faveN, hampus, jkaem, nawwk |
|           54 |      824 | 2024-05-29 | ATOX              | W   | 0.917      | -            | -                | -                | 1 (0.917) |     4.23 | CYPHER, faveN, hampus, jkaem, nawwk |
|           53 |      848 | 2024-05-28 | Chinggis Warriors | W   | 0.910      | -            | -                | -                | 1 (0.910) |     1.28 | CYPHER, faveN, hampus, jkaem, nawwk |
|           52 |     1037 | 2024-05-21 | Zero Tenacity     | L   | 0.860      | -            | -                | -                | -         |   -19.43 | CYPHER, faveN, hampus, jkaem, nawwk |
|           51 |     1070 | 2024-05-20 | 9 Pandas          | W   | 0.853      | 0.500        | 0.125 (0.053)    | 0.625 (0.267)    | 0 (0.000) |     7.44 | CYPHER, faveN, hampus, jkaem, nawwk |
|           50 |     1108 | 2024-05-19 | MOUZ NXT          | W   | 0.845      | 0.500        | 0.152 (0.064)    | 1.000 (0.422)    | -         |     7.19 | CYPHER, faveN, hampus, jkaem, nawwk |
|           49 |     1161 | 2024-05-17 | Monte             | L   | 0.833      | -            | -                | -                | -         |   -13.83 | CYPHER, faveN, hampus, jkaem, nawwk |
|           48 |     1250 | 2024-05-15 | Gaimin Gladiators | L   | 0.819      | -            | -                | -                | -         |   -18.40 | CYPHER, faveN, hampus, jkaem, nawwk |
|           47 |     1258 | 2024-05-15 | MOUZ NXT          | W   | 0.818      | 0.500        | 0.152 (0.062)    | 1.000 (0.409)    | -         |     6.04 | CYPHER, faveN, hampus, jkaem, nawwk |
|           46 |     1394 | 2024-05-11 | B8                | L   | 0.791      | -            | -                | -                | -         |   -18.52 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           45 |     1422 | 2024-05-09 | Slovakia          | W   | 0.781      | 0.435        | -                | 0.891 (0.302)    | -         |     3.21 | CYPHER, draken, faveN, hampus, VLDN |
|           44 |     1464 | 2024-05-07 | 1WIN              | L   | 0.767      | -            | -                | -                | -         |   -20.92 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           43 |     1488 | 2024-05-06 | Insilio           | W   | 0.758      | -            | -                | -                | -         |     3.23 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           42 |     1554 | 2024-05-02 | AMKAL             | L   | 0.734      | -            | -                | -                | -         |   -16.95 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           41 |     1588 | 2024-05-01 | MOUZ NXT          | L   | 0.725      | -            | -                | -                | -         |   -18.59 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           40 |     1620 | 2024-04-30 | Permitta          | W   | 0.718      | -            | -                | -                | -         |     2.22 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           39 |     1643 | 2024-04-28 | B8                | W   | 0.708      | 0.500        | 0.242 (0.086)    | 1.000 (0.354)    | -         |     3.85 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           38 |     1694 | 2024-04-26 | ex-Guild Eagles   | W   | 0.693      | -            | -                | -                | -         |     1.82 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           37 |     1702 | 2024-04-26 | DMS               | W   | 0.692      | -            | -                | -                | -         |     1.37 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           36 |     1742 | 2024-04-24 | Permitta          | W   | 0.680      | -            | -                | -                | -         |     2.47 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           35 |     1745 | 2024-04-24 | Nemiga            | L   | 0.680      | -            | -                | -                | -         |   -13.23 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           34 |     1761 | 2024-04-23 | B8                | W   | 0.673      | 0.500        | 0.242 (0.081)    | 1.000 (0.337)    | -         |     3.56 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           33 |     1770 | 2024-04-23 | Sashi             | L   | 0.672      | -            | -                | -                | -         |   -15.97 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           32 |     1779 | 2024-04-22 | Sangal            | W   | 0.666      | 0.500        | 0.231 (0.077)    | 0.853 (0.284)    | -         |     4.01 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           31 |     1781 | 2024-04-22 | Gaimin Gladiators | W   | 0.666      | -            | -                | -                | -         |     5.94 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           30 |     1796 | 2024-04-21 | Illuminar         | W   | 0.660      | -            | -                | -                | -         |     0.48 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           29 |     1802 | 2024-04-21 | BIG               | W   | 0.659      | 0.384        | 0.215 (0.054)    | -                | -         |    10.60 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           28 |     1826 | 2024-04-20 | MOUZ NXT          | W   | 0.653      | 0.500        | -                | 1.000 (0.327)    | -         |     3.84 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           27 |     1882 | 2024-04-19 | Slovakia          | W   | 0.645      | -            | -                | -                | -         |     2.10 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           26 |     1939 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.638      | -            | -                | -                | -         |     2.54 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           25 |     1963 | 2024-04-17 | 3DMAX             | L   | 0.632      | -            | -                | -                | -         |   -13.82 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           24 |     1991 | 2024-04-16 | KOI               | W   | 0.627      | -            | -                | -                | -         |     4.89 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           23 |     2003 | 2024-04-16 | SINNERS           | W   | 0.625      | -            | -                | -                | -         |     4.65 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           22 |     2181 | 2024-04-09 | Alliance          | W   | 0.580      | -            | -                | -                | -         |     1.39 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           21 |     2194 | 2024-04-09 | HAVU              | W   | 0.579      | -            | -                | -                | -         |     0.55 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           20 |     2275 | 2024-04-05 | BetBoom           | L   | 0.553      | -            | -                | -                | -         |    -3.76 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           19 |     2278 | 2024-04-05 | Alliance          | W   | 0.553      | -            | -                | -                | -         |     1.30 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           18 |     2319 | 2024-04-04 | Benched Heroes    | W   | 0.546      | -            | -                | -                | -         |     0.07 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           17 |     2325 | 2024-04-04 | BetBoom           | L   | 0.545      | -            | -                | -                | -         |    -3.81 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           16 |     2394 | 2024-04-02 | Passion UA        | W   | 0.533      | -            | -                | -                | -         |     1.59 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           15 |     2417 | 2024-04-01 | Enterprise        | L   | 0.526      | -            | -                | -                | -         |   -14.98 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           14 |     2767 | 2024-03-13 | Sashi             | W   | 0.398      | -            | -                | -                | -         |     2.21 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           13 |     2868 | 2024-03-09 | Endpoint          | W   | 0.371      | -            | -                | -                | -         |     0.80 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           12 |     2935 | 2024-03-06 | fnatic            | L   | 0.353      | -            | -                | -                | -         |    -2.83 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           11 |     2981 | 2024-03-05 | BetBoom           | W   | 0.346      | 0.500        | 0.406 (0.070)    | -                | -         |     8.70 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           10 |     2990 | 2024-03-04 | Rebels            | W   | 0.341      | -            | -                | -                | -         |     1.78 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            9 |     2996 | 2024-03-04 | AURA              | W   | 0.339      | -            | -                | -                | -         |     0.09 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            8 |     3062 | 2024-03-01 | Young Ninjas      | W   | 0.320      | -            | -                | -                | -         |     0.42 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            7 |     3077 | 2024-02-29 | AURA              | W   | 0.312      | -            | -                | -                | -         |     0.09 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            6 |     3093 | 2024-02-28 | BIG               | W   | 0.305      | -            | -                | -                | -         |     5.29 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            5 |     3528 | 2024-02-08 | Passion UA        | W   | 0.172      | -            | -                | -                | -         |     0.71 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            4 |     3666 | 2024-02-01 | Into the Breach   | L   | 0.125      | -            | -                | -                | -         |    -3.87 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            3 |     3685 | 2024-01-31 | 9INE              | W   | 0.118      | -            | -                | -                | -         |     0.03 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            2 |     3710 | 2024-01-29 | Metizport         | L   | 0.106      | -            | -                | -                | -         |    -3.03 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            1 |     3776 | 2024-01-25 | Into the Breach   | W   | 0.078      | -            | -                | -                | -         |     0.05 | CeRq, CYPHER, faveN, hampus, lauNX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($89,959.57)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.35) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-11 |      1.000 | $12,500.00     | $12,493.81      |
| 2024-06-02 |      0.939 | $25,000.00     | $23,475.38      |
| 2024-05-22 |      0.867 | $12,500.00     | $10,833.15      |
| 2024-05-18 |      0.840 | $500.00        | $420.15         |
| 2024-05-12 |      0.800 | $2,000.00      | $1,600.59       |
| 2024-04-24 |      0.680 | $25,000.00     | $16,988.41      |
| 2024-04-22 |      0.666 | $20,000.00     | $13,311.78      |
| 2024-03-06 |      0.353 | $25,000.00     | $8,836.28       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
