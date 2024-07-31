### Roster Details<br />
Team Name: BLEED<br />
Roster: CeRq, CYPHER, faveN, hampus, VLDN<br />
Global Rank: [49](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [37]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1067.6<br />
<br />
Final Rank Value (1067.6) = Starting Rank Value (969.1) + Head To Head Adjustments (98.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.495[<sup>1</sup>](#table2)
- Bounty Collected: 0.397[<sup>2</sup>](#table1)
- Opponent Network: 0.211[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.276<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 969.1
- 400 + ( ( 0.276 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 969.1


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
|           43 |     2088 | 2024-05-11 | B8                | L   | 0.657      | -            | -                | -                | -         |   -10.43 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           42 |     2116 | 2024-05-09 | Sampi             | W   | 0.646      | 0.435        | -                | 1.000 (0.281)    | 0 (0.000) |     6.26 | CYPHER, draken, faveN, hampus, VLDN |
|           41 |     2158 | 2024-05-07 | 1WIN              | L   | 0.633      | -            | -                | -                | -         |   -13.94 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           40 |     2182 | 2024-05-06 | Insilio           | W   | 0.624      | -            | -                | -                | 0 (0.000) |     6.43 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           39 |     2248 | 2024-05-02 | AMKAL             | L   | 0.600      | -            | -                | -                | -         |    -7.58 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           38 |     2282 | 2024-05-01 | MOUZ NXT          | L   | 0.591      | -            | -                | -                | -         |   -10.36 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           37 |     2314 | 2024-04-30 | Permitta          | W   | 0.584      | 0.384        | -                | 0.799 (0.179)    | 0 (0.000) |     5.49 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           36 |     2337 | 2024-04-28 | B8                | W   | 0.573      | 0.500        | 0.168 (0.048)    | 0.879 (0.252)    | 0 (0.000) |     8.07 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           35 |     2388 | 2024-04-26 | ex-Guild Eagles   | W   | 0.559      | -            | -                | -                | 0 (0.000) |     4.21 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           34 |     2396 | 2024-04-26 | DMS               | W   | 0.558      | -            | -                | -                | 0 (0.000) |     4.99 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           33 |     2436 | 2024-04-24 | Permitta          | W   | 0.546      | 0.435        | -                | 0.799 (0.190)    | 0 (0.000) |     6.11 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           32 |     2439 | 2024-04-24 | Nemiga            | L   | 0.545      | -            | -                | -                | -         |    -6.16 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           31 |     2455 | 2024-04-23 | B8                | W   | 0.539      | 0.500        | 0.168 (0.045)    | 0.879 (0.237)    | 0 (0.000) |     8.08 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           30 |     2464 | 2024-04-23 | Sashi             | L   | 0.538      | -            | -                | -                | -         |    -6.29 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           29 |     2473 | 2024-04-22 | Sangal            | W   | 0.532      | 0.500        | 0.221 (0.059)    | 0.824 (0.219)    | 0 (0.000) |     9.61 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           28 |     2475 | 2024-04-22 | Gaimin Gladiators | W   | 0.531      | 0.384        | 0.040 (0.008)    | -                | 0 (0.000) |     8.41 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           27 |     2490 | 2024-04-21 | Illuminar         | W   | 0.526      | -            | -                | -                | -         |     0.93 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           26 |     2496 | 2024-04-21 | BIG               | W   | 0.525      | 0.384        | 0.133 (0.027)    | -                | -         |    12.19 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           25 |     2520 | 2024-04-20 | MOUZ NXT          | W   | 0.519      | 0.500        | 0.141 (0.037)    | 1.000 (0.260)    | -         |     8.73 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           24 |     2576 | 2024-04-19 | Sampi             | W   | 0.511      | 0.384        | -                | 1.000 (0.196)    | -         |     5.75 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           23 |     2633 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.504      | 0.500        | -                | 0.564 (0.142)    | -         |     6.96 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           22 |     2657 | 2024-04-17 | 3DMAX             | L   | 0.498      | -            | -                | -                | -         |    -0.51 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           21 |     2685 | 2024-04-16 | KOI               | W   | 0.493      | 0.384        | 0.060 (0.011)    | -                | -         |     9.56 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           20 |     2697 | 2024-04-16 | SINNERS           | W   | 0.490      | -            | -                | -                | -         |     9.54 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           19 |     2875 | 2024-04-09 | Alliance          | W   | 0.446      | -            | -                | -                | -         |     4.35 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           18 |     2888 | 2024-04-09 | HAVU              | W   | 0.445      | -            | -                | -                | -         |     2.31 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           17 |     2969 | 2024-04-05 | BetBoom           | L   | 0.419      | -            | -                | -                | -         |    -1.13 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           16 |     2972 | 2024-04-05 | Alliance          | W   | 0.419      | -            | -                | -                | -         |     4.25 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           15 |     3013 | 2024-04-04 | Benched Heroes    | W   | 0.412      | -            | -                | -                | -         |     0.45 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           14 |     3019 | 2024-04-04 | BetBoom           | L   | 0.411      | -            | -                | -                | -         |    -1.09 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           13 |     3088 | 2024-04-02 | Passion UA        | W   | 0.399      | 0.384        | 0.172 (0.026)    | 1.000 (0.153)    | -         |     7.09 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           12 |     3111 | 2024-04-01 | Enterprise        | L   | 0.391      | -            | -                | -                | -         |    -7.51 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           11 |     3461 | 2024-03-13 | Sashi             | W   | 0.264      | -            | -                | -                | -         |     5.80 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           10 |     3562 | 2024-03-09 | Endpoint          | W   | 0.237      | -            | -                | -                | -         |     2.84 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            9 |     3629 | 2024-03-06 | fnatic            | L   | 0.219      | -            | -                | -                | -         |    -0.25 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            8 |     3675 | 2024-03-05 | BetBoom           | W   | 0.212      | 0.500        | 0.259 (0.027)    | -                | -         |     6.19 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            7 |     3684 | 2024-03-04 | Rebels            | W   | 0.206      | -            | -                | -                | -         |     3.56 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            6 |     3690 | 2024-03-04 | AURA              | W   | 0.205      | -            | -                | -                | -         |     0.44 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            5 |     3756 | 2024-03-01 | Young Ninjas      | W   | 0.186      | -            | -                | -                | -         |     1.39 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            4 |     3771 | 2024-02-29 | AURA              | W   | 0.178      | -            | -                | -                | -         |     0.38 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            3 |     3787 | 2024-02-28 | BIG               | W   | 0.171      | 0.500        | 0.133 (0.011)    | -                | -         |     4.43 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            2 |     3822 | 2024-02-26 | MOUZ NXT          | L   | 0.159      | -            | -                | -                | -         |    -1.91 | CeRq, faveN, hampus, lauNX, VLDN    |
|            1 |     4222 | 2024-02-08 | Passion UA        | W   | 0.038      | -            | -                | -                | -         |     0.80 | CeRq, CYPHER, faveN, hampus, lauNX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($31,433.30)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      0.706 | $500.00        | $353.09         |
| 2024-05-12 |      0.666 | $2,000.00      | $1,332.34       |
| 2024-04-24 |      0.545 | $25,000.00     | $13,635.33      |
| 2024-04-22 |      0.531 | $20,000.00     | $10,629.32      |
| 2024-03-06 |      0.219 | $25,000.00     | $5,483.21       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
