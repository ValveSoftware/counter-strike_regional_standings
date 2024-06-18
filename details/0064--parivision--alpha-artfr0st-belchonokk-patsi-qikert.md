### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [64](../standings_global.md)<br />
Regional Rank: [47]( ../standings_europe.md)<br />
Final Rank Value:  1047.0<br />
<br />
Final Rank Value (1047.0) = Starting Rank Value (989.5) + Head To Head Adjustments (57.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.353[<sup>1</sup>](#table2)
- Bounty Collected: 0.460[<sup>2</sup>](#table1)
- Opponent Network: 0.348[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.290<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 989.5
- 400 + ( ( 0.290 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 989.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |      104 | 2024-06-14 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -20.16 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           44 |      206 | 2024-06-10 | RUSH B            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.66 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           43 |      211 | 2024-06-10 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -11.07 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           42 |      217 | 2024-06-10 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -16.77 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           41 |      251 | 2024-06-09 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -5.57 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           40 |      258 | 2024-06-09 | 9 Pandas          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    20.73 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           39 |      267 | 2024-06-09 | Monte             | W   | 1.000      | 0.143        | 0.189 (0.027)    | -                | 0 (0.000) |    22.36 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           38 |      272 | 2024-06-09 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -6.69 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           37 |      482 | 2024-06-05 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -2.96 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           36 |      532 | 2024-06-04 | Monte             | W   | 1.000      | 0.500        | 0.189 (0.095)    | 0.674 (0.337)    | 0 (0.000) |    24.39 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           35 |      941 | 2024-05-20 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -12.03 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           34 |     1019 | 2024-05-17 | Zero Tenacity     | W   | 0.990      | 0.500        | 0.153 (0.076)    | 1.000 (0.495)    | 0 (0.000) |    18.01 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           33 |     1050 | 2024-05-16 | Aurora            | L   | 0.984      | -            | -                | -                | -         |    -2.10 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           32 |     1068 | 2024-05-16 | Eternal Fire      | L   | 0.981      | -            | -                | -                | -         |    -0.46 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           31 |     1108 | 2024-05-15 | B8                | W   | 0.976      | 0.500        | 0.229 (0.112)    | 1.000 (0.488)    | 0 (0.000) |    22.24 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           30 |     1291 | 2024-05-09 | Endpoint          | L   | 0.936      | -            | -                | -                | -         |   -15.48 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           29 |     1450 | 2024-05-01 | Passion UA        | L   | 0.882      | -            | -                | -                | -         |   -15.46 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           28 |     1464 | 2024-05-01 | fnatic            | L   | 0.880      | -            | -                | -                | -         |    -2.27 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           27 |     1489 | 2024-04-29 | 3DMAX             | L   | 0.869      | -            | -                | -                | -         |    -5.90 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           26 |     1499 | 2024-04-29 | Zero Tenacity     | W   | 0.868      | 0.500        | 0.153 (0.067)    | 1.000 (0.434)    | 0 (0.000) |    14.74 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           25 |     1536 | 2024-04-27 | Sangal            | W   | 0.855      | 0.500        | 0.216 (0.092)    | 0.884 (0.378)    | 0 (0.000) |    17.44 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           24 |     1564 | 2024-04-26 | SINNERS           | W   | 0.848      | 0.435        | -                | 0.782 (0.288)    | 0 (0.000) |    16.61 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           23 |     1592 | 2024-04-25 | ex-Guild Eagles   | W   | 0.842      | -            | -                | -                | 0 (0.000) |    13.18 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           22 |     1614 | 2024-04-24 | MOUZ NXT          | W   | 0.835      | 0.435        | 0.158 (0.057)    | 1.000 (0.363)    | -         |    17.48 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           21 |     1663 | 2024-04-21 | Nexus             | W   | 0.815      | -            | -                | -                | -         |    11.05 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           20 |     1666 | 2024-04-21 | B8                | L   | 0.815      | -            | -                | -                | -         |    -8.50 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           19 |     1723 | 2024-04-19 | Zero Tenacity     | L   | 0.803      | -            | -                | -                | -         |   -10.18 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           18 |     1822 | 2024-04-17 | HAVU              | W   | 0.789      | -            | -                | -                | -         |     5.41 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           17 |     1823 | 2024-04-17 | Permitta          | L   | 0.789      | -            | -                | -                | -         |   -11.35 | ArtFr0st, bl1x1, Jerry, Patsi, Qikert      |
|           16 |     1945 | 2024-04-11 | 500               | L   | 0.749      | -            | -                | -                | -         |   -16.89 | ArtFr0st, bl1x1, Jerry, Patsi, Qikert      |
|           15 |     1984 | 2024-04-10 | Aurora            | L   | 0.743      | -            | -                | -                | -         |    -0.86 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           14 |     2043 | 2024-04-09 | RUSH B            | L   | 0.736      | -            | -                | -                | -         |   -16.00 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           13 |     2215 | 2024-04-03 | MOUZ NXT          | L   | 0.696      | -            | -                | -                | -         |    -9.12 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           12 |     2226 | 2024-04-03 | Space             | W   | 0.695      | -            | -                | -                | -         |     6.36 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           11 |     2261 | 2024-04-02 | AMKAL             | L   | 0.689      | -            | -                | -                | -         |    -7.14 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           10 |     2270 | 2024-04-02 | Insilio           | L   | 0.688      | -            | -                | -                | -         |   -12.71 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            9 |     2281 | 2024-04-01 | Metizport         | W   | 0.682      | 0.384        | -                | 0.587 (0.154)    | -         |    10.64 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            8 |     2445 | 2024-03-21 | FORZE             | W   | 0.609      | 0.500        | 0.096 (0.029)    | -                | -         |    10.24 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            7 |     2627 | 2024-03-13 | 3DMAX             | W   | 0.556      | 0.500        | 0.186 (0.052)    | 1.000 (0.278)    | -         |    13.30 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            6 |     2744 | 2024-03-08 | B8                | W   | 0.522      | 0.500        | 0.229 (0.060)    | 1.000 (0.261)    | -         |    11.95 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            5 |     2799 | 2024-03-06 | Apeks             | W   | 0.509      | -            | -                | -                | -         |    11.37 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            4 |     2912 | 2024-03-02 | Gaimin Gladiators | L   | 0.481      | -            | -                | -                | -         |    -3.52 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            3 |     2943 | 2024-02-29 | Monte             | L   | 0.468      | -            | -                | -                | -         |    -1.95 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            2 |     3925 | 2024-01-17 | Insilio           | L   | 0.183      | -            | -                | -                | -         |    -3.25 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            1 |     3995 | 2024-01-16 | EYEBALLERS        | L   | 0.176      | -            | -                | -                | -         |    -3.27 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,444.56)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-02 |      0.889 | $500.00        | $444.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
