### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [70](../standings_global.md)<br />
Regional Rank: [50]( ../standings_europe.md)<br />
Final Rank Value:  1020.9<br />
<br />
Final Rank Value (1020.9) = Starting Rank Value (977.8) + Head To Head Adjustments (43.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.388[<sup>1</sup>](#table2)
- Bounty Collected: 0.432[<sup>2</sup>](#table1)
- Opponent Network: 0.256[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.269<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 977.8
- 400 + ( ( 0.269 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 977.8


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
|           43 |      404 | 2024-06-14 | Permitta          | L   | 0.979      | -            | -                | -                | -         |   -18.63 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           42 |      506 | 2024-06-10 | RUSH B            | W   | 0.953      | -            | -                | -                | 0 (0.000) |    11.90 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           41 |      511 | 2024-06-10 | 3DMAX             | L   | 0.952      | -            | -                | -                | -         |    -9.71 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           40 |      517 | 2024-06-10 | SINNERS           | L   | 0.952      | -            | -                | -                | -         |   -14.47 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           39 |      551 | 2024-06-09 | Aurora            | L   | 0.946      | -            | -                | -                | -         |    -3.71 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           38 |      558 | 2024-06-09 | 9 Pandas          | W   | 0.946      | 0.143        | 0.126 (0.017)    | -                | 0 (0.000) |    19.47 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           37 |      567 | 2024-06-09 | Monte             | W   | 0.945      | -            | -                | -                | 0 (0.000) |    14.38 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           36 |      572 | 2024-06-09 | SAW               | L   | 0.945      | -            | -                | -                | -         |    -6.88 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           35 |      782 | 2024-06-05 | Aurora            | L   | 0.921      | -            | -                | -                | -         |    -1.95 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           34 |      832 | 2024-06-04 | Monte             | W   | 0.914      | 0.500        | 0.099 (0.045)    | 0.413 (0.189)    | 0 (0.000) |    14.83 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           33 |     1239 | 2024-05-20 | Sangal            | L   | 0.813      | -            | -                | -                | -         |    -8.98 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           32 |     1317 | 2024-05-17 | Zero Tenacity     | W   | 0.794      | 0.500        | 0.154 (0.061)    | 1.000 (0.397)    | 0 (0.000) |    15.01 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           31 |     1348 | 2024-05-16 | Aurora            | L   | 0.788      | -            | -                | -                | -         |    -1.20 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           30 |     1366 | 2024-05-16 | Eternal Fire      | L   | 0.786      | -            | -                | -                | -         |    -0.48 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           29 |     1406 | 2024-05-15 | B8                | W   | 0.781      | 0.500        | 0.246 (0.096)    | 1.000 (0.390)    | 0 (0.000) |    17.70 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           28 |     1589 | 2024-05-09 | Endpoint          | L   | 0.740      | -            | -                | -                | -         |   -12.24 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           27 |     1748 | 2024-05-01 | Passion UA        | L   | 0.687      | -            | -                | -                | -         |   -11.48 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           26 |     1762 | 2024-05-01 | fnatic            | L   | 0.685      | -            | -                | -                | -         |    -1.14 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           25 |     1787 | 2024-04-29 | 3DMAX             | L   | 0.674      | -            | -                | -                | -         |    -4.39 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           24 |     1797 | 2024-04-29 | Zero Tenacity     | W   | 0.673      | 0.500        | 0.154 (0.052)    | 1.000 (0.336)    | 0 (0.000) |    12.29 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           23 |     1834 | 2024-04-27 | Sangal            | W   | 0.660      | 0.500        | 0.232 (0.077)    | 0.893 (0.295)    | 0 (0.000) |    14.23 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           22 |     1862 | 2024-04-26 | SINNERS           | W   | 0.653      | 0.435        | -                | 0.744 (0.211)    | 0 (0.000) |    13.46 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           21 |     1890 | 2024-04-25 | ex-Guild Eagles   | W   | 0.647      | -            | -                | -                | 0 (0.000) |     9.22 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           20 |     1912 | 2024-04-24 | MOUZ NXT          | W   | 0.640      | 0.435        | 0.150 (0.042)    | 1.000 (0.278)    | -         |    13.62 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           19 |     1961 | 2024-04-21 | Nexus             | W   | 0.620      | 0.435        | -                | 0.432 (0.116)    | -         |     8.15 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           18 |     1964 | 2024-04-21 | B8                | L   | 0.619      | -            | -                | -                | -         |    -6.10 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           17 |     2021 | 2024-04-19 | Zero Tenacity     | L   | 0.608      | -            | -                | -                | -         |    -7.03 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           16 |     2120 | 2024-04-17 | HAVU              | W   | 0.594      | -            | -                | -                | -         |     4.23 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           15 |     2121 | 2024-04-17 | Permitta          | L   | 0.593      | -            | -                | -                | -         |    -8.50 | ArtFr0st, bl1x1, Jerry, Patsi, Qikert      |
|           14 |     2243 | 2024-04-11 | 500               | L   | 0.554      | -            | -                | -                | -         |   -13.04 | ArtFr0st, bl1x1, Jerry, Patsi, Qikert      |
|           13 |     2282 | 2024-04-10 | Aurora            | L   | 0.548      | -            | -                | -                | -         |    -0.46 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           12 |     2341 | 2024-04-09 | RUSH B            | L   | 0.541      | -            | -                | -                | -         |   -11.30 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           11 |     2513 | 2024-04-03 | MOUZ NXT          | L   | 0.501      | -            | -                | -                | -         |    -5.95 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           10 |     2524 | 2024-04-03 | Space             | W   | 0.500      | -            | -                | -                | -         |     5.43 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            9 |     2559 | 2024-04-02 | AMKAL             | L   | 0.494      | -            | -                | -                | -         |    -5.73 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            8 |     2568 | 2024-04-02 | Insilio           | L   | 0.492      | -            | -                | -                | -         |    -8.68 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            7 |     2579 | 2024-04-01 | Metizport         | W   | 0.487      | -            | -                | -                | -         |     7.45 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            6 |     2742 | 2024-03-21 | FORZE             | W   | 0.414      | 0.500        | 0.095 (0.020)    | -                | -         |     6.66 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            5 |     2924 | 2024-03-13 | 3DMAX             | W   | 0.360      | 0.500        | 0.209 (0.038)    | 1.000 (0.180)    | -         |     9.01 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            4 |     3041 | 2024-03-08 | B8                | W   | 0.327      | 0.500        | 0.246 (0.040)    | 1.000 (0.163)    | -         |     7.61 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            3 |     3096 | 2024-03-06 | Apeks             | W   | 0.314      | -            | -                | -                | -         |     5.99 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            2 |     3209 | 2024-03-02 | Gaimin Gladiators | L   | 0.286      | -            | -                | -                | -         |    -2.95 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            1 |     3240 | 2024-02-29 | Monte             | L   | 0.273      | -            | -                | -                | -         |    -2.53 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,506.36)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.948 | $6,500.00      | $6,159.44       |
| 2024-05-02 |      0.694 | $500.00        | $346.92         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
